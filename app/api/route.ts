// import the Request and Response classes

import { NextResponse, NextRequest } from "next/server";

// define and export the GET handler function

export async function GET(request: Request) {
	// this is going to be my JSON response

	const results = {
		message: "Hello Pokemon World!",
	};

	// response with the JSON object

	return NextResponse.json(results);
}
