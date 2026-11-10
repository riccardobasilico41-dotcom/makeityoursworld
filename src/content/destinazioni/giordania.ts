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
    comeArrivare: "Il giorno prima di Petra siamo arrivati a Little Petra e Wadi Musa in transfer da Karak e dal Monte Nebo. Da Amman sono circa 235 km, tre ore abbondanti in auto sulla Desert Highway (più lenta ma panoramica la King's Highway, con soste a Madaba e Karak). Da Aqaba servono circa due ore, da Wadi Rum un'ora e mezza. Da Amman parte ogni mattina un autobus JETT per Wadi Musa; in alternativa taxi, transfer prenotato o auto a noleggio, che in Giordania è la soluzione più libera. Il paese di Wadi Musa è attaccato all'ingresso del sito.",
    comeSpostarsi: 'A piedi lungo tutto il sito, incluso il Siq e la salita al Monastero.',
    periodoMigliore: 'mattina presto, per il Siq e il Tesoro con meno luce diretta e meno persone',
    costi: "Budget basso 50-70 € al giorno (ostello o guesthouse, falafel e shawarma, biglietto a parte); medio 100-150 € (hotel a Wadi Musa, cene al ristorante, taxi); alto da 250 € (hotel sotto l'ingresso, guida privata, transfer). Ingresso: 50 JOD (circa 60 €) per un giorno a chi dorme in Giordania, 90 JOD (circa 109 €) senza pernottamento; il Jordan Pass, da 70 JOD (circa 85 €), comprende Petra e la tassa del visto.",
    erroriDaEvitare: ['Andarci senza scarpe da trekking: sono indispensabili, soprattutto per la salita al Monastero (oltre 800 gradini)'],
    miaEsperienza:
      'Vedere il Tesoro spuntare dal Siq senza la solita folla davanti vale da solo il viaggio. La salita al Monastero ripaga ogni gradino con una vista ancora più imponente del Tesoro. Anche Little Petra, il giorno prima, è stata bellissima: meno affollata, ci ha dato la prima scarica di entusiasmo. Con Wadi Rum, è la cosa da non perdere di tutto il viaggio.',
    // GUIDA-START
    luoghi: [
      {
        nome: "Siq e Tesoro (Al-Khazneh)",
        testo: "La gola naturale di circa 1,2 km tra pareti di arenaria alte fino a 180 metri, larga in certi punti appena 3 metri, che si stringe fino a mostrare all'improvviso la facciata del Tesoro, alta circa 37 metri e scavata nella roccia.",
        come: "Dal centro visitatori al Tesoro si cammina da mezz'ora fino a un'ora, secondo il passo. Si può andare a cavallo nel primo tratto, prima del Siq.",
        quando: "Il sito apre alle 6 e chiude alle 17 (2026). Entrare alla primissima ora, quando il Siq è vuoto; il sole arriva sul Tesoro a metà mattina.",
        tempo: "45 minuti",
        costo: "50 JOD (circa 60 €) per 1 giorno, 55 JOD (circa 67 €) per 2, 60 JOD (circa 73 €) per 3 a chi dorme almeno una notte in Giordania; 90 JOD (circa 109 €) in giornata senza pernottamento (2026). Incluso nel Jordan Pass.",
        orari: "Tutti i giorni dalle 6; chiusura alle 17, d'inverno anche verso le 16 (2026).",
        lat: 30.32208,
        lng: 35.45154,
        url: "https://international.visitjordan.com/page/17/Entrance-Fees",
        consiglio: "L'abbiamo trovata quasi deserta: vedere il Tesoro spuntare dal Siq senza folla vale da solo il viaggio.",
      },
      {
        nome: "Via delle Facciate e Teatro",
        testo: "Dopo il Tesoro la valle si apre sulle tombe scavate nella roccia e sul teatro nabateo scolpito nella pietra, che poteva ospitare circa 8.500 persone.",
        come: "A piedi dal Tesoro, tutto in piano.",
        quando: "Mattina.",
        tempo: "1 ora",
        costo: "Incluso nel Jordan Pass",
        orari: "Con il sito, dalle 6 alla chiusura.",
        lat: 30.32398,
        lng: 35.44769,
      },
      {
        nome: "Tombe Reali",
        testo: "Un gruppo di tombe monumentali scavate nella montagna: la Tomba dell'Urna, la Tomba di Seta, la Tomba Corinzia e la Tomba del Palazzo. Nella Tomba dell'Urna si entra nella grande sala.",
        come: "Pochi minuti a piedi dal teatro.",
        quando: "Pomeriggio, quando la luce rossa accende le pareti.",
        tempo: "45 minuti",
        costo: "Incluso nel Jordan Pass",
        orari: "Con il sito, dalle 6 alla chiusura.",
        lat: 30.32755,
        lng: 35.44926,
      },
      {
        nome: "Strada colonnata e Grande Tempio",
        testo: "Il cardo romano lastricato che attraversa il fondovalle, con le colonne ancora in piedi su un lato e i resti dei mercati. Sopra, sulla sinistra, il Grande Tempio: un complesso nabateo su terrazze con un piccolo teatro interno, tra le più grandi strutture costruite (non scavate) della città.",
        come: "A piedi, subito dopo il teatro e le Tombe Reali, in piano. Al Grande Tempio si sale per una scalinata.",
        quando: "Tarda mattina, di passaggio verso il Monastero.",
        tempo: "45 minuti",
        costo: "incluso nel biglietto di Petra",
        orari: "Con il sito, dalle 6 alla chiusura.",
        lat: 30.32912,
        lng: 35.44326,
      },
      {
        nome: "Qasr al-Bint",
        testo: "Il tempio principale della città nabatea, uno dei pochi edifici in muratura sopravvissuti, alto ancora più di 20 metri. Segna la fine della strada colonnata e l'inizio della salita al Monastero: qui ci sono anche i due ristoranti del fondovalle e i bagni.",
        come: "A piedi in fondo alla strada colonnata, circa 4 km dall'ingresso.",
        quando: "All'ora di pranzo, come pausa prima del Monastero.",
        tempo: "20-30 minuti",
        costo: "incluso nel biglietto di Petra",
        orari: "Con il sito, dalle 6 alla chiusura.",
        lat: 30.3295,
        lng: 35.4401,
      },
      {
        nome: "Monastero (Ad-Deir)",
        testo: "Facciata alta circa 45 metri, più grande del Tesoro e più spoglia. Si arriva con un sentiero di quasi 800 gradini nella roccia.",
        come: "Si parte dal fondo della valle, dopo il Qasr al-Bint: circa 40 minuti di salita. Sulla strada ci sono bancarelle e un chiosco davanti al monumento.",
        quando: "Dopo mezzogiorno, quando il sole è sulla facciata (la mattina è in ombra).",
        tempo: "2-2,5 ore tra andata e ritorno",
        costo: "Incluso nel Jordan Pass",
        orari: "Con il sito; per non scendere al buio conviene iniziare la salita entro le 14 d'inverno.",
        lat: 30.33821,
        lng: 35.43098,
        consiglio: "Scarpe da trekking e acqua; il tè alla menta al chiosco ripaga la salita.",
      },
      {
        nome: "Alto Luogo del Sacrificio (Al-Madbah)",
        testo: "Un'area cerimoniale sulla cima di Jebel Madbah, con l'altare e due obelischi scolpiti nella roccia. Il sentiero sale a gradoni dalla zona del teatro e regala una vista dall'alto sul centro di Petra che dal fondovalle non si immagina.",
        come: "Si sale a piedi dalla Via delle Facciate, circa 45 minuti di gradini. Si può scendere dall'altro versante per il Wadi Farasa, passando dalla Fontana del Leone e dalla Tomba del Soldato Romano, e sbucare vicino al Qasr al-Bint.",
        quando: "Al mattino presto o nel secondo giorno di visita; d'estate evitare le ore centrali.",
        tempo: "2-3 ore con la discesa dal Wadi Farasa",
        costo: "incluso nel biglietto di Petra",
        orari: "Con il sito, dalle 6 alla chiusura.",
        lat: 30.32148,
        lng: 35.44699,
        consiglio: "È il modo migliore per usare il secondo giorno del biglietto, quando le gambe sono già provate dal Monastero.",
      },
      {
        nome: "Belvedere di Al-Khubtha sul Tesoro",
        testo: "Il sentiero che sale sul massiccio di Jebel al-Khubtha, sopra le Tombe Reali, fino a un punto panoramico che guarda il Tesoro dall'alto. È la foto di Petra dall'alto, e richiede meno fatica del Monastero.",
        come: "Si parte dalle Tombe Reali (lato Tomba dell'Urna), circa un'ora di salita su scalini e roccia. In cima c'è una tenda beduina che chiede una piccola cifra per affacciarsi.",
        quando: "Al mattino, quando il sole illumina la facciata del Tesoro.",
        tempo: "2-2,5 ore tra andata e ritorno",
        costo: "incluso nel biglietto di Petra, più qualche dinaro al punto panoramico",
        orari: "Con il sito, dalle 6 alla chiusura.",
      },
      {
        nome: "Petra by Night",
        testo: "Il Siq percorso al buio, illuminato da centinaia di candele, fino al Tesoro dove si ascolta musica beduina seduti a terra. È un'esperienza più d'atmosfera che di visita: il Tesoro a lume di candela resta un'immagine forte.",
        come: "Si parte dal centro visitatori di Wadi Musa dopo il tramonto e si cammina in gruppo fino al Tesoro, circa 2 ore in tutto. Le sere in cui si tiene cambiano: vanno chieste al centro visitatori o in hotel.",
        quando: "Solo alcune sere a settimana; meglio la sera prima o dopo la giornata intera a Petra.",
        tempo: "2 ore",
        costo: "30 JOD, circa 36 € (2026), non incluso nel Jordan Pass",
        lat: 30.32208,
        lng: 35.45154,
        url: "https://visitpetra.jo/en/Event/25",
        consiglio: "Arrivare presto al centro visitatori per stare in testa al gruppo: le prime file trovano il Siq silenzioso.",
      },
      {
        nome: "Museo di Petra",
        testo: "Il museo aperto nel 2019 accanto al centro visitatori, con statue, ceramiche, gioielli e iscrizioni trovati nel sito. In un'ora spiega chi erano i Nabatei e come vivevano, cosa che tra le facciate di roccia non è ovvia.",
        come: "All'ingresso di Petra, a Wadi Musa, prima dei tornelli.",
        quando: "Il pomeriggio del giorno di arrivo o al ritorno dalla visita, quando fa caldo.",
        tempo: "1 ora",
        costo: "incluso nel biglietto di Petra",
        lat: 30.32532,
        lng: 35.46784,
      },
      {
        nome: "Little Petra (Siq al-Barid)",
        testo: "Un piccolo canyon a circa 8 km a nord di Wadi Musa, con abitazioni scavate nell'arenaria, sale da banchetto nabatee e una grande cisterna. Nel Biclinio Dipinto restano affreschi ben conservati. Meno famoso e più tranquillo di Petra.",
        come: "In taxi o con il transfer da Wadi Musa. Si cammina nel canyon.",
        quando: "Pomeriggio, il giorno prima di Petra.",
        tempo: "1,5-2 ore",
        costo: "Ingresso libero di giorno",
        lat: 30.37408,
        lng: 35.44803,
        consiglio: "Ottimo per scaldarsi prima di Petra, con poca gente.",
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Ingresso all'apertura, alle 6: Siq e Tesoro con poca gente",
          "Via delle Facciate, teatro e Tombe Reali",
          "Strada colonnata e Grande Tempio",
          "Pranzo vicino al Qasr al-Bint",
          "Salita al Monastero nel primo pomeriggio, con il sole sulla facciata",
          "Rientro per il Siq verso la chiusura",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: come sopra",
          "Sera: Petra by Night, se cade in una delle sere previste",
          "Giorno 2 mattina: Alto Luogo del Sacrificio con discesa dal Wadi Farasa",
          "Giorno 2 pomeriggio: Museo di Petra e Little Petra in taxi",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: Little Petra nel pomeriggio d'arrivo e Museo di Petra",
          "Giorno 2: Siq, Tesoro, Tombe Reali, strada colonnata e Monastero",
          "Giorno 3: belvedere di Al-Khubtha sul Tesoro al mattino, poi Alto Luogo del Sacrificio",
          "Sera del giorno 2 o 3: Petra by Night",
        ],
      },
    ],
    zone: [
      {
        nome: "Wadi Musa",
        perChi: "chi vuole entrare all'apertura",
        testo: "Il paese sotto l'ingresso, con hotel di tutte le fasce e ristoranti. A pochi minuti dal sito a piedi o in navetta.",
        fascia: "40-180 €",
      },
      {
        nome: "Little Petra / Beidha",
        perChi: "chi vuole silenzio",
        testo: "Qualche campo e guesthouse vicino al canyon, più isolati e poco serviti la sera.",
        fascia: "50-150 €",
      },
      {
        nome: "Taybeh",
        perChi: "chi viaggia in auto e cerca panorama",
        testo: "Il villaggio sulla collina a sud di Wadi Musa, con qualche hotel in posizione alta sulla valle e tramonti ampi. Serve l'auto o un taxi per arrivare all'ingresso del sito, circa un quarto d'ora.",
        fascia: "60-150 €",
      },
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
    gite: [
      {
        nome: "Wadi Rum",
        distanza: "1 ora e mezza in auto, circa 110 km",
        come: "Transfer, taxi o auto a noleggio verso sud sulla Desert Highway; nel deserto si entra con le jeep dei campi beduini.",
        testo: "La valle di sabbia rossa e torri di arenaria di Lawrence d'Arabia. Meglio fermarsi una notte in tenda che fare andata e ritorno in giornata.",
      },
      {
        nome: "Castello di Shobak",
        distanza: "40 minuti in auto, circa 30 km",
        come: "In auto o taxi verso nord sulla King's Highway; si combina facilmente con l'arrivo da Karak o da Dana.",
        testo: "Il castello crociato di Montréal, su un cocuzzolo isolato, con gallerie e una scala nella roccia che scende a una sorgente. Spesso quasi vuoto.",
      },
      {
        nome: "Riserva di Dana",
        distanza: "1 ora e mezza in auto, circa 70 km",
        come: "In auto sulla King's Highway fino al villaggio di Dana; i sentieri si fanno a piedi, alcuni con guida della riserva.",
        testo: "La riserva naturale più grande della Giordania, con un villaggio di pietra sul bordo di una valle che scende verso il Wadi Araba. Buona per una giornata di cammino dopo i siti archeologici.",
      },
      {
        nome: "Aqaba e il Mar Rosso",
        distanza: "2 ore in auto, circa 125 km",
        come: "Transfer, taxi o auto sulla Desert Highway; di solito si va passando da Wadi Rum.",
        testo: "Snorkeling sulle barriere coralline e spiaggia dopo giorni di deserto. Più che una gita, è la tappa finale naturale di un giro da Petra verso sud.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Petra?",
        risposta: "Un giorno intero basta per Siq, Tesoro, Tombe Reali e Monastero, partendo all'apertura. Con due giorni si aggiungono l'Alto Luogo del Sacrificio, il belvedere di Al-Khubtha e Little Petra senza correre.",
      },
      {
        domanda: "Conviene il Jordan Pass per Petra?",
        risposta: "Quasi sempre sì per chi resta almeno tre notti: da 70 JOD comprende l'ingresso a Petra (50 JOD da solo) e la tassa del visto, oltre a Jerash, Wadi Rum e decine di altri siti. Va comprato online prima di arrivare.",
      },
      {
        domanda: "Si può visitare Petra in giornata da Amman o da Aqaba?",
        risposta: "Si può, ma il biglietto per chi non dorme in Giordania sale a 90 JOD e si arriva quando il Siq è già pieno. Dormire a Wadi Musa permette di entrare alle 6, che è il vero vantaggio.",
      },
      {
        domanda: "Petra by Night vale la pena?",
        risposta: "Sì come esperienza d'atmosfera, non come visita: si vedono solo Siq e Tesoro illuminati dalle candele. Costa 30 JOD, non è nel Jordan Pass e si tiene solo alcune sere a settimana.",
      },
      {
        domanda: "Quando andare a Petra?",
        risposta: "Marzo-maggio e ottobre-novembre hanno temperature buone per camminare. D'estate fa molto caldo dopo le 10, d'inverno le giornate sono corte e il sito chiude verso le 16.",
      },
      {
        domanda: "Quanto si cammina a Petra?",
        risposta: "Dall'ingresso al Qasr al-Bint sono circa 4 km, e il Monastero aggiunge oltre 800 gradini: in una giornata completa si fanno 15-20 km. Servono scarpe da trekking, acqua e cappello.",
      },
    ],
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
    comeArrivare: "Wadi Rum è a circa 120 km da Wadi Musa (Petra), circa 2 ore di strada, e a circa 70 km da Aqaba, un'ora e un quarto. Si arriva in auto a noleggio, in taxi o con il transfer organizzato dal campo fino al centro visitatori e al villaggio di Rum, dove le guide beduine aspettano con le jeep. Dall'aeroporto di Aqaba ci vuole circa un'ora e mezza.",
    comeSpostarsi: 'Jeep 4x4 con guida beduina, cammello per il tratto iniziale nel deserto.',
    periodoMigliore: 'il periodo di Capodanno, per la festa nel deserto sotto le stelle; l\'alba per la luce migliore sulle dune',
    costi: "Budget basso circa 50-70 € al giorno a persona (campo tradizionale con cena e colazione, giro in jeep condiviso, ingresso con Jordan Pass); medio 90-150 € (tenda con bagno privato, jeep privata per mezza giornata, cammello a 20 JOD); alto da 200 € in su (bolle o campo di lusso, giro di un giorno intero, salita con guida). Ingresso all'area protetta 5 JOD senza Jordan Pass; pranzo al sacco circa 10 JOD; 1 JOD vale circa 1,2 €.",
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
        "costo": "Ingresso all'area protetta 5 JOD, circa 6 €, per gli stranieri o incluso nel Jordan Pass (2026); il giro in jeep si paga a parte",
        "orari": "Area protetta e centro visitatori tutti i giorni 8-17 (Jordan Pass, 2026)",
        "lat": 29.5765,
        "lng": 35.41993,
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx",
        "consiglio": "Chiedere che il giro includa un tramonto sulle dune."
      },
      {
        "nome": "Cammello nel deserto",
        "testo": "Una passeggiata di circa 45 minuti a dorso di cammello, tradizionale.",
        "come": "Si organizza dal campo.",
        "quando": "Alba o tramonto.",
        "tempo": "45 minuti",
        "costo": "20 JOD, circa 24 € (dal mio viaggio)"
      },
      {
        "nome": "Notte in campo tendato",
        "testo": "Il campo beduino con cena sotto la sabbia (zarb), musica e un cielo senza luci. Le tende vanno dalle più semplici alle bolle trasparenti.",
        "come": "Il transfer in jeep parte dal villaggio.",
        "quando": "Una notte, meglio due se si vuole il tempo di camminare.",
        "tempo": "Una notte",
        "consiglio": "Portare una felpa: di notte la temperatura scende anche in primavera."
      },
      {
        "nome": "Centro visitatori e Sette Pilastri della Saggezza",
        "testo": "L'ingresso dell'area protetta, dove si mostra il Jordan Pass o si paga il biglietto. Davanti c'è la montagna dalle grandi pieghe verticali chiamata Sette Pilastri della Saggezza, dal titolo del libro di T.E. Lawrence.",
        "come": "Sulla strada che dal Desert Highway scende al villaggio di Rum; parcheggio al centro.",
        "quando": "All'arrivo, prima di salire sulla jeep.",
        "tempo": "20-30 minuti",
        "costo": "5 JOD, circa 6 €, o Jordan Pass (2026)",
        "orari": "Tutti i giorni 8-17 (2026)",
        "lat": 29.63923,
        "lng": 35.43444,
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      },
      {
        "nome": "Sorgente di Lawrence",
        "testo": "Una piccola sorgente sulla parete del Jebel Rum, legata al racconto di Lawrence d'Arabia, con iscrizioni nabatee sulla roccia. Si sale per pochi minuti per avere la vista sulla valle.",
        "come": "Prima tappa di quasi tutti i giri in jeep, a pochi minuti dal villaggio.",
        "quando": "Mattina.",
        "tempo": "20-30 minuti",
        "lat": 29.55979,
        "lng": 35.41019
      },
      {
        "nome": "Siq di Khazali",
        "testo": "Una spaccatura stretta nella montagna, fresca anche d'estate, con incisioni rupestri thamudiche e nabatee di figure umane, antilopi e impronte di piedi. Si entra a piedi per qualche decina di metri.",
        "come": "Tappa classica del giro in jeep.",
        "quando": "Nelle ore calde, per l'ombra.",
        "tempo": "20-30 minuti",
        "lat": 29.51796,
        "lng": 35.42347
      },
      {
        "nome": "Dune rosse",
        "testo": "Le grandi dune di sabbia rossa appoggiate alla roccia, il punto in cui si fa sandboarding e si sale per guardare il deserto dall'alto.",
        "come": "Con il giro in jeep; si sale a piedi, a piedi nudi se la sabbia non scotta.",
        "quando": "Tardo pomeriggio, verso il tramonto.",
        "tempo": "30-45 minuti",
        "lat": 29.52898,
        "lng": 35.42167
      },
      {
        "nome": "Little Bridge",
        "testo": "Un piccolo arco di roccia a pochi metri da terra, facile da salire per una foto sul ponte. È l'alternativa semplice ai ponti più alti.",
        "come": "Nel giro in jeep di mezza giornata.",
        "quando": "Pomeriggio.",
        "tempo": "20 minuti",
        "lat": 29.52041,
        "lng": 35.44302
      },
      {
        "nome": "Casa di Lawrence",
        "testo": "I resti di un piccolo edificio nabateo in pietra, che la tradizione lega al passaggio di Lawrence. Più dei ruderi conta il panorama sulla piana rossa.",
        "come": "Tappa del giro in jeep.",
        "quando": "Pomeriggio.",
        "tempo": "15-20 minuti",
        "lat": 29.52862,
        "lng": 35.45931
      },
      {
        "nome": "Roccia del Fungo",
        "testo": "Una roccia isolata nella sabbia con la base erosa che la fa sembrare un fungo, una delle forme più fotografate del deserto.",
        "come": "Nei giri in jeep più lunghi.",
        "quando": "Luce del pomeriggio.",
        "tempo": "15 minuti",
        "lat": 29.51805,
        "lng": 35.4935
      },
      {
        "nome": "Ponte di Umm Fruth",
        "testo": "Un arco naturale alto circa 15 metri, che si sale in pochi minuti per una paretina facile. È il ponte di roccia più conosciuto di Wadi Rum.",
        "come": "Nei giri in jeep di 4-6 ore; scarpe con buona suola.",
        "quando": "Mattina o pomeriggio, meno affollato all'ora di pranzo.",
        "tempo": "30 minuti",
        "lat": 29.46873,
        "lng": 35.44923,
        "consiglio": "In cima ci si sta in pochi: aspettare il proprio turno ed evitare di salire con il vento forte."
      },
      {
        "nome": "Ponte di Burdah",
        "testo": "Un arco di roccia sottile a circa 35 metri d'altezza sulla cresta del Jebel Burdah. Ci si arriva solo con una salita impegnativa, con tratti di arrampicata facile.",
        "come": "Con una guida locale, partendo in jeep; per escursionisti con esperienza.",
        "quando": "Mattina presto, prima del caldo.",
        "tempo": "mezza giornata",
        "lat": 29.46845,
        "lng": 35.49665
      },
      {
        "nome": "Canyon di Barrah",
        "testo": "Un canyon lungo e largo tra pareti di arenaria, adatto a una camminata o a un tratto a dorso di cammello. È anche una zona di arrampicata.",
        "come": "In jeep o a piedi con una guida; spesso nei giri di un giorno intero.",
        "quando": "Mattina.",
        "tempo": "2-3 ore a piedi",
        "lat": 29.558,
        "lng": 35.4909
      },
      {
        "nome": "Jebel Umm ad-Dami",
        "testo": "La vetta più alta della Giordania, circa 1.850 metri, al confine con l'Arabia Saudita. La salita è breve ma ripida, e dalla cima si vede il deserto saudita.",
        "come": "Con guida, circa un'ora e mezza di jeep dal villaggio e poi a piedi.",
        "quando": "Partenza all'alba; tramonto in cima solo con la guida.",
        "tempo": "una giornata",
        "lat": 29.30833,
        "lng": 35.42917
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno e una notte",
        "tappe": [
          "Arrivo da Petra o Aqaba al centro visitatori",
          "Jeep di 4-6 ore: Sorgente di Lawrence, Siq di Khazali, dune rosse, Little Bridge, Casa di Lawrence, Umm Fruth",
          "Tramonto sulle dune, cena beduina e cielo stellato",
          "Alba sulle dune e rientro"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1 come sopra",
          "Giorno 2: cammello o camminata nel canyon di Barrah, roccia del Fungo",
          "Seconda notte al campo"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: salita al ponte di Burdah con guida, oppure Jebel Umm ad-Dami"
        ]
      }
    ],
    zone: [
      {
        "nome": "Campo tendato tradizionale",
        "perChi": "chi vuole l'esperienza beduina",
        "testo": "Tende semplici, bagno condiviso, cena e colazione incluse. Poca elettricità: caricare i telefoni prima.",
        "fascia": "30-60 €"
      },
      {
        "nome": "Campo con bagno privato",
        "perChi": "chi vuole più comfort",
        "testo": "Tende e bolle con bagno, a volte con aria condizionata. Costano di più.",
        "fascia": "50-120 €"
      },
      {
        "nome": "Villaggio di Rum",
        "perChi": "chi non vuole dormire nel deserto",
        "testo": "Guesthouse semplici ai piedi della valle, da cui partono i giri."
      },
      {
        "nome": "Bolle e campi di lusso",
        "perChi": "chi vuole il cielo stellato dal letto",
        "testo": "Cupole trasparenti o tende in stile «marziano» con bagno privato, aria condizionata e cena inclusa. Prezzi molto variabili secondo la data.",
        "fascia": "150-320 €"
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
    gite: [
      {
        "nome": "Petra",
        "distanza": "circa 120 km, 2 ore",
        "come": "Transfer con il campo, taxi o auto a noleggio via Desert Highway.",
        "testo": "La città nabatea scavata nella roccia, l'altro motivo del viaggio in Giordania. Merita almeno un giorno intero e una notte a Wadi Musa."
      },
      {
        "nome": "Aqaba e il Mar Rosso",
        "distanza": "circa 70 km, 1-1,5 ore",
        "come": "Taxi o transfer dal villaggio di Rum; anche dall'aeroporto di Aqaba circa 1,5 ore.",
        "testo": "Il mare dopo il deserto: barriera corallina dalla riva nella zona sud verso il confine saudita, uscite in barca e pesce fresco la sera."
      }
    ],
    faq: [
      {
        "domanda": "Quanto tempo serve a Wadi Rum?",
        "risposta": "Una notte con un giro in jeep di 4-6 ore basta per le tappe classiche. Con due notti si aggiungono una camminata o il cammello senza fretta."
      },
      {
        "domanda": "Il Jordan Pass copre Wadi Rum?",
        "risposta": "Sì, l'ingresso all'area protetta è incluso e si mostra al centro visitatori. Senza pass si pagano 5 JOD; jeep, campo e cammello sono sempre a parte."
      },
      {
        "domanda": "Si può visitare Wadi Rum senza dormire nel deserto?",
        "risposta": "Sì, con un giro in giornata da Petra o Aqaba. Ma il tramonto, la cena beduina e il cielo stellato sono la parte migliore, e si perdono."
      },
      {
        "domanda": "Che temperature ci sono di notte?",
        "risposta": "D'inverno di notte si scende vicino allo zero, anche in primavera e autunno fa freddo. Servono giacca e strati, perfino dopo una giornata calda."
      },
      {
        "domanda": "Meglio jeep, cammello o a piedi?",
        "risposta": "La jeep copre in mezza giornata le tappe principali; il cammello è lento e va bene per un tratto, a piedi si va solo con una guida beduina."
      },
      {
        "domanda": "Ci sono bagno e corrente nei campi?",
        "risposta": "I campi tradizionali hanno bagni condivisi e poca corrente; quelli con tende private o bolle hanno il bagno in camera. Conviene arrivare con il telefono carico e una batteria esterna."
      }
    ],
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
