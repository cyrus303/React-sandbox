import React, { useState } from 'react';
import './App.css';

const quotes = [
  'if you are good enough, never do it for free',
  'whould the person you are trying to become pick the same choice',
  'consitancy is what makes you win not hard work',
  'go big or go home',
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  function randomizeQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }

  return (
    <div className="App">
      <div>{quote}</div>
      <button onClick={randomizeQuote}>Click Me</button>
    </div>
  );
}

export default App;
