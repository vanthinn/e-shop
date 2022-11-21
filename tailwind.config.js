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
      },
      visibility: ["group-hover"],
    },
  },
  plugins: [],
};
