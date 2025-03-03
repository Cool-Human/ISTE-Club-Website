// frontend/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode support
  theme: {
    extend: {
      colors: {
        'iste-blue': '#007bff', // Example ISTE blue
        'iste-white': '#ffffff',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Example font
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}