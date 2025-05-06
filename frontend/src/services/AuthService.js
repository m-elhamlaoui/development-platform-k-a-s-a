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
  const user = getCurrentUser();  
  return user?.token;  
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