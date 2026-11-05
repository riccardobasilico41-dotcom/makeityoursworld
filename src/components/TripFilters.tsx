'use client'

import { Suspense, useCallback, useEffect, useId, useMemo, useRef, useState, type ReactNode } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { TripCard } from './TripCard'
import { RevealGroup, RevealItem } from './Reveal'
import { AREE } from '@/lib/aree'
import { useLingua } from '@/lib/i18n/LinguaProvider'
import { etichetta } from '@/lib/i18n/etichette'
import type { Lingua } from '@/lib/i18n/config'
import {
  FASCE_DURATA,
  STATO_VUOTO,
  STILI_NOTI,
  leggiStato,
  ordina,
  passaFiltri,
  scriviQuery,
  type ChiaveFiltro,
  type OpzionePaese,
  type Ordine,
  type StatoFiltri,
  type ViaggioCatalogo,
} from '@/lib/viaggi-filtri-stato'

const T = {
  it: {
    cerca: 'Cerca',
    cercaPlaceholder: 'Paese, città, tappa…',
    area: 'Area',
    paese: 'Paese',
    durata: 'Durata',
    stile: 'Tipologia',
    tutte: 'Tutte',
    tutti: 'Tutti',
    ricerca: 'Ricerca',
    azzera: 'Azzera filtri',
    filtri: 'Filtri',
    chiudi: 'Chiudi i filtri',
    mostra: (n: number) => `Mostra ${n} ${n === 1 ? 'viaggio' : 'viaggi'}`,
    applicati: 'Filtri applicati',
    rimuovi: (nome: string, valore: string) => `Rimuovi il filtro ${nome}: ${valore}`,
    ordina: 'Ordina',
    ordini: { consigliati: 'Consigliati', 'durata-asc': 'Durata: più corti', 'durata-desc': 'Durata: più lunghi' } as Record<Ordine, string>,
    vaiArea: "Vai all'area",
    conteggio: (n: number, tot: number) =>
      n === tot ? `${n} ${n === 1 ? 'viaggio' : 'viaggi'}` : `${n} di ${tot} viaggi`,
    viaggio: 'viaggio',
    viaggi: 'viaggi',
    nessunoTitolo: 'Nessun viaggio con questi filtri',
    nessunoTesto: 'Togli uno dei filtri o azzerali tutti per tornare al catalogo completo.',
    togli: (filtro: string, n: number) => `Togli ${filtro}: ${n} ${n === 1 ? 'viaggio' : 'viaggi'}`,
    altrove: 'Altrove',
    fasce: { weekend: 'Weekend (1-3 giorni)', '4-7': '4-7 giorni', '8-14': '8-14 giorni', '15+': '15 giorni e più' } as Record<string, string>,
  },
  en: {
    cerca: 'Search',
    cercaPlaceholder: 'Country, city, stop…',
    area: 'Region',
    paese: 'Country',
    durata: 'Length',
    stile: 'Type',
    tutte: 'All',
    tutti: 'All',
    ricerca: 'Search',
    azzera: 'Clear filters',
    filtri: 'Filters',
    chiudi: 'Close filters',
    mostra: (n: number) => `Show ${n} ${n === 1 ? 'trip' : 'trips'}`,
    applicati: 'Active filters',
    rimuovi: (nome: string, valore: string) => `Remove filter ${nome}: ${valore}`,
    ordina: 'Sort',
    ordini: { consigliati: 'Recommended', 'durata-asc': 'Length: shortest first', 'durata-desc': 'Length: longest first' } as Record<Ordine, string>,
    vaiArea: 'Jump to region',
    conteggio: (n: number, tot: number) => (n === tot ? `${n} ${n === 1 ? 'trip' : 'trips'}` : `${n} of ${tot} trips`),
    viaggio: 'trip',
    viaggi: 'trips',
    nessunoTitolo: 'No trips match these filters',
    nessunoTesto: 'Remove one of the filters, or clear them all to get back to the full catalog.',
    togli: (filtro: string, n: number) => `Remove ${filtro}: ${n} ${n === 1 ? 'trip' : 'trips'}`,
    altrove: 'Elsewhere',
    fasce: { weekend: 'Weekend (1-3 days)', '4-7': '4-7 days', '8-14': '8-14 days', '15+': '15+ days' } as Record<string, string>,
  },
  es: {
    cerca: 'Buscar',
    cercaPlaceholder: 'País, ciudad, parada…',
    area: 'Región',
    paese: 'País',
    durata: 'Duración',
    stile: 'Tipo',
    tutte: 'Todas',
    tutti: 'Todos',
    ricerca: 'Búsqueda',
    azzera: 'Borrar filtros',
    filtri: 'Filtros',
    chiudi: 'Cerrar los filtros',
    mostra: (n: number) => `Mostrar ${n} ${n === 1 ? 'viaje' : 'viajes'}`,
    applicati: 'Filtros aplicados',
    rimuovi: (nome: string, valore: string) => `Quitar el filtro ${nome}: ${valore}`,
    ordina: 'Ordenar',
    ordini: { consigliati: 'Recomendados', 'durata-asc': 'Duración: más cortos', 'durata-desc': 'Duración: más largos' } as Record<Ordine, string>,
    vaiArea: 'Ir a la región',
    conteggio: (n: number, tot: number) => (n === tot ? `${n} ${n === 1 ? 'viaje' : 'viajes'}` : `${n} de ${tot} viajes`),
    viaggio: 'viaje',
    viaggi: 'viajes',
    nessunoTitolo: 'Ningún viaje con estos filtros',
    nessunoTesto: 'Quita uno de los filtros o bórralos todos para volver al catálogo completo.',
    togli: (filtro: string, n: number) => `Quitar ${filtro}: ${n} ${n === 1 ? 'viaje' : 'viajes'}`,
    altrove: 'En otros lugares',
    fasce: { weekend: 'Fin de semana (1-3 días)', '4-7': '4-7 días', '8-14': '8-14 días', '15+': '15 días o más' } as Record<string, string>,
  },
} satisfies Record<Lingua, unknown>

