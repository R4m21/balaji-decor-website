"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <section id="contact" className="py-20">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">
          Get Free Consultation
        </h2>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <input
            required
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-md"
          />
          <input
            required
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-md"
          />
          <textarea
            required
            placeholder="Your Requirement"
            className="w-full border p-3 rounded-md"
          />

          <button
            type="submit"
            className="w-full bg-gradient-primary text-white py-3 rounded-md"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </Container>
    </section>
  );
}
