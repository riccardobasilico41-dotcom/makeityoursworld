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
    comeArrivare: 'Volo su Città del Guatemala (GUA), poi circa 1 ora di shuttle o taxi privato fino ad Antigua.',
    comeSpostarsi: 'Il centro si gira tutto a piedi; per le altre tappe del paese ci sono shuttle turistici, prenotabili in qualsiasi agenzia del centro.',
    periodoMigliore: 'novembre-aprile; la Semana Santa (marzo-aprile) porta le processioni più famose dell\'America Latina, ma anche prezzi e folla molto più alti',
    costi: 'fra le città più care del Guatemala, ma economica per gli standard europei; il trekking all\'Acatenango parte da circa 60€ con l\'attrezzatura inclusa',
    erroriDaEvitare: [
      'Salire al Cerro de la Cruz da soli e fuori dagli orari di presidio della polizia turistica',
      'Sottovalutare il freddo notturno al campo dell\'Acatenango (quasi 4.000 m): servono strati veri, non solo una felpa',
    ],
    miaEsperienza:
      'Siamo arrivati ad Antigua nel primo pomeriggio e la prima passeggiata fra le strade acciottolate l\'abbiamo fatta con i vulcani Agua, Fuego e Acatenango in fondo a ogni via. Il giorno dopo abbiamo girato il centro storico, dall\'Arco di Santa Catalina alle chiese in rovina, e siamo saliti al Cerro de la Cruz per il panorama. Quello che mi resta è l\'Acatenango: cinque-sei ore di salita fra i campi di mais e la pineta, sulla sabbia vulcanica che cede sotto i piedi, il tratto più faticoso di tutto il viaggio. Il campo era sopra le nuvole, il Fuego ha cominciato a eruttare prima del tramonto e di notte lo vedevamo buttare lava a un paio di chilometri senza uscire dal sacco a pelo, con un freddo vicino allo zero. La mattina siamo scesi scivolando sulla sabbia più che camminando. La lista delle cose fatte in Centro America comincia da lì.',
      "luoghi": [
        {
          "nome": "Arco de Santa Catalina",
          "testo": "L'arco giallo barocco del 1693 sulla 5ª Avenida Norte, costruito perché le suore di clausura del convento di Santa Catalina passassero da un edificio all'altro senza uscire in strada. Con il vulcano Agua sullo sfondo è la foto simbolo della città.",
          "come": "A piedi dalla piazza centrale, pochi minuti. Ingresso libero, è una strada.",
          "quando": "Mattina presto, senza folla e con il vulcano limpido.",
          "tempo": "15 minuti"
        },
        {
          "nome": "Convento di Santa Clara e La Merced",
          "testo": "Chiese e conventi coloniali rovinati dai terremoti del 1773, dopo i quali la capitale fu spostata. Antigua è patrimonio UNESCO dal 1979 per questo insieme.",
          "come": "A piedi nel centro. Le rovine di Santa Clara hanno un biglietto d'ingresso; La Merced è una chiesa ancora in uso.",
          "quando": "Mattina; la luce del pomeriggio è buona sulla facciata di La Merced.",
          "tempo": "2-3 ore per entrambe",
          "url": "https://inguat.gob.gt/"
        },
        {
          "nome": "Cerro de la Cruz",
          "testo": "Un belvedere in collina con la città in primo piano e i vulcani Agua, Fuego e Acatenango dietro. Si raggiunge con una breve salita.",
          "come": "A piedi dal centro con una breve salita, ma meglio in gruppo o accompagnati dalla polizia turistica, presente in zona.",
          "quando": "Mattina presto o tardo pomeriggio.",
          "tempo": "1 ora",
          "consiglio": "Non salire da soli e non portare oggetti di valore: la zona ha avuto problemi di sicurezza in passato."
        },
        {
          "nome": "Vulcano Acatenango",
          "testo": "Salita con campo base sopra le nuvole, davanti al Fuego che erutta. Il tratto più duro del viaggio in Guatemala.",
          "come": "Tour di due giorni da Antigua con guida, tenda e pasti. Si sale per diverse ore fra campi di mais, pineta e sabbia vulcanica.",
          "quando": "Stagione secca (novembre-aprile); la mattina dopo si scende sulla sabbia. Il sentiero può chiudere per l'attività del Fuego o il maltempo (nel 2026 ha riaperto ad agosto dopo una chiusura): verificare prima.",
          "tempo": "2 giorni, 1 notte",
          "consiglio": "Di notte al campo fa freddo, spesso vicino allo zero: guanti, berretto, strati caldi e impermeabile. La discesa scivola più che camminare."
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: Arco di Santa Catalina e rovine di La Merced",
            "Mercato municipale e pranzo",
            "Pomeriggio: Convento di Santa Clara",
            "Tramonto al Cerro de la Cruz, con la polizia turistica"
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
        }
      ],
      "zone": [
        {
          "nome": "Centro storico",
          "perChi": "chi vuole stare a piedi da tutto",
          "testo": "Strade acciottolate, tutto vicino, ma rumore il fine settimana e prezzi più alti."
        },
        {
          "nome": "Zone sopra la 5ª Calle e attorno ai conventi",
          "perChi": "chi cerca più calma",
          "testo": "Più tranquille di notte; si cammina 10-15 minuti al centro."
        }
      ],
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
        "Salita al Cerro de la Cruz: meglio in gruppo o con la polizia turistica.",
        "Per l'Acatenango scegliere operatori seri: il Foreign Office britannico avverte che gli organizzatori locali tendono a sottovalutare i rischi, che ci sono stati morti e che non esiste un soccorso alpino.",
        "Il Fuego è attivo: prima di partire controllare i bollettini di CONRED e INSIVUMEH e seguire sempre la guida."
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
    comeArrivare: 'Shuttle turistico da Antigua (circa 3 ore) o da Città del Guatemala; in alternativa chicken bus con cambio a Los Encuentros.',
    comeSpostarsi: 'Lance pubbliche fra i villaggi (pochi euro a tratta, partono quando sono piene, fino al tramonto); tuk tuk dentro i paesi.',
    periodoMigliore: 'novembre-aprile; in ogni stagione, dopo mezzogiorno, il vento Xocomil rende le traversate più mosse',
    costi: 'lance 10-25 GTQ a tratta secondo la distanza; alloggi tra i più economici del paese',
    erroriDaEvitare: [
      'Programmare le traversate nel pomeriggio: il vento Xocomil si alza quasi ogni giorno e rende la navigazione scomoda',
      'Fermarsi solo a Panajachel: è il nodo dei trasporti, non il villaggio più interessante del lago',
      'Salire all\'Indian Nose senza guida al buio',
    ],
    miaEsperienza:
      'Panajachel è il nodo dei trasporti, con la Calle Santander piena di artigianato, ma fermarsi solo lì è l\'errore più comune: il lago comincia quando si sale su una lancha. In una giornata abbiamo toccato San Juan la Laguna, con le cooperative tessili e i murales, San Marcos, il paese dello yoga, e San Pedro, e ogni dieci minuti di barca cambiava l\'atmosfera. Il giorno dopo ci siamo svegliati alle quattro per l\'Indian Nose e poi abbiamo preso la lancha per Santiago Atitlán, dove le donne portano ancora il tocoyal avvolto in testa. Abbiamo imparato in fretta a muoverci al mattino, perché dal primo pomeriggio si alza lo Xocomil e le traversate diventano mosse. L\'alba dall\'Indian Nose vale la sveglia solo col cielo sereno: nella stagione delle piogge si sale al buio per guardare una nuvola.',
      "luoghi": [
        {
          "nome": "San Juan la Laguna",
          "testo": "Il villaggio più curato del lago, con cooperative tessili di donne, murales sulle facciate e atelier d'arte.",
          "come": "In lancha pubblica da Panajachel o San Pedro, poi si cammina nelle stradine.",
          "quando": "Mattina, quando le cooperative sono aperte.",
          "tempo": "2-3 ore",
          "consiglio": "Comprare nelle cooperative, dove il ricavato va alle tessitrici."
        },
        {
          "nome": "San Marcos la Laguna",
          "testo": "Il paese dello yoga e delle pratiche olistiche. Sul lungolago c'è la piattaforma per i tuffi di Cerro Tzankujil.",
          "come": "In lancha da Panajachel o San Pedro.",
          "quando": "Mattina, mare del lago più calmo.",
          "tempo": "Mezza giornata"
        },
        {
          "nome": "Santiago Atitlán",
          "testo": "Il paese più grande del lago, tz'utujil e molto tradizionale, dove alcune donne portano ancora il tocoyal avvolto in testa e si venera Maximón, figura sincretica.",
          "come": "In lancha pubblica da Panajachel.",
          "quando": "Mattina.",
          "tempo": "Mezza giornata",
          "consiglio": "Prima di fotografare persone o la figura di Maximón, chiedere sempre il permesso e lasciare una piccola offerta."
        },
        {
          "nome": "Indian Nose (Rostro Maya)",
          "testo": "Un belvedere sopra San Juan la Laguna, per l'alba sul lago e sui vulcani Atitlán, Tolimán e San Pedro. La cima è un prato stretto fra gli alberi: si arriva al buio e si guarda la luce accendere il lago.",
          "come": "Sveglia prima dell'alba, trasferimento e cammino al buio con guida.",
          "quando": "Alba, con cielo sereno.",
          "tempo": "Mezza mattina",
          "consiglio": "Nella stagione delle piogge si sale al buio per guardare una nuvola: controllare le previsioni."
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina presto: Indian Nose oppure lancha per San Juan la Laguna",
            "San Marcos per un tuffo e pranzo",
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
            "Giorno 3: riserva naturale di Atitlán vicino a Panajachel, o giornata di pausa sul lago"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Panajachel",
          "perChi": "nodo dei trasporti, prime notti",
          "testo": "Servizi, ristoranti, Calle Santander piena di artigianato. Meno atmosfera del resto del lago."
        },
        {
          "nome": "San Pedro la Laguna",
          "perChi": "budget e vita serale",
          "testo": "Economico, giovane, rumoroso la sera."
        },
        {
          "nome": "San Marcos e San Juan",
          "perChi": "calma e benessere",
          "testo": "Più tranquilli e più cari; per yoga, silenzio e arte."
        }
      ],
      "sapori": [
        {
          "nome": "Pepián e caldo di pollo",
          "testo": "Piatti caldi nelle comedor sul lago, dopo una mattina in barca."
        },
        {
          "nome": "Pesce del lago",
          "testo": "Tilapia e black bass fritti, in riva a Panajachel e Santiago."
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
    comeArrivare:
      'Volo interno da Città del Guatemala a Flores (circa 1 ora, la soluzione più rapida) oppure bus notturno (8-10 ore). Da Flores al parco, circa 1h30 di navetta.',
    comeSpostarsi: 'Navette organizzate Flores-Tikal (per l\'alba partono molto presto); dentro il sito ci si muove solo a piedi, su diversi chilometri di sentieri.',
    periodoMigliore: 'novembre-aprile per i sentieri asciutti; la nebbia mattutina in stagione secca può però coprire il panorama dal Tempio IV',
    costi: 'ingresso al parco circa 150 GTQ, supplemento per l\'ingresso all\'alba e guida obbligatoria in quella fascia oraria',
    erroriDaEvitare: [
      'Comprare il biglietto per l\'alba aspettandosi un\'alba garantita: nella stagione secca la foschia sopra la giungla è frequente',
      'Sottovalutare le distanze dentro il sito: si camminano diversi chilometri con caldo e umidità alti',
      'Programmare Tikal come gita in giornata da Antigua: la distanza richiede volo o bus notturno',
    ],
    miaEsperienza:
      'Siamo partiti da Flores verso le tre del mattino e abbiamo camminato al buio fino al Tempio IV con la guida. L\'alba, nella stagione secca, è spesso velata dalla foschia; quello che vale la sveglia è il sonoro, il coro di scimmie urlatrici e uccelli che si sveglia col primo chiarore, prima che arrivino i pullman. Il resto della giornata l\'abbiamo passato fra la Gran Plaza, i Templi I e II e il Mundo Perdido, camminando per chilometri sotto la volta della foresta: è questo che distingue Tikal dagli altri siti maya. Flores, dove eravamo arrivati la sera prima, è un\'isola di case colorate con un lungolago tranquillo, che vive quasi solo del turismo verso Tikal.',
      "luoghi": [
        {
          "nome": "Gran Plaza e Templi I e II",
          "testo": "Il cuore di Tikal: i Templi I (del Gran Giaguaro) e II si fronteggiano sulla piazza cerimoniale, con acropoli ai lati. Patrimonio UNESCO nel Parco Nazionale Tikal.",
          "come": "Dal parco si cammina nella foresta; entrata e sentieri fanno chilometri. Visita con guida consigliata, anche per la fauna.",
          "quando": "Il parco è aperto tutti i giorni dalle 6 alle 18; l'ingresso speciale all'alba va dalle 4 alle 6. Mattina presto per fresco e animali.",
          "tempo": "3-4 ore",
          "costo": "Q150 per gli stranieri, a giornata; l'ingresso all'alba o al tramonto costa Q100 in più (tariffe del Ministero della Cultura, 2026).",
          "url": "https://boletos.culturaguate.gob.gt/"
        },
        {
          "nome": "Tempio IV",
          "testo": "Uno degli edifici più alti del mondo maya, con la cima sopra la volta della foresta e vista sulle creste degli altri templi.",
          "come": "Salita su una scala per i visitatori a fine percorso, con la torcia se si sale per l'alba.",
          "quando": "Alba o tardo pomeriggio.",
          "tempo": "1 ora",
          "consiglio": "Nella stagione secca l'alba è spesso velata dalla foschia. Quello che vale la sveglia è il coro di scimmie urlatrici e uccelli prima dei pullman."
        },
        {
          "nome": "Mundo Perdido",
          "testo": "Il complesso architettonico più antico di Tikal, con una piramide di circa 30 metri e le piattaforme intorno.",
          "come": "A piedi dal parco, dopo la Gran Plaza.",
          "quando": "Tardo pomeriggio per il tramonto, se l'accesso è consentito.",
          "tempo": "1-1,5 ore"
        },
        {
          "nome": "Isola di Flores",
          "testo": "Un'isola di case colorate sul lago Petén Itzá, con un lungolago tranquillo. È la base classica per Tikal e gli altri siti maya.",
          "come": "Strada rialzata da Santa Elena. Si gira tutta a piedi.",
          "quando": "Sera, per cena e lungolago.",
          "tempo": "Mezza giornata"
        },
        {
          "nome": "Yaxhá",
          "testo": "Il terzo sito maya del Guatemala per grandezza, dopo Tikal ed El Mirador, sulla riva nord del lago Yaxhá, a circa 30 km da Tikal. Meno visitato, con il tramonto sul lago visto dall'alto di una piramide.",
          "come": "Tour da Flores o taxi; è un sito grande, dentro il parco nazionale Yaxhá-Nakum-Naranjo.",
          "quando": "Tardo pomeriggio.",
          "tempo": "Mezza giornata",
          "url": "https://inguat.gob.gt/",
          "consiglio": "Se Tikal è affollata, Yaxhá vale la deviazione."
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Partenza da Flores prima dell'alba per il Tempio IV",
            "Gran Plaza, Templi I e II",
            "Mundo Perdido",
            "Rientro a Flores nel pomeriggio, cena sul lungolago"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: arrivo a Flores, lungolago e cena",
            "Giorno 2: Tikal all'alba e visita completa; il pomeriggio libero"
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
      "zone": [
        {
          "nome": "Isola di Flores",
          "perChi": "atmosfera e comodità",
          "testo": "Ristoranti e hotel in riva al lago, strade strette. Il rumore è basso, ma per Tikal serve un trasferimento in auto o navetta."
        },
        {
          "nome": "El Remate",
          "perChi": "chi vuole più calma e natura",
          "testo": "Sul lago Petén Itzá, più vicino a Tikal: piccole cabañas e il tramonto sul lago."
        }
      ],
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
          "testo": "Una grotta con corridoi allagati da percorrere con una candela in mano e alcuni tratti a nuoto al buio. La cosa meno turistica della zona.",
          "come": "Con guida, a poca distanza dall'ingresso del monumento naturale.",
          "quando": "Dopo la visita alle piscine, nel pomeriggio.",
          "tempo": "1-1,5 ore",
          "consiglio": "Chi soffre di claustrofobia le salti: i passaggi sono stretti e al buio."
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
            "Pomeriggio: grotte di K'anba"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: arrivo a Lanquín, sosta all'ingresso del parco",
            "Giorno 2: piscine, Mirador, grotte; rientro in shuttle il giorno dopo"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Lanquín",
          "perChi": "tutti",
          "testo": "È il paese base: pochi alloggi, ostelli e guesthouse in fascia semplice, elettricità e connessione limitate."
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
          "testo": "Chiesa di circa quattro secoli sulla piazza principale, costruita sopra una piattaforma precolombiana. Sui suoi 20 gradini, che si dice rappresentino i mesi del calendario maya, i sacerdoti k'iche' bruciano incenso e candele. Un rito vero e non uno spettacolo.",
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
