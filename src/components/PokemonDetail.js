import React, { useState } from 'react';

const PokemonDetail = ({ pokemon }) => {
  const [showImage, setShowImage] = useState(false);

  const handleToggleImage = () => {
    setShowImage(!showImage);
  };

  if (!pokemon) {
    return null;
  }

  return (
    <div>
      <h2>{pokemon.name}</h2>
      {showImage && <img src={pokemon.image} alt={pokemon.name} />}
      <button onClick={handleToggleImage}>
        {showImage ? 'Hide Image' : 'Show Image'}
      </button>
      <p>Type: {pokemon.type}</p>
      <p>Abilities: {pokemon.abilities.join(', ')}</p>
    </div>
  );
};

export default PokemonDetail;
