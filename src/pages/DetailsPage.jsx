import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Moves from '../components/Moves';
import PokemonDetailsCard from '../components/PokemonDetailsCard';
import Stats from '../components/Stats';
import classes from './DetailsPage.module.css';
import { colors } from '../consts/colors';

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
    <TabsUnstyled defaultValue={0} className={classes.tabs}>
      <TabsListUnstyled className={classes['tabs-list']}>
        <TabUnstyled className={classes.tab}>DETAILS</TabUnstyled>
        <TabUnstyled className={classes.tab}>MOVES</TabUnstyled>
        <TabUnstyled className={classes.tab}>PLACES</TabUnstyled>
      </TabsListUnstyled>
      <TabPanelUnstyled value={0}>
        {pokemonDetails && (
          <PokemonDetailsCard
            pokemonDetails={pokemonDetails}
            pokemonSpecies={pokemonSpecies}
            name={pokemonDetails.name}
            types={pokemonDetails.types.map((index) => index.type.name)}
            src={pokemonDetails.sprites.front_default}
            alt={pokemonDetails.name + ' image'}
            color1={colors[pokemonDetails.types[0].type.name]}
            color2={
              pokemonDetails.types[1]
                ? colors[pokemonDetails.types[1].type.name]
                : ''
            }
            text={
              pokemonSpecies &&
              pokemonSpecies.flavor_text_entries[0].flavor_text.replace(
                '\f',
                ' ',
              )
            }
          />
        )}
        <div className={classes['pokemon-stats-wrapper']}>
          <h2 className={classes['pokemon-stats-wrapper__title']}>
            Base stats
          </h2>
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
