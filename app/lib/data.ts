"use server";

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

export async function FetchPokemon(id: number) {
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
