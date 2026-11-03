import { siteConfig } from '@/lib/site-config'
import { getAllViaggi } from '@/lib/viaggi'
import { getAllPaesi } from '@/lib/geo'
import { getAllMeraviglie } from '@/lib/meraviglie'
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
    meraviglie: 'Wonders of the world',
  },
  it: {
    intro:
      'Diario di viaggio di Riccardo Basilico (osteopata e viaggiatore): itinerari giorno per giorno con tappe, pernottamenti, costi, errori da evitare e schede pratiche per Paese. Contenuti in italiano.',
    itinerari: 'Itinerari',
    paesi: 'Paesi',
    meraviglie: 'Meraviglie del mondo',
  },
} satisfies Partial<Record<Lingua, Record<string, string>>>

/** Sezione di una lingua: indirizzi nella lingua, testi dai dati nella lingua. */
function sezione(lingua: 'en' | 'it', titolo: string): string[] {
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
    `### ${t.meraviglie}`,
    ...getAllMeraviglie(lingua).map((m) => `- [${m.nome}](${u(`/meraviglie/${m.slug}`)})`),
    '',
  ]
}

/**
 * llms.txt: indice in Markdown per i motori di risposta AI (ChatGPT, Perplexity,
 * Gemini). Generato dagli stessi dati delle pagine, quindi resta allineato.
 * Bilingue: prima la sezione inglese, poi quella italiana (indirizzi /it/…).
 */
export function GET() {
  const righe = [`# ${siteConfig.brandName}`, '', ...sezione('en', '## English'), ...sezione('it', '## Italiano')]
  return new Response(righe.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
