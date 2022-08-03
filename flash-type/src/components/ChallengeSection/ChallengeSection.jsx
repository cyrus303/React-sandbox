import React from 'react';
import TestContainer from '../TestContainer/TestContainer';
import './ChallengeSection.css';

function ChallengeSection(props) {
  // console.log(props);
  return (
    <div className="challenge-section-container">
      <h1 className="challenge-section-header" data-aos="fade-down">
        Take a speed test now!
      </h1>
      <TestContainer data={props} />
    </div>
  );
}

export default ChallengeSection;
