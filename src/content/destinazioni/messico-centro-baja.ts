import type { Destinazione } from '@/lib/types'

// Destinazioni del Messico centrale, di Oaxaca e della Baja California Sur
// collegate a due viaggi fatti dall'autore:
// - "Messico, Día de los Muertos" (src/content/viaggi/66-messico-dia-de-los-muertos.md)
// - "Città del Messico e Baja California Sur" (src/content/viaggi/67-messico-cdmx-baja-california.md)
// Tenute in un file separato da destinazioni/messico.ts (che raccoglie le
// tappe di "Messico Beach Life"). Le tappe dei due viaggi hanno
// visitataPersonalmente: true; Pátzcuaro e Janitzio, solo variante nel
// markdown, resta false. Nessun miaEsperienza.
// Nessun nome di hotel, ristorante o operatore inventato. Prezzi indicativi
// 2026, da riverificare. Lo slug della Paz è 'la-paz-baja' perché 'la-paz'
// esiste già in destinazioni/bolivia.ts. Ordine da 10 in poi, dopo le nove
// tappe dello Yucatán.

export const destinazioniMessicoCentroBaja: Destinazione[] = [
  {
    slug: 'citta-del-messico',
    paeseSlug: 'messico',
    ordine: 10,
    nome: 'Città del Messico',
    tipologia: ['città', 'cultura', 'archeologia', 'gastronomia'],
    giorniConsigliati: '4-5 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La capitale sta a oltre 2.000 metri sul fondo di un lago prosciugato, sopra le rovine di Tenochtitlán. Venti milioni di abitanti, un centro storico patrimonio UNESCO, un grande museo archeologico e una cucina di strada tra le più ricche del mondo.',
    percheAndarci:
      'Perché è la chiave per capire il resto del paese: le civiltà preispaniche al Museo di Antropologia e a Teotihuacán, la storia coloniale nello Zócalo, il Messico di oggi nei quartieri di Roma, Condesa e Coyoacán. A fine ottobre è anche il punto di partenza del Día de los Muertos, con la processione delle Catrinas e le grandi ofrendas pubbliche.',
    cosaVedere: [
      'Lo Zócalo, la Cattedrale Metropolitana e il Templo Mayor',
      'Il Palacio Nacional con i murales di Diego Rivera e il Palacio de Bellas Artes',
      'Il Museo Nacional de Antropología nel bosco di Chapultepec',
      'Teotihuacán, la Piramide del Sole e la Calzada de los Muertos',
      'Coyoacán e la Casa Azul di Frida Kahlo',
      'I canali di Xochimilco',
    ],
    cosaFare: [
      'Teotihuacán all\'apertura, o in mongolfiera all\'alba',
      'Un giro in trajinera a Xochimilco, concordando il prezzo all\'ora prima di salire',
      'Una serata di lucha libre all\'Arena México',
      'Tacos al pastor e de suadero nelle taquerías di quartiere',
      'A fine ottobre, la Mega Procesión de Catrinas lungo il Paseo de la Reforma',
    ],
    doveDormire:
      'Roma Norte o Condesa, quartieri alberati e tranquilli, non lontani dal centro. Il Centro Histórico è comodo di giorno ma vuoto la sera.',
    doveMangiare:
      'Taquerías, mercati (Coyoacán, San Juan), tamales e atole a colazione, churros con cioccolata. I ristoranti d\'autore di Roma e Polanco vanno prenotati con settimane di anticipo.',
    comeSpostarsi: 'Metro, Metrobús e app di trasporto; per Teotihuacán bus dalla Terminal del Norte. Niente taxi presi per strada.',
    periodoMigliore: 'da ottobre ad aprile, stagione secca; fine ottobre per il Día de los Muertos.',
    erroriDaEvitare: [
      'Prendere taxi per strada invece di taxi prepagati, di sitio o app',
      'Programmare Museo di Antropologia o Templo Mayor di lunedì, quando sono chiusi',
      'Sottovalutare la quota nei primi due giorni',
      'Non prenotare la Casa Azul, che si esaurisce giorni prima',
    ],
      "sapori": [
        {
          "nome": "Tacos al pastor",
          "testo": "Maiale al girarrosto con ananas, in ogni taquería."
        },
        {
          "nome": "Tlacoyos e quesadillas",
          "testo": "Tortillas di mais ripiene, dalle bancarelle."
        },
        {
          "nome": "Chilaquiles",
          "testo": "Tortilla in salsa piccante per colazione."
        },
        {
          "nome": "Pozole",
          "testo": "Zuppa di mais e carne, la domenica."
        },
        {
          "nome": "Mole e tamales",
          "testo": "Salse e tamales, nei mercati."
        }
      ],
      "attenzioni": [
        "Borseggi su metro e Zócalo: tenere gli oggetti davanti e non esibire telefoni.",
        "Taxi di strada: usare Uber o taxi di sitio.",
        "Altitudine: bere acqua e andare piano il primo giorno."
      ],
    comeArrivare: "Aeroporto internazionale Benito Juárez (AICM), con voli diretti o via una capitale europea; in città con taxi prepagato o app. I taxi autorizzati si pagano ai banchi dentro gli arrivi: circa 300-450 MXN, 15-23 €, per Roma Norte o Condesa, con 30-60 minuti di strada secondo il traffico. La Metrobús linea 4 parte dai terminal 1 e 2 verso il centro storico per circa 30 MXN, con la tessera ricaricabile o la carta contactless; la metro (stazione Terminal Aérea) costa 5 MXN ma con le valigie, nelle ore di punta, non conviene. Dal marzo 2026 Uber e DiDi non possono caricare dentro il terminal. Da Puebla e Oaxaca si arriva con i bus ADO al TAPO o alla Terminal del Sur.",
    costi: "Teotihuacán e Museo di Antropologia circa 210 MXN ciascuno per gli stranieri (2026); la trajinera si paga a ora e a barca, con prezzo da concordare prima di salire. Budget basso circa 60-90 € al giorno a persona (ostello o camera privata, taquerías, metro a 5 MXN); medio 125-200 € (hotel boutique a Roma o Condesa, ristoranti, qualche museo e Teotihuacán); alto da 300 € in su (hotel di design o a Polanco, autista, cucina d'autore). Indicativamente 1 € = 20 MXN.",
    luoghi: [
      {
        "nome": "Zócalo, Cattedrale e Templo Mayor",
        "testo": "La piazza centrale con la Cattedrale Metropolitana, il Palacio Nacional e, accanto, il Templo Mayor, il cuore azteco di Tenochtitlan, con il museo. Qui si capisce come la città coloniale sia stata costruita sopra quella mexica, con le stesse pietre.",
        "come": "Metro Zócalo. Il Templo Mayor ha ingresso INAH separato; la Cattedrale è gratuita.",
        "quando": "Mattina, prima del caldo e delle manifestazioni che spesso occupano la piazza.",
        "tempo": "3 ore",
        "costo": "Templo Mayor: 210 MXN per gli stranieri, circa 10 € (scheda INAH, 2026); la domenica è gratis solo per i cittadini messicani.",
        "orari": "Templo Mayor: da martedì a domenica 9-17, chiuso il lunedì (scheda INAH).",
        "lat": 19.435,
        "lng": -99.13139,
        "url": "https://lugares.inah.gob.mx/es/node/4463"
      },
      {
        "nome": "Palacio Nacional e i murales di Diego Rivera",
        "testo": "La sede della presidenza, sul lato est dello Zócalo. Sullo scalone e nel cortile principale ci sono i murales di Diego Rivera sulla storia del Messico, dai tempi preispanici alla Rivoluzione: la sintesi più chiara di come il paese racconta sé stesso.",
        "come": "Dall'ingresso sullo Zócalo, con un documento d'identità; i controlli possono essere lenti e l'accesso chiude senza preavviso nei giorni di eventi ufficiali.",
        "quando": "Mattina, nei giorni feriali.",
        "tempo": "1-1,5 ore",
        "lat": 19.4325,
        "lng": -99.13139
      },
      {
        "nome": "Palacio de Bellas Artes",
        "testo": "Il teatro e museo di marmo bianco con le cupole gialle, all'inizio dell'Alameda Central. Dentro ci sono i murales di Rivera, Orozco, Siqueiros e Tamayo; la sera ospita il Ballet Folklórico.",
        "come": "Metro Bellas Artes. La facciata si vede gratis; per i murales si compra il biglietto del museo.",
        "quando": "Mattina per il museo; per la vista dall'alto, il bar all'ultimo piano del palazzo di fronte, al tramonto.",
        "tempo": "1,5 ore",
        "costo": "95 MXN, circa 5 € (2026).",
        "orari": "Da martedì a domenica 10-18, biglietteria fino alle 17.30; chiuso il lunedì.",
        "lat": 19.4353,
        "lng": -99.1414
      },
      {
        "nome": "Torre Latinoamericana",
        "testo": "Il grattacielo del 1956, a due passi da Bellas Artes, che ha resistito ai terremoti del 1957 e del 1985. Dal belvedere in cima si vede la scala della città, che arriva fino ai vulcani nelle giornate limpide.",
        "come": "Metro Bellas Artes o San Juan de Letrán; biglietto alla base della torre.",
        "quando": "Tardo pomeriggio, per vedere la città prima e dopo il tramonto.",
        "tempo": "1 ora",
        "lat": 19.43389,
        "lng": -99.14056
      },
      {
        "nome": "Museo Nacional de Antropología",
        "testo": "Il museo più grande e più visitato del Messico, nel bosco di Chapultepec, con la Pietra del Sole e le sale delle culture mesoamericane. È la chiave per capire tutti i siti che si vedono nel resto del viaggio.",
        "come": "Metro Auditorio o Chapultepec.",
        "quando": "Mattina, all'apertura; conviene cominciare dalla sala Mexica, al centro.",
        "tempo": "3-4 ore",
        "costo": "210 MXN per gli stranieri, circa 10 € (scheda INAH, 2026).",
        "orari": "Da martedì a domenica 9-18, chiuso il lunedì (scheda INAH).",
        "lat": 19.42611,
        "lng": -99.18611,
        "url": "https://lugares.inah.gob.mx/es/node/4237",
        "consiglio": "Scegliere alcune sale: è troppo grande per vederlo tutto."
      },
      {
        "nome": "Castillo de Chapultepec",
        "testo": "Il castello sulla collina di Chapultepec, residenza dell'imperatore Massimiliano e oggi Museo Nacional de Historia. Dalle terrazze si vede il Paseo de la Reforma che taglia la città.",
        "come": "Metro Chapultepec, poi salita a piedi di circa 15 minuti dentro il parco.",
        "quando": "Mattina, abbinato al Museo di Antropologia nello stesso parco.",
        "tempo": "2 ore",
        "costo": "210 MXN per gli stranieri, circa 10 € (scheda INAH, 2026).",
        "orari": "Da martedì a domenica 9-17, chiuso il lunedì (scheda INAH).",
        "lat": 19.42056,
        "lng": -99.18167,
        "url": "https://lugares.inah.gob.mx/es/node/4682"
      },
      {
        "nome": "Teotihuacán",
        "testo": "La città dei Templi del Sole e della Luna e della Calzada de los Muertos, circa 40 km a nord-est della capitale, patrimonio UNESCO. La sua scala, pensata prima degli aztechi, si capisce solo camminandoci.",
        "come": "Bus Autobuses Teotihuacán dalla Terminal del Norte, circa un'ora, o tour; ingresso INAH.",
        "quando": "All'apertura delle 8, prima del caldo e dei gruppi; la domenica è affollata.",
        "tempo": "Mezza giornata",
        "costo": "210 MXN per gli stranieri, circa 10 € (scheda INAH, 2026). Secondo notizie dell'agosto 2026 la Piramide della Luna è chiusa fino a nuovo avviso: chiedere in biglietteria.",
        "orari": "Tutti i giorni 8-17, ultimo ingresso alle 16.30 (scheda INAH).",
        "lat": 19.693,
        "lng": -98.844,
        "url": "https://lugares.inah.gob.mx/es/node/4528",
        "consiglio": "Portare cappello e acqua: quasi nessuna ombra."
      },
      {
        "nome": "Basilica di Guadalupe",
        "testo": "Il santuario cattolico più visitato delle Americhe. Accanto alla basilica moderna, rotonda e degli anni Settanta, c'è quella antica, che pende come la Cattedrale del centro; l'immagine della Vergine si vede da un tapis roulant che passa sotto l'altare.",
        "come": "Metro La Villa-Basílica, oppure una sosta al ritorno da Teotihuacán.",
        "quando": "Mattina nei giorni feriali; intorno al 12 dicembre arrivano milioni di pellegrini.",
        "tempo": "1,5 ore",
        "lat": 19.48444,
        "lng": -99.11722
      },
      {
        "nome": "Coyoacán e Casa Azul",
        "testo": "Quartiere coloniale con piazze e mercato, e la Casa Azul di Frida Kahlo, oggi museo. Dopo la visita si pranza al mercato e si passeggia fra il Jardín Centenario e la piazza della Conchita.",
        "come": "Metro o Uber; per la Casa Azul biglietti da prenotare online in anticipo.",
        "quando": "Mattina; bisogna presentarsi all'orario scritto sul biglietto.",
        "tempo": "Mezza giornata",
        "costo": "Casa Azul: 320 MXN per gli stranieri, circa 16 € (2026), con ingresso a orario da prenotare online.",
        "orari": "Casa Azul chiusa il lunedì.",
        "lat": 19.35514,
        "lng": -99.16253,
        "url": "https://boletos.museofridakahlo.org.mx/"
      },
      {
        "nome": "Museo Anahuacalli",
        "testo": "Il tempio-museo di pietra lavica progettato da Diego Rivera per la sua collezione di arte preispanica, nel sud della città. È meno conosciuto della Casa Azul e si abbina bene a Coyoacán.",
        "come": "Uber o taxi da Coyoacán, una ventina di minuti.",
        "quando": "Primo pomeriggio, dopo Coyoacán.",
        "tempo": "1,5 ore",
        "orari": "Da martedì a domenica 11-17.30, chiuso il lunedì (sito ufficiale).",
        "lat": 19.3227,
        "lng": -99.14451,
        "url": "https://www.museoanahuacalli.org.mx/"
      },
      {
        "nome": "Xochimilco",
        "testo": "I canali con le trajineras colorate, resto del sistema lacustre azteco. Nel fine settimana è una grande festa con mariachi e birra; nei giorni feriali è molto più tranquillo.",
        "come": "Metro fino a Tasqueña e poi tren ligero, o Uber fino agli imbarcaderi.",
        "quando": "Mattina nei giorni feriali, meno folla.",
        "tempo": "2-3 ore",
        "costo": "Indicativamente 600-700 MXN all'ora per l'intera barca, circa 30-35 € (dal viaggio, 2026).",
        "lat": 19.25206,
        "lng": -99.09335,
        "consiglio": "Concordare durata e prezzo della barca prima di salire; mariachi e venditori si pagano a parte."
      },
      {
        "nome": "Museo Soumaya",
        "testo": "L'edificio argentato di Plaza Carso, a Polanco, con la collezione di Carlos Slim: sculture di Rodin, maestri europei e arte messicana. Merita anche solo per l'architettura e la rampa interna.",
        "come": "Uber o taxi fino a Polanco (Nuevo Polanco).",
        "quando": "Pomeriggio, anche il lunedì, quando molti musei sono chiusi.",
        "tempo": "1,5 ore",
        "costo": "Ingresso gratuito (sito ufficiale).",
        "orari": "Tutti i giorni 10.30-18.30 (sito ufficiale).",
        "lat": 19.44066,
        "lng": -99.20462,
        "url": "https://www.museosoumaya.org/"
      },
      {
        "nome": "Roma, Condesa e Parque México",
        "testo": "I quartieri alberati degli anni Venti, con case art déco, caffè, mercati e la vita serale della città. Il Parque México e l'Avenida Ámsterdam, ovale e pedonale nel mezzo, sono il posto giusto per camminare senza meta.",
        "come": "A piedi o in Metrobús sull'Avenida Insurgentes.",
        "quando": "Mattina per i caffè e il parco, sera per cena e locali.",
        "tempo": "Mezza giornata",
        "costo": "Ingresso libero",
        "lat": 19.41222,
        "lng": -99.16917
      },
      {
        "nome": "Lucha libre all'Arena México",
        "testo": "La lucha libre del CMLL, con maschere, acrobazie e un pubblico che partecipa più del ring. È una serata popolare e molto messicana.",
        "come": "Nel quartiere Doctores: andata e ritorno in taxi o app, non a piedi.",
        "quando": "Martedì, venerdì e domenica (calendari CMLL 2026).",
        "tempo": "2-3 ore",
        "lat": 19.42472,
        "lng": -99.15194,
        "consiglio": "Biglietti alla cassa dell'arena o sui canali ufficiali, non dai rivenditori in strada."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Zócalo, Cattedrale e Templo Mayor",
          "Murales del Palacio Nacional",
          "Pranzo ai tacos in centro",
          "Pomeriggio: Palacio de Bellas Artes e Torre Latinoamericana al tramonto"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: centro storico come sopra",
          "Giorno 2: Museo Nacional de Antropología all'apertura, Castillo de Chapultepec, sera a Roma e Condesa"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: Teotihuacán all'apertura, con sosta alla Basilica di Guadalupe al ritorno"
        ]
      },
      {
        "titolo": "4-5 giorni",
        "tappe": [
          "Giorno 4: Coyoacán e Casa Azul, Anahuacalli, pomeriggio a Xochimilco",
          "Giorno 5: Museo Soumaya a Polanco e, la sera, lucha libre all'Arena México (martedì, venerdì o domenica)"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro storico",
        "perChi": "a piedi da tutto",
        "testo": "Zócalo e musei vicini, ma rumoroso e poco piacevole la notte lontano dalle vie principali."
      },
      {
        "nome": "Roma e Condesa",
        "perChi": "ristoranti e locali",
        "testo": "Quartieri di caffè e vita serale, più sicuri a piedi, vicini a Chapultepec. Dagli ostelli e camere private agli hotel boutique.",
        "fascia": "30-175 €"
      },
      {
        "nome": "Polanco",
        "perChi": "fascia alta e cucina d'autore",
        "testo": "Quartiere elegante a nord di Chapultepec, con hotel di design, il Museo Soumaya e i ristoranti più noti della città.",
        "fascia": "da 250 €"
      },
      {
        "nome": "Coyoacán",
        "perChi": "calma e storia",
        "testo": "Quartiere residenziale e coloniale, più lontano dal centro."
      }
    ],
    gite: [
      {
        "nome": "Teotihuacán",
        "distanza": "circa 40 km, 1 ora in bus",
        "come": "Bus Autobuses Teotihuacán dalla Terminal del Norte, partenze frequenti, o tour con mongolfiera all'alba (indicativamente 2.500-4.000 MXN).",
        "testo": "Le piramidi del Sole e della Luna e la Calzada de los Muertos: si entra all'apertura delle 8 e si torna nel primo pomeriggio."
      },
      {
        "nome": "Puebla e Cholula",
        "distanza": "circa 2 ore in bus",
        "come": "Bus ADO dal TAPO o dalla Terminal del Oriente, 200-300 MXN (dal viaggio).",
        "testo": "Il centro barocco di Puebla, con la Capilla del Rosario e la Biblioteca Palafoxiana, e la chiesa di Cholula in cima alla piramide, con il Popocatépetl alle spalle. Meglio con una notte."
      },
      {
        "nome": "Tepoztlán",
        "distanza": "circa 80 km a sud, 1,5 ore in bus",
        "come": "Bus dalla Terminal del Sur (Tasqueña).",
        "testo": "Paese di montagna con il mercato del fine settimana e il tempietto del Tepozteco in cima a una salita ripida di circa un'ora."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Città del Messico?",
        "risposta": "Tre giorni pieni per centro storico, Chapultepec e Teotihuacán; con quattro o cinque si aggiungono Coyoacán, Xochimilco e una serata di lucha libre."
      },
      {
        "domanda": "In quale zona conviene dormire?",
        "risposta": "Roma Norte o Condesa: sono alberate, piene di ristoranti e più tranquille la sera. Il centro storico è comodo di giorno ma si svuota dopo cena; Polanco è per chi cerca la fascia alta."
      },
      {
        "domanda": "Quali musei sono chiusi il lunedì?",
        "risposta": "Quasi tutti: Antropologia, Castillo de Chapultepec, Templo Mayor, Bellas Artes, Casa Azul e Anahuacalli. Il lunedì è il giorno giusto per Teotihuacán, aperta tutti i giorni, o per il Museo Soumaya."
      },
      {
        "domanda": "Serve prenotare la Casa Azul di Frida Kahlo?",
        "risposta": "Sì, i biglietti si comprano solo online con un orario d'ingresso, spesso con giorni di anticipo; per gli stranieri costano 320 MXN (2026)."
      },
      {
        "domanda": "Come si va a Teotihuacán?",
        "risposta": "Con il bus Autobuses Teotihuacán dalla Terminal del Norte, circa un'ora, oppure con un tour. Conviene entrare all'apertura delle 8 e portare acqua e cappello."
      },
      {
        "domanda": "Città del Messico è sicura per i turisti?",
        "risposta": "Nei quartieri turistici sì, con le attenzioni di una grande città: borseggi in metro e nella folla, niente taxi presi per strada, app o taxi de sitio la sera. Quartieri come Doctores, dove c'è l'Arena México, si raggiungono in auto."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-dia-de-los-muertos', 'messico-cdmx-baja-california'],
    imageAlt: 'Il Palacio de Bellas Artes nel centro storico di Città del Messico',
    immagine: '/images/viaggi/messico-cdmx-baja-california/giorno-01-citta-del-messico.jpg',
  },
  {
    slug: 'puebla-cholula',
    paeseSlug: 'messico',
    ordine: 11,
    nome: 'Puebla e Cholula',
    tipologia: ['città coloniale', 'archeologia', 'gastronomia', 'vulcani'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Puebla è una città coloniale patrimonio UNESCO, con le facciate rivestite di talavera e una delle cucine più importanti del paese. Poco lontano c\'è Cholula, con un\'enorme piramide preispanica e, in cima, il santuario della Virgen de los Remedios con il Popocatépetl sullo sfondo.',
    percheAndarci:
      'Per l\'immagine della chiesa gialla sulla piramide con il vulcano che fuma alle spalle, per il barocco poblano e per il mole. È anche la tappa naturale tra Città del Messico e Oaxaca.',
    cosaVedere: [
      'Il centro storico di Puebla con la Cattedrale e la Capilla del Rosario',
      'La Biblioteca Palafoxiana, storica biblioteca del Seicento',
      'La Gran Piramide di Cholula, i suoi tunnel e il Santuario de la Virgen de los Remedios',
      'Le chiese barocche indigene di Tonantzintla e Acatepec',
    ],
    cosaFare: [
      'Salire alla chiesa sulla piramide all\'alba o al tramonto per vedere il Popocatépetl e l\'Iztaccíhuatl',
      'Visitare un laboratorio di talavera tradizionale',
      'Assaggiare mole poblano, cemitas e i dolci della Calle de los Dulces',
    ],
    doveDormire:
      'A Puebla il centro intorno allo Zócalo, con molti hotel in edifici coloniali. A Cholula ostelli e piccoli hotel ai piedi della piramide.',
    doveMangiare: 'Mole poblano, chalupas, cemitas e molotes; i chiles en nogada sono un piatto stagionale di fine estate.',
    comeArrivare: "Da Città del Messico i bus ADO partono dalla TAPO o dalla Terminal del Sur, molto frequenti: circa 2 ore e 200-300 MXN, circa 10-15 € (2026), fino alla terminal CAPU di Puebla, da cui si va in centro in taxi o app. L'aeroporto di Puebla (PBC), a Huejotzingo, ha pochi voli nazionali; quasi tutti arrivano a Città del Messico. Da Puebla a Cholula sono 20-30 minuti in Uber, taxi o colectivo. Per proseguire verso Oaxaca il bus costa 450-800 MXN e impiega circa 4,5-5 ore.",
    comeSpostarsi: 'A piedi nei centri; taxi e app tra Puebla e Cholula.',
    periodoMigliore: 'da ottobre ad aprile; le mattine limpide di novembre-febbraio sono le migliori per vedere i vulcani.',
    costi: "Budget giornaliero a persona, indicativo per il 2026: basso 50-80 € (ostello o hotel semplice a Cholula, mercati e cemitas, colectivos); medio 110-170 € (hotel in una casa coloniale del centro, musei, ristoranti di cucina poblana, Uber); alto da 250 € (hotel di fascia alta, guida privata, cucina d'autore). Gran Piramide di Cholula 210 MXN per gli stranieri; Museo Amparo 85 MXN; Biblioteca Palafoxiana circa 40 MXN, gratis il martedì.",
    erroriDaEvitare: [
      'Visitare Cholula solo a mezzogiorno, quando la foschia spesso nasconde il vulcano',
      'Fare Puebla in giornata da Città del Messico senza dormire almeno una notte a Cholula',
    ],
    luoghi: [
      {
        nome: "Zócalo e Cattedrale di Puebla",
        testo: "Il cuore del centro storico patrimonio UNESCO, con i portici e la Cattedrale dell'Immacolata Concezione, le cui torri sono fra le più alte del paese. Dentro c'è l'altare dei Re e un grande coro in legno intarsiato; la piazza si riempie la sera.",
        come: "A piedi; la cattedrale si visita fuori dagli orari delle messe.",
        quando: "Mattina per la cattedrale, sera per la piazza illuminata.",
        tempo: "1-1,5 ore",
        costo: "Gratis",
        lat: 19.04283,
        lng: -98.19836,
      },
      {
        nome: "Capilla del Rosario e Santo Domingo",
        testo: "Dentro la chiesa di Santo Domingo, la cappella del Rosario è un barocco di fine Seicento coperto di stucchi dorati, angeli e volute, considerato uno dei capolavori del barocco messicano. Si entra in pochi minuti a piedi dallo Zócalo.",
        come: "A piedi dal centro, sulla 5 de Mayo.",
        quando: "Fuori dagli orari delle messe.",
        tempo: "30 minuti",
        costo: "Gratis",
        lat: 19.04656,
        lng: -98.19831,
      },
      {
        nome: "Biblioteca Palafoxiana",
        testo: "La prima biblioteca pubblica delle Americhe, fondata nel 1646 dal vescovo Juan de Palafox: una sala barocca con scaffali di legno su tre livelli e decine di migliaia di volumi antichi. È accanto alla cattedrale, nella Casa de la Cultura.",
        come: "A piedi, al primo piano della Casa de la Cultura, a fianco della cattedrale.",
        quando: "Mattina; il martedì l'ingresso è gratuito e c'è più gente.",
        tempo: "45 minuti",
        costo: "Circa 40 MXN, circa 2 €; gratis il martedì (2026)",
        orari: "Chiusa il lunedì",
        lat: 19.0425,
        lng: -98.1989,
      },
      {
        nome: "Museo Amparo",
        testo: "Un museo privato in due palazzi coloniali collegati, con una delle migliori collezioni di arte preispanica del paese, sale di arte coloniale e contemporanea e una terrazza con vista sulle cupole del centro. Si visita bene anche in una mattina di pioggia.",
        come: "A piedi, a due isolati dallo Zócalo.",
        quando: "Mattina; la terrazza ha il caffè per una pausa.",
        tempo: "2 ore",
        costo: "85 MXN, circa 4 € (2026)",
        orari: "Da mercoledì a lunedì 10-18, chiuso il martedì",
        lat: 19.0408,
        lng: -98.1985,
        url: "https://museoamparo.com/",
      },
      {
        nome: "Callejón de los Sapos",
        testo: "Una piazzetta e qualche vicolo del vecchio quartiere a sud-est dello Zócalo, con negozi di antiquariato, talavera e cantine. Il sabato e la domenica c'è il mercatino delle cose vecchie, la sera i bar con musica dal vivo.",
        come: "A piedi, cinque minuti dallo Zócalo.",
        quando: "Weekend mattina per il mercatino, sera per i bar.",
        tempo: "1 ora",
        costo: "Gratis",
        lat: 19.04075,
        lng: -98.19646,
      },
      {
        nome: "Barrio del Artista",
        testo: "Un cortile di piccoli studi dove pittori e incisori lavorano con le porte aperte e vendono le loro opere. A due passi c'è il Parián, il mercato dell'artigianato con talavera, onice e dolci.",
        come: "A piedi, a nord-est dello Zócalo, verso il Teatro Principal.",
        quando: "Pomeriggio, quando gli studi sono aperti.",
        tempo: "45 minuti",
        costo: "Gratis",
        lat: 19.044,
        lng: -98.192,
      },
      {
        nome: "Calle de los Dulces",
        testo: "Il tratto della 6 Oriente con le dolcerie storiche: camotes di patata dolce, tortitas de Santa Clara, borrachitos e jamoncillos, nati nei conventi di monache della città. Si assaggia prima di comprare.",
        come: "A piedi, vicino a Santa Clara, a pochi isolati dallo Zócalo.",
        quando: "Pomeriggio.",
        tempo: "30 minuti",
        lat: 19.04616,
        lng: -98.19617,
      },
      {
        nome: "Talavera Uriarte",
        testo: "Uno dei laboratori storici di talavera con denominazione d'origine, attivo dall'Ottocento. La visita guidata mostra tutta la lavorazione, dall'argilla impastata a piedi alla pittura a mano e alla doppia cottura.",
        come: "A piedi dal centro, sulla 4 Poniente; la visita va prenotata.",
        quando: "Nei giorni feriali, quando lavorano gli artigiani.",
        tempo: "50 minuti",
        costo: "150 MXN da lunedì a venerdì, 200 MXN il sabato, circa 8-10 € (2026)",
        orari: "Visite da lunedì a venerdì 10-15; il sabato secondo disponibilità",
        url: "https://www.uriartetalavera.com.mx/visita-uriarte",
        consiglio: "La talavera autentica ha il marchio della denominazione d'origine: quella sui banchi per pochi pesos è quasi sempre industriale.",
      },
      {
        nome: "Forti di Loreto e Guadalupe",
        testo: "Sulla collina a nord-est del centro, dove il 5 maggio 1862 l'esercito messicano sconfisse i francesi: la data del Cinco de Mayo. Il forte di Loreto ospita un museo della battaglia, e intorno c'è un parco con vista sulla città e sui vulcani.",
        come: "Taxi o Uber dal centro, circa 10 minuti.",
        quando: "Mattina limpida, per vedere i vulcani.",
        tempo: "1,5-2 ore",
        lat: 19.05675,
        lng: -98.18694,
      },
      {
        nome: "Museo Internacional del Barroco",
        testo: "Un edificio bianco e ondulato progettato da Toyo Ito, nella zona moderna di Angelópolis, che racconta il barocco nell'arte, nella musica e nella città, con sale interattive. Interessante per il contrasto con il centro storico.",
        come: "Taxi o Uber dal centro, circa 20 minuti; vicino c'è la ruota panoramica Estrella de Puebla.",
        quando: "Pomeriggio.",
        tempo: "2 ore",
        lat: 19.01931,
        lng: -98.24661,
      },
      {
        nome: "Gran Piramide di Cholula",
        testo: "La piramide più grande del mondo per volume, quasi nascosta sotto una collina d'erba, con la chiesa della Virgen de los Remedios in cima. I tunnel interni hanno riaperto a marzo 2026 dopo sei anni di chiusura, con visite a gruppi; il museo di sito è compreso nel biglietto.",
        come: "Uber, taxi o colectivo da Puebla, 20-30 minuti; biglietti anche online.",
        quando: "Mattina per i tunnel e la zona archeologica.",
        tempo: "2-3 ore",
        costo: "210 MXN per gli stranieri, circa 10 € (2026)",
        orari: "Zona archeologica da mercoledì a domenica 9-17",
        lat: 19.0575,
        lng: -98.30194,
        url: "https://lugares.inah.gob.mx/en/node/5678",
        consiglio: "I tunnel sono stretti: non adatti a chi soffre di claustrofobia.",
      },
      {
        nome: "Santuario de la Virgen de los Remedios",
        testo: "La chiesa gialla costruita dagli spagnoli in cima alla piramide, quella delle foto con il Popocatépetl che fuma alle spalle. Si sale a piedi lungo una rampa; dal sagrato, nelle mattine limpide, si vedono il Popocatépetl e l'Iztaccíhuatl.",
        come: "A piedi dalla piazza di San Pedro Cholula, salita libera.",
        quando: "All'alba o al tramonto; a mezzogiorno la foschia spesso nasconde il vulcano.",
        tempo: "1 ora",
        costo: "Gratis",
        lat: 19.0581,
        lng: -98.3018,
      },
      {
        nome: "Convento di San Gabriel",
        testo: "Il convento francescano del Cinquecento sulla piazza principale di San Pedro Cholula, con la Capilla Real, una cappella con decine di cupole costruita per gli indigeni convertiti. È di fronte alla piramide.",
        come: "A piedi, sulla piazza di Cholula.",
        quando: "Pomeriggio, prima di salire al santuario per il tramonto.",
        tempo: "45 minuti",
        costo: "Gratis",
        lat: 19.06229,
        lng: -98.30438,
      },
      {
        nome: "Tonantzintla e Acatepec",
        testo: "Due chiese barocche indigene a pochi chilometri da Cholula. Santa María Tonantzintla ha l'interno coperto di stucchi policromi con volti, frutti e angeli fatti da artigiani locali; San Francisco Acatepec ha la facciata interamente rivestita di talavera.",
        come: "Uber o colectivo da Cholula, 10-15 minuti; le due chiese sono vicine fra loro.",
        quando: "Mattina; a Tonantzintla dentro non si fotografa.",
        tempo: "1-2 ore",
        costo: "Gratis",
        lat: 19.02988,
        lng: -98.3197,
      },
    ],
    programmi: [
      { titolo: "1 giorno", tappe: [
        "Mattina: Zócalo, Cattedrale, Palafoxiana e Capilla del Rosario",
        "Pranzo con mole poblano",
        "Pomeriggio: Cholula, piramide e santuario al tramonto",
      ] },
      { titolo: "2 giorni", tappe: [
        "Giorno 1: centro di Puebla, Museo Amparo, Calle de los Dulces e Callejón de los Sapos la sera",
        "Giorno 2: Cholula all'alba, piramide e tunnel, Tonantzintla e Acatepec",
      ] },
      { titolo: "3 giorni", tappe: [
        "Giorni 1-2 come sopra",
        "Giorno 3: Talavera Uriarte la mattina, forti di Loreto e Guadalupe, poi Atlixco o il Museo del Barroco",
      ] },
    ],
    zone: [
      {
        nome: "Centro storico di Puebla",
        perChi: "a piedi da tutto",
        testo: "Hotel in palazzi coloniali intorno allo Zócalo, con ristoranti e musei vicini.",
        fascia: "60-125 €",
      },
      {
        nome: "Cholula",
        perChi: "atmosfera di villaggio e vista sui vulcani",
        testo: "Ostelli e piccoli hotel ai piedi della piramide, qualcuno con terrazza sul Popocatépetl; la sera ci sono i bar degli studenti.",
        fascia: "35-90 €",
      },
      {
        nome: "Angelópolis",
        perChi: "chi viaggia in auto",
        testo: "La zona moderna fra Puebla e Cholula, con hotel di catena, centri commerciali e il Museo del Barroco; comoda per le strade, senza fascino.",
      },
    ],
      "sapori": [
        {
          "nome": "Mole poblano",
          "testo": "Salsa di peperoncini e cioccolato su pollo, simbolo della città."
        },
        {
          "nome": "Chiles en nogada",
          "testo": "Peperoni ripieni con salsa di noci, piatto stagionale di fine estate."
        },
        {
          "nome": "Cemitas",
          "testo": "Panini con carne, avocado e formaggio."
        },
        {
          "nome": "Tacos árabes",
          "testo": "Maiale alla griglia con pane arabo."
        }
      ],
      "attenzioni": [
        "I tunnel della piramide di Cholula sono stretti: non adatto a chi soffre di claustrofobia.",
        "Taxi di strada: usare Uber.",
        "Il vulcano Popocatépetl è attivo: possibili variazioni nel panorama."
      ],
    gite: [
      {
        nome: "Atlixco",
        distanza: "circa 30 km da Cholula, 40 minuti",
        come: "In auto o in autobus da Puebla.",
        testo: "Pueblo mágico dei vivai di fiori ai piedi del Popocatépetl, con il Cerro de San Miguel e la sua cappella sopra il paese. A novembre i campi di stelle di Natale sono in fiore.",
      },
      {
        nome: "Paso de Cortés",
        distanza: "circa 1,5 ore da Cholula",
        come: "In auto passando da San Nicolás de los Ranchos; serve il pagamento dell'ingresso al parco nazionale.",
        testo: "Il valico a circa 3.600 metri fra il Popocatépetl e l'Iztaccíhuatl, nel Parque Nacional Izta-Popo, da cui partono i sentieri verso l'Iztaccíhuatl. Il Popocatépetl non si sale: va controllato il semaforo di allerta del CENAPRED.",
      },
      {
        nome: "Cuetzalan",
        distanza: "circa 3,5 ore da Puebla",
        come: "In autobus o auto; meglio con una notte sul posto.",
        testo: "Paese della Sierra Norte fra nebbie e piantagioni di caffè, con mercato domenicale nahua, grotte e cascate. È lontano per una giornata, ma è la Puebla più verde.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Puebla e Cholula?",
        risposta: "Due giorni: uno per il centro di Puebla e uno per Cholula, con la piramide e le chiese di Tonantzintla e Acatepec. Con un terzo giorno si aggiungono i forti, Uriarte e Atlixco.",
      },
      {
        domanda: "Meglio dormire a Puebla o a Cholula?",
        risposta: "Puebla ha più musei, ristoranti e hotel coloniali; Cholula è più piccola e permette di salire al santuario all'alba, quando i vulcani si vedono meglio. Con due notti se ne può fare una per parte.",
      },
      {
        domanda: "Si può fare Puebla in giornata da Città del Messico?",
        risposta: "Si può, con circa 2 ore di bus per tratta, ma si vede solo il centro. Per Cholula con la luce buona sui vulcani serve almeno una notte.",
      },
      {
        domanda: "I tunnel della piramide di Cholula sono aperti?",
        risposta: "Sì, hanno riaperto a marzo 2026 dopo sei anni, con visite a gruppi. La zona archeologica è aperta da mercoledì a domenica dalle 9 alle 17 e costa 210 MXN per gli stranieri.",
      },
      {
        domanda: "Quando si vede meglio il Popocatépetl?",
        risposta: "Nelle mattine limpide da novembre a febbraio, all'alba o al tramonto. A mezzogiorno la foschia lo nasconde spesso.",
      },
      {
        domanda: "Quando si mangiano i chiles en nogada?",
        risposta: "Sono un piatto di agosto e settembre, la stagione delle noci e del melograno. Il resto dell'anno li fanno pochi ristoranti; il mole poblano invece si trova sempre.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-dia-de-los-muertos'],
    imageAlt: 'Il Santuario de la Virgen de los Remedios sulla piramide di Cholula con il vulcano innevato alle spalle',
    immagine: '/images/viaggi/messico-dia-de-los-muertos/giorno-06-puebla-cholula.jpg',
  },
  {
    slug: 'oaxaca',
    paeseSlug: 'messico',
    ordine: 12,
    nome: 'Oaxaca',
    tipologia: ['città coloniale', 'Día de los Muertos', 'gastronomia', 'archeologia'],
    giorniConsigliati: '4-5 giorni, di più nei giorni della festa',
    visitataPersonalmente: true,
    introduzione:
      'Capitale di uno stato con una forte presenza indigena, in altura, con un centro coloniale di pietra verde patrimonio UNESCO, mercati enormi e la cucina dei moli. Tra il 31 ottobre e il 2 novembre è il luogo dove il Día de los Muertos è più vivo e più vario.',
    percheAndarci:
      'Per le notti della festa nei cimiteri e nei paesi intorno, per il mezcal, per i mercati e per Monte Albán, la capitale zapoteca sulla cima di una montagna.',
    cosaVedere: [
      'Il Templo de Santo Domingo, il museo e il giardino etnobotanico',
      'I mercati 20 de Noviembre e Benito Juárez',
      'Monte Albán',
      'Il cimitero di Santa Cruz Xoxocotlán la notte del 31 ottobre',
      'Il Panteón General (San Miguel)',
    ],
    cosaFare: [
      'Seguire una comparsa nei barrios di Jalatlaco e Xochimilco nei giorni prima della festa',
      'La muerteada di San Agustín Etla la notte del 1° novembre, con un tour che garantisca il ritorno',
      'Il pasillo de humo del Mercado 20 de Noviembre',
      'Assaggiare tlayudas, mole negro, tejate e chapulines',
    ],
    doveDormire:
      'Il centro tra Santo Domingo e Jalatlaco. Nelle notti della festa i prezzi salgono molto: prenotare con molti mesi di anticipo.',
    doveMangiare: 'I mercati per tlayudas, mole e cioccolata; le mezcalerías del centro per il mezcal artigianale.',
    comeSpostarsi: 'A piedi in centro; colectivos e taxi per i paesi; tour organizzati per le notti della festa, quando i taxi scarseggiano.',
    periodoMigliore: 'da ottobre ad aprile; fine ottobre-inizio novembre per il Día de los Muertos; luglio per la Guelaguetza.',
    erroriDaEvitare: [
      'Prenotare l\'alloggio per la festa a poche settimane dalla partenza',
      'Pagare tour che promettono un "accesso" ai cimiteri, che è libero',
      'Fotografare persone e altari senza chiedere',
      'Non informarsi sui bloqueos prima degli spostamenti lunghi',
    ],
      "sapori": [
        {
          "nome": "Mole negro",
          "testo": "Salsa scura di peperoncini, spezie e cioccolato."
        },
        {
          "nome": "Tlayuda",
          "testo": "Grande tortilla croccante con fagioli, formaggio e carne."
        },
        {
          "nome": "Quesillo e tasajo",
          "testo": "Formaggio a fili e carne secca alla griglia."
        },
        {
          "nome": "Chapulines",
          "testo": "Cavallette tostate con lime e peperoncino."
        },
        {
          "nome": "Mezcal e cioccolato",
          "testo": "Specialità della regione, nelle mezcalerie e nei laboratori."
        }
      ],
      "attenzioni": [
        "Durante il Día de Muertos Oaxaca è molto affollata: prenotare hotel e tour con mesi di anticipo.",
        "Mezcal artigianale: comprare da produttori e botteghe affidabili.",
        "Taxi senza tassametro: concordare il prezzo."
      ],
    comeArrivare: "Bus ADO da Puebla o da Città del Messico; voli da Città del Messico. Da Puebla (CAPU) il bus ADO impiega circa 4 ore e mezza attraverso la sierra, 450-800 MXN secondo la classe (circa 22-40 €); da Città del Messico il viaggio diretto dura 6-7 ore. Nei giorni del Día de los Muertos i posti finiscono: prenotare qualche giorno prima. Il terminal ADO è a nord del centro, a una decina di minuti di taxi da Santo Domingo. Verso la costa, la nuova autostrada porta a Puerto Escondido in circa 3-3 ore e mezza di bus o van (300-500 MXN). Prima di partire chiedere in hotel se ci sono bloqueos, i blocchi stradali di sindacati e comunità.",
    costi: "Ingresso ai panteones libero; tour serali ai cimiteri a prezzi variabili, indicativamente 600-1.200 MXN a persona con trasporto (dal viaggio, 2026). Monte Albán e Mitla 210 MXN ciascuno per gli stranieri (schede INAH, 2026), Museo de las Culturas 210 MXN, Hierve el Agua 50-100 MXN in contanti. Budget basso circa 60-90 € al giorno a persona (ostello, mercati, colectivos); medio 125-200 € (casa de huéspedes o piccolo hotel in centro, ristoranti, un tour nei Valles Centrales); alto da 300 € (hotel in casa coloniale, autista, cucina d'autore). Nelle notti della festa gli alloggi costano due o tre volte tanto.",
    luoghi: [
      {
        "nome": "Templo de Santo Domingo e giardino etnobotanico",
        "testo": "Chiesa barocca con interni dorati, ex convento con museo e il giardino etnobotanico, che si visita solo con guida. È il monumento più bello della città e il punto di riferimento per orientarsi.",
        "come": "A piedi dal centro; la chiesa è gratuita.",
        "quando": "Mattina.",
        "tempo": "2-3 ore",
        "lat": 17.06556,
        "lng": -96.72306,
        "url": "https://lugares.inah.gob.mx/es/node/4252",
        "consiglio": "Al giardino etnobotanico si entra solo con le visite guidate, e orari e prenotazioni sono cambiati più volte di recente: informarsi in città prima di andare."
      },
      {
        "nome": "Museo de las Culturas de Oaxaca",
        "testo": "Il museo dentro l'ex convento di Santo Domingo, con le sale sulle culture zapoteca e mixteca e il tesoro della Tomba 7 di Monte Albán, gioielli d'oro e oggetti di giada. Dalle finestre dei chiostri si vede il giardino etnobotanico.",
        "come": "Ingresso dal lato della chiesa di Santo Domingo.",
        "quando": "Mattina, prima di Monte Albán o subito dopo.",
        "tempo": "2 ore",
        "costo": "210 MXN per gli stranieri, circa 10 € (scheda INAH, 2026).",
        "orari": "Da martedì a sabato 10-16, chiuso domenica e lunedì secondo la scheda INAH: verificare prima.",
        "lat": 17.06592,
        "lng": -96.72315,
        "url": "https://lugares.inah.gob.mx/es/node/4252"
      },
      {
        "nome": "Monte Albán",
        "testo": "Antica capitale zapoteca su una collina spianata sopra la città, patrimonio UNESCO, con la grande piazza, il gioco della palla e le tombe. Dall'alto si vedono i tre Valles Centrales.",
        "come": "Navette dal centro o taxi, circa 20 minuti; ingresso INAH con il museo di sito compreso.",
        "quando": "All'apertura: nelle ore centrali fa caldo e non c'è ombra.",
        "tempo": "2-3 ore",
        "costo": "210 MXN per gli stranieri, circa 10 € (scheda INAH, 2026).",
        "orari": "Tutti i giorni 8-17, ultimo ingresso alle 16 (scheda INAH).",
        "lat": 17.04389,
        "lng": -96.76778,
        "url": "https://lugares.inah.gob.mx/es/node/4351"
      },
      {
        "nome": "Mercati 20 de Noviembre e Benito Juárez",
        "testo": "Mercati con banchi di carne alla griglia, chapulines, cioccolato, mole e formaggio. Nel pasillo de humo del 20 de Noviembre si sceglie la carne cruda e la si fa grigliare al momento.",
        "come": "A piedi, a pochi isolati dallo Zócalo.",
        "quando": "Mattina e pranzo; aperti tutti i giorni.",
        "tempo": "1-2 ore",
        "costo": "Ingresso libero",
        "lat": 17.05799,
        "lng": -96.727,
        "consiglio": "Portare contanti in banconote piccole."
      },
      {
        "nome": "Zócalo e Cattedrale",
        "testo": "La piazza alberata con il chiosco della musica e i portici, e la Cattedrale di pietra verde accanto, sull'Alameda. La sera si riempie di venditori di palloncini, bande e famiglie.",
        "come": "A piedi dal centro.",
        "quando": "Sera, quando la piazza è più viva.",
        "tempo": "1 ora",
        "costo": "Ingresso libero",
        "lat": 17.06152,
        "lng": -96.72509
      },
      {
        "nome": "Andador Macedonio Alcalá",
        "testo": "La via pedonale che sale dalla Cattedrale a Santo Domingo, fiancheggiata da case coloniali, gallerie, negozi di artigianato e mezcalerías. È il percorso naturale per attraversare il centro.",
        "come": "A piedi.",
        "quando": "Tardo pomeriggio e sera.",
        "tempo": "1 ora",
        "costo": "Ingresso libero",
        "lat": 17.06312,
        "lng": -96.72432
      },
      {
        "nome": "Basílica de la Soledad",
        "testo": "Il santuario barocco della Virgen de la Soledad, patrona della città, con la facciata a pannelli scolpiti. Sulla piazza davanti si vendono i gelati di nieve dai gusti locali.",
        "come": "A piedi, a ovest dello Zócalo.",
        "quando": "Mattina o tardo pomeriggio.",
        "tempo": "45 minuti",
        "costo": "Ingresso libero",
        "lat": 17.06361,
        "lng": -96.73028
      },
      {
        "nome": "Museo Textil de Oaxaca",
        "testo": "Piccolo museo dedicato ai tessuti delle comunità di Oaxaca e del mondo, con mostre che cambiano e un negozio di cooperative. Aiuta a riconoscere i tessuti che si vedono nei mercati e a Teotitlán.",
        "come": "A piedi dal centro, in calle Hidalgo.",
        "quando": "Qualsiasi ora, anche la sera.",
        "tempo": "1 ora",
        "costo": "Ingresso libero (sito ufficiale).",
        "orari": "Lunedì-venerdì 10-20, sabato 11-20, domenica 11-18 (sito ufficiale).",
        "lat": 17.06077,
        "lng": -96.72292,
        "url": "https://museotextildeoaxaca.org/"
      },
      {
        "nome": "Museo Rufino Tamayo",
        "testo": "Il museo di arte preispanica raccolta dal pittore oaxaqueño Rufino Tamayo, in una casa coloniale con le sale dipinte di colori forti. Una collezione scelta con l'occhio di un artista più che di un archeologo.",
        "come": "A piedi, in avenida Morelos.",
        "quando": "Mattina o primo pomeriggio.",
        "tempo": "1 ora",
        "lat": 17.06346,
        "lng": -96.72689
      },
      {
        "nome": "Instituto de Artes Gráficas de Oaxaca (IAGO)",
        "testo": "Il centro di grafica fondato da Francisco Toledo, con mostre, una biblioteca d'arte e un patio dove ci si siede in silenzio. Racconta la scena artistica contemporanea della città.",
        "come": "Sull'Andador Macedonio Alcalá, davanti a Santo Domingo.",
        "quando": "Pomeriggio.",
        "tempo": "45 minuti",
        "lat": 17.06657,
        "lng": -96.72407
      },
      {
        "nome": "Barrio de Jalatlaco",
        "testo": "Quartiere di case colorate e strade acciottolate a est del centro, con murales, caffè e piccoli ristoranti. Nei giorni prima del Día de los Muertos qui passano le comparsas di barrio.",
        "come": "A piedi dal centro, circa 10 minuti.",
        "quando": "Mattina per le foto, sera per cena.",
        "tempo": "1-2 ore",
        "costo": "Ingresso libero",
        "lat": 17.06748,
        "lng": -96.71609
      },
      {
        "nome": "Cerro del Fortín e Auditorio Guelaguetza",
        "testo": "La collina a nord-ovest del centro, con l'anfiteatro dove a luglio si tiene la Guelaguetza, la festa delle regioni di Oaxaca. Dalla scalinata e dal belvedere c'è la vista migliore sulla città.",
        "come": "A piedi con una salita di scalini dalla zona di Santo Domingo, o in taxi fino all'auditorio.",
        "quando": "Tardo pomeriggio, per il tramonto; meglio in compagnia.",
        "tempo": "1,5 ore",
        "costo": "Ingresso libero",
        "lat": 17.06864,
        "lng": -96.731
      },
      {
        "nome": "Central de Abastos",
        "testo": "Il mercato all'ingrosso della città, enorme e caotico, dove arrivano i produttori dei paesi intorno. È il posto più autentico per vedere cosa si mangia a Oaxaca, dai chiles secchi alle tortillas fatte a mano.",
        "come": "Taxi o a piedi dal centro, circa 20 minuti a sud-ovest.",
        "quando": "Mattina.",
        "tempo": "1-2 ore",
        "lat": 17.05977,
        "lng": -96.73534,
        "consiglio": "Attenzione ai borseggi fra i corridoi più affollati."
      },
      {
        "nome": "Cimitero di Santa Cruz Xoxocotlán e Panteón General",
        "testo": "Le veglie del Día de Muertos (31 ottobre-2 novembre), con tombe decorate di fiori di cempasúchil e candele. Il Panteón General è a piedi dal centro, Xoxocotlán a sud della città.",
        "come": "Taxi o tour per Xoxocotlán, concordando anche il ritorno; Panteón General a piedi.",
        "quando": "Notte del 31 ottobre e 1-2 novembre.",
        "tempo": "Serata",
        "costo": "Ingresso libero: nessun tour vende un «accesso»",
        "lat": 17.03081,
        "lng": -96.75015,
        "consiglio": "Rispettare le famiglie: non è uno spettacolo."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Monte Albán all'apertura",
          "Pranzo al Mercato 20 de Noviembre, nel pasillo de humo",
          "Pomeriggio: Santo Domingo e Museo de las Culturas",
          "Sera: Andador Macedonio Alcalá e Zócalo"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1 come sopra",
          "Giorno 2: Basílica de la Soledad, Museo Textil e Museo Tamayo, pomeriggio a Jalatlaco, tramonto al Cerro del Fortín"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: Valles Centrales (Árbol del Tule, Teotitlán, Mitla, Hierve el Agua) con un tour o in colectivo"
        ]
      },
      {
        "titolo": "Día de los Muertos",
        "tappe": [
          "31 ottobre: Monte Albán al mattino, notte a Santa Cruz Xoxocotlán",
          "1° novembre: Valles Centrales di giorno, muerteada di San Agustín Etla la notte",
          "2 novembre: Panteón General e ultime comparsas in città"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro storico",
        "perChi": "a piedi da tutto",
        "testo": "Hotel in case coloniali, cultura e ristoranti, più rumoroso. Fra Santo Domingo e lo Zócalo; nelle notti della festa i prezzi salgono di due o tre volte.",
        "fascia": "75-175 €"
      },
      {
        "nome": "Barrio Jalatlaco",
        "perChi": "caffè e atmosfera",
        "testo": "Quartiere di case colorate, più tranquillo, a piedi dal centro. Molte casas de huéspedes e piccoli hotel.",
        "fascia": "75-175 €"
      },
      {
        "nome": "Barrio de Xochimilco",
        "perChi": "chi cerca calma",
        "testo": "Il vecchio quartiere a nord di Santo Domingo, con l'acquedotto e strade silenziose, a 10-15 minuti a piedi dal centro."
      }
    ],
    gite: [
      {
        "nome": "Árbol del Tule e Teotitlán del Valle",
        "distanza": "20-40 minuti in colectivo o taxi",
        "come": "Colectivos per Tlacolula dal centro, o taxi; il recinto del Tule costa pochi pesos.",
        "testo": "Il cipresso di Santa María del Tule, fra gli alberi dal tronco più largo del mondo, e il paese dei tessitori di lana di Teotitlán, dove si visitano i laboratori."
      },
      {
        "nome": "Mitla e Hierve el Agua",
        "distanza": "circa 45 km e 70 km, giornata",
        "come": "Tour di gruppo, indicativamente 600-900 MXN a persona ingressi esclusi (dal viaggio), o colectivo fino a Mitla.",
        "testo": "Mitla ha i mosaici geometrici di pietra unici in Mesoamerica (210 MXN per gli stranieri, aperta tutti i giorni 8-17, scheda INAH); Hierve el Agua le cascate pietrificate con le vasche sul precipizio, quando la comunità la tiene aperta (50-100 MXN in contanti)."
      },
      {
        "nome": "San Bartolo Coyotepec",
        "distanza": "circa 15 km a sud, 30 minuti",
        "come": "Colectivo o taxi dal centro.",
        "testo": "Il paese del barro negro, la ceramica nera lucidata a mano: nei laboratori di famiglia si vede come si lavora."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Oaxaca?",
        "risposta": "Tre giorni per la città, Monte Albán e una giornata nei Valles Centrales; quattro o cinque se si viene per il Día de los Muertos, che ha tre notti diverse da seguire."
      },
      {
        "domanda": "Quando conviene prenotare per il Día de los Muertos?",
        "risposta": "Gli alloggi 4-6 mesi prima: tra il 30 ottobre e il 2 novembre i prezzi salgono di due o tre volte e il centro si esaurisce. I tour serali ai cimiteri vanno prenotati qualche settimana prima."
      },
      {
        "domanda": "Come si va a Monte Albán?",
        "risposta": "Con le navette che partono dal centro o in taxi, circa 20 minuti. Il sito apre alle 8 e l'ingresso costa 210 MXN per gli stranieri (scheda INAH, 2026)."
      },
      {
        "domanda": "Hierve el Agua è aperta?",
        "risposta": "Dipende: la gestiscono le comunità e negli ultimi anni ha chiuso più volte per dispute locali. Conviene chiedere in città o all'agenzia il giorno prima."
      },
      {
        "domanda": "Che cosa sono i bloqueos?",
        "risposta": "Blocchi stradali di sindacati e comunità, frequenti nello stato di Oaxaca: possono fermare bus e taxi per ore. Prima di ogni trasferimento si chiede in hotel e si tiene un margine."
      },
      {
        "domanda": "Che cosa mangiare a Oaxaca?",
        "risposta": "Il mole negro, le tlayudas sulla brace, il quesillo, i chapulines, il tejate e la cioccolata in acqua. Il pasillo de humo del Mercato 20 de Noviembre è il pasto più semplice e più tipico."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-dia-de-los-muertos'],
    imageAlt: 'Un altare di cempasúchil illuminato dalle candele nella notte dei morti a Oaxaca',
    immagine: '/images/viaggi/messico-dia-de-los-muertos/giorno-08-oaxaca.jpg',
  },
  {
    slug: 'valles-centrales-oaxaca',
    paeseSlug: 'messico',
    ordine: 13,
    nome: 'Valles Centrales: Teotitlán, Matatlán, Mitla e Hierve el Agua',
    tipologia: ['villaggi', 'mezcal', 'archeologia', 'natura'],
    giorniConsigliati: '1-2 giorni da Oaxaca',
    visitataPersonalmente: true,
    introduzione:
      'La valle di Tlacolula, a est di Oaxaca, mette in fila lungo la carretera 190 il cipresso del Tule, il paese tessitore di Teotitlán del Valle, i palenques di mezcal di Santiago Matatlán, i mosaici di pietra di Mitla e le cascate pietrificate di Hierve el Agua.',
    percheAndarci:
      'Per vedere come si fa il mezcal artigianale, per le rovine zapoteche e per i paesi dove la vita comunitaria è ancora quella delle feste.',
    cosaVedere: [
      'L\'Árbol del Tule a Santa María del Tule',
      'I laboratori di tappeti di lana di Teotitlán del Valle',
      'I palenques di Santiago Matatlán',
      'I mosaici geometrici di Mitla',
      'Hierve el Agua, quando aperto',
      'Le rovine di Yagul',
    ],
    cosaFare: [
      'Visitare un palenque e assaggiare mezcal di agavi diverse',
      'La muerteada di San Agustín Etla (a nord di Oaxaca) la notte del 1° novembre',
      'Fare il bagno nelle piscine naturali di Hierve el Agua',
    ],
    comeArrivare: "Tutti i paesi della valle di Tlacolula sono lungo la carretera 190, la Panamericana che da Oaxaca va verso Tehuantepec: Tule è a circa 10 km, Teotitlán e Tlacolula a 30, Mitla a 45 e Hierve el Agua a circa 70, cioè 1,5-2 ore di strada. Il modo più semplice è un tour di gruppo da Oaxaca (indicativamente 600-900 MXN a persona, circa 30-45 €, ingressi esclusi) oppure un'auto con autista. In autonomia si usano i colectivos e i bus che percorrono la 190; da Mitla partono camionetas condivise per Hierve el Agua.",
    comeSpostarsi: 'Colectivos tra i paesi; da Mitla camionetas condivise per Hierve el Agua.',
    periodoMigliore: 'tutto l\'anno; fine ottobre-inizio novembre per gli altari nelle case e le comparsas.',
    costi: "Tour di gruppo della strada del mezcal 600-900 MXN a persona, ingressi esclusi; Mitla e Yagul 210 MXN, Dainzú e Lambityeco 145 MXN per gli stranieri (2026); Hierve el Agua 50-100 MXN fra quota comunitaria e biglietto, solo contanti; degustazioni nei palenques spesso gratuite. Budget giornaliero a persona, indicativo: basso 40-60 € (colectivos, comedores di paese, ingressi); medio 80-120 € (tour o auto, pranzo in un ristorante di Teotitlán, qualche acquisto); alto da 180 € (autista privato e guida per la giornata).",
    erroriDaEvitare: [
      'Partire per Hierve el Agua senza verificare che sia aperto: le chiusure sono possibili',
      'Guidare dopo le degustazioni di mezcal',
      'Entrare negli altari delle case senza un invito',
    ],
    luoghi: [
      {
        nome: "Árbol del Tule",
        testo: "Un cipresso di Montezuma con il tronco più massiccio del mondo, nel cortile della chiesa di Santa María del Tule. Le stime più serie gli danno fra 1.400 e 1.600 anni; i bambini del paese mostrano nei nodi della corteccia le figure di animali.",
        come: "Autobus, colectivo o taxi da Oaxaca, circa 10 km a est, sulla strada per Mitla.",
        quando: "Mattina, come prima sosta.",
        tempo: "30 minuti",
        costo: "Pochi pesos per entrare nel recinto (2026)",
        lat: 17.0465,
        lng: -96.63611,
      },
      {
        nome: "Dainzú",
        testo: "Un piccolo sito zapoteco sulla collina, con lastre di pietra scolpite con figure di giocatori di pelota con maschere e guanti. Si visita in poco tempo e quasi sempre da soli.",
        come: "Deviazione al km 23,5 della 190, poi 1,5 km verso sud.",
        quando: "Mattina, prima del caldo.",
        tempo: "45 minuti",
        costo: "145 MXN per gli stranieri, circa 7 € (2026)",
        orari: "Ogni giorno 8-17, ultimo ingresso alle 16.30",
        lat: 17.0037,
        lng: -96.55717,
        url: "https://lugares.inah.gob.mx/en/node/5739",
      },
      {
        nome: "Teotitlán del Valle",
        testo: "Villaggio zapoteco dei tappeti di lana tessuti a mano con tinture naturali (cocciniglia, indaco, muschi). Nei laboratori di famiglia si vedono il telaio, la cardatura e le vasche dei colori, e in questi giorni capita di vedere un altare in casa.",
        come: "Colectivo, taxi o tour da Oaxaca, circa 30-40 minuti; il paese è 4 km a nord della 190.",
        quando: "Mattina; agli altari delle case si entra solo se invitati.",
        tempo: "1-2 ore",
        lat: 17.02917,
        lng: -96.52,
        consiglio: "Comprare nei laboratori di famiglia, dove si vede la lavorazione.",
      },
      {
        nome: "Lambityeco",
        testo: "Un sito zapoteco minuscolo accanto alla 190, con due tettoie che proteggono fregi e maschere in stucco del dio della pioggia Cocijo e di una coppia di signori. Qui è vietato fotografare.",
        come: "Sulla 190 al km 30,6, 2,5 km prima di Tlacolula.",
        quando: "Sosta breve lungo la strada.",
        tempo: "30 minuti",
        costo: "145 MXN per gli stranieri, circa 7 € (2026)",
        orari: "Ogni giorno 8-17, ultimo ingresso alle 16.30",
        lat: 16.97167,
        lng: -96.49194,
        url: "https://lugares.inah.gob.mx/en/node/5709",
      },
      {
        nome: "Mercato domenicale di Tlacolula",
        testo: "Uno dei mercati più grandi dei Valles Centrales: la domenica le vie intorno alla chiesa si riempiono di banchi di mezcal, pane, barbacoa, tessuti e animali, con le donne zapoteche venute dai paesi. Dentro il mercato coperto ci sono i comedores della carne alla brace.",
        come: "Sulla 190, circa 30 km da Oaxaca; colectivos frequenti la domenica.",
        quando: "Domenica mattina; il 1° novembre 2026 cade di domenica.",
        tempo: "1,5-2 ore",
        costo: "Gratis",
        lat: 16.95428,
        lng: -96.47886,
      },
      {
        nome: "Yagul",
        testo: "Una città zapoteca su una collina rocciosa, con un grande campo per il gioco della pelota, il Palazzo dei Sei Patii e una fortezza in cima da cui si vede tutta la valle. Le grotte preistoriche intorno fanno parte del sito UNESCO di Yagul e Mitla.",
        come: "Deviazione al km 36 della 190, 1,2 km dopo Tlacolula.",
        quando: "Tardo pomeriggio per la luce sulla valle; chiude alle 17.",
        tempo: "1-1,5 ore",
        costo: "210 MXN per gli stranieri, circa 10 € (2026)",
        orari: "Ogni giorno 8-17, ultimo ingresso alle 16",
        lat: 16.95836,
        lng: -96.45014,
        url: "https://lugares.inah.gob.mx/en/node/5849",
      },
      {
        nome: "Santiago Matatlán",
        testo: "Il paese che si definisce «capitale mondiale del mezcal», con decine di palenques lungo la strada. Si vede l'agave cotta nei forni di pietra sotto terra, schiacciata con una ruota di pietra tirata da un cavallo e distillata in alambicchi di rame o di argilla.",
        come: "Sulla 190, poco a sud del bivio per Mitla; con tour o auto con autista.",
        quando: "Tarda mattina, quando i palenques lavorano.",
        tempo: "1-2 ore",
        costo: "Visita e degustazione gratis o per pochi pesos, senza obbligo di comprare (2026)",
        lat: 16.8661,
        lng: -96.38342,
        consiglio: "Chi guida non beve: i controlli ci sono.",
      },
      {
        nome: "Mitla",
        testo: "Il centro religioso zapoteco-mixteco con i mosaici geometrici di pietre incastrate senza malta, unici in Mesoamerica, che coprono le pareti dei palazzi. Accanto c'è la chiesa coloniale costruita sopra uno dei complessi.",
        come: "Colectivo o tour da Oaxaca, circa un'ora; deviazione al km 39 della 190 verso nord.",
        quando: "Mattina o primo pomeriggio.",
        tempo: "1-2 ore",
        costo: "210 MXN per gli stranieri, circa 10 € (2026); biglietti anche online",
        orari: "Ogni giorno 8-17, ultimo ingresso alle 16.30",
        lat: 16.92083,
        lng: -96.36167,
        url: "https://lugares.inah.gob.mx/en/node/5793",
      },
      {
        nome: "Hierve el Agua",
        testo: "Cascate pietrificate di carbonato di calcio sopra una vallata, con piscine naturali affacciate sul vuoto. Il sito è conteso da anni tra le comunità di San Lorenzo Albarradas e San Isidro Roaguía e ha avuto chiusure improvvise, una dal 2020 all'ottobre 2021.",
        come: "Tour da Oaxaca, auto o camioneta condivisa da Mitla; circa 70 km e 1,5-2 ore da Oaxaca.",
        quando: "Mattina, con meno gente; verificare l'apertura la settimana prima.",
        tempo: "2-3 ore",
        costo: "50-100 MXN fra quota comunitaria e biglietto, circa 3-5 €, solo contanti (2026)",
        lat: 16.86552,
        lng: -96.276,
        consiglio: "Dopo le piogge o per blocchi stradali può essere chiuso: controllare prima, chiedendo in hotel o a un operatore locale.",
      },
    ],
    programmi: [
      { titolo: "1 giorno", tappe: [
        "Árbol del Tule",
        "Teotitlán del Valle",
        "Mezcal a Santiago Matatlán",
        "Mitla, e Hierve el Agua se aperto",
      ] },
      { titolo: "2 giorni", tappe: [
        "Giorno 1: Tule, Dainzú, Teotitlán, Lambityeco e Yagul",
        "Giorno 2: Matatlán, Mitla e Hierve el Agua",
      ] },
      { titolo: "3 giorni", tappe: [
        "Giorni 1-2 come sopra, facendo cadere il primo di domenica per il mercato di Tlacolula",
        "Giorno 3: valle di Ocotlán con San Bartolo Coyotepec e San Martín Tilcajete",
      ] },
    ],
    zone: [
      {
        nome: "Centro di Oaxaca",
        perChi: "servizi e partenza dei tour",
        testo: "I Valles si visitano in giornata da Oaxaca: dal centro partono quasi tutti i tour. Nelle notti dei Morti i prezzi raddoppiano o triplicano.",
        fascia: "75-175 €",
      },
      {
        nome: "Barrio di Jalatlaco",
        perChi: "calma vicino al centro",
        testo: "Strade acciottolate e case colorate a est del centro, verso l'uscita per la 190: comodo per chi va nei Valles con l'auto.",
        fascia: "75-175 €",
      },
      {
        nome: "Teotitlán o Mitla",
        perChi: "chi vuole restare nella valle",
        testo: "Piccole locande di famiglia, calma e vita di paese; comode per arrivare a Hierve el Agua la mattina presto.",
      },
    ],
      "sapori": [
        {
          "nome": "Mezcal artigianale",
          "testo": "Prodotto a Santiago Matatlán, con degustazione nei palenques."
        },
        {
          "nome": "Tlayudas",
          "testo": "Nei comedor di villaggio."
        },
        {
          "nome": "Barbacoa",
          "testo": "Carne cotta lentamente in un forno scavato nella terra."
        },
        {
          "nome": "Pane di yema",
          "testo": "Pane dolce tipico dei villaggi."
        }
      ],
      "attenzioni": [
        "Hierve el Agua: gestita dalla comunità, può chiudere; verificare prima.",
        "Comprare tappeti nei laboratori di famiglia, non da intermediari.",
        "Il mezcal in degustazione è forte: non guidare."
      ],
    gite: [
      {
        nome: "Valle di Ocotlán: San Bartolo Coyotepec e San Martín Tilcajete",
        distanza: "15-35 km a sud di Oaxaca",
        come: "In colectivo, taxi o tour sulla strada 175 verso Ocotlán.",
        testo: "L'altra valle dell'artigianato: a San Bartolo si lavora il barro negro, la ceramica nera lucidata a pietra; a Tilcajete si intagliano e dipingono gli alebrijes. Il venerdì c'è il mercato di Ocotlán.",
      },
      {
        nome: "San Agustín Etla",
        distanza: "circa 40 minuti a nord di Oaxaca",
        come: "Taxi o tour; la notte della muerteada solo con un tour con ritorno.",
        testo: "Paese di collina con una vecchia filanda trasformata in centro delle arti. La notte del 1° novembre ospita la muerteada più grande dei Valles Centrales, con centinaia di persone in maschera.",
      },
      {
        nome: "Monte Albán",
        distanza: "circa 10 km da Oaxaca, 20-30 minuti",
        come: "Navette dal centro, taxi o tour.",
        testo: "La capitale zapoteca su una montagna spianata sopra la città, con la Gran Plaza e la vista sulle tre valli. È la visita archeologica principale da Oaxaca, da abbinare a una giornata nei Valles.",
      },
    ],
    faq: [
      {
        domanda: "Hierve el Agua è aperto?",
        risposta: "Nel 2026 i visitatori lo descrivono aperto, ma per le dispute fra comunità può chiudere senza preavviso. Conviene chiedere in hotel o a un operatore locale la settimana prima.",
      },
      {
        domanda: "Meglio un tour o andare da soli?",
        risposta: "Il tour di gruppo (600-900 MXN più ingressi) è il modo più semplice per vedere tutto in un giorno senza guidare dopo il mezcal. Da soli si va in colectivo, con più tempo nei paesi ma più attese.",
      },
      {
        domanda: "Quanto costa entrare a Mitla?",
        risposta: "210 MXN per gli stranieri, aperto ogni giorno dalle 8 alle 17 con ultimo ingresso alle 16.30 (2026). I biglietti si comprano anche online.",
      },
      {
        domanda: "Le degustazioni di mezcal sono gratuite?",
        risposta: "Nei palenques di Santiago Matatlán quasi sempre sì, o costano pochi pesos, e non c'è obbligo di comprare. Il mezcal artigianale è forte: chi guida non beve.",
      },
      {
        domanda: "Quando c'è il mercato di Tlacolula?",
        risposta: "La domenica, dalla mattina fino al primo pomeriggio. Conviene organizzare il giro dei Valles in modo da passarci a metà mattina.",
      },
      {
        domanda: "Quanti giorni servono per i Valles Centrales?",
        risposta: "Un giorno basta per Tule, Teotitlán, Matatlán e Mitla; con due giorni si aggiungono Hierve el Agua, Yagul e i siti minori senza fretta.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-dia-de-los-muertos'],
    imageAlt: 'Le cascate pietrificate di Hierve el Agua sopra la valle',
    immagine: '/images/viaggi/messico-dia-de-los-muertos/giorno-11-valles-centrales-oaxaca.jpg',
  },
  {
    slug: 'puerto-escondido',
    paeseSlug: 'messico',
    ordine: 14,
    nome: 'Puerto Escondido e la costa di Oaxaca',
    tipologia: ['mare', 'surf', 'natura'],
    giorniConsigliati: '3-5 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Una città di surf sul Pacifico, con la famosa onda di Zicatela, calette tranquille, lagune con la bioluminescenza e, verso est, i villaggi di Mazunte e Zipolite. Una nuova autostrada ha accorciato il viaggio da Oaxaca.',
    percheAndarci: 'Per chiudere un viaggio culturale con oceano, surf, tramonti e natura costiera.',
    cosaVedere: [
      'Playa Zicatela e La Punta',
      'Le calette di Carrizalillo, Manzanillo e Puerto Angelito',
      'La Laguna di Manialtepec',
      'Mazunte, Zipolite e Punta Cometa',
    ],
    cosaFare: [
      'Una lezione di surf a Carrizalillo o alla Punta',
      'La liberazione delle tartarughe con i progetti locali, in stagione',
      'La bioluminescenza a Manialtepec in una notte senza luna',
    ],
    doveDormire:
      'La Punta per ostelli e budget, Zicatela per la fascia media e la vita serale, Carrizalillo e Rinconada per la quiete e qualche hotel di fascia alta.',
    doveMangiare: 'Pescado a la talla, ceviche, tiritas e tacos de pescado nelle palapas sulla spiaggia.',
    comeSpostarsi: 'Taxi e colectivos lungo la costiera 200.',
    periodoMigliore: 'da novembre ad aprile, stagione secca; da giugno a ottobre piogge e possibili uragani.',
    erroriDaEvitare: [
      'Nuotare a Zicatela, dove le correnti di risacca sono pericolose',
      'Scegliere tour della bioluminescenza a motore fino in fondo alla laguna',
      'Lasciare oggetti incustoditi in spiaggia la sera',
    ],
      "sapori": [
        {
          "nome": "Pesce fresco",
          "testo": "Alla piastra, sulle spiagge."
        },
        {
          "nome": "Tlayuda",
          "testo": "Di Oaxaca, nei ristoranti locali."
        },
        {
          "nome": "Ceviche e aguachile",
          "testo": "Fresco, al mare."
        },
        {
          "nome": "Tamales oaxaqueños",
          "testo": "Avvolti in foglie di platano."
        }
      ],
      "attenzioni": [
        "Le correnti a Zicatela e Zipolite sono pericolose: nuotare solo dove indicato.",
        "Furti sulla spiaggia: non lasciare nulla incustodito.",
        "Strada da Oaxaca lunga e con curve: valutare il volo."
      ],
    comeArrivare: "Bus o van da Oaxaca sulla nuova autostrada; voli diretti da Città del Messico. Con l'autostrada Barranca Larga-Ventanilla, aperta del tutto nel 2024, da Oaxaca servono circa 3-3 ore e mezza invece delle sei-sette di prima, 300-500 MXN (15-25 €): meglio partire in mattinata con il posto prenotato il giorno prima e chiedere se ci sono bloqueos. Il volo da Città del Messico dura circa un'ora (Aeroméxico, Volaris e Viva) e l'aeroporto è a pochi minuti di taxi da Zicatela e dal centro. Chi dorme a Mazunte usa l'aeroporto di Huatulco, a circa un'ora di strada.",
    costi: "Lezioni di surf e tour della laguna a prezzi variabili: confrontare sul posto. Lezione di surf di gruppo circa 600-900 MXN (30-45 €), Centro Mexicano de la Tortuga circa 50 MXN, liberazione delle tartarughe a offerta (dal viaggio, 2026). Budget basso circa 50-70 € al giorno a persona (ostello alla Punta, pesce in spiaggia, colectivos); medio 100-160 € (hotel a Zicatela, una lezione di surf, la laguna di Manialtepec); alto da 250 € (hotel tranquillo a Carrizalillo o Rinconada, uscite private).",
    luoghi: [
      {
        "nome": "Playa Zicatela",
        "testo": "Un'onda potente e famosa, la «Mexican Pipeline», per surfisti esperti; la spiaggia, lunga quasi tre chilometri, ha ristoranti e hotel. Dalla sabbia si guardano i surfisti entrare nei tubi.",
        "come": "A piedi o taxi dal centro.",
        "quando": "Alba e tramonto per guardare i surfisti; il bagno solo con grande prudenza.",
        "tempo": "Mezza giornata",
        "costo": "Ingresso libero",
        "consiglio": "Correnti di risacca forti e annegamenti ogni anno: si nuota solo nelle calette riparate."
      },
      {
        "nome": "Carrizalillo, Manzanillo e Puerto Angelito",
        "testo": "Calette riparate con acqua calma, adatte al bagno e allo snorkeling. Carrizalillo, in fondo a circa 160 gradini, è anche la spiaggia delle prime lezioni di surf e dei tramonti.",
        "come": "Taxi o a piedi; a Carrizalillo si scende con la scalinata.",
        "quando": "Mattina per il bagno, tramonto a Carrizalillo.",
        "tempo": "Mezza giornata",
        "costo": "Ingresso libero; lettini e ombrelloni a pagamento",
        "lat": 15.85955,
        "lng": -97.07851,
        "consiglio": "La risalita da Carrizalillo col caldo è faticosa: scarpe comode e acqua."
      },
      {
        "nome": "La Punta",
        "testo": "L'estremo sud di Zicatela, con un'onda sinistra più morbida, scuole di surf, ostelli e locali all'aperto. È il lato più giovane di Puerto Escondido.",
        "come": "Taxi dal centro o a piedi lungo Zicatela.",
        "quando": "Mattina presto per il surf, sera per i locali.",
        "tempo": "Mezza giornata",
        "costo": "Lezione di surf di gruppo circa 600-900 MXN, 30-45 € (dal viaggio, 2026).",
        "lat": 15.83415,
        "lng": -97.0442
      },
      {
        "nome": "Playa Bacocho e la liberazione delle tartarughe",
        "testo": "Spiaggia lunga e aperta a ovest del centro, dove al tramonto alcuni progetti di conservazione liberano in mare le tartarughe appena nate nei loro vivai. A fine ottobre e a novembre la stagione delle schiuse è nel pieno.",
        "come": "Taxi dal centro, pochi minuti.",
        "quando": "Tramonto, con orari da chiedere il giorno stesso.",
        "tempo": "1-2 ore",
        "costo": "Piccola donazione al progetto",
        "lat": 15.86618,
        "lng": -97.09354,
        "consiglio": "Non si toccano i piccoli, niente flash, si sta dietro la linea indicata. Qui il mare è aperto: niente bagno."
      },
      {
        "nome": "Playa Principal e Andador El Adoquín",
        "testo": "La baia del centro, con le barche dei pescatori tirate a riva e il pesce venduto al mattino. Dietro c'è El Adoquín, la via pedonale con negozi, bar e ristoranti.",
        "come": "A piedi dal centro.",
        "quando": "Mattina presto per i pescatori, sera per la passeggiata.",
        "tempo": "1-2 ore",
        "costo": "Ingresso libero",
        "lat": 15.86012,
        "lng": -97.06322
      },
      {
        "nome": "Laguna di Manialtepec",
        "testo": "Laguna con mangrovie a circa 20 minuti a ovest della città. All'alba si va in barca per gli uccelli (aironi, cormorani, martin pescatori), di notte per la bioluminescenza, il plancton che si accende di azzurro quando l'acqua si muove.",
        "come": "Tour in barca da Puerto Escondido.",
        "quando": "Alba o notte senza luna; il picco della bioluminescenza è tra luglio e settembre, a novembre è più debole.",
        "tempo": "2-3 ore",
        "lat": 15.94583,
        "lng": -97.19444,
        "consiglio": "Chiedere all'operatore com'è andata nelle notti precedenti."
      },
      {
        "nome": "Mazunte, Zipolite e Punta Cometa",
        "testo": "Villaggi della costa vicina: Mazunte per il centro delle tartarughe, Zipolite per la spiaggia libera, Punta Cometa per il tramonto, con un sentiero breve nella vegetazione secca.",
        "come": "Colectivo o taxi condiviso lungo la costiera 200, circa un'ora e un quarto.",
        "quando": "Tramonto a Punta Cometa.",
        "tempo": "Giornata",
        "lat": 15.66006,
        "lng": -96.55703,
        "consiglio": "Per la discesa da Punta Cometa, al buio, serve una torcia."
      },
      {
        "nome": "Centro Mexicano de la Tortuga",
        "testo": "Il centro di ricerca e acquario dedicato alle tartarughe marine, a Mazunte, nato dopo il divieto di caccia del 1990 che ha cambiato l'economia del paese. Si vedono le specie che nidificano sulla costa di Oaxaca.",
        "come": "A Mazunte, lungo la strada principale; si abbina a Punta Cometa.",
        "quando": "Mattina o primo pomeriggio.",
        "tempo": "1 ora",
        "costo": "Circa 50 MXN, 2-3 € (dal viaggio, 2026)",
        "orari": "Chiuso lunedì e martedì (dal viaggio).",
        "lat": 15.66652,
        "lng": -96.55177
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: bagno a Carrizalillo o Puerto Angelito",
          "Pranzo di pesce sulla Playa Principal",
          "Pomeriggio: Zicatela e La Punta per guardare i surfisti",
          "Tramonto a Bacocho con la liberazione delle tartarughe"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1 come sopra",
          "Giorno 2: lezione di surf alla Punta al mattino, Manialtepec la sera per la bioluminescenza"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: Mazunte con il Centro della Tortuga, Zipolite e tramonto a Punta Cometa"
        ]
      }
    ],
    zone: [
      {
        "nome": "Zicatela",
        "perChi": "surf e vita serale",
        "testo": "Hotel, bar e ristoranti, rumorosi di notte. Fascia media.",
        "fascia": "75-150 €"
      },
      {
        "nome": "La Punta",
        "perChi": "budget e atmosfera giovane",
        "testo": "Ostelli e camere economiche, onde più morbide, vita all'aperto.",
        "fascia": "da 30 €"
      },
      {
        "nome": "Carrizalillo e Rinconada",
        "perChi": "tranquillità",
        "testo": "Quartieri residenziali sopra le calette, con hotel più quieti e qualche struttura di fascia alta."
      },
      {
        "nome": "Mazunte",
        "perChi": "chi vuole cambiare base",
        "testo": "Paese piccolo e rilassato a circa un'ora e un quarto, con cabañas e ostelli; si riparte dall'aeroporto di Huatulco."
      }
    ],
    gite: [
      {
        "nome": "Mazunte, Zipolite e Punta Cometa",
        "distanza": "circa 1 ora e 15 lungo la costiera 200",
        "come": "Colectivo o taxi condiviso; dopo il tramonto i mezzi si diradano.",
        "testo": "Il Centro della Tortuga, la spiaggia di Zipolite e il tramonto dal promontorio di Punta Cometa."
      },
      {
        "nome": "Lagunas de Chacahua",
        "distanza": "circa 70 km a ovest",
        "come": "Tour di una giornata da Puerto Escondido, oppure colectivo fino a Zapotalito e poi barca.",
        "testo": "Parco nazionale di lagune e mangrovie, con un villaggio di pescatori su una lingua di sabbia fra laguna e oceano."
      },
      {
        "nome": "Laguna di Manialtepec",
        "distanza": "circa 20 minuti a ovest",
        "come": "Tour in barca all'alba o di notte.",
        "testo": "Uccelli fra le mangrovie al mattino, bioluminescenza nelle notti senza luna."
      }
    ],
    faq: [
      {
        "domanda": "Ci si può fare il bagno a Zicatela?",
        "risposta": "Meglio di no: ha correnti di risacca forti e ogni anno ci sono annegamenti. Per nuotare si va a Carrizalillo, Manzanillo o Puerto Angelito."
      },
      {
        "domanda": "Quanti giorni servono a Puerto Escondido?",
        "risposta": "Tre giorni per calette, surf, Manialtepec e una giornata a Mazunte; con cinque si aggiunge Chacahua o qualche giorno di riposo."
      },
      {
        "domanda": "Dove conviene dormire?",
        "risposta": "Alla Punta per spendere poco, a Zicatela per la vita serale, a Carrizalillo e Rinconada per la quiete."
      },
      {
        "domanda": "Quando si liberano le tartarughe?",
        "risposta": "Al tramonto, a Bacocho, nella stagione delle schiuse, che a fine ottobre e a novembre è nel pieno. Gli orari si chiedono il giorno stesso e si lascia una piccola donazione."
      },
      {
        "domanda": "Quando si vede la bioluminescenza a Manialtepec?",
        "risposta": "Nelle notti senza luna, meglio dopo le piogge: il picco è tra luglio e settembre, a novembre è più debole e cambia da sera a sera."
      },
      {
        "domanda": "Come si arriva da Oaxaca?",
        "risposta": "Con bus o van sulla nuova autostrada, circa 3-3 ore e mezza e 300-500 MXN, oppure in aereo via Città del Messico."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-dia-de-los-muertos'],
    imageAlt: 'La baia di Puerto Escondido vista dall\'alto tra i cactus',
    immagine: '/images/viaggi/messico-dia-de-los-muertos/giorno-12-puerto-escondido.jpg',
  },
  {
    slug: 'patzcuaro-janitzio',
    paeseSlug: 'messico',
    ordine: 15,
    nome: 'Pátzcuaro e Janitzio (Michoacán)',
    tipologia: ['Día de los Muertos', 'lago', 'villaggi'],
    giorniConsigliati: '2-3 giorni tra il 30 ottobre e il 2 novembre',
    visitataPersonalmente: true,
    introduzione:
      'Pátzcuaro è una cittadina coloniale purépecha sul lago omonimo, nello stato del Michoacán. Sull\'isola di Janitzio, la notte del 1° novembre, il cimitero si accende di candele e dalle rive arrivano le barche: è l\'immagine più famosa del Día de los Muertos.',
    percheAndarci:
      'Per la notte di Janitzio e per i cimiteri dei paesi del lago, come Tzintzuntzan e Ihuatzio. È una tappa da valutare con attenzione: il Michoacán ha avvisi di sicurezza severi da parte di diversi governi: leggere quelli aggiornati prima di decidere.',
    cosaVedere: [
      'L\'isola di Janitzio e il suo cimitero la notte del 1° novembre',
      'Il cimitero e le yácatas di Tzintzuntzan, l\'antica capitale purépecha',
      'Le piazze coloniali di Pátzcuaro',
    ],
    cosaFare: [
      'La veglia di Tzintzuntzan la notte del 31 ottobre',
      'La traversata in lancia dal Muelle General per Janitzio',
      'Il tianguis artigianale della Noche de Ánimas',
    ],
    comeArrivare: "Da Città del Messico i bus di prima classe per Pátzcuaro partono dalle terminal Poniente e Norte e passano da Morelia sull'autostrada 15D: circa 4-5 ore. Chi arriva in aereo atterra a Morelia (MLM); dalla città i bus per Pátzcuaro partono spesso e impiegano circa un'ora. La stazione dei bus di Pátzcuaro è a sud del centro, a pochi minuti di taxi dalle piazze. Gli spostamenti su strada si fanno solo di giorno.",
    comeSpostarsi: 'Lance dal Muelle General per Janitzio; taxi e colectivos per i paesi del lago.',
    periodoMigliore: 'dal 30 ottobre al 2 novembre per la Noche de Ánimas.',
    costi: "Budget giornaliero a persona, indicativo per il 2026 e fuori dalle notti della festa: basso 45-65 € (piccolo hotel o casa di ospiti, mercato e comedores, colectivos); medio 90-140 € (hotel in una casa coloniale del centro, taxi per i paesi del lago, cene al ristorante); alto da 220 € (hotel boutique, auto con autista). Voci singole: lancia per Janitzio circa 100 MXN andata e ritorno; Tzintzuntzan 210 MXN e Ihuatzio 145 MXN per gli stranieri; Museo de Artes e Industrias Populares 145 MXN. Tra il 31 ottobre e il 2 novembre gli alloggi costano molto di più e vanno prenotati con mesi di anticipo.",
    erroriDaEvitare: [
      'Decidere di andare senza aver letto la scheda aggiornata di Viaggiare Sicuri sul Michoacán',
      'Spostarsi di notte fuori dalle strade principali',
      'Pensare di unire nello stesso viaggio Janitzio e le notti principali di Oaxaca: coincidono',
    ],
    luoghi: [
      {
        nome: "Isola di Janitzio",
        testo: "L'isola più conosciuta del lago, un paese di pescatori purépecha con le case che salgono a gradoni fino alla grande statua di José María Morelos, dentro la quale si sale lungo una scala dipinta con la storia dell'eroe dell'indipendenza. La notte del 1° novembre il cimitero si riempie di candele, fiori di cempasúchil e famiglie in veglia, ed è l'immagine più famosa del Día de los Muertos.",
        come: "In lancia dal Muelle General di Pátzcuaro; sull'isola si sale a piedi lungo vicoli in salita pieni di bancarelle.",
        quando: "Di giorno in qualsiasi stagione; la notte del 1° novembre per la veglia, con barche piene e lunghe attese al molo.",
        tempo: "Mezza giornata; la notte della veglia fino a tardi",
        costo: "Lancia circa 100 MXN a persona andata e ritorno, circa 5 € (2026)",
        orari: "Lance di giorno circa dalle 9 alle 18; nelle notti della festa il servizio continua fino a tardi",
        lat: 19.57361,
        lng: -101.65194,
        consiglio: "Durante la veglia le famiglie pregano accanto alle tombe: niente flash e foto solo dopo aver chiesto.",
      },
      {
        nome: "Muelle General",
        testo: "Il molo principale del lago, circa tre chilometri a nord del centro, da cui partono le lance per Janitzio e per le altre isole. Intorno ci sono le biglietterie, i banchi di artigianato e piccoli ristoranti che friggono charales e pescado blanco.",
        come: "In taxi o con i colectivos segnati «Muelle» dal centro, una decina di minuti.",
        quando: "Mattina, prima che arrivino i gruppi.",
        tempo: "30 minuti, più l'attesa della lancia",
        costo: "Gratis",
        lat: 19.54332,
        lng: -101.61659,
      },
      {
        nome: "Plaza Vasco de Quiroga",
        testo: "La piazza grande di Pátzcuaro, una delle più ampie del Messico, circondata da case coloniali con i portici e i tetti di tegole rosse. Al centro c'è la fontana con la statua di Vasco de Quiroga, il vescovo che nel Cinquecento organizzò i villaggi del lago per mestiere: rame, lacca, legno, tessuti.",
        come: "A piedi; è il centro della città.",
        quando: "Mattina presto o sera, quando si accendono i lampioni.",
        tempo: "1 ora",
        costo: "Gratis",
        lat: 19.5135,
        lng: -101.60877,
      },
      {
        nome: "Plaza Gertrudis Bocanegra e mercato",
        testo: "La «piazza chica», più popolare e animata della grande, dedicata all'eroina dell'indipendenza fucilata a Pátzcuaro nel 1817. Sul lato nord comincia il mercato, con banchi di frutta, corundas, pane e artigianato dei paesi del lago; nei giorni della Noche de Ánimas qui e nella piazza grande si monta il tianguis artigianale.",
        come: "A piedi, due isolati a nord di Plaza Vasco de Quiroga.",
        quando: "Mattina, quando il mercato è più vivo.",
        tempo: "1-2 ore",
        costo: "Gratis",
        lat: 19.51612,
        lng: -101.60886,
      },
      {
        nome: "Biblioteca Gertrudis Bocanegra",
        testo: "La biblioteca pubblica occupa l'antica chiesa di San Agustín. In fondo alla navata c'è il grande murale di Juan O'Gorman con la storia del Michoacán, dalle origini purépecha alla rivoluzione, uno dei motivi meno noti per fermarsi in città.",
        come: "A piedi, sulla Plaza Gertrudis Bocanegra.",
        quando: "Di giorno, negli orari della biblioteca.",
        tempo: "30 minuti",
        costo: "Gratis",
        lat: 19.51661,
        lng: -101.6084,
      },
      {
        nome: "Basílica de Nuestra Señora de la Salud",
        testo: "La chiesa che Vasco de Quiroga volle come cattedrale, rimasta incompiuta e ricostruita più volte. Custodisce l'immagine della Virgen de la Salud, modellata secondo la tecnica purépecha in pasta di canna di mais, ed è meta di pellegrinaggi, soprattutto intorno all'8 dicembre.",
        come: "A piedi, in salita a est della piazza grande.",
        quando: "Mattina; nelle ore di messa si visita in silenzio.",
        tempo: "30 minuti",
        costo: "Gratis",
        lat: 19.51511,
        lng: -101.60615,
      },
      {
        nome: "Museo de Artes e Industrias Populares",
        testo: "Il museo dell'INAH occupa il Colegio de San Nicolás, fondato da Vasco de Quiroga nel Cinquecento. Raccoglie lacche, rame battuto, ceramiche, maschere e tessuti dei paesi del lago, e nel giardino c'è una troje, la casa tradizionale purépecha in legno.",
        come: "A piedi, un isolato a est di Plaza Vasco de Quiroga.",
        quando: "Mattina, prima di girare le botteghe.",
        tempo: "1 ora",
        costo: "145 MXN per gli stranieri, circa 7 €; 80 MXN per i messicani (2026)",
        orari: "Da martedì a domenica 9-17, chiuso il lunedì",
        lat: 19.51381,
        lng: -101.60715,
        url: "https://lugares.inah.gob.mx/en/node/4877",
      },
      {
        nome: "Casa de los Once Patios",
        testo: "Un antico convento del Settecento con una serie di cortili collegati, oggi occupato da botteghe di artigiani: lacca dipinta a mano, telai, rame, ricami. Si entra liberamente e spesso si vede lavorare chi vende.",
        come: "A piedi, pochi isolati a sud-est della piazza grande.",
        quando: "Tarda mattina, quando le botteghe sono aperte.",
        tempo: "45 minuti",
        costo: "Ingresso libero",
        lat: 19.51181,
        lng: -101.60808,
      },
      {
        nome: "Zona archeologica di Tzintzuntzan",
        testo: "L'antica capitale del regno purépecha, che resistette agli aztechi e cadde solo con l'arrivo degli spagnoli. Su una grande piattaforma affacciata sul lago si allineano le yácatas, basamenti a pianta mista rettangolare e circolare; il piccolo museo di sito è compreso nel biglietto.",
        come: "In auto o con i colectivos per Quiroga dal centro di Pátzcuaro, circa 25-30 minuti lungo la riva del lago.",
        quando: "Mattina; la notte del 31 ottobre il cimitero del paese ospita una delle veglie più sentite del lago.",
        tempo: "1,5-2 ore",
        costo: "210 MXN per gli stranieri, circa 10 €; 105 MXN per i messicani (2026)",
        orari: "Tutti i giorni 9-18, ultimo ingresso alle 17",
        lat: 19.62314,
        lng: -101.57378,
        url: "https://lugares.inah.gob.mx/en/node/5791",
        consiglio: "In paese merita una sosta anche il convento francescano con il cortile degli ulivi.",
      },
      {
        nome: "Zona archeologica di Ihuatzio",
        testo: "Un sito purépecha meno visitato, su un altopiano sopra il lago, con due grandi piramidi gemelle e lunghe mura che servivano anche da camminamenti. È tranquillo e quasi sempre vuoto, e il paese di Ihuatzio ha un cimitero frequentato nelle notti dei morti.",
        come: "In auto o taxi da Pátzcuaro, circa 20 minuti verso nord-est.",
        quando: "Mattina o tardo pomeriggio.",
        tempo: "1 ora",
        costo: "145 MXN per gli stranieri, circa 7 €; 80 MXN per i messicani (2026)",
        orari: "Tutti i giorni 9-18, ultimo ingresso alle 17",
        lat: 19.57778,
        lng: -101.62217,
        url: "https://lugares.inah.gob.mx/en/node/5482",
      },
      {
        nome: "Cerro del Estribo",
        testo: "La collina boscosa a ovest della città, area naturale protetta, con un belvedere da cui si vedono il lago e le isole. Gli abitanti ci salgono a piedi lungo una lunga scalinata, soprattutto nel fine settimana.",
        come: "In auto o taxi fino al parcheggio, poi a piedi lungo la scalinata.",
        quando: "Mattina presto, con l'aria più limpida.",
        tempo: "1,5-2 ore",
        costo: "Gratis",
        lat: 19.51199,
        lng: -101.642,
        consiglio: "Salire in gruppo e di giorno, senza oggetti di valore in vista.",
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Plaza Vasco de Quiroga, Museo de Artes e Industrias Populares e Casa de los Once Patios",
          "Pranzo al mercato di Plaza Gertrudis Bocanegra e murale della biblioteca",
          "Pomeriggio: lancia dal Muelle General per Janitzio e salita alla statua di Morelos",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: il centro, la Basílica e il mercato, poi Janitzio nel pomeriggio",
          "Giorno 2: Tzintzuntzan con le yácatas e il convento, Ihuatzio sulla strada del ritorno",
        ],
      },
      {
        titolo: "3 giorni (30 ottobre-1° novembre)",
        tappe: [
          "30 ottobre: arrivo, centro e tianguis artigianale della Noche de Ánimas",
          "31 ottobre: Tzintzuntzan di giorno e veglia nel suo cimitero la notte",
          "1° novembre: Ihuatzio o Santa Clara del Cobre di giorno, la notte in lancia a Janitzio",
        ],
      },
    ],
    zone: [
      {
        nome: "Centro storico",
        perChi: "a piedi da tutto",
        testo: "Hotel e case di ospiti in edifici coloniali intorno alle due piazze, con mercato e ristoranti a pochi passi. Nelle notti della festa i prezzi salgono molto.",
        fascia: "75-100 €",
      },
      {
        nome: "Case coloniali di charme",
        perChi: "chi vuole un patio e il camino",
        testo: "Pochi hotel boutique nelle vecchie dimore del centro, con cortili, camini per le sere fresche e stanze ampie.",
        fascia: "da 250 €",
      },
      {
        nome: "Verso il lago e il Muelle General",
        perChi: "chi va spesso alle isole",
        testo: "Alberghi e posadas lungo l'avenida Lázaro Cárdenas, più vicini al molo ma lontani dalle piazze: la sera serve il taxi.",
      },
    ],
      "sapori": [
        {
          "nome": "Pescado blanco",
          "testo": "Pesce bianco del lago, fritto o alla piastra."
        },
        {
          "nome": "Corundas e uchepos",
          "testo": "Tamales di mais di tradizione purépecha."
        },
        {
          "nome": "Sopa tarasca",
          "testo": "Zuppa di fagioli e pomodoro con chile ancho."
        },
        {
          "nome": "Carnitas",
          "testo": "Maiale cotto lentamente, di Michoacán."
        }
      ],
      "attenzioni": [
        "Durante il Día de Muertos la zona è molto affollata: prenotare mesi prima.",
        "Rispettare le famiglie durante le veglie: niente flash né foto invadenti.",
        "Barca per Janitzio: concordare il prezzo."
      ],
    gite: [
      {
        nome: "Santa Clara del Cobre",
        distanza: "circa 20 km a sud, mezz'ora",
        come: "In auto o con i colectivos dalla stazione dei bus.",
        testo: "Il paese del rame battuto a mano, con decine di botteghe dove si vedono lavorare pentole, vasi e lampade, e un museo dedicato al mestiere. In agosto vi si tiene la fiera nazionale del rame.",
      },
      {
        nome: "Morelia",
        distanza: "circa 60 km, 1 ora",
        come: "In bus di prima classe, partenze frequenti dalla stazione di Pátzcuaro.",
        testo: "La capitale del Michoacán ha un centro storico in pietra rosa patrimonio UNESCO, con la cattedrale, l'acquedotto e i portici. Si visita in giornata e al ritorno si rientra con la luce.",
      },
      {
        nome: "Tócuaro ed Erongarícuaro",
        distanza: "10-20 km sulla riva occidentale",
        come: "In auto o taxi lungo la strada del lago.",
        testo: "Due paesi purépecha meno battuti: Tócuaro è conosciuto per le maschere di legno intagliate e dipinte, Erongarícuaro per la piazza e il convento francescano.",
      },
    ],
    faq: [
      {
        domanda: "È sicuro andare a Pátzcuaro?",
        risposta: "La Farnesina raccomanda di evitare i viaggi non indispensabili nel Michoacán, e lo stato è al livello più alto anche negli avvisi degli Stati Uniti. La zona del lago è turistica e molto frequentata nei giorni della festa, ma chi ci va deve leggere le schede aggiornate, muoversi solo di giorno e su strade principali.",
      },
      {
        domanda: "Qual è la notte di Janitzio?",
        risposta: "La veglia nel cimitero dell'isola è la notte tra il 1° e il 2 novembre. La notte del 31 ottobre è quella di Tzintzuntzan; Ihuatzio e Jarácuaro sono alternative meno affollate.",
      },
      {
        domanda: "Come si arriva sull'isola di Janitzio?",
        risposta: "In lancia dal Muelle General, a nord del centro, per circa 100 MXN a persona andata e ritorno. Di giorno le barche partono quando sono piene; nelle notti della festa le code al molo sono lunghe.",
      },
      {
        domanda: "Quanti giorni servono?",
        risposta: "Due giorni bastano per la città, Janitzio e Tzintzuntzan. Per la festa conviene arrivare il 30 ottobre e restare fino al 2 novembre.",
      },
      {
        domanda: "Si possono unire Janitzio e Oaxaca nello stesso viaggio?",
        risposta: "Le notti principali coincidono, quindi una delle due si perde. L'ordine più pratico è Pátzcuaro dal 30 ottobre al 1° novembre, rientro a Città del Messico il 2 per Mixquic e Oaxaca dopo la festa.",
      },
      {
        domanda: "Cosa si mangia a Pátzcuaro?",
        risposta: "Il pescado blanco e i charales fritti del lago, le corundas e gli uchepos, la sopa tarasca e le carnitas della vicina Quiroga. Al mercato si fa colazione con atole e pane.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-dia-de-los-muertos'],
    imageAlt: 'L\'isola di Janitzio nel lago di Pátzcuaro con il monumento a Morelos in cima, vista dall\'alto',
    immagine: '/images/messico/janitzio-stock.jpg',
  },
  {
    slug: 'la-paz-baja',
    paeseSlug: 'messico',
    ordine: 16,
    nome: 'La Paz ed Espíritu Santo',
    tipologia: ['mare', 'fauna marina', 'isole'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La capitale della Baja California Sur ha i ritmi di una città di provincia, un lungo lungomare sul Mar di Cortez e, davanti, l\'arcipelago disabitato di Espíritu Santo, patrimonio UNESCO. D\'inverno nella baia si nutre lo squalo balena.',
    percheAndarci: 'Per nuotare con lo squalo balena e con i leoni marini di Los Islotes, e per Playa Balandra.',
    cosaVedere: [
      'Il Malecón al tramonto',
      'Playa Balandra, El Tecolote e Pichilingue',
      'L\'arcipelago di Espíritu Santo e Los Islotes',
    ],
    cosaFare: [
      'Nuotare con lo squalo balena con un operatore autorizzato CONANP, in stagione',
      'Snorkeling con i leoni marini a Los Islotes',
      'Kayak e pranzo in spiaggia a Ensenada Grande',
    ],
    doveDormire: 'Il Malecón o il centro, tutto a piedi; resort più tranquilli verso Pichilingue.',
    doveMangiare: 'Tacos de pescado e de camarón, ceviche, aguachile, almejas chocolatas.',
    comeArrivare: "L'aeroporto internazionale di La Paz (LAP) è a una dozzina di chilometri dal centro: da Città del Messico il volo dura circa 2 ore e 15 e costa indicativamente 1.500-3.500 MXN, circa 75-175 € (2026); in città si va in taxi o con l'auto a noleggio, che conviene ritirare subito. Chi atterra a San José del Cabo (SJD), con più voli internazionali, ha circa 2,5-3 ore di strada. I traghetti Baja Ferries arrivano al porto di Pichilingue, 17 km a nord, da Mazatlán e Topolobampo.",
    comeSpostarsi: 'Auto a noleggio per spiagge e dintorni; barche dei tour per le isole.',
    periodoMigliore: 'fra l\'autunno e la primavera per lo squalo balena, quando la CONANP apre la stagione.',
    costi: "Budget giornaliero a persona, indicativo per il 2026: basso 75-110 € (ostello o piccolo hotel, tacos di pesce, auto divisa); medio 150-225 € (hotel sul lungomare, un'uscita in barca al giorno, cene di pesce); alto da 350 € (resort verso Pichilingue, uscite private). Voci singole: squalo balena 1.500-2.500 MXN più il braccialetto del santuario (215 MXN nella stagione 2025-2026); Espíritu Santo 2.500-3.500 MXN; Balandra 120 MXN; Museo Regionale 145 MXN per gli stranieri.",
    erroriDaEvitare: [
      'Andare a Balandra senza aver prenotato il turno',
      'Scegliere un operatore non autorizzato per lo squalo balena',
      'Non tenere un giorno di margine per il vento da nord',
    ],
    luoghi: [
      {
        nome: "Isla Espíritu Santo",
        testo: "Arcipelago disabitato dentro il sito UNESCO delle isole e aree protette del Golfo di California, con scogliere rosse, baie di sabbia bianca e fondali per lo snorkeling. La giornata comprende di solito il pranzo in spiaggia a Ensenada Grande e soste lungo la costa, a volte con delfini o mante.",
        come: "Tour in barca da La Paz o da Pichilingue con operatore autorizzato.",
        quando: "Partenza la mattina presto; con vento forte da nord le uscite si annullano.",
        tempo: "Giornata intera",
        costo: "Indicativamente 2.500-3.500 MXN a persona, circa 125-175 €, più la quota del parco se non inclusa (2026)",
        lat: 24.47139,
        lng: -110.3325,
        consiglio: "Tenere un giorno di margine a La Paz per le cancellazioni da vento.",
      },
      {
        nome: "Los Islotes",
        testo: "Gli scogli all'estremità nord dell'arcipelago, dove vive una colonia di leoni marini: si fa snorkeling mentre i giovani si avvicinano curiosi e girano intorno ai nuotatori. È la tappa che tutti aspettano nella giornata a Espíritu Santo.",
        come: "Solo in barca, dentro il tour di Espíritu Santo; si entra in acqua dove indica l'operatore.",
        quando: "Mattina, con mare calmo.",
        tempo: "1 ora in acqua",
        consiglio: "Le regole sui leoni marini sono severe: niente contatto e distanza dalle femmine e dai maschi adulti.",
      },
      {
        nome: "Squalo balena nella baia di La Paz",
        testo: "Incontro con gli squali balena dentro la zona di rifugio della baia, vicino alla lingua di sabbia di El Mogote, solo con barche autorizzate. Si nuota in superficie accanto all'animale, in piccoli gruppi e a turni di pochi minuti, senza contatto.",
        come: "Tour in barca dal Malecón; controllare che l'operatore sia nell'elenco ufficiale CONANP della stagione.",
        quando: "Di solito fra l'autunno e la primavera, ma la stagione apre solo quando la CONANP conta abbastanza squali nel rifugio: nel 2025 è stata sospesa più volte.",
        tempo: "Mezza giornata",
        costo: "Indicativamente 1.500-2.500 MXN a persona, circa 75-125 €, più il braccialetto del santuario (215 MXN per gli stranieri nella stagione 2025-2026)",
        lat: 24.163,
        lng: -110.362,
        consiglio: "Acqua a 20-22 °C in inverno: la muta corta è utile.",
      },
      {
        nome: "Playa Balandra",
        testo: "Una baia bassa dall'acqua turchese fra colline rosse, nota per la roccia a fungo, dentro un'area naturale protetta. Si cammina con l'acqua alle ginocchia per centinaia di metri; l'accesso è contingentato per proteggere mangrovie e dune.",
        come: "In auto o taxi da La Paz, circa 25 minuti. Due turni, 8-12 e 13-17, con 450 persone per turno; si prenota sul portale delle aree protette della CONANP.",
        quando: "Turno della mattina, con meno vento.",
        tempo: "Mezza giornata",
        costo: "120 MXN a persona al giorno, circa 6 €; metà per gli studenti (2026)",
        orari: "Turni 8-12 e 13-17, prolungati fino alle 19 a Pasqua, in estate e a dicembre",
        lat: 24.32068,
        lng: -110.3229,
        consiglio: "Portare acqua e cibo: in spiaggia non si vende niente, e i rifiuti si riportano indietro.",
      },
      {
        nome: "Playa El Tecolote",
        testo: "La spiaggia larga e aperta poco dopo Balandra, con ristoranti di pesce sulla sabbia, kayak a noleggio e la vista su Espíritu Santo. Non ha turni ed è l'alternativa quando Balandra è al completo.",
        come: "In auto, circa 30 minuti da La Paz, in fondo alla strada di Pichilingue.",
        quando: "Pomeriggio, dopo il turno di Balandra.",
        tempo: "2-3 ore",
        costo: "Gratis",
        lat: 24.33622,
        lng: -110.31625,
      },
      {
        nome: "Playa Pichilingue",
        testo: "Una piccola spiaggia riparata accanto al porto dei traghetti, con palapas e ristoranti di pesce. L'acqua è calma e bassa, buona per un bagno veloce sulla strada di Balandra.",
        come: "In auto, circa 20 minuti da La Paz.",
        quando: "Pranzo o fine pomeriggio.",
        tempo: "1-2 ore",
        costo: "Gratis",
        lat: 24.28417,
        lng: -110.32861,
      },
      {
        nome: "Malecón di La Paz",
        testo: "Il lungomare della città, circa cinque chilometri con sculture, caffè e pista ciclabile, dove la sera escono a camminare famiglie, ciclisti e venditori di gelati. Il tramonto sul Mar di Cortez, con le sculture in controluce, è l'appuntamento di ogni giorno.",
        come: "A piedi dal centro; in bici a noleggio.",
        quando: "Tramonto.",
        tempo: "1-2 ore",
        costo: "Gratis",
        lat: 24.16752,
        lng: -110.3109,
      },
      {
        nome: "Playa El Coromuel",
        testo: "La spiaggia cittadina in fondo al Malecón, con un balneario, uno scivolo d'acqua e palapas, dove vanno le famiglie di La Paz. L'acqua è calma e bassa; il nome viene dal vento serale che rinfresca la baia.",
        come: "In bici o taxi dal centro, pochi minuti.",
        quando: "Pomeriggio.",
        tempo: "1-2 ore",
        lat: 24.19623,
        lng: -110.3006,
      },
      {
        nome: "Cattedrale e Jardín Velasco",
        testo: "La piazza principale del piccolo centro, con il chiosco, la casa di governo storica e la cattedrale di Nuestra Señora de La Paz, costruita dove sorgeva la missione gesuita del Settecento. Intorno ci sono i negozi e le taquerías del centro.",
        come: "A piedi, tre isolati dal Malecón.",
        quando: "Mattina o sera.",
        tempo: "30 minuti",
        costo: "Gratis",
        lat: 24.16167,
        lng: -110.31278,
      },
      {
        nome: "Museo Regionale di Antropologia e Storia",
        testo: "Il museo INAH della Baja California Sur, con le riproduzioni delle pitture rupestri della Sierra de San Francisco, i popoli della penisola, le missioni e la storia delle perle di La Paz. Aiuta a dare un contesto a una regione che si gira soprattutto per il mare.",
        come: "A piedi dal centro, all'angolo fra Altamirano e 5 de Mayo.",
        quando: "Nelle ore calde o in un giorno di vento.",
        tempo: "1-1,5 ore",
        costo: "145 MXN per gli stranieri, circa 7 € (2026)",
        orari: "Da martedì a domenica 9-18, chiuso il lunedì",
        lat: 24.15956,
        lng: -110.30881,
        url: "https://lugares.inah.gob.mx/en/node/5005",
      },
      {
        nome: "Museo della Balena e delle Scienze del Mare",
        testo: "Un museo piccolo sul lungomare, con gli scheletri di balene e delfini del Mar di Cortez e pannelli sulle specie che si incontrano nelle uscite in barca. È una buona introduzione prima dello squalo balena o delle balene grigie.",
        come: "A piedi o in bici lungo il Malecón.",
        quando: "Pomeriggio.",
        tempo: "1 ora",
        lat: 24.14758,
        lng: -110.31842,
      },
      {
        nome: "Mercato Madero",
        testo: "Il mercato municipale del centro, con banchi di pesce, frutta e piccoli comedores dove si fa colazione con i tacos di pesce fritto, la colazione più tipica della Baja, o con la machaca.",
        come: "A piedi dal centro.",
        quando: "Mattina.",
        tempo: "1 ora",
        lat: 24.15829,
        lng: -110.31553,
      },
    ],
    programmi: [
      { titolo: "1 giorno", tappe: [
        "Mattina: Playa Balandra, turno delle 8",
        "Pranzo di pesce a El Tecolote",
        "Tramonto sul Malecón",
      ] },
      { titolo: "2 giorni", tappe: [
        "Giorno 1: squalo balena la mattina (in stagione), Balandra nel turno del pomeriggio, Malecón",
        "Giorno 2: Espíritu Santo e Los Islotes",
      ] },
      { titolo: "3 giorni", tappe: [
        "Giorni 1-2 come sopra",
        "Giorno 3: margine per il vento; se il mare è buono, Museo Regionale, mercato Madero e Playa El Coromuel, oppure Todos Santos",
      ] },
    ],
    zone: [
      {
        nome: "Centro e Malecón",
        perChi: "a piedi da tutto",
        testo: "Hotel sul lungomare e nelle vie appena dietro, con ristoranti e agenzie delle uscite in barca a piedi. Gli hotel di fascia media sul lungomare sono la scelta più comoda.",
        fascia: "90-150 €",
      },
      {
        nome: "Vie del centro storico",
        perChi: "chi spende meno",
        testo: "Ostelli e piccoli hotel a qualche isolato dal mare, vicino al mercato e alle taquerías.",
        fascia: "35-60 €",
      },
      {
        nome: "Verso Pichilingue e Costa Baja",
        perChi: "resort e calma",
        testo: "Resort e alberghi tranquilli a nord, sulla strada delle spiagge, più lontani dal centro: serve l'auto.",
        fascia: "da 225 €",
      },
    ],
      "sapori": [
        {
          "nome": "Tacos di pesce",
          "testo": "Specialità di Baja, nelle taquerías."
        },
        {
          "nome": "Almejas chocolatas",
          "testo": "Vongole locali, fresche."
        },
        {
          "nome": "Machaca",
          "testo": "Carne secca sfilacciata con uova, di Baja."
        },
        {
          "nome": "Ceviche",
          "testo": "Con lime, nei ristoranti sul mare."
        }
      ],
      "attenzioni": [
        "Balandra ha accesso contingentato in due turni: verificare regole, orari e quota prima di partire.",
        "Per Los Islotes scegliere operatori autorizzati: le regole sui leoni marini sono severe.",
        "Sole forte e vento: portare acqua e protezione."
      ],
    gite: [
      {
        nome: "Todos Santos",
        distanza: "circa 80 km, 1 ora",
        come: "In auto sulla Federale 19 verso il Pacifico.",
        testo: "Pueblo mágico sul Pacifico, con il centro storico di gallerie, la spiaggia di Cerritos per il surf e, d'inverno, i rilasci di tartarughine al tramonto.",
      },
      {
        nome: "La Ventana ed El Sargento",
        distanza: "circa 45-60 minuti a sud-est",
        come: "In auto verso il Mar di Cortez, oltre la sierra.",
        testo: "Due villaggi sulla baia di fronte a Isla Cerralvo, famosi d'inverno per il kitesurf con il vento da nord. Anche senza fare sport, la spiaggia e i tramonti valgono il viaggio.",
      },
      {
        nome: "Bahía Magdalena",
        distanza: "circa 3 ore a nord-ovest",
        come: "In auto fino a Puerto San Carlos o López Mateos, partendo all'alba; poi panga con i pescatori.",
        testo: "La laguna dove le balene grigie partoriscono: la stagione ufficiale va dal 1° gennaio al 30 aprile, e dalle barche capita di vedere madri e piccoli a pochi metri. Si fa in giornata, ma meglio con una notte.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a La Paz?",
        risposta: "Tre o quattro: uno per Balandra e il Malecón, uno per Espíritu Santo, uno per lo squalo balena in stagione e uno di margine per il vento, che cancella spesso le uscite.",
      },
      {
        domanda: "Quando si nuota con lo squalo balena?",
        risposta: "Di solito fra l'autunno e la primavera, ma la stagione apre solo quando la CONANP conta abbastanza esemplari nella baia, e può essere sospesa. Prima di prenotare conviene controllare l'apertura e l'elenco degli operatori autorizzati.",
      },
      {
        domanda: "Serve la prenotazione per Playa Balandra?",
        risposta: "Sì, conviene: si entra in due turni (8-12 e 13-17) con 450 persone ciascuno, da prenotare sul portale delle aree protette della CONANP. L'ingresso costa 120 MXN.",
      },
      {
        domanda: "Serve l'auto a La Paz?",
        risposta: "Per il centro no, ma per Balandra, El Tecolote e i dintorni è molto comoda. Al noleggio va controllata l'assicurazione di responsabilità civile, obbligatoria e spesso non inclusa nel prezzo online.",
      },
      {
        domanda: "La Paz o Los Cabos come base?",
        risposta: "La Paz è più tranquilla ed economica ed è il punto di partenza per Espíritu Santo e lo squalo balena; Los Cabos ha resort, vita notturna e le megattere. Molti fanno entrambe, con Todos Santos in mezzo.",
      },
      {
        domanda: "Come si arriva a Los Islotes?",
        risposta: "Solo in barca, con un tour di giornata a Espíritu Santo da La Paz o da Pichilingue, indicativamente 2.500-3.500 MXN a persona. Con vento forte da nord le uscite si annullano.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-cdmx-baja-california'],
    imageAlt: 'Playa Balandra dall\'alto con l\'acqua bassa turchese, vicino a La Paz',
    immagine: '/images/viaggi/messico-cdmx-baja-california/giorno-07-la-paz-baja.jpg',
  },
  {
    slug: 'bahia-magdalena',
    paeseSlug: 'messico',
    ordine: 17,
    nome: 'Bahía Magdalena',
    tipologia: ['balene', 'laguna', 'villaggi di pescatori'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Una grande baia del Pacifico protetta da isole di sabbia, raggiungibile in auto da La Paz, con i villaggi di pescatori di Puerto Adolfo López Mateos e Puerto San Carlos. D\'inverno le balene grigie vi partoriscono e allattano i piccoli.',
    percheAndarci: 'Per vedere da vicino le madri di balena grigia con i piccoli, dalle pangas delle cooperative locali.',
    cosaVedere: ['Le lagune delle balene grigie', 'Le dune delle isole barriera', 'I villaggi di pescatori'],
    cosaFare: [
      'Un\'uscita in panga al mattino, quando il vento è più debole',
    ],
    doveDormire: 'Alloggi semplici e piccoli motel nei due villaggi; campi tendati a pacchetto sulle isole.',
    doveMangiare: 'Pesce e frutti di mare dei pescatori in ristoranti familiari.',
    comeArrivare: "Bahía Magdalena si raggiunge solo in auto. Da La Paz sono circa tre ore verso nord-ovest sulla Federale 1 fino a Ciudad Constitución, poi la deviazione verso Puerto San Carlos o, più a nord, verso Puerto Adolfo López Mateos. Da Loreto si attraversa la Sierra de la Giganta in circa tre ore. I bus Águila arrivano a Ciudad Constitución ma non ai villaggi; gli aeroporti più vicini sono La Paz (LAP) e Loreto (LTO), dove conviene noleggiare l'auto.",
    periodoMigliore: 'l\'inverno, nella stagione delle balene grigie: verificare le date con le cooperative.',
    costi: "Budget giornaliero a persona, indicativo per il 2026: basso 75-110 € (motel nel villaggio, pesce nei ristoranti familiari, panga divisa con altri); medio 150-225 € (uscite in laguna la mattina, auto a noleggio con assicurazione); alto da 350 € (campo tendato sulle isole a pacchetto, barca privata). Voci singole: panga per le balene circa 1.500-2.000 MXN all'ora per l'intera barca, fino a 6-8 persone; alloggi semplici 700-1.500 MXN a notte. Nei villaggi le carte funzionano poco: servono contanti in pesos.",
    erroriDaEvitare: [
      'Arrivare senza contanti',
      'Pianificare le uscite nel pomeriggio, quando il vento alza la laguna',
      'Guidare la sera sulla strada del ritorno',
    ],
    luoghi: [
      {
        nome: "Balene grigie a Puerto Adolfo López Mateos",
        testo: "Nel tratto nord della baia, vicino alla bocca che la apre sul Pacifico, le madri di balena grigia passano l'inverno con i piccoli appena nati. Le pangas delle cooperative arrivano in poco tempo nella zona delle balene, che spesso si avvicinano da sole alla barca, a volte fino a lasciarsi toccare.",
        come: "Panga con le cooperative del molo, con guida a bordo; si paga a barca e si può dividere con altri viaggiatori.",
        quando: "Stagione ufficiale dal 1° gennaio al 30 aprile; il periodo migliore è da metà febbraio a fine marzo. Meglio la mattina, con la laguna piatta.",
        tempo: "1,5-3 ore in barca",
        costo: "Circa 1.500-2.000 MXN all'ora per l'intera barca, fino a 6-8 persone, circa 75-100 € (2026)",
        lat: 25.19278,
        lng: -112.11056,
        consiglio: "Il contatto lo decidono le balene: in barca si sta seduti, senza sporgersi né inseguirle.",
      },
      {
        nome: "Balene grigie da Puerto San Carlos",
        testo: "Dal paese nel centro della baia partono uscite più lunghe, che toccano le zone delle balene, le mangrovie e le isole barriera. È l'alternativa a López Mateos quando lì le barche sono al completo o il vento chiude la bocca.",
        come: "Panga con gli operatori del porto; gli orari si concordano la sera prima.",
        quando: "Da gennaio ad aprile, partenza la mattina.",
        tempo: "Mezza giornata",
        costo: "Un'offerta del 2025 dava circa 8.000 MXN per una barca fino a 8 persone per circa sei ore, circa 400 €",
        lat: 24.78958,
        lng: -112.10768,
      },
      {
        nome: "Il villaggio di López Mateos",
        testo: "Un paese di pescatori costruito intorno al molo, con case basse, pangas tirate in secco e qualche comedor. Tra fine gennaio e inizio febbraio vi si tiene il festival della balena grigia, con musica e cibo.",
        come: "In auto; il molo delle cooperative è in fondo al paese.",
        quando: "Nella stagione delle balene; fuori stagione è quasi deserto.",
        tempo: "1-2 ore",
        costo: "Gratis",
        lat: 25.19278,
        lng: -112.11056,
        consiglio: "Nel 2026 il festival si è tenuto dal 30 gennaio al 1° febbraio: le date cambiano ogni anno.",
      },
      {
        nome: "Puerto San Carlos",
        testo: "Il centro più grande della baia, con un porto commerciale, distributori, piccoli alberghi e ristoranti di pesce. È la base più comoda per chi vuole servizi e più scelta per dormire e mangiare.",
        come: "In auto, circa un'ora da Ciudad Constitución.",
        quando: "Tutto l'anno; d'inverno è più vivo.",
        tempo: "Mezza giornata",
        costo: "Gratis",
        lat: 24.78958,
        lng: -112.10768,
      },
      {
        nome: "Dune di Isla Magdalena",
        testo: "La lunga isola di sabbia che chiude la baia verso l'oceano. Si sbarca dalla panga e si attraversano le dune fino alla spiaggia del Pacifico: da una parte la laguna calma delle balene, dall'altra le onde aperte, con conchiglie e tracce di animali sulla sabbia.",
        come: "Solo in panga, spesso come sosta durante l'uscita per le balene.",
        quando: "Mattina, prima che si alzi il vento.",
        tempo: "1-2 ore",
        lat: 24.90242,
        lng: -112.22122,
        consiglio: "Scarpe chiuse leggere e acqua: sulle dune non c'è ombra.",
      },
      {
        nome: "Canali di mangrovie",
        testo: "A nord di López Mateos la laguna si stringe in canali bordati di mangrovie, dove nidificano aironi, pellicani, fregate e falchi pescatori. Le uscite in panga sono tranquille e funzionano anche fuori dalla stagione delle balene.",
        come: "In panga con le cooperative di López Mateos, anche combinata con le balene.",
        quando: "Prime ore del mattino o tardo pomeriggio, per gli uccelli.",
        tempo: "1-2 ore",
      },
      {
        nome: "Isla Santa Margarita",
        testo: "L'isola barriera più a sud, lunga e quasi disabitata, che chiude la parte meridionale della baia. Le uscite da Puerto San Carlos ne costeggiano le spiagge e le scogliere, con buone possibilità di vedere delfini e uccelli marini.",
        come: "In panga da Puerto San Carlos, con un operatore.",
        quando: "Mattina, con mare calmo.",
        tempo: "Mezza giornata",
        lat: 24.41524,
        lng: -111.78906,
      },
      {
        nome: "Ciudad Constitución",
        testo: "La città agricola della valle di Santo Domingo, capoluogo del municipio di Comondú, è il passaggio obbligato per arrivare alla baia. Non ha attrattive particolari, ma ha bancomat, supermercati, distributori e qualche hotel sulla Transpeninsular.",
        come: "Sulla Federale 1, circa due ore e mezza da La Paz.",
        quando: "Sosta all'andata, per contanti e pieno.",
        tempo: "1 ora",
        lat: 25.03222,
        lng: -111.67028,
        consiglio: "Fare il pieno e prelevare qui: nei villaggi della baia distributori e sportelli sono pochi.",
      },
    ],
    programmi: [
      {
        titolo: "1 giorno (da La Paz)",
        tappe: [
          "Partenza da La Paz all'alba, sosta a Ciudad Constitución",
          "Tarda mattina: uscita in panga per le balene da López Mateos o San Carlos",
          "Pranzo di pesce al porto e rientro a La Paz prima del buio",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: arrivo, giro del villaggio e uscita pomeridiana se la laguna è calma",
          "Giorno 2: uscita all'alba con sosta sulle dune di Isla Magdalena, pranzo e strada per Loreto o La Paz",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra, a López Mateos",
          "Giorno 3: Puerto San Carlos, mangrovie o Isla Santa Margarita in panga, poi partenza",
        ],
      },
    ],
    zone: [
      {
        nome: "Puerto Adolfo López Mateos",
        perChi: "chi vuole stare vicino alle balene",
        testo: "Pochi alloggi semplici e piccoli motel a pochi passi dal molo delle cooperative. Nella stagione delle balene si riempiono: conviene prenotare.",
        fascia: "35-75 €",
      },
      {
        nome: "Puerto San Carlos",
        perChi: "chi cerca più servizi",
        testo: "Più alberghi, ristoranti e negozi, ed è più vicino a Ciudad Constitución e alla parte sud della baia.",
        fascia: "35-75 €",
      },
      {
        nome: "Campi tendati sulle isole",
        perChi: "chi vuole dormire in laguna",
        testo: "Campi organizzati sulle isole della baia, venduti a pacchetto con pasti e uscite in barca: sono la fascia alta della zona.",
      },
    ],
      "sapori": [
        {
          "nome": "Almejas chocolatas",
          "testo": "Grandi vongole dal guscio color cioccolato, crude con lime e salsa oppure tatemadas, cotte sotto la brace. Si comprano dai pescatori o nei chioschi del porto."
        },
        {
          "nome": "Callo de hacha",
          "testo": "Il muscolo di un grande bivalve delle lagune, tagliato a fette sottili e servito crudo con lime, cetriolo e peperoncino, o in aguachile."
        },
        {
          "nome": "Tacos di pesce e gamberi",
          "testo": "In pastella, con cavolo, crema e salse, nei chioschi di Puerto San Carlos e López Mateos. Sono il pranzo veloce dopo l'uscita in barca."
        },
        {
          "nome": "Ceviche",
          "testo": "Pesce o gamberi marinati nel lime con pomodoro, cipolla e coriandolo, su tostadas croccanti."
        }
      ],
      "attenzioni": [
        "Le balene grigie ci sono solo d'inverno: verificare la stagione prima di partire.",
        "Il vento del pomeriggio rende il mare mosso: prenotare il mattino.",
        "Pochi servizi: portare contanti.",
        "Le uscite con le balene sono regolate: solo con pangas autorizzate, con tempi e distanze limitati.",
        "Distanze lunghe e pochi distributori: fare il pieno a Ciudad Constitución.",
        "Le mattine d'inverno in barca sono fresche e umide: giacca a vento e strati."
      ],
    gite: [
      {
        nome: "Loreto",
        distanza: "circa 3 ore a nord-est",
        come: "In auto via Ciudad Constitución e la Sierra de la Giganta, solo con la luce.",
        testo: "Il Pueblo Mágico sul Mar di Cortez è la tappa naturale dopo la baia, con la missione del 1697 e, da metà gennaio a fine marzo, la balenottera azzurra nel parco marino.",
      },
      {
        nome: "La Paz",
        distanza: "circa 3 ore a sud-est",
        come: "In auto sulla Federale 1.",
        testo: "La capitale della Baja California Sur, con il Malecón, Playa Balandra, Espíritu Santo e lo squalo balena in stagione. Molti la usano come base e vengono alla baia in giornata.",
      },
    ],
    faq: [
      {
        domanda: "Quando si vedono le balene grigie a Bahía Magdalena?",
        risposta: "La stagione ufficiale va dal 1° gennaio al 30 aprile. Il periodo con più madri e piccoli in laguna è da metà febbraio a fine marzo.",
      },
      {
        domanda: "Si può fare in giornata da La Paz?",
        risposta: "Sì, partendo all'alba: sono circa tre ore di strada per andata. Con una notte in un villaggio si fanno due uscite e si guida meno stanchi.",
      },
      {
        domanda: "Meglio López Mateos o Puerto San Carlos?",
        risposta: "López Mateos è più vicino alla zona delle balene e le uscite sono brevi; San Carlos ha più alberghi e servizi e uscite più lunghe che toccano anche le isole.",
      },
      {
        domanda: "Quanto costa l'uscita in barca?",
        risposta: "Si paga a barca, non a persona: circa 1.500-2.000 MXN all'ora per una panga fino a 6-8 persone. Al molo ci si può unire ad altri viaggiatori per dividere la spesa.",
      },
      {
        domanda: "Si possono toccare le balene?",
        risposta: "Capita che le madri si avvicinino con i piccoli e si lascino toccare, ma è una scelta loro. Le barche autorizzate seguono regole su tempi e distanze e non inseguono gli animali.",
      },
      {
        domanda: "Servono contanti?",
        risposta: "Sì: nei villaggi le carte funzionano poco e le cooperative chiedono pesos in contanti. Conviene prelevare a Ciudad Constitución.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-cdmx-baja-california'],
    imageAlt: 'Una balena grigia che emerge in verticale dall\'acqua al largo della Baja California Sur',
    immagine: '/images/viaggi/messico-cdmx-baja-california/giorno-09-bahia-magdalena.jpg',
  },
  {
    slug: 'loreto',
    paeseSlug: 'messico',
    ordine: 18,
    nome: 'Loreto',
    tipologia: ['Pueblo Mágico', 'balene', 'parco marino'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Un Pueblo Mágico sul Mar di Cortez fondato nel 1697 dai gesuiti, con la storica missione gesuita e un parco nazionale marino dove in stagione si avvistano le balene.',
    percheAndarci: 'Per le balene in stagione, per le isole del parco e per la tranquillità del paese.',
    cosaVedere: [
      'La Misión de Nuestra Señora de Loreto',
      'Il Parque Nacional Bahía de Loreto e Isla Coronado',
      'La Misión de San Javier nella Sierra de la Giganta',
    ],
    cosaFare: [
      'Un\'uscita in barca per le balene, in stagione, con lancheros autorizzati',
      'Snorkeling e spiaggia a Isla Coronado',
    ],
    doveDormire: 'Il centro storico vicino alla missione; resort a Nopoló per la fascia alta.',
    doveMangiare: 'Pesce del giorno e almejas sul malecón.',
    comeArrivare: "Il piccolo aeroporto di Loreto (LTO) ha voli soprattutto dagli Stati Uniti e da Tijuana. Chi fa il roadtrip arriva in auto: da La Paz sono circa 4 ore e mezza-5 sulla Federale 1 via Ciudad Constitución, da Bahía Magdalena circa 3 ore attraverso la Sierra de la Giganta. I bus Águila fermano in città lungo la Transpeninsular. Fra Ciudad Constitución e Loreto i distributori sono pochi: si fa il pieno prima.",
    periodoMigliore: 'l\'inverno per le balene: verificare la stagione con gli operatori.',
    costi: "Budget giornaliero a persona, indicativo per il 2026: basso 75-110 € (piccolo hotel del centro, tacos di pesce, auto divisa); medio 150-225 € (hotel vicino al malecón, un'uscita in barca al giorno); alto da 350 € (resort a Nopoló, uscite private). Voci singole: balenottera azzurra da circa 3.000 MXN a persona; Isla Coronado circa 70 dollari a persona (circa 1.250 MXN); Museo de las Misiones 145 MXN per gli stranieri; braccialetto del parco marino a parte, se non incluso; alloggio di fascia media 1.200-2.500 MXN a notte.",
    erroriDaEvitare: [
      'Arrivare a Loreto senza aver fatto benzina nel tratto da Ciudad Constitución',
      'Prenotare con operatori senza permesso del parco',
    ],
    luoghi: [
      {
        nome: "Misión de Nuestra Señora de Loreto",
        testo: "La prima missione delle Californie, fondata nel 1697 dal gesuita Juan María de Salvatierra: da qui partì l'espansione che arrivò fino a San Francisco. La chiesa in pietra, costruita fra il 1740 e il 1744, è ancora il centro della vita del paese, con la statua della Virgen de Loreto sull'altare.",
        come: "A piedi dal centro, sulla calle Salvatierra.",
        quando: "Mattina, insieme al museo accanto.",
        tempo: "30 minuti",
        costo: "Ingresso libero",
        lat: 26.01043,
        lng: -111.34336,
      },
      {
        nome: "Museo de las Misiones",
        testo: "Il museo dell'INAH accanto alla missione racconta i gesuiti in Baja California: mappe, armi, utensili delle missioni, arte sacra e la vita dei popoli della penisola prima dell'arrivo degli europei. Dà senso alle missioni sparse nella sierra.",
        come: "A piedi, a fianco della chiesa.",
        quando: "Mattina: chiude presto il pomeriggio.",
        tempo: "45 minuti-1 ora",
        costo: "145 MXN per gli stranieri, circa 7 €; 80 MXN per i messicani, gratis la domenica per i messicani (2026)",
        orari: "Da martedì a sabato 9-15, chiuso domenica e lunedì",
        lat: 26.01028,
        lng: -111.34366,
        url: "https://lugares.inah.gob.mx/en/node/5176",
      },
      {
        nome: "Malecón di Loreto",
        testo: "Il lungomare del paese, tranquillo e ordinato, con panchine, palme e il molo da cui partono i lancheros. Il Mar di Cortez qui guarda a est, e l'ora migliore è l'alba, quando il sole sorge dietro Isla del Carmen.",
        come: "A piedi dal centro.",
        quando: "Alba o sera.",
        tempo: "1 ora",
        costo: "Gratis",
        lat: 26.01059,
        lng: -111.33909,
      },
      {
        nome: "Balenottera azzurra nel Parque Nacional Bahía de Loreto",
        testo: "D'inverno nelle acque del parco si nutre la balenottera azzurra, l'animale più grande mai esistito, insieme a balenottere comuni e branchi di delfini. Il parco marino fa parte del sito UNESCO delle isole e aree protette del Golfo di California.",
        come: "Uscita in barca dal malecón con lancheros autorizzati; le barche restano a distanza secondo le regole del parco.",
        quando: "Da metà gennaio a fine marzo, partenza la mattina presto con mare calmo.",
        tempo: "Circa 5 ore",
        costo: "Da circa 3.000 MXN a persona, circa 150 €, più il braccialetto del parco se non incluso (2026)",
        lat: 25.86417,
        lng: -111.12167,
        consiglio: "L'avvistamento non è garantito: tenere un secondo giorno libero per riprovare.",
      },
      {
        nome: "Isla Coronado",
        testo: "L'isola più vicina al paese, un vecchio vulcano con una spiaggia bianca e acqua trasparente sul lato riparato. Sugli scogli vive una colonia di leoni marini, e durante la traversata capita di incrociare delfini.",
        come: "In barca dal malecón con un operatore autorizzato.",
        quando: "Mattina, con mare calmo.",
        tempo: "Mezza giornata",
        costo: "Circa 70 dollari a persona, circa 1.250 MXN o 60 €, braccialetto del parco escluso (2026)",
        lat: 26.11792,
        lng: -111.27352,
      },
      {
        nome: "Isla del Carmen",
        testo: "L'isola più grande del parco, disabitata, con le vecchie saline che hanno lavorato fino al secolo scorso, baie di sabbia e scogliere rosse. Le uscite in barca ne esplorano la costa con soste per lo snorkeling.",
        come: "In barca da Loreto con un operatore autorizzato.",
        quando: "Mattina; con vento da nord le uscite saltano.",
        tempo: "Giornata intera",
        lat: 25.93961,
        lng: -111.17611,
      },
      {
        nome: "Isla Danzante",
        testo: "Una piccola isola stretta e montuosa davanti a Puerto Escondido, con calette per il kayak e fondali per lo snorkeling. È la meta più semplice per chi vuole pagaiare nel parco.",
        come: "In kayak o in barca da Puerto Escondido, circa 25 km a sud di Loreto.",
        quando: "Mattina, prima del vento.",
        tempo: "Mezza giornata",
        lat: 25.7884,
        lng: -111.25067,
      },
      {
        nome: "Nopoló",
        testo: "La zona turistica pianificata a sud del paese, con resort, campo da golf e una lunga spiaggia sulla baia. È più tranquilla del centro e ha i servizi dei grandi alberghi.",
        come: "In auto, circa 10 minuti a sud di Loreto.",
        quando: "Pomeriggio in spiaggia.",
        tempo: "2-3 ore",
        lat: 25.93094,
        lng: -111.35963,
      },
      {
        nome: "Puerto Escondido",
        testo: "Un porto naturale quasi chiuso, ai piedi della Sierra de la Giganta, con una marina dove si fermano le barche a vela del Mar di Cortez. Da qui partono le uscite verso Isla Danzante e la costa sud del parco.",
        come: "In auto, circa mezz'ora a sud di Loreto sulla Federale 1.",
        quando: "Mattina.",
        tempo: "1-2 ore",
        lat: 25.81433,
        lng: -111.31209,
      },
      {
        nome: "Playa Juncalito",
        testo: "Una spiaggia tranquilla a sud di Loreto, con le pangas dei pescatori sulla sabbia e la sierra alle spalle. Si fa il bagno in acqua calma e si guardano le isole del parco dalla riva.",
        come: "In auto, circa 20 minuti a sud di Loreto.",
        quando: "Pomeriggio.",
        tempo: "2 ore",
        costo: "Gratis",
        lat: 25.83308,
        lng: -111.33107,
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: missione, Museo de las Misiones e malecón",
          "Pranzo di pesce in centro",
          "Pomeriggio: Isla Coronado in barca, se il mare è calmo",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: uscita per la balenottera azzurra (in stagione), poi missione e malecón",
          "Giorno 2: Isla Coronado la mattina, nel pomeriggio Misión San Javier in auto",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: margine per riprovare con le balene, oppure Puerto Escondido, kayak a Isla Danzante e Playa Juncalito",
        ],
      },
    ],
    zone: [
      {
        nome: "Centro storico e malecón",
        perChi: "a piedi da tutto",
        testo: "Piccoli hotel e posadas vicino alla missione e al lungomare, con ristoranti e banchi dei lancheros a pochi passi.",
        fascia: "60-125 €",
      },
      {
        nome: "Nopoló",
        perChi: "resort e calma",
        testo: "Resort e case vacanza sulla spiaggia, con campo da golf: serve l'auto per andare in paese.",
      },
      {
        nome: "Verso Puerto Escondido e Juncalito",
        perChi: "kayak e mare",
        testo: "Case vacanza e campeggi lungo la costa sud, comodi per le uscite verso Isla Danzante.",
      },
    ],
      "sapori": [
        {
          "nome": "Almejas tatemadas",
          "testo": "Le vongole chocolatas cotte sotto un fuoco di erbe secche, direttamente sulla sabbia: un piatto tipico di Loreto. Si mangiano con lime e salsa."
        },
        {
          "nome": "Tacos di pesce",
          "testo": "In pastella, con cavolo, crema e salse, nei chioschi del centro fin dalla mattina."
        },
        {
          "nome": "Machaca",
          "testo": "Carne di manzo essiccata e sfilacciata, cotta con uova, cipolla e peperoncino: la colazione dei ranch della sierra, con tortillas di farina."
        },
        {
          "nome": "Dolci di datteri",
          "testo": "Nelle oasi intorno a Loreto e a San Javier crescono le palme da dattero portate dai missionari: datteri e dolci si trovano nei negozi del paese."
        }
      ],
      "attenzioni": [
        "La strada per San Javier sale in montagna con curve strette: guidare di giorno e con calma.",
        "Sole forte e caldo estivo: andare presto.",
        "Operatori autorizzati nel parco nazionale.",
        "Il parco marino ha una tassa d'ingresso dell'area protetta: chiedere se è compresa nel prezzo del tour."
      ],
    gite: [
      {
        nome: "Misión San Javier",
        distanza: "circa 1 ora e mezza di auto",
        come: "In auto o con un tour, sulla strada di montagna della Sierra de la Giganta.",
        testo: "La missione fondata nel 1699 e costruita in pietra fra il 1744 e il 1758 è una delle meglio conservate della penisola, in un villaggio di ranch tra canyon e palme. La strada è stretta e con curve: si guida di giorno.",
      },
      {
        nome: "Bahía Magdalena",
        distanza: "circa 3 ore a sud-ovest",
        come: "In auto via Ciudad Constitución, partendo all'alba.",
        testo: "Le lagune del Pacifico dove partoriscono le balene grigie, dal 1° gennaio al 30 aprile. Meglio con una notte a López Mateos o San Carlos.",
      },
      {
        nome: "Laguna San Ignacio",
        distanza: "circa 4 ore a nord",
        come: "In auto sulla Transpeninsular, come estensione di 2-3 giorni.",
        testo: "La laguna dove gli incontri ravvicinati con le balene grigie sono più frequenti, dentro la Riserva della Biosfera di El Vizcaíno, con campi tendati sulla riva.",
      },
    ],
    faq: [
      {
        domanda: "Quando si vede la balenottera azzurra a Loreto?",
        risposta: "Da metà gennaio a fine marzo. Le uscite durano circa cinque ore e costano da circa 3.000 MXN a persona; l'avvistamento non è garantito.",
      },
      {
        domanda: "Quanti giorni servono a Loreto?",
        risposta: "Due giorni per la balenottera, la missione e Isla Coronado; tre se si vuole un giorno di margine per il mare o San Javier con calma.",
      },
      {
        domanda: "Come si va a Isla Coronado?",
        risposta: "In barca dal malecón con un operatore autorizzato, circa mezza giornata e circa 70 dollari a persona. Il braccialetto del parco marino spesso è a parte.",
      },
      {
        domanda: "Serve l'auto a Loreto?",
        risposta: "Per il paese no, ma per San Javier, Puerto Escondido e le spiagge a sud sì. Al noleggio va controllata l'assicurazione di responsabilità civile, obbligatoria e spesso esclusa dai prezzi online.",
      },
      {
        domanda: "Il museo e la missione sono aperti tutti i giorni?",
        risposta: "La chiesa sì, con ingresso libero. Il Museo de las Misiones apre da martedì a sabato dalle 9 alle 15 e costa 145 MXN per gli stranieri.",
      },
      {
        domanda: "Si arriva a Loreto in aereo?",
        risposta: "Sì, l'aeroporto di Loreto ha voli soprattutto dagli Stati Uniti e da Tijuana. Dall'Europa conviene volare a La Paz o San José del Cabo e salire in auto.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-cdmx-baja-california'],
    imageAlt: 'La Misión de Nuestra Señora de Loreto in pietra tra le palme, nel centro del paese',
    immagine: '/images/messico/loreto-mision-stock.jpg',
  },
  {
    slug: 'todos-santos',
    paeseSlug: 'messico',
    ordine: 19,
    nome: 'Todos Santos',
    tipologia: ['Pueblo Mágico', 'surf', 'arte'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Un Pueblo Mágico sul Pacifico proprio sul Tropico del Cancro, con case coloniali, gallerie e caffè, e spiagge di surf come Playa Cerritos. Più tranquillo e meno caro di Los Cabos.',
    percheAndarci: 'Per una sosta lenta tra La Paz e Cabo, surf a Cerritos e le liberazioni di tartarughe in stagione.',
    cosaVedere: ['Il centro storico e le gallerie', 'Playa Cerritos', 'Le spiagge del Pacifico al tramonto'],
    cosaFare: ['Lezione di surf a Cerritos', 'Liberazione delle tartarughe con i progetti locali, nelle stagioni di schiusa'],
    doveDormire: 'Centro storico, con piccoli hotel di charme e qualche guesthouse economica.',
    comeArrivare: "Todos Santos è sulla Federale 19, a circa un'ora di auto sia da La Paz (80 km) sia da Cabo San Lucas. Gli aeroporti più vicini sono La Paz (LAP) e San José del Cabo (SJD), con più voli internazionali: in entrambi conviene ritirare subito l'auto a noleggio. I bus che collegano La Paz e Cabo San Lucas lungo il Pacifico fermano in paese, ma per Cerritos e le spiagge serve l'auto.",
    periodoMigliore: 'da novembre ad aprile.',
    costi: "Budget giornaliero a persona, indicativo per il 2026: basso 75-110 € (guesthouse, tacos di pesce, auto divisa); medio 150-225 € (hotel di charme del centro, lezione di surf, cene al ristorante); alto da 350 € (boutique hotel e cucina d'autore). Voci singole: hotel del centro 2.000-5.000 MXN a notte, circa 100-250 €; liberazione delle tartarughe con una piccola donazione in contanti. Dormire qui costa meno che a Los Cabos.",
    erroriDaEvitare: ['Nuotare sulle spiagge aperte del Pacifico fuori da Cerritos: correnti forti'],
    luoghi: [
      {
        nome: "Centro storico e gallerie",
        testo: "Il paese vecchio della canna da zucchero, oggi Pueblo Mágico, con case coloniali basse, gallerie d'arte, boutique e caffè lungo le calles Juárez, Centenario e Topete. Si gira a piedi in un'ora, ma conviene restare fino a sera, quando le gallerie aprono e le strade si animano.",
        come: "A piedi.",
        quando: "Tardo pomeriggio e sera.",
        tempo: "Mezza giornata",
        costo: "Gratis",
        consiglio: "Le gallerie hanno orari variabili e alcune chiudono d'estate.",
      },
      {
        nome: "Misión de Nuestra Señora del Pilar",
        testo: "La chiesa della missione, fondata dai gesuiti nel Settecento e ricostruita più volte, si affaccia sulla piazza del paese. All'interno c'è l'immagine della Virgen del Pilar, festeggiata il 12 ottobre con la festa patronale.",
        come: "A piedi, sulla piazza.",
        quando: "Mattina o sera.",
        tempo: "20 minuti",
        costo: "Ingresso libero",
        lat: 23.44978,
        lng: -110.22557,
      },
      {
        nome: "Teatro Cine General Manuel Márquez de León",
        testo: "Il vecchio teatro-cinema del paese, accanto alla piazza, con la facciata d'epoca restaurata. Ospita spettacoli, concerti ed eventi dei festival culturali.",
        come: "A piedi, accanto alla missione.",
        quando: "Sera, se c'è uno spettacolo.",
        tempo: "20 minuti dall'esterno",
        lat: 23.45043,
        lng: -110.22556,
      },
      {
        nome: "Hotel California",
        testo: "Il più famoso edificio del paese, un hotel con la facciata blu e il bar sotto i portici. Il legame con la canzone degli Eagles esiste solo nella leggenda, ma ne ha fatto una tappa per molti visitatori.",
        come: "A piedi, sulla calle Juárez.",
        quando: "Sera, per un drink.",
        tempo: "30 minuti",
        lat: 23.44892,
        lng: -110.22568,
      },
      {
        nome: "Centro Cultural Profesor Néstor Agúndez",
        testo: "Il centro culturale occupa una vecchia scuola con murales sulla facciata e ospita il museo di storia regionale, la ricostruzione di una casa di ranch sudcaliforniana, una fototeca e una pinacoteca. Racconta il paese prima di surfisti e gallerie.",
        come: "A piedi, a pochi isolati dalla piazza.",
        quando: "Mattina.",
        tempo: "45 minuti",
        lat: 23.45089,
        lng: -110.22356,
      },
      {
        nome: "Playa Cerritos",
        testo: "Una baia sul Pacifico protetta da una punta rocciosa, l'unica della zona dove si nuota con una certa sicurezza. Le onde sono adatte ai principianti e sulla spiaggia ci sono scuole di surf, noleggio tavole e ristoranti.",
        come: "In auto o taxi, circa 15 minuti a sud di Todos Santos; parcheggio sulla spiaggia.",
        quando: "Mattina presto per le lezioni, quando le onde sono più gentili.",
        tempo: "Mezza giornata",
        lat: 23.32964,
        lng: -110.17617,
        consiglio: "Anche qui si nuota vicino ai bagnini e lontano dalle rocce, dove le correnti sono più forti.",
      },
      {
        nome: "Playa Punta Lobos",
        testo: "La spiaggia dei pescatori, poco a sud del paese, dove a metà giornata le pangas rientrano sfruttando le onde e scaricano il pescato. Da una punta rocciosa si vede tutta la costa; il bagno è pericoloso.",
        come: "In auto su una pista sterrata, circa 10 minuti dal centro.",
        quando: "Tarda mattina, per il rientro delle barche.",
        tempo: "1 ora",
        costo: "Gratis",
        lat: 23.41474,
        lng: -110.23049,
      },
      {
        nome: "Playa Las Palmas",
        testo: "Una spiaggia appartata con un palmeto alle spalle, fra due punte rocciose, raggiungibile con una breve camminata. È tra le più belle della zona per il tramonto, ma il mare ha correnti forti.",
        come: "In auto verso sud, poi a piedi per l'ultimo tratto.",
        quando: "Tardo pomeriggio.",
        tempo: "2 ore",
        costo: "Gratis",
        lat: 23.38987,
        lng: -110.21273,
      },
      {
        nome: "Playa La Pastora",
        testo: "La spiaggia a nord del paese, lunga e aperta, frequentata da surfisti esperti e da chi va a vedere il tramonto sul Pacifico. D'inverno capita di vedere al largo il soffio delle megattere.",
        come: "In auto verso nord su strada sterrata, 10-15 minuti.",
        quando: "Tramonto.",
        tempo: "1-2 ore",
        costo: "Gratis",
        consiglio: "Solo per guardare: correnti e frangenti rendono il bagno pericoloso.",
      },
      {
        nome: "Liberazione delle tartarughe",
        testo: "Nelle stagioni di schiusa i progetti di conservazione del paese liberano in mare, al tramonto, le tartarughe nate nei loro vivai, d'inverno soprattutto liuto e olivacee. I piccoli si posano sulla sabbia e raggiungono l'acqua da soli.",
        come: "Con i progetti locali, come Tortugueros Las Playitas, a nord del paese; le date dipendono dalle schiuse e si annunciano poche ore prima.",
        quando: "Al tramonto, nei mesi di schiusa.",
        tempo: "1 ora",
        costo: "Piccola donazione in contanti",
        consiglio: "Le tartarughine non si toccano e non si usano flash né torce.",
      },
      {
        nome: "El Pescadero",
        testo: "Il paese agricolo a sud di Todos Santos, fra orti biologici, banchi di frutta e piccoli ristoranti. È la base per Cerritos e per i sentieri della Sierra de la Laguna.",
        come: "In auto, circa 15 minuti a sud sulla Federale 19.",
        quando: "Mattina, per i banchi degli orti.",
        tempo: "1-2 ore",
        lat: 23.36417,
        lng: -110.16833,
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Playa Cerritos e lezione di surf",
          "Pomeriggio: missione, Centro Cultural e gallerie del centro",
          "Tramonto a La Pastora, cena in paese",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: centro storico, Punta Lobos per il rientro delle pangas, tramonto a Las Palmas",
          "Giorno 2: Cerritos e El Pescadero, tartarughe al tramonto in stagione",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: escursione nella Sierra de la Laguna, oppure una giornata a La Paz o Cabo San Lucas",
        ],
      },
    ],
    zone: [
      {
        nome: "Centro storico",
        perChi: "charme e ristoranti a piedi",
        testo: "Piccoli hotel di charme di fascia media e alta e qualche guesthouse economica, a pochi passi da gallerie e ristoranti.",
        fascia: "100-250 €",
      },
      {
        nome: "El Pescadero e Cerritos",
        perChi: "surf",
        testo: "Case vacanza, piccoli hotel e campeggi vicino alle onde di Cerritos: si sta in costume tutto il giorno, ma per cena serve l'auto.",
      },
      {
        nome: "La Pastora e Las Playitas",
        perChi: "chi vuole silenzio",
        testo: "Case e ville sparse a nord del paese, fra palmeti e spiagge vuote, raggiungibili su strade sterrate.",
      },
    ],
      "sapori": [
        {
          "nome": "Tacos di pesce e gamberi",
          "testo": "Alla maniera di Baja, in pastella, con cavolo, crema e salse, nei chioschi del paese e verso Cerritos."
        },
        {
          "nome": "Pesce del giorno alla griglia",
          "testo": "Il pescato del Pacifico, spesso dorado o huachinango, alla brace con burro all'aglio o salsa, nei ristoranti del centro."
        },
        {
          "nome": "Cucina degli orti",
          "testo": "Intorno a Todos Santos ci sono orti e fattorie biologiche: erbe, verdure e mango finiscono nei menu dei ristoranti e nei negozi del paese."
        },
        {
          "nome": "Caffè e dolci",
          "testo": "Panetterie e caffè del centro, con pane dolce e dolci di guayaba o mango, per una pausa fra una galleria e l'altra."
        }
      ],
      "attenzioni": [
        "Nuotare sulle spiagge aperte del Pacifico fuori da Cerritos: correnti forti.",
        "Le gallerie chiudono a ore variabili: controllare.",
        "Da metà maggio a novembre è la stagione degli uragani del Pacifico: controllare i bollettini prima di partire."
      ],
    gite: [
      {
        nome: "La Paz",
        distanza: "circa 80 km, 1 ora",
        come: "In auto sulla Federale 19.",
        testo: "Il Malecón, Playa Balandra e, in stagione, lo squalo balena; con un giorno in più, Espíritu Santo e i leoni marini di Los Islotes.",
      },
      {
        nome: "Cabo San Lucas",
        distanza: "circa 1 ora a sud",
        come: "In auto sulla Federale 19.",
        testo: "La barca fino a El Arco e, da dicembre ad aprile, le uscite per le megattere. È la parte più turistica e cara della penisola.",
      },
      {
        nome: "Sierra de la Laguna",
        distanza: "pochi chilometri all'interno",
        come: "In auto fino all'inizio dei sentieri sul versante di El Pescadero, meglio con una guida.",
        testo: "La riserva della biosfera alle spalle della costa, con boschi di querce e pini sopra il deserto. Le passeggiate brevi si fanno in giornata; il trekking fino alla laguna in cima richiede due giorni.",
      },
    ],
    faq: [
      {
        domanda: "Si può fare il bagno a Todos Santos?",
        risposta: "Sulle spiagge davanti al paese no: correnti e frangenti sono forti. Si nuota a Playa Cerritos, 15 minuti a sud, vicino ai bagnini.",
      },
      {
        domanda: "Quando si liberano le tartarughe?",
        risposta: "Nelle stagioni di schiusa, al tramonto, con i progetti di conservazione del paese. Le date dipendono dalle uova e vengono annunciate poche ore prima: conviene chiedere appena si arriva.",
      },
      {
        domanda: "Todos Santos o Los Cabos come base?",
        risposta: "Todos Santos è più tranquillo e costa meno, con gallerie, surf e spiagge vuote; Los Cabos ha resort, vita notturna e le uscite per le megattere. Sono a un'ora l'uno dall'altro.",
      },
      {
        domanda: "Quanti giorni servono?",
        risposta: "Un giorno basta per il centro e Cerritos; due permettono tramonti, tartarughe in stagione e un ritmo più lento.",
      },
      {
        domanda: "L'Hotel California è quello della canzone?",
        risposta: "No, il legame con il brano degli Eagles esiste solo nella leggenda. L'hotel resta comunque uno degli edifici più fotografati del paese.",
      },
      {
        domanda: "Quando andare a Todos Santos?",
        risposta: "Da novembre ad aprile, con giornate secche e megattere al largo. Da metà maggio a novembre è la stagione degli uragani del Pacifico.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-cdmx-baja-california'],
    imageAlt: 'La lunga spiaggia oceanica di Todos Santos vista dall\'alto',
    immagine: '/images/viaggi/messico-cdmx-baja-california/giorno-13-todos-santos.jpg',
  },
  {
    slug: 'los-cabos',
    paeseSlug: 'messico',
    ordine: 20,
    nome: 'Los Cabos',
    tipologia: ['mare', 'balene', 'resort'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La punta della penisola, con due città molto diverse: Cabo San Lucas, turistica e notturna, con El Arco dove il Mar di Cortez incontra il Pacifico, e San José del Cabo, coloniale e tranquilla. A nord-est, Cabo Pulmo ha una delle rare barriere coralline della costa occidentale del Nord America.',
    percheAndarci: 'Per le megattere d\'inverno, El Arco e Cabo Pulmo, e per l\'aeroporto di rientro.',
    cosaVedere: ['El Arco e Playa del Amor', 'Il centro e il quartiere delle gallerie di San José del Cabo', 'Il parco nazionale di Cabo Pulmo'],
    cosaFare: [
      'Whale watching per le megattere',
      'L\'Art Walk del giovedì sera a San José del Cabo (novembre-giugno)',
      'Snorkeling a Cabo Pulmo con operatori del paese',
    ],
    doveDormire: 'San José del Cabo per la fascia media; il Corridor per i resort di fascia alta; Cabo San Lucas per la vita notturna.',
    comeArrivare: "L'aeroporto internazionale di San José del Cabo (SJD) ha voli per Città del Messico, con coincidenze per l'Europa, e molti diretti per gli Stati Uniti. Dall'aeroporto al centro di San José ci vogliono circa 20 minuti, a Cabo San Lucas circa 45 lungo il Corridor; si va in auto a noleggio, navetta prenotata o taxi autorizzato del terminal. Da Todos Santos sono circa un'ora di strada, da La Paz 2,5-3 ore. Nella zona arrivi i venditori di multiproprietà offrono «trasporti» e regali: si tira dritto.",
    periodoMigliore: 'l\'inverno per le megattere.',
    costi: "È la parte più cara della Baja, con molti prezzi in dollari (conviene pagare in pesos). Budget giornaliero a persona, indicativo per il 2026: basso 90-130 € (hotel semplice a San José, tacos di strada, bus); medio 180-260 € (hotel di fascia media, auto, un'uscita in barca); alto da 400 € (resort nel Corridor, barche private). Whale watching sulle barche condivise 80-130 dollari a persona, circa 70-110 €; giro a El Arco in barca-taxi a prezzo da concordare.",
    erroriDaEvitare: [
      'Fermarsi con i venditori di multiproprietà in aeroporto e nella Marina',
      'Sottovalutare i prezzi, molto alti',
    ],
    luoghi: [
      {
        nome: "El Arco",
        testo: "La formazione rocciosa all'estremità della penisola, dove il Mar di Cortez incontra il Pacifico, con una colonia di leoni marini sugli scogli vicini. Si vede solo dal mare, con un giro in barca di meno di un'ora.",
        come: "Barca-taxi dalla Marina o dalla spiaggia di Médano; il prezzo si concorda prima.",
        quando: "Mattina, con il mare più calmo.",
        tempo: "1 ora",
        lat: 22.87602,
        lng: -109.89456,
      },
      {
        nome: "Playa del Amor",
        testo: "La spiaggia stretta fra due mari nascosta dietro El Arco. Il lato sul Mar di Cortez è riparato; quello sul Pacifico, Playa del Divorcio, ha onde e correnti fortissime e non è balneabile.",
        come: "Con la barca-taxi, chiedendo al barcaiolo di tornare a prenderci a un'ora fissata.",
        quando: "Mattina; con mare mosso non sempre si sbarca.",
        tempo: "1-2 ore",
        consiglio: "Il bagno si fa solo dal lato del Mar di Cortez.",
      },
      {
        nome: "Marina di Cabo San Lucas",
        testo: "Il porto turistico intorno a cui gira Cabo San Lucas, con yacht, barche da pesca sportiva, ristoranti e bar sul lungomare. Da qui partono le barche per El Arco e il whale watching; la sera è il centro della vita notturna.",
        come: "A piedi dal centro di Cabo San Lucas.",
        quando: "Mattina per le barche, sera per i locali.",
        tempo: "1-2 ore",
        costo: "Gratis",
        lat: 22.88251,
        lng: -109.9105,
        consiglio: "Venditori di multiproprietà offrono gite «gratis» in cambio di una presentazione di mezza giornata: si passa oltre.",
      },
      {
        nome: "Playa El Médano",
        testo: "La spiaggia lunga della baia di Cabo San Lucas, con acqua calma, beach club, sport acquatici e la vista su El Arco. È la più animata e una delle poche della zona dove il bagno è sicuro.",
        come: "A piedi dalla Marina, 10-15 minuti.",
        quando: "Mattina per la calma, pomeriggio per l'atmosfera.",
        tempo: "Mezza giornata",
        costo: "Gratis",
        lat: 22.89506,
        lng: -109.89362,
      },
      {
        nome: "Playa Chileno",
        testo: "Una baia lungo il Corridor fra le due città, riparata e con un piccolo reef: si fa snorkeling dalla spiaggia fra pesci tropicali. Ha accesso pubblico con parcheggio, servizi e ombra.",
        come: "In auto o bus sulla strada del Corridor, circa 20 minuti da Cabo San Lucas.",
        quando: "Mattina presto, prima che arrivino i gruppi in barca.",
        tempo: "2-3 ore",
        costo: "Gratis",
        lat: 22.94984,
        lng: -109.80708,
      },
      {
        nome: "Playa Santa María",
        testo: "Una baia a ferro di cavallo fra due promontori rocciosi, area protetta per lo snorkeling, con acqua trasparente e banchi di pesci a pochi metri dalla riva. È più piccola e tranquilla di Chileno.",
        come: "In auto sul Corridor, poco a ovest di Chileno; parcheggio pubblico in alto.",
        quando: "Mattina.",
        tempo: "2-3 ore",
        costo: "Gratis",
        lat: 22.92973,
        lng: -109.81624,
      },
      {
        nome: "Playa Palmilla",
        testo: "La spiaggia di San José del Cabo con l'acqua più calma, riparata da una punta rocciosa, con le barche dei pescatori e una parte libera per fare il bagno. Comoda per un'ultima mattina prima del volo.",
        come: "In auto o taxi, circa 10 minuti dal centro di San José.",
        quando: "Mattina.",
        tempo: "2 ore",
        costo: "Gratis",
        lat: 23.01365,
        lng: -109.71799,
      },
      {
        nome: "Centro di San José del Cabo",
        testo: "La parte coloniale e tranquilla di Los Cabos, con la Plaza Mijares, la missione fondata dai gesuiti nel 1730 e vie di case basse con ristoranti. La sera la piazza si riempie di famiglie.",
        come: "Auto o bus da Cabo San Lucas, circa 40 minuti; il centro si gira a piedi.",
        quando: "Tardo pomeriggio e sera.",
        tempo: "Mezza giornata",
        costo: "Gratis",
        lat: 23.06211,
        lng: -109.6948,
      },
      {
        nome: "Distretto delle gallerie e Art Walk",
        testo: "Le vie dietro la missione di San José, con decine di gallerie d'arte contemporanea e messicana. Il giovedì sera, da novembre a giugno, c'è l'Art Walk gratuito: gallerie aperte, musica in strada e bancarelle.",
        come: "A piedi dalla Plaza Mijares.",
        quando: "Giovedì sera, da novembre a giugno.",
        tempo: "2 ore",
        costo: "Gratis",
        lat: 23.0621,
        lng: -109.6956,
      },
      {
        nome: "Estero di San José",
        testo: "La laguna d'acqua dolce dove il fiume di San José incontra il mare, con canneti, palme e oltre duecento specie di uccelli. Un sentiero la costeggia fino alla spiaggia; in kayak si entra fra le canne.",
        come: "A piedi dal centro di San José, verso la zona degli hotel.",
        quando: "All'alba o al tramonto, per gli uccelli.",
        tempo: "1-2 ore",
        lat: 23.05216,
        lng: -109.67862,
      },
      {
        nome: "Flora Farms",
        testo: "Una fattoria biologica ai piedi della sierra sopra San José, con orti, ristorante dei prodotti della terra e negozi. È diventata un ritrovo molto curato e caro, ma il giro negli orti è piacevole.",
        come: "In auto, circa 15 minuti dal centro di San José, l'ultimo tratto su sterrato.",
        quando: "Cena, prenotando; o pomeriggio per gli orti.",
        tempo: "2 ore",
        lat: 23.07903,
        lng: -109.6776,
      },
      {
        nome: "Whale watching delle megattere",
        testo: "Avvistamento delle megattere nelle acque di Los Cabos. D'inverno arrivano qui per riprodursi e partorire: dalla barca si vedono salti, colpi di coda e, con un po' di fortuna, madri con il piccolo.",
        come: "Barca dalla Marina di Cabo San Lucas o da San José del Cabo.",
        quando: "Da dicembre ad aprile, la mattina.",
        tempo: "2-3 ore",
        costo: "80-130 dollari a persona sulle barche condivise, circa 70-110 €; barca privata per otto persone circa 700 dollari",
      },
      {
        nome: "Parco Nazionale Cabo Pulmo",
        testo: "La più antica delle sole tre barriere coralline della costa occidentale del Nord America, l'unica barriera dura del Golfo di California, protetta dal 1995 e tornata piena di pesci. Si fa snorkeling e immersioni con banchi enormi, razze e tartarughe.",
        come: "Auto da San José, circa 2 ore, ultimi chilometri su sterrato; poi barca con un operatore del paese.",
        quando: "Mattina, con il mare calmo.",
        tempo: "Giornata intera",
        lat: 23.44667,
        lng: -109.40667,
        consiglio: "Niente bancomat in paese: portare contanti, acqua e cibo.",
      },
    ],
    programmi: [
      { titolo: "1 giorno", tappe: [
        "Mattina: El Arco e Playa del Amor in barca-taxi",
        "Pomeriggio: Playa El Médano o snorkeling a Chileno",
        "Sera: centro di San José del Cabo, con l'Art Walk se è giovedì",
      ] },
      { titolo: "2 giorni", tappe: [
        "Giorno 1: El Arco, Marina, whale watching nel pomeriggio (d'inverno)",
        "Giorno 2: Santa María e Chileno la mattina, estero e San José al tramonto",
      ] },
      { titolo: "3 giorni", tappe: [
        "Giorni 1-2 come sopra",
        "Giorno 3: Cabo Pulmo per lo snorkeling, rientro per cena a Flora Farms o in centro",
      ] },
    ],
    zone: [
      {
        nome: "San José del Cabo",
        perChi: "tranquillità e aeroporto vicino",
        testo: "Centro coloniale, più calmo e meno turistico, a una ventina di minuti dall'aeroporto: la scelta più comoda per l'ultima notte.",
        fascia: "90-175 €",
      },
      {
        nome: "Il Corridor",
        perChi: "resort di fascia alta",
        testo: "I 30 km di costa fra le due città, con resort, campi da golf e le baie di Chileno e Santa María; serve l'auto.",
        fascia: "da 350 €",
      },
      {
        nome: "Cabo San Lucas",
        perChi: "vita serale e barche",
        testo: "Marina, bar e locali, molto turistico; comodo per El Arco e il whale watching a piedi.",
      },
    ],
      "sapori": [
        {
          "nome": "Tacos di pesce",
          "testo": "Alla maniera di Baja, in pastella, con cavolo, crema e salse. Nelle taquerías di San José del Cabo costano molto meno che sul porto di Cabo San Lucas."
        },
        {
          "nome": "Ceviche e aguachile",
          "testo": "Pesce o gamberi crudi nel lime, l'aguachile con peperoncino e cetriolo. Vanno bene a pranzo, con una birra fredda."
        },
        {
          "nome": "Aragosta",
          "testo": "Alla griglia o al burro, nei ristoranti sul mare. È cara: chiedere il prezzo al peso prima di ordinare."
        },
        {
          "nome": "Margarita",
          "testo": "Tequila, lime e triple sec con il sale sul bordo, nei bar di Cabo San Lucas."
        }
      ],
      "attenzioni": [
        "Cabo San Lucas è turistica e cara: confrontare i prezzi.",
        "Offerte di time share: rifiutare chi ferma per strada.",
        "Il Pacifico ha correnti forti: a Cabo San Lucas fare il bagno solo nelle spiagge riparate e segnalate, come Médano, Chileno e Santa María.",
        "A Cabo Pulmo si entra in acqua solo con gli operatori del paese: le regole del parco sono severe per proteggere la barriera.",
        "Da metà maggio a novembre è la stagione degli uragani del Pacifico: controllare i bollettini."
      ],
    gite: [
      {
        nome: "Todos Santos",
        distanza: "circa 1 ora da Cabo San Lucas",
        come: "In auto sulla Federale 19 lungo il Pacifico.",
        testo: "Pueblo mágico con il centro di gallerie e ristoranti, orti biologici e, d'inverno, rilasci di tartarughine al tramonto. Costa meno di Cabo anche per dormire.",
      },
      {
        nome: "Playa Los Cerritos",
        distanza: "circa 50 minuti da Cabo San Lucas",
        come: "In auto sulla Federale 19, poco prima di Todos Santos.",
        testo: "Una delle poche spiagge del Pacifico dove si fa il bagno, con onde buone per imparare il surf e scuole sulla sabbia.",
      },
      {
        nome: "La Paz",
        distanza: "circa 2,5-3 ore",
        come: "In auto o in autobus; meglio con almeno due notti.",
        testo: "La capitale tranquilla della Baja California Sur, base per Espíritu Santo, i leoni marini di Los Islotes, lo squalo balena e Playa Balandra.",
      },
    ],
    faq: [
      {
        domanda: "Meglio dormire a Cabo San Lucas o a San José del Cabo?",
        risposta: "San José è più tranquillo, coloniale e vicino all'aeroporto; Cabo San Lucas ha la Marina, la vita notturna e le barche per El Arco. Molti dormono a San José e vanno a Cabo in giornata.",
      },
      {
        domanda: "Dove si fa il bagno in sicurezza a Los Cabos?",
        risposta: "Nelle spiagge riparate e segnalate come El Médano, Chileno, Santa María e Palmilla. Sul Pacifico, compresa Playa del Divorcio, le correnti sono fortissime.",
      },
      {
        domanda: "Quando si vedono le megattere?",
        risposta: "Da dicembre ad aprile. Le uscite durano due-tre ore e sulle barche condivise costano indicativamente 80-130 dollari a persona.",
      },
      {
        domanda: "Quanti giorni servono a Los Cabos?",
        risposta: "Due o tre: uno per El Arco e Cabo San Lucas, uno per le baie del Corridor e San José, e un terzo per Cabo Pulmo o le balene.",
      },
      {
        domanda: "Vale la pena andare a Cabo Pulmo?",
        risposta: "Sì, per chi fa snorkeling o immersioni: è la barriera corallina più ricca del Golfo di California. Sono circa due ore di strada, e in paese non ci sono bancomat.",
      },
      {
        domanda: "Come evitare i venditori di multiproprietà?",
        risposta: "In aeroporto e nella Marina offrono trasporti, tour gratis o sconti in cambio di una presentazione di mezza giornata. Basta non fermarsi e prenotare transfer e uscite in anticipo.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-cdmx-baja-california'],
    imageAlt: 'El Arco di Cabo San Lucas con una barca davanti alle rocce',
    immagine: '/images/viaggi/messico-cdmx-baja-california/giorno-14-los-cabos.jpg',
  },
]
