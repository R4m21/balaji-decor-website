"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/ui/Container";

export default function ContactForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        { action: "submit" },
      );

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          token,
        }),
      });

      if (res.ok) {
        router.push("/thank-you");
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Submission failed.");
    }

    setLoading(false);
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
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-md"
          />

          <input
            required
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-md"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email (Optional)"
            className="w-full border p-3 rounded-md"
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
          >
            <option value="">Select Service</option>
            <option>Wallpaper Installation</option>
            <option>Wooden Flooring</option>
            <option>False Ceiling</option>
            <option>Blinds & Curtains</option>
            <option>Complete Interior</option>
          </select>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message (Optional)"
            className="w-full border p-3 rounded-md"
          />

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-gradient-primary text-white py-3 rounded-md disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </Container>
    </section>
  );
}
