import React from 'react';
import JSONDATA from '../../../../MOCK_DATA.json';

function Result() {
  console.log(JSONDATA);

  let data = JSONDATA.map((element) => {
    return <p>{element}</p>;
  });

  console.log(data[0]);
  //   return <h1>hello from Result {data[0]}</h1>;
}

export default Result;
