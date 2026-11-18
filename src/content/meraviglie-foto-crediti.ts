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
  'colosseo': { autore: 'Wilfredor', licenza: 'CC0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Colosseum_of_Rome_and_Roman_forum.jpg' },
  // Galleria della guida (chiave = slug/nome file in public/images/meraviglie/<slug>/)
  'grande-muraglia-cinese/jinshanling': { autore: 'Mx. Granger', licenza: 'CC0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Great_Wall_at_Jinshanling.JPG' },
  'grande-muraglia-cinese/mutianyu-toboga': { autore: 'David Berkowitz', licenza: 'CC BY 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Toboggan_ride_at_Mutianyu_section_of_Great_Wall_of_China.jpg' },
  'grande-muraglia-cinese/badaling-neve': { autore: 'Steven Sun', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Badaling_Great_Wall_(South)_in_snow_20261108_01.jpg' },
  'grande-muraglia-cinese/gubei-da-simatai': { autore: 'Codas', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:View_of_Gubei_from_Simatai_great_wall_02.jpg' },
  'grande-muraglia-cinese/huanghuacheng': { autore: 'Johannes Böckh', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Great_Wall_of_China_at_Huanghuacheng_(west)_Summer_35.jpg' },
  'grande-muraglia-cinese/simatai': { autore: 'Prince Roy', licenza: 'CC BY 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Simatai_section_of_the_Great_Wall.jpg' },
  'cristo-redentore/vista-pan-di-zucchero': { autore: 'Jazzmaster1997', licenza: 'CC0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Tourists_overlooking_Sugarloaf_Mountain_from_Corcovado_-_Rio_de_Janeiro.jpg' },
  'cristo-redentore/statua-dettaglio': { autore: 'Dkoukoul', licenza: 'CC BY-SA 3.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Detail,_Christ_the_Redeemer_statue.JPG' },
  'cristo-redentore/trem-cosme-velho': { autore: 'Geogast', licenza: 'CC BY 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Trem_do_Corcovado_%E2%80%A2_Esta%C3%A7%C3%A3o_Cosme_Velho_%E2%80%A2_Trem_da_4%C2%AA_gera%C3%A7%C3%A3o_%E2%80%A2_1.jpg' },
  'cristo-redentore/parque-lage': { autore: 'Caioviniciuscosta', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Parque_Lage_e_Cristo_de_fundo.jpg' },
  'cristo-redentore/cascatinha-tijuca': { autore: 'Claudia Baptista de Souza', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Cascatinha,_Floresta_da_Tijuca.jpg' },
  'cristo-redentore/bonde-santa-teresa': { autore: 'MTur Destinos', licenza: 'Pubblico dominio', fonteUrl: 'https://commons.wikimedia.org/wiki/File:BrunaPrado_Bonde_de_Santa_Teresa_Rio_de_Janeiro_RJ_(41577817931).jpg' },
}
