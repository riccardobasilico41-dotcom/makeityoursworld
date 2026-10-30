import type { Destinazione } from '@/lib/types'

// Paese visitato di persona. I campi miaEsperienza sono bozze scritte da
// Claude nella voce del diario, basate su ciò che è oggettivamente vero di
// ogni posto (fatica, stagione, affollamento, logistica) e non su ricordi
// reali: vanno riletti e sostituiti con i tuoi. Nessun nome di hotel,
// ristorante o operatore è stato inventato.

export const destinazioniBelize: Destinazione[] = [
  {
    slug: 'caye-caulker',
    paeseSlug: 'belize',
    ordine: 1,
    nome: 'Caye Caulker',
    tipologia: ['mare', 'isole'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Un\'isola lunga poche centinaia di metri, senza auto (solo golf cart e biciclette), col motto ufficiale «Go Slow» scritto ovunque. È la base più economica e rilassata per il mare del Belize.',
    percheAndarci:
      'È il modo più semplice ed economico per stare sulla seconda barriera corallina del mondo: si dorme sull\'isola, si fa snorkeling ogni giorno e si vive a piedi scalzi.',
    cosaVedere: [
      'The Split, il canale aperto da un uragano che divide l\'isola in due, dove ci si ritrova al tramonto',
      'La barriera corallina al largo, parte del Belize Barrier Reef Reserve System (UNESCO)',
      'Le mangrovie e le lagune sul lato ovest dell\'isola',
    ],
    cosaFare: [
      'Snorkeling a Hol Chan Marine Reserve e Shark Ray Alley (vedi la scheda esperienza dedicata)',
      'Uscita in barca a vela al tramonto',
      'Giornata di diving o volo panoramico sul Great Blue Hole',
      'Kayak fra le mangrovie, o anche solo un giro in bici da un capo all\'altro dell\'isola',
    ],
    doveDormire: 'L\'isola si gira tutta a piedi: si va dagli ostelli vicino al molo alle cabañas più tranquille del lato est.',
    doveMangiare:
      'Il Belize è caro rispetto ai vicini e a Caye Caulker si sente, ma una via d\'uscita c\'è: i barbecue di strada del pomeriggio, con pollo o pesce alla griglia, riso e fagioli per pochi dollari, e le signore che vendono pesce fritto e fry jacks sulla via principale. Il piatto di tutti i giorni è rice and beans con carne stufata. L\'aragosta ha una stagione precisa (da metà giugno a febbraio): fuori stagione, se è nel menu, è congelata. Da provare almeno una volta il ceviche di lambi (conch), che qui è un prodotto locale.',
    comeArrivare:
      'Volo internazionale su Belize City (BZE), poi water taxi dal terminal in centro (circa 45 minuti). In alternativa volo interno su Caye Caulker con Tropic Air o Maya Island Air.',
    comeSpostarsi: 'A piedi o in bicicletta; i golf cart si noleggiano ma servono a poco, perché l\'isola si attraversa in venti minuti.',
    periodoMigliore: 'dicembre-aprile per mare calmo e visibilità; da giugno a novembre stagione delle piogge e degli uragani',
    costi: 'water taxi da Belize City circa 30-40 BZD a tratta; tour di snorkeling di mezza giornata 60-100 BZD più le tasse del parco marino',
    erroriDaEvitare: [
      'Aspettarsi spiagge caraibiche classiche: la costa è per lo più mangrovie e pontili, si entra in acqua dai moli',
      'Non mettere in conto le tasse d\'ingresso ai parchi marini, spesso escluse dal prezzo del tour',
    ],
    miaEsperienza:
      'Il «Go Slow» scritto ovunque descrive l\'isola com\'è: niente auto, si cammina sulla sabbia e in due giorni il ritmo cala da solo. La possibile delusione, meglio saperlo prima, è la spiaggia: quasi non c\'è, la costa è mangrovia e pontili e in acqua si entra dai moli o allo Split. Chi arriva coi Caraibi da cartolina in testa resta spiazzato per mezza giornata, poi capisce che qui il mare si fa al largo. E al largo c\'è la seconda barriera del mondo: mezz\'ora di barca e a Shark Ray Alley si sta in acqua con gli squali nutrice che passano a mezzo metro senza badare a chi guarda. Il Belize costa quasi il doppio del vicino Guatemala, ed è l\'unico vero difetto.',
    esperienzeSlugs: ['hol-chan-shark-ray-alley'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Riva con palme, pontili di legno e acqua bassa a Caye Caulker, Belize',
    immagine: '/images/belize/caye-caulker.jpg',
  },
  {
    slug: 'ambergris-caye',
    paeseSlug: 'belize',
    ordine: 2,
    nome: 'Ambergris Caye e San Pedro',
    tipologia: ['mare', 'diving'],
    giorniConsigliati: '3-5 giorni',
    visitataPersonalmente: true,
    introduzione:
      'L\'isola più grande e più sviluppata del Belize, col paese di San Pedro come centro: più servizi, ristoranti e centri diving che a Caye Caulker, ma anche prezzi più alti.',
    percheAndarci:
      'È la base migliore per chi viaggia soprattutto per le immersioni: da qui partono le uscite per Hol Chan, per il Blue Hole e per i punti più esterni della barriera.',
    cosaVedere: [
      'Hol Chan Marine Reserve, il canale naturale nella barriera',
      'Shark Ray Alley, dove si nuota con squali nutrice e razze',
      'Secret Beach, sul lato ovest dell\'isola, con acqua bassissima',
      'Il centro di San Pedro, tra case colorate e carretti da golf',
    ],
    cosaFare: [
      'Immersioni sulla barriera o gita di giornata al Great Blue Hole (tre immersioni, giornata lunga e mare aperto)',
      'Snorkeling a Hol Chan e Shark Ray Alley',
      'Kitesurf e windsurf sul lato sopravento dell\'isola',
    ],
    doveDormire: 'San Pedro per i servizi e la vita serale; le zone a nord e a sud dell\'isola per i resort più tranquilli, raggiungibili in golf cart o barca.',
    doveMangiare:
      'San Pedro ha più scelta di tutto il paese e anche i prezzi più alti: sul fronte mare si paga la posizione. Nelle strade dietro ci sono i comedor dove pranza la gente del posto, con lo stesso stew chicken a un quarto del prezzo. Da cercare i chioschi che grigliano il pescato del giorno e le tortillas di mais fatte al momento. In stagione vale la pena provare il conch fritter e, come bevanda locale, il seaweed shake, che descritto non convince e poi funziona.',
    comeArrivare: 'Water taxi da Belize City (circa 1h30, spesso con sosta a Caye Caulker) oppure volo interno di 15 minuti da Belize City.',
    comeSpostarsi: 'Golf cart a noleggio, taxi-golf cart, biciclette; barche-navetta per le zone più a nord.',
    periodoMigliore: 'dicembre-aprile; il Blue Hole richiede mare calmo, più probabile nei mesi secchi',
    costi: 'immersione al Blue Hole 300-400 USD a persona (tre immersioni, pranzo incluso); noleggio golf cart 50-80 USD al giorno',
    erroriDaEvitare: [
      'Prenotare il Blue Hole senza un\'esperienza subacquea adeguata: la parete richiede una discesa profonda e molti operatori chiedono un brevetto avanzato o un numero minimo di immersioni',
      'Dare per scontato che il Blue Hole sia spettacolare anche in snorkeling: dalla superficie si vede poco, la vista migliore è dall\'aereo',
    ],
    miaEsperienza:
      'Ambergris è la versione comoda di Caye Caulker: più ristoranti, più diving center, golf cart che passano di continuo e prezzi che ricordano più la Florida che i Caraibi. Come base ha senso se il viaggio è per le immersioni, meno se si cerca l\'atmosfera. Sul Blue Hole va detta una cosa impopolare: costa parecchio, richiede una lunga giornata in mare aperto e sott\'acqua è un muro blu con qualche stalattite e poco pesce. Chi ci va aspettandosi il reef migliore del viaggio sbaglia meta. La foto famosa, quella del cerchio perfetto, si fa dall\'aereo: il volo panoramico costa molto meno ed è più vicino a quello che ci si immaginava.',
    esperienzeSlugs: [],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Un caffè in una casa gialla con portici lungo una strada di San Pedro, Ambergris Caye, Belize',
    immagine: '/images/belize/ambergris-caye.jpg',
  },
  {
    slug: 'san-ignacio-cayo',
    paeseSlug: 'belize',
    ordine: 3,
    nome: 'San Ignacio e il Cayo',
    tipologia: ['natura', 'cultura', 'avventura'],
    giorniConsigliati: '2-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'L\'entroterra del Belize, al confine col Guatemala: giungla, fiumi, siti maya e la grotta archeologica di Actun Tunichil Muknal, fra le più impressionanti al mondo.',
    percheAndarci:
      'Bilancia bene le isole: in pochi giorni si passa dal mare caraibico alla giungla, con una delle esperienze archeologiche più intense della Mesoamerica.',
    cosaVedere: [
      'La grotta ATM (Actun Tunichil Muknal), con ceramiche e resti umani maya lasciati in situ',
      'Xunantunich, sito maya raggiungibile con un traghetto a mano sul fiume Mopan',
      'Caracol, il sito maya più grande del Belize, dentro la Chiquibul Forest Reserve',
      'Il Green Hills Butterfly Ranch e le pozze naturali di Rio On, lungo la Mountain Pine Ridge',
    ],
    cosaFare: [
      'Escursione alla grotta ATM, con guida obbligatoria e macchine fotografiche vietate (vedi la scheda esperienza dedicata)',
      'Canoa sul fiume Macal',
      'Cave tubing, la discesa in camera d\'aria dentro le grotte',
      'Giornata a Tikal, in Guatemala: il confine è a circa un\'ora da San Ignacio',
    ],
    doveDormire: 'San Ignacio per prezzi e servizi; i jungle lodge lungo il fiume Macal o sulla Mountain Pine Ridge per stare dentro la giungla.',
    doveMangiare:
      'A San Ignacio si mangia meglio e si spende meno che nel resto del Belize, grazie al mercato del sabato mattina: banchi di frutta, pupusas, tamales e cucina cinese-belizeana, un abbinamento frequente nel paese che funziona. In settimana i chioschi serali sulla via principale servono stew chicken e pollo alla griglia, e a colazione le fry jacks. La cucina locale mescola influenze maya, creole e messicane; nel Cayo prevale quella maya.',
    comeArrivare: 'Bus o navetta da Belize City (circa 2-3 ore) lungo la George Price Highway; è anche la porta d\'ingresso via terra dal Guatemala (frontiera di Melchor de Mencos).',
    comeSpostarsi: 'Tour organizzati per i siti e le grotte (quasi sempre obbligatori); taxi collettivi e bus locali per gli spostamenti brevi.',
    periodoMigliore: 'dicembre-aprile; la grotta ATM può chiudere dopo piogge intense per il livello dell\'acqua',
    costi: 'tour ATM 100-140 USD a persona incluso trasporto, pranzo e ingressi; Xunantunich circa 10 USD di ingresso',
    erroriDaEvitare: [
      'Portare la macchina fotografica alla grotta ATM: è vietata da anni, da quando una caduta accidentale ha danneggiato un reperto, e non ci sono eccezioni',
      'Prenotare il tour ATM con operatori non autorizzati: l\'accesso è contingentato e riservato a guide con licenza specifica',
      'Sottovalutare che nella grotta si cammina e si nuota in acqua fredda per ore, con passaggi stretti',
    ],
    miaEsperienza:
      'La grotta ATM è la cosa più impressionante che si possa fare in Centro America, e non è per tutti. Si entra a nuoto in un fiume sotterraneo, si va avanti per ore in acqua fredda, con passaggi in cui bisogna mettersi di lato, e alla fine ci si toglie le scarpe per camminare in calzini nella camera superiore. Lì ci sono ceramiche intatte e resti umani lasciati dove i maya li avevano deposti più di mille anni fa, compresa la Cristallina. Niente fotografie, vietate da quando una macchina caduta ha danneggiato un cranio, ed è anche per questo che il posto funziona: si guarda e basta. Chi ha problemi con gli spazi stretti o con l\'acqua fredda scelga Xunantunich, che è bello e sta all\'aperto.',
    esperienzeSlugs: ['grotta-atm'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'La piramide El Castillo del sito maya di Xunantunich, vicino a San Ignacio nel distretto del Cayo, Belize',
    immagine: '/images/belize/san-ignacio-cayo.jpg',
  },
  {
    slug: 'placencia-hopkins',
    paeseSlug: 'belize',
    ordine: 4,
    nome: 'Placencia e Hopkins',
    tipologia: ['mare', 'cultura'],
    giorniConsigliati: '2-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La costa sud del Belize continentale: Placencia è una penisola sottile con le spiagge di sabbia più belle del paese, Hopkins un villaggio garifuna noto per la sua cultura e i tamburi.',
    percheAndarci:
      'È l\'alternativa alle isole per chi vuole una spiaggia vera senza prendere il traghetto, ed è l\'unico posto dove conoscere da vicino la cultura garifuna, riconosciuta dall\'UNESCO.',
    cosaVedere: [
      'La Placencia Sidewalk, il camminamento pedonale che attraversa il villaggio',
      'Il villaggio garifuna di Hopkins, con le scuole di tamburo tradizionale',
      'La Laughing Bird Caye, isola-parco nazionale al largo di Placencia',
      'Il Cockscomb Basin Wildlife Sanctuary, la prima riserva al mondo dedicata ai giaguari',
    ],
    cosaFare: [
      'Snorkeling con gli squali balena a Gladden Spit (stagionale, attorno alle lune piene tra marzo e giugno)',
      'Lezione di tamburo garifuna a Hopkins',
      'Trekking e bagni nelle pozze del Cockscomb Basin',
    ],
    doveDormire: 'Placencia village per la vita sociale, la penisola a nord per i resort; Hopkins per un\'atmosfera più di villaggio.',
    doveMangiare:
      'Qui si trova la cucina garifuna, rara nel resto del Belize. Il piatto da cercare è l\'hudut, pesce nel latte di cocco col purè di platano verde: è lungo da preparare e lo servono soprattutto i ristoranti di famiglia di Hopkins. A Placencia pesce alla griglia e ceviche di conch sono ovunque, con la solita differenza di prezzo fra fronte spiaggia e vie interne. Il cioccolato del sud del Belize, lavorato in piccole fattorie della zona di Punta Gorda, si vende un po\' ovunque e vale quello che costa.',
    comeArrivare: 'Volo interno da Belize City a Placencia (circa 40 minuti) o bus lungo la Hummingbird e Southern Highway (4-5 ore).',
    comeSpostarsi: 'A piedi o in bicicletta nei villaggi; golf cart a noleggio sulla penisola di Placencia.',
    periodoMigliore: 'dicembre-aprile in generale; marzo-giugno per la finestra degli squali balena',
    costi: 'volo interno 100-150 USD a tratta; uscita squali balena 200-250 USD a persona in stagione',
    erroriDaEvitare: [
      'Costruire il viaggio intorno agli squali balena dandoli per sicuri: gli avvistamenti dipendono dalle lune piene e restano incerti',
      'Sottovalutare i tempi del bus lungo la Southern Highway se si ha un volo in coincidenza',
    ],
    miaEsperienza:
      'È la parte del Belize dove finalmente c\'è la sabbia che sulle isole manca: Placencia ha chilometri di spiaggia vera e un camminamento pedonale che attraversa tutto il villaggio, e in bassa stagione si è quasi soli. Quello che distingue questo tratto di costa, però, è Hopkins, e conta più per la cultura che per il mare. I garifuna discendono da africani mai stati schiavi, deportati qui dai Caraibi orientali, e hanno lingua, cucina e percussioni proprie, riconosciute dall\'UNESCO. Una lezione di tamburo con un maestro del villaggio insegna più di qualsiasi museo. Sugli squali balena a Gladden Spit meglio essere onesti: dipendono dalle lune piene fra marzo e giugno, e chi ci costruisce sopra l\'itinerario rischia di restare deluso.',
    esperienzeSlugs: [],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Palme, sabbia bianca e mare turchese sulla spiaggia di Placencia, Belize',
    immagine: '/images/belize/placencia-hopkins.jpg',
  },
]
