import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import LoginPage from "./Pages/Auth/LoginPage";
import Home from "./Pages/Home";  
import SolarSystemPage from "./Pages/Solar_system/SolarSystemPage";  
import PrivateRoute from "./PrivateRoute";   
import Quiztitles from "./Pages/Quiz/Quiztitles";
import QuizApp from "./Pages/Quiz/QuizApp";
import Earth from './Pages/SidebarPages/Earth';
import Pluto from './Pages/SidebarPages/Pluto';
import Sun from './Pages/SidebarPages/Sun';
import Mercury from './Pages/SidebarPages/Mercury';
import Mars from './Pages/SidebarPages/Mars';
import Neptune from './Pages/SidebarPages/Neptune'
import Uranus from './Pages/SidebarPages/Uranus';
import Jupiter from './Pages/SidebarPages/Jupiter';
import Saturn from './Pages/SidebarPages/Saturn';
import Venus from './Pages/SidebarPages/Venus';

import PhenomenonDetails from './Pages/APIPrediction/PhenomenonDetails';


function App() {  
  return (  
    <Router> 
      <Routes>  
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/signup" element={<LoginPage />} />  
        <Route path="/" element={<Home />} />
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

        <Route   
          path="/solarsystem"   
          element={  
            <PrivateRoute>  
              <SolarSystemPage />  
            </PrivateRoute>  
          }   
        />  
        <Route path='/solarsystem/earth' element={<Earth />} />
        <Route path='/solarsystem/pluto' element={<Pluto />} />
        <Route path='/solarsystem/sun' element={<Sun />} />
        <Route path='/solarsystem/mercury' element={<Mercury />} />
        <Route path='/solarsystem/mars' element={<Mars />} />
        <Route path='/solarsystem/neptune' element={<Neptune />} />
        <Route path='/solarsystem/uranus' element={<Uranus />} />
        <Route path='/solarsystem/jupiter' element={<Jupiter />} />
        <Route path='/solarsystem/saturn' element={<Saturn />} />
        <Route path='/solarsystem/venus' element={<Venus />} />
      </Routes>  
    </Router>  
  );  
}  
  
export default App;