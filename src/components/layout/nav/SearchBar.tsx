import { useContext } from 'react';

import { PokemonContext } from '../../../context/PokemonContext';

const SearchBar = () => {
  const { setInputText } = useContext(PokemonContext);

  const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const lowerCase = target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <input placeholder={'search pokemon by name'} onChange={inputHandler} />
  );
};

export default SearchBar;
