const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'xs': '300px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}