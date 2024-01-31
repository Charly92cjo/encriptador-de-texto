/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: {
    enabled: true,
    content: ["./index.html", "./src/**/*.js"],
  },
  theme: {
    extend: {
      colors: {
        background: "#f3f5fc",
        secondary: "#0a3871",
      },
    },
  },
  plugins: [],
};
