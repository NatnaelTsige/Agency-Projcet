import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF7F0",
        sand: "#F3EADB",
        surface: "#FFFFFF",
        ink: "#16302F",
        muted: "#4F6B6A",
        primary: {
          DEFAULT: "#0E7490",
          deep: "#0B5563",
          soft: "#D7EBEF",
        },
        accent: {
          DEFAULT: "#C9714B",
          deep: "#A4552F",
          soft: "#F4DCC9",
        },
        cta: {
          DEFAULT: "#0F9D6B",
          deep: "#0B7E55",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-lexend)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "78rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 18px 50px -20px rgba(11, 85, 99, 0.25)",
        lift: "0 28px 70px -28px rgba(11, 85, 99, 0.40)",
      },
      keyframes: {
        "blob-drift": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(20px, -28px) scale(1.06)" },
          "66%": { transform: "translate(-18px, 16px) scale(0.96)" },
        },
      },
      animation: {
        "blob-drift": "blob-drift 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
