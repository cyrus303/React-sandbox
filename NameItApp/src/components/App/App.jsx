import { useState } from 'react';
import './App.css';
import Header from '../Header/Header.jsx';
import SearchBox from '../SearchBox/SearchBox';

function App() {
  const [headerState, setHeaderState] = useState({
    headerText: 'Name It!',
    headerExpanded: true,
  });

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

  return (
    <>
      <Header headerExpanded={headerState} />
      <SearchBox onInputChange={handleChange} />
    </>
  );
}

export default App;
