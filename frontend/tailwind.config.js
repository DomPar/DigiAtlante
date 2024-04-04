/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, rgba(176, 220, 232, 0.5), rgba(185, 207, 129, 0.5))',
      }
    },
  },
  plugins: [],
}

