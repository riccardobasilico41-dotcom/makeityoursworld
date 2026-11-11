import type { Destinazione } from '@/lib/types'

// Destinazioni dei viaggi «Londra e le Cotswolds» (96-londra-cotswolds.md), «Manchester e Liverpool»
// (99-manchester-liverpool-premier-league.md) e «Brighton e le Seven Sisters» (100-brighton-seven-sisters.md).
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
    visitataPersonalmente: true,
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
      'Voli diretti dall\'Italia per Heathrow, Gatwick, Stansted, Luton e London City. Da Heathrow si arriva in centro con la metropolitana o con l\'Elizabeth line. Da Heathrow la Piccadilly line costa circa 5,90 £ con carta contactless e impiega 50-60 minuti, l\'Elizabeth line circa 15,50 £ in 30-40 minuti, l\'Heathrow Express circa 25 £ in 15-20 minuti fino a Paddington; un taxi nero costa circa 70-110 £. Da Gatwick, Stansted e Luton ci sono treni diretti per il centro. Per entrare nel Regno Unito serve l\'autorizzazione UK ETA, 20 £ (2026).',
    comeSpostarsi:
      'Metropolitana e bus pagando con la carta contactless o con la Oyster: si usa sempre la stessa carta, e la spesa ha un tetto giornaliero. In centro molte distanze si fanno a piedi. L\'auto non serve: nella zona centrale si paga la Congestion Charge, 18 sterline al giorno (2026).',
    periodoMigliore: 'tutto l\'anno; da maggio a settembre le giornate sono più lunghe',
    costi:
      'Dormire è caro. I grandi musei nazionali sono gratuiti; la Torre di Londra e le attrazioni private sono a pagamento. Budget indicativo al giorno a persona, con la doppia divisa in due: basso 100-130 €, medio 200-280 €, alto oltre 400 €.',
    erroriDaEvitare: [
      'Noleggiare l\'auto a Londra: tra traffico, Congestion Charge e parcheggi conviene ritirarla solo per le Cotswolds',
      'Comprare biglietti singoli della metropolitana: con la carta contactless si paga meno',
      'Mettere troppe cose in un giorno: le distanze tra un quartiere e l\'altro sono grandi',
    ],
    miaEsperienza:
      "Anche Londra per me è casa: ci ho fatto l'università, nel Surrey, e ci ho vissuto un anno lavorando in centro.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Westminster",
        "testo": "Il Palazzo di Westminster, sede del Parlamento, con la torre dell'orologio che tutti chiamano Big Ben, e davanti l'Abbazia di Westminster, dove vengono incoronati i sovrani. A pochi minuti ci sono Downing Street, Whitehall e St James's Park, che porta a Buckingham Palace.",
        "come": "Metropolitana fino a Westminster. Il ponte di Westminster è il punto da cui si vede meglio il Parlamento.",
        "quando": "Al tramonto, dal ponte o dalla riva sud.",
        "tempo": "mezza giornata",
        "costo": "Abbazia circa 32 £ (circa 37 €, 2026); esterni gratuiti",
        "orari": "Abbazia aperta alle visite dal lunedì al sabato; la domenica solo per le funzioni.",
        "lat": 51.4995,
        "lng": -0.1248,
        "url": "https://www.westminster-abbey.org/"
      },
      {
        "nome": "British Museum",
        "testo": "Uno dei musei più grandi del mondo, con la Stele di Rosetta, i marmi del Partenone e le collezioni egizie. La Great Court, il cortile coperto dalla volta di vetro, vale già da sola l'ingresso, che è gratuito.",
        "come": "Metropolitana fino a Tottenham Court Road o Holborn. Conviene scegliere poche sale invece di vedere tutto.",
        "quando": "All'apertura, prima dei gruppi.",
        "tempo": "3 ore",
        "costo": "gratuito; mostre temporanee a pagamento",
        "orari": "Tutti i giorni 10-17, il venerdì fino alle 20:30.",
        "lat": 51.5194,
        "lng": -0.127,
        "url": "https://www.britishmuseum.org"
      },
      {
        "nome": "La Torre di Londra e Tower Bridge",
        "testo": "La fortezza sul Tamigi, nata con Guglielmo il Conquistatore, dove sono custoditi i gioielli della Corona. Accanto c'è Tower Bridge, il ponte con le due torri, che si attraversa a piedi.",
        "come": "Metropolitana fino a Tower Hill. La Torre è a pagamento: i biglietti si comprano sul sito di Historic Royal Palaces.",
        "quando": "La mattina presto per i gioielli della Corona, che hanno la coda più lunga.",
        "tempo": "mezza giornata",
        "costo": "Torre circa 38 £ (circa 44 €, 2026); Tower Bridge a piedi gratuito",
        "orari": "Dalle 9, la domenica e il lunedì dalle 10; chiusura nel tardo pomeriggio, prima d'inverno.",
        "lat": 51.5081,
        "lng": -0.0759,
        "url": "https://www.hrp.org.uk/tower-of-london/"
      },
      {
        "nome": "South Bank e Tate Modern",
        "testo": "La riva sud del Tamigi, pedonale da Westminster a Tower Bridge. Si passa dal London Eye, dal Millennium Bridge con la vista su St Paul's e dalla Tate Modern, il museo d'arte moderna in una vecchia centrale elettrica. Poco più avanti c'è il Borough Market.",
        "come": "A piedi lungo il fiume.",
        "quando": "Nel pomeriggio, fino al tramonto.",
        "tempo": "mezza giornata",
        "costo": "Tate Modern gratuita (collezione); London Eye da circa 29 £ online",
        "orari": "Tate Modern tutti i giorni 10-18.",
        "lat": 51.5076,
        "lng": -0.0994,
        "url": "https://www.tate.org.uk/visit/tate-modern"
      },
      {
        "nome": "South Kensington",
        "testo": "Il quartiere dei musei: il Natural History Museum, con le gallerie gratuite, il Victoria and Albert Museum e lo Science Museum, uno accanto all'altro. Da qui si entra in Hyde Park e nei Kensington Gardens.",
        "come": "Metropolitana fino a South Kensington. Al Natural History Museum si può prenotare online il biglietto gratuito, utile nei fine settimana e nelle vacanze scolastiche.",
        "quando": "In un giorno di pioggia.",
        "tempo": "mezza giornata",
        "costo": "gratuiti; mostre a pagamento",
        "orari": "Natural History Museum tutti i giorni 10-17:50.",
        "lat": 51.4967,
        "lng": -0.1764,
        "url": "https://www.nhm.ac.uk/visit.html"
      },
      {
        "nome": "Notting Hill",
        "testo": "Le case color pastello, le mews, le vecchie stalle trasformate in case, e il mercato di Portobello Road, con antiquariato e cibo di strada.",
        "come": "Metropolitana fino a Notting Hill Gate.",
        "quando": "Il sabato, quando il mercato è al completo.",
        "tempo": "2-3 ore",
        "costo": "gratuito",
        "orari": "Portobello Road al completo il sabato, con l'antiquariato; negli altri giorni solo frutta, verdura e qualche banco.",
        "lat": 51.5155,
        "lng": -0.205,
        "consiglio": "Molte case sono abitate: si fotografa dalla strada, senza salire sui gradini."
      },
      {
        "nome": "National Gallery e Trafalgar Square",
        "testo": "Una delle grandi pinacoteche d'Europa, gratuita, con i Girasoli di Van Gogh, la Venere allo specchio di Velázquez, Leonardo, Turner e Constable. Davanti c'è Trafalgar Square con la colonna di Nelson e i leoni.",
        "come": "Metro Charing Cross o Leicester Square. Ingresso libero, prenotazione gratuita consigliata nei fine settimana.",
        "quando": "Il venerdì sera, quando apre fino a tardi.",
        "tempo": "2 ore",
        "costo": "gratuito",
        "orari": "Tutti i giorni 10-18, il venerdì fino alle 21.",
        "lat": 51.5089,
        "lng": -0.1283,
        "url": "https://www.nationalgallery.org.uk/"
      },
      {
        "nome": "Cattedrale di St Paul",
        "testo": "La cattedrale barocca di Christopher Wren, ricostruita dopo il Grande Incendio del 1666, con una delle cupole più grandi del mondo. Si sale alla Whispering Gallery e alle gallerie esterne, con la vista sulla City.",
        "come": "Metro St Paul's; dalla Tate Modern si arriva a piedi sul Millennium Bridge. Biglietto più economico online.",
        "quando": "All'apertura per salire con meno gente; all'Evensong delle 17 si entra gratis per la funzione cantata.",
        "tempo": "1h30-2 ore",
        "costo": "circa 27 £ (circa 31 €, 2026); gratis per le funzioni",
        "orari": "Visite dal lunedì al sabato, dalla mattina al tardo pomeriggio; la domenica solo funzioni.",
        "lat": 51.5138,
        "lng": -0.0984,
        "url": "https://www.stpauls.co.uk/"
      },
      {
        "nome": "Buckingham Palace e St James's Park",
        "testo": "La residenza ufficiale del sovrano, con il cambio della guardia davanti ai cancelli. Ci si arriva dal Mall o da St James's Park, il parco reale più bello, con i pellicani sul lago.",
        "come": "Metro Green Park o St James's Park. Le State Rooms aprono solo in estate, con biglietto a pagamento.",
        "quando": "Il cambio della guardia è alle 11 in alcuni giorni della settimana, quasi ogni giorno d'estate: controllare il calendario e arrivare mezz'ora prima.",
        "tempo": "1-2 ore",
        "costo": "esterni e parco gratuiti; State Rooms a pagamento in estate",
        "lat": 51.5014,
        "lng": -0.1419,
        "url": "https://www.rct.uk/visit/buckingham-palace"
      },
      {
        "nome": "Covent Garden e Soho",
        "testo": "Il vecchio mercato ortofrutticolo con gli artisti di strada sotto i portici, e accanto Soho, con i locali, Chinatown e i teatri del West End. È il cuore della sera londinese.",
        "come": "Metro Covent Garden, Leicester Square o Tottenham Court Road; tutto a piedi.",
        "quando": "Dal tardo pomeriggio, prima di uno spettacolo.",
        "tempo": "2-3 ore",
        "costo": "gratuito; biglietti last minute per i musical al banco TKTS di Leicester Square",
        "lat": 51.5117,
        "lng": -0.124
      },
      {
        "nome": "Borough Market",
        "testo": "Il mercato alimentare più antico di Londra, sotto i binari vicino a London Bridge, con formaggi britannici, pane, ostriche e cibo di strada di mezzo mondo.",
        "come": "Metro London Bridge; lungo il South Bank si arriva a piedi dalla Tate Modern in 10 minuti.",
        "quando": "Un giorno feriale verso le 11, prima della ressa del pranzo.",
        "tempo": "1 ora",
        "costo": "ingresso libero",
        "orari": "Aperto tutti i giorni, con meno banchi il lunedì.",
        "lat": 51.5055,
        "lng": -0.091,
        "url": "https://boroughmarket.org.uk/"
      },
      {
        "nome": "Sky Garden",
        "testo": "Un giardino pensile al 35° piano del grattacielo «Walkie-Talkie», nella City, con terrazza aperta sul Tamigi e sulla Torre. È il belvedere gratuito più alto di Londra.",
        "come": "Metro Monument; ingresso gratuito solo con prenotazione online, con documento.",
        "quando": "Le fasce del tramonto, che si esauriscono per prime.",
        "tempo": "1 ora",
        "costo": "gratuito con prenotazione",
        "lat": 51.5112,
        "lng": -0.0835,
        "url": "https://skygarden.london/",
        "consiglio": "Le prenotazioni aprono a blocchi qualche settimana prima: se sono finite, si può provare il mattino presto senza prenotazione, quando c'è posto."
      },
      {
        "nome": "Greenwich",
        "testo": "Il borgo reale sul Tamigi con il veliero Cutty Sark, il Royal Naval College di Wren, il National Maritime Museum e, in cima al parco, l'Osservatorio con il meridiano zero. Dalla collina si vede tutta la City e Canary Wharf.",
        "come": "Battello Uber Boat by Thames Clippers da Westminster o London Bridge, oppure DLR fino a Cutty Sark.",
        "quando": "Una giornata limpida; il mercato coperto è più animato nel weekend.",
        "tempo": "mezza giornata",
        "costo": "parco, Naval College e Maritime Museum gratuiti; Osservatorio e Cutty Sark a pagamento",
        "lat": 51.4769,
        "lng": -0.0005,
        "url": "https://www.rmg.co.uk/"
      },
      {
        "nome": "Camden Market",
        "testo": "I mercati lungo il Regent's Canal, tra vecchie stalle e magazzini, con vintage, artigianato e cibo di strada. Dal canale si può camminare fino a Little Venice o a King's Cross.",
        "come": "Metro Camden Town o Chalk Farm.",
        "quando": "Un giorno feriale; il fine settimana è affollatissimo.",
        "tempo": "2 ore",
        "costo": "ingresso libero",
        "orari": "Tutti i giorni dalle 10 a sera.",
        "lat": 51.5413,
        "lng": -0.146,
        "url": "https://www.camdenmarket.com/"
      },
      {
        "nome": "Hyde Park e Kensington Gardens",
        "testo": "Il grande parco reale con il lago Serpentine, lo Speakers' Corner e, a ovest, i Kensington Gardens con Kensington Palace e la statua di Peter Pan. È il posto dove i londinesi stanno all'aria aperta.",
        "come": "Metro Marble Arch, Hyde Park Corner, Knightsbridge o Lancaster Gate; si collega a piedi con South Kensington e Notting Hill.",
        "quando": "Una mattina di sole; a dicembre c'è il Winter Wonderland.",
        "tempo": "1-2 ore",
        "costo": "gratuito",
        "orari": "Hyde Park tutti i giorni dalle 5 a mezzanotte.",
        "lat": 51.5073,
        "lng": -0.1657,
        "url": "https://www.royalparks.org.uk/visit/parks/hyde-park"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Westminster, Abbazia e Big Ben, poi St James's Park fino a Buckingham Palace.",
          "Trafalgar Square e National Gallery; pranzo a Covent Garden.",
          "Pomeriggio: South Bank a piedi fino alla Tate Modern e al Borough Market.",
          "Tramonto da Tower Bridge o dallo Sky Garden prenotato."
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Westminster, St James's Park e Buckingham Palace, National Gallery, Covent Garden e Soho la sera.",
          "Giorno 2: Torre di Londra all'apertura, Tower Bridge, Borough Market, Tate Modern e St Paul's dal Millennium Bridge."
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Westminster, Buckingham Palace, National Gallery, West End.",
          "Giorno 2: Torre, Tower Bridge, Borough Market, Tate Modern, St Paul's.",
          "Giorno 3: British Museum al mattino; pomeriggio a South Kensington e Hyde Park, oppure a Greenwich in battello."
        ]
      },
      {
        "titolo": "4 giorni",
        "tappe": [
          "Giorno 1: Westminster e il fiume",
          "Giorno 2: British Museum, Covent Garden e il West End",
          "Giorno 3: la Torre, Tower Bridge, Borough Market e la Tate Modern",
          "Giorno 4: Notting Hill, Hyde Park e South Kensington"
        ]
      }
    ],
    zone: [
      {
        "nome": "South Bank e Southwark",
        "perChi": "chi vuole tutto a piedi",
        "testo": "Sulla riva sud, vicino al fiume, al Borough Market e a Westminster.",
        "fascia": "200-350 €"
      },
      {
        "nome": "Bloomsbury",
        "perChi": "chi vuole il centro con prezzi un po' più bassi",
        "testo": "Vicino al British Museum e alle stazioni di King's Cross ed Euston.",
        "fascia": "160-280 €"
      },
      {
        "nome": "Paddington",
        "perChi": "chi prosegue per Oxford, le Cotswolds o Bath",
        "testo": "I treni per l'ovest partono da qui, e c'è l'Elizabeth line per Heathrow.",
        "fascia": "140-250 €"
      },
      {
        "nome": "Covent Garden e West End",
        "perChi": "chi vuole teatri e locali sotto casa",
        "testo": "Il centro esatto, con tutto a piedi e la metro ovunque. È la zona più cara e la più rumorosa la sera.",
        "fascia": "250-450 €"
      }
    ],
    gite: [
      {
        "nome": "Windsor",
        "distanza": "35-55 minuti in treno",
        "come": "Treni da Waterloo a Windsor & Eton Riverside, o da Paddington con cambio a Slough.",
        "testo": "Il castello abitato più antico del mondo, con la cappella di St George e gli appartamenti di Stato. Il castello chiude in alcune giornate per eventi reali."
      },
      {
        "nome": "Oxford",
        "distanza": "1 ora in treno",
        "come": "Treni veloci da Paddington; il centro è a dieci minuti a piedi dalla stazione.",
        "testo": "I college, la Bodleian Library e la Radcliffe Camera. Christ Church costa circa 20-25 £ secondo il giorno ed è a volte chiuso per eventi."
      },
      {
        "nome": "Cambridge",
        "distanza": "50 minuti in treno",
        "come": "Treni diretti da King's Cross o Liverpool Street; dalla stazione bus o 20 minuti a piedi per il centro.",
        "testo": "La cappella del King's College, i Backs lungo il fiume e il punting in barca piatta sul Cam. È più raccolta di Oxford."
      },
      {
        "nome": "Brighton",
        "distanza": "1 ora in treno",
        "come": "Treni frequenti da Victoria o London Bridge.",
        "testo": "La città di mare dei londinesi, con il Palace Pier, il Royal Pavilion in stile indiano e i vicoli delle Lanes. Le scogliere delle Seven Sisters sono vicine."
      }
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
    faq: [
      {
        "domanda": "Quanti giorni servono a Londra?",
        "risposta": "Tre giorni per Westminster, la Torre, il South Bank e un grande museo; quattro o cinque per aggiungere South Kensington, Notting Hill, Greenwich e una gita a Windsor o Oxford."
      },
      {
        "domanda": "Serve l'ETA per andare a Londra?",
        "risposta": "Sì, per i cittadini UE serve l'autorizzazione elettronica UK ETA, da chiedere sul sito del governo o con l'app ufficiale. Costa 20 £ (2026) e vale due anni; i siti che la vendono a più non sono ufficiali."
      },
      {
        "domanda": "Quali musei sono gratuiti a Londra?",
        "risposta": "I musei nazionali: British Museum, National Gallery, Tate Modern, Natural History Museum, V&A e Science Museum, salvo le mostre temporanee. A pagamento sono la Torre, St Paul's, l'Abbazia e le attrazioni private."
      },
      {
        "domanda": "Meglio Oyster o carta contactless?",
        "risposta": "La carta contactless o il telefono funzionano come la Oyster, con lo stesso tetto giornaliero e senza deposito. L'importante è usare sempre la stessa carta o lo stesso dispositivo."
      },
      {
        "domanda": "Come si va da Heathrow al centro di Londra?",
        "risposta": "La Piccadilly line costa circa 5,90 £ e impiega 50-60 minuti; l'Elizabeth line circa 15,50 £ in 30-40 minuti; l'Heathrow Express arriva a Paddington in 15-20 minuti per circa 25 £."
      },
      {
        "domanda": "Dove dormire a Londra?",
        "risposta": "South Bank o Bloomsbury per avere molto a piedi, Paddington per i treni verso ovest e Heathrow. Una doppia in zona 1 parte da circa 150 € e supera facilmente i 300 € nel West End."
      }
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
    visitataPersonalmente: true,
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
      'In treno da Londra Paddington sulla linea per Oxford, Charlbury e Kingham fino a Moreton-in-Marsh, in circa un\'ora e mezza (tempo indicativo); orari e prezzi su nationalrail.co.uk, più bassi comprando con anticipo. Da Heathrow si arriva a Paddington con la Elizabeth line, in circa 30-40 minuti, o con l\'Heathrow Express, in 15-20 minuti. Chi gira in auto conviene che la ritiri a Oxford, a circa un\'ora di treno da Londra: da lì Stow-on-the-Wold è a circa 45 minuti.',
    costi:
      'I villaggi e i sentieri sono gratuiti; si pagano i parcheggi e le dimore storiche, come Blenheim Palace (41 sterline online, circa 47 €, 2026). Dormire costa: i pub con camere e i B&B partono da circa 100-120 € la doppia. Budget indicativo al giorno a persona, con la doppia divisa in due e l\'auto a noleggio a parte: basso 90-120 €, medio 160-230 €, alto oltre 350 €.',
    comeSpostarsi:
      'In auto è tutto più semplice: i villaggi sono vicini ma i bus sono pochi. Le strade di campagna sono strette, con siepi alte, e si guida a sinistra.',
    periodoMigliore: 'da maggio a settembre; in primavera e in autunno ci sono meno gruppi',
    erroriDaEvitare: [
      'Arrivare a Bibury e Bourton-on-the-Water a metà giornata, quando arrivano i pullman',
      'Volere tutti i villaggi in un giorno: due o tre per giornata, con una camminata, rendono di più',
    ],
    miaEsperienza:
      "Ci sono stato con l'auto ritirata a Oxford: due giorni tra Bibury, Bourton-on-the-Water, le Slaughter, Chipping Campden e Castle Combe. La guida a sinistra per me è ok, ma bisogna allenarsi, diciamo, e in campagna ogni tanto le strade possono essere strette.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Bibury e Arlington Row",
        "testo": "Una fila di cottage di pietra nati nel 1380 come magazzino della lana di un monastero e trasformati a fine Seicento in case dei tessitori. È una delle immagini più note delle Cotswolds.",
        "come": "In auto, con parcheggio limitato nel villaggio.",
        "quando": "La mattina presto o nel tardo pomeriggio.",
        "tempo": "1 ora",
        "costo": "Gratuito; parcheggio a pagamento nel villaggio, con pochi posti",
        "orari": "Sempre accessibile; le case sono abitate",
        "lat": 51.7584,
        "lng": -1.8348
      },
      {
        "nome": "Bourton-on-the-Water",
        "testo": "Il villaggio con il fiume Windrush basso e largo, attraversato da piccoli ponti di pietra. È il più frequentato della zona.",
        "come": "In auto, con parcheggi a pagamento ai bordi del centro.",
        "quando": "La mattina presto o in un giorno feriale.",
        "tempo": "1-2 ore",
        "costo": "Gratuito; parcheggi a pagamento ai bordi del centro",
        "orari": "Sempre accessibile",
        "lat": 51.886,
        "lng": -1.759
      },
      {
        "nome": "Lower Slaughter e Upper Slaughter",
        "testo": "Due villaggi minuscoli lungo un torrente, collegati da un sentiero tra i prati. Sono il contrario di Bourton: silenziosi.",
        "come": "A piedi da un villaggio all'altro, andata e ritorno.",
        "quando": "Mattina o tardo pomeriggio.",
        "tempo": "1-2 ore con la camminata",
        "costo": "Gratuito",
        "orari": "Sempre accessibile",
        "lat": 51.906,
        "lng": -1.777,
        "consiglio": "A Lower Slaughter i posti auto sono pochissimi: conviene lasciare l'auto a Upper Slaughter o a Bourton e camminare. Il sentiero attraversa campi con le pecore, e i cancelli vanno richiusi."
      },
      {
        "nome": "Stow-on-the-Wold",
        "testo": "Un paese di mercato in cima a una collina, con la piazza, le botteghe di antiquariato e la chiesa di St Edward, con la porta tra due tassi che molti accostano al mondo di Tolkien.",
        "come": "In auto o a piedi dalle Slaughter.",
        "tempo": "1-2 ore",
        "quando": "Il tardo pomeriggio, a fine giro, o la mattina presto se si dorme qui.",
        "costo": "Gratuito",
        "lat": 51.93,
        "lng": -1.7225
      },
      {
        "nome": "Chipping Campden e Broadway",
        "testo": "Le Cotswolds del nord. Chipping Campden ha una strada principale di case di pietra, con il vecchio mercato coperto. Broadway è più grande, con la torre in cima alla collina.",
        "come": "In auto, a nord di Stow.",
        "tempo": "mezza giornata",
        "quando": "La mattina, prima dei pullman.",
        "costo": "Gratuito",
        "lat": 52.052,
        "lng": -1.779
      },
      {
        "nome": "Castle Combe",
        "testo": "Un villaggio nel Wiltshire, all'estremo sud delle Cotswolds, con le case di pietra intorno alla vecchia croce del mercato e il ponte sul torrente. Sta sulla strada per Bath.",
        "come": "In auto, lasciandola nel parcheggio sopra il villaggio e scendendo a piedi.",
        "quando": "La mattina.",
        "tempo": "1 ora",
        "costo": "Gratuito",
        "orari": "Sempre accessibile",
        "lat": 51.493,
        "lng": -2.229
      },
      {
        "nome": "Broadway Tower",
        "testo": "Una torre del Settecento in cima alla collina sopra Broadway, uno dei punti più alti delle Cotswolds. Dalla terrazza la vista si apre su più contee.",
        "come": "In auto da Broadway in una decina di minuti, oppure a piedi sul Cotswold Way, in salita dal paese.",
        "quando": "Con il cielo limpido o verso il tramonto.",
        "tempo": "1 ora",
        "lat": 52.02417,
        "lng": -1.83583,
        "url": "https://www.broadwaytower.co.uk/"
      },
      {
        "nome": "Blenheim Palace",
        "testo": "Il grande palazzo barocco dei duchi di Marlborough, patrimonio UNESCO, dove nacque Winston Churchill. Il parco disegnato da Capability Brown, con il lago e il ponte, vale da solo la visita.",
        "come": "A Woodstock, ai margini orientali delle Cotswolds, sulla strada tra Oxford e Burford. Biglietti online, 3 sterline in meno che sul posto.",
        "quando": "La mattina, all'apertura. Dal 13 novembre al 3 gennaio c'è il programma di Natale e i biglietti per il solo parco non si vendono.",
        "tempo": "mezza giornata",
        "costo": "Palazzo, parco e giardini 41 sterline online e 44 sul posto, circa 47-51 €; solo parco e giardini 31 sterline online, circa 36 € (2026)",
        "orari": "Parco aperto tutti i giorni 9-18; il palazzo ha orari propri e chiusure stagionali, sul sito ufficiale.",
        "lat": 51.84136,
        "lng": -1.36095,
        "url": "https://www.blenheimpalace.com/"
      },
      {
        "nome": "Hidcote Manor Garden",
        "testo": "Uno dei giardini più noti d'Inghilterra, creato all'inizio del Novecento e diviso in «stanze» da siepi e muri, ognuna con il suo colore. È del National Trust.",
        "come": "In auto, pochi chilometri a nord di Chipping Campden.",
        "quando": "Da maggio a settembre, con le fioriture.",
        "tempo": "2 ore",
        "lat": 52.08456,
        "lng": -1.74609,
        "url": "https://www.nationaltrust.org.uk/"
      },
      {
        "nome": "Sudeley Castle",
        "testo": "Un castello con giardini a Winchcombe, abitato ancora oggi. Nella cappella è sepolta Caterina Parr, l'ultima moglie di Enrico VIII.",
        "come": "In auto, nelle Cotswolds occidentali, a mezz'ora da Broadway.",
        "quando": "Solo nella stagione di apertura: riapre a marzo 2027.",
        "tempo": "2-3 ore",
        "costo": "Adulti 24 sterline, circa 28 € (2026)",
        "orari": "In stagione castello e giardini dalle 10, ultimo ingresso alle 15, il castello chiude alle 16 e il sito alle 17. Chiuso d'inverno.",
        "url": "https://sudeleycastle.co.uk/"
      },
      {
        "nome": "Burford",
        "testo": "Una cittadina sul fiume Windrush, con la strada principale in discesa tra case di pietra, botteghe e locande. Per chi arriva da Oxford è la porta delle Cotswolds.",
        "come": "In auto sulla A40, tra Oxford e Cheltenham.",
        "quando": "La mattina o a pranzo.",
        "tempo": "1 ora",
        "costo": "Gratuito",
        "lat": 51.808,
        "lng": -1.637
      },
      {
        "nome": "Cirencester e il Corinium Museum",
        "testo": "Cirencester era Corinium, una delle città più importanti della Britannia romana. Il museo ha mosaici e oggetti romani trovati in zona; la chiesa sulla piazza del mercato è tra le più grandi delle Cotswolds.",
        "come": "In auto, nel sud delle Cotswolds, sulla strada tra Bibury e Castle Combe.",
        "tempo": "2 ore",
        "lat": 51.7138,
        "lng": -1.9763,
        "url": "https://coriniummuseum.org/"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Bibury la mattina presto",
          "Bourton-on-the-Water",
          "Camminata tra Lower e Upper Slaughter",
          "Stow-on-the-Wold"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come sopra",
          "Giorno 2: Chipping Campden e Broadway, oppure Castle Combe sulla strada per Bath"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Bibury la mattina presto, Bourton-on-the-Water, la camminata tra Lower e Upper Slaughter, Stow-on-the-Wold",
          "Giorno 2: Chipping Campden, Broadway e la Broadway Tower, Hidcote nel pomeriggio",
          "Giorno 3: Burford e Blenheim Palace, oppure Cirencester e Castle Combe sulla strada per Bath"
        ]
      }
    ],
    zone: [
      {
        "nome": "Stow-on-the-Wold e dintorni",
        "perChi": "chi gira in auto",
        "testo": "Al centro della zona, a pochi minuti da Bourton, dalle Slaughter e da Moreton-in-Marsh.",
        "fascia": "120-230 €"
      },
      {
        "nome": "Moreton-in-Marsh",
        "perChi": "chi arriva in treno",
        "testo": "Ha la stazione sulla linea per Londra e qualche bus per i villaggi vicini.",
        "fascia": "100-180 €"
      },
      {
        "nome": "Chipping Campden e Broadway",
        "perChi": "chi vuole le Cotswolds del nord",
        "testo": "Villaggi più grandi, con locande storiche e qualche hotel di lusso. Comodi per Hidcote e per una gita a Stratford-upon-Avon.",
        "fascia": "140-280 €"
      },
      {
        "nome": "Burford e Bibury",
        "perChi": "chi arriva in auto da Oxford",
        "testo": "Il lato sud-est della zona, più vicino a Oxford e Blenheim. Bibury la sera, partiti i pullman, è silenziosa.",
        "fascia": "130-260 €"
      }
    ],
    sapori: [
      {
        "nome": "Cream tea",
        "testo": "Tè con scones, panna e marmellata, nelle sale da tè dei villaggi."
      },
      {
        "nome": "Pub di villaggio",
        "testo": "Pranzo con piatti di stagione e birre locali, spesso in edifici di pietra di qualche secolo."
      }
    ],
    attenzioni: [
      "Strade di campagna strette, con siepi alte e poca visibilità: si guida a sinistra e piano.",
      "Ad Arlington Row si fotografa dalla strada, senza entrare nei giardini."
    ],
    gite: [
      {
        "nome": "Oxford",
        "distanza": "45 minuti in auto da Stow-on-the-Wold",
        "come": "In auto, oppure in treno da Moreton-in-Marsh o Kingham.",
        "testo": "I college, la Radcliffe Camera e la Bodleian in una giornata a piedi. È anche il posto più comodo per ritirare o restituire l'auto."
      },
      {
        "nome": "Stratford-upon-Avon",
        "distanza": "circa 20 km da Chipping Campden",
        "come": "In auto, verso nord.",
        "testo": "La città natale di Shakespeare, con la casa dove nacque, le case a graticcio e il teatro della Royal Shakespeare Company sul fiume Avon."
      },
      {
        "nome": "Bath",
        "distanza": "mezz'ora in auto da Castle Combe",
        "come": "In auto, scendendo verso sud; da Bath Spa il treno riporta a Londra Paddington in circa un'ora e mezza.",
        "testo": "Le terme romane, l'abbazia e i crescent georgiani. È la fine naturale di un giro delle Cotswolds."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono per le Cotswolds?",
        "risposta": "Due giorni per i villaggi principali, tre per aggiungere Broadway Tower, Hidcote e Blenheim Palace senza correre. Due o tre villaggi al giorno, con una camminata, rendono più di un elenco lungo."
      },
      {
        "domanda": "Si possono visitare le Cotswolds senza auto?",
        "risposta": "Sì, ma con limiti. Il treno arriva a Moreton-in-Marsh e i bus tra i villaggi sono pochi: la soluzione più pratica è dormire lì e prendere un tour organizzato dei villaggi."
      },
      {
        "domanda": "Dove conviene dormire nelle Cotswolds?",
        "risposta": "Stow-on-the-Wold per chi gira in auto, perché è al centro della zona; Moreton-in-Marsh per chi arriva in treno. Si dorme in pub con camere e B&B, da prenotare presto."
      },
      {
        "domanda": "Quali sono i villaggi più belli delle Cotswolds?",
        "risposta": "I più famosi sono Bibury, Bourton-on-the-Water e Castle Combe, anche i più affollati. Lower e Upper Slaughter e Chipping Campden sono più tranquilli."
      },
      {
        "domanda": "Quando andare nelle Cotswolds?",
        "risposta": "Da maggio a settembre; in primavera e in autunno ci sono meno gruppi. In ogni stagione conviene arrivare a Bibury e Bourton prima delle 9, prima dei pullman."
      },
      {
        "domanda": "Serve la patente internazionale per guidare?",
        "risposta": "No, la patente italiana vale senza permesso internazionale. Si guida a sinistra, su strade strette tra le siepi."
      }
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
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono arrivato in treno da Paddington, dopo i giorni a Londra: il giro della città dei college, poi ho ritirato l'auto e sono entrato nelle Cotswolds.",
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
    visitataPersonalmente: true,
    introduzione:
      'Una città di pietra dorata costruita intorno alle sorgenti calde, con le terme romane, l\'abbazia e i palazzi georgiani del Settecento. È patrimonio UNESCO.',
    percheAndarci: 'Per le terme romane, i crescent georgiani e la fine naturale di un viaggio nelle Cotswolds, prima di rientrare a Londra in treno.',
    cosaVedere: ['Le Roman Baths', 'L\'Abbazia di Bath', 'Il Royal Crescent e il Circus', 'Il Pulteney Bridge'],
    cosaFare: ['Visitare le terme romane la mattina presto', 'Camminare dal Circus al Royal Crescent', 'Un bagno nelle terme moderne della città'],
    comeArrivare:
      'In treno da Londra Paddington a Bath Spa in circa un\'ora e mezza; orari e prezzi su nationalrail.co.uk. Da Heathrow si arriva a Paddington con la Elizabeth line o l\'Heathrow Express e si cambia. L\'aeroporto più vicino è Bristol, collegato a Bath dal bus A4 in circa un\'ora, secondo il traffico. In auto dalle Cotswolds si scende passando da Castle Combe, a mezz\'ora; in centro la guida è lenta e i parcheggi costano, meglio restituire l\'auto prima.',
    costi:
      'Roman Baths da 23,50 sterline online (circa 27 €), Thermae Bath Spa da 44 sterline (circa 51 €), No. 1 Royal Crescent 16 sterline (circa 18 €), prezzi 2026. Il centro si gira a piedi. Budget indicativo al giorno a persona, con la doppia divisa in due: basso 90-120 €, medio 170-240 €, alto oltre 350 €.',
    comeSpostarsi: 'A piedi.',
    erroriDaEvitare: ['Arrivare alle Roman Baths a metà giornata senza biglietto: conviene prenotarlo online sul sito ufficiale'],
    miaEsperienza:
      "È stata l'ultima tappa del giro dopo le Cotswolds: ci sono arrivato da Castle Combe, ho visto la città con le terme romane e poi ho preso il treno di rientro a Londra.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Roman Baths",
        "testo": "Le terme romane costruite intorno alla sorgente calda: la grande vasca con l'acqua verde, le terme sotterranee e i resti del tempio di Sulis Minerva. Il museo racconta la città romana con gli oggetti gettati nella sorgente.",
        "come": "Biglietto a data e ora sul sito ufficiale; l'audioguida è compresa. L'acqua non si tocca: il bagno si fa alle Thermae.",
        "quando": "All'apertura o nell'ultima ora, quando ci sono meno gruppi.",
        "tempo": "2 ore",
        "costo": "Da 23,50 sterline online nei feriali di novembre e dicembre 2026 (26,50 nel fine settimana), circa 27-31 €; nei mesi di punta fino a circa 33 sterline. Alla cassa 2 sterline in più.",
        "orari": "Tutti i giorni; in autunno e in inverno 9-18, ultimo ingresso alle 17. Il 24 dicembre ultimo ingresso alle 16:15, chiuso il 25 e 26 dicembre.",
        "lat": 51.3809,
        "lng": -2.3595,
        "url": "https://www.romanbaths.co.uk/",
        "consiglio": "Chi le visita a novembre o dicembre può tornare a gennaio o febbraio con un biglietto da 1 sterlina."
      },
      {
        "nome": "Abbazia di Bath",
        "testo": "La grande chiesa gotica accanto alle terme, con le scale di Giacobbe scolpite sulla facciata, gli angeli che salgono verso il cielo, e la volta a ventaglio dentro. Il biglietto comprende il piccolo museo sotterraneo.",
        "come": "Biglietto all'ingresso; audioguida a parte.",
        "quando": "La mattina nei giorni feriali; la domenica apre solo nel primo pomeriggio.",
        "tempo": "45 minuti",
        "costo": "Adulti 9 sterline, circa 10 €; audioguida 3,50 sterline (2026)",
        "orari": "Lunedì-venerdì 10-17:30, sabato 10-18, domenica 13-15:30. Ultimo ingresso mezz'ora prima della chiusura.",
        "lat": 51.38139,
        "lng": -2.35889,
        "url": "https://www.bathabbey.org/"
      },
      {
        "nome": "La torre dell'abbazia",
        "testo": "Una visita guidata sulla torre: 212 gradini, la camera delle campane, il passaggio dietro il quadrante dell'orologio e, in cima, la vista sui tetti e sulle terme.",
        "come": "Solo con la visita guidata, da prenotare sul sito dell'abbazia. Non è accessibile a chi ha difficoltà motorie.",
        "quando": "Con il cielo limpido.",
        "tempo": "1 ora",
        "orari": "Dal lunedì al sabato, a turni durante il giorno, secondo disponibilità.",
        "lat": 51.38139,
        "lng": -2.35889,
        "url": "https://www.bathabbey.org/visiting/tours/"
      },
      {
        "nome": "Royal Crescent e No. 1 Royal Crescent",
        "testo": "Un semicerchio di trenta case georgiane davanti a un grande prato, il simbolo della Bath del Settecento. Al numero 1 c'è un museo con gli interni arredati come all'epoca, dalle cucine ai salotti.",
        "come": "A piedi dal Circus, lungo Brock Street.",
        "quando": "Il crescent con la luce del pomeriggio; il museo in qualsiasi momento.",
        "tempo": "1 ora e mezza con il museo",
        "costo": "Il crescent è libero; No. 1 Royal Crescent 16 sterline, circa 18 € (2026)",
        "orari": "No. 1: martedì-domenica 10-17:30, ultimo ingresso 16:30; chiuso il lunedì, tranne vacanze scolastiche e festivi. Chiuso dal 16 al 28 novembre e il 25-26 dicembre 2026.",
        "lat": 51.38694,
        "lng": -2.36833,
        "url": "https://no1royalcrescent.org.uk/"
      },
      {
        "nome": "The Circus",
        "testo": "Un cerchio di case georgiane diviso in tre parti, con gli alberi al centro e le facciate decorate da colonne e fregi. È a pochi passi dal Royal Crescent.",
        "come": "A piedi dal centro, salendo da Gay Street.",
        "tempo": "15 minuti",
        "costo": "Gratuito",
        "lat": 51.386,
        "lng": -2.364
      },
      {
        "nome": "Pulteney Bridge",
        "testo": "Un ponte del Settecento con le botteghe costruite sopra, come il Ponte Vecchio, e sotto la cascata a gradini dell'Avon. È una delle immagini più note della città.",
        "come": "A piedi; la vista migliore è dalla riva o dai Parade Gardens.",
        "quando": "Al tramonto.",
        "tempo": "20 minuti",
        "costo": "Gratuito",
        "lat": 51.38306,
        "lng": -2.35778
      },
      {
        "nome": "Thermae Bath Spa",
        "testo": "Le terme moderne della città, con l'acqua calda naturale della stessa sorgente. La piscina sul tetto guarda l'abbazia e le colline.",
        "come": "Si entra dai 16 anni, con un documento. La sessione base dura 2 ore, con telo e accappatoio.",
        "quando": "La sera, con la piscina sul tetto illuminata; dal lunedì al venerdì costa meno.",
        "tempo": "2 ore",
        "costo": "Sessione di 2 ore 44 sterline dal lunedì al venerdì, 49 nel fine settimana, circa 51-56 € (2026)",
        "orari": "Tutti i giorni 9-21:30, vasche fino alle 21. Chiuso il 25-26 dicembre e il 1° gennaio.",
        "lat": 51.38037,
        "lng": -2.36157,
        "url": "https://www.thermaebathspa.com/"
      },
      {
        "nome": "Jane Austen Centre",
        "testo": "Una mostra sulla scrittrice e sulla Bath dei suoi romanzi, in una casa georgiana di Gay Street. Al piano di sopra c'è la sala da tè in stile Regency.",
        "come": "Biglietto online.",
        "tempo": "1 ora",
        "costo": "18 sterline online, circa 21 € (2026)",
        "orari": "Da novembre: domenica-venerdì 10-16:30, sabato 10-17:30. Dal 1° luglio al 21 settembre tutti i giorni 9:45-18. Ultimo ingresso un'ora prima.",
        "lat": 51.38404,
        "lng": -2.36316,
        "url": "https://janeausten.co.uk/pages/jane-austen-centre-in-bath"
      },
      {
        "nome": "Holburne Museum",
        "testo": "Un museo d'arte in un palazzo georgiano in fondo a Great Pulteney Street, all'ingresso dei Sydney Gardens. Ritratti, porcellane e argenti, con mostre temporanee.",
        "come": "A piedi dal Pulteney Bridge, lungo Great Pulteney Street.",
        "tempo": "1-2 ore",
        "costo": "Biglietto 16,50 sterline, circa 19 € (2026); le collezioni sono gratuite il mercoledì dalle 15",
        "orari": "Tutti i giorni 10-17, domenica e festivi 11-17; ultimo ingresso 16:30. Chiuso dal 24 al 26 dicembre e il 1° gennaio.",
        "lat": 51.38566,
        "lng": -2.3511,
        "url": "https://www.holburne.org/"
      },
      {
        "nome": "Prior Park Landscape Garden",
        "testo": "Un giardino paesaggistico del Settecento sulla collina a sud del centro, con il ponte palladiano sul lago e la vista sulla città. È del National Trust.",
        "come": "In salita dal centro, a piedi o in bus.",
        "quando": "Con il bel tempo; d'inverno i prati sono fangosi.",
        "tempo": "1-2 ore",
        "lat": 51.36721,
        "lng": -2.34374,
        "url": "https://www.nationaltrust.org.uk/"
      },
      {
        "nome": "Assembly Rooms",
        "testo": "Le sale da ballo e da tè del Settecento, dove la società georgiana si incontrava la sera; compaiono nei romanzi di Jane Austen. Sono del National Trust.",
        "come": "A piedi, dietro il Circus.",
        "tempo": "45 minuti",
        "lat": 51.38611,
        "lng": -2.36222
      },
      {
        "nome": "Victoria Art Gallery",
        "testo": "La galleria d'arte civica, in un palazzo vittoriano accanto al Pulteney Bridge, con pittura britannica dal Seicento a oggi.",
        "come": "A piedi, all'imbocco del ponte.",
        "tempo": "1 ora",
        "lat": 51.38265,
        "lng": -2.3586,
        "url": "https://www.victoriagal.org.uk/"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Roman Baths all'apertura",
          "Abbazia, ed eventualmente la torre",
          "Pulteney Bridge e pranzo",
          "The Circus e Royal Crescent, con il museo al numero 1",
          "Thermae Bath Spa la sera"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come sopra",
          "Giorno 2: Great Pulteney Street e Holburne Museum, Jane Austen Centre, Assembly Rooms, Prior Park nel pomeriggio"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2: come sopra",
          "Giorno 3: gita a Castle Combe e Lacock, oppure a Stonehenge, o in treno a Bristol"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro, intorno all'abbazia",
        "perChi": "chi vuole tutto a piedi",
        "testo": "Tra le terme, Milsom Street e il Pulteney Bridge. Comodo e vivo, ma caro e con poco parcheggio.",
        "fascia": "150-280 €"
      },
      {
        "nome": "Royal Crescent e Lansdown",
        "perChi": "chi cerca le case georgiane",
        "testo": "La parte alta della città georgiana, tranquilla la sera; dal centro si sale a piedi in dieci-quindici minuti.",
        "fascia": "170-350 €"
      },
      {
        "nome": "Vicino a Bath Spa",
        "perChi": "chi arriva e riparte in treno",
        "testo": "Intorno alla stazione e verso Widcombe: hotel di catena e B&B, a pochi minuti dalle terme.",
        "fascia": "110-200 €"
      },
      {
        "nome": "Bathwick e Great Pulteney Street",
        "perChi": "chi vuole calma restando a piedi",
        "testo": "Oltre il ponte, con il viale georgiano, l'Holburne e i Sydney Gardens.",
        "fascia": "130-250 €"
      }
    ],
    gite: [
      {
        "nome": "Castle Combe e Lacock",
        "distanza": "circa mezz'ora in auto",
        "come": "In auto verso nord-est; i bus sono pochi.",
        "testo": "Due villaggi di pietra fuori dal tempo: Castle Combe con il ponte sul torrente e la croce del mercato, Lacock con l'abbazia del National Trust."
      },
      {
        "nome": "Stonehenge",
        "distanza": "circa 1 ora in auto",
        "come": "In auto, oppure con un tour in pullman da Bath.",
        "testo": "Il cerchio di pietre preistorico, patrimonio UNESCO, nella piana di Salisbury. Si visita con biglietto a orario."
      },
      {
        "nome": "Bristol",
        "distanza": "circa 15 minuti in treno",
        "come": "In treno da Bath Spa a Bristol Temple Meads.",
        "testo": "Il porto sul fiume Avon, il ponte sospeso di Clifton e i murales di Stokes Croft. Una città giovane, diversa dalla Bath georgiana."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Bath?",
        "risposta": "Un giorno basta per le terme romane, l'abbazia e i crescent. Con due si aggiungono le Thermae, i musei e Prior Park con calma."
      },
      {
        "domanda": "Bisogna prenotare le Roman Baths?",
        "risposta": "Conviene: online il biglietto costa 2 sterline in meno e si sceglie l'orario. All'apertura o nell'ultima ora c'è meno gente."
      },
      {
        "domanda": "Si può fare il bagno nelle terme romane?",
        "risposta": "No, l'acqua delle Roman Baths non si tocca. Il bagno nell'acqua termale si fa alle Thermae Bath Spa, dai 16 anni."
      },
      {
        "domanda": "Si può visitare Bath in giornata da Londra?",
        "risposta": "Sì, il treno da Paddington impiega circa un'ora e mezza. Con una notte però si vedono le terme all'apertura e la città la sera, senza folla."
      },
      {
        "domanda": "Conviene arrivare a Bath in auto?",
        "risposta": "Solo se si arriva dalle Cotswolds. In centro si guida lenti e i parcheggi costano: meglio restituire l'auto e girare a piedi."
      },
      {
        "domanda": "Quanto costa visitare Bath?",
        "risposta": "Le Roman Baths partono da 23,50 sterline online, le Thermae da 44, l'abbazia 9 (2026). Crescent, Circus e Pulteney Bridge sono gratuiti."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['londra-cotswolds'],
    imageAlt: 'La terrazza delle terme romane di Bath con le statue degli imperatori, e dietro la torre dell\'abbazia',
    immagine: `${IMG}/giorno-08-bath.webp`,
  },
  {
    slug: 'manchester',
    paeseSlug: 'inghilterra',
    ordine: 5,
    nome: 'Manchester',
    tipologia: ['città', 'calcio', 'musei', 'vita notturna'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Mio fratello ha vissuto quattro anni nel nord dell'Inghilterra, quindi sono andato tantissime volte a visitare queste zone. Manchester a me piace perché si respira ancora un'aria di Inghilterra più autentica rispetto a Londra, che ormai è una città cosmopolita a tutti gli effetti.",
    introduzione:
      'La città della rivoluzione industriale, con le filande e i magazzini di mattoni rossi diventati quartieri vivi, il Northern Quarter e Ancoats. Ha due squadre di Premier League, il Manchester United all\'Old Trafford e il Manchester City all\'Etihad, e molti musei gratuiti.',
    percheAndarci:
      'Per il calcio, per i quartieri di mattoni rossi e per un\'Inghilterra meno turistica di Londra. È anche la porta del nord: Liverpool è a un\'ora di treno, il Peak District a tre quarti d\'ora.',
    cosaVedere: [
      'Il Northern Quarter e Ancoats',
      'La John Rylands Library',
      'Il National Football Museum',
      'Castlefield e il Science and Industry Museum',
      'L\'Old Trafford e l\'Etihad Stadium',
      'Salford Quays',
    ],
    cosaFare: [
      'Una partita di Premier League, o il tour di uno stadio',
      'Una sera tra i bar del Northern Quarter',
      'Una passeggiata lungo i canali di Castlefield',
    ],
    comeArrivare:
      'L\'aeroporto di Manchester ha voli diretti dall\'Italia. Il treno per Manchester Piccadilly, con Northern e TransPennine Express, parte ogni 10 minuti circa e impiega una ventina di minuti; di notte resta una corsa all\'ora. Il tram Metrolink va in centro e a Victoria ogni 12 minuti, con la corsa singola a 4,60 sterline, ma è più lento. I taxi neri hanno la fila davanti a ogni terminal. Per entrare nel Regno Unito servono il passaporto e l\'ETA, 20 sterline (2026).',
    comeSpostarsi:
      'Il centro si gira a piedi. Per gli stadi e Salford Quays c\'è il tram Metrolink, da pagare con la carta contactless: il tetto giornaliero su tutte le zone è di 7,10 sterline, 4,90 fuori dall\'ora di punta del mattino. I bus della rete Bee Network costano al massimo 2 sterline a corsa, con le tariffe bloccate per tutto il 2026.',
    periodoMigliore: 'da maggio a settembre per il tempo; da agosto a maggio per la Premier League',
    costi:
      'Molti musei sono gratuiti; costano il National Football Museum e i tour degli stadi. Budget indicativo al giorno a persona, con la doppia divisa in due: basso 90-120 €, medio 170-230 €, alto oltre 330 €.',
    erroriDaEvitare: [
      'Comprare biglietti della partita da siti di rivendita non autorizzati: nel Regno Unito è un reato, e allo stadio non si entra',
      'Prenotare il tour dello stadio nel giorno di una partita in casa: i tour normali non si fanno',
      'Pagare il tram con carte diverse: il tetto giornaliero vale su una sola carta',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Northern Quarter",
        "testo": "Il quartiere dei vecchi magazzini tessili, tra Piccadilly e Ancoats, con i murales, i negozi di dischi e vintage e i bar. Le facciate di mattoni e le scale antincendio di ghisa lo hanno fatto diventare un set per i film ambientati a New York.",
        "come": "A piedi da Piccadilly in cinque minuti. Le vie principali sono Oldham Street, Thomas Street e Tib Street.",
        "quando": "Il pomeriggio per i negozi, la sera per i bar.",
        "tempo": "2-3 ore",
        "costo": "gratuito",
        "lat": 53.4835,
        "lng": -2.2351
      },
      {
        "nome": "Ancoats",
        "testo": "Il primo quartiere industriale del mondo, con le grandi filande di cotone di mattoni rossi lungo il Rochdale Canal. Le fabbriche sono diventate case, ristoranti e panetterie, e il quartiere è uno dei più vivi della città.",
        "come": "A piedi dal Northern Quarter, passando Great Ancoats Street.",
        "quando": "Il pomeriggio e la sera, per cena.",
        "tempo": "1-2 ore",
        "costo": "gratuito",
        "lat": 53.485,
        "lng": -2.2276
      },
      {
        "nome": "John Rylands Library",
        "testo": "Una biblioteca neogotica di fine Ottocento su Deansgate, con la grande sala di lettura dalle volte di pietra rossa. Custodisce manoscritti e libri antichi, tra cui uno dei più antichi frammenti del Nuovo Testamento.",
        "come": "Ingresso libero su Deansgate. Si visita da soli, in silenzio nella sala di lettura.",
        "quando": "La mattina, all'apertura.",
        "tempo": "1 ora",
        "costo": "gratuito",
        "orari": "Dal mercoledì al sabato 10-17, ultimo ingresso 16:40; chiusa da domenica a martedì.",
        "lat": 53.4804,
        "lng": -2.2491,
        "url": "https://www.library.manchester.ac.uk/rylands/visit/"
      },
      {
        "nome": "National Football Museum",
        "testo": "Il museo nazionale del calcio inglese, nell'edificio di vetro dell'Urbis, nel quartiere della cattedrale. Racconta la storia del gioco, delle squadre e dei tifosi, con maglie, trofei e giochi interattivi.",
        "come": "A piedi da Victoria o dal Northern Quarter. Biglietto online o alla cassa, valido 12 mesi.",
        "quando": "Prima di andare allo stadio.",
        "tempo": "2 ore",
        "costo": "a pagamento",
        "orari": "Tutti i giorni 10-17, ultimo ingresso alle 16.",
        "lat": 53.4858,
        "lng": -2.2421,
        "url": "https://www.nationalfootballmuseum.com/"
      },
      {
        "nome": "Science and Industry Museum",
        "testo": "Il museo della scienza e dell'industria nella vecchia stazione di Liverpool Road, la prima stazione passeggeri del mondo. Si vedono le macchine tessili, i motori a vapore della Power Hall e la storia di Manchester industriale.",
        "come": "A piedi da Deansgate o dal tram a Deansgate-Castlefield. Ingresso libero.",
        "quando": "In un giorno di pioggia.",
        "tempo": "2 ore",
        "costo": "gratuito",
        "orari": "Tutti i giorni 10-17; chiuso dal 24 al 26 dicembre e il 1° gennaio. Alcune parti chiuse per lavori di restauro.",
        "lat": 53.4773,
        "lng": -2.2547,
        "url": "https://www.scienceandindustrymuseum.org.uk/visit"
      },
      {
        "nome": "Castlefield",
        "testo": "La zona dei canali, dove il Bridgewater Canal arriva in città, con i viadotti di ferro della ferrovia, i vecchi magazzini e i resti ricostruiti del forte romano di Mamucium, da cui è nata Manchester.",
        "come": "Tram fino a Deansgate-Castlefield, poi a piedi lungo le alzaie.",
        "quando": "Il tardo pomeriggio, con una birra nei pub sull'acqua.",
        "tempo": "1 ora",
        "costo": "gratuito",
        "lat": 53.4758,
        "lng": -2.2557
      },
      {
        "nome": "Old Trafford",
        "testo": "Lo stadio del Manchester United, il «Teatro dei sogni», con il museo del club e la statua della Holy Trinity, Best, Law e Charlton, davanti all'ingresso. Il tour porta negli spogliatoi, nel tunnel e a bordo campo.",
        "come": "Tram fino a Old Trafford o Wharfside, poi pochi minuti a piedi. Tour e biglietti delle partite solo dai canali ufficiali del club.",
        "quando": "Nei giorni senza partita in casa, per il tour.",
        "tempo": "2 ore con il museo",
        "costo": "tour e museo da 28 £ online (circa 33 €, 2026)",
        "orari": "Tour dalla domenica al giovedì 9:30-16, venerdì e sabato 9:30-17; chiuso nei giorni delle partite in casa.",
        "lat": 53.4631,
        "lng": -2.2914,
        "url": "https://www.manutd.com/en/club/visit-old-trafford/museum-stadium-tours"
      },
      {
        "nome": "Etihad Stadium",
        "testo": "Lo stadio del Manchester City, nell'est della città, dentro il complesso sportivo dell'Etihad Campus. Il tour dura circa 75 minuti e parte dal South Stand.",
        "come": "Tram fino a Etihad Campus. Biglietti dei tour e delle partite sul sito del club.",
        "quando": "Nei giorni senza partita.",
        "tempo": "1 ora e mezza",
        "costo": "tour a pagamento",
        "lat": 53.4831,
        "lng": -2.2004,
        "url": "https://www.mancity.com/"
      },
      {
        "nome": "People's History Museum",
        "testo": "Il museo nazionale della democrazia, sulla riva del fiume Irwell: la storia dei diritti dei lavoratori, del voto alle donne e delle lotte politiche in Gran Bretagna, con la più grande collezione di stendardi sindacali al mondo.",
        "come": "A piedi da Spinningfields. Ingresso libero, con un'offerta suggerita.",
        "quando": "Qualsiasi giorno tranne il martedì.",
        "tempo": "1-2 ore",
        "costo": "gratuito (offerta suggerita 10 £)",
        "orari": "10-17 tutti i giorni tranne il martedì.",
        "lat": 53.4814,
        "lng": -2.2534,
        "url": "https://phm.org.uk/visit/"
      },
      {
        "nome": "Manchester Museum",
        "testo": "Il museo dell'università, con le collezioni di storia naturale, l'antico Egitto e uno scheletro di T. rex. È nel quartiere universitario, lungo Oxford Road.",
        "come": "Bus da Piccadilly lungo Oxford Road, o 20 minuti a piedi dal centro.",
        "quando": "Il mercoledì apre fino a sera.",
        "tempo": "2 ore",
        "costo": "gratuito",
        "orari": "Martedì, giovedì, venerdì e domenica 10-17, mercoledì 10-21, sabato 8-17; chiuso il lunedì. Vivarium chiuso fino a maggio 2027.",
        "lat": 53.466,
        "lng": -2.2337,
        "url": "https://www.museum.manchester.ac.uk/visit/"
      },
      {
        "nome": "Cattedrale di Manchester",
        "testo": "La cattedrale gotica del Quattrocento, nel quartiere medievale vicino a Victoria, con gli stalli del coro scolpiti in legno. Accanto c'è la Chetham's Library, la biblioteca pubblica più antica del mondo anglofono, visitabile solo con visite guidate prenotate.",
        "come": "A piedi da Victoria o dal National Football Museum.",
        "quando": "Durante la settimana, fuori dalle funzioni.",
        "tempo": "45 minuti",
        "costo": "gratuito (offerta suggerita 5 £)",
        "orari": "Dal lunedì al sabato 9:30-16, domenica 12-16.",
        "lat": 53.4852,
        "lng": -2.2444,
        "url": "https://manchestercathedral.org/plan-your-visit"
      },
      {
        "nome": "Central Library e St Peter's Square",
        "testo": "La biblioteca centrale rotonda degli anni Trenta, con la sala di lettura sotto la cupola. Accanto c'è il municipio vittoriano, chiuso per restauro fino alla primavera del 2027.",
        "come": "Tram fino a St Peter's Square.",
        "quando": "Una sosta tra Deansgate e Piccadilly.",
        "tempo": "30 minuti",
        "costo": "gratuito",
        "orari": "Dal lunedì al giovedì 9-20, venerdì e sabato 9-17; chiusa la domenica.",
        "lat": 53.4781,
        "lng": -2.2447
      },
      {
        "nome": "Salford Quays",
        "testo": "I vecchi docks del canale navigabile di Manchester, oggi con The Lowry, il centro d'arte con le gallerie dedicate al pittore L. S. Lowry, l'IWM North, il museo della guerra nell'edificio di Daniel Libeskind, e gli studi di MediaCityUK.",
        "come": "Tram fino a MediaCityUK o Harbour City. È a un passo dall'Old Trafford: si combina con il tour dello stadio.",
        "quando": "Lo stesso giorno dell'Old Trafford.",
        "tempo": "mezza giornata",
        "costo": "gallerie di The Lowry e IWM North gratuite",
        "orari": "Gallerie di The Lowry dal martedì al venerdì 11-17, sabato e domenica 10-17, chiuse il lunedì; IWM North 10-17.",
        "lat": 53.4708,
        "lng": -2.2961,
        "url": "https://thelowry.com/"
      },
      {
        "nome": "Aviva Studios",
        "testo": "Il nuovo centro culturale di Factory International, sul fiume vicino a Castlefield, con concerti, mostre e spettacoli. Si entra liberamente nell'edificio; gli eventi sono a pagamento.",
        "come": "A piedi da Deansgate o da Castlefield.",
        "quando": "La sera, se c'è uno spettacolo.",
        "tempo": "1 ora",
        "costo": "ingresso all'edificio gratuito",
        "lat": 53.4782,
        "lng": -2.2577,
        "url": "https://factoryinternational.org/aviva-studios"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "La mattina la John Rylands Library e la cattedrale",
          "Il National Football Museum",
          "Il pomeriggio il tour dell'Old Trafford o dell'Etihad",
          "La sera nel Northern Quarter"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Primo giorno: Northern Quarter, Ancoats, John Rylands Library e cattedrale",
          "Secondo giorno: Castlefield e il Science and Industry Museum, poi lo stadio e Salford Quays",
          "Se c'è la partita in casa, si arriva allo stadio con largo anticipo"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "I due giorni in città come sopra",
          "Il terzo in treno nel Peak District: Edale, Mam Tor e Castleton",
          "Oppure in treno a Liverpool, a un'ora di viaggio"
        ]
      }
    ],
    zone: [
      {
        "nome": "Northern Quarter",
        "perChi": "chi vuole i bar e la vita della sera",
        "testo": "A due passi da Piccadilly, con tutti i locali sotto casa. Il venerdì e il sabato è rumoroso."
      },
      {
        "nome": "Piccadilly",
        "perChi": "chi arriva e riparte in treno",
        "testo": "Vicino alla stazione dei treni per l'aeroporto, per Liverpool, per il Peak District e per il Lake District."
      },
      {
        "nome": "Deansgate e Spinningfields",
        "perChi": "chi vuole il centro più elegante",
        "testo": "Tra la John Rylands Library, Castlefield e i ristoranti di Spinningfields, con il tram per l'Old Trafford vicino."
      },
      {
        "nome": "Salford Quays",
        "perChi": "chi va all'Old Trafford",
        "testo": "Sull'acqua, moderna e tranquilla, vicina allo stadio del Manchester United. La sera è lontana dalla vita del centro."
      }
    ],
    gite: [
      {
        "nome": "Liverpool",
        "distanza": "circa 1 ora in treno",
        "come": "Treni Northern ogni mezz'ora circa da Piccadilly, e TransPennine Express, fino a Liverpool Lime Street.",
        "testo": "I docks sul Mersey, i Beatles, le due cattedrali e Anfield. Merita almeno una notte."
      },
      {
        "nome": "Peak District",
        "distanza": "circa 45 minuti in treno",
        "come": "Treno Northern della Hope Valley da Piccadilly fino a Edale, uno all'ora.",
        "testo": "Le colline più vicine alla città: la camminata da Edale a Castleton passando da Mam Tor, con le grotte alla fine."
      },
      {
        "nome": "Lake District",
        "distanza": "poco più di 2 ore in treno",
        "come": "Treni Northern diretti da Piccadilly e dall'aeroporto fino a Windermere.",
        "testo": "I laghi e le montagne del nord-ovest, con i battelli su Windermere e i villaggi di Ambleside e Grasmere. Meglio con una o due notti."
      }
    ],
    sapori: [
      { nome: 'Pie and peas', testo: 'Il tortino di carne con i piselli, il pasto da stadio e da pub del nord.' },
      { nome: 'Manchester tart', testo: 'Crostata con marmellata, crema e cocco, il dolce delle mense scolastiche di una volta.' },
      { nome: 'Curry Mile', testo: 'Wilmslow Road, a Rusholme, con i ristoranti sud-asiatici uno dopo l\'altro.' },
    ],
    attenzioni: [
      'Nei giorni di partita il tram per gli stadi è pienissimo: conviene partire presto.',
      'Si attraversa guardando prima a destra: il traffico arriva dal lato opposto rispetto all\'Italia.',
      'La pioggia è frequente in ogni stagione: giacca impermeabile sempre.',
    ],
    faq: [
      {
        "domanda": "Come si comprano i biglietti per una partita a Manchester?",
        "risposta": "Dai canali ufficiali dei club. Allo United serve una membership, da 37,50 sterline, al City la Matchday Membership da 38 sterline (2026-27); per le partite più richieste c'è il sorteggio. In alternativa ci sono la ticket exchange ufficiale e l'hospitality."
      },
      {
        "domanda": "Si può fare il tour dell'Old Trafford nel giorno della partita?",
        "risposta": "No, nei giorni delle partite in casa il tour normale non si fa. Negli altri giorni parte dalle 9:30 e costa da 28 sterline online."
      },
      {
        "domanda": "Come si va dall'aeroporto di Manchester al centro?",
        "risposta": "In treno fino a Piccadilly, in una ventina di minuti, con partenze ogni 10 minuti circa. Il tram Metrolink costa 4,60 sterline ma è più lento."
      },
      {
        "domanda": "Quanti giorni servono a Manchester?",
        "risposta": "Due giorni per i quartieri, i musei e uno stadio. Con tre si aggiunge una gita nel Peak District o a Liverpool."
      },
      {
        "domanda": "Manchester o Liverpool?",
        "risposta": "Sono a un'ora di treno: conviene vederle tutte e due. Manchester ha più vita notturna e musei, Liverpool il fiume, i Beatles e i docks."
      },
      {
        "domanda": "Quali musei sono gratuiti a Manchester?",
        "risposta": "La John Rylands Library, il Science and Industry Museum, il Manchester Museum, il People's History Museum, le gallerie di The Lowry e l'IWM North. Il National Football Museum è a pagamento."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['manchester-liverpool-premier-league'],
    imageAlt: 'Murales colorati e persone sedute fuori da un locale nel Northern Quarter di Manchester',
    immagine: '/images/viaggi/manchester-liverpool-premier-league/giorno-01-northern-quarter.jpg',
  },
  {
    slug: 'liverpool',
    paeseSlug: 'inghilterra',
    ordine: 6,
    nome: 'Liverpool',
    tipologia: ['città', 'calcio', 'musica', 'musei'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono andato tante volte, quando mio fratello viveva nel nord dell'Inghilterra. A Liverpool c'è ancora più aria di «operai» che a Manchester, in senso buono, con i fabbricati in mattoni rossi.",
    introduzione:
      'La città portuale sul fiume Mersey, con i docks dell\'Ottocento, le «Three Graces» del Pier Head e due cattedrali una di fronte all\'altra. È la città dei Beatles e di due squadre di Premier League, il Liverpool ad Anfield e l\'Everton nel nuovo stadio sul fiume.',
    percheAndarci:
      'Per il waterfront patrimonio della storia marittima inglese, per i Beatles, per il calcio e per una città orgogliosa, ancora operaia nell\'anima. Molti musei sono gratuiti.',
    cosaVedere: [
      'Il Royal Albert Dock',
      'Il Pier Head e il Royal Liver Building',
      'Le due cattedrali di Hope Street',
      'Mathew Street e il Cavern Club',
      'Anfield e la Hill Dickinson Stadium',
      'Another Place a Crosby',
    ],
    cosaFare: [
      'La crociera sul Mersey dal Pier Head',
      'Un concerto al Cavern Club',
      'Il tour di Anfield, o una partita',
      'Una sera tra Bold Street e il Baltic Triangle',
    ],
    comeArrivare:
      'Dall\'aeroporto John Lennon il bus 500 di Arriva parte fino a ogni 15 minuti, dalle 4 a mezzanotte, e arriva alla stazione dei bus di Liverpool ONE e a Great Charlotte Street, vicino a Lime Street; costa al massimo 2 sterline. I bus 80A e 86A passano dalla stazione di Liverpool South Parkway. Da Manchester il treno impiega circa un\'ora; da Londra Euston ci sono treni diretti Avanti West Coast.',
    comeSpostarsi:
      'Il centro, i docks e le cattedrali si girano a piedi. Per Anfield e per Crosby servono il bus o i treni Merseyrail. Ogni corsa in bus costa al massimo 2 sterline; il biglietto giornaliero Solo per tutti i bus del Merseyside costa 5,90 sterline (2026).',
    periodoMigliore: 'da maggio a settembre per il tempo; da agosto a maggio per la Premier League',
    costi:
      'I musei nazionali sono gratuiti; costano il Beatles Story, il Cavern Club e i tour degli stadi. Budget indicativo al giorno a persona, con la doppia divisa in due: basso 85-110 €, medio 160-220 €, alto oltre 300 €. Nei weekend di partita gli alberghi costano di più.',
    erroriDaEvitare: [
      'Cercare il treno all\'aeroporto: non c\'è una stazione, serve il bus',
      'Comprare biglietti della partita da rivenditori non autorizzati',
      'Andare al Merseyside Maritime Museum: è chiuso per lavori',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Royal Albert Dock",
        "testo": "Il grande bacino dell'Ottocento, circondato da magazzini di mattoni rossi e colonne di ghisa, il più grande complesso di edifici protetti del Regno Unito. Oggi ci sono musei, ristoranti e bar sull'acqua.",
        "come": "A piedi dal centro e da Liverpool ONE in dieci minuti.",
        "quando": "La sera, con le luci riflesse nel bacino.",
        "tempo": "1-2 ore",
        "costo": "gratuito",
        "lat": 53.4003,
        "lng": -2.9927,
        "url": "https://albertdock.com"
      },
      {
        "nome": "The Beatles Story",
        "testo": "Il museo dei Beatles all'Albert Dock, che racconta la loro storia dagli inizi ad Amburgo e al Cavern fino allo scioglimento, con l'audioguida e le ricostruzioni dei luoghi.",
        "come": "Biglietto online o alla cassa, all'Albert Dock.",
        "quando": "La mattina, prima dei gruppi.",
        "tempo": "2 ore",
        "costo": "20 £ (circa 23 €, 2026)",
        "orari": "Dalla domenica al venerdì 9-17:30, il sabato 9-18:30.",
        "lat": 53.3993,
        "lng": -2.992,
        "url": "https://www.beatlesstory.com/plan-your-visit/"
      },
      {
        "nome": "Museum of Liverpool",
        "testo": "Il museo della città, nell'edificio bianco sul Pier Head: la storia del porto, dell'emigrazione, della musica e del calcio, con le voci degli abitanti.",
        "come": "A piedi dall'Albert Dock. Ingresso libero.",
        "quando": "Qualsiasi giorno tranne il lunedì.",
        "tempo": "1-2 ore",
        "costo": "gratuito",
        "orari": "In inverno dal martedì alla domenica 10-16; chiuso il lunedì, tranne nelle vacanze scolastiche.",
        "lat": 53.403,
        "lng": -2.9956,
        "url": "https://www.liverpoolmuseums.org.uk/museum-of-liverpool"
      },
      {
        "nome": "Pier Head e Royal Liver Building",
        "testo": "Il lungofiume con le «Three Graces», i tre palazzi del porto del primo Novecento: il Royal Liver Building, con i due uccelli di rame sulle torri, il Cunard Building e il Port of Liverpool Building. Qui ci sono le statue dei Beatles.",
        "come": "A piedi dal centro, lungo il waterfront.",
        "quando": "Al tramonto, o dal traghetto sul fiume.",
        "tempo": "1 ora",
        "costo": "gratuito",
        "lat": 53.4058,
        "lng": -2.9958
      },
      {
        "nome": "Crociera sul Mersey",
        "testo": "Il vecchio traghetto del Mersey, oggi Liverpool Sightseeing River Cruise: un'ora sul fiume con il commento, e la vista sul waterfront dall'acqua.",
        "come": "Dal terminal del Pier Head, biglietto online o in biglietteria.",
        "quando": "Con il cielo sereno.",
        "tempo": "1 ora",
        "costo": "14 £ (circa 16 €, 2026)",
        "orari": "Partenze ogni ora dal Pier Head, nei giorni feriali dalle 10 alle 16; nei weekend d'inverno ultima partenza alle 15.",
        "lat": 53.405,
        "lng": -2.995,
        "url": "https://www.merseyferries.co.uk/"
      },
      {
        "nome": "Tate Liverpool",
        "testo": "La sede del nord della Tate, con l'arte moderna e contemporanea. Fino al ritorno all'Albert Dock, previsto per il 2027, è ospitata nell'edificio RIBA North, a Mann Island.",
        "come": "A piedi dal Pier Head. Ingresso libero.",
        "quando": "Abbinata al Museum of Liverpool.",
        "tempo": "1 ora",
        "costo": "gratuito",
        "orari": "Tutti i giorni 10-17:50; chiusa dal 24 al 26 dicembre.",
        "lat": 53.4035,
        "lng": -2.9937,
        "url": "https://www.tate.org.uk/visit/tate-liverpool"
      },
      {
        "nome": "Cattedrale anglicana",
        "testo": "La cattedrale più grande del Regno Unito, di arenaria rossa, costruita nel Novecento in stile neogotico su una collina sopra il centro. Dalla torre si vede tutta la città fino al mare.",
        "come": "A piedi da Hope Street. La torre si sale con due ascensori e 108 gradini.",
        "quando": "La mattina; la domenica le zone di visita aprono a mezzogiorno.",
        "tempo": "1 ora",
        "costo": "ingresso gratuito; torre a pagamento",
        "orari": "Tutti i giorni 10-18, la domenica visite dalle 12; torre fino alle 16:30.",
        "lat": 53.3975,
        "lng": -2.9731,
        "url": "https://www.liverpoolcathedral.org.uk/"
      },
      {
        "nome": "Cattedrale metropolitana",
        "testo": "La cattedrale cattolica, rotonda, degli anni Sessanta, con la torre a corona e la lanterna di vetri colorati che illumina l'altare al centro. Hope Street la collega alla cattedrale anglicana.",
        "come": "A piedi dalla cattedrale anglicana, lungo Hope Street.",
        "quando": "Con il sole, per i colori della lanterna.",
        "tempo": "45 minuti",
        "costo": "gratuito",
        "orari": "Tutti i giorni 7:30-18; cripta dal lunedì al sabato 10-16.",
        "lat": 53.4047,
        "lng": -2.9688,
        "url": "https://www.liverpoolmetrocathedral.org.uk/visit-us/"
      },
      {
        "nome": "Cavern Club e Mathew Street",
        "testo": "Il locale dove suonavano i Beatles agli inizi, ricostruito accanto all'originale, con musica dal vivo tutti i giorni. Mathew Street è piena di pub e di ricordi della band.",
        "come": "A piedi dal centro. Si paga all'ingresso, solo con carta.",
        "quando": "Il pomeriggio per vederlo con calma, la sera per i concerti.",
        "tempo": "1-2 ore",
        "costo": "6 £, pass giornaliero 8,50 £ (2026)",
        "orari": "Dalla domenica al mercoledì 11-24, giovedì fino all'1, venerdì e sabato fino alle 2.",
        "lat": 53.4063,
        "lng": -2.9879,
        "url": "https://www.cavernclub.com/"
      },
      {
        "nome": "St George's Hall",
        "testo": "Il grande palazzo neoclassico davanti alla stazione di Lime Street, con la sala dal pavimento di piastrelle Minton e le vecchie aule del tribunale. Intorno ci sono il Walker Art Gallery e il World Museum, gratuiti.",
        "come": "Davanti all'uscita di Lime Street. Le visite guidate si fanno solo in alcune date.",
        "quando": "Appena arrivati in treno.",
        "tempo": "1 ora",
        "costo": "gratuito il centro visitatori",
        "orari": "Centro visitatori dal lunedì al sabato 9:30-17.",
        "lat": 53.4086,
        "lng": -2.9801,
        "url": "https://liverpoolcityhalls.co.uk/plan-your-visit/"
      },
      {
        "nome": "Walker Art Gallery e World Museum",
        "testo": "Due musei nazionali uno accanto all'altro su William Brown Street: la pinacoteca con i preraffaelliti e l'arte inglese, e il museo di storia naturale, archeologia e antico Egitto, con il planetario.",
        "come": "A piedi da Lime Street. Ingresso libero.",
        "quando": "In un giorno di pioggia.",
        "tempo": "1-2 ore ciascuno",
        "costo": "gratuiti",
        "orari": "In inverno dal martedì alla domenica 10-16; chiusi il lunedì, tranne nelle vacanze scolastiche.",
        "lat": 53.41,
        "lng": -2.9797,
        "url": "https://www.liverpoolmuseums.org.uk/visit"
      },
      {
        "nome": "Anfield",
        "testo": "Lo stadio del Liverpool, con la Kop, la curva più famosa d'Inghilterra, il museo del club e il cancello degli Shankly Gates. Il tour passa dagli spogliatoi, dal tunnel con la scritta «This is Anfield» e dalla panchina.",
        "come": "Bus 26 da Liverpool ONE o 17 da Queen Square; nei giorni di partita anche il 917 e le navette. Nei giorni di partita non si parcheggia.",
        "quando": "Nei giorni senza partita, per il tour normale.",
        "tempo": "2 ore con il museo",
        "costo": "tour 26 £ (circa 30 €), museo da solo 14 £ (2026)",
        "orari": "Tour tutti i giorni 10-15; museo 9-17.",
        "lat": 53.4308,
        "lng": -2.9608,
        "url": "https://www.liverpoolfc.com/"
      },
      {
        "nome": "Hill Dickinson Stadium",
        "testo": "Il nuovo stadio dell'Everton, sul Mersey a Bramley-Moore Dock, aperto per la stagione 2025-26. Il tour passa dallo spogliatoio, dal tunnel, dal bordo campo e dalla sala stampa. Il vecchio Goodison Park, dove ora gioca l'Everton femminile, ha di nuovo i suoi tour.",
        "come": "A piedi lungo il fiume dal Pier Head, verso nord. Tour solo con prenotazione online.",
        "quando": "Nei giorni senza partita.",
        "tempo": "1 ora e mezza",
        "costo": "tour a pagamento",
        "lat": 53.425,
        "lng": -3.0027,
        "url": "https://www.hilldickinsonstadium.com/tours"
      },
      {
        "nome": "Another Place, Crosby",
        "testo": "Cento statue di ferro di Antony Gormley sparse lungo tre chilometri di spiaggia, a guardare il mare. Con l'alta marea spariscono sotto l'acqua.",
        "come": "Treno Merseyrail fino a Blundellsands & Crosby, Hall Road o Waterloo, poi a piedi fino alla spiaggia.",
        "quando": "Al tramonto, con la bassa marea.",
        "tempo": "mezza giornata",
        "costo": "gratuito",
        "lat": 53.47,
        "lng": -3.046,
        "url": "https://www.sefton.gov.uk/around-sefton/another-place-by-antony-gormley/plan-your-visit",
        "consiglio": "Si resta entro 50 metri dal lungomare e si controllano le maree: la sabbia e il fango possono essere pericolosi."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "La mattina il Royal Albert Dock e il Beatles Story",
          "Il Pier Head, il Museum of Liverpool e la crociera sul Mersey",
          "Il pomeriggio Mathew Street e il Cavern Club",
          "La sera a Bold Street"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Primo giorno: St George's Hall, l'Albert Dock, il Pier Head e la crociera",
          "Secondo giorno: le due cattedrali di Hope Street, il Cavern Club, poi Anfield o la Hill Dickinson Stadium",
          "La sera nel Baltic Triangle"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "I due giorni come sopra",
          "Il terzo: il Walker Art Gallery e il World Museum la mattina",
          "Il pomeriggio in treno a Crosby, per Another Place al tramonto"
        ]
      }
    ],
    zone: [
      {
        "nome": "Liverpool ONE e centro",
        "perChi": "chi vuole tutto a piedi",
        "testo": "Tra la stazione di Lime Street, i negozi e i docks. La stazione dei bus dell'aeroporto è qui."
      },
      {
        "nome": "Waterfront e Albert Dock",
        "perChi": "chi vuole la vista sul fiume",
        "testo": "Vicino ai musei, al Pier Head e al nuovo stadio dell'Everton, con la passeggiata sul Mersey."
      },
      {
        "nome": "Ropewalks e Baltic Triangle",
        "perChi": "chi vuole locali e vita della sera",
        "testo": "Bold Street, i ristoranti e i vecchi magazzini con i bar. Nel weekend è rumorosa."
      },
      {
        "nome": "Georgian Quarter",
        "perChi": "chi cerca calma",
        "testo": "Le case georgiane intorno a Hope Street, tra le due cattedrali, a dieci minuti a piedi dal centro."
      }
    ],
    gite: [
      {
        "nome": "Manchester",
        "distanza": "circa 1 ora in treno",
        "come": "Treni da Lime Street a Manchester Piccadilly e Oxford Road.",
        "testo": "Il Northern Quarter, Ancoats, i musei gratuiti e i due stadi di Manchester."
      },
      {
        "nome": "Crosby e Another Place",
        "distanza": "circa 20 minuti in treno",
        "come": "Treno Merseyrail fino a Blundellsands & Crosby o Hall Road.",
        "testo": "Le statue di Antony Gormley sulla spiaggia, il posto più fotografato fuori città."
      },
      {
        "nome": "Lake District",
        "distanza": "2-3 ore in treno",
        "come": "Treno con un cambio, a Preston o passando da Manchester, fino a Windermere.",
        "testo": "I laghi e le montagne del nord-ovest. Meglio con una o due notti."
      }
    ],
    sapori: [
      { nome: 'Scouse', testo: 'Lo stufato di carne e patate da cui prendono il nome gli abitanti di Liverpool, gli «scousers».' },
      { nome: 'Pie at the match', testo: 'Il tortino caldo da stadio, al banco fuori dai cancelli prima della partita.' },
      { nome: 'Bold Street', testo: 'La via delle cucine del mondo, dal Medio Oriente all\'Asia, a prezzi onesti.' },
    ],
    attenzioni: [
      'Il Merseyside Maritime Museum e l\'International Slavery Museum sono chiusi per lavori di ristrutturazione.',
      'Nei giorni di partita i bus per Anfield sono pieni e intorno allo stadio non si parcheggia.',
      'A Crosby attenzione alle maree e al fango oltre la spiaggia.',
    ],
    faq: [
      {
        "domanda": "Come si comprano i biglietti per Anfield?",
        "risposta": "Solo dal club, con la membership All Red, Full a 42,99 sterline o Light a 18,99 (2026-27): senza non si comprano biglietti. I posti restituiti si rivendono a prezzo nominale ai soci nella Ticket Exchange; l'hospitality si compra a parte."
      },
      {
        "domanda": "Quanto costa il tour di Anfield?",
        "risposta": "26 sterline per un adulto, con il museo; il museo da solo 14 sterline (2026). I tour partono tutti i giorni dalle 10 alle 15."
      },
      {
        "domanda": "Come si va dall'aeroporto di Liverpool al centro?",
        "risposta": "Con il bus 500, fino a ogni 15 minuti, che arriva a Liverpool ONE: costa al massimo 2 sterline. L'aeroporto non ha una stazione ferroviaria."
      },
      {
        "domanda": "Il Maritime Museum è aperto?",
        "risposta": "No, il Merseyside Maritime Museum e l'International Slavery Museum sono chiusi per lavori. La Tate Liverpool è aperta nell'edificio RIBA North, a Mann Island."
      },
      {
        "domanda": "Quanti giorni servono a Liverpool?",
        "risposta": "Un giorno per i docks, il Pier Head e i Beatles; due per aggiungere le cattedrali e uno stadio con calma."
      },
      {
        "domanda": "Si può visitare il nuovo stadio dell'Everton?",
        "risposta": "Sì, la Hill Dickinson Stadium ha i tour, prenotabili solo online. Sono tornati anche i tour di Goodison Park, dove ora gioca l'Everton femminile."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['manchester-liverpool-premier-league'],
    imageAlt: 'I magazzini di mattoni rossi del Royal Albert Dock di Liverpool, riflessi nel bacino',
    immagine: '/images/viaggi/manchester-liverpool-premier-league/giorno-03-albert-dock.jpg',
  },
  {
    slug: 'peak-district',
    paeseSlug: 'inghilterra',
    ordine: 7,
    nome: 'Peak District',
    tipologia: ['natura', 'trekking', 'parco nazionale', 'grotte'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono stato nei tanti viaggi al nord, quando mio fratello viveva da queste parti: è la possibile estensione per gli amanti della natura, insieme al Lake District.",
    introduzione:
      'Il primo parco nazionale del Regno Unito, tra Manchester e Sheffield: le colline di brughiera del Dark Peak, con Kinder Scout e Mam Tor, e le valli verdi e i villaggi di pietra del White Peak, con Bakewell e le grandi dimore come Chatsworth.',
    percheAndarci:
      'Per camminare sulle colline a meno di un\'ora di treno da Manchester, per le grotte di Castleton e per i villaggi dei pub di campagna.',
    cosaVedere: [
      'Mam Tor e il crinale della Great Ridge',
      'Castleton e le sue grotte',
      'Edale e Kinder Scout',
      'Chatsworth House',
      'Bakewell',
      'Dovedale',
    ],
    cosaFare: [
      'La camminata da Edale a Castleton passando da Mam Tor',
      'La barca nella miniera allagata della Speedwell Cavern',
      'Una Bakewell pudding a Bakewell',
    ],
    comeArrivare:
      'Da Manchester Piccadilly il treno Northern della Hope Valley ferma a Edale, Hope e Hathersage, uno all\'ora: Edale è a circa 45 minuti. Per Buxton c\'è un\'altra linea Northern, circa 55 minuti. Da Sheffield i bus 271 e 272 vanno a Hathersage, Hope e Castleton. In auto si arriva in un\'ora circa da Manchester.',
    comeSpostarsi:
      'Per la Hope Valley bastano il treno e le gambe. Per Chatsworth, Bakewell e Dovedale l\'auto è molto più comoda. Le strade intorno a Mam Tor e alla Winnats Pass dal 2026 hanno i divieti di sosta: si parcheggia solo nei parcheggi.',
    periodoMigliore: 'da maggio a settembre; d\'inverno nebbia, fango e giornate corte',
    costi:
      'L\'ingresso al parco è libero; si pagano i parcheggi, le grotte e le dimore. Budget indicativo al giorno a persona, con la doppia divisa in due: basso 80-100 €, medio 140-190 €, alto oltre 260 €.',
    erroriDaEvitare: [
      'Fermarsi in auto lungo le strade di Mam Tor e della Winnats Pass: dal 2026 sono vietate alla sosta',
      'Salire su Mam Tor con le scarpe da città: il sentiero è lastricato, ma si scivola',
      'Contare sul castello di Peveril: è chiuso fino a marzo 2027',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Mam Tor e la Great Ridge",
        "testo": "La «collina che trema», chiamata così per le frane della sua parete est. Dalla cima, a 517 metri, il crinale della Great Ridge corre fino a Lose Hill, con la valle di Edale da una parte e la Hope Valley dall'altra.",
        "come": "A piedi da Edale o da Castleton, oppure dal piccolo parcheggio del National Trust di Mam Nick, a pochi minuti dalla cima.",
        "quando": "Con il cielo limpido; all'alba e al tramonto c'è meno gente.",
        "tempo": "mezza giornata per il crinale",
        "costo": "gratuito; parcheggio di Mam Nick 4,50 £ fino a 4 ore (2026)",
        "lat": 53.3491,
        "lng": -1.8107,
        "url": "https://www.nationaltrust.org.uk/visit/peak-district-derbyshire/kinder-edale-and-the-high-peak"
      },
      {
        "nome": "Castleton",
        "testo": "Il villaggio delle grotte, ai piedi di Mam Tor, con le case di pietra, i pub e le botteghe che vendono il Blue John, una fluorite viola e gialla che si trova solo qui. Sopra il paese ci sono le rovine del castello di Peveril.",
        "come": "Treno fino a Hope e 30 minuti a piedi, o bus 272 da Sheffield e Hathersage.",
        "quando": "Il pomeriggio, alla fine della camminata.",
        "tempo": "mezza giornata con una grotta",
        "costo": "gratuito il villaggio",
        "lat": 53.344,
        "lng": -1.775,
        "consiglio": "Il castello di Peveril, di English Heritage, è chiuso fino a marzo 2027."
      },
      {
        "nome": "Peak Cavern",
        "testo": "La grotta con l'ingresso più grande del Regno Unito, dove fino al Novecento vivevano i cordai, con le loro case dentro la caverna. La visita guidata scende nelle sale più interne.",
        "come": "A piedi dal centro di Castleton. Visite guidate a orario.",
        "quando": "In un giorno di pioggia.",
        "tempo": "1 ora e un quarto",
        "costo": "22,25 £ online, 24 £ alla cassa (circa 26 €, 2026)",
        "orari": "In estate 10-17, visite ogni ora.",
        "lat": 53.3403,
        "lng": -1.7785,
        "url": "https://peakcavern.co.uk/"
      },
      {
        "nome": "Speedwell Cavern",
        "testo": "Una vecchia miniera di piombo allagata, che si visita in barca lungo un tunnel scavato a mano fino a una grande caverna naturale.",
        "come": "In fondo alla Winnats Pass, a 15 minuti a piedi da Castleton.",
        "quando": "Tutto l'anno, salvo chiusure per piena.",
        "tempo": "1 ora",
        "costo": "23,50 £ online, 25 £ alla cassa (circa 27 €, 2026)",
        "orari": "Chiusa il 25 e 26 dicembre e il 1° gennaio; può chiudere per allagamenti.",
        "lat": 53.3414,
        "lng": -1.7921,
        "url": "https://www.speedwellcavern.co.uk/"
      },
      {
        "nome": "Edale e Kinder Scout",
        "testo": "Edale è il villaggio in fondo alla valle dove comincia la Pennine Way, il sentiero che sale verso la Scozia. Sopra c'è Kinder Scout, l'altopiano di brughiera più alto del parco, famoso per la protesta del 1932 che aprì le colline agli escursionisti.",
        "come": "Treno fino a Edale. La salita a Kinder Scout per Grindsbrook Clough è impegnativa.",
        "quando": "D'estate, con la visibilità buona.",
        "tempo": "una giornata per Kinder Scout",
        "costo": "gratuito",
        "lat": 53.366,
        "lng": -1.816,
        "consiglio": "Sull'altopiano di Kinder Scout con la nebbia ci si perde: servono una mappa e la traccia sul telefono."
      },
      {
        "nome": "Chatsworth House",
        "testo": "La grande dimora dei duchi del Devonshire, con le sale piene di opere d'arte, il parco sul fiume Derwent e i giardini con la cascata a gradini. D'inverno si fanno le aperture di Natale.",
        "come": "In auto, a circa 20 minuti da Bakewell. Biglietti online.",
        "quando": "Da metà marzo all'inizio di gennaio.",
        "tempo": "mezza giornata",
        "costo": "da 10 £; Christmas at Chatsworth 40 £ con il parcheggio (2026)",
        "orari": "Stagione da metà marzo all'inizio di gennaio; aperture di Natale dal 7 novembre 2026 al 3 gennaio 2027.",
        "lat": 53.2278,
        "lng": -1.61,
        "url": "https://www.chatsworth.org/"
      },
      {
        "nome": "Haddon Hall",
        "testo": "Un castello-dimora medievale e Tudor rimasto quasi intatto, con la cappella affrescata, la lunga galleria e i giardini a terrazze sul fiume Wye.",
        "come": "In auto, a pochi minuti da Bakewell.",
        "quando": "In primavera e d'estate; d'inverno solo per il mercato di Natale.",
        "tempo": "2 ore",
        "costo": "29,50 £ (circa 34 €, 2026)",
        "orari": "Nella stagione 10:30-16, ultimo ingresso alle 15.",
        "lat": 53.1939,
        "lng": -1.6498,
        "url": "https://www.haddonhall.co.uk/visit/"
      },
      {
        "nome": "Bakewell",
        "testo": "La cittadina di pietra sul fiume Wye, con il ponte medievale e il mercato del lunedì. È la patria della Bakewell pudding, una torta di pasta sfoglia con marmellata e un ripieno di mandorle.",
        "come": "In auto o con il bus Transpeak tra Buxton e Matlock.",
        "quando": "Il lunedì, giorno di mercato.",
        "tempo": "2 ore",
        "costo": "gratuito",
        "lat": 53.214,
        "lng": -1.676
      },
      {
        "nome": "Dovedale",
        "testo": "La valle stretta del fiume Dove, nel sud del parco, con le pietre per attraversare il fiume e le guglie di calcare. È una delle passeggiate più facili e più famose del Peak District.",
        "come": "In auto fino al parcheggio del National Trust; le pietre sono a circa 800 metri.",
        "quando": "In settimana: nel weekend è affollata.",
        "tempo": "2-3 ore",
        "costo": "gratuito; parcheggio 5 £ fino a 4 ore, 7 £ oltre (2026)",
        "lat": 53.06,
        "lng": -1.777,
        "url": "https://www.nationaltrust.org.uk/dovedale"
      },
      {
        "nome": "Stanage Edge",
        "testo": "Una lunga parete di gritstone sopra Hathersage, la falesia più famosa per l'arrampicata in Inghilterra, con un sentiero in cima e la vista sulla Hope Valley.",
        "come": "Dal parcheggio di Hollin Bank, a pagamento, o a piedi da Hathersage.",
        "quando": "Al tramonto.",
        "tempo": "2 ore",
        "costo": "gratuito; parcheggio a pagamento",
        "lat": 53.3473,
        "lng": -1.6333
      },
      {
        "nome": "Ladybower Reservoir",
        "testo": "I bacini artificiali della valle del Derwent, con i boschi intorno e la diga dove si allenavano gli aerei della squadriglia dei «Dambusters» nella Seconda guerra mondiale.",
        "come": "In auto, con il parcheggio di Fairholmes, o in bici lungo i sentieri.",
        "quando": "In autunno, per i colori dei boschi.",
        "tempo": "2 ore",
        "costo": "gratuito; parcheggio a pagamento",
        "lat": 53.3833,
        "lng": -1.7167
      },
      {
        "nome": "Buxton e Poole's Cavern",
        "testo": "La cittadina termale georgiana, con il Crescent, l'Opera House e i giardini del Pavilion. Ai margini c'è Poole's Cavern, una grotta di calcare con le stalattiti, nel bosco di Grin Low.",
        "come": "Treno Northern da Manchester Piccadilly, circa 55 minuti.",
        "quando": "In un giorno di pioggia.",
        "tempo": "mezza giornata",
        "costo": "grotta a pagamento",
        "orari": "Poole's Cavern da aprile a settembre tutti i giorni 9:45-17; da ottobre a marzo fino alle 16 in settimana e alle 16:30 nel weekend; chiusa il 25 e 26 dicembre.",
        "lat": 53.2498,
        "lng": -1.9259
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno in treno",
        "tappe": [
          "Treno da Manchester Piccadilly a Edale",
          "Salita a Mam Tor e il crinale",
          "Discesa a Castleton e una grotta",
          "A piedi fino alla stazione di Hope e treno per Manchester"
        ]
      },
      {
        "titolo": "2 giorni in auto",
        "tappe": [
          "Primo giorno: Edale, Mam Tor, Castleton e le grotte, notte nella Hope Valley",
          "Secondo giorno: Chatsworth la mattina, Bakewell a pranzo, Dovedale il pomeriggio"
        ]
      }
    ],
    zone: [
      {
        "nome": "Castleton e Hope Valley",
        "perChi": "chi cammina",
        "testo": "Pub con camere e B&B ai piedi di Mam Tor, con il treno a Hope ed Edale."
      },
      {
        "nome": "Bakewell",
        "perChi": "chi gira in auto",
        "testo": "Al centro del White Peak, comoda per Chatsworth, Haddon Hall e Dovedale."
      },
      {
        "nome": "Buxton",
        "perChi": "chi vuole una cittadina con il treno",
        "testo": "Più servizi e ristoranti, con il treno diretto per Manchester."
      }
    ],
    gite: [
      {
        "nome": "Manchester",
        "distanza": "circa 45 minuti in treno",
        "come": "Treno Northern da Edale o Hope a Manchester Piccadilly.",
        "testo": "La città più vicina, per dormire e per la sera."
      },
      {
        "nome": "Sheffield",
        "distanza": "circa 30 minuti in treno",
        "come": "Stessa linea della Hope Valley, verso est.",
        "testo": "La città dell'acciaio, con i giardini botanici e la galleria del Millennium."
      }
    ],
    faq: [
      {
        "domanda": "Si può visitare il Peak District senza auto?",
        "risposta": "Sì, la Hope Valley: il treno da Manchester ferma a Edale e Hope, e da lì si cammina a Mam Tor e Castleton. Per Chatsworth, Bakewell e Dovedale l'auto è molto più comoda."
      },
      {
        "domanda": "Si paga per entrare nel parco nazionale?",
        "risposta": "No, l'ingresso è libero. Si pagano i parcheggi, le grotte e le dimore."
      },
      {
        "domanda": "Qual è la camminata più bella per un giorno?",
        "risposta": "Da Edale a Castleton passando da Mam Tor e dal crinale della Great Ridge, con il treno all'andata e al ritorno."
      },
      {
        "domanda": "Quale grotta scegliere a Castleton?",
        "risposta": "La Peak Cavern per l'ingresso enorme e la storia dei cordai, la Speedwell Cavern per la barca nella miniera allagata. Costano 22,25 e 23,50 sterline online (2026)."
      },
      {
        "domanda": "Il castello di Peveril è aperto?",
        "risposta": "No, è chiuso fino a marzo 2027. Si vede da fuori, sopra Castleton."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['manchester-liverpool-premier-league'],
    imageAlt: 'Il crinale di Mam Tor nel Peak District, con il sentiero lastricato e le valli verdi ai lati',
    immagine: '/images/viaggi/manchester-liverpool-premier-league/giorno-05-mam-tor.jpg',
  },
  {
    slug: 'lake-district',
    paeseSlug: 'inghilterra',
    ordine: 8,
    nome: 'Lake District',
    tipologia: ['natura', 'trekking', 'laghi', 'parco nazionale'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono stato nei tanti viaggi al nord, quando mio fratello viveva da queste parti: è la possibile estensione per gli amanti della natura, insieme al Peak District.",
    introduzione:
      'Il parco nazionale dei laghi e delle montagne nel nord-ovest dell\'Inghilterra, patrimonio UNESCO: Windermere, Derwentwater e Ullswater, le colline chiamate «fells», i villaggi di ardesia e la terra dei poeti romantici e di Beatrix Potter.',
    percheAndarci:
      'Per i paesaggi più belli d\'Inghilterra, da vedere dai battelli sui laghi e dalle cime. Si cammina tanto, anche con salite brevi, e la sera si torna in un pub di villaggio.',
    cosaVedere: [
      'Windermere, Bowness e Ambleside',
      'Grasmere e la Dove Cottage',
      'Keswick e Derwentwater',
      'Catbells',
      'Il Castlerigg Stone Circle',
      'Ullswater e Aira Force',
    ],
    cosaFare: [
      'Il battello su Windermere da Bowness ad Ambleside',
      'La salita su Catbells',
      'Il giro di Ullswater con i battelli',
    ],
    comeArrivare:
      'Da Manchester Piccadilly e dall\'aeroporto di Manchester ci sono treni Northern diretti fino a Windermere, in poco più di due ore. I treni TransPennine Express per la Scozia fermano a Oxenholme Lake District, da dove una linea corta porta a Windermere. Da Londra Euston si arriva a Oxenholme con Avanti West Coast. In auto da Manchester ci vogliono circa due ore.',
    comeSpostarsi:
      'Senza auto si usano i bus Stagecoach: il 599 tra Windermere, Bowness, Ambleside e Grasmere, il 555 da Kendal a Keswick passando da Ambleside e Grasmere, il 508 per Glenridding e Ullswater. Sui laghi ci sono i battelli. L\'auto serve per Hill Top, Tarn Hows e i passi di montagna, come Honister.',
    periodoMigliore: 'da maggio a settembre; in luglio e agosto c\'è molta gente e gli alloggi costano di più',
    costi:
      'L\'ingresso al parco è libero; si pagano battelli, case-museo e parcheggi. Budget indicativo al giorno a persona, con la doppia divisa in due: basso 90-120 €, medio 160-220 €, alto oltre 300 €.',
    erroriDaEvitare: [
      'Andare a Hill Top senza biglietto prenotato: si entra solo con l\'orario',
      'Salire sui fells senza giacca e senza controllare il meteo: le nuvole scendono in fretta',
      'Arrivare nei parcheggi più famosi a metà mattina nel weekend d\'estate: sono pieni',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Windermere e Bowness",
        "testo": "Il lago più lungo d'Inghilterra, con Bowness sulla riva, il porticciolo e i battelli. Windermere Lake Cruises collega Bowness, Ambleside, Brockhole e Lakeside tutto l'anno.",
        "come": "Dalla stazione di Windermere a Bowness a piedi in 20 minuti o con il bus 599. Biglietti dei battelli online o al molo.",
        "quando": "La mattina, prima delle gite organizzate.",
        "tempo": "mezza giornata",
        "costo": "battello Bowness-Ambleside da 19,20 £, Freedom of the Lake 24 ore da 26,50 £ (2026)",
        "orari": "Partenze tutti i giorni da Bowness, Ambleside, Brockhole e Lakeside.",
        "lat": 54.3583,
        "lng": -2.9361,
        "url": "https://www.windermere-lakecruises.co.uk/"
      },
      {
        "nome": "Ambleside",
        "testo": "Il villaggio di pietra scura in cima al lago di Windermere, con i negozi di montagna, i pub e la Bridge House, la casetta costruita sopra un ponte. È il punto di partenza di molte camminate.",
        "come": "Con il battello da Bowness o con i bus 599 e 555.",
        "quando": "La sera, per cena.",
        "tempo": "2 ore",
        "costo": "gratuito",
        "lat": 54.43,
        "lng": -2.963
      },
      {
        "nome": "Grasmere e la Dove Cottage",
        "testo": "Il villaggio del poeta William Wordsworth, sul lago omonimo. La Dove Cottage è la casa dove ha vissuto con la sorella Dorothy, con il museo accanto; Wordsworth è sepolto nel cimitero della chiesa di St Oswald.",
        "come": "Bus 599 o 555 da Ambleside. Biglietto valido 12 mesi.",
        "quando": "Dal martedì al sabato, gli unici giorni di apertura.",
        "tempo": "2 ore",
        "costo": "16 £ (circa 18 €, 2026)",
        "orari": "Dal martedì al sabato 10-16, ultimo ingresso alla casa 15:20; chiusa domenica e lunedì.",
        "lat": 54.4544,
        "lng": -3.0164,
        "url": "https://wordsworth.org.uk/visit/"
      },
      {
        "nome": "Hill Top",
        "testo": "La fattoria di Beatrix Potter a Near Sawrey, con gli interni e l'orto che ritornano nei suoi libri di Peter Rabbit. È del National Trust, come gran parte delle terre che lei lasciò al parco.",
        "come": "In auto, o con il traghetto per auto e pedoni da Bowness e poi a piedi. Solo con biglietto a orario prenotato, anche per i soci.",
        "quando": "In settimana, fuori dalle vacanze scolastiche.",
        "tempo": "1 ora",
        "costo": "17 £ (circa 20 €, 2026)",
        "orari": "10-17 nella stagione; chiusa in inverno.",
        "lat": 54.3517,
        "lng": -2.9706,
        "url": "https://www.nationaltrust.org.uk/visit/lake-district/hill-top"
      },
      {
        "nome": "Keswick e Derwentwater",
        "testo": "La cittadina di mercato del nord del parco, sul lago di Derwentwater, con le isole boscose e le montagne intorno. La Keswick Launch fa il giro del lago con sette fermate, ed è il modo più comodo per arrivare all'inizio dei sentieri.",
        "come": "Bus 555 da Ambleside e Grasmere. Battelli dal molo di Keswick, a dieci minuti a piedi dal centro.",
        "quando": "Il sabato, giorno di mercato.",
        "tempo": "mezza giornata",
        "costo": "battello a pagamento",
        "lat": 54.5943,
        "lng": -3.1449,
        "url": "https://www.keswick-launch.co.uk/"
      },
      {
        "nome": "Catbells",
        "testo": "La collina più amata del Lake District, sopra la riva ovest di Derwentwater: una salita breve ma ripida, con un tratto finale sulle rocce e una vista larghissima sul lago e sulle montagne.",
        "come": "Con la Keswick Launch fino al molo di Hawes End, poi a piedi.",
        "quando": "La mattina presto o in settimana: è molto frequentata.",
        "tempo": "2-3 ore andata e ritorno",
        "costo": "gratuito",
        "lat": 54.5686,
        "lng": -3.1708,
        "consiglio": "Con il vento forte il tratto di rocce in cima è scomodo: meglio rimandare."
      },
      {
        "nome": "Castlerigg Stone Circle",
        "testo": "Un cerchio di pietre preistorico di circa 5.000 anni fa, su un prato circondato dalle montagne. È uno dei più antichi della Gran Bretagna e uno dei più scenografici.",
        "come": "A piedi da Keswick in mezz'ora, o in auto con pochi posti lungo la strada.",
        "quando": "Al tramonto.",
        "tempo": "1 ora",
        "costo": "gratuito",
        "orari": "Aperto in qualsiasi momento ragionevole con la luce del giorno.",
        "lat": 54.6028,
        "lng": -3.0984,
        "url": "https://www.english-heritage.org.uk/visit/places/castlerigg-stone-circle/"
      },
      {
        "nome": "Tarn Hows",
        "testo": "Un laghetto tra i boschi sopra Coniston, con un sentiero ad anello facile di circa un'ora. È il posto per una passeggiata breve con un panorama da cartolina.",
        "come": "In auto, parcheggio del National Trust.",
        "quando": "In autunno, per i colori.",
        "tempo": "1-2 ore",
        "costo": "gratuito; parcheggio 7 £ fino a 2 ore, 10 £ tutto il giorno",
        "lat": 54.3917,
        "lng": -3.0319,
        "url": "https://www.nationaltrust.org.uk/tarn-hows-and-coniston"
      },
      {
        "nome": "Ullswater Steamers",
        "testo": "I battelli storici del lago di Ullswater, tra Glenridding e Pooley Bridge, con le montagne che scendono dritte nell'acqua. Si combina con la camminata lungo la riva.",
        "come": "Bus 508 da Windermere per Glenridding, o in auto.",
        "quando": "Con il cielo sereno; con la nebbia le corse possono cambiare.",
        "tempo": "mezza giornata",
        "costo": "giro del lago 26 £, Glenridding-Pooley Bridge solo andata 17,50 £ (2026)",
        "lat": 54.5437,
        "lng": -2.944,
        "url": "https://www.ullswater-steamers.co.uk/"
      },
      {
        "nome": "Aira Force",
        "testo": "La cascata più famosa del parco, alta una ventina di metri, in un bosco sopra Ullswater, con i ponticelli di pietra sopra e sotto il salto.",
        "come": "In auto, con il parcheggio del National Trust, o a piedi da Glenridding. Il molo dei battelli di Aira Force è chiuso.",
        "quando": "Dopo la pioggia, quando l'acqua è tanta.",
        "tempo": "1 ora",
        "costo": "gratuito; parcheggio 6 £ per 2 ore, 9,50 £ tutto il giorno",
        "lat": 54.5763,
        "lng": -2.9309,
        "url": "https://www.nationaltrust.org.uk/visit/lake-district/aira-force-and-ullswater"
      },
      {
        "nome": "Honister Pass e la miniera di ardesia",
        "testo": "Il passo di montagna più spettacolare del parco, tra Borrowdale e Buttermere, con la vecchia miniera di ardesia in cima. Si visitano le gallerie e c'è una via ferrata sulla montagna.",
        "come": "In auto, su una strada stretta e ripida.",
        "quando": "Con il tempo asciutto.",
        "tempo": "mezza giornata",
        "costo": "visita della miniera da 25 £, via ferrata da 55 £ (2026)",
        "lat": 54.5167,
        "lng": -3.2167,
        "url": "https://www.honister.com/"
      },
      {
        "nome": "Brantwood",
        "testo": "La casa del critico d'arte John Ruskin sulla riva del lago di Coniston, con i giardini in collina e la vista sull'Old Man of Coniston.",
        "come": "In auto, o con il battello dal molo di Coniston.",
        "quando": "Nel pomeriggio, dopo Tarn Hows.",
        "tempo": "2 ore",
        "costo": "16,50 £ casa e giardini (circa 19 €, 2026)",
        "orari": "10:30-16; da metà novembre dal mercoledì alla domenica 10:30-15; chiusa il 25 e 26 dicembre.",
        "lat": 54.3535,
        "lng": -3.0592,
        "url": "https://www.brantwood.org.uk/visit/"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno senza auto",
        "tappe": [
          "Treno fino a Windermere e a piedi a Bowness",
          "Battello fino ad Ambleside",
          "Bus fino a Grasmere e la Dove Cottage"
        ]
      },
      {
        "titolo": "2 giorni senza auto",
        "tappe": [
          "Primo giorno: Windermere, Ambleside e Grasmere",
          "Secondo giorno: Keswick, il battello su Derwentwater, Catbells e il Castlerigg Stone Circle"
        ]
      },
      {
        "titolo": "3 giorni in auto",
        "tappe": [
          "I due giorni come sopra",
          "Il terzo: Hill Top, Tarn Hows e Brantwood, oppure Ullswater e Aira Force"
        ]
      }
    ],
    zone: [
      {
        "nome": "Windermere e Bowness",
        "perChi": "chi arriva in treno",
        "testo": "La stazione, i battelli e tanti alberghi. È la zona più turistica."
      },
      {
        "nome": "Ambleside",
        "perChi": "chi vuole camminare",
        "testo": "In cima al lago, con i pub e i negozi di montagna, ben servita dai bus."
      },
      {
        "nome": "Grasmere",
        "perChi": "chi cerca un villaggio tranquillo",
        "testo": "Piccola e silenziosa, a metà strada tra Ambleside e Keswick."
      },
      {
        "nome": "Keswick",
        "perChi": "chi vuole il nord del parco",
        "testo": "Una vera cittadina, con il mercato, Derwentwater e Catbells vicini."
      }
    ],
    gite: [
      {
        "nome": "Manchester",
        "distanza": "poco più di 2 ore in treno",
        "come": "Treni Northern diretti da Windermere a Manchester Piccadilly e all'aeroporto.",
        "testo": "Per il volo, o per aggiungere la città e lo stadio."
      },
      {
        "nome": "Hadrian's Wall",
        "distanza": "circa 1 ora e mezza in auto da Keswick",
        "come": "In auto verso est, o in treno da Carlisle.",
        "testo": "Il vallo romano che attraversava l'Inghilterra del nord, con i forti e i tratti di muro sulle colline."
      }
    ],
    sapori: [
      { nome: 'Cumberland sausage', testo: 'La salsiccia lunga a spirale della Cumbria, con il purè e la salsa gravy.' },
      { nome: 'Grasmere gingerbread', testo: 'Il pan di zenzero di Grasmere, a metà tra un biscotto e un dolce, venduto in una bottega accanto alla chiesa.' },
      { nome: 'Kendal mint cake', testo: 'La tavoletta di zucchero e menta degli escursionisti, da tenere nello zaino.' },
    ],
    attenzioni: [
      'Sui fells il tempo cambia in fretta: giacca impermeabile, strati e cartina anche per le salite brevi.',
      'Le strade di montagna sono strette e ripide; si guida a sinistra, con le pecore sulla carreggiata.',
      'Nei weekend d\'estate i parcheggi più famosi si riempiono a metà mattina.',
    ],
    faq: [
      {
        "domanda": "Si può visitare il Lake District senza auto?",
        "risposta": "Sì, la parte centrale: treno fino a Windermere, poi battelli e bus 599 e 555 fino a Grasmere e Keswick. Per Hill Top, Tarn Hows e i passi di montagna l'auto è molto più comoda."
      },
      {
        "domanda": "Quanto ci vuole da Manchester al Lake District?",
        "risposta": "Poco più di due ore in treno, con i Northern diretti da Manchester Piccadilly e dall'aeroporto fino a Windermere. In auto circa due ore."
      },
      {
        "domanda": "Bisogna prenotare Hill Top?",
        "risposta": "Sì, si entra solo con il biglietto a orario prenotato, anche per i soci del National Trust. Costa 17 sterline (2026)."
      },
      {
        "domanda": "Qual è la camminata più facile con una bella vista?",
        "risposta": "Tarn Hows, un anello di circa un'ora intorno al laghetto. Catbells è più ripida ma breve, con la vista migliore su Derwentwater."
      },
      {
        "domanda": "Dove dormire nel Lake District?",
        "risposta": "Windermere o Bowness per il treno e i battelli, Ambleside e Grasmere per camminare, Keswick per il nord del parco. D'estate i B&B si riempiono presto."
      },
      {
        "domanda": "Quanti giorni servono?",
        "risposta": "Due giorni per Windermere, Grasmere e Keswick con Catbells; tre per aggiungere Ullswater o Hill Top e Tarn Hows."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['manchester-liverpool-premier-league'],
    imageAlt: 'Il lago di Windermere con le barche ormeggiate e le colline del Lake District',
    immagine: '/images/viaggi/manchester-liverpool-premier-league/giorno-06-windermere.jpg',
  },
  {
    slug: 'brighton',
    paeseSlug: 'inghilterra',
    ordine: 9,
    nome: 'Brighton',
    tipologia: ['mare', 'città', 'vita notturna'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Brighton è molto bella, ma durante il weekend diventa una sorta di stag party a cielo aperto, con molto booze e bar hopping, quindi la gente ci dà dentro. Però è comunque molto bella, e si fa in giornata o in un weekend da Londra.",
    introduzione:
      'La città di mare dei londinesi, sulla Manica, a un\'ora di treno da Londra: il Palace Pier con le giostre, il Royal Pavilion in stile indiano di Giorgio IV, i vicoli delle Lanes, i negozi di North Laine e una spiaggia di ciottoli lunga chilometri, fino a Hove.',
    percheAndarci:
      'Per una giornata al mare vicino a Londra, per il Royal Pavilion e per l\'aria libera e un po\' eccentrica della città. È anche la base per le scogliere delle Seven Sisters.',
    cosaVedere: [
      'Il Royal Pavilion',
      'Il Brighton Palace Pier',
      'Le Lanes e North Laine',
      'Il West Pier e il Brighton i360',
      'Kemp Town',
      'Hove e le cabine sul lungomare',
    ],
    cosaFare: [
      'Fish and chips sui ciottoli',
      'Salire sul Brighton i360',
      'Il trenino elettrico Volk\'s lungo la spiaggia, d\'estate',
      'Una passeggiata sul Devil\'s Dyke, sulle colline dei South Downs',
    ],
    comeArrivare:
      'Da Londra i treni Southern partono da Victoria e i Thameslink da London Bridge, Blackfriars e St Pancras: circa un\'ora di viaggio, senza prenotare il posto. Da Gatwick Thameslink e Southern arrivano a Brighton in circa mezz\'ora, senza passare da Londra. Con i biglietti Off-Peak si risparmia fino a un terzo.',
    comeSpostarsi:
      'A piedi: dalla stazione al mare sono 15 minuti in discesa, e il centro è tutto vicino. Per il Devil\'s Dyke e per le Seven Sisters ci sono i bus di Brighton & Hove.',
    periodoMigliore: 'da maggio a settembre; il venerdì e il sabato sera la città è piena di feste',
    costi:
      'Il lungomare e il Palace Pier sono gratuiti; costano il Royal Pavilion e il Brighton i360. Budget indicativo al giorno a persona, con la doppia divisa in due: basso 90-120 €, medio 170-230 €, alto oltre 320 €.',
    erroriDaEvitare: [
      'Cercare una serata tranquilla in centro il sabato: meglio Kemp Town o Hove',
      'Passare da Londra arrivando a Gatwick: Brighton è più vicina',
      'Pagare in contanti al Royal Pavilion: accetta solo carte',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Royal Pavilion",
        "testo": "Il palazzo di piacere del re Giorgio IV, con le cupole e i minareti in stile indiano all'esterno e gli interni in stile cinese, con draghi, lampadari enormi e la grande cucina. È il simbolo di Brighton.",
        "come": "A piedi dalla stazione in dieci minuti. Biglietto online con il 5% di sconto, solo carte; visita guidata ufficiale il sabato alle 14.",
        "quando": "La mattina, all'apertura.",
        "tempo": "1 ora e mezza",
        "costo": "21,50 £ (circa 25 €, 2026); due per uno con un biglietto del treno datato",
        "orari": "Da aprile a settembre 9:30-17:45, da ottobre a marzo 10-17:15; ultimo ingresso 45 minuti prima.",
        "lat": 50.8231,
        "lng": -0.1375,
        "url": "https://brightonmuseums.org.uk/visit/royal-pavilion-garden/plan-your-visit/"
      },
      {
        "nome": "Brighton Palace Pier",
        "testo": "Il molo vittoriano lungo più di cinquecento metri, con le giostre in fondo, le sale giochi e i chioschi di fish and chips e ciambelle.",
        "come": "Dal lungomare, davanti al centro. Le giostre si pagano a parte o con il braccialetto.",
        "quando": "Al tramonto.",
        "tempo": "1 ora",
        "costo": "gratuito; 1 £ nei momenti di punta da marzo a ottobre",
        "orari": "Orari variabili secondo la stagione, sul calendario del sito.",
        "lat": 50.815,
        "lng": -0.1369,
        "url": "https://www.brightonpier.co.uk/"
      },
      {
        "nome": "Le Lanes",
        "testo": "Il nucleo del vecchio villaggio di pescatori, con i vicoli stretti, le gioiellerie, i negozi di antiquariato e i pub. Ci si perde volentieri.",
        "come": "A piedi tra il Royal Pavilion e il mare.",
        "quando": "La mattina, prima della folla.",
        "tempo": "1 ora",
        "costo": "gratuito",
        "lat": 50.8206,
        "lng": -0.1403
      },
      {
        "nome": "North Laine",
        "testo": "Il quartiere bohémien tra la stazione e il centro, con le case basse e colorate, i negozi indipendenti e vintage, i caffè e i ristoranti vegetariani.",
        "come": "Si attraversa scendendo dalla stazione verso il mare.",
        "quando": "Il sabato, quando i negozi sono tutti aperti.",
        "tempo": "1-2 ore",
        "costo": "gratuito",
        "lat": 50.8264,
        "lng": -0.1392
      },
      {
        "nome": "Brighton i360",
        "testo": "La torre panoramica sul lungomare, con la cabina di vetro che sale lentamente a 138 metri. Nelle giornate limpide si vedono i South Downs e la costa fino alle Seven Sisters.",
        "come": "A piedi dal centro, accanto ai resti del West Pier. Biglietti a orario online.",
        "quando": "Nelle giornate limpide, o al tramonto.",
        "tempo": "45 minuti",
        "costo": "da circa 18,50 £ online (circa 21 €, 2026)",
        "orari": "A novembre 11-16, sabato e domenica 10:30-16; d'estate più a lungo.",
        "lat": 50.8214,
        "lng": -0.1507,
        "url": "https://www.brightoni360.co.uk/plan-your-visit"
      },
      {
        "nome": "West Pier",
        "testo": "Lo scheletro di ferro del vecchio molo, chiuso nel 1975 e distrutto da incendi e mareggiate, che emerge dal mare davanti alla spiaggia. Al tramonto, con gli stormi di storni d'inverno, è uno dei panorami più famosi della città.",
        "come": "Dal lungomare, vicino al Brighton i360.",
        "quando": "Al tramonto.",
        "tempo": "30 minuti",
        "costo": "gratuito",
        "lat": 50.8208,
        "lng": -0.1511
      },
      {
        "nome": "Brighton Museum & Art Gallery",
        "testo": "Il museo nei giardini del Royal Pavilion, con le arti decorative, la moda e le collezioni sulla storia della città.",
        "come": "Accanto al Royal Pavilion.",
        "quando": "In un giorno di pioggia.",
        "tempo": "1 ora",
        "costo": "10,50 £ (circa 12 €, 2026)",
        "orari": "Dal martedì alla domenica 10-17; chiuso il lunedì, tranne nei festivi.",
        "lat": 50.8234,
        "lng": -0.1379,
        "url": "https://brightonmuseums.org.uk/brighton-museum-art-gallery/plan-your-visit/"
      },
      {
        "nome": "Volk's Electric Railway",
        "testo": "La ferrovia elettrica più antica del mondo ancora in servizio, del 1883: un trenino di legno che corre lungo la spiaggia dall'Aquarium a Black Rock in una dozzina di minuti.",
        "come": "Dalla fermata vicino al Palace Pier. Solo carte.",
        "quando": "D'estate, da Pasqua a fine settembre.",
        "tempo": "30 minuti",
        "costo": "5,40 £ solo andata, 7 £ andata e ritorno (2026)",
        "orari": "Da Pasqua al 30 settembre tutti i giorni, ogni 15 minuti; chiusa d'inverno.",
        "lat": 50.8182,
        "lng": -0.1291,
        "url": "https://volksrailway.org.uk/"
      },
      {
        "nome": "Kemp Town",
        "testo": "Il quartiere a est del Palace Pier, con le grandi piazze georgiane affacciate sul mare, St James's Street e il cuore della scena LGBTQ+ di Brighton.",
        "come": "A piedi dal Palace Pier, verso est.",
        "quando": "La sera, per cena.",
        "tempo": "1-2 ore",
        "costo": "gratuito",
        "lat": 50.8189,
        "lng": -0.1225
      },
      {
        "nome": "Hove",
        "testo": "La città gemella a ovest, più residenziale, con il lungomare largo, i prati e le file di cabine colorate sulla spiaggia.",
        "come": "A piedi lungo il mare dal West Pier, o in bus.",
        "quando": "La domenica mattina.",
        "tempo": "1-2 ore",
        "costo": "gratuito",
        "lat": 50.8235,
        "lng": -0.1644
      },
      {
        "nome": "Preston Manor",
        "testo": "Una casa di campagna edoardiana nel nord della città, con gli interni dell'epoca, le cucine al piano di sotto e il giardino murato.",
        "come": "In bus verso Preston Park.",
        "quando": "Dal venerdì al lunedì, gli unici giorni di apertura.",
        "tempo": "1 ora",
        "costo": "14 £ (circa 16 €, 2026)",
        "orari": "Da metà marzo al 30 novembre, dal venerdì al lunedì 10-17; solo carte.",
        "lat": 50.8425,
        "lng": -0.1501,
        "url": "https://brightonmuseums.org.uk/preston-manor-gardens/plan-your-visit/"
      },
      {
        "nome": "Devil's Dyke",
        "testo": "La valle più profonda dei South Downs, a nord di Brighton, con i prati in cima alla collina e la vista sulla campagna del Sussex. È il posto per una camminata breve fuori città.",
        "come": "Bus 77 dal Palace Pier, con più corse d'estate, o in auto.",
        "quando": "In una giornata limpida.",
        "tempo": "mezza giornata",
        "costo": "gratuito",
        "lat": 50.885,
        "lng": -0.205
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "La mattina North Laine scendendo dalla stazione",
          "Il Royal Pavilion all'apertura",
          "Le Lanes e il pranzo",
          "Il Palace Pier, il West Pier e il Brighton i360 al tramonto"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Primo giorno come sopra",
          "Secondo giorno alle Seven Sisters: bus 12 o 12X per Exceat, scogliere fino a Birling Gap"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "I due giorni come sopra",
          "Il terzo: Hove la mattina, il Devil's Dyke il pomeriggio, Kemp Town la sera"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro e Lanes",
        "perChi": "chi vuole tutto a piedi",
        "testo": "Vicino al mare e al Royal Pavilion. Il venerdì e il sabato sera è la zona più rumorosa."
      },
      {
        "nome": "Kemp Town",
        "perChi": "chi cerca locali e un po' di calma",
        "testo": "A est del Pier, con le piazze georgiane e la vita LGBTQ+ di St James's Street."
      },
      {
        "nome": "Hove",
        "perChi": "chi vuole dormire tranquillo",
        "testo": "Residenziale, con il lungomare calmo, a 20-30 minuti a piedi dal centro."
      },
      {
        "nome": "North Laine e stazione",
        "perChi": "chi arriva tardi o riparte presto",
        "testo": "Tra i negozi indipendenti, a pochi minuti dai treni per Londra e Gatwick."
      }
    ],
    gite: [
      {
        "nome": "Seven Sisters",
        "distanza": "circa 1 ora in bus",
        "come": "Bus 12 o 12X fino a Seven Sisters Country Park, a Exceat.",
        "testo": "Le scogliere di gesso bianco sulla Manica, da percorrere a piedi fino a Birling Gap."
      },
      {
        "nome": "Lewes",
        "distanza": "circa 15 minuti in treno",
        "come": "Treni Southern da Brighton.",
        "testo": "Una cittadina storica con il castello normanno e le case a graticcio, ai piedi dei South Downs."
      },
      {
        "nome": "Londra",
        "distanza": "circa 1 ora in treno",
        "come": "Southern per Victoria, Thameslink per London Bridge e St Pancras.",
        "testo": "Per chi fa il percorso al contrario, con la base a Brighton."
      }
    ],
    sapori: [
      { nome: 'Fish and chips', testo: 'Pesce fritto in pastella con le patatine, da mangiare sulla spiaggia.' },
      { nome: 'Cucina vegetariana', testo: 'Brighton è una delle città più vegetariane del Regno Unito, con tanti locali in North Laine.' },
      { nome: 'Doughnuts del Pier', testo: 'Le ciambelline calde con lo zucchero vendute sul Palace Pier.' },
    ],
    attenzioni: [
      'Il venerdì e il sabato sera il centro è pieno di addii al celibato e al nubilato.',
      'La spiaggia è di ciottoli: per fare il bagno servono le scarpette.',
      'Il Booth Museum di storia naturale è chiuso per lavori dall\'aprile 2025.',
    ],
    faq: [
      {
        "domanda": "Si può fare Brighton in giornata da Londra?",
        "risposta": "Sì, il treno impiega circa un'ora da Victoria o da London Bridge. In un giorno si vedono il Royal Pavilion, le Lanes e il Pier."
      },
      {
        "domanda": "Com'è Brighton nel weekend?",
        "risposta": "Il venerdì e il sabato sera il centro si riempie di feste e di addii al celibato e al nubilato. Chi vuole calma dorme a Hove o a Kemp Town, o sceglie una domenica."
      },
      {
        "domanda": "Quanto costa il Royal Pavilion?",
        "risposta": "21,50 sterline per un adulto, con il 5% di sconto online (2026). Con un biglietto del treno datato c'è l'offerta due per uno."
      },
      {
        "domanda": "Il Brighton i360 è aperto?",
        "risposta": "Sì, la torre panoramica è aperta tutto l'anno, con orari ridotti d'inverno. Il volo dura circa 25 minuti e sale a 138 metri."
      },
      {
        "domanda": "Come si va da Brighton alle Seven Sisters?",
        "risposta": "Con il bus 12 o 12X fino a Seven Sisters Country Park, a Exceat, in circa un'ora. La domenica e nei festivi il 13X passa anche da Birling Gap."
      },
      {
        "domanda": "Come si arriva a Brighton da Gatwick?",
        "risposta": "In treno, con Thameslink o Southern, in circa mezz'ora e senza passare da Londra."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['brighton-seven-sisters'],
    imageAlt: 'La India Gate e le cupole del Royal Pavilion di Brighton',
    immagine: '/images/viaggi/brighton-seven-sisters/giorno-02-royal-pavilion.jpg',
  },
  {
    slug: 'seven-sisters',
    paeseSlug: 'inghilterra',
    ordine: 10,
    nome: 'Seven Sisters',
    tipologia: ['natura', 'scogliere', 'trekking', 'parco nazionale'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    miaEsperienza:
      "Le Seven Sisters sono natura: se becchi la giornata bella sono incredibili, mentre se piove o c'è vento potrebbe non essere così piacevole. Si fanno in giornata o in un weekend da Londra.",
    introduzione:
      'Le sette scogliere di gesso bianco tra Seaford ed Eastbourne, sulla Manica, dentro il parco nazionale dei South Downs. Si percorrono a piedi sul prato in cima alle pareti, su e giù tra le «sorelle», dalla foce del Cuckmere a Birling Gap e Beachy Head.',
    percheAndarci:
      'Per uno dei paesaggi di costa più famosi d\'Inghilterra, a meno di due ore da Londra, con una camminata che si adatta a tutte le gambe.',
    cosaVedere: [
      'Cuckmere Haven',
      'La vista da Seaford Head',
      'Le scogliere da Exceat a Birling Gap',
      'Il faro di Belle Tout',
      'Beachy Head',
    ],
    cosaFare: [
      'La camminata da Seven Sisters Country Park a Birling Gap',
      'Scendere alla spiaggia di Birling Gap',
      'Un pranzo al pub ad Alfriston o a East Dean',
    ],
    comeArrivare:
      'Da Brighton i bus 12 e 12X di Brighton & Hove fermano davanti al centro visitatori di Seven Sisters Country Park, a Exceat; il 12X passa fino a ogni 12 minuti. In treno da Londra si arriva a Seaford, da dove si cammina fino al parco in un\'ora circa, o a Eastbourne, dall\'altra parte. In auto ci sono i parcheggi a pagamento di Exceat e di Birling Gap.',
    comeSpostarsi:
      'A piedi lungo la costa. La domenica e nei festivi il bus 13X passa da Birling Gap e Beachy Head ogni 15 minuti; negli altri giorni il bus si prende a East Dean, a un paio di chilometri da Birling Gap.',
    periodoMigliore: 'da maggio a settembre, in una giornata senza pioggia e con poco vento',
    costi:
      'Il sentiero è gratuito; si pagano solo i parcheggi e il bus. Chi dorme a Brighton ha lo stesso budget della città.',
    erroriDaEvitare: [
      'Avvicinarsi al bordo delle scogliere: il gesso crolla senza preavviso',
      'Partire con pioggia o vento forte: il sentiero è esposto e scivoloso',
      'Non portare acqua e cibo: tra Exceat e Birling Gap non c\'è niente',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Seven Sisters Country Park",
        "testo": "Il parco alla foce del fiume Cuckmere, a Exceat, con il centro visitatori, il bar, i bagni e il noleggio di bici. È il punto di partenza più comodo per le scogliere.",
        "come": "Bus 12 o 12X da Brighton o da Eastbourne, con la fermata davanti al centro visitatori.",
        "quando": "La mattina presto, per avere il sentiero quasi libero.",
        "tempo": "mezz'ora per la sosta",
        "costo": "gratuito; parcheggio 3,50 £ fino a 2 ore, 5 £ fino a 4, 7 £ oltre (2026)",
        "orari": "Centro visitatori 10-16 in inverno; bagni 7-18; parcheggi chiusi la notte.",
        "lat": 50.7752,
        "lng": 0.1533,
        "url": "https://www.sevensisters.org.uk/"
      },
      {
        "nome": "Cuckmere Haven",
        "testo": "La foce del fiume Cuckmere, con i meandri nella valle verde e la spiaggia di ciottoli. Dalla spiaggia si vede la prima delle sette scogliere.",
        "come": "A piedi dal centro visitatori, su un sentiero piano di circa tre chilometri lungo il fiume.",
        "quando": "Con la bassa marea.",
        "tempo": "1 ora",
        "costo": "gratuito",
        "lat": 50.764,
        "lng": 0.147
      },
      {
        "nome": "Seaford Head e Hope Gap",
        "testo": "Il promontorio sulla riva ovest del Cuckmere, con le casette dei guardacoste davanti alle Seven Sisters: è la vista più famosa, quella delle cartoline. Poco più a ovest c'è la spiaggia rocciosa di Hope Gap.",
        "come": "A piedi da Seaford lungo la scogliera, o dalla riva ovest del fiume.",
        "quando": "Il pomeriggio, con il sole sulle scogliere.",
        "tempo": "2 ore",
        "costo": "gratuito",
        "lat": 50.7561,
        "lng": 0.139
      },
      {
        "nome": "Le scogliere da Exceat a Birling Gap",
        "testo": "La camminata classica, circa 6 chilometri sul prato in cima alle sette «sorelle», con le salite e le discese tra una cima e l'altra e il mare sotto.",
        "come": "A piedi dal centro visitatori, prima verso il mare e poi verso est.",
        "quando": "In una giornata limpida e con poco vento.",
        "tempo": "2-3 ore",
        "costo": "gratuito",
        "lat": 50.76,
        "lng": 0.16,
        "consiglio": "Si cammina sempre lontano dal bordo: le scogliere arretrano fino a un metro all'anno e possono crollare senza preavviso."
      },
      {
        "nome": "Birling Gap",
        "testo": "Una piccola baia del National Trust alla fine delle Seven Sisters, con le casette dei guardacoste sul bordo della scogliera, il bar, il negozio e una scala di 50 gradini che scende alla spiaggia.",
        "come": "A piedi dalle scogliere, in auto, o in bus: diretto la domenica e nei festivi con il 13X, negli altri giorni da East Dean.",
        "quando": "Il pomeriggio, alla fine della camminata.",
        "tempo": "1 ora",
        "costo": "gratuito; parcheggio 2 £ per 1 ora, 4 £ per 2, 8 £ oltre (2026)",
        "orari": "Bar, negozio e bagni 10-16; scogliere aperte dall'alba al tramonto.",
        "lat": 50.7433,
        "lng": 0.2029,
        "url": "https://www.nationaltrust.org.uk/visit/sussex/birling-gap-and-the-seven-sisters",
        "consiglio": "L'accesso alla spiaggia può chiudere con poco preavviso per le frane."
      },
      {
        "nome": "Belle Tout",
        "testo": "Il vecchio faro sulla scogliera tra Birling Gap e Beachy Head, spostato all'indietro nel 1999 perché il bordo si stava avvicinando. Oggi è un B&B privato e si vede da fuori.",
        "come": "A piedi da Birling Gap, su un anello breve.",
        "quando": "Al tramonto.",
        "tempo": "1 ora",
        "costo": "gratuito",
        "lat": 50.7384,
        "lng": 0.2146
      },
      {
        "nome": "Beachy Head",
        "testo": "La scogliera di gesso più alta della Gran Bretagna, sopra Eastbourne, con il faro a strisce bianche e rosse giù in mare, ai piedi della parete.",
        "come": "A piedi da Birling Gap o da Eastbourne lungo il South Downs Way, o con il bus 13X la domenica e nei festivi.",
        "quando": "Con il cielo sereno.",
        "tempo": "1-2 ore",
        "costo": "gratuito",
        "lat": 50.7375,
        "lng": 0.2475
      },
      {
        "nome": "Alfriston",
        "testo": "Un villaggio della valle del Cuckmere, con le case a graticcio, i pub antichi e la Clergy House, la prima proprietà comprata dal National Trust, nel 1896.",
        "come": "In auto, o d'estate nel weekend con il bus 47 da Seven Sisters Country Park.",
        "quando": "A pranzo.",
        "tempo": "2 ore",
        "costo": "gratuito il villaggio",
        "lat": 50.808,
        "lng": 0.155
      },
      {
        "nome": "Friston Forest",
        "testo": "Il bosco di faggi sopra Exceat, con i sentieri per camminare e andare in bici e il villaggio di Westdean nascosto tra gli alberi. È il riparo giusto nelle giornate di vento.",
        "come": "A piedi da Seven Sisters Country Park, attraversando la strada.",
        "quando": "Con il vento forte sulla costa.",
        "tempo": "1-2 ore",
        "costo": "gratuito",
        "lat": 50.7814,
        "lng": 0.1531
      }
    ],
    programmi: [
      {
        "titolo": "Mezza giornata",
        "tappe": [
          "Bus fino a Seven Sisters Country Park",
          "A piedi fino a Cuckmere Haven e ritorno"
        ]
      },
      {
        "titolo": "1 giorno",
        "tappe": [
          "Bus fino a Seven Sisters Country Park e sentiero lungo il fiume fino al mare",
          "Le scogliere fino a Birling Gap e la scala per la spiaggia",
          "Belle Tout, poi bus da Birling Gap o da East Dean"
        ]
      },
      {
        "titolo": "1 giorno, percorso intero",
        "tappe": [
          "Treno fino a Seaford e Seaford Head",
          "Cuckmere Haven, le Seven Sisters, Birling Gap",
          "Belle Tout, Beachy Head ed Eastbourne: circa 22 chilometri, solo per chi è allenato"
        ]
      }
    ],
    zone: [
      {
        "nome": "Brighton",
        "perChi": "chi vuole la città la sera",
        "testo": "Un'ora di bus dal parco, con tutti i servizi e i treni per Londra."
      },
      {
        "nome": "Seaford",
        "perChi": "chi vuole partire a piedi presto",
        "testo": "Una cittadina tranquilla con la stazione, all'inizio del percorso."
      },
      {
        "nome": "Eastbourne",
        "perChi": "chi finisce a Beachy Head",
        "testo": "La città di mare all'altro capo delle scogliere, con i treni per Londra Victoria."
      }
    ],
    gite: [
      {
        "nome": "Brighton",
        "distanza": "circa 1 ora in bus",
        "come": "Bus 12 o 12X da Seven Sisters Country Park.",
        "testo": "Il Royal Pavilion, le Lanes e il Palace Pier."
      },
      {
        "nome": "Lewes",
        "distanza": "circa 30 minuti in auto",
        "come": "In auto, o in treno passando da Seaford o da Brighton.",
        "testo": "La cittadina con il castello normanno e i birrifici, ai piedi dei South Downs."
      }
    ],
    faq: [
      {
        "domanda": "Si possono vedere le Seven Sisters in giornata da Londra?",
        "risposta": "Sì: treno fino a Seaford o a Brighton, poi a piedi o in bus fino a Seven Sisters Country Park, le scogliere fino a Birling Gap e il bus per Eastbourne, da dove partono i treni per Londra."
      },
      {
        "domanda": "Qual è la vista migliore delle Seven Sisters?",
        "risposta": "Da Seaford Head, sulla riva ovest del Cuckmere, con le casette dei guardacoste in primo piano. Da Birling Gap si vedono le scogliere dal basso, dalla spiaggia."
      },
      {
        "domanda": "Quanto è lunga la camminata?",
        "risposta": "Da Seven Sisters Country Park a Birling Gap sono circa 6 chilometri con molte salite. Il percorso intero da Seaford a Eastbourne è di circa 22 chilometri."
      },
      {
        "domanda": "È pericoloso?",
        "risposta": "Il sentiero è facile, ma le scogliere franano: si cammina lontani dal bordo e non ci si ferma sotto le pareti sulla spiaggia."
      },
      {
        "domanda": "Quanto costa il parcheggio?",
        "risposta": "A Seven Sisters Country Park da 3,50 sterline per due ore a 7 sterline oltre le quattro; a Birling Gap da 2 a 8 sterline, gratis per i soci del National Trust (2026)."
      },
      {
        "domanda": "Conviene andarci se piove?",
        "risposta": "Meglio di no: con pioggia e vento il sentiero è scivoloso ed esposto, e le scogliere perdono la luce. Conviene scegliere il giorno guardando il meteo."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['brighton-seven-sisters'],
    imageAlt: 'Le scogliere bianche delle Seven Sisters viste dalla spiaggia di ciottoli di Cuckmere Haven',
    immagine: '/images/viaggi/brighton-seven-sisters/giorno-03-seven-sisters.jpg',
  },
  {
    slug: 'kingston-richmond-park',
    paeseSlug: 'inghilterra',
    ordine: 11,
    nome: 'Kingston upon Thames e Richmond Park',
    tipologia: ['parchi', 'fiume', 'natura', 'cittadina'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    miaEsperienza:
      "Kingston upon Thames è dove ho studiato io, e ha un parco bellissimo. E poi c'è Richmond Park.",
    introduzione:
      'Il Tamigi a sud-ovest di Londra, a mezz\'ora di treno da Waterloo: Kingston upon Thames, l\'antica città di mercato dove venivano incoronati i re anglosassoni, e Richmond Park, il più grande dei parchi reali, con i cervi in libertà, i boschi e la vista protetta da Richmond Hill.',
    percheAndarci:
      'Per una giornata di verde e di fiume senza uscire da Londra: si cammina tra i cervi, si guarda St Paul\'s da lontano e si finisce in un pub sul Tamigi.',
    cosaVedere: [
      'Il lungofiume di Kingston e il Kingston Bridge',
      'La Coronation Stone',
      'Richmond Park e i cervi',
      'King Henry\'s Mound e la vista su St Paul\'s',
      'L\'Isabella Plantation',
      'La vista da Richmond Hill',
    ],
    cosaFare: [
      'Attraversare Richmond Park a piedi da Kingston a Richmond',
      'Un pomeriggio in bici sul Tamsin Trail',
      'La passeggiata lungo il Tamigi da Richmond a Kingston',
    ],
    comeArrivare:
      'Da Londra Waterloo i treni South Western Railway arrivano a Richmond in meno di 20 minuti e a Kingston in circa mezz\'ora. Richmond è anche il capolinea della District line e della London Overground. Richmond è in zona 4, Kingston in zona 6: si paga con la carta contactless o la Oyster, come nel resto di Londra.',
    comeSpostarsi:
      'Tra Kingston e Richmond passano i bus 65 e 371; il 371 ferma anche al Richmond Gate del parco. Dentro Richmond Park si va a piedi o in bici, con il noleggio Parkcycle al parcheggio di Roehampton Gate. Lungo il Tamigi il sentiero Thames Path collega le due cittadine in circa 9 chilometri.',
    periodoMigliore: 'da aprile a ottobre; a fine aprile e inizio maggio fioriscono le azalee dell\'Isabella Plantation, in autunno c\'è il periodo degli amori dei cervi',
    costi:
      'I parchi sono gratuiti; si pagano solo i trasporti, i caffè e le dimore come Hampton Court e Ham House. Chi dorme a Londra ha lo stesso budget della città.',
    erroriDaEvitare: [
      'Avvicinarsi ai cervi o dargli da mangiare: si sta ad almeno 50 metri',
      'Contare sui cancelli aperti di notte a novembre e a febbraio: con gli abbattimenti selettivi i cancelli pedonali chiudono dalle 20 alle 7:30',
      'Portare il cane libero tra maggio e luglio, quando nascono i cerbiatti: deve stare al guinzaglio',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Richmond Park",
        "testo": "Il più grande dei parchi reali di Londra, circa 1.000 ettari, riserva naturale nazionale. Ci vivono circa 630 cervi rossi e daini, liberi dal 1637, quando Carlo I lo recintò come riserva di caccia.",
        "come": "Dal Richmond Gate, in cima a Richmond Hill, o dal Kingston Gate. Si attraversa a piedi o in bici sulle strade principali e sul Tamsin Trail.",
        "quando": "La mattina presto, quando i cervi sono più facili da vedere.",
        "tempo": "mezza giornata",
        "costo": "gratuito",
        "orari": "Cancelli pedonali di solito aperti giorno e notte; durante gli abbattimenti selettivi, a novembre e a febbraio, aperti 7:30-20. Cancelli per le auto dalle 7:30 (le 7 con l'ora legale) al tramonto.",
        "lat": 51.4433,
        "lng": -0.275,
        "url": "https://www.royalparks.org.uk/visit/parks/richmond-park",
        "consiglio": "Dai cervi si sta ad almeno 50 metri, senza toccarli né nutrirli. Tra settembre e novembre i maschi sono in amore e possono caricare."
      },
      {
        "nome": "King Henry's Mound",
        "testo": "Un tumulo dell'età del bronzo nei giardini di Pembroke Lodge, il punto più alto del parco. Da qui una finestra tra gli alberi inquadra la cupola di St Paul's, a più di quindici chilometri: è una vista protetta, e nessun edificio può coprirla.",
        "come": "A piedi dal Richmond Gate, nei giardini di Pembroke Lodge. C'è un cannocchiale fisso.",
        "quando": "Nelle giornate limpide.",
        "tempo": "15 minuti",
        "costo": "gratuito",
        "lat": 51.4449,
        "lng": -0.2948,
        "url": "https://www.royalparks.org.uk/visit/parks/richmond-park/king-henrys-mound"
      },
      {
        "nome": "Pembroke Lodge",
        "testo": "Una villa georgiana sul crinale del parco, vicino al Richmond Gate, con il caffè, le sale da tè e i giardini affacciati sulla valle del Tamigi.",
        "come": "A piedi dal Richmond Gate in pochi minuti.",
        "quando": "Per una pausa a metà giro.",
        "tempo": "1 ora",
        "costo": "gratuito l'ingresso ai giardini",
        "orari": "Sale da tè dalle 9 a poco prima del tramonto.",
        "lat": 51.4425,
        "lng": -0.2944
      },
      {
        "nome": "Isabella Plantation",
        "testo": "Un giardino nel bosco di circa 16 ettari, con i ruscelli, gli stagni e la collezione nazionale delle azalee Kurume. Aperto al pubblico dal 1953, è il posto più colorato del parco in primavera.",
        "come": "A piedi dal Kingston Gate o da Pembroke Lodge. I cani entrano solo al guinzaglio.",
        "quando": "Tra fine aprile e inizio maggio, per le azalee; in autunno per i colori.",
        "tempo": "1 ora",
        "costo": "gratuito",
        "orari": "Aperto tutto l'anno.",
        "lat": 51.4332,
        "lng": -0.2774,
        "url": "https://www.royalparks.org.uk/visit/parks/richmond-park/isabella-plantation"
      },
      {
        "nome": "Pen Ponds",
        "testo": "I due laghetti al centro del parco, scavati nel Settecento, con gli uccelli acquatici e un chiosco vicino. Intorno si vedono spesso i cervi.",
        "come": "A piedi dal centro del parco, sui sentieri tra l'erba alta.",
        "quando": "Il pomeriggio.",
        "tempo": "30 minuti",
        "costo": "gratuito",
        "lat": 51.4396,
        "lng": -0.2686,
        "consiglio": "Intorno ai laghetti i cani devono stare al guinzaglio."
      },
      {
        "nome": "Richmond Hill e Terrace Gardens",
        "testo": "La collina sopra Richmond, con la vista sulla curva del Tamigi tra i prati e i boschi. È protetta da una legge del Parlamento del 1902, e viene spesso indicata come l'unica vista protetta in questo modo. I Terrace Gardens scendono dalla collina fino al fiume.",
        "come": "A piedi dal Richmond Gate del parco, o in salita dal centro di Richmond.",
        "quando": "Al tramonto.",
        "tempo": "45 minuti",
        "costo": "gratuito",
        "lat": 51.4541,
        "lng": -0.301,
        "url": "https://www.richmond.gov.uk/preserving_the_view_from_richmond_hill"
      },
      {
        "nome": "Richmond Bridge e il lungofiume",
        "testo": "Il ponte di pietra a cinque archi sul Tamigi, con i prati e i pub della riva di Richmond. D'estate ci sono le barche a noleggio e la gente seduta sull'erba.",
        "come": "A piedi dalla stazione di Richmond in dieci minuti.",
        "quando": "La sera, per un drink sul fiume.",
        "tempo": "1 ora",
        "costo": "gratuito",
        "lat": 51.4573,
        "lng": -0.3073
      },
      {
        "nome": "Ham House",
        "testo": "Una dimora del Seicento sul Tamigi, tra Richmond e Kingston, del National Trust, con gli interni dell'epoca e i giardini formali.",
        "come": "A piedi lungo il Thames Path da Richmond, o con i bus 65 e 371 fino a Petersham.",
        "quando": "Nel fine settimana, quando si gira senza visita guidata.",
        "tempo": "2 ore",
        "costo": "a pagamento",
        "orari": "Casa 11:30-15:30, giardino 10-17; a novembre nei giorni feriali solo con visita guidata.",
        "lat": 51.4442,
        "lng": -0.3142,
        "url": "https://www.nationaltrust.org.uk/visit/london/ham-house-and-garden"
      },
      {
        "nome": "Il lungofiume di Kingston e il Kingston Bridge",
        "testo": "La riva del Tamigi intorno al ponte di Kingston, con i pub, le barche e la passeggiata verso i Canbury Gardens a nord. È il cuore della cittadina, a pochi minuti dalla stazione.",
        "come": "A piedi dalla stazione di Kingston.",
        "quando": "Il pomeriggio e la sera.",
        "tempo": "1 ora",
        "costo": "gratuito",
        "lat": 51.4111,
        "lng": -0.3089
      },
      {
        "nome": "Coronation Stone",
        "testo": "Una pietra di sarsen davanti alla Guildhall di Kingston: secondo la tradizione qui furono incoronati sette re anglosassoni, nel X secolo, tra cui Athelstan. Da qui viene il nome di Kingston, «città del re».",
        "come": "A piedi dal centro, accanto alla Guildhall.",
        "quando": "Passando per il centro.",
        "tempo": "15 minuti",
        "costo": "gratuito",
        "lat": 51.4084,
        "lng": -0.3068
      },
      {
        "nome": "Out of Order",
        "testo": "La scultura di David Mach del 1989: dodici cabine telefoniche rosse cadute una sull'altra come un domino, in Old London Road. È diventata uno dei simboli di Kingston.",
        "come": "A piedi dal centro, verso Norbiton.",
        "quando": "Passando per il centro.",
        "tempo": "10 minuti",
        "costo": "gratuito",
        "lat": 51.4108,
        "lng": -0.3005
      },
      {
        "nome": "Bushy Park e Hampton Court Palace",
        "testo": "Dall'altra parte del ponte di Kingston c'è Bushy Park, il secondo parco reale per grandezza, con circa 320 cervi e la Diana Fountain al centro di uno stagno rotondo. In fondo c'è Hampton Court Palace, il palazzo di Enrico VIII, con le cucine Tudor e il labirinto.",
        "come": "A piedi attraversando il Kingston Bridge e Bushy Park, o con i bus 111 e 216 da Kingston fino a Hampton Court.",
        "quando": "Una giornata intera, se si aggiunge il palazzo.",
        "tempo": "mezza giornata",
        "costo": "Bushy Park gratuito; Hampton Court a pagamento",
        "lat": 51.4128,
        "lng": -0.3381,
        "url": "https://www.royalparks.org.uk/visit/parks/bushy-park"
      }
    ],
    programmi: [
      {
        "titolo": "Mezza giornata",
        "tappe": [
          "Treno da Waterloo a Richmond",
          "Salita a Richmond Hill e ingresso dal Richmond Gate",
          "Pembroke Lodge e King Henry's Mound, poi ritorno a Richmond per il fiume"
        ]
      },
      {
        "titolo": "1 giorno",
        "tappe": [
          "Treno da Waterloo a Kingston: il fiume, la Coronation Stone e Out of Order",
          "Richmond Park dal Kingston Gate, l'Isabella Plantation, Pen Ponds e Pembroke Lodge",
          "Uscita dal Richmond Gate, Richmond Hill, i Terrace Gardens e il Richmond Bridge",
          "Treno da Richmond a Waterloo"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Primo giorno come sopra",
          "Secondo giorno: Hampton Court Palace e Bushy Park, oppure Ham House e i giardini di Kew"
        ]
      }
    ],
    zone: [
      {
        "nome": "Richmond",
        "perChi": "chi vuole il fiume e il parco sotto casa",
        "testo": "Elegante, con i pub sul Tamigi e i treni per Waterloo e la District line."
      },
      {
        "nome": "Kingston upon Thames",
        "perChi": "chi vuole una cittadina viva",
        "testo": "Negozi, ristoranti e il lungofiume, con Hampton Court e Bushy Park vicini."
      },
      {
        "nome": "Londra centro",
        "perChi": "chi fa la gita in giornata",
        "testo": "Da Waterloo i treni per Richmond e Kingston partono spesso, e la sera si torna in città."
      }
    ],
    gite: [
      {
        "nome": "Hampton Court Palace",
        "distanza": "pochi minuti in bus da Kingston",
        "come": "Bus 111 o 216 da Kingston, o a piedi attraverso Bushy Park.",
        "testo": "Il palazzo di Enrico VIII sul Tamigi, con le cucine Tudor, i giardini e il labirinto di siepi."
      },
      {
        "nome": "Kew Gardens",
        "distanza": "una fermata dopo Richmond",
        "come": "District line o London Overground fino a Kew Gardens.",
        "testo": "Il giardino botanico patrimonio UNESCO, con le grandi serre vittoriane."
      },
      {
        "nome": "Brighton",
        "distanza": "circa 1 ora in treno da Londra",
        "come": "Treni Southern da Victoria o Thameslink da London Bridge.",
        "testo": "La città di mare, con il Royal Pavilion e il Palace Pier, e vicino le scogliere delle Seven Sisters."
      }
    ],
    faq: [
      {
        "domanda": "Come si arriva a Richmond Park da Londra?",
        "risposta": "In treno da Waterloo, o con la District line e la London Overground, fino a Richmond; poi a piedi o con il bus 371 fino al Richmond Gate. Da Kingston si entra dal Kingston Gate."
      },
      {
        "domanda": "Si paga per entrare a Richmond Park?",
        "risposta": "No, è gratuito. Si pagano solo i caffè e il noleggio delle bici."
      },
      {
        "domanda": "Dove si vedono i cervi?",
        "risposta": "In tutto il parco, soprattutto nei prati intorno a Pen Ponds e verso il centro, la mattina presto. Si sta ad almeno 50 metri e non si danno da mangiare."
      },
      {
        "domanda": "Cos'è la vista da King Henry's Mound?",
        "risposta": "Una finestra tra gli alberi, nei giardini di Pembroke Lodge, che inquadra la cupola di St Paul's da più di quindici chilometri. È protetta: nessun edificio può coprirla."
      },
      {
        "domanda": "Richmond Park è aperto la sera?",
        "risposta": "I cancelli pedonali di solito restano aperti giorno e notte, ma a novembre e a febbraio, con gli abbattimenti selettivi dei cervi, chiudono dalle 20 alle 7:30. Le auto entrano dalle 7:30 al tramonto."
      },
      {
        "domanda": "Quanto ci vuole da Waterloo a Kingston?",
        "risposta": "Circa mezz'ora in treno South Western Railway. Per Richmond meno di 20 minuti."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['brighton-seven-sisters'],
    imageAlt: 'Un cervo rosso tra l\'erba alta di Richmond Park, a sud-ovest di Londra',
    immagine: '/images/viaggi/brighton-seven-sisters/giorno-01-richmond-park.jpg',
  },
]
