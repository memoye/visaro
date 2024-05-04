/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        product_container: "repeat(auto-fill, minmax(17rem, 1fr))",
        cart_container: "auto 8rem 10rem 8rem 3rem"
      },
      fontFamily:{
        segoe:["segoe-ui"],
        jersey: ["jersey"]
      }
    },
  },
  plugins: [],
}

