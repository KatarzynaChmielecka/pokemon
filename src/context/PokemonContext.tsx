import { createContext, useEffect, useState } from 'react';

import {
  PokemonContextProps,
  PokemonInterface,
} from '../interfaces/interfaces';

export const PokemonContext = createContext({} as PokemonContextProps);
export const PokemonContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [allPokemons, setAllPokemons] = useState<PokemonInterface[]>([]);
  const [inputText, setInputText] = useState('');
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=2000';
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getAllPokemons = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        const getPokemon = (result: PokemonInterface[]) => {
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
