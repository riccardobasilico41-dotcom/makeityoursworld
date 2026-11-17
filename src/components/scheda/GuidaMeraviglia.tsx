import { Users } from 'lucide-react'
import { TitoloSezione } from '@/components/scheda/Blocchi'
import type { LuogoGuida, Meraviglia } from '@/lib/types'
import type { Lingua } from '@/lib/i18n/config'
import { NOMI_MESI } from '@/lib/viaggi-filtri-stato'

/*
 * Blocchi propri della guida completa delle meraviglie: mappa dei luoghi, tabella dei biglietti,
 * calendario dei 12 mesi con voto e folla. Il resto (luoghi, programmi, zone, gite, FAQ)
 * riusa i blocchi della mini guida delle destinazioni.
 */

const T = {
  it: {
    mappa: 'I luoghi sulla mappa',
    mappaAria: (n: string) => `Mappa schematica dei luoghi di ${n}`,
    mappaNota: 'Posizioni da coordinate reali, su uno schema senza strade: tocca un numero per leggere la scheda del luogo.',
    fuori: 'Fuori mappa, più lontani',
    biglietti: 'Biglietti e prezzi',
    tipo: 'Biglietto',
    prezzo: 'Prezzo',
    include: 'Cosa include',
    dove: 'Dove si compra',
    mesi: 'Quando andare, mese per mese',
    mesiLead: 'Il voto tiene conto di clima, luce e folla. Non è un sito di meteo: serve a scegliere il mese.',
    voto: (v: number) => `Voto ${v} su 5`,
    voti: { 5: 'Ottimo', 4: 'Buono', 3: 'Discreto', 2: 'Poco adatto', 1: 'Sconsigliato' },
    folla: 'Folla',
    livelli: { bassa: 'poca folla', media: 'folla media', alta: 'molta folla' },
    note: 'Da sapere',
  },
  en: {
    mappa: 'The places on the map',
    mappaAria: (n: string) => `Schematic map of the places at ${n}`,
    mappaNota: 'Positions from real coordinates on a plain schematic: tap a number to read about the place.',
    fuori: 'Off the map, further away',
    biglietti: 'Tickets and prices',
    tipo: 'Ticket',
    prezzo: 'Price',
    include: 'What it includes',
    dove: 'Where to buy',
    mesi: 'When to go, month by month',
    mesiLead: 'The rating weighs climate, light and crowds. Not a weather site: it is here to help you pick the month.',
    voto: (v: number) => `Rated ${v} out of 5`,
    voti: { 5: 'Excellent', 4: 'Good', 3: 'Fair', 2: 'Not ideal', 1: 'Not recommended' },
    folla: 'Crowds',
    livelli: { bassa: 'few crowds', media: 'moderate crowds', alta: 'big crowds' },
    note: 'Good to know',
  },
  es: {
    mappa: 'Los lugares en el mapa',
    mappaAria: (n: string) => `Mapa esquemático de los lugares de ${n}`,
    mappaNota: 'Posiciones de coordenadas reales sobre un esquema sin calles: toca un número para leer la ficha del lugar.',
    fuori: 'Fuera del mapa, más lejos',
    biglietti: 'Entradas y precios',
    tipo: 'Entrada',
    prezzo: 'Precio',
    include: 'Qué incluye',
    dove: 'Dónde se compra',
    mesi: 'Cuándo ir, mes a mes',
    mesiLead: 'La nota tiene en cuenta clima, luz y gente. No es una web del tiempo: sirve para elegir el mes.',
    voto: (v: number) => `Nota ${v} sobre 5`,
    voti: { 5: 'Excelente', 4: 'Bueno', 3: 'Aceptable', 2: 'Poco adecuado', 1: 'Desaconsejado' },
    folla: 'Gente',
    livelli: { bassa: 'poca gente', media: 'gente moderada', alta: 'mucha gente' },
    note: 'Conviene saber',
  },
} as const satisfies Record<Lingua, unknown>

/* ------------------------------------------------------------------ mappa */

const mercY = (lat: number) => (Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360)) * 180) / Math.PI

/**
 * Mappa schematica dei luoghi con coordinate: proiezione di Mercatore sul riquadro dei punti,
 * spilli numerati come nella mappa del Paese, che portano alla scheda `#luogo-N` dell'elenco.
 * Niente tessere di terze parti. Con meno di due punti non compare.
 */
