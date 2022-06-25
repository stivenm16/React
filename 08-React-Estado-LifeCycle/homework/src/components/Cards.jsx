import React from 'react';
import Card from './Card';
import style from './Cards.css'

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  if(cities){
  return (
    <div className={style.cards}>
    {cities.map(c => 
      <Card
      max={c.main.temp_max}
      min={c.main.temp_min}
      name={c.name}
      img={c.weather[0].icon}
      onClose={() => onClose(c.id)}
      id = {c.id}
    />)}
    </div>
    )
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
};