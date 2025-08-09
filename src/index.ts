import { BProgress } from '@bprogress/core'
import type { EnhanceAppContext } from 'vitepress'
import './style.css'

const vitepressBprogress = (ctx: EnhanceAppContext) => {
  if (typeof window === 'undefined') return
  
  const { router } = ctx
  const initProgress = () => {
    const layout = document.querySelector('.Layout') as HTMLElement
    if (layout) {
      setupProgressBar(layout)
      return
    }

    // Use MutationObserver to wait for DOM changes
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          const layout = document.querySelector('.Layout') as HTMLElement
          if (layout) {
            observer.disconnect()
            setupProgressBar(layout)
            return
          }
        }
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
  }

  const setupProgressBar = (parent: HTMLElement) => {
    // Configure BProgress with custom settings
    BProgress.configure({ 
      showSpinner: false,
      speed: 400,
      easing: 'linear',
      parent,
    })

    const r: any = router as any

    // Cache original route handlers to preserve existing functionality
    const cacheBeforeRouteChange = r.onBeforeRouteChange as undefined | ((to: any) => void)
    const cacheAfterRouteChange = r.onAfterRouteChange as undefined | ((to: any) => void)

    // Hook into VitePress router events
    r.onBeforeRouteChange = (to: any) => {
      BProgress.start()
      cacheBeforeRouteChange?.(to)
    }
    r.onAfterRouteChange = (to: any) => {
      BProgress.done()
      cacheAfterRouteChange?.(to)
    }
  }
  
  // Check DOM ready state and initialize accordingly
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProgress)
  } else {
    initProgress()
  }

  return BProgress
}

export default vitepressBprogress