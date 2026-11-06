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
  CHIAVI_AVANZATE,
  FASCE_DURATA,
  NESSUN_FILTRO,
  NOMI_MESI,
  STATO_VUOTO,
  STILI_NOTI,
  etichettaPaese,
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
    quando: 'Quando andare',
    mese: 'Quando ci sono andato',
    meseNota: 'Il mese in cui l’ho fatto io, non il periodo migliore: c’è solo per alcuni viaggi.',
    altri: 'Altri filtri',
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
    mostraAltri: (n: number, resto: number) => (n === resto ? `Mostra altri ${n}` : `Mostra altri ${n} (ne restano ${resto})`),
    mostraAltriAria: (n: number, gruppo: string) => `Mostra altri ${n} viaggi: ${gruppo}`,
    fasce: { weekend: 'Weekend (1-3 giorni)', '4-7': '4-7 giorni', '8-14': '8-14 giorni', '15+': '15 giorni e più' } as Record<string, string>,
  },
  en: {
    cerca: 'Search',
    cercaPlaceholder: 'Country, city, stop…',
    area: 'Region',
    paese: 'Country',
    durata: 'Length',
    stile: 'Type',
    quando: 'When to go',
    mese: 'When I went',
    meseNota: 'The month I actually went, not the best time to go: only some trips have it.',
    altri: 'More filters',
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
    mostraAltri: (n: number, resto: number) => (n === resto ? `Show ${n} more` : `Show ${n} more (${resto} left)`),
    mostraAltriAria: (n: number, gruppo: string) => `Show ${n} more trips: ${gruppo}`,
    fasce: { weekend: 'Weekend (1-3 days)', '4-7': '4-7 days', '8-14': '8-14 days', '15+': '15+ days' } as Record<string, string>,
  },
  es: {
    cerca: 'Buscar',
    cercaPlaceholder: 'País, ciudad, parada…',
    area: 'Región',
    paese: 'País',
    durata: 'Duración',
    stile: 'Tipo',
    quando: 'Cuándo ir',
    mese: 'Cuándo fui yo',
    meseNota: 'El mes en que lo hice yo, no la mejor época: solo lo tienen algunos viajes.',
    altri: 'Más filtros',
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
    mostraAltri: (n: number, resto: number) => (n === resto ? `Mostrar ${n} más` : `Mostrar ${n} más (quedan ${resto})`),
    mostraAltriAria: (n: number, gruppo: string) => `Mostrar ${n} viajes más: ${gruppo}`,
    fasce: { weekend: 'Fin de semana (1-3 días)', '4-7': '4-7 días', '8-14': '8-14 días', '15+': '15 días o más' } as Record<string, string>,
  },
} satisfies Record<Lingua, unknown>

type Testi = (typeof T)[Lingua]
/**
 * `modo`: 'push' (predefinito) crea una voce nella cronologia, così «Indietro» del browser
 * toglie l'ultimo filtro; la ricerca mentre si scrive usa 'replace', per non riempirla di lettere.
 */
type Aggiorna = (modifiche: Partial<Record<ChiaveFiltro | 'ordine', string>>, modo?: 'push' | 'replace') => void
type ChiavePannello = Exclude<ChiaveFiltro, 'q'>
type Filtri = Record<ChiaveFiltro, string>

const FOCUS = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2'
const SELECT = `min-h-11 w-full rounded-none border-2 border-ink bg-white px-3 text-sm text-ink ${FOCUS}`
const ETICHETTA = 'mb-1.5 block text-xs font-semibold uppercase tracking-wider text-stone'

const maiuscola = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

/** Card visibili all'inizio per gruppo (vista per area) o in tutto (vista per durata), e a ogni «Mostra altri». */
const PASSO_GRUPPO = 12
const PASSO_LISTA = 24
const MESI = Array.from({ length: 12 }, (_, i) => String(i + 1))
const PRINCIPALI = ['area', 'paese', 'durata', 'quando'] as const satisfies readonly ChiavePannello[]
const PANNELLO_VUOTO: Record<ChiavePannello, ''> = { area: '', paese: '', durata: '', quando: '', stile: '', mese: '' }

