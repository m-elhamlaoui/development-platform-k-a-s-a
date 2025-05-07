import axios from 'axios';

const API_URL = 'http://localhost:8080/api/scores/';

class ScoreService {
  // Enregistrer un score
  async saveScore(nomQuiz, score) {
    const token = localStorage.getItem('token');
    
    if (!token) {
      throw new Error("Token JWT manquant. L'utilisateur doit être connecté.");
    }

    console.log('Envoi au backend:', { nomQuiz, score });

    try {
      const response = await axios.post(
        API_URL,
        { nomQuiz, score },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data; // Retourner la réponse en cas de succès
    } catch (error) {
      console.error("Erreur lors de l'enregistrement du score:", error.response || error.message);
      throw error; // Relancer l'erreur pour la gérer côté appelant
    }
  }

  // Récupérer tous les scores de l'utilisateur
  async getUserScores() {
    const token = localStorage.getItem('token');
    
    if (!token) {
      throw new Error("Token JWT manquant. L'utilisateur doit être connecté.");
    }

    try {
      const response = await axios.get(
        API_URL + 'user',
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data; // Retourner les scores en cas de succès
    } catch (error) {
      console.error("Erreur lors de la récupération des scores:", error.response || error.message);
      throw error; // Relancer l'erreur pour la gérer côté appelant
    }
  }
}

export default new ScoreService();
