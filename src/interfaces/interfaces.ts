export interface PokemonInfo {
  id: number;
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

export interface MovesInterface {
  name: string;
  accuracy: number;
  pp: number;
  power: number;
  type: { name: string };
  color: string;
}

export interface PokemonDetailsInterface {
  name: string;
  types: { type: { name: string } }[];
  sprites: { front_default: string };
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }[];
  moves: { move: { name: string } }[];
}

export interface PokemonCardInterface {
  image: string;
  alt: string;
  name: string;
  color1: string;
  color2: string;
}

export interface PokemonDetailsCardInterface {
  text: string;
  name: string;
  types: string[];
  src: string;
  alt: string;
  color1: string;
  color2: string;
}

export interface SpeciesInterface {
  flavor_text_entries: { flavor_text: string }[];
}
