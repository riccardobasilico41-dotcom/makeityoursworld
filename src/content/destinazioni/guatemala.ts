import type { Destinazione } from '@/lib/types'

// Paese visitato di persona (prima parte dell'articolo centro-america-itinerario).
// I campi miaEsperienza sono in prima persona e tengono solo i fatti
// raccontati nell'articolo. Nessun nome di hotel, ristorante o operatore.

export const destinazioniGuatemala: Destinazione[] = [
  {
    slug: 'antigua-guatemala',
    paeseSlug: 'guatemala',
    ordine: 1,
    nome: 'Antigua Guatemala',
    tipologia: ['cultura', 'città'],
    giorniConsigliati: '2-3 giorni, più una notte extra se si fa il trekking all\'Acatenango',
    visitataPersonalmente: true,
    introduzione:
      'L\'ex capitale coloniale, patrimonio UNESCO: strade acciottolate, facciate color pastello, rovine di chiese distrutte dai terremoti e sullo sfondo tre vulcani, Agua, Fuego e Acatenango.',
    percheAndarci:
      'È la base di quasi ogni viaggio in Guatemala: è a un\'ora dall\'aeroporto della capitale, ha shuttle per ogni altra tappa del paese e da qui partono i trekking sui vulcani.',
    cosaVedere: [
      'L\'Arco di Santa Catalina, con il vulcano Agua incorniciato sullo sfondo',
      'Le rovine del Convento di Santa Clara e della chiesa di La Merced',
      'Il Cerro de la Cruz, punto panoramico sulla città e sui vulcani (salita breve, meglio in gruppo o con la polizia turistica)',
      'Il mercato municipale e il mercato dell\'artigianato',
    ],
    cosaFare: [
      'Trekking di due giorni all\'Acatenango per vedere dal campo le eruzioni del Fuego (vedi la scheda esperienza dedicata)',
      'Corso di cucina guatemalteca o di cioccolato (ChocoMuseo e altre scuole in centro)',
      'Salita al vulcano Pacaya in mezza giornata, opzione più breve rispetto all\'Acatenango',
      'Giornata a Chichicastenango il giovedì o la domenica, per il mercato indigeno più grande del paese',
    ],
    doveDormire:
      'Gli alloggi sono tutti nel centro storico, a pochi isolati dal Parque Central: dagli ostelli con terrazza sul tetto alle case coloniali diventate boutique hotel.',
    doveMangiare:
      'Antigua ha la cucina più internazionale del paese ed è l\'unica città guatemalteca dove si spende come in Europa senza accorgersene. Per evitarlo c\'è il mercato municipale a mezzogiorno, dove il menú del día (zuppa, piatto, tortillas, bibita) costa pochi quetzal. Da provare il pepián, lo stufato di carne con salsa di semi tostati che è il piatto nazionale, i rellenitos di platano come dolce da strada e il caffè: il Guatemala ne produce uno dei migliori al mondo, e qui si beve nelle torrefazioni che lo tostano sul posto.',
    comeSpostarsi: 'Il centro si gira tutto a piedi; per le altre tappe del paese ci sono shuttle turistici, prenotabili in qualsiasi agenzia del centro.',
    periodoMigliore: 'novembre-aprile; la Semana Santa (marzo-aprile) porta le processioni più famose dell\'America Latina, ma anche prezzi e folla molto più alti',
    erroriDaEvitare: [
      'Salire al Cerro de la Cruz da soli e fuori dagli orari di presidio della polizia turistica',
      'Sottovalutare il freddo notturno al campo dell\'Acatenango (quasi 4.000 m): servono strati veri, non solo una felpa',
    ],
    miaEsperienza:
      'Siamo arrivati ad Antigua nel primo pomeriggio e la prima passeggiata fra le strade acciottolate l\'abbiamo fatta con i vulcani Agua, Fuego e Acatenango in fondo a ogni via. Il giorno dopo abbiamo girato il centro storico, dall\'Arco di Santa Catalina alle chiese in rovina, e siamo saliti al Cerro de la Cruz per il panorama. Quello che mi resta è l\'Acatenango: cinque-sei ore di salita fra i campi di mais e la pineta, sulla sabbia vulcanica che cede sotto i piedi, il tratto più faticoso di tutto il viaggio. Il campo era sopra le nuvole, il Fuego ha cominciato a eruttare prima del tramonto e di notte lo vedevamo buttare lava a un paio di chilometri senza uscire dal sacco a pelo, con un freddo vicino allo zero. La mattina siamo scesi scivolando sulla sabbia più che camminando. La lista delle cose fatte in Centro America comincia da lì.',
      "sapori": [
        {
          "nome": "Pepián",
          "testo": "Stufato di carne con semi di zucca, sesamo e peperoncino, il piatto nazionale. Nei comedor e nei ristoranti tipici."
        },
        {
          "nome": "Tamales",
          "testo": "Avvolti nelle foglie, rossi o neri, si trovano nei mercati, nei comedor e alle feste di famiglia."
        },
        {
          "nome": "Hilachas",
          "testo": "Carne sfilacciata in salsa di pomodoro e tomatillo, con patate. Piatto di famiglia."
        },
        {
          "nome": "Cioccolato guatemalteco",
          "testo": "Tazze di cioccolato e tavolette lavorate in città, venduto in negozi specializzati."
        }
      ],
      "attenzioni": [
        "Salita al Cerro de la Cruz: meglio in gruppo e di giorno.",
        "Per l'Acatenango scegliere operatori seri: il Foreign Office britannico avverte che gli organizzatori locali tendono a sottovalutare i rischi, che ci sono stati morti e che non esiste un soccorso alpino.",
        "Il Fuego è attivo: prima di partire controllare i bollettini di CONRED e INSIVUMEH e seguire sempre la guida."
      ],
    comeArrivare: "Volo su Città del Guatemala (GUA), poi circa 1 ora di shuttle o taxi privato fino ad Antigua. Dall'aeroporto La Aurora servono 1-1 ora e mezza secondo il traffico: lo shuttle condiviso costa circa 18-20 USD a persona e va prenotato, il transfer privato circa 65-85 USD a veicolo; Uber funziona dall'aeroporto. Da evitare i taxi non registrati e la strada di notte. Gli shuttle turistici per il lago Atitlán (circa 3 ore) e per Chichicastenango si prenotano in qualsiasi agenzia del centro.",
    costi: "fra le città più care del Guatemala, ma economica per gli standard europei; il trekking all'Acatenango parte da circa 60€ con l'attrezzatura inclusa. Indicativamente 1 € = 8-9 GTQ. Budget a persona al giorno: basso 30-45 € (ostello, menú del día al mercato, shuttle condivisi); medio 70-110 € (hotel in casa coloniale, ristoranti, una rovina o un laboratorio di cioccolato); alto da 180 € (hotel in un convento restaurato, transfer privati). L'ingresso al parco dell'Acatenango si paga in contanti al punto di partenza (dal viaggio).",
    luoghi: [
      {
        "nome": "Arco de Santa Catalina",
        "testo": "L'arco giallo barocco del 1693 sulla 5ª Avenida Norte, costruito perché le suore di clausura del convento di Santa Catalina passassero da un edificio all'altro senza uscire in strada. Con il vulcano Agua sullo sfondo è la foto simbolo della città.",
        "come": "A piedi dalla piazza centrale, pochi minuti. Ingresso libero, è una strada.",
        "quando": "Mattina presto, prima delle otto, senza folla e con il vulcano limpido.",
        "tempo": "15 minuti",
        "costo": "Ingresso libero",
        "lat": 14.55961,
        "lng": -90.73414
      },
      {
        "nome": "Parque Central e Palacio de los Capitanes Generales",
        "testo": "La piazza centrale con la fontana delle sirene e gli alberi, chiusa sul lato sud dal lungo porticato del Palacio de los Capitanes Generales, sede del governo coloniale del Centro America. È il punto da cui si contano tutti gli isolati della città.",
        "come": "A piedi; la piazza è libera.",
        "quando": "Mattina presto o sera, quando si riempie di famiglie e venditori.",
        "tempo": "30 minuti",
        "costo": "Ingresso libero",
        "lat": 14.55683,
        "lng": -90.73373
      },
      {
        "nome": "Catedral de San José e le rovine",
        "testo": "La cattedrale sul lato est del Parque Central: davanti la chiesa ancora in uso, dietro le navate crollate con i terremoti del Settecento, a cielo aperto fra colonne e cupole spezzate.",
        "come": "La chiesa si visita liberamente; alle rovine sul retro si entra da un accesso separato con biglietto.",
        "quando": "Mattina.",
        "tempo": "45 minuti",
        "lat": 14.55673,
        "lng": -90.73292
      },
      {
        "nome": "Convento di Santa Clara e La Merced",
        "testo": "Chiese e conventi coloniali rovinati dai terremoti del Settecento, soprattutto quelli di Santa Marta del 1773, dopo i quali la capitale fu spostata. Antigua è patrimonio UNESCO dal 1979 per questo insieme.",
        "come": "A piedi nel centro. Le rovine di Santa Clara hanno un biglietto d'ingresso; La Merced è una chiesa ancora in uso.",
        "quando": "Mattina; la luce del pomeriggio è buona sulla facciata di La Merced.",
        "tempo": "2-3 ore per entrambe",
        "lat": 14.55506,
        "lng": -90.73094,
        "url": "https://inguat.gob.gt/"
      },
      {
        "nome": "Convento de las Capuchinas",
        "testo": "Il convento settecentesco delle suore cappuccine, fra le rovine meglio conservate della città, con il chiostro, le fontane e la torre circolare delle celle al piano di sotto. Rende bene l'idea della vita di clausura.",
        "come": "A piedi, a pochi isolati a nord-est del Parque Central; biglietto all'ingresso.",
        "quando": "Mattina.",
        "tempo": "1 ora",
        "lat": 14.55968,
        "lng": -90.73114
      },
      {
        "nome": "San Francisco El Grande e il Santo Hermano Pedro",
        "testo": "La grande chiesa francescana a sud del centro, con la tomba del Santo Hermano Pedro, il primo santo del Centro America, meta di pellegrini. Accanto ci sono le rovine del convento e un piccolo museo.",
        "come": "A piedi, una decina di minuti dal Parque Central.",
        "quando": "Mattina, meno affollata che nel fine settimana.",
        "tempo": "1 ora",
        "lat": 14.55348,
        "lng": -90.72967
      },
      {
        "nome": "Casa Santo Domingo",
        "testo": "L'ex convento domenicano trasformato in hotel, con fra le rovine diversi piccoli musei di arte coloniale, argenteria e archeologia, cripte e giardini. Si visita anche senza dormirci.",
        "come": "A piedi, nella parte est del centro; i musei hanno un biglietto.",
        "quando": "Pomeriggio.",
        "tempo": "1,5 ore",
        "lat": 14.5593,
        "lng": -90.72831
      },
      {
        "nome": "Iglesia y Convento de la Recolección",
        "testo": "Le rovine monumentali della chiesa dei Recoletos, con enormi blocchi di muratura caduti com'erano dopo il terremoto del 1773. È una delle rovine più impressionanti e meno affollate.",
        "come": "A piedi, all'estremo ovest del centro, vicino al mercato; biglietto all'ingresso.",
        "quando": "Mattina o tardo pomeriggio.",
        "tempo": "45 minuti",
        "lat": 14.56077,
        "lng": -90.74099
      },
      {
        "nome": "Cerro de la Cruz",
        "testo": "Un belvedere in collina con la città in primo piano e i vulcani Agua, Fuego e Acatenango dietro. Si raggiunge con una breve salita.",
        "come": "A piedi dal centro con una breve salita, meglio in gruppo e di giorno.",
        "quando": "Mattina presto o tardo pomeriggio.",
        "tempo": "1 ora",
        "lat": 14.56453,
        "lng": -90.73173,
        "consiglio": "Non salire da soli e non portare oggetti di valore."
      },
      {
        "nome": "Mercato municipale e mercato dell'artigianato",
        "testo": "Il mercato accanto alla stazione degli autobus, con frutta, tessuti e i banchi dove si mangia il menú del día a pochi quetzal; poco più in là il mercato dell'artigianato. Si vede la città di chi ci vive, non solo quella dei turisti.",
        "come": "A piedi, sul lato ovest del centro.",
        "quando": "Mattina, quando arrivano i produttori.",
        "tempo": "1-2 ore",
        "costo": "Ingresso libero",
        "lat": 14.55848,
        "lng": -90.73923,
        "consiglio": "Contanti in piccolo taglio e attenzione agli zaini fra la folla."
      },
      {
        "nome": "Tanque La Unión",
        "testo": "I lavatoi coloniali pubblici sotto i portici, davanti alla chiesa di Santa Clara, dove ancora oggi qualcuno lava i panni. La piazzetta alberata è un posto tranquillo per fermarsi.",
        "come": "A piedi dal centro.",
        "quando": "Mattina.",
        "tempo": "20 minuti",
        "costo": "Ingresso libero",
        "lat": 14.55522,
        "lng": -90.73121
      },
      {
        "nome": "Vulcano Acatenango",
        "testo": "Salita con campo base sopra le nuvole, davanti al Fuego che erutta. Il tratto più duro del viaggio in Guatemala.",
        "come": "Tour di due giorni da Antigua con guida, tenda e pasti. Si sale per diverse ore fra campi di mais, pineta e sabbia vulcanica.",
        "quando": "Stagione secca (novembre-aprile); la mattina dopo si scende sulla sabbia. Il sentiero può chiudere per l'attività del Fuego o il maltempo (nel 2026 ha riaperto ad agosto dopo una chiusura): verificare prima.",
        "tempo": "2 giorni, 1 notte",
        "costo": "Da circa 60 € con l'attrezzatura inclusa; l'ingresso al parco si paga in contanti al punto di partenza (dal viaggio).",
        "lat": 14.50083,
        "lng": -90.87583,
        "consiglio": "Di notte al campo fa freddo, spesso vicino allo zero: guanti, berretto, strati caldi e impermeabile. La discesa scivola più che camminare. Per l'Acatenango consiglio OX Expeditions, ad Antigua: sono bravissimi e mi sono trovato molto bene con loro."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Arco di Santa Catalina e rovine di La Merced",
          "Parque Central, Cattedrale e Palacio de los Capitanes Generales",
          "Mercato municipale e pranzo",
          "Pomeriggio: Convento di Santa Clara o Capuchinas",
          "Tramonto al Cerro de la Cruz, in gruppo"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: centro storico e Cerro de la Cruz",
          "Giorno 2: Acatenango (2 giorni totali con la notte al campo)"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: città e rovine",
          "Giorni 2-3: Acatenango con notte al campo",
          "Se resta tempo, un laboratorio di cioccolato o di giada in città"
        ]
      },
      {
        "titolo": "4 giorni",
        "tappe": [
          "Giorni 1-3 come sopra",
          "Giorno 4: San Francisco El Grande, La Recolección e Casa Santo Domingo, oppure il mercato di Chichicastenango se è giovedì o domenica"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro storico",
        "perChi": "chi vuole stare a piedi da tutto",
        "testo": "Strade acciottolate, tutto vicino, ma rumore il fine settimana e prezzi più alti. Dagli ostelli con terrazza sul tetto alle case coloniali diventate boutique hotel.",
        "fascia": "40-180 €"
      },
      {
        "nome": "Zone ai margini del centro storico",
        "perChi": "chi cerca più calma",
        "testo": "Più tranquille di notte, a breve distanza a piedi dal centro."
      },
      {
        "nome": "Conventi e case coloniali di lusso",
        "perChi": "fascia alta",
        "testo": "Hotel ricavati da ex conventi e grandi case con patio, giardini e piscina, nel centro storico.",
        "fascia": "da 200 €"
      }
    ],
    gite: [
      {
        "nome": "Vulcano Pacaya",
        "distanza": "circa 1,5 ore di strada",
        "come": "Tour di mezza giornata da Antigua, con partenza al mattino o nel primo pomeriggio.",
        "testo": "Salita più breve e facile dell'Acatenango, fra campi di lava recente: l'alternativa per chi ha poco tempo o non vuole la notte in quota."
      },
      {
        "nome": "Chichicastenango",
        "distanza": "circa 3 ore di shuttle",
        "come": "Shuttle turistico da prenotare in agenzia; molti proseguono per Panajachel nello stesso giorno.",
        "testo": "Il mercato indigeno più grande dell'America Centrale, solo il giovedì e la domenica, con la chiesa di Santo Tomás e i riti maya sulla scalinata. Servono quetzales in piccolo taglio."
      },
      {
        "nome": "San Juan del Obispo",
        "distanza": "circa 15-20 minuti",
        "come": "Tuk tuk o chicken bus dal mercato.",
        "testo": "Il paese sulle pendici del vulcano Agua, con il palazzo del primo vescovo del Guatemala e i laboratori di cioccolato e nespole; più in alto i belvedere sulla valle."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono ad Antigua?",
        "risposta": "Due o tre giorni per la città, più una notte extra se si fa l'Acatenango: il trekking occupa due giorni interi."
      },
      {
        "domanda": "Come si va dall'aeroporto ad Antigua?",
        "risposta": "Con lo shuttle condiviso, circa 18-20 USD a persona da prenotare, o con un transfer privato, circa 65-85 USD a veicolo; Uber funziona. Il viaggio dura 1-1 ora e mezza; meglio non viaggiare di notte."
      },
      {
        "domanda": "Con chi fare l'Acatenango?",
        "risposta": "Con un'agenzia di Antigua che includa guida, tenda, pasti e attrezzatura, da prenotare qualche giorno prima; il prezzo parte da circa 60 €. Per l'Acatenango consiglio OX Expeditions, ad Antigua: sono bravissimi e mi sono trovato molto bene con loro."
      },
      {
        "domanda": "Acatenango o Pacaya?",
        "risposta": "L'Acatenango è un trekking di due giorni con notte al campo davanti al Fuego in eruzione, molto faticoso; il Pacaya si sale in mezza giornata ed è adatto a chi ha poco tempo."
      },
      {
        "domanda": "Antigua è sicura?",
        "risposta": "Il centro è tranquillo, con la polizia turistica in giro. Le attenzioni sono il Cerro de la Cruz, da salire in gruppo e di giorno, i prelievi solo negli sportelli dentro banche o centri commerciali e la strada dall'aeroporto di notte."
      },
      {
        "domanda": "Quando conviene andare?",
        "risposta": "Nella stagione secca, da novembre ad aprile, quando i vulcani si vedono meglio. La Semana Santa ha le processioni più celebri dell'America Latina, ma prezzi e folla molto più alti."
      }
    ],
    esperienzeSlugs: ['trekking-acatenango'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Strada acciottolata di Antigua Guatemala con case coloniali e il vulcano Agua sullo sfondo',
    immagine: '/images/guatemala/antigua-guatemala.jpg',
  },
  {
    slug: 'lago-atitlan',
    paeseSlug: 'guatemala',
    ordine: 2,
    nome: 'Lago Atitlán',
    tipologia: ['natura', 'cultura'],
    giorniConsigliati: '2-4 giorni, a seconda di quanti villaggi si vogliono vedere',
    visitataPersonalmente: true,
    introduzione:
      'Un lago dentro una caldera vulcanica, circondato da tre vulcani e da una decina di villaggi maya molto diversi, collegati quasi solo in barca.',
    percheAndarci:
      'Qui il Guatemala rallenta. Ogni villaggio sul lago ha un carattere suo (c\'è chi viene per lo yoga, chi per le scuole di spagnolo, chi per la vita tradizionale tzutuhil e kaqchikel) e la base si sceglie secondo il ritmo che si cerca.',
    cosaVedere: [
      'Panajachel, il paese d\'arrivo e nodo dei trasporti, con la Calle Santander piena di artigianato',
      'San Juan la Laguna, il villaggio più curato, noto per le cooperative tessili e i murales',
      'San Marcos la Laguna, il paese dello yoga e delle discipline olistiche, con la piattaforma dei tuffi di Cerro Tzankujil',
      'Santiago Atitlán, il villaggio più grande e tradizionale, dove si venera la figura sincretica di Maximón',
      'La Riserva Naturale Atitlán vicino a Panajachel',
    ],
    cosaFare: [
      'Giro dei villaggi in lancha, le barche pubbliche condivise (vedi la scheda esperienza dedicata)',
      'Alba dall\'Indian Nose, il punto panoramico sulla caldera (partenza notturna con guida)',
      'Kayak o SUP sul lago nelle prime ore del mattino, quando l\'acqua è ferma',
      'Corso di spagnolo a San Pedro la Laguna, fra i più economici dell\'America Latina',
    ],
    doveDormire:
      'La base cambia il viaggio: Panajachel per la comodità dei trasporti, San Pedro per i prezzi bassi e la compagnia, San Marcos per la calma e il lato olistico, Santa Cruz per gli hotel sull\'acqua raggiungibili solo in barca.',
    doveMangiare:
      'Sul lago si mangia bene sapendo due cose: il pesce è quasi sempre tilapia d\'allevamento, non pescato del lago, e i ristoranti con vista costano il doppio di quelli a un isolato dall\'acqua. San Juan la Laguna ha cooperative di caffè che servono anche da mangiare ed è il posto più curato; a San Marcos, per la comunità che ci vive, domina la cucina vegetariana. Per mangiare come la gente del posto, il mercato di Panajachel al mattino: churrasco, tamales e caldo de pollo a pochi quetzal.',
    comeSpostarsi: 'Lance pubbliche fra i villaggi (pochi euro a tratta, partono quando sono piene, fino al tramonto); tuk tuk dentro i paesi.',
    periodoMigliore: 'novembre-aprile; in ogni stagione, dopo mezzogiorno, il vento Xocomil rende le traversate più mosse',
    erroriDaEvitare: [
      'Programmare le traversate nel pomeriggio: il vento Xocomil si alza quasi ogni giorno e rende la navigazione scomoda',
      'Fermarsi solo a Panajachel: è il nodo dei trasporti, non il villaggio più interessante del lago',
      'Salire all\'Indian Nose senza guida al buio',
    ],
    miaEsperienza:
      'Panajachel è il nodo dei trasporti, con la Calle Santander piena di artigianato, ma fermarsi solo lì è l\'errore più comune: il lago comincia quando si sale su una lancha. In una giornata abbiamo toccato San Juan la Laguna, con le cooperative tessili e i murales, San Marcos, il paese dello yoga, e San Pedro, e ogni dieci minuti di barca cambiava l\'atmosfera. Il giorno dopo ci siamo svegliati alle quattro per l\'Indian Nose e poi abbiamo preso la lancha per Santiago Atitlán, dove le donne portano ancora il tocoyal avvolto in testa. Abbiamo imparato in fretta a muoverci al mattino, perché dal primo pomeriggio si alza lo Xocomil e le traversate diventano mosse. L\'alba dall\'Indian Nose vale la sveglia solo col cielo sereno: nella stagione delle piogge si sale al buio per guardare una nuvola.',
      "sapori": [
        {
          "nome": "Pepián e caldo di pollo",
          "testo": "Piatti caldi nelle comedor sul lago, dopo una mattina in barca."
        },
        {
          "nome": "Pesce del lago",
          "testo": "Pesce fritto, spesso tilapia d'allevamento, nei comedor in riva al lago."
        },
        {
          "nome": "Tortillas e frijoles",
          "testo": "La base di ogni pasto, nei comedor di villaggio."
        },
        {
          "nome": "Caffè di Atitlán",
          "testo": "Caffè coltivato sulle pendici del lago, da assaggiare nei piccoli caffè locali."
        }
      ],
      "attenzioni": [
        "Muoversi sul lago la mattina: dal primo pomeriggio si alza lo Xocomil e le traversate sono mosse.",
        "Usare le lancha pubbliche ufficiali e concordare il prezzo prima di salire.",
        "Il Foreign Office britannico segnala rapine sulle strade turistiche del paese, compresa la zona del lago: muoversi di giorno, in gruppo o con operatori seri. A San Pedro la Laguna tenere con sé il passaporto o una copia autenticata."
      ],
    comeArrivare: "Shuttle turistico da Antigua (circa 3 ore) o da Città del Guatemala; in alternativa chicken bus con cambio a Los Encuentros. Molti shuttle da Antigua passano per Chichicastenango il giovedì e la domenica, i giorni del mercato, e proseguono per Panajachel nello stesso giorno: circa tre ore fino a Chichi, poi un'ora e mezza fino al lago. Gli shuttle arrivano a Panajachel; da lì si prende la lancha per San Pedro, San Marcos o Santa Cruz. Verso Lanquín e Semuc Champey ci vogliono 7-9 ore di shuttle, con l'ultimo tratto sterrato.",
    costi: "lance 10-25 GTQ a tratta secondo la distanza; alloggi tra i più economici del paese. All'Indian Nose si paga una piccola tassa alla comunità; per la casa di Maximón a Santiago si lascia un'offerta di pochi quetzales (dal viaggio). Budget indicativo a persona al giorno: basso 25-40 € (ostello a San Pedro, comedores, lance pubbliche); medio 60-100 € (hotel con vista a Panajachel o San Marcos, guida per l'Indian Nose, un corso o un kayak); alto da 150 € (hotel sull'acqua a Santa Cruz o sopra Panajachel, lance private).",
    luoghi: [
      {
        "nome": "Panajachel e Calle Santander",
        "testo": "Il paese d'arrivo e nodo dei trasporti, con la Calle Santander che scende al lago piena di bancarelle di artigianato, agenzie e ristoranti. Non è il villaggio più interessante, ma qui ci si orienta e partono quasi tutte le lance.",
        "come": "Shuttle da Antigua; si gira a piedi o in tuk tuk.",
        "quando": "Sera, per la passeggiata sul lungolago.",
        "tempo": "2 ore",
        "costo": "Ingresso libero",
        "lat": 14.74176,
        "lng": -91.15842,
        "consiglio": "Fermarsi solo qui è l'errore più comune: il lago comincia quando si sale su una lancha."
      },
      {
        "nome": "San Juan la Laguna",
        "testo": "Un villaggio curato, con cooperative tessili di donne, murales sulle facciate e atelier d'arte. Le cooperative mostrano come si filano e si tingono i fili con colori naturali.",
        "come": "In lancha pubblica da Panajachel o San Pedro, poi si cammina nelle stradine.",
        "quando": "Mattina, quando le cooperative sono aperte.",
        "tempo": "2-3 ore",
        "lat": 14.7,
        "lng": -91.28333,
        "consiglio": "Comprare nelle cooperative, dove il ricavato va alle tessitrici."
      },
      {
        "nome": "San Marcos la Laguna",
        "testo": "Il paese dello yoga e delle pratiche olistiche. Sul lungolago c'è la piattaforma per i tuffi di Cerro Tzankujil, la riserva naturale del paese.",
        "come": "In lancha da Panajachel o San Pedro.",
        "quando": "Mattina, con il lago più calmo.",
        "tempo": "Mezza giornata",
        "lat": 14.72483,
        "lng": -91.25888
      },
      {
        "nome": "San Pedro la Laguna",
        "testo": "Il villaggio più vivace del lago, fra ostelli, bar, scuole di spagnolo tra le più economiche dell'America Latina e il paese tz'utujil che sale sulla collina. Ai piedi del vulcano San Pedro.",
        "come": "In lancha da Panajachel, o a piedi da San Juan in una ventina di minuti.",
        "quando": "Pomeriggio e sera.",
        "tempo": "Mezza giornata",
        "lat": 14.69177,
        "lng": -91.273
      },
      {
        "nome": "Santiago Atitlán",
        "testo": "Un grande paese tz'utujil e molto tradizionale, dove alcune donne portano ancora il tocoyal avvolto in testa e si venera Maximón, figura sincretica. C'è un mercato vivo e la chiesa di Santiago Apóstol, con le statue dei santi vestite dalla comunità.",
        "come": "In lancha pubblica da Panajachel o San Pedro, circa mezz'ora.",
        "quando": "Mattina.",
        "tempo": "Mezza giornata",
        "costo": "Offerta di pochi quetzales per la casa di Maximón (dal viaggio)",
        "lat": 14.63855,
        "lng": -91.22992,
        "consiglio": "Prima di fotografare persone o la figura di Maximón, chiedere sempre il permesso e lasciare una piccola offerta."
      },
      {
        "nome": "Indian Nose (Rostro Maya)",
        "testo": "Un belvedere sopra San Juan la Laguna, per l'alba sul lago e sui vulcani Atitlán, Tolimán e San Pedro.",
        "come": "Sveglia prima dell'alba, trasferimento e circa un'ora di cammino ripido al buio con una guida del posto, da San Juan o da Santa Clara.",
        "quando": "Alba, con cielo sereno.",
        "tempo": "Mezza mattina",
        "costo": "Piccola tassa alla comunità in cima; prezzo della guida da fissare il giorno prima (dal viaggio).",
        "lat": 14.69921,
        "lng": -91.28988,
        "consiglio": "Nella stagione delle piogge si sale al buio per guardare una nuvola: controllare le previsioni."
      },
      {
        "nome": "Vulcano San Pedro",
        "testo": "Il vulcano sopra San Pedro la Laguna, alto circa 3.000 metri, che si sale in giornata fra campi di caffè e foresta nuvolosa. Dalla cima si vede tutto il lago.",
        "come": "Con una guida da San Pedro, partendo all'alba.",
        "quando": "Stagione secca, mattina presto prima delle nuvole.",
        "tempo": "Giornata",
        "lat": 14.65583,
        "lng": -91.26583,
        "consiglio": "Solo con guida autorizzata, mai da soli sul sentiero."
      },
      {
        "nome": "Riserva Natural Atitlán",
        "testo": "Riserva privata appena fuori Panajachel, con sentieri e ponti sospesi fra cascate e piantagioni di caffè, un farfallario e le zip line sopra le scogliere del lago.",
        "come": "A piedi o in tuk tuk da Panajachel, pochi minuti.",
        "quando": "Mattina.",
        "tempo": "2-3 ore",
        "orari": "Aperta dalle 8 alle 17 (sito ufficiale).",
        "lat": 14.75084,
        "lng": -91.16582,
        "url": "https://www.atitlanreserva.com/"
      },
      {
        "nome": "Santa Cruz la Laguna",
        "testo": "Il villaggio sulla collina sopra la riva nord, con gli hotel sull'acqua raggiungibili solo in barca e un'acqua ferma e trasparente per il kayak. Il paese vero è in alto, a un quarto d'ora di salita.",
        "come": "In lancha da Panajachel, circa 15 minuti.",
        "quando": "Mattina presto, con il lago fermo.",
        "tempo": "Mezza giornata",
        "lat": 14.74417,
        "lng": -91.20722
      },
      {
        "nome": "Santa Catarina Palopó",
        "testo": "Il paese sulla riva est a pochi chilometri da Panajachel, con le facciate dipinte di motivi geometrici blu e turchesi ispirati ai huipiles delle donne. Un progetto collettivo che ha cambiato l'aspetto del villaggio.",
        "come": "Tuk tuk o pick-up da Panajachel, circa 15 minuti.",
        "quando": "Mattina o primo pomeriggio.",
        "tempo": "1-2 ore",
        "lat": 14.71667,
        "lng": -91.13333
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina presto: Indian Nose oppure lancha per San Juan la Laguna",
          "San Marcos per un tuffo a Cerro Tzankujil e pranzo",
          "Rientro prima del vento del pomeriggio (Xocomil)"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: San Juan la Laguna, San Marcos e San Pedro in lancha",
          "Giorno 2: Indian Nose all'alba, poi Santiago Atitlán"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1 e 2 come sopra",
          "Giorno 3: riserva naturale di Atitlán vicino a Panajachel e Santa Catarina Palopó, o kayak a Santa Cruz"
        ]
      }
    ],
    zone: [
      {
        "nome": "Panajachel",
        "perChi": "nodo dei trasporti, prime notti",
        "testo": "Servizi, ristoranti, Calle Santander piena di artigianato. Meno atmosfera del resto del lago.",
        "fascia": "35-120 €"
      },
      {
        "nome": "San Pedro la Laguna",
        "perChi": "budget e vita serale",
        "testo": "Economico, giovane, rumoroso la sera.",
        "fascia": "10-60 €"
      },
      {
        "nome": "San Marcos e San Juan",
        "perChi": "calma e benessere",
        "testo": "Più tranquilli e più cari; per yoga, silenzio e arte."
      },
      {
        "nome": "Santa Cruz la Laguna",
        "perChi": "hotel sull'acqua",
        "testo": "Pochi hotel sulla riva raggiungibili solo in barca, molto tranquilli; la sera si cena dove si dorme."
      }
    ],
    gite: [
      {
        "nome": "Chichicastenango",
        "distanza": "circa 1 ora e mezza da Panajachel",
        "come": "Shuttle o chicken bus via Los Encuentros.",
        "testo": "Il mercato indigeno più grande dell'America Centrale, solo il giovedì e la domenica, con la chiesa di Santo Tomás e i riti maya sulla scalinata."
      },
      {
        "nome": "Iximché",
        "distanza": "indicativamente 1-1,5 ore da Panajachel, vicino a Tecpán",
        "come": "Auto o tour; con i bus si cambia a Los Encuentros e a Tecpán.",
        "testo": "Le rovine dell'antica capitale kaqchikel, su un altopiano fra burroni e pinete, dove ancora oggi si celebrano cerimonie maya."
      }
    ],
    faq: [
      {
        "domanda": "Dove conviene dormire sul lago Atitlán?",
        "risposta": "Panajachel per la comodità dei trasporti, San Pedro per i prezzi bassi e la compagnia, San Marcos per la calma e il lato olistico, Santa Cruz per gli hotel sull'acqua raggiungibili solo in barca."
      },
      {
        "domanda": "Quanti giorni servono?",
        "risposta": "Due giorni per i villaggi principali e l'Indian Nose; con tre o quattro si aggiungono il vulcano San Pedro, la riserva naturale o una giornata di pausa."
      },
      {
        "domanda": "Come ci si muove fra i villaggi?",
        "risposta": "Con le lance pubbliche, 10-25 GTQ a tratta, che partono quando sono piene fino al tramonto; dentro i paesi in tuk tuk."
      },
      {
        "domanda": "Quando il lago è più calmo?",
        "risposta": "Al mattino: dal primo pomeriggio si alza lo Xocomil, il vento che rende le traversate mosse. Conviene fare gli spostamenti in barca entro mezzogiorno."
      },
      {
        "domanda": "Vale la pena l'alba all'Indian Nose?",
        "risposta": "Sì, ma solo con il cielo sereno: nella stagione delle piogge si sale al buio per trovare le nuvole. Si parte verso le 4 con una guida del posto."
      },
      {
        "domanda": "Ci si può fare il bagno nel lago?",
        "risposta": "Sì, nei punti puliti lontano dai paesi più grandi; il posto più noto è la piattaforma dei tuffi di Cerro Tzankujil a San Marcos."
      }
    ],
    esperienzeSlugs: ['lance-villaggi-atitlan'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Le acque blu del lago Atitlán con i vulcani sullo sfondo, visti da San Marcos La Laguna, Guatemala',
    immagine: '/images/guatemala/lago-atitlan.jpg',
  },
  {
    slug: 'tikal-flores',
    paeseSlug: 'guatemala',
    ordine: 3,
    nome: 'Tikal e Flores',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: '2-3 giorni, di cui uno intero dedicato a Tikal',
    visitataPersonalmente: true,
    introduzione:
      'Il più grande sito maya del Guatemala, nella giungla del Petén: templi alti oltre 60 metri che spuntano sopra la volta della foresta, fra i versi delle scimmie urlatrici e dei tucani. La base per visitarlo è l\'isola di Flores, sul lago Petén Itzá.',
    percheAndarci:
      'A differenza di altri siti maya, Tikal è dentro una foresta viva: gli animali fanno parte della visita quanto le piramidi, e la vista dal Tempio IV sopra la giungla è una delle più celebri della Mesoamerica.',
    cosaVedere: [
      'La Gran Plaza con i Templi I (del Gran Giaguaro) e II',
      'Il Tempio IV, il più alto del sito, con la piattaforma panoramica sopra la foresta',
      'Il Mundo Perdido, il complesso più antico del sito',
      'L\'isola di Flores, con le sue case colorate e il lungolago',
      'Il sito minore di Yaxhá, molto meno affollato e ideale per il tramonto',
    ],
    cosaFare: [
      'Visita di Tikal all\'alba, con il biglietto speciale per l\'ingresso anticipato (vedi la scheda esperienza dedicata)',
      'Giro in barca sul lago Petén Itzá al tramonto',
      'Escursione a Yaxhá, raggiungibile in giornata da Flores',
    ],
    doveDormire:
      'Flores (isola) per l\'atmosfera e i collegamenti; El Remate come alternativa più tranquilla a metà strada verso Tikal; esistono anche pochi hotel dentro il parco, comodi per essere ai cancelli all\'apertura.',
    doveMangiare:
      'Nel Petén si trovano piatti che nel resto del Guatemala non ci sono: il pesce bianco del lago Petén Itzá alla griglia e, nei locali più tradizionali, la selvaggina. Sull\'isola di Flores i ristoranti sul lungolago hanno il tramonto e prezzi da turista; un isolato più su, nelle strade interne, ci sono i comedor dove si spende un terzo. Dentro il parco di Tikal c\'è poco e costa caro: conviene portarsi il pranzo e soprattutto molta acqua.',
    comeSpostarsi: 'Navette organizzate Flores-Tikal (per l\'alba partono molto presto); dentro il sito ci si muove solo a piedi, su diversi chilometri di sentieri.',
    periodoMigliore: 'novembre-aprile per i sentieri asciutti; la nebbia mattutina in stagione secca può però coprire il panorama dal Tempio IV',
    erroriDaEvitare: [
      'Comprare il biglietto per l\'alba aspettandosi un\'alba garantita: nella stagione secca la foschia sopra la giungla è frequente',
      'Sottovalutare le distanze dentro il sito: si camminano diversi chilometri con caldo e umidità alti',
      'Programmare Tikal come gita in giornata da Antigua: la distanza richiede volo o bus notturno',
    ],
    miaEsperienza:
      'Siamo partiti da Flores verso le tre del mattino e abbiamo camminato al buio fino al Tempio IV con la guida. L\'alba, nella stagione secca, è spesso velata dalla foschia; quello che vale la sveglia è il sonoro, il coro di scimmie urlatrici e uccelli che si sveglia col primo chiarore, prima che arrivino i pullman. Il resto della giornata l\'abbiamo passato fra la Gran Plaza, i Templi I e II e il Mundo Perdido, camminando per chilometri sotto la volta della foresta: è questo che distingue Tikal dagli altri siti maya. Flores, dove eravamo arrivati la sera prima, è un\'isola di case colorate con un lungolago tranquillo, che vive quasi solo del turismo verso Tikal.',
      "sapori": [
        {
          "nome": "Pepián e caldo de gallina",
          "testo": "Piatti tipici guatemaltechi, nei comedor di Flores."
        },
        {
          "nome": "Pesce del lago Petén Itzá",
          "testo": "Fritto o alla piastra sui lungolago."
        },
        {
          "nome": "Tamales di Petén",
          "testo": "Di mais e carne, avvolti nelle foglie di platano."
        },
        {
          "nome": "Caffè e dolci di mais",
          "testo": "Per la colazione, nei piccoli locali dell'isola."
        }
      ],
      "attenzioni": [
        "Chiedere sempre che cosa è incluso nel tour dell'alba: spesso l'ingresso al parco è a parte.",
        "Nella stagione delle piogge l'alba spesso non si vede: valutare se vale la sveglia.",
        "Nel sito si cammina per chilometri sotto la foresta: portare acqua, repellente e scarpe chiuse. Il Foreign Office segnala rapine sulle strade verso Tikal: viaggiare di giorno e con operatori seri."
      ],
    comeArrivare: "Volo interno da Città del Guatemala a Flores (circa 1 ora, la soluzione più rapida) oppure bus notturno (8-10 ore). Da Flores al parco, circa 1h30 di navetta. Il volo arriva all'aeroporto internazionale Mundo Maya, a Santa Elena, a pochi minuti di taxi dall'isola. Il parco è a 63 km da Flores lungo la CA-13 verso Melchor de Mencos, con la deviazione a Ixlú per El Remate (Ministero della Cultura); navette e colectivos partono ogni giorno, e per l'alba gli hotel organizzano il trasporto verso le 3. Da Lanquín lo shuttle impiega 9-12 ore; dalla frontiera del Belize a Melchor de Mencos, circa due ore.",
    costi: "ingresso al parco circa 150 GTQ, supplemento per l'ingresso all'alba e guida obbligatoria in quella fascia oraria. Q150 per gli stranieri, più Q100 per l'alba o il tramonto: circa 250 GTQ in tutto, 28-30 €, in contanti o online sul sito del Ministero della Cultura. Budget indicativo a persona al giorno: basso 30-45 € (ostello a Flores, comedores, navetta condivisa); medio 70-110 € (hotel sul lago, guida a Tikal, giro in barca); alto da 180 € (hotel dentro il parco o boutique sul lago, tour privati a Yaxhá).",
    luoghi: [
      {
        "nome": "Gran Plaza e Templi I e II",
        "testo": "Il cuore di Tikal: i Templi I (del Gran Giaguaro) e II si fronteggiano sulla piazza cerimoniale, con acropoli ai lati. Patrimonio UNESCO nel Parco Nazionale Tikal.",
        "come": "Dal parco si cammina nella foresta; entrata e sentieri fanno chilometri. Visita con guida consigliata, anche per la fauna.",
        "quando": "Mattina, quando il sole illumina il Tempio I e la foresta è ancora umida.",
        "tempo": "3-4 ore",
        "costo": "Q150 per gli stranieri, a giornata; l'ingresso all'alba o al tramonto costa Q100 in più (tariffe del Ministero della Cultura, 2026).",
        "orari": "Tutti i giorni 6-18; ingresso speciale all'alba 4-6 e al tramonto 18-20 (Ministero della Cultura).",
        "lat": 17.22222,
        "lng": -89.62417,
        "url": "https://boletos.culturaguate.gob.gt/"
      },
      {
        "nome": "Acropoli Nord",
        "testo": "Sul lato nord della Gran Plaza, la piattaforma dove per secoli furono sepolti i re di Tikal, con templi costruiti uno sopra l'altro e grandi maschere di stucco protette da tettoie. Racconta la storia della città strato su strato.",
        "come": "Dalla Gran Plaza, salendo i gradini sul lato nord.",
        "quando": "Mattina.",
        "tempo": "45 minuti",
        "lat": 17.2227,
        "lng": -89.6234
      },
      {
        "nome": "Tempio IV",
        "testo": "Uno degli edifici più alti del mondo maya, con la cima sopra la volta della foresta e vista sulle creste degli altri templi.",
        "come": "Salita su una scala per i visitatori a fine percorso, con la torcia se si sale per l'alba.",
        "quando": "Alba o tardo pomeriggio.",
        "tempo": "1 ora",
        "lat": 17.22369,
        "lng": -89.62991,
        "consiglio": "Nella stagione secca l'alba è spesso velata dalla foschia. Quello che vale la sveglia è il coro di scimmie urlatrici e uccelli prima dei pullman."
      },
      {
        "nome": "Mundo Perdido",
        "testo": "Il complesso architettonico più antico di Tikal, con una piramide di circa 30 metri e le piattaforme intorno.",
        "come": "A piedi dal parco, dopo la Gran Plaza.",
        "quando": "Tardo pomeriggio per il tramonto, se l'accesso è consentito.",
        "tempo": "1-1,5 ore",
        "lat": 17.22005,
        "lng": -89.62793
      },
      {
        "nome": "Tempio V",
        "testo": "Il secondo tempio più alto di Tikal, a sud della Gran Plaza, con una scalinata ripida di legno sul fianco e la cima che guarda la Gran Plaza da dietro. È meno frequentato del Tempio IV.",
        "come": "A piedi lungo il sentiero fra la Gran Plaza e il Mundo Perdido.",
        "quando": "Mattina, con la luce alle spalle.",
        "tempo": "30-45 minuti",
        "lat": 17.21966,
        "lng": -89.62373
      },
      {
        "nome": "Musei di Tikal",
        "testo": "Vicino all'ingresso ci sono il Museo Lítico, con stele e altari scolpiti, e il Museo Sylvanus G. Morley, con oggetti delle tombe. Aiutano a leggere i monumenti che restano nella foresta.",
        "come": "Vicino al centro visitatori, prima o dopo la visita.",
        "quando": "A fine giornata, nelle ore più calde.",
        "tempo": "45 minuti",
        "lat": 17.22406,
        "lng": -89.61239
      },
      {
        "nome": "Isola di Flores",
        "testo": "Un'isola di case colorate sul lago Petén Itzá, con un lungolago tranquillo. È la base classica per Tikal e gli altri siti maya.",
        "come": "Strada rialzata da Santa Elena. Si gira tutta a piedi.",
        "quando": "Sera, per cena e lungolago.",
        "tempo": "Mezza giornata",
        "lat": 16.93333,
        "lng": -89.88333
      },
      {
        "nome": "San Miguel e Mirador del Rey Canek",
        "testo": "Il villaggio sulla penisola di fronte a Flores, con un sentiero che sale nella foresta fino a una torre panoramica sull'isola e sul lago. Ai piedi c'è una spiaggetta sul lago.",
        "come": "In lancia da Flores, pochi minuti, poi a piedi.",
        "quando": "Tardo pomeriggio, per il tramonto su Flores.",
        "tempo": "2 ore",
        "lat": 17.1812,
        "lng": -89.93175
      },
      {
        "nome": "Grotte di Actun Kan",
        "testo": "Una grotta calcarea con stalattiti e passaggi illuminati alla periferia di Santa Elena, legata a una leggenda maya del serpente. Una sosta breve per le ore più calde.",
        "come": "Tuk tuk da Flores, circa 10 minuti.",
        "quando": "Primo pomeriggio.",
        "tempo": "1 ora",
        "lat": 16.90322,
        "lng": -89.89527
      },
      {
        "nome": "Yaxhá",
        "testo": "Il terzo sito maya del Guatemala per grandezza, dopo Tikal ed El Mirador, sulla riva nord del lago Yaxhá, circa 30 km a sud-est di Tikal. Meno visitato, con il tramonto sul lago visto dall'alto di una piramide.",
        "come": "Tour da Flores o taxi; è un sito grande, dentro il parco nazionale Yaxhá-Nakum-Naranjo.",
        "quando": "Tardo pomeriggio.",
        "tempo": "Mezza giornata",
        "lat": 17.07222,
        "lng": -89.4,
        "url": "https://inguat.gob.gt/",
        "consiglio": "Se Tikal è affollata, Yaxhá vale la deviazione."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Partenza da Flores prima dell'alba per il Tempio IV",
          "Gran Plaza, Templi I e II, Acropoli Nord",
          "Tempio V e Mundo Perdido",
          "Rientro a Flores nel pomeriggio, cena sul lungolago"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: arrivo a Flores, lancia per San Miguel e tramonto dal Mirador del Rey Canek",
          "Giorno 2: Tikal all'alba e visita completa con i musei; il pomeriggio libero"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: Yaxhá al tramonto, o il confine con il Belize"
        ]
      }
    ],
    zone: [
      {
        "nome": "Isola di Flores",
        "perChi": "atmosfera e comodità",
        "testo": "Ristoranti e hotel in riva al lago, strade strette. Il rumore è basso, ma per Tikal serve un trasferimento in auto o navetta.",
        "fascia": "30-100 €"
      },
      {
        "nome": "El Remate",
        "perChi": "chi vuole più calma e natura",
        "testo": "Sul lago Petén Itzá, più vicino a Tikal: piccole cabañas e il tramonto sul lago."
      },
      {
        "nome": "Dentro il parco di Tikal",
        "perChi": "chi vuole essere ai cancelli all'apertura",
        "testo": "Pochi hotel vicino all'ingresso, semplici e da prenotare presto: si entra prima dei visitatori in navetta e si sente la foresta di sera."
      },
      {
        "nome": "Santa Elena",
        "perChi": "budget e trasporti",
        "testo": "La città sulla terraferma di fronte all'isola, con il terminal dei bus, l'aeroporto e alloggi economici; meno piacevole la sera."
      }
    ],
    gite: [
      {
        "nome": "Yaxhá",
        "distanza": "circa 1,5 ore da Flores",
        "come": "Tour del pomeriggio o taxi.",
        "testo": "Il grande sito sul lago Yaxhá, con il tramonto dal Tempio 216 e molti meno visitatori di Tikal."
      },
      {
        "nome": "Uaxactún",
        "distanza": "circa 23 km a nord di Tikal, su strada sterrata",
        "come": "Tour o auto alta da terra, passando per il parco di Tikal.",
        "testo": "Un villaggio dentro le rovine, con uno dei più antichi osservatori astronomici maya, il Gruppo E."
      },
      {
        "nome": "El Mirador",
        "distanza": "trekking di 5-6 giorni da Carmelita",
        "come": "Solo con guida e muli, oppure in elicottero da Flores.",
        "testo": "La città maya preclassica nella foresta più remota del Petén, con la piramide de La Danta fra le più grandi del mondo per volume."
      },
      {
        "nome": "San Ignacio (Belize)",
        "distanza": "circa 2 ore fino alla frontiera di Melchor de Mencos",
        "come": "Shuttle o colectivo; frontiera aperta tutti i giorni dalle 6 alle 22 (dal viaggio).",
        "testo": "Il primo paese del Belize, base per la grotta ATM; dal confine si arriva in un quarto d'ora."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono per Tikal e Flores?",
        "risposta": "Due o tre giorni: uno intero per Tikal, la sera prima a Flores e, se si può, un giorno in più per Yaxhá o il Mirador del Rey Canek."
      },
      {
        "domanda": "Vale la pena l'ingresso all'alba?",
        "risposta": "Sì, più per i suoni che per la vista: nella stagione secca l'alba è spesso velata, ma il coro di scimmie urlatrici e uccelli si sente prima dell'apertura delle 6. L'ingresso all'alba (4-6) costa Q100 in più e richiede la guida."
      },
      {
        "domanda": "Quanto costa entrare a Tikal?",
        "risposta": "Q150 per gli stranieri, a giornata, più Q100 per l'alba o il tramonto (Ministero della Cultura, 2026). I biglietti si comprano online sul sito del ministero o in contanti."
      },
      {
        "domanda": "Serve una guida a Tikal?",
        "risposta": "È obbligatoria per l'ingresso all'alba; nel resto della giornata non lo è, ma aiuta a orientarsi fra chilometri di sentieri e a vedere la fauna."
      },
      {
        "domanda": "Meglio dormire a Flores o dentro il parco?",
        "risposta": "Flores per l'atmosfera, i ristoranti e i collegamenti; gli hotel dentro il parco per essere ai cancelli all'apertura senza la navetta delle 3. El Remate è una via di mezzo sul lago."
      },
      {
        "domanda": "Tikal o Yaxhá?",
        "risposta": "Tikal è il sito principale e va visto; Yaxhá è meno affollato e ha il tramonto sul lago. Con un giorno in più si fanno tutti e due."
      }
    ],
    esperienzeSlugs: ['alba-tikal'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Piramide a gradoni del Mundo Perdido tra gli alberi del sito maya di Tikal, Guatemala',
    immagine: '/images/guatemala/tikal-flores.jpg',
  },
  {
    slug: 'semuc-champey',
    paeseSlug: 'guatemala',
    ordine: 4,
    nome: 'Semuc Champey',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2 giorni, considerando i lunghi trasferimenti',
    visitataPersonalmente: true,
    introduzione:
      'Una scalinata naturale di piscine turchesi di acqua calcarea, su un ponte di roccia sotto cui scorre, incassato, il fiume Cahabón. È in una valle remota dell\'Alta Verapaz, vicino al villaggio di Lanquín.',
    percheAndarci:
      'È il paesaggio naturale più fotografato del Guatemala, e abbastanza fuori mano da non essere mai troppo affollato: la strada per arrivarci fa parte del viaggio.',
    cosaVedere: [
      'Le piscine naturali a gradoni di Semuc Champey',
      'Il Mirador, punto panoramico dall\'alto sulle piscine (salita ripida di circa 30-45 minuti)',
      'Il punto in cui il fiume Cahabón si infila sotto il ponte di roccia',
      'Le grotte di K\'anba, percorribili a lume di candela',
    ],
    cosaFare: [
      'Bagno nelle piscine naturali, con il percorso dal basso verso l\'alto',
      'Grotte di K\'anba con candela in mano, tratti a nuoto inclusi',
      'Tubing sul fiume Cahabón',
    ],
    doveDormire: 'Lanquín (più servizi e collegamenti) oppure gli hostel lungo la strada sterrata verso Semuc, più vicini all\'ingresso ma isolati.',
    doveMangiare:
      'Non c\'è scelta, ed è bene saperlo: a Lanquín e lungo la sterrata verso il parco si mangia negli hostel, con menu fissi la sera, oppure nei pochi comedor del paese. All\'ingresso di Semuc alcune famiglie vendono pollo alla griglia e tortillas fatte al momento, la cosa migliore della zona. Acqua e snack vanno comprati prima: dentro il parco non si trova niente.',
    comeArrivare:
      'Shuttle turistico da Antigua, Città del Guatemala o Flores: 8-10 ore, con l\'ultimo tratto su strada sterrata molto lenta. È il trasferimento più impegnativo di un giro classico in Guatemala.',
    comeSpostarsi: 'Dal paese all\'ingresso del parco si viaggia sul cassone dei pick-up collettivi, circa 30-45 minuti.',
    periodoMigliore: 'stagione secca per l\'acqua più turchese: dopo le piogge il colore vira al verde torbido',
    costi: 'ingresso al parco circa 50 GTQ; tour combinato grotte + tubing + ingresso sui 150-250 GTQ',
    erroriDaEvitare: [
      'Programmarlo come tappa «di passaggio»: i trasferimenti da e per Lanquín sono lunghi e faticosi, ci vuole un giorno pieno per ogni tratta',
      'Andarci subito dopo giorni di pioggia intensa, quando le piscine perdono il colore turchese',
    ],
    miaEsperienza:
      'Arrivarci è metà del racconto: da Panajachel a Lanquín è stata la giornata di trasferimento più lunga del viaggio, con l\'ultimo tratto su una sterrata che scende lenta nella valle. Il giorno dopo abbiamo risalito le piscine dal basso verso l\'alto e poi siamo saliti al Mirador: la salita è ripida, ma senza la vista dall\'alto non si capisce come funziona il posto, con il fiume che sparisce sotto il ponte di roccia e riemerge trecento metri più in là. Nel pomeriggio siamo entrati nelle grotte di K\'anba, con una candela in mano e alcuni tratti da fare a nuoto al buio: la cosa meno turistica della zona e quella che ricordo di più. Chi soffre di claustrofobia le salti senza rimpianti.',
      "luoghi": [
        {
          "nome": "Piscine naturali di Semuc Champey",
          "testo": "Una serie di vasche turchesi a gradoni su un ponte naturale di calcare lungo circa 300 metri, sotto cui scorre il fiume Cahabón. Monumento naturale dal 2005, gestito dal CONAP e dal comune di Lanquín, con ingresso a pagamento.",
          "come": "Da Lanquín in pick-up lungo una strada sterrata. Dall'ingresso si cammina fino alle piscine.",
          "quando": "Mattina, con meno gente e acqua più chiara; evitare dopo piogge forti, quando l'acqua si intorbida.",
          "tempo": "2-3 ore",
          "consiglio": "Si risale dal basso verso l'alto, poi si sale al Mirador: così si capisce come funziona il posto."
        },
        {
          "nome": "Il Mirador",
          "testo": "Il punto panoramico sopra le piscine. Da qui si vede come il fiume sparisce sotto il ponte di roccia e riemerge più a valle.",
          "come": "Sentiero ripido e caldo di circa 45 minuti dall'ingresso, con scale e fango.",
          "quando": "Mattina; evitare ore di pioggia, quando i gradini scivolano.",
          "tempo": "1-1,5 ore",
          "consiglio": "Scarpe con presa e acqua: la salita è dura, ma senza la vista dall'alto si perde il senso del posto."
        },
        {
          "nome": "Grotte di K'anba",
          "testo": "Una grotta con corridoi allagati da percorrere con una guida, alla luce delle candele, con alcuni tratti a nuoto.",
          "come": "Con guida; il bivio è circa un chilometro prima di Semuc Champey, poco prima del grande ponte sul fiume.",
          "quando": "Dopo la visita alle piscine.",
          "tempo": "Circa 2 ore",
          "consiglio": "Portare una torcia impermeabile: con le sole candele si vede poco. I gruppi possono essere molto affollati; chi soffre di claustrofobia le salti."
        },
        {
          "nome": "Lanquín",
          "testo": "Il villaggio q'eqchi' che fa da base per Semuc Champey, con ostelli e pochi servizi.",
          "come": "Da Cobán o con shuttle da Antigua o Atitlán: è una lunga giornata di strada.",
          "quando": "Arrivo il giorno prima.",
          "tempo": "Una notte"
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: piscine e Mirador",
            "Pranzo",
            "Pomeriggio: grotte di K'anba, poi rientro a Lanquín"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: arrivo a Lanquín, sosta all'ingresso del parco",
            "Giorno 2: piscine, Mirador e grotte di K'anba; rientro in shuttle il giorno dopo"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Lanquín",
          "perChi": "tutti",
          "testo": "È il paese base: pochi alloggi, ostelli e guesthouse semplici, servizi limitati."
        },
        {
          "nome": "Dintorni del fiume Cahabón",
          "perChi": "chi cerca natura",
          "testo": "Alcuni lodge sul fiume, immersi nella foresta, ma lontani dai servizi."
        }
      ],
      "sapori": [
        {
          "nome": "Caldo di pollo e frijoles",
          "testo": "Cucina semplice nei comedor del paese."
        },
        {
          "nome": "Tortillas e uova",
          "testo": "La colazione standard degli ostelli e dei comedor."
        },
        {
          "nome": "Cardamomo",
          "testo": "La Alta Verapaz è una zona produttrice: si trova in infusione e nei dolci."
        },
        {
          "nome": "Frutta tropicale",
          "testo": "Banane, papaya e ananas, a prezzi bassi nei mercatini."
        }
      ],
      "attenzioni": [
        "Arrivarci richiede un lungo trasferimento: pianificare almeno una notte a Lanquín.",
        "Non lasciare cose di valore incustodite alle piscine e lungo i sentieri.",
        "Dopo piogge forti le piscine perdono colore e alcuni tratti diventano pericolosi: chiedere in paese prima di partire."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Le piscine naturali turchesi a gradoni di Semuc Champey viste dall\'alto tra la giungla, Guatemala',
    immagine: '/images/guatemala/semuc-champey.jpg',
  },
  {
    slug: 'chichicastenango',
    paeseSlug: 'guatemala',
    ordine: 5,
    nome: 'Chichicastenango',
    tipologia: ['cultura', 'mercati'],
    giorniConsigliati: 'mezza giornata, in giornata da Antigua o dal lago Atitlán',
    visitataPersonalmente: true,
    introduzione:
      'Il mercato indigeno più grande dell\'America Centrale: il giovedì e la domenica riempie tutto il centro del paese di tessuti, maschere, ceramiche, fiori e generi alimentari.',
    percheAndarci:
      'Oltre al mercato, è uno dei posti dove il sincretismo maya-cattolico è più visibile: sulla scalinata della chiesa di Santo Tomás si bruciano ancora copale e offerte secondo i riti k\'iche\'.',
    cosaVedere: [
      'Il mercato, con la parte artigianale nella piazza principale e quella alimentare nelle vie laterali',
      'La chiesa di Santo Tomás e la sua scalinata, dove si celebrano riti maya',
      'Il cimitero con le tombe dipinte a colori vivaci, poco fuori dal centro',
    ],
    cosaFare: [
      'Contrattare tessuti e huipiles al mercato (trattare è la norma)',
      'Assistere ai riti sulla scalinata di Santo Tomás, con rispetto e senza fotografare le persone senza permesso',
    ],
    doveDormire: 'La maggior parte dei visitatori arriva in giornata; per essere al mercato all\'apertura conviene però dormire in paese la sera prima.',
    doveMangiare:
      'Nei giorni di mercato si mangia al mercato, nella parte alimentare delle vie laterali, in piedi ai banchi coi venditori: tamales avvolti nella foglia, chuchitos, caldo, tortillas fatte al momento. I ristoranti intorno alla piazza servono le stesse cose al triplo del prezzo. Negli altri giorni c\'è poco, e niente di speciale.',
    comeArrivare: 'Shuttle turistico da Antigua (circa 3 ore) o da Panajachel (circa 1h30), con partenze concentrate nei giorni di mercato.',
    comeSpostarsi: 'Tutto a piedi, il paese è piccolo.',
    periodoMigliore: 'solo giovedì e domenica, i giorni di mercato; conviene arrivare presto, quando il mercato è ancora di chi ci lavora',
    costi: 'nessun ingresso; il costo è quello che si spende contrattando',
    erroriDaEvitare: [
      'Arrivare in un giorno diverso da giovedì o domenica: fuori dai giorni di mercato il paese è tranquillo e poco interessante',
      'Fotografare persone o riti senza chiedere il permesso: qui è una questione di rispetto',
    ],
    miaEsperienza:
      'Ci siamo arrivati da Antigua, tre ore di shuttle, in uno dei due giorni di mercato: fuori dal giovedì e dalla domenica il paese è tranquillo e poco interessante. Abbiamo girato fra le bancarelle di tessuti, maschere e ceramiche e mangiato in piedi ai banchi della parte alimentare, nelle vie laterali. Quello che mi è rimasto, però, è la scalinata di Santo Tomás: sui gradini di una chiesa cattolica si bruciano ancora copale e offerte secondo riti k\'iche\'. È un rito vero e si guarda con rispetto, senza fotografare le persone senza permesso. Nel tardo pomeriggio abbiamo proseguito verso il lago Atitlán.',
      "luoghi": [
        {
          "nome": "Mercato di Chichicastenango",
          "testo": "Il grande mercato del paese k'iche': tessuti, huipiles, maschere, ceramiche, copale e prodotti locali nella piazza, cibo e fiori nelle vie laterali.",
          "come": "Nel centro del paese, a piedi. Shuttle da Antigua o da Atitlán, qualche ora di strada.",
          "quando": "Giovedì e domenica. Fuori da quei giorni il paese è tranquillo e poco interessante.",
          "tempo": "3-4 ore",
          "consiglio": "Contrattare con calma. Mangiare in piedi ai banchi della parte alimentare, nelle vie laterali."
        },
        {
          "nome": "Chiesa di Santo Tomás",
          "testo": "Chiesa coloniale sulla piazza principale, costruita sopra una piattaforma precolombiana. Sui suoi 20 gradini, che si dice rappresentino i mesi del calendario maya, i sacerdoti k'iche' bruciano incenso e candele. Un rito vero e non uno spettacolo.",
          "come": "A piedi dalla piazza. Si può guardare dalla scalinata, ma l'interno ha regole proprie.",
          "quando": "Giorni di mercato.",
          "tempo": "1 ora",
          "consiglio": "Non fotografare le persone senza permesso e mantenere distanza dai riti."
        },
        {
          "nome": "Pascual Abaj",
          "testo": "Una pietra scolpita su una collina vicino al paese, venerata dai k'iche', dove i sacerdoti celebrano ancora riti con fuoco e offerte.",
          "come": "A piedi dal centro, con una breve salita.",
          "quando": "Mattina.",
          "tempo": "45 minuti",
          "consiglio": "Rispetto e discrezione: è un luogo di culto in uso, non un set. Chiedere prima di fotografare."
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Arrivo in mattinata col mercato già attivo",
            "Pranzo ai banchi della parte alimentare",
            "Santo Tomás e Pascual Abaj nel primo pomeriggio",
            "Partenza nel tardo pomeriggio per Atitlán"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: mercato, chiesa, Pascual Abaj",
            "Notte in paese, rientro il giorno dopo, quando il paese è tranquillo"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro",
          "perChi": "chi dorme sul posto",
          "testo": "Piccoli hotel e locande sulla piazza, rumorosi la notte prima del mercato."
        },
        {
          "nome": "In giornata da Antigua o Atitlán",
          "perChi": "la maggioranza",
          "testo": "Il paese si vede bene in giornata: si arriva al mattino e si riparte nel pomeriggio."
        }
      ],
      "sapori": [
        {
          "nome": "Pepián e caldo di pollo",
          "testo": "Piatti caldi nella parte alimentare del mercato."
        },
        {
          "nome": "Tamales",
          "testo": "Di mais, nei banchi delle vie laterali."
        },
        {
          "nome": "Atol",
          "testo": "Bevanda calda di mais, per la mattina fredda dell'altopiano."
        },
        {
          "nome": "Frutta e fiori",
          "testo": "I banchi di fiori sulla scalinata sono parte del colore del mercato."
        }
      ],
      "attenzioni": [
        "Il mercato si fa solo giovedì e domenica: programmare in anticipo.",
        "Borseggi nella folla: tenere i valori davanti.",
        "Rispettare i riti k'iche': chiedere sempre il permesso prima di fotografare le persone, che a volte chiedono un piccolo compenso."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'L\'arco decorato a mosaico colorato su una strada acciottolata di Chichicastenango, Guatemala',
    immagine: '/images/guatemala/chichicastenango.jpg',
  },
]
