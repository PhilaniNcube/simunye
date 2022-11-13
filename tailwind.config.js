/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "#0e878f",
        "grey-blue": "#333d4b",
        "pale-orange": "#fdd6ba",
        cream: "#fefcf7",
        grey: "#83888f",
      },
    },
  },
  plugins: [],
};
