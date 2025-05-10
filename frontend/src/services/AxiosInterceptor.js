import axios from "axios";    
import AuthService from "./AuthService";    
    
// Ajouter un intercepteur de requête    
axios.interceptors.request.use(    
  (config) => {    
    const token = AuthService.getToken();    
    console.log("Request URL:", config.url);  
    console.log("Token available:", !!token);  
      
    if (token) {    
      console.log("Token value (first 20 chars):", token.substring(0, 20));  
      config.headers["Authorization"] = `Bearer ${token}`;    
      console.log("Authorization header set:", config.headers["Authorization"].substring(0, 30) + "...");  
    } else {    
      console.warn("No token available for request to:", config.url);  
    }    
      
    return config;    
  },    
  (error) => {    
    console.error("Error in request interceptor:", error);  
    return Promise.reject(error);    
  }    
);    
    
// Ajouter un intercepteur de réponse    
axios.interceptors.response.use(    
  (response) => {    
    console.log("Response received from:", response.config.url);  
    console.log("Response status:", response.status);  
    return response;    
  },    
  (error) => {    
    console.error("Error in response interceptor:", error);  
    console.log("Response error status:", error.response?.status);  
    console.log("Response error data:", error.response?.data);  
      
    if (error.response && error.response.status === 401) {    
      // Si le token est expiré ou invalide, déconnectez l'utilisateur    
      console.log("401 Unauthorized detected, logging out user");  
      AuthService.logout();    
      window.location.href = "/login";    
    }    
    return Promise.reject(error);    
  }    
);    
    
export default axios;