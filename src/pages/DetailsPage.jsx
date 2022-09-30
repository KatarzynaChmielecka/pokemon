import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Moves from '../components/Moves';
import PokemonDetails from '../components/PokemonDetails';
import Stats from '../components/Stats';
import classes from './Details.module.css';

const DetailsPage = () => {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [pokemonSpecies, setPokemonSpecies] = useState(null);
  const [pokemonMoves, setPokemonMoves] = useState([]);
  useEffect(() => {
    const getPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const resJson = await res.json();

      setPokemonDetails(resJson);
    };
    getPokemon();
  }, []);

  useEffect(() => {
    const getMoves = async () => {
      const allMoves = await fetch(`https://pokeapi.co/api/v2/move?limit=1000`);
      const resJson = await allMoves.json();

      const getMove = (result) => {
        result.map(async (index) => {
          const res = await fetch(
            `https://pokeapi.co/api/v2/move/${index.name}`,
          );
          const resJson = await res.json();

          setPokemonMoves((currentList) => [...currentList, resJson]);
        });
      };
      getMove(resJson.results);
    };
    getMoves();
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

  const filteredMoves = pokemonMoves.filter((index) => {
    const movesDetails = pokemonDetails.moves.map((index) => index.move.name);

    const moves = index.name;

    return movesDetails.includes(moves);
  });

  return (
    <TabsUnstyled
      defaultValue={0}
      // style={{width:'100%'}}
    >
      <TabsListUnstyled className={classes['tabs-list']}>
        <TabUnstyled className={classes.tab}>DETAILS</TabUnstyled>
        <TabUnstyled className={classes.tab}>MOVES</TabUnstyled>
        <TabUnstyled className={classes.tab}>PLACES</TabUnstyled>
      </TabsListUnstyled>
      <TabPanelUnstyled value={0}>
        {pokemonDetails && (
          <PokemonDetails
            name={pokemonDetails.types.map((index) => index.type.name)}
            image={pokemonDetails.sprites.front_default}
          />
        )}

        {pokemonSpecies && (
          <>
            <p>{pokemonSpecies.flavor_text_entries[44].flavor_text}</p>
          </>
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
      <TabPanelUnstyled value={1}>
        <ol>
          {filteredMoves.map((index) => (
            <Moves
              key={index.name}
              name={index.name}
              accuracy={index.accuracy}
              pp={index.pp}
              power={index.power}
              type={index.type.name}
            />
          ))}
        </ol>
      </TabPanelUnstyled>
      <TabPanelUnstyled value={2}>PLACES</TabPanelUnstyled>
    </TabsUnstyled>
  );
};

export default DetailsPage;
