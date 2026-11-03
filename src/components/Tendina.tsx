import type { ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

/**
 * Sezione lunga chiusa a tendina (hotel, ristoranti, approfondimenti): il titolo resta
 * visibile e ancorabile dall'indice, il contenuto si apre al tocco. Con `aperta` parte aperta.
 * Funziona senza JavaScript (è un <details>).
 */
export function Tendina({
  id,
  titolo,
  sottotitolo,
  aperta = false,
  children,
}: {
  id?: string
  titolo: string
  sottotitolo?: string
  aperta?: boolean
  children: ReactNode
}) {
  return (
    <details id={id} open={aperta} className="group scroll-mt-24 border-y border-alpine/15">
      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
        <span>
          <span className="block font-display text-2xl text-alpine">{titolo}</span>
          {sottotitolo && <span className="mt-1 block text-sm text-stone">{sottotitolo}</span>}
        </span>
        <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-rosso">
          <span className="group-open:hidden">Apri</span>
          <span className="hidden group-open:inline">Chiudi</span>
          <ChevronDown size={18} aria-hidden className="transition-transform duration-200 group-open:rotate-180" />
        </span>
      </summary>
      <div className="pb-8">{children}</div>
    </details>
  )
}
