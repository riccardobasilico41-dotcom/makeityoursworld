import type { Guida } from './types'

/**
 * Guida PDF «Le Eolie in vela». Il racconto viene dal viaggio
 * src/content/viaggi/35-eolie-in-vela.md e da src/content/viaggi-dati/eolie-in-vela.ts;
 * ordinanze, telefoni, biglietterie e coordinate sono stati verificati sul web
 * tra il 1° e il 2 novembre 2026 e rimandano alle fonti in fondo al file (campo `fonti`, per id).
 *
 * Distanze in mare: linea d'aria tra gli ancoraggi (coordinate OpenStreetMap),
 * tempo stimato a 6 nodi. La rotta vera dipende dal vento e dallo skipper.
 * Auto: router OSRM su dati OpenStreetMap, traffico libero.
 */

export const guidaEolieInVela: Guida = {
  slug: 'eolie-in-vela',
  tripSlug: 'eolie-in-vela',
  paese: 'Italia',
  titolo: 'Le Eolie in vela',
  sottotitolo: 'Otto giorni in barca con skipper, da Milazzo a Milazzo, sette isole e Stromboli di notte dal mare. Giorno per giorno, con quello che serve per rifarli.',
  autore: 'Rick',
  verificatoAl: 'novembre 2026',
  intro: [
    'È la settimana classica da sabato a sabato: barca a vela con skipper, imbarco a Milazzo, notti a bordo in rada e una rotta che il vento ha riscritto più di una volta. L\'ho fatta con amici, ed è la formula giusta proprio per un gruppo che divide la barca.',
    'Sul sito c\'è il racconto. Qui c\'è la parte pratica: per ogni giorno le miglia tra un ancoraggio e l\'altro, i posti a terra con indirizzi e coordinate, le regole in vigore su Stromboli e Vulcano, le biglietterie degli aliscafi per chi preferisce la base a terra, i numeri da avere in tasca.',
    'Ordinanze e contatti li ho ricontrollati a novembre 2026 sulle fonti ufficiali, elencate in fondo. Su Stromboli e Vulcano le regole cambiano con l\'attività dei vulcani: guardale di nuovo la settimana prima di partire.',
  ],
  cosaInPiu: [
    'Una scheda per ogni giorno con le miglia tra gli ancoraggi, i posti a terra, le coordinate GPS e un QR verso la pagina del sito',
    'Le quote di salita su Stromboli fissate dall\'ultima ordinanza del Comune di Lipari, con orari e regole per i gruppi guidati',
    'Biglietterie di Liberty Lines e Caronte & Tourist (Siremar) su ogni isola, con i telefoni ufficiali',
    'Il divieto di sbarco delle auto sulle isole, con le date 2026 isola per isola',
    'Numeri di emergenza in mare e a terra, ospedale di Lipari, guardia medica sulle isole',
    'Glossario di bordo e di porto, lista per la borsa morbida, foglio budget',
    'Mappa della rotta da stampare: in rada il telefono non sempre prende',
  ],
  tappe: [
    { nome: 'Milazzo', gps: [38.21929, 15.24123], giorno: 'G1 · G8', etichetta: 'destra' },
    { nome: 'Vulcano', gps: [38.41341, 14.96203], giorno: 'G1 · G2', etichetta: 'sotto' },
    { nome: 'Lipari', gps: [38.46458, 14.95741], giorno: 'G2 · G3', etichetta: 'destra' },
    { nome: 'Salina', gps: [38.5583, 14.87165], giorno: 'G4', etichetta: 'sopra' },
    { nome: 'Panarea', gps: [38.63601, 15.06725], giorno: 'G5', etichetta: 'destra' },
    { nome: 'Stromboli', gps: [38.80002, 15.23954], giorno: 'G5 · G6', etichetta: 'sinistra' },
    { nome: 'Filicudi', gps: [38.56054, 14.58179], giorno: 'G7', etichetta: 'sopra' },
    { nome: 'Alicudi', gps: [38.5339, 14.35987], giorno: 'G7', etichetta: 'sotto' },
  ],
  giorni: [
    {
      numero: 1,
      titolo: 'Imbarco a Milazzo e trasferimento a Vulcano',
      paginaSito: '/destinazioni/italia/eolie',
      racconto:
        'Ci siamo imbarcati nel pomeriggio: briefing di sicurezza, cambusa e sistemazione nelle cuccette, strette come si immaginava. Nel tardo pomeriggio siamo partiti per Vulcano, la più vicina alla Sicilia: l\'odore di zolfo arriva prima dell\'isola. Ancoraggio verso Porto di Levante, prima cena a bordo e prima notte in rada.',
      tratte: [
        { da: 'Aeroporto di Catania', a: 'Milazzo, porto', km: 145, minuti: 111 },
        { da: 'Milazzo', a: 'Vulcano, Porto di Levante', km: 33, minuti: 176, mezzo: 'barca a vela (18 miglia, stima a 6 nodi)', nelMioViaggio: 'circa un\'ora e mezza' },
      ],
      luoghi: [
        {
          nome: 'Aeroporto di Catania Fontanarossa',
          indirizzo: 'Via Fontanarossa, Catania',
          gps: [37.46724, 15.06758],
          nota: 'Per Milazzo c\'è il bus Giuntabus fino al porto, con coincidenze per navi e aliscafi: orari e prezzi su giuntabus.com.',
          fonti: ['osm', 'giuntabus'],
        },
        {
          nome: 'Porto di Milazzo',
          indirizzo: 'Biglietteria Liberty Lines in Via Luigi Rizzo; biglietteria Caronte & Tourist in Via dei Mille 26',
          gps: [38.21929, 15.24123],
          nota: 'Le barche a noleggio partono dai pontili turistici, non dai moli degli aliscafi: chiedi alla base il punto esatto e dove lasciare l\'eventuale auto.',
          fonti: ['osm', 'll-biglietterie', 'ct-biglietterie'],
        },
      ],
      mangiare: [],
      dormire: 'A bordo, in rada a Vulcano. Se il volo arriva la sera prima, conviene una notte a terra a Milazzo: l\'imbarco è nel pomeriggio e correre non serve.',
      costiNoti: ['Cambusa fatta il primo giorno e divisa tra l\'equipaggio'],
      nota: 'Il primo giorno si fa la cambusa per tutta la settimana. Tienila leggera di acqua da lavare e pesante di acqua da bere: sulle isole l\'acqua dolce arriva in parte con le navi cisterna.',
    },
    {
      numero: 2,
      titolo: 'Vulcano e le Sette Piaghe',
      paginaSito: '/destinazioni/italia/eolie',
      racconto:
        'Di mattina presto, prima delle otto, si sale al Gran Cratere: circa un\'ora su sabbia vulcanica senza ombra, se l\'ordinanza lo permette. Poi le acque calde vicino a Porto di Levante, la spiaggia delle Sabbie Nere e, in barca, le Grotte del Cavallo e la Piscina di Venere. Nel pomeriggio siamo passati davanti alle Sette Piaghe fino a Lipari.',
      tratte: [
        { da: 'Vulcano, Porto di Levante', a: 'Lipari, Marina Corta', km: 6, minuti: 31, mezzo: 'barca a vela (3 miglia in linea d\'aria; il giro dalle Sette Piaghe è più lungo)' },
      ],
      luoghi: [
        {
          nome: 'Gran Cratere (La Fossa)',
          indirizzo: 'Sentiero dalla strada di Porto di Levante, Vulcano',
          gps: [38.40202, 14.96196],
          nota: 'Dalla crisi gassosa del 2021 l\'accesso è stato chiuso e riaperto più volte per ordinanza del sindaco di Lipari. Prima di salire guarda l\'archivio delle ordinanze sul sito dell\'INGV e chiedi a terra. Niente biglietto ufficiale: i prezzi che si trovano in rete sono quelli delle guide private.',
          fonti: ['ingv-ord-vulcano', 'ingv-trek-vulcano', 'osm'],
        },
        {
          nome: 'Spiaggia delle Acque Calde e pozza dei fanghi',
          indirizzo: 'Porto di Levante, Vulcano',
          gps: [38.41341, 14.96203],
          orari: 'Accesso alla spiaggia 06:00-20:00, chiusa di notte (ordinanza n. 32 del 2023)',
          nota: 'L\'ordinanza vietava il bagno nello specchio d\'acqua delle emissioni di gas e davanti alla pozza dei fanghi, l\'ingresso a chi ha malattie respiratorie e lo stare sdraiati sulla sabbia. Era valida fino al 31/12/2023: le regole di oggi vanno riconfermate sul posto.',
          fonti: ['ingv-ord-vulcano', 'vulcano-ord32'],
        },
      ],
      mangiare: [],
      dormire: 'A bordo, a Lipari.',
      nota: 'Grotte del Cavallo e Piscina di Venere sono sul lato occidentale e si raggiungono solo dal mare: è una sosta da fare con il tender e con mare calmo.',
    },
    {
      numero: 3,
      titolo: 'Lipari: il castello, il museo e la pomice',
      paginaSito: '/destinazioni/italia/eolie',
      racconto:
        'La mattina l\'abbiamo passata nella cittadella fortificata: l\'acropoli con gli scavi dal Neolitico all\'età romana e il Museo Archeologico Eoliano, con le maschere teatrali greche in terracotta. Entri per un\'ora e ne esci dopo tre. Il pomeriggio in barca davanti alle ex cave di pomice tra Canneto e Porticello, dove il fondale bianco fa l\'acqua azzurro latte: lì ci siamo tuffati.',
      tratte: [
        { da: 'Lipari, Marina Corta', a: 'Porticello (ex cave di pomice)', km: 6, minuti: 32, mezzo: 'barca a vela, costa nord-orientale' },
      ],
      luoghi: [
        {
          nome: 'Museo Archeologico Regionale Eoliano «Luigi Bernabò Brea»',
          indirizzo: 'Via del Castello 2, 98055 Lipari',
          telefono: '+39 090 988 0174 · museo.arche.brea@regione.sicilia.it',
          biglietto: 'Intero 6 €, ridotto 3 € secondo la scheda del Ministero; altre fonti riportano cifre più alte. Conferma alla biglietteria.',
          gps: [38.4679, 14.95688],
          nota: 'Le fonti danno orari diversi: telefona prima. Il museo ha anche due sezioni staccate, a Filicudi e a Panarea, aperte in estate.',
          fonti: ['mic-museo', 'osm'],
        },
        {
          nome: 'Ex cave di pomice',
          indirizzo: 'Costa tra Canneto e Porticello, Lipari',
          gps: [38.51854, 14.95905],
          nota: 'L\'accesso da terra agli impianti abbandonati è vietato e pericoloso. Dal mare si vede tutto.',
          fonti: ['osm'],
        },
        {
          nome: 'Belvedere di Quattrocchi',
          indirizzo: 'Strada provinciale tra Lipari e Pianoconte',
          gps: [38.46501, 14.93008],
          nota: 'Per chi resta a terra: faraglioni e Vulcano nella stessa inquadratura.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'A bordo, a Lipari.',
      nota: 'A Lipari ci sono l\'unico ospedale dell\'arcipelago, le biglietterie di tutte le compagnie e i negozi più forniti: è il giorno giusto per rifare la cambusa.',
    },
    {
      numero: 4,
      titolo: 'Salina: la verde',
      paginaSito: '/destinazioni/italia/eolie',
      racconto:
        'Breve traversata fino a Salina, l\'unica isola con acqua sorgiva e per questo verde. Al mattino siamo saliti alla Fossa delle Felci, il punto più alto delle Eolie, tra felci e castagni. Poi Pollara, il mezzo cratere crollato in mare dove hanno girato «Il Postino», con il tramonto guardato dall\'alto. Salina è anche l\'isola dei capperi e della Malvasia: le cantine si visitano su appuntamento.',
      tratte: [
        { da: 'Lipari', a: 'Salina, Santa Marina', km: 13, minuti: 69, mezzo: 'barca a vela (7 miglia, stima a 6 nodi)' },
      ],
      luoghi: [
        {
          nome: 'Monte Fossa delle Felci',
          indirizzo: 'Sentieri da Santa Marina, Leni o Valdichiesa, Salina',
          gps: [38.55683, 14.8457],
          nota: 'È il punto più alto delle Eolie. Parti presto e porta acqua: sopra il bosco il sentiero è esposto al sole.',
          fonti: ['osm'],
        },
        {
          nome: 'Pollara',
          indirizzo: 'Frazione di Malfa, versante occidentale di Salina',
          gps: [38.57708, 14.80949],
          nota: 'La spiaggia sotto la falesia è stata limitata o chiusa per rischio di crolli. Non ho trovato un\'ordinanza recente: chiedi al Comune di Malfa o in paese prima di scendere. Il tramonto si guarda dall\'alto.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'A bordo, in rada a Santa Marina o a Rinella.',
      nota: 'Le cantine di Malvasia non sono negozi: prenota la visita il giorno prima, quando sai già in quale porto dormirai.',
    },
    {
      numero: 5,
      titolo: 'Panarea e gli isolotti',
      paginaSito: '/destinazioni/italia/eolie',
      racconto:
        'In barca a Panarea si viene per gli isolotti a est: Basiluzzo, Dattilo, Lisca Bianca e Bottaro. Tra Lisca Bianca e Bottaro escono bolle di gas dal fondale e si nuota sopra le fumarole. A terra abbiamo camminato fino a Punta Milazzese, con il villaggio dell\'età del Bronzo affacciato su Cala Junco. Nel tardo pomeriggio siamo partiti per Stromboli, con la luce.',
      tratte: [
        { da: 'Salina', a: 'Panarea', km: 19, minuti: 103, mezzo: 'barca a vela (10 miglia, stima a 6 nodi)' },
        { da: 'Panarea', a: 'Lisca Bianca e Bottaro', km: 4, minuti: 22, mezzo: 'barca a vela o tender' },
        { da: 'Panarea', a: 'Stromboli', km: 24, minuti: 127, mezzo: 'barca a vela (13 miglia, stima a 6 nodi)' },
      ],
      luoghi: [
        {
          nome: 'Lisca Bianca e Bottaro',
          indirizzo: 'Isolotti a est di Panarea',
          gps: [38.63944, 15.11382],
          nota: 'Fumarole sottomarine attive: bagno solo con mare calmo e lontano dal traffico delle barche.',
          fonti: ['osm'],
        },
        {
          nome: 'Villaggio preistorico di Punta Milazzese e Cala Junco',
          indirizzo: 'Punta sud di Panarea, a piedi dal paese',
          gps: [38.62392, 15.06224],
          nota: 'Circa mezz\'ora a piedi dal paese, oppure in tender. I reperti sono nella sezione del museo eoliano a Panarea, aperta in estate.',
          fonti: ['osm', 'mic-museo'],
        },
      ],
      mangiare: [],
      dormire: 'A bordo, a Stromboli.',
      nota: 'Su Panarea e Stromboli le auto dei non residenti non possono sbarcare dal 1° maggio al 31 ottobre (decreto regionale 2026): si gira a piedi o con mezzi elettrici.',
    },
    {
      numero: 6,
      titolo: 'Stromboli: la Sciara del Fuoco',
      paginaSito: '/esperienze/italia/stromboli-notte',
      racconto:
        'Di giorno il paese senza auto, la spiaggia nera e Ginostra, con il porticciolo dove entra una barca alla volta. Nel tardo pomeriggio la salita, nei limiti dell\'ordinanza, verso Punta Labronzo, da dove si vede la Sciara. Ma la cosa vera l\'abbiamo fatta dopo il buio, dalla barca: luci di coperta spente, motore fermo, e ogni pochi minuti il boato, il bagliore e i blocchi incandescenti che rotolano fino al mare.',
      tratte: [
        { da: 'Stromboli, Scari', a: 'Ginostra', km: 4, minuti: 24, mezzo: 'barca a vela (2 miglia, stima a 6 nodi)' },
      ],
      luoghi: [
        {
          nome: 'Salita al vulcano (regole del Comune di Lipari)',
          indirizzo: 'Versante di Stromboli: Strada vicinale Parroco e Mulattiera Salvatore di Losa',
          orari: 'Gruppi guidati: dalle 11:00 alle 24:00',
          nota: 'Ordinanza n. 16 del 5 maggio 2025, l\'ultima nell\'archivio INGV a novembre 2026: salita libera fino a 290 m; con guide alpine o vulcanologiche autorizzate fino a 400 m; gruppi di massimo 25 persone. Sul versante di Ginostra libera fino a 130 m, con guida fino a 400 m lungo il sentiero di Punta Corvi. Le quote cambiano con l\'allerta: ricontrolla.',
          fonti: ['ingv-ord-stromboli', 'stromboli-ord16'],
        },
        {
          nome: 'Punta Labronzo (Osservatorio)',
          indirizzo: 'Costa nord di Stromboli, a piedi dal paese',
          gps: [38.81164, 15.21681],
          nota: 'Circa un\'ora a piedi dal paese. Torcia frontale, scarpe chiuse, giacca a vento.',
          fonti: ['osm'],
        },
        {
          nome: 'Ginostra',
          indirizzo: 'Versante sud-occidentale di Stromboli, solo via mare',
          gps: [38.78659, 15.1911],
          nota: 'Nessuna strada. In inverno l\'agenzia Liberty Lines di Ginostra chiude.',
          fonti: ['osm', 'll-biglietterie'],
        },
      ],
      mangiare: [],
      dormire: 'A bordo, sottocosta a Stromboli. L\'isola ha pochi ripari: con mare formato lo skipper può decidere di dormire altrove.',
      costiNoti: ['Guida obbligatoria sopra i 290 m: il prezzo lo fissano le guide, chiedilo al momento'],
      nota: 'Lo stato di allerta del vulcano lo pubblica la Protezione civile insieme all\'INGV. Se l\'allerta sale, le quote scendono e la salita può essere vietata: la Sciara dal mare resta sempre la scelta sicura.',
    },
    {
      numero: 7,
      titolo: 'Filicudi o Alicudi: le isole della fine',
      paginaSito: '/destinazioni/italia/eolie',
      racconto:
        'Rotta verso ovest, alle due isole che via traghetto sono scomode. A Filicudi la Grotta del Bue Marino in tender, lo Scoglio della Canna alto più di settanta metri, il villaggio di Capo Graziano e la mulattiera fino a Zucco Grande. Alicudi è un cono senza strade né auto, tutto scalinate di pietra e carichi a dorso di mulo: si sale fino alle case alte e si guarda il mare. Ultima notte in rada.',
      tratte: [
        { da: 'Stromboli', a: 'Filicudi Porto', km: 63, minuti: 340, mezzo: 'barca a vela (34 miglia, la tappa più lunga, stima a 6 nodi)' },
        { da: 'Filicudi', a: 'Alicudi', km: 20, minuti: 105, mezzo: 'barca a vela (10 miglia)' },
      ],
      luoghi: [
        {
          nome: 'Capo Graziano, villaggio preistorico',
          indirizzo: 'Promontorio a sud di Filicudi Porto',
          gps: [38.55691, 14.58835],
          nota: 'La sezione del museo eoliano a Filicudi è aperta in estate; in inverno si visita su prenotazione.',
          fonti: ['osm', 'mic-museo'],
        },
        {
          nome: 'Alicudi Porto',
          indirizzo: 'Unico approdo dell\'isola',
          gps: [38.5339, 14.35987],
          nota: 'Nessuna strada carrozzabile: si sale a piedi lungo le scalinate. Le auto dei non residenti non sbarcano dal 1° giugno al 31 ottobre 2026.',
          fonti: ['osm', 'decreto-auto'],
        },
      ],
      mangiare: [],
      dormire: 'A bordo, in rada a Filicudi o ad Alicudi.',
      nota: 'Sono le isole con meno corse di linea, e con il mare mosso restano isolate anche per giorni. In barca è il contrario: lo skipper decide in base al vento quale delle due fare.',
    },
    {
      numero: 8,
      titolo: 'Rientro e sbarco',
      paginaSito: '/viaggi/eolie-in-vela',
      racconto:
        'La traversata di rientro è la più lunga e la più bella: si esce dall\'arcipelago e lo si vede allontanarsi tutto insieme, con Stromboli che sparisce per ultimo. Siamo sbarcati in mattinata, poi pulizie di bordo e saluti.',
      tratte: [
        { da: 'Alicudi', a: 'Milazzo', km: 84, minuti: 456, mezzo: 'barca a vela (46 miglia in linea d\'aria, stima a 6 nodi)' },
        { da: 'Milazzo, porto', a: 'Aeroporto di Catania', km: 145, minuti: 111 },
      ],
      luoghi: [
        {
          nome: 'Porto di Milazzo',
          gps: [38.21929, 15.24123],
          nota: 'Il bus per l\'aeroporto di Catania parte dal porto (Giuntabus). Non prenotare il volo per il primo pomeriggio: con il vento contrario il rientro si allunga.',
          fonti: ['osm', 'giuntabus'],
        },
      ],
      mangiare: [],
      dormire: 'Nessun pernottamento a bordo.',
      nota: 'Se l\'ultima tappa è Alicudi, la traversata verso Milazzo è lunga: molte barche dormono l\'ultima notte più vicino alla Sicilia, a Vulcano o a Lipari.',
    },
  ],
  mappa: {
    percorso: ['Milazzo', 'Vulcano', 'Lipari', 'Salina', 'Panarea', 'Stromboli', 'Filicudi', 'Alicudi'],
    ritorno: ['Alicudi', 'Milazzo'],
    acque: [
      {
        nome: 'Mar Tirreno',
        etichetta: [38.86, 14.62],
        punti: [
          [38.9, 14.25], [38.9, 15.35], [38.24, 15.35], [38.22, 15.27], [38.27, 15.235], [38.21, 15.22],
          [38.17, 15.1], [38.19, 14.93], [38.16, 14.75], [38.12, 14.6], [38.12, 14.25],
        ],
      },
    ],
    legenda: 'Linea piena: la rotta di andata da Milazzo verso ovest passando per Stromboli. Tratteggio: rientro a Milazzo. Coste disegnate a mano, non in scala.',
    notaTempi: 'Miglia in linea d\'aria tra gli ancoraggi e tempi stimati a 6 nodi: la rotta vera la decidono vento e skipper, a motore si va più veloci. Auto Catania-Milazzo: OSRM, traffico libero.',
    notaTempiFonti: ['osm', 'osrm'],
    scalaKm: 20,
  },
  primaDiPartire: [
    {
      titolo: 'Prenotazioni da fare a casa',
      righe: [
        { voce: 'Barca', valore: 'Per giugno e settembre prenota con mesi di anticipo; luglio e agosto si riempiono prima. Chiedi per iscritto se il prezzo include skipper, carburante, ormeggi e pulizie finali: spesso sono a parte.' },
        { voce: 'Volo', valore: 'Arrivo a Catania. Il bus Giuntabus collega l\'aeroporto al porto di Milazzo in coincidenza con navi e aliscafi: orari e biglietti su giuntabus.com, telefono +39 090 673782.', fonti: ['giuntabus'] },
        { voce: 'Notte a Milazzo', valore: 'Se atterri la sera, dormi a Milazzo: l\'imbarco è nel pomeriggio del giorno dopo.' },
        { voce: 'Cantine di Salina', valore: 'Visite su appuntamento: si prenotano durante la settimana, quando lo skipper ha deciso il porto.' },
      ],
    },
    {
      titolo: 'Vulcani: le regole del momento',
      righe: [
        { voce: 'Stromboli', valore: 'Ultima ordinanza in archivio (n. 16 del 5/5/2025): libera fino a 290 m, con guida autorizzata fino a 400 m, gruppi di massimo 25, dalle 11 alle 24. Sopra i 400 m non si sale.', fonti: ['ingv-ord-stromboli', 'stromboli-ord16'] },
        { voce: 'Vulcano', valore: 'Il cratere La Fossa è stato chiuso e riaperto più volte dal 2021 per le emissioni di gas. Controlla l\'ordinanza in vigore e le condizioni del vento: con il vento sbagliato le escursioni saltano.', fonti: ['ingv-ord-vulcano', 'ingv-trek-vulcano'] },
        { voce: 'Dove guardare', valore: 'L\'archivio delle ordinanze del Comune di Lipari sul sito del Centro di monitoraggio delle Eolie dell\'INGV (cme.ingv.it), diviso per isola.', fonti: ['ingv-ord-stromboli'] },
      ],
    },
    {
      titolo: 'Auto e traghetti',
      righe: [
        { voce: 'Auto sulle isole', valore: 'Decreto regionale del 17/4/2026: niente sbarco e circolazione per le auto dei non residenti a Panarea e Stromboli dal 1° maggio al 31 ottobre, ad Alicudi dal 1° giugno al 31 ottobre, a Lipari, Vulcano e Filicudi dal 1° giugno al 30 settembre. Chi va in barca non ne ha bisogno.', fonti: ['decreto-auto'] },
        { voce: 'Aliscafi', valore: 'Liberty Lines: biglietteria di Milazzo in Via Luigi Rizzo, nuovo terminal aliscafi. Vende anche via WhatsApp (+39 342 807 9408).', fonti: ['ll-biglietterie'] },
        { voce: 'Navi', valore: 'Caronte & Tourist Isole Minori (ex Siremar): biglietteria di Milazzo in Via dei Mille 26 e al terminal di Via Tindaro La Rosa 90; partenze da Molo Eolie Nord, Molo Eolie Sud e Banchina Dente XX Luglio.', fonti: ['ct-biglietterie'] },
        { voce: 'Mare mosso', valore: 'Con il maltempo le corse saltano: la sera prima guarda gli avvisi sui siti delle compagnie. Non fissare il volo di ritorno il giorno stesso dello sbarco se arrivi da un\'isola con un aliscafo.', fonti: ['ll-biglietterie'] },
      ],
    },
    {
      titolo: 'Stagione, mare e acqua',
      righe: [
        { voce: 'Quando', valore: 'Giugno e settembre. La seconda metà di settembre ha acqua calda e poche barche; luglio e agosto ancoraggi pieni e prezzi al massimo.' },
        { voce: 'Vento', valore: 'L\'itinerario si riscrive in corsa. Stromboli ha pochissimi ripari: con mare formato la sosta salta o si accorcia.' },
        { voce: 'Acqua dolce', valore: 'Su diverse isole arriva con le navi cisterna: serbatoi usati con parsimonia, docce corte.' },
        { voce: 'Mal di mare', valore: 'Le traversate durano da due a quattro ore, ma tra Panarea e Stromboli il mare può essere mosso. I rimedi vanno presi prima di uscire dal porto.' },
        { voce: 'Area marina protetta', valore: 'A novembre 2026 l\'area marina protetta delle Eolie è ancora una proposta: valgono le regole delle Capitanerie e dei siti Natura 2000 dei fondali.', fonti: ['zsc-fondali'] },
      ],
    },
  ],
  emergenze: {
    numeri: [
      {
        voce: '112 · Numero unico europeo',
        valore: 'Attivo in Sicilia: la provincia di Messina, e quindi le Eolie, risponde alla centrale unica di Catania. Smista a polizia, carabinieri, vigili del fuoco e ambulanza; 113, 115 e 118 restano validi e arrivano alla stessa centrale.',
        fonti: ['nue-catania', 'nue-regione'],
      },
      { voce: 'Guardia costiera, emergenze in mare', valore: '1530 (gratuito, 24 ore su 24)', fonti: ['gc-1530'] },
      { voce: 'Emergenza sanitaria', valore: '118', fonti: ['nue-catania'] },
      { voce: 'Vigili del fuoco · Polizia', valore: '115 · 113', fonti: ['nue-catania'] },
    ],
    ambasciata: [
      {
        nome: 'Non serve: sei in Italia',
        cosa: 'Documenti persi o rubati: denuncia a Polizia o Carabinieri (anche il 112); la carta d\'identità si rifà al Comune (per tutte le isole è il Comune di Lipari, tranne Salina).',
        stato: 'ufficiale',
        fonti: ['nue-catania'],
      },
    ],
    ospedali: [
      {
        nome: 'Ospedale di Lipari (ASP Messina)',
        cosa: 'L\'unico ospedale dell\'arcipelago, pronto soccorso h24. Per i casi gravi l\'elisoccorso porta in Sicilia.',
        indirizzo: 'Via Sant\'Anna, Lipari',
        telefono: '+39 090 98851',
        stato: 'ufficiale',
        avviso: 'Numero da un portale sanitario, non dal sito dell\'ASP: in emergenza chiama il 118.',
        fonti: ['qsalute-lipari', 'asp-avviso-lipari'],
      },
      {
        nome: 'Guardia medica (continuità assistenziale) sulle isole',
        cosa: 'Le isole minori hanno presidi di continuità assistenziale (guardia medica)',
        stato: 'ufficiale',
        avviso: 'Per il 2026 non ho trovato indirizzi, orari e telefoni ufficiali dei presidi sulle singole isole: verifica sul sito dell\'ASP di Messina o chiedi in farmacia.',
        fonti: ['lasicilia-presidi', 'asp-messina'],
      },
    ],
  },
  contatti: [
    {
      gruppo: 'Aliscafi e navi',
      nota: 'Sulle isole le agenzie aprono in base alle corse: Caronte & Tourist garantisce la biglietteria almeno 90 minuti prima di ogni partenza.',
      notaFonti: ['ct-biglietterie'],
      voci: [
        { nome: 'Liberty Lines, biglietteria di Milazzo', cosa: 'Aliscafi Milazzo-Eolie', indirizzo: 'Via Luigi Rizzo, nuovo terminal aliscafi, Milazzo', telefono: '+39 340 902 3731 · +39 090 922 4193 · +39 090 928 4509', web: 'libertylines.it', stato: 'ufficiale', fonti: ['ll-biglietterie'] },
        { nome: 'Liberty Lines, numero generale', cosa: 'Informazioni e prenotazioni', telefono: '+39 0923 022022 · WhatsApp +39 342 807 9408', web: 'libertylines.it', stato: 'ufficiale', fonti: ['ll-biglietterie'] },
        { nome: 'Caronte & Tourist Isole Minori (Siremar), Milazzo', cosa: 'Navi per le Eolie', indirizzo: 'Via dei Mille 26, 98057 Milazzo', telefono: '+39 090 923 6307 · milazzo@carontetourist.it', web: 'carontetourist.it', stato: 'ufficiale', fonti: ['ct-biglietterie'] },
        { nome: 'Caronte & Tourist, terminal traghetti di Milazzo', cosa: 'Seconda biglietteria al porto', indirizzo: 'Via Tindaro La Rosa 90, Milazzo', telefono: '+39 090 923 6308', stato: 'ufficiale', fonti: ['ct-biglietterie'] },
        { nome: 'Caronte & Tourist, servizio clienti', cosa: 'Numero generale', telefono: '+39 090 5737000 · servizioclienti@carontetourist.it', stato: 'ufficiale', avviso: 'Il sito lo indica come numero temporaneo per problemi alla linea abituale.', fonti: ['ct-biglietterie'] },
        { nome: 'Caronte & Tourist, Lipari', cosa: 'Agenzia Eol Travel, stazione porto', telefono: '+39 327 075 8966 · lipari@carontetourist.it', stato: 'ufficiale', fonti: ['ct-biglietterie'] },
        { nome: 'Caronte & Tourist, Panarea', cosa: 'Agenzia Salvatore Morelli, Via San Pietro; tutti i giorni 07:30-12:15 e 14:30-19:00', telefono: '+39 090 983344 · +39 331 156 8633', stato: 'ufficiale', fonti: ['ct-biglietterie'] },
        { nome: 'Caronte & Tourist, Filicudi', cosa: 'Agenzia in Via Nino Santamaria, Porto', telefono: '+39 090 988 9948 · +39 327 882 7777', stato: 'ufficiale', fonti: ['ct-biglietterie'] },
        { nome: 'Caronte & Tourist, Alicudi', cosa: 'Agenzia in Via Porto', telefono: '+39 328 655 9228', stato: 'ufficiale', fonti: ['ct-biglietterie'] },
      ],
    },
    {
      gruppo: 'A terra',
      voci: [
        { nome: 'Giuntabus', cosa: 'Bus aeroporto di Catania - porto di Milazzo e linee Messina-Milazzo', indirizzo: 'Via Terranova 8, Messina', telefono: '+39 090 673782', web: 'giuntabus.com', stato: 'ufficiale', fonti: ['giuntabus'] },
        { nome: 'Trenitalia', cosa: 'Treni regionali per Milazzo', telefono: '892021 (a pagamento, 24 h)', web: 'trenitalia.com', stato: 'ufficiale', fonti: ['trenitalia'] },
        { nome: 'Museo Archeologico Regionale Eoliano', cosa: 'Lipari, Via del Castello 2', telefono: '+39 090 988 0174', stato: 'ufficiale', fonti: ['mic-museo'] },
      ],
    },
    {
      gruppo: 'Vulcani e ordinanze',
      voci: [
        { nome: 'INGV, Centro di monitoraggio delle Eolie', cosa: 'Stato dei vulcani e archivio delle ordinanze del Comune di Lipari', web: 'cme.ingv.it', stato: 'ufficiale', fonti: ['ingv-ord-stromboli'] },
        { nome: 'Guide alpine e vulcanologiche di Stromboli', cosa: 'Obbligatorie sopra i 290 m: devono avere il tesserino dell\'albo regionale con il bollino dell\'anno', stato: 'ufficiale', avviso: 'Non stampo nomi di singole guide: chiedi il tesserino prima di partire.', fonti: ['stromboli-ord16'] },
      ],
    },
  ],
  budget: {
    righe: [
      { voce: 'Barca con skipper, quota a testa', nota: 'la voce principale' },
      { voce: 'Carburante, ormeggi, pulizie finali', nota: 'chiedi se sono compresi' },
      { voce: 'Cambusa', nota: 'divisa tra l\'equipaggio, si cena a bordo quasi sempre' },
      { voce: 'Bus aeroporto di Catania - Milazzo', nota: 'prezzo su giuntabus.com' },
      { voce: 'Notte a Milazzo prima dell\'imbarco' },
      { voce: 'Museo Archeologico Eoliano', costo: 'da 6 €' },
      { voce: 'Guida a Stromboli', nota: 'obbligatoria sopra i 290 m' },
      { voce: 'Pane cunzato, granite, cene a terra' },
      { voce: 'Malvasia e capperi da portare a casa' },
    ],
    nota: 'Nell\'articolo non ho annotato cifre: le righe vuote le riempi tu. In alta stagione, sette notti di albergo sulle isole costano più o meno quanto una settimana in barca divisa.',
  },
  valigia: [
    {
      gruppo: 'Documenti e soldi',
      voci: ['Carta d\'identità', 'Tessera sanitaria', 'Patente nautica, se noleggi senza skipper', 'Contratto della barca e ricevute', 'Contanti per cassa comune e piccoli porti', 'Questa guida stampata'],
    },
    {
      gruppo: 'A bordo',
      voci: ['Borsa morbida, mai valigia rigida', 'Scarpe da barca con la suola chiara', 'K-way e felpa pesante per la notte', 'Costume e telo che asciuga in fretta', 'Maschera e boccaglio', 'Rimedi per il mal di mare', 'Crema solare alta e cappello'],
    },
    {
      gruppo: 'Per i vulcani',
      voci: ['Scarpe da trekking già rodate', 'Torcia frontale', 'Giacca a vento', 'Due litri d\'acqua a testa', 'Bandana o mascherina per la polvere e i gas'],
    },
    {
      gruppo: 'Tecnica',
      voci: ['Power bank (la corrente a bordo è poca)', 'Presa accendisigari USB', 'Busta stagna per il telefono', 'Mappe offline delle isole'],
    },
  ],
  lingua: {
    nome: 'Parole di bordo, di porto e di vulcano',
    pronuncia: 'In Italia il frasario non serve. Qui ci sono le parole tecniche che incontri su avvisi, biglietti e ordinanze, con cosa vogliono dire in pratica.',
  },
  frasario: [
    {
      gruppo: 'Mare e ormeggi',
      frasi: [
        { it: 'In rada · alla fonda', loc: 'Barca ancorata fuori dal porto, senza banchina' },
        { it: 'Gavitello · campo boe', loc: 'Boa a cui ci si lega al posto dell\'ancora, quasi sempre a pagamento' },
        { it: 'Tender', loc: 'Il gommone di servizio per scendere a terra' },
        { it: 'Mare formato', loc: 'Onda già alta: certi ancoraggi diventano inutilizzabili' },
        { it: 'Avviso di burrasca', loc: 'Vento forte in arrivo: lo skipper cambia rotta o resta in porto' },
        { it: 'Canale 16', loc: 'Il canale radio VHF di soccorso, sempre in ascolto a bordo' },
      ],
    },
    {
      gruppo: 'Porti e biglietti',
      frasi: [
        { it: 'Aliscafo', loc: 'Battello veloce per soli passeggeri (Liberty Lines)' },
        { it: 'Nave · traghetto', loc: 'Più lenta, porta anche i veicoli (Caronte & Tourist, Siremar)' },
        { it: 'Corsa sospesa', loc: 'Partenza cancellata per il mare: si annuncia sul sito della compagnia' },
        { it: 'Divieto di sbarco', loc: 'Auto dei non residenti vietate sull\'isola in quel periodo' },
      ],
    },
    {
      gruppo: 'Vulcani',
      frasi: [
        { it: 'Ordinanza sindacale', loc: 'L\'atto del Comune di Lipari che decide fin dove si sale' },
        { it: 'Quota 290 · quota 400', loc: 'A Stromboli: salita libera fino a 290 m, con guida fino a 400 m', nota: 'ordinanza n. 16/2025' },
        { it: 'Guida vulcanologica', loc: 'Guida iscritta all\'albo regionale, con tesserino e bollino dell\'anno' },
        { it: 'Livello di allerta', loc: 'Lo stato del vulcano fissato dalla Protezione civile: se sale, le quote scendono' },
        { it: 'Fumarola', loc: 'Uscita di gas caldo dal suolo o dal fondale: non respirarla da vicino' },
      ],
    },
    {
      gruppo: 'Salute',
      frasi: [
        { it: 'Guardia medica', loc: 'Medico di notte e nei festivi per casi non gravi' },
        { it: 'Pronto soccorso', loc: 'Sulle Eolie solo all\'ospedale di Lipari' },
        { it: 'Elisoccorso', loc: 'L\'elicottero del 118 per i casi gravi verso la Sicilia' },
        { it: 'Farmacia di turno', loc: 'Quella aperta di notte: l\'elenco è sulla porta delle altre' },
      ],
    },
  ],
  numeri: [
    { it: '112', loc: 'Emergenze, numero unico' },
    { it: '1530', loc: 'Guardia costiera, emergenze in mare' },
    { it: '118', loc: 'Ambulanza ed elisoccorso' },
    { it: '115', loc: 'Vigili del fuoco' },
    { it: '113', loc: 'Polizia' },
    { it: 'VHF 16', loc: 'Soccorso via radio dalla barca' },
    { it: '+39 090 98851', loc: 'Ospedale di Lipari', nota: 'da riconfermare' },
    { it: '+39 0923 022022', loc: 'Liberty Lines' },
    { it: '+39 090 923 6307', loc: 'Caronte & Tourist, Milazzo' },
    { it: '+39 090 673782', loc: 'Giuntabus' },
    { it: '+39 090 988 0174', loc: 'Museo Archeologico Eoliano' },
  ],
  pagineSito: [
    { titolo: 'Il viaggio sul sito', path: '/viaggi/eolie-in-vela' },
    { titolo: 'Italia, scheda paese', path: '/destinazioni/italia' },
    { titolo: 'Isole Eolie', path: '/destinazioni/italia/eolie' },
    { titolo: 'Stromboli in eruzione dal mare', path: '/esperienze/italia/stromboli-notte' },
    { titolo: 'Le Eolie in barca a vela', path: '/esperienze/italia/eolie-in-vela' },
  ],
  consultate: 'Consultate tra il 1° e il 2 novembre 2026. Ordinanze, orari e prezzi cambiano: prima di partire guarda sempre la fonte ufficiale.',
  nonVerificato: [
    'Ordinanza in vigore per il cratere di Vulcano: nell\'archivio INGV l\'ultima è del 2023',
    'Eventuali ordinanze su Stromboli successive al 5 maggio 2025 (a agosto 2026 è stato aperto un nuovo sentiero)',
    'Orari e prezzo attuale del Museo Archeologico Eoliano: le fonti non coincidono',
    'Prezzi e orari del bus Giuntabus Catania-Milazzo e dei treni regionali',
    'Telefono dell\'ospedale di Lipari dal sito dell\'ASP; presidi di guardia medica turistica 2026 sulle singole isole',
    'Contributo di sbarco del Comune di Lipari per il 2026 (spesso è già nel prezzo del biglietto)',
    'Stato di accesso alla spiaggia di Pollara',
    'Telefoni di Capitaneria di porto di Milazzo e Ufficio circondariale marittimo di Lipari: il sito della Guardia costiera non li mostra',
    'Costo della barca, dello skipper e delle guide di Stromboli: non annotati nel viaggio',
    'Coordinate dello Scoglio della Canna (non trovate su OpenStreetMap)',
  ],
  fonti: [
    { id: 'ingv-ord-stromboli', titolo: 'INGV, archivio ordinanze del Comune di Lipari: Stromboli', url: 'https://cme.ingv.it/statodi-attivita-dei-vulcani-eoliani/archivio-documenti-protezione-civile/ordinanze-sindacali-comune-di-lipari/stromboli' },
    { id: 'stromboli-ord16', titolo: 'Comune di Lipari, ordinanza n. 16 del 5/5/2025 (salita a Stromboli)', url: 'https://cme.ingv.it/statodi-attivita-dei-vulcani-eoliani/archivio-documenti-protezione-civile/ordinanze-sindacali-comune-di-lipari/stromboli/2648-2025-05-05-ordinanza-sindaco-lipari-n-16/file' },
    { id: 'ingv-ord-vulcano', titolo: 'INGV, archivio ordinanze del Comune di Lipari: Vulcano', url: 'https://cme.ingv.it/statodi-attivita-dei-vulcani-eoliani/archivio-documenti-protezione-civile/ordinanze-sindacali-comune-di-lipari/vulcano' },
    { id: 'vulcano-ord32', titolo: 'Comune di Lipari, ordinanza n. 32 del 30/6/2023 (Vulcano, Acque Calde)', url: 'https://cme.ingv.it/statodi-attivita-dei-vulcani-eoliani/archivio-documenti-protezione-civile/ordinanze-sindacali-comune-di-lipari/vulcano/2194-2023-06-30-ordinanza-sindaco-lipari-n32/file' },
    { id: 'ingv-trek-vulcano', titolo: 'INGV, trekking a Vulcano (escursioni regolate da ordinanza)', url: 'https://www.ingv.it/images/news/news/TREKKING_vulcano.pdf' },
    { id: 'decreto-auto', titolo: 'Regione Siciliana, D.P. n. 85/A1/S.G. del 17/4/2026, limitazioni di sbarco Eolie (pubblicato da Caronte & Tourist)', url: 'https://cdn.carontetourist.it/sites/default/files/2026-04/limitazioni-di-sbarco-isole-eolie-2026.pdf' },
    { id: 'll-biglietterie', titolo: 'Liberty Lines, biglietterie e avvisi', url: 'https://www.libertylines.it/informazioni-di-viaggio/biglietterie/' },
    { id: 'ct-biglietterie', titolo: 'Caronte & Tourist Isole Minori, porti e biglietterie', url: 'https://www.carontetourist.it/it/isole-sicilia/informazioni-viaggio/porti-biglietterie' },
    { id: 'giuntabus', titolo: 'Giuntabus, linee e contatti', url: 'https://www.giuntabus.com/contatti/' },
    { id: 'trenitalia', titolo: 'Trenitalia, contatti', url: 'https://www.trenitalia.com/it/informazioni/contatti.html' },
    { id: 'mic-museo', titolo: 'Ministero della Cultura, Museo archeologico regionale eoliano «Luigi Bernabò Brea»', url: 'https://cultura.gov.it/luogo/museo-archeologico-regionale-eoliano-luigi-bernabo-brea' },
    { id: 'nue-catania', titolo: 'LiveUniversity, centrale unica 112 di Catania per la Sicilia orientale (30/9/2019)', url: 'https://catania.liveuniversity.it/2019/09/30/sicilia-numero-unico-emergenze-centrale-catania/' },
    { id: 'nue-regione', titolo: 'Regione Siciliana, D.R.S. n. 855 del 26/6/2026 (servizio NUE 112, centrali di Palermo e Catania)', url: 'https://regione.sicilia.it/istituzioni/servizi-informativi/decreti-e-direttive/drs-n855-26062026' },
    { id: 'gc-1530', titolo: 'Guardia costiera, numero blu 1530', url: 'https://www.guardiacostiera.gov.it' },
    { id: 'qsalute-lipari', titolo: 'QSalute, Ospedale di Lipari (indirizzo e telefono)', url: 'https://www.qsalute.it/ospedale-di-lipari/' },
    { id: 'asp-avviso-lipari', titolo: 'ASP Messina, avviso pubblico per l\'ospedale di Lipari (pronto soccorso h24)', url: 'https://concorsipubblici.com/sites/default/files/contest/2023-05/2-avviso-pubblico-medicina-interna-lipari.pdf' },
    { id: 'asp-messina', titolo: 'ASP Messina', url: 'https://www.asp.messina.it' },
    { id: 'lasicilia-presidi', titolo: 'La Sicilia, maltempo alle Eolie e medici dei presidi di continuità assistenziale (febbraio 2026)', url: 'https://www.lasicilia.it/news/cronaca/3012904/maltempo-isola-le-eolie-collegamenti-fermi-scorte-in-esaurimento.html' },
    { id: 'zsc-fondali', titolo: 'Regione Siciliana, ZSC ITA030041 Fondali dell\'arcipelago delle Isole Eolie (ottobre 2026)', url: 'https://www.regione.sicilia.it/index%2Ephp/system/files/2026-10/ita030041_-_fondali_dellarcipelago_delle_isole_eolie.pdf' },
    { id: 'osm', titolo: 'OpenStreetMap / Nominatim (coordinate)', url: 'https://nominatim.openstreetmap.org' },
    { id: 'osrm', titolo: 'OSRM su dati OpenStreetMap (distanze e tempi in auto, traffico libero)', url: 'https://router.project-osrm.org' },
  ],
}
