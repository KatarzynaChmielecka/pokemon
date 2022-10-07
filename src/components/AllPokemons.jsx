import PropTypes from 'prop-types';
import { useContext } from 'react';

import PokemonCard from './PokemonCard';
import { PokemonContext } from '../context/PokemonContext';
import { colors } from '../consts/colors';

const AllPokemons = ({ searchInput }) => {
  const { allPokemons } = useContext(PokemonContext);

  const filteredSearchPokemons = allPokemons.filter((el) => {
    if (searchInput === '') {
      return el;
    } else {
      return el.name.toLowerCase().includes(searchInput);
    }
  });
  return (
    <>
      {filteredSearchPokemons.length === 0 && <h1>No data found</h1>}
      {filteredSearchPokemons.map((index) => (
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
AllPokemons.propTypes = {
  searchInput: PropTypes.string,
};
