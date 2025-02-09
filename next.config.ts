import type { NextConfig } from "next";

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const nextConfig: NextConfig = {
	env: {
		host: DB_HOST,
		port: DB_PORT,
		user: DB_USER,
		password: DB_PASSWORD,
		database: DB_NAME,
	},
};

export default nextConfig;
