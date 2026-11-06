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

/**
 * Testi istituzionali condivisi (contatti, dati legali mancanti, modulo domande spento).
 * Li usano Lavoriamo insieme, Privacy, Trasparenza, Footer e le domande sotto i viaggi.
 */
export const ISTITUZIONALE: Record<
  Lingua,
  {
    contattiPresto: string
    mancantiTitolo: string
    mancantiTesto: string
    mancanti: Record<'nome' | 'indirizzo' | 'emailPrivacy', string>
    domandeChiuse: string
    recapitoNonDisponibile: string
  }
> = {
  it: {
    contattiPresto: 'I contatti saranno disponibili a breve.',
    mancantiTitolo: 'Dati del titolare ancora mancanti',
    mancantiTesto:
      'Questa pagina è in aggiornamento. Mancano ancora alcune informazioni che un’informativa deve contenere; finché non ci sono, il sito non raccoglie dati tramite moduli.',
    mancanti: {
      nome: 'nome o ragione sociale del titolare',
      indirizzo: 'indirizzo o sede del titolare',
      emailPrivacy: 'un recapito (email) per esercitare i diritti privacy',
    },
    domandeChiuse:
      'Le domande sotto i viaggi sono momentaneamente chiuse: riapriranno quando saranno pronti i contatti e l’informativa completa. Le risposte già pubblicate restano qui sotto.',
    recapitoNonDisponibile: 'recapito non ancora disponibile',
  },
  en: {
    contattiPresto: 'Contact details will be available soon.',
    mancantiTitolo: 'Controller details still missing',
    mancantiTesto:
      'This page is being updated. Some information a privacy notice must contain is still missing; until it is added, the site does not collect data through forms.',
    mancanti: {
      nome: 'name or company name of the controller',
      indirizzo: 'address or registered office of the controller',
      emailPrivacy: 'a contact (email) for exercising privacy rights',
    },
    domandeChiuse:
      'Questions under the trips are closed for now: they will reopen once the contact details and the full privacy notice are ready. Answers already published remain below.',
    recapitoNonDisponibile: 'contact not yet available',
  },
  es: {
    contattiPresto: 'Los datos de contacto estarán disponibles en breve.',
    mancantiTitolo: 'Faltan todavía datos del responsable',
    mancantiTesto:
      'Esta página se está actualizando. Aún faltan algunos datos que una política de privacidad debe incluir; mientras no estén, el sitio no recoge datos mediante formularios.',
    mancanti: {
      nome: 'nombre o razón social del responsable',
      indirizzo: 'dirección o domicilio del responsable',
      emailPrivacy: 'un contacto (correo electrónico) para ejercer los derechos de privacidad',
    },
    domandeChiuse:
      'Las preguntas bajo los viajes están cerradas por ahora: volverán a abrirse cuando estén listos los datos de contacto y la política de privacidad completa. Las respuestas ya publicadas siguen aquí debajo.',
    recapitoNonDisponibile: 'contacto aún no disponible',
  },
}
