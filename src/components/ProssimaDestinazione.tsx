import { riduciPerScheda } from '@/components/TripCard'
import { ProssimaScheda } from '@/components/ProssimaScheda'
import { TitoloSezione } from '@/components/scheda/Blocchi'
import { Compass } from 'lucide-react'
import { getAllPaesi, getPaese, getTripMeta } from '@/lib/geo'
import { getAllViaggi } from '@/lib/viaggi'
import { coordinateDestinazioni } from '@/content/mappe/coordinate'
import type { Lingua } from '@/lib/i18n/config'
import { copertina } from '@/lib/i18n/contenuti'

/*
 * «Leggi la prossima destinazione» in fondo a ogni viaggio: un solo viaggio consigliato.
 * Prima gli abbinamenti scelti a mano (viaggi che si combinano davvero), poi il viaggio
 * principale del Paese più vicino.
 */

/** Abbinamenti scelti: viaggio → viaggio da leggere dopo. */
const ABBINAMENTI: Record<string, string> = {
  'india-rajasthan-varanasi': 'maldive-guida',
  'india-rajasthan-10-giorni': 'maldive-guida',
  'india-sud-taj-mahal': 'sri-lanka-2023',
  'sri-lanka-2023': 'maldive-guida',
  'maldive-guida': 'sri-lanka-2023',
  'giava-bali-gili': 'sumatra-mentawai',
  'sumatra-mentawai': 'indonesia-isola-per-isola',
  'indonesia-isola-per-isola': 'bali-nusa-komodo',
  'bali-nusa-komodo': 'bali-sulawesi-raja-ampat',
  'bali-sulawesi-raja-ampat': 'giava-bali-gili',
  'indonesia-itinerario': 'malesia-singapore',
  'peru-itinerario': 'bolivia-itinerario',
  'peru-due-settimane': 'bolivia-itinerario',
  'bolivia-itinerario': 'peru-itinerario',
  'messico-beach-life': 'messico-yucatan-completo',
  'messico-yucatan-completo': 'messico-dia-de-los-muertos',
  'messico-dia-de-los-muertos': 'messico-cdmx-baja-california',
  'messico-cdmx-baja-california': 'centro-america-itinerario',
  'centro-america-itinerario': 'costa-rica-itinerario',
  'costa-rica-itinerario': 'centro-america-itinerario',
  'giordania-itinerario': 'egitto-completo',
  'egitto-completo': 'giordania-itinerario',
  'egitto-mare-luxor-cairo': 'giordania-itinerario',
  'islanda-2024': 'lofoten-estate-2025',
  'lofoten-estate-2025': 'tromso',
  'tromso': 'lapponia-svedese-abisko',
  'giappone-itinerario': 'classic-japan',
  'classic-japan': 'corea-del-sud-itinerario',
  'corea-del-sud-itinerario': 'giappone-itinerario',
  'cina-classica': 'cina-paesaggi',
  'cina-paesaggi': 'cina-classica',
  'okinawa-estate': 'classic-japan',
  'hokkaido-sci-giappone': 'classic-japan',
  'marocco-itinerario': 'marocco-citta-imperiali',
  'marocco-citta-imperiali': 'marocco-itinerario',
  'thailandia': 'thailandia-nord',
  'thailandia-nord': 'thailandia',
  'londra-cotswolds': 'scozia-highlands-distillerie',
  'scozia-highlands-distillerie': 'irlanda-due-irlande',
  'irlanda-due-irlande': 'scozia-highlands-distillerie',
  'manchester-liverpool-premier-league': 'londra-cotswolds',
  'brighton-seven-sisters': 'londra-cotswolds',
}

const T = {
  it: { titolo: 'Leggi la prossima destinazione', perche: (a: string, b: string) => `Dopo ${a}, la meta che si abbina meglio è ${b}.` },
  en: { titolo: 'Read your next destination', perche: (a: string, b: string) => `After ${a}, the trip that pairs best is ${b}.` },
  es: { titolo: 'Lee el próximo destino', perche: (a: string, b: string) => `Después de ${a}, el destino que mejor combina es ${b}.` },
} satisfies Record<Lingua, unknown>

/** Centro di ogni Paese: media delle coordinate delle sue destinazioni. */
function centri(): Map<string, [number, number]> {
  const somme = new Map<string, { lat: number; lng: number; n: number }>()
  for (const [chiave, [lat, lng]] of Object.entries(coordinateDestinazioni)) {
    const paese = chiave.split('/')[0]
    const s = somme.get(paese) ?? { lat: 0, lng: 0, n: 0 }
    somme.set(paese, { lat: s.lat + lat, lng: s.lng + lng, n: s.n + 1 })
  }
  return new Map([...somme].map(([p, s]) => [p, [s.lat / s.n, s.lng / s.n]]))
}

function distanza([a1, o1]: [number, number], [a2, o2]: [number, number]) {
  const r = Math.PI / 180
  const x = (o2 - o1) * r * Math.cos(((a1 + a2) / 2) * r)
  const y = (a2 - a1) * r
  return Math.hypot(x, y)
}

/** Slug del viaggio consigliato come prossima lettura (anche per non ripeterlo in «Altre guide»). */
export function scegliProssima(slug: string, lingua: Lingua): string | undefined {
  const viaggi = new Set(getAllViaggi(lingua).map((v) => v.slug))
  const scelto = ABBINAMENTI[slug]
  if (scelto && viaggi.has(scelto)) return scelto
  const paese = getTripMeta(slug, lingua)?.paeseSlug
  const c = centri()
  const qui = paese ? c.get(paese) : undefined
  if (!paese || !qui) return undefined
  const candidati = getAllPaesi(lingua)
    .filter((p) => p.slug !== paese && p.tripPrincipaleSlug && viaggi.has(p.tripPrincipaleSlug) && c.has(p.slug))
    .sort((a, b) => distanza(qui, c.get(a.slug)!) - distanza(qui, c.get(b.slug)!))
  return candidati[0]?.tripPrincipaleSlug
}

export function ProssimaDestinazione({ slug, lingua }: { slug: string; lingua: Lingua }) {
  const prossimo = scegliProssima(slug, lingua)
  const viaggio = prossimo ? getAllViaggi(lingua).find((v) => v.slug === prossimo) : undefined
  if (!viaggio) return null
  const t = T[lingua]
  const da = getPaese(getTripMeta(slug, lingua)?.paeseSlug ?? '', lingua)?.nome
  const a = getPaese(getTripMeta(viaggio.slug, lingua)?.paeseSlug ?? '', lingua)?.nome
  return (
    <section className="border-t border-alpine/10 pt-10">
      <TitoloSezione icona={Compass}>{t.titolo}</TitoloSezione>
      {da && a && da !== a && <p className="mt-3 text-stone">{t.perche(da, a)}</p>}
      <div className="mt-6 max-w-md">
        <ProssimaScheda viaggio={{ ...riduciPerScheda(viaggio), copertina: copertina(viaggio.slug, lingua) }} />
      </div>
    </section>
  )
}
