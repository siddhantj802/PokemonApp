import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState('bulbasaur');
  const [pokemonData, setPokemonData] = useState({});

  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`;

  const apiCall = async () => {
    try {
      const response = await axios.get(URL);
      setPokemonData(response.data);
      setPokemon(response.data.name);
    } catch (error) {
      alert("Enter Correct Name"); // More informative error handling
    }
  };

  return (
    <div className="app">
      <h1 className="app-title">Know Your Pokemon</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search Pokemon..."
          value={pokemon}
          onChange={(e) => setPokemon(e.target.value)}
          className="search-input"
        />
        <button type="submit" onClick={apiCall} className="search-button">
          Search
        </button>
      </div>

      {pokemonData.name && (
        <div className="pokemon-card">
          <img
            src={pokemonData.sprites.front_default}
            alt={`Sprite of ${pokemonData.name}`}
            className="pokemon-sprite"
          />
          <div className="pokemon-details">
            <p className="pokemon-name">{pokemonData.name.toUpperCase()}</p>
            {/* Add more details (abilities, types, etc.) here */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
