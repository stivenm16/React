import React from "react";

function City({cities}) {
    
    const city = cities[cities.length - 1]


    return(
        <div>
            <p>{city.name}</p>
            <p>{city.max}</p>
            <p>{city.min}</p>
            <p>{city.img}</p>
            <p>{city.clouds}</p>
            <p>{city.wind}</p>
            <p>{city.max}</p>
            <p>{city.longitud}</p>
            <p>{city.latitud}</p>
            <p>{city.temp}</p>
        </div>
    )
}
    
export default City;