import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.json",
    "./node_modules/@nextui-org/react/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        surface: {
          900: "#0B0C1E",
          800: "#12142A",
          700: "#1A1D35",
        },
        buildStart: "#6C63FF",
        buildEnd: "#3A7BD5",
        runStart: "#0FF4C6",
        runEnd: "#5B66F8",
        shipStart: "#2BD48D",
        shipEnd: "#11A59A",
      },
    },
  },
  plugins: [nextui()],
};

export default config;
