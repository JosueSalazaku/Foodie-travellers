/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'top': "url('/top.png')",
        'down': "url('/down.png')",
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}