import { siteConfig } from '@/lib/site-config'
import { getAllViaggi } from '@/lib/viaggi'
import { getAllPaesi } from '@/lib/geo'
import { getAllMeraviglie } from '@/lib/meraviglie'

export const dynamic = 'force-static'

/**
 * llms.txt: indice in Markdown per i motori di risposta AI (ChatGPT, Perplexity,
 * Gemini). Generato dagli stessi dati delle pagine, quindi resta allineato.
 */
export function GET() {
  const u = (p: string) => `${siteConfig.url}${p}`
  const righe = [
    `# ${siteConfig.brandName}`,
    '',
    `> ${siteConfig.description}`,
    '',
    'Diario di viaggio di Riccardo Basilico (osteopata e viaggiatore): itinerari giorno per giorno con tappe, pernottamenti, costi, errori da evitare e schede pratiche per Paese. Contenuti in italiano.',
    '',
    '## Itinerari',
    ...getAllViaggi().map((v) => `- [${v.titolo}](${u(`/viaggi/${v.slug}`)}): ${v.descrizione}`),
    '',
    '## Paesi',
    ...getAllPaesi().map((p) => `- [${p.nome}](${u(`/destinazioni/${p.slug}`)})`),
    '',
    '## Meraviglie del mondo',
    ...getAllMeraviglie().map((m) => `- [${m.nome}](${u(`/meraviglie/${m.slug}`)})`),
    '',
  ]
  return new Response(righe.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
