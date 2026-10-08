export type pokemonTypeInfo = {
  name: string;
  icon: string | null;
};

export type pokemonType = {
  id: number;
  name: string;
  sprite: string | null;
  image: string | null;
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  types: pokemonTypeInfo[];
  abilities: string[];
  evolutionChainId: number;
};

export type soldType = {
  id: number;
  id_pokemon: number;
  name_pokemon: string;
  age_pokemon: number;
};

export type pokemonToBuy = {
  general_info: pokemonType;
  specific_info: soldType;
};

export type evolutionDetails = {
  trigger: string | null;
  minLevel: number | null;
  item: string | null;
  heldItem: string | null;
  minHappiness: number | null;
  timeOfDay: string | null;
  knownMove: string | null;
};

export type evolutionNode = {
  id: number;
  name: string;
  details: evolutionDetails[];
  evolvesTo: evolutionNode[];
};

export type pokemonData = {
  pokemons: pokemonType[];
  evolutionChains: Record<number, evolutionNode>;
};
