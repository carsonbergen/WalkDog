/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans"],
        "nunito-italic": ["Nunito Italic", "sans"],
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
  plugins: [require("tailwindcss-animated"), require("daisyui")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
