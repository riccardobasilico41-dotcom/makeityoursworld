import type { Destinazione } from '@/lib/types'

// Destinazioni del viaggio «Scozia in auto» (src/content/viaggi/97-scozia-highlands-distillerie.md).
// Viaggio di Rick a luglio, completato con la ricerca. Tappe fatte da lui (visitataPersonalmente):
// Edimburgo, Glasgow di passaggio, Loch Lomond e Glencoe (bellissima), Oban e da lì le Ebridi
// (isole non specificate), Glenfinnan per il Jacobite, Skye, Cairngorms, Inverness e Loch Ness («meh»), le distillerie, la North Coast 500 (mozzafiato;
// anche l'autunno con il foliage è bellissimo). Ee-Usk a Oban buonissimo, meteo imprevedibile. Orari e prezzi delle distillerie presi dai siti ufficiali
// (malts.com, laphroaig.com) a novembre 2026. Foto da Wikimedia Commons, crediti in docs/uk-registri.md.

const IMG = '/images/viaggi/scozia-highlands-distillerie'

export const destinazioniScozia: Destinazione[] = [
  {
    slug: 'edimburgo',
    paeseSlug: 'scozia',
    ordine: 1,
    nome: 'Edimburgo',
    tipologia: ['città', 'storia', 'cultura'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La capitale della Scozia, costruita su colline vulcaniche. La Old Town medievale scende dal castello lungo il Royal Mile fino al palazzo di Holyrood; sotto, la New Town georgiana. Le due insieme sono patrimonio UNESCO.',
    percheAndarci:
      'Per il castello sulla roccia, i vicoli della Old Town e i panorami da Calton Hill e da Arthur\'s Seat. È anche il punto di partenza più comodo per il giro in auto.',
    cosaVedere: ['Il Castello di Edimburgo', 'Il Royal Mile', 'Holyrood e Arthur\'s Seat', 'Calton Hill', 'La New Town e Princes Street Gardens', 'Il Museo Nazionale di Scozia'],
    cosaFare: ['Salire su Arthur\'s Seat', 'Il tramonto da Calton Hill', 'Perdersi nei close, i vicoli che scendono dal Royal Mile'],
    comeArrivare:
      'Voli diretti dall\'Italia per l\'aeroporto di Edimburgo; dal Regno Unito anche in treno, fino alla stazione di Waverley in centro. Dall\'aeroporto il tram arriva a Princes Street in 30-35 minuti per circa 7,90 £, con biglietto alla macchinetta prima di salire; l\'Airlink 100 va a Waverley in circa mezz\'ora per circa 6 £; il taxi costa circa 25-30 £. Da Londra King\'s Cross i treni diretti impiegano circa 4 ore e mezza. Serve l\'autorizzazione UK ETA, 20 £ (2026).',
    comeSpostarsi: 'A piedi, con i bus e il tram. L\'auto conviene ritirarla il giorno in cui si parte per le Highlands.',
    periodoMigliore: 'da maggio a settembre; ad agosto ci sono i festival e i prezzi salgono molto',
    costi:
      'Castello: 23,50 sterline online, 26 alla cassa (adulti, 2026). Dal 24 luglio 2026 c\'è una tassa di soggiorno del 5% sul prezzo dell\'alloggio, per le prime 5 notti. Budget indicativo al giorno a persona, con la doppia divisa in due: basso 90-120 €, medio 170-240 €, alto oltre 350 € (ad agosto molto di più).',
    erroriDaEvitare: [
      'Andare al castello senza biglietto: i biglietti finiscono spesso con molto anticipo',
      'Prenotare ad agosto all\'ultimo momento, quando c\'è il Fringe',
      'Tenere l\'auto in città: non serve e parcheggiare costa',
    ],
    miaEsperienza: 'Ci sono stato a luglio, nel mio giro della Scozia.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Castello di Edimburgo",
        "testo": "La fortezza in cima alla Castle Rock, sopra la città. Dentro ci sono gli Onori di Scozia, i gioielli della Corona scozzese, e la cappella di St Margaret, del XII secolo, considerata il più antico edificio di Edimburgo.",
        "come": "A piedi dalla parte alta del Royal Mile. Il biglietto online costa meno e conviene comprarlo prima: quando i biglietti online finiscono, al castello non se ne trovano.",
        "quando": "All'apertura, dalle 9:30.",
        "tempo": "2-3 ore",
        "costo": "23,50 £ online (circa 27 €), 26 £ alla cassa (adulti, 2026)",
        "orari": "Tutti i giorni dalle 9:30; chiusura alle 18 da aprile a settembre e alle 17 da ottobre a marzo, ultimo ingresso un'ora prima.",
        "lat": 55.9486,
        "lng": -3.1999,
        "url": "https://www.edinburghcastle.scot"
      },
      {
        "nome": "Royal Mile",
        "testo": "La strada della Old Town che scende dal castello al palazzo di Holyrood, con la cattedrale di St Giles a metà. Ai lati si aprono i close, vicoli stretti e ripidi.",
        "come": "A piedi, dall'alto verso il basso.",
        "quando": "La mattina presto o la sera, quando c'è meno gente.",
        "tempo": "mezza giornata",
        "costo": "gratuito",
        "lat": 55.95,
        "lng": -3.188
      },
      {
        "nome": "Arthur's Seat",
        "testo": "La collina di un antico vulcano dentro l'Holyrood Park, a due passi dalla Old Town. Dalla cima si vedono la città e il mare.",
        "come": "A piedi da Holyrood, su sentieri in salita. Con il vento in cima fa freddo anche d'estate.",
        "quando": "Con il cielo sereno, meglio la mattina o al tramonto.",
        "tempo": "2 ore andata e ritorno",
        "costo": "gratuito",
        "lat": 55.9441,
        "lng": -3.1618
      },
      {
        "nome": "Calton Hill",
        "testo": "La collina sopra la fine di Princes Street, con i monumenti neoclassici e la vista sulla Old Town, sul castello e su Arthur's Seat.",
        "come": "A piedi, con una salita breve.",
        "quando": "Al tramonto.",
        "tempo": "1 ora",
        "costo": "gratuito",
        "lat": 55.9553,
        "lng": -3.1826
      },
      {
        "nome": "Palazzo di Holyroodhouse",
        "testo": "La residenza ufficiale del sovrano in Scozia, in fondo al Royal Mile, con gli appartamenti di Maria Stuarda e le rovine dell'abbazia di Holyrood nel parco. Di fronte c'è il Parlamento scozzese, un edificio contemporaneo molto discusso.",
        "come": "A piedi scendendo il Royal Mile; biglietto con audioguida, meglio online.",
        "quando": "La mattina, prima di salire su Arthur's Seat che parte da qui.",
        "tempo": "1h30",
        "costo": "a pagamento, con audioguida",
        "orari": "Chiuso quando il sovrano è in residenza, di solito tra fine giugno e inizio luglio, e in alcuni giorni d'inverno: controllare il calendario.",
        "lat": 55.9527,
        "lng": -3.1722,
        "url": "https://www.rct.uk/visit/palace-of-holyroodhouse"
      },
      {
        "nome": "National Museum of Scotland",
        "testo": "Il museo nazionale, gratuito, con la storia della Scozia dai Pitti alla pecora Dolly, le scacchiere di Lewis e una grande galleria di scienza e natura. Dalla terrazza sul tetto si vede il castello.",
        "come": "In Chambers Street, a cinque minuti dal Royal Mile per George IV Bridge.",
        "quando": "In un pomeriggio di pioggia.",
        "tempo": "2 ore",
        "costo": "gratuito",
        "orari": "Tutti i giorni 10-17.",
        "lat": 55.9469,
        "lng": -3.1897,
        "url": "https://www.nms.ac.uk/"
      },
      {
        "nome": "Scottish National Gallery e Princes Street Gardens",
        "testo": "La pinacoteca nazionale, gratuita, con Raffaello, Tiziano, Vermeer, Velázquez e i pittori scozzesi come Raeburn. È ai piedi della collina, nei giardini che separano la Old Town dalla New Town, sotto il castello.",
        "come": "Sul Mound, a due minuti da Waverley e da Princes Street.",
        "quando": "La mattina; i giardini al pomeriggio con il sole sul castello.",
        "tempo": "1h30",
        "costo": "gratuito",
        "orari": "Tutti i giorni 10-17.",
        "lat": 55.9509,
        "lng": -3.1959,
        "url": "https://www.nationalgalleries.org/"
      },
      {
        "nome": "Cattedrale di St Giles",
        "testo": "La chiesa principale di Edimburgo, a metà del Royal Mile, con la corona di pietra sul campanile e la Thistle Chapel, intagliata in legno e dedicata all'ordine del Cardo. Qui predicò John Knox.",
        "come": "Sul Royal Mile, in Parliament Square. Ingresso libero con offerta suggerita; visita al tetto a pagamento in alcuni periodi.",
        "quando": "A metà mattina, scendendo dal castello.",
        "tempo": "30-45 minuti",
        "costo": "ingresso libero, offerta suggerita",
        "lat": 55.9495,
        "lng": -3.1909,
        "url": "https://www.stgilescathedral.org.uk/"
      },
      {
        "nome": "Victoria Street e Grassmarket",
        "testo": "La strada curva con le facciate colorate che scende dal George IV Bridge alla piazza del Grassmarket, l'antico mercato del bestiame e luogo delle impiccagioni, oggi piena di pub. Da qui si vede il castello dal basso.",
        "come": "A piedi dal Royal Mile; dal Grassmarket la scalinata del Vennel porta a una delle viste migliori sul castello.",
        "quando": "Al mattino presto per le foto; la sera per i pub.",
        "tempo": "1 ora",
        "costo": "gratuito",
        "lat": 55.9478,
        "lng": -3.1945
      },
      {
        "nome": "Greyfriars Kirkyard",
        "testo": "Il cimitero seicentesco con le tombe sovrastate dal castello e la statua del cane Bobby, che secondo la storia vegliò per anni la tomba del padrone. Alcune lapidi hanno dato nomi ai personaggi di Harry Potter.",
        "come": "Ingresso da Candlemaker Row, accanto alla statua di Bobby, a due passi dal National Museum.",
        "quando": "Di giorno; la sera ci sono i tour sui fantasmi.",
        "tempo": "30 minuti",
        "costo": "gratuito",
        "lat": 55.9469,
        "lng": -3.1925
      },
      {
        "nome": "The Real Mary King's Close",
        "testo": "Vicoli e case del Seicento rimasti sepolti sotto il palazzo della City Chambers, visitabili solo con guida. Si racconta la vita della Old Town, la peste e le storie del close.",
        "come": "Ingresso sul Royal Mile di fronte a St Giles. Visite guidate a orario, da prenotare online.",
        "quando": "Un giorno di pioggia; d'estate i turni si esauriscono.",
        "tempo": "1 ora",
        "costo": "circa 28,50 £ (circa 33 €, 2026), solo con visita guidata",
        "lat": 55.95,
        "lng": -3.1905,
        "url": "https://www.realmarykingsclose.com/"
      },
      {
        "nome": "Dean Village e Water of Leith",
        "testo": "Un vecchio villaggio di mulini sul fiume, a dieci minuti dal West End, con case di pietra e il ponte di Telford. Il sentiero lungo il Water of Leith continua fino alla Scottish National Gallery of Modern Art e a Stockbridge.",
        "come": "A piedi dalla fine di Princes Street per Queensferry Street; si scende a Bell's Brae.",
        "quando": "La domenica mattina, con il mercato di Stockbridge.",
        "tempo": "1-2 ore",
        "costo": "gratuito",
        "lat": 55.952,
        "lng": -3.217,
        "consiglio": "È un quartiere abitato: niente droni e voce bassa tra le case."
      },
      {
        "nome": "Camera Obscura and World of Illusions",
        "testo": "Una camera ottica vittoriana in cima a una torre accanto al castello, che proietta la città dal vivo su un tavolo, più cinque piani di illusioni ottiche. È adatta soprattutto a chi viaggia con bambini.",
        "come": "In Castlehill, in cima al Royal Mile; biglietto online più economico.",
        "quando": "Con il cielo limpido, per la proiezione.",
        "tempo": "1h30",
        "costo": "circa 25 £ alla cassa, circa 21 £ online (circa 29 € e 24 €, 2026)",
        "lat": 55.949,
        "lng": -3.1957,
        "url": "https://www.camera-obscura.co.uk/"
      },
      {
        "nome": "Leith e Royal Yacht Britannia",
        "testo": "Il porto di Edimburgo, con i ristoranti di pesce sulla Shore e lo yacht della famiglia reale, ormeggiato all'Ocean Terminal. A bordo si vedono gli appartamenti della regina Elisabetta e la sala macchine.",
        "come": "Tram da Princes Street fino a Ocean Terminal o Newhaven, circa 20 minuti.",
        "quando": "Il pomeriggio, restando a Leith per cena.",
        "tempo": "mezza giornata",
        "costo": "Britannia 23 £ online, 25 £ alla cassa (circa 27-29 €, da ottobre 2026); il quartiere si gira gratis",
        "lat": 55.9822,
        "lng": -3.1772,
        "url": "https://www.royalyachtbritannia.co.uk/"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Castello all'apertura, con biglietto online",
          "Royal Mile in discesa, con St Giles e The Real Mary King's Close",
          "Pranzo e Victoria Street, Grassmarket e Greyfriars",
          "Holyrood e tramonto da Calton Hill"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: castello, Royal Mile, St Giles, Victoria Street e Grassmarket, Calton Hill al tramonto",
          "Giorno 2: Holyrood e Arthur's Seat al mattino; National Museum of Scotland; New Town, Princes Street Gardens e Scottish National Gallery"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: castello, Royal Mile, Mary King's Close, Grassmarket",
          "Giorno 2: Holyrood, Arthur's Seat, National Museum, Calton Hill al tramonto",
          "Giorno 3: Dean Village e Stockbridge al mattino, poi Leith e il Britannia, con cena sulla Shore; oppure gita a Stirling"
        ]
      }
    ],
    zone: [
      {
        "nome": "Old Town",
        "perChi": "chi vuole tutto a piedi",
        "testo": "Lungo e intorno al Royal Mile. Comodo, ma rumoroso la sera e caro d'estate.",
        "fascia": "160-300 €"
      },
      {
        "nome": "New Town",
        "perChi": "chi vuole più calma",
        "testo": "Le strade georgiane sotto il castello, a pochi minuti dalla stazione di Waverley.",
        "fascia": "170-320 €"
      },
      {
        "nome": "Leith",
        "perChi": "chi cerca prezzi più bassi e buoni ristoranti",
        "testo": "Il porto, collegato al centro dal tram.",
        "fascia": "110-200 €"
      }
    ],
    gite: [
      {
        "nome": "Stirling",
        "distanza": "50 minuti in treno",
        "come": "Treni frequenti da Waverley; dalla stazione si sale a piedi al castello in 15-20 minuti.",
        "testo": "Il castello dei re Stuart sopra la pianura delle battaglie per l'indipendenza, e il Wallace Monument sulla collina di fronte."
      },
      {
        "nome": "South Queensferry e i ponti sul Forth",
        "distanza": "15 km, 20 minuti in treno",
        "come": "Treno da Waverley a Dalmeny e 15 minuti a piedi in discesa fino al paese.",
        "testo": "Il villaggio sotto il Forth Bridge, il ponte ferroviario rosso dell'Ottocento patrimonio UNESCO, affiancato da due ponti moderni. In stagione ci sono battelli per l'isola di Inchcolm."
      },
      {
        "nome": "Rosslyn Chapel",
        "distanza": "12 km, 45 minuti in bus",
        "come": "Bus Lothian 37 dal centro fino a Roslin; ingresso a orario, da prenotare.",
        "testo": "Una cappella del Quattrocento coperta di sculture in pietra, resa famosa dal Codice da Vinci. Intorno c'è una valle boscosa con i resti del castello."
      },
      {
        "nome": "North Berwick",
        "distanza": "35 minuti in treno",
        "come": "Treno diretto da Waverley; il paese è davanti alla stazione.",
        "testo": "Una cittadina di mare con spiagge, il Seabird Centre e le uscite in barca al Bass Rock, la più grande colonia di sule del mondo."
      }
    ],
    sapori: [
      { nome: 'Haggis', testo: 'Il piatto nazionale, di frattaglie d\'agnello, avena e spezie, servito con neeps and tatties, rapa e patate.' },
      { nome: 'Cullen skink', testo: 'Una zuppa densa di eglefino affumicato, patate e cipolla.' },
    ],
    attenzioni: ['Ad agosto la città è piena per i festival: alloggi da prenotare con mesi di anticipo.', 'Il vento su Arthur\'s Seat e Calton Hill: serve una giacca anche d\'estate.'],
    faq: [
      {
        "domanda": "Quanti giorni servono a Edimburgo?",
        "risposta": "Due giorni per castello, Old Town, Holyrood e New Town; tre per aggiungere Arthur's Seat con calma, Leith o una gita a Stirling."
      },
      {
        "domanda": "Bisogna prenotare il castello di Edimburgo?",
        "risposta": "Sì: online costa 23,50 £ contro 26 alla cassa (2026), e d'estate quando i biglietti online finiscono non se ne trovano sul posto."
      },
      {
        "domanda": "Conviene andare a Edimburgo ad agosto?",
        "risposta": "Solo per i festival, a partire dal Fringe: la città è piena, gli alloggi costano il doppio e vanno prenotati con mesi di anticipo. Maggio, giugno e settembre hanno giornate lunghe e meno gente."
      },
      {
        "domanda": "C'è una tassa di soggiorno a Edimburgo?",
        "risposta": "Sì, dal 24 luglio 2026: il 5% sul prezzo dell'alloggio, per le prime cinque notti."
      },
      {
        "domanda": "Come si va dall'aeroporto al centro di Edimburgo?",
        "risposta": "Il tram arriva a Princes Street in 30-35 minuti per circa 7,90 £, con biglietto da fare prima di salire. L'Airlink 100 va a Waverley in circa mezz'ora per circa 6 £."
      },
      {
        "domanda": "Dove dormire a Edimburgo?",
        "risposta": "Old Town per avere tutto a piedi, New Town per più calma vicino a Waverley, Leith per spendere meno e mangiare bene. Fuori da agosto una doppia costa circa 110-300 €."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'Il Castello di Edimburgo sulla roccia, sopra il verde dei Princes Street Gardens',
    immagine: `${IMG}/giorno-02-castello.webp`,
  },
  {
    slug: 'glasgow',
    paeseSlug: 'scozia',
    ordine: 2,
    nome: 'Glasgow',
    tipologia: ['città', 'musei', 'architettura'],
    giorniConsigliati: 'mezza giornata o 1 giorno',
    visitataPersonalmente: true,
    introduzione: 'La città più grande della Scozia, a un\'ora da Edimburgo. Vittoriana, industriale e piena di musei, con la cattedrale medievale e la Necropoli sulla collina accanto.',
    percheAndarci: 'Per una sosta sulla strada verso Loch Lomond: la cattedrale, la Necropoli e il Kelvingrove, il museo d\'arte più famoso della città.',
    cosaVedere: ['La cattedrale di Glasgow', 'La Necropoli', 'Il Kelvingrove Art Gallery and Museum', 'Il centro vittoriano intorno a George Square'],
    cosaFare: ['Salire alla Necropoli per vedere la cattedrale dall\'alto', 'Una passeggiata nel West End e nel Kelvingrove Park'],
    comeArrivare:
      'Dall\'aeroporto di Glasgow (GLA) il bus Glasgow Airport Express 500 porta in centro, fino a Buchanan Bus Station, con partenze ogni 10 minuti e servizio 24 ore su 24, in circa 15-25 minuti. Da Edimburgo i treni ScotRail per Glasgow Queen Street partono più volte all\'ora e impiegano meno di un\'ora; in auto serve circa un\'ora e un quarto. Da Londra Euston ci sono treni diretti per Glasgow Central.',
    costi:
      'I musei della città (Kelvingrove, Riverside, Burrell, GoMA, Provand\'s Lordship) e l\'Hunterian sono gratuiti; si pagano il Glasgow Science Centre (15,50 sterline, circa 18 €) e la nave Glenlee (5,50 sterline, circa 6 €), prezzi 2026. Da gennaio 2027 c\'è una tassa di soggiorno del 5% sul prezzo dell\'alloggio. Budget indicativo al giorno a persona, con la doppia divisa in due: basso 70-100 €, medio 140-200 €, alto oltre 300 €.',
    comeSpostarsi: 'A piedi in centro, la metropolitana per il West End.',
    erroriDaEvitare: ['Entrare in centro in auto senza aver controllato le regole sulle zone a basse emissioni: conviene parcheggiare fuori e usare la metropolitana'],
    miaEsperienza: 'Ci sono passato solo di passaggio.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Cattedrale di Glasgow",
        "testo": "Una delle poche chiese medievali scozzesi rimaste intere dopo la Riforma. La cripta, con la tomba di San Mungo, il fondatore della città, è la parte più antica.",
        "come": "Ingresso libero con una fascia oraria da scegliere online; audioguida a pagamento. È una chiesa in uso e può chiudere per funzioni.",
        "quando": "La mattina, nei giorni feriali.",
        "tempo": "45 minuti-1 ora",
        "costo": "Gratuito, offerte gradite",
        "orari": "Dal 1° aprile al 30 settembre lunedì-sabato 9:30-17, domenica 13-17; dal 1° ottobre al 31 marzo lunedì-sabato 10-16, domenica 13-16. Ultimo ingresso 45 minuti prima. Chiusa il 25-26 dicembre e il 1-2 gennaio.",
        "lat": 55.863,
        "lng": -4.2346,
        "url": "https://www.historicenvironment.scot/visit-a-place/places/glasgow-cathedral/"
      },
      {
        "nome": "Necropoli",
        "testo": "Il cimitero vittoriano sulla collina accanto alla cattedrale, con obelischi, mausolei e statue dei mercanti della città. Dalla cima si vede tutta Glasgow, con la cattedrale sotto.",
        "come": "A piedi dalla cattedrale, attraversando il ponte. Gli Amici della Necropoli organizzano visite guidate a piedi in alcuni fine settimana, da prenotare sul loro sito.",
        "quando": "Con la luce del pomeriggio.",
        "tempo": "1 ora",
        "costo": "Gratuito",
        "lat": 55.86217,
        "lng": -4.2334,
        "url": "https://www.glasgownecropolis.org/"
      },
      {
        "nome": "Provand's Lordship",
        "testo": "La casa più antica di Glasgow, del Quattrocento, di fronte alla cattedrale, con le stanze arredate e un piccolo giardino. Accanto c'è il St Mungo Museum, dedicato alle religioni.",
        "come": "A piedi, sulla piazza della cattedrale.",
        "tempo": "30 minuti",
        "costo": "Gratuito",
        "orari": "Lunedì-giovedì e sabato 10-17, venerdì e domenica 11-17.",
        "lat": 55.8624,
        "lng": -4.2369,
        "url": "https://www.glasgowlife.org.uk/museums/venues/provands-lordship"
      },
      {
        "nome": "Kelvingrove Art Gallery and Museum",
        "testo": "Il museo più visitato della città, in un grande palazzo di arenaria rossa: arte europea e scozzese, armi e armature, storia naturale. La sala più nota ha il Cristo di San Giovanni della Croce di Salvador Dalí.",
        "come": "Metro fino a Kelvinhall, o a piedi dal West End. Ingresso libero, senza prenotazione. Durante i lavori di restauro alcune zone hanno le impalcature, ma il museo resta aperto.",
        "quando": "La mattina nei giorni feriali.",
        "tempo": "2-3 ore",
        "costo": "Gratuito, offerte gradite",
        "orari": "Lunedì-giovedì e sabato 10-17, venerdì e domenica 11-17.",
        "lat": 55.86861,
        "lng": -4.29056,
        "url": "https://www.glasgowlife.org.uk/museums/venues/kelvingrove-art-gallery-and-museum"
      },
      {
        "nome": "Università di Glasgow e Hunterian",
        "testo": "L'edificio principale dell'università, neogotico, con i chiostri e la torre sopra il Kelvingrove Park. Dentro c'è l'Hunterian, il museo più antico della Scozia, e di fronte la galleria d'arte con la Mackintosh House, gli interni ricostruiti della casa di Charles Rennie Mackintosh.",
        "come": "Metro fino a Hillhead, poi a piedi, o a piedi dal Kelvingrove.",
        "quando": "Dal martedì alla domenica.",
        "tempo": "2 ore",
        "costo": "Museo e galleria gratuiti; la Mackintosh House è a pagamento",
        "orari": "Martedì-domenica 10-17, chiuso il lunedì.",
        "lat": 55.87194,
        "lng": -4.28861,
        "url": "https://www.gla.ac.uk/hunterian/"
      },
      {
        "nome": "Kelvingrove Park",
        "testo": "Il parco vittoriano lungo il fiume Kelvin, tra il museo e l'università, con fontane, ponti e la vista sulle torri del West End.",
        "come": "A piedi, tra Kelvingrove e l'università.",
        "quando": "Con il bel tempo, a metà giornata.",
        "tempo": "1 ora",
        "costo": "Gratuito",
        "lat": 55.86833,
        "lng": -4.28639
      },
      {
        "nome": "Riverside Museum e la Glenlee",
        "testo": "Il museo dei trasporti sul fiume Clyde, nell'edificio a zig zag di Zaha Hadid: tram, locomotive, auto e una via di Glasgow ricostruita. All'esterno è ormeggiata la Glenlee, un veliero di fine Ottocento.",
        "come": "In bus dal centro o a piedi lungo il fiume dal Kelvingrove, in circa mezz'ora.",
        "tempo": "2 ore",
        "costo": "Museo gratuito; Glenlee 5,50 sterline, circa 6 € (2026)",
        "orari": "Museo: lunedì-giovedì e sabato 10-17, venerdì e domenica 11-17.",
        "lat": 55.8651,
        "lng": -4.30638,
        "url": "https://www.glasgowlife.org.uk/museums/venues/riverside-museum"
      },
      {
        "nome": "Botanic Gardens e Kibble Palace",
        "testo": "I giardini botanici in fondo a Great Western Road, con il Kibble Palace, una grande serra vittoriana in ferro e vetro piena di felci arboree.",
        "come": "Metro fino a Hillhead, poi pochi minuti a piedi.",
        "quando": "Nei giorni di pioggia, nelle serre.",
        "tempo": "1 ora",
        "costo": "Gratuito",
        "orari": "Giardini tutti i giorni dalle 7 al tramonto; serre 10-18, d'inverno fino alle 16:15.",
        "lat": 55.8793,
        "lng": -4.29066,
        "url": "https://glasgowbotanicgardens.com/"
      },
      {
        "nome": "Ashton Lane",
        "testo": "Un vicolo acciottolato del West End, dietro la metro di Hillhead, con pub, ristoranti e un cinema, sotto le lucine appese.",
        "come": "A piedi dalla metro di Hillhead.",
        "quando": "La sera.",
        "tempo": "1-2 ore",
        "costo": "Gratuito",
        "lat": 55.87476,
        "lng": -4.29286
      },
      {
        "nome": "Burrell Collection",
        "testo": "La raccolta d'arte di un armatore di Glasgow, oltre novemila oggetti tra arazzi, vetrate, ceramiche cinesi e quadri, in un edificio vetrato nel Pollok Country Park. È stata riaperta nel 2022 dopo un lungo restauro.",
        "come": "In treno da Glasgow Central fino a Pollokshaws West, poi a piedi nel parco.",
        "tempo": "2-3 ore",
        "costo": "Gratuito, offerte gradite",
        "orari": "Lunedì-giovedì e sabato 10-17, venerdì e domenica 11-17.",
        "lat": 55.83083,
        "lng": -4.3075,
        "url": "https://www.glasgowlife.org.uk/museums/venues/the-burrell-collection"
      },
      {
        "nome": "Gallery of Modern Art (GoMA)",
        "testo": "La galleria d'arte contemporanea in un palazzo neoclassico di Royal Exchange Square. Davanti c'è la statua del duca di Wellington, quasi sempre con un cono stradale in testa.",
        "come": "A piedi in centro, tra Buchanan Street e George Square.",
        "tempo": "1 ora",
        "costo": "Gratuito, offerte gradite",
        "orari": "Lunedì-giovedì e sabato 10-17, venerdì e domenica 11-17.",
        "lat": 55.8602,
        "lng": -4.25249,
        "url": "https://www.glasgowlife.org.uk/museums/venues/gallery-of-modern-art-goma"
      },
      {
        "nome": "George Square e City Chambers",
        "testo": "La piazza principale della città, con le statue e, su un lato, i City Chambers, il municipio vittoriano con gli interni di marmo.",
        "come": "A piedi, accanto alla stazione di Queen Street.",
        "tempo": "30 minuti",
        "costo": "Gratuito",
        "lat": 55.86111,
        "lng": -4.25028
      },
      {
        "nome": "I murales del centro",
        "testo": "Un percorso tra i grandi murales dipinti sulle facciate del centro, tra cui il San Mungo moderno su High Street, sulla strada verso la cattedrale.",
        "come": "A piedi, con la mappa del City Centre Mural Trail.",
        "tempo": "1-2 ore",
        "costo": "Gratuito"
      },
      {
        "nome": "Glasgow Science Centre",
        "testo": "Il museo della scienza sulla riva sud del Clyde, con esperimenti da toccare, un planetario e la torre girevole accanto. È pensato soprattutto per famiglie.",
        "come": "A piedi dal Riverside attraversando il fiume, o in bus dal centro.",
        "tempo": "2-3 ore",
        "costo": "Adulti 15,50 sterline con la donazione volontaria, 14,09 senza, circa 16-18 € (2026)",
        "orari": "Fino al 25 marzo 2027: mercoledì-venerdì 10-15, sabato e domenica 10-17, chiuso lunedì e martedì. Dal 26 marzo 2027 tutti i giorni 10-17.",
        "lat": 55.85854,
        "lng": -4.2938,
        "url": "https://www.glasgowsciencecentre.org/"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Cattedrale all'apertura",
          "Necropoli",
          "Provand's Lordship",
          "George Square e GoMA",
          "Pomeriggio nel West End: Kelvingrove, Kelvingrove Park e università",
          "Ashton Lane la sera"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come sopra",
          "Giorno 2: Riverside Museum e la Glenlee, i murales del centro, Botanic Gardens nel pomeriggio"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2: come sopra",
          "Giorno 3: Burrell Collection la mattina, poi Science Centre, oppure una gita a Loch Lomond"
        ]
      }
    ],
    zone: [
      {
        "nome": "Merchant City e centro",
        "perChi": "chi vuole tutto a piedi",
        "testo": "Tra George Square, Buchanan Street e la cattedrale: ristoranti, locali e le due stazioni a pochi minuti.",
        "fascia": "100-180 €"
      },
      {
        "nome": "West End",
        "perChi": "chi preferisce un quartiere vivo ma tranquillo",
        "testo": "Intorno all'università, a Byres Road e ad Ashton Lane, con case vittoriane, B&B e la metro per il centro.",
        "fascia": "110-200 €"
      },
      {
        "nome": "Finnieston",
        "perChi": "chi va a cena fuori",
        "testo": "Tra il centro e il West End, lungo Argyle Street: i ristoranti più nuovi della città e il Kelvingrove a due passi.",
        "fascia": "110-190 €"
      },
      {
        "nome": "Vicino alle stazioni",
        "perChi": "chi arriva in treno e riparte presto",
        "testo": "Intorno a Glasgow Central e Queen Street: hotel di catena, comodi per le gite.",
        "fascia": "90-160 €"
      }
    ],
    gite: [
      {
        "nome": "Loch Lomond",
        "distanza": "45 minuti in auto fino a Luss",
        "come": "In auto sulla A82, o in treno fino a Balloch.",
        "testo": "Il lago più grande della Scozia, con il villaggio di Luss sulla riva ovest e le colline intorno. È la prima tappa verso le Highlands."
      },
      {
        "nome": "Edimburgo",
        "distanza": "meno di un'ora in treno",
        "come": "In treno ScotRail da Glasgow Queen Street a Edinburgh Waverley.",
        "testo": "Il castello, la Old Town e la New Town georgiana. Si vede anche in giornata, ma merita una notte."
      },
      {
        "nome": "Stirling",
        "distanza": "circa 40 km",
        "come": "In treno da Glasgow Queen Street, o in auto.",
        "testo": "Il castello degli Stuart in cima a una rupe e il Wallace Monument sulla collina di fronte."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Glasgow?",
        "risposta": "Un giorno per la cattedrale, la Necropoli e il West End. Con due si aggiungono il Riverside e i giardini botanici; con tre la Burrell Collection o una gita."
      },
      {
        "domanda": "Glasgow o Edimburgo come base?",
        "risposta": "Edimburgo per il castello e la Old Town, Glasgow per i musei gratuiti, il West End e la partenza verso Loch Lomond. Sono a meno di un'ora di treno: si può dormire in una e visitare l'altra in giornata."
      },
      {
        "domanda": "I musei di Glasgow sono gratuiti?",
        "risposta": "Sì, quelli della città: Kelvingrove, Riverside, Burrell Collection, GoMA e Provand's Lordship. Anche l'Hunterian dell'università è gratuito, ma chiude il lunedì."
      },
      {
        "domanda": "Bisogna prenotare la cattedrale di Glasgow?",
        "risposta": "L'ingresso è libero, ma si sceglie una fascia oraria online. Gli orari possono cambiare per funzioni ed eventi."
      },
      {
        "domanda": "Si può entrare in auto nel centro di Glasgow?",
        "risposta": "Il centro è una zona a basse emissioni e i veicoli non conformi prendono la multa. Conviene controllare l'auto, parcheggiare fuori e usare la metropolitana."
      },
      {
        "domanda": "A Glasgow c'è la tassa di soggiorno?",
        "risposta": "Da gennaio 2027 sì: il 5% del prezzo dell'alloggio, per ogni notte."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'La cattedrale di Glasgow vista dalla Necropoli, tra le lapidi vittoriane',
    immagine: `${IMG}/glasgow-cattedrale.webp`,
  },
  {
    slug: 'loch-lomond-glencoe',
    paeseSlug: 'scozia',
    ordine: 3,
    nome: 'Loch Lomond e Glencoe',
    tipologia: ['natura', 'lago', 'montagna', 'on the road'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il primo assaggio di Highlands. Loch Lomond è il grande lago a nord di Glasgow, nel parco nazionale di Loch Lomond e dei Trossachs. Più a nord la strada attraversa la brughiera di Rannoch Moor e scende nella valle di Glencoe, tra le montagne più famose di Scozia.',
    percheAndarci: 'Per la strada tra Rannoch Moor e Glencoe, una delle più spettacolari del Paese, e per le camminate brevi sulle sponde del lago.',
    cosaVedere: ['Luss, sul Loch Lomond', 'Rannoch Moor', 'Il Buachaille Etive Mòr', 'Le Three Sisters di Glencoe', 'Il villaggio di Glencoe'],
    cosaFare: ['Fermarsi nelle piazzole panoramiche lungo la A82', 'Una camminata breve nella valle di Glencoe', 'Passeggiare a Luss, sul lago'],
    comeArrivare: "In auto sulla A82 da Glasgow: circa 45 minuti fino a Luss, poi la strada costeggia tutta la riva ovest del Loch Lomond fino a Tarbet e Crianlarich, sale sul Rannoch Moor e scende a Glencoe, in tutto circa due ore e mezza senza soste. Da Oban a Glencoe c'è circa un'ora, da Glencoe a Fort William mezz'ora. Senza auto, i treni da Glasgow arrivano a Balloch, la West Highland Line ferma ad Arrochar & Tarbet e a Crianlarich, e i pullman Citylink tra Glasgow e Fort William fermano lungo la A82, anche a Glencoe.",
    comeSpostarsi: 'In auto, fermandosi nei parcheggi segnalati e mai sul bordo della strada.',
    costi: "Valle, sentieri e panorami sono gratuiti; si pagano i parcheggi a Luss, le crociere sul lago (17-19 £) e la seggiovia di Glencoe (20 £, 2026). Budget indicativo al giorno a persona, con la doppia divisa in due e l'auto a parte: basso 80-110 €, medio 150-220 €, alto oltre 300 €.",
    periodoMigliore: 'da maggio a settembre; d\'inverno la valle è bellissima ma si cammina solo con esperienza',
    erroriDaEvitare: [
      'Fermarsi a fare foto sul ciglio della A82: si usano solo i parcheggi',
      'Partire per un sentiero di montagna sottovalutando il meteo: nebbia e pioggia arrivano in fretta',
    ],
    attenzioni: ['Moscerini (midges) d\'estate, soprattutto la sera e senza vento: serve un repellente.'],
    miaEsperienza: 'Ho fatto il Loch Lomond e Glencoe. Glencoe è bellissima.',
    // GUIDA-START
    luoghi: [
      {
        nome: "Three Sisters",
        testo: "Le tre creste scure che scendono dal massiccio del Bidean nam Bian sul lato sud della valle, l'immagine più famosa di Glencoe. La strada passa proprio sotto, e con le nuvole basse le pareti sembrano ancora più alte.",
        come: "In auto sulla A82: ci si ferma nei parcheggi panoramici sotto le creste, mai sul ciglio della strada.",
        quando: "La mattina presto, quando i parcheggi sono ancora liberi; con la luce del pomeriggio le creste sono in ombra.",
        tempo: "20-30 minuti",
        costo: "gratuito",
        consiglio: "I parcheggi sono piccoli e a metà giornata sono pieni.",
      },
      {
        nome: "Buachaille Etive Mòr e Glen Etive",
        testo: "La piramide di roccia all'ingresso orientale di Glencoe, la montagna più fotografata di Scozia, con il fiume Coupall e il cottage bianco di Lagangarbh ai piedi. Accanto si apre Glen Etive, una valle laterale con una strada a una corsia che scende fino al lago.",
        come: "In auto sulla A82: il punto classico per le foto è vicino al ponte sul fiume, poco dopo il Kingshouse Hotel; Glen Etive si percorre in auto, con le piazzole di scambio.",
        quando: "All'alba o al tramonto, quando la luce prende la parete.",
        tempo: "30 minuti; 1-2 ore con Glen Etive",
        costo: "gratuito",
        lat: 56.6473,
        lng: -4.8978,
      },
      {
        nome: "Lost Valley (Coire Gabhail)",
        testo: "La valle nascosta dietro le Three Sisters, dove secondo la tradizione i MacDonald nascondevano il bestiame rubato. Si entra da una gola stretta e si sbuca in una conca piatta chiusa dalle pareti.",
        come: "A piedi dal parcheggio sulla A82 sotto le Three Sisters: si scende al fiume, si attraversa un ponte e si sale su un sentiero roccioso, con un guado.",
        quando: "Con il tempo asciutto; da evitare con pioggia forte, quando il torrente si ingrossa.",
        tempo: "circa 3 ore andata e ritorno",
        costo: "gratuito",
        lat: 56.65441,
        lng: -4.994,
        consiglio: "Servono scarpe da montagna: in alcuni tratti si usano le mani.",
      },
      {
        nome: "Glencoe Lochan",
        testo: "Un laghetto tra i pini sopra il villaggio di Glencoe, piantati nell'Ottocento da un lord che voleva ricordare alla moglie il Canada. Il giro intorno all'acqua, con le montagne riflesse, è la camminata più facile della valle.",
        come: "In auto o a piedi dal villaggio di Glencoe, seguendo le indicazioni; parcheggio vicino al lago e sentieri ben tenuti.",
        quando: "La mattina presto, con l'acqua ferma e i riflessi.",
        tempo: "meno di 1 ora",
        costo: "gratuito",
        lat: 56.69069,
        lng: -5.09584,
      },
      {
        nome: "Rannoch Moor",
        testo: "Un altopiano di torbiere, laghetti e massi lasciati dai ghiacciai, che la A82 attraversa tra Bridge of Orchy e Glencoe. Non ci sono paesi né alberi: è il tratto più selvaggio della strada, e il modo più spettacolare di entrare nella valle.",
        come: "In auto sulla A82, con piazzole panoramiche come quella sul Lochan na h-Achlaise; la ferrovia della West Highland Line lo attraversa più a est, fino alla stazione isolata di Rannoch.",
        quando: "Con la luce bassa del mattino o della sera; con la nebbia è suggestivo ma si vede poco.",
        tempo: "30-60 minuti di soste",
        costo: "gratuito",
        lat: 56.65411,
        lng: -4.59373,
      },
      {
        nome: "Glencoe Visitor Centre",
        testo: "Il centro visitatori del National Trust for Scotland, poco prima del villaggio, con una mostra sulla geologia della valle e sul massacro del 1692, quando i soldati del governo uccisero i MacDonald che li ospitavano. Ha mappe, previsioni del giorno e un caffè.",
        come: "In auto sulla A82, con parcheggio; da qui partono anche sentieri brevi nel bosco.",
        quando: "Prima di partire per una camminata, per controllare il meteo.",
        tempo: "45 minuti",
        lat: 56.67117,
        lng: -5.08186,
        url: "https://www.nts.org.uk/visit/places/glencoe",
      },
      {
        nome: "Luss",
        testo: "Un villaggio di cottage in pietra sulla riva ovest del Loch Lomond, con una chiesa, una spiaggetta e un pontile sul lago. È la sosta più comoda lungo la A82, per sgranchirsi le gambe e mangiare qualcosa.",
        come: "In auto sulla A82, circa 45 minuti da Glasgow; parcheggio a pagamento all'ingresso del paese.",
        quando: "La mattina, prima dei pullman; nei weekend d'estate è affollato.",
        tempo: "1 ora",
        costo: "gratuito, parcheggio a pagamento",
        lat: 56.10149,
        lng: -4.64225,
      },
      {
        nome: "Crociera sul Loch Lomond",
        testo: "Il modo migliore per vedere il lago più grande della Gran Bretagna per superficie, con le isole boscose e il Ben Lomond sulla riva opposta. I giri partono dai pontili di Tarbet e di Luss.",
        come: "Biglietti online o al pontile con Cruise Loch Lomond; giri circolari o traversate per Balmaha e Inchcailloch.",
        quando: "Da primavera a fine ottobre, nelle giornate senza vento forte.",
        tempo: "1 ora da Tarbet, 1 ora e mezza da Luss",
        costo: "giro da Tarbet 17 £ (circa 20 €), da Luss 19 £ (circa 22 €), adulti 2026",
        lat: 56.204,
        lng: -4.7125,
        url: "https://www.cruiselochlomond.co.uk",
      },
      {
        nome: "Balmaha e Conic Hill",
        testo: "Sulla riva est del lago, il villaggio di Balmaha è il punto di partenza per Conic Hill, una collina sul confine tra Lowlands e Highlands. Dalla cima si vedono le isole del Loch Lomond allineate sulla faglia che separa le due Scozie.",
        come: "In auto da Balloch o da Drymen; dal parcheggio di Balmaha il sentiero sale sulla West Highland Way.",
        quando: "Con il cielo sereno, la mattina presto o al tramonto.",
        tempo: "2-3 ore andata e ritorno",
        costo: "gratuito",
        lat: 56.097,
        lng: -4.5246,
      },
      {
        nome: "Glencoe Mountain, la seggiovia",
        testo: "La stazione sciistica sul Meall a' Bhùiridh, all'ingresso della valle, con una seggiovia che d'estate porta i visitatori in quota. Dall'alto si vede tutto il Rannoch Moor e il Buachaille di fronte.",
        come: "In auto sulla A82, con una breve strada laterale dopo il Kingshouse; biglietti in biglietteria o online.",
        quando: "Da metà maggio a fine ottobre, con il cielo sereno e poco vento.",
        tempo: "1-2 ore",
        costo: "seggiovia andata e ritorno 20 £ (circa 23 €, adulti, estate 2026)",
        orari: "Impianti dalle 9, ultima risalita verso le 16, meteo permettendo; chiusure per manutenzione segnalate sul sito.",
        lat: 56.62025,
        lng: -4.83947,
        url: "https://www.glencoemountain.co.uk",
      },
      {
        nome: "Inchcailloch",
        testo: "Un'isola boscosa di fronte a Balmaha, con sentieri tra querce, una spiaggetta e le rovine di una chiesa medievale con il cimitero del clan MacGregor. Si gira tutta a piedi in poche ore.",
        come: "Con la barca da Balmaha, una traversata di pochi minuti, o con le crociere da Luss.",
        quando: "In primavera, con le campanule nel bosco, o in una giornata calma d'estate.",
        tempo: "2-3 ore",
        lat: 56.08111,
        lng: -4.55583,
      },
    ],
    programmi: [
      {
        titolo: "1 giorno, lungo la A82",
        tappe: [
          "Partenza da Glasgow e sosta a Luss, sul Loch Lomond",
          "Pranzo a Tarbet o Crianlarich",
          "Rannoch Moor con le piazzole panoramiche",
          "Buachaille Etive Mòr, Three Sisters e il giro del Glencoe Lochan prima di sera",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Luss, crociera da Tarbet, Rannoch Moor e notte a Glencoe",
          "Giorno 2: Lost Valley la mattina con il tempo asciutto, Glencoe Visitor Centre, poi Glen Etive o la seggiovia di Glencoe Mountain",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: Balmaha, Conic Hill e la barca per Inchcailloch, notte sul Loch Lomond",
          "Giorno 2: Luss e la riva ovest, Rannoch Moor, notte a Glencoe",
          "Giorno 3: Three Sisters e Lost Valley, Glencoe Lochan al tramonto",
        ],
      },
    ],
    zone: [
      {
        nome: "Luss e Tarbet",
        perChi: "chi vuole dormire sulla riva del Loch Lomond",
        testo: "Pochi hotel e locande sul lago, alcuni con vista e pontile; d'estate costano e si riempiono presto.",
        fascia: "130-260 €",
      },
      {
        nome: "Balloch",
        perChi: "chi arriva in treno da Glasgow o cerca prezzi più bassi",
        testo: "La cittadina all'estremità sud del lago, con stazione, supermercati e B&B; comoda per la riva est e Balmaha.",
        fascia: "100-180 €",
      },
      {
        nome: "Tyndrum e Crianlarich",
        perChi: "chi vuole una tappa a metà strada",
        testo: "Due villaggi all'incrocio tra la strada per Oban e quella per Glencoe, con lodge, ostelli e B&B semplici, molto usati da chi cammina sulla West Highland Way.",
        fascia: "90-170 €",
      },
      {
        nome: "Glencoe e Ballachulish",
        perChi: "chi vuole svegliarsi nella valle e camminare presto",
        testo: "Il villaggio di Glencoe e quello vicino di Ballachulish, sul Loch Leven, con hotel, B&B e qualche pub; il Kingshouse Hotel sta da solo all'ingresso della valle.",
        fascia: "120-250 €",
      },
    ],
    gite: [
      {
        nome: "Inveraray",
        distanza: "circa 35 km da Tarbet sulla A83",
        come: "In auto passando dal valico del Rest and Be Thankful.",
        testo: "Una cittadina bianca del Settecento sul Loch Fyne, con il castello dei duchi di Argyll e le ostriche del lago.",
      },
      {
        nome: "Oban",
        distanza: "circa 1 ora da Glencoe",
        come: "In auto lungo il Loch Linnhe e il ponte di Connel; dal Loch Lomond si va invece per Crianlarich e la A85.",
        testo: "La cittadina di porto della costa ovest, con la distilleria, la McCaig's Tower, il pesce del North Pier e i traghetti per Mull.",
      },
      {
        nome: "Fort William e Glenfinnan",
        distanza: "mezz'ora da Glencoe fino a Fort William, altri 30 minuti per Glenfinnan",
        come: "In auto sulla A82 e poi sulla A830.",
        testo: "Il Ben Nevis, Glen Nevis con le Steall Falls e il viadotto del Jacobite.",
      },
    ],
    faq: [
      {
        domanda: "Glencoe vale la pena?",
        risposta: "Sì, è il paesaggio di montagna più spettacolare che si vede dalla strada in Scozia. Anche senza camminare, le soste tra il Rannoch Moor, il Buachaille e le Three Sisters valgono la giornata.",
      },
      {
        domanda: "Quanti giorni servono per Loch Lomond e Glencoe?",
        risposta: "In un giorno si attraversano entrambi lungo la A82 con le soste. Con due si dorme a Glencoe e si fa una camminata come la Lost Valley; con tre si aggiungono Balmaha e Conic Hill.",
      },
      {
        domanda: "Dove dormire per Glencoe?",
        risposta: "Nel villaggio di Glencoe o a Ballachulish, per svegliarsi nella valle; a Fort William, a mezz'ora, ci sono più hotel e prezzi più vari.",
      },
      {
        domanda: "Dove fermarsi a fare foto lungo la A82?",
        risposta: "Solo nei parcheggi e nelle piazzole segnalate, mai sul ciglio della strada. Sono piccoli e a metà giornata si riempiono: conviene passare la mattina presto.",
      },
      {
        domanda: "Quali camminate fare a Glencoe?",
        risposta: "Il giro del Glencoe Lochan, meno di un'ora e facile; la Lost Valley, circa tre ore su sentiero roccioso con un guado. Le cime vere richiedono esperienza di montagna.",
      },
      {
        domanda: "Ci sono i moscerini?",
        risposta: "Sì, da giugno a settembre i midges sono fastidiosi soprattutto la sera e senza vento, vicino all'acqua. Serve un repellente; con la brezza spariscono.",
      },
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'La valle di Glencoe sotto le Three Sisters, con le nuvole basse sulle cime',
    immagine: `${IMG}/glencoe-three-sisters.webp`,
  },
  {
    slug: 'oban',
    paeseSlug: 'scozia',
    ordine: 4,
    nome: 'Oban',
    tipologia: ['mare', 'cibo', 'distilleria'],
    giorniConsigliati: '1-2 notti',
    visitataPersonalmente: true,
    introduzione:
      'Una cittadina sul mare della costa ovest, con il porto da cui partono i traghetti per Mull e le altre isole. Sopra il porto c\'è la McCaig\'s Tower, il colosseo di pietra che si vede da tutta la baia. In centro c\'è la distilleria di Oban.',
    percheAndarci: 'Per il pesce e i frutti di mare, la distilleria in centro e i traghetti per le isole.',
    cosaVedere: ['La McCaig\'s Tower', 'Il porto e il North Pier', 'La distilleria di Oban'],
    cosaFare: ['Cena di pesce sul porto', 'Il tour della distilleria di Oban', 'Una gita in giornata a Mull con il traghetto CalMac'],
    doveMangiare:
      'Ee-Usk, sul North Pier: ristorante di pesce sull\'acqua, con ostriche, cozze, scampi e capesante. Pranzo dalle 12, cena dalle 17:30. Si prenota dal sito eeusk.com o al numero 01631 565 666; la veranda non si prenota.',
    comeArrivare: "In auto da Glasgow, passando dal Loch Lomond: circa 45 minuti fino a Luss, poi un'ora e tre quarti senza soste, lasciando la A82 a Crianlarich per la A85 lungo il Loch Awe. Da Glencoe si arriva in circa un'ora, da Fort William in un'ora e mezza. In treno da Glasgow Queen Street la linea della West Highland impiega poco più di tre ore, e la stazione è accanto al terminal dei traghetti CalMac.",
    comeSpostarsi: 'A piedi in centro.',
    costi: "Distilleria di Oban 24 £, Dunollie 13 £, Dunstaffnage 7,50 £ online (2026); McCaig's Tower, Pulpit Hill e il War & Peace Museum sono gratuiti. Budget indicativo al giorno a persona, con la doppia divisa in due e l'auto a parte: basso 80-110 €, medio 150-210 €, alto oltre 300 €.",
    erroriDaEvitare: ['Arrivare d\'estate senza prenotare il tour della distilleria, che si riempie anche per le navi da crociera', 'Non prenotare la cena: i ristoranti di pesce sul porto sono pieni'],
    miaEsperienza: 'Da Ee-Usk, sul porto di Oban, ho mangiato pesce buonissimo. E da Oban sono andato alle Ebridi.',
    // GUIDA-START
    luoghi: [
      {
        nome: "Distilleria di Oban",
        testo: "Una piccola distilleria nel centro della cittadina, a pochi passi dal porto, stretta tra la strada del lungomare e la collina. Il whisky è un single malt della costa ovest, e il tour è tra i più compatti della Scozia.",
        come: "Su prenotazione dal sito malts.com. Non sono ammessi bambini sotto gli 8 anni. Chi guida chiede se c'è l'assaggio da portare via.",
        quando: "La mattina, prima dei gruppi delle navi da crociera; d'estate va prenotata con anticipo.",
        tempo: "1 ora per il tour classico",
        costo: "tour classico da 24 £ (circa 28 €, 2026)",
        orari: "Tutti i giorni: aprile 10-18, da maggio a settembre 10-19, ottobre 10-18, da novembre a marzo 10-17 (2026).",
        lat: 56.4147,
        lng: -5.4728,
        url: "https://www.malts.com/en-gb/distilleries/oban",
        consiglio: "Il programma dei tour è in revisione: va ricontrollato prima di partire.",
      },
      {
        nome: "McCaig's Tower",
        testo: "Un anello di archi di granito sulla collina sopra il porto, voluto dal banchiere John Stuart McCaig: iniziato nel 1897, rimase incompiuto alla sua morte, nel 1902. Dentro c'è un giardino, e dal bordo si vede tutta la baia con Kerrera e Mull.",
        come: "A piedi dal centro in una decina di minuti, con una salita breve e ripida.",
        quando: "Al tramonto, quando la luce scende sulle isole.",
        tempo: "45 minuti",
        costo: "ingresso libero",
        lat: 56.4156,
        lng: -5.4691,
      },
      {
        nome: "Ee-Usk",
        testo: "Il ristorante di pesce sul North Pier, con le vetrate sull'acqua e i traghetti che passano davanti. In carta ostriche, cozze, scampi e capesante della costa ovest.",
        come: "Prenotazione dal sito eeusk.com o al numero 01631 565 666; la veranda non si prenota.",
        quando: "D'estate si prenota con qualche giorno di anticipo.",
        tempo: "1-2 ore",
        orari: "Pranzo dalle 12, cena dalle 17:30.",
        lat: 56.41455,
        lng: -5.47477,
        url: "https://www.eeusk.com",
      },
      {
        nome: "Dunollie Castle e museo",
        testo: "Le rovine del castello dei MacDougall su uno sperone sopra l'ingresso della baia, a nord del centro. Nella casa del Settecento accanto c'è un piccolo museo con oggetti di famiglia, tessuti e attrezzi, e intorno un bosco con i giardini.",
        come: "A piedi dal centro lungo la Corran Esplanade, circa 20 minuti in piano, poi una breve salita.",
        quando: "La mattina, con la luce sulla baia; abbinabile a Ganavan Sands.",
        tempo: "1-2 ore",
        costo: "13 £ (circa 15 €, adulti, 2026)",
        orari: "Dal 17 marzo a fine ottobre, da martedì a domenica 10-16, ultimo ingresso consigliato alle 15:30; chiuso il lunedì e d'inverno.",
        lat: 56.42727,
        lng: -5.48302,
        url: "https://dunollie.org",
      },
      {
        nome: "Dunstaffnage Castle",
        testo: "Un castello del Duecento su una roccia all'imbocco del Loch Etive, con mura alte e una torre di guardia da cui si vede il mare. Nel bosco accanto ci sono le rovine della cappella medievale. È uno dei castelli più antichi di Scozia ancora in piedi.",
        come: "In auto, circa 5 km a nord di Oban verso Dunbeg; parcheggio sul posto.",
        quando: "D'estate, quando è aperto tutti i giorni.",
        tempo: "1 ora",
        costo: "7,50 £ online (circa 9 €), 8,50 £ alla cassa (adulti, 2026)",
        orari: "Dal 1° aprile al 30 settembre tutti i giorni 9:30-16:30; da ottobre a marzo lunedì, martedì, mercoledì, sabato e domenica 10-15:30, chiuso giovedì e venerdì. Ultimo ingresso mezz'ora prima; chiuso dal 24 dicembre al 4 gennaio.",
        lat: 56.45472,
        lng: -5.4375,
        url: "https://www.historicenvironment.scot/visit-a-place/places/dunstaffnage-castle-and-chapel/",
      },
      {
        nome: "Oban War & Peace Museum",
        testo: "Un piccolo museo sul lungomare che racconta la storia della cittadina: la pesca, i traghetti e il ruolo del porto durante la Seconda guerra mondiale. Si gira in fretta ed è un buon riparo nelle giornate di pioggia.",
        come: "A piedi sulla Corran Esplanade, vicino al North Pier.",
        quando: "In una giornata di pioggia o prima di cena.",
        tempo: "45 minuti",
        costo: "ingresso libero, con offerta",
        orari: "Da marzo a novembre tutti i giorni 10-16, il venerdì fino alle 14; chiuso d'inverno dal 15 novembre 2026.",
        lat: 56.4158,
        lng: -5.47377,
        url: "https://www.obanmuseum.org.uk",
      },
      {
        nome: "Pulpit Hill",
        testo: "La collina a sud del porto, con un belvedere che guarda verso Kerrera, il Sound of Mull e i traghetti in uscita. Meno famosa della McCaig's Tower, ha una vista più aperta verso ovest.",
        come: "A piedi dal centro, salendo dalle strade dietro la stazione dei traghetti; circa 15 minuti.",
        quando: "Al tramonto, con il sole che scende dietro Mull.",
        tempo: "30-45 minuti",
        costo: "ingresso libero",
        lat: 56.40951,
        lng: -5.48171,
      },
      {
        nome: "Ganavan Sands",
        testo: "La spiaggia di sabbia più vicina a Oban, in una piccola baia a nord della città con vista su Lismore e sulle montagne di Morvern. Si arriva lungo un percorso pedonale e ciclabile sul mare.",
        come: "A piedi o in bici dal centro passando per Dunollie, circa 45 minuti; in auto c'è un parcheggio sulla spiaggia.",
        quando: "Nelle giornate serene, la mattina o la sera.",
        tempo: "1-2 ore",
        costo: "gratuito",
        lat: 56.43897,
        lng: -5.46952,
      },
      {
        nome: "Isola di Kerrera",
        testo: "L'isola davanti a Oban che chiude la baia: niente auto, pecore, sentieri e, sulla punta sud, le rovine del castello di Gylen sul mare. Un giro a piedi di mezza giornata, il modo più semplice per vedere un'isola senza prendere il traghetto grande.",
        come: "Piccolo traghetto passeggeri da Gallanach, circa 3 km a sud di Oban sulla strada costiera, con parcheggio; la traversata dura pochi minuti.",
        quando: "Con il tempo asciutto, in una mattina senza vento.",
        tempo: "mezza giornata",
        lat: 56.39806,
        lng: -5.53861,
        consiglio: "Orari e tariffe del traghetto cambiano tra estate e inverno: vanno controllati il giorno prima.",
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Tour della distilleria di Oban la mattina",
          "Passeggiata sulla Corran Esplanade fino a Dunollie",
          "War & Peace Museum, poi salita alla McCaig's Tower",
          "Cena di pesce da Ee-Usk e tramonto da Pulpit Hill",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: distilleria, McCaig's Tower, cena da Ee-Usk",
          "Giorno 2: traghetto CalMac per Craignure e giornata a Tobermory, sull'isola di Mull; rientro con l'ultima corsa",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: Dunstaffnage al mattino, Ganavan Sands, poi il traghetto da Gallanach e il giro a piedi di Kerrera fino al castello di Gylen",
        ],
      },
    ],
    zone: [
      {
        nome: "Centro e lungomare",
        perChi: "chi vuole tutto a piedi, porto e ristoranti compresi",
        testo: "Hotel e guesthouse sulla George Street e sulla Corran Esplanade, a pochi minuti dal terminal dei traghetti e dalla stazione. D'estate si riempiono presto.",
        fascia: "110-220 €",
      },
      {
        nome: "Colline sopra il porto",
        perChi: "chi cerca un B&B più tranquillo e prezzi più bassi",
        testo: "Case vittoriane trasformate in B&B tra Pulpit Hill e le strade dietro la McCaig's Tower, con una salita per tornare dal centro ma spesso con vista sulla baia.",
        fascia: "90-160 €",
      },
      {
        nome: "Ganavan e Dunbeg",
        perChi: "chi ha l'auto e vuole il mare a due passi",
        testo: "A nord della città, verso la spiaggia e Dunstaffnage: qualche hotel e appartamento, più silenzio la sera, ma servono l'auto o una camminata lunga per il centro.",
        fascia: "100-190 €",
      },
    ],
    gite: [
      {
        nome: "Isola di Mull e Tobermory",
        distanza: "45 minuti di traghetto fino a Craignure, poi circa 1 ora di strada",
        come: "Traghetto CalMac da Oban, da prenotare con l'auto; a piedi si trova quasi sempre posto, e a Craignure ci sono i bus.",
        testo: "Tobermory è il paese delle case colorate sul porto, con una distilleria. Sulla strada si attraversano boschi e coste a una corsia.",
      },
      {
        nome: "Iona",
        distanza: "una giornata intera passando per Mull",
        come: "Traghetto per Craignure, strada fino a Fionnphort sulla punta ovest di Mull, poi il piccolo traghetto CalMac per Iona; molti la fanno con le gite organizzate da Oban.",
        testo: "L'isola dell'abbazia fondata da san Colombano nel VI secolo, con spiagge bianche e acqua chiara. Una giornata lunga ma tra le più belle della costa ovest.",
      },
      {
        nome: "Seil e il Ponte sull'Atlantico",
        distanza: "circa 20 km a sud",
        come: "In auto sulla A816 e poi sulla B844.",
        testo: "Il Clachan Bridge, un ponte a schiena d'asino del Settecento che scavalca un braccio di mare, porta sull'isola di Seil; da Ellenabeich una barchetta va a Easdale, l'isola delle cave di ardesia.",
      },
      {
        nome: "Kilchurn Castle e Loch Awe",
        distanza: "circa 35 km a est",
        come: "Sulla A85 verso Dalmally; parcheggio sulla strada e un sentiero di 10 minuti.",
        testo: "Le rovine del castello dei Campbell sulla punta del Loch Awe, con le montagne dietro. Si vede anche dalla strada arrivando da Glasgow.",
      },
    ],
    sapori: [
      { nome: 'Frutti di mare', testo: 'Capesante, scampi, cozze e ostriche della costa ovest.' },
      { nome: 'Whisky di Oban', testo: 'Il single malt della distilleria in centro.' },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Oban?",
        risposta: "Un giorno basta per la distilleria, la McCaig's Tower e la cena sul porto. Con due notti si aggiunge una giornata a Mull o a Kerrera.",
      },
      {
        domanda: "Bisogna prenotare la distilleria di Oban?",
        risposta: "Sì, su malts.com: è piccola e d'estate i tour si riempiono, anche per le navi da crociera. Il tour classico costa 24 £ (2026).",
      },
      {
        domanda: "Serve prenotare il traghetto per Mull?",
        risposta: "Con l'auto sì, sul sito di CalMac, soprattutto d'estate. A piedi si trova quasi sempre posto; la traversata dura 45 minuti.",
      },
      {
        domanda: "Si arriva a Oban senza auto?",
        risposta: "Sì, in treno da Glasgow Queen Street in poco più di tre ore; la stazione è accanto ai traghetti e il centro si gira a piedi.",
      },
      {
        domanda: "Dove mangiare pesce a Oban?",
        risposta: "Sul porto: Ee-Usk, sul North Pier, è il più conosciuto e va prenotato. Lungo il molo dei traghetti ci sono anche chioschi di frutti di mare per un pranzo veloce.",
      },
      {
        domanda: "Oban o Fort William come base?",
        risposta: "Oban per il mare, le isole e il pesce; Fort William per Glencoe, il Ben Nevis e Glenfinnan. Sono a un'ora e mezza l'una dall'altra, e molti dormono in entrambe.",
      },
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'Il porto di Oban con le case colorate sul lungomare e la McCaig\'s Tower sulla collina',
    immagine: `${IMG}/giorno-04-oban.webp`,
  },
  {
    slug: 'fort-william-glenfinnan',
    paeseSlug: 'scozia',
    ordine: 5,
    nome: 'Fort William e Glenfinnan',
    tipologia: ['montagna', 'treno', 'on the road'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione:
      'Fort William sta ai piedi del Ben Nevis, la montagna più alta del Regno Unito. A ovest, sulla strada per Mallaig, c\'è Glenfinnan, con il viadotto ferroviario ad archi diventato famoso con i film di Harry Potter e il monumento sul Loch Shiel.',
    percheAndarci: 'Per vedere il treno a vapore sul viadotto di Glenfinnan, o salirci sopra, e per la strada verso il mare e Skye.',
    cosaVedere: ['Il viadotto di Glenfinnan', 'Il Glenfinnan Monument sul Loch Shiel', 'Il Ben Nevis da Fort William'],
    cosaFare: ['Aspettare il passaggio del Jacobite sul viadotto', 'Salire sul Jacobite da Fort William a Mallaig'],
    comeArrivare: "In auto sulla A82: da Glencoe circa mezz'ora, da Oban circa un'ora e mezza passando per Glencoe, da Glasgow circa tre ore senza soste lungo il Loch Lomond. Glenfinnan è sulla A830 verso Mallaig, a mezz'ora da Fort William, e da Glenfinnan a Mallaig ci sono altri 45 minuti. In treno la West Highland Line arriva da Glasgow Queen Street in circa 3 ore e 50 minuti e prosegue fino a Mallaig, con fermata a Glenfinnan.",
    comeSpostarsi: 'In auto. A Glenfinnan c\'è un parcheggio a pagamento vicino al centro visitatori.',
    costi: "Nevis Range 28,95 £ (2026); viadotto, Glen Nevis, Neptune's Staircase e il Ben Nevis sono gratuiti, e a Glenfinnan si paga il parcheggio. Il Jacobite va prenotato appena escono i prezzi. Budget indicativo al giorno a persona, con la doppia divisa in due e l'auto a parte: basso 80-110 €, medio 150-210 €, alto oltre 300 €.",
    erroriDaEvitare: ['Contare su un posto sul Jacobite senza prenotazione: i posti sono pochi', 'Camminare sui binari per la foto: si guarda il treno dai sentieri'],
    miaEsperienza: 'Sono andato al viadotto di Glenfinnan per il treno di Harry Potter, il Jacobite.',
    // GUIDA-START
    luoghi: [
      {
        nome: "Viadotto di Glenfinnan",
        testo: "Il viadotto curvo a 21 archi della West Highland Line, sopra la valle in fondo al Loch Shiel, finito nel 1901 e tra i primi grandi ponti in calcestruzzo. È diventato famoso con i film di Harry Potter, e d'estate ci passa sopra il treno a vapore Jacobite.",
        come: "In auto fino a Glenfinnan, sulla A830, poi a piedi dal centro visitatori: il sentiero per il punto panoramico sale in una decina di minuti.",
        quando: "All'ora di passaggio del Jacobite: il treno del mattino attraversa il viadotto verso le 11, e gli orari del giorno sono esposti al centro visitatori.",
        tempo: "1-2 ore",
        costo: "gratuito; parcheggio a pagamento",
        lat: 56.876285,
        lng: -5.431914,
        consiglio: "Il parcheggio si riempie molto prima del passaggio del treno: conviene arrivare almeno un'ora prima.",
      },
      {
        nome: "Il Jacobite",
        testo: "Il treno a vapore stagionale da Fort William a Mallaig e ritorno, 84 miglia in tutto. Passa sul viadotto di Glenfinnan, costeggia i laghi e il mare di Morar e si ferma circa un'ora e mezza a Mallaig prima di tornare.",
        come: "Prenotazione sul sito di West Coast Railways; si vendono solo biglietti di andata e ritorno. Pochi posti in vendita il giorno stesso a Fort William, solo in contanti e senza garanzia. Quando il rischio di incendi è alto, o per un guasto, può essere trainato da una locomotiva diesel storica.",
        quando: "D'estate, con partenza la mattina da Fort William. A novembre 2026 date e prezzi del 2027 non sono ancora usciti.",
        tempo: "una giornata",
        url: "https://www.westcoastrailways.co.uk/jacobite/jacobite-steam-train-details.cfm",
        consiglio: "Le vendite aprono di solito a inizio anno e i posti finiscono presto: chi vuole solo vederlo passare va al viadotto.",
      },
      {
        nome: "Glenfinnan Monument",
        testo: "La torre con la statua di un highlander sulla riva del Loch Shiel, nel punto in cui nel 1745 Carlo Edoardo Stuart alzò lo stendardo dell'ultima rivolta giacobita. Il National Trust for Scotland gestisce il centro visitatori, con una piccola mostra e il caffè.",
        come: "Dal parcheggio del centro visitatori, a pochi minuti a piedi sulla riva del lago.",
        quando: "Insieme al viadotto, prima o dopo il passaggio del treno.",
        tempo: "30-45 minuti",
        lat: 56.86917,
        lng: -5.43694,
        url: "https://www.nts.org.uk/visit/places/glenfinnan-monument",
      },
      {
        nome: "Ben Nevis",
        testo: "Con 1.345 metri è la montagna più alta del Regno Unito, e domina Fort William. La via normale, il Mountain Track, parte da Glen Nevis ed è una lunga salita su sentiero di pietra, senza tratti di arrampicata ma con meteo da alta montagna in cima.",
        come: "A piedi dal centro visitatori di Glen Nevis o dall'ostello, a pochi minuti d'auto dal centro di Fort William.",
        quando: "Da giugno a settembre, partendo presto; in cima la neve può restare fino all'inizio dell'estate e la nebbia è frequente.",
        tempo: "7-9 ore andata e ritorno",
        costo: "gratuito",
        lat: 56.79685,
        lng: -5.003508,
        consiglio: "Servono scarpe da montagna, strati caldi e una mappa: con la nebbia in cima ci si orienta male.",
      },
      {
        nome: "Glen Nevis e Steall Falls",
        testo: "La valle che gira intorno al Ben Nevis, con boschi, torrenti e, in fondo alla strada, una gola stretta che si apre su un prato con la cascata di Steall, alta circa 120 metri. Una delle camminate brevi più belle delle Highlands.",
        come: "In auto fino al parcheggio in fondo alla strada di Glen Nevis, poi a piedi nella gola su un sentiero roccioso; il ponte di corde davanti alla cascata è facoltativo.",
        quando: "Dopo qualche giorno di pioggia, quando la cascata è piena; la mattina, prima che il parcheggio si riempia.",
        tempo: "2 ore andata e ritorno",
        costo: "gratuito",
        lat: 56.7698,
        lng: -4.9786,
      },
      {
        nome: "Nevis Range, la cabinovia",
        testo: "La cabinovia sale sul fianco dell'Aonach Mòr, la montagna accanto al Ben Nevis, da 100 a 650 metri. In cima ci sono un ristorante, i belvedere sul Loch Linnhe e sentieri brevi; d'inverno è una stazione sciistica.",
        come: "In auto, circa 10 km a nord-est di Fort William sulla A82 verso Spean Bridge; biglietti online o in biglietteria.",
        quando: "Con il cielo sereno; con il vento forte la cabinovia può chiudere senza preavviso.",
        tempo: "2 ore; la salita dura 12-15 minuti",
        costo: "biglietto giornaliero adulti 28,95 £ (circa 33 €, stagione 2026)",
        orari: "Tutti i giorni: prima salita alle 9:30, ultima salita alle 15:45, ultima discesa alle 16; chiusure per meteo da controllare sul sito il giorno stesso.",
        lat: 56.85221,
        lng: -4.99877,
        url: "https://www.nevisrange.co.uk/mountain-gondola/",
      },
      {
        nome: "Neptune's Staircase",
        testo: "Una scala di otto chiuse del Caledonian Canal a Banavie, la più lunga della Gran Bretagna, progettata da Thomas Telford all'inizio dell'Ottocento. Le barche salgono di circa 20 metri, e dall'alzaia si vede il Ben Nevis.",
        come: "In auto o in bici da Fort William, circa 4 km verso nord sulla A830; parcheggio accanto alle chiuse.",
        quando: "Quando passano le barche, di solito nelle ore centrali della giornata d'estate.",
        tempo: "30-60 minuti",
        costo: "gratuito",
        lat: 56.84528,
        lng: -5.09543,
      },
      {
        nome: "West Highland Museum",
        testo: "Il museo di Fort William, sulla piazza della High Street, con collezioni sui giacobiti, sui clan e sulla vita nelle Highlands. Tra gli oggetti più curiosi c'è il ritratto segreto di Carlo Edoardo Stuart, che si vede solo riflesso su un cilindro.",
        come: "A piedi in centro, sulla Cameron Square.",
        quando: "In una giornata di pioggia.",
        tempo: "1 ora",
        orari: "Da lunedì a sabato 10-16, ultimo ingresso mezz'ora prima; chiuso la domenica.",
        lat: 56.8177,
        lng: -5.1111,
        url: "https://www.westhighlandmuseum.org.uk",
      },
      {
        nome: "Old Inverlochy Castle",
        testo: "Le rovine di un castello del Duecento, quadrato con torri agli angoli, sulla riva del fiume Lochy alle porte di Fort William. Qui si combatterono due battaglie, nel 1431 e nel 1645.",
        come: "In auto o a piedi dal nord della città, vicino alla distilleria Ben Nevis; parcheggio piccolo davanti alle mura.",
        quando: "Al tramonto, con il Ben Nevis alle spalle.",
        tempo: "30 minuti",
        lat: 56.83259,
        lng: -5.081,
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Glenfinnan la mattina presto, parcheggio e salita al belvedere",
          "Passaggio del Jacobite sul viadotto verso le 11, poi il Glenfinnan Monument",
          "Pomeriggio a Glen Nevis con la camminata alle Steall Falls",
          "Sera a Fort William, con Old Inverlochy al tramonto",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Glenfinnan e il treno, Neptune's Staircase al rientro, West Highland Museum",
          "Giorno 2: cabinovia del Nevis Range con il cielo sereno, poi Glen Nevis e le Steall Falls",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: salita al Ben Nevis per chi è allenato, oppure il Jacobite fino a Mallaig e le spiagge di Morar",
        ],
      },
    ],
    zone: [
      {
        nome: "Centro di Fort William",
        perChi: "chi arriva in treno o vuole ristoranti e supermercati a piedi",
        testo: "Hotel e guesthouse intorno alla High Street e sulla strada del lago, vicino alla stazione. D'estate vanno prenotati con anticipo.",
        fascia: "110-230 €",
      },
      {
        nome: "Glen Nevis",
        perChi: "chi cammina e vuole partire presto per il Ben Nevis",
        testo: "Lungo la strada della valle ci sono il campeggio, l'ostello e qualche lodge, a pochi minuti d'auto dal centro e ai piedi dei sentieri.",
        fascia: "80-180 €",
      },
      {
        nome: "Banavie e Corpach",
        perChi: "chi ha l'auto e va verso Glenfinnan",
        testo: "Sul canale, a nord della città: B&B e piccoli hotel con vista sul Ben Nevis, comodi per la A830 e per Neptune's Staircase.",
        fascia: "100-190 €",
      },
    ],
    gite: [
      {
        nome: "Mallaig e le spiagge di Morar",
        distanza: "circa 1 ora e un quarto in auto, o con il Jacobite",
        come: "Sulla A830 passando da Glenfinnan e Arisaig; anche con il treno di linea della West Highland Line.",
        testo: "Le spiagge di sabbia bianca di Morar e Camusdarach, con le isole di Eigg e Rùm all'orizzonte, e il porto di pescatori di Mallaig da cui parte il traghetto per Skye.",
      },
      {
        nome: "Glencoe",
        distanza: "circa mezz'ora in auto a sud",
        come: "Sulla A82 lungo il Loch Linnhe.",
        testo: "La valle tra le Three Sisters e il Buachaille Etive Mòr, con le camminate al Glencoe Lochan e alla Lost Valley.",
      },
      {
        nome: "Isola di Skye",
        distanza: "traghetto di circa 30 minuti da Mallaig ad Armadale",
        come: "Traghetto CalMac, da prenotare con l'auto; oppure in auto fino al ponte di Skye passando per Invergarry ed Eilean Donan.",
        testo: "Da Fort William si entra a Skye dal sud dell'isola. In giornata è una corsa: meglio dormire a Portree.",
      },
    ],
    faq: [
      {
        domanda: "A che ora passa il Jacobite sul viadotto di Glenfinnan?",
        risposta: "Il treno del mattino passa di solito verso le 11; gli orari previsti sono esposti ogni giorno al centro visitatori. Conviene arrivare almeno un'ora prima per trovare parcheggio.",
      },
      {
        domanda: "Bisogna prenotare il Jacobite?",
        risposta: "Sì: i posti sono pochi e si vendono soprattutto online, sul sito di West Coast Railways, appena esce la stagione. Il giorno stesso a Fort William ne restano pochi, solo in contanti.",
      },
      {
        domanda: "Si può vedere il viadotto senza prendere il treno?",
        risposta: "Sì, è il modo più semplice: dal centro visitatori un sentiero di dieci minuti sale al belvedere. I treni di linea della West Highland Line ci passano tutto l'anno.",
      },
      {
        domanda: "Quanto ci vuole per salire sul Ben Nevis?",
        risposta: "Sul Mountain Track da Glen Nevis servono 7-9 ore andata e ritorno. È una giornata intera, da fare con scarpe da montagna e il meteo controllato.",
      },
      {
        domanda: "Quanti giorni servono a Fort William?",
        risposta: "Uno per Glenfinnan e Glen Nevis, due per aggiungere la cabinovia del Nevis Range con calma. Con il Ben Nevis ne serve un terzo.",
      },
      {
        domanda: "Fort William o Glencoe come base?",
        risposta: "Fort William ha più hotel, supermercati e il treno; Glencoe è più piccola e silenziosa, a mezz'ora di strada. Per Glenfinnan e il Ben Nevis è più comoda Fort William.",
      },
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'Il treno a vapore Jacobite sul viadotto di Glenfinnan, con il fumo bianco e i boschi d\'autunno',
    immagine: `${IMG}/giorno-06-glenfinnan.webp`,
  },
  {
    slug: 'isola-di-skye',
    paeseSlug: 'scozia',
    ordine: 6,
    nome: 'Isola di Skye',
    tipologia: ['isola', 'natura', 'trekking', 'distilleria'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La più grande delle Ebridi Interne, collegata alla terraferma da un ponte. Pinnacoli di roccia, scogliere, torrenti e montagne, con Portree come centro e la distilleria Talisker sulla costa ovest.',
    percheAndarci: 'Per i paesaggi della penisola di Trotternish, con l\'Old Man of Storr e il Quiraing, per le Fairy Pools e per Talisker.',
    cosaVedere: ['L\'Old Man of Storr', 'Il Quiraing', 'Le Fairy Pools', 'Portree', 'Il castello di Eilean Donan, sulla strada per Skye', 'La distilleria Talisker a Carbost'],
    cosaFare: ['Il sentiero dell\'Old Man of Storr la mattina presto', 'Il giro della penisola di Trotternish in auto', 'Il tour di Talisker'],
    comeArrivare:
      'In auto dal ponte di Skye, gratuito, da Kyle of Lochalsh; oppure con il traghetto CalMac da Mallaig ad Armadale, in circa 30 minuti, da prenotare con l\'auto su calmac.co.uk. Da Inverness a Portree servono circa tre ore di guida; da Glasgow, passando per Loch Lomond e Glencoe, circa cinque senza soste. Senza auto, il treno arriva a Kyle of Lochalsh da Inverness o a Mallaig da Fort William, e i pullman Citylink collegano Glasgow e Inverness a Portree.',
    costi:
      'I sentieri e i panorami sono gratuiti; si pagano i parcheggi (Storr circa 5-6 sterline), le distillerie e i castelli: Talisker da 22 sterline, Dunvegan 18, Eilean Donan 13 (2026). D\'estate dormire è caro e i posti finiscono presto. Budget indicativo al giorno a persona, con la doppia divisa in due e l\'auto a parte: basso 80-110 €, medio 150-220 €, alto oltre 300 €.',
    comeSpostarsi: 'In auto, su strade spesso a una corsia con le piazzole di scambio.',
    periodoMigliore: 'da maggio a settembre; a luglio e agosto i parcheggi dei sentieri famosi si riempiono presto',
    erroriDaEvitare: [
      'Arrivare senza alloggio prenotato d\'estate: sull\'isola si trova poco all\'ultimo momento',
      'Parcheggiare nelle piazzole di scambio: servono a far passare le auto',
      'Partire per i sentieri con scarpe da città: il terreno è spesso fangoso',
    ],
    miaEsperienza: 'Ho fatto anche l\'Isola di Skye.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Old Man of Storr",
        "testo": "Il pinnacolo di roccia sopra la strada a nord di Portree, il simbolo dell'isola. Il sentiero sale tra le rocce fino ai piedi della guglia.",
        "come": "In auto fino al parcheggio sulla A855, poi a piedi in salita.",
        "quando": "All'alba o la sera, quando c'è meno gente.",
        "tempo": "2 ore andata e ritorno",
        "costo": "Sentiero libero; parcheggio a pagamento, circa 5-6 sterline (circa 6-7 €) per alcune ore, gratuito la sera e la notte",
        "orari": "Sempre accessibile",
        "lat": 57.50669,
        "lng": -6.18368,
        "consiglio": "In cima il vento è forte anche d'estate: giacca e strati."
      },
      {
        "nome": "Quiraing",
        "testo": "Una frana enorme sul fianco della cresta di Trotternish, con pinnacoli, terrazze e pareti verdi a strapiombo. Si vede già dalla strada, a una corsia, che scavalca la cresta.",
        "come": "In auto sulla strada tra Staffin e Uig, poi a piedi sul sentiero.",
        "quando": "Con il cielo aperto: con la nebbia non si vede niente.",
        "tempo": "1-3 ore",
        "costo": "Sentiero libero",
        "orari": "Sempre accessibile",
        "lat": 57.64083,
        "lng": -6.27389,
        "consiglio": "Sulla strada del Quiraing ci si ferma solo nei parcheggi, mai nelle piazzole. Anche solo il primo tratto del sentiero basta per la vista."
      },
      {
        "nome": "Fairy Pools",
        "testo": "Una serie di pozze e cascatelle d'acqua trasparente lungo un torrente ai piedi delle montagne Cuillin.",
        "come": "In auto fino al parcheggio a Glen Brittle, poi a piedi.",
        "quando": "La mattina presto.",
        "tempo": "1-2 ore",
        "costo": "Sentiero libero; parcheggio a pagamento, gestito da un ente che lo usa per la manutenzione dei sentieri",
        "orari": "Sempre accessibile",
        "lat": 57.25,
        "lng": -6.2565,
        "consiglio": "I guadi sono su pietre: con la pioggia si bagnano i piedi."
      },
      {
        "nome": "Distilleria Talisker",
        "testo": "Fondata nel 1830, è secondo la distilleria stessa la più antica ancora in attività sull'isola. Sta a Carbost, sulla riva del Loch Harport.",
        "come": "Su prenotazione dal sito malts.com, consigliata soprattutto d'estate. Non sono ammessi bambini sotto gli 8 anni.",
        "quando": "Da marzo a ottobre 10-17, da novembre a febbraio 10-16:30 (2026). Manutenzione annuale dall'11 ottobre al 1° novembre 2026, con alcune esperienze sospese.",
        "tempo": "1 ora",
        "costo": "Tour con degustazione da 22 sterline (2026)",
        "url": "https://www.malts.com/en-gb/distilleries/talisker",
        "orari": "Da marzo a ottobre 10-17, da novembre a febbraio 10-16:30",
        "lat": 57.30278,
        "lng": -6.35611
      },
      {
        "nome": "Portree",
        "testo": "Il paese principale dell'isola, con il porto e le case colorate sul molo. Ha i ristoranti, i negozi, i distributori e quasi tutti gli alloggi.",
        "come": "In auto; il centro si gira a piedi.",
        "quando": "La sera, per cena.",
        "tempo": "1-2 ore",
        "costo": "Gratuito",
        "lat": 57.412,
        "lng": -6.192
      },
      {
        "nome": "Kilt Rock e la cascata di Mealt",
        "testo": "Una scogliera di basalto a colonne che ricorda le pieghe di un kilt, e accanto la cascata di Mealt, che cade dritta in mare. Si vedono dal belvedere a due passi dal parcheggio.",
        "come": "In auto sulla A855, lungo il giro di Trotternish, tra lo Storr e Staffin.",
        "tempo": "20 minuti",
        "costo": "Gratuito",
        "lat": 57.60639,
        "lng": -6.17861
      },
      {
        "nome": "Fairy Glen",
        "testo": "Una piccola valle sopra Uig con colline coniche, laghetti e una roccia a forma di torre. È una sosta breve sul giro di Trotternish.",
        "come": "In auto da Uig, su una strada stretta; poi a piedi.",
        "quando": "La mattina o la sera.",
        "tempo": "45 minuti",
        "costo": "Gratuito"
      },
      {
        "nome": "Neist Point",
        "testo": "Il faro sulla punta più occidentale dell'isola, in fondo a un promontorio di scogliere. Si va soprattutto per il tramonto, sul mare aperto verso le Ebridi Esterne.",
        "come": "In auto fino al parcheggio, poi a piedi su un sentiero ripido, faticoso al ritorno.",
        "quando": "Al tramonto.",
        "tempo": "1-1,5 ore",
        "costo": "Gratuito",
        "lat": 57.421,
        "lng": -6.787
      },
      {
        "nome": "Castello di Dunvegan",
        "testo": "La sede del clan MacLeod, abitata dalla stessa famiglia da secoli, con i giardini sul lago. Dal molo partono le barche per vedere le foche.",
        "come": "In auto, a nord-ovest dell'isola. Non serve prenotare il biglietto.",
        "quando": "Nella stagione di apertura, la mattina.",
        "tempo": "2 ore",
        "costo": "Castello e giardini 18 sterline, circa 21 €; gita in barca alle foche 14,50 sterline, circa 17 €, con il biglietto del castello o dei giardini",
        "orari": "Dal 26 marzo al 15 ottobre tutti i giorni 10-17:30, ultimo ingresso alle 17; gite alle foche dal lunedì al venerdì fino al 30 settembre. Chiuso d'inverno.",
        "lat": 57.448,
        "lng": -6.59,
        "url": "https://www.dunvegancastle.com/"
      },
      {
        "nome": "Castello di Eilean Donan",
        "testo": "Il castello sull'isolotto alla confluenza di tre laghi, collegato alla riva da un ponte di pietra. Sta sulla terraferma, sulla strada per il ponte di Skye.",
        "come": "In auto sulla A87, a Dornie.",
        "quando": "La mattina, prima dei pullman.",
        "tempo": "1 ora",
        "costo": "Adulti 13 sterline, circa 15 € (2026)",
        "orari": "2026: giugno-agosto 9-18, maggio e settembre 9:30-18, aprile e fino al 24 ottobre 10-18; dal 25 ottobre al 22 dicembre e in febbraio-marzo 10-16. Ultimo ingresso un'ora prima. Chiuso tutto gennaio e in alcuni giorni di novembre e dicembre.",
        "lat": 57.27403,
        "lng": -5.51611,
        "url": "https://www.eileandonancastle.com/"
      },
      {
        "nome": "Sligachan",
        "testo": "Il vecchio ponte di pietra sul fiume Sligachan, con dietro le cime nere dei Cuillin. È all'incrocio delle strade principali dell'isola.",
        "come": "In auto, tra Portree e Broadford.",
        "tempo": "20 minuti",
        "costo": "Gratuito",
        "lat": 57.28933,
        "lng": -6.17555
      },
      {
        "nome": "Elgol",
        "testo": "Un villaggio sulla costa sud con la vista più famosa sui Cuillin, oltre il Loch Scavaig. Da qui partono le barche per Loch Coruisk.",
        "come": "In auto da Broadford, su una strada a una corsia.",
        "quando": "Il pomeriggio, con la luce sulle montagne.",
        "tempo": "mezza giornata con la barca",
        "lat": 57.152,
        "lng": -6.098
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Old Man of Storr all'alba",
          "Kilt Rock e la cascata di Mealt",
          "Quiraing",
          "Fairy Glen",
          "Portree la sera"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Old Man of Storr all'alba, il giro di Trotternish con il Quiraing, Portree la sera",
          "Giorno 2: Fairy Pools la mattina, Talisker nel pomeriggio"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Old Man of Storr all'alba, Kilt Rock, Quiraing e Fairy Glen, Portree la sera",
          "Giorno 2: Fairy Pools la mattina, Talisker nel pomeriggio, Neist Point al tramonto",
          "Giorno 3: Dunvegan, Sligachan ed Elgol, poi il ponte con la sosta a Eilean Donan"
        ]
      }
    ],
    zone: [
      {
        "nome": "Portree",
        "perChi": "chi vuole ristoranti e servizi",
        "testo": "Il centro dell'isola, vicino a Trotternish.",
        "fascia": "100-220 €"
      },
      {
        "nome": "Sud dell'isola",
        "perChi": "chi arriva in traghetto da Mallaig",
        "testo": "Più tranquillo, vicino ad Armadale.",
        "fascia": "90-180 €"
      },
      {
        "nome": "Costa ovest: Carbost e Dunvegan",
        "perChi": "chi vuole Talisker, le Fairy Pools e Neist Point",
        "testo": "Più isolata, con B&B e cottage; i ristoranti sono pochi e la sera si cena presto.",
        "fascia": "100-200 €"
      },
      {
        "nome": "Kyle of Lochalsh e Dornie",
        "perChi": "chi trova pieno sull'isola o prosegue verso Inverness",
        "testo": "Sulla terraferma, accanto al ponte e a Eilean Donan, con la stazione del treno.",
        "fascia": "90-170 €"
      }
    ],
    attenzioni: [
      "Strade a una corsia: ci si ferma nella piazzola alla propria sinistra, o si aspetta davanti a quella a destra.",
      "Pecore e cervi sulla strada, anche di giorno.",
      "Meteo che cambia nel giro di un'ora: giacca impermeabile sempre in macchina."
    ],
    gite: [
      {
        "nome": "Raasay",
        "distanza": "circa 30 km da Portree al porto di Sconser",
        "come": "Traghetto CalMac da Sconser, con o senza auto.",
        "testo": "L'isola di fronte a Skye, quasi senza turisti, con sentieri sulle colline e la distilleria di Raasay."
      },
      {
        "nome": "Applecross e il Bealach na Bà",
        "distanza": "circa 60 km dal ponte di Skye",
        "come": "In auto, verso nord dalla terraferma; la strada è stretta e ripida.",
        "testo": "Il passo con i tornanti stretti e la vista su Skye, e in fondo il villaggio di Applecross sul mare. È il tratto ovest della North Coast 500."
      },
      {
        "nome": "Mallaig e la costa di Morar",
        "distanza": "30 minuti di traghetto da Armadale",
        "come": "Traghetto CalMac Armadale-Mallaig.",
        "testo": "Il porto dove arriva il treno della West Highland Line, e poco a sud le spiagge di sabbia bianca di Morar."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Skye?",
        "risposta": "Due giorni per Trotternish, con lo Storr e il Quiraing, e per le Fairy Pools con Talisker. Con tre si aggiungono Neist Point, Dunvegan ed Elgol e si ha un margine per il brutto tempo."
      },
      {
        "domanda": "Meglio arrivare dal ponte o con il traghetto?",
        "risposta": "Il ponte da Kyle of Lochalsh è gratuito e sempre aperto. Il traghetto da Mallaig ad Armadale dura circa mezz'ora ed è comodo arrivando da Glenfinnan, ma con l'auto va prenotato."
      },
      {
        "domanda": "Si può girare Skye senza auto?",
        "risposta": "È difficile: i bus sono pochi e non arrivano ai sentieri più famosi. Senza auto conviene dormire a Portree e prendere tour organizzati."
      },
      {
        "domanda": "Dove conviene dormire a Skye?",
        "risposta": "A Portree, che ha più alloggi e ristoranti ed è vicina a Trotternish. D'estate si prenota con mesi di anticipo: all'ultimo momento si trova poco."
      },
      {
        "domanda": "Quando andare a Skye?",
        "risposta": "Da maggio a settembre, con le giornate lunghe. A luglio e agosto i parcheggi dei sentieri si riempiono presto, e nelle sere senza vento ci sono i midges, moscerini che pungono: serve un repellente."
      },
      {
        "domanda": "Bisogna prenotare la distilleria Talisker?",
        "risposta": "Conviene, sul sito malts.com, soprattutto d'estate. Non sono ammessi bambini sotto gli 8 anni."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'Le pareti e i pinnacoli verdi del Quiraing, sull\'Isola di Skye',
    immagine: `${IMG}/giorno-07-quiraing.webp`,
  },
  {
    slug: 'inverness-loch-ness',
    paeseSlug: 'scozia',
    ordine: 7,
    nome: 'Inverness e Loch Ness',
    tipologia: ['lago', 'castelli', 'città'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione:
      'Inverness è il capoluogo delle Highlands, sul fiume Ness. A sud-ovest comincia Loch Ness, il lago lungo e profondo del mostro, con le rovine del castello di Urquhart sulla riva.',
    percheAndarci: 'Per Urquhart sul lago e come base per lo Speyside e per la North Coast 500, che parte e arriva qui.',
    cosaVedere: ['Il castello di Urquhart', 'Loch Ness', 'Il lungofiume di Inverness'],
    cosaFare: ['Visitare Urquhart la mattina', 'Una passeggiata lungo il Ness a Inverness'],
    comeArrivare: "In auto sulla A82 lungo tutta la riva nord di Loch Ness da Fort William, passando da Fort Augustus e Urquhart; da Skye si passa da Eilean Donan e Glen Shiel, circa tre ore da Portree senza soste. Da Inverness a Dufftown, nello Speyside, c'è circa un'ora e un quarto. L'aeroporto di Inverness ha voli da Londra e da altre città britanniche, e in treno si arriva da Edimburgo e Glasgow sulla linea delle Highlands; la stazione è in pieno centro.",
    comeSpostarsi: 'In auto.',
    costi: "Urquhart 14 £ online, Inverness Castle 20 £, Fort George 10 £, Loch Ness Centre 16 £ (2026); Clava Cairns, Ness Islands, Dores e Chanonry Point sono gratuiti. Budget indicativo al giorno a persona, con la doppia divisa in due e l'auto a parte: basso 80-110 €, medio 140-200 €, alto oltre 280 €.",
    erroriDaEvitare: ['Arrivare a Urquhart senza biglietto in alta stagione: si prenota online con data e ora'],
    miaEsperienza: 'Ho fatto Inverness e Loch Ness. Loch Ness, sinceramente, è un po\' meh: da solo non vale il viaggio.',
    // GUIDA-START
    luoghi: [
      {
        nome: "Castello di Urquhart",
        testo: "Le rovine di un castello medievale su un promontorio di Loch Ness, vicino a Drumnadrochit. Resta in piedi la Grant Tower, da cui si guarda il lago in entrambe le direzioni; è il posto più fotografato della riva.",
        come: "In auto sulla A82. Biglietti online sul sito di Historic Environment Scotland, con data e ora: quando finiscono online, alla cassa non se ne trovano. Il parcheggio è gratuito ma garantito solo con la prenotazione.",
        quando: "All'apertura, prima dei pullman.",
        tempo: "1-2 ore",
        costo: "14 £ online (circa 16 €), 16 £ alla cassa (adulti, 2026)",
        orari: "1° aprile-31 agosto 9:30-20:15; settembre 9:30-18; ottobre 9:30-17; novembre-marzo 9:30-16:30. Ultimo ingresso un'ora prima; chiuso il 25 e 26 dicembre.",
        lat: 57.324,
        lng: -4.442,
        url: "https://www.historicenvironment.scot/visit-a-place/places/urquhart-castle/",
      },
      {
        nome: "Inverness Castle Experience",
        testo: "Il castello di arenaria rossa dell'Ottocento sopra il fiume, per anni sede del tribunale, riaperto nel febbraio 2026 come museo sulle storie, i paesaggi e la gente delle Highlands. Dalla terrazza sul tetto si vede tutta la città lungo il Ness.",
        come: "A piedi dal centro, con una breve salita. Biglietti a orario, più economici online; giardini, bistrot e negozio sono ad accesso libero.",
        quando: "La mattina o nel tardo pomeriggio d'estate, quando resta aperto fino a sera.",
        tempo: "1-2 ore",
        costo: "20 £ online (circa 23 €), 22 £ alla cassa (adulti 16-65 anni, 2026)",
        orari: "Da aprile a settembre tutti i giorni 10-19, ultimo ingresso alle 17; da ottobre a marzo 10-18, ultimo ingresso alle 16. Chiuso il 25 e 26 dicembre e il 1° gennaio.",
        lat: 57.4764,
        lng: -4.2254,
        url: "https://invernesscastle.scot",
      },
      {
        nome: "Ness Islands",
        testo: "Un gruppo di isolotti alberati in mezzo al fiume, collegati da ponticelli pedonali vittoriani. È la passeggiata classica di Inverness, a dieci minuti dal centro e lontana dal traffico.",
        come: "A piedi lungo la riva del Ness, in un anello che parte dal castello o dalla cattedrale.",
        quando: "La mattina presto o al tramonto.",
        tempo: "1 ora",
        costo: "gratuito",
        lat: 57.4632,
        lng: -4.2307,
      },
      {
        nome: "Cattedrale di St Andrew",
        testo: "La cattedrale episcopale di arenaria rosa sulla riva ovest del fiume, finita nel 1869, con due torri e vetrate colorate. Dalla sponda opposta, con il castello di fronte, è una delle viste più belle della città.",
        come: "A piedi dal centro attraversando il Ness Bridge o il ponte pedonale di Greig Street.",
        quando: "Di giorno, fuori dagli orari delle funzioni.",
        tempo: "30 minuti",
        lat: 57.47444,
        lng: -4.22917,
      },
      {
        nome: "Victorian Market",
        testo: "Il mercato coperto dell'Ottocento nel centro, con il tetto in ferro e vetro, piccoli negozi indipendenti e una zona ristoro con banchi di cucina diversa. Utile per un pranzo veloce in una giornata di pioggia.",
        come: "A piedi in centro, con ingressi da Academy Street e Church Street.",
        quando: "A pranzo.",
        tempo: "30-60 minuti",
        lat: 57.4791,
        lng: -4.2251,
      },
      {
        nome: "Leakey's Bookshop",
        testo: "Una delle librerie dell'usato più grandi di Scozia, dentro una chiesa gaelica del Settecento, con una stufa a legna in mezzo e scaffali fino al soppalco. Si entra anche solo per guardarla.",
        come: "A piedi in centro, su Church Street, accanto al cimitero di Greyfriars.",
        quando: "In una giornata di pioggia.",
        tempo: "30-60 minuti",
        lat: 57.48028,
        lng: -4.22867,
      },
      {
        nome: "Culloden",
        testo: "La brughiera dove il 16 aprile 1746 l'esercito giacobita di Carlo Edoardo Stuart fu sconfitto dalle truppe del governo: l'ultima battaglia campale combattuta in Gran Bretagna. Bandiere rosse e blu segnano le linee dei due eserciti, e il centro visitatori del National Trust for Scotland racconta la giornata.",
        come: "In auto, circa 9 km a est di Inverness sulla B9006; il campo di battaglia è aperto tutto l'anno, il centro visitatori ha orari e biglietto a parte, da prenotare.",
        quando: "La mattina, prima dei gruppi; con la luce bassa la brughiera è più suggestiva.",
        tempo: "2 ore",
        lat: 57.47722,
        lng: -4.0925,
        url: "https://www.nts.org.uk/visit/places/culloden",
        consiglio: "Si abbina bene a Clava Cairns, a pochi minuti d'auto.",
      },
      {
        nome: "Clava Cairns",
        testo: "Un cimitero dell'età del bronzo, di circa 4.000 anni fa: tre grandi tumuli di pietra circondati da cerchi di menhir, in un bosco di faggi. Un luogo tranquillo, molto meno affollato di Culloden.",
        come: "In auto, con le indicazioni dalla B9091, poche centinaia di metri a est di Culloden; parcheggio sul posto.",
        quando: "La mattina presto o al tramonto, con la luce tra gli alberi.",
        tempo: "30-45 minuti",
        costo: "ingresso libero",
        orari: "Aperto tutto l'anno.",
        lat: 57.47367,
        lng: -4.07435,
        url: "https://www.historicenvironment.scot/visit-a-place/places/clava-cairns/",
      },
      {
        nome: "Fort George",
        testo: "Una fortezza militare del Settecento su una lingua di terra nel Moray Firth, costruita dopo Culloden e ancora oggi caserma. Si camminano i bastioni lungo il mare, e dalle mura a volte si vedono i delfini.",
        come: "In auto, circa 20 km a nord-est di Inverness, oltre Ardersier.",
        quando: "In una giornata limpida, per la vista sul firth.",
        tempo: "2 ore",
        costo: "10 £ online (circa 12 €), 11 £ alla cassa (adulti, 2026)",
        orari: "1° aprile-30 settembre tutti i giorni 9:30-17:30; 1° ottobre-31 marzo 10-16. Ultimo ingresso un'ora prima; chiuso il 25 e 26 dicembre e il 1° e 2 gennaio.",
        lat: 57.58389,
        lng: -4.07028,
        url: "https://www.historicenvironment.scot/visit-a-place/places/fort-george/",
      },
      {
        nome: "Chanonry Point",
        testo: "Una punta di ghiaia sul Black Isle, di fronte a Fort George, dove i delfini tursiopi del Moray Firth cacciano vicinissimi alla riva. È uno dei punti migliori del Regno Unito per vederli da terra.",
        come: "In auto da Inverness passando il Kessock Bridge e Fortrose, circa 25 minuti; parcheggio piccolo accanto al faro, poi si cammina sulla spiaggia.",
        quando: "Da maggio a settembre, nelle ore della marea che sale.",
        tempo: "1-2 ore",
        costo: "gratuito",
        lat: 57.57421,
        lng: -4.09352,
        consiglio: "Il parcheggio si riempie presto: si può lasciare l'auto a Rosemarkie e camminare lungo la spiaggia.",
      },
      {
        nome: "Loch Ness Centre, Drumnadrochit",
        testo: "Il centro visitatori sul lago, con un percorso multimediale sulla geologia di Loch Ness, sulle ricerche scientifiche e sulla leggenda di Nessie. Utile per capire il lago prima o dopo Urquhart, a pochi minuti di distanza.",
        come: "In auto sulla A82, nel villaggio di Drumnadrochit; biglietti a orario, più economici online.",
        quando: "In una giornata di pioggia o in abbinamento a Urquhart.",
        tempo: "1 ora",
        costo: "16 £ online (circa 18 €), 18 £ alla cassa (adulti, 2026)",
        orari: "Gli orari cambiano con la stagione e sono pubblicati nel calendario del sito.",
        lat: 57.33737,
        lng: -4.47787,
        url: "https://lochness.com",
      },
      {
        nome: "Fort Augustus e le chiuse del Caledonian Canal",
        testo: "Il paese all'estremità sud di Loch Ness, attraversato da una scala di cinque chiuse del Caledonian Canal che scende fino al lago. Si guardano le barche salire e scendere seduti ai tavoli dei pub lungo il canale.",
        come: "In auto sulla A82, circa 50 minuti da Inverness; parcheggio a pagamento in paese.",
        quando: "D'estate, quando il traffico di barche è più intenso.",
        tempo: "1 ora",
        costo: "gratuito",
        lat: 57.14496,
        lng: -4.6837,
      },
      {
        nome: "Dores Beach",
        testo: "Una spiaggia di ciottoli all'estremità nord di Loch Ness, sulla riva sud, con la vista lunga sul lago in tutta la sua lunghezza. Molto più tranquilla della riva nord, ed è il posto giusto per vedere Loch Ness senza pullman.",
        come: "In auto da Inverness sulla B862, circa 20 minuti; parcheggio accanto al pub del villaggio.",
        quando: "Al tramonto, con l'acqua calma.",
        tempo: "30-60 minuti",
        costo: "gratuito",
        lat: 57.38393,
        lng: -4.33634,
      },
      {
        nome: "Falls of Foyers",
        testo: "Una cascata di circa 50 metri in una gola boscosa sopra la riva sud di Loch Ness, cantata da Robert Burns. Si scende su un sentiero a gradini fino ai belvedere.",
        come: "In auto sulla B852 lungo la riva sud, circa 35 minuti da Inverness; parcheggio nel villaggio di Foyers.",
        quando: "Dopo la pioggia, quando la portata è più forte.",
        tempo: "45 minuti",
        costo: "gratuito",
        lat: 57.24862,
        lng: -4.49269,
        consiglio: "Si unisce a Dores per un giro della riva sud, più tranquilla della A82.",
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Urquhart all'apertura, con il biglietto online",
          "Loch Ness Centre a Drumnadrochit e pranzo",
          "Rientro a Inverness: Inverness Castle Experience e la terrazza sul tetto",
          "Passeggiata alle Ness Islands e cena in centro",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Inverness, con il castello, la cattedrale, il Victorian Market, Leakey's e le Ness Islands",
          "Giorno 2: Culloden e Clava Cairns la mattina, Urquhart nel pomeriggio, tramonto a Dores Beach",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: Fort George la mattina e Chanonry Point con la marea che sale per i delfini; oppure il giro della riva sud con Dores e le Falls of Foyers fino a Fort Augustus",
        ],
      },
    ],
    zone: [
      {
        nome: "Centro e lungofiume",
        perChi: "chi arriva in treno e vuole tutto a piedi",
        testo: "Hotel e guesthouse intorno alla stazione e lungo Ness Bank e Huntly Street, sulle due rive del fiume, a pochi minuti dal castello e dai ristoranti.",
        fascia: "120-240 €",
      },
      {
        nome: "Crown e Old Edinburgh Road",
        perChi: "chi cerca un B&B tranquillo a 10-15 minuti a piedi dal centro",
        testo: "Quartieri residenziali vittoriani sulla collina sopra il castello, con molte case trasformate in B&B e parcheggio più facile.",
        fascia: "90-170 €",
      },
      {
        nome: "Drumnadrochit, su Loch Ness",
        perChi: "chi vuole dormire sul lago e arrivare a Urquhart prima dei pullman",
        testo: "Villaggio sulla A82 a mezz'ora da Inverness, con qualche hotel, B&B e un paio di pub; la sera c'è poco da fare.",
        fascia: "110-200 €",
      },
    ],
    gite: [
      {
        nome: "Speyside e le distillerie",
        distanza: "circa 1 ora e un quarto fino a Dufftown",
        come: "In auto: le distillerie sono a pochi minuti l'una dall'altra tra Dufftown, Craigellachie e Aberlour, tutte su prenotazione.",
        testo: "La valle con più distillerie della Scozia: Glenfiddich, The Macallan, The Glenlivet, Cardhu. Due tour al giorno bastano.",
      },
      {
        nome: "Cawdor Castle",
        distanza: "circa 25 km a est",
        come: "In auto passando per Culloden; si abbina a Fort George.",
        testo: "Un castello abitato dal Trecento, legato al Macbeth di Shakespeare, con giardini curati e un bosco intorno.",
      },
      {
        nome: "Black Isle e Glen Ord",
        distanza: "circa 25 minuti a nord-ovest",
        come: "In auto oltre il Kessock Bridge; Glen Ord è a Muir of Ord, Chanonry Point dal lato di Fortrose.",
        testo: "La penisola dei delfini e della distilleria del Singleton: tour classico da 24 £ (2026), da prenotare. Glen Ord è anche il punto di partenza o di arrivo della North Coast 500.",
      },
    ],
    faq: [
      {
        domanda: "Loch Ness vale la pena?",
        risposta: "Vale la sosta lungo la strada, con Urquhart e un affaccio da Dores o Fort Augustus, ma da solo non giustifica il viaggio. Meglio inserirlo tra Skye, Fort William e lo Speyside.",
      },
      {
        domanda: "Bisogna prenotare il castello di Urquhart?",
        risposta: "Sì, soprattutto d'estate: si compra online con data e ora a 14 £ (16 alla cassa, 2026), e quando i biglietti online finiscono non se ne trovano sul posto. Con la prenotazione è garantito anche il parcheggio.",
      },
      {
        domanda: "Quanti giorni servono a Inverness?",
        risposta: "Un giorno per la città e Urquhart, due per aggiungere Culloden e Clava Cairns, tre con Fort George e i delfini di Chanonry Point.",
      },
      {
        domanda: "Dove si vedono i delfini vicino a Inverness?",
        risposta: "A Chanonry Point, sul Black Isle, da maggio a settembre con la marea che sale: nuotano a pochi metri dalla riva. A volte si vedono anche dalle mura di Fort George.",
      },
      {
        domanda: "Il castello di Inverness è aperto?",
        risposta: "Sì, dal febbraio 2026 è aperto come Inverness Castle Experience, tutto l'anno: biglietto adulti 20 £ online, 22 alla cassa (2026).",
      },
      {
        domanda: "Si gira Loch Ness senza auto?",
        risposta: "In parte: i bus Citylink tra Inverness e Fort William passano lungo la A82 e fermano a Drumnadrochit, Urquhart e Fort Augustus. Per la riva sud, Dores e Foyers serve l'auto.",
      },
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'Le rovine del castello di Urquhart sulla riva di Loch Ness',
    immagine: `${IMG}/giorno-09-urquhart.webp`,
  },
  {
    slug: 'speyside',
    paeseSlug: 'scozia',
    ordine: 8,
    nome: 'Speyside',
    tipologia: ['distillerie', 'campagna', 'cibo e bevande'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La valle del fiume Spey, tra Inverness e Aberdeen, è la zona della Scozia con più distillerie. Qui ci sono nomi famosi come Glenfiddich a Dufftown, The Macallan vicino a Craigellachie, The Glenlivet e Cardhu.',
    percheAndarci: 'Per il giro delle distillerie, tra colline, fiumi e villaggi, a meno di due ore da Inverness.',
    cosaVedere: ['Glenfiddich, a Dufftown', 'The Macallan', 'The Glenlivet', 'Cardhu, a Knockando', 'Il villaggio di Aberlour'],
    cosaFare: ['Due tour di distilleria al giorno, non di più', 'Una passeggiata lungo lo Spey'],
    comeArrivare:
      "In auto da Inverness: a Dufftown c'è circa un'ora e un quarto di strada, ad Aberlour poco meno. Da Aviemore e dai Cairngorms si arriva in un'ora passando per Grantown-on-Spey. Il treno tra Inverness e Aberdeen ferma a Elgin e a Keith, da dove partono bus locali, ma molte distillerie, come Cardhu, non sono servite dai mezzi pubblici: per il giro serve l'auto, un taxi o un tour organizzato.",
    comeSpostarsi:
      'In auto, con un guidatore che non beve. In alternativa un tour organizzato o un taxi: alcune distillerie, come Cardhu, non sono servite dai mezzi pubblici.',
    costi:
      'Glenfiddich Tour 30 £ (circa 35 €), Cardhu da 18 £, Strathisla 25 £, The Macallan da 80 £, Balvenie Castle 6 £ (2026). Budget indicativo al giorno a persona, con la doppia divisa in due e l\'auto a parte: basso 80-110 €, medio 140-200 €, alto oltre 300 € con le degustazioni più care.',
    erroriDaEvitare: [
      'Guidare dopo gli assaggi: in Scozia il limite è più basso che in Inghilterra, e il consiglio è non bere proprio',
      'Arrivare senza prenotazione: i tour hanno posti limitati',
      'Mettere troppe distillerie in un giorno',
    ],
    miaEsperienza: 'Ho fatto anche il giro delle distillerie.',
    // GUIDA-START
    luoghi: [
      {
        nome: 'Glenfiddich',
        testo: 'La distilleria di Dufftown, fondata da William Grant nel 1887 e ancora della stessa famiglia. È uno dei nomi più noti del single malt dello Speyside, con magazzini, alambicchi in rame e una sala di degustazione.',
        come: 'Tour su prenotazione solo dal sito ufficiale; da maggio ad agosto partono sette tour al giorno, da settembre ad aprile cinque. Solo maggiorenni.',
        quando: 'La mattina, come primo tour della giornata.',
        tempo: '1,5-2 ore',
        costo: 'Glenfiddich Tour 30 £ (circa 35 €, 2026)',
        orari: 'Centro visitatori tutti i giorni 9:30-16:30.',
        lat: 57.45511,
        lng: -3.12874,
        url: 'https://www.glenfiddich.com',
      },
      {
        nome: 'The Macallan',
        testo: 'La tenuta della distilleria vicino a Craigellachie, con l\'edificio moderno con il tetto ondulato coperto d\'erba, aperto nel 2018. Le visite sono esperienze lunghe, più care della media della valle.',
        come: 'Solo su prenotazione dal sito ufficiale, almeno 24 ore prima; le date si aprono quattro mesi in anticipo. Non adatta ai bambini, si chiede un documento.',
        tempo: '3 ore per la «Time for Excellence»',
        costo: 'Time for Excellence 80 £ (circa 92 €); esperienze più lunghe da 250 £ (2026)',
        orari: 'Solo per visite prenotate; nel 2026 i fine settimana fino al 13 dicembre, calendario sul sito.',
        lat: 57.48676,
        lng: -3.20918,
        url: 'https://www.themacallan.com',
      },
      {
        nome: 'The Glenlivet',
        testo: 'La distilleria nella valle del Livet, un affluente dello Spey, in una delle zone più isolate dello Speyside. Nell\'Ottocento la valle era piena di alambicchi clandestini, e Glenlivet fu una delle prime distillerie con licenza.',
        come: 'Visite su prenotazione dal sito ufficiale, dove vanno controllati prezzi e orari. D\'estate i posti finiscono presto.',
        tempo: '1-2 ore',
        lat: 57.34381,
        lng: -3.33939,
        url: 'https://www.theglenlivet.com',
      },
      {
        nome: 'Cardhu',
        testo: 'La distilleria di Knockando, legata a Johnnie Walker, con molte formule di tour e degustazione.',
        come: 'Su prenotazione dal sito malts.com. Non ci si arriva con i mezzi pubblici. Non sono ammessi bambini sotto gli 8 anni.',
        tempo: '1-1,5 ore',
        costo: 'Da 18 sterline per «A Nip Round» (1 ora) e 23 per il «Flavour Journey» (1 ora e mezza) (2026)',
        orari: 'Gennaio e febbraio da giovedì a lunedì 10-16; marzo e aprile 10-17; da maggio a settembre 10-18; da ottobre a dicembre 10-17 (2026).',
        lat: 57.47063,
        lng: -3.34892,
        url: 'https://www.malts.com/en-gb/distilleries/cardhu',
      },
      {
        nome: 'Strathisla',
        testo: 'A Keith, ai margini orientali della valle, è una delle distillerie più antiche delle Highlands ancora in funzione, del 1786, con le due pagode sul tetto e la ruota ad acqua. È la casa del malto del Chivas Regal.',
        come: 'In auto, circa 20 minuti da Dufftown; Keith ha anche la stazione sulla linea Inverness-Aberdeen. Tour su prenotazione.',
        tempo: '1 ora e 20',
        costo: 'Tour con degustazione 25 £ (circa 29 €, 2026)',
        lat: 57.54699,
        lng: -2.95484,
        url: 'https://www.maltwhiskydistilleries.com',
      },
      {
        nome: 'Speyside Cooperage',
        testo: 'Il laboratorio dove i bottai riparano e assemblano le botti per le distillerie della zona. Dalla galleria si guardano lavorare a mano, con fuoco e martelli, ed è l\'unica visita della valle che non finisce con un bicchiere obbligatorio.',
        come: 'In auto, appena fuori Craigellachie sulla strada per Dufftown. Tour ogni ora, da prenotare.',
        quando: 'Nei giorni feriali, quando i bottai lavorano.',
        tempo: '1 ora',
        orari: 'Lunedì-giovedì 9-16, venerdì 9-15; chiuso sabato e domenica e per due settimane tra Natale e Capodanno.',
        lat: 57.48195,
        lng: -3.18118,
        url: 'https://speysidecooperage.co.uk',
      },
      {
        nome: 'Glen Grant',
        testo: 'La distilleria di Rothes, fondata nel 1840, con un giardino vittoriano nella valletta alle spalle degli edifici, voluto dal maggiore James Grant.',
        come: 'In auto, circa 10 minuti a nord di Craigellachie. Tour su prenotazione dal sito ufficiale; il giardino è stato chiuso per lavori, va verificato prima.',
        tempo: '1,5 ore',
        lat: 57.53011,
        lng: -3.21104,
        url: 'https://www.glengrant.com',
      },
      {
        nome: 'Balvenie Castle',
        testo: 'Le rovine di un castello del Duecento sulla collina sopra Dufftown, a due passi da Glenfiddich, con un fossato e le stanze rinascimentali aggiunte nel Cinquecento.',
        come: 'A piedi da Glenfiddich, dieci minuti; biglietti online sul sito di Historic Environment Scotland.',
        quando: 'Tra un tour e l\'altro, nella stagione d\'apertura.',
        tempo: '45 minuti',
        costo: '6 £ online (circa 7 €), 6,80 £ alla cassa (adulti, 2026)',
        orari: 'Dal 1° aprile al 30 settembre, mercoledì-domenica 10-16:30, pausa pranzo 12:30-13:30; chiuso lunedì e martedì e da ottobre a marzo.',
        lat: 57.45328,
        lng: -3.12525,
        url: 'https://www.historicenvironment.scot/visit-a-place/places/balvenie-castle/',
      },
      {
        nome: 'Craigellachie Bridge',
        testo: 'Il ponte di ghisa a un\'arcata progettato da Thomas Telford, aperto nel 1814, sullo Spey poco fuori dal villaggio. Oggi è pedonale e ci passa la Speyside Way.',
        come: 'A piedi dal villaggio di Craigellachie, o lungo la Speyside Way da Aberlour, circa tre chilometri.',
        quando: 'La mattina presto o la sera, con la luce sul fiume.',
        tempo: '30 minuti',
        costo: 'gratuito',
        lat: 57.49132,
        lng: -3.1939,
      },
      {
        nome: 'Aberlour e la Speyside Way',
        testo: 'Il villaggio di Aberlour, sullo Spey, con una distilleria propria, i biscotti Walkers e un parco lungo il fiume. Da qui la Speyside Way, il sentiero lungo la valle, segue la vecchia ferrovia fino a Craigellachie.',
        come: 'In auto o con i bus locali da Elgin; il sentiero è pianeggiante e segnato.',
        quando: 'Tra due tour, per una pausa a piedi.',
        tempo: '1-2 ore',
        costo: 'gratuito',
        lat: 57.47079,
        lng: -3.22554,
      },
      {
        nome: 'Ballindalloch Castle',
        testo: 'Un castello del Cinquecento ancora abitato dalla stessa famiglia, i Macpherson-Grant, con giardini, un percorso nel parco e una mandria di bovini Aberdeen Angus, la più antica ancora esistente.',
        come: 'In auto, tra Aberlour e Grantown-on-Spey, sulla A95.',
        quando: 'Nella stagione d\'apertura, da metà aprile a fine settembre (2026).',
        tempo: '1,5-2 ore',
        lat: 57.41184,
        lng: -3.3693,
        url: 'https://www.ballindallochcastle.co.uk',
      },
    ],
    programmi: [
      {
        titolo: '1 giorno',
        tappe: [
          'Glenfiddich la mattina e Balvenie Castle a piedi',
          'Pranzo ad Aberlour e un tratto della Speyside Way fino al ponte di Craigellachie',
          'Speyside Cooperage o Cardhu nel pomeriggio',
          'Cena e notte a Dufftown o ad Aberlour',
        ],
      },
      {
        titolo: '2 giorni',
        tappe: [
          'Giorno 1 come sopra',
          'Giorno 2: The Macallan la mattina, poi Glen Grant a Rothes o The Glenlivet nella valle del Livet',
        ],
      },
      {
        titolo: '3 giorni',
        tappe: [
          'Giorni 1-2 come sopra',
          'Giorno 3: Strathisla a Keith la mattina, Ballindalloch Castle nel pomeriggio, oppure la cattedrale di Elgin',
        ],
      },
    ],
    zone: [
      {
        nome: 'Dufftown',
        perChi: 'chi vuole Glenfiddich e Balvenie a piedi',
        testo: 'Il paese delle distillerie, con la torre dell\'orologio in piazza, qualche B&B, pub e negozi di whisky.',
        fascia: '90-160 €',
      },
      {
        nome: 'Aberlour e Craigellachie',
        perChi: 'chi vuole stare al centro del giro',
        testo: 'Due villaggi sullo Spey a cinque minuti l\'uno dall\'altro, con hotel storici, bar del whisky e la Speyside Way sotto casa.',
        fascia: '110-220 €',
      },
      {
        nome: 'Grantown-on-Spey',
        perChi: 'chi unisce lo Speyside e i Cairngorms',
        testo: 'Una cittadina georgiana più a monte, a mezz\'ora dalle distillerie e da Aviemore, con più scelta di alloggi.',
        fascia: '90-170 €',
      },
    ],
    gite: [
      {
        nome: 'Elgin Cathedral',
        distanza: 'circa 25 minuti a nord di Rothes',
        come: 'In auto, o in treno sulla linea Inverness-Aberdeen.',
        testo: 'Le rovine della cattedrale medievale detta «la lanterna del nord», con le torri sulla facciata ovest. È di Historic Environment Scotland.',
      },
      {
        nome: 'Cairngorms e Aviemore',
        distanza: 'circa 1 ora da Dufftown',
        come: 'In auto per Grantown-on-Spey.',
        testo: 'Loch Morlich, i boschi di Rothiemurchus e la distilleria di Dalwhinnie, sulla strada per Edimburgo.',
      },
      {
        nome: 'La costa del Moray',
        distanza: 'circa 40 minuti fino a Findhorn',
        come: 'In auto verso nord.',
        testo: 'Spiagge lunghe e villaggi di pescatori sul Moray Firth, dove a volte si vedono i delfini.',
      },
    ],
    faq: [
      {
        domanda: 'Quante distillerie si visitano in un giorno?',
        risposta: 'Due: una la mattina e una nel pomeriggio, con una pausa a metà. Le distillerie sono a pochi chilometri l\'una dall\'altra, ma i tour durano da un\'ora a tre.',
      },
      {
        domanda: 'Bisogna prenotare i tour?',
        risposta: 'Sì, quasi ovunque e d\'estate con settimane di anticipo. Glenfiddich vende i biglietti solo online, The Macallan apre le date quattro mesi prima.',
      },
      {
        domanda: 'Chi guida può fare la degustazione?',
        risposta: 'Meglio di no: in Scozia il limite di alcol è più basso che in Inghilterra. Molte distillerie danno il «driver\'s dram», l\'assaggio in una mini bottiglia sigillata da portare via; va chiesto quando si prenota.',
      },
      {
        domanda: 'Si possono portare i bambini?',
        risposta: 'In molte distillerie no: Cardhu e Glen Ord non ammettono bambini sotto gli 8 anni, Glenfiddich e The Macallan accettano solo adulti. La Speyside Cooperage e i castelli vanno bene per tutti.',
      },
      {
        domanda: 'Lo Speyside si gira senza auto?',
        risposta: 'Solo in parte: il treno arriva a Elgin e Keith e ci sono bus locali, ma diverse distillerie non sono servite. Le alternative sono un taxi o un tour organizzato, che permettono anche di assaggiare.',
      },
      {
        domanda: 'Qual è il periodo migliore?',
        risposta: 'Da maggio a settembre, con più tour al giorno; a fine aprile e inizio maggio c\'è il festival Spirit of Speyside, con eventi speciali e alloggi pieni.',
      },
    ],
    attenzioni: [
      'Chi guida non beve: molte distillerie danno il «driver\'s dram», l\'assaggio in una mini bottiglia sigillata da portare via. Non tutte, va chiesto quando si prenota.',
      'Bambini sotto gli 8 anni non ammessi ai tour di molte distillerie.',
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'Il whisky versato nei bicchieri da degustazione alla distilleria Glenfiddich di Dufftown',
    immagine: `${IMG}/giorno-10-glenfiddich.webp`,
  },
  {
    slug: 'cairngorms',
    paeseSlug: 'scozia',
    ordine: 9,
    nome: 'Cairngorms',
    tipologia: ['natura', 'montagna', 'parco nazionale'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione:
      'Il parco nazionale più grande del Regno Unito, tra lo Speyside e la strada A9 verso Perth. Montagne arrotondate, foreste di pini, laghi come Loch Morlich, e Aviemore come base.',
    percheAndarci: 'Per una giornata di natura sulla strada del ritorno verso Edimburgo, con una sosta alla distilleria di Dalwhinnie.',
    cosaVedere: ['Loch Morlich', 'La foresta di Rothiemurchus', 'Aviemore', 'La distilleria di Dalwhinnie'],
    cosaFare: ['Una camminata intorno a Loch Morlich', 'La sosta a Dalwhinnie, sulla A9'],
    comeArrivare:
      "In auto sulla A9, la strada che unisce Perth e Inverness e attraversa il parco: da Edimburgo ad Aviemore ci sono circa due ore e tre quarti, da Inverness tre quarti d'ora, dallo Speyside un'ora. Aviemore ha anche la stazione sulla linea delle Highlands, con treni diretti da Edimburgo, Glasgow e Inverness; da lì i bus locali salgono a Glenmore e a Loch Morlich.",
    comeSpostarsi: 'In auto o in bici nella zona di Aviemore.',
    costi:
      'Dalwhinnie da 21 £, funicolare del Cairngorm 22 £ (17 £ nei periodi ridotti), Highland Wildlife Park 22,50 £ online (2026); Highland Folk Museum a offerta, Loch Morlich, Loch an Eilein e Ruthven gratuiti. Budget indicativo al giorno a persona, con la doppia divisa in due e l\'auto a parte: basso 70-100 €, medio 120-180 €, alto oltre 250 €.',
    erroriDaEvitare: [
      'Salire in quota senza attrezzatura: sulle cime dei Cairngorms il tempo è da montagna vera anche d\'estate',
      'Pensare che dalla funicolare si possa andare a piedi sull\'altopiano: dalla stazione in cima d\'estate non si esce, si sale a piedi dal parcheggio',
    ],
    miaEsperienza: 'Ho fatto anche i Cairngorms.',
    // GUIDA-START
    luoghi: [
      {
        nome: 'Distilleria di Dalwhinnie',
        testo: 'Fondata nel 1897, è una delle distillerie più alte della Scozia, a 355 metri, dentro il parco nazionale dei Cairngorms. È una sosta facile sulla A9 tra Inverness e Perth.',
        come: 'Su prenotazione dal sito malts.com.',
        tempo: '45 minuti per il tour classico',
        costo: 'Tour con degustazione da 21 sterline; degustazione guidata da 14 (2026)',
        orari: 'Tutti i giorni 10-16 (2026).',
        lat: 56.94024,
        lng: -4.23897,
        url: 'https://www.malts.com/en-gb/distilleries/dalwhinnie',
      },
      {
        nome: 'Loch Morlich',
        testo: 'Un lago tra i pini ai piedi dei Cairngorms, a una decina di chilometri da Aviemore, con una spiaggia di sabbia rara per le Highlands e un sentiero ad anello di circa 5 km nella foresta di Glenmore.',
        come: 'In auto da Aviemore verso Glenmore; parcheggi a pagamento lungo la riva. Bus locali da Aviemore.',
        quando: 'La mattina presto, con l\'acqua ferma e le montagne riflesse.',
        tempo: '1-2 ore',
        costo: 'gratuito, parcheggio a pagamento',
        lat: 57.16333,
        lng: -3.7142,
      },
      {
        nome: 'Funicolare del Cairngorm',
        testo: 'La funicolare sale dal parcheggio di Coire Cas fino alla stazione del Ptarmigan, a circa 1.100 metri, con una vista lunga sulla valle dello Spey. In cima ci sono una mostra e un caffè; d\'estate dalla stazione non si esce sulla montagna, per proteggere l\'altopiano.',
        come: 'In auto o con il bus da Aviemore fino al parcheggio di Coire Cas; biglietti online o in biglietteria.',
        quando: 'In una giornata limpida; a novembre può chiudere per manutenzione.',
        tempo: '1-1,5 ore',
        costo: '22 £ adulti (circa 25 €), 17 £ nei periodi a tariffa ridotta (2026)',
        lat: 57.1274,
        lng: -3.6598,
        url: 'https://www.cairngormmountain.co.uk',
      },
      {
        nome: 'Cairngorm Reindeer Centre',
        testo: 'L\'unica mandria di renne in libertà del Regno Unito, riportata qui nel 1952, che pascola sui pendii dei Cairngorms. Con una guida si sale a piedi fino alla mandria e si dà da mangiare alle renne.',
        come: 'In auto o in bus fino a Glenmore, accanto a Loch Morlich. Il giro in collina si prenota sul sito; i biglietti escono 30 giorni prima.',
        quando: 'Da febbraio a dicembre; chiuso da dopo le feste di Natale fino a metà febbraio.',
        tempo: '1,5-2 ore',
        orari: 'Negozio e recinti 10-17; escursione in collina ogni giorno alle 11, con turni in più d\'estate.',
        lat: 57.16704,
        lng: -3.69121,
        url: 'https://www.cairngormreindeer.co.uk',
      },
      {
        nome: 'Loch an Eilein',
        testo: 'Un lago nella foresta di Rothiemurchus, con le rovine di un castello su un isolotto e un sentiero ad anello di circa 5 km tra i pini caledoniani. È una delle camminate più belle della zona e va bene per tutti.',
        come: 'In auto da Aviemore, circa 10 minuti verso sud; parcheggio a pagamento all\'inizio del sentiero.',
        quando: 'La mattina o al tramonto.',
        tempo: '1,5-2 ore',
        costo: 'gratuito, parcheggio a pagamento',
        lat: 57.14798,
        lng: -3.81946,
        url: 'https://rothiemurchus.net',
      },
      {
        nome: 'An Lochan Uaine e il Ryvoan Pass',
        testo: 'Un laghetto di un verde intenso tra i pini, sul sentiero che dalla foresta di Glenmore sale verso il passo di Ryvoan. È una camminata facile, di circa 5 km andata e ritorno.',
        come: 'A piedi dal centro visitatori di Glenmore, accanto a Loch Morlich, seguendo le indicazioni.',
        quando: 'In qualsiasi stagione, anche con tempo incerto.',
        tempo: '1,5-2 ore',
        costo: 'gratuito',
        lat: 57.17525,
        lng: -3.65433,
      },
      {
        nome: 'Highland Wildlife Park',
        testo: 'Il parco della Royal Zoological Society of Scotland a Kincraig, con animali delle montagne e del nord: leopardi delle nevi, orsi polari, lupi, bisonti e gatti selvatici scozzesi. Una parte si attraversa in auto.',
        come: 'In auto sulla B9152 tra Aviemore e Kingussie.',
        quando: 'La mattina, quando gli animali sono più attivi.',
        tempo: '2-3 ore',
        costo: '22,50 £ adulti online (circa 26 €, 2026)',
        orari: 'Tutti i giorni tranne il 25 dicembre; da gennaio a marzo 10-16, nei mesi più lunghi fino a sera. Ultimo ingresso un\'ora prima della chiusura.',
        lat: 57.1099,
        lng: -3.97586,
        url: 'https://www.highlandwildlifepark.org.uk',
      },
      {
        nome: 'Highland Folk Museum',
        testo: 'Un museo all\'aperto a Newtonmore, con una trentina di edifici ricostruiti che mostrano come si viveva nelle Highlands dal Seicento agli anni Cinquanta: un villaggio di case di torba, una scuola, una fattoria.',
        come: 'In auto, all\'uscita della A9 per Newtonmore; il museo è lungo più di un chilometro e si gira a piedi.',
        quando: 'Nella stagione di apertura, in una giornata asciutta.',
        tempo: '2-3 ore',
        costo: 'ingresso a offerta',
        orari: 'Dal 1° aprile al 25 ottobre 2026, tutti i giorni: 10-17 fino al 31 agosto, 10:30-16 da settembre.',
        lat: 57.0687,
        lng: -4.10445,
        url: 'https://www.highlifehighland.com/highlandfolkmuseum/',
      },
      {
        nome: 'Ruthven Barracks',
        testo: 'Le rovine di una caserma costruita dal governo nel 1719 per controllare le Highlands dopo la prima rivolta giacobita, su una collinetta sopra Kingussie. Fu incendiata dai giacobiti nel 1746, dopo Culloden.',
        come: 'In auto da Kingussie, circa due chilometri verso sud; si vede anche dalla A9.',
        quando: 'Al tramonto, o la sera quando è illuminata.',
        tempo: '30-45 minuti',
        costo: 'gratuito',
        orari: 'Aperta tutto l\'anno.',
        lat: 57.07215,
        lng: -4.03917,
        url: 'https://www.historicenvironment.scot/visit-a-place/places/ruthven-barracks/',
      },
    ],
    programmi: [
      {
        titolo: '1 giorno, sulla strada per Edimburgo',
        tappe: [
          'Loch Morlich la mattina presto, con un pezzo del sentiero ad anello',
          'Cairngorm Reindeer Centre per il giro delle 11',
          'Pranzo ad Aviemore, poi Ruthven Barracks',
          'Dalwhinnie nel pomeriggio e poi la A9 verso sud',
        ],
      },
      {
        titolo: '2 giorni',
        tappe: [
          'Giorno 1: Loch Morlich, Reindeer Centre, An Lochan Uaine e la funicolare del Cairngorm',
          'Giorno 2: Loch an Eilein la mattina, Highland Wildlife Park o Highland Folk Museum, Dalwhinnie',
        ],
      },
      {
        titolo: '3 giorni',
        tappe: [
          'Giorni 1-2 come sopra',
          'Giorno 3: una camminata più lunga a Rothiemurchus o una gita verso lo Speyside e Grantown-on-Spey',
        ],
      },
    ],
    zone: [
      {
        nome: 'Aviemore',
        perChi: 'chi arriva in treno e vuole ristoranti e negozi',
        testo: 'Il paese principale del parco, sulla linea delle Highlands, con hotel, B&B, ostelli e negozi di attrezzatura.',
        fascia: '100-190 €',
      },
      {
        nome: 'Glenmore e Loch Morlich',
        perChi: 'chi vuole dormire nel bosco ai piedi delle montagne',
        testo: 'Pochi lodge, un ostello e un campeggio sulla riva del lago, a dieci minuti da Aviemore. La sera non c\'è quasi niente.',
        fascia: '80-160 €',
      },
      {
        nome: 'Kingussie e Newtonmore',
        perChi: 'chi viaggia in auto sulla A9 e cerca prezzi più bassi',
        testo: 'Due paesi più a sud, vicino a Ruthven, al Folk Museum e al Wildlife Park, con guesthouse e qualche ristorante.',
        fascia: '80-150 €',
      },
    ],
    gite: [
      {
        nome: 'Speyside e le distillerie',
        distanza: 'circa 1 ora fino a Dufftown',
        come: 'In auto per Grantown-on-Spey.',
        testo: 'Glenfiddich, The Macallan, Cardhu e la Speyside Cooperage, con due tour al giorno.',
      },
      {
        nome: 'Braemar e il lato est del parco',
        distanza: 'circa 1 ora e mezza da Aviemore',
        come: 'In auto per Grantown-on-Spey e la Old Military Road, una delle strade più alte della Scozia.',
        testo: 'Il villaggio dei giochi delle Highlands, con il castello di Braemar, vicino alla tenuta reale di Balmoral.',
      },
      {
        nome: 'Inverness e Loch Ness',
        distanza: 'circa 45 minuti a nord',
        come: 'In auto o in treno sulla A9.',
        testo: 'Il castello di Urquhart, Culloden e il lungofiume di Inverness.',
      },
    ],
    faq: [
      {
        domanda: 'Qual è la base migliore per i Cairngorms?',
        risposta: 'Aviemore: ha la stazione, i servizi e i bus per Glenmore e Loch Morlich. Kingussie e Newtonmore sono più tranquille e un po\' più economiche.',
      },
      {
        domanda: 'Quanto costa la funicolare del Cairngorm?',
        risposta: '22 £ adulti, 17 £ nei periodi a tariffa ridotta (2026). D\'estate dalla stazione in cima non si esce sulla montagna: chi vuole camminare sale a piedi dal parcheggio.',
      },
      {
        domanda: 'Dove si vedono le renne?',
        risposta: 'Al Cairngorm Reindeer Centre di Glenmore, con l\'escursione guidata in collina ogni giorno alle 11 da febbraio a dicembre. I biglietti escono 30 giorni prima e d\'estate vanno presi presto.',
      },
      {
        domanda: 'Ci sono camminate facili?',
        risposta: 'Sì: gli anelli di Loch Morlich e di Loch an Eilein, circa 5 km ciascuno, e il sentiero per An Lochan Uaine. Sono pianeggianti e segnati.',
      },
      {
        domanda: 'Quando andare?',
        risposta: 'Da maggio a settembre per camminare, con giornate lunghe. In autunno i colori dei boschi sono belli, d\'inverno in quota c\'è neve e si scia.',
      },
      {
        domanda: 'Servono i midge repellent?',
        risposta: 'D\'estate sì, soprattutto vicino ai laghi all\'alba e al tramonto e con l\'aria ferma: i moscerini scozzesi sono fastidiosi, e un repellente specifico aiuta.',
      },
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'Loch Morlich con i pini e le montagne dei Cairngorms sullo sfondo',
    immagine: `${IMG}/giorno-11-cairngorms.webp`,
  },
  {
    slug: 'north-coast-500',
    paeseSlug: 'scozia',
    ordine: 10,
    nome: 'North Coast 500',
    tipologia: ['on the road', 'costa', 'natura'],
    giorniConsigliati: '4-7 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Un anello di 516 miglia, circa 830 km, che parte e arriva a Inverness e gira intorno all\'estremo nord della Scozia. Passa dal Black Isle, dall\'Easter Ross, dal Caithness, dal Sutherland e dal Wester Ross: montagne, spiagge bianche, scogliere e strade a una corsia.',
    percheAndarci: 'Per la strada più bella del nord: il passo del Bealach na Bà, le montagne di Torridon e Assynt, le spiagge del Sutherland e le scogliere di Duncansby.',
    cosaVedere: [
      'Il Bealach na Bà e Applecross',
      'Torridon',
      'Ullapool',
      'Il castello di Ardvreck sul Loch Assynt',
      'Il ponte di Kylesku',
      'La Smoo Cave a Durness',
      'John o\' Groats e i Duncansby Stacks',
      'La distilleria di Glen Ord, sul Black Isle',
    ],
    cosaFare: ['Guidare il Bealach na Bà con il cielo aperto', 'Una giornata con poche ore di guida e molte soste', 'Il giro in barca nella Smoo Cave d\'estate'],
    comeArrivare:
      "Da Inverness, in un senso o nell'altro: l'aeroporto di Inverness ha voli da Londra e da altre città britanniche, e in treno si arriva da Edimburgo e Glasgow. L'auto si ritira lì. Da Skye si entra dal lato ovest, verso Applecross, passando il ponte di Skye e Lochcarron. Il treno da Inverness arriva anche a Thurso e Wick, sulla costa nord, ma per fare il giro serve l'auto.",
    comeSpostarsi:
      'In auto. Tutto il giro senza fermarsi richiede 11-13 ore di guida, ma la maggior parte di chi lo fa ci mette 5-7 giorni. Lunghi tratti sono a una corsia con le piazzole di scambio: si sceglie un\'auto non troppo grande.',
    periodoMigliore: 'da maggio a settembre',
    costi:
      'Glen Ord da 24 £, Inverewe Garden 15 £, Dunrobin Castle 16 £ (2026); Corrieshalloch, Smoo Cave, Achmelvich, Dunnet Head e Duncansby sono gratuiti. Budget indicativo al giorno a persona, con la doppia divisa in due e l\'auto a parte: basso 80-110 €, medio 130-190 €, alto oltre 260 €. D\'estate gli alloggi sono pochi e si prenotano mesi prima.',
    erroriDaEvitare: [
      'Farlo in tre giorni: si passa la giornata al volante e non ci si ferma mai',
      'Guidare il Bealach na Bà con un camper grande o con la nebbia',
      'Partire con il serbatoio a metà nei tratti più isolati',
      'Dormire in camper fuori dalle aree consentite',
    ],
    miaEsperienza: 'L\'ho fatta a luglio, ed è mozzafiato. E il meteo, come in tutta la Scozia, è imprevedibile. Anche l\'autunno, con il foliage, è bellissimo.',
    // GUIDA-START
    luoghi: [
      {
        nome: 'Bealach na Bà',
        testo: 'Il passo di montagna verso Applecross, con tornanti stretti e pendenze forti su una strada a una corsia, che sale fino a 626 metri. Con il cielo limpido dalla cima si vede l\'Isola di Skye.',
        come: 'In auto, piano, cedendo il passo nelle piazzole. Non è una strada per camper grandi né per chi guida con ansia; l\'alternativa è la strada costiera a nord di Applecross.',
        quando: 'Con il cielo aperto e mai con il ghiaccio.',
        tempo: '1 ora con le soste',
        costo: 'gratuito',
        lat: 57.40768,
        lng: -5.67497,
      },
      {
        nome: 'Torridon e Loch Maree',
        testo: 'Le montagne di arenaria rossa di Torridon, tra le più antiche d\'Europa, si alzano a picco sul mare. Più a nord la strada costeggia Loch Maree e la riserva di Beinn Eighe, la prima riserva naturale nazionale del Regno Unito, con i pini caledoniani.',
        come: 'In auto da Applecross per la strada costiera e Shieldaig, poi la A896 e la A832.',
        quando: 'La mattina, con la luce sulle montagne.',
        tempo: 'mezza giornata',
        costo: 'gratuito',
        lat: 57.54459,
        lng: -5.51035,
      },
      {
        nome: 'Inverewe Garden',
        testo: 'Un giardino sul mare a Poolewe, creato da Osgood Mackenzie dal 1862 su una penisola spoglia. Grazie alla Corrente del Golfo ci crescono piante di mezzo mondo, alla stessa latitudine della Siberia meridionale. È del National Trust for Scotland.',
        come: 'In auto sulla A832, appena fuori Poolewe.',
        tempo: '1,5-2 ore',
        costo: '15 £ adulti (circa 17 €, 2026)',
        orari: 'Giardino dal 29 marzo al 15 novembre, tutti i giorni 10-17; centro visitatori e negozio aperti tutto l\'anno.',
        lat: 57.77574,
        lng: -5.60255,
        url: 'https://www.nts.org.uk/visit/places/inverewe',
      },
      {
        nome: 'Corrieshalloch Gorge',
        testo: 'Una gola profonda e stretta dove il fiume Droma salta con le Falls of Measach, alte circa 45 metri. Si guarda dall\'alto da un ponte sospeso vittoriano e da una piattaforma panoramica.',
        come: 'In auto sulla A835, circa 20 minuti a sud di Ullapool; parcheggio del National Trust for Scotland e breve sentiero.',
        quando: 'Dopo la pioggia.',
        tempo: '30-45 minuti',
        costo: 'gratuito',
        lat: 57.7577,
        lng: -5.02322,
        url: 'https://www.nts.org.uk/visit/places/corrieshalloch-gorge',
        consiglio: 'Il ponte regge poche persone alla volta: si rispetta il cartello.',
      },
      {
        nome: 'Ullapool',
        testo: 'Il villaggio di pescatori fondato nel Settecento su una punta del Loch Broom, con le case bianche sul porto e i traghetti per l\'isola di Lewis. È la tappa più comoda del lato ovest, con ristoranti di pesce, negozi e distributori.',
        come: 'In auto sulla A835, circa un\'ora da Inverness per la via diretta.',
        quando: 'La sera, per cena sul porto.',
        tempo: 'mezza giornata o una notte',
        costo: 'gratuito',
        lat: 57.89541,
        lng: -5.1483,
      },
      {
        nome: 'Achmelvich Beach',
        testo: 'Una baia di sabbia bianca e acqua turchese vicino a Lochinver, tra rocce grigie di gneiss, tra le più antiche della Gran Bretagna. Dalla spiaggia un sentiero breve porta a calette ancora più piccole.',
        come: 'In auto da Lochinver per una strada a una corsia; parcheggio sopra la spiaggia.',
        quando: 'Con il sole, nella mattina.',
        tempo: '1-2 ore',
        costo: 'gratuito',
        lat: 58.17015,
        lng: -5.30722,
      },
      {
        nome: 'Assynt e Kylesku',
        testo: 'Montagne isolate che si alzano dalla brughiera, come il Suilven e lo Stac Pollaidh, il castello di Ardvreck in rovina sul Loch Assynt e il ponte curvo di Kylesku sullo stretto, aperto nel 1984.',
        come: 'In auto, sulla strada da Ullapool verso nord; ad Ardvreck si arriva a piedi dalla piazzola sulla A837.',
        tempo: 'mezza giornata',
        costo: 'gratuito',
        lat: 58.16641,
        lng: -4.99397,
      },
      {
        nome: 'Smoo Cave',
        testo: 'Una grotta marina enorme a Durness, con un ingresso alto circa 15 metri, scavata in parte dal mare e in parte da un torrente che dentro forma una cascata.',
        come: 'A piedi dal parcheggio sopra la grotta, con una scala e una passerella. Da aprile a ottobre c\'è un breve giro in barca nella camera interna, a pagamento e senza prenotazione, solo se il livello dell\'acqua lo permette.',
        quando: 'Dopo la pioggia la cascata è più forte, ma il giro in barca può essere sospeso.',
        tempo: '1 ora',
        costo: 'grotta gratuita',
        lat: 58.56384,
        lng: -4.71987,
      },
      {
        nome: 'Dunnet Head',
        testo: 'Il punto più a nord della Gran Bretagna continentale, con un faro di Robert Stevenson del 1831 sopra le scogliere. Sotto nidificano le pulcinelle di mare, e nelle giornate limpide si vedono le Orcadi.',
        come: 'In auto dalla A836 per la B855, fino al parcheggio accanto al faro.',
        quando: 'Da maggio a luglio per le pulcinelle, la sera per la luce.',
        tempo: '45 minuti',
        costo: 'gratuito',
        lat: 58.67148,
        lng: -3.37664,
      },
      {
        nome: 'Castle of Mey',
        testo: 'Il castello sul Pentland Firth comprato nel 1952 dalla Regina Madre, che lo restaurò e ci passò le estati per decenni. Si visitano le stanze com\'erano e il giardino murato.',
        come: 'In auto sulla A836, tra Dunnet Head e John o\' Groats.',
        quando: 'Nella stagione estiva di apertura: date sul sito ufficiale.',
        tempo: '1,5 ore',
        lat: 58.64718,
        lng: -3.22497,
        url: 'https://www.castleofmey.org.uk',
      },
      {
        nome: 'Duncansby Stacks',
        testo: 'I faraglioni appuntiti davanti alle scogliere di Duncansby Head, poco oltre John o\' Groats, sul Pentland Firth.',
        come: 'A piedi dal faro di Duncansby Head, sul prato in cima alle scogliere, circa 20 minuti.',
        tempo: '1 ora',
        costo: 'gratuito',
        lat: 58.64394,
        lng: -3.0253,
      },
      {
        nome: 'Dunrobin Castle',
        testo: 'Il castello dei conti e duchi di Sutherland vicino a Golspie, con torri a punta in stile francese e giardini all\'italiana che scendono al mare. Ogni giorno ci sono gli spettacoli di falconeria.',
        come: 'In auto sulla A9, sulla costa est; ha anche una piccola stazione ferroviaria.',
        quando: 'Per le esibizioni di falconeria, alle 11:30 o alle 14:30.',
        tempo: '2 ore',
        costo: '16 £ adulti (circa 18 €, 2026), falconeria compresa',
        orari: 'Dal 1° aprile al 31 ottobre: aprile-settembre 10-17:30, ottobre 10:30-17; ultimo ingresso un\'ora prima. Chiuso d\'inverno.',
        lat: 57.98578,
        lng: -3.94737,
        url: 'https://www.dunrobincastle.co.uk',
      },
      {
        nome: 'Glen Ord',
        testo: 'La distilleria del Singleton, sul bordo del Black Isle vicino a Muir of Ord.',
        come: 'Su prenotazione dal sito malts.com; le date escono circa 90 giorni prima. Non sono ammessi bambini sotto gli 8 anni.',
        tempo: '1 ora e un quarto per il tour classico',
        costo: 'Tour classico da 24 sterline (2026)',
        orari: 'Tutti i giorni: da maggio ad agosto 10-18, da settembre ad aprile 10-17 (2026).',
        lat: 57.52259,
        lng: -4.47405,
        url: 'https://www.malts.com/en-gb/distilleries/the-singleton-of-glen-ord',
      },
    ],
    programmi: [
      {
        titolo: '4 giorni da Skye a Inverness',
        tappe: [
          'Giorno 1: da Skye ad Applecross sul Bealach na Bà, poi Torridon',
          'Giorno 2: da Torridon a Ullapool, poi Assynt e Ardvreck',
          'Giorno 3: Kylesku e la costa del Sutherland fino a Durness e la Smoo Cave',
          'Giorno 4: da Durness a John o\' Groats e Duncansby, poi la costa est fino a Inverness con Glen Ord',
        ],
      },
      {
        titolo: '6 giorni da Inverness',
        tappe: [
          'Giorno 1: Glen Ord, poi verso ovest fino a Lochcarron e Applecross sul Bealach na Bà',
          'Giorno 2: Torridon, Loch Maree e Inverewe Garden, notte a Ullapool',
          'Giorno 3: Corrieshalloch Gorge la mattina presto, poi Assynt, Achmelvich e Ardvreck',
          'Giorno 4: Kylesku e la costa fino a Durness, con la Smoo Cave',
          'Giorno 5: la costa nord fino a Thurso, Dunnet Head e il Castle of Mey',
          'Giorno 6: John o\' Groats e Duncansby, poi Dunrobin Castle e la costa est fino a Inverness',
        ],
      },
    ],
    zone: [
      {
        nome: 'Applecross e Torridon',
        perChi: 'chi entra dal lato ovest',
        testo: 'Pochissimi alloggi tra il mare e le montagne: un inn sul mare ad Applecross, qualche B&B e un hotel a Torridon. Si prenotano molto presto.',
        fascia: '120-250 €',
      },
      {
        nome: 'Ullapool',
        perChi: 'chi vuole servizi e ristoranti a metà giro',
        testo: 'La base più comoda del lato ovest, con B&B, guesthouse, un ostello e i ristoranti di pesce del porto.',
        fascia: '100-190 €',
      },
      {
        nome: 'Durness e la costa nord',
        perChi: 'chi vuole spiagge e scogliere vicino',
        testo: 'Un villaggio sparso sopra le spiagge, con pochi B&B, un ostello e un campeggio sul mare.',
        fascia: '90-170 €',
      },
      {
        nome: 'Thurso e John o\' Groats',
        perChi: 'chi vuole Dunnet Head e il traghetto per le Orcadi',
        testo: 'Thurso è la cittadina più grande della costa nord, con hotel e negozi; a John o\' Groats ci sono alcuni alloggi sul mare.',
        fascia: '90-170 €',
      },
    ],
    gite: [
      {
        nome: 'Isole Orcadi',
        distanza: 'circa 1 ora e mezza di traghetto da Scrabster a Stromness',
        come: 'Traghetto per auto da Scrabster, vicino a Thurso; d\'estate anche traghetti passeggeri da John o\' Groats.',
        testo: 'Il villaggio neolitico di Skara Brae, i cerchi di pietre di Brodgar e Stenness e la cattedrale di Kirkwall. Merita almeno una notte.',
      },
      {
        nome: 'Handa Island',
        distanza: 'pochi minuti di barca da Tarbet, vicino a Scourie',
        come: 'Barca passeggeri da Tarbet, d\'estate e con il tempo buono.',
        testo: 'Una riserva di uccelli marini con scogliere alte, gazze marine, urie e pulcinelle di mare, e un sentiero ad anello sull\'isola.',
      },
    ],
    faq: [
      {
        domanda: 'Quanti giorni servono per la North Coast 500?',
        risposta: 'Almeno quattro o cinque, meglio sei o sette. Tutto di fila sono 11-13 ore di guida, ma con le strade a una corsia e le soste ogni giorno se ne vanno più ore del previsto.',
      },
      {
        domanda: 'In che senso conviene farla?',
        risposta: 'In senso orario, dal lato est verso ovest, si lascia il meglio alla fine; in senso antiorario si comincia subito con Applecross e Torridon. Chi arriva da Skye entra dal lato ovest.',
      },
      {
        domanda: 'Il Bealach na Bà è pericoloso?',
        risposta: 'È ripido e stretto, con tornanti e una corsia sola, ma con un\'auto normale e calma si fa. Non è adatto a camper grandi e principianti, e con ghiaccio o nebbia si prende la strada costiera.',
      },
      {
        domanda: 'Come funzionano le strade a una corsia?',
        risposta: 'Ci sono le piazzole di scambio, «passing places»: ci si ferma in quella alla propria sinistra, o si aspetta davanti a quella a destra. Non si parcheggia mai nelle piazzole e si lascia passare chi va più veloce.',
      },
      {
        domanda: 'Bisogna prenotare gli alloggi?',
        risposta: 'Sì, d\'estate con mesi di anticipo: nei tratti più isolati ci sono pochi B&B e nessuna alternativa per molti chilometri.',
      },
      {
        domanda: 'Ci sono i midge?',
        risposta: 'Da giugno ad agosto sì, soprattutto sulla costa ovest con l\'aria ferma, all\'alba e al tramonto. Con il vento spariscono; un repellente specifico è utile.',
      },
    ],
    attenzioni: [
      'Strade a una corsia: piazzola a sinistra, o si aspetta davanti a quella a destra; mai parcheggiare nelle piazzole.',
      'Pecore, mucche e cervi sulla strada.',
      'Distributori e negozi rari nei tratti più isolati: il pieno va fatto quando si può.',
      'Tratti senza segnale: mappe offline scaricate prima.',
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'La strada a una corsia del Bealach na Bà che scende tra le montagne verso il mare',
    immagine: `${IMG}/nc500-bealach-na-ba.webp`,
  },
]
