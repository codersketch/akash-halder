/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      fontFamily: {
        silkscreen: ["Silkscreen", "sans-sarif"],
        roboto: ["Roboto", "sans-sarif"],
      }
    },
  },
  plugins: [],
}

