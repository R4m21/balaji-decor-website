import { Metadata } from "next";
import Link from "next/link";
import { getPostsByCategory } from "@/lib/blog/queries";

interface Props {
  params: { category: string };
}

export const revalidate = false; // SSG

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `${params.category} Articles | Balaji Decor`,
    description: `Read ${params.category} related interior design articles by Balaji Decor.`,
    alternates: {
      canonical: `/blog/category/${params.category}`,
    },
  };
}

export default function CategoryPage({ params }: Props) {
  const posts = getPostsByCategory(params.category, "EN");

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 capitalize">
        {params.category} Articles
      </h1>

      <div className="grid gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
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
