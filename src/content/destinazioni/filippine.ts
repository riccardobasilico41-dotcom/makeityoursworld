import type { Destinazione } from '@/lib/types'

// Destinazioni delle Filippine per la guida "filippine-itinerario" (74), costruite su
// ricerca documentale; tutte visitate dall'autore. miaEsperienza resta assente.
// Prezzi indicativi a ottobre 2026, in pesos filippini (PHP).

export const destinazioniFilippine: Destinazione[] = [
  {
    slug: 'el-nido',
    paeseSlug: 'filippine',
    ordine: 1,
    nome: 'El Nido',
    tipologia: ['mare', 'island hopping', 'lagune'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "El Nido è stata la prima tappa del mio viaggio nelle Filippine: van da Puerto Princesa, poi le lagune del Tour A, il Tour C e la spiaggia di Nacpan.",
    introduzione:
      'Nel nord di Palawan, una baia chiusa da falesie di calcare nero e l\'arcipelago di Bacuit, con lagune interne, spiagge e grotte raggiungibili solo in barca.',
    percheAndarci: 'Per le lagune di Miniloc, le isole di Bacuit e spiagge come Nacpan, tra i paesaggi marini più famosi dell\'Asia.',
    cosaVedere: [
      'La Big Lagoon a Miniloc (Tour A) e la Small Lagoon (Tour D)',
      'Hidden Beach, Secret Beach e Matinloc Shrine (Tour C)',
      'La spiaggia di Nacpan',
      'Il Taraw Cliff dalla Canopy Walk, la via ferrata sopra il paese',
    ],
    cosaFare: [
      'Island hopping con i tour A, B, C e D',
      'Kayak all\'interno delle lagune',
      'Spedizione in barca di più giorni fino a Coron',
    ],
    doveDormire:
      'Il paese (El Nido town) per prezzi e ristoranti, Corong-Corong per i tramonti e la calma, Nacpan e Lio per spiagge più tranquille. Economiche: ostelli e guesthouse in paese · fascia media: hotel a Corong-Corong · lusso: i resort privati di El Nido sulle isole.',
    doveMangiare: 'Pesce alla griglia e kinilaw (pesce crudo marinato nell\'aceto) in paese; adobo, sinigang e lechon nelle carinderie.',
    comeArrivare:
      'Voli Cebgo (ex AirSwift) sull\'aeroporto di Lio da Clark, Cebu, Coron, Caticlan e Bohol: dal 29 marzo 2026 non partono più da Manila. In alternativa volo su Puerto Princesa e van condiviso di circa 5-5,5 ore (circa 720-790 PHP, 2026); fast craft da Coron (circa 3,5 ore).',
    comeSpostarsi: 'Tricycle e scooter a noleggio; barche dei tour dal porto e da Corong-Corong.',
    periodoMigliore: 'da gennaio ad aprile; tra luglio e ottobre molti tour vengono annullati per il mare',
    costi:
      'Tassa ambientale (ETDF) 400 PHP valida 10 giorni; tour di island hopping 1.200-1.800 PHP a persona con pranzo, più gli ingressi dei siti (Big Lagoon e Small Lagoon 200 PHP ciascuna, a numero chiuso); kayak doppio 300-400 PHP a parte (prezzi indicativi, 2026). Budget giornaliero: basso circa 40-55 € con guesthouse in paese, un tour e carinderie; medio circa 90-140 € con hotel a Corong-Corong, tour, ingressi e ristoranti; alto oltre 450 € con resort su un\'isola privata.',
    erroriDaEvitare: [
      'Prenotare il Tour A all\'ultimo in alta stagione: gli ingressi alla Big Lagoon sono a fasce orarie limitate',
      'Arrivare senza contanti: le carte non sono accettate ovunque e nel fine settimana gli ATM restano spesso senza soldi',
    ],
    luoghi: [
      {
        "nome": "Tour A: Big Lagoon, Secret Lagoon e Shimizu",
        "testo": "Il giro delle lagune dell'isola di Miniloc. La Big Lagoon si attraversa in kayak tra pareti di calcare; la Secret Lagoon si raggiunge passando da un varco stretto nella roccia. Pranzo sulla spiaggia di Shimizu o di 7 Commando. Dal 2018 la Small Lagoon fa parte del Tour D: le due lagune non si possono visitare nello stesso giorno.",
        "lat": 11.15474,
        "lng": 119.32087,
        "come": "In bangka dal porto o da Corong-Corong con un operatore autorizzato. Il giro è organizzato: barca, guida, kayak e pranzo.",
        "quando": "Partenza al mattino. La Big Lagoon ha fasce orarie dalle 7 alle 16, con un massimo di 60 persone e 30 kayak per fascia, prenotate dalle agenzie: in alta stagione meglio fissare il tour con un giorno di anticipo. Da luglio a ottobre molte uscite vengono annullate per il mare.",
        "tempo": "una giornata",
        "costo": "Tour 1.200-1.500 PHP a persona con pranzo (circa 17-21 €); ingresso Big Lagoon 200 PHP (circa 3 €) e kayak doppio 300-400 PHP (circa 4-6 €) a parte; tassa ETDF 400 PHP (circa 6 €) se non già pagata (indicativo, 2026)",
        "consiglio": "Scarpe da scoglio, maschera propria e sacca impermeabile. Ai kayak conviene andare presto, prima delle altre barche."
      },
      {
        "nome": "Tour C: Hidden Beach, Secret Beach e Matinloc",
        "testo": "Il giro delle spiagge nascoste: Hidden Beach e Secret Beach si raggiungono nuotando o a piedi in acqua bassa, dentro pareti di roccia. Poi il santuario di Matinloc (ingresso facoltativo, circa 200 PHP) e Helicopter Island. È il giro più esposto al mare aperto e il primo a essere annullato quando il tempo peggiora.",
        "lat": 11.18984,
        "lng": 119.28221,
        "come": "In bangka con operatore autorizzato; pranzo a bordo o su una spiaggia.",
        "quando": "Mattina. Con il mare mosso il Tour C è il primo a saltare: meglio tenere un giorno di riserva.",
        "tempo": "una giornata",
        "costo": "Tour indicativamente 1.400-1.800 PHP a persona con pranzo, circa 20-25 € (indicativo, 2026)",
        "consiglio": "Il Tour D porta alla Small Lagoon e a Cadlao, il B a Pinagbuyutan e Snake Island: di solito sono meno affollati e si scelgono se A e C sono pieni."
      },
      {
        "nome": "Spiaggia di Nacpan",
        "testo": "Quattro chilometri di sabbia chiara e palme, a circa 17 km a nord del paese, unita a un'estremità alla spiaggia gemella di Calitang da una lingua di sabbia. È più calma delle spiagge del paese e adatta al tramonto.",
        "lat": 11.32215,
        "lng": 119.42838,
        "come": "In tricycle o scooter da El Nido, circa 45 minuti.",
        "quando": "Pomeriggio fino al tramonto.",
        "tempo": "mezza giornata",
        "costo": "Spiaggia gratuita; tricycle andata e ritorno con attesa 700-1.500 PHP a mezzo (circa 10-21 €), fino a circa quattro persone, da concordare prima (indicativo, 2026)",
        "consiglio": "Chiedere al tricycle di aspettare, perché al ritorno è difficile trovarne uno libero."
      },
      {
        "nome": "Taraw Cliff e Canopy Walk",
        "testo": "La parete di calcare sopra il paese, con la vista più ampia su El Nido e sulla baia di Bacuit. La salita libera fino alla cima è stata segnata da incidenti e la DENR, l'ente per l'ambiente, non ha autorizzato guide né operatori. L'alternativa ufficiale è la Canopy Walk (El Nido Via Ferrata): passerelle e ponti sospesi sulle rocce, da percorrere con imbrago, casco e guida compresi nel biglietto.",
        "lat": 11.17756,
        "lng": 119.39,
        "come": "Dall'ingresso della Canopy Walk in paese, a piedi; si sale in gruppo con l'imbrago fornito.",
        "quando": "Aperta di solito tutti i giorni dalle 8 alle 17; meglio presto o nel tardo pomeriggio, per il caldo.",
        "tempo": "circa 1 ora e mezza",
        "costo": "Canopy Walk circa 400-450 PHP, circa 6 € (indicativo, 2026)",
        "consiglio": "Scarpe con presa buona: la roccia è affilata e scivolosa se bagnata. Meglio rifiutare chi propone la salita alla cima per conto suo."
      },
      {
        "nome": "Tour B: Snake Island, Pinagbuyutan e le grotte",
        "testo": "Il giro del sud della baia di Bacuit. Snake Island è una lingua di sabbia sinuosa che con la bassa marea si allunga verso la costa e si guarda dall'alto da un piccolo belvedere. Il giro tocca anche la Cudugnon Cave, in cui si entra da un passaggio basso nella roccia, la Cathedral Cave vista dalla barca e l'isola di Pinagbuyutan. Di solito ha meno barche dei tour A e C.",
        "lat": 11.09528,
        "lng": 119.34091,
        "come": "In bangka dal porto o da Corong-Corong con un operatore autorizzato; barca, guida e pranzo compresi.",
        "quando": "Mattina, con la bassa marea per vedere bene la lingua di sabbia di Snake Island.",
        "tempo": "una giornata",
        "costo": "Tour indicativamente 1.200-1.800 PHP a persona con pranzo (circa 17-25 €), più la tassa ETDF se non già pagata (indicativo, 2026)",
        "consiglio": "Per la Cudugnon Cave servono scarpe da scoglio: l'ingresso è basso e la roccia scivolosa."
      },
      {
        "nome": "Tour D: Small Lagoon e Cadlao",
        "testo": "Dal 2018 è il giro della Small Lagoon di Miniloc, in cui si entra a nuoto o in kayak da un varco stretto nella roccia. Poi la laguna dell'isola di Cadlao, la grande isola davanti al paese, e spiagge riparate come Paradise Beach. È un giro corto e protetto, la scelta giusta quando il mare aperto è mosso.",
        "lat": 11.15671,
        "lng": 119.32096,
        "come": "In bangka da El Nido con un operatore autorizzato; kayak a noleggio alla laguna.",
        "quando": "Mattina. Anche la Small Lagoon è a fasce orarie e a numero chiuso: in alta stagione meglio prenotare il giorno prima.",
        "tempo": "una giornata",
        "costo": "Tour indicativamente 1.200-1.800 PHP a persona con pranzo (circa 17-25 €); ingresso Small Lagoon 200 PHP (circa 3 €) e kayak a parte (indicativo, 2026)"
      },
      {
        "nome": "Las Cabanas",
        "testo": "La spiaggia del tramonto, a sud di Corong-Corong, con bar sulla sabbia e la vista sulle isole della baia. Da qui parte una zipline che arriva sull'isolotto di Depeldet. Con la bassa marea si cammina a lungo sulla sabbia.",
        "lat": 11.14566,
        "lng": 119.39581,
        "come": "In tricycle da El Nido paese, circa 15 minuti.",
        "quando": "Tardo pomeriggio, per il tramonto.",
        "tempo": "2-3 ore",
        "consiglio": "Al ritorno, dopo il tramonto, i tricycle sono pochi: meglio accordarsi prima con lo stesso autista."
      },
      {
        "nome": "Corong-Corong",
        "testo": "Il lungomare a sud del paese, affacciato sulla baia di Bacuit, con hotel, ristoranti e alcune partenze dei tour in barca. Al tramonto il sole scende dietro le isole di fronte. È anche la zona più tranquilla per dormire vicino al paese.",
        "lat": 11.16515,
        "lng": 119.39849,
        "come": "A piedi o in tricycle dal paese, 5-10 minuti.",
        "quando": "Al tramonto.",
        "tempo": "1-2 ore"
      },
      {
        "nome": "Spiaggia di Lio",
        "testo": "Una spiaggia lunga e tranquilla vicino all'aeroporto, a nord del paese, dentro un quartiere turistico recente con hotel, negozi e ristoranti. L'acqua è bassa e calma, comoda per il bagno. È meno spettacolare di Nacpan ma molto più vicina.",
        "lat": 11.212,
        "lng": 119.4173,
        "come": "In tricycle o scooter da El Nido, circa 15-20 minuti.",
        "quando": "Mattina o pomeriggio, nei giorni in cui non si esce in barca.",
        "tempo": "mezza giornata"
      },
      {
        "nome": "Spiaggia di Duli",
        "testo": "Una baia ampia e poco frequentata sulla costa nord di El Nido, con sabbia chiara, palme e pochissime strutture. Con le condizioni giuste ci si fa surf, cosa rara da queste parti. È una meta per chi ha lo scooter e vuole una giornata lontano dai tour.",
        "lat": 11.35306,
        "lng": 119.46504,
        "come": "In scooter o tricycle da El Nido, circa un'ora di strada, con l'ultimo tratto sterrato.",
        "quando": "Con il tempo asciutto: dopo le piogge la strada sterrata diventa fangosa.",
        "tempo": "mezza giornata",
        "consiglio": "Portare acqua e contanti: sulla spiaggia i servizi sono pochissimi."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Tour A o C al mattino",
          "Pranzo sulla barca o su una spiaggia",
          "Tramonto a Corong-Corong"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Tour A con le lagune di Miniloc",
          "Giorno 2: Tour C, poi Nacpan in tricycle per il tramonto"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Tour A",
          "Giorno 2: Tour C e Nacpan",
          "Giorno 3: Tour D con la Small Lagoon, oppure giornata libera e Canopy Walk sul Taraw"
        ]
      }
    ],
    zone: [
      {
        "nome": "El Nido paese",
        "perChi": "prezzi e ristoranti",
        "testo": "Il centro per ostelli, guesthouse e locali, con i tour in partenza a piedi. È rumoroso la sera e la spiaggia è piccola.",
        "fascia": "20-40 €"
      },
      {
        "nome": "Corong-Corong",
        "perChi": "tramonti e calma",
        "testo": "A pochi minuti di tricycle dal paese, con hotel di fascia media sul mare e tramonti. Meno scelta di ristoranti.",
        "fascia": "60-110 €"
      },
      {
        "nome": "Nacpan e Lio",
        "perChi": "spiagge tranquille",
        "testo": "Più lontane dal paese, con spiagge larghe e poca vita serale. Servono tricycle o scooter per muoversi."
      },
      {
        "nome": "Isole di Bacuit",
        "perChi": "chi vuole spendere",
        "testo": "Resort su isole private dell'arcipelago, raggiungibili solo in barca. Tranquillità totale e lagune vicine, ma tutto è caro e i pasti si fanno nel resort.",
        "fascia": "oltre 400 €"
      }
    ],
    sapori: [
      {
        "nome": "Kinilaw",
        "testo": "Pesce crudo marinato nell'aceto con cipolla, zenzero e calamansi. Si mangia fresco nei locali sul mare e nelle carinderie del paese."
      },
      {
        "nome": "Pesce alla griglia",
        "testo": "Il pescato del giorno cotto alla brace, con riso. Nei ristoranti sulla spiaggia del paese a cena."
      },
      {
        "nome": "Adobo",
        "testo": "Pollo o maiale stufato in aceto, salsa di soia, aglio e alloro: il piatto nazionale. Nelle carinderie, le mense locali."
      },
      {
        "nome": "Sinigang",
        "testo": "Zuppa acida di tamarindo con verdure e maiale o gamberi. Nelle carinderie e nei ristoranti filippini."
      },
      {
        "nome": "Lechon",
        "testo": "Maiale arrostito intero, con la pelle croccante. Si trova a pezzi nelle carinderie e nei mercati."
      }
    ],
    attenzioni: [
      "Contanti: fuori dagli operatori più grandi le carte si accettano poco e nel fine settimana gli ATM del paese restano spesso senza soldi. Arrivare con i pesos già prelevati.",
      "Il prezzo del tour non include sempre la tassa ambientale (ETDF, 400 PHP, valida 10 giorni) e gli ingressi: chiedere cosa è compreso prima di pagare.",
      "Mare mosso: da luglio a ottobre le uscite in barca vengono sospese. Tenere un giorno di margine prima del volo.",
      "Salire solo su barche con giubbotti di salvataggio a bordo e rinunciare quando la guardia costiera sospende le partenze."
    ],
    gite: [
      {
        "nome": "Ille Cave e la valle di Dewil",
        "distanza": "circa 30-40 minuti di strada",
        "come": "In scooter o tricycle verso New Ibajay, a sud-est del paese.",
        "testo": "Una grotta-riparo nel calcare dove gli archeologi hanno trovato tracce di presenza umana molto antiche, in una valle di risaie e rocce. Si visita con una guida locale ed è un'alternativa al mare nei giorni senza barca."
      },
      {
        "nome": "Taytay",
        "distanza": "circa 1,5-2 ore di strada",
        "come": "In van o scooter lungo la strada per Puerto Princesa.",
        "testo": "Il vecchio capoluogo del nord di Palawan, con la fortezza spagnola di Santa Isabel affacciata sulla baia. Una sosta tranquilla, lontana dal giro dei tour."
      },
      {
        "nome": "Port Barton",
        "distanza": "circa 3-4 ore di strada",
        "come": "In van condiviso da El Nido; di solito ci si ferma almeno una notte.",
        "testo": "Un villaggio sul mare più quieto e meno caro di El Nido, con un suo giro di isole e reef. Si inserisce bene come sosta sulla strada per Puerto Princesa."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a El Nido?",
        "risposta": "Tre giorni bastano per il Tour A, il Tour C e Nacpan. Con quattro si aggiunge il Tour B o il D e resta un giorno di riserva se il mare blocca le barche."
      },
      {
        "domanda": "Quale tour scegliere tra A, B, C e D?",
        "risposta": "Il Tour A è quello delle lagune di Miniloc, il C quello delle spiagge nascoste ed è il più esposto al mare. Il B e il D hanno meno barche; il D porta alla Small Lagoon."
      },
      {
        "domanda": "Si possono vedere Big Lagoon e Small Lagoon nello stesso giorno?",
        "risposta": "No: dal 2018 la Big Lagoon fa parte del Tour A e la Small Lagoon del Tour D. Tutte e due sono a fasce orarie e a numero chiuso, e l'ingresso si prenota tramite l'agenzia."
      },
      {
        "domanda": "Quanto costa la tassa ambientale di El Nido?",
        "risposta": "L'ETDF costa 400 PHP (circa 6 €) a persona e vale 10 giorni. Si paga una volta sola: conviene tenere la ricevuta durante i tour."
      },
      {
        "domanda": "Come si va da El Nido a Coron?",
        "risposta": "Con il traghetto veloce, 3,5-4 ore, indicativamente 1.800-3.500 PHP (circa 25-50 €) secondo compagnia e classe. In alternativa, la spedizione in barca di 3-5 giorni tra le isole o un volo Cebgo."
      },
      {
        "domanda": "Quando è meglio andare a El Nido?",
        "risposta": "Da gennaio ad aprile il mare è più calmo. Tra luglio e ottobre molte uscite vengono annullate: chi va in quei mesi tiene almeno un giorno di margine."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: 'Falesie calcaree e acqua turchese nell\'arcipelago di Bacuit, El Nido',
    immagine: '/images/viaggi/filippine-itinerario/giorno-03-el-nido.jpg',
  },
  {
    slug: 'coron',
    paeseSlug: 'filippine',
    ordine: 2,
    nome: 'Coron',
    tipologia: ['mare', 'relitti', 'laghi'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono arrivato in traghetto da El Nido durante il viaggio nelle Filippine: il lago Kayangan, il Barracuda, le Twin Lagoon e un giorno tra relitti e isole di sabbia.",
    introduzione:
      'L\'isola di Coron e quella di Busuanga, a nord di Palawan: laghi d\'acqua dolce tra rocce calcaree, isolotti di sabbia bianca e una baia piena di relitti giapponesi del 1944.',
    percheAndarci: 'Per il lago Kayangan e il Barracuda, le Twin Lagoon e per le immersioni sui relitti della Seconda guerra mondiale.',
    cosaVedere: [
      'Il lago Kayangan e il suo belvedere',
      'Il lago Barracuda, con l\'acqua che cambia temperatura in profondità',
      'Le Twin Lagoon',
      'Le isole di Malcapuya, Banana e Bulog Dos',
      'Il monte Tapyas al tramonto',
    ],
    cosaFare: [
      'Immersioni sui relitti di Coron Bay (Okikawa Maru, Akitsushima, Irako)',
      'Snorkeling sul relitto Skeleton Wreck',
      'Le sorgenti calde di Maquinit la sera',
    ],
    doveDormire: 'Coron town per comodità; resort su isole private per chi vuole spendere.',
    comeArrivare:
      "Voli su Busuanga (aeroporto Francisco B. Reyes, 30-40 minuti da Coron town) da Manila, Clark e Cebu, e voli Cebgo da El Nido; dall'aeroporto van condivisi fino in città. Da El Nido c'è il fast craft (3,5-4 ore, indicativamente 1.800-3.500 PHP, circa 25-50 €, 2026), che parte al mattino e salta con il mare mosso.",
    comeSpostarsi: 'Tricycle in paese, barche dei tour dal porto.',
    periodoMigliore: 'da dicembre a maggio',
    costi:
      'Tour di island hopping indicativamente 1.000-1.500 PHP a persona con pranzo, più gli ingressi di ciascun sito, solo in contanti (Kayangan circa 300 PHP, Barracuda 200-250, Twin Lagoon 200); immersioni sui relitti con i centri diving di Coron town (prezzi indicativi, 2026). Budget giornaliero: basso circa 40-55 € con guesthouse in paese, un tour e carinderie; medio circa 90-130 € con hotel con piscina, tour e ingressi; alto oltre 300 € con resort su isola privata o giornate di immersioni.',
    erroriDaEvitare: [
      'Andare al Kayangan a metà mattina, quando arrivano tutte le barche insieme',
      'Fare immersioni nei relitti interni senza brevetto e formazione adeguati',
    ],
    luoghi: [
      {
        "nome": "Lago Kayangan",
        "testo": "Un lago d'acqua dolce e salmastra chiusa tra rocce calcaree, considerato tra i più puliti delle Filippine. Dal belvedere sulla scala d'ingresso si vede la baia: è l'immagine simbolo di Coron.",
        "lat": 11.95381,
        "lng": 120.22312,
        "come": "In barca nei tour di island hopping; dall'approdo una scalinata ripida fino al belvedere. Per nuotare nel lago il giubbotto di salvataggio è obbligatorio.",
        "quando": "Appena aperto o a fine giornata: a metà mattina arrivano tutte le barche insieme.",
        "tempo": "1 ora",
        "costo": "Ingresso circa 300 PHP (circa 4 €), in contanti e a parte rispetto al tour (indicativo, 2026)",
        "consiglio": "Chiedere all'operatore di invertire l'ordine delle tappe, per arrivare al Kayangan prima della folla."
      },
      {
        "nome": "Lago Barracuda",
        "testo": "Uno strato di acqua dolce sopra uno di acqua salata: verso i 14 metri di profondità l'acqua passa di colpo da circa 28 a circa 38 gradi. Si nuota tra pareti di roccia nera.",
        "lat": 11.95637,
        "lng": 120.21684,
        "come": "In barca nei tour; dall'approdo si scende alcuni gradini fino all'acqua.",
        "quando": "Mattina, con meno barche.",
        "tempo": "45 minuti",
        "costo": "Ingresso circa 200-250 PHP (circa 3-4 €), a parte (indicativo, 2026)"
      },
      {
        "nome": "Twin Lagoon",
        "testo": "Due lagune separate da una parete di roccia. Si passa dall'una all'altra a nuoto: con la bassa marea attraverso un varco stretto nella roccia, con l'alta marea passando sotto la parete.",
        "lat": 11.94775,
        "lng": 120.20956,
        "come": "In barca nei tour di island hopping.",
        "quando": "Presto, prima che arrivino le barche dei tour.",
        "tempo": "45 minuti",
        "costo": "Ingresso circa 200 PHP (circa 3 €), a parte (indicativo, 2026)"
      },
      {
        "nome": "Relitti giapponesi di Coron Bay",
        "testo": "Una decina di navi giapponesi affondate dagli aerei delle portaerei americane il 24 settembre 1944, oggi coperte di corallo. Tra le più note l'Okikawa Maru, l'Akitsushima e l'Irako. Lo Skeleton Wreck è a pochi metri di profondità e si vede anche in snorkeling.",
        "lat": 11.94129,
        "lng": 120.19193,
        "come": "Con i centri diving di Coron town, che organizzano uscite da due immersioni. Per i relitti profondi serve almeno il brevetto Advanced; le penetrazioni solo con formazione adeguata.",
        "tempo": "una giornata",
        "costo": "Due immersioni sui relitti indicativamente 4.000-5.500 PHP con attrezzatura, circa 56-77 € (indicativo, 2026)"
      },
      {
        "nome": "Monte Tapyas e sorgenti di Maquinit",
        "testo": "Oltre 700 gradini sopra la città per il belvedere sulla baia al tramonto. La sera, le sorgenti calde di Maquinit, vicino al mare: una delle poche sorgenti termali di acqua salata al mondo.",
        "lat": 12.00511,
        "lng": 120.20466,
        "come": "Tapyas si sale a piedi dalla città; Maquinit in tricycle.",
        "quando": "Tapyas al tramonto, Maquinit dopo cena o al tramonto.",
        "tempo": "2-3 ore in tutto",
        "costo": "Tapyas gratuito; Maquinit circa 300 PHP (circa 4 €); tricycle da concordare prima (indicativo, 2026)"
      },
      {
        "nome": "Isola di Malcapuya",
        "testo": "Un'isola di sabbia bianca e palme nel comune di Culion, a sud di Coron, con un reef per lo snorkeling davanti alla spiaggia. È la tappa principale del tour delle isole di sabbia, insieme a Banana Island e Bulog Dos. La traversata è lunga, ma l'acqua è tra le più chiare della zona.",
        "lat": 11.79065,
        "lng": 120.11484,
        "come": "In barca da Coron town con il tour delle isole di sabbia; ingresso all'isola a parte, in contanti.",
        "quando": "Partenza al mattino, con mare calmo.",
        "tempo": "una giornata con le altre isole",
        "costo": "Tour delle isole di sabbia indicativamente 2.000-2.800 PHP a persona, circa 28-39 €; ingressi delle isole a parte (indicativo, 2026)"
      },
      {
        "nome": "Banana Island",
        "testo": "Un isolotto con una spiaggia di sabbia chiara e un reef a pochi metri dalla riva, spesso tappa del pranzo nel tour delle isole di sabbia. Ci sono capanne all'ombra e qualche servizio. È adatta a chi vuole fare snorkeling senza allontanarsi dalla spiaggia.",
        "lat": 11.77067,
        "lng": 120.12684,
        "come": "In barca nel tour delle isole di sabbia, con Malcapuya e Bulog Dos.",
        "quando": "Mezzogiorno, come pausa del tour.",
        "tempo": "1-2 ore"
      },
      {
        "nome": "Bulog Dos",
        "testo": "Un isolotto con una lingua di sabbia che con la bassa marea si allunga nel mare. È la terza tappa del tour delle isole di sabbia. Non c'è quasi ombra.",
        "lat": 11.78197,
        "lng": 120.13463,
        "come": "In barca nel tour delle isole di sabbia.",
        "quando": "Con la bassa marea, quando la lingua di sabbia è scoperta.",
        "tempo": "1 ora",
        "consiglio": "Cappello e crema solare: sulla sabbia non c'è riparo."
      },
      {
        "nome": "CYC Beach",
        "testo": "Un isolotto con una piccola spiaggia e le mangrovie a pochi minuti di barca da Coron town. L'acqua è bassa, adatta a chi nuota poco, e spesso è la prima o l'ultima tappa dei tour. Comodo anche per mezza giornata se si ha poco tempo.",
        "lat": 11.96364,
        "lng": 120.18066,
        "come": "In barca nei tour di island hopping o con un barcaiolo dal porto.",
        "quando": "A fine giornata, al ritorno dal tour.",
        "tempo": "1 ora"
      },
      {
        "nome": "Siete Pecados",
        "testo": "Un parco marino di sette isolotti a pochi minuti di barca dal porto, con coralli e pesci a poca profondità. È lo snorkeling più vicino alla città e compare in molti tour. Con la corrente forte conviene restare vicini alla barca.",
        "lat": 11.98384,
        "lng": 120.22987,
        "come": "In barca dal porto di Coron town, da soli con un barcaiolo o dentro un tour; ingresso a parte, in contanti.",
        "quando": "Mattina, con poca corrente.",
        "tempo": "1-2 ore"
      },
      {
        "nome": "Lusong Gunboat e Coral Garden",
        "testo": "Una cannoniera giapponese affondata in acqua bassa vicino all'isola di Lusong: con la bassa marea la poppa arriva quasi in superficie e si vede bene in snorkeling. Accanto c'è un giardino di coralli poco profondo. Di solito si visita nello stesso giro dello Skeleton Wreck.",
        "lat": 11.97925,
        "lng": 120.01961,
        "come": "In barca da Coron town, nei tour dei relitti o di snorkeling.",
        "quando": "Con la bassa marea, quando il relitto è più vicino alla superficie.",
        "tempo": "1 ora"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Island hopping classico: Kayangan, Barracuda, Twin Lagoon",
          "Tramonto dal monte Tapyas"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Kayangan, Barracuda e Twin Lagoon",
          "Giorno 2: relitti in immersione o snorkeling allo Skeleton Wreck, poi Maquinit la sera"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: tour dei laghi",
          "Giorno 2: relitti",
          "Giorno 3: isole di sabbia (Malcapuya, Banana, Bulog Dos) e Tapyas al tramonto"
        ]
      }
    ],
    zone: [
      {
        "nome": "Coron town",
        "perChi": "comodità",
        "testo": "Hotel e guesthouse vicino a porto, ristoranti e centri diving. È caotica e rumorosa, ma comoda per i tour.",
        "fascia": "20-90 €"
      },
      {
        "nome": "Isole private",
        "perChi": "chi vuole spendere",
        "testo": "Resort su isole vicine, con trasferimento in barca. Isolati e tranquilli, ma tutto costa di più."
      },
      {
        "nome": "Busuanga, fuori città",
        "perChi": "chi cerca isolamento",
        "testo": "Pochi resort tra baie e mangrovie lungo la costa di Busuanga, più vicini all'aeroporto e alla strada per Calauit. Servono un'auto o i transfer del resort per qualsiasi spostamento."
      }
    ],
    sapori: [
      {
        "nome": "Kinilaw",
        "testo": "Pesce crudo in aceto e calamansi, nei locali del lungomare."
      },
      {
        "nome": "Tinola",
        "testo": "Brodo di pollo con zenzero, papaya verde e foglie di peperoncino. Nelle carinderie."
      },
      {
        "nome": "Pesce e frutti di mare alla griglia",
        "testo": "Granchi, gamberi e pesce del giorno alla brace, nei ristoranti sul mare. Chiedere il prezzo al peso prima di ordinare."
      },
      {
        "nome": "Pranzo dei tour",
        "testo": "Sulle barche del tour il pranzo è di solito riso con pesce o pollo grigliato e frutta, servito sulla spiaggia."
      }
    ],
    attenzioni: [
      "Il Kayangan a metà mattina è affollatissimo: arrivare presto o a fine giornata.",
      "Immersioni nei relitti interni senza brevetto e formazione adeguati: pericolose.",
      "Gli ingressi dei siti non sono sempre compresi nel prezzo del tour: chiedere prima e tenere tagli piccoli, perché si pagano solo in contanti.",
      "Traghetti da e per El Nido annullati con il mare mosso: tenere un giorno di margine."
    ],
    gite: [
      {
        "nome": "Calauit Safari Park",
        "distanza": "circa 3 ore di strada o di barca",
        "come": "Con un tour organizzato da Coron town, di solito di un giorno intero.",
        "testo": "Una riserva nel nord di Busuanga creata nel 1977, dove vivono giraffe e zebre portate dal Kenya e animali delle Calamian come il cervo di Calamian. Il viaggio è lungo, adatto a chi ha un giorno in più."
      },
      {
        "nome": "Culion",
        "distanza": "circa 1,5-2 ore di barca",
        "come": "In barca da Coron town, con un tour o noleggiando una bangka.",
        "testo": "L'isola che dal 1906 ospitò il più grande lebbrosario dell'Asia, oggi un paese tranquillo con il museo che ne racconta la storia e la chiesa sulla collina affacciata sul mare."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Coron?",
        "risposta": "Tre giorni: uno per i laghi Kayangan e Barracuda e le Twin Lagoon, uno per i relitti e uno per le isole di sabbia. Con meno tempo si sceglie il tour dei laghi."
      },
      {
        "domanda": "Gli ingressi sono compresi nel prezzo del tour?",
        "risposta": "Spesso no. Kayangan, Barracuda, Twin Lagoon e le isole si pagano a parte, solo in contanti: conviene chiedere prima e tenere banconote piccole."
      },
      {
        "domanda": "Serve il brevetto per vedere i relitti?",
        "risposta": "Per lo Skeleton Wreck e la Lusong Gunboat basta lo snorkeling, perché sono in acqua bassa. Per i relitti profondi serve almeno il brevetto Advanced, e per entrare negli scafi una formazione specifica."
      },
      {
        "domanda": "Come si evita la folla al lago Kayangan?",
        "risposta": "Arrivando appena apre o a fine giornata. Si può chiedere all'operatore di invertire l'ordine delle tappe."
      },
      {
        "domanda": "Come si arriva a Coron da El Nido?",
        "risposta": "Con il traghetto veloce, 3,5-4 ore, che parte al mattino e salta con il mare mosso, oppure con un volo Cebgo su Busuanga. Conviene tenere un giorno di margine."
      },
      {
        "domanda": "Dove conviene dormire a Coron?",
        "risposta": "A Coron town, vicino al porto da cui partono i tour e ai centri diving. I resort sulle isole sono più tranquilli ma più cari e lontani da tutto."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: 'Le scogliere calcaree dell\'isola di Coron che scendono nell\'acqua turchese',
    immagine: '/images/viaggi/filippine-itinerario/giorno-06-coron.jpg',
  },
  {
    slug: 'cebu-moalboal',
    paeseSlug: 'filippine',
    ordine: 3,
    nome: 'Cebu e Moalboal',
    tipologia: ['mare', 'immersioni', 'canyoning'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "A Moalboal ci sono stato durante il viaggio nelle Filippine, con base a Panagsama Beach, tra le sardine e le tartarughe. Per il canyoning di Kawasan siamo partiti al mattino presto, per evitare la folla.",
    introduzione:
      'La costa sud-occidentale dell\'isola di Cebu, con la barriera di Panagsama Beach a Moalboal, le cascate di Kawasan a Badian e la città di Cebu come snodo dei voli.',
    percheAndarci:
      'Per nuotare in mezzo a un banco di milioni di sardine a pochi metri dalla riva, per le tartarughe marine e per il canyoning nelle gole di Kawasan.',
    cosaVedere: [
      'Il banco di sardine di Panagsama Beach',
      'Pescador Island, in barca',
      'Le cascate di Kawasan',
      'White Beach a Moalboal',
    ],
    cosaFare: [
      'Snorkeling dalla riva con le sardine e le tartarughe',
      'Canyoning nelle gole di Kawasan',
      'Immersioni a Pescador Island',
    ],
    doveDormire: 'Panagsama Beach a Moalboal, con guesthouse e resort piccoli direttamente sul reef.',
    comeArrivare:
      "Aeroporto di Mactan-Cebu, poi circa 105 km verso sud. Il bus Ceres parte dal South Bus Terminal di Cebu e impiega circa 4 ore (meno di 250 PHP, circa 3,50 €); in auto privata servono circa 3 ore, indicativamente 3.000-4.000 PHP (circa 42-56 €), secondo il traffico (2026). Da Moalboal si continua verso Bohol in traghetto da Cebu.",
    comeSpostarsi: 'Tricycle e scooter; barche per Pescador.',
    periodoMigliore: 'da dicembre a maggio',
    costi: 'Canyoning a Kawasan circa 2.000 PHP a persona con guida, più circa 100 PHP di navetta obbligatoria; snorkeling dalla riva gratuito, si paga solo il noleggio dell\'attrezzatura (prezzi indicativi, 2026). Budget giornaliero: basso circa 35-50 € con guesthouse a Panagsama, snorkeling dalla riva e carinderie; medio circa 70-110 € con resort sul reef, canyoning o immersioni; alto oltre 150 € con resort con diving e auto privata.',
    erroriDaEvitare: [
      'Andare a Oslob a nuotare con gli squali balena: gli animali vengono nutriti per tenerli sul posto, e i biologi marini criticano questa pratica',
      'Toccare le tartarughe o inseguirle in acqua',
    ],
    luoghi: [
      {
        "nome": "Banco di sardine di Panagsama Beach",
        "testo": "Milioni di sardine che si muovono come un'unica nube a pochi metri dalla riva. Ci si nuota in mezzo con maschera e pinne, senza barca. Lungo lo stesso reef si incontrano spesso tartarughe marine.",
        "lat": 9.94663,
        "lng": 123.36615,
        "come": "Si entra dalla spiaggia di Panagsama: il banco è a poche decine di metri dalla riva. Maschera e pinne si noleggiano nei diving.",
        "quando": "Mattina presto, con la luce migliore e meno gente.",
        "tempo": "1-2 ore",
        "costo": "Gratuito; si paga solo il noleggio di maschera e pinne",
        "consiglio": "Non toccare né inseguire le tartarughe, e non calciare: il banco si disperde."
      },
      {
        "nome": "Pescador Island",
        "testo": "Un isolotto a circa 3 km dalla costa, il sito d'immersione più noto di Moalboal, con un muro di corallo che scende fino a circa 40 metri e una grotta sottomarina chiamata la Cattedrale. Intorno si incontrano spesso le tartarughe e in superficie si fa snorkeling sul reef. È la seconda uscita classica di Moalboal dopo le sardine.",
        "lat": 9.92303,
        "lng": 123.34346,
        "come": "In barca da Panagsama Beach.",
        "quando": "Pomeriggio o mattina, con mare calmo.",
        "tempo": "mezza giornata",
        "costo": "Barca indicativamente 1.500-2.500 PHP a barca, circa 21-35 € (indicativo, 2026)"
      },
      {
        "nome": "Canyoning alle cascate di Kawasan",
        "testo": "Si scende la gola del fiume Matutinao per alcune ore, tra salti dalle rocce (quelli alti sono facoltativi), scivoli naturali e tratti a nuoto, fino alle cascate color turchese. Nel 2023 la Provincia di Cebu ha revocato i permessi agli operatori senza licenza: si va solo con guide autorizzate.",
        "lat": 9.802,
        "lng": 123.37394,
        "come": "Da Moalboal a Badian, circa 20 km, in 30-40 minuti. Si va con una guida, con casco e giubbotto.",
        "quando": "Partire presto per evitare la folla.",
        "tempo": "mezza giornata o poco più",
        "costo": "Circa 2.000 PHP a persona (circa 28 €) con guida, casco e giubbotto, più circa 100 PHP di navetta obbligatoria; i pacchetti con transfer costano di più (indicativo, 2026)",
        "consiglio": "Scarpe chiuse da acqua e niente oggetti di valore."
      },
      {
        "nome": "White Beach",
        "testo": "La spiaggia di sabbia chiara di Basdaku, a nord di Panagsama, più larga e più comoda per fare il bagno. Ci sono chioschi e qualche ristorante sulla sabbia. È il posto giusto per il pomeriggio libero dopo il canyoning.",
        "lat": 9.98542,
        "lng": 123.36891,
        "come": "In tricycle o scooter da Panagsama.",
        "tempo": "un pomeriggio"
      },
      {
        "nome": "Basilica del Santo Niño",
        "testo": "La chiesa più importante di Cebu, costruita dove nel 1565 gli spagnoli ritrovarono la statuetta del Santo Niño, il Bambino Gesù donato da Magellano nel 1521. È il cuore della festa del Sinulog, a gennaio, e anche nei giorni normali è piena di fedeli. Accanto c'è un piccolo museo.",
        "lat": 10.29389,
        "lng": 123.90139,
        "come": "Nel centro storico di Cebu città, a piedi dalla Croce di Magellano e dal Fort San Pedro.",
        "quando": "Mattina presto, prima del caldo; la domenica e a gennaio c'è moltissima gente.",
        "tempo": "45 minuti",
        "consiglio": "Spalle e ginocchia coperte. Durante le messe si visita in silenzio."
      },
      {
        "nome": "Croce di Magellano",
        "testo": "Il padiglione davanti alla basilica che custodisce la croce piantata dagli spagnoli all'arrivo di Magellano a Cebu, nel 1521. Secondo la tradizione la croce originale è racchiusa in quella di legno visibile oggi. Il soffitto è dipinto con la scena del primo battesimo.",
        "lat": 10.29354,
        "lng": 123.90195,
        "come": "A piedi nel centro storico, accanto alla basilica.",
        "tempo": "15 minuti"
      },
      {
        "nome": "Fort San Pedro",
        "testo": "Il forte triangolare costruito dagli spagnoli a partire dal 1565, considerato il più antico delle Filippine, vicino al porto. Dentro ci sono un piccolo museo e un giardino, e dalle mura si vede il lungomare. Si gira in poco tempo.",
        "lat": 10.29222,
        "lng": 123.90583,
        "come": "A piedi dalla basilica, circa 10 minuti, o in Grab.",
        "quando": "Mattina o tardo pomeriggio.",
        "tempo": "45 minuti"
      },
      {
        "nome": "Osmeña Peak",
        "testo": "Il punto più alto dell'isola di Cebu, poco più di 1.000 metri, sopra Dalaguete: una cresta di colline appuntite e prati da cui nelle giornate chiare si vedono entrambe le coste. La salita dall'ultimo villaggio è breve. All'alba c'è spesso un mare di nuvole sotto la cima.",
        "lat": 9.82015,
        "lng": 123.44235,
        "come": "Da Moalboal in auto o scooter verso Dalaguete, attraverso le montagne; dall'ultimo villaggio si sale a piedi, di solito con una guida locale.",
        "quando": "All'alba, prima delle nuvole e del caldo.",
        "tempo": "mezza giornata con il viaggio",
        "consiglio": "Partire con il buio richiede una guida o un autista che conosca la strada di montagna."
      },
      {
        "nome": "Spiaggia di Lambug",
        "testo": "Una spiaggia lunga di sabbia chiara a Badian, a sud di Moalboal, con acqua calma e poche strutture. È la spiaggia più comoda dopo il canyoning di Kawasan.",
        "lat": 9.85717,
        "lng": 123.36814,
        "come": "In scooter o tricycle da Moalboal, circa 30 minuti; si combina con Kawasan.",
        "quando": "Pomeriggio.",
        "tempo": "2-3 ore"
      },
      {
        "nome": "Cascate di Mantayupan",
        "testo": "Una delle cascate più alte dell'isola di Cebu, a Barili, a nord di Moalboal, in una gola verde con piscine naturali alla base. È molto meno affollata di Kawasan.",
        "lat": 10.10092,
        "lng": 123.53577,
        "come": "In scooter o auto da Moalboal, circa un'ora; dall'ingresso si scende a piedi su un sentiero con gradini.",
        "quando": "Mattina, dopo qualche giorno di pioggia la portata è maggiore.",
        "tempo": "2 ore"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Sardine all'alba dalla riva",
          "Barca a Pescador",
          "Tramonto a Panagsama"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: sardine, tartarughe e Pescador",
          "Giorno 2: canyoning a Kawasan e White Beach"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: sardine e tartarughe",
          "Giorno 2: Kawasan",
          "Giorno 3: immersioni a Pescador"
        ]
      }
    ],
    zone: [
      {
        "nome": "Panagsama Beach",
        "perChi": "chi vuole stare sul reef",
        "testo": "Guesthouse e piccoli resort con il reef sotto i ristoranti. È la base più comoda per sardine e immersioni; di sera è vivace.",
        "fascia": "20-80 €"
      },
      {
        "nome": "Badian",
        "perChi": "chi vuole Kawasan vicino",
        "testo": "Più a sud, vicino alle cascate. Meno servizi e meno vita serale."
      },
      {
        "nome": "White Beach (Basdaku)",
        "perChi": "spiaggia per il bagno",
        "testo": "A nord di Panagsama, con resort sulla sabbia e il mare più comodo per nuotare. Per sardine e ristoranti serve il tricycle."
      },
      {
        "nome": "Cebu città",
        "perChi": "voli e notte di passaggio",
        "testo": "Hotel vicino all'aeroporto di Mactan o in centro per chi arriva tardi o riparte presto. Il traffico verso Moalboal va calcolato con margine."
      }
    ],
    sapori: [
      {
        "nome": "Lechon di Cebu",
        "testo": "Maiale arrosto con erbe nel ventre e pelle croccante, la specialità dell'isola. Si compra a porzioni nei mercati e nelle carinderie."
      },
      {
        "nome": "Puso",
        "testo": "Riso cotto in una foglia di cocco intrecciata, a forma di rombo. Si vende accanto ai grill di strada."
      },
      {
        "nome": "Danggit",
        "testo": "Pesce secco fritto, croccante, servito a colazione con aceto e riso all'aglio."
      },
      {
        "nome": "Mango secco",
        "testo": "Un souvenir di Cebu, in confezioni in tutti i negozi."
      }
    ],
    attenzioni: [
      "Oslob e gli squali balena: gli animali vengono nutriti per tenerli vicino alla riva, una pratica criticata dai biologi marini. Meglio evitarla.",
      "Non toccare né inseguire le tartarughe in acqua.",
      "Scooter: la causa più comune di incidenti tra i turisti. Casco e niente guida di notte.",
      "Taxi all'aeroporto di Manila (NAIA): i reclami riguardano soprattutto i taxi bianchi che non accendono il tassametro e chiedono un prezzo fisso. Usare Grab dalla zona di ritiro segnalata, i taxi gialli con tassametro o i taxi a coupon dal banco ufficiale, mai chi avvicina tra la folla.",
      "eTravel: entro le 72 ore prima dell'arrivo nelle Filippine va compilato il modulo gratuito su etravel.gov.ph, che genera il QR richiesto all'imbarco e all'arrivo. I siti che lo fanno pagare non sono ufficiali."
    ],
    gite: [
      {
        "nome": "Cascate di Tumalog",
        "distanza": "circa 2 ore di strada",
        "come": "In auto o scooter verso Oslob, sulla costa orientale; dall'ingresso navetta o discesa a piedi.",
        "testo": "Una cascata a velo che scende su una parete di muschio in una pozza bassa. È a Oslob, ma si può visitare senza partecipare all'incontro con gli squali balena nutriti."
      },
      {
        "nome": "Isola di Sumilon",
        "distanza": "circa 2 ore di strada più 15 minuti di barca",
        "come": "In auto fino a Oslob, poi in barca.",
        "testo": "Un'isola davanti a Oslob con uno dei primi santuari marini delle Filippine, una lingua di sabbia e un reef per lo snorkeling. Una giornata lunga, da combinare con Tumalog."
      }
    ],
    faq: [
      {
        "domanda": "Le sardine di Moalboal ci sono tutto l'anno?",
        "risposta": "Di solito sì, a poche decine di metri dalla riva di Panagsama. Il banco però si sposta lungo il reef e in alcuni giorni è più piccolo o più lontano."
      },
      {
        "domanda": "Serve una barca per vedere le sardine?",
        "risposta": "No: si entra dalla spiaggia con maschera e pinne. La barca serve solo per Pescador Island."
      },
      {
        "domanda": "Il canyoning di Kawasan si può fare da soli?",
        "risposta": "No: dal 2023 la Provincia di Cebu permette il canyoning solo con operatori e guide autorizzati, con casco e giubbotto. Il prezzo è di circa 2.000 PHP (circa 28 €) a persona più la navetta."
      },
      {
        "domanda": "Conviene nuotare con gli squali balena a Oslob?",
        "risposta": "È sconsigliato: gli animali vengono nutriti ogni giorno per tenerli vicino alla riva, una pratica criticata dai biologi marini. Tumalog e Sumilon, nella stessa zona, si visitano senza."
      },
      {
        "domanda": "Come si va da Moalboal a Bohol?",
        "risposta": "Si torna a Cebu città e si prende il traghetto veloce OceanJet per Tagbilaran, circa 2 ore. In alternativa da Oslob parte una bangka per Panglao, circa 1.000 PHP (circa 14 €), con una sola partenza al giorno."
      },
      {
        "domanda": "Quanti giorni servono a Moalboal?",
        "risposta": "Due giorni per sardine, Pescador e Kawasan; tre per aggiungere le immersioni o Osmeña Peak all'alba."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: 'L\'isolotto di Pescador davanti a Moalboal, circondato dal reef',
    immagine: '/images/viaggi/filippine-itinerario/giorno-08-cebu-moalboal.jpg',
  },
  {
    slug: 'bohol',
    paeseSlug: 'filippine',
    ordine: 4,
    nome: 'Bohol e Panglao',
    tipologia: ['paesaggio', 'mare', 'natura'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono stato durante il viaggio nelle Filippine, con base a Panglao: le Chocolate Hills, i tarsi e il fiume Loboc, poi Balicasag e Virgin Island in barca.",
    introduzione:
      'Un\'isola delle Visayas centrali con le colline coniche delle Chocolate Hills, i tarsi nella foresta e l\'isola di Panglao, collegata da un ponte, con le spiagge e i reef di Balicasag.',
    percheAndarci: 'Per le Chocolate Hills, il tarsio delle Filippine, il fiume Loboc e lo snorkeling a Balicasag.',
    cosaVedere: [
      'Le Chocolate Hills dal belvedere di Carmen',
      'Il Philippine Tarsier Sanctuary di Corella',
      'Il fiume Loboc',
      'Le chiese coloniali di Baclayon e Loboc',
      'Balicasag e Virgin Island in barca da Panglao',
    ],
    cosaFare: ['Giro dell\'isola in scooter o con autista', 'Snorkeling o immersioni a Balicasag', 'Uscita all\'alba per i delfini'],
    doveDormire: 'Panglao, ad Alona Beach o nelle baie più tranquille di Dumaluan e Doljo.',
    comeArrivare:
      "Il traghetto veloce OceanJet collega Cebu a Tagbilaran in circa 2 ore, indicativamente 880-1.000 PHP (circa 12-14 €) in classe turistica nel 2026, con tariffe che cambiano per il supplemento carburante. In alternativa si vola sull'aeroporto di Panglao. Da Oslob parte una bangka per Panglao, circa 1.000 PHP, una volta al giorno.",
    comeSpostarsi: 'Scooter, tricycle o auto con autista per la giornata.',
    periodoMigliore: 'da dicembre a maggio',
    costi:
      'Chocolate Hills: tariffa alla biglietteria, perché l\'aumento a 150 PHP per gli adulti è sospeso; biglietto d\'ingresso al santuario dei tarsi; auto con autista e barche per Balicasag da concordare prima, con le tasse dei siti marini in contanti (2026). Budget giornaliero: basso circa 35-50 € con guesthouse ad Alona e carinderie; medio circa 80-130 € con resort a Dumaluan, autista per l\'interno e barca; alto oltre 200 € con i grandi resort di Panglao.',
    erroriDaEvitare: [
      'Visitare i tarsi nei finti «santuari» lungo la strada: sono animali notturni e le visite li stressano; il centro di Corella è quello gestito dalla fondazione',
      'Usare il flash con i tarsi',
    ],
    luoghi: [
      {
        "nome": "Chocolate Hills",
        "testo": "Colline coniche di calcare coperte d'erba, 1.776 secondo il decreto che le ha protette nel 1997, sparse tra Carmen, Batuan e Sagbayan. Tra marzo e maggio l'erba secca diventa marrone, da qui il nome; da giugno torna verde. Si guardano dall'alto, dalla terrazza del complesso di Carmen.",
        "lat": 9.79877,
        "lng": 124.16734,
        "come": "In auto con autista dal giro dell'interno, Carmen è a circa 55 km da Tagbilaran. Una scalinata di 214 gradini porta al belvedere.",
        "quando": "Tardo pomeriggio, con la luce più morbida; a metà mattina la terrazza è affollata.",
        "tempo": "1 ora",
        "costo": "Ingresso in contanti, tariffa alla biglietteria: l'aumento a 150 PHP per gli adulti previsto da un'ordinanza di Carmen è sospeso da settembre 2025, senza una nuova data (2026)"
      },
      {
        "nome": "Philippine Tarsier Sanctuary di Corella",
        "testo": "Un santuario nella foresta gestito dalla Philippine Tarsier Foundation, dove si vede il tarsio delle Filippine, uno dei primati più piccoli del mondo, animale notturno che di giorno dorme.",
        "lat": 9.69153,
        "lng": 123.95256,
        "come": "In auto con autista nello stesso giro dell'interno; si cammina in silenzio su un sentiero.",
        "quando": "Mattina, quando gli animali dormono.",
        "tempo": "45 minuti",
        "costo": "Biglietto d'ingresso: tariffa alla biglietteria",
        "consiglio": "Niente flash e voce bassa. Evitare i finti santuari lungo la strada con tarsi in gabbia."
      },
      {
        "nome": "Fiume Loboc e chiese coloniali",
        "testo": "Il fiume Loboc è famoso per le crociere con pranzo, tra palme e acqua verde: una tappa molto turistica, ma rilassante dopo le colline. Sulla stessa strada ci sono due chiese coloniali dei gesuiti: quella di Loboc, ricostruita nel Settecento dopo l'incendio del 1638, e quella di Baclayon, in pietra di corallo, consacrata nel 1727 nel più antico insediamento cristiano di Bohol.",
        "lat": 9.63642,
        "lng": 124.03094,
        "come": "Nel giro dell'interno con autista.",
        "tempo": "1-2 ore"
      },
      {
        "nome": "Balicasag e Virgin Island",
        "testo": "Balicasag è un santuario marino: il reef poco profondo finisce in pareti che scendono oltre i 30 metri, con tartarughe e banchi di pesci, ottimo per snorkeling e immersioni. Virgin Island è una lingua di sabbia che emerge con la bassa marea. Molti tour partono all'alba per avvistare i delfini, che però non sono garantiti.",
        "lat": 9.51729,
        "lng": 123.68438,
        "come": "In barca da Panglao, con partenza all'alba per i delfini.",
        "quando": "Partenza all'alba; Virgin Island con la bassa marea.",
        "tempo": "mezza giornata",
        "costo": "Barca indicativamente 1.500-2.500 PHP a barca (circa 21-35 €); a parte, in contanti, la tassa del santuario, la barchetta obbligatoria per Balicasag e lo sbarco a Virgin Island (indicativo, 2026)"
      },
      {
        "nome": "Alona Beach",
        "testo": "La spiaggia più animata di Panglao, con sabbia chiara, ristoranti sulla riva e centri diving. Da qui partono all'alba le barche per i delfini, Balicasag e Virgin Island. La sera si cena con il pesce alla griglia sulla sabbia.",
        "lat": 9.54845,
        "lng": 123.77339,
        "come": "In tricycle o scooter da qualsiasi punto di Panglao; da Tagbilaran circa 30-40 minuti.",
        "quando": "Mattina presto o al tramonto; a metà giornata la spiaggia è piena di barche.",
        "tempo": "mezza giornata"
      },
      {
        "nome": "Spiaggia di Dumaluan",
        "testo": "Una spiaggia lunga e più tranquilla di Alona, a est, con sabbia fine e acqua bassa. Ci sono alcuni resort sulla sabbia. È la scelta per un pomeriggio di bagno senza folla.",
        "lat": 9.55943,
        "lng": 123.80771,
        "come": "In tricycle o scooter da Alona, circa 10 minuti.",
        "quando": "Pomeriggio, con l'alta marea per nuotare.",
        "tempo": "mezza giornata"
      },
      {
        "nome": "Grotta di Hinagdanan",
        "testo": "Una grotta di calcare a Dauis, sull'isola di Panglao, con una pozza d'acqua sotterranea illuminata dai fori della volta. Si scende per una scala, da cui viene il nome. Ci si può fare il bagno.",
        "lat": 9.62528,
        "lng": 123.80111,
        "come": "In tricycle o scooter da Alona o da Tagbilaran, circa 20-30 minuti.",
        "quando": "Mattina, prima dei gruppi.",
        "tempo": "45 minuti"
      },
      {
        "nome": "Foresta di mogani di Bilar",
        "testo": "Circa due chilometri di strada tra Loboc e Bilar che attraversano una foresta di mogani piantata per rimboschire la zona. Gli alberi alti e fitti fanno ombra sulla strada: molti si fermano per qualche foto. Si attraversa sulla strada per le Chocolate Hills.",
        "lat": 9.68479,
        "lng": 124.08055,
        "come": "In auto con autista o scooter, nel giro dell'interno.",
        "quando": "Di giorno, sulla strada tra Loboc e Carmen.",
        "tempo": "15-30 minuti",
        "consiglio": "Fermarsi solo a bordo strada, fuori dalla carreggiata: passano camion e bus."
      },
      {
        "nome": "Ponte sospeso di Sipatan",
        "testo": "Due ponti sospesi di bambù e corda sul fiume Loboc, nell'interno dell'isola, che si attraversano a piedi tra le assi che oscillano. È una tappa breve del giro dell'interno, con bancarelle di frutta all'uscita.",
        "lat": 9.67534,
        "lng": 124.04784,
        "come": "In auto con autista nel giro dell'interno, sulla strada tra Loboc e Bilar.",
        "tempo": "20-30 minuti"
      },
      {
        "nome": "Chiesa di Dauis",
        "testo": "La chiesa dell'Assunta a Dauis, appena passato il ponte per Panglao, in pietra di corallo, con il soffitto dipinto. Dentro la chiesa, vicino all'altare, c'è un pozzo d'acqua dolce legato a una leggenda locale. Si visita in poco tempo andando o tornando da Tagbilaran.",
        "lat": 9.6258,
        "lng": 123.86498,
        "come": "In tricycle o scooter da Alona o da Tagbilaran, circa 20 minuti.",
        "tempo": "30 minuti",
        "consiglio": "Spalle e ginocchia coperte; durante le messe si visita in silenzio."
      },
      {
        "nome": "Blood Compact Shrine",
        "testo": "Il monumento sul mare di Bool, a Tagbilaran, che ricorda il patto di sangue del 1565 tra lo spagnolo Miguel López de Legazpi e il capo locale Datu Sikatuna. Le statue di bronzo raccontano la scena. È una sosta di pochi minuti sulla strada per Baclayon.",
        "lat": 9.62746,
        "lng": 123.8792,
        "come": "In auto o tricycle da Tagbilaran, circa 10 minuti, sulla strada costiera verso Baclayon.",
        "tempo": "15 minuti"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Giro dell'interno con autista: Chocolate Hills, tarsi, fiume Loboc",
          "Chiesa di Baclayon al ritorno"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: giro dell'interno",
          "Giorno 2: barca all'alba per delfini, Balicasag e Virgin Island, pomeriggio in spiaggia"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Blood Compact, Baclayon, tarsi, fiume Loboc, foresta di mogani e Chocolate Hills nel pomeriggio",
          "Giorno 2: barca all'alba per delfini, Balicasag e Virgin Island",
          "Giorno 3: grotta di Hinagdanan e chiesa di Dauis, poi Dumaluan o Alona"
        ]
      }
    ],
    zone: [
      {
        "nome": "Alona Beach",
        "perChi": "vita serale e servizi",
        "testo": "La spiaggia più animata di Panglao, con locali, diving e hotel. Affollata e rumorosa la sera.",
        "fascia": "25-40 €"
      },
      {
        "nome": "Dumaluan e Doljo",
        "perChi": "calma",
        "testo": "Baie più tranquille, con resort e guesthouse. Servono tricycle o scooter per mangiare fuori.",
        "fascia": "60-120 €"
      },
      {
        "nome": "Tagbilaran",
        "perChi": "porto e notte di passaggio",
        "testo": "Il capoluogo, vicino al porto dei traghetti da Cebu: hotel semplici e centri commerciali, ma niente spiaggia. Comodo solo per un arrivo tardi o una partenza presto."
      },
      {
        "nome": "Loboc e l'interno",
        "perChi": "natura e silenzio",
        "testo": "Pochi lodge lungo il fiume Loboc, tra palme e foresta, vicini ai tarsi e alle Chocolate Hills. La sera c'è poco da fare e per il mare serve l'auto."
      }
    ],
    sapori: [
      {
        "nome": "Calamay",
        "testo": "Dolce di riso glutinoso, latte di cocco e zucchero di canna, venduto in gusci di cocco a Bohol."
      },
      {
        "nome": "Kinilaw",
        "testo": "Pesce crudo marinato nell'aceto, nei locali di Panglao."
      },
      {
        "nome": "Pesce alla griglia",
        "testo": "Il pescato del giorno ad Alona Beach, di sera."
      },
      {
        "nome": "Ube",
        "testo": "Il tubero viola dei dolci filippini, in gelati e torte nei caffè dell'isola."
      }
    ],
    attenzioni: [
      "Tarsi: evitare i «santuari» lungo la strada con animali in gabbia. Il centro di Corella è gestito da una fondazione.",
      "Niente flash con i tarsi: sono animali notturni e le visite li stressano.",
      "Scooter: i turisti si fanno male soprattutto in moto. Casco e niente guida di notte.",
      "Traghetto Cebu-Tagbilaran: nel 2026 OceanJet ha cambiato più volte le tariffe per il supplemento carburante (classe turistica tra 880 e 1.000 PHP; traversata di circa 2 ore col mare calmo) e ad aprile ha cancellato alcune corse. Controllare prezzo e orari prima."
    ],
    gite: [
      {
        "nome": "Isola di Pamilacan",
        "distanza": "circa 1 ora di barca",
        "come": "In barca da Alona o da Baclayon, spesso nello stesso giro dei delfini.",
        "testo": "Un'isola a sud-est di Panglao, un tempo villaggio di cacciatori di balene e mante, oggi con un santuario marino e un reef per lo snorkeling. Nelle acque intorno si avvistano spesso i delfini."
      },
      {
        "nome": "Anda",
        "distanza": "circa 2,5-3 ore di strada",
        "come": "In auto con autista o scooter lungo la costa orientale.",
        "testo": "La punta orientale di Bohol, con spiagge di sabbia bianca, pozze d'acqua dolce dentro le grotte e pochissima gente. Si va in giornata o per una notte di calma."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Bohol?",
        "risposta": "Due giorni bastano per il giro dell'interno e la barca per Balicasag. Con tre si aggiungono Panglao, Hinagdanan e un pomeriggio di spiaggia."
      },
      {
        "domanda": "Le Chocolate Hills sono sempre marroni?",
        "risposta": "No: l'erba diventa marrone con la stagione secca, tra marzo e maggio. Da giugno le colline tornano verdi."
      },
      {
        "domanda": "Dove si vedono i tarsi in modo rispettoso?",
        "risposta": "Al Philippine Tarsier Sanctuary di Corella, gestito dalla Philippine Tarsier Foundation. I «santuari» lungo la strada con animali in gabbia vanno evitati, e il flash non si usa mai."
      },
      {
        "domanda": "I delfini di Panglao sono garantiti?",
        "risposta": "No: dipendono dal mare e dalla fortuna. Le barche partono prima delle sei da Alona e non devono inseguire né circondare gli animali."
      },
      {
        "domanda": "Come si arriva a Bohol da Cebu?",
        "risposta": "Con il traghetto veloce OceanJet fino a Tagbilaran, circa 2 ore, oppure in aereo su Panglao. Prezzi e orari dei traghetti nel 2026 sono cambiati spesso: meglio controllarli prima."
      },
      {
        "domanda": "Conviene dormire a Panglao o a Tagbilaran?",
        "risposta": "A Panglao, ad Alona o nelle baie di Dumaluan e Doljo, per spiagge e barche. Tagbilaran serve solo per una notte vicino al porto."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: 'Le Chocolate Hills di Bohol, colline coniche coperte d\'erba',
    immagine: '/images/viaggi/filippine-itinerario/giorno-11-bohol.jpg',
  },
  {
    slug: 'siargao',
    paeseSlug: 'filippine',
    ordine: 5,
    nome: 'Siargao',
    tipologia: ['surf', 'mare', 'isole'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Siargao è stata l'ultima tappa del mio viaggio nelle Filippine, a General Luna: l'island hopping tra Naked, Daku e Guyam, la laguna di Sugba, Magpupungko e il surf.",
    introduzione:
      'Un\'isola a forma di lacrima affacciata sull\'oceano Pacifico, al largo di Mindanao nord-orientale: palmeti, lagune, isolotti di sabbia e l\'onda di Cloud 9.',
    percheAndarci: 'Per il surf, l\'island hopping tra Naked, Daku e Guyam, la laguna di Sugba e l\'aria rilassata da isola di surfisti.',
    cosaVedere: [
      'La passerella di Cloud 9 a General Luna',
      'Le isole di Naked, Daku e Guyam',
      'La laguna di Sugba a Del Carmen',
      'Le piscine di roccia di Magpupungko con la bassa marea',
      'I palmeti di cocco dell\'interno, in scooter',
    ],
    cosaFare: ['Lezioni di surf per principianti', 'Giro dell\'isola in scooter', 'Paddle board nella laguna di Sugba'],
    doveDormire: 'General Luna, lungo la Tourism Road e verso Cloud 9; Pacifico per chi cerca un villaggio più tranquillo.',
    doveMangiare: 'Locali internazionali a General Luna, pesce alla griglia e carinderie fuori dal centro.',
    comeArrivare:
      "Voli diretti su Sayak (a Del Carmen) da Cebu, Clark e Davao; da Manila non ci sono più voli diretti e si passa da Clark o da Cebu. Da Cebu il volo dura circa un'ora. Dall'aeroporto circa 45 minuti fino a General Luna con i van condivisi (circa 300 PHP, circa 4 €, 2026) o con un transfer privato.",
    comeSpostarsi: 'Scooter a noleggio o habal-habal (moto-taxi); van condivisi per l\'aeroporto.',
    periodoMigliore: 'da aprile ad agosto per le uscite in barca; surf da settembre a novembre; le piogge più forti da novembre a gennaio',
    costi:
      'Island hopping a Naked, Daku e Guyam circa 1.700-2.200 PHP a persona nei tour condivisi; lezione di surf di base circa 600 PHP l\'ora; scooter 350-500 PHP al giorno (prezzi indicativi, 2026). Budget giornaliero: basso circa 35-50 € con ostello a General Luna, scooter e carinderie; medio circa 80-120 € con bungalow sulla Tourism Road, tour e lezioni di surf; alto oltre 250 € con resort verso Cloud 9.',
    erroriDaEvitare: [
      'Guidare lo scooter senza esperienza, o di notte: gli incidenti sono il primo problema dei turisti sull\'isola',
      'Andare a Magpupungko con l\'alta marea, quando le piscine non si vedono',
    ],
    luoghi: [
      {
        "nome": "Cloud 9",
        "testo": "L'onda che ha reso famosa Siargao, con una passerella di legno e una torre sul reef di General Luna. È il punto di riferimento dei surfisti. Dall'aprile 2026 la torre è in ricostruzione: verificare se è accessibile.",
        "lat": 9.81333,
        "lng": 126.1644,
        "come": "A pochi minuti da General Luna, in scooter o a piedi lungo la Tourism Road.",
        "quando": "Surf: da settembre a novembre, onde grosse per esperti. Mattina per vedere le onde.",
        "tempo": "1 ora",
        "costo": "Lezione di surf di base circa 600 PHP l'ora (circa 8 €); lezioni private più care (indicativo, 2026)"
      },
      {
        "nome": "Naked, Daku e Guyam",
        "testo": "Tre isole davanti a General Luna: Naked Island, una lingua di sabbia senza un albero; Daku, dove di solito si pranza con pesce alla griglia; Guyam, un isolotto rotondo con le palme.",
        "lat": 9.73486,
        "lng": 126.12593,
        "come": "Tour di island hopping in barca da General Luna.",
        "quando": "Mattina, con mare calmo; il periodo migliore per le uscite in barca va da aprile ad agosto.",
        "tempo": "mezza giornata",
        "costo": "Tour condiviso circa 1.700-2.200 PHP a persona (circa 24-31 €); chiedere prima se pranzo, tasse delle isole e trasferimenti sono compresi (indicativo, 2026)"
      },
      {
        "nome": "Laguna di Sugba",
        "testo": "Una laguna d'acqua verde-blu tra mangrovie e rocce di calcare, a Del Carmen. Ci si arriva solo in barca, lungo i canali delle mangrovie. Si fa paddle board, si nuota o si salta in acqua dalla piattaforma di legno al centro.",
        "lat": 9.90631,
        "lng": 125.90029,
        "costo": "Barca indicativamente 1.600-2.500 PHP a barca (circa 23-35 €), più l'ingresso (indicativo, 2026)",
        "come": "In barca da Del Carmen; da General Luna serve quasi tutta la giornata. A volte l'accesso chiude per manutenzione: verificare prima.",
        "tempo": "mezza giornata"
      },
      {
        "nome": "Piscine di Magpupungko",
        "testo": "Vasche naturali di acqua di mare tra le rocce di Pilar, sulla costa orientale, che emergono con la bassa marea. Con l'alta marea le onde le coprono e non si vede quasi niente.",
        "lat": 9.87573,
        "lng": 126.1202,
        "come": "In scooter o con autista dal paese, sulla costa orientale.",
        "quando": "Con la bassa marea: con l'alta le piscine non si vedono.",
        "tempo": "2-3 ore"
      },
      {
        "nome": "Strade tra i palmeti",
        "testo": "Le strade dell'interno attraversano palmeti di cocco a perdita d'occhio, con punti panoramici lungo il percorso: è il paesaggio più fotografato dell'isola. Conviene passarci al mattino presto o verso il tramonto, con meno caldo. Per le foto fermarsi fuori dalla carreggiata, mai in curva.",
        "lat": 9.81654,
        "lng": 126.05479,
        "come": "In scooter da General Luna.",
        "tempo": "1 ora"
      },
      {
        "nome": "Spiaggia di Pacifico",
        "testo": "Una spiaggia lunga sulla costa nord-orientale, a San Isidro, con un villaggio tranquillo e onde di reef sul Pacifico. Con le condizioni giuste ci sono onde anche per chi impara. È molto più calma di General Luna.",
        "lat": 9.94375,
        "lng": 126.10332,
        "come": "In scooter o habal-habal da General Luna, circa un'ora attraverso l'interno.",
        "quando": "Mattina, prima del vento.",
        "tempo": "mezza giornata o una notte"
      },
      {
        "nome": "Fiume Maasin",
        "testo": "Un fiume verde tra le palme nel villaggio di Maasin, sulla strada tra General Luna e Dapa. Da una palma piegata sull'acqua ci si tuffa con una corda. Si può anche noleggiare una barchetta per risalire il fiume.",
        "lat": 9.81993,
        "lng": 126.05714,
        "come": "In scooter da General Luna, circa 15-20 minuti.",
        "quando": "Mattina, prima che arrivino i gruppi.",
        "tempo": "1 ora"
      },
      {
        "nome": "Tayangban Cave Pool",
        "testo": "Una grotta attraversata dall'acqua a Pilar, sulla costa orientale, che si percorre camminando e nuotando con una guida locale fino a una pozza tra le rocce. È fresca anche nelle ore calde. Si combina con Magpupungko, poco lontano.",
        "lat": 9.8613,
        "lng": 126.06305,
        "come": "In scooter o con autista da General Luna, circa 45 minuti; all'ingresso si prende la guida.",
        "quando": "A metà giornata, in attesa della bassa marea a Magpupungko.",
        "tempo": "1 ora"
      },
      {
        "nome": "Spiaggia di Alegria",
        "testo": "Una spiaggia lunga di sabbia chiara a Burgos, nel nord dell'isola, quasi sempre vuota. Ci sono pochissimi servizi e qualche palma per l'ombra. È la meta del giro in scooter della parte nord.",
        "lat": 10.05335,
        "lng": 126.07122,
        "come": "In scooter da General Luna, circa un'ora e mezza.",
        "quando": "Con il tempo asciutto, partendo presto.",
        "tempo": "mezza giornata",
        "consiglio": "Portare acqua e fare benzina prima: lungo la strada del nord i distributori sono pochi."
      },
      {
        "nome": "Jacking Horse",
        "testo": "Lo spot per principianti di General Luna, a poca distanza da Cloud 9, con onde più morbide su un fondo di reef. Le scuole di surf portano qui gli allievi quando le condizioni lo permettono.",
        "lat": 9.81469,
        "lng": 126.16336,
        "come": "A piedi o in scooter da General Luna, lungo la Tourism Road.",
        "quando": "Con la marea giusta, che le scuole controllano ogni giorno.",
        "tempo": "1-2 ore",
        "costo": "Lezione con istruttore e tavola indicativamente 500-1.000 PHP l'ora, circa 7-14 € (indicativo, 2026)"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Island hopping a Naked, Daku e Guyam",
          "Tramonto a Cloud 9"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: island hopping",
          "Giorno 2: lezione di surf al mattino, poi i palmeti dell'interno in scooter"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: island hopping",
          "Giorno 2: laguna di Sugba",
          "Giorno 3: Magpupungko con la bassa marea e giro dell'isola"
        ]
      }
    ],
    zone: [
      {
        "nome": "General Luna",
        "perChi": "surf e vita serale",
        "testo": "Il centro dei surfisti, con locali, scuole e hotel lungo la Tourism Road. Vivace la sera.",
        "fascia": "20-40 €"
      },
      {
        "nome": "Pacifico",
        "perChi": "villaggio tranquillo",
        "testo": "Più a nord, un villaggio più calmo, con onde e pochi servizi."
      },
      {
        "nome": "Tourism Road",
        "perChi": "giardino e tranquillità",
        "testo": "La strada che da General Luna va verso Cloud 9, con bungalow nel verde e resort sul mare. Si va a piedi ai locali e alle scuole di surf, ma la notte è più quieta.",
        "fascia": "50-100 €"
      },
      {
        "nome": "Verso Cloud 9",
        "perChi": "resort sul mare",
        "testo": "I resort più curati sulla costa, vicini all'onda e alla passerella. Prezzi alti e servizi completi."
      }
    ],
    sapori: [
      {
        "nome": "Pesce alla griglia",
        "testo": "A pranzo nei tour di island hopping, sulla spiaggia di Daku."
      },
      {
        "nome": "Carinderia",
        "testo": "Le mense locali fuori dal centro: riso, adobo e pesce a pochi pesos."
      },
      {
        "nome": "Cocco",
        "testo": "Acqua di cocco fresca lungo le strade, con le palme ovunque."
      },
      {
        "nome": "Locali di General Luna",
        "testo": "Cucina internazionale e smoothie bowl lungo la Tourism Road."
      }
    ],
    attenzioni: [
      "Scooter: la causa più comune di incidenti tra i turisti a Siargao. Casco, niente guida di notte, assicurazione che copra la moto.",
      "Magpupungko con l'alta marea: le piscine non si vedono. Controllare le maree.",
      "Stagione: le piogge più forti cadono da novembre a gennaio; per le uscite in barca il periodo migliore va da aprile ad agosto.",
      "Contanti: prelevare prima delle giornate in barca o al nord e tenere banconote piccole; con carta estera la commissione locale è di circa 250 PHP a prelievo (BDO), più quella della propria banca."
    ],
    gite: [
      {
        "nome": "Sohoton Cove e Bucas Grande",
        "distanza": "circa 1,5-2 ore di barca",
        "come": "Con un tour organizzato da General Luna, di solito di un giorno intero.",
        "testo": "Una baia chiusa da pareti di calcare sull'isola di Bucas Grande, raggiunta passando da una grotta con la bassa marea e con lagune interne. Una giornata lunga, solo con il mare calmo."
      },
      {
        "nome": "Mangrovie di Del Carmen",
        "distanza": "circa 45 minuti di strada",
        "come": "In scooter o van fino al porto di Del Carmen, poi in barca o in kayak.",
        "testo": "Una delle foreste di mangrovie più estese di Mindanao, con canali da percorrere in barca o in kayak. Si attraversa anche andando alla laguna di Sugba."
      }
    ],
    faq: [
      {
        "domanda": "Quando è la stagione del surf a Siargao?",
        "risposta": "Le onde più grandi a Cloud 9 arrivano da settembre a novembre, adatte solo a surfisti esperti. Chi impara trova onde per principianti quasi tutto l'anno a Jacking Horse e in altri spot."
      },
      {
        "domanda": "Si può imparare a fare surf da principianti?",
        "risposta": "Sì: le scuole di General Luna danno lezioni con istruttore e tavola, indicativamente 500-1.000 PHP l'ora (circa 7-14 €). Cloud 9 e le onde di reef sono invece per esperti."
      },
      {
        "domanda": "Serve lo scooter a Siargao?",
        "risposta": "Aiuta molto, perché le distanze sono lunghe. Chi non ha esperienza usa gli habal-habal o un autista: gli incidenti in moto sono il primo problema dei turisti sull'isola."
      },
      {
        "domanda": "Quanti giorni servono a Siargao?",
        "risposta": "Tre o quattro giorni: island hopping, laguna di Sugba, Magpupungko con la bassa marea e una giornata di surf o di scooter."
      },
      {
        "domanda": "Come si arriva a Siargao?",
        "risposta": "In aereo su Sayak, a Del Carmen, da Cebu, Clark o Davao; da Manila si fa scalo. Dall'aeroporto a General Luna sono circa 45 minuti in van."
      },
      {
        "domanda": "Quando è meglio andare per le uscite in barca?",
        "risposta": "Da aprile ad agosto il mare è più calmo. Le piogge più forti cadono da novembre a gennaio."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: 'La passerella e la torre di legno sul reef di Cloud 9, lo spot di surf di Siargao',
    immagine: '/images/viaggi/filippine-itinerario/giorno-17-siargao.jpg',
  },
]
