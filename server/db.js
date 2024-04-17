import mysql from 'mysql2';
import m
import dotenv from 'dotenv';

dotenv.config();

const db = mariaDB.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
    port: process.env.DB_PORT
});
  
 db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Foodie Connected to MySQL database');
});
  
export default db;