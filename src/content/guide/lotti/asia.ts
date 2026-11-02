import type { Guida } from '../types'
import { guidaThailandia } from '../thailandia'
import { guidaCinaClassica } from '../cina-classica'
import { guidaCinaPaesaggi } from '../cina-paesaggi'
import { guidaCorea } from '../corea-del-sud-itinerario'
import { guidaMalesiaSingapore } from '../malesia-singapore'
import { guidaBorneo } from '../borneo-itinerario'
import { guidaIndonesia } from '../indonesia-itinerario'
/** Guide di questo lotto: slug del viaggio → guida. */
export const guideAsia: Record<string, Guida> = {
  thailandia: guidaThailandia,
  'cina-classica': guidaCinaClassica,
  'cina-paesaggi': guidaCinaPaesaggi,
  'corea-del-sud-itinerario': guidaCorea,
  'malesia-singapore': guidaMalesiaSingapore,
  'borneo-itinerario': guidaBorneo,
  'indonesia-itinerario': guidaIndonesia,
}
