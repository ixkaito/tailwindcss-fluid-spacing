# tailwindcss-fluid-spacing

A Tailwind CSS plugin that provides fluid-responsive spacings across viewport widths.

## Installation

Install the plugin from npm:

```sh
npm install -D tailwindcss-fluid-spacing
```
or
```sh
yarn add -D tailwindcss-fluid-spacing
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-fluid-spacing'),
    // ...
  ],
}
```

## Usage

### Basic

Fluid-spacing is inherited by the `padding`, `margin`, `width`, `height`, `maxHeight`, `gap`, `inset`, `space` and `translate` core plugins. Insert `vw-` before `{size}` to each utilities.

Examples:

```html
<div class="p-vw-8">...</div> <!-- padding: 2.5vw; -->
<div class="mx-vw-16">...</div> <!-- margin-left: 5vw; margin-right: 5vw; -->
<div class="-mt-vw-16">...</div> <!-- margin-top: -5vw; -->
<div class="w-vw-64">...</div> <!-- width: 20vw; -->
<div class="h-vw-32">...</div> <!-- height: 10vw; -->
<div class="gap-vw-10">...</div> <!-- gap: 3.125vw; -->
<div class="top-vw-24">...</div> <!-- top: 7.5vw; -->
<div class="inset-vw-4">...</div> <!-- top: 1.25vw; right: 1.25vw; bottom: 1.25vw; left: 1.25vw; -->
<div class="translate-y-vw-12">...</div> <!-- --tw-translate-y: 3.75vw; transform: var(--tw-transform); -->
```

### Responsive

To control the fluid-spacing at a specific breakpoint, add a `{screen}:` prefix to any existing utility. For example, adding the class `md:p-vw-8` to an element would apply the `p-vw-8` utility at medium screen sizes and above.

```html
<div class="md:p-vw-8">...</div>
```

To provide a minimum or a maximum value, add a `-{min|max}@{screen}` suffix to any existing utility; to privide both minmun and maximum values, add a `-min@{screen}-max@{screen}` suffix. For example, the class `mt-vw-16-min@sm` would provide the `5vw` value with the minmum value `2rem (32px)` which equals `5vw` at the small screen.

```html
<div class="mt-vw-16-min@sm">...</div> <!-- margin-top: max(5vw, 2rem); -->
<div class="mt-vw-16-max@xl">...</div> <!-- margin-top: min(5vw, 4rem); -->
<div class="mt-vw-16-min@sm-max@xl">...</div> <!-- margin-top: clamp( 2rem, 5vw, 4rem ); -->
```

The `-{min|max}@{screen}` and `-min@{screnn}-max@{screen}` suffixes are also available for any breakpoint.

```html
<div class="my-10 sm:my-vw-20-max@xl">...</div>
```

## Default fluid-spacing

