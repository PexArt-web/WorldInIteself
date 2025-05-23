/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
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
