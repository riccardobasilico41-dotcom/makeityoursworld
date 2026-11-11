import Image from 'next/image'
import type { ReactNode } from 'react'

/** Card scura del ricordo di Rick (stile Malesia): virgolette rosse, etichetta, firma con avatar.
 *  Sincrona e senza dipendenze server: si usa anche dentro i componenti client (Prose). */
export function CardRicordo({ etichetta, children, className = '' }: { etichetta: string; children: ReactNode; className?: string }) {
  return (
    <figure className={`not-prose relative scheda bg-alpine p-6 text-cream sm:p-8 ${className}`}>
      <span aria-hidden className="absolute -top-6 left-5 font-display text-7xl leading-none text-rosso">
        «
      </span>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/60">{etichetta}</p>
      <blockquote className="mt-3 font-display text-xl italic leading-relaxed text-cream sm:text-2xl">{children}</blockquote>
      <figcaption className="mt-5 flex items-center gap-3 text-sm text-cream/80">
        <Image
          src="/images/chi-sono/rick-avatar.jpg"
          alt=""
          width={36}
          height={36}
          className="size-9 rounded-full border-2 border-cream object-cover"
        />
        Rick
      </figcaption>
    </figure>
  )
}
