const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(({ addUtilities }) => {
      const dynamicSpacingUtilities = {
        '.m-vw-4': {
          margin: '1.25vw',
        },
        '.m-vw-8': {
          margin: '2.5vw',
        },
      }

      addUtilities(dynamicSpacingUtilities)
    }),
  ],
}
