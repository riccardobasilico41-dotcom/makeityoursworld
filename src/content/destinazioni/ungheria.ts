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
    introduzione:
      'La capitale ungherese, nata nel 1873 dalla fusione di tre città distinte: Buda e Óbuda sulla riva collinare a ovest del Danubio, Pest su quella pianeggiante a est. Il centro storico di Buda, patrimonio UNESCO dal 1987, conserva il castello reale e il quartiere medievale intorno alla Chiesa di Mattia; Pest concentra il Parlamento, i grandi viali ottocenteschi e il quartiere ebraico con i suoi ruin bar. Sotto la città ci sono oltre un centinaio di sorgenti termali, e Budapest è ufficialmente conosciuta come "la città delle terme".',
    percheAndarci:
      'Perché in un\'area compatta e percorribile ci sono il Danubio con il Parlamento e il Castello di Buda affacciati l\'uno sull\'altro, un patrimonio storico stratificato su due sponde diverse e un\'attività che nessun\'altra capitale europea offre con la stessa qualità: bagnarsi in acqua termale all\'aperto, in un edificio storico, nel cuore della città.',
    cosaVedere: [
      'Il Castello di Buda e il colle omonimo, con il Palazzo Reale (oggi sede di musei) e la vista sul Danubio e su Pest',
      'Il Bastione dei Pescatori (Halászbástya), la terrazza in stile neoromanico costruita nel 1902 come punto panoramico (non è mai stata una fortificazione), con sette torrette che rappresentano le sette tribù magiare fondatrici',
      'La Chiesa di Mattia (Mátyás-templom), accanto al Bastione, con il tetto in tegole maiolicate policrome e la storia di incoronazioni reali e trasformazione in moschea durante l\'occupazione ottomana',
      'Il Parlamento ungherese (Országház), sulla riva di Pest, completato nel 1904 e tra gli edifici parlamentari più grandi al mondo, visitabile con tour guidato che include la Sacra Corona di Santo Stefano',
      'Il Ponte delle Catene (Széchenyi lánchíd), il primo ponte permanente tra Buda e Pest, aperto nel 1849, illuminato di sera',
      'La Grande Sinagoga di Via Dohány (Dohány utcai zsinagóga), la più grande d\'Europa e la seconda al mondo dopo quella di New York, in stile moresco, con il giardino memoriale e la scultura dell\'Albero della Vita di Imre Varga dedicata alle vittime della Shoah',
      'Il quartiere ebraico (Erzsébetváros, distretto VII), oggi centro dei ruin bar (romkocsma), i locali nati in edifici fatiscenti e cortili abbandonati a partire dai primi anni Duemila',
      'L\'Isola Margherita (Margitsziget), parco senza traffico nel mezzo del Danubio, con fontana musicale e proprie terme',
    ],
    cosaFare: [
      'Bagno alle Terme di Széchenyi o di Gellért (vedi le schede esperienza dedicate)',
      'Una crociera o una passeggiata serale sul Danubio, per vedere il Parlamento e il Castello illuminati dall\'acqua',
      'Salire sulla Cupola della Basilica di Santo Stefano per il panorama sui tetti di Pest',
      'Un giro tra i ruin bar del quartiere ebraico, a partire dal più noto, lo Szimpla Kert',
      'Attraversare a piedi il Ponte delle Catene tra Buda e Pest al tramonto',
    ],
    doveDormire:
      'Il lato Pest, tra il Parlamento, la Basilica di Santo Stefano e il quartiere ebraico, è la zona più comoda e più viva la sera, a pochi minuti a piedi dai principali punti d\'interesse. Il lato Buda è più tranquillo e panoramico, ma meno centrale per gli spostamenti serali.',
    doveMangiare:
      'Il gulasch (gulyás), qui più zuppa che stufato, nella versione originale ungherese; il lángos, un disco di pasta fritta con panna acida e formaggio, lo street food più diffuso; il paprikás csirke (pollo alla paprika); i dolci come il rétes (strudel) e la torta Dobos. Il Mercato Centrale (Nagycsarnok), inaugurato nel 1897, è il posto migliore per assaggiare prodotti locali, paprika compresa, a prezzi contenuti rispetto ai ristoranti turistici del centro.',
    comeArrivare:
      'Aeroporto Ferenc Liszt (BUD), a circa 16 km dal centro: bus navetta 100E diretto al centro in circa 35-40 minuti, oppure bus di linea 200E più metro. Non esiste un collegamento ferroviario diretto comodo dall\'Italia: si arriva in genere in aereo. Da Vienna, treno in circa 2h30.',
    comeSpostarsi: 'Rete BKK di metro, tram e bus, capillare ed economica. Il centro di Pest e il colle di Buda si girano bene anche a piedi. Non serve auto.',
    periodoMigliore: 'aprile-maggio e settembre-ottobre per il clima mite e meno folla; giugno-agosto è alta stagione, calda e affollata; novembre-marzo è freddo ma le terme diventano un\'esperienza particolare, con i mercatini di Natale a dicembre',
    costi: 'città di fascia medio-bassa per gli standard dell\'Europa occidentale: cena normale 12-20€ a testa, mezzi pubblici pochi HUF a corsa, l\'ingresso alle terme la voce più costosa di una giornata tipo',
    erroriDaEvitare: [
      'Seguire chi avvicina per strada proponendo "un locale fantastico" nel quartiere ebraico o intorno alle piazze turistiche: è lo schema classico che porta a conti gonfiati a dismisura',
      'Confondere gli zeri del fiorino: un conto da "8.000" non è 8 euro, ed è facile sbagliarsi nei primi giorni',
      'Sottovalutare le terme come una parentesi rilassante da un\'ora: tra ingresso, spogliatoio e code per gli armadietti, meno di due ore e mezza-tre non bastano per goderle',
      'Programmare il weekend senza prenotare in anticipo il tour del Parlamento, che ha ingressi contingentati e va spesso esaurito con giorni di anticipo in alta stagione',
    ],
    luoghi: [
      {
        nome: "Castello di Buda e Palazzo Reale",
        testo: "Il colle di Buda sopra il Danubio, con il Palazzo Reale, oggi sede di musei (Galleria Nazionale Ungherese, Museo di Storia di Budapest, Biblioteca Nazionale Széchényi). Si sale con la funicolare Sikló o a piedi.",
        come: "Funicolare Sikló da Clark Ádám tér, accanto al Ponte delle Catene, oppure a piedi.",
        quando: "Mattina, per evitare i gruppi.",
        tempo: "2-3 ore",
        consiglio: "Dal lato sud del colle si ha la vista migliore sul Danubio."
      },
      {
        nome: "Bastione dei Pescatori e Chiesa di Mattia",
        testo: "Il Bastione è una terrazza neoromanica costruita tra il 1895 e il 1902 (mai un vero bastione), con sette torrette per le sette tribù magiare arrivate nel bacino dei Carpazi. Accanto, la chiesa di Mattia ha il tetto in tegole policrome.",
        come: "A piedi dal Castello (5 minuti).",
        quando: "Alba o sera, per le foto senza folla; molta gente a metà giornata.",
        tempo: "1-1,5 ore",
        url: "https://www.fishermansbastion.com",
        consiglio: "Parte delle terrazze è a pagamento: tariffe e orari sul sito ufficiale."
      },
      {
        nome: "Parlamento ungherese",
        testo: "Completato nel 1904, è l'edificio più grande d'Ungheria (268 metri di lunghezza), in stile neogotico sul Danubio. Si visita solo con tour guidato, che passa dalla sala centrale dove dal 2000 è esposta la Sacra Corona.",
        come: "Tram 2 o metro M2 fino a Kossuth Lajos tér. I biglietti si prenotano online per un orario.",
        quando: "Mattina; c'è un controllo di sicurezza all'ingresso.",
        tempo: "1 ora",
        url: "https://www.parlament.hu",
        consiglio: "Prenotare con giorni di anticipo, soprattutto in alta stagione."
      },
      {
        nome: "Ponte delle Catene e lungofiume",
        testo: "Il primo ponte permanente tra Buda e Pest, aperto nel 1849, illuminato di sera. Sulla riva di Pest si trovano le Scarpe sul Danubio, memoriale delle vittime ebree del 1944-45.",
        come: "A piedi dal centro; tram 2 lungo la riva.",
        quando: "Sera, quando il ponte e il Parlamento sono illuminati.",
        tempo: "1 ora",
        costo: "ingresso libero",
        consiglio: "Camminare lungo il Danubio da Pest al tramonto."
      },
      {
        nome: "Terme Széchenyi",
        testo: "Uno dei complessi termali più grandi d'Europa, aperto nel 1913: 15 vasche interne e 3 esterne, quelle all'aperto tra 27 e 38 gradi, in un edificio giallo neobarocco nel Városliget. Si mescolano gente del posto e turisti.",
        come: "Metro M1 fino a Széchenyi fürdő.",
        quando: "Mattina nei giorni feriali; le serate in estate hanno feste.",
        tempo: "3-4 ore",
        url: "https://www.szechenyibath.hu",
        consiglio: "Portare ciabatte e asciugamano. Orari e prezzi cambiano: controllarli sul sito ufficiale, dove si comprano anche i biglietti."
      },
      {
        nome: "Grande Mercato Coperto",
        testo: "Un mercato coperto aperto nel 1897, in fondo a Váci utca, con paprika, salami e strudel; al piano superiore ci sono banchi da mangiare e souvenir. Chiuso la domenica.",
        come: "Tram 47/49 fino a Fővám tér.",
        quando: "Mattina nei giorni feriali; chiuso la domenica.",
        tempo: "1-1,5 ore",
        consiglio: "Pagare in fiorini, gli sportelli di cambio qui sono cari."
      },
      {
        nome: "Grande Sinagoga di Via Dohány",
        testo: "La più grande sinagoga d'Europa, circa 3.000 posti, in stile neomoresco. Nel cortile c'è il parco memoriale Raoul Wallenberg con l'Albero della vita di Imre Varga, un salice di metallo con i nomi delle vittime sulle foglie.",
        come: "Metro M2 fino a Astoria o tram 47/49.",
        quando: "Mattina nei giorni feriali; giorni di chiusura sul sito ufficiale.",
        tempo: "1,5 ore",
        consiglio: "Nel complesso c'è anche il Museo ebraico ungherese."
      },
      {
        nome: "Quartiere ebraico e ruin bar",
        testo: "Il VII distretto è il cuore della vita serale, con bar nati in edifici abbandonati, come lo Szimpla Kert. Di giorno è un quartiere tranquillo con caffè.",
        come: "A piedi dal centro.",
        quando: "Sera.",
        tempo: "2-3 ore",
        consiglio: "Di giorno lo Szimpla Kert è più tranquillo e si visita meglio."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Castello di Buda",
          "Bastione dei Pescatori",
          "Pranzo con lángos",
          "Pomeriggio: Ponte delle Catene",
          "Sera: Parlamento illuminato"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: Széchenyi al mattino",
          "Grande Mercato Coperto",
          "Sinagoga e quartiere ebraico, ruin bar"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: Isola Margherita, Collina Gellért, House of Terror"
        ]
      }
    ],
    zone: [
      {
        nome: "Pest (V e VI distretto)",
        perChi: "Chi vuole stare a due passi da tutto",
        testo: "Vicino a Váci utca e Basilica; prezzi più alti e rumore di sera."
      },
      {
        nome: "Quartiere ebraico (VII)",
        perChi: "Chi cerca vita notturna",
        testo: "Pieno di bar, rumoroso nel weekend."
      },
      {
        nome: "Buda (I e II distretto)",
        perChi: "Chi preferisce la tranquillità",
        testo: "Vicino al Castello, strade silenziose; meno ristoranti economici."
      }
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
      "Mezzi pubblici: biglietti da convalidare o con l'app BudapestGO; i controllori multano i turisti.",
      "Il servizio a volte è già incluso: controllare il conto."
    ],
    esperienzeSlugs: ['terme-szechenyi', 'terme-gellert', 'crociera-danubio', 'ruin-bar-tour'],
    tripSlugs: ['budapest-weekend'],
    imageAlt: 'Le torri bianche a cono del Bastione dei Pescatori sul colle di Buda, sotto un cielo azzurro',
    immagine: '/images/ungheria/budapest.jpg',
  },
]
