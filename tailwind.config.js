/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          400: '#81D337',
          500: '#75C92D',
        },
        green: {
          800: '#3A5F0B',
          900: '#2A4508',
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}