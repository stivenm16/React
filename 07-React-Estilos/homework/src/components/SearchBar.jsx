import React from 'react';
import style from '../styles/search.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={style.container}>
      <input type='text' placeholder = 'City' className={style.input}/>
      <button onClick = { () => props.onSearch('Buscando') } className={style.btn}>Add</button>
    </div>)
};