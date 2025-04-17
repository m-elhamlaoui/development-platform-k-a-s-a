import React from "react";
import './Footer.css';
import fb from '../../assets/fbimg.png';
import twitter from '../../assets/twitterimg.png';
import linkedin from '../../assets/linkedinimg.png';
import insta from '../../assets/instaimg.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <h3>Contact Us</h3>
          <p>Email: Info@example.com</p>
          <p>Phone: +121 56556 565556</p>
          <p>Address: Your Address 123 street</p>
        </div>
        <div className="footer-content">
          <h3>Quick Links</h3>
          <ul className="list">
            <li><a href="#" class="white-link">Home</a></li>
            <li><a href="#" class="white-link">About</a></li>
            <li><a href="#" class="white-link">Services</a></li>
            <li><a href="#" class="white-link">Products</a></li>
            <li><a href="#" class="white-link">Contact</a></li>
          </ul>
        </div>
        <div className="footer-content">
          <h3>Follow Us</h3>
          <div className="social-media">
            <a href="#"><img src={fb} alt="Facebook" /></a>
            <a href="#"><img src={twitter} alt="Twitter" /></a>
            <a href="#"><img src={insta} alt="Instagram" /></a>
            <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
