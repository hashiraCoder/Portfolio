/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00BFFF',
        'neon-purple': '#9D4EDD',
        'dark-bg': '#0E0E10',
      },
      boxShadow: {
        'glow-blue': '0 0 25px #00BFFF',
        'glow-purple': '0 0 25px #9D4EDD',
      },
      animation: {
        blob: "blob 8s infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
   plugins: [],
}