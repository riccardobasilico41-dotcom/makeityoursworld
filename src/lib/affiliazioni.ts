import type { Lingua } from './i18n/config'

/**
 * Link di affiliazione in un posto solo. Gli ID sono vuoti finché Rick non
 * si iscrive ai programmi: in quel caso i link funzionano comunque (portano
 * alla ricerca giusta sul sito del partner) ma senza tracciamento. Per
 * attivare un programma basta incollare qui il suo ID o il link affiliato.
 *
 * Tutti i link escono con rel="sponsored nofollow noopener" (vedi LinkAffiliato).
 */
export const AFFILIAZIONI = {
  /** Booking.com Affiliate Partner Programme: parametro `aid`. */
  booking: { aid: '' },
  /** Trip.com Affiliate: `Allianceid` e `SID`. Usato per gli itinerari in Asia. */
  tripcom: { allianceId: '', sid: '' },
  /** GetYourGuide Partner: `partner_id`. */
  getyourguide: { partnerId: '' },
  /** Viator (Tripadvisor) Partner: `pid` e `mcid`. */
  viator: { pid: '', mcid: '' },
  /**
   * Amazon Associates: un `tag` per negozio, perché ogni programma nazionale ha il suo
   * (Italia e Spagna finiscono in -21, Stati Uniti in -20). Vuoto = link senza affiliazione.
   */
  amazon: { it: '', en: '', es: '' } as Record<Lingua, string>,
  /** Link affiliati completi, da incollare quando arrivano dai programmi. */
  heymondo: { link: '' },
  airalo: { link: '' },
  holafly: { link: '' },
  discovercars: { link: '' },
  skyscanner: { link: '' },
}

/** Vero se almeno un programma è attivo: serve per mostrare l'avviso «link affiliati». */
export const affiliazioniAttive = Object.values(AFFILIAZIONI).some((p) => Object.values(p).some(Boolean))

function conParametri(base: string, parametri: Record<string, string>) {
  const url = new URL(base)
  for (const [k, v] of Object.entries(parametri)) if (v) url.searchParams.set(k, v)
  return url.toString()
}

/** Siti dei partner nella lingua della pagina (it come prima; en: versione internazionale/USA; es: Spagna). */
const SITI = {
  it: {
    booking: 'https://www.booking.com/searchresults.it.html',
    tripHotel: 'https://it.trip.com/hotels/list',
    tripTreni: 'https://it.trip.com/trains/china/',
    gyg: 'https://www.getyourguide.it/s/',
    viator: 'https://www.viator.com/it-IT/searchResults/all',
    amazon: 'https://www.amazon.it/s',
    heymondo: 'https://www.heymondo.it/',
    airalo: 'https://www.airalo.com/it',
    holafly: 'https://esim.holafly.com/it/',
    auto: 'https://www.discovercars.com/it',
    voli: 'https://www.skyscanner.it/',
  },
  en: {
    booking: 'https://www.booking.com/searchresults.en-us.html',
    tripHotel: 'https://www.trip.com/hotels/list',
    tripTreni: 'https://www.trip.com/trains/china/',
    gyg: 'https://www.getyourguide.com/s/',
    viator: 'https://www.viator.com/searchResults/all',
    amazon: 'https://www.amazon.com/s',
    heymondo: 'https://www.heymondo.com/',
    airalo: 'https://www.airalo.com/',
    holafly: 'https://esim.holafly.com/',
    auto: 'https://www.discovercars.com/',
    voli: 'https://www.skyscanner.com/',
  },
  es: {
    booking: 'https://www.booking.com/searchresults.es.html',
    tripHotel: 'https://es.trip.com/hotels/list',
    tripTreni: 'https://es.trip.com/trains/china/',
    gyg: 'https://www.getyourguide.es/s/',
    viator: 'https://www.viator.com/es-ES/searchResults/all',
    amazon: 'https://www.amazon.es/s',
    heymondo: 'https://www.heymondo.es/',
    airalo: 'https://www.airalo.com/es',
    holafly: 'https://esim.holafly.com/es/',
    auto: 'https://www.discovercars.com/es',
    voli: 'https://www.skyscanner.es/',
  },
} satisfies Record<Lingua, Record<string, string>>

export const link = {
  booking: (luogo: string, lingua: Lingua) =>
    conParametri(SITI[lingua].booking, { ss: luogo, aid: AFFILIAZIONI.booking.aid }),
  tripcomHotel: (luogo: string, lingua: Lingua) =>
    conParametri(SITI[lingua].tripHotel, {
      keyword: luogo,
      Allianceid: AFFILIAZIONI.tripcom.allianceId,
      SID: AFFILIAZIONI.tripcom.sid,
    }),
  tripcomTreniCina: (lingua: Lingua) =>
    conParametri(SITI[lingua].tripTreni, {
      Allianceid: AFFILIAZIONI.tripcom.allianceId,
      SID: AFFILIAZIONI.tripcom.sid,
    }),
  getyourguide: (cosa: string, lingua: Lingua) =>
    conParametri(SITI[lingua].gyg, { q: cosa, partner_id: AFFILIAZIONI.getyourguide.partnerId }),
  viator: (cosa: string, lingua: Lingua) =>
    conParametri(SITI[lingua].viator, {
      text: cosa,
      pid: AFFILIAZIONI.viator.pid,
      mcid: AFFILIAZIONI.viator.mcid,
    }),
  amazon: (ricerca: string, lingua: Lingua) =>
    conParametri(SITI[lingua].amazon, { k: ricerca, tag: AFFILIAZIONI.amazon[lingua] }),
  assicurazione: (lingua: Lingua) => AFFILIAZIONI.heymondo.link || SITI[lingua].heymondo,
  esim: (lingua: Lingua) => AFFILIAZIONI.airalo.link || SITI[lingua].airalo,
  esimAlternativa: (lingua: Lingua) => AFFILIAZIONI.holafly.link || SITI[lingua].holafly,
  auto: (lingua: Lingua) => AFFILIAZIONI.discovercars.link || SITI[lingua].auto,
  voli: (lingua: Lingua) => AFFILIAZIONI.skyscanner.link || SITI[lingua].voli,
}

/** Attributi comuni dei link verso i partner. */
export const relAffiliato = 'sponsored nofollow noopener noreferrer'
