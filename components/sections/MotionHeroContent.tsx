"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { fadeUp } from "@/lib/motion";

export default function MotionHeroContent() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  if (isMobile) {
    return (
      <div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Premium Interior Wallpaper & Flooring Solutions
        </h1>
        <p className="mt-6 max-w-xl text-lg opacity-90">
          Transform your space with designer wallpaper, wooden flooring, blinds
          & more. Serving Mumbai with 15+ years experience.
        </p>
        <div className="mt-8">
          <Button href="#contact">Get Free Consultation</Button>
        </div>
      </div>
    );
  }

  return (
    <motion.div {...fadeUp}>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Premium Interior Wallpaper & Flooring Solutions
      </h1>
      <p className="mt-6 max-w-xl text-lg opacity-90">
        Transform your space with designer wallpaper, wooden flooring, blinds &
        more. Serving Mumbai with 15+ years experience.
      </p>
      <div className="mt-8">
        <Button href="#contact">Get Free Consultation</Button>
      </div>
    </motion.div>
  );
}
