import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#291720",
        charcoal: "#3a2030",
        paper: "#fff5f8",
        bone: "#fff8fb",
        clay: "#b44076",
        gold: "#e38ab4",
        mist: "#e8ccda"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(41, 23, 32, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
