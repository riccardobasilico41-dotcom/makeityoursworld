import type { ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: { apri: 'Apri', chiudi: 'Chiudi' },
  en: { apri: 'Open', chiudi: 'Close' },
  es: { apri: 'Abrir', chiudi: 'Cerrar' },
} satisfies Record<Lingua, Record<string, string>>

/**
 * Sezione lunga chiusa a tendina (hotel, ristoranti, approfondimenti): il titolo resta
 * visibile e ancorabile dall'indice, il contenuto si apre al tocco. Con `aperta` parte aperta.
 * Funziona senza JavaScript (è un <details>).
 */
export async function Tendina({
  id,
  titolo,
  sottotitolo,
  aperta = false,
  compatta = false,
  children,
}: {
  id?: string
  titolo: string
  sottotitolo?: string
  aperta?: boolean
  /** titolo più piccolo, per elenchi di voci brevi */
  compatta?: boolean
  children: ReactNode
}) {
  const t = T[await linguaCorrente()]
  return (
    <details id={id} open={aperta} className="group scroll-mt-24 border-y border-alpine/15">
      <summary className={`flex ${compatta ? 'min-h-12 py-3' : 'min-h-14 py-4'} cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden`}>
        <span>
          <span className={`block font-display text-alpine ${compatta ? 'text-lg' : 'text-2xl'}`}>{titolo}</span>
          {sottotitolo && <span className="mt-1 block text-sm text-stone">{sottotitolo}</span>}
        </span>
        <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-rosso">
          <span className="group-open:hidden">{t.apri}</span>
          <span className="hidden group-open:inline">{t.chiudi}</span>
          <ChevronDown size={18} aria-hidden className="transition-transform duration-200 group-open:rotate-180" />
        </span>
      </summary>
      <div className={compatta ? 'pb-5' : 'pb-8'}>{children}</div>
    </details>
  )
}
