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
          <div className="p-2 rounded-lg bg-red-100 w-full h-[55%]">
            <h2 className="text-black">{pokemon.name}</h2>
          </div>
          {pokemon.image ? (
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="h-full absolute mt-3"
            />
          ) : (
            <p>{pokemon.name}</p>
          )}
        </article>
      )}
    </>
  );
}
