import React, { useState } from 'react';
import { fetchWeather } from '../services/weatherService';

const SearchBar = ({ setWeatherData, setError, unit, setRecent }) => {
  const [city, setCity] = useState('');

  const handleSearch = async () => {
    if (!city) return setError('Please enter a city name.');
    try {
      const data = await fetchWeather(city, unit);
      setWeatherData(data);
      setError('');
      setRecent(prev => {
        const updated = [city, ...prev.filter(c => c !== city)].slice(0, 5);
        localStorage.setItem('recent', JSON.stringify(updated));
        return updated;
      });
    } catch (err) {
      setError('City not found or API error.');
    }
    setCity('');
  };

  return (
    <div className="search-bar">
      <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="Enter city..." />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
