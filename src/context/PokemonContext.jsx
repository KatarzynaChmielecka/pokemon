import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

export const PokemonContext = createContext();

export const PokemonContextProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [inputText, setInputText] = useState('');
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=2000';
  const [isLoading, setIsLoading] = useState(true);
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

            setIsLoading(false);
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
    <PokemonContext.Provider
      value={{
        allPokemons,
        setAllPokemons,
        inputText,
        setInputText,
        setIsLoading,
        isLoading,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

PokemonContextProvider.propTypes = {
  children: PropTypes.node,
};
