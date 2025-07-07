import React, { useEffect } from 'react';
import { fetchWeather } from '../services/weatherService';

const RecentSearches = ({ recent, setWeatherData, setError, unit }) => {
  useEffect(() => {
    const saved = localStorage.getItem('recent');
    if (saved) setWeatherData(JSON.parse(saved));
  }, []);

  const handleClick = async (city) => {
    try {
      const data = await fetchWeather(city, unit);
      setWeatherData(data);
      setError('');
    } catch {
      setError('City not found.');
    }
  };

  return (
    <div className="recent-searches">
      <h4>Recent Searches</h4>
      {recent.map((city, i) => (
        <button key={i} onClick={() => handleClick(city)}>{city}</button>
      ))}
    </div>
  );
};

export default RecentSearches;
