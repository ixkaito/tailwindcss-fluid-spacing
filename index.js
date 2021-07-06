const plugin = require('tailwindcss/plugin')

const rem = (px) => {
  return (parseFloat(px) / 16).toFixed(4).replace(/\.?0+$/, '') + 'rem'
}

const dynamicSpacing = plugin.withOptions(
  () => {
    return () => {
      // empty
    }
  },
  (options) => {
    const sizes = [
      ...(options?.sizes ?? Object.keys(require('tailwindcss/defaultTheme').spacing)),
      ...(options?.extend?.sizes ?? []),
    ]
      .filter((size) => Number(size) !== 0 && !isNaN(size))
      .map((size) => `${size}`)

    const values = sizes.reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: cur * 0.3125,
      }),
      {}
    )

    return {
      theme: {
        extend: {
          spacing: (theme) => {
            const screens = theme('screens')
            const spacing = {}

            for (const [size, value] of Object.entries(values)) {
              spacing[`vw-${size}`] = `${value}vw`

              for (const [screenName, screenSize] of Object.entries(screens)) {
                const max = (parseFloat(screenSize) * value) / 100
                spacing[`vw-${size}-max@${screenName}`] = `min(${value}vw, ${rem(max)})`
              }
            }

            return spacing
          },
          margin: (theme) => {
            const screens = theme('screens')
            const margin = {}

            for (const [size, value] of Object.entries(values)) {
              for (const [screenName, screenSize] of Object.entries(screens)) {
                const max = (parseFloat(screenSize) * value) / 100
                margin[`-vw-${size}-max@${screenName}`] = `max(-${value}vw, -${rem(max)})`
              }
            }

            return margin
          },
        },
      },
    }
  }
)

module.exports = dynamicSpacing
