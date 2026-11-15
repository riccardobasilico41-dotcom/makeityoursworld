/**
 * Crediti fotografici per le immagini hero delle Sette Meraviglie, sourced da
 * Wikimedia Commons (vedi `src/content/meraviglie.ts`, campo `heroImage`).
 *
 * Le licenze CC BY e CC BY-SA richiedono attribuzione: questo file la tiene
 * tracciata in un posto solo, leggibile da chi mantiene il sito. Non è
 * ancora mostrata in pagina (nessuna richiesta in tal senso) — se in futuro
 * si vuole un credito visibile (es. una piccola dicitura sotto l'immagine o
 * una pagina "crediti fotografici"), i dati sono già tutti qui pronti da
 * collegare, senza dover ripercorrere ogni fonte da capo.
 *
 * Chiave = `Meraviglia['slug']`, stessa chiave usata in `meraviglie.ts`.
 */

import type { CreditoImmagine } from './viaggi-copertine-crediti'

export const creditiMeraviglie: Record<string, CreditoImmagine> = {
  'grande-muraglia-cinese': { autore: 'Velatrix', licenza: 'CC0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Great_Wall_of_China_July_2006.JPG' },
  'cristo-redentore': { autore: 'Jay.Jarosz', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Corcovado_sunset_silhouette.jpg' },
  'chichen-itza': { autore: 'Fcb981', licenza: 'CC BY-SA 3.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:El_Castillo_Stitch_2008_Edit_2.jpg' },
  'colosseo': { autore: 'Wilfredor', licenza: 'CC0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Colosseum_of_Rome_and_Roman_forum.jpg' },
}
