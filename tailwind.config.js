/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0d1941",
        secondary: "#fefffe",
        third: "#155388",
        fourth: "#284cfa",
      },
      fontFamily: {
        primary: "Montserrat",
      },
    },
  },
  plugins: [],
};
