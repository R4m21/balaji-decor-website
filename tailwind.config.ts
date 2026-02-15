import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1E3A8A",
          teal: "#0D9488",
          purple: "#6D28D9",
          orange: "#F97316",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #1E3A8A, #0D9488)",
        "gradient-secondary": "linear-gradient(to right, #1E3A8A, #6D28D9)",
        "gradient-accent": "linear-gradient(to right, #0D9488, #F97316)",
      },
    },
  },
  plugins: [],
};

export default config;
