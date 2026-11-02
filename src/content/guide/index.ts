import type { Guida } from './types'
import { guidaGiappone } from './giappone-itinerario'
import { guidaGiordania } from './giordania-itinerario'
import { guidaPeru } from './peru-itinerario'
import { guidaSriLanka } from './sri-lanka-2023'
// un file per lotto, così chi li compila in parallelo non si pesta i piedi
import { guideItalia } from './lotti/italia'
import { guideFranciaAlpi } from './lotti/francia-alpi'
import { guideEuropa } from './lotti/europa'
import { guideAsia } from './lotti/asia'
import { guideAmeriche } from './lotti/americhe'
import { guideMedioOriente } from './lotti/medio-oriente'

/** Registro delle guide PDF: lo slug è quello della pagina /guide/[slug]/stampa. */
export const guide: Record<string, Guida> = {
  'giordania-itinerario': guidaGiordania,
  'giappone-itinerario': guidaGiappone,
  'peru-itinerario': guidaPeru,
  'sri-lanka-2023': guidaSriLanka,
  ...guideItalia,
  ...guideFranciaAlpi,
  ...guideEuropa,
  ...guideAsia,
  ...guideAmeriche,
  ...guideMedioOriente,
}
