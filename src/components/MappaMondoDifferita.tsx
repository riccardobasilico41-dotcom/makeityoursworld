'use client'

import { useEffect, useRef, useState } from 'react'
import type { DatiMappaMondo } from '@/lib/mappa-mondo'
import { MappaMondo } from './MappaMondo'
import { useLingua } from '@/lib/i18n/LinguaProvider'
import { localizza } from '@/lib/i18n/percorsi'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: { caricamento: 'Mappa del mondo in caricamento' },
  en: { caricamento: 'Loading world map' },
  es: { caricamento: 'Cargando el mapa del mundo' },
} satisfies Record<Lingua, Record<string, string>>

/**
 * Riserva lo spazio della mappa (stesso rapporto) e scarica /mappa-mondo.json quando
 * la sezione si avvicina allo schermo; fino ad allora un riquadro vuoto color mare.
 */
export function MappaMondoDifferita({ w, h }: { w: number; h: number }) {
  const lingua = useLingua()
  const ref = useRef<HTMLDivElement>(null)
  const [dati, setDati] = useState<DatiMappaMondo | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let annullato = false
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        fetch(localizza('/mappa-mondo.json', lingua))
          .then((r) => r.json())
          .then((d: DatiMappaMondo) => !annullato && setDati(d))
          .catch(() => {})
      },
      { rootMargin: '600px 0px' },
    )
    io.observe(el)
    return () => {
      annullato = true
      io.disconnect()
    }
  }, [lingua])

  if (dati) return <MappaMondo w={dati.w} h={dati.h} terre={dati.terre} graticola={dati.graticola} pins={dati.pins} aree={dati.aree} />
  return (
    <div ref={ref} className="mt-8">
      <div
        className="w-full animate-pulse border-2 border-ink motion-reduce:animate-none"
        style={{ aspectRatio: `${w} / ${h}`, backgroundColor: '#e2e7e6' }}
        aria-label={T[lingua].caricamento}
      />
      <div className="mt-3 h-10" aria-hidden />
    </div>
  )
}
