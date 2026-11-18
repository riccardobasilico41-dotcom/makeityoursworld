import Image from 'next/image'
import { filigrane } from '@/content/filigrane'
import { DopoIlCaricamento } from './DopoIlCaricamento'

/**
 * Filigrana del Paese: uno o due motivi enormi e tenui, fermi ai bordi dello schermo dietro
 * il contenuto mentre si scorre (come i ciliegi e il samurai dei vecchi programmi di viaggio).
 * Decorativa: aria-hidden, nessun clic, nascosta a chi stampa. Arriva a pagina caricata e a
 * qualità ridotta (con l'opacità al 26-30% la differenza non si vede): prima rallentava la copertina.
 */
export function Filigrana({ paese }: { paese?: string }) {
  const f = paese ? filigrane[paese] : undefined
  if (!f || (!f.a && !f.b)) return null
  return (
    <DopoIlCaricamento>
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden print:hidden">
      {f.a && (
        <div className="absolute -left-[2vw] top-[6vh] h-[62vh] w-[48vw] max-w-[820px] opacity-[0.26] sm:opacity-30">
          <Image src={f.a.src} alt="" fill sizes="(max-width: 640px) 48vw, 40vw" quality={50} fetchPriority="low" className="object-contain object-left-top" />
        </div>
      )}
      {f.b && (
        <div className="absolute -bottom-[2vh] -right-[2vw] h-[68vh] w-[46vw] max-w-[820px] opacity-[0.24] sm:opacity-[0.28]">
          <Image src={f.b.src} alt="" fill sizes="(max-width: 640px) 46vw, 40vw" quality={50} fetchPriority="low" className="object-contain object-right-bottom" />
        </div>
      )}
    </div>
    </DopoIlCaricamento>
  )
}
