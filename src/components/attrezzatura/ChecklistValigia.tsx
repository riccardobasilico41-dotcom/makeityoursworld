'use client'

import { useId, useSyncExternalStore } from 'react'
import { ArrowUpRight, Printer, RotateCcw } from 'lucide-react'
import { useLingua } from '@/lib/i18n/LinguaProvider'
import type { Lingua } from '@/lib/i18n/config'
import type { LivelloVoce } from '@/content/attrezzatura'

export type VoceChecklist = {
  /** Stabile tra le lingue (deriva dal nome italiano): è la chiave salvata nel browser. */
  id: string
  nome: string
  perche: string
  livello: LivelloVoce
  href: string
}
export type SezioneChecklist = { titolo: string; voci: VoceChecklist[] }

const T = {
  it: {
    pronti: (n: number, m: number) => `${n} di ${m} pronti`,
    azzera: 'Azzera',
    azzeraAria: 'Azzera la lista: toglie tutte le spunte',
    stampa: 'Stampa',
    stampaAria: 'Stampa la lista',
    salvata: 'Le spunte restano salvate solo in questo browser, per questa lista.',
    legenda: 'Legenda',
    livelli: { essenziale: 'Essenziale', consigliato: 'Consigliato', opzionale: 'Opzionale', noleggiabile: 'Noleggiabile' },
    spiega: {
      essenziale: 'obbligatorio o indispensabile secondo l’itinerario',
      consigliato: 'utile, come lo abbiamo usato noi',
      opzionale: 'solo in certi casi',
      noleggiabile: 'si trova anche a noleggio sul posto',
    },
    apri: 'Cerca su Amazon',
    nuovaScheda: '(si apre in una nuova scheda)',
  },
  en: {
    pronti: (n: number, m: number) => `${n} of ${m} packed`,
    azzera: 'Reset',
    azzeraAria: 'Reset the list: clears every tick',
    stampa: 'Print',
    stampaAria: 'Print the list',
    salvata: 'Your ticks are saved only in this browser, for this list.',
    legenda: 'Key',
    livelli: { essenziale: 'Essential', consigliato: 'Recommended', opzionale: 'Optional', noleggiabile: 'Can be rented' },
    spiega: {
      essenziale: 'mandatory or indispensable according to the itinerary',
      consigliato: 'useful, the way we used it',
      opzionale: 'only in some cases',
      noleggiabile: 'can also be rented on the spot',
    },
    apri: 'Search on Amazon',
    nuovaScheda: '(opens in a new tab)',
  },
  es: {
    pronti: (n: number, m: number) => `${n} de ${m} listos`,
    azzera: 'Reiniciar',
    azzeraAria: 'Reiniciar la lista: quita todas las marcas',
    stampa: 'Imprimir',
    stampaAria: 'Imprimir la lista',
    salvata: 'Las marcas se guardan solo en este navegador, para esta lista.',
    legenda: 'Leyenda',
    livelli: { essenziale: 'Imprescindible', consigliato: 'Recomendado', opzionale: 'Opcional', noleggiabile: 'Se puede alquilar' },
    spiega: {
      essenziale: 'obligatorio o indispensable según el itinerario',
      consigliato: 'útil, tal como lo usamos nosotros',
      opzionale: 'solo en algunos casos',
      noleggiabile: 'también se alquila allí',
    },
    apri: 'Buscar en Amazon',
    nuovaScheda: '(se abre en una pestaña nueva)',
  },
} satisfies Record<Lingua, unknown>

const ORDINE: LivelloVoce[] = ['essenziale', 'consigliato', 'opzionale', 'noleggiabile']
const STILE_LIVELLO: Record<LivelloVoce, string> = {
  essenziale: 'border-rosso bg-rosso text-cream',
  consigliato: 'border-ink/40 text-ink',
  opzionale: 'border-dashed border-ink/40 text-stone',
  noleggiabile: 'border-alpine text-alpine',
}

