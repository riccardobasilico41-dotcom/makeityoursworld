import type { Destinazione } from '@/lib/types'

// Destinazioni della guida maldive-guida: gli atolli e le isole citati
// nell'itinerario e nella scelta dell'atollo. Il viaggio dell'autore tocca
// Malé e Hulhumalé e Ari Sud (visitataPersonalmente: true); gli altri atolli
// sono solo alternative nella guida e restano false. Niente miaEsperienza. Prezzi e stagioni verificati a ottobre 2026, indicativi.

export const destinazioniMaldive: Destinazione[] = [
  {
    slug: 'male-hulhumale',
    paeseSlug: 'maldive',
    ordine: 1,
    nome: 'Malé e Hulhumalé',
    tipologia: ['città', 'arrivo'],
    giorniConsigliati: 'mezza giornata o una notte di transito',
    visitataPersonalmente: true,
    introduzione:
      'La capitale, una delle città più densamente abitate al mondo, e Hulhumalé, l\'isola artificiale accanto all\'aeroporto Velana, con spiaggia cittadina, hotel e ristoranti.',
    percheAndarci:
      'Per la prima o l\'ultima notte, quando gli orari dei voli non permettono una barca o un idrovolante, e per mezza giornata tra il mercato del pesce e la Moschea del Venerdì.',
    cosaVedere: [
      'Il mercato del pesce di Malé nel pomeriggio, quando rientrano i dhoni',
      'Il mercato della frutta e verdura',
      'La Moschea del Venerdì (Hukuru Miskiy), in pietra di corallo del 1658',
      'La spiaggia di Hulhumalé',
    ],
    cosaFare: ['Assaggiare gli short eats in un caffè locale', 'Una passeggiata serale sul lungomare di Hulhumalé'],
    doveDormire: 'Hulhumalé, a 10-15 minuti dall\'aeroporto, con hotel e guesthouse da 60 a 150 $.',
    doveMangiare: 'Caffè locali per gli short eats, ristoranti sul lungomare di Hulhumalé.',
    comeArrivare: 'Dall\'aeroporto Velana in traghetto per Malé (10-15 minuti, 15 rufiyaa o 1 $, 2025) o in bus e taxi per Hulhumalé e Malé sul ponte.',
    comeSpostarsi: 'A piedi e in taxi.',
    periodoMigliore: 'tutto l\'anno.',
    erroriDaEvitare: ['Visitare le moschee durante la preghiera o senza abiti coperti', 'Cercare alcol: Malé e Hulhumalé sono isole abitate, e lì vale il divieto'],
    luoghi: [
      {
        "nome": "Mercato del pesce di Malé",
        "testo": "Sul lungomare nord di Malé i dhoni scaricano tonni e pesce di barriera, che vengono tagliati sui banconi davanti a chi guarda. È il posto più vero della capitale: odore forte, pavimenti bagnati, pescatori che contrattano. Accanto c'è il mercato della frutta e verdura, con cocchi, peperoncini e pacchetti di pesce secco.",
        "come": "Dal terminal del traghetto aeroportuale, a piedi in pochi minuti.",
        "quando": "Dal primo pomeriggio, quando rientrano le barche; il venerdì ritmi ridotti per la preghiera. Orari non fissi.",
        "tempo": "1 ora",
        "consiglio": "Per le foto alle persone, chiedere sempre il permesso."
      },
      {
        "nome": "Moschea del Venerdì (Hukuru Miskiy)",
        "testo": "Costruita nel 1658 sotto il sultano Ibrahim Iskandar, è la moschea più antica di Malé: blocchi di corallo incastrati senza malta e scolpiti con motivi e iscrizioni, soffitti e travi in legno laccato. Accanto ci sono il cimitero con le lapidi di corallo e il minareto Munnaaru. Le moschee in pietra di corallo delle Maldive sono nella lista propositiva UNESCO.",
        "come": "A piedi dal centro di Malé. Per entrare i non musulmani devono avere un permesso: si chiede al personale della moschea o al Ministero degli Affari Islamici; da fuori si vede comunque bene.",
        "quando": "Fuori dagli orari di preghiera, evitando il venerdì.",
        "tempo": "30 minuti",
        "consiglio": "Spalle e ginocchia coperte; durante la preghiera non si entra."
      },
      {
        "nome": "Spiaggia di Hulhumalé",
        "testo": "La spiaggia cittadina dell'isola artificiale accanto all'aeroporto, con lungomare e ristoranti. Comoda per la prima o l'ultima notte.",
        "come": "Da Velana in bus o taxi, 10-15 minuti.",
        "quando": "Tramonto e sera.",
        "tempo": "una sera",
        "consiglio": "È un'isola abitata: valgono le regole locali, quindi abiti coperti e niente alcol."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mercato della frutta al mattino, mercato del pesce nel pomeriggio",
          "Moschea del Venerdì fuori dalla preghiera",
          "Traghetto per l'aeroporto o bus per Hulhumalé",
          "Cena sul lungomare di Hulhumalé"
        ]
      }
    ],
    zone: [
      {
        "nome": "Hulhumalé",
        "perChi": "prima o ultima notte",
        "testo": "A 10-15 minuti da Velana, con hotel e guesthouse da 60 a 150 $ e ristoranti sul lungomare. Moderna e un po' anonima."
      },
      {
        "nome": "Malé",
        "perChi": "chi vuole la città",
        "testo": "Capitale densissima, rumorosa e senza spiaggia. Utile per una mezza giornata, meno per dormire."
      }
    ],
    sapori: [
      {
        "nome": "Short eats",
        "testo": "Gulha, bajiya e kavaabu: snack fritti del pomeriggio nei caffè locali."
      },
      {
        "nome": "Mas huni",
        "testo": "Tonno, cocco grattugiato, cipolla e peperoncino con la roshi, una piadina: la colazione maldiviana."
      },
      {
        "nome": "Garudhiya",
        "testo": "Brodo di tonno con riso, lime e peperoncino."
      },
      {
        "nome": "Curry di tonno",
        "testo": "Pesce del giorno in curry, nei caffè e nelle guesthouse."
      }
    ],
    attenzioni: [
      "Sulle isole abitate (Malé, Hulhumalé) l'alcol non si vende né si beve. Importarlo è vietato.",
      "Le sigarette elettroniche sono vietate: importazione dal 15 novembre 2024, possesso e uso dal 15 dicembre 2024, anche per i turisti. Dal 1° novembre 2025 chi è nato dal 1° gennaio 2007 in poi non può comprare né fumare tabacco, turisti compresi.",
      "Compilare la IMUGA (dichiarazione del viaggiatore) nelle 96 ore prima del volo, una per persona, bambini compresi. È gratuita: usare solo il portale ufficiale imuga.immigration.gov.mv, ci sono siti falsi a pagamento.",
      "È vietato portare via coralli, conchiglie e sabbia, anche dalla spiaggia: in aeroporto vengono sequestrati e si rischia una multa."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'Malé vista dall\'alto, con il porto pieno di barche e gli edifici colorati della capitale',
    immagine: '/images/maldive/male-hulhumale.jpg',
  },
  {
    slug: 'male-sud-vaavu',
    paeseSlug: 'maldive',
    ordine: 2,
    nome: 'Malé Sud e Vaavu',
    tipologia: ['isole locali', 'snorkeling', 'squali'],
    giorniConsigliati: '3-5 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Gli atolli più vicini all\'aeroporto verso sud: Malé Sud con Maafushi, Guraidhoo e Gulhi, e più in basso Vaavu, poco turistico, con Fulidhoo e i canali degli squali.',
    percheAndarci:
      'Per chi ha pochi giorni o vuole spendere poco nei trasferimenti: speedboat brevi, molte guesthouse, tartarughe, squali nutrice e l\'immersione notturna di Alimatha.',
    cosaVedere: [
      'La bikini beach di Maafushi e le barriere vicine con le tartarughe',
      'L\'isola di Fulidhoo, piccola e tranquilla',
      'I canali di Vaavu (Fotteyo, Miyaru Kandu) con squali grigi',
    ],
    cosaFare: ['Snorkeling con squali nutrice e razze', 'L\'immersione notturna di Alimatha', 'Una giornata in un resort vicino da Maafushi'],
    doveDormire: 'Guesthouse a Maafushi (la più sviluppata e affollata), Guraidhoo, Gulhi, Fulidhoo.',
    doveMangiare: 'Cucina maldiviana nelle guesthouse e nei caffè dell\'isola.',
    comeArrivare: 'Speedboat da Malé in 45-90 minuti (20-40 $), o traghetto MTCC economico (2-3 $) con poche partenze.',
    comeSpostarsi: 'Escursioni in barca organizzate dalle guesthouse.',
    periodoMigliore: 'dicembre-aprile per il mare calmo; da maggio a novembre speedboat più mossi.',
    erroriDaEvitare: ['Aspettarsi un villaggio tranquillo a Maafushi: è molto costruita e affollata', 'Contare sui traghetti di venerdì'],
    luoghi: [
      {
        "nome": "Maafushi e la bikini beach",
        "testo": "L'isola locale più sviluppata vicino a Malé, con una bikini beach segnalata, molte guesthouse e barriere vicine dove si vedono tartarughe.",
        "come": "Speedboat condiviso da Malé in circa 45 minuti. Il traghetto MTCC via Gulhi parte di solito nel pomeriggio, da sabato a giovedì, e impiega 1 ora e mezza-2 ore.",
        "quando": "Tutto l'anno; da dicembre ad aprile il mare è più calmo.",
        "tempo": "2-3 giorni",
        "costo": "Speedboat condiviso 20-40 $ a tratta; traghetto MTCC 2-3 $ (indicativo, 2026)",
        "consiglio": "È molto costruita e affollata: non è il villaggio tranquillo che ci si aspetta."
      },
      {
        "nome": "Fulidhoo",
        "testo": "Una piccola isola locale di Vaavu, tranquilla, con strade di sabbia, poche centinaia di abitanti e una manciata di guesthouse. Sul molo, la sera, arrivano spesso squali nutrice e razze in cerca degli scarti del pesce. È una buona base per i canali di Vaavu e per la notturna di Alimatha.",
        "come": "Speedboat da Malé, oppure traghetto MTCC in circa 3 ore, 2-3 volte a settimana e mai il venerdì; le escursioni si prenotano in guesthouse.",
        "tempo": "2-3 giorni"
      },
      {
        "nome": "Canali di Vaavu e Alimatha",
        "testo": "I canali di Fotteyo e Miyaru Kandu portano squali grigi. Ad Alimatha l'immersione notturna è nota per le decine di squali nutrice.",
        "come": "Con i centri diving e le escursioni delle guesthouse.",
        "quando": "Dicembre-aprile per il mare calmo.",
        "tempo": "una giornata",
        "consiglio": "I canali hanno corrente: servono esperienza e mesi di immersioni alle spalle."
      }
    ],
    programmi: [
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: speedboat da Malé a Maafushi, snorkeling con le tartarughe",
          "Giorno 2: escursione di snorkeling o immersione con gli squali nutrice",
          "Giorno 3: giornata in un resort vicino, oppure Vaavu"
        ]
      }
    ],
    zone: [
      {
        "nome": "Maafushi",
        "perChi": "servizi e scelta",
        "testo": "La più sviluppata, con molte guesthouse e ristoranti. Affollata e costruita."
      },
      {
        "nome": "Guraidhoo e Gulhi",
        "perChi": "più calma",
        "testo": "Isole più piccole e più tranquille nello stesso atollo."
      },
      {
        "nome": "Fulidhoo",
        "perChi": "poco turistico",
        "testo": "A Vaavu, tranquilla e con poche strutture."
      }
    ],
    sapori: [
      {
        "nome": "Mas huni",
        "testo": "Colazione di tonno, cocco e cipolla con la roshi, nelle guesthouse."
      },
      {
        "nome": "Garudhiya",
        "testo": "Brodo di tonno con riso, lime e peperoncino."
      },
      {
        "nome": "Pesce alla griglia",
        "testo": "Pescato in giornata e cotto alla brace nelle guesthouse."
      },
      {
        "nome": "Short eats",
        "testo": "Gulha e bajiya fritti nei caffè dell'isola, nel pomeriggio."
      }
    ],
    attenzioni: [
      "Il venerdì è giorno di festa: negozi e caffè chiudono dalla tarda mattinata, i ferry lunghi non viaggiano e le escursioni possono essere ridotte.",
      "Bikini solo sulla bikini beach segnalata; altrove spalle e ginocchia coperte, anche per il bagno.",
      "I traghetti MTCC sono lenti, con poche partenze e quasi mai il venerdì. Il biglietto si compra solo al terminal il giorno stesso, 30-45 minuti prima: portare rufiyaa o dollari in piccolo taglio e controllare gli orari su mtcc.mv o con la guesthouse.",
      "Le escursioni delle guesthouse hanno prezzi a cartello: confrontare con altre se possibile.",
      "Dal 1° gennaio 2025 la green tax è di 6 $ a persona a notte nelle guesthouse fino a 50 camere e di 12 $ nei resort: chiedere se è già nel prezzo."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'Una strada di sabbia tra le palme e le case basse di un\'isola locale delle Maldive',
    immagine: '/images/maldive/male-sud-vaavu.jpg',
  },
  {
    slug: 'rasdhoo',
    paeseSlug: 'maldive',
    ordine: 3,
    nome: 'Rasdhoo e Ari Nord',
    tipologia: ['isole locali', 'immersioni', 'squali martello'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Una settimana a Ukulhas non era nei piani: l'ultima volta è scoppiata la guerra in Medio Oriente, ci hanno cancellato i voli e, ahimè, abbiamo dovuto restare una settimana in più. Ukulhas è bella e molto autentica, ma diversa da Dhigurah: meno paradiso tropicale e più isola vissuta. Qui abbiamo fatto immersioni e brevetti con Reef Rangers Ukulhas, bravissimi.",
    introduzione:
      'Un piccolo atollo all\'estremità nord-est di Ari, con l\'isola locale di Rasdhoo, e le vicine Ukulhas e Thoddoo. Il lato esterno dell\'atollo precipita nel blu profondo.',
    percheAndarci:
      'Per gli squali martello che salgono dalle profondità all\'alba, soprattutto da dicembre ad aprile, e per un\'isola locale con buoni centri diving.',
    cosaVedere: ['Il sito degli squali martello all\'alba (Hammerhead Point)', 'Le barriere con mante e tartarughe', 'La spiaggia e i giardini di Ukulhas e Thoddoo'],
    cosaFare: ['Un\'immersione all\'alba in blu per subacquei esperti', 'Snorkeling sulle barriere della laguna'],
    doveDormire: 'Guesthouse a Rasdhoo, Ukulhas e Thoddoo.',
    doveMangiare: 'Cucina maldiviana e pesce alla griglia nelle guesthouse.',
    comeArrivare: 'Speedboat da Malé in circa 1 ora-1 ora e mezza (40-60 $), o traghetto MTCC in circa 3 ore con poche partenze a settimana.',
    comeSpostarsi: 'In barca con i centri diving.',
    periodoMigliore: 'dicembre-aprile per gli squali martello, con il picco tra gennaio e marzo.',
    costi: 'Immersione 50-80 $ dai centri locali.',
    erroriDaEvitare: ['Tentare l\'immersione degli squali martello senza esperienza in blu e in profondità'],
    luoghi: [
      {
        "nome": "Hammerhead Point",
        "testo": "Il sito è Madivaru Corner, sul lato esterno dell'atollo che precipita nel blu profondo. All'alba gli squali martello smerlati salgono dall'acqua più fredda e si vedono di solito tra 25 e 40 metri, insieme a squali grigi e aquile di mare. È un'immersione in blu, con corrente, per subacquei esperti.",
        "come": "Con un centro diving di Rasdhoo, in barca all'alba.",
        "quando": "All'alba; possibili tutto l'anno, meglio da dicembre ad aprile (picco gennaio-marzo).",
        "tempo": "mezza giornata",
        "costo": "Immersione 50-80 $ dai centri locali (indicativo, 2026)",
        "consiglio": "Non farla senza esperienza in blu e in profondità."
      },
      {
        "nome": "Ukulhas con Reef Rangers",
        "testo": "Un'isola locale di Ari Nord, bella e molto autentica, più isola vissuta che paradiso tropicale. Ci abbiamo passato una settimana: era un imprevisto, perché i voli sono stati cancellati allo scoppio della guerra in Medio Oriente. Abbiamo fatto immersioni e brevetti con Reef Rangers Ukulhas, bravissimi.",
        "come": "Speedboat da Malé, circa 1 ora-1 ora e mezza.",
        "tempo": "3-4 giorni, o di più per un brevetto",
        "consiglio": "Per diving e brevetti: Reef Rangers Ukulhas. Tenere sempre un giorno di margine prima del volo."
      },
      {
        "nome": "Barriere di Rasdhoo, Ukulhas e Thoddoo",
        "testo": "Snorkeling sulle barriere della laguna, con mante e tartarughe. Le spiagge e i giardini di Ukulhas e Thoddoo.",
        "come": "Escursioni in barca dalle guesthouse e dai centri diving.",
        "quando": "Tutto l'anno; da dicembre ad aprile mare più calmo e acqua più limpida.",
        "tempo": "una giornata"
      }
    ],
    programmi: [
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: speedboat da Malé a Rasdhoo, snorkeling sul reef",
          "Giorno 2: immersione all'alba a Hammerhead Point (esperti) o snorkeling con le mante",
          "Giorno 3: Ukulhas e Thoddoo"
        ]
      }
    ],
    zone: [
      {
        "nome": "Rasdhoo",
        "perChi": "subacquei",
        "testo": "Isola locale con buoni centri diving e guesthouse. Comoda per l'alba sugli squali martello."
      },
      {
        "nome": "Ukulhas",
        "perChi": "chi cerca un'isola vissuta",
        "testo": "Autentica, con diving e brevetti. Meno paradiso tropicale che a Dhigurah."
      },
      {
        "nome": "Thoddoo",
        "perChi": "verde e calma",
        "testo": "Isola agricola, con giardini e meno turisti."
      }
    ],
    sapori: [
      {
        "nome": "Pesce alla griglia",
        "testo": "Pescato del giorno nelle guesthouse, con riso e contorni."
      },
      {
        "nome": "Mas huni",
        "testo": "Tonno, cocco e cipolla con la roshi a colazione."
      },
      {
        "nome": "Curry di tonno",
        "testo": "Curry di tonno con riso, nelle guesthouse a cena."
      },
      {
        "nome": "Frutta di Thoddoo",
        "testo": "Anguria, papaya e altra frutta coltivata sull'isola."
      }
    ],
    attenzioni: [
      "Imprevisti sui voli: tenere un giorno di margine, perché cancellazioni e ritardi possono tenerti fermo sull'isola.",
      "Hammerhead Point senza esperienza in blu e in profondità è pericoloso.",
      "Ultima immersione almeno 24 ore prima del volo, idrovolante compreso, e assicurazione con copertura subacquea.",
      "Il venerdì molti negozi chiudono e le escursioni possono ridursi."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'La spiaggia bianca sul lato della laguna di Kuramathi, nell\'atollo di Rasdhoo',
    immagine: '/images/maldive/rasdhoo.jpg',
  },
  {
    slug: 'ari-sud',
    paeseSlug: 'maldive',
    ordine: 4,
    nome: 'Ari Sud (Dhigurah e Dhangethi)',
    tipologia: ['isole locali', 'snorkeling', 'squali balena', 'mante'],
    giorniConsigliati: '4-5 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Dhigurah è incredibile, probabilmente l'isola più completa di tutte le Maldive, anche se un po' di gente c'è comunque. Una cosa non mi è piaciuta: per le escursioni non hai autonomia nella scelta, puoi solo affidarti alla tua homestay o al tuo hotel, e i prezzi sono «a cartello».",
    introduzione:
      'La parte meridionale dell\'atollo di Ari, con l\'area marina protetta tra Maamigili e Dhigurah dove gli squali balena giovani si nutrono lungo la barriera esterna tutto l\'anno.',
    percheAndarci:
      'È il posto più semplice delle Maldive per nuotare con lo squalo balena, con isole locali dalle spiagge lunghe e mante nelle stazioni di pulizia.',
    cosaVedere: [
      'Lo squalo balena lungo la barriera esterna',
      'Le mante nelle stazioni di pulizia, come intorno a Rangali',
      'La lunga bikini beach di Dhigurah',
      'Le sandbank della laguna',
    ],
    cosaFare: ['Snorkeling con lo squalo balena', 'Snorkeling o immersione con le mante', 'Pesca al tramonto in dhoni'],
    doveDormire: 'Guesthouse a Dhigurah e Dhangethi; resort su isole vicine.',
    doveMangiare: 'Cucina maldiviana nelle guesthouse, pesce del giorno.',
    comeArrivare: 'Speedboat da Malé in circa 2 ore (60-100 $), o volo interno per Maamigili e barca.',
    comeSpostarsi: 'Escursioni in barca dalle guesthouse e dai centri diving.',
    periodoMigliore: 'tutto l\'anno per gli squali balena, con più avvistamenti tra agosto e novembre secondo Visit Maldives e mare più calmo da dicembre ad aprile; mante sul lato occidentale nella stagione secca.',
    costi: 'Squalo balena 60-120 $ a persona; mante e sandbank 70-130 $.',
    erroriDaEvitare: [
      'Avvicinarsi a meno di 3 metri dallo squalo balena, toccarlo o usare il flash',
      'Scegliere operatori che non rispettano i limiti di barche e nuotatori',
    ],
    luoghi: [
      {
        "nome": "Squalo balena lungo la barriera esterna",
        "testo": "La South Ari Marine Protected Area (SAMPA), tra Maamigili e Dhigurah, è uno dei pochi posti al mondo dove gli squali balena, quasi tutti giovani maschi, si vedono tutto l'anno. Nuotano lungo la barriera esterna, spesso vicino alla superficie: basta maschera e pinne. È il posto più semplice delle Maldive per incontrarli, e le barche si coordinano via radio per trovarli.",
        "come": "Escursione in barca dalle guesthouse e dai centri diving di Dhigurah e Dhangethi.",
        "quando": "Tutto l'anno; secondo Visit Maldives gli avvistamenti sono più numerosi tra agosto e novembre, mentre da dicembre ad aprile il mare è più calmo.",
        "tempo": "mezza giornata",
        "costo": "60-120 $ a persona (indicativo, 2026)",
        "consiglio": "Restare ad almeno 3 metri dal corpo e 4 dalla coda, non toccarlo, non nuotargli davanti e niente flash. Scegliere operatori che rispettano i limiti di barche e nuotatori."
      },
      {
        "nome": "Mante nelle stazioni di pulizia",
        "testo": "Le mante frequentano le stazioni di pulizia intorno a Rangali, sul lato occidentale dell'atollo. Si vedono in snorkeling o in immersione.",
        "come": "In barca con le guesthouse o i centri diving.",
        "quando": "Stagione secca, da dicembre.",
        "tempo": "mezza giornata",
        "costo": "Mante e sandbank 70-130 $ (indicativo, 2026)"
      },
      {
        "nome": "Bikini beach di Dhigurah",
        "testo": "Dhigurah è incredibile, probabilmente l'isola più completa di tutte le Maldive. Una lunga spiaggia, anche se un po' di gente c'è comunque.",
        "come": "Speedboat da Malé in circa 2 ore, di solito due partenze al giorno, oppure volo interno a Maamigili e barca.",
        "tempo": "mezza giornata",
        "costo": "Speedboat 60-100 $ a tratta (indicativo, 2026)",
        "consiglio": "Per le escursioni non hai autonomia nella scelta: dipendi dalla tua homestay o dal tuo hotel, e i prezzi sono «a cartello»."
      },
      {
        "nome": "Sandbank della laguna",
        "testo": "Lingue di sabbia che emergono nella laguna, con picnic e snorkeling.",
        "come": "Escursione in barca dalle guesthouse.",
        "tempo": "mezza giornata",
        "costo": "Sandbank con picnic 40-80 $ (indicativo, 2026)"
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: speedboat da Malé a Dhigurah, spiaggia e tramonto",
          "Giorno 2: squalo balena al mattino, sandbank nel pomeriggio"
        ]
      },
      {
        "titolo": "4 giorni",
        "tappe": [
          "Giorno 1: arrivo a Dhigurah",
          "Giorno 2: squalo balena",
          "Giorno 3: mante in snorkeling o immersione",
          "Giorno 4: sandbank e pesca al tramonto, poi rientro"
        ]
      }
    ],
    zone: [
      {
        "nome": "Dhigurah",
        "perChi": "spiaggia lunga",
        "testo": "Isola lunga e stretta con spiaggia, guesthouse e homestay. Un po' di gente c'è, ma resta la più completa."
      },
      {
        "nome": "Dhangethi",
        "perChi": "alternativa più piccola",
        "testo": "Isola locale con guesthouse e centri diving, più raccolta."
      },
      {
        "nome": "Resort vicini",
        "perChi": "chi vuole alcol e comfort",
        "testo": "Su isole vicine, con transfer in speedboat. Tutto più caro, ma si può bere alcol."
      }
    ],
    sapori: [
      {
        "nome": "Mas huni",
        "testo": "Colazione di tonno, cocco e cipolla con la roshi."
      },
      {
        "nome": "Garudhiya",
        "testo": "Brodo di tonno con riso, lime e peperoncino."
      },
      {
        "nome": "Pesce alla griglia",
        "testo": "Pescato in giornata, nelle guesthouse a cena."
      },
      {
        "nome": "Short eats",
        "testo": "Gulha, bajiya e kavaabu nel pomeriggio."
      }
    ],
    attenzioni: [
      "Squalo balena: non avvicinarsi a meno di 3 metri, non toccarlo e niente flash.",
      "Non scegliere operatori che non rispettano i limiti di barche e nuotatori.",
      "I prezzi delle escursioni sono «a cartello» e si può contare solo sulla propria struttura: chiedere cosa è compreso.",
      "Ultima immersione almeno 24 ore prima del volo, idrovolante compreso."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'Uno squalo balena che nuota appena sotto la superficie, l\'incontro per cui si va ad Ari Sud',
    immagine: '/images/maldive/ari-sud.jpg',
  },
  {
    slug: 'baa-hanifaru',
    paeseSlug: 'maldive',
    ordine: 5,
    nome: 'Baa e la baia di Hanifaru',
    tipologia: ['riserva UNESCO', 'mante', 'snorkeling'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Un atollo riserva della biosfera UNESCO, con la piccola baia di Hanifaru dove tra giugno e novembre si radunano decine, a volte oltre cento, mante a nutrirsi del plancton.',
    percheAndarci:
      'Per una delle più grandi aggregazioni di mante al mondo, che si osserva in snorkeling, con il picco tra agosto e ottobre.',
    cosaVedere: ['Le mante e gli squali balena occasionali a Hanifaru', 'Le barriere e i thila dell\'atollo'],
    cosaFare: ['Snorkeling a Hanifaru con guida autorizzata', 'Immersioni nei siti dell\'atollo fuori dalla baia'],
    doveDormire: 'Guesthouse a Dharavandhoo e Thulhaadhoo; resort sulle isole dell\'atollo.',
    doveMangiare: 'Cucina maldiviana nelle guesthouse; ristoranti dei resort.',
    comeArrivare: 'Idrovolante da Malé (circa 35-45 minuti) o volo interno per Dharavandhoo e barca.',
    comeSpostarsi: 'In barca.',
    periodoMigliore: 'giugno-novembre, picco agosto-ottobre nelle settimane intorno a luna nuova e luna piena.',
    costi: 'Ingresso alla baia circa 20 $ a persona al giorno, di solito compreso nell\'escursione (60-80 $ dalle isole locali).',
    erroriDaEvitare: [
      'Aspettarsi di immergersi con le bombole: a Hanifaru è consentito solo lo snorkeling',
      'Prenotare all\'ultimo minuto in agosto-ottobre: gli ingressi sono contingentati',
    ],
    luoghi: [
      {
        "nome": "Baia di Hanifaru",
        "testo": "Una piccola baia a forma di imbuto nella riserva della biosfera UNESCO di Baa (dal 2011). Con il monsone di sud-ovest le correnti vi intrappolano il plancton e arrivano decine, a volte oltre cento, mante che mangiano in cerchio, a volte con qualche squalo balena. Si osserva solo in snorkeling, a turni di circa 45 minuti controllati dai ranger.",
        "come": "In barca da Dharavandhoo o Thulhaadhoo con guida autorizzata. Le immersioni con bombole sono vietate.",
        "quando": "Da giugno a novembre, con picco tra agosto e ottobre nelle settimane intorno a luna nuova e luna piena.",
        "tempo": "mezza giornata",
        "costo": "Ingresso 20 $ a persona al giorno per il fondo di conservazione dell'atollo, di solito già incluso nell'escursione (indicativo, 2026)",
        "consiglio": "Prenotare in anticipo in agosto-ottobre: gli ingressi sono contingentati. Vietati flash e contatto con gli animali."
      },
      {
        "nome": "Barriere e thila dell'atollo",
        "testo": "Fuori dalla baia, le immersioni nei siti dell'atollo, tra pinnacoli sommersi (thila) e barriere. Qui le bombole sono ammesse e le stazioni di pulizia attirano mante anche quando la baia è vuota. È il modo di vedere Baa sott'acqua senza i turni e le regole di Hanifaru.",
        "come": "Con i centri diving delle isole locali o dei resort.",
        "tempo": "una giornata"
      }
    ],
    programmi: [
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: idrovolante o volo interno a Dharavandhoo, poi barca alla guesthouse",
          "Giorno 2: Hanifaru in snorkeling con guida autorizzata",
          "Giorno 3: snorkeling o immersioni fuori dalla baia"
        ]
      }
    ],
    zone: [
      {
        "nome": "Dharavandhoo",
        "perChi": "vicino alla baia",
        "testo": "Isola locale con aeroporto e guesthouse, la base più vicina a Hanifaru."
      },
      {
        "nome": "Thulhaadhoo",
        "perChi": "isola tranquilla",
        "testo": "Isola locale con guesthouse, meno turistica."
      },
      {
        "nome": "Resort di Baa",
        "perChi": "chi vuole comfort",
        "testo": "Sulle isole dell'atollo, con idrovolante da Malé. Caro ma comodo per le mante."
      }
    ],
    sapori: [
      {
        "nome": "Mas huni",
        "testo": "Tonno, cocco e cipolla con la roshi."
      },
      {
        "nome": "Garudhiya",
        "testo": "Brodo di tonno con riso, lime e peperoncino."
      },
      {
        "nome": "Pesce alla griglia",
        "testo": "Pescato in giornata, nelle guesthouse."
      },
      {
        "nome": "Buffet dei resort",
        "testo": "Cucina internazionale e di pesce, a prezzi alti alla carta: la pensione completa spesso conviene."
      }
    ],
    attenzioni: [
      "A Hanifaru è consentito solo lo snorkeling: niente bombole.",
      "In agosto-ottobre gli ingressi sono contingentati: non prenotare all'ultimo minuto.",
      "Le mante non sono garantite: dipendono da marea, luna e plancton.",
      "L'idrovolante vola solo di giorno e ha limiti di bagaglio: controllare prima."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'Un gruppo di mante viste dall\'alto mentre nuotano nell\'acqua turchese',
    immagine: '/images/maldive/baa-hanifaru.jpg',
  },
  {
    slug: 'fuvahmulah',
    paeseSlug: 'maldive',
    ordine: 6,
    nome: 'Fuvahmulah',
    tipologia: ['immersioni', 'squali tigre', 'isola locale'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Per le immersioni consiglio fuvahmulahdive.com. Non è un posto per principianti: serve esperienza e spesso si è nel blu. Ma se ti piacciono i grandi pelagici è incredibile, soprattutto per lo squalo tigre.",
    introduzione:
      'Un atollo formato da una sola isola nel sud delle Maldive, quasi sull\'equatore, senza laguna, con l\'oceano profondo a pochi metri dalla riva, laghi d\'acqua dolce e una vegetazione fitta.',
    percheAndarci:
      'Per gli squali tigre, presenti tutto l\'anno, insieme a squali volpe, martello e mola mola in alcune stagioni: una delle immersioni con squali più note al mondo.',
    cosaVedere: ['Gli squali tigre al Tiger Zoo', 'I laghi interni e la spiaggia di Thoondu, con la sabbia di ciottoli bianchi'],
    cosaFare: ['Immersioni con gli squali tigre per subacquei certificati', 'Un giro in bici dell\'isola'],
    doveDormire: 'Guesthouse e piccoli hotel legati ai centri diving.',
    doveMangiare: 'Cucina maldiviana nelle guesthouse.',
    comeArrivare: 'Volo interno da Malé in circa 1 ora e 20-25 minuti.',
    comeSpostarsi: 'Bici, scooter, taxi.',
    periodoMigliore: 'tutto l\'anno; il mare può essere mosso da maggio a novembre.',
    erroriDaEvitare: ['Andarci senza esperienza: correnti e condizioni oceaniche richiedono brevetto avanzato e un buon numero di immersioni'],
    luoghi: [
      {
        "nome": "Tiger Zoo, gli squali tigre",
        "testo": "Il sito di immersione degli squali tigre, presenti tutto l'anno, insieme a squali volpe, martello e mola mola in alcune stagioni. Non è un posto per principianti: serve esperienza e spesso si è nel blu, ma se piacciono i grandi pelagici è incredibile.",
        "come": "Con un centro diving dell'isola. Consiglio fuvahmulahdive.com.",
        "quando": "Tutto l'anno; il mare può essere mosso da maggio a novembre.",
        "tempo": "una giornata",
        "consiglio": "Serve un brevetto avanzato e un buon numero di immersioni: correnti e condizioni oceaniche non perdonano."
      },
      {
        "nome": "Laghi interni e spiaggia di Thoondu",
        "testo": "L'isola ha due laghi d'acqua dolce, caso raro alle Maldive: Bandaara Kilhi, il più grande, con le paludi e i fanghi di Koda Kilhi, e Dhadimagi Kilhi, con il Fuvahmulah Nature Park, una passerella di legno e aironi. A nord, la spiaggia di Thoondu è fatta di piccoli ciottoli bianchi e lisci invece che di sabbia, ed è area protetta.",
        "come": "In bici, scooter o taxi sull'isola.",
        "tempo": "mezza giornata"
      },
      {
        "nome": "Giro in bici dell'isola",
        "testo": "L'atollo è formato da una sola isola, senza laguna, con l'oceano profondo a pochi metri dalla riva. Un giro in bici permette di vederla tutta.",
        "come": "Bici a noleggio nel paese.",
        "tempo": "mezza giornata"
      }
    ],
    programmi: [
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: volo interno da Malé (1 ora e 20), giro dell'isola",
          "Giorno 2: immersioni con gli squali tigre",
          "Giorno 3: laghi interni e spiaggia di Thoondu"
        ]
      }
    ],
    zone: [
      {
        "nome": "Guesthouse legate ai centri diving",
        "perChi": "subacquei",
        "testo": "Sistemazione semplice, spesso prenotata insieme alle immersioni. L'isola è piccola, quindi ci si sposta in bici o scooter."
      }
    ],
    sapori: [
      {
        "nome": "Mas huni",
        "testo": "Tonno, cocco e cipolla con la roshi a colazione."
      },
      {
        "nome": "Garudhiya",
        "testo": "Brodo di tonno con riso, lime e peperoncino."
      },
      {
        "nome": "Pesce del giorno",
        "testo": "Alla griglia o in curry nelle guesthouse."
      },
      {
        "nome": "Frutta dell'isola",
        "testo": "Papaya, banana e cocco coltivati nei campi dell'isola, che ha vegetazione fitta."
      }
    ],
    attenzioni: [
      "Andarci senza esperienza: correnti e condizioni oceaniche richiedono brevetto avanzato e un buon numero di immersioni.",
      "Ultima immersione almeno 24 ore prima del volo, e assicurazione con copertura subacquea.",
      "Il mare può essere mosso da maggio a novembre.",
      "Il volo interno ha limiti di bagaglio: controllare prima di partire."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'Uno squalo tigre che nuota sul fondale sabbioso',
    immagine: '/images/maldive/fuvahmulah.jpg',
  },
]
