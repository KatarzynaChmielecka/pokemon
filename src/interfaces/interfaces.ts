export interface PokemonInfo {
  id: number;
  index: number;
  sprites: { front_default: string };
  name: string;
  types: { type: { name: string } }[];
}

export interface PokemonInterface extends PokemonInfo {
  name: string;
  url: string;
}

export interface PokemonContextProps {
  inputText: string;
  allPokemons: PokemonInterface[];
  setAllPokemons: React.Dispatch<React.SetStateAction<PokemonInterface[]>>;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
}
