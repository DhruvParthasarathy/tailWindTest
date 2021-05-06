module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { // We are extending the existing color property here
        primary: '#FF6363',
        secondary: { // We can provide multiple shades for a color we have added
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      fontFamily : {
        body: ['Nunito']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
