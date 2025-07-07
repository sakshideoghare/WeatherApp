import React from 'react';
import Sunny from '../assets/Sunny.jpeg'; 
import Cloudy from '../assets/Cloudy.jpeg'; 
import  Rainy from '../assets/Rainy.avif'; 
import { Home, Info } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';


const Header = () => {
  return (
    
    <div className='main-containt'>
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">🌤️ Welcome to Weather Forcasting</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                 <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Home fontSize="small" style={{ margin: '0 4px 2px 0' }} />Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Info fontSize="small" style={{ margin: '0 4px 2px 0' }} />About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <p>Welcome to Weather Now — your quick and reliable weather companion.
Whether it's sunny skies, heavy rain, or a breezy evening, get accurate updates in real-time.
Check temperatures, wind speed, and sky conditions for any city around the world.
Simple, fast, and responsive — plan your day with confidence.
Because knowing the weather shouldn't be a guess.</p>
        <div className='weather-img'>
            <div className='img'><img src={Sunny} alt="Sunny Weather" /></div>
            <div className='img'><img src={Cloudy} alt="Sunny Weather" /></div>
            <div className='img'><img src={Rainy} alt="Sunny Weather" /></div>
        </div>
        <div className='search-size'>
            <button class="btn btn-primary"><a href="/SearchBar"></a>Search for Weather</button>
        </div>
        
    </div>
    

  );
};

export default Header;
