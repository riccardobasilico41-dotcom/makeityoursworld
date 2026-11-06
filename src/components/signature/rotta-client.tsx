'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { MappaAtlante } from '@/components/MappaAtlante'
import { useLingua } from '@/lib/i18n/LinguaProvider'
import { localizza } from '@/lib/i18n/percorsi'
import type { Lingua } from '@/lib/i18n/config'
import type { DatiRotta } from '@/lib/mappa-rotta'

const T = {
  it: {
    caricamento: 'Mappa della rotta in caricamento',
    mappa: (nome: string) => `Mappa della rotta in ${nome}`,
    oggi: (nomi: string) => `, evidenziata la tappa del giorno: ${nomi}`,
  },
  en: {
    caricamento: 'Loading the route map',
    mappa: (nome: string) => `Map of the route in ${nome}`,
    oggi: (nomi: string) => `, today's stop highlighted: ${nomi}`,
  },
  es: {
    caricamento: 'Cargando el mapa de la ruta',
    mappa: (nome: string) => `Mapa de la ruta en ${nome}`,
    oggi: (nomi: string) => `, destacada la parada del día: ${nomi}`,
  },
} satisfies Record<Lingua, { caricamento: string; mappa: (s: string) => string; oggi: (s: string) => string }>

const MARE = '#dce8ea'
const VICINO = '#ebe4d3'
const TERRA = '#e3d6bd'
const BORDO_VICINO = '#9e9789'
const TINTA_PIATTA = '#d3ddb4'

/** Un solo download per viaggio e lingua, condiviso da «La rotta», dal riquadro del giorno e dalla barra mobile. */
const cache = new Map<string, Promise<DatiRotta | null>>()
function caricaRotta(slug: string, lingua: Lingua): Promise<DatiRotta | null> {
  const url = localizza(`/rotte/${slug}`, lingua)
  let p = cache.get(url)
  if (!p) {
    p = fetch(url)
      .then((r) => (r.ok ? (r.json() as Promise<DatiRotta | null>) : null))
      .catch(() => null)
    cache.set(url, p)
  }
  return p
}

/** Scarica i dati quando l'elemento arriva a `margine` px dallo schermo (o subito, se `subito`). */
function useDatiRotta(slug: string, margine: string, subito = false) {
  const lingua = useLingua()
  const ref = useRef<HTMLDivElement>(null)
  const [dati, setDati] = useState<DatiRotta | null>(null)
  useEffect(() => {
    let annullato = false
    const carica = () => caricaRotta(slug, lingua).then((d) => !annullato && setDati(d))
    const el = ref.current
    if (subito || !el || !('IntersectionObserver' in window)) {
      carica()
      return () => {
        annullato = true
      }
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        carica()
      },
      { rootMargin: margine },
    )
    io.observe(el)
    return () => {
      annullato = true
      io.disconnect()
    }
  }, [slug, lingua, margine, subito])
  return { ref, dati }
}

/**
 * Sezione «La rotta» della pagina viaggio: la stessa mappa da atlante delle pagine Paese,
 * con le sole tappe del viaggio. Riserva lo spazio (stesso rapporto della mappa) e scarica i
 * dati quando si avvicina allo schermo.
 */
export function MappaRottaDifferita({ slug, w, h }: { slug: string; w: number; h: number }) {
  const lingua = useLingua()
  const { ref, dati } = useDatiRotta(slug, '600px 0px')
  if (dati)
    return (
      <MappaAtlante
        nomePaese={dati.nomePaese}
        mappa={dati.mappa}
        atlante={dati.atlante}
        punti={dati.punti}
        tappe={dati.tappe}
        percorso={dati.percorso}
        sogliaLuogo={dati.sogliaLuogo}
        proiezione={dati.proiezione}
        filtri={false}
        elenco={false}
      />
    )
  return (
    <div ref={ref} className="grid items-start gap-6 lg:grid-cols-[7fr_5fr] lg:gap-10">
      <div
        className="max-h-[78vh] w-full animate-pulse border-2 border-ink shadow-[5px_5px_0_var(--color-ink)] motion-reduce:animate-none"
        style={{ aspectRatio: `${w} / ${h}`, backgroundColor: MARE }}
        role="status"
      >
        <span className="sr-only">{T[lingua].caricamento}</span>
      </div>
    </div>
  )
}

/**
 * Mappa compatta della rotta (riquadro «Tappa del giorno» e pannello «Mappa» della barra
 * mobile): contorno e rilievo veri, ritagliati attorno alle tappe, percorso tratteggiato e la
 * tappa del giorno in rosso con il suo numero. Niente interazione: la mappa completa è in «La rotta».
 */
