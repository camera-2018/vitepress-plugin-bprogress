import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/index.ts',
  outDir: 'lib',
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  external: ['vitepress', '@bprogress/core']
})