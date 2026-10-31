'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'
import { useSalvati } from '@/lib/salvati'

/** Cuore in testata con il numero di elementi salvati: porta a /salvati. */
export function SalvatiContatore() {
  const n = useSalvati().length
  const etichetta = n === 0 ? 'Il mio prossimo viaggio' : `Il mio prossimo viaggio, ${n} ${n === 1 ? 'salvato' : 'salvati'}`

  return (
    <Link
      href="/salvati"
      aria-label={etichetta}
      title="Il mio prossimo viaggio"
      className="relative inline-flex size-11 items-center justify-center text-ink transition-colors duration-150 hover:text-rosso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso"
    >
      <Heart size={20} aria-hidden="true" fill={n > 0 ? 'currentColor' : 'none'} className={n > 0 ? 'text-rosso' : undefined} />
      {n > 0 && (
        <span
          aria-hidden="true"
          className="absolute right-0.5 top-0.5 inline-flex min-w-5 items-center justify-center border-2 border-cream bg-ink px-1 text-[0.65rem] font-bold leading-4 text-cream"
        >
          {n > 99 ? '99+' : n}
        </span>
      )}
    </Link>
  )
}
