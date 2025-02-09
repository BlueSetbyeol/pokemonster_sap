"use client";

import PokemonCard from "@/app/UI/pokemonCard";
import { fetchPokemonToBuy } from "@/app/lib/data";
import { FetchPokemon } from "@/app/lib/data";
import type { pokemonType, pokemonToBuy } from "@/app/types/pokemonType";
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

	const [availablePokemons, setAvailablePokemons] = useState<pokemonToBuy[]>(
		[],
	);

	useEffect(() => {
		fetchPokemonToBuy().then((data) => setAvailablePokemons(data));
	}, []);

	return (
		<>
			<h1 className="m-5">Buy your new pokemon from our trusted provider !</h1>
			<aside className="h-[25vh]">
				<h2 className="flex justify-center mb-5">
					Here are our best sellers :
				</h2>
				<section className="flex flex-row justify-around w-[70vw]">
					{bestPokemons.length > 0 &&
						bestPokemons.map((pokemon) => (
							<section
								key={pokemon.id}
								className="flex flex-row justify-center items-center gap-7"
							>
								<PokemonCard pokemon={pokemon} />
							</section>
						))}
				</section>
			</aside>
			<section className="h-[35vh] flex flex-col justify-around">
				<h2 className="flex justify-center items-center my-4">
					Here is the list of pokemons available right now :
				</h2>
				<section className="flex flex-row justify-around w-[70vw]">
					{availablePokemons.length > 0 &&
						availablePokemons.map((pokemon) => (
							<article
								key={pokemon.pokemon_info.id}
								className="flex flex-col justify-center items-center"
							>
								<PokemonCard pokemon={pokemon.pokemon_info} />
								<div className="h-[10vh]">
									<h3>Informations :</h3>
									<p>name : {pokemon.pokemon_name},</p>
									<p>age :{pokemon.pokemon_age}</p>
								</div>
							</article>
						))}
				</section>
			</section>
		</>
	);
}
