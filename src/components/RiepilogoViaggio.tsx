import { CalendarDays, Clock, Gauge, MapPinned, Route, Users, Wallet, Heart } from 'lucide-react'
import { InfoPratiche } from '@/components/scheda/Blocchi'
import { datiRiepilogo } from '@/lib/riepilogo-viaggio'
import type { Viaggio } from '@/lib/viaggi'
import type { TripMeta } from '@/lib/types'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    durata: 'Durata',
    quando: 'Quando',
    budget: 'Budget indicativo',
    ritmo: 'Ritmo',
    muoversi: 'Come ci si muove',
    tappe: 'Paesi e tappe',
    conChi: 'Con chi',
    adattoA: 'Adatto a',
  },
  en: {
    durata: 'Length',
    quando: 'When',
    budget: 'Estimated budget',
    ritmo: 'Pace',
    muoversi: 'Getting around',
    tappe: 'Countries and stops',
    conChi: 'Traveling with',
    adattoA: 'Good for',
  },
  es: {
    durata: 'Duración',
    quando: 'Cuándo',
    budget: 'Presupuesto orientativo',
    ritmo: 'Ritmo',
    muoversi: 'Cómo moverse',
    tappe: 'Países y paradas',
    conChi: 'Con quién',
    adattoA: 'Ideal para',
  },
} satisfies Record<Lingua, Record<string, string>>

/**
 * Riepilogo in cima al viaggio, subito sotto l'intestazione: stessa griglia con
 * icone delle schede destinazione/esperienza (`InfoPratiche`), così le pagine si
 * somigliano. Le voci senza dato non compaiono. L'id `scheda-riassuntiva` resta
 * quello a cui puntano i link «Quando andare» / «Come spostarsi» delle pagine Paese.
 */
export async function RiepilogoViaggio({ viaggio, meta }: { viaggio: Viaggio; meta: TripMeta }) {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const d = datiRiepilogo(viaggio, meta, lingua)
  return (
    <div id="scheda-riassuntiva" className="scroll-mt-4">
      <InfoPratiche
        voci={[
          { label: t.durata, value: d.durata, icona: Clock },
          { label: t.quando, value: d.quando, icona: CalendarDays },
          { label: t.budget, value: d.budget, icona: Wallet },
          { label: t.ritmo, value: d.ritmo, icona: Gauge },
          { label: t.muoversi, value: d.muoversi, icona: Route },
          { label: t.tappe, value: d.tappe, icona: MapPinned },
          { label: t.conChi, value: d.conChi, icona: Users },
          { label: t.adattoA, value: d.adattoA, icona: Heart },
        ]}
      />
    </div>
  )
}
