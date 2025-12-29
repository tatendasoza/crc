import { useEffect, useRef } from 'react'
import initLegacy from '../plugins/initLegacy.js'

export default function StaticHtml({ path }) {
  const ref = useRef(null)
  useEffect(() => {
    let mounted = true
    const sitePath = `/site${path}`
    fetch(sitePath)
      .then(r => r.text())
      .then(html => {
        if (!mounted || !ref.current) return
        const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
        const bodyHtml = match ? match[1] : html
        const rewrote = bodyHtml
          .replace(/(href|src)=\"css\//g, '$1="/site/css/')
          .replace(/(href|src)=\"js\//g, '$1="/site/js/')
          .replace(/(href|src)=\"images\//g, '$1="/site/images/')
          .replace(/(href|src)=\"fonts\//g, '$1="/site/fonts/')
          .replace(/url\(\s*['\"]?images\//g, 'url(/site/images/')
        ref.current.innerHTML = rewrote
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
