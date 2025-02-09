export type pokemonType = {
	id: number;
	pokedexId: number;
	name: string;
	slug: string;
	sprite: string;
	stats: {
		HP: number;
		attack: number;
		defense: number;
		special_attack: number;
		special_defense: number;
		speed: number;
	};
	image: string;
	apiTypes: { name: string; image: string }[];
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
