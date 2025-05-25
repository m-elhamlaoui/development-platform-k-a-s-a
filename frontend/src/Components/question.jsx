import React, { useState } from "react";

const Question = ({ question, onAnswerClick = () => {} }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      onAnswerClick(selectedOption.isCorrect);
      setSelectedOption(null); // Reset pour la prochaine question
    }
  };

  return (
    <div className="question">
      <h2>{question.question}</h2>

      <ul className="options" style={{ listStyle: "none", padding: 0 }}>
        {question.answerOptions.map((option) => (
          <li key={option.text} style={{ marginBottom: "12px" }}>
            <button
              onClick={() => handleOptionClick(option)}
              style={{
                color: "white",
                fontSize: "18px",
                backdropFilter: "blur(2px)",
                padding: "15px 20px",
                borderRadius: "8px",
                backgroundColor: "transparent",
                border:
                  selectedOption?.text === option.text
                    ? "2px solid #b085e9"
                    : "1px solid #ccc",
                backgroundImage:
                  selectedOption?.text === option.text
                    ? "none"
                    : "none",
                transform:
                  selectedOption?.text === option.text
                    ? "translateY(-2px)"
                    : "none",
                transition: "all 0.05s ease",
                cursor: "pointer",
                width: "100%",
                textAlign: "left",
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
          background: selectedOption
            ? "linear-gradient(135deg, #b085e9, #7f9ded)"
            : "#ccc",
          color: "white",
          padding: "10px 25px",
          border: "none",
          borderRadius: "8px",
          cursor: selectedOption ? "pointer" : "not-allowed",
          marginTop: "15px",
          transition: "all 0.3s ease",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Question;