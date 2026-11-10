import type { Destinazione } from '@/lib/types'

// Prima uscita ungherese dell'archivio, collegata al viaggio "Budapest in un
// weekend lungo" (src/content/viaggi/56-budapest-weekend.md, dati in
// src/content/viaggi-dati/budapest-weekend.ts), viaggio fatto da Rick. Un'unica destinazione,
// Budapest: a differenza di Cracovia non c'è qui una gita fuori porta che
// meriti una scheda propria. visitataPersonalmente è true; il campo miaEsperienza resta assente finché non arriva un ricordo dell'autore.
// Nessun nome di hotel, ristorante o operatore è stato inventato. Prezzi e
// orari delle terme cambiano spesso e vanno riverificati sui canali ufficiali
// prima di partire.

export const destinazioniUngheria: Destinazione[] = [
  {
    slug: 'budapest',
    paeseSlug: 'ungheria',
    ordine: 1,
    nome: 'Budapest',
    tipologia: ['città', 'terme', 'storia'],
    giorniConsigliati: '3-4 giorni, con una giornata dedicata alle terme',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono stato con amici in un weekend lungo, tre notti, tutto a piedi e con i mezzi: il colle di Buda e il Bastione dei Pescatori, il Parlamento e il quartiere ebraico, un giorno alle terme e l'ultimo tra il Danubio e l'Isola Margherita.",
    introduzione:
      'La capitale ungherese, nata nel 1873 dalla fusione di tre città distinte: Buda e Óbuda sulla riva collinare a ovest del Danubio, Pest su quella pianeggiante a est. Il centro storico di Buda, patrimonio UNESCO dal 1987, conserva il castello reale e il quartiere medievale intorno alla Chiesa di Mattia; Pest concentra il Parlamento, i grandi viali ottocenteschi e il quartiere ebraico con i suoi ruin bar. Sotto la città sgorgano molte sorgenti termali, e Budapest è nota come "la città delle terme".',
    percheAndarci:
      'Perché in un\'area compatta e percorribile ci sono il Danubio con il Parlamento e il Castello di Buda affacciati l\'uno sull\'altro, un patrimonio storico stratificato su due sponde diverse e un\'attività che nessun\'altra capitale europea offre con la stessa qualità: bagnarsi in acqua termale all\'aperto, in un edificio storico, nel cuore della città.',
    cosaVedere: [
      'Il Castello di Buda e il colle omonimo, con il Palazzo Reale (oggi sede di musei) e la vista sul Danubio e su Pest',
      'Il Bastione dei Pescatori (Halászbástya), la terrazza in stile neoromanico costruita nel 1902 come punto panoramico (non è mai stata una fortificazione), con sette torrette che rappresentano le sette tribù magiare fondatrici',
      'La Chiesa di Mattia (Mátyás-templom), accanto al Bastione, con il tetto in tegole maiolicate policrome e la storia di incoronazioni reali e trasformazione in moschea durante l\'occupazione ottomana',
      'Il Parlamento ungherese (Országház), sulla riva di Pest, completato nel 1904 e tra gli edifici parlamentari più grandi al mondo, visitabile con tour guidato che include la Sacra Corona di Santo Stefano',
      'Il Ponte delle Catene (Széchenyi lánchíd), il primo ponte permanente tra Buda e Pest, aperto nel 1849, illuminato di sera',
      'La Grande Sinagoga di Via Dohány (Dohány utcai zsinagóga), tra le più grandi al mondo, in stile moresco, con il giardino memoriale e la scultura dell\'Albero della Vita di Imre Varga dedicata alle vittime della Shoah',
      'Il quartiere ebraico (Erzsébetváros, distretto VII), oggi centro dei ruin bar (romkocsma), i locali nati in edifici fatiscenti e cortili abbandonati a partire dai primi anni Duemila',
      'L\'Isola Margherita (Margitsziget), parco senza traffico nel mezzo del Danubio, con fontana musicale e proprie terme',
    ],
    cosaFare: [
      'Bagno alle Terme di Széchenyi (le Gellért sono chiuse per restauro fino almeno al 2028; sul lato Buda c\'è Rudas)',
      'Una crociera o una passeggiata serale sul Danubio, per vedere il Parlamento e il Castello illuminati dall\'acqua',
      'Salire sulla Cupola della Basilica di Santo Stefano per il panorama sui tetti di Pest',
      'Un giro tra i ruin bar del quartiere ebraico, come lo Szimpla Kert',
      'Attraversare a piedi il Ponte delle Catene tra Buda e Pest al tramonto',
    ],
    doveDormire:
      'Il lato Pest, tra il Parlamento, la Basilica di Santo Stefano e il quartiere ebraico, è la zona più comoda e più viva la sera, a pochi minuti a piedi dai principali punti d\'interesse. Il lato Buda è più tranquillo e panoramico, ma meno centrale per gli spostamenti serali.',
    doveMangiare:
      'Il gulasch (gulyás), qui più zuppa che stufato, nella versione originale ungherese; il lángos, un disco di pasta fritta con panna acida e formaggio, lo street food più diffuso; il paprikás csirke (pollo alla paprika); i dolci come il rétes (strudel) e la torta Dobos. Il Mercato Centrale (Nagycsarnok), inaugurato nel 1897, è il posto migliore per assaggiare prodotti locali, paprika compresa, a prezzi contenuti rispetto ai ristoranti turistici del centro.',
    comeArrivare:
      "Aeroporto Liszt Ferenc (BUD), a sud-est della città. Il bus 100E arriva in centro (Kálvin tér, Astoria, Deák Ferenc tér) in 35-40 minuti: 2.500 HUF dal 1° ottobre 2025, pagati con carta o telefono a bordo o nell'app BudapestGO, perché i normali biglietti BKK non valgono. Più economico il bus 200E fino alla metro M3 a Kőbánya-Kispest, poi la metro: 50-60 minuti con due biglietti singoli da circa 500 HUF, da convalidare entrambi. Il taxi ufficiale Főtaxi, con la fila davanti ai terminal 2A e 2B, costa circa 12.000-15.000 HUF per Pest; Bolt ha prezzi simili. Dall'Italia si arriva in genere in aereo; da Vienna ci sono treni diretti.",
    comeSpostarsi: 'Rete BKK di metro, tram e bus, capillare ed economica. Il centro di Pest e il colle di Buda si girano bene anche a piedi. Non serve auto.',
    periodoMigliore: 'aprile-maggio e settembre-ottobre per il clima mite e meno folla; giugno-agosto è alta stagione, calda e affollata; novembre-marzo è freddo ma le terme diventano un\'esperienza particolare, con i mercatini di Natale a dicembre',
    costi: "Budget giornaliero a persona, volo escluso: basso 50-70 € (ostello o stanza nel VII distretto, lángos e mense, mezzi pubblici); medio 100-150 € (hotel tre stelle in doppia, due pasti al ristorante, terme e un paio di ingressi); alto da 220 € in su (hotel sul Danubio, ristoranti di cucina ungherese moderna, crociera serale). La voce più cara di una giornata tipo è di solito l'ingresso alle terme.",
    erroriDaEvitare: [
      'Seguire chi avvicina per strada proponendo "un locale fantastico" nel quartiere ebraico o intorno alle piazze turistiche: è lo schema classico che porta a conti gonfiati a dismisura',
      'Confondere gli zeri del fiorino: un conto da "8.000" non è 8 euro, ed è facile sbagliarsi nei primi giorni',
      'Sottovalutare le terme come una parentesi rilassante da un\'ora: tra ingresso, spogliatoio e code per gli armadietti, conviene riservare almeno mezza giornata',
      'Programmare il weekend senza prenotare in anticipo il tour del Parlamento, che ha ingressi contingentati e va spesso esaurito con giorni di anticipo in alta stagione',
    ],
    luoghi: [
      {
        nome: "Castello di Buda e Palazzo Reale",
        testo: "Il colle di Buda sopra il Danubio, con il Palazzo Reale, oggi sede di musei (Galleria Nazionale Ungherese, Museo di Storia di Budapest, Biblioteca Nazionale Széchényi). Si sale con la funicolare Sikló o a piedi.",
        come: "Funicolare Sikló da Clark Ádám tér, accanto al Ponte delle Catene, oppure a piedi.",
        quando: "Mattina, per evitare i gruppi.",
        tempo: "2-3 ore",
        costo: "cortili e terrazze liberi; funicolare e musei a pagamento",
        orari: "cortili e terrazze sempre accessibili; i musei hanno orari propri",
        lat: 47.49611,
        lng: 19.03972,
        consiglio: "Dal lato sud del colle si ha la vista migliore sul Danubio.",
      },
      {
        nome: "Bastione dei Pescatori e Chiesa di Mattia",
        testo: "Il Bastione è una terrazza neoromanica costruita tra il 1895 e il 1902 (mai un vero bastione), con sette torrette per le sette tribù magiare arrivate nel bacino dei Carpazi. Accanto, la chiesa di Mattia ha il tetto in tegole policrome.",
        come: "A piedi dal Castello.",
        quando: "Alba o sera, per le foto senza folla; molta gente a metà giornata.",
        tempo: "1-1,5 ore",
        lat: 47.5027,
        lng: 19.0344,
        consiglio: "Parte delle terrazze superiori è a pagamento: tariffe e orari sul posto.",
      },
      {
        nome: "Parlamento ungherese",
        testo: "Completato nel 1904, è un grande edificio neogotico sul Danubio. Si visita solo con tour guidato, che passa dalla sala centrale dove dal 2000 è esposta la Sacra Corona.",
        come: "Metro M2 o tram 2 fino a Kossuth Lajos tér. I biglietti si prenotano online per un orario.",
        quando: "Mattina; c'è un controllo di sicurezza all'ingresso.",
        tempo: "1 ora",
        costo: "circa 7.000 HUF (circa 18 €) per i cittadini UE, solo con visita guidata di circa 45 minuti (2026)",
        lat: 47.50694,
        lng: 19.04556,
        url: "https://www.parlament.hu",
        consiglio: "Prenotare con giorni di anticipo, soprattutto in alta stagione.",
      },
      {
        nome: "Ponte delle Catene e lungofiume",
        testo: "Il primo ponte permanente tra Buda e Pest, aperto nel 1849, illuminato di sera. Sulla riva di Pest si trovano le Scarpe sul Danubio, memoriale delle vittime ebree del 1944-45.",
        come: "A piedi dal centro, lungo la riva.",
        quando: "Sera, quando il ponte e il Parlamento sono illuminati.",
        tempo: "1 ora",
        costo: "ingresso libero",
        orari: "sempre aperto",
        lat: 47.49889,
        lng: 19.04361,
        consiglio: "Camminare lungo il Danubio da Pest al tramonto.",
      },
      {
        nome: "Terme Széchenyi",
        testo: "Uno dei complessi termali più noti d'Europa, aperto nel 1913, con 18 vasche (15 interne e 3 esterne); quelle all'aperto sono tra 27 e 38 gradi. L'edificio è giallo, neobarocco, nel un edificio giallo neobarocco nel Városliget. Si mescolano gente del posto e turisti.",
        come: "Metro M1 (linea gialla) fino alla fermata Széchenyi fürdő, al centro del parco Városliget.",
        quando: "Mattina nei giorni feriali; in estate alcune serate hanno feste.",
        tempo: "mezza giornata",
        costo: "biglietto giornaliero con armadietto 13.200 HUF (circa 33 €) da lunedì a giovedì, 14.800 HUF (circa 37 €) da venerdì a domenica, 15.800 HUF nei festivi e in alta stagione; 10.500 HUF entrando entro le 9 (2026)",
        orari: "lun-gio 7-20, venerdì 7-22, sabato e domenica 8-20",
        lat: 47.51861,
        lng: 19.08194,
        url: "https://www.szechenyibath.hu",
        consiglio: "Portare ciabatte e asciugamano. Orari e prezzi cambiano: controllarli sul sito ufficiale, dove si comprano anche i biglietti.",
      },
      {
        nome: "Grande Mercato Coperto",
        testo: "Un mercato coperto aperto nel 1897, in fondo a Váci utca, con paprika, salami e strudel; al piano superiore ci sono banchi da mangiare e souvenir. Chiuso la domenica.",
        come: "Metro M4 o tram 2, 47 e 49 fino a Fővám tér, oppure a piedi da Váci utca.",
        quando: "Mattina nei giorni feriali; chiuso la domenica.",
        tempo: "1-1,5 ore",
        orari: "chiuso la domenica; il sabato chiude nel primo pomeriggio",
        lat: 47.48667,
        lng: 19.05889,
        consiglio: "Pagare in fiorini, gli sportelli di cambio qui sono cari.",
      },
      {
        nome: "Grande Sinagoga di Via Dohány",
        testo: "La più grande sinagoga d'Europa, in stile neomoresco, con quasi 3.000 posti. Nel cortile c'è il parco memoriale Raoul Wallenberg con l'Albero della vita di Imre Varga, un salice di metallo con i nomi delle vittime sulle foglie.",
        come: "Metro M2 o tram 47 e 49 fino ad Astoria, poi pochi passi a piedi.",
        quando: "Mattina nei giorni feriali; giorni di chiusura sul sito ufficiale.",
        tempo: "1,5 ore",
        orari: "chiusa il sabato e nelle feste ebraiche",
        lat: 47.49583,
        lng: 19.06083,
        consiglio: "Nel complesso c'è anche il Museo ebraico ungherese. Per entrare servono spalle coperte.",
      },
      {
        nome: "Quartiere ebraico e ruin bar",
        testo: "Il VII distretto è il cuore della vita serale, con bar nati in edifici abbandonati, come lo Szimpla Kert. Di giorno è un quartiere tranquillo con caffè.",
        come: "A piedi dal centro.",
        quando: "Sera.",
        tempo: "2-3 ore",
        costo: "ingresso libero ai ruin bar",
        lat: 47.497,
        lng: 19.0634,
        url: "https://szimpla.hu",
        consiglio: "Di giorno lo Szimpla Kert è più tranquillo e si visita meglio.",
      },
      {
        nome: "Basilica di Santo Stefano",
        testo: "La chiesa più grande di Budapest, con la cupola alta 96 metri come quella del Parlamento: per legge nessun edificio in città può superarle. Nella cappella laterale si conserva la Sacra Destra, la mano mummificata di re Stefano.",
        come: "Metro M1 fino a Bajcsy-Zsilinszky út o M3 fino ad Arany János utca; da Deák Ferenc tér sono 5 minuti a piedi.",
        quando: "Tardo pomeriggio per la terrazza; la domenica la chiesa apre solo dalle 13.",
        tempo: "1 ora",
        costo: "terrazza panoramica e tesoro con biglietto a parte",
        orari: "chiesa lun-sab 9-18, domenica 13-18; terrazza panoramica e tesoro tutti i giorni 9-19",
        lat: 47.50083,
        lng: 19.05389,
        url: "https://www.bazilika.biz",
        consiglio: "Alla terrazza della cupola, a 65 metri, si sale in ascensore o con circa 300 gradini: è il belvedere più alto di Pest.",
      },
      {
        nome: "Andrássy út e Teatro dell'Opera",
        testo: "Il viale ottocentesco, patrimonio UNESCO, che dal centro corre per 2,5 km fino alla Piazza degli Eroi, con sotto la linea M1 del 1896, la metropolitana più antica dell'Europa continentale. A metà strada c'è l'Opera di Stato neorinascimentale di Miklós Ybl, riaperta nel 2022 dopo il restauro.",
        come: "A piedi da Deák Ferenc tér, oppure in M1 fermata Opera. L'interno dell'Opera si vede con le visite guidate o andando a uno spettacolo.",
        quando: "Pomeriggio, con una sosta in uno dei caffè storici del viale.",
        tempo: "1-2 ore",
        lat: 47.50287,
        lng: 19.05816,
        url: "https://www.opera.hu",
      },
      {
        nome: "Casa del Terrore",
        testo: "Il museo al numero 60 di Andrássy út, nell'edificio che fu quartier generale delle Croci Frecciate naziste e poi della polizia politica comunista. Racconta le due dittature ungheresi del Novecento, con le celle originali nel seminterrato.",
        come: "Metro M1 fino a Vörösmarty utca, oppure tram 4 e 6 fino a Oktogon.",
        quando: "Mattina, nei giorni feriali.",
        tempo: "2 ore",
        costo: "4.000 HUF (circa 10 €) adulti, solo alla cassa del museo (2026)",
        orari: "mar-dom 10-18, cassa fino alle 17.30; chiuso il lunedì",
        lat: 47.5069,
        lng: 19.0651,
        url: "https://www.terrorhaza.hu",
      },
      {
        nome: "Piazza degli Eroi e Városliget",
        testo: "La piazza del monumento del Millennio, costruito per i mille anni dell'arrivo dei Magiari, con le statue dei capi tribù e dei re. Dietro si apre il Városliget, il parco cittadino con il castello di Vajdahunyad, le terme Széchenyi e i nuovi musei del Liget.",
        come: "Metro M1 fino a Hősök tere.",
        quando: "Mattina o fine pomeriggio; d'inverno il laghetto diventa una pista di pattinaggio.",
        tempo: "1-2 ore",
        costo: "piazza e parco liberi",
        orari: "sempre accessibili",
        lat: 47.515,
        lng: 19.07778,
      },
      {
        nome: "Collina Gellért e Cittadella",
        testo: "La collina di 235 metri sulla riva di Buda, con la Statua della Libertà e la fortezza asburgica costruita dopo la rivoluzione del 1848. Dall'alto si vede il Danubio con tutti i ponti, il Parlamento e il Castello.",
        come: "A piedi dal Ponte Elisabetta o dal Ponte della Libertà, circa 30 minuti di salita; oppure bus 27 da Móricz Zsigmond körtér.",
        quando: "Al tramonto, quando si accendono le luci dei ponti.",
        tempo: "1,5-2 ore",
        costo: "ingresso libero",
        lat: 47.48699,
        lng: 19.04627,
      },
      {
        nome: "Isola Margherita",
        testo: "Un'isola di 2,5 km in mezzo al Danubio, quasi senza auto, dove i budapestini vanno a correre e a fare picnic. Ci sono la fontana musicale, un giardino giapponese, le rovine di un convento domenicano e una pista da corsa di 5,3 km.",
        come: "Tram 4 e 6 fino alla fermata sul Ponte Margherita, oppure bus 26 che la attraversa.",
        quando: "Pomeriggio, da aprile a ottobre.",
        tempo: "2 ore",
        costo: "ingresso libero",
        lat: 47.5275,
        lng: 19.0475,
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina presto: Bastione dei Pescatori e Chiesa di Mattia",
          "Castello di Buda e Palazzo Reale",
          "Discesa in funicolare o a piedi e Ponte delle Catene",
          "Pranzo con lángos",
          "Basilica di Santo Stefano e terrazza della cupola",
          "Tramonto alle Scarpe sul Danubio, con il Parlamento illuminato",
          "Sera: ruin bar nel quartiere ebraico",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: visita guidata al Parlamento, prenotata",
          "Andrássy út e Teatro dell'Opera",
          "Casa del Terrore (non di lunedì)",
          "Piazza degli Eroi e Városliget",
          "Pomeriggio alle Terme Széchenyi",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: Grande Mercato Coperto (non di domenica)",
          "Grande Sinagoga di Via Dohány (non di sabato)",
          "Isola Margherita nel pomeriggio",
          "Tramonto sulla Collina Gellért",
          "In alternativa al giorno 3: gita a Szentendre",
        ],
      },
    ],
    zone: [
      {
        nome: "Pest (V e VI distretto)",
        perChi: "Chi vuole stare a due passi da tutto",
        testo: "Vicino a Váci utca e Basilica; prezzi più alti e rumore di sera.",
        fascia: "90-180 €",
      },
      {
        nome: "Quartiere ebraico (VII)",
        perChi: "Chi cerca vita notturna",
        testo: "Pieno di bar, rumoroso nel weekend.",
        fascia: "70-140 €",
      },
      {
        nome: "Buda (I e II distretto)",
        perChi: "Chi preferisce la tranquillità",
        testo: "Vicino al Castello, strade silenziose; meno ristoranti economici.",
        fascia: "90-200 €",
      },
    ],
    sapori: [
      {
        nome: "Gulyás",
        testo: "La zuppa di manzo e paprika, nei ristoranti tradizionali."
      },
      {
        nome: "Lángos",
        testo: "Focaccia fritta con panna acida e formaggio, tipica del Mercato."
      },
      {
        nome: "Kürtőskalács",
        testo: "Dolce a spirale cotto sulla brace, con zucchero e cannella."
      },
      {
        nome: "Dobos torta",
        testo: "Torta a strati con crema al cioccolato e caramello."
      }
    ],
    attenzioni: [
      "Taxi: usare compagnie note; diffidare dei tassisti che consigliano un bar o un locale, alcuni sono d'accordo con chi gonfia i conti.",
      "Bar e ristoranti che gonfiano il conto, a volte accompagnando i turisti al bancomat: chiedere sempre il menu con i prezzi prima di ordinare.",
      "Cambio: usare gli ATM bancari e rifiutare l'addebito in euro.",
      "Mezzi pubblici: biglietti da convalidare o da comprare con BudapestGO, l'app ufficiale di BKK; i controllori multano i turisti.",
      "Il servizio a volte è già incluso: controllare il conto."
    ],
    gite: [
      {
        nome: "Szentendre",
        distanza: "circa 40 minuti in treno suburbano",
        come: "Treno HÉV H5 da Batthyány tér fino al capolinea; d'estate anche in battello sul Danubio.",
        testo: "Il paese degli artisti sul Danubio, con chiese serbo-ortodosse, vicoli in salita, gallerie e il museo all'aperto di architettura rurale (Skanzen) poco fuori.",
      },
      {
        nome: "Ansa del Danubio: Visegrád ed Esztergom",
        distanza: "1-1,5 ore in treno o autobus",
        come: "Treno da Budapest-Nyugati per Nagymaros e traghetto per Visegrád; per Esztergom treno diretto o autobus. Da maggio a settembre ci sono anche i battelli.",
        testo: "Il punto in cui il fiume piega verso sud tra le colline: a Visegrád la cittadella sopra l'ansa, a Esztergom la basilica più grande dell'Ungheria, sul confine con la Slovacchia.",
      },
      {
        nome: "Palazzo di Gödöllő",
        distanza: "circa 1 ora in treno suburbano",
        come: "Treno HÉV H8 da Örs vezér tere (metro M2) fino a Gödöllő, Szabadság tér.",
        testo: "Il palazzo barocco dove Elisabetta d'Austria passava lunghi periodi: le stanze di Sissi sono il motivo della visita.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono per visitare Budapest?",
        risposta: "Tre giorni: uno per Buda e il lungofiume, uno per il Parlamento, Andrássy út e le terme, uno per il quartiere ebraico, il mercato e la Collina Gellért. In due giorni si vede l'essenziale, con ritmi stretti.",
      },
      {
        domanda: "Quali terme scegliere a Budapest?",
        risposta: "Le Széchenyi sono le più famose e restano aperte: conviene entrare presto, anche per il biglietto ridotto entro le 9. Le Gellért sono chiuse per restauro dal 1° ottobre 2025, con riapertura prevista nel 2028.",
      },
      {
        domanda: "Bisogna prenotare il Parlamento?",
        risposta: "Sì: si entra solo con la visita guidata, a orari e lingue fissi, e i biglietti online si esauriscono con giorni di anticipo. Per i cittadini UE costa circa 7.000 HUF; all'ingresso serve un documento.",
      },
      {
        domanda: "A Budapest si paga in euro?",
        risposta: "No, si paga in fiorini (HUF). Le carte funzionano quasi ovunque; meglio evitare i cambiavalute di Váci utca e prelevare in fiorini da uno sportello bancario.",
      },
      {
        domanda: "Come si arriva dall'aeroporto al centro?",
        risposta: "Con il bus 100E, che in 35-40 minuti arriva a Kálvin tér, Astoria e Deák Ferenc tér: 2.500 HUF, con carta a bordo o nell'app BudapestGO. Il taxi ufficiale Főtaxi costa circa 12.000-15.000 HUF.",
      },
      {
        domanda: "Meglio dormire a Buda o a Pest?",
        risposta: "A Pest, tra il V, il VI e il VII distretto: è più comoda per muoversi a piedi e per la sera. Buda è più tranquilla e panoramica, ma la sera costringe a prendere i mezzi.",
      },
    ],
    esperienzeSlugs: ['terme-szechenyi', 'terme-gellert', 'crociera-danubio', 'ruin-bar-tour'],
    tripSlugs: ['budapest-weekend'],
    imageAlt: 'Le torri bianche a cono del Bastione dei Pescatori sul colle di Buda, sotto un cielo azzurro',
    immagine: '/images/ungheria/budapest.jpg',
  },
]
