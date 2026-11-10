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
]
