'use client'

import { TripCard, type ViaggioScheda } from '@/components/TripCard'

/** La scheda del viaggio usa la lingua dal contesto del browser: qui la si monta lato client. */
export function ProssimaScheda({ viaggio }: { viaggio: ViaggioScheda }) {
  return <TripCard viaggio={viaggio} />
}
