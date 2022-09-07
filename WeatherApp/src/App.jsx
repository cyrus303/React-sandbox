import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [geoData, setGeoData] = useState({});
  const [location, setLocation] = useState('');

  const API_KEY = '43692b62367842e0a425fb6a98d28a5f';

  const GEO_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${
    location ? location : 'Dublin'
  }&limit=5&appid=${API_KEY}`;

  function fetchData() {
    axios.get(GEO_URL).then((response) => {
      let lat = response.data[0].lat;
      let lon = response.data[0].lon;
      setGeoData(response.data);
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

      axios.get(URL).then((response) => {
        setData(response.data);
      });
    });
    setLocation('');
  }

  useEffect(() => {
    fetchData();
  }, []);

  const searchLocation = () => {
    if (event.key === 'Enter') {
      fetchData();
    }
  };
  // todo build a default case

  // console.log(geoData[0]);

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
            {geoData.length > 0 ? <p>{geoData[0].name}</p> : null}
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? (
              <p className="bold">{data.main.feels_like.toFixed()} °C</p>
            ) : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity} %</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.main ? (
              <p className="bold">{(data.wind.speed * 3.6).toFixed()} Kmph</p>
            ) : null}
            <p>Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
