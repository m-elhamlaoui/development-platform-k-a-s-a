import React from 'react';
import '../App.css';
import HeroSection from '../Components/HeroSection';
import Footer from '../Components/Footer/Footer';

function Home() {
  return (
    <div className="home">
      {/* Vidéo en fond */}
      <video className="hero-background" autoPlay loop muted>
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>

      {/* Section Hero */}
      <div className="hero-section">
        <HeroSection />
      </div>

      {/* Footer */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
