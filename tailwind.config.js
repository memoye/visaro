/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        product_container: "repeat(auto-fill, minmax(17rem, 1fr))"
      },
      fontFamily:{
        segoe:["segoe-ui"],
        jersey: ["jersey"]
      }
    },
  },
  plugins: [],
}

