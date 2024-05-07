const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#A729F5",
        maroon: "#313E51",
        "light-maroon": "#3B4D66",
        grey: "#626C7F",
        sky: "#ABC1E1",
        "off-white": "#F4F6FA",
        "light-green": "#26D782",
        "light-red": "#EE5454",
      },
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        "light-bg-mobile": "url('/images/pattern-background-mobile-light.svg')",
        "dark-bg-mobile": "url('/images/pattern-background-mobile-dark.svg')",
        "light-bg-tablet": "url('/images/pattern-background-tablet-light.svg')",
        "dark-bg-tablet": "url('/images/pattern-background-tablet-dark.svg')",
        "light-bg-desktop":
          "url('/images/pattern-background-desktop-light.svg')",
        "dark-bg-desktop": "url('/images/pattern-background-desktop-dark.svg')",
      },
    },
  },
  plugins: [],
};
