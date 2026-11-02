import type { Guida } from '../types'
import { guidaLisbona } from '../lisbona-weekend'
import { guidaAndalusia } from '../andalusia-itinerario'
import { guidaBaleari } from '../baleari-itinerario'
import { guidaCanarie } from '../canarie-itinerario'
import { guidaCroazia } from '../croazia-itinerario'

/** Guide di questo lotto: slug del viaggio → guida. */
export const guideEuropa: Record<string, Guida> = {
  'lisbona-weekend': guidaLisbona,
  'andalusia-itinerario': guidaAndalusia,
  'baleari-itinerario': guidaBaleari,
  'canarie-itinerario': guidaCanarie,
  'croazia-itinerario': guidaCroazia,
}
