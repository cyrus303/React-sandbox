import React from 'react';
import './TryAgain.css';

function TryAgain(props) {
  const { words, characters, wpm, startAgain } = props;
  return (
    <div className="try-again-container">
      <h1>Test Results</h1>

      <div className="result-container">
        <p>
          <b>Characters:</b> {characters}
        </p>
        <p>
          <b>Words:</b> {words}
        </p>
        {/* <p>
          <b>Speed:</b> {wpm} wpm
        </p> */}
      </div>

      <div>
        <button
          onClick={() => startAgain()}
          className="end-button start-again-btn"
        >
          Retry
        </button>
        <button
          className="end-button share-btn"
          onClick={() => {
            window.open(
              'https://www.facebook.com/sharer/sharer.php?u=theleanprogrammer.com/aam',
              'facebook-share-dialog',
              'width=800, height=600'
            );
          }}
        >
          Share
        </button>
        <button
          className="end-button tweet-btn"
          onClick={() => {
            window.open(
              'https://twitter.com/intent/tweet?text=theleanprogrammer.com',
              'twitter-share-dialog',
              'width=800, height=600'
            );
          }}
        >
          Tweet
        </button>
      </div>
    </div>
  );
}

export default TryAgain;
