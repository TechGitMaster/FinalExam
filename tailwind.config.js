/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue, html}',
  ],
  theme: {
    extend: {},
    colors: {
      'rose': '#CC0F1B',
      'white': '#fff'
    }
  },

  plugins: [
    require('tailwind-scrollbar')
  ]
}