import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0f1a",
        surface: "#0e1422",
        neon: {
          violet: "#7c3aed",
          cyan: "#22d3ee",
          pink: "#ec4899",
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(124, 58, 237, 0.35)",
        glowCyan: "0 0 18px rgba(34, 211, 238, 0.35)",
      },
      backgroundImage: {
        galaxy: "radial-gradient(1000px 500px at 10% 10%, rgba(124,58,237,0.15), transparent), radial-gradient(800px 400px at 90% 30%, rgba(34,211,238,0.12), transparent)",
        city: "linear-gradient(120deg, rgba(2,6,23,0.9), rgba(12,18,31,0.9))",
      }
    }
  },
  plugins: [],
};

export default config;
