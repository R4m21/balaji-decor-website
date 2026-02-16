import { db } from "./db";
import { BLOG_SEED_DATA } from "./seed-data";

export function seedBlogData() {
  const existing = db
    .prepare("SELECT COUNT(*) as count FROM blog_posts")
    .get() as { count: number };

  if (existing.count > 0) return;

  const now = new Date().toISOString();

  const insert = db.prepare(`
    INSERT INTO blog_posts
    (slug, title, excerpt, content, category, language, createdAt, updatedAt, published)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)
  `);

  for (const post of BLOG_SEED_DATA) {
    insert.run(
      post.slug,
      post.title,
      post.excerpt,
      post.content,
      post.category,
      post.language,
      now,
      now,
    );
  }
}
