import React, { useState, useEffect } from 'react';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import './App.css';

const URL = 'http://metaphorpsum.com/paragraphs/1/8';
// const totalTime = 60;

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
    fetch(URL)
      .then((response) => response.text())
      .then((data) => {
        const selectedParagraphArray = data.split('');
        const testInfo = selectedParagraphArray.map((selectedLetter) => ({
          testLetter: selectedLetter,
          status: 'notAttempted',
        }));

        setState((prevContent) => ({
          ...prevContent,
          testInfo,
          selectedParagraph: data,
        }));
      });
  }, []);

  function handleUserInput(inputValue) {
    // console.log(inputValue);
    if (!state.timerStarted) {
      startTimer();
    }

    /*
     * 1. Handle the underflow case - all characters should be shown as not-attempted
     * 2. Handle the overflow case - early exit
     * 3. Handle the backspace case
     *      - Mark the [index+1] element as notAttempted
     *        (irrespective of whether the index is less than zero)
     *      - But, don't forget to check for the overflow here
     *        (index + 1 -> out of bound, when index === length-1)
     * 4. Update the status in test info
     *      1. Find out the last character in the inputValue and it's index
     *      2. Check if the character at same index in testInfo (state) matches
     *      3. Yes -> Correct
     *         No  -> Incorrect (Mistake++)
     * 5. Irrespective of the case, characters, words and wpm can be updated
     */

    const characters = inputValue.length;
    const words = inputValue.split(' ').length;
    const index = characters - 1;

    if (index < 0) {
      setState((prevContent) => ({
        ...prevContent,
        testInfo: [
          {
            testLetter: state.testInfo[0].testLetter,
            status: 'notAttempted',
          },
          ...state.testInfo.slice(1),
        ],
      }));
      return;
    }

    if (index > state.selectedParagraph.length) {
      setState((prevContent) => ({
        ...prevContent,
        characters,
        words,
      }));
      return;
    }
    //make a copy of test info
    const testInfo = state.testInfo;
    if (!(index === state.selectedParagraph.length)) {
      testInfo[index + 1].status = 'notAttempted';
    }

    // check for correct typed letters
    const isCorrect = inputValue[index] === testInfo[index].testLetter;

    // update the testInfo
    testInfo[index].status = isCorrect ? 'correct' : 'incorrect';

    // update state
    setState((prevContent) => ({
      ...prevContent,
      testInfo,
      words,
      characters,
    }));
  }

  function startTimer() {
    setState((prevContent) => ({
      ...prevContent,
      timerStarted: true,
    }));
    var remaning = state.timeRemaning;
    const timer = setInterval(() => {
      if (remaning > 0) {
        // * calculating wpm
        const timeSpent = 60 - remaning;
        const speed = timeSpent > 0 ? (state.words / timeSpent) * 60 : 0;
        console.log('inside' + remaning);
        setState((prevContent) => ({
          ...prevContent,
          timeRemaning: prevContent.timeRemaning - 1,
          wpm: speed,
        }));
        console.log(
          `time spent: ${timeSpent}, speed: ${speed}, timeRemaning ${remaning}`
        );
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }
  console.log('outside' + state.timeRemaning);

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
