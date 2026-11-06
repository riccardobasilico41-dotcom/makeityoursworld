'use client'

import { useEffect, useSyncExternalStore } from 'react'

/*
 * La pagina 404 lo dice al selettore della lingua (che sta nell'header, nel layout, e da solo non lo sa):
 * così «IT / ES» porta alla home dell'altra lingua invece che a un altro indirizzo inesistente.
 */

let nonTrovata = false
const ascoltatori = new Set<() => void>()
const avvisa = () => ascoltatori.forEach((f) => f())

function iscrivi(f: () => void) {
  ascoltatori.add(f)
  return () => ascoltatori.delete(f)
}

/** Da mettere nella pagina not-found: segna la pagina come 404 finché resta montata. */
export function SegnaNonTrovata() {
  useEffect(() => {
    nonTrovata = true
    avvisa()
    return () => {
      nonTrovata = false
      avvisa()
    }
  }, [])
  return null
}

export const usePaginaNonTrovata = () =>
  useSyncExternalStore(
    iscrivi,
    () => nonTrovata,
    () => false
  )
