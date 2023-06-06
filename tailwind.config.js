/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#becebc",
          light: "#eeefee",
          dark: "#80987c",
        },
        brown: {
          DEFAULT: "#7b6361",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        vollkorn: ["Vollkorn", "serif"],
        heading: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
