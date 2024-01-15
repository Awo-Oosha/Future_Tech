/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        dark: "#141414",
        dark10: "#1A1A1A",
        dark15: "#262626",
        dark20: "#333333",
        dark40: "#666666",

        yellow: "#FFD11A",
        grey: "#7E7E81",
        grey60: "#98989A",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
        kumbh: "Kumbh Sans, sans-serif",
      },
    },
  },
  plugins: [],
};