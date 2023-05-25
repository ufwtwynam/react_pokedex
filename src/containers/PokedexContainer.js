import React, { useEffect, useState } from 'react';
import Pokedex from '../components/Pokedex';
import PokemonDetail from '../components/PokemonDetail';

const PokedexContainer = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results))
      .catch((error) => console.error('Error fetching Pokemon:', error));
  }, []);

  const handlePokemonClick = (pokemonId) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => response.json())
      .then((data) => setSelectedPokemon(data))
      .catch((error) => console.error('Error fetching Pokemon details:', error));
  };

  return (
    <div>
      <Pokedex pokemonList={pokemonList} onPokemonClick={handlePokemonClick} />
      <PokemonDetail pokemon={selectedPokemon} />
    </div>
  );
};

export default PokedexContainer;
