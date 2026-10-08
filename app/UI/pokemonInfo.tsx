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
            <div className="p-2 rounded-lg bg-red-100 w-full h-[55%]">
              <h2 className="text-black text-2xl">{pokemon.name}</h2>
            </div>
            {pokemon.image ? (
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="h-full absolute mt-5"
              />
            ) : (
              <p>{pokemon.name}</p>
            )}
          </article>
          <article>
            <h3>Reminder :</h3>
            <p>HP : {pokemon.hp}</p>
            <p>Strengh : {pokemon.attack}</p>
            <p>Defence : {pokemon.defense}</p>
            <p>Speed : {pokemon.speed}</p>
            <p>Special attack : {pokemon.special_attack}</p>
            <p>Special defense : {pokemon.special_defense}</p>
          </article>
        </>
      )}
    </>
  );
}
