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
    miaEsperienza:
      "Malé e Hulhumalé sono stati il mio punto di arrivo e di partenza alle Maldive, tra l'aeroporto Velana e gli speedboat per le isole.",
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
    comeArrivare: "L'aeroporto Velana è sull'isola di Hulhulé, davanti a Malé. Per la capitale c'è il traghetto pubblico, 10-15 minuti, circa ogni 15 minuti dalle 5 a mezzanotte, per circa 1 $ in rufiyaa (circa 1 €); in alternativa il bus sul ponte Sinamalé (10-15 MVR) o il taxi (circa 70 MVR, circa 4 €). Hulhumalé è a una decina di minuti in bus (10-20 MVR) o in taxi (circa 80 MVR, circa 4,50 €). Speedboat e idrovolanti per le altre isole partono dai banchi agli arrivi.",
    comeSpostarsi: 'A piedi e in taxi.',
    periodoMigliore: 'tutto l\'anno.',
    costi: "Traghetto per Malé circa 1 $, bus 10-20 MVR, taxi 70-80 MVR (circa 4-4,50 €), 2026. Budget: circa 70-100 € al giorno con guesthouse a Hulhumalé, caffè locali e bus. Medio: 120-200 € con hotel sul lungomare e taxi. Alto: oltre 250 € con gli hotel migliori di Hulhumalé e cene al ristorante.",
    erroriDaEvitare: ['Visitare le moschee durante la preghiera o senza abiti coperti', 'Cercare alcol: Malé e Hulhumalé sono isole abitate, e lì vale il divieto'],
    luoghi: [
      {
        "nome": "Mercato del pesce di Malé",
        "costo": "Ingresso libero.",
        "testo": "Sul lungomare nord di Malé i dhoni scaricano tonni e pesce di barriera, che vengono tagliati sui banconi davanti a chi guarda. È il posto più vero della capitale: odore forte, pavimenti bagnati, pescatori che contrattano. Accanto c'è il mercato della frutta e verdura, con cocchi, peperoncini e pacchetti di pesce secco.",
        "come": "Dal terminal del traghetto aeroportuale, a piedi in pochi minuti.",
        "quando": "Dal primo pomeriggio, quando rientrano le barche; il venerdì ritmi ridotti per la preghiera. Orari non fissi.",
        "tempo": "1 ora",
        "consiglio": "Per le foto alle persone, chiedere sempre il permesso."
      },
      {
        "nome": "Moschea del Venerdì (Hukuru Miskiy)",
        "lng": 73.5125,
        "lat": 4.17806,
        "testo": "Costruita nel 1658 sotto il sultano Ibrahim Iskandar, è la moschea più antica di Malé: blocchi di corallo incastrati senza malta e scolpiti con motivi e iscrizioni, soffitti e travi in legno laccato. Accanto ci sono il cimitero con le lapidi di corallo e il minareto Munnaaru. Le moschee in pietra di corallo delle Maldive sono nella lista propositiva UNESCO.",
        "come": "A piedi dal centro di Malé. Per entrare i non musulmani devono avere un permesso: si chiede al personale della moschea o al Ministero degli Affari Islamici; da fuori si vede comunque bene.",
        "quando": "Fuori dagli orari di preghiera, evitando il venerdì.",
        "tempo": "30 minuti",
        "consiglio": "Spalle e ginocchia coperte; durante la preghiera non si entra."
      },
      {
        "nome": "Spiaggia di Hulhumalé",
        "costo": "Spiaggia pubblica, libera.",
        "lng": 73.54,
        "lat": 4.2125,
        "testo": "La spiaggia cittadina dell'isola artificiale accanto all'aeroporto, con lungomare e ristoranti. Comoda per la prima o l'ultima notte.",
        "come": "Da Velana in bus o taxi, 10-15 minuti.",
        "quando": "Tramonto e sera.",
        "tempo": "una sera",
        "consiglio": "È un'isola abitata: valgono le regole locali, quindi abiti coperti e niente alcol."
      },
      {
        "nome": "Museo Nazionale e Sultan Park",
        "testo": "Aperto nel 1952, il museo raccoglie reperti dall'epoca buddhista ai sultani islamici: pietre scolpite, armi, abiti e oggetti della corte. Sta nel Sultan Park, parte del complesso del palazzo reale del Seicento, distrutto da un incendio nel 1968. Il parco, con alberi e panchine all'ombra, è uno dei pochi angoli verdi del centro.",
        "come": "A piedi dal centro di Malé, accanto alla Grande Moschea del Venerdì.",
        "quando": "Al mattino, prima delle ore più calde.",
        "tempo": "1-1,5 ore",
        "lat": 4.177283,
        "lng": 73.509979,
        "consiglio": "Orari e biglietto vanno chiesti sul posto: cambiano e non sono pubblicati in modo affidabile."
      },
      {
        "nome": "Grande Moschea del Venerdì (Islamic Centre)",
        "testo": "Inaugurata nel novembre 1984, con la grande cupola dorata e un minareto di 41 metri è il profilo più riconoscibile di Malé. Fu costruita con il contributo di diversi paesi islamici, ricordati su una targa all'ingresso.",
        "come": "A piedi nel centro, di fronte al Sultan Park.",
        "quando": "Fuori dagli orari di preghiera, mai il venerdì a mezzogiorno.",
        "tempo": "20-30 minuti",
        "consiglio": "Spalle e ginocchia coperte."
      },
      {
        "nome": "Mulee-aage",
        "testo": "La residenza ufficiale del presidente, costruita tra il 1914 e il 1919 per l'erede al trono, nello stile dei bungalow coloniali di Ceylon. Sta accanto alla vecchia Moschea del Venerdì e al minareto Munnaaru, nel nucleo storico della città.",
        "come": "A piedi; si vede solo dall'esterno.",
        "tempo": "15 minuti",
        "lat": 4.1775,
        "lng": 73.5125
      },
      {
        "nome": "Artificial Beach",
        "testo": "La piccola spiaggia ricavata all'angolo orientale di Malé, protetta dai frangiflutti. La sera si riempie di famiglie e ragazzi che fanno il bagno vestiti: è il posto migliore per vedere la città quando si rilassa.",
        "come": "A piedi, all'estremità est del lungomare.",
        "quando": "Tardo pomeriggio e sera.",
        "tempo": "30 minuti-1 ora",
        "costo": "Libera.",
        "lat": 4.17426,
        "lng": 73.51856,
        "consiglio": "Bagno con maglietta e pantaloncini lunghi: niente bikini."
      },
      {
        "nome": "Ponte Sinamalé",
        "testo": "Aperto il 30 agosto 2018, è il primo ponte tra isole delle Maldive: 2,1 km tra Malé, l'isola dell'aeroporto e Hulhumalé, con corsie pedonali separate. Dall'alto si vedono la laguna, il porto e la sagoma fitta della capitale.",
        "come": "A piedi dal lato est di Malé, oppure in bus o taxi.",
        "quando": "Al mattino presto o al tramonto, quando il sole è basso.",
        "tempo": "circa 30 minuti a piedi",
        "lat": 4.17294,
        "lng": 73.52449
      },
      {
        "nome": "Monumento allo tsunami",
        "testo": "Sul lungomare sud-occidentale di Malé, ricorda le vittime dello tsunami del 26 dicembre 2004, che colpì quasi tutti gli atolli. Una sosta breve, lungo la passeggiata verso il terminal dei traghetti di Villimalé.",
        "come": "A piedi lungo il lungomare sud.",
        "tempo": "15 minuti",
        "costo": "Libero.",
        "lat": 4.17156,
        "lng": 73.50109
      },
      {
        "nome": "Villimalé (Villingili)",
        "testo": "Un'isola a 2 km a ovest di Malé, oggi quinto distretto della città. Nel 1973 diventò il secondo resort delle Maldive, poi un quartiere residenziale: è più verde e tranquilla della capitale, con una spiaggia pubblica.",
        "come": "Traghetto pubblico dal terminal di Villingili, sul lato ovest di Malé, attivo 24 ore su 24.",
        "quando": "Mattino o tardo pomeriggio.",
        "tempo": "mezza giornata",
        "lat": 4.17361,
        "lng": 73.48472,
        "consiglio": "È un'isola abitata: in spiaggia costume coperto."
      },
      {
        "nome": "Traghetto Velana-Malé",
        "testo": "Il modo più economico e più maldiviano per arrivare nella capitale: un battello che attraversa il canale tra l'isola dell'aeroporto e Malé insieme a pendolari e lavoratori. In dieci minuti si passa dal terminal al lungomare nord, vicino al mercato del pesce.",
        "come": "Il molo è davanti agli arrivi dell'aeroporto Velana; biglietto in contanti.",
        "tempo": "10-15 minuti",
        "costo": "Circa 1 $ in rufiyaa (circa 1 €), 2026.",
        "orari": "Circa ogni 15 minuti, dalle 5 a mezzanotte.",
        "lat": 4.19167,
        "lng": 73.52889
      },
      {
        "nome": "Banana Reef",
        "testo": "In Malé Nord, è uno dei primi siti d'immersione aperti alle Maldive e oggi area marina protetta. Ha la forma di una banana: pareti, grotte e sporgenze con banchi di pesci, squali di barriera e coralli molli.",
        "come": "Con un centro diving di Malé, Hulhumalé o dei resort vicini.",
        "quando": "Tutto l'anno; da dicembre ad aprile visibilità migliore.",
        "tempo": "mezza giornata",
        "costo": "Immersione 50-80 $ dai centri locali, circa 43-70 € (2026)."
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
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: arrivo a Velana, bus per Hulhumalé, spiaggia e cena sul lungomare",
          "Giorno 2: Malé a piedi tra Museo Nazionale, moschee e mercati, poi traghetto per Villimalé e tramonto all'Artificial Beach"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Hulhumalé e il ponte Sinamalé al tramonto",
          "Giorno 2: Malé, dal mercato del pesce alla Moschea del Venerdì e al Sultan Park",
          "Giorno 3: immersione a Banana Reef o giornata in un resort vicino"
        ]
      }
    ],
    zone: [
      {
        "nome": "Hulhumalé",
        "perChi": "prima o ultima notte",
        "testo": "A 10-15 minuti da Velana, con hotel e guesthouse da 60 a 150 $ e ristoranti sul lungomare. Moderna e un po' anonima.",
        "fascia": "50-130 €"
      },
      {
        "nome": "Malé",
        "perChi": "chi vuole la città",
        "testo": "Capitale densissima, rumorosa e senza spiaggia. Utile per una mezza giornata, meno per dormire."
      },
      {
        "nome": "Villimalé",
        "perChi": "chi vuole calma vicino alla capitale",
        "testo": "Isola residenziale a 2 km da Malé, con spiaggia pubblica e traghetto 24 ore su 24. Più verde e silenziosa, ma lontana dall'aeroporto."
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
    gite: [
      {
        "nome": "Maafushi",
        "distanza": "circa 45 minuti di speedboat",
        "come": "Speedboat condiviso da Malé o dall'aeroporto, 25-40 $ a tratta (circa 22-35 €).",
        "testo": "L'isola locale più sviluppata di Malé Sud, con bikini beach e barriere con le tartarughe. Meglio con una notte, ma regge anche una giornata."
      },
      {
        "nome": "Giornata in un resort",
        "distanza": "20-60 minuti di speedboat",
        "come": "Pacchetto day pass del resort con transfer, 100-200 $ con pranzo (circa 85-170 €).",
        "testo": "Per vedere una house reef e una spiaggia da resort senza dormirci. A volte l'alcol è compreso."
      },
      {
        "nome": "Guraidhoo",
        "distanza": "31 km, circa 45 minuti di speedboat",
        "come": "Speedboat condiviso, tre partenze al giorno; il traghetto MTCC impiega circa 2 ore e 15.",
        "testo": "Isola locale più raccolta di Maafushi, con i canali dell'area marina protetta di Guraidhoo Kandu."
      }
    ],
    faq: [
      {
        "domanda": "Vale la pena visitare Malé?",
        "risposta": "Per mezza giornata sì: mercato del pesce, Moschea del Venerdì, Museo Nazionale e lungomare si vedono a piedi in poche ore. Per dormire conviene Hulhumalé."
      },
      {
        "domanda": "Dove dormire la notte prima o dopo il volo?",
        "risposta": "A Hulhumalé, a 10-15 minuti dall'aeroporto, con hotel e guesthouse da 60 a 150 $. Chi atterra la sera ed è diretto a un atollo lontano deve quasi sempre dormire qui, perché gli idrovolanti volano solo di giorno."
      },
      {
        "domanda": "Come si va dall'aeroporto a Malé?",
        "risposta": "Con il traghetto pubblico, 10-15 minuti per circa 1 $, oppure in bus o taxi sul ponte Sinamalé."
      },
      {
        "domanda": "Si può bere alcol a Malé e Hulhumalé?",
        "risposta": "No. Sono isole abitate e l'alcol non si vende né si beve; è vietato anche importarlo. Si trova solo nei resort e sulle barche safari."
      },
      {
        "domanda": "Come ci si veste a Malé?",
        "risposta": "Spalle e ginocchia coperte in città e nelle moschee. In spiaggia, a Hulhumalé come all'Artificial Beach, niente bikini: maglietta e pantaloncini."
      },
      {
        "domanda": "Si può entrare nella vecchia Moschea del Venerdì?",
        "risposta": "Ai non musulmani serve un permesso, da chiedere al personale della moschea o al Ministero degli Affari Islamici. Il cortile, il cimitero di corallo e il minareto si vedono comunque dall'esterno."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'Malé vista dall\'alto, con il porto pieno di barche e gli edifici colorati della capitale',
    immagine: '/images/maldive/male-dall-alto.jpg',
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
    comeArrivare: "Da Velana o da Malé partono speedboat condivisi a orari fissi: circa 45 minuti per Maafushi e Guraidhoo, 25-40 $ a tratta (circa 22-35 €), più a lungo per Fulidhoo e Vaavu. Si prenotano tramite la guesthouse, che di solito organizza il ritiro agli arrivi. I traghetti pubblici MTCC partono dal terminal di Villingili a Malé, costano 2-3 $, impiegano da 1 ora e mezza a 3 ore, hanno poche corse e non viaggiano il venerdì.",
    comeSpostarsi: 'Escursioni in barca organizzate dalle guesthouse.',
    periodoMigliore: 'dicembre-aprile per il mare calmo; da maggio a novembre speedboat più mossi.',
    costi: "Speedboat 25-40 $ a tratta (circa 22-35 €), traghetto MTCC 2-3 $, immersione 50-80 $ (circa 43-70 €), 2026. Budget: circa 80-110 € al giorno con guesthouse semplice, pasti in guesthouse e un'escursione. Medio: 150-250 € con guesthouse boutique ed escursioni ogni giorno. Alto: oltre 300 € con immersioni quotidiane e una giornata in resort.",
    erroriDaEvitare: ['Aspettarsi un villaggio tranquillo a Maafushi: è molto costruita e affollata', 'Contare sui traghetti di venerdì'],
    luoghi: [
      {
        "nome": "Maafushi e la bikini beach",
        "lng": 73.49001,
        "lat": 3.94116,
        "testo": "L'isola locale più sviluppata vicino a Malé, con una bikini beach segnalata, molte guesthouse e barriere vicine dove si vedono tartarughe.",
        "come": "Speedboat condiviso da Malé in circa 45 minuti. Il traghetto MTCC via Gulhi parte di solito nel pomeriggio, da sabato a giovedì, e impiega 1 ora e mezza-2 ore.",
        "quando": "Tutto l'anno; da dicembre ad aprile il mare è più calmo.",
        "tempo": "2-3 giorni",
        "costo": "Speedboat condiviso 20-40 $ a tratta; traghetto MTCC 2-3 $ (indicativo, 2026)",
        "consiglio": "È molto costruita e affollata: non è il villaggio tranquillo che ci si aspetta."
      },
      {
        "nome": "Fulidhoo",
        "costo": "Traghetto MTCC 2-3 $; speedboat da concordare con la guesthouse (2026).",
        "lng": 73.41472,
        "lat": 3.68056,
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
      },
      {
        "nome": "Guraidhoo",
        "testo": "Isola locale di Malé Sud, a circa 31 km dalla capitale, con circa 3.000 abitanti. È più piccola e meno costruita di Maafushi, nota per lo snorkeling con le tartarughe, le sandbank e qualche onda per il surf.",
        "come": "Speedboat condiviso in circa 45 minuti, tre partenze al giorno; traghetto MTCC in circa 2 ore e 15.",
        "quando": "Dicembre-aprile per il mare calmo.",
        "tempo": "2-3 giorni",
        "costo": "Speedboat 25-40 $ a tratta, circa 22-35 € (2026).",
        "lat": 3.9,
        "lng": 73.46833
      },
      {
        "nome": "Gulhi",
        "testo": "Piccola isola locale tra Malé e Maafushi, sulla rotta del traghetto MTCC. Ha meno strutture e meno gente della vicina, ma le stesse escursioni a tartarughe, sandbank e resort.",
        "come": "Speedboat condiviso da Malé, oppure traghetto MTCC per Maafushi, che fa scalo qui.",
        "tempo": "2-3 giorni",
        "costo": "Speedboat 25-40 $, circa 22-35 €; traghetto 2-3 $ (2026).",
        "lat": 3.98889,
        "lng": 73.50889
      },
      {
        "nome": "Guraidhoo Kandu",
        "testo": "Un'area marina protetta di Malé Sud con due canali principali, Lhosfushi Kandu e Guraidhoo Kandu, e diversi siti d'immersione. Con la corrente entrante arrivano squali di barriera, aquile di mare e grandi banchi di pesci.",
        "come": "Con i centri diving di Guraidhoo e Maafushi.",
        "quando": "Dicembre-aprile, con la corrente entrante.",
        "tempo": "mezza giornata",
        "costo": "Immersione 50-80 $, circa 43-70 € (2026).",
        "consiglio": "Canale con corrente: serve esperienza."
      },
      {
        "nome": "Kandooma Thila",
        "testo": "Un pinnacolo sommerso di Malé Sud, vicino a Guraidhoo, battuto dalle correnti. È noto per squali grigi, aquile di mare, carangidi e coralli molli sulle pareti.",
        "come": "In barca con i centri diving di Guraidhoo, Maafushi e dei resort vicini.",
        "tempo": "mezza giornata",
        "costo": "Immersione 50-80 $, circa 43-70 € (2026).",
        "consiglio": "Per subacquei con brevetto avanzato."
      },
      {
        "nome": "Fotteyo Kandu",
        "testo": "Sul bordo orientale di Vaavu, uno dei canali più famosi delle Maldive: grotte e sporgenze coperte di coralli molli colorati, squali grigi e aquile di mare quando la corrente entra dall'oceano.",
        "come": "Con i centri diving di Fulidhoo, Keyodhoo e Thinadhoo, o in liveaboard.",
        "quando": "Dicembre-aprile.",
        "tempo": "mezza giornata",
        "consiglio": "Corrente forte: solo per subacquei esperti."
      },
      {
        "nome": "Felidhoo",
        "testo": "Il capoluogo dell'atollo di Vaavu, sul lato orientale, vicino ai canali. È un'isola di vita quotidiana, con porto, scuola e moschea, ancora poco toccata dal turismo.",
        "come": "Speedboat da Malé o traghetto MTCC per Vaavu.",
        "tempo": "mezza giornata",
        "lat": 3.47167,
        "lng": 73.54722
      },
      {
        "nome": "Thinadhoo (Vaavu)",
        "testo": "Piccola isola locale di Vaavu accanto a Felidhoo, con poche guesthouse. È una base tranquilla per le immersioni nei canali orientali dell'atollo.",
        "come": "Speedboat da Malé, organizzato dalla guesthouse.",
        "tempo": "2-3 giorni",
        "lat": 3.48889,
        "lng": 73.53917
      },
      {
        "nome": "Traghetto MTCC per Maafushi",
        "testo": "Il traghetto pubblico è lento ma costa una frazione dello speedboat e viaggia insieme ai maldiviani, tra sacchi di riso e motorini. Sulla rotta per Maafushi fa scalo a Gulhi.",
        "come": "Dal terminal di Villingili a Malé; biglietto in contanti il giorno stesso, 30-45 minuti prima.",
        "tempo": "1 ora e mezza-2 ore",
        "costo": "2-3 $, circa 2-3 € (2026).",
        "orari": "Di solito nel pomeriggio, da sabato a giovedì; mai il venerdì."
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
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: speedboat per Maafushi o Guraidhoo, bikini beach e tramonto",
          "Giorno 2: snorkeling con le tartarughe e sandbank, poi rientro a Malé"
        ]
      },
      {
        "titolo": "5 giorni",
        "tappe": [
          "Giorni 1-2: Guraidhoo o Maafushi, tartarughe e un'immersione a Guraidhoo Kandu",
          "Giorno 3: trasferimento a Fulidhoo, squali nutrice sul molo la sera",
          "Giorno 4: Fotteyo Kandu o snorkeling, notturna di Alimatha",
          "Giorno 5: rientro a Malé, mai di venerdì in traghetto"
        ]
      }
    ],
    zone: [
      {
        "nome": "Maafushi",
        "perChi": "servizi e scelta",
        "testo": "La più sviluppata, con molte guesthouse e ristoranti. Affollata e costruita.",
        "fascia": "50-170 €"
      },
      {
        "nome": "Guraidhoo e Gulhi",
        "perChi": "più calma",
        "testo": "Isole più piccole e più tranquille nello stesso atollo."
      },
      {
        "nome": "Fulidhoo",
        "perChi": "poco turistico",
        "testo": "A Vaavu, tranquilla e con poche strutture.",
        "fascia": "50-85 €"
      },
      {
        "nome": "Felidhoo, Thinadhoo e Keyodhoo",
        "perChi": "subacquei a Vaavu",
        "testo": "Isole sul lato orientale di Vaavu, vicine ai canali. Poche strutture e niente movida."
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
    gite: [
      {
        "nome": "Giornata in un resort vicino",
        "distanza": "10-30 minuti di barca da Maafushi",
        "come": "Escursione della guesthouse, 100-200 $ con pranzo (circa 85-170 €).",
        "testo": "House reef, spiaggia da cartolina e, a volte, alcol compreso: il modo per avere un assaggio di resort restando su un'isola locale."
      },
      {
        "nome": "Sandbank con picnic",
        "distanza": "15-30 minuti di barca",
        "come": "Escursione in barca dalla guesthouse, 40-80 $ (circa 35-70 €).",
        "testo": "Una lingua di sabbia in mezzo alla laguna, con snorkeling sulla barriera vicina. Niente ombra: telo, acqua e crema."
      },
      {
        "nome": "Alimatha di notte",
        "distanza": "da Fulidhoo, in barca",
        "come": "Con i centri diving di Vaavu; immersione 50-80 $ (circa 43-70 €).",
        "testo": "L'immersione notturna con decine di squali nutrice, tra le più famose delle Maldive."
      }
    ],
    faq: [
      {
        "domanda": "Meglio Maafushi o Fulidhoo?",
        "risposta": "Maafushi per scelta di guesthouse, ristoranti ed escursioni; Fulidhoo per un villaggio piccolo e silenzioso. Molti dividono il soggiorno tra le due."
      },
      {
        "domanda": "Quanto costa arrivare a Maafushi?",
        "risposta": "Lo speedboat condiviso costa 25-40 $ a tratta e impiega circa 45 minuti. Il traghetto MTCC costa 2-3 $ ma impiega 1 ora e mezza-2 ore e non viaggia il venerdì."
      },
      {
        "domanda": "Si può bere alcol a Maafushi?",
        "risposta": "Non sull'isola. Alcune barche-bar restano ancorate fuori dalla laguna e le guesthouse organizzano giornate nei resort vicini, dove l'alcol è permesso."
      },
      {
        "domanda": "Dove si vedono gli squali nutrice?",
        "risposta": "Ad Alimatha, a Vaavu, nell'immersione notturna, e spesso la sera sul molo di Fulidhoo, dove arrivano con le razze per gli scarti del pesce."
      },
      {
        "domanda": "Il venerdì ci si può spostare?",
        "risposta": "Gli speedboat viaggiano con orari ridotti, i traghetti MTCC sulle tratte lunghe no. Negozi e caffè chiudono dalla tarda mattinata per la preghiera."
      },
      {
        "domanda": "Si può fare il bagno in bikini?",
        "risposta": "Solo sulla bikini beach segnalata. Altrove, anche in acqua, spalle e ginocchia coperte."
      }
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
    comeArrivare: "Da Velana partono speedboat condivisi per Rasdhoo, Ukulhas e Thoddoo, in circa 1 ora-1 ora e mezza, per 40-70 $ a persona a tratta (circa 35-60 €). Di solito ci sono una o due partenze al giorno, prenotate tramite la guesthouse, che organizza anche il ritiro agli arrivi. Il traghetto MTCC impiega circa 3 ore, ha poche corse a settimana e non viaggia il venerdì. Tra le isole ci si sposta con le barche dei diving.",
    comeSpostarsi: 'In barca con i centri diving.',
    periodoMigliore: 'dicembre-aprile per gli squali martello, con il picco tra gennaio e marzo.',
    costi: "Immersione 50-80 $ dai centri locali (circa 43-70 €), speedboat 40-70 $ a tratta (circa 35-60 €), 2026. Budget: circa 80-110 € al giorno con guesthouse, pasti in guesthouse e snorkeling. Medio: 150-250 € con due immersioni al giorno. Alto: oltre 300 € con corsi di brevetto o una giornata in resort a Kuramathi.",
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
        "lng": 72.86444,
        "lat": 4.21389,
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
      },
      {
        "nome": "Isola di Rasdhoo",
        "testo": "L'isola locale principale del piccolo atollo di Rasdhoo, separato da Ari all'estremità nord-est. Si gira a piedi in poco tempo, tra case basse, moschea e porto, e ha diversi centri diving rivolti al lato esterno dell'atollo.",
        "come": "Speedboat condiviso da Velana, circa 1 ora-1 ora e mezza.",
        "quando": "Dicembre-aprile per mare calmo e squali martello.",
        "tempo": "3-4 giorni",
        "costo": "Speedboat 40-70 $ a tratta, circa 35-60 € (2026).",
        "lat": 4.26278,
        "lng": 72.99139
      },
      {
        "nome": "Kuramathi",
        "testo": "Un'isola-resort lunga e stretta nello stesso piccolo atollo, a poca distanza da Rasdhoo, con spiaggia bianca sul lato della laguna. Da Rasdhoo è la meta più semplice per una giornata con house reef, ristoranti e alcol.",
        "come": "Day pass organizzato dalla guesthouse, con barca.",
        "tempo": "una giornata",
        "costo": "Giornata in resort 100-200 $ con pranzo, circa 85-170 € (2026).",
        "lat": 4.25861,
        "lng": 72.98
      },
      {
        "nome": "Thoddoo",
        "testo": "Un'isola isolata a circa 20 km da Rasdhoo, con circa 1.900 abitanti nel 2022 e un'economia agricola: è il maggior produttore di angurie delle Maldive e coltiva papaya, mango, peperoncini e frutto della passione. In una zona dell'isola ci sono resti buddhisti.",
        "come": "Speedboat condiviso da Velana o barca da Rasdhoo.",
        "tempo": "2-3 giorni",
        "lat": 4.43694,
        "lng": 72.95944
      },
      {
        "nome": "Mathiveri",
        "testo": "Piccola isola locale sul lato occidentale di Ari Nord, con poche guesthouse e barriere vicine. È più raccolta di Ukulhas e comoda per i siti di immersione del centro dell'atollo.",
        "come": "Speedboat da Velana, organizzato dalla guesthouse.",
        "tempo": "2-3 giorni",
        "lat": 4.19028,
        "lng": 72.74722
      },
      {
        "nome": "Maaya Thila",
        "testo": "Un piccolo thila rotondo in Ari Nord, area marina protetta e uno dei siti più famosi delle Maldive. Squali pinna bianca, tartarughe, murene e pesci pietra; di notte i predatori cacciano tutto intorno.",
        "come": "In barca con i centri diving di Ukulhas, Mathiveri e Rasdhoo.",
        "quando": "Tutto l'anno; famosa anche in notturna.",
        "tempo": "mezza giornata",
        "costo": "Immersione 50-80 $, circa 43-70 € (2026)."
      },
      {
        "nome": "Fish Head (Mushimasmingili Thila)",
        "testo": "Un thila protetto in Ari Nord, noto per gli squali grigi che pattugliano il bordo e per i grandi banchi di fucilieri e carangidi. Le pareti hanno sporgenze e piccole grotte.",
        "come": "Con i centri diving dell'atollo.",
        "tempo": "mezza giornata",
        "costo": "Immersione 50-80 $, circa 43-70 € (2026).",
        "consiglio": "Spesso con corrente: meglio un brevetto avanzato."
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
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: speedboat da Velana a Rasdhoo, giro dell'isola e snorkeling sul reef",
          "Giorno 2: alba a Hammerhead Point (esperti) o giornata a Kuramathi"
        ]
      },
      {
        "titolo": "5 giorni",
        "tappe": [
          "Giorni 1-2: Rasdhoo, squali martello all'alba e barriera della laguna",
          "Giorni 3-4: Ukulhas, immersioni a Maaya Thila e Fish Head",
          "Giorno 5: Thoddoo e le sue piantagioni, poi rientro a Malé"
        ]
      }
    ],
    zone: [
      {
        "nome": "Rasdhoo",
        "perChi": "subacquei",
        "testo": "Isola locale con buoni centri diving e guesthouse. Comoda per l'alba sugli squali martello.",
        "fascia": "50-85 €"
      },
      {
        "nome": "Ukulhas",
        "perChi": "chi cerca un'isola vissuta",
        "testo": "Autentica, con diving e brevetti. Meno paradiso tropicale che a Dhigurah.",
        "fascia": "50-85 €"
      },
      {
        "nome": "Thoddoo",
        "perChi": "verde e calma",
        "testo": "Isola agricola, con giardini e meno turisti.",
        "fascia": "50-85 €"
      },
      {
        "nome": "Mathiveri",
        "perChi": "subacquei che cercano calma",
        "testo": "Isola piccola sul lato ovest di Ari Nord, vicina ai thila del centro dell'atollo. Poche strutture."
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
    gite: [
      {
        "nome": "Kuramathi",
        "distanza": "pochi minuti di barca da Rasdhoo",
        "come": "Day pass tramite la guesthouse, 100-200 $ con pranzo (circa 85-170 €).",
        "testo": "Una giornata da resort con house reef e spiaggia sulla laguna, a due passi dall'isola locale."
      },
      {
        "nome": "Ukulhas",
        "distanza": "circa 15 km da Rasdhoo",
        "come": "Barca dei centri diving o speedboat condiviso.",
        "testo": "Un'isola locale con spiaggia lunga e un impegno noto sulla gestione dei rifiuti, buona per immersioni e brevetti."
      },
      {
        "nome": "Thoddoo",
        "distanza": "circa 20 km da Rasdhoo",
        "come": "Barca privata o escursione organizzata dalla guesthouse.",
        "testo": "Campi di angurie e papaya, spiaggia e un ritmo agricolo che sulle altre isole non c'è."
      }
    ],
    faq: [
      {
        "domanda": "Quando si vedono gli squali martello a Rasdhoo?",
        "risposta": "All'alba, sul lato esterno dell'atollo, possibili tutto l'anno ma più frequenti da dicembre ad aprile, con il picco tra gennaio e marzo."
      },
      {
        "domanda": "Serve esperienza per Hammerhead Point?",
        "risposta": "Sì: è un'immersione in blu, in corrente, di solito tra 25 e 40 metri. Serve un brevetto avanzato e familiarità con le immersioni senza riferimenti."
      },
      {
        "domanda": "Meglio Rasdhoo o Ukulhas?",
        "risposta": "Rasdhoo per gli squali martello all'alba; Ukulhas per un'isola più vissuta, la spiaggia e i siti del centro di Ari Nord come Maaya Thila."
      },
      {
        "domanda": "Quanto costa un'immersione?",
        "risposta": "Dai centri delle isole locali 50-80 $ (circa 43-70 €), noleggio escluso o incluso secondo il centro. I pacchetti da più immersioni costano meno a uscita."
      },
      {
        "domanda": "Si può fare un brevetto?",
        "risposta": "Sì, i centri di Rasdhoo e Ukulhas fanno corsi base e avanzati. Conviene tenere qualche giorno in più e un giorno di margine prima del volo."
      },
      {
        "domanda": "Quanto aspettare tra l'ultima immersione e il volo?",
        "risposta": "Almeno 24 ore, anche per l'idrovolante."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'L\'acqua bassa e trasparente della laguna di Ukulhas, con la lingua di sabbia e le palme sullo sfondo',
    immagine: '/images/maldive/ukulhas-laguna-riccardo.jpg',
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
    comeArrivare: "Da Velana lo speedboat condiviso per Dhigurah e Dhangethi impiega da 1 ora e mezza a 2 ore di mare aperto e costa indicativamente 50-70 $ a persona a tratta (circa 43-60 €), con due partenze al giorno (verso le 10:45-11 e le 16) e orari diversi il venerdì. Si prenota tramite la guesthouse. In alternativa c'è il volo interno per Maamigili, seguito da una barca. Chi atterra di sera dorme a Hulhumalé e parte il mattino dopo.",
    comeSpostarsi: 'Escursioni in barca dalle guesthouse e dai centri diving.',
    periodoMigliore: 'tutto l\'anno per gli squali balena, con più avvistamenti tra agosto e novembre secondo Visit Maldives e mare più calmo da dicembre ad aprile; mante sul lato occidentale nella stagione secca.',
    costi: "Squalo balena 60-120 $ a persona (circa 52-105 €); mante e sandbank 70-130 $ (circa 60-110 €); speedboat 50-70 $ a tratta; immersione 50-80 $ (2026). Budget: circa 80-120 € al giorno con guesthouse e un'escursione. Medio: 150-250 € con guesthouse boutique ed escursioni ogni giorno. Alto: da 400 € in un resort vicino.",
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
        "costo": "60-120 $ a persona, circa 52-105 € (2026)",
        "consiglio": "Restare ad almeno 3 metri dal corpo e 4 dalla coda, non toccarlo, non nuotargli davanti e niente flash. Scegliere operatori che rispettano i limiti di barche e nuotatori."
      },
      {
        "nome": "Mante nelle stazioni di pulizia",
        "testo": "Le mante frequentano le stazioni di pulizia intorno a Rangali, sul lato occidentale dell'atollo. Si vedono in snorkeling o in immersione.",
        "come": "In barca con le guesthouse o i centri diving.",
        "quando": "Stagione secca, da dicembre.",
        "tempo": "mezza giornata",
        "costo": "Mante e sandbank 70-130 $, circa 60-110 € (2026)"
      },
      {
        "nome": "Bikini beach di Dhigurah",
        "lng": 72.92389,
        "lat": 3.52639,
        "testo": "Dhigurah è incredibile, probabilmente l'isola più completa di tutte le Maldive. Una lunga spiaggia, anche se un po' di gente c'è comunque.",
        "come": "Speedboat da Malé in circa 2 ore, di solito due partenze al giorno, oppure volo interno a Maamigili e barca.",
        "tempo": "mezza giornata",
        "costo": "Speedboat condiviso 50-70 $ a tratta, circa 43-60 € (2026)",
        "consiglio": "Per le escursioni non hai autonomia nella scelta: dipendi dalla tua homestay o dal tuo hotel, e i prezzi sono «a cartello»."
      },
      {
        "nome": "Sandbank della laguna",
        "testo": "Lingue di sabbia che emergono nella laguna, con picnic e snorkeling.",
        "come": "Escursione in barca dalle guesthouse.",
        "tempo": "mezza giornata",
        "costo": "Sandbank con picnic 40-80 $, circa 35-70 € (2026)"
      },
      {
        "nome": "Dhangethi",
        "testo": "Isola locale più piccola e raccolta di Dhigurah, a nord lungo la stessa barriera. Ha guesthouse, centri diving e accesso facile ai siti dell'atollo come Broken Rock e Kuda Rah Thila.",
        "come": "Speedboat condiviso da Velana, circa 1 ora e mezza-2 ore.",
        "tempo": "2-3 giorni",
        "costo": "Speedboat 50-70 $ a tratta, circa 43-60 € (2026).",
        "lat": 3.60746,
        "lng": 72.95561
      },
      {
        "nome": "Maamigili",
        "testo": "L'isola con l'aeroporto interno di Ari Sud, al margine occidentale dell'area marina protetta degli squali balena. È soprattutto uno scalo: si atterra e si prosegue in barca verso Dhigurah, Dhangethi o i resort.",
        "come": "Volo interno da Malé, poi barca.",
        "tempo": "di passaggio",
        "lat": 3.47522,
        "lng": 72.83507
      },
      {
        "nome": "Kuda Rah Thila",
        "testo": "Un thila protetto di Ari Sud, noto per le pareti coperte di coralli molli e le piccole grotte, con banchi di pesci, tartarughe e a volte squali grigi. La cima è profonda: è un'immersione per brevettati.",
        "come": "Con i centri diving di Dhangethi e Dhigurah.",
        "tempo": "mezza giornata",
        "costo": "Immersione 50-80 $, circa 43-70 € (2026)."
      },
      {
        "nome": "Broken Rock",
        "testo": "Un pinnacolo di Ari Sud spaccato da un canyon in cui si passa nuotando, tra coralli molli, ventagli di gorgonie e pesci di barriera. Uno dei siti più fotografati dell'atollo.",
        "come": "Con i centri diving di Dhangethi e Dhigurah.",
        "tempo": "mezza giornata",
        "costo": "Immersione 50-80 $, circa 43-70 € (2026).",
        "consiglio": "Nel canyon si sta lontani dal corallo: assetto e pinneggiata devono essere buoni."
      },
      {
        "nome": "Mahibadhoo",
        "testo": "Il capoluogo di Ari Sud, un'isola di 2,4 km per 1,2 con circa 2.500 abitanti che vivono di pesca, turismo e uffici pubblici. Più vita di paese che spiaggia: porto, moschee e caffè locali.",
        "come": "Barca da Dhangethi o Dhigurah, o speedboat da Velana.",
        "tempo": "mezza giornata",
        "lat": 3.75752,
        "lng": 72.96861
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
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: speedboat da Velana a Dhigurah, bikini beach e tramonto sul lato ovest",
          "Giorno 2: squalo balena sulla barriera esterna, pomeriggio in spiaggia",
          "Giorno 3: mante e sandbank, oppure immersione a Broken Rock"
        ]
      }
    ],
    zone: [
      {
        "nome": "Dhigurah",
        "perChi": "spiaggia lunga",
        "testo": "Isola lunga e stretta con spiaggia, guesthouse e homestay. Un po' di gente c'è, ma resta la più completa.",
        "fascia": "50-170 €"
      },
      {
        "nome": "Dhangethi",
        "perChi": "alternativa più piccola",
        "testo": "Isola locale con guesthouse e centri diving, più raccolta."
      },
      {
        "nome": "Resort vicini",
        "perChi": "chi vuole alcol e comfort",
        "testo": "Su isole vicine, con transfer in speedboat. Tutto più caro, ma si può bere alcol.",
        "fascia": "260-520 €"
      },
      {
        "nome": "Maamigili",
        "perChi": "chi arriva in volo interno",
        "testo": "Isola con aeroporto, comoda per i voli ma meno bella per il soggiorno. Utile per una notte di passaggio."
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
    gite: [
      {
        "nome": "Dhangethi",
        "distanza": "circa 10 km da Dhigurah",
        "come": "Barca privata o con il centro diving.",
        "testo": "Un'altra isola locale dell'atollo, più raccolta, e la porta per Broken Rock e Kuda Rah Thila."
      },
      {
        "nome": "Giornata in un resort vicino",
        "distanza": "15-40 minuti di barca",
        "come": "Day pass tramite la guesthouse, 100-200 $ con pranzo (circa 85-170 €).",
        "testo": "House reef, spiaggia senza regole di abbigliamento e, a volte, alcol compreso."
      },
      {
        "nome": "Mahibadhoo",
        "distanza": "circa 26 km da Dhigurah",
        "come": "Barca organizzata dalla guesthouse.",
        "testo": "Il capoluogo dell'atollo, per vedere la vita quotidiana di un'isola maldiviana più grande."
      }
    ],
    faq: [
      {
        "domanda": "Quando si vede lo squalo balena ad Ari Sud?",
        "risposta": "Tutto l'anno. Secondo Visit Maldives gli avvistamenti sono più numerosi tra agosto e novembre; da dicembre ad aprile il mare è più calmo e la visibilità migliore."
      },
      {
        "domanda": "L'avvistamento è garantito?",
        "risposta": "No. Le probabilità sono alte, ma dipendono da mare e corrente: conviene fissare l'uscita all'inizio del soggiorno per avere un secondo tentativo."
      },
      {
        "domanda": "Serve saper fare immersioni?",
        "risposta": "No: lo squalo balena nuota spesso vicino alla superficie e basta maschera e pinne. Le immersioni servono per i thila come Broken Rock e Kuda Rah Thila."
      },
      {
        "domanda": "Meglio Dhigurah o Dhangethi?",
        "risposta": "Dhigurah per la spiaggia lunga e la bikini beach; Dhangethi per un'isola più piccola e i siti d'immersione vicini."
      },
      {
        "domanda": "Quali regole valgono con lo squalo balena?",
        "risposta": "Almeno 3 metri dal corpo e 4 dalla coda, niente contatto, niente flash e mai davanti alla bocca. Meglio operatori che rispettano i limiti di barche e nuotatori."
      },
      {
        "domanda": "Quanto costano le escursioni?",
        "risposta": "Squalo balena 60-120 $ a persona, mante e sandbank 70-130 $, sandbank con picnic 40-80 $. Si prenotano con la propria struttura: chiedere cosa è compreso."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'La spiaggia bianca di Dhigurah che scende nella laguna turchese di Ari Sud',
    immagine: '/images/maldive/dhigurah-spiaggia-riccardo.jpg',
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
    comeArrivare: "I resort di Baa si raggiungono in idrovolante da Malé, circa 35-45 minuti di volo, solo di giorno e con limiti di bagaglio stretti (spesso 20-25 kg in tutto); costa indicativamente 500-1.200 $ a persona andata e ritorno (circa 430-1.030 €), a volte incluso nel prezzo. Per le isole locali si prende un volo interno Maldivian o Manta Air fino all'aeroporto di Dharavandhoo, aperto nel 2012, e poi una barca. Chi atterra di sera dorme a Hulhumalé.",
    comeSpostarsi: 'In barca.',
    periodoMigliore: 'giugno-novembre, picco agosto-ottobre nelle settimane intorno a luna nuova e luna piena.',
    costi: "Ingresso alla baia circa 20 $ a persona al giorno (circa 17 €), di solito compreso nell'escursione (60-80 $ dalle isole locali, circa 52-70 €); idrovolante 500-1.200 $ andata e ritorno (2026). Budget: circa 90-130 € al giorno con guesthouse a Dharavandhoo, pasti e un'uscita. Medio: 150-250 € con guesthouse migliore e immersioni. Alto: da 400 € in un resort con idrovolante.",
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
        "costo": "Immersione 50-80 $ dai centri delle isole locali, circa 43-70 €; nei resort 100-150 $ (2026).",
        "testo": "Fuori dalla baia, le immersioni nei siti dell'atollo, tra pinnacoli sommersi (thila) e barriere. Qui le bombole sono ammesse e le stazioni di pulizia attirano mante anche quando la baia è vuota. È il modo di vedere Baa sott'acqua senza i turni e le regole di Hanifaru.",
        "come": "Con i centri diving delle isole locali o dei resort.",
        "tempo": "una giornata"
      },
      {
        "nome": "Dharavandhoo",
        "testo": "L'isola locale più vicina alla baia di Hanifaru, con l'aeroporto interno aperto nel 2012, un porto e diverse guesthouse. Le acque intorno, con Dharavandhoo Thila e Hanifaru, sono protette per legge.",
        "come": "Volo interno da Malé fino all'aeroporto dell'isola.",
        "quando": "Giugno-novembre per le mante, picco agosto-ottobre.",
        "tempo": "3-4 giorni",
        "lat": 5.15833,
        "lng": 73.13056
      },
      {
        "nome": "Dharavandhoo Thila",
        "testo": "Il thila accanto a Dharavandhoo, nell'area protetta insieme a Hanifaru. È una stazione di pulizia frequentata dalle mante e a volte dagli squali balena, e si può fare con le bombole.",
        "come": "Con i centri diving di Dharavandhoo.",
        "quando": "Stagione del monsone di sud-ovest, da giugno a novembre.",
        "tempo": "mezza giornata",
        "costo": "Immersione 50-80 $, circa 43-70 € (2026)."
      },
      {
        "nome": "Thulhaadhoo",
        "testo": "La seconda isola più popolata di Baa, famosa per la lacca: un tempo forniva oggetti laccati alle famiglie nobili, oggi soprattutto ai visitatori. Nelle botteghe si vedono scatole e vasi tornite e dipinte a mano.",
        "come": "Barca da Dharavandhoo o dai resort dell'atollo.",
        "tempo": "mezza giornata o 2-3 giorni",
        "lat": 5.02306,
        "lng": 72.83972,
        "consiglio": "Gli oggetti di lacca sono il souvenir più autentico dell'atollo."
      },
      {
        "nome": "Eydhafushi",
        "testo": "Il capoluogo dell'atollo di Baa, un'isola di vita quotidiana più che di turismo, con porto, negozi e caffè locali. Utile come scalo tra le isole e per vedere un'isola maldiviana che lavora.",
        "come": "Barca da Dharavandhoo.",
        "tempo": "mezza giornata",
        "lat": 5.10378,
        "lng": 73.07037
      },
      {
        "nome": "Goidhoo",
        "testo": "L'isola principale del piccolo atollo di Goidhoo (Horsburgh sulle carte inglesi), ovale e lungo circa 16 km, staccato da Baa da un canale di quasi 10 km. La laguna interna, profonda e senza teste di corallo, è rara alle Maldive. Nel 2022 l'isola contava 583 abitanti.",
        "come": "Speedboat da Malé o barca da Dharavandhoo, da organizzare con la guesthouse.",
        "tempo": "2-3 giorni",
        "lat": 4.87461,
        "lng": 72.99763
      },
      {
        "nome": "Fulhadhoo",
        "testo": "Una delle isole abitate più piccole delle Maldive, 0,3 km² e 341 abitanti nel 2022, nell'atollo di Goidhoo. Spiagge bianche quasi deserte e poche strutture: è la scelta per chi vuole isolamento.",
        "come": "Speedboat da Malé o barca da Goidhoo, da organizzare con la guesthouse.",
        "tempo": "2-3 giorni",
        "lat": 4.88528,
        "lng": 72.93333
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
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: volo interno per Dharavandhoo, pomeriggio in spiaggia",
          "Giorno 2: Hanifaru in snorkeling al mattino, rientro con il volo del pomeriggio"
        ]
      },
      {
        "titolo": "5 giorni",
        "tappe": [
          "Giorni 1-3: Dharavandhoo, Hanifaru e Dharavandhoo Thila",
          "Giorno 4: Thulhaadhoo e le botteghe della lacca",
          "Giorno 5: rientro a Malé, o proseguimento verso l'atollo di Goidhoo"
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
      },
      {
        "nome": "Atollo di Goidhoo",
        "perChi": "chi cerca isolamento",
        "testo": "Goidhoo, Fulhadhoo e Fehendhoo, isole piccole e poco abitate in un atollo a sé. Lontane da Hanifaru: per le mante serve una lunga uscita in barca."
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
    gite: [
      {
        "nome": "Thulhaadhoo",
        "distanza": "circa 35 km da Dharavandhoo",
        "come": "Barca organizzata dalla guesthouse.",
        "testo": "Le botteghe della lacca, l'artigianato più noto dell'atollo, e un'isola locale grande e vissuta."
      },
      {
        "nome": "Eydhafushi",
        "distanza": "circa 9 km da Dharavandhoo",
        "come": "Barca da Dharavandhoo.",
        "testo": "Il capoluogo dell'atollo, per una mezza giornata tra porto, negozi e caffè."
      },
      {
        "nome": "Atollo di Goidhoo",
        "distanza": "circa 37 km da Dharavandhoo",
        "come": "Barca privata, da concordare con la guesthouse.",
        "testo": "Isole piccole con spiagge quasi deserte e una laguna profonda senza teste di corallo."
      }
    ],
    faq: [
      {
        "domanda": "Quando andare a Hanifaru?",
        "risposta": "Da giugno a novembre, con il picco tra agosto e ottobre nelle settimane intorno a luna nuova e luna piena, quando le correnti concentrano il plancton."
      },
      {
        "domanda": "Si può fare immersione a Hanifaru?",
        "risposta": "No, nella baia è consentito solo lo snorkeling, a turni di circa 45 minuti controllati dai ranger. Le bombole si usano nei siti fuori dalla baia, come Dharavandhoo Thila."
      },
      {
        "domanda": "Quanto costa vedere le mante a Hanifaru?",
        "risposta": "L'ingresso è di circa 20 $ a persona al giorno per il fondo di conservazione dell'atollo, di solito compreso nell'escursione, che dalle isole locali costa 60-80 $."
      },
      {
        "domanda": "Le mante sono garantite?",
        "risposta": "No: dipendono da marea, luna e plancton. Con tre o quattro giorni a disposizione le probabilità aumentano molto."
      },
      {
        "domanda": "Isola locale o resort a Baa?",
        "risposta": "Dharavandhoo è la base più vicina alla baia e la più economica, con volo interno. I resort sono più comodi e hanno alcol, ma con idrovolante e prezzi molto più alti."
      },
      {
        "domanda": "Bisogna prenotare in anticipo?",
        "risposta": "Sì, tra agosto e ottobre: gli ingressi alla baia sono contingentati e i voli interni per Dharavandhoo si riempiono."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'Un gruppo di mante viste dall\'alto mentre nuotano nell\'acqua turchese',
    immagine: '/images/maldive/mante.jpg',
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
    comeArrivare: "Fuvahmulah è a circa 494 km a sud di Malé e ci si arriva solo con il volo interno, Maldivian o Manta Air, in circa 1 ora e 20-25 minuti. La pista, sul lato sud-orientale dell'isola, è attiva dall'11 novembre 2011, con voli giornalieri per Malé. Il porto è sulla punta sud-est, vicino all'aeroporto, e da lì escono le barche dei diving. Chi arriva tardi a Velana dorme a Hulhumalé.",
    comeSpostarsi: 'Bici, scooter, taxi.',
    periodoMigliore: 'tutto l\'anno; il mare può essere mosso da maggio a novembre.',
    costi: "Immersione 50-150 $ secondo il centro e il numero di uscite (circa 43-130 €), 2026. Budget: circa 100-140 € al giorno con guesthouse e due immersioni. Medio: 160-250 € con pacchetto diving completo e scooter. Alto: oltre 300 € con le strutture migliori e immersioni ogni giorno.",
    erroriDaEvitare: ['Andarci senza esperienza: correnti e condizioni oceaniche richiedono brevetto avanzato e un buon numero di immersioni'],
    luoghi: [
      {
        "nome": "Tiger Zoo, gli squali tigre",
        "costo": "Immersione 50-150 $, circa 43-130 € (2026).",
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
      },
      {
        "nome": "Spiaggia di Thoondu",
        "testo": "La spiaggia larga e bianca sulla punta nord dell'isola, nel distretto di Dhadimagu. Invece della sabbia ci sono piccoli ciottoli lisci e lucidi che alle Maldive si trovano solo qui. In alcuni anni si forma una laguna naturale, Bissaaveli, dove gli abitanti fanno il bagno.",
        "come": "In bici, scooter o taxi dal paese.",
        "quando": "Al tramonto.",
        "tempo": "1-2 ore",
        "costo": "Libera.",
        "lat": -0.27723,
        "lng": 73.41761,
        "consiglio": "È area protetta: i ciottoli non si portano via."
      },
      {
        "nome": "Bandaara Kilhi",
        "testo": "Il più grande dei due laghi d'acqua dolce dell'isola, chiamato anche «lago di Stato», tra i distretti di Maalegan e Miskiymagu. Intorno ci sono paludi e vegetazione fitta: un paesaggio che alle Maldive non si vede altrove.",
        "come": "In bici o scooter, al centro dell'isola.",
        "tempo": "1 ora",
        "lat": -0.29804,
        "lng": 73.42902
      },
      {
        "nome": "Havitta di Fuvahmulah",
        "testo": "Una rovina antica alta circa 12 metri nel distretto di Dhadimagu, forse uno stupa del periodo buddhista, prima della conversione all'islam. Oggi è una collina coperta di vegetazione, ma resta una delle tracce più antiche dell'isola.",
        "come": "In bici o scooter, nel nord dell'isola.",
        "tempo": "30 minuti",
        "lat": -0.28103,
        "lng": 73.41902
      },
      {
        "nome": "Moschea Gemmiskiy",
        "testo": "Nel nord dell'isola, a Dhadimagu, una moschea in pietra di corallo costruita intorno al 1300 e considerata tra le più antiche delle Maldive. È ancora in uso per la preghiera.",
        "come": "In bici o scooter.",
        "quando": "Fuori dagli orari di preghiera.",
        "tempo": "20 minuti",
        "consiglio": "Si guarda dall'esterno, con spalle e ginocchia coperte."
      },
      {
        "nome": "Aeroporto e porto di Fuvahmulah",
        "testo": "Sul lato sud-orientale dell'isola ci sono la pista, attiva dal 2011, e il porto costruito nei primi anni Duemila, da cui escono le barche dei diving. È il punto di arrivo e la zona in cui si concentrano le uscite in mare.",
        "come": "Volo interno da Malé, circa 1 ora e 20-25 minuti.",
        "tempo": "di passaggio",
        "lat": -0.3094,
        "lng": 73.43607
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
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: volo da Malé, pomeriggio in bici tra Bandaara Kilhi e la spiaggia di Thoondu",
          "Giorno 2: due immersioni con gli squali tigre; volo il giorno dopo, almeno 24 ore dopo l'ultima"
        ]
      },
      {
        "titolo": "4 giorni",
        "tappe": [
          "Giorno 1: arrivo e giro dell'isola",
          "Giorni 2-3: immersioni al Tiger Zoo e nei siti in blu",
          "Giorno 4: Havitta, moschea Gemmiskiy e tramonto a Thoondu, niente immersioni prima del volo"
        ]
      }
    ],
    zone: [
      {
        "nome": "Guesthouse legate ai centri diving",
        "perChi": "subacquei",
        "testo": "Sistemazione semplice, spesso prenotata insieme alle immersioni. L'isola è piccola, quindi ci si sposta in bici o scooter."
      },
      {
        "nome": "Dhoondigan e il sud-est",
        "perChi": "chi si immerge ogni giorno",
        "testo": "La zona del porto e dell'aeroporto, da cui partono le barche dei diving. Comoda per le uscite all'alba."
      },
      {
        "nome": "Dhadimagu e il nord",
        "perChi": "chi vuole spiaggia e calma",
        "testo": "Il nord con la spiaggia di Thoondu, l'Havitta e la moschea Gemmiskiy. Più lontano dal porto: serve uno scooter."
      },
      {
        "nome": "Maalegan e il centro",
        "perChi": "chi vuole stare a metà strada",
        "testo": "Il centro dell'isola, vicino a Bandaara Kilhi, a pochi minuti sia dal porto sia dal nord."
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
    faq: [
      {
        "domanda": "Serve esperienza per gli squali tigre di Fuvahmulah?",
        "risposta": "Sì: si scende in mare aperto, spesso nel blu e con corrente. I centri chiedono un brevetto avanzato e un buon numero di immersioni registrate."
      },
      {
        "domanda": "Quando andare a Fuvahmulah?",
        "risposta": "Gli squali tigre ci sono tutto l'anno. Da maggio a novembre il mare può essere mosso e alcune uscite saltano."
      },
      {
        "domanda": "Come si arriva a Fuvahmulah?",
        "risposta": "Con il volo interno da Malé, circa 1 ora e 20-25 minuti. Conviene un volo di andata al mattino per non perdere un giorno."
      },
      {
        "domanda": "Come ci si sposta sull'isola?",
        "risposta": "In bici, scooter o taxi. L'isola è lunga circa 4,5 km e larga 1,2: con lo scooter si va ovunque in pochi minuti."
      },
      {
        "domanda": "Ci sono spiagge per fare il bagno?",
        "risposta": "Poche: l'isola non ha laguna e l'oceano profondo arriva a pochi metri dalla riva. Thoondu è la spiaggia più bella, ma il bagno dipende dal mare del giorno."
      },
      {
        "domanda": "Quanto aspettare tra l'ultima immersione e il volo?",
        "risposta": "Almeno 24 ore. Va calcolato nel programma, perché da qui si riparte sempre in aereo."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'Uno squalo tigre che nuota sul fondale sabbioso',
    immagine: '/images/maldive/squalo-tigre.jpg',
  },
]
