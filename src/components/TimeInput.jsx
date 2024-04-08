import React, { useState } from 'react';

export const TimeInput = ({ time, handleTime, city, handleCity }) => {
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 7);
  const maxDateString = maxDate.toISOString().split('T')[0];
  const today = new Date();
  const todayString = today.toISOString().split('T')[0];

  const [cityInput, setCityInput] = useState(city);
  //   const [timeInput, setTimeInput] = useState(' ');

  const handleCityInput = (e) => {
    setCityInput(e.target.value);
  };

  //   const handleTimeInput = (e) => {
  //     setTimeInput(e.target.value);
  //   };

  return (
    <div className="timeInputContainer">
      <input
        type="date"
        value={time}
        onChange={handleTime}
        min={todayString}
        max={maxDateString}
      />

      <input
        type="text"
        placeholder="Enter City"
        value={cityInput}
        onChange={handleCityInput}
      />

      <button onClick={() => handleCity(cityInput)}>Change Place</button>
    </div>
  );
};
