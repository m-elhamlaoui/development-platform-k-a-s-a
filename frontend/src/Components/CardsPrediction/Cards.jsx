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
        margin: '20px',
        borderRadius: '6px',
        maxWidth: '280px', // ✅ plus large
        height: '400px',    // ✅ nouvelle hauteur fixe
 
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
          fontSize: '16px',
          marginTop: '20px',
          fontWeight: 'bold',
          marginBottom: '10px',
          color:'black',
        }}
      >
        {cardName}
      </div>
    </div>
  );
};

export default Cards;