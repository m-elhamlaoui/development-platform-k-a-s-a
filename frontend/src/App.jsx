import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import LoginPage from "./Pages/Auth/LoginPage";  
import Home from "./Pages/Home";  
import SolarSystemPage from "./Pages/Solar_system/SolarSystemPage";  
import PrivateRoute from "./PrivateRoute";   
import Quiztitles from "./Pages/Quiz/Quiztitles";
import QuizApp from "./Pages/Quiz/QuizApp";


function App() {  
  return (  
    <Router> 
      <Routes>  
        <Route path="/login" element={<LoginPage />} />  
        <Route path="/" element={<Home />} /> 
        <Route path="/quiz" element={<Quiztitles />} /> 
        <Route path="/quizcontent" element={<QuizApp />} /> 

        <Route   
          path="/solarsystem"   
          element={  
            <PrivateRoute>  
              <SolarSystemPage />  
            </PrivateRoute>  
          }   
        />  
        {/* Autres routes protégées */}  
      </Routes>  
    </Router>  
  );  
}  
  
export default App;