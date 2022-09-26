import { useEffect, useState } from 'react';

import PokemonCard from './PokemonCard';

const AllPokemons = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=2';
  const getAllPokemons = async () => {
    const res = await fetch(url);
    const data = await res.json();

    const getPokemon = (result) => {
      result.map(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
        );
        const resJson = await res.json();

        setAllPokemons((currentList) => [...currentList, resJson]);
      });
    };
    getPokemon(data.results);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);
  console.log(allPokemons);

  return (
    <>
      {allPokemons.map((index) => (
        <PokemonCard
          key={index.name}
          index={index}
          image={index.sprites.front_default}
          alt={index.name + ' image'}
          name={index.name}
        />
      ))}
    </>
  );
};

export default AllPokemons;
