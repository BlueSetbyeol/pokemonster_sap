"use client";

import { FetchPokemon } from "@/app/lib/data";
import type { pokemonType } from "@/app/types/pokemonType";
import { useEffect, useState } from "react";

export default function Page() {
	const [pokemons, setPokemons] = useState<pokemonType[] | null>(null);

	useEffect(() => {
		FetchPokemon().then((data) => setPokemons(data));
	}, []);
	return (
		<>
			<h1>Sell your captured pokemons</h1>
			<form action="submit">
				<title>Please submit the pokemon that you wish to sell :</title>
				<p>Pokemon's type :</p>
				{pokemons !== undefined && pokemons !== null && pokemons.length > 0 ? (
					pokemons.map((pokemon) => (
						<option key={pokemon.id}>{pokemon.name}</option>
					))
				) : (
					<p>We are full for the day, come back later !</p>
				)}
				<label>
					Name of the pokemon
					<input type="text" name="pokemon_name" />
				</label>
				<label>
					Age of the pokemon
					<input type="number" name="age" />
				</label>
				<input type="submit" value="Submit" />
			</form>
		</>
	);
}
