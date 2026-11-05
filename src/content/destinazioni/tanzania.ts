import type { Destinazione } from '@/lib/types'

// Destinazioni della Tanzania. Rick ha visitato Serengeti, Ngorongoro,
// Tarangire/lago Manyara e Zanzibar (safari con Suricata Safaris); dei suoi
// ricordi ci sono solo le frasi sul safari in tenda, quindi miaEsperienza è
// presente solo sul Serengeti e altrove la UI mostra il placeholder.
// Arusha/Kilimanjaro è la base logistica, non visitata come meta.
// Tariffe: NCAA dalla tabella ufficiale (ncaa.go.tz/tariffs), TANAPA come
// riportate dagli operatori, novembre 2026.

export const destinazioniTanzania: Destinazione[] = [
  {
    slug: 'serengeti',
    paeseSlug: 'tanzania',
    ordine: 1,
    nome: 'Serengeti',
    tipologia: ['safari', 'parco nazionale', 'fauna'],
    giorniConsigliati: '2-3 giorni, meglio con almeno due notti dentro il parco',
    visitataPersonalmente: true,
    introduzione:
      "La grande pianura del nord della Tanzania, patrimonio UNESCO: savana aperta, kopje di granito, grandi felini e, a seconda della stagione, le mandrie della Grande Migrazione.",
    percheAndarci:
      "È il parco da cui nasce l'idea stessa di safari: spazi enormi, leoni, ghepardi e leopardi, e milioni di gnu e zebre che si spostano seguendo le piogge.",
    cosaVedere: [
      'La valle del Seronera, nel centro del parco, la zona più facile per i grandi felini',
      'I kopje, gli affioramenti di granito dove riposano i leoni',
      'Le pianure meridionali verso Ndutu nella stagione delle nascite degli gnu',
      'Il fiume Mara, nel nord, negli attraversamenti della migrazione',
    ],
    cosaFare: [
      'Game drive all\'alba e nel tardo pomeriggio, quando gli animali sono più attivi',
      'Dormire in tenda dentro il parco (vedi la scheda esperienza dedicata)',
      'Seguire la Grande Migrazione nella zona giusta per il mese (vedi la scheda esperienza dedicata)',
      'Safari in mongolfiera all\'alba, per chi vuole vedere la pianura dall\'alto',
    ],
    doveDormire:
      "Dentro il parco c'è di tutto: campeggi pubblici con tende da campeggio, campi tendati fissi con letti veri e bagno, lodge e campi di lusso. Dormire dentro il Serengeti, invece che fuori, fa risparmiare ore di strada e permette di essere sulle piste già all'alba. Suricata Safaris organizza il circuito in tutte e tre le formule (campeggio, fascia media e lusso).",
    comeArrivare:
      "Da Arusha in fuoristrada, di solito passando per Tarangire o Ngorongoro: è una lunga giornata di strada. In alternativa, volo interno da Arusha verso una delle piste del parco.",
    comeSpostarsi: 'In fuoristrada con autista-guida: dentro il parco non si cammina da soli.',
    periodoMigliore:
      "da giugno a ottobre (stagione secca, migrazione nel nord da luglio); da dicembre a marzo nel sud, per le nascite",
    costi:
      "Ingresso circa 83 $ a persona ogni 24 ore in alta stagione e 71 $ in bassa, IVA inclusa, più la tassa di pernottamento nei campi e nei lodge (circa 59-71 $ a notte); nel campeggio pubblico circa 35 $ (indicativi, da verificare con l'operatore).",
    erroriDaEvitare: [
      "Andare nella zona sbagliata per il mese: la migrazione si sposta, e d'estate nel sud del parco gli gnu non ci sono",
      'Pianificare un solo giorno: tra andata e ritorno si passa più tempo in auto che a guardare animali',
      'Dimenticare strati caldi per i game drive dell\'alba, che sul fuoristrada aperto sono freddi',
    ],
    miaEsperienza:
      "Ho fatto il safari con Suricata Safaris: sono top, hanno accommodation per tutti i gusti e anche le esperienze in tenda, che consiglio. Mi piace viaggiare scomodo e a contatto con la natura, anche se ogni tanto qualche 5 stelle va bene.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Valle del Seronera",
        "testo": "Il centro del parco, una delle zone migliori per i grandi felini: leoni, leopardi sulle acacie e ghepardi sulle pianure. I kopje, gli affioramenti di granito, sono il posto dove i leoni riposano.",
        "come": "Game drive in fuoristrada con guida, dal lodge o dal campo. Non si scende dall'auto fuori dai punti consentiti.",
        "quando": "Il parco è aperto tutto l'anno e i cancelli chiudono alle 18 (TANAPA). Gli animali sono più attivi all'alba e nel tardo pomeriggio.",
        "tempo": "1 giorno o più",
        "url": "https://www.tanzaniaparks.go.tz/serengeti",
        "consiglio": "Ho fatto il safari con Suricata Safaris, che ha anche le esperienze in tenda dentro il parco: le consiglio.",
        "costo": "Ingresso TANAPA 70 $ per gli adulti stranieri e 20 $ per i bambini, secondo il sito ufficiale (2026); chiedere all'operatore se nel preventivo ci sono tasse aggiuntive"
      },
      {
        "nome": "Pianure del sud e Ndutu",
        "testo": "La zona dove nascono i piccoli di gnu, con i predatori che li seguono. Secondo TANAPA la stagione dei parti è soprattutto tra gennaio e febbraio.",
        "come": "Dal Seronera o dal Ngorongoro in fuoristrada, con guida.",
        "quando": "Soprattutto gennaio e febbraio.",
        "tempo": "1-2 giorni",
        "url": "https://www.tanzaniaparks.go.tz/serengeti"
      },
      {
        "nome": "Fiume Mara e migrazione",
        "testo": "Nel nord del parco, durante la stagione secca, gli attraversamenti del fiume Mara da parte di gnu e zebre, con i coccodrilli ad aspettare.",
        "come": "Da Seronera in fuoristrada, molte ore di strada; molti campi sono fissi nel nord.",
        "quando": "Stagione secca: TANAPA indica giugno-ottobre per la migrazione. Il momento esatto degli attraversamenti cambia ogni anno.",
        "tempo": "1-2 giorni",
        "url": "https://www.tanzaniaparks.go.tz/serengeti",
        "consiglio": "Chiedere all'operatore dove si trova la migrazione nel mese di viaggio: cambia ogni anno."
      },
      {
        "nome": "Mongolfiera all'alba",
        "testo": "Un volo sopra la pianura al sorgere del sole, seguito da una colazione nella savana.",
        "come": "Si prenota con un operatore, con partenza prima dell'alba dal campo.",
        "quando": "Alba.",
        "tempo": "3-4 ore"
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: game drive al Seronera, tramonto con i leoni",
          "Giorno 2: alba con la mongolfiera o game drive, partenza"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1-2 come sopra",
          "Giorno 3: nord o sud secondo il mese, in base alla migrazione"
        ]
      }
    ],
    zone: [
      {
        "nome": "Campi tendati",
        "perChi": "chi vuole il safari più vero",
        "testo": "Tende con letti e bagno, in mezzo alla savana. Si sentono gli animali di notte."
      },
      {
        "nome": "Lodge",
        "perChi": "chi vuole più comfort",
        "testo": "Camere vere e piscina, spesso con vista panoramica."
      },
      {
        "nome": "Campeggio pubblico",
        "perChi": "chi vuole spendere meno",
        "testo": "Il più economico, con servizi di base."
      }
    ],
    sapori: [
      {
        "nome": "Ugali",
        "testo": "Polenta di mais, accompagna carne e stufati."
      },
      {
        "nome": "Nyama choma",
        "testo": "Carne alla brace, di capra o manzo."
      },
      {
        "nome": "Pilau",
        "testo": "Riso speziato con carne."
      },
      {
        "nome": "Chai e caffè tanzaniano",
        "testo": "Servito ovunque, anche nel bush."
      }
    ],
    attenzioni: [
      "Andare nella zona sbagliata per il mese: la migrazione si sposta, e il sud è la zona dei parti a inizio anno.",
      "Pianificare un solo giorno: tra andata e ritorno si passa più tempo in auto che a guardare animali.",
      "Dimenticare strati caldi per i game drive dell'alba, freddi sul fuoristrada aperto.",
      "Scegliere un operatore senza licenza: verificare registrazione e recensioni.",
      "Le tariffe dei parchi TANAPA si pagano a persona e di solito sono già nel prezzo dell'operatore: chiedere che siano indicate a parte nel preventivo."
    ],
    // GUIDA-END
    esperienzeSlugs: ['safari-in-tenda', 'grande-migrazione'],
    tripSlugs: [],
    imageAlt: "Un'acacia solitaria nella savana del Serengeti al tramonto, con le colline all'orizzonte",
    immagine: '/images/tanzania/serengeti-savana.jpg',
  },
  {
    slug: 'ngorongoro',
    paeseSlug: 'tanzania',
    ordine: 2,
    nome: 'Cratere di Ngorongoro',
    tipologia: ['safari', 'fauna', 'unesco'],
    giorniConsigliati: '1 giorno nel cratere, con la notte sul bordo',
    visitataPersonalmente: true,
    introduzione:
      "Una caldera vulcanica intatta con il fondo piatto pieno di animali: erbivori, leoni, ippopotami e i rari rinoceronti neri. È il cuore della Ngorongoro Conservation Area, patrimonio UNESCO, dove i Maasai vivono ancora con le loro mandrie.",
    percheAndarci:
      'In poche ore e in uno spazio chiuso si vedono moltissimi animali, rinoceronte nero compreso, con le pareti del cratere tutt\'intorno.',
    cosaVedere: [
      'Il fondo del cratere, con il lago salato e le paludi',
      'I rinoceronti neri, che qui si avvistano più facilmente che altrove nel nord',
      'La vista dal bordo del cratere',
      "La gola di Olduvai, sito paleontologico dentro l'area protetta, sulla strada per il Serengeti",
    ],
    cosaFare: [
      'Game drive sul fondo del cratere (vedi la scheda esperienza dedicata)',
      'Visita a un villaggio Maasai (boma culturale)',
    ],
    doveDormire:
      'Lodge e campeggi sul bordo del cratere, a circa 2.300 metri: di notte fa freddo davvero. Più economico dormire a Karatu, fuori dall\'area protetta, e salire la mattina presto.',
    comeArrivare: "Da Arusha in fuoristrada, passando per Karatu; è anche la tappa di passaggio tra Arusha e il Serengeti.",
    comeSpostarsi: 'In fuoristrada con autista-guida, con discesa e risalita su piste dedicate.',
    periodoMigliore: 'tutto l\'anno; nella stagione secca l\'erba è bassa e gli animali si vedono meglio',
    costi:
      "Tariffe ufficiali NCAA per i visitatori non residenti fuori dall'Africa orientale: ingresso 70,80 $ a persona ogni 24 ore (23,60 $ per i bambini dai 5 ai 15 anni), più 295 $ a veicolo per ogni discesa nel cratere e il permesso per il fuoristrada.",
    erroriDaEvitare: [
      'Scendere a metà mattina: i primi veicoli entrano all\'alba e trovano il cratere più vuoto',
      'Sottovalutare il freddo sul bordo, di sera e al mattino presto',
      'Fare il conto del safari senza la tassa del cratere, che si paga a veicolo e quindi pesa di più sui gruppi piccoli',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Fondo del cratere",
        "testo": "Il fondo di una caldera vulcanica intatta di circa 260 km², profonda circa 610 metri, con il lago salato Magadi e paludi. Ci vivono leoni, elefanti, ippopotami e una piccola popolazione di rinoceronti neri, risalita a 55 esemplari nel 2018.",
        "come": "Si scende per una strada ripida in fuoristrada con guida. Ogni discesa paga una tassa a veicolo.",
        "quando": "Alba: i primi veicoli entrano presto e trovano il cratere più vuoto.",
        "tempo": "Mezza giornata",
        "costo": "70,80 $ a persona per 24 ore per i non residenti dai 16 anni (23,60 $ dai 5 ai 15), più 295 $ a veicolo per ogni discesa nel cratere (tariffe NCAA, 2026)",
        "url": "https://www.ncaa.go.tz/tariffs/",
        "consiglio": "La tassa del cratere è per veicolo: pesa di più sui gruppi piccoli."
      },
      {
        "nome": "Gola di Olduvai",
        "testo": "Il sito paleoantropologico nelle pianure della Conservation Area, fuori dal cratere, dove sono stati trovati i resti di Homo habilis. C'è un museo con spiegazioni.",
        "come": "Sulla strada tra il cratere e il Serengeti.",
        "quando": "Mattina.",
        "tempo": "1 ora",
        "url": "https://www.ncaa.go.tz/tariffs/",
        "costo": "35,40 $ a persona dai 16 anni, insieme a Shifting Sand (tariffa NCAA, 2026)"
      },
      {
        "nome": "Boma Maasai",
        "testo": "Una visita a un villaggio Maasai, con danze, case di fango e spiegazioni sulla vita dei pastori.",
        "come": "Con l'operatore, sulla strada intorno al cratere.",
        "quando": "Mattina.",
        "tempo": "1 ora",
        "consiglio": "Chiedere in anticipo cosa è incluso e quanto va ai villaggi.",
        "costo": "Ingresso ai boma culturali 20 $ a veicolo (tariffa NCAA, 2026), più l'offerta che chiede il villaggio"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Alba: discesa nel cratere",
          "Pranzo sul fondo in area picnic",
          "Pomeriggio: salita, visita al boma o a Olduvai"
        ]
      }
    ],
    zone: [
      {
        "nome": "Bordo del cratere",
        "perChi": "chi vuole la vista e l'alba",
        "testo": "Lodge e campi sul bordo, con vista sulla caldera. Freddo di sera."
      },
      {
        "nome": "Karatu",
        "perChi": "chi vuole spendere meno",
        "testo": "Cittadina vicino al cancello del cratere, con lodge economici."
      }
    ],
    sapori: [
      {
        "nome": "Ugali e stufati",
        "testo": "Piatti di mais e carne, nei lodge."
      },
      {
        "nome": "Pilau",
        "testo": "Riso speziato."
      },
      {
        "nome": "Mtori",
        "testo": "Zuppa di banane verdi e carne, tipica del nord."
      },
      {
        "nome": "Chai",
        "testo": "Tè speziato con latte."
      }
    ],
    attenzioni: [
      "Scendere a metà mattina: i primi veicoli entrano all'alba e trovano il cratere più vuoto.",
      "Sottovalutare il freddo sul bordo, di sera e al mattino.",
      "Fare il conto del safari senza la tassa del cratere, che si paga a veicolo.",
      "Visite ai villaggi Maasai: scegliere operatori che ne condividono i ricavi."
    ],
    // GUIDA-END
    esperienzeSlugs: ['cratere-ngorongoro'],
    tripSlugs: [],
    imageAlt: 'Il fondo del cratere di Ngorongoro visto dal bordo, con il lago e le pareti della caldera',
    immagine: '/images/tanzania/ngorongoro-cratere.jpg',
  },
  {
    slug: 'tarangire-manyara',
    paeseSlug: 'tanzania',
    ordine: 3,
    nome: 'Tarangire e lago Manyara',
    tipologia: ['safari', 'parco nazionale', 'natura'],
    giorniConsigliati: '1 giorno ciascuno, spesso a inizio o fine circuito',
    visitataPersonalmente: true,
    introduzione:
      "Due parchi vicini ad Arusha e diversissimi tra loro: Tarangire, con i baobab giganti e i branchi di elefanti lungo il fiume, e il lago Manyara, stretto tra la scarpata della Rift Valley e il lago, con foresta, fenicotteri e babbuini.",
    percheAndarci:
      'Sono le tappe più comode per iniziare un safari e, nella stagione secca, Tarangire ha una delle concentrazioni di elefanti più alte della Tanzania.',
    cosaVedere: [
      'I baobab e gli elefanti lungo il fiume Tarangire',
      'La foresta e la riva del lago Manyara, con i fenicotteri quando il livello dell\'acqua lo permette',
      'La scarpata della Rift Valley sopra Manyara',
    ],
    cosaFare: [
      'Game drive a Tarangire, meglio nella stagione secca',
      'Giro nel parco del lago Manyara, che si fa bene in mezza giornata',
      'Visita al villaggio di Mto wa Mbu, all\'ingresso di Manyara',
    ],
    doveDormire:
      'Campi e lodge appena fuori o dentro Tarangire; per Manyara si dorme a Mto wa Mbu o a Karatu, che è anche la base per Ngorongoro.',
    comeArrivare: 'Da Arusha in fuoristrada: sono i due parchi del circuito nord più vicini alla città.',
    comeSpostarsi: 'In fuoristrada con autista-guida.',
    periodoMigliore: 'da giugno a ottobre, quando gli animali si concentrano attorno all\'acqua',
    costi: "Ingresso indicativo di circa 50-60 $ a persona ogni 24 ore per ciascun parco (tariffe TANAPA come riportate dagli operatori, da verificare).",
    erroriDaEvitare: [
      'Saltare Tarangire per correre verso il Serengeti: nella stagione secca vale da solo il viaggio',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Parco di Tarangire",
        "testo": "Baobab, alcuni con più di mille anni, migliaia di elefanti, la popolazione più densa della Tanzania secondo TANAPA, e animali che si concentrano attorno al fiume nella stagione secca.",
        "come": "Game drive in fuoristrada con guida.",
        "quando": "Stagione secca, quando gli animali si radunano attorno all'acqua. Cancelli chiusi alle 18.",
        "tempo": "1 giorno",
        "url": "https://www.tanzaniaparks.go.tz/tarangire",
        "consiglio": "Nella stagione secca vale da solo il viaggio: non saltarlo per correre verso il Serengeti.",
        "costo": "Ingresso TANAPA 70 $ per gli adulti stranieri e 20 $ per i bambini, secondo il sito ufficiale (2026); chiedere all'operatore se nel preventivo ci sono tasse aggiuntive"
      },
      {
        "nome": "Lago Manyara",
        "testo": "Una foresta alimentata da acque sotterranee, con mogani, fichi e cercopitechi blu, una passerella sospesa tra gli alberi, il lago alcalino con i fenicotteri minori quando il livello lo permette e la scarpata della Rift Valley sopra. È famoso per i leoni che salgono sugli alberi.",
        "come": "Game drive di mezza giornata.",
        "quando": "Mattina.",
        "tempo": "Mezza giornata",
        "url": "https://www.tanzaniaparks.go.tz/lake-manyara",
        "costo": "Ingresso TANAPA 70 $ per gli adulti stranieri e 20 $ per i bambini, secondo il sito ufficiale (2026); chiedere all'operatore se nel preventivo ci sono tasse aggiuntive"
      },
      {
        "nome": "Mto wa Mbu",
        "testo": "Il villaggio all'ingresso di Manyara, con il mercato e le piantagioni di banane.",
        "come": "A piedi o in bici con una guida locale.",
        "quando": "Mattina.",
        "tempo": "1-2 ore"
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Tarangire",
          "Giorno 2: Manyara e Mto wa Mbu"
        ]
      }
    ],
    zone: [
      {
        "nome": "Lodge nei parchi",
        "perChi": "chi vuole il safari vero",
        "testo": "Lodge e campi sul bordo del parco."
      },
      {
        "nome": "Karatu / Mto wa Mbu",
        "perChi": "chi vuole spendere meno",
        "testo": "Cittadine con lodge e campeggi."
      }
    ],
    sapori: [
      {
        "nome": "Ugali",
        "testo": "Con stufati di carne."
      },
      {
        "nome": "Banane fritte",
        "testo": "Dal villaggio di Mto wa Mbu."
      },
      {
        "nome": "Pilau",
        "testo": "Riso speziato."
      },
      {
        "nome": "Chai",
        "testo": "Servito ovunque."
      }
    ],
    attenzioni: [
      "Saltare Tarangire per correre verso il Serengeti.",
      "Aspettarsi i fenicotteri tutto l'anno: il livello dell'acqua cambia.",
      "Giro in bici a Mto wa Mbu: scegliere guide locali."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Un branco di elefanti attraversa il fiume Tarangire, con i baobab sulla riva',
    immagine: '/images/tanzania/tarangire-elefanti.jpg',
  },
  {
    slug: 'zanzibar',
    paeseSlug: 'tanzania',
    ordine: 4,
    nome: 'Zanzibar',
    tipologia: ['mare', 'spiagge', 'città storica'],
    giorniConsigliati: '4-5 giorni, dopo il safari',
    visitataPersonalmente: true,
    introduzione:
      "L'isola principale dell'arcipelago (Unguja) è il mare classico dopo il safari: Stone Town, la città vecchia patrimonio UNESCO, e le spiagge bianche dell'oceano Indiano, da Nungwi e Kendwa a nord fino a Paje e Jambiani sulla costa est.",
    percheAndarci:
      'Per chiudere il viaggio con giorni di mare, e per una città storica che mescola cultura swahili, araba, indiana ed europea.',
    cosaVedere: [
      'Stone Town, con le porte intagliate, i vicoli e il lungomare (vedi la scheda esperienza dedicata)',
      'Le spiagge del nord, Nungwi e Kendwa, dove la marea si sente meno',
      'La costa est, Paje e Jambiani, con la bassa marea che lascia scoperta la laguna',
      'La foresta di Jozani, con le scimmie colobo rosse di Zanzibar',
    ],
    cosaFare: [
      'Snorkeling attorno all\'atollo di Mnemba',
      'Kitesurf a Paje',
      'Cena al mercato serale dei Forodhani Gardens a Stone Town',
    ],
    doveDormire:
      'Una o due notti a Stone Town per la città, poi la spiaggia: il nord per fare il bagno a qualsiasi ora, la costa est per il kitesurf e i villaggi più tranquilli.',
    comeArrivare:
      "Volo interno da Arusha o dal Kilimanjaro all'aeroporto di Zanzibar (ZNZ), oppure voli internazionali diretti; da Dar es Salaam anche il traghetto veloce. All'ingresso serve l'assicurazione obbligatoria di Zanzibar (44 $).",
    comeSpostarsi: 'Taxi o transfer concordati tra Stone Town e le spiagge; a Stone Town si gira a piedi.',
    periodoMigliore: 'da giugno a ottobre e da dicembre a febbraio, fuori dalle stagioni delle piogge',
    costi: 'Assicurazione obbligatoria 44 $ a persona per soggiorni fino a 92 giorni.',
    erroriDaEvitare: [
      'Scegliere la costa est senza sapere della marea: con la bassa marea il mare si ritira per centinaia di metri',
      'Girare per Stone Town in costume o canottiera: fuori dalle spiagge ci si copre spalle e ginocchia',
      "Arrivare senza l'assicurazione di Zanzibar già comprata online, e fare la fila in aeroporto",
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Stone Town",
        "testo": "La città vecchia di vicoli, porte di legno intagliato e lungomare, patrimonio UNESCO dal 2000, dove l'architettura mescola influssi arabi, persiani, indiani ed europei con la cultura swahili.",
        "come": "A piedi nei vicoli, con una guida per il primo giorno.",
        "quando": "Mattina e sera.",
        "tempo": "Mezza giornata",
        "consiglio": "Cena al mercato serale dei Forodhani Gardens, accanto al Forte Vecchio, quando dopo il tramonto si griglia il pesce."
      },
      {
        "nome": "Nungwi e Kendwa",
        "testo": "Le spiagge del nord, dove la marea si sente meno.",
        "come": "Taxi o dala dala da Stone Town.",
        "quando": "Tutto l'anno.",
        "tempo": "Una giornata"
      },
      {
        "nome": "Paje e Jambiani",
        "testo": "La costa est, con la bassa marea che lascia scoperta la laguna per centinaia di metri. Kitesurf a Paje.",
        "come": "In auto da Stone Town.",
        "quando": "Con l'alta marea per il bagno.",
        "tempo": "Una giornata"
      },
      {
        "nome": "Foresta di Jozani e atollo di Mnemba",
        "testo": "La foresta di Jozani, nell'unico parco nazionale di Zanzibar, con il colobo rosso di Zanzibar, una scimmia che vive solo sull'isola ed è in pericolo; e l'atollo di Mnemba, famoso per lo snorkeling.",
        "come": "Jozani in auto; Mnemba in barca dal nord-est.",
        "quando": "Mattina.",
        "tempo": "Mezza giornata ciascuno"
      }
    ],
    programmi: [
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Stone Town",
          "Giorno 2: foresta di Jozani e costa est",
          "Giorno 3: snorkeling a Mnemba o spiaggia al nord"
        ]
      }
    ],
    zone: [
      {
        "nome": "Stone Town",
        "perChi": "chi vuole cultura",
        "testo": "Hotel storici nella città vecchia, senza spiaggia."
      },
      {
        "nome": "Nord (Nungwi, Kendwa)",
        "perChi": "chi vuole bagno sempre",
        "testo": "Marea poco sensibile, locali e vita serale."
      },
      {
        "nome": "Est (Paje, Jambiani)",
        "perChi": "chi vuole kitesurf e atmosfera",
        "testo": "Spiagge ampie con marea forte, più tranquillo."
      }
    ],
    sapori: [
      {
        "nome": "Pesce alla griglia",
        "testo": "Nei ristoranti sul mare."
      },
      {
        "nome": "Urojo",
        "testo": "Zuppa speziata di Zanzibar, al mercato."
      },
      {
        "nome": "Pilau",
        "testo": "Riso speziato."
      },
      {
        "nome": "Succo di canna",
        "testo": "Spremuto fresco ai chioschi."
      }
    ],
    attenzioni: [
      "Scegliere la costa est senza sapere della marea: con la bassa marea il mare si ritira per centinaia di metri.",
      "Girare per Stone Town in costume o canottiera: fuori dalle spiagge ci si copre spalle e ginocchia.",
      "Arrivare senza l'assicurazione obbligatoria di Zanzibar (ZIC): si compra online su visitzanzibar.go.tz o all'arrivo, e vale per tutto il soggiorno.",
      "Venditori di escursioni sulla spiaggia: confrontare i prezzi con l'hotel."
    ],
    // GUIDA-END
    esperienzeSlugs: ['stone-town'],
    tripSlugs: [],
    imageAlt: 'La spiaggia bianca di Nungwi, a nord di Zanzibar, con il mare turchese e le case sulla riva',
    immagine: '/images/tanzania/zanzibar-nungwi.jpg',
  },
  {
    slug: 'arusha-kilimanjaro',
    paeseSlug: 'tanzania',
    ordine: 5,
    nome: 'Arusha e il Kilimanjaro',
    tipologia: ['città', 'montagna', 'trekking'],
    giorniConsigliati: '1 notte prima e dopo il safari; 6-8 giorni per salire il Kilimanjaro',
    visitataPersonalmente: false,
    introduzione:
      "Arusha è la città da cui partono quasi tutti i safari del nord, ai piedi del monte Meru; poco più a est c'è il Kilimanjaro, la montagna più alta d'Africa, con Moshi come base per chi lo sale.",
    percheAndarci:
      'È la base logistica del viaggio: qui si arriva, si incontra l\'operatore e si parte per i parchi. Chi ha più tempo può aggiungere il trekking sul Kilimanjaro o sul Meru.',
    cosaVedere: [
      'Il Kilimanjaro, che nelle giornate limpide si vede anche dalla strada',
      'Il parco nazionale di Arusha, ai piedi del monte Meru, per una giornata a piedi o in auto',
    ],
    cosaFare: [
      'Salita al Kilimanjaro su una delle vie classiche (Machame, Lemosho, Marangu, Rongai)',
      'Trekking di 3-4 giorni sul monte Meru',
      'Escursione alle cascate di Materuni e a una piantagione di caffè vicino a Moshi',
    ],
    doveDormire: "Ad Arusha ci sono lodge e hotel di tutte le fasce; per il Kilimanjaro la base è Moshi.",
    comeArrivare: "Kilimanjaro International Airport (JRO), tra Arusha e Moshi; l'aeroporto di Arusha (ARK) serve i voli interni.",
    comeSpostarsi: "Transfer organizzato dall'operatore o taxi; in città traffico intenso nelle ore di punta.",
    periodoMigliore: 'da giugno a ottobre e da gennaio a febbraio per il Kilimanjaro, fuori dalle piogge',
    erroriDaEvitare: [
      'Prenotare il primo safari il giorno stesso del volo intercontinentale: meglio una notte ad Arusha',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Kilimanjaro",
        "testo": "Il monte più alto dell'Africa, 5.895 metri all'Uhuru Peak. Secondo TANAPA la salita al Kibo richiede da 5 a 8 giorni secondo la via: tra le più note Machame, Lemosho, Marangu e Rongai. Nelle giornate limpide si vede anche dalla strada.",
        "come": "Con un operatore autorizzato, con guide e portatori.",
        "quando": "Evitare le due stagioni delle piogge, da marzo a maggio e intorno a novembre.",
        "tempo": "5-8 giorni",
        "url": "https://www.tanzaniaparks.go.tz/kilimanjaro",
        "consiglio": "Più giorni significa più acclimatamento e più probabilità di arrivare in cima.",
        "costo": "Ingresso TANAPA 70 $ per gli adulti stranieri e 20 $ per i bambini, secondo il sito ufficiale (2026); chiedere all'operatore se nel preventivo ci sono tasse aggiuntive"
      },
      {
        "nome": "Parco nazionale di Arusha",
        "testo": "Il parco ai piedi del Monte Meru (4.566 metri, la seconda vetta della Tanzania): la piana di «Serengeti Ndogo» con bufali, zebre e giraffe, i laghi Momella con ippopotami e uccelli acquatici, e le passeggiate con un ranger.",
        "come": "In auto da Arusha; le camminate si organizzano a uno dei due cancelli.",
        "quando": "Mattina.",
        "tempo": "Una giornata",
        "url": "https://www.tanzaniaparks.go.tz/arusha",
        "costo": "Ingresso TANAPA 70 $ per gli adulti stranieri e 20 $ per i bambini, secondo il sito ufficiale (2026); chiedere all'operatore se nel preventivo ci sono tasse aggiuntive"
      },
      {
        "nome": "Cascate di Materuni e caffè",
        "testo": "Una cascata vicino a Moshi e una piantagione di caffè dove si vede tutto il processo.",
        "come": "In auto da Moshi.",
        "quando": "Mattina.",
        "tempo": "Mezza giornata"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: parco di Arusha",
          "Pomeriggio: Materuni e caffè"
        ]
      }
    ],
    zone: [
      {
        "nome": "Arusha",
        "perChi": "chi parte per il safari",
        "testo": "Città di partenza dei safari, con hotel e agenzie."
      },
      {
        "nome": "Moshi",
        "perChi": "chi sale il Kilimanjaro",
        "testo": "Cittadina ai piedi del monte, con guesthouse."
      }
    ],
    sapori: [
      {
        "nome": "Caffè del Kilimanjaro",
        "testo": "Prodotto sui pendii del monte."
      },
      {
        "nome": "Ugali",
        "testo": "Con stufati di carne."
      },
      {
        "nome": "Nyama choma",
        "testo": "Carne alla brace."
      },
      {
        "nome": "Chai",
        "testo": "Tè speziato."
      }
    ],
    attenzioni: [
      "Prenotare il primo safari il giorno stesso del volo intercontinentale: meglio una notte ad Arusha.",
      "Salire il Kilimanjaro senza acclimatamento: il mal di montagna è comune.",
      "Scegliere un operatore solo per prezzo: contano sicurezza, paga dei portatori e licenza."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Il Kilimanjaro sopra le nuvole, con le acacie in primo piano',
    immagine: '/images/tanzania/kilimanjaro.jpg',
  },
]
