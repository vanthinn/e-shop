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
      },
      animation: {
        navbar: "fadeIn 0.5s",
        video: "zoom 0.5s linear alternate infinite",
      },
      visibility: ["group-hover"],
    },
  },
  plugins: [],
};
