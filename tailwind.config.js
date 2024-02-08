/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        small: "2rem",
        medium: "6rem",
        large: "12rem",
      },
      height: {
        small: "2rem",
        medium: "6rem",
        large: "12rem",
        xlarge: "24rem",
        xxlarge: "48rem",
      },
    },
  },
  plugins: [],
};
