import { useEffect, useRef } from 'react'
import initLegacy from '../plugins/initLegacy.js'

export default function StaticHtml({ path }) {
  const ref = useRef(null)
  useEffect(() => {
    let mounted = true
    fetch(path)
      .then(r => r.text())
      .then(html => {
        if (!mounted || !ref.current) return
        const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
        ref.current.innerHTML = match ? match[1] : html
        const selectorsToRemove = [
          '.gc_top_header_wrapper',
          '.gc_main_menu_wrapper',
          'header.mobail_menu',
          '.gc_footer_main_wrapper',
          '.gc_bottom_footer_main_wrapper',
          'script'
        ]
        selectorsToRemove.forEach(sel => {
          ref.current.querySelectorAll(sel).forEach(el => el.remove())
        })
        initLegacy()
      })
      .catch(() => {
        if (ref.current) ref.current.textContent = 'Failed to load content.'
      })
    return () => {
      mounted = false
      if (ref.current) ref.current.innerHTML = ''
    }
  }, [path])
  return <div ref={ref} />
}
