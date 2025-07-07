import axios from 'axios';

const API_KEY = '0cc042747c642b299d40ee549eeaa864';

export const fetchWeather = async (city, unit = 'metric') => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`
  );
  console.log('API response:', response.data); 
  return response.data;
};
