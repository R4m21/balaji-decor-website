"use client";

import Link from "next/link";
import Container from "../ui/Container";
import config from "@/lib/config";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const adminWhatsAppNumber = config.adminWhatsAppNumber;

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-cloud-matte/80 backdrop-blur-md dark:border-neutral-800 dark:bg-royal-midnight/80">
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
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
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex gap-10 text-sm tracking-wide">
          <Link
            className="hover:opacity-70 transition-opacity"
            href="#services"
          >
            Services
          </Link>
          <Link className="hover:opacity-70 transition-opacity" href="#about">
            About
          </Link>
          <Link className="hover:opacity-70 transition-opacity" href="#contact">
            Contact
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Call CTA - Luxury Solid */}
          <a
            href={`tel:+${adminWhatsAppNumber}`}
            className="rounded-md border border-royal-midnight px-5 py-2 text-sm tracking-wide transition-all hover:bg-royal-midnight hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-royal-midnight"
          >
            Call Now
          </a>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-xs tracking-wider opacity-70 hover:opacity-100 transition"
            >
              {theme === "dark" ? "LIGHT" : "DARK"}
            </button>
          )}
        </div>
      </Container>
    </header>
  );
}
