import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          base: "#0f172a",
          accent: "#0ea5e9",
          soft: "#e0f2fe"
        },
        card: "#0b1224"
      },
      boxShadow: {
        glow: "0 10px 50px rgba(14,165,233,0.15)"
      }
    }
  },
  plugins: []
};

export default config;
