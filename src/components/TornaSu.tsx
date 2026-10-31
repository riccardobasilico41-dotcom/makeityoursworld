'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

/**
 * «Torna su» in basso a destra, per tutte le pagine lunghe: compare dopo circa
 * uno schermo e mezzo di scroll. 48 px, angoli vivi, bordo nero come i bottoni
 * del sito. Con prefers-reduced-motion il ritorno è istantaneo e il bottone
 * appare senza dissolvenza. Nessun altro elemento fisso occupa quell'angolo.
 */
export function TornaSu() {
  const [visibile, setVisibile] = useState(false)

  useEffect(() => {
    let frame = 0
    const controlla = () => {
      frame = 0
      setVisibile(window.scrollY > window.innerHeight * 1.5)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(controlla)
    }
    controlla()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const tornaSu = () => {
    const ridotto = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: ridotto ? 'auto' : 'smooth' })
    // il focus torna all'inizio della pagina, così chi usa la tastiera riparte da lì
    const primo = document.querySelector<HTMLElement>('body a[href], body button')
    primo?.focus({ preventScroll: true })
  }

  return (
    <button
      type="button"
      onClick={tornaSu}
      aria-label="Torna all'inizio della pagina"
      title="Torna su"
      tabIndex={visibile ? 0 : -1}
      aria-hidden={!visibile}
      className={`fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex size-12 items-center justify-center border-2 border-ink bg-cream text-ink shadow-[3px_3px_0_var(--color-ink)] transition-[opacity,visibility,transform,background-color,color] duration-200 hover:bg-rosso hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2 motion-reduce:transition-none sm:right-6 sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))] ${
        visibile ? 'translate-y-0 opacity-100' : 'pointer-events-none invisible translate-y-2 opacity-0 motion-reduce:translate-y-0'
      }`}
    >
      <ArrowUp size={20} aria-hidden />
    </button>
  )
}
