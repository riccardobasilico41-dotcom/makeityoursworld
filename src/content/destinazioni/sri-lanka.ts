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
      "Il visto elettronico ETA è obbligatorio: richiederlo online sul sito ufficiale eta.gov.lk. Per i passaporti italiani è gratuito dal 25 maggio 2026, ma le condizioni cambiano: controllare prima di partire.",
      "Comprare la SIM locale (Dialog o SLT Mobitel) subito dopo il controllo passaporti: costa meno che al desk prima dei controlli.",
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
        "come": "Dentro il sito archeologico, in bicicletta o a piedi. Si entra scalzi e con abiti bianchi o chiari e coperti.",
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
      "Mai posare per una foto dando le spalle a una statua del Buddha: è considerato irrispettoso.",
      "I giorni di luna piena (poya) sono festivi e non si vende alcol: il sito è affollatissimo.",
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
      'Il Dambulla Wholesale Market, centro della distribuzione di frutta e verdura dell\'isola',
    ],
    doveDormire:
      'Abbiamo dormito al Tropical Life Resort, sulla carta il migliore dei nove hotel del viaggio: n. 1 tra le strutture specialty di Dambulla, 4/5 su Tripadvisor. Camere pulite e ben attrezzate, buffet abbondante, tutto immerso nel verde. Qualche recensione segnala che in camera manca il WiFi.\n\nEconomiche: Relax Guesthouse, Lake Island Homestay. Fascia media: Lake Lodge Boutique Hotel, Kalundewa Retreat. Lusso: Heritance Kandalama (il celebre hotel firmato Geoffrey Bawa), Aliya Resort & Spa.',
    doveMangiare: 'Mom\'s Kitchen e Golden Palace, tra Dambulla e Sigiriya.',
    comeArrivare: 'Circa 1h30 di trasferimento da Anuradhapura, passando da Mihintale e dal safari.',
    comeSpostarsi: 'Van privato; a piedi per i trekking.',
    periodoMigliore: 'la mattina presto per Sigiriya, per evitare il caldo',
    costi: 'Mihintale: ingresso 500 LKR più 50 LKR di sarong; safari a Minneriya circa 12.000 LKR a jeep più l\'ingresso; Sigiriya 10.000-30 USD a persona secondo la tariffa applicata; Pidurangala 1.000 LKR.',
    erroriDaEvitare: ['Partire tardi per Sigiriya: conviene muoversi presto per evitare il caldo peggiore durante la salita'],
    miaEsperienza:
      'Il tramonto da Pidurangala Rock, con la Rocca di Sigiriya di fronte, è uno dei panorami più belli di tutto il viaggio. Forse mi è piaciuto più della salita a Sigiriya, che tutti fanno di corsa senza fermarsi qui.',
    luoghi: [
      {
        "nome": "Mihintale",
        "testo": "La collina dove, secondo la tradizione, il buddhismo arrivò per la prima volta in Sri Lanka. Una lunga scalinata porta ai templi e alla dagoba in cima.",
        "come": "A circa mezz'ora da Anuradhapura, in van. Si sale a piedi scalzi.",
        "quando": "Mattina, prima del caldo.",
        "tempo": "1 ora e mezza",
        "costo": "Ingresso 1.000 LKR per stranieri (2026); nel 2023 erano 500 LKR più 50 LKR di sarong"
      },
      {
        "nome": "Sigiriya, la Rocca del Leone",
        "testo": "Una roccia alta circa 180 metri con in cima le fondamenta del palazzo del re Kashyapa (477-495), patrimonio UNESCO dal 1982. Lungo la salita si passano gli affreschi delle fanciulle celesti, la parete a specchio coperta di graffiti poetici del IX-X secolo e le due zampe del leone che fanno da porta all'ultima scalinata.",
        "come": "Dalla biglietteria si sale a piedi, 1 ora e mezza-2 ore di salita; da Dambulla in van.",
        "quando": "Biglietteria dalle 7 alle 17: arrivare all'apertura, per evitare il caldo peggiore e le code.",
        "tempo": "3-4 ore",
        "costo": "Circa 35 USD per stranieri (marzo 2026), pagati in rupie al cambio del giorno; comprende il museo. Si può comprare anche online.",
        "url": "https://eservices.ccf.gov.lk/eticketing/landing",
        "consiglio": "Muoversi presto: a metà mattina la salita è dura e piena di gente."
      },
      {
        "nome": "Pidurangala Rock",
        "testo": "Il tramonto da Pidurangala, con la Rocca di Sigiriya di fronte, è uno dei panorami più belli del viaggio. Forse mi è piaciuto più della salita a Sigiriya, che tutti fanno di corsa senza fermarsi qui.",
        "come": "Salita a piedi di circa 30 minuti, con un tratto di roccia finale.",
        "quando": "Tramonto.",
        "tempo": "2 ore",
        "costo": "Ingresso 1.000 LKR (dal viaggio del 2023, invariato nel 2026)",
        "consiglio": "Portare una torcia per la discesa quando il sole è già calato."
      },
      {
        "nome": "Tempio d'Oro di Dambulla",
        "testo": "Cinque grotte scavate nella roccia con 153 statue del Buddha e circa 2.100 metri quadrati di pitture su pareti e soffitti. È patrimonio UNESCO dal 1991. La grotta più grande è la più spettacolare: le statue sono in fila sotto un soffitto tutto dipinto.",
        "come": "Da Sigiriya in van; si sale a piedi per una scalinata e si entra scalzi, con spalle e ginocchia coperte.",
        "quando": "Mattina o tardo pomeriggio.",
        "tempo": "1 ora e mezza",
        "costo": "Circa 3.000 LKR per stranieri (2026)"
      },
      {
        "nome": "Safari a Minneriya",
        "testo": "Il safari in jeep tra gli elefanti nel parco di Minneriya, che si stringe intorno a un grande lago artificiale. Nella stagione secca, quando l'acqua si ritira, gli elefanti scendono in branco sulle rive a brucare l'erba nuova.",
        "come": "In jeep con autista-guida dall'area di Sigiriya.",
        "quando": "Pomeriggio; il periodo con più elefanti insieme (il «gathering») è di solito da luglio a ottobre.",
        "tempo": "3-4 ore",
        "costo": "Circa 12.000 LKR a jeep più l'ingresso (dal viaggio del 2023); ingresso al parco circa 25 USD a persona più tasse (dato 2024)"
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
      }
    ],
    zone: [
      {
        "nome": "Dambulla",
        "perChi": "base comoda",
        "testo": "Hotel immersi nel verde, a mezz'ora dai siti. Tropical Life Resort è stato il migliore dei nove hotel del viaggio."
      },
      {
        "nome": "Sigiriya",
        "perChi": "vicino alla rocca",
        "testo": "Guesthouse e hotel vicino alla biglietteria, comodi per la salita all'alba. Meno scelta di ristoranti."
      },
      {
        "nome": "Lago di Kandalama",
        "perChi": "lusso e architettura",
        "testo": "L'Heritance Kandalama, firmato da Geoffrey Bawa, è il più celebre, tra i più cari."
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
        "testo": "Il Dambulla Wholesale Market è il grande mercato all'ingrosso da cui passa buona parte della frutta e della verdura dell'isola: si vedono camion carichi e montagne di prodotti locali."
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
        "come": "Nella parte nord del sito archeologico, in bicicletta; si lasciano le scarpe all'ingresso.",
        "quando": "Mattina o pomeriggio, con la luce radente.",
        "tempo": "30 minuti"
      },
      {
        "nome": "Vatadage e il Quadrangolo",
        "testo": "Il Vatadage è un tempio circolare per la reliquia del dente, con scalinate e pietre di luna scolpite. Il Quadrangolo raccoglie in un recinto i templi più belli della città medievale.",
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
    comeArrivare: 'Circa 2h di trasferimento da Dambulla, con sosta al Ranweli Spice Garden.',
    comeSpostarsi: 'A piedi in centro.',
    periodoMigliore: 'tardo pomeriggio o sera, per arrivare in tempo alla cerimonia del Tempio del Dente',
    costi: 'Ingresso al Tempio del Dente 2.000 LKR nel 2023, 3.000 LKR nel 2026.',
    erroriDaEvitare: ['Arrivare al Tempio del Dente all\'ultimo momento: la fila si forma già nel tardo pomeriggio, conviene presentarsi con molto anticipo'],
    miaEsperienza:
      'La cerimonia serale al Tempio del Dente, con i tamburi che cominciano poco prima che cali la luce, è stata uno dei momenti più intensi e spirituali di tutto il viaggio.',
    luoghi: [
      {
        "nome": "Tempio del Dente",
        "testo": "Custodisce la reliquia del dente del Buddha, il tempio più sacro dello Sri Lanka. La cerimonia serale, con i tamburi che cominciano poco prima che cali la luce, è stato uno dei momenti più intensi e spirituali del viaggio.",
        "come": "A piedi dal centro, sul lago. Si entra scalzi, con spalle e ginocchia coperte; la reliquia sta in un reliquiario d'oro in una sala del piano superiore.",
        "quando": "Aperto ogni giorno dalle 5:30 alle 20. Le cerimonie sono alle 5:30, alle 9:30 e alle 18:30: per quella serale la fila si forma già nel tardo pomeriggio.",
        "tempo": "2 ore",
        "costo": "3.000 LKR per stranieri (2026, sito ufficiale), con i musei del complesso; nel 2023 erano 2.000 LKR. Valgono solo i biglietti delle macchinette del tempio.",
        "url": "https://sridaladamaligawa.lk/",
        "consiglio": "Presentarsi con molto anticipo: arrivare all'ultimo momento significa restare in fondo alla fila."
      },
      {
        "nome": "Kandy Fish Market",
        "testo": "Il posto migliore del viaggio per i souvenir: spezie, tessuti e prodotti locali, a prezzi più bassi che nei negozi per turisti.",
        "come": "In centro, a piedi.",
        "quando": "Mattina o tardo pomeriggio.",
        "tempo": "1 ora"
      },
      {
        "nome": "Ranweli Spice Garden",
        "testo": "Una visita alla piantagione di spezie con pranzo, sulla strada da Dambulla a Kandy.",
        "come": "Sosta lungo il trasferimento da Dambulla, circa 2 ore di van.",
        "tempo": "1 ora e mezza"
      },
      {
        "nome": "Buddha di Bahiravokanda e lago",
        "testo": "Una grande statua del Buddha su una collina sopra la città, con panorama su Kandy e sul lago artificiale al centro.",
        "come": "In tuk-tuk dal centro, pochi minuti.",
        "quando": "Tramonto.",
        "tempo": "1 ora"
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
      }
    ],
    zone: [
      {
        "nome": "Fuori dal centro",
        "perChi": "tranquillità",
        "testo": "Hotel sulle colline come il Rivendell, con vista, ma lontani dal tempio. Si dorme meglio, ma la mattina presto si sente un tempio vicino."
      },
      {
        "nome": "Vicino al lago",
        "perChi": "visite a piedi",
        "testo": "Hotel e guesthouse a pochi minuti dal tempio e dal mercato. Più traffico e rumore."
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
    erroriDaEvitare: ['Salire senza una felpa: in cima ci sono 3-6°C, con vento'],
    miaEsperienza:
      'La notte sull\'Adam\'s Peak, in fila indiana con centinaia di pellegrini locali su una scalinata tutta illuminata, è stata la vera prova fisica del viaggio. In cima il freddo taglia, ma salire insieme a chi lo fa per fede, e non per turismo, conta più dell\'alba stessa.',
    luoghi: [
      {
        "nome": "Adam's Peak (Sri Pada)",
        "testo": "Una montagna di 2.243 metri sacra a buddhisti, indù, musulmani e cristiani. Si sale di notte lungo una scalinata tutta illuminata, in fila indiana con centinaia di pellegrini locali, per arrivare in cima all'alba. Ho trovato che conti più il percorso della meta.",
        "come": "Si parte a piedi dal villaggio di Nallathanniya, nel cuore della notte; la salita richiede 2 ore e mezza-3 ore.",
        "quando": "Stagione del pellegrinaggio, da dicembre a maggio, con il percorso illuminato (anche più affollato).",
        "tempo": "6-7 ore tra salita, alba e discesa",
        "consiglio": "In cima ci sono 3-6 °C e vento: portare una felpa."
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
        "testo": "Città vicina con più scelta di alloggi e ristoranti, ma a mezz'ora dal sentiero."
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
      "Salire senza una felpa: in cima ci sono 3-6 °C e vento.",
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
      'Relax: massaggio, cerimonia del tè al Grand Hotel, Victoria Park, cascate di Ravana o dei Lover\'s Leap',
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
        "come": "Sulla strada tra Hatton e Nuwara Eliya, in van.",
        "quando": "Mattina o primo pomeriggio.",
        "tempo": "1 ora"
      },
      {
        "nome": "World's End a Horton Plains",
        "testo": "Il bordo dell'altopiano di Horton Plains, oltre i 2.000 metri, con uno strapiombo di 870 metri sulla pianura sottostante. Il trekking è un anello di circa 3 ore tra praterie e foresta nebulosa. Nel parco sono vietati i sacchetti di plastica.",
        "come": "In van da Nuwara Eliya, circa 1 ora e mezza; si cammina a piedi su un sentiero segnalato.",
        "quando": "Presto la mattina: poi arrivano nebbia e nuvole e la vista sparisce. Una giornata di sole è necessaria.",
        "tempo": "3 ore di cammino più il trasferimento",
        "costo": "Ingresso al parco circa 25 USD a persona più tasse (dato 2024)",
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
        "testo": "Il tè pomeridiano al Grand Hotel, un massaggio o una passeggiata alle cascate di Ravana o dei Lover's Leap.",
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
    cosaVedere: ['Il Nine Arches Bridge', 'Lipton\'s Seat', 'Le cascate dei Lover\'s Leap'],
    cosaFare: [
      'Il treno panoramico Nuwara Eliya-Ella (c\'è la scheda esperienza dedicata)',
      'La zip line Flying Ravana (circa 20€, a 15 minuti da Ella)',
      'Un massaggio alla Spa Ceylon',
      'La cooking class con cena organizzata dal DMC',
    ],
    doveDormire:
      'Abbiamo dormito all\'88th Hotel, 4/5 su Tripadvisor e uno dei posti più consigliati della zona: centrale, vicino a Ella Rock e al Nine Arches Bridge, con un\'accoglienza calorosa. Meglio partire con le aspettative giuste: niente aria condizionata, niente ascensore, letto rigido con solo le lenzuola.\n\nEconomiche: Ella Alpine Resort, Rock Side Inn. Fascia media: Arawe Retreat, Zion View Ella Green Retreat. Lusso: 98 Acres Resort & Spa, Nine Skies.',
    doveMangiare: 'Cooking class con cena del DMC; dopocena al One Love Ella (attenzione ai drink offerti al tavolo, che spesso finiscono nel conto).',
    comeArrivare: 'Con il treno panoramico da Nuwara Eliya (stazione di Nanu Oya): sulla carta 3 ore, ma gli orari reali sono imprevedibili.',
    comeSpostarsi: 'A piedi per i belvedere vicini al villaggio.',
    periodoMigliore: 'non ho indicazioni precise sulla stagione migliore per Ella: noi ci siamo stati a novembre',
    costi: 'Zip line Flying Ravana circa 20€.',
    erroriDaEvitare: ['Aspettare a prenotare i biglietti del treno panoramico: vanno presi con molto anticipo, perché finiscono subito, soprattutto in alta stagione'],
    miaEsperienza:
      'Il treno panoramico è arrivato con ore di ritardo e senza niente da mangiare a bordo. Le vallate di tè a perdita d\'occhio viste dal finestrino, però, sono tra le immagini più belle di tutto il viaggio. Bisogna salirci con lo spirito giusto: i ritardi sono la norma.',
    luoghi: [
      {
        "nome": "Treno panoramico Nuwara Eliya-Ella",
        "testo": "Il tratto più famoso della ferrovia dell'altopiano, tra vallate di tè a perdita d'occhio. Il treno è arrivato con ore di ritardo e senza niente da mangiare a bordo, ma le immagini dal finestrino sono tra le più belle del viaggio.",
        "come": "Si sale alla stazione di Nanu Oya, per Nuwara Eliya; sulla carta 3 ore, ma gli orari reali sono imprevedibili.",
        "quando": "Mattina. I biglietti vanno presi con molto anticipo, perché finiscono subito, soprattutto in alta stagione.",
        "tempo": "3 ore, o molte di più",
        "consiglio": "Salire con lo spirito giusto: i ritardi sono la norma. Portare cibo e acqua."
      },
      {
        "nome": "Nine Arches Bridge",
        "testo": "Un viadotto ferroviario a nove archi in pietra, mattoni e cemento, finito nel 1919: è lungo 91 metri e alto 24, immerso nella giungla. Il momento di maggiore fascino è quando passa il treno.",
        "come": "A Demodara, tra le stazioni di Ella e Demodara: in tuk-tuk e poi a piedi su un sentiero.",
        "quando": "Quando passa un treno: chiedere gli orari in guesthouse.",
        "tempo": "1 ora",
        "consiglio": "Non camminare sui binari quando arriva il treno."
      },
      {
        "nome": "Lipton's Seat",
        "testo": "Il belvedere sulle piantagioni di tè della tenuta di Dambatenne, che porta il nome di Thomas Lipton, il re del tè. Non è a Ella ma sopra Haputale: vale la gita se il cielo è limpido.",
        "come": "In van o tuk-tuk da Ella fino a Haputale, circa un'ora di strada, poi su per la strada di Dambatenne.",
        "quando": "Mattina presto, prima delle nuvole.",
        "tempo": "mezza giornata da Ella"
      },
      {
        "nome": "Zip line Flying Ravana",
        "testo": "Una zip line doppia lunga 550 metri, tra le colline sopra Ella. Parte da Mini Adam's Peak, sulla strada per Little Adam's Peak, e si scende in coppia sopra le piantagioni di tè.",
        "come": "In tuk-tuk da Ella, circa 15 minuti.",
        "url": "https://www.flyingravana.com/",
        "tempo": "1 ora e mezza",
        "costo": "Circa 20 € (dal viaggio del 2023)"
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
          "Giorno 2: Lipton's Seat all'alba (un'ora di strada, verso Haputale), poi zip line e massaggio nel pomeriggio"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro di Ella",
        "perChi": "comodità e vita serale",
        "testo": "Guesthouse come l'88th Hotel, vicino a Ella Rock e al Nine Arches Bridge. Rumoroso la sera lungo la strada principale."
      },
      {
        "nome": "Colline fuori dal centro",
        "perChi": "chi cerca vista e calma",
        "testo": "Resort e ville tra le piantagioni, con panorami ampi. Servono tuk-tuk per il paese."
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
    periodoMigliore: 'novembre, anche se sulla costa comincia già la bassa stagione per le piogge',
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
        "costo": "Jeep 12.000-16.000 LKR, più l'ingresso (27-30 € a persona) e la mancia (dal viaggio del 2023); l'ingresso base è circa 25 USD più tasse (dato 2024)",
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
      "A novembre sulla costa sud comincia la bassa stagione per le piogge: mare mosso e correnti.",
      "Safari a Yala: scegliere operatori che rispettano le distanze dagli animali e i limiti di jeep intorno agli avvistamenti.",
      "Correnti e onde alte nel sud: nuotare dove ci sono altre persone e rispettare le bandiere."
    ],
    esperienzeSlugs: ['safari-yala'],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'La spiaggia di Hikkaduwa sulla costa sud dello Sri Lanka',
    immagine: '/images/sri-lanka/hikkaduwa-stock.jpg',
  },
]
