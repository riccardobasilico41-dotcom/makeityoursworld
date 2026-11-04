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
    comeArrivare: 'Aeroporto di San Pablo, a circa 10 km dal centro (bus EA o taxi). Treno AVE ad alta velocità da Madrid in circa 2h30.',
    comeSpostarsi: 'Il centro storico si gira quasi interamente a piedi; per le distanze maggiori, bus urbani e il tram (linea T1) lungo l\'asse centrale.',
    periodoMigliore:
      'marzo-maggio e ottobre-inizio novembre, con temperature gradevoli. Da evitare luglio-agosto: Siviglia è fra le città più calde di Spagna, con medie spesso sopra i 36°C e picchi ben oltre. La Settimana Santa e la Feria de Abril (due settimane dopo Pasqua) portano folla e prezzi alti, ma sono anche i giorni in cui la città vive le sue tradizioni più sentite.',
    costi: 'Cattedrale e Giralda circa 15€; Real Alcázar circa 15,50€ (Appartamenti Reali +5,50€, gratuito la sera con prenotazione in una fascia oraria dedicata); un tablao di flamenco medio 35-45€ a persona.',
    erroriDaEvitare: [
      'Sottovalutare il caldo estivo: da giugno a settembre le ore centrali della giornata vanno evitate per qualsiasi attività all\'aperto',
      'Scegliere il primo tablao pubblicizzato in centro senza controllarne la reputazione: i locali più turistici fanno spettacoli standard e amplificati, lontani dal flamenco dei quartieri',
      'Salire sulla Giralda a metà giornata in alta stagione: le code sotto il sole possono essere lunghe',
    ],
    luoghi: [
      {
        "nome": "Cattedrale di Siviglia e Giralda",
        "testo": "La più grande cattedrale gotica del mondo, costruita dopo la Reconquista sul sito della grande moschea almohade. Dentro c'è il monumento funebre di Cristoforo Colombo. Il campanile, la Giralda, è l'ex minareto: si sale con una rampa e non con le scale, e dalla cima si vedono i tetti e l'Alcázar.",
        "come": "Si trova in pieno centro, a piedi da Santa Cruz o dalla Plaza Nueva. Il biglietto unico comprende cattedrale e Giralda: la visita comincia dalla torre, che ha un controllo di accessi a parte.",
        "quando": "Lunedì-sabato circa 10:45-18:00, domenica da metà pomeriggio fino alle 19:00 (orari 2026, possono cambiare per funzioni religiose: controllare il calendario del sito). Meglio all'apertura.",
        "tempo": "Circa 75 minuti, 2 ore con calma",
        "costo": "13 euro online, 14 euro in biglietteria (2026)",
        "url": "https://www.catedraldesevilla.es/",
        "consiglio": "Comprare il biglietto online la sera prima: in primavera la coda in biglietteria può costare un'ora."
      },
      {
        "nome": "Real Alcázar",
        "testo": "Palazzo reale ancora in uso, nato come fortezza moresca e rifatto nel Trecento dal re Pietro I in stile mudéjar con maestranze di Granada. Il Palacio de Pedro I, il Salón de Embajadores e i patii con le decorazioni in stucco sono il cuore della visita. Dietro ci sono giardini grandi, con fontane e labirinti di siepi.",
        "come": "Entrata dalla Puerta del León, sulla Plaza del Triunfo, di fronte alla cattedrale. Si segue un percorso unico; le audioguide si noleggiano all'ingresso.",
        "quando": "Primo mattino o ultima fascia del pomeriggio per evitare i gruppi. Controllare orari e prezzi sul sito ufficiale prima di andare.",
        "tempo": "2-3 ore",
        "url": "https://www.alcazarsevilla.org/",
        "consiglio": "Prenotare online e scegliere la prima fascia: i patii sono piccoli e si apprezzano solo senza folla. Gli Apartamentos Reales si visitano con una prenotazione a parte."
      },
      {
        "nome": "Barrio de Santa Cruz",
        "testo": "L'ex quartiere ebraico, tra la cattedrale e i giardini di Murillo. Vicoli stretti, balconi di ferro, piazzette con aranci e patii che si intravedono dai cancelli.",
        "come": "A piedi, subito dietro l'Alcázar. Non c'è un percorso: conviene entrare da Calle Judería e uscire dall'altra parte.",
        "quando": "Alle 8-9 di mattina è vuoto e fresco; dopo le 11 si riempie di gruppi.",
        "tempo": "1-2 ore",
        "consiglio": "Tornarci di sera, dopo cena: i vicoli si svuotano e le piazzette sono illuminate."
      },
      {
        "nome": "Plaza de España e Parque de María Luisa",
        "testo": "Semicerchio monumentale costruito per l'Esposizione Iberoamericana del 1929, con un canale, ponti e una serie di nicchie in ceramica una per provincia spagnola. Il parco accanto è il grande polmone verde della città.",
        "come": "A piedi in 20 minuti dalla cattedrale, o con un breve giro in bici lungo il parco. Ingresso libero.",
        "quando": "Al mattino presto o al tramonto. Nelle ore centrali d'estate l'ombra manca.",
        "tempo": "1 ora, più il parco",
        "consiglio": "Chi vuole fare le foto senza gente ci arrivi appena prima delle 9."
      },
      {
        "nome": "Triana",
        "testo": "Il quartiere sull'altra riva del Guadalquivir, storicamente di ceramisti, marinai e gitani. È una delle culle del flamenco. Oggi ha un mercato coperto, botteghe di azulejos e bar sulla Calle Betis, affacciata sul fiume.",
        "come": "Si attraversa il Puente de Isabel II (Puente de Triana) a piedi dal centro, in 10-15 minuti.",
        "quando": "Il mercato lavora soprattutto al mattino. La sera Calle Betis è piena di gente e il fiume dà il panorama sulla Torre del Oro.",
        "tempo": "2-3 ore",
        "consiglio": "Mangiare qui invece che in centro: i bar costano meno e i clienti sono per lo più del quartiere."
      },
      {
        "nome": "Flamenco in un tablao",
        "testo": "Il flamenco si vede meglio in locali piccoli, dove i musicisti suonano a pochi metri dal pubblico e senza amplificazione. Cantante, chitarrista e ballerino si rispondono: è uno spettacolo che si segue anche senza capire le parole.",
        "come": "Si prenota il posto per telefono o sul sito del locale, con qualche giorno di anticipo. Gli spettacoli durano circa un'ora. Il Museo del Baile Flamenco, in Santa Cruz, organizza anche serate.",
        "quando": "Serate quasi ogni giorno, di solito alle 19:00-21:00. Verificare il programma settimanale.",
        "tempo": "1-1 ora e mezza",
        "consiglio": "Sedersi nelle prime file e chiedere al locale se il programma è acustico: evita i grandi spettacoli per gruppi."
      },
      {
        "nome": "Metropol Parasol (Las Setas) e Casa de Pilatos",
        "testo": "Las Setas è una grande struttura in legno con passerella panoramica sopra la Plaza de la Encarnación, aperta nel 2011 sopra un sito archeologico romano. La Casa de Pilatos è un palazzo nobiliare in stile mudéjar e rinascimentale, meno visitato dell'Alcázar ma con patii simili.",
        "come": "A piedi dal centro, circa 10 minuti da Plaza Nueva per Las Setas e 10 dal lato opposto per la Casa de Pilatos.",
        "quando": "Las Setas al tramonto, la Casa de Pilatos al mattino. Controllare orari sui siti dei gestori.",
        "tempo": "1 ora per ciascuna",
        "consiglio": "Se l'Alcázar è esaurito per la data scelta, la Casa de Pilatos è l'alternativa più vicina per vedere un palazzo mudéjar."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "8:30 Cattedrale e Giralda con biglietto online già comprato, prima dei gruppi.",
          "11:00 Real Alcázar, con la prima fascia disponibile o con l'audioguida.",
          "14:00 Pranzo tardo a Santa Cruz o in un bar del centro: tapas e salmorejo.",
          "16:30 Passeggiata a Plaza de España e nel Parque de María Luisa, dove l'ombra aiuta.",
          "20:00 Attraversare il Puente de Triana, cena di tapas sul fiume e, se si riesce, flamenco acustico."
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come il programma di un giorno, senza fretta e con una pausa a metà pomeriggio.",
          "Giorno 2, mattina: Casa de Pilatos e Las Setas, a piedi lungo Calle Sierpes.",
          "Giorno 2, tardo mattino: mercato di Triana e botteghe di ceramica.",
          "Giorno 2, pomeriggio: Torre del Oro e passeggiata sul Guadalquivir.",
          "Giorno 2, sera: spettacolo di flamenco, poi tapeo."
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1 e 2: come sopra.",
          "Giorno 3, mattina: gita a Córdoba in treno AVE, circa 45 minuti, per la Mezquita.",
          "Giorno 3, pomeriggio: ritorno a Siviglia e ultima passeggiata nel parco di María Luisa oppure Santa Cruz di sera."
        ]
      }
    ],
    zone: [
      {
        "nome": "Santa Cruz",
        "perChi": "Chi vuole stare a due passi dai monumenti",
        "testo": "Si esce dall'albergo e si è già sotto la cattedrale. Di giorno è affollato e di sera nei vicoli si sentono i tavoli dei ristoranti per turisti. I prezzi sono i più alti. Ci si muove solo a piedi, e i taxi non entrano nei vicoli."
      },
      {
        "nome": "Triana",
        "perChi": "Chi preferisce un quartiere vivo e meno turistico",
        "testo": "Costa un po' meno e ha più bar frequentati dagli abitanti. Il centro si raggiunge in 10-15 minuti a piedi attraverso il ponte. Il rumore dei locali sul lungofiume la sera può arrivare alle camere più vicine."
      },
      {
        "nome": "Alameda de Hércules e la Macarena",
        "perChi": "Chi viaggia con budget ridotto o ama la vita notturna",
        "testo": "Quartiere più giovane, con bar, locali alternativi e prezzi contenuti. È a 15-20 minuti a piedi dalla cattedrale. Nel fine settimana la piazza è rumorosa fino a tardi."
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
      "Caldo da giugno a settembre: le ore tra le 13 e le 18 si passano al chiuso. Portare acqua e un cappello.",
      "Tablao: diffidare di chi ferma per strada con volantini scontati. Prenotare direttamente con il locale."
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
    comeArrivare: 'Aeroporto Federico García Lorca, circa 15 km dal centro. Treno AVE da Madrid in circa 3h10-3h30; bus diretto da Siviglia (circa 3h) o da Córdoba (circa 2h).',
    comeSpostarsi: 'Centro storico e Albaicín solo a piedi (salite ripide); minibus locali per le zone più alte del Sacromonte e dell\'Albaicín; l\'Alhambra si raggiunge a piedi in salita dal centro o con un bus navetta dedicato.',
    periodoMigliore: 'aprile-giugno e settembre-ottobre. L\'estate è calda ma meno estrema che a Siviglia grazie alla quota (circa 700 metri) e alla vicinanza della Sierra Nevada; l\'inverno è freddo, con la neve visibile sulle vette a pochi km dalla città.',
    costi: 'Alhambra generale circa 19,60€ (i biglietti si esauriscono con settimane, in alta stagione anche mesi, di anticipo); Cattedrale e Capilla Real circa 7€ ciascuna.',
    erroriDaEvitare: [
      'Arrivare a Granada senza aver già prenotato l\'Alhambra: i biglietti si vendono solo online fino a tre mesi prima e in alta stagione (giugno-settembre e vacanze) si esauriscono con settimane di anticipo',
      'Sottovalutare le salite dell\'Albaicín e del Sacromonte: sono ripide e acciottolate, poco comode con bagagli o scarpe non adatte',
      'Prenotare uno spettacolo di flamenco senza informarsi: nel Sacromonte convivono zambras autentiche e format molto turistici allo stesso prezzo',
    ],
    luoghi: [
      {
        "nome": "Alhambra e Generalife",
        "testo": "Cittadella dei sultani nasridi sulla collina della Sabika: i Palazzi Nasridi con stucchi e soffitti a stalattiti, l'Alcazaba militare, il palazzo rinascimentale di Carlo V e i giardini del Generalife. Il Patio de los Leones e la Sala de las Dos Hermanas sono i punti più celebri.",
        "come": "A piedi in salita dal centro (25-30 minuti) o con il minibus urbano. L'ingresso è con biglietto nominale e per i Palazzi Nasridi vale la fascia oraria stampata: arrivare in anticipo, non dopo. Servono documento e conferma.",
        "quando": "Aperta tutti i giorni, con orari diversi tra estate e inverno. I biglietti si comprano solo sul canale ufficiale, fino a tre mesi prima, e in alta stagione si esauriscono con settimane di anticipo. Controllare orari e prezzi sul sito ufficiale.",
        "tempo": "3-4 ore, mezza giornata se si vuole vedere tutto",
        "url": "https://www.alhambra-patronato.es/",
        "consiglio": "Scegliere la fascia del mattino per i Palazzi Nasridi, quando la luce entra dai patii. Mettere in conto che il percorso è tutto all'aperto."
      },
      {
        "nome": "Albaicín",
        "testo": "Il quartiere moresco in collina, patrimonio UNESCO, con vicoli stretti in salita, carmen (case con giardino recintato) e piccole piazze. Da vari punti si vede l'Alhambra di fronte.",
        "come": "A piedi dalla Plaza Nueva, salendo per la Cuesta del Chapiz o per Calle Calderería Nueva. Ci sono anche minibus che fanno il giro del quartiere.",
        "quando": "Mattino presto o fine pomeriggio. Nelle ore centrali d'estate le salite sono pesanti.",
        "tempo": "2-3 ore",
        "consiglio": "Scendere a piedi e salire in minibus: le pendenze si sentono soprattutto in salita."
      },
      {
        "nome": "Mirador de San Nicolás",
        "testo": "Il belvedere più noto di Granada: davanti si apre l'Alhambra e dietro le cime della Sierra Nevada. Al tramonto si riempie di persone, con musicisti e venditori.",
        "come": "Salita a piedi di circa 20 minuti da Plaza Nueva, o con il minibus C31 che parte dal centro. Ingresso libero.",
        "quando": "Al tramonto. In alternativa all'alba, quasi senza gente.",
        "tempo": "30-60 minuti",
        "consiglio": "Chi cerca la stessa vista con meno folla può salire al vicino Mirador de San Cristóbal o al Carmen de los Mártires."
      },
      {
        "nome": "Cattedrale e Capilla Real",
        "testo": "La cattedrale rinascimentale ha una navata alta e chiara, diversa da quelle gotiche. La Capilla Real, accanto, custodisce le tombe dei Re Cattolici, Ferdinando e Isabella, in marmo scolpito.",
        "come": "A piedi dal centro, nel quartiere della cattedrale. Sono due ingressi separati.",
        "quando": "Aperte tutti i giorni, di solito con pausa nelle ore centrali, e la domenica con orari ridotti. Controllare gli orari ufficiali.",
        "tempo": "1 ora per la cattedrale, 30-45 minuti per la Capilla Real",
        "url": "https://catedraldegranada.com/",
        "consiglio": "Si visitano bene dopo l'Alhambra, per capire cosa venne dopo la caduta del regno nasride."
      },
      {
        "nome": "Sacromonte e Museo delle Grotte",
        "testo": "Il quartiere delle case-grotta sulla collina di fronte all'Alhambra, abitato storicamente dalla comunità gitana. Qui è nata la zambra, un flamenco più rituale e di gruppo, che si vede in alcune cuevas.",
        "come": "A piedi lungo il Camino del Sacromonte dal quartiere dell'Albaicín, oppure con il minibus C34. La strada è lunga e in salita.",
        "quando": "Spettacoli di sera. Di giorno si visita il museo e si passeggia per il paesaggio delle grotte.",
        "tempo": "2-3 ore, più la serata per uno spettacolo",
        "consiglio": "Prima di prenotare una zambra, leggere le recensioni recenti: gli spettacoli molto turistici hanno lo stesso prezzo di quelli seri."
      },
      {
        "nome": "Alcaicería e Corral del Carbón",
        "testo": "L'Alcaicería era il vecchio mercato della seta nasride: oggi è un dedalo di botteghe per turisti. Il Corral del Carbón, accanto, è un caravanserraglio del Trecento, tra i pochi edifici civili moreschi rimasti in Spagna.",
        "come": "A piedi, a pochi passi dalla cattedrale. L'ingresso al Corral è libero negli orari di apertura.",
        "quando": "Al mattino, quando le botteghe aprono e le strade sono più libere.",
        "tempo": "30-45 minuti",
        "consiglio": "Il Corral conviene vederlo anche solo per entrare nel cortile con le gallerie in legno."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "8:30 Alhambra con biglietto già prenotato e fascia del mattino per i Palazzi Nasridi.",
          "13:30 Pranzo in centro con tapas gratuite con la bibita.",
          "16:00 Cattedrale e Capilla Real.",
          "18:30 Salita all'Albaicín e Mirador de San Nicolás per il tramonto.",
          "21:00 Giro di bar per tapas in centro o in Calle Navas."
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come il programma di un giorno, con Alhambra e tramonto.",
          "Giorno 2, mattina: Albaicín e Corral del Carbón.",
          "Giorno 2, pomeriggio: Sacromonte e museo delle Grotte.",
          "Giorno 2, sera: zambra in una cueva, dopo aver controllato le recensioni."
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1 e 2: come sopra.",
          "Giorno 3: gita nella Sierra Nevada (in inverno sci a un'ora di auto) o nelle Alpujarras, con villaggi bianchi sul versante sud della catena."
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro intorno alla cattedrale",
        "perChi": "Chi vuole comodità e vita serale",
        "testo": "Tutto a piedi: Alhambra, tapas, Albaicín. La sera il rumore dei bar arriva alle camere basse. I prezzi sono medi."
      },
      {
        "nome": "Albaicín",
        "perChi": "Chi cerca atmosfera e vista sull'Alhambra",
        "testo": "Camere in carmen e piccole pensioni, silenzio la sera. Le strade sono ripide e acciottolate, scomode con le valigie: spesso il taxi non arriva alla porta."
      },
      {
        "nome": "Realejo",
        "perChi": "Chi vuole un quartiere di vita locale, più economico",
        "testo": "Ai piedi dell'Alhambra, con bar frequentati da universitari e prezzi bassi. Il centro è a 10-15 minuti a piedi, la salita verso la collina comincia subito."
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
    comeArrivare: 'Treno AVE da Madrid in circa 1h40-2h, da Siviglia in circa 45 minuti, da Málaga in circa 1h: è uno degli snodi meglio collegati dell\'alta velocità andalusa.',
    comeSpostarsi: 'Il centro storico è piccolo e si gira tutto a piedi.',
    periodoMigliore:
      'marzo-maggio (col Festival dei Patios a maggio) e ottobre. Córdoba è, con Siviglia, la città più calda di Spagna: da metà luglio a fine agosto molte attrazioni riducono gli orari per il caldo, che qui ha toccato il record spagnolo di 47,6°C nell\'agosto 2021.',
    costi: 'Mezquita-Catedral circa 15€ (visita notturna 18€; gratuita nei giorni feriani 8:30-9:30); Alcázar de los Reyes Cristianos circa 7€.',
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
        "costo": "15 euro (2026)",
        "url": "https://mezquita-catedraldecordoba.es/",
        "consiglio": "La fascia gratuita del mattino è la più bella: poca gente e luce radente nei corridoi. Si può anche pagare e entrare dopo, ma il silenzio si perde."
      },
      {
        "nome": "Judería e Calleja de las Flores",
        "testo": "L'antico quartiere ebraico, dietro la Mezquita: vicoli bianchi stretti, cortili con fiori e la piccola Calleja de las Flores che si apre sulla torre del campanile. Qui c'è anche la sinagoga trecentesca, una delle tre rimaste in Spagna.",
        "come": "A piedi, con partenza dalla Puerta de Almodóvar. Non c'è un percorso obbligato.",
        "quando": "Al mattino presto o a fine pomeriggio. A mezzogiorno d'estate i vicoli trattengono il calore.",
        "tempo": "1-2 ore",
        "consiglio": "Entrare nei patii aperti: spesso la porta è lasciata socchiusa ed è consentito guardare dall'ingresso."
      },
      {
        "nome": "Alcázar de los Reyes Cristianos",
        "testo": "Fortezza-palazzo costruita da Alfonso XI nel Trecento e usata dai Re Cattolici. Dentro ci sono mosaici romani, bagni e giardini a terrazze con fontane e alberi di agrumi, che si vedono bene dalle torri.",
        "come": "A piedi dalla Mezquita, 5 minuti verso il fiume. Si sale sulle torri per la vista sulla città.",
        "quando": "Verificare orari e giorni di chiusura sul sito del monumento. D'estate meglio al mattino.",
        "tempo": "1-1 ora e mezza",
        "consiglio": "I giardini sono l'unica ombra in cui sedersi dopo la Mezquita."
      },
      {
        "nome": "Ponte Romano e Torre della Calahorra",
        "testo": "Ponte con 16 arcate sul Guadalquivir, di origine romana e rifatto più volte. Dalla riva opposta si ha la vista classica sulla Mezquita. La torre della Calahorra, all'estremità, ospita un museo.",
        "come": "A piedi, a due passi dalla Mezquita. Il ponte è solo pedonale.",
        "quando": "Al tramonto o dopo il buio, quando la Mezquita è illuminata.",
        "tempo": "30-45 minuti",
        "consiglio": "Attraversare il ponte e fare la foto dalla sponda opposta, non dal ponte stesso."
      },
      {
        "nome": "Patios de Córdoba",
        "testo": "I cortili interni delle case, con fiori in vaso, fontane e pozzi, sono una tradizione locale riconosciuta dall'UNESCO. Durante il festival di maggio i proprietari aprono le case al pubblico e il più bello vince un concorso.",
        "come": "A piedi nel quartiere di San Basilio e nella Judería. Alcuni patii pubblici si visitano tutto l'anno.",
        "quando": "Festival ai primi di maggio, in due settimane circa. Le date e gli orari si controllano sul sito del turismo cittadino.",
        "tempo": "1-2 ore",
        "consiglio": "San Basilio, a sud-ovest, ha i patii più curati e meno gente della Judería."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "8:30 Mezquita nella fascia gratuita del mattino, entrando prima delle 9:20.",
          "10:30 Judería e Calleja de las Flores.",
          "12:30 Alcázar de los Reyes Cristianos.",
          "14:00 Pranzo con salmorejo e rabo de toro, poi pausa nelle ore calde.",
          "18:30 Ponte Romano e riva opposta, quando la luce è migliore."
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come il programma di un giorno, con più tempo per i vicoli.",
          "Giorno 2, mattina: patii di San Basilio (o il percorso del festival a maggio).",
          "Giorno 2, pomeriggio: Medina Azahara, la città califfale a pochi chilometri, con il bus del sito.",
          "Giorno 2, sera: cena di tapas nel centro."
        ]
      }
    ],
    zone: [
      {
        "nome": "Judería",
        "perChi": "Chi vuole stare vicino alla Mezquita",
        "testo": "Camere in case storiche con patio, a un minuto dal monumento. Di notte è silenzioso, ma ci sono più turisti e ristoranti cari. Il traffico non arriva fin dentro i vicoli."
      },
      {
        "nome": "Centro intorno a Plaza de las Tendillas",
        "perChi": "Chi cerca prezzi più bassi e vita serale",
        "testo": "Zona commerciale e di bar, a 10 minuti a piedi dalla Mezquita. Le camere sul lato strada possono essere rumorose nel fine settimana."
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
      "Estate: da metà luglio ad agosto le temperature superano spesso i 40 gradi. Pianificare le visite la mattina presto e di sera.",
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
    comeArrivare: 'In auto da Siviglia (circa 2h) o da Málaga (circa 1h30) attraverso la Serranía de Ronda; treno regionale da Málaga (circa 2h, panoramico) o da Algeciras.',
    comeSpostarsi: 'Il centro si gira a piedi; per i pueblos blancos vicini serve un\'auto, i collegamenti bus tra borghi sono scarsi e lenti.',
    periodoMigliore: 'aprile-giugno e settembre-ottobre, con temperature più miti che nella pianura del Guadalquivir grazie alla quota (circa 750 metri).',
    costi: 'Plaza de Toros e museo circa 10€; Puente Nuevo e Mirador liberi; bagni arabi circa 3,50€.',
    erroriDaEvitare: [
      'Farla in giornata da Siviglia senza pernottare: il tragitto (circa 2h a tratta) rende la visita frettolosa se non ci si ferma almeno una notte',
      'Guidare tra i pueblos blancos senza mettere in conto strade di montagna strette e tornanti',
      'Sottovalutare il vento sul Puente Nuevo: nella gola le correnti possono essere forti, soprattutto in inverno',
    ],
    luoghi: [
      {
        "nome": "Puente Nuevo e Tajo di Ronda",
        "testo": "Il ponte in pietra completato nel 1793 scavalca la gola del Tajo, profonda oltre 100 metri, e unisce la città moresca al quartiere nuovo. Ci si cammina sopra e lo si guarda dal basso, dai sentieri dei belvedere.",
        "come": "A piedi dal centro, il ponte è in pieno paese. Per la vista dal basso si scende per il sentiero del Camino de los Molinos, dal lato sud, oppure dal Mirador de Aldehuela.",
        "quando": "Ingresso libero sul ponte. Il momento migliore è il tramonto, con luce bassa sulla gola.",
        "tempo": "1-2 ore",
        "consiglio": "Il sentiero in discesa è ripido e il ritorno in salita stanca: scarpe chiuse e acqua."
      },
      {
        "nome": "Plaza de Toros",
        "testo": "L'arena di Ronda, del 1785, è tra le più antiche di Spagna e la sede della scuola di tauromachia moderna di Pedro Romero. All'interno c'è un piccolo museo con costumi e manifesti. Si può entrare anche come semplice luogo architettonico, senza assistere a corride.",
        "come": "A piedi dal Puente Nuevo, 5 minuti verso il quartiere del Mercadillo.",
        "quando": "Controllare orari e giorni di apertura sul sito del gestore, cambiano per stagione.",
        "tempo": "1 ora",
        "consiglio": "Chi non vuole il tema della corrida può guardare solo l'architettura e il maneggio dei cavalli."
      },
      {
        "nome": "Baños Árabes e la Ciudad",
        "testo": "La Ciudad, il quartiere moresco, ha vicoli stretti e porte antiche. I bagni arabi del XIII-XIV secolo, ai piedi della città vecchia, sono tra i meglio conservati della Spagna, con volte a stella.",
        "come": "A piedi dal Puente Nuevo, scendendo verso il fiume Guadalevín. Il percorso è in discesa e in ombra.",
        "quando": "Verificare gli orari di apertura sul sito del comune. Al mattino per evitare i gruppi.",
        "tempo": "1-1 ora e mezza in tutto",
        "consiglio": "Si combina bene con il sentiero dei mulini sotto la gola, nella stessa mezza giornata."
      },
      {
        "nome": "Setenil de las Bodegas",
        "testo": "Villaggio bianco a mezz'ora di strada da Ronda, con case e bar costruiti sotto le rocce che sporgono sul fiume. Le strade più note sono Cuevas del Sol e Cuevas de la Sombra, con tavolini all'ombra del masso.",
        "come": "Si raggiunge in auto da Ronda in circa 25-30 minuti, con tornanti di montagna. Il paese è piccolo e si gira a piedi.",
        "quando": "Al mattino o a mezzogiorno per pranzare. Nei fine settimana d'estate l'accesso in auto è lento.",
        "tempo": "2-3 ore",
        "consiglio": "Parcheggiare nei posteggi fuori dall'abitato, non nelle vie strette."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "9:30 Puente Nuevo e passeggiata nel quartiere moresco.",
          "11:00 Baños Árabes e sentiero di discesa nella gola.",
          "13:30 Pranzo con rabo de toro o agnello.",
          "16:00 Plaza de Toros e museo.",
          "19:00 Tramonto dai belvedere sulla gola."
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come il programma di un giorno, con pernottamento a Ronda.",
          "Giorno 2, mattina: Setenil de las Bodegas in auto.",
          "Giorno 2, pomeriggio: Grazalema e parco naturale della Sierra de Grazalema, con strada panoramica."
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro storico di Ronda",
        "perChi": "Chi vuole vedere il ponte la sera e la mattina",
        "testo": "Alberghi e pensioni a due passi dal Puente Nuevo. Il paese si svuota dopo il tramonto, quando i gruppi della gita ripartono. Le strade sono strette e il parcheggio costa."
      },
      {
        "nome": "Campagna intorno a Ronda",
        "perChi": "Chi viaggia in auto e cerca silenzio",
        "testo": "Agriturismi e cortijos tra gli uliveti e le vigne, a 10-15 minuti di strada dal paese. Serve l'auto per cenare fuori."
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
      "Gruppi in giornata da Siviglia e dalla Costa del Sol: tra le 11 e le 16 il centro è affollato. Chi dorme a Ronda ha mattina e sera quasi vuote."
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
    comeArrivare: 'Aeroporto di San Sebastián (piccolo, pochi voli) o, più spesso, aeroporto di Bilbao (circa 1h20 in bus). Treno da Madrid (circa 5h) o Barcellona; in auto, circa 20 minuti dal confine francese.',
    comeSpostarsi: 'Il centro si gira a piedi; bus urbani per le zone periferiche e le spiagge più lontane.',
    periodoMigliore:
      'giugno-settembre, il periodo più asciutto e più caldo dell\'anno (comunque mite, di rado sopra i 25-27°C). In Andalusia è la stagione da evitare per il caldo.',
    costi: 'un giro di 4-5 pintxos con altrettanti bicchieri costa indicativamente 25-35€ a persona; i bar più semplici hanno pintxos da 2-4€ ciascuno.',
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
        "consiglio": "Chiedere sempre il pintxo caldo della casa, non solo quelli sul banco. A fine giro si dichiara all'oste cosa si è consumato."
      },
      {
        "nome": "Playa de la Concha e Paseo de la Concha",
        "testo": "La spiaggia urbana a forma di conchiglia, con la balaustra bianca del lungomare. Le acque sono protette dall'isola di Santa Clara e il fondale è basso.",
        "come": "A piedi dal centro, la passeggiata dalla Parte Vieja al Peine del Viento è lunga circa 3 km.",
        "quando": "Per fare il bagno giugno-settembre. La marea alta restringe molto la spiaggia.",
        "tempo": "1-3 ore",
        "consiglio": "Controllare le maree: con la bassa marea la spiaggia raddoppia."
      },
      {
        "nome": "Monte Igueldo",
        "testo": "La collina a ovest della baia, con un parco divertimenti e un belvedere. Si sale con una funicolare del 1912, tra le più antiche del Paese.",
        "come": "Funicolare dalla base, raggiungibile in bus urbano dal centro. In alternativa a piedi, in circa 40 minuti.",
        "quando": "Al tramonto. Controllare la stagione e gli orari della funicolare sul sito ufficiale.",
        "tempo": "1-1 ora e mezza",
        "consiglio": "Salire verso l'ora del tramonto e scendere a piedi lungo la strada panoramica."
      },
      {
        "nome": "Monte Urgull",
        "testo": "La collina fortificata tra la Parte Vieja e il porto, con sentieri tra alberi e bastioni, il castello di Santa Cruz de la Mota e la statua del Sacro Cuore in cima.",
        "come": "A piedi dalla Parte Vieja, scale a fianco del porto. Ingresso libero al parco.",
        "quando": "Tutto l'anno; con la pioggia i sentieri sono scivolosi.",
        "tempo": "1-1 ora e mezza",
        "consiglio": "Sentieri ombreggiati, buoni nelle ore calde dell'estate."
      },
      {
        "nome": "Peine del Viento",
        "testo": "Scultura in acciaio di Eduardo Chillida (1977) ancorata alle rocce in fondo alla Concha. Tre elementi di metallo si protendono sul mare e, con le onde alte, i getti d'acqua escono da fori nel pavimento.",
        "come": "A piedi dalla Concha, in fondo alla passeggiata, oppure in bus fino a Ondarreta.",
        "quando": "Con mare mosso o all'alta marea, quando gli spruzzi si sentono di più.",
        "tempo": "30 minuti",
        "consiglio": "Con forti onde tenersi lontano dalla piattaforma bassa."
      },
      {
        "nome": "Getaria e Zarautz",
        "testo": "Due paesi della costa, a 20-25 minuti da San Sebastián. Getaria è nota per il pesce alla brace (rodaballo) e per il vino txakoli, Zarautz per la spiaggia lunga e il surf.",
        "come": "Bus Lurraldebus dalla stazione degli autobus di San Sebastián o treno regionale per Zarautz. Si fa in mezza giornata.",
        "quando": "Tutto l'anno. A Getaria il pesce alla brace si mangia a pranzo.",
        "tempo": "Mezza giornata",
        "consiglio": "Provare il pesce nei locali di Getaria con grigliata in strada."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "9:00 Passeggiata sul Paseo de la Concha fino al Peine del Viento.",
          "11:00 Monte Urgull a piedi, panorama sul porto.",
          "13:00 Pranzo con giro di pintxos nella Parte Vieja.",
          "16:00 Spiaggia della Concha o riposo.",
          "19:00 Funicolare del Monte Igueldo per il tramonto.",
          "21:00 Seconda tornata di pintxos."
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come il programma di un giorno.",
          "Giorno 2, mattina: Gros e spiaggia di Zurriola, colazione al mercato.",
          "Giorno 2, pomeriggio: Getaria in bus, pesce alla brace.",
          "Giorno 2, sera: ultima serata di pintxos e txakoli o sidra."
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1 e 2: come sopra.",
          "Giorno 3: gita in giornata a Hondarribia (borgo di pescatori) o a Pasaia in barca, poi ritorno in serata."
        ]
      }
    ],
    zone: [
      {
        "nome": "Parte Vieja",
        "perChi": "Chi vuole essere in mezzo ai bar",
        "testo": "Mangiare e uscire a piedi, ma di sera il rumore resta fino a tardi e i prezzi sono più alti. Le camere sono piccole."
      },
      {
        "nome": "Centro (Área Romántica)",
        "perChi": "Chi cerca comodità e negozi",
        "testo": "Quartiere ottocentesco tra Concha e Boulevard, a 5-10 minuti dalla Parte Vieja. Più tranquillo della zona vecchia, con prezzi medi."
      },
      {
        "nome": "Gros",
        "perChi": "Chi ama il surf e vuole meno turisti",
        "testo": "Oltre il fiume Urumea, vicino alla spiaggia di Zurriola. Bar e pintxos con prezzi più bassi, a 15 minuti a piedi dal centro vecchio."
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
    comeArrivare: 'Aeroporto di Bilbao (Loiu), circa 12 km dal centro (bus Bizkaibus A3247). Treno o bus da Madrid (circa 4h30-5h) o da San Sebastián (circa 1h20 in bus).',
    comeSpostarsi: 'Metro (linea Euskotren/Metro Bilbao) efficiente per raggiungere il Guggenheim e le zone periferiche; il centro storico si gira a piedi.',
    periodoMigliore: 'giugno-settembre, come il resto del Nord: clima fresco e piovoso tutto l\'anno, con l\'estate come finestra più stabile.',
    costi: 'Guggenheim: 18€ da metà giugno a metà settembre, 15€ nel resto dell\'anno (ridotto 9€/7,50€); gratuito per i minori di 18 anni e, in bassa stagione, l\'ultima domenica del mese (conviene controllare sul sito ufficiale prima di andare).',
    erroriDaEvitare: [
      'Visitare il Guggenheim di lunedì senza controllare prima: il museo chiude quasi tutti i lunedì, tranne un\'estensione stagionale estiva',
      'Trattare Bilbao come una tappa mordi e fuggi fra San Sebastián e la Cantabria: il Casco Viejo merita almeno una serata intera',
      'Sottovalutare la pioggia: portarsi sempre un impermeabile leggero, indipendentemente dalla stagione',
    ],
    luoghi: [
      {
        "nome": "Museo Guggenheim Bilbao",
        "testo": "Il museo di Frank Gehry, aperto nel 1997, tutto in titanio, vetro e pietra calcarea, sulla riva del Nervión. All'esterno ci sono «Puppy» di Jeff Koons, coperto di fiori, e «Maman», il ragno di Louise Bourgeois. All'interno si alternano mostre temporanee e una collezione di arte contemporanea, con «The Matter of Time» di Richard Serra.",
        "come": "Metro fino a Moyúa, poi 10 minuti a piedi, oppure tram fino a Guggenheim. Si può visitare anche solo l'esterno, che è libero, con la passeggiata sul fiume.",
        "quando": "Controllare orari, giorni di chiusura (di solito il lunedì in bassa stagione) e prezzi sul sito ufficiale. Al mattino presto la luce sul titanio è migliore.",
        "tempo": "2-3 ore dentro, 30 minuti per l'esterno",
        "url": "https://www.guggenheim-bilbao.eus/",
        "consiglio": "Comprare il biglietto online e visitare prima le sale con Serra; poi l'esterno al tramonto."
      },
      {
        "nome": "Casco Viejo e Siete Calles",
        "testo": "Il centro storico medievale, con le sette vie parallele da cui nacque la città, la cattedrale di Santiago e la Plaza Nueva, circondata da portici. Qui c'è una delle migliori scene di pintxos del Paese.",
        "come": "A piedi o in metro fino a Casco Viejo. La Plaza Nueva è il punto di ritrovo.",
        "quando": "Pintxos da mezzogiorno e dalle 19. Il giovedì sera e il fine settimana il quartiere è pieno.",
        "tempo": "2-3 ore",
        "consiglio": "Provare i bar a ridosso della Plaza Nueva e quelli sulle vie laterali, meno turistici."
      },
      {
        "nome": "Mercado de la Ribera",
        "testo": "Il mercato coperto sul lungofiume, in stile razionalista e Art Déco, tra i più grandi d'Europa. Banchi di pesce, carne, frutta e un piano superiore con pintxos.",
        "come": "A piedi dal Casco Viejo, a pochi minuti, sulla riva del Nervión.",
        "quando": "Al mattino per i banchi. Controllare gli orari nel fine settimana e nei festivi.",
        "tempo": "1 ora",
        "consiglio": "Prendere un pintxo o un caffè nell'area ristoro al piano superiore."
      },
      {
        "nome": "Puente de Vizcaya (Portugalete)",
        "testo": "Ponte trasbordatore del 1893, ancora in funzione, patrimonio UNESCO. Una navicella appesa trasporta persone e auto da una riva all'altra della ría in pochi minuti. Si può anche salire sulla passerella alta.",
        "come": "Metro linea 2 fino a Areeta (Getxo) o a Portugalete. Dal centro di Bilbao circa 30 minuti.",
        "quando": "Funziona tutto l'anno; verificare gli orari e i prezzi del trasbordo e della passerella.",
        "tempo": "1-2 ore",
        "url": "https://puente-colgante.com/",
        "consiglio": "Attraversare in navicella e tornare in metro, per vedere il ponte dal basso."
      },
      {
        "nome": "Funicolare di Artxanda",
        "testo": "Funicolare di 1915 che sale al colle di Artxanda, sopra la città, da cui si vede tutta Bilbao con il Guggenheim e la ría.",
        "come": "La stazione bassa è a pochi minuti dal centro, dall'altra parte del fiume.",
        "quando": "Al tramonto, con il cielo limpido. Controllare gli orari sul sito del gestore.",
        "tempo": "1 ora",
        "consiglio": "Salire verso l'ora del tramonto e fermarsi per una birra sulla collina."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "9:30 Guggenheim, al mattino.",
          "12:30 Passeggiata lungo il Nervión fino al Casco Viejo.",
          "14:00 Mercado de la Ribera e pranzo di pintxos.",
          "16:30 Siete Calles e cattedrale.",
          "19:00 Funicolare di Artxanda per il tramonto.",
          "21:00 Cena nel Casco Viejo."
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come il programma di un giorno.",
          "Giorno 2, mattina: Museo de Bellas Artes e Ensanche.",
          "Giorno 2, pomeriggio: Puente de Vizcaya in metro, traghetto in navicella.",
          "Giorno 2, sera: ultima serata di pintxos."
        ]
      }
    ],
    zone: [
      {
        "nome": "Casco Viejo",
        "perChi": "Chi vuole pintxos e atmosfera",
        "testo": "Camere nel quartiere storico, comode per i bar. La sera è rumoroso nei fine settimana, soprattutto il giovedì."
      },
      {
        "nome": "Ensanche e dintorni del Guggenheim",
        "perChi": "Chi cerca comodità e collegamenti",
        "testo": "Quartiere ottocentesco con negozi, metro e tram. Più tranquillo la sera e a pochi minuti a piedi dal museo."
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
      "Casco Viejo nei fine settimana e nelle feste (Aste Nagusia, a fine agosto): pieno di gente e borseggi possibili.",
      "Metro e tram: validare il biglietto o la tessera ricaricabile all'ingresso."
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
        "come": "A piedi dal centro storico, interamente pedonale. L'ingresso alla cattedrale è libero; musei, copertura e Pórtico richiedono un biglietto a parte.",
        "quando": "Messa del pellegrino a mezzogiorno. Il botafumeiro non oscilla a ogni messa: controllare il calendario sul sito della cattedrale.",
        "tempo": "1-2 ore",
        "url": "https://www.catedraldesantiago.es/",
        "consiglio": "Arrivare mezz'ora prima della messa del pellegrino per sedersi; dopo, restare in piazza a guardare gli arrivi."
      },
      {
        "nome": "Ufficio del Pellegrino",
        "testo": "Qui si ritira la Compostela, il certificato di pellegrinaggio, presentando la credenziale timbrata. Per ottenerlo servono gli ultimi 100 km a piedi o 200 in bici.",
        "come": "A pochi minuti a piedi dalla cattedrale, in Rúa das Carretas.",
        "quando": "Aperto tutti i giorni, con code lunghe in estate. Controllare gli orari ufficiali.",
        "tempo": "30 minuti-2 ore, secondo la coda",
        "url": "https://oficinadelperegrino.com/",
        "consiglio": "Andare nel primo pomeriggio o presto al mattino, quando la fila è più corta."
      },
      {
        "nome": "Centro storico e Mercado de Abastos",
        "testo": "Il centro storico, patrimonio UNESCO, è fatto di vie in pietra, portici e piazze come la Quintana e Praza das Praterías. Il Mercado de Abastos, il mercato coperto, ha banchi di pesce, formaggi e polpo.",
        "come": "A piedi. Il mercato è a 5 minuti dalla cattedrale.",
        "quando": "Il mercato al mattino. La pioggia è frequente: portare un impermeabile.",
        "tempo": "2-3 ore",
        "consiglio": "Mangiare il polpo a feira nei locali accanto al mercato, che cucinano su richiesta."
      },
      {
        "nome": "Camino del Norte: tratto San Sebastián-Bilbao",
        "testo": "Il Camino del Norte segue la costa cantabrica da Irún a Santiago. Il tratto basco ha salite continue tra scogliere e boschi, con tappe da 20-25 km. Chi ha pochi giorni può percorrere una sola tappa, per esempio San Sebastián-Zarautz.",
        "come": "Partenza dalle stazioni di San Sebastián o Bilbao. I segnavia sono frecce gialle e conchiglie. Il bus o il treno servono per rientrare.",
        "quando": "Da maggio a settembre. In inverno piove molto e le giornate sono corte.",
        "tempo": "Una tappa 5-7 ore a piedi",
        "consiglio": "Partire presto e portare acqua; i punti di rifornimento sono rari fuori dai paesi."
      },
      {
        "nome": "Finisterre e Muxía",
        "testo": "Dopo Santiago molti pellegrini proseguono per tre o quattro giorni fino a Finisterre, sulla costa atlantica, e a Muxía. Finisterre è il «fine del mondo» per i romani, con faro e scogliera.",
        "come": "A piedi da Santiago in circa 3-4 giorni, oppure in bus dalla stazione di Santiago (circa 2 ore).",
        "quando": "Estate. Al tramonto al faro si ferma chi cammina.",
        "tempo": "Una giornata da Santiago in bus, 3-4 giorni a piedi",
        "consiglio": "Verificare gli orari del bus nel periodo scelto, perché cambiano per stagione."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "9:00 Praza do Obradoiro e Pórtico da Gloria.",
          "11:00 Cattedrale e cripta.",
          "12:00 Messa del pellegrino.",
          "14:00 Pranzo con polpo e pimientos de Padrón.",
          "16:00 Ufficio del Pellegrino se si è arrivati a piedi.",
          "18:00 Passeggiata nel centro storico e nel parco dell'Alameda."
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
        "testo": "A 10-15 minuti a piedi dal centro. Zona più tranquilla, con alberghi e pensioni."
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
      "Credenziale del pellegrino: far timbrare almeno due volte al giorno negli ultimi 100 km per ottenere la Compostela.",
      "Camino del Norte: salite continue e tratti di sentiero costiero esposto. Non sottovalutare il dislivello.",
      "Cattedrale: le visite alle coperture e ai musei richiedono prenotazione; controllare sul sito ufficiale."
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
    comeArrivare: 'Aeroporto di Palma di Son Sant Joan, uno dei più trafficati di Spagna in estate, con voli diretti da tutte le principali città italiane. Traghetto da Barcellona o Valencia (7-8 ore, o 4 ore con i traghetti veloci).',
    comeSpostarsi: 'Auto a noleggio consigliata per la Serra de Tramuntana; a Palma i mezzi pubblici bastano; il trenino storico per Sóller è un\'attrazione in sé oltre che un mezzo di trasporto.',
    periodoMigliore: 'maggio-giugno e settembre, con temperature gradevoli e meno folla di luglio-agosto, quando prezzi e afflusso turistico raggiungono il picco.',
    costi: 'Cattedrale di Palma circa 10€; trenino storico per Sóller circa 32€ andata e ritorno; in alta stagione il noleggio auto può costare molto di più che nel resto dell\'anno.',
    erroriDaEvitare: [
      'Limitarsi alla costa turistica di Palma (Playa de Palma, S\'Arenal) senza mai vedere la Serra de Tramuntana: è come andare a Roma e vedere solo l\'aeroporto',
      'Guidare sulle strade a tornanti della Serra senza mettere in conto tempi più lunghi del previsto',
      'Prenotare voli e traghetti per luglio-agosto senza anticipo: è il periodo di massima domanda e i prezzi salgono di conseguenza',
    ],
    luoghi: [
      {
        "nome": "Cattedrale di Palma (La Seu)",
        "testo": "Cattedrale gotica costruita a partire dal 1229 proprio sul lungomare, con uno dei rosoni più grandi del gotico europeo. Dentro ci sono il baldacchino di Antoni Gaudí sopra l'altare e interventi di Miquel Barceló nella cappella del Santissimo.",
        "come": "A piedi dal centro di Palma, di fronte al Parc de la Mar. Ingresso dal lato della Plaça de la Seu, con audioguida inclusa nel biglietto.",
        "quando": "Gli orari cambiano per stagione e la domenica si celebrano le messe: controllare il calendario sul sito ufficiale. Al mattino la luce passa meglio dal rosone.",
        "tempo": "1-1 ora e mezza",
        "url": "https://catedraldemallorca.org/",
        "consiglio": "Dal Parc de la Mar si ha la vista migliore della facciata riflessa nello specchio d'acqua, meglio prima di entrare."
      },
      {
        "nome": "Palma vecchia: Almudaina e vicoli",
        "testo": "Il Palazzo dell'Almudaina, ex fortezza araba poi residenza dei re di Maiorca, si trova accanto alla cattedrale. Intorno si apre il centro storico: patii nascosti, Plaça Major, i bagni arabi e il quartiere di Sa Llotja con i bar sul porto.",
        "come": "Tutto a piedi dalla cattedrale. Il palazzo è gestito dal Patrimonio Nacional e si visita da soli con i pannelli.",
        "quando": "Il palazzo ha un giorno di riposo settimanale e chiude per cerimonie ufficiali: verificare sul sito. I vicoli si godono di più la sera, quando il caldo cala.",
        "tempo": "mezza giornata per palazzo e vicoli",
        "url": "https://www.patrimonionacional.es/",
        "consiglio": "Entrare nei portoni aperti del centro: molti patii settecenteschi si vedono dalla strada."
      },
      {
        "nome": "Valldemossa",
        "testo": "Paese di pietra in una conca della Serra de Tramuntana, noto per la Cartuja dove Chopin e George Sand passarono l'inverno 1838-39. Strade in salita, vasi di fiori alle finestre e la coca de patata, il dolce locale.",
        "come": "Da Palma in auto in circa 25 minuti sulla Ma-1110, oppure con il bus di linea dalla stazione intermodale. Il paese si gira a piedi.",
        "quando": "Arrivare presto o nel tardo pomeriggio: tra le 11 e le 16 i pullman fanno il pieno.",
        "tempo": "2-3 ore",
        "consiglio": "Parcheggiare nei parcheggi a monte e scendere a piedi: le strade del centro sono strette e quasi sempre piene."
      },
      {
        "nome": "Tren de Sóller e Port de Sóller",
        "testo": "Treno d'epoca in legno in servizio dal 1912: 27 chilometri con tredici gallerie, la più lunga di circa 3 chilometri, fino a Sóller. Da lì il tram storico scende al porto, una baia chiusa tra le montagne con lungomare e barche.",
        "come": "Parte dalla stazione di Plaça d'Espanya a Palma. Da Sóller il tram porta al Port de Sóller in circa 20 minuti.",
        "quando": "Il servizio si ferma d'inverno e riparte a febbraio; gli orari variano per stagione, quindi guardare il sito ufficiale. Meglio le corse del mattino.",
        "tempo": "giornata intera con il porto",
        "costo": "circa 30 euro andata e ritorno Palma-Sóller (2026)",
        "url": "https://trendesoller.com/",
        "consiglio": "Comprare il biglietto in anticipo online in alta stagione e sedersi sul lato destro all'andata per i panorami sulla valle."
      },
      {
        "nome": "Sa Calobra e Torrent de Pareis",
        "testo": "Calanca di ciottoli alla foce del Torrent de Pareis, un canyon con pareti di 200 metri. La strada Ma-2141 che scende da Sa Calobra ha un tornante a nodo di cravatta ed è una delle più fotografate dell'isola. Una galleria porta dal molo alla spiaggetta e al canyon.",
        "come": "In auto sulla Ma-2141 dalla Ma-10, 14 km di curve e circa 40 minuti, oppure in barca da Port de Sóller (traversata di circa 1 ora).",
        "quando": "Il canyon si visita in autunno e primavera con più calma. Il Torrent de Pareis è chiuso o sconsigliato con pioggia e piena: guardare il meteo.",
        "tempo": "2-3 ore",
        "url": "https://www.caib.es/",
        "consiglio": "La barca evita la strada e il parcheggio, che in estate è il vero ostacolo: partire dal porto la mattina."
      },
      {
        "nome": "Cap de Formentor e Pollença",
        "testo": "La penisola più a nord dell'isola, con scogliere a picco sul mare e un faro in fondo a 20 km di strada panoramica sopra Port de Pollença. Lungo la strada c'è il Mirador des Colomer. Pollença ha una piazza centrale con bar e la scalinata del Calvari, 365 gradini.",
        "come": "Da Port de Pollença in auto 20 km sulla Ma-2210 fino al faro, circa 40 minuti. Da Palma a Pollença circa un'ora.",
        "quando": "Al tramonto per la luce sul faro. In estate l'accesso in auto può essere limitato in certi orari: verificare prima di partire.",
        "tempo": "mezza giornata",
        "consiglio": "Salire al Mirador des Colomer all'apertura o all'ora del tramonto: a metà giornata si arriva in colonna."
      },
      {
        "nome": "Cala Mondragó e Es Trenc",
        "testo": "Due spiagge del sud-est. Cala Mondragó è dentro un parco naturale, con pineta e due calette di sabbia. Es Trenc è un lungo arenile bianco senza edifici, con dune e saline alle spalle.",
        "come": "In auto: Cala Mondragó è a circa un'ora da Palma, vicino a Santanyí. Es Trenc è a circa 50 minuti da Palma, vicino a Campos. Parcheggi a pagamento, che si riempiono presto.",
        "quando": "Giugno e settembre. In luglio e agosto arrivare prima delle 10.",
        "tempo": "mezza giornata",
        "consiglio": "Si può camminare lungo la costa da Mondragó a Cala Santanyí in un paio d'ore se si vuole lasciare la spiaggia affollata."
      },
      {
        "nome": "Un tratto del GR221 in Tramuntana",
        "testo": "Il GR221, il «Sentiero della Pietra a Secco», attraversa la Serra de Tramuntana in oltre 100 chilometri. Una tappa sola basta: terrazze di ulivi, muretti a secco, rifugi e sentieri antichi. Una tratta semplice è Port de Sóller-Deià lungo la costa.",
        "come": "Si parte da Port de Sóller o da Deià, serviti da bus di linea dal centro di Palma. Il sentiero è segnato con bandierine.",
        "quando": "Da ottobre a maggio. In estate si parte all'alba: il caldo e l'assenza d'ombra pesano.",
        "tempo": "3-5 ore per tappa",
        "url": "https://www.caib.es/",
        "consiglio": "Portare acqua e scarpe da trekking: i tratti in pietra bagnata scivolano. Alcuni sentieri attraversano proprietà private e hanno orari di passaggio."
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
          "Giorno 1: Palma, cattedrale e vicoli, tramonto sul porto",
          "Giorno 2: treno storico per Sóller, tram fino al porto, pranzo di pesce",
          "Rientro in treno nel tardo pomeriggio"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Palma",
          "Giorno 2: Valldemossa al mattino, Deià e Sóller nel pomeriggio, in auto",
          "Giorno 3: Sa Calobra in barca da Port de Sóller o Formentor in auto, tramonto a Pollença"
        ]
      }
    ],
    zone: [
      {
        "nome": "Palma centro storico",
        "perChi": "chi vuole città, ristoranti e niente auto",
        "testo": "Tutto a piedi, vita serale animata. Pro: bar, cattedrale, mercati. Contro: rumore nei vicoli, camere piccole, parcheggio quasi impossibile."
      },
      {
        "nome": "Sóller e Port de Sóller",
        "perChi": "chi vuole montagna e mare insieme",
        "testo": "Valle di agrumeti con treno e tram. Pro: calma la sera, escursioni a piedi. Contro: lontano da Palma (30 minuti in auto con il tunnel), strade strette."
      },
      {
        "nome": "Pollença e Alcúdia",
        "perChi": "famiglie e spiagge",
        "testo": "Nord dell'isola: spiagge ampie, Formentor vicino. Pro: servizi per bambini. Contro: l'estate è piena e senza auto non si va lontano."
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
      "Le spiagge più famose in estate si riempiono entro le 10 e i parcheggi sono a pagamento: partire presto o prendere il bus.",
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
    comeArrivare: 'Aeroporto di Ibiza, con voli diretti stagionali dall\'Italia in alta stagione; traghetto da Mallorca (Palma-Ibiza, circa 2h15-5h secondo il tipo di nave) o da Barcellona/Valencia.',
    comeSpostarsi: 'Auto o scooter a noleggio quasi indispensabili per raggiungere il nord dell\'isola e le calette più isolate; bus locali collegano i centri principali ma con frequenze limitate fuori stagione.',
    periodoMigliore:
      'giugno e settembre, il compromesso migliore fra clima e folla. Luglio-agosto è il picco di prezzi e vita notturna, con il sud pieno; il nord resta abbastanza tranquillo anche in alta stagione.',
    costi: 'Molto variabile: un ingresso ai grandi club può superare i 60-100€ in alta stagione, mentre una giornata nel nord tra spiagge libere e un pranzo semplice costa una frazione di quella cifra.',
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
        "consiglio": "Salire presto, poi scendere per cena nel quartiere di Sa Penya, sotto le mura."
      },
      {
        "nome": "Es Vedrà e Cala d'Hort",
        "testo": "Es Vedrà è uno scoglio alto 382 metri davanti alla costa sud-ovest, circondato da leggende. Si vede al meglio da Cala d'Hort, una spiaggia di sabbia e ciottoli, e dalla Torre des Savinar.",
        "come": "In auto da Ibiza Town in circa 30 minuti. Cala d'Hort ha un parcheggio piccolo, che nel pomeriggio d'estate è pieno.",
        "quando": "Il tramonto è il momento più richiesto: arrivare almeno un'ora prima.",
        "tempo": "2-3 ore",
        "consiglio": "Cenare in uno dei locali sulla spiaggia e restare dopo il tramonto: la folla se ne va."
      },
      {
        "nome": "Cala Comte",
        "testo": "Una spiaggia del ovest con scogli bassi e acqua trasparente, famosa per il tramonto con le isolette di fronte.",
        "come": "In auto da San Antonio in circa 20 minuti, oppure bus stagionale.",
        "quando": "Il tramonto in estate è affollato. Meglio la mattina o a settembre.",
        "tempo": "mezza giornata",
        "consiglio": "Per una cena sul mare, scegliere i ristoranti sulle rocce, ma prenotare."
      },
      {
        "nome": "Benirràs e tamburi della domenica",
        "testo": "Una baia nel nord, chiusa da scogliere. Dal tramonto della domenica un gruppo di suonatori di tamburi si riunisce sulla sabbia da decenni, con bancarelle e gente che balla.",
        "come": "In auto da Sant Joan de Labritja, circa 15 minuti. La strada è stretta nell'ultimo tratto.",
        "quando": "La domenica al tramonto da maggio a ottobre. Gli altri giorni la baia è tranquilla.",
        "tempo": "una serata",
        "consiglio": "Arrivare con due ore di anticipo per trovare parcheggio e un posto sulla sabbia."
      },
      {
        "nome": "Cala Xarraca e Cala Sant Vicent",
        "testo": "Due calette del nord. Xarraca è una baia verde con acqua calma; Sant Vicent è rocciosa e più selvaggia. Poca costruzione intorno.",
        "come": "In auto da Sant Joan de Labritja: Xarraca a 10 minuti, Sant Vicent a 15. Parcheggi piccoli.",
        "quando": "Mattina presto o fine pomeriggio.",
        "tempo": "mezza giornata",
        "consiglio": "Portare maschera e boccaglio: l'acqua è limpida e il fondale roccioso."
      },
      {
        "nome": "Ses Salines",
        "testo": "Parco naturale di saline e dune nel sud, con la spiaggia di Ses Salines e quella di Es Cavallet. Le saline sono ancora in uso e sono patrimonio UNESCO insieme a Dalt Vila e alla posidonia.",
        "come": "In auto da Ibiza Town in 20 minuti. Parcheggi a pagamento, con limiti d'accesso in estate.",
        "quando": "Mattina, prima del caldo. Es Cavallet ha un tratto naturista.",
        "tempo": "mezza giornata",
        "url": "https://www.caib.es/",
        "consiglio": "Non entrare nelle zone delle saline e delle dune segnate come protette."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Dalt Vila al mattino",
          "Pranzo a Sa Penya",
          "Pomeriggio: Ses Salines o Cala Comte",
          "Tramonto sul mare"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Dalt Vila e Ses Salines, cena in città",
          "Giorno 2: nord, Cala Xarraca e Sant Vicent, mercato a Sant Joan o Las Dalias, tramonto a Benirràs se è domenica"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Dalt Vila",
          "Giorno 2: nord e Benirràs",
          "Giorno 3: Es Vedrà, Cala d'Hort e Cala Comte al tramonto"
        ]
      }
    ],
    zone: [
      {
        "nome": "Ibiza Town",
        "perChi": "chi vuole servizi e non guidare",
        "testo": "Porto, ristoranti e bus per le spiagge del sud. Rumore la notte e prezzi alti in estate."
      },
      {
        "nome": "Sant Antoni",
        "perChi": "chi vuole mare e vita serale più economica",
        "testo": "Baia con tramonti, locali e collegamenti. Zone molto turistiche e notturne."
      },
      {
        "nome": "Nord: Santa Gertrudis, Sant Joan",
        "perChi": "chi cerca silenzio",
        "testo": "Colline verdi, ristoranti e calette. Serve l'auto per spostarsi, i bus sono pochi."
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
      "In estate molte calette hanno accesso limitato per auto e parcheggi a pagamento che si riempiono entro metà mattina.",
      "Tassa turistica (ecotasa) di alcuni euro a notte, pagata in hotel.",
      "A Sant Antoni e in altre zone ci sono divieti di alcol per strada e multe per condotte incivili.",
      "Es Vedrà e le scogliere: non scendere dai sentieri segnati, le cadute sono frequenti."
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
        "come": "Si gira a piedi. Da Maó con il bus di linea in circa un'ora, oppure in auto sulla Me-1.",
        "quando": "Il mercato in Plaça del Born il mattino. La sera il porto è il posto dove si cena.",
        "tempo": "mezza giornata",
        "consiglio": "Lasciare l'auto nei parcheggi fuori dal centro: le vie sono strette e in estate piene."
      },
      {
        "nome": "Maó e il suo porto",
        "testo": "La capitale attuale, sopra uno dei porti naturali più profondi del Mediterraneo, lungo 5 chilometri. In città passeggiate sul lungomare, il mercato del Claustre del Carme, il Museu de Menorca e le fabbriche di gin Xoriguer.",
        "come": "Dall'aeroporto in 10 minuti. In città si cammina; i battelli fanno il giro del porto in circa un'ora.",
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
        "come": "Da Ciutadella 20 minuti in auto, poi parcheggio e 15 minuti a piedi. In alta stagione c'è anche una navetta stagionale. Oppure a piedi da Cala Galdana lungo il Camí de Cavalls.",
        "quando": "Mattina presto o dopo le 16. In piena estate il parcheggio chiude presto.",
        "tempo": "mezza giornata",
        "consiglio": "Arrivare con un'ora di anticipo rispetto agli altri: l'acqua è ferma e trasparente anche alle otto."
      },
      {
        "nome": "Torre d'en Galmés",
        "testo": "Il più grande insediamento talayotico dell'isola, con tre talayot, una taula e un'area di case circolari dell'Età del Bronzo e del Ferro. Fa parte del sito Menorca Talayotica, patrimonio UNESCO dal 2023.",
        "come": "In auto da Maó o Ciutadella in circa 25 minuti. Si visita da soli, con pannelli. Il sito ha un biglietto d'ingresso.",
        "quando": "Primo mattino o tardo pomeriggio, per il caldo e la luce.",
        "tempo": "1-1 ora e mezza",
        "consiglio": "Combinarla con Cala en Porter o con il Museu de Menorca a Maó."
      },
      {
        "nome": "Naveta des Tudons",
        "testo": "Tomba collettiva a forma di nave rovesciata, costruita in pietra a secco intorno al 1000 a.C. Si trova al margine della strada e viene considerata uno dei più antichi edifici ancora in piedi d'Europa.",
        "come": "In auto sulla strada Maó-Ciutadella, 5 km da Ciutadella. Una sosta di mezz'ora.",
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
      "I parcheggi delle calette del sud (Macarella, Turqueta) in alta stagione si riempiono entro metà mattina e sono a pagamento.",
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
    comeArrivare: 'Due aeroporti: Tenerife Sur (TFS), il principale per i voli internazionali e la costa turistica sud, e Tenerife Norte (TNO), più vicino a Santa Cruz e La Laguna.',
    comeSpostarsi: 'Auto a noleggio consigliata per raggiungere il Teide e Anaga; tram tra Santa Cruz e La Laguna; bus (guaguas) capillari ma con tempi lunghi verso le zone di montagna.',
    periodoMigliore:
      'tutto l\'anno, col clima mite e costante (16-21°C anche a gennaio): per questo le Canarie sono la meta spagnola giusta in inverno, quando il resto d\'Europa è al freddo. In quota, al Teide, fa più freddo e d\'inverno la neve non è rara.',
    costi: 'Funivia del Teide circa 40€ andata e ritorno; il permesso per la vetta è gratuito ma a numero chiuso (200 persone al giorno, prenotabile fino a 56 giorni prima).',
    erroriDaEvitare: [
      'Salire al Teide senza aver prenotato il permesso per la vetta con largo anticipo: la funivia da sola non dà accesso all\'ultimo tratto, regolamentato a parte',
      'Sottovalutare il freddo in quota: alla stazione superiore della funivia (3.555 m) le temperature sono molto più basse che sulla costa, in ogni stagione',
      'Concentrarsi solo sulla costa sud e non vedere mai Anaga: è un ecosistema che non esiste altrove sull\'isola',
    ],
    luoghi: [
      {
        "nome": "Teide: funivia e vetta",
        "testo": "La funivia sale da 2.356 a 3.555 metri in circa otto minuti. L'ultimo tratto fino al cratere, a 3.715 metri, si fa a piedi in circa 40 minuti e richiede un permesso gratuito a numero chiuso. Oltre i 3.500 metri si sente la quota.",
        "come": "In auto da Costa Adeje in circa un'ora e mezza, da Puerto de la Cruz in un'ora e un quarto. La stazione di partenza ha un parcheggio gratuito.",
        "quando": "Prendere la prima corsa per evitare code e vento. Con vento forte la funivia si ferma. Controllare il meteo del giorno.",
        "tempo": "mezza giornata, il permesso per la vetta aggiunge 2 ore",
        "url": "https://www.volcanoteide.com/",
        "consiglio": "Comprare il biglietto online con l'orario e prenotare il permesso di vetta settimane prima: sono due cose separate."
      },
      {
        "nome": "Roques de García e Las Cañadas",
        "testo": "Formazioni di lava alte decine di metri nel cuore della caldera, con il Roque Cinchado come simbolo. Un sentiero circolare di circa 3,5 chilometri parte dal parcheggio. Dietro c'è il Teide.",
        "come": "Dal parcheggio ai piedi dei Roques, sulla TF-21, a pochi minuti dalla stazione della funivia. Sentiero segnato.",
        "quando": "Mattina o tramonto. A mezzogiorno il sole è forte e poca ombra.",
        "tempo": "1-2 ore",
        "consiglio": "Portare un giubbotto: a 2.200 metri il vento è freddo anche in luglio."
      },
      {
        "nome": "Parco Rurale di Anaga",
        "testo": "Montagne del nord-est con foresta di laurisilva nebbiosa, riserva della biosfera. I sentieri attraversano crinali, borghi e paesi isolati come Taganana e Chinamada.",
        "come": "In auto da Santa Cruz o La Laguna fino a Cruz del Carmen, circa 30 minuti, dove c'è il centro visitatori. Il bus 076 collega alcuni paesi.",
        "quando": "Mattina, con nebbia più rara. Con pioggia i sentieri sono fangosi.",
        "tempo": "mezza giornata o giornata",
        "url": "https://www.webtenerife.com/",
        "consiglio": "Fare il Sendero de los Sentidos o da Cruz del Carmen a Taganana con una navetta di ritorno organizzata."
      },
      {
        "nome": "La Laguna",
        "testo": "Antica capitale dell'isola, patrimonio UNESCO per il piano urbano regolare a scacchiera del 1500. Case coloniali con balconi di legno, chiese e cortili.",
        "come": "Dal tram di Santa Cruz in circa 35 minuti o in auto in 15. Si visita a piedi.",
        "quando": "Giorni feriali per la vita degli studenti. La sera ci sono bar e tapas.",
        "tempo": "2-3 ore",
        "consiglio": "Guardare nei patii delle case: molti hanno un giardino aperto al pubblico."
      },
      {
        "nome": "Masca",
        "testo": "Un villaggio a 600 metri in una gola profonda tra le montagne di Teno, con case di pietra e vista sull'oceano. Il barranco di Masca scende al mare con un sentiero di circa 5 chilometri.",
        "come": "Dalla strada TF-436 da Santiago del Teide, con curve strette. Il sentiero del barranco richiede una prenotazione online e un permesso: controllare il sito del Cabildo.",
        "quando": "Mattina, per evitare i pullman. Il sentiero è chiuso con pioggia o allerta.",
        "tempo": "1 ora al villaggio, mezza giornata per il sentiero",
        "consiglio": "Non fare il sentiero con scarpe da passeggio e portare un biglietto per la barca di ritorno."
      },
      {
        "nome": "Garachico",
        "testo": "Paese della costa nord distrutto dall'eruzione del 1706 che riempì il porto. Restano le piscine naturali di lava nere (El Caletón), il castello e una piazza con edifici barocchi.",
        "come": "In auto da Puerto de la Cruz in 45 minuti o da Santiago del Teide in 25. Si gira a piedi.",
        "quando": "Mattina o dopo il pranzo, con il mare calmo per le piscine.",
        "tempo": "2-3 ore",
        "consiglio": "Pranzo di pesce fresco vicino al molo."
      },
      {
        "nome": "Los Gigantes",
        "testo": "Falesie nere di 300-600 metri che cadono nell'Atlantico, sulla costa ovest. Le barche da Puerto de Los Gigantes portano alla base delle pareti, dove spesso si vedono delfini e globicefali.",
        "come": "In auto da Costa Adeje in 40 minuti. Le gite in barca partono dal porto di Puerto de Santiago.",
        "quando": "Mattina, con mare più calmo. Le barche escono tutto l'anno.",
        "tempo": "2-3 ore con gita in barca",
        "consiglio": "Scegliere operatori con licenza Barco Azul: seguono regole di distanza dagli animali."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina presto: funivia del Teide",
          "Roques de García a metà mattina",
          "Pranzo in quota o a Vilaflor",
          "Pomeriggio: tramonto da Las Cañadas"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Teide e Roques de García",
          "Giorno 2: Anaga al mattino, La Laguna nel pomeriggio, cena a Puerto de la Cruz"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Teide",
          "Giorno 2: Anaga e La Laguna",
          "Giorno 3: Masca, Garachico e Los Gigantes con gita in barca"
        ]
      }
    ],
    zone: [
      {
        "nome": "Puerto de la Cruz",
        "perChi": "chi vuole verde, passeggiate e meno resort",
        "testo": "Nord: più fresco e umido, giardini, vita di città. Il mare è meno adatto per nuotare. Vicino ad Anaga e al Teide."
      },
      {
        "nome": "Costa Adeje e Los Cristianos",
        "perChi": "chi vuole sole e spiagge",
        "testo": "Sud: più asciutto e caldo, tanti hotel, ristoranti, vita notturna. Meno carattere. Vicino all'aeroporto Sur."
      },
      {
        "nome": "La Laguna",
        "perChi": "studenti e chi va ad Anaga",
        "testo": "Città storica e vivace, più fresca e umida. Tram per Santa Cruz."
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
        "testo": "Riserva naturale di circa 400 ettari di dune di sabbia mobile sulla costa sud, con una laguna e una palmeria. Il paesaggio cambia con il vento. La spiaggia di Playa del Inglés è subito accanto.",
        "come": "Dal lungomare di Playa del Inglés o dal faro di Maspalomas si entra a piedi nelle dune. Bus dalla costa e da Las Palmas.",
        "quando": "Mattina presto o tramonto: a mezzogiorno il sole è forte e non c'è ombra.",
        "tempo": "2 ore",
        "consiglio": "Restare sui sentieri segnati: le dune sono protette e hanno aree con accesso limitato."
      },
      {
        "nome": "Roque Nublo",
        "testo": "Una roccia vulcanica di 80 metri, alta 1.813 metri sul livello del mare, simbolo dell'isola. I guanche la veneravano. Dalla cima si vedono il Teide di Tenerife nei giorni limpidi.",
        "come": "In auto fino al parcheggio de La Goleta, poi sentiero di circa 3 chilometri andata e ritorno. Da Las Palmas 1 ora e mezza.",
        "quando": "Mattina, prima delle nuvole. Il vento è freddo anche d'estate.",
        "tempo": "1 ora e mezza-2 ore a piedi",
        "url": "https://www.grancanaria.com/",
        "consiglio": "Non uscire dal sentiero segnato: le pareti vicino alla roccia cadono. Portare una felpa."
      },
      {
        "nome": "Vegueta, Las Palmas",
        "testo": "Il quartiere fondato nel 1478, con la Cattedrale di Santa Ana, la Casa de Colón con documenti del suo viaggio e il Mercado de Vegueta. Strade coloniali con balconi in legno.",
        "come": "Da Las Palmas centro in 10 minuti a piedi o da Las Canteras in bus. Parcheggio nei garage a pagamento.",
        "quando": "Mattina per il mercato. Molti musei sono chiusi la domenica pomeriggio.",
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
        "testo": "Un canyon di 15 chilometri nel sud-est con case-grotta abitate e antiche abitazioni dei guanche. Alcuni ristoranti sono scavati nella roccia.",
        "come": "In auto da Agüimes circa 20 minuti sulla GC-103. Si può camminare lungo il fondo.",
        "quando": "Mattina o pranzo. D'inverno nuvole possibili in alto.",
        "tempo": "2-3 ore",
        "consiglio": "Il centro visitatori in alto spiega le grotte. Pranzare in una grotta ristorante, ma prenotare."
      },
      {
        "nome": "Puerto de Mogán",
        "testo": "Villaggio-porto con canali, case bianche con bouganville e una spiaggia. È stato costruito negli anni Ottanta in stile locale e viene chiamato piccola Venezia.",
        "come": "In auto da Maspalomas in 40 minuti sulla GC-1 o con il bus. Il centro si gira a piedi.",
        "quando": "Il venerdì c'è il mercato. Il tramonto sul porto è tranquillo.",
        "tempo": "3 ore",
        "consiglio": "Il mercato del venerdì è affollato: arrivare entro le 10."
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
        "testo": "Il paesaggio di lava e cenere nato dalle eruzioni del 1730-1736. Si visita solo in autobus lungo la Ruta de los Volcanes, con commento registrato. All'Islote de Hilario dimostrazioni geotermiche: acqua versata in un tubo diventa vapore, cibo cotto sul calore del suolo.",
        "come": "In auto da Yaiza o Tinajo fino alla biglietteria. Il biglietto include il bus, circa 35 minuti. Non si scende.",
        "quando": "Arrivare presto: nel pomeriggio ci sono code. Controllare gli orari di apertura sul sito del parco.",
        "tempo": "1 ora e mezza-2 ore",
        "consiglio": "Il giro in dromedario è un'attività a parte con tariffa propria; chi non vuole può saltarlo."
      },
      {
        "nome": "Jameos del Agua",
        "testo": "Un tubo di lava sul mare trasformato da César Manrique negli anni Sessanta-Settanta in giardino, auditorium e laghetto naturale. Nel lago vive un piccolo granchio cieco bianco, il Munidopsis polymorpha.",
        "come": "In auto da Arrecife in 25 minuti sulla LZ-1, sulla costa nord. Si visita a piedi in un percorso circolare.",
        "quando": "Alla sera ci sono eventi: controllare il calendario sul sito. Di giorno prima delle 11 per evitare i gruppi.",
        "tempo": "1 ora e mezza",
        "url": "https://cactlanzarote.com/",
        "consiglio": "Non gettare monete nel lago: danneggiano i granchi. Il percorso si abbina bene con la Cueva de los Verdes, a pochi minuti."
      },
      {
        "nome": "Cueva de los Verdes",
        "testo": "Un tubo di lava lungo circa 7 chilometri, di cui si visita un tratto, formato dall'eruzione del vulcano La Corona. Si visita in 50 minuti con una guida, tra sale illuminate e giochi di luce.",
        "come": "In auto sulla LZ-1 vicino a Haría, a 10 minuti da Jameos del Agua. Visita guidata con gruppi a orari fissi.",
        "quando": "Tutto l'anno; dentro la temperatura è costante. Mattina per evitare gruppi.",
        "tempo": "50 minuti",
        "url": "https://cactlanzarote.com/",
        "consiglio": "Il percorso ha scale e un tratto basso: scarpe chiuse con suola grippante."
      },
      {
        "nome": "Mirador del Río",
        "testo": "Belvedere di Manrique incastonato in una scogliera a 475 metri sul mare, con vetrate sul braccio di mare El Río e l'isola di La Graciosa. Interni bianchi e curvi, bar con vista.",
        "come": "In auto dalla LZ-1 da Haría in 15 minuti, a nord.",
        "quando": "Mattina, con meno nuvole. In inverno cielo spesso coperto.",
        "tempo": "1 ora",
        "costo": "9 euro (CACT, 2026)",
        "url": "https://cactlanzarote.com/",
        "consiglio": "Ingresso gratuito fino ai 6 anni, secondo il sito ufficiale CACT."
      },
      {
        "nome": "Jardín de Cactus",
        "testo": "Ultima opera di Manrique, un anfiteatro di terrazze in una vecchia cava, con oltre mille specie di cactus. All'ingresso un mulino a vento del Settecento.",
        "come": "In auto da Arrecife a Guatiza, a nord, in 20 minuti. Si visita a piedi, in piano con qualche scala.",
        "quando": "Mattina, con luce più morbida. Aperto tutti i giorni.",
        "tempo": "1 ora",
        "url": "https://cactlanzarote.com/",
        "consiglio": "Sulla strada si passa per Guatiza e le sue piantagioni di fico d'India, dove si coltiva la cocciniglia."
      },
      {
        "nome": "La Geria",
        "testo": "Una conca di cenere vulcanica nera dove le viti crescono dentro buche scavate nella terra e protette da muretti a semicerchio. Qui nasce la malvasía volcánica. Si fermano le cantine lungo la LZ-30.",
        "come": "In auto sulla LZ-30 tra Yaiza e Mozaga, 20 minuti da Arrecife. Le cantine fanno degustazioni.",
        "quando": "Settembre per la vendemmia; negli altri mesi le cantine aprono di giorno.",
        "tempo": "2 ore",
        "consiglio": "Fermarsi nei punti panoramici e guidare piano: molti turisti si fermano sulla strada."
      },
      {
        "nome": "Playa Papagayo e Los Ajaches",
        "testo": "Calette di sabbia chiara e acqua turchese nel parco naturale di Los Ajaches, a sud. Papagayo è la più nota; le altre (Caleta del Congrio, Playa Mujeres) sono più tranquille.",
        "come": "In auto da Playa Blanca per 5 km di sterrato. L'accesso al parco è a pagamento. Si cammina dai parcheggi.",
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
