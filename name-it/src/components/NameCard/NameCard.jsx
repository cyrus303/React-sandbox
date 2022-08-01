import React from 'react';
import './NameCard.css';

function NameCard(props) {
  const { suggestedName } = props;

  const nameCheapURL =
    'https://www.namecheap.com/domains/registration/results/?domain=';

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={`${nameCheapURL}${suggestedName}`}
      className="card-link"
    >
      <div className="result-name-card">
        <p className="result-name">{suggestedName}</p>
      </div>
    </a>
  );
}

export default NameCard;
