'use client'

import NextLink from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LINGUE_PUBBLICATE, LOCALE } from '@/lib/i18n/config'
import { canonico, localizza } from '@/lib/i18n/percorsi'
import { useLingua } from '@/lib/i18n/LinguaProvider'

/**
 * EN · IT (· ES) nell'header: porta alla stessa pagina nell'altra lingua. Ricorda la
 * scelta in un cookie, ma il sito non reindirizza mai da solo in base al browser.
 */
export function SelettoreLingua({ className = '' }: { className?: string }) {
  const lingua = useLingua()
  const pathname = usePathname() ?? '/'
  const router = useRouter()
  const { percorso } = canonico(pathname)
  if (LINGUE_PUBBLICATE.length < 2) return null

  return (
    <nav aria-label={lingua === 'it' ? 'Lingua' : lingua === 'es' ? 'Idioma' : 'Language'} className={`flex items-center ${className}`}>
      {LINGUE_PUBBLICATE.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span aria-hidden="true" className="px-1 text-ink/30">/</span>}
          <NextLink
            href={localizza(percorso, l)}
            hrefLang={LOCALE[l].html}
            lang={LOCALE[l].html}
            aria-current={l === lingua ? 'true' : undefined}
            title={LOCALE[l].nome}
            onClick={(e) => {
              try {
                document.cookie = `lingua=${l}; path=/; max-age=31536000; samesite=lax`
              } catch {}
              // tiene filtri e ancora (es. /viaggi?paese=giappone#giorno-3) nella nuova lingua
              const resto = location.search + location.hash
              if (resto && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
                e.preventDefault()
                router.push(localizza(percorso, l) + resto)
              }
            }}
            className={`inline-flex min-h-11 min-w-8 items-center justify-center text-sm font-semibold transition-colors hover:text-rosso ${
              l === lingua ? 'text-ink underline decoration-rosso decoration-2 underline-offset-4' : 'text-stone'
            }`}
          >
            {LOCALE[l].breve}
          </NextLink>
        </span>
      ))}
    </nav>
  )
}
