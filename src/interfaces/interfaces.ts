export interface PokemonInfo {
  id: number;
  // index: number;
  sprites: { front_default: string };
  name: string;
  types: { type: { name: string } }[];
}

export interface PokemonInterface extends PokemonInfo {
  name: string;
  url: string;
  // moves: any[];
}

export interface PokemonContextProps {
  inputText: string;
  allPokemons: PokemonInterface[];
  setAllPokemons: React.Dispatch<React.SetStateAction<PokemonInterface[]>>;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
}

export interface MovesInterface extends PokemonInfo {
  name: string;
  accuracy: number;
  pp: number;
  power: number;
  type: string;
  color: string;
}

export interface PokemonDetailsInterface {
  abilities: any;
  base_experience: any;
  forms: any;
  game_indices: any;
  height: any;
  held_items: any;
  id: number;
  is_default: boolean;
  location_area_encounters: string;

  name: string;
  order: number;
  past_types: any;
  species: any;
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }[];
  types: { type: { name: string } }[];
  moves: { move: { name: string; url: string }; version_group_details: any }[];
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
