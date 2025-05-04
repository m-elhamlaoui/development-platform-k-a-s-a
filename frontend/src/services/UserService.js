import axios from "axios";  
import AuthService from "./AuthService";  
  
const API_URL = "http://localhost:8080/api/utilisateurs/";  
  
const getAllUsers = () => {  
  return axios.get(API_URL);  
};  
  
const getUserById = (id) => {  
  return axios.get(API_URL + id);  
};  
  
const updateUser = (id, userData) => {  
  return axios.put(API_URL + id, userData);  
};  
  
const deleteUser = (id) => {  
  return axios.delete(API_URL + id);  
};  
  
const UserService = {  
  getAllUsers,  
  getUserById,  
  updateUser,  
  deleteUser  
};  
  
export default UserService;