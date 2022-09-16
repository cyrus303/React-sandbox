import { useState } from 'react';
import Result from './assets/components/Result/Result';
import SearchBar from './assets/components/SearchBar/SearchBar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <SearchBar />
      <Result />
    </div>
  );
}

export default App;
