'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown, Map as MapIcon, X } from 'lucide-react'
import { RouteLine } from './RouteLine'
import { useAncoraAttiva } from './useAncoraAttiva'
import type { PuntoTappa } from './geo'
import { useLingua } from '@/lib/i18n/LinguaProvider'
import { etichetta } from '@/lib/i18n/etichette'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    indice: 'Indice della pagina',
    inQuestaPagina: 'In questa pagina',
    di: (n: number, tot: number, u: string) => `${u} ${n} di ${tot}`,
    sezioni: 'Sezioni',
    mappa: 'Mappa',
    chiudiMappa: 'Chiudi la mappa',
    tappaDelGiorno: 'Tappa del giorno',
    nessunaTappa: 'Questo giorno non ha una tappa sulla mappa.',
    mappaCompleta: 'Vai alla rotta completa',
  },
  en: {
    indice: 'Page index',
    inQuestaPagina: 'On this page',
    di: (n: number, tot: number, u: string) => `${u} ${n} of ${tot}`,
    sezioni: 'Sections',
    mappa: 'Map',
    chiudiMappa: 'Close the map',
    tappaDelGiorno: "Today's stop",
    nessunaTappa: 'This day has no stop on the map.',
    mappaCompleta: 'Go to the full route',
  },
  es: {
    indice: 'Índice de la página',
    inQuestaPagina: 'En esta página',
    di: (n: number, tot: number, u: string) => `${u} ${n} de ${tot}`,
    sezioni: 'Secciones',
    mappa: 'Mapa',
    chiudiMappa: 'Cerrar el mapa',
    tappaDelGiorno: 'Parada del día',
    nessunaTappa: 'Este día no tiene una parada en el mapa.',
    mappaCompleta: 'Ir a la ruta completa',
  },
} satisfies Record<Lingua, Record<string, string | ((n: number, tot: number, u: string) => string)>>

export type VoceGiorno = { numero: string; id: string; data?: string; luogo: string }
export type VoceSezione = { href: string; label: string }

/**
 * Indice compatto per telefono e tablet (sotto `lg`, dove c'è l'indice laterale): una barra
 * sticky in cima all'articolo con «Giorno 3 di 12 · Kamakura ▾» e un pulsante «Mappa».
 * Il primo apre l'elenco dei giorni e delle sezioni, il secondo la rotta con la tappa del
 * giorno evidenziata. Entrambi si aprono sotto la barra, senza bloccare la pagina: si
 * continua a scorrere e la tappa segue il giorno che si legge. Prima era una fila di
 * pulsanti «G1 G2 G3…» valida solo dentro i giorni.
 */
