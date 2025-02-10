import type { pokemonType } from "../types/pokemonType";

interface pokemonCardProps {
	pokemon: pokemonType;
}

export default function PokemonCard({ pokemon }: pokemonCardProps) {
	return (
		<>
			{pokemon !== null && (
				<article
					className="flex flex-col items-end w-[30vw] md:w-[18vw] h-[18vh] relative"
					key={pokemon.id}
				>
					<div className="p-2 rounded-lg bg-red-100 w-[100%] h-[55%]">
						{""}
						<h2 className="text-black">{pokemon.name}</h2>
					</div>
					<img
						src={pokemon.image}
						alt={pokemon.name}
						className="h-[100%] absolute mt-3"
					/>
				</article>
			)}
		</>
	);
}
