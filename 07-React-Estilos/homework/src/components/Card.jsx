import React from 'react';
import style from '../styles/cardStyle.module.css'

export default function Card(props) {
  // acá va tu código
  return (
  <div className={style.card}>
    
    <button onClick = {props.onClose}  className={style.btn}>X</button>
    <h4 className={style.city}>{props.name}</h4>
    
    <div className={style.container}>
      
      <div className={style.minTemp}>
        <p>Min</p>
        <p>{props.min}</p>
      </div>

      <div className={style.maxTemp}>
        <p>Max</p>
        <p>{props.max}</p>
      </div>

      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="image not found" className={style.img}/>
      
    </div>
  </div>)
};