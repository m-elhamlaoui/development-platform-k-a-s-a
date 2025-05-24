import axios from 'axios';  
import AuthService from './AuthService';  
  
const API_URL = 'http://localhost:8080/api/scores/';  
  
class ScoreService {  
  // Enregistrer un score  
  async saveScore(nomQuiz, score) {  
    if (!AuthService.isAuthenticated()) {  
      console.error("Token JWT manquant dans saveScore");  
      throw new Error("Token JWT manquant. L'utilisateur doit être connecté.");  
    }  
    
    console.log('Envoi au backend:', { nomQuiz, score });  
      
    try {  
      // Let the interceptor handle the token  
      const response = await axios.post(  
        API_URL,  
        { nomQuiz, score }  
      );  
      console.log('Réponse complète du backend:', response);  
      return response.data;  
    } catch (error) {  
      console.error("Erreur détaillée lors de l'enregistrement du score:", error);  
      if (error.response) {  
        console.error("Réponse d'erreur du serveur:", error.response.data);  
        console.error("Status:", error.response.status);  
      }  
      throw error;  
    }  
  }
  
  // Récupérer tous les scores de l'utilisateur  
  async getUserScores() {  
    const token = AuthService.getToken();  
      
    if (!token) {  
      console.error("Token JWT manquant dans getUserScores");  
      throw new Error("Token JWT manquant. L'utilisateur doit être connecté.");  
    }  
  
    console.log('Récupération des scores avec le token:', token.substring(0, 10) + '...');  
  
    try {  
      const response = await axios.get(  
        API_URL + 'user',  
        { headers: { Authorization: `Bearer ${token}` } }  
      );  
      console.log('Réponse complète du backend pour getUserScores:', response);  
        
      // Ensure we always return an array  
      if (Array.isArray(response.data)) {  
        return response.data;  
      } else {  
        console.warn("La réponse n'est pas un tableau:", response.data);  
        return [];  
      }  
    } catch (error) {  
      console.error("Erreur détaillée lors de la récupération des scores:", error);  
      if (error.response) {  
        console.error("Réponse d'erreur du serveur:", error.response.data);  
        console.error("Status:", error.response.status);  
      }  
      throw error;  
    }  
  }  
}  
  
export default new ScoreService();