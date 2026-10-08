import { Pool } from "pg";
import { readFileSync } from "node:fs";
import { pokemonData } from "./app/types/pokemonType";

const data: pokemonData = JSON.parse(
  readFileSync("./app/api/data/pokemons.json", "utf-8"),
);

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function main() {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    await client.query(`
			CREATE TABLE IF NOT EXISTS evolution_chains (
				id    INTEGER PRIMARY KEY,
				tree  JSONB NOT NULL
			)
		`);

    await client.query(`
			CREATE TABLE IF NOT EXISTS pokemons (
				id                 INTEGER PRIMARY KEY,
				name               TEXT NOT NULL,
				sprite             TEXT,
				image              TEXT,
				hp                 INTEGER NOT NULL,
				attack             INTEGER NOT NULL,
				defense            INTEGER NOT NULL,
				special_attack     INTEGER NOT NULL,
				special_defense    INTEGER NOT NULL,
				speed              INTEGER NOT NULL,
				types              JSONB NOT NULL,
				abilities          TEXT[] NOT NULL,
				evolution_chain_id INTEGER NOT NULL REFERENCES evolution_chains(id)
			)
		`);

    for (const [id, tree] of Object.entries(data.evolutionChains)) {
      await client.query(
        `INSERT INTO evolution_chains (id, tree)
				 VALUES ($1, $2)
				 ON CONFLICT (id) DO UPDATE SET tree = EXCLUDED.tree`,
        [Number(id), JSON.stringify(tree)],
      );
    }

    for (const p of data.pokemons) {
      await client.query(
        `INSERT INTO pokemons (
					id, name, sprite, image,
					hp, attack, defense, special_attack, special_defense, speed,
					types, abilities, evolution_chain_id
				) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
				ON CONFLICT (id) DO UPDATE SET
					name = EXCLUDED.name,
					sprite = EXCLUDED.sprite,
					image = EXCLUDED.image,
					hp = EXCLUDED.hp,
					attack = EXCLUDED.attack,
					defense = EXCLUDED.defense,
					special_attack = EXCLUDED.special_attack,
					special_defense = EXCLUDED.special_defense,
					speed = EXCLUDED.speed,
					types = EXCLUDED.types,
					abilities = EXCLUDED.abilities,
					evolution_chain_id = EXCLUDED.evolution_chain_id`,
        [
          p.id,
          p.name,
          p.sprite,
          p.image,
          p.stats.hp,
          p.stats.attack,
          p.stats.defense,
          p.stats.special_attack,
          p.stats.special_defense,
          p.stats.speed,
          JSON.stringify(p.types),
          p.abilities,
          p.evolutionChainId,
        ],
      );
    }

    await client.query("COMMIT");
    console.log(
      `Done: ${data.pokemons.length} Pokémon and ${
        Object.keys(data.evolutionChains).length
      } evolution chains inserted.`,
    );
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
