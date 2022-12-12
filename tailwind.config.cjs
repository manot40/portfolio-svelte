const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          400: '#FAFAFA',
          500: '#EEEEEE',
          600: '#E9ECEF'
        },
        dark: {
          400: '#343A40',
          500: '#212529',
          600: '#181B1E'
        }
      },
      keyframes: {},
      animation: {},
      transitionProperty: {},
      fontFamily: {
        typo: ['Rubik', ...defaultTheme.fontFamily.sans],
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {
      opacity: ['dark']
    }
  },
  plugins: []
};
