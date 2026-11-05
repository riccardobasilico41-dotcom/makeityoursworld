import type { Paese } from '@/lib/types'

// Scheda «Irlanda del Nord»: regione del Regno Unito, non Stato sovrano (tipo: 'regione').
// Informativa, senza ricordi di Rick. Verificata a novembre 2026 su ireland.com (documenti ed ETA),
// gov.uk (ETA), nidirect.gov.uk (guida e sanità), National Trust, ONS e Wikipedia per la storia.

export const irlandaDelNord: Paese = {
  slug: 'irlanda-del-nord',
  nome: 'Irlanda del Nord',
  continente: 'Europa',
  tipo: 'regione',
  stato: 'Regno Unito',
  titolo: 'Irlanda del Nord: Belfast, la Causeway Coast e Derry/Londonderry',
  descrizione:
    'Sei contee del nord dell\'isola che fanno parte del Regno Unito. Belfast con i murales e i peace walls, la costa di Antrim con il Giant\'s Causeway e le Dark Hedges, Derry/Londonderry dentro le mura del Seicento. È la parte del viaggio dove si capisce la storia delle due Irlande, i Troubles e la pace del 1998.',
  periodoMigliore: 'da maggio a settembre; a luglio, attorno al 12, ci sono le parate e i falò della tradizione orangista',
  durataConsigliata: '3-4 giorni, dentro un anello di 12 giorni con la Repubblica d\'Irlanda',
  budgetIndicativo: 'da calcolare su auto e alloggi; Titanic Belfast 24,95 £, Giant\'s Causeway 15 £ con centro visitatori (2026)',
  scheda: {
    documenti:
      'L\'Irlanda del Nord è Regno Unito. Ai cittadini UE la carta d\'identità non basta: ireland.com scrive chiaramente che non si può entrare con la carta d\'identità e che serve un\'ETA (Electronic Travel Authorisation) collegata a un passaporto valido. L\'ETA costa 20 £ a persona, bambini compresi, si chiede online sul sito del governo britannico (gov.uk) e non è rimborsabile. Serve anche se si arriva dalla Repubblica in auto: al confine non ci sono controlli, ma la regola vale lo stesso. Ne sono esenti, tra gli altri, i cittadini britannici e irlandesi e chi risiede legalmente in Irlanda. Diffidare dei siti che la vendono a prezzi più alti.',
    valuta:
      'Sterlina britannica (GBP). Qui tre banche stampano banconote proprie (Bank of Ireland, Ulster Bank e Danske Bank): sono sterline a tutti gli effetti, ma in Gran Bretagna qualche negozio le rifiuta, quindi conviene spenderle prima di partire.',
    pagamenti: 'Carte accettate quasi ovunque, anche contactless. L\'euro non è la moneta locale: si paga in sterline.',
    connettivita:
      'Il Regno Unito non è più nell\'UE e il roaming gratuito non è garantito per legge: dipende dalla propria tariffa. Va controllato con l\'operatore prima di passare il confine. Vicino alla frontiera il telefono può agganciare la rete dell\'altra parte.',
    salute:
      'Secondo nidirect.gov.uk il pronto soccorso è gratuito per tutti i visitatori, mentre ricoveri e visite possono essere fatturati. Ai visitatori dei Paesi UE si chiede la TEAM, che copre le cure che non possono aspettare il rientro. Le cure non urgenti si pagano in anticipo. Serve comunque un\'assicurazione di viaggio.',
    sicurezza:
      'Per chi viaggia è una zona tranquilla. In alcuni quartieri di Belfast e di Derry le tensioni del passato restano visibili, nei murales e nelle bandiere: si visitano senza problemi, meglio con una guida locale, e senza fare commenti politici. Attorno al 12 luglio, con parate e falò, conviene informarsi prima sugli spostamenti in città.',
    trasportiInterni:
      'Si guida a sinistra come nella Repubblica, ma i limiti sono in miglia orarie: 30 mph nei centri abitati, 60 mph fuori, 70 mph su autostrade e doppie carreggiate (nidirect.gov.uk). Basta la patente nazionale. Cinture obbligatorie anche dietro, telefono in mano vietato. Belfast si gira a piedi e in taxi; per la Causeway Coast serve l\'auto.',
    costoVita:
      'Simile al resto del Regno Unito. Alcuni prezzi verificati nel 2026: Titanic Belfast 24,95 £, Giant\'s Causeway Visitor Experience 15 £ (agli scogli si arriva a piedi gratis, ma il parcheggio del centro è per chi ha il biglietto), parcheggio alternativo della Causeway Coast Way 12 £ per auto.',
    lingua: 'Inglese. L\'irlandese e l\'Ulster Scots sono riconosciuti, e a Belfast c\'è un Gaeltacht Quarter lungo la Falls Road.',
    elettricita: '230V, 50Hz, prese di tipo G: le stesse della Repubblica d\'Irlanda e del resto del Regno Unito.',
    fusoOrario: 'Lo stesso della Repubblica d\'Irlanda: un\'ora indietro rispetto all\'Italia.',
    clima:
      'Oceanico come nel resto dell\'isola: estati fresche, inverni miti, pioggia frequente e vento sulla costa di Antrim. Dalla primavera all\'autunno le giornate sono lunghe.',
    festivita: 'Il 12 luglio è festivo nell\'Irlanda del Nord: molti negozi chiudono e ci sono le parate dell\'Ordine d\'Orange.',
    emergenze: 'Il 999 e il 112 funzionano entrambi.',
    aggiornatoAl: 'novembre 2026',
  },
  stileViaggio: ['on the road', 'storia', 'costa', 'città'],
  heroImageAlt: 'Le rovine del Dunluce Castle sul bordo della scogliera di basalto, sulla costa di Antrim',
  heroImage: '/images/irlanda-del-nord/irlanda-del-nord-hero.webp',
  tripPrincipaleSlug: 'irlanda-due-irlande',
}
