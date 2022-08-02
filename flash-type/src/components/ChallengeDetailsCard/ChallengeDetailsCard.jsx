import React from 'react';
import './ChallengeDetailsCard.css';

function ChallengeDetailsCard(props) {
  const { cardname, cardvalue } = props;
  return (
    <div className="details-card-container">
      <div className="card-name">{cardname}</div>
      <div className="card-value">{cardvalue}</div>
    </div>
  );
}

export default ChallengeDetailsCard;
