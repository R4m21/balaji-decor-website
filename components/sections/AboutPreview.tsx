"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { fadeUp } from "@/lib/motion";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-black">
      <Container>
        <motion.div {...fadeUp} className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            15+ Years of Interior Excellence
          </h2>
          <p className="opacity-80 mb-6">
            Balaji Decor has transformed 500+ homes and commercial spaces in
            Mumbai with premium wallpapers and flooring solutions.
          </p>
          <Link href="/about" className="text-blue-600 font-medium">
            Learn More →
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
