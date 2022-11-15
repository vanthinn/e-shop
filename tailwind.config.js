/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { ransform: "translateY(0)" },
        },
      },
      animation: {
        navbar: "fadeIn 0.5s",
      },
    },
  },
  plugins: [],
};
