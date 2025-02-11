/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : 'class',
  theme: {
    extend: {
      colors : {
        blue : {
          100 : "#1E88E5"
        },
        black : {
          100 : "#171717",
          200 : "#262626",
        }
      }
    },
  },
  plugins: [],
}