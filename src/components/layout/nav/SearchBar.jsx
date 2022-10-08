import PropTypes from 'prop-types';
import { useContext } from 'react';

import { PokemonContext } from '../../../context/PokemonContext';

const SearchBar = () => {
  const { setInputText } = useContext(PokemonContext);

  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <input placeholder={'search pokemon by name'} onChange={inputHandler} />
  );
};

SearchBar.propTypes = {
  keyword: PropTypes.string,
  setKeyword: PropTypes.string,
};

export default SearchBar;
