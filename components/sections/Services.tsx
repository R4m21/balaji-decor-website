"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { fadeUp } from "@/lib/motion";

const services = [
  "Designer Wallpaper",
  "Imported Wallpaper",
  "Wooden Flooring",
  "PVC Vinyl Flooring",
  "PVC Carpet Tiles",
  "Roller & Vertical Blinds",
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <Container>
        <motion.h2 {...fadeUp} className="text-3xl font-bold text-center mb-12">
          Our Interior Services in Mumbai
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service}
              {...fadeUp}
              className="rounded-xl border p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">{service}</h3>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
