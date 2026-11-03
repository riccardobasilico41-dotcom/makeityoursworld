import type { Lingua } from './config'

/** Frasi del sito che cambiano con la lingua (titolo di default, descrizione, sottotitolo). */
export const SITO: Record<Lingua, { tagline: string; description: string }> = {
  it: {
    tagline: 'Itinerari e appunti di viaggio, un continente alla volta',
    description:
      'Diario di viaggio con itinerari giorno per giorno, consigli pratici e schede utili per organizzare il prossimo viaggio: dal Marocco alla Costa Rica, dalla Transilvania alla Florida.',
  },
  en: {
    tagline: 'Travel itineraries and field notes, one continent at a time',
    description:
      'A travel journal with day-by-day itineraries, practical tips and country guides to plan your next trip: from Morocco to Costa Rica, from Transylvania to Florida.',
  },
  es: {
    tagline: 'Itinerarios y apuntes de viaje, un continente cada vez',
    description:
      'Diario de viaje con itinerarios día a día, consejos prácticos y fichas útiles para organizar tu próximo viaje: de Marruecos a Costa Rica, de Transilvania a Florida.',
  },
}
