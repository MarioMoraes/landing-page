/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9972A',
          light: '#D4A843',
          dark: '#A67C1F',
        },
        dark: {
          DEFAULT: '#0C0C0C',
          100: '#111111',
          200: '#161616',
          300: '#1C1C1C',
          400: '#252525',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
