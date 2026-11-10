import type { Destinazione } from '@/lib/types'

// Terza e ultima tappa dell'itinerario "Capitali baltiche in 9 giorni"
// (src/content/viaggi/61-capitali-baltiche.md, dati in
// src/content/viaggi-dati/capitali-baltiche.ts), viaggio fatto da Rick. Stesso trattamento
// delle destinazioni lituane e lettoni: visitataPersonalmente true, miaEsperienza resta assente finché non arriva un ricordo dell'autore.
// A differenza di Vilnius e Riga, qui non c'è una seconda destinazione
// satellite paragonabile a Trakai o Jūrmala: Toompea, Kadriorg e Telliskivi
// sono quartieri di Tallinn stessa, non luoghi separati, e restano dentro il
// cosaVedere/cosaFare dell'unica destinazione estone.

export const destinazioniEstonia: Destinazione[] = [
  {
    slug: 'tallinn',
    paeseSlug: 'estonia',
    ordine: 1,
    nome: 'Tallinn',
    tipologia: ['città', 'storia', 'architettura'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La capitale dell\'Estonia è la più settentrionale delle tre capitali baltiche e si affaccia sul Golfo di Finlandia. La Città Vecchia, patrimonio UNESCO dal 1997, è uno dei centri medievali meglio conservati del nord Europa: in alto la Toompea, la collina fortificata dove risiedeva il potere, in basso la città dei mercanti anseatici. Fuori dalle mura, il parco barocco di Kadriorg e l\'ex complesso industriale di Telliskivi raccontano due Estonie diverse, quella zarista e quella più recente, digitale e creativa.',
    percheAndarci:
      'Il centro storico è autentico: mura, torri e la piazza con il municipio gotico sono arrivate fino a oggi quasi intatte. E appena fuori da quelle mura Tallinn cambia faccia, con un parco imperiale russo da una parte e un distretto creativo nato in una fabbrica sovietica dall\'altra.',
    cosaVedere: [
      'La Piazza del Municipio (Raekoja plats), con il Municipio di Tallinn, del 1404, ancora in uso',
      'La collina di Toompea, con il Castello di Toompea (oggi sede del parlamento estone, il Riigikogu) e la Cattedrale ortodossa di Alexander Nevsky, con le cupole a cipolla dorate',
      'Le piattaforme panoramiche di Kohtuotsa e Patkuli su Toompea, le due viste classiche sulla città bassa, sul porto e sul Golfo di Finlandia',
      'Le mura cittadine medievali, con un lungo tratto ancora in piedi e le torri superstiti, fra cui la Kiek in de Kök, la grande torre d\'artiglieria',
      'La Chiesa di Sant\'Olaf (Oleviste kirik), gotica, con la sua alta guglia che domina la città bassa',
      'Il Parco di Kadriorg, con il Palazzo di Kadriorg, fatto costruire nel 1718 da Pietro il Grande per la moglie Caterina I su progetto dell\'architetto italiano Niccolò Michetti, oggi sede del museo d\'arte straniera; a pochi passi il KUMU, il museo d\'arte estone in un edificio contemporaneo',
      'Telliskivi Creative City, l\'ex complesso industriale e ferroviario di epoca sovietica diventato un quartiere creativo, con street art, studi di design, negozi indipendenti e locali',
    ],
    cosaFare: [
      'Salire su Toompea fino alle piattaforme di Kohtuotsa e Patkuli per il panorama sulla città bassa',
      'Camminare lungo il tratto di mura ancora percorribile e salire su una delle torri aperte al pubblico',
      'Girare tra i musei e i viali del Parco di Kadriorg, con una sosta al KUMU se c\'è tempo per una visita più lunga',
      'Passare un pomeriggio tra i negozi indipendenti, i murales e i locali di Telliskivi Creative City',
    ],
    doveDormire:
      'Nella Città Vecchia, per avere tutto a piedi: la parte bassa intorno a Piazza del Municipio è la più centrale, Toompea la più tranquilla e panoramica. Il quartiere di Kalamaja, fra la Città Vecchia e Telliskivi, è un\'alternativa più residenziale, dall\'aria più locale.',
    doveMangiare:
      'La verivorst (sanguinaccio) con mirtilli rossi è un piatto tradizionale, soprattutto a Natale; il kiluvõileib, un tramezzino aperto con spratti marinati, burro e uovo sodo, è lo spuntino estone per eccellenza. A Telliskivi c\'è la scena gastronomica più giovane della città, fra street food, birrifici artigianali e mercati alimentari nei fine settimana.',
    comeArrivare:
      "L'aeroporto di Tallinn-Lennart Meri (TLL) è vicino al centro: tram, oppure taxi o app di trasporto. Da alcuni aeroporti italiani ci sono voli diretti low-cost, stagionali o tutto l'anno; altrimenti si fa scalo su un hub europeo. Da Riga: bus diretti, con più compagnie e diverse corse al giorno. Da Helsinki: traghetti regolari, un'estensione classica per chi ha qualche giorno in più. Dall'aeroporto il tram 4 arriva in centro in circa 20 minuti (circa 2 € comprato dal conducente, meno con la carta di trasporto o il QR); con Bolt si spendono circa 6-10 €. Da Riga il bus Lux Express impiega circa 4-4,5 ore; l'autostazione è a un paio di chilometri dalla Città Vecchia, collegata dal tram o mezz'ora a piedi.",
    comeSpostarsi:
      'Il centro storico si gira tutto a piedi. I mezzi pubblici collegano il centro a Kadriorg e Telliskivi, con biglietti economici da comprare in app o alle biglietterie.',
    periodoMigliore:
      'maggio-settembre, per il clima più mite e le giornate lunghissime vicino al solstizio; giugno-agosto è la stagione più affollata nella Città Vecchia. L\'inverno (novembre-marzo) è freddo e buio, ma la neve sui tetti medievali e i mercatini di Natale in Piazza del Municipio hanno il loro fascino.',
    costi: "Un po' più cara di Vilnius e Riga, molto meno di Helsinki. Budget giornaliero a persona con alloggio in doppia: 60-80 € spendendo poco (camera semplice o ostello, pranzi a Telliskivi), 110-160 € di fascia media (hotel 3 stelle, un museo o una torre, cena al ristorante), oltre 220 € con hotel 4-5 stelle in Città Vecchia. Ingressi 2026: Kiek in de Kök 16 €, Kumu 16 €, Lennusadam 22 €, Torre della TV 18-19 €.",
    erroriDaEvitare: [
      'Fermarsi alla Città Vecchia: Kadriorg e Telliskivi mostrano la Tallinn zarista e quella contemporanea, che il centro medievale da solo non racconta',
      'Salire su Toompea e saltare le due piattaforme panoramiche (Kohtuotsa e Patkuli): sono a pochi passi l\'una dall\'altra e guardano la città bassa da angolazioni diverse',
      'Dare per scontato che l\'estone somigli al lituano o al lettone: è una lingua ugrofinnica, imparentata con il finlandese e del tutto estranea alla famiglia baltica delle altre due capitali',
      'Andare a Telliskivi senza controllare gli orari: locali e negozi indipendenti non aprono tutti allo stesso modo ogni giorno',
    ],
    miaEsperienza:
      "Tallinn è stata l'ultima tappa del giro delle capitali baltiche con gli amici: ci siamo arrivati in bus da Riga e ci siamo rimasti tre giorni, tra la Città Vecchia, la collina di Toompea, le mura, Kadriorg e Telliskivi prima del volo di rientro.",
    luoghi: [
      {
        nome: "Piazza del Municipio (Raekoja plats)",
        testo: "Il cuore medievale della città, con il Municipio gotico finito nel 1404, il più antico della regione del Mar Baltico e della Scandinavia, oggi museo e sala concerti. In estate ha tavoli all'aperto; a dicembre ospita il mercatino di Natale.",
        come: "A piedi dal porto.",
        quando: "Mattina presto, per la piazza senza folla; orari di visita del Municipio e della sua torre sul sito ufficiale.",
        tempo: "1 ora",
        costo: "Piazza libera; Municipio 7 €, biglietto combinato Municipio e torre 12 € (2026)",
        orari: "Dal 1° giugno al 31 agosto Municipio lun-gio 11-18, ven-dom 11-16, torre tutti i giorni 11-18; da settembre a maggio Municipio solo su appuntamento (lun-ven 10-16) e torre chiusa",
        lat: 59.43735,
        lng: 24.74521,
        url: "https://raekoda.tallinn.ee/en/visit/",
        consiglio: "Controllare le giornate di crociere: la piazza si riempie di gruppi."
      },
      {
        nome: "Toompea e Cattedrale Alexander Nevsky",
        testo: "Il colle sopra la città bassa, con il Castello di Toompea (sede del Parlamento) e la Cattedrale ortodossa Alexander Nevsky, costruita a fine Ottocento, con le cupole a cipolla. La salita è corta ma panoramica.",
        come: "A piedi dalla Piazza del Municipio, salendo da Pikk jalg.",
        quando: "Mattina.",
        tempo: "1,5 ore",
        costo: "Cattedrale Nevsky: ingresso libero, abbigliamento composto",
        lat: 59.43575,
        lng: 24.73932,
        consiglio: "Per le foto della città dall'alto, le piattaforme di Kohtuotsa e Patkuli."
      },
      {
        nome: "Piattaforme panoramiche di Kohtuotsa e Patkuli",
        testo: "Due terrazze su Toompea con le viste classiche sulla città bassa, sul porto e sul Golfo di Finlandia, con i tetti rossi e le guglie.",
        come: "A piedi dalla cattedrale.",
        quando: "Tramonto, per la luce sui tetti.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        orari: "Terrazze all'aperto, sempre accessibili",
        lat: 59.43773,
        lng: 24.74221,
        consiglio: "Kohtuotsa è spesso affollata, Patkuli di solito più tranquilla."
      },
      {
        nome: "Mura e torri medievali",
        testo: "Un lungo tratto di mura ancora in piedi, con molte torri medievali, tra cui la Kiek in de Kök, torre d'artiglieria del Quattrocento, il cui nome in basso tedesco significa «sbircia in cucina». Si visitano anche la Torre della Fanciulla, la torre della porta di Lühike jalg e i passaggi sotterranei dei bastioni.",
        come: "A piedi, lungo Müürivahe.",
        quando: "Giorno, con buone condizioni.",
        tempo: "1-2 ore",
        costo: "Kiek in de Kök 16 €, passaggi dei bastioni 10 € (2026); da ottobre ad aprile chiuso il lunedì, aperto 11-18",
        orari: "11-18; da ottobre ad aprile chiuso il lunedì. Fino a fine 2026 alla Torre della Fanciulla e al camminamento si entra dalla Kiek in de Kök",
        lat: 59.4347,
        lng: 24.74127,
        url: "https://www.linnamuuseum.ee",
        consiglio: "Unire Kiek in de Kök e i passaggi dei bastioni nella stessa visita."
      },
      {
        nome: "Chiesa di Sant'Olaf (Oleviste kirik)",
        testo: "Chiesa gotica con la guglia alta circa 124 metri, la chiesa più alta dell'Estonia. Nella torre c'è una piattaforma panoramica a 60 metri.",
        come: "A piedi, in fondo alla Piazza del Municipio.",
        quando: "Giorno sereno.",
        tempo: "45 minuti",
        orari: "Piattaforma panoramica aperta da aprile a fine ottobre, chiusa dal 31 ottobre al 1° aprile; la chiesa apre durante le funzioni",
        lat: 59.44132,
        lng: 24.7479,
        url: "https://oleviste.ee/vaateplatvorm/",
        consiglio: "Salire sulla torre per la vista sul porto."
      },
      {
        nome: "Farmacia del Municipio (Raeapteek)",
        testo: "Una delle farmacie più antiche d'Europa ancora in attività, nello stesso edificio dal 1422, sull'angolo della Piazza del Municipio. Accanto al banco moderno c'è un piccolo museo con vasi, strumenti e rimedi medievali; vende ancora il claret speziato e il marzapane.",
        come: "A piedi, Raekoja plats 11.",
        quando: "Di mattina, prima dei gruppi delle crociere.",
        tempo: "20-30 minuti",
        costo: "Ingresso libero al museo per i visitatori singoli (2 € a persona solo per i gruppi guidati)",
        orari: "Lun-sab 10-18, pausa 13.30-14",
        lat: 59.43773,
        lng: 24.74594,
        url: "https://raeapteek.ee/en/"
      },
      {
        nome: "Cattedrale di Santa Maria (Toomkirik)",
        testo: "La chiesa più antica della città, sul colle di Toompea, con le origini nel Duecento. Dentro ci sono decine di stemmi funerari in legno della nobiltà baltico-tedesca e tombe scolpite: un interno sobrio, molto diverso dalle cupole della vicina cattedrale ortodossa.",
        come: "A piedi da Toompea, a due minuti dalla Cattedrale Nevsky.",
        quando: "In mattinata, unendola alle terrazze panoramiche.",
        tempo: "30-45 minuti",
        orari: "Mar-dom 10-16, chiusa il lunedì",
        lat: 59.43704,
        lng: 24.73916,
        url: "https://toomkirik.ee/en/"
      },
      {
        nome: "Museo di San Nicola (Niguliste)",
        testo: "Una chiesa gotica della città bassa trasformata in museo d'arte sacra, parte del Museo d'Arte dell'Estonia. Custodisce il frammento della «Danza macabra» di Bernt Notke, del tardo Quattrocento, e grandi altari medievali; in alcune sere ospita concerti d'organo.",
        come: "A piedi, Niguliste 3, ai piedi di Toompea.",
        quando: "Un pomeriggio di pioggia, o la sera per un concerto.",
        tempo: "1 ora",
        orari: "Mar-dom 10-18, chiuso il lunedì",
        lat: 59.43592,
        lng: 24.74277,
        url: "https://niguliste.ekm.ee/en/"
      },
      {
        nome: "Via Pikk e il Passaggio di Santa Caterina",
        testo: "Pikk, la «via lunga», collega il porto a Toompea passando davanti alle case delle corporazioni mercantili, alla Casa delle Teste Nere e alla Torre della Grassa Margherita. Pochi passi più in là il Katariina käik, vicolo medievale tra le mura del convento domenicano, ospita botteghe di vetrai, ceramisti e tessitrici.",
        come: "A piedi, dalla Porta di Viru o dalla Piazza del Municipio.",
        quando: "Di mattina presto o al tramonto, quando i vicoli si svuotano.",
        tempo: "1 ora",
        costo: "Ingresso libero",
        orari: "Vie sempre accessibili; le botteghe aprono di giorno",
        lat: 59.43783,
        lng: 24.74798
      },
      {
        nome: "Parco e Palazzo di Kadriorg, KUMU",
        testo: "Il Palazzo, voluto da Pietro il Grande nel 1718 per la moglie Caterina I, con il parco e il Kumu, il museo d'arte estone, in un edificio moderno nello stesso parco.",
        come: "Tram 1 o 3 fino al capolinea Kadriorg, oppure a piedi dal centro.",
        quando: "Pomeriggio; il parco è libero. Il Kumu è chiuso il lunedì; aperto 10-18, il giovedì fino alle 20.",
        tempo: "3 ore",
        costo: "Kumu 16 € intero, 11 € ridotto, 32 € famiglia (2026)",
        orari: "Kumu mar, mer e ven-dom 10-18, gio 10-20, chiuso il lunedì; anche il Palazzo di Kadriorg è chiuso il lunedì; parco sempre aperto",
        lat: 59.43847,
        lng: 24.79102,
        url: "https://kumu.ekm.ee",
        consiglio: "Il parco è un bel posto per passeggiare fuori dal centro."
      },
      {
        nome: "Telliskivi Creative City",
        testo: "Le ex officine dove si riparavano le locomotive, oggi quartiere creativo con street art, studi, negozi indipendenti e ristoranti.",
        come: "A piedi dalla Città Vecchia o con i mezzi pubblici.",
        quando: "Sera, per i locali; il sabato per i negozi.",
        tempo: "2 ore",
        costo: "ingresso libero",
        orari: "Area sempre accessibile; negozi e locali con orari propri",
        lat: 59.43893,
        lng: 24.72873,
        consiglio: "Qui si mangia molto bene a prezzi ragionevoli."
      },
      {
        nome: "Lennusadam, il porto degli idrovolanti",
        testo: "Il Museo marittimo estone dentro tre hangar per idrovolanti in cemento del 1917, con le volte a guscio sottile. Si cammina su passerelle sopra il sottomarino Lembit del 1936, si sale su navi storiche ormeggiate fuori, come il rompighiaccio a vapore Suur Tõll. Piace anche a chi non è appassionato di mare.",
        come: "A piedi da Kalamaja in 15 minuti, o bus fino alla fermata Lennusadam.",
        quando: "Un giorno di brutto tempo, o con bambini.",
        tempo: "2-3 ore",
        costo: "Biglietto combinato (hangar, mostra temporanea, navi Suur Tõll e Valvas) 22 €, ridotto 11 €; con la torre della Grassa Margherita 30 € (2026)",
        orari: "Ottobre-aprile mar-dom 10-18; maggio-settembre tutti i giorni 10-19",
        lat: 59.45451,
        lng: 24.73885,
        url: "https://meremuuseum.ee/lennusadam/en/"
      },
      {
        nome: "Torre della TV (Teletorn)",
        testo: "La torre costruita per le Olimpiadi di vela del 1980, alta 314 metri, con la piattaforma panoramica aperta a 175 metri: da lì si vedono la città, il golfo e nelle giornate limpide la costa finlandese. Per chi vuole c'è il percorso «sul bordo», legati, fuori dalla piattaforma.",
        come: "Bus dal centro verso Pirita-Kose, circa 20-25 minuti, oppure taxi.",
        quando: "Giornata limpida; se la visibilità è scarsa alla cassa timbrano il biglietto per tornare gratis entro due mesi.",
        tempo: "1,5 ore",
        costo: "18-19 €, ridotto 13-14 €; biglietto serale 10 € dalle 17 (2026)",
        orari: "Dom-ven 10-18, sab 10-21",
        lat: 59.47119,
        lng: 24.88744,
        url: "https://teletorn.ee/en/"
      },
      {
        nome: "Museo estone all'aperto (Rocca al Mare)",
        testo: "Un villaggio-museo nel bosco sul mare, a ovest del centro, con fattorie, mulini a vento, una chiesa di legno, una scuola e una locanda spostati qui da tutta l'Estonia. Racconta come si viveva in campagna tra Settecento e Novecento, fino al condominio dell'epoca dei kolchoz.",
        come: "Bus dal centro verso Rocca al Mare, circa 25 minuti.",
        quando: "Estate per le attività nelle fattorie; d'inverno con la neve è silenzioso e molto bello.",
        tempo: "3 ore",
        costo: "14 € in bassa stagione (29 settembre-22 aprile), 7 € dalle 16; prezzi estivi sul sito (2026)",
        orari: "In bassa stagione mar-dom, edifici 10-17, parco fino alle 19 (a dicembre tutti i giorni)",
        lat: 59.436,
        lng: 24.63534,
        url: "https://evm.ee/en/"
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Piazza del Municipio e Farmacia del Municipio",
          "Salita a Toompea: Cattedrale Nevsky, Cattedrale di Santa Maria, terrazze di Kohtuotsa e Patkuli",
          "Pranzo nella città bassa",
          "Pomeriggio: mura e Kiek in de Kök, poi via Pikk e Passaggio di Santa Caterina",
          "Torre di Sant'Olaf (da aprile a ottobre)",
          "Sera: cena a Telliskivi"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2 mattina: Parco di Kadriorg, Palazzo e Kumu (non di lunedì)",
          "Pomeriggio: Kalamaja a piedi e Lennusadam",
          "Sera: Telliskivi o la Città Vecchia illuminata"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1 e 2 come sopra",
          "Giorno 3: gita a Helsinki in traghetto, oppure mattina al Museo all'aperto di Rocca al Mare e tramonto dalla Torre della TV",
          "In alternativa, giornata nel Parco nazionale di Lahemaa con auto o tour"
        ]
      }
    ],
    zone: [
      {
        nome: "Città Vecchia (Vanalinn)",
        testo: "Vie di ciottoli e atmosfera, ma prezzi alti e rumore la sera.",
        perChi: "Chi vuole stare a piedi tra le attrazioni",
        fascia: "90-170 €"
      },
      {
        nome: "Kalamaja",
        testo: "Vicino a Telliskivi e al porto, a breve distanza dal centro.",
        perChi: "Chi cerca un quartiere di caffè e case di legno",
        fascia: "70-120 €"
      },
      {
        nome: "Kesklinn",
        testo: "Moderno, a pochi minuti dalla Città Vecchia.",
        perChi: "Chi vuole comodità e centri commerciali",
        fascia: "70-130 €"
      },
      {
        nome: "Kadriorg",
        testo: "Ville di legno e parco, a 15-20 minuti di tram dalla Città Vecchia; la sera è tranquillo e vicino ci sono il Kumu e il mare.",
        perChi: "Chi cerca verde e silenzio",
        fascia: "70-120 €"
      }
    ],
    sapori: [
      {
        nome: "Leib (pane nero)",
        testo: "Pane di segale scuro, base della cucina estone."
      },
      {
        nome: "Kama",
        testo: "Farina di cereali tostati con kefir, un dessert tipico."
      },
      {
        nome: "Verivorst",
        testo: "Sanguinaccio con orzo, tipico di Natale."
      },
      {
        nome: "Marzapane",
        testo: "Marzapane estone, nella pasticceria Maiasmokk, caffetteria storica della città."
      }
    ],
    attenzioni: [
      "I ristoranti in costume medievale sono cari e turistici: confrontare con quelli di Telliskivi.",
      "Taxi: usare un'app riconosciuta, e non quelli vicino al porto delle crociere.",
      "Nei giorni di crociere la Città Vecchia è affollatissima: andare presto.",
      "D'inverno il ghiaccio rende pericolosi i ciottoli: scarpe adatte."
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Tallinn?",
        risposta: "Due giorni bastano per la Città Vecchia, Toompea, Kadriorg e Telliskivi. Con un terzo giorno si aggiungono Lennusadam e la Torre della TV, oppure una gita a Helsinki o a Lahemaa."
      },
      {
        domanda: "Tallinn è cara?",
        risposta: "È la più cara delle tre capitali baltiche, ma resta molto più economica di Helsinki e delle capitali scandinave. I ristoranti in costume medievale della piazza sono quelli che alzano di più il conto."
      },
      {
        domanda: "Si può visitare Tallinn in giornata da Helsinki?",
        risposta: "Sì, con il traghetto di circa 2 ore si vede la Città Vecchia in un giorno. Chi può dorma almeno una notte: la sera, partite le crociere, il centro si svuota ed è molto più bello."
      },
      {
        domanda: "Qual è il periodo migliore per andare a Tallinn?",
        risposta: "Da maggio a settembre, con giornate lunghissime a giugno; solo da giugno ad agosto si visitano Municipio e torre senza appuntamento. Dicembre ha il mercatino di Natale in piazza, ma fa buio presto e fa freddo."
      },
      {
        domanda: "Conviene la Tallinn Card?",
        risposta: "Conviene a chi fa tre o più ingressi al giorno: include, tra gli altri, il Municipio e molti musei della città. Per una visita limitata alla Città Vecchia, con le piazze e le terrazze gratuite, spesso non serve."
      },
      {
        domanda: "Come si va dall'aeroporto alla Città Vecchia?",
        risposta: "Con il tram 4 in circa 20 minuti, biglietto da circa 2 € dal conducente. In taxi o Bolt servono 10-15 minuti e circa 6-10 €."
      }
    ],
    gite: [
      {
        nome: "Helsinki",
        distanza: "circa 2 ore di traghetto",
        come: "Traghetti di linea dal Terminal D e dal Vecchio Porto di Tallinn, molte corse al giorno; si prenota online.",
        testo: "La capitale finlandese è dall'altra parte del golfo: in giornata si vedono la piazza del Senato, la cattedrale ortodossa Uspenski e il mercato sul porto. Partire col primo traghetto e rientrare con l'ultimo."
      },
      {
        nome: "Parco nazionale di Lahemaa",
        distanza: "circa 70 km, 1 ora in auto",
        come: "In auto a noleggio o con un tour organizzato; i mezzi pubblici sono pochi.",
        testo: "Torbiere con passerelle di legno, boschi, villaggi di pescatori sulla costa e i manieri di Palmse e Sagadi. È la gita naturalistica più classica da Tallinn."
      },
      {
        nome: "Tartu",
        distanza: "circa 185 km, 2-2,5 ore in treno",
        come: "Treno Elron dalla stazione Balti jaam, o bus dall'autostazione.",
        testo: "La città universitaria dell'Estonia, Capitale europea della cultura 2024, con la piazza del Municipio in pendenza, la collina di Toome con le rovine della cattedrale e il Museo nazionale estone."
      }
    ],
    esperienzeSlugs: ['tallinn-kadriorg-kumu', 'tallinn-telliskivi-creative-city'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Le case medievali color pastello con i tetti a punta sul lato est della Piazza del Municipio di Tallinn, con i tavolini dei caffè all\'aperto',
    immagine: '/images/estonia/tallinn.jpg',
  },
]
