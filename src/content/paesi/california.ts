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
    'Un anello in auto tra San Francisco, le pareti di granito di Yosemite, le sequoie giganti, il deserto della Death Valley e di Joshua Tree, Los Angeles e la costa di Big Sur: il road trip americano classico, da organizzare tenendo conto di stagioni, strade chiuse e prenotazioni.',
  periodoMigliore: 'da metà aprile a giugno e da settembre a metà ottobre',
  durataConsigliata: '2-3 settimane',
  budgetIndicativo:
    'sui 170-260 € al giorno a persona, viaggiando in due in fascia media, voli esclusi. Le voci che pesano di più sono alloggi, auto e mance; dal 2026, inoltre, i parchi più famosi chiedono ai turisti stranieri un supplemento di 100 $ a persona',
  scheda: {
    documenti:
      'Servono il passaporto elettronico valido per tutto il soggiorno (meglio almeno 6 mesi) e l\'autorizzazione ESTA per turismo fino a 90 giorni, da chiedere solo sul sito ufficiale esta.cbp.dhs.gov almeno 72 ore prima della partenza: costa 40,27 $ e vale 2 anni. Chi è stato a Cuba, in Iran, Iraq, Siria e altri Paesi indicati dopo il 2011 non può usare l\'ESTA e deve chiedere un visto. La patente italiana vale per guidare da turista; il permesso internazionale è consigliato e alcuni noleggiatori lo chiedono.',
    valuta: 'Dollaro statunitense (USD).',
    pagamenti:
      'Le carte si usano ovunque, anche per importi minimi. Per il noleggio auto e il deposito in hotel serve una vera carta di credito intestata al conducente. Ai prezzi esposti si aggiungono le tasse sulle vendite (circa 7-10 % secondo la contea) e, al ristorante, la mancia del 18-20 %; negli hotel spesso c\'è una resort fee o una tassa di soggiorno a notte.',
    connettivita:
      'eSIM o SIM prepagate di T-Mobile, AT&T e Verizon. La copertura è buona in città e lungo le autostrade, ma manca in gran parte della Death Valley, in molte zone di Yosemite e Sequoia e lungo Big Sur. Conviene scaricare le mappe offline prima di entrare nei parchi.',
    salute:
      'Non sono richieste vaccinazioni. Serve un\'assicurazione sanitaria con massimale alto, perché negli Stati Uniti le cure sono molto care. I rischi da mettere in conto: disidratazione e colpo di calore nel deserto (d\'estate in Death Valley si superano i 50 °C), la quota oltre i 3.000 metri sulla Tioga Road, il fumo degli incendi d\'estate e d\'autunno.',
    sicurezza:
      'Le zone turistiche si visitano con normale prudenza. A San Francisco e Los Angeles sono frequenti i furti dalle auto parcheggiate (nessun bagaglio in vista, mai) e in alcuni quartieri del centro ci sono situazioni di degrado da evitare la sera. Nei parchi ci sono orsi neri a Yosemite e Sequoia, con l\'obbligo di chiudere il cibo negli appositi contenitori, caldo estremo nel deserto, incendi boschivi da luglio a ottobre e strade di montagna chiuse per neve d\'inverno.',
    trasportiInterni:
      'L\'auto a noleggio è indispensabile. Le distanze sono lunghe (il giro completo supera i 2.800 km); le autostrade sono gratuite, tranne alcuni ponti e corsie a pedaggio elettronico, che il noleggiatore addebita con una commissione. La Tioga Road di Yosemite e altre strade di montagna chiudono d\'inverno; la Highway 1 a Big Sur chiude spesso per frane. In città ci sono Uber e Lyft; a San Francisco funicolari, tram e metro BART.',
    costoVita:
      'Molto alto. Un motel decente costa 120-200 $ a notte, un hotel nei parchi o a San Francisco 250-450 $, un pranzo semplice 20-30 $ con tasse e mancia, una cena 50-80 $. La benzina è tra le più care degli Stati Uniti, sui 4,8-5,8 $ al gallone.',
    lingua: 'Inglese; spagnolo molto diffuso, soprattutto nel sud.',
    elettricita: '120V, 60Hz, prese di tipo A e B: serve un adattatore, e gli apparecchi devono supportare i 120V.',
    fusoOrario: 'UTC-8 d\'inverno e UTC-7 in ora legale: 9 ore indietro rispetto all\'Italia quasi tutto l\'anno.',
    clima:
      'Molto vario. La costa del nord è fresca e nebbiosa anche d\'estate, il sud mite e soleggiato; i deserti sono torridi da maggio a settembre e freschi d\'inverno, la Sierra Nevada è innevata da novembre a maggio. Le piogge cadono soprattutto tra dicembre e marzo.',
    festivita:
      'Memorial Day (fine maggio), il 4 luglio, Labor Day (inizio settembre) e Thanksgiving (fine novembre) riempiono parchi e alloggi; l\'estate e le vacanze scolastiche sono l\'alta stagione nei parchi.',
    emergenze: 'Numero unico 911. Ci sono Consolati Generali d\'Italia a San Francisco e a Los Angeles.',
    aggiornatoAl: 'ottobre 2026',
  },
  stileViaggio: ['road trip', 'parchi nazionali', 'trekking', 'città', 'costa'],
  heroImageAlt: 'La Highway 1 lungo le scogliere di Big Sur con il ponte di Bixby Creek',
  heroImage: '/images/copertine/california-road-trip.jpg',
  tripPrincipaleSlug: 'california-road-trip',
}
