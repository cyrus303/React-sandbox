import React from 'react';
import TestLetter from '../TestLetter/TestLetter';
import './TypingChallenge.css';

function TypingChallenge(props) {
  const {
    selectedParagraph,
    timerStarted,
    timeRemaning,
    words,
    characters,
    wpm,
    testInfo,
  } = props.data;

  const onInputChange = props.onInputChange;
  // console.log(onInputChange);
  // console.log(props.data.testInfo);
  return (
    <div className="typing-challenge">
      <div className="timer-container">
        <p className="timer">
          00:{timeRemaning > 10 ? timeRemaning : `0${timeRemaning}`}
        </p>
        <p className="timer-info">
          {!timerStarted && 'start typing to start the test'}
        </p>
      </div>

      <div className="textarea-container">
        <div className="textarea-left">
          <div className="textarea text-paragraph">
            {/* {selectedParagraph} */}
            {testInfo.map((letter) => {
              return <TestLetter data={letter} />;
            })}
          </div>
        </div>
        <div className="textarea-right">
          <textarea
            className="textarea"
            placeholder="start typing here to start the text"
            onChange={(e) => {
              onInputChange(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default TypingChallenge;
