/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1769AA',
        dark: '#102A43',
        bgLight: '#F5F8FC',
        success: '#16A36A',
      }
    },
  },
  plugins: [],
}