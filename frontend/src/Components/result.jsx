import { useState } from "react"; 
import { useNavigate } from 'react-router-dom';

import mercure from "../assets/mercure.jpg"; // À remplacer par une image dynamique  
  
const Result = ({ userAnswers, questions, resetQuiz = () => {}, score, planetName, onSaveScore }) => {  
  const [showDetails, setShowDetails] = useState(false);  
  const [scoreSaved, setScoreSaved] = useState(false);  
  const correctAnswers = userAnswers.filter((answer) => answer).length;  
  const navigate = useNavigate();

  // Utiliser le score passé en props ou le calculer si non fourni  
  const finalScore = score || Math.round((correctAnswers / questions.length) * 100);  

  // Fonction pour gérer la sauvegarde du score  
  const handleSaveScore = () => {  
    onSaveScore(finalScore);  
    setScoreSaved(true);  
    // Rediriger vers la page des titres de quiz après un court délai  
    setTimeout(() => {  
      navigate('/quiz');  
    }, 1500);  
  };  
  
  // Déterminer quelle image afficher en fonction de la planète  
  let planetImage = mercure; // Image par défaut  
  // Ici, vous pourriez ajouter une logique pour charger l'image correspondante à la planète  
    
  return (  
    <div style={{  
      width: '60%',  
      backgroundColor: '#371140',  
      borderRadius: '10px',  
      padding: '1rem',  
      color: 'white',  
      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',  
      display: 'flex',  
      margin: 'auto',  
      marginTop: '50px',  
      alignItems: 'center'  
    }}>  
      {/* Image de la planète associée au quiz */}  
      <img  
        src={planetImage}  
        alt={planetName || "Quiz"}  
        style={{  
          width: '180px',  
          height: '180px',  
          borderRadius: '10px',  
          objectFit: 'cover',  
          marginRight: '1rem'  
        }}  
      />  
  
      <div style={{ flex: 1 }}>  
        <h2>Résultat du Quiz {planetName && `- ${planetName}`}</h2>  
  
        {/* Barre de progression */}  
        <div style={{  
          height: '5px',  
          backgroundColor: '#ccc',  
          borderRadius: '5px',  
          marginTop: '0.5rem',  
          marginBottom: '0.5rem',  
          overflow: 'hidden'  
        }}>  
          <div style={{  
            width: `${finalScore}%`,  
            height: '100%',  
            backgroundColor: '#932dad'  
          }}></div>  
        </div>  
  
        <p style={{ marginBottom: '0.5rem' }}>{finalScore}% de bonnes réponses</p>  
  
        {/* Bouton pour sauvegarder le score */}  
        {!scoreSaved ? (  
          <button  
            onClick={handleSaveScore}  
            style={{  
              backgroundColor: '#932dad',  
              color: 'white',  
              border: 'none',  
              padding: '8px 16px',  
              borderRadius: '6px',  
              cursor: 'pointer',  
              marginBottom: '1rem',  
              marginRight: '1rem'  
            }}  
          >  
            Enregistrer mon score  
          </button>  
        ) : (  
          <p style={{ color: 'lightgreen', marginBottom: '1rem' }}>Score enregistré avec succès!</p>  
        )}  
  
        {/* Bouton Voir détails */}  
        <button  
          onClick={() => setShowDetails(!showDetails)}  
          style={{  
            backgroundColor: '#932dad',  
            color: 'white',  
            border: 'none',  
            padding: '8px 16px',  
            borderRadius: '6px',  
            cursor: 'pointer',  
            marginBottom: '1rem'  
          }}  
        >  
          {showDetails ? 'Masquer les détails' : 'Voir les détails'}  
        </button>  
  
        {/* Affichage des détails si activé */}  
        {showDetails && (  
          <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>  
            {questions.map((question, index) => {  
              const correctText = question.answerOptions.find((ans) => ans.isCorrect).text;  
              return (  
                <li key={index} style={{ color: userAnswers[index] ? 'lightgreen' : 'red', marginBottom: '10px' }}>  
                  <strong>Q{index + 1}:</strong> {question.question}  
                  {!userAnswers[index] && (  
                    <div>Bonne réponse: <b>{correctText}</b></div>  
                  )}  
                </li>  
              );  
            })}  
          </ul>  
        )}  
  
        {/* Lien pour recommencer */}  
        <div>  
          <span  
            onClick={resetQuiz}  
            style={{  
              color: 'red',  
              textDecoration: 'underline',  
              cursor: 'pointer',  
              fontWeight: 'bold'  
            }}  
          >  
            Rejouer le quiz  
          </span>  
        </div>  
      </div>  
    </div>  
  );  
};  
  
export default Result;