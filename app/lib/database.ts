import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

console.log(
  "POSTGRES_URL",
  process.env.POSTGRES_URL,
  "POSTGRES_USER",
  process.env.POSTGRES_USER,
  "POSTGRES_HOST",
  process.env.POSTGRES_HOST,
  "POSTGRES_DATABASE",
  process.env.POSTGRES_DATABASE,
  "POSTGRES_PASSWORD",
  process.env.POSTGRES_PASSWORD,
  "PORT",
  process.env.PORT,
);

const connectionPool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

export default connectionPool;
