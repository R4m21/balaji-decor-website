import Image from "next/image";
import Container from "@/components/ui/Container";
import MotionHeroContent from "./MotionHeroContent";

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden">
      {/* Server-rendered hero image for LCP */}
      <Image
        // src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        src="/images/hero.jpg"
        alt="Luxury interior wallpaper and flooring design by Balaji Decor"
        fill
        priority
        sizes="(max-width: 640px) 100vw, 1920px"
        quality={75}
        placeholder="blur"
        // blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSIjMjIyMjIyIi8+PC9zdmc+"
        blurDataURL="/images/hero-blur.jpg"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <Container className="relative z-10 text-white">
        {/* Client-side motion wrapper */}
        <MotionHeroContent />
      </Container>
    </section>
  );
}
