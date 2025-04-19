import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar ">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        {/* 🪐 Logo animé */}
        <a className="navbar-brand" href="#">AstroMap</a>

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
                <a className="nav-link" href="#">Prediction</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cartography</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Quiz</a>
              </li>
            </ul>

            {/* 🔐 Auth */}
            <div className="auth-buttons">
              <a href="#" className="btn-custom">Sign up</a>
              <a href="#" className="login-link">
                Log in <i className="fa-solid fa-arrow-right-to-bracket ms-1"></i>
              </a>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
