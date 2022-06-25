import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch("Cairns");
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        className="input"
      />
      <input type="submit" value="Agregar" className="submit" />
    </form>
  );
}
