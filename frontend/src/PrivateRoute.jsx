import { Navigate } from "react-router-dom";  
import AuthService from "./services/AuthService";  
  
const PrivateRoute = ({ children }) => {  
  const isAuthenticated = AuthService.isAuthenticated();  
    
  return isAuthenticated ? children : <Navigate to="/login" />;  
};  
  
export default PrivateRoute;
