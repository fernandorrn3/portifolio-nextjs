const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'verde' : '#00ff00'
      },
 
      transitionProperty: {
        'height': 'height'
      }
    },
    screens: {
      'smm': {'max': '639px'},
      'medio': {'min': '450px', 'max': '640px'},
      'xs': '320px',
      'grande':'1024px',
      ...defaultTheme.screens,
    },
  },
  plugins: [
    
  ],
}