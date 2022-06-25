import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className="header">
      <div className='left-container' >
        <img src={Logo} alt="Logo soyHenry" />
        <h2>Henry - Weather App</h2>
      </div>
      <span className="searchBar">
      <SearchBar/>
      </span>
    </div>
  );
};

export default Nav;
