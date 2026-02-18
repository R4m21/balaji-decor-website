import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

// Below-the-fold sections (lazy loaded)
const Services = dynamic(() => import("@/components/sections/Services"), {
  ssr: true,
  loading: () => <div className="h-40" />,
});

const AboutPreview = dynamic(
  () => import("@/components/sections/AboutPreview"),
  { ssr: true, loading: () => <div className="h-40" /> },
);

const GalleryPreview = dynamic(
  () => import("@/components/sections/GalleryPreview"),
  { ssr: true, loading: () => <div className="h-40" /> },
);

const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  { ssr: true, loading: () => <div className="h-40" /> },
);

const CTA = dynamic(() => import("@/components/sections/CTA"), {
  ssr: true,
  loading: () => <div className="h-32" />,
});

const ContactForm = dynamic(() => import("@/components/sections/ContactForm"), {
  ssr: true,
  loading: () => <div className="h-32" />,
});

export default function HomePage() {
  return (
    <>
      {/* Above the fold */}
      <Hero />

      {/* Below the fold - Code Split */}
      <Services />
      <AboutPreview />
      <GalleryPreview />
      <Testimonials />
      <CTA />
      <ContactForm />
    </>
  );
}
