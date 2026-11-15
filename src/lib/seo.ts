import type { Metadata } from 'next'
import { siteConfig } from './site-config'
import { LINGUE_PUBBLICATE, LINGUA_PREDEFINITA, LOCALE, type Lingua } from './i18n/config'
import { localizza } from './i18n/percorsi'

/**
 * Metadata di pagina standard: title/description/canonical più Open
 * Graph e Twitter (prima mancavano quasi ovunque tranne in layout.tsx,
 * quindi ogni pagina ereditava lo stesso OG generico del sito — le
 * anteprime social non distinguevano una pagina viaggio da una
 * destinazione). `social*` sovrascrive solo l'anteprima social quando
 * deve differire dal title/description SEO; altrimenti eredita gli stessi.
 */
const SUFFISSO = ` | ${siteConfig.shortName}`
const MAX_TITOLO = 60
const MAX_DESCRIZIONE = 155

/**
 * Descrizione entro i caratteri che Google mostra: si chiude sull'ultima frase
 * intera che ci sta, altrimenti sull'ultima parola con i puntini.
 */
export function accorciaDescrizione(testo: string, max = MAX_DESCRIZIONE): string {
  const pulito = testo.replace(/\*\*|__|\[|\]\([^)]*\)/g, '').replace(/\s+/g, ' ').trim()
  if (pulito.length <= max) return pulito
  const taglio = pulito.slice(0, max)
  const fineFrase = Math.max(taglio.lastIndexOf('. '), taglio.lastIndexOf('? '), taglio.lastIndexOf('! '))
  if (fineFrase >= 90) return taglio.slice(0, fineFrase + 1)
  return taglio.slice(0, taglio.lastIndexOf(' ')).replace(/[,;:—–-]+$/, '') + '…'
}

/** Il primo titolo che sta nei 60 caratteri, tra varianti dalla più ricca alla più corta. */
export function primoTitoloCheSta(varianti: (string | false | undefined | null)[]): string {
  const valide = varianti.filter((v): v is string => Boolean(v))
  return valide.find((v) => v.length <= MAX_TITOLO) ?? accorciaTitolo(valide[valide.length - 1])
}

// parole che non possono chiudere un titolo tagliato («… nel Lake District e», «… with the»)
const PAROLE_VUOTE = new Set(
  (
    'e ed o od di da del dello della dei degli delle dal dalla dai in nel nello nella nei negli nelle a al allo alla ai agli alle ' +
    'su sul sulla sui con col per tra fra il lo la i gli le un uno una che come ' +
    'and or of the an at to on into with for from by as vs ' +
    'y u de el los las en para por al lo que sin'
  ).split(' ')
)

