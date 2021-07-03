const plugin = require('tailwindcss/plugin')

const dynamicSpacing = plugin(({ addUtilities }) => {
  const dynamicSpacingUtilities = {
    '.m-vw-4': {
      margin: '1.25vw',
    },
    '.m-vw-8': {
      margin: '2.5vw',
    },
  }

  // addUtilities(dynamicSpacingUtilities)
},
{
  theme: {
    extend: {
      spacing: {
        'vw-4': '1.25vw',
        'vw-8': '2.5vw',
      },
    },
  },
})

exports.spacings = {
  'vw-4': '1.25vw',
  'vw-8': '2.5vw',
}

module.exports = dynamicSpacing
