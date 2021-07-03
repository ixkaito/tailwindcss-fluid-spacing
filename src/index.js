const plugin = require('tailwindcss/plugin')

const rem = (px) => {
  return (parseInt(px) / 16).toFixed(4).replace(/\.?0+$/, '') + 'rem'
}

const interval = 1.25

const dynamicSpacing = plugin(
  () => {},
  {
    theme: {
      extend: {
        spacing: theme => {
          const screens = theme('screens')
          const spacing = {}

          for (let i = 1; i <= 16; i++) {
            const key = `${i * 4}`
            const vw = interval * i

            spacing[`vw-${key}`] = `${vw}vw`

            for (const screen in screens) {
              const max = (parseInt(screens[screen], 10) * vw) / 100
              spacing[`vw-${key}-max-${screen}`] = `min(${vw}vw, ${rem(max)})`
            }
          }

          return spacing
        },
        margin: theme => {
          const screens = theme('screens')
          const margin = {}

          for (let i = 1; i <= 16; i++) {
            const key = `${i * 4}`
            const vw = interval * i

            margin[`-vw-${key}`] = `-${vw}vw`

            for (const screen in screens) {
              const max = (parseInt(screens[screen], 10) * vw) / 100
              margin[`-vw-${key}-max-${screen}`] = `max(-${vw}vw, -${rem(max)})`
            }
          }

          return margin
        }
      },
    },
  }
)

module.exports = dynamicSpacing
