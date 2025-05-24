import React, { useState } from 'react';
import Cards from './Cards';
import './Cards.css';

const CardsGrid = () => {
  const [showAll, setShowAll] = useState(false);

  const cards = [
  {
    cardName: 'Éruption Solaire (Flare)',
    imageUrl: 'https://wallpapercrafter.com/desktop/139690-space-flares-dark-sky-galaxy.jpg',
    link: '/details/flares',
    type: 'flares'
  },
  {
    cardName: 'CME (Éjection de Masse Coronale)',
    imageUrl: 'https://images.hdqwalls.com/download/galaxy-space-fantasy-science-fiction-ci-2560x1440.jpg',
    link: '/details/cme',
    type: 'cme'
  },
  {
    cardName: 'Indice Kp',
    imageUrl: 'https://th.bing.com/th/id/OIP.h4gz0zgBjERau9nqcvz2lgHaFK?cb=iwc2&rs=1&pid=ImgDetMain',
    link: '/details/kp',
    type: 'kp'
  },
    {
    cardName: 'Indice Kp',
    imageUrl: 'https://th.bing.com/th/id/OIP.h4gz0zgBjERau9nqcvz2lgHaFK?cb=iwc2&rs=1&pid=ImgDetMain',
    link: '/details/kp',
    type: 'kp'
  }
]

  const displayedCards = showAll ? cards : cards.slice(0, 3);

  return (
    <div id="prediction" style={{ backgroundColor: 'white', width: '100%', padding: '60px 0'  }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
          maxWidth: '1000px',
          paddingBottom: '130px',
          gap: '20px',
        }}
      >
        {displayedCards.map((card, index) => (
          <Cards
            key={index}
            cardName={card.cardName}
            link={card.link}
            imageUrl={card.imageUrl}
          />
        ))}

        {!showAll && cards.length > 3 && (
          <div style={{ width: '100%', textAlign: 'center', marginTop: '30px' }}>
            <button
              onClick={() => setShowAll(true)}
              className="btn-voir-plus"
              style={{
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '9px',
                background: 'linear-gradient(135deg, #b085e9, #7f9ded)',
                fontFamily: 'Montserrat',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                fontSize: '16px',
                textDecoration: 'none',
              }}
            >
              Voir plus
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardsGrid;