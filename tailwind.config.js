/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Tajawal', 'sans-serif'],
      },
    },
      container: {
        center: true,
        screens: {
          DEFAULT: '1100px',
        },
      },
  },
  plugins: [
      require("daisyui"),
      require("tailwindcss-flip")],
  daisyui: {
    themes: [{
        mytheme: {
          'primary': "#3f51b5",
		      'accent': "#f7f7f7", 
          'secondary': "#ffffff",
          'neutral': "#eeeeee",
          "info": "#000000",
        },
        dark: {
          'primary': "#242950",
		      'accent': "#202442",
          'secondary': "#2d325a",
          'neutral': "#242950",
          "info": "#ffffff",
        },
      }],
    rtl: true,
    darkTheme: "dark",
  },
}