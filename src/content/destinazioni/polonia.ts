import type { Destinazione } from '@/lib/types'

// Prima uscita polacca dell'archivio, collegata al viaggio "Cracovia in un
// weekend lungo" (src/content/viaggi/53-cracovia-weekend.md, dati in
// src/content/viaggi-dati/cracovia-weekend.ts), viaggio fatto da Rick: visitataPersonalmente è
// true su entrambe le destinazioni e il campo miaEsperienza resta assente finché non arriva un ricordo dell'autore. Auschwitz-Birkenau è
// scritta in un registro deliberatamente sobrio: informativo, mai da
// "attrazione". Nessun nome di hotel, ristorante o operatore è stato
// inventato. Prezzi e regole di prenotazione (soprattutto quelle di
// Auschwitz-Birkenau) cambiano spesso e vanno riverificati sui canali
// ufficiali prima di partire.

export const destinazioniPolonia: Destinazione[] = [
  {
    slug: 'cracovia',
    paeseSlug: 'polonia',
    ordine: 1,
    nome: 'Cracovia',
    tipologia: ['città', 'storia', 'arte'],
    giorniConsigliati: '3-4 giorni, comprese le gite fuori porta ad Auschwitz-Birkenau e alla Miniera di sale di Wieliczka',
    visitataPersonalmente: true,
    introduzione:
      'La capitale polacca fino al 1596 e l\'unica grande città del paese uscita quasi intatta dalla Seconda guerra mondiale: il centro storico, patrimonio UNESCO dal 1978 (nella prima lista mai compilata), conserva la struttura medievale con Rynek Główny, una delle piazze del mercato più grandi d\'Europa, il colle del castello di Wawel e, poco più a sud, Kazimierz, l\'ex quartiere ebraico oggi tra i più vivi della città.',
    percheAndarci:
      'Perché concentra in un\'area percorribile a piedi otto secoli di storia polacca (la sede del potere reale a Wawel, il cuore mercantile e religioso di Rynek Główny, la memoria ebraica di Kazimierz), e perché è la base naturale per due delle visite più importanti della Polonia meridionale: Auschwitz-Birkenau e la Miniera di sale di Wieliczka.',
    cosaVedere: [
      'Rynek Główny, la piazza del mercato medievale tra le più grandi d\'Europa, con al centro la Sukiennice (Cloth Hall), l\'antica hala dei tessuti oggi mercato coperto di souvenir al piano terra e galleria di pittura polacca dell\'Ottocento al piano superiore',
      'La Basilica di Santa Maria, gotica, con il grande altare ligneo di Veit Stoss (Wit Stwosz) e le due torri diseguali: dalla più alta, ogni ora, suona l\'Hejnał mariacki, la breve melodia di tromba suonata dal vivo verso i quattro punti cardinali e interrotta di colpo a metà nota, in memoria della leggendaria guardia colpita da una freccia mentre dava l\'allarme durante un\'invasione tatara',
      'Il colle di Wawel, con il Castello Reale (le Sale di Stato, gli Appartamenti Reali, il Tesoro e l\'Armeria) e la Cattedrale, luogo di incoronazione e sepoltura dei re polacchi, con la Campana di Sigismondo e le tombe reali nelle cripte',
      'Kazimierz, l\'ex città autonoma fondata nel 1335 e diventata dal 1495 il centro della vita ebraica di Cracovia per secoli: la Old Synagogue (la più antica di Polonia), la Remuh Synagogue con il cimitero adiacente, e Plac Nowy, la piazza intorno a cui oggi si concentrano i bar della città',
      'Il Barbacane e i resti delle mura medievali, all\'estremità nord del centro storico',
      'Il quartiere di Podgórze, al di là della Vistola, con la Piazza degli Eroi del Ghetto (Plac Bohaterów Getta), dove file di sedie di metallo vuote ricordano il ghetto ebraico istituito qui dai nazisti nel 1941, e la ex Fabbrica di Oskar Schindler, oggi museo',
    ],
    cosaFare: [
      'Ascoltare l\'Hejnał dalla torre di Santa Maria, possibilmente in punto, per sentire l\'interruzione improvvisa della melodia',
      'Camminare sulla Via Reale, il percorso storico delle incoronazioni dal Barbacane a Wawel passando per Rynek Główny',
      'Scendere nel Rynek Underground Museum, sotto la piazza, con i resti archeologici del mercato medievale portati alla luce durante i restauri',
      'Un tour a piedi o in bici dell\'ex ghetto di Podgórze e della Fabbrica di Schindler, come contrappunto storico a Kazimierz',
      'Una serata tra i bar di Plac Nowy a Kazimierz, o un tour enogastronomico (vedi la scheda esperienza dedicata)',
    ],
    doveDormire:
      'Il centro storico (Stare Miasto) dentro le Planty, gli antichi viali che seguono il tracciato delle mura abbattute, è la scelta più comoda e concentra la maggior parte dell\'offerta turistica. Kazimierz è l\'alternativa più vissuta e meno cara, a dieci-quindici minuti a piedi da Rynek Główny, con una vita serale propria.',
    doveMangiare:
      'I pierogi restano il piatto simbolo, in decine di varianti dolci e salate; lo żurek, zuppa a base di farina di segale fermentata, spesso servito dentro una pagnotta scavata; il bigos, lo stufato di cavolo e carne; le zapiekanki, la versione polacca dello street food da forno, nata proprio a Kazimierz sul Plac Nowy. I bary mleczne ("bar del latte"), mense economiche ereditate dall\'epoca comunista e sussidiate ancora oggi, restano il modo più semplice ed economico di mangiare cucina polacca di tutti i giorni. Da bere, la vodka polacca, spesso aromatizzata (żubrówka all\'erba di bisonte tra le più note).',
    comeArrivare:
      'Aeroporto John Paul II (KRK, Balice), a circa 15 km dal centro: treno diretto (linea SKA1) in 17-20 minuti fino alla stazione centrale Kraków Główny, oppure bus di linea (300 e la notturna 902). In treno dall\'Italia non esiste un collegamento diretto comodo: si arriva in genere in aereo. Da Varsavia, treno ad alta velocità in circa 2h15-2h30.',
    comeSpostarsi: 'Centro storico tutto a piedi. Per il resto della città, tram e bus della rete KMK, con biglietti a tempo economici. Non serve auto.',
    periodoMigliore: 'aprile-maggio e settembre-ottobre per il clima mite e meno folla; giugno-agosto è alta stagione, affollata e più calda; novembre-marzo è freddo ma gestibile, con i mercatini di Natale a dicembre',
    costi: 'città economica: musei e ingressi singoli pochi euro, cena normale 10-15€ a testa, mezzi pubblici pochi PLN a corsa',
    erroriDaEvitare: [
      'Cambiare valuta nei kantor con il tabellone vistoso vicino a Rynek Główny senza controllare bene il tasso: alcuni mostrano tassi vantaggiosi per valute che non si stanno cambiando',
      'Seguire chi avvicina per strada proponendo "un bar fantastico" intorno a Rynek Główny, via Floriańska o Kazimierz: è lo schema classico che porta a conti gonfiati a dismisura',
      'Sottovalutare la coda per salire sulla torre della Basilica di Santa Maria o per la Cattedrale di Wawel in alta stagione: conviene arrivare presto',
      'Programmare Auschwitz-Birkenau come una tappa qualunque incastrata tra due musei: è una giornata che va isolata e affrontata con la testa giusta',
    ],
    luoghi: [
      {
        nome: "Rynek Główny e Sukiennice",
        testo: "La piazza del mercato medievale, quasi 4 ettari, spesso citata tra le più grandi d'Europa, con al centro la Sukiennice (la Cloth Hall) e la torre isolata del vecchio municipio, demolito nell'Ottocento. Intorno stanno la Basilica di Santa Maria e i caffè con i tavoli all'aperto.",
        come: "Dalla stazione centrale a piedi, 10 minuti.",
        quando: "Mattina presto o sera, quando si accendono le luci; di giorno è affollata.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        consiglio: "Sotto la piazza c'è un museo sotterraneo costruito sulle fondamenta degli antichi edifici della pesa."
      },
      {
        nome: "Basilica di Santa Maria",
        testo: "Chiesa gotica con il grande altare ligneo tardogotico di Veit Stoss, della fine del Quattrocento, e due torri diseguali. Dalla torre più alta, ogni ora, giorno e notte, suona l'Hejnał mariacki, la melodia di tromba che si interrompe di colpo; quella di mezzogiorno va in diretta alla radio nazionale.",
        come: "Sulla piazza; il biglietto per l'interno si compra a lato.",
        quando: "Mattina; per l'Hejnał stare sulla piazza in punto.",
        tempo: "45 minuti",
        url: "https://www.mariacki.com",
        consiglio: "L'altare si vede aperto solo nelle ore indicate dal sito."
      },
      {
        nome: "Colle di Wawel",
        testo: "Il colle sopra la Vistola con il Castello Reale e la Cattedrale dove dal 1320 al 1764 furono incoronati i re polacchi, che è anche il loro principale luogo di sepoltura. Nella torre di Sigismondo c'è la campana del 1521, quasi 13 tonnellate, suonata solo nelle grandi occasioni. Mostre e percorsi hanno biglietti distinti.",
        come: "A piedi dal centro (15 minuti). I biglietti si comprano sul posto o online sul sito ufficiale.",
        quando: "Mattina presto, prima dei gruppi.",
        tempo: "3 ore",
        url: "https://wawel.krakow.pl",
        consiglio: "Nei giorni pieni conviene comprare online in anticipo."
      },
      {
        nome: "Kazimierz",
        testo: "La città fondata nel 1335 da Casimiro il Grande e per secoli cuore della vita ebraica di Cracovia, con la Sinagoga Vecchia (la più antica sinagoga rimasta in Polonia), la sinagoga Remuh e il cimitero. Oggi è anche il quartiere dei caffè, delle gallerie e dei locali.",
        come: "A piedi o in tram da Stare Miasto (10 minuti).",
        quando: "Giorno per le sinagoghe; sera per i locali.",
        tempo: "3 ore",
        url: "https://www.jewishkrakow.net",
        consiglio: "La piazza Nowy è nota per le zapiekanki, i panini lunghi."
      },
      {
        nome: "Fabbrica di Schindler e Podgórze",
        testo: "Il museo nell'ex fabbrica di Oskar Schindler racconta la Cracovia occupata dai nazisti. Vicino c'è Piazza degli Eroi del Ghetto, con 70 sedie vuote a ricordo del ghetto.",
        come: "In tram nel quartiere di Zabłocie o a piedi da Kazimierz.",
        quando: "Mattina.",
        tempo: "2-3 ore",
        url: "https://muzeumkrakow.pl",
        consiglio: "Biglietti e orari sul sito del Museo storico di Cracovia; d'estate comprarli in anticipo."
      },
      {
        nome: "Miniera di sale di Wieliczka",
        testo: "Una miniera di sale scavata dal Duecento, nella prima lista UNESCO del 1978, nella cittadina di Wieliczka vicino a Cracovia. Il percorso turistico, circa 2,2 km nei primi tre livelli, passa per cappelle scolpite nel sale, laghi di salamoia e la cappella di Santa Kinga, dove si celebrano anche matrimoni.",
        come: "Treno o bus da Cracovia, poi a piedi fino all'ingresso.",
        quando: "Giorno intero; prenotare online.",
        tempo: "3-4 ore",
        url: "https://www.wieliczka-saltmine.com",
        consiglio: "Portare una giacca: sotto terra fa fresco anche d'estate."
      },
      {
        nome: "Planty e Barbacane",
        testo: "L'anello di parchi sul tracciato delle mura demolite, che circonda la città vecchia, con la Porta di San Floriano e il Barbacane, salvati dalla demolizione delle mura nell'Ottocento: il Barbacane è uno dei tre avamposti fortificati di questo tipo rimasti in Europa.",
        come: "A piedi, intorno al centro.",
        quando: "Mattina o sera, con luce morbida.",
        tempo: "1 ora",
        costo: "ingresso libero",
        consiglio: "Una passeggiata gratuita per orientarsi."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Rynek Główny e Santa Maria",
          "Wawel",
          "Pranzo a Kazimierz",
          "Sera: Planty"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: Fabbrica di Schindler e Podgórze",
          "Pomeriggio a Kazimierz"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: Miniera di Wieliczka o Auschwitz-Birkenau (vedi scheda dedicata)"
        ]
      }
    ],
    zone: [
      {
        nome: "Stare Miasto",
        perChi: "Chi vuole stare vicino alle attrazioni",
        testo: "Cuore storico, vicino a tutto; rumore di notte vicino ai locali."
      },
      {
        nome: "Kazimierz",
        perChi: "Chi cerca atmosfera e vita serale",
        testo: "Quartiere con caffè e locali, alloggi charmant; più movimentato la sera."
      },
      {
        nome: "Podgórze",
        perChi: "Chi vuole tranquillità e prezzi più bassi",
        testo: "Oltre la Vistola, a 15 minuti a piedi dal centro."
      }
    ],
    sapori: [
      {
        nome: "Pierogi",
        testo: "Ravioli ripieni di formaggio e patate, carne o cavolo e funghi."
      },
      {
        nome: "Zapiekanka",
        testo: "Mezza baguette gratinata con funghi e formaggio, street food di Plac Nowy."
      },
      {
        nome: "Obwarzanek krakowski",
        testo: "Ciambella di pane intrecciata, venduta dai carrettini in strada."
      },
      {
        nome: "Żurek",
        testo: "Zuppa acida di segale con salsiccia e uovo, spesso servita in una pagnotta."
      }
    ],
    attenzioni: [
      "Taxi: usare solo quelli ufficiali, con nome e telefono della compagnia su porta e tetto e le tariffe esposte; quelli con lo stemma ma senza nome non sono ufficiali.",
      "Carrozze con cavalli: tariffe alte e poco chiare, concordare prima.",
      "Cambio: usare ATM e rifiutare il pagamento in euro.",
      "Locali notturni: controllare bene il conto quando si paga con carta a fine serata e non lasciare il bicchiere incustodito.",
      "Borseggiatori nei luoghi affollati e turistici, nelle stazioni e sui treni."
    ],
    esperienzeSlugs: ['wieliczka-miniera-di-sale', 'kazimierz-food-vodka-tour'],
    tripSlugs: ['cracovia-weekend'],
    imageAlt: 'La Sukiennice illuminata di sera sulla piazza del Mercato di Cracovia, con la torre gotica della Basilica di Santa Maria a sinistra',
    immagine: '/images/polonia/cracovia.jpg',
  },
  {
    slug: 'auschwitz-birkenau',
    paeseSlug: 'polonia',
    ordine: 2,
    nome: 'Auschwitz-Birkenau',
    tipologia: ['memoria', 'storia'],
    giorniConsigliati: 'mezza giornata, come gita da Cracovia',
    visitataPersonalmente: true,
    introduzione:
      'L\'ex campo di concentramento e sterminio nazista tedesco, in funzione dal 1940 al 1945 nei pressi della città polacca di Oświęcim, circa 66 km a ovest di Cracovia. È composto da due siti distinti collegati da un servizio navetta: Auschwitz I, il campo originario e oggi sede del museo principale, e Auschwitz II-Birkenau, il campo di sterminio più esteso costruito a partire dal 1941 a circa 3 km di distanza. Dal 1947 il sito è un museo statale polacco, dal 1979 Patrimonio dell\'Umanità UNESCO.',
    percheAndarci:
      'Perché è il luogo simbolo dello sterminio nazista degli ebrei d\'Europa e di altri gruppi perseguitati, e perché la visita, con le testimonianze materiali conservate sul posto, aiuta a capire la storia come nessun libro riesce a fare del tutto. Richiede tempo, preparazione e il giusto stato d\'animo.',
    cosaVedere: [
      'Il cancello di Auschwitz I con la scritta "Arbeit macht frei"',
      'I blocchi-museo di Auschwitz I, con le esposizioni permanenti e nazionali (comprese le vetrine con oggetti personali delle vittime: valigie, occhiali, scarpe, capelli)',
      'Il Blocco 11 e il muro delle esecuzioni',
      'La camera a gas e il forno crematorio conservati ad Auschwitz I',
      'La distesa di Auschwitz II-Birkenau, molto più estesa, con l\'ingresso ferroviario della "Judenrampe" dove avveniva la selezione, le baracche in gran parte in legno e i resti delle camere a gas fatte saltare dai tedeschi in ritirata nel 1945',
      'Il monumento internazionale alle vittime, tra le rovine dei crematori di Birkenau',
    ],
    cosaFare: [],
    doveDormire: 'Si visita in giornata da Cracovia: non è pensata come tappa con pernottamento a Oświęcim.',
    doveMangiare: 'Un piccolo bar/self-service è presente nell\'area del centro visitatori di Auschwitz I; la maggior parte dei visitatori mangia al rientro a Cracovia.',
    comeArrivare:
      'Da Cracovia: bus diretto dalla stazione centrale dei pullman (circa 1h30, corse ogni 20-40 minuti, biglietto attorno ai 34 PLN a tratta) fino al parcheggio del Museo, oppure treno regionale fino alla stazione di Oświęcim (circa 1h40) e poi 20-30 minuti a piedi o un breve bus navetta fino all\'ingresso. Esistono anche tour organizzati con transfer, guida e biglietto inclusi, con partenza da Cracovia (circa 1h-1h30 di viaggio).',
    comeSpostarsi: 'Tra Auschwitz I e Birkenau (circa 3 km) funziona una navetta gratuita frequente; a piedi si cammina molto, su terreno in gran parte scoperto.',
    periodoMigliore:
      'tutto l\'anno, con considerazioni diverse: d\'estate fa caldo e i percorsi (soprattutto a Birkenau, quasi privo di ombra) diventano faticosi; d\'inverno il freddo intenso restituisce forse più di ogni altra stagione la durezza del luogo. L\'alta stagione (giugno-agosto) è anche il periodo con più difficoltà a trovare uno slot di ingresso libero.',
    costi:
      'L\'ingresso al sito è gratuito. Il costo, quando c\'è, è quello del trasporto (bus/treno) o del tour organizzato con guida, che di solito costa alcune decine di euro a persona.',
    erroriDaEvitare: [
      'Presentarsi senza prenotazione online: le entry card, gratuite, vanno riservate in anticipo sul sito ufficiale visit.auschwitz.org (fino a tre mesi prima, e comunque con almeno una settimana di anticipo per gli slot senza guida): non si acquistano più in loco',
      'Non controllare gli orari stagionali: nelle ore centrali della giornata (indicativamente dalle 7:30 fino al primo pomeriggio o al tardo pomeriggio secondo il mese) l\'ingresso è consentito solo con una guida-educatore del Museo o un tour organizzato; il tour libero senza guida è possibile solo nelle fasce orarie residue, più tardi nel pomeriggio secondo la stagione',
      'Sottovalutare i tempi: una visita completa a entrambi i siti richiede almeno 3-4 ore, più il trasporto andata e ritorno da Cracovia: serve una giornata intera, senza altre tappe',
      'Vestirsi o comportarsi come si farebbe in una qualunque attrazione turistica: il regolamento del Museo richiede un abbigliamento e un comportamento rispettosi, e alcune aree vietano le fotografie',
      'Portare bagagli ingombranti: c\'è un limite di dimensione per gli zaini ammessi all\'interno, con deposito a pagamento per quelli più grandi',
    ],
    luoghi: [
      {
        nome: "Auschwitz I (Museo)",
        testo: "Il primo campo, con la scritta «Arbeit macht frei» all'ingresso, i blocchi-museo con le esposizioni nazionali e le vetrine di oggetti personali delle vittime. È il luogo della memoria dove si capisce la scala dello sterminio.",
        come: "Dalla stazione degli autobus di Cracovia, bus o minibus fino a Oświęcim; il museo è a circa 2 km dalla stazione ferroviaria.",
        quando: "Il pass nominativo va prenotato online; per gran parte della giornata si entra solo con guida.",
        tempo: "3,5 ore per il percorso guidato",
        costo: "l'ingresso è libero ma richiede il pass per fascia oraria",
        url: "https://www.auschwitz.org",
        consiglio: "Zaini e borse non possono superare 35x25x15 cm: quelli più grandi vanno lasciati fuori."
      },
      {
        nome: "Auschwitz II-Birkenau",
        testo: "Il campo di sterminio vero e proprio, molto più esteso, con il binario d'ingresso, la rampa della selezione e le baracche in legno rimaste. Il monumento internazionale tra i resti dei crematori ricorda le vittime.",
        come: "Con il tour guidato il trasferimento da Auschwitz I è incluso.",
        quando: "Dopo la visita ad Auschwitz I.",
        tempo: "1,5-2 ore",
        url: "https://www.auschwitz.org",
        consiglio: "Un luogo da visitare in silenzio, senza selfie."
      },
      {
        nome: "Prenotazione e regole di visita",
        testo: "Il Museo gestisce un sistema di pass nominativi, in numero limitato. Le visite guidate per singoli (circa 3,5 ore) ci sono anche in italiano. Per gran parte del giorno si entra solo con guida; senza guida, con il pass gratuito, solo nelle ore indicate sul sito (da aprile a settembre dalle 17).",
        come: "Le prenotazioni si fanno solo online, su visit.auschwitz.org; in estate con largo anticipo.",
        quando: "Evitare weekend e festività.",
        url: "https://www.auschwitz.org",
        consiglio: "Diffidare dei rivenditori: il sito ufficiale è l'unico affidabile."
      }
    ],
    attenzioni: [
      "Le esposizioni sono molto dure: pensarci bene prima di portare bambini.",
      "Mettere in conto che la visita è emotivamente pesante: pianificare il resto del giorno con calma.",
      "Su foto e riprese seguire i cartelli: in alcuni spazi non sono ammesse."
    ],
    esperienzeSlugs: ['auschwitz-birkenau-visita-guidata'],
    tripSlugs: ['cracovia-weekend'],
    imageAlt: 'Il corpo di guardia in mattoni di Auschwitz II-Birkenau con la torre centrale e i binari che portano all\'ingresso, in bianco e nero',
    immagine: '/images/polonia/auschwitz-birkenau.jpg',
  },
]
