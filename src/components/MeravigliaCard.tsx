import Link from 'next/link'
import Image from 'next/image'
import { Landmark } from 'lucide-react'
import type { Meraviglia } from '@/lib/types'

/** `subito`: la prima scheda in alto nella pagina (elemento LCP sul telefono) si carica senza lazy-loading. */
export function MeravigliaCard({ meraviglia, subito = false }: { meraviglia: Meraviglia; subito?: boolean }) {
  return (
    <Link
      href={`/meraviglie/${meraviglia.slug}`}
      className="group flex w-full flex-col overflow-hidden rounded-none border border-alpine/10 bg-white transition-[border-color,transform] duration-150 ease-out hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine focus-visible:ring-offset-2 active:scale-[0.99] motion-reduce:active:scale-100"
    >
      <div
        role={meraviglia.heroImage ? undefined : 'img'}
        aria-label={meraviglia.heroImage ? undefined : meraviglia.heroImageAlt}
        className="relative flex aspect-[4/3] items-end overflow-hidden bg-gradient-to-br from-alpine to-alpine-dark p-5 text-cream"
      >
        {meraviglia.heroImage ? (
          <Image
            src={meraviglia.heroImage}
            alt={meraviglia.heroImageAlt}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 46vw, 82vw"
            loading={subito ? 'eager' : undefined}
            fetchPriority={subito ? 'high' : undefined}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <Landmark
            size={104}
            strokeWidth={1}
            className="pointer-events-none absolute -right-3 -top-3 text-cream/10 transition-transform duration-700 group-hover:scale-110"
          />
        )}
        {meraviglia.heroImage && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
        )}
        <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.18em] text-cream/70">
          {meraviglia.paese}
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-6">
        <h3 className="font-display text-xl font-medium leading-tight text-alpine">{meraviglia.nome}</h3>
        <p className="text-sm leading-relaxed text-stone line-clamp-3">{meraviglia.descrizione}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-xs text-stone/85">{meraviglia.citta}</span>
          <span className="text-sm font-medium text-rosso">Guida completa</span>
        </div>
      </div>
    </Link>
  )
}