export function MappaLuoghi({ luoghi, nome, lingua }: { luoghi?: LuogoGuida[]; nome: string; lingua: Lingua }) {
  const t = T[lingua]
  const conCoord = (luoghi ?? [])
    .map((l, i) => ({ l, n: i + 1 }))
    .filter(({ l }) => typeof l.lat === 'number' && typeof l.lng === 'number')
  if (conCoord.length < 2) return null

  // i luoghi molto lontani dal gruppo (gite, siti fuori città) schiaccerebbero la mappa: restano in un elenco sotto
  const med = (v: number[]) => [...v].sort((a, b) => a - b)[Math.floor(v.length / 2)]
  const cLat = med(conCoord.map(({ l }) => l.lat!)), cLng = med(conCoord.map(({ l }) => l.lng!))
  const dist = conCoord.map(({ l }) => Math.hypot(l.lat! - cLat, (l.lng! - cLng) * Math.cos((cLat * Math.PI) / 180)))
  const soglia = Math.max(med(dist) * 4, 0.01)
  const punti = conCoord.filter((_, i) => dist[i] <= soglia)
  const fuori = conCoord.filter((_, i) => dist[i] > soglia)
  if (punti.length < 2) return null

  const xs = punti.map(({ l }) => l.lng!)
  const ys = punti.map(({ l }) => mercY(l.lat!))
  let [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)]
  // riquadro minimo (circa 400 m) e proporzioni tra 2:1 e 1:1, così pochi punti vicini non si stirano
  const min = 0.004
  const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2
  let wSpan = Math.max(x1 - x0, min), hSpan = Math.max(y1 - y0, min)
  if (hSpan < wSpan / 2) hSpan = wSpan / 2
  if (hSpan > wSpan) wSpan = hSpan
  ;[x0, x1, y0, y1] = [cx - wSpan / 2, cx + wSpan / 2, cy - hSpan / 2, cy + hSpan / 2]

  const W = 800
  const PADX = 150 // spazio per le etichette ai lati
  const PADY = 40
  const s = (W - PADX * 2) / wSpan
  const H = Math.round(hSpan * s + PADY * 2)
  const px = (lng: number) => PADX + (lng - x0) * s
  const py = (lat: number) => PADY + (y1 - mercY(lat)) * s

  // luoghi nello stesso punto (es. Petra by Night e il Siq): il secondo spillo si affianca al primo
  const pos = new Map<number, { x: number; y: number }>()
  for (const { l, n } of punti) {
    let x = px(l.lng!), y = py(l.lat!)
    for (let k = 0; k < 8 && [...pos.values()].some((q) => Math.hypot(q.x - x, q.y - y) < 24); k++) {
      x += 26
      y -= 4
    }
    pos.set(n, { x, y })
  }

  // griglia leggera
  const passo = W / 8
  let griglia = ''
  for (let x = passo; x < W; x += passo) griglia += `M${x.toFixed(0)} 0V${H}`
  for (let y = passo; y < H; y += passo) griglia += `M0 ${y.toFixed(0)}H${W}`

  // etichette senza sovrapposizioni: a destra, poi a sinistra, poi spostate in su o in giù
  type Box = { x0: number; x1: number; y0: number; y1: number }
  const occupate: Box[] = punti.map(({ n }) => ({ x0: pos.get(n)!.x - 14, x1: pos.get(n)!.x + 14, y0: pos.get(n)!.y - 14, y1: pos.get(n)!.y + 14 }))
  const tocca = (b: Box) => occupate.some((o) => b.x0 < o.x1 && b.x1 > o.x0 && b.y0 < o.y1 && b.y1 > o.y0)
  const etichette = new Map<number, { x: number; y: number; ancora: 'start' | 'end' }>()
  for (const { l, n } of [...punti].sort((a, b) => pos.get(a.n)!.y - pos.get(b.n)!.y)) {
    const { x, y } = pos.get(n)!
    const largo = l.nome.length * 8 + 6
    const prove: { x: number; y: number; ancora: 'start' | 'end' }[] = []
    for (const dy of [0, 18, -18, 36, -36, 54, -54]) {
      prove.push({ x: x + 19, y: y + dy, ancora: 'start' }, { x: x - 19, y: y + dy, ancora: 'end' })
    }
    const box = (p: (typeof prove)[number]): Box =>
      p.ancora === 'start' ? { x0: p.x, x1: p.x + largo, y0: p.y - 9, y1: p.y + 9 } : { x0: p.x - largo, x1: p.x, y0: p.y - 9, y1: p.y + 9 }
    const scelta = prove.find((p) => !tocca(box(p)) && box(p).x0 >= 0 && box(p).x1 <= W) ?? prove[0]
    occupate.push(box(scelta))
    etichette.set(n, scelta)
  }

  return (
    <div>
      <TitoloSezione>{t.mappa}</TitoloSezione>
      <div className="mt-6 overflow-hidden border-2 border-ink bg-[#efe7d6]">
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={t.mappaAria(nome)} className="block h-auto max-h-[70vh] w-full">
          <path d={griglia} fill="none" stroke="rgba(31,27,22,0.12)" strokeWidth={1} strokeDasharray="2 5" vectorEffect="non-scaling-stroke" />
          {punti.map(({ l, n }) => {
            const { x, y } = pos.get(n)!
            const e = etichette.get(n)!
            return (
              <a key={n} href={`#luogo-${n}`} className="group" aria-label={`${n}. ${l.nome}`}>
                {e.y !== y && <path d={`M${x} ${y}L${e.x} ${e.y}`} stroke="rgba(31,27,22,0.45)" strokeWidth={1} className="max-sm:hidden" />}
                <circle cx={x} cy={y} r={22} fill="transparent" />
                <circle cx={x + 2} cy={y + 2} r={13} fill="var(--color-ink)" />
                <circle cx={x} cy={y} r={13} fill="var(--color-rosso)" stroke="var(--color-cream)" strokeWidth={2} className="transition-colors group-hover:fill-[var(--color-ink)]" />
                <text x={x} y={y + 4.5} textAnchor="middle" className="pointer-events-none fill-cream font-sans text-[13px] font-bold tabular-nums">
                  {n}
                </text>
                <text
                  x={e.x}
                  y={e.y + 5}
                  textAnchor={e.ancora}
                  className="pointer-events-none fill-ink font-sans text-[14px] font-semibold group-hover:fill-[var(--color-rosso)] max-sm:hidden"
                  style={{ paintOrder: 'stroke', stroke: '#efe7d6', strokeWidth: 5, strokeLinejoin: 'round' }}
                >
                  {l.nome}
                </text>
              </a>
            )
          })}
        </svg>
      </div>
      {fuori.length > 0 && (
        <p className="mt-3 text-sm text-stone">
          <span className="font-semibold text-ink">{t.fuori}:</span>{' '}
          {fuori.map(({ l, n }, i) => (
            <span key={n}>
              {i > 0 && ' · '}
              <a href={`#luogo-${n}`} className="underline decoration-rosso/40 underline-offset-2 hover:text-rosso">
                {n}. {l.nome}
              </a>
            </span>
          ))}
        </p>
      )}
      <p className="mt-2 text-[11px] leading-snug text-stone/85">{t.mappaNota}</p>
    </div>
  )
}

