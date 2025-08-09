# vitepress-plugin-bprogress

A beautiful loading progress bar plugin for VitePress that integrates seamlessly with VitePress themes using [@bprogress/core](https://bprogress.dev).

## ✨ Features

- 🚀 **Fast & Lightweight** - Minimal bundle size with optimal performance
- 🎨 **Theme Integration** - Automatically uses VitePress theme colors
- 🌗 **Dark Mode Support** - Seamlessly adapts to light/dark themes
- 📱 **Mobile Friendly** - Works perfectly on all devices
- ⚙️ **Highly Configurable** - Customize speed, easing, and appearance
- 🔧 **Easy Setup** - Simple one-line installation

## 📦 Installation

```bash
npm install vitepress-plugin-bprogress
# or
pnpm add vitepress-plugin-bprogress
# or
bun add vitepress-plugin-bprogress
```

## 🚀 Quick Start

### Method 1: Theme Integration (Recommended)

Create or update your theme file at `.vitepress/theme/index.ts`:

```ts
import DefaultTheme from 'vitepress/theme'
import vitepressBprogress from 'vitepress-plugin-bprogress'
// Import CSS styles (both imports work)
import 'vitepress-plugin-bprogress/style.css'
// or
// import 'vitepress-plugin-bprogress/style'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    vitepressBprogress(ctx)
  }
} satisfies Theme
```

### Method 2: VitePress Config + Theme

Configure VitePress in `.vitepress/config.ts`:

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  // ... your config
  ssr: {
    noExternal: ['vitepress-plugin-bprogress']
  }
})
```

And setup in your theme file `.vitepress/theme/index.ts`:

```ts
import DefaultTheme from 'vitepress/theme'
import vitepressBprogress from 'vitepress-plugin-bprogress'
// Import CSS styles (both imports work)
import 'vitepress-plugin-bprogress/style.css'
// or
// import 'vitepress-plugin-bprogress/style'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    vitepressBprogress(ctx)
  }
} satisfies Theme
```

That's it! The progress bar will automatically show during route changes in your VitePress site.

## ⚙️ Configuration

The plugin comes with sensible defaults but can be customized:

### Default Settings

```ts
{
  showSpinner: false,     // No spinner for clean look
  speed: 400,            // Smooth 400ms animations
  easing: 'linear',      // Linear easing
  parent: '.Layout'      // Mounted on VitePress Layout
}
```

### Custom Configuration

```ts
import DefaultTheme from 'vitepress/theme'
import vitepressBprogress from 'vitepress-plugin-bprogress'
// Import CSS styles (both imports work)
import 'vitepress-plugin-bprogress/style.css'
// or
// import 'vitepress-plugin-bprogress/style'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    const bProgress = vitepressBprogress(ctx)
    
    // Custom configuration (optional)
    if (bProgress) {
      bProgress.configure({
        showSpinner: true,      // Show loading spinner
        speed: 300,            // Animation speed in ms
        easing: 'ease-out',    // CSS easing function
        minimum: 0.1,          // Minimum progress (0-1)
        trickle: true,         // Auto increment
        trickleSpeed: 200,     // Trickle speed
        direction: 'ltr'       // Progress direction
      })
    }
  }
} satisfies Theme
```

## 🎨 Theme Integration

The plugin automatically integrates with VitePress themes:

- **🎨 Colors**: Uses `--vp-c-brand-1` for progress bar color
- **🌗 Dark Mode**: Automatically adapts to theme changes  
- **📐 Z-Index**: Uses `--vp-z-index-layout-top` for proper layering

## 🎯 Custom Styling

Override CSS variables for further customization:

```css
:root {
  --bprogress-color: #ff6b6b;     /* Custom color */
  --bprogress-height: 4px;        /* Thicker progress bar */
}

/* Fine-grained control */
.bprogress .bar {
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4) !important;
}
```

## License

MIT
