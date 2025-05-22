/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // root html
    "./src/**/*.{js,jsx,ts,tsx}", // your React components
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Playfair Display"', "serif"],
        body: ['"Lora"', "serif"],
        script: ['"Dancing Script"', "cursive"],
      },
    },
  },
  plugins: [],
};
