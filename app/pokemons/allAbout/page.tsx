"use client";

import { FetchPokemons } from "@/app/lib/data";
import type { pokemonType } from "@/app/types/pokemonType";
import PokemonCard from "@/app/UI/pokemonCard";
import { useEffect, useState } from "react";

export default function Page() {
	const [pokemons, setPokemons] = useState<pokemonType[] | null>(null);

	useEffect(() => {
		FetchPokemons().then((data) => setPokemons(data));
	}, []);

	return (
		<article className="w-[85vw] h-[80vh] flex flex-col items-center overflow-scroll">
			<h1 className="mt-5 mb-2">Don't know what's your pokemon ?</h1>
			<p>Look it up here : </p>
			<section className="inline-grid grid-cols-2 md:grid-cols-3 gap-10 items-center m-5">
				{pokemons !== undefined && pokemons !== null && pokemons.length > 0 ? (
					pokemons.map((pokemon) => (
						<section key={pokemon.id} className="flex h-[16vh]">
							<PokemonCard pokemon={pokemon} />
						</section>
					))
				) : (
					<p>Incoming : API is working hard to get you the content.</p>
				)}
			</section>
		</article>
	);
}
