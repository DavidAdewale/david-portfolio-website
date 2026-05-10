import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#11100e",
        charcoal: "#181612",
        paper: "#f4efe7",
        bone: "#fffaf2",
        clay: "#c86f3a",
        gold: "#b88a4a",
        mist: "#d8d0c4"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(17, 16, 14, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
