import { PokemonClient, EvolutionClient, PokemonType } from "pokenode-ts";
import { mkdirSync, writeFileSync } from "node:fs";
import {
  evolutionDetails,
  evolutionNode,
  pokemonData,
  pokemonType,
} from "@/app/types/pokemonType";

const pokemonLimitedNumber = 201;
const delayForAPI = 100;
const destinationFile = `data/pokemons.json`;

const pokemonApi = new PokemonClient();
const evolutionApi = new EvolutionClient();

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const idFromUrl = (url: string) => Number(url.split("/").filter(Boolean).pop());

const typeIcons = new Map<string, string | null>();

async function getTypeIcon(name: string): Promise<string | null> {
  if (!typeIcons.has(name)) {
    const t: any = await pokemonApi.getTypeByName(name);
    typeIcons.set(
      name,
      t.sprites?.["generation-ix"]?.["scarlet-violet"]?.symbol_icon ?? null,
    );
    await sleep(delayForAPI);
  }
  return typeIcons.get(name)!;
}

function parseDetails(d: any): evolutionDetails {
  return {
    trigger: d.trigger?.name ?? null,
    minLevel: d.min_level ?? null,
    item: d.item?.name ?? null,
    heldItem: d.held_item?.name ?? null,
    minHappiness: d.min_happiness ?? null,
    timeOfDay: d.time_of_day || null,
    knownMove: d.known_move?.name ?? null,
  };
}

function buildTree(node: any): evolutionNode {
  return {
    id: idFromUrl(node.species.url),
    name: node.species.name,
    details: node.evolution_details.map(parseDetails),
    evolvesTo: node.evolves_to.map(buildTree),
  };
}

function prune(node: evolutionNode): evolutionNode {
  return {
    ...node,
    evolvesTo: node.evolvesTo
      .filter((n) => n.id <= pokemonLimitedNumber)
      .map(prune),
  };
}

const evolutionChains: Record<number, evolutionNode> = {};

async function getEvolutionChainId(pokemonId: number): Promise<number> {
  const species = await pokemonApi.getPokemonSpeciesById(pokemonId);
  const chainId = idFromUrl(species.evolution_chain.url);

  if (!evolutionChains[chainId]) {
    const chain = await evolutionApi.getEvolutionChainById(chainId);
    evolutionChains[chainId] = prune(buildTree(chain.chain));
    await sleep(delayForAPI);
  }
  return chainId;
}

async function main() {
  const pokemons: pokemonType[] = [];

  for (let id = 1; id <= pokemonLimitedNumber; id++) {
    const p = await pokemonApi.getPokemonById(id);
    const stat = (name: string) =>
      p.stats.find((s) => s.stat.name === name)?.base_stat ?? 0;

    pokemons.push({
      id: p.id,
      name: p.name,
      sprite: p.sprites.front_default ?? null,
      image: p.sprites.other?.["official-artwork"]?.front_default ?? null,
      hp: stat("hp"),
      attack: stat("attack"),
      defense: stat("defense"),
      special_attack: stat("special-attack"),
      special_defense: stat("special-defense"),
      speed: stat("speed"),
      types: await Promise.all(
        p.types.map(async (t) => ({
          name: t.type.name,
          icon: await getTypeIcon(t.type.name),
        })),
      ),
      abilities: p.abilities.map((a) => a.ability.name),
      evolutionChainId: await getEvolutionChainId(p.id),
    });

    console.log(`[${id}/${pokemonLimitedNumber}] ${p.name}`);
    await sleep(delayForAPI);
  }

  const data: pokemonData = { pokemons, evolutionChains };
  mkdirSync("data", { recursive: true });
  writeFileSync(destinationFile, JSON.stringify(data, null, 2));
  console.log(
    `\nDone: ${pokemons.length} Pokémon written to ${destinationFile}`,
  );
}

main().catch((err) => {
  console.error("Export failed:", err);
  process.exit(1);
});
