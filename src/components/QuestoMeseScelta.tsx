'use client'

import { useSyncExternalStore } from 'react'
import Link from '@/components/ui/Link'
import { ArrowRight } from 'lucide-react'
import { TripCard, type ViaggioScheda } from '@/components/TripCard'
import { BinarioCard } from '@/components/BinarioCard'
import { useLingua } from '@/lib/i18n/LinguaProvider'
import { NOMI_MESI } from '@/lib/viaggi-filtri-stato'

export type VoceMese = { mesi: number[]; viaggio: ViaggioScheda }

const T = {
  it: { eyebrow: 'Questo mese', titolo: (m: string) => `Dove ero a ${m}`, sotto: 'Viaggi che ho fatto proprio in questo mese: niente «periodo migliore» inventato, solo quando ci sono andato io.', tutti: (m: string) => `Tutti i viaggi di ${m}` },
  en: { eyebrow: 'This month', titolo: (m: string) => `Where I was in ${m}`, sotto: 'Trips I took in this very month: no made-up “best time to go”, just when I actually went.', tutti: (m: string) => `All ${m} trips` },
  es: { eyebrow: 'Este mes', titolo: (m: string) => `Dónde estaba en ${m}`, sotto: 'Viajes que hice justo en este mes: nada de «mejor época» inventada, solo cuándo fui yo.', tutti: (m: string) => `Todos los viajes de ${m}` },
} as const

const nienteDaAscoltare = () => () => {}

export function QuestoMeseScelta({ voci }: { voci: VoceMese[] }) {
  const lingua = useLingua()
  const t = T[lingua]
  // il mese si legge solo nel browser (sul server la sezione non c'è): la home statica resta giusta tutto l'anno
  const mese = useSyncExternalStore(
    nienteDaAscoltare,
    () => new Date().getMonth() + 1,
    () => null,
  )

  if (!mese) return null
  const delMese = voci.filter((v) => v.mesi.includes(mese)).slice(0, 3)
  if (delMese.length < 2) return null
  const nome = NOMI_MESI[lingua][mese - 1]

  return (
    <section className="border-t border-alpine/10 py-20 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">{t.eyebrow}</p>
      <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] text-ink">{t.titolo(nome)}</h2>
        <p className="max-w-sm text-sm leading-relaxed text-stone">{t.sotto}</p>
      </div>
      <div className="mt-10">
        <BinarioCard etichetta={t.titolo(nome)}>
          {delMese.map((v) => (
            <TripCard key={v.viaggio.slug} viaggio={v.viaggio} />
          ))}
        </BinarioCard>
      </div>
      <Link
        href={`/viaggi?mese=${mese}`}
        className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-rosso hover:underline"
      >
        {t.tutti(nome)}
        <ArrowRight size={15} aria-hidden />
      </Link>
    </section>
  )
}
