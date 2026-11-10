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
    comeArrivare: 'Bus ADO da Città del Messico; da Puebla a Cholula taxi o colectivo.',
    comeSpostarsi: 'A piedi nei centri; taxi e app tra Puebla e Cholula.',
    periodoMigliore: 'da ottobre ad aprile; le mattine limpide di novembre-febbraio sono le migliori per vedere i vulcani.',
    erroriDaEvitare: [
      'Visitare Cholula solo a mezzogiorno, quando la foschia spesso nasconde il vulcano',
      'Fare Puebla in giornata da Città del Messico senza dormire almeno una notte a Cholula',
    ],
      "luoghi": [
        {
          "nome": "Centro storico di Puebla e Cattedrale",
          "testo": "Patrimonio UNESCO, con la Cattedrale, lo Zócalo e case coperte di azulejos talavera.",
          "come": "A piedi dallo Zócalo.",
          "quando": "Mattina.",
          "tempo": "3 ore"
        },
        {
          "nome": "Biblioteca Palafoxiana e Capilla del Rosario",
          "testo": "La prima biblioteca pubblica delle Americhe, fondata nel 1646, e una cappella barocca ricoperta d'oro (Templo de Santo Domingo).",
          "come": "A piedi dal centro.",
          "quando": "Mattina.",
          "tempo": "1,5 ore"
        },
        {
          "nome": "Gran Piramide di Cholula",
          "testo": "La piramide più grande del mondo per volume, quasi nascosta sotto una collina d'erba, con la chiesa della Virgen de los Remedios in cima. I tunnel interni hanno riaperto a marzo 2026 dopo sei anni di chiusura, con visite a gruppi.",
          "come": "Autobus o Uber da Puebla, poco lontano.",
          "quando": "Mattina; tramonto per la vista sui vulcani.",
          "tempo": "2-3 ore",
          "url": "https://www.inah.gob.mx/",
          "consiglio": "Salire alla chiesa in cima per il panorama sui vulcani Popocatépetl e Iztaccíhuatl."
        },
        {
          "nome": "Tonantzintla e Acatepec",
          "testo": "Chiese barocche indigene con facciate di azulejos e interni ricoperti di stucchi dorati.",
          "come": "Uber o colectivo da Cholula.",
          "quando": "Mattina.",
          "tempo": "1-2 ore"
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: Cattedrale, Capilla del Rosario",
            "Pranzo con mole poblano",
            "Pomeriggio: Cholula e piramide"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: centro di Puebla e Palafoxiana",
            "Giorno 2: Cholula, piramide, Tonantzintla e Acatepec"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro storico di Puebla",
          "perChi": "a piedi da tutto",
          "testo": "Hotel in palazzi storici e ristoranti vicini."
        },
        {
          "nome": "Cholula",
          "perChi": "atmosfera di villaggio",
          "testo": "Più tranquillo, con bar e vita studentesca."
        }
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
    comeArrivare: 'In tour di gruppo da Oaxaca, con auto e autista o in colectivo lungo la 190.',
    comeSpostarsi: 'Colectivos tra i paesi; da Mitla camionetas condivise per Hierve el Agua.',
    periodoMigliore: 'tutto l\'anno; fine ottobre-inizio novembre per gli altari nelle case e le comparsas.',
    costi: 'Hierve el Agua con quota comunitaria in contanti; Mitla biglietto INAH; degustazioni nei palenques spesso gratuite.',
    erroriDaEvitare: [
      'Partire per Hierve el Agua senza verificare che sia aperto: le chiusure sono possibili',
      'Guidare dopo le degustazioni di mezcal',
      'Entrare negli altari delle case senza un invito',
    ],
      "luoghi": [
        {
          "nome": "Árbol del Tule",
          "testo": "Un cipresso di Montezuma con il tronco più massiccio del mondo, nel cortile della chiesa di Santa María del Tule. Le stime più serie gli danno fra 1.400 e 1.600 anni.",
          "come": "Autobus o taxi da Oaxaca, circa 9 km a est, sulla strada per Mitla.",
          "quando": "Mattina.",
          "tempo": "Breve sosta"
        },
        {
          "nome": "Teotitlán del Valle",
          "testo": "Villaggio zapoteco dei tappeti di lana tessuti a mano con tinture naturali (cocciniglia, indaco).",
          "come": "Taxi o tour da Oaxaca.",
          "quando": "Mattina.",
          "tempo": "1-2 ore",
          "consiglio": "Comprare nei laboratori di famiglia, dove si vede la lavorazione."
        },
        {
          "nome": "Mitla",
          "testo": "Sito zapoteco-mixteco con mosaici geometrici in pietra incastrata. Ingresso INAH.",
          "come": "Colectivo o tour da Oaxaca.",
          "quando": "Mattina.",
          "tempo": "1-2 ore",
          "url": "https://www.inah.gob.mx/"
        },
        {
          "nome": "Hierve el Agua",
          "testo": "Cascate pietrificate di calcare e pozze naturali panoramiche sulla valle. Gestite dalla comunità; l'apertura può cambiare.",
          "come": "Tour da Oaxaca o auto.",
          "quando": "Mattina, con meno gente; verificare l'apertura.",
          "tempo": "2-3 ore",
          "consiglio": "Dopo le piogge o per blocchi stradali può essere chiuso: controllare prima."
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Árbol del Tule",
            "Teotitlán del Valle",
            "Mezcal a Santiago Matatlán",
            "Mitla"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: Tule, Teotitlán e Mitla",
            "Giorno 2: Hierve el Agua e Yagul"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Base a Oaxaca",
          "perChi": "servizi",
          "testo": "I Valles si visitano in giornata da Oaxaca."
        },
        {
          "nome": "Teotitlán o Mitla",
          "perChi": "chi vuole restare",
          "testo": "Piccole locande di famiglia, calma e cultura locale."
        }
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
    comeArrivare: 'Bus da Città del Messico via Morelia sull\'autostrada 15D.',
    comeSpostarsi: 'Lance dal Muelle General per Janitzio; taxi e colectivos per i paesi del lago.',
    periodoMigliore: 'dal 30 ottobre al 2 novembre per la Noche de Ánimas.',
    erroriDaEvitare: [
      'Decidere di andare senza aver letto la scheda aggiornata di Viaggiare Sicuri sul Michoacán',
      'Spostarsi di notte fuori dalle strade principali',
      'Pensare di unire nello stesso viaggio Janitzio e le notti principali di Oaxaca: coincidono',
    ],
      "luoghi": [
        {
          "nome": "Isola di Janitzio",
          "testo": "Isola sul lago di Pátzcuaro con la statua di Morelos, famosa per la veglia di Día de Muertos nel cimitero, la notte del 1° novembre.",
          "come": "Barca dal molo di Pátzcuaro.",
          "quando": "Notte del 1° novembre per la veglia.",
          "tempo": "Mezza giornata",
          "consiglio": "Rispettare le famiglie: la veglia non è uno spettacolo."
        },
        {
          "nome": "Tzintzuntzan",
          "testo": "Antica capitale purépecha, con le yácatas (piramidi circolari) e un cimitero decorato.",
          "come": "Auto o colectivo da Pátzcuaro, lungo il lago.",
          "quando": "Mattina.",
          "tempo": "2 ore",
          "costo": "210 MXN per gli stranieri (2026).",
          "url": "https://www.inah.gob.mx/"
        },
        {
          "nome": "Piazze coloniali di Pátzcuaro",
          "testo": "Plaza Vasco de Quiroga e Plaza Gertrudis Bocanegra, con portici e mercato di artigianato.",
          "come": "A piedi.",
          "quando": "Mattina.",
          "tempo": "2-3 ore"
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: Plaza Vasco de Quiroga e mercato",
            "Pomeriggio: Tzintzuntzan",
            "Sera: barca per Janitzio, veglia (1° novembre)"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: Pátzcuaro e Tzintzuntzan",
            "Giorno 2: Janitzio e dintorni"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro di Pátzcuaro",
          "perChi": "a piedi da tutto",
          "testo": "Hotel in case coloniali, vicini alle piazze."
        }
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
    comeArrivare: 'Volo da Città del Messico; traghetto Baja Ferries da Mazatlán o Topolobampo a Pichilingue.',
    comeSpostarsi: 'Auto a noleggio per spiagge e dintorni; barche dei tour per le isole.',
    periodoMigliore: 'fra l\'autunno e la primavera per lo squalo balena, quando la CONANP apre la stagione.',
    costi: 'Squalo balena ed Espíritu Santo con tour a prezzi variabili, più la quota del parco; Balandra ha una quota d\'ingresso da verificare prima di partire.',
    erroriDaEvitare: [
      'Andare a Balandra senza aver prenotato il turno',
      'Scegliere un operatore non autorizzato per lo squalo balena',
      'Non tenere un giorno di margine per il vento da nord',
    ],
      "luoghi": [
        {
          "nome": "Malecón di La Paz",
          "testo": "Il lungomare della città, lungo alcuni chilometri, con sculture, caffè e il tramonto sul Mar di Cortez.",
          "come": "A piedi dal centro.",
          "quando": "Tramonto.",
          "tempo": "1-2 ore"
        },
        {
          "nome": "Playa Balandra",
          "testo": "Una baia bassa dall'acqua turchese, nota per la roccia a fungo, dentro un'area naturale protetta. L'accesso è contingentato per proteggere l'ecosistema.",
          "come": "In auto o taxi da La Paz. Si entra in due turni, 8-12 e 13-17, con un numero limitato di posti per turno; parte dei posti si prenota sul portale delle aree protette della CONANP, il resto va a chi arriva prima.",
          "quando": "Mattina presto.",
          "tempo": "Mezza giornata",
          "consiglio": "Arrivare presto e portare acqua e cibo: in spiaggia non si vende niente, e i rifiuti si riportano indietro.",
          "costo": "Quota d'ingresso dell'area protetta: verificare l'importo con la CONANP prima di partire."
        },
        {
          "nome": "Isla Espíritu Santo e Los Islotes",
          "testo": "Arcipelago dentro il sito UNESCO delle isole e aree protette del Golfo di California, con colonie di leoni marini e fondali per lo snorkeling. Si nuota con i leoni marini a Los Islotes.",
          "come": "Tour in barca da La Paz con operatore autorizzato.",
          "quando": "Mattina; tutto l'anno con orari variabili.",
          "tempo": "Giornata intera"
        },
        {
          "nome": "Squalo balena nella baia di La Paz",
          "testo": "Incontro con gli squali balena dentro il rifugio della baia, in stagione, solo con barche autorizzate.",
          "come": "Tour in barca da La Paz.",
          "quando": "Di solito fra l'autunno e la primavera, ma la stagione apre solo quando la CONANP conta abbastanza squali nel rifugio della baia: nel 2025 è stata sospesa più volte. Verificare prima.",
          "tempo": "Mezza giornata",
          "consiglio": "Scegliere operatori che rispettano le distanze e i limiti di numero."
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: Playa Balandra",
            "Pranzo di pesce",
            "Tramonto sul Malecón"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: Balandra e Malecón",
            "Giorno 2: Espíritu Santo e Los Islotes"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro e Malecón",
          "perChi": "a piedi da tutto",
          "testo": "Hotel e ristoranti vicino al lungomare."
        },
        {
          "nome": "Verso Balandra",
          "perChi": "calma",
          "testo": "Alberghi più tranquilli a nord, più lontani dal centro."
        }
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
    comeArrivare: 'In auto da La Paz o da Loreto, via Ciudad Constitución.',
    periodoMigliore: 'l\'inverno, nella stagione delle balene grigie: verificare le date con le cooperative.',
    costi: 'Uscite in panga con prezzo per barca da concordare, solo contanti.',
    erroriDaEvitare: [
      'Arrivare senza contanti',
      'Pianificare le uscite nel pomeriggio, quando il vento alza la laguna',
      'Guidare la sera sulla strada del ritorno',
    ],
      "luoghi": [
        {
          "nome": "Avvistamento delle balene grigie",
          "testo": "Le lagune di Bahía Magdalena ospitano ogni anno le balene grigie che vengono a partorire. Si esce in panga e le balene si avvicinano alla barca.",
          "come": "Panga con operatore da Puerto Adolfo López Mateos o Puerto San Carlos.",
          "quando": "In inverno, nella stagione delle balene; al mattino, con meno vento.",
          "tempo": "2-3 ore",
          "consiglio": "Un'uscita al mattino, quando il vento è più debole."
        },
        {
          "nome": "Dune delle isole barriera",
          "testo": "Dune di sabbia sull'isola Magdalena, la lunga barriera che separa la laguna dal Pacifico. Dall'alto si vedono da una parte le acque calme dove nuotano le balene, dall'altra le onde dell'oceano; spesso è la sosta dopo l'uscita in panga.",
          "come": "In panga dalle lagune.",
          "quando": "Mattina.",
          "tempo": "Mezza giornata"
        },
        {
          "nome": "Villaggi di pescatori",
          "testo": "Puerto Adolfo López Mateos e Puerto San Carlos, villaggi di pescatori con mercato e pesce fresco. Vivono di pesca e, d'inverno, delle balene: fuori stagione sono quasi deserti, con pochi ristoranti aperti.",
          "come": "In auto da La Paz o Ciudad Constitución.",
          "quando": "Giorno.",
          "tempo": "Mezza giornata",
          "consiglio": "D'inverno i paesi si animano per la stagione delle balene: chiedere sul posto se ci sono feste o eventi in quei giorni."
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: uscita in panga per le balene",
            "Pranzo di pesce",
            "Pomeriggio: dune"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: arrivo, uscita pomeridiana",
            "Giorno 2: uscita mattutina e pranzo di pesce al porto"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Puerto Adolfo López Mateos",
          "perChi": "natura",
          "testo": "Pochi servizi, locande semplici."
        },
        {
          "nome": "Puerto San Carlos",
          "perChi": "servizi",
          "testo": "Più grande, con alberghi."
        }
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
    comeArrivare: 'In auto da La Paz o da Bahía Magdalena; piccolo aeroporto con voli soprattutto da Stati Uniti e Tijuana.',
    periodoMigliore: 'l\'inverno per le balene: verificare la stagione con gli operatori.',
    costi: 'Uscite per le balene e per le isole con operatori autorizzati, a prezzi variabili.',
    erroriDaEvitare: [
      'Arrivare a Loreto senza aver fatto benzina nel tratto da Ciudad Constitución',
      'Prenotare con operatori senza permesso del parco',
    ],
      "luoghi": [
        {
          "nome": "Misión de Nuestra Señora de Loreto",
          "testo": "La missione gesuita di Loreto, fondata dal gesuita Juan María de Salvatierra nel 1697, con il museo delle missioni accanto alla chiesa. Da qui partì l'espansione verso tutta la penisola; la chiesa in pietra, costruita fra il 1740 e il 1744, è ancora il centro della vita del paese.",
          "come": "A piedi dal centro.",
          "quando": "Mattina.",
          "tempo": "1 ora",
          "url": "https://www.inah.gob.mx/"
        },
        {
          "nome": "Parco Nazionale Bahía de Loreto e Isla Coronado",
          "testo": "Parco marino, parte del sito UNESCO del Golfo di California, con isole, snorkeling e balene in stagione. Isla Coronado, una delle isole principali, ha una spiaggia bianca, acqua trasparente e leoni marini sugli scogli; in barca capita di incrociare delfini.",
          "come": "Barca da Loreto con operatore autorizzato.",
          "quando": "Mattina; mare calmo.",
          "tempo": "Giornata intera"
        },
        {
          "nome": "Misión San Javier",
          "testo": "Missione gesuita fondata nel 1699 nella Sierra de la Giganta, raggiunta da una strada di montagna fra canyon e oasi di palme. La chiesa in pietra, costruita fra il 1744 e il 1758 ed è curata dall'INAH.",
          "come": "Auto o tour da Loreto, attraverso la sierra.",
          "quando": "Mattina.",
          "tempo": "Mezza giornata",
          "consiglio": "Strada di montagna con curve strette: guidare di giorno e con calma."
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: Misión di Loreto",
            "Pranzo di pesce",
            "Pomeriggio: Isla Coronado"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: Loreto e Parque Nacional",
            "Giorno 2: Misión San Javier"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro di Loreto",
          "perChi": "a piedi da tutto",
          "testo": "Hotel piccoli e ristoranti vicino al lungomare."
        }
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
    comeArrivare: 'In auto da La Paz o da Cabo San Lucas.',
    periodoMigliore: 'da novembre ad aprile.',
    erroriDaEvitare: ['Nuotare sulle spiagge aperte del Pacifico fuori da Cerritos: correnti forti'],
      "luoghi": [
        {
          "nome": "Centro storico e gallerie",
          "testo": "Pueblo Mágico con case coloniali, gallerie d'arte, boutique e caffè. Era un paese della canna da zucchero; oggi vive di artisti, surfisti e piccoli ristoranti che cucinano con le verdure degli orti intorno.",
          "come": "A piedi.",
          "quando": "Mattina e sera.",
          "tempo": "Mezza giornata"
        },
        {
          "nome": "Playa Cerritos",
          "testo": "Spiaggia sul Pacifico con onde adatte al surf per principianti, scuole e noleggio tavole.",
          "come": "Auto o taxi da Todos Santos, verso sud.",
          "quando": "Mattina.",
          "tempo": "Mezza giornata",
          "consiglio": "Fuori da Cerritos le spiagge del Pacifico hanno correnti forti: non nuotare."
        },
        {
          "nome": "Liberazione delle tartarughe",
          "testo": "Progetti locali di tutela con liberazione dei piccoli nelle stagioni di schiusa. Sulle spiagge vicine al paese nidificano diverse specie di tartarughe marine; i volontari proteggono i nidi e, al tramonto, accompagnano i piccoli verso il mare.",
          "come": "Con i progetti locali, in stagione.",
          "quando": "Sera.",
          "tempo": "1-2 ore",
          "consiglio": "Rispettare le regole del progetto."
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: centro e gallerie",
            "Pomeriggio: Cerritos e lezione di surf",
            "Tramonto sul Pacifico"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: centro e Cerritos",
            "Giorno 2: tartarughe in stagione o un giorno a La Paz"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro storico",
          "perChi": "charme",
          "testo": "Piccoli hotel e guesthouse, a piedi dai ristoranti."
        }
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
    comeArrivare: 'Aeroporto di San José del Cabo (SJD), con voli per Città del Messico e diretti per gli Stati Uniti; in auto da Todos Santos.',
    periodoMigliore: 'l\'inverno per le megattere.',
    costi: 'Whale watching e taxi acquatici a prezzi variabili: confrontare gli operatori.',
    erroriDaEvitare: [
      'Fermarsi con i venditori di multiproprietà in aeroporto e nella Marina',
      'Sottovalutare i prezzi, molto alti',
    ],
      "luoghi": [
        {
          "nome": "El Arco e Playa del Amor",
          "testo": "La formazione rocciosa dove il Mar di Cortez incontra il Pacifico, con la spiaggia dell'Amor nascosta dietro.",
          "come": "Taxi acquatico dal molo di Cabo San Lucas.",
          "quando": "Mattina.",
          "tempo": "1-2 ore",
          "consiglio": "Il mare è mosso: non sempre si può sbarcare."
        },
        {
          "nome": "San José del Cabo",
          "testo": "Centro coloniale con gallerie d'arte e l'Art Walk gratuito del giovedì sera, da novembre a giugno, nel distretto delle gallerie.",
          "come": "Auto o bus da Cabo San Lucas.",
          "quando": "Giovedì sera.",
          "tempo": "Mezza giornata"
        },
        {
          "nome": "Parco Nazionale Cabo Pulmo",
          "testo": "La più antica delle sole tre barriere coralline della costa occidentale del Nord America, in un parco nazionale parte del sito UNESCO del Golfo di California. Snorkeling e immersioni con banchi di pesci enormi.",
          "come": "Auto da Los Cabos, poi barca con un operatore del paese.",
          "quando": "Mattina.",
          "tempo": "Giornata intera"
        },
        {
          "nome": "Whale watching delle megattere",
          "testo": "Avvistamento delle megattere nelle acque di Los Cabos. D'inverno arrivano qui per riprodursi e partorire: dalla barca si vedono salti, colpi di coda e, con un po' di fortuna, madri con il piccolo.",
          "come": "Barca da Cabo San Lucas o San José del Cabo.",
          "quando": "D'inverno, in stagione.",
          "tempo": "2-3 ore"
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: El Arco in taxi acquatico",
            "Pranzo a Cabo San Lucas",
            "Giovedì sera: Art Walk a San José del Cabo"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: El Arco e Cabo San Lucas",
            "Giorno 2: Cabo Pulmo o balene (d'inverno)"
          ]
        }
      ],
      "zone": [
        {
          "nome": "San José del Cabo",
          "perChi": "tranquillità",
          "testo": "Centro coloniale, più calmo e meno turistico."
        },
        {
          "nome": "Cabo San Lucas",
          "perChi": "vita serale",
          "testo": "Marina, bar e locali, molto turistico."
        }
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
    esperienzeSlugs: [],
    tripSlugs: ['messico-cdmx-baja-california'],
    imageAlt: 'El Arco di Cabo San Lucas con una barca davanti alle rocce',
    immagine: '/images/viaggi/messico-cdmx-baja-california/giorno-14-los-cabos.jpg',
  },
]
