import { useContext } from 'react';

import PokemonCard from './PokemonCard';
import { PokemonContext } from '../context/PokemonContext';
import { PokemonInfo, PokemonInterface } from '../interfaces/interfaces';
import { colors } from '../consts/colors';

const AllPokemons = ({ searchInput }: { searchInput: string }) => {
  const { allPokemons } = useContext(PokemonContext);

  const filteredSearchPokemons = allPokemons.filter((el: PokemonInterface) =>
    searchInput === '' ? el : el.name.toLowerCase().includes(searchInput),
  );

  return (
    <>
      {filteredSearchPokemons.length === 0 && <h1>No pokemon found :(</h1>}

      {filteredSearchPokemons.map((index: PokemonInfo) => (
        <PokemonCard
          key={index.id}
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
