/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        'custom-1': '700px',
        'custom-2': '800px',
        'custom-3': '95px',
        'NikeBackG': '950px',
      },
      width: {
        'custom-1': '700px',
        'custom-2': '800px',
        'custom-3': '160px',
        'NikeBackG': '1704px',
      },
      colors: {
        'custom-orange': '#fe9550',
      },
      fontFamily: {
        sans: ['Signika', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

