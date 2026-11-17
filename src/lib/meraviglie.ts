import type { Meraviglia } from './types'
import type { Lingua } from './i18n/config'
import { meraviglie } from '@/content/meraviglie'
import * as EN from '@/content/i18n/en/indice'
import * as ES from '@/content/i18n/es/indice'
import { GUIDE } from '@/content/meraviglie-guide'

const cache: Partial<Record<Lingua, Meraviglia[]>> = {}

/** La guida completa di ogni lingua; per i campi non tradotti vale quella italiana. */
const conGuida = (m: Meraviglia, lingua: Lingua): Meraviglia => ({ ...m, ...GUIDE.it[m.slug], ...GUIDE[lingua][m.slug] })

/** Meraviglie nella lingua: il testo tradotto sopra quello italiano, foto e slug sempre dall'italiano. */
export function getAllMeraviglie(lingua: Lingua): Meraviglia[] {
  if (cache[lingua]) return cache[lingua]!
  if (lingua === 'it') return (cache.it = meraviglie.map((m) => conGuida(m, 'it')))
  const tr = (lingua === 'en' ? EN : ES).meraviglie ?? []
  const mappa = new Map(tr.map((m) => [m.slug, m]))
  cache[lingua] = meraviglie.map((m) => {
    const t = mappa.get(m.slug)
    const base = t ? { ...m, ...t, slug: m.slug, heroImage: m.heroImage, visitataPersonalmente: m.visitataPersonalmente } : m
    return conGuida(base, lingua)
  })
  return cache[lingua]!
}

export function getMeraviglia(slug: string, lingua: Lingua): Meraviglia | undefined {
  return getAllMeraviglie(lingua).find((m) => m.slug === slug)
}
