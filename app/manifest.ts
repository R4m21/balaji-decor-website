import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Balaji Decor",
    short_name: "Balaji Decor",
    description: "Premium Interior & Wallpaper Contractor in Maharashtra",
    start_url: "/",
    display: "standalone",
    background_color: "#0F172A",
    theme_color: "#0EA5E9",
    icons: [
      {
        src: "/favicons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicons/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
