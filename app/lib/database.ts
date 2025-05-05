import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL as string, { ssl: "require" }); // will use psql environment variables

export default sql;
