const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Signika Negative', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#E8676E',
        secondary: '#F3E3E6',
        black: '#343434',
        white: '#FFFFFF',
        lightgray: '#FAFAFA',
        green: '48D24D',
        darkgray: '#9E9E9E',
        'pastel-pink': {
          light: '#F3E3E6',
          DEFAULT: '#E8676E',
        },
      },
    },
  },
  plugins: [],
}
