import connectionPool from "@/app/lib/database";
import pokemonster from "@/app/lib/place-holder-data";

async function seedPokemonster() {
  await connectionPool.query(`
    CREATE TABLE IF NOT EXISTS pokemon_to_exchange(
    id INT PRIMARY KEY auto increment NOT NULL,
    id_pokemon INT NOT NULL,
    name_pokemon VARCHAR(150) NOT NULL,
    age_pokemon INT
    );
  `);

  if (pokemonster.length > 0) {
    const values = pokemonster
      .map(
        ({ id_pokemon, name_pokemon, age_pokemon }) =>
          `(${id_pokemon}, '${name_pokemon}', ${age_pokemon})`,
      )
      .join(",\n");

    await connectionPool.query(`
      INSERT INTO pokemon_to_exchange
        (id_pokemon, name_pokemon, age_pokemon)
      VALUES
      ${values};
    `);
  }

  return { inserted: pokemonster.length };
}

export async function GET() {
  try {
    const result = await seedPokemonster();
    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    console.error("seed error", error);
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
