import dotenv from "dotenv";

dotenv.config();

import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

export default connection;