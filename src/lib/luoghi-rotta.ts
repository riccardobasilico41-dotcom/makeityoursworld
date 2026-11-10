import { coordinateDestinazioni } from '@/content/mappe/coordinate'
import { getDestinazione, getTripMeta } from '@/lib/geo'
import { conPaesiDelleDestinazioni } from '@/lib/viaggi-filtri'
import { PREFISSO_TAPPA } from '@/lib/riepilogo-viaggio'
import type { Lingua } from '@/lib/i18n/config'

export type LuogoRotta = { nome: string; lat: number; lng: number }

/**
 * Le tappe del viaggio con le coordinate, nell'ordine di `tappeMappa` e senza doppioni
 * consecutivi: servono per «Apri in Google Maps» e per il file KML da importare in My Maps.
 * Stessa regola della mappa «La rotta»: coordinate a mano nei viaggi-dati, altrimenti quelle
 * della destinazione.
 */
export function luoghiDellaRotta(slug: string, lingua: Lingua): LuogoRotta[] {
  const grezzo = getTripMeta(slug, lingua)
  if (!grezzo) return []
  const meta = conPaesiDelleDestinazioni(grezzo)
  const out: LuogoRotta[] = []
  for (const tp of meta.tappeMappa) {
    const paese = tp.paeseSlug === undefined ? meta.paeseSlug : tp.paeseSlug
    const c: [number, number] | undefined =
      typeof tp.lat === 'number' && typeof tp.lng === 'number'
        ? [tp.lat, tp.lng]
        : paese && tp.destinazioneSlug
          ? coordinateDestinazioni[`${paese}/${tp.destinazioneSlug}`]
          : undefined
    if (!c) continue
    const dest = paese && tp.destinazioneSlug ? getDestinazione(paese, tp.destinazioneSlug, lingua) : undefined
    const nome = dest?.nome ?? tp.nome.replace(PREFISSO_TAPPA, '').trim()
    const ultimo = out[out.length - 1]
    if (ultimo && ultimo.lat === c[0] && ultimo.lng === c[1]) continue
    out.push({ nome, lat: c[0], lng: c[1] })
  }
  return out
}

/** Google Maps accetta al massimo 9 tappe intermedie: oltre, se ne tengono 9 distribuite lungo il percorso. */
export function linkGoogleMaps(luoghi: LuogoRotta[]): string | null {
  if (luoghi.length < 2) return null
  const coord = (l: LuogoRotta) => `${l.lat.toFixed(5)},${l.lng.toFixed(5)}`
  const [primo, ultimo] = [luoghi[0], luoghi[luoghi.length - 1]]
  let mezzo = luoghi.slice(1, -1)
  if (mezzo.length > 9) mezzo = Array.from({ length: 9 }, (_, i) => mezzo[Math.round((i * (mezzo.length - 1)) / 8)])
  const q = new URLSearchParams({ api: '1', origin: coord(primo), destination: coord(ultimo) })
  if (mezzo.length) q.set('waypoints', mezzo.map(coord).join('|'))
  return `https://www.google.com/maps/dir/?${q.toString()}`
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** File KML con le tappe numerate e la linea del percorso, da importare in Google My Maps. */
export function kmlRotta(titolo: string, luoghi: LuogoRotta[]): string {
  const segnaposti = luoghi
    .map((l, i) => `    <Placemark><name>${i + 1}. ${esc(l.nome)}</name><Point><coordinates>${l.lng},${l.lat},0</coordinates></Point></Placemark>`)
    .join('\n')
  const linea = luoghi.map((l) => `${l.lng},${l.lat},0`).join(' ')
  return `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>${esc(titolo)}</name>
${segnaposti}
    <Placemark><name>${esc(titolo)}</name><LineString><tessellate>1</tessellate><coordinates>${linea}</coordinates></LineString></Placemark>
  </Document>
</kml>
`
}