| Size | Value       | 320px   | sm: 640px | md: 768px | lg: 1024px | xl: 1280px | 2xl: 1536px |
| ---- | ----------- | ------- | --------- | --------- | ---------- | ---------- | ----------- |
| 1    | `0.3125vw`  | `1px`   | `2px`     | `2.4px`   | `3.2px`    | `4px`      | `4.8px`     |
| 1.5  | `0.46875vw` | `1.5px` | `3px`     | `3.6px`   | `4.8px`    | `6px`      | `7.2px`     |
| 2    | `0.625vw`   | `2px`   | `4px`     | `4.8px`   | `6.4px`    | `8px`      | `9.6px`     |
| 2.5  | `0.78125vw` | `2.5px` | `5px`     | `6px`     | `8px`      | `10px`     | `12px`      |
| 3    | `0.9375vw`  | `3px`   | `6px`     | `7.2px`   | `9.6px`    | `12px`     | `14.4px`    |
| 3.5  | `1.09375vw` | `3.5px` | `7px`     | `8.4px`   | `11.2px`   | `14px`     | `16.8px`    |
| 4    | `1.25vw`    | `4px`   | `8px`     | `9.6px`   | `12.8px`   | `16px`     | `19.2px`    |
| 5    | `1.5625vw`  | `5px`   | `10px`    | `12px`    | `16px`     | `20px`     | `24px`      |
| 6    | `1.875vw`   | `6px`   | `12px`    | `14.4px`  | `19.2px`   | `24px`     | `28.8px`    |
| 7    | `2.1875vw`  | `7px`   | `14px`    | `16.8px`  | `22.4px`   | `28px`     | `33.6px`    |
| 8    | `2.5vw`     | `8px`   | `16px`    | `19.2px`  | `25.6px`   | `32px`     | `38.4px`    |
| 9    | `2.8125vw`  | `9px`   | `18px`    | `21.6px`  | `28.8px`   | `36px`     | `43.2px`    |
| 10   | `3.125vw`   | `10px`  | `20px`    | `24px`    | `32px`     | `40px`     | `48px`      |
| 11   | `3.4375vw`  | `11px`  | `22px`    | `26.4px`  | `35.2px`   | `44px`     | `52.8px`    |
| 12   | `3.75vw`    | `12px`  | `24px`    | `28.8px`  | `38.4px`   | `48px`     | `57.6px`    |
| 14   | `4.375vw`   | `14px`  | `28px`    | `33.6px`  | `44.8px`   | `56px`     | `67.2px`    |
| 16   | `5vw`       | `16px`  | `32px`    | `38.4px`  | `51.2px`   | `64px`     | `76.8px`    |
| 20   | `6.25vw`    | `20px`  | `40px`    | `48px`    | `64px`     | `80px`     | `96px`      |
| 24   | `7.5vw`     | `24px`  | `48px`    | `57.6px`  | `76.8px`   | `96px`     | `115.2px`   |
| 28   | `8.75vw`    | `28px`  | `56px`    | `67.2px`  | `89.6px`   | `112px`    | `134.4px`   |
| 32   | `10vw`      | `32px`  | `64px`    | `76.8px`  | `102.4px`  | `128px`    | `153.6px`   |
| 36   | `11.25vw`   | `36px`  | `72px`    | `86.4px`  | `115.2px`  | `144px`    | `172.8px`   |
| 40   | `12.5vw`    | `40px`  | `80px`    | `96px`    | `128px`    | `160px`    | `192px`     |
| 44   | `13.75vw`   | `44px`  | `88px`    | `105.6px` | `140.8px`  | `176px`    | `211.2px`   |
| 48   | `15vw`      | `48px`  | `96px`    | `115.2px` | `153.6px`  | `192px`    | `230.4px`   |
| 52   | `16.25vw`   | `52px`  | `104px`   | `124.8px` | `166.4px`  | `208px`    | `249.6px`   |
| 56   | `17.5vw`    | `56px`  | `112px`   | `134.4px` | `179.2px`  | `224px`    | `268.8px`   |
| 60   | `18.75vw`   | `60px`  | `120px`   | `144px`   | `192px`    | `240px`    | `288px`     |
| 64   | `20vw`      | `64px`  | `128px`   | `153.6px` | `204.8px`  | `256px`    | `307.2px`   |
| 72   | `22.5vw`    | `72px`  | `144px`   | `172.8px` | `230.4px`  | `288px`    | `345.6px`   |
| 80   | `25vw`      | `80px`  | `160px`   | `192px`   | `256px`    | `320px`    | `384px`     |
| 96   | `30vw`      | `96px`  | `192px`   | `230.4px` | `307.2px`  | `384px`    | `460.8px`   |

## Configuration options

You can invoke the plugin passing along options when registering it in `plugins` configuration.

### Customize the default setting

Use the `sizes` key to customize the default setting.

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-fluid-spacing')({
      sizes: [16, 20, 24],
    }),
    // ...
  ],
}
```

This will only use `16`, `20` and `24` as the `{size}` to generate classes like `p-vw-16`, `m-vw-20`, `w-vw-24`, etc.

### Extend the default setting

To extend the default setting, put the `sizes` key in `extend` section.

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-fluid-spacing')({
      extend: {
        sizes: [68, 76],
      },
    }),
    // ...
  ],
}
```

This will generate classes like `p-vw-68` and `m-vw-76` in addition to all of the default fluid-spacing utilities.

## License

MIT
