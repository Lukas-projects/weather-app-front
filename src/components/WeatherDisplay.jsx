import React from 'react';

export const WeatherDisplay = ({ filteredWeather, time, city }) => {
  return (
    <div>
      {filteredWeather.length > 0 ? (
        <div className="weatherDisplayContainer">
          {console.log(filteredWeather)}
          <h2>
            {city} temperature On {time}
          </h2>
          {filteredWeather.map((data, i) => (
            <div key={i} className="card">
              <p>
                {data.forecastTimeUtc.split(' ')[1]}: {data.airTemperature} °C
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
