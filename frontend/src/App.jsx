
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Auth/LoginPage";
import Home from "./Pages/Home";
import SolarSystemPage from "./Pages/Solar_system/SolarSystemPage";
import PrivateRoute from "./PrivateRoute";
import Quiztitles from "./Pages/Quiz/Quiztitles";
import QuizApp from "./Pages/Quiz/QuizApp";
import PhenomenonDetails from './Pages/APIPrediction/PhenomenonDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/solarsystem" element={<SolarSystemPage />} />
        <Route path="/details/:type" element={<PhenomenonDetails />} />
        <Route
          path="/quiz"
          element={
            <PrivateRoute>
              <Quiztitles />
            </PrivateRoute>
          }
        />
        <Route
          path="/quizcontent"
          element={
            <PrivateRoute>
              <QuizApp />
            </PrivateRoute>
          }
        />
        {/* Other protected routes */}
      </Routes>
    </Router>
  );
}

export default App;