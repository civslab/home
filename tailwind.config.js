/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          950: "#020617",
          900: "#0f172a",
          800: "#1e293b",
          700: "#334155",
          600: "#475569",
        },
        maroon: {
          900: "#2d0a0b",
          800: "#3b0d10",
          700: "#501214",
          600: "#6b181b",
          500: "#7a1c20",
        },
        gold: {
          500: "#bfa15f",
          400: "#d4af37",
          300: "#f0d98c",
        },
      },
      boxShadow: {
        glow: "0 24px 80px rgba(15, 23, 42, 0.45)",
      },
    },
  },
  plugins: [],
};
