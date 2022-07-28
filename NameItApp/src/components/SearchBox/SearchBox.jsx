import React from 'react';
import './SearchBox.css';

function SearchBox(props) {
  const { onInputChange } = props;
  return (
    <div className="search-container">
      <input
        onChange={(event) => onInputChange(event.target.value)}
        type="text"
        placeholder="Type Keywords"
        className="search-input"
      />
    </div>
  );
}

export default SearchBox;
