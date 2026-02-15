import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import AboutPreview from "@/components/sections/AboutPreview";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import ContactForm from "@/components/sections/ContactForm";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <AboutPreview />
      <GalleryPreview />
      <Testimonials />
      <CTA />
      <ContactForm />
    </main>
  );
}
