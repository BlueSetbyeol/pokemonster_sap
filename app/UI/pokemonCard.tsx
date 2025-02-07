import type { pokemonType } from "../types/pokemonType";

interface pokemonCardProps {
	pokemon: pokemonType;
}

export default function PokemonCard({ pokemon }: pokemonCardProps) {
	return (
		<>
			{pokemon !== null && (
				<article
					className="rounded-lg bg-red-100 flex flex-col items-center w-[18vw] h-[10vh]"
					key={pokemon.id}
				>
					<img
						src={pokemon.image}
						alt={pokemon.name}
						className="size-[150px] "
					/>
					<h2 className="text-white">{pokemon.name}</h2>
				</article>
			)}
		</>
	);
}
