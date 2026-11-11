'use client'

import { useMemo, useRef } from 'react'
import { DayTimelineSignature } from './DayTimelineSignature'
import { RouteLine } from './RouteLine'
import { MiniMappaRotta } from './rotta-client'
import { useAncoraAttiva } from './useAncoraAttiva'
import { idGiorno } from './giorni-ancore'
import type { ViaggioGiorno } from '@/lib/viaggi'
import type { GiornoMeta, TappaMappa } from '@/lib/types'
import { useLingua } from '@/lib/i18n/LinguaProvider'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: { giorno: 'Giorno', tappaDelGiorno: 'Tappa del giorno', mappaCompleta: 'Rotta completa' },
  en: { giorno: 'Day', tappaDelGiorno: "Today's stop", mappaCompleta: 'Full route' },
  es: { giorno: 'Día', tappaDelGiorno: 'Parada del día', mappaCompleta: 'Ruta completa' },
} satisfies Record<Lingua, Record<string, string>>

/**
 * Contenitore che tiene insieme la timeline dei giorni e il suo segnaposto di percorso:
 * il riferimento allo scroll deve essere condiviso dai due. Da `xl` la colonna stretta a
 * destra è sticky e affianca all'itinerario la rotta con la tappa del giorno che si legge
 * evidenziata; sotto `xl` l'itinerario prende tutta la larghezza e la mappa si apre dalla
 * barra dell'indice (`GiorniBarraMobile`) o dalla sezione «La rotta».
 */
export function DaySectionSignature({
  giorni,
  meta,
  paeseSlug,
  unitaLabel,
  tappe = [],
  tappeGiorni = [],
  rottaSlug,
}: {
  giorni: ViaggioGiorno[]
  meta: GiornoMeta[]
  paeseSlug: string
  /** Vedi `TripMeta.unitaGiorniLabel` — sostituisce "Giorno" per i viaggi non organizzati per giorni di calendario. */
  unitaLabel?: string
  tappe?: TappaMappa[]
  /** Per ogni giorno, gli indici delle sue tappe in `tappe`. */
  tappeGiorni?: number[][]
  /** slug del viaggio, se ha la mappa vera della rotta (src/lib/mappa-rotta.ts): al posto della linea astratta */
  rottaSlug?: string
}) {
  const lingua = useLingua()
  const containerRef = useRef<HTMLOListElement>(null)
  const ids = useMemo(() => giorni.map((_, i) => idGiorno(i)), [giorni])
  const giorno = useAncoraAttiva(ids, 'itinerario-giorno-per-giorno')
  const evidenzia = giorno >= 0 ? (tappeGiorni[giorno] ?? []) : []
  const nomi = [...new Set(evidenzia.map((i) => tappe[i]?.nome).filter(Boolean))]

  return (
    <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_14rem] xl:gap-10">
      <DayTimelineSignature ref={containerRef} giorni={giorni} meta={meta} paeseSlug={paeseSlug} unitaLabel={unitaLabel} />
      <div className="hidden xl:sticky xl:top-6 xl:block xl:self-start">
        {/* stesso giorno attivo dell'indice laterale e della barra mobile (useAncoraAttiva) */}
        <p className="font-mono text-xs text-stone" aria-hidden="true">
          {(unitaLabel ?? T[lingua].giorno)} <span className="text-2xl text-ink">{giorno >= 0 ? giorno + 1 : 1}</span> / {giorni.length}
        </p>
        {tappe.length > 0 && (
          <div className="mt-6 border-2 border-ink bg-white p-3">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone/85">{T[lingua].tappaDelGiorno}</p>
            <p className="mt-1 min-h-10 font-display text-sm leading-snug text-rosso">{nomi.join(' · ') || '—'}</p>
            {rottaSlug ? (
              <MiniMappaRotta slug={rottaSlug} evidenzia={evidenzia} className="mt-2" />
            ) : (
              <RouteLine
                tappe={tappe}
                paeseSlug={paeseSlug}
                evidenzia={evidenzia}
                elenco={false}
                strokeClassName="stroke-alpine/60"
                labelClassName="text-alpine"
                className="mt-2 h-28"
              />
            )}
            <a href="#mappa" className="mt-2 inline-flex min-h-11 items-center text-xs font-semibold text-rosso underline underline-offset-4">
              {T[lingua].mappaCompleta}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
