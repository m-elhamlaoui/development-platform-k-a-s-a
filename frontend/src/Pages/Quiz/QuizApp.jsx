import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./QuizApp.css";
import Question from "../../Components/question";
import Result from "../../Components/result";
import background from '../../assets/quiz_wallpaper.jpg'; // Utilisation de l'image de fond du second fichier  
import ScoreService from "../../services/ScoreService";
import Header from '../../Components/Header/Header';
import { useNavigate } from "react-router-dom";

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);

  const location = useLocation();
  const planetName = new URLSearchParams(location.search).get('planet') || "Terre";
  const navigate = useNavigate();

  useEffect(() => {
    // Charger les questions spécifiques à la planète  
    import(`../../constants/questions/${planetName.toLowerCase()}.json`)
      .then(data => {
        setQuestions(data.default);
      })
      .catch(error => {
        console.error(`Erreur lors du chargement des questions pour ${planetName}:`, error);
        // En cas d'erreur, essayer de charger un fichier de questions par défaut  
        import("../../constants/questions.json")
          .then(defaultData => {
            setQuestions(defaultData.default);
            console.log("Chargement des questions par défaut");
          })
          .catch(defaultError => {
            console.error("Impossible de charger les questions par défaut:", defaultError);
            setQuestions([]);
          });
      });
  }, [planetName]);

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
    return totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
  };

  // Sauvegarder le score dans le backend  
  const saveScore = () => {
    const score = calculateScore();
    console.log('Sauvegarde du score pour la planète:', planetName, 'Score:', score);
    ScoreService.saveScore(planetName, score)
      .then(response => {
        console.log('Score enregistré avec succès:', response.data);
        // Redirection après enregistrement  
        navigate('/quiztitles');
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
      {questions.length > 0 && currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}

      {questions.length > 0 && currentQuestion === questions.length && (
        <Result
          userAnswers={userAnswers}
          questions={questions}
          resetQuiz={resetQuiz}
          score={calculateScore()}
          planetName={planetName}
          onSaveScore={saveScore}
        />
      )}

      {questions.length === 0 && (
        <div className="loading-message">
          Chargement des questions...
        </div>
      )}
    </div>
  );
}

export default QuizApp;