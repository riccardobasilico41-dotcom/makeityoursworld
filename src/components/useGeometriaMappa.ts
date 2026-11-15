'use client'

import { useEffect, useState, type RefObject } from 'react'
import type { DatiAtlante } from './MappaAtlante'

/** Contorni di una mappa Paese, per id (vedi src/lib/mappa-geometria.ts). */
export type GeometriaMappa = {
  path: string
  terra?: string
  vicini: Record<string, string>
  interni: Record<string, string>
  fiumi: Record<string, string>
  laghi: Record<string, string>
}

/**
 * Scarica i contorni della mappa quando il riquadro arriva a 800 px dallo schermo: la pagina
 * arriva senza (erano la metà dell'HTML delle pagine Paese) e la mappa li riceve prima di vedersi.
 */
export function useGeometriaMappa(url: string | undefined, ref: RefObject<Element | null>): GeometriaMappa | null {
  const [geo, setGeo] = useState<GeometriaMappa | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!url || !el) return
    let annullato = false
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        fetch(url)
          .then((r) => (r.ok ? r.json() : null))
          .then((g: GeometriaMappa | null) => !annullato && g && setGeo(g))
          .catch(() => {})
      },
      { rootMargin: '800px 0px' },
    )
    io.observe(el)
    return () => {
      annullato = true
      io.disconnect()
    }
  }, [url, ref])
  return geo
}

/** Rimette i contorni scaricati sull'atlante. */
export function conContorni(a: DatiAtlante, g: GeometriaMappa): DatiAtlante {
  const su = <V extends { id: string; path: string }>(voci: V[], d: Record<string, string>) => voci.map((v) => ({ ...v, path: d[v.id] ?? v.path }))
  return {
    ...a,
    terra: g.terra ?? a.terra,
    vicini: su(a.vicini, g.vicini),
    interni: a.interni && su(a.interni, g.interni),
    fiumi: su(a.fiumi, g.fiumi),
    laghi: su(a.laghi, g.laghi),
  }
}
