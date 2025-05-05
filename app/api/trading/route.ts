"use server";

import { NextResponse, type NextRequest } from "next/server";
import sql from "@/app/lib/database";
import type { soldType } from "@/app/types/pokemonType";

export async function GET(req: NextRequest) {
	try {
		const result = await sql`SELECT * from pokemon_to_exchange`;
		console.log(result);
		return NextResponse.json(result);
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error });
	}
}

export async function POST(req: NextRequest) {
	const request: Omit<soldType, "id"> = await req.json();
	// même chose que plus haut mais en plus précis :
	// const { id_pokemon, name_pokemon, age_pokemon } = await req.json();
	// const request: Omit<soldType, "id"> = {
	// 	id_pokemon,
	// 	name_pokemon,
	// 	age_pokemon,
	// };
	console.log(request.id_pokemon);
	try {
		const result =
			await sql`INSERT into pokemon_to_exchange (id_pokemon, name_pokemon, age_pokemon) values (${request.id_pokemon}, ${request.name_pokemon}, ${request.age_pokemon}) RETURNING id`;
		return NextResponse.json(result[0].id, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error }, { status: 500 });
	}
}

export async function DELETE(req: NextRequest) {
	const { id } = await req.json();
	console.log(id);
	try {
		const result = await sql`DELETE from pokemon_to_exchange where id=${id}`;
		return NextResponse.json(result);
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error }, { status: 500 });
	}
}
