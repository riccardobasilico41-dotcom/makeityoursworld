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

export const creditiMeraviglie: Record<string, CreditoImmagine> = {}