export function GiorniBarraMobile({
  giorni,
  sezioni,
  unitaLabel = 'Giorno',
  tappe,
  tappeGiorni,
  paeseSlug,
}: {
  giorni: VoceGiorno[]
  sezioni: VoceSezione[]
  unitaLabel?: string
  tappe: PuntoTappa[]
  /** Per ogni giorno, gli indici delle sue tappe in `tappe` (vedi `tappeDeiGiorni`). */
  tappeGiorni: number[][]
  paeseSlug: string
}) {
  const lingua = useLingua()
  const t = T[lingua]
  const unita = etichetta(unitaLabel, lingua)
  const [aperto, setAperto] = useState<'indice' | 'mappa' | null>(null)
  const pannelloId = useId()
  const barraRef = useRef<HTMLDivElement>(null)
  const elencoRef = useRef<HTMLOListElement>(null)

  const giorno = useAncoraAttiva(
    giorni.map((g) => g.id),
    'itinerario-giorno-per-giorno',
  )
  const sezione = useAncoraAttiva(sezioni.map((s) => s.href.slice(1)))
  const evidenzia = giorno >= 0 ? (tappeGiorni[giorno] ?? []) : []

  // Esc chiude; un tocco fuori dalla barra chiude l'elenco (la mappa resta finché non la si chiude)
  useEffect(() => {
    if (!aperto) return
    const tasto = (e: KeyboardEvent) => e.key === 'Escape' && setAperto(null)
    const fuori = (e: PointerEvent) => {
      if (aperto === 'indice' && barraRef.current && !barraRef.current.contains(e.target as Node)) setAperto(null)
    }
    document.addEventListener('keydown', tasto)
    document.addEventListener('pointerdown', fuori)
    return () => {
      document.removeEventListener('keydown', tasto)
      document.removeEventListener('pointerdown', fuori)
    }
  }, [aperto])

  // all'apertura, il giorno corrente è già in vista nell'elenco
  useEffect(() => {
    if (aperto !== 'indice' || giorno < 0) return
    const voce = elencoRef.current?.children[giorno] as HTMLElement | undefined
    voce?.scrollIntoView({ block: 'nearest' })
  }, [aperto, giorno])

  if (giorni.length === 0 && sezioni.length === 0) return null

  const corrente = giorno >= 0 ? giorni[giorno] : undefined
  const etichettaBarra = corrente
    ? t.di(giorno + 1, giorni.length, unita)
    : sezione >= 0
      ? sezioni[sezione].label
      : t.inQuestaPagina
  const haMappa = tappe.length > 0

  return (
    <div
      ref={barraRef}
      className="sticky top-0 z-30 -mx-6 border-y-2 border-ink bg-cream sm:-mx-8 lg:hidden"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <nav aria-label={t.indice} className="flex items-stretch gap-1.5 py-1.5 pl-[max(1.5rem,env(safe-area-inset-left))] pr-[max(1.5rem,env(safe-area-inset-right))] sm:px-8">
        <button
          type="button"
          aria-expanded={aperto === 'indice'}
          aria-controls={pannelloId}
          onClick={() => setAperto((a) => (a === 'indice' ? null : 'indice'))}
          className="flex min-h-11 min-w-0 flex-1 items-center justify-between gap-2 border-2 border-ink bg-white px-3 text-left text-sm font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-1"
        >
          <span className="min-w-0 truncate">
            <span className="tabular-nums">{etichettaBarra}</span>
            {corrente?.luogo && <span className="font-normal text-stone"> · {corrente.luogo}</span>}
          </span>
          <ChevronDown
            size={18}
            aria-hidden
            className={`shrink-0 text-rosso transition-transform duration-150 motion-reduce:transition-none ${aperto === 'indice' ? 'rotate-180' : ''}`}
          />
        </button>
        {haMappa && (
          <button
            type="button"
            aria-expanded={aperto === 'mappa'}
            aria-controls={pannelloId}
            aria-label={aperto === 'mappa' ? t.chiudiMappa : undefined}
            onClick={() => setAperto((a) => (a === 'mappa' ? null : 'mappa'))}
            className={`inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-1.5 border-2 px-3 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-1 ${
              aperto === 'mappa' ? 'border-rosso bg-rosso text-cream' : 'border-ink bg-white text-ink'
            }`}
          >
            {aperto === 'mappa' ? <X size={16} aria-hidden /> : <MapIcon size={16} aria-hidden />}
            {t.mappa}
          </button>
        )}
      </nav>

      {aperto && (
        <div
          id={pannelloId}
          className={`absolute inset-x-0 top-full ${aperto === 'mappa' ? 'max-h-[45vh]' : 'max-h-[min(60vh,32rem)]'} overflow-y-auto overscroll-contain border-b-2 border-ink bg-cream pb-[env(safe-area-inset-bottom)]`}
        >
          {aperto === 'indice' ? (
            <div className="px-6 py-4 sm:px-8">
              {giorni.length > 0 && (
                <ol ref={elencoRef} className="divide-y divide-ink/10 border-y border-ink/10">
                  {giorni.map((g, i) => {
                    const qui = i === giorno
                    return (
                      <li key={g.id}>
                        <a
                          href={`#${g.id}`}
                          onClick={() => setAperto(null)}
                          aria-current={qui ? 'step' : undefined}
                          className={`flex min-h-11 items-center gap-3 py-2 pr-2 text-sm ${qui ? 'font-semibold text-rosso' : 'text-ink'}`}
                        >
                          <span
                            className={`inline-flex h-8 min-w-10 shrink-0 items-center justify-center border-2 px-1 text-xs font-semibold tabular-nums ${
                              qui ? 'border-rosso bg-rosso text-cream' : 'border-ink/25 bg-white text-ink'
                            }`}
                          >
                            {g.numero}
                          </span>
                          <span className="min-w-0">
                            <span className="sr-only">{unita} {g.numero}: </span>
                            {g.luogo || `${unita} ${g.numero}`}
                            {g.data && <span className="ml-1.5 text-xs font-normal tabular-nums text-stone">{g.data}</span>}
                          </span>
                        </a>
                      </li>
                    )
                  })}
                </ol>
              )}
              {sezioni.length > 0 && (
                <>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-stone/85">{t.sezioni}</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {sezioni.map((s, i) => (
                      <li key={s.href}>
                        <a
                          href={s.href}
                          onClick={() => setAperto(null)}
                          aria-current={i === sezione ? 'location' : undefined}
                          className={`inline-flex min-h-11 items-center border-2 px-3 text-sm font-medium ${
                            i === sezione ? 'border-rosso text-rosso' : 'border-ink/25 bg-white text-ink'
                          }`}
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ) : (
            <div className="px-6 py-4 sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone/85">
                {corrente ? `${t.tappaDelGiorno} · ${unita} ${corrente.numero}` : t.mappa}
              </p>
              {corrente && evidenzia.length === 0 && <p className="mt-1 text-sm text-stone">{t.nessunaTappa}</p>}
              <div className="mt-3 border-2 border-ink bg-white p-3">
                <RouteLine
                  tappe={tappe}
                  paeseSlug={paeseSlug}
                  evidenzia={evidenzia}
                  strokeClassName="stroke-alpine/60"
                  labelClassName="text-alpine"
                  className="h-32"
                />
              </div>
              <a
                href="#mappa"
                onClick={() => setAperto(null)}
                className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-rosso underline underline-offset-4"
              >
                {t.mappaCompleta}
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
