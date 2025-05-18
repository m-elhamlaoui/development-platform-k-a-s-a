import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom'; // ✅ Ajout

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
        margin: '20px',
        borderRadius: '6px',
        maxWidth: '280px',
        height: '400px',
      }}
    >
      <div className="card-container">
        <img src={imageUrl} alt={cardName} className="card-image" />

        <div className="card-overlay">
          <Link
            to={link} // ✅ utilisation correcte de React Router
            style={{
              textDecoration: 'none',
              color: '#fff',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
            }}
          >
            Voir détails
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </Link>
        </div>
      </div>

      <div
        style={{
          fontSize: '16px',
          marginTop: '20px',
          fontWeight: 'bold',
          marginBottom: '10px',
          color: 'black',
        }}
      >
        {cardName}
      </div>
    </div>
  );
};

export default Cards;