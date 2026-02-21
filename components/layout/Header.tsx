"use client";

import Link from "next/link";
import Container from "../ui/Container";
import config from "@/lib/config";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";

const adminWhatsAppNumber = config.adminWhatsAppNumber;

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

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

        {/* ================= DESKTOP NAV (lg+) ================= */}
        <nav className="hidden lg:flex items-center gap-10 text-sm tracking-[0.12em] uppercase">
          <Link href="/" className="transition-colors hover:text-secondary">
            Home
          </Link>
          <Link
            href="#about"
            className="transition-colors hover:text-secondary"
          >
            About
          </Link>
          <Link
            href="#services"
            className="transition-colors hover:text-secondary"
          >
            Services
          </Link>
          <Link
            href="#gallery"
            className="transition-colors hover:text-secondary"
          >
            Gallery
          </Link>
          <Link
            href="#testimonials"
            className="transition-colors hover:text-secondary"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-secondary"
          >
            Contact
          </Link>
        </nav>

        {/* ================= TABLET NAV (md only) ================= */}
        <nav className="hidden md:flex lg:hidden items-center gap-8 text-sm tracking-[0.12em] uppercase relative">
          <Link href="/" className="transition-colors hover:text-secondary">
            Home
          </Link>
          <Link
            href="#services"
            className="transition-colors hover:text-secondary"
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-secondary"
          >
            Contact
          </Link>

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center gap-1 transition-colors hover:text-secondary"
            >
              More <ChevronDown size={14} />
            </button>

            {moreOpen && (
              <div className="absolute right-0 mt-4 w-48 rounded-md border border-border bg-surface shadow-elevated">
                <div className="flex flex-col p-4 gap-4 text-xs">
                  <Link href="#about" onClick={() => setMoreOpen(false)}>
                    About
                  </Link>
                  <Link href="#gallery" onClick={() => setMoreOpen(false)}>
                    Gallery
                  </Link>
                  <Link href="#testimonials" onClick={() => setMoreOpen(false)}>
                    Testimonials
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-4">
          {/* CTA (Desktop + Tablet) */}
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

      {/* ================= MOBILE MENU ================= */}
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
