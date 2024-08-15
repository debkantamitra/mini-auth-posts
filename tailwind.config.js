/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "auth-form-border":
          "linear-gradient(129.59deg, #969696 0%, #343434 98.18%);",
      },
    },
  },
  plugins: [],
};
