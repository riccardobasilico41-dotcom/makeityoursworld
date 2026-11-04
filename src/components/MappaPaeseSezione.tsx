import fs from 'node:fs'
import path from 'node:path'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { plain } from '@/components/ui/Rich'
import { coordinateDestinazioni, coordinateEsperienze } from '@/content/mappe/coordinate'
import type { Destinazione, Esperienza } from '@/lib/types'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'
import { MappaPaese, type DatiMappa, type PuntoMappa } from './MappaPaese'
import { MappaAtlante, type DatiAtlante, type TappaPercorso } from './MappaAtlante'
import { getPaese, getTripMeta } from '@/lib/geo'

/**
 * Mappa «da atlante» (rilievo e tinta, vicini, fiumi, percorso del viaggio): per ogni Paese che ha
 * src/content/mappe/<paese>-atlante.json (tools/mappe/atlante.mjs); gli altri restano con MappaPaese.
 */
function leggiAtlante(paeseSlug: string): DatiAtlante | null {
  if (!/^[a-z-]+$/.test(paeseSlug)) return null
  const file = path.join(process.cwd(), 'src/content/mappe', `${paeseSlug}-atlante.json`)
  if (!fs.existsSync(file)) return null
  return JSON.parse(fs.readFileSync(file, 'utf8')) as DatiAtlante
}

type FileMappa = {
  viewBox: string
  w: number
  h: number
  path: string
  proiezione: { tipo: 'mercatore'; lng0: number; y0: number; s: number; ox: number; oy: number }
}

function leggiMappa(paeseSlug: string): FileMappa | null {
  if (!/^[a-z-]+$/.test(paeseSlug)) return null
  const file = path.join(process.cwd(), 'src/content/mappe', `${paeseSlug}.json`)
  if (!fs.existsSync(file)) return null
  return JSON.parse(fs.readFileSync(file, 'utf8')) as FileMappa
}

const mercY = (lat: number) => (Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360)) * 180) / Math.PI
const mercLat = (y: number) => (Math.atan(Math.exp((y * Math.PI) / 180)) * 360) / Math.PI - 90

/** Meridiani e paralleli (in Mercatore sono rette) con un passo che ne mette 4–8 sulla mappa. */
function graticola(file: FileMappa): string {
  const { lng0, y0, s, ox, oy } = file.proiezione
  const lngA = lng0 - ox / s, lngB = lng0 + (file.w - ox) / s
  const latA = mercLat(y0 - (file.h - oy) / s), latB = mercLat(y0 + oy / s)
  const passo = (span: number) => [0.5, 1, 2, 5, 10, 15, 30].find((p) => span / p <= 8) ?? 30
  const p = passo(Math.max(lngB - lngA, latB - latA))
  let d = ''
  for (let lng = Math.ceil(lngA / p) * p; lng <= lngB; lng += p) {
    const x = (ox + (lng - lng0) * s).toFixed(1)
    d += `M${x} 0V${file.h}`
  }
  for (let lat = Math.ceil(latA / p) * p; lat <= latB; lat += p) {
    const y = (oy + (y0 - mercY(lat)) * s).toFixed(1)
    d += `M0 ${y}H${file.w}`
  }
  return d
}

const T = {
  it: {
    destinazione: 'Destinazione',
    esperienza: 'Esperienza',
    mappa: 'Mappa',
    titolo: 'Dove sono le cose',
    descrizione: (nd: number, ne: number, nome: string) =>
      `${nd === 1 ? 'Una destinazione' : `${nd} destinazioni`}${ne ? ` e ${ne === 1 ? "un'esperienza" : `${ne} esperienze`}` : ''} su una mappa vera di ${nome}: tocca un punto per avvicinarti e aprire la scheda.`,
  },
  en: {
    destinazione: 'Destination',
    esperienza: 'Experience',
    mappa: 'Map',
    titolo: 'Where things are',
    descrizione: (nd: number, ne: number, nome: string) =>
      `${nd === 1 ? 'One destination' : `${nd} destinations`}${ne ? ` and ${ne === 1 ? 'one experience' : `${ne} experiences`}` : ''} on a real map of ${nome}: tap a point to zoom in and open its page.`,
  },
  es: {
    destinazione: 'Destino',
    esperienza: 'Experiencia',
    mappa: 'Mapa',
    titolo: 'Dónde está cada cosa',
    descrizione: (nd: number, ne: number, nome: string) =>
      `${nd === 1 ? 'Un destino' : `${nd} destinos`}${ne ? ` y ${ne === 1 ? 'una experiencia' : `${ne} experiencias`}` : ''} en un mapa real de ${nome}: toca un punto para acercarte y abrir su ficha.`,
  },
} satisfies Record<Lingua, Record<string, string | ((nd: number, ne: number, nome: string) => string)>>

/** Prima frase (o ~170 caratteri tagliati su una parola), senza markdown. */
export function unaRiga(testo: string, max = 170): string {
  const t = plain(testo).replace(/\s+/g, ' ').trim()
  const frase = t.match(/^.{20,}?[.!?](?=\s|$)/)?.[0]
  if (frase && frase.length <= max + 30) return frase
  if (t.length <= max) return t
  return t.slice(0, t.lastIndexOf(' ', max)).replace(/[,;:\s—–-]+$/, '') + '…'
}

