/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#0BE58A',
        customViolet: '#150B2B',
        customGray: '#878787',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}