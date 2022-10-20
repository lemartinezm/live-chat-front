/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          100: '#0D0D0E',
          75: '#494A4A',
          50: '#868686',
          25: '#C2C3C3',
          10: 'E7E7E7',
        },
        primary: '#233D4D',
        secondary: '#619B8A',
        secondaryPastel: '#D7E6E2',
        orange: '#FE7F2D',
        white: '#FFFFFF',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        bungee: ['Bungee Shade', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}

// TODO: agregar vitest