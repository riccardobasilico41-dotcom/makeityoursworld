import slugEn from '@/content/i18n/en/slug.json'
import slugEs from '@/content/i18n/es/slug.json'
import { LINGUE, LINGUA_PREDEFINITA, PREFISSO, SEGMENTI, type Lingua } from './config'
import { AREE } from '../aree'

/** Slug delle macro-regioni (/aree/<slug>), canonico → tradotto e ritorno. */
const AREA_VERSO: Record<'en' | 'es', Record<string, string>> = {
  en: Object.fromEntries(AREE.map((a) => [a.slug, a.slugTradotto.en])),
  es: Object.fromEntries(AREE.map((a) => [a.slug, a.slugTradotto.es])),
}
const AREA_INDIETRO: Record<'en' | 'es', Record<string, string>> = {
  en: Object.fromEntries(AREE.map((a) => [a.slugTradotto.en, a.slug])),
  es: Object.fromEntries(AREE.map((a) => [a.slugTradotto.es, a.slug])),
}

/*
 * Traduzione dei percorsi tra la forma canonica (italiana, senza prefisso: quella scritta
 * nel codice) e l'indirizzo pubblico di ogni lingua. Usato lato server e lato client
 * (Link, selettore della lingua), e dal proxy al contrario. Uno slug senza traduzione
 * resta quello italiano: la pagina funziona lo stesso.
 */

type MappaSlug = Record<'paesi' | 'destinazioni' | 'esperienze' | 'viaggi' | 'meraviglie' | 'attrezzatura', Record<string, string>>

const SLUG: Record<Lingua, MappaSlug | null> = { it: null, en: slugEn as MappaSlug, es: slugEs as MappaSlug }

function inverti(m: Record<string, string>): Record<string, string> {
  const r: Record<string, string> = {}
  for (const [k, v] of Object.entries(m)) r[v] = k
  return r
}

/** Mappe al contrario (pubblico → canonico), costruite una volta sola. */
const INVERSE: Partial<Record<Lingua, { segmenti: Record<string, string>; slug: MappaSlug }>> = {}
function inverse(l: Lingua) {
  if (!INVERSE[l]) {
    const s = SLUG[l]
    // per destinazioni ed esperienze la chiave è «paese/slug»: al contrario serve «paeseTradotto/slugTradotto»
    const conPaese = (m: Record<string, string>) => {
      const r: Record<string, string> = {}
      for (const [k, v] of Object.entries(m)) {
        const [p] = k.split('/')
        r[`${s?.paesi[p] ?? p}/${v}`] = k
      }
      return r
    }
    INVERSE[l] = {
      segmenti: inverti(SEGMENTI[l]),
      slug: s
        ? {
            paesi: inverti(s.paesi),
            destinazioni: conPaese(s.destinazioni),
            esperienze: conPaese(s.esperienze),
            viaggi: inverti(s.viaggi),
            meraviglie: inverti(s.meraviglie),
            attrezzatura: inverti(s.attrezzatura),
          }
        : { paesi: {}, destinazioni: {}, esperienze: {}, viaggi: {}, meraviglie: {}, attrezzatura: {} },
    }
  }
  return INVERSE[l]!
}

function dividi(href: string): [string, string] {
  const i = href.search(/[?#]/)
  return i === -1 ? [href, ''] : [href.slice(0, i), href.slice(i)]
}

/** Traduce gli slug di un percorso canonico (già diviso in segmenti) per la lingua. */
function slugVerso(seg: string[], m: MappaSlug): string[] {
  const [a, b, c, ...resto] = seg
  const t = (x: string | undefined, mappa: Record<string, string>) => (x === undefined ? undefined : (mappa[x] ?? x))
  let out: (string | undefined)[]
  switch (a) {
    case 'viaggi':
      out = [a, t(b, m.viaggi), c]
      break
    case 'destinazioni':
      out = [a, t(b, m.paesi), c && c !== 'opengraph-image' ? (m.destinazioni[`${b}/${c}`] ?? c) : c]
      break
    case 'esperienze':
      out = [a, t(b, m.paesi), c ? (m.esperienze[`${b}/${c}`] ?? c) : c]
      break
    case 'meraviglie':
      out = [a, t(b, m.meraviglie), c]
      break
    case 'attrezzatura':
      out = [a, t(b, m.attrezzatura), c]
      break
    default:
      out = [a, b, c]
  }
  return [...out.filter((x): x is string => x !== undefined), ...resto]
}

/**
 * Percorso canonico → indirizzo pubblico nella lingua.
 * `/viaggi/giappone-itinerario` → en `/trips/japan-itinerary`, it `/it/viaggi/giappone-itinerario`.
 * Lascia stare link esterni, ancore, mailto e file.
 */
export function localizza(href: string, lingua: Lingua): string {
  if (!href.startsWith('/') || href.startsWith('//')) return href
  const [percorso, coda] = dividi(href)
  if (/\.[a-z0-9]{2,5}$/i.test(percorso) && !percorso.endsWith('.json')) return href // /images/x.webp, /guide-pdf/x.pdf
  const seg = percorso.split('/').filter(Boolean)
  const m = SLUG[lingua]
  const tradotti = m ? slugVerso(seg, m) : seg
  if (lingua !== 'it' && tradotti[0] === 'aree' && tradotti[1]) tradotti[1] = AREA_VERSO[lingua][tradotti[1]] ?? tradotti[1]
  if (tradotti.length) tradotti[0] = SEGMENTI[lingua][tradotti[0]] ?? tradotti[0]
  const corpo = tradotti.length ? '/' + tradotti.join('/') : ''
  return (PREFISSO[lingua] + corpo || '/') + coda
}

/** Indirizzo pubblico → lingua e percorso canonico (per il proxy e il selettore della lingua). */
export function canonico(pubblico: string): { lingua: Lingua; percorso: string } {
  const [percorso, coda] = dividi(pubblico)
  let seg = percorso.split('/').filter(Boolean)
  let lingua: Lingua = LINGUA_PREDEFINITA
  if (seg[0] && LINGUE.includes(seg[0] as Lingua) && seg[0] !== LINGUA_PREDEFINITA) {
    lingua = seg[0] as Lingua
    seg = seg.slice(1)
  }
  if (lingua !== 'it' && seg.length) {
    const inv = inverse(lingua)
    seg[0] = inv.segmenti[seg[0]] ?? seg[0]
    const [a, b, c] = seg
    const s = inv.slug
    if (a === 'aree' && b) seg[1] = AREA_INDIETRO[lingua][b] ?? b
    if (a === 'viaggi' && b) seg[1] = s.viaggi[b] ?? b
    if (a === 'meraviglie' && b) seg[1] = s.meraviglie[b] ?? b
    if (a === 'attrezzatura' && b) seg[1] = s.attrezzatura[b] ?? b
    if ((a === 'destinazioni' || a === 'esperienze') && b) {
      const area = a === 'destinazioni' ? s.destinazioni : s.esperienze
      const chiave = c && c !== 'opengraph-image' ? area[`${b}/${c}`] : undefined
      if (chiave) {
        const [p, x] = chiave.split('/')
        seg[1] = p
        seg[2] = x
      } else seg[1] = s.paesi[b] ?? b
    }
  }
  return { lingua, percorso: '/' + seg.join('/') + coda }
}

/** Lo stesso percorso canonico in tutte le lingue: per hreflang e selettore. */
export function alternative(canon: string): Record<Lingua, string> {
  return Object.fromEntries(LINGUE.map((l) => [l, localizza(canon, l)])) as Record<Lingua, string>
}
