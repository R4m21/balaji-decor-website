export type BlogLanguage = "EN" | "HI";

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  language: BlogLanguage;
  featuredImage?: string;
  createdAt: string;
  updatedAt: string;
  published: number; // SQLite boolean (0 | 1)
}
