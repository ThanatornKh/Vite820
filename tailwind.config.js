/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle:"#73168C",
        primaryContent:"#9F2CBF",
        primarySubcontene:"#C04BF2",
        primaryBase:"#281259",
        primaryAccent:"#3B1E54",
        primaryBg:"#BFBFBF",
      },
    },
  },
  plugins: [],
}

