/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // scans your React files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#16a34a", // green shade for fruits website
        secondary: "#facc15", // yellow shade
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

