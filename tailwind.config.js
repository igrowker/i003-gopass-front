import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customWhite: "#F7FAFC",
        customBlack: "#253127",
        customLigthRed: "#FF3131",
        customRed: "#C3261B",
        customGreen: "#00BF63"
      },
      fontFamily: {
        azonix: ['Azonix', 'sans-serif'],
      },
      boxShadow: {
        'custom-avatar': '0 8px 20px rgba(0, 0, 0, 0.5), 0 12px 40px rgba(0, 0, 0, 0.2)'
      },
      backgroundImage: {
        'custom-bg': "url('./public/mika.jpg')",
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [],
  },
}