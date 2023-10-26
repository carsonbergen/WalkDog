/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFC",
        secondary: "#000000",
        red: "#FFADAD",
        orange: "#FFD6A5",
        yellow: "#FDFFB6",
        green: "#CAFFBF",
        cyan: "#9BF6FF",
        blue: "#A0C4FF",
        purple: "#BDB2FF",
        pink: "#FFC6FF",
      }
    },
  },
  plugins: [],
}