const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

import mysql from "mysql2/promise";

const connectionDatabase = mysql.createConnection({
	host: DB_HOST,
	port: Number.parseInt(DB_PORT as string),
	user: DB_USER,
	password: DB_PASSWORD,
	database: DB_NAME,
});

export default connectionDatabase;
