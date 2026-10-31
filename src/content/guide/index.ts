import type { Guida } from './types'
import { guidaGiappone } from './giappone-itinerario'
import { guidaGiordania } from './giordania-itinerario'
import { guidaPeru } from './peru-itinerario'
import { guidaSriLanka } from './sri-lanka-2023'

/** Registro delle guide PDF: lo slug è quello della pagina /guide/[slug]/stampa. */
export const guide: Record<string, Guida> = {
  'giordania-itinerario': guidaGiordania,
  'giappone-itinerario': guidaGiappone,
  'peru-itinerario': guidaPeru,
  'sri-lanka-2023': guidaSriLanka,
}
