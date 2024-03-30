/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'sans':['"Mona Sans"', ' "Helvetica Neue" ', 'Helvetica', 'Arial', 'sans-serif']
    },
    container: {
      center: true,
    },
    screens:{
      'xs':'200px',
      ...defaultTheme.screens,

    }
  },
  plugins: [],
}

