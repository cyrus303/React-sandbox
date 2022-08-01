import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultContainer.css';

function ResultContainer(props) {
  const { suggestedNames } = props.suggestedNames;

  if (suggestedNames.length > 0) {
    var NamesEl = suggestedNames.map((name) => {
      return <NameCard suggestedName={name} />;
    });
  }

  console.log(suggestedNames.length);
  console.log(NamesEl);
  return <div className="results-container">{NamesEl}</div>;
}

export default ResultContainer;
