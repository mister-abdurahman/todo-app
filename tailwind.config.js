/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3556AB",
        primary_dark: "#071D55",
        secondary: "#CDE53D",
        tertiary: "#720D0D",
      },
    },
  },
  plugins: [],
};
