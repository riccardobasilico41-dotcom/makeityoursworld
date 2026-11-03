'use client'

import { useMemo, useRef, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { TripCard, type ViaggioScheda } from './TripCard'
import { RevealGroup, RevealItem } from './Reveal'
import { getContinente, raggruppaPerContinente, slugify } from '@/lib/utils'

// Tipologia/attività: derivati da categoria e tag già presenti in ogni file
// .md (nessun dato nuovo da mantenere), scelti tra quelli che ricorrono
// davvero nell'archivio — niente voci "aspirazionali" senza viaggi dietro.
const STILI_NOTI = [
  'mare',
  'montagna',
  'trekking',
  'deserto',
  'sci',
  'vulcani',
  'isole',
  'vino',
  'gastronomia',
  'archeologia',
  'giungla',
  'aurora boreale',
]

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function stiliDelViaggio(viaggio: ViaggioScheda): string[] {
  const testo = [...viaggio.categorie, ...viaggio.tags].join(' ').toLowerCase()
  // Confini di parola: un match per substring semplice ("sci" dentro
  // "rinascimento") è un falso positivo reale, trovato testando il filtro —
  // con parole corte come "sci" o "vino" il rischio non è teorico.
  return STILI_NOTI.filter((stile) => new RegExp(`\\b${escapeRegExp(stile)}\\b`, 'i').test(testo))
}

type FasciaDurata = {
  id: string
  etichetta: string
  min: number
  max: number
}

// Bucket ampi (non richiedono un numero di giorni esatto, solo l'ordine di
// grandezza): coprono l'intervallo reale dei viaggi in archivio, da 2 a 18
// giorni.
const FASCE_DURATA: FasciaDurata[] = [
  { id: 'brevi', etichetta: 'Fino a 4 giorni', min: 0, max: 4 },
  { id: '1-settimana', etichetta: '1 settimana (5-9 giorni)', min: 5, max: 9 },
  { id: '2-settimane', etichetta: '2 settimane (10-15 giorni)', min: 10, max: 15 },
  { id: '3-settimane', etichetta: '3+ settimane (16+ giorni)', min: 16, max: Infinity },
]

/** Legge il numero di giorni dall'inizio del campo "Durata" del markdown (es. "12 giorni, 11 notti" → 12). */
function giorniDelViaggio(viaggio: ViaggioScheda): number | null {
  const match = viaggio.durata.match(/^(\d+)/)
  return match ? Number(match[1]) : null
}

/**
 * Filtri funzionanti per continente, tipologia/attività e durata (derivati
 * da campi già presenti in ogni file .md, nessun dato nuovo da mantenere),
 * con i risultati sempre divisi per macro-regione.
 */
export function TripFilters({ viaggi }: { viaggi: ViaggioScheda[] }) {
  const [continente, setContinente] = useState<string>('tutti')
  const [paese, setPaese] = useState<string>('tutti')
  const [stiliAttivi, setStiliAttivi] = useState<string[]>([])
  const [durata, setDurata] = useState<string>('tutte')
  const [filtriAperti, setFiltriAperti] = useState(false)
  const inizio = useRef<HTMLDivElement>(null)

  const continenti = useMemo(
    () => Array.from(new Set(viaggi.map((v) => getContinente(v.categorie)))).sort(),
    [viaggi]
  )

  const paesi = useMemo(
    () => Array.from(new Set(viaggi.map((v) => v.categorie[1]).filter(Boolean))).sort(),
    [viaggi]
  )

  const viaggiArricchiti = useMemo(
    () => viaggi.map((v) => ({ viaggio: v, stili: stiliDelViaggio(v), giorni: giorniDelViaggio(v) })),
    [viaggi]
  )

  const fasciaDurataAttiva = FASCE_DURATA.find((f) => f.id === durata)

  const filtrati = viaggiArricchiti.filter(({ viaggio, stili, giorni }) => {
    const passaContinente = continente === 'tutti' || getContinente(viaggio.categorie) === continente
    const passaPaese = paese === 'tutti' || viaggio.categorie[1] === paese
    const passaStile = stiliAttivi.length === 0 || stiliAttivi.every((s) => stili.includes(s))
    const passaDurata =
      !fasciaDurataAttiva || (giorni !== null && giorni >= fasciaDurataAttiva.min && giorni <= fasciaDurataAttiva.max)
    return passaContinente && passaPaese && passaStile && passaDurata
  })

  function toggleStile(stile: string) {
    setStiliAttivi((prev) => (prev.includes(stile) ? prev.filter((s) => s !== stile) : [...prev, stile]))
  }

  const filtriAttivi =
    (continente !== 'tutti' ? 1 : 0) + (paese !== 'tutti' ? 1 : 0) + (durata !== 'tutte' ? 1 : 0) + stiliAttivi.length

  const gruppi = raggruppaPerContinente(filtrati, ({ viaggio }) => getContinente(viaggio.categorie))

  return (
    <div ref={inizio} className="scroll-mt-4">
      <div id="filtri-viaggi" className={`${filtriAperti ? 'mb-4 block' : 'hidden'} md:mb-0 md:block`}>
      <div className="flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-stone">
          Continente
          <select
            value={continente}
            onChange={(e) => setContinente(e.target.value)}
            className="rounded-none border border-alpine/20 bg-white px-3 py-1.5 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine"
          >
            <option value="tutti">Tutti</option>
            {continenti.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-2 text-sm text-stone">
          Paese
          <select
            value={paese}
            onChange={(e) => setPaese(e.target.value)}
            className="rounded-none border border-alpine/20 bg-white px-3 py-1.5 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine"
          >
            <option value="tutti">Tutti</option>
            {paesi.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-2 text-sm text-stone">
          Durata
          <select
            value={durata}
            onChange={(e) => setDurata(e.target.value)}
            className="rounded-none border border-alpine/20 bg-white px-3 py-1.5 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine"
          >
            <option value="tutte">Tutte</option>
            {FASCE_DURATA.map((f) => (
              <option key={f.id} value={f.id}>
                {f.etichetta}
              </option>
            ))}
          </select>
        </label>

        {(continente !== 'tutti' || paese !== 'tutti' || stiliAttivi.length > 0 || durata !== 'tutte') && (
          <button
            type="button"
            onClick={() => {
              setContinente('tutti')
              setPaese('tutti')
              setStiliAttivi([])
              setDurata('tutte')
            }}
            className="text-sm font-medium text-rosso hover:text-rosso-dark"
          >
            Azzera filtri
          </button>
        )}
      </div>

      <div className="mt-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-stone/85">Tipologia / attività</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {STILI_NOTI.map((stile) => {
            const attivo = stiliAttivi.includes(stile)
            return (
              <button
                key={stile}
                type="button"
                onClick={() => toggleStile(stile)}
                aria-pressed={attivo}
                className={`rounded-none border px-3 py-1.5 text-sm capitalize transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine ${
                  attivo
                    ? 'border-alpine bg-alpine text-cream'
                    : 'border-alpine/20 bg-white text-stone hover:border-alpine/40'
                }`}
              >
                {stile}
              </button>
            )
          })}
        </div>
      </div>
      </div>

      {/* Barra che resta in alto mentre si scorre: filtri (sul telefono), quanti viaggi e
          salto diretto a un continente. L'archivio sul telefono è lungo decine di schermate. */}
      <div className="sticky top-0 z-30 -mx-6 mt-4 flex items-center gap-3 overflow-x-auto border-b border-ink/15 bg-cream/95 px-6 py-2.5 backdrop-blur sm:-mx-8 sm:px-8 [scrollbar-width:none]">
        <button
          type="button"
          aria-expanded={filtriAperti}
          aria-controls="filtri-viaggi"
          onClick={() => {
            setFiltriAperti((a) => !a)
            inizio.current?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="inline-flex min-h-10 shrink-0 items-center gap-2 border-2 border-ink bg-white px-3 text-sm font-semibold text-ink md:hidden"
        >
          <SlidersHorizontal size={16} aria-hidden="true" />
          Filtri{filtriAttivi > 0 ? ` (${filtriAttivi})` : ''}
        </button>
        <p className="shrink-0 text-sm text-stone/85" aria-live="polite">
          {filtrati.length} {filtrati.length === 1 ? 'viaggio' : 'viaggi'}
        </p>
        {gruppi.length > 1 && (
          <nav aria-label="Vai al continente" className="flex shrink-0 gap-1.5">
            {gruppi.map(({ continente, items }) => (
              <a
                key={continente}
                href={`#${slugify(continente)}`}
                className="inline-flex min-h-10 items-center whitespace-nowrap border border-ink/20 px-3 text-sm font-medium text-ink hover:border-ink hover:bg-ink hover:text-cream"
              >
                {continente} <span className="ml-1.5 text-xs text-stone/85">{items.length}</span>
              </a>
            ))}
          </nav>
        )}
      </div>

      {filtrati.length > 0 ? (
        <div className="mt-10 space-y-14">
          {gruppi.map(
            ({ continente, items }) => (
              <div key={continente} id={slugify(continente)} className="scroll-mt-20">
                <div className="flex items-baseline gap-4 border-b border-alpine/15 pb-3">
                  <h2 className="font-display text-[clamp(1.6rem,2.4vw,2.1rem)] text-alpine">{continente}</h2>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone/85">
                    {items.length} {items.length === 1 ? 'viaggio' : 'viaggi'}
                  </span>
                </div>
                <RevealGroup className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
                  {items.map(({ viaggio }) => (
                    <RevealItem key={viaggio.slug}>
                      <TripCard viaggio={viaggio} />
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>
            )
          )}
        </div>
      ) : (
        <p className="mt-10 text-sm text-stone">Nessun viaggio corrisponde a questi filtri.</p>
      )}
    </div>
  )
}
