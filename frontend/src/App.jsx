import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LoginPage from './Pages/Auth/LoginPage';
import SolarSystemPage from './Pages/Solar_system/SolarSystemPage';
import Earth from './Pages/SidebarPages/Earth';
import Jupiter from './Pages/SidebarPages/Jupiter';
import Mars from './Pages/SidebarPages/Mars';
import Mercury from './Pages/SidebarPages/Mercury';
import Neptune from './Pages/SidebarPages/Neptune';
import Pluto from './Pages/SidebarPages/Pluto';
import Saturn from './Pages/SidebarPages/Saturn';
import Sun from './Pages/SidebarPages/Sun';
import Uranus from './Pages/SidebarPages/Uranus';
import Venus from './Pages/SidebarPages/Venus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/solarsystem' element={<SolarSystemPage />} />
        <Route path='/solarsystem/earth' element={<Earth />} />
        <Route path='/solarsystem/jupiter' element={<Jupiter />} />
        <Route path='/solarsystem/mars' element={<Mars />} />
        <Route path='/solarsystem/mercury' element={<Mercury />} />
        <Route path='/solarsystem/neptune' element={<Neptune />} />
        <Route path='/solarsystem/pluto' element={<Pluto />} />
        <Route path='/solarsystem/saturn' element={<Saturn />} />
        <Route path='/solarsystem/sun' element={<Sun />} />
        <Route path='/solarsystem/uranus' element={<Uranus />} />
        <Route path='/solarsystem/venus' element={<Venus />} />
      </Routes>
    </Router>
  );
}


export default App;
