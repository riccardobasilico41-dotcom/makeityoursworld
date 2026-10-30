import type { Paese } from '@/lib/types'

// Scheda "Paese" per la California, con la stessa convenzione di florida.ts e
// new-york.ts (uno Stato USA trattato come Paese). Costruita su ricerca documentale:
// Viaggiare Sicuri, sito ESTA del Dipartimento della Sicurezza Interna, National
// Park Service, Caltrans, guide recenti. Nessuna esperienza diretta.

export const california: Paese = {
  slug: 'california',
  nome: 'California',
  continente: 'Nord America',
  titolo: 'California on the road: San Francisco, i parchi nazionali, Los Angeles e la Highway 1',
  descrizione:
    'Un anello in auto tra San Francisco, le pareti di granito di Yosemite, le sequoie giganti, il deserto della Death Valley e di Joshua Tree, Los Angeles e la costa di Big Sur: il road trip americano per eccellenza, da organizzare intorno a stagioni, strade chiuse e prenotazioni.',
  periodoMigliore: 'da metà aprile a giugno e da settembre a metà ottobre',
  durataConsigliata: '2-3 settimane',
  budgetIndicativo:
    'indicativamente 170-260 € al giorno a persona in due in fascia media, esclusi voli; alloggi, auto e mance sono le voci che pesano di più, e dal 2026 i parchi più famosi chiedono ai turisti stranieri un supplemento di 100 $ a persona',
  scheda: {
    documenti:
      'Passaporto elettronico valido per tutta la durata del soggiorno (consigliati almeno 6 mesi) e autorizzazione ESTA per turismo fino a 90 giorni, da richiedere solo sul sito ufficiale esta.cbp.dhs.gov almeno 72 ore prima della partenza: costa 40,27 $ e vale 2 anni. Chi è stato a Cuba, in Iran, Iraq, Siria e altri Paesi indicati dopo il 2011 non può usare l\'ESTA e deve chiedere un visto. Patente italiana valida per guidare da turista; il permesso internazionale è consigliato e alcuni noleggiatori lo chiedono.',
    valuta: 'Dollaro statunitense (USD).',
    pagamenti:
      'Carte accettate ovunque, anche per importi minimi; per il noleggio auto e il deposito degli hotel serve una carta di credito vera intestata al conducente. Ai prezzi esposti si aggiungono le tasse sulle vendite (circa 7-10 % secondo la contea) e nei ristoranti la mancia del 18-20 %; negli hotel spesso una resort fee o una tassa di soggiorno a notte.',
    connettivita:
      'eSIM o SIM prepagate di T-Mobile, AT&T e Verizon; copertura buona in città e lungo le autostrade, assente in gran parte della Death Valley, in molte zone di Yosemite e Sequoia e lungo Big Sur. Conviene scaricare le mappe offline prima di entrare nei parchi.',
    salute:
      'Nessuna vaccinazione richiesta. Assicurazione sanitaria indispensabile, con massimale alto: le cure negli Stati Uniti sono molto care. Disidratazione e colpo di calore nel deserto (in Death Valley d\'estate si superano i 50 °C); quota oltre i 3.000 metri sulla Tioga Road; fumo degli incendi d\'estate e d\'autunno.',
    sicurezza:
      'Le zone turistiche si visitano con normale prudenza. A San Francisco e Los Angeles sono frequenti i furti dalle auto parcheggiate (nessun bagaglio in vista, mai) e in alcuni quartieri del centro ci sono situazioni di degrado da evitare la sera. Nei parchi: orsi neri a Yosemite e Sequoia, con obbligo di riporre il cibo negli appositi contenitori; caldo estremo in deserto; incendi boschivi da luglio a ottobre e strade di montagna chiuse per neve d\'inverno.',
    trasportiInterni:
      'L\'auto a noleggio è indispensabile. Distanze lunghe (il giro completo supera i 2.800 km), autostrade gratuite salvo alcuni ponti e corsie a pedaggio elettronico, che il noleggiatore addebita con una commissione. La Tioga Road di Yosemite e altre strade di montagna chiudono d\'inverno; la Highway 1 a Big Sur è soggetta a chiusure per frane. In città Uber e Lyft; a San Francisco funicolari, tram e metro BART.',
    costoVita:
      'Molto alto: un motel decente costa 120-200 $ a notte, un hotel nei parchi o a San Francisco 250-450 $, un pranzo semplice 20-30 $ con tasse e mancia, una cena 50-80 $. Benzina tra le più care degli Stati Uniti, indicativamente 4,8-5,8 $ al gallone.',
    lingua: 'Inglese; spagnolo molto diffuso, soprattutto nel sud.',
    elettricita: '120V, 60Hz, prese di tipo A e B: serve un adattatore, e gli apparecchi devono supportare i 120V.',
    fusoOrario: 'UTC-8 d\'inverno e UTC-7 in ora legale: 9 ore indietro rispetto all\'Italia quasi tutto l\'anno.',
    clima:
      'Molto vario: costa del nord fresca e nebbiosa anche d\'estate, sud mite e soleggiato, deserti torridi da maggio a settembre e freschi d\'inverno, Sierra Nevada innevata da novembre a maggio. Piogge concentrate tra dicembre e marzo.',
    festivita:
      'Memorial Day (fine maggio), il 4 luglio, Labor Day (inizio settembre) e Thanksgiving (fine novembre) riempiono parchi e alloggi; l\'estate e le vacanze scolastiche sono l\'alta stagione nei parchi.',
    emergenze: 'Numero unico 911. Consolato Generale d\'Italia a San Francisco e a Los Angeles.',
    aggiornatoAl: 'ottobre 2026',
  },
  stileViaggio: ['road trip', 'parchi nazionali', 'trekking', 'città', 'costa'],
  heroImageAlt: 'La Highway 1 lungo le scogliere di Big Sur con il ponte di Bixby Creek',
  heroImage: '/images/copertine/california-road-trip.jpg',
  tripPrincipaleSlug: 'california-road-trip',
}
