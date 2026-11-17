import type { Destinazione } from '@/lib/types'

// Destinazioni della Tanzania. Rick ha visitato Serengeti, Ngorongoro,
// Tarangire/lago Manyara e Zanzibar (safari con Suricata Safaris); dei suoi
// ricordi ci sono solo le frasi sul safari in tenda, quindi miaEsperienza è
// presente solo sul Serengeti e altrove la UI mostra il placeholder.
// Arusha/Kilimanjaro è la base logistica, non visitata come meta.
// Tariffe: NCAA dalla tabella ufficiale (ncaa.go.tz/tariffs), TANAPA dalle
// tabelle 2026-27 per parco su tanzaniaparks.go.tz (TZS a 2.555 per dollaro), novembre 2026.

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
      "Da Arusha in fuoristrada, di solito passando per Tarangire o Ngorongoro: sono circa 8 ore fino al Seronera, quindi il trasferimento occupa una giornata intera con le soste. In alternativa ci sono voli interni da Arusha o dal Kilimanjaro verso le piste del parco, Seronera al centro e Kogatende al nord, che fanno risparmiare due giorni di strada.",
    comeSpostarsi: 'In fuoristrada con autista-guida: dentro il parco non si cammina da soli.',
    periodoMigliore:
      "da giugno a ottobre (stagione secca, migrazione nel nord da luglio); da dicembre a marzo nel sud, per le nascite",
    costi:
      "Ingresso 70 $ a persona ogni 24 ore in alta stagione (16 maggio-14 marzo), circa 60 €, più IVA del 18%; bambini dai 5 ai 15 anni 20 $. Tassa di pernottamento 60 $ a notte nei lodge e nei campi da luglio a settembre, 30 $ nel campeggio pubblico (2026). Budget: circa 250-300 € a persona al giorno con un safari in campeggio di gruppo, ingressi compresi. Medio: 400-600 € in campo tendato o lodge con fuoristrada privato. Alto: oltre 900 € nei campi di lusso con voli interni.",
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
        "testo": "Il centro del parco, una delle zone migliori per i grandi felini: leoni, leopardi sulle acacie e ghepardi sulle pianure. I kopje, gli affioramenti di granito, sono il posto dove i leoni riposano. Il fiume Seronera ha acqua anche nella stagione secca, quindi qui gli animali ci sono tutto l'anno.",
        "come": "Game drive in fuoristrada con guida, dal lodge o dal campo. Non si scende dall'auto fuori dai punti consentiti.",
        "quando": "Tutto l'anno. Gli animali sono più attivi all'alba e nel tardo pomeriggio.",
        "tempo": "1 giorno o più",
        "costo": "Ingresso 70 $ a persona ogni 24 ore in alta stagione (16 maggio-14 marzo), circa 60 €, più IVA del 18%; bambini dai 5 ai 15 anni 20 $, circa 17 € (2026)",
        "orari": "Aperto tutti i giorni dell'anno; i cancelli chiudono alle 18.",
        "lat": -2.4361,
        "lng": 34.8211,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/serengeti",
        "consiglio": "Ho fatto il safari con Suricata Safaris, che ha anche le esperienze in tenda dentro il parco: le consiglio."
      },
      {
        "nome": "Centro visitatori di Seronera",
        "testo": "Un piccolo centro informazioni costruito attorno a un kopje, con un sentiero a pannelli che spiega l'ecosistema del Serengeti e la migrazione. Tra le rocce si vedono spesso iraci e lucertole agama, e c'è un'area picnic.",
        "come": "Si raggiunge in pochi minuti dalla pista principale del Seronera; è l'unico posto della zona dove si cammina liberamente.",
        "quando": "A metà giornata, nella pausa tra i due game drive.",
        "tempo": "1 ora",
        "lat": -2.4462,
        "lng": 34.8184
      },
      {
        "nome": "Gol Kopjes",
        "testo": "Un gruppo di kopje nelle pianure orientali a erba corta, una delle zone più adatte per i ghepardi. Nella stagione delle piogge le mandrie della migrazione pascolano proprio qui intorno.",
        "come": "In fuoristrada con guida, dalla strada tra il cancello di Naabi Hill e il Seronera. L'accesso è regolato e il veicolo paga un permesso a parte.",
        "quando": "Da dicembre a marzo, quando le pianure sono verdi.",
        "tempo": "Mezza giornata",
        "costo": "Permesso del veicolo per i Gol Kopjes 10 $, circa 9 €, oltre all'ingresso al parco (2026)",
        "lat": -2.768,
        "lng": 35.0909,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/serengeti"
      },
      {
        "nome": "Moru Kopjes",
        "testo": "Kopje più grandi e scenografici a sud-ovest del Seronera, con la Gong Rock, una roccia che risuona se battuta, e antiche pitture rupestri maasai. È una delle poche zone del parco dove a volte si vedono rinoceronti neri.",
        "come": "In fuoristrada con guida, circa un'ora a sud-ovest del Seronera.",
        "quando": "Tutto l'anno; da dicembre a maggio passano anche le mandrie.",
        "tempo": "Mezza giornata"
      },
      {
        "nome": "Pianure del sud e Ndutu",
        "testo": "La zona dove nascono i piccoli di gnu, con i predatori che li seguono. Secondo TANAPA la stagione dei parti è soprattutto tra gennaio e febbraio. Il lago Ndutu è già dentro l'area di conservazione di Ngorongoro, che ha tariffe proprie.",
        "come": "Dal Seronera o dal Ngorongoro in fuoristrada, con guida; molti campi stagionali si spostano qui da dicembre a marzo.",
        "quando": "Soprattutto gennaio e febbraio.",
        "tempo": "1-2 giorni",
        "lat": -3.0033,
        "lng": 34.997,
        "url": "https://www.tanzaniaparks.go.tz/serengeti"
      },
      {
        "nome": "Corridoio occidentale e fiume Grumeti",
        "testo": "La lunga lingua di parco che scende verso il lago Vittoria, attraversata dal fiume Grumeti. Le mandrie lo attraversano di solito tra maggio e luglio, e nel fiume vivono coccodrilli enormi.",
        "come": "In fuoristrada dal Seronera, 2-3 ore verso ovest; i campi della zona hanno anche piste d'atterraggio.",
        "quando": "Da maggio a luglio per la migrazione.",
        "tempo": "1-2 giorni",
        "lat": -2.0846,
        "lng": 33.8001
      },
      {
        "nome": "Lobo e il nord-est",
        "testo": "Colline e kopje nella parte nord-orientale, molto meno frequentata del centro. Nella stagione secca ci passano le mandrie dirette verso il Kenya o di ritorno.",
        "come": "In fuoristrada dal Seronera, circa 3 ore verso nord.",
        "quando": "Da agosto a novembre.",
        "tempo": "1 giorno",
        "lat": -1.937,
        "lng": 35.1271
      },
      {
        "nome": "Fiume Mara e migrazione",
        "testo": "Nel nord del parco, durante la stagione secca, gli attraversamenti del fiume Mara da parte di gnu e zebre, con i coccodrilli ad aspettare. Il villaggio di riferimento è Kogatende, con una pista d'atterraggio.",
        "come": "Da Seronera in fuoristrada, molte ore di strada; molti arrivano in volo a Kogatende e dormono nei campi fissi del nord.",
        "quando": "Stagione secca: TANAPA indica giugno-ottobre per la migrazione. Il momento esatto degli attraversamenti cambia ogni anno.",
        "tempo": "1-2 giorni",
        "lat": -1.7038,
        "lng": 35.0033,
        "url": "https://www.tanzaniaparks.go.tz/serengeti",
        "consiglio": "Chiedere all'operatore dove si trova la migrazione nel mese di viaggio: cambia ogni anno."
      },
      {
        "nome": "Mongolfiera all'alba",
        "testo": "Un volo di circa un'ora sopra la pianura al sorgere del sole, di solito seguito da una colazione nella savana. Si vola soprattutto sopra il Seronera e, in stagione, sopra le pianure del sud e il nord.",
        "come": "Si prenota con un operatore autorizzato, con partenza prima dell'alba dal campo.",
        "quando": "Alba.",
        "tempo": "3-4 ore",
        "costo": "Il volo si paga all'operatore; il parco applica una tassa di 50 $ a persona, circa 43 € (2026)"
      },
      {
        "nome": "Safari a piedi con ranger",
        "testo": "Camminate guidate da un ranger armato, che fanno vedere la savana da vicino: tracce, piante, insetti e animali piccoli che dal fuoristrada sfuggono.",
        "come": "Si organizzano con l'operatore o al quartier generale del parco; servono ranger e permesso.",
        "quando": "Mattina presto, prima del caldo.",
        "tempo": "1-4 ore",
        "costo": "20 $ a persona per le camminate fino a 4 ore, circa 17 €; 25 $ oltre le 4 ore, circa 22 € (2026)",
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/serengeti"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Volo da Arusha a una pista del Seronera",
          "Game drive nella valle del Seronera e ai kopje",
          "Volo di rientro nel pomeriggio, oppure notte nel parco"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: ingresso da Naabi Hill, Gol Kopjes, pomeriggio al Seronera e tramonto con i leoni",
          "Giorno 2: alba con la mongolfiera o game drive, centro visitatori, partenza"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Naabi Hill, Gol Kopjes e Seronera",
          "Giorno 2: Seronera all'alba e Moru Kopjes",
          "Giorno 3: nord o sud secondo il mese, in base alla migrazione"
        ]
      }
    ],
    zone: [
      {
        "nome": "Seronera (centro)",
        "perChi": "chi ha pochi giorni e vuole i grandi felini",
        "testo": "La zona con più lodge, campi tendati e campeggi pubblici, e con animali tutto l'anno. In alta stagione è anche la più trafficata. Chi dorme nel parco paga una tassa di pernottamento a persona: 60 $ a notte nei lodge e nei campi da luglio a settembre, 30 $ nel campeggio pubblico (circa 52 € e 26 €, 2026)."
      },
      {
        "nome": "Sud e Ndutu",
        "perChi": "chi viaggia da dicembre a marzo",
        "testo": "Campi tendati stagionali vicino alle mandrie e alla stagione dei parti. Fuori stagione la zona si svuota."
      },
      {
        "nome": "Nord e Kogatende",
        "perChi": "chi vuole gli attraversamenti del Mara",
        "testo": "Campi fissi e stagionali lungo il fiume Mara, lontani da tutto: di solito ci si arriva in volo."
      },
      {
        "nome": "Corridoio occidentale",
        "perChi": "chi viaggia tra maggio e luglio e cerca meno veicoli",
        "testo": "Lodge e campi verso il fiume Grumeti e le riserve private confinanti."
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
    gite: [
      {
        "nome": "Gola di Olduvai",
        "distanza": "circa 1 ora d'auto dal cancello di Naabi Hill",
        "come": "In fuoristrada, sulla strada tra il Serengeti e il cratere di Ngorongoro.",
        "testo": "Il sito dove sono stati trovati i resti di Homo habilis, con un museo affacciato sulla gola. È la sosta naturale lungo il trasferimento."
      },
      {
        "nome": "Cratere di Ngorongoro",
        "distanza": "circa 3 ore d'auto dal Seronera",
        "come": "In fuoristrada con guida, di solito dormendo sul bordo del cratere o a Karatu.",
        "testo": "La caldera piena di animali, con i rinoceronti neri: quasi tutti la combinano con il Serengeti, all'andata o al ritorno."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono al Serengeti?",
        "risposta": "Almeno due notti dentro il parco. Con un giorno solo si passa più tempo in strada che a guardare animali; con tre si può seguire la migrazione nella zona giusta per il mese."
      },
      {
        "domanda": "Quanto costa l'ingresso al Serengeti nel 2026?",
        "risposta": "70 $ a persona ogni 24 ore in alta stagione (16 maggio-14 marzo), più IVA del 18%, e 20 $ per i bambini dai 5 ai 15 anni. A questo si aggiunge la tassa di pernottamento se si dorme nel parco."
      },
      {
        "domanda": "Qual è il mese migliore per la Grande Migrazione?",
        "risposta": "Dipende da cosa si vuole vedere: i parti nel sud a gennaio e febbraio, il corridoio occidentale tra maggio e luglio, gli attraversamenti del Mara da luglio a ottobre. Le date cambiano ogni anno con le piogge."
      },
      {
        "domanda": "Si può fare il Serengeti da soli?",
        "risposta": "Si può entrare con un fuoristrada proprio, ma la quasi totalità dei visitatori va con un operatore e un autista-guida. Dentro il parco non si cammina senza ranger e non si scende dall'auto fuori dai punti consentiti."
      },
      {
        "domanda": "Meglio campo tendato o lodge?",
        "risposta": "Il campo tendato fa sentire la savana anche di notte e spesso è più vicino agli animali; il lodge ha camere vere e piscina. I campi stagionali si spostano con la migrazione, i lodge no."
      },
      {
        "domanda": "Fa freddo durante i game drive?",
        "risposta": "All'alba sì, soprattutto da giugno ad agosto e sul fuoristrada aperto. Serve una felpa o un piumino leggero, che a metà mattina si toglie."
      }
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
      'Lodge e campeggi sul bordo del cratere, a circa 2.300 metri: di notte fa molto freddo. Più economico dormire a Karatu, fuori dall\'area protetta, e salire la mattina presto.',
    comeArrivare:
      "Da Arusha in fuoristrada, circa 3-4 ore su strada asfaltata passando per Mto wa Mbu e Karatu fino al cancello di Lodoare. È anche la tappa di passaggio tra Arusha e il Serengeti: la strada verso Naabi Hill attraversa l'area protetta, quindi l'ingresso si paga anche solo transitando. Chi arriva in volo atterra di solito a Manyara o a Arusha e prosegue in auto.",
    comeSpostarsi: 'In fuoristrada con autista-guida, con discesa e risalita su piste dedicate.',
    periodoMigliore: 'tutto l\'anno; nella stagione secca l\'erba è bassa e gli animali si vedono meglio',
    costi:
      "Tariffe ufficiali NCAA per i visitatori non residenti fuori dall'Africa orientale: ingresso 70,80 $ a persona ogni 24 ore, circa 61 € (23,60 $ per i bambini dai 5 ai 15 anni), più 295 $ a veicolo per ogni discesa nel cratere e il permesso per il fuoristrada; tassa di pernottamento 59 $ a notte nei lodge (2026). Budget: circa 250-300 € a persona al giorno con safari in campeggio e notte a Karatu. Medio: 400-550 € con lodge sul bordo o a Karatu e fuoristrada privato. Alto: oltre 900 € nei lodge di lusso sul bordo.",
    erroriDaEvitare: [
      'Scendere a metà mattina: i primi veicoli entrano all\'alba e trovano il cratere più vuoto',
      'Sottovalutare il freddo sul bordo, di sera e al mattino presto',
      'Fare il conto del safari senza la tassa del cratere, che si paga a veicolo e quindi pesa di più sui gruppi piccoli',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Fondo del cratere e lago Magadi",
        "testo": "Il fondo di una caldera vulcanica intatta di circa 260 km², profonda circa 610 metri, con il lago salato Magadi e paludi. Ci vivono leoni, elefanti, ippopotami e una piccola popolazione di rinoceronti neri; sul lago, quando c'è acqua, si posano i fenicotteri.",
        "come": "Si scende per una strada ripida in fuoristrada con guida. Ogni discesa paga una tassa a veicolo.",
        "quando": "Alba: i primi veicoli entrano presto e trovano il cratere più vuoto.",
        "tempo": "Mezza giornata",
        "costo": "70,80 $ a persona per 24 ore per i non residenti dai 16 anni, circa 61 € (23,60 $ dai 5 ai 15), più 295 $ a veicolo per ogni discesa nel cratere, circa 254 € (2026)",
        "orari": "Tutti i giorni: cancelli dell'area protetta dalle 6 alle 18, accesso al cratere dalle 6 alle 16.",
        "lat": -3.1936,
        "lng": 35.5404,
        "url": "https://www.ncaa.go.tz/tariffs/",
        "consiglio": "La tassa del cratere è per veicolo: pesa di più sui gruppi piccoli."
      },
      {
        "nome": "Foresta di Lerai",
        "testo": "Un bosco di acacie dalla corteccia gialla sul fondo del cratere, alimentato dalle sorgenti che scendono dalle pareti. È il posto dove gli elefanti maschi passano le ore calde e dove si cercano i rinoceronti al margine degli alberi.",
        "come": "Durante il game drive sul fondo del cratere, vicino alla strada di risalita.",
        "quando": "Mattina e primo pomeriggio.",
        "tempo": "30-60 minuti",
        "lat": -3.2199,
        "lng": 35.5193,
        "url": "https://www.ncaa.go.tz/ngorongoro-crater/"
      },
      {
        "nome": "Sorgenti di Ngoitokitok",
        "testo": "La principale area picnic del cratere, accanto a uno stagno con gli ippopotami. I nibbi sono abilissimi a rubare il cibo dalle mani: meglio mangiare dentro l'auto.",
        "come": "Sul lato orientale del fondo, durante il game drive.",
        "quando": "Pranzo.",
        "tempo": "1 ora",
        "lat": -3.2103,
        "lng": 35.6012,
        "consiglio": "Il pranzo caldo servito nel cratere paga un permesso di 23,60 $ a veicolo; il cestino del lodge no."
      },
      {
        "nome": "Bordo del cratere",
        "testo": "La strada che corre lungo il bordo, a circa 2.300 metri, con i punti panoramici sulla caldera e la foresta montana dove a volte si incontrano elefanti e bufali. Di mattina presto il fondo è spesso coperto dalla nebbia.",
        "come": "In auto, sulla strada tra il cancello di Lodoare e i lodge del bordo.",
        "quando": "Tramonto e alba, nebbia permettendo.",
        "tempo": "30 minuti",
        "url": "https://www.ncaa.go.tz/ngorongoro-crater/"
      },
      {
        "nome": "Gola di Olduvai",
        "testo": "Il sito paleoantropologico nelle pianure della Conservation Area, fuori dal cratere, dove sono stati trovati i resti di Homo habilis. Il museo affacciato sulla gola spiega gli scavi e conserva calchi dei reperti.",
        "come": "Sulla strada tra il cratere e il Serengeti, con una deviazione di pochi chilometri.",
        "quando": "Mattina.",
        "tempo": "1 ora",
        "costo": "35,40 $ a persona dai 16 anni, circa 30 €, insieme a Shifting Sand (2026)",
        "lat": -2.9936,
        "lng": 35.3511,
        "url": "https://www.ncaa.go.tz/olduvai-gorge/"
      },
      {
        "nome": "Shifting Sands",
        "testo": "Una duna di cenere vulcanica nera, arrivata dall'Ol Doinyo Lengai, che il vento sposta ogni anno di qualche metro sulla pianura. Un cippo segna dov'era negli anni passati.",
        "come": "In fuoristrada da Olduvai, su piste nella pianura; serve una guida che conosca la strada.",
        "quando": "Mattina, prima del caldo.",
        "tempo": "1 ora",
        "costo": "Compreso nel biglietto di Olduvai, 35,40 $ (2026)",
        "url": "https://www.ncaa.go.tz/tariffs/"
      },
      {
        "nome": "Impronte di Laetoli",
        "testo": "Le impronte di ominidi lasciate nella cenere vulcanica circa 3,6 milioni di anni fa, tra le più antiche tracce di camminata eretta. Le originali sono ricoperte per proteggerle; sul posto ci sono una riproduzione e pannelli.",
        "come": "In fuoristrada, a sud di Olduvai su piste lunghe: si visita con una guida e mezza giornata a disposizione.",
        "quando": "Mattina.",
        "tempo": "Mezza giornata",
        "costo": "23,60 $ a persona dai 16 anni, circa 20 € (2026)",
        "url": "https://www.ncaa.go.tz/tariffs/"
      },
      {
        "nome": "Cratere di Empakaai",
        "testo": "Un cratere più piccolo e selvaggio a nord-est, con un lago alcalino sul fondo dove si radunano i fenicotteri. Dal bordo, nelle giornate limpide, si vede il vulcano Ol Doinyo Lengai e si scende a piedi fino al lago.",
        "come": "In fuoristrada, 2-3 ore dal bordo del Ngorongoro; la discesa a piedi si fa con un ranger armato.",
        "quando": "Mattina, con la luce migliore sul lago.",
        "tempo": "Una giornata",
        "costo": "Camminata con ranger 23,60 $ a persona fino a 4 ore, circa 20 € (2026)",
        "lat": -2.9126,
        "lng": 35.7871,
        "url": "https://www.ncaa.go.tz/empakai-crater/"
      },
      {
        "nome": "Cratere di Olmoti",
        "testo": "Un cratere poco profondo coperto d'erba, a nord del Ngorongoro, con un sentiero che porta alla cascata da cui nasce il fiume Munge. È una camminata breve tra pascoli maasai.",
        "come": "In fuoristrada fino al villaggio di Nainokanoka, poi a piedi con un ranger.",
        "quando": "Mattina.",
        "tempo": "Mezza giornata",
        "costo": "Camminata con ranger 23,60 $ a persona fino a 4 ore, circa 20 € (2026)",
        "lat": -3.0115,
        "lng": 35.6497,
        "url": "https://www.ncaa.go.tz/olmoti-crater/"
      },
      {
        "nome": "Endoro e le grotte degli elefanti",
        "testo": "Un sentiero nella foresta montana dell'area protetta che porta alle grotte scavate dagli elefanti per leccare il sale minerale della roccia, e a una cascata.",
        "come": "A piedi con un ranger, organizzato con l'operatore.",
        "quando": "Mattina.",
        "tempo": "2-3 ore",
        "costo": "17,70 $ a persona dai 16 anni, circa 15 € (2026)",
        "url": "https://www.ncaa.go.tz/tariffs/"
      },
      {
        "nome": "Boma Maasai",
        "testo": "Una visita a un villaggio Maasai, con danze, case di fango e spiegazioni sulla vita dei pastori, che nell'area protetta vivono ancora con le loro mandrie.",
        "come": "Con l'operatore, sulla strada intorno al cratere.",
        "quando": "Mattina.",
        "tempo": "1 ora",
        "consiglio": "Chiedere in anticipo cosa è incluso e quanto va ai villaggi.",
        "costo": "Ingresso ai boma culturali 20 $ a veicolo, circa 17 € (2026), più l'offerta che chiede il villaggio",
        "url": "https://www.ncaa.go.tz/tariffs/"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Alba: discesa nel cratere, lago Magadi e foresta di Lerai",
          "Pranzo alle sorgenti di Ngoitokitok",
          "Pomeriggio: risalita, visita al boma o a Olduvai"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: cratere dall'alba al primo pomeriggio, notte sul bordo",
          "Giorno 2: Olduvai e Shifting Sands, poi verso il Serengeti"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: cratere",
          "Giorno 2: Olmoti e la cascata, notte in zona",
          "Giorno 3: discesa a piedi nel cratere di Empakaai"
        ]
      }
    ],
    zone: [
      {
        "nome": "Bordo del cratere",
        "perChi": "chi vuole la vista e l'alba nel cratere",
        "testo": "Lodge e campeggio pubblico sul bordo, con vista sulla caldera; di notte fa molto freddo. Dentro l'area protetta si paga una tassa di pernottamento di 59 $ a persona a notte nei lodge e nei campi, circa 51 €, e 35,40 $ nel campeggio pubblico (2026)."
      },
      {
        "nome": "Karatu",
        "perChi": "chi vuole spendere meno",
        "testo": "Cittadina tra piantagioni di caffè a una ventina di minuti dal cancello di Lodoare, con lodge e campeggi fuori dall'area protetta: niente tassa di pernottamento, ma sveglia presto."
      },
      {
        "nome": "Ndutu",
        "perChi": "chi viaggia da dicembre a marzo",
        "testo": "Campi stagionali nella parte occidentale dell'area protetta, al confine con il Serengeti, vicino alle mandrie nella stagione dei parti."
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
    gite: [
      {
        "nome": "Lago Eyasi",
        "distanza": "circa 1,5-2 ore d'auto da Karatu",
        "come": "In fuoristrada con l'operatore, partendo prima dell'alba.",
        "testo": "Un lago salato ai piedi della scarpata, dove vivono gli Hadzabe, tra gli ultimi cacciatori-raccoglitori dell'Africa orientale, e pastori Datoga. Si esce con loro all'alba."
      },
      {
        "nome": "Lago Manyara",
        "distanza": "circa 1 ora d'auto da Karatu",
        "come": "In fuoristrada, sulla strada asfaltata verso Mto wa Mbu.",
        "testo": "Il parco della foresta e del lago alcalino sotto la scarpata della Rift Valley, che si gira in mezza giornata."
      },
      {
        "nome": "Lago Natron",
        "distanza": "circa 3 ore di pista da Empakaai",
        "come": "In fuoristrada, scendendo dalle Highlands verso la Rift Valley; meglio con una notte sul posto.",
        "testo": "Il lago rosso dove nidificano i fenicotteri minori, ai piedi dell'Ol Doinyo Lengai, il vulcano sacro dei Maasai."
      }
    ],
    faq: [
      {
        "domanda": "Quanto costa visitare il cratere di Ngorongoro nel 2026?",
        "risposta": "70,80 $ a persona per 24 ore di ingresso all'area protetta, più 295 $ a veicolo per ogni discesa nel cratere. In quattro su un fuoristrada la tassa del cratere pesa poco più di 70 $ a testa."
      },
      {
        "domanda": "Quanto tempo si può restare nel cratere?",
        "risposta": "L'accesso al cratere è dalle 6 alle 16 e i cancelli dell'area protetta chiudono alle 18. Mezza giornata sul fondo basta per vedere quasi tutto."
      },
      {
        "domanda": "Si vedono davvero i rinoceronti neri?",
        "risposta": "Spesso, ma da lontano: sono pochi e vivono soprattutto nelle zone aperte vicino alla foresta di Lerai. Un binocolo fa la differenza."
      },
      {
        "domanda": "Conviene dormire sul bordo o a Karatu?",
        "risposta": "Sul bordo si è al cancello del cratere all'alba e si ha la vista, ma si paga la tassa di pernottamento e fa freddo. Karatu costa meno e dista una ventina di minuti dal cancello di Lodoare."
      },
      {
        "domanda": "Il Ngorongoro fa parte dei parchi TANAPA?",
        "risposta": "No: è un'area di conservazione gestita dalla NCAA, con tariffe proprie. Si paga anche solo attraversandola per andare al Serengeti."
      },
      {
        "domanda": "Che cosa portare per il cratere?",
        "risposta": "Strati caldi per la mattina sul bordo, binocolo e acqua. Il pranzo si mangia nelle aree picnic, meglio dentro l'auto per via dei nibbi."
      }
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
    comeArrivare:
      "Da Arusha in fuoristrada: Tarangire è a circa 120 km, poco meno di 2 ore su strada asfaltata verso sud, e il lago Manyara a circa 2 ore verso ovest, sulla strada per Karatu e il Ngorongoro. Per questo sono le prime tappe del circuito nord. C'è anche una pista d'atterraggio a Manyara, servita dai voli interni da Arusha.",
    comeSpostarsi: 'In fuoristrada con autista-guida.',
    periodoMigliore: 'da giugno a ottobre, quando gli animali si concentrano attorno all\'acqua',
    costi:
      "Ingresso a ciascun parco 50 $ a persona ogni 24 ore in alta stagione (16 maggio-14 marzo), circa 43 €, più IVA del 18%; bambini dai 5 ai 15 anni 15 $. Tassa di pernottamento 40 $ a notte nei lodge dentro i parchi; safari notturno 50 $, canoa a Manyara 20 $ (2026). Budget: circa 200-250 € a persona al giorno con safari di gruppo e notte a Mto wa Mbu. Medio: 350-500 € con lodge e fuoristrada privato. Alto: oltre 700 € nei campi di lusso di Tarangire.",
    erroriDaEvitare: [
      'Saltare Tarangire per correre verso il Serengeti: nella stagione secca vale da solo il viaggio',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Parco di Tarangire",
        "testo": "Baobab, migliaia di elefanti, la popolazione più densa della Tanzania secondo TANAPA, e animali che si concentrano attorno al fiume nella stagione secca. Oltre agli elefanti ci sono leoni, giraffe, bufali e oltre 500 specie di uccelli.",
        "come": "Game drive in fuoristrada con guida, dal cancello principale a nord.",
        "quando": "Stagione secca, quando gli animali si radunano attorno all'acqua.",
        "tempo": "1 giorno",
        "costo": "Ingresso 50 $ a persona ogni 24 ore in alta stagione (16 maggio-14 marzo), circa 43 €, più IVA del 18%; bambini dai 5 ai 15 anni 15 $, circa 13 € (2026)",
        "orari": "Aperto tutti i giorni dell'anno; i cancelli chiudono alle 18.",
        "lat": -3.8333,
        "lng": 36,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/tarangire",
        "consiglio": "Nella stagione secca vale da solo il viaggio: non saltarlo per correre verso il Serengeti."
      },
      {
        "nome": "Fiume Tarangire e i baobab",
        "testo": "Il fiume che dà il nome al parco è l'unica acqua permanente della zona: nella stagione secca i branchi di elefanti scavano nel letto sabbioso per bere. Lungo le rive crescono baobab enormi, alcuni con le cicatrici lasciate dalle zanne.",
        "come": "Con il game drive, seguendo le piste lungo il fiume nella parte nord del parco.",
        "quando": "Da luglio a ottobre.",
        "tempo": "Mezza giornata"
      },
      {
        "nome": "Palude di Silale",
        "testo": "Una grande palude nel centro-sud del parco che resta verde anche nella stagione secca e attira elefanti, bufali e i leoni che li seguono. È una delle zone migliori per gli uccelli acquatici.",
        "come": "Con il game drive, circa un'ora a sud del cancello principale.",
        "quando": "Stagione secca.",
        "tempo": "Mezza giornata",
        "lat": -4.0207,
        "lng": 36.1372
      },
      {
        "nome": "Safari notturno a Tarangire",
        "testo": "Un game drive dopo il tramonto con i fari, per vedere gli animali notturni: genette, istrici, iene e, con fortuna, leopardi a caccia.",
        "come": "Solo con operatori e lodge autorizzati, che seguono regole specifiche del parco.",
        "quando": "Dopo il tramonto.",
        "tempo": "2-3 ore",
        "costo": "50 $ a persona, circa 43 €; bambini dai 5 ai 15 anni 25 $ (2026)",
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/tarangire"
      },
      {
        "nome": "Safari a piedi a Tarangire",
        "testo": "Camminate con un ranger armato nella savana del parco, tra termitai e baobab, per leggere tracce e vedere gli animali alla loro altezza.",
        "come": "Con l'operatore o dai lodge del parco; servono ranger e permesso.",
        "quando": "Mattina presto.",
        "tempo": "1-4 ore",
        "costo": "20 $ a persona fino a 4 ore, circa 17 €; 25 $ oltre, circa 22 € (2026)",
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/tarangire"
      },
      {
        "nome": "Lago Manyara",
        "testo": "Una foresta alimentata da acque sotterranee, con mogani, fichi e cercopitechi blu, il lago alcalino con i fenicotteri minori quando il livello lo permette e la scarpata della Rift Valley sopra. È famoso per i leoni che salgono sugli alberi.",
        "come": "Game drive di mezza giornata dal cancello vicino a Mto wa Mbu.",
        "quando": "Mattina.",
        "tempo": "Mezza giornata",
        "costo": "Ingresso 50 $ a persona ogni 24 ore in alta stagione, circa 43 €, più IVA del 18%; bambini dai 5 ai 15 anni 15 $ (2026)",
        "orari": "Aperto tutti i giorni dell'anno; i cancelli chiudono alle 18.",
        "lat": -3.5833,
        "lng": 35.8333,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/manyara"
      },
      {
        "nome": "Passerella sospesa del lago Manyara",
        "testo": "Una passerella di ponti sospesi tra le chiome della foresta, all'altezza delle scimmie e degli uccelli. È uno dei pochi modi per stare a piedi dentro il parco.",
        "come": "Dal centro di accoglienza vicino all'ingresso del parco, con una guida.",
        "quando": "Mattina, quando la foresta è più viva.",
        "tempo": "1 ora",
        "lat": -3.3746,
        "lng": 35.8366
      },
      {
        "nome": "Sorgenti calde di Maji Moto",
        "testo": "Sorgenti di acqua calda nella parte meridionale del parco, dove la foresta lascia spazio alla riva del lago. È il punto più lontano del giro classico.",
        "come": "Con il game drive, percorrendo la pista ai piedi della scarpata fino in fondo al parco.",
        "quando": "Tarda mattinata.",
        "tempo": "2-3 ore andata e ritorno dall'ingresso"
      },
      {
        "nome": "Canoa sul lago Manyara",
        "testo": "Un'uscita in canoa sul lago, tra uccelli acquatici e ippopotami a distanza, possibile solo quando il livello dell'acqua lo consente.",
        "come": "Con un operatore autorizzato, insieme a una guida.",
        "quando": "Mattina presto o tardo pomeriggio.",
        "tempo": "2 ore",
        "costo": "20 $ a persona, circa 17 € (2026)",
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/manyara"
      },
      {
        "nome": "Mto wa Mbu",
        "testo": "Il paese vicino all'ingresso del Lago Manyara, sulla strada per il Ngorongoro, dove la banana è la coltura principale. Vivono qui persone di molte etnie diverse, e il mercato e le piantagioni si girano con una guida locale.",
        "come": "A piedi o in bici con una guida locale.",
        "quando": "Mattina.",
        "tempo": "1-2 ore",
        "lat": -3.35,
        "lng": 35.85
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Da Arusha a Tarangire all'alba",
          "Game drive lungo il fiume e tra i baobab",
          "Pomeriggio verso Mto wa Mbu o Karatu"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Tarangire",
          "Giorno 2: Manyara, passerella sospesa e Mto wa Mbu"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Tarangire nord e fiume",
          "Giorno 2: palude di Silale, safari a piedi o notturno",
          "Giorno 3: lago Manyara e Mto wa Mbu"
        ]
      }
    ],
    zone: [
      {
        "nome": "Dentro o al bordo di Tarangire",
        "perChi": "chi vuole il safari vero",
        "testo": "Lodge e campi tendati dentro il parco o nelle aree confinanti, con elefanti che passano vicino alle tende. Dentro il parco si paga una tassa di pernottamento di 40 $ a persona a notte, circa 34 € (2026)."
      },
      {
        "nome": "Mto wa Mbu",
        "perChi": "chi vuole spendere meno ed essere vicino a Manyara",
        "testo": "Guesthouse, lodge semplici e campeggi in paese, a pochi minuti dal cancello del lago Manyara."
      },
      {
        "nome": "Karatu",
        "perChi": "chi prosegue verso il Ngorongoro",
        "testo": "Lodge tra le piantagioni di caffè, a circa mezz'ora da Mto wa Mbu e vicino al cancello del Ngorongoro."
      }
    ],
    sapori: [
      {
        "nome": "Ugali",
        "testo": "Con stufati di carne."
      },
      {
        "nome": "Banane fritte",
        "testo": "Spuntino comune nei mercati della zona."
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
    gite: [
      {
        "nome": "Cratere di Ngorongoro",
        "distanza": "circa 1,5 ore d'auto da Mto wa Mbu",
        "come": "In fuoristrada con guida, sulla strada asfaltata via Karatu.",
        "testo": "La caldera piena di animali, con i rinoceronti neri: è la tappa successiva naturale del circuito nord."
      },
      {
        "nome": "Lago Natron",
        "distanza": "circa 3 ore di strada e pista da Mto wa Mbu",
        "come": "In fuoristrada, risalendo la Rift Valley verso nord; meglio con una notte sul posto.",
        "testo": "Il lago alcalino dove nidificano i fenicotteri minori, ai piedi del vulcano Ol Doinyo Lengai, con cascate da raggiungere a piedi lungo un torrente."
      }
    ],
    faq: [
      {
        "domanda": "Vale la pena vedere Tarangire se poi si va al Serengeti?",
        "risposta": "Sì, soprattutto da luglio a ottobre: la concentrazione di elefanti e i baobab sono diversi da tutto il resto del circuito. È anche il parco più vicino ad Arusha, comodo per il primo giorno."
      },
      {
        "domanda": "Quanto costano Tarangire e Manyara nel 2026?",
        "risposta": "50 $ a persona ogni 24 ore per ciascun parco in alta stagione, più IVA del 18%, e 15 $ per i bambini dai 5 ai 15 anni. Safari notturno, camminate e canoa si pagano a parte."
      },
      {
        "domanda": "Basta mezza giornata per il lago Manyara?",
        "risposta": "Sì, per il giro classico tra foresta e lago. Chi vuole arrivare fino alle sorgenti di Maji Moto o fare la passerella sospesa con calma ha bisogno di quasi tutta la giornata."
      },
      {
        "domanda": "Si vedono i leoni sugli alberi a Manyara?",
        "risposta": "A volte, ma non è garantito: sono la fama del parco più che una certezza. La foresta, i babbuini e gli uccelli sono invece sempre lì."
      },
      {
        "domanda": "Si vedono i fenicotteri tutto l'anno?",
        "risposta": "No: dipende dal livello dell'acqua del lago, che cambia molto da un anno all'altro. Conviene chiedere all'operatore com'è la situazione prima di partire."
      },
      {
        "domanda": "Ci sono mosche tse-tse a Tarangire?",
        "risposta": "In alcune zone boscose sì. Aiutano vestiti chiari e lunghi, evitando il blu e il nero che le attirano, e un repellente."
      }
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
      "L'aeroporto di Zanzibar (ZNZ) è a una ventina di minuti da Stone Town ed è servito da voli interni da Arusha, dal Kilimanjaro e da Dar es Salaam, oltre che da voli internazionali diretti. Da Dar es Salaam ci sono anche i traghetti veloci, circa 2 ore fino al porto di Stone Town. All'ingresso serve l'assicurazione obbligatoria di Zanzibar (44 $).",
    comeSpostarsi: 'Taxi o transfer concordati tra Stone Town e le spiagge; a Stone Town si gira a piedi.',
    periodoMigliore: 'da giugno a ottobre e da dicembre a febbraio, fuori dalle stagioni delle piogge',
    costi:
      "Assicurazione obbligatoria 44 $ a persona per soggiorni fino a 92 giorni, circa 38 €. Budget: circa 40-60 € al giorno con guesthouse, cibo ai Forodhani Gardens e dala dala. Medio: 100-160 € con hotel sul mare, taxi e qualche uscita in barca. Alto: oltre 350 € nei resort sulla spiaggia o negli hotel storici di Stone Town.",
    erroriDaEvitare: [
      'Scegliere la costa est senza sapere della marea: con la bassa marea il mare si ritira per centinaia di metri',
      'Girare per Stone Town in costume o canottiera: fuori dalle spiagge ci si copre spalle e ginocchia',
      "Arrivare senza l'assicurazione di Zanzibar già comprata online, e fare la fila in aeroporto",
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Stone Town",
        "testo": "La città vecchia di vicoli, porte di legno intagliato e lungomare, patrimonio UNESCO dal 2000, dove l'architettura mescola influssi arabi, persiani, indiani ed europei con la cultura swahili. Si gira a piedi in una mattina, perdendosi apposta tra le stradine.",
        "come": "A piedi nei vicoli, con una guida per il primo giorno.",
        "quando": "Mattina e sera, evitando le ore più calde.",
        "tempo": "Mezza giornata",
        "lat": -6.1624,
        "lng": 39.1913,
        "consiglio": "Cena al mercato serale dei Forodhani Gardens, accanto al Forte Vecchio, quando dopo il tramonto si griglia il pesce."
      },
      {
        "nome": "Forodhani Gardens",
        "testo": "Il giardino sul lungomare di Stone Town che ogni sera diventa un mercato di cibo di strada: spiedini di pesce, polpo, la «pizza di Zanzibar» cotta sulla piastra e succo di canna. Al tramonto i ragazzi si tuffano dal molo.",
        "come": "A piedi dal centro di Stone Town.",
        "quando": "Dal tramonto in poi.",
        "tempo": "1-2 ore",
        "lat": -6.1606,
        "lng": 39.1886,
        "consiglio": "Chiedere il prezzo prima che il pesce finisca sulla griglia."
      },
      {
        "nome": "Forte Vecchio",
        "testo": "Il forte costruito dagli omaniti alla fine del Seicento, l'edificio più antico di Stone Town. Nel cortile ci sono botteghe di artigianato e un anfiteatro dove si tengono concerti ed eventi, tra cui il festival Sauti za Busara.",
        "come": "A piedi, sul lungomare accanto ai Forodhani Gardens.",
        "quando": "Mattina o tardo pomeriggio.",
        "tempo": "30 minuti",
        "lat": -6.1614,
        "lng": 39.1891
      },
      {
        "nome": "Cattedrale anglicana e antico mercato degli schiavi",
        "testo": "La cattedrale di Christ Church fu costruita tra il 1873 e il 1880 sul luogo dell'ultimo mercato degli schiavi di Zanzibar, chiuso nel 1873. Accanto ci sono le celle sotterranee, un piccolo museo e il monumento con le figure incatenate.",
        "come": "A piedi nel quartiere di Mkunazini, con la guida del sito.",
        "quando": "Mattina.",
        "tempo": "1 ora",
        "lat": -6.1629,
        "lng": 39.1926
      },
      {
        "nome": "Mercato di Darajani",
        "testo": "Il mercato principale di Stone Town, con le sezioni del pesce, della carne, della frutta e delle spezie. È rumoroso e affollato, e mostra la città vera dietro i vicoli restaurati.",
        "come": "A piedi, sul confine orientale della città vecchia.",
        "quando": "Mattina presto, quando arriva il pesce.",
        "tempo": "1 ora",
        "lat": -6.1622,
        "lng": 39.1937
      },
      {
        "nome": "Prison Island (Changuu)",
        "testo": "Un'isoletta davanti a Stone Town con la prigione costruita a fine Ottocento e poi usata come stazione di quarantena, e un recinto con le tartarughe giganti di Aldabra. Intorno si fa snorkeling sulla barriera.",
        "come": "In barca da Stone Town, circa mezz'ora.",
        "quando": "Mattina, con il mare più calmo.",
        "tempo": "Mezza giornata",
        "lat": -6.1192,
        "lng": 39.1667
      },
      {
        "nome": "Banco di sabbia di Nakupenda",
        "testo": "Una lingua di sabbia bianca che emerge con la bassa marea davanti a Stone Town, in mezzo al mare turchese. Ci si ferma per il bagno, lo snorkeling e spesso un pranzo di pesce.",
        "come": "In barca da Stone Town; spesso combinata con Prison Island.",
        "quando": "Con la bassa marea, che decide gli orari dell'uscita.",
        "tempo": "Mezza giornata",
        "lat": -6.172,
        "lng": 39.149
      },
      {
        "nome": "Foresta di Jozani",
        "testo": "La foresta del parco nazionale Jozani-Chwaka Bay, con il colobo rosso di Zanzibar, una scimmia che vive solo sull'isola ed è in pericolo. Il giro comprende anche una passerella di legno tra le mangrovie.",
        "come": "In auto da Stone Town, circa 45 minuti; si visita con una guida del parco.",
        "quando": "Mattina.",
        "tempo": "2 ore",
        "lat": -6.233,
        "lng": 39.404
      },
      {
        "nome": "Fattorie delle spezie",
        "testo": "Le piantagioni nell'interno dell'isola dove si vedono crescere chiodi di garofano, cannella, noce moscata, vaniglia e pepe, le spezie che hanno fatto la ricchezza di Zanzibar. Il giro di solito finisce con un assaggio di frutta tropicale.",
        "come": "Con un tour o un autista da Stone Town, a 20-40 minuti d'auto.",
        "quando": "Mattina.",
        "tempo": "2-3 ore"
      },
      {
        "nome": "Atollo di Mnemba",
        "testo": "La barriera corallina attorno all'isoletta privata di Mnemba, nell'area marina protetta, famosa per lo snorkeling con pesci tropicali, tartarughe e spesso delfini. L'isola si guarda dalla barca: lo sbarco è riservato agli ospiti del resort.",
        "come": "In barca da Matemwe o da Nungwi.",
        "quando": "Mattina, con il mare calmo.",
        "tempo": "Mezza giornata",
        "lat": -5.8196,
        "lng": 39.3837,
        "consiglio": "Scegliere un'uscita che non insegua i delfini: alla lunga li allontana."
      },
      {
        "nome": "Nungwi",
        "testo": "Il villaggio sulla punta nord dell'isola, con spiagge dove la marea si sente poco, i cantieri dove si costruiscono ancora i dhow a mano e i tramonti sul mare. È la zona più animata, con locali e ristoranti.",
        "come": "Taxi o dala dala da Stone Town, circa un'ora e mezza.",
        "quando": "Tutto l'anno, per il bagno a qualsiasi ora.",
        "tempo": "Una giornata o più",
        "lat": -5.7272,
        "lng": 39.2992
      },
      {
        "nome": "Kendwa",
        "testo": "La spiaggia a sud di Nungwi, lunga e bianca, dove il mare resta profondo anche con la bassa marea. È la scelta classica per chi vuole nuotare tutto il giorno.",
        "come": "Taxi da Stone Town, circa un'ora e mezza; a piedi sulla spiaggia da Nungwi con la bassa marea.",
        "quando": "Tutto l'anno.",
        "tempo": "Una giornata o più",
        "lat": -5.7535,
        "lng": 39.2897
      },
      {
        "nome": "Paje",
        "testo": "La costa est, con una spiaggia ampia e una laguna poco profonda dove la marea cambia molto il paesaggio: conviene controllarne gli orari. Il vento costante ne ha fatto la capitale del kitesurf dell'isola.",
        "come": "In auto da Stone Town, circa un'ora.",
        "quando": "Con l'alta marea per il bagno; da giugno a settembre e da dicembre a febbraio per il vento.",
        "tempo": "Una giornata",
        "lat": -6.2667,
        "lng": 39.5341
      },
      {
        "nome": "Jambiani",
        "testo": "Un villaggio lungo la costa est, più tranquillo di Paje, dove con la bassa marea le donne coltivano le alghe nella laguna. La spiaggia è lunghissima e il mare cambia colore con le ore.",
        "come": "In auto da Stone Town, circa un'ora e un quarto.",
        "quando": "Con l'alta marea per il bagno.",
        "tempo": "Una giornata",
        "lat": -6.3167,
        "lng": 39.55
      },
      {
        "nome": "Grotta di Kuza",
        "testo": "Una grotta calcarea nell'interno di Jambiani con una piscina di acqua dolce e limpida dove si fa il bagno. Per gli abitanti del villaggio è un luogo con un valore spirituale.",
        "come": "In auto o in bici da Jambiani.",
        "quando": "Nelle ore calde, quando l'acqua fresca fa bene.",
        "tempo": "1 ora",
        "lat": -6.3038,
        "lng": 39.5334
      },
      {
        "nome": "The Rock",
        "testo": "Un ristorante costruito su uno scoglio davanti alla spiaggia di Michamvi Pingwe, raggiungibile a piedi con la bassa marea e in barca con l'alta. È diventato uno dei simboli dell'isola.",
        "come": "In auto da Stone Town o da Paje; si prenota in anticipo.",
        "quando": "Pranzo o tramonto.",
        "tempo": "2 ore",
        "lat": -6.152,
        "lng": 39.5194
      },
      {
        "nome": "Kizimkazi",
        "testo": "Il villaggio di pescatori sulla punta sud, con una delle moschee più antiche dell'Africa orientale, che conserva un'iscrizione del 1107. Da qui partono le barche per avvistare i delfini.",
        "come": "In auto da Stone Town, circa un'ora.",
        "quando": "Mattina presto per i delfini.",
        "tempo": "Mezza giornata",
        "lat": -6.433,
        "lng": 39.4623,
        "consiglio": "Le uscite con i delfini sono spesso affollate: scegliere chi tiene le distanze e non fa tuffare tutti addosso agli animali."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Stone Town a piedi, mercato di Darajani e cattedrale",
          "Pomeriggio: Forte Vecchio e lungomare",
          "Sera: Forodhani Gardens"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Stone Town e Forodhani Gardens",
          "Giorno 2: Prison Island e banco di Nakupenda, poi fattoria delle spezie"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Stone Town",
          "Giorno 2: foresta di Jozani, costa est e The Rock",
          "Giorno 3: snorkeling a Mnemba o spiaggia al nord"
        ]
      }
    ],
    zone: [
      {
        "nome": "Stone Town",
        "perChi": "chi vuole cultura",
        "testo": "Hotel storici e guesthouse nella città vecchia, senza spiaggia: una o due notti bastano."
      },
      {
        "nome": "Nord (Nungwi, Kendwa)",
        "perChi": "chi vuole spiaggia e locali",
        "testo": "Spiagge, locali e vita serale, con il bagno possibile a qualsiasi ora."
      },
      {
        "nome": "Nord-est (Matemwe, Kiwengwa)",
        "perChi": "chi vuole resort tranquilli e Mnemba vicina",
        "testo": "Resort grandi e piccoli su spiagge lunghe, con la barriera davanti; la marea qui si sente."
      },
      {
        "nome": "Est (Paje, Jambiani, Michamvi)",
        "perChi": "chi vuole kitesurf e atmosfera",
        "testo": "Spiagge ampie, più tranquillo; il bagno dipende dalle maree."
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
      "Scegliere la costa est senza controllare le maree: con la bassa marea fare il bagno può essere difficile.",
      "Girare per Stone Town in costume o canottiera: fuori dalle spiagge ci si copre spalle e ginocchia.",
      "Arrivare senza l'assicurazione obbligatoria di Zanzibar (ZIC): si compra online su visitzanzibar.go.tz o all'arrivo, e vale per tutto il soggiorno.",
      "Venditori di escursioni sulla spiaggia: confrontare i prezzi con l'hotel."
    ],
    gite: [
      {
        "nome": "Baia di Menai e Kwale",
        "distanza": "circa 40 minuti d'auto fino a Fumba, poi in barca",
        "come": "Con le uscite in dhow da Fumba, a sud-ovest di Stone Town.",
        "testo": "Un'area marina protetta con banchi di sabbia, mangrovie, snorkeling e l'isola di Kwale con il suo grande baobab. La giornata di solito include un pranzo di pesce alla griglia."
      },
      {
        "nome": "Dar es Salaam",
        "distanza": "circa 2 ore di traghetto veloce",
        "come": "Traghetti veloci dal porto di Stone Town, più corse al giorno.",
        "testo": "La città più grande della Tanzania, con il mercato del pesce di Kivukoni e il Museo Nazionale. Più che una gita è la porta d'accesso per chi prosegue il viaggio sulla terraferma."
      }
    ],
    faq: [
      {
        "domanda": "Serve un'assicurazione per entrare a Zanzibar?",
        "risposta": "Sì: dal 2024 è obbligatoria l'assicurazione di viaggio di Zanzibar, 44 $ a persona per soggiorni fino a 92 giorni. Si compra online prima di partire o all'arrivo. Chi entra prima dal continente con la polizza NIC, obbligatoria lì dal 1° ottobre 2026, non deve comprarne una seconda."
      },
      {
        "domanda": "Meglio la costa nord o la costa est?",
        "risposta": "Il nord, Nungwi e Kendwa, per fare il bagno a qualsiasi ora. La costa est, Paje e Jambiani, per il kitesurf e i villaggi più tranquilli, sapendo che con la bassa marea il mare si ritira per centinaia di metri."
      },
      {
        "domanda": "Quanti giorni servono a Zanzibar?",
        "risposta": "Quattro o cinque: uno o due a Stone Town, il resto al mare con un paio di uscite in barca. Dopo un safari è il modo classico di chiudere il viaggio."
      },
      {
        "domanda": "Come ci si veste a Stone Town?",
        "risposta": "Coprendo spalle e ginocchia: Zanzibar è a maggioranza musulmana e il costume si tiene per le spiagge. Durante il Ramadan si evita di mangiare e bere per strada di giorno."
      },
      {
        "domanda": "Quando conviene andare?",
        "risposta": "Da giugno a ottobre e da dicembre a febbraio, fuori dalle due stagioni delle piogge. Aprile e maggio sono i mesi più piovosi."
      },
      {
        "domanda": "Come ci si sposta sull'isola?",
        "risposta": "Con taxi o transfer concordati, oppure con i dala dala, i minibus locali, che costano pochissimo ma sono lenti. Il prezzo del taxi va fissato prima di salire."
      }
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
    comeArrivare:
      "Il Kilimanjaro International Airport (JRO) è tra Arusha e Moshi, a circa un'ora da Arusha e 45 minuti da Moshi, ed è servito da voli internazionali con scalo nel Golfo, in Etiopia, in Kenya o in Europa. L'aeroporto di Arusha (ARK), alla periferia ovest della città, serve i voli interni verso i parchi e Zanzibar. Gli operatori di solito comprendono il transfer.",
    comeSpostarsi: "Transfer organizzato dall'operatore o taxi; in città traffico intenso nelle ore di punta.",
    periodoMigliore: 'da giugno a ottobre e da gennaio a febbraio per il Kilimanjaro, fuori dalle piogge',
    costi:
      "Parco di Arusha 50 $ a persona ogni 24 ore in alta stagione, circa 43 €, più IVA; Kilimanjaro 70 $ al giorno più rifugi o campeggi e 20 $ di tassa di soccorso (2026). Budget: circa 35-50 € al giorno ad Arusha o Moshi con guesthouse, cibo locale e dala dala. Medio: 80-130 € con lodge in giardino e taxi. Alto: oltre 250 € nei lodge di charme verso Usa River.",
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
        "costo": "Ingresso 70 $ a persona al giorno, circa 60 €, più IVA del 18%; rifugi della via Marangu 60 $ a notte, campeggi 50 $ a notte, tassa di soccorso 20 $ a salita (2026)",
        "lat": -3.0764,
        "lng": 37.354,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/kilimanjaro",
        "consiglio": "Più giorni significa più acclimatamento e più probabilità di arrivare in cima."
      },
      {
        "nome": "Parco nazionale di Arusha",
        "testo": "Il parco ai piedi del Monte Meru (4.566 metri, la seconda vetta della Tanzania): la piana di «Serengeti Ndogo» con bufali, zebre e giraffe, il cratere di Ngurdoto, la foresta con i colobi bianchi e neri. È uno dei pochi parchi del nord dove si cammina con un ranger.",
        "come": "In auto da Arusha, circa 40 minuti; le camminate con il ranger si organizzano al cancello.",
        "quando": "Mattina, quando il Kilimanjaro e il Meru sono più spesso liberi dalle nuvole.",
        "tempo": "Una giornata",
        "costo": "Ingresso 50 $ a persona ogni 24 ore in alta stagione, circa 43 €, più IVA del 18%; bambini dai 5 ai 15 anni 15 $ (2026)",
        "orari": "Aperto tutti i giorni dell'anno; i cancelli chiudono alle 18.",
        "lat": -3.25,
        "lng": 36.8333,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/arusha"
      },
      {
        "nome": "Monte Meru",
        "testo": "Il vulcano che domina Arusha, salito in 3-4 giorni con un ranger armato obbligatorio, dormendo nei rifugi di Miriakamba e Saddle. Dalla cresta finale si vede il Kilimanjaro all'alba, ed è un ottimo acclimatamento prima del Kili.",
        "come": "Dal cancello di Momella, dentro il parco nazionale di Arusha, con ranger e portatori.",
        "quando": "Da giugno a ottobre e da gennaio a febbraio.",
        "tempo": "3-4 giorni",
        "costo": "Rifugi 30 $ a notte, circa 26 €; ranger 15 $ al giorno a gruppo e tassa di soccorso 20 $ a salita, oltre all'ingresso al parco (2026)",
        "lat": -3.2467,
        "lng": 36.7483,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/arusha"
      },
      {
        "nome": "Laghi Momella",
        "testo": "Un gruppo di laghi poco profondi nel parco di Arusha, ognuno di un colore diverso secondo le alghe e i minerali, con fenicotteri, ippopotami e uccelli acquatici. Sul Piccolo Momella si può andare in canoa.",
        "come": "Con il game drive nel parco o in canoa con una guida.",
        "quando": "Mattina.",
        "tempo": "2-3 ore",
        "costo": "Canoa 20 $ a persona, circa 17 € (2026)",
        "lat": -3.2276,
        "lng": 36.896,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/arusha"
      },
      {
        "nome": "Materuni e villaggi del caffè vicino a Moshi",
        "testo": "I villaggi chagga sulle pendici del Kilimanjaro intorno a Moshi, con piantagioni di caffè e cascate da visitare con guide locali; il più noto è Materuni, con una cascata alta e una piscina naturale. Spesso la visita comprende la tostatura del caffè a mano.",
        "come": "In auto da Moshi, circa 30-40 minuti, poi a piedi con una guida del villaggio.",
        "quando": "Mattina.",
        "tempo": "Mezza giornata",
        "lat": -3.2502,
        "lng": 37.4001
      },
      {
        "nome": "Moshi",
        "testo": "La cittadina ai piedi del Kilimanjaro, più tranquilla di Arusha, da cui partono quasi tutte le salite. Il mercato centrale e le strade del centro si girano a piedi, e nelle mattine limpide la vetta appare sopra i tetti.",
        "come": "In auto da Arusha, circa un'ora e mezza; dal Kilimanjaro International Airport circa 45 minuti.",
        "quando": "Mattina presto per vedere la montagna.",
        "tempo": "Mezza giornata",
        "lat": -3.3349,
        "lng": 37.3404
      },
      {
        "nome": "Centro di Arusha",
        "testo": "La città dei safari, con la Clock Tower al centro, il mercato centrale e il mercato Maasai dell'artigianato. Più che una meta è il posto dove si incontra l'operatore, si cambia denaro e si fanno le ultime spese.",
        "come": "A piedi nel centro, con taxi o bajaji per gli spostamenti più lunghi.",
        "quando": "Mattina.",
        "tempo": "Mezza giornata",
        "lat": -3.3724,
        "lng": 36.6945
      },
      {
        "nome": "Cultural Heritage Centre",
        "testo": "Un grande edificio alle porte di Arusha, sulla strada per i parchi, con una galleria d'arte africana contemporanea e negozi di artigianato, tessuti e tanzanite.",
        "come": "In auto o taxi, sulla strada per Dodoma all'uscita ovest della città.",
        "quando": "Pomeriggio, al rientro dal safari.",
        "tempo": "1 ora",
        "lat": -3.3772,
        "lng": 36.6583
      },
      {
        "nome": "Sorgenti di Kikuletwa (Chemka)",
        "testo": "Una piscina naturale di acqua turchese e tiepida tra i fichi, alimentata da sorgenti, a metà strada tra Arusha e Moshi. Ci si fa il bagno e ci si tuffa dalle corde appese agli alberi.",
        "come": "In auto, poi l'ultimo tratto su pista sterrata.",
        "quando": "Nei giorni feriali, meno affollati.",
        "tempo": "Mezza giornata",
        "lat": -3.4443,
        "lng": 37.1938
      },
      {
        "nome": "Lago Chala",
        "testo": "Un lago vulcanico dentro un cratere sul confine con il Kenya, con acqua blu e pareti ripide coperte di bosco. Si cammina lungo il bordo e si scende fino alla riva.",
        "come": "In auto da Moshi, circa un'ora e mezza.",
        "quando": "Mattina.",
        "tempo": "Mezza giornata",
        "lat": -3.3174,
        "lng": 37.7001
      },
      {
        "nome": "Lago Duluti",
        "testo": "Un piccolo lago di cratere vicino ad Arusha circondato dalla foresta, con un sentiero ad anello e uscite in canoa. Con il cielo limpido sullo sfondo c'è il Meru.",
        "come": "In auto da Arusha, circa 20-30 minuti verso Tengeru.",
        "quando": "Mattina o tardo pomeriggio.",
        "tempo": "2 ore",
        "lat": -3.3868,
        "lng": 36.7889
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: parco di Arusha e laghi Momella",
          "Pomeriggio: cascate di Materuni e caffè"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: parco di Arusha con camminata e canoa",
          "Giorno 2: lago Duluti al mattino, sorgenti di Kikuletwa al pomeriggio"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: centro di Arusha e Cultural Heritage Centre",
          "Giorno 2: parco di Arusha",
          "Giorno 3: Moshi, Materuni e caffè"
        ]
      }
    ],
    zone: [
      {
        "nome": "Arusha",
        "perChi": "chi parte per il safari",
        "testo": "Città di partenza dei safari, con hotel e agenzie; i quartieri più tranquilli sono fuori dal centro, verso la strada di Moshi."
      },
      {
        "nome": "Usa River e Tengeru",
        "perChi": "chi vuole il verde vicino al parco di Arusha",
        "testo": "Lodge tra piantagioni e giardini sulla strada verso il Kilimanjaro, a metà tra la città e l'aeroporto."
      },
      {
        "nome": "Moshi",
        "perChi": "chi sale il Kilimanjaro",
        "testo": "Cittadina ai piedi del monte, con guesthouse e hotel semplici dove si incontrano gli operatori del trekking."
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
    gite: [
      {
        "nome": "Parco di Tarangire",
        "distanza": "circa 2 ore d'auto da Arusha",
        "come": "In fuoristrada con guida, partendo all'alba.",
        "testo": "I baobab e i branchi di elefanti lungo il fiume: è il parco del circuito nord che si fa meglio in giornata da Arusha."
      },
      {
        "nome": "Lago Manyara",
        "distanza": "circa 2 ore d'auto da Arusha",
        "come": "In fuoristrada, sulla strada asfaltata verso Mto wa Mbu.",
        "testo": "La foresta, il lago alcalino e la scarpata della Rift Valley, da girare in mezza giornata."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono per salire il Kilimanjaro?",
        "risposta": "Da 5 a 8 secondo la via. Le vie da 7-8 giorni, come Lemosho, danno più tempo per acclimatarsi e aumentano le probabilità di arrivare all'Uhuru Peak."
      },
      {
        "domanda": "Quanto costano le tariffe del parco del Kilimanjaro nel 2026?",
        "risposta": "70 $ a persona al giorno di ingresso, più IVA, più 60 $ a notte nei rifugi o 50 $ nei campeggi e 20 $ di tassa di soccorso. Su una salita di una settimana le sole tariffe del parco arrivano intorno ai 900 $ a testa."
      },
      {
        "domanda": "Serve una notte ad Arusha prima del safari?",
        "risposta": "Sì, è la scelta più prudente: i voli intercontinentali arrivano spesso la sera e il primo giorno di safari parte all'alba."
      },
      {
        "domanda": "Meglio dormire ad Arusha o a Moshi?",
        "risposta": "Arusha per i safari del circuito nord, Moshi per il Kilimanjaro. Il Kilimanjaro International Airport è più o meno a metà strada."
      },
      {
        "domanda": "Si vede il Kilimanjaro da Arusha?",
        "risposta": "Nelle giornate limpide sì, soprattutto all'alba e da giugno a ottobre. Spesso però la vetta resta nelle nuvole per giorni."
      },
      {
        "domanda": "Il Meru è un buon allenamento per il Kilimanjaro?",
        "risposta": "Sì: arriva a 4.566 metri e si sale in 3-4 giorni, quindi aiuta l'acclimatamento. Molti lo fanno subito prima del Kili."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Il Kilimanjaro sopra le nuvole, con le acacie in primo piano',
    immagine: '/images/tanzania/kilimanjaro.jpg',
  },
]
