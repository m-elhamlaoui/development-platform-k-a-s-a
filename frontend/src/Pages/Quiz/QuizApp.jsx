import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./QuizApp.css";
import Question from "../../Components/question";
import Result from "../../Components/result";
import background from '../../assets/space.png';
import ScoreService from "../../services/ScoreService";
import { useNavigate } from "react-router-dom";



function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const planetName = new URLSearchParams(location.search).get('planet') || "terre";

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        setIsLoading(true);
        const response = await import(`../../constants/questions/${planetName.toLowerCase()}.json`);
        setQuestions(response.default);
        setIsLoading(false);
      } catch (err) {
        console.error("Erreur de chargement du fichier JSON :", err);
        setError("Impossible de charger les questions pour cette planète.");
        setIsLoading(false);
      }
    };
    loadQuestions();
  }, [planetName]);

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  const calculateScore = () => {
    const correctAnswers = userAnswers.filter(answer => answer === true).length;
    const totalQuestions = questions.length;
    return Math.round((correctAnswers / totalQuestions) * 100);
  };

  const navigate = useNavigate();

  const saveScore = () => {
    const score = calculateScore();
    ScoreService.saveScore(planetName, score)
      .then(response => {
        console.log('Score enregistré avec succès:', response.data);
        // ✅ Redirection après enregistrement
        navigate('/quiztitles');
      })
      .catch(error => {
        console.error('Erreur lors de l\'enregistrement du score:', error);
      });
  };

  if (isLoading) return <div>Chargement des questions...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="QuizApp" style={{ backgroundImage: `url(${background})` }}>
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
