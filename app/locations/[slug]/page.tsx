import { locations } from "@/lib/locations";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import config from "@/lib/config";

type Props = {
  params: Promise<{ slug: string }>;
};

const baseUrl = config.siteUrl;
const adminWhatsAppNumber = config.adminWhatsAppNumber;

export async function generateStaticParams() {
  return locations.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = locations.find((l) => l.slug === slug);

  if (!data) return {};

  const url = `${baseUrl}/${data.slug}`;

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url,
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const data = locations.find((l) => l.slug === slug);

  if (!data) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Balaji Decor",
    image: `${baseUrl}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: data.city,
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
    areaServed: data.city,
    telephone: `+${adminWhatsAppNumber}`,
    url: `${baseUrl}/${data.slug}`,
  };

  return (
    <main className="container py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-3xl font-bold mb-6">
        Interior Contractor in {data.city}
      </h1>

      <p className="text-gray-600 mb-6">
        Balaji Decor provides premium interior services in {data.city} including
        designer wallpaper, wooden flooring, PVC vinyl flooring, blinds
        installation, POP false ceiling and complete interior contracting.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Why Choose Balaji Decor in {data.city}?
      </h2>

      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>15+ Years Experience</li>
        <li>500+ Completed Projects</li>
        <li>Premium Imported Wallpaper Collection</li>
        <li>Professional Installation Team</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6 text-gray-600">
        <div>
          <h3 className="font-semibold">
            Do you provide interior services across {data.city}?
          </h3>
          <p>
            Yes, we serve residential and commercial interior projects across{" "}
            {data.city}.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">
            What services do you offer in {data.city}?
          </h3>
          <p>
            Wallpaper installation, wooden flooring, blinds, false ceiling,
            painting and complete interior contracting.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <Link
          href="/services/designer-wallpaper"
          className="text-blue-600 underline"
        >
          Explore Our Interior Services
        </Link>
      </div>
    </main>
  );
}
