/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      screens: {
        xl: { max: '925px' },
        desktop: { min: '925px' },
        tiny: { max: '375px' },
      },
    },
  },
  plugins: [],
};
