import type { Meraviglia } from './types'
import type { Lingua } from './i18n/config'
import { meraviglie } from '@/content/meraviglie'
import * as EN from '@/content/i18n/en/indice'
import * as ES from '@/content/i18n/es/indice'

const cache: Partial<Record<Lingua, Meraviglia[]>> = { it: meraviglie }

/** Meraviglie nella lingua: il testo tradotto sopra quello italiano, foto e slug sempre dall'italiano. */
export function getAllMeraviglie(lingua: Lingua): Meraviglia[] {
  if (cache[lingua]) return cache[lingua]!
  const tr = (lingua === 'en' ? EN : ES).meraviglie ?? []
  const mappa = new Map(tr.map((m) => [m.slug, m]))
  cache[lingua] = meraviglie.map((m) => {
    const t = mappa.get(m.slug)
    return t ? { ...m, ...t, slug: m.slug, heroImage: m.heroImage, visitataPersonalmente: m.visitataPersonalmente } : m
  })
  return cache[lingua]!
}

export function getMeraviglia(slug: string, lingua: Lingua): Meraviglia | undefined {
  return getAllMeraviglie(lingua).find((m) => m.slug === slug)
}
