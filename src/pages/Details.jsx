import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PokemonDetails from '../components/PokemonDetails';
import Stats from '../components/Stats';
import classes from './Details.module.css';

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
      <TabsUnstyled defaultValue={0}>
        <TabsListUnstyled className={classes['tabs-list']}>
          <TabUnstyled className={classes.tab}>DETAILS</TabUnstyled>
          <TabUnstyled className={classes.tab}>MOVES</TabUnstyled>
          <TabUnstyled className={classes.tab}>PLACES</TabUnstyled>
        </TabsListUnstyled>
        <TabPanelUnstyled value={0}>
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
        </TabPanelUnstyled>
        <TabPanelUnstyled value={1}>Second page</TabPanelUnstyled>
        <TabPanelUnstyled value={2}>Third page</TabPanelUnstyled>
      </TabsUnstyled>
    </div>
  );
};

export default Details;
