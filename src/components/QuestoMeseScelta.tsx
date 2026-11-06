'use client'

import { useId, useRef, useState, useSyncExternalStore, type KeyboardEvent } from 'react'
import Link from '@/components/ui/Link'
import { ArrowRight } from 'lucide-react'
import { TripCard, type ViaggioScheda } from '@/components/TripCard'
import { BinarioCard } from '@/components/BinarioCard'
import { useLingua } from '@/lib/i18n/LinguaProvider'
import { NOMI_MESI } from '@/lib/viaggi-filtri-stato'

/** `mesi`: quando ci sono andato davvero; `andare`: i mesi in cui il viaggio è tra i consigliati della home. */
export type VoceMese = { mesi: number[]; andare: number[]; viaggio: ViaggioScheda }

type Scheda = 'andare' | 'ero'

const T = {
  it: {
    eyebrow: 'Questo mese',
    titolo: (m: string) => `In viaggio a ${m}`,
    schede: 'Viaggi del mese',
    andare: (m: string) => `Dove andare a ${m}`,
    ero: (m: string) => `Dove ero a ${m}`,
    sottoAndare: 'Itinerari il cui periodo consigliato comprende questo mese.',
    sottoEro: 'Viaggi che ho fatto proprio in questo mese: niente «periodo migliore», solo quando ci sono andato io.',
    tuttiAndare: (m: string) => `Tutti i viaggi consigliati a ${m}`,
    tuttiEro: (m: string) => `Tutti i viaggi che ho fatto a ${m}`,
  },
  en: {
    eyebrow: 'This month',
    titolo: (m: string) => `Travelling in ${m}`,
    schede: 'Trips for this month',
    andare: (m: string) => `Where to go in ${m}`,
    ero: (m: string) => `Where I was in ${m}`,
    sottoAndare: 'Itineraries whose best time to go includes this month.',
    sottoEro: 'Trips I took in this very month: no “best time to go”, just when I actually went.',
    tuttiAndare: (m: string) => `All trips best done in ${m}`,
    tuttiEro: (m: string) => `All the trips I took in ${m}`,
  },
  es: {
    eyebrow: 'Este mes',
    titolo: (m: string) => `De viaje en ${m}`,
    schede: 'Viajes del mes',
    andare: (m: string) => `Adónde ir en ${m}`,
    ero: (m: string) => `Dónde estaba en ${m}`,
    sottoAndare: 'Itinerarios cuya mejor época incluye este mes.',
    sottoEro: 'Viajes que hice justo en este mes: nada de «mejor época», solo cuándo fui yo.',
    tuttiAndare: (m: string) => `Todos los viajes recomendados en ${m}`,
    tuttiEro: (m: string) => `Todos los viajes que hice en ${m}`,
  },
} as const

const FOCUS = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2'
const nienteDaAscoltare = () => () => {}

export function QuestoMeseScelta({ voci }: { voci: VoceMese[] }) {
  const lingua = useLingua()
  const t = T[lingua]
  const id = useId()
  const [scelta, setScelta] = useState<Scheda>('andare')
  const tabs = useRef<Record<Scheda, HTMLButtonElement | null>>({ andare: null, ero: null })
  // il mese si legge solo nel browser (sul server la sezione non c'è): la home statica resta giusta tutto l'anno
  const mese = useSyncExternalStore(
    nienteDaAscoltare,
    () => new Date().getMonth() + 1,
    () => null,
  )

  if (!mese) return null
  const liste: Record<Scheda, ViaggioScheda[]> = {
    andare: voci.filter((v) => v.andare.includes(mese)).map((v) => v.viaggio),
    ero: voci.filter((v) => v.mesi.includes(mese)).slice(0, 3).map((v) => v.viaggio),
  }
  // una scheda con meno di 2 viaggi non c'è; se non ne resta nessuna, nemmeno la sezione
  const disponibili = (['andare', 'ero'] as const).filter((s) => liste[s].length >= 2)
  if (!disponibili.length) return null
  const attiva = disponibili.includes(scelta) ? scelta : disponibili[0]
  const nome = NOMI_MESI[lingua][mese - 1]
  const conSchede = disponibili.length > 1

  const tastiera = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return
    e.preventDefault()
    const i = disponibili.indexOf(attiva)
    const prossima =
      e.key === 'Home' ? disponibili[0] : e.key === 'End' ? disponibili[disponibili.length - 1] : disponibili[(i + (e.key === 'ArrowRight' ? 1 : disponibili.length - 1)) % disponibili.length]
    setScelta(prossima)
    tabs.current[prossima]?.focus()
  }

  const titoloScheda = attiva === 'andare' ? t.andare(nome) : t.ero(nome)
  const pannello = (
    <>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone">{attiva === 'andare' ? t.sottoAndare : t.sottoEro}</p>
      <div className="mt-8">
        <BinarioCard etichetta={titoloScheda}>
          {liste[attiva].map((v) => (
            <TripCard key={v.slug} viaggio={v} confronto={attiva === 'andare'} />
          ))}
        </BinarioCard>
      </div>
      <Link
        href={attiva === 'andare' ? `/viaggi?quando=${mese}` : `/viaggi?mese=${mese}`}
        className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-rosso hover:underline"
      >
        {attiva === 'andare' ? t.tuttiAndare(nome) : t.tuttiEro(nome)}
        <ArrowRight size={15} aria-hidden />
      </Link>
    </>
  )

  return (
    <section aria-labelledby={`${id}-titolo`} className="border-t border-alpine/10 sezione">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">{t.eyebrow}</p>
      <h2 id={`${id}-titolo`} className="mt-3 font-display text-[clamp(1.8rem,3vw,2.6rem)] text-ink">
        {conSchede ? t.titolo(nome) : titoloScheda}
      </h2>
      {conSchede ? (
        <>
          <div role="tablist" aria-label={t.schede} className="mt-5 flex flex-wrap gap-2">
            {disponibili.map((s) => (
              <button
                key={s}
                ref={(el) => {
                  tabs.current[s] = el
                }}
                type="button"
                role="tab"
                id={`${id}-tab-${s}`}
                aria-selected={attiva === s}
                aria-controls={`${id}-pannello`}
                tabIndex={attiva === s ? 0 : -1}
                onClick={() => setScelta(s)}
                onKeyDown={tastiera}
                className={`inline-flex min-h-11 items-center border-2 border-ink px-3.5 text-sm font-semibold transition-colors duration-150 ${
                  attiva === s ? 'bg-ink text-cream' : 'bg-white text-ink hover:bg-ink hover:text-cream'
                } ${FOCUS}`}
              >
                {s === 'andare' ? t.andare(nome) : t.ero(nome)}
              </button>
            ))}
          </div>
          <div role="tabpanel" id={`${id}-pannello`} aria-labelledby={`${id}-tab-${attiva}`}>
            {pannello}
          </div>
        </>
      ) : (
        pannello
      )}
    </section>
  )
}
