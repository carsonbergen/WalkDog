/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nunito": ["Nunito", "sans"],
        "nunito-italic": ["Nunito Italic", "sans"]
      },
      colors: {
        primary: "#FFFFFC",
        secondary: "#000000",
        red: "#FFADAD",
        dark_red: "#F05959",
        orange: "#FFD6A5",
        yellow: "#FDFFB6",
        green: "#CAFFBF",
        cyan: "#9BF6FF",
        blue: "#A0C4FF",
        purple: "#BDB2FF",
        pink: "#FFC6FF",
        grey: "#DCDCDC",
        dark_grey: "#303030",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}