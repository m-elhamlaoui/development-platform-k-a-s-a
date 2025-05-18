import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import mercure from "../assets/mercury_icon.png";
import venus from "../assets/venus_icon.png";
import terre from "../assets/earth_icon.png";
import mars from "../assets/mars_icon.png";
import jupiter from "../assets/jupiter_icon.png";
import saturne from "../assets/saturn_icon.png";
import uranus from "../assets/uranus_icon.png";
import neptune from "../assets/neptune_icon.png";

// Fonction pour supprimer les accents (ex : "Vénus" => "venus")
const normalizeName = (name) => {
  return name
    ?.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // retire les accents
    .toLowerCase();
};

// Mapping planète → image
const planetImages = {
  mercure: mercure,
  venus: venus,
  terre: terre,
  mars: mars,
  jupiter: jupiter,
  saturne: saturne,
  uranus: uranus,
  neptune: neptune,
};

const Result = ({ userAnswers, questions, resetQuiz = () => {}, score }) => {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Récupérer la planète depuis l’URL
  const searchParams = new URLSearchParams(location.search);
  const planetName = searchParams.get("planet"); 

  const normalized = normalizeName(planetName);
  const planetImage = planetImages[normalized] || mercure;

  const correctAnswers = userAnswers.filter((answer) => answer).length;
  const finalScore = score || Math.round((correctAnswers / questions.length) * 100);

  return (
   <div
  style={{
    
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    width: '60%',
    backgroundColor: '#2e1f4d',
    borderRadius: '10px',
    padding: '1rem',
    color: 'white',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
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

        <button
          onClick={() => setShowDetails(!showDetails)}
          style={{
            background: 'linear-gradient(135deg, #b085e9, #7f9ded)',
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
              color: '#b8eaff',
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
