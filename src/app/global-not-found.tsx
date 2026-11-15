import type { Metadata } from 'next'
import './globals.css'
import { classiHtml } from './caratteri'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PaginaNonTrovata, titoloNonTrovata } from '@/components/PaginaNonTrovata'
import { LinguaProvider } from '@/lib/i18n/LinguaProvider'
import { NonTrovataProvider } from '@/lib/i18n/NonTrovata'
import { LOCALE } from '@/lib/i18n/config'
import { linguaCorrente } from '@/lib/i18n/server'
import { siteConfig } from '@/lib/site-config'

/*
 * 404 per gli indirizzi che non corrispondono a nessuna rotta: /it/pagina-inesistente, /pagina-inesistente,
 * /es/xyz e gli slug sconosciuti delle sezioni con dynamicParams = false (viaggi, destinazioni, consigli…).
 *
 * Prima li prendeva una pagina catch-all ([lang]/[...resto]) che chiamava notFound(): il server però
 * non sa rendere il confine di not-found.tsx (in React sul server gli error boundary non esistono),
 * quindi l'errore usciva dalla shell e Next mandava `<html id="__next_error__">` vuoto con status 404,
 * e la pagina compariva solo dopo il JavaScript. Qui invece non si lancia niente: è una pagina normale,
 * completa già nell'HTML, con status 404 e noindex (li mette Next).
 *
 * Sta fuori dal layout di app/[lang], quindi rifà html, body, font, header e footer. La lingua arriva
 * dall'header che aggiunge il proxy (vedi linguaCorrente).
 */

export async function generateMetadata(): Promise<Metadata> {
  const lingua = await linguaCorrente()
  return {
    metadataBase: new URL(siteConfig.url),
    title: `${titoloNonTrovata(lingua)} | ${siteConfig.shortName}`,
    robots: { index: false },
  }
}

export default async function GlobalNotFound() {
  const lingua = await linguaCorrente()
  return (
    <html lang={LOCALE[lingua].html} suppressHydrationWarning className={classiHtml}>
      <body className="flex min-h-full flex-col bg-cream font-sans text-ink">
        <noscript>
          <style>{'[style*="opacity:0"]{opacity:1!important;transform:none!important}'}</style>
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(sessionStorage.getItem('marchio'))document.documentElement.dataset.marchio='visto';else sessionStorage.setItem('marchio','1')}catch(e){}",
          }}
        />
        <LinguaProvider lingua={lingua}>
          <NonTrovataProvider>
            <Header />
            <main id="contenuto" tabIndex={-1} className="flex-1 focus:outline-none">
              <PaginaNonTrovata lingua={lingua} />
            </main>
            <Footer />
          </NonTrovataProvider>
        </LinguaProvider>
      </body>
    </html>
  )
}
