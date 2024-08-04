// Components/Card.js

import React from 'react';
import './Card.css'; // Stil dosyasını içe aktar

const Card = ({ title, count, color }) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <h3>{title}</h3>
      <p>{count}</p>
      <button className="view-button">View All</button>
    </div>
  );
}

export default Card;
