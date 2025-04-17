import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <video
        src="/videos/video1.mp4"
        autoPlay
        loop
        muted
        className="background-video"
      />

      <h2 className='gradient-text'>Explore</h2>

      <h3 className='gradient-text2'>The magical space</h3>

      <p style={{ fontSize: '1.3rem', fontWeight: 'bold', fontFamily:'Syncopate'}}>
         Explore the secrets of space.
      </p>
      <p style={{ fontSize: '1.3rem', fontWeight: 'bold', fontFamily:'Syncopate'}}>
        ASTROMAP helps you to check space galactics.
      </p>


      <div className="hero-btns">
        <Button buttonStyle="btn--outline" buttonSize="btn--large"> 
          Discover how it works
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
