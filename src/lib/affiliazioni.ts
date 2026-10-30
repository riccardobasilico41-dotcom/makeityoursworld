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
  /** Amazon Associates Italia: `tag` (es. makeityours-21). */
  amazon: { tag: '' },
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

export const link = {
  booking: (luogo: string) =>
    conParametri('https://www.booking.com/searchresults.it.html', { ss: luogo, aid: AFFILIAZIONI.booking.aid }),
  tripcomHotel: (luogo: string) =>
    conParametri('https://it.trip.com/hotels/list', {
      keyword: luogo,
      Allianceid: AFFILIAZIONI.tripcom.allianceId,
      SID: AFFILIAZIONI.tripcom.sid,
    }),
  tripcomTreniCina: () =>
    conParametri('https://it.trip.com/trains/china/', {
      Allianceid: AFFILIAZIONI.tripcom.allianceId,
      SID: AFFILIAZIONI.tripcom.sid,
    }),
  getyourguide: (cosa: string) =>
    conParametri('https://www.getyourguide.it/s/', { q: cosa, partner_id: AFFILIAZIONI.getyourguide.partnerId }),
  viator: (cosa: string) =>
    conParametri('https://www.viator.com/it-IT/searchResults/all', {
      text: cosa,
      pid: AFFILIAZIONI.viator.pid,
      mcid: AFFILIAZIONI.viator.mcid,
    }),
  amazon: (ricerca: string) => conParametri('https://www.amazon.it/s', { k: ricerca, tag: AFFILIAZIONI.amazon.tag }),
  assicurazione: () => AFFILIAZIONI.heymondo.link || 'https://www.heymondo.it/',
  esim: () => AFFILIAZIONI.airalo.link || 'https://www.airalo.com/it',
  esimAlternativa: () => AFFILIAZIONI.holafly.link || 'https://esim.holafly.com/it/',
  auto: () => AFFILIAZIONI.discovercars.link || 'https://www.discovercars.com/it',
  voli: () => AFFILIAZIONI.skyscanner.link || 'https://www.skyscanner.it/',
}

/** Attributi comuni dei link verso i partner. */
export const relAffiliato = 'sponsored nofollow noopener noreferrer'
