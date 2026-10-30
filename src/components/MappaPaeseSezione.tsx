import fs from 'node:fs'
import path from 'node:path'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { plain } from '@/components/ui/Rich'
import { coordinateDestinazioni, coordinateEsperienze } from '@/content/mappe/coordinate'
import type { Destinazione, Esperienza } from '@/lib/types'
import { MappaPaese, type DatiMappa, type PuntoMappa } from './MappaPaese'

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

/** Prima frase (o ~170 caratteri tagliati su una parola), senza markdown. */
function unaRiga(testo: string, max = 170): string {
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
export function MappaPaeseSezione({
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
      kicker: d.giorniConsigliati ? `Destinazione · ${plain(d.giorniConsigliati)}` : 'Destinazione',
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
      kicker: `Esperienza · ${localitaBreve(e.localita)}`,
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
  const gruppi: PuntoMappa[][] = []
  for (const p of punti) {
    const g = gruppi.find((g) => Math.hypot(g[0].x - p.x, g[0].y - p.y) < 1.5)
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

  const dati: DatiMappa = { viewBox: file.viewBox, w: file.w, h: file.h, path: file.path }
  const nd = punti.filter((p) => p.tipo === 'destinazione').length
  const ne = punti.length - nd

  return (
    <section id="mappa" className="scroll-mt-24 border-t border-alpine/10 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Mappa"
          title="Dove sono le cose"
          description={`${nd === 1 ? 'Una destinazione' : `${nd} destinazioni`}${ne ? ` e ${ne === 1 ? 'un\'esperienza' : `${ne} esperienze`}` : ''} su una mappa vera di ${nomePaese}: tocca un punto per avvicinarti e aprire la scheda.`}
        />
        <MappaPaese nomePaese={nomePaese} mappa={dati} punti={punti} />
      </Container>
    </section>
  )
}
