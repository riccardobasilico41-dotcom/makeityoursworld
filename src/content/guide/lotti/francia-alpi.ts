import type { Guida } from '../types'
import { guidaCostaAzzurra } from '../costa-azzurra'
import { guidaParigi } from '../parigi-5-giorni'
import { guidaNormandiaBretagna } from '../normandia-bretagna'
import { guidaBordeaux } from '../bordeaux-e-vigneti'

/** Guide di questo lotto: slug del viaggio → guida. */
export const guideFranciaAlpi: Record<string, Guida> = {
  'costa-azzurra': guidaCostaAzzurra,
  'parigi-5-giorni': guidaParigi,
  'normandia-bretagna': guidaNormandiaBretagna,
  'bordeaux-e-vigneti': guidaBordeaux,
}
