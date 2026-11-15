'use client'

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from 'react'

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

/*
 * La 404 globale (global-not-found.tsx) avvolge header e pagina: lì il selettore sa di essere su una 404
 * già nel rendering sul server, e l'HTML punta subito alla home delle altre lingue (anche senza JavaScript).
 */
const NonTrovataCtx = createContext(false)

export function NonTrovataProvider({ children }: { children: ReactNode }) {
  return <NonTrovataCtx.Provider value>{children}</NonTrovataCtx.Provider>
}

export function usePaginaNonTrovata() {
  const globale = useContext(NonTrovataCtx)
  const segnata = useSyncExternalStore(
    iscrivi,
    () => nonTrovata,
    () => false
  )
  return globale || segnata
}