/**
 * Catalogo dell'archivio /viaggi (Travel Finder): ricerca, area, Paese, durata e «Quando
 * andare» sempre in vista; tipologia e «Quando ci sono andato» in «Altri filtri» (sul telefono
 * tutto nel pannello). Filtri combinabili e scritti nell'URL (contratto in
 * src/lib/viaggi-filtri-stato.ts), conteggi accanto a ogni opzione, filtri applicati
 * rimovibili uno per uno, ordinamento per durata, «Indietro» del browser che li ripercorre.
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
    (modifiche, modo = 'push') => {
      // percorso pubblico com'è nella barra degli indirizzi (/trips, /es/viajes…): il proxy lo
      // riscrive sulla rotta interna, la query resta com'è
      const attuale = window.location.search.replace(/^\?/, '')
      const qs = scriviQuery(attuale, modifiche)
      if (qs === attuale) return
      const url = `${window.location.pathname}${qs ? `?${qs}` : ''}`
      if (modo === 'replace') router.replace(url, { scroll: false })
      else router.push(url, { scroll: false })
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
      aggiorna({ q: valore }, 'replace')
    }, 350)
    return () => clearTimeout(timer)
  }, [qTesto, stato.q, aggiorna])

  const filtri: Filtri = useMemo(
    () => ({
      q: qTesto.trim(),
      area: stato.area,
      paese: stato.paese,
      durata: stato.durata,
      quando: stato.quando,
      stile: stato.stile,
      mese: stato.mese,
    }),
    [qTesto, stato.area, stato.paese, stato.durata, stato.quando, stato.stile, stato.mese]
  )

  // «Altri filtri» parte aperto se l'URL ne contiene già uno (link condiviso, «Indietro»)
  const [altri, setAltri] = useState(() => CHIAVI_AVANZATE.some((k) => stato[k]))
  const idAltri = useId()

  const nomePaese = useMemo(() => new Map(paesi.map((p) => [p.slug, etichettaPaese(p)])), [paesi])
  const nomeChiave: Record<ChiaveFiltro, string> = {
    q: t.ricerca,
    area: t.area,
    paese: t.paese,
    durata: t.durata,
    quando: t.quando,
    stile: t.stile,
    mese: t.mese,
  }
  const valoreLeggibile = (k: ChiaveFiltro, v: string): string => {
    if (k === 'area') return AREE.find((a) => a.slug === v)?.nome[lingua] ?? v
    if (k === 'paese') return nomePaese.get(v) ?? v
    if (k === 'durata') return t.fasce[v] ?? v
    if (k === 'stile') return maiuscola(etichetta(v, lingua))
    if (k === 'mese' || k === 'quando') return maiuscola(NOMI_MESI[lingua][Number(v) - 1] ?? v)
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
  const nelPannello = (Object.keys(PANNELLO_VUOTO) as ChiavePannello[]).filter((k) => filtri[k]).length
  const negliAltri = CHIAVI_AVANZATE.filter((k) => filtri[k]).length

  const azzera = () => {
    setQTesto('')
    setQInviato('')
    aggiorna(NESSUN_FILTRO)
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

  // «Mostra altri»: quante card si vedono per gruppo (o nella lista per durata). I filtri e i
  // conteggi lavorano sempre su tutti i viaggi; cambiando filtri o ordine si riparte dal primo passo.
  const chiaveVista = `${JSON.stringify(filtri)}|${stato.ordine}`
  const [visibili, setVisibili] = useState<{ chiave: string; n: Record<string, number> }>({ chiave: chiaveVista, n: {} })
  if (visibili.chiave !== chiaveVista) setVisibili({ chiave: chiaveVista, n: {} })
  const fuoco = useRef<{ id: string; indice: number } | null>(null)
  useEffect(() => {
    const f = fuoco.current
    if (!f) return
    fuoco.current = null
    // dopo «Mostra altri» il fuoco va sulla prima card nuova, non resta su un pulsante che si sposta
    document.querySelector<HTMLElement>(`#griglia-${f.id} > * > :nth-child(${f.indice + 1}) a`)?.focus()
  }, [visibili])

  // `primo`: la prima griglia della pagina, la cui prima card è l'immagine LCP sul telefono
  const griglia = (id: string, nome: string, items: ViaggioCatalogo[], passo: number, primo = false) => {
    const quanti = visibili.n[id] ?? passo
    const resto = items.length - quanti
    const prossimi = Math.min(passo, resto)
    return (
      <>
        <div id={`griglia-${id}`}>
          <RevealGroup className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
            {items.slice(0, quanti).map((viaggio, i) => (
              <RevealItem key={viaggio.slug}>
                <TripCard viaggio={viaggio} subito={primo && i === 0} confronto />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
        {resto > 0 && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              aria-controls={`griglia-${id}`}
              aria-label={t.mostraAltriAria(prossimi, nome)}
              onClick={() => {
                setVisibili((v) => ({ ...v, n: { ...v.n, [id]: quanti + passo } }))
                fuoco.current = { id, indice: quanti }
              }}
              className={`btn btn-secondario bg-white ${FOCUS}`}
            >
              {t.mostraAltri(prossimi, resto)}
            </button>
          </div>
        )}
      </>
    )
  }

  const controlli = (quali: readonly ChiavePannello[]) => (
    <Controlli t={t} lingua={lingua} paesi={paesi} filtri={filtri} conta={conta} aggiorna={aggiorna} quali={quali} />
  )

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-[minmax(0,1.4fr)_repeat(4,minmax(0,1fr))_auto] lg:items-end">
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
        <div className="hidden md:contents">{controlli(PRINCIPALI)}</div>
        <div className="hidden md:col-span-4 md:block lg:col-span-1">
          <button
            type="button"
            aria-expanded={altri}
            aria-controls={idAltri}
            onClick={() => setAltri((v) => !v)}
            className={`inline-flex min-h-11 items-center gap-2 border-2 border-ink px-3 text-sm font-semibold transition-colors duration-150 ${
              altri ? 'bg-ink text-cream' : 'bg-white text-ink hover:bg-ink hover:text-cream'
            } ${FOCUS}`}
          >
            <SlidersHorizontal size={16} aria-hidden="true" />
            {t.altri}
            {negliAltri > 0 && <span className="inline-flex min-w-5 items-center justify-center bg-rosso px-1 text-xs text-cream">{negliAltri}</span>}
          </button>
        </div>
      </div>
      {/* «Altri filtri» su tablet e desktop; sul telefono gli stessi campi stanno nel pannello */}
      {altri && (
        <div id={idAltri} className="mt-4 hidden gap-4 border-2 border-ink bg-white p-4 md:grid md:grid-cols-3">
          {controlli(CHIAVI_AVANZATE)}
        </div>
      )}

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
                    <span className="opacity-80">{nomeChiave[k]}:</span> {valore}
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
      <div className="sticky top-0 z-30 -mx-6 mt-4 flex items-center gap-3 overflow-x-auto border-b border-ink/15 bg-cream px-6 py-2 sm:-mx-8 sm:px-8 [scrollbar-width:none]">
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
                className={`chip ${FOCUS}`}
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
          <div className="grid gap-5 px-6 py-6">
            {controlli(PRINCIPALI)}
            <h3 className="border-t-2 border-ink pt-5 text-xs font-semibold uppercase tracking-[0.2em] text-rosso">{t.altri}</h3>
            {controlli(CHIAVI_AVANZATE)}
          </div>
          <div className="sticky bottom-0 mt-auto flex flex-wrap items-center gap-3 border-t-2 border-ink bg-cream px-6 py-4">
            {nelPannello > 0 && (
              <button
                type="button"
                onClick={() => aggiorna(PANNELLO_VUOTO)}
                className={`inline-flex min-h-11 items-center px-2 text-sm font-semibold text-rosso underline-offset-4 hover:underline ${FOCUS}`}
              >
                {t.azzera}
              </button>
            )}
            <button
              type="button"
              onClick={() => dialogo.current?.close()}
              className={`btn btn-primario ml-auto ${FOCUS}`}
            >
              {t.mostra(filtrati.length)}
            </button>
          </div>
        </div>
      </dialog>

      {filtrati.length > 0 ? (
        gruppi ? (
          <div className="mt-10 space-y-14">
            {gruppi.map((g, gi) => (
              <div key={g.id} id={`area-${g.id}`} className="scroll-mt-20">
                <div className="flex items-baseline gap-4 border-b border-alpine/15 pb-3">
                  <h2 className="font-display text-[clamp(1.6rem,2.4vw,2.1rem)] text-alpine">{g.nome}</h2>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone/85">
                    {g.items.length} {g.items.length === 1 ? t.viaggio : t.viaggi}
                  </span>
                </div>
                {griglia(g.id, g.nome, g.items, PASSO_GRUPPO, gi === 0)}
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4">
            <h2 className="sr-only">{t.ordini[stato.ordine]}</h2>
            {griglia('lista', t.ordini[stato.ordine], filtrati, PASSO_LISTA, true)}
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

/**
 * I campi `quali` (area, Paese, durata, quando andare, tipologia, quando ci sono andato), con
 * quanti viaggi resterebbero scegliendo ciascuna opzione.
 */
function Controlli({
  t,
  lingua,
  paesi,
  filtri,
  conta,
  aggiorna,
  quali,
}: {
  t: Testi
  lingua: Lingua
  paesi: OpzionePaese[]
  filtri: Filtri
  conta: (f: Filtri) => number
  aggiorna: Aggiorna
  quali: readonly ChiavePannello[]
}) {
  const id = useId()
  const nomeMese = (m: string) => maiuscola(NOMI_MESI[lingua][Number(m) - 1])
  const paesiArea = paesi.filter((p) => !filtri.area || p.area === filtri.area || p.slug === filtri.paese)
  const opzione = (valore: string, testo: string, n: number, selezionato: boolean) => (
    <option key={valore} value={valore} disabled={n === 0 && !selezionato}>
      {testo} ({n})
    </option>
  )

  const campi: Record<ChiavePannello, ReactNode> = {
    area: (
      <Campo key="area" id={`${id}-area`} label={t.area}>
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
    ),
    paese: (
      <Campo key="paese" id={`${id}-paese`} label={t.paese}>
        <select id={`${id}-paese`} value={filtri.paese} onChange={(e) => aggiorna({ paese: e.target.value })} className={SELECT}>
          <option value="">{t.tutti}</option>
          {paesiArea.map((p) => opzione(p.slug, etichettaPaese(p), conta({ ...filtri, paese: p.slug }), filtri.paese === p.slug))}
        </select>
      </Campo>
    ),
    durata: (
      <Campo key="durata" id={`${id}-durata`} label={t.durata}>
        <select id={`${id}-durata`} value={filtri.durata} onChange={(e) => aggiorna({ durata: e.target.value })} className={SELECT}>
          <option value="">{t.tutte}</option>
          {FASCE_DURATA.map((f) => opzione(f.id, t.fasce[f.id], conta({ ...filtri, durata: f.id }), filtri.durata === f.id))}
        </select>
      </Campo>
    ),
    quando: (
      <Campo key="quando" id={`${id}-quando`} label={t.quando}>
        <select id={`${id}-quando`} value={filtri.quando} onChange={(e) => aggiorna({ quando: e.target.value })} className={SELECT}>
          <option value="">{t.tutti}</option>
          {MESI.map((m) => opzione(m, nomeMese(m), conta({ ...filtri, quando: m }), filtri.quando === m))}
        </select>
      </Campo>
    ),
    stile: (
      <Campo key="stile" id={`${id}-stile`} label={t.stile}>
        <select id={`${id}-stile`} value={filtri.stile} onChange={(e) => aggiorna({ stile: e.target.value })} className={SELECT}>
          <option value="">{t.tutte}</option>
          {STILI_NOTI.map((s) => opzione(s, maiuscola(etichetta(s, lingua)), conta({ ...filtri, stile: s }), filtri.stile === s))}
        </select>
      </Campo>
    ),
    mese: (
      <Campo key="mese" id={`${id}-mese`} label={t.mese}>
        <select
          id={`${id}-mese`}
          value={filtri.mese}
          onChange={(e) => aggiorna({ mese: e.target.value })}
          aria-describedby={`${id}-mese-nota`}
          className={SELECT}
        >
          <option value="">{t.tutti}</option>
          {MESI.map((m) => opzione(m, nomeMese(m), conta({ ...filtri, mese: m }), filtri.mese === m))}
        </select>
        <p id={`${id}-mese-nota`} className="mt-1 text-xs leading-snug text-stone">
          {t.meseNota}
        </p>
      </Campo>
    ),
  }

  return <>{quali.map((k) => campi[k])}</>
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
    <div className="mt-10 scheda bg-white p-6 sm:p-10">
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
          className={`btn btn-primario ${FOCUS}`}
        >
          {t.azzera}
        </button>
      </div>
    </div>
  )
}
