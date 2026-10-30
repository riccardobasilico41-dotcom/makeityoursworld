import type { Destinazione } from '@/lib/types'

// Prima uscita lituana dell'archivio, collegata al viaggio "Capitali
// baltiche in 9 giorni" (src/content/viaggi/61-capitali-baltiche.md, dati in
// src/content/viaggi-dati/capitali-baltiche.ts). Nessuna delle due
// destinazioni qui sotto è stata visitata di persona: visitataPersonalmente
// resta false su entrambe e il campo miaEsperienza, facoltativo nel tipo, è
// assente di proposito — niente ricordo inventato, solo fatti verificati con
// ricerca (stesso trattamento usato in src/content/destinazioni/polonia.ts e
// in src/content/meraviglie.ts per i monumenti non visitati). Trakai è
// trattata come destinazione a sé, non ripiegata dentro il cosaFare di
// Vilnius, sullo stesso modello con cui Auschwitz-Birkenau è una destinazione
// a sé rispetto a Cracovia: è un luogo fisicamente separato, con una propria
// storia e un proprio cosaVedere denso, non solo una tappa nel cosaFare della
// capitale.

export const destinazioniLituania: Destinazione[] = [
  {
    slug: 'vilnius',
    paeseSlug: 'lituania',
    ordine: 1,
    nome: 'Vilnius',
    tipologia: ['città', 'storia', 'arte'],
    giorniConsigliati: '3 giorni, compresa la gita a Trakai',
    visitataPersonalmente: false,
    introduzione:
      'È la capitale della Lituania e la più popolosa delle tre capitali baltiche. Il centro storico, patrimonio UNESCO dal 1994, è uno dei centri barocchi più estesi dell\'Europa centro-orientale: oltre 1.500 edifici storici fra chiese barocche, cortili rinascimentali e vicoli medievali. Sull\'altra sponda del fiume Vilnia, dentro lo stesso centro storico, il quartiere di Užupis si è proclamato repubblica indipendente nel 1997, con costituzione, bandiera e presidente onorari.',
    percheAndarci:
      'In un\'area che si gira a piedi ci sono la collina fortificata di Gediminas, che domina la città, la più alta concentrazione di architettura barocca del Baltico e un quartiere bohémien che prende in giro le proprie istituzioni con la stessa serietà con cui le rispetta. È anche la base naturale per la gita più classica del paese, il castello sull\'isola di Trakai.',
    cosaVedere: [
      'La Cattedrale di Vilnius (Vilniaus katedra), neoclassica, in Piazza della Cattedrale, con il campanile separato a torre e le cripte reali del Granducato di Lituania',
      'La collina di Gediminas, con i resti del Castello Superiore e la Torre di Gediminas (ci si sale a piedi o in funicolare): è il simbolo della città e il punto panoramico più alto sul centro storico',
      'Il quartiere di Užupis, con il Muro della Costituzione (i 41 articoli della "costituzione" del quartiere, tradotti in decine di lingue su altrettante targhe) e l\'Angelo di Užupis, la statua simbolo del rione',
      'La Chiesa di Sant\'Anna, gotica in mattoni rossi, e la vicina Chiesa di San Francesco e San Bernardino: insieme sono uno degli scorci gotici più fotografati della città',
      'Il Cortile Universitario dell\'Università di Vilnius, fondata nel 1579 e tra i più antichi atenei dell\'Europa centro-orientale, con tredici cortili collegati e affreschi astronomici',
      'La Porta dell\'Aurora (Aušros Vartai), l\'unica porta rimasta delle antiche mura, con la cappella dell\'icona della Madonna Nera, meta di pellegrinaggio',
      'Il Palazzo dei Granduchi di Lituania, ricostruito sui resti archeologici del castello reale medievale, oggi museo sulla storia del Granducato',
    ],
    cosaFare: [
      'Salire in funicolare (o a piedi) alla Torre di Gediminas per il panorama sui tetti rossi della Città Vecchia',
      'Girare per gallerie d\'arte, caffè e piccoli laboratori artigiani di Užupis, cercando le targhe del Muro della Costituzione',
      'Attraversare i tredici cortili dell\'Università di Vilnius, con una sosta nella Biblioteca dell\'Università e nella Chiesa di San Giovanni',
      'Fare un giro serale tra i bar del centro storico intorno a via Pilies, la via pedonale che va da Piazza della Cattedrale alla Porta dell\'Aurora',
    ],
    doveDormire:
      'Nel centro storico (Senamiestis) si ha tutto a piedi: la zona di via Pilies è la più centrale, quella verso Užupis è più tranquilla e ha un\'aria bohémien tutta sua. Fuori dalle mura, il quartiere di Naujamiestis (città nuova) è l\'alternativa più economica, a pochi minuti a piedi dal centro storico.',
    doveMangiare:
      'Il piatto nazionale sono i cepelinai, grandi gnocchi di patata ripieni di carne o formaggio. D\'estate il simbolo della cucina lituana è la šaltibarščiai, zuppa fredda di barbabietola di un rosa acceso, servita con patate lesse. Il kibinas, il fagottino ripieno portato in Lituania dalla comunità caraima di Trakai, si trova anche a Vilnius. Diversi ristoranti del centro storico fanno cucina lituana contemporanea a prezzi ancora contenuti rispetto all\'Europa occidentale.',
    comeArrivare:
      'L\'Aeroporto Internazionale di Vilnius (VNO) è a circa 7 km dal centro: treno o bus pubblico in 10-20 minuti, oppure taxi o Bolt in pochi minuti. Da alcuni aeroporti italiani ci sono voli diretti low cost, stagionali o tutto l\'anno; altrimenti si fa scalo in un hub europeo.',
    comeSpostarsi:
      'Il centro storico si gira tutto a piedi. Per il resto della città bus e filobus pubblici sono economici e frequenti. Per Trakai c\'è il treno regionale (circa 34 minuti) o il bus (circa 35 minuti) dalla stazione centrale.',
    periodoMigliore:
      'maggio-settembre, per il clima mite e le giornate lunghe. Giugno-agosto è la stagione più calda e affollata, con il picco del solstizio a fine giugno. L\'inverno (novembre-marzo) è freddo, ma la città regge bene e a dicembre ci sono i mercatini di Natale.',
    costi: 'città economica per gli standard dell\'Europa occidentale: ingresso alla Torre di Gediminas 8€ più 2-3€ di funicolare, cena normale 10-15€ a testa, birra locale 3-5€.',
    erroriDaEvitare: [
      'Pensare che chi parla lituano capisca il lettone (la lingua della vicina Riga): sono lingue baltiche imparentate alla lontana, ma l\'una non si capisce partendo dall\'altra',
      'Attraversare Užupis in fretta: il senso del posto sta nel fermarsi, leggere il Muro della Costituzione e girare senza meta tra le gallerie',
      'Salire alla Torre di Gediminas nelle ore centrali dell\'alta stagione, quando la coda per la funicolare si allunga: meglio andarci presto la mattina o verso il tramonto',
      'Programmare Trakai come una tappa "veloce" di un\'ora: tra trasporti e visita al castello serve mezza giornata',
    ],
    confronti: [
      {
        titolo: 'Come arrivare a Trakai da Vilnius',
        introduzione: 'Due modi ugualmente pratici per arrivare al castello sull\'isola, entrambi dalla stazione centrale di Vilnius e con tempi di viaggio molto simili.',
        opzioni: [
          {
            nome: 'Treno regionale',
            sintesi: 'Il collegamento più diretto e puntuale; la stazione di Trakai è a circa 3 km dal castello.',
            durata: 'circa 34 minuti',
            costo: 'poche unità di euro a tratta',
            pro: ['Puntuale e frequente', 'Nessun rischio di traffico'],
            contro: ['La stazione di Trakai è più lontana dal castello rispetto alla fermata del bus', 'Meno corse rispetto al bus'],
            perChi: 'chi vuole orari certi e non ha problemi a camminare (o a prendere un bus locale) dalla stazione al castello',
          },
          {
            nome: 'Bus di linea',
            sintesi: 'Più frequente del treno, e la fermata è più vicina al castello.',
            durata: 'circa 35 minuti',
            costo: 'circa 5-6€ a tratta',
            pro: ['Corse più frequenti, fino a 50 al giorno in settimana', 'Fermata a circa 2,3 km dal castello, un po\' più vicina della stazione ferroviaria'],
            contro: ['Soggetto al traffico sulla statale', 'Leggermente più caro del treno'],
            perChi: 'chi vuole più libertà di orario, soprattutto nel weekend',
          },
        ],
      },
    ],
    esperienzeSlugs: ['uzupis-repubblica-passeggiata'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Il centro storico di Vilnius tra il verde, con le cupole e i tetti delle chiese e le colline boscose sullo sfondo',
    immagine: '/images/lituania/vilnius.jpg',
  },
  {
    slug: 'trakai',
    paeseSlug: 'lituania',
    ordine: 2,
    nome: 'Trakai',
    tipologia: ['castello', 'natura', 'storia'],
    giorniConsigliati: 'mezza giornata, come gita da Vilnius',
    visitataPersonalmente: false,
    introduzione:
      'Prima di Vilnius era la capitale del Granducato di Lituania, e sta circa 28 km a ovest della capitale attuale. Il castello gotico in mattoni rossi sorge su un\'isola del lago Galvė, collegato alla terraferma da un ponte pedonale in legno, in mezzo a laghi tra i più belli del paese: nei dintorni di Trakai sono oltre duecento. Qui vive da secoli la comunità caraima (Karaim), che il Granduca Vytautas portò nel Trecento come guardia personale e che ha ancora una lingua, una religione e una cucina proprie.',
    percheAndarci:
      'È la gita fuori porta più fotografata della Lituania, con buone ragioni: un vero castello medievale che sembra galleggiare su un\'isola, da raggiungere in mezza giornata da Vilnius senza auto.',
    cosaVedere: [
      'Il Castello dell\'Isola di Trakai (Trakų salos pilis), costruito nel XIV-XV secolo dai granduchi Kęstutis e Vytautas. Oggi ospita il Museo Storico di Trakai, con le sale sulla storia del Granducato e la torre principale che guarda sul lago',
      'Il ponte pedonale in legno fra la terraferma e l\'isola del castello, la foto più classica della cittadina',
      'Il quartiere caraimo, con le tradizionali case di legno a tre finestre sulla via Karaimų (secondo la tradizione locale una guarda la strada, una il cortile e una Dio) e la Kenesa, il tempio caraimo ancora attivo',
      'Il lago Galvė, il più grande dei laghi intorno a Trakai, con le rive attrezzate per passeggiare e noleggiare barche e canoe',
    ],
    cosaFare: [
      'Visitare il museo dentro il castello e salire sulla torre principale per il panorama sul lago Galvė',
      'Noleggiare una barca a remi o un pedalò per vedere il castello dall\'acqua, l\'inquadratura più fotografata',
      'Assaggiare i kibinai, i fagottini ripieni tipici della cucina caraima, in uno dei locali storici sulla via principale',
      'Passeggiare tra le case di legno del quartiere caraimo e, se è aperta, entrare nella Kenesa',
    ],
    doveDormire: 'In questo itinerario Trakai si visita in mezza giornata da Vilnius, senza dormirci.',
    doveMangiare:
      'I kibinai caraimi, il piatto della cittadina, si trovano in diversi locali storici vicino al castello. Per un pasto completo ci sono i ristoranti sul lungolago, con vista sul castello e cucina lituana e caraima.',
    comeArrivare: 'Dalla stazione centrale di Vilnius con il treno regionale (circa 34 minuti; la stazione è a circa 3 km dal castello) o con il bus di linea (circa 35 minuti; la fermata è a circa 2,3 km dal castello).',
    comeSpostarsi: 'Dalla stazione o dalla fermata del bus al centro di Trakai e al castello sono 30-40 minuti di passeggiata tranquilla lungo il lago; in alternativa c\'è un breve tratto di bus locale.',
    periodoMigliore: 'maggio-settembre, quando il lago ha i suoi colori e si può noleggiare una barca. Il castello è aperto tutto l\'anno e sotto la neve ha un altro fascino.',
    costi: 'ingresso al Museo Storico del Castello 12€ in bassa stagione (ottobre-marzo) e 14€ in alta stagione (aprile-settembre); gratuito l\'ultima domenica del mese.',
    erroriDaEvitare: [
      'Partire senza controllare gli orari: il castello chiude un giorno a settimana e in bassa stagione ha orari più corti',
      'Fermarsi al ponte pedonale senza entrare nel museo: le sale interne, anche quelle sulla storia del Granducato, valgono il biglietto',
      'Pensare di cavarsela in pochi minuti: tra andata, visita e ritorno serve mezza giornata piena',
    ],
    esperienzeSlugs: ['trakai-castello-lago-galve'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Il Castello dell\'Isola di Trakai in mattoni rossi riflesso nelle acque calme del lago Galvė, tra gli alberi',
    immagine: '/images/lituania/trakai.jpg',
  },
]
