"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-primary text-white text-center">
      <Container>
        <h2 className="text-3xl font-bold mb-6">
          Ready to Transform Your Space?
        </h2>
        <Button href="#contact">Book Free Site Visit</Button>
      </Container>
    </section>
  );
}
