import { db } from "./db";
import { BlogPost } from "./types";

export function getAllPublishedPosts(language: "EN" | "HI" = "EN"): BlogPost[] {
  return db
    .prepare(
      `SELECT * FROM blog_posts 
       WHERE published = 1 AND language = ? 
       ORDER BY createdAt DESC`,
    )
    .all(language) as BlogPost[];
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return db
    .prepare(
      `SELECT * FROM blog_posts 
       WHERE slug = ? AND published = 1 
       LIMIT 1`,
    )
    .get(slug) as BlogPost | undefined;
}

export function getAllSlugs(): { slug: string }[] {
  return db
    .prepare(`SELECT slug FROM blog_posts WHERE published = 1`)
    .all() as { slug: string }[];
}

export function getPostsByCategory(
  category: string,
  language: "EN" | "HI" = "EN",
): BlogPost[] {
  return db
    .prepare(
      `SELECT * FROM blog_posts 
       WHERE LOWER(category) = LOWER(?) 
       AND language = ? 
       AND published = 1
       ORDER BY createdAt DESC`,
    )
    .all(category, language) as BlogPost[];
}

export function getAllCategories(language: "EN" | "HI" = "EN"): string[] {
  const rows = db
    .prepare(
      `SELECT DISTINCT category 
       FROM blog_posts 
       WHERE published = 1 AND language = ?`,
    )
    .all(language) as { category: string }[];

  return rows.map((row) => row.category);
}
