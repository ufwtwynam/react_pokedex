import React, { useState } from 'react';
import './Pokedex.css';

const Pokedex = ({ pokemonList, onPokemonClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pokedex">
      <h1>Pokedex</h1>
      <input
        type="text"
        placeholder="Search Pokemon"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredPokemonList.map((pokemon) => (
          <li
            key={pokemon.id}
            className="pokemon-item"
            onClick={() => onPokemonClick(pokemon.id)}
          >
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;
