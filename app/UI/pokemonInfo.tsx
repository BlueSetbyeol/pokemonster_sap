import type { pokemonType } from "../types/pokemonType";

interface pokemonInfoProps {
	pokemon: pokemonType;
}

export default function PokemonInfo({ pokemon }: pokemonInfoProps) {
	return (
		<>
			{pokemon !== null && (
				<>
					<article
						className="flex flex-col items-end w-[30vw] md:w-[20vw] h-[18vh] relative"
						key={pokemon.id}
					>
						<div className="p-2 rounded-lg bg-red-100 w-[100%] h-[55%]">
							<h2 className="text-black text-2xl">{pokemon.name}</h2>
						</div>
						<img
							src={pokemon.image}
							alt={pokemon.name}
							className="h-[100%] absolute mt-5"
						/>
					</article>
					<article>
						<h3>Reminder :</h3>
						<p>HP : {pokemon.stats.HP}</p>
						<p>Strengh : {pokemon.stats.attack}</p>
						<p>Defence : {pokemon.stats.defense}</p>
						<p>Speed : {pokemon.stats.speed}</p>
						<p>Special attack : {pokemon.stats.special_attack}</p>
						<p>Special defense : {pokemon.stats.special_defense}</p>
					</article>
				</>
			)}
		</>
	);
}
