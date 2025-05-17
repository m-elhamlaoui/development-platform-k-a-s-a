import logo from "../../../public/logo.png";
import fb from "../../assets/fbimg.png";
import insta from "../../assets/instaimg.png";
import linkedin from "../../assets/linkedinimg.png";
import twitter from "../../assets/twitterimg.png";
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Colonne gauche : AstroMap */}
        <div className="footer-section">
          <img src={logo} alt="AstroMap Logo" className="footer-logo" />

          <p className="footer-text">
           Explorez l'univers fascinant de l'espace avec AstroMap, une plateforme immersive qui vous permet de découvrir des prédictions astronomiques, d'explorer notre système solaire en 3D et de tester vos connaissances spatiales à travers des quiz interactifs. 
          </p>
          <p className="footer-text">
            <strong>Email:</strong>{" "}
            <a href="mailto:gmail.com">contact@astromap.com</a>
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
  <li><Link to="/signup">Sign up</Link></li>
  <li><Link to="/login">Log in</Link></li>
  <li><Link to="/solarsystem">Cartography</Link></li>
  <li><Link to="/quizcontent">Quiz</Link></li>
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
