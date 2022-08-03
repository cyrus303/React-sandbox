import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import './TypingChallengeContainer.css';

function TypingChallengeContainer(props) {
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

  // console.log(props.data);
  // console.log(words);
  return (
    <div className="typing-challenge-container">
      {/* details section */}
      <div className="details-container">
        {/* words-typed */}
        <ChallengeDetailsCard cardname="words" cardvalue={words} />

        {/* characters-typed */}
        <ChallengeDetailsCard
          cardname="characters typed"
          cardvalue={characters}
        />

        {/* words per min */}
        <ChallengeDetailsCard cardname="speed" cardvalue={wpm} />
      </div>

      {/* the real challenge */}
      <div className="typewriter-container">
        <TypingChallenge data={props.data} onInputChange={onInputChange} />
      </div>
    </div>
  );
}

export default TypingChallengeContainer;
