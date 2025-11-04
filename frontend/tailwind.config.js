// tailwind.config.js for Next.js 16 + NextUI + Bun (ES module format)
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/react/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6366F1",
          dark: "#4338CA",
          light: "#A5B4FC",
        },
        accent: {
          DEFAULT: "#EC4899",
          dark: "#BE185D",
          light: "#F9A8D4",
        },
        accent2: {
          DEFAULT: "#8B5CF6",
          light: "#C4B5FD",
        },
        accent3: {
          DEFAULT: "#F59E42",
          light: "#FDE68A",
        },
        background: {
          DEFAULT: "#0A0A0A",
          light: "#F3F4F6",
        },
        foreground: {
          DEFAULT: "#EDEDED",
          dark: "#171717",
        },
        gradientStart: "#6366F1",
        gradientMid: "#8B5CF6",
        gradientEnd: "#EC4899",
        gradientGold: "#F59E42",
      },
      fontFamily: {
        sans: ["Geist", "Inter", "Arial", "sans-serif"],
        mono: ["Geist Mono", "Menlo", "monospace"],
        display: ["Montserrat", "Geist", "Arial", "sans-serif"],
      },
      boxShadow: {
        "xl-gradient": "0 8px 32px 0 rgba(99,102,241,0.3), 0 1.5px 8px 0 rgba(236,72,153,0.15)",
        "card": "0 4px 24px 0 rgba(99,102,241,0.15), 0 1.5px 8px 0 rgba(236,72,153,0.10)",
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "2rem",
      },
      transitionProperty: {
        "gradient": "background-position, background-size",
      },
    },
  },
  plugins: [nextui()],
};

export default tailwindConfig;
