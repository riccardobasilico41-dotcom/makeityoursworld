import type { Destinazione } from '@/lib/types'

// Prima uscita spagnola dell'archivio. Tutte e tredici le destinazioni sono
// tappe dei quattro viaggi fatti da Rick (Andalusia, Nord, Baleari, Canarie):
// visitataPersonalmente è true su tutte. Il campo miaEsperienza resta assente finché non arriva un ricordo dell'autore. Nessun nome di hotel
// o ristorante specifico è stato inventato. Prezzi, orari e regole di
// prenotazione (Alhambra, Teide, Guggenheim) cambiano spesso e vanno
// riverificati sui canali ufficiali prima di partire.
//
// Ordine: Andalusia (1-4, la regione del trip principale), Nord (5-7),
// Baleari (8-10), Canarie (11-13) — coerente con l'ordine delle quattro
// regioni descritto in paesi/spagna.ts.

export const destinazioniSpagna: Destinazione[] = [
  // --- ANDALUSIA (Sud) ---
  {
    slug: 'siviglia',
    paeseSlug: 'spagna',
    ordine: 1,
    nome: 'Siviglia',
    tipologia: ['città', 'cultura moresca', 'flamenco'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "È stata la prima tappa dei miei nove giorni in Andalusia con amici: due giorni tra la Cattedrale e la Giralda, il Real Alcázar, Triana e il flamenco, poi in treno verso Córdoba.",
    introduzione:
      'La capitale dell\'Andalusia, sul Guadalquivir. Qui otto secoli di dominio moresco convivono con la Siviglia barocca e, sull\'altra riva, con il quartiere gitano di Triana, dove il flamenco è nato per strada prima di diventare spettacolo.',
    percheAndarci:
      'In un centro che si gira a piedi ci sono la cattedrale gotica più grande del mondo, il palazzo moresco-cristiano più bello di Spagna dopo l\'Alhambra e il quartiere dove il flamenco è ancora una tradizione di casa, oltre che tablao per turisti.',
    cosaVedere: [
      'La Cattedrale di Siviglia, la più grande chiesa gotica del mondo, costruita sopra l\'antica moschea almohade: dentro, la tomba di Cristoforo Colombo',
      'La Giralda, l\'antico minareto della moschea trasformato in campanile, con la rampa (non scale) che sale fino in cima',
      'Il Real Alcázar, palazzo reale ancora in uso, capolavoro dello stile mudéjar con i suoi patii, giardini e la Sala degli Ambasciatori',
      'Il Barrio de Santa Cruz, l\'ex quartiere ebraico, un dedalo di vicoli stretti e patii fioriti',
      'Triana, il quartiere al di là del fiume, culla del flamenco e della ceramica sivigliana',
      'La Plaza de España, costruita per l\'Esposizione Iberoamericana del 1929, con il canale navigabile e le piastrelle che rappresentano ogni provincia spagnola',
    ],
    cosaFare: [
      'Salire sulla Giralda al mattino presto, prima del caldo e della folla',
      'Un giro nei patii di Triana e sul Mercado de Triana, il mercato coperto sul lungofiume',
      'Assistere a uno spettacolo di flamenco in un tablao acustico, senza amplificazione, invece che in uno dei grandi locali per gruppi turistici',
      'Passeggiata serale lungo il Guadalquivir, quando il caldo estivo cala',
    ],
    doveDormire: 'Il Barrio de Santa Cruz è il quartiere più centrale e turistico; Triana è più di quartiere e costa un po\' meno, a pochi minuti a piedi dal centro attraverso il Puente de Triana.',
    doveMangiare:
      'Il tapeo (giro di tapas tra più bar) è l\'istituzione locale: salmorejo (crema fredda di pomodoro, più densa del gazpacho), espinacas con garbanzos, il pescaíto frito (fritto misto di pesce) e il jamón ibérico. A Triana i bar del mercato coperto sono il modo più economico per iniziare la serata.',
    comeArrivare:
      'Aeroporto di San Pablo, a circa 10 km dal centro (bus EA o taxi). Treno AVE ad alta velocità da Madrid in circa 2h30. Il bus EA di Tussam va a Santa Justa, Prado de San Sebastián e Plaza de Armas in circa 35 minuti, ogni 20-30 minuti, per circa 4 € pagabili a bordo con carta contactless; il taxi ha una tariffa fissa per il centro di circa 25 € di giorno e 28 € di notte e nei festivi.',
    comeSpostarsi: 'Il centro storico si gira quasi interamente a piedi; per le distanze maggiori, bus urbani e il tram (linea T1) lungo l\'asse centrale.',
    periodoMigliore:
      'marzo-maggio e ottobre-inizio novembre, con temperature gradevoli. Da evitare luglio-agosto: Siviglia è fra le città più calde di Spagna, con medie spesso sopra i 36°C e picchi ben oltre. La Settimana Santa e la Feria de Abril (due settimane dopo Pasqua) portano folla e prezzi alti, ma sono anche i giorni in cui la città vive le sue tradizioni più sentite.',
    costi:
      'Cattedrale e Giralda circa 15€; Real Alcázar circa 15,50€ (Appartamenti Reali +5,50€, gratuito la sera con prenotazione in una fascia oraria dedicata); un tablao di flamenco medio 35-45€ a persona. Budget indicativo al giorno a persona, con la doppia divisa in due: basso 60-80 €, medio 110-150 €, alto oltre 220 €.',
    erroriDaEvitare: [
      'Sottovalutare il caldo estivo: da giugno a settembre le ore centrali della giornata vanno evitate per qualsiasi attività all\'aperto',
      'Scegliere il primo tablao pubblicizzato in centro senza controllarne la reputazione: i locali più turistici fanno spettacoli standard e amplificati, lontani dal flamenco dei quartieri',
      'Salire sulla Giralda a metà giornata in alta stagione: le code sotto il sole possono essere lunghe',
    ],
    luoghi: [
      {
        "nome": "Cattedrale di Siviglia e Giralda",
        "testo": "Una delle più grandi cattedrali gotiche del mondo, costruita dopo la Reconquista sul sito della grande moschea almohade. Dentro c'è il monumento funebre di Cristoforo Colombo. Il campanile, la Giralda, è l'ex minareto: si sale con una rampa e non con le scale, e dalla cima si vedono i tetti e l'Alcázar.",
        "come": "Si trova in pieno centro, a piedi da Santa Cruz o dalla Plaza Nueva. Il biglietto unico comprende cattedrale e Giralda: la visita comincia dalla torre, che ha un controllo di accessi a parte.",
        "quando": "Lunedì-sabato 10:45-18:00 (biglietteria fino alle 17), domenica 14:30-19:00 (biglietteria fino alle 18); orari 2026, che cambiano per funzioni ed eventi: controllare il calendario del sito. Meglio all'apertura.",
        "tempo": "1-2 ore",
        "costo": "13 euro online, 14 euro in biglietteria (dal 1 gennaio 2026); il biglietto comprende anche la chiesa del Salvador",
        "orari": "Dal lunedì al sabato dalla tarda mattinata al tardo pomeriggio; la domenica solo nel pomeriggio.",
        "lat": 37.3858,
        "lng": -5.9931,
        "url": "https://www.catedraldesevilla.es/",
        "consiglio": "Comprare il biglietto online la sera prima: in primavera la coda in biglietteria è lunga. Si entra prima nella Giralda, quindi conviene salire subito, quando le gambe sono fresche."
      },
      {
        "nome": "Real Alcázar",
        "testo": "Palazzo reale ancora in uso, nato come fortezza moresca e rifatto nel Trecento dal re Pietro I in stile mudéjar con maestranze di Granada. Il Palacio de Pedro I, il Salón de Embajadores e i patii con le decorazioni in stucco sono il cuore della visita. Dietro ci sono giardini grandi, con fontane e labirinti di siepi.",
        "come": "Entrata dalla Puerta del León, sulla Plaza del Triunfo, di fronte alla cattedrale. Si segue un percorso unico; le audioguide si noleggiano all'ingresso.",
        "quando": "Aperto 9:30-19 da aprile a settembre e 9:30-17 da ottobre a marzo. Chiuso il 1 e il 6 gennaio, il Venerdì Santo e il 25 dicembre. Primo mattino o ultima fascia del pomeriggio per evitare i gruppi.",
        "tempo": "2-3 ore",
        "costo": "15,50 euro intero (tariffa sul sito ufficiale, 2026); gli Apartamentos Reales si pagano a parte",
        "orari": "Tutti i giorni dalle 9:30; chiusura alle 19 da aprile a settembre e alle 17 d'inverno.",
        "lat": 37.3831,
        "lng": -5.9902,
        "url": "https://www.alcazarsevilla.org/",
        "consiglio": "Prenotare online e scegliere la prima fascia: i patii sono piccoli e si apprezzano solo senza folla. Gli Apartamentos Reales si visitano con una prenotazione a parte."
      },
      {
        "nome": "Barrio de Santa Cruz",
        "testo": "L'ex quartiere ebraico, tra la cattedrale e i giardini di Murillo. Vicoli stretti, balconi di ferro, piazzette con aranci e patii che si intravedono dai cancelli.",
        "come": "A piedi, subito dietro l'Alcázar. Non c'è un percorso: conviene entrare da Calle Judería e uscire dall'altra parte.",
        "quando": "Presto la mattina è vuoto e fresco; in tarda mattinata si riempie di gruppi.",
        "tempo": "1-2 ore",
        "costo": "gratuito",
        "lat": 37.3851,
        "lng": -5.9887,
        "consiglio": "Tornarci di sera, dopo cena: i vicoli si svuotano e le piazzette sono illuminate."
      },
      {
        "nome": "Plaza de España e Parque de María Luisa",
        "testo": "Semicerchio monumentale costruito per l'Esposizione Iberoamericana del 1929, con un canale, ponti e una serie di nicchie in ceramica una per provincia spagnola. Il parco accanto è il grande polmone verde della città.",
        "come": "A piedi dalla cattedrale, oppure in bici lungo il parco. Ingresso libero.",
        "quando": "Al mattino presto o al tramonto. Nelle ore centrali d'estate l'ombra manca.",
        "tempo": "1 ora, più il parco",
        "costo": "gratuito; barchette sul canale a pagamento",
        "lat": 37.3772,
        "lng": -5.9869,
        "consiglio": "Chi vuole fare le foto senza gente ci arrivi presto la mattina. Le panchine in ceramica sono ordinate per provincia in ordine alfabetico: cercare la propria città preferita è un piccolo gioco."
      },
      {
        "nome": "Triana",
        "testo": "Il quartiere sull'altra riva del Guadalquivir, storicamente di ceramisti, marinai e gitani. È una delle culle del flamenco. Oggi ha un mercato coperto, botteghe di azulejos e bar sulla Calle Betis, affacciata sul fiume.",
        "come": "Si attraversa a piedi il Puente de Isabel II (Puente de Triana) dal centro.",
        "quando": "Il mercato lavora soprattutto al mattino. La sera Calle Betis è piena di gente e il fiume dà il panorama sulla Torre del Oro.",
        "tempo": "2-3 ore",
        "costo": "gratuito; Castillo de San Jorge a ingresso libero",
        "lat": 37.3851,
        "lng": -6.0033,
        "consiglio": "Mangiare qui invece che in centro: i bar costano meno e i clienti sono per lo più del quartiere."
      },
      {
        "nome": "Flamenco in un tablao",
        "testo": "Il flamenco si vede meglio in locali piccoli, dove i musicisti suonano a pochi metri dal pubblico e senza amplificazione. Cantante, chitarrista e ballerino si rispondono: è uno spettacolo che si segue anche senza capire le parole.",
        "come": "Si prenota il posto sul sito o al telefono del locale, con qualche giorno di anticipo. Il Museo del Baile Flamenco, in Santa Cruz, organizza anche serate.",
        "quando": "Serate quasi ogni giorno, con orari che cambiano da locale a locale: verificare il programma settimanale.",
        "tempo": "1-1 ora e mezza",
        "costo": "circa 35-45 € a persona in un tablao medio",
        "consiglio": "Sedersi nelle prime file e chiedere al locale se il programma è acustico: evita i grandi spettacoli per gruppi."
      },
      {
        "nome": "Metropol Parasol (Las Setas) e Casa de Pilatos",
        "testo": "Las Setas è una grande struttura in legno sopra la Plaza de la Encarnación, completata nel 2011, con terrazze panoramiche in alto e, sotto, un museo con resti romani e moreschi trovati nello scavo. La Casa de Pilatos è un palazzo nobiliare in stile mudéjar e rinascimentale, meno visitato dell'Alcázar ma con patii simili.",
        "come": "A piedi dal centro: Las Setas a nord di Calle Sierpes, la Casa de Pilatos verso est.",
        "quando": "Las Setas al tramonto, la Casa de Pilatos al mattino. Controllare orari sui siti dei gestori.",
        "tempo": "1 ora per ciascuna",
        "lat": 37.3933,
        "lng": -5.9918,
        "consiglio": "Se l'Alcázar è esaurito per la data scelta, la Casa de Pilatos è l'alternativa più vicina per vedere un palazzo mudéjar."
      },
      {
        "nome": "Archivo General de Indias",
        "testo": "L'antica borsa dei mercanti, tra la Cattedrale e l'Alcázar, custodisce i documenti dell'impero spagnolo in America, dalle lettere di Colombo alle mappe. Le sale del primo piano, con scaffali di mogano, si visitano gratis.",
        "come": "In Avenida de la Constitución, accanto alla Cattedrale.",
        "quando": "Nelle ore calde, tra una visita e l'altra.",
        "tempo": "30-45 minuti",
        "costo": "gratuito",
        "orari": "Dal martedì alla domenica; chiuso il lunedì.",
        "lat": 37.3846,
        "lng": -5.9926
      },
      {
        "nome": "Torre del Oro e lungofiume",
        "testo": "La torre di guardia almohade del XIII secolo sul Guadalquivir, che controllava il porto dei galeoni. Dentro c'è un piccolo museo navale; intorno il Paseo de Cristóbal Colón porta alla Maestranza e al ponte di Triana.",
        "come": "A piedi dalla Cattedrale in dieci minuti.",
        "quando": "Al tramonto, camminando lungo il fiume verso Triana.",
        "tempo": "30 minuti",
        "costo": "museo navale con biglietto simbolico",
        "lat": 37.3824,
        "lng": -5.9964
      },
      {
        "nome": "Plaza de Toros de la Maestranza",
        "testo": "Una delle arene più antiche e importanti di Spagna, del Settecento, con la facciata bianca e ocra sul fiume. La visita guidata passa dalle gradinate, dalla cappella e dal museo della tauromachia.",
        "come": "Sul Paseo de Cristóbal Colón; visite guidate a orario, frequenti.",
        "quando": "La mattina; nei giorni di corrida le visite si interrompono.",
        "tempo": "45 minuti",
        "costo": "circa 12 €, con guida (2026)",
        "lat": 37.3858,
        "lng": -5.9988,
        "url": "https://www.realmaestranza.com/"
      },
      {
        "nome": "Museo de Bellas Artes",
        "testo": "In un convento con chiostri di azulejos, la seconda pinacoteca di Spagna per la pittura del Siglo de Oro: Murillo, Zurbarán, Valdés Leal. La chiesa del convento è affrescata da cima a fondo.",
        "come": "Plaza del Museo, a dieci minuti dalla Cattedrale verso nord-ovest.",
        "quando": "La domenica mattina, con il mercatino d'arte nella piazza.",
        "tempo": "1h30",
        "costo": "gratuito per i cittadini UE",
        "orari": "Chiuso il lunedì.",
        "lat": 37.3929,
        "lng": -6.0001
      },
      {
        "nome": "Palacio de las Dueñas",
        "testo": "Il palazzo dei duchi d'Alba, gotico-mudéjar e rinascimentale, con patii fioriti, il limoneto e le stanze piene di quadri e ricordi della famiglia. Qui nacque il poeta Antonio Machado.",
        "come": "A cinque minuti dalle Setas, in calle Dueñas; audioguida inclusa.",
        "quando": "In primavera, con le bouganville e gli aranci in fiore.",
        "tempo": "1 ora",
        "costo": "circa 15 €, con audioguida (2026)",
        "lat": 37.3966,
        "lng": -5.9898,
        "url": "https://www.lasduenas.es/"
      },
      {
        "nome": "Hospital de los Venerables",
        "testo": "Un ospizio barocco per sacerdoti anziani nel cuore di Santa Cruz, con un patio a scalini e una chiesa affrescata da Valdés Leal. Ospita il Centro Velázquez, con opere del pittore sivigliano.",
        "come": "In Plaza de los Venerables, nei vicoli di Santa Cruz; audioguida inclusa.",
        "quando": "Nelle ore centrali, quando il barrio è pieno di gruppi.",
        "tempo": "1 ora",
        "costo": "a pagamento, con audioguida",
        "lat": 37.3852,
        "lng": -5.9907,
        "url": "https://www.fundacionfocus.com/"
      },
      {
        "nome": "Basílica de la Macarena",
        "testo": "La chiesa della Esperanza Macarena, la Vergine più venerata di Siviglia, che esce in processione la notte del Venerdì Santo. Il museo accanto conserva i carri e i manti ricamati della confraternita.",
        "come": "Nel nord della città vecchia, accanto all'Arco e alle mura almohadi; bus o 20 minuti a piedi dalle Setas.",
        "quando": "La mattina, abbinando il mercato di Feria e l'Alameda.",
        "tempo": "45 minuti",
        "costo": "basilica gratuita; museo a pagamento",
        "lat": 37.403,
        "lng": -5.9895,
        "url": "https://www.hermandaddelamacarena.es/"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Real Alcázar all'apertura, con biglietto a orario",
          "Cattedrale e Giralda, poi Archivo de Indias",
          "Pranzo e siesta; pomeriggio nel Barrio de Santa Cruz",
          "Plaza de España al tramonto",
          "Sera: tapas a Triana e flamenco"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Alcázar, Cattedrale e Giralda, Santa Cruz, tablao la sera",
          "Giorno 2: Plaza de España e Parque de María Luisa al mattino, Torre del Oro e Maestranza, Triana nel pomeriggio, Las Setas al tramonto"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Alcázar, Cattedrale, Archivo de Indias, Santa Cruz",
          "Giorno 2: Plaza de España, Torre del Oro, Maestranza, Triana e flamenco",
          "Giorno 3: Casa de Pilatos, Palacio de las Dueñas, Museo de Bellas Artes e Las Setas; oppure gita a Córdoba"
        ]
      }
    ],
    zone: [
      {
        "nome": "Santa Cruz",
        "perChi": "Chi vuole stare a due passi dai monumenti",
        "testo": "Si esce dall'albergo e si è già sotto la cattedrale. Di giorno è affollato e di sera nei vicoli si sentono i tavoli dei ristoranti per turisti. I prezzi sono i più alti. Ci si muove solo a piedi, e i taxi non entrano nei vicoli.",
        "fascia": "110-220 €"
      },
      {
        "nome": "Triana",
        "perChi": "Chi preferisce un quartiere vivo e meno turistico",
        "testo": "Costa un po' meno e ha più bar frequentati dagli abitanti. Il centro si raggiunge a piedi attraverso il ponte. Il rumore dei locali sul lungofiume la sera può arrivare alle camere più vicine.",
        "fascia": "90-170 €"
      },
      {
        "nome": "Alameda de Hércules e la Macarena",
        "perChi": "Chi viaggia con budget ridotto o ama la vita notturna",
        "testo": "Quartiere più giovane, con bar, locali alternativi e prezzi contenuti, a nord del centro e raggiungibile a piedi dalla cattedrale. Nel fine settimana la piazza è rumorosa fino a tardi.",
        "fascia": "80-150 €"
      }
    ],
    gite: [
      {
        "nome": "Córdoba",
        "distanza": "45 minuti in treno ad alta velocità",
        "come": "AVE o treni ad alta velocità privati da Santa Justa; dalla stazione 20 minuti a piedi alla Mezquita.",
        "testo": "La Mezquita-Cattedrale, con la foresta di archi bianchi e rossi, la Judería e il ponte romano. La Mezquita costa circa 13 € ed è gratuita la mattina presto dal lunedì al sabato."
      },
      {
        "nome": "Cadice",
        "distanza": "1h45 in treno",
        "come": "Treni regionali da Santa Justa fino a Cádiz, che arrivano in centro.",
        "testo": "Una delle città più antiche d'Europa su una penisola, con la cattedrale sul mare, il mercato del pesce e la spiaggia della Caleta."
      },
      {
        "nome": "Carmona",
        "distanza": "35 km, 40 minuti in bus",
        "come": "Bus dalla stazione di Prado de San Sebastián.",
        "testo": "Un paese bianco su una collina con porte romane, l'Alcázar del rey Don Pedro e una necropoli romana. È una mezza giornata tranquilla."
      },
      {
        "nome": "Jerez de la Frontera",
        "distanza": "1 ora in treno",
        "come": "Treni regionali da Santa Justa; le bodegas sono a piedi dal centro.",
        "testo": "Le cantine dello sherry, con visita e degustazione, e la Real Escuela Andaluza de Arte Ecuestre con lo spettacolo dei cavalli."
      }
    ],
    sapori: [
      {
        "nome": "Salmorejo",
        "testo": "Crema fredda di pomodoro, pane, olio e aglio, più densa del gazpacho, guarnita con uovo sodo e prosciutto. Si trova in quasi tutti i bar come primo o come tapa."
      },
      {
        "nome": "Espinacas con garbanzos",
        "testo": "Spinaci e ceci con cumino e aglio, un piatto di origine moresca servito in porzione piccola nei bar di tapas."
      },
      {
        "nome": "Pescaíto frito",
        "testo": "Fritto misto di pesce (acciughe, calamari, merluzzo) infarinato con farina fine e fritto in olio d'oliva. È tradizione dei venerdì e si mangia in friggitorie e bar di Triana."
      },
      {
        "nome": "Jamón ibérico e carrillada",
        "testo": "Il prosciutto stagionato si serve a fette sottili sul bancone. La carrillada è la guancia di maiale brasata nel vino, tenera, tra i piatti più richiesti nei bar di quartiere."
      },
      {
        "nome": "Torrijas e pestiños",
        "testo": "Dolci tipici della Settimana Santa: le torrijas sono fette di pane imbevute di latte e fritte, i pestiños sono frittelle al miele. Si trovano nelle pasticcerie in quel periodo."
      }
    ],
    attenzioni: [
      "Donne che offrono rametti di rosmarino davanti alla cattedrale: leggono la mano o benedicono e poi chiedono soldi. Basta dire no e non prendere il ramo.",
      "Borseggi nelle zone affollate: cattedrale, Santa Cruz, Plaza de España e i tram. Tenere borsa davanti e telefono in tasca interna.",
      "Biglietti di Real Alcázar, cattedrale e Giralda: comprarli solo sui siti ufficiali. I rivenditori applicano sovrapprezzi, e a Pasqua e nella Feria de Abril le date si esauriscono in anticipo.",
      "Caldo da giugno a settembre: le ore centrali del pomeriggio si passano al chiuso. Portare acqua e un cappello.",
      "Tablao: diffidare di chi ferma per strada con volantini scontati. Prenotare direttamente con il locale."
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Siviglia?",
        "risposta": "Due giorni per Alcázar, Cattedrale, Santa Cruz, Plaza de España e Triana; tre per i palazzi e i musei con calma o per una gita a Córdoba."
      },
      {
        "domanda": "Bisogna prenotare il Real Alcázar?",
        "risposta": "Sì, conviene comprare online il biglietto a orario, circa 15,50 €: in primavera le fasce migliori finiscono giorni prima. Gli Appartamenti Reali hanno un supplemento e posti limitati."
      },
      {
        "domanda": "Si può visitare Siviglia d'estate?",
        "risposta": "Sì, ma a luglio e agosto si superano spesso i 40 gradi: visite al mattino presto e dopo le 19, siesta nelle ore centrali. Marzo-maggio e ottobre-novembre sono i mesi migliori."
      },
      {
        "domanda": "Quando sono la Semana Santa e la Feria de Abril?",
        "risposta": "La Semana Santa è la settimana prima di Pasqua, la Feria due settimane dopo. In quei giorni la città è piena e gli alloggi costano anche il triplo."
      },
      {
        "domanda": "Dove dormire a Siviglia?",
        "risposta": "Santa Cruz per avere i monumenti sotto casa, Triana per un quartiere vissuto, l'Alameda per i locali e prezzi più bassi. Fuori dalle feste una doppia costa circa 80-220 €."
      },
      {
        "domanda": "Come si va dall'aeroporto al centro di Siviglia?",
        "risposta": "Il bus EA arriva a Santa Justa e Prado de San Sebastián in circa 35 minuti per circa 4 €, pagabile a bordo con carta. Il taxi ha una tariffa fissa di circa 25 € di giorno."
      }
    ],
    esperienzeSlugs: ['flamenco-triana', 'tapeo-siviglia'],
    tripSlugs: ['andalusia-itinerario'],
    imageAlt: 'La Giralda e le guglie della Cattedrale di Siviglia accanto a una torre delle mura del Real Alcázar',
    immagine: '/images/spagna/siviglia.jpg',
  },
  {
    slug: 'granada',
    paeseSlug: 'spagna',
    ordine: 2,
    nome: 'Granada',
    tipologia: ['città', 'cultura moresca', 'montagna'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono stato nei nove giorni in Andalusia con amici, arrivando da Córdoba: un giorno per l'Alhambra e il Generalife, uno per l'Albaicín e il Sacromonte, poi in auto a noleggio verso Ronda.",
    introduzione:
      'L\'ultima capitale del regno moresco di al-Andalus, caduta nel 1492. L\'Alhambra la domina dalla collina e intorno ci sono le vette innevate della Sierra Nevada: in certi periodi dell\'anno è l\'unico posto in Europa dove si può sciare al mattino e stare in spiaggia il pomeriggio.',
    percheAndarci:
      'Per l\'Alhambra, uno dei monumenti più visitati al mondo e per molti il motivo principale di un viaggio in Andalusia. Poi c\'è l\'Albaicín, il quartiere moresco che le sta di fronte, e una vita studentesca che rende Granada più economica e più giovane delle altre città andaluse.',
    cosaVedere: [
      'L\'Alhambra: i Palazzi Nazridi (Palacio de Comares e Palacio de los Leones, con il celebre Patio de los Leones), l\'Alcazaba, la fortezza più antica, e il Generalife, i giardini estivi dei sultani',
      'L\'Albaicín, il quartiere moresco patrimonio UNESCO con l\'antico impianto arabo di vicoli e carmens (case con giardino recintato)',
      'Il Mirador de San Nicolás, il punto panoramico sull\'Alhambra con la Sierra Nevada innevata sullo sfondo, soprattutto al tramonto',
      'La Cattedrale rinascimentale e la Capilla Real, dove sono sepolti i Re Cattolici Ferdinando e Isabella',
      'Il Sacromonte, il quartiere delle case-grotta abitate storicamente dalla comunità gitana, cuore di una tradizione di flamenco propria (la zambra)',
    ],
    cosaFare: [
      'Prenotare i biglietti dell\'Alhambra con largo anticipo (vedi la scheda esperienza dedicata): dimenticarsene è l\'errore più comune di chi visita Granada',
      'Passeggiare per l\'Albaicín senza meta fissa, tra i carmens e le piccole moschee',
      'Salire al Mirador de San Nicolás al tramonto per la vista classica sull\'Alhambra',
      'Una zambra di flamenco in una delle case-grotta del Sacromonte',
      'Il tapeo granadino: qui, a differenza di quasi tutto il resto di Spagna, la tapa arriva gratis con ogni consumazione',
    ],
    doveDormire: 'L\'Albaicín per l\'atmosfera e la vista, con salite ripide da mettere in conto; il centro intorno alla Cattedrale per comodità e vita notturna.',
    doveMangiare:
      'Granada è tra le poche città spagnole dove la tapa è ancora gratuita con ogni bevanda ordinata: un giro di birre nei bar del centro o di Calle Navas equivale a una cena leggera. Da provare il remojón granadino (insalata di arancia, baccalà e olive) e i piatti della tradizione morisca con spezie come cumino e cannella.',
    comeArrivare:
      'Aeroporto Federico García Lorca, circa 15 km dal centro. Treno AVE da Madrid in circa 3h10-3h30; bus diretto da Siviglia (circa 3h) o da Córdoba (circa 2h). Dall\'aeroporto un bus collega il centro in circa 40 minuti. In città i minibus C30 (per l\'Alhambra) e C31 e C32 (per l\'Albaicín e il Sacromonte) partono da Plaza Isabel la Católica e Plaza Nueva.',
    comeSpostarsi: 'Centro storico e Albaicín solo a piedi (salite ripide); minibus locali per le zone più alte del Sacromonte e dell\'Albaicín; l\'Alhambra si raggiunge a piedi in salita dal centro o con un bus navetta dedicato.',
    periodoMigliore: 'aprile-giugno e settembre-ottobre. L\'estate è calda ma meno estrema che a Siviglia grazie alla quota (circa 700 metri) e alla vicinanza della Sierra Nevada; l\'inverno è freddo, con la neve visibile sulle vette a pochi km dalla città.',
    costi:
      'Alhambra generale 22,27 € più la commissione online (2026) (i biglietti si esauriscono con settimane, in alta stagione anche mesi, di anticipo); Cattedrale e Capilla Real circa 7€ ciascuna. Budget indicativo al giorno a persona, con la doppia divisa in due: basso 50-70 €, medio 90-130 €, alto oltre 200 €.',
    erroriDaEvitare: [
      'Arrivare a Granada senza aver già prenotato l\'Alhambra: i biglietti si comprano sul sito ufficiale (anche al telefono o alle casse automatiche) e in alta stagione (giugno-settembre e vacanze) si esauriscono con settimane di anticipo',
      'Sottovalutare le salite dell\'Albaicín e del Sacromonte: sono ripide e acciottolate, poco comode con bagagli o scarpe non adatte',
      'Prenotare uno spettacolo di flamenco senza informarsi: nel Sacromonte convivono zambras autentiche e format molto turistici allo stesso prezzo',
    ],
    luoghi: [
      {
        "nome": "Alhambra e Generalife",
        "testo": "Cittadella dei sultani nasridi sulla collina della Sabika: i Palazzi Nasridi con stucchi e soffitti a stalattiti, l'Alcazaba militare, il palazzo rinascimentale di Carlo V e i giardini del Generalife. Il Patio de los Leones e la Sala de las Dos Hermanas sono i punti più celebri.",
        "come": "A piedi in salita dal centro o con il minibus urbano 30 o 32 da Plaza Isabel la Católica. L'ingresso è con biglietto nominale e per i Palazzi Nasridi vale la fascia oraria stampata: arrivare in anticipo, non dopo. Servono documento e conferma.",
        "quando": "Aperta tutti i giorni: 8:30-20 dal 1 aprile al 14 ottobre, 8:30-18 dal 15 ottobre al 31 marzo. Chiusa il 25 dicembre e il 1 gennaio. I biglietti si comprano sul canale ufficiale (online, al telefono o alle casse automatiche) e in alta stagione si esauriscono con settimane di anticipo.",
        "tempo": "3-4 ore, mezza giornata se si vuole vedere tutto",
        "costo": "22,08 euro Alhambra General diurna sul canale ufficiale (2026)",
        "orari": "Tutti i giorni dalle 8:30; chiusura alle 20 da aprile a metà ottobre e alle 18 d'inverno, con visite notturne in alcune sere.",
        "lat": 37.1761,
        "lng": -3.5881,
        "url": "https://www.alhambra-patronato.es/",
        "consiglio": "Scegliere la fascia del mattino per i Palazzi Nasridi, quando la luce entra dai patii. Mettere in conto che il percorso è tutto all'aperto."
      },
      {
        "nome": "Albaicín",
        "testo": "Il quartiere moresco in collina, patrimonio UNESCO, con vicoli stretti in salita, carmen (case con giardino recintato) e piccole piazze. Da vari punti si vede l'Alhambra di fronte.",
        "come": "A piedi dalla Plaza Nueva, salendo per la Cuesta del Chapiz o per Calle Calderería Nueva. Ci sono anche minibus che fanno il giro del quartiere.",
        "quando": "Mattino presto o fine pomeriggio. Nelle ore centrali d'estate le salite sono pesanti.",
        "tempo": "2-3 ore",
        "costo": "gratuito",
        "lat": 37.181,
        "lng": -3.592,
        "consiglio": "Scendere a piedi e salire in minibus: le pendenze si sentono soprattutto in salita."
      },
      {
        "nome": "Mirador de San Nicolás",
        "testo": "Il belvedere più noto di Granada: davanti si apre l'Alhambra e dietro le cime della Sierra Nevada. Al tramonto si riempie di persone, con musicisti e venditori.",
        "come": "Salita a piedi da Plaza Nueva, oppure con il minibus urbano C31 o C32 che sale all'Albaicín. Ingresso libero.",
        "quando": "Al tramonto. In alternativa all'alba, quasi senza gente.",
        "tempo": "30-60 minuti",
        "costo": "gratuito",
        "lat": 37.1811,
        "lng": -3.5926,
        "consiglio": "Chi cerca la stessa vista con meno folla può salire al vicino Mirador de San Cristóbal o al Carmen de los Mártires."
      },
      {
        "nome": "Cattedrale e Capilla Real",
        "testo": "La cattedrale rinascimentale ha una navata alta e chiara, diversa da quelle gotiche. La Capilla Real, accanto, custodisce le tombe dei Re Cattolici, Ferdinando e Isabella, in marmo scolpito.",
        "come": "A piedi dal centro, nel quartiere della cattedrale. Sono due ingressi separati.",
        "quando": "Aperte tutti i giorni, di solito con pausa nelle ore centrali, e la domenica con orari ridotti. Controllare gli orari ufficiali.",
        "tempo": "1 ora per la cattedrale, 30-45 minuti per la Capilla Real",
        "costo": "circa 7 € la Cattedrale e circa 7 € la Capilla Real (2026)",
        "lat": 37.1764,
        "lng": -3.5994,
        "url": "https://catedraldegranada.com/",
        "consiglio": "Si visitano bene dopo l'Alhambra, per capire cosa venne dopo la caduta del regno nasride."
      },
      {
        "nome": "Sacromonte e Museo delle Grotte",
        "testo": "Il quartiere delle case-grotta sulla collina di fronte all'Alhambra, abitato storicamente dalla comunità gitana. Qui è nata la zambra, un flamenco più rituale e di gruppo, che si vede in alcune cuevas.",
        "come": "A piedi lungo il Camino del Sacromonte dal quartiere dell'Albaicín, oppure con il minibus urbano C34 dal centro. La strada è lunga e in salita.",
        "quando": "Spettacoli di sera. Di giorno si visita il museo e si passeggia per il paesaggio delle grotte.",
        "tempo": "2-3 ore, più la serata per uno spettacolo",
        "lat": 37.183,
        "lng": -3.58,
        "consiglio": "Prima di prenotare una zambra, leggere le recensioni recenti: gli spettacoli molto turistici hanno lo stesso prezzo di quelli seri."
      },
      {
        "nome": "Alcaicería e Corral del Carbón",
        "testo": "L'Alcaicería era il vecchio mercato della seta nasride: oggi è un dedalo di botteghe per turisti. Il Corral del Carbón, accanto, è un raro fondaco di epoca nasride, del Trecento, che faceva da magazzino e locanda per i mercanti.",
        "come": "A piedi, a pochi passi dalla cattedrale. L'ingresso al Corral è libero negli orari di apertura.",
        "quando": "Al mattino, quando le botteghe aprono e le strade sono più libere.",
        "tempo": "30-45 minuti",
        "costo": "gratuito",
        "lat": 37.1755,
        "lng": -3.5985,
        "consiglio": "Il Corral conviene vederlo anche solo per entrare nel cortile con le gallerie in legno."
      },
      {
        "nome": "Carrera del Darro e Paseo de los Tristes",
        "testo": "La strada lastricata lungo il fiume Darro, con ponticelli di pietra, conventi e case nobili sotto le mura dell'Alhambra. Finisce al Paseo de los Tristes, dove si guarda la fortezza dal basso.",
        "come": "A piedi da Plaza Nueva; i minibus C31 e C32 passano di qui.",
        "quando": "La sera, con l'Alhambra illuminata.",
        "tempo": "1 ora",
        "costo": "gratuito",
        "lat": 37.1781,
        "lng": -3.5905
      },
      {
        "nome": "El Bañuelo",
        "testo": "I bagni arabi dell'XI secolo sulla Carrera del Darro, tra i meglio conservati di Spagna, con le volte a stella forate da lucernari. Fa parte del biglietto Dobla de Oro insieme ad altri monumenti andalusí.",
        "come": "Sulla Carrera del Darro, a cinque minuti da Plaza Nueva.",
        "quando": "Nelle ore di sole, quando la luce entra dai lucernari.",
        "tempo": "20-30 minuti",
        "costo": "biglietto economico, incluso nella Dobla de Oro",
        "lat": 37.1779,
        "lng": -3.5911
      },
      {
        "nome": "Mirador de San Miguel Alto",
        "testo": "Il belvedere più alto sull'Albaicín, accanto all'eremo sulle mura nasride, con la vista su Alhambra, città e Sierra Nevada insieme. È molto meno affollato di San Nicolás.",
        "come": "A piedi dal Sacromonte o dalla Puerta de Fajalauza, con una salita ripida; in taxi fin quasi in cima.",
        "quando": "Al tramonto, con una giacca d'inverno.",
        "tempo": "1 ora con la salita",
        "costo": "gratuito",
        "lat": 37.1858,
        "lng": -3.5915
      },
      {
        "nome": "Monasterio de San Jerónimo",
        "testo": "Il primo monastero fondato dopo la conquista cristiana, con due chiostri e una chiesa rinascimentale dove è sepolto il Gran Capitán. L'interno dorato è tra i più belli della città.",
        "come": "A dieci minuti a piedi dalla Cattedrale, verso ovest.",
        "quando": "La mattina, con poca gente.",
        "tempo": "45 minuti",
        "costo": "biglietto di pochi euro",
        "lat": 37.1787,
        "lng": -3.6038
      },
      {
        "nome": "Monasterio de la Cartuja",
        "testo": "La certosa ha una sagrestia tra i capolavori del barocco spagnolo, tutta stucchi bianchi, marmi e intarsi. Il chiostro e il refettorio hanno dipinti di Sánchez Cotán.",
        "come": "A nord del centro, vicino all'università: bus urbani o 25 minuti a piedi.",
        "quando": "Un pomeriggio, dopo la siesta.",
        "tempo": "45 minuti",
        "costo": "biglietto di pochi euro",
        "lat": 37.1924,
        "lng": -3.5987
      },
      {
        "nome": "Huerta de San Vicente",
        "testo": "La casa estiva della famiglia di Federico García Lorca, dove il poeta scrisse alcune delle sue opere e da cui partì poco prima di essere ucciso nel 1936. Si visita con guida, tra mobili e oggetti originali.",
        "come": "Nel parco García Lorca, a 20 minuti a piedi dal centro; visite a gruppi a orario.",
        "quando": "Al mattino; il lunedì è chiusa.",
        "tempo": "45 minuti",
        "orari": "Chiusa il lunedì.",
        "lat": 37.17,
        "lng": -3.613,
        "url": "https://www.huertadesanvicente.com/"
      },
      {
        "nome": "Hammam Al Ándalus",
        "testo": "Bagni in stile arabo moderni, in una casa ai piedi dell'Alhambra, con vasche a tre temperature, sala di vapore e massaggi. È il modo di finire una giornata di salite.",
        "come": "In calle Santa Ana, accanto a Plaza Nueva; ingressi a turni di 90 minuti su prenotazione.",
        "quando": "La sera, dopo l'Alhambra.",
        "tempo": "1h30",
        "costo": "a pagamento, con o senza massaggio",
        "lat": 37.1775,
        "lng": -3.5917,
        "url": "https://granada.hammamalandalus.com/"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Alhambra con Palacios Nazaríes all'orario del biglietto, Alcazaba e Generalife",
          "Pranzo e siesta in centro",
          "Pomeriggio: Cattedrale, Capilla Real e Alcaicería",
          "Carrera del Darro e salita all'Albaicín",
          "Tramonto al Mirador de San Nicolás e cena con tapas"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Alhambra e Generalife, Carrera del Darro e Paseo de los Tristes la sera",
          "Giorno 2: Cattedrale e Capilla Real, Alcaicería, El Bañuelo, Albaicín e Sacromonte, tramonto a San Miguel Alto o San Nicolás, flamenco in una cueva"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Alhambra e Generalife, Paseo de los Tristes",
          "Giorno 2: centro, Cattedrale, San Jerónimo, Albaicín e tramonto a San Nicolás",
          "Giorno 3: Sacromonte e Museo delle Grotte, Cartuja o Huerta de San Vicente, Hammam la sera; oppure gita nelle Alpujarras"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro intorno alla cattedrale",
        "perChi": "Chi vuole comodità e vita serale",
        "testo": "Tutto a piedi: Alhambra, tapas, Albaicín. La sera il rumore dei bar arriva alle camere basse. I prezzi sono medi.",
        "fascia": "80-160 €"
      },
      {
        "nome": "Albaicín",
        "perChi": "Chi cerca atmosfera e vista sull'Alhambra",
        "testo": "Camere in carmen e piccole pensioni, silenzio la sera. Le strade sono ripide e acciottolate, scomode con le valigie: spesso il taxi non arriva alla porta.",
        "fascia": "90-180 €"
      },
      {
        "nome": "Realejo",
        "perChi": "Chi vuole un quartiere di vita locale, più economico",
        "testo": "Ai piedi dell'Alhambra, con bar frequentati da universitari e prezzi bassi. Il centro è a pochi passi, la salita verso la collina comincia subito.",
        "fascia": "70-140 €"
      }
    ],
    gite: [
      {
        "nome": "Alpujarras",
        "distanza": "75 km, 1h15 in auto",
        "come": "In auto, oppure con i bus Alsa per Pampaneira, Bubión e Capileira, poche corse al giorno.",
        "testo": "I paesi bianchi con i tetti piatti berberi sulle pendici della Sierra Nevada, nella gola del Poqueira. Si cammina tra un paese e l'altro su sentieri segnati."
      },
      {
        "nome": "Sierra Nevada",
        "distanza": "35 km, 45 minuti-1 ora",
        "come": "Bus diretti dalla stazione dei bus di Granada a Pradollano, oppure in auto.",
        "testo": "La stazione sciistica più a sud d'Europa, aperta di solito da dicembre ad aprile; d'estate ci sono sentieri in quota verso il Veleta."
      },
      {
        "nome": "Córdoba",
        "distanza": "1h30 in treno",
        "come": "Treni ad alta velocità diretti da Granada; il centro storico è a 20 minuti a piedi dalla stazione.",
        "testo": "La Mezquita-Cattedrale e la Judería si vedono bene in una giornata, partendo presto."
      }
    ],
    sapori: [
      {
        "nome": "Tapa gratis con la bibita",
        "testo": "A Granada con ogni consumazione arriva una tapa omaggio: se ordini un'altra bevanda, la tapa cambia. Il giro di Calle Navas, Calle Elvira e Realejo è una cena a poco."
      },
      {
        "nome": "Remojón granadino",
        "testo": "Insalata di arancia, baccalà dissalato, cipolla e olive nere, con olio d'oliva. È un piatto freddo di origine contadina."
      },
      {
        "nome": "Habas con jamón e tortilla del Sacromonte",
        "testo": "Le fave con prosciutto sono un classico di stagione. La tortilla del Sacromonte, con cervella e testicoli di agnello, è un piatto storico dei gitani; si trova in poche trattorie e va ordinata sapendo cosa è."
      },
      {
        "nome": "Piononos di Santa Fe",
        "testo": "Piccoli dolci a rotolo imbevuti di sciroppo, con crema bruciata sopra, nati a Santa Fe, vicino a Granada. Si comprano nelle pasticcerie del centro."
      },
      {
        "nome": "Tè e dolci arabi in Calle Calderería",
        "testo": "Le teterías della Calderería Nueva servono tè alla menta e pasticcini. È una tradizione recente nata dal quartiere moresco, utile per una pausa."
      }
    ],
    attenzioni: [
      "Biglietti Alhambra: acquistare solo dal sito ufficiale. Esistono rivenditori che gonfiano i prezzi; i biglietti sono nominali e serve il documento.",
      "Donne che offrono rosmarino o leggono la mano nei dintorni della cattedrale e dell'Alhambra: poi chiedono soldi. Dire no e non prendere nulla in mano.",
      "Albaicín e Sacromonte dopo il buio: vicoli poco illuminati, qualche episodio di furto. Meglio muoversi in gruppo o in minibus la sera.",
      "Zona a basse emissioni nel centro: se si arriva in auto, verificare sul sito del comune le regole per le targhe straniere prima di entrare.",
      "Salite ripide: scarpe comode, acqua d'estate, calcolare più tempo per spostarsi di quanto indichi la mappa."
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Granada?",
        "risposta": "Due giorni: uno per l'Alhambra e uno per il centro, l'Albaicín e il Sacromonte. Con tre si aggiungono i monasteri, l'hammam o una gita nelle Alpujarras."
      },
      {
        "domanda": "Come si comprano i biglietti dell'Alhambra?",
        "risposta": "Solo sul sito ufficiale, fino a tre mesi prima: il biglietto generale costa 22,27 € più la commissione online (2026) ed è nominativo. In alta stagione si esaurisce con settimane o mesi di anticipo."
      },
      {
        "domanda": "Cosa succede se arrivo tardi ai Palacios Nazaríes?",
        "risposta": "Non si entra: l'orario stampato sul biglietto è rigido e non si recupera. Conviene arrivare all'ingresso dei palazzi con mezz'ora di margine."
      },
      {
        "domanda": "A Granada le tapas sono davvero gratis?",
        "risposta": "Sì, nella maggior parte dei bar con ogni bevanda arriva una tapa compresa nel prezzo, e spesso cambia a ogni giro. Con tre o quattro consumazioni si cena."
      },
      {
        "domanda": "Dove dormire a Granada?",
        "risposta": "Il centro intorno alla Cattedrale per la comodità, l'Albaicín per l'atmosfera e le viste ma con molte salite, il Realejo per spendere meno. Una doppia costa circa 70-180 €."
      }
    ],
    esperienzeSlugs: ['alhambra-visita', 'zambra-sacromonte'],
    tripSlugs: ['andalusia-itinerario'],
    imageAlt: 'L\'Alhambra di Granada con il Palazzo di Carlo V e le torri nazarí illuminate dalla luce dell\'alba, con la Sierra Nevada sullo sfondo',
    immagine: '/images/spagna/granada.jpg',
  },
  {
    slug: 'cordoba',
    paeseSlug: 'spagna',
    ordine: 3,
    nome: 'Córdoba',
    tipologia: ['città', 'cultura moresca'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono arrivato in treno da Siviglia durante i nove giorni in Andalusia con amici: una notte nella Judería per la Mezquita, poi il trasferimento a Granada.",
    introduzione:
      'Nel X secolo, sotto il Califfato omayyade, Córdoba era la città più popolosa e più colta dell\'Europa occidentale, dove convivevano cultura islamica, ebraica e cristiana. Ne resta il monumento più spiazzante d\'Andalusia: la Mezquita, una foresta di oltre ottocento colonne di marmo e onice con una cattedrale rinascimentale costruita proprio nel mezzo.',
    percheAndarci:
      'Per la Mezquita-Catedral, uno spazio che le foto non rendono: si attraversa la foresta di colonne e di archi bicolori a doppio livello e al centro ci si trova davanti a una navata gotica innestata di forza nella moschea. Delle quattro città andaluse è la più compatta, la più facile da vedere in un giorno.',
    cosaVedere: [
      'La Mezquita-Catedral, con il Mihrab (la nicchia di preghiera più preziosa dell\'arte islamica occidentale) e la Capilla Mayor rinascimentale al centro della sala a colonne',
      'L\'Alcázar de los Reyes Cristianos, la fortezza-palazzo dei Re Cattolici con i giardini a terrazze',
      'La Judería, l\'antico quartiere ebraico, con la Sinagoga medievale (una delle tre rimaste in Spagna) e le vie strette intorno a Calleja de las Flores',
      'Il Ponte Romano sul Guadalquivir, con la Torre della Calahorra all\'estremità opposta',
      'I Patios de Córdoba, i cortili interni fioriti tipici della città, protagonisti del Festival dei Patios a maggio (patrimonio culturale immateriale UNESCO)',
    ],
    cosaFare: [
      'Visitare la Mezquita presto al mattino, quando è gratuita per i residenti dalle 8:30 alle 9:30 e comunque meno affollata',
      'Perdersi nella Judería tra Calleja de las Flores e la Sinagoga',
      'Se il viaggio cade a maggio, seguire il percorso dei Patios de Córdoba aperti al pubblico',
      'Attraversare il Ponte Romano al tramonto per la vista classica sulla Mezquita',
    ],
    doveDormire: 'La Judería per la vicinanza alla Mezquita; il centro moderno intorno a Plaza de las Tendillas per prezzi più contenuti.',
    doveMangiare: 'Il salmorejo è nato qui, più denso del gazpacho sivigliano; il rabo de toro (coda di toro brasata) e il flamenquín (involtino di prosciutto e formaggio fritto) sono i piatti simbolo della cucina cordovana.',
    comeArrivare: "Córdoba non ha voli di linea: si atterra a Siviglia o a Málaga. Da Siviglia San Pablo il bus EA (circa 4 €, 35 minuti) porta alla stazione di Santa Justa, poi l'AVE arriva a Córdoba in circa 45 minuti. Da Málaga il treno Cercanías C1 (circa 2 €, 12 minuti) va a María Zambrano, poi c'è circa un'ora di alta velocità. Da Madrid Atocha l'AVE impiega 1h40-2h, da Granada circa 1h30. Dalla stazione di Córdoba al centro storico ci sono una ventina di minuti a piedi, o un taxi breve.",
    comeSpostarsi: 'Il centro storico è piccolo e si gira tutto a piedi.',
    periodoMigliore:
      'marzo-maggio (col Festival dei Patios a maggio) e ottobre. Córdoba è, con Siviglia, la città più calda di Spagna: da metà luglio a fine agosto molte attrazioni riducono gli orari per il caldo, che qui ha toccato il record spagnolo di 47,6°C nell\'agosto 2021.',
    costi: "Mezquita-Catedral 15 € (gratis dal lunedì al sabato 8:30-9:30), Torre campanario 4 €, visita notturna 25 €; Alcázar circa 7 €; Palacio de Viana 8,50-14 €; Torre della Calahorra 4,50 €; Sinagoga gratuita. Budget indicativo al giorno a persona, con la doppia divisa in due: basso 50-70 €, medio 90-130 €, alto oltre 200 €.",
    erroriDaEvitare: [
      'Programmare una visita a mezzogiorno in piena estate: tra metà luglio e fine agosto va evitato ogni spostamento nelle ore centrali',
      'Trattare Córdoba come una mezza giornata frettolosa tra Siviglia e Granada: la sola Mezquita merita almeno 2 ore con calma',
      'Perdersi il Festival dei Patios se il viaggio cade a maggio: va programmato per tempo, perché i cortili aperti hanno orari limitati',
    ],
    luoghi: [
      {
        "nome": "Mezquita-Catedral",
        "testo": "La moschea fondata nell'VIII secolo e ampliata più volte dagli omayyadi: una foresta di colonne con archi bicolori a doppio livello. Dopo la Reconquista, al centro fu costruita una cattedrale rinascimentale. Il Mihrab, la nicchia di preghiera, è decorato con mosaici bizantini.",
        "come": "Ingresso dalla Puerta del Perdón o dal Patio de los Naranjos, a due passi dal fiume. Si visita da soli, con audioguida a noleggio; la cattedrale al centro si attraversa nello stesso percorso.",
        "quando": "Dal lunedì al sabato, dalle 8:30 alle 9:30, l'ingresso è gratuito (accesso fino alle 9:20, niente gruppi); poi si paga. Gli orari cambiano per stagione e funzioni: controllare il sito ufficiale.",
        "tempo": "1 ora e mezza-2 ore",
        "costo": "15 euro; visita notturna «El Alma de Córdoba» 25 euro (sito ufficiale, 2026)",
        "url": "https://mezquita-catedraldecordoba.es/",
        "consiglio": "La fascia gratuita del mattino è la più bella: poca gente e luce radente nei corridoi. Si può anche pagare e entrare dopo, ma il silenzio si perde.",
        "orari": "Variano per data e funzioni religiose: a novembre 2026, per esempio, 10-18, con la biglietteria che chiude 30 minuti prima. Ingresso libero dal lunedì al sabato 8:30-9:30. Calendario giornaliero sul sito ufficiale.",
        "lat": 37.87887,
        "lng": -4.77934
      },
      {
        "nome": "Judería e Calleja de las Flores",
        "testo": "L'antico quartiere ebraico, dietro la Mezquita: vicoli bianchi stretti, cortili con fiori e la piccola Calleja de las Flores che si apre sulla torre campanaria. Qui c'è anche la sinagoga completata nel 1315, l'unica di Córdoba scampata alle distruzioni.",
        "come": "A piedi, con partenza dalla Puerta de Almodóvar. Non c'è un percorso obbligato.",
        "quando": "Al mattino presto o a fine pomeriggio. A mezzogiorno d'estate i vicoli trattengono il calore.",
        "tempo": "1-2 ore",
        "consiglio": "Entrare nei patii aperti: spesso la porta è lasciata socchiusa ed è consentito guardare dall'ingresso.",
        "costo": "libero",
        "lat": 37.87899,
        "lng": -4.7817
      },
      {
        "nome": "Alcázar de los Reyes Cristianos",
        "testo": "Fortezza-palazzo costruita sui resti di quelle omayyade e almohade e rifatta da Alfonso XI, con lavori terminati nel 1328. I Re Cattolici furono gli ultimi sovrani ad abitarla. Dentro c'è il Salone dei Mosaici, con mosaici romani del II e III secolo; fuori, giardini a terrazze con fontane e agrumi, che si vedono bene dalle torri.",
        "come": "A piedi dalla Mezquita, verso il fiume. Si sale sulle torri per la vista sulla città.",
        "quando": "Verificare orari e giorni di chiusura sul sito del monumento. D'estate meglio al mattino.",
        "tempo": "1-1 ora e mezza",
        "consiglio": "I giardini sono l'unica ombra in cui sedersi dopo la Mezquita.",
        "costo": "circa 7 euro (2026)",
        "orari": "Chiuso il lunedì; gli orari cambiano per stagione e d'estate si riducono per il caldo.",
        "lat": 37.8766,
        "lng": -4.78138,
        "url": "https://alcazardelosreyescristianos.cordoba.es/"
      },
      {
        "nome": "Ponte Romano e Torre della Calahorra",
        "testo": "Ponte di origine romana sul Guadalquivir, rifatto più volte: oggi ha 16 arcate ed è pedonale. Per secoli è stato l'unico ponte della città. Dalla riva opposta si ha la vista classica sulla Mezquita. La torre della Calahorra, all'estremità sud, ospita un museo.",
        "come": "A piedi, a due passi dalla Mezquita. Il ponte è solo pedonale.",
        "quando": "Al tramonto o dopo il buio, quando la Mezquita è illuminata.",
        "tempo": "30-45 minuti",
        "consiglio": "Attraversare il ponte e fare la foto dalla sponda opposta, non dal ponte stesso.",
        "costo": "ponte libero; Torre della Calahorra 4,50 euro con terrazza e audioguida (sito ufficiale, 2026)",
        "orari": "Torre: novembre-febbraio 10-18; ottobre e marzo-maggio 10-19; giugno-settembre 10-14 e 16:30-20:30.",
        "lat": 37.87663,
        "lng": -4.77788,
        "url": "https://www.torrecalahorra.es/"
      },
      {
        "nome": "Patios de Córdoba",
        "testo": "I cortili interni delle case, con fiori in vaso, fontane e pozzi, sono una tradizione locale riconosciuta dall'UNESCO. Durante il festival di maggio i proprietari aprono le case al pubblico e il più bello vince un concorso.",
        "come": "A piedi nel quartiere di San Basilio e nella Judería. Alcuni patii pubblici si visitano tutto l'anno.",
        "quando": "Festival ai primi di maggio, in due settimane circa. Le date e gli orari si controllano sul sito del turismo cittadino.",
        "tempo": "1-2 ore",
        "consiglio": "San Basilio, a sud-ovest, ha i patii più curati e meno gente della Judería.",
        "lat": 37.87599,
        "lng": -4.78429
      },
      {
        "nome": "Torre campanario della Mezquita",
        "testo": "Il campanile barocco costruito tra Cinque e Seicento intorno al vecchio minareto omayyade, che è rimasto chiuso dentro la muratura. Dall'alto si vedono il Patio de los Naranjos, i tetti della Judería e il Guadalquivir.",
        "come": "Si sale a turni con un numero limitato di persone, con un biglietto a parte rispetto alla Mezquita. Ingresso dal Patio de los Naranjos.",
        "quando": "Il primo turno del mattino o l'ultimo del pomeriggio, con la luce radente sui tetti.",
        "tempo": "30 minuti",
        "costo": "4 euro (sito ufficiale, 2026)",
        "orari": "Turni ogni 30 minuti; a novembre 2026 dalle 9:30 alle 18:30.",
        "lat": 37.87955,
        "lng": -4.78032,
        "url": "https://tickets.mezquita-catedraldecordoba.es/es/458-web-individual/2334-torre-campanario",
        "consiglio": "Prenotare online insieme alla Mezquita: i turni sono piccoli e finiscono prima dei biglietti per la sala a colonne."
      },
      {
        "nome": "Sinagoga",
        "testo": "Una piccola sala di preghiera completata nel 1315, con stucchi di gusto mudéjar e iscrizioni in ebraico sulle pareti. È una delle poche sinagoghe medievali rimaste in Spagna e sta nel cuore della Judería.",
        "come": "A piedi in Calle Judíos, a cinque minuti dalla Mezquita. Si visita da soli; prenotazione solo per i gruppi.",
        "quando": "In mattinata, prima che arrivino i gruppi guidati.",
        "tempo": "20-30 minuti",
        "costo": "gratuito",
        "orari": "Martedì-domenica 9-15, ultimo ingresso 10 minuti prima; lunedì chiuso, salvo festivi.",
        "lat": 37.87979,
        "lng": -4.78344,
        "url": "https://www.juntadeandalucia.es/cultura/enclaves/enclave-monumental-sinagoga-de-cordoba"
      },
      {
        "nome": "Medina Azahara (Madinat al-Zahra)",
        "testo": "La città palatina fondata da Abd al-Rahman III nel X secolo ai piedi della Sierra Morena, abbandonata e saccheggiata dopo pochi decenni. Si visitano il museo e gli scavi, con il salone di ricevimento decorato e le terrazze sulla piana. È patrimonio UNESCO dal 2018.",
        "come": "Circa 8 km a ovest del centro. In auto si parcheggia al museo; da lì una navetta porta agli scavi. Dal centro ci sono anche bus turistici e visite guidate.",
        "quando": "La mattina: gli scavi sono quasi senza ombra. D'estate ci sono aperture serali.",
        "tempo": "mezza giornata",
        "costo": "gratuito per i cittadini dell'Unione Europea, 1,50 euro per gli altri (Junta de Andalucía)",
        "orari": "Dal 21 settembre al 20 marzo: martedì-sabato 9-18, domenica e festivi 9-15; lunedì chiuso. D'estate orari diversi: controllare il sito.",
        "lat": 37.88608,
        "lng": -4.86779,
        "url": "https://www.museosdeandalucia.es/web/conjuntoarqueologicomadinatalzahra",
        "consiglio": "Vedere prima il museo, con il plastico della città: aiuta a leggere gli scavi, che da soli sono difficili da capire."
      },
      {
        "nome": "Palacio de Viana",
        "testo": "Un palazzo nobiliare con dodici patii e un giardino, ognuno con piante e fontane diverse. È il modo per vedere i patii di Córdoba in qualsiasi mese, non solo durante il festival di maggio.",
        "come": "A piedi, circa 20 minuti dalla Mezquita, nel quartiere di Santa Marina. Si possono vedere solo i patii o aggiungere la visita guidata degli interni.",
        "quando": "In primavera, con i fiori; la mattina c'è più luce nei cortili.",
        "tempo": "1-1 ora e mezza",
        "costo": "solo patii 8,50 euro; patii e interni con guida 14 euro (sito ufficiale)",
        "orari": "Settembre-dicembre: martedì-sabato 10-19, domenica e festivi 10-15; luglio e agosto: martedì-domenica 9-15. Lunedì chiuso.",
        "lat": 37.88867,
        "lng": -4.77432,
        "url": "https://www.palaciodeviana.com/"
      },
      {
        "nome": "Baños del Alcázar Califal",
        "testo": "I bagni arabi del X secolo che facevano parte dell'antico alcázar dei califfi. Si attraversano le sale fredda, tiepida e calda, con le volte e i lucernari a forma di stella.",
        "come": "Nel Campo Santo de los Mártires, a pochi passi dall'Alcázar de los Reyes Cristianos.",
        "quando": "Insieme all'Alcázar, la mattina.",
        "tempo": "30-45 minuti",
        "lat": 37.87791,
        "lng": -4.78228
      },
      {
        "nome": "Templo romano",
        "testo": "Le colonne di un grande tempio del I secolo d.C., venuto alla luce negli anni Cinquanta durante i lavori per ampliare il municipio e in parte rialzato. Ricorda che Córdoba era la capitale della Betica romana.",
        "come": "In Calle Claudio Marcelo, accanto al municipio. Si vede dalla strada, dietro una recinzione.",
        "quando": "Di sera, quando è illuminato, passando verso la Corredera.",
        "tempo": "15 minuti",
        "costo": "libero, si vede dalla strada",
        "lat": 37.88476,
        "lng": -4.77639
      },
      {
        "nome": "Plaza de la Corredera",
        "testo": "Una grande piazza rettangolare porticata del Seicento, chiusa su tutti i lati da case con i balconi. Un tempo ci si tenevano mercati e corride; oggi è piena di tavolini all'aperto.",
        "come": "A piedi, 10 minuti dalla Mezquita verso nord-est.",
        "quando": "Al tramonto o a cena.",
        "tempo": "30 minuti",
        "costo": "libero",
        "lat": 37.88354,
        "lng": -4.77443
      },
      {
        "nome": "Plaza del Potro",
        "testo": "Una piccola piazza con la fontana del Cinquecento sormontata da un puledro, citata da Cervantes nel Don Chisciotte. Ci si affacciano la Posada del Potro, una vecchia locanda, e l'edificio che ospita il Museo di Belle Arti e il Museo Julio Romero de Torres, il pittore delle donne cordovane.",
        "come": "A piedi, 10 minuti dalla Mezquita seguendo il fiume verso est.",
        "quando": "Nel tardo pomeriggio.",
        "tempo": "30 minuti-1 ora con un museo",
        "lat": 37.88101,
        "lng": -4.77482
      },
      {
        "nome": "Chiese fernandine",
        "testo": "Le chiese fatte costruire dopo la conquista cristiana del 1236, in un gotico semplice con rosoni e dettagli mudéjar, nei quartieri a nord del centro. San Lorenzo, Santa Marina e San Pablo sono le più note.",
        "come": "A piedi, con un giro di un paio d'ore tra Santa Marina e San Lorenzo. La diocesi vende un biglietto per il percorso delle chiese sul sito della Mezquita.",
        "quando": "Il pomeriggio, dopo il Palacio de Viana, che sta nello stesso quartiere.",
        "tempo": "2 ore",
        "lat": 37.88856,
        "lng": -4.76889,
        "url": "https://tickets.mezquita-catedraldecordoba.es/es/458-web-individual/2337-ruta-de-las-iglesias-fernandinas"
      },
      {
        "nome": "Caballerizas Reales",
        "testo": "Le scuderie reali fondate da Filippo II nel 1570 per allevare il cavallo andaluso. La sera ospitano uno spettacolo equestre con musica e flamenco.",
        "come": "A piedi, accanto all'Alcázar de los Reyes Cristianos, nel quartiere di San Basilio.",
        "quando": "La sera, per lo spettacolo; di giorno si vedono le stalle e il maneggio.",
        "tempo": "1 ora e mezza con lo spettacolo",
        "lat": 37.87654,
        "lng": -4.7832
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Mezquita nella fascia gratuita, entrando prima delle 9:20, poi la Torre campanario con il turno prenotato",
          "Judería, Calleja de las Flores e Sinagoga",
          "Tarda mattinata: Alcázar de los Reyes Cristianos e Baños del Alcázar Califal",
          "Primo pomeriggio: pranzo con salmorejo e rabo de toro, poi pausa nelle ore calde",
          "Tardo pomeriggio: Ponte Romano e Torre della Calahorra, tramonto dalla riva sud"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come il programma di un giorno",
          "Giorno 2, mattina: Medina Azahara, prima il museo e poi gli scavi",
          "Giorno 2, pomeriggio: Palacio de Viana e le chiese fernandine di Santa Marina e San Lorenzo",
          "Giorno 2, sera: Templo romano, Plaza de la Corredera e tapas"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1 e 2: come sopra",
          "Giorno 3, mattina: patii di San Basilio e Caballerizas Reales",
          "Giorno 3, pomeriggio: Plaza del Potro e Museo Julio Romero de Torres, oppure il castello di Almodóvar del Río",
          "Giorno 3, sera: spettacolo equestre alle Caballerizas o visita notturna della Mezquita"
        ]
      }
    ],
    zone: [
      {
        "nome": "Judería",
        "perChi": "Chi vuole stare vicino alla Mezquita",
        "testo": "Camere in case storiche con patio, a un minuto dal monumento. Di notte è silenzioso, ma ci sono più turisti e ristoranti cari. Il traffico non arriva fin dentro i vicoli.",
        "fascia": "80-150 €"
      },
      {
        "nome": "Centro intorno a Plaza de las Tendillas",
        "perChi": "Chi cerca prezzi più bassi e vita serale",
        "testo": "Zona commerciale e di bar, raggiungibile a piedi dalla Mezquita. Le camere sul lato strada possono essere rumorose nel fine settimana.",
        "fascia": "60-110 €"
      },
      {
        "nome": "San Basilio e Alcázar Viejo",
        "perChi": "chi cerca calma a due passi dal centro",
        "testo": "Il quartiere dei patii più curati, tra l'Alcázar e le mura. Strade tranquille la sera e case con cortile trasformate in piccoli alberghi; la Mezquita è a 10 minuti a piedi.",
        "fascia": "60-110 €"
      },
      {
        "nome": "Santa Marina e San Pedro",
        "perChi": "chi vuole spendere meno e vedere la Córdoba di quartiere",
        "testo": "La parte nord e est del centro storico, con le chiese fernandine, il Palacio de Viana e bar frequentati dai cordovani. Più lontano dalla Mezquita, da 15 a 25 minuti a piedi.",
        "fascia": "50-100 €"
      }
    ],
    gite: [
      {
        "nome": "Siviglia",
        "distanza": "45 minuti in AVE",
        "come": "Treni ad alta velocità frequenti da Córdoba a Santa Justa, da prenotare su Renfe o sulle compagnie private.",
        "testo": "La cattedrale con la Giralda, il Real Alcázar e Triana. Fattibile in giornata partendo presto, ma merita almeno una notte."
      },
      {
        "nome": "Granada",
        "distanza": "circa 1 ora e mezza in treno",
        "come": "Treni diretti ad alta velocità da Córdoba; l'Alhambra va prenotata sul sito ufficiale.",
        "testo": "Ha senso in giornata solo con il biglietto dell'Alhambra già in mano; altrimenti meglio dormirci."
      },
      {
        "nome": "Castello di Almodóvar del Río",
        "distanza": "circa 25 km",
        "come": "In auto lungo il Guadalquivir verso ovest, o con le escursioni organizzate da Córdoba.",
        "testo": "Un castello di origine araba ristrutturato all'inizio del Novecento, in cima a una collina sopra il fiume e gli uliveti. Una mezza giornata facile."
      },
      {
        "nome": "Montilla e le cantine del Montilla-Moriles",
        "distanza": "circa 45 km",
        "come": "In auto verso sud; le cantine si visitano su prenotazione.",
        "testo": "La zona dei vini fortificati che accompagnano la cucina cordovana, con cantine e degustazioni tra i vigneti della Campiña."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Córdoba?",
        "risposta": "Un giorno basta per Mezquita, Judería, Alcázar e Ponte Romano. Con due si aggiungono Medina Azahara, il Palacio de Viana e le chiese fernandine senza correre."
      },
      {
        "domanda": "Bisogna prenotare la Mezquita?",
        "risposta": "Non è obbligatorio, ma conviene comprare online, soprattutto per la Torre campanario, che ha turni piccoli, e per la visita notturna."
      },
      {
        "domanda": "Quando si entra gratis alla Mezquita?",
        "risposta": "Dal lunedì al sabato dalle 8:30 alle 9:30, con accesso fino alle 9:20 circa e senza gruppi, salvo eventi straordinari. Dopo si paga il biglietto da 15 euro."
      },
      {
        "domanda": "Si può visitare Córdoba in giornata da Siviglia?",
        "risposta": "Sì: l'AVE impiega circa 45 minuti. Partendo presto si vedono Mezquita, Judería e Alcázar, ma Medina Azahara resta fuori."
      },
      {
        "domanda": "Quando c'è il Festival dei Patios?",
        "risposta": "Nella prima metà di maggio, per circa due settimane. L'ingresso nella maggior parte delle case è libero, e in quei giorni alloggi e treni vanno prenotati con anticipo."
      },
      {
        "domanda": "Come si arriva a Medina Azahara?",
        "risposta": "Sta circa 8 km a ovest del centro: in auto si parcheggia al museo e una navetta porta agli scavi, oppure si va con un bus turistico o una visita guidata. Per i cittadini UE l'ingresso è gratuito."
      }
    ],
    sapori: [
      {
        "nome": "Salmorejo cordobés",
        "testo": "Crema fredda di pomodoro e pane, più densa del gazpacho, con prosciutto e uovo sodo. Nata a Córdoba, è il primo piatto più richiesto."
      },
      {
        "nome": "Rabo de toro",
        "testo": "Coda di toro brasata a lungo con vino e verdure, servita calda. È il piatto da trattoria più associato alla città."
      },
      {
        "nome": "Flamenquín",
        "testo": "Involtino di lonza di maiale e prosciutto, impanato e fritto. Si mangia anche come tapa."
      },
      {
        "nome": "Berenjenas con miel de caña",
        "testo": "Melanzane fritte in pastella leggera, servite con melassa di canna da zucchero. Un piatto semplice e molto comune nei bar."
      }
    ],
    attenzioni: [
      "Mezquita: la fascia gratuita del mattino ha un controllo d'accesso che si chiude intorno alle 9:20. Chi arriva dopo deve pagare il biglietto.",
      "Estate: da metà luglio ad agosto le temperature possono superare i 40 gradi. Pianificare le visite la mattina presto e di sera.",
      "Venditori di rosmarino davanti alla Mezquita e nella Judería: chiedono soldi dopo averlo messo in mano. Dire no.",
      "Maggio, festival dei patii: alloggi e treni si riempiono con settimane di anticipo, prenotare presto."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['andalusia-itinerario'],
    imageAlt: 'La foresta di colonne e archi bicolori rossi e bianchi dentro la Mezquita di Córdoba',
    immagine: '/images/spagna/cordoba.jpg',
  },
  {
    slug: 'ronda-pueblos-blancos',
    paeseSlug: 'spagna',
    ordine: 4,
    nome: 'Ronda e i pueblos blancos',
    tipologia: ['montagna', 'borghi', 'natura'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "È stata l'ultima tappa dei nove giorni in Andalusia con amici, in auto da Granada attraverso la Serranía: il Puente Nuevo e i pueblos blancos, poi verso Málaga per chiudere il viaggio.",
    introduzione:
      'Ronda è il più scenografico dei «pueblos blancos», i borghi bianchi dell\'entroterra andaluso. Sta sui due lati del Tajo, una gola profonda oltre 100 metri, uniti dal Puente Nuevo del XVIII secolo. È la montagna dopo le città moresche della pianura, ed è la culla della tauromachia moderna.',
    percheAndarci:
      'È la vista più fotografata d\'Andalusia dopo l\'Alhambra, e rallenta un itinerario fatto di grandi città: si cammina sull\'orlo di un canyon, si visita l\'arena più antica di Spagna ancora in uso e ci si ferma nelle cantine della zona.',
    cosaVedere: [
      'Il Puente Nuevo, il ponte in pietra che scavalca la gola del Tajo a oltre 100 metri di altezza',
      'La Plaza de Toros de Ronda, tra le arene più antiche di Spagna (1785), con il museo della tauromachia',
      'Il Mirador de Aldehuela e il sentiero che scende nella gola per la vista dal basso sul ponte',
      'La Ciudad, il quartiere moresco più antico, sul lato opposto del ponte rispetto al centro moderno',
      'I bagni arabi (Baños Árabes), tra i meglio conservati di Spagna',
    ],
    cosaFare: [
      'Camminare sul Puente Nuevo e scendere nel sentiero del Mirador de Aldehuela per la prospettiva dal fondo della gola',
      'Un giro di degustazione nelle cantine della zona vinicola di Ronda, meno nota di altre in Andalusia ma con una qualità in crescita',
      'Estendere la visita a uno o due pueblos blancos vicini come Setenil de las Bodegas (case scavate sotto gli speroni di roccia) o Grazalema, nel parco naturale omonimo',
    ],
    doveDormire: 'Il centro storico di Ronda, vicino al Puente Nuevo, per la vista e la comodità; in alternativa un agriturismo o una masía nella campagna intorno, per chi vuole rallentare ancora.',
    doveMangiare: 'La cucina di montagna andalusa: rabo de toro, cordero (agnello) alla brace e formaggi di capra locali, spesso accompagnati dai vini della denominazione Sierras de Málaga.',
    comeArrivare:
      "Dall'aeroporto di Málaga sono circa 97 km, 1h45 in auto, la soluzione più comoda perché l'auto serve poi per i pueblos blancos; conviene noleggiarla in aeroporto. Da Siviglia sono 129 km, circa 2 ore, da Granada 2-2,5 ore. Senza auto c'è il treno regionale da Málaga, circa 2 ore su una linea panoramica: per arrivare alla stazione di María Zambrano dall'aeroporto si prende il Cercanías C1, circa 12 minuti e circa 2 €. La stazione di Ronda è nel quartiere nuovo, a piedi dal centro.",
    comeSpostarsi: 'Il centro si gira a piedi; per i pueblos blancos vicini serve un\'auto, i collegamenti bus tra borghi sono scarsi e lenti.',
    periodoMigliore: 'aprile-giugno e settembre-ottobre, con temperature più miti che nella pianura del Guadalquivir grazie alla quota (circa 750 metri).',
    costi:
      "Plaza de Toros 10 € (12 con audioguida); Baños Árabes 4,50 €; Palacio de Mondragón 5 €; bono municipale 12 € per Baños, Mondragón, centro del Puente Nuevo e altri musei comunali; Puente Nuevo, Alameda e i villaggi gratis. Budget indicativo al giorno a persona, con la doppia divisa in due: basso 60-80 €, medio 110-150 €, alto oltre 200 €, auto a noleggio esclusa.",
    erroriDaEvitare: [
      'Farla in giornata da Siviglia senza pernottare: il tragitto (circa 2h a tratta) rende la visita frettolosa se non ci si ferma almeno una notte',
      'Guidare tra i pueblos blancos senza mettere in conto strade di montagna strette e tornanti',
      'Sottovalutare il vento sul Puente Nuevo: nella gola le correnti possono essere forti, soprattutto in inverno',
    ],
    luoghi: [
      {
        "nome": "Puente Nuevo e Tajo di Ronda",
        "testo": "Il ponte in pietra completato nel 1793 scavalca la gola del Tajo, profonda circa 120 metri, e unisce la città moresca al quartiere nuovo. Ci si cammina sopra e lo si guarda dal basso, dai sentieri dei belvedere.",
        "come": "A piedi dal centro, il ponte è in pieno paese. Per la vista dal basso si scende per il sentiero del Camino de los Molinos, dal lato sud, oppure dal Mirador de Aldehuela.",
        "quando": "Ingresso libero sul ponte. Il momento migliore è il tramonto, con luce bassa sulla gola.",
        "tempo": "1-2 ore",
        "consiglio": "Il sentiero in discesa è ripido e il ritorno in salita stanca: scarpe chiuse e acqua.",
        "costo": "Gratuito sul ponte; il centro di interpretazione dentro il ponte è compreso nel bono municipale (12 €, tariffa 2025, gratis sotto i 14 anni)",
        "orari": "Ponte sempre aperto. Centro di interpretazione: Lunedì e sabato 10-14 e 15-18, da martedì a venerdì 10-19, domenica e festivi 10-15; ultimo ingresso mezz'ora prima della chiusura.",
        "lat": 36.74063,
        "lng": -5.16585,
        "url": "https://turismoderonda.es/es/ronda/que_ver/arquitectura_plazas_monumentos/puente_nuevo_de_ronda"
      },
      {
        "nome": "Plaza de Toros",
        "testo": "L'arena di Ronda, inaugurata nel 1785, è tra le più antiche di Spagna ed è legata alla famiglia Romero, e soprattutto a Pedro Romero, tra i padri della corrida a piedi. All'interno c'è un museo con costumi e armi. Si può entrare anche come semplice luogo architettonico, senza assistere a corride.",
        "come": "A piedi dal Puente Nuevo, verso il quartiere del Mercadillo.",
        "quando": "Al mattino all'apertura, prima dei gruppi in gita dalla costa.",
        "tempo": "1 ora",
        "consiglio": "Chi non vuole il tema della corrida può guardare solo l'architettura e il maneggio dei cavalli.",
        "costo": "10 € intero, 12 € con audioguida (tariffe del sito ufficiale, 2026)",
        "orari": "Tutti i giorni dalle 10; chiusura alle 18 da novembre a febbraio, alle 19 a marzo e ottobre, alle 20 da aprile a settembre. Lavori di consolidamento in corso nell'arena.",
        "lat": 36.74237,
        "lng": -5.16707,
        "url": "https://www.rmcr.org/visita-plaza-museo/"
      },
      {
        "nome": "Baños Árabes e la Ciudad",
        "testo": "La Ciudad, il quartiere moresco, ha vicoli stretti e porte antiche. I bagni arabi del XIII-XIV secolo, ai piedi della città vecchia, sono tra i meglio conservati della Spagna, con volte a stella.",
        "come": "A piedi dal Puente Nuevo, scendendo verso il fiume Guadalevín. Il percorso è in discesa e in ombra.",
        "quando": "Al mattino per evitare i gruppi; la domenica chiude alle 15.",
        "tempo": "1-1 ora e mezza in tutto",
        "consiglio": "Si combina bene con il sentiero dei mulini sotto la gola, nella stessa mezza giornata.",
        "costo": "4,50 € intero, 3 € studenti sotto i 26 anni e pensionati (2026); compresi nel bono municipale da 12 €",
        "orari": "Lunedì e sabato 10-14 e 15-18, da martedì a venerdì 10-19, domenica e festivi 10-15; ultimo ingresso mezz'ora prima della chiusura.",
        "lat": 36.73899,
        "lng": -5.16271,
        "url": "https://turismoderonda.es/es/ronda/que_ver/arquitectura_plazas_monumentos/banos_arabes"
      },
      {
        "nome": "Casa del Rey Moro e la Mina",
        "testo": "Una casa nobiliare accanto al ponte, con giardini a terrazze affacciati sulla gola. Il motivo per entrare è la Mina, una scala di epoca islamica scavata nella roccia che scende fino al fiume Guadalevín: serviva a portare acqua in città durante gli assedi.",
        "come": "A piedi dal Puente Nuevo, scendendo per la Calle Santo Domingo. I biglietti si comprano solo in biglietteria.",
        "quando": "Di mattina, quando la scala è meno affollata.",
        "tempo": "1 ora",
        "orari": "Tutti i giorni 10-20 da ottobre ad aprile, 10-21:30 da maggio a settembre.",
        "lat": 36.73984,
        "lng": -5.1643,
        "url": "https://www.casadelreymoro.org/",
        "consiglio": "I gradini sono circa trecento, umidi e scivolosi: scarpe con suola che tiene e fiato per la risalita."
      },
      {
        "nome": "Palacio de Mondragón (Museo di Ronda)",
        "testo": "Palazzo della Ciudad con patii mudéjar e un giardino pensile sul bordo della rupe. Ospita il museo municipale, con sezioni sulla preistoria e sulla Ronda islamica.",
        "come": "A piedi nella Ciudad, sulla Plaza Mondragón, a dieci minuti dal ponte.",
        "quando": "In tarda mattinata, abbinato a Santa María la Mayor.",
        "tempo": "45 minuti",
        "costo": "5 € (2026); compreso nel bono municipale da 12 €",
        "orari": "Lunedì e sabato 10-14 e 15-18, da martedì a venerdì 10-19, domenica e festivi 10-15; ultimo ingresso mezz'ora prima della chiusura.",
        "lat": 36.73758,
        "lng": -5.16679,
        "url": "https://turismoderonda.es/es/ronda/que_ver/arquitectura_plazas_monumentos/palacio_mondragon"
      },
      {
        "nome": "Santa María la Mayor",
        "testo": "La chiesa principale della Ciudad, costruita sopra la moschea maggiore dopo la conquista cristiana del 1485. Dell'edificio islamico resta l'arco del mihrab; il resto mescola gotico tardo e rinascimento.",
        "come": "A piedi sulla Plaza Duquesa de Parcent, nel cuore della Ciudad.",
        "quando": "Fuori dagli orari delle funzioni; la piazza davanti è tranquilla al mattino.",
        "tempo": "30-45 minuti",
        "lat": 36.73748,
        "lng": -5.16537
      },
      {
        "nome": "Alameda del Tajo e belvedere sulla rupe",
        "testo": "Il giardino ottocentesco accanto all'arena finisce su balconate a strapiombo sulla valle. Da qui e dal Paseo de los Ingleses si vede la rupe su cui poggia la città e la campagna fino alla Serranía.",
        "come": "A piedi dalla Plaza de Toros, ingresso libero al parco.",
        "quando": "Al tramonto, quando la luce colpisce la parete della rupe.",
        "tempo": "30 minuti-1 ora",
        "costo": "Gratuito",
        "lat": 36.74326,
        "lng": -5.16822
      },
      {
        "nome": "Setenil de las Bodegas",
        "testo": "Villaggio bianco vicino a Ronda, con case e bar costruiti sotto le rocce che sporgono sul fiume. Le strade più note sono Cuevas del Sol e Cuevas de la Sombra, con tavolini all'ombra del masso.",
        "come": "In auto da Ronda, su una strada di montagna con curve. Il paese è piccolo e si gira a piedi.",
        "quando": "Al mattino o a mezzogiorno per pranzare. Nei fine settimana d'estate l'accesso in auto è lento.",
        "tempo": "2-3 ore",
        "consiglio": "Parcheggiare nei posteggi fuori dall'abitato, non nelle vie strette.",
        "costo": "Gratuito, il paese si gira liberamente",
        "lat": 36.86417,
        "lng": -5.18139
      },
      {
        "nome": "Grazalema",
        "testo": "Villaggio bianco ai piedi della Sierra de Grazalema, nel parco naturale omonimo. È la base per i sentieri della sierra e per le strade panoramiche verso Zahara.",
        "come": "In auto da Ronda, 32 km in circa 35 minuti su strada di montagna. Parcheggio all'ingresso del paese.",
        "quando": "Primavera e autunno; d'inverno la strada del Puerto de las Palomas può ghiacciare.",
        "tempo": "2-3 ore",
        "costo": "Gratuito",
        "lat": 36.75839,
        "lng": -5.36607,
        "consiglio": "Alcuni sentieri del parco, come quello del Pinsapar, richiedono un permesso gratuito da chiedere al centro visitatori: verificarlo prima."
      },
      {
        "nome": "Zahara de la Sierra",
        "testo": "Paese bianco su uno sperone sotto una torre del castello nasride, con il lago artificiale turchese ai piedi. La salita alla torre è il punto di vista più ampio sulla sierra.",
        "come": "In auto da Ronda, 34 km in circa 40 minuti, oppure da Grazalema per il Puerto de las Palomas (17 km). Sentiero in salita alla torre dal paese.",
        "quando": "Al mattino o nel tardo pomeriggio; d'estate la salita alla torre è al sole.",
        "tempo": "2 ore",
        "lat": 36.84058,
        "lng": -5.39054
      },
      {
        "nome": "Olvera",
        "testo": "Il villaggio bianco più settentrionale del giro, con la sagoma del castello e della chiesa dell'Encarnación in cima alla collina. È il capolinea della Vía Verde de la Sierra, ex ferrovia trasformata in pista ciclabile.",
        "come": "In auto da Ronda, 33 km in circa 50 minuti, oppure da Setenil in 15-20 minuti.",
        "quando": "Al pomeriggio, combinata con Setenil.",
        "tempo": "1-2 ore",
        "lat": 36.9349,
        "lng": -5.26012
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Plaza de Toros all'apertura delle 10, poi Alameda del Tajo e belvedere sulla rupe.",
          "Tarda mattinata: Puente Nuevo e centro di interpretazione, poi la Ciudad con Santa María la Mayor e il Palacio de Mondragón.",
          "Primo pomeriggio: pranzo con rabo de toro o agnello.",
          "Pomeriggio: Casa del Rey Moro con la scala della Mina, poi i Baños Árabes e il sentiero dei mulini sotto la gola.",
          "Tramonto: vista del ponte dal basso o dal Mirador de Aldehuela."
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Ronda come nel programma di un giorno, con pernottamento in centro.",
          "Giorno 2, mattina: Setenil de las Bodegas (30 minuti in auto), con le vie Cuevas del Sol e Cuevas de la Sombra.",
          "Giorno 2, pranzo: a Setenil, sotto le rocce.",
          "Giorno 2, pomeriggio: Olvera, a 15-20 minuti, con il castello sulla collina; rientro a Ronda."
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1 e 2: Ronda, poi Setenil e Olvera come sopra.",
          "Giorno 3, mattina: Grazalema (35 minuti da Ronda) e una passeggiata nel parco naturale.",
          "Giorno 3, pomeriggio: Puerto de las Palomas e Zahara de la Sierra (17 km), salita alla torre del castello.",
          "Giorno 3, sera: rientro a Ronda in 40 minuti, oppure si dorme a Grazalema."
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro storico di Ronda",
        "perChi": "Chi vuole vedere il ponte la sera e la mattina",
        "testo": "Alberghi e pensioni a due passi dal Puente Nuevo. Il paese si svuota dopo il tramonto, quando i gruppi della gita ripartono. Le strade sono strette e il parcheggio costa.",
        "fascia": "90-180 €"
      },
      {
        "nome": "Campagna intorno a Ronda",
        "perChi": "Chi viaggia in auto e cerca silenzio",
        "testo": "Agriturismi e cortijos tra gli uliveti e le vigne, a breve distanza in auto dal paese. Serve l'auto per cenare fuori.",
        "fascia": "80-160 €"
      },
      {
        "nome": "Mercadillo e zona della stazione",
        "perChi": "Chi arriva in treno o vuole spendere meno",
        "testo": "Il quartiere nuovo tra la Calle Virgen de la Paz e la stazione ha pensioni e hotel semplici, parcheggi più facili e il ponte a dieci-quindici minuti a piedi. Meno vista, più tranquillità e prezzi più bassi.",
        "fascia": "60-110 €"
      }
    ],
    gite: [
      {
        "nome": "Caminito del Rey",
        "distanza": "60 km, circa 1 ora in auto",
        "come": "In auto per la A-367 fino ad Ardales e poi la MA-5403. Il sentiero è a senso unico da nord a sud; una navetta da 2,50 € riporta dalla fine all'ingresso nord ogni mezz'ora dalle 8:30 alle 16:30.",
        "testo": "Passerelle appese alle pareti della gola del Gaitanes. Ingresso 10 €, visita guidata 18 €, da prenotare sul sito ufficiale; vietato sotto gli 8 anni. In caso di maltempo il percorso chiude."
      },
      {
        "nome": "Arcos de la Frontera",
        "distanza": "85 km, circa 1h20 in auto",
        "come": "In auto verso ovest per la A-372 attraverso la Sierra de Grazalema, oppure per la A-374 passando da Algodonales.",
        "testo": "Il più grande dei pueblos blancos, su una rupe sopra il Guadalete, con la basilica di Santa María e il belvedere della Plaza del Cabildo. Si abbina a Grazalema sulla strada."
      },
      {
        "nome": "Antequera e i dolmen",
        "distanza": "88 km, circa 1h30 in auto",
        "come": "In auto per la A-367 e la A-384 verso Campillos, oppure come sosta sulla strada da Granada.",
        "testo": "I dolmen di Menga e Viera, patrimonio UNESCO, gratuiti per i cittadini UE e chiusi il lunedì, e la città con l'Alcazaba. Vicino c'è il carsismo del Torcal."
      }
    ],
    sapori: [
      {
        "nome": "Rabo de toro",
        "testo": "Coda di toro brasata, piatto tipico di Ronda legato alla tradizione taurina. Si mangia nei ristoranti del centro."
      },
      {
        "nome": "Cordero serrano",
        "testo": "Agnello di montagna alla brace o al forno, servito con patate. Piatto da pranzo domenicale."
      },
      {
        "nome": "Queso de cabra payoyo",
        "testo": "Formaggio di capra della razza payoya, prodotto nella Sierra de Grazalema, stagionato o fresco."
      },
      {
        "nome": "Vini Sierras de Málaga",
        "testo": "Vini rossi e bianchi delle cantine intorno a Ronda, alcune delle quali si visitano su prenotazione."
      }
    ],
    attenzioni: [
      "Strade di montagna verso Setenil e Grazalema: tornanti stretti e visuale limitata. Guidare piano e dare la precedenza ai mezzi più grandi.",
      "Parcheggio a Ronda e nei villaggi: le zone azzurre sono a pagamento e le multe sono frequenti. Usare i parcheggi coperti fuori dal centro.",
      "Vento forte sulla gola in inverno: lungo il sentiero e sui belvedere tenersi lontano dal bordo.",
      "Gruppi in giornata da Siviglia e dalla Costa del Sol: nelle ore centrali il centro è affollato. Chi dorme a Ronda ha mattina e sera quasi vuote."
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Ronda?",
        "risposta": "Un giorno pieno basta per il ponte, la Ciudad, l'arena e i bagni arabi. Con due o tre giorni si aggiungono Setenil, Olvera, Grazalema e Zahara."
      },
      {
        "domanda": "Si può visitare Ronda in giornata da Siviglia o da Málaga?",
        "risposta": "Sì, ma sono circa 2 ore a tratta da Siviglia e 1h45 da Málaga, e nelle ore centrali il centro è pieno di gruppi. Dormire una notte permette di vedere il ponte la sera e la mattina presto quasi vuoto."
      },
      {
        "domanda": "Quali pueblos blancos vedere vicino a Ronda?",
        "risposta": "Setenil de las Bodegas, a 30 minuti, per le case sotto la roccia; Grazalema e Zahara de la Sierra per la montagna; Olvera per il castello. Arcos de la Frontera è più lontano, a circa 1h20."
      },
      {
        "domanda": "Serve l'auto per i pueblos blancos?",
        "risposta": "Quasi sempre sì: i bus tra un borgo e l'altro sono pochi e lenti. Ronda si gira a piedi, l'auto serve solo per uscire."
      },
      {
        "domanda": "Quanto costano i monumenti di Ronda?",
        "risposta": "La Plaza de Toros costa 10 €, i Baños Árabes 4,50 €, il Palacio de Mondragón 5 €. Il bono municipale da 12 € comprende Baños, Mondragón e il centro del Puente Nuevo; il ponte è gratis."
      },
      {
        "domanda": "Il Caminito del Rey si può fare da Ronda?",
        "risposta": "Sì, l'ingresso è a circa un'ora di auto. Il biglietto costa 10 € e va prenotato sul sito ufficiale, soprattutto nei fine settimana di primavera."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['andalusia-itinerario'],
    imageAlt: 'Il Puente Nuevo di Ronda sopra la gola del Tajo, con le case bianche affacciate sul bordo della rupe',
    immagine: '/images/spagna/ronda-pueblos-blancos.jpg',
  },

  // --- NORD (Paesi Baschi, Cantabria, Asturie, Galizia) ---
  {
    slug: 'san-sebastian',
    paeseSlug: 'spagna',
    ordine: 5,
    nome: 'San Sebastián (Donostia)',
    tipologia: ['città', 'gastronomia', 'mare'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "È stata la prima tappa del mio viaggio in auto con amici nel nord della Spagna, otto giorni in tutto: due giorni tra la Parte Vieja, la Concha e il Monte Igueldo, poi verso Bilbao.",
    introduzione:
      'La città basca sulla baia a conchiglia della Concha, con più stelle Michelin per abitante di qualsiasi altra città al mondo e la cultura del pintxo (lo spuntino da bar basco) più fitta di Spagna. È l\'opposto dell\'Andalusia: clima fresco, atmosfera raccolta e un\'identità basca, di lingua e di cultura, ben distinta dal resto del paese.',
    percheAndarci:
      'Per il modo di mangiare. Qui il pasto vero si fa girando i bar della Parte Vieja, un pintxo e un bicchiere per locale: i baschi lo chiamano txikiteo ed è un rito sociale prima che gastronomico. È il motivo principale per venire in città.',
    cosaVedere: [
      'La Parte Vieja, il centro storico con la più alta densità di bar da pintxos della città',
      'La Playa de la Concha, la spiaggia urbana a forma di conchiglia considerata fra le più belle d\'Europa',
      'Il Monte Igueldo, raggiungibile con una funicolare storica, per la vista sulla baia',
      'L\'Isla de Santa Clara, al centro della baia, raggiungibile in barca in estate',
      'Il Peine del Viento (Pettine del Vento), la scultura di Eduardo Chillida incastonata nelle rocce a fine Concha',
    ],
    cosaFare: [
      'Un giro di pintxos nella Parte Vieja seguendo la regola locale: un bar, una specialità, un bicchiere di txakoli o sidra, poi si cambia locale',
      'Salita al Monte Igueldo in funicolare per il tramonto sulla baia',
      'Nuotata alla Playa de la Concha nei mesi estivi',
      'Estensione di mezza giornata a Getaria o Zarautz, i paesi costieri poco fuori città noti per il pesce alla brace e il surf',
    ],
    doveDormire: 'La Parte Vieja per stare in mezzo ai bar da pintxos, ma la sera è rumorosa; Gros, oltre il fiume Urumea, è più tranquillo e vicino alla spiaggia di Zurriola, quella del surf.',
    doveMangiare:
      'Il txikiteo nella Parte Vieja è l\'esperienza in sé (vedi la scheda esperienza dedicata): un bar, una specialità, un bicchiere di txakoli (vino bianco basco leggermente frizzante) o sidra, poi si passa al bar successivo. Regola non scritta: si mangia in piedi al bancone, si prende il pintxo con le mani, si paga a fine giro dichiarando all\'oste cosa si è consumato.',
    comeArrivare:
      "Il volo più comodo dall'Italia atterra di solito a Bilbao (BIO): davanti agli arrivi parte il bus diretto Pesa per San Sebastián, circa 1h15 di viaggio, una corsa all'ora circa e biglietto sui 14-17 € alla macchinetta o online; il taxi per la stessa tratta costa circa 170-190 €. Più vicini alla città ci sono il piccolo aeroporto di San Sebastián a Hondarribia (EAS), con pochi voli soprattutto da Madrid e Barcellona, e quello di Biarritz (BIQ), in Francia. In treno da Madrid servono circa 5 ore; in auto il confine francese è a una ventina di minuti. In città l'auto conviene lasciarla in un parcheggio: il centro si gira a piedi.",
    comeSpostarsi: 'Il centro si gira a piedi; bus urbani per le zone periferiche e le spiagge più lontane.',
    periodoMigliore:
      'giugno-settembre, il periodo più asciutto e più caldo dell\'anno (comunque mite, di rado sopra i 25-27°C). In Andalusia è la stagione da evitare per il caldo.',
    costi:
      "Un giro di 4-5 pintxos con altrettanti bicchieri costa indicativamente 25-35 € a persona; i bar più semplici hanno pintxos da 2-4 € ciascuno. Funicolare dell'Igueldo 5,50 € andata e ritorno, Museo San Telmo 10 € (gratis il martedì), Aquarium 16 €, barca per l'isola di Santa Clara 5 € (dati 2026). San Sebastián è tra le città più care di Spagna per dormire. Budget indicativo al giorno a persona, con la doppia divisa in due: basso 80-110 €, medio 150-200 €, alto oltre 300 €.",
    erroriDaEvitare: [
      'Chiedere un piatto e caricarlo di pintxos come a un buffet: è considerato poco locale, meglio uno o due pezzi per bar prima di cambiare locale',
      'Fermarsi in un solo bar per tutta la serata: il senso del txikiteo è muoversi',
      'Sottovalutare il meteo atlantico anche d\'estate: piove più spesso che nelle altre tre regioni spagnole di questa guida, quindi conviene avere sempre con sé una giacca leggera',
    ],
    luoghi: [
      {
        "nome": "Parte Vieja e giro di pintxos",
        "testo": "Il centro storico, tra Plaza de la Constitución, il porto e il Monte Urgull, è la zona con più bar di pintxos della città. Il rito si chiama txikiteo: un bar, uno o due pintxos, un bicchiere, poi si cambia locale.",
        "come": "A piedi dal lungomare o da Boulevard. Si mangia in piedi al bancone, si prendono i pintxos freddi dal banco e quelli caldi si ordinano a voce.",
        "quando": "Pranzo dalle 13 e sera dalle 19-20. Il fine settimana i bar migliori sono pieni.",
        "tempo": "2-3 ore di giro",
        "consiglio": "Chiedere sempre il pintxo caldo della casa, non solo quelli sul banco. A fine giro si dichiara all'oste cosa si è consumato.",
        "costo": "pintxos da circa 2-4 € l'uno nei bar più semplici; un giro di 4-5 pintxos con altrettanti bicchieri circa 25-35 € a persona",
        "lat": 43.32333,
        "lng": -1.985
      },
      {
        "nome": "Playa de la Concha e Paseo de la Concha",
        "testo": "La spiaggia urbana a forma di conchiglia, con la balaustra bianca del lungomare. Le acque sono protette dall'isola di Santa Clara e il fondale è basso.",
        "come": "A piedi dal centro: la passeggiata va dalla Parte Vieja fino all'estremità della baia, verso il Peine del Viento.",
        "quando": "Per fare il bagno giugno-settembre. La marea alta restringe molto la spiaggia.",
        "tempo": "1-3 ore",
        "consiglio": "Controllare le maree: con la bassa marea la spiaggia raddoppia.",
        "costo": "gratuito",
        "lat": 43.3177,
        "lng": -1.98637
      },
      {
        "nome": "Monte Igueldo",
        "testo": "La collina a ovest della baia, con un parco divertimenti e un belvedere. Si sale con la funicolare inaugurata nel 1912.",
        "come": "Funicolare dalla base, raggiungibile in bus urbano dal centro. In alternativa si sale a piedi.",
        "quando": "Al tramonto. Controllare la stagione e gli orari della funicolare sul sito ufficiale.",
        "tempo": "1-1 ora e mezza",
        "consiglio": "Salire verso l'ora del tramonto e scendere a piedi lungo la strada panoramica.",
        "costo": "funicolare andata e ritorno 5,50 €, sola andata 4 €, bambini fino a 7 anni 2,50 €; il biglietto comprende l'ingresso al recinto, le attrazioni si pagano a parte (tariffe 2026). Chi sale a piedi o in auto paga 3 € per il belvedere.",
        "orari": "Gli orari di funicolare, belvedere e attrazioni cambiano giorno per giorno e sono pubblicati nel calendario del sito; le attrazioni chiudono nei giorni di pioggia.",
        "url": "https://www.monteigueldo.es/organiza-tu-visita",
        "lat": 43.3207,
        "lng": -2.0093
      },
      {
        "nome": "Monte Urgull",
        "testo": "La collina fortificata tra la Parte Vieja e il porto, con sentieri tra alberi e bastioni, il castello di Santa Cruz de la Mota e la statua del Sacro Cuore in cima.",
        "come": "A piedi dalla Parte Vieja, scale a fianco del porto. Ingresso libero al parco.",
        "quando": "Tutto l'anno; con la pioggia i sentieri sono scivolosi.",
        "tempo": "1-1 ora e mezza",
        "consiglio": "Sentieri ombreggiati, buoni nelle ore calde dell'estate.",
        "costo": "gratuito",
        "lat": 43.32472,
        "lng": -1.98889
      },
      {
        "nome": "Peine del Viento",
        "testo": "Tre sculture in acciaio di Eduardo Chillida ancorate alle rocce in fondo alla baia. Si protendono sul mare e, con le onde alte, aria e acqua escono da fori nel pavimento della piazzetta.",
        "come": "A piedi dalla Concha, in fondo alla passeggiata, oppure in bus fino a Ondarreta.",
        "quando": "Con mare mosso o all'alta marea, quando gli spruzzi si sentono di più.",
        "tempo": "30 minuti",
        "consiglio": "Con forti onde tenersi lontano dalla piattaforma bassa.",
        "costo": "gratuito",
        "lat": 43.32177,
        "lng": -2.00567
      },
      {
        "nome": "Basilica di Santa María del Coro",
        "testo": "La chiesa barocca del Settecento in fondo a Calle Mayor, incastrata tra le case e il Monte Urgull. La facciata riccamente scolpita si vede tutta solo arrivando dalla strada di fronte, con la cattedrale del Buen Pastor allineata alle spalle sull'altro lato della città.",
        "come": "A piedi nella Parte Vieja, all'estremità nord di Calle Mayor.",
        "quando": "In mattinata, fuori dagli orari delle funzioni.",
        "tempo": "20-30 minuti",
        "lat": 43.32399,
        "lng": -1.98669
      },
      {
        "nome": "Plaza de la Constitución",
        "testo": "La piazza porticata al centro della Parte Vieja, con i balconi numerati che ricordano gli anni in cui ospitava le corride. Intorno ci sono alcuni dei bar di pintxos più noti, e qui si svolgono le feste principali, dalla Tamborrada del 20 gennaio in poi.",
        "come": "A piedi, nel cuore della Parte Vieja.",
        "quando": "La sera, quando i bar dei portici si riempiono.",
        "tempo": "15-30 minuti",
        "costo": "gratuito",
        "lat": 43.32361,
        "lng": -1.98489
      },
      {
        "nome": "Museo San Telmo",
        "testo": "Il museo della società basca, in un convento domenicano del Cinquecento ai piedi dell'Urgull con un'ala moderna rivestita di lamiera traforata. Racconta la storia e la cultura dei Paesi Baschi; nella chiesa del convento ci sono le grandi tele dorate di Josep Maria Sert.",
        "come": "A piedi dalla Plaza Zuloaga, nella Parte Vieja. Biglietti in cassa o online.",
        "quando": "Il martedì l'ingresso è gratuito per tutti; nei giorni di pioggia è il rifugio più ovvio.",
        "tempo": "1h30-2 ore",
        "costo": "10 € intero, 4 € ridotto; gratuito il martedì e per i minori di 25 anni (tariffe 2026)",
        "orari": "Martedì-domenica 10-19 da novembre a marzo, 10-20 da aprile a ottobre. Chiuso il lunedì (salvo festivi e ponti), l'1 e il 20 gennaio e il 25 dicembre.",
        "url": "https://www.santelmomuseoa.eus/",
        "lat": 43.32477,
        "lng": -1.9853
      },
      {
        "nome": "Isola di Santa Clara",
        "testo": "L'isolotto in mezzo alla baia della Concha, con un faro, sentieri tra i prati e una piccola spiaggia con la bassa marea. Da qui la città si vede dal mare, con la Concha e i due monti ai lati.",
        "come": "Con le barche delle Motoras de la Isla dal porto: la linea rossa va diretta all'isola in meno di 10 minuti, la linea blu fa un giro della baia di mezz'ora e permette di scendere sull'isola.",
        "quando": "Da giugno a settembre, con il mare calmo; fuori stagione le corse sono poche e vanno controllate.",
        "tempo": "2-3 ore",
        "costo": "5 € andata e ritorno con la linea diretta, 8 € il giro della baia con sosta sull'isola (2026)",
        "orari": "Linea diretta dal 1 giugno al 30 settembre, 10-19 ogni 30 minuti circa, ultimo rientro dall'isola alle 20; corse soggette a meteo e mare.",
        "url": "https://www.motorasdelaisla.com/",
        "lat": 43.32068,
        "lng": -1.99967
      },
      {
        "nome": "Aquarium",
        "testo": "L'acquario sul molo del porto, aperto nel 1928. Il pezzo forte è il grande oceanario attraversato da un tunnel trasparente, con squali toro, razze e tartarughe; al piano superiore c'è una sezione sulla storia marittima basca.",
        "come": "In fondo al porto, a piedi dalla Parte Vieja lungo il molo. Biglietti in cassa o online.",
        "quando": "Martedì, giovedì e sabato a mezzogiorno si assiste al pasto dei pesci nell'oceanario. Utile con i bambini e nei giorni di pioggia.",
        "tempo": "1h30",
        "costo": "16 € adulti, 8 € bambini da 4 a 12 anni, 12 € ridotto per studenti e over 65 (2026)",
        "orari": "Novembre-marzo e ottobre: martedì-venerdì 10-19, weekend e festivi 10-20, chiuso il lunedì; aprile-giugno e settembre tutti i giorni 10-19 (weekend 10-20); luglio-agosto 10-20. La cassa chiude un'ora prima; chiuso 1 e 20 gennaio e 25 dicembre.",
        "url": "https://aquariumss.com/tarifas/",
        "lat": 43.32288,
        "lng": -1.99206
      },
      {
        "nome": "Gros e spiaggia della Zurriola",
        "testo": "Il quartiere oltre il fiume Urumea, più giovane e meno turistico della Parte Vieja, con bar di pintxos frequentati soprattutto da chi abita lì. La Zurriola è la spiaggia aperta all'oceano, con onde costanti: è quella del surf, con scuole e noleggi lungo il lungomare.",
        "come": "A piedi dalla Parte Vieja attraverso il ponte del Kursaal o quello di Santa Catalina.",
        "quando": "Mattina per il surf, sera per i bar del quartiere.",
        "tempo": "Mezza giornata",
        "costo": "gratuito; lezioni di surf e noleggio tavole a pagamento",
        "lat": 43.3264,
        "lng": -1.975
      },
      {
        "nome": "Palazzo e giardini di Miramar",
        "testo": "La residenza estiva costruita a fine Ottocento per la regina Maria Cristina, in stile cottage inglese, sulla collinetta che divide la Concha da Ondarreta. Il palazzo si visita solo in occasione di eventi, ma il parco intorno è aperto e ha una delle viste più belle sulla baia.",
        "come": "A piedi lungo la passeggiata della Concha, salendo dalla rampa a metà baia.",
        "quando": "Al tramonto, con la luce sulla baia.",
        "tempo": "30-45 minuti",
        "costo": "giardini gratuiti",
        "lat": 43.31455,
        "lng": -1.99772
      },
      {
        "nome": "Cattedrale del Buen Pastor",
        "testo": "La cattedrale neogotica di fine Ottocento al centro del quartiere ottocentesco, con il campanile di 75 metri, il più alto della provincia. Fuori si apre una piazza dove la gente del quartiere si ritrova la sera.",
        "come": "A piedi dal Boulevard lungo Calle Loiola, nell'Área Romántica.",
        "quando": "Di giorno, fuori dagli orari delle messe.",
        "tempo": "20-30 minuti",
        "lat": 43.3167,
        "lng": -1.98156
      },
      {
        "nome": "Kursaal e Paseo Nuevo",
        "testo": "I due cubi di vetro di Rafael Moneo alla foce dell'Urumea sono la sede del Festival del Cinema di settembre. Dal Kursaal il Paseo Nuevo gira intorno al Monte Urgull a picco sul mare fino al porto: con le mareggiate le onde superano il parapetto.",
        "come": "A piedi dalla Zurriola o dalla Parte Vieja; il Paseo Nuevo è un anello di circa 2 km.",
        "quando": "Con il mare grosso per le onde, oppure al tramonto.",
        "tempo": "45 minuti-1 ora",
        "costo": "passeggiata gratuita",
        "lat": 43.32444,
        "lng": -1.97908
      },
      {
        "nome": "Mercato de La Bretxa",
        "testo": "Il mercato storico al margine della Parte Vieja, sotto la piazza omonima, con i banchi di pesce, verdura e formaggi dove si riforniscono anche i bar del centro. È il posto per vedere il pescato del Cantabrico prima che finisca sui banconi.",
        "come": "A piedi, all'ingresso della Parte Vieja dal Boulevard.",
        "quando": "Al mattino nei giorni feriali, quando i banchi sono pieni.",
        "tempo": "30-45 minuti",
        "lat": 43.32347,
        "lng": -1.98274
      },
      {
        "nome": "Getaria e Zarautz",
        "testo": "Due paesi della costa a ovest di San Sebastián. Getaria è nota per il pesce alla brace (rodaballo) e per il vino txakoli, Zarautz per la spiaggia lunga e il surf.",
        "come": "Bus Lurraldebus dalla stazione degli autobus di San Sebastián o treno regionale per Zarautz. Si fa in mezza giornata.",
        "quando": "Tutto l'anno. A Getaria il pesce alla brace si mangia a pranzo.",
        "tempo": "Mezza giornata",
        "consiglio": "Provare il pesce nei locali di Getaria con grigliata in strada.",
        "lat": 43.30446,
        "lng": -2.20374
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: colazione e passeggiata sul Paseo de la Concha dal municipio fino al Peine del Viento, con sosta ai giardini di Miramar.",
          "Tarda mattinata: Basilica di Santa María e Plaza de la Constitución, poi il mercato de La Bretxa.",
          "Pranzo: primo giro di pintxos nella Parte Vieja.",
          "Pomeriggio: salita al Monte Urgull e ritorno lungo il Paseo Nuevo fino al Kursaal.",
          "Tramonto: funicolare del Monte Igueldo per la vista sulla baia.",
          "Sera: secondo giro di pintxos in bar diversi dal primo."
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come il programma di un giorno.",
          "Giorno 2, mattina: Museo San Telmo (gratis il martedì), poi l'Aquarium in fondo al porto.",
          "Giorno 2, pomeriggio: d'estate barca per l'isola di Santa Clara, altrimenti Gros e la spiaggia della Zurriola.",
          "Giorno 2, sera: pintxos a Gros, più tranquilli e meno cari della Parte Vieja."
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1 e 2: come sopra.",
          "Giorno 3, mattina: Getaria in bus, lungomare e porto, pranzo con pesce alla brace e txakoli.",
          "Giorno 3, pomeriggio: Zarautz per la spiaggia lunga, oppure Chillida Leku (chiuso martedì e mercoledì) sulla via del ritorno.",
          "Giorno 3, sera: ultima cena in città, magari in una sidreria dell'entroterra nella stagione del sidro."
        ]
      }
    ],
    zone: [
      {
        "nome": "Parte Vieja",
        "perChi": "Chi vuole essere in mezzo ai bar",
        "testo": "Mangiare e uscire a piedi, ma di sera il rumore resta fino a tardi e i prezzi sono più alti. Le camere sono piccole.",
        "fascia": "120-250 €"
      },
      {
        "nome": "Centro (Área Romántica)",
        "perChi": "Chi cerca comodità e negozi",
        "testo": "Quartiere ottocentesco tra Concha e Boulevard, a pochi passi dalla Parte Vieja. Più tranquillo della zona vecchia, con prezzi medi.",
        "fascia": "130-280 €"
      },
      {
        "nome": "Gros",
        "perChi": "Chi ama il surf e vuole meno turisti",
        "testo": "Oltre il fiume Urumea, vicino alla spiaggia di Zurriola. Bar e pintxos con prezzi più bassi, a piedi dal centro vecchio attraverso il ponte.",
        "fascia": "110-220 €"
      },
      {
        "nome": "Antiguo e Ondarreta",
        "perChi": "Famiglie e chi vuole la spiaggia tranquilla",
        "testo": "Il quartiere residenziale in fondo alla baia, tra la spiaggia di Ondarreta e il Monte Igueldo. È silenzioso la sera e ha qualche albergo meno caro; per la Parte Vieja sono 30-40 minuti a piedi sul lungomare o pochi minuti di bus.",
        "fascia": "100-200 €"
      }
    ],
    gite: [
      {
        "nome": "Getaria e Zarautz",
        "distanza": "25 km, circa 30 minuti",
        "come": "Bus Lurraldebus dalla stazione degli autobus o in auto lungo la costa.",
        "testo": "Il porto dei pescatori con le griglie in strada, le vigne di txakoli sulle colline e il museo dedicato a Cristóbal Balenciaga, nato qui. Zarautz, a pochi chilometri, ha la spiaggia più lunga della costa basca."
      },
      {
        "nome": "Hondarribia",
        "distanza": "20 km, circa 30 minuti",
        "come": "Bus Lurraldebus o in auto; dal porto una barchetta attraversa il Bidasoa per Hendaye, in Francia.",
        "testo": "Il borgo murato sul confine, con il centro medievale in salita, il castello di Carlo V e il quartiere della Marina con le case di pescatori colorate e i balconi in legno. Si unisce bene a una sera di pintxos nei bar della Marina."
      },
      {
        "nome": "Chillida Leku",
        "distanza": "circa 10 km, 20 minuti in auto",
        "come": "In auto o in taxi verso Hernani; c'è un parcheggio gratuito per i visitatori.",
        "testo": "Il museo all'aperto di Eduardo Chillida, l'autore del Peine del Viento: una quarantina di sculture in ferro e granito sparse in un prato intorno a un casale del Cinquecento. Biglietto 14 €, aperto 10-17, chiuso martedì e mercoledì (2026)."
      },
      {
        "nome": "Pasaia",
        "distanza": "7 km, 15 minuti",
        "come": "Bus urbano o a piedi lungo il sentiero costiero del Monte Ulía, circa 2-3 ore.",
        "testo": "Il porto in fondo a un fiordo stretto, con Pasai Donibane, una sola strada di case affacciate sull'acqua, e la casa dove abitò Victor Hugo. Le due sponde sono unite da una barchetta che fa la spola tutto il giorno."
      }
    ],
    sapori: [
      {
        "nome": "Pintxos",
        "testo": "Spuntini su fetta di pane: gilda (oliva, acciuga e peperoncino), tortilla, jamón, baccalà. Al banco si prendono con le mani."
      },
      {
        "nome": "Txakoli",
        "testo": "Vino bianco basco leggermente frizzante, versato dall'alto nel bicchiere. Si beve soprattutto d'estate."
      },
      {
        "nome": "Sidra",
        "testo": "Sidro basco naturale, non gassato, servito nelle sidrerie dell'entroterra con menù fisso di tortilla di baccalà, bistecca e formaggio."
      },
      {
        "nome": "Bacalao al pil-pil",
        "testo": "Baccalà cotto lentamente in olio d'oliva e aglio fino a creare una salsa emulsionata."
      },
      {
        "nome": "Tarta de queso",
        "testo": "La cheesecake basca, cotta alta e cremosa con la superficie bruciata, diventata famosa da un bar della Parte Vieja."
      }
    ],
    attenzioni: [
      "Prezzi: i bar più turistici della Parte Vieja chiedono molto per un pintxo. Guardare il banco e il listino prima di ordinare.",
      "Pioggia e fresco anche d'estate: portare giacca impermeabile.",
      "Mare alla Concha: controllare bandiera e maree prima di entrare, perché ci sono correnti vicino alle rocce.",
      "Borseggi tra la folla nella Parte Vieja nel fine settimana e durante le feste di agosto (Semana Grande): tenere borsa davanti.",
      "Nelle sidrerie e nei ristoranti prenotare nel fine settimana: i locali buoni si riempiono."
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a San Sebastián?",
        "risposta": "Due giorni bastano per la Concha, la Parte Vieja, i due monti e due serate di pintxos. Con tre si aggiungono Getaria o Hondarribia e un museo con calma."
      },
      {
        "domanda": "Come funziona il giro di pintxos?",
        "risposta": "Si entra in un bar, si prendono uno o due pintxos e un bicchiere, poi si passa al bar successivo. Quelli freddi si prendono dal banco, quelli caldi si ordinano a voce, e si paga alla fine dicendo cosa si è consumato."
      },
      {
        "domanda": "Quanto costa la funicolare del Monte Igueldo?",
        "risposta": "Nel 2026 l'andata e ritorno costa 5,50 € per gli adulti e 2,50 € per i bambini fino a 7 anni, e comprende l'ingresso al recinto in cima. Le attrazioni del parco si pagano a parte."
      },
      {
        "domanda": "Meglio dormire a San Sebastián o a Bilbao?",
        "risposta": "Per mangiare e per il mare conviene San Sebastián, che però costa di più. Le due città sono a circa 1h20 di bus: chi ha poco budget può dormire a Bilbao e venire qui in giornata, rinunciando alle serate di pintxos."
      },
      {
        "domanda": "Si può fare il bagno a San Sebastián?",
        "risposta": "Sì, da giugno a settembre: la Concha e Ondarreta sono riparate e con fondale basso, la Zurriola è aperta alle onde e frequentata dai surfisti. Con l'alta marea la Concha si riduce a una striscia."
      },
      {
        "domanda": "Quando andare a San Sebastián?",
        "risposta": "Da giugno a settembre per il bagno e il clima più asciutto. Settembre ha anche il Festival del Cinema, che riempie gli alberghi; in inverno piove spesso, ma i bar sono pieni e i prezzi degli alloggi scendono."
      }
    ],
    esperienzeSlugs: ['pintxos-crawl-donostia'],
    tripSlugs: ['spagna-nord-itinerario'],
    imageAlt: 'La spiaggia della Concha a San Sebastián con l\'isola di Santa Clara e il Monte Igueldo sullo sfondo',
    immagine: '/images/spagna/san-sebastian.jpg',
  },
  {
    slug: 'bilbao',
    paeseSlug: 'spagna',
    ordine: 6,
    nome: 'Bilbao',
    tipologia: ['città', 'arte', 'architettura'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono stato nel viaggio in auto con amici nel nord della Spagna, arrivando da San Sebastián: due giorni, con il Guggenheim e l'Ensanche, poi lungo la costa verso la Cantabria.",
    introduzione:
      'L\'ex capitale industriale basca. Nel 1997 ha aperto il Museo Guggenheim di Frank Gehry ed è nato il termine «effetto Bilbao», per una città intera rigenerata da un solo edificio. Oggi è una delle capitali culturali più vivaci del Nord della Spagna, con un centro storico (il Casco Viejo) rimasto quasi com\'era accanto ai grattacieli sull\'estuario del Nervión.',
    percheAndarci:
      'Il Guggenheim da solo vale il viaggio, per l\'edificio in titanio che riflette la luce in modo diverso a ogni ora e per le collezioni d\'arte contemporanea. Il Casco Viejo, con le sue «Siete Calles» medievali, ha poi una scena di pintxos seria quanto quella di San Sebastián, con meno turisti.',
    cosaVedere: [
      'Il Museo Guggenheim Bilbao, l\'edificio in titanio di Frank Gehry sull\'estuario del Nervión, con «Puppy» di Jeff Koons e «Maman» di Louise Bourgeois all\'esterno',
      'Il Casco Viejo, le «Siete Calles» del centro storico medievale, con la Cattedrale di Santiago',
      'Il Mercado de la Ribera, uno dei mercati coperti più grandi d\'Europa sul lungofiume',
      'Il Puente de Vizcaya (a Portugalete, poco fuori città), il ponte trasbordatore più antico del mondo, patrimonio UNESCO',
      'Il quartiere dell\'Ensanche, il Bilbao ottocentesco borghese, con negozi e architettura liberty',
    ],
    cosaFare: [
      'Visitare il Guggenheim al mattino presto, quando la luce sul titanio è più bella e le code più corte',
      'Un giro di pintxos nel Casco Viejo, meno turistico e più economico di quello di San Sebastián',
      'Attraversare il Puente de Vizcaya sulla navicella sospesa, o salire sulla passerella panoramica',
      'Passeggiata lungo il Nervión dal Guggenheim fino al Casco Viejo',
    ],
    doveDormire: 'Il Casco Viejo per l\'atmosfera storica e i pintxos; l\'Ensanche, vicino al Guggenheim, per comodità e collegamenti.',
    doveMangiare: 'Stessa cultura del pintxo di San Sebastián ma con un carattere più cittadino e meno turistico, concentrata nelle Siete Calles del Casco Viejo; il bacalao al pil-pil e il txuletón (bistecca alla brace) sono i piatti forti della cucina basca da ristorante.',
    comeArrivare:
      "L'aeroporto di Bilbao (Loiu) è a circa 12 km dal centro: il Bizkaibus A3247 parte davanti agli arrivi e arriva in centro in circa 20 minuti, per circa 5 € (meno con la carta Barik); il taxi impiega un quarto d'ora. Dall'aeroporto parte anche il bus diretto Pesa per San Sebastián, circa 1h15 e 14-17 €. Da Madrid si arriva in treno o in bus in circa 4h30-5h; da San Sebastián in bus in circa 1h20.",
    comeSpostarsi: 'Metro (linea Euskotren/Metro Bilbao) efficiente per raggiungere il Guggenheim e le zone periferiche; il centro storico si gira a piedi.',
    periodoMigliore: 'giugno-settembre, come il resto del Nord: clima fresco e piovoso tutto l\'anno, con l\'estate come finestra più stabile.',
    costi:
      "Guggenheim 12 € intero a novembre 2026 (la tariffa cambia con le mostre e d'estate è stata più alta), gratis sotto i 18 anni; Museo de Bellas Artes 12 €, gratis il martedì; biglietto combinato dei due musei 16 €. Puente de Vizcaya: traversata in navicella 0,60 €, passerella 11 €. Un giro di pintxos con bicchiere costa circa 20-30 € a persona. Budget indicativo al giorno a persona, con la doppia divisa in due: basso 70-90 €, medio 120-160 €, alto oltre 230 €.",
    erroriDaEvitare: [
      'Visitare il Guggenheim di lunedì senza controllare prima: il museo chiude quasi tutti i lunedì, tranne un\'estensione stagionale estiva',
      'Trattare Bilbao come una tappa mordi e fuggi fra San Sebastián e la Cantabria: il Casco Viejo merita almeno una serata intera',
      'Sottovalutare la pioggia: portarsi sempre un impermeabile leggero, indipendentemente dalla stagione',
    ],
    luoghi: [
      {
        "nome": "Museo Guggenheim Bilbao",
        "testo": "Il museo di Frank Gehry, aperto nel 1997, tutto in titanio, vetro e pietra calcarea, sulla riva del Nervión. All'esterno ci sono «Puppy» di Jeff Koons, coperto di fiori, e «Maman», il ragno di Louise Bourgeois. All'interno si alternano mostre temporanee e una collezione di arte contemporanea, con «The Matter of Time» di Richard Serra.",
        "come": "Metro fino a Moyúa e poi a piedi, oppure tram fino alla fermata Guggenheim. Si può visitare anche solo l'esterno, che è libero, con la passeggiata sul fiume.",
        "quando": "Dal martedì alla domenica 10-19; fino alle 20 nella Settimana Santa e dal 15 giugno al 13 settembre. Chiuso il lunedì, tranne alcune aperture straordinarie, tra cui i lunedì d'estate. Chiuso il 25 dicembre e il 1 gennaio. Al mattino presto la luce sul titanio è migliore.",
        "tempo": "2-3 ore dentro, 30 minuti per l'esterno",
        "costo": "12 euro intero, gratis sotto i 18 anni (tariffa sul sito ufficiale a novembre 2026: cambia con la stagione e le mostre)",
        "url": "https://www.guggenheim-bilbao.eus/",
        "consiglio": "Comprare il biglietto online e visitare prima le sale con Serra; poi l'esterno al tramonto.",
        "orari": "Martedì-domenica 10-19; fino alle 20 nella Settimana Santa e dal 15 giugno al 13 settembre. Lunedì chiuso, tranne i lunedì d'estate e alcune date (2026). Chiuso il 25 dicembre e il 1 gennaio; il 24 e il 31 dicembre chiude alle 17.",
        "lat": 43.26883,
        "lng": -2.9341
      },
      {
        "nome": "Casco Viejo e Siete Calles",
        "testo": "Il centro storico medievale, con le sette vie parallele da cui nacque la città, la cattedrale di Santiago e la Plaza Nueva, circondata da portici. Qui c'è una delle migliori scene di pintxos del Paese.",
        "come": "A piedi o in metro fino a Casco Viejo. La Plaza Nueva è il punto di ritrovo.",
        "quando": "Pintxos da mezzogiorno e dalle 19. Il giovedì sera e il fine settimana il quartiere è pieno.",
        "tempo": "2-3 ore",
        "consiglio": "Provare i bar a ridosso della Plaza Nueva e quelli sulle vie laterali, meno turistici.",
        "costo": "gratuito",
        "lat": 43.25722,
        "lng": -2.92389
      },
      {
        "nome": "Museo de Bellas Artes",
        "testo": "Il museo di belle arti della città, a cinque minuti dal Guggenheim, con una collezione che va dal Medioevo al Novecento: maestri spagnoli come El Greco, Zurbarán e Goya e una sezione ampia di pittura basca. È il complemento classico al Guggenheim e si visita in una mattina.",
        "come": "Metro fino a Plaza Elíptica o tram fino ad Abandoibarra o Guggenheim. Il museo è nel parco di Doña Casilda, in Plaza Eduardo Chillida.",
        "quando": "Il martedì l'ingresso è gratuito ma sono aperte solo alcune sale: per la collezione completa conviene un altro giorno.",
        "tempo": "1 ora e mezza-2 ore",
        "costo": "12 € intero, 6 € ridotto, gratis sotto i 18 anni; combinato con il Guggenheim 16 € (2026)",
        "orari": "Lunedì, mercoledì-sabato 10-19 (le collezioni chiudono alle 18); martedì 10-18 con spazi ridotti; domenica 10-15. Chiuso il 25 dicembre, il 1 e il 6 gennaio.",
        "lat": 43.26597,
        "lng": -2.93785,
        "url": "https://www.bilbaomuseoa.eus/",
        "consiglio": "Chi visita entrambi i musei risparmia con il biglietto combinato."
      },
      {
        "nome": "Mercado de la Ribera",
        "testo": "Il mercato coperto sul lungofiume, inaugurato nel 1929, in stile razionalista con decorazioni Art Déco: è uno dei più grandi mercati coperti d'Europa. Banchi di pesce, carne, frutta e un'area con pintxos.",
        "come": "A piedi dal Casco Viejo, a pochi minuti, sulla riva del Nervión.",
        "quando": "Al mattino per i banchi. Controllare gli orari nel fine settimana e nei festivi.",
        "tempo": "1 ora",
        "consiglio": "Prendere un pintxo o un caffè nell'area ristoro al piano superiore.",
        "costo": "ingresso libero",
        "orari": "I banchi sono chiusi la domenica.",
        "lat": 43.25552,
        "lng": -2.92424
      },
      {
        "nome": "Plaza Nueva",
        "testo": "La piazza porticata ottocentesca del Casco Viejo, chiusa da edifici neoclassici e circondata da bar di pintxos. È il punto di ritrovo della città vecchia, sia all'ora dell'aperitivo sia la sera.",
        "come": "A piedi dal Casco Viejo, oppure metro fino alla fermata Casco Viejo, a due passi.",
        "quando": "La domenica mattina sotto i portici c'è il mercatino di francobolli e monete; la sera per i pintxos.",
        "tempo": "30 minuti-1 ora, di più se ci si ferma a mangiare",
        "costo": "gratuito",
        "lat": 43.25901,
        "lng": -2.92269
      },
      {
        "nome": "Cattedrale di Santiago",
        "testo": "La cattedrale gotica del Casco Viejo, dedicata a San Giacomo, con un chiostro e una facciata rifatta nell'Ottocento. Bilbao era una tappa del Camino del Norte e la chiesa ne conserva il legame.",
        "come": "A piedi, in Plaza de Santiago, nel cuore delle Siete Calles. Le visite turistiche si fanno a orari diversi da quelli delle funzioni.",
        "quando": "Fuori dagli orari delle messe; gli orari cambiano per motivi di culto.",
        "tempo": "30-45 minuti",
        "lat": 43.25721,
        "lng": -2.9237,
        "url": "https://catedralbilbao.com/"
      },
      {
        "nome": "Passeggiata sulla ría, Abandoibarra e Zubizuri",
        "testo": "Il lungofiume del Nervión, rifatto dopo la chiusura dei cantieri, collega il Casco Viejo al Guggenheim con parchi, sculture e ponti. Lo Zubizuri, il ponte pedonale bianco di Santiago Calatrava, è il punto più fotografato del percorso.",
        "come": "A piedi dalla Plaza Nueva o dal Mercado de la Ribera seguendo la riva sinistra; il tram corre parallelo per chi vuole tornare indietro.",
        "quando": "Al tramonto o la sera, quando il titanio del museo prende la luce. Con la pioggia il pavimento dello Zubizuri è scivoloso.",
        "tempo": "1 ora a passo tranquillo",
        "costo": "gratuito",
        "lat": 43.26632,
        "lng": -2.9278
      },
      {
        "nome": "Puente de Vizcaya (Portugalete)",
        "testo": "Ponte trasbordatore del 1893, ancora in funzione e patrimonio UNESCO dal 2006. Una navicella appesa trasporta persone e auto da una riva all'altra della ría in pochi minuti. Con gli ascensori nei piloni si sale alla passerella alta.",
        "come": "Metro linea 1 fino ad Areeta (Getxo) oppure linea 2 fino a Portugalete, una per ogni riva.",
        "quando": "Funziona tutto l'anno; verificare gli orari e i prezzi del trasbordo e della passerella.",
        "tempo": "1-2 ore",
        "url": "https://puente-colgante.com/",
        "consiglio": "Attraversare in navicella e tornare in metro, per vedere il ponte dal basso.",
        "costo": "navicella 0,60 € a persona; passerella in alto 11 € andata e ritorno, 9 € ridotto, 14 € con audioguida (2026)",
        "orari": "La navicella fa corse continue di circa 8 minuti. Passerella 10-20 da Pasqua a ottobre, 10-14 e 16-19 da novembre a Pasqua; ultimo accesso 20 minuti prima. A fine 2026 l'ascensore funzionava con orario ridotto per un guasto: controllare sul sito.",
        "lat": 43.32306,
        "lng": -3.01694
      },
      {
        "nome": "Funicolare di Artxanda",
        "testo": "Funicolare del 1915 che sale al colle di Artxanda, sopra la città, da cui si vede tutta Bilbao con il Guggenheim e la ría.",
        "come": "La stazione bassa è a pochi minuti dal centro, dall'altra parte del fiume.",
        "quando": "Al tramonto, con il cielo limpido. Controllare gli orari sul sito del gestore.",
        "tempo": "1 ora",
        "consiglio": "Salire verso l'ora del tramonto e fermarsi per una birra sulla collina.",
        "orari": "Da ottobre a maggio lunedì-sabato 7:15-22, domenica e festivi 8:15-22; da giugno a settembre fino alle 23 il venerdì, il sabato e le vigilie dei festivi (da verificare).",
        "lat": 43.2713,
        "lng": -2.92253
      },
      {
        "nome": "Azkuna Zentroa (Alhóndiga)",
        "testo": "L'ex magazzino del vino dei primi del Novecento, trasformato da Philippe Starck in centro culturale. Nell'atrio ci sono decine di colonne tutte diverse tra loro, in mattoni, marmo, metallo e legno; sopra ci sono cinema, biblioteca, palestre e una piscina con il fondo trasparente che si vede dal basso.",
        "come": "A piedi dalla Gran Vía e da Plaza Moyúa, oppure metro fino a Indautxu.",
        "quando": "In un pomeriggio di pioggia, abbinato a una passeggiata nell'Ensanche.",
        "tempo": "30 minuti-1 ora",
        "lat": 43.25969,
        "lng": -2.93712,
        "url": "https://www.azkunazentroa.eus/"
      },
      {
        "nome": "Euskal Museoa (Museo Basco)",
        "testo": "Il museo di etnografia basca, in un ex collegio del Seicento nel Casco Viejo. Racconta pesca, pastorizia, mestieri e feste dei Paesi Baschi; nel chiostro c'è il Mikeldi, un idolo di pietra preistorico a forma di animale.",
        "come": "A piedi, in Plaza Miguel de Unamuno, all'ingresso del Casco Viejo.",
        "quando": "Prima di girare le Siete Calles, per avere il contesto della cultura basca.",
        "tempo": "1 ora",
        "lat": 43.25803,
        "lng": -2.92185
      },
      {
        "nome": "Basilica di Begoña",
        "testo": "Il santuario della patrona di Biscaglia, su un colle sopra il Casco Viejo. Dal sagrato si vede la città vecchia dall'alto ed è una delle salite classiche degli abitanti.",
        "come": "A piedi con le scale di Mallona da Plaza de Unamuno, oppure con l'ascensore pubblico di Begoña dal Casco Viejo.",
        "quando": "Al mattino, abbinata al Museo Basco che è ai piedi delle scale.",
        "tempo": "1 ora con la salita",
        "costo": "ingresso libero",
        "lat": 43.25877,
        "lng": -2.91374
      },
      {
        "nome": "Itsasmuseum",
        "testo": "Il museo marittimo della ría, sul terreno degli ex cantieri navali Euskalduna, accanto al palazzo dei congressi. Racconta il porto, la cantieristica e il legame della città con l'acqua; fuori c'è la gru rossa Carola, simbolo del passato industriale.",
        "come": "A piedi dal Guggenheim lungo la ría in circa 15 minuti, oppure tram fino a Euskalduna.",
        "quando": "In un giorno di pioggia o per chi viaggia con bambini.",
        "tempo": "1-1 ora e mezza",
        "orari": "Martedì-domenica 11-19; lunedì chiuso.",
        "lat": 43.2664,
        "lng": -2.9462,
        "url": "https://www.itsasmuseum.eus/"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Guggenheim all'apertura delle 10, con Puppy e Maman all'esterno prima di entrare.",
          "Tarda mattinata: passeggiata sulla ría fino allo Zubizuri e al Mercado de la Ribera.",
          "Pranzo: pintxos nella Plaza Nueva o al piano superiore del mercato.",
          "Pomeriggio: Siete Calles, Cattedrale di Santiago e Museo Basco.",
          "Tardo pomeriggio: funicolare di Artxanda per il tramonto sulla città.",
          "Sera: secondo giro di pintxos nel Casco Viejo."
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Guggenheim, ría, Ribera, Casco Viejo e Artxanda come nel programma di un giorno.",
          "Giorno 2, mattina: Museo de Bellas Artes (con il biglietto combinato) e parco di Doña Casilda.",
          "Giorno 2, pranzo: Ensanche, Gran Vía e Azkuna Zentroa.",
          "Giorno 2, pomeriggio: metro fino a Portugalete o Areeta, traversata del Puente de Vizcaya in navicella e passerella in alto.",
          "Giorno 2, sera: cena di pintxos nella Plaza Nueva."
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1 e 2: come nel programma di due giorni.",
          "Giorno 3, mattina: San Juan de Gaztelugatxe in auto (circa 45 minuti), prenotando l'accesso se è un giorno a numero chiuso.",
          "Giorno 3, pranzo: Bermeo o Mundaka, sulla costa.",
          "Giorno 3, pomeriggio: Gernika, con la Casa de Juntas e l'albero, poi rientro a Bilbao.",
          "Giorno 3, sera: Basilica di Begoña al tramonto e ultima cena nel Casco Viejo."
        ]
      }
    ],
    zone: [
      {
        "nome": "Casco Viejo",
        "perChi": "Chi vuole pintxos e atmosfera",
        "testo": "Camere nel quartiere storico, comode per i bar. La sera è rumoroso nei fine settimana, soprattutto il giovedì.",
        "fascia": "70-150 €"
      },
      {
        "nome": "Ensanche e dintorni del Guggenheim",
        "perChi": "Chi cerca comodità e collegamenti",
        "testo": "Quartiere ottocentesco con negozi, metro e tram. Più tranquillo la sera e a pochi minuti a piedi dal museo.",
        "fascia": "90-180 €"
      },
      {
        "nome": "Abandoibarra",
        "perChi": "Chi vuole il Guggenheim sotto la finestra",
        "testo": "La zona nuova sulla ría, tra il museo e il palazzo Euskalduna, con alberghi grandi e camere con vista sul fiume. È tranquilla la sera ma ha pochi bar: per i pintxos si va a piedi o in tram nel Casco Viejo.",
        "fascia": "120-250 €"
      },
      {
        "nome": "Bilbao La Vieja e San Francisco",
        "perChi": "Chi viaggia con budget ridotto e ama i locali alternativi",
        "testo": "Sulla riva opposta al Casco Viejo, collegata dal ponte di San Antón, è il quartiere dei bar giovani, delle gallerie e delle cucine dal mondo. I prezzi sono i più bassi del centro, ma alcune vie la sera sono meno curate.",
        "fascia": "60-120 €"
      }
    ],
    gite: [
      {
        "nome": "San Juan de Gaztelugatxe",
        "distanza": "34 km, circa 45 minuti in auto",
        "come": "In auto verso Bakio; dal parcheggio si scende a piedi e poi si salgono le scale fino all'eremo. Nei giorni di maggiore affluenza serve una prenotazione gratuita online, da mostrare all'ingresso.",
        "testo": "L'eremo su un isolotto unito alla costa da un ponte di pietra e da una lunga scalinata, tra i luoghi più fotografati dei Paesi Baschi. La discesa è facile, la risalita è faticosa: servono scarpe buone e un paio d'ore."
      },
      {
        "nome": "Gernika",
        "distanza": "38 km, 40 minuti in auto o circa 1 ora in treno",
        "come": "Treno Euskotren dalla stazione di Atxuri o in auto; il centro si gira a piedi.",
        "testo": "La città simbolo dei Paesi Baschi, bombardata nel 1937 e raccontata da Picasso. Si vedono la Casa de Juntas con l'albero di Gernika, il Museo della Pace e la riproduzione murale di Guernica in una via del centro. Si abbina bene a Mundaka e alla riserva di Urdaibai."
      },
      {
        "nome": "San Sebastián",
        "distanza": "circa 1h20 in bus",
        "come": "Bus diretti dalla stazione degli autobus di Termibus, ogni ora circa.",
        "testo": "La Concha, il Monte Urgull e il giro di pintxos nella Parte Vieja. In giornata si fa, ma la città merita almeno una notte: c'è una scheda dedicata."
      },
      {
        "nome": "Zumaia e il flysch",
        "distanza": "79 km, circa 1 ora in auto",
        "come": "In auto in autostrada verso San Sebastián, uscita per Zumaia; la spiaggia di Itzurun è a piedi dal paese.",
        "testo": "Le scogliere a strati del flysch chiudono la spiaggia di Itzurun e sono tra i paesaggi più famosi della costa basca. Con la bassa marea si vede la piattaforma di roccia scoperta."
      }
    ],
    sapori: [
      {
        "nome": "Pintxos",
        "testo": "Nel Casco Viejo si trovano gildas, tortillas, calamari e piatti caldi. Si prendono al banco e si paga alla fine."
      },
      {
        "nome": "Bacalao al pil-pil",
        "testo": "Baccalà con salsa di olio d'oliva e aglio, un piatto classico dei ristoranti baschi."
      },
      {
        "nome": "Txuletón",
        "testo": "Costata di manzo alla brace, spessa, servita con sale grosso. Si divide in due."
      },
      {
        "nome": "Marmitako",
        "testo": "Stufato di tonno e patate, piatto marinaro con peperone."
      },
      {
        "nome": "Txakoli",
        "testo": "Vino bianco basco leggermente frizzante, perfetto con i pintxos."
      }
    ],
    attenzioni: [
      "Guggenheim: controllare giorni di chiusura e prezzi prima di andare. Le tariffe cambiano per stagione.",
      "Pioggia frequente tutto l'anno: portare un impermeabile leggero.",
      "Casco Viejo nei fine settimana e durante l'Aste Nagusia, la festa di agosto: pieno di gente e borseggi possibili.",
      "Metro e tram: validare il biglietto o la tessera ricaricabile all'ingresso."
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Bilbao?",
        "risposta": "Un giorno basta per Guggenheim, Casco Viejo e la ría. Con due si aggiungono il Museo de Bellas Artes e il Puente de Vizcaya; con tre San Juan de Gaztelugatxe e Gernika."
      },
      {
        "domanda": "Bisogna prenotare il Guggenheim?",
        "risposta": "Non è obbligatorio, ma il biglietto online evita la coda in estate e nei ponti. Il museo è chiuso quasi tutti i lunedì, tranne quelli dal 15 giugno a inizio settembre."
      },
      {
        "domanda": "Quanto costa il Guggenheim Bilbao?",
        "risposta": "A novembre 2026 l'intero costa 12 €, ridotto 6 €, gratis sotto i 18 anni; il prezzo cambia con le mostre. Con il Museo de Bellas Artes c'è un biglietto combinato da 16 €."
      },
      {
        "domanda": "Serve la prenotazione per San Juan de Gaztelugatxe?",
        "risposta": "Solo nei giorni a numero chiuso, cioè in alta stagione e nei festivi: la prenotazione è gratuita e si fa online. Negli altri giorni l'accesso è libero."
      },
      {
        "domanda": "Meglio Bilbao o San Sebastián come base?",
        "risposta": "San Sebastián ha la spiaggia e i pintxos più famosi, Bilbao i musei, alberghi un po' meno cari e collegamenti migliori dall'aeroporto. Con 4-5 giorni conviene dormire in entrambe."
      },
      {
        "domanda": "Come si va dall'aeroporto di Bilbao al centro?",
        "risposta": "Il Bizkaibus A3247 arriva in centro in circa 20 minuti per circa 5 €, meno con la carta Barik. Dallo stesso aeroporto parte il bus diretto per San Sebastián."
      }
    ],
    esperienzeSlugs: ['guggenheim-bilbao'],
    tripSlugs: ['spagna-nord-itinerario'],
    imageAlt: 'Il Museo Guggenheim di Bilbao in titanio lungo la passeggiata sul Nervión, con il ponte rosso de La Salve sullo sfondo',
    immagine: '/images/spagna/bilbao.jpg',
  },
  {
    slug: 'santiago-compostela-camino-del-norte',
    paeseSlug: 'spagna',
    ordine: 7,
    nome: 'Santiago de Compostela e il Camino del Norte',
    tipologia: ['cammino', 'cultura', 'natura'],
    giorniConsigliati: '2-3 giorni per Santiago, più il tempo scelto per il tratto di Cammino',
    visitataPersonalmente: true,
    miaEsperienza:
      "È stata l'ultima tappa del mio viaggio in auto con amici nel nord della Spagna: dalle Asturie alla Galizia seguendo la costa del Camino del Norte, fino a Santiago, dove il viaggio si è chiuso.",
    introduzione:
      'La meta finale di tutti i Cammini di Santiago: la Cattedrale custodisce, secondo la tradizione, le reliquie dell\'apostolo Giacomo. Il Camino del Norte è la variante costiera che da Irún attraversa Paesi Baschi, Cantabria, Asturie e Galizia per circa 825-865 km. È meno battuto del Cammino Francese e passa per i paesaggi più vari della Spagna del Nord: scogliere atlantiche, spiagge, montagne e alla fine la Galizia verde e piovosa.',
    percheAndarci:
      'Anche pochi giorni sul Camino del Norte, per esempio lungo la costa cantabrica o asturiana, mostrano il Nord spagnolo vero, lontano dal caldo e dalla folla del sud. E Santiago de Compostela, alla fine, ha un\'atmosfera d\'arrivo che nessun\'altra città spagnola ha.',
    cosaVedere: [
      'La Cattedrale di Santiago de Compostela, con il Pórtico da Gloria romanico e il botafumeiro, l\'enorme turibolo che oscilla lungo la navata nelle messe principali',
      'La Praza do Obradoiro, la piazza davanti alla facciata barocca della Cattedrale, punto d\'arrivo simbolico di tutti i Cammini',
      'Il centro storico di Santiago, patrimonio UNESCO, con una delle università più antiche di Spagna',
      'Lungo il Camino del Norte: San Sebastián e Bilbao (vedi le schede dedicate), Santander e Santillana del Mar in Cantabria, la Costa Verde asturiana intorno a Llanes e Gijón',
      'Il Museo delle Peregrinazioni a Santiago, per contestualizzare la storia del Cammino prima o dopo la visita alla Cattedrale',
    ],
    cosaFare: [
      'Camminare un tratto del Camino del Norte, anche di pochi giorni: la costa fra San Sebastián e Bilbao e quella asturiana intorno a Llanes sono fra i tratti più belli',
      'Assistere a una messa del pellegrino a mezzogiorno nella Cattedrale di Santiago, quando in certe occasioni oscilla il botafumeiro',
      'Ritirare la Compostela, il certificato di pellegrinaggio, all\'Ufficio del Pellegrino, se si sono percorsi almeno gli ultimi 100 km a piedi (o 200 in bici)',
    ],
    doveDormire:
      'A Santiago, il centro storico intorno alla Cattedrale. Lungo il Cammino la scelta tradizionale sono gli albergues (ostelli per pellegrini, spesso con letti a castello e prezzi molto bassi); chi vuole più comodità trova pensiones e piccoli hotel nei paesi della costa.',
    doveMangiare: 'In Galizia si mangiano il pulpo á feira (polpo bollito con paprika e olio, servito su un piatto di legno) e i frutti di mare; lungo la costa cantabrica e asturiana, il pescato del giorno e la fabada asturiana (stufato di fagioli, chorizo e morcilla).',
    comeArrivare: 'Aeroporto di Santiago-Rosalía de Castro, ben collegato con l\'Europa. Per iniziare un tratto del Camino del Norte: Irún (confine francese) o una qualsiasi delle tappe intermedie, raggiungibili in treno o bus dalle rispettive città (San Sebastián, Bilbao, Santander).',
    comeSpostarsi: 'A piedi lungo il Cammino, seguendo le frecce gialle e le conchiglie che segnano il percorso; a Santiago, il centro storico è interamente pedonale.',
    periodoMigliore:
      'maggio-settembre per camminare; il periodo più asciutto va da giugno a inizio settembre. Il Cammino si può fare tutto l\'anno, ma in inverno e a fine autunno piove spesso e le giornate sono corte.',
    costi: 'Cattedrale e complesso museale: il prezzo cambia secondo le sezioni (alcune aree sono gratuite); un albergue lungo il Cammino costa fra 10 e 20€ a notte.',
    erroriDaEvitare: [
      'Sottovalutare dislivello e fondo del Camino del Norte: è più impegnativo e meno attrezzato del Cammino Francese, con tratti di sentiero costiero esposti',
      'Non prenotare l\'albergue nei mesi di punta (giugno-settembre) lungo i tratti più popolari: i posti letto, soprattutto nei paesi piccoli, si esauriscono',
      'Arrivare a Santiago senza le credenziali del pellegrino timbrate lungo il percorso, se si vuole ottenere la Compostela',
    ],
    luoghi: [
      {
        "nome": "Cattedrale di Santiago de Compostela",
        "testo": "Meta dei pellegrini da undici secoli, custodisce secondo la tradizione le reliquie dell'apostolo Giacomo. Dentro ci sono il Pórtico da Gloria romanico, la cripta con l'urna e il botafumeiro, il grande turibolo che oscilla lungo il transetto in alcune celebrazioni. Dalla Praza do Obradoiro si vede la facciata barocca.",
        "come": "A piedi dal centro storico, interamente pedonale. Musei, Pórtico da Gloria e visite guidate si prenotano a parte sul sito della cattedrale.",
        "quando": "Dal 16 ottobre 2026, fino a nuovo avviso, le messe del pellegrino si celebrano nella chiesa di San Agustín (9:30, 12 e 19:30) per i lavori nella cappella maggiore; quella delle 7:30 resta in cattedrale. Il botafumeiro non oscilla a ogni messa: controllare il sito della cattedrale.",
        "tempo": "1-2 ore",
        "url": "https://www.catedraldesantiago.es/",
        "consiglio": "Arrivare con anticipo alla messa del pellegrino per sedersi; dopo, restare in Praza do Obradoiro a guardare gli arrivi."
      },
      {
        "nome": "Ufficio del Pellegrino",
        "testo": "Qui si ritira la Compostela, il certificato di pellegrinaggio, presentando la credenziale timbrata. Servono almeno gli ultimi 100 km continui a piedi o a cavallo, o 200 km in bici; chi fa solo il minimo deve timbrare all'inizio e alla fine di ogni tappa, con la data.",
        "come": "A pochi minuti a piedi dalla cattedrale, in Rúa das Carretas 33. Si prende un numero con codice QR che mostra la coda in tempo reale.",
        "quando": "Tutti i giorni 10-19, chiuso il 25 dicembre e il 1 gennaio. Nei periodi di punta il ritiro nello stesso giorno non è garantito.",
        "tempo": "30 minuti-2 ore, secondo la coda",
        "url": "https://oficinadelperegrino.com/",
        "consiglio": "Andare nel primo pomeriggio o presto al mattino, quando la fila è più corta."
      },
      {
        "nome": "Centro storico e Mercado de Abastos",
        "testo": "Il centro storico, patrimonio UNESCO, è fatto di vie in pietra, portici e piazze come la Quintana e Praza das Praterías. Il Mercado de Abastos, il mercato coperto, ha banchi di pesce, formaggi e polpo.",
        "come": "A piedi. Il mercato è a pochi minuti dalla cattedrale.",
        "quando": "Il mercato al mattino. La pioggia è frequente: portare un impermeabile.",
        "tempo": "2-3 ore",
        "consiglio": "Mangiare il polpo a feira nei locali accanto al mercato, che cucinano su richiesta."
      },
      {
        "nome": "Camino del Norte: tratto San Sebastián-Bilbao",
        "testo": "Il Camino del Norte segue la costa cantabrica da Irún a Santiago. Il tratto basco ha salite continue tra scogliere e boschi, con tappe lunghe. Chi ha pochi giorni può percorrere una sola tappa, per esempio San Sebastián-Zarautz.",
        "come": "Partenza dalle stazioni di San Sebastián o Bilbao. I segnavia sono frecce gialle e conchiglie. Il bus o il treno servono per rientrare.",
        "quando": "Da maggio a settembre. In inverno piove molto e le giornate sono corte.",
        "tempo": "Una tappa 5-7 ore a piedi",
        "consiglio": "Partire presto e portare acqua; i punti di rifornimento sono rari fuori dai paesi."
      },
      {
        "nome": "Finisterre e Muxía",
        "testo": "Dopo Santiago molti pellegrini proseguono a piedi per alcuni giorni fino a Finisterre, sulla costa atlantica, e a Muxía. Per i romani Finisterre era la «fine del mondo»: oggi c'è un faro sulla scogliera.",
        "come": "A piedi da Santiago in alcuni giorni, oppure in bus dalla stazione di Santiago.",
        "quando": "Estate. Al tramonto al faro si ferma chi cammina.",
        "tempo": "una giornata da Santiago in bus, alcuni giorni a piedi",
        "consiglio": "Verificare gli orari del bus nel periodo scelto, perché cambiano per stagione."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Praza do Obradoiro e Pórtico da Gloria.",
          "Tarda mattinata: Cattedrale e cripta.",
          "Tarda mattinata: Messa del pellegrino (fino a nuovo avviso nella chiesa di San Agustín).",
          "Primo pomeriggio: Pranzo con polpo e pimientos de Padrón.",
          "Pomeriggio: Ufficio del Pellegrino se si è arrivati a piedi.",
          "Tardo pomeriggio: Passeggiata nel centro storico e nel parco dell'Alameda."
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come il programma di un giorno.",
          "Giorno 2, mattina: Mercado de Abastos e Praza das Praterías.",
          "Giorno 2, pomeriggio: Museo delle Peregrinazioni o visita ai tetti della cattedrale.",
          "Giorno 2, sera: cena con prodotti galiziani."
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1 e 2: come sopra.",
          "Giorno 3: gita in bus a Finisterre e Muxía, ritorno la sera."
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro storico",
        "perChi": "Chi vuole stare vicino alla cattedrale",
        "testo": "Camere in palazzi di pietra, a due passi da tutto. La sera i pellegrini arrivano in piazza e c'è movimento fino a tardi. I prezzi sono più alti."
      },
      {
        "nome": "Ensanche e dintorni della stazione",
        "perChi": "Chi arriva in treno o bus e cerca costi minori",
        "testo": "A piedi dal centro, ma fuori dalla zona monumentale. Zona più tranquilla, con alberghi e pensioni."
      }
    ],
    sapori: [
      {
        "nome": "Pulpo á feira",
        "testo": "Polpo bollito, tagliato con le forbici, condito con olio, sale e paprika, servito su un piatto di legno."
      },
      {
        "nome": "Empanada gallega",
        "testo": "Torta salata ripiena di tonno, carne o frutti di mare, venduta a fette."
      },
      {
        "nome": "Pimientos de Padrón",
        "testo": "Peperoncini verdi fritti con sale grosso: alcuni sono piccanti."
      },
      {
        "nome": "Tarta de Santiago",
        "testo": "Torta di mandorle con una croce di San Giacomo sulla superficie in zucchero a velo."
      },
      {
        "nome": "Albariño",
        "testo": "Vino bianco della Galizia, secco e profumato, ideale con il pesce."
      }
    ],
    attenzioni: [
      "Pioggia frequente in Galizia in tutte le stagioni: poncho, scarpe impermeabili e cambio di calze.",
      "Albergue nei mesi di punta (giugno-settembre): prenotare con anticipo nei paesi piccoli.",
      "Credenziale del pellegrino: chi percorre solo i 100 km minimi deve timbrarla all'inizio e alla fine di ogni tappa, con la data, per ottenere la Compostela.",
      "Camino del Norte: salite continue e tratti di sentiero costiero esposto. Non sottovalutare il dislivello.",
      "Cattedrale: musei, Pórtico da Gloria e visite guidate si prenotano sul sito ufficiale; da ottobre 2026 ci sono lavori nella cappella maggiore."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['spagna-nord-itinerario'],
    imageAlt: 'La facciata barocca della Cattedrale di Santiago de Compostela sulla Praza do Obradoiro nella luce del pomeriggio',
    immagine: '/images/spagna/santiago-compostela-camino-del-norte.jpg',
  },

  // --- BALEARI ---
  {
    slug: 'mallorca',
    paeseSlug: 'spagna',
    ordine: 8,
    nome: 'Mallorca',
    tipologia: ['isola', 'mare', 'montagna'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "È stata la prima isola del mio giro delle Baleari con amici, otto giorni con il traghetto tra le isole: due giorni tra Palma e la Serra de Tramuntana, con Valldemossa e Sóller.",
    introduzione:
      'La più grande e la più completa delle Baleari. Ha Palma, una capitale vera con una cattedrale gotica sul mare, e la Serra de Tramuntana, la catena montuosa patrimonio UNESCO che corre per 90 km lungo la costa nord-occidentale: la parte verde dell\'isola, che chi viene per le spiagge spesso non vede.',
    percheAndarci:
      'Sulla stessa isola ci sono la vita da capitale mediterranea di Palma e una montagna terrazzata che alle Baleari non ci si aspetta. La Serra de Tramuntana è un paesaggio agricolo modellato dall\'uomo per secoli, e per questo nel 2011 l\'UNESCO l\'ha dichiarata patrimonio culturale.',
    cosaVedere: [
      'La Cattedrale di Palma (La Seu), gotica, direttamente sul mare, con gli interventi di Antoni Gaudí all\'interno',
      'Il centro storico di Palma, con il Palazzo dell\'Almudaina e i vicoli del Barrio Gótico',
      'La Serra de Tramuntana: Valldemossa, il paese di pietra dove soggiornarono Chopin e George Sand, e Sóller, raggiungibile con un trenino d\'epoca del primo Novecento',
      'Il Port de Sóller e la costa frastagliata sotto la Serra',
      'Le spiagge della costa est, più regolari e meno scenografiche di quelle del nord ma più adatte alle famiglie',
    ],
    cosaFare: [
      'Il trenino storico Palma-Sóller (in funzione dal 1912) attraverso la Serra de Tramuntana',
      'Un tratto del GR221, il «Sentiero della Pietra a Secco» che attraversa la Serra: basta una tappa di poche ore per capire il paesaggio terrazzato',
      'Perdersi nel centro storico di Palma la sera, quando il caldo cala e i vicoli si animano',
    ],
    confronti: [
      {
        titolo: 'Quale isola delle Baleari scegliere (o come dividerle tra più giorni)',
        introduzione:
          'Mallorca, Ibiza e Minorca hanno carattere, ritmo e servizi molto diversi. Prima di prenotare conviene sapere cosa le distingue.',
        opzioni: [
          {
            nome: 'Mallorca',
            sintesi: 'La più grande e la più completa: una vera capitale (Palma), montagna (Serra de Tramuntana) e più tipi di costa diversi sulla stessa isola.',
            pro: [
              'Ha città, montagna e spiagge di più tipi, senza bisogno di spostarsi altrove',
              'La rete di trasporti interna (treni, bus) è la più sviluppata delle tre isole',
              'Meno legata di Ibiza all\'immagine della vita notturna',
            ],
            contro: [
              'La costa più turistica (Playa de Palma, Magaluf) è sovraffollata e poco rappresentativa del resto dell\'isola',
              'In alta stagione Palma e la Serra de Tramuntana possono essere molto affollate',
            ],
            perChi: 'Chi vuole un\'unica isola che copra più interessi diversi, dalla città alla montagna al mare.',
          },
          {
            nome: 'Ibiza',
            sintesi: 'Famosa per la vita notturna del sud (Ibiza Town, Playa d\'en Bossa, San Antonio), ma con un nord rurale e tranquillo (Sant Joan, Santa Gertrudis) completamente diverso.',
            pro: [
              'Per chi la cerca, la vita notturna resta la più famosa e varia d\'Europa',
              'Il nord dell\'isola ha calette isolate, mercati artigianali e un\'aria bohémien che pochi associano a Ibiza',
              'Dalt Vila, la città vecchia fortificata, è patrimonio UNESCO e merita anche a chi non cerca la vita notturna',
            ],
            contro: [
              'La fama di isola dei club scoraggia, a torto, chi cerca altro',
              'Prezzi tra i più alti delle tre isole in alta stagione, soprattutto nel sud',
            ],
            perChi: 'Chi vuole sia la vita notturna sia, volendo, un\'isola rurale e quasi silenziosa a pochi km di distanza.',
          },
          {
            nome: 'Minorca',
            sintesi: 'La più piccola e la più tranquilla delle tre: poco costruita, con spiagge meno affollate e un ritmo più lento per scelta.',
            pro: [
              'Molto meno sviluppata di Mallorca e Ibiza: gran parte dell\'isola è riserva della biosfera UNESCO',
              'Le calette (per esempio Cala Macarelleta) restano tra le meno affollate delle Baleari',
              'Il Camí de Cavalls, l\'antico sentiero costiero che gira intorno all\'isola, è adatto a chi cerca escursioni tranquille',
            ],
            contro: [
              'Vita notturna quasi assente, per chi la cerca',
              'Meno collegamenti diretti e più cara da raggiungere fuori stagione',
            ],
            perChi: 'Chi vuole l\'opposto di Ibiza: mare, natura e silenzio, senza rinunciare alle comodità.',
          },
        ],
        raccomandazione:
          'Con una settimana conviene sceglierne una invece di comprimerle tutte: Mallorca per un\'isola completa, Ibiza se interessano la vita notturna e il nord rurale, Minorca per le Baleari più quiete. Con più tempo, i traghetti frequenti fra Mallorca e le altre due rendono facile combinarne due.',
      },
    ],
    doveDormire: 'Palma per la vita cittadina; Sóller o Port de Sóller per la base ideale nella Serra de Tramuntana.',
    doveMangiare: 'La sobrasada (salume spalmabile di maiale con paprika) e le ensaïmadas (dolce a spirale) sono i prodotti simbolo; nella Serra, i ristoranti di montagna servono piatti a base di agnello e verdure locali.',
    comeArrivare: "Aeroporto di Palma (Son Sant Joan), a una decina di chilometri dalla città, con voli diretti da molte città italiane. Il bus EMT A1 porta al centro e al porto in 15-20 minuti, ogni 15 minuti circa, per circa 5 € in contanti o circa 3 € con carta contactless; il taxi dalla fila ufficiale costa circa 20-25 €. In traghetto si arriva da Barcellona o Valencia in 7-8 ore, o in circa 4 con i traghetti veloci. Dalla stazione intermodale di Plaça d'Espanya partono il treno per Sóller e i bus TIB per tutta l'isola.",
    comeSpostarsi: 'Auto a noleggio consigliata per la Serra de Tramuntana; a Palma i mezzi pubblici bastano; il trenino storico per Sóller è un\'attrazione in sé oltre che un mezzo di trasporto.',
    periodoMigliore: 'maggio-giugno e settembre, con temperature gradevoli e meno folla di luglio-agosto, quando prezzi e afflusso turistico raggiungono il picco.',
    costi: "Cattedrale circa 10 € (circa 25 con le terrazze); treno di Sóller 30 € andata e ritorno, tram per il porto 10 € a tratta; Castell de Bellver 4 € (gratis la domenica); Cuevas del Drach 18,50 € online. In alta stagione il noleggio auto costa molto di più che nel resto dell'anno. Budget indicativo al giorno a persona, con la doppia divisa in due: basso 70-100 €, medio 130-180 €, alto oltre 280 €.",
    erroriDaEvitare: [
      'Limitarsi alla costa turistica di Palma (Playa de Palma, S\'Arenal) senza mai vedere la Serra de Tramuntana: è come andare a Roma e vedere solo l\'aeroporto',
      'Guidare sulle strade a tornanti della Serra senza mettere in conto tempi più lunghi del previsto',
      'Prenotare voli e traghetti per luglio-agosto senza anticipo: è il periodo di massima domanda e i prezzi salgono di conseguenza',
    ],
    luoghi: [
      {
        "nome": "Cattedrale di Palma (La Seu)",
        "testo": "Cattedrale gotica iniziata nel 1229, dopo la conquista di Giacomo I, e finita nel 1601, proprio sul lungomare. Il rosone, di circa 13 metri di diametro, è tra i più grandi rosoni gotici d'Europa. Dentro ci sono il baldacchino di Antoni Gaudí sopra l'altare e la cappella di San Pietro rifatta da Miquel Barceló.",
        "come": "A piedi dal centro di Palma, di fronte al Parc de la Mar. Ingresso dal lato della Plaça de la Seu.",
        "quando": "Gli orari cambiano per stagione e la domenica si celebrano le messe: controllare il calendario sul sito ufficiale. Al mattino la luce passa meglio dal rosone.",
        "tempo": "1-1 ora e mezza",
        "url": "https://catedraldemallorca.org/",
        "consiglio": "Dal Parc de la Mar si ha la vista migliore della facciata riflessa nello specchio d'acqua, meglio prima di entrare.",
        "costo": "circa 10 euro con il museo, circa 25 con la salita alle terrazze (2026)",
        "orari": "Visite dal lunedì al venerdì fino al pomeriggio e il sabato solo la mattina; la domenica chiusa alle visite.",
        "lat": 39.5675,
        "lng": 2.64806
      },
      {
        "nome": "Palma vecchia: Almudaina e vicoli",
        "testo": "Il Palazzo dell'Almudaina, ex fortezza araba poi residenza dei re di Maiorca, si trova accanto alla cattedrale. Intorno si apre il centro storico: patii nascosti, Plaça Major, i bagni arabi e il quartiere di Sa Llotja con i bar sul porto.",
        "come": "Tutto a piedi dalla cattedrale. Il palazzo è gestito dal Patrimonio Nacional e si visita da soli con i pannelli.",
        "quando": "Il palazzo ha un giorno di riposo settimanale e chiude per cerimonie ufficiali: verificare sul sito. I vicoli si godono di più la sera, quando il caldo cala.",
        "tempo": "mezza giornata per palazzo e vicoli",
        "url": "https://www.patrimonionacional.es/",
        "consiglio": "Entrare nei portoni aperti del centro: molti patii settecenteschi si vedono dalla strada.",
        "lat": 39.5675,
        "lng": 2.64722
      },
      {
        "nome": "Valldemossa",
        "testo": "Paese di pietra in una conca della Serra de Tramuntana, noto per la Cartuja dove Chopin e George Sand passarono l'inverno 1838-39. Strade in salita, vasi di fiori alle finestre e la coca de patata, il dolce locale.",
        "come": "Da Palma in auto sulla Ma-1110, oppure con il bus di linea dalla stazione intermodale. Il paese si gira a piedi.",
        "quando": "Arrivare presto o nel tardo pomeriggio: nelle ore centrali arrivano i pullman.",
        "tempo": "2-3 ore",
        "consiglio": "Parcheggiare nei parcheggi a monte e scendere a piedi: le strade del centro sono strette e quasi sempre piene.",
        "lat": 39.71168,
        "lng": 2.62258
      },
      {
        "nome": "Tren de Sóller e Port de Sóller",
        "testo": "Treno d'epoca in legno inaugurato nel 1912: circa 27 chilometri tra montagne e gallerie fino a Sóller. Da lì il tram storico scende al porto, una baia chiusa tra le montagne con lungomare e barche.",
        "come": "Parte dalla stazione di Plaça d'Espanya a Palma. Da Sóller il tram porta al Port de Sóller; il biglietto si compra a bordo.",
        "quando": "Il treno si ferma d'inverno: per la stagione 2026-27 dal 23 novembre 2026 al 1 febbraio 2027. Gli orari variano per stagione, quindi guardare il sito ufficiale. Meglio le corse del mattino.",
        "tempo": "giornata intera con il porto",
        "costo": "30 euro andata e ritorno Palma-Sóller; tram Sóller-Port de Sóller 10 euro a tratta (sito ufficiale, 2026)",
        "url": "https://trendesoller.com/",
        "consiglio": "Comprare il biglietto in anticipo online in alta stagione e sedersi sul lato destro all'andata per i panorami sulla valle.",
        "orari": "Partenze da Palma concentrate la mattina; servizio sospeso dal 23 novembre 2026 al 1 febbraio 2027.",
        "lat": 39.61204,
        "lng": 2.66002
      },
      {
        "nome": "Sa Calobra e Torrent de Pareis",
        "testo": "Calanca di ciottoli alla foce del Torrent de Pareis, un canyon stretto tra pareti altissime. La strada Ma-2141 che scende a Sa Calobra ha un tornante ad anello ed è molto fotografata. Una galleria porta dal molo alla spiaggetta e al canyon.",
        "come": "In auto sulla Ma-2141 dalla Ma-10, una lunga discesa tutta curve, oppure in barca da Port de Sóller.",
        "quando": "Il canyon si visita in autunno e primavera con più calma. Il Torrent de Pareis è chiuso o sconsigliato con pioggia e piena: guardare il meteo.",
        "tempo": "2-3 ore",
        "url": "https://www.caib.es/",
        "consiglio": "La barca evita la strada e il parcheggio, che in estate è il vero ostacolo: partire dal porto la mattina.",
        "lat": 39.85097,
        "lng": 2.8
      },
      {
        "nome": "Cap de Formentor e Pollença",
        "testo": "La penisola più a nord dell'isola, con scogliere a picco sul mare e un faro in fondo a una lunga strada panoramica sopra Port de Pollença. Lungo la strada c'è il Mirador des Colomer. Pollença ha una piazza centrale con bar e la scalinata di 365 gradini del Calvari.",
        "come": "Da Port de Pollença in auto sulla Ma-2210 verso il faro, nei limiti delle regole stagionali indicate sotto. Da Palma a Pollença si va in auto o in bus.",
        "quando": "Al tramonto per la luce sul faro. Dal 15 maggio al 18 ottobre (date 2026), dalle 10 alle 22, la strada per il faro è chiusa alle auto private: si sale con il bus TIB 334 da Alcúdia e Port de Pollença o in bici. Al parcheggio della spiaggia di Formentor si arriva in auto fino a esaurimento posti.",
        "tempo": "mezza giornata",
        "url": "https://www.dgt.es/conoce-el-estado-del-trafico/rutas-de-interes/trafico-acceso-faro-de-formentor/",
        "consiglio": "Salire al Mirador des Colomer all'apertura o all'ora del tramonto: a metà giornata si arriva in colonna.",
        "lat": 39.96137,
        "lng": 3.21229
      },
      {
        "nome": "Cala Mondragó e Es Trenc",
        "testo": "Due spiagge del sud-est. Cala Mondragó è dentro un parco naturale, con pineta e due calette di sabbia. Es Trenc è un lungo arenile bianco senza edifici, con dune e saline alle spalle.",
        "come": "In auto da Palma: Cala Mondragó è vicino a Santanyí, Es Trenc vicino a Campos. Parcheggi a pagamento, che si riempiono presto.",
        "quando": "Giugno e settembre. In luglio e agosto arrivare prima delle 10.",
        "tempo": "mezza giornata",
        "consiglio": "Da Mondragó si può camminare lungo la costa fino a Cala Santanyí se si vuole lasciare la spiaggia affollata.",
        "lat": 39.34934,
        "lng": 3.18905
      },
      {
        "nome": "Un tratto del GR221 in Tramuntana",
        "testo": "Il GR221, la «Ruta de Pedra en Sec», attraversa a tappe tutta la Serra de Tramuntana. Una tappa sola basta: terrazze di ulivi, muretti a secco, rifugi e sentieri antichi. Una tratta semplice è Port de Sóller-Deià lungo la costa.",
        "come": "Si parte da Port de Sóller o da Deià, serviti da bus di linea dal centro di Palma. Il sentiero è segnato con bandierine.",
        "quando": "Da ottobre a maggio. In estate si parte all'alba: il caldo e l'assenza d'ombra pesano.",
        "tempo": "3-5 ore per tappa",
        "url": "https://www.caib.es/",
        "consiglio": "Portare acqua e scarpe da trekking: i tratti in pietra bagnata scivolano. Alcuni sentieri attraversano proprietà private e hanno orari di passaggio."
      },
      {
        "nome": "Castell de Bellver",
        "testo": "Un castello gotico del Trecento a pianta circolare, costruito per i re di Maiorca su una collina boscosa sopra Palma. Dentro c'è il museo di storia della città; dalla terrazza sul tetto si vede tutta la baia, con la cattedrale e il porto.",
        "come": "Con bus urbano o taxi fino al parcheggio, oppure a piedi in salita nel parco dal quartiere di El Terreno. La biglietteria è nel centro visitatori del parcheggio.",
        "quando": "Il tardo pomeriggio, con la luce sulla baia; la domenica l'ingresso è gratis ma c'è più gente.",
        "tempo": "1-1 ora e mezza",
        "costo": "4 euro, gratis la domenica (sito ufficiale)",
        "orari": "Lunedì chiuso. Ottobre-marzo martedì-sabato 10-18, aprile-settembre 10-19; domenica e festivi 10-15. Chiuso 1 gennaio, Pasqua, 1 maggio e 25 dicembre.",
        "lat": 39.56375,
        "lng": 2.61934,
        "url": "https://castelldebellver.palma.es/"
      },
      {
        "nome": "Cuevas del Drach",
        "testo": "Grotte a Porto Cristo, sulla costa est, con un percorso di circa 1.200 metri tra stalattiti e laghetti fino al lago Martel, dove si ascolta un breve concerto di musica classica dal vivo.",
        "come": "In auto da Palma verso est fino a Porto Cristo, o con le escursioni organizzate. Ingressi a orario fisso, con biglietto online.",
        "quando": "Il primo turno della mattina o fuori stagione: d'estate i gruppi sono numerosi.",
        "tempo": "1 ora la visita, mezza giornata con il viaggio",
        "costo": "18,50 euro online, 19,50 euro in biglietteria (sito ufficiale)",
        "orari": "Visite a orario fisso tutti i giorni; dal 1 novembre al 15 marzo alle 10:30, 12, 14 e 15:30. Chiuso il 25 dicembre e il 1 gennaio.",
        "lat": 39.53574,
        "lng": 3.33062,
        "url": "https://www.cuevasdeldrach.com/",
        "consiglio": "Comprare online: costa meno e si sceglie l'orario. A novembre 2026 il sito indica sospeso il giro in barca sul lago; la visita e il concerto restano."
      },
      {
        "nome": "Deià",
        "testo": "Un paese di pietra su una collina tra gli ulivi e il mare, nella Serra de Tramuntana, dove visse ed è sepolto il poeta Robert Graves. Sotto il paese c'è la Cala de Deià, una caletta di ciottoli con le barche dei pescatori.",
        "come": "Sulla Ma-10 tra Valldemossa e Sóller, in auto o con il bus di linea. Alla cala si scende a piedi, in discesa tra gli ulivi.",
        "quando": "La mattina o al tramonto; d'estate il parcheggio è il problema principale.",
        "tempo": "2-3 ore con la cala",
        "lat": 39.74774,
        "lng": 2.64834
      },
      {
        "nome": "Fornalutx",
        "testo": "Un villaggio di pietra sopra la valle di Sóller, tutto scalinate, tetti di coppi e agrumeti terrazzati. È uno dei più fotografati della Tramuntana e si gira in poco tempo.",
        "come": "In auto da Sóller in pochi minuti, oppure a piedi da Sóller passando per Biniaraix.",
        "quando": "Il tardo pomeriggio, dopo la partenza dei pullman.",
        "tempo": "1 ora",
        "lat": 39.78268,
        "lng": 2.74092
      },
      {
        "nome": "Alcúdia e Pollentia",
        "testo": "Una cittadina del nord chiusa dalle mura medievali, con porte e camminamenti. Appena fuori ci sono le rovine di Pollentia, la città romana dell'isola, con il teatro e le case.",
        "come": "In auto o con i bus TIB da Palma; il centro storico si gira a piedi.",
        "quando": "La mattina o il tardo pomeriggio, evitando le ore calde sulle mura.",
        "tempo": "mezza giornata",
        "lat": 39.8525,
        "lng": 3.11917
      },
      {
        "nome": "Santuari de Lluc",
        "testo": "Il santuario nel cuore della Serra de Tramuntana, meta di pellegrinaggio dal Medioevo, con la statua della Madonna nera e il coro dei bambini, i Blauets. Intorno partono sentieri tra lecci e rocce calcaree.",
        "come": "In auto sulla Ma-10 o con i bus TIB. Sta sulla strada per Sa Calobra.",
        "quando": "Come sosta sulla strada per Sa Calobra o Pollença.",
        "tempo": "1 ora",
        "lat": 39.82292,
        "lng": 2.88444
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Cattedrale e Almudaina a piedi",
          "Pranzo nei vicoli di Sa Llotja",
          "Pomeriggio: Castell de Bellver in bus o taxi, o passeggiata sul Passeig Marítim",
          "Sera: tapas nel centro storico"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Palma, cattedrale e vicoli, tramonto dal Castell de Bellver",
          "Giorno 2: treno storico per Sóller, tram fino al porto, pranzo di pesce",
          "Rientro in treno nel tardo pomeriggio, oppure sosta a Fornalutx in auto"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Palma",
          "Giorno 2: Valldemossa al mattino, Deià e Sóller nel pomeriggio, in auto",
          "Giorno 3: Sa Calobra in barca da Port de Sóller, oppure Lluc e Formentor in auto, tramonto a Pollença"
        ]
      },
      {
        "titolo": "5 giorni",
        "tappe": [
          "Giorni 1-3: come sopra",
          "Giorno 4: Alcúdia e Pollentia, spiaggia nella baia di Alcúdia",
          "Giorno 5: Cuevas del Drach la mattina, poi Cala Mondragó o Es Trenc"
        ]
      }
    ],
    zone: [
      {
        "nome": "Palma centro storico",
        "perChi": "chi vuole città, ristoranti e niente auto",
        "testo": "Tutto a piedi, vita serale animata. Pro: bar, cattedrale, mercati. Contro: rumore nei vicoli, camere piccole, parcheggio quasi impossibile.",
        "fascia": "130-250 €"
      },
      {
        "nome": "Sóller e Port de Sóller",
        "perChi": "chi vuole montagna e mare insieme",
        "testo": "Valle di agrumeti con treno e tram. Pro: calma la sera, escursioni a piedi. Contro: lontano da Palma (si passa dal tunnel), strade strette.",
        "fascia": "120-220 €"
      },
      {
        "nome": "Pollença e Alcúdia",
        "perChi": "famiglie e spiagge",
        "testo": "Nord dell'isola: spiagge ampie, Formentor vicino. Pro: servizi per bambini. Contro: l'estate è piena e senza auto non si va lontano.",
        "fascia": "100-200 €"
      },
      {
        "nome": "Sud-est: Santanyí e dintorni",
        "perChi": "chi cerca calette e paesi tranquilli",
        "testo": "Paesi di pietra dorata e calette tra le pinete, vicino a Cala Mondragó e alle Cuevas del Drach. Pro: mare e ritmo lento. Contro: lontano dalla Tramuntana, serve l'auto.",
        "fascia": "110-200 €"
      }
    ],
    gite: [
      {
        "nome": "Minorca",
        "distanza": "1-2 ore e mezza di traghetto da Alcúdia",
        "come": "Traghetti Alcúdia-Ciutadella con Baleària e Trasmed; d'estate prenotare in anticipo.",
        "testo": "Ciutadella con il porto e il centro storico, e le calette del sud. In giornata si fa partendo dal nord di Mallorca; con una notte è più comoda."
      },
      {
        "nome": "Parco nazionale di Cabrera",
        "distanza": "circa un'ora d'auto da Palma, poi la barca",
        "come": "Barche autorizzate da Colònia de Sant Jordi, nel sud dell'isola, da prenotare.",
        "testo": "Un piccolo arcipelago protetto con un castello sul porto, acqua limpidissima e quasi nessuna costruzione. La giornata include una sosta per il bagno."
      },
      {
        "nome": "Ibiza",
        "distanza": "2 ore e un quarto-4 ore e un quarto di traghetto da Palma",
        "come": "Traghetti Baleària e Trasmed dal porto di Palma.",
        "testo": "Dalt Vila, la città vecchia fortificata patrimonio UNESCO. In giornata solo con il traghetto veloce; meglio come tappa successiva del viaggio."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Mallorca?",
        "risposta": "Tre o quattro giorni bastano per Palma, la Serra de Tramuntana e una spiaggia. Con una settimana si aggiungono il nord di Pollença e Alcúdia e il sud-est delle calette."
      },
      {
        "domanda": "Serve l'auto a Mallorca?",
        "risposta": "Per la Tramuntana, Formentor e le calette sì. Palma, Sóller e il porto si raggiungono bene anche con treno, tram e bus."
      },
      {
        "domanda": "Meglio dormire a Palma o a Sóller?",
        "risposta": "Palma per chi vuole città, ristoranti e muoversi con i mezzi; Sóller o Port de Sóller per chi vuole camminare nella Tramuntana e serate tranquille."
      },
      {
        "domanda": "Si può salire al faro di Formentor in auto?",
        "risposta": "Dal 15 maggio al 18 ottobre 2026, dalle 10 alle 22, la strada per il faro è chiusa alle auto private: si sale con il bus TIB 334 o in bici. Fuori da quegli orari e da quel periodo si sale in auto."
      },
      {
        "domanda": "Il treno di Sóller funziona tutto l'anno?",
        "risposta": "No: per la stagione 2026-27 si ferma dal 23 novembre 2026 al 1 febbraio 2027. Andata e ritorno da Palma costa 30 euro, il tram per il porto 10 euro a tratta."
      },
      {
        "domanda": "Qual è il periodo migliore per Mallorca?",
        "risposta": "Maggio-giugno e settembre, con mare caldo e meno gente. Ottobre e aprile vanno bene per camminare; luglio e agosto sono i mesi più cari e affollati."
      }
    ],
    sapori: [
      {
        "nome": "Ensaimada",
        "testo": "Dolce di pasta lievitata a spirale, spolverato di zucchero a velo. Si compra nei forni storici di Palma, anche vuota o con crema di zucca."
      },
      {
        "nome": "Sobrassada",
        "testo": "Salume di maiale spalmabile, rosso di paprika, IGP. Sul pane con un filo di miele."
      },
      {
        "nome": "Tumbet",
        "testo": "Strati di patate, melanzane e peperoni fritti con salsa di pomodoro. Piatto estivo tradizionale."
      },
      {
        "nome": "Coca de patata",
        "testo": "Dolce soffice di patate, tipico di Valldemossa."
      },
      {
        "nome": "Arròs brut",
        "testo": "Riso brodoso con carne e funghi. Si trova nei ristoranti dell'interno, d'inverno."
      },
      {
        "nome": "Herbes de Mallorca",
        "testo": "Liquore di erbe digestivo, servito dopo i pasti."
      }
    ],
    attenzioni: [
      "Il centro di Palma ha zone a traffico limitato con telecamere: l'hotel segnala la targa, altrimenti arriva la multa. Parcheggiare nei garage pubblici.",
      "Sulle strade della Tramuntana (Ma-10, Ma-2141) ci sono molte curve e ciclisti, specie in primavera: guidare piano e non sorpassare nei tornanti.",
      "Le spiagge più famose in estate si riempiono in mattinata e i parcheggi sono a pagamento: partire presto o prendere il bus.",
      "Tassa turistica (ecotasa) di alcuni euro a notte, da pagare in hotel e variabile per categoria.",
      "Zone di Playa de Palma e Magaluf hanno divieti di alcol per strada e di balconing, con multe.",
      "Borseggi sulle ramblas del centro e nelle code alla cattedrale: tenere zaini davanti."
    ],
    esperienzeSlugs: ['serra-tramuntana-trekking'],
    tripSlugs: ['baleari-itinerario'],
    imageAlt: 'Le case di pietra di Valldemossa e il campanile di Sant Bartomeu tra le montagne boscose della Serra de Tramuntana, Mallorca',
    immagine: '/images/spagna/mallorca.jpg',
  },
  {
    slug: 'ibiza',
    paeseSlug: 'spagna',
    ordine: 9,
    nome: 'Ibiza',
    tipologia: ['isola', 'mare', 'vita notturna'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono arrivato in traghetto da Mallorca durante il giro delle Baleari con amici: tre giorni tra Ibiza Town, Dalt Vila e le calette e i mercati del nord dell'isola.",
    introduzione:
      'Ibiza sono due isole in una, e ridurla a capitale mondiale della vita notturna è la semplificazione più comune. Il sud (Ibiza Town, Playa d\'en Bossa, San Antonio) è il centro di una scena clubbing senza pari in Europa; il nord (Sant Joan de Labritja, Santa Gertrudis) è rurale, tranquillo e quasi hippie, con calette isolate e mercati artigianali.',
    percheAndarci:
      'A seconda di dove ci si ferma, si ha l\'Ibiza dei club fino all\'alba o quella delle calette silenziose e del mercato biologico la domenica mattina. Il nord, che le guide spesso trascurano, è la parte che mostra meglio il carattere dell\'isola.',
    cosaVedere: [
      'Dalt Vila, la città alta fortificata di Ibiza Town, patrimonio UNESCO, con le mura rinascimentali e vicoli medievali',
      'Le grandi discoteche del sud (Pacha, Amnesia, Ushuaïa), simbolo mondiale della cultura clubbing dagli anni \'80-\'90 a oggi',
      'Il nord rurale intorno a Sant Joan de Labritja: calette come Cala Xarraca e Cala Sant Vicent, e Benirràs, famosa per i tamburi al tramonto della domenica',
      'Santa Gertrudis de Fruitera, il paese al centro dell\'isola con caffè, gallerie d\'arte e un\'atmosfera rilassata',
      'Il mercato hippie di Las Dalias (a Sant Carles) e il mercato del sabato di Sant Joan, fra i meno commerciali dell\'isola',
    ],
    cosaFare: [
      'Un giro tra le calette del nord (Cala Xarraca, Cala Sant Vicent) come contrappunto silenzioso alla scena del sud',
      'Il tramonto ai tamburi di Benirràs, la domenica, un rituale informale che dura da decenni',
      'Un giro nei mercati artigianali del nord (Las Dalias, Sant Joan) invece che nei negozi turistici del porto',
      'Per chi cerca la vita notturna, una serata in uno dei club storici, prenotando con largo anticipo in alta stagione',
    ],
    doveDormire: 'Ibiza Town/Dalt Vila per la vita cittadina e la vicinanza ai club del sud; Santa Gertrudis o Sant Joan per la versione tranquilla dell\'isola, con spostamenti in auto per raggiungere le spiagge.',
    doveMangiare: 'Il bullit de peix (zuppa di pesce con riso a parte) è il piatto tradizionale dell\'isola; nel nord, i piccoli ristoranti di campagna intorno a Santa Gertrudis e San Juan hanno una cucina più semplice e meno cara di quella del porto.',
    comeArrivare:
      "Aeroporto di Ibiza (IBZ), a sud di Eivissa, con voli diretti stagionali dall'Italia in alta stagione. Il bus per Eivissa (ex linea 10, dal 2026 rinumerata nelle linee AERO) costa circa 3,50 € e impiega circa 20 minuti; il taxi circa 20-25 €, con lunghe code d'estate. Traghetti Baleària e Trasmed da Palma (2h15-4h15 secondo la nave) e da Barcellona o Valencia; per Formentera circa 30 minuti dal porto di Eivissa. D'estate diffidare dei passaggi abusivi offerti fuori dagli arrivi.",
    comeSpostarsi: 'Auto o scooter a noleggio quasi indispensabili per raggiungere il nord dell\'isola e le calette più isolate; bus locali collegano i centri principali ma con frequenze limitate fuori stagione.',
    periodoMigliore:
      'giugno e settembre, il compromesso migliore fra clima e folla. Luglio-agosto è il picco di prezzi e vita notturna, con il sud pieno; il nord resta abbastanza tranquillo anche in alta stagione.',
    costi:
      "Ingresso ai grandi club spesso oltre 60-100 € in alta stagione; Cova de Can Marçà 15 €; ecotasa di alcuni euro a notte pagata in hotel. Gli alloggi sono tra i più cari d'Europa in luglio e agosto. Budget indicativo al giorno a persona in estate, con la doppia divisa in due e l'auto a noleggio: basso 90-120 €, medio 160-250 €, alto oltre 350 €; a maggio, giugno e settembre si spende meno.",
    erroriDaEvitare: [
      'Ridurre Ibiza alla vita notturna senza mai vedere il nord: è la parte che sorprende di più chi arriva con l\'idea dell\'isola dei club',
      'Prenotare gli ingressi ai grandi club last minute in alta stagione: i migliori eventi si esauriscono con giorni o settimane di anticipo',
      'Muoversi solo a piedi o affidarsi solo ai bus: senza un mezzo proprio buona parte del nord e delle calette più belle resta fuori portata',
    ],
    luoghi: [
      {
        "nome": "Dalt Vila",
        "testo": "La città alta di Ibiza Town, circondata da mura rinascimentali del Cinquecento, patrimonio UNESCO. Dentro ci sono vicoli ripidi, la cattedrale, il museo di arte contemporanea e belvedere sul porto e su Formentera.",
        "come": "A piedi dal porto, salendo da Portal de ses Taules. Il percorso è tutto in salita su ciottoli.",
        "quando": "Al tramonto per la luce sulle mura. Di giorno in estate c'è poca ombra.",
        "tempo": "2-3 ore",
        "url": "https://www.eivissa.es/",
        "consiglio": "Salire presto, poi scendere per cena nel quartiere di Sa Penya, sotto le mura.",
        "costo": "gratuito",
        "lat": 38.90661,
        "lng": 1.43629
      },
      {
        "nome": "Cattedrale di Ibiza",
        "testo": "Santa Maria de les Neus sta in cima a Dalt Vila, nel punto più alto della città. Nasce gotica nel Trecento sul luogo della moschea e fu rifatta in forme barocche nel Settecento. Dalla spianata davanti si vedono il porto, la costa e, nelle giornate limpide, Formentera.",
        "come": "A piedi, salendo per Dalt Vila dal Portal de ses Taules: è l'ultima tappa della salita.",
        "quando": "Al mattino, prima del caldo; fuori stagione gli orari sono ridotti.",
        "tempo": "30 minuti",
        "lat": 38.9067,
        "lng": 1.4367
      },
      {
        "nome": "Es Vedrà e Cala d'Hort",
        "testo": "Es Vedrà è un isolotto alto 413 metri davanti alla costa sud-ovest, circondato da leggende. Si vede al meglio da Cala d'Hort, una spiaggia di sabbia e ciottoli, e dalla Torre des Savinar.",
        "come": "In auto da Ibiza Town. Cala d'Hort ha un parcheggio piccolo, che nel pomeriggio d'estate è pieno.",
        "quando": "Il tramonto è il momento più richiesto: arrivare almeno un'ora prima.",
        "tempo": "2-3 ore",
        "consiglio": "Cenare in uno dei locali sulla spiaggia e restare dopo il tramonto: la folla se ne va.",
        "costo": "gratuito",
        "lat": 38.89026,
        "lng": 1.22429
      },
      {
        "nome": "Cala Comte",
        "testo": "Una spiaggia del ovest con scogli bassi e acqua trasparente, famosa per il tramonto con le isolette di fronte.",
        "come": "In auto da Sant Antoni, oppure con il bus stagionale.",
        "quando": "Il tramonto in estate è affollato. Meglio la mattina o a settembre.",
        "tempo": "mezza giornata",
        "consiglio": "Per una cena sul mare, scegliere i ristoranti sulle rocce, ma prenotare.",
        "costo": "gratuito",
        "lat": 38.96257,
        "lng": 1.22012
      },
      {
        "nome": "Benirràs e tamburi della domenica",
        "testo": "Una baia nel nord, chiusa da scogliere. Dal tramonto della domenica un gruppo di suonatori di tamburi si riunisce sulla sabbia da decenni, con bancarelle e gente che balla.",
        "come": "In auto da Sant Joan de Labritja. La strada è stretta nell'ultimo tratto.",
        "quando": "La domenica al tramonto da maggio a ottobre. Gli altri giorni la baia è tranquilla.",
        "tempo": "una serata",
        "consiglio": "Arrivare con largo anticipo per trovare parcheggio e un posto sulla sabbia.",
        "costo": "gratuito",
        "lat": 39.08944,
        "lng": 1.45392
      },
      {
        "nome": "Ses Salines",
        "testo": "Parco naturale di saline e dune nel sud, con la spiaggia di Ses Salines e quella di Es Cavallet. Le saline sono ancora in uso e sono patrimonio UNESCO insieme a Dalt Vila e alla posidonia.",
        "come": "In auto da Ibiza Town. Parcheggi a pagamento, con limiti d'accesso in estate.",
        "quando": "Mattina, prima del caldo. Es Cavallet ha un tratto naturista.",
        "tempo": "mezza giornata",
        "url": "https://www.caib.es/",
        "consiglio": "Non entrare nelle zone delle saline e delle dune segnate come protette.",
        "costo": "spiaggia libera; parcheggi a pagamento in estate",
        "lat": 38.84107,
        "lng": 1.39186
      },
      {
        "nome": "Cala Xarraca e Cala Sant Vicent",
        "testo": "Due calette del nord. Xarraca è una baia verde con acqua calma; Sant Vicent è rocciosa e più selvaggia. Poca costruzione intorno.",
        "come": "In auto da Sant Joan de Labritja; parcheggi piccoli.",
        "quando": "Mattina presto o fine pomeriggio.",
        "tempo": "mezza giornata",
        "consiglio": "Portare maschera e boccaglio: l'acqua è limpida e il fondale roccioso.",
        "costo": "gratuito",
        "lat": 39.0983,
        "lng": 1.4975
      },
      {
        "nome": "Sa Penya e La Marina",
        "testo": "I quartieri bassi tra il porto e le mura: La Marina con le case imbiancate, il vecchio mercato e le vie dei negozi, Sa Penya stretta sulla roccia, storico quartiere di pescatori. La sera è qui che si cena prima di salire in Dalt Vila o di andare nei club.",
        "come": "A piedi dal porto di Eivissa.",
        "quando": "Dal tardo pomeriggio. In estate è affollata fino a notte fonda.",
        "tempo": "1-2 ore",
        "costo": "gratuito",
        "lat": 38.90873,
        "lng": 1.43856,
        "consiglio": "Chi dorme qui chieda una camera che non dia sulle vie dei locali."
      },
      {
        "nome": "MACE, Museu d'Art Contemporani",
        "testo": "Il museo d'arte contemporanea di Eivissa, dentro Dalt Vila vicino al Portal de ses Taules, in un edificio militare del Settecento. Raccoglie gli artisti che hanno lavorato sull'isola dagli anni Cinquanta e, sotto il pavimento di vetro, i resti archeologici trovati durante il restauro.",
        "come": "A piedi, subito dopo il Portal de ses Taules.",
        "quando": "Nelle ore calde, come pausa dalla salita.",
        "tempo": "1 ora",
        "lat": 38.90836,
        "lng": 1.43631
      },
      {
        "nome": "Santa Eulària e Puig de Missa",
        "testo": "Il paese della costa est, più tranquillo e familiare. Sopra il centro sale il Puig de Missa, una collina con la chiesa bianca fortificata del Cinquecento, costruita per difendersi dai pirati, e case contadine intorno.",
        "come": "In auto o in bus da Eivissa. Al Puig de Missa si sale a piedi dal centro in 15 minuti.",
        "quando": "Al tramonto, con la luce sulla chiesa e sulla valle del fiume.",
        "tempo": "1-2 ore",
        "costo": "gratuito",
        "lat": 38.98407,
        "lng": 1.52932
      },
      {
        "nome": "Mercato di Las Dalias",
        "testo": "Il mercato hippie più noto dell'isola, a Sant Carles de Peralta, nel giardino di un vecchio locale sulla strada. Bancarelle di artigianato, vestiti, gioielli e cibo: meno commerciale dei mercati del sud.",
        "come": "In auto sulla strada da Santa Eulària a Sant Carles; parcheggio lungo la strada.",
        "quando": "Il sabato mattina, appena apre.",
        "tempo": "1-2 ore",
        "orari": "Mercato hippie il sabato 10-17 e la domenica 11-17 (calendario di novembre 2026); d'estate il programma cambia, controllare sul sito.",
        "lat": 39.0283,
        "lng": 1.55786,
        "url": "https://lasdalias.es/"
      },
      {
        "nome": "Santa Gertrudis de Fruitera",
        "testo": "Il paesino al centro dell'isola, con la chiesa bianca, una piazza pedonale di bar e ristoranti e qualche galleria d'arte. È la base di chi vuole l'Ibiza di campagna.",
        "come": "In auto da Eivissa in un quarto d'ora; si gira a piedi.",
        "quando": "A pranzo o a cena, quando la piazza si riempie.",
        "tempo": "1 ora",
        "costo": "gratuito",
        "lat": 38.9986,
        "lng": 1.43012
      },
      {
        "nome": "Cova de Can Marçà",
        "testo": "Una grotta sopra la baia di Port de Sant Miquel, usata un tempo dai contrabbandieri. Si visita con una guida, tra stalattiti, colori di luce e una cascata artificiale, e dall'uscita si vede il mare dall'alto.",
        "come": "In auto per Sant Miquel de Balansat fino a Port de Sant Miquel. Visite guidate di circa 40 minuti, ogni 45 minuti, senza obbligo di prenotare.",
        "quando": "In una giornata nuvolosa o nelle ore calde.",
        "tempo": "1 ora",
        "costo": "15 € adulti",
        "orari": "Aperta tutto l'anno: 10:30-19:30 da maggio a ottobre, 10:30-17:30 da novembre ad aprile.",
        "lat": 39.08337,
        "lng": 1.44186,
        "url": "https://www.covadecanmarsa.com/"
      },
      {
        "nome": "Sant Antoni e il tramonto a Caló des Moro",
        "testo": "Sant Antoni è la città della costa ovest, con la baia dei tramonti e la passeggiata dei bar musicali. La piccola cala di Caló des Moro, tra gli scogli, è il punto dove la gente si raccoglie a guardare il sole che scende sul mare.",
        "come": "In auto o in bus da Eivissa; poi a piedi lungo la passeggiata a nord del porto.",
        "quando": "Al tramonto, arrivando un'ora prima per trovare posto.",
        "tempo": "2 ore",
        "costo": "gratuito sulla passeggiata; i bar hanno consumazione obbligatoria",
        "lat": 38.98522,
        "lng": 1.29667
      },
      {
        "nome": "Talamanca",
        "testo": "La spiaggia più comoda da Eivissa, in una baia a est del porto, con sabbia e acqua bassa. Non è la più bella dell'isola, ma ci si arriva senza auto.",
        "come": "A piedi lungo il porto da Eivissa, o in pochi minuti di taxi.",
        "quando": "Pomeriggio, dopo la mattina in Dalt Vila.",
        "tempo": "mezza giornata",
        "costo": "gratuito",
        "lat": 38.9163,
        "lng": 1.4539
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Dalt Vila dal Portal de ses Taules, MACE e Cattedrale in cima",
          "Pranzo: La Marina, sotto le mura",
          "Pomeriggio: Ses Salines o Talamanca se non si ha l'auto",
          "Sera: tramonto a Cala Comte o a Caló des Moro, poi cena a Sa Penya"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come il programma di un giorno",
          "Giorno 2, mattina: nord in auto, Cala Xarraca e Cala Sant Vicent, oppure il mercato di Las Dalias se è sabato",
          "Giorno 2, pomeriggio: Cova de Can Marçà e pranzo tardo a Santa Gertrudis",
          "Giorno 2, sera: Benirràs al tramonto, con i tamburi se è domenica"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1 e 2: come sopra",
          "Giorno 3, mattina: Santa Eulària e il Puig de Missa",
          "Giorno 3, pomeriggio: Cala d'Hort e la Torre des Savinar davanti a Es Vedrà",
          "Giorno 3, sera: tramonto su Es Vedrà e cena sulla spiaggia, oppure una notte in uno dei club storici prenotata online"
        ]
      }
    ],
    zone: [
      {
        "nome": "Ibiza Town",
        "perChi": "chi vuole servizi e non guidare",
        "testo": "Porto, ristoranti e bus per le spiagge del sud. Rumore la notte e prezzi alti in estate.",
        "fascia": "180-400 €"
      },
      {
        "nome": "Sant Antoni",
        "perChi": "chi vuole mare e vita serale più economica",
        "testo": "Baia con tramonti, locali e collegamenti. Zone molto turistiche e notturne.",
        "fascia": "120-280 €"
      },
      {
        "nome": "Nord: Santa Gertrudis, Sant Joan",
        "perChi": "chi cerca silenzio",
        "testo": "Colline verdi, ristoranti e calette. Serve l'auto per spostarsi, i bus sono pochi.",
        "fascia": "150-350 €"
      },
      {
        "nome": "Santa Eulària des Riu",
        "perChi": "famiglie e chi vuole un paese tranquillo",
        "testo": "Lungomare, spiaggia cittadina e ristoranti, lontano dai club. Bus per Eivissa e posizione comoda per il nord-est e Las Dalias.",
        "fascia": "150-300 €"
      }
    ],
    gite: [
      {
        "nome": "Formentera",
        "distanza": "circa 30 minuti in traghetto",
        "come": "Traghetti veloci frequenti dal porto di Eivissa a La Savina; sull'isola si noleggiano bici elettriche, scooter o auto.",
        "testo": "La più piccola delle Baleari abitate, piatta, con le spiagge di Ses Illetes e Llevant nel parco naturale e acqua chiarissima. Una giornata basta per il nord dell'isola e il faro di Cap de Barbaria."
      },
      {
        "nome": "Palma di Mallorca",
        "distanza": "2h15-4h15 in traghetto",
        "come": "Baleària e Trasmed da Eivissa a Palma; le navi veloci impiegano circa 2 ore e un quarto.",
        "testo": "La cattedrale gotica sul mare con gli interventi di Gaudí, il quartiere antico e il Passeig del Born. Più adatta come tappa successiva del viaggio che come gita di andata e ritorno."
      }
    ],
    sapori: [
      {
        "nome": "Bullit de peix",
        "testo": "Zuppa di pesce con riso a parte, piatto tradizionale dell'isola."
      },
      {
        "nome": "Flaó",
        "testo": "Dolce di formaggio fresco e menta, simile a una cheesecake."
      },
      {
        "nome": "Sofrit pagès",
        "testo": "Stufato di carne, patate e salsiccia con spezie, tipico di campagna."
      },
      {
        "nome": "Hierbas ibicencas",
        "testo": "Liquore di erbe aromatiche dolce, da fine pasto."
      },
      {
        "nome": "Ensalada payesa",
        "testo": "Insalata di pomodori, peperoni e pesce secco o salsiccia."
      }
    ],
    attenzioni: [
      "Biglietti per i club venduti da persone per strada o sui social possono essere falsi: comprare solo dal sito del locale.",
      "Taxi abusivi vicino agli aeroporti e ai club: usare le fermate ufficiali o app.",
      "In estate molte calette hanno accesso limitato per auto e parcheggi a pagamento che si riempiono in mattinata.",
      "Tassa turistica (ecotasa) di alcuni euro a notte, pagata in hotel.",
      "A Sant Antoni e in altre zone ci sono divieti di alcol per strada e multe per condotte incivili.",
      "Es Vedrà e le scogliere: non scendere dai sentieri segnati, le cadute sono frequenti."
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Ibiza?",
        "risposta": "Tre giorni per Dalt Vila, le spiagge del sud-ovest e il nord con calette e mercati. Con quattro o cinque si aggiunge Formentera in giornata."
      },
      {
        "domanda": "Ibiza va bene anche per chi non va in discoteca?",
        "risposta": "Sì. Il nord, tra Sant Joan, Santa Gertrudis e le calette, è tranquillo anche ad agosto, e la città alta di Dalt Vila è patrimonio UNESCO."
      },
      {
        "domanda": "Dove conviene dormire a Ibiza?",
        "risposta": "A Eivissa per non guidare e stare vicino ai club, a Sant Antoni per tramonti e prezzi un po' più bassi, al nord o a Santa Eulària per il silenzio. In estate una doppia costa raramente meno di 120-150 € a notte."
      },
      {
        "domanda": "Serve l'auto a Ibiza?",
        "risposta": "Per il nord e le calette sì, o almeno uno scooter: i bus collegano i centri principali ma passano poco fuori stagione. Chi resta tra Eivissa, Talamanca e Ses Salines può farne a meno."
      },
      {
        "domanda": "Quando andare a Ibiza?",
        "risposta": "Giugno e settembre sono il compromesso tra mare caldo, club aperti e prezzi meno alti. Luglio e agosto sono il picco di folla e di costi."
      },
      {
        "domanda": "Come si va a Formentera da Ibiza?",
        "risposta": "Con i traghetti veloci dal porto di Eivissa, circa 30 minuti, frequenti tutto il giorno in stagione. Sull'isola ci si muove in bici elettrica, scooter o auto a noleggio."
      }
    ],
    esperienzeSlugs: ['ibiza-nord-calette'],
    tripSlugs: ['baleari-itinerario'],
    imageAlt: 'Le mura e la cattedrale di Dalt Vila sopra le case bianche del porto di Ibiza Town',
    immagine: '/images/spagna/ibiza.jpg',
  },
  {
    slug: 'minorca',
    paeseSlug: 'spagna',
    ordine: 10,
    nome: 'Minorca',
    tipologia: ['isola', 'mare', 'natura'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "È stata l'ultima isola del giro delle Baleari con amici, arrivando in traghetto da Ibiza: tre giorni tra Ciutadella, il Camí de Cavalls e Mahón, dove il viaggio si è chiuso.",
    introduzione:
      'La più piccola e la più tranquilla delle tre isole maggiori delle Baleari. Gran parte del territorio è Riserva della Biosfera UNESCO, dagli anni \'80 si costruisce poco per scelta politica e le calette restano fra le meno affollate dell\'arcipelago.',
    percheAndarci:
      'È l\'isola giusta per chi conosce la fama di Mallorca e Ibiza e cerca il contrario: niente grandi resort né club. Il modo migliore per conoscerla resta il Camí de Cavalls, l\'antico sentiero costiero che le gira tutto intorno.',
    cosaVedere: [
      'Ciutadella, l\'ex capitale, con il porto vecchio e la Cattedrale gotica dentro le mura',
      'Mahón (Maó), la capitale attuale, con uno dei porti naturali più profondi del Mediterraneo',
      'Il Camí de Cavalls, il sentiero costiero di circa 185 km che circonda l\'intera isola, percorribile a tappe',
      'Cala Macarelleta e Cala Turqueta, tra le calette più fotografate e meno sviluppate delle Baleari',
      'I siti megalitici talayotici (taulas e navetas), lasciati da una civiltà preistorica propria dell\'isola, patrimonio UNESCO dal 2023',
    ],
    cosaFare: [
      'Percorrere una o più tappe del Camí de Cavalls, dalle più semplici vicino a Ciutadella a quelle più selvagge della costa nord',
      'Un giro in barca lungo la costa sud per raggiungere le calette non accessibili in auto',
      'Visita a uno dei siti talayotici (per esempio Torre d\'en Galmés, il più esteso dell\'isola)',
    ],
    doveDormire: 'Ciutadella per l\'atmosfera storica e il porto vecchio; Mahón per la capitale e i collegamenti; le zone costiere sud per chi punta soprattutto sulle calette.',
    doveMangiare: 'La caldereta de langosta (zuppa di aragosta, piatto simbolo dell\'isola, non economico) e il formaggio Mahón-Menorca DOP, tra i più noti di Spagna.',
    comeArrivare: 'Aeroporto di Mahón, con voli stagionali diretti dall\'Italia in alta stagione. Traghetto da Mallorca: Alcúdia-Ciutadella (1-2h30) o Palma-Mahón (circa 6h).',
    comeSpostarsi: 'L\'auto a noleggio è quasi indispensabile: i bus collegano i centri principali ma non le calette più isolate, che sono il motivo per venire qui.',
    periodoMigliore: 'giugno e settembre, con temperature piacevoli e meno folla; l\'isola resta più tranquilla di Mallorca e Ibiza anche in piena estate, grazie al minor sviluppo turistico.',
    costi: 'In alta stagione costa in genere un po\' meno di Ibiza; noleggio auto e traghetti sono le voci principali del budget.',
    erroriDaEvitare: [
      'Aspettarsi la vita notturna o i servizi turistici di Ibiza o Mallorca: Minorca ha scelto un\'altra strada',
      'Provare a vedere tutta l\'isola in un solo giorno: le calette migliori richiedono spostamenti su strade secondarie, spesso non asfaltate negli ultimi tratti',
      'Andarci senza auto, contando solo sui bus: gran parte del fascino dell\'isola sta nelle calette raggiungibili solo su strada propria o a piedi',
    ],
    luoghi: [
      {
        "nome": "Ciutadella",
        "testo": "L'ex capitale, con il porto lungo e stretto come una ria, la cattedrale gotica e palazzi nobiliari sotto i portici di Ses Voltes. Sul porto i ristoranti di pesce. La festa di Sant Joan, il 23-24 giugno, riempie la città di cavalli e cavalieri.",
        "come": "Si gira a piedi. Da Maó con il bus di linea o in auto sulla Me-1.",
        "quando": "Il mercato in Plaça del Born il mattino. La sera il porto è il posto dove si cena.",
        "tempo": "mezza giornata",
        "consiglio": "Lasciare l'auto nei parcheggi fuori dal centro: le vie sono strette e in estate piene."
      },
      {
        "nome": "Maó e il suo porto",
        "testo": "La capitale attuale, sopra un porto naturale lungo e profondo, tra i grandi del Mediterraneo. In città passeggiate sul lungomare, il mercato del Claustre del Carme, il Museu de Menorca e la distilleria del gin Xoriguer.",
        "come": "L'aeroporto è vicino. In città si cammina; i battelli fanno il giro del porto.",
        "quando": "Mattina per il mercato, tramonto sul porto.",
        "tempo": "mezza giornata",
        "consiglio": "Assaggiare il gin Xoriguer in distilleria: lo usano per la pomada, la bibita locale al limone."
      },
      {
        "nome": "Camí de Cavalls",
        "testo": "Il sentiero costiero di circa 185 chilometri che gira l'isola in 20 tappe, un tempo usato da cavalli e soldati. Costa, pinete, scogliere e spiagge. Una tappa singola, come Cala Galdana-Cala Macarella, basta per capirlo.",
        "come": "Si parte da diversi punti con parcheggio. Il percorso è segnato; il sito ufficiale ha mappe e tappe.",
        "quando": "Primavera e autunno. In estate l'assenza d'ombra e il caldo pesano.",
        "tempo": "3-6 ore per tappa",
        "url": "https://www.camidecavalls.com/",
        "consiglio": "Portare molta acqua e scegliere tappe corte con una spiaggia come fine: nuotare a metà giornata."
      },
      {
        "nome": "Cala Macarella e Macarelleta",
        "testo": "Due calette vicine sulla costa sud. Macarella è una baia di sabbia bianca e pineta; Macarelleta, più piccola, si raggiunge per un sentiero a piedi dalla prima ed è nudista in parte.",
        "come": "Da Ciutadella in auto fino al parcheggio, poi un tratto a piedi. In alta stagione c'è anche un bus stagionale. Oppure a piedi da Cala Galdana lungo il Camí de Cavalls.",
        "quando": "Mattina presto o tardo pomeriggio. In piena estate il parcheggio si riempie presto.",
        "tempo": "mezza giornata",
        "consiglio": "Arrivare prima degli altri: la mattina presto l'acqua è ferma e trasparente."
      },
      {
        "nome": "Torre d'en Galmés",
        "testo": "Uno dei più grandi insediamenti talayotici delle Baleari, con tre talayot, il recinto della taula e case dell'Età del Bronzo e del Ferro, abitato dal 1400 a.C. circa fino all'epoca romana. Fa parte del sito Menorca Talayotica, patrimonio UNESCO dal 2023.",
        "come": "In auto da Maó o Ciutadella, al centro dell'isola. Si visita da soli, con pannelli. Il sito ha un biglietto d'ingresso.",
        "quando": "Primo mattino o tardo pomeriggio, per il caldo e la luce.",
        "tempo": "1-1 ora e mezza",
        "consiglio": "Combinarla con Cala en Porter o con il Museu de Menorca a Maó."
      },
      {
        "nome": "Naveta des Tudons",
        "testo": "Tomba collettiva a forma di nave rovesciata, costruita in pietra a secco e usata come ossario tra il 1200 e il 750 a.C. circa. È la più notevole tomba megalitica di Minorca e si trova poco lontano dalla strada.",
        "come": "In auto sulla strada Maó-Ciutadella, a pochi chilometri da Ciutadella. Una sosta di mezz'ora.",
        "quando": "Qualsiasi ora; la luce dorata a fine pomeriggio è la migliore.",
        "tempo": "30 minuti",
        "consiglio": "Si può fermare quando si va da una città all'altra: non richiede una deviazione."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Ciutadella e il mercato",
          "Pranzo di pesce sul porto",
          "Pomeriggio: Cala Macarella",
          "Sera: tramonto sul porto"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Ciutadella, Naveta des Tudons, Macarella",
          "Giorno 2: Maó e porto, Torre d'en Galmés, gin Xoriguer"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Ciutadella",
          "Giorno 2: una tappa del Camí de Cavalls e Macarelleta",
          "Giorno 3: Maó, Torre d'en Galmés, Fornells con la caldereta"
        ]
      }
    ],
    zone: [
      {
        "nome": "Ciutadella",
        "perChi": "chi vuole atmosfera storica",
        "testo": "Porto, vicoli e vita serale. Vicina alle calette del sud-ovest. Parcheggio difficile in estate."
      },
      {
        "nome": "Maó",
        "perChi": "chi ha l'aereo o il traghetto",
        "testo": "Più pratica per i collegamenti, meno spiagge in città. Buon punto per il centro e l'est."
      },
      {
        "nome": "Costa sud (Cala Galdana, Son Bou)",
        "perChi": "chi vuole mare",
        "testo": "Resort e spiaggia lunga. Più servizi, meno carattere."
      }
    ],
    sapori: [
      {
        "nome": "Caldereta de langosta",
        "testo": "Zuppa di aragosta, specialità di Fornells, costosa."
      },
      {
        "nome": "Formaggio Mahón-Menorca",
        "testo": "DOP di latte vaccino, da giovane a stagionato."
      },
      {
        "nome": "Gin Xoriguer e pomada",
        "testo": "Il gin dell'isola, mescolato con limonata nella pomada."
      },
      {
        "nome": "Oliaigua",
        "testo": "Zuppa di pomodoro, cipolla e fichi, piatto contadino."
      },
      {
        "nome": "Sobrassada",
        "testo": "Salume di maiale spalmabile, come a Mallorca."
      }
    ],
    attenzioni: [
      "I parcheggi delle calette del sud (Macarella, Turqueta) in alta stagione si riempiono in mattinata e sono a pagamento.",
      "Sul Camí de Cavalls niente ombra e poca acqua: partire presto e non andare nelle ore centrali.",
      "Il noleggio auto va prenotato mesi prima in estate: i prezzi salgono.",
      "Tassa turistica (ecotasa) di alcuni euro a notte, pagata in hotel.",
      "Niente fuochi o campeggio libero: sono vietati e i controlli sono frequenti.",
      "Non calpestare le dune e la posidonia spiaggiata, protette."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['baleari-itinerario'],
    imageAlt: 'La spiaggia di sabbia bianca e l\'acqua turchese di Cala Macarelleta tra le pinete, Minorca',
    immagine: '/images/spagna/minorca.jpg',
  },

  // --- CANARIE ---
  {
    slug: 'tenerife',
    paeseSlug: 'spagna',
    ordine: 11,
    nome: 'Tenerife',
    tipologia: ['isola', 'vulcano', 'natura'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "È stata la prima isola dei miei nove giorni alle Canarie con amici, con l'auto a noleggio: tre giorni tra Puerto de la Cruz e la costa nord, il Parco Nazionale del Teide e il Parco Rurale di Anaga.",
    introduzione:
      'La più grande delle Canarie. Qui c\'è il Teide, il vulcano più alto di Spagna (3.715 metri) e, misurato dalla base sul fondale oceanico, la terza struttura vulcanica più alta del mondo. Il Parco Nazionale del Teide, patrimonio UNESCO, è un paesaggio lunare di colate di lava e formazioni rocciose che non si trovano altrove. All\'estremo nord il Parco Rurale di Anaga è una foresta laurifoglia sopravvissuta dall\'era terziaria, riserva della biosfera dal 2015.',
    percheAndarci:
      'Per il Teide, il punto più alto della Spagna e, grazie al cielo limpido in quota, uno dei migliori osservatori astronomici al mondo. E per il contrasto con Anaga, a poche decine di km, dove la nebbia degli alisei alimenta una foresta primordiale coperta di muschio e licheni.',
    cosaVedere: [
      'Il Parco Nazionale del Teide, con la funivia che sale fino a 3.555 metri e il paesaggio lunare di Las Cañadas, la grande caldera che lo circonda',
      'Il Parco Rurale di Anaga, riserva della biosfera UNESCO, con sentieri tra la foresta laurifoglia e villaggi isolati come Taganana',
      'La Laguna, l\'antica capitale dell\'isola, patrimonio UNESCO per il suo impianto urbanistico rinascimentale non fortificato',
      'Puerto de la Cruz e i suoi giardini botanici sulla costa nord, più verde e meno sviluppata turisticamente della costa sud',
      'Los Gigantes, le alte falesie a picco sull\'Atlantico, sulla costa ovest',
    ],
    cosaFare: [
      'Prenotare per tempo il biglietto della funivia del Teide e, separatamente, il permesso gratuito per l\'ultimo tratto a piedi fino alla vetta (vedi la scheda esperienza dedicata)',
      'Un\'escursione nel Parco Rurale di Anaga, per esempio da Cruz del Carmen a Taganana',
      'Osservare le stelle: Tenerife è uno dei posti migliori al mondo, grazie alla Legge del Cielo che protegge l\'isola dall\'inquinamento luminoso',
    ],
    doveDormire: 'Puerto de la Cruz per la costa nord, più verde e meno turistica; Costa Adeje o Los Cristianos per la costa sud, più soleggiata e turistica, comoda per chi punta sul mare.',
    doveMangiare: 'Le papas arrugadas (patate piccole bollite in acqua molto salata) con mojo rojo e mojo verde (salse piccanti, l\'una a base di peperone, l\'altra di coriandolo o prezzemolo) sono il piatto simbolo di tutte le Canarie; il gofio, farina tostata di cereali di origine guanche, compare in mille varianti.',
    comeArrivare:
      "Due aeroporti: Tenerife Sur (TFS), dove arriva la maggior parte dei voli dall'Italia, e Tenerife Norte (TFN), vicino a La Laguna, usato soprattutto per i voli interni. Le guaguas TITSA servono entrambi (biglietto a bordo o carta Ten+); la linea 343 va dal Sud al Nord e prosegue per Puerto de la Cruz, circa 10 €. In auto si va dal Nord a Puerto de la Cruz in circa 30 minuti, dal Sud in circa un'ora e un quarto. L'auto a noleggio ritirata in aeroporto resta la scelta più pratica per il Teide, Anaga e Masca.",
    comeSpostarsi: 'Auto a noleggio consigliata per raggiungere il Teide e Anaga; tram tra Santa Cruz e La Laguna; bus (guaguas) capillari ma con tempi lunghi verso le zone di montagna.',
    periodoMigliore:
      'tutto l\'anno, col clima mite e costante (16-21°C anche a gennaio): per questo le Canarie sono la meta spagnola giusta in inverno, quando il resto d\'Europa è al freddo. In quota, al Teide, fa più freddo e d\'inverno la neve non è rara.',
    costi:
      "Funivia del Teide 43 € andata e ritorno per i non residenti (2026); permesso per la vetta circa 15 € per i non residenti dal 2026; sentiero di Masca da 40,66 € più la barca di rientro; Palmetum 6 €, parco del Drago 5 €, Jardín Botánico circa 3 €. Budget indicativo al giorno a persona, con la doppia divisa in due e l'auto a noleggio: basso 60-80 €, medio 110-160 €, alto oltre 230 €.",
    erroriDaEvitare: [
      'Salire al Teide senza aver prenotato il permesso per la vetta con largo anticipo: la funivia da sola non dà accesso all\'ultimo tratto, regolamentato a parte',
      'Sottovalutare il freddo in quota: alla stazione superiore della funivia (3.555 m) le temperature sono molto più basse che sulla costa, in ogni stagione',
      'Concentrarsi solo sulla costa sud e non vedere mai Anaga: è un ecosistema che non esiste altrove sull\'isola',
    ],
    luoghi: [
      {
        "nome": "Teide: funivia e vetta",
        "testo": "La funivia sale da 2.356 a 3.555 metri in meno di otto minuti. L'ultimo tratto fino al cratere, a oltre 3.700 metri, si fa a piedi sul sentiero n. 10 (Telesforo Bravo) e richiede un permesso gratuito a numero chiuso. Oltre i 3.500 metri si sente la quota.",
        "come": "In auto dalla costa, su strade di montagna. La stazione di partenza ha un parcheggio gratuito.",
        "quando": "Prendere la prima corsa per evitare code e vento. Con vento forte la funivia si ferma. Controllare il meteo del giorno.",
        "tempo": "mezza giornata, di più con la salita alla vetta",
        "url": "https://www.volcanoteide.com/",
        "consiglio": "Comprare il biglietto della funivia online con l'orario e chiedere il permesso di vetta con largo anticipo, anche mesi: sono due cose separate.",
        "costo": "funivia andata e ritorno 43 € per i non residenti e 10,75 € per i residenti canari, solo andata 24 € (tariffe 2026); permesso per la vetta circa 15 € per i non residenti dal 2026",
        "orari": "Tutti i giorni dalle 9. Nei mesi con orario corto (gennaio-marzo, metà aprile-giugno, da fine ottobre) ultima salita alle 16 e ultima discesa alle 16:50; a luglio-settembre e a Pasqua ultima salita alle 17:40 e ultima discesa alle 18:30 (calendario 2026). Si ferma con vento forte.",
        "lat": 28.25455,
        "lng": -16.62602
      },
      {
        "nome": "Roques de García e Las Cañadas",
        "testo": "Formazioni di lava alte decine di metri nel cuore della caldera, con il Roque Cinchado come simbolo. Un sentiero circolare facile parte dal parcheggio. Dietro c'è il Teide.",
        "come": "Dal parcheggio ai piedi dei Roques, sulla TF-21, a pochi minuti dalla stazione della funivia. Sentiero segnato.",
        "quando": "Mattina o tramonto. A mezzogiorno il sole è forte e poca ombra.",
        "tempo": "1-2 ore",
        "consiglio": "Portare un giubbotto: in quota il vento è freddo anche in luglio.",
        "costo": "gratuito",
        "lat": 28.23177,
        "lng": -16.63995
      },
      {
        "nome": "Parco Rurale di Anaga",
        "testo": "Montagne del nord-est con foresta di laurisilva nebbiosa, riserva della biosfera. I sentieri attraversano crinali, borghi e paesi isolati come Taganana e Chinamada.",
        "come": "In auto da Santa Cruz o La Laguna fino a Cruz del Carmen, dove c'è il centro visitatori. Alcuni paesi sono serviti da bus di linea.",
        "quando": "Mattina, con nebbia più rara. Con pioggia i sentieri sono fangosi.",
        "tempo": "mezza giornata o giornata",
        "url": "https://www.webtenerife.com/",
        "consiglio": "Fare il Sendero de los Sentidos o da Cruz del Carmen a Taganana con una navetta di ritorno organizzata.",
        "costo": "gratuito, compreso il centro visitatori di Cruz del Carmen; il bosco di El Pijaral solo con permesso gratuito chiesto in anticipo",
        "lat": 28.53101,
        "lng": -16.27989
      },
      {
        "nome": "La Laguna",
        "testo": "Antica capitale dell'isola, patrimonio UNESCO per il suo piano urbano a scacchiera, uno dei primi delle città coloniali. Case con balconi di legno, chiese e cortili.",
        "come": "Con il tram da Santa Cruz o in auto. Si visita a piedi.",
        "quando": "Giorni feriali per la vita degli studenti. La sera ci sono bar e tapas.",
        "tempo": "2-3 ore",
        "consiglio": "Guardare nei patii delle case: molti hanno un giardino aperto al pubblico.",
        "costo": "gratuito",
        "lat": 28.48889,
        "lng": -16.31611
      },
      {
        "nome": "La Orotava",
        "testo": "Il paese sopra Puerto de la Cruz, con il centro storico in salita fatto di case signorili del Seicento e balconi di legno scuro. La Casa de los Balcones, del 1632, ha un patio interno con galleria di legno e un piccolo museo dell'artigianato. Dalla chiesa della Concepción si vede la valle verso il mare.",
        "come": "In auto da Puerto de la Cruz in circa 15 minuti, con parcheggi a pagamento ai margini del centro; poi tutto a piedi. È anche la strada per salire al Teide.",
        "quando": "Al mattino. Per il Corpus Christi, in primavera, le strade e la piazza del municipio si coprono di tappeti di fiori e sabbie vulcaniche.",
        "tempo": "2 ore",
        "lat": 28.38833,
        "lng": -16.52583,
        "consiglio": "Fermarsi qui scendendo dal Teide: la strada della valle passa proprio dal paese."
      },
      {
        "nome": "Puerto de la Cruz",
        "testo": "Il vecchio porto della costa nord, la prima località turistica dell'isola già nell'Ottocento. Ha un centro vero, con Plaza del Charco, il quartiere della Ranilla e il lungomare che arriva al Lago Martiánez, le piscine d'acqua di mare disegnate da César Manrique.",
        "come": "Con le guaguas TITSA dall'aeroporto Nord o da La Laguna, oppure in auto. Il centro si gira a piedi.",
        "quando": "Tardo pomeriggio e sera, sul lungomare e in piazza. Il mare qui è spesso mosso: per nuotare meglio le piscine.",
        "tempo": "mezza giornata",
        "costo": "gratuito il centro; il Lago Martiánez si paga a parte",
        "lat": 28.41653,
        "lng": -16.55055
      },
      {
        "nome": "Masca",
        "testo": "Un villaggio in una gola profonda tra le montagne di Teno, con case di pietra e vista sull'oceano. Il barranco di Masca scende a piedi fino al mare.",
        "come": "Il villaggio si raggiunge dalla TF-436 da Santiago del Teide, una strada stretta e piena di curve. Per il sentiero del barranco si prenota sul sito ufficiale caminobarrancodemasca.com e, da dicembre 2025, al punto di partenza si arriva solo con il bus TITSA 355 da Santiago del Teide; la barca di rientro dalla spiaggia si compra a parte, entro quattro ore dal turno di discesa.",
        "quando": "Mattina, per evitare i pullman. Il sentiero è chiuso con pioggia o allerta.",
        "tempo": "1 ora al villaggio, mezza giornata per il sentiero",
        "consiglio": "Non fare il sentiero con scarpe da passeggio e informarsi prima su come si rientra dal mare: dalla spiaggia non c'è strada.",
        "costo": "accesso al sentiero da 40,66 € (solo discesa, nella fase di prova in corso); gratuito per i residenti a Tenerife; la barca di rientro è a parte",
        "orari": "Sentiero aperto 8:30-18, con turni di discesa ogni 30 minuti dalle 8:30 alle 13; prenotazioni da mercoledì a sabato. Con mare grosso la barca può saltare e si risale a piedi.",
        "lat": 28.30528,
        "lng": -16.84028,
        "url": "https://www.caminobarrancodemasca.com/"
      },
      {
        "nome": "Garachico",
        "testo": "Paese della costa nord distrutto dall'eruzione del 1706 che riempì il porto. Restano le piscine naturali di lava nere (El Caletón), il castello e una piazza con edifici barocchi.",
        "come": "In auto da Puerto de la Cruz o da Santiago del Teide. Si gira a piedi.",
        "quando": "Mattina o dopo il pranzo, con il mare calmo per le piscine.",
        "tempo": "2-3 ore",
        "consiglio": "Pranzo di pesce fresco vicino al molo.",
        "costo": "gratuito, comprese le piscine naturali di El Caletón",
        "lat": 28.37369,
        "lng": -16.76405
      },
      {
        "nome": "Los Gigantes",
        "testo": "Falesie nere altissime che cadono nell'Atlantico, sulla costa ovest. Le barche dal porto portano alla base delle pareti, dove spesso si vedono delfini e globicefali.",
        "come": "In auto da Costa Adeje. Le gite in barca partono da Puerto de Los Gigantes e dai porti vicini.",
        "quando": "Mattina, con mare più calmo. Le barche escono tutto l'anno.",
        "tempo": "2-3 ore con gita in barca",
        "consiglio": "Scegliere operatori con licenza Barco Azul: seguono regole di distanza dagli animali.",
        "lat": 28.29652,
        "lng": -16.85577
      },
      {
        "nome": "Jardín Botánico di Puerto de la Cruz",
        "testo": "Il Jardín de Aclimatación de La Orotava fu fondato nel 1788 per ordine di Carlo III, per abituare al clima europeo le piante tropicali delle colonie prima di portarle in Spagna. Oggi è un giardino compatto con palme, ficus giganti con le radici aeree e piante di tutti i continenti.",
        "come": "A piedi in salita dal centro di Puerto de la Cruz, o con un bus urbano fino alla zona del Botánico.",
        "quando": "Al mattino o in un giorno nuvoloso, frequenti sulla costa nord.",
        "tempo": "1-1 ora e mezza",
        "costo": "circa 3 €",
        "lat": 28.41139,
        "lng": -16.53583
      },
      {
        "nome": "Santa Cruz: Auditorio e Palmetum",
        "testo": "La capitale dell'isola si visita per due cose sul mare. L'Auditorio di Santiago Calatrava, del 2003, con la vela bianca di cemento sul porto. Accanto c'è il Palmetum, un giardino di palme nato sopra una vecchia discarica, con piante da tutte le zone tropicali.",
        "come": "Il tram collega La Laguna a Santa Cruz in circa 40 minuti; dal centro all'Auditorio e al Palmetum si va a piedi lungo il mare.",
        "quando": "Al mattino per il Palmetum, che ha poca ombra; l'Auditorio al tramonto.",
        "tempo": "mezza giornata",
        "costo": "Palmetum 6 € per gli adulti non residenti; l'esterno dell'Auditorio è libero",
        "orari": "Palmetum tutti i giorni 10-18, ultimo ingresso alle 17.",
        "lat": 28.45194,
        "lng": -16.25583,
        "url": "https://www.palmetumtenerife.es/"
      },
      {
        "nome": "Playa de Las Teresitas",
        "testo": "La spiaggia di San Andrés, poco a nord di Santa Cruz, con la sabbia chiara portata dal Sahara negli anni Settanta e una diga frangiflutti che tiene l'acqua calma. Dietro ci sono le montagne di Anaga.",
        "come": "In auto o in guagua da Santa Cruz, una decina di chilometri sulla costa.",
        "quando": "Nei giorni feriali. Il fine settimana arrivano le famiglie della capitale e il parcheggio si riempie.",
        "tempo": "mezza giornata",
        "costo": "gratuito",
        "lat": 28.50861,
        "lng": -16.18583,
        "consiglio": "Si abbina bene alla mattina ad Anaga: dalla TF-12 si scende a San Andrés."
      },
      {
        "nome": "Drago Milenario di Icod de los Vinos",
        "testo": "Il drago (Dracaena draco) più grande e più vecchio delle Canarie, alto più di venti metri, con un'età stimata in diversi secoli. È un albero simbolo dell'isola, e intorno c'è un piccolo giardino di piante endemiche.",
        "come": "In auto sulla strada della costa nord, tra Puerto de la Cruz e Garachico. L'albero si vede anche dalla piazza della chiesa di San Marcos; il parco che lo circonda è a pagamento.",
        "quando": "Di passaggio verso Garachico o Masca.",
        "tempo": "45 minuti",
        "costo": "parco del Drago 5 € per gli adulti (2026)",
        "lat": 28.3666,
        "lng": -16.72222,
        "consiglio": "Chi ha poco tempo lo guarda dalla piazza di San Marcos senza entrare."
      },
      {
        "nome": "Candelaria",
        "testo": "Il paese della basilica della Virgen de Candelaria, patrona delle Canarie. Sulla piazza davanti al mare ci sono le statue di bronzo dei nove menceyes, i re guanche dell'isola prima della conquista.",
        "come": "In auto sull'autostrada TF-1, tra Santa Cruz e il Sud.",
        "quando": "Fuori dai giorni del pellegrinaggio di metà agosto, quando la piazza è piena.",
        "tempo": "1 ora",
        "costo": "ingresso libero alla basilica",
        "lat": 28.35139,
        "lng": -16.36972
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: prima corsa della funivia del Teide alle 9, con il permesso per la vetta se lo si è ottenuto",
          "Tarda mattinata: anello dei Roques de García, con il Teide davanti",
          "Pranzo: scendendo per la valle, a La Orotava, e giro del centro con la Casa de los Balcones",
          "Sera: lungomare e Plaza del Charco a Puerto de la Cruz"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come il programma di un giorno",
          "Giorno 2, mattina: Anaga da Cruz del Carmen, con il Sendero de los Sentidos o un tratto verso Taganana",
          "Giorno 2, pomeriggio: La Laguna a piedi, poi Playa de Las Teresitas o il Palmetum a Santa Cruz",
          "Giorno 2, sera: cena tra i bar degli studenti di La Laguna"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1 e 2: come sopra",
          "Giorno 3, mattina: Masca, il villaggio o la discesa del barranco con turno prenotato (mercoledì-sabato) e barca di rientro",
          "Giorno 3, pomeriggio: gita in barca sotto le falesie di Los Gigantes, oppure Garachico con le piscine di El Caletón",
          "Giorno 3, rientro: sosta al Drago Milenario di Icod de los Vinos sulla strada per Puerto de la Cruz"
        ]
      }
    ],
    zone: [
      {
        "nome": "Puerto de la Cruz",
        "perChi": "chi vuole verde, passeggiate e meno resort",
        "testo": "Nord: più fresco e umido, giardini, vita di città. Il mare è meno adatto per nuotare. Vicino ad Anaga e al Teide.",
        "fascia": "70-140 €"
      },
      {
        "nome": "Costa Adeje e Los Cristianos",
        "perChi": "chi vuole sole e spiagge",
        "testo": "Sud: più asciutto e caldo, tanti hotel, ristoranti, vita notturna. Meno carattere. Vicino all'aeroporto Sur.",
        "fascia": "120-250 €"
      },
      {
        "nome": "La Laguna",
        "perChi": "studenti e chi va ad Anaga",
        "testo": "Città storica e vivace, più fresca e umida. Tram per Santa Cruz.",
        "fascia": "60-120 €"
      },
      {
        "nome": "Santa Cruz de Tenerife",
        "perChi": "chi si muove con i mezzi pubblici",
        "testo": "La capitale, con tram per La Laguna, la stazione delle guaguas per tutta l'isola, il Palmetum e Las Teresitas vicino. Poco turistica, con prezzi da città e non da resort.",
        "fascia": "70-130 €"
      }
    ],
    gite: [
      {
        "nome": "La Gomera",
        "distanza": "circa 1 ora in traghetto",
        "come": "Traghetti da Los Cristianos a San Sebastián de La Gomera; sull'isola serve un'auto a noleggio o un'escursione organizzata.",
        "testo": "L'isola vicina, con il Parco Nazionale di Garajonay, una foresta di laurisilva patrimonio UNESCO, e le valli a terrazze. Si vede in una giornata lunga partendo con la prima nave."
      },
      {
        "nome": "Gran Canaria",
        "distanza": "30-40 minuti in aereo",
        "come": "Voli interni Binter o Canaryfly da Tenerife Norte; all'arrivo si noleggia un'altra auto.",
        "testo": "Las Palmas con Vegueta e la spiaggia di Las Canteras, le dune di Maspalomas e il Roque Nublo. Più adatta a una tappa di qualche giorno che a una gita in giornata."
      },
      {
        "nome": "Masca e Punta de Teno",
        "distanza": "circa 1 ora da Puerto de la Cruz",
        "come": "In auto per Garachico e Buenavista del Norte, oppure in bus TITSA fino a Santiago del Teide per il sentiero.",
        "testo": "L'angolo nord-ovest dell'isola, con il massiccio di Teno, i villaggi in gola e le falesie che scendono sul mare."
      }
    ],
    sapori: [
      {
        "nome": "Papas arrugadas con mojo",
        "testo": "Patate piccole bollite in acqua molto salata, con salsa rossa piccante o verde di coriandolo."
      },
      {
        "nome": "Gofio",
        "testo": "Farina di cereali tostati, di origine guanche, usata in zuppe e dolci."
      },
      {
        "nome": "Ropa vieja",
        "testo": "Stufato di ceci con carne sfilacciata."
      },
      {
        "nome": "Conejo en salmorejo",
        "testo": "Coniglio marinato in aceto, aglio e spezie."
      },
      {
        "nome": "Vino di Tacoronte-Acentejo",
        "testo": "Vini da uve listán negro, coltivati su terreni vulcanici."
      }
    ],
    attenzioni: [
      "Il permesso per la vetta del Teide è gratuito ma serve prenotare, e la funivia da sola non basta: chi non ce l'ha non sale oltre la stazione superiore.",
      "In quota il mal di montagna colpisce anche chi sta bene: salire con calma e non ripartire subito se si ha mal di testa.",
      "Raccogliere rocce o sabbie vulcaniche nel parco è vietato e può costare multe.",
      "Strade di montagna (Masca, Anaga) strette e con curve: nebbia e pioggia possono fermare il traffico.",
      "I bagni in mare con bandiera rossa sono pericolosi, soprattutto a nord con onde forti.",
      "Sole e raggi UV forti anche con vento freddo: crema e cappello."
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Tenerife?",
        "risposta": "Tre o quattro giorni bastano per il Teide, Anaga con La Laguna e la costa nord-ovest tra Masca e Garachico. Con meno di due giorni si vede solo il Teide."
      },
      {
        "domanda": "Meglio dormire al nord o al sud di Tenerife?",
        "risposta": "Al nord, a Puerto de la Cruz o La Laguna, per chi vuole paesi veri ed è più vicino a Teide e Anaga. Al sud, a Costa Adeje o Los Cristianos, per chi vuole sole e spiaggia sicuri."
      },
      {
        "domanda": "Bisogna prenotare la funivia e il permesso per la vetta del Teide?",
        "risposta": "Sono due prenotazioni separate. La funivia costa 43 € andata e ritorno per i non residenti e conviene prenderla online con l'orario; il permesso per la vetta è a numero chiuso, circa 200 persone al giorno, e si chiede fino a 56 giorni prima."
      },
      {
        "domanda": "Serve l'auto a Tenerife?",
        "risposta": "Per il Teide, Anaga e la costa ovest sì: le guaguas arrivano ovunque ma con tempi lunghi in montagna. Tra Santa Cruz e La Laguna basta il tram."
      },
      {
        "domanda": "Si può fare il sentiero di Masca?",
        "risposta": "Sì, con prenotazione obbligatoria sul sito ufficiale, da 40,66 €, solo in discesa nella fase di prova e con la barca di rientro comprata a parte. Si arriva al punto di partenza con il bus TITSA 355 da Santiago del Teide."
      },
      {
        "domanda": "Quando andare a Tenerife?",
        "risposta": "Tutto l'anno: sulla costa si sta tra 16 e 21 gradi anche a gennaio. Sul Teide fa freddo in ogni stagione e d'inverno la neve può chiudere le strade."
      }
    ],
    esperienzeSlugs: ['teide-vetta-permesso'],
    tripSlugs: ['canarie-itinerario'],
    imageAlt: 'Il vulcano Teide visto dalla piana di Ucanca, nella caldera di Las Cañadas, Tenerife',
    immagine: '/images/spagna/tenerife.jpg',
  },
  {
    slug: 'gran-canaria',
    paeseSlug: 'spagna',
    ordine: 12,
    nome: 'Gran Canaria',
    tipologia: ['isola', 'natura', 'mare'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono arrivato in volo da Tenerife durante i nove giorni alle Canarie con amici: tre giorni, con le dune di Maspalomas, il Roque Nublo e il Barranco de Guayadeque.",
    introduzione:
      'La chiamano «un continente in miniatura» per i tanti microclimi e paesaggi chiusi in appena 1.560 km². A sud ci sono le dune quasi sahariane di Maspalomas; al centro le montagne intorno al Roque Nublo, a oltre 1.800 metri, con il clima di una media montagna europea.',
    percheAndarci:
      'In una sola giornata di strada si passa dalle dune desertiche del sud ai pini canari delle montagne centrali: nessun\'altra isola delle Canarie ha paesaggi così diversi in così poco spazio.',
    cosaVedere: [
      'Le Dune di Maspalomas, riserva naturale di dune di sabbia mobile sulla costa sud, con la vicina spiaggia di Playa del Inglés',
      'Las Palmas de Gran Canaria, la capitale, con il centro storico di Vegueta e la casa-museo di Cristoforo Colombo',
      'Il Roque Nublo, la roccia vulcanica simbolo dell\'isola, raggiungibile con un\'escursione di poche ore dal centro dell\'isola',
      'Il Barranco de Guayadeque, un canyon abitato fin dai tempi preispanici, con case-grotta ancora abitate',
      'Puerto de Mogán, il paese-porto sud-occidentale con i canali navigabili che gli valgono il soprannome di "piccola Venezia"',
    ],
    cosaFare: [
      'Un\'escursione al Roque Nublo, con vista che nelle giornate limpide arriva fino al Teide di Tenerife',
      'Camminata tra le dune di Maspalomas al tramonto, quando il caldo cala',
      'Un giro nel Barranco de Guayadeque, tra case-grotta e un ristorante scavato nella roccia',
    ],
    doveDormire: 'Las Palmas per la vita cittadina e la spiaggia urbana di Las Canteras; Maspalomas/Playa del Inglés per chi punta soprattutto sulle dune e sul mare.',
    doveMangiare: 'Come nel resto delle Canarie, papas arrugadas con mojo e gofio; a Las Palmas, il Mercado de Vegueta è il posto giusto per un primo assaggio della cucina locale tra i banchi.',
    comeArrivare: 'Aeroporto di Gran Canaria (LPA), a circa 30 km da Las Palmas e vicino alla costa sud turistica. Volo interno da Tenerife in circa 30-40 minuti, oppure traghetto (circa 1h30-2h30 secondo la tratta).',
    comeSpostarsi: 'Auto a noleggio per raggiungere il centro montuoso; bus efficienti lungo la costa tra Las Palmas e Maspalomas.',
    periodoMigliore: 'tutto l\'anno, con lo stesso clima mite del resto delle Canarie; le montagne del centro, più fresche, sono piacevoli nei mesi in cui la costa è più calda.',
    costi: 'Nel complesso simile al resto delle Canarie, con Las Palmas leggermente più economica delle zone turistiche del sud.',
    erroriDaEvitare: [
      'Restare sulla costa sud senza mai salire verso le montagne del centro: è la parte che fa dell\'isola «un continente in miniatura»',
      'Sottovalutare il sole sulle dune di Maspalomas: poca ombra, conviene evitare le ore centrali della giornata',
    ],
    luoghi: [
      {
        "nome": "Dune di Maspalomas",
        "testo": "Riserva naturale di dune di sabbia mobile sulla costa sud, con una laguna e una palmeria. Il paesaggio cambia con il vento. La spiaggia di Playa del Inglés è subito accanto.",
        "come": "Dal lungomare di Playa del Inglés o dal faro di Maspalomas si entra a piedi nelle dune. Bus dalla costa e da Las Palmas.",
        "quando": "Mattina presto o tramonto: a mezzogiorno il sole è forte e non c'è ombra.",
        "tempo": "2 ore",
        "consiglio": "Restare sui sentieri segnati: le dune sono protette e hanno aree con accesso limitato."
      },
      {
        "nome": "Roque Nublo",
        "testo": "Una roccia vulcanica alta circa 80 metri, con la cima a 1.813 metri sul livello del mare: il simbolo dell'isola. Nei giorni limpidi da lassù si vede il Teide di Tenerife.",
        "come": "In auto fino al parcheggio de La Goleta, poi un sentiero breve ma in salita, andata e ritorno.",
        "quando": "Mattina, prima delle nuvole. Il vento è freddo anche d'estate.",
        "tempo": "1 ora e mezza-2 ore a piedi",
        "url": "https://www.grancanaria.com/",
        "consiglio": "Non uscire dal sentiero segnato: le pareti vicino alla roccia cadono. Portare una felpa."
      },
      {
        "nome": "Vegueta, Las Palmas",
        "testo": "Il quartiere da cui nacque Las Palmas nel 1478, con la Cattedrale di Santa Ana, la Casa de Colón, museo dedicato ai viaggi di Colombo, e il Mercado de Vegueta. Strade coloniali con balconi in legno.",
        "come": "A piedi dal centro di Las Palmas o in bus da Las Canteras. Parcheggio nei garage a pagamento.",
        "quando": "Mattina per il mercato. Orari dei musei sui siti ufficiali, soprattutto la domenica.",
        "tempo": "mezza giornata",
        "consiglio": "Salire sulla torre della cattedrale per il panorama sui tetti."
      },
      {
        "nome": "Playa de Las Canteras",
        "testo": "Tre chilometri di spiaggia urbana di Las Palmas, protetta da una barriera di roccia (La Barra) che la rende una piscina calma. Passeggiata con bar e surf.",
        "come": "Si arriva con i bus urbani o a piedi da Santa Catalina. La spiaggia è in centro.",
        "quando": "Tutto l'anno. La Barra si vede a bassa marea.",
        "tempo": "mezza giornata",
        "consiglio": "Con mare grosso la barriera non protegge: guardare le bandiere."
      },
      {
        "nome": "Barranco de Guayadeque",
        "testo": "Un canyon nel sud-est con case-grotta abitate e antiche abitazioni dei guanche. Alcuni ristoranti sono scavati nella roccia.",
        "come": "In auto da Agüimes sulla GC-103. Si può camminare lungo il fondo.",
        "quando": "Mattina o pranzo. D'inverno nuvole possibili in alto.",
        "tempo": "2-3 ore",
        "consiglio": "Il centro visitatori in alto spiega le grotte. Pranzare in una grotta ristorante, ma prenotare."
      },
      {
        "nome": "Puerto de Mogán",
        "testo": "Villaggio-porto con canali, case bianche con bouganville e una spiaggia. È stato costruito negli anni Ottanta in stile locale e viene chiamato piccola Venezia.",
        "come": "In auto da Maspalomas sulla GC-1 o con il bus. Il centro si gira a piedi.",
        "quando": "Il venerdì c'è il mercato. Il tramonto sul porto è tranquillo.",
        "tempo": "3 ore",
        "consiglio": "Il mercato del venerdì è affollato: arrivare presto."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Vegueta e mercato",
          "Pranzo a Las Canteras",
          "Pomeriggio: Maspalomas al tramonto"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Las Palmas, Vegueta e Las Canteras",
          "Giorno 2: Roque Nublo al mattino, Guayadeque a pranzo, dune al tramonto"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Las Palmas",
          "Giorno 2: montagne centrali, Roque Nublo e Tejeda",
          "Giorno 3: Puerto de Mogán e Maspalomas"
        ]
      }
    ],
    zone: [
      {
        "nome": "Las Palmas (Las Canteras)",
        "perChi": "chi vuole città e spiaggia",
        "testo": "Vita tutto l'anno, ristoranti, bus. Più fresca e ventosa del sud. Rumore la sera."
      },
      {
        "nome": "Maspalomas e Playa del Inglés",
        "perChi": "chi vuole sole garantito",
        "testo": "Costa sud: caldo e secco, grandi hotel, dune vicine. Più turistica e meno autentica."
      },
      {
        "nome": "Puerto de Mogán",
        "perChi": "chi cerca calma",
        "testo": "Piccolo e tranquillo, ma serve l'auto per spostarsi. Meno scelta di locali."
      }
    ],
    sapori: [
      {
        "nome": "Papas arrugadas con mojo",
        "testo": "Patate piccole bollite in acqua salata con salsa piccante rossa o verde."
      },
      {
        "nome": "Sancocho canario",
        "testo": "Pesce salato con patate e mojo, spesso nelle domeniche."
      },
      {
        "nome": "Queso de flor de Guía",
        "testo": "Formaggio a pasta morbida fatto con fiori di cardo, tipico di Guía."
      },
      {
        "nome": "Ron Arehucas",
        "testo": "Rum prodotto sull'isola, anche in versione miele (ron miel)."
      },
      {
        "nome": "Bienmesabe",
        "testo": "Dolce di mandorle, uova e miele, tipico di Tejeda."
      }
    ],
    attenzioni: [
      "Nel sud, a Playa del Inglés e Puerto Rico, promoter di multiproprietà fermano i turisti con gratta e vinci e regali: rifiutare.",
      "Sulle dune restare sui sentieri e portare acqua: ombra assente e sole forte.",
      "Le strade di montagna (GC-60) hanno molte curve e nebbia: guidare piano.",
      "Correnti forti in alcune spiagge del sud e di Las Canteras con mare grosso: rispettare le bandiere.",
      "In estate incendi frequenti nelle montagne: il fuoco è vietato, rispettare le chiusure dei sentieri.",
      "Vegueta e Las Palmas: borseggi leggeri nei mercati e al porto."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['canarie-itinerario'],
    imageAlt: 'Le dune di sabbia di Maspalomas nella luce radente del tramonto, con l\'oceano sullo sfondo, Gran Canaria',
    immagine: '/images/spagna/gran-canaria.jpg',
  },
  {
    slug: 'lanzarote',
    paeseSlug: 'spagna',
    ordine: 13,
    nome: 'Lanzarote',
    tipologia: ['isola', 'vulcano', 'architettura'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "È stata l'ultima isola dei nove giorni alle Canarie con amici: tre giorni, con Timanfaya al mattino, una degustazione di vino nella Geria e le opere di César Manrique.",
    introduzione:
      'L\'isola più vulcanica delle Canarie: fra il 1730 e il 1736 le eruzioni hanno coperto di lava un quarto della superficie e creato il paesaggio di Timanfaya. Dal 1993 tutta l\'isola è Riserva della Biosfera UNESCO, la prima delle Canarie ad averla su tutto il territorio. Architettura e urbanistica portano il segno di un solo artista, César Manrique.',
    percheAndarci:
      'Per Timanfaya, un paesaggio lunare che si visita solo in pullman guidato (sulla lava non si cammina liberamente), con dimostrazioni geotermiche dal vivo. E per vedere come un\'isola intera sia stata modellata da un solo architetto-artista, che vietò i cartelloni pubblicitari e gli edifici più alti delle palme: regole che valgono ancora oggi.',
    cosaVedere: [
      'Il Parco Nazionale di Timanfaya, con la Ruta de los Volcanes in pullman guidato e le dimostrazioni geotermiche all\'Islote del Hilario',
      'I Jameos del Agua, un tubo di lava trasformato da César Manrique in un centro artistico con laghetto naturale e un piccolo crostaceo cieco endemico',
      'Il Mirador del Río, il belvedere di Manrique incastonato nella roccia con vista sull\'isola di La Graciosa',
      'La Cueva de los Verdes, un altro tubo di lava, tra i più lunghi al mondo, visitabile con percorso guidato',
      'Il Jardín de Cactus, l\'ultima opera di Manrique, un giardino terrazzato con centinaia di specie di cactus in un\'antica cava',
      'La regione vinicola de La Geria, dove le viti crescono in piccole buche scavate nella cenere vulcanica e protette da muretti a semicerchio',
    ],
    cosaFare: [
      'La Ruta de los Volcanes a Timanfaya, restando sempre a bordo del pullman per motivi di sicurezza e tutela del suolo ancora caldo pochi metri sotto la superficie',
      'Un giro fra le opere di César Manrique (Jameos del Agua, Mirador del Río, Jardín de Cactus), che da sole spiegano l\'aspetto dell\'isola',
      'Degustazione di vino nella Geria, tra le vigne scavate nella cenere vulcanica',
      'Traghetto per una gita in giornata a La Graciosa, l\'isolotto disabitato di auto a nord di Lanzarote',
    ],
    doveDormire: 'Arrecife, la capitale, per i collegamenti; Playa Blanca a sud o Puerto del Carmen per chi punta sul mare, entrambe con edifici bassi per via delle regole urbanistiche volute da Manrique.',
    doveMangiare: 'Come nel resto delle Canarie, papas arrugadas e mojo. I vini della Geria, in particolare il malvasía volcánico, vengono da vigne che non hanno equivalenti altrove e meritano un assaggio a parte.',
    comeArrivare: 'Aeroporto di Lanzarote (ACE), vicino ad Arrecife. Volo interno dalle altre Canarie o traghetto da Gran Canaria/Fuerteventura.',
    comeSpostarsi: 'L\'auto a noleggio è quasi indispensabile: le distanze fra i luoghi da vedere sono maggiori che sulle altre isole minori e i bus ci sono, ma passano di rado.',
    periodoMigliore: 'tutto l\'anno, con lo stesso clima mite delle altre Canarie; Timanfaya, esposta al sole su terreno scuro, è più comoda da visitare nelle ore più fresche della giornata.',
    costi: 'Timanfaya circa 12-18€ con bus incluso; Jameos del Agua e Cueva de los Verdes circa 10-12€ ciascuno; un biglietto combinato per più siti di Manrique conviene quasi sempre a chi li vede tutti.',
    erroriDaEvitare: [
      'Scendere dal pullman o allontanarsi dai percorsi segnati a Timanfaya: è vietato per sicurezza (il suolo resta caldo a pochi metri di profondità) e per tutela ambientale',
      'Sottovalutare le distanze tra un sito e l\'altro: Lanzarote è più estesa di quanto sembri sulla carta e le strade, per quanto buone, richiedono tempo',
      'Visitare i siti di Manrique come attrazioni separate, senza coglierne il filo comune: sono pensati come un unico progetto che unisce architettura e paesaggio vulcanico',
    ],
    luoghi: [
      {
        "nome": "Parco Nazionale di Timanfaya",
        "testo": "Il paesaggio di lava e cenere nato dalle eruzioni del 1730-1736. Si visita solo in autobus lungo la Ruta de los Volcanes, con commento registrato. All'Islote de Hilario si vedono dimostrazioni geotermiche: l'acqua versata in un tubo diventa vapore e il cibo si cuoce sul calore del suolo.",
        "come": "In auto da Yaiza o Tinajo fino all'ingresso. Il biglietto, che include il giro in bus, si compra online per data e orario. Non si scende dal bus.",
        "quando": "Tutti i giorni 9-15:45 (sito CACT). Scegliere un orario presto: più tardi le code si allungano.",
        "tempo": "un'ora e mezza",
        "costo": "30 euro, gratis fino a 6 anni (CACT, 2026)",
        "url": "https://cactlanzarote.com/",
        "consiglio": "Il giro in dromedario è un'attività a parte con tariffa propria; chi non vuole può saltarlo."
      },
      {
        "nome": "Jameos del Agua",
        "testo": "Un tratto del tubo vulcanico de La Corona sul mare, il primo centro creato da César Manrique, trasformato in giardino, auditorium e laghetto naturale. Nel lago vive un piccolo granchio cieco bianco, il Munidopsis polymorpha.",
        "come": "In auto da Arrecife sulla LZ-1, sulla costa nord. Si visita a piedi in un percorso circolare.",
        "quando": "Tutti i giorni 10-18 (sito CACT); la sera ci sono eventi, da controllare nel calendario. Di giorno meglio presto, per evitare i gruppi.",
        "tempo": "1 ora e mezza",
        "url": "https://cactlanzarote.com/",
        "costo": "da 17 euro, gratis fino a 6 anni (CACT, 2026)",
        "consiglio": "Non gettare monete nel lago: danneggiano i granchi. Il percorso si abbina bene con la Cueva de los Verdes, a pochi minuti."
      },
      {
        "nome": "Cueva de los Verdes",
        "testo": "Un tratto visitabile del tubo vulcanico formato dall'eruzione del vulcano La Corona, con gallerie, formazioni minerali e giochi di luce. Si visita con una guida in circa 50 minuti.",
        "come": "In auto sulla LZ-1 vicino a Haría, poco lontano da Jameos del Agua. Visita guidata a orari fissi, con biglietto online per data e orario.",
        "quando": "Tutti i giorni 9:30-16:45 (sito CACT); dentro la temperatura è costante. Mattina per evitare gruppi.",
        "tempo": "50 minuti",
        "url": "https://cactlanzarote.com/",
        "costo": "17 euro, gratis fino a 6 anni (CACT, 2026)",
        "consiglio": "Il percorso ha scale e un tratto basso: scarpe chiuse con suola grippante."
      },
      {
        "nome": "Mirador del Río",
        "testo": "Belvedere di Manrique costruito dentro la scogliera e rivestito di pietra vulcanica, quasi invisibile da fuori, con vetrate sul braccio di mare El Río e sull'isola di La Graciosa. Interni bianchi e curvi, bar con vista.",
        "come": "In auto dalla LZ-1 passando per Haría, all'estremità nord dell'isola.",
        "quando": "Tutti i giorni 10-17 (sito CACT). Mattina, con meno nuvole; in inverno il cielo è spesso coperto.",
        "tempo": "1 ora",
        "costo": "9 euro, gratis fino a 6 anni (CACT, 2026)",
        "url": "https://cactlanzarote.com/",
        "consiglio": "Prendere un caffè al bar interno davanti alle vetrate: è il modo migliore per stare dentro il panorama senza fretta. Conviene abbinarlo nello stesso giro a Jameos del Agua e alla Cueva de los Verdes."
      },
      {
        "nome": "Jardín de Cactus",
        "testo": "Ultima opera di Manrique: un anfiteatro di terrazze in una vecchia cava, con cactus dei cinque continenti. All'ingresso c'è un mulino a vento.",
        "come": "In auto da Arrecife a Guatiza, a nord. Si visita a piedi, in piano con qualche scala.",
        "quando": "Tutti i giorni 10-17 (sito CACT). Mattina, con luce più morbida.",
        "tempo": "1 ora",
        "url": "https://cactlanzarote.com/",
        "costo": "9 euro, gratis fino a 6 anni (CACT, 2026)",
        "consiglio": "Sulla strada si passa per Guatiza e le sue piantagioni di fico d'India, dove si coltiva la cocciniglia."
      },
      {
        "nome": "La Geria",
        "testo": "Una conca di cenere vulcanica nera dove le viti crescono dentro buche scavate nella terra e protette da muretti a semicerchio. Qui nasce la malvasía volcánica. Si fermano le cantine lungo la LZ-30.",
        "come": "In auto sulla LZ-30 tra Yaiza e Mozaga. Le cantine fanno degustazioni.",
        "quando": "Settembre per la vendemmia; negli altri mesi le cantine aprono di giorno.",
        "tempo": "2 ore",
        "consiglio": "Fermarsi nei punti panoramici e guidare piano: molti turisti si fermano sulla strada."
      },
      {
        "nome": "Playa Papagayo e Los Ajaches",
        "testo": "Calette di sabbia chiara e acqua turchese nel parco naturale di Los Ajaches, a sud. Papagayo è la più nota; le altre (Caleta del Congrio, Playa Mujeres) sono più tranquille.",
        "come": "In auto da Playa Blanca su una strada sterrata; l'ingresso in auto è a pagamento (tassa del Comune di Yaiza). Si cammina dai parcheggi.",
        "quando": "Mattina in estate, con poco vento. Il vento alza la sabbia.",
        "tempo": "mezza giornata",
        "consiglio": "Portare ombrellone, acqua e cibo: nelle calette non ci sono servizi."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Timanfaya",
          "Pranzo a Yaiza",
          "Pomeriggio: La Geria con una cantina",
          "Sera: Playa Blanca"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: sud, Timanfaya e La Geria",
          "Giorno 2: nord, Jardín de Cactus, Jameos del Agua, Cueva de los Verdes, Mirador del Río"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Timanfaya e La Geria",
          "Giorno 2: opere di Manrique e nord",
          "Giorno 3: Papagayo o la gita in barca a La Graciosa"
        ]
      }
    ],
    zone: [
      {
        "nome": "Playa Blanca",
        "perChi": "chi vuole spiagge e calma",
        "testo": "Sud: tranquilla, passeggiata e spiagge ad accesso facile. Vicina a Papagayo e Timanfaya. Poca vita fuori dal lungomare."
      },
      {
        "nome": "Puerto del Carmen",
        "perChi": "chi vuole animazione",
        "testo": "Lungo viale di locali e ristoranti, spiaggia lunga. Più turistico e rumoroso. Vicino all'aeroporto."
      },
      {
        "nome": "Costa Teguise e Arrecife",
        "perChi": "chi vuole servizi e vento per il surf",
        "testo": "Costa Teguise è più moderna, con vento per il windsurf; Arrecife è la capitale, più pratica che bella."
      }
    ],
    sapori: [
      {
        "nome": "Papas arrugadas con mojo",
        "testo": "Patate piccole bollite in acqua molto salata, con mojo rosso o verde."
      },
      {
        "nome": "Pescado fresco",
        "testo": "Vieja, cherne e sama alla griglia, soprattutto nei ristoranti di Playa Blanca e La Santa."
      },
      {
        "nome": "Malvasía volcánica",
        "testo": "Vino bianco di La Geria, secco o dolce."
      },
      {
        "nome": "Queso de cabra",
        "testo": "Formaggio di capra fresco o stagionato, spesso con pimentón."
      },
      {
        "nome": "Cochinilla e fichi d'India",
        "testo": "Colorante rosso naturale e frutti del cactus di Guatiza."
      }
    ],
    attenzioni: [
      "A Timanfaya non si scende dall'autobus né si esce dai percorsi: il suolo è caldo e protetto, e si rischiano multe.",
      "Raccogliere sabbia nera, lapilli o rocce vulcaniche è vietato e prevede multe.",
      "Il vento forte (alisei) alza sabbia e disturba le spiagge del sud; sulle strade del nord ci sono raffiche.",
      "Strade sterrate verso Papagayo: i noleggi spesso escludono i danni al fondo; leggere il contratto.",
      "Il mercato di Teguise la domenica è molto affollato: borseggi.",
      "Sole forte anche con nuvole e vento: crema e cappello."
    ],
    esperienzeSlugs: ['timanfaya-ruta-volcanes'],
    tripSlugs: ['canarie-itinerario'],
    imageAlt: 'I coni vulcanici e le distese di cenere scura del Parco Nazionale di Timanfaya, Lanzarote',
    immagine: '/images/spagna/lanzarote.jpg',
  },
]
