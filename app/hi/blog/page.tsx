import { getAllPublishedPosts } from "@/lib/blog/queries";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "हिंदी ब्लॉग | Balaji Decor",
  description:
    "Balaji Decor के हिंदी ब्लॉग में पाएँ वॉलपेपर, फ्लोरिंग और इंटीरियर डिज़ाइन से जुड़ी उपयोगी जानकारी।",
};

export default function HindiBlogPage() {
  const posts = getAllPublishedPosts("HI");

  return (
    <main className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">हिंदी इंटीरियर ब्लॉग</h1>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/hi/blog/${post.slug}`}
            className="border p-5 rounded-lg hover:shadow-md"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
