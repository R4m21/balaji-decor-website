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
export function getPostBySlug(
  slug: string,
  language: "EN" | "HI" = "EN",
): BlogPost | undefined {
  console.log("DB RESULT:", db)
  return db
    .prepare(
      `SELECT * FROM blog_posts
       WHERE slug = ?
       AND language = ?
       AND published = 1
       LIMIT 1`,
    )
    .get(slug, language) as BlogPost | undefined;
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

export function getRelatedPosts(
  category: string,
  currentSlug: string,
  language: "EN" | "HI" = "EN",
  limit = 3,
): BlogPost[] {
  const related = db
    .prepare(
      `SELECT * FROM blog_posts
       WHERE category = ?
       AND slug != ?
       AND language = ?
       AND published = 1
       ORDER BY createdAt DESC
       LIMIT ?`,
    )
    .all(category, currentSlug, language, limit) as BlogPost[];

  // fallback
  return db
    .prepare(
      `SELECT * FROM blog_posts
       WHERE slug != ?
       AND language = ?
       AND published = 1
       ORDER BY createdAt DESC
       LIMIT 3`,
    )
    .all(currentSlug, language) as BlogPost[];
}