/* ---- Spunte salvate nel browser: una chiave per lista (`miy-valigia:<slug>`) ----
 * Se localStorage non c'è o è bloccato (navigazione privata, quota piena) le spunte
 * restano in memoria finché la pagina è aperta. */
const EVENTO = 'miy-valigia-cambiata'
const memoria = new Map<string, string>()
let soloMemoria = false
const cache = new Map<string, { raw: string | null; valore: ReadonlySet<string> }>()
const VUOTO: ReadonlySet<string> = new Set()

const chiave = (lista: string) => `miy-valigia:${lista}`

function leggi(lista: string): string | null {
  if (!soloMemoria) {
    try {
      return window.localStorage.getItem(chiave(lista))
    } catch {
      soloMemoria = true
    }
  }
  return memoria.get(lista) ?? null
}

function scrivi(lista: string, ids: Iterable<string>) {
  const raw = JSON.stringify([...ids])
  memoria.set(lista, raw)
  if (!soloMemoria) {
    try {
      if (raw === '[]') window.localStorage.removeItem(chiave(lista))
      else window.localStorage.setItem(chiave(lista), raw)
    } catch {
      soloMemoria = true
    }
  }
  window.dispatchEvent(new Event(EVENTO))
}

function spunte(lista: string): ReadonlySet<string> {
  const raw = leggi(lista)
  const c = cache.get(lista)
  if (c && c.raw === raw) return c.valore
  let valore: ReadonlySet<string> = VUOTO
  try {
    const dati: unknown = raw ? JSON.parse(raw) : []
    if (Array.isArray(dati)) valore = new Set(dati.filter((x): x is string => typeof x === 'string'))
  } catch {
    valore = VUOTO
  }
  cache.set(lista, { raw, valore })
  return valore
}

function iscriviti(avvisa: () => void) {
  window.addEventListener(EVENTO, avvisa)
  window.addEventListener('storage', avvisa)
  return () => {
    window.removeEventListener(EVENTO, avvisa)
    window.removeEventListener('storage', avvisa)
  }
}

/**
 * Lista della valigia come strumento: spunte vere salvate nel browser, conteggio
 * annunciato agli screen reader, «Azzera», «Stampa» con un foglio pulito
 * (senza testata, piè di pagina, link e pulsanti). Prima dell'idratazione
 * tutte le voci risultano da preparare: lo stato vero arriva da localStorage.
 */
