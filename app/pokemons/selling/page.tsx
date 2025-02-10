"use client";

import { FetchPokemon, FetchPokemons, addSoldPokemon } from "@/app/lib/data";
import type { pokemonType } from "@/app/types/pokemonType";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import PokemonInfo from "@/app/UI/pokemonInfo";

export default function Page() {
	const [pokemons, setPokemons] = useState<pokemonType[] | null>(null);

	useEffect(() => {
		FetchPokemons().then((data) => setPokemons(data));
	}, []);

	const [chosenPokemon, setChosenPokemon] = useState("");
	const [pokemonName, setPokemonName] = useState("");
	const [age, setAge] = useState("");

	const handleSubmitForm = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		const pokemonAge = Number(age);
		const idPokemon = Number(chosenPokemon);
		addSoldPokemon({
			id_pokemon: idPokemon,
			name_pokemon: pokemonName,
			age_pokemon: pokemonAge,
		}).then((data) => {
			if (data || data === 0) {
				alert(
					"We are happy to welcome your Pokemon into our SAP list. Go and see all his new friends !",
				);
				redirect("/pokemons/buying");
			}
		});
	};

	const [showPokemon, setShowPokemon] = useState<pokemonType>();
	useEffect(() => {
		if (chosenPokemon) {
			const idPokemon = Number(chosenPokemon);
			FetchPokemon(idPokemon).then((data) => setShowPokemon(data));
		}
	}, [chosenPokemon]);

	return (
		<>
			<h1 className=" m-5">Sell your captured pokemons</h1>
			<section className="flex justify-around items-center overflow-scroll">
				<form
					action="submit"
					className="flex flex-col w-[65vw] h-auto md:w-[35vw] h-[50vh] items-center justify-center gap-6 rounded-xl border-2 border-red-200 p-6"
					onSubmit={handleSubmitForm}
				>
					<article className="flex flex-col gap-10 items-start justify-center w-[50vw] md:w-[30vw]">
						<p className="text-white">
							Please submit the pokemon that you wish to sell :
						</p>
						<div className="gap-1">
							<p>Pokemon's type :</p>
							<select
								name="type_of_pokemon"
								className="rounded-md border-2 w-[48vw] md:w-[28vw] font-[family-name:var(--font-mulish)] text-black outline-red-700"
								onChange={(e) => {
									setChosenPokemon(e.target.value);
								}}
							>
								<option value="">Drop the list</option>
								{pokemons !== undefined &&
								pokemons !== null &&
								pokemons.length > 0 ? (
									pokemons.map((pokemon) => (
										<option key={pokemon.id} value={pokemon.id}>
											{pokemon.name}
										</option>
									))
								) : (
									<option>We are full for the day, come back later !</option>
								)}
							</select>
						</div>
						<label className="flex flex-col h-30">
							Name of the pokemon :
							<input
								type="text"
								name="pokemon_name"
								className="rounded-md border-2 w-[48vw] md:w-[28vw] text-black outline-red-700"
								onChange={(e) => setPokemonName(e.target.value)}
							/>
						</label>
						<label className="flex flex-col h-30">
							Age of the pokemon :
							<input
								type="number"
								name="age"
								className="rounded-md border-2 w-[48vw] md:w-[28vw] text-black outline-red-700"
								onChange={(e) => setAge(e.target.value)}
							/>
						</label>
					</article>
					<input
						type="submit"
						value="Submit"
						className="border-red-400 border-2 rounded-md p-2 hover:bg-red-700 hover:border-white"
					/>
				</form>
				<aside className="hidden md:block md:ml-6">
					{showPokemon ? (
						<PokemonInfo pokemon={showPokemon} />
					) : (
						<>
							<img
								src="https://i.pinimg.com/originals/d8/4a/16/d84a16d2dc6b5240c64f5d4bb2a56b61.gif"
								alt="scary pokemon gif"
							/>
							<p>waiting for your choice ...</p>
						</>
					)}
				</aside>
			</section>
		</>
	);
}
