import { config } from 'dotenv';
import mysql from 'mysql';


config()

export const pool = mysql.createPool({
  connectionLimit: 10, // Ajusta el límite según tus necesidades
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});
