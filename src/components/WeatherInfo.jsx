import React from 'react';

const WeatherInfo = ({ data, unit }) => {
  if (!data || !data.sys || !data.weather || !data.main || !data.wind) {
    return <p>Weather data is not available.</p>;
  }

  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <p>Temperature: {data.main.temp}° {unit === 'metric' ? 'C' : 'F'}</p>
      <p>Condition: {data.weather[0].description}</p>
      <p>Wind Speed: {data.wind.speed} {unit === 'metric' ? 'km/h' : 'mph'}</p>
    </div>
  );
};

export default WeatherInfo;
