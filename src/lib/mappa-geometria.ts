import fs from 'node:fs'
import path from 'node:path'
import type { DatiAtlante } from '@/components/MappaAtlante'
import type { GeometriaMappa } from '@/components/useGeometriaMappa'

/*
 * Contorni delle mappe Paese (src/content/mappe/<paese>.json e <paese>-atlante.json).
 *
 * I contorni sono la parte pesante della mappa (New York: 62 KB il Paese + 63 KB i distretti) e
 * finivano due volte nella pagina: nell'SVG dell'HTML e nei dati del componente client. Ora la
 * pagina riceve la mappa senza contorni e il client li scarica da /geometria-mappa/<paese>
 * quando la mappa si avvicina allo schermo (come la mappa del mondo della home).
 */

export type FileMappa = {
  viewBox: string
  w: number
  h: number
  path: string
  proiezione: { tipo: 'mercatore'; lng0: number; y0: number; s: number; ox: number; oy: number }
}


const CARTELLA = () => path.join(process.cwd(), 'src/content/mappe')

function leggi<T>(nome: string): T | null {
  if (!/^[a-z-]+$/.test(nome)) return null
  const file = path.join(CARTELLA(), `${nome}.json`)
  if (!fs.existsSync(file)) return null
  return JSON.parse(fs.readFileSync(file, 'utf8')) as T
}

export const leggiMappa = (paeseSlug: string) => leggi<FileMappa>(paeseSlug)
export const leggiAtlante = (paeseSlug: string) => (/^[a-z-]+$/.test(paeseSlug) ? leggi<DatiAtlante>(`${paeseSlug}-atlante`) : null)

/** Paesi con una mappa (per le rotte statiche dei contorni). */
export function paesiConMappa(): string[] {
  return fs
    .readdirSync(CARTELLA())
    .filter((f) => /^[a-z-]+\.json$/.test(f) && !f.endsWith('-atlante.json') && f !== 'mondo.json')
    .map((f) => f.slice(0, -5))
}

const perId = (voci: { id: string; path: string }[] | undefined) => Object.fromEntries((voci ?? []).map((v) => [v.id, v.path]))

export function geometriaPaese(paeseSlug: string): GeometriaMappa | null {
  const mappa = leggiMappa(paeseSlug)
  if (!mappa) return null
  const a = leggiAtlante(paeseSlug)
  return {
    path: mappa.path,
    terra: a?.terra,
    vicini: perId(a?.vicini),
    interni: perId(a?.interni),
    fiumi: perId(a?.fiumi),
    laghi: perId(a?.laghi),
  }
}

/** L'atlante senza i contorni che arrivano con geometriaPaese(). */
export function atlanteSenzaContorni(a: DatiAtlante): DatiAtlante {
  const via = <V extends { path: string }>(voci: V[]) => voci.map((v) => ({ ...v, path: '' }))
  return {
    ...a,
    terra: undefined,
    vicini: via(a.vicini),
    interni: a.interni && via(a.interni),
    fiumi: via(a.fiumi),
    laghi: via(a.laghi),
  }
}
