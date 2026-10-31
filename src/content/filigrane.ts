/**
 * Filigrane per Paese: opere di pubblico dominio (stampe, acquerelli, litografie) ripulite
 * dallo sfondo con tools/filigrana.py e mostrate enormi e trasparenti ai bordi delle pagine
 * del Paese, delle sue destinazioni ed esperienze e dei suoi viaggi (src/components/Filigrana.tsx).
 *
 * `a` va in alto a sinistra, `b` in basso a destra. Fonte e licenza in `fonte`, per
 * /crediti-fotografici e per i controlli: tutte devono essere pubblico dominio o CC0.
 */
export type MotivoFiligrana = {
  src: string
  /** Descrizione breve, solo per chi mantiene il sito: la filigrana è decorativa (alt vuoto). */
  cosa: string
  fonte: { titolo: string; autore: string; anno?: string; url: string; licenza: 'Pubblico dominio' | 'CC0' }
}

export type FiligranaPaese = { a?: MotivoFiligrana; b?: MotivoFiligrana }

// un file per area, così chi li compila non si pesta i piedi
import { filigraneEuropa } from './filigrane/europa'
import { filigraneAsia } from './filigrane/asia'
import { filigraneAltri } from './filigrane/altri'

export const filigrane: Record<string, FiligranaPaese> = { ...filigraneEuropa, ...filigraneAsia, ...filigraneAltri }
