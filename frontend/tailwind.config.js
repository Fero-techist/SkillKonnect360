/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
      },

      fontFamily: {
        Neue: ["Neue-Regrade", "sans-serif"],
        montserrat: ["montserrat", "sans-serif"],
      },
      gridTemplateColumns: {
        auto: "repeat (auto-fill, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
};
