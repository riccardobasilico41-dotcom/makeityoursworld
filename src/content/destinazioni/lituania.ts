import type { Destinazione } from '@/lib/types'

// Prima uscita lituana dell'archivio, collegata al viaggio "Capitali
// baltiche in 9 giorni" (src/content/viaggi/61-capitali-baltiche.md, dati in
// src/content/viaggi-dati/capitali-baltiche.ts), viaggio fatto da Rick: visitataPersonalmente
// è true su entrambe le destinazioni e il campo miaEsperienza resta assente finché non arriva un ricordo dell'autore. Trakai è trattata come
// destinazione a sé, non ripiegata dentro il cosaFare di Vilnius, sullo
// stesso modello con cui Auschwitz-Birkenau è una destinazione a sé rispetto
// a Cracovia: è un luogo fisicamente separato, con una propria storia e un
// proprio cosaVedere denso, non solo una tappa nel cosaFare della capitale.

export const destinazioniLituania: Destinazione[] = [
  {
    slug: 'vilnius',
    paeseSlug: 'lituania',
    ordine: 1,
    nome: 'Vilnius',
    tipologia: ['città', 'storia', 'arte'],
    giorniConsigliati: '3 giorni, compresa la gita a Trakai',
    visitataPersonalmente: true,
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
    luoghi: [
      {
        nome: "Cattedrale di Vilnius e Piazza della Cattedrale",
        testo: "Cattedrale neoclassica con il campanile separato a torre e le cripte reali dei granduchi di Lituania. La piazza è il luogo d'incontro della città, ai piedi della collina di Gediminas.",
        come: "A piedi dalla Città Vecchia (10 minuti).",
        quando: "Mattina, per la luce e meno folla.",
        tempo: "45 minuti",
        costo: "ingresso libero",
        consiglio: "Fermarsi sulla pietra «Stebuklas», dove i vilnesi esprimono un desiderio."
      },
      {
        nome: "Colle e Torre di Gediminas",
        testo: "Il simbolo della città, con i resti del Castello Superiore e la torre che ospita il museo. Si sale a piedi o in funicolare; dall'alto si vede la Città Vecchia.",
        come: "A piedi dalla Piazza della Cattedrale; funicolare a pagamento.",
        quando: "Tardo pomeriggio, per la luce sul tetto rosso della Città Vecchia.",
        tempo: "1,5 ore",
        costo: "torre circa 8 euro, funicolare 2-3 euro (dato del sito, da ricontrollare)",
        url: "https://www.lnm.lt",
        consiglio: "Salire a piedi e scendere in funicolare, se si vuole risparmiare."
      },
      {
        nome: "Porta dell'Aurora",
        testo: "L'unica porta rimasta delle mura medievali, con la cappella che custodisce l'icona della Madonna di Ostra Brama, meta di pellegrinaggio. Passando sotto si può sentire la messa dall'esterno.",
        come: "A piedi, a 10 minuti dalla Piazza del Municipio.",
        quando: "Mattina.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        consiglio: "Togliersi il cappello sotto la porta, come fanno i fedeli."
      },
      {
        nome: "Užupis",
        testo: "Il quartiere bohémien al di là del torrente, autoproclamatosi repubblica il 1° aprile 1997. Sul muro della via Paupio sono le targhe con i 41 articoli della sua «costituzione», tradotte in decine di lingue.",
        come: "A piedi dalla Città Vecchia, attraversando il ponte.",
        quando: "Giorno; il 1° aprile è la festa dell'indipendenza.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        consiglio: "Cercare l'Angelo di Užupis, la statuetta simbolo."
      },
      {
        nome: "Chiesa di Sant'Anna e Bernardini",
        testo: "La chiesa gotica di mattoni rossi di Sant'Anna, accanto alla più grande Chiesa di San Francesco e Bernardino. Insieme formano uno degli scorci più fotografati.",
        come: "A piedi dalla Cattedrale (10 minuti).",
        quando: "Mattina o sera.",
        tempo: "30-45 minuti",
        costo: "ingresso libero",
        consiglio: "Il lato migliore per la foto è dal cortile della Chiesa dei Bernardini."
      },
      {
        nome: "Università di Vilnius",
        testo: "Fondata nel 1579, ha tredici cortili collegati, la chiesa barocca di San Giovanni e una biblioteca storica. Si visita in autonomia, con biglietto.",
        come: "A piedi, in Pilies gatvė.",
        quando: "Mattina nei giorni feriali.",
        tempo: "1 ora",
        url: "https://www.vu.lt",
        consiglio: "Salire sul campanile di San Giovanni per la vista sulla Città Vecchia."
      },
      {
        nome: "Palazzo dei Granduchi e Museo dell'Occupazione",
        testo: "Il Palazzo, ricostruito sulle rovine del castello reale, racconta il Granducato. A breve distanza, il Museo delle Occupazioni e delle Lotte per la Libertà, nell'ex sede KGB, documenta il periodo sovietico.",
        come: "A piedi: il Palazzo ai piedi della collina, il Museo in Gedimino prospektas.",
        quando: "Mattina; orari e giorni di chiusura sul sito ufficiale.",
        tempo: "2 ore per ognuno",
        url: "https://www.genocid.lt",
        consiglio: "Le celle nel sotterraneo del KGB sono dure da visitare, ma importanti."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Cattedrale e Colle di Gediminas",
          "Pranzo con cepelinai",
          "Pomeriggio: Porta dell'Aurora e Pilies gatvė",
          "Sera: Užupis"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: Università e Sant'Anna",
          "Palazzo dei Granduchi",
          "Museo KGB"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: gita a Trakai (vedi scheda)"
        ]
      }
    ],
    zone: [
      {
        nome: "Città Vecchia",
        perChi: "Chi vuole stare a piedi vicino a tutto",
        testo: "Vie di ciottoli e vita serale; caro e rumoroso nel weekend."
      },
      {
        nome: "Užupis",
        perChi: "Chi cerca un'atmosfera da artisti",
        testo: "Tranquillo, a pochi minuti a piedi; pochi alberghi."
      },
      {
        nome: "Naujamiestis",
        perChi: "Chi vuole risparmiare",
        testo: "Quartiere ottocentesco appena fuori dal centro, collegato a piedi o in bus."
      }
    ],
    sapori: [
      {
        nome: "Cepelinai",
        testo: "Grandi gnocchi di patate ripieni di carne o formaggio, con panna e pancetta."
      },
      {
        nome: "Šaltibarščiai",
        testo: "Zuppa fredda di barbabietola e kefir, rosa, tipica d'estate."
      },
      {
        nome: "Kibinai",
        testo: "Pasticcini ripieni di carne, specialità caraimi (soprattutto a Trakai)."
      },
      {
        nome: "Kepta duona",
        testo: "Pane di segale fritto con aglio e formaggio, spuntino da birra."
      }
    ],
    attenzioni: [
      "Taxi: usare Bolt, che è molto diffuso e economico.",
      "Alcol: la vendita nei negozi è limitata a certe ore e alla sera non si compra.",
      "Borseggiatori vicino alla stazione e nei mercati.",
      "D'inverno marciapiedi ghiacciati: scarpe adatte."
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
    visitataPersonalmente: true,
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
    luoghi: [
      {
        nome: "Castello dell'isola di Trakai",
        testo: "Castello gotico di mattoni rossi sull'isola del lago Galvė, costruito nel XIV-XV secolo dai granduchi Kęstutis e Vytautas e ricostruito nel Novecento. Ospita il Museo Storico di Trakai.",
        come: "Dal paese, ponte di legno pedonale dalla riva.",
        quando: "Mattina nei giorni feriali; ottobre-marzo meno folla.",
        tempo: "2-3 ore",
        costo: "12 euro in bassa stagione, 14 in alta; gratuito l'ultima domenica del mese (dati del sito, da ricontrollare)",
        consiglio: "Salire sulla torre principale per il panorama sul lago."
      },
      {
        nome: "Quartiere caraimo",
        testo: "Il quartiere della minoranza caraimita, con le case di legno a tre finestre in Karaimų gatvė (una per la strada, una per il cortile, una per Dio) e la kenesa, il tempio. Qui si mangiano i kibinai.",
        come: "A piedi dal centro, lungo la via.",
        quando: "Pranzo.",
        tempo: "1 ora",
        consiglio: "Provare i kibinai alla carne in uno dei ristoranti caraimiti."
      },
      {
        nome: "Lago Galvė",
        testo: "Il più grande dei lagi intorno a Trakai, con rive attrezzate per camminare e per noleggiare barche e canoe. Dall'acqua si vede il castello in una cornice classica.",
        come: "A piedi dal paese; noleggio sul lungolago.",
        quando: "Estate, mattina o tardo pomeriggio.",
        tempo: "1-2 ore",
        consiglio: "Affittare una barca a remi è il modo più semplice per vedere il castello dall'acqua."
      }
    ],
    sapori: [
      {
        nome: "Kibinai",
        testo: "Pasticcini caraimiti ripieni di carne di agnello o manzo e cipolla."
      },
      {
        nome: "Birra e kvas",
        testo: "Bevande locali nei ristoranti del lago."
      }
    ],
    attenzioni: [
      "Trakai è una gita di mezza giornata da Vilnius: treni e bus partono dalla stazione e impiegano circa 30-40 minuti.",
      "In estate i parcheggi e i ristoranti sul lago si riempiono nei weekend.",
      "I ristoranti di fronte al castello sono più cari di quelli nel quartiere caraimo."
    ],
    esperienzeSlugs: ['trakai-castello-lago-galve'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Il Castello dell\'Isola di Trakai in mattoni rossi riflesso nelle acque calme del lago Galvė, tra gli alberi',
    immagine: '/images/lituania/trakai.jpg',
  },
]
