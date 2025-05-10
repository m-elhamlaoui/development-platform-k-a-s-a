import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import AuthService from '../../services/AuthService';


const Header = () => {
  const navigate = useNavigate();  
  // Appeler la fonction depuis l'objet AuthService  
  const isAuthenticated = AuthService.isAuthenticated();  
    
  const handleLogout = () => {  
    AuthService.logout();  
    navigate('/login');  
  };


  return (
    <nav className="navbar navbar-expand-lg custom-navbar ">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        {/* 🪐 Logo animé */}
        <Link className="navbar-brand" to="/">AstroMap</Link>

        {/* 🍔 Menu Burger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 📱 Offcanvas */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body d-flex flex-column flex-lg-row align-items-center w-100 justify-content-between">

            {/* 🌐 Liens centrés */}
            <ul className="navbar-nav flex-row gap-5 mb-3 mb-lg-0 justify-content-center flex-grow-1">
              <li className="nav-item">
              <HashLink className="nav-link" smooth to="/#cards">Prediction</HashLink>
              
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to="/solarsystem">Cartography</Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to="/quiz">Quiz</Link>

              </li>
            </ul>

            {/* 🔐 Auth */}
            <div className="auth-buttons">  
              {isAuthenticated ? (  
              <a href="#" className="login-link" onClick={handleLogout}>  
              Déconnexion <i className="fa-solid fa-sign-out-alt ms-1"></i>  
               </a>  
               ) : (  
              <>  
               <a href="#" className="btn-custom">Sign up</a>  
               <Link to="/login" className="login-link">  
                  Log in <i className="fa-solid fa-arrow-right-to-bracket ms-1"></i>  
                 </Link>  
               </>  
               )}  
               </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
