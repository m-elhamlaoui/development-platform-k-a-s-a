import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import HeroSection from '../Components/HeroSection';
import './Home.css';
import CardsGrid from '../Components/CardsPrediction/CardsGrid'

function Home() {
  return (
    <div className="home">
      

      <div className="header">
        <Header />
      </div>
      

      {/* Section Hero */}
      <div className="hero-section">
        <HeroSection />
      </div>
       <CardsGrid />
      {/* Footer */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
