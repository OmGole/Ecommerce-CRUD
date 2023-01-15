/** @type {import('tailwindcss').Config} */

// require('../client/src/assets/img/showcase.jpg')
// require("./src/assets/test.jpg");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'overlay': 'inset 0 0 0 2000px rgba(0, 0, 0, 0.7)',
      },
      colors:{
        primary:'#FE0100',
        secondary:'#000000',
        third:"blue"
      },
      fontFamily:{
        poppins:['Poppins','sans-serif'],
        montserrat:['Montserrat','sans-serif']
      },
      backgroundImage: {
        'showcase':"url('./assets/Showcase.jpg')",
        'self-help':"url('./assets/self-help.jpg')",
        'finance':"url('./assets/finance.jpg')",
        'fantasy':"url('./assets/fantasy.jpg')",
        'others':"url('./assets/others.jpg')",
        'thrillers':"url('./assets/thrillers.jpg')",
        'sci-fi':"url('./assets/sci-fi.jpg')",
      }
    },
  },
  plugins: [],
}
