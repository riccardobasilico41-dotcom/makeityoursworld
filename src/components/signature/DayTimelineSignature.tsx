'use client'

import { forwardRef } from 'react'
import Link from '@/components/ui/Link'
import { linkDestinazione } from '@/lib/link-destinazione'
import Image from 'next/image'
import { Route, BedDouble, Coins, Gauge, ArrowUpRight, ClipboardList } from 'lucide-react'
import { Prose } from '@/components/Prose'
import { Reveal } from '@/components/Reveal'
import { FieldDossier } from './FieldDossier'
import { dividiGiorno, idGiorno, numeroGiorno, partiGiorno } from './giorni-ancore'
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
    inPratica: 'In pratica',
  },
  en: {
    ritmo: { leggero: 'Easy pace', medio: 'Moderate pace', intenso: 'Intense pace' },
    tratta: 'Route',
    pernottamento: 'Overnight stay',
    costiNoti: 'Known costs',
    scopri: 'Discover the destination',
    inPratica: 'In practice',
  },
  es: {
    ritmo: { leggero: 'Ritmo suave', medio: 'Ritmo medio', intenso: 'Ritmo intenso' },
    tratta: 'Trayecto',
    pernottamento: 'Alojamiento',
    costiNoti: 'Costes conocidos',
    scopri: 'Descubre el destino',
    inPratica: 'En la práctica',
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
        const hrefDestinazione = linkDestinazione(info?.destinazioneSlug, info?.paeseSlug, paeseSlug)
        const numero = numeroGiorno(giorno.titolo, i)
        const { data, luogo } = partiGiorno(giorno.titolo)
        const unita = etichetta(unitaLabel, lingua)
        // «Giorno 0» senza luogo: il titolo resta il titolo; le zone dei roadtrip sono già il luogo
        const titolo = luogo || giorno.titolo
        const { racconto, pratica } = dividiGiorno(giorno.corpo)

        return (
          // <li> figlio diretto di <ol> (HTML valido); l'animazione sta dentro, sul contenuto.
          // scroll-mt più alto della barra sticky dell'indice sul telefono (circa 60 px)
          <li key={giorno.titolo} id={idGiorno(i)} className="scroll-mt-20 lg:scroll-mt-8">
            <Reveal className="grid gap-4 sm:grid-cols-[7rem_1fr] sm:gap-10">
              <div className="flex items-center sm:block">
                <span aria-hidden="true" className="font-display text-6xl font-medium leading-none text-alpine/20 sm:text-7xl">
                  {numero.padStart(2, '0')}
                </span>
                {info && (
                  <span
                    className={`ml-4 inline-flex h-fit items-center gap-1.5 rounded-none px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider sm:ml-0 sm:mt-3 ${INTENSITA_CLASSES[info.intensita]}`}
                  >
                    <Gauge size={12} aria-hidden />
                    {t.ritmo[info.intensita]}
                  </span>
                )}
              </div>

              <div className="min-w-0">
                {/* 1. Giorno (e data, se il titolo la porta) → 2. Località */}
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rosso">
                  {unita} {numero}
                  {data && <span className="ml-2 font-normal tabular-nums tracking-normal text-stone">{data}</span>}
                </p>
                <h3 className="mt-1.5 font-display text-2xl font-medium leading-tight text-ink sm:text-3xl">{titolo}</h3>

                {/* tratta, notte, costi: dove si è e dove si dorme, prima del racconto */}
                {info && (info.tratta || info.pernottamento || info.costiNoti) && (
                  <dl className="mt-4 grid gap-3 border-y-2 border-ink/10 py-4 text-sm sm:grid-cols-3">
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
                        <dd className="flex flex-wrap items-center gap-1.5 text-ink">{info.pernottamento}</dd>
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

                {/* 3. Racconto e attività, così come sono nel markdown */}
                {racconto && <Prose className="mt-5 text-sm">{racconto}</Prose>}

                {/* 4. Consigli: il blocco «In pratica» del markdown, staccato dal racconto */}
                {pratica && (
                  <div className="mt-6 border-2 border-ink bg-cream-dark/50 p-4 sm:p-5">
                    <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-rosso">
                      <ClipboardList size={14} aria-hidden />
                      {t.inPratica}
                    </p>
                    <Prose className="mt-2 text-sm prose-ul:my-0 prose-li:my-1">{pratica}</Prose>
                  </div>
                )}

                {hrefDestinazione && (
                  <Link
                    href={hrefDestinazione}
                    className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-rosso hover:text-rosso-dark"
                  >
                    {t.scopri}
                    <ArrowUpRight size={14} aria-hidden />
                  </Link>
                )}

                {/* 5. Foto del giorno (solo scatti del viaggio, mai stock) dopo il testo: sul
                    telefono il racconto e le info arrivano prima. Senza foto, il Field Dossier.
                    Sempre impilata sotto, mai in una colonna affiancata (con tre livelli di grid
                    annidati la soglia `lg:` si calcolava sullo schermo e le colonne si sovrapponevano). */}
                {info?.immagine ? (
                  <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-none sm:aspect-[16/10]">
                    <Image
                      src={info.immagine}
                      alt={info.imageAlt ?? titolo}
                      fill
                      sizes="(min-width: 1280px) 34rem, (min-width: 640px) 70vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <FieldDossier
                    size="sm"
                    eyebrow={`${unita} ${numero}`}
                    titolo={info?.destinazioneSlug ?? titolo}
                    meta={info?.intensita ? t.ritmo[info.intensita] : undefined}
                    className="mt-6 h-28"
                  />
                )}
              </div>
            </Reveal>
          </li>
        )
      })}
    </ol>
  )
})
