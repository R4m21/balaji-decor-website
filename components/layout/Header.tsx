"use client";

import Link from "next/link";
import Container from "../ui/Container";
import config from "@/lib/config";
import Image from "next/image";

const adminWhatsAppNumber = config.adminWhatsAppNumber;

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow dark:bg-black">
      <Container className="flex items-center justify-between py-3">
        <Link href="/" className="text-xl font-bold">
          <Image
            src="/logos/logo-light.png"
            alt="Balaji Decor Logo"
            width={200}
            height={100}
            priority
            quality={85}
            className="h-16 w-auto"
          />
        </Link>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="#services">Services</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <a
          href={`tel:+${adminWhatsAppNumber}`}
          className="rounded-md bg-gradient-to-r from-brand-blue to-brand-purple px-4 py-2 text-white text-sm"
        >
          Call Now
        </a>
      </Container>
    </header>
  );
}
