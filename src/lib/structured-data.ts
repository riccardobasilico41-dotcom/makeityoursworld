import { siteConfig } from './site-config'
import { LOCALE, type Lingua } from './i18n/config'
import { localizza } from './i18n/percorsi'

/**
 * Helper per i dati strutturati schema.org. Restituiscono oggetti da passare a
 * <JsonLd />: tenerli qui evita di ripetere url assoluti e @context in ogni
 * pagina, e rende esplicito quale tipo usiamo dove.
 */

/** `percorso` è canonico (italiano, senza prefisso): lo traduce per la lingua. */
function url(percorso: string, lingua: Lingua): string {
  return `${siteConfig.url}${localizza(percorso, lingua)}`
}

const T = {
  it: { jobTitle: 'Osteopata', knowsAbout: ['Viaggi', 'Itinerari di viaggio', 'Trekking', 'Osteopatia'] },
  en: { jobTitle: 'Osteopath', knowsAbout: ['Travel', 'Travel itineraries', 'Trekking', 'Osteopathy'] },
  es: { jobTitle: 'Osteópata', knowsAbout: ['Viajes', 'Itinerarios de viaje', 'Senderismo', 'Osteopatía'] },
} satisfies Record<Lingua, { jobTitle: string; knowsAbout: string[] }>

/** Chi scrive il sito: stessa persona della sezione «The face behind the project» in Home. */
export function autore(lingua: Lingua) {
  return {
    '@type': 'Person',
    '@id': `${siteConfig.url}/#riccardo-basilico`,
    name: 'Riccardo Basilico',
    alternateName: 'Rick',
    jobTitle: T[lingua].jobTitle,
    image: `${siteConfig.url}/images/chi-sono/riccardo-basilico-taj-mahal.jpg`,
    url: url('/chi-sono', lingua),
    knowsAbout: T[lingua].knowsAbout,
  }
}

/** Versione italiana, tenuta per compatibilità. */
export const AUTORE = autore('it')

/** Autore, per la Home (il WebSite è già nel layout): dice a Google e ai motori AI chi c'è dietro il diario. */
export function autoreJsonLd(lingua: Lingua) {
  return { '@context': 'https://schema.org', ...autore(lingua) }
}

export type VoceBreadcrumb = { nome: string; percorso: string }

/** Traccia il percorso di navigazione: aiuta Google a mostrare le briciole nei risultati. */
export function breadcrumbJsonLd(voci: VoceBreadcrumb[], lingua: Lingua) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: voci.map((voce, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: voce.nome,
      item: url(voce.percorso, lingua),
    })),
  }
}

/** Un itinerario raccontato giorno per giorno è a tutti gli effetti un articolo di diario. */
export function articoloViaggioJsonLd(
  {
    titolo,
    descrizione,
    percorso,
    sezioni,
    aggiornato,
  }: {
    titolo: string
    descrizione: string
    percorso: string
    sezioni: string[]
    /** Data dell'ultima modifica, AAAA-MM-GG. */
    aggiornato?: string
  },
  lingua: Lingua,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: titolo,
    description: descrizione,
    url: url(percorso, lingua),
    image: `${url(percorso, lingua)}/opengraph-image`,
    inLanguage: LOCALE[lingua].html,
    author: autore(lingua),
    publisher: autore(lingua),
    isPartOf: {
      '@type': 'Blog',
      name: siteConfig.brandName,
      url: siteConfig.url,
    },
    articleSection: sezioni,
    ...(aggiornato ? { dateModified: aggiornato } : {}),
  }
}

/** Indice di raccolta: usato dalle pagine elenco (viaggi, destinazioni, meraviglie). */
export function raccoltaJsonLd(
  {
    nome,
    descrizione,
    percorso,
    elementi,
  }: {
    nome: string
    descrizione: string
    percorso: string
    elementi: { nome: string; percorso: string }[]
  },
  lingua: Lingua,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: nome,
    description: descrizione,
    url: url(percorso, lingua),
    inLanguage: LOCALE[lingua].html,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: elementi.length,
      itemListElement: elementi.map((elemento, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: elemento.nome,
        url: url(elemento.percorso, lingua),
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
export function faqJsonLd(voci: DomandaRisposta[], lingua: Lingua) {
  const piene = voci
    .filter((v): v is Required<DomandaRisposta> => Boolean(v.risposta?.trim()))
    .map((v) => ({ ...v, risposta: v.risposta.replace(/\*\*|__|\[([^\]]+)\]\([^)]*\)/g, '$1').trim() }))
  if (piene.length < 2) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: LOCALE[lingua].html,
    mainEntity: piene.map((v) => ({
      '@type': 'Question',
      name: v.domanda,
      acceptedAnswer: { '@type': 'Answer', text: v.risposta },
    })),
  }
}
