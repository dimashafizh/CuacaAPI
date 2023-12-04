import React, { useState } from 'react';
import axios from 'axios';
// import { response } from 'express';
// import logo from './logo.svg';
// import './App.css';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2bdfaf85fa347d3d8155cd8d803c161e`;

  const searchLoc = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="App ">
      <div className="search">
        <input value={location} onChange={(event) => setLocation(event.target.value)} onKeyPress={searchLoc} placeholder="Enter City" type="text"/>
      </div>
      <div className="top">
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temp">{data.main ? <h1>{data.main.temp.toFixed()} F</h1> : null}</div>
        <div className="desc">{data.weather ? <h2>{data.weather[0].main} </h2> : null}</div>
      </div>
      <div className="bottom">
        <div className="feels">
          {data.weather ? <p className="bold">{data.main.feels_like.toFixed()} F </p> : null}
          <p>Feels Like</p>
        </div>
        <div className="humidity">
          {data.weather ? <p className="bold">{data.main.humidity} % </p> : null}
          <p>Humidity</p>
        </div>
        <div className="pressure">
          {data.weather ? <p className="bold">{data.main.pressure} mph </p> : null}
          <p> Pressure</p>
        </div>
      </div>
    </div>
  );
}

export default App;
