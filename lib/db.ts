import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "leads.db");

const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    service TEXT,
    message TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export default db;
