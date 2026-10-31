'use client'

import { useMemo, useRef } from 'react'
import { DayTimelineSignature } from './DayTimelineSignature'
import { RouteProgress } from './RouteProgress'
import { GiorniBarraMobile } from './GiorniBarraMobile'
import { idGiorno, numeroGiorno } from './giorni-ancore'
import type { ViaggioGiorno } from '@/lib/viaggi'
import type { GiornoMeta } from '@/lib/types'

/**
 * Contenitore che tiene insieme la timeline dei giorni e il suo segnaposto
 * di percorso: il riferimento allo scroll deve essere condiviso dai due, e
 * qui restano vicini nel DOM (colonna larga + colonna stretta sticky),
 * invece che a distanza tra corpo dell'articolo e sidebar lontana.
 */
export function DaySectionSignature({
  giorni,
  meta,
  paeseSlug,
  unitaLabel,
}: {
  giorni: ViaggioGiorno[]
  meta: GiornoMeta[]
  paeseSlug: string
  /** Vedi `TripMeta.unitaGiorniLabel` — sostituisce "Giorno" per i viaggi non organizzati per giorni di calendario. */
  unitaLabel?: string
}) {
  const containerRef = useRef<HTMLOListElement>(null)
  const ancore = useMemo(
    () => giorni.map((g, i) => ({ numero: numeroGiorno(g.titolo, i), id: idGiorno(i) })),
    [giorni]
  )

  return (
    <div className="lg:grid lg:grid-cols-[1fr_7rem] lg:gap-8">
      <GiorniBarraMobile giorni={ancore} unitaLabel={unitaLabel} />
      <DayTimelineSignature ref={containerRef} giorni={giorni} meta={meta} paeseSlug={paeseSlug} unitaLabel={unitaLabel} />
      <div className="lg:sticky lg:top-24 lg:self-start">
        <RouteProgress totaleGiorni={giorni.length} containerRef={containerRef} label={unitaLabel} />
      </div>
    </div>
  )
}