type Testi = (typeof T)[Lingua]
type Aggiorna = (modifiche: Partial<Record<ChiaveFiltro | 'ordine', string>>) => void
type Filtri = Record<ChiaveFiltro, string>

const FOCUS = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2'
const SELECT = `min-h-11 w-full rounded-none border-2 border-ink bg-white px-3 text-sm text-ink ${FOCUS}`
const ETICHETTA = 'mb-1.5 block text-xs font-semibold uppercase tracking-wider text-stone'

const maiuscola = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

/**
 * Catalogo dell'archivio /viaggi: ricerca, area, Paese, durata e tipologia combinabili e
 * scritti nell'URL (vedi il contratto in src/lib/viaggi-filtri-stato.ts), conteggi
 * accanto a ogni opzione, filtri applicati rimovibili uno per uno, ordinamento per durata.
 * Finché l'URL non è leggibile (prerender) si vede la griglia completa senza filtri.
 */
export function TripFilters({ viaggi, paesi }: { viaggi: ViaggioCatalogo[]; paesi: OpzionePaese[] }) {
  return (
    <Suspense fallback={<Catalogo viaggi={viaggi} paesi={paesi} stato={STATO_VUOTO} aggiorna={() => {}} />}>
      <CatalogoConUrl viaggi={viaggi} paesi={paesi} />
    </Suspense>
  )
}

function CatalogoConUrl({ viaggi, paesi }: { viaggi: ViaggioCatalogo[]; paesi: OpzionePaese[] }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const paesiValidi = useMemo(() => new Set(paesi.map((p) => p.slug)), [paesi])
  const stato = useMemo(() => leggiStato(searchParams, paesiValidi), [searchParams, paesiValidi])

  const aggiorna = useCallback<Aggiorna>(
    (modifiche) => {
      // percorso pubblico com'è nella barra degli indirizzi (/trips, /es/viajes…): il proxy lo
      // riscrive sulla rotta interna, la query resta com'è
      const qs = scriviQuery(window.location.search, modifiche)
      router.replace(`${window.location.pathname}${qs ? `?${qs}` : ''}`, { scroll: false })
    },
    [router]
  )

  return <Catalogo viaggi={viaggi} paesi={paesi} stato={stato} aggiorna={aggiorna} />
}

