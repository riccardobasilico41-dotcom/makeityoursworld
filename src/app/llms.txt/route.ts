import { siteConfig } from '@/lib/site-config'
import { getAllViaggi } from '@/lib/viaggi'
import { getAllDestinazioni, getAllEsperienze, getAllPaesi } from '@/lib/geo'
import { getAllMeraviglie } from '@/lib/meraviglie'
import { getAllConsigli } from '@/lib/consigli'
import type { Lingua } from '@/lib/i18n/config'
import { localizza } from '@/lib/i18n/percorsi'
import { SITO } from '@/lib/i18n/sito'

export const dynamic = 'force-static'

const TESTI = {
  en: {
    intro:
      'Travel diary by Riccardo Basilico (osteopath and traveler): day-by-day itineraries with stops, places to stay, costs, mistakes to avoid and practical country guides. Content in English.',
    itinerari: 'Itineraries',
    paesi: 'Countries',
    destinazioni: 'Destinations',
    meraviglie: 'Wonders of the world',
    consigli: 'Travel tips',
    esperienze: 'Experiences',
  },
  it: {
    intro:
      'Diario di viaggio di Riccardo Basilico (osteopata e viaggiatore): itinerari giorno per giorno con tappe, pernottamenti, costi, errori da evitare e schede pratiche per Paese. Contenuti in italiano.',
    itinerari: 'Itinerari',
    paesi: 'Paesi',
    destinazioni: 'Destinazioni',
    meraviglie: 'Meraviglie del mondo',
    consigli: 'Consigli di viaggio',
    esperienze: 'Esperienze',
  },
  es: {
    intro:
      'Diario de viaje de Riccardo Basilico (osteópata y viajero): itinerarios día a día con etapas, alojamientos, costes, errores que evitar y fichas prácticas por país. Contenido en español.',
    itinerari: 'Itinerarios',
    paesi: 'Países',
    destinazioni: 'Destinos',
    meraviglie: 'Maravillas del mundo',
    consigli: 'Consejos de viaje',
    esperienze: 'Experiencias',
  },
} satisfies Record<Lingua, Record<string, string>>

/** Prima frase di un testo, per una descrizione breve. */
function breve(testo: string): string {
  const pulito = testo.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/\*\*?/g, '').replace(/\s+/g, ' ').trim()
  const fine = pulito.search(/[.!?](\s|$)/)
  return fine > 0 && fine < 220 ? pulito.slice(0, fine + 1) : pulito.slice(0, 200)
}

/** Sezione di una lingua: indirizzi nella lingua, testi dai dati nella lingua. */
function sezione(lingua: Lingua, titolo: string): string[] {
  const t = TESTI[lingua]
  const u = (p: string) => `${siteConfig.url}${localizza(p, lingua)}`
  return [
    titolo,
    '',
    `> ${SITO[lingua].description}`,
    '',
    t.intro,
    '',
    `### ${t.itinerari}`,
    ...getAllViaggi(lingua).map((v) => `- [${v.titolo}](${u(`/viaggi/${v.slug}`)}): ${v.descrizione}`),
    '',
    `### ${t.paesi}`,
    ...getAllPaesi(lingua).map((p) => `- [${p.nome}](${u(`/destinazioni/${p.slug}`)})`),
    '',
    `### ${t.destinazioni}`,
    ...getAllDestinazioni(lingua).map((d) => `- [${d.nome}](${u(`/destinazioni/${d.paeseSlug}/${d.slug}`)})`),
    '',
    `### ${t.meraviglie}`,
    ...getAllMeraviglie(lingua).map((m) => `- [${m.nome}](${u(`/meraviglie/${m.slug}`)}): ${breve(m.descrizione)}`),
    '',
    `### ${t.consigli}`,
    ...getAllConsigli().map((c) => {
      const testo = c.testi[lingua]
      return `- [${testo.titolo}](${u(`/consigli/${c.slug}`)}): ${testo.descrizione}`
    }),
    '',
    `### ${t.esperienze}`,
    ...getAllEsperienze(lingua).map((e) => `- [${e.nome}](${u(`/esperienze/${e.paeseSlug}/${e.slug}`)})`),
    '',
  ]
}

/**
 * llms.txt: indice in Markdown per i motori di risposta AI (ChatGPT, Perplexity,
 * Gemini). Generato dagli stessi dati delle pagine, quindi resta allineato.
 * Tre lingue: prima l'inglese, poi l'italiano (/it/…) e lo spagnolo (/es/…).
 */
export function GET() {
  const righe = [
    `# ${siteConfig.brandName}`,
    '',
    ...sezione('en', '## English'),
    ...sezione('it', '## Italiano'),
    ...sezione('es', '## Español'),
  ]
  return new Response(righe.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
