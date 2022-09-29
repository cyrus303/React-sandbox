import React, { useState } from 'react';

export default function App() {
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
  ];
  //   console.log(questions[0].questionText);
  //   console.log(questions[0].answerOptions[0].answerText);

  const [questionNumber, setQuestionNumber] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [pastScore, setPastScore] = useState(0);

  function handleClick(isCorrect) {
    if (isCorrect) {
      setScore((previousValue) => previousValue + 1);
    }
    if (questionNumber < questions.length - 1) {
      setQuestionNumber((previousValue) => previousValue + 1);
    } else {
      setShowScore(true);
    }
    console.log(score);
  }

  function handleReset() {
    setPastScore(score);
    setQuestionNumber(0);
    setScore(0);
    setShowScore(false);
  }

  return (
    <div className="app">
      <p className="pastScore">previous score: {pastScore}</p>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <button className="reset" onClick={handleReset}>
            reset
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {questionNumber + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[questionNumber].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[questionNumber].answerOptions.map((answerOptions) => {
              return (
                <button onClick={() => handleClick(answerOptions.isCorrect)}>
                  {answerOptions.answerText}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
