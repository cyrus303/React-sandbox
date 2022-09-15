import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/Ai';
import { WiDegrees } from 'react-icons/Wi';

function App() {
  const [temp, setTemp] = useState(10);

  function increament() {
    console.log('increment pressed');
    if (temp < 30) {
      setTemp((prev) => {
        return prev + 1;
      });
    }
  }

  function decrement() {
    console.log('decrement presses');
    if (temp > 0) {
      setTemp((prev) => {
        return prev - 1;
      });
    }
  }

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div
          className={
            temp > 10
              ? temp < 15
                ? 'neutral temperature-display'
                : 'hot temperature-display'
              : 'cold temperature-display'
          }
        >
          {temp}°C
        </div>
      </div>
      <div className="button-container">
        <div className="button" onClick={increament}>
          <AiOutlinePlus />
        </div>
        <div className="button" onClick={decrement}>
          <AiOutlineMinus />
        </div>
      </div>
    </div>
  );
}

export default App;
