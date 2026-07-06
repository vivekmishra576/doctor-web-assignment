/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        'navbar-bg': '#373636',
        'navbar-text': '#D9D9D9',
        'primary-green': '#3A643B',
      },
    },
  },
  plugins: [],
}

