import React, { useState, useEffect } from 'react';
import { TimeInput } from './TimeInput';
import { WeatherDisplay } from './WeatherDisplay';
import axios from 'axios';

export const WeatherContainer = () => {
  const [time, setTime] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [filteredWeather, setFilteredWeather] = useState([]);
  const [city, setCity] = useState('Kaunas');

  useEffect(() => {
    axios
      .get(`/weather?city=${city}`)
      .then((response) => setWeatherData(response.data))
      .catch((error) => console.log(error));
  }, [city]);

  const handleTime = (e) => {
    setTime(e.target.value);
    setFilteredWeather(
      weatherData.forecastTimestamps.filter((data) => {
        return data.forecastTimeUtc.split(' ')[0] === e.target.value;
      })
    );
  };

  const handleCity = (city) => {
    setCity(city);
  };

  return (
    <div className="weatherContainer">
      <TimeInput
        time={time}
        handleTime={handleTime}
        city={city}
        handleCity={handleCity}
      />
      <WeatherDisplay
        filteredWeather={filteredWeather}
        time={time}
        city={city}
      />
    </div>
  );
};
