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
    const names = [
      ...(options?.names ?? Object.keys(require('tailwindcss/defaultTheme').spacing)),
      ...(options?.extend?.names ?? []),
    ]
      .filter((name) => Number(name) !== 0 && !isNaN(name))
      .map((name) => `${name}`)

    const values = names.reduce(
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

            for (const [name, value] of Object.entries(values)) {
              spacing[`vw-${name}`] = `${value}vw`

              for (const [screenName, screenSize] of Object.entries(screens)) {
                const max = (parseFloat(screenSize) * value) / 100
                spacing[`vw-${name}-max@${screenName}`] = `min(${value}vw, ${rem(max)})`
              }
            }

            return spacing
          },
          margin: (theme) => {
            const screens = theme('screens')
            const margin = {}

            for (const [name, value] of Object.entries(values)) {
              for (const [screenName, screenSize] of Object.entries(screens)) {
                const max = (parseFloat(screenSize) * value) / 100
                margin[`-vw-${name}-max@${screenName}`] = `max(-${value}vw, -${rem(max)})`
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