/* ------------------------------------------------------------------ biglietti */

/** Tabella dei biglietti; sotto i 640 px ogni riga diventa una scheda impilata. */
export function TabellaBiglietti({ biglietti, lingua }: { biglietti?: Meraviglia['biglietti']; lingua: Lingua }) {
  if (!biglietti?.length) return null
  const t = T[lingua]
  const conInclude = biglietti.some((b) => b.include)
  const conDove = biglietti.some((b) => b.dove)
  return (
    <div>
      <TitoloSezione>{t.biglietti}</TitoloSezione>
      {/* desktop e tablet: tabella vera */}
      <div className="mt-6 hidden overflow-x-auto border-2 border-ink sm:block">
        <table className="w-full border-collapse text-left text-[0.95rem]">
          <thead className="bg-ink text-cream">
            <tr>
              <th scope="col" className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider">{t.tipo}</th>
              <th scope="col" className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider">{t.prezzo}</th>
              {conInclude && <th scope="col" className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider">{t.include}</th>}
              {conDove && <th scope="col" className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider">{t.dove}</th>}
            </tr>
          </thead>
          <tbody>
            {biglietti.map((b) => (
              <tr key={b.tipo} className="border-t border-ink/15 bg-white even:bg-cream/40">
                <th scope="row" className="px-4 py-3 align-top font-semibold text-alpine">{b.tipo}</th>
                <td className="px-4 py-3 align-top font-semibold text-ink">{b.prezzo}</td>
                {conInclude && <td className="px-4 py-3 align-top leading-relaxed text-stone">{b.include ?? '—'}</td>}
                {conDove && <td className="px-4 py-3 align-top leading-relaxed text-stone">{b.dove ?? '—'}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* telefono: schede impilate */}
      <ul className="mt-6 space-y-3 sm:hidden">
        {biglietti.map((b) => (
          <li key={b.tipo} className="scheda-lista p-4">
            <h3 className="font-semibold text-alpine">{b.tipo}</h3>
            <p className="mt-1 font-display text-lg leading-snug text-ink">{b.prezzo}</p>
            <dl className="mt-2 space-y-1.5 text-sm leading-relaxed">
              {b.include && (
                <div>
                  <dt className="inline font-semibold text-stone">{t.include}: </dt>
                  <dd className="inline text-ink">{b.include}</dd>
                </div>
              )}
              {b.dove && (
                <div>
                  <dt className="inline font-semibold text-stone">{t.dove}: </dt>
                  <dd className="inline text-ink">{b.dove}</dd>
                </div>
              )}
            </dl>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ------------------------------------------------------------------ mesi */

// stessa scala di colori del calendario del Paese (MesiPaese), su cinque gradini
const COLORE: Record<1 | 2 | 3 | 4 | 5, string> = {
  5: 'bg-[#2f6b3f] text-cream border-[#2f6b3f]',
  4: 'bg-[#7fa37a] text-ink border-[#5f8a5a]',
  3: 'bg-[#e9d9a6] text-ink border-[#b9a15a]',
  2: 'bg-[#f6efdc] text-stone border-[#d8c99c]',
  1: 'bg-white text-stone border-ink/20',
}
const OMINI = { bassa: 1, media: 2, alta: 3 } as const

/** Calendario dei 12 mesi della meraviglia: voto (colore) e folla, senza temperature. */
export function MesiMeraviglia({ mesi, lingua }: { mesi?: Meraviglia['mesi']; lingua: Lingua }) {
  if (!mesi || mesi.length !== 12) return null
  const t = T[lingua]
  const nomi = NOMI_MESI[lingua]
  const note = mesi.map((m, i) => (m.nota ? { mese: nomi[i], testo: m.nota } : null)).filter((n) => n !== null)
  return (
    <div>
      <TitoloSezione>{t.mesi}</TitoloSezione>
      <p className="mt-3 max-w-3xl text-base leading-relaxed text-stone">{t.mesiLead}</p>
      <ol className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12">
        {mesi.map((m, i) => (
          <li key={i} className={`flex flex-col border-2 p-3 ${COLORE[m.voto]}`} title={m.nota}>
            <span className="text-xs font-bold uppercase tracking-[0.14em]">{nomi[i].slice(0, 3)}</span>
            <span className="mt-1 text-[0.62rem] font-semibold uppercase leading-tight tracking-normal opacity-90 [overflow-wrap:anywhere]">
              {t.voti[m.voto]}
            </span>
            <span className="mt-3 font-display text-lg leading-none tabular-nums" aria-label={t.voto(m.voto)}>
              {m.voto}/5
            </span>
            {m.folla && (
              <span className="mt-2 flex gap-0.5" aria-label={`${t.folla}: ${t.livelli[m.folla]}`} title={t.livelli[m.folla]}>
                {Array.from({ length: 3 }, (_, k) => (
                  <Users key={k} size={12} aria-hidden className={k < OMINI[m.folla!] ? '' : 'opacity-25'} />
                ))}
              </span>
            )}
          </li>
        ))}
      </ol>
      <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-stone">
        {([5, 4, 3, 2, 1] as const).map((v) => (
          <span key={v} className="inline-flex items-center gap-2">
            <span aria-hidden className={`inline-block size-3 border ${COLORE[v]}`} />
            {t.voti[v]}
          </span>
        ))}
        {mesi.some((m) => m.folla) && (
          <span className="inline-flex items-center gap-1">
            <Users size={12} aria-hidden /> = {t.livelli.bassa} · 3 = {t.livelli.alta}
          </span>
        )}
      </p>
      {note.length > 0 && (
        <div className="mt-6 max-w-3xl">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-stone">{t.note}</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-stone">
            {note.map((n) => (
              <li key={n.mese}>
                <strong className="font-semibold text-ink">{n.mese.charAt(0).toUpperCase() + n.mese.slice(1)}:</strong> {n.testo}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
