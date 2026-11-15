import Link from '@/components/ui/Link'
import { isValidElement, type ReactNode } from 'react'
import { HeaderMedia, type Media } from './HeaderMedia'
import { richNodes } from './Rich'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: { briciole: 'Briciole di pane' },
  en: { briciole: 'Breadcrumb' },
  es: { briciole: 'Migas de pan' },
} satisfies Record<Lingua, Record<string, string>>

export type Crumb = { label: string; href?: string }
export type Credito = { autore: string; licenza: string; fonteUrl: string }

/** Testo semplice di un titolo (stringa, numeri, frammenti annidati), per misurarne la lunghezza. */
function testoDi(nodo: ReactNode): string {
  if (nodo == null || typeof nodo === 'boolean') return ''
  if (typeof nodo === 'string' || typeof nodo === 'number') return String(nodo)
  if (Array.isArray(nodo)) return nodo.map(testoDi).join('')
  if (isValidElement<{ children?: ReactNode }>(nodo)) return testoDi(nodo.props.children)
  return ''
}

/**
 * Scala del titolo in base alla lunghezza: i nomi brevi (Paesi, destinazioni) restano enormi, i titoli
 * lunghi scendono di corpo e allargano la riga, così anche il più lungo sta in 3-4 righe su desktop e
 * 5-6 su mobile.
 */
function scalaTitolo(lunghezza: number): string {
  if (lunghezza <= 32) return 'text-[clamp(2.5rem,5.2vw,5rem)] max-w-[18ch]'
  if (lunghezza <= 56) return 'text-[clamp(2rem,4vw,3.75rem)] max-w-[22ch]'
  return 'text-[clamp(1.85rem,3.2vw,3rem)] max-w-[28ch]'
}

/**
 * Apertura unica di tutte le pagine interne, Stile A "Ghat" (stessa grammatica
 * dell'hero della Home): briciole di pane, etichetta rossa, titolo grotesk a
 * scala secondo la lunghezza, sottotitolo, dati e azioni a sinistra; a destra la foto o il
 * video vero, senza didascalie (crediti in /crediti-fotografici). Senza media diventa una testata tipografica
 * a colonna unica, allineata al contenitore della pagina.
 * Sempre chiusa da una riga spessa (border-b-2), mai fondi scuri o sfumature.
 */
export async function PageHeader({
  crumbs,
  eyebrow,
  badge,
  title,
  titleNote,
  lead,
  meta,
  actions,
  media,
  pieno,
}: {
  crumbs?: Crumb[]
  eyebrow?: ReactNode
  badge?: ReactNode
  title: ReactNode
  /** Seconda riga più piccola sotto il titolo, dentro l'H1 (nome in lingua locale, parte del titolo dopo i due punti). */
  titleNote?: ReactNode
  lead?: ReactNode
  meta?: ReactNode
  actions?: ReactNode
  media?: Media
  /** Foto a tutta larghezza con il testo sopra, in chiaro (pagine di Paesi e destinazioni). */
  pieno?: boolean
  /** Non più mostrato sotto la foto: i crediti sono raccolti in /crediti-fotografici. */
  credito?: Credito
  luogo?: string
}) {
  const lingua = await linguaCorrente()
  const chiaro = pieno && !!media
  const briciole = crumbs && crumbs.length > 0 && (
    <nav aria-label={T[lingua].briciole} className={`flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs ${chiaro ? 'text-cream' : 'text-stone'}`}>
      {crumbs.map((c, i) => (
        <span key={`${c.label}-${i}`} className="inline-flex items-center gap-1.5">
          {i > 0 && <span aria-hidden="true">/</span>}
          {c.href ? (
            <Link href={c.href} className={`underline-offset-2 hover:underline ${chiaro ? 'hover:text-cream' : 'hover:text-rosso'}`}>
              {c.label}
            </Link>
          ) : (
            <span aria-current="page" className={`inline-block max-w-[22ch] truncate align-bottom sm:max-w-[48ch] ${chiaro ? 'text-cream' : 'text-ink'}`} title={c.label}>
              {c.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
  // Stessa scansione in tutte le testate: etichetta → titolo 12 px → introduzione 24 px → dati e azioni 32 px.
  // Le distanze stanno sull'elemento che segue, così una testata senza etichetta non si porta dietro il vuoto.
  const corpo = (
    <div>
      {(eyebrow || badge) && (
        <div className="mb-3 flex flex-wrap items-center gap-3">
          {eyebrow && <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${chiaro ? 'text-cream' : 'text-rosso'}`}>{eyebrow}</p>}
          {badge}
        </div>
      )}
      <h1 className={`font-display text-balance ${scalaTitolo(testoDi(title).length)} ${chiaro ? 'text-cream [text-shadow:0_2px_24px_rgb(0_0_0/0.35)]' : 'text-ink'}`}>
        {title}
        {titleNote && (
          <span className={`mt-3 block max-w-[46ch] font-sans text-lg font-normal leading-snug tracking-normal text-pretty sm:text-xl ${chiaro ? 'text-cream' : 'text-stone'}`}>{titleNote}</span>
        )}
      </h1>
      {lead && <div className={`mt-6 max-w-[52ch] text-lg leading-relaxed ${chiaro ? 'text-cream' : 'text-stone'}`}>{lead}</div>}
      {meta && <div className={`mt-8 border-t pt-6 ${chiaro ? 'border-cream/25 text-cream' : 'border-ink/15'}`}>{meta}</div>}
      {actions && <div className="mt-8 flex flex-wrap items-center gap-6">{actions}</div>}
    </div>
  )

  if (!media) {
    return (
      <section className="border-b-2 border-ink">
        <div className="mx-auto w-full max-w-6xl px-6 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14">
          {briciole}
          <div className={briciole ? 'mt-8' : ''}>{corpo}</div>
        </div>
      </section>
    )
  }

  if (chiaro) {
    // Foto a tutta larghezza: briciole sempre in alto, alla stessa altezza in ogni pagina della famiglia
    // (Paese, destinazione, esperienza, area, 404); il testo sta in basso a sinistra sulla sfumatura scura.
    return (
      <section className="relative isolate flex min-h-[min(78vh,44rem)] flex-col overflow-hidden border-b-2 border-ink bg-alpine [text-shadow:0_1px_14px_rgb(0_0_0/0.5)]">
        <div className="absolute inset-0 -z-10">
          <HeaderMedia media={media} sizes="100vw" />
          {/* velo pensato per il testo in chiaro: almeno 4,5:1 anche sulle foto con cielo bianco */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 via-55% to-black/25" />
          <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-black/40 to-transparent" />
          {/* in alto, dietro le briciole */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />
        </div>
        {briciole && <div className="mx-auto w-full max-w-6xl px-6 pt-8 sm:px-8 sm:pt-10">{briciole}</div>}
        <div className="mx-auto mt-auto w-full max-w-6xl px-6 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-32">{corpo}</div>
      </section>
    )
  }

  // Testo su fondo chiaro con la foto accanto (viaggi, meraviglie, guide): briciole in alto, testo in basso.
  return (
    <section className="grid border-b-2 border-ink lg:min-h-[min(46rem,calc(100dvh-4rem))] lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
      <div className="flex flex-col px-6 pb-12 pt-8 sm:px-8 sm:pt-10 lg:px-12 lg:pb-14">
        {briciole}
        <div className={`lg:mt-auto ${briciole ? 'mt-8 lg:pt-12' : ''}`}>{corpo}</div>
      </div>
      <figure className="relative m-0 flex flex-col">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-dark lg:aspect-auto lg:flex-1">
          <HeaderMedia media={media} />
        </div>
      </figure>
    </section>
  )
}

/** Riga di dati brevi sotto il titolo (periodo, durata, budget…). */
export function HeaderFacts({ items }: { items: { label: string; value?: ReactNode }[] }) {
  const pieni = items.filter((i) => i.value)
  if (!pieni.length) return null
  const lunghi = pieni.some((i) => typeof i.value === 'string' && i.value.length > 70)
  return (
    <dl className={`grid gap-x-8 gap-y-5 ${lunghi ? 'sm:grid-cols-2' : 'grid-cols-2 sm:grid-cols-4'}`}>
      {pieni.map((i) => (
        <div key={i.label}>
          <dt className="text-xs font-semibold uppercase tracking-wider text-stone">{i.label}</dt>
          <dd className="mt-1 text-sm leading-relaxed text-ink">{typeof i.value === 'string' ? richNodes(i.value) : i.value}</dd>
        </div>
      ))}
    </dl>
  )
}

/** Azione primaria piena rossa + secondaria sottolineata, come nella Home. */
export function HeaderAction({ href, children, secondary }: { href: string; children: ReactNode; secondary?: boolean }) {
  return secondary ? (
    <Link
      href={href}
      className="text-[0.95rem] font-semibold text-ink underline decoration-rosso decoration-2 underline-offset-[6px] hover:text-rosso"
    >
      {children}
    </Link>
  ) : (
    <Link
      href={href}
      className="btn btn-primario"
    >
      {children}
    </Link>
  )
}
