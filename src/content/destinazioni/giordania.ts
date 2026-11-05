import type { Destinazione } from '@/lib/types'

// Contenuto ricostruito dal viaggio "Giordania" (src/content/viaggi/03-giordania-360.md),
// arricchito con il feedback diretto dell'autore su Jerash, Monte Nebo, Mar Morto,
// Petra/Wadi Rum e il diving ad Aqaba.

export const destinazioniGiordania: Destinazione[] = [
  {
    slug: 'amman',
    paeseSlug: 'giordania',
    ordine: 1,
    nome: 'Amman',
    tipologia: ['città', 'storia'],
    giorniConsigliati: '1-2 giorni, come arrivo/rientro',
    visitataPersonalmente: true,
    introduzione: 'La capitale, punto di arrivo e di rientro del viaggio, con la Cittadella, il Teatro Romano e la vita serale di Rainbow Street.',
    percheAndarci: 'È l\'ingresso naturale al paese e, al ritorno dal deserto e dal Mar Rosso, un\'ultima giornata di cultura e di città prima del volo.',
    cosaVedere: ['La Cittadella di Amman', 'Il Teatro Romano', 'Rainbow Street'],
    cosaFare: [
      'Cena di benvenuto da Zajal (Prince Mohammed Street, circa 15 JOD)',
      'Visita alla Cittadella e al Teatro Romano',
      'Pranzo al Bazaar',
      'Cooking class e corso di calligrafia araba',
      'Serata da Talet Al Jabal o C-Ling su Rainbow Street',
    ],
    doveDormire:
      'Ho dormito in un hotel qualsiasi, e il nome non me lo sono segnato. Conviene stare in centro, per muoversi a piedi tra Cittadella, Teatro Romano e Rainbow Street.\n\nEconomici: Farah Hotel & Hostel, Cliff Hostel, entrambi a due passi dal Teatro Romano · fascia media: Toledo Hotel (vicino a Rainbow Street), Kaya Hotel Amman (quartiere Abdali, spa interna) · più lussuosi: Fairmont Amman, W Amman.',
    doveMangiare: 'Zajal per la cena di benvenuto; pranzo al Bazaar al rientro.',
    usciteSerali: 'Talet Al Jabal o C-Ling, su Rainbow Street.',
    comeArrivare: 'Volo internazionale su Amman.',
    comeSpostarsi: 'Transfer organizzati, a piedi nel centro.',
    periodoMigliore: 'dicembre-gennaio',
    costi: 'Cena da Zajal circa 15 JOD; buggy nel deserto vicino Amman 40 JOD (opzione alternativa del Giorno 7).',
    erroriDaEvitare: [],
    miaEsperienza:
      'La Cittadella, con la vista su tutta la città vecchia, è stata una tappa carina per chiudere il viaggio prima del volo di rientro, anche se non è quello che ricordo di più della Giordania.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Cittadella (Jabal al-Qala'a)",
        "testo": "Il colle che domina la città, con tracce di insediamenti dal neolitico. In cima restano le colonne del grande tempio romano detto «di Ercole» (II secolo), il palazzo omayyade costruito intorno al 735 e il museo archeologico. Dal bordo si vede tutta Amman, con il teatro romano ai piedi.",
        "come": "Dal centro si sale in taxi o a piedi, con una salita ripida. Si gira da soli, i pannelli sono in inglese.",
        "quando": "Aperta 8-17 (2026). Il tardo pomeriggio ha la luce migliore sul tempio; a mezzogiorno d'estate non c'è ombra.",
        "tempo": "1-1,5 ore",
        "costo": "3 JOD per gli stranieri, oppure incluso nel Jordan Pass (2026)",
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx",
        "consiglio": "Salire in taxi e scendere a piedi verso il teatro romano: è in discesa e si arriva in centro."
      },
      {
        "nome": "Teatro Romano",
        "testo": "Teatro del II secolo, dell'epoca di Antonino Pio, scavato nel pendio, con circa 6.000 posti. Ai lati dell'ingresso ci sono due piccoli musei, quello del folklore e quello delle tradizioni popolari. Si sale sulle gradinate e si guarda la piazza sotto.",
        "come": "Sta nel cuore del centro, a piedi dai souq e da Rainbow Street.",
        "quando": "Aperto 8-17 (2026). Mattina o tardo pomeriggio, quando le gradinate sono in ombra.",
        "tempo": "45 minuti",
        "costo": "Incluso nel Jordan Pass",
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      },
      {
        "nome": "Downtown e i souq",
        "testo": "Il centro vecchio attorno alla moschea al-Husseini: negozi di spezie, caffè, dolci, abiti, oro. È la parte più viva e più autentica della capitale, molto più dei quartieri nuovi.",
        "come": "A piedi dal teatro romano, in pochi minuti.",
        "quando": "Di giorno e fino a sera. Il venerdì mattina molti negozi aprono tardi.",
        "tempo": "2 ore",
        "consiglio": "Fermarsi per un kunafa caldo e per falafel e hummus in uno dei locali storici del centro."
      },
      {
        "nome": "Rainbow Street",
        "testo": "Strada pedonale nel quartiere Jabal Amman, con caffè, ristoranti con terrazza, librerie e negozi di artigianato. Si viene la sera, quando si riempie di giovani.",
        "come": "Taxi dal centro o a piedi dal teatro romano, in salita.",
        "quando": "Dopo il tramonto, soprattutto il giovedì e il venerdì sera.",
        "tempo": "2-3 ore",
        "consiglio": "Scegliere un locale con terrazza sul pendio: la vista sulla città illuminata è la parte migliore."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Cittadella e museo archeologico",
          "Discesa a piedi al Teatro Romano",
          "Pranzo e passeggiata a Downtown e nei souq",
          "Tramonto e cena a Rainbow Street"
        ]
      }
    ],
    zone: [
      {
        "nome": "Downtown / Al-Balad",
        "perChi": "chi vuole stare tra souq e teatro",
        "testo": "Si va a piedi a quasi tutto e si mangia molto bene a poco. Di sera è rumoroso e meno curato, e gli hotel sono semplici."
      },
      {
        "nome": "Jabal Amman / Rainbow Street",
        "perChi": "chi vuole locali e quartiere vivibile",
        "testo": "Più tranquillo, ristoranti e caffè a due passi. Le strade sono in salita e gli hotel costano di più."
      },
      {
        "nome": "Abdali",
        "perChi": "chi viaggia per lavoro o vuole hotel moderni",
        "testo": "Zona nuova di grattacieli e catene internazionali. Comodo e curato, ma privo di carattere."
      }
    ],
    sapori: [
      {
        "nome": "Mansaf",
        "testo": "Il piatto nazionale: agnello cotto nello jameed, uno yogurt secco e salato, servito su riso con pinoli. Si mangia nei ristoranti tradizionali e nelle case."
      },
      {
        "nome": "Falafel e hummus",
        "testo": "Colazione e pranzo veloce nei locali storici di Downtown. Si mangiano seduti, con pane caldo, cipolla e menta."
      },
      {
        "nome": "Kunafa",
        "testo": "Dolce di formaggio fuso con pasta fine e sciroppo, caldo, tagliato al momento nei negozi del centro."
      },
      {
        "nome": "Maqluba",
        "testo": "Riso, pollo o agnello e verdure cotti in pentola e rovesciati al momento di servire."
      }
    ],
    attenzioni: [
      "I taxi gialli hanno il tassametro: farlo accendere o concordare il prezzo prima di salire. Uber e Careem funzionano e tolgono il problema.",
      "Rainbow Street e il centro sono sicuri, ma a mezzogiorno d'estate il sole è forte e sulla Cittadella non c'è ombra.",
      "In Giordania il venerdì è il giorno di riposo: molti negozi aprono tardi e i musei possono avere orari ridotti.",
      "Il Jordan Pass (70, 75 o 80 JOD con 1, 2 o 3 giorni consecutivi a Petra, 2026) va comprato online prima di arrivare: copre il visto turistico se si restano almeno due notti e comprende l'ingresso a oltre 40 siti.",
      "Tensioni nella regione: il governo britannico (ottobre 2026) segnala il rischio di escalation improvvise, possibili cancellazioni di voli e chiusure dello spazio aereo, e sconsiglia qualsiasi viaggio entro 3 km dal confine siriano. Controllare viaggiaresicuri.it prima di partire."
    ],
    // GUIDA-END
    esperienzeSlugs: ['cittadella-amman'],
    tripSlugs: ['giordania-itinerario'],
    imageAlt: "Un gatto bianco e arancio avanza verso l'obiettivo sulle colline di Amman, con i palazzi della città sullo sfondo",
    immagine: '/images/giordania/amman-gatto-skyline-riccardo.jpg',
  },
  {
    slug: 'jerash',
    paeseSlug: 'giordania',
    ordine: 2,
    nome: 'Jerash',
    tipologia: ['storia', 'archeologia'],
    giorniConsigliati: 'mezza giornata',
    visitataPersonalmente: true,
    introduzione: 'Una delle città romane meglio conservate al mondo fuori dall\'Italia, con il suo foro ovale, il cardo colonnato e i due teatri.',
    percheAndarci: 'Sta sulla strada tra Amman e il Mar Morto e vale la sosta di per sé: è molto più bella di quanto ci si aspetti da una tappa «di passaggio».',
    cosaVedere: ['Il Foro Ovale', 'Il Cardo colonnato', 'I due teatri romani'],
    cosaFare: ['Visita guidata al sito archeologico'],
    doveDormire: 'Non ho pernottato qui: tappa di passaggio tra Amman e il Mar Morto.',
    doveMangiare: 'Non ho indirizzi da segnalare: ci siamo fermati soprattutto per la visita.',
    comeArrivare: 'Circa 1h di transfer da Amman, con sosta per acquistare alcolici lungo il tragitto.',
    comeSpostarsi: 'A piedi all\'interno del sito archeologico.',
    periodoMigliore: 'mattina, prima del caldo e dei gruppi organizzati',
    costi: 'Ingresso incluso nel Jordan Pass.',
    erroriDaEvitare: [],
    miaEsperienza:
      'Jerash è stata una bella sorpresa: una delle città romane meglio conservate che abbia mai visto, con il cardo colonnato che si perde a vista d\'occhio. Molto più di una tappa di passaggio.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Arco di Adriano e Ippodromo",
        "testo": "L'ingresso monumentale a sud, costruito per la visita dell'imperatore Adriano nel 129-130. Poco oltre c'è l'ippodromo, che poteva ospitare circa 15.000 spettatori per le corse dei carri.",
        "come": "Il parcheggio è accanto all'arco; si entra nel sito dalla biglietteria vicino.",
        "quando": "Aperto 8-17 (2026). Meglio la mattina presto, prima dei gruppi.",
        "tempo": "30 minuti",
        "costo": "10 JOD per gli stranieri, oppure incluso nel Jordan Pass (2026)",
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      },
      {
        "nome": "Foro Ovale e Cardo Massimo",
        "testo": "La piazza ovale circondata da colonne ioniche e, da lì, la lunga via colonnata che attraversa la città antica.",
        "come": "Si percorre a piedi da sud verso nord.",
        "quando": "Mattina presto e fine pomeriggio per la luce sulle colonne.",
        "tempo": "1 ora",
        "consiglio": "Guardare il selciato del cardo: le pietre sono ancora quelle originali e si vedono i solchi lasciati dai carri."
      },
      {
        "nome": "Teatro Sud e Tempio di Artemide",
        "testo": "Il teatro grande, con oltre 3.000 posti, dove la voce si sente da ogni gradinata parlando dal centro dell'orchestra, e spesso suonano cornamuse e tamburi; poi il santuario di Artemide sul piano più alto, con le colonne che si vedono da lontano.",
        "come": "Dal foro si sale al teatro, poi al tempio sulla collina.",
        "quando": "Fine mattina, quando la luce è alta e il teatro risuona.",
        "tempo": "1 ora"
      }
    ],
    programmi: [
      {
        "titolo": "Mezza giornata",
        "tappe": [
          "Arco di Adriano e Ippodromo",
          "Foro Ovale",
          "Cardo Massimo",
          "Teatro Sud",
          "Tempio di Artemide"
        ]
      }
    ],
    zone: [
      {
        "nome": "Amman",
        "perChi": "chi vuole visitarla in giornata",
        "testo": "Jerash sta a circa 50 km da Amman, quindi si fa con autista o in tour. Dormire in città è più comodo."
      },
      {
        "nome": "Jerash città",
        "perChi": "chi vuole vederla all'alba",
        "testo": "Pochi alberghi semplici vicino al sito, utili per entrare all'apertura prima dei gruppi."
      }
    ],
    sapori: [
      {
        "nome": "Falafel e hummus",
        "testo": "Nei locali vicino al sito si trovano panini caldi e piatti di ceci per un pranzo veloce."
      },
      {
        "nome": "Mansaf",
        "testo": "Il piatto di agnello con riso e yogurt salato; nei ristoranti della città moderna lo servono tutto l'anno."
      },
      {
        "nome": "Tè alla salvia",
        "testo": "In molti chioschi lo servono con zucchero e foglie fresche."
      },
      {
        "nome": "Pane arabo caldo",
        "testo": "Appena sfornato nei forni di quartiere, con zatar e olio."
      }
    ],
    attenzioni: [
      "Alcuni venditori propongono guide improvvisate all'ingresso: concordare il prezzo prima, oppure farne a meno e leggere i pannelli.",
      "Sul sito non c'è ombra: portare cappello, acqua e scarpe chiuse, le pietre sono irregolari.",
      "Le bancarelle all'uscita vendono souvenir a prezzi gonfiati: contrattare sempre."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['giordania-itinerario'],
    imageAlt: 'Il cardo colonnato di Jerash tra prati verdi, con la città moderna sullo sfondo, Giordania',
    immagine: '/images/giordania/jerash-cardo-riccardo.jpg',
  },
  {
    slug: 'mar-morto',
    paeseSlug: 'giordania',
    ordine: 3,
    nome: 'Mar Morto',
    tipologia: ['natura', 'relax'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione: 'Si galleggia nelle acque iper-saline più basse della Terra, e al tramonto, con le colline della Cisgiordania sullo sfondo, è ancora più bello.',
    percheAndarci: 'È un\'esperienza fisica che altrove non si può rifare, e una pausa rilassata tra Jerash e la parte più intensa del viaggio.',
    cosaVedere: ['Il tramonto sulle colline della Cisgiordania'],
    cosaFare: [
      'Bagno nelle acque iper-saline al tramonto',
      'Relax in resort',
      'Cena a Madaba (Haret Jdoudna o Hikayet Sitti)',
      'Dopocena al Saint John Sky Bar o al bar del Grand Hotel Madaba',
    ],
    doveDormire:
      'Ho dormito all\'Holiday Inn Resort Dead Sea by IHG. Le recensioni online (Tripadvisor, circa 5.600, media 4/5) lo descrivono come un resort di fascia media-alta con staff attento, tre piscine, spiaggia privata e buffet abbondante; i difetti più citati sono i prezzi alti di cibo e bevande, qualche problema di manutenzione nelle camere e il divieto di portare cibo da fuori.\n\nEconomici: Ramada Resort by Wyndham Dead Sea, O Beach Hotel & Resort (accesso diretto al mare a una frazione del prezzo) · fascia media: Dead Sea Spa Hotel, Crowne Plaza Jordan Dead Sea Resort & Spa (la fascia dell\'Holiday Inn) · più lussuosi: Hilton Dead Sea Resort & Spa, Kempinski Hotel Ishtar Dead Sea.',
    doveMangiare: 'Haret Jdoudna o Hikayet Sitti a Madaba; dopocena al bar del Grand Hotel Madaba o al Saint John Sky Bar.',
    comeArrivare: 'Circa 1h30 di transfer da Jerash.',
    comeSpostarsi: 'A piedi nel resort, transfer organizzato verso Madaba per cena.',
    periodoMigliore: 'tramonto',
    costi: 'i prezzi del resort non me li sono segnati: conviene confrontarli al momento di prenotare.',
    erroriDaEvitare: ['Partire verso le zone più conservatrici o il deserto senza aver comprato gli alcolici a Madaba (Soho o Hangover)'],
    miaEsperienza:
      'Galleggiare a pelo d\'acqua guardando il sole che cala dietro le colline della Cisgiordania è un\'esperienza a sé. Al tramonto, credo, il Mar Morto dà più di quanto ci si aspetti.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Bagno e fango del Mar Morto",
        "testo": "Il mare si trova a circa 440 metri sotto il livello degli oceani (2025) e il livello continua a scendere. È così salato che si galleggia senza sforzo. Si sta a pelo d'acqua, si spalma il fango sulla pelle e si lascia asciugare.",
        "come": "Si entra da un resort con spiaggia privata o da una spiaggia pubblica attrezzata. Entrare piano, senza tuffarsi.",
        "quando": "Tramonto, con la luce sulle colline della Cisgiordania.",
        "tempo": "1-2 ore in acqua",
        "consiglio": "Non radersi il giorno prima, non bagnarsi occhi e volto e lavarsi subito dopo con acqua dolce."
      },
      {
        "nome": "Madaba e la mappa mosaico",
        "testo": "La città dei mosaici bizantini. Nella chiesa greco-ortodossa di San Giorgio c'è la mappa del VI secolo, realizzata tra il 542 e il 570, che ha al centro Gerusalemme: in origine misurava 21 metri per 7 e aveva oltre due milioni di tessere.",
        "come": "Madaba sta a circa mezz'ora da Amman e a circa un'ora dal Mar Morto; si visita a piedi nel centro.",
        "quando": "Mattina, quando la chiesa è meno affollata.",
        "tempo": "1-2 ore",
        "consiglio": "Abbinarla a una cena in un ristorante della città vecchia."
      },
      {
        "nome": "Sito del Battesimo (Betania oltre il Giordano)",
        "testo": "Il luogo sul fiume Giordano dove la tradizione colloca il battesimo di Gesù, patrimonio UNESCO dal 2015, circa 9 km a nord del Mar Morto. Si cammina tra i resti delle chiese bizantine fino al fiume, con la Cisgiordania a pochi metri.",
        "come": "In auto dal Mar Morto. Il biglietto standard comprende navetta e guida locale.",
        "quando": "Ingresso dalle 8; ultimo ingresso alle 16 da novembre a marzo, alle 17 da aprile a ottobre (2026). Meglio la mattina, prima del caldo.",
        "tempo": "1,5-2 ore",
        "url": "https://www.baptismsite.com/",
        "consiglio": "Portare cappello e acqua: il percorso è quasi tutto al sole.",
        "costo": "12 JOD per gli stranieri (2026)"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Madaba e la chiesa di San Giorgio",
          "Pranzo a Madaba",
          "Pomeriggio: trasferimento al Mar Morto",
          "Bagno e fango, poi tramonto sul mare"
        ]
      }
    ],
    zone: [
      {
        "nome": "Resort sul mare",
        "perChi": "chi vuole accesso diretto alla spiaggia",
        "testo": "Comodi, con piscine e spa. I prezzi di cibo e bevande sono alti e spesso non si può portare cibo da fuori."
      },
      {
        "nome": "Madaba",
        "perChi": "chi vuole spendere meno",
        "testo": "Alberghi più semplici e ristoranti locali, con un trasferimento di circa un'ora fino al mare."
      }
    ],
    sapori: [
      {
        "nome": "Maqluba",
        "testo": "Riso, carne e verdure rovesciati al tavolo, tipico di Madaba e delle case giordane."
      },
      {
        "nome": "Datteri della valle del Giordano",
        "testo": "Dolci e morbidi, in vendita lungo la strada e nei negozi di Madaba."
      },
      {
        "nome": "Zarb",
        "testo": "Carne e verdure cotte sotto terra; si trova nei ristoranti che lo preparano a richiesta."
      },
      {
        "nome": "Cosmetici al fango",
        "testo": "Creme e saponi con sali del Mar Morto, nei negozi di Madaba e dei resort."
      }
    ],
    attenzioni: [
      "Il sale brucia sugli occhi e sulle ferite: niente tuffi, né schizzi, e lavarsi subito se capita.",
      "Nei negozi di cosmetici davanti ai resort i prezzi sono più alti che in città: confrontare prima.",
      "Non restare troppo a lungo in acqua alla volta, e bere molto."
    ],
    // GUIDA-END
    esperienzeSlugs: ['bagno-mar-morto'],
    tripSlugs: ['giordania-itinerario'],
    imageAlt: 'Il sole velato che si specchia nel Mar Morto al tramonto, piccole sagome di bagnanti sulla riva, Giordania',
    immagine: '/images/giordania/mar-morto-tramonto-riccardo.jpg',
  },
  {
    slug: 'karak-monte-nebo',
    paeseSlug: 'giordania',
    ordine: 4,
    nome: 'Karak e Monte Nebo',
    tipologia: ['storia', 'religione'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione: 'La fortezza crociata di Karak e il Monte Nebo, il luogo da cui la tradizione vuole che Mosè abbia visto la Terra Promessa, lungo il tragitto verso Little Petra.',
    percheAndarci: 'Karak è una tappa storica che vale, sull\'altopiano a sud del Mar Morto; il Monte Nebo va messo in conto più per il valore simbolico che per il panorama.',
    cosaVedere: ['La fortezza crociata di Karak Castle', 'Il panorama dal Monte Nebo'],
    cosaFare: ['Visita a Karak Castle', 'Sosta al Monte Nebo'],
    doveDormire: 'Non ho pernottato qui: tappa di passaggio verso Little Petra e Wadi Musa.',
    doveMangiare: 'Pranzo lungo la strada tra Monte Nebo e Little Petra.',
    comeArrivare: 'Circa 1h30 di transfer da Madaba per Karak; il Monte Nebo è una sosta successiva lungo il percorso verso Little Petra.',
    comeSpostarsi: 'A piedi all\'interno della fortezza di Karak.',
    periodoMigliore: 'mattina',
    costi: 'Ingresso a Karak incluso nel Jordan Pass.',
    erroriDaEvitare: [],
    miaEsperienza:
      'Karak Castle è una fortezza imponente e vale la visita. Il Monte Nebo, a essere sincero, mi ha lasciato indifferente: conta più come simbolo (è il luogo da cui, secondo la tradizione, Mosè vide la Terra Promessa) che come paesaggio, ed è la tappa della giornata che ricordo meno.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Castello di Karak",
        "testo": "Fortezza crociata iniziata negli anni Quaranta del XII secolo su uno sperone di roccia, arresa alle truppe di Saladino nel 1188 e ampliata dai mamelucchi. Si percorrono corridoi bui, volte e sale sotterranee, con la città moderna attorno.",
        "come": "Si arriva da Madaba lungo la King's Highway. Si visita da soli, ma qualche corridoio è buio: portare una torcia.",
        "quando": "Aperto 8-17 (2026). La mattina c'è meno vento e il sole è ancora basso.",
        "tempo": "1-1,5 ore",
        "costo": "Incluso nel Jordan Pass (dato dal mio viaggio)",
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      },
      {
        "nome": "Monte Nebo",
        "testo": "Il crinale, a circa 700 metri, da cui secondo la Bibbia Mosè vide la Terra Promessa. C'è il memoriale con i mosaici bizantini, riaperto nel 2016, e la scultura a forma di serpente di Gian Paolo Fantoni.",
        "come": "Sta poco fuori Madaba, sulla strada verso il Mar Morto. Si arriva in auto fino al parcheggio.",
        "quando": "Giornata limpida, quando si vedono la valle del Giordano e Gerico, e con il cielo molto terso Gerusalemme.",
        "tempo": "45 minuti",
        "costo": "3 JOD per gli stranieri (2026)"
      },
      {
        "nome": "Castello di Shobak",
        "testo": "Il castello crociato di Montréal, costruito nel 1115 da Baldovino I su una collina isolata. Dell'originale resta poco e l'interno è in rovina, con iscrizioni dei restauri mamelucchi: è più selvaggio di Karak. I crociati scavarono un tunnel giù per la collina fino alle cisterne alimentate da sorgenti.",
        "come": "Sulla King's Highway tra Karak e Petra. Si visita da soli; per il tunnel serve una torcia.",
        "quando": "Aperto 8-17 (2026). Comodo come sosta sulla strada verso Petra.",
        "tempo": "1 ora",
        "costo": "1 JOD per gli stranieri, oppure incluso nel Jordan Pass (2026)",
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Partenza da Madaba o dal Mar Morto",
          "Monte Nebo",
          "Pranzo lungo la King's Highway",
          "Castello di Karak",
          "Arrivo a Wadi Musa"
        ]
      }
    ],
    zone: [
      {
        "nome": "Wadi Musa",
        "perChi": "chi prosegue per Petra",
        "testo": "La prosecuzione naturale del percorso lungo la King's Highway."
      },
      {
        "nome": "Karak",
        "perChi": "chi vuole una notte tranquilla",
        "testo": "Poche strutture, semplici e con prezzi bassi; la sera la città si spegne presto."
      }
    ],
    sapori: [
      {
        "nome": "Mansaf",
        "testo": "È il piatto della zona beduina di Karak: agnello, riso e yogurt salato."
      },
      {
        "nome": "Falafel e shawarma",
        "testo": "Nelle trattorie del centro di Karak, per un pranzo economico."
      },
      {
        "nome": "Pane shrak",
        "testo": "Pane sottile cotto su una pietra convessa, tipico delle campagne."
      },
      {
        "nome": "Tè beduino",
        "testo": "Con salvia o menta, servito nelle soste lungo la strada."
      }
    ],
    attenzioni: [
      "La King's Highway è una strada panoramica ma tortuosa: calcolare più tempo di quanto dica il navigatore.",
      "Nei bar lungo la strada i prezzi non sono esposti: chiedere prima.",
      "Il Monte Nebo vale più per il significato che per la vista: se il tempo è poco si può togliere dal programma.",
      "Il 23 ottobre 2026 c'è stata una sparatoria in una chiesa del governatorato di Karak: seguire le indicazioni delle autorità locali e le notizie (gov.uk)."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['giordania-itinerario'],
    imageAlt: 'Le mura in pietra della fortezza crociata di Karak Castle, Giordania',
    immagine: '/images/giordania/karak-stock.jpg',
  },
  {
    slug: 'petra',
    paeseSlug: 'giordania',
    ordine: 5,
    nome: 'Petra e Little Petra',
    tipologia: ['storia', 'trekking', 'unesco'],
    giorniConsigliati: '1 giornata intera per Petra, mezza giornata per Little Petra',
    visitataPersonalmente: true,
    introduzione: 'Il cuore del viaggio: il Siq, il Tesoro (Al-Khazneh), la salita al Monastero (Ad-Deir) e, come anticipo, il piccolo canyon di Little Petra.',
    percheAndarci: 'È una delle Sette Meraviglie del Mondo Moderno, patrimonio UNESCO, e l\'abbiamo trovata quasi deserta per il calo del turismo nella regione: un\'occasione rara, difficile da ripetere.',
    cosaVedere: [
      'Il Siq, la gola naturale lunga 1,2-1,5 km scavata nella roccia arenaria rosa',
      'Il Tesoro (Al-Khazneh), 39-40 metri di facciata scolpita nella roccia',
      'Le Tombe Reali',
      'Il Monastero (Ad-Deir), 45 metri di altezza per 50 di larghezza',
      'Little Petra (Siq al-Barid), l\'anticamera in miniatura di Petra',
    ],
    cosaFare: [
      'Cammino nel Siq fino al Tesoro (30-40 minuti)',
      'Salita al Monastero: oltre 800 gradini, 40-45 minuti di cammino ripido',
      'Tè alla menta al chiosco davanti al Monastero',
      'Little Petra Trek il giorno prima',
      'Hammam e bagno turco da Al Yhakor (Al Yakhor Turkish Bath, Wadi Musa) a fine giornata',
    ],
    doveDormire:
      'Ho dormito in un hotel qualsiasi a Wadi Musa, e il nome non me lo sono segnato. Wadi Musa è comoda perché sta a pochi minuti a piedi o in navetta dall\'ingresso di Petra.\n\nEconomici: Petra Cabin Hostel, Rocky Mountain Hotel (conduzione familiare, terrazza panoramica) · fascia media: Petra Panorama Hotel, La Maison Hotel Petra · più lussuosi: Petra Moon Luxury Hotel (boutique, vicinissimo all\'ingresso), Petra Marriott Hotel.',
    doveMangiare: 'Cena tipica organizzata dal DMC il giorno di Little Petra.',
    comeArrivare: 'Il giorno prima di Petra siamo arrivati a Little Petra e Wadi Musa in transfer da Karak e dal Monte Nebo.',
    comeSpostarsi: 'A piedi lungo tutto il sito, incluso il Siq e la salita al Monastero.',
    periodoMigliore: 'mattina presto, per il Siq e il Tesoro con meno luce diretta e meno persone',
    costi: 'Ingresso incluso nel Jordan Pass.',
    erroriDaEvitare: ['Andarci senza scarpe da trekking: sono indispensabili, soprattutto per la salita al Monastero (oltre 800 gradini)'],
    miaEsperienza:
      'Vedere il Tesoro spuntare dal Siq senza la solita folla davanti vale da solo il viaggio. La salita al Monastero ripaga ogni gradino con una vista ancora più imponente del Tesoro. Anche Little Petra, il giorno prima, è stata bellissima: meno affollata, ci ha dato la prima scarica di entusiasmo. Con Wadi Rum, è la cosa da non perdere di tutto il viaggio.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Siq e Tesoro (Al-Khazneh)",
        "testo": "La gola naturale di circa 1,2 km tra pareti di arenaria alte fino a 180 metri, larga in certi punti appena 3 metri, che si stringe fino a mostrare all'improvviso la facciata del Tesoro, alta circa 37 metri e scavata nella roccia.",
        "come": "Dal centro visitatori al Tesoro si cammina da mezz'ora fino a un'ora, secondo il passo. Si può andare a cavallo nel primo tratto, prima del Siq.",
        "quando": "Il sito apre alle 6 e chiude alle 17 (2026). Entrare alla primissima ora, quando il Siq è vuoto; il sole arriva sul Tesoro a metà mattina.",
        "tempo": "45 minuti",
        "costo": "50 JOD per 1 giorno, 55 per 2, 60 per 3 a chi dorme almeno una notte in Giordania; 90 JOD in giornata senza pernottamento (2026). Incluso nel Jordan Pass.",
        "consiglio": "L'abbiamo trovata quasi deserta: vedere il Tesoro spuntare dal Siq senza folla vale da solo il viaggio.",
        "url": "https://international.visitjordan.com/page/17/Entrance-Fees"
      },
      {
        "nome": "Via delle Facciate e Teatro",
        "testo": "Dopo il Tesoro la valle si apre sulle tombe scavate nella roccia e sul teatro nabateo scolpito nella pietra, che poteva ospitare circa 8.500 persone.",
        "come": "A piedi dal Tesoro, tutto in piano.",
        "quando": "Mattina.",
        "tempo": "1 ora",
        "costo": "Incluso nel Jordan Pass"
      },
      {
        "nome": "Tombe Reali",
        "testo": "Un gruppo di tombe monumentali scavate nella montagna: la Tomba dell'Urna, la Tomba di Seta, la Tomba Corinzia e la Tomba del Palazzo. Nella Tomba dell'Urna si entra nella grande sala.",
        "come": "Pochi minuti a piedi dal teatro.",
        "quando": "Pomeriggio, quando la luce rossa accende le pareti.",
        "tempo": "45 minuti",
        "costo": "Incluso nel Jordan Pass"
      },
      {
        "nome": "Monastero (Ad-Deir)",
        "testo": "Facciata alta circa 45 metri, più grande del Tesoro e più spoglia. Si arriva con un sentiero di quasi 800 gradini nella roccia.",
        "come": "Si parte dal fondo della valle, dopo il Qasr al-Bint: circa 40 minuti di salita. Sulla strada ci sono bancarelle e un chiosco davanti al monumento.",
        "quando": "Dopo mezzogiorno, quando il sole è sulla facciata (la mattina è in ombra).",
        "tempo": "2-2,5 ore tra andata e ritorno",
        "costo": "Incluso nel Jordan Pass",
        "consiglio": "Scarpe da trekking e acqua; il tè alla menta al chiosco ripaga la salita."
      },
      {
        "nome": "Little Petra (Siq al-Barid)",
        "testo": "Un piccolo canyon a circa 8 km a nord di Wadi Musa, con abitazioni scavate nell'arenaria, sale da banchetto nabatee e una grande cisterna. Nel Biclinio Dipinto restano affreschi ben conservati. Meno famoso e più tranquillo di Petra.",
        "come": "In taxi o con il transfer da Wadi Musa. Si cammina nel canyon.",
        "quando": "Pomeriggio, il giorno prima di Petra.",
        "tempo": "1,5-2 ore",
        "consiglio": "Ottimo per scaldarsi prima di Petra, con poca gente.",
        "costo": "Ingresso libero di giorno"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno a Petra",
        "tappe": [
          "Ingresso all'apertura, Siq e Tesoro",
          "Via delle Facciate e Teatro",
          "Tombe Reali",
          "Pranzo nella zona del Qasr al-Bint",
          "Salita al Monastero nel primo pomeriggio",
          "Rientro"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Little Petra e arrivo a Wadi Musa",
          "Giorno 2: Petra come sopra, con mezza giornata in più per l'High Place of Sacrifice o per Petra by Night nelle sere in cui è aperta"
        ]
      }
    ],
    zone: [
      {
        "nome": "Wadi Musa",
        "perChi": "chi vuole entrare all'apertura",
        "testo": "Il paese sotto l'ingresso, con hotel di tutte le fasce e ristoranti. A pochi minuti dal sito a piedi o in navetta."
      },
      {
        "nome": "Little Petra / Beidha",
        "perChi": "chi vuole silenzio",
        "testo": "Qualche campo e guesthouse vicino al canyon, più isolati e poco serviti la sera."
      }
    ],
    sapori: [
      {
        "nome": "Zarb",
        "testo": "Carne e verdure cotte nella sabbia, in alcuni ristoranti di Wadi Musa a richiesta."
      },
      {
        "nome": "Maqluba",
        "testo": "Il piatto capovolto di riso e carne, facile da trovare nei locali della via principale."
      },
      {
        "nome": "Hammam",
        "testo": "A fine giornata un bagno turco a Wadi Musa scioglie le gambe dopo i gradini."
      },
      {
        "nome": "Tè al cardamomo e salvia",
        "testo": "Servito dai beduini lungo i sentieri del sito."
      }
    ],
    attenzioni: [
      "Per cavalli, cammelli e asini concordare sempre il prezzo prima di salire, anche quando dicono che è incluso.",
      "Per il benessere degli animali, meglio salire al Monastero a piedi.",
      "Portare acqua e cappello: nel sito non ci sono molte fonti e d'estate fa molto caldo.",
      "Petra by Night: dalle 20.30 alle 22.30 circa, partenza dal centro visitatori, 30 JOD a persona, gratis sotto i 10 anni (2026). Serve anche il biglietto di giorno o il Jordan Pass, e non si prenota. Si tiene solo in alcune sere e le fonti ufficiali non concordano sui giorni (lunedì, mercoledì e giovedì oppure da domenica a giovedì): controllare al centro visitatori."
    ],
    // GUIDA-END
    esperienzeSlugs: ['salita-monastero-petra', 'hammam-wadi-musa'],
    tripSlugs: ['giordania-itinerario'],
    imageAlt: 'La facciata intera del Tesoro di Petra, con il frontone e i due ordini di colonne scolpiti nella roccia rosa, Giordania',
    immagine: '/images/meraviglie/petra-tesoro-facciata-riccardo.jpg',
  },
  {
    slug: 'wadi-rum',
    paeseSlug: 'giordania',
    ordine: 6,
    nome: 'Wadi Rum',
    tipologia: ['deserto', 'avventura'],
    giorniConsigliati: '1 giorno e una notte',
    visitataPersonalmente: true,
    introduzione: 'La «Valle della Luna»: un deserto di sabbia rossa e formazioni di arenaria che ha fatto da set a Lawrence d\'Arabia. Noi l\'abbiamo girato in cammello e in jeep, con una notte di Capodanno sotto le stelle.',
    percheAndarci: 'Dopo Petra è il secondo grande protagonista del viaggio, e insieme a Petra la cosa da non perdere in Giordania.',
    cosaVedere: [
      'La Sorgente di Lawrence',
      'Il canyon di Khazali con le incisioni rupestri nabatee',
      'Le dune rosse e i ponti di roccia naturali come Umm Fruth',
      'La Casa di Lawrence',
      'Il cielo stellato di Capodanno, lontano da ogni inquinamento luminoso',
    ],
    cosaFare: [
      'Cammellata di 45 minuti (20 JOD)',
      'Jeep safari di 4-6 ore sui classici pick-up beduini',
      'Sandboarding sulle dune',
      'Guidare la jeep nel deserto in prima persona (per chi se la sente)',
      'Partita di beach volley improvvisata sulla sabbia',
      'Cena beduina tipica (spesso zarb, cotto sotto la sabbia)',
      'Festa di Capodanno nel deserto',
      'Alba sulle dune il mattino dopo',
    ],
    doveDormire:
      'Ho dormito in un campo tendato nel deserto, di cui non mi sono segnato il nome: tenda beduina classica, cena e colazione incluse, un cielo stellato senza pari.\n\nCampo base, bagno condiviso: Wadi Rum Bedouin Camp, Bedouin Lifestyle Camp · tenda privata con bagno: Wadi Rum Serenity Camp, Zeina Desert Lodge · luxury desert camp: Sun City Camp (famoso per i «martian domes»), Palmera Camp (tende e bubble panoramiche con bagno privato).',
    doveMangiare: 'Cena beduina tipica al campo tendato; per il pranzo al sacco, sosta in una panetteria o pasticceria locale (10 JOD).',
    comeArrivare: 'Circa 1h30 di transfer da Wadi Musa/Petra.',
    comeSpostarsi: 'Jeep 4x4 con guida beduina, cammello per il tratto iniziale nel deserto.',
    periodoMigliore: 'il periodo di Capodanno, per la festa nel deserto sotto le stelle; l\'alba per la luce migliore sulle dune',
    costi: 'Cammellata 20 JOD; pranzo al sacco 10 JOD.',
    erroriDaEvitare: [],
    miaEsperienza:
      'Il jeep safari tra canyon e dune rosse, il sandboarding, il tramonto sulle dune all\'arrivo al campo e poi la festa di Capodanno sotto uno dei cieli stellati più belli che abbia mai visto: difficile immaginare un modo più assurdo di salutare l\'anno vecchio. Con Petra, è la cosa da non perdere del viaggio in Giordania.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Jeep safari tra canyon e dune",
        "testo": "Il modo normale di visitare il deserto, patrimonio UNESCO dal 2011: un pick-up beduino con guida, tra formazioni di arenaria rossa, canyon e dune. Le tappe classiche sono la Sorgente di Lawrence, con iscrizioni nabatee sulla roccia, il canyon di Khazali con incisioni rupestri di uomini e antilopi, e un ponte di roccia.",
        "come": "Si parte dal villaggio di Rum con la guida del campo o dal centro visitatori. Il giro costa a seconda della durata e si concorda in anticipo.",
        "quando": "Giro di 4-6 ore, con partenza al mattino o nel pomeriggio per il tramonto.",
        "tempo": "4-6 ore",
        "costo": "Ingresso all'area protetta 5 JOD per gli stranieri o incluso nel Jordan Pass (2026); il giro in jeep si paga a parte",
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx",
        "consiglio": "Chiedere che il giro includa un tramonto sulle dune."
      },
      {
        "nome": "Cammello nel deserto",
        "testo": "Una passeggiata di circa 45 minuti a dorso di cammello, tradizionale.",
        "come": "Si organizza dal campo.",
        "quando": "Alba o tramonto.",
        "tempo": "45 minuti",
        "costo": "20 JOD (dal mio viaggio)"
      },
      {
        "nome": "Notte in campo tendato",
        "testo": "Il campo beduino con cena sotto la sabbia (zarb), musica e un cielo senza luci. Le tende vanno dalle più semplici alle bolle trasparenti.",
        "come": "Il transfer in jeep parte dal villaggio.",
        "quando": "Una notte, meglio due se si vuole il tempo di camminare.",
        "tempo": "Una notte",
        "consiglio": "Portare una felpa: di notte la temperatura scende anche in primavera."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno e una notte",
        "tappe": [
          "Arrivo da Petra o Aqaba, jeep fino al campo",
          "Giro di 4-6 ore tra canyon e dune",
          "Tramonto, cena beduina e cielo stellato",
          "Alba sulle dune e rientro"
        ]
      }
    ],
    zone: [
      {
        "nome": "Campo tendato tradizionale",
        "perChi": "chi vuole l'esperienza beduina",
        "testo": "Tende semplici, bagno condiviso, cena e colazione incluse. Poca elettricità: caricare i telefoni prima."
      },
      {
        "nome": "Campo con bagno privato",
        "perChi": "chi vuole più comfort",
        "testo": "Tende e bolle con bagno, a volte con aria condizionata. Costano di più."
      },
      {
        "nome": "Villaggio di Rum",
        "perChi": "chi non vuole dormire nel deserto",
        "testo": "Guesthouse semplici ai piedi della valle, da cui partono i giri."
      }
    ],
    sapori: [
      {
        "nome": "Zarb",
        "testo": "Agnello, pollo e verdure cotti per ore in un forno sotto la sabbia, servito la sera al campo."
      },
      {
        "nome": "Tè beduino",
        "testo": "Con salvia, zucchero e brace; si beve ogni volta che si arriva in una tenda."
      },
      {
        "nome": "Pane cotto sulla brace",
        "testo": "Sottile, preparato sul fuoco dagli ospiti del campo."
      },
      {
        "nome": "Mansaf",
        "testo": "Agnello con riso e yogurt salato, in alcuni campi per le serate di festa."
      }
    ],
    attenzioni: [
      "Il prezzo del giro in jeep cambia molto da un campo all'altro: concordarlo prima e confrontarlo.",
      "Di notte fa freddo anche in primavera e autunno: portare vestiti pesanti.",
      "Non allontanarsi da soli dal campo di sera, le piste si perdono nel buio.",
      "Le tempeste di sabbia possono annullare i giri: tenere un margine nel programma."
    ],
    // GUIDA-END
    esperienzeSlugs: ['jeep-safari-wadi-rum', 'capodanno-deserto'],
    tripSlugs: ['giordania-itinerario'],
    imageAlt: 'Un giovane beduino con la kefiah sul volto davanti alle rocce rosse di Wadi Rum, Giordania',
    immagine: '/images/giordania/wadi-rum-beduino-riccardo.jpg',
  },
  {
    slug: 'aqaba',
    paeseSlug: 'giordania',
    ordine: 7,
    nome: 'Aqaba',
    tipologia: ['mare', 'relax'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione: 'Dal deserto al Mar Rosso in meno di un\'ora: beach club, sport acquatici, snorkeling e diving prima del rientro ad Amman.',
    percheAndarci: 'È uno dei contrasti più belli della Giordania: si chiude la parte più intensa del viaggio con un giorno di mare.',
    cosaVedere: ['Le barriere coralline del Mar Rosso'],
    cosaFare: [
      'Beach club',
      'Sport acquatici (jet ski, banana boat)',
      'Snorkeling sulle barriere coralline',
      'Diving (organizzato in autonomia)',
      'Boat tour con Deep Blue (incluso nel pacchetto)',
    ],
    doveDormire:
      'Ho dormito in un hotel qualsiasi, di cui non mi sono segnato il nome, comodo per la vicinanza alla spiaggia e al lungomare.\n\nEconomici: Days Inn Hotel & Suites Aqaba, Extra Traveller (hostel) · fascia media: Golden Tulip Aqaba, Bratus Hotel Aqaba · più lussuosi: Kempinski Hotel Aqaba, Mövenpick Resort & Spa Aqaba.',
    doveMangiare: 'Sheikh El Harah (specialità di pesce), Suzana, Buffalo Wings & Ring (cucina americana), Khubza & Seneya (Al Nahda Street).',
    comeArrivare: 'Circa 1h di transfer da Wadi Rum.',
    comeSpostarsi: 'Transfer verso la spiaggia (15 minuti dall\'hotel).',
    periodoMigliore: 'giornata di sole, dopo l\'alba nel deserto',
    costi: 'Boat tour con Deep Blue incluso nel pacchetto.',
    erroriDaEvitare: [],
    miaEsperienza:
      'Ad Aqaba abbiamo fatto anche diving: piacevole, ma niente di speciale rispetto ad altri punti del Mar Rosso più famosi per le immersioni (l\'Egitto su tutti). Resta una bella giornata per staccare dopo il deserto, tra snorkeling e sport d\'acqua.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Snorkeling e immersioni",
        "testo": "Il Mar Rosso a poche ore dal deserto, con barriere coralline vicino alla riva e acque calde. C'è anche il relitto della nave Cedar Pride, affondata apposta per i subacquei il 16 novembre 1985: è uno dei punti d'immersione più noti.",
        "come": "Si prenota un centro diving o una barca dalla marina.",
        "quando": "Tutto l'anno, ma primavera e autunno sono i mesi migliori.",
        "tempo": "Mezza giornata",
        "consiglio": "Le immersioni mi sono sembrate piacevoli ma meno spettacolari di altri punti del Mar Rosso."
      },
      {
        "nome": "Lungomare e spiagge",
        "testo": "Il centro ha un lungomare con caffè, la spiaggia pubblica e, più a sud, le spiagge attrezzate dei resort e del parco marino. In città ci si veste sobri; il costume va bene nelle strutture.",
        "come": "Dai principali hotel in taxi.",
        "quando": "Tutto il giorno, soprattutto nel pomeriggio.",
        "tempo": "Mezza giornata"
      },
      {
        "nome": "Forte di Aqaba e museo",
        "testo": "Il forte mamelucco costruito all'inizio del Cinquecento dal sultano Qansuh al-Ghuri. Nel 1917 le forze arabe, con Lawrence, presero Aqaba agli ottomani. Il museo archeologico della città è nel Jordan Pass.",
        "come": "In centro, vicino al lungomare.",
        "quando": "Castello aperto 8-17, museo 8-17.15 (2026). Tardo pomeriggio, prima del tramonto sul mare.",
        "tempo": "45 minuti",
        "costo": "Incluso nel Jordan Pass",
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: boat tour con snorkeling",
          "Pranzo di pesce al centro",
          "Pomeriggio in spiaggia",
          "Cena sul lungomare"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro e lungomare",
        "perChi": "chi vuole stare a piedi",
        "testo": "Hotel di fascia media e ristoranti vicini al mare."
      },
      {
        "nome": "Resort sulla costa sud",
        "perChi": "chi vuole spiaggia e immersioni",
        "testo": "Resort di lusso con spiaggia privata e centro diving, lontani dal centro."
      }
    ],
    sapori: [
      {
        "nome": "Pesce alla griglia",
        "testo": "Nei ristoranti del lungomare, con cottura alla brace e contorni di insalate."
      },
      {
        "nome": "Sayadieh",
        "testo": "Pesce con riso speziato e cipolle caramellate, piatto tipico di Aqaba."
      },
      {
        "nome": "Falafel",
        "testo": "Nei locali del centro, per un pranzo economico."
      },
      {
        "nome": "Succhi di frutta fresca",
        "testo": "Venduti nei chioschi del lungomare."
      }
    ],
    attenzioni: [
      "Fuori dalle spiagge dei resort il costume non va bene: usare un copricostume.",
      "Il sole sul mare è forte tutto l'anno: protezione alta e acqua."
    ],
    // GUIDA-END
    esperienzeSlugs: ['diving-aqaba'],
    tripSlugs: ['giordania-itinerario'],
    imageAlt: 'La costa di Aqaba sul Mar Rosso, Giordania',
    immagine: '/images/giordania/aqaba-stock.jpg',
  },
]
