"use client";

import Link from "next/link";
import Container from "../ui/Container";
import config from "@/lib/config";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";

const adminWhatsAppNumber = config.adminWhatsAppNumber;

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("/");
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  /* Scroll detection for glass */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = NAV_ITEMS.map((i) =>
        i.href.startsWith("#") ? i.href.substring(1) : null,
      ).filter(Boolean);

      for (const id of sections) {
        const el = document.getElementById(id!);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(`#${id}`);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close dropdown outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const desktopItems = NAV_ITEMS;
  const tabletVisible = NAV_ITEMS.slice(0, 3);
  const tabletMore = NAV_ITEMS.slice(3);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-soft"
          : "bg-background"
      } border-b border-border`}
    >
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/">
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

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-10 text-sm tracking-[0.12em] uppercase">
          {desktopItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative group transition-colors ${
                active === item.href ? "text-secondary" : ""
              }`}
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-[1px] w-full scale-x-0 bg-secondary transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
            </Link>
          ))}
        </nav>

        {/* Tablet */}
        <nav className="hidden md:flex lg:hidden items-center gap-8 text-sm tracking-[0.12em] uppercase">
          {tabletVisible.map((item) => (
            <Link key={item.label} href={item.href} className="relative group">
              {item.label}
              <span className="absolute left-0 -bottom-1 h-[1px] w-full scale-x-0 bg-secondary transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
            </Link>
          ))}

          <div ref={moreRef} className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center gap-1"
            >
              More <ChevronDown size={14} />
            </button>

            <div
              className={`absolute right-0 mt-4 w-48 rounded-md border border-border bg-surface shadow-elevated transition-all duration-300 ${
                moreOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="flex flex-col p-4 gap-4 text-xs">
                {tabletMore.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMoreOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:+${adminWhatsAppNumber}`}
            className="hidden md:inline-flex rounded-md border border-border
                       px-6 py-2 text-sm tracking-[0.12em] uppercase
                       transition-all duration-300
                       hover:bg-hover hover:shadow-soft"
          >
            Call Now
          </a>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-9 w-9 items-center justify-center rounded-full
                         border border-border hover:bg-hover"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-md border border-border"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {/* Mobile */}
      <div
        className={`md:hidden fixed inset-0 bg-background transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Container className="flex flex-col gap-6 py-24 text-sm tracking-[0.12em] uppercase">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <a
            href={`tel:+${adminWhatsAppNumber}`}
            className="mt-6 rounded-md border border-border px-6 py-3 text-center"
          >
            Call Now
          </a>
        </Container>
      </div>
    </header>
  );
}
