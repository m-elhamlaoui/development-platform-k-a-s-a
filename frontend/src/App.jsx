import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LoginPage from './Pages/Auth/LoginPage';
import SolarSystemPage from './Pages/Solar_system/SolarSystemPage';


function App() {
  return (
    <> 
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/solarsystem' element={<SolarSystemPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
