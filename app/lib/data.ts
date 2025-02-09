"use server";

import type { pokemonToBuy, pokemonType, soldType } from "../types/pokemonType";

export async function FetchPokemons() {
	try {
		const response = await fetch(
			"https://pokebuildapi.fr/api/v1/pokemon/limit/151",
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Database Error:", error);
		throw new Error("Failed to fetch pokemons' data.");
	}
}

export async function FetchPokemon(id: number): Promise<pokemonType> {
	try {
		const response = await fetch(
			`https://pokebuildapi.fr/api/v1/pokemon/${id}`,
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Database Error:", error);
		throw new Error("Failed to fetch pokemon's details.");
	}
}

export async function fetchPokemonToBuy(): Promise<pokemonToBuy[]> {
	try {
		const response = await fetch("http://localhost:3000/api/trading");
		const soldData: soldType[] = await response.json();

		const pokeData: pokemonToBuy[] = [];
		for (const pokemon of soldData) {
			const data = await FetchPokemon(pokemon.id_pokemon);
			pokeData.push({
				pokemon_info: data,
				pokemon_name: pokemon.name_pokemon,
				pokemon_age: pokemon.age_pokemon,
			});
		}
		return pokeData;
	} catch (error) {
		console.error("Database Error:", error);
		throw new Error("Failed to fetch the goods.");
	}
}
