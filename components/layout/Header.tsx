"use client";

import Link from "next/link";
import Container from "../ui/Container";
import config from "@/lib/config";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

const adminWhatsAppNumber = config.adminWhatsAppNumber;

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-[0.12em] uppercase">
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="#about" className="transition-colors hover:text-primary">
            About
          </Link>
          <Link
            href="#services"
            className="transition-colors hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="#gallery"
            className="transition-colors hover:text-primary"
          >
            Gallery
          </Link>
          <Link
            href="#testimonials"
            className="transition-colors hover:text-primary"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Desktop CTA */}
          <a
            href={`tel:+${adminWhatsAppNumber}`}
            className="hidden md:inline-flex items-center justify-center
                       rounded-md border border-border
                       px-6 py-2 text-sm tracking-[0.12em] uppercase
                       transition-all duration-300
                       hover:bg-hover hover:shadow-soft
                       active:bg-active
                       focus:outline-none focus:ring-2 focus:ring-focus"
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
                         hover:bg-hover"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-md
                       border border-border transition-all duration-300
                       hover:bg-hover"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <Container className="flex flex-col gap-6 py-6 text-sm tracking-[0.12em] uppercase">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link href="#about" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link href="#services" onClick={() => setMobileOpen(false)}>
              Services
            </Link>
            <Link href="#gallery" onClick={() => setMobileOpen(false)}>
              Gallery
            </Link>
            <Link href="#testimonials" onClick={() => setMobileOpen(false)}>
              Testimonials
            </Link>
            <Link href="#contact" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>

            {/* Mobile CTA */}
            <a
              href={`tel:+${adminWhatsAppNumber}`}
              className="mt-4 inline-flex items-center justify-center
                         rounded-md border border-border
                         px-6 py-3 text-sm tracking-[0.12em] uppercase
                         transition-all duration-300
                         hover:bg-hover hover:shadow-soft
                         active:bg-active
                         focus:outline-none focus:ring-2 focus:ring-focus"
              onClick={() => setMobileOpen(false)}
            >
              Call Now
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
