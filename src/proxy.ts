import { NextResponse, type NextRequest } from 'next/server'
import { canonico, localizza } from '@/lib/i18n/percorsi'
import { LINGUE_PUBBLICATE, SEGMENTI, isLingua } from '@/lib/i18n/config'
import { VECCHI_SLUG_VIAGGI } from '@/lib/vecchi-slug'

/*
 * Lingue negli indirizzi. Ogni indirizzo pubblico (/trips/japan-itinerary,
 * /it/viaggi/giappone-itinerario, /es/viajes/japon-itinerario) viene riscritto sulla rotta
 * interna app/[lang]/<percorso canonico>, quindi le pagine restano una sola per tutte le lingue.
 *
 * - /en/… non è un indirizzo pubblico (l'inglese non ha prefisso): 308 alla forma senza /en.
 * - Prefissi doppi (/it/en/…, /es/en/…): 308 alla pagina equivalente.
 * - I vecchi indirizzi italiani senza prefisso (/viaggi/…, /destinazioni/…) sono 308 verso /it/…,
 *   così i link già in giro e quelli indicizzati non si perdono.
 */

// parole italiane del primo segmento che in inglese cambiano: senza prefisso sono vecchi indirizzi italiani
const VECCHI_IT = new Set(Object.keys(SEGMENTI.en).filter((k) => SEGMENTI.en[k] !== k))

export function proxy(request: NextRequest) {
  const url = request.nextUrl
  const { pathname } = url

  // Le immagini Open Graph generate da Next hanno l'indirizzo interno (/en/viaggi/<slug>/opengraph-image):
  // si servono così come sono. Col 308 qui sotto finivano su /viaggi/… e poi su /it/…, cioè l'anteprima
  // inglese arrivava dopo due redirect e in italiano.
  if (pathname.startsWith('/en/') && pathname.endsWith('/opengraph-image')) return NextResponse.next()

  // /en/… → stessa pagina senza prefisso, con gli slug inglesi. Vale sia per /en/trips/… sia per la rotta
  // interna /en/viaggi/… che il selettore della lingua metteva negli href (prima finiva su /viaggi/… e poi
  // in italiano su /it/viaggi/…).
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    url.pathname = localizza(canonico(pathname).percorso, 'en')
    return NextResponse.redirect(url, 308)
  }

  // prefisso doppio (/it/en/viaggi/…, /es/en/…, /it/es/…): indirizzi sbagliati generati dal vecchio selettore
  // e forse già condivisi o indicizzati. 308 alla pagina equivalente nella lingua del primo prefisso.
  const [, p1, p2] = pathname.split('/')
  if ((p1 === 'it' || p1 === 'es') && isLingua(p2)) {
    url.pathname = localizza(canonico(pathname.slice(p1.length + 1)).percorso, p1)
    return NextResponse.redirect(url, 308)
  }

  const primo = pathname.split('/')[1] ?? ''
  if (VECCHI_IT.has(primo)) {
    url.pathname = `/it${pathname}`
    return NextResponse.redirect(url, 308)
  }

  const { lingua, percorso } = canonico(pathname)
  // lingua non ancora pubblicata: alla stessa pagina in inglese
  if (!LINGUE_PUBBLICATE.includes(lingua)) {
    url.pathname = localizza(percorso, 'en')
    return NextResponse.redirect(url, 307)
  }
  // viaggi rinominati: 308 al nome nuovo (le pagine rispondono 404 agli slug che non conoscono)
  const vecchio = percorso.match(/^\/viaggi\/([^/]+)$/)?.[1]
  if (vecchio && VECCHI_SLUG_VIAGGI[vecchio]) {
    url.pathname = localizza(`/viaggi/${VECCHI_SLUG_VIAGGI[vecchio]}`, lingua)
    return NextResponse.redirect(url, 308)
  }
  url.pathname = `/${lingua}${percorso === '/' ? '' : percorso}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    // tutto tranne gli interni di Next, i file in public/ e i file della radice (robots, sitemap, llms.txt)
    '/((?!_next/|images/|videos/|guide-pdf/|favicon\\.ico|robots\\.txt|sitemap\\.xml|llms\\.txt|.*\\.(?:png|jpe?g|webp|avif|gif|svg|ico|mp4|webm|pdf|woff2?|css|js|map)$).*)',
  ],
}
