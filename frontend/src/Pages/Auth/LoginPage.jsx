import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";  
import SocialLogin from "../../Components/Auth/SocialLogin";  
import InputField from "../../Components/Auth/InputField";  
import SignUpForm from "../../Components/Auth/SignUpForm";  
import AuthService from "../../services/AuthService";  
import "./styles/auth.css";
  
const LoginPage = () => {
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  
  const [error, setError] = useState("");  
  const navigate = useNavigate();  
  const location = useLocation(); 
  const fromSignup = location.state?.fromSignup || false;
  
  const isLogin = location.pathname === "/login";  
  
  const handleLogin = async (e) => {  
    e.preventDefault();  
    setError("");  
    try {  
      await AuthService.login(email, password);  
      navigate("/");  
    } catch (err) {  
      setError("Échec de la connexion. Veuillez vérifier vos identifiants.");  
      console.error("Erreur de connexion:", err);  
    }  
  };  
  
  return (  
    <div className="login-page">  
      <div className="login-container">  
        <h2 className="form-title">{isLogin ? "Log in with" : "Sign up with"}</h2>  

        {/* ✅ Message de succès après inscription */}
        {isLogin && fromSignup && (
          <div className="success-message">
            Registration successful! Please log in.
          </div>
        )}

        {error && <p className="error-message">{error}</p>}  
  
        {isLogin ? (  
          <form onSubmit={handleLogin} className="login-form">  
            <InputField   
              type="email"   
              placeholder="Email address"   
              value={email}  
              onChange={(e) => setEmail(e.target.value)}  
            />  
            <InputField   
              type="password"   
              placeholder="Password"   
              value={password}  
              onChange={(e) => setPassword(e.target.value)}  
            />  
             
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
              <Link to="/signup" className="signup-link">Sign up</Link>  
            </>  
          ) : (  
            <>  
              Already have an account?{" "}  
              <Link to="/login" className="signup-link">Log in</Link>  
            </>  
          )}  
        </p>  
      </div>  
    </div>  
  );  
};  
  
export default LoginPage;
