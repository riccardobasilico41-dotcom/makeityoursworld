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
      'Tassa ambientale (ETDF) 400 PHP valida 10 giorni; tour di island hopping 1.200-1.800 PHP a persona con pranzo, più gli ingressi dei siti (Big Lagoon e Small Lagoon 200 PHP ciascuna, a numero chiuso); kayak doppio 300-400 PHP a parte (prezzi indicativi, 2026).',
    erroriDaEvitare: [
      'Prenotare il Tour A all\'ultimo in alta stagione: gli ingressi alla Big Lagoon sono a fasce orarie limitate',
      'Arrivare senza contanti: le carte non sono accettate ovunque e nel fine settimana gli ATM restano spesso senza soldi',
    ],
    luoghi: [
      {
        "nome": "Tour A: Big Lagoon, Secret Lagoon e Shimizu",
        "testo": "Il giro delle lagune dell'isola di Miniloc. La Big Lagoon si attraversa in kayak tra pareti di calcare; la Secret Lagoon si raggiunge passando da un varco stretto nella roccia. Pranzo sulla spiaggia di Shimizu o di 7 Commando. Dal 2018 la Small Lagoon fa parte del Tour D: le due lagune non si possono visitare nello stesso giorno.",
        "come": "In bangka dal porto o da Corong-Corong con un operatore autorizzato. Il giro è organizzato: barca, guida, kayak e pranzo.",
        "quando": "Partenza al mattino. La Big Lagoon ha fasce orarie dalle 7 alle 16, con un massimo di 60 persone e 30 kayak per fascia, prenotate dalle agenzie: in alta stagione meglio fissare il tour con un giorno di anticipo. Da luglio a ottobre molte uscite vengono annullate per il mare.",
        "tempo": "una giornata",
        "costo": "Tour 1.200-1.500 PHP a persona con pranzo; ingresso Big Lagoon 200 PHP e kayak doppio 300-400 PHP a parte; tassa ETDF 400 PHP se non già pagata (indicativo, 2026)",
        "consiglio": "Scarpe da scoglio, maschera propria e sacca impermeabile. Ai kayak conviene andare presto, prima delle altre barche."
      },
      {
        "nome": "Tour C: Hidden Beach, Secret Beach e Matinloc",
        "testo": "Il giro delle spiagge nascoste: Hidden Beach e Secret Beach si raggiungono nuotando o a piedi in acqua bassa, dentro pareti di roccia. Poi il santuario di Matinloc (ingresso facoltativo, circa 200 PHP) e Helicopter Island. È il giro più esposto al mare aperto e il primo a essere annullato quando il tempo peggiora.",
        "come": "In bangka con operatore autorizzato; pranzo a bordo o su una spiaggia.",
        "quando": "Mattina. Con il mare mosso il Tour C è il primo a saltare: meglio tenere un giorno di riserva.",
        "tempo": "una giornata",
        "costo": "Tour indicativamente 1.400-1.800 PHP a persona con pranzo (indicativo, 2026)",
        "consiglio": "Il Tour D porta alla Small Lagoon e a Cadlao, il B a Pinagbuyutan e Snake Island: di solito sono meno affollati e si scelgono se A e C sono pieni."
      },
      {
        "nome": "Spiaggia di Nacpan",
        "testo": "Quattro chilometri di sabbia chiara e palme, a circa 17 km a nord del paese, unita a un'estremità alla spiaggia gemella di Calitang da una lingua di sabbia. È più calma delle spiagge del paese e adatta al tramonto.",
        "come": "In tricycle o scooter da El Nido, circa 45 minuti.",
        "quando": "Pomeriggio fino al tramonto.",
        "tempo": "mezza giornata",
        "costo": "Spiaggia gratuita; tricycle andata e ritorno con attesa 700-1.500 PHP a mezzo, fino a circa quattro persone, da concordare prima (indicativo, 2026)",
        "consiglio": "Chiedere al tricycle di aspettare, perché al ritorno è difficile trovarne uno libero."
      },
      {
        "nome": "Taraw Cliff e Canopy Walk",
        "testo": "La parete di calcare sopra il paese, con la vista più ampia su El Nido e sulla baia di Bacuit. La salita libera fino alla cima è stata segnata da incidenti e la DENR, l'ente per l'ambiente, non ha autorizzato guide né operatori. L'alternativa ufficiale è la Canopy Walk (El Nido Via Ferrata): passerelle e ponti sospesi sulle rocce, da percorrere con imbrago, casco e guida compresi nel biglietto.",
        "come": "Dall'ingresso della Canopy Walk in paese, a piedi; si sale in gruppo con l'imbrago fornito.",
        "quando": "Aperta di solito tutti i giorni dalle 8 alle 17; meglio presto o nel tardo pomeriggio, per il caldo.",
        "tempo": "circa 1 ora e mezza",
        "costo": "Canopy Walk circa 400-450 PHP (indicativo, 2026)",
        "consiglio": "Scarpe con presa buona: la roccia è affilata e scivolosa se bagnata. Meglio rifiutare chi propone la salita alla cima per conto suo."
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
        "testo": "Il centro per ostelli, guesthouse e locali, con i tour in partenza a piedi. È rumoroso la sera e la spiaggia è piccola."
      },
      {
        "nome": "Corong-Corong",
        "perChi": "tramonti e calma",
        "testo": "A pochi minuti di tricycle dal paese, con hotel di fascia media sul mare e tramonti. Meno scelta di ristoranti."
      },
      {
        "nome": "Nacpan e Lio",
        "perChi": "spiagge tranquille",
        "testo": "Più lontane dal paese, con spiagge larghe e poca vita serale. Servono tricycle o scooter per muoversi."
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
    comeArrivare: 'Voli su Busuanga (aeroporto Francisco B. Reyes, 30-40 minuti da Coron town) da Manila, Clark e Cebu, e voli Cebgo da El Nido; fast craft da El Nido (3,5-4 ore).',
    comeSpostarsi: 'Tricycle in paese, barche dei tour dal porto.',
    periodoMigliore: 'da dicembre a maggio',
    costi:
      'Tour di island hopping indicativamente 1.000-1.500 PHP a persona con pranzo, più gli ingressi di ciascun sito, solo in contanti (Kayangan circa 300 PHP, Barracuda 200-250, Twin Lagoon 200); immersioni sui relitti con i centri diving di Coron town (prezzi indicativi, 2026).',
    erroriDaEvitare: [
      'Andare al Kayangan a metà mattina, quando arrivano tutte le barche insieme',
      'Fare immersioni nei relitti interni senza brevetto e formazione adeguati',
    ],
    luoghi: [
      {
        "nome": "Lago Kayangan",
        "testo": "Un lago d'acqua dolce e salmastra chiusa tra rocce calcaree, considerato tra i più puliti delle Filippine. Dal belvedere sulla scala d'ingresso si vede la baia: è l'immagine simbolo di Coron.",
        "come": "In barca nei tour di island hopping; dall'approdo una scalinata ripida fino al belvedere. Per nuotare nel lago il giubbotto di salvataggio è obbligatorio.",
        "quando": "Appena aperto o a fine giornata: a metà mattina arrivano tutte le barche insieme.",
        "tempo": "1 ora",
        "costo": "Ingresso circa 300 PHP, in contanti e a parte rispetto al tour (indicativo, 2026)",
        "consiglio": "Chiedere all'operatore di invertire l'ordine delle tappe, per arrivare al Kayangan prima della folla."
      },
      {
        "nome": "Lago Barracuda",
        "testo": "Uno strato di acqua dolce sopra uno di acqua salata: verso i 14 metri di profondità l'acqua passa di colpo da circa 28 a circa 38 gradi. Si nuota tra pareti di roccia nera.",
        "come": "In barca nei tour; dall'approdo si scende alcuni gradini fino all'acqua.",
        "quando": "Mattina, con meno barche.",
        "tempo": "45 minuti",
        "costo": "Ingresso circa 200-250 PHP, a parte (indicativo, 2026)"
      },
      {
        "nome": "Twin Lagoon",
        "testo": "Due lagune separate da una parete di roccia. Si passa dall'una all'altra a nuoto: con la bassa marea attraverso un varco stretto nella roccia, con l'alta marea passando sotto la parete.",
        "come": "In barca nei tour di island hopping.",
        "quando": "Presto, prima che arrivino le barche dei tour.",
        "tempo": "45 minuti",
        "costo": "Ingresso circa 200 PHP, a parte (indicativo, 2026)"
      },
      {
        "nome": "Relitti giapponesi di Coron Bay",
        "testo": "Una decina di navi giapponesi affondate dagli aerei delle portaerei americane il 24 settembre 1944, oggi coperte di corallo. Tra le più note l'Okikawa Maru, l'Akitsushima e l'Irako. Lo Skeleton Wreck è a pochi metri di profondità e si vede anche in snorkeling.",
        "come": "Con i centri diving di Coron town, che organizzano uscite da due immersioni. Per i relitti profondi serve almeno il brevetto Advanced; le penetrazioni solo con formazione adeguata.",
        "tempo": "una giornata",
        "costo": "Prezzi e pacchetti presso i centri diving di Coron town"
      },
      {
        "nome": "Monte Tapyas e sorgenti di Maquinit",
        "testo": "Oltre 700 gradini sopra la città per il belvedere sulla baia al tramonto. La sera, le sorgenti calde di Maquinit, vicino al mare: una delle poche sorgenti termali di acqua salata al mondo.",
        "come": "Tapyas si sale a piedi dalla città; Maquinit in tricycle.",
        "quando": "Tapyas al tramonto, Maquinit dopo cena o al tramonto.",
        "tempo": "2-3 ore in tutto",
        "costo": "Ingressi e tricycle in contanti: prezzi sul posto, il tricycle va concordato prima"
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
        "testo": "Hotel e guesthouse vicino a porto, ristoranti e centri diving. È caotica e rumorosa, ma comoda per i tour."
      },
      {
        "nome": "Isole private",
        "perChi": "chi vuole spendere",
        "testo": "Resort su isole vicine, con trasferimento in barca. Isolati e tranquilli, ma tutto costa di più."
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
    comeArrivare: 'Aeroporto di Mactan-Cebu, poi circa 105 km verso sud: 3-4 ore in bus Ceres dal South Bus Terminal o in auto, a seconda del traffico.',
    comeSpostarsi: 'Tricycle e scooter; barche per Pescador.',
    periodoMigliore: 'da dicembre a maggio',
    costi: 'Canyoning a Kawasan circa 2.000 PHP a persona con guida, più circa 100 PHP di navetta obbligatoria; snorkeling dalla riva gratuito, si paga solo il noleggio dell\'attrezzatura (prezzi indicativi, 2026).',
    erroriDaEvitare: [
      'Andare a Oslob a nuotare con gli squali balena: gli animali vengono nutriti per tenerli sul posto, e i biologi marini criticano questa pratica',
      'Toccare le tartarughe o inseguirle in acqua',
    ],
    luoghi: [
      {
        "nome": "Banco di sardine di Panagsama Beach",
        "testo": "Milioni di sardine che si muovono come un'unica nube a pochi metri dalla riva. Ci si nuota in mezzo con maschera e pinne, senza barca. Lungo lo stesso reef si incontrano spesso tartarughe marine.",
        "come": "Si entra dalla spiaggia di Panagsama: il banco è a poche decine di metri dalla riva. Maschera e pinne si noleggiano nei diving.",
        "quando": "Mattina presto, con la luce migliore e meno gente.",
        "tempo": "1-2 ore",
        "costo": "Gratuito; si paga solo il noleggio di maschera e pinne",
        "consiglio": "Non toccare né inseguire le tartarughe, e non calciare: il banco si disperde."
      },
      {
        "nome": "Pescador Island",
        "testo": "Un isolotto a circa 3 km dalla costa, il sito d'immersione più noto di Moalboal, con un muro di corallo che scende fino a circa 40 metri e una grotta sottomarina chiamata la Cattedrale. Intorno si incontrano spesso le tartarughe e in superficie si fa snorkeling sul reef. È la seconda uscita classica di Moalboal dopo le sardine.",
        "come": "In barca da Panagsama Beach.",
        "quando": "Pomeriggio o mattina, con mare calmo.",
        "tempo": "mezza giornata",
        "costo": "Barca da concordare con i diving o i barcaioli di Panagsama"
      },
      {
        "nome": "Canyoning alle cascate di Kawasan",
        "testo": "Si scende la gola del fiume Matutinao per alcune ore, tra salti dalle rocce (quelli alti sono facoltativi), scivoli naturali e tratti a nuoto, fino alle cascate color turchese. Nel 2023 la Provincia di Cebu ha revocato i permessi agli operatori senza licenza: si va solo con guide autorizzate.",
        "come": "Da Moalboal a Badian, circa 20 km, in 30-40 minuti. Si va con una guida, con casco e giubbotto.",
        "quando": "Partire presto per evitare la folla.",
        "tempo": "mezza giornata o poco più",
        "costo": "Circa 2.000 PHP a persona con guida, casco e giubbotto, più circa 100 PHP di navetta obbligatoria; i pacchetti con transfer costano di più (indicativo, 2026)",
        "consiglio": "Scarpe chiuse da acqua e niente oggetti di valore."
      },
      {
        "nome": "White Beach",
        "testo": "La spiaggia di sabbia chiara di Basdaku, a nord di Panagsama, più larga e più comoda per fare il bagno. Ci sono chioschi e qualche ristorante sulla sabbia. È il posto giusto per il pomeriggio libero dopo il canyoning.",
        "come": "In tricycle o scooter da Panagsama.",
        "tempo": "un pomeriggio"
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
        "testo": "Guesthouse e piccoli resort con il reef sotto i ristoranti. È la base più comoda per sardine e immersioni; di sera è vivace."
      },
      {
        "nome": "Badian",
        "perChi": "chi vuole Kawasan vicino",
        "testo": "Più a sud, vicino alle cascate. Meno servizi e meno vita serale."
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
    comeArrivare: 'Traghetto veloce OceanJet da Cebu a Tagbilaran, oppure volo sull\'aeroporto di Panglao.',
    comeSpostarsi: 'Scooter, tricycle o auto con autista per la giornata.',
    periodoMigliore: 'da dicembre a maggio',
    costi:
      'Chocolate Hills: tariffa alla biglietteria, perché l\'aumento a 150 PHP per gli adulti è sospeso; biglietto d\'ingresso al santuario dei tarsi; auto con autista e barche per Balicasag da concordare prima, con le tasse dei siti marini in contanti (2026).',
    erroriDaEvitare: [
      'Visitare i tarsi nei finti «santuari» lungo la strada: sono animali notturni e le visite li stressano; il centro di Corella è quello gestito dalla fondazione',
      'Usare il flash con i tarsi',
    ],
    luoghi: [
      {
        "nome": "Chocolate Hills",
        "testo": "Colline coniche di calcare coperte d'erba, 1.776 secondo il decreto che le ha protette nel 1997, sparse tra Carmen, Batuan e Sagbayan. Tra marzo e maggio l'erba secca diventa marrone, da qui il nome; da giugno torna verde. Si guardano dall'alto, dalla terrazza del complesso di Carmen.",
        "come": "In auto con autista dal giro dell'interno, Carmen è a circa 55 km da Tagbilaran. Una scalinata di 214 gradini porta al belvedere.",
        "quando": "Tardo pomeriggio, con la luce più morbida; a metà mattina la terrazza è affollata.",
        "tempo": "1 ora",
        "costo": "Ingresso in contanti, tariffa alla biglietteria: l'aumento a 150 PHP per gli adulti previsto da un'ordinanza di Carmen è sospeso da settembre 2025, senza una nuova data (2026)"
      },
      {
        "nome": "Philippine Tarsier Sanctuary di Corella",
        "testo": "Un santuario nella foresta gestito dalla Philippine Tarsier Foundation, dove si vede il tarsio delle Filippine, uno dei primati più piccoli del mondo, animale notturno che di giorno dorme.",
        "come": "In auto con autista nello stesso giro dell'interno; si cammina in silenzio su un sentiero.",
        "quando": "Mattina, quando gli animali dormono.",
        "tempo": "45 minuti",
        "costo": "Biglietto d'ingresso: tariffa alla biglietteria",
        "consiglio": "Niente flash e voce bassa. Evitare i finti santuari lungo la strada con tarsi in gabbia."
      },
      {
        "nome": "Fiume Loboc e chiese coloniali",
        "testo": "Il fiume Loboc è famoso per le crociere con pranzo, tra palme e acqua verde: una tappa molto turistica, ma rilassante dopo le colline. Sulla stessa strada ci sono due chiese coloniali dei gesuiti: quella di Loboc, ricostruita nel Settecento dopo l'incendio del 1638, e quella di Baclayon, in pietra di corallo, consacrata nel 1727 nel più antico insediamento cristiano di Bohol.",
        "come": "Nel giro dell'interno con autista.",
        "tempo": "1-2 ore"
      },
      {
        "nome": "Balicasag e Virgin Island",
        "testo": "Balicasag è un santuario marino: il reef poco profondo finisce in pareti che scendono oltre i 30 metri, con tartarughe e banchi di pesci, ottimo per snorkeling e immersioni. Virgin Island è una lingua di sabbia che emerge con la bassa marea. Molti tour partono all'alba per avvistare i delfini, che però non sono garantiti.",
        "come": "In barca da Panglao, con partenza all'alba per i delfini.",
        "quando": "Partenza all'alba; Virgin Island con la bassa marea.",
        "tempo": "mezza giornata",
        "costo": "Barca da concordare; a parte, in contanti, la tassa del santuario, la barchetta obbligatoria per Balicasag e lo sbarco a Virgin Island"
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
      }
    ],
    zone: [
      {
        "nome": "Alona Beach",
        "perChi": "vita serale e servizi",
        "testo": "La spiaggia più animata di Panglao, con locali, diving e hotel. Affollata e rumorosa la sera."
      },
      {
        "nome": "Dumaluan e Doljo",
        "perChi": "calma",
        "testo": "Baie più tranquille, con resort e guesthouse. Servono tricycle o scooter per mangiare fuori."
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
    comeArrivare: 'Voli diretti su Sayak (a Del Carmen) da Cebu, Clark e Davao; da Manila non ci sono più voli diretti e si passa da Clark o da Cebu. Poi circa 45 minuti fino a General Luna (van condiviso circa 300 PHP, 2026).',
    comeSpostarsi: 'Scooter a noleggio o habal-habal (moto-taxi); van condivisi per l\'aeroporto.',
    periodoMigliore: 'da aprile ad agosto per le uscite in barca; surf da settembre a novembre; le piogge più forti da novembre a gennaio',
    costi:
      'Island hopping a Naked, Daku e Guyam circa 1.700-2.200 PHP a persona nei tour condivisi; lezione di surf di base circa 600 PHP l\'ora; scooter 350-500 PHP al giorno (prezzi indicativi, 2026).',
    erroriDaEvitare: [
      'Guidare lo scooter senza esperienza, o di notte: gli incidenti sono il primo problema dei turisti sull\'isola',
      'Andare a Magpupungko con l\'alta marea, quando le piscine non si vedono',
    ],
    luoghi: [
      {
        "nome": "Cloud 9",
        "testo": "L'onda che ha reso famosa Siargao, con una passerella di legno e una torre sul reef di General Luna. È il punto di riferimento dei surfisti. Dall'aprile 2026 la torre è in ricostruzione: verificare se è accessibile.",
        "come": "A pochi minuti da General Luna, in scooter o a piedi lungo la Tourism Road.",
        "quando": "Surf: da settembre a novembre, onde grosse per esperti. Mattina per vedere le onde.",
        "tempo": "1 ora",
        "costo": "Lezione di surf di base circa 600 PHP l'ora; lezioni private più care (indicativo, 2026)"
      },
      {
        "nome": "Naked, Daku e Guyam",
        "testo": "Tre isole davanti a General Luna: Naked Island, una lingua di sabbia senza un albero; Daku, dove di solito si pranza con pesce alla griglia; Guyam, un isolotto rotondo con le palme.",
        "come": "Tour di island hopping in barca da General Luna.",
        "quando": "Mattina, con mare calmo; il periodo migliore per le uscite in barca va da aprile ad agosto.",
        "tempo": "mezza giornata",
        "costo": "Tour condiviso circa 1.700-2.200 PHP a persona; chiedere prima se pranzo, tasse delle isole e trasferimenti sono compresi (indicativo, 2026)"
      },
      {
        "nome": "Laguna di Sugba",
        "testo": "Una laguna d'acqua verde-blu tra mangrovie e rocce di calcare, a Del Carmen. Ci si arriva solo in barca, lungo i canali delle mangrovie. Si fa paddle board, si nuota o si salta in acqua dalla piattaforma di legno al centro.",
        "come": "In barca da Del Carmen; da General Luna serve quasi tutta la giornata. A volte l'accesso chiude per manutenzione: verificare prima.",
        "tempo": "mezza giornata"
      },
      {
        "nome": "Piscine di Magpupungko",
        "testo": "Vasche naturali di acqua di mare tra le rocce di Pilar, sulla costa orientale, che emergono con la bassa marea. Con l'alta marea le onde le coprono e non si vede quasi niente.",
        "come": "In scooter o con autista dal paese, sulla costa orientale.",
        "quando": "Con la bassa marea: con l'alta le piscine non si vedono.",
        "tempo": "2-3 ore"
      },
      {
        "nome": "Strade tra i palmeti",
        "testo": "Le strade dell'interno attraversano palmeti di cocco a perdita d'occhio, con punti panoramici lungo il percorso: è il paesaggio più fotografato dell'isola. Conviene passarci al mattino presto o verso il tramonto, con meno caldo. Per le foto fermarsi fuori dalla carreggiata, mai in curva.",
        "come": "In scooter da General Luna.",
        "tempo": "1 ora"
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
        "testo": "Il centro dei surfisti, con locali, scuole e hotel lungo la Tourism Road. Vivace la sera."
      },
      {
        "nome": "Pacifico",
        "perChi": "villaggio tranquillo",
        "testo": "Più a nord, un villaggio più calmo, con onde e pochi servizi."
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
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: 'La passerella e la torre di legno sul reef di Cloud 9, lo spot di surf di Siargao',
    immagine: '/images/viaggi/filippine-itinerario/giorno-17-siargao.jpg',
  },
]
