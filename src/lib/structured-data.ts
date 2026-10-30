import { siteConfig } from './site-config'

/**
 * Helper per i dati strutturati schema.org. Restituiscono oggetti da passare a
 * <JsonLd />: tenerli qui evita di ripetere url assoluti e @context in ogni
 * pagina, e rende esplicito quale tipo usiamo dove.
 */

function url(percorso: string): string {
  return `${siteConfig.url}${percorso}`
}

/** Chi scrive il sito: stessa persona della sezione «The face behind the project» in Home. */
export const AUTORE = {
  '@type': 'Person',
  '@id': `${siteConfig.url}/#riccardo-basilico`,
  name: 'Riccardo Basilico',
  alternateName: 'Rick',
  jobTitle: 'Osteopata',
  image: `${siteConfig.url}/images/chi-sono/riccardo-basilico-taj-mahal.jpg`,
  url: `${siteConfig.url}/#chi-sono`,
  knowsAbout: ['Viaggi', 'Itinerari di viaggio', 'Trekking', 'Osteopatia'],
}

/** Autore, per la Home (il WebSite è già nel layout): dice a Google e ai motori AI chi c'è dietro il diario. */
export function autoreJsonLd() {
  return { '@context': 'https://schema.org', ...AUTORE }
}

export type VoceBreadcrumb = { nome: string; percorso: string }

/** Traccia il percorso di navigazione: aiuta Google a mostrare le briciole nei risultati. */
export function breadcrumbJsonLd(voci: VoceBreadcrumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: voci.map((voce, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: voce.nome,
      item: url(voce.percorso),
    })),
  }
}

/** Un itinerario raccontato giorno per giorno è a tutti gli effetti un articolo di diario. */
export function articoloViaggioJsonLd({
  titolo,
  descrizione,
  percorso,
  sezioni,
}: {
  titolo: string
  descrizione: string
  percorso: string
  sezioni: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: titolo,
    description: descrizione,
    url: url(percorso),
    image: url(`${percorso}/opengraph-image`),
    inLanguage: 'it-IT',
    author: AUTORE,
    publisher: AUTORE,
    isPartOf: {
      '@type': 'Blog',
      name: siteConfig.brandName,
      url: siteConfig.url,
    },
    articleSection: sezioni,
  }
}

/** Indice di raccolta: usato dalle pagine elenco (viaggi, destinazioni, meraviglie). */
export function raccoltaJsonLd({
  nome,
  descrizione,
  percorso,
  elementi,
}: {
  nome: string
  descrizione: string
  percorso: string
  elementi: { nome: string; percorso: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: nome,
    description: descrizione,
    url: url(percorso),
    inLanguage: 'it-IT',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: elementi.length,
      itemListElement: elementi.map((elemento, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: elemento.nome,
        url: url(elemento.percorso),
      })),
    },
  }
}

export type DomandaRisposta = { domanda: string; risposta?: string }

/**
 * Domande frequenti costruite sulle informazioni pratiche già visibili nella
 * pagina (costo, durata, periodo…): per i motori di risposta AI e per Google.
 * Le voci senza risposta si saltano; sotto due domande non si emette nulla.
 */
export function faqJsonLd(voci: DomandaRisposta[]) {
  const piene = voci
    .filter((v): v is Required<DomandaRisposta> => Boolean(v.risposta?.trim()))
    .map((v) => ({ ...v, risposta: v.risposta.replace(/\*\*|__|\[([^\]]+)\]\([^)]*\)/g, '$1').trim() }))
  if (piene.length < 2) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: piene.map((v) => ({
      '@type': 'Question',
      name: v.domanda,
      acceptedAnswer: { '@type': 'Answer', text: v.risposta },
    })),
  }
}
