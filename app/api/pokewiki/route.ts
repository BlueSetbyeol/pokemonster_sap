"use server";

import { NextResponse, type NextRequest } from "next/server";
import sql from "@/app/lib/database";
import type { pokemonType } from "@/app/types/pokemonType";

export async function GET(req: NextRequest) {
  try {
    const result: pokemonType[] = await sql`SELECT * from pokemons`;

    if (result.length === 0) {
      return NextResponse.json({ error: "No Pokemon found" }, { status: 404 });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
