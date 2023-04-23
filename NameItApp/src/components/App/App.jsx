import { useState } from 'react';
import './App.css';
import Header from '../Header/Header.jsx';
import SearchBox from '../SearchBox/SearchBox';
import ResultContainer from '../ResultContainer/ResultContainer';

import { name } from '@rstacruz/startup-name-generator';

function App() {
  const [headerState, setHeaderState] = useState({
    headerText: 'Name It!',
    headerExpanded: true,
  });

  // const name = require('@rstacruz/startup-name-generator');

  function handleChange(inputText) {
    setHeaderState((prev) => {
      if (inputText.length) {
        return {
          ...prev,
          headerExpanded: false,
        };
      } else {
        return {
          ...prev,
          headerExpanded: true,
        };
      }
    });
  }
  // console.log(name('hello'));
  return (
    <>
      <Header headerExpanded={headerState} />
      <SearchBox onInputChange={handleChange} />
      <ResultContainer />
    </>
  );
}

export default App;
