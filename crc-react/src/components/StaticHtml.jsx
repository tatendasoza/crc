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