export function MiniMappaRotta({
  slug,
  evidenzia,
  className = '',
  subito = false,
}: {
  slug: string
  /** indici in `tappeMappa` delle tappe del giorno */
  evidenzia: number[]
  className?: string
  /** scarica subito (pannello appena aperto) invece di aspettare che entri in vista */
  subito?: boolean
}) {
  const lingua = useLingua()
  const t = T[lingua]
  const uid = useId().replace(/:/g, '')
  const { ref, dati } = useDatiRotta(slug, '400px 0px', subito)

  if (!dati)
    return (
      <div ref={ref} className={`w-full animate-pulse border-2 border-ink motion-reduce:animate-none ${className}`} style={{ aspectRatio: '4 / 3', backgroundColor: MARE }} role="status">
        <span className="sr-only">{t.caricamento}</span>
      </div>
    )

  const { mappa, atlante, punti, percorso, riquadro } = dati
  const idEvidenziati = new Set(evidenzia.map((i) => dati.puntoDiTappa[i]).filter(Boolean))
  const nTappa = new Map(dati.tappe.map((q) => [q.id, q.n]))

  // riquadro delle tappe con un margine, allargato a 4:3
  let [x, y, w, h] = riquadro
  const m = Math.max(w, h) * 0.16 + mappa.w * 0.03
  x -= m; y -= m; w += 2 * m; h += 2 * m
  if (w / h < 4 / 3) { const k = (h * (4 / 3) - w) / 2; x -= k; w += 2 * k }
  else { const k = (w * (3 / 4) - h) / 2; y -= k; h += 2 * k }
  const k = w / 260 // unità mappa per pixel, a ~260 px di larghezza
  const P = (s: string) => `${uid}-${s}`
  const rilievi = atlante.rilievi ?? (atlante.rilievo ? [{ ...atlante.rilievo, clip: mappa.path }] : [{ x: 0, y: 0, w: 0, h: 0, clip: mappa.path }])
  const nomi = punti.filter((p) => idEvidenziati.has(p.id)).map((p) => p.nome)
  const linea = percorso.map((p, i) => `${i ? 'L' : 'M'}${p.x} ${p.y}`).join('')

  return (
    <div ref={ref} className={`w-full border-2 border-ink ${className}`} style={{ backgroundColor: MARE }}>
      <svg
        viewBox={`${x.toFixed(1)} ${y.toFixed(1)} ${w.toFixed(1)} ${h.toFixed(1)}`}
        className="block aspect-[4/3] w-full"
        role="img"
        aria-label={t.mappa(dati.nomePaese) + (nomi.length ? t.oggi(nomi.join(', ')) : '')}
      >
        <defs>
          {rilievi.map((r, i) => (
            <clipPath key={i} id={P(`r${i}`)}>
              <path d={r.clip} />
            </clipPath>
          ))}
        </defs>
        <rect x={x} y={y} width={w} height={h} fill={MARE} />
        {atlante.terra && <path d={atlante.terra} fill={TERRA} stroke={BORDO_VICINO} strokeWidth={0.6} vectorEffect="non-scaling-stroke" />}
        {atlante.vicini.map((v) => (
          <path key={v.id} d={v.path} fill={VICINO} stroke={BORDO_VICINO} strokeWidth={0.6} vectorEffect="non-scaling-stroke" />
        ))}
        <path d={mappa.path} fill="var(--color-cream)" />
        {rilievi.map((r, i) =>
          'src' in r && r.src ? (
            <image key={i} href={r.src} x={r.x} y={r.y} width={r.w} height={r.h} preserveAspectRatio="none" clipPath={`url(#${P(`r${i}`)})`} />
          ) : (
            <path key={i} d={r.clip} fill={TINTA_PIATTA} opacity={0.9} />
          ),
        )}
        <path d={mappa.path} fill="none" stroke="var(--color-ink)" strokeWidth={1} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        {linea && (
          <path d={linea} fill="none" stroke="var(--color-rosso)" strokeWidth={1.8} strokeDasharray="5 3" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        )}
        {punti.map((p) =>
          idEvidenziati.has(p.id) ? null : (
            <circle key={p.id} cx={p.x} cy={p.y} r={3.2 * k} fill="var(--color-cream)" stroke="var(--color-ink)" strokeWidth={1.4} vectorEffect="non-scaling-stroke" />
          ),
        )}
        {punti
          .filter((p) => idEvidenziati.has(p.id))
          .map((p) => (
            <g key={p.id}>
              <circle cx={p.x} cy={p.y} r={14 * k} fill="none" stroke="var(--color-rosso)" strokeWidth={2} vectorEffect="non-scaling-stroke" />
              <circle cx={p.x} cy={p.y} r={8.5 * k} fill="var(--color-rosso)" stroke="var(--color-ink)" strokeWidth={1.4} vectorEffect="non-scaling-stroke" />
              <text x={p.x} y={p.y} dy="0.35em" textAnchor="middle" fontSize={10 * k} fontWeight={700} fill="var(--color-cream)" aria-hidden>
                {nTappa.get(p.id)}
              </text>
            </g>
          ))}
      </svg>
    </div>
  )
}
