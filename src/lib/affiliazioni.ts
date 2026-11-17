import type { Lingua } from './i18n/config'
import { siteConfig } from './site-config'

/**
 * Link verso i partner (alloggi, tour, eSIM, assicurazione…) in un posto solo.
 * Gli ID si compilano in `siteConfig.affiliati` (src/lib/site-config.ts): finché sono
 * vuoti i link funzionano comunque (portano alla ricerca giusta sul sito del partner)
 * ma sono link normali. Con l'ID compilato diventano affiliati: `linkPartner()` dà
 * allora rel="sponsored noopener" e `affiliato: true`, che accende l'avviso accanto.
 */
const A = siteConfig.affiliati
export const AFFILIAZIONI = {
  booking: A.booking,
  tripcom: A.tripcom,
  getyourguide: A.getyourguide,
  viator: A.viator,
  amazon: A.amazon as Record<Lingua, string>,
  heymondo: A.assicurazione,
  airalo: A.airalo,
  holafly: A.holafly,
  discovercars: A.discovercars,
  skyscanner: A.skyscanner,
}

export type PartnerAffiliato = keyof typeof AFFILIAZIONI

/** Un partner è affiliato quando in site-config c'è almeno un suo ID o link. */
export const partnerAttivo = (p: PartnerAffiliato) =>
  Object.values(AFFILIAZIONI[p]).some((v) => typeof v === 'string' && v.trim() !== '')

/** Vero se almeno un programma è attivo: serve per mostrare l'avviso «link affiliati». */
export const affiliazioniAttive = (Object.keys(AFFILIAZIONI) as PartnerAffiliato[]).some(partnerAttivo)

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

/** Attributi comuni dei link verso i partner (usato da attrezzatura: Amazon). */
export const relAffiliato = 'sponsored nofollow noopener noreferrer'

/** rel per un link affiliato e per un link normale verso un sito esterno. */
export const REL_AFFILIATO = 'sponsored noopener'
export const REL_ESTERNO = 'noopener noreferrer'

export type LinkPartner = { href: string; rel: string; affiliato: boolean; partner: PartnerAffiliato | null }

/**
 * Il link pronto per un `<a>`: con l'ID vuoto è un link normale, con l'ID compilato è
 * affiliato (rel="sponsored noopener"). `affiliato` serve a mostrare l'avviso accanto.
 */
export function linkPartner(partner: PartnerAffiliato, href: string): LinkPartner {
  const affiliato = partnerAttivo(partner)
  return { href, rel: affiliato ? REL_AFFILIATO : REL_ESTERNO, affiliato, partner }
}

/** Scorciatoie per i link contestuali (Prenota, Cerca tour, Organizza il viaggio). */
export const prenota = {
  /** Ricerca Booking per «<hotel>, <città>» o per una città. */
  hotel: (cosa: string, lingua: Lingua) => linkPartner('booking', link.booking(cosa, lingua)),
  hotelAsia: (cosa: string, lingua: Lingua) => linkPartner('tripcom', link.tripcomHotel(cosa, lingua)),
  treniCina: (lingua: Lingua) => linkPartner('tripcom', link.tripcomTreniCina(lingua)),
  tour: (cosa: string, lingua: Lingua) => linkPartner('getyourguide', link.getyourguide(cosa, lingua)),
  esim: (lingua: Lingua) => linkPartner('airalo', link.esim(lingua)),
  esimAlternativa: (lingua: Lingua) => linkPartner('holafly', link.esimAlternativa(lingua)),
  assicurazione: (lingua: Lingua) => linkPartner('heymondo', link.assicurazione(lingua)),
  auto: (lingua: Lingua) => linkPartner('discovercars', link.auto(lingua)),
  voli: (lingua: Lingua) => linkPartner('skyscanner', link.voli(lingua)),
}

const HOST_PARTNER: [RegExp, PartnerAffiliato][] = [
  [/booking\.com$/, 'booking'],
  [/trip\.com$/, 'tripcom'],
  [/getyourguide\./, 'getyourguide'],
  [/viator\.com$/, 'viator'],
  [/amazon\./, 'amazon'],
  [/heymondo\./, 'heymondo'],
  [/airalo\.com$/, 'airalo'],
  [/holafly\.com$/, 'holafly'],
  [/discovercars\.com$/, 'discovercars'],
  [/skyscanner\./, 'skyscanner'],
]

/** Come `linkPartner`, ma riconosce il partner dall'indirizzo (per i link già costruiti con `link.*`). */
export function linkDaHref(href: string): LinkPartner {
  let host = ''
  try {
    host = new URL(href).hostname
  } catch {}
  const partner = HOST_PARTNER.find(([re]) => re.test(host))?.[1]
  if (!partner) return { href, rel: REL_ESTERNO, affiliato: false, partner: null }
  // con un link affiliato completo (eSIM, assicurazione…) l'indirizzo è già quello del partner
  return linkPartner(partner, href)
}
