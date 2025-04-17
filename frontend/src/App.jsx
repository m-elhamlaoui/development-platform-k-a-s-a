import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import QuizApp from "./pages/QuizApp.jsx";

function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Bienvenue sur l'application de Quiz</h1>
      <button
        onClick={() => navigate('/quiz')}
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Passer Quiz
      </button>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizApp />} />
      </Routes>
    </Router>
  )
}

export default App
