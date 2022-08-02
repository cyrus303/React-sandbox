import React from 'react';
import TestContainer from '../TestContainer/TestContainer';
import './ChallengeSection.css';

function ChallengeSection() {
  return (
    <div className="challenge-section-container">
      <h1 className="challenge-section-header" data-aos="fade-down">
        Take a speed test now!
      </h1>
      <TestContainer words={4} characters={14} wpm={60} />
    </div>
  );
}

export default ChallengeSection;
