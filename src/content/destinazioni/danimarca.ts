import type { Destinazione } from '@/lib/types'

// Prima uscita danese dell'archivio, collegata all'itinerario "Capitali
// nordiche" (src/content/viaggi/60-capitali-nordiche.md, dati in
// src/content/viaggi-dati/capitali-nordiche.ts), viaggio fatto da Rick: visitataPersonalmente
// è true. Il campo miaEsperienza resta assente finché non arriva un ricordo dell'autore. Nessun nome di hotel o ristorante specifico è stato
// inventato: solo zone e categorie di prezzo verificabili. Prezzi e orari
// (Tivoli è aperto solo a stagioni alterne, non tutto l'anno) vanno
// riverificati prima di partire.

export const destinazioniDanimarca: Destinazione[] = [
  {
    slug: 'copenaghen',
    paeseSlug: 'danimarca',
    ordine: 1,
    nome: 'Copenaghen',
    tipologia: ['città', 'design', 'gastronomia'],
    giorniConsigliati: '3 giorni, la prima tappa dell\'itinerario "Capitali nordiche"',
    visitataPersonalmente: true,
    introduzione:
      'La capitale danese, spesso citata come la città più a misura di bicicletta del mondo: oltre metà degli abitanti si sposta ogni giorno in bici su oltre 450 km di piste. In un centro raccolto ci sono i canali colorati di Nyhavn, i giardini storici di Tivoli, il lungomare della Sirenetta e Christiania, la comunità autogestita che dal 1971 vive con regole proprie nel cuore della città.',
    percheAndarci:
      'In un\'area che si gira a piedi o in bici ci sono alcune delle immagini più riconoscibili del nord Europa: le case a graticcio di Nyhavn, i tetti di rame verde del centro storico, il design scandinavo dentro e fuori i musei. Ed è la porta d\'ingresso più comoda per un giro delle capitali nordiche: da qui Stoccolma è a poche ore di treno o di volo.',
    cosaVedere: [
      'Nyhavn, il canale del XVII secolo con le facciate colorate delle case dei mercanti, oggi una fila continua di caffè e ristoranti sul molo: il punto più fotografato della città, e a ragione',
      'Tivoli Gardens, aperto nel 1843, uno dei parchi divertimento più antichi al mondo ancora in funzione: giardini curati, montagne russe storiche in legno e luci serali che valgono la visita anche senza salire su nessuna giostra. È aperto solo in alcune stagioni (primavera-estate, Halloween, mercatini di Natale) e chiude per alcuni mesi d\'inverno',
      'La Sirenetta (Den Lille Havfrue), la scultura in bronzo del 1913 ispirata alla fiaba di Hans Christian Andersen, sul lungomare di Langelinie. È piccola e spesso circondata da folla e gruppi, uno dei casi più citati di attrazione che vale più per la fama che per quello che si vede; la passeggiata sul lungomare intorno merita comunque',
      'Christiania, la «città libera» nata nel 1971 in un\'ex area militare a Christianshavn: case autocostruite, murales e un\'atmosfera diversa da tutto il resto della città. La storica Pusher Street, dove per decenni si è venduto hashish alla luce del sole, è stata chiusa dalle autorità danesi nel 2024 dopo un episodio di violenza; la vendita di stupefacenti è comunque illegale in tutta la Danimarca',
      'Il centro storico intorno a Strøget, una delle vie pedonali commerciali più lunghe d\'Europa, che collega Rådhuspladsen (la piazza del municipio) alla vecchia piazza del mercato di Kongens Nytorv',
      'Il quartiere di Christianshavn, con i canali minori, le case galleggianti e la chiesa di Vor Frelsers Kirke, famosa per la scala esterna a spirale che sale intorno alla guglia dorata',
    ],
    cosaFare: [
      'Un giro in bici a noleggio lungo il lungomare e i canali, come si muovono ogni giorno gli abitanti (vedi la scheda esperienza dedicata)',
      'Un giro in barca sui canali, da Nyhavn o da Christianshavn, per vedere il centro storico dall\'acqua (vedi la scheda esperienza dedicata)',
      'Una serata a Tivoli, tra giostre storiche e giardini illuminati, quando è in stagione',
      'Una visita a Christiania tenendo a mente le regole della comunità: niente foto sull\'ex Pusher Street e rispetto per i residenti (vedi la scheda esperienza dedicata)',
      'Un tour o una sosta per lo smørrebrød, il panino aperto danese, a Torvehallerne (il mercato coperto) o in una delle rosticcerie storiche del centro (vedi la scheda esperienza dedicata)',
    ],
    doveDormire:
      'Il centro storico (Indre By) è il più comodo per chi vuole tutto a piedi, ma è anche la zona più cara. Vesterbro, ex quartiere a luci rosse e oggi fra i più vivaci per bar e ristoranti, è un buon compromesso fra prezzo e posizione, a pochi minuti a piedi o in metro dal centro. Nørrebro, multiculturale e meno turistico, è la scelta più economica, con una vita di quartiere vera, ma è un po\' più lontano dalle attrazioni principali.',
    doveMangiare:
      'Torvehallerne, il mercato coperto vicino a Nørreport, per smørrebrød, pesce e prodotti locali in versione street food di qualità. Nyhavn è scenografico, ma i prezzi sono quelli della vista: meglio scegliere con attenzione o fermarsi per un caffè guardando il canale. Per qualcosa di più informale e internazionale c\'è Reffen, l\'area street food sul lungomare (aperta da primavera ad autunno).',
    comeArrivare:
      "Aeroporto di Copenaghen-Kastrup (CPH), fra gli scali meglio collegati del nord Europa, a circa 20 minuti dal centro in metro. Ci sono voli diretti dalle principali città italiane. In treno dall'Italia non c'è un collegamento diretto comodo: chi preferisce non volare passa dalla Germania con più cambi. Dall'aeroporto la metro M2, attiva 24 ore su 24, arriva a Kongens Nytorv in circa 15 minuti e il treno alla stazione centrale in 13; il biglietto per 3 zone costa circa 30 DKK (circa 4 €), alle macchinette o nell'app DOT Billetter. Da Stoccolma il treno diretto SJ impiega 5-5h30, da Oslo c'è il traghetto notturno DFDS di circa 17 ore.",
    comeSpostarsi:
      'La bici a noleggio, la scelta più in linea con la città, poi metro, S-tog (treni suburbani) e bus con biglietto integrato a zone. Il centro storico si gira bene anche a piedi.',
    periodoMigliore:
      'maggio-settembre per il clima e le giornate lunghe; giugno-agosto è alta stagione, con Tivoli negli orari estivi. Dicembre per i mercatini di Natale, con un\'atmosfera molto diversa e altrettanto bella.',
    costi:
      "Tivoli: ingresso giardini da circa 20€, biglietto combinato giardini più giostre illimitate fino a circa 66€. Giro in barca sui canali: circa 15-20€ a persona per un'ora. Pasto economico 7-20€, pranzo in caffè 17-27€, cena di fascia media 40-75€ per due. Budget giornaliero a persona, alloggio escluso: basso 50-70 € (bici, Torvehallerne o supermercato, attrazioni gratuite), medio 100-140 € (giro in barca, un museo, cena media), alto oltre 200 €.",
    erroriDaEvitare: [
      'Camminare o fermarsi su una pista ciclabile senza guardare: sono trafficate quanto le strade e i ciclisti non rallentano per i turisti distratti',
      'Fotografare a Christiania nelle zone segnalate (l\'ex Pusher Street in particolare) o i residenti senza permesso: le regole sono affisse e vengono fatte rispettare',
      'Dare per scontato che Tivoli sia aperto tutto l\'anno: fuori dal periodo di Natale chiude per alcuni mesi d\'inverno, quindi conviene controllare il calendario prima di programmare la serata',
      'Sottovalutare la delusione possibile della Sirenetta: è una statua piccola, spesso circondata da folla, da vedere durante una passeggiata sul lungomare più che come meta a sé',
      'Dare per scontato che si paghi in euro: la Danimarca non è nell\'eurozona, si paga in corone danesi (DKK)',
    ],
    miaEsperienza:
      "Copenaghen è stata la prima tappa del giro delle capitali nordiche con gli amici: tre giorni tra Nyhavn, il giro in barca sui canali, Tivoli, la Sirenetta, Christianshavn e Christiania, poi il treno per Stoccolma.",
    luoghi: [
      {
        nome: "Nyhavn",
        testo: "Il canale scavato tra il 1670 e il 1675 per Cristiano V, con case colorate antiche, oggi una fila di caffè e ristoranti sul molo. È uno dei punti più fotografati della città, e da qui partono i battelli per i canali.",
        come: "Metro M1, M2, M3 o M4 fino a Kongens Nytorv, poi pochi passi a piedi.",
        quando: "Mattina presto per le foto; sera per i tavoli sul molo, più cari.",
        tempo: "1 ora",
        costo: "ingresso libero",
        orari: "Molo sempre accessibile",
        lat: 55.67991,
        lng: 12.59029,
        consiglio: "I locali sul lato soleggiato costano molto: spesso conviene cenare una strada più in là."
      },
      {
        nome: "Tivoli Gardens",
        testo: "Aperto nel 1843, è uno dei parchi divertimenti più antichi del mondo, in pieno centro. Giardini curati, le storiche montagne russe in legno Rutschebanen e luci al tramonto.",
        come: "A piedi dalla stazione centrale. Aperto a stagioni: estate, Halloween e Natale.",
        quando: "Sera, quando si accendono le luci.",
        tempo: "3-4 ore",
        costo: "Ingresso ai giardini intorno a 180-200 DKK, circa 24-27 €; giostre a parte o con braccialetto illimitato",
        orari: "Solo in stagione: primavera-estate, Halloween e Natale; calendario su tivoli.dk",
        lat: 55.67361,
        lng: 12.56833,
        url: "https://www.tivoli.dk",
        consiglio: "Il biglietto d'ingresso è separato da quello delle giostre: controllare le formule sul sito."
      },
      {
        nome: "Giro in barca sui canali",
        testo: "Un'ora sui canali del centro e di Christianshavn, passando sotto ponti bassissimi e davanti all'Opera, alla Sirenetta e a Christiansborg. È il modo più rapido per orientarsi il primo giorno.",
        come: "Partenze frequenti da Nyhavn e da Gammel Strand; non serve prenotare fuori dall'alta stagione.",
        quando: "Il primo pomeriggio di sole; d'inverno le partenze sono meno frequenti.",
        tempo: "1 ora",
        costo: "Circa 15-20 € a persona",
        lat: 55.6775,
        lng: 12.57861,
        consiglio: "Le barche sono scoperte e sull'acqua tira vento anche d'estate: serve una giacca."
      },
      {
        nome: "Castello di Rosenborg",
        testo: "Castello rinascimentale costruito da Cristiano IV tra il 1606 e il 1624, nato come residenza estiva. Nel tesoro ci sono i gioielli e le insegne della corona danese; intorno c'è il Kongens Have, il giardino reale storico.",
        come: "In metro fino a Nørreport o a piedi dal centro.",
        quando: "Mattina nei giorni feriali; parco aperto a tutti, gratuito.",
        tempo: "1,5 ore",
        orari: "In bassa stagione mar-dom 10-16, chiuso il lunedì (novembre 2026); giardino sempre aperto",
        lat: 55.68567,
        lng: 12.57728,
        url: "https://www.kongernessamling.dk/en/rosenborg/",
        consiglio: "Il Kongens Have è un buon posto per un picnic gratuito."
      },
      {
        nome: "Amalienborg",
        testo: "Quattro palazzi uguali, con interni rococò, attorno a una piazza ottagonale: è la residenza della famiglia reale. Ogni giorno c'è il cambio della guardia, che arriva in marcia da Rosenborg.",
        come: "A piedi da Nyhavn, lungo il lungomare.",
        quando: "A mezzogiorno, per il cambio della guardia; la marcia parte dalla caserma di Gothersgade 100, accanto a Rosenborg.",
        tempo: "1 ora",
        costo: "cambio della guardia gratuito",
        lat: 55.68417,
        lng: 12.59306,
        url: "https://www.kongernessamling.dk/en/amalienborg/",
        consiglio: "La cupola della vicina Marmorkirken si può visitare: orari sul sito della chiesa."
      },
      {
        nome: "Sirenetta e Kastellet",
        testo: "La statua in bronzo del 1913 ispirata alla fiaba di Andersen è piccola e quasi sempre circondata da gruppi, ma la passeggiata per arrivarci vale la tappa. Subito dietro c'è il Kastellet, una fortezza a stella del Seicento con bastioni erbosi e caserme rosse.",
        come: "A piedi da Nyhavn lungo il lungomare di Langelinie, circa mezz'ora, o in bici.",
        quando: "Mattina presto, prima dei pullman.",
        tempo: "1-1,5 ore",
        costo: "Gratuito",
        orari: "Statua sempre accessibile",
        lat: 55.69278,
        lng: 12.59917
      },
      {
        nome: "Christiansborg",
        testo: "Sull'isolotto di Slotsholmen, il palazzo che riunisce Parlamento, Corte suprema e sale di rappresentanza della regina e del re, con le rovine dei castelli medievali nei sotterranei. La torre, la più alta della città, ha una terrazza panoramica sulla città.",
        come: "A piedi da Strøget o da Gammel Strand; metro fino a Gammel Strand.",
        quando: "Mattina per le sale reali; la torre fino a sera.",
        tempo: "2 ore",
        lat: 55.67583,
        lng: 12.57889,
        url: "https://kongeligeslotte.dk/en/palaces-and-gardens/christiansborg-palace.html"
      },
      {
        nome: "Rundetårn",
        testo: "La torre rotonda del 1642, voluta da Cristiano IV come osservatorio astronomico, si sale lungo una rampa elicoidale senza gradini. Dalla cima si vede il centro dall'alto, tra tetti di rame e campanili.",
        come: "A piedi da Strøget, in Købmagergade.",
        quando: "Pomeriggio tardi, con la luce sui tetti.",
        tempo: "45 minuti",
        costo: "60 DKK adulti (2026), circa 8 €; gratis sotto i 18 anni",
        orari: "Aperta 362 giorni l'anno",
        lat: 55.68139,
        lng: 12.57583,
        url: "https://www.rundetaarn.dk/en/"
      },
      {
        nome: "Christianshavn e Vor Frelsers Kirke",
        testo: "Quartiere con canali minori, case galleggianti e la chiesa del Salvatore, famosa per la guglia nera e oro con la scala a spirale: si sale prima dentro la torre, con gradini stretti e ripidi, poi all'aperto lungo la spirale, con vista su tutta Copenaghen.",
        come: "Metro M1 o M2 fino a Christianshavn o a piedi dal centro.",
        quando: "Giorno sereno. Torre aperta tutti i giorni 9-20, ultimo ingresso 30 minuti prima, chiusa a gennaio; chiude per un po' con pioggia, neve o vento forte, perché i gradini di rame diventano scivolosi. In tutto sono 400 gradini, gli ultimi 150 all'aperto.",
        tempo: "1-2 ore",
        costo: "torre 70 DKK adulti, 20 DKK bambini (2026)",
        lat: 55.67292,
        lng: 12.59403,
        url: "https://www.vorfrelserskirke.dk",
        consiglio: "Prenotare online: i posti sono limitati. L'ultimo tratto è esposto, sconsigliato a chi soffre di vertigini."
      },
      {
        nome: "Christiania",
        testo: "Una «città libera» nata nel 1971 in un'ex area militare: case autocostruite, murales, atelier e locali. Ha regole proprie, scritte sui cartelli agli ingressi. Pusher Street, la via dello spaccio, è stata smantellata nel 2024.",
        come: "A piedi da Christianshavn.",
        quando: "Giorno; la sera è meno consigliabile per i visitatori occasionali.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        lat: 55.67361,
        lng: 12.59972,
        url: "https://www.christiania.org",
        consiglio: "Leggere i cartelli all'ingresso e chiedere prima di fotografare le persone."
      },
      {
        nome: "Ny Carlsberg Glyptotek",
        testo: "Il museo fondato dal birraio Carl Jacobsen, con sculture greche, romane ed etrusche, una grande raccolta di Rodin e quadri impressionisti. Al centro c'è un giardino d'inverno con palme sotto una cupola di vetro.",
        come: "A piedi dalla stazione centrale, di fronte a Tivoli.",
        quando: "Con la pioggia o d'inverno; il caffè del giardino è un buon posto per una pausa.",
        tempo: "2 ore",
        costo: "150 DKK adulti, 135 DKK online (2026), circa 18-20 €",
        lat: 55.67278,
        lng: 12.57222,
        url: "https://glyptoteket.com"
      },
      {
        nome: "Torvehallerne",
        testo: "Due padiglioni di vetro vicino a Nørreport con una sessantina di banchi di pesce, formaggi, pane, caffè e smørrebrød, il pane di segale coperto che è il pranzo danese per eccellenza. È il posto più semplice per mangiare bene senza sedersi al ristorante.",
        come: "Metro e treni fino a Nørreport, poi due minuti a piedi.",
        quando: "A pranzo; il sabato è il giorno più vivace.",
        tempo: "1 ora",
        costo: "Ingresso libero; smørrebrød indicativamente 8-15 € al pezzo",
        lat: 55.68387,
        lng: 12.56955
      },
      {
        nome: "Louisiana Museum of Modern Art",
        testo: "A Humlebæk, a nord di Copenaghen, un grande museo d'arte moderna e contemporanea: padiglioni sull'Øresund con opere di Giacometti, Picasso, Warhol e Hockney, e un giardino di sculture (Moore, Calder) che scende verso il mare.",
        come: "Treno della costa da Copenhagen H fino a Humlebæk (circa 40 minuti), poi 10-15 minuti a piedi.",
        quando: "Giorno intero, con pranzo al caffè con vista sul mare. Aperto mar-ven 11-22, sab-dom 11-18, chiuso il lunedì.",
        tempo: "mezza giornata",
        costo: "145 DKK adulti (2026)",
        orari: "Mar-ven 11-22, sab-dom 11-18, chiuso il lunedì",
        lat: 55.96944,
        lng: 12.54306,
        url: "https://www.louisiana.dk",
        consiglio: "Biglietti e orari sul sito ufficiale."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Nyhavn al mattino e giro in barca sui canali",
          "Amalienborg a mezzogiorno per il cambio della guardia",
          "Passeggiata fino alla Sirenetta e al Kastellet",
          "Rosenborg e Kongens Have nel pomeriggio",
          "Sera a Tivoli, se è stagione"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: Christiansborg e la sua torre",
          "Rundetårn e Strøget",
          "Pranzo a Torvehallerne",
          "Pomeriggio a Christianshavn (Vor Frelsers Kirke) e Christiania",
          "Sera a Vesterbro"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: treno della costa per il Louisiana Museum a Humlebæk",
          "Proseguire per Kronborg a Helsingør, una fermata più a nord",
          "In alternativa, con la pioggia: Ny Carlsberg Glyptotek"
        ]
      }
    ],
    zone: [
      {
        nome: "Indre By (centro)",
        testo: "Vicino a Nyhavn e Strøget; camere piccole e prezzi alti, rumore di sera nelle vie pedonali.",
        perChi: "Chi ha poco tempo",
        fascia: "160-300 €"
      },
      {
        nome: "Vesterbro",
        testo: "Vicino alla stazione centrale, con cibo e locali. Zona della stazione più movimentata.",
        perChi: "Chi vuole vita notturna e ristoranti",
        fascia: "120-220 €"
      },
      {
        nome: "Nørrebro",
        testo: "Multiculturale, con caffè e negozi; vicino al centro in bicicletta.",
        perChi: "Chi preferisce un quartiere vero e prezzi medi",
        fascia: "100-180 €"
      },
      {
        nome: "Christianshavn",
        testo: "Calmo e pittoresco, vicino a Christiania; meno ristoranti economici.",
        perChi: "Chi cerca atmosfera di canale",
        fascia: "140-250 €"
      }
    ],
    sapori: [
      {
        nome: "Smørrebrød",
        testo: "Pane di segale con pesce, carne o uova, il pranzo tradizionale danese; si trova nei caffè e nei ristoranti tradizionali."
      },
      {
        nome: "Wienerbrød",
        testo: "La pasta sfoglia danese, in versione cannella (kanelsnegl) o con crema."
      },
      {
        nome: "Røde pølser",
        testo: "Il würstel rosso dei chioschi (pølsevogn), con senape e cipolla fritta."
      },
      {
        nome: "Frikadeller",
        testo: "Polpette di maiale cotte in padella, con patate e cavolo rosso."
      }
    ],
    attenzioni: [
      "Biciclette: restare fuori dalle corsie ciclabili e guardare prima di scendere dal marciapiede.",
      "Borseggiatori su Strøget, alla stazione centrale, a Nørreport, a Nyhavn, a Kongens Nytorv e a Christiania.",
      "Christiania e Nørrebro: più attenzione la sera tardi, ci sono stati episodi di violenza tra bande. Non comprare nulla da venditori abusivi: lo spaccio è illegale.",
      "Locali di Nyhavn molto cari: controllare il menu prima di sedersi."
    ],
    faq: [
      {
        domanda: "Quanti giorni servono per Copenaghen?",
        risposta: "Due giorni bastano per il centro, Christianshavn e Christiania; con il terzo si fa la gita lungo la costa al Louisiana e a Kronborg."
      },
      {
        domanda: "Come si va dall'aeroporto di Kastrup al centro?",
        risposta: "La metro M2, attiva 24 ore su 24, arriva a Kongens Nytorv in circa 15 minuti; il treno porta alla stazione centrale in 13. Il biglietto per 3 zone costa circa 30 DKK, alle macchinette o nell'app DOT Billetter."
      },
      {
        domanda: "Tivoli è aperto tutto l'anno?",
        risposta: "No: apre in primavera-estate, per Halloween e per il Natale, e chiude per alcuni mesi d'inverno. Il calendario va controllato su tivoli.dk prima di programmare la serata."
      },
      {
        domanda: "Conviene girare Copenaghen in bici?",
        risposta: "Sì, la città è piatta e le piste ciclabili sono ovunque; si noleggia con le app di bike sharing. Le piste sono trafficate come strade: a piedi non ci si ferma sopra."
      },
      {
        domanda: "Si può fotografare a Christiania?",
        risposta: "Non nelle zone segnalate, in particolare sull'ex Pusher Street, e non i residenti senza permesso. La vendita di stupefacenti resta illegale come nel resto della Danimarca."
      },
      {
        domanda: "Quanto costa Copenaghen al giorno?",
        risposta: "È tra le città più care d'Europa: un pasto economico costa 7-20 €, una cena media per due 40-75 €, una birra al bar 7-11 €. Molto si vede gratis a piedi o in bici."
      }
    ],
    gite: [
      {
        nome: "Helsingør e il castello di Kronborg",
        distanza: "circa 45 minuti in treno",
        come: "Treno della costa (Kystbanen) da Copenhagen H; il castello è a 15 minuti a piedi dalla stazione.",
        testo: "Il castello rinascimentale sullo stretto di Øresund dove Shakespeare ambientò l'Amleto, patrimonio UNESCO. Si abbina bene al Louisiana, che è sulla stessa linea. Ingresso 150 DKK; in bassa stagione mar-dom 10-16, chiuso il lunedì (2026)."
      },
      {
        nome: "Roskilde",
        distanza: "circa 25 minuti in treno",
        come: "Treni frequenti da Copenhagen H.",
        testo: "Ha la cattedrale dove sono sepolti i re di Danimarca, patrimonio UNESCO, e il Museo delle navi vichinghe sul fiordo, con cinque navi dell'XI secolo recuperate dal fondale."
      },
      {
        nome: "Malmö",
        distanza: "circa 40 minuti in treno",
        come: "Treno Øresundståg da Copenhagen H o dall'aeroporto, attraverso il ponte dell'Øresund.",
        testo: "La terza città svedese, dall'altra parte del ponte: centro storico con piazze del Cinquecento, il grattacielo ritorto Turning Torso e lunghe spiagge. Serve un documento per il controllo al confine."
      },
      {
        nome: "Castello di Frederiksborg",
        distanza: "circa 40 minuti in treno",
        come: "S-tog linea A fino a Hillerød, poi 15 minuti a piedi.",
        testo: "Un castello rinascimentale in mattoni rossi costruito su tre isolotti di un lago, oggi Museo di storia nazionale, con un giardino barocco."
      }
    ],
    esperienzeSlugs: ['nyhavn-giro-in-barca', 'copenaghen-tour-in-bicicletta', 'christiania-visita', 'smorrebrod-tour-torvehallerne'],
    tripSlugs: ['capitali-nordiche'],
    imageAlt: 'Il centro di Copenaghen illuminato di notte visto dall\'alto, con la piazza del Municipio e le strade piene di luci',
    immagine: '/images/danimarca/copenaghen.jpg',
  },
]
