"use server";

import { NextResponse, type NextRequest } from "next/server";
import sql from "@/app/lib/database";
import type { soldType } from "@/app/types/pokemonType";

export async function GET(req: NextRequest) {
  try {
    const result = await sql`SELECT * from pokemon_to_exchange`;

    if (result.length === 0) {
      return NextResponse.json({ error: "No Pokemons found" }, { status: 404 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}

export async function POST(req: NextRequest) {
  const request: Omit<soldType, "id"> = await req.json();

  if (
    typeof request.id_pokemon !== "number" ||
    typeof request.name_pokemon !== "string" ||
    typeof request.age_pokemon !== "number"
  ) {
    return NextResponse.json(
      { error: "Invalid informations" },
      { status: 400 },
    );
  }

  try {
    const result =
      await sql`INSERT into pokemon_to_exchange (id_pokemon, name_pokemon, age_pokemon) values (${request.id_pokemon}, ${request.name_pokemon}, ${request.age_pokemon}) RETURNING id`;

    return NextResponse.json({ id: result[0].id }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  if (Number.isNaN(id)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  try {
    const result = await sql`DELETE from pokemon_to_exchange where id=${id}`;

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
