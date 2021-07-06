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

To provide a maximum value, add a `-max@{screen}` suffix to any existing utility. For example, the class `w-vw-80-max@lg` would provide the `25vw` value with the maximum value `16rem (256px)` which equals `25vw` at the large screen.

```html
<div class="w-vw-80-max@lg">...</div>
```

The `-max@{screen}` suffix is also available for any breakpoint.

```html
<div class="my-10 sm:my-vw-20-max@xl">...</div>
```

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