export function ChecklistValigia({
  lista,
  sezioni,
  rel,
}: {
  lista: string
  sezioni: SezioneChecklist[]
  rel: string
}) {
  const lingua = useLingua()
  const t = T[lingua]
  const base = useId()
  const fatte = useSyncExternalStore(iscriviti, () => spunte(lista), () => VUOTO)

  const tutte = sezioni.flatMap((s) => s.voci.map((v) => v.id))
  const pronte = tutte.filter((id) => fatte.has(id)).length
  const livelliUsati = ORDINE.filter((l) => sezioni.some((s) => s.voci.some((v) => v.livello === l)))

  function alterna(id: string, si: boolean) {
    const nuove = new Set(spunte(lista))
    if (si) nuove.add(id)
    else nuove.delete(id)
    scrivi(lista, [...nuove].filter((x) => tutte.includes(x)))
  }

  return (
    <div className="checklist-valigia">
      {/* Foglio di stampa: solo la lista, senza testata, piè di pagina e controlli. */}
      <style>{`@media print{body>:not(main){display:none!important}main [data-no-stampa],main nav{display:none!important}body{background:#fff!important}.checklist-valigia input[type=checkbox]{print-color-adjust:exact;-webkit-print-color-adjust:exact}.checklist-valigia li{break-inside:avoid}}`}</style>

      <div className="sticky top-0 z-10 -mx-1 mb-10 border-2 border-ink bg-cream px-4 py-4 print:static print:border-0 print:px-0">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p aria-live="polite" aria-atomic="true" className="font-display text-xl text-ink">
            {t.pronti(pronte, tutte.length)}
          </p>
          <div className="flex flex-wrap gap-3" data-no-stampa>
            <button type="button" onClick={() => window.print()} aria-label={t.stampaAria} className="btn btn-secondario">
              <Printer size={16} aria-hidden="true" />
              {t.stampa}
            </button>
            <button
              type="button"
              onClick={() => scrivi(lista, [])}
              disabled={pronte === 0}
              aria-label={t.azzeraAria}
              className="btn btn-secondario disabled:cursor-not-allowed disabled:opacity-50"
            >
              <RotateCcw size={16} aria-hidden="true" />
              {t.azzera}
            </button>
          </div>
        </div>
        <div aria-hidden="true" className="mt-3 h-1.5 w-full bg-ink/10 print:hidden">
          <div
            className="h-full bg-rosso transition-[width] duration-200 motion-reduce:transition-none"
            style={{ width: tutte.length ? `${(pronte / tutte.length) * 100}%` : '0%' }}
          />
        </div>
        <p className="mt-3 text-xs text-stone print:hidden">{t.salvata}</p>
      </div>

      {livelliUsati.length > 1 && (
        <dl aria-label={t.legenda} className="mb-12 grid gap-x-6 gap-y-2 text-sm text-stone sm:grid-cols-2">
          {livelliUsati.map((l) => (
            <div key={l} className="flex items-baseline gap-2">
              <dt className={`shrink-0 border px-1.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wider ${STILE_LIVELLO[l]}`}>
                {t.livelli[l]}
              </dt>
              <dd>{t.spiega[l]}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="space-y-14">
        {sezioni.map((sezione, i) => {
          const idTitolo = `${base}-s${i}`
          return (
            <section key={sezione.titolo} aria-labelledby={idTitolo}>
              <h2
                id={idTitolo}
                className="border-b-2 border-ink pb-3 font-display text-[clamp(1.5rem,2.6vw,2.25rem)] text-ink"
              >
                {sezione.titolo}
              </h2>
              <ul className="divide-y divide-ink/15">
                {sezione.voci.map((voce, j) => {
                  const idVoce = `${base}-s${i}-v${j}`
                  const fatta = fatte.has(voce.id)
                  return (
                    <li key={voce.id} className="flex flex-col gap-3 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                      <div className="flex items-start gap-4">
                        <input
                          id={idVoce}
                          type="checkbox"
                          checked={fatta}
                          onChange={(e) => alterna(voce.id, e.target.checked)}
                          aria-describedby={`${idVoce}-perche`}
                          className="mt-0.5 size-6 shrink-0 cursor-pointer accent-rosso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2"
                        />
                        <div>
                          <label htmlFor={idVoce} className="flex cursor-pointer flex-wrap items-baseline gap-x-3 gap-y-1">
                            <span className={`font-semibold ${fatta ? 'text-stone line-through decoration-rosso decoration-2' : 'text-ink'}`}>
                              {voce.nome}
                            </span>
                            <span className={`border px-1.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wider ${STILE_LIVELLO[voce.livello]}`}>
                              {t.livelli[voce.livello]}
                            </span>
                          </label>
                          <p id={`${idVoce}-perche`} className="mt-1 text-sm leading-relaxed text-stone">
                            {voce.perche}
                          </p>
                        </div>
                      </div>
                      <a
                        href={voce.href}
                        target="_blank"
                        rel={rel}
                        data-no-stampa
                        className="ml-10 inline-flex shrink-0 items-center gap-1.5 self-start rounded-none border-2 border-ink px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink transition-colors duration-150 hover:bg-ink hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2 sm:ml-0"
                      >
                        {t.apri}
                        <ArrowUpRight size={14} aria-hidden="true" />
                        <span className="sr-only">
                          : {voce.nome} {t.nuovaScheda}
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}
      </div>
    </div>
  )
}
