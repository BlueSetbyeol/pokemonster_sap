import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { pokemonType } from "../types/pokemonType";
import { FetchPokemon } from "../lib/data";

interface pokemonInfoProps {
  pokeID?: number;
}

export default function PokemonPopup({ pokeID }: pokemonInfoProps) {
  const [pokemon, setPokemon] = useState<pokemonType>();
  useEffect(() => {
    if (pokeID) {
      FetchPokemon(pokeID).then((data) => setPokemon(data));
    }
  }, [pokeID]);
  return (
    <>
      {pokemon !== null && pokemon !== undefined && (
        <section className="flex flex-row justify-between md:justify-evenly p-2 rounded-lg bg-red-100 w-full h-[55%]">
          <p className="text-red-700 text-[200%] md:text-[150%] -top-px md:top-1.25 right-3.75 absolute">
            ✘
          </p>
          <article
            className="flex flex-col items-start md:pl-4 w-[30vw] md:w-[20vw] h-[18vh] relative"
            key={pokemon.id}
          >
            <h2 className="text-black text-2xl">{pokemon.name}</h2>
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
          <article className="text-black flex flex-col items-start md:pr-2">
            <h3 className="flex flex-row items-center">
              Details :
              {pokemon.sprite && (
                <img src={pokemon.sprite} alt={pokemon.name} className="h-20" />
              )}
            </h3>
            <p>Generation : {pokemon.evolutionChainId}</p>
            <p>Number in evolution : </p>
            <article className="flex flex-row">
              Type :
              <div className="flex flex-col pl-1">
                {pokemon.types.map((type) => (
                  <>
                    <p key={type.name}>{type.name}</p>
                    {type.icon && (
                      <img src={type.icon} alt={type.name} className="h-20" />
                    )}
                  </>
                ))}
              </div>
            </article>
            <p>HP : {pokemon.stats.hp}</p>
            <p>Strengh : {pokemon.stats.attack}</p>
            <p>Defence : {pokemon.stats.defense}</p>
            <p>Speed : {pokemon.stats.speed}</p>
            <p>Special attack : {pokemon.stats.special_attack}</p>
            <p>Special defense : {pokemon.stats.special_defense}</p>
          </article>
        </section>
      )}
    </>
  );
}
