import type { Destinazione } from '@/lib/types'

// Destinazioni del viaggio «Londra e le Cotswolds» (src/content/viaggi/96-londra-cotswolds.md).
// Proposta costruita sulla ricerca, non un viaggio fatto da Rick: nessun ricordo personale.
// Foto da Wikimedia Commons, crediti in docs/uk-registri.md.

const IMG = '/images/viaggi/londra-cotswolds'

export const destinazioniInghilterra: Destinazione[] = [
  {
    slug: 'londra',
    paeseSlug: 'inghilterra',
    ordine: 1,
    nome: 'Londra',
    tipologia: ['città', 'musei', 'cultura'],
    giorniConsigliati: '4 giorni',
    visitataPersonalmente: false,
    introduzione:
      'La capitale del Regno Unito, sul Tamigi. Westminster e Buckingham Palace, la Torre e Tower Bridge, i musei nazionali gratuiti, i parchi reali e quartieri molto diversi tra loro, da Covent Garden a Notting Hill.',
    percheAndarci:
      'Per i musei, tra i più ricchi al mondo e in gran parte gratuiti, e per una città che si gira bene a piedi lungo il fiume. È anche la porta naturale per la campagna inglese.',
    cosaVedere: [
      'Westminster, il Big Ben e l\'Abbazia',
      'Il British Museum',
      'La Torre di Londra e Tower Bridge',
      'Il South Bank e la Tate Modern',
      'I musei di South Kensington',
      'Notting Hill e Portobello Road',
      'Hyde Park e Kensington Gardens',
    ],
    cosaFare: [
      'Camminare lungo il Tamigi da Westminster al Tower Bridge',
      'Una mattina al British Museum',
      'Il mercato di Portobello Road il sabato',
      'Una sera a teatro nel West End',
    ],
    comeArrivare:
      'Voli diretti dall\'Italia per Heathrow, Gatwick, Stansted, Luton e London City. Da Heathrow si arriva in centro con la metropolitana o con l\'Elizabeth line.',
    comeSpostarsi:
      'Metropolitana e bus pagando con la carta contactless o con la Oyster: si usa sempre la stessa carta, e la spesa ha un tetto giornaliero. In centro molte distanze si fanno a piedi. L\'auto non serve: nella zona centrale si paga la Congestion Charge, 18 sterline al giorno (2026).',
    periodoMigliore: 'tutto l\'anno; da maggio a settembre le giornate sono più lunghe',
    costi: 'Dormire è caro. I grandi musei nazionali sono gratuiti; la Torre di Londra e le attrazioni private sono a pagamento.',
    erroriDaEvitare: [
      'Noleggiare l\'auto a Londra: tra traffico, Congestion Charge e parcheggi conviene ritirarla solo per le Cotswolds',
      'Comprare biglietti singoli della metropolitana: con la carta contactless si paga meno',
      'Mettere troppe cose in un giorno: le distanze tra un quartiere e l\'altro sono grandi',
    ],
    // GUIDA-START
    luoghi: [
      {
        nome: 'Westminster',
        testo:
          'Il Palazzo di Westminster, sede del Parlamento, con la torre dell\'orologio che tutti chiamano Big Ben, e davanti l\'Abbazia di Westminster, dove vengono incoronati i sovrani. A pochi minuti ci sono Downing Street, Whitehall e St James\'s Park, che porta a Buckingham Palace.',
        come: 'Metropolitana fino a Westminster. Il ponte di Westminster è il punto da cui si vede meglio il Parlamento.',
        quando: 'Al tramonto, dal ponte o dalla riva sud.',
        tempo: 'mezza giornata',
      },
      {
        nome: 'British Museum',
        testo:
          'Uno dei musei più grandi del mondo, con la Stele di Rosetta, i marmi del Partenone e le collezioni egizie. La Great Court, il cortile coperto dalla volta di vetro, vale già da sola l\'ingresso, che è gratuito.',
        come: 'Metropolitana fino a Tottenham Court Road o Holborn. Conviene scegliere poche sale invece di vedere tutto.',
        quando: 'All\'apertura, prima dei gruppi.',
        tempo: '3 ore',
        url: 'https://www.britishmuseum.org',
      },
      {
        nome: 'La Torre di Londra e Tower Bridge',
        testo:
          'La fortezza sul Tamigi, nata con Guglielmo il Conquistatore, dove sono custoditi i gioielli della Corona. Accanto c\'è Tower Bridge, il ponte con le due torri, che si attraversa a piedi.',
        come: 'Metropolitana fino a Tower Hill. La Torre è a pagamento: i biglietti si comprano sul sito di Historic Royal Palaces.',
        quando: 'La mattina presto per i gioielli della Corona, che hanno la coda più lunga.',
        tempo: 'mezza giornata',
        url: 'https://www.hrp.org.uk/tower-of-london/',
      },
      {
        nome: 'South Bank e Tate Modern',
        testo:
          'La riva sud del Tamigi, pedonale da Westminster a Tower Bridge. Si passa dal London Eye, dal Millennium Bridge con la vista su St Paul\'s e dalla Tate Modern, il museo d\'arte moderna in una vecchia centrale elettrica. Poco più avanti c\'è il Borough Market.',
        come: 'A piedi lungo il fiume.',
        quando: 'Nel pomeriggio, fino al tramonto.',
        tempo: 'mezza giornata',
      },
      {
        nome: 'South Kensington',
        testo:
          'Il quartiere dei musei: il Natural History Museum, con le gallerie gratuite, il Victoria and Albert Museum e lo Science Museum, uno accanto all\'altro. Da qui si entra in Hyde Park e nei Kensington Gardens.',
        come: 'Metropolitana fino a South Kensington. Al Natural History Museum si può prenotare online il biglietto gratuito, utile nei fine settimana e nelle vacanze scolastiche.',
        quando: 'In un giorno di pioggia.',
        tempo: 'mezza giornata',
        url: 'https://www.nhm.ac.uk/visit.html',
      },
      {
        nome: 'Notting Hill',
        testo: 'Le case color pastello, le mews, le vecchie stalle trasformate in case, e il mercato di Portobello Road, con antiquariato e cibo di strada.',
        come: 'Metropolitana fino a Notting Hill Gate.',
        quando: 'Il sabato, quando il mercato è al completo.',
        tempo: '2-3 ore',
        consiglio: 'Molte case sono abitate: si fotografa dalla strada, senza salire sui gradini.',
      },
    ],
    programmi: [
      { titolo: '2 giorni', tappe: ['Giorno 1: Westminster, St James\'s Park e Buckingham Palace, poi il South Bank', 'Giorno 2: British Museum, Covent Garden, la Torre e Tower Bridge'] },
      {
        titolo: '4 giorni',
        tappe: [
          'Giorno 1: Westminster e il fiume',
          'Giorno 2: British Museum, Covent Garden e il West End',
          'Giorno 3: la Torre, Tower Bridge, Borough Market e la Tate Modern',
          'Giorno 4: Notting Hill, Hyde Park e South Kensington',
        ],
      },
    ],
    zone: [
      { nome: 'South Bank e Southwark', perChi: 'chi vuole tutto a piedi', testo: 'Sulla riva sud, vicino al fiume, al Borough Market e a Westminster.' },
      { nome: 'Bloomsbury', perChi: 'chi vuole il centro con prezzi un po\' più bassi', testo: 'Vicino al British Museum e alle stazioni di King\'s Cross ed Euston.' },
      { nome: 'Paddington', perChi: 'chi prosegue per Oxford, le Cotswolds o Bath', testo: 'I treni per l\'ovest partono da qui, e c\'è l\'Elizabeth line per Heathrow.' },
    ],
    sapori: [
      { nome: 'Sunday roast', testo: 'L\'arrosto della domenica nei pub, con patate, verdure e Yorkshire pudding.' },
      { nome: 'Fish and chips', testo: 'Pesce fritto in pastella con le patatine, il piatto da asporto più classico.' },
      { nome: 'Afternoon tea', testo: 'Tè con scones, panna e marmellata e piccoli sandwich, nel pomeriggio.' },
    ],
    attenzioni: [
      'Sulle scale mobili della metropolitana si sta a destra: la sinistra è per chi cammina.',
      'Borseggi nelle zone più affollate, da Oxford Street ai mercati.',
      'Attraversando la strada si guarda prima a destra: il traffico arriva dal lato opposto rispetto all\'Italia.',
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['londra-cotswolds'],
    imageAlt: 'Il Big Ben e il Palazzo di Westminster all\'imbrunire, con le scie luminose del traffico sul ponte, Londra',
    immagine: `${IMG}/giorno-01-westminster.webp`,
  },
  {
    slug: 'cotswolds',
    paeseSlug: 'inghilterra',
    ordine: 2,
    nome: 'Cotswolds',
    tipologia: ['campagna', 'borghi', 'natura'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: false,
    introduzione:
      'Una zona di colline e villaggi di pietra calcarea color miele, quasi 800 miglia quadrate a cavallo di cinque contee: Gloucestershire, Oxfordshire, Warwickshire, Wiltshire e Worcestershire. È un\'area protetta, la Cotswolds National Landscape.',
    percheAndarci:
      'Per la campagna inglese da cartolina: muretti a secco, cottage con il tetto di pietra, pub di villaggio e sentieri tra i campi, a meno di due ore da Londra.',
    cosaVedere: [
      'Bibury e Arlington Row',
      'Bourton-on-the-Water',
      'Lower Slaughter e Upper Slaughter',
      'Stow-on-the-Wold',
      'Chipping Campden',
      'Broadway',
      'Castle Combe',
    ],
    cosaFare: ['Un giro dei villaggi in auto', 'Una camminata tra Lower e Upper Slaughter', 'Un pranzo in un pub di campagna'],
    comeArrivare:
      'In treno da Londra Paddington sulla linea che passa da Oxford, Charlbury e Kingham fino a Moreton-in-Marsh, in circa un\'ora e mezza fino a Moreton (tempo indicativo). Oppure in auto, ritirandola a Oxford.',
    comeSpostarsi:
      'In auto è tutto più semplice: i villaggi sono vicini ma i bus sono pochi. Le strade di campagna sono strette, con siepi alte, e si guida a sinistra.',
    periodoMigliore: 'da maggio a settembre; in primavera e in autunno ci sono meno gruppi',
    erroriDaEvitare: [
      'Arrivare a Bibury e Bourton-on-the-Water a metà giornata, quando arrivano i pullman',
      'Volere tutti i villaggi in un giorno: due o tre per giornata, con una camminata, rendono di più',
    ],
    // GUIDA-START
    luoghi: [
      {
        nome: 'Bibury e Arlington Row',
        testo: 'Una fila di cottage di pietra nati nel 1380 come magazzino della lana di un monastero e trasformati a fine Seicento in case dei tessitori. È una delle immagini più note delle Cotswolds.',
        come: 'In auto, con parcheggio limitato nel villaggio.',
        quando: 'La mattina presto o nel tardo pomeriggio.',
        tempo: '1 ora',
      },
      {
        nome: 'Bourton-on-the-Water',
        testo: 'Il villaggio con il fiume Windrush basso e largo, attraversato da piccoli ponti di pietra. È il più frequentato della zona.',
        come: 'In auto, con parcheggi a pagamento ai bordi del centro.',
        quando: 'La mattina presto o in un giorno feriale.',
        tempo: '1-2 ore',
      },
      {
        nome: 'Lower Slaughter e Upper Slaughter',
        testo: 'Due villaggi minuscoli lungo un torrente, collegati da un sentiero tra i prati. Sono il contrario di Bourton: silenziosi.',
        come: 'A piedi da un villaggio all\'altro, andata e ritorno.',
        quando: 'Mattina o tardo pomeriggio.',
        tempo: '1-2 ore con la camminata',
      },
      {
        nome: 'Stow-on-the-Wold',
        testo: 'Un paese di mercato in cima a una collina, con la piazza, le botteghe di antiquariato e la chiesa di St Edward, con la porta tra due tassi che molti accostano al mondo di Tolkien.',
        come: 'In auto o a piedi dalle Slaughter.',
        tempo: '1-2 ore',
      },
      {
        nome: 'Chipping Campden e Broadway',
        testo: 'Le Cotswolds del nord. Chipping Campden ha una strada principale di case di pietra, con il vecchio mercato coperto. Broadway è più grande, con la torre in cima alla collina.',
        come: 'In auto, a nord di Stow.',
        tempo: 'mezza giornata',
      },
      {
        nome: 'Castle Combe',
        testo: 'Un villaggio nel Wiltshire, all\'estremo sud delle Cotswolds, con le case di pietra intorno alla vecchia croce del mercato e il ponte sul torrente. Sta sulla strada per Bath.',
        come: 'In auto, lasciandola nel parcheggio sopra il villaggio e scendendo a piedi.',
        quando: 'La mattina.',
        tempo: '1 ora',
      },
    ],
    programmi: [
      { titolo: '1 giorno', tappe: ['Bibury la mattina presto', 'Bourton-on-the-Water', 'Camminata tra Lower e Upper Slaughter', 'Stow-on-the-Wold'] },
      { titolo: '2 giorni', tappe: ['Giorno 1: come sopra', 'Giorno 2: Chipping Campden e Broadway, oppure Castle Combe sulla strada per Bath'] },
    ],
    zone: [
      { nome: 'Stow-on-the-Wold e dintorni', perChi: 'chi gira in auto', testo: 'Al centro della zona, a pochi minuti da Bourton, dalle Slaughter e da Moreton-in-Marsh.' },
      { nome: 'Moreton-in-Marsh', perChi: 'chi arriva in treno', testo: 'Ha la stazione sulla linea per Londra e qualche bus per i villaggi vicini.' },
    ],
    sapori: [
      { nome: 'Cream tea', testo: 'Tè con scones, panna e marmellata, nelle sale da tè dei villaggi.' },
      { nome: 'Pub di villaggio', testo: 'Pranzo con piatti di stagione e birre locali, spesso in edifici di pietra di qualche secolo.' },
    ],
    attenzioni: [
      'Strade di campagna strette, con siepi alte e poca visibilità: si guida a sinistra e piano.',
      'Ad Arlington Row si fotografa dalla strada, senza entrare nei giardini.',
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['londra-cotswolds'],
    imageAlt: 'I cottage di pietra color miele di Bibury, nelle Cotswolds',
    immagine: `${IMG}/giorno-06-bibury.webp`,
  },
  {
    slug: 'oxford',
    paeseSlug: 'inghilterra',
    ordine: 3,
    nome: 'Oxford',
    tipologia: ['città', 'cultura', 'università'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: false,
    introduzione:
      'La città universitaria più antica del mondo anglofono, con i college di pietra chiara, le biblioteche e i cortili. Sta tra Londra e le Cotswolds, e si ferma lungo la stessa linea ferroviaria.',
    percheAndarci: 'Per i college, la Radcliffe Camera e la Bodleian, in una giornata a piedi. È anche il posto più comodo per ritirare l\'auto per le Cotswolds.',
    cosaVedere: ['Radcliffe Square e la Radcliffe Camera', 'La Bodleian Library', 'Il Christ Church College', 'Il Bridge of Sighs', 'L\'Ashmolean Museum'],
    cosaFare: ['Un giro dei college aperti al pubblico', 'Salire su un campanile per vedere i tetti', 'Una passeggiata lungo il fiume'],
    comeArrivare: 'In treno da Londra Paddington.',
    comeSpostarsi: 'A piedi: il centro è piccolo.',
    erroriDaEvitare: ['Arrivare senza controllare gli orari dei college: molti aprono solo in certe ore o chiudono per esami ed eventi'],
    esperienzeSlugs: [],
    tripSlugs: ['londra-cotswolds'],
    imageAlt: 'La Radcliffe Camera, la biblioteca circolare con la cupola, in Radcliffe Square a Oxford',
    immagine: `${IMG}/giorno-05-oxford.webp`,
  },
  {
    slug: 'bath',
    paeseSlug: 'inghilterra',
    ordine: 4,
    nome: 'Bath',
    tipologia: ['città', 'storia', 'terme'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: false,
    introduzione:
      'Una città di pietra dorata costruita intorno alle sorgenti calde, con le terme romane, l\'abbazia e i palazzi georgiani del Settecento. È patrimonio UNESCO.',
    percheAndarci: 'Per le terme romane, i crescent georgiani e la fine naturale di un viaggio nelle Cotswolds, prima di rientrare a Londra in treno.',
    cosaVedere: ['Le Roman Baths', 'L\'Abbazia di Bath', 'Il Royal Crescent e il Circus', 'Il Pulteney Bridge'],
    cosaFare: ['Visitare le terme romane la mattina presto', 'Camminare dal Circus al Royal Crescent', 'Un bagno nelle terme moderne della città'],
    comeArrivare: 'In treno da Londra Paddington, o in auto dalle Cotswolds passando da Castle Combe.',
    comeSpostarsi: 'A piedi.',
    erroriDaEvitare: ['Arrivare alle Roman Baths a metà giornata senza biglietto: conviene prenotarlo online sul sito ufficiale'],
    esperienzeSlugs: [],
    tripSlugs: ['londra-cotswolds'],
    imageAlt: 'La terrazza delle terme romane di Bath con le statue degli imperatori, e dietro la torre dell\'abbazia',
    immagine: `${IMG}/giorno-08-bath.webp`,
  },
]
