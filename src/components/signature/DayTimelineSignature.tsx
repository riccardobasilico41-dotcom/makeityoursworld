'use client'

import { forwardRef } from 'react'
import Link from '@/components/ui/Link'
import Image from 'next/image'
import { Route, BedDouble, Coins, Gauge, ArrowUpRight } from 'lucide-react'
import { Prose } from '@/components/Prose'
import { Reveal } from '@/components/Reveal'
import { FieldDossier } from './FieldDossier'
import { idGiorno, numeroGiorno } from './giorni-ancore'
import type { ViaggioGiorno } from '@/lib/viaggi'
import type { GiornoMeta, IntensitaGiorno } from '@/lib/types'
import { useLingua } from '@/lib/i18n/LinguaProvider'
import { etichetta } from '@/lib/i18n/etichette'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    ritmo: { leggero: 'Ritmo leggero', medio: 'Ritmo medio', intenso: 'Ritmo intenso' },
    tratta: 'Tratta',
    pernottamento: 'Pernottamento',
    costiNoti: 'Costi noti',
    scopri: 'Scopri la destinazione',
  },
  en: {
    ritmo: { leggero: 'Easy pace', medio: 'Moderate pace', intenso: 'Intense pace' },
    tratta: 'Route',
    pernottamento: 'Overnight stay',
    costiNoti: 'Known costs',
    scopri: 'Discover the destination',
  },
  es: {
    ritmo: { leggero: 'Ritmo suave', medio: 'Ritmo medio', intenso: 'Ritmo intenso' },
    tratta: 'Trayecto',
    pernottamento: 'Alojamiento',
    costiNoti: 'Costes conocidos',
    scopri: 'Descubre el destino',
  },
} satisfies Record<Lingua, { ritmo: Record<IntensitaGiorno, string> } & Record<string, string | Record<string, string>>>

const INTENSITA_CLASSES: Record<IntensitaGiorno, string> = {
  leggero: 'bg-alpine/10 text-alpine',
  medio: 'bg-rosso/10 text-rosso-dark',
  intenso: 'bg-rosso text-cream',
}

/**
 * Presentazione giorno-per-giorno di Signature Editorial: stesso contenuto e
 * stesso `GiornoMeta` del `DayTimeline` esistente (nessuna perdita di dati),
 * ma il numero del giorno diventa un vero ancoraggio tipografico invece di
 * un badge circolare. Un giorno con `info.immagine` (una foto reale del
 * viaggio, non stock) mostra quella; un giorno senza porta un Field Dossier
 * invece di restare una card bianca vuota.
 */
export const DayTimelineSignature = forwardRef<
  HTMLOListElement,
  { giorni: ViaggioGiorno[]; meta: GiornoMeta[]; paeseSlug: string; unitaLabel?: string }
>(function DayTimelineSignature({ giorni, meta, paeseSlug, unitaLabel = 'Giorno' }, ref) {
  const lingua = useLingua()
  const t = T[lingua]
  return (
    <ol ref={ref} className="space-y-16 sm:space-y-24">
      {giorni.map((giorno, i) => {
        const info = meta.find((m) => m.titoloGiorno === giorno.titolo)
        const numero = numeroGiorno(giorno.titolo, i)
        const sottotitolo = giorno.titolo.replace(/^(?:Giorno|Day|Día)\s+\d+\s*[—-]\s*/i, '')

        return (
          // <li> figlio diretto di <ol> (HTML valido); l'animazione sta dentro, sul contenuto
          <li key={giorno.titolo} id={idGiorno(i)} className="scroll-mt-20 lg:scroll-mt-24">
            <Reveal className="grid gap-6 sm:grid-cols-[7rem_1fr] sm:gap-10">
              <div className="flex sm:block">
                <span className="font-display text-6xl font-medium leading-none text-alpine/20 sm:text-7xl">
                  {numero.padStart(2, '0')}
                </span>
                {info && (
                  <span
                    className={`ml-4 inline-flex h-fit items-center gap-1.5 rounded-none px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider sm:ml-0 sm:mt-3 ${INTENSITA_CLASSES[info.intensita]}`}
                  >
                    <Gauge size={12} />
                    {t.ritmo[info.intensita]}
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-display text-2xl font-medium leading-tight text-ink sm:text-3xl">
                  {sottotitolo}
                </h3>

                {/* Foto reale se questo giorno ne ha una (mai stock: solo scatti del
                    viaggio), altrimenti Field Dossier — impilato sotto il titolo, mai
                    in una colonna affiancata al testo: con tre livelli di grid già
                    annidati sopra (pagina → sezione giorni → questo giorno), un'altra
                    colonna `lg:` finiva per calcolare la soglia sulla larghezza dello
                    schermo invece che sullo spazio realmente disponibile qui, e le due
                    colonne si sovrapponevano. */}
                {info?.immagine ? (
                  <div className="relative mt-5 aspect-[4/3] w-full overflow-hidden rounded-none sm:aspect-[16/10]">
                    <Image
                      src={info.immagine}
                      alt={info.imageAlt ?? sottotitolo}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <FieldDossier
                    size="sm"
                    eyebrow={`${etichetta(unitaLabel, lingua)} ${numero}`}
                    titolo={info?.destinazioneSlug ?? sottotitolo}
                    meta={info?.intensita ? t.ritmo[info.intensita] : undefined}
                    className="mt-5 h-28"
                  />
                )}

                <div className="mt-6">
                  {info && (
                    <dl className="grid gap-3 border-b border-alpine/10 pb-5 text-sm sm:grid-cols-3">
                      {info.tratta && (
                        <div className="relative pl-[23px]">
                          <dt className="text-xs text-stone/85">
                            <Route size={15} aria-hidden="true" className="absolute left-0 top-0.5 text-stone/60" />
                            {t.tratta}
                          </dt>
                          <dd className="text-ink">{info.tratta}</dd>
                        </div>
                      )}
                      {info.pernottamento && (
                        <div className="relative pl-[23px]">
                          <dt className="text-xs text-stone/85">
                            <BedDouble size={15} aria-hidden="true" className="absolute left-0 top-0.5 text-stone/60" />
                            {t.pernottamento}
                          </dt>
                          <dd className="flex flex-wrap items-center gap-1.5 text-ink">
                            {info.pernottamento}
                          </dd>
                        </div>
                      )}
                      {info.costiNoti && (
                        <div className="relative pl-[23px]">
                          <dt className="text-xs text-stone/85">
                            <Coins size={15} aria-hidden="true" className="absolute left-0 top-0.5 text-stone/60" />
                            {t.costiNoti}
                          </dt>
                          <dd className="text-ink">{info.costiNoti}</dd>
                        </div>
                      )}
                    </dl>
                  )}

                  <Prose className="mt-5 text-sm">{giorno.corpo}</Prose>

                  {info?.destinazioneSlug && (
                    <Link
                      href={`/destinazioni/${paeseSlug}/${info.destinazioneSlug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-rosso hover:text-rosso-dark"
                    >
                      {t.scopri}
                      <ArrowUpRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          </li>
        )
      })}
    </ol>
  )
})
