/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'blue': "#020332",
      'sky': {
        300: "#9ECEE7",
        500: "#2AABE1",
        900: "#146C94",
      },
      'white': "#FFFFFF",
      'light-white': "#f9f9f9",
      'soft-white': "#EEEEEE",
      'black': "#000000",
      'gray': '#797979',

    },
    fontFamily: {
      'primary': ['Plus Jakarta Sans', "sans-serif"],
      'secondary': ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}
