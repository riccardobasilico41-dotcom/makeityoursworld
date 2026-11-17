import type { Meraviglia } from '@/lib/types'
import type { Lingua } from '@/lib/i18n/config'

/**
 * Guida completa delle meraviglie (luoghi, programmi, biglietti, mesi, zone, gite, FAQ, galleria),
 * un file per meraviglia e per lingua: src/content/meraviglie-guide/<lingua>/<slug>.ts,
 * ognuno con `export const guida: GuidaMeraviglia`. Si fonde sopra i dati base in src/lib/meraviglie.ts.
 */
export type GuidaMeraviglia = Pick<
  Meraviglia,
  'luoghi' | 'programmi' | 'biglietti' | 'mesi' | 'zone' | 'gite' | 'faq' | 'galleria' | 'destinazione'
> & {
  /** Sostituisce il campo `prezzi` testuale quando la ricerca ha trovato prezzi ufficiali. */
  prezzi?: string
}

// Registro delle guide: una per meraviglia e per lingua.
import { guida as itGrandeMuragliaCinese } from './it/grande-muraglia-cinese'
import { guida as itPetra } from './it/petra'
import { guida as itCristoRedentore } from './it/cristo-redentore'
import { guida as itMachuPicchu } from './it/machu-picchu'
import { guida as itChichenItza } from './it/chichen-itza'
import { guida as itColosseo } from './it/colosseo'
import { guida as itTajMahal } from './it/taj-mahal'
import { guida as enGrandeMuragliaCinese } from './en/grande-muraglia-cinese'
import { guida as enPetra } from './en/petra'
import { guida as enCristoRedentore } from './en/cristo-redentore'
import { guida as enMachuPicchu } from './en/machu-picchu'
import { guida as enChichenItza } from './en/chichen-itza'
import { guida as enColosseo } from './en/colosseo'
import { guida as enTajMahal } from './en/taj-mahal'
import { guida as esGrandeMuragliaCinese } from './es/grande-muraglia-cinese'
import { guida as esPetra } from './es/petra'
import { guida as esCristoRedentore } from './es/cristo-redentore'
import { guida as esMachuPicchu } from './es/machu-picchu'
import { guida as esChichenItza } from './es/chichen-itza'
import { guida as esColosseo } from './es/colosseo'
import { guida as esTajMahal } from './es/taj-mahal'

export const GUIDE: Record<Lingua, Record<string, GuidaMeraviglia>> = {
  it: { 'grande-muraglia-cinese': itGrandeMuragliaCinese, 'petra': itPetra, 'cristo-redentore': itCristoRedentore, 'machu-picchu': itMachuPicchu, 'chichen-itza': itChichenItza, 'colosseo': itColosseo, 'taj-mahal': itTajMahal },
  en: { 'grande-muraglia-cinese': enGrandeMuragliaCinese, 'petra': enPetra, 'cristo-redentore': enCristoRedentore, 'machu-picchu': enMachuPicchu, 'chichen-itza': enChichenItza, 'colosseo': enColosseo, 'taj-mahal': enTajMahal },
  es: { 'grande-muraglia-cinese': esGrandeMuragliaCinese, 'petra': esPetra, 'cristo-redentore': esCristoRedentore, 'machu-picchu': esMachuPicchu, 'chichen-itza': esChichenItza, 'colosseo': esColosseo, 'taj-mahal': esTajMahal },
}
