/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      mono: ['monospace'],
      sans: ['monospace'],
      serif: ['helvetica'],
    },
    extend: {
      colors: {
        'dark': '#181818',
        'off-white': '#F0FFF0',
        'yeller': 'rgb(175, 255, 100)'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
