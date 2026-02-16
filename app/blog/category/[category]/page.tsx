import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostsByCategory, getAllCategories } from "@/lib/blog/queries";
import config from "@/lib/config";

interface Props {
  params: Promise<{ category: string }>;
}

export const revalidate = 300;

export async function generateStaticParams() {
  const categories = getAllCategories();

  return categories.map((cat) => ({
    category: cat,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;

  const decodedCategory = decodeURIComponent(category);
  const posts = getPostsByCategory(decodedCategory);

  if (!posts.length) return {};

  const title = `${decodedCategory} Blogs in Mumbai | Balaji Decor`;
  const description = `Explore expert ${decodedCategory.toLowerCase()} guides and installation tips in Mumbai, Thane, Navi Mumbai, Pune & Nashik.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/category/${category}`,
    },
    openGraph: {
      title,
      description,
      url: `/blog/category/${category}`,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const decodedCategory = decodeURIComponent(category);
  const posts = getPostsByCategory(decodedCategory);

  if (!posts.length) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${decodedCategory} Blogs`,
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${config.siteUrl}/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4">{decodedCategory} Blogs</h1>
        <p className="text-neutral-600">
          Read expert {decodedCategory.toLowerCase()} insights from Balaji Decor
          serving Mumbai, Thane, Navi Mumbai, Pune & Nashik.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            <p className="text-neutral-600 mb-4">{post.excerpt}</p>

            <Link
              href={`/blog/${post.slug}`}
              className="text-sm font-medium underline"
            >
              Read More →
            </Link>
          </article>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