const localitaBreve = (s: string) => plain(s).split(/\s[—–]\s|;|\(/)[0].trim()

/**
 * Sezione «Dove sono le cose» della pagina Paese: carica il contorno del Paese
 * (src/content/mappe/<paese>.json, da Natural Earth) e le coordinate OSM, proietta
 * i punti sul server e passa al client solo dati semplici. Se meno di due punti
 * hanno coordinate, la sezione non compare.
 */
export async function MappaPaeseSezione({
  paeseSlug,
  nomePaese,
  destinazioni,
  esperienze,
}: {
  paeseSlug: string
  nomePaese: string
  destinazioni: Destinazione[]
  esperienze: Esperienza[]
}) {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const file = leggiMappa(paeseSlug)
  if (!file) return null
  const { lng0, y0, s, ox, oy } = file.proiezione
  const proietta = ([lat, lng]: [number, number]) => [ox + (lng - lng0) * s, oy + (y0 - mercY(lat)) * s] as const

  const punti: PuntoMappa[] = []
  for (const d of destinazioni) {
    const c = coordinateDestinazioni[`${paeseSlug}/${d.slug}`]
    if (!c) continue
    const [x, y] = proietta(c)
    punti.push({
      id: `d:${d.slug}`,
      tipo: 'destinazione',
      nome: d.nome,
      kicker: d.giorniConsigliati ? `${t.destinazione} · ${plain(d.giorniConsigliati)}` : t.destinazione,
      testo: unaRiga(d.introduzione),
      href: `/destinazioni/${paeseSlug}/${d.slug}`,
      x,
      y,
      dx: 0,
      dy: 0,
      legati: [],
    })
  }
  for (const e of esperienze) {
    const c = coordinateEsperienze[`${paeseSlug}/${e.slug}`]
    if (!c) continue
    const [x, y] = proietta(c)
    punti.push({
      id: `e:${e.slug}`,
      tipo: 'esperienza',
      nome: e.nome,
      kicker: `${t.esperienza} · ${localitaBreve(e.localita)}`,
      testo: unaRiga(e.cosE),
      href: `/esperienze/${paeseSlug}/${e.slug}`,
      x,
      y,
      dx: 0,
      dy: 0,
      legati: [],
    })
  }
  if (punti.length < 2) return null

  // collegamenti destinazione ↔ esperienze che si fanno lì
  for (const e of esperienze) {
    const pe = punti.find((p) => p.id === `e:${e.slug}`)
    const pd = punti.find((p) => p.id === `d:${e.destinazioneSlug}`)
    if (pe && pd) {
      pd.legati.push(pe.id)
      pe.legati.push(pd.id)
    }
  }

  // punti nello stesso posto (es. esperienza = sua destinazione): il primo resta
  // al centro, gli altri su un anello di raggio costante in pixel schermo
  // (1,5 unità, o 150 m veri se di più: sulle mappe di città è il caso di Times Square e del musical di Broadway)
  const latC = mercLat(file.proiezione.y0 - (file.h / 2 - file.proiezione.oy) / file.proiezione.s)
  const sogliaLuogo = Math.max(1.5, 0.15 / ((111.32 * Math.cos((latC * Math.PI) / 180)) / file.proiezione.s))
  const gruppi: PuntoMappa[][] = []
  for (const p of punti) {
    const g = gruppi.find((g) => Math.hypot(g[0].x - p.x, g[0].y - p.y) < sogliaLuogo)
    if (g) g.push(p)
    else gruppi.push([p])
  }
  for (const g of gruppi) {
    g.slice(1).forEach((p, i, resto) => {
      // sul lato sinistro (da sotto a sopra): a destra c'è l'etichetta della destinazione
      const a = Math.PI / 2 + ((i + 1) * Math.PI) / (resto.length + 1)
      p.dx = Math.round(Math.cos(a) * 15)
      p.dy = Math.round(Math.sin(a) * 15)
    })
  }

  const dati: DatiMappa = { viewBox: file.viewBox, w: file.w, h: file.h, path: file.path, graticola: graticola(file) }
  const nd = punti.filter((p) => p.tipo === 'destinazione').length
  const ne = punti.length - nd

  const atlante = leggiAtlante(paeseSlug)
  // percorso vero del viaggio principale: le destinazioni dei giorni in ordine (con i rientri a Lima),
  // senza ripetere giorni consecutivi nello stesso posto; le tappe sono numerate alla prima comparsa
  const tappe: TappaPercorso[] = []
  const percorso: { x: number; y: number }[] = []
  const viaggio = atlante ? getPaese(paeseSlug, lingua)?.tripPrincipaleSlug : undefined
  if (atlante && viaggio) {
    const meta = getTripMeta(viaggio, lingua)
    const sequenza = (meta?.giorni ?? []).map((g) => g.destinazioneSlug).filter((s): s is string => !!s)
    const slugs = sequenza.length > 1 ? sequenza : (meta?.tappeMappa ?? []).map((t) => t.destinazioneSlug).filter((s): s is string => !!s)
    let ultimo = ''
    for (const slug of slugs) {
      const p = punti.find((q) => q.id === `d:${slug}`)
      if (!p || p.id === ultimo) continue
      ultimo = p.id
      percorso.push({ x: p.x, y: p.y })
      if (!tappe.some((q) => q.id === p.id)) tappe.push({ id: p.id, n: tappe.length + 1, x: p.x, y: p.y })
    }
  }

  return (
    <section id="mappa" className="scroll-mt-24 border-t border-alpine/10 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={t.mappa}
          title={t.titolo}
          description={t.descrizione(nd, ne, nomePaese)}
        />
        {atlante ? (
          <MappaAtlante
            nomePaese={nomePaese}
            mappa={dati}
            atlante={atlante}
            punti={punti}
            tappe={tappe}
            percorso={percorso}
            sogliaLuogo={sogliaLuogo}
            proiezione={{ y0: file.proiezione.y0, s: file.proiezione.s, oy: file.proiezione.oy }}
          />
        ) : (
          <MappaPaese nomePaese={nomePaese} mappa={dati} punti={punti} />
        )}
      </Container>
    </section>
  )
}
