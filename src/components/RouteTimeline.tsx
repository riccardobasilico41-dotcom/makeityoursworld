import Link from '@/components/ui/Link'
import { linkDestinazione } from '@/lib/link-destinazione'
import { MapPin } from 'lucide-react'
import type { TappaMappa } from '@/lib/types'

/**
 * Timeline geografica stilizzata (CSS, nessuna libreria di mappe): una sequenza
 * verticale di tappe collegate da una linea, cliccabili quando esiste una
 * destinazione collegata. Pensata per essere sostituita in futuro da una vera
 * mappa, senza cambiare l'API del componente (props `tappe` + `paeseSlug`).
 */
export function RouteTimeline({ tappe, paeseSlug }: { tappe: TappaMappa[]; paeseSlug: string }) {
  return (
    <ol className="relative border-l border-alpine/15 pl-8 sm:pl-10">
      {tappe.map((tappa, i) => {
        const content = (
          <>
            <span className="absolute -left-[calc(2rem+5px)] top-1 flex h-[11px] w-[11px] items-center justify-center rounded-full border-2 border-alpine bg-cream sm:-left-[calc(2.5rem+5px)]" />
            <span className="font-display text-base font-medium text-ink">{tappa.nome}</span>
          </>
        )

        const href = linkDestinazione(tappa.destinazioneSlug, tappa.paeseSlug, paeseSlug)
        return (
          <li key={`${tappa.nome}-${i}`} className="relative pb-8 last:pb-0">
            {href ? (
              <Link
                href={href}
                className="group inline-flex items-center gap-2 text-ink transition-colors hover:text-rosso"
              >
                {content}
                <MapPin
                  size={14}
                  className="text-stone/40 transition-colors group-hover:text-rosso"
                />
              </Link>
            ) : (
              <span className="inline-flex items-center gap-2 text-stone">{content}</span>
            )}
          </li>
        )
      })}
    </ol>
  )
}
