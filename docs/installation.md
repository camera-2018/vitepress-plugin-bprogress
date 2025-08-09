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
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    vitepressBprogress(ctx)
  }
} satisfies Theme
```

### Method 2: Direct Import

If you prefer to import in your config file:

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  // ... other config
})
```

And then add to your theme:

```ts
import vitepressBprogress from 'vitepress-plugin-bprogress'

// In your enhanceApp function
vitepressBprogress({ app, router, siteData })
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