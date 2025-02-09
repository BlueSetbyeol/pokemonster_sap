"use client";

import PokemonCard from "@/app/UI/pokemonCard";
import { boughtPokemon, fetchPokemonToBuy } from "@/app/lib/data";
import { FetchPokemon } from "@/app/lib/data";
import type { pokemonType, pokemonToBuy } from "@/app/types/pokemonType";
import { redirect } from "next/navigation";
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

	const handleClickDelete = async (id: number) => {
		boughtPokemon(id).then((data) => {
			if (data || data === 0) {
				alert("Thank you for your purchase !");
				fetchPokemonToBuy().then((data) => setAvailablePokemons(data));
			}
		});
	};

	return (
		<article className="w-[85vw] h-[80vh] flex flex-col items-center overflow-scroll">
			<h1 className="m-5">Buy your new pokemon from our trusted provider !</h1>
			<aside className="h-[25vh]">
				<h2 className="flex justify-center m-5">Here are our best sellers :</h2>
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
				<h2 className="flex justify-center items-center m-4 md:my-4">
					Here is the list of pokemons available right now :
				</h2>
				<section className="flex flex-row flex-wrap justify-around w-[85vw]">
					{availablePokemons.length > 0 &&
						availablePokemons.map((pokemon) => (
							<article
								key={pokemon.general_info.id}
								className="flex flex-col justify-center items-center"
							>
								<PokemonCard pokemon={pokemon.general_info} />
								<div className="h-[10vh]">
									<h3>Informations :</h3>
									<p>name : {pokemon.specific_info.name_pokemon}</p>
									<p>age : {pokemon.specific_info.age_pokemon} years</p>
								</div>
								<button
									type="button"
									onClick={() => handleClickDelete(pokemon.specific_info.id)}
									className="border-red-400 border-2 mb-5 p-2 rounded-md hover:bg-red-700 hover:border-white"
								>
									Buy this pokemon
								</button>
							</article>
						))}
				</section>
			</section>
		</article>
	);
}
