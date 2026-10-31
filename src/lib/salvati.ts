'use client'

import { useSyncExternalStore } from 'react'

// «Il mio prossimo viaggio»: preferiti salvati nel browser (localStorage,
// chiave `miy-salvati`). Tutti i componenti leggono lo stesso store e si
// aggiornano con un evento custom (stessa scheda) o `storage` (altre schede).

export type TipoSalvato = 'viaggio' | 'destinazione' | 'esperienza'

export type ElementoSalvato = {
  tipo: TipoSalvato
  id: string
  titolo: string
  href: string
  /** Percorso in /public (come `immagine` di destinazioni ed esperienze). */
  immagine?: string
  sottotitolo?: string
}

const CHIAVE = 'miy-salvati'
const EVENTO = 'miy-salvati-cambiati'
const VUOTO: ElementoSalvato[] = []

// Se localStorage non c'è o è bloccato (navigazione privata, quota piena),
// i salvati restano in memoria per la sessione.
let soloMemoria = false
let memoria: string | null = null

function leggiRaw(): string | null {
  if (soloMemoria) return memoria
  try {
    return window.localStorage.getItem(CHIAVE)
  } catch {
    soloMemoria = true
    return memoria
  }
}

function scriviRaw(raw: string) {
  memoria = raw
  if (soloMemoria) return
  try {
    window.localStorage.setItem(CHIAVE, raw)
  } catch {
    soloMemoria = true
  }
}

const TIPI: TipoSalvato[] = ['viaggio', 'destinazione', 'esperienza']

function valido(x: unknown): x is ElementoSalvato {
  if (!x || typeof x !== 'object') return false
  const e = x as Record<string, unknown>
  return (
    TIPI.includes(e.tipo as TipoSalvato) &&
    typeof e.id === 'string' &&
    typeof e.titolo === 'string' &&
    typeof e.href === 'string' &&
    (e.immagine === undefined || typeof e.immagine === 'string') &&
    (e.sottotitolo === undefined || typeof e.sottotitolo === 'string')
  )
}

// Snapshot stabile: si riparsa solo quando la stringa salvata cambia.
let ultimoRaw: string | null = null
let ultimoValore: ElementoSalvato[] = VUOTO

function snapshot(): ElementoSalvato[] {
  const raw = leggiRaw()
  if (raw === ultimoRaw) return ultimoValore
  ultimoRaw = raw
  try {
    const dati: unknown = raw ? JSON.parse(raw) : []
    ultimoValore = Array.isArray(dati) ? dati.filter(valido) : VUOTO
  } catch {
    ultimoValore = VUOTO
  }
  return ultimoValore
}

function iscrivi(cb: () => void) {
  const suStorage = (e: StorageEvent) => {
    if (e.key === null || e.key === CHIAVE) cb()
  }
  window.addEventListener(EVENTO, cb)
  window.addEventListener('storage', suStorage)
  return () => {
    window.removeEventListener(EVENTO, cb)
    window.removeEventListener('storage', suStorage)
  }
}

/** Sul server e durante l'idratazione: sempre vuoto (niente errori di idratazione). */
const snapshotServer = () => VUOTO

export function useSalvati(): ElementoSalvato[] {
  return useSyncExternalStore(iscrivi, snapshot, snapshotServer)
}

const stessoElemento = (a: Pick<ElementoSalvato, 'tipo' | 'id'>, b: Pick<ElementoSalvato, 'tipo' | 'id'>) =>
  a.tipo === b.tipo && a.id === b.id

function salva(lista: ElementoSalvato[]) {
  scriviRaw(JSON.stringify(lista))
  window.dispatchEvent(new Event(EVENTO))
}

export function isSalvato(lista: ElementoSalvato[], el: Pick<ElementoSalvato, 'tipo' | 'id'>) {
  return lista.some((x) => stessoElemento(x, el))
}

export function aggiungiSalvato(el: ElementoSalvato) {
  const lista = snapshot()
  if (isSalvato(lista, el)) return
  salva([...lista, el])
}

export function togliSalvato(el: Pick<ElementoSalvato, 'tipo' | 'id'>) {
  salva(snapshot().filter((x) => !stessoElemento(x, el)))
}

export function alternaSalvato(el: ElementoSalvato) {
  if (isSalvato(snapshot(), el)) togliSalvato(el)
  else aggiungiSalvato(el)
}

/** true solo dopo l'idratazione: per non mostrare lo stato vuoto prima di aver letto il browser. */
export function useIdratato(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
}
