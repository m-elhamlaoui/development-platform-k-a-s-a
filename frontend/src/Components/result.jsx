import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import mercure from "../assets/mercure.jpg";
import venus from "../assets/venus.jpeg";
import terre from "../assets/terre.jpg";
import mars from "../assets/mars.jpeg";
import jupiter from "../assets/jupiter.png";
import saturne from "../assets/saturne.jpeg";
import uranus from "../assets/Uranus.jpg";
import neptune from "../assets/neptune.jpeg";

const Result = ({ userAnswers, questions, resetQuiz = () => { }, score, planetName, onSaveScore }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [scoreSaved, setScoreSaved] = useState(false);
  const correctAnswers = userAnswers.filter((answer) => answer).length;
  const navigate = useNavigate();

  const finalScore = score || Math.round((correctAnswers / questions.length) * 100);

  const handleSaveScore = () => {
    onSaveScore(finalScore);
    setScoreSaved(true);
    setTimeout(() => {
      navigate('/quiz');
    }, 1500);
  };

  // Choix de l'image dynamique selon la planète
  let planetImage = mercure;
  switch ((planetName || "").toLowerCase()) {
    case "venus":
      planetImage = venus;
      break;
    case "terre":
    case "earth":
      planetImage = terre;
      break;
    case "mars":
      planetImage = mars;
      break;
    case "jupiter":
      planetImage = jupiter;
      break;
    case "saturne":
      planetImage = saturne;
      break;
    case "uranus":
      planetImage = uranus;
      break;
    case "neptune":
      planetImage = neptune;
      break;
    default:
      planetImage = mercure;
  }

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
