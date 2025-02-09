export interface IDBSettings {
	host?: string;
	port?: string;
	user?: string;
	password?: string;
	database?: string;
}

export const GetDBSettings = (): IDBSettings => {
	const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
	return {
		host: DB_HOST,
		port: DB_PORT,
		user: DB_USER,
		password: DB_PASSWORD,
		database: DB_NAME,
	};
};
