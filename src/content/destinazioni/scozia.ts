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
    comeArrivare: 'In auto sulla A82, da Glasgow verso Fort William.',
    comeSpostarsi: 'In auto, fermandosi nei parcheggi segnalati e mai sul bordo della strada.',
    periodoMigliore: 'da maggio a settembre; d\'inverno la valle è bellissima ma si cammina solo con esperienza',
    erroriDaEvitare: [
      'Fermarsi a fare foto sul ciglio della A82: si usano solo i parcheggi',
      'Partire per un sentiero di montagna sottovalutando il meteo: nebbia e pioggia arrivano in fretta',
    ],
    attenzioni: ['Moscerini (midges) d\'estate, soprattutto la sera e senza vento: serve un repellente.'],
    miaEsperienza: 'Ho fatto il Loch Lomond e Glencoe. Glencoe è bellissima.',
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
    comeArrivare: 'In auto da Glasgow, passando dal Loch Lomond. In treno da Glasgow Queen Street.',
    comeSpostarsi: 'A piedi in centro.',
    erroriDaEvitare: ['Arrivare d\'estate senza prenotare il tour della distilleria, che si riempie anche per le navi da crociera', 'Non prenotare la cena: i ristoranti di pesce sul porto sono pieni'],
    miaEsperienza: 'Da Ee-Usk, sul porto di Oban, ho mangiato pesce buonissimo. E da Oban sono andato alle Ebridi.',
    // GUIDA-START
    luoghi: [
      {
        nome: 'Distilleria di Oban',
        testo: 'Una piccola distilleria nel centro della cittadina, a pochi passi dal porto. Il whisky è un single malt della costa ovest.',
        come: 'Su prenotazione dal sito malts.com. Non sono ammessi bambini sotto gli 8 anni. Chi guida chiede se c\'è l\'assaggio da portare via.',
        quando: 'Aperta tutti i giorni: aprile 10-18, da maggio a settembre 10-19, ottobre 10-18, da novembre a marzo 10-17 (2026).',
        tempo: '1 ora per il tour classico',
        costo: 'Tour classico da 24 sterline (2026)',
        url: 'https://www.malts.com/en-gb/distilleries/oban',
        consiglio: 'D\'estate va prenotata con anticipo. Il programma dei tour è in revisione: va ricontrollato prima di partire.',
      },
      {
        nome: 'McCaig\'s Tower',
        testo: 'Un anello di archi di granito sulla collina sopra il porto, voluto dal banchiere John Stuart McCaig: iniziato nel 1897, rimase incompiuto alla sua morte, nel 1902. Dentro c\'è un giardino, e dal bordo si vede tutta la baia con le isole.',
        come: 'A piedi dal centro, con una salita breve e ripida.',
        quando: 'Al tramonto.',
        tempo: '45 minuti',
      },
      {
        nome: 'Ee-Usk',
        testo: 'Il ristorante di pesce sul North Pier, con le vetrate sull\'acqua e i traghetti che passano davanti. Pesce e frutti di mare della costa ovest.',
        come: 'Prenotazione dal sito o per telefono.',
        quando: 'Pranzo dalle 12, cena dalle 17:30.',
        tempo: '1-2 ore',
        url: 'https://www.eeusk.com',
      },
    ],
    sapori: [
      { nome: 'Frutti di mare', testo: 'Capesante, scampi, cozze e ostriche della costa ovest.' },
      { nome: 'Whisky di Oban', testo: 'Il single malt della distilleria in centro.' },
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
    comeArrivare: 'In auto sulla A82 da Glencoe; Glenfinnan è sulla A830 verso Mallaig.',
    comeSpostarsi: 'In auto. A Glenfinnan c\'è un parcheggio a pagamento vicino al centro visitatori.',
    erroriDaEvitare: ['Contare su un posto sul Jacobite senza prenotazione: i posti sono pochi', 'Camminare sui binari per la foto: si guarda il treno dai sentieri'],
    miaEsperienza: 'Sono andato al viadotto di Glenfinnan per il treno di Harry Potter, il Jacobite.',
    // GUIDA-START
    luoghi: [
      {
        nome: 'Il Jacobite',
        testo: 'Il treno a vapore stagionale da Fort William a Mallaig e ritorno, 84 miglia in tutto. Passa sul viadotto di Glenfinnan e si ferma circa un\'ora e mezza a Mallaig prima di tornare.',
        come: 'Prenotazione sul sito di West Coast Railways. Pochi posti in vendita il giorno stesso a Fort William, solo in contanti e senza garanzia. Quando il rischio di incendi è alto, o per un guasto, può essere trainato da una locomotiva diesel storica.',
        quando: 'D\'estate. A novembre 2026 date e prezzi del 2027 non sono ancora usciti.',
        tempo: 'una giornata',
        url: 'https://www.westcoastrailways.co.uk/jacobite/jacobite-steam-train-details.cfm',
      },
      {
        nome: 'Viadotto di Glenfinnan',
        testo: 'Il viadotto curvo ad archi della West Highland Line, sopra la valle in fondo al Loch Shiel. Dai sentieri sopra il centro visitatori si vede il treno passare.',
        come: 'In auto fino a Glenfinnan, poi a piedi sul sentiero per il belvedere.',
        quando: 'All\'ora di passaggio del Jacobite, da controllare sull\'orario della stagione.',
        tempo: '1-2 ore',
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
    comeArrivare: 'In auto sulla A82 lungo Loch Ness da Fort William, o da Skye passando per Eilean Donan.',
    comeSpostarsi: 'In auto.',
    erroriDaEvitare: ['Arrivare a Urquhart senza biglietto in alta stagione: si prenota online con data e ora'],
    miaEsperienza: 'Ho fatto Inverness e Loch Ness. Loch Ness, sinceramente, è un po\' meh: da solo non vale il viaggio.',
    // GUIDA-START
    luoghi: [
      {
        nome: 'Castello di Urquhart',
        testo: 'Le rovine di un castello medievale su un promontorio di Loch Ness, vicino a Drumnadrochit.',
        come: 'In auto sulla A82. Biglietti online sul sito di Historic Environment Scotland, con data e ora.',
        quando: 'All\'apertura, prima dei pullman.',
        tempo: '1-2 ore',
        url: 'https://www.historicenvironment.scot/visit-a-place/places/urquhart-castle/',
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
    comeArrivare: 'In auto da Inverness o da Aviemore.',
    comeSpostarsi:
      'In auto, con un guidatore che non beve. In alternativa un tour organizzato o un taxi: alcune distillerie, come Cardhu, non sono servite dai mezzi pubblici.',
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
        testo: 'La distilleria di Dufftown, uno dei nomi più noti del single malt dello Speyside.',
        come: 'Tour su prenotazione dal sito ufficiale glenfiddich.com, dove vanno controllati prezzi e orari.',
        tempo: '1-2 ore',
        url: 'https://www.glenfiddich.com',
      },
      {
        nome: 'The Macallan',
        testo: 'La tenuta della distilleria vicino a Craigellachie, con l\'edificio moderno con il tetto ondulato coperto d\'erba.',
        come: 'Visite su prenotazione dal sito ufficiale themacallan.com, dove vanno controllati prezzi e orari.',
        tempo: '2 ore',
        url: 'https://www.themacallan.com',
      },
      {
        nome: 'The Glenlivet',
        testo: 'La distilleria nella valle del Livet, un affluente dello Spey, in una delle zone più isolate dello Speyside.',
        come: 'Visite su prenotazione dal sito ufficiale theglenlivet.com, dove vanno controllati prezzi e orari.',
        tempo: '1-2 ore',
        url: 'https://www.theglenlivet.com',
      },
      {
        nome: 'Cardhu',
        testo: 'La distilleria di Knockando, legata a Johnnie Walker, con molte formule di tour e degustazione.',
        come: 'Su prenotazione dal sito malts.com. Non ci si arriva con i mezzi pubblici. Non sono ammessi bambini sotto gli 8 anni.',
        quando: 'Gennaio e febbraio da giovedì a lunedì 10-16; marzo e aprile 10-17; da maggio a settembre 10-18; da ottobre a dicembre 10-17 (2026).',
        tempo: '1-1,5 ore',
        costo: 'Da 18 sterline per «A Nip Round» (1 ora) e 23 per il «Flavour Journey» (1 ora e mezza) (2026)',
        url: 'https://www.malts.com/en-gb/distilleries/cardhu',
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
    comeArrivare: 'In auto sulla A9, o in treno fino ad Aviemore.',
    comeSpostarsi: 'In auto o in bici nella zona di Aviemore.',
    erroriDaEvitare: ['Salire in quota senza attrezzatura: sulle cime dei Cairngorms il tempo è da montagna vera anche d\'estate'],
    miaEsperienza: 'Ho fatto anche i Cairngorms.',
    // GUIDA-START
    luoghi: [
      {
        nome: 'Distilleria di Dalwhinnie',
        testo: 'Fondata nel 1897, è una delle distillerie più alte della Scozia, a 355 metri, dentro il parco nazionale dei Cairngorms. È una sosta facile sulla A9 tra Inverness e Perth.',
        come: 'Su prenotazione dal sito malts.com.',
        quando: 'Tutti i giorni 10-16 (2026).',
        tempo: '45 minuti per il tour classico',
        costo: 'Tour con degustazione da 21 sterline; degustazione guidata da 14 (2026)',
        url: 'https://www.malts.com/en-gb/distilleries/dalwhinnie',
      },
      {
        nome: 'Loch Morlich',
        testo: 'Un lago tra i pini ai piedi dei Cairngorms, con una spiaggia e un sentiero ad anello.',
        come: 'In auto da Aviemore.',
        tempo: '1-2 ore',
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
    comeArrivare: 'Da Inverness, in un senso o nell\'altro. Da Skye si entra dal lato ovest, verso Applecross.',
    comeSpostarsi:
      'In auto. Tutto il giro senza fermarsi richiede 11-13 ore di guida, ma la maggior parte di chi lo fa ci mette 5-7 giorni. Lunghi tratti sono a una corsia con le piazzole di scambio: si sceglie un\'auto non troppo grande.',
    periodoMigliore: 'da maggio a settembre',
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
        testo: 'Il passo di montagna verso Applecross, con tornanti stretti e pendenze forti su una strada a una corsia. Con il cielo limpido dalla cima si vede l\'Isola di Skye.',
        come: 'In auto, piano, cedendo il passo nelle piazzole. Non è una strada per camper grandi né per chi guida con ansia.',
        quando: 'Con il cielo aperto e mai con il ghiaccio.',
        tempo: '1 ora con le soste',
      },
      {
        nome: 'Assynt e Kylesku',
        testo: 'Montagne isolate che si alzano dalla brughiera, il castello di Ardvreck in rovina sul Loch Assynt e il ponte curvo di Kylesku sullo stretto.',
        come: 'In auto, sulla strada da Ullapool verso nord.',
        tempo: 'mezza giornata',
      },
      {
        nome: 'Smoo Cave',
        testo: 'Una grotta marina enorme a Durness, con una cascata all\'interno.',
        come: 'A piedi dal parcheggio sopra la grotta.',
        tempo: '1 ora',
      },
      {
        nome: 'Duncansby Stacks',
        testo: 'I faraglioni appuntiti davanti alle scogliere di Duncansby Head, poco oltre John o\' Groats, sul Pentland Firth.',
        come: 'A piedi dal faro di Duncansby Head, sul prato in cima alle scogliere.',
        tempo: '1 ora',
      },
      {
        nome: 'Glen Ord',
        testo: 'La distilleria del Singleton, sul bordo del Black Isle vicino a Muir of Ord.',
        come: 'Su prenotazione dal sito malts.com; le date escono circa 90 giorni prima. Non sono ammessi bambini sotto gli 8 anni.',
        quando: 'Tutti i giorni: da maggio ad agosto 10-18, da settembre ad aprile 10-17 (2026).',
        tempo: '1 ora e un quarto per il tour classico',
        costo: 'Tour classico da 24 sterline (2026)',
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
