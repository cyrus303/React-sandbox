import React from 'react';
import './TestLetter.css';

function TestLetter(props) {
  //   console.log(props.data.testLetter);
  let letter = props.data.testLetter;
  let status = props.data.status;

  let statusClass;

  if (status === 'correct') {
    statusClass = 'test-letter-correct';
  } else if (status === 'incorrect') {
    statusClass = 'test-letter-incorrect';
  } else {
    statusClass = 'test-letter-not-attempted';
  }

  //   console.log(status);
  return <span className={`test-letter ${statusClass}`}>{letter}</span>;
}

export default TestLetter;
