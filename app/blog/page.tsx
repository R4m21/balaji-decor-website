import { Metadata } from "next";
import Link from "next/link";
import { getAllPublishedPosts } from "@/lib/blog/queries";
import Image from "next/image";

export const revalidate = false; // Pure SSG

export const metadata: Metadata = {
  title: "Interior Design Blog | Balaji Decor",
  description:
    "Interior design tips, wallpaper guides, flooring ideas and home improvement insights from Balaji Decor.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPublishedPosts("EN");

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Interior Design Blog</h1>

      <div className="grid gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            {post.featuredImage && (
              <div className="relative w-full h-56 mb-4 rounded overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            )}

            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            <p className="text-gray-600 mb-4">{post.excerpt}</p>

            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 font-medium"
            >
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
