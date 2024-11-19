/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        heroImg: "url('./src/assets/images/navbar-laptop-img.jfif')",
      },
    },
  },
  plugins: [],
};
