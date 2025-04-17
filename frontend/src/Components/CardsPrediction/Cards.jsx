import React from 'react';
import './Cards.css';

const Cards = ({ cardName, link, imageUrl }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9f9f9',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        marginTop: '150px',
        marginBottom: '10px',
        marginLeft: '30px',
        borderRadius: '6px',
        maxWidth: '230px',
      }}
    >
      <div className="card-container">
        <img src={imageUrl} alt={cardName} className="card-image" />

        <div className="card-overlay">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: '#fff',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor:' pointer',
            }}
          >
            Voir détails
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>

      <div
        style={{
          fontSize: '14px',
          marginTop: '20px',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
      >
        {cardName}
      </div>
    </div>
  );
};

export default Cards;