function Catalogo({
  viaggi,
  paesi,
  stato,
  aggiorna,
}: {
  viaggi: ViaggioCatalogo[]
  paesi: OpzionePaese[]
  stato: StatoFiltri
  aggiorna: Aggiorna
}) {
  const lingua = useLingua()
  const t = T[lingua]
  const dialogo = useRef<HTMLDialogElement>(null)
  const idCerca = useId()

  // La ricerca si scrive subito nel campo e filtra subito; nell'URL arriva dopo una pausa.
  // Se l'URL cambia da fuori (indietro del browser), il campo si riallinea.
  const [qTesto, setQTesto] = useState(stato.q)
  const [qVisto, setQVisto] = useState(stato.q)
  const [qInviato, setQInviato] = useState<string | null>(null)
  if (stato.q !== qVisto) {
    setQVisto(stato.q)
    if (stato.q !== qInviato) setQTesto(stato.q)
  }
  useEffect(() => {
    const valore = qTesto.trim()
    if (valore === stato.q) return
    const timer = setTimeout(() => {
      setQInviato(valore)
      aggiorna({ q: valore })
    }, 350)
    return () => clearTimeout(timer)
  }, [qTesto, stato.q, aggiorna])

  const filtri: Filtri = useMemo(
    () => ({ q: qTesto.trim(), area: stato.area, paese: stato.paese, durata: stato.durata, stile: stato.stile }),
    [qTesto, stato.area, stato.paese, stato.durata, stato.stile]
  )

  const nomePaese = useMemo(() => new Map(paesi.map((p) => [p.slug, p.nome])), [paesi])
  const nomeChiave: Record<ChiaveFiltro, string> = { q: t.ricerca, area: t.area, paese: t.paese, durata: t.durata, stile: t.stile }
  const valoreLeggibile = (k: ChiaveFiltro, v: string): string => {
    if (k === 'area') return AREE.find((a) => a.slug === v)?.nome[lingua] ?? v
    if (k === 'paese') return nomePaese.get(v) ?? v
    if (k === 'durata') return t.fasce[v] ?? v
    if (k === 'stile') return maiuscola(etichetta(v, lingua))
    return `«${v}»`
  }

  const conta = useCallback(
    (f: Filtri) => viaggi.reduce((n, v) => n + (passaFiltri(v, f) ? 1 : 0), 0),
    [viaggi]
  )

  const filtrati = useMemo(() => ordina(viaggi.filter((v) => passaFiltri(v, filtri)), stato.ordine), [viaggi, filtri, stato.ordine])

  // filtri attivi nell'ordine in cui sono stati applicati (dall'URL); la ricerca appena
  // scritta, non ancora nell'URL, è l'ultima
  const sequenza = useMemo(() => {
    const s = stato.sequenza.filter((k) => filtri[k])
    if (filtri.q && !s.includes('q')) s.push('q')
    return s
  }, [stato.sequenza, filtri])
  const nelPannello = (['area', 'paese', 'durata', 'stile'] as const).filter((k) => filtri[k]).length

  const azzera = () => {
    setQTesto('')
    setQInviato('')
    aggiorna({ q: '', area: '', paese: '', durata: '', stile: '' })
  }
  const togli = (k: ChiaveFiltro) => {
    if (k === 'q') {
      setQTesto('')
      setQInviato('')
    }
    aggiorna({ [k]: '' })
  }

  const gruppi = useMemo(() => {
    if (stato.ordine !== 'consigliati') return null
    const out = AREE.map((a) => ({ id: a.slug, nome: a.nome[lingua], items: filtrati.filter((v) => v.aree[0] === a.slug) }))
    const senza = filtrati.filter((v) => !v.aree[0] || !AREE.some((a) => a.slug === v.aree[0]))
    if (senza.length) out.push({ id: 'altrove', nome: t.altrove, items: senza })
    return out.filter((g) => g.items.length > 0)
  }, [filtrati, stato.ordine, lingua, t.altrove])

  const griglia = (items: ViaggioCatalogo[]) => (
    <RevealGroup className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
      {items.map((viaggio) => (
        <RevealItem key={viaggio.slug}>
          <TripCard viaggio={viaggio} />
        </RevealItem>
      ))}
    </RevealGroup>
  )

  const controlli = (
    <Controlli
      t={t}
      lingua={lingua}
      paesi={paesi}
      filtri={filtri}
      conta={conta}
      aggiorna={aggiorna}
    />
  )

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-[minmax(0,1.5fr)_repeat(4,minmax(0,1fr))]">
        <div className="md:col-span-4 lg:col-span-1">
          <label htmlFor={idCerca} className={ETICHETTA}>
            {t.cerca}
          </label>
          <div className="relative">
            <Search size={16} aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-stone" />
            <input
              id={idCerca}
              type="search"
              value={qTesto}
              onChange={(e) => setQTesto(e.target.value)}
              placeholder={t.cercaPlaceholder}
              maxLength={80}
              autoComplete="off"
              className={`${SELECT} pl-9`}
            />
          </div>
        </div>
        <div className="hidden md:contents">{controlli}</div>
      </div>

      {sequenza.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <ul aria-label={t.applicati} className="flex flex-wrap gap-2">
            {sequenza.map((k) => {
              const valore = valoreLeggibile(k, filtri[k])
              return (
                <li key={k}>
                  <button
                    type="button"
                    onClick={() => togli(k)}
                    aria-label={t.rimuovi(nomeChiave[k], valore)}
                    className={`inline-flex min-h-11 items-center gap-2 border-2 border-ink bg-white px-3 text-sm font-medium text-ink transition-colors duration-150 hover:bg-ink hover:text-cream ${FOCUS}`}
                  >
                    <span className="text-stone/85">{nomeChiave[k]}:</span> {valore}
                    <X size={14} aria-hidden="true" />
                  </button>
                </li>
              )
            })}
          </ul>
          <button
            type="button"
            onClick={azzera}
            className={`inline-flex min-h-11 items-center px-2 text-sm font-semibold text-rosso underline-offset-4 hover:underline ${FOCUS}`}
          >
            {t.azzera}
          </button>
        </div>
      )}

      {/* Barra che resta in alto mentre si scorre: filtri (sul telefono), quanti viaggi,
          ordinamento e salto diretto a un'area. L'archivio sul telefono è lungo decine di schermate. */}
      <div className="sticky top-0 z-30 -mx-6 mt-4 flex items-center gap-3 overflow-x-auto border-b border-ink/15 bg-cream/95 px-6 py-2 backdrop-blur sm:-mx-8 sm:px-8 [scrollbar-width:none]">
        <button
          type="button"
          aria-haspopup="dialog"
          onClick={() => dialogo.current?.showModal()}
          className={`inline-flex min-h-11 shrink-0 items-center gap-2 border-2 border-ink bg-white px-3 text-sm font-semibold text-ink md:hidden ${FOCUS}`}
        >
          <SlidersHorizontal size={16} aria-hidden="true" />
          {t.filtri}
          {nelPannello > 0 && (
            <span className="inline-flex min-w-5 items-center justify-center bg-rosso px-1 text-xs text-cream">{nelPannello}</span>
          )}
        </button>
        <p className="shrink-0 text-sm font-semibold text-ink" aria-live="polite" aria-atomic="true">
          {t.conteggio(filtrati.length, viaggi.length)}
        </p>
        {gruppi && gruppi.length > 1 && (
          <nav aria-label={t.vaiArea} className="hidden shrink-0 gap-1.5 md:flex">
            {gruppi.map((g) => (
              <a
                key={g.id}
                href={`#area-${g.id}`}
                className={`inline-flex min-h-11 items-center whitespace-nowrap border border-ink/20 px-3 text-sm font-medium text-ink hover:border-ink hover:bg-ink hover:text-cream ${FOCUS}`}
              >
                {g.nome} <span className="ml-1.5 text-xs opacity-80">{g.items.length}</span>
              </a>
            ))}
          </nav>
        )}
        <OrdinaSelect t={t} valore={stato.ordine} aggiorna={aggiorna} />
      </div>

      <dialog
        ref={dialogo}
        aria-label={t.filtri}
        onClick={(e) => {
          // clic sullo sfondo scuro: chiude
          if (e.target === e.currentTarget) e.currentTarget.close()
        }}
        className="m-0 ml-auto h-dvh max-h-none w-full max-w-md overflow-y-auto border-0 border-l-2 border-ink bg-cream p-0 text-ink backdrop:bg-ink/60 md:hidden"
      >
        <div className="flex min-h-full flex-col">
          <div className="flex items-center justify-between border-b-2 border-ink px-6 py-3">
            <h2 className="font-display text-2xl text-alpine">{t.filtri}</h2>
            <button
              type="button"
              onClick={() => dialogo.current?.close()}
              aria-label={t.chiudi}
              className={`inline-flex size-11 items-center justify-center border-2 border-ink bg-white text-ink hover:bg-ink hover:text-cream ${FOCUS}`}
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>
          <div className="grid gap-5 px-6 py-6">{controlli}</div>
          <div className="sticky bottom-0 mt-auto flex flex-wrap items-center gap-3 border-t-2 border-ink bg-cream px-6 py-4">
            {nelPannello > 0 && (
              <button
                type="button"
                onClick={() => aggiorna({ area: '', paese: '', durata: '', stile: '' })}
                className={`inline-flex min-h-11 items-center px-2 text-sm font-semibold text-rosso underline-offset-4 hover:underline ${FOCUS}`}
              >
                {t.azzera}
              </button>
            )}
            <button
              type="button"
              onClick={() => dialogo.current?.close()}
              className={`ml-auto inline-flex min-h-12 items-center bg-rosso px-6 text-[0.95rem] font-semibold text-cream transition-colors duration-150 hover:bg-rosso-dark ${FOCUS}`}
            >
              {t.mostra(filtrati.length)}
            </button>
          </div>
        </div>
      </dialog>

      {filtrati.length > 0 ? (
        gruppi ? (
          <div className="mt-10 space-y-14">
            {gruppi.map((g) => (
              <div key={g.id} id={`area-${g.id}`} className="scroll-mt-20">
                <div className="flex items-baseline gap-4 border-b border-alpine/15 pb-3">
                  <h2 className="font-display text-[clamp(1.6rem,2.4vw,2.1rem)] text-alpine">{g.nome}</h2>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone/85">
                    {g.items.length} {g.items.length === 1 ? t.viaggio : t.viaggi}
                  </span>
                </div>
                {griglia(g.items)}
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4">
            <h2 className="sr-only">{t.ordini[stato.ordine]}</h2>
            {griglia(filtrati)}
          </div>
        )
      ) : (
        <StatoVuoto
          t={t}
          suggerimenti={[...sequenza]
            .reverse()
            .map((k) => ({ k, n: conta({ ...filtri, [k]: '' }) }))
            .filter((s) => s.n > 0)
            .slice(0, 3)
            .map(({ k, n }) => ({
              k,
              testo: t.togli(`${nomeChiave[k].toLowerCase()} ${valoreLeggibile(k, filtri[k])}`, n),
            }))}
          togli={togli}
          azzera={azzera}
        />
      )}
    </div>
  )
}

function Campo({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className={ETICHETTA}>
        {label}
      </label>
      {children}
    </div>
  )
}

/** Area, Paese, durata e tipologia, con quanti viaggi resterebbero scegliendo ciascuna opzione. */
function Controlli({
  t,
  lingua,
  paesi,
  filtri,
  conta,
  aggiorna,
}: {
  t: Testi
  lingua: Lingua
  paesi: OpzionePaese[]
  filtri: Filtri
  conta: (f: Filtri) => number
  aggiorna: Aggiorna
}) {
  const id = useId()
  const paesiArea = paesi.filter((p) => !filtri.area || p.area === filtri.area || p.slug === filtri.paese)
  const opzione = (valore: string, testo: string, n: number, selezionato: boolean) => (
    <option key={valore} value={valore} disabled={n === 0 && !selezionato}>
      {testo} ({n})
    </option>
  )

  return (
    <>
      <Campo id={`${id}-area`} label={t.area}>
        <select
          id={`${id}-area`}
          value={filtri.area}
          onChange={(e) => {
            const area = e.target.value
            const paese = paesi.find((p) => p.slug === filtri.paese)
            // il Paese scelto resta solo se sta nella nuova area
            aggiorna(paese && area && paese.area !== area ? { area, paese: '' } : { area })
          }}
          className={SELECT}
        >
          <option value="">{t.tutte}</option>
          {AREE.map((a) => {
            // stesso conto del cambio d'area: il Paese fuori dall'area verrebbe tolto
            const paeseResta = !filtri.paese || paesi.find((p) => p.slug === filtri.paese)?.area === a.slug
            const n = conta({ ...filtri, area: a.slug, paese: paeseResta ? filtri.paese : '' })
            return opzione(a.slug, a.nome[lingua], n, filtri.area === a.slug)
          })}
        </select>
      </Campo>
      <Campo id={`${id}-paese`} label={t.paese}>
        <select id={`${id}-paese`} value={filtri.paese} onChange={(e) => aggiorna({ paese: e.target.value })} className={SELECT}>
          <option value="">{t.tutti}</option>
          {paesiArea.map((p) => opzione(p.slug, p.nome, conta({ ...filtri, paese: p.slug }), filtri.paese === p.slug))}
        </select>
      </Campo>
      <Campo id={`${id}-durata`} label={t.durata}>
        <select id={`${id}-durata`} value={filtri.durata} onChange={(e) => aggiorna({ durata: e.target.value })} className={SELECT}>
          <option value="">{t.tutte}</option>
          {FASCE_DURATA.map((f) => opzione(f.id, t.fasce[f.id], conta({ ...filtri, durata: f.id }), filtri.durata === f.id))}
        </select>
      </Campo>
      <Campo id={`${id}-stile`} label={t.stile}>
        <select id={`${id}-stile`} value={filtri.stile} onChange={(e) => aggiorna({ stile: e.target.value })} className={SELECT}>
          <option value="">{t.tutte}</option>
          {STILI_NOTI.map((s) => opzione(s, maiuscola(etichetta(s, lingua)), conta({ ...filtri, stile: s }), filtri.stile === s))}
        </select>
      </Campo>
    </>
  )
}

function OrdinaSelect({ t, valore, aggiorna }: { t: Testi; valore: Ordine; aggiorna: Aggiorna }) {
  const id = useId()
  return (
    <div className="ml-auto flex shrink-0 items-center gap-2">
      <label htmlFor={id} className="sr-only text-sm text-stone sm:not-sr-only">
        {t.ordina}
      </label>
      <select
        id={id}
        value={valore}
        onChange={(e) => aggiorna({ ordine: e.target.value })}
        className={`min-h-11 rounded-none border-2 border-ink bg-white px-2 text-sm text-ink ${FOCUS}`}
      >
        {(Object.keys(t.ordini) as Ordine[]).map((o) => (
          <option key={o} value={o}>
            {t.ordini[o]}
          </option>
        ))}
      </select>
    </div>
  )
}

function StatoVuoto({
  t,
  suggerimenti,
  togli,
  azzera,
}: {
  t: Testi
  suggerimenti: { k: ChiaveFiltro; testo: string }[]
  togli: (k: ChiaveFiltro) => void
  azzera: () => void
}) {
  return (
    <div className="mt-10 border-2 border-ink bg-white p-6 shadow-[6px_6px_0_var(--color-rosso)] sm:p-10">
      <h2 className="font-display text-[clamp(1.5rem,2.4vw,2rem)] text-alpine">{t.nessunoTitolo}</h2>
      <p className="mt-3 max-w-prose text-sm leading-relaxed text-stone">{t.nessunoTesto}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {suggerimenti.map((s) => (
          <button
            key={s.k}
            type="button"
            onClick={() => togli(s.k)}
            className={`inline-flex min-h-11 items-center border-2 border-ink bg-cream px-4 text-sm font-medium text-ink transition-colors duration-150 hover:bg-ink hover:text-cream ${FOCUS}`}
          >
            {s.testo}
          </button>
        ))}
        <button
          type="button"
          onClick={azzera}
          className={`inline-flex min-h-11 items-center bg-rosso px-5 text-sm font-semibold text-cream transition-colors duration-150 hover:bg-rosso-dark ${FOCUS}`}
        >
          {t.azzera}
        </button>
      </div>
    </div>
  )
}
