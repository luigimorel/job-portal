/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      colors: {
        primary: "#3064E8"
      },
      backgroundImage: {
        jumbotron: "url('/src/assets/images/jumbo.png')",
        overlay:
          "linear-gradient(99.4deg, #0862AC 20.52%, rgba(24, 24, 27, 0) 99.41%)"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};

