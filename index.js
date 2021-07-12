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
    const spacing = (screens, pn = 'positive') => {
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

      const obj = {}

      for (const [size, value] of Object.entries(values)) {
        if (pn === 'positive') {
          obj[`vw-${size}`] = `${value}vw`
        }

        for (const [screenName, screenSize] of Object.entries(screens)) {
          const minmax = (parseFloat(screenSize) * value) / 100

          if (pn === 'positive') {
            obj[`vw-${size}-min@${screenName}`] = `max(${value}vw, ${rem(minmax)})`
            obj[`vw-${size}-max@${screenName}`] = `min(${value}vw, ${rem(minmax)})`
          } else if (pn === 'negative') {
            obj[`-vw-${size}-min@${screenName}`] = `min(-${value}vw, -${rem(minmax)})`
            obj[`-vw-${size}-max@${screenName}`] = `max(-${value}vw, -${rem(minmax)})`
          }

          for (const [screenName2, screenSize2] of Object.entries(screens)) {
            if (parseFloat(screenSize2) <= parseFloat(screenSize)) continue
            const minmax2 = (parseFloat(screenSize2) * value) / 100

            if (pn === 'positive') {
              obj[`vw-${size}-min@${screenName}-max@${screenName2}`] = `clamp(
                ${rem(minmax)}, ${value}vw, ${rem(minmax2)}
              )`
            } else if (pn === 'negative') {
              obj[`-vw-${size}-min@${screenName}-max@${screenName2}`] = `clamp(
                -${rem(minmax2)}, -${value}vw, -${rem(minmax)}
              )`
            }
          }
        }
      }

      return obj
    }

    return {
      theme: {
        extend: {
          spacing: (theme) => {
            return spacing(theme('screens'))
          },
          margin: (theme) => {
            return spacing(theme('screens'), 'negative')
          },
          inset: (theme) => {
            return spacing(theme('screens'), 'negative')
          },
          translate: (theme) => {
            return spacing(theme('screens'), 'negative')
          },
        },
      },
    }
  }
)

module.exports = dynamicSpacing
