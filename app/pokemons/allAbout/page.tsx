"use client";

import { FetchPokemons } from "@/app/lib/data";
import type { pokemonType } from "@/app/types/pokemonType";
import PokemonCard from "@/app/UI/pokemonCard";
import PokemonPopup from "@/app/UI/pokemonPopup";
import { useEffect, useState } from "react";

export default function Page() {
	const [pokemons, setPokemons] = useState<pokemonType[] | null>(null);

	useEffect(() => {
		FetchPokemons().then((data) => setPokemons(data));
	}, []);

	const [openPopup, setOpenPopup] = useState(false);
	const [pokeId, setPokeId] = useState<number>();

	return (
		<article className="w-[85vw] h-[80vh] flex flex-col items-center overflow-scroll">
			<h1 className="mt-5 mb-2">Don't know what's your pokemon ?</h1>
			<p>Look it up here : </p>
			<section className="inline-grid grid-cols-2 md:grid-cols-3 gap-10 items-center m-5">
				{pokemons !== undefined && pokemons !== null && pokemons.length > 0 ? (
					pokemons.map((pokemon) => (
						<section key={pokemon.id} className="flex h-[16vh]">
							<button
								type="button"
								onClick={() => {
									setOpenPopup(true);
									setPokeId(pokemon.pokedexId);
								}}
							>
								<PokemonCard pokemon={pokemon} />
							</button>
						</section>
					))
				) : (
					<p>Incoming</p>
				)}
			</section>
			{openPopup && (
				<section
					className="bg-red-50/80 rounded-lg w-[75vw] h-[80vh] absolute flex justify-center items-center"
					onClick={() => setOpenPopup(false)}
					onKeyUp={() => setOpenPopup(false)}
				>
					<article className="absolute w-[96%] md:w-[60%]">
						<PokemonPopup pokeID={pokeId} />
					</article>
				</section>
			)}
		</article>
	);
}
