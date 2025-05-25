import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
return (
  <div className="hero-container">
    <video className="video-background" autoPlay loop muted>
      <source src="/videos/video1.mp4" type="video/mp4" />
      Votre navigateur ne supporte pas la balise vidéo.
    </video>

    <h2 className='gradient-text'>Explorer</h2>
    <h3 className='gradient-text2'>L'espace magique</h3>

    <p style={{ fontSize: '1.3rem', color: 'white', fontWeight: 'bold', fontFamily: 'Syncopate' }}>
      Découvrez les secrets de l’univers.
    </p>
    <p style={{ fontSize: '1.3rem', color: 'white', fontWeight: 'bold', fontFamily: 'Syncopate' }}>
      ASTROMAP vous aide à explorer les galaxies de l’espace.
    </p>

    <div className="hero-btns">
      <Button buttonStyle="btn--outline" buttonSize="btn--large"> 
        Découvrez comment ça fonctionne
      </Button>
    </div>
  </div>
);

}

export default HeroSection;