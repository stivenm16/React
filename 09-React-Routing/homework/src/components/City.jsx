import React from "react";
import './City.css';

function City({city}) {
    
    return(
        <div className="container">
            <p className="title">{city.name}</p>
            <div className="container-temp">
                <p>Temp: {city.temp}°</p>
                <p>Temp max: {city.max}°</p>
                <p>Temp min: {city.min}°</p>
            </div>
            <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+city.img+"@2x.png"} width="80" height="80" alt="" />    
            <div className="container-bottom">
                <div>
                    <p>Wind: {city.wind}</p>
                    <p>Clouds: {city.clouds}</p>
                </div>
                <div>
                    <p>Longitud: {city.longitud}</p>
                    <p>Latitud: {city.latitud}</p>
                </div>
            </div>
        </div>
    )
}
    
export default City;