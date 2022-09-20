import { useState } from 'react';
import Result from './assets/components/Result/Result';
import SearchBar from './assets/components/SearchBar/SearchBar';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-container">
      <SearchBar />
      <Result />
    </div>
  );
}

export default App;
