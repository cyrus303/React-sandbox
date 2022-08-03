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
    testInfo,
  } = props.data.data;

  const onInputChange = props.data.onInputChange;

  // console.log(onInputChange);

  return (
    <div className="test-container">
      {timeRemaning > 0 ? (
        <div data-aos="fade-up" className="typing-challenge-container">
          <TypingChallengeContainer
            data={props.data.data}
            onInputChange={onInputChange}
          />
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
