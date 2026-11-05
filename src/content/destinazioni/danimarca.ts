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
      'Aeroporto di Copenaghen-Kastrup (CPH), fra gli scali meglio collegati del nord Europa, a circa 20 minuti dal centro in metro. Ci sono voli diretti dalle principali città italiane. In treno dall\'Italia non c\'è un collegamento diretto comodo: chi preferisce non volare passa dalla Germania con più cambi.',
    comeSpostarsi:
      'La bici a noleggio, la scelta più in linea con la città, poi metro, S-tog (treni suburbani) e bus con biglietto integrato a zone. Il centro storico si gira bene anche a piedi.',
    periodoMigliore:
      'maggio-settembre per il clima e le giornate lunghe; giugno-agosto è alta stagione, con Tivoli negli orari estivi. Dicembre per i mercatini di Natale, con un\'atmosfera molto diversa e altrettanto bella.',
    costi:
      'Tivoli: ingresso giardini da circa 20€, biglietto combinato giardini più giostre illimitate fino a circa 66€. Giro in barca sui canali: circa 15-20€ a persona per un\'ora. Pasto economico 7-20€, pranzo in caffè 17-27€, cena di fascia media 40-75€ per due.',
    erroriDaEvitare: [
      'Camminare o fermarsi su una pista ciclabile senza guardare: sono trafficate quanto le strade e i ciclisti non rallentano per i turisti distratti',
      'Fotografare a Christiania nelle zone segnalate (l\'ex Pusher Street in particolare) o i residenti senza permesso: le regole sono affisse e vengono fatte rispettare',
      'Dare per scontato che Tivoli sia aperto tutto l\'anno: fuori dal periodo di Natale chiude per alcuni mesi d\'inverno, quindi conviene controllare il calendario prima di programmare la serata',
      'Sottovalutare la delusione possibile della Sirenetta: è una statua piccola, spesso circondata da folla, da vedere durante una passeggiata sul lungomare più che come meta a sé',
      'Dare per scontato che si paghi in euro: la Danimarca non è nell\'eurozona, si paga in corone danesi (DKK)',
    ],
    luoghi: [
      {
        nome: "Nyhavn",
        testo: "Il canale scavato tra il 1670 e il 1675 per Cristiano V, con case colorate antiche, oggi una fila di caffè e ristoranti sul molo. È uno dei punti più fotografati della città, e da qui partono i battelli per i canali.",
        come: "Metro M1, M2, M3 o M4 fino a Kongens Nytorv, poi pochi passi a piedi.",
        quando: "Mattina presto per le foto; sera per i tavoli sul molo, più cari.",
        tempo: "1 ora",
        costo: "ingresso libero",
        consiglio: "I locali sul lato soleggiato costano molto: spesso conviene cenare una strada più in là."
      },
      {
        nome: "Castello di Rosenborg",
        testo: "Castello rinascimentale costruito da Cristiano IV tra il 1606 e il 1624, nato come residenza estiva. Nel tesoro ci sono i gioielli e le insegne della corona danese; intorno c'è il Kongens Have, il giardino reale storico.",
        come: "In metro fino a Nørreport o a piedi dal centro.",
        quando: "Mattina nei giorni feriali; parco aperto a tutti, gratuito.",
        tempo: "1,5 ore",
        consiglio: "Il Kongens Have è un buon posto per un picnic gratuito."
      },
      {
        nome: "Amalienborg",
        testo: "Quattro palazzi uguali, con interni rococò, attorno a una piazza ottagonale: è la residenza della famiglia reale. Ogni giorno c'è il cambio della guardia, che arriva in marcia da Rosenborg.",
        come: "A piedi da Nyhavn, lungo il lungomare.",
        quando: "A mezzogiorno, per il cambio della guardia; la marcia parte dalla caserma di Gothersgade 100, accanto a Rosenborg.",
        tempo: "1 ora",
        costo: "cambio della guardia gratuito",
        consiglio: "La cupola della vicina Marmorkirken si può visitare: orari sul sito della chiesa."
      },
      {
        nome: "Tivoli Gardens",
        testo: "Aperto nel 1843, è uno dei parchi divertimenti più antichi del mondo, in pieno centro. Giardini curati, le storiche montagne russe in legno Rutschebanen e luci al tramonto.",
        come: "A piedi dalla stazione centrale. Aperto a stagioni: estate, Halloween e Natale.",
        quando: "Sera, quando si accendono le luci.",
        tempo: "3-4 ore",
        url: "https://www.tivoli.dk",
        consiglio: "Il biglietto d'ingresso è separato da quello delle giostre: controllare le formule sul sito."
      },
      {
        nome: "Christianshavn e Vor Frelsers Kirke",
        testo: "Quartiere con canali minori, case galleggianti e la chiesa del Salvatore, famosa per la guglia nera e oro con la scala a spirale: si sale prima dentro la torre, con gradini stretti e ripidi, poi all'aperto lungo la spirale, con vista su tutta Copenaghen.",
        come: "Metro M1 o M2 fino a Christianshavn o a piedi dal centro.",
        quando: "Giorno sereno. Torre aperta tutti i giorni 9-20, ultimo ingresso 30 minuti prima, chiusa a gennaio; chiude per un po' con pioggia, neve o vento forte, perché i gradini di rame diventano scivolosi. In tutto sono 400 gradini, gli ultimi 150 all'aperto.",
        tempo: "1-2 ore",
        costo: "torre 70 DKK adulti, 20 DKK bambini (2026)",
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
        url: "https://www.christiania.org",
        consiglio: "Leggere i cartelli all'ingresso e chiedere prima di fotografare le persone."
      },
      {
        nome: "Louisiana Museum of Modern Art",
        testo: "A Humlebæk, a nord di Copenaghen, un grande museo d'arte moderna e contemporanea: padiglioni sull'Øresund con opere di Giacometti, Picasso, Warhol e Hockney, e un giardino di sculture (Moore, Calder) che scende verso il mare.",
        come: "Treno della costa da Copenhagen H fino a Humlebæk (circa 40 minuti), poi 10-15 minuti a piedi.",
        quando: "Giorno intero, con pranzo al caffè con vista sul mare. Aperto mar-ven 11-22, sab-dom 11-18, chiuso il lunedì.",
        tempo: "mezza giornata",
        costo: "145 DKK adulti (2026)",
        url: "https://www.louisiana.dk",
        consiglio: "Biglietti e orari sul sito ufficiale."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Nyhavn al mattino",
          "Amalienborg a mezzogiorno",
          "Rosenborg e Kongens Have",
          "Pomeriggio in battello sui canali",
          "Sera a Tivoli"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: Christianshavn (Vor Frelsers Kirke)",
          "Christiania",
          "Pranzo al mercato coperto Torvehallerne, a Nørreport",
          "Sera: Vesterbro"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: Louisiana Museum a Humlebæk"
        ]
      }
    ],
    zone: [
      {
        nome: "Indre By (centro)",
        perChi: "Chi ha poco tempo",
        testo: "Vicino a Nyhavn e Strøget; camere piccole e prezzi alti, rumore di sera nelle vie pedonali."
      },
      {
        nome: "Vesterbro",
        perChi: "Chi vuole vita notturna e ristoranti",
        testo: "Vicino alla stazione centrale, con cibo e locali. Zona della stazione più movimentata."
      },
      {
        nome: "Nørrebro",
        perChi: "Chi preferisce un quartiere vero e prezzi medi",
        testo: "Multiculturale, con caffè e negozi; vicino al centro in bicicletta."
      },
      {
        nome: "Christianshavn",
        perChi: "Chi cerca atmosfera di canale",
        testo: "Calmo e pittoresco, vicino a Christiania; meno ristoranti economici."
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
    esperienzeSlugs: ['nyhavn-giro-in-barca', 'copenaghen-tour-in-bicicletta', 'christiania-visita', 'smorrebrod-tour-torvehallerne'],
    tripSlugs: ['capitali-nordiche'],
    imageAlt: 'Il centro di Copenaghen illuminato di notte visto dall\'alto, con la piazza del Municipio e le strade piene di luci',
    immagine: '/images/danimarca/copenaghen.jpg',
  },
]
