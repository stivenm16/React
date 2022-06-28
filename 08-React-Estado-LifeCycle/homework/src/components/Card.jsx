import React from 'react';
import './Card.css'

export default function Card(props) {
  // acá va tu código
  return (
  <div className='card'>
    
    <button onClick = {props.onClose}  className='btn'>X</button>
    <h4 className='city'>{props.name}</h4>
    
    <div className='container'>
      
      <div className='minTemp'>
        <p>Min</p>
        <p>{props.min}°</p>
      </div>

      <div className='maxTemp'>
        <p>Max</p>
        <p>{props.max}°</p>
      </div>

      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Not found" className='img'/>
      
    </div>
  </div>)
};