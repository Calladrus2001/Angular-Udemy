/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      width: {
        104: "26rem", // Adds a width of 416px
        112: "28rem", // Adds a width of 448px
        120: "30rem", // Adds a width of 480px
        128: "32rem" // Adds a width of 512px
      },
    }
  },
  plugins: [],
};

