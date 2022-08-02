import React, { useState } from 'react';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import './App.css';

function App() {
  // var TotalTime = 20;

  const [state, setState] = useState({
    selectedParagraph: 'heheheh',
    timerStarted: false,
    timeRemaning: 5,
    words: 0,
    characters: 0,
    wpm: 0,
  });

  // setState((prevContent) => {
  //   return {
  //     ...prevContent,
  //   };
  // });

  return (
    <div className="App">
      {/* Nav Section */}
      <Nav />
      {/* Landing Section */}
      <Landing />
      {/* Challenge Section */}
      <ChallengeSection data={state} />
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
