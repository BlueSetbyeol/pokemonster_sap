"use client";

import PokemonCard from "@/app/UI/pokemonCard";
import { FetchPokemon } from "@/app/lib/data";
import type { pokemonType } from "@/app/types/pokemonType";
import { useEffect, useState } from "react";

export default function Page() {
	const [bestPokemons, setBestPokemons] = useState<pokemonType[]>([]);

	const pokemonsId = [143, 197];

	useEffect(() => {
		const pokeball: pokemonType[] = [];
		for (const pokemonId of pokemonsId) {
			FetchPokemon(pokemonId).then((data) => pokeball.push(data));
		}
		setBestPokemons(pokeball);
	}, []);
	return (
		<>
			<h1 className="m-5">Buy your new pokemon from our trusted provider !</h1>
			<aside>
				<h2 className="flex justify-center my-5">
					Here are our best sellers :
				</h2>
				{bestPokemons.length > 0 &&
					bestPokemons.map((pokemon) => (
						<section
							key={pokemon.id}
							className="flex flex-row justify-center items-center gap-7"
						>
							<PokemonCard pokemon={pokemon} />
						</section>
					))}
			</aside>
			<section>
				<h2 className="flex justify-center my-5">
					Here is the list of pokemons available right now :
				</h2>
				{/* <PokemonCard pokemon={}/> */}
			</section>
		</>
	);
}
