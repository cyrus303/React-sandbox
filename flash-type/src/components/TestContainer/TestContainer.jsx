import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import './TestContainer.css';

function TestContainer(props) {
  const {
    selectedParagraph,
    timerStarted,
    timeRemaning,
    words,
    characters,
    wpm,
  } = props.data.data;

  // console.log(props.data.data);

  return (
    <div className="test-container">
      {timeRemaning > 0 ? (
        <div data-aos="fade-up" className="typing-challenge-container">
          <TypingChallengeContainer data={props.data.data} />
        </div>
      ) : (
        <div className="try-again-container">
          <TryAgain words={words} characters={characters} wpm={wpm} />
        </div>
      )}
    </div>
  );
}

export default TestContainer;
