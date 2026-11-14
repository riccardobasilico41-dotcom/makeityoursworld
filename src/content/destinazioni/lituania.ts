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
      'È la capitale della Lituania e la più popolosa delle tre capitali baltiche. Il centro storico, patrimonio UNESCO dal 1994, è uno dei centri barocchi più estesi dell\'Europa centro-orientale, fra chiese barocche, cortili rinascimentali e vicoli medievali. Sull\'altra sponda del fiume Vilnia, dentro lo stesso centro storico, il quartiere di Užupis si è proclamato repubblica indipendente nel 1997, con costituzione, bandiera e presidente onorari.',
    percheAndarci:
      'In un\'area che si gira a piedi ci sono la collina fortificata di Gediminas, che domina la città, una grande ricchezza di architettura barocca e un quartiere bohémien che prende in giro le proprie istituzioni con la stessa serietà con cui le rispetta. È anche la base naturale per la gita più classica del paese, il castello sull\'isola di Trakai.',
    cosaVedere: [
      'La Cattedrale di Vilnius (Vilniaus katedra), neoclassica, in Piazza della Cattedrale, con il campanile separato a torre e le cripte reali del Granducato di Lituania',
      'La collina di Gediminas, con i resti del Castello Superiore e la Torre di Gediminas (ci si sale a piedi o in funicolare): è il simbolo della città e un punto panoramico sul centro storico',
      'Il quartiere di Užupis, con il Muro della Costituzione (gli articoli della "costituzione" del quartiere, tradotti in decine di lingue su altrettante targhe) e l\'Angelo di Užupis, la statua simbolo del rione',
      'La Chiesa di Sant\'Anna, gotica in mattoni rossi, e la vicina Chiesa di San Francesco e San Bernardino: insieme sono uno degli scorci gotici più fotografati della città',
      'Il Cortile Universitario dell\'Università di Vilnius, fondata nel 1579 e tra i più antichi atenei dell\'Europa centro-orientale, con numerosi cortili collegati e affreschi astronomici',
      'La Porta dell\'Aurora (Aušros Vartai), l\'unica porta rimasta delle antiche mura, con la cappella dell\'icona della Madre della Misericordia, meta di pellegrinaggio',
      'Il Palazzo dei Granduchi di Lituania, ricostruito sui resti archeologici del castello reale medievale, oggi museo sulla storia del Granducato',
    ],
    cosaFare: [
      'Salire in funicolare (o a piedi) alla Torre di Gediminas per il panorama sui tetti rossi della Città Vecchia',
      'Girare per gallerie d\'arte, caffè e piccoli laboratori artigiani di Užupis, cercando le targhe del Muro della Costituzione',
      'Attraversare i cortili dell\'Università di Vilnius, con una sosta nella Biblioteca dell\'Università e nella Chiesa di San Giovanni',
      'Fare un giro serale tra i bar del centro storico intorno a via Pilies, la via pedonale che va da Piazza della Cattedrale alla Porta dell\'Aurora',
    ],
    doveDormire:
      'Nel centro storico (Senamiestis) si ha tutto a piedi: la zona di via Pilies è la più centrale, quella verso Užupis è più tranquilla e ha un\'aria bohémien tutta sua. Fuori dalle mura, il quartiere di Naujamiestis (città nuova) è l\'alternativa più economica, a pochi minuti a piedi dal centro storico.',
    doveMangiare:
      'Il piatto nazionale sono i cepelinai, grandi gnocchi di patata ripieni di carne o formaggio. D\'estate il simbolo della cucina lituana è la šaltibarščiai, zuppa fredda di barbabietola di un rosa acceso, servita con patate lesse. Il kibinas, il fagottino ripieno portato in Lituania dalla comunità caraima di Trakai, si trova anche a Vilnius. Diversi ristoranti del centro storico fanno cucina lituana contemporanea a prezzi ancora contenuti rispetto all\'Europa occidentale.',
    comeArrivare:
      "L'Aeroporto Internazionale di Vilnius (VNO) è vicino al centro: treno o bus pubblico, oppure taxi o app di trasporto. Da alcuni aeroporti italiani ci sono voli diretti low cost, stagionali o tutto l'anno; altrimenti si fa scalo in un hub europeo. L'aeroporto è a circa 7 km: il treno arriva alla stazione centrale in circa 10 minuti (circa 0,80 €, app LTG Link o macchinetta, corse poco frequenti), i bus 3G e 88 in 15-25 minuti con il biglietto urbano da circa 1 € (app Trafi o m.Ticket), Bolt costa circa 8-12 €. Da Riga il bus Lux Express impiega circa 4 ore, con prezzi da pochi euro prenotando in anticipo fino a 20-25 €.",
    comeSpostarsi:
      'Il centro storico si gira tutto a piedi. Per il resto della città bus e filobus pubblici sono economici e frequenti. Per Trakai c\'è il treno regionale o il bus dalla stazione centrale.',
    periodoMigliore:
      'maggio-settembre, per il clima mite e le giornate lunghe. Giugno-agosto è la stagione più calda e affollata, con il picco del solstizio a fine giugno. L\'inverno (novembre-marzo) è freddo, ma la città regge bene e a dicembre ci sono i mercatini di Natale.',
    costi: "Città economica per gli standard dell'Europa occidentale, in linea con Riga. Budget giornaliero a persona con alloggio in doppia: 45-65 € spendendo poco (camera semplice, pranzi al mercato di Halės), 85-125 € di fascia media (hotel 3-4 stelle in Città Vecchia, un paio di ingressi, cena al ristorante), oltre 170 € con hotel di lusso. Ingressi 2026: Torre di Gediminas 8 €, funicolare 2-3 €, Palazzo dei Granduchi 16 € completo, MO Museum 11 €; castelli di Trakai circa 17 €.",
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
            sintesi: 'Il collegamento più diretto e puntuale; la stazione di Trakai è a qualche chilometro dal castello.',
            durata: 'meno di un\'ora',
            costo: 'poche unità di euro a tratta',
            pro: ['Puntuale e frequente', 'Nessun rischio di traffico'],
            contro: ['La stazione di Trakai è più lontana dal castello rispetto alla fermata del bus', 'Meno corse rispetto al bus'],
            perChi: 'chi vuole orari certi e non ha problemi a camminare (o a prendere un bus locale) dalla stazione al castello',
          },
          {
            nome: 'Bus di linea',
            sintesi: 'Più frequente del treno, e la fermata è più vicina al castello.',
            durata: 'meno di un\'ora',
            costo: 'pochi euro a tratta',
            pro: ['Corse frequenti', 'Fermata un po\' più vicina al castello rispetto alla stazione ferroviaria'],
            contro: ['Soggetto al traffico sulla statale', 'Leggermente più caro del treno'],
            perChi: 'chi vuole più libertà di orario, soprattutto nel weekend',
          },
        ],
      },
    ],
    miaEsperienza:
      "Vilnius è stata la prima tappa del giro delle capitali baltiche con gli amici: tre giorni tra la Città Vecchia, la Torre di Gediminas, il Palazzo dei Granduchi e Užupis, poi il bus per Riga.",
    luoghi: [
      {
        nome: "Cattedrale di Vilnius e Piazza della Cattedrale",
        testo: "Cattedrale dall'aspetto neoclassico, frutto della ricostruzione di Laurynas Gucevičius a fine Settecento, con il campanile isolato, nato da una torre del Castello Inferiore. Nelle cripte e nel mausoleo reale riposano granduchi e regine. La piazza è il luogo d'incontro della città, ai piedi della collina di Gediminas.",
        come: "A piedi dalla Città Vecchia.",
        quando: "Mattina, per la luce e meno folla.",
        tempo: "45 minuti",
        costo: "ingresso libero",
        orari: "Piazza sempre accessibile; cripte solo con visita guidata",
        lat: 54.68589,
        lng: 25.28779,
        consiglio: "Dentro, non perdere la cappella barocca di San Casimiro."
      },
      {
        nome: "Colle e Torre di Gediminas",
        testo: "Il simbolo della città: la torre, ricostruita nel 1933, è ciò che resta del Castello Superiore e ospita reperti del colle e plastici dei castelli di Vilnius. Si sale a piedi o con l'ascensore inclinato; dalla piattaforma si vede la Città Vecchia.",
        come: "A piedi dalla Piazza della Cattedrale, o con l'ascensore del colle.",
        quando: "Tardo pomeriggio, per la luce sul tetto rosso della Città Vecchia.",
        tempo: "1,5 ore",
        costo: "Torre 8 €; funicolare 2 € andata, 3 € andata e ritorno (2026)",
        lat: 54.6867,
        lng: 25.2907,
        url: "https://www.lnm.lt",
        consiglio: "Salire a piedi e, se serve, scendere con l'ascensore."
      },
      {
        nome: "Palazzo dei Granduchi e Museo dell'Occupazione",
        testo: "Il Palazzo, ricostruito sulle rovine del castello reale, racconta il Granducato. A breve distanza, il Museo delle Occupazioni e delle Lotte per la Libertà, nell'ex sede KGB, documenta il periodo sovietico.",
        come: "A piedi: il Palazzo ai piedi della collina, il Museo in centro, a breve distanza.",
        quando: "Mattina; orari e giorni di chiusura sul sito ufficiale.",
        tempo: "2 ore per ognuno",
        costo: "Palazzo dei Granduchi: biglietto completo 16 €, singoli percorsi 4-10 € (2026)",
        orari: "Palazzo d'estate (1 giugno-31 agosto) lun-mer e dom 10-18, gio-sab 10-20; nel resto dell'anno orari ridotti, di solito chiuso il lunedì. Museo dell'Occupazione: orari sul sito",
        lat: 54.68621,
        lng: 25.28944,
        url: "https://www.valdovurumai.lt/en/visit",
        consiglio: "Le celle nel sotterraneo del KGB sono dure da visitare, ma importanti."
      },
      {
        nome: "Via Pilies e Piazza del Municipio",
        testo: "Pilies gatvė è la via più antica della città, dalla Piazza della Cattedrale verso sud, con bancarelle di ambra e lino. Prosegue in Didžioji fino alla Piazza del Municipio, triangolare, con il Municipio neoclassico: è l'asse su cui si muove tutta la visita della Città Vecchia.",
        come: "A piedi, dalla Cattedrale verso la Porta dell'Aurora.",
        quando: "Di mattina per le facciate, la sera per i locali.",
        tempo: "1 ora",
        costo: "Ingresso libero",
        orari: "Sempre accessibile",
        lat: 54.68348,
        lng: 25.28934
      },
      {
        nome: "Porta dell'Aurora",
        testo: "L'unica parte delle mura rimasta intatta dopo la demolizione del 1799-1805, con la cappella che custodisce l'icona della Madre della Misericordia, ritenuta miracolosa: è uno dei principali luoghi di pellegrinaggio cattolico della Lituania.",
        come: "A piedi dalla Piazza del Municipio.",
        quando: "Mattina.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        lat: 54.67431,
        lng: 25.28956,
        consiglio: "È un luogo di preghiera: entrare nella cappella in silenzio."
      },
      {
        nome: "Užupis",
        testo: "Il quartiere bohémien al di là del torrente, autoproclamatosi repubblica il 1° aprile 1997. Sul muro della via Paupio sono le targhe con i 38 articoli e i 3 motti della sua «costituzione», in oltre venti lingue.",
        come: "A piedi dalla Città Vecchia, attraversando il ponte.",
        quando: "Giorno; il 1° aprile è la festa dell'indipendenza.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        orari: "Quartiere sempre accessibile",
        lat: 54.68063,
        lng: 25.29543,
        consiglio: "Cercare l'Angelo di Užupis, la statua con la tromba inaugurata nella piazza principale il 1° aprile 2002."
      },
      {
        nome: "Chiesa di Sant'Anna e Bernardini",
        testo: "La chiesa gotica di mattoni rossi di Sant'Anna, accanto alla più grande Chiesa di San Francesco e Bernardino. Insieme formano uno degli scorci più fotografati.",
        come: "A piedi dalla Cattedrale.",
        quando: "Mattina o sera.",
        tempo: "30-45 minuti",
        costo: "ingresso libero",
        lat: 54.68302,
        lng: 25.29321,
        consiglio: "Il lato migliore per la foto è dal cortile della Chiesa dei Bernardini."
      },
      {
        nome: "Università di Vilnius",
        testo: "Fondata nel 1579, ha circa tredici cortili collegati, la chiesa barocca di San Giovanni e una biblioteca storica. Orari e biglietti sul sito dell'università.",
        come: "A piedi, in Pilies gatvė.",
        quando: "Mattina nei giorni feriali.",
        tempo: "1 ora",
        orari: "Cortili visitabili lun-sab 9-18, con biglietto di pochi euro",
        lat: 54.68282,
        lng: 25.28783,
        url: "https://www.vu.lt",
        consiglio: "Nel Grande Cortile c'è il campanile di San Giovanni, che svetta sul centro."
      },
      {
        nome: "MO Museum",
        testo: "Il museo d'arte moderna lituana dal 1960 a oggi, in un edificio bianco progettato da Daniel Libeskind, aperto nel 2018. La collezione racconta come gli artisti lavoravano sotto la censura sovietica e dopo; c'è anche una terrazza sopra l'ingresso.",
        come: "A piedi dalla Piazza del Municipio in 10 minuti, in Pylimo gatvė.",
        quando: "Pomeriggio o sera: chiude alle 20.",
        tempo: "1,5-2 ore",
        costo: "11 €, ridotto 6 €, famiglia 22 € (2026)",
        orari: "Tutti i giorni 10-20, chiuso il martedì",
        lat: 54.67935,
        lng: 25.2775,
        url: "https://mo.lt/en/"
      },
      {
        nome: "Chiesa dei Santi Pietro e Paolo",
        testo: "Fuori dal centro, nel quartiere di Antakalnis, ha uno degli interni barocchi più straordinari d'Europa: circa duemila figure di stucco bianco, santi, angeli, scene di battaglia e mostri marini, realizzate da artisti italiani nel Seicento. Dall'esterno non lo si immagina.",
        come: "A piedi dalla Cattedrale in circa 25 minuti lungo il fiume, o bus fino ad Antakalnis.",
        quando: "Di mattina, con la luce che entra dalle finestre.",
        tempo: "45 minuti",
        costo: "Ingresso libero",
        lat: 54.69412,
        lng: 25.30621,
        consiglio: "Unirla al Parco di Kalnai e alla Collina delle Tre Croci, a metà strada."
      },
      {
        nome: "Collina delle Tre Croci",
        testo: "Tre croci bianche sulla collina del Parco di Kalnai, ricostruite nel 1989 dopo che le autorità sovietiche avevano fatto saltare le originali. È uno dei belvedere più ampi sulla Città Vecchia, meno affollato della Torre di Gediminas.",
        come: "A piedi dal Parco di Kalnai, 15 minuti di salita sui sentieri nel bosco.",
        quando: "Al tramonto.",
        tempo: "1 ora",
        costo: "Ingresso libero",
        orari: "Parco sempre aperto",
        lat: 54.68674,
        lng: 25.29755
      },
      {
        nome: "Literatų gatvė",
        testo: "Una viuzza della Città Vecchia con il muro coperto da centinaia di piccole opere, targhe e oggetti dedicati a scrittori legati alla Lituania, da Mickiewicz a Dostoevskij. Si attraversa in pochi minuti, ma conviene guardarla da vicino.",
        come: "A piedi, tra Pilies e Didžioji.",
        quando: "Di giorno.",
        tempo: "15 minuti",
        costo: "Ingresso libero",
        orari: "Sempre accessibile",
        lat: 54.68226,
        lng: 25.2901
      },
      {
        nome: "Mercato coperto di Halės",
        testo: "Il mercato coperto più antico della città, in un padiglione in ferro e vetro di fine Ottocento vicino alla Porta dell'Aurora. Tra i banchi di carne, pesce affumicato, formaggi e pane nero ci sono piccoli bar e chioschi dove si pranza bene a prezzi bassi.",
        come: "A piedi dalla Porta dell'Aurora in 5 minuti.",
        quando: "Di mattina, quando i banchi sono pieni.",
        tempo: "45 minuti",
        costo: "Ingresso libero",
        lat: 54.67337,
        lng: 25.28646
      },
      {
        nome: "Giardino dei Bernardini (Bernardinų sodas)",
        testo: "Il parco restaurato tra la chiesa dei Bernardini e il fiume Vilnia, con aiuole, una fontana musicale e panchine all'ombra. È il posto dove i vilnesi passano il pomeriggio d'estate, a due passi dalla Città Vecchia e da Užupis.",
        come: "A piedi dalla Chiesa di Sant'Anna, 2 minuti.",
        quando: "Pomeriggio d'estate; in autunno per i colori.",
        tempo: "30-45 minuti",
        costo: "Ingresso libero",
        lat: 54.68369,
        lng: 25.29719
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Piazza della Cattedrale e salita alla Torre di Gediminas",
          "Palazzo dei Granduchi",
          "Pranzo in Via Pilies o al mercato di Halės",
          "Pomeriggio: Università, Literatų gatvė, Chiesa di Sant'Anna e Giardino dei Bernardini",
          "Tramonto a Užupis"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2 mattina: Porta dell'Aurora e Piazza del Municipio",
          "Museo dell'Occupazione",
          "Pomeriggio: MO Museum (non di martedì)",
          "Sera: Collina delle Tre Croci al tramonto"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1 e 2 come sopra",
          "Giorno 3 mattina: Chiesa dei Santi Pietro e Paolo ad Antakalnis",
          "Pomeriggio: Trakai in treno, castello dell'isola e kibinai nel quartiere caraimo"
        ]
      }
    ],
    zone: [
      {
        nome: "Città Vecchia",
        testo: "Vie di ciottoli e vita serale; caro e rumoroso nel weekend.",
        perChi: "Chi vuole stare a piedi vicino a tutto",
        fascia: "70-140 €"
      },
      {
        nome: "Užupis",
        testo: "Tranquillo, a pochi minuti a piedi; pochi alberghi.",
        perChi: "Chi cerca un'atmosfera da artisti",
        fascia: "60-110 €"
      },
      {
        nome: "Naujamiestis",
        testo: "Quartiere ottocentesco appena fuori dal centro, collegato a piedi o in bus.",
        perChi: "Chi vuole risparmiare",
        fascia: "50-90 €"
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
      "Taxi: usare un'app riconosciuta o un taxi registrato con tassametro acceso.",
      "Borseggiatori nei luoghi affollati e sui mezzi; nei locali non lasciare il bicchiere incustodito.",
      "D'inverno marciapiedi ghiacciati: scarpe adatte."
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Vilnius?",
        risposta: "Due giorni per la Città Vecchia, Užupis, i musei principali e un tramonto dalla Collina delle Tre Croci. Con tre giorni si aggiunge Trakai, che è la gita più bella dalla capitale."
      },
      {
        domanda: "Vilnius è cara?",
        risposta: "No: insieme a Riga è tra le capitali più economiche dell'Unione Europea. Un pranzo al mercato o in una trattoria costa poco più di 10 €, e molti dei luoghi principali, chiese e quartieri, sono gratuiti."
      },
      {
        domanda: "Come si va dall'aeroporto di Vilnius al centro?",
        risposta: "Con il treno in circa 10 minuti fino alla stazione centrale (circa 0,80 €), con i bus 3G o 88 in 15-25 minuti, oppure con Bolt per circa 8-12 €."
      },
      {
        domanda: "Si può andare a Trakai in giornata?",
        risposta: "Sì, bastano mezza giornata e un treno o bus di circa 35 minuti. In bassa stagione il castello ha orari ridotti e giorni di chiusura: conviene controllarli prima."
      },
      {
        domanda: "Cos'è la Repubblica di Užupis?",
        risposta: "È il quartiere degli artisti oltre il fiume Vilnia, che il 1° aprile 1997 si è autoproclamato repubblica, con una costituzione ironica affissa in decine di lingue in via Paupio. Non serve alcun documento per entrare: è una festa, non un confine."
      },
      {
        domanda: "Quando andare a Vilnius?",
        risposta: "Da maggio a settembre per il clima e i tavoli all'aperto; dicembre per l'albero di Natale in Piazza della Cattedrale. D'inverno fa molto freddo, ma la città è tranquilla e costa ancora meno."
      }
    ],
    gite: [
      {
        nome: "Trakai",
        distanza: "circa 28 km, 35 minuti in treno",
        come: "Treno regionale dalla stazione centrale o bus dall'autostazione accanto.",
        testo: "L'antica capitale del Granducato, con il castello gotico in mattoni rossi sull'isola del lago Galvė e il quartiere caraimo con le case di legno e i kibinai. Biglietto combinato per i castelli circa 17 € nel 2026."
      },
      {
        nome: "Kaunas",
        distanza: "circa 100 km, 1-1,5 ore in treno",
        come: "Treni frequenti dalla stazione centrale di Vilnius, o bus.",
        testo: "La seconda città del paese, capitale tra le due guerre, con una Città Vecchia sul fiume, il castello e decine di edifici modernisti degli anni Venti e Trenta, patrimonio UNESCO dal 2023."
      },
      {
        nome: "Europos Parkas",
        distanza: "circa 20 km, 30 minuti in auto",
        come: "In auto o taxi; con i mezzi pubblici il collegamento è scomodo.",
        testo: "Un museo all'aperto di arte contemporanea nel bosco, con oltre cento sculture, vicino al punto che una stima geografica indicò come centro dell'Europa."
      },
      {
        nome: "Collina delle Croci",
        distanza: "circa 210 km, 2,5-3 ore in auto",
        come: "In auto, con un tour organizzato, o in treno fino a Šiauliai e poi bus o taxi.",
        testo: "Una collinetta coperta da centinaia di migliaia di croci, lasciate dai pellegrini anche quando i sovietici le facevano rimuovere. È lontana: ha senso come tappa verso Riga, più che come gita in giornata."
      }
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
      'Prima di Vilnius era la capitale del Granducato di Lituania, e sta a ovest della capitale attuale. Il castello gotico in mattoni rossi sorge su un\'isola del lago Galvė, collegato alla terraferma da un ponte pedonale in legno, in mezzo a laghi tra i più belli del paese. Qui vive da secoli la comunità caraima (Karaim), che il Granduca Vytautas portò nel Trecento come guardia personale e che ha ancora una lingua, una religione e una cucina proprie.',
    percheAndarci:
      'È la gita fuori porta più fotografata della Lituania, con buone ragioni: un vero castello medievale che sembra galleggiare su un\'isola, da raggiungere in mezza giornata da Vilnius senza auto.',
    cosaVedere: [
      'Il Castello dell\'Isola di Trakai (Trakų salos pilis), costruito nel XIV-XV secolo dai granduchi Kęstutis e Vytautas. Oggi ospita il Museo Storico di Trakai, con le sale sulla storia del Granducato e la torre principale che guarda sul lago',
      'Il ponte pedonale in legno fra la terraferma e l\'isola del castello, la foto più classica della cittadina',
      'Il quartiere caraimo, con le tradizionali case di legno a tre finestre sulla via principale (secondo la tradizione locale una guarda la strada, una il cortile e una Dio) e la Kenesa, il tempio caraimo ancora attivo',
      'Il lago Galvė, intorno al castello, con le rive attrezzate per passeggiare e noleggiare barche e canoe',
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
    comeArrivare: "Dalla stazione centrale di Vilnius partono i treni regionali LTG Link per Trakai: circa 35 minuti e circa 1,90 € in seconda classe, con un prezzo che varia secondo la domanda. In alternativa c'è il bus di linea dall'autostazione accanto, con tempi simili. Stazione e fermata sono a qualche chilometro dal castello, una passeggiata lungo il lago. In auto da Vilnius sono circa 28 km.",
    comeSpostarsi: 'Dalla stazione o dalla fermata del bus al centro di Trakai e al castello c\'è una passeggiata tranquilla lungo il lago; in alternativa c\'è un breve tratto di bus locale.',
    periodoMigliore: 'maggio-settembre, quando il lago ha i suoi colori e si può noleggiare una barca. Il castello è aperto tutto l\'anno e sotto la neve ha un altro fascino.',
    costi: "Budget giornaliero a persona con alloggio in doppia: 40-60 € spendendo poco (guesthouse, kibinai, solo il castello dell'isola), 80-120 € di fascia media (hotel sul lago, biglietto combinato dei castelli, cena al ristorante), oltre 150 € con hotel spa. Prezzi 2026: treno da Vilnius circa 1,90 € a tratta, Castello dell'isola 14 € da aprile a settembre e 12 € da ottobre a marzo, combinato con il Castello della penisola 17 € (solo aprile-settembre), Museo caraimo 9 €.",
    erroriDaEvitare: [
      'Partire senza controllare gli orari: giorni e orari di apertura del castello cambiano con la stagione',
      'Fermarsi al ponte pedonale senza entrare nel museo: le sale interne, anche quelle sulla storia del Granducato, valgono il biglietto',
      'Pensare di cavarsela in pochi minuti: tra andata, visita e ritorno serve mezza giornata piena',
    ],
    miaEsperienza:
      "A Trakai siamo andati da Vilnius per un pomeriggio durante il giro delle capitali baltiche con gli amici: il castello dell'isola con il suo museo e la torre, e i kibinai prima di rientrare in serata.",
    luoghi: [
      {
        nome: "Castello dell'isola di Trakai",
        testo: "Castello gotico di mattoni rossi sull'isola del lago Galvė, iniziato nel Trecento dal granduca Kęstutis e completato dal figlio Vytautas, che vi morì nel 1430. Ricostruito nel Novecento, ospita il Museo Storico di Trakai.",
        come: "Dal paese, ponte di legno pedonale dalla riva.",
        quando: "Mattina nei giorni feriali; da ottobre a marzo c'è meno folla.",
        tempo: "2-3 ore",
        costo: "14 € aprile-settembre, 12 € ottobre-marzo; ridotto 7/6 €; combinato con il Castello della penisola 17 € (aprile-settembre, 2026)",
        orari: "Aprile-settembre tutti i giorni 10-19; marzo, ottobre e novembre 10-18, chiuso il lunedì; dicembre-febbraio 10-18, chiuso lunedì e martedì. Ultimo ingresso 30 minuti prima della chiusura",
        lat: 54.6525,
        lng: 24.93306,
        url: "https://trakaimuziejus.lt",
        consiglio: "Entrare nelle sale del museo: raccontano la storia del Granducato."
      },
      {
        nome: "Quartiere caraimo",
        testo: "Il quartiere della minoranza caraimita, con le tipiche case di legno a tre finestre e la kenesa, il tempio caraimo. Qui si mangiano i kibinai.",
        come: "A piedi dal centro, lungo la via.",
        quando: "Pranzo.",
        tempo: "1 ora",
        costo: "ingresso libero",
        lat: 54.64733,
        lng: 24.93374,
        consiglio: "Provare i kibinai alla carne in uno dei ristoranti caraimiti."
      },
      {
        nome: "Lago Galvė",
        testo: "Il lago intorno al castello, punteggiato di isole, con rive attrezzate per camminare e per noleggiare barche e canoe. Dall'acqua si vede il castello in una cornice classica.",
        come: "A piedi dal paese; noleggio sul lungolago.",
        quando: "Estate, mattina o tardo pomeriggio.",
        tempo: "1-2 ore",
        lat: 54.66,
        lng: 24.93,
        consiglio: "Affittare una barca a remi è il modo più semplice per vedere il castello dall'acqua."
      },
      {
        nome: "Castello della penisola",
        testo: "Il castello più antico di Trakai, voluto dal granduca Kęstutis nel Trecento sulla penisola tra i laghi Galvė e Luka. Restano le mura e le torri in parte ricostruite, dentro un grande parco; nella cappella dell'ex convento domenicano è allestita una mostra di arte sacra. Si visita in meno tempo e con meno gente del castello dell'isola.",
        come: "A piedi dal centro, all'inizio di Kęstučio gatvė.",
        quando: "Prima o dopo il castello dell'isola, quando la folla è sull'isola.",
        tempo: "45 minuti-1 ora",
        costo: "10 € aprile-settembre, 8 € ottobre-marzo; ridotto 6/5 € (2026)",
        orari: "Aprile-settembre tutti i giorni 10-18; ottobre-marzo martedì-sabato 10-18, chiuso domenica e lunedì",
        lat: 54.646,
        lng: 24.937,
        url: "https://trakaimuziejus.lt",
        consiglio: "Da aprile a settembre il biglietto combinato con il castello dell'isola costa 17 € e conviene."
      },
      {
        nome: "Museo nazionale caraimo S. Šapšal",
        testo: "Il museo della comunità caraima di Trakai, intitolato allo studioso Seraja Šapšal, raccoglie costumi, oggetti religiosi, armi e documenti. Racconta come la minoranza arrivò dalla Crimea alla fine del Trecento e come ha conservato lingua e fede fino a oggi.",
        come: "A piedi lungo Karaimų gatvė, al numero 22.",
        quando: "Insieme al pranzo nel quartiere caraimo.",
        tempo: "45 minuti",
        costo: "9 € aprile-settembre, 7 € ottobre-marzo; ridotto 5/4 € (2026)",
        orari: "Mercoledì-domenica 10-18, chiuso lunedì e martedì",
        lat: 54.64717,
        lng: 24.93307,
        url: "https://trakaimuziejus.lt"
      },
      {
        nome: "Kenesa di Trakai",
        testo: "Il tempio caraimo di Trakai, in legno, a pianta rettangolare con tetto a padiglione, completato intorno al 1800 e restaurato negli anni Novanta dell'Ottocento. È una delle poche kenese sopravvissute dell'antica Confederazione polacco-lituana.",
        come: "A piedi lungo Karaimų gatvė, al numero 30.",
        quando: "Durante la passeggiata nel quartiere caraimo.",
        tempo: "15 minuti",
        lat: 54.64778,
        lng: 24.93278,
        consiglio: "Di solito si vede solo da fuori: l'interno apre di rado."
      },
      {
        nome: "Basilica della Visitazione",
        testo: "La chiesa parrocchiale di Trakai, fondata dal granduca Vytautas nel 1409 in stile gotico e poi rimaneggiata in stile barocco. Custodisce l'icona della Madonna di Trakai, venerata come protettrice della Lituania.",
        come: "A piedi dal centro, nella parte sud della città, verso la stazione.",
        quando: "Andando o tornando dalla stazione.",
        tempo: "20-30 minuti",
        costo: "ingresso libero",
        lat: 54.64286,
        lng: 24.93444
      },
      {
        nome: "Maniero di Užutrakis",
        testo: "Una villa neoclassica di fine Ottocento della famiglia Tyszkiewicz, sulla riva opposta del lago Galvė, con un parco disegnato dal paesaggista francese Édouard André. Dal prato verso il lago si vede il castello dell'isola da un'angolazione meno nota.",
        come: "A piedi o in bicicletta dal centro, circa 3 km lungo il lago; d'estate anche in barca.",
        quando: "Pomeriggio, con la luce sul lago.",
        tempo: "1-2 ore",
        lat: 54.6597,
        lng: 24.9438,
        consiglio: "La villa è in restauro e alcune parti possono essere chiuse: il parco merita comunque."
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
      "Trakai, a ovest di Vilnius, è una gita di mezza giornata: treni e bus partono dalla stazione.",
      "In estate i parcheggi e i ristoranti sul lago si riempiono nei weekend.",
      "I ristoranti di fronte al castello sono più cari di quelli nel quartiere caraimo."
    ],
    programmi: [
      {
        titolo: "Mezza giornata",
        tappe: ["Treno da Vilnius in mattinata", "Castello dell'isola e Museo Storico", "Pranzo con i kibinai in Karaimų gatvė", "Rientro a Vilnius nel pomeriggio"]
      },
      {
        titolo: "1 giorno",
        tappe: ["Mattina: castello dell'isola appena apre", "Pranzo nel quartiere caraimo, kenesa e Museo caraimo (non lunedì e martedì)", "Pomeriggio: Castello della penisola", "Giro in barca sul lago Galvė prima del treno di ritorno"]
      },
      {
        titolo: "2 giorni",
        tappe: ["Giorno 1 come sopra, con notte sul lago", "Giorno 2 mattina: passeggiata o bici fino al maniero di Užutrakis", "Basilica della Visitazione", "Pomeriggio: Senieji Trakai e rientro a Vilnius"]
      }
    ],
    zone: [
      {
        nome: "Città vecchia e Karaimų gatvė",
        perChi: "Chi vuole il castello a pochi passi",
        testo: "Guesthouse e piccoli hotel nelle case di legno, vicino ai ristoranti; la sera è tranquillo.",
        fascia: "60-110 €"
      },
      {
        nome: "Rive dei laghi",
        perChi: "Chi cerca spa e vista sull'acqua",
        testo: "Hotel con spa e resort sui laghi Galvė e Totoriškės, un po' fuori dal centro.",
        fascia: "90-160 €"
      },
      {
        nome: "Vilnius come base",
        perChi: "Chi fa Trakai in giornata",
        testo: "Più scelta e prezzi più bassi; con il treno Trakai è a 35 minuti.",
        fascia: "50-140 €"
      }
    ],
    faq: [
      {
        domanda: "Quanto tempo serve per Trakai?",
        risposta: "Mezza giornata basta per il castello dell'isola e un pranzo con i kibinai. Con una giornata intera si aggiungono il Castello della penisola, il quartiere caraimo e un giro in barca."
      },
      {
        domanda: "Come si va da Vilnius a Trakai?",
        risposta: "Con il treno regionale dalla stazione centrale, circa 35 minuti e circa 1,90 € a tratta, o con il bus dall'autostazione accanto. Dalla stazione di Trakai al castello si cammina lungo il lago."
      },
      {
        domanda: "Quanto costa entrare nel castello?",
        risposta: "Nel 2026 il castello dell'isola costa 14 € da aprile a settembre e 12 € da ottobre a marzo. Da aprile a settembre c'è il biglietto combinato con il Castello della penisola a 17 €."
      },
      {
        domanda: "Il castello è aperto tutto l'anno?",
        risposta: "Sì, ma in inverno chiude il lunedì e il martedì, e a marzo, ottobre e novembre il lunedì. Da aprile a settembre è aperto tutti i giorni dalle 10 alle 19."
      },
      {
        domanda: "Si può girare il lago in barca?",
        risposta: "Sì, sul lungolago si noleggiano barche a remi, pedalò e canoe, soprattutto da maggio a settembre. È il modo migliore per vedere il castello dall'acqua."
      },
      {
        domanda: "Cosa sono i kibinai?",
        risposta: "Fagottini di pasta ripieni, di solito di carne di agnello o di manzo con cipolla, piatto tipico dei caraimi. A Trakai si mangiano nei locali di Karaimų gatvė."
      }
    ],
    gite: [
      {
        nome: "Senieji Trakai",
        distanza: "circa 3 km",
        come: "In auto, in bici o in taxi da Trakai.",
        testo: "Il villaggio della «vecchia Trakai», dove sorgeva il primo castello e dove secondo la tradizione nacque il granduca Vytautas. Resta la chiesa con l'ex monastero benedettino, su un'altura tra i campi."
      },
      {
        nome: "Vilnius",
        distanza: "circa 28 km, 35 minuti in treno",
        come: "Treno regionale o bus fino alla stazione centrale.",
        testo: "La capitale, con la Città Vecchia barocca patrimonio UNESCO, il quartiere di Užupis e la Torre di Gediminas. Per chi dorme a Trakai è una giornata facile."
      },
      {
        nome: "Kaunas",
        distanza: "circa 85 km, circa 1 ora in auto",
        come: "In auto lungo l'autostrada A1, oppure in treno passando da Vilnius.",
        testo: "La seconda città del paese, capitale tra le due guerre, con la Città Vecchia sul fiume e gli edifici modernisti degli anni Venti e Trenta, patrimonio UNESCO dal 2023."
      }
    ],
    esperienzeSlugs: ['trakai-castello-lago-galve'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Il Castello dell\'Isola di Trakai in mattoni rossi riflesso nelle acque calme del lago Galvė, tra gli alberi',
    immagine: '/images/lituania/trakai.jpg',
  },
]
