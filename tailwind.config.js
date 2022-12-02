/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        green: "#094838",
        "green-100":"#6e8e84",
        current: "currentColor",
        primary: "#2D65CB",
        "primary-500": "#4284E4",
        grey: "#F5F7FA",
        "gray-600": "#55606C",
        "gray-100": "#E4E7EA",
        "gray-200": "#CCD2D8",
        "gray-400": "#7D8793",
        "grey-700":"#414C58",
        secondary: "#CCD2D8",
        light: "#F5F7FA",
        dark: "#212932",
        white: "#ffffff",
        yellow: "#e5ae58",
        navyblue: "#122136",
        orange: "#E87171",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
