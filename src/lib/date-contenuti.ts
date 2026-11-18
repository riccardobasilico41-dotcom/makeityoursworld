import date from '@/content/date-contenuti.json'
import type { Lingua } from './i18n/config'

/**
 * Date di pubblicazione e ultimo aggiornamento dei testi, prese da git con
 * tools/date-contenuti.mjs (da rilanciare prima di pubblicare). Alimentano
 * datePublished/dateModified e la data «Aggiornato il» visibile in pagina.
 */
export type DateContenuto = { pubblicato: string; aggiornato: string }
type Tipo = keyof typeof date

export function dateContenuto(tipo: Tipo, chiave: string): DateContenuto | undefined {
  return (date[tipo] as Record<string, DateContenuto>)[chiave]
}

/** Campi schema.org da aggiungere a un Article/BlogPosting/TouristDestination. */
export function dateSchema(d?: DateContenuto) {
  return d ? { datePublished: d.pubblicato, dateModified: d.aggiornato } : {}
}

const LOCALE_DATA = { it: 'it-IT', en: 'en-GB', es: 'es-ES' } satisfies Record<Lingua, string>

export function dataLeggibile(iso: string, lingua: Lingua): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString(LOCALE_DATA[lingua], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export const ETICHETTA_AGGIORNATO = { it: 'Aggiornato il', en: 'Updated on', es: 'Actualizado el' } satisfies Record<
  Lingua,
  string
>
