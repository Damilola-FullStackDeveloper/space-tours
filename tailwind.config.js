/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home-mobile': "url('./src/assets/home/background-home-mobile.jpg')",
        'home-tablet': "url('./src/assets/home/background-home-tablet.jpg')", 
        'home-desktop': "url('./src/assets/home/background-home-desktop.jpg')",
      }
    },
  },
  plugins: [],
}

