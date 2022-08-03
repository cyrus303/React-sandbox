import React, { useState, useEffect } from 'react';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import './App.css';

const URL = 'http://metaphorpsum.com/paragraphs/1/8';

function App() {
  const [state, setState] = useState({
    selectedParagraph: 'heheheh',
    timerStarted: false,
    timeRemaning: 60,
    words: 0,
    characters: 0,
    wpm: 0,
    testInfo: [],
  });

  useEffect(() => {
    // fetch(URL)
    //   .then((response) => response.text())
    //   .then((data) =>
    //     setState((prevContent) => ({
    //       ...prevContent,
    //       selectedParagraph: data,
    //     }))
    //   );

    const selectedParagraphArray = state.selectedParagraph.split('');
    const testInfo = selectedParagraphArray.map((selectedLetter) => ({
      testLetter: selectedLetter,
      status: 'notAttempted',
    }));

    setState((prevContent) => ({
      ...prevContent,
      testInfo,
    }));
  }, []);

  function handleUserInput(inputValue) {
    console.log(inputValue);
    if (!state.timerStarted) {
      startTimer();
    }
  }

  function startTimer() {
    setState((prevContent) => ({
      ...prevContent,
      timerStarted: true,
    }));
    const timer = setInterval(() => {
      if (state.timeRemaning > 0) {
        setState((prevContent) => ({
          ...prevContent,
          timeRemaning: prevContent.timeRemaning - 1,
        }));
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }

  return (
    <div className="App">
      {/* Nav Section */}
      <Nav />
      {/* Landing Section */}
      <Landing />
      {/* Challenge Section */}
      <ChallengeSection data={state} onInputChange={handleUserInput} />
      {/* Footer Section */}

      <Footer />
    </div>
  );
}

export default App;
