import React, { useState } from 'react';

import JSONDATA from '../../../../MOCK_DATA.json';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  function submit(e) {
    return e.preventDefault();
  }

  return (
    <div className="search-box">
      <form onSubmit={submit}>
        <input
          id="search"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </form>

      <h1 className="result-list">
        {JSONDATA.filter((value) => {
          if (searchTerm === '') {
            return value;
          } else if (
            value.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return value;
          }
        }).map((value, key) => {
          console.log(key);
          if (key) {
            return (
              <div>
                <p> {value.first_name}</p>
              </div>
            );
          } else {
            {
              /* return <p>no result found</p>; */
            }
          }
        })}
      </h1>
    </div>
  );
}

export default SearchBar;
