/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#201d66",
        secondary: "#3949ab",
        accent: "#64b5f6",
        darkBg: "#18192b",
        darkCard: "#23243a",
        darkText: "#e3f2fd",
        darkAccent: "#80deea"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
