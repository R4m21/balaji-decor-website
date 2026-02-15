"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  const toggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <>
      {children}
      <button
        onClick={toggle}
        className="fixed bottom-24 right-4 z-50 rounded-full bg-gray-800 text-white px-3 py-2 text-sm dark:bg-white dark:text-black"
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </>
  );
}
