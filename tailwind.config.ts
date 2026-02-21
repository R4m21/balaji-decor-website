import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      /* ============================= */
      /*           COLOR SYSTEM        */
      /* ============================= */

      colors: {
        /* Semantic Surface */
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        surface: "var(--color-surface)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",

        /* Role Layer */
        primary: "var(--color-primary)",
        "primary-foreground": "var(--color-primary-foreground)",

        secondary: "var(--color-secondary)",
        "secondary-foreground": "var(--color-secondary-foreground)",

        /* Interaction States */
        hover: "var(--color-hover)",
        active: "var(--color-active)",
        focus: "var(--color-focus-ring)",

        /* Glass */
        glass: "var(--glass-bg)",
      },

      /* ============================= */
      /*         RADIUS SYSTEM         */
      /* ============================= */

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },

      /* ============================= */
      /*        ELEVATION SYSTEM       */
      /* ============================= */

      boxShadow: {
        soft: "var(--shadow-soft)",
        elevated: "var(--shadow-elevated)",
      },

      /* ============================= */
      /*          SPACING SYSTEM       */
      /* ============================= */

      spacing: {
        "section-sm": "4rem",
        "section-md": "6rem",
        "section-lg": "8rem",
        "section-xl": "10rem",
      },

      /* ============================= */
      /*          TYPOGRAPHY           */
      /* ============================= */

      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

export default config;
