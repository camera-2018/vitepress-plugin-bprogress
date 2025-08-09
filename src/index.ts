import '@bprogress/core/css'
import { BProgress } from '@bprogress/core'
import type { EnhanceAppContext } from 'vitepress'

const vitepressBprogress = (ctx: EnhanceAppContext) => {
  if (typeof window === 'undefined') return
  
  const { router } = ctx
  
  setTimeout(() => {
    BProgress.configure({ showSpinner: false })

    const r: any = router as any
    const afterKey: 'onAfterRouteChange' | 'onAfterRouteChanged' =
      'onAfterRouteChange' in r ? 'onAfterRouteChange' : 'onAfterRouteChanged'

    const cacheBeforeRouteChange = r.onBeforeRouteChange as undefined | ((to: any) => void)
    const cacheAfterRouteChange = r[afterKey] as undefined | ((to: any) => void)

    r.onBeforeRouteChange = (to: any) => {
      BProgress.start()
      cacheBeforeRouteChange?.(to)
    }
    r[afterKey] = (to: any) => {
      BProgress.done()
      cacheAfterRouteChange?.(to)
    }
  })

  return BProgress
}

export default vitepressBprogress