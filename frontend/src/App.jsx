import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import QuizApp from "./pages/QuizApp.jsx";
import Quiztitles from "./pages/Quiztitles.jsx"; // on importe la page complète

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '100px' }}>
      <button
        onClick={() => navigate('/home')}
        style={{
          backgroundColor: '#932dad',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          fontSize: '18px',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Faire quiz
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Quiztitles />} />
        <Route path="/quiz" element={<QuizApp />} />
      </Routes>
    </Router>
  );
}

export default App;
