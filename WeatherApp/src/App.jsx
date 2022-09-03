import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const API_KEY = '43692b62367842e0a425fb6a98d28a5f';

  const GEO_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${API_KEY}`;

  const searchLocation = () => {
    if (event.key === 'Enter') {
      axios.get(GEO_URL).then((response) => {
        let lat = response.data[0].lat;
        let lon = response.data[0].lon;

        // console.log(response.data);

        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

        axios.get(URL).then((response) => {
          // console.log(response.data);
          setData(response.data);
        });
      });
    }
  };

  console.log(data);
  return (
    <div className="App">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter Location"
        ></input>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{location}</p>
          </div>
          <div className="temp">
            <h1>{}</h1>
          </div>
          <div className="description">
            <p>clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">65 °F</p>
            <p>Feels Liks</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 Kmph</p>
            <p>Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
