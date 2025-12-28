/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        android: "#3DDC84",
        cyber: "#00ff9c",
        bgDark: "#020617",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 255, 156, 0.35)",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};