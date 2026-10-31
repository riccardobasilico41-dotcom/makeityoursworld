import { CalendarDays, Clock, Gauge, MapPinned, Route, Users, Wallet, Heart } from 'lucide-react'
import { InfoPratiche } from '@/components/scheda/Blocchi'
import { datiRiepilogo } from '@/lib/riepilogo-viaggio'
import type { Viaggio } from '@/lib/viaggi'
import type { TripMeta } from '@/lib/types'

/**
 * Riepilogo in cima al viaggio, subito sotto l'intestazione: stessa griglia con
 * icone delle schede destinazione/esperienza (`InfoPratiche`), così le pagine si
 * somigliano. Le voci senza dato non compaiono. L'id `scheda-riassuntiva` resta
 * quello a cui puntano i link «Quando andare» / «Come spostarsi» delle pagine Paese.
 */
export function RiepilogoViaggio({ viaggio, meta }: { viaggio: Viaggio; meta: TripMeta }) {
  const d = datiRiepilogo(viaggio, meta)
  return (
    <div id="scheda-riassuntiva" className="scroll-mt-4">
      <InfoPratiche
        voci={[
          { label: 'Durata', value: d.durata, icona: Clock },
          { label: 'Quando', value: d.quando, icona: CalendarDays },
          { label: 'Budget indicativo', value: d.budget, icona: Wallet },
          { label: 'Ritmo', value: d.ritmo, icona: Gauge },
          { label: 'Come ci si muove', value: d.muoversi, icona: Route },
          { label: 'Paesi e tappe', value: d.tappe, icona: MapPinned },
          { label: 'Con chi', value: d.conChi, icona: Users },
          { label: 'Adatto a', value: d.adattoA, icona: Heart },
        ]}
      />
    </div>
  )
}
