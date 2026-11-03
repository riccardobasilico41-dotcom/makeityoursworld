'use client'

import NextLink from 'next/link'
import type { ComponentProps } from 'react'
import { localizza } from '@/lib/i18n/percorsi'
import { useLingua } from '@/lib/i18n/LinguaProvider'

/**
 * Link interno che segue la lingua della pagina: nel codice si scrive il percorso canonico
 * italiano (/viaggi/giappone-itinerario), qui diventa /trips/japan-itinerary o
 * /es/viajes/…. Sostituisce next/link in tutto il sito.
 */
export default function Link({ href, ...resto }: ComponentProps<typeof NextLink>) {
  const lingua = useLingua()
  const h = typeof href === 'string' ? localizza(href, lingua) : href
  return <NextLink href={h} {...resto} />
}
