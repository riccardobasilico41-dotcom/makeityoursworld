import Link from '@/components/ui/Link'
import { ArrowRight } from 'lucide-react'
import { richNodes } from './Rich'
import { linguaCorrente } from '@/lib/i18n/server'

const SCOPRI = { it: 'Scopri di più', en: 'Learn more', es: 'Descubre más' } as const

export type PracticalInfoItem = {
  label: string
  value?: string
  href?: string
}

/**
 * Blocco informazioni pratiche riutilizzabile: se un item ha `href` diventa un
 * link (usato in "Organizza il viaggio"), altrimenti mostra solo il valore
 * (usato nelle schede destinazione/esperienza per come arrivare, periodo, costi...).
 * Le voci senza valore non si mostrano: niente «da completare» davanti al lettore.
 */
export async function PracticalInfo({ items, className = '' }: { items: PracticalInfoItem[]; className?: string }) {
  const lingua = await linguaCorrente()
  return (
    <dl className={`grid gap-4 sm:grid-cols-2 ${className}`}>
      {items.filter((item) => item.href || item.value).map((item) => (
        <div
          key={item.label}
          className="rounded-none border border-alpine/10 bg-white p-4"
        >
          <dt className="text-xs font-semibold uppercase tracking-wider text-stone/85">{item.label}</dt>
          {item.href ? (
            <Link
              href={item.href}
              className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium text-alpine hover:text-rosso"
            >
              {item.value ?? SCOPRI[lingua]}
              <ArrowRight size={13} />
            </Link>
          ) : (
            <dd className="mt-1.5 text-sm leading-relaxed text-ink">{richNodes(item.value ?? '')}</dd>
          )}
        </div>
      ))}
    </dl>
  )
}
