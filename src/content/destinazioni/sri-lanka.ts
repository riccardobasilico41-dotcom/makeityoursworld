import type { Destinazione } from '@/lib/types'

// Contenuto ricostruito dal viaggio "Sri Lanka in 12 giorni" (src/content/viaggi/04-sri-lanka-2023.md).

export const destinazioniSriLanka: Destinazione[] = [
  {
    slug: 'negombo',
    paeseSlug: 'sri-lanka',
    ordine: 1,
    nome: 'Negombo',
    tipologia: ['mare', 'arrivo'],
    giorniConsigliati: '1 giorno, andata e ritorno',
    visitataPersonalmente: true,
    introduzione: 'La prima e l\'ultima tappa del viaggio, vicino all\'aeroporto di Colombo, con il suo famoso mercato del pesce all\'alba.',
    percheAndarci: 'È la base naturale per chi arriva o riparte da Colombo, e il fish market della mattina presto è uno spettacolo.',
    cosaVedere: ['Il fish market di Negombo all\'alba'],
    cosaFare: [
      'Cena di benvenuto o di addio tra Salt Restaurant, Tuk Tuk Wine & Dine e Jude Restaurant',
      'Dopocena al Rodeo o allo Sky Lounge',
      'Fish market la mattina presto',
    ],
    doveDormire:
      'All\'andata abbiamo dormito al Regal Réseau Hotel & Spa (4/5 su Tripadvisor, circa 400 recensioni): piace per il rooftop con piscina a sfioro, anche se secondo alcuni ospiti la musica del bar arriva fino alle camere. Al ritorno al Goldi Sands Hotel (4/5, oltre 1.700 recensioni): colazione a buffet migliore del previsto e posizione comoda, ma alcuni recensori trovano gli arredi datati.\n\nEconomiche: Icebear Guesthouse, Ocean Beauty Guest House. Fascia media: Jetwing Sea, Jetwing Lagoon. Lusso (contenuto): Jetwing Blue, Sentido Heritance Negombo.',
    doveMangiare: 'Jude Restaurant (pesce buono ma servizio lento, circa 12€ a testa); SeaJoy per un pranzo economico.',
    usciteSerali: 'Rodeo, Sky Lounge, oppure un beach party, chiedendo a guida e locali dove c\'è.',
    comeArrivare: 'Transfer dall\'aeroporto di Colombo, circa 6.000 LKR a macchina.',
    comeSpostarsi: 'Van privato con autista.',
    periodoMigliore: 'novembre',
    costi: 'Cena circa 12€ a testa; transfer dall\'aeroporto 5.000-6.000 LKR.',
    erroriDaEvitare: [],
    miaEsperienza:
      'Il fish market di Negombo la mattina presto è stato uno spettacolo genuino, un buon modo per prendere confidenza con il paese appena arrivati.',
    luoghi: [
      {
        "nome": "Mercato del pesce di Negombo",
        "testo": "Sulla spiaggia le barche da pesca scaricano all'alba e il pesce viene steso ad asciugare o venduto subito. Uno spettacolo genuino, un buon modo per prendere confidenza con il paese appena arrivati.",
        "come": "A pochi minuti dal centro, in tuk-tuk o a piedi dagli hotel sul mare.",
        "quando": "Alba o mattina presto.",
        "tempo": "1 ora",
        "consiglio": "Andare presto: a metà mattina l'attività è quasi finita."
      },
      {
        "nome": "Chiesa di Santa Maria",
        "testo": "Negombo è chiamata la «piccola Roma» per le sue chiese cattoliche, eredità del periodo portoghese. Santa Maria, finita nel 1922 dopo quasi cinquant'anni di lavori, ha il soffitto dipinto con scene della vita di Cristo, opera di un pittore locale buddhista, N.S. Godamanne.",
        "come": "A piedi o in tuk-tuk dal centro.",
        "tempo": "30 minuti",
        "consiglio": "Spalle e ginocchia coperte, come in tutti i luoghi di culto."
      },
      {
        "nome": "Cena sul mare",
        "testo": "Negombo è la tappa ideale per la cena di benvenuto o di addio: Salt Restaurant, Tuk Tuk Wine & Dine e Jude Restaurant.",
        "tempo": "una sera",
        "costo": "Cena circa 12 € a testa (dal viaggio del 2023)",
        "consiglio": "Jude Restaurant: pesce buono ma servizio lento."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mercato del pesce all'alba",
          "Chiesa di Santa Maria",
          "Pranzo di pesce a SeaJoy",
          "Cena di benvenuto o di addio sul mare"
        ]
      }
    ],
    zone: [
      {
        "nome": "Lungomare di Negombo",
        "perChi": "arrivo e partenza",
        "testo": "Hotel sul mare, vicini all'aeroporto di Colombo. Comodo, ma poco di autentico fuori dal mercato del pesce."
      }
    ],
    sapori: [
      {
        "nome": "Pesce alla griglia",
        "testo": "Pescato del giorno nei ristoranti sul mare, come Jude."
      },
      {
        "nome": "Rice and curry",
        "testo": "Riso con più curry di verdure, pesce o pollo: il pasto base dello Sri Lanka."
      },
      {
        "nome": "Kottu",
        "testo": "Roti tagliato a strisce e saltato con verdure e uova o carne, nei locali di strada."
      },
      {
        "nome": "Hoppers",
        "testo": "Piccole ciotole di pastella di riso e cocco, con un uovo al centro: colazione o cena."
      }
    ],
    attenzioni: [
      "Il visto elettronico ETA è obbligatorio: richiederlo online sul sito ufficiale eta.gov.lk. Per i passaporti italiani è gratuito dal 25 maggio 2026 (30 giorni, doppio ingresso), ma le condizioni cambiano: controllare prima di partire.",
      "La SIM locale (Dialog o SLT-Mobitel) si compra ai banchi dell'aeroporto: confrontare le offerte prima di scegliere.",
      "Concordare il prezzo del tuk-tuk o del transfer prima di salire.",
      "Nei luoghi di culto servono spalle e ginocchia coperte: portare un pareo o pantaloni lunghi."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'Barche da pesca colorate sulla spiaggia di Negombo, Sri Lanka',
    immagine: '/images/sri-lanka/negombo-stock.jpg',
  },
  {
    slug: 'anuradhapura',
    paeseSlug: 'sri-lanka',
    ordine: 2,
    nome: 'Anuradhapura',
    tipologia: ['storia', 'religione'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione: 'La prima delle "città sacre" del triangolo culturale singalese: dagoba immense, alberi sacri e rovine con oltre duemila anni di storia buddhista.',
    percheAndarci: 'Per capire le radici del buddhismo in Sri Lanka, davanti allo Sri Maha Bodhi, discendente diretto dell\'albero sotto cui il Buddha raggiunse l\'illuminazione.',
    cosaVedere: ['Le dagoba del sito archeologico', 'Lo Sri Maha Bodhi, l\'albero sacro'],
    cosaFare: ['Visita guidata del sito archeologico (circa 3h) in bicicletta, con Anil o con Lalith'],
    doveDormire:
      'Abbiamo dormito al Miridiya Lake Resort: voto medio 3/5 su Tripadvisor (circa 400 recensioni), ma con la nuova gestione sembra migliorato parecchio (ingresso, cibo, camere). La vista sul lago Nuwara Wewa piace molto; qualcuno si lamenta di docce e umidità nei bagni.\n\nEconomiche: Saubagya Inn, Why Not Palace. Fascia media: Kings Town Hotel, Monaara Leisure. Lusso: Ulagalla by Uga Escapes, Divulgaha Gedara Boutique Hotel.',
    doveMangiare: 'Buffet in hotel (circa 2.200 LKR più le bevande).',
    comeArrivare: 'Circa 5h di van da Negombo.',
    comeSpostarsi: 'In bicicletta con la guida, dentro il sito.',
    periodoMigliore: 'il pomeriggio, dopo l\'arrivo',
    costi: 'Guida circa 6.500 LKR (19€) più la mancia.',
    erroriDaEvitare: [],
    miaEsperienza:
      'Le dagoba immense di Anuradhapura danno subito la misura della storia buddhista dell\'isola. È stato un buon primo contatto con il triangolo culturale, prima delle tappe più note come Sigiriya.',
    luoghi: [
      {
        "nome": "Sri Maha Bodhi",
        "testo": "L'albero sacro, discendente diretto da quello sotto cui il Buddha raggiunse l'illuminazione, piantato nel III secolo a.C. Per i fedeli è il luogo più venerato della città.",
        "come": "Dentro il sito archeologico, in bicicletta o a piedi. Si entra scalzi e senza cappello, con spalle e gambe coperte; i fedeli vestono di bianco.",
        "quando": "Mattina o tardo pomeriggio; nei giorni di luna piena (poya) è affollatissimo di pellegrini.",
        "tempo": "1 ora"
      },
      {
        "nome": "Dagoba del sito archeologico",
        "testo": "Le cupole bianche immense, come il Ruwanwelisaya che emerge dalla foresta, danno la misura della storia buddhista dell'isola.",
        "come": "Visita guidata in bicicletta, circa 3 ore.",
        "quando": "Biglietteria dalle 7 alle 17. Il pomeriggio, dopo l'arrivo; meglio evitare le ore centrali per il caldo.",
        "tempo": "3 ore",
        "costo": "Biglietto del sito per stranieri circa 30 USD (marzo 2026), pagato in rupie; guida circa 6.500 LKR (19 €) più la mancia (dal viaggio del 2023)",
        "url": "https://eservices.ccf.gov.lk/eticketing/landing",
        "consiglio": "Con una guida i luoghi si capiscono: senza, sono mucchi di pietra."
      },
      {
        "nome": "Lago Nuwara Wewa",
        "testo": "Il grande lago artificiale che costeggia la città nuova, bello al tramonto. Sul lago si affacciano alcuni alberghi, tra cui il Miridiya Lake Resort.",
        "quando": "Tramonto.",
        "tempo": "1 ora"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Arrivo da Negombo (circa 5 ore di van)",
          "Pomeriggio: Sri Maha Bodhi e dagoba in bicicletta con la guida",
          "Tramonto sul lago Nuwara Wewa",
          "Cena a buffet in hotel"
        ]
      }
    ],
    zone: [
      {
        "nome": "Città nuova e lago",
        "perChi": "chi vuole un hotel comodo",
        "testo": "Hotel e guesthouse affacciati sul lago, a pochi minuti dai siti in tuk-tuk. È la zona più pratica."
      },
      {
        "nome": "Fuori città",
        "perChi": "chi cerca lusso e calma",
        "testo": "Ville e resort di campagna, più lontani dai siti; servono transfer."
      }
    ],
    sapori: [
      {
        "nome": "Buffet dell'hotel",
        "testo": "Curry di verdure, riso e pesce, circa 2.200 LKR a persona più le bevande al Miridiya (2023)."
      },
      {
        "nome": "Rice and curry",
        "testo": "Il pasto base dell'isola, nelle trattorie di città."
      },
      {
        "nome": "String hoppers",
        "testo": "Nidi di spaghetti di riso al vapore, serviti con curry e sambol di cocco a colazione."
      },
      {
        "nome": "Curd e treacle",
        "testo": "Yogurt di latte di bufala con sciroppo di palma da cocco: un dolce tipico."
      }
    ],
    attenzioni: [
      "Nei luoghi sacri si entra scalzi, in abiti coperti e chiari: portare calze o accettare la sabbia calda nelle ore centrali.",
      "Mai posare per una foto davanti a una statua del Buddha: è considerato irrispettoso, e mancare di rispetto alle immagini buddhiste è un reato.",
      "I giorni di luna piena (poya) sono festivi e di solito non si trova alcol: il sito è affollatissimo.",
      "Il caldo del pomeriggio è forte: acqua e cappello."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'La cupola bianca del Ruwanwelisaya che emerge dalla foresta sotto un cielo di pioggia, Anuradhapura',
    immagine: '/images/sri-lanka/anuradhapura-ruwanwelisaya-foresta-riccardo.jpg',
  },
  {
    slug: 'dambulla-sigiriya',
    paeseSlug: 'sri-lanka',
    ordine: 3,
    nome: 'Dambulla e Sigiriya',
    tipologia: ['storia', 'trekking', 'natura'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione: 'Il cuore del triangolo culturale: Mihintale, il safari a Minneriya, il tramonto da Pidurangala Rock, la Rocca del Leone di Sigiriya e il Tempio d\'Oro scavato nella roccia.',
    percheAndarci: 'Qui si concentrano più momenti forti che in qualsiasi altra tappa del viaggio: storia, natura e trekking in due giorni intensi.',
    cosaVedere: [
      'Mihintale, dove secondo la tradizione il buddhismo arrivò per la prima volta in Sri Lanka',
      'Sigiriya, la Rocca del Leone, con le fondamenta del palazzo reale del V secolo e gli affreschi delle fanciulle celesti',
      'Il Tempio d\'Oro di Dambulla, cinque grotte scavate nella roccia',
      'Il panorama su Sigiriya da Pidurangala Rock',
    ],
    cosaFare: [
      'Safari a Minneriya tra gli elefanti (c\'è la scheda esperienza dedicata)',
      'Trekking al tramonto su Pidurangala Rock (30 minuti di salita)',
      'Trekking a Sigiriya (1h30-2h di salita; c\'è la scheda esperienza dedicata)',
      'Visita al Tempio d\'Oro di Dambulla',
      'Il Dambulla Wholesale Market: Dambulla è uno dei principali centri di distribuzione delle verdure del paese',
    ],
    doveDormire:
      'Abbiamo dormito al Tropical Life Resort, sulla carta il migliore dei nove hotel del viaggio: n. 1 tra le strutture specialty di Dambulla, 4/5 su Tripadvisor. Camere pulite e ben attrezzate, buffet abbondante, tutto immerso nel verde. Qualche recensione segnala che in camera manca il WiFi.\n\nEconomiche: Relax Guesthouse, Lake Island Homestay. Fascia media: Lake Lodge Boutique Hotel, Kalundewa Retreat. Lusso: Heritance Kandalama (il celebre hotel firmato Geoffrey Bawa), Aliya Resort & Spa.',
    doveMangiare: 'Mom\'s Kitchen e Golden Palace, tra Dambulla e Sigiriya.',
    comeArrivare: "Da Anuradhapura è circa 1 ora e mezza di trasferimento, passando da Mihintale e dal safari. Da Kandy servono circa 2 ore di auto. Dall'aeroporto di Colombo (CMB) sono circa 4 ore in auto con autista, la soluzione più comune; i bus per Dambulla partono da Colombo e da Kandy, più lenti ma economici. Tra Dambulla e Sigiriya c'è circa mezz'ora di strada.",
    comeSpostarsi: 'Van privato; a piedi per i trekking.',
    periodoMigliore: 'la mattina presto per Sigiriya, per evitare il caldo',
    costi: "Mihintale 1.000 LKR (circa 3 €, 2026; nel 2023 erano 500 LKR più 50 di sarong); safari a Minneriya circa 12.000 LKR a jeep più l'ingresso (2023); Sigiriya circa 35 USD (circa 30 €, 2026); Tempio d'Oro circa 3.000 LKR (circa 9 €, 2026); Pidurangala 1.000 LKR. Budget giornaliero indicativo a persona: basso 30-40 € (guesthouse a Sigiriya, rice and curry, tuk-tuk), medio 70-120 € (hotel con piscina, autista, un safari), alto da 200 € (Heritance Kandalama o resort di lusso, guida privata).",
    erroriDaEvitare: ['Partire tardi per Sigiriya: conviene muoversi presto per evitare il caldo peggiore durante la salita'],
    miaEsperienza:
      'Il tramonto da Pidurangala Rock, con la Rocca di Sigiriya di fronte, è uno dei panorami più belli di tutto il viaggio. Forse mi è piaciuto più della salita a Sigiriya, che tutti fanno di corsa senza fermarsi qui.',
    luoghi: [
      {
        "nome": "Sigiriya, la Rocca del Leone",
        "testo": "Una roccia alta circa 180 metri con in cima le fondamenta del palazzo del re Kashyapa (477-495), patrimonio UNESCO dal 1982. Lungo la salita si passano gli affreschi delle fanciulle celesti, la parete a specchio coperta di graffiti poetici del IX-X secolo e le due zampe del leone che fanno da porta all'ultima scalinata.",
        "come": "Dalla biglietteria si sale a piedi (1 ora e mezza-2 ore di salita nel viaggio del 2023); da Dambulla in van.",
        "quando": "Biglietteria dalle 7 alle 17: arrivare all'apertura, per evitare il caldo peggiore e le code.",
        "tempo": "3-4 ore",
        "costo": "Circa 35 USD (circa 30 €) per stranieri (marzo 2026), pagati in rupie al cambio del giorno; comprende il museo. Si può comprare anche online.",
        "orari": "Biglietteria tutti i giorni 7-17 (2026).",
        "lat": 7.95694,
        "lng": 80.75972,
        "url": "https://eservices.ccf.gov.lk/eticketing/landing",
        "consiglio": "Muoversi presto: a metà mattina la salita è dura e piena di gente."
      },
      {
        "nome": "Pidurangala Rock",
        "testo": "Il tramonto da Pidurangala, con la Rocca di Sigiriya di fronte, è uno dei panorami più belli del viaggio. Forse mi è piaciuto più della salita a Sigiriya, che tutti fanno di corsa senza fermarsi qui.",
        "come": "Salita a piedi, con un tratto di roccia finale (circa 30 minuti nel viaggio del 2023).",
        "quando": "Tramonto.",
        "tempo": "2 ore",
        "costo": "Ingresso 1.000 LKR, circa 3 € (dal viaggio del 2023, invariato nel 2026)",
        "lat": 7.96562,
        "lng": 80.76185,
        "consiglio": "Portare una torcia per la discesa quando il sole è già calato."
      },
      {
        "nome": "Tempio d'Oro di Dambulla",
        "testo": "Cinque grotte scavate nella roccia con 153 statue del Buddha e circa 2.100 metri quadrati di pitture su pareti e soffitti. È patrimonio UNESCO dal 1991. La grotta più grande è la più spettacolare: le statue sono in fila sotto un soffitto tutto dipinto.",
        "come": "Da Sigiriya in van; si sale a piedi per una scalinata e si entra scalzi, con spalle e ginocchia coperte.",
        "quando": "Mattina o tardo pomeriggio.",
        "tempo": "1 ora e mezza",
        "costo": "Circa 3.000 LKR (circa 9 €) per stranieri (2026)",
        "orari": "Biglietteria fino alle 17, tempio aperto fino alle 19 (viaggio del 2023).",
        "lat": 7.85667,
        "lng": 80.64917
      },
      {
        "nome": "Safari a Minneriya",
        "testo": "Il safari in jeep tra gli elefanti nel parco di Minneriya, che si stringe intorno al lago artificiale costruito dal re Mahasen nel III secolo. Nella stagione secca, quando l'acqua si ritira, gli elefanti scendono in branco sulle rive a brucare l'erba nuova.",
        "come": "In jeep con autista-guida dall'area di Sigiriya.",
        "quando": "Pomeriggio; il periodo con più elefanti insieme (il «gathering») va di solito da luglio a ottobre, con il picco ad agosto e settembre.",
        "tempo": "3-4 ore",
        "costo": "Circa 12.000 LKR a jeep più l'ingresso (dal viaggio del 2023); ingresso al parco circa 25 USD a persona per gli adulti stranieri, più tasse, servizio e veicolo (2026)",
        "lat": 7.97889,
        "lng": 80.84889
      },
      {
        "nome": "Mihintale",
        "testo": "La collina dove, secondo la tradizione, il buddhismo arrivò per la prima volta in Sri Lanka. Secondo la tradizione qui il monaco Mahinda incontrò il re Devanampiya Tissa. Una scalinata di 1.840 gradini di granito porta ai templi e al grande stupa in cima.",
        "come": "A circa 12 km a est di Anuradhapura, in van. Si sale a piedi; nei templi si entra scalzi.",
        "quando": "Mattina, prima del caldo.",
        "tempo": "1 ora e mezza",
        "costo": "Ingresso 1.000 LKR per stranieri (2026); nel 2023 erano 500 LKR più 50 LKR di sarong",
        "lat": 8.35059,
        "lng": 80.51694
      },
      {
        "nome": "Parco nazionale di Kaudulla",
        "testo": "Il parco accanto a Minneriya, unito dallo stesso corridoio degli elefanti: quando l'acqua cala in un parco, i branchi si spostano nell'altro, intorno al lago di Kaudulla. Si visita in jeep come Minneriya.",
        "come": "In jeep con autista-guida dall'area di Sigiriya e Habarana; il parco si sceglie la mattina stessa, secondo dove sono gli elefanti.",
        "quando": "Pomeriggio.",
        "tempo": "3-4 ore",
        "lat": 8.16111,
        "lng": 80.905
      },
      {
        "nome": "Mercato all'ingrosso di Dambulla",
        "testo": "Il mercato all'ingrosso di frutta e verdura più grande dello Sri Lanka: camion carichi, montagne di prodotti e contrattazioni ad alta voce. Tra le bancarelle si assaggia lo street food.",
        "come": "Sulla strada principale di Dambulla, a pochi minuti dal Tempio d'Oro.",
        "quando": "Mattina, quando arrivano i camion.",
        "tempo": "45 minuti",
        "lat": 7.86604,
        "lng": 80.65173
      },
      {
        "nome": "Lago di Kandalama",
        "testo": "Il bacino artificiale a est di Dambulla, circondato dalla foresta, dove Geoffrey Bawa costruì l'Heritance Kandalama, incastrato nella roccia e coperto di vegetazione. Al tramonto la luce sull'acqua e sulle colline è bellissima.",
        "come": "In tuk-tuk o auto da Dambulla, circa 20 minuti.",
        "quando": "Tramonto.",
        "tempo": "1-2 ore",
        "lat": 7.87502,
        "lng": 80.70501
      },
      {
        "nome": "Tombe megalitiche di Ibbankatuwa",
        "testo": "Una necropoli preistorica di circa 2.700 anni fa, a pochi chilometri dal Tempio d'Oro: tombe a cassa fatte di lastre di pietra, dove sono state trovate urne, perline e oggetti di metallo.",
        "come": "In tuk-tuk o auto, poco a sud di Dambulla sulla strada per Kandy.",
        "tempo": "30-45 minuti",
        "lat": 7.83725,
        "lng": 80.62989
      },
      {
        "nome": "Nalanda Gedige",
        "testo": "Un tempio in pietra di circa mille anni fa che mescola stile indù e buddhista, smontato e rimontato pezzo per pezzo per salvarlo dalle acque di un bacino. Secondo la tradizione si trova al centro geografico dell'isola.",
        "come": "Sulla strada tra Dambulla e Kandy, circa 25 km a sud di Dambulla: si ferma lungo il trasferimento.",
        "tempo": "30-45 minuti",
        "lat": 7.66972,
        "lng": 80.64556
      },
      {
        "nome": "Popham's Arboretum",
        "testo": "Un arboreto di foresta secca nato negli anni Sessanta per iniziativa di un piantatore inglese, Sam Popham. Sentieri nel bosco con una guida, tra ebano e satinwood: un'ora di silenzio a pochi minuti da Dambulla.",
        "come": "In tuk-tuk da Dambulla, sulla strada per Kandalama.",
        "quando": "Mattina presto o tardo pomeriggio, quando fa meno caldo.",
        "tempo": "1-2 ore",
        "lat": 7.86081,
        "lng": 80.67586
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina presto: Sigiriya",
          "Pranzo e Tempio d'Oro di Dambulla",
          "Pomeriggio: Pidurangala per il tramonto"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Mihintale, safari a Minneriya, tramonto a Pidurangala",
          "Giorno 2: Sigiriya all'apertura, poi Tempio d'Oro e mercato di Dambulla"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Mihintale al mattino, safari a Minneriya o Kaudulla nel pomeriggio",
          "Giorno 2: Sigiriya all'apertura, Tempio d'Oro e mercato di Dambulla, tramonto a Pidurangala",
          "Giorno 3: gita a Polonnaruwa in bicicletta, rientro con sosta al lago di Kandalama"
        ]
      }
    ],
    zone: [
      {
        "nome": "Dambulla",
        "perChi": "base comoda",
        "testo": "Hotel immersi nel verde, a mezz'ora dai siti. Tropical Life Resort è stato il migliore dei nove hotel del viaggio.",
        "fascia": "30-90 €"
      },
      {
        "nome": "Sigiriya",
        "perChi": "vicino alla rocca",
        "testo": "Guesthouse e hotel vicino alla biglietteria, comodi per la salita all'alba. Meno scelta di ristoranti.",
        "fascia": "25-80 €"
      },
      {
        "nome": "Lago di Kandalama",
        "perChi": "lusso e architettura",
        "testo": "L'Heritance Kandalama, firmato da Geoffrey Bawa, è il più celebre, tra i più cari.",
        "fascia": "120-250 €"
      },
      {
        "nome": "Habarana",
        "perChi": "safari e Polonnaruwa",
        "testo": "Incrocio a nord-est di Sigiriya, vicino agli ingressi di Minneriya e Kaudulla e sulla strada per Polonnaruwa. Molti resort con piscina, poco da fare la sera.",
        "fascia": "40-150 €"
      }
    ],
    sapori: [
      {
        "nome": "Rice and curry",
        "testo": "Riso con curry di verdure, dal e pesce, da Mom's Kitchen e Golden Palace."
      },
      {
        "nome": "Kottu",
        "testo": "Roti a strisce saltato con verdure e uova, nei locali di strada."
      },
      {
        "nome": "Frutta di Dambulla",
        "testo": "Dambulla è uno dei principali centri di distribuzione delle verdure del paese: al mercato all'ingrosso si vedono camion carichi e montagne di prodotti locali."
      },
      {
        "nome": "Tè e dolci",
        "testo": "Tè al latte e dolci di cocco e treacle nei caffè lungo la strada."
      }
    ],
    attenzioni: [
      "Ticket di Sigiriya: pagare solo alla biglietteria ufficiale. Chi ferma i turisti per strada offrendo «scorciatoie» o biglietti scontati è un procacciatore.",
      "Scimmie: non tenere cibo in vista e non fissarle negli occhi.",
      "Sigiriya: partire presto per evitare il caldo peggiore durante la salita.",
      "Sarong e spalle coperte per Mihintale e per il Tempio d'Oro."
    ],
    gite: [
      {
        "nome": "Polonnaruwa",
        "distanza": "circa 1 ora e 10 da Sigiriya",
        "come": "In auto con autista; il sito si gira in bicicletta, noleggiata sul posto per circa 1.000 LKR (2023).",
        "testo": "La seconda capitale medievale dell'isola, patrimonio UNESCO: templi, palazzi e le grandi statue del Buddha del Gal Vihara. Si visita in due ore e mezza-tre, più leggere e dirette di Sigiriya."
      },
      {
        "nome": "Ritigala",
        "distanza": "circa 40 km",
        "come": "In auto con autista; si visita a piedi, su sentieri lastricati nel bosco.",
        "testo": "Le rovine di un monastero di eremiti nella foresta, sulle pendici della montagna più alta della pianura settentrionale: sentieri di pietra, piattaforme e vasche, quasi senza turisti."
      },
      {
        "nome": "Buddha di Avukana",
        "distanza": "circa 40 km",
        "come": "In auto con autista, passando accanto al lago di Kala Wewa.",
        "testo": "Una statua del Buddha in piedi alta circa 12 metri, scolpita nella roccia nel V secolo accanto al grande lago di Kala Wewa. È tra le statue antiche meglio conservate dell'isola."
      }
    ],
    faq: [
      {
        "domanda": "Meglio Sigiriya o Pidurangala?",
        "risposta": "Sigiriya ha gli affreschi, la storia e le fondamenta del palazzo; Pidurangala costa molto meno e regala la vista sulla Rocca del Leone. Se il tempo c'è, vanno fatte tutte e due: Sigiriya all'apertura, Pidurangala al tramonto."
      },
      {
        "domanda": "Quanto costa entrare a Sigiriya?",
        "risposta": "Circa 35 USD per gli stranieri (marzo 2026), pagati in rupie al cambio del giorno, museo compreso. Il biglietto si compra alla biglietteria ufficiale o online sul portale del Central Cultural Fund."
      },
      {
        "domanda": "Meglio dormire a Dambulla o a Sigiriya?",
        "risposta": "Sigiriya è più comoda per la salita all'alba; Dambulla ha più scelta di hotel e ristoranti ed è vicina al Tempio d'Oro. Sono a circa mezz'ora l'una dall'altra."
      },
      {
        "domanda": "Quanti giorni servono?",
        "risposta": "Due giorni pieni bastano per Sigiriya, Pidurangala, il Tempio d'Oro e un safari. Con il terzo si aggiungono Polonnaruwa o Mihintale."
      },
      {
        "domanda": "Minneriya o Kaudulla per gli elefanti?",
        "risposta": "Dipende dal periodo: i branchi si spostano tra i due parchi secondo l'acqua. Il raduno più famoso è a Minneriya, di solito da luglio a ottobre; il parco si sceglie la mattina stessa in base a dove sono gli elefanti."
      },
      {
        "domanda": "Come ci si veste al Tempio d'Oro?",
        "risposta": "Spalle e ginocchia coperte, e si entra scalzi lasciando le scarpe al deposito. Un sarong o un paio di pantaloni lunghi risolvono."
      }
    ],
    esperienzeSlugs: ['safari-minneriya', 'trekking-sigiriya'],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'La rocca di Sigiriya che emerge blu dalla giungla al crepuscolo, vista da Pidurangala',
    immagine: '/images/sri-lanka/sigiriya-crepuscolo-riccardo.jpg',
  },
  {
    slug: 'polonnaruwa',
    paeseSlug: 'sri-lanka',
    ordine: 4,
    nome: 'Polonnaruwa',
    tipologia: ['storia'],
    giorniConsigliati: 'mezza giornata',
    visitataPersonalmente: true,
    introduzione: 'La seconda capitale medievale dello Sri Lanka, che abbiamo girato in bicicletta tra templi e statue del Buddha.',
    percheAndarci: 'È più leggera e immediata di Sigiriya, con altrettanta storia.',
    cosaVedere: ['I templi e le statue del Buddha della città medievale'],
    cosaFare: ['Giro tra i templi in bicicletta a noleggio (1.000 LKR)', 'Pranzo al Priyamali gedara, con vista sulle risaie'],
    doveDormire: 'Non ci ho dormito: è stata una gita di mezza giornata da Dambulla.',
    doveMangiare: 'Priyamali gedara, ristorante di campagna con vista sulle risaie: molto buono.',
    comeArrivare: 'Circa 1h10 di trasferimento da Sigiriya.',
    comeSpostarsi: 'In bicicletta a noleggio, dentro il sito.',
    periodoMigliore: 'mattina o pomeriggio',
    costi: 'Bicicletta 1.000 LKR (circa 2,5€); guida (Indu) 6.000 LKR più la mancia.',
    erroriDaEvitare: [],
    miaEsperienza:
      'Girare Polonnaruwa in bicicletta è stato un bel cambio di ritmo dopo la salita a Sigiriya del giorno prima. Il pranzo al Priyamali gedara, con vista sulle risaie, è stato uno dei migliori del viaggio.',
    luoghi: [
      {
        "nome": "Gal Vihara",
        "testo": "Quattro immagini del Buddha scolpite in un'unica parete di granito nel XII secolo, tra cui una figura in piedi e un Buddha sdraiato lungo circa 14 metri.",
        "come": "Nel sito archeologico, in bicicletta; si lasciano le scarpe all'ingresso.",
        "quando": "Mattina o pomeriggio, con la luce radente.",
        "tempo": "30 minuti"
      },
      {
        "nome": "Vatadage e il Quadrangolo",
        "testo": "Il Vatadage è un tempio circolare costruito forse per la reliquia del dente, forse per la ciotola del Buddha: gli storici non sono d'accordo. Ha scalinate e una pietra di luna scolpita all'ingresso nord. Il Quadrangolo raccoglie in un recinto i templi più belli della città medievale.",
        "come": "Si gira in bicicletta tra le rovine e si visitano a piedi i templi del Quadrangolo.",
        "tempo": "1 ora"
      },
      {
        "nome": "Giro in bicicletta tra i templi",
        "testo": "Girare Polonnaruwa in bicicletta è stato un bel cambio di ritmo dopo la salita a Sigiriya del giorno prima. Il sito è più leggero e immediato di Sigiriya, con altrettanta storia.",
        "come": "Bicicletta a noleggio all'ingresso del sito, con o senza guida.",
        "quando": "Biglietteria dalle 7 alle 17. Mattina o pomeriggio; evitare le ore centrali.",
        "tempo": "mezza giornata",
        "url": "https://eservices.ccf.gov.lk/eticketing/landing",
        "costo": "Biglietto del sito per stranieri circa 30 USD (marzo 2026); bicicletta 1.000 LKR (circa 2,5 €); guida 6.000 LKR più la mancia (dal viaggio del 2023)",
        "consiglio": "Pranzo al Priyamali gedara, ristorante di campagna con vista sulle risaie: molto buono."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Da Sigiriya a Polonnaruwa (circa 1 ora e 10)",
          "Giro in bicicletta: Quadrangolo, Vatadage, Gal Vihara",
          "Pranzo al Priyamali gedara",
          "Rientro a Dambulla"
        ]
      }
    ],
    zone: [
      {
        "nome": "Dambulla o Sigiriya",
        "perChi": "gita in giornata",
        "testo": "Polonnaruwa si visita in mezza giornata da Dambulla o Sigiriya, senza dormirci."
      },
      {
        "nome": "Polonnaruwa nuova",
        "perChi": "chi vuole dormire vicino",
        "testo": "Guesthouse e piccoli hotel vicino al lago e al sito; poca vita serale."
      }
    ],
    sapori: [
      {
        "nome": "Rice and curry di campagna",
        "testo": "Il pranzo del Priyamali gedara, con vista sulle risaie."
      },
      {
        "nome": "Frutta e tè",
        "testo": "Banane, papaya e tè al latte lungo le strade del sito."
      },
      {
        "nome": "Kottu",
        "testo": "Roti saltato con verdure nei locali di Polonnaruwa nuova."
      }
    ],
    attenzioni: [
      "Nei templi si entra scalzi, senza scarpe né cappello: la pietra al sole scotta, quindi meglio muoversi la mattina o a fine giornata.",
      "Il biglietto del sito si compra solo alla biglietteria ufficiale: diffidare di chi offre guide o biglietti per strada.",
      "Fare attenzione alle scimmie: non offrire cibo.",
      "Il caldo delle ore centrali è forte: acqua e cappello."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'Il profilo di un Buddha di pietra segnato da crepe contro il cielo nuvoloso di Polonnaruwa',
    immagine: '/images/sri-lanka/polonnaruwa-buddha-profilo-riccardo.jpg',
  },
  {
    slug: 'kandy',
    paeseSlug: 'sri-lanka',
    ordine: 5,
    nome: 'Kandy',
    tipologia: ['cultura', 'religione'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione: 'Il Tempio del Dente con la sua cerimonia serale, il mercato del pesce dove abbiamo trovato i souvenir migliori e il lago in città.',
    percheAndarci: 'Per la cerimonia serale al Tempio del Dente, uno dei momenti più spirituali e sentiti del viaggio.',
    cosaVedere: ['Il Tempio del Dente (Temple of the Tooth)', 'La statua del Buddha di Bahiravokanda', 'Il lago in città'],
    cosaFare: [
      'Il Ranweli Spice Garden, con la visita alla piantagione di spezie',
      'Il Kandy Fish Market, il posto migliore del viaggio per i souvenir (spezie, tessuti)',
      'La cerimonia serale al Tempio del Dente (c\'è la scheda esperienza dedicata)',
    ],
    doveDormire:
      'Abbiamo dormito al Rivendell Hotel: 4/5 su Tripadvisor, ma con pareri contrastanti. A chi piace parla di una posizione tranquilla fuori dal centro e della vista sulle colline; altri lo trovano caro per quello che offre, e la mattina presto si sente il rumore di un tempio vicino.\n\nEconomiche: 256 Townhouse Rest, Sharon Inn Kandy. Fascia media: Hotel Suisse, OZO Kandy. Lusso: Earl\'s Regency, The Grand Kandyan.',
    doveMangiare: 'Il Ranweli Spice Garden a pranzo; un ristorante dell\'India del sud trovato sul posto, economico e ottimo (con gli ordini un po\' di confusione).',
    comeArrivare: "Da Dambulla sono circa 2 ore di auto, con la sosta al Ranweli Spice Garden fatta nel viaggio del 2023. Dall'aeroporto di Colombo (CMB) servono circa 3 ore in auto con autista. In treno da Colombo Fort il viaggio dura circa 2 ore e mezza-3 ore e sale già tra le colline. Da Kandy partono i treni dell'altopiano per Nanu Oya ed Ella: i posti riservati si prenotano in anticipo sul portale di Sri Lanka Railways.",
    comeSpostarsi: 'A piedi in centro.',
    periodoMigliore: 'tardo pomeriggio o sera, per arrivare in tempo alla cerimonia del Tempio del Dente',
    costi: "Ingresso al Tempio del Dente 2.000 LKR nel 2023, 3.000 LKR (circa 9 €) nel 2026. Budget giornaliero indicativo a persona: basso 25-35 € (guesthouse, rice and curry, bus e tuk-tuk), medio 60-100 € (hotel sulle colline, ristoranti, autista), alto da 180 € (hotel di lusso e guida privata).",
    erroriDaEvitare: ['Arrivare al Tempio del Dente all\'ultimo momento: la fila si forma già nel tardo pomeriggio, conviene presentarsi con molto anticipo'],
    miaEsperienza:
      'La cerimonia serale al Tempio del Dente, con i tamburi che cominciano poco prima che cali la luce, è stata uno dei momenti più intensi e spirituali di tutto il viaggio.',
    luoghi: [
      {
        "nome": "Tempio del Dente",
        "testo": "Custodisce la reliquia del dente del Buddha ed è uno dei luoghi più sacri del buddhismo, patrimonio UNESCO con la città di Kandy. La cerimonia serale, con i tamburi che cominciano poco prima che cali la luce, è stato uno dei momenti più intensi e spirituali del viaggio.",
        "come": "A piedi dal centro, sul lago. Si entra scalzi, con spalle e ginocchia coperte; la reliquia è chiusa in sette scrigni d'oro nella camera chiamata Handun Kunama. Pantaloncini e canottiere non sono ammessi; all'ingresso si trovano abiti adatti.",
        "quando": "Aperto ogni giorno dalle 5:30 alle 20. Le cerimonie sono alle 5:30, alle 9:30 e alle 18:30: per quella serale la fila si forma già nel tardo pomeriggio.",
        "tempo": "2 ore",
        "costo": "3.000 LKR (circa 9 €) per stranieri (2026, sito ufficiale), con i musei del complesso; nel 2023 erano 2.000 LKR. Valgono solo i biglietti delle macchinette del tempio.",
        "orari": "Tutti i giorni 5:30-20; cerimonie alle 5:30, alle 9:30 e alle 18:30 (sito ufficiale, 2026).",
        "lat": 7.2936,
        "lng": 80.6414,
        "url": "https://sridaladamaligawa.lk/",
        "consiglio": "Presentarsi con molto anticipo: arrivare all'ultimo momento significa restare in fondo alla fila."
      },
      {
        "nome": "Giardino botanico reale di Peradeniya",
        "testo": "Il giardino botanico più grande dello Sri Lanka, circa 60 ettari in un'ansa del fiume Mahaweli, a una manciata di chilometri dal centro. Era un giardino reale, trasformato dagli inglesi nell'Ottocento: oggi ha il viale delle palme reali, la serra delle orchidee e un enorme ficus di Giava che copre da solo un prato intero.",
        "come": "In tuk-tuk o in bus dal centro di Kandy, circa 20 minuti. Si gira a piedi: i viali sono ombreggiati, ma il giardino è grande.",
        "quando": "Mattina, prima del caldo; nei weekend arrivano molte famiglie del posto.",
        "tempo": "2-3 ore",
        "orari": "Tutti i giorni 7:30-18 (sito ufficiale, 2026).",
        "lat": 7.27111,
        "lng": 80.59556,
        "url": "https://en.botanicgardens.gov.lk/"
      },
      {
        "nome": "Buddha di Bahiravokanda e lago",
        "testo": "Una grande statua del Buddha su una collina sopra la città, con panorama su Kandy e sul lago artificiale al centro.",
        "come": "In tuk-tuk dal centro, pochi minuti.",
        "quando": "Tramonto.",
        "tempo": "1 ora",
        "lat": 7.29558,
        "lng": 80.6309
      },
      {
        "nome": "Danze kandyane",
        "testo": "Lo spettacolo delle danze tradizionali di Kandy, con tamburi, costumi e la camminata sulle braci in chiusura. È pensato per i turisti, ma dura circa un'ora e si incastra bene prima della cerimonia serale al Tempio del Dente.",
        "come": "Alla Kandyan Art Association, sul lato nord del lago, a pochi minuti a piedi dal tempio. Biglietti alla cassa.",
        "quando": "Tardo pomeriggio, prima della cerimonia serale.",
        "tempo": "1 ora",
        "lat": 7.29204,
        "lng": 80.64241
      },
      {
        "nome": "Museo nazionale di Kandy",
        "testo": "Nell'antico palazzo delle regine, accanto al Tempio del Dente, raccoglie gli oggetti del regno di Kandy: armi, gioielli, utensili e documenti fino all'arrivo degli inglesi nel 1815.",
        "come": "A piedi, nel complesso del tempio.",
        "tempo": "45 minuti",
        "lat": 7.29472,
        "lng": 80.64083
      },
      {
        "nome": "Natha Devale e Vishnu Devale",
        "testo": "Accanto al Tempio del Dente ci sono i santuari delle divinità protettrici della città: il Natha Devale, del XIV secolo, è tra gli edifici più antichi di Kandy. Buddhismo e culti di origine indù convivono nello stesso cortile, ed è da qui che parte la processione della Esala Perahera.",
        "come": "A piedi, uscendo dal Tempio del Dente verso nord. Si entra scalzi.",
        "tempo": "30 minuti",
        "lat": 7.2942,
        "lng": 80.6405
      },
      {
        "nome": "Kandy Fish Market",
        "testo": "Il posto migliore del viaggio per i souvenir: spezie, tessuti e prodotti locali, a prezzi più bassi che nei negozi per turisti.",
        "come": "In centro, a piedi.",
        "quando": "Mattina o tardo pomeriggio.",
        "tempo": "1 ora"
      },
      {
        "nome": "Riserva forestale di Udawattakele",
        "testo": "La foresta alle spalle del Tempio del Dente, un tempo riservata ai re di Kandy. Sentieri nel bosco, scimmie, molti uccelli e uno stagno, a pochi minuti a piedi dal centro: il posto giusto per una pausa dal traffico.",
        "come": "A piedi dal tempio, salendo dietro il complesso; il biglietto si paga all'ingresso.",
        "quando": "Mattina presto, per il fresco e per gli uccelli.",
        "tempo": "1-2 ore",
        "lat": 7.29944,
        "lng": 80.63889,
        "consiglio": "Non tenere cibo in vista: le scimmie sono abituate ai visitatori."
      },
      {
        "nome": "Ceylon Tea Museum",
        "testo": "In una vecchia fabbrica di tè del 1925 sulle colline di Hantana, racconta la storia del tè di Ceylon con i macchinari originali. All'ultimo piano c'è una sala da tè con vista sulle colline.",
        "come": "In tuk-tuk dal centro, circa 15-20 minuti di salita sulla strada di Hantana.",
        "tempo": "1 ora e mezza",
        "lat": 7.26861,
        "lng": 80.63266
      },
      {
        "nome": "Cimitero della guarnigione britannica",
        "testo": "Un piccolo cimitero coloniale dietro il Tempio del Dente, con le tombe dei britannici morti a Kandy nell'Ottocento, molti giovanissimi. Le lapidi raccontano la vita della colonia; è un angolo quieto e poco visitato.",
        "come": "A piedi, in salita dalla strada dietro il tempio. Offerta libera al custode.",
        "tempo": "30 minuti",
        "lat": 7.2928,
        "lng": 80.6432
      },
      {
        "nome": "Tempio di Lankatilaka",
        "testo": "Un tempio del XIV secolo in cima a uno sperone di roccia, a ovest di Kandy, con un santuario buddhista e uno dedicato alle divinità indù sotto lo stesso tetto. È il più scenografico dei tre templi dell'ovest, insieme a Gadaladeniya ed Embekke.",
        "come": "In tuk-tuk o auto da Kandy, circa mezz'ora; i tre templi sono vicini e si fanno in un'unica mattina.",
        "quando": "Mattina.",
        "tempo": "45 minuti",
        "lat": 7.23384,
        "lng": 80.56503
      },
      {
        "nome": "Tempio di Gadaladeniya",
        "testo": "Un tempio in pietra del XIV secolo, costruito con l'aiuto di architetti dell'India del sud: lo stile dravidico lo rende diverso da quasi tutti gli altri templi dell'isola.",
        "come": "In tuk-tuk o auto da Kandy, nel giro dei templi dell'ovest.",
        "tempo": "30 minuti",
        "lat": 7.25731,
        "lng": 80.55608
      },
      {
        "nome": "Embekke Devalaya",
        "testo": "Famoso per le colonne di legno della sala dei tamburi, scolpite con ballerini, soldati, aquile a due teste e animali: uno dei capolavori dell'intaglio di Kandy.",
        "come": "In tuk-tuk o auto da Kandy, nel giro dei templi dell'ovest.",
        "tempo": "30 minuti",
        "lat": 7.21792,
        "lng": 80.56772
      },
      {
        "nome": "Ranweli Spice Garden",
        "testo": "Una visita alla piantagione di spezie con pranzo, sulla strada da Dambulla a Kandy.",
        "come": "Sosta lungo il trasferimento da Dambulla, circa 2 ore di van.",
        "tempo": "1 ora e mezza"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Arrivo da Dambulla con sosta al Ranweli Spice Garden",
          "Pomeriggio: mercato del pesce e lago",
          "Fine pomeriggio: Tempio del Dente con anticipo",
          "Cerimonia serale"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: mercato e lago, danze kandyane nel tardo pomeriggio, cerimonia serale al Tempio del Dente",
          "Giorno 2: giardino botanico di Peradeniya al mattino, Ceylon Tea Museum, tramonto al Buddha di Bahiravokanda"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Tempio del Dente con la cerimonia delle 9:30, museo nazionale e devale, cerimonia serale",
          "Giorno 2: Peradeniya e i templi di Gadaladeniya, Lankatilaka ed Embekke",
          "Giorno 3: Udawattakele al mattino, Ceylon Tea Museum, danze kandyane e Bahiravokanda al tramonto (oppure la gita ad Ambuluwawa)"
        ]
      }
    ],
    zone: [
      {
        "nome": "Fuori dal centro",
        "perChi": "tranquillità",
        "testo": "Hotel sulle colline come il Rivendell, con vista, ma lontani dal tempio. Si dorme meglio, ma la mattina presto si sente un tempio vicino.",
        "fascia": "40-100 €"
      },
      {
        "nome": "Vicino al lago",
        "perChi": "visite a piedi",
        "testo": "Hotel e guesthouse a pochi minuti dal tempio e dal mercato. Più traffico e rumore.",
        "fascia": "25-70 €"
      },
      {
        "nome": "Hotel di lusso fuori città",
        "perChi": "piscina e comfort",
        "testo": "Earl's Regency e The Grand Kandyan, con piscina e vista sulle colline. Per il centro servono tuk-tuk o auto.",
        "fascia": "120-250 €"
      }
    ],
    sapori: [
      {
        "nome": "Rice and curry del sud dell'India",
        "testo": "In un ristorante dell'India del sud trovato sul posto: economico e ottimo, anche se con gli ordini un po' di confusione."
      },
      {
        "nome": "Spezie",
        "testo": "Cardamomo, cannella e pepe dal giardino delle spezie e dal mercato."
      },
      {
        "nome": "Dosa e idli",
        "testo": "Crêpe e tortini di riso fermentato, nei locali di cucina indiana."
      },
      {
        "nome": "Tè di Kandy",
        "testo": "Tè nero dell'altopiano, in confezioni nei negozi del centro."
      }
    ],
    attenzioni: [
      "Al Tempio del Dente si entra scalzi, con spalle e ginocchia coperte, senza voltare le spalle alle statue per le foto.",
      "Il tempio non è un museo: nei giorni di festa e di luna piena (poya) è affollatissimo di pellegrini.",
      "I «tour delle spezie» a pagamento vendono prodotti a prezzi alti: confrontare con il mercato.",
      "Concordare il prezzo del tuk-tuk prima di salire."
    ],
    gite: [
      {
        "nome": "Kitulgala e il rafting sul Kelani",
        "distanza": "circa 2 ore in auto",
        "come": "In van o auto con autista; il rafting si organizza con un operatore sul posto o con il DMC.",
        "testo": "Il fiume dove fu girato Il ponte sul fiume Kwai, con rapide adatte anche a chi non ha mai fatto rafting. Con l'operatore si aggiungono canyoning, tuffi in cascata e una camminata nella giungla. Sta sulla strada verso l'Adam's Peak."
      },
      {
        "nome": "Torre di Ambuluwawa",
        "distanza": "circa 1 ora in auto",
        "come": "In auto o tuk-tuk via Gampola, poi una strada stretta fino in cima alla collina.",
        "testo": "Una torre a spirale in cima a una collina, con una scala esterna che si stringe fino alla punta e vista a 360 gradi sulle montagne. Sul colle convivono i luoghi di culto di quattro religioni."
      },
      {
        "nome": "Monti Knuckles",
        "distanza": "circa 2 ore in auto",
        "come": "Con autista fino a Riverston o Deanston, poi a piedi con una guida locale.",
        "testo": "La catena dei Knuckles, patrimonio UNESCO con gli altopiani centrali, ha sentieri tra foreste nebulose, cascate e villaggi. Da Kandy si fa una giornata di trekking."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Kandy?",
        "risposta": "Un giorno basta per il Tempio del Dente, il lago e la cerimonia serale. Con due si aggiungono il giardino di Peradeniya e il museo del tè; con tre i templi dell'ovest o una gita."
      },
      {
        "domanda": "A che ora è la cerimonia al Tempio del Dente?",
        "risposta": "Le cerimonie sono alle 5:30, alle 9:30 e alle 18:30 (sito ufficiale, 2026). Per quella serale conviene mettersi in fila dal tardo pomeriggio."
      },
      {
        "domanda": "Come ci si veste per il Tempio del Dente?",
        "risposta": "Spalle e ginocchia coperte, e si entra scalzi. Pantaloncini e canottiere non sono ammessi; all'ingresso si trovano abiti adatti."
      },
      {
        "domanda": "Come si va da Kandy a Ella?",
        "risposta": "In treno sulla linea dell'altopiano, circa 7 ore sulla carta e spesso di più: è la tratta più panoramica dell'isola. I posti riservati vanno prenotati con largo anticipo; in alternativa si va in auto con autista."
      },
      {
        "domanda": "Quando c'è la Esala Perahera?",
        "risposta": "La grande processione di Kandy si tiene tra luglio e agosto, con date che cambiano ogni anno secondo il calendario lunare. In quei giorni gli hotel si riempiono e i prezzi salgono: conviene prenotare molto prima."
      },
      {
        "domanda": "Meglio dormire vicino al lago o sulle colline?",
        "risposta": "Vicino al lago si va a piedi al tempio e al mercato, con più traffico e rumore. Sulle colline si dorme meglio e con vista, ma ogni spostamento è in tuk-tuk."
      }
    ],
    esperienzeSlugs: ['tempio-del-dente'],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'Sagome di fedeli in silenzio davanti al reliquiario d\'oro del Tempio del Dente di Kandy',
    immagine: '/images/sri-lanka/kandy-tempio-dente-reliquiario-riccardo.jpg',
  },
  {
    slug: 'nallathanniya',
    paeseSlug: 'sri-lanka',
    ordine: 6,
    nome: 'Nallathanniya e Adam\'s Peak',
    tipologia: ['trekking', 'religione', 'avventura'],
    giorniConsigliati: '1 giorno e mezzo, compreso il rafting a Kitulgala',
    visitataPersonalmente: true,
    introduzione: 'Il rafting sul fiume Kelani a Kitulgala e la scalata notturna dell\'Adam\'s Peak, la vera prova fisica del viaggio.',
    percheAndarci: 'Per la salita di notte fino all\'alba in cima, insieme a centinaia di pellegrini locali. Vale più per il percorso che per la meta.',
    cosaVedere: ['Il fiume Kelani, dove fu girato Il ponte sul fiume Kwai', 'L\'alba dalla cima dell\'Adam\'s Peak (2.243 m)'],
    cosaFare: [
      'Rafting sul fiume Kelani a Kitulgala (c\'è la scheda esperienza dedicata)',
      'Scalata notturna dell\'Adam\'s Peak (2h30-3h di salita; c\'è la scheda esperienza dedicata)',
    ],
    doveDormire:
      'La nostra base per la scalata è stata il Wathsala Inn, 3/5 su Tripadvisor: bella vista sulla valle e sul Peak, personale gentile, ma molte recensioni segnalano problemi di manutenzione (docce, lenzuola, infiltrazioni). Va preso per quello che è, un appoggio essenziale per partire di notte, non un posto da vacanza.\n\nEconomiche: Slightly Chilled, Sun Mount Adam\'s Peak. Fascia media: White House Adam\'s Peak, Adams Peak Grand. Strutture di lusso vere qui non ce ne sono: è il villaggio da cui parte il trekking.',
    doveMangiare: 'Cena in hotel prima della partenza notturna.',
    comeArrivare: 'Circa 2h di trasferimento da Kandy, passando da Kitulgala.',
    comeSpostarsi: 'A piedi per tutta la scalata.',
    periodoMigliore: 'la stagione del pellegrinaggio, dicembre-maggio, per il percorso illuminato (che però è anche più affollato)',
    costi: 'Quanto costassero il rafting e le attività extra a Kitulgala non me lo sono segnato: si concordano con l\'operatore.',
    erroriDaEvitare: ['Salire senza una felpa: in cima all\'alba fa freddo e tira vento (3-6 °C nel viaggio del 2023)'],
    miaEsperienza:
      'La notte sull\'Adam\'s Peak, in fila indiana con centinaia di pellegrini locali su una scalinata tutta illuminata, è stata la vera prova fisica del viaggio. In cima il freddo taglia, ma salire insieme a chi lo fa per fede, e non per turismo, conta più dell\'alba stessa.',
    luoghi: [
      {
        "nome": "Adam's Peak (Sri Pada)",
        "testo": "Una montagna di 2.243 metri sacra a buddhisti, indù, musulmani e cristiani. Si sale di notte lungo una scalinata tutta illuminata, in fila indiana con centinaia di pellegrini locali, per arrivare in cima all'alba. Ho trovato che conti più il percorso della meta.",
        "come": "Si parte a piedi dal villaggio di Nallathanniya, nel cuore della notte; la salita richiede alcune ore (2 ore e mezza-3 ore nel viaggio del 2023).",
        "quando": "Stagione del pellegrinaggio, da dicembre a maggio, con il percorso illuminato; aprile è il mese più affollato.",
        "tempo": "6-7 ore tra salita, alba e discesa",
        "consiglio": "In cima all'alba fa freddo e tira vento (3-6 °C nel viaggio del 2023): portare una felpa."
      },
      {
        "nome": "Rafting a Kitulgala",
        "testo": "Rafting sul fiume Kelani, lo stesso dove fu girato Il ponte sul fiume Kwai.",
        "come": "Con un operatore di Kitulgala, sulla strada da Kandy verso Nallathanniya.",
        "tempo": "mezza giornata",
        "costo": "Quanto costasse non me lo sono segnato: si concorda con l'operatore."
      },
      {
        "nome": "Fiume Kelani",
        "testo": "Il fiume che attraversa Kitulgala, tra foresta e rapide, con la zona del set del film.",
        "come": "Dalla strada principale di Kitulgala.",
        "tempo": "1 ora"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno e mezzo",
        "tappe": [
          "Mattina: rafting a Kitulgala sulla strada da Kandy",
          "Pomeriggio: arrivo a Nallathanniya, riposo e cena presto",
          "Notte: partenza per l'Adam's Peak",
          "Alba in cima e discesa, poi trasferimento"
        ]
      }
    ],
    zone: [
      {
        "nome": "Nallathanniya",
        "perChi": "chi sale di notte",
        "testo": "Il villaggio da cui parte il sentiero: guesthouse essenziali come il Wathsala Inn, con vista sulla valle. Non è un posto da vacanza."
      },
      {
        "nome": "Hatton",
        "perChi": "più comodità",
        "testo": "Città vicina con più scelta di alloggi e ristoranti, ma più lontana dall'inizio del sentiero: la vetta è a circa 32 km."
      }
    ],
    sapori: [
      {
        "nome": "Cena in hotel",
        "testo": "Riso e curry prima della partenza notturna, in hotel o guesthouse."
      },
      {
        "nome": "Tè caldo in salita",
        "testo": "Lungo la scalinata ci sono piccole bancarelle di tè e biscotti per i pellegrini."
      },
      {
        "nome": "Roti",
        "testo": "Pane piatto ripieno, per colazione al ritorno."
      }
    ],
    attenzioni: [
      "Salire senza una felpa: in cima all'alba fa freddo e tira vento.",
      "La scalinata è molto affollata nella stagione del pellegrinaggio: tenere il passo del flusso e non fermarsi sui gradini.",
      "Portare una torcia frontale e scarpe con buona presa: la scalinata è illuminata, ma conviene averla comunque.",
      "Con la nebbia o la pioggia la salita è scivolosa: valutare le condizioni prima di partire."
    ],
    esperienzeSlugs: ['rafting-kitulgala', 'scalata-adams-peak'],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: "Il santuario sulla vetta dell'Adam's Peak e la scalinata dei pellegrini sul costone verde, tra le nubi basse",
    immagine: '/images/sri-lanka/adams-peak-vetta-riccardo.jpg',
  },
  {
    slug: 'nuwara-eliya',
    paeseSlug: 'sri-lanka',
    ordine: 7,
    nome: 'Nuwara Eliya',
    tipologia: ['natura', 'relax'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione: 'La "piccola Inghilterra" dello Sri Lanka, a 1.868 metri di quota, tra piantagioni di tè e l\'altopiano di Horton Plains.',
    percheAndarci: 'Per il cambio di clima e di paesaggio rispetto al resto del viaggio: tè, aria fresca e, per chi vuole, uno dei trekking più belli dell\'isola.',
    cosaVedere: ['La Pedro Tea Plantation e la sua fabbrica del tè', 'World\'s End a Horton Plains, il bordo dell\'altopiano con uno strapiombo di 870 metri'],
    cosaFare: [
      'Visita alla piantagione di tè Pedro',
      'Relax: massaggio, cerimonia del tè al Grand Hotel, Victoria Park, cascata di Lover\'s Leap',
      'Avventura: trekking a World\'s End, a Horton Plains (3h)',
    ],
    doveDormire:
      'Abbiamo dormito all\'Araliya RED, uno dei più prenotati della zona, 4/5 con quasi 2.000 recensioni: la piscina riscaldata piace molto, il personale è ospitale e dal rooftop si vede la città. Qualcuno segnala rumori dalle camere vicine e odore di gasolio all\'ingresso.\n\nEconomiche: Galaxy Grand Hotel, Star Gate Private Villa. Fascia media: Jetwing St. Andrew\'s, Clifton Inn. Lusso: Heritance Tea Factory, The Grand Hotel Nuwara Eliya.',
    doveMangiare: 'De Silva Food Center, Grand Indian, Grand Thai o Themparadu (il più locale); dopocena al Lakeview Pub.',
    comeArrivare: 'Trasferimento da Hatton/Nallathanniya, passando dalla Pedro Tea Plantation.',
    comeSpostarsi: 'Van privato per Horton Plains, a piedi in città.',
    periodoMigliore: 'una giornata di sole per il trekking a World\'s End',
    costi: 'Attività a Nuwara Eliya (massaggio, cerimonia del tè) 5.000-8.000 LKR.',
    erroriDaEvitare: [],
    miaEsperienza:
      'Il trasferimento alla Pedro Tea Plantation è stato molto più breve del previsto, e così mi è rimasto più tempo per il pomeriggio libero tra le vallate di tè verdissime intorno a Nuwara Eliya.',
    luoghi: [
      {
        "nome": "Pedro Tea Plantation",
        "testo": "Una piantagione con la sua fabbrica del tè, dove si segue la lavorazione dalle foglie alla tazza. Il trasferimento da Nallathanniya è stato molto più breve del previsto, e così mi è rimasto più tempo per il pomeriggio libero tra le vallate di tè.",
        "come": "Circa 3,5 km a est di Nuwara Eliya, sulla strada per Kandapola: in van o tuk-tuk. Vicino c'è la cascata di Lover's Leap.",
        "quando": "Mattina o primo pomeriggio.",
        "tempo": "1 ora"
      },
      {
        "nome": "World's End a Horton Plains",
        "testo": "Il bordo dell'altopiano di Horton Plains, oltre i 2.000 metri, con uno strapiombo di 870 metri sulla pianura sottostante. Il trekking è un anello di circa 9,5 km, 3 ore a passo tranquillo, tra praterie e foresta nebulosa, con la deviazione per le Baker's Falls. Nel parco è vietato portare plastica: i sacchetti abbandonati hanno ucciso diversi sambar, i cervi del parco.",
        "come": "In van da Nuwara Eliya, partendo all'alba; si cammina a piedi su un sentiero segnalato. L'ingresso apre alle 6.",
        "quando": "Presto la mattina: poi arrivano nebbia e nuvole e la vista sparisce. Una giornata di sole è necessaria.",
        "tempo": "3 ore di cammino più il trasferimento",
        "costo": "Ingresso al parco circa 25 USD a persona per gli adulti stranieri, più tasse, servizio e veicolo (2026)",
        "consiglio": "Partire all'alba da Nuwara Eliya, per arrivare al bordo prima delle nuvole."
      },
      {
        "nome": "Victoria Park e laghetto",
        "testo": "Un parco ordinato in stile inglese, con aiuole e uccelli, nel cuore della «piccola Inghilterra» dello Sri Lanka.",
        "come": "A piedi dal centro.",
        "tempo": "1 ora"
      },
      {
        "nome": "Cerimonia del tè e relax",
        "testo": "Il tè pomeridiano al Grand Hotel, un massaggio o una passeggiata alla cascata di Lover's Leap, alta circa 30 metri tra le piantagioni.",
        "tempo": "mezza giornata",
        "costo": "Attività 5.000-8.000 LKR (dal viaggio del 2023)"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina presto: World's End a Horton Plains",
          "Pranzo a Nuwara Eliya",
          "Pomeriggio: Pedro Tea Plantation e tè al Grand Hotel"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro di Nuwara Eliya",
        "perChi": "chi vuole camminare",
        "testo": "Hotel e ristoranti a pochi minuti da parco e mercato. Più rumore e traffico."
      },
      {
        "nome": "Colline del tè",
        "perChi": "vista e calma",
        "testo": "Piantagioni e resort di charme come l'Heritance Tea Factory, più lontani dal centro."
      }
    ],
    sapori: [
      {
        "nome": "Tè di Nuwara Eliya",
        "testo": "Il tè delle piantagioni di altura, chiaro e profumato, da assaggiare in fabbrica o al Grand Hotel."
      },
      {
        "nome": "Ristoranti locali",
        "testo": "De Silva Food Center, Grand Indian, Grand Thai o Themparadu, il più locale."
      },
      {
        "nome": "Fragole",
        "testo": "Il clima fresco le fa crescere in altura: si vendono sul bordo delle strade."
      },
      {
        "nome": "Verdure di altura",
        "testo": "Carote, cavoli e patate coltivati sulle terrazze, nei curry locali."
      }
    ],
    attenzioni: [
      "Il freddo: a 1.868 metri di quota le sere sono fresche e a Horton Plains fa più freddo ancora. Portare un pile.",
      "A World's End senza sole il panorama non c'è: controllare le condizioni e partire presto.",
      "Non portare plastica monouso a Horton Plains, dove è vietata.",
      "Sui sentieri restare sempre sul percorso segnalato: ci sono dirupi non protetti."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'Le vallate di tè verdi attorno a Nuwara Eliya, Sri Lanka',
    immagine: '/images/sri-lanka/nuwara-eliya-stock.jpg',
  },
  {
    slug: 'ella',
    paeseSlug: 'sri-lanka',
    ordine: 8,
    nome: 'Ella',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '1 giorno, più il treno panoramico per arrivarci',
    visitataPersonalmente: true,
    introduzione: 'Il treno panoramico da Nuwara Eliya, il Nine Arches Bridge e i belvedere sulle colline del tè più fotografate dello Sri Lanka.',
    percheAndarci: 'Per il treno panoramico più famoso dell\'isola e per i tanti belvedere a due passi dal villaggio.',
    cosaVedere: ['Il Nine Arches Bridge', 'Lipton\'s Seat', 'Le cascate di Ravana, a circa 6 km da Ella'],
    cosaFare: [
      'Il treno panoramico Nuwara Eliya-Ella (c\'è la scheda esperienza dedicata)',
      'La zip line Flying Ravana (circa 20€, a 15 minuti da Ella)',
      'Un massaggio alla Spa Ceylon',
      'La cooking class con cena organizzata dal DMC',
    ],
    doveDormire:
      'Abbiamo dormito all\'88th Hotel, 4/5 su Tripadvisor e uno dei posti più consigliati della zona: centrale, vicino a Ella Rock e al Nine Arches Bridge, con un\'accoglienza calorosa. Meglio partire con le aspettative giuste: niente aria condizionata, niente ascensore, letto rigido con solo le lenzuola.\n\nEconomiche: Ella Alpine Resort, Rock Side Inn. Fascia media: Arawe Retreat, Zion View Ella Green Retreat. Lusso: 98 Acres Resort & Spa, Nine Skies.',
    doveMangiare: 'Cooking class con cena del DMC; dopocena al One Love Ella (attenzione ai drink offerti al tavolo, che spesso finiscono nel conto).',
    comeArrivare: "Il modo classico è il treno panoramico da Nanu Oya, la stazione di Nuwara Eliya: sulla carta 3 ore, ma gli orari reali sono imprevedibili. Da Kandy lo stesso treno impiega circa 7 ore sulla carta. In auto con autista, da Nuwara Eliya servono circa 2 ore e mezza e da Yala circa 2 ore; dall'aeroporto di Colombo è una giornata di strada. I posti riservati si prenotano sul portale di Sri Lanka Railways.",
    comeSpostarsi: 'A piedi per i belvedere vicini al villaggio.',
    periodoMigliore: 'non ho indicazioni precise sulla stagione migliore per Ella: noi ci siamo stati a novembre',
    costi: "Zip line Flying Ravana circa 20 € (2023); Nine Arches Bridge gratuito. Budget giornaliero indicativo a persona: basso 25-35 € (guesthouse in paese, rice and curry, tuk-tuk), medio 60-100 € (hotel sulle colline, cooking class, un'attività), alto da 200 € (resort di lusso, autista privato).",
    erroriDaEvitare: ['Aspettare a prenotare i biglietti del treno panoramico: vanno presi con molto anticipo, perché finiscono subito, soprattutto in alta stagione'],
    miaEsperienza:
      'Il treno panoramico è arrivato con ore di ritardo e senza niente da mangiare a bordo. Le vallate di tè a perdita d\'occhio viste dal finestrino, però, sono tra le immagini più belle di tutto il viaggio. Bisogna salirci con lo spirito giusto: i ritardi sono la norma.',
    luoghi: [
      {
        "nome": "Treno panoramico Nuwara Eliya-Ella",
        "testo": "Il tratto più famoso della ferrovia dell'altopiano, tra vallate di tè a perdita d'occhio. Il treno è arrivato con ore di ritardo e senza niente da mangiare a bordo, ma le immagini dal finestrino sono tra le più belle del viaggio.",
        "come": "Si sale alla stazione di Nanu Oya, per Nuwara Eliya; sulla carta 3 ore, ma gli orari reali sono imprevedibili.",
        "quando": "Mattina. I posti riservati si prenotano sul portale ufficiale di Sri Lanka Railways e si ritirano allo sportello con il codice e il passaporto: vanno presi con molto anticipo, perché finiscono subito, soprattutto in alta stagione.",
        "tempo": "3 ore sulla carta (viaggio del 2023), spesso molte di più",
        "url": "https://seatreservation.railway.gov.lk/mtktwebslr/",
        "consiglio": "Salire con lo spirito giusto: i ritardi sono la norma. Portare cibo e acqua."
      },
      {
        "nome": "Nine Arches Bridge",
        "testo": "Un viadotto ferroviario a nove archi in pietra, mattoni e cemento, finito nel 1919: è lungo 91 metri e alto 24, immerso nella giungla. Il momento di maggiore fascino è quando passa il treno.",
        "come": "A Demodara, tra le stazioni di Ella e Demodara: in tuk-tuk e poi a piedi su un sentiero.",
        "quando": "Quando passa un treno: chiedere gli orari in guesthouse.",
        "tempo": "1 ora",
        "costo": "Gratuito (viaggio del 2023)",
        "lat": 6.87667,
        "lng": 81.06111,
        "consiglio": "Non camminare sui binari quando arriva il treno."
      },
      {
        "nome": "Little Adam's Peak",
        "testo": "La camminata più facile e più bella di Ella: un sentiero tra le piantagioni di tè porta in cima a una collina con vista sulla valle e sull'Ella Gap. Il nome viene dalla forma, che ricorda quella dell'Adam's Peak.",
        "come": "A piedi dal paese lungo la strada per Passara, poi il sentiero tra il tè: circa 45 minuti di salita senza difficoltà.",
        "quando": "Alba o mattina presto, prima del caldo e delle nuvole.",
        "tempo": "2 ore andata e ritorno",
        "lat": 6.86505,
        "lng": 81.06302
      },
      {
        "nome": "Ella Rock",
        "testo": "Una salita più lunga e impegnativa, tra binari, piantagioni e bosco, fino a uno sperone di roccia sopra la valle. Il panorama vale la fatica, ma il sentiero non è sempre segnato.",
        "come": "A piedi da Ella, in parte lungo la ferrovia; chi non vuole perdersi prende una guida locale.",
        "quando": "Partire all'alba: a metà mattina le nuvole coprono spesso la vista.",
        "tempo": "4-5 ore andata e ritorno",
        "lat": 6.85472,
        "lng": 81.05194,
        "consiglio": "Diffidare di chi indica «scorciatoie» lungo il sentiero e poi chiede soldi per riportare sulla strada giusta."
      },
      {
        "nome": "Cascate di Ravana",
        "testo": "Una cascata a più salti alta circa 25 metri, lungo la strada per Wellawaya, a circa 6 km da Ella. La leggenda del Ramayana la lega al re Ravana, che avrebbe nascosto qui la principessa Sita.",
        "come": "In tuk-tuk o in bus verso Wellawaya: si vede dalla strada.",
        "quando": "Durante e dopo le piogge, quando porta più acqua.",
        "tempo": "30 minuti",
        "lat": 6.84083,
        "lng": 81.05444
      },
      {
        "nome": "Lipton's Seat",
        "testo": "Il belvedere sulle piantagioni di tè della tenuta di Dambatenne, che porta il nome di Thomas Lipton, il re del tè. Non è a Ella ma sopra Haputale: vale la gita se il cielo è limpido.",
        "come": "In van o tuk-tuk da Ella fino a Haputale, poi su per la strada della tenuta di Dambatenne.",
        "quando": "Mattina presto, prima delle nuvole.",
        "tempo": "mezza giornata da Ella",
        "lat": 6.78068,
        "lng": 81.0155
      },
      {
        "nome": "Zip line Flying Ravana",
        "testo": "Una zip line su due cavi lunga 550 metri, tra le colline sopra Ella. Si parte da Mini Adam's Peak e si scende sopra le piantagioni di tè.",
        "come": "In tuk-tuk da Ella, pochi minuti (circa 15 nel viaggio del 2023).",
        "tempo": "1 ora e mezza",
        "costo": "Circa 20 € (dal viaggio del 2023)",
        "lat": 6.86598,
        "lng": 81.06207,
        "url": "https://www.flyingravana.com/"
      },
      {
        "nome": "Grotta di Ravana",
        "testo": "Una grotta nella roccia sopra la valle, legata anch'essa alla leggenda di Ravana e Sita. Dentro c'è poco da vedere: vale soprattutto per la salita e per la vista.",
        "come": "In tuk-tuk fino alla base, poi una lunga scalinata ripida.",
        "quando": "Mattina, prima del caldo.",
        "tempo": "1 ora",
        "lat": 6.86438,
        "lng": 81.04854
      },
      {
        "nome": "Fabbrica del tè Uva Halpewatte",
        "testo": "Una fabbrica di tè ancora in attività, sulle colline a nord di Ella. La visita guidata segue la lavorazione dalla foglia appena colta al tè confezionato e finisce con una degustazione.",
        "come": "In tuk-tuk da Ella, su una strada di montagna.",
        "quando": "Mattina, quando in fabbrica si lavorano le foglie.",
        "tempo": "1 ora",
        "lat": 6.88956,
        "lng": 81.03477
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Treno panoramico da Nanu Oya (ritardi possibili)",
          "Arrivo a Ella e pranzo",
          "Pomeriggio: Nine Arches Bridge all'ora del treno",
          "Cooking class con cena"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: treno panoramico e Nine Arches Bridge",
          "Giorno 2: Lipton's Seat all'alba (sopra Haputale), poi zip line e massaggio nel pomeriggio"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: treno panoramico da Nanu Oya, poi Nine Arches Bridge al passaggio del treno",
          "Giorno 2: Little Adam's Peak all'alba, zip line, fabbrica del tè di Halpewatte, cooking class la sera",
          "Giorno 3: Ella Rock all'alba e cascate di Ravana nel pomeriggio, oppure la gita a Lipton's Seat"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro di Ella",
        "perChi": "comodità e vita serale",
        "testo": "Guesthouse come l'88th Hotel, vicino a Ella Rock e al Nine Arches Bridge. Rumoroso la sera lungo la strada principale.",
        "fascia": "25-70 €"
      },
      {
        "nome": "Colline fuori dal centro",
        "perChi": "chi cerca vista e calma",
        "testo": "Resort e ville tra le piantagioni, con panorami ampi. Servono tuk-tuk per il paese.",
        "fascia": "60-150 €"
      },
      {
        "nome": "Resort di lusso",
        "perChi": "una notte speciale",
        "testo": "98 Acres Resort & Spa, tra le piantagioni sotto il Little Adam's Peak, e Nine Skies, più isolato. Bungalow con vista e piscina; il paese si raggiunge in tuk-tuk.",
        "fascia": "180-350 €"
      }
    ],
    sapori: [
      {
        "nome": "Cooking class",
        "testo": "Si impara a fare curry di cocco, sambol e dal; la cena è parte della lezione."
      },
      {
        "nome": "Kottu",
        "testo": "Roti a strisce saltato con verdure e uova, nei locali della strada principale."
      },
      {
        "nome": "Tè delle colline",
        "testo": "Dalle piantagioni intorno a Ella, nelle caffetterie con vista."
      },
      {
        "nome": "Rice and curry",
        "testo": "Il pasto base, in ogni guesthouse."
      }
    ],
    attenzioni: [
      "Treno panoramico: i biglietti finiscono subito e i ritardi di ore sono la norma. Prenotare con largo anticipo e non fissare coincidenze strette.",
      "One Love Ella e simili: i drink offerti al tavolo spesso finiscono nel conto.",
      "Alcune camere non hanno aria condizionata, ascensore o letti morbidi: leggere bene la descrizione prima di prenotare.",
      "Sui binari del Nine Arches Bridge non fermarsi quando arriva un treno."
    ],
    gite: [
      {
        "nome": "Cascate di Diyaluma",
        "distanza": "circa 1 ora e mezza in auto",
        "come": "In auto o tuk-tuk via Wellawaya e Koslanda; per le pozze in alto si sale a piedi, meglio con una guida del villaggio.",
        "testo": "La seconda cascata più alta dello Sri Lanka, circa 220 metri. In cima ci sono pozze naturali dove fare il bagno con vista sulla pianura."
      },
      {
        "nome": "Buduruvagala",
        "distanza": "circa 1 ora in auto",
        "come": "In auto via Wellawaya, poi qualche chilometro di strada secondaria.",
        "testo": "Sette figure scolpite nella roccia intorno al X secolo, con un Buddha in piedi di circa 15 metri, in mezzo alla foresta e quasi senza turisti."
      },
      {
        "nome": "Parco nazionale di Yala",
        "distanza": "circa 2 ore in auto",
        "come": "Con autista partendo prestissimo; il safari si fa in jeep con guida.",
        "testo": "Il parco con la più alta densità di leopardi al mondo, con elefanti, coccodrilli, bufali e molti uccelli. Il safari dura circa quattro ore e costava 12.000-16.000 LKR a jeep più l'ingresso (viaggio del 2023)."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Ella?",
        "risposta": "Un giorno basta per il treno e il Nine Arches Bridge. Con due o tre si aggiungono le camminate dell'alba (Little Adam's Peak, Ella Rock), la zip line e la gita a Lipton's Seat."
      },
      {
        "domanda": "Come si prenota il treno per Ella?",
        "risposta": "I posti riservati si comprano sul portale ufficiale di Sri Lanka Railways e si ritirano allo sportello con il codice e il passaporto. Finiscono presto, soprattutto in alta stagione: conviene prenotare appena aprono le vendite."
      },
      {
        "domanda": "Il treno panoramico è puntuale?",
        "risposta": "Quasi mai: i ritardi di ore sono la norma e a bordo non c'è niente da mangiare. Meglio non fissare coincidenze strette e portare acqua e cibo."
      },
      {
        "domanda": "Little Adam's Peak o Ella Rock?",
        "risposta": "Little Adam's Peak è facile, circa 45 minuti di salita, adatto a tutti. Ella Rock è più lunga e meno segnata, ma più selvaggia: è per chi ha tempo e gambe."
      },
      {
        "domanda": "Quando passa il treno sul Nine Arches Bridge?",
        "risposta": "I treni passano più volte al giorno, tra mattina e tardo pomeriggio, ma gli orari non sono affidabili. Conviene chiedere in guesthouse e aspettare sul belvedere con un buon margine."
      },
      {
        "domanda": "Da Ella si va a Yala in giornata?",
        "risposta": "Sì: sono circa 2 ore di strada, partendo prestissimo per il safari del mattino. Molti poi proseguono verso la costa sud."
      }
    ],
    esperienzeSlugs: ['treno-panoramico-ella'],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'Una vecchia locomotiva con il faro acceso tra i binari erbosi degli altipiani dello Sri Lanka',
    immagine: '/images/sri-lanka/treno-locomotiva-altipiani-riccardo.jpg',
  },
  {
    slug: 'hikkaduwa',
    paeseSlug: 'sri-lanka',
    ordine: 9,
    nome: 'Hikkaduwa',
    tipologia: ['mare', 'relax'],
    giorniConsigliati: '2-3 giorni, compreso il safari a Yala lungo il tragitto',
    visitataPersonalmente: true,
    introduzione: 'Il safari al Parco Nazionale di Yala e le spiagge del sud: la parte rilassata del viaggio, dopo giorni di templi e trekking.',
    percheAndarci: 'Per chiudere il viaggio al mare, dopo tutti i templi, i safari e i trekking dei giorni prima.',
    cosaVedere: ['Il Parco Nazionale di Yala', 'Il Tsunami Museum'],
    cosaFare: [
      'Safari a Yala, uno dei parchi con la più alta densità di leopardi al mondo (c\'è la scheda esperienza dedicata)',
      'Nuotare con le tartarughe: il punto migliore è davanti all\'Hikka Tranz by Cinnamon Hotel',
      'Tsunami Museum',
      'Big Buddha, surf, snorkeling, diving, boat safari sul fiume Madu',
    ],
    doveDormire:
      'Abbiamo dormito al Sapphire Seas Beachfront Hotel, con recensioni molto positive: un hotel boutique proprio sul mare, camere spaziose e una pulizia che citano in tanti. Qualcuno lo descrive come "un\'oasi" rispetto alle zone più trafficate di Hikkaduwa.\n\nEconomiche: Hilda Guest House, Amaroo Hikkaduwa. Fascia media: Sea Star Boutique Hotel, Hikka Tranz by Cinnamon. Lusso: Crystal Sands, Aditya Resort.',
    doveMangiare: 'Cena in spiaggia (abbiamo preso il red snapper: servizio lento ma cena ottima); Steffi\'s Mandala (vegetariano) o Thambili Cafe a pranzo; Sea Salt Society o Canal View a cena.',
    comeArrivare: 'Circa 2h15-2h40 di trasferimento da Ella, passando dal safari a Yala.',
    comeSpostarsi: 'A piedi in spiaggia.',
    periodoMigliore: 'novembre, quando ci siamo stati, anche se tra un monsone e l\'altro sulla costa possono arrivare piogge e temporali',
    costi: 'Safari a Yala 12.000-16.000 LKR a jeep, più l\'ingresso (27-30€ a persona) e la mancia.',
    erroriDaEvitare: ['Fidarsi dei "pescatori sui pali" lungo la costa sud: ormai sono quasi sempre una messa in scena a pagamento per turisti'],
    miaEsperienza:
      'Dopo giorni pieni di templi e trekking, le spiagge di Hikkaduwa sono state il modo giusto per chiudere il viaggio. Il red snapper mangiato in spiaggia una sera, con il servizio lento e il mare a due passi, è uno dei ricordi più veri di tutto lo Sri Lanka.',
    luoghi: [
      {
        "nome": "Parco Nazionale di Yala",
        "testo": "Uno dei parchi con la più alta densità di leopardi al mondo, dove in safari si vedono anche elefanti, coccodrilli e uccelli.",
        "come": "In jeep con guida, sulla strada da Ella a Hikkaduwa; il safari dura alcune ore.",
        "quando": "Primo mattino o tardo pomeriggio, quando gli animali sono attivi.",
        "tempo": "4 ore",
        "costo": "Jeep 12.000-16.000 LKR, più l'ingresso (27-30 € a persona) e la mancia (dal viaggio del 2023); l'ingresso base è circa 25 USD per gli adulti stranieri, più tasse, servizio e veicolo (2026)",
        "consiglio": "I leopardi non sono garantiti: chiedere all'autista dove sono stati avvistati."
      },
      {
        "nome": "Nuotare con le tartarughe",
        "testo": "Il punto migliore a Hikkaduwa è davanti all'Hikka Tranz by Cinnamon Hotel, dove le tartarughe marine vengono a brucare l'alga.",
        "come": "Dalla spiaggia, con maschera e pinne.",
        "quando": "Mattina, con il mare calmo.",
        "tempo": "1-2 ore",
        "consiglio": "Non toccare né inseguire le tartarughe, e tenere le distanze."
      },
      {
        "nome": "Museo dello Tsunami",
        "testo": "Un museo dedicato allo tsunami del 2004, che sulla costa sud ha ucciso migliaia di persone. Un momento serio in mezzo alla vacanza al mare.",
        "come": "In tuk-tuk da Hikkaduwa.",
        "tempo": "1 ora"
      },
      {
        "nome": "Fiume Madu, surf e Big Buddha",
        "testo": "Boat safari sul fiume Madu tra le mangrovie, la grande statua del Buddha lungo la costa e, per chi ama il mare, surf, snorkeling e diving.",
        "come": "Escursioni da Hikkaduwa in tuk-tuk o barca.",
        "tempo": "mezza giornata"
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: safari a Yala sul trasferimento da Ella, poi cena in spiaggia",
          "Giorno 2: tartarughe in snorkeling al mattino, Museo dello Tsunami, pomeriggio in spiaggia"
        ]
      }
    ],
    zone: [
      {
        "nome": "Lungomare di Hikkaduwa",
        "perChi": "vita serale e surf",
        "testo": "Locali, scuole di surf e hotel lungo la strada principale. Rumorosa e trafficata."
      },
      {
        "nome": "Hotel sul mare fuori dal centro",
        "perChi": "calma",
        "testo": "Hotel boutique come il Sapphire Seas, direttamente sulla spiaggia, in zone meno trafficate."
      }
    ],
    sapori: [
      {
        "nome": "Red snapper alla griglia",
        "testo": "Cena in spiaggia: servizio lento ma pesce ottimo. Uno dei ricordi più veri dello Sri Lanka."
      },
      {
        "nome": "Cucina vegetariana",
        "testo": "Steffi's Mandala o Thambili Cafe a pranzo."
      },
      {
        "nome": "Frutti di mare",
        "testo": "Sea Salt Society o Canal View a cena."
      },
      {
        "nome": "Cocco fresco",
        "testo": "Thambili, il cocco arancione, venduto lungo la spiaggia."
      }
    ],
    attenzioni: [
      "Non fidarsi dei «pescatori sui pali» lungo la costa sud: ormai sono quasi sempre una messa in scena a pagamento per turisti.",
      "A ottobre e novembre, tra i due monsoni, sulla costa sud possono arrivare temporali e mare mosso: chiedere in hotel prima di fare il bagno.",
      "Safari a Yala: scegliere operatori che rispettano le distanze dagli animali e i limiti di jeep intorno agli avvistamenti.",
      "Correnti e onde alte nel sud: nuotare dove ci sono altre persone e rispettare le bandiere."
    ],
    esperienzeSlugs: ['safari-yala'],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'La spiaggia di Hikkaduwa sulla costa sud dello Sri Lanka',
    immagine: '/images/sri-lanka/hikkaduwa-stock.jpg',
  },
]
