/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'women': "url('./images/women.png')", 
        'men': "url('./images/men.png')",
        'kids': "url('./images/kids.png')",
      },
    },
  },
  plugins: [],
}

