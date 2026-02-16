import Database from "better-sqlite3";
import path from "path";
import { seedBlogData } from "./seed";

const dbPath = path.join(process.cwd(), "blog.db");

export const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS blog_posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    category TEXT NOT NULL,
    language TEXT NOT NULL CHECK(language IN ('EN','HI')),
    featuredImage TEXT,
    createdAt TEXT NOT NULL,
    updatedAt TEXT NOT NULL,
    published INTEGER NOT NULL DEFAULT 0
  );
`);

try {
  db.exec(`ALTER TABLE blog_posts ADD COLUMN featuredImage TEXT;`);
} catch {}


seedBlogData();
