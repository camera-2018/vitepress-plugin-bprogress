import DefaultTheme from 'vitepress/theme'
import vitepressBprogress from '../../../src/index'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    vitepressBprogress(ctx)
  }
} satisfies Theme