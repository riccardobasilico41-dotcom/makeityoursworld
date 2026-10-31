'use client'

import type { MouseEvent } from 'react'
import { Heart } from 'lucide-react'
import { alternaSalvato, isSalvato, useSalvati, type ElementoSalvato } from '@/lib/salvati'

export type { ElementoSalvato } from '@/lib/salvati'

/**
 * Cuore «Salva / Salvato» per «Il mio prossimo viaggio» (/salvati).
 * Al primo render è sempre «non salvato»: lo stato vero arriva dopo
 * l'idratazione, letto da localStorage.
 *
 * - `icona`: quadrato 44px con solo il cuore (per card e testate su foto).
 * - `pulsante`: cuore + testo «Salva» / «Salvato».
 */
export function SalvaBottone({
  elemento,
  variante = 'pulsante',
  className = '',
}: {
  elemento: ElementoSalvato
  variante?: 'icona' | 'pulsante'
  className?: string
}) {
  const salvati = useSalvati()
  const salvato = isSalvato(salvati, elemento)
  const etichetta = salvato ? 'Salvato' : 'Salva'

  function clic(e: MouseEvent<HTMLButtonElement>) {
    // Se finisce dentro un link o una card cliccabile, non navigare.
    e.preventDefault()
    e.stopPropagation()
    alternaSalvato(elemento)
  }

  const cuore = (
    <Heart
      size={variante === 'icona' ? 20 : 18}
      aria-hidden="true"
      fill={salvato ? 'currentColor' : 'none'}
      className={salvato ? 'text-rosso' : undefined}
    />
  )

  if (variante === 'icona') {
    return (
      <button
        type="button"
        onClick={clic}
        aria-pressed={salvato}
        aria-label={`${etichetta}: ${elemento.titolo}`}
        title={etichetta}
        className={`inline-flex size-11 shrink-0 items-center justify-center rounded-none border-2 border-ink bg-cream text-ink transition-colors duration-150 hover:bg-ink hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2 ${className}`}
      >
        {cuore}
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={clic}
      aria-pressed={salvato}
      className={`inline-flex min-h-11 items-center gap-2 rounded-none border-2 border-ink bg-cream px-4 text-[0.95rem] font-semibold text-ink transition-colors duration-150 hover:bg-ink hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2 ${className}`}
    >
      {cuore}
      {etichetta}
    </button>
  )
}
