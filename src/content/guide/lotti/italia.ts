import type { Guida } from '../types'
import { guidaCostieraEIsole } from '../costiera-e-isole'
import { guidaDolomitiRoadtrip } from '../dolomiti-roadtrip'
import { guidaEolieInVela } from '../eolie-in-vela'
import { guidaFirenze3Giorni } from '../firenze-3-giorni'
import { guidaGrandiCittaItalia } from '../grandi-citta-italia'
import { guidaMilanoEILaghi } from '../milano-e-i-laghi'
import { guidaNapoli3Giorni } from '../napoli-3-giorni'
import { guidaRoma4Giorni } from '../roma-4-giorni'
import { guidaSiciliaCompleta } from '../sicilia-completa'
import { guidaSiciliaItinerario } from '../sicilia-itinerario'
import { guidaTorino2Giorni } from '../torino-2-giorni'
import { guidaVenezia3Giorni } from '../venezia-3-giorni'

/** Guide di questo lotto: slug del viaggio → guida. */
export const guideItalia: Record<string, Guida> = {
  'costiera-e-isole': guidaCostieraEIsole,
  'dolomiti-roadtrip': guidaDolomitiRoadtrip,
  'eolie-in-vela': guidaEolieInVela,
  'firenze-3-giorni': guidaFirenze3Giorni,
  'grandi-citta-italia': guidaGrandiCittaItalia,
  'milano-e-i-laghi': guidaMilanoEILaghi,
  'napoli-3-giorni': guidaNapoli3Giorni,
  'roma-4-giorni': guidaRoma4Giorni,
  'sicilia-completa': guidaSiciliaCompleta,
  'sicilia-itinerario': guidaSiciliaItinerario,
  'torino-2-giorni': guidaTorino2Giorni,
  'venezia-3-giorni': guidaVenezia3Giorni,
}
