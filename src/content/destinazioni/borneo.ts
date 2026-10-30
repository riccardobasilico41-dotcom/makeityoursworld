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
      'La porta d\'ingresso del Sabah: una città portuale senza grandi pretese, con i tramonti migliori del Borneo e cinque isole a venti minuti di barca. Alle spalle c\'è il Monte Kinabalu, 4.095 metri, la cima più alta del sud-est asiatico tra l\'Himalaya e la Nuova Guinea.',
    percheAndarci:
      'In Sabah tutto parte da qui. E il Kinabalu è una delle poche vette al mondo oltre i 4.000 metri che si salgono senza esperienza alpinistica, a patto di avere il permesso, che è a numero chiuso e va prenotato con mesi di anticipo.',
    cosaVedere: [
      'Il Monte Kinabalu, con i sentieri che partono dal Timpohon Gate e il rifugio di Laban Rata',
      'Il Kinabalu Park, patrimonio UNESCO, che si visita anche senza salire in vetta',
      'Le sorgenti termali di Poring e la canopy walkway del parco',
      'Il parco marino di Tunku Abdul Rahman, cinque isole a venti minuti di barca dalla città',
      'Il mercato del pesce e il Filipino Market sul lungomare, con i banchi della sera',
      'La moschea cittadina di Likas, che sembra galleggiare sull\'acqua',
    ],
    cosaFare: [
      'Salire il Kinabalu in due giorni con la notte a Laban Rata (c\'è la scheda esperienza dedicata)',
      'La via ferrata dalla cresta in vetta, la più alta del mondo, per chi ha già il permesso di salita',
      'Una giornata di snorkeling alle isole del parco marino',
      'Il tramonto sul lungomare, che a Kota Kinabalu è un rito collettivo',
    ],
    doveDormire:
      'In città la zona più comoda è il lungomare. Per la salita al Kinabalu si dorme a Kundasang o dentro il parco, perché si parte all\'alba e da Kota Kinabalu sono due ore di strada: farla in giornata vuol dire alzarsi alle tre.',
    doveMangiare:
      'A Kota Kinabalu si mangia sul mare. Al Filipino Market si sceglie il pesce al banco e lo si fa grigliare al momento: è la cena più tipica della città, a prezzi bassi. Da provare l\'hinava, il pesce crudo marinato nel lime dei Kadazan-Dusun, e il tuaran mee, i noodles fatti a mano della zona. Nelle città del Sabah la cucina cinese è ottima e c\'è ovunque.',
    comeArrivare:
      'In aereo su Kota Kinabalu (BKI) da Kuala Lumpur, circa 2h30, con decine di voli al giorno. All\'arrivo si passa il controllo passaporti del Sabah, che ha un\'immigrazione propria anche per chi arriva dalla penisola.',
    comeSpostarsi:
      'In città a piedi e con Grab. Per il parco del Kinabalu e per Sandakan servono minibus interurbani o trasferimenti privati: le strade sono lente e sulla mappa le distanze ingannano.',
    periodoMigliore:
      'da marzo a settembre per la salita, quando in vetta piove meno. Con il maltempo la montagna chiude, e in passato è successo anche dopo dei terremoti: meglio fissare la data con un po\' di margine.',
    costi:
      'la salita al Kinabalu è cara e non c\'è modo di risparmiare: permesso, guida obbligatoria, notte a Laban Rata e trasferimenti si pagano a pacchetto, ed è una delle voci più alte di tutto il viaggio. Le isole del parco marino, invece, costano pochissimo.',
    erroriDaEvitare: [
      'Pensare di prenotare la salita al Kinabalu sul posto: i permessi giornalieri sono poco più di centosessanta e finiscono con mesi di anticipo',
      'Sottovalutare la quota: si parte da 1.866 metri e si arriva a 4.095 in poco più di 24 ore, senza acclimatamento, e il mal di montagna colpisce anche chi è allenato',
      'Dormire a Kota Kinabalu la sera prima della salita',
      'Usare la città solo come scalo: il tramonto sul lungomare e le isole a venti minuti valgono una giornata',
    ],
    miaEsperienza:
      'Kota Kinabalu in sé è una città più funzionale che bella, ricostruita dopo i bombardamenti della seconda guerra mondiale, e in mezza giornata la si è capita. Il motivo per venire sta alle spalle. Il Kinabalu si sale in due giorni. Il primo è una scalinata senza fine nella foresta pluviale, sei chilometri di gradini irregolari con l\'umidità addosso, fino al rifugio di Laban Rata a 3.270 metri, dove siamo arrivati nel primo pomeriggio. Il secondo comincia alle due di notte, al buio, sul granito nudo, tenendosi a una corda fissa. La quota si sente: si parte da meno di duemila metri e in poco più di un giorno si è sopra i quattromila, senza acclimatamento, e il mal di testa è la regola più che l\'eccezione. Poi il sole sorge sulla piattaforma di granito, e sotto c\'è tutto il Borneo, con le nuvole sotto i piedi. Il consiglio pratico che conta più di tutti: i permessi sono poco più di centosessanta al giorno e vanno prenotati mesi prima, non settimane.',
    esperienzeSlugs: ['monte-kinabalu'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'La cupola e i minareti della moschea cittadina di Kota Kinabalu sotto un cielo temporalesco',
    immagine: '/images/borneo/kota-kinabalu.jpg',
  },
  {
    slug: 'sepilok-sandakan',
    paeseSlug: 'borneo',
    ordine: 2,
    nome: 'Sepilok e Sandakan',
    tipologia: ['fauna selvatica', 'natura', 'storia'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Qui c\'è il centro di riabilitazione degli oranghi più noto al mondo, dove gli animali orfani o confiscati vengono riportati poco a poco nella foresta, e accanto il centro dei sun bear, gli orsi più piccoli del pianeta. A mezz\'ora, la città di Sandakan conserva la memoria di uno dei capitoli più duri della guerra nel Pacifico.',
    percheAndarci:
      'È il posto dove è più probabile vedere gli oranghi da vicino, e la base naturale per il Kinabatangan. Il Sandakan Memorial Park, poi, racconta le marce della morte del 1945: su 2.400 prigionieri alleati ne sopravvissero sei.',
    cosaVedere: [
      'Il Sepilok Orangutan Rehabilitation Centre, con le piattaforme dove si lascia il cibo',
      'Il Bornean Sun Bear Conservation Centre, accanto, spesso saltato e altrettanto interessante',
      'Il Rainforest Discovery Centre, con una canopy walkway ottima per il birdwatching all\'alba',
      'Il Sandakan Memorial Park, sul sito del campo di prigionia giapponese',
      'La Agnes Keith House e la vista sulla baia di Sandakan',
    ],
    cosaFare: [
      'Assistere alle poppate al centro di Sepilok (c\'è la scheda esperienza dedicata)',
      'La canopy walkway del Rainforest Discovery Centre all\'alba, quando passano i buceri',
      'Il centro dei sun bear, a duecento metri, che quasi nessuno mette in programma',
      'Un\'escursione alle isole delle tartarughe di Selingan, per vedere di notte la deposizione delle uova',
    ],
    doveDormire:
      'A Sepilok, nei lodge immersi nella foresta a pochi minuti dai centri. È la scelta migliore, perché permette di essere alla prima poppata e sulla canopy walkway all\'alba. Sandakan città serve solo per i collegamenti.',
    doveMangiare:
      'A Sandakan si mangiano pesce e cucina cinese, entrambi di buon livello: la città ha una comunità cinese storica, e il posto giusto sono i ristoranti di mare sul lungomare. A Sepilok ci sono solo i ristoranti dei lodge, semplici e con menu fissi.',
    comeArrivare:
      'Volo da Kota Kinabalu a Sandakan (circa 45 minuti) oppure 6 ore di strada. Da Sandakan a Sepilok sono 25 chilometri.',
    comeSpostarsi: 'Taxi o trasferimenti organizzati dai lodge. I mezzi pubblici ci sono, ma passano di rado e con i bagagli sono scomodi.',
    periodoMigliore:
      'tutto l\'anno per i centri, con una precisazione importante: nella stagione dei frutti della foresta (più o meno tra dicembre e febbraio, ma con variazioni) gli oranghi trovano cibo da soli e alle poppate ne arrivano molti meno. Da aprile a ottobre le probabilità sono più alte.',
    costi: 'Sepilok circa 30 ringgit, più il permesso per la macchina fotografica; centro dei sun bear intorno ai 30; Rainforest Discovery Centre sui 15.',
    erroriDaEvitare: [
      'Andare a una sola poppata: sono due al giorno, e in una stagione sfavorevole due tentativi raddoppiano le probabilità',
      'Portare zaini aperti, bottiglie o cibo in mano: i macachi li strappano, e succede spesso',
      'Fermarsi a Sepilok e saltare il Kinabatangan convinti di aver visto la fauna del Borneo: qui gli oranghi sono semi-selvatici e abituati alle persone',
      'Saltare il Sandakan Memorial Park perché "è solo un parco": è uno dei luoghi della memoria più forti del sud-est asiatico',
    ],
    confronti: [
      {
        titolo: 'Dove vedere gli oranghi: Borneo o Sumatra',
        introduzione:
          'Gli oranghi selvatici vivono solo su due isole al mondo, il Borneo e Sumatra, e sono due specie diverse; tre, contando il tapanuli, scoperto nel 2017 e ridotto a poche centinaia di individui. È la scelta che cambia il viaggio più di ogni altra, perché nei luoghi principali probabilità di avvistamento, costi e autenticità sono completamente diversi. In generale, più l\'incontro è selvatico, meno è garantito e più costa arrivarci.',
        opzioni: [
          {
            nome: 'Sepilok (Sabah)',
            sintesi: 'Centro di riabilitazione per orfani e animali confiscati, con due poppate al giorno su piattaforme raggiungibili da passerelle.',
            costo: 'circa 30 ringgit di ingresso',
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
            costo: 'pacchetti in lodge da circa 100€ a notte, con pasti e uscite compresi',
            durata: '2-3 notti',
            pro: [
              'Oranghi del tutto selvatici, insieme a nasiche, elefanti pigmei, coccodrilli e buceri',
              'Il miglior rapporto fra probabilità di avvistamento e costo di tutto il Borneo',
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
            sintesi: 'Foresta primaria mai tagliata, con un centro di ricerca e un lodge di alta gamma, sentieri e una canopy walkway a 26 metri.',
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
            costo: 'di gran lunga il più economico: trekking guidati di 1-3 giorni per poche decine di euro',
            durata: '1-3 giorni di trekking',
            pro: [
              'Si cammina dentro la foresta e li si cerca a piedi, invece di guardarli da una piattaforma o da una barca',
              'Le probabilità di vederli sono alte, perché nella zona vivono animali un tempo riabilitati e ormai selvatici',
              'Costi bassissimi rispetto a qualsiasi opzione nel Borneo: alloggi, guide e trekking costano una frazione',
              'La giungla del Leuser è l\'ultimo posto al mondo dove oranghi, tigri, rinoceronti ed elefanti vivono nello stesso ecosistema',
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
              'Comodissima: a mezz\'ora da Kuching, si fa in mezza mattinata',
              'Gli animali sono liberi e semi-selvatici, non in recinti',
              'Nella stagione giusta ne possono arrivare parecchi insieme',
            ],
            contro: [
              'Nella stagione dei frutti (più o meno novembre-marzo) può non arrivare nessuno, e la riserva lo dice apertamente',
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
    esperienzeSlugs: ['sepilok-oranghi'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Un orango sulla piattaforma di alimentazione del centro di riabilitazione di Sepilok, Sabah',
  },
  {
    slug: 'kinabatangan',
    paeseSlug: 'borneo',
    ordine: 3,
    nome: 'Fiume Kinabatangan',
    tipologia: ['fauna selvatica', 'natura', 'fiume'],
    giorniConsigliati: '2-3 notti',
    visitataPersonalmente: true,
    introduzione:
      'Il fiume più lungo del Sabah, con una fascia di foresta rimasta lungo le rive e piantagioni di palma da olio tutto intorno. Questa compressione è una tragedia ecologica, ed è anche il motivo per cui qui si vede più fauna selvatica che in qualsiasi altro posto del sud-est asiatico: gli animali non hanno altro dove andare.',
    percheAndarci:
      'In due giorni di uscite all\'alba e al tramonto si vedono oranghi selvatici, nasiche, elefanti pigmei del Borneo, coccodrilli, macachi, buceri e martin pescatori, con il miglior rapporto fra probabilità di avvistamento e costo di tutta l\'isola.',
    cosaVedere: [
      'Gli oranghi selvatici sugli alberi lungo le rive, che al tramonto si costruiscono il nido per la notte',
      'Le nasiche, le scimmie dal naso enorme che esistono solo nel Borneo',
      'Gli elefanti pigmei del Borneo, i più piccoli al mondo, che si spostano in branco lungo il fiume',
      'I coccodrilli d\'estuario, che si vedono meglio nelle uscite notturne',
      'Gli otto tipi di bucero del Borneo, compreso il bucero rinoceronte con il casco arancione',
      'Le Gomantong Caves, con milioni di pipistrelli e i nidi di rondine raccolti per la zuppa',
    ],
    cosaFare: [
      'Le uscite in barca all\'alba e al tramonto, il cuore dell\'esperienza (c\'è la scheda esperienza dedicata)',
      'Un\'uscita notturna in barca con le torce, per coccodrilli, civette e gufi',
      'Un trekking guidato nella foresta dietro il lodge, con le calze antisanguisughe',
      'Le Gomantong Caves, con l\'uscita serale dei pipistrelli',
    ],
    doveDormire:
      'Nei lodge lungo il fiume, quasi tutti intorno a Sukau e Bilit, da prenotare a pacchetto con pasti e uscite in barca compresi: è l\'unico modo sensato di organizzarsi. Si va dal molto essenziale al confortevole, e la differenza di prezzo sta più nella camera che nelle guide.',
    doveMangiare:
      'Non c\'è scelta, ed è normale: si mangia al lodge, a buffet, tre volte al giorno. Cucina malese semplice: riso, pollo, pesce di fiume, verdure saltate, frutta. Buona e ripetitiva. Negozi non ce ne sono: acqua, snack e soprattutto contanti vanno presi a Sandakan prima di partire.',
    comeArrivare:
      'Circa 2 ore di strada da Sandakan fino a Sukau o Bilit, poi la barca fino al lodge. Quasi tutti i pacchetti comprendono il trasferimento da Sandakan o direttamente dall\'aeroporto.',
    comeSpostarsi: 'Solo in barca, con le uscite organizzate dal lodge: lungo il fiume non ci sono strade.',
    periodoMigliore:
      'da marzo a ottobre. Nella stagione delle piogge il fiume si alza e gli animali si spargono nella foresta allagata invece di concentrarsi sulle rive: le probabilità di vederli calano parecchio.',
    costi: 'pacchetti da circa 100€ a notte a persona, con pensione completa, uscite in barca e trasferimenti compresi; le differenze di prezzo riguardano soprattutto il livello della camera.',
    erroriDaEvitare: [
      'Fermarsi una notte sola: con due uscite si dipende dalla fortuna, con quattro o sei le probabilità cambiano del tutto',
      'Arrivare senza contanti: lungo il fiume non ci sono bancomat, e molti lodge e servizi extra si pagano solo in ringgit',
      'Aspettarsi gli animali vicini: si vedono dalla barca, spesso a venti o trenta metri e in controluce. Un binocolo cambia la giornata più di qualsiasi obiettivo fotografico',
      'Sottovalutare le zanzare nelle uscite serali: qui il repellente ad alta concentrazione serve sul serio',
    ],
    miaEsperienza:
      'Sul Kinabatangan il Borneo mantiene tutte le promesse, e allo stesso tempo si capisce cosa è successo a quest\'isola. Siamo arrivati nel pomeriggio, e la prima uscita al tramonto l\'abbiamo fatta la sera stessa. Si esce in barca all\'alba, si risale il fiume con il motore al minimo e in due ore si vedono nasiche che saltano tra gli alberi, buceri che passano in coppia, macachi e, con un po\' di fortuna, un orango selvatico che si muove lentissimo su un ramo. Poi la barca svolta in un affluente, la fascia di foresta si assottiglia e dietro compaiono le file ordinate delle palme da olio, a perdita d\'occhio. Lì si capisce perché gli animali sono tutti concentrati in una striscia larga poche centinaia di metri. Non è una riserva ben riuscita, è quello che è rimasto. Due cose pratiche contano più delle altre. Restare almeno due notti, perché ogni uscita è una lotteria e quattro biglietti valgono più di due. E portare un binocolo: si guarda quasi sempre a venti metri, e senza si perde metà di quello che la guida indica.',
    esperienzeSlugs: ['crociera-kinabatangan'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Una nasica su un albero lungo il fiume Kinabatangan al tramonto, Sabah, Borneo',
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
      'Quarantatremila ettari di foresta pluviale primaria mai tagliata, una delle poche rimaste nel sud-est asiatico: alberi di ottanta metri, una canopy walkway sospesa a ventisei metri e un silenzio che la mattina presto rompono solo i gibboni. Non ci sono villaggi né strade pubbliche.',
    percheAndarci:
      'È la cosa più vicina al Borneo di prima del disboscamento. La differenza tra foresta primaria e secondaria, che sulla carta sembra un dettaglio tecnico, qui si vede a occhio nudo: alberi di dimensioni che altrove non esistono più e una struttura a strati completa.',
    cosaVedere: [
      'La canopy walkway sospesa a 26 metri tra le chiome',
      'Gli alberi emergenti, che superano gli 80 metri',
      'La fauna della foresta primaria: gibboni, oranghi selvatici, cervi, orsi malesi e, per pochissimi fortunati, leopardi nebulosi',
      'Il belvedere di Bukit Fatimah, con la vista sulla foresta senza interruzioni',
      'Le sepolture sulla parete di roccia, lasciate secoli fa dalle popolazioni locali',
    ],
    cosaFare: [
      'Trekking guidati di giorno e di notte con naturalisti che vivono sul posto',
      'Il night drive sulla pista forestale, il momento migliore per i mammiferi',
      'L\'alba dalla canopy walkway, quando i gibboni cominciano a chiamarsi',
      'Il bagno nel fiume Danum, con cui si chiude ogni giornata',
    ],
    doveDormire:
      'Ci sono solo due possibilità, tutte e due dentro la valle: il centro di ricerca, essenziale e più economico, e il lodge di alta gamma. Alternative non ce ne sono e in giornata non si può venire: è la tappa più cara di qualsiasi viaggio nel Borneo.',
    doveMangiare: 'Pensione completa compresa nel pacchetto, senza alternative: per decine di chilometri intorno non c\'è altro.',
    comeArrivare:
      'Volo su Lahad Datu, poi circa 2-3 ore di pista forestale con il trasferimento organizzato dalla struttura. Non si arriva da soli e non ci sono mezzi pubblici.',
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
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Un fiume che scorre nella foresta pluviale di pianura della Danum Valley, Sabah',
    immagine: '/images/borneo/danum-valley.jpg',
  },
  {
    slug: 'semporna-sipadan',
    paeseSlug: 'borneo',
    ordine: 5,
    nome: 'Semporna e Sipadan',
    tipologia: ['diving', 'mare', 'isole'],
    giorniConsigliati: '4-5 giorni, per avere una possibilità vera di ottenere il permesso',
    visitataPersonalmente: true,
    introduzione:
      'La costa sud-orientale del Sabah, con al largo l\'isola di Sipadan: un pinnacolo corallino che sale da 600 metri di profondità e che molti considerano il miglior sito di immersione al mondo. L\'accesso è a numero chiuso, sull\'isola non si dorme e il permesso si ottiene solo tramite un operatore.',
    percheAndarci:
      'Per Sipadan, e non è un\'esagerazione da dépliant: banchi di barracuda a spirale, centinaia di tartarughe, squali di barriera e pareti che scendono nel blu. E per Mabul e Kapalai, che sono l\'opposto: fondali bassi e sabbiosi dove si cercano gli animali più piccoli e strani dell\'oceano.',
    cosaVedere: [
      'Sipadan, con i punti Barracuda Point, Drop Off e Turtle Tomb',
      'Mabul, capitale mondiale del muck diving: cavallucci pigmei, polpi mimetici, nudibranchi, pesci rana',
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
      'Volo su Tawau, poi circa un\'ora e mezza di strada fino a Semporna e la barca per Mabul (circa 45 minuti). Quasi tutti i resort organizzano l\'intero trasferimento.',
    comeSpostarsi: 'Solo in barca, con le uscite organizzate dal diving center.',
    periodoMigliore:
      'da aprile a settembre, con il mare più calmo e la visibilità migliore. Da novembre a febbraio il mare è più mosso e alcune uscite saltano.',
    costi:
      'pacchetti diving di più notti con pensione completa; il permesso per Sipadan si paga a parte ed è la voce che decide tutto. Oggi ogni permesso dà diritto a tre immersioni sull\'isola nella stessa giornata.',
    erroriDaEvitare: [
      'Presentarsi sperando di immergersi a Sipadan senza aver prenotato mesi prima: i permessi giornalieri sono poco più di duecentocinquanta, Sabah Parks li assegna ai singoli operatori e questi li distribuiscono tra gli ospiti, quasi sempre a rotazione e premiando i soggiorni più lunghi',
      'Prenotare solo due notti e contare su Sipadan: la rotazione favorisce chi resta 4-5 notti, ed è per questo che l\'itinerario va costruito così',
      'Provare a comprare un permesso da soli: non si danno ai privati, solo agli operatori autorizzati',
      'Ignorare gli avvisi di sicurezza sulla costa orientale del Sabah: la zona è presidiata e il turismo funziona regolarmente, ma la situazione va controllata prima di prenotare',
    ],
    miaEsperienza:
      'Sipadan regge la sua fama, cosa rara per un posto così celebrato. Si scende lungo una parete che continua nel blu senza un fondo visibile, e dopo pochi minuti passa un banco di barracuda che si avvita in una spirale larga come una casa; le tartarughe sono così tante che dopo la quinta si smette di fotografarle. Prima di prenotare, però, bisogna capire che il permesso decide tutto. Sono poco più di duecentocinquanta al giorno, non si comprano da privati: li assegna Sabah Parks agli operatori, che poi li distribuiscono tra gli ospiti a rotazione, e la rotazione premia chi resta più a lungo. Prenotare due notti e sperare è il modo più sicuro per non immergersi affatto. La sorpresa, comunque, è stata un\'altra: Mabul, che tutti trattano come una base d\'appoggio, è uno dei posti migliori al mondo per il muck diving, e cercare su una gorgonia un cavalluccio pigmeo grande come un\'unghia è divertente quanto un banco di barracuda. Un\'ultima cosa, che turistica non è: intorno alle palafitte vivono i Bajau Laut, spesso senza la cittadinanza di nessuno stato, e il contrasto con i resort a cinquanta metri merita che ci si fermi a pensare.',
    esperienzeSlugs: ['diving-sipadan'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Banco di barracuda in spirale lungo la parete di Sipadan, Sabah, Borneo',
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
      'È probabilmente la città più piacevole della Malesia. E il Sarawak ha una storia e una composizione etnica del tutto diverse dal Sabah: qui domina la cultura iban, con le longhouse, case comuni lunghe centinaia di metri dove vivono decine di famiglie.',
    cosaVedere: [
      'Il lungofiume di Kuching e le vecchie shophouse del centro',
      'Il Sarawak Museum e il Borneo Cultures Museum, tra i migliori musei etnografici della regione',
      'Il parco nazionale di Bako, con le nasiche, i macachi e le formazioni di arenaria sul mare',
      'Il Sarawak Cultural Village, con le case tradizionali dei diversi gruppi etnici',
      'La Semenggoh Nature Reserve, con gli oranghi riabilitati e ormai liberi',
      'Le grotte di Niah, con tracce di presenza umana di quarantamila anni fa',
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
      'Volo su Kuching (KCH) da Kuala Lumpur (circa 1h45) o da Kota Kinabalu. Anche qui c\'è un controllo passaporti proprio: il Sarawak ha un\'immigrazione separata persino rispetto al Sabah.',
    comeSpostarsi:
      'Kuching si gira a piedi e con Grab. Per Bako servono un bus e poi una barca, con orari legati alla marea; per Semenggoh, autobus o Grab in mezz\'ora.',
    periodoMigliore:
      'da marzo a ottobre. A Semenggoh la stagione conta parecchio: da aprile a ottobre le probabilità di vedere oranghi sono molto più alte, mentre nella stagione dei frutti della foresta possono non farsi vedere affatto.',
    costi: 'Bako intorno ai 20 ringgit più la barca; Semenggoh pochi ringgit; musei gratuiti o quasi. Kuching è economica anche per gli standard malesi.',
    erroriDaEvitare: [
      'Andare a Semenggoh tra novembre e marzo contando di vederli: nella stagione dei frutti gli oranghi mangiano nella foresta, e la riserva lo dice apertamente',
      'Fare Bako in giornata senza guardare le maree: le barche vanno e tornano in base all\'acqua, ed è facile restare bloccati',
      'Aspettarsi che il Sarawak sia come il Sabah: sono due stati con storia, popolazioni e immigrazione separate, e passare dall\'uno all\'altro vuol dire un nuovo timbro sul passaporto',
      'Prenotare una longhouse "turistica" senza informarsi: le esperienze cambiano moltissimo, dalla visita costruita al soggiorno vero in una comunità',
    ],
    miaEsperienza:
      'Kuching è la sorpresa del Borneo: una città di fiume tranquilla, con il lungofiume pedonale, le case cinesi basse e una vivibilità che nessun\'altra città malese di queste dimensioni ha. Il Sarawak laksa a colazione, in una di quelle sale con i ventilatori al soffitto, è una delle cose migliori di tutta la Malesia. Bako è il parco che rende. Si arriva solo in barca, con gli orari decisi dalla marea, e in un\'ora di sentiero si incontrano le nasiche, le scimmie dal naso enorme che esistono solo su quest\'isola: si guardano da pochi metri mentre mangiano foglie, senza badare a chi passa. Su Semenggoh, invece, meglio essere chiari: gli oranghi sono liberi e tornano alle piattaforme solo quando la foresta offre poco, quindi tra novembre e marzo può non arrivare nessuno, e la riserva lo scrive all\'ingresso. Chi ha già visto Sepilok non venga nel Sarawak per questo: ci venga per Bako, per le longhouse e per la città.',
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
    introduzione:
      'Un parco nazionale patrimonio UNESCO nell\'interno del Sarawak, raggiungibile solo in aereo, con alcuni dei sistemi di grotte più grandi del pianeta. La Sarawak Chamber è la più grande camera sotterranea conosciuta al mondo, e ogni sera dalla Deer Cave escono milioni di pipistrelli in formazioni a spirale.',
    percheAndarci:
      'Per le grotte, che per dimensioni non hanno paragoni al mondo, e per i Pinnacoli, lame di calcare alte cinquanta metri sul fianco della montagna, raggiungibili con uno dei trekking più duri del sud-est asiatico.',
    cosaVedere: [
      'La Deer Cave, con l\'uscita serale di milioni di pipistrelli',
      'La Lang Cave, la più ricca di concrezioni',
      'La Clearwater Cave e la Wind Cave, raggiungibili in barca lungo il fiume',
      'I Pinnacoli del Gunung Api, le lame di calcare sul versante della montagna',
      'La canopy walkway del parco, tra le più lunghe al mondo',
    ],
    cosaFare: [
      'Guardare al tramonto l\'uscita dei pipistrelli dalla Deer Cave, dall\'osservatorio apposito',
      'Il trekking di tre giorni ai Pinnacoli, con notte al campo base e una salita durissima su roccia e scale',
      'L\'adventure caving, per chi vuole entrare nelle parti non attrezzate',
      'La canopy walkway e i sentieri nella foresta intorno al quartier generale del parco',
    ],
    doveDormire:
      'Dentro il parco, nelle sistemazioni che gestisce il parco stesso, o nell\'unico resort esterno. Le possibilità sono poche e vanno prenotate in anticipo, perché i posti letto limitano di fatto il numero di visitatori.',
    doveMangiare: 'Il ristorante del parco e quello del resort, senza alternative. Come nelle altre tappe nella foresta, quello che serve va portato da fuori.',
    comeArrivare:
      'Solo in aereo, con i voli da Miri, Kuching o Kota Kinabalu: nessuna strada arriva al parco. È il motivo principale per cui questa tappa va organizzata prima di tutto il resto.',
    comeSpostarsi: 'A piedi lungo le passerelle del parco e in barca lungo il fiume per le grotte più lontane.',
    periodoMigliore:
      'tutto l\'anno, ma l\'uscita dei pipistrelli non è garantita: se al tramonto piove, restano dentro. Il trekking ai Pinnacoli è più sicuro nella stagione più asciutta.',
    costi: 'l\'ingresso al parco costa poco, ma ogni grotta e ogni escursione guidata si pagano a parte; la voce principale è il volo.',
    erroriDaEvitare: [
      'Prenotare il volo prima dell\'alloggio: i posti dentro il parco sono limitati, e senza sistemazione non si va da nessuna parte',
      'Programmare una notte sola: tra voli e distanze interne resterebbe poco tempo',
      'Iscriversi al trekking dei Pinnacoli sottovalutandolo: è una salita su roccia e scale a pioli tra le più impegnative della regione, con limiti di tempo fissati dalle guide',
      'Contare sull\'uscita dei pipistrelli: se piove non escono, e succede spesso',
    ],
    miaEsperienza:
      'Non ci sono ancora stato, e la scheda si ferma ai fatti invece di raccontare una giornata che non c\'è stata. È però in lista per un motivo preciso: le dimensioni. La Sarawak Chamber è la camera sotterranea più grande conosciuta (nei paragoni che si trovano in giro ci starebbero dentro diversi aerei di linea affiancati), e la Deer Cave ha un\'imboccatura così ampia che l\'uscita serale dei pipistrelli sembra una colonna di fumo scuro che si arrotola sopra la foresta. Prima di sognarci sopra bisogna sapere una cosa di logistica: al Mulu si arriva solo in aereo, i posti letto nel parco sono pochi e limitano i visitatori, e quindi si prenota al contrario del solito: prima il letto, poi il volo.',
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'L\'uscita serale dei pipistrelli dalla Deer Cave nel parco nazionale di Gunung Mulu, Sarawak',
  },
]
