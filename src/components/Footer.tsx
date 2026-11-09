import Link from '@/components/ui/Link'
import { Container } from './ui/Container'
import { siteConfig, socialPubblici } from '@/lib/site-config'
import { Marchio } from './Marchio'
import { linguaCorrente } from '@/lib/i18n/server'
import { SITO } from '@/lib/i18n/sito'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    dopoTagline: 'con tappe giorno per giorno, consigli pratici e ricordi da rileggere.',
    viaggi: 'Tutti i viaggi',
    destinazioni: 'Tutte le destinazioni',
    attrezzatura: 'Cosa portare',
    lavoriamo: 'Lavoriamo insieme',
    chiSono: 'Chi sono',
    comeLavoro: 'Come lavoro',
    appunti: 'Appunti di viaggio personali.',
    trasparenza: 'Trasparenza',
    privacy: 'Privacy',
    cookie: 'Cookie',
    crediti: 'Crediti fotografici',
  },
  en: {
    dopoTagline: 'with day-by-day stops, practical tips and memories to reread.',
    viaggi: 'All trips',
    destinazioni: 'All destinations',
    attrezzatura: 'What to pack',
    lavoriamo: 'Work with me',
    chiSono: 'About',
    comeLavoro: 'How I work',
    appunti: 'Personal travel notes.',
    trasparenza: 'Transparency',
    privacy: 'Privacy',
    cookie: 'Cookies',
    crediti: 'Photo credits',
  },
  es: {
    dopoTagline: 'con etapas día a día, consejos prácticos y recuerdos para releer.',
    viaggi: 'Todos los viajes',
    destinazioni: 'Todos los destinos',
    attrezzatura: 'Qué llevar',
    lavoriamo: 'Trabajemos juntos',
    chiSono: 'Sobre mí',
    comeLavoro: 'Cómo trabajo',
    appunti: 'Apuntes de viaje personales.',
    trasparenza: 'Transparencia',
    privacy: 'Privacidad',
    cookie: 'Cookies',
    crediti: 'Créditos fotográficos',
  },
} satisfies Record<Lingua, Record<string, string>>

/* Hallmark · footer: Ft1 Mast-headed — wordmark + tagline anchor a single
 * quiet band, a couple of real links beside, colophon below. Replaces the
 * previous Ft3 (3 columns of links + copyright, the other most-recognised
 * AI footer fingerprint) — which also had a real bug: its "Destinazioni /
 * Esperienze / Continenti" links were all hardcoded to /destinazioni/messico
 * regardless of which continent was listed. Ft1 doesn't pretend to a
 * sitemap the site doesn't have yet, so the bug has nowhere to hide. See
 * design.md. */
export async function Footer() {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return (
    <footer className="mt-24 border-t border-alpine/10 bg-alpine text-cream/90">
      <Container className="flex flex-col items-center gap-3 py-16 text-center">
        <p className="text-2xl text-cream">
          <Marchio battuta={false} />
        </p>
        <p className="max-w-md text-sm leading-relaxed text-cream/70">
          {SITO[lingua].tagline} — {t.dopoTagline}
        </p>
        <p className="mt-2 text-sm text-cream/70">
          <Link href="/viaggi" className="underline decoration-cream/30 underline-offset-4 hover:text-cream hover:decoration-cream">
            {t.viaggi}
          </Link>
          <span className="mx-3 text-cream/30">·</span>
          <Link href="/destinazioni" className="underline decoration-cream/30 underline-offset-4 hover:text-cream hover:decoration-cream">
            {t.destinazioni}
          </Link>
          <span className="mx-3 text-cream/30">·</span>
          <Link href="/attrezzatura" className="underline decoration-cream/30 underline-offset-4 hover:text-cream hover:decoration-cream">
            {t.attrezzatura}
          </Link>
          <span className="mx-3 text-cream/30">·</span>
          <Link href="/lavoriamo-insieme" className="underline decoration-cream/30 underline-offset-4 hover:text-cream hover:decoration-cream">
            {t.lavoriamo}
          </Link>
          <span className="mx-3 text-cream/30">·</span>
          <Link href="/chi-sono" className="underline decoration-cream/30 underline-offset-4 hover:text-cream hover:decoration-cream">
            {t.chiSono}
          </Link>
          <span className="mx-3 text-cream/30">·</span>
          <Link href="/come-lavoro" className="underline decoration-cream/30 underline-offset-4 hover:text-cream hover:decoration-cream">
            {t.comeLavoro}
          </Link>
        </p>
        {/* social: solo con contatti accesi e URL completi in site-config (nessun link vuoto) */}
        {socialPubblici.length > 0 && (
          <p className="text-sm text-cream/70">
            {socialPubblici.map((r, i) => (
              <span key={r.rete}>
                {i > 0 && <span className="mx-3 text-cream/30">·</span>}
                <a href={r.url} rel="me noopener noreferrer" className="capitalize underline decoration-cream/30 underline-offset-4 hover:text-cream">
                  {r.rete}
                </a>
              </span>
            ))}
          </p>
        )}
      </Container>

      <Container className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        <p>
          © {new Date().getFullYear()} {siteConfig.shortName}. {t.appunti}
          <span className="mx-2 text-cream/30">·</span>
          <Link href="/trasparenza" className="underline decoration-cream/30 underline-offset-4 hover:text-cream">
            {t.trasparenza}
          </Link>
          <span className="mx-2 text-cream/30">·</span>
          <Link href="/privacy" className="underline decoration-cream/30 underline-offset-4 hover:text-cream">
            {t.privacy}
          </Link>
          <span className="mx-2 text-cream/30">·</span>
          <Link href="/cookie" className="underline decoration-cream/30 underline-offset-4 hover:text-cream">
            {t.cookie}
          </Link>
        </p>
      </Container>
    </footer>
  )
}
