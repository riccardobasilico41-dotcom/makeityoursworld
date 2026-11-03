'use client'

import { createContext, useContext, type ReactNode } from 'react'
import type { Lingua } from './config'

const ContestoLingua = createContext<Lingua>('en')

/** Mette la lingua della pagina a disposizione dei componenti client (Link, selettore, testi). */
export function LinguaProvider({ lingua, children }: { lingua: Lingua; children: ReactNode }) {
  return <ContestoLingua.Provider value={lingua}>{children}</ContestoLingua.Provider>
}

export const useLingua = () => useContext(ContestoLingua)
