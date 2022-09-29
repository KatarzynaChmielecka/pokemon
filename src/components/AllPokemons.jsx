import { useEffect, useState } from 'react';

import PokemonCard from './PokemonCard';
import { colors } from '../consts/colors';

const AllPokemons = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=30';

  useEffect(() => {
    const getAllPokemons = async () => {
      try {
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
      } catch (error) {
        console.error(error);
      }
    };

    getAllPokemons();
  }, []);

  return (
    <>
      {allPokemons.map((index) => (
        <PokemonCard
          key={index.id}
          index={index}
          image={index.sprites.front_default}
          alt={index.name + ' image'}
          name={index.name}
          color1={colors[index.types[0].type.name]}
          color2={
            index.types[1]
              ? colors[index.types[1].type.name]
              : colors[index.types[0].type.name]
          }
        />
      ))}
    </>
  );
};

export default AllPokemons;
