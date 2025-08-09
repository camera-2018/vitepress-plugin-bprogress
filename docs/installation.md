# Installation

Learn how to install and configure the VitePress BProgress Plugin.

## Package Installation

Install the plugin via npm:

```bash
npm install vitepress-plugin-bprogress
```

Install the plugin via bun:

```bash
bun install vitepress-plugin-bprogress
```

## Setup

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
import { defineConfig } from 'vitepress'

export default defineConfig({
  // ... other config
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

## Navigation Test

Try these links to test the installation:

- [Home](/) - Return home
- [Guide](/guide) - Usage guide
- [API](/api) - API reference
- [Configuration](/configuration) - Advanced config
- [Examples](/examples) - See examples

## Verification

If you see a progress bar when clicking the links above, the installation was successful!