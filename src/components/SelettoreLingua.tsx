'use client'

import NextLink from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import type { MouseEvent } from 'react'
import { LINGUE_PUBBLICATE, LOCALE, type Lingua } from '@/lib/i18n/config'
import { canonico, localizza } from '@/lib/i18n/percorsi'
import { useLingua } from '@/lib/i18n/LinguaProvider'
import { usePaginaNonTrovata } from '@/lib/i18n/NonTrovata'

// Nome accessibile: il nome della lingua nella lingua stessa (con lang sul link), come chiede WCAG 3.1.2;
// contiene la sigla visibile (EN, IT, ES) all'inizio, quindi rispetta anche «label in name» (2.5.3).
const ETICHETTA: Record<Lingua, { nav: string; corrente: string }> = {
  en: { nav: 'Language', corrente: 'current language' },
  it: { nav: 'Lingua', corrente: 'lingua attuale' },
  es: { nav: 'Idioma', corrente: 'idioma actual' },
}

function ricordaLingua(l: Lingua) {
  try {
    document.cookie = `lingua=${l}; path=/; max-age=31536000; samesite=lax`
  } catch {}
}

/**
 * EN · IT · ES nell'header: porta alla stessa pagina nell'altra lingua, con filtri (?…) e ancora (#…).
 * Ricorda la scelta in un cookie, ma il sito non reindirizza mai da solo in base al browser.
 * Su una 404 porta alla home dell'altra lingua (fallback esplicito, mai un altro 404).
 *
 * Durante il rendering sul server `usePathname()` restituisce la rotta interna dopo la riscrittura del
 * proxy (/en/viaggi/…): `canonico()` la riconosce. Prima no, e l'HTML conteneva /it/en/… e /es/en/…
 * (404 con clic centrale, «apri in nuova scheda», crawler e prima dell'idratazione).
 */
export function SelettoreLingua({ className = '' }: { className?: string }) {
  const lingua = useLingua()
  const pathname = usePathname() ?? '/'
  const router = useRouter()
  const nonTrovata = usePaginaNonTrovata()
  const { percorso } = canonico(pathname)
  if (LINGUE_PUBBLICATE.length < 2) return null
  const t = ETICHETTA[lingua]

  const destinazione = (l: Lingua) => localizza(nonTrovata ? '/' : percorso, l)

  function clic(e: MouseEvent<HTMLAnchorElement>, l: Lingua) {
    ricordaLingua(l)
    if (nonTrovata) return
    // tiene filtri e ancora (es. /trips?paese=giappone#giorno-3) nella nuova lingua
    const resto = location.search + location.hash
    const href = destinazione(l) + resto
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      // nuova scheda o finestra: il browser usa l'href del link, che aggiorno prima dell'azione predefinita
      e.currentTarget.setAttribute('href', href)
      return
    }
    if (!resto) return
    e.preventDefault()
    router.push(href)
  }

  return (
    <nav aria-label={t.nav} className={`flex items-center ${className}`}>
      <ul className="flex items-center">
        {LINGUE_PUBBLICATE.map((l, i) => (
          <li key={l} className="flex items-center">
            {i > 0 && (
              <span aria-hidden="true" className="px-1 text-ink/30">
                /
              </span>
            )}
            <NextLink
              href={destinazione(l)}
              hrefLang={LOCALE[l].html}
              lang={LOCALE[l].html}
              aria-current={l === lingua ? 'true' : undefined}
              aria-label={l === lingua ? `${LOCALE[l].nome} (${t.corrente})` : LOCALE[l].nome}
              title={LOCALE[l].nome}
              onClick={(e) => clic(e, l)}
              onAuxClick={(e) => clic(e, l)}
              className={`inline-flex min-h-11 min-w-8 items-center justify-center text-sm font-semibold transition-colors hover:text-rosso focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosso ${
                l === lingua ? 'text-ink underline decoration-rosso decoration-2 underline-offset-4' : 'text-stone'
              }`}
            >
              {LOCALE[l].breve}
            </NextLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
