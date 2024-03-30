/** @type {import('tailwindcss').Config} */
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
    
  },
  plugins: [],
}

