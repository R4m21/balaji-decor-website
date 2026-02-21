"use client";

import Link from "next/link";
import Container from "../ui/Container";
import config from "@/lib/config";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const adminWhatsAppNumber = config.adminWhatsAppNumber;

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          {mounted && (
            <Image
              src={
                theme === "dark"
                  ? "/logos/logo-dark.png"
                  : "/logos/logo-light.png"
              }
              alt="Balaji Decor Logo"
              width={180}
              height={80}
              priority
              className="h-14 w-auto"
            />
          )}
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-[0.12em] uppercase">
          <Link href="/" className="hover:opacity-60 transition-opacity">
            Home
          </Link>
          <Link href="#about" className="hover:opacity-60 transition-opacity">
            About
          </Link>
          <Link
            href="#services"
            className="hover:opacity-60 transition-opacity"
          >
            Services
          </Link>
          <Link href="#gallery" className="hover:opacity-60 transition-opacity">
            Gallery
          </Link>
          <Link
            href="#testimonials"
            className="hover:opacity-60 transition-opacity"
          >
            Testimonials
          </Link>
          <Link href="#contact" className="hover:opacity-60 transition-opacity">
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* CTA — Token Based Inversion */}
          <a
            href={`tel:+${adminWhatsAppNumber}`}
            className="rounded-md border border-foreground
                       px-6 py-2 text-sm tracking-[0.12em] uppercase
                       transition-all duration-300
                       hover:bg-foreground/10
                       hover:shadow-soft"
          >
            Call Now
          </a>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-9 w-9 items-center justify-center rounded-full
                         border border-border
                         transition-all duration-300
                         hover:scale-105 hover:shadow-sm"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
        </div>
      </Container>
    </header>
  );
}
