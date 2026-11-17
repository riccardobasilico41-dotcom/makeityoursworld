import type { Paese } from '@/lib/types'

export const newYork: Paese = {
  slug: 'new-york',
  nome: 'New York',
  continente: 'Nord America',
  tipo: 'regione',
  stato: 'Stati Uniti',
  titolo: 'New York: grattacieli, quartieri e una partita a testa tra baseball e basket',
  descrizione:
    'Sei giorni nella città di New York (non lo stato omonimo, che è molto più grande), 15-20 km a piedi al giorno: Times Square di notte, il tramonto dal Top of the Rock, la Statua della Libertà, un musical a Broadway, DUMBO con il ponte di Manhattan sullo sfondo e una partita dal vivo, baseball in piena corsa ai playoff o basket WNBA con le New York Liberty. Il programma è più ricco di quanto si riesca a fare in una settimana, di proposito: bisogna scegliere le priorità.',
  periodoMigliore: 'settembre, per unire la corsa ai playoff MLB (baseball) con i playoff WNBA delle New York Liberty (la stagione NBA inizia solo a ottobre)',
  durataConsigliata: '6-7 giorni per coprire Manhattan e Brooklyn senza correre troppo',
  budgetIndicativo: 'circa 200-280 € per fare quasi tutto (esclusi volo e hotel)',
  scheda: {
    documenti:
      'Passaporto elettronico italiano (tutti quelli emessi dal 2010 lo sono) più autorizzazione ESTA per soggiorni turistici fino a 90 giorni, con biglietto di andata e ritorno. Il costo è cambiato: dal 30 settembre 2025 l\'ESTA costa 40,27$, quasi il doppio dei 21$ precedenti. Vale 2 anni, ma decade se scade il passaporto. Chi ha viaggiato a Cuba, in Corea del Nord, Siria o Iran non può usare l\'ESTA e deve chiedere un visto vero e proprio.',
    valuta: 'Dollaro statunitense (USD).',
    pagamenti:
      'Le carte si accettano quasi ovunque, e molti locali non prendono più contanti. I prezzi esposti sono al netto delle tasse, e al ristorante e nei bar ci si aspetta la mancia (15-20%): il conto finale è sempre più alto dell\'etichetta.',
    connettivita: 'eSIM o SIM turistica statunitense; il wifi pubblico è diffuso, anche in molte stazioni della metropolitana. Sottoterra le mappe offline di Google Maps, scaricate prima, aiutano parecchio.',
    salute:
      'Nessuna vaccinazione richiesta, ma l\'assicurazione sanitaria è indispensabile: negli Stati Uniti una visita d\'urgenza senza copertura può costare migliaia di dollari.',
    sicurezza:
      'New York è oggi una delle grandi città più sicure degli Stati Uniti per i visitatori, con le normali accortezze contro i borseggi in metropolitana e nelle zone affollate come Times Square.',
    trasportiInterni:
      'La metropolitana, attiva 24 ore su 24, è la soluzione più efficiente; si paga con OMNY, avvicinando la carta contactless. Uber e Lyft sono comodi soprattutto la sera. Si cammina moltissimo: 15-20 km al giorno sono la norma con un programma pieno.',
    costoVita: 'Città cara: indicativamente 200-280 € a persona per fare quasi tutto in sei giorni, esclusi volo e hotel.',
    lingua: 'Inglese.',
    elettricita: '120V, 60Hz, prese di tipo A e B: serve un adattatore dall\'Italia.',
    fusoOrario: 'UTC-4 in ora legale e UTC-5 in inverno: 6 ore indietro rispetto all\'Italia tutto l\'anno.',
    clima:
      'Primavera e autunno sono le stagioni più piacevoli. Settembre in particolare unisce clima mite, la volata finale dei playoff di baseball (MLB) e i playoff WNBA delle New York Liberty (la stagione NBA invece comincia solo a ottobre). Gli inverni sono rigidi e ventosi, le estati calde e umide.',
    festivita:
      'A settembre si tiene la cerimonia di commemorazione dell\'11 settembre a Ground Zero. Novembre e dicembre portano la parata del Thanksgiving e le luci di Natale, con la città al massimo dell\'affollamento.',
    emergenze: 'Numero unico 911. Il Consolato Generale d\'Italia si trova a New York, in Park Avenue.',
    primaDiPartire: {
      documento: 'Passaporto elettronico valido per tutto il soggiorno.',
      visto: 'Niente visto fino a 90 giorni per turismo, ma serve l\'ESTA online almeno 72 ore prima: vale 2 anni. Chi è stato a Cuba dal 12/1/2021 deve chiedere il visto. UK: stesse regole.',
      vaccini: 'Nessuna vaccinazione obbligatoria. Basta essere in regola con quelle di routine.',
      prese: '110-120 V, prese americane a lamelle piatte: serve un adattatore dall\'Italia.',
      sim: 'La SIM italiana funziona in roaming; i principali operatori locali sono Verizon, AT&T, T-Mobile e Mint Mobile.',
      pagamenti: 'Carte accettate quasi ovunque: verifica prima con la banca funzionamento e massimale. Bancomat aperti 24 ore. Le tasse si aggiungono al prezzo esposto.',
      mance: 'Attese: 15-20% al ristorante (10% al buffet), circa 1$ a drink al bar, 2-5$ a notte per le pulizie in hotel.',
      lingua: 'Inglese; lo spagnolo è sempre più diffuso.',
      frasi: [
        { frase: 'Hello', pronuncia: 'el-lòu', significato: 'Ciao, buongiorno' },
        { frase: 'Thank you', pronuncia: 'tènk-iu', significato: 'Grazie' },
        { frase: 'Please', pronuncia: 'plìis', significato: 'Per favore' },
        { frase: 'Excuse me', pronuncia: 'eks-kiùs mi', significato: 'Mi scusi, permesso' },
        { frase: 'How much is it?', pronuncia: 'hau màc is it', significato: 'Quanto costa?' },
      ],
      avvisi: 'https://www.viaggiaresicuri.it/find-country/country/USA',
    },
    aggiornatoAl: 'settembre 2026',
  },
  stileViaggio: ['città', 'sport', 'cultura'],
  heroImageAlt: 'Lo skyline di Lower Manhattan con il One World Trade Center visto dall\'acqua, New York',
  heroImage: '/images/new-york/lower-manhattan-skyline-riccardo.jpg',
  tripPrincipaleSlug: 'new-york-itinerario',
}
