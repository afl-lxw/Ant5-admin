/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
// const darkMode = require('tailwindcss/dark-mode')
module.exports = {
  purge: [],
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors,
    extend: {},
  },
  variants: {
    // extend: {
    //   textOpacity: ['dark'],
    //   backgroundColor: [],
    // }
  },
  plugins: [
    // darkMode()
  ],
}