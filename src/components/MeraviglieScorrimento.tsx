'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

/**
 * Fila orizzontale a scorrimento (scroll-snap) con le frecce: col dito o col trackpad si
 * scorre e basta; le frecce avanzano di una schermata e si spengono agli estremi.
 */
export function Scorrimento({ children, etichetta }: { children: ReactNode; etichetta: string }) {
  const filaRef = useRef<HTMLUListElement>(null)
  const [inizio, setInizio] = useState(true)
  const [fine, setFine] = useState(false)

  useEffect(() => {
    const fila = filaRef.current
    if (!fila) return
    const aggiorna = () => {
      setInizio(fila.scrollLeft < 8)
      setFine(fila.scrollLeft + fila.clientWidth > fila.scrollWidth - 8)
    }
    aggiorna()
    fila.addEventListener('scroll', aggiorna, { passive: true })
    window.addEventListener('resize', aggiorna)
    return () => {
      fila.removeEventListener('scroll', aggiorna)
      window.removeEventListener('resize', aggiorna)
    }
  }, [])

  const vai = (verso: 1 | -1) => {
    const fila = filaRef.current
    if (!fila) return
    const riduci = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    fila.scrollBy({ left: verso * fila.clientWidth * 0.85, behavior: riduci ? 'auto' : 'smooth' })
  }

  const freccia =
    'inline-flex size-11 items-center justify-center border-2 border-ink bg-cream text-ink transition-colors hover:bg-ink hover:text-cream disabled:pointer-events-none disabled:opacity-30'

  return (
    <div>
      <ul
        ref={filaRef}
        aria-label={etichetta}
        className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pb-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>
      <div className="mt-4 flex justify-end gap-2">
        <button type="button" className={freccia} onClick={() => vai(-1)} disabled={inizio} aria-label="Indietro">
          <ArrowLeft size={18} />
        </button>
        <button type="button" className={freccia} onClick={() => vai(1)} disabled={fine} aria-label="Avanti">
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  )
}
