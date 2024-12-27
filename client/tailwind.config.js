/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlueDark: '#84d1e9',
        customBlueMedium: '#95d7eb',
        customBlueLight: '#b7e1ed',
        customOrange: '#fc775a',
        lightPink: '#fae7e0',
      },
    },
  },
  plugins: [],
}