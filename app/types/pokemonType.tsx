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
