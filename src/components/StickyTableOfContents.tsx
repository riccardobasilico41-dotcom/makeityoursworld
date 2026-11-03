import { List } from 'lucide-react'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: { aria: 'Indice della pagina', titolo: 'In questa pagina' },
  en: { aria: 'Page contents', titolo: 'On this page' },
  es: { aria: 'Índice de la página', titolo: 'En esta página' },
} satisfies Record<Lingua, Record<string, string>>

export type TocItem = {
  href: string
  label: string
}

/**
 * Indice di pagina con anchor link, in un <details> nativo: compatto e
 * chiuso di default ovunque (nessun contenuto "rubato" alla pagina), apribile
 * con un tap/click. Su desktop resta comunque raggiungibile durante lo
 * scroll grazie al posizionamento sticky. Nessun JS necessario.
 */
export async function StickyTableOfContents({ items, className = '' }: { items: TocItem[]; className?: string }) {
  const t = T[await linguaCorrente()]
  return (
    <nav aria-label={t.aria} className={`lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:overflow-y-auto lg:overscroll-contain ${className}`}>
      <details className="group rounded-none border border-alpine/10 bg-white">
        <summary className="flex cursor-pointer list-none items-center gap-2 px-5 py-4 text-sm font-semibold text-alpine marker:content-none">
          <List size={16} />
          {t.titolo}
        </summary>
        <ul className="space-y-0.5 px-5 pb-4">
          {items.map((item) => (
            <li key={`${item.href}-${item.label}`}>
              <a
                href={item.href}
                className="block rounded-none px-2 py-1.5 text-sm text-stone transition-colors hover:bg-alpine/5 hover:text-alpine"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </nav>
  )
}
