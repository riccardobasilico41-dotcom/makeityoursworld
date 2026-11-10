import type { Destinazione } from '@/lib/types'

// Tappe di "Croazia in 14 giorni" (src/content/viaggi/69-croazia-itinerario.md),
// viaggio fatto da Rick: tutte hanno visitataPersonalmente: true e miaEsperienza solo fattuale (dai giorni del viaggio) finché non arriva un ricordo dell'autore. Nessun nome
// di hotel, ristorante o operatore inventato. Prezzi indicativi 2026.

export const destinazioniCroazia: Destinazione[] = [
  {
    slug: 'zagabria',
    paeseSlug: 'croazia',
    ordine: 1,
    nome: 'Zagabria',
    tipologia: ['città', 'cultura'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Il nostro giro della Croazia con gli amici è partito da qui: un giorno a Zagabria, con il mercato di Dolac, il Museo delle Relazioni Interrotte e la sera i caffè di via Tkalčićeva, prima di prendere l'auto verso Plitvice.",
    introduzione:
      'La capitale, divisa tra la Città Alta medievale e la Città Bassa austroungarica, con caffè, musei e il mercato di Dolac. È il punto di partenza naturale per Plitvice.',
    percheAndarci: 'Per una Croazia continentale e mitteleuropea, diversa dalla costa.',
    cosaVedere: [
      'La chiesa di San Marco e la Città Alta',
      'La torre Lotrščak e il cannone di mezzogiorno',
      'Il mercato di Dolac',
      'Il Museo delle Relazioni Interrotte',
    ],
    cosaFare: ['Una sera nei caffè di via Tkalčićeva', 'Lo štrukli in una trattoria della Città Alta', 'Il mercatino di Natale a dicembre'],
    doveDormire: 'Città Bassa o vicino a piazza Jelačić: economico 50-80 €, medio 90-150 €, alto oltre 200 €.',
    comeArrivare:
      "L'aeroporto **Franjo Tuđman** è a circa 17 km dal centro, collegato da bus navetta fino alla stazione degli autobus e da taxi. La stazione ferroviaria centrale è nella Città Bassa, a un quarto d'ora a piedi da piazza Jelačić. In auto da Trieste si arriva in circa due ore e mezza, passando per la Slovenia; in città conviene lasciare l'auto in un parcheggio e muoversi a piedi, in tram e con la funicolare per la Città Alta, che parte da via Tomićeva.",
    comeSpostarsi: 'A piedi, in tram e con la funicolare per la Città Alta.',
    periodoMigliore: 'aprile-ottobre; dicembre per l\'Avvento.',
    costi:
      "Funicolare circa 0,66 € a corsa, Museo delle Relazioni Interrotte circa 7 €, Mirogoj gratuito. Budget indicativo al giorno a persona, con la doppia divisa in due, in giugno o settembre: basso 70-100 €, medio 130-200 €, alto oltre 300 €; a dicembre, con l'Avvento, gli alloggi salgono.",
    erroriDaEvitare: ['Saltarla del tutto per correre al mare'],
    luoghi: [
      {
        "nome": "Città Alta (Gornji grad)",
        "testo": "Il nucleo medievale su una collina, con la chiesa di San Marco dal tetto a tegole colorate, la torre Lotrščak (dove un cannone spara ogni giorno a mezzogiorno) e i vicoli della città vecchia.",
        "come": "Dalla Città Bassa a piedi o con la funicolare, tra le più brevi del mondo (66 metri di binario).",
        "quando": "Mattina o tardo pomeriggio. Il cannone spara a mezzogiorno.",
        "tempo": "2 ore",
        "costo": "vicoli liberi; funicolare circa 0,66 € a corsa (2026)",
        "lat": 45.81427,
        "lng": 15.97308,
        "consiglio": "Salire a piedi da via Tkalčićeva e scendere con la funicolare."
      },
      {
        "nome": "Cattedrale di Zagabria",
        "testo": "La cattedrale dell'Assunzione, sul colle di Kaptol, con le due guglie neogotiche che si vedono da tutta la città. Fu ricostruita dopo il terremoto del 1880 dall'architetto Hermann Bollé, lo stesso di Mirogoj. Dopo il terremoto del 2020 è in restauro e l'accesso può essere limitato.",
        "come": "A piedi da piazza Jelačić, cinque minuti in salita.",
        "quando": "Mattina, prima di salire alla Città Alta.",
        "tempo": "20 minuti",
        "lat": 45.81444,
        "lng": 15.97972
      },
      {
        "nome": "Chiesa di San Marco",
        "testo": "La chiesa simbolo della Città Alta, con il tetto di tegole colorate che disegnano gli stemmi del Regno di Croazia, Dalmazia e Slavonia e quello della città. Sulla piazza ci sono il Parlamento croato e il palazzo del governo.",
        "come": "In cima alla Città Alta, a piedi dalla funicolare o dalla Porta di Pietra. L'interno si vede di solito solo durante le funzioni.",
        "quando": "Mattina presto, con la piazza vuota e la luce sul tetto.",
        "tempo": "15 minuti",
        "costo": "gratuito",
        "lat": 45.81639,
        "lng": 15.97363
      },
      {
        "nome": "Torre Lotrščak",
        "testo": "Una torre del Duecento che difendeva l'ingresso sud della Città Alta. Ogni giorno a mezzogiorno dalla cima spara un cannone, una tradizione che dura dal 1877. Dal belvedere accanto, la passeggiata Strossmayer, si vede tutta la Città Bassa.",
        "come": "All'arrivo della funicolare, in cima a via Tomićeva.",
        "quando": "Poco prima di mezzogiorno, per il colpo di cannone.",
        "tempo": "30 minuti",
        "lat": 45.81463,
        "lng": 15.97325
      },
      {
        "nome": "Porta di Pietra",
        "testo": "L'unica porta rimasta delle mura medievali della Città Alta. Sotto la volta c'è un'immagine della Madonna sopravvissuta all'incendio del 1731, davanti alla quale gli zagabresi accendono candele e si fermano a pregare.",
        "come": "A piedi da via Radićeva, salendo da piazza Jelačić.",
        "quando": "Sera, con le candele accese.",
        "tempo": "15 minuti",
        "costo": "gratuito",
        "lat": 45.81572,
        "lng": 15.97528,
        "consiglio": "È un luogo di preghiera: niente foto con il flash e voce bassa."
      },
      {
        "nome": "Mercato di Dolac",
        "testo": "Il mercato all'aperto della città, sopra piazza Jelačić, con banchi di frutta e verdura sotto gli ombrelloni rossi e formaggi nel mercato coperto sotto.",
        "come": "A piedi dal centro, a pochi minuti da piazza Jelačić.",
        "quando": "Mattina, fino a metà giornata, quando i banchi sono pieni.",
        "tempo": "1 ora",
        "costo": "gratuito",
        "lat": 45.81417,
        "lng": 15.9775,
        "consiglio": "Provare il formaggio fresco di panna (sir i vrhnje) con il pane caldo."
      },
      {
        "nome": "Piazza Ban Jelačić",
        "testo": "La piazza principale, tra la Città Bassa e la Città Alta, con la statua equestre del bano Jelačić e la fontana Manduševac. Qui passano quasi tutti i tram ed è il punto d'incontro della città.",
        "come": "Tram da tutta la città; dalla stazione centrale circa 15 minuti a piedi.",
        "quando": "Sempre; a dicembre ospita una parte del mercatino dell'Avvento.",
        "tempo": "15 minuti",
        "costo": "gratuito",
        "lat": 45.81306,
        "lng": 15.97722
      },
      {
        "nome": "Via Tkalčićeva",
        "testo": "Una via curva in leggera salita, nata sul letto di un torrente interrato, piena di caffè e bar all'aperto. È il posto dove gli zagabresi bevono il caffè la mattina e l'aperitivo la sera.",
        "come": "A piedi da piazza Jelačić, passando dal mercato di Dolac.",
        "quando": "Sera.",
        "tempo": "1-2 ore",
        "costo": "gratuito",
        "lat": 45.81913,
        "lng": 15.97641
      },
      {
        "nome": "Museo delle Relazioni Interrotte",
        "testo": "Un piccolo museo con oggetti donati da persone di tutto il mondo, ciascuno con la storia di una relazione finita. Divertente e a tratti commovente.",
        "come": "A piedi dalla Città Alta, in via dei Santi Cirillo e Metodio.",
        "quando": "Mattina o pomeriggio, evitando il fine settimana.",
        "tempo": "1 ora",
        "costo": "circa 7 € (2026)",
        "orari": "Tutti i giorni: 9-21 in inverno, 10-22 in estate.",
        "lat": 45.81517,
        "lng": 15.97358,
        "url": "https://brokenships.com/",
        "consiglio": "Il bello sono le storie scritte dai donatori accanto agli oggetti: prevedere il tempo per leggerle."
      },
      {
        "nome": "Cimitero di Mirogoj",
        "testo": "Il cimitero monumentale della città, aperto nel 1876, con l'edificio principale disegnato dall'architetto Hermann Bollé. Le lunghe arcate con le cupole, costruite tra il 1879 e il 1929, racchiudono tombe di ogni fede, una accanto all'altra. È uno dei posti più belli e tranquilli di Zagabria, e pochi turisti ci arrivano.",
        "come": "Con il bus ZET 106 dal capolinea di Kaptol, vicino alla cattedrale (circa ogni 20 minuti negli orari di apertura), oppure a piedi in salita.",
        "quando": "Mattina o tardo pomeriggio; a inizio novembre è pieno di lumini.",
        "tempo": "1 ora",
        "costo": "Gratuito.",
        "lat": 45.83569,
        "lng": 15.98444,
        "consiglio": "Restare sui viali e abbassare la voce: è un cimitero in uso."
      },
      {
        "nome": "Museo Mimara",
        "testo": "La collezione donata alla città da Ante Topić Mimara, in un grande palazzo ottocentesco della Città Bassa: dipinti europei, vetri, tappeti e oggetti d'arte dall'antichità al Novecento. È il museo d'arte più vario della città.",
        "come": "In piazza Roosevelt, lungo il «ferro di cavallo verde» dei parchi della Città Bassa; tram fino alla piazza.",
        "quando": "Pomeriggio o giornata di pioggia.",
        "tempo": "1 ora e mezza",
        "lat": 45.80833,
        "lng": 15.96694,
        "url": "https://www.mimara.hr/"
      },
      {
        "nome": "Museo croato d'arte naïf",
        "testo": "Un piccolo museo nella Città Alta dedicato alla pittura naïf croata, nata negli anni Trenta tra i contadini di Hlebine, con Ivan Generalić e i pittori su vetro. Colori forti, villaggi, animali e scene di campagna.",
        "come": "A pochi passi dalla torre Lotrščak e dalla funicolare.",
        "quando": "Mattina, nei giorni feriali.",
        "tempo": "45 minuti",
        "orari": "Da lunedì a venerdì 9-17, sabato 10-14.",
        "lat": 45.81542,
        "lng": 15.97333,
        "url": "https://www.hmnu.hr/"
      },
      {
        "nome": "Parco Maksimir",
        "testo": "Il parco più antico della città, aperto nel 1794, con boschi di querce, laghetti, un belvedere e lo zoo. A venti minuti di tram dal centro, è il posto dove gli zagabresi passano la domenica.",
        "come": "Tram da piazza Jelačić in direzione est fino a Maksimir.",
        "quando": "Mattina o pomeriggio, con il bel tempo.",
        "tempo": "2 ore",
        "costo": "parco gratuito, zoo con biglietto",
        "lat": 45.82964,
        "lng": 16.02047
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mercato di Dolac al mattino, poi la cattedrale.",
          "Città Alta dalla Porta di Pietra: chiesa di San Marco e torre Lotrščak entro mezzogiorno, per il cannone.",
          "Pranzo con štrukli, poi il Museo delle Relazioni Interrotte.",
          "Discesa in funicolare e aperitivo in via Tkalčićeva."
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come sopra.",
          "Giorno 2 mattina: cimitero di Mirogoj con il bus da Kaptol.",
          "Pomeriggio: Museo Mimara e i parchi della Città Bassa, oppure il Museo d'arte naïf.",
          "Sera: cena nella Città Alta e passeggiata Strossmayer con la città illuminata."
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1 e 2: come sopra.",
          "Giorno 3: Samobor in mattinata, con la kremšnita, oppure Parco Maksimir.",
          "Partenza nel pomeriggio verso Plitvice, a circa due ore d'auto."
        ]
      }
    ],
    zone: [
      {
        "nome": "Città Bassa",
        "perChi": "chi vuole stazione e tram",
        "testo": "Alberghi e appartamenti a piedi da tutto; la sera il centro è vivace e un po' rumoroso.",
        "fascia": "60-130 €"
      },
      {
        "nome": "Vicino a piazza Jelačić",
        "perChi": "chi ha poco tempo",
        "testo": "Tutto raggiungibile a piedi; i prezzi sono un po' più alti.",
        "fascia": "90-150 €"
      }
    ],
    sapori: [
      {
        nome: "Štrukli",
        testo: "Pasta ripiena di formaggio fresco, lessata o al forno, il piatto più tipico della città."
      },
      {
        nome: "Purica s mlincima",
        testo: "Tacchino arrosto con pasta sottile, un piatto della cucina di casa croata."
      },
      {
        nome: "Kremšnita",
        testo: "Dolce di crema e panna tra due sfoglie, tipico di Samobor, vicino alla città."
      }
    ],
    attenzioni: [
      "In taxi, usare le app (Bolt, Uber) o le auto con tariffa esposta: alla stazione i prezzi variano.",
      "A Natale i prezzi degli alloggi salgono: prenotare in anticipo.",
      "Nei fine settimana del mercatino d'Avvento il centro si affolla molto: meglio un giorno feriale."
    ],
    gite: [
      {
        "nome": "Laghi di Plitvice",
        "distanza": "circa 2 ore in auto",
        "come": "In auto verso sud; in alternativa bus dalla stazione autobus di Zagabria. Biglietto online con fascia oraria di ingresso.",
        "testo": "Sedici laghi a terrazze collegati da cascate, patrimonio UNESCO. In giornata si fa, ma conviene dormire vicino al parco per entrare all'apertura. Biglietto 40 € da giugno a settembre, 23 € in aprile, maggio e ottobre."
      },
      {
        "nome": "Samobor",
        "distanza": "circa 25 km",
        "come": "In auto o con i bus dalla stazione di Zagabria.",
        "testo": "Una cittadina ottocentesca con il fiume, la piazza colorata e le pasticcerie dove si mangia la kremšnita, il dolce di crema tipico del posto. Sopra ci sono le rovine del castello e i sentieri delle colline."
      },
      {
        "nome": "Varaždin",
        "distanza": "circa 80 km",
        "come": "In auto in autostrada verso nord, circa un'ora; anche in treno o bus.",
        "testo": "L'antica capitale barocca, con il castello bianco circondato da bastioni d'erba, i palazzi nobiliari e un cimitero-giardino con le siepi potate ad arte. A fine agosto ospita il festival di strada Špancirfest."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono per Zagabria?",
        "risposta": "Un giorno per Città Alta, Dolac e i musei principali; due per aggiungere Mirogoj, la Città Bassa e una sera tranquilla in via Tkalčićeva."
      },
      {
        "domanda": "Vale la pena fermarsi a Zagabria prima della costa?",
        "risposta": "Sì, almeno una notte: è una città mitteleuropea molto diversa dalla Dalmazia e la tappa naturale prima di Plitvice."
      },
      {
        "domanda": "Come si va dall'aeroporto al centro di Zagabria?",
        "risposta": "L'aeroporto Franjo Tuđman è a circa 17 km: ci sono il bus navetta per la stazione degli autobus e i taxi. In taxi conviene usare le app o le auto con tariffa esposta."
      },
      {
        "domanda": "Quando c'è il mercatino di Natale a Zagabria?",
        "risposta": "Durante l'Avvento, da fine novembre all'inizio di gennaio, in piazza Jelačić e in altre piazze del centro. Nei fine settimana è molto affollato e gli alloggi salgono di prezzo."
      },
      {
        "domanda": "Serve l'auto a Zagabria?",
        "risposta": "No: il centro si gira a piedi, con tram e funicolare. L'auto serve solo per ripartire verso Plitvice e la costa."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'La chiesa di San Marco con il tetto a piastrelle colorate a Zagabria',
    immagine: '/images/viaggi/croazia-itinerario/giorno-01-zagabria.jpg',
  },
  {
    slug: 'plitvice',
    paeseSlug: 'croazia',
    ordine: 2,
    nome: 'Laghi di Plitvice',
    tipologia: ['parco nazionale', 'laghi', 'cascate'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci siamo stati nel giro della Croazia con gli amici: il primo pomeriggio i laghi inferiori fino alla Veliki slap, e la mattina dopo, all'apertura, i laghi superiori con il battello sul lago Kozjak.",
    introduzione:
      'Sedici laghi a terrazze collegati da cascate e barriere di travertino, attraversati da passerelle di legno, nel parco nazionale più antico della Croazia, patrimonio UNESCO dal 1979.',
    percheAndarci: 'Per le cascate e i colori dei laghi, da vedere all\'apertura.',
    cosaVedere: ['La Veliki slap, la cascata più alta (78 m)', 'I laghi inferiori e il canyon', 'I laghi superiori e il lago Kozjak'],
    cosaFare: ['Entrare all\'apertura dall\'ingresso 2 per i laghi superiori', 'Fare i laghi inferiori nel tardo pomeriggio'],
    doveDormire: 'Pensioni e camere a Mukinje, Rastovača e Grabovac (60-120 €); pochi hotel dentro il parco.',
    comeArrivare:
      "Il parco è sulla strada statale D1, a circa 2 ore di auto sia da Zagabria sia da Zara. Gli autobus di linea tra Zagabria e la costa dalmata si fermano agli ingressi 1 e 2. I parcheggi degli ingressi sono aperti 7-17 e costano 2 € l'ora da giugno a settembre, 1,50 € l'ora in primavera e autunno. Il biglietto va comprato online con la fascia d'ingresso e convalidato all'ingresso scelto; conviene dormire in uno dei paesi intorno al parco ed entrare all'apertura.",
    comeSpostarsi: 'A piedi sulle passerelle, battello elettrico sul lago Kozjak e trenini panoramici inclusi nel biglietto.',
    periodoMigliore: 'maggio-giugno e settembre-ottobre; luglio-agosto molto affollati.',
    costi:
      "Biglietto giornaliero 2026: 40 € da giugno a settembre (25 € dopo le 16 in giugno-agosto e dopo le 15 a settembre), 23 € in aprile, maggio e ottobre, 10 € da novembre a marzo; biglietto di due giorni 60 €, 39 € o 15 € secondo la stagione. Battello e trenini sono compresi. Budget al giorno a persona, con la doppia divisa in due: basso 70-100 €, medio 130-200 €; una pensione vicino agli ingressi costa circa 60-120 € a notte.",
    erroriDaEvitare: [
      'Arrivare a metà mattina in alta stagione',
      'Non prenotare online la fascia d\'ingresso',
      'Pensare di fare il bagno: è vietato',
    ],
    luoghi: [
      {
        "nome": "Laghi superiori e Kozjak",
        "testo": "Sedici laghi collegati da cascate su terrazze di travertino, con passerelle di legno sull'acqua turchese. Patrimonio UNESCO dal 1979.",
        "come": "Ingresso 2 per i laghi superiori. Sentieri segnati con lettere (A-K) e battello elettrico sul Kozjak incluso nel biglietto.",
        "quando": "All'apertura o dopo le 15, per evitare le ore dei pullman. Il periodo più verde è tra maggio e giugno; in autunno i colori sono più intensi.",
        "tempo": "4-6 ore per un percorso completo",
        "costo": "40 € da giugno a settembre (25 € dopo le 16 in giugno-agosto e dopo le 15 in settembre), 23 € in aprile, maggio e ottobre, 10 € da novembre a marzo (2026). Comprare solo sul sito ufficiale.",
        "url": "https://np-plitvicka-jezera.hr/en/",
        "consiglio": "In alta stagione conviene comprare il biglietto online in anticipo: alle casse può esaurirsi. Va convalidato all'ingresso scelto al momento dell'acquisto.",
        "orari": "Aperto tutti i giorni dell'anno, con orari che cambiano a seconda della stagione. A novembre 2026 ingressi 1 e 2 aperti 8-15 con biglietteria fino alle 13; battello sul Kozjak 8-16 sulla tratta breve, trenini ogni 30 minuti.",
        "lat": 44.88467,
        "lng": 15.60956
      },
      {
        "nome": "Veliki slap",
        "testo": "La cascata più alta del parco, circa 78 metri, alla fine dei laghi inferiori. Si vede dalla passerella in basso o dal sentiero in alto.",
        "come": "Ingresso 1 per i laghi inferiori e la Veliki slap, a piedi con scale.",
        "quando": "Mattina presto o fine pomeriggio.",
        "tempo": "1 ora",
        "consiglio": "Un'ottima ultima tappa: poi si risale con il trenino panoramico.",
        "costo": "compresa nel biglietto del parco",
        "lat": 44.90254,
        "lng": 15.6079,
        "url": "https://np-plitvicka-jezera.hr/en/"
      },
      {
        "nome": "Laghi inferiori e canyon",
        "testo": "Un tratto più selvaggio e meno affollato, con pareti di roccia, grotte e cascate che escono dal calcare. Le passerelle passano a pelo d'acqua tra i laghi Milanovac, Gavanovac e Kaluđerovac, fino al canyon dove i laghi finiscono nella Korana. Dal sentiero in alto si guarda tutta la scala di laghi dall'alto, la vista delle cartoline.",
        "come": "A piedi dall'ingresso 1 lungo il sentiero indicato.",
        "quando": "Mattina.",
        "tempo": "2 ore",
        "consiglio": "Scarpe con suola antiscivolo: le passerelle sono bagnate.",
        "costo": "compresi nel biglietto del parco",
        "lat": 44.90116,
        "lng": 15.61076,
        "url": "https://np-plitvicka-jezera.hr/en/"
      },
      {
        "nome": "Galovac",
        "testo": "Uno dei laghi superiori più fotografati: l'acqua scende da una serie di gradini di travertino in decine di piccole cascate, e le passerelle passano proprio in mezzo. È il punto in cui si capisce come i laghi si siano formati, barriera dopo barriera.",
        "come": "Dall'ingresso 2 con il trenino fino alla stazione St3, poi a piedi in discesa lungo il percorso dei laghi superiori (programma E).",
        "quando": "Al mattino, quando la luce entra tra i faggi e i gruppi non sono ancora saliti.",
        "tempo": "1 ora",
        "costo": "compreso nel biglietto del parco",
        "lat": 44.87489,
        "lng": 15.60592,
        "url": "https://np-plitvicka-jezera.hr/en/"
      },
      {
        "nome": "Veliki Prštavac",
        "testo": "La cascata più scenografica dei laghi superiori, dove il Galovac si getta nel lago sottostante con un salto unico. Accanto c'è il Mali Prštavac, più piccolo. Le passerelle passano ai piedi del salto e sopra il bordo.",
        "come": "Lungo il percorso dei laghi superiori, poco sotto il Galovac.",
        "quando": "In primavera, con l'acqua del disgelo, la portata è massima.",
        "tempo": "30 minuti",
        "costo": "compreso nel biglietto del parco",
        "lat": 44.8779,
        "lng": 15.60843,
        "url": "https://np-plitvicka-jezera.hr/en/"
      },
      {
        "nome": "Prošćansko jezero",
        "testo": "Il lago più alto del sistema, lungo e circondato dal bosco, da cui comincia la scala dei sedici laghi. Ha meno cascate degli altri ma è il più silenzioso: qui le passerelle lasciano spazio a un sentiero sulla riva.",
        "come": "Dall'ingresso 2 con il trenino fino alla stazione St3 (Labudovac), poi a piedi.",
        "quando": "Al mattino presto, quando sulla superficie c'è ancora la nebbia.",
        "tempo": "1 ora",
        "costo": "compreso nel biglietto del parco",
        "lat": 44.86158,
        "lng": 15.59689,
        "url": "https://np-plitvicka-jezera.hr/en/"
      },
      {
        "nome": "Sastavci",
        "testo": "Le cascate in fondo ai laghi inferiori, dove l'acqua di tutto il sistema si getta nel canyon e nasce il fiume Korana. Sono a pochi passi dalla Veliki slap, ma molto meno affollate.",
        "come": "Dall'ingresso 1, scendendo nel canyon lungo il percorso dei laghi inferiori (programmi A e B).",
        "quando": "Al mattino o nel tardo pomeriggio, insieme alla Veliki slap.",
        "tempo": "30 minuti",
        "costo": "compreso nel biglietto del parco",
        "lat": 44.90283,
        "lng": 15.60927,
        "url": "https://np-plitvicka-jezera.hr/en/"
      },
      {
        "nome": "Grotta Šupljara",
        "testo": "Una grotta nella parete del canyon sopra il lago Kaluđerovac. Si entra dal sentiero in basso e si risale al suo interno per una scalinata fino al bordo del canyon, con la vista sui laghi inferiori.",
        "come": "Lungo il percorso dei laghi inferiori dall'ingresso 1: è una deviazione breve ma ripida.",
        "quando": "Quando il canyon è pieno di gente: è uno dei pochi punti tranquilli.",
        "tempo": "20-30 minuti",
        "costo": "compresa nel biglietto del parco",
        "lat": 44.89995,
        "lng": 15.61179,
        "url": "https://np-plitvicka-jezera.hr/en/",
        "consiglio": "Dentro gli scalini sono umidi: servono scarpe con buona suola."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: ingresso 2 all'apertura, trenino fino a St3 e discesa a piedi lungo i laghi superiori: Prošćansko jezero, Galovac e Veliki Prštavac",
          "Tarda mattinata: battello elettrico sul Kozjak fino alla tratta dei laghi inferiori",
          "Primo pomeriggio: pranzo al sacco o al punto ristoro vicino al battello",
          "Pomeriggio: canyon dei laghi inferiori, grotta Šupljara, Veliki slap e Sastavci",
          "Fine giornata: risalita sul bordo est del canyon e trenino per tornare all'ingresso (è il programma H del parco)"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1, pomeriggio: ingresso 1 dopo le 15-16 con il biglietto ridotto, laghi inferiori, Veliki slap e Sastavci (programma A)",
          "Giorno 2, mattina: ingresso 2 all'apertura, laghi superiori con Galovac e Prošćansko jezero, battello sul Kozjak (programma E)",
          "Giorno 2, pomeriggio: partenza per Zara o Zagabria, con sosta a Rastoke"
        ]
      }
    ],
    zone: [
      {
        "nome": "Mukinje e Rastovača",
        "perChi": "chi vuole stare vicino",
        "testo": "Pensioni e camere vicino all'ingresso, comode per la mattina presto.",
        "fascia": "60-120 €"
      },
      {
        "nome": "Grabovac",
        "perChi": "chi cerca prezzi più bassi",
        "testo": "Più economico, in auto a pochi minuti dall'ingresso.",
        "fascia": "60-120 €"
      },
      {
        "nome": "Hotel del parco",
        "perChi": "Chi vuole entrare all'alba senza prendere l'auto",
        "testo": "I pochi hotel gestiti dal parco, come l'Hotel Jezero, sono vicino all'ingresso 2. Sono comodi più che belli e si prenotano dal sito del parco; vicino ci sono anche i campeggi Korana e Borje."
      }
    ],
    gite: [
      {
        "nome": "Rastoke (Slunj)",
        "distanza": "circa 30 km a nord, 30 minuti in auto",
        "come": "In auto sulla statale D1 verso Zagabria; si lascia l'auto a Slunj e si gira a piedi.",
        "testo": "Un villaggio di vecchi mulini ad acqua costruito sopra le cascate dove lo Slunjčica si getta nella Korana. Sembra una Plitvice in miniatura con le case in mezzo: si visita in un'ora, buona sosta sulla strada da o per Zagabria."
      },
      {
        "nome": "Grotte di Barać",
        "distanza": "circa 20 km, 25 minuti in auto",
        "come": "In auto verso Rakovica e poi la strada per le grotte. La visita è guidata.",
        "testo": "Grotte carsiche con stalattiti, sale e colonie di pipistrelli, visitabili con una guida lungo un percorso attrezzato. Restano fresche anche d'estate: serve una giacca."
      }
    ],
    sapori: [
      {
        nome: "Agnello alla brace",
        testo: "Si prepara nei ristoranti lungo la strada per il parco, con patate."
      },
      {
        nome: "Trota",
        testo: "Dei fiumi della zona, cotta alla griglia o fritta."
      },
      {
        nome: "Štrukli e crema di formaggio",
        testo: "Si trovano nelle trattorie vicine all'ingresso."
      }
    ],
    attenzioni: [
      "Il bagno nei laghi è vietato e vigilato: non uscire dai sentieri.",
      "In estate i biglietti possono esaurirsi: comprarli online prima di partire.",
      "Portare cibo e acqua: dentro i servizi sono pochi e costosi."
    ],
    faq: [
      {
        "domanda": "Quanto tempo serve per visitare Plitvice?",
        "risposta": "Una giornata intera basta per laghi superiori e inferiori con il programma H (4-6 ore). Chi vuole vederli con calma e con poca gente divide la visita in due mezze giornate, con il biglietto di due giorni."
      },
      {
        "domanda": "Bisogna prenotare il biglietto di Plitvice?",
        "risposta": "Sì, da giugno a settembre conviene comprarlo online sul sito del parco con la fascia oraria: in alta stagione alle casse può esaurirsi. Il biglietto vale per l'ingresso scelto."
      },
      {
        "domanda": "Meglio l'ingresso 1 o l'ingresso 2?",
        "risposta": "L'ingresso 1 è più vicino alla Veliki slap e ai laghi inferiori, l'ingresso 2 ai laghi superiori e al battello. Al mattino presto conviene il 2; nel pomeriggio l'1 per vedere le cascate con la luce bassa."
      },
      {
        "domanda": "Quanto costa l'ingresso a Plitvice nel 2026?",
        "risposta": "40 € da giugno a settembre (25 € nel pomeriggio), 23 € in aprile, maggio e ottobre e 10 € da novembre a marzo. Battello e trenini sono compresi."
      },
      {
        "domanda": "Si può fare il bagno nei laghi di Plitvice?",
        "risposta": "No, il bagno è vietato in tutto il parco ed è controllato. Anche al Krka è vietato sotto le cascate dal 2021: per nuotare bisogna aspettare il mare."
      },
      {
        "domanda": "Plitvice si può visitare in inverno?",
        "risposta": "Sì, il parco è aperto tutto l'anno e da novembre a marzo il biglietto costa 10 €. Gli orari sono più corti e con neve o ghiaccio possono esserci percorsi chiusi: controllare gli avvisi sul sito del parco."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'Una passerella di legno accanto a una cascata e all\'acqua turchese dei laghi di Plitvice',
    immagine: '/images/viaggi/croazia-itinerario/giorno-03-plitvice.jpg',
  },
  {
    slug: 'zara-krka-sebenico',
    paeseSlug: 'croazia',
    ordine: 3,
    nome: 'Zara, Krka e Sebenico',
    tipologia: ['città storiche', 'parco nazionale', 'mare'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci siamo stati nel giro della Croazia con gli amici: un giorno a Zara, tra l'Organo marino e il Saluto al Sole, poi il Krka, salendo in battello da Skradin fino allo Skradinski buk, e il pomeriggio a Sebenico, dove abbiamo dormito.",
    introduzione:
      'La Dalmazia settentrionale: Zara con il centro romano e veneziano e le installazioni sul lungomare, le cascate di travertino del Parco Nazionale del Krka e Sebenico con la cattedrale di San Giacomo.',
    percheAndarci: 'Per il tramonto all\'Organo marino, le cascate del Krka e due città storiche meno affollate di Spalato e Dubrovnik.',
    cosaVedere: [
      'L\'Organo marino e il Saluto al Sole a Zara',
      'La chiesa di San Donato e il foro romano',
      'Lo Skradinski buk e il monastero di Visovac nel Krka',
      'La Cattedrale di San Giacomo a Sebenico',
    ],
    cosaFare: ['Il battello da Skradin alle cascate', 'Una giornata alle Kornati o a Ugljan da Zara'],
    doveDormire: 'Appartamenti nei centri storici (80-150 €); hotel a Borik, vicino a Zara.',
    comeArrivare:
      "L'aeroporto di **Zara** ha voli stagionali dall'Italia e dal resto d'Europa ed è a pochi chilometri dalla città. In auto da Plitvice si arriva in circa due ore, in parte sull'autostrada A1 a pagamento attraverso il Velebit; con la bora forte il tratto può essere chiuso ai mezzi alti o rallentato. Da Zara a Skradin, ingresso della Krka, c'è circa un'ora d'auto, da Skradin a Sebenico una ventina di minuti. Il centro storico di Zara è pedonale: meglio un alloggio con parcheggio o i parcheggi a pagamento fuori dalle mura.",
    periodoMigliore: 'maggio-giugno e settembre.',
    costi:
      "Krka 40 € da giugno a settembre (30 € dopo le 15), 20 € in aprile, maggio e ottobre, 7 € da novembre a marzo (2026); fortezza di San Michele circa 11,50 €, combinato delle fortezze circa 15 €; campanile e San Donato pochi euro. Budget indicativo al giorno a persona, con la doppia divisa in due, in giugno o settembre: basso 70-100 €, medio 130-200 €, alto oltre 300 €.",
    erroriDaEvitare: ['Aspettarsi di fare il bagno sotto le cascate del Krka: è vietato dal 2021'],
    luoghi: [
      {
        "nome": "Zara: Organo marino e Saluto al Sole",
        "testo": "Due installazioni sul lungomare della città vecchia: l'Organo marino suona con le onde che entrano in tubi sotto i gradini, accanto un disco di vetro cattura la luce del tramonto. Sono opera dell'architetto Nikola Bašić.",
        "come": "A piedi dalla città vecchia, lungo la Riva.",
        "quando": "Al tramonto, quando suona e illumina.",
        "tempo": "1 ora",
        "costo": "gratuito",
        "orari": "Sempre accessibili.",
        "lat": 44.11722,
        "lng": 15.22,
        "consiglio": "Sedersi sui gradini: il suono cambia con il vento e le onde."
      },
      {
        "nome": "Città vecchia di Zara",
        "testo": "Una penisola con il Foro romano, la rotonda di San Donato (IX secolo) e chiese romaniche. Molto danneggiata nella Seconda guerra mondiale e ricostruita.",
        "come": "A piedi dai parcheggi esterni alle mura.",
        "quando": "Mattina o sera.",
        "tempo": "2 ore",
        "costo": "centro libero; San Donato con biglietto di pochi euro",
        "lat": 44.11555,
        "lng": 15.22447,
        "consiglio": "Il mercato del pesce e della frutta, vicino alle mura, è una buona colazione."
      },
      {
        "nome": "Cattedrale e campanile di Sant'Anastasia, Zara",
        "testo": "La cattedrale romanica più grande della Dalmazia, con la facciata a rosoni e loggette cieche. Il campanile, completato nell'Ottocento, si sale per una scala stretta fino alla cima, da cui si vedono i tetti della penisola, il porto e le isole davanti.",
        "come": "Accanto al Foro, a piedi dalla città vecchia.",
        "quando": "Mattina, prima del caldo.",
        "tempo": "45 minuti",
        "costo": "campanile qualche euro, spesso solo in contanti",
        "lat": 44.11611,
        "lng": 15.22444
      },
      {
        "nome": "Porta di Terraferma e piazza delle Cinque Fontane",
        "testo": "La porta monumentale del Cinquecento, con il leone di San Marco, da cui si entrava in città dalla terraferma. Poco più in là c'è la piazza delle Cinque Fontane, con i cinque pozzi veneziani costruiti sopra una cisterna durante gli assedi ottomani, e il parco della Regina Jelena sui bastioni.",
        "come": "A piedi dal porticciolo di Foša, sul lato sud della penisola.",
        "quando": "Qualsiasi momento; la sera con le luci.",
        "tempo": "30 minuti",
        "costo": "gratuito",
        "lat": 44.1121,
        "lng": 15.22845
      },
      {
        "nome": "Museo del vetro antico, Zara",
        "testo": "Un museo raccolto in un palazzo ottocentesco, con la più grande collezione di vetro romano della regione: balsamari, coppe e urne trovati nelle necropoli della Dalmazia. Si vedono anche dimostrazioni di soffiatura del vetro.",
        "come": "A piedi dalla città vecchia, appena fuori dalle mura sul lato del porto di Jazine.",
        "quando": "Pomeriggio caldo o giornata di pioggia.",
        "tempo": "1 ora",
        "lat": 44.11433,
        "lng": 15.22953
      },
      {
        "nome": "Cascate di Skradinski buk (Krka)",
        "testo": "Una serie di cascate e vasche su terrazze di travertino nel Parco Nazionale della Krka. Si cammina su passerelle e si prende un battello da Skradin.",
        "come": "In auto da Sebenico. Si parte dall'ingresso di Skradin con battello incluso nel biglietto.",
        "quando": "Mattina presto o fine giornata. Maggio-giugno e settembre.",
        "tempo": "3-4 ore",
        "costo": "40 € da giugno a settembre, 20 € in aprile, maggio e ottobre, 7 € da novembre a marzo (2026); dal 1° aprile al 31 ottobre comprende il battello da Skradin.",
        "lat": 43.80573,
        "lng": 15.96318,
        "url": "https://np-krka.hr/en/",
        "consiglio": "Il bagno ai piedi delle cascate non è più consentito."
      },
      {
        "nome": "Visovac e Roški slap (Krka)",
        "testo": "Più a monte dello Skradinski buk il fiume si allarga in un lago con l'isolotto di Visovac e il suo monastero francescano tra i cipressi. Ancora più su c'è il Roški slap, una cascata larga preceduta da una serie di piccole cascate dette «collane», con vecchi mulini restaurati.",
        "come": "In barca con le escursioni del parco dallo Skradinski buk, oppure in auto fino agli ingressi di Roški slap e del belvedere di Visovac.",
        "quando": "Da aprile a ottobre, quando girano le barche; molto meno affollato dello Skradinski buk.",
        "tempo": "mezza giornata",
        "lat": 43.90375,
        "lng": 15.97507,
        "url": "https://www.npkrka.hr/"
      },
      {
        "nome": "Skradin",
        "testo": "Il piccolo paese sul fiume da cui partono i battelli per lo Skradinski buk, con il porticciolo pieno di barche a vela e le case in pietra in salita. Fuori dagli orari dei battelli è tranquillo, e i ristoranti sono noti per il risotto di Skradin, cotto per ore.",
        "come": "In auto da Zara in circa un'ora, da Sebenico in circa 20 minuti; parcheggio a pagamento vicino al porticciolo.",
        "quando": "Primo battello del mattino; dopo le 11 le passerelle dello Skradinski buk si intasano.",
        "tempo": "1 ora in paese",
        "costo": "gratuito",
        "lat": 43.81667,
        "lng": 15.92222
      },
      {
        "nome": "Cattedrale di San Giacomo, Sebenico",
        "testo": "Cattedrale rinascimentale in pietra, iscritta all'UNESCO, costruita senza malta con blocchi incastrati. Sul fregio esterno corrono oltre 70 volti scolpiti.",
        "come": "A piedi dal centro storico.",
        "quando": "Mattina.",
        "tempo": "45 minuti",
        "costo": "biglietto di pochi euro",
        "lat": 43.73564,
        "lng": 15.88912,
        "consiglio": "Guardare i volti sulle absidi: si pensa ritraggano persone della Dalmazia dell'epoca."
      },
      {
        "nome": "Fortezza di San Michele, Sebenico",
        "testo": "La fortezza medievale sopra il centro storico, da cui si vedono i tetti, il canale di Sant'Antonio e le isole. Dentro le mura c'è un palco all'aperto dove d'estate si tengono concerti.",
        "come": "A piedi dalla cattedrale, salendo per i vicoli di pietra, una decina di minuti.",
        "quando": "Tardo pomeriggio, per la luce sulle isole.",
        "tempo": "45 minuti",
        "costo": "circa 11,50 €; combinato con le altre fortezze della città circa 15 € (2026)",
        "lat": 43.73757,
        "lng": 15.88961
      },
      {
        "nome": "Fortezza Barone, Sebenico",
        "testo": "Una fortezza costruita nel Seicento sul colle sopra la città per difenderla dagli ottomani. È più alta di San Michele e la vista è più larga, fino all'arcipelago; dentro ci sono una piccola esposizione e un bar sulla terrazza.",
        "come": "A piedi in salita dal centro, circa 15 minuti, o in auto.",
        "quando": "Tramonto.",
        "tempo": "45 minuti",
        "costo": "compresa nel biglietto combinato delle fortezze",
        "lat": 43.7373,
        "lng": 15.8964
      },
      {
        "nome": "Fortezza di San Nicola, Sebenico",
        "testo": "Una fortezza veneziana del Cinquecento su un isolotto all'ingresso del canale di Sant'Antonio, a forma di triangolo puntato verso il mare. Fa parte delle opere di difesa veneziane iscritte all'UNESCO.",
        "come": "Si vede dalla passeggiata lungo il canale o dalle barche; le visite all'interno sono limitate e vanno verificate sul posto.",
        "quando": "Pomeriggio, entrando o uscendo in barca dal canale.",
        "tempo": "1 ora",
        "lat": 43.72161,
        "lng": 15.85453
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: città vecchia di Zara, Foro, San Donato e campanile di Sant'Anastasia.",
          "Pranzo in città, poi Porta di Terraferma e piazza delle Cinque Fontane.",
          "Pomeriggio: Museo del vetro antico o un giro in barcarola nel porto.",
          "Tramonto all'Organo marino e al Saluto al Sole."
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Zara come sopra.",
          "Giorno 2: a Skradin per il primo battello, Skradinski buk sulle passerelle.",
          "Pomeriggio: Sebenico, cattedrale di San Giacomo e fortezza di San Michele al tramonto."
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1 e 2: come sopra, dormendo a Sebenico la seconda notte.",
          "Giorno 3: Visovac e Roški slap nella parte alta della Krka, più tranquilla.",
          "In alternativa: una giornata in barca alle Kornati da Zara."
        ]
      }
    ],
    zone: [
      {
        "nome": "Zara città vecchia",
        "perChi": "chi vuole il centro",
        "testo": "Alloggi in pietra a pochi passi da tutto; di notte è vivace nella zona della Riva.",
        "fascia": "80-150 €"
      },
      {
        "nome": "Sebenico",
        "perChi": "chi vuole raggiungere la Krka",
        "testo": "Più tranquilla di Spalato, comoda per l'autostrada e il parco.",
        "fascia": "80-150 €"
      },
      {
        "nome": "Borik, Zara",
        "perChi": "chi viaggia in auto e vuole il mare",
        "testo": "Zona di hotel sul mare a nord-ovest della città, con spiagge e parcheggio; la città vecchia è a una ventina di minuti in bus o in auto."
      }
    ],
    sapori: [
      {
        nome: "Maraschino",
        testo: "Liquore di ciliegie marasche tipico di Zara."
      },
      {
        nome: "Paška janjetina",
        testo: "Agnello dell'isola di Pag, arrosto."
      },
      {
        nome: "Sir iz mišine",
        testo: "Formaggio di Pag stagionato."
      },
      {
        nome: "Pesce di Sebenico",
        testo: "Cucina semplice di mare nelle konobe del porto."
      }
    ],
    attenzioni: [
      "Alla Krka non si può più fare il bagno: chiedere agli sportelli se ci sono limitazioni.",
      "In luglio e agosto le cascate si riempiono: arrivare all'apertura.",
      "I parcheggi vicino alla città vecchia sono a pagamento e con limiti di tempo."
    ],
    gite: [
      {
        "nome": "Parco Nazionale delle Kornati",
        "distanza": "una giornata intera in barca da Zara",
        "come": "Escursioni in barca dal porto di Zara o da Murter, da prenotare il giorno prima.",
        "testo": "Un arcipelago di quasi novanta isole spoglie e calcaree, con falesie sul mare aperto e baie per il bagno. Il biglietto del parco è di solito compreso nell'escursione."
      },
      {
        "nome": "Isola di Ugljan",
        "distanza": "circa 25 minuti in traghetto",
        "come": "Traghetti Jadrolinija dal porto di Zara per Preko.",
        "testo": "L'isola di fronte a Zara, con uliveti, paesi di pescatori e l'isolotto di Galevac a nuoto o in barca da Preko. Una mezza giornata di mare senza auto."
      },
      {
        "nome": "Nin",
        "distanza": "circa 15 km da Zara",
        "come": "In auto o in bus da Zara.",
        "testo": "Una cittadina su un isolotto nella laguna, una delle più antiche della Croazia, con la chiesetta preromanica della Santa Croce, le saline e lunghe spiagge di sabbia con i fanghi curativi."
      },
      {
        "nome": "Primošten",
        "distanza": "circa 30 km da Sebenico",
        "come": "In auto lungo la costa verso Spalato.",
        "testo": "Un paese su una penisola con la chiesa in cima e i vigneti a muretti a secco del Babić tutt'intorno, tra le immagini più note della costa dalmata."
      }
    ],
    faq: [
      {
        "domanda": "Si può fare il bagno alle cascate del Krka?",
        "risposta": "No, dal 2021 il bagno sotto lo Skradinski buk è vietato. Per nuotare bisogna andare al mare, a Sebenico o a Zara."
      },
      {
        "domanda": "Quanto costa il biglietto del Krka?",
        "risposta": "Da giugno a settembre 40 € (30 € dopo le 15), in aprile, maggio e ottobre 20 €, da novembre a marzo 7 €. Da aprile a ottobre comprende il battello da Skradin."
      },
      {
        "domanda": "Krka o Plitvice?",
        "risposta": "Plitvice è più grande e spettacolare, con sedici laghi; la Krka è più breve da visitare e vicina al mare. Chi passa da entrambe fa Plitvice per i laghi e la Krka per lo Skradinski buk e Visovac."
      },
      {
        "domanda": "Zara o Sebenico come base?",
        "risposta": "Zara ha più vita e il tramonto sull'Organo marino; Sebenico è più vicina alla Krka, a una ventina di minuti da Skradin. Con due notti si può dormire una sera in ciascuna."
      },
      {
        "domanda": "Quando si sente meglio l'Organo marino?",
        "risposta": "Suona sempre, ma con un po' di onda o di vento il suono è più forte. Al tramonto conviene arrivare mezz'ora prima per un posto sui gradini."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'Lo Skradinski buk nel Parco Nazionale del Krka',
    immagine: '/images/viaggi/croazia-itinerario/giorno-05-zara-krka-sebenico.jpg',
  },
  {
    slug: 'spalato',
    paeseSlug: 'croazia',
    ordine: 4,
    nome: 'Spalato e Traù',
    tipologia: ['città romana', 'mare', 'porto'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci siamo arrivati in auto da Traù, nel giro della Croazia con gli amici, e qui abbiamo restituito la macchina: due notti, con il palazzo di Diocleziano e il Marjan, poi il catamarano per Hvar.",
    introduzione:
      'Spalato vive dentro il palazzo che l\'imperatore Diocleziano si fece costruire intorno al 300 d.C. A mezz\'ora c\'è Traù, isoletta medievale patrimonio UNESCO. Il porto è lo snodo dei traghetti per le isole.',
    percheAndarci: 'Per il palazzo di Diocleziano, la Riva, il Marjan e i collegamenti con Hvar, Brač e Vis.',
    cosaVedere: [
      'Il Peristilio e la cattedrale di San Doimo',
      'I sotterranei del palazzo',
      'La collina del Marjan',
      'Il centro di Traù e il portale di Radovan',
    ],
    cosaFare: ['Il picigin a Bačvice', 'Salire sul campanile di San Doimo', 'La sera sulla Riva'],
    doveDormire: 'Dentro o accanto al palazzo (camere 100-180 €); ostelli da 30-40 € a letto.',
    comeArrivare:
      "L'aeroporto di Spalato (SPU) è a circa 20 km dal centro, a pochi chilometri da Traù: la navetta Pleso porta alla stazione degli autobus di Spalato in circa 30-40 minuti per circa 8 €, il taxi costa circa 40-50 € (molto meno per Traù). Stazione degli autobus, stazione ferroviaria e porto dei traghetti sono uno accanto all'altro, a pochi minuti a piedi dalla Riva. Dall'Italia ci sono i traghetti notturni da Ancona; da Zagabria si arriva in auto in autostrada (pedaggio circa 25-30 €). Chi prosegue per le isole conviene restituire qui l'auto.",
    comeSpostarsi: 'A piedi nel centro; bus per Traù; catamarani dal porto per le isole.',
    periodoMigliore: 'maggio-giugno e settembre-ottobre.',
    costi:
      "Sotterranei del palazzo circa 10 € (5 € ragazzi e studenti); Galleria Meštrović 12 €; fortezza di Klis 12 €; Salona e Museo archeologico 10 € insieme; catamarano per Hvar 10-25 €. Budget al giorno a persona, con la doppia divisa in due: basso 70-100 €, medio 130-200 €, alto oltre 300 €.",
    erroriDaEvitare: ['Girare in costume nel centro storico: si prende la multa'],
    luoghi: [
      {
        "nome": "Palazzo di Diocleziano",
        "testo": "Il palazzo-fortezza dell'imperatore romano Diocleziano, costruito tra la fine del III secolo e il 305 d.C., dentro cui oggi vive la città vecchia. Peristilio, mausoleo trasformato in cattedrale e sotterranei sono il cuore della visita.",
        "come": "A piedi dalla Riva, attraverso la Porta d'Argento o la Porta di Bronzo. Entrata libera alle strade; si paga per cattedrale, campanile e sotterranei.",
        "quando": "Mattina presto o sera: nelle ore centrali i vicoli sono pieni.",
        "tempo": "2-3 ore",
        "consiglio": "Sotterranei: aperti con ingresso a pagamento, quasi vuoti, e fotogenici.",
        "costo": "strade e Peristilio gratuiti; cattedrale, campanile e sotterranei a pagamento",
        "orari": "Sempre accessibile; i singoli monumenti hanno orari propri.",
        "lat": 43.5085,
        "lng": 16.44025
      },
      {
        "nome": "Sotterranei del palazzo",
        "testo": "Le grandi sale a volta sotto gli appartamenti dell'imperatore, rimaste quasi intatte perché per secoli furono riempite di detriti. Riproducono in pianta le stanze che stavano sopra e fanno capire le dimensioni del palazzo. Il corridoio centrale, con le bancarelle, collega la Riva al Peristilio.",
        "come": "Dalla Porta di Bronzo, sul lungomare. Il corridoio centrale è libero, le sale laterali hanno un biglietto.",
        "quando": "All'apertura, prima che arrivino i gruppi delle crociere.",
        "tempo": "45 minuti",
        "costo": "circa 10 €, 5 € ragazzi e studenti (2026)",
        "lat": 43.50758,
        "lng": 16.43979,
        "consiglio": "Entrare dalla Porta di Bronzo e salire al Peristilio: è il percorso che faceva chi arrivava dal mare."
      },
      {
        "nome": "Peristilio e Tempio di Giove",
        "testo": "La piazza a colonnato davanti agli appartamenti imperiali, dove Diocleziano si mostrava ai sudditi: oggi ci sono i caffè sui gradini e una sfinge egizia di granito portata dall'imperatore. A pochi passi, in un vicolo, c'è il piccolo Tempio di Giove, trasformato in battistero, con il soffitto a cassettoni in pietra.",
        "come": "Al centro del palazzo, a piedi da qualsiasi porta.",
        "quando": "Presto la mattina per la piazza vuota, la sera per l'atmosfera.",
        "tempo": "30 minuti",
        "costo": "Peristilio gratuito; battistero a pagamento",
        "lat": 43.50824,
        "lng": 16.44017
      },
      {
        "nome": "Cattedrale di San Doimo e campanile",
        "testo": "Il mausoleo ottagonale di Diocleziano, divenuto cattedrale nel VII secolo, è uno degli edifici più antichi al mondo ancora usati come chiesa. Il campanile alto 57 metri dà la vista sui tetti.",
        "come": "Dentro il Peristilio. Biglietto per cattedrale e salita al campanile.",
        "quando": "Mattina.",
        "tempo": "1 ora",
        "consiglio": "Salire al campanile per la vista: i gradini sono molti e stretti.",
        "lat": 43.50805,
        "lng": 16.44043
      },
      {
        "nome": "Porta d'Oro e statua di Gregorio di Nin",
        "testo": "La porta nord del palazzo, la più decorata, da cui partiva la strada per Salona. Fuori c'è la statua gigante del vescovo Gregorio di Nin, opera di Ivan Meštrović, che nel X secolo difese l'uso della lingua croata nella liturgia. Strofinargli l'alluce porta fortuna, e infatti è lucido.",
        "come": "A piedi dal Peristilio, seguendo la via verso nord.",
        "quando": "In qualsiasi momento.",
        "tempo": "15 minuti",
        "costo": "gratuito",
        "lat": 43.50918,
        "lng": 16.44065
      },
      {
        "nome": "Riva",
        "testo": "Il lungomare pedonale sotto la facciata sud del palazzo, con le palme e i caffè. È il salotto della città: ci si passeggia la sera, si guardano i traghetti e si aspetta il catamarano.",
        "come": "A piedi, tra il porto e la Porta di Bronzo.",
        "quando": "La sera, quando si riempie di gente del posto.",
        "tempo": "1 ora",
        "costo": "gratuito",
        "lat": 43.50783,
        "lng": 16.43829
      },
      {
        "nome": "Collina di Marjan",
        "testo": "Il parco boscoso sopra la città, con sentieri, chiesette e un belvedere sul porto e sulle isole. Dal quartiere di Veli Varoš si sale al primo belvedere; più avanti la pineta continua fino alla cima, con la grande croce bianca, e alle piccole spiagge sul lato del mare aperto. È il posto dove vanno gli spalatini a correre e a fare il bagno, lontano dalla folla del palazzo.",
        "come": "A piedi dal quartiere Veli Varoš, in salita fino al belvedere.",
        "quando": "Tardo pomeriggio.",
        "tempo": "2 ore",
        "consiglio": "Portare acqua: lungo la salita non ci sono bar.",
        "costo": "gratuito",
        "orari": "Parco sempre aperto.",
        "lat": 43.5079,
        "lng": 16.43012
      },
      {
        "nome": "Galleria Meštrović",
        "testo": "La villa sul mare che lo scultore Ivan Meštrović si costruì negli anni Trenta, oggi museo con le sue sculture in marmo, bronzo e legno e il giardino affacciato sulla baia. Con lo stesso biglietto si visita il Kaštilac, poco più avanti, con il ciclo in legno della vita di Cristo.",
        "come": "A piedi lungo il lato sud del Marjan (circa 30 minuti dalla Riva) o con il bus 12.",
        "quando": "Al mattino, abbinandola a un bagno sulle spiagge del Marjan.",
        "tempo": "1-2 ore",
        "costo": "12 € adulti, Kaštilac compreso (listino ufficiale)",
        "orari": "Dal martedì alla domenica 9-17, ultimo ingresso mezz'ora prima. Chiuso il lunedì e nei giorni di festa nazionale.",
        "lat": 43.50492,
        "lng": 16.41794,
        "url": "https://mestrovic.hr/"
      },
      {
        "nome": "Pazar e mercato del pesce",
        "testo": "Il Pazar è il mercato all'aperto di frutta, verdura e fiori subito fuori dalla Porta d'Argento. La pescheria (Peskarija), nella parte ovest del centro, vende il pesce della notte sotto una tettoia ottocentesca: niente mosche, dicono gli spalatini, per via dell'acqua sulfurea che scorre sotto.",
        "come": "A piedi: il Pazar a est del palazzo, la pescheria vicino a Marmontova.",
        "quando": "Al mattino presto; verso mezzogiorno i banchi chiudono.",
        "tempo": "45 minuti",
        "costo": "gratuito",
        "lat": 43.5076,
        "lng": 16.44197
      },
      {
        "nome": "Spiaggia di Bačvice",
        "testo": "La spiaggia di sabbia della città, poco profonda, a dieci minuti dalla Riva. Qui si gioca al picigin, il passatempo locale: si palleggia in cerchio con una piccola palla, nell'acqua bassa, senza farla cadere.",
        "come": "A piedi dalla Riva, passando dietro la stazione.",
        "quando": "Al mattino o al tardo pomeriggio; la sera i locali sopra la spiaggia si animano.",
        "tempo": "2-3 ore",
        "costo": "gratuito; ombrelloni a pagamento",
        "lat": 43.50194,
        "lng": 16.44598
      },
      {
        "nome": "Museo archeologico",
        "testo": "Il museo più antico della Croazia, fondato nel 1820, con le iscrizioni, i sarcofagi e i mosaici di Salona e della Dalmazia romana. Il lapidario sotto il porticato del giardino è la parte più suggestiva.",
        "come": "A piedi in circa 15 minuti a nord del centro. Biglietto combinato con Salona.",
        "quando": "Nelle ore calde, abbinato a Salona nello stesso giorno.",
        "tempo": "1 ora",
        "costo": "10 € con Salona, valido 7 giorni (listino 2026)",
        "orari": "1 giugno-30 settembre lunedì-sabato 9-14 e 15-20; 1 ottobre-31 maggio lunedì-venerdì 9-14 e 15-20, sabato 9-14. Chiuso la domenica e nei festivi. Chiuso per allestimento dal 9 novembre all'11 dicembre 2026.",
        "lat": 43.5159,
        "lng": 16.43458,
        "url": "https://www.armus.hr/"
      },
      {
        "nome": "Salona",
        "testo": "Le rovine della capitale romana della Dalmazia, la città da cui veniva Diocleziano, oggi a Solin, alla periferia di Spalato. Si cammina tra anfiteatro, terme, basiliche paleocristiane e la necropoli di Manastirine, tra ulivi e quasi senza turisti.",
        "come": "Bus urbano da Spalato per Solin, circa 20 minuti. L'ingresso è al Tusculum.",
        "quando": "Mattina presto o tardo pomeriggio: il sito è tutto al sole.",
        "tempo": "2 ore",
        "costo": "10 € con il Museo archeologico (listino 2026)",
        "orari": "Tutti i giorni: 1 giugno-30 settembre 9-20, 1 ottobre-31 maggio 9-18. Chiuso nei festivi.",
        "lat": 43.54169,
        "lng": 16.48331,
        "url": "https://www.armus.hr/"
      },
      {
        "nome": "Fortezza di Klis",
        "testo": "La fortezza sul passo sopra Spalato, che per secoli controllò la strada tra la costa e l'interno e resistette a lungo agli ottomani. Dalle mura si vedono Spalato, le isole e la piana di Salona. Chi ha visto Il Trono di Spade la riconosce come Meereen.",
        "come": "In auto o in bus da Spalato, circa 20-30 minuti. Dal parcheggio si sale a piedi.",
        "quando": "Al tramonto, con la luce sulla costa.",
        "tempo": "1-1 ora e mezza",
        "costo": "12 € adulti, 4 € sotto i 15 anni (sito ufficiale)",
        "orari": "Secondo il sito ufficiale tutti i giorni 9-19.",
        "lat": 43.56003,
        "lng": 16.52433,
        "url": "https://www.tvrdavaklis.com/"
      },
      {
        "nome": "Traù",
        "testo": "Una città-isola piccola e medievale a ovest di Spalato, con la cattedrale di San Lorenzo e il suo portale scolpito da Radovan. Patrimonio UNESCO.",
        "come": "In auto o in bus da Spalato. Si visita a piedi.",
        "quando": "Mattina.",
        "tempo": "3 ore",
        "consiglio": "Il pomeriggio si ferma a prendere un gelato sulla Riva.",
        "lat": 43.51705,
        "lng": 16.25144
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Porta di Bronzo, sotterranei e Peristilio prima delle crociere",
          "Tarda mattinata: cattedrale di San Doimo, campanile e Tempio di Giove",
          "Mezzogiorno: Pazar e pescheria, poi pranzo a Veli Varoš",
          "Pomeriggio: Porta d'Oro e Gregorio di Nin, poi bagno a Bačvice",
          "Tardo pomeriggio: salita al Marjan fino al belvedere",
          "Sera: passeggiata sulla Riva"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come il programma di un giorno",
          "Giorno 2, mattina: Galleria Meštrović e Kaštilac, poi bagno sulle spiagge del Marjan",
          "Giorno 2, pomeriggio: Salona e Museo archeologico con il biglietto unico",
          "Giorno 2, sera: fortezza di Klis al tramonto"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1 e 2: come sopra",
          "Giorno 3, mattina: Traù in bus, cattedrale di San Lorenzo e portale di Radovan",
          "Giorno 3, pomeriggio: rientro a Spalato e catamarano serale per Hvar, oppure gita al parco del Krka"
        ]
      }
    ],
    zone: [
      {
        "nome": "Città vecchia",
        "perChi": "chi vuole il centro",
        "testo": "Camere dentro il palazzo, a piedi da tutto; la sera c'è rumore fino a tardi.",
        "fascia": "100-180 €"
      },
      {
        "nome": "Veli Varoš",
        "perChi": "chi cerca un quartiere tranquillo",
        "testo": "Case di pescatori a pochi passi dal centro, sotto Marjan.",
        "fascia": "70-130 €"
      },
      {
        "nome": "Bačvice",
        "perChi": "Chi vuole la spiaggia sotto casa",
        "testo": "Il quartiere sopra la spiaggia di sabbia, a dieci minuti a piedi dalla Riva e vicino a stazioni e porto. D'estate la sera è rumoroso per i locali sulla spiaggia.",
        "fascia": "90-170 €"
      },
      {
        "nome": "Žnjan",
        "perChi": "Chi viaggia in auto e cerca alberghi moderni",
        "testo": "Il lungomare a est, con la spiaggia lunga, alberghi nuovi e parcheggio più facile. Il centro è a circa mezz'ora a piedi o pochi minuti in bus.",
        "fascia": "90-160 €"
      }
    ],
    gite: [
      {
        "nome": "Parco nazionale del Krka",
        "distanza": "circa 1 ora e un quarto in auto",
        "come": "In auto fino a Skradin, poi battello fino allo Skradinski buk (compreso nel biglietto da aprile a ottobre); ci sono anche escursioni organizzate.",
        "testo": "La grande cascata a gradoni dello Skradinski buk, percorsa da passerelle, e il monastero sull'isolotto di Visovac. Biglietto 40 € da giugno a settembre (30 € dopo le 15), 20 € in aprile, maggio e ottobre; il bagno è vietato."
      },
      {
        "nome": "Hvar",
        "distanza": "circa 1 ora in catamarano",
        "come": "Catamarani Jadrolinija, TP Line e Krilo dal porto di Spalato fino a Hvar città.",
        "testo": "La cittadina veneziana con la fortezza spagnola e le isole Pakleni davanti al porto. In giornata si fa, ma l'isola merita almeno una notte."
      },
      {
        "nome": "Bol e Zlatni rat (Brač)",
        "distanza": "circa 1 ora in catamarano",
        "come": "Catamarano diretto dal porto di Spalato a Bol, oppure traghetto per Supetar e bus attraverso l'isola.",
        "testo": "La spiaggia di ciottoli a punta che cambia forma con il vento e le correnti, famosa tra chi fa windsurf. Sopra Bol si sale alla Vidova gora, la cima più alta delle isole adriatiche."
      },
      {
        "nome": "Omiš e il canyon della Cetina",
        "distanza": "circa 25 km, 40 minuti in bus",
        "come": "Bus di linea dalla stazione di Spalato lungo la costa.",
        "testo": "Un paese tra il mare e le pareti del canyon, con la fortezza di Mirabella sopra i tetti. Sul fiume Cetina si fa rafting, kayak e zip line."
      }
    ],
    sapori: [
      {
        nome: "Pašticada",
        testo: "Manzo stufato in salsa di vino e prugne, con gnocchi."
      },
      {
        nome: "Soparnik",
        testo: "Torta di bietole salata della Dalmazia, cotta sotto la cenere."
      },
      {
        nome: "Crni rižot",
        testo: "Risotto nero al nero di seppia."
      },
      {
        nome: "Rožata",
        testo: "Crema caramellata della Dalmazia, dal tipico gusto di rosolio."
      }
    ],
    attenzioni: [
      "I taxi non segnalati a Spalato possono far pagare molto più della tariffa: usare Bolt o Uber.",
      "Per i traghetti in estate prenotare il posto per l'auto con Jadrolinija.",
      "Attenzione ai ristoranti in piazza con menu turistici e prezzi alti: allontanarsi di una strada riduce il costo."
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Spalato?",
        "risposta": "Un giorno pieno basta per il palazzo di Diocleziano, il Marjan e la Riva. Con due si aggiungono la Galleria Meštrović, Salona e Klis; con tre anche Traù o il Krka."
      },
      {
        "domanda": "Il palazzo di Diocleziano si paga?",
        "risposta": "No, le strade e il Peristilio sono liberi, perché sono la città vecchia. Si pagano cattedrale e campanile, il battistero e i sotterranei (circa 10 €)."
      },
      {
        "domanda": "Spalato o Traù come base?",
        "risposta": "Spalato è più comoda per traghetti, bus e serate; Traù è più piccola e tranquilla e vicina all'aeroporto. Per le isole conviene dormire a Spalato, vicino al porto."
      },
      {
        "domanda": "Dove dormire a Spalato?",
        "risposta": "Dentro il palazzo per stare al centro (circa 100-180 € a notte), a Veli Varoš per un quartiere quieto, a Bačvice per la spiaggia, a Žnjan per gli alberghi con parcheggio."
      },
      {
        "domanda": "Come si va da Spalato a Hvar?",
        "risposta": "Con il catamarano per Hvar città, circa un'ora e 10-25 € in estate. I traghetti con l'auto arrivano invece a Stari Grad, sull'altro lato dell'isola."
      },
      {
        "domanda": "Si può girare in costume a Spalato?",
        "risposta": "No: nel centro storico girare in costume o a torso nudo e bere alcol per strada costa una multa di 150 €."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'Le colonne e gli archi del Peristilio del palazzo di Diocleziano a Spalato',
    immagine: '/images/viaggi/croazia-itinerario/giorno-07-spalato.jpg',
  },
  {
    slug: 'hvar',
    paeseSlug: 'croazia',
    ordine: 5,
    nome: 'Hvar',
    tipologia: ['isola', 'mare', 'vita notturna'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci siamo arrivati in catamarano da Spalato, nel giro della Croazia con gli amici: due notti, con una giornata in taxi-boat alle isole Pakleni.",
    introduzione:
      'L\'isola più soleggiata dell\'Adriatico, con una cittadina veneziana sulla baia, le isole Pakleni davanti al porto, campi di lavanda nell\'interno e la piana di Stari Grad, patrimonio UNESCO.',
    percheAndarci: 'Per le calette delle Pakleni, il tramonto dalla fortezza e, per chi la cerca, la vita notturna.',
    cosaVedere: ['La fortezza spagnola', 'Piazza di Santo Stefano e il teatro del 1612', 'Le isole Pakleni', 'La piana di Stari Grad'],
    cosaFare: ['Taxi-boat per Palmižana', 'Giro dell\'interno tra lavanda e paesi abbandonati'],
    doveDormire: 'Hvar città per la vita serale (100-220 €, di più in agosto), Stari Grad e Jelsa per la quiete.',
    comeArrivare:
      "Non c'è aeroporto: si arriva da Spalato. I catamarani di Jadrolinija, TP Line e Krilo portano a Hvar città in circa un'ora, indicativamente 10-25 € in estate; i traghetti con l'auto di Jadrolinija arrivano invece a Stari Grad, da dove Hvar città è a 20-30 minuti in bus o in auto. Da Curzola e Dubrovnik ci sono catamarani stagionali (Hvar-Curzola circa 1 ora e mezza). In luglio e agosto i posti auto sui traghetti vanno prenotati in anticipo; chi resta solo a Hvar città può fare a meno dell'auto.",
    periodoMigliore: 'giugno e settembre; lavanda in fiore tra giugno e luglio.',
    costi:
      "Fortezza 12 €, oppure 15 € con il biglietto combinato (fortezza, teatro, loggia, torre dell'orologio e chiesa di San Giovanni); teatro 10 €; cattedrale 2 €; taxi-boat per le Pakleni circa 10-15 € andata e ritorno. Budget al giorno a persona, con la doppia divisa in due: basso 70-100 €, medio 130-200 €, alto oltre 300 €; Hvar città in agosto è tra i posti più cari della Croazia.",
    erroriDaEvitare: ['Bere per strada o girare in costume in città: multe severe', 'Arrivare in agosto senza alloggio prenotato'],
    luoghi: [
      {
        "nome": "Hvar città e fortezza Spagnola",
        "testo": "Una cittadina veneziana sul mare con la piazza più grande della Dalmazia, la cattedrale di Santo Stefano e il teatro del Seicento sopra l'arsenale. Sopra il paese c'è la fortezza (Fortica) del Cinquecento, con la vista sul porto e sulle isole Pakleni.",
        "come": "A piedi dal porto. Alla fortezza si sale a piedi dal paese.",
        "quando": "Fortezza al mattino o tardo pomeriggio, per il caldo.",
        "tempo": "2-3 ore",
        "consiglio": "Salire alla fortezza al tramonto e cenare dopo, in un vicolo fuori dalla piazza.",
        "costo": "fortezza 12 €; combinato 15 € con teatro, loggia, torre dell'orologio e chiesa di San Giovanni (2026)",
        "orari": "Fortezza 9-18 (orari estivi 2026 dell'ente turistico); fuori stagione da verificare.",
        "lat": 43.17474,
        "lng": 16.4421,
        "url": "https://visithvar.hr/"
      },
      {
        "nome": "Piazza di Santo Stefano e cattedrale",
        "testo": "La grande piazza lastricata che si apre dal porto verso la collina, con il pozzo veneziano del Cinquecento e i palazzi in pietra bianca. In fondo c'è la cattedrale di Santo Stefano, con il campanile a quattro piani e gli altari barocchi all'interno. La sera è il centro della vita della cittadina.",
        "come": "A piedi dal porto: la piazza comincia sul molo.",
        "quando": "Al mattino presto per la piazza vuota, la sera per l'atmosfera.",
        "tempo": "45 minuti",
        "costo": "piazza gratuita; cattedrale 2 € (2026)",
        "orari": "Cattedrale 9-12:30 e 17-19:30 (orari estivi 2026).",
        "lat": 43.17218,
        "lng": 16.44335,
        "url": "https://visithvar.hr/"
      },
      {
        "nome": "Teatro e Arsenale",
        "testo": "L'Arsenale veneziano, dove si riparavano le galee, regge al primo piano il teatro aperto nel 1612, uno dei teatri pubblici più antichi d'Europa. La sala, con i palchi dipinti, è piccola e intima; dalla terrazza sopra l'Arsenale si guarda la piazza.",
        "come": "Sul lato della piazza verso il porto. Il teatro si visita con biglietto singolo o con il combinato.",
        "quando": "Nelle ore calde, quando la fortezza è al sole.",
        "tempo": "30 minuti",
        "costo": "teatro 10 €, o combinato 15 € (2026)",
        "orari": "Teatro 10-18 (estate 2026); l'Arsenale nel 2026 non è visitabile.",
        "lat": 43.17212,
        "lng": 16.44147,
        "url": "https://visithvar.hr/"
      },
      {
        "nome": "Convento benedettino e merletti d'agave",
        "testo": "Le monache benedettine di Hvar lavorano un merletto sottilissimo ricavato dalle fibre delle foglie d'agave, tradizione riconosciuta dall'UNESCO. Nel piccolo museo del convento si vedono i pezzi finiti e, a volte, come si preparano i fili.",
        "come": "Nei vicoli a nord della piazza, a piedi.",
        "quando": "Al mattino o nel tardo pomeriggio, secondo gli orari di apertura.",
        "tempo": "30 minuti",
        "costo": "5 € (2026)",
        "orari": "10-12:30 e 16-19; chiuso il giovedì pomeriggio e la domenica (estate 2026).",
        "lat": 43.17313,
        "lng": 16.44204,
        "url": "https://visithvar.hr/"
      },
      {
        "nome": "Isole Pakleni",
        "testo": "Un arcipelago di isolotti con baie e acque limpide davanti a Hvar città. Si raggiungono con i taxi-barca dal porto.",
        "come": "Taxi-barca dal porto di Hvar, andata e ritorno a orari.",
        "quando": "Mattina; le baie sono più calme prima di mezzogiorno.",
        "tempo": "mezza giornata",
        "consiglio": "Concordare l'orario di ritorno con il barcaiolo.",
        "costo": "taxi-boat circa 10-15 € andata e ritorno (prezzo indicativo 2026)",
        "lat": 43.16347,
        "lng": 16.39704
      },
      {
        "nome": "Stari Grad",
        "testo": "La città più antica dell'isola, fondata dai greci di Paro nel 384 a.C. con il nome di Pharos. Il porto stretto e lungo è pieno di barche e case di pietra, e al centro c'è il Tvrdalj, la villa fortificata del poeta rinascimentale Petar Hektorović. È più tranquilla e meno cara di Hvar città.",
        "come": "Qui arriva il traghetto auto da Spalato; Hvar città si raggiunge in auto o in bus.",
        "quando": "Mattina o sera; tutto l'anno, anche fuori stagione.",
        "tempo": "2 ore",
        "consiglio": "Unire la visita alla piana di Stari Grad, che comincia appena fuori dal paese.",
        "costo": "paese gratuito; Tvrdalj a pagamento",
        "lat": 43.18248,
        "lng": 16.59573
      },
      {
        "nome": "Piana di Stari Grad",
        "testo": "Un paesaggio agricolo con muretti e campi divisi dai coloni greci nel IV secolo a.C., rimasti quasi uguali; è patrimonio UNESCO.",
        "come": "Da Stari Grad in bici o a piedi, per sentieri tra uliveti e vigneti.",
        "quando": "Primavera e autunno.",
        "tempo": "2-3 ore",
        "consiglio": "Il traghetto da Spalato arriva a Stari Grad, non a Hvar città.",
        "costo": "gratuito",
        "lat": 43.18252,
        "lng": 16.64771
      },
      {
        "nome": "Vrboska",
        "testo": "Il paese più piccolo dell'isola, costruito lungo un canale di mare stretto attraversato da ponticelli, per questo chiamato la «piccola Venezia» di Hvar. C'è una chiesa fortificata del Cinquecento, costruita per difendersi dai pirati, e un museo dei pescatori.",
        "come": "In auto o in bus da Stari Grad o da Jelsa; a piedi lungo la costa da Jelsa in circa un'ora.",
        "quando": "La sera, per una cena lungo il canale.",
        "tempo": "1-2 ore",
        "costo": "gratuito",
        "lat": 43.18172,
        "lng": 16.67123
      },
      {
        "nome": "Jelsa",
        "testo": "Una cittadina sul porto a est dell'isola, con la piazza alberata dietro il molo e spiagge di pineta a pochi minuti a piedi. È più tranquilla e meno cara di Hvar città, e comoda per le calette della costa sud.",
        "come": "Bus da Stari Grad e da Hvar città; in estate collegata in catamarano con Spalato e Bol.",
        "quando": "Tutta la stagione; in giugno e settembre è particolarmente quieta.",
        "tempo": "mezza giornata",
        "costo": "gratuito",
        "lat": 43.1612,
        "lng": 16.69266
      },
      {
        "nome": "Malo Grablje",
        "testo": "Un villaggio di pietra abbandonato negli anni Sessanta, in una gola tra gli ulivi sopra Milna. Le case senza tetto, la chiesa e le terrazze coltivate raccontano l'isola di prima del turismo. Un sentiero scende fino al mare di Milna.",
        "come": "In auto o in scooter da Hvar città verso l'interno, poi a piedi per l'ultimo tratto; oppure a piedi in salita da Milna.",
        "quando": "Al mattino o nel tardo pomeriggio: la gola è calda a mezzogiorno.",
        "tempo": "1-2 ore",
        "costo": "gratuito",
        "lat": 43.16882,
        "lng": 16.5033
      },
      {
        "nome": "Velo Grablje e la lavanda",
        "testo": "Il paese dell'interno che nel Novecento divenne il centro della produzione di olio di lavanda dell'isola. Intorno ci sono ancora i campi a terrazze, viola tra giugno e luglio, e i muretti di pietra a secco.",
        "come": "In auto o in scooter sulla vecchia strada tra Hvar città e Stari Grad.",
        "quando": "Tra fine giugno e luglio, con la lavanda in fiore.",
        "tempo": "1 ora",
        "costo": "gratuito",
        "lat": 43.17074,
        "lng": 16.5217
      },
      {
        "nome": "Spiaggia di Dubovica",
        "testo": "Una baia di ciottoli bianchi con poche case di pietra sulla costa sud, a est di Hvar città. L'acqua è limpidissima e, senza strada fino in fondo, resta più tranquilla delle spiagge raggiungibili in auto.",
        "come": "In auto o in bus fino alla fermata sulla strada principale, poi a piedi in discesa per un sentiero di circa 15-20 minuti.",
        "quando": "Al mattino; nel pomeriggio d'estate arrivano anche le barche.",
        "tempo": "mezza giornata",
        "costo": "gratuito",
        "lat": 43.14593,
        "lng": 16.53487,
        "consiglio": "La risalita è ripida e al sole: portare acqua."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: piazza di Santo Stefano, cattedrale e convento benedettino con i merletti d'agave",
          "Tarda mattinata: taxi-boat per Palmižana, bagno e pranzo alle Pakleni",
          "Pomeriggio: rientro e teatro con il biglietto combinato",
          "Tramonto: salita a piedi alla fortezza spagnola, circa venti minuti tra i pini",
          "Sera: cena in un vicolo fuori dalla piazza"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come il programma di un giorno",
          "Giorno 2, mattina: in scooter o in auto verso l'interno, Malo Grablje e i campi di lavanda di Velo Grablje",
          "Giorno 2, pomeriggio: Stari Grad con il Tvrdalj e la piana UNESCO",
          "Giorno 2, sera: cena a Vrboska lungo il canale o a Jelsa"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1 e 2: come sopra",
          "Giorno 3: gita in barca a Vis e alla Grotta Azzurra di Biševo, oppure una giornata di mare a Dubovica e sulla costa sud"
        ]
      }
    ],
    zone: [
      {
        "nome": "Hvar città",
        "perChi": "chi vuole vita e comodità",
        "testo": "Alberghi, locali e il porto, ma più caro e rumoroso d'estate.",
        "fascia": "100-250 €"
      },
      {
        "nome": "Stari Grad",
        "perChi": "chi arriva con il traghetto e l'auto e cerca calma",
        "testo": "La città più antica dell'isola, con il porto lungo e stretto, i ristoranti sul molo e la piana UNESCO appena fuori. È dove attracca il traghetto da Spalato; Hvar città è a 20-30 minuti in bus o in auto.",
        "fascia": "80-180 €"
      },
      {
        "nome": "Jelsa e Vrboska",
        "perChi": "chi cerca prezzi più bassi e spiagge tranquille",
        "testo": "Due paesi vicini sulla costa nord-est, con pinete e calette a piedi. Sono i più economici dell'isola ma lontani da Hvar città: poco adatti a chi vuole uscire lì ogni sera.",
        "fascia": "70-150 €"
      }
    ],
    gite: [
      {
        "nome": "Vis e la Grotta Azzurra",
        "distanza": "giornata intera in motoscafo",
        "come": "Gite organizzate in motoscafo dal porto di Hvar città, con soste a Biševo, Vis e spesso alla baia di Stiniva.",
        "testo": "L'isola più lontana e meno costruita della Dalmazia centrale e la Grotta Azzurra dell'isolotto di Biševo, dove la luce entra da un'apertura sott'acqua. Si vede meglio nelle ore centrali di una giornata di sole; con il mare mosso la grotta chiude."
      },
      {
        "nome": "Bol e Zlatni rat (Brač)",
        "distanza": "breve traversata in catamarano da Jelsa",
        "come": "Catamarano Jadrolinija della linea Spalato-Bol-Jelsa, nei mesi in cui è attivo.",
        "testo": "La spiaggia a punta di Zlatni rat, che cambia forma con il vento, e la cittadina di Bol con il convento domenicano sul mare."
      },
      {
        "nome": "Curzola",
        "distanza": "circa 1 ora e mezza in catamarano",
        "come": "Catamarano da Hvar città, indicativamente 20-30 €.",
        "testo": "La città murata sulla penisola, con le vie a spina di pesce e la cattedrale di San Marco. Ha senso come tappa successiva verso Dubrovnik più che come andata e ritorno in giornata."
      }
    ],
    sapori: [
      {
        nome: "Gregada",
        testo: "Zuppa di pesce con patate e olio, cucina dei pescatori."
      },
      {
        nome: "Lavanda",
        testo: "Olio essenziale e miele, in vendita ovunque sull'isola."
      },
      {
        nome: "Vini Plavac e Bogdanuša",
        testo: "Rosso e bianco locali, dalle cantine dell'isola."
      }
    ],
    attenzioni: [
      "Il traghetto da Spalato porta a Stari Grad; da lì servono bus o taxi per Hvar città.",
      "In estate le camere nei weekend finiscono presto: prenotare con mesi di anticipo.",
      "Sugli scogli servono scarpette da mare: i ricci sono comuni."
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Hvar?",
        "risposta": "Due giorni bastano per Hvar città, la fortezza, le Pakleni e un giro dell'interno con Stari Grad. Con tre si aggiunge la gita a Vis e alla Grotta Azzurra."
      },
      {
        "domanda": "Meglio dormire a Hvar città o a Stari Grad?",
        "risposta": "Hvar città per i locali e le Pakleni, ma costa di più ed è rumorosa d'estate. Stari Grad e Jelsa sono più tranquille, meno care e comode per chi arriva con il traghetto e l'auto."
      },
      {
        "domanda": "Come si arriva a Hvar da Spalato?",
        "risposta": "Con il catamarano per Hvar città in circa un'ora (10-25 € in estate) oppure con il traghetto per auto fino a Stari Grad. In alta stagione conviene prenotare."
      },
      {
        "domanda": "Quando fiorisce la lavanda a Hvar?",
        "risposta": "Tra giugno e luglio, nei campi dell'interno intorno a Velo Grablje e lungo la vecchia strada per Stari Grad."
      },
      {
        "domanda": "Quanto costa il taxi-boat per le isole Pakleni?",
        "risposta": "Indicativamente 10-15 € andata e ritorno, con partenze frequenti in estate dal porto di Hvar. Conviene concordare l'orario di rientro."
      },
      {
        "domanda": "Ci sono multe a Hvar per il costume o l'alcol in strada?",
        "risposta": "Sì, in città girare in costume, bere per strada o dormire in spiaggia viene multato, con sanzioni che arrivano a 500-700 €."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'La baia di Hvar e le isole Pakleni dalla fortezza spagnola',
    immagine: '/images/viaggi/croazia-itinerario/giorno-08-hvar.jpg',
  },
  {
    slug: 'curzola',
    paeseSlug: 'croazia',
    ordine: 6,
    nome: 'Curzola',
    tipologia: ['isola', 'città storica', 'vino'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci siamo arrivati in catamarano da Hvar, nel giro della Croazia con gli amici: una notte, con la città vecchia, le mura e il tramonto dal torrione, prima del catamarano per Dubrovnik.",
    introduzione:
      'Una città vecchia fortificata su una penisola, con le vie a lisca di pesce, la cattedrale di San Marco e la casa dedicata a Marco Polo; sull\'isola si produce il vino bianco grk.',
    percheAndarci: 'Per una città storica più tranquilla di Hvar e Dubrovnik e per la danza della moreška.',
    cosaVedere: ['La città vecchia e le mura', 'La cattedrale di San Marco', 'Lumbarda e i suoi vigneti'],
    cosaFare: ['Assistere alla moreška nelle sere d\'estate', 'Degustare il grk a Lumbarda'],
    doveDormire: 'Città vecchia o Lumbarda, 90-160 €.',
    comeArrivare:
      "Curzola non ha aeroporto: si arriva via mare. Il catamarano da **Hvar** impiega circa un'ora e mezza (indicativamente 20-30 €), quello da **Dubrovnik** circa due ore (25-35 €), con corse anche da **Spalato**; in estate sono poche al giorno e vanno prenotate appena si fissano le date. In auto si passa per la penisola di Pelješac e si prende il traghetto da **Orebić**, una breve traversata. Con la bora o il mare grosso i collegamenti possono saltare.",
    periodoMigliore: 'giugno e settembre.',
    costi:
      "Moreška circa 20 €; catamarano Hvar-Curzola 20-30 €, Curzola-Dubrovnik 25-35 € (stime 2026). Budget indicativo al giorno a persona, con la doppia divisa in due, in giugno o settembre: basso 70-100 €, medio 130-200 €, alto oltre 300 €; in luglio e agosto contare il 30-50% in più.",
    erroriDaEvitare: ['Visitarla solo in giornata dalle crociere, perdendo la sera'],
    luoghi: [
      {
        "nome": "Città vecchia di Curzola",
        "testo": "Una penisola fortificata dalla pianta «a lisca di pesce», con vicoli pensati per riparare dal vento. Mura veneziane e torri, e la cattedrale di San Marco con l'altare di Tintoretto.",
        "come": "A piedi dal porto, dopo la Porta di Terra.",
        "quando": "Mattina o sera.",
        "tempo": "2 ore",
        "costo": "gratuito",
        "lat": 42.96167,
        "lng": 17.13583,
        "consiglio": "Salire sulla torre della cattedrale per i tetti."
      },
      {
        "nome": "Cattedrale di San Marco",
        "testo": "La cattedrale in pietra chiara dell'isola chiude la piazza in cima alla città vecchia, con il portale romanico decorato da leoni e figure. Dentro c'è una pala di Tintoretto sull'altare maggiore; dal campanile si vedono i tetti a lisca di pesce e il canale di Pelješac.",
        "come": "A piedi lungo la via centrale dalla Porta di Terraferma.",
        "quando": "Mattina, prima del caldo, per salire sul campanile.",
        "tempo": "45 minuti",
        "lat": 42.96161,
        "lng": 17.1362
      },
      {
        "nome": "Torre Revelin e Porta di Terraferma",
        "testo": "L'ingresso principale della città vecchia, con la grande scalinata che sale alla porta e la torre Revelin accanto, il bastione più forte delle mura veneziane. Dalla torre si vede tutta la penisola con la città.",
        "come": "Dal porto e dalla stazione degli autobus, pochi minuti a piedi.",
        "quando": "Tramonto, con la luce sulla pietra.",
        "tempo": "30 minuti",
        "lat": 42.9608,
        "lng": 17.13597
      },
      {
        "nome": "Moreška",
        "testo": "Una danza con spade che mette in scena la lotta tra mori e cristiani per una ragazza rapita, eseguita a Curzola da secoli. Due eserciti in costume rosso e nero si affrontano con colpi ritmati e scintille sulle lame. Oggi per i visitatori ci sono spettacoli fissi un paio di volte a settimana.",
        "come": "Di sera all'aperto o in sala, con biglietto.",
        "quando": "Estate, ore serali.",
        "tempo": "1 ora",
        "costo": "circa 20 € a persona (2026)",
        "orari": "Di solito il lunedì e il giovedì sera in luglio e agosto; date da verificare sul sito turistico di Curzola.",
        "lat": 42.9608,
        "lng": 17.13597,
        "consiglio": "Controllare giorno e orari sul posto: variano."
      },
      {
        "nome": "Casa di Marco Polo",
        "testo": "Secondo la tradizione locale Marco Polo sarebbe nato a Curzola. Nel centro c'è una casa che la tradizione indica come la sua.",
        "come": "Nel centro storico, con scalini ripidi.",
        "quando": "Mattina.",
        "tempo": "30 minuti",
        "lat": 42.96193,
        "lng": 17.1365,
        "consiglio": "La nascita a Curzola è una tradizione, non un fatto documentato."
      },
      {
        "nome": "Museo civico di Curzola",
        "testo": "Nel palazzo rinascimentale Gabriellis, davanti alla cattedrale, racconta la storia della città: la lavorazione della pietra, i cantieri navali, le case dei mercanti. Al piano alto è ricostruita una cucina tradizionale.",
        "come": "In piazza San Marco, accanto alla cattedrale.",
        "quando": "Ore calde o giornata di vento.",
        "tempo": "45 minuti",
        "lat": 42.96154,
        "lng": 17.13582
      },
      {
        "nome": "Lumbarda e la spiaggia di Pržina",
        "testo": "Il villaggio a pochi chilometri dalla città dove si produce il grk, un bianco che cresce solo qui sui terreni sabbiosi. Ha piccole cantine da visitare e spiagge di sabbia, rare in Dalmazia: Pržina è la più nota.",
        "come": "Circa 15 minuti in auto o in bus dalla città; in estate anche in taxi-boat o in bici.",
        "quando": "Pomeriggio per la spiaggia, tardo pomeriggio per una degustazione.",
        "tempo": "mezza giornata",
        "lat": 42.91791,
        "lng": 17.18679,
        "consiglio": "Prenotare le degustazioni di grk, soprattutto in alta stagione."
      },
      {
        "nome": "Isola di Badija",
        "testo": "L'isolotto boscoso davanti a Curzola, con un monastero francescano del Quattrocento e daini liberi tra i pini. Ha piccole spiagge e si gira a piedi in un'ora.",
        "come": "Taxi-boat dal porto di Curzola in estate, pochi minuti.",
        "quando": "Mattina o pomeriggio d'estate, con mare calmo.",
        "tempo": "mezza giornata",
        "lat": 42.9556,
        "lng": 17.1611,
        "consiglio": "Non dare da mangiare ai daini: si avvicinano molto alle persone."
      },
      {
        "nome": "Penisola di Sabbioncello (Pelješac)",
        "testo": "La lunga penisola di fronte, con piccoli produttori di Plavac mali. Da Orebić si arriva a Curzola con una breve traversata in traghetto.",
        "come": "In auto, con visita alle cantine di Dingač e Potomje.",
        "quando": "Primavera e autunno.",
        "tempo": "mezza giornata",
        "lat": 42.925,
        "lng": 17.40361,
        "consiglio": "Prenotare le degustazioni, soprattutto in alta stagione."
      },
      {
        "nome": "Vela Luka e la grotta di Vela Spila",
        "testo": "All'estremità ovest dell'isola, sopra il porto di Vela Luka, c'è una grande grotta abitata per migliaia di anni dalla preistoria, con un'apertura nella volta da cui entra la luce. Dentro sono stati trovati alcuni dei più antichi oggetti in ceramica d'Europa.",
        "come": "In auto o in bus da Curzola città, circa un'ora attraverso l'isola; dal paese si sale a piedi.",
        "quando": "Mattina, abbinata al giro dei paesi dell'interno.",
        "tempo": "mezza giornata con il viaggio",
        "lat": 42.96973,
        "lng": 16.71836
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: città vecchia dalla Porta di Terraferma, cattedrale e campanile.",
          "Casa di Marco Polo e museo civico.",
          "Pomeriggio: spiaggia di Lumbarda o taxi-boat per Badija.",
          "Sera: moreška se in programma, poi tramonto dalla torre Revelin."
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come sopra.",
          "Giorno 2: traghetto per Orebić e cantine di Plavac mali a Pelješac, oppure il giro dell'isola fino a Vela Luka.",
          "Sera: degustazione di grk a Lumbarda."
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1 e 2: come sopra.",
          "Giorno 3: catamarano stagionale per Mljet e il parco nazionale, oppure partenza per Dubrovnik con una sosta a Ston."
        ]
      }
    ],
    zone: [
      {
        "nome": "Città vecchia",
        "perChi": "chi vuole atmosfera",
        "testo": "Camere nel centro storico; la sera c'è musica e passeggio, ma si dorme bene.",
        "fascia": "90-160 €"
      },
      {
        "nome": "Lumbarda",
        "perChi": "chi cerca spiagge",
        "testo": "Villaggio con spiagge di sabbia e vigneti, a pochi chilometri dalla città.",
        "fascia": "90-160 €"
      }
    ],
    sapori: [
      {
        nome: "Grk",
        testo: "Vino bianco secco dell'area di Lumbarda."
      },
      {
        nome: "Pošip",
        testo: "Bianco profumato della zona, ottimo con il pesce."
      },
      {
        nome: "Plavac mali",
        testo: "Rosso potente di Pelješac."
      },
      {
        nome: "Zrnovski makaruli",
        testo: "Pasta fresca locale, con sugo di carne."
      }
    ],
    attenzioni: [
      "Il traghetto da Spalato e da Dubrovnik va prenotato in alta stagione.",
      "Con il vento di bora i collegamenti possono saltare.",
      "Nei ristoranti sul molo controllare il prezzo del pesce a peso."
    ],
    gite: [
      {
        "nome": "Orebić",
        "distanza": "breve traversata in traghetto",
        "come": "Traghetto e passeggeri da Curzola per Orebić, sulla penisola di Pelješac.",
        "testo": "Il paese dei capitani di mare, con le ville dei marinai, il monastero francescano sulla collina e la vista su Curzola. Da qui partono le strade per le cantine di Dingač e Potomje."
      },
      {
        "nome": "Ston",
        "distanza": "circa 1 ora in auto da Orebić",
        "come": "Traghetto per Orebić e poi in auto lungo la penisola di Pelješac.",
        "testo": "Le mura difensive più lunghe d'Europa, oltre cinque chilometri sulla collina, le saline ancora in uso e le ostriche di Mali Ston da mangiare crude."
      },
      {
        "nome": "Parco Nazionale di Mljet",
        "distanza": "in catamarano stagionale",
        "come": "Catamarani in estate da Curzola per Pomena o Polače; da controllare orari e giorni.",
        "testo": "L'isola verde con i due laghi salati, il Veliko e il Malo jezero, e l'isolotto con il monastero benedettino in mezzo al lago grande. Si gira in bici o in barca."
      }
    ],
    faq: [
      {
        "domanda": "Curzola in giornata o conviene dormirci?",
        "risposta": "Conviene almeno una notte: la città vecchia dà il meglio la sera, quando ripartono le barche delle escursioni e c'è la moreška."
      },
      {
        "domanda": "Come si arriva a Curzola?",
        "risposta": "In catamarano da Spalato, Hvar (circa un'ora e mezza) o Dubrovnik (circa due ore), oppure in auto con il traghetto da Orebić. In estate i catamarani vanno prenotati presto."
      },
      {
        "domanda": "Marco Polo è nato davvero a Curzola?",
        "risposta": "È una tradizione locale, non un fatto documentato. La casa che porta il suo nome è un piccolo museo dedicato ai viaggi e al legame con l'isola."
      },
      {
        "domanda": "Quando si vede la moreška?",
        "risposta": "Di solito il lunedì e il giovedì sera in luglio e agosto, con biglietto intorno ai 20 €. Le date si controllano sul sito turistico di Curzola."
      },
      {
        "domanda": "Dove fare il bagno a Curzola?",
        "risposta": "A Lumbarda, con le spiagge di sabbia come Pržina, o sull'isola di Badija in taxi-boat. In città ci sono scogli e piccoli moli attrezzati."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'La città vecchia di Curzola sulla penisola fortificata',
    immagine: '/images/viaggi/croazia-itinerario/giorno-10-curzola.jpg',
  },
  {
    slug: 'dubrovnik',
    paeseSlug: 'croazia',
    ordine: 7,
    nome: 'Dubrovnik e Ston',
    tipologia: ['città fortificata', 'mare', 'isole'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Dubrovnik è stata l'ultima tappa del giro della Croazia con gli amici: tre notti, con le mura il primo pomeriggio, lo Stradun la mattina presto, la barca per Lokrum, la funivia sul Srđ al tramonto e una giornata a Ston.",
    introduzione:
      'L\'antica repubblica di Ragusa, chiusa da due chilometri di mura sopra il mare, con lo Stradun, i palazzi e i monasteri. Davanti c\'è l\'isola di Lokrum; a nord, Ston con le sue mura lunghe oltre cinque chilometri e le ostriche di Mali Ston.',
    percheAndarci: 'Per il giro delle mura, la città vecchia, Lokrum e le gite verso Ston, le Elafiti e le Bocche di Cattaro.',
    cosaVedere: [
      'Le mura e la fortezza di Lovrijenac',
      'Lo Stradun e il palazzo del Rettore',
      'L\'isola di Lokrum',
      'Il panorama dal monte Srđ',
      'Le mura e le saline di Ston',
    ],
    cosaFare: ['Il giro delle mura nel tardo pomeriggio', 'Un bagno al Buža, fuori dalle mura', 'Ostriche a Mali Ston'],
    doveDormire: 'Dentro le mura (da 150 €, spesso oltre 250 € in alta stagione) o a Lapad e Gruž per prezzi più bassi.',
    comeArrivare:
      "L'aeroporto di Dubrovnik (Čilipi) è a circa 20 km a sud della città: la navetta Platanus arriva alla Porta di Ploče e alla stazione di Gruž in circa 30-35 minuti, per circa 10 € (15 € andata e ritorno); il taxi costa circa 40-50 €, Uber e Bolt di solito meno. I catamarani da Spalato, Hvar e Curzola attraccano a Gruž, da dove i bus Libertas 1A e 1B portano alla Porta Pile per circa 2 €. In auto si arriva da nord sul ponte di Pelješac, senza passare dalla Bosnia a Neum; i parcheggi vicino alla città vecchia sono pochi e cari.",
    comeSpostarsi: 'A piedi in centro; bus urbani per Gruž e Lapad; barca per Lokrum.',
    periodoMigliore: 'maggio-giugno e settembre-ottobre.',
    costi:
      "Mura circa 40 € (comprendono la fortezza di Lovrijenac); funivia 30 € andata e ritorno; Lokrum 30 € con la barca; Palazzo del Rettore 15 €, oppure 20 € per il biglietto unico dei dieci musei cittadini, valido 7 giorni; mura di Ston circa 10 €. Budget al giorno a persona, con la doppia divisa in due: basso 70-100 €, medio 130-200 €, alto oltre 300 €. Dubrovnik è la città più cara della Croazia, soprattutto in luglio e agosto.",
    erroriDaEvitare: [
      'Salire sulle mura nelle ore centrali, con caldo e folla delle crociere',
      'Prenotare dentro le mura senza considerare le scale con i bagagli',
      'Arrivare in auto e cercare parcheggio vicino alla città vecchia',
    ],
    luoghi: [
      {
        "nome": "Mura di Dubrovnik",
        "testo": "Un anello di mura medievali lungo quasi due chilometri intorno alla città vecchia, con torri e bastioni. È il percorso più bello per vedere i tetti rossi e il mare.",
        "come": "Si sale dalla Porta Pile o dal lato del porto, seguendo le indicazioni sul posto.",
        "quando": "All'apertura o nel tardo pomeriggio: a mezzogiorno è caldo e affollato.",
        "tempo": "1 ora e mezza-2 ore",
        "costo": "circa 40 € (2026), con ingresso alla fortezza di Lovrijenac compreso",
        "consiglio": "Portare acqua e un cappello: ci sono pochi punti d'ombra.",
        "lat": 42.64172,
        "lng": 18.10729,
        "url": "https://citywallsdubrovnik.hr/"
      },
      {
        "nome": "Stradun e città vecchia",
        "testo": "La via principale in pietra levigata, lunga circa 300 metri, con la fontana di Onofrio, il Palazzo del Rettore e la chiesa di San Biagio. Dopo il terremoto del 1667 fu ricostruita in forme barocche.",
        "come": "A piedi dalla Porta Pile. L'auto non entra.",
        "quando": "Presto la mattina o la sera.",
        "tempo": "2-3 ore",
        "consiglio": "Un giro dopo le 20, quando i gruppi sono ripartiti, è molto diverso.",
        "costo": "gratuito",
        "orari": "Sempre accessibile; chiese e musei lungo la via hanno orari propri.",
        "lat": 42.64134,
        "lng": 18.10885
      },
      {
        "nome": "Fortezza di Lovrijenac",
        "testo": "La fortezza su uno sperone di roccia alto 37 metri fuori dalla Porta Pile, a guardia della città dal lato del mare. Sopra l'ingresso c'è la scritta «Non bene pro toto libertas venditur auro», il motto della repubblica di Ragusa. Dalle terrazze si vedono le mura di fronte, la baia di Pile e il mare aperto.",
        "come": "A piedi dalla Porta Pile, per una scalinata ripida. Si entra con il biglietto delle mura.",
        "quando": "Nel tardo pomeriggio, dopo il giro delle mura, con la luce che colpisce i bastioni di fronte.",
        "tempo": "45 minuti",
        "costo": "compresa nel biglietto delle mura (circa 40 €, 2026)",
        "lat": 42.6408,
        "lng": 18.10423,
        "url": "https://citywallsdubrovnik.hr/",
        "consiglio": "Conservare il biglietto delle mura: vale anche qui nei giorni successivi."
      },
      {
        "nome": "Palazzo del Rettore",
        "testo": "Il palazzo gotico-rinascimentale da cui si governava la repubblica: il rettore ci abitava per un mese, poi lasciava il posto a un altro nobile. Oggi è il Museo di storia culturale, con le sale di rappresentanza, l'armeria, le prigioni e il cortile con il portico. È il modo più chiaro per capire come funzionava Ragusa.",
        "come": "Sulla piazza della Luža, in fondo allo Stradun. Biglietto singolo o unico per i dieci musei della città.",
        "quando": "In mattinata, prima dei gruppi delle navi da crociera.",
        "tempo": "1 ora",
        "costo": "15 €; biglietto unico per 10 musei 20 €, valido 7 giorni (listino ufficiale)",
        "orari": "1 aprile-31 ottobre tutti i giorni 9-18; 1 novembre-31 marzo 9-16, chiuso il lunedì. Chiuso a Natale, Capodanno e il 3 febbraio (San Biagio).",
        "lat": 42.64032,
        "lng": 18.11073,
        "url": "https://www.dumus.hr/en/",
        "consiglio": "Chi pensa di vedere anche il Museo della Guerra patriottica sul Srđ o il Museo marittimo conviene il biglietto unico."
      },
      {
        "nome": "Isola di Lokrum",
        "testo": "L'isola boscosa davanti alla città vecchia, riserva naturale a circa 600 metri dalla città. Ci sono il monastero benedettino con l'orto botanico, il forte napoleonico in cima, i pavoni liberi e il «Mar Morto», un laghetto di acqua salata dove si fa il bagno. Si nuota dagli scogli, lontano dalla folla dello Stradun.",
        "come": "Barche regolari dal porto vecchio, con una breve traversata.",
        "quando": "Nella bella stagione, di mattina; orari delle barche sul posto.",
        "tempo": "mezza giornata",
        "consiglio": "Controllare l'orario dell'ultima barca di rientro prima di partire.",
        "costo": "30 € adulti, 5 € dai 7 ai 18 anni, barca andata e ritorno compresa (listino 2026)",
        "orari": "Barche dal porto vecchio; dal 9 novembre 2026 ogni ora dalle 10 alle 15, ultimo rientro alle 16; in estate le corse sono più frequenti. Con il mare grosso la barca non parte e sull'isola non si pernotta.",
        "lat": 42.62757,
        "lng": 18.12066,
        "url": "https://www.lokrum.hr/"
      },
      {
        "nome": "Funivia e monte Srđ",
        "testo": "Dalla stazione sopra le mura la funivia sale in pochi minuti sul monte Srđ, alto 412 metri, con la vista su tutta la città e le isole. In cima c'è il Forte Imperiale, costruito dai francesi all'inizio dell'Ottocento, che ospita il museo sulla guerra degli anni Novanta, quando la città fu assediata. Al tramonto i tetti rossi e Lokrum si colorano, ed è il momento migliore.",
        "come": "Dalla stazione vicino a Porta Buža, a piedi.",
        "quando": "Tardo pomeriggio per il tramonto.",
        "tempo": "1-2 ore",
        "costo": "30 € andata e ritorno, 17 € solo andata (sito ufficiale, 2026). Chiusa a dicembre e da gennaio a marzo; ultima corsa 30 minuti prima della chiusura.",
        "consiglio": "Prenotare l'ora di salita al tramonto: le code possono essere lunghe.",
        "orari": "2026: aprile 9-21; maggio 9-22 (dal 15 fino alle 23:30); giugno-agosto 9-24; settembre 9-24 (dal 15 fino alle 23); ottobre 9-21 (dal 21 fino alle 20); novembre 9-17. Chiusa da dicembre a marzo e con vento forte.",
        "lat": 42.64307,
        "lng": 18.11157,
        "url": "https://www.dubrovnikcablecar.com/"
      },
      {
        "nome": "Monastero francescano",
        "testo": "Il convento dei Frati Minori, appena dentro la Porta Pile, con un chiostro romanico a colonnine doppie e capitelli tutti diversi. Dentro c'è una farmacia aperta all'inizio del Trecento e ancora in attività, tra le più antiche d'Europa. Il piccolo museo conserva i vasi e i registri dell'antica spezieria.",
        "come": "Si entra dallo Stradun, subito a sinistra dopo la Porta Pile. Biglietto per chiostro e museo; la farmacia si visita come negozio.",
        "quando": "All'apertura, quando il chiostro è ancora silenzioso.",
        "tempo": "30-45 minuti",
        "lat": 42.64167,
        "lng": 18.10773
      },
      {
        "nome": "Cattedrale dell'Assunta",
        "testo": "La cattedrale barocca ricostruita dopo il terremoto del 1667, sul luogo di una chiesa romanica più antica. Sull'altare maggiore c'è un polittico dell'Assunzione attribuito alla bottega di Tiziano. Il tesoro custodisce i reliquiari di San Biagio, il patrono della città.",
        "come": "Dietro il Palazzo del Rettore, verso il porto vecchio. La chiesa è a ingresso libero, il tesoro si paga a parte.",
        "quando": "Fuori dall'orario delle messe, in mattinata.",
        "tempo": "30 minuti",
        "lat": 42.63991,
        "lng": 18.11042
      },
      {
        "nome": "Chiesa di San Biagio e colonna di Orlando",
        "testo": "La chiesa barocca del patrono, in fondo allo Stradun, con la statua d'argento del santo che tiene in mano un modellino della città. Davanti c'è la colonna di Orlando, del 1418, dove si leggevano i decreti e da cui si issava la bandiera della repubblica. Il 3 febbraio la festa di San Biagio riempie la piazza.",
        "come": "Sulla piazza della Luža, a piedi dallo Stradun.",
        "quando": "La sera, quando la piazza si svuota e la facciata è illuminata.",
        "tempo": "20 minuti",
        "costo": "gratuito",
        "lat": 42.6407,
        "lng": 18.11028
      },
      {
        "nome": "Monastero domenicano",
        "testo": "Il grande convento accanto alla Porta di Ploče, incastrato nelle mura sul lato est. Il chiostro gotico con le bifore e il giardino è uno degli angoli più quieti della città vecchia. Il museo raccoglie dipinti della scuola ragusea, oreficerie e manoscritti.",
        "come": "A piedi dalla piazza della Luža verso la Porta di Ploče. Biglietto all'ingresso del chiostro.",
        "quando": "Nel primo pomeriggio, quando i gruppi sono sulle mura.",
        "tempo": "45 minuti",
        "lat": 42.64165,
        "lng": 18.11111
      },
      {
        "nome": "Buža, gli scogli sotto le mura",
        "testo": "Un'apertura nelle mura sul lato sud porta a un bar ricavato sulle rocce a strapiombo sul mare. Si beve qualcosa guardando Lokrum e ci si tuffa dagli scogli, con scalette di metallo per risalire.",
        "come": "Si segue il cartello «Cold drinks» dalla zona della cattedrale dei Gesuiti e si passa dal buco nelle mura.",
        "quando": "Al tramonto per il bar, al mattino per nuotare con meno gente.",
        "tempo": "1-2 ore",
        "lat": 42.63899,
        "lng": 18.10884,
        "consiglio": "Scarpette da scoglio e niente bambini piccoli: non c'è spiaggia, solo rocce."
      },
      {
        "nome": "Spiaggia di Banje",
        "testo": "La spiaggia di ciottoli più vicina alla città vecchia, appena fuori dalla Porta di Ploče, con la vista sulle mura e su Lokrum. Una parte è libera, un'altra è occupata da un beach club con lettini a pagamento.",
        "come": "A piedi in 5 minuti dalla Porta di Ploče, scendendo dalla strada.",
        "quando": "Al mattino presto o dopo le 17; nelle ore centrali d'estate è piena.",
        "tempo": "2-3 ore",
        "costo": "accesso libero; lettini del beach club a pagamento",
        "lat": 42.64161,
        "lng": 18.11638
      },
      {
        "nome": "Ston e le ostriche di Mali Ston",
        "testo": "Le mura di Ston, lunghe circa 5,5 km, sono tra i sistemi di fortificazione più lunghi conservati al mondo. Nella baia di Mali Ston si allevano le ostriche.",
        "come": "In auto da Dubrovnik lungo la costa verso nord-ovest, all'inizio della penisola di Pelješac.",
        "quando": "Mattina per le mura e pranzo con le ostriche.",
        "tempo": "mezza giornata",
        "consiglio": "Le mura si salgono a pagamento, ma la camminata è faticosa.",
        "costo": "mura di Ston circa 10 € (2026)",
        "lat": 42.83964,
        "lng": 17.69399
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Stradun all'apertura, monastero francescano e Palazzo del Rettore prima delle crociere",
          "Tarda mattinata: cattedrale e chiesa di San Biagio sulla Luža",
          "Pranzo: fuori dallo Stradun, nei vicoli laterali",
          "Pomeriggio: bagno a Banje o agli scogli del Buža",
          "Tardo pomeriggio: giro delle mura dalla Porta Pile, poi Lovrijenac con lo stesso biglietto",
          "Sera: funivia sul Srđ per il tramonto"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come il programma di un giorno",
          "Giorno 2, mattina: barca per Lokrum, monastero benedettino, orto botanico e bagno nel «Mar Morto»",
          "Giorno 2, pomeriggio: monastero domenicano e Museo marittimo con il biglietto unico dei musei",
          "Giorno 2, sera: cena a Lapad o a Gruž, più economici del centro"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1 e 2: come sopra",
          "Giorno 3: in auto a Ston, mura fino a Mali Ston al mattino e ostriche a pranzo, poi le cantine di Dingač sulla penisola di Pelješac",
          "In alternativa: battello per le isole Elafiti (Koločep, Lopud, Šipan) dal porto di Gruž"
        ]
      }
    ],
    zone: [
      {
        "nome": "Città vecchia",
        "perChi": "chi vuole stare dentro le mura",
        "testo": "Camere dentro la città, ma rumorosa, con folla di giorno e pochi servizi per le auto.",
        "fascia": "150-350 €"
      },
      {
        "nome": "Ploče",
        "perChi": "Chi vuole la vista sulla città vecchia e ha budget alto",
        "testo": "Il quartiere sulla collina appena a est della Porta di Ploče, con gli alberghi più cari e le terrazze affacciate sul porto vecchio e su Lokrum. Banje è sotto casa e la città vecchia a pochi minuti a piedi, ma si sale e si scende a scale.",
        "fascia": "250-500 €"
      },
      {
        "nome": "Lapad e Babin Kuk",
        "perChi": "chi cerca spiagge",
        "testo": "Penisole a pochi km, con alberghi, spiagge e bus per il centro.",
        "fascia": "100-250 €"
      },
      {
        "nome": "Gruž",
        "perChi": "Chi arriva o riparte in catamarano e cerca prezzi più bassi",
        "testo": "Il quartiere del porto, con il mercato del mattino, la stazione degli autobus e i moli dei catamarani. Non è il più bello, ma le camere costano meno e i bus 1A e 1B arrivano alla Porta Pile in un quarto d'ora.",
        "fascia": "80-180 €"
      }
    ],
    gite: [
      {
        "nome": "Cavtat",
        "distanza": "circa 20 km, 30 minuti",
        "come": "Bus urbano Libertas linea 10 dalla stazione di Gruž o barca dal porto vecchio di Dubrovnik.",
        "testo": "Un paese di mare tranquillo su una penisola verde, con il lungomare di palme, il mausoleo Račić dello scultore Meštrović e un sentiero intorno alla punta con calette per il bagno. È vicino all'aeroporto: buono anche per l'ultima mattina."
      },
      {
        "nome": "Isole Elafiti",
        "distanza": "da 30 minuti a 1 ora in battello",
        "come": "Battelli di linea Jadrolinija o gite organizzate dal porto di Gruž verso Koločep, Lopud e Šipan.",
        "testo": "Tre isole senza auto, con paesi di pescatori, ville estive della nobiltà ragusea e spiagge come la sabbiosa Šunj a Lopud. Si possono unire due isole nella stessa giornata."
      },
      {
        "nome": "Mljet",
        "distanza": "circa 1 ora e mezza-2 ore in catamarano",
        "come": "Catamarano dal porto di Gruž; poi bus, bici o a piedi fino ai laghi del parco nazionale.",
        "testo": "La metà ovest dell'isola è parco nazionale, con due laghi salati tra le pinete e il monastero benedettino sull'isolotto di Santa Maria, in mezzo al lago grande. Si gira in bici o in kayak."
      },
      {
        "nome": "Bocche di Cattaro (Montenegro)",
        "distanza": "circa 2 ore in auto, con frontiera",
        "come": "In auto a noleggio (serve l'autorizzazione del noleggiatore e la carta verde) o con un'escursione organizzata.",
        "testo": "Il fiordo del Montenegro con Perast e i suoi isolotti e la città murata di Cattaro sotto la montagna. Il passaggio di frontiera, fuori da Schengen, in estate può richiedere tempo: conviene partire presto."
      }
    ],
    sapori: [
      {
        nome: "Ostriche di Mali Ston",
        testo: "Piccole e salate, allevate nella baia vicina."
      },
      {
        nome: "Rožata",
        testo: "Crema caramellata della città."
      },
      {
        nome: "Crni rižot",
        testo: "Risotto nero al nero di seppia."
      },
      {
        nome: "Dingač",
        testo: "Rosso intenso della penisola di Pelješac."
      }
    ],
    attenzioni: [
      "In alta stagione la città è molto affollata, con limiti per le navi da crociera: evitare le ore centrali.",
      "I ristoranti sullo Stradun costano di più: andare nei vicoli laterali o fuori dalle mura.",
      "Nei parcheggi dentro e fuori città si paga a ore e si applicano multe per chi resta oltre.",
      "Il ponte di Pelješac evita il passaggio in Bosnia a Neum, quindi nessun controllo di frontiera."
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Dubrovnik?",
        "risposta": "Due giorni bastano per mura, città vecchia, funivia e Lokrum. Con tre si aggiunge Ston con le ostriche, le Elafiti o il Montenegro."
      },
      {
        "domanda": "Quanto costano le mura di Dubrovnik e conviene il Dubrovnik Pass?",
        "risposta": "Il biglietto delle mura costa circa 40 € e comprende la fortezza di Lovrijenac. Il Dubrovnik Pass da un giorno ha lo stesso prezzo e aggiunge musei e bus, ma non la funivia."
      },
      {
        "domanda": "Qual è l'ora migliore per fare le mura?",
        "risposta": "All'apertura o nel tardo pomeriggio. A mezzogiorno d'estate sulle mura fa molto caldo, l'ombra quasi non c'è e arrivano i gruppi delle navi da crociera."
      },
      {
        "domanda": "Dove dormire a Dubrovnik?",
        "risposta": "Dentro le mura per l'atmosfera (circa 150-350 € a notte, con molte scale), a Ploče per la vista, a Lapad per spiagge e prezzi più bassi, a Gruž per il porto dei catamarani."
      },
      {
        "domanda": "Come si arriva a Lokrum e quanto costa?",
        "risposta": "Con la barca dal porto vecchio, in circa 15 minuti. Il biglietto della riserva costa 30 € (5 € dai 7 ai 18 anni) e comprende la traversata; l'ultima barca rientra nel pomeriggio."
      },
      {
        "domanda": "Si può fare una gita in Montenegro da Dubrovnik?",
        "risposta": "Sì, le Bocche di Cattaro sono a circa due ore di strada. Serve un documento valido per l'espatrio e, con l'auto a noleggio, il permesso del noleggiatore."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'Le mura e il porto vecchio di Dubrovnik sul mare',
    immagine: '/images/viaggi/croazia-itinerario/giorno-11-dubrovnik.jpg',
  },
]
