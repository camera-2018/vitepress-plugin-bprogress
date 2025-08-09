import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'BProgress Plugin Test',
  description: 'Testing VitePress BProgress Plugin',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' },
      { text: 'API', link: '/api' }
    ],
    
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Installation', link: '/installation' }
        ]
      },
      {
        text: 'Advanced',
        items: [
          { text: 'Configuration', link: '/configuration' },
          { text: 'Examples', link: '/examples' }
        ]
      }
    ]
  },
  
})