"use client";

import { FetchPokemons } from "@/app/lib/data";
import type { pokemonType } from "@/app/types/pokemonType";
import { useEffect, useState } from "react";

export default function Page() {
	const [pokemons, setPokemons] = useState<pokemonType[] | null>(null);

	useEffect(() => {
		FetchPokemons().then((data) => setPokemons(data));
	}, []);
	return (
		<>
			<h1 className="m-5">Sell your captured pokemons</h1>
			<form
				action="submit"
				className="flex flex-col w-[35vw] h-[50vh] items-center justify-center gap-6 rounded-xl border-2 p-6"
			>
				<article className="flex flex-col gap-10 items-start justify-center w-[30vw]">
					<title>Please submit the pokemon that you wish to sell :</title>
					<div className="gap-1">
						<p>Pokemon's type :</p>
						<select
							name="type_of_pokemon"
							className="rounded-md border-2 w-[28vw]"
						>
							<option value="">Drop the list</option>
							{pokemons !== undefined &&
							pokemons !== null &&
							pokemons.length > 0 ? (
								pokemons.map((pokemon) => (
									<option key={pokemon.id}>{pokemon.name}</option>
								))
							) : (
								<option>We are full for the day, come back later !</option>
							)}
						</select>
					</div>
					<label className="flex flex-col h-30">
						Name of the pokemon
						<input
							type="text"
							name="pokemon_name"
							className="rounded-md border-2 w-[28vw]"
						/>
					</label>
					<label className="flex flex-col h-30">
						Age of the pokemon
						<input
							type="number"
							name="age"
							className="rounded-md border-2 w-[28vw]"
						/>
					</label>
				</article>
				<input
					type="submit"
					value="Submit"
					className="rounded-xl bg-red-700  w-[15vw] h-10 mt-2"
				/>
			</form>
		</>
	);
}
