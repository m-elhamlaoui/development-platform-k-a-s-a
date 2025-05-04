import InputField from "../../Components/Auth/InputField";
import SocialLogin from "../../Components/Auth/SocialLogin";
import { Link } from "react-router-dom";
import "./styles/auth.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="form-title">Log in with</h2>

        <form className="login-form">
          <InputField type="email" placeholder="Email address" />
          <InputField type="password" placeholder="Password" />
          <a href="#" className="forgot-password-link">Forgot password?</a>
          <button type="submit" className="login-button">Log In</button>
          <p className="separator"><span>or</span></p>
          <SocialLogin />
        </form>

        <p className="signup-prompt">
          Don’t have an account? <Link to="/signup" className="signup-link">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
