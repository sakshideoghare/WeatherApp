import React, { useState } from 'react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import WeatherInfo from './Components/WeatherInfo';
import UnitToggle from './Components/UnitToggle';
import RecentSearches from './Components/RecentSearches';
import ErrorMessage from './Components/ErrorMessage';
import './App.css';


const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState('metric'); // 'metric' or 'imperial'
  const [error, setError] = useState('');
  const [recent, setRecent] = useState([]);

  return (
    <div className="app-container">
      <Header></Header>
      <SearchBar setWeatherData={setWeatherData} setError={setError} unit={unit} setRecent={setRecent} />
      <UnitToggle unit={unit} setUnit={setUnit} />
      {error && <ErrorMessage message={error} />}
      {weatherData && <WeatherInfo data={weatherData} unit={unit} />}
      <RecentSearches recent={recent} setWeatherData={setWeatherData} setError={setError} unit={unit} /> 
    </div>
  );
};

export default App;
