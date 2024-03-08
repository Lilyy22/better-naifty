/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      naifty: ["Open Sans", "san-serif"],
      mont: ["Montserrat", "san-serif"],
    },
    extend: {
      colors: {
        "custom-purple": {
          700: "#a259ff",
          900: "#111c43",
        },
        "custom-gray": {
          900: "#231e36",
          600: "#1c172e",
          400: "#f0f1f7",
        },
        "custom-white": {
          100: "#f7f7f7",
          200: "#a3aed1",
        },
      },
    },
  },
  plugins: [],
};
