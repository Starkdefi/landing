/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green_light: "#00DA63",
        green_light1: "#25AE63",
        green_1: "#131E18",
        green_2: "#162B20",
        green_dark1: "#011809",
        green_dark2: "#010E05",
      },
      screens: {
        "3xl": "2400px",
      },
    },
  },
  plugins: [],
};

// linear-gradient(180deg, #06C05A 0%, #07652D 100%);
// border: 1px solid rgba(0, 218, 99, 0.16)
