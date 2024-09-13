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
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [],
  },
}