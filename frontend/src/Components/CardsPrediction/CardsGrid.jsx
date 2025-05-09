import React, { useState } from 'react';
import Cards from './Cards';
import './Cards.css';

const CardsGrid = () => {
  const [showAll, setShowAll] = useState(false);

  const cards = [
    {
      cardName: 'Total Solar Eclipse',
      imageUrl: 'https://www.publicdomainpictures.net/pictures/180000/velka/weltraum-1465833065YL1.jpg',
    },
    {
      cardName: 'Prediction',
      imageUrl: 'https://www.publicdomainpictures.net/pictures/180000/velka/weltraum-1465833065YL1.jpg',
    },
    {
      cardName: 'Prediction',
      imageUrl: 'https://www.publicdomainpictures.net/pictures/180000/velka/weltraum-1465833065YL1.jpg',
    },
    {
      cardName: 'Prediction',
      imageUrl: 'https://www.publicdomainpictures.net/pictures/180000/velka/weltraum-1465833065YL1.jpg',
    },
    {
      cardName: 'Prediction',
      imageUrl: 'https://www.publicdomainpictures.net/pictures/180000/velka/weltraum-1465833065YL1.jpg',
    },
  ];

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

        {!showAll && cards.length > 4 && (
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

export default CardsGrid;