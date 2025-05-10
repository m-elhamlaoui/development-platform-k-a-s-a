import { useState, useEffect } from "react";  
import { useLocation } from "react-router-dom";  
import "./QuizApp.css";  
import questions from "../../constants/questions.json";  
import Question from "../../Components/question";  
import Result from "../../Components/result";  
import background from '../../assets/space.png';  
import ScoreService from "../../services/ScoreService";
import Header from '../../Components/Header/Header'; 
  
function QuizApp() {  
  const [currentQuestion, setCurrentQuestion] = useState(0);  
  const [userAnswers, setUserAnswers] = useState([]);  
  const location = useLocation();  
  const planetName = new URLSearchParams(location.search).get('planet') || "Terre";  
  
  const handleNextQuestion = (isCorrect) => {  
    setCurrentQuestion(currentQuestion + 1);  
    setUserAnswers([...userAnswers, isCorrect]);  
  };  
  
  const resetQuiz = () => {  
    setCurrentQuestion(0);  
    setUserAnswers([]);  
  };  
  
  // Calculer le score à la fin du quiz  
  const calculateScore = () => {  
    const correctAnswers = userAnswers.filter(answer => answer === true).length;  
    const totalQuestions = questions.length;  
    return Math.round((correctAnswers / totalQuestions) * 100);  
  };  
  
  // Sauvegarder le score dans le backend  
  const saveScore = () => {  
    const score = calculateScore();  
    console.log('Sauvegarde du score pour la planète:', planetName, 'Score:', score);  
    ScoreService.saveScore(planetName, score)  
      .then(response => {  
        console.log('Score enregistré avec succès:', response.data);  
      })  
      .catch(error => {  
        console.error('Erreur lors de l\'enregistrement du score:', error);  
      });  
  };
  
  return (  
    <div className="QuizApp" style={{ backgroundImage: `url(${background})` }}>
      <div className="header">
                    <Header />
                </div>  
      {currentQuestion < questions.length && (  
        <Question  
          question={questions[currentQuestion]}  
          onAnswerClick={handleNextQuestion}  
        />  
      )}  
  
      {currentQuestion === questions.length && (  
        <Result  
          userAnswers={userAnswers}  
          questions={questions}  
          resetQuiz={resetQuiz}  
          score={calculateScore()}  
          planetName={planetName}  
          onSaveScore={saveScore}  
        />  
      )}  
    </div>  
  );  
}  
  
export default QuizApp;