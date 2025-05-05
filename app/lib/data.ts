"use server";

import type { pokemonToBuy, pokemonType, soldType } from "../types/pokemonType";

export async function FetchPokemons() {
	try {
		const response = await fetch(
			"https://pokebuildapi.fr/api/v1/pokemon/limit/201",
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
		const response = await fetch(`${process.env.URL}/api/trading`);
		const soldData: soldType[] = await response.json();

		const pokeData: pokemonToBuy[] = [];
		for (const pokemon of soldData) {
			const data = await FetchPokemon(pokemon.id_pokemon);
			pokeData.push({
				general_info: data,
				specific_info: pokemon,
			});
		}
		return pokeData;
	} catch (error) {
		console.error("Database Error:", error);
		throw new Error("Failed to fetch the goods.");
	}
}

export async function addSoldPokemon(
	request: Omit<soldType, "id">,
): Promise<number> {
	try {
		const response = await fetch(`${process.env.URL}/api/trading`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(request),
		});
		const data: number = await response.json();
		return data;
	} catch (error) {
		console.error("Database Error:", error);
		throw new Error("Failed to add to the database.");
	}
}

export async function boughtPokemon(id: number): Promise<pokemonToBuy> {
	console.log(id);
	try {
		const response = await fetch(`${process.env.URL}/api/trading`, {
			method: "DELETE",
			body: JSON.stringify({ id }),
		});
		console.log(response);
		const data = await response.json();
		console.log(data.insertId);
		return data;
	} catch (error) {
		console.error("Database Error:", error);
		throw new Error("Failed to add to the database.");
	}
}
