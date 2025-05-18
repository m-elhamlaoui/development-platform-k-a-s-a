import axios from "axios";  
  
const API_URL = "http://localhost:8080/api/auth/";  
  
const register = (nom, email, motDePasse) => {  
  return axios.post(API_URL + "register", {  
    nom,  
    email,  
    motDePasse,  
  });  
};  
  
const login = (email, motDePasse) => {  
  return axios  
    .post(API_URL + "authenticate", {  
      email,  
      motDePasse,  
    })  
    .then((response) => {  
      if (response.data.token) {  
        localStorage.setItem("user", JSON.stringify(response.data));  
      }  
      return response.data;  
    });  
};  
  
const logout = () => {  
  localStorage.removeItem("user");  
};  
  
const getCurrentUser = () => {  
  return JSON.parse(localStorage.getItem("user"));  
};  
  
const isAuthenticated = () => {  
  const user = getCurrentUser();  
  return !!user && !!user.token;  
};  
  
const getToken = () => {  
  try {  
    const userStr = localStorage.getItem('user');  
    if (!userStr) {  
      console.log("No user data found in localStorage");  
      return null;  
    }  
      
    const user = JSON.parse(userStr);  
    if (!user.token) {  
      console.log("Token property not found in user object");  
      return null;  
    }  
      
    console.log("Token successfully extracted from localStorage");  
    return user.token;  
  } catch (e) {  
    console.error('Error parsing user from localStorage:', e);  
    return null;  
  }  
};
  
const AuthService = {  
  register,  
  login,  
  logout,  
  getCurrentUser,  
  isAuthenticated,  
  getToken,  
};  
  
export default AuthService;