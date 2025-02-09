"use server";

import { NextResponse, NextRequest } from "next/server";
import connectionDatabase from "@/app/lib/database";

export async function GET(query: string, data: []) {
	try {
		const connect = await connectionDatabase;
		const sqlQuery = "SELECT * from pokemon_to_exchange";
		const [result] = await connect.query(sqlQuery);
		return NextResponse.json(result);
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error });
	}
}
