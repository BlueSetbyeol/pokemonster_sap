"use client";

import { FetchPokemon } from "@/app/lib/data";
import type { pokemonType } from "@/app/types/pokemonType";
import PokemonCard from "@/app/UI/pokemonCard";
import { useEffect, useState } from "react";

export default function Page() {
	const [pokemons, setPokemons] = useState<pokemonType[] | null>(null);

	useEffect(() => {
		FetchPokemon().then((data) => setPokemons(data));
	}, []);

	console.log(pokemons);
	return (
		<>
			<h1 className="p-10 items-center">Here : </h1>
			<section className="inline-grid grid-cols-3 gap-7 items-center p-20">
				{pokemons !== undefined && pokemons !== null && pokemons.length > 0 ? (
					pokemons.map((pokemon) => (
						<section key={pokemon.id} className="flex">
							<PokemonCard pokemon={pokemon} />
						</section>
					))
				) : (
					<p>oups</p>
				)}
			</section>
		</>
	);
}
