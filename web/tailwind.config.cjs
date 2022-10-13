/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      backgroundImage: {
        jumbotron: "url('/src/assets/images/jumbo.png')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};

