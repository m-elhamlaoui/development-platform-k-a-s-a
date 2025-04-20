import { useState } from "react";
import SocialLogin from "../../Components/Auth/SocialLogin";
import InputField from "../../Components/Auth/InputField";
import SignUpForm from "../../Components/Auth/SignUpForm";
import "./styles/auth.css";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);


  

  return (
    <div className="login-page" > {/* Utiliser la nouvelle classe ici */}
      <div className="login-container">
        <h2 className="form-title">{isLogin ? "Log in with" : "Sign up with"}</h2>



        {isLogin ? (
          <form action="#" className="login-form">
            <InputField type="email" placeholder="Email address" />
            <InputField type="password" placeholder="Password" />
            <a href="#" className="forgot-password-link">Forgot password?</a>
            <button type="submit" className="login-button">Log In</button>
            <p className="separator"><span>or</span></p>
            <SocialLogin />
            
          </form>
        ) : (
          <SignUpForm />
        )}

        <p className="signup-prompt">
          {isLogin ? (
            <>
              Don&apos;t have an account?{" "}
              <a href="#" className="signup-link" onClick={() => setIsLogin(false)}>
                Sign up
              </a>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <a href="#" className="signup-link" onClick={() => setIsLogin(true)}>
                Log in
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;