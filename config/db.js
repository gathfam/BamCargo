import { createConnection } from "mysql2/promise";
export default async function connectToDatabase() {
  return createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bamcargo_db",
  });
}
