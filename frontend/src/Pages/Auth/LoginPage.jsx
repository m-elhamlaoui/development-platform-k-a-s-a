import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";  

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
        <h2 className="form-title">{isLogin ? "Se connecter  " : "S'inscrire "}</h2>  

        {/* ✅ Message de succès après inscription */}
        {isLogin && fromSignup && (
          <div className="success-message">
            Inscription réussie! Veuillez se connecter.
          </div>
        )}

        {error && <p className="error-message">{error}</p>}  
  
        {isLogin ? (  
          <form onSubmit={handleLogin} className="login-form">  
            <InputField   
              type="email"   
              placeholder=" Email"   
              value={email}  
              onChange={(e) => setEmail(e.target.value)}  
            />  
            <InputField   
              type="password"   
              placeholder="mot-de-passe"   
              value={password}  
              onChange={(e) => setPassword(e.target.value)}  
            />  
             
            <button type="submit" className="login-button">Connexion</button>  
             
          </form>  
        ) : (  
          <SignUpForm />  
        )}  
  
        <p className="signup-prompt">  
          {isLogin ? (  
            <>  
              Vous n'avez pas de compte?{" "}  
              <Link to="/signup" className="signup-link">Inscription</Link>  
            </>  
          ) : (  
            <>  
              Vous avez déjà un compte ?{" "}  
              <Link to="/login" className="signup-link">Connexion</Link>  
            </>  
          )}  
        </p>  
      </div>  
    </div>  
  );  
};  
  
export default LoginPage;