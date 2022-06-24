import React from 'react';
import Card from './Card';
import style from '../styles/cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={style.cards}>
    {props.cities.map(c => 
      <Card
      max={c.main.temp_max}
      min={c.main.temp_min}
      name={c.name}
      img={c.weather[0].icon}
      onClose={() => alert(c.name)}
      key = {c.id}
    />)}
    </div>)
};