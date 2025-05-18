/* eslint-disable react/prop-types 

const Question = ({question, onAnswerClick = () => {}}) => {
    return (
      <div className="question">
        <h2>{question.question}</h2>
        <ul className="options">
          {question.answerOptions.map((option) => {
            return (
              <li key={option.text}>
                <button onClick={() => onAnswerClick(option.isCorrect)}>
                  {option.text}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  
  export default Question;
  
/* eslint-disable react/prop-types */
import { useState } from "react";

const Question = ({ question, onAnswerClick = () => {} }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option); // on garde l'option cliquée
  };

  const handleSubmit = () => {
    if (selectedOption) {
      onAnswerClick(selectedOption.isCorrect);
      setSelectedOption(null); // on réinitialise pour la prochaine question
    }
  };

  return (
    
    <div className="question">
      <h2>{question.question}</h2>
      <ul className="options">
        {question.answerOptions.map((option) => (
          <li key={option.text}>
            <button
             onClick={() => handleOptionClick(option)}
             className={selectedOption?.text === option.text ? "selected" : ""}
             style={{
              color: "white" ,
              fontSize: "18px",
              backdropFilter: "blur(2px)",  // Applique un flou à l'arrière-plan derrière l'élément
              padding: "15px 20px",  // Espacement interne
              borderRadius: "8px",  // Coins arrondis
              backgroundColor: selectedOption?.text === option.text ? "#d3f9d8" : "rgba(0, 0, 0, 0)", // Utilisation d'un seul backgroundColor
              border: selectedOption?.text === option.text ? "2px solid green" : "1px solid #ccc",  // Bordure conditionnelle
            }}
            
            >
             {option.text}
            </button>

          </li>
        ))}
      </ul>

      <button
        onClick={handleSubmit}
        disabled={!selectedOption}
        style={{
          fontSize: "18px",
          backgroundColor: selectedOption ? "green" : "#ccc",
          color: "white",
          padding: "10px 25px",
          border: "none",
          borderRadius: "8px",
          cursor: selectedOption ? "pointer" : "not-allowed",
          marginTop: "15px",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Question;
