import { useState } from "react";  
import InputField from "./InputField";  

import { useNavigate } from "react-router-dom";  
import AuthService from "../../services/AuthService";  
  
const SignUpForm = () => {  
  const [nom, setNom] = useState("");  
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  
  const [confirmPassword, setConfirmPassword] = useState("");  
  const [error, setError] = useState("");  
  const navigate = useNavigate();  
  
  const handleSignUp = async (e) => {  
    e.preventDefault();  
    setError("");  
      
    if (password !== confirmPassword) {  
      setError("Les mots de passe ne correspondent pas");  
      return;  
    }  
      
    try {  
      const response = await AuthService.register(nom, email, password);  
      // Rediriger vers la page d'accueil  
      navigate("/login", {
  state: { fromSignup: true }
});
  
    } catch (err) {  
      setError("Échec de l'inscription. Veuillez réessayer.");  
      console.error("Erreur d'inscription:", err);  
    }  
  };  
  
  return (  
    <form onSubmit={handleSignUp} className="login-form">
 
      {error && <p className="error-message">{error}</p>}  
        
     
      <InputField   
        type="text"   
        placeholder="Nom complet"   
        value={nom}  
        onChange={(e) => setNom(e.target.value)}  
      />  
      <InputField   
        type="email"   
        placeholder="Email "   
        value={email}  
        onChange={(e) => setEmail(e.target.value)}  
      />  
      <InputField   
        type="password"   
        placeholder="Mot-de-passe"   
        value={password}  
        onChange={(e) => setPassword(e.target.value)}  
      />  
      <InputField   
        type="password"   
        placeholder="Confirmer Mot-de-passe"   
        value={confirmPassword}  
        onChange={(e) => setConfirmPassword(e.target.value)}  
      />  
        
      <button type="submit" className="signup-button">Inscription</button>  
       
    </form>  
  );  
};  
  
export default SignUpForm;