'use client'

import { useEffect, useState } from 'react'

/** Linea di lettura: il blocco che la attraversa (a circa un terzo dello schermo) è quello che si sta leggendo. */
const LINEA = 0.35

/**
 * Indice dell'ancora che si sta leggendo, tra gli `ids` in ordine di pagina: l'ultima il cui
 * inizio ha superato la linea di lettura. Con `contenitore`, fuori da quel blocco vale -1
 * (es. il giorno corrente solo mentre si leggono i giorni). Un solo ascolto dello scroll,
 * passivo e raggruppato per fotogramma: niente animazioni, solo lettura della posizione.
 */
export function useAncoraAttiva(ids: string[], contenitore?: string): number {
  const [attiva, setAttiva] = useState(-1)
  const chiave = ids.join('|')

  useEffect(() => {
    const elenco = chiave ? chiave.split('|') : []
    let frame = 0
    const calcola = () => {
      frame = 0
      const linea = window.innerHeight * LINEA
      if (contenitore) {
        const box = document.getElementById(contenitore)?.getBoundingClientRect()
        if (!box || box.top > linea || box.bottom < linea) {
          setAttiva(-1)
          return
        }
      }
      let indice = -1
      for (let i = 0; i < elenco.length; i++) {
        const el = document.getElementById(elenco[i])
        if (el && el.getBoundingClientRect().top <= linea) indice = i
      }
      setAttiva(indice)
    }
    const pianifica = () => {
      if (!frame) frame = requestAnimationFrame(calcola)
    }
    calcola()
    window.addEventListener('scroll', pianifica, { passive: true })
    window.addEventListener('resize', pianifica)
    // una tendina che si apre sposta tutto quello che viene dopo
    document.addEventListener('toggle', pianifica, true)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', pianifica)
      window.removeEventListener('resize', pianifica)
      document.removeEventListener('toggle', pianifica, true)
    }
  }, [chiave, contenitore])

  return attiva
}
