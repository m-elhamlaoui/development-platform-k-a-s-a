import axios from "axios";  
import AuthService from "./AuthService";  
  
// Ajouter un intercepteur de requête  
axios.interceptors.request.use(  
  (config) => {  
    const token = AuthService.getToken();  
    if (token) {  
      config.headers["Authorization"] = `Bearer ${token}`;  
    }  
    return config;  
  },  
  (error) => {  
    return Promise.reject(error);  
  }  
);  
  
// Ajouter un intercepteur de réponse  
axios.interceptors.response.use(  
  (response) => {  
    return response;  
  },  
  (error) => {  
    if (error.response && error.response.status === 401) {  
      // Si le token est expiré ou invalide, déconnectez l'utilisateur  
      AuthService.logout();  
      window.location.href = "/login";  
    }  
    return Promise.reject(error);  
  }  
);  
  
export default axios;