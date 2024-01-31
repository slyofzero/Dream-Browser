/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#421456",
        main: {
          1: "#531970",
          2: "#421456",
          3: "#2f0e3d",
          4: "#250b30",
        },
      },
    },
  },
  plugins: [],
};
