/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["selector"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        blue: {
          dark: "hsl(209, 23%, 22%)",
          "very-dark-bg": "hsl(207, 26%, 17%)",
          "very-dark-text": "hsl(200, 15%, 8%)",
        },
        grey: {
          dark: "hsl(0, 0%, 52%)",
          "very-light": "hsl(0, 0%, 98%)",
        },
      },
      fontFamily: {
        nunito: "Nunito Sans",
      },
      fontWeight: {
        light: "300",
        medium: "600",
        bold: "800",
      },
      boxShadow: {
        base: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
        light: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
      },
    },
  },
  plugins: [],
};
