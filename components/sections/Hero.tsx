"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { fadeUp } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        alt="Luxury interior wallpaper and flooring design by Balaji Decor"
        fill
        priority
        sizes="100vw"
        quality={85}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSIjMjIyMjIyIi8+PC9zdmc+"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <Container className="relative z-10 text-white">
        <motion.div {...fadeUp}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Premium Interior Wallpaper & Flooring Solutions
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-90">
            Transform your space with designer wallpaper, wooden flooring,
            blinds & more. Serving Mumbai with 15+ years experience.
          </p>
          <div className="mt-8">
            <Button href="#contact">Get Free Consultation</Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
