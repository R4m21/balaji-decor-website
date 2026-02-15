import { services } from "@/lib/services";
import { notFound } from "next/navigation";
import ServicePage from "@/components/sections/ServicePage";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  return <ServicePage service={service} />;
}
