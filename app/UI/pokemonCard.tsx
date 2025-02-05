import type { pokemonType } from "../types/pokemonType";

interface pokemonCardProps {
	pokemon: pokemonType;
}

export default function PokemonCard({ pokemon }: pokemonCardProps) {
	return (
		<>
			{pokemon !== null && (
				<article className="rounded-lg bg-indigo-50">
					<img src={pokemon.sprite} alt="sprite of" className="size-100 " />
					<h2 className="text-black">{pokemon.name}</h2>
				</article>
			)}
		</>
	);
}
