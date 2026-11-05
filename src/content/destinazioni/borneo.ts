import type { Destinazione } from '@/lib/types'

// Nessun nome di lodge, resort o operatore è stato inventato. Quote dei
// permessi (Kinabalu, Sipadan) e orari delle poppate ai centri di
// riabilitazione cambiano: vanno riverificati sui canali ufficiali.

export const destinazioniBorneo: Destinazione[] = [
  {
    slug: 'kota-kinabalu',
    paeseSlug: 'borneo',
    ordine: 1,
    nome: 'Kota Kinabalu e il Monte Kinabalu',
    tipologia: ['città', 'montagna', 'trekking'],
    giorniConsigliati: '1 giorno in città, più 2-3 per la salita al Kinabalu',
    visitataPersonalmente: true,
    introduzione:
      'La porta d\'ingresso del Sabah: una città portuale senza grandi pretese, con tramonti molto belli sul mare e cinque isole a poca distanza in barca. Alle spalle c\'è il Monte Kinabalu, 4.095 metri, la cima più alta del Borneo.',
    percheAndarci:
      'In Sabah tutto parte da qui. E il Kinabalu è una vetta oltre i 4.000 metri che si sale senza esperienza alpinistica, a patto di avere il permesso, che è a numero chiuso e va prenotato con largo anticipo.',
    cosaVedere: [
      'Il Monte Kinabalu, con i sentieri che partono dal Timpohon Gate e il rifugio di Laban Rata',
      'Il Kinabalu Park, patrimonio UNESCO, che si visita anche senza salire in vetta',
      'Le sorgenti termali di Poring e la canopy walkway del parco',
      'Il parco marino di Tunku Abdul Rahman, cinque isole a poca distanza in barca dalla città',
      'Il mercato del pesce e il Filipino Market sul lungomare, con i banchi della sera',
      'La moschea cittadina di Likas, che sembra galleggiare sull\'acqua',
    ],
    cosaFare: [
      'Salire il Kinabalu in due giorni con la notte a Laban Rata (c\'è la scheda esperienza dedicata)',
      'La via ferrata vicino alla vetta, per chi ha già il permesso di salita',
      'Una giornata di snorkeling alle isole del parco marino',
      'Il tramonto sul lungomare, che a Kota Kinabalu è un rito collettivo',
    ],
    doveDormire:
      'In città la zona più comoda è il lungomare. Per la salita al Kinabalu si dorme a Kundasang o dentro il parco, perché si parte all\'alba e da Kota Kinabalu c\'è un lungo tratto di strada: farla in giornata vuol dire alzarsi nel cuore della notte.',
    doveMangiare:
      'A Kota Kinabalu si mangia sul mare. Al Filipino Market si sceglie il pesce al banco e lo si fa grigliare al momento: è la cena più tipica della città, a prezzi bassi. Da provare l\'hinava, il pesce crudo marinato nel lime dei Kadazan-Dusun, e il tuaran mee, i noodles fatti a mano della zona. Nelle città del Sabah la cucina cinese è ottima e c\'è ovunque.',
    comeArrivare:
      'In aereo su Kota Kinabalu (BKI) da Kuala Lumpur, con molti voli al giorno. All\'arrivo si passa il controllo passaporti del Sabah, che ha un\'immigrazione propria anche per chi arriva dalla penisola.',
    comeSpostarsi:
      'In città a piedi e con Grab. Per il parco del Kinabalu e per Sandakan servono minibus interurbani o trasferimenti privati: le strade sono lente e sulla mappa le distanze ingannano.',
    periodoMigliore:
      'da marzo a settembre per la salita, quando in vetta piove meno. Con il maltempo la montagna chiude, e in passato è successo anche dopo dei terremoti: meglio fissare la data con un po\' di margine.',
    costi:
      'la salita al Kinabalu è cara e non c\'è modo di risparmiare: permesso, guida obbligatoria, notte a Laban Rata e trasferimenti si pagano a pacchetto, ed è una delle voci più alte di tutto il viaggio. Le isole del parco marino, invece, costano pochissimo.',
    erroriDaEvitare: [
      'Pensare di prenotare la salita al Kinabalu sul posto: i permessi giornalieri sono pochi e finiscono con largo anticipo',
      'Sottovalutare la quota: si parte da meno di duemila metri e si arriva a 4.095 in poco più di un giorno, senza acclimatamento, e il mal di montagna colpisce anche chi è allenato',
      'Dormire a Kota Kinabalu la sera prima della salita',
      'Usare la città solo come scalo: il tramonto sul lungomare e le isole vicine valgono una giornata',
    ],
    miaEsperienza:
      'Kota Kinabalu in sé è una città più funzionale che bella, ricostruita dopo i bombardamenti della seconda guerra mondiale, e in mezza giornata la si è capita. Il motivo per venire sta alle spalle. Il Kinabalu si sale in due giorni. Il primo è una scalinata senza fine nella foresta pluviale, sei chilometri di gradini irregolari con l\'umidità addosso, fino al rifugio di Laban Rata a 3.270 metri, dove siamo arrivati nel primo pomeriggio. Il secondo comincia alle due di notte, al buio, sul granito nudo, tenendosi a una corda fissa. La quota si sente: si parte da meno di duemila metri e in poco più di un giorno si è sopra i quattromila, senza acclimatamento, e il mal di testa è la regola più che l\'eccezione. Poi il sole sorge sulla piattaforma di granito, e sotto c\'è tutto il Borneo, con le nuvole sotto i piedi. Il consiglio pratico che conta più di tutti: i permessi sono poco più di centosessanta al giorno e vanno prenotati mesi prima, non settimane.',
    luoghi: [
      {
        nome: "Monte Kinabalu",
        testo: "4.095 metri, la montagna più alta del Borneo. Si sale in due giorni: il primo fino al rifugio di Laban Rata, oltre i 3.200 metri, il secondo con partenza nella notte per l'alba sul granito nudo della vetta.",
        come: "La salita è consentita solo con guida registrata (una ogni cinque adulti) e un permesso nominale, da prenotare con mesi di anticipo insieme al posto letto a Laban Rata, tramite Sabah Parks o operatori autorizzati. Si sale dal Timpohon Gate: il sentiero di Mesilau è chiuso.",
        quando: "Nei mesi più asciutti; con il maltempo la montagna chiude. Prenotare con margine.",
        tempo: "2 giorni, 1 notte a Laban Rata",
        costo: "Permesso di salita 400 RM per gli stranieri adulti, guida 350 RM ogni cinque persone, assicurazione 10 RM (tariffe Sabah Parks in vigore dal 2023); rifugio e ingresso al parco a parte.",
        url: "https://www.sabahparks.org.my/",
        consiglio: "Dormire vicino al parco la sera prima della salita e non a Kota Kinabalu, per partire riposati."
      },
      {
        nome: "Kinabalu Park",
        testo: "Il parco, patrimonio UNESCO, ha una biodiversità ricchissima. Si visita anche senza salire in vetta, con sentieri nella foresta, orchidee e un centro botanico.",
        come: "In bus o auto da Kota Kinabalu verso Ranau. Sentieri a piedi dalla sede del parco.",
        quando: "Al mattino.",
        tempo: "mezza giornata",
        url: "https://www.sabahparks.org.my/",
        consiglio: "Un giorno nel parco è la scelta giusta per chi non fa la salita."
      },
      {
        nome: "Poring Hot Springs e canopy walkway",
        testo: "Sorgenti termali in un'altra area del parco, lontana dalla sede principale, con una passerella sospesa tra gli alberi della foresta.",
        come: "In auto o in taxi dal Kinabalu Park.",
        quando: "Al mattino per la passerella; il pomeriggio per le vasche.",
        tempo: "3 ore",
        consiglio: "Combinare con il Kinabalu Park nello stesso giorno."
      },
      {
        nome: "Parco marino Tunku Abdul Rahman",
        testo: "Cinque isole a poca distanza in barca dalla città, Gaya, Manukan, Mamutik, Sapi e Sulug, con spiagge, snorkeling e acqua limpida. Gaya è la più grande. La scelta giusta per un pomeriggio di mare dopo la montagna.",
        come: "In barca dal molo di Jesselton Point. Si paga la tassa del parco.",
        quando: "Il parco è aperto tutti i giorni, 8-17. Al mattino il mare è più calmo.",
        tempo: "mezza giornata",
        costo: "Ingresso al parco 25 RM al giorno per gli stranieri adulti (Sabah Parks), più la barca.",
        url: "https://www.sabahparks.org.my/",
        consiglio: "Manukan, Mamutik e Sapi sono le mete più comuni per una giornata."
      },
      {
        nome: "Lungomare, Filipino Market e tramonto",
        testo: "Il lungomare di Kota Kinabalu, con il mercato del pesce, i banchi serali del Filipino Market e i bar dove si guarda il tramonto sulle isole.",
        come: "A piedi dal centro. Il mercato è attivo la sera.",
        quando: "Il tramonto e la sera.",
        tempo: "2 ore",
        consiglio: "Mangiare pesce alla griglia ai banchi serali, scegliendolo dal ghiaccio."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno in città",
        tappe: [
          "Mattina: barca per Mamutik o Manukan, snorkeling",
          "Pranzo sull'isola o in città",
          "Pomeriggio: riposo",
          "Tramonto sul lungomare e cena ai banchi del Filipino Market"
        ]
      },
      {
        titolo: "3 giorni con la salita",
        tappe: [
          "Giorno 1: arrivo a Kota Kinabalu, trasferimento al Kinabalu Park, notte vicino al parco",
          "Giorno 2: salita fino a Laban Rata, riposo e cena",
          "Giorno 3: partenza nella notte, vetta all'alba, discesa e rientro a Kota Kinabalu"
        ]
      }
    ],
    zone: [
      {
        nome: "Centro di Kota Kinabalu",
        perChi: "chi vuole comodità e il lungomare",
        testo: "Alberghi di ogni fascia vicino al porto e ai ristoranti. Rumoroso la sera."
      },
      {
        nome: "Vicino al Kinabalu Park (Kundasang)",
        perChi: "chi sale in vetta",
        testo: "Lodge e guesthouse lontano dalla città, vicino al Timpohon Gate. Fresco la sera."
      }
    ],
    sapori: [
      {
        nome: "Hinava",
        testo: "Pesce crudo marinato in lime con cipolla e zenzero, un piatto tradizionale dei Kadazan-Dusun."
      },
      {
        nome: "Tuaran mee",
        testo: "Noodles fritti all'uovo con carne e verdure, specialità di Tuaran vicino a Kota Kinabalu."
      },
      {
        nome: "Pesce alla griglia",
        testo: "Pesce cotto alla brace con sambal, nei banchi del lungomare."
      }
    ],
    attenzioni: [
      "I permessi per il Kinabalu sono limitati e finiscono mesi prima: non pensare di prenotare sul posto.",
      "La quota si sente: si sale da meno di duemila metri a 4.095 in poco più di un giorno, e il mal di montagna colpisce anche chi è allenato.",
      "Controllare gli avvisi di viaggio sulla costa orientale del Sabah prima di spostarsi oltre la zona di Kota Kinabalu.",
      "Portare contanti per i piccoli esercizi: fuori città le carte non sempre funzionano."
    ],
    esperienzeSlugs: ['monte-kinabalu'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'La cupola e i minareti della moschea cittadina di Kota Kinabalu sotto un cielo temporalesco',
    immagine: '/images/borneo/kota-kinabalu.jpg',
  },
  {
    slug: 'sepilok-sandakan',
    immagine: '/images/viaggi/borneo-itinerario/giorno-5-sepilok-orangutan.jpg',
    paeseSlug: 'borneo',
    ordine: 2,
    nome: 'Sepilok e Sandakan',
    tipologia: ['fauna selvatica', 'natura', 'storia'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Qui c\'è un noto centro di riabilitazione degli oranghi, dove gli animali orfani o confiscati vengono riportati poco a poco nella foresta, e accanto il centro dei sun bear, gli orsi più piccoli del pianeta. Poco lontano, la città di Sandakan conserva la memoria di uno dei capitoli più duri della guerra nel Pacifico.',
    percheAndarci:
      'È il posto dove è più probabile vedere gli oranghi da vicino, e la base naturale per il Kinabatangan. Il Sandakan Memorial Park, poi, racconta le marce della morte del 1945, a cui sopravvissero pochissimi prigionieri alleati.',
    cosaVedere: [
      'Il Sepilok Orangutan Rehabilitation Centre, con le piattaforme dove si lascia il cibo',
      'Il Bornean Sun Bear Conservation Centre, accanto, spesso saltato e altrettanto interessante',
      'Il Rainforest Discovery Centre, con una canopy walkway ottima per il birdwatching all\'alba',
      'Il Sandakan Memorial Park, sul sito del campo di prigionia giapponese',
    ],
    cosaFare: [
      'Assistere alle poppate al centro di Sepilok (c\'è la scheda esperienza dedicata)',
      'La canopy walkway del Rainforest Discovery Centre all\'alba, quando passano i buceri',
      'Il centro dei sun bear, accanto, che quasi nessuno mette in programma',
      'Un\'escursione alle isole delle tartarughe di Selingan, per vedere di notte la deposizione delle uova',
    ],
    doveDormire:
      'A Sepilok, nei lodge immersi nella foresta a pochi minuti dai centri. È la scelta migliore, perché permette di essere alla prima poppata e sulla canopy walkway all\'alba. Sandakan città serve solo per i collegamenti.',
    doveMangiare:
      'A Sandakan si mangiano pesce e cucina cinese, entrambi di buon livello: la città ha una comunità cinese storica, e il posto giusto sono i ristoranti di mare sul lungomare. A Sepilok ci sono solo i ristoranti dei lodge, semplici e con menu fissi.',
    comeArrivare:
      'Volo da Kota Kinabalu a Sandakan oppure un lungo viaggio su strada. Sepilok è poco fuori Sandakan.',
    comeSpostarsi: 'Taxi o trasferimenti organizzati dai lodge. I mezzi pubblici ci sono, ma passano di rado e con i bagagli sono scomodi.',
    periodoMigliore:
      'tutto l\'anno per i centri, con una precisazione importante: nella stagione dei frutti della foresta, che varia di anno in anno, gli oranghi trovano cibo da soli e alle poppate ne arrivano molti meno.',
    costi: "Sepilok con biglietto d'ingresso (prezzi aggiornati in biglietteria); centro degli orsi del sole 50 ringgit (2025); Rainforest Discovery Centre con biglietto a parte.",
    erroriDaEvitare: [
      'Andare a una sola poppata: in una stagione sfavorevole due tentativi raddoppiano le probabilità',
      'Portare zaini aperti, bottiglie o cibo in mano: i macachi li strappano, e succede spesso',
      'Fermarsi a Sepilok e saltare il Kinabatangan convinti di aver visto la fauna del Borneo: qui gli oranghi sono semi-selvatici e abituati alle persone',
      'Saltare il Sandakan Memorial Park perché "è solo un parco": è un luogo della memoria molto intenso',
    ],
    confronti: [
      {
        titolo: 'Dove vedere gli oranghi: Borneo o Sumatra',
        introduzione:
          'Gli oranghi selvatici vivono solo su due isole al mondo, il Borneo e Sumatra, e sono due specie diverse; tre, contando il tapanuli, descritto da pochi anni e con pochissimi individui. È la scelta che cambia il viaggio più di ogni altra, perché nei luoghi principali probabilità di avvistamento, costi e autenticità sono completamente diversi. In generale, più l\'incontro è selvatico, meno è garantito e più costa arrivarci.',
        opzioni: [
          {
            nome: 'Sepilok (Sabah)',
            sintesi: 'Centro di riabilitazione per orfani e animali confiscati, con poppate quotidiane su piattaforme raggiungibili da passerelle.',
            costo: 'biglietto d\'ingresso, prezzi in biglietteria',
            durata: 'mezza giornata; si dorme accanto',
            pro: [
              'La probabilità più alta di vedere oranghi da vicino, in qualsiasi periodo',
              'Facile da raggiungere e da abbinare al Kinabatangan',
              'Il lavoro di riabilitazione è serio e documentato: non è uno zoo',
              'Accanto ci sono il centro dei sun bear e un\'ottima canopy walkway',
            ],
            contro: [
              'Gli animali sono semi-selvatici e abituati alle persone: non è un incontro in natura',
              'Nella stagione dei frutti della foresta ne arrivano molti meno, perché mangiano da soli',
              'Affollato agli orari delle poppate',
            ],
            perChi: 'Chiunque voglia una ragionevole certezza di vederli, e chi ha poco tempo. È il punto di partenza, non il traguardo.',
          },
          {
            nome: 'Fiume Kinabatangan (Sabah)',
            sintesi: 'Uscite in barca all\'alba e al tramonto lungo il fiume, dove gli animali si concentrano nella fascia di foresta rimasta sulle rive.',
            costo: 'pacchetti in lodge con pasti e uscite compresi',
            durata: '2-3 notti',
            pro: [
              'Oranghi del tutto selvatici, insieme a nasiche, elefanti pigmei, coccodrilli e buceri',
              'Un ottimo rapporto fra probabilità di avvistamento e costo',
              'Con due o tre notti le probabilità salgono parecchio',
            ],
            contro: [
              'Nessuna garanzia: si vedono dalla barca, spesso lontani e in controluce',
              'La fascia di foresta è stretta proprio perché intorno c\'è la palma da olio; è anche il motivo per cui gli animali si concentrano lì, e fa riflettere',
              'Zanzare e caldo pesanti nelle uscite serali',
            ],
            perChi: 'Chiunque abbia almeno due notti: è la scelta con il miglior equilibrio tra autenticità e riuscita.',
          },
          {
            nome: 'Danum Valley (Sabah)',
            sintesi: 'Foresta primaria mai tagliata, con un centro di ricerca e un lodge di alta gamma, sentieri e una canopy walkway.',
            costo: 'la tappa più cara del Borneo, con pacchetti di più notti',
            durata: 'almeno 3 notti, perché abbia senso',
            pro: [
              'Foresta primaria vera, la cosa più vicina al Borneo di prima del disboscamento',
              'Fauna completa: oranghi, gibboni, leopardi nebulosi, cervi, tantissimi uccelli',
              'Pochissime persone e guide naturalistiche di livello',
            ],
            contro: [
              'Carissima, e gli oranghi si vedono o non si vedono senza regola: qui si viene per la foresta, non per una specie',
              'Difficile da raggiungere: trasferimenti lunghi su piste forestali',
              'Sanguisughe, umidità e trekking impegnativi',
            ],
            perChi: 'Chi ha budget e almeno tre notti, e viene per la foresta in sé più che per una lista di animali.',
          },
          {
            nome: 'Bukit Lawang (Sumatra, Indonesia)',
            sintesi: 'L\'altra isola: trekking nella giungla del Gunung Leuser, con gli oranghi di Sumatra, una specie diversa da quella del Borneo e in pericolo critico.',
            costo: 'di gran lunga il più economico: trekking guidati a prezzi bassi',
            durata: '1-3 giorni di trekking',
            pro: [
              'Si cammina dentro la foresta e li si cerca a piedi, invece di guardarli da una piattaforma o da una barca',
              'Le probabilità di vederli sono alte, perché nella zona vivono animali un tempo riabilitati e ormai selvatici',
              'Costi bassissimi rispetto a qualsiasi opzione nel Borneo: alloggi, guide e trekking costano una frazione',
              'La giungla del Leuser è uno degli ultimi posti al mondo dove oranghi, tigri, rinoceronti ed elefanti vivono nello stesso ecosistema',
            ],
            contro: [
              'Il problema etico c\'è e va conosciuto prima: alcune guide attirano gli animali con il cibo per garantire l\'avvistamento, una pratica da rifiutare in modo esplicito quando si prenota',
              'È molto più fisico: si sale nel fango aggrappandosi alle radici, con caldo e umidità alti',
              'Le regole sono meno rigide che in Malesia, e la qualità dipende molto dalla guida che capita',
              'Sumatra è lontana dal Borneo: sono due viaggi diversi, non due tappe dello stesso',
            ],
            perChi: 'Chi vuole cercarli a piedi invece di guardarli, ha un budget contenuto e sceglie l\'operatore con attenzione.',
          },
          {
            nome: 'Semenggoh (Sarawak)',
            sintesi: 'Riserva vicino a Kuching dove vivono oranghi riabilitati ormai liberi, che tornano alle piattaforme solo quando la foresta offre poco.',
            costo: 'pochi ringgit',
            durata: '2-3 ore, in giornata da Kuching',
            pro: [
              'Comodissima: è vicina a Kuching e si fa in una mattinata',
              'Gli animali sono liberi e semi-selvatici, non in recinti',
              'Nella stagione giusta ne possono arrivare parecchi insieme',
            ],
            contro: [
              'Nella stagione dei frutti può non arrivare nessuno, e la riserva lo dice apertamente',
              'Molto affollata, e la sosta dura poco',
              'È in Sarawak: ha senso solo se il viaggio passa da Kuching',
            ],
            perChi: 'Chi è già a Kuching. Da sola non è una ragione per attraversare il Borneo.',
          },
        ],
        raccomandazione:
          'Dentro il Borneo funziona la combinazione Sepilok più Kinabatangan: il primo garantisce l\'incontro da vicino, il secondo lo rende selvatico, e insieme costano meno di tre notti alla Danum Valley. La Danum si aggiunge se ci sono budget e giorni, Semenggoh solo se l\'itinerario tocca il Sarawak. Tra le due isole, invece, la differenza riguarda l\'esperienza prima ancora della fauna: a Sumatra si cammina nella giungla e li si cerca, nel Borneo si sta su una piattaforma o su una barca e si aspetta. Sumatra costa una frazione ed è più fisica e più diretta; il Borneo è più organizzato, più regolamentato e in più offre cose che a Bukit Lawang non ci sono: le nasiche, gli elefanti pigmei, la foresta primaria della Danum e Sipadan a poche ore. Chi ha già fatto Bukit Lawang non venga nel Borneo per gli oranghi: ci venga per tutto il resto, e li rivedrà comunque.',
      },
    ],
    miaEsperienza:
      'A Sepilok gli oranghi si vedono con più sicurezza che altrove, e conviene dire subito cosa significa. Sono animali orfani o confiscati al commercio illegale, in riabilitazione e abituati alle persone, e le piattaforme servono a integrare il cibo che non sanno ancora trovarsi da soli. Non è natura, e il centro non finge che lo sia. Detto questo, vedere un orango attraversare una corda tesa sopra la testa, a tre metri, con quel modo di muoversi lentissimo e all\'apparenza ragionato, basta a giustificare un viaggio. Il consiglio più utile è andare a entrambe le poppate, perché in certe stagioni la foresta dà abbastanza frutta e non arriva quasi nessuno. Poi c\'è quello che quasi tutti saltano: il centro dei sun bear a duecento metri, con gli orsi più piccoli del mondo salvati dal commercio di animali domestici, e il Sandakan Memorial Park, dove abbiamo passato una mattina, sul sito del campo di prigionia da cui partirono le marce della morte del 1945. Su duemilaquattrocento prigionieri alleati ne sopravvissero sei.',
    luoghi: [
      {
        nome: "Sepilok Orangutan Rehabilitation Centre",
        testo: "Centro che accoglie oranghi orfani o confiscati al commercio illegale, in riabilitazione prima del ritorno alla foresta. Dalle piattaforme si vedono gli animali arrivare a mangiare, dopo la poppata di frutta.",
        come: "Poco fuori Sandakan, in taxi o bus. Si cammina su passerelle di legno fino alla piattaforma.",
        quando: "Poppate al mattino e al pomeriggio: orari aggiornati in biglietteria, arrivare con anticipo. Andare a entrambe le poppate raddoppia le probabilità.",
        tempo: "2-3 ore",
        costo: "Prezzi aggiornati in biglietteria o sul sito del Sabah Wildlife Department; portare contanti.",
        url: "https://wildlife.sabah.gov.my/",
        consiglio: "Portare zaino chiuso e niente cibo in mano: i macachi strappano tutto."
      },
      {
        nome: "Bornean Sun Bear Conservation Centre",
        testo: "Accanto a Sepilok, ospita gli orsi del sole, i più piccoli al mondo, salvati dal commercio di animali. Spesso viene saltato, ed è altrettanto interessante.",
        come: "A piedi o in taxi da Sepilok, pochi minuti.",
        quando: "Al mattino o a primo pomeriggio.",
        tempo: "1 ora",
        costo: "50 RM per gli stranieri adulti (2025).",
        url: "https://www.bsbcc.org.my/",
        consiglio: "Visitarlo nello stesso giorno degli oranghi."
      },
      {
        nome: "Rainforest Discovery Centre",
        testo: "Una foresta con passerelle sospese, una torre e sentieri, ottima per vedere uccelli all'alba.",
        come: "A piedi dal centro di Sepilok o in taxi.",
        quando: "All'alba per gli uccelli.",
        tempo: "2 ore",
        consiglio: "Binocolo e partenza all'alba: è il momento in cui la foresta è più viva."
      },
      {
        nome: "Sandakan Memorial Park",
        testo: "Il sito del campo di prigionia giapponese della seconda guerra mondiale, da cui partirono le marce della morte verso Ranau. Un parco con un piccolo museo e un percorso nella foresta.",
        come: "A pochi chilometri da Sandakan, in taxi.",
        quando: "Al mattino.",
        tempo: "1 ora e mezza",
        consiglio: "Non saltarlo perché «è solo un parco»: merita il tempo."
      },
    ],
    programmi: [
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: poppata del mattino a Sepilok, Sun Bear Centre, pranzo, Rainforest Discovery Centre, poppata del pomeriggio",
          "Giorno 2: Sandakan Memorial Park, poi trasferimento per il Kinabatangan"
        ]
      }
    ],
    zone: [
      {
        nome: "Sepilok",
        perChi: "chi vuole essere vicino al centro degli oranghi",
        testo: "Lodge e guesthouse nella foresta, vicino ai centri. Tranquillo e senza vita serale."
      },
      {
        nome: "Sandakan",
        perChi: "chi arriva in aereo o vuole servizi",
        testo: "Alberghi e ristoranti in città, poco lontano da Sepilok. Più comodo per partire."
      }
    ],
    sapori: [
      {
        nome: "Pesce fresco alla griglia",
        testo: "Pescato di Sandakan, cotto alla brace nei ristoranti sul mare."
      },
      {
        nome: "Hainan chicken rice",
        testo: "Pollo bollito con riso al brodo, una specialità cinese diffusa."
      },
      {
        nome: "Teh tarik",
        testo: "Tè con latte condensato, ovunque."
      }
    ],
    attenzioni: [
      "Quando nella foresta c'è molta frutta gli oranghi trovano cibo da soli e alle poppate ne arrivano meno.",
      "I macachi strappano zaini aperti, bottiglie e cibo: tenere tutto chiuso.",
      "Sepilok non è foresta selvatica: gli oranghi sono abituati alle persone. Per la fauna selvatica serve il Kinabatangan.",
      "Controllare gli avvisi di viaggio per la costa orientale del Sabah."
    ],
    esperienzeSlugs: ['sepilok-oranghi'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Due oranghi al Sepilok Orangutan Rehabilitation Centre, ripresi da vicino mentre si nutrono',
  },
  {
    slug: 'kinabatangan',
    immagine: '/images/borneo/kinabatangan.jpg',
    paeseSlug: 'borneo',
    ordine: 3,
    nome: 'Fiume Kinabatangan',
    tipologia: ['fauna selvatica', 'natura', 'fiume'],
    giorniConsigliati: '2-3 notti',
    visitataPersonalmente: true,
    introduzione:
      'Il fiume più lungo del Sabah, con una fascia di foresta rimasta lungo le rive e piantagioni di palma da olio tutto intorno. Questa compressione è una tragedia ecologica, ed è anche il motivo per cui qui si vede tanta fauna selvatica: gli animali non hanno altro dove andare.',
    percheAndarci:
      'In due giorni di uscite all\'alba e al tramonto si vedono oranghi selvatici, nasiche, elefanti pigmei del Borneo, coccodrilli, macachi, buceri e martin pescatori, con un ottimo rapporto fra probabilità di avvistamento e costo.',
    cosaVedere: [
      'Gli oranghi selvatici sugli alberi lungo le rive, che al tramonto si costruiscono il nido per la notte',
      'Le nasiche, le scimmie dal naso enorme che esistono solo nel Borneo',
      'Gli elefanti pigmei del Borneo, che si spostano in branco lungo il fiume',
      'I coccodrilli d\'estuario, che si vedono meglio nelle uscite notturne',
      'Diverse specie di bucero, compreso il bucero rinoceronte con il casco arancione',
    ],
    cosaFare: [
      'Le uscite in barca all\'alba e al tramonto, il cuore dell\'esperienza (c\'è la scheda esperienza dedicata)',
      'Un\'uscita notturna in barca con le torce, per coccodrilli, civette e gufi',
      'Un trekking guidato nella foresta dietro il lodge, con le calze antisanguisughe',
    ],
    doveDormire:
      'Nei lodge lungo il fiume, quasi tutti intorno a Sukau e Bilit, da prenotare a pacchetto con pasti e uscite in barca compresi: è l\'unico modo sensato di organizzarsi. Si va dal molto essenziale al confortevole, e la differenza di prezzo sta più nella camera che nelle guide.',
    doveMangiare:
      'Non c\'è scelta, ed è normale: si mangia al lodge, a buffet, tre volte al giorno. Cucina malese semplice: riso, pollo, pesce di fiume, verdure saltate, frutta. Buona e ripetitiva. Negozi non ce ne sono: acqua, snack e soprattutto contanti vanno presi a Sandakan prima di partire.',
    comeArrivare:
      'Qualche ora di strada da Sandakan fino a Sukau o Bilit, poi la barca fino al lodge. Quasi tutti i pacchetti comprendono il trasferimento da Sandakan o direttamente dall\'aeroporto.',
    comeSpostarsi: 'Solo in barca, con le uscite organizzate dal lodge: lungo il fiume non ci sono strade.',
    periodoMigliore:
      'da marzo a ottobre. Nella stagione delle piogge il fiume si alza e gli animali si spargono nella foresta allagata invece di concentrarsi sulle rive: le probabilità di vederli calano parecchio.',
    costi: "pacchetti a persona per notte con pensione completa, uscite in barca e trasferimenti compresi; le differenze di prezzo riguardano soprattutto il livello della camera.",
    erroriDaEvitare: [
      'Fermarsi una notte sola: con due uscite si dipende dalla fortuna, con quattro o sei le probabilità cambiano del tutto',
      'Arrivare senza contanti: lungo il fiume non ci sono bancomat, e molti lodge e servizi extra si pagano solo in ringgit',
      'Aspettarsi gli animali vicini: si vedono dalla barca, spesso lontani e in controluce. Un binocolo cambia la giornata più di qualsiasi obiettivo fotografico',
      'Sottovalutare le zanzare nelle uscite serali: qui il repellente ad alta concentrazione serve sul serio',
    ],
    miaEsperienza:
      'Sul Kinabatangan il Borneo mantiene tutte le promesse, e allo stesso tempo si capisce cosa è successo a quest\'isola. Siamo arrivati nel pomeriggio, e la prima uscita al tramonto l\'abbiamo fatta la sera stessa. Si esce in barca all\'alba, si risale il fiume con il motore al minimo e in due ore si vedono nasiche che saltano tra gli alberi, buceri che passano in coppia, macachi e, con un po\' di fortuna, un orango selvatico che si muove lentissimo su un ramo. Poi la barca svolta in un affluente, la fascia di foresta si assottiglia e dietro compaiono le file ordinate delle palme da olio, a perdita d\'occhio. Lì si capisce perché gli animali sono tutti concentrati in una striscia larga poche centinaia di metri. Non è una riserva ben riuscita, è quello che è rimasto. Due cose pratiche contano più delle altre. Restare almeno due notti, perché ogni uscita è una lotteria e quattro biglietti valgono più di due. E portare un binocolo: si guarda quasi sempre a venti metri, e senza si perde metà di quello che la guida indica.',
    luoghi: [
      {
        nome: "Crociera all'alba sul fiume",
        testo: "Si risale il fiume con il motore al minimo nell'ora più attiva. Si vedono nasiche, macachi, buceri e con fortuna oranghi selvatici sugli alberi.",
        come: "In barca con il lodge, a orari fissi. I pacchetti comprendono trasferimento, pensione completa e uscite in barca.",
        quando: "All'alba: la luce è bassa e gli animali sono attivi.",
        tempo: "2 ore",
        consiglio: "Un binocolo cambia la giornata più di qualsiasi teleobiettivo."
      },
      {
        nome: "Uscita al tramonto e notturna",
        testo: "Gli oranghi costruiscono il nido per la notte, le nasiche si radunano sugli alberi in riva e di notte si vedono coccodrilli, civette e altri animali notturni.",
        come: "In barca con il lodge, a orari fissi.",
        quando: "Al tramonto e dopo cena.",
        tempo: "2 ore per uscita",
        consiglio: "Il repellente ad alta concentrazione serve sul serio: le zanzare sono aggressive."
      },
      {
        nome: "Elefanti pigmei e fauna del fiume",
        testo: "Gli elefanti pigmei del Borneo si spostano in branco lungo le rive. Il fiume ospita anche coccodrilli marini, diverse specie di bucero, tra cui il bucero rinoceronte, e macachi.",
        come: "Si vedono dalla barca, di solito a distanza e in controluce.",
        quando: "Gli elefanti si spostano molto: gli avvistamenti non sono garantiti in nessun periodo, chiedere al lodge dove sono stati visti di recente.",
        tempo: "durante le uscite",
        consiglio: "Fare almeno quattro o sei uscite: con due si dipende dalla fortuna."
      }
    ],
    programmi: [
      {
        titolo: "2-3 notti",
        tappe: [
          "Giorno 1: arrivo a metà giornata, uscita al tramonto",
          "Giorno 2: crociera all'alba, mattina libera, trekking guidato nel pomeriggio, uscita notturna",
          "Giorno 3: ultima crociera all'alba e partenza"
        ]
      }
    ],
    zone: [
      {
        nome: "Sukau",
        perChi: "chi vuole essere vicino alle uscite sul fiume principale",
        testo: "Lodge sul fiume con pensione completa. Il luogo classico, un po' più caro."
      },
      {
        nome: "Bilit",
        perChi: "chi vuole risparmiare",
        testo: "Lodge più semplici, in un tratto più isolato del fiume. Un po' meno comodo da raggiungere."
      }
    ],
    sapori: [
      {
        nome: "Cucina del lodge",
        testo: "Pasti a buffet o serviti, con riso, pesce e verdure. È l'unica scelta e cambia secondo il lodge."
      },
      {
        nome: "Pesce di fiume",
        testo: "Il pesce locale è cotto alla griglia o fritto con sambal."
      },
      {
        nome: "Ulam",
        testo: "Insalata di erbe fresche mangiate con il riso e il sambal."
      }
    ],
    attenzioni: [
      "Portare contanti: lungo il fiume non ci sono bancomat e molti servizi si pagano solo in ringgit.",
      "Gli animali si vedono a distanza e spesso in controluce: non aspettarsi vicinanza.",
      "Una notte sola non basta: con due uscite si dipende dalla fortuna.",
      "Nella stagione delle piogge il fiume sale e gli animali si disperdono: meno avvistamenti."
    ],
    esperienzeSlugs: ['crociera-kinabatangan'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Barche di legno colorate ormeggiate sulla riva fangosa del fiume Kinabatangan, con la foresta pluviale sull\'altra sponda',
  },
  {
    slug: 'danum-valley',
    paeseSlug: 'borneo',
    ordine: 4,
    nome: 'Danum Valley',
    tipologia: ['natura', 'foresta primaria', 'trekking'],
    giorniConsigliati: '3 notti minimo',
    visitataPersonalmente: false,
    introduzione:
      'Una vasta foresta pluviale primaria mai tagliata, una delle poche rimaste nel sud-est asiatico: alberi altissimi, una canopy walkway sospesa tra le chiome e un silenzio che la mattina presto rompono solo i gibboni. Non ci sono villaggi né strade pubbliche.',
    percheAndarci:
      'È la cosa più vicina al Borneo di prima del disboscamento. La differenza tra foresta primaria e secondaria, che sulla carta sembra un dettaglio tecnico, qui si vede a occhio nudo: alberi di dimensioni che altrove non esistono più e una struttura a strati completa.',
    cosaVedere: [
      'La canopy walkway sospesa tra le chiome',
      'Gli alberi emergenti, tra cui Menara, un meranti giallo di 97,6 metri',
      'La fauna della foresta primaria: gibboni, oranghi selvatici, cervi, orsi malesi e, per pochissimi fortunati, leopardi nebulosi',
      'Un belvedere con la vista sulla foresta senza interruzioni',
    ],
    cosaFare: [
      'Trekking guidati di giorno e di notte con naturalisti che vivono sul posto',
      'Il night drive sulla pista forestale, il momento migliore per i mammiferi',
      'L\'alba dalla canopy walkway, quando i gibboni cominciano a chiamarsi',
      'Il bagno nel fiume Danum, con cui si chiude ogni giornata',
    ],
    doveDormire:
      'Si dorme solo dentro la valle: al centro di ricerca, essenziale e più economico, o al lodge di alta gamma. In giornata non si può venire: è la tappa più cara di qualsiasi viaggio nel Borneo.',
    doveMangiare: 'Pensione completa compresa nel pacchetto, senza alternative: intorno non c\'è altro.',
    comeArrivare:
      'Volo su Lahad Datu, poi un lungo tratto di pista forestale con il trasferimento organizzato dalla struttura. Non si arriva da soli e non ci sono mezzi pubblici.',
    comeSpostarsi: 'A piedi sui sentieri, sempre con la guida, e in fuoristrada per i night drive.',
    periodoMigliore:
      'da marzo a ottobre, il periodo più asciutto. Piove comunque: è foresta pluviale equatoriale, e la pioggia fa parte del pacchetto.',
    costi: 'la voce più cara del viaggio, con pacchetti di più notti che comprendono trasferimenti, pensione completa e attività guidate.',
    erroriDaEvitare: [
      'Andarci per gli oranghi: ci sono, ma vederli è imprevedibile, e chi viene per una specie sola resta deluso. Qui si viene per la foresta',
      'Restare una notte: tolti i trasferimenti rimarrebbero poche ore, e il costo per ora diventerebbe assurdo',
      'Sottovalutare le sanguisughe: nella stagione umida sono tante, e le calze apposite sono l\'unica difesa che funziona',
      'Dare per scontata la connessione: qui non c\'è, e fa parte del fascino',
    ],
    miaEsperienza:
      'Non ci sono ancora stato, e per onestà la scheda si ferma alle informazioni verificabili invece di raccontare una giornata inventata. È in lista per due motivi precisi. Il primo è che la foresta primaria non è un dettaglio da naturalisti: alberi emergenti oltre gli ottanta metri e una struttura a strati completa nel sud-est asiatico non esistono quasi più, e la Danum è uno dei pochissimi posti dove si vedono ancora. Il secondo è che è l\'esatto rovescio del Kinabatangan: là gli animali si vedono facilmente perché sono schiacciati in una striscia di verde tra le palme da olio, qui si vedono poco proprio perché hanno ancora quarantatremila ettari in cui stare. Costa parecchio e bisogna mettere in conto almeno tre notti: chi ci va per una passa il tempo quasi solo nei trasferimenti.',
    luoghi: [
      {
        nome: "Canopy walkway",
        testo: "Una passerella sospesa tra le chiome della foresta primaria. Permette di vedere uccelli e scimmie a livello delle cime.",
        come: "A piedi dal lodge con una guida, su sentiero segnato.",
        quando: "All'alba per gli uccelli.",
        tempo: "2 ore",
        consiglio: "Andare con una guida: vede ciò che il visitatore perde."
      },
      {
        nome: "Alberi emergenti e foresta primaria",
        testo: "Una vasta foresta primaria con alberi altissimi. Qui nel 2019 è stato misurato Menara, un meranti giallo di 97,6 metri: è l'albero tropicale vivente più alto conosciuto.",
        come: "Con sentieri e uscite guidate dal lodge.",
        quando: "Al mattino e dopo la pioggia.",
        tempo: "mezza giornata",
        consiglio: "Camminare piano e in silenzio: si vede di più di quanto sembri."
      },
      {
        nome: "Night drive e night walk",
        testo: "Uscite notturne con torcia in fuoristrada o a piedi. È il momento in cui compaiono civette, tarsi, serpenti e, con fortuna, qualche mammifero come i gatti selvatici.",
        come: "Con le guide del lodge, a orari fissi.",
        quando: "Dopo il tramonto.",
        tempo: "2 ore",
        consiglio: "Non lasciare le uscite notturne per l'ultima sera."
      },
      {
        nome: "Belvedere sulla foresta",
        testo: "Un belvedere con vista continua sulla foresta, raggiungibile a piedi con guida.",
        come: "A piedi con guida, partendo dal lodge.",
        quando: "Al mattino.",
        tempo: "3 ore",
        consiglio: "Partire presto, prima del caldo."
      }
    ],
    programmi: [
      {
        titolo: "3 notti",
        tappe: [
          "Giorno 1: trasferimento da Lahad Datu, pomeriggio sentiero vicino al lodge, night walk",
          "Giorno 2: alba sulla canopy walkway, mattina in foresta, pomeriggio belvedere, night drive",
          "Giorno 3: sentiero lungo con le guide e rientro il giorno dopo"
        ]
      }
    ],
    zone: [
      {
        nome: "Lodge dentro la riserva",
        perChi: "chi vuole comodità dentro la foresta",
        testo: "Il lodge di alta gamma, con pensione completa e attività guidate. Costoso e senza connessione."
      },
      {
        nome: "Centro di ricerca",
        perChi: "chi cerca una sistemazione semplice",
        testo: "Ostello del centro di ricerca, con prezzi più bassi e confort minimo."
      }
    ],
    sapori: [
      {
        nome: "Cucina del lodge",
        testo: "Pasti a buffet o serviti, con riso, pesce e verdure. Non c'è altra scelta."
      }
    ],
    attenzioni: [
      "Non ci si va per gli oranghi: ci sono, ma vederli è imprevedibile. Si va per la foresta.",
      "Le sanguisughe sono numerose nella stagione umida: calze apposite.",
      "Non c'è connessione, ed è parte del fascino.",
      "Una notte sola non ha senso: tolti i trasferimenti rimangono poche ore."
    ],
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Un fiume che scorre nella foresta pluviale di pianura della Danum Valley, Sabah',
    immagine: '/images/borneo/danum-valley.jpg',
  },
  {
    slug: 'semporna-sipadan',
    immagine: '/images/borneo/diving-sipadan.jpg',
    paeseSlug: 'borneo',
    ordine: 5,
    nome: 'Semporna e Sipadan',
    tipologia: ['diving', 'mare', 'isole'],
    giorniConsigliati: '4-5 giorni, per avere una possibilità vera di ottenere il permesso',
    visitataPersonalmente: true,
    introduzione:
      'La costa sud-orientale del Sabah, con al largo l\'isola di Sipadan: un pinnacolo corallino che sale da fondali molto profondi e che molti considerano tra i migliori siti di immersione al mondo. L\'accesso è a numero chiuso, sull\'isola non si dorme e il permesso si ottiene solo tramite un operatore.',
    percheAndarci:
      'Per Sipadan, e non è un\'esagerazione da dépliant: banchi di barracuda a spirale, moltissime tartarughe, squali di barriera e pareti che scendono nel blu. E per Mabul e Kapalai, che sono l\'opposto: fondali bassi e sabbiosi dove si cercano gli animali più piccoli e strani dell\'oceano.',
    cosaVedere: [
      'Sipadan, con i punti Barracuda Point, Drop Off e Turtle Tomb',
      'Mabul, famosa per il muck diving: cavallucci pigmei, polpi mimetici, nudibranchi, pesci rana',
      'Kapalai, con le palafitte sul banco di sabbia',
      'Le comunità Bajau Laut, i "nomadi del mare", che vivono su barche e palafitte, spesso senza cittadinanza',
      'Bohey Dulang, il cratere vulcanico dell\'isola, con il sentiero panoramico sulla laguna',
    ],
    cosaFare: [
      'Immersioni a Sipadan, con il permesso ottenuto tramite l\'operatore (c\'è la scheda esperienza dedicata)',
      'Muck diving a Mabul e Kapalai, che vale il viaggio anche senza Sipadan',
      'La salita a Bohey Dulang, per vedere la laguna dall\'alto del cratere',
      'Snorkeling per chi non ha il brevetto, sapendo che a Sipadan i permessi vanno soprattutto ai subacquei',
    ],
    doveDormire:
      'Noi abbiamo dormito sull\'isola di Mabul, per essere già in mare; lì ci sono resort e strutture più economiche. Semporna città costa meno ed è più comoda per i collegamenti, ma toglie questo vantaggio. **Sull\'isola di Sipadan non si può dormire**: le strutture furono rimosse nel 2004 proprio per proteggerla.',
    doveMangiare:
      'Nei resort si mangia a pensione completa, compresa nel pacchetto. A Semporna città ci sono ristoranti di pesce sul lungomare, ottimi ed economici, dove il pescato del giorno si sceglie al banco.',
    comeArrivare:
      'Volo su Tawau, poi la strada fino a Semporna e la barca per Mabul. Quasi tutti i resort organizzano l\'intero trasferimento.',
    comeSpostarsi: 'Solo in barca, con le uscite organizzate dal diving center.',
    periodoMigliore:
      'da aprile a settembre, con il mare più calmo e la visibilità migliore. Da novembre a febbraio il mare è più mosso e alcune uscite saltano.',
    costi:
      'pacchetti diving di più notti con pensione completa; il permesso per Sipadan si paga a parte ed è la voce che decide tutto. Il numero di immersioni per permesso lo fissa Sabah Parks e cambia nel tempo: chiederlo all\'operatore.',
    erroriDaEvitare: [
      'Presentarsi sperando di immergersi a Sipadan senza aver prenotato mesi prima: i permessi giornalieri sono pochi, Sabah Parks li assegna ai singoli operatori e questi li distribuiscono tra gli ospiti, quasi sempre a rotazione e premiando i soggiorni più lunghi',
      'Prenotare solo due notti e contare su Sipadan: la rotazione favorisce chi resta 4-5 notti, ed è per questo che l\'itinerario va costruito così',
      'Provare a comprare un permesso da soli: non si danno ai privati, solo agli operatori autorizzati',
      'Ignorare gli avvisi di sicurezza sulla costa orientale del Sabah: la zona è presidiata e il turismo funziona regolarmente, ma la situazione va controllata prima di prenotare',
    ],
    miaEsperienza:
      'Sipadan regge la sua fama, cosa rara per un posto così celebrato. Si scende lungo una parete che continua nel blu senza un fondo visibile, e dopo pochi minuti passa un banco di barracuda che si avvita in una spirale larga come una casa; le tartarughe sono così tante che dopo la quinta si smette di fotografarle. Prima di prenotare, però, bisogna capire che il permesso decide tutto. Sono poco più di duecentocinquanta al giorno, non si comprano da privati: li assegna Sabah Parks agli operatori, che poi li distribuiscono tra gli ospiti a rotazione, e la rotazione premia chi resta più a lungo. Prenotare due notti e sperare è il modo più sicuro per non immergersi affatto. La sorpresa, comunque, è stata un\'altra: Mabul, che tutti trattano come una base d\'appoggio, è uno dei posti migliori al mondo per il muck diving, e cercare su una gorgonia un cavalluccio pigmeo grande come un\'unghia è divertente quanto un banco di barracuda. Un\'ultima cosa, che turistica non è: intorno alle palafitte vivono i Bajau Laut, spesso senza la cittadinanza di nessuno stato, e il contrasto con i resort a cinquanta metri merita che ci si fermi a pensare.',
    luoghi: [
      {
        nome: "Sipadan",
        testo: "Un'isola oceanica che sale da fondali molto profondi. Le immersioni sono tra le più famose al mondo, con Barracuda Point, Drop Off e la Turtle Tomb, una grotta sotto l'isola con scheletri di tartarughe.",
        come: "Solo con operatori autorizzati che hanno i permessi di Sabah Parks. Sull'isola non si dorme: le strutture sono chiuse dal 2004 e si parte in barca da Mabul, Kapalai o Semporna. Il numero di immersioni per permesso lo fissa Sabah Parks: chiederlo all'operatore.",
        quando: "I permessi giornalieri sono a numero chiuso, assegnati da Sabah Parks agli operatori, che possono prenotarli fino a sei mesi prima. Di solito l'isola chiude a novembre per la tutela del reef.",
        tempo: "1 giorno per permesso",
        costo: "Per gli stranieri tassa di conservazione 100 RM più permesso di immersione 350 RM a persona al giorno (Sabah Parks); gli operatori li inseriscono nel pacchetto con un sovrapprezzo.",
        url: "https://www.sabahparks.org.my/",
        consiglio: "Prenotare 4-5 notti: la rotazione dei permessi premia i soggiorni più lunghi."
      },
      {
        nome: "Mabul",
        testo: "Una piccola isola famosa per il muck diving: cavallucci marini pigmei, polpi mimetici, nudibranchi e pesci rana su fondali sabbiosi.",
        come: "Dai resort su palafitte, in barca per le immersioni.",
        quando: "Tutto l'anno; chiedere agli operatori le condizioni del mare.",
        tempo: "2-3 giorni",
        consiglio: "Dormire a Mabul, non a Semporna, per essere vicino ai siti."
      },
      {
        nome: "Kapalai",
        testo: "Un banco di sabbia con resort su palafitte nell'acqua, con snorkeling e immersioni da ottime a eccellenti.",
        come: "Con le barche dei resort da Mabul.",
        quando: "Tutto l'anno; chiedere agli operatori le condizioni del mare.",
        tempo: "mezza giornata",
        consiglio: "Informarsi se il resort è ancora aperto prima di prenotare."
      },
      {
        nome: "Comunità Bajau Laut",
        testo: "I «nomadi del mare» vivono su barche e palafitte, spesso senza cittadinanza. A Semporna si vedono i bambini che remano in barca per chiedere l'elemosina.",
        come: "Con operatori che lavorano con le comunità, non per fare foto.",
        quando: "Tutto l'anno.",
        tempo: "mezza giornata",
        consiglio: "Non dare soldi ai bambini in barca: incoraggia a non andare a scuola."
      },
      {
        nome: "Bohey Dulang",
        testo: "L'isola con un cratere vulcanico e un sentiero panoramico sulla laguna, nel parco marino Tun Sakaran.",
        come: "In barca da Semporna con tour organizzati.",
        quando: "Al mattino.",
        tempo: "mezza giornata",
        url: "https://www.sabahparks.org.my/",
        consiglio: "Portare scarpe da trekking e acqua: il sentiero è ripido."
      }
    ],
    programmi: [
      {
        titolo: "4-5 giorni",
        tappe: [
          "Giorno 1: arrivo a Tawau, trasferimento a Semporna e Mabul",
          "Giorno 2-4: immersioni a Sipadan quando c'è il permesso, muck diving a Mabul negli altri giorni",
          "Giorno 5: Kapalai o Bohey Dulang, rientro a Semporna"
        ]
      }
    ],
    zone: [
      {
        nome: "Mabul",
        perChi: "chi fa immersioni e vuole stare vicino ai siti",
        testo: "Resort e lodge su palafitte, spesso con pacchetti completi. Costoso e senza altra scelta."
      },
      {
        nome: "Semporna",
        perChi: "chi vuole risparmiare",
        testo: "Alberghi in città, con trasferimenti in barca ai siti. Meno comodo e più rumoroso."
      }
    ],
    sapori: [
      {
        nome: "Pesce alla griglia",
        testo: "Pescato fresco nei ristoranti sul molo di Semporna."
      },
      {
        nome: "Curry di pesce",
        testo: "Curry piccante di pesce con riso, nei locali di Semporna."
      }
    ],
    attenzioni: [
      "I permessi per Sipadan non si comprano da privati: li dà Sabah Parks agli operatori, e due notti non bastano.",
      "Controllare gli avvisi di sicurezza sulla costa orientale del Sabah: la zona è presidiata, ma va controllata prima di partire.",
      "Non dare soldi ai bambini Bajau in barca.",
      "Con il mare mosso alcune uscite saltano: lasciare giorni di margine."
    ],
    esperienzeSlugs: ['diving-sipadan'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Un banco di pesci e il reef corallino nelle acque di Sipadan, illuminati dai raggi del sole',
  },
  {
    slug: 'kuching-bako',
    paeseSlug: 'borneo',
    ordine: 6,
    nome: 'Kuching e il Sarawak',
    tipologia: ['città', 'natura', 'cultura'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La capitale del Sarawak sta sul fiume, con un lungofiume ordinato e una storia particolare: per un secolo fu il regno privato dei "rajah bianchi", la dinastia inglese dei Brooke. Intorno ci sono il parco nazionale di Bako con le nasiche, i villaggi di longhouse iban e le grotte preistoriche di Niah.',
    percheAndarci:
      'È una delle città più piacevoli della Malesia. E il Sarawak ha una storia e una composizione etnica del tutto diverse dal Sabah: qui domina la cultura iban, con le longhouse, case comuni lunghissime dove vivono molte famiglie.',
    cosaVedere: [
      'Il lungofiume di Kuching e le vecchie shophouse del centro',
      'Il Sarawak Museum e il Borneo Cultures Museum, due ricchi musei etnografici',
      'Il parco nazionale di Bako, con le nasiche, i macachi e le formazioni di arenaria sul mare',
      'Il Sarawak Cultural Village, con le case tradizionali dei diversi gruppi etnici',
      'La Semenggoh Nature Reserve, con gli oranghi riabilitati e ormai liberi',
      'Le grotte di Niah, con tracce di presenza umana di decine di migliaia di anni fa',
    ],
    cosaFare: [
      'Una giornata a Bako, raggiungibile solo in barca, con i sentieri tra la foresta e le scogliere',
      'Semenggoh alla poppata del mattino, sapendo che nella stagione dei frutti può non arrivare nessuno',
      'Una notte in una longhouse iban lungo il Batang Ai o il Lemanak',
      'Il laksa di Sarawak a colazione, un piatto diverso da tutti gli altri laksa malesi',
    ],
    doveDormire:
      'Sul lungofiume o nel centro storico di Kuching, che si gira tutto a piedi. Per Bako conviene una notte nei chalet del parco: permette la passeggiata notturna e i sentieri all\'alba senza dipendere dagli orari delle barche, legati alla marea.',
    doveMangiare:
      'A Kuching si mangia molto bene, e in modo diverso dal resto della Malesia. Il piatto da provare è il Sarawak laksa, a colazione, con un brodo di gamberi e spezie che non somiglia né a quello di Penang né a quello nyonya. Poi il kolo mee, i noodles asciutti, e il midin, una felce di foresta saltata all\'aglio che si trova solo qui. I posti giusti sono il mercato notturno di Chinatown e i food court sul fiume.',
    comeArrivare:
      'Volo su Kuching (KCH) da Kuala Lumpur o da Kota Kinabalu. Anche qui c\'è un controllo passaporti proprio: il Sarawak ha un\'immigrazione separata persino rispetto al Sabah.',
    comeSpostarsi:
      'Kuching si gira a piedi e con Grab. Per Bako servono un bus e poi una barca, con orari legati alla marea; per Semenggoh, autobus o Grab.',
    periodoMigliore:
      'da marzo a ottobre. A Semenggoh la stagione conta parecchio: da aprile a ottobre le probabilità di vedere oranghi sono molto più alte, mentre nella stagione dei frutti della foresta possono non farsi vedere affatto.',
    costi: "Bako con ingresso al parco più la barca; Semenggoh con un piccolo biglietto; musei gratuiti o quasi. Kuching è economica anche per gli standard malesi.",
    erroriDaEvitare: [
      'Andare a Semenggoh nella stagione dei frutti contando di vederli: nella stagione dei frutti gli oranghi mangiano nella foresta, e la riserva lo dice apertamente',
      'Fare Bako in giornata senza guardare le maree: le barche vanno e tornano in base all\'acqua, ed è facile restare bloccati',
      'Aspettarsi che il Sarawak sia come il Sabah: sono due stati con storia, popolazioni e immigrazione separate, e passare dall\'uno all\'altro vuol dire un nuovo timbro sul passaporto',
      'Prenotare una longhouse "turistica" senza informarsi: le esperienze cambiano moltissimo, dalla visita costruita al soggiorno vero in una comunità',
    ],
    miaEsperienza:
      'Kuching è la sorpresa del Borneo: una città di fiume tranquilla, con il lungofiume pedonale, le case cinesi basse e una vivibilità che nessun\'altra città malese di queste dimensioni ha. Il Sarawak laksa a colazione, in una di quelle sale con i ventilatori al soffitto, è una delle cose migliori di tutta la Malesia. Bako è il parco che rende. Si arriva solo in barca, con gli orari decisi dalla marea, e in un\'ora di sentiero si incontrano le nasiche, le scimmie dal naso enorme che esistono solo su quest\'isola: si guardano da pochi metri mentre mangiano foglie, senza badare a chi passa. Su Semenggoh, invece, meglio essere chiari: gli oranghi sono liberi e tornano alle piattaforme solo quando la foresta offre poco, quindi tra novembre e marzo può non arrivare nessuno, e la riserva lo scrive all\'ingresso. Chi ha già visto Sepilok non venga nel Sarawak per questo: ci venga per Bako, per le longhouse e per la città.',
    luoghi: [
      {
        nome: "Lungofiume di Kuching",
        testo: "Il lungofiume pedonale sul fiume Sarawak, con vecchie shophouse cinesi, il Fort Margherita sull'altra sponda e le barche. Una città tranquilla e vivibile.",
        come: "A piedi dal centro. I sampan attraversano il fiume per pochi ringgit.",
        quando: "La sera, con le luci accese.",
        tempo: "2 ore",
        consiglio: "Prendere un sampan per il Fort Margherita e tornare a piedi."
      },
      {
        nome: "Sarawak Museum e Borneo Cultures Museum",
        testo: "Due musei etnografici: gli oggetti delle popolazioni dayak e il Borneo Cultures Museum, il più recente, con collezioni e ricostruzioni di longhouse.",
        come: "Nel centro di Kuching, a piedi o in taxi.",
        quando: "Al mattino o nelle ore più calde.",
        tempo: "2 ore",
        url: "https://sarawaktourism.com/",
        consiglio: "Visitarli prima di andare in una longhouse: aiuta a capire cosa si sta vedendo."
      },
      {
        nome: "Parco nazionale di Bako",
        testo: "Un parco sul mare con nasiche, macachi, maiali barbuti e scogli di arenaria scolpiti dalle onde. È uno dei posti migliori del Sarawak per vedere le nasiche.",
        come: "Bus da Kuching fino a Kampung Bako, poi un breve tratto in barca. Gli orari dipendono dalla marea.",
        quando: "Al mattino, con la marea giusta.",
        tempo: "1 giorno",
        consiglio: "Controllare gli orari delle maree: si rischia di restare bloccati."
      },
      {
        nome: "Semenggoh Nature Reserve",
        testo: "Una riserva con oranghi riabilitati ormai liberi, che tornano alle piattaforme solo quando manca frutta nella foresta.",
        come: "In taxi o tour da Kuching.",
        quando: "Due sessioni al giorno, mattina e pomeriggio (orari in biglietteria). Quando nella foresta c'è molta frutta gli oranghi si fanno vedere meno.",
        tempo: "2-3 ore",
        consiglio: "Andarci senza contare di vederli: gli oranghi sono liberi e vengono solo se vogliono."
      },
      {
        nome: "Sarawak Cultural Village",
        testo: "Un villaggio-museo con le case tradizionali dei diversi gruppi etnici del Sarawak, con dimostrazioni di artigianato e danze.",
        come: "In bus o tour da Kuching, verso Damai.",
        quando: "Al mattino.",
        tempo: "mezza giornata",
        consiglio: "È una ricostruzione: va visto come introduzione, non al posto di una longhouse vera."
      },
      {
        nome: "Grotte di Niah",
        testo: "Grotte enormi nel nord del Sarawak con tracce di presenza umana di decine di migliaia di anni fa, pitture rupestri nella Painted Cave e raccoglitori di nidi di rondine al lavoro sulle pareti. Dal 2024 sono patrimonio UNESCO.",
        come: "Da Miri in auto, poi una passerella nella foresta.",
        quando: "Al mattino.",
        tempo: "mezza giornata",
        consiglio: "Si raggiungono con una deviazione dal nord: valutare il tempo."
      }
    ],
    programmi: [
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: lungofiume, musei e Sarawak laksa a colazione",
          "Giorno 2: Bako con la barca del mattino, ritorno nel pomeriggio",
          "Giorno 3: Semenggoh al mattino, Sarawak Cultural Village al pomeriggio"
        ]
      },
      {
        titolo: "4 giorni",
        tappe: [
          "Come i 3 giorni, con il quarto per una longhouse o una escursione fuori città"
        ]
      }
    ],
    zone: [
      {
        nome: "Centro di Kuching (Waterfront)",
        perChi: "chi vuole fare tutto a piedi",
        testo: "Alberghi e guesthouse vicino al lungofiume e ai ristoranti. Comodissimo, rumoroso la sera."
      },
      {
        nome: "Dintorni di Bako",
        perChi: "chi vuole svegliarsi nella foresta",
        testo: "Pochi lodge vicino al parco, per vedere gli animali all'alba."
      }
    ],
    sapori: [
      {
        nome: "Sarawak laksa",
        testo: "Noodles in brodo di spezie e cocco con gamberi, pollo e uovo. È la colazione di Kuching ed è tra le cose migliori della Malesia."
      },
      {
        nome: "Kolo mee",
        testo: "Noodles conditi con carne e salsa, serviti a colazione."
      },
      {
        nome: "Midin",
        testo: "Una felce selvatica saltata con aglio, tipica del Sarawak."
      },
      {
        nome: "Pesce in foglia di banana",
        testo: "Pesce marinato e cotto in foglia, cucina dei dayak."
      }
    ],
    attenzioni: [
      "Il Sarawak ha una propria immigrazione: un nuovo timbro sul passaporto anche arrivando dalla penisola o dal Sabah.",
      "A Bako gli orari dipendono dalla marea: controllare prima.",
      "A Semenggoh gli oranghi non sono garantiti, soprattutto quando la foresta è piena di frutta.",
      "Scegliere con cura la longhouse: le esperienze vanno dalla visita costruita al soggiorno vero."
    ],
    esperienzeSlugs: ['bako-nasiche'],
    tripSlugs: [],
    imageAlt: 'Il monte Santubong nella foschia oltre il fiume Sarawak, vicino a Kuching',
    immagine: '/images/borneo/kuching-bako.jpg',
  },
  {
    slug: 'gunung-mulu',
    paeseSlug: 'borneo',
    ordine: 7,
    nome: 'Gunung Mulu',
    tipologia: ['natura', 'grotte', 'trekking'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: false,
    immagine: '/images/borneo/gunung-mulu.jpg',
    imageAlt: 'I Pinnacles di Gunung Mulu: guglie di calcare grigio alte decine di metri tra la foresta pluviale e la nebbia',
    introduzione:
      'Un parco nazionale patrimonio UNESCO nell\'interno del Sarawak, raggiungibile di solito in aereo, con alcuni dei sistemi di grotte più grandi del pianeta. La Sarawak Chamber è tra le camere sotterranee più grandi conosciute, e quasi ogni sera dalla Deer Cave escono milioni di pipistrelli in formazioni a spirale.',
    percheAndarci:
      'Per le grotte, che per dimensioni non hanno paragoni al mondo, e per i Pinnacoli, lame di calcare alte decine di metri sul fianco della montagna, raggiungibili con un trekking molto impegnativo.',
    cosaVedere: [
      'La Deer Cave, con l\'uscita serale di milioni di pipistrelli',
      'La Lang Cave, ricca di concrezioni',
      'La Clearwater Cave e la Wind Cave, raggiungibili in barca lungo il fiume',
      'I Pinnacoli del Gunung Api, le lame di calcare sul versante della montagna',
      'La canopy walkway del parco, lunga 480 metri',
    ],
    cosaFare: [
      'Guardare al tramonto l\'uscita dei pipistrelli dalla Deer Cave, dall\'osservatorio apposito',
      'Il trekking di tre giorni ai Pinnacoli, con notte al campo base e una salita durissima su roccia e scale',
      'L\'adventure caving, per chi vuole entrare nelle parti non attrezzate',
      'La canopy walkway e i sentieri nella foresta intorno al quartier generale del parco',
    ],
    doveDormire:
      'Dentro il parco, nelle sistemazioni che gestisce il parco stesso, o in un resort esterno. Le possibilità sono poche e vanno prenotate in anticipo, perché i posti letto limitano di fatto il numero di visitatori.',
    doveMangiare: 'Il ristorante del parco e quello del resort, senza alternative. Come nelle altre tappe nella foresta, quello che serve va portato da fuori.',
    comeArrivare:
      'Di solito in aereo, con i voli interni da Miri e da altre città del Borneo: nessuna strada arriva al parco, l\'alternativa è una lunga risalita in barca. È il motivo principale per cui questa tappa va organizzata prima di tutto il resto.',
    comeSpostarsi: 'A piedi lungo le passerelle del parco e in barca lungo il fiume per le grotte più lontane.',
    periodoMigliore:
      'tutto l\'anno, ma l\'uscita dei pipistrelli non è garantita: se al tramonto piove, restano dentro. Il trekking ai Pinnacoli è più sicuro nella stagione più asciutta.',
    costi: 'l\'ingresso al parco costa poco, ma ogni grotta e ogni escursione guidata si pagano a parte; la voce principale è il volo.',
    erroriDaEvitare: [
      'Prenotare il volo prima dell\'alloggio: i posti dentro il parco sono limitati, e senza sistemazione non si va da nessuna parte',
      'Programmare una notte sola: tra voli e distanze interne resterebbe poco tempo',
      'Iscriversi al trekking dei Pinnacoli sottovalutandolo: è una salita molto impegnativa su roccia e scale a pioli, con limiti di tempo fissati dalle guide',
      'Contare sull\'uscita dei pipistrelli: se piove non escono, e succede spesso',
    ],
    miaEsperienza:
      'Non ci sono ancora stato, e la scheda si ferma ai fatti invece di raccontare una giornata che non c\'è stata. È però in lista per un motivo preciso: le dimensioni. La Sarawak Chamber è la camera sotterranea più grande conosciuta (nei paragoni che si trovano in giro ci starebbero dentro diversi aerei di linea affiancati), e la Deer Cave ha un\'imboccatura così ampia che l\'uscita serale dei pipistrelli sembra una colonna di fumo scuro che si arrotola sopra la foresta. Prima di sognarci sopra bisogna sapere una cosa di logistica: al Mulu si arriva solo in aereo, i posti letto nel parco sono pochi e limitano i visitatori, e quindi si prenota al contrario del solito: prima il letto, poi il volo.',
    luoghi: [
      {
        nome: "Deer Cave e uscita dei pipistrelli",
        testo: "Il passaggio di grotta più grande del mondo, largo tra 120 e 150 metri. Al tramonto circa tre milioni di pipistrelli escono a spirale verso la foresta, come una colonna di fumo.",
        come: "A piedi dal quartier generale del parco su passerella. Si vede la Deer Cave con un tour insieme alla Lang Cave; l'uscita dei pipistrelli si osserva da una piattaforma.",
        quando: "Al tramonto. Se piove i pipistrelli non escono.",
        tempo: "mezza giornata",
        url: "https://www.mulupark.com/",
        consiglio: "Non pianificare l'uscita come l'unica sera: con la pioggia può saltare."
      },
      {
        nome: "Lang Cave",
        testo: "Una grotta più piccola e ricca di concrezioni, stalattiti e stalagmiti illuminate.",
        come: "Con tour guidato dal quartier generale.",
        quando: "Al mattino.",
        tempo: "1 ora e mezza",
        consiglio: "Si abbina alla Deer Cave nello stesso tour."
      },
      {
        nome: "Clearwater Cave e Wind Cave",
        testo: "Grotte raggiungibili in barca lungo il fiume. La Clearwater fa parte di un sistema di grotte molto esteso; la Wind Cave ha fresche gallerie con formazioni.",
        come: "In barca dal quartier generale, poi a piedi con una guida.",
        quando: "Al mattino.",
        tempo: "mezza giornata",
        url: "https://www.mulupark.com/",
        consiglio: "Portare un costume: nelle pozze del fiume ci si può bagnare."
      },
      {
        nome: "Pinnacoli del Gunung Api",
        testo: "Lame di calcare alte decine di metri sul versante della montagna. Un trekking su roccia e scale a pioli, molto impegnativo.",
        come: "Solo con guida del parco: tre giorni e due notti, con un tratto in barca, una lunga camminata fino al Camp 5 e l'ultima salita ripidissima tra corde e scale.",
        quando: "Nella stagione più asciutta.",
        tempo: "3 giorni, 2 notti",
        consiglio: "Sottovalutarlo è l'errore più comune: serve allenamento."
      },
      {
        nome: "Canopy skywalk",
        testo: "Una passerella sospesa di 480 metri tra le chiome della foresta.",
        come: "A piedi dal quartier generale.",
        quando: "Al mattino presto.",
        tempo: "1 ora",
        consiglio: "Combinarla con una camminata in foresta."
      }
    ],
    programmi: [
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: arrivo in aereo, Deer Cave, Lang Cave e uscita dei pipistrelli",
          "Giorno 2: barca per Clearwater Cave e Wind Cave, canopy skywalk",
          "Giorno 3: mattina libera e volo di rientro"
        ]
      }
    ],
    zone: [
      {
        nome: "Dentro il parco (vicino al quartier generale)",
        perChi: "tutti: i posti letto sono pochi",
        testo: "Lodge, ostello e un resort vicino all'ingresso. Si prenota prima il letto, poi il volo."
      }
    ],
    sapori: [
      {
        nome: "Cucina del lodge",
        testo: "Pasti semplici, con riso, pesce e verdure."
      }
    ],
    attenzioni: [
      "Non ci sono strade: si arriva in aereo (o con una lunga risalita in barca da Marudi) e i posti letto nel parco sono pochi. Prenotare prima l'alloggio, poi il volo.",
      "L'uscita dei pipistrelli non è garantita: se piove, restano dentro.",
      "Il trekking dei Pinnacoli è duro: roccia e scale a pioli, con limiti di tempo.",
      "Una notte sola non basta: tra voli e distanze resterebbe poco tempo."
    ],
    esperienzeSlugs: [],
    tripSlugs: [],
  },
]
