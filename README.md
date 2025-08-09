# vitepress-plugin-bprogress

A VitePress plugin for beautiful progress bars using [bprogress](https://github.com/bprogress/bprogress).

## Installation

```bash
npm install vitepress-plugin-bprogress
# or
pnpm add vitepress-plugin-bprogress
# or
bun add vitepress-plugin-bprogress
```

## Usage

Add the plugin to your VitePress configuration:

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import vitepressBprogress from 'vitepress-plugin-bprogress'

export default defineConfig({
  // ... your config
  enhanceApp({ app, router, siteData }) {
    vitepressBprogress({ app, router, siteData })
  }
})
```

The progress bar will automatically show during route changes in your VitePress site.

## Configuration

You can configure the progress bar using BProgress options:

```ts
// .vitepress/config.ts  
import { defineConfig } from 'vitepress'
import vitepressBprogress from 'vitepress-plugin-bprogress'

export default defineConfig({
  enhanceApp({ app, router, siteData }) {
    const BProgress = vitepressBprogress({ app, router, siteData })
    
    // Configure BProgress options
    BProgress?.configure({ 
      showSpinner: true,    // Show loading spinner
      minimum: 0.08,        // Minimum progress (0.08-1)
      speed: 200,           // Animation speed
      trickle: true,        // Auto increment
      trickleSpeed: 200,    // Trickle speed
      easing: 'linear',     // Animation easing
      direction: 'ltr'      // Progress direction
    })
  }
})
```

## Custom Styling

You can customize the progress bar appearance by overriding the CSS:

```css
/* Override default BProgress styles */
.bprogress .bar {
  background: #your-color !important;
  height: 3px !important;
}

.bprogress .peg {
  box-shadow: 0 0 10px #your-color, 0 0 5px #your-color !important;
}

.bprogress .spinner-icon {
  border-top-color: #your-color !important;
  border-left-color: #your-color !important;
}
```

## License

MIT
