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
      'La capitale sta a 2.240 metri sul fondo di un lago prosciugato, sopra le rovine di Tenochtitlán. Venti milioni di abitanti, un centro storico patrimonio UNESCO, il museo archeologico più importante delle Americhe e una cucina di strada tra le più ricche del mondo.',
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
      'Teotihuacán all\'apertura delle 9, o in mongolfiera all\'alba',
      'Un giro in trajinera a Xochimilco, concordando il prezzo all\'ora prima di salire',
      'Una serata di lucha libre all\'Arena México (martedì, venerdì e domenica)',
      'Tacos al pastor e de suadero nelle taquerías di quartiere',
      'A fine ottobre, la Mega Procesión de Catrinas lungo il Paseo de la Reforma',
    ],
    doveDormire:
      'Roma Norte o Condesa, quartieri alberati e sicuri a 20-30 minuti dal centro. Economico 600-1.200 MXN a notte, medio 1.800-3.500 MXN, alto oltre 5.000 MXN. Il Centro Histórico è comodo di giorno ma vuoto la sera.',
    doveMangiare:
      'Taquerías, mercati (Coyoacán, San Juan), tamales e atole a colazione, churros con cioccolata. I ristoranti d\'autore di Roma e Polanco vanno prenotati con settimane di anticipo.',
    comeArrivare: 'Aeroporto internazionale Benito Juárez (AICM), con voli diretti o via una capitale europea; in città con taxi prepagato o app.',
    comeSpostarsi: 'Metro (5 MXN a corsa), Metrobús e app di trasporto; per Teotihuacán bus dalla Terminal del Norte. Niente taxi presi per strada.',
    periodoMigliore: 'da ottobre ad aprile, stagione secca; fine ottobre per il Día de los Muertos.',
    costi: 'Teotihuacán e Museo di Antropologia circa 210 MXN ciascuno per gli stranieri dal 2026; metro 5 MXN; trajinera 600-700 MXN all\'ora a barca.',
    erroriDaEvitare: [
      'Prendere taxi per strada invece di taxi prepagati, di sitio o app',
      'Programmare Museo di Antropologia o Templo Mayor di lunedì, quando sono chiusi',
      'Sottovalutare la quota nei primi due giorni',
      'Non prenotare la Casa Azul, che si esaurisce giorni prima',
    ],
      "luoghi": [
        {
          "nome": "Zócalo, Cattedrale e Templo Mayor",
          "testo": "La piazza centrale con la Cattedrale Metropolitana, il Palacio Nacional e, accanto, il Templo Mayor, il cuore azteco di Tenochtitlan, con il museo.",
          "come": "Metro Zócalo. Il Templo Mayor ha ingresso INAH separato.",
          "quando": "Mattina; il Templo Mayor di norma chiude il lunedì.",
          "tempo": "3 ore",
          "url": "https://www.inah.gob.mx/"
        },
        {
          "nome": "Museo Nacional de Antropología",
          "testo": "Il più grande museo archeologico del Paese, nel bosco di Chapultepec, con la Pietra del Sole e le sale delle culture mesoamericane.",
          "come": "Metro Auditorio o Chapultepec.",
          "quando": "Mattina; di norma chiuso il lunedì.",
          "tempo": "3-4 ore",
          "url": "https://www.inah.gob.mx/",
          "consiglio": "Scegliere 3-4 sale: è troppo grande per vederlo tutto."
        },
        {
          "nome": "Teotihuacán",
          "testo": "La città dei Templi del Sole e della Luna e della Calzada de los Muertos, a circa 50 km dalla città, patrimonio UNESCO.",
          "come": "Bus dal terminal Norte (circa 1 ora) o tour; ingresso INAH.",
          "quando": "All'apertura, prima del caldo e dei gruppi.",
          "tempo": "Mezza giornata",
          "url": "https://www.inah.gob.mx/",
          "consiglio": "Portare cappello e acqua: quasi nessuna ombra."
        },
        {
          "nome": "Coyoacán e Casa Azul",
          "testo": "Quartiere coloniale con piazze e mercato, e la Casa Azul di Frida Kahlo, oggi museo.",
          "come": "Metro o Uber; per la Casa Azul biglietti da prenotare online in anticipo.",
          "quando": "Mattina; il museo di norma chiude il lunedì.",
          "tempo": "Mezza giornata",
          "url": "https://www.museofridakahlo.org.mx/"
        },
        {
          "nome": "Xochimilco",
          "testo": "I canali con le trajineras colorate, resto del sistema lacustre azteco.",
          "come": "Metro e tren ligero o Uber fino agli imbarcaderi.",
          "quando": "Mattina nei giorni feriali, meno folla.",
          "tempo": "2-3 ore",
          "consiglio": "Concordare durata e prezzo della barca prima di salire."
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Zócalo, Cattedrale e Templo Mayor",
            "Palacio de Bellas Artes",
            "Pranzo ai tacos",
            "Museo Nacional de Antropología nel pomeriggio"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: centro storico e museo di Antropologia",
            "Giorno 2: Teotihuacán all'apertura, Coyoacán nel pomeriggio"
          ]
        },
        {
          "titolo": "3 giorni",
          "tappe": [
            "Giorni 1-2 come sopra",
            "Giorno 3: Xochimilco e Casa Azul, oppure Bellas Artes con i murales"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro storico",
          "perChi": "a piedi da tutto",
          "testo": "Zócalo e musei vicini, ma rumoroso e poco sicuro la notte lontano dalle vie principali."
        },
        {
          "nome": "Roma e Condesa",
          "perChi": "ristoranti e locali",
          "testo": "Quartieri di caffè e vita serale, più sicuri a piedi, vicini a Chapultepec."
        },
        {
          "nome": "Coyoacán",
          "perChi": "calma e storia",
          "testo": "Quartiere residenziale e coloniale, più lontano dal centro."
        }
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
        "Altitudine (2.240 m): bere acqua e andare piano il primo giorno."
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
      'Puebla è una città coloniale patrimonio UNESCO, con le facciate rivestite di talavera e una delle cucine più importanti del paese. A mezz\'ora c\'è Cholula, con la piramide più grande del mondo per volume e, in cima, il santuario della Virgen de los Remedios con il Popocatépetl sullo sfondo.',
    percheAndarci:
      'Per l\'immagine della chiesa gialla sulla piramide con il vulcano che fuma alle spalle, per il barocco poblano e per il mole. È anche la tappa naturale tra Città del Messico e Oaxaca.',
    cosaVedere: [
      'Il centro storico di Puebla con la Cattedrale e la Capilla del Rosario',
      'La Biblioteca Palafoxiana, la prima biblioteca pubblica delle Americhe',
      'La Gran Piramide di Cholula, i suoi tunnel e il Santuario de la Virgen de los Remedios',
      'Le chiese barocche indigene di Tonantzintla e Acatepec',
    ],
    cosaFare: [
      'Salire alla chiesa sulla piramide all\'alba o al tramonto per vedere il Popocatépetl e l\'Iztaccíhuatl',
      'Visitare un laboratorio di talavera tradizionale',
      'Assaggiare mole poblano, cemitas e i dolci della Calle de los Dulces',
    ],
    doveDormire:
      'A Puebla il centro intorno allo Zócalo, con molti hotel in edifici coloniali (fascia media 1.200-2.500 MXN). A Cholula ostelli e piccoli hotel ai piedi della piramide da circa 700 MXN.',
    doveMangiare: 'Mole poblano, chalupas, cemitas e molotes; i chiles en nogada sono un piatto di agosto-settembre.',
    comeArrivare: 'Bus ADO da Città del Messico (circa 2 ore, 200-300 MXN); da Puebla a Cholula taxi o colectivo (20-30 minuti).',
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
          "testo": "La prima biblioteca pubblica delle Americhe, del 1646, e una cappella barocca ricoperta d'oro (Templo de Santo Domingo).",
          "come": "A piedi dal centro.",
          "quando": "Mattina.",
          "tempo": "1,5 ore"
        },
        {
          "nome": "Gran Piramide di Cholula",
          "testo": "La piramide più grande del mondo per volume, con tunnel visitabili e la chiesa della Virgen de los Remedios in cima.",
          "come": "Autobus o Uber da Puebla (circa 20 minuti).",
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
          "testo": "Peperoni ripieni con salsa di noci, in agosto-settembre."
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
      'Capitale dello stato più indigeno del Messico, a 1.550 metri, con un centro coloniale di pietra verde patrimonio UNESCO, mercati enormi e la cucina dei sette moli. Tra il 31 ottobre e il 2 novembre è il luogo dove il Día de los Muertos è più vivo e più vario.',
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
      'Il centro tra Santo Domingo e Jalatlaco. Nelle notti della festa i prezzi salgono di due o tre volte: ostelli 400-800 MXN a posto letto, fascia media 1.500-3.500 MXN, alta oltre 5.000 MXN. Prenotare 4-6 mesi prima.',
    doveMangiare: 'I mercati per tlayudas, mole e cioccolata; le mezcalerías del centro per il mezcal artigianale.',
    comeArrivare: 'Bus ADO da Puebla (circa 4 ore e mezza) o da Città del Messico (6-7 ore); volo da Città del Messico (circa 1 ora).',
    comeSpostarsi: 'A piedi in centro; colectivos e taxi per i paesi; tour organizzati per le notti della festa, quando i taxi scarseggiano.',
    periodoMigliore: 'da ottobre ad aprile; 28 ottobre-2 novembre per il Día de los Muertos; luglio per la Guelaguetza.',
    costi: 'Tour serali ai cimiteri 600-1.200 MXN; ingresso ai panteones libero.',
    erroriDaEvitare: [
      'Prenotare l\'alloggio per la festa a poche settimane dalla partenza',
      'Pagare tour che promettono un "accesso" ai cimiteri, che è libero',
      'Fotografare persone e altari senza chiedere',
      'Non informarsi sui bloqueos prima degli spostamenti lunghi',
    ],
      "luoghi": [
        {
          "nome": "Templo de Santo Domingo e giardino etnobotanico",
          "testo": "Chiesa barocca con interni dorati, ex convento con museo e il giardino etnobotanico, visitabile solo con guida.",
          "come": "A piedi dal centro.",
          "quando": "Mattina.",
          "tempo": "2-3 ore",
          "url": "https://www.inah.gob.mx/",
          "consiglio": "Il giardino etnobotanico si visita con tour guidato in orari fissi: prenotare."
        },
        {
          "nome": "Monte Albán",
          "testo": "Antica capitale zapoteca su una collina sopra la città, patrimonio UNESCO, con la grande piazza e le tombe.",
          "come": "Navette o taxi da Oaxaca (circa 20-30 minuti); ingresso INAH.",
          "quando": "All'apertura.",
          "tempo": "2-3 ore",
          "url": "https://www.inah.gob.mx/"
        },
        {
          "nome": "Mercati 20 de Noviembre e Benito Juárez",
          "testo": "Mercati con banchi di carne alla griglia, chapulines, cioccolato, mole e formaggio.",
          "come": "A piedi dal centro.",
          "quando": "Mattina e pranzo.",
          "tempo": "1-2 ore"
        },
        {
          "nome": "Cimitero di Santa Cruz Xoxocotlán e Panteón General",
          "testo": "Le veglie del Día de Muertos (31 ottobre-2 novembre), con tombe decorate e candele.",
          "come": "Taxi o tour; Panteón General a San Miguel.",
          "quando": "Notte del 31 ottobre e 1-2 novembre.",
          "tempo": "Serata",
          "consiglio": "Rispettare le famiglie: non è uno spettacolo."
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Santo Domingo",
            "Mercati e pranzo con tlayuda",
            "Monte Albán nel pomeriggio"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: centro e Santo Domingo",
            "Giorno 2: Monte Albán, mercati, mezcalería"
          ]
        },
        {
          "titolo": "3 giorni",
          "tappe": [
            "Giorni 1-2 come sopra",
            "Giorno 3: Valles Centrales (Teotitlán, Mitla, Hierve el Agua)"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro storico",
          "perChi": "a piedi da tutto",
          "testo": "Hotel in case coloniali, cultura e ristoranti, più rumoroso."
        },
        {
          "nome": "Barrio Jalatlaco",
          "perChi": "caffè e atmosfera",
          "testo": "Quartiere di case colorate, più tranquillo, a 10-15 minuti."
        }
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
    comeArrivare: 'In tour di gruppo da Oaxaca (600-900 MXN), con auto e autista o in colectivo lungo la 190.',
    comeSpostarsi: 'Colectivos tra i paesi; da Mitla camionetas condivise per Hierve el Agua.',
    periodoMigliore: 'tutto l\'anno; fine ottobre-inizio novembre per gli altari nelle case e le comparsas.',
    costi: 'Hierve el Agua 50-100 MXN in contanti tra quota comunitaria e ingresso; Mitla biglietto INAH; degustazioni nei palenques gratuite o a pochi pesos.',
    erroriDaEvitare: [
      'Partire per Hierve el Agua senza verificare che sia aperto: le chiusure per dispute tra comunità sono frequenti',
      'Guidare dopo le degustazioni di mezcal',
      'Entrare negli altari delle case senza un invito',
    ],
      "luoghi": [
        {
          "nome": "Árbol del Tule",
          "testo": "Un cipresso di Montezuma di circa 2.000 anni con il tronco più largo del mondo, nel cortile della chiesa di Santa María del Tule.",
          "come": "Autobus o taxi da Oaxaca (circa 15 minuti).",
          "quando": "Mattina.",
          "tempo": "30 minuti"
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
          "come": "Colectivo o tour da Oaxaca (circa 1 ora).",
          "quando": "Mattina.",
          "tempo": "1,5 ore",
          "url": "https://www.inah.gob.mx/"
        },
        {
          "nome": "Hierve el Agua",
          "testo": "Cascate pietrificate di calcare e pozze naturali panoramiche sulla valle. Gestite dalla comunità; l'apertura può cambiare.",
          "come": "Tour da Oaxaca o auto (circa 1,5 ore).",
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
          "testo": "Carne di capra cotta nel forno di terra."
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
      'Una città di surf sul Pacifico, con l\'onda di Zicatela tra le più potenti del mondo, calette tranquille, lagune con la bioluminescenza e, verso est, i villaggi di Mazunte e Zipolite. Dal 2024 la nuova autostrada l\'ha portata a circa tre ore da Oaxaca.',
    percheAndarci: 'Per chiudere un viaggio culturale con oceano, surf, tramonti e natura costiera.',
    cosaVedere: [
      'Playa Zicatela e La Punta',
      'Le calette di Carrizalillo, Manzanillo e Puerto Angelito',
      'La Laguna di Manialtepec',
      'Mazunte, Zipolite e Punta Cometa',
    ],
    cosaFare: [
      'Una lezione di surf a Carrizalillo o alla Punta',
      'La liberazione delle tartarughe al tramonto a Playa Bacocho, in stagione',
      'La bioluminescenza a Manialtepec in una notte senza luna',
    ],
    doveDormire:
      'La Punta per ostelli e budget (da 600 MXN), Zicatela per la fascia media e la vita serale (1.500-3.000 MXN), Carrizalillo e Rinconada per la quiete e qualche hotel di fascia alta.',
    doveMangiare: 'Pescado a la talla, ceviche, tiritas e tacos de pescado nelle palapas sulla spiaggia.',
    comeArrivare: 'Bus o van da Oaxaca (3-3,5 ore sulla Barranca Larga-Ventanilla); voli diretti da Città del Messico (circa 1 ora).',
    comeSpostarsi: 'Taxi e colectivos lungo la costiera 200.',
    periodoMigliore: 'da novembre ad aprile, stagione secca; da giugno a ottobre piogge e possibili uragani.',
    costi: 'Lezione di surf 600-900 MXN; tour della laguna 500-900 MXN.',
    erroriDaEvitare: [
      'Nuotare a Zicatela, dove le correnti di risacca sono pericolose',
      'Scegliere tour della bioluminescenza a motore fino in fondo alla laguna',
      'Lasciare oggetti incustoditi in spiaggia la sera',
    ],
      "luoghi": [
        {
          "nome": "Playa Zicatela",
          "testo": "Una delle onde più potenti del Messico, la «Mexican Pipeline», per surfisti esperti; la spiaggia ha ristoranti e hotel.",
          "come": "A piedi o taxi dal centro.",
          "quando": "Alba e tramonto per guardare i surfisti; il bagno solo con grande prudenza.",
          "tempo": "Mezza giornata",
          "consiglio": "Correnti pericolose: non nuotare dove ci sono onde grandi."
        },
        {
          "nome": "Carrizalillo, Manzanillo e Puerto Angelito",
          "testo": "Calette riparate con acqua calma, adatte al bagno e allo snorkeling.",
          "come": "Taxi o a piedi con una scalinata.",
          "quando": "Mattina.",
          "tempo": "Mezza giornata"
        },
        {
          "nome": "Laguna di Manialtepec",
          "testo": "Laguna con mangrovie e uccelli, con bioluminescenza notturna.",
          "come": "Tour in barca da Puerto Escondido.",
          "quando": "Alba o notte.",
          "tempo": "2-3 ore"
        },
        {
          "nome": "Mazunte, Zipolite e Punta Cometa",
          "testo": "Villaggi della costa vicina: Mazunte per il centro delle tartarughe, Zipolite per la spiaggia libera, Punta Cometa per il tramonto.",
          "come": "Auto o colectivo da Puerto Escondido (1-2 ore).",
          "quando": "Tramonto a Punta Cometa.",
          "tempo": "Giornata"
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: Carrizalillo",
            "Pranzo di pesce",
            "Pomeriggio: Zicatela",
            "Tramonto sulla spiaggia"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: calette e Zicatela",
            "Giorno 2: Mazunte, Punta Cometa e Zipolite"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Zicatela",
          "perChi": "surf e vita serale",
          "testo": "Hotel, bar e ristoranti, rumorosi di notte."
        },
        {
          "nome": "La Punta",
          "perChi": "atmosfera tranquilla",
          "testo": "Più tranquilla, con onde più basse, vicino alle calette."
        }
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
    visitataPersonalmente: false,
    introduzione:
      'Pátzcuaro è una cittadina coloniale purépecha sul lago omonimo, nello stato del Michoacán. Sull\'isola di Janitzio, la notte del 1° novembre, il cimitero si accende di candele e dalle rive arrivano le barche: è l\'immagine più famosa del Día de los Muertos.',
    percheAndarci:
      'Per la notte di Janitzio e per i cimiteri dei paesi del lago, come Tzintzuntzan e Ihuatzio. È una tappa da valutare con attenzione: il Michoacán è al livello 4 degli avvisi di viaggio USA e tra gli stati sconsigliati dalla Svizzera nel 2026.',
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
    comeArrivare: 'Bus da Città del Messico via Morelia sull\'autostrada 15D (4-5 ore).',
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
          "come": "Barca dal molo di Pátzcuaro (circa 20-30 minuti).",
          "quando": "Notte del 1° novembre per la veglia.",
          "tempo": "Mezza giornata",
          "consiglio": "Rispettare le famiglie: la veglia non è uno spettacolo."
        },
        {
          "nome": "Tzintzuntzan",
          "testo": "Antica capitale purépecha, con le yácatas (piramidi circolari) e un cimitero decorato.",
          "come": "Auto o colectivo da Pátzcuaro (circa 20 minuti).",
          "quando": "Mattina.",
          "tempo": "2 ore",
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
      'La capitale della Baja California Sur ha i ritmi di una città di provincia, un lungomare di cinque chilometri sul Mar di Cortez e, davanti, l\'arcipelago disabitato di Espíritu Santo, patrimonio UNESCO. D\'inverno nella baia si nutre lo squalo balena.',
    percheAndarci: 'Per nuotare con lo squalo balena e con i leoni marini di Los Islotes, e per Playa Balandra.',
    cosaVedere: [
      'Il Malecón al tramonto',
      'Playa Balandra, El Tecolote e Pichilingue',
      'L\'arcipelago di Espíritu Santo e Los Islotes',
    ],
    cosaFare: [
      'Nuotare con lo squalo balena con un operatore autorizzato CONANP (ottobre-novembre/aprile)',
      'Snorkeling con i leoni marini a Los Islotes',
      'Kayak e pranzo in spiaggia a Ensenada Grande',
    ],
    doveDormire: 'Il Malecón o il centro, tutto a piedi. Economico 700-1.200 MXN, medio 1.800-3.000 MXN, alto oltre 4.500 MXN nei resort verso Pichilingue.',
    doveMangiare: 'Tacos de pescado e de camarón, ceviche, aguachile, almejas chocolatas.',
    comeArrivare: 'Volo da Città del Messico (circa 2 ore e 15); traghetto Baja Ferries da Mazatlán o Topolobampo a Pichilingue.',
    comeSpostarsi: 'Auto a noleggio per spiagge e dintorni; barche dei tour per le isole.',
    periodoMigliore: 'da novembre ad aprile per lo squalo balena; febbraio-marzo per unire anche le balene grigie.',
    costi: 'Squalo balena 1.500-2.500 MXN più quota parco; Espíritu Santo 2.500-3.500 MXN; Balandra circa 120 MXN a turno.',
    erroriDaEvitare: [
      'Andare a Balandra senza aver prenotato il turno',
      'Scegliere un operatore non autorizzato per lo squalo balena',
      'Non tenere un giorno di margine per il vento da nord',
    ],
      "luoghi": [
        {
          "nome": "Malecón di La Paz",
          "testo": "Lungomare di circa 5 km con sculture, caffè e il tramonto sul Mar di Cortez.",
          "come": "A piedi dal centro.",
          "quando": "Tramonto.",
          "tempo": "1-2 ore"
        },
        {
          "nome": "Playa Balandra",
          "testo": "Una baia bassa dall'acqua turchese, nota per la roccia a fungo. Accesso contingentato per proteggere l'ecosistema.",
          "come": "In auto o taxi da La Paz (circa 25 minuti); verificare le regole di accesso e il numero massimo di visitatori.",
          "quando": "Mattina presto.",
          "tempo": "Mezza giornata",
          "consiglio": "Non si entra senza rispettare le regole del parco; verificare in anticipo."
        },
        {
          "nome": "Isla Espíritu Santo e Los Islotes",
          "testo": "Arcipelago patrimonio UNESCO con colonie di leoni marini e fondali per lo snorkeling. Si nuota con i leoni marini a Los Islotes.",
          "come": "Tour in barca da La Paz con operatore autorizzato.",
          "quando": "Mattina; tutto l'anno con orari variabili.",
          "tempo": "Giornata intera"
        },
        {
          "nome": "Squalo balena nella baia di La Paz",
          "testo": "Incontro con gli squali balena, in stagione, con operatori autorizzati.",
          "come": "Tour in barca da La Paz.",
          "quando": "Da ottobre a marzo circa.",
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
        "Balandra ha accesso contingentato: verificare le regole e gli orari.",
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
      'Una grande baia del Pacifico protetta da isole di sabbia, a circa tre ore da La Paz, con i villaggi di pescatori di Puerto Adolfo López Mateos e Puerto San Carlos. Da gennaio ad aprile le balene grigie vi partoriscono e allattano i piccoli.',
    percheAndarci: 'Per vedere da vicino le madri di balena grigia con i piccoli, dalle pangas delle cooperative locali.',
    cosaVedere: ['Le lagune delle balene grigie', 'Le dune delle isole barriera', 'I villaggi di pescatori'],
    cosaFare: [
      'Un\'uscita in panga al mattino, quando il vento è più debole',
      'Il Festival de la Ballena Gris a fine gennaio-febbraio a López Mateos',
    ],
    doveDormire: 'Alloggi semplici e piccoli motel nei due villaggi (700-1.500 MXN); campi tendati a pacchetto sulle isole.',
    doveMangiare: 'Pesce e frutti di mare dei pescatori in ristoranti familiari.',
    comeArrivare: 'In auto da La Paz (circa 3 ore) o da Loreto (circa 2,5-3 ore), via Ciudad Constitución.',
    periodoMigliore: 'da metà febbraio a fine marzo; stagione ufficiale gennaio-aprile.',
    costi: 'Panga indicativamente 1.500-2.000 MXN all\'ora per barca (6-8 persone), solo contanti.',
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
          "quando": "Da gennaio a marzo, al mattino con meno vento.",
          "tempo": "2-3 ore",
          "consiglio": "Un'uscita al mattino, quando il vento è più debole."
        },
        {
          "nome": "Dune delle isole barriera",
          "testo": "Dune di sabbia sull'isola Magdalena, tra mare e deserto.",
          "come": "In panga dalle lagune.",
          "quando": "Mattina.",
          "tempo": "Mezza giornata"
        },
        {
          "nome": "Villaggi di pescatori",
          "testo": "Puerto Adolfo López Mateos e Puerto San Carlos, villaggi di pescatori con mercato e pesce fresco.",
          "come": "In auto da La Paz o Ciudad Constitución.",
          "quando": "Giorno.",
          "tempo": "Mezza giornata",
          "consiglio": "Il Festival de la Ballena Gris si tiene a fine gennaio-febbraio a López Mateos."
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
            "Giorno 2: uscita mattutina e Festival della balena (se in data)"
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
          "nome": "Pesce e frutti di mare freschi",
          "testo": "Dal pescato locale."
        },
        {
          "nome": "Tacos di pesce",
          "testo": "Nei chioschi del paese."
        },
        {
          "nome": "Almejas",
          "testo": "Vongole locali."
        },
        {
          "nome": "Ceviche",
          "testo": "Con lime."
        }
      ],
      "attenzioni": [
        "La stagione delle balene va da gennaio a marzo: fuori stagione non si vedono.",
        "Il vento del pomeriggio rende il mare mosso: prenotare il mattino.",
        "Pochi servizi: portare contanti."
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
      'Un Pueblo Mágico sul Mar di Cortez fondato nel 1697 dai gesuiti, con la prima missione delle Californie e un parco nazionale marino dove d\'inverno passa la balenottera azzurra.',
    percheAndarci: 'Per la balenottera azzurra (metà gennaio-fine marzo), per le isole del parco e per la tranquillità del paese.',
    cosaVedere: [
      'La Misión de Nuestra Señora de Loreto',
      'Il Parque Nacional Bahía de Loreto e Isla Coronado',
      'La Misión de San Javier nella Sierra de la Giganta',
    ],
    cosaFare: [
      'Un\'uscita di circa cinque ore per la balenottera azzurra con lancheros autorizzati',
      'Snorkeling e spiaggia a Isla Coronado',
    ],
    doveDormire: 'Il centro storico vicino alla missione (fascia media 1.200-2.500 MXN); resort a Nopoló per la fascia alta.',
    doveMangiare: 'Pesce del giorno e almejas sul malecón.',
    comeArrivare: 'In auto da La Paz (4,5-5 ore) o da Bahía Magdalena (2,5-3 ore); piccolo aeroporto con voli soprattutto da Stati Uniti e Tijuana.',
    periodoMigliore: 'da metà gennaio a fine marzo per la balenottera azzurra.',
    costi: 'Uscita per la balenottera azzurra da circa 3.000 MXN a persona.',
    erroriDaEvitare: [
      'Arrivare a Loreto senza aver fatto benzina nel tratto da Ciudad Constitución',
      'Prenotare con operatori senza permesso del parco',
    ],
      "luoghi": [
        {
          "nome": "Misión de Nuestra Señora de Loreto",
          "testo": "La prima missione gesuita della Baja California, fondata nel 1697, con museo accanto alla chiesa.",
          "come": "A piedi dal centro.",
          "quando": "Mattina.",
          "tempo": "1 ora",
          "url": "https://www.inah.gob.mx/"
        },
        {
          "nome": "Parco Nazionale Bahía de Loreto e Isla Coronado",
          "testo": "Parco marino con isole, snorkeling e avvistamento di balene blu in stagione.",
          "come": "Barca da Loreto con operatore autorizzato.",
          "quando": "Mattina; mare calmo.",
          "tempo": "Giornata intera"
        },
        {
          "nome": "Misión San Javier",
          "testo": "Missione gesuita del 1699 nella Sierra de la Giganta, raggiunta da una strada sterrata fra montagne e canyon.",
          "come": "Auto o tour da Loreto (circa 1 ora e mezza).",
          "quando": "Mattina.",
          "tempo": "Mezza giornata",
          "consiglio": "Strada sterrata: serve un mezzo adatto."
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
          "nome": "Tacos di pesce",
          "testo": "Specialità di Baja."
        },
        {
          "nome": "Machaca",
          "testo": "Carne secca sfilacciata."
        },
        {
          "nome": "Almejas",
          "testo": "Vongole locali."
        },
        {
          "nome": "Dolci di datteri",
          "testo": "Prodotti della zona."
        }
      ],
      "attenzioni": [
        "La strada per San Javier è sterrata: valutare un mezzo adatto.",
        "Sole forte e caldo estivo: andare presto.",
        "Operatori autorizzati nel parco nazionale."
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
      'Un Pueblo Mágico sul Pacifico proprio sul Tropico del Cancro, con case coloniali, gallerie e caffè, e spiagge di surf come Playa Cerritos. Più tranquillo e meno caro di Los Cabos, a un\'ora di strada.',
    percheAndarci: 'Per una sosta lenta tra La Paz e Cabo, surf a Cerritos e le liberazioni di tartarughe in stagione.',
    cosaVedere: ['Il centro storico e le gallerie', 'Playa Cerritos', 'Le spiagge del Pacifico al tramonto'],
    cosaFare: ['Lezione di surf a Cerritos', 'Liberazione delle tartarughe con i progetti locali, nelle stagioni di schiusa'],
    doveDormire: 'Centro storico, con piccoli hotel di charme (2.000-5.000 MXN) e qualche guesthouse economica.',
    comeArrivare: 'In auto da La Paz (circa 1 ora) o da Cabo San Lucas (circa 1 ora).',
    periodoMigliore: 'da novembre ad aprile.',
    erroriDaEvitare: ['Nuotare sulle spiagge aperte del Pacifico fuori da Cerritos: correnti forti'],
      "luoghi": [
        {
          "nome": "Centro storico e gallerie",
          "testo": "Pueblo Mágico con case coloniali, gallerie d'arte, boutique e caffè.",
          "come": "A piedi.",
          "quando": "Mattina e sera.",
          "tempo": "Mezza giornata"
        },
        {
          "nome": "Playa Cerritos",
          "testo": "Spiaggia sul Pacifico con onde adatte al surf per principianti, scuole e noleggio tavole.",
          "come": "Auto o taxi da Todos Santos (circa 15 minuti).",
          "quando": "Mattina.",
          "tempo": "Mezza giornata",
          "consiglio": "Fuori da Cerritos le spiagge del Pacifico hanno correnti forti: non nuotare."
        },
        {
          "nome": "Liberazione delle tartarughe",
          "testo": "Progetti locali di tutela con liberazione dei piccoli nelle stagioni di schiusa.",
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
          "nome": "Tacos di pesce",
          "testo": "Di Baja."
        },
        {
          "nome": "Pesce alla griglia",
          "testo": "Fresco, sulla costa."
        },
        {
          "nome": "Cucina campesina",
          "testo": "Prodotti degli orti locali."
        },
        {
          "nome": "Caffè e dolci",
          "testo": "Nei caffè del centro."
        }
      ],
      "attenzioni": [
        "Nuotare sulle spiagge aperte del Pacifico fuori da Cerritos: correnti forti.",
        "Strada da La Paz e Cabo San Lucas: circa 1 ora.",
        "Le gallerie chiudono a ore variabili: controllare."
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
      'La punta della penisola, con due città molto diverse: Cabo San Lucas, turistica e notturna, con El Arco dove il Mar di Cortez incontra il Pacifico, e San José del Cabo, coloniale e tranquilla. A nord-est, Cabo Pulmo ha l\'unica barriera corallina dura del Golfo di California.',
    percheAndarci: 'Per le megattere (dicembre-aprile), El Arco e Cabo Pulmo, e per l\'aeroporto di rientro.',
    cosaVedere: ['El Arco e Playa del Amor', 'Il centro e il quartiere delle gallerie di San José del Cabo', 'Il parco nazionale di Cabo Pulmo'],
    cosaFare: [
      'Whale watching per le megattere',
      'L\'Art Walk del giovedì sera a San José del Cabo (novembre-giugno)',
      'Snorkeling a Cabo Pulmo con operatori del paese',
    ],
    doveDormire: 'San José del Cabo per la fascia media (1.800-3.500 MXN); il Corridor per i resort di fascia alta, spesso oltre 7.000 MXN; Cabo San Lucas per la vita notturna.',
    comeArrivare: 'Aeroporto di San José del Cabo (SJD), con voli per Città del Messico e diretti per gli Stati Uniti; in auto da Todos Santos (circa 1 ora).',
    periodoMigliore: 'da dicembre ad aprile per le megattere.',
    costi: 'Whale watching 1.000-2.000 MXN a persona.',
    erroriDaEvitare: [
      'Fermarsi con i venditori di multiproprietà in aeroporto e nella Marina',
      'Sottovalutare i prezzi, i più alti della Baja',
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
          "testo": "Centro coloniale con gallerie d'arte e l'Art Walk del giovedì sera (novembre-giugno).",
          "come": "Auto o bus da Cabo San Lucas (circa 30 minuti).",
          "quando": "Giovedì sera.",
          "tempo": "Mezza giornata"
        },
        {
          "nome": "Parco Nazionale Cabo Pulmo",
          "testo": "L'unica barriera corallina dura del Golfo di California, patrimonio UNESCO, per snorkeling e immersioni.",
          "come": "Auto da Los Cabos (circa 1,5-2 ore) e barca con operatore del paese.",
          "quando": "Mattina.",
          "tempo": "Giornata intera"
        },
        {
          "nome": "Whale watching delle megattere",
          "testo": "Avvistamento delle megattere nelle acque di Los Cabos.",
          "come": "Barca da Cabo San Lucas o San José del Cabo.",
          "quando": "Dicembre-aprile.",
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
            "Giorno 2: Cabo Pulmo o balene (dicembre-aprile)"
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
          "testo": "Di Baja."
        },
        {
          "nome": "Ceviche",
          "testo": "Fresco."
        },
        {
          "nome": "Aragosta",
          "testo": "Alla griglia, in stagione."
        },
        {
          "nome": "Margarita",
          "testo": "Bar e ristoranti sul mare."
        }
      ],
      "attenzioni": [
        "Cabo San Lucas è turistica e cara: confrontare i prezzi.",
        "Offerte di time share: rifiutare chi ferma per strada.",
        "Il Pacifico ha correnti forti: nuotare solo dove sicuro."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-cdmx-baja-california'],
    imageAlt: 'El Arco di Cabo San Lucas con una barca davanti alle rocce',
    immagine: '/images/viaggi/messico-cdmx-baja-california/giorno-14-los-cabos.jpg',
  },
]
