import { useState } from 'react';
import './App.css';
import Header from '../Header/Header.jsx';
import SearchBox from '../SearchBox/SearchBox';
import ResultContainer from '../ResultContainer/ResultContainer';

// import { name } from '@rstacruz/startup-name-generator';

function App() {
  const [headerState, setHeaderState] = useState({
    headerText: 'Name It!',
    headerExpanded: true,
    suggestedNames: [],
  });

  const name = require('@rstacruz/startup-name-generator');

  function handleChange(inputText) {
    setHeaderState((prev) => {
      if (inputText.length > 1) {
        return {
          ...prev,
          headerExpanded: false,
        };
      } else {
        return {
          ...prev,
          headerExpanded: true,
          suggestedNames: inputText ? name(inputText) : [],
        };
      }
    });
  }

  return (
    <div className="container">
      <Header headerExpanded={headerState} />
      <SearchBox onInputChange={handleChange} />
      <ResultContainer suggestedNames={headerState} />
    </div>
  );
}

export default App;
