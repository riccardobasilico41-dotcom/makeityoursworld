import type { Metadata } from 'next'
import { siteConfig } from './site-config'

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
}: {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  socialTitle?: string
  socialDescription?: string
}): Metadata {
  const ogTitle = socialTitle ?? title
  description = accorciaDescrizione(description)
  const ogDescription = accorciaDescrizione(socialDescription ?? description, 200)

  return {
    // Il nome del sito in coda solo se c'è spazio: Google taglia intorno ai 60 caratteri.
    title: title.length + SUFFISSO.length <= MAX_TITOLO ? title : { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: path,
      siteName: siteConfig.shortName,
      locale: 'it_IT',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
    },
  }
}
