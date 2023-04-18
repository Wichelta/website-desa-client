/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#014a94',
        'blue-secondary': '#082F49',
      },
      screens: {
        xs: '400px',
        xxs: '200px',
      },
    },
  },
  plugins: [],
};
