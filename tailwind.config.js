/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    theme: {
      colors: {
        white: '#fff'
        // secondary: '#ffed4a',
        // danger: '#e3342f'
      }
    }
  },
  plugins: []
};
