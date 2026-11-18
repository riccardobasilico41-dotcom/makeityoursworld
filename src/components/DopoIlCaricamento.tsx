'use client'

import { useEffect, useState, type ReactNode } from 'react'

/**
 * Mostra i figli solo a pagina caricata e con il browser libero. Serve alle decorazioni
 * pesanti (le filigrane pesano fino a 500 KB l'una): scaricate subito rubavano banda alla
 * foto di copertina e ritardavano il primo disegno della pagina.
 */
export function DopoIlCaricamento({ children }: { children: ReactNode }) {
  const [pronto, setPronto] = useState(false)
  useEffect(() => {
    let annullato = false
    const via = () => {
      const idle = (window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number })
        .requestIdleCallback
      if (idle) idle(() => !annullato && setPronto(true), { timeout: 2500 })
      else setTimeout(() => !annullato && setPronto(true), 300)
    }
    if (document.readyState === 'complete') via()
    else window.addEventListener('load', via, { once: true })
    return () => {
      annullato = true
      window.removeEventListener('load', via)
    }
  }, [])
  return pronto ? <>{children}</> : null
}
