import type { Guida } from '../types'
import { guidaMarocco } from '../marocco-itinerario'
import { guidaStopoverGolfo } from '../stopover-golfo'
import { guidaArabiaSaudita } from '../arabia-saudita-itinerario'
import { guidaEgittoMare } from '../egitto-mare-luxor-cairo'
import { guidaEgittoCompleto } from '../egitto-completo'

/** Guide di questo lotto: slug del viaggio → guida. */
export const guideMedioOriente: Record<string, Guida> = {
  'marocco-itinerario': guidaMarocco,
  'stopover-golfo': guidaStopoverGolfo,
  'arabia-saudita-itinerario': guidaArabiaSaudita,
  'egitto-mare-luxor-cairo': guidaEgittoMare,
  'egitto-completo': guidaEgittoCompleto,
}
