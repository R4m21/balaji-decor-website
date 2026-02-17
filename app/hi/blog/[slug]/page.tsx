import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs, getAllPublishedPosts } from "@/lib/blog/queries";
import Image from "next/image";
import config from "@/lib/config";
import AutoServiceLink from "@/components/AutoServiceLink";
import { getRelatedPosts } from "@/lib/blog/queries";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = getAllPublishedPosts("HI");

  return posts.map((post) => ({
    slug: post.slug,
  }));
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, "HI");
  if (!post) return {};

  const imageUrl = post.featuredImage
    ? `${config.siteUrl}${post.featuredImage}`
    : undefined;

  return {
    title: `${post.title} | Balaji Decor`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug, "HI");

  if (!post) return notFound();
  const relatedPosts = getRelatedPosts(post.category, post.slug, post.language);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: "Balaji Decor",
    },
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <article>
        {post.featuredImage && (
          <div className="relative w-full h-80 mb-8 rounded overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        <h1 className="text-3xl font-bold mb-6">{post.title}</h1>

        <div className="prose max-w-none">
          <AutoServiceLink content={post.content} />
        </div>
      </article>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Posts</h2>

        <div className="grid gap-6">
          {relatedPosts.map((item) => (
            <Link
              key={item.slug}
              href={`/blog/${item.slug}`}
              className="border p-4 rounded-lg hover:shadow"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
