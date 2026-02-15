"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md"
      >
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>

        <p className="mb-6">Our team will contact you shortly.</p>

        <div className="flex gap-4 justify-center">
          <a
            href="tel:+919967263378"
            className="px-6 py-3 bg-black text-white rounded-lg"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/919967263378"
            className="px-6 py-3 bg-green-600 text-white rounded-lg"
          >
            WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  );
}
