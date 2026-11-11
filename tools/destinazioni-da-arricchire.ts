// Elenca le destinazioni senza FAQ (cioè non ancora portate al nuovo modello), per Paese.
//   npx tsx --tsconfig tsconfig.json tools/destinazioni-da-arricchire.ts
import { getAllPaesi, getDestinazioniByPaese } from '@/lib/geo'
let n = 0
for (const p of getAllPaesi('it')) {
  const l = getDestinazioniByPaese(p.slug, 'it').filter((d) => !d.faq?.length).map((d) => d.slug)
  if (l.length) { n += l.length; console.log(p.slug + ': ' + l.join(' ')) }
}
console.log('TOT', n)
