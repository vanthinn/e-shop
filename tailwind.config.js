/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: { min: "1280px" },
        lg: { min: "1024px" },
        md: { min: "736px" },
        sm: { min: "375px" },
      },
      keyframes: {
        fadeIn: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        NavIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        NavOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { ransform: "translateX(-100%)" },
        },
        zoom: {
          "0% ": { transform: "translate(-50%, -50%) scale(0)" },
          "100% ": { transform: "translate(-50%, -50%) scale(1.5)" },
        },
        growDown: {
          "0%": { transform: "scaleY(0)" },
          " 80%": { transform: "scaleY(1.1)" },
          "100% ": { transform: "scaleY(1)" },
        },
      },
      animation: {
        navbar: "fadeIn 0.5s",
        video: "zoom 0.5s linear alternate infinite",
        dropdown: "growDown 0.5 ease-in-out forwards",
        navonmb: "NavIn 0.5s",
        navoffmb: "NavOut 0.5s",
      },
      visibility: ["group-hover"],
    },
  },
  plugins: [],
};
