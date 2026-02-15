"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Service } from "@/lib/services";

export default function ServicePage({ service }: { service: Service }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Balaji Decor",
      areaServed: "Mumbai",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-16">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/#services" },
              { label: service.title },
            ]}
          />

          <h1 className="text-4xl font-bold mb-6">{service.title}</h1>

          <div className="relative h-80 mb-8">
            <Image
              src="https://images.unsplash.com/photo-1618220179428-22790b461013"
              alt={`${service.title} by Balaji Decor in Mumbai`}
              fill
              sizes="100vw"
              priority
              className="object-cover rounded-lg"
            />
          </div>

          <p className="mb-6 text-lg opacity-90">{service.description}</p>

          <p className="mb-6">
            Balaji Decor is a trusted {service.title} provider and leading
            Interior Contractor in Mumbai offering premium materials and expert
            installation services.
          </p>

          <a
            href="tel:9876543210"
            className="inline-block bg-gradient-primary text-white px-6 py-3 rounded-md"
          >
            Call Now for Free Consultation
          </a>
        </Container>
      </section>
    </>
  );
}