/** Toglie in coda punteggiatura, parentesi lasciate aperte e parole vuote. */
function pulisciCoda(t: string): string {
  let s = t.trim()
  for (;;) {
    const prima = s
    // parentesi aperta e mai chiusa: si taglia prima della parentesi
    const ap = s.lastIndexOf('(')
    if (ap >= 0 && s.indexOf(')', ap) === -1) s = s.slice(0, ap)
    s = s.replace(/[\s,;:·|/&+(—–-]+$/u, '')
    const ultima = s.match(/(?:^|\s)([^\s]+)$/)?.[1]
    if (ultima && s.includes(' ') && PAROLE_VUOTE.has(ultima.toLowerCase().replace(/^[«"'(]+/, ''))) s = s.slice(0, s.length - ultima.length)
    s = s.trim()
    if (s === prima) return s
  }
}

/** Taglio a fine parola entro `max`, senza punteggiatura né parole vuote in coda. */
function tagliaAParola(t: string, max: number): string {
  if (t.length <= max) return pulisciCoda(t)
  const finestra = t.slice(0, max + 1)
  const spazio = finestra.lastIndexOf(' ')
  return pulisciCoda(spazio > 0 ? finestra.slice(0, spazio) : t.slice(0, max))
}

// sotto questa lunghezza il titolo tagliato a una voce dell'elenco perde troppo: si taglia a fine parola
const MIN_UTILE = 42

/**
 * Titolo entro i 60 caratteri che Google mostra, senza tagli a metà parola. In ordine:
 * - fino all'ultima voce intera dell'elenco dopo i due punti, separatori originali compresi
 *   («Okinawa in summer: two-week itinerary, Kerama, Miyako»);
 * - la parte prima di un trattino o di una barra;
 * - senza le parentesi;
 * - altrimenti il taglio all'ultima parola intera, senza punteggiatura né «e/di/the» in coda.
 * Il primo tentativo vale solo se conserva almeno 42 caratteri: «Ascenso al Pico del Teide: teleférico»
 * direbbe troppo poco, meglio «… teleférico y permiso».
 */
export function accorciaTitolo(titolo: string, max = MAX_TITOLO): string {
  const t = titolo.replace(/\s+/g, ' ').trim()
  if (t.length <= max) return t

  const dueP = t.indexOf(':')
  if (dueP > 0) {
    const testa = pulisciCoda(t.slice(0, dueP))
    if (testa.length > max) return accorciaTitolo(testa, max)
    // fine di ogni voce: prima di una virgola, di un punto e virgola o di «e/and/y» tra due voci
    let migliore = ''
    for (const m of t.slice(dueP + 1).matchAll(/,|;| e | ed | and | y | & |$/g)) {
      const pezzo = pulisciCoda(t.slice(0, dueP + 1 + (m.index ?? 0)))
      if (pezzo.length > max) break
      if (pezzo.length > dueP + 1) migliore = pezzo
    }
    if (migliore.length >= MIN_UTILE) return migliore
  }

  const sep = t.match(/^(.+?)\s+[—–|·-]\s+/)
  if (sep && sep[1].length >= MIN_UTILE && sep[1].length <= max) return pulisciCoda(sep[1])

  const senzaParentesi = t.replace(/\s*\([^)]*\)/g, '').trim()
  if (senzaParentesi !== t) return accorciaTitolo(senzaParentesi, max)

  return tagliaAParola(t, max)
}

/** Titolo di un viaggio per Google (il titolo sulla pagina resta quello intero). */
export function titoloSeoViaggio(titolo: string): string {
  return accorciaTitolo(titolo)
}

export function pageMetadata({
  title,
  description,
  path,
  type = 'website',
  socialTitle,
  socialDescription,
  lingua,
  lingue = LINGUE_PUBBLICATE,
  ogPropria = false,
}: {
  /** Lingua della pagina: canonical, hreflang e og:locale dipendono da questa. */
  lingua: Lingua
  /** Lingue in cui la pagina esiste davvero (per gli hreflang). Di default tutte. */
  lingue?: readonly Lingua[]
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  socialTitle?: string
  socialDescription?: string
  /**
   * La pagina ha un opengraph-image.tsx suo (viaggio, Paese, destinazione, esperienza, meraviglia):
   * si punta a quello, all'indirizzo pubblico della lingua. Va detto qui perché un `openGraph.images`
   * scritto nei metadata prende il posto dell'immagine generata dal file.
   */
  ogPropria?: boolean
}): Metadata {
  // ogni titolo passa da qui: oltre i 60 caratteri si accorcia (il nome del sito in coda c'è solo se ci sta)
  title = accorciaTitolo(title)
  const ogTitle = socialTitle ?? title
  // Anteprima di riserva: l'immagine generale del sito nella lingua della pagina, all'indirizzo
  // pubblico (/opengraph-image, /it/opengraph-image…). Impostando `openGraph` qui la pagina
  // perdeva quella del layout: /viaggi, /aree, /chi-sono… uscivano senza og:image. Con `ogPropria`
  // è invece l'immagine della pagina (/trips/<slug>/opengraph-image): niente redirect, lingua giusta.
  // Misure scritte qui e non importate da og.tsx, che si porta dietro font e sharp.
  const immagine = { url: localizza(ogPropria ? `${path.replace(/\/$/, '')}/opengraph-image` : '/opengraph-image', lingua), width: 1200, height: 630, alt: ogPropria ? ogTitle : siteConfig.brandName }
  description = accorciaDescrizione(description)
  const ogDescription = accorciaDescrizione(socialDescription ?? description, 200)

  return {
    // Il nome del sito in coda solo se c'è spazio: Google taglia intorno ai 60 caratteri.
    title: title.length + SUFFISSO.length <= MAX_TITOLO ? title : { absolute: title },
    description,
    // `path` è il percorso canonico (italiano, senza prefisso): qui diventa l'indirizzo della lingua
    alternates: {
      canonical: localizza(path, lingua),
      languages: {
        ...Object.fromEntries(lingue.map((l) => [LOCALE[l].html, localizza(path, l)])),
        ...(lingue.includes(LINGUA_PREDEFINITA) ? { 'x-default': localizza(path, LINGUA_PREDEFINITA) } : {}),
      },
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: localizza(path, lingua),
      siteName: siteConfig.shortName,
      locale: LOCALE[lingua].og,
      alternateLocale: lingue.filter((l) => l !== lingua).map((l) => LOCALE[l].og),
      type,
      images: [immagine],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: [immagine.url],
    },
  }
}
