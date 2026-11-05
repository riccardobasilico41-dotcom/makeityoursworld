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
  return valide.find((v) => v.length <= MAX_TITOLO) ?? valide[valide.length - 1]
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
