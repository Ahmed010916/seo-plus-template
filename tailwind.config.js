/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Tajawal", "sans-serif"],
      },
      animation: {
        news: "news 30s linear infinite",
      },
      keyframes: {
        news: {
          "0%, 17%":{
            top: "31%",
          },
          "20%, 37%": {
            top: "-35%"
          },
          "40%, 57%": {
            top: "-102%"
          },
          "60%, 77%": {
            top: "-173%"
          },
          "80%, 97%": {
            top: "-246%"
          },
          "98%": {
            top: "-31%"
          },
        },
      },
    },
    container: {
      center: true,
      screens: {
        DEFAULT: "1100px",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-flip")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3f51b5",
          accent: "#f7f7f7",
          secondary: "#ffffff",
          neutral: "#eeeeee",
          info: "#444",
          success: "#000000",
        },
        dark: {
          primary: "#242950", // mid
          accent: "#202442", //last
          secondary: "#2d325a", // first
          neutral: "#242950", // mid
          info: "#ffffff",
          success: "#ffffff",
        },
      },
    ],
    rtl: true,
    darkTheme: "dark",
  },
};