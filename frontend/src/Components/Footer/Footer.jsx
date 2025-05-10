import React from "react";
import "./Footer.css";
import fb from "../../assets/fbimg.png";
import twitter from "../../assets/twitterimg.png";
import linkedin from "../../assets/linkedinimg.png";
import insta from "../../assets/instaimg.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Colonne gauche : AstroMap */}
        <div className="footer-section">
          <img src={logo} alt="AstroMap Logo" className="footer-logo" />

          <p className="footer-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugit magni accusantium sint temporibus nihil, in odio recusandae natus deserunt.
          </p>
          <p className="footer-text">
            <strong>Email:</strong>{" "}
            <a href="mailto:gmail.com">gmail.com</a>
          </p>

          <div className="footer-follow">
            <p className="footer-follow-title">Follow us</p>
            <div className="footer-social">
              <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
              <a href="#"><img src={insta} alt="Instagram" /></a>
              <a href="#"><img src={fb} alt="Facebook" /></a>
              <a href="#"><img src={twitter} alt="Twitter" /></a>
            </div>
          </div>
        </div>

        {/* Colonne droite : Quick Links */}
        <div className="footer-section right-section">
          <h3 className="footer-title">Quik link</h3>
          <ul>
            <li>Sign up</li>
            <li>Log in</li>
            <li>Cartography</li>
            <li>Quiz</li>
          </ul>
        </div>
      </div>

      <div className="footer-line"></div>
      <div className="footer-bottom">
        <p>&copy; 2024 AstroMap. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
