"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const testimonials = [
  { name: "Rajesh Sharma", text: "Amazing wallpaper installation!" },
  { name: "Priya Mehta", text: "Professional and timely service." },
  { name: "Amit Verma", text: "Highly recommended for flooring work." },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="flex gap-6 overflow-x-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="min-w-[300px] rounded-xl bg-white dark:bg-black p-6 shadow"
            >
              <p className="mb-4">"{t.text}"</p>
              <p className="font-semibold">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
