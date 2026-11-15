import { Children, isValidElement, type ReactElement, type ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { CardRicordo } from '@/components/scheda/CardRicordo'
import Link from '@/components/ui/Link'
import { canonico } from '@/lib/i18n/percorsi'

/** «*Il mio ricordo: …*» (e le versioni EN/ES) diventano la card scura del ricordo. */
const RICORDO = /^\s*(Il mio ricordo|My memory|Mi recuerdo)\s*:\s*/i
const ETICHETTA: Record<string, string> = {
  'il mio ricordo': 'Il mio ricordo',
  'my memory': 'My memory',
  'mi recuerdo': 'Mi recuerdo',
}

function ricordoDa(children: ReactNode): { etichetta: string; corpo: ReactNode[] } | null {
  const figli = Children.toArray(children).filter((c) => !(typeof c === 'string' && c.trim() === ''))
  if (figli.length !== 1) return null
  const em = figli[0]
  if (!isValidElement(em) || em.type !== 'em') return null
  const dentro = Children.toArray((em as ReactElement<{ children?: ReactNode }>).props.children)
  const primo = dentro[0]
  if (typeof primo !== 'string') return null
  const m = primo.match(RICORDO)
  if (!m) return null
  const resto = primo.slice(m[0].length)
  return { etichetta: ETICHETTA[m[1].toLowerCase()] ?? m[1], corpo: [resto, ...dentro.slice(1)] }
}

export function Prose({ children, className = '' }: { children: string; className?: string }) {
  return (
    <div
      className={`prose prose-neutral max-w-none prose-headings:font-display prose-headings:font-medium prose-headings:text-alpine prose-p:text-stone prose-li:text-stone prose-strong:text-ink prose-strong:font-semibold prose-a:text-rosso prose-a:no-underline hover:prose-a:underline ${className}`}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // link interni dei contenuti (di solito canonici, /viaggi/tromso; a volte già pubblici, /es/destinos/…):
          // riportati alla forma canonica, <Link> li porta nella lingua della pagina; esterni e ancore restano
          a({ href, children: figli, node: _n, ...resto }) {
            if (href && href.startsWith('/') && !href.startsWith('//'))
              return <Link href={canonico(href).percorso} {...resto}>{figli}</Link>
            return <a href={href} {...resto}>{figli}</a>
          },
          p({ children: figli }) {
            const r = ricordoDa(figli)
            if (r) return <CardRicordo etichetta={r.etichetta} className="my-10">{r.corpo}</CardRicordo>
            return <p>{figli}</p>
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
