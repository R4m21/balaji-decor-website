import type { MetadataRoute } from "next";
import config from "@/lib/config";
import { getAllPublishedPosts } from "@/lib/blog/queries";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = config.siteUrl;

  const posts = await getAllPublishedPosts();

  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.createdAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const serviceUrls = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const locationUrls = locations.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...blogUrls,
    ...serviceUrls,
    ...locationUrls,
  ];
}
