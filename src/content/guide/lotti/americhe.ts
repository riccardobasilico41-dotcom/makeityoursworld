import type { Guida } from '../types'
import { guidaNewYork } from '../new-york-itinerario'
import { guidaFlorida } from '../florida-road-trip'
import { guidaCalifornia } from '../california-road-trip'
import { guidaCanada } from '../canada-itinerario'
import { guidaMessicoBeachLife } from '../messico-beach-life'
import { guidaMessicoDiaDeLosMuertos } from '../messico-dia-de-los-muertos'

/** Guide di questo lotto: slug del viaggio → guida. */
export const guideAmeriche: Record<string, Guida> = {
  'new-york-itinerario': guidaNewYork,
  'florida-road-trip': guidaFlorida,
  'california-road-trip': guidaCalifornia,
  'canada-itinerario': guidaCanada,
  'messico-beach-life': guidaMessicoBeachLife,
  'messico-dia-de-los-muertos': guidaMessicoDiaDeLosMuertos,
}
