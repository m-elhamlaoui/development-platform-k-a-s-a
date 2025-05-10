import { useState, useEffect } from "react";  
import { useNavigate } from "react-router-dom";  
import mercure from "../../assets/mercure.jpg";  
import mars from "../../assets/mars.jpeg";  
import jupiter from "../../assets/jupiter.png";  
import saturne from "../../assets/saturne.jpeg";  
import Uranus from "../../assets/Uranus.jpg";  
import terre from "../../assets/terre.jpg";  
import venus from "../../assets/venus.jpeg";  
import neptune from "../../assets/neptune.jpeg";  
import background from '../../assets/space.png';  
import ScoreService from "../../services/ScoreService";  
import AuthService from "../../services/AuthService";  
import "./Quiztitles.css";  
import Header from '../../Components/Header/Header';  
  
function Quiztitles() {  
  const navigate = useNavigate();  
  const [quizzes, setQuizzes] = useState([  
    { id: 1, title: "Mercure", image: mercure, score: 0 },  
    { id: 2, title: "Vénus", image: venus, score: 0 },  
    { id: 3, title: "Jupiter", image: jupiter, score: 0 },  
    { id: 4, title: "Saturne", image: saturne, score: 0 },  
    { id: 5, title: "Terre", image: terre, score: 0 },  
    { id: 6, title: "Uranus", image: Uranus, score: 0 },  
    { id: 7, title: "Neptune", image: neptune, score: 0 },  
    { id: 8, title: "Mars", image: mars, score: 0 },  
  ]);  
    
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  
  
  useEffect(() => {  
    // Charger les scores de l'utilisateur depuis le backend  
    setLoading(true);  
    setError(null);  
      
    // Vérifier si l'utilisateur est connecté  
    const token = AuthService.getToken();  
    console.log("Token disponible:", !!token);  
      
    if (!token) {  
      console.log("Aucun token trouvé, impossible de charger les scores");  
      setLoading(false);  
      setError("Vous devez être connecté pour voir vos scores");  
      return;  
    }  
      
    console.log("Tentative de récupération des scores...");  
      
    ScoreService.getUserScores()  
      .then(userScores => {  
        console.log("Scores reçus:", userScores);  
          
        // Ensure userScores is an array  
        if (!Array.isArray(userScores)) {  
          console.warn("Format de réponse inattendu, conversion en tableau vide");  
          userScores = [];  
        }  
          
        // Mettre à jour les scores dans le tableau des quizzes  
        setQuizzes(prevQuizzes =>   
          prevQuizzes.map(quiz => {  
            console.log(`Recherche du score pour ${quiz.title}`);  
            const matchingScore = userScores.find(s => s.nomQuiz === quiz.title);  
            console.log(`Score trouvé pour ${quiz.title}:`, matchingScore);  
            return {  
              ...quiz,  
              score: matchingScore ? matchingScore.score : 0  
            };  
          })  
        );  
        setLoading(false);  
      })  
      .catch(error => {  
        console.error('Erreur détaillée lors du chargement des scores:', error);  
        if (error.response) {  
          console.error("Réponse d'erreur du serveur:", error.response.data);  
          console.error("Status:", error.response.status);  
          setError(`Erreur ${error.response.status}: ${error.response.data}`);  
        } else {  
          setError("Erreur de connexion au serveur");  
        }  
        setLoading(false);  
      });  
  }, []);  
  
  return (  
    <div className="App" style={{ backgroundImage: `url(${background})` }}>  
      <div className="header">  
        <Header />  
      </div>  
      <h1 style={{ color: 'white', marginBottom: '2rem' }}>Quiz Planètes</h1>  
        
      {error && (  
        <div style={{ color: 'red', backgroundColor: 'rgba(0,0,0,0.5)', padding: '1rem', borderRadius: '5px', marginBottom: '1rem' }}>  
          {error}  
        </div>  
      )}  
        
      {loading ? (  
        <div style={{ color: 'white' }}>Chargement des scores...</div>  
      ) : (  
        quizzes.map((quiz) => (  
          <div key={quiz.id} style={{  
            width: '60%',  
            height: '190px',  
            backgroundColor: '#371140',  
            borderRadius: '10px',  
            padding: '1rem',  
            marginBottom: '2rem',  
            display: 'flex',  
            alignItems: 'center',  
            color: 'white',  
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)'  
          }}>  
            <img  
              src={quiz.image}  
              alt={quiz.title}  
              style={{  
                width: '180px',  
                height: '180px',  
                borderRadius: '10px',  
                objectFit: 'cover',  
                marginRight: '1rem'  
              }}  
            />  
            <div style={{ flex: 1 }}>  
              <h2>{quiz.title}</h2>  
              <div style={{  
                height: '5px',  
                backgroundColor: '#ccc',  
                borderRadius: '5px',  
                marginTop: '0.5rem',  
                marginBottom: '0.5rem',  
                overflow: 'hidden'  
              }}>  
                <div style={{  
                  width: `${quiz.score}%`,  
                  height: '100%',  
                  backgroundColor: '#932dad'  
                }}></div>  
              </div>  
              <p style={{ marginBottom: '0.5rem' }}>{quiz.score}%</p>  
              <button  
                onClick={() => navigate(`/quizcontent?planet=${quiz.title}`)}  
                style={{  
                  backgroundColor: '#932dad',  
                  color: 'white',  
                  border: 'none',  
                  padding: '8px 16px',  
                  borderRadius: '6px',  
                  cursor: 'pointer'  
                }}  
              >  
                Commencer le quiz  
              </button>  
            </div>  
          </div>  
        ))  
      )}  
    </div>  
  );  
}  
  
export default Quiztitles;