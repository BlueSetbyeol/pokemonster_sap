"use server";

import { NextResponse, type NextRequest } from "next/server";
import sql from "@/app/lib/database";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const pokemonId = Number(id);

  if (Number.isNaN(pokemonId)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  try {
    const result = await sql`SELECT * from pokemons WHERE id = ${pokemonId}`;

    if (result.length === 0) {
      return NextResponse.json({ error: "Pokemon not found" }, { status: 404 });
    }

    return NextResponse.json(result[0], { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
