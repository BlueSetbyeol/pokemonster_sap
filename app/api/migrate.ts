import "dotenv/config";

import mysql from "mysql2/promise";

import fs from "node:fs";
import path from "node:path";

const schema = path.join(__dirname, "@/app/api/mysql/schema.sql");
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const migrate = async () => {
	try {
		const sql = fs.readFileSync(schema, "utf8");

		const database = await mysql.createConnection({
			host: DB_HOST,
			port: DB_PORT as number | undefined,
			user: DB_USER,
			password: DB_PASSWORD,
		});

		await database.query(`drop database if exists ${DB_NAME}`);

		await database.query(`create database ${DB_NAME}`);

		await database.query(`use ${DB_NAME}`);

		await database.query(sql);

		database.end();

		console.info(`${DB_NAME} updated from '${path.normalize(schema)}' 🆙`);
	} catch (err) {
		const { message, stack } = err as Error;
		console.error("Error updating the database:", message, stack);
	}
};

migrate();
