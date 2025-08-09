# Configuration

The VitePress BProgress Plugin comes with sensible defaults but can be customized to match your needs.

## Default Configuration

The plugin comes pre-configured with optimized settings:

```ts
{
  showSpinner: false,     // No spinner for clean look
  speed: 400,            // Smooth 400ms animations
  easing: 'linear',      // Linear easing
  parent: '.Layout'      // Mounted on VitePress Layout
}
```

## Custom Configuration

You can override the default configuration by calling `configure()` on the returned BProgress instance:

```ts
import DefaultTheme from 'vitepress/theme'
import vitepressBprogress from 'vitepress-plugin-bprogress'
import 'vitepress-plugin-bprogress/style'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    const bProgress = vitepressBprogress(ctx)
    
    // Custom configuration (optional)
    if (bProgress) {
      bProgress.configure({
        showSpinner: true,
        speed: 300,
        easing: 'ease-out',
        minimum: 0.1
      })
    }
  }
} satisfies Theme
```

## Navigation Test

Navigate to see configuration in action:

- [Home](/) - Homepage
- [Guide](/guide) - User guide  
- [API](/api) - API docs
- [Introduction](/introduction) - Get started
- [Installation](/installation) - Install guide
- [Examples](/examples) - Code examples

## Available Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `showSpinner` | `boolean` | `false` | Show/hide the loading spinner |
| `speed` | `number` | `400` | Animation speed in milliseconds |
| `easing` | `string` | `'linear'` | CSS easing function (`'linear'`, `'ease'`, `'ease-out'`, etc.) |
| `minimum` | `number` | `0.08` | Minimum progress value (0-1) |
| `maximum` | `number` | `1` | Maximum progress value (0-1) |
| `trickle` | `boolean` | `true` | Enable auto-increment behavior |
| `trickleSpeed` | `number` | `200` | Trickle animation speed in ms |
| `parent` | `string\|HTMLElement` | `'.Layout'` | Parent container selector or element |
| `direction` | `'ltr'\|'rtl'` | `'ltr'` | Progress bar direction |

## Theme Integration

The plugin automatically integrates with VitePress theme colors:

- **Primary Color**: Uses `--vp-c-brand-1` for the progress bar color
- **Z-Index**: Uses `--vp-z-index-layout-top` for proper layering
- **Dark Mode**: Automatically adapts to theme color changes

## CSS Customization

You can further customize the appearance by overriding CSS variables:

```css
:root {
  --bprogress-color: #ff6b6b;     /* Custom color */
  --bprogress-height: 4px;        /* Thicker progress bar */
}
```