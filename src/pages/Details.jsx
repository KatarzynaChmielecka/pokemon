import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PokemonDetails from '../components/PokemonDetails';
import Stats from '../components/Stats';

const Details = () => {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [pokemonSpecies, setPokemonSpecies] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const resJson = await res.json();
      console.log(resJson);
      setPokemonDetails(resJson);
    };
    getPokemon();
  }, []);

  useEffect(() => {
    const getPokemonSpecies = async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${name}`,
      );
      const resJson = await res.json();
      setPokemonSpecies(resJson);
    };
    getPokemonSpecies();
  }, []);
  return (
    <div>
      Details
      {pokemonDetails && (
        <PokemonDetails
          name={pokemonDetails.types[0].type.name}
          name2={pokemonDetails.types[1].type.name}
          image={pokemonDetails.sprites.front_default}
        />
      )}
      {pokemonSpecies && (
        <p>{pokemonSpecies.flavor_text_entries[44].flavor_text}</p>
      )}
      <div>
        <h2>Base stats</h2>
        {pokemonDetails &&
          pokemonDetails.stats.map((index) => (
            <Stats
              key={index.stat.name}
              name={index.stat.name}
              base_stat={index.base_stat}
            />
          ))}
      </div>
    </div>
  );
};

export default Details;
