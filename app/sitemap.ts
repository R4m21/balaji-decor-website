import type { MetadataRoute } from "next";
import config from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = config.siteUrl;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
