import mysql from "mysql2/promise";

const baseConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

const pool = mysql.createPool(
  process.env.DB_SOCKET
    ? { ...baseConfig, socketPath: process.env.DB_SOCKET }
    : { ...baseConfig, host: process.env.DB_HOST, port: Number(process.env.DB_PORT) || 3306 }
);

export default pool;