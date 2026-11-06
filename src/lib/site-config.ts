/*
 * Dati del sito in un posto solo. Contatti, titolare e moduli si accendono da qui:
 * ogni pagina (Lavoriamo insieme, Privacy, Trasparenza, domande sotto i viaggi) legge
 * questi valori, quindi un solo aggiornamento si propaga ovunque.
 *
 * Regola: `null` = dato che non c'è ancora. Non va mai sostituito con un segnaposto
 * («[email da inserire]», your@email.com, href="#"): le pagine nascondono da sole
 * pulsanti e link finché il dato manca.
 */

export type Social = {
  instagram?: string | null
  youtube?: string | null
  tiktok?: string | null
}

export type Contatti = {
  /** Email pubblica per consulenze e collaborazioni. */
  email: string | null
  phone: string | null
  /** Indirizzo postale pubblico, se mai servirà. */
  address: string | null
  /** Pagina esterna per fissare una consulenza (es. Cal.com). */
  bookingUrl: string | null
  /** URL completi dei profili social. Vuoto = nessun link social nel sito. */
  social: Social
  /**
   * Interruttore generale: finché è false il sito non mostra nessun contatto, nemmeno se
   * qualche campo qui sopra è già compilato. Mettilo a true solo quando l'email (o la pagina
   * di prenotazione) è attiva e qualcuno la legge.
   */
  contactEnabled: boolean
}

export type Titolare = {
  /** Nome e cognome (persona fisica) o ragione sociale. */
  nome: string | null
  /** Indirizzo postale o sede, obbligatorio nell'informativa (art. 13 GDPR). */
  indirizzo: string | null
  /** Email a cui esercitare i diritti privacy. Se null si usa `contact.email` (se attiva). */
  emailPrivacy: string | null
  /** Partita IVA, solo se il sito diventa un'attività economica (affiliazioni attive, consulenze a pagamento). */
  partitaIva: string | null
}

const contact: Contatti = {
  email: null,
  phone: null,
  address: null,
  bookingUrl: null,
  social: {},
  contactEnabled: false,
}

/** Titolare del sito per privacy e note legali. Il nome è quello già dichiarato da Rick; il resto manca. */
const titolare: Titolare = {
  nome: 'Riccardo Basilico',
  indirizzo: null,
  emailPrivacy: null,
  partitaIva: null,
}

const funzioni = {
  /**
   * Modulo «Fai una domanda» sotto i viaggi: raccoglie un nome e il testo della domanda e li
   * salva su Vercel Blob. Resta spento (default false) finché l'informativa non ha titolare
   * completo e un recapito privacy funzionante: vedi `domandeAttive` qui sotto.
   * Le domande già pubblicate restano visibili anche a modulo spento.
   */
  moduloDomande: false,
}

export const siteConfig = {
  name: 'Make It Yours World',
  brandName: 'Make It Yours World',
  shortName: 'Make It Yours',
  tagline: 'Itinerari e appunti di viaggio, un continente alla volta',
  description:
    'Diario di viaggio con itinerari giorno per giorno, consigli pratici e schede utili per organizzare il prossimo viaggio: dal Marocco alla Costa Rica, dalla Transilvania alla Florida.',
  // URL pubblico del sito. È la base di canonical, sitemap, anteprime social e
  // dati strutturati: se punta a un dominio che non risponde, Google indicizza
  // male o non indicizza affatto.
  //
  // Si imposta con la variabile d'ambiente NEXT_PUBLIC_SITE_URL (su Vercel:
  // Project Settings → Environment Variables), così si cambia dominio senza
  // toccare il codice. Il dominio scelto è makeityoursworld.com (non ancora
  // comprato): finché non è attivo il fallback resta l'indirizzo Vercel.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://makeityoursworld.vercel.app',
  contact,
  titolare,
  funzioni,
} as const

export type SiteConfig = typeof siteConfig

const pieno = (v: string | null | undefined): v is string => typeof v === 'string' && v.trim() !== ''

/** Contatti pubblici accesi e almeno un canale vero (email o pagina di prenotazione). */
export const contattiAttivi = contact.contactEnabled && (pieno(contact.email) || pieno(contact.bookingUrl))

/** Email pubblica da mostrare, o null se i contatti sono spenti o l'email manca. */
export const emailPubblica: string | null = contact.contactEnabled && pieno(contact.email) ? contact.email : null

/** Pagina di prenotazione da mostrare, o null. */
export const bookingPubblico: string | null =
  contact.contactEnabled && pieno(contact.bookingUrl) ? contact.bookingUrl : null

/** Profili social da linkare (solo con contatti accesi e URL completi). */
export const socialPubblici: { rete: keyof Social; url: string }[] = contact.contactEnabled
  ? (Object.entries(contact.social) as [keyof Social, string | null | undefined][])
      .filter((e): e is [keyof Social, string] => pieno(e[1]) && /^https:\/\//.test(e[1]))
      .map(([rete, url]) => ({ rete, url }))
  : []

/** Recapito per i diritti privacy: quello dedicato, altrimenti l'email pubblica. */
export const emailPrivacy: string | null = pieno(titolare.emailPrivacy) ? titolare.emailPrivacy : emailPubblica

/** Dati obbligatori dell'informativa che mancano ancora (spariscono da soli quando arrivano). */
export type DatoMancante = 'nome' | 'indirizzo' | 'emailPrivacy'
export const datiTitolareMancanti: DatoMancante[] = [
  ...(pieno(titolare.nome) ? [] : (['nome'] as const)),
  ...(pieno(titolare.indirizzo) ? [] : (['indirizzo'] as const)),
  ...(emailPrivacy ? [] : (['emailPrivacy'] as const)),
]

/**
 * Il modulo delle domande accetta invii solo se è acceso in `funzioni.moduloDomande`
 * E l'informativa è completa (titolare + recapito privacy): senza un recapito chi scrive
 * non potrebbe chiedere di cancellare la propria domanda.
 */
export const domandeAttive = funzioni.moduloDomande && datiTitolareMancanti.length === 0
