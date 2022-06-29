import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";


import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import City from './components/City.jsx';
import Cards from './components/Cards.jsx';


export default function App() {
  const [cities, setCities] = useState([]);
  // const [repeated, setRepeated] = useState(false)
  function onSearch(ciudad) {

    const apiKey = '4a34d196e48d4aa8b9b537136715f679'
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        
        if(recurso.main !== undefined ){ // && repeated === false
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          
          // setCities(oldCities => oldCities.filter(c => c.id === recurso.main.id));
          setCities(oldCities => [...oldCities, ciudad]);
          // setRepeated(true)
        } else {
          alert("Ciudad no encontrada");
        }
        
      });

    }
    
    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }

    let filteredCities = cities.filter((thing, index, self) => index === self.findIndex(t => (t.id === thing.id)))
    // 
    
  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      
      <Cards cities={filteredCities} onClose={onClose}/>
      
    </div>
  );
}
