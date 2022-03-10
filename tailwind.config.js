module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "nav": "1fr auto 1fr",
      },
      gridTemplateColumns: {
        "card-2": "2fr 1fr",
      }
    },
  },
  plugins: [],
}
