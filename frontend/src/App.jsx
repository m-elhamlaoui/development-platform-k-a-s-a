import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import LoginPage from "./Pages/Auth/LoginPage";  
import Home from "./Pages/Home";  
import SolarSystemPage from "./Pages/Solar_system/SolarSystemPage";  
import PrivateRoute from "./PrivateRoute";   
  
function App() {  
  return (  
    <Router> 
      <Routes>  
        <Route path="/login" element={<LoginPage />} />  
        <Route path="/" element={<Home />} />  
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