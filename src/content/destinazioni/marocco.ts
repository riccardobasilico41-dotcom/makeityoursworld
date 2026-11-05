import type { Destinazione } from '@/lib/types'

// Contenuto ricostruito dal viaggio "Marocco" (src/content/viaggi/07-marocco-360.md).

export const destinazioniMarocco: Destinazione[] = [
  {
    slug: 'marrakech',
    paeseSlug: 'marocco',
    ordine: 1,
    nome: 'Marrakech',
    tipologia: ['città', 'cultura'],
    giorniConsigliati: '3 giorni, tra inizio e fine viaggio',
    visitataPersonalmente: true,
    introduzione: 'La medina, i souk, Jemaa El-Fna di sera e il Jardin Majorelle: il punto di partenza e di arrivo del viaggio, dove abbiamo passato tre notti in momenti diversi.',
    percheAndarci: 'È la porta d\'ingresso più comoda al Marocco, con monumenti e atmosfera che valgono più di una visita.',
    cosaVedere: [
      'Piazza Jemaa El-Fna, il cuore della medina',
      'Medersa Ali Ben Youssef',
      'Palazzo della Bahia',
      'Tombe Saadiane',
      'Moschea Koutoubia (solo esterno)',
      'Jardin Majorelle',
    ],
    cosaFare: [
      'Tour guidato di Marrakech (vedi la scheda esperienza dedicata)',
      'Visita al Jardin Majorelle (vedi la scheda esperienza dedicata)',
      'Shopping nei souk',
      'Cena con dinner show da Narwama',
    ],
    doveDormire:
      'Abbiamo dormito a Villa Zahra, una villa spaziosa e tranquilla, comoda e meno soffocante di un hotel nel cuore della medina. Secondo le recensioni ha piscina e personale disponibile. L\'unico compromesso è la posizione, un po\' fuori dal centro, da tenere presente per gli spostamenti serali.\n\nEconomiche: Central House Marrakech Medina, Equity Point Marrakech · fascia media: Riad Nelia, Riad Yasmine · lux (non eccessiva): IZZA, Riad Kaiss.',
    doveMangiare: 'Kui Zin (cena di benvenuto), Narwama (dinner show), Safran by Koya.',
    usciteSerali: 'Churchill Bar o la Pergola.',
    comeArrivare: 'Volo internazionale su Marrakech.',
    comeSpostarsi: 'Van privato con guida, a piedi nella medina, taxi per il Jardin Majorelle (50 MAD a corsa).',
    periodoMigliore: 'inizio maggio',
    costi: 'Medersa 50 MAD, Palazzo della Bahia 70 MAD, Tombe Saadiane 70 MAD, Jardin Majorelle 150 MAD a persona.',
    erroriDaEvitare: ['Non prenotare il Jardin Majorelle in anticipo: gli ingressi sono contingentati e nelle ore centrali si riempie in fretta'],
    miaEsperienza:
      'Il tour guidato è stato un ottimo modo per orientarmi nella medina, ma il ricordo più forte di Marrakech resta Jemaa El-Fna, rivista di sera dopo il tour, fra incantatori di serpenti, musicisti e bancarelle di ogni tipo.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Piazza Jemaa el-Fna",
        "testo": "Il cuore della medina: di giorno bancarelle di succo d'arancia e incantatori, di sera si riempie di fumo, tamburi, musicanti e cucine all'aperto. Dal 2008 è patrimonio immateriale UNESCO.",
        "come": "Si arriva a piedi dalla medina; i taxi si fermano ai bordi. Si cammina in mezzo alle bancarelle.",
        "quando": "Al tramonto e di sera, quando le cucine aprono.",
        "tempo": "1-2 ore",
        "consiglio": "Mangiare ai banchi numerati con i prezzi esposti e scegliere quelli pieni di gente del posto."
      },
      {
        "nome": "Medersa Ben Youssef",
        "testo": "La scuola coranica fondata nel Trecento e ricostruita dai sultani saadiani nel Cinquecento, tra le più grandi del Maghreb. Il patio ha una vasca di marmo al centro e pareti di zellige, stucchi e cedro intagliato fino al tetto. Al piano di sopra si vedono le piccole celle degli studenti, affacciate sul cortile.",
        "come": "A piedi dalla medina nord, circa 15 minuti da Jemaa el-Fna.",
        "quando": "Mattina all'apertura, per avere i cortili vuoti.",
        "tempo": "45 minuti",
        "costo": "50 MAD (dal mio viaggio)"
      },
      {
        "nome": "Palazzo della Bahia",
        "testo": "Il palazzo ottocentesco del gran visir, con cortili, giardini, stanze dipinte e soffitti di cedro.",
        "come": "A piedi dal Mellah o da Jemaa el-Fna.",
        "quando": "Mattina.",
        "tempo": "1 ora",
        "costo": "70 MAD (dal mio viaggio)"
      },
      {
        "nome": "Tombe Saadiane",
        "testo": "Il mausoleo dei sultani saadiani del Cinquecento, con le tombe di marmo di Carrara e una sala con dodici colonne.",
        "come": "Vicino alla kasbah, a 15 minuti a piedi da Jemaa el-Fna.",
        "quando": "Mattina presto: nel pomeriggio si forma coda.",
        "tempo": "30-45 minuti",
        "costo": "70 MAD (dal mio viaggio)"
      },
      {
        "nome": "Jardin Majorelle",
        "testo": "Il giardino botanico dipinto di blu cobalto, creato dal pittore Jacques Majorelle e poi ristrutturato da Yves Saint Laurent. Dentro c'è il museo berbero.",
        "come": "Taxi dalla medina in 15 minuti, nel quartiere Guéliz.",
        "quando": "Mattina all'apertura: gli ingressi sono contingentati e il giardino si riempie.",
        "tempo": "1-1,5 ore",
        "costo": "150 MAD (dal mio viaggio)",
        "consiglio": "Prenotare il biglietto prima, perché negli orari centrali si forma coda.",
        "url": "https://www.jardinmajorelle.com/"
      },
      {
        "nome": "Museo Yves Saint Laurent",
        "testo": "A pochi passi dal Jardin Majorelle, l'edificio di mattoni rosa e terracotta ospita a rotazione abiti, bozzetti e fotografie dello stilista, che a Marrakech veniva ogni anno. C'è anche una sala per le mostre temporanee e una libreria.",
        "come": "A piedi dal Jardin Majorelle, nella stessa strada. Biglietto a parte, da comprare sul sito ufficiale.",
        "quando": "Aperto tutti i giorni tranne il mercoledì, 10-18, ultimo ingresso 17.30 (2026).",
        "tempo": "1 ora",
        "url": "https://www.museeyslmarrakech.com/",
        "consiglio": "Abbinarlo al Majorelle nella stessa mattina, prenotando entrambi in anticipo."
      },
      {
        "nome": "Moschea della Koutoubia",
        "testo": "Il minareto almohade del XII secolo, alto circa 77 metri, è il punto di riferimento della città e il modello della Giralda di Siviglia. La moschea è chiusa ai non musulmani, ma si gira intorno e nei giardini dietro, con i resti della prima moschea.",
        "come": "A piedi da Jemaa el-Fna, cinque minuti verso ovest.",
        "quando": "Tramonto, quando il minareto si colora e parte la preghiera della sera.",
        "tempo": "30 minuti",
        "costo": "Esterni e giardini liberi"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Medersa Ben Youssef e souq",
          "Pranzo in medina",
          "Pomeriggio: Palazzo della Bahia e Tombe Saadiane",
          "Sera: Jemaa el-Fna al tramonto e cena"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come sopra",
          "Giorno 2: Jardin Majorelle all'apertura, Guéliz, hammam e cena con spettacolo"
        ]
      }
    ],
    zone: [
      {
        "nome": "Medina",
        "perChi": "chi vuole l'atmosfera di Marrakech",
        "testo": "Riad dentro le mura, a pochi minuti da Jemaa el-Fna. Vicoli stretti, rumore, difficile orientarsi con i bagagli: chiedere al riad di mandare qualcuno alla porta."
      },
      {
        "nome": "Guéliz",
        "perChi": "chi vuole una città moderna",
        "testo": "Quartiere europeo con ristoranti e negozi, vicino al Jardin Majorelle. Più tranquillo, ma si perde l'atmosfera."
      },
      {
        "nome": "Hivernage",
        "perChi": "chi vuole hotel con piscina",
        "testo": "Grandi alberghi con giardino, vicino sia alla medina sia a Guéliz."
      }
    ],
    sapori: [
      {
        "nome": "Tajine",
        "testo": "Carne o pollo con limone, olive e verdure, cotti nel recipiente di terracotta."
      },
      {
        "nome": "Couscous del venerdì",
        "testo": "Il piatto della settimana nelle case; si trova nei ristoranti il venerdì."
      },
      {
        "nome": "Pastilla",
        "testo": "Sfoglia croccante con piccione o pollo, mandorle e cannella."
      },
      {
        "nome": "Tè alla menta",
        "testo": "Servito sempre, da bere caldo e molto dolce."
      }
    ],
    attenzioni: [
      "Le guide non autorizzate che si offrono in medina chiedono poi una mancia alta: concordare prima o usare una guida ufficiale.",
      "Se un ragazzo indica «la strada è chiusa», sta cercando di portarvi in un negozio: controllare sulla mappa.",
      "Nei souq contrattare partendo da circa un terzo del prezzo detto.",
      "Foto agli incantatori e ai musicisti di Jemaa el-Fna: si paga, concordare prima.",
      "Il Jardin Majorelle ha ingressi contingentati: non arrivare senza biglietto."
    ],
    // GUIDA-END
    esperienzeSlugs: ['tour-marrakech', 'jardin-majorelle'],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'La piazza Jemaa El-Fna animata di sera a Marrakech, Marocco',
    immagine: '/images/marocco/marrakech-stock.jpg',
  },
  {
    slug: 'ait-benhaddou',
    paeseSlug: 'marocco',
    ordine: 2,
    nome: 'Kasbah di Telouet e Aït Benhaddou',
    tipologia: ['storia', 'kasbah'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione: 'L\'antica residenza della famiglia Glaoui a Telouet e il ksar di Aït Benhaddou, patrimonio UNESCO e set di moltissimi film, da «Il Gladiatore» a «Game of Thrones».',
    percheAndarci: 'Per uno dei villaggi fortificati di fango meglio conservati del Marocco, che sembra fermo a un\'altra epoca.',
    cosaVedere: ['La Kasbah di Telouet, con gli interni molto decorati', 'Il ksar di Aït Benhaddou'],
    cosaFare: ['Visita alla Kasbah di Telouet', 'Visita al ksar di Aït Benhaddou'],
    doveDormire:
      'Abbiamo dormito al Ksar El Janoub, la struttura con le recensioni migliori della zona: camere pulite e curate, piscina con vista e un servizio descritto come attento e cordiale (diverse recensioni citano il proprietario, Khalid, per la sua ospitalità).\n\nEconomiche: Riad Caravane, Dar Mouna · fascia media: Kasbah Tebi, Kasbah El Hajja · lux (non eccessiva): Kasbah Rayane, Caravane Hotel (Ounila Valley).',
    doveMangiare: 'Tawesna, per pranzo dopo la visita al ksar.',
    comeArrivare: 'Circa 2h30 da Marrakech per Telouet, poi circa 1h per Aït Benhaddou.',
    comeSpostarsi: 'A piedi nel ksar.',
    periodoMigliore: 'mattina, per la luce migliore sulla facciata in terra battuta',
    costi: 'I prezzi degli ingressi a Telouet e Aït Benhaddou non me li sono segnati.',
    erroriDaEvitare: ['Dimenticare di ricaricare i power bank prima della notte nel deserto: ai campi tendati non ci sono prese elettriche'],
    miaEsperienza:
      'Mi ha sorpreso il contrasto fra l\'esterno in terra battuta della Kasbah di Telouet, ormai in parte crollato, e gli interni pieni di decorazioni. Il ksar di Aït Benhaddou dal vivo è ancora più bello di come appare nei film che lo hanno reso famoso.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Kasbah di Telouet",
        "testo": "L'antica residenza dei signori della valle, ora in parte crollata fuori ma con interni ricchi di stucchi, zellige e soffitti dipinti.",
        "come": "Da Marrakech 2,5 ore passando per il passo del Tizi n'Tichka; si visita con una guida locale.",
        "quando": "Mattina.",
        "tempo": "1 ora",
        "consiglio": "Il contrasto tra il fango esterno e gli interni decorati è la sorpresa della visita."
      },
      {
        "nome": "Ksar di Aït Benhaddou",
        "testo": "Il villaggio fortificato in terra battuta, patrimonio UNESCO dal 1987, set di molti film. Si sale alla cima per la vista sulla valle.",
        "come": "A circa un'ora da Telouet; si attraversa il fiume a piedi e si sale tra le case.",
        "quando": "Mattina, per la luce migliore sulla facciata e senza il caldo.",
        "tempo": "1-1,5 ore"
      },
      {
        "nome": "Kasbah di Taourirt a Ouarzazate",
        "testo": "La kasbah dei Glaoui, i signori dell'Atlante, nel centro di Ouarzazate: un labirinto di cortili e stanze di terra cruda, in parte restaurate, con soffitti di legno dipinto e finestre a grata. È una buona introduzione all'architettura di fango che si vede poi nelle valli.",
        "come": "Nel centro di Ouarzazate, a circa mezz'ora di strada da Aït Benhaddou. Si visita da soli o con una guida all'ingresso.",
        "quando": "Fine pomeriggio, sulla strada verso le valli. Orari sul posto.",
        "tempo": "45 minuti",
        "consiglio": "Gli Atlas Studios, all'ingresso della città, valgono solo per chi ama il cinema: la kasbah è più interessante."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Partenza da Marrakech, passo del Tizi n'Tichka",
          "Kasbah di Telouet",
          "Pranzo a Tawesna",
          "Ksar di Aït Benhaddou"
        ]
      }
    ],
    zone: [
      {
        "nome": "Aït Benhaddou",
        "perChi": "chi vuole dormire dentro la valle",
        "testo": "Kasbah-hotel a pochi passi dal ksar, semplici e tranquilli."
      },
      {
        "nome": "Ouarzazate",
        "perChi": "chi vuole più servizi",
        "testo": "Città a 30 km, con hotel di tutte le fasce e ristoranti."
      }
    ],
    sapori: [
      {
        "nome": "Tajine con mandorle",
        "testo": "Agnello con prugne e mandorle, nei ristoranti attorno al ksar."
      },
      {
        "nome": "Pane berbero",
        "testo": "Cotto nei forni a legna dei villaggi."
      },
      {
        "nome": "Datteri della valle del Draa",
        "testo": "Dolci e morbidi, in vendita lungo la strada."
      },
      {
        "nome": "Tè alla menta",
        "testo": "Servito ovunque come benvenuto."
      }
    ],
    attenzioni: [
      "Il passo del Tizi n'Tichka è tortuoso e d'inverno può esserci neve o ghiaccio.",
      "Le guide a Aït Benhaddou chiedono tariffe a persona: concordare prima.",
      "Dimenticare di ricaricare i power bank prima della notte nel deserto: ai campi non ci sono prese."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'Il ksar fortificato di Aït Benhaddou, Patrimonio UNESCO, Marocco',
    immagine: '/images/marocco/ait-benhaddou-stock.jpg',
  },
  {
    slug: 'merzouga',
    paeseSlug: 'marocco',
    ordine: 3,
    nome: 'Gole di Todra e Merzouga',
    tipologia: ['deserto', 'natura'],
    giorniConsigliati: '2 giorni, 1 notte nel deserto',
    visitataPersonalmente: true,
    introduzione: 'Le Gole di Todra lungo il tragitto, poi una notte a Erg Chebbi con il cammello, il quad e un cielo stellato senza paragoni.',
    percheAndarci: 'È l\'ingresso nel Sahara e uno dei momenti più belli del viaggio: il cielo stellato del deserto, lontano da ogni luce artificiale.',
    cosaVedere: ['Le Gole di Todra', 'Le dune di Erg Chebbi'],
    cosaFare: [
      'Visita alle Gole di Todra (30 minuti)',
      'Notte nel deserto a Erg Chebbi (vedi la scheda esperienza dedicata)',
      'Giro in cammello al tramonto e all\'alba',
      'Quad nel deserto (vedi la scheda esperienza dedicata)',
    ],
    doveDormire:
      'Abbiamo dormito al Camp La Source, un campo tendato ai piedi delle dune di Erg Chebbi: tende ampie e curate, una gestione familiare descritta come molto accogliente e il cielo stellato lontano da ogni luce artificiale.\n\nEconomiche: Hostel La Liberte Merzouga, Merzouga Camp and Hostel · fascia media: Auberge La Khaima, Nomad Palace Camp · lux (non eccessiva): Merzouga Luxury Desert Camp, Sahara Desert Luxury Camp.',
    doveMangiare: 'Cena al campo tendato; allergie e intolleranze si possono segnalare in anticipo.',
    comeArrivare: 'Circa 3h da Aït Benhaddou per le Gole di Todra, poi circa 3h per Erg Chebbi.',
    comeSpostarsi: 'Cammello e quad nel deserto.',
    periodoMigliore: 'inizio maggio, notti ancora fresche',
    costi: 'Quad 350 MAD a persona.',
    erroriDaEvitare: ['Entrare nel deserto senza turbante o pashmina: conviene comprarli prima al mercato locale, servono contro la sabbia e il freddo della notte', 'Arrivare a Merzouga senza scorte di alcolici e snack: nel deserto se ne trovano pochi'],
    miaEsperienza:
      'Il cielo stellato di notte, lontano da ogni luce artificiale, è stato uno dei momenti più belli del viaggio. Il giro in cammello all\'alba, con le dune che cambiavano colore alla luce del sole, ha chiuso bene quella notte.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Gole di Todra",
        "testo": "Un canyon di roccia calcarea nell'Alto Atlante: per l'ultimo chilometro le pareti salgono per centinaia di metri e si stringono fino a una decina di metri. Si cammina sul fondo accanto al ruscello, mentre sulle pareti si vedono gli arrampicatori.",
        "come": "Da Aït Benhaddou circa 3 ore di strada; ci si ferma in un piazzale e si cammina.",
        "quando": "Mattina, prima dei gruppi.",
        "tempo": "30 minuti"
      },
      {
        "nome": "Erg Chebbi e la notte nel deserto",
        "testo": "Le dune alte fino a 150 metri vicino a Merzouga. Si sale in cammello al campo tendato, si cena, si dorme sotto un cielo senza luci e si torna all'alba.",
        "come": "Il cammello parte dal villaggio, circa un'ora fino al campo.",
        "quando": "Tramonto e alba.",
        "tempo": "Una notte",
        "consiglio": "Portare un turbante o una pashmina per sabbia e freddo notturno, e caricare il telefono prima."
      },
      {
        "nome": "Quad nel deserto",
        "testo": "Un giro in quad tra le dune e i villaggi vicino a Merzouga, in gruppo con una guida.",
        "come": "Prenotare in hotel o al campo.",
        "quando": "Mattina o tardo pomeriggio.",
        "tempo": "1-2 ore",
        "costo": "350 MAD a persona (dal mio viaggio)"
      },
      {
        "nome": "Khamlia e la musica gnawa",
        "testo": "Un villaggio a sud di Merzouga abitato da famiglie gnawa, discendenti di schiavi arrivati dall'Africa subsahariana. Nella casa della musica suonano tamburi e qraqeb, le nacchere di ferro, e servono il tè: è un modo semplice per capire un'altra parte della storia del Marocco.",
        "come": "In auto o in 4x4 da Merzouga, circa 15 minuti. Spesso è una tappa dei giri in jeep intorno all'Erg Chebbi.",
        "quando": "Pomeriggio, prima di partire per il campo nel deserto.",
        "tempo": "1 ora",
        "costo": "Offerta libera per i musicisti",
        "consiglio": "Lasciare un'offerta o comprare un CD: è il modo in cui il gruppo vive."
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Gole di Todra, poi trasferimento a Merzouga, cammello al tramonto, notte nel campo",
          "Giorno 2: alba sulle dune, rientro"
        ]
      }
    ],
    zone: [
      {
        "nome": "Campo tendato a Erg Chebbi",
        "perChi": "chi vuole la notte nel deserto",
        "testo": "Tende semplici o più comode, con cena e colazione. Poca elettricità."
      },
      {
        "nome": "Hotel a Merzouga",
        "perChi": "chi preferisce una camera",
        "testo": "Alberghi e kasbah con piscina, a pochi minuti dalle dune."
      }
    ],
    sapori: [
      {
        "nome": "Pane del deserto (madfouna)",
        "testo": "Un pane ripieno di carne e cipolle cotto sotto la sabbia."
      },
      {
        "nome": "Tajine di cammello",
        "testo": "In alcuni campi lo servono su richiesta."
      },
      {
        "nome": "Tè al berbero",
        "testo": "Con menta e spezie, nei campi."
      },
      {
        "nome": "Datteri",
        "testo": "Dolci e secchi, dalla valle del Ziz."
      }
    ],
    attenzioni: [
      "Entrare nel deserto senza turbante o pashmina: conviene comprarli prima al mercato, servono contro sabbia e freddo.",
      "Arrivare a Merzouga senza scorte di alcolici e snack: nel deserto se ne trovano pochi.",
      "Le notti sono fredde anche in primavera: portare strati caldi.",
      "Verificare quanto costano cammello e quad prima di firmare: i prezzi variano."
    ],
    // GUIDA-END
    esperienzeSlugs: ['notte-deserto-erg-chebbi', 'gole-todra', 'quad-deserto-merzouga'],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'Una guida con il turbante conduce un dromedario sulla sabbia arancione delle dune di Merzouga',
    immagine: '/images/marocco/merzouga-guida-dromedario-riccardo.jpg',
  },
  {
    slug: 'agdz',
    paeseSlug: 'marocco',
    ordine: 4,
    nome: 'Agdz e la valle del Draa',
    tipologia: ['kasbah', 'natura'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione: 'La valle del Draa e la Kasbah di Tamnougalt, una delle meglio conservate della zona.',
    percheAndarci: 'Una tappa più tranquilla fra il deserto e la costa, con una delle kasbah meglio conservate del Marocco.',
    cosaVedere: ['La Kasbah di Tamnougalt'],
    cosaFare: ['Visita alla Kasbah di Tamnougalt', 'Tempo libero in piscina'],
    doveDormire:
      'Abbiamo passato una notte alla Kasbah Trane, lungo la valle del Draa: zona tranquilla e buon punto d\'appoggio per la vicina Kasbah di Tamnougalt. Recensioni con questo nome esatto non ne ho trovate.\n\nEconomiche: Kasbah Maktob Tamnougalt, Guest House Jardin de Tamnougalt · fascia media: Maison d\'Hôtes Kasbah Azul, Dar Jnane - La Maison Du Jardin · lux (non eccessiva): Hotel and Restaurant Kasbah Draa, Kasbah Kissane.',
    doveMangiare: 'Cena in hotel.',
    comeArrivare: 'Circa 4h da Merzouga.',
    comeSpostarsi: 'A piedi nella kasbah.',
    periodoMigliore: 'sera, per la visita alla Kasbah di Tamnougalt',
    costi: 'Kasbah di Tamnougalt 20 MAD a persona + 200 MAD di mancia per la guida locale.',
    erroriDaEvitare: [],
    miaEsperienza:
      'Dopo il deserto, Agdz è arrivata al momento giusto per rifiatare, e la Kasbah di Tamnougalt mi ha ricordato quanto valga la pena uscire dagli itinerari più battuti.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Kasbah di Tamnougalt",
        "testo": "Una kasbah fortificata nella valle del Draa, abitata da famiglie berbere. Si visita con una guida locale che spiega le stanze e la vita del villaggio.",
        "come": "Da Merzouga circa 4 ore di strada.",
        "quando": "Sera, per la luce sulle mura di fango.",
        "tempo": "1 ora",
        "costo": "20 MAD a persona più circa 200 MAD di mancia per la guida (dal mio viaggio)"
      },
      {
        "nome": "Valle del Draa",
        "testo": "La lunga valle di palmeti lungo il fiume, con kasbah e villaggi di fango.",
        "come": "In auto lungo la strada principale.",
        "quando": "Pomeriggio.",
        "tempo": "Mezza giornata",
        "consiglio": "Uscire dagli itinerari più battuti vale la pena: Tamnougalt lo dimostra."
      },
      {
        "nome": "Zagora e il cartello «Tombouctou 52 giorni»",
        "testo": "Il capoluogo della valle del Draa, ultima città prima del deserto verso sud. All'uscita c'è il cartello dipinto che indica 52 giorni di cammello fino a Timbuctù, ricordo delle carovane. Intorno, palmeti, kasbah e il villaggio di Tamegroute con le ceramiche verdi.",
        "come": "Da Agdz circa 1,5 ore verso sud lungo la valle. Tamegroute è 20 km più avanti.",
        "quando": "Mattina per Tamegroute e i laboratori, tramonto sulle dune di Tinfou.",
        "tempo": "Mezza giornata",
        "consiglio": "A Tamegroute la biblioteca coranica e i forni dei vasai valgono più delle dune di Zagora, piccole rispetto a Merzouga."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Partenza da Merzouga",
          "Pranzo in strada",
          "Kasbah di Tamnougalt",
          "Tempo libero in piscina"
        ]
      }
    ],
    zone: [
      {
        "nome": "Agdz",
        "perChi": "chi vuole una pausa dopo il deserto",
        "testo": "Piccola cittadina con kasbah-hotel e piscina, tranquilla e senza turisti."
      },
      {
        "nome": "Zagora",
        "perChi": "chi vuole più servizi",
        "testo": "Città più grande a sud, con hotel e partenze per il deserto."
      }
    ],
    sapori: [
      {
        "nome": "Datteri del Draa",
        "testo": "Tra i migliori del Marocco."
      },
      {
        "nome": "Tajine di verdure",
        "testo": "Con zucchine, carote e zafferano, in hotel e ristoranti."
      },
      {
        "nome": "Pane berbero",
        "testo": "Cotto in forno comune."
      },
      {
        "nome": "Tè alla menta",
        "testo": "Con ospitalità."
      }
    ],
    attenzioni: [
      "Controllare quanto chiede la guida locale prima della visita: la mancia è concordata.",
      "Il caldo è forte da maggio a settembre.",
      "Il territorio è molto isolato: portare contanti."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'La Kasbah di Tamnougalt nella valle del Draa, Marocco',
    immagine: '/images/marocco/agdz-stock.jpg',
  },
  {
    slug: 'agadir',
    paeseSlug: 'marocco',
    ordine: 5,
    nome: 'Agadir e Taghazout',
    tipologia: ['mare', 'surf'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione: 'Taliouine, la capitale marocchina dello zafferano, e una lezione di surf a Taghazout, uno dei villaggi più noti del surf in Marocco.',
    percheAndarci: 'La costa dopo giorni di deserto e kasbah, con una tappa golosa a Taliouine lungo la strada.',
    cosaVedere: ['La città vecchia di Taliouine', 'Il centro storico di Taroudant'],
    cosaFare: [
      'Acquisto di zafferano a Taliouine',
      'Yoga al tramonto con Khalid',
      'Lezione di surf a Taghazout (vedi la scheda esperienza dedicata)',
    ],
    doveDormire:
      'Abbiamo passato una notte all\'Hotel Oasis, comodo perché vicino al mare e ai ristoranti. Le recensioni online sono contrastanti: buone la posizione e la colazione a buffet, meno la manutenzione delle camere, che diversi ospiti descrivono come datate.\n\nEconomiche: Hotel Sindibad Agadir, Résidence IGOUDAR · fascia media: Riad Dar Maktoub, Hôtel Riad Salam Agadir · lux (non eccessiva): Sofitel Agadir Thalassa Sea & Spa, Hotel Riu Palace Tikida Agadir.',
    doveMangiare: 'Les Blancs (terrazza vista mare, cucina spagnola e mediterranea); pranzo a Taghazout dopo il surf.',
    usciteSerali: 'LOFT, narghilè e birre, atmosfera da discoteca araba.',
    comeArrivare: 'Circa 2h30 da Agdz per Taliouine, poi circa 3h per Agadir.',
    comeSpostarsi: 'Van privato, a piedi a Taghazout.',
    periodoMigliore: 'inizio maggio, buone condizioni per iniziare a surfare',
    costi: 'Lezione di surf 250 MAD a persona (docce 10 MAD).',
    erroriDaEvitare: ['Comprare lo zafferano nei negozi lungo la strada pensati per i turisti di passaggio: a Taliouine conviene andare solo nei posti consigliati dalla guida'],
    miaEsperienza:
      'Una mattinata diversa dal resto del viaggio: dopo giorni di deserto e kasbah, il surf a Taghazout è stato un tuffo, anche in senso letterale, in tutt\'altro mondo.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Taliouine e lo zafferano",
        "testo": "Il villaggio al centro della produzione marocchina di zafferano. Si può vedere come si raccoglie e si seleziona il fiore.",
        "come": "Da Agdz circa 2,5 ore di strada.",
        "quando": "Ottobre-novembre per la raccolta.",
        "tempo": "1 ora",
        "consiglio": "Comprare lo zafferano nelle cooperative e nei posti consigliati, non nei negozi per turisti di passaggio."
      },
      {
        "nome": "Taghazout e il surf",
        "testo": "Il villaggio di pescatori diventato la capitale del surf del Marocco, con onde costanti e scuole per principianti.",
        "come": "Da Agadir 30 minuti di taxi o bus; scuole e noleggio sul posto.",
        "quando": "Inizio maggio: onde ideali per iniziare.",
        "tempo": "Mezza giornata",
        "costo": "Lezione 250 MAD a persona, docce 10 MAD (dal mio viaggio)",
        "consiglio": "Fermarsi a pranzo a Taghazout dopo la lezione."
      },
      {
        "nome": "Taroudant",
        "testo": "Una cittadina dentro mura di terra rossa quasi intatte, lunghe circa 7 km, per questo chiamata «la piccola Marrakech». Ha due souq, uno berbero e uno arabo, molto meno turistici di quelli di Marrakech, e si gira bene in calesse lungo le mura.",
        "come": "Da Taliouine circa 1 ora, verso Agadir.",
        "quando": "Pomeriggio.",
        "tempo": "1-2 ore"
      },
      {
        "nome": "Kasbah di Agadir Oufella",
        "testo": "Le mura della vecchia kasbah sulla collina sopra il porto, l'unica parte della città sopravvissuta al terremoto del 1960. Sul fianco ci sono le scritte in arabo «Dio, Patria, Re», illuminate di notte, e dall'alto si vede tutta la baia.",
        "come": "Dal lungomare in taxi oppure con la cabinovia che sale dalla zona del porto.",
        "quando": "Tramonto, con la luce sulla baia.",
        "tempo": "1 ora",
        "consiglio": "Salire in cabinovia e scendere in taxi o a piedi lungo la strada, guardando il porto dei pescherecci."
      },
      {
        "nome": "Souk El Had",
        "testo": "Il grande mercato coperto di Agadir, dentro mura di mattoni con una decina di porte: frutta, spezie, olio d'argan, ceramiche e vestiti, con molti più marocchini che turisti. È il posto giusto per comprare argan e amlou a prezzi normali.",
        "come": "In taxi dal lungomare, circa 10 minuti.",
        "quando": "Mattina. Chiuso il lunedì; la domenica è il giorno più affollato.",
        "tempo": "1,5-2 ore",
        "consiglio": "Le bancarelle di frutta e verdura sono la parte più viva: il tè alla menta nei caffè interni costa pochissimo."
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Taliouine, zafferano, poi Taroudant e arrivo ad Agadir, yoga al tramonto",
          "Giorno 2: surf a Taghazout, pranzo, cena a Les Blancs"
        ]
      }
    ],
    zone: [
      {
        "nome": "Agadir",
        "perChi": "chi vuole spiaggia e servizi",
        "testo": "Città moderna ricostruita dopo il terremoto del 1960, con lungomare e hotel."
      },
      {
        "nome": "Taghazout",
        "perChi": "chi vuole surf e atmosfera",
        "testo": "Villaggio con scuole di surf e guesthouse, rilassato."
      }
    ],
    sapori: [
      {
        "nome": "Pesce alla griglia",
        "testo": "Nei ristoranti del porto di Agadir."
      },
      {
        "nome": "Olio d'argan e amlou",
        "testo": "Pasta di mandorle, olio d'argan e miele, da spalmare sul pane."
      },
      {
        "nome": "Tajine di pesce",
        "testo": "Sulla costa, con verdure e spezie."
      },
      {
        "nome": "Zafferano",
        "testo": "Nei tè e nei piatti, comprato a Taliouine."
      }
    ],
    attenzioni: [
      "Zafferano in vendita nei negozi per turisti: spesso è adulterato, comprare solo in luoghi consigliati.",
      "La corrente a Taghazout può essere forte: seguire le istruzioni dell'istruttore.",
      "Il sole sulla costa scotta anche con il cielo coperto."
    ],
    // GUIDA-END
    esperienzeSlugs: ['surf-taghazout'],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'Lezione di surf sulle onde di Taghazout, Marocco',
    immagine: '/images/marocco/agadir-stock.jpg',
  },
  {
    slug: 'essaouira',
    paeseSlug: 'marocco',
    ordine: 6,
    nome: 'Essaouira',
    tipologia: ['città', 'mare', 'relax'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione: 'La città portuale fortificata sull\'Atlantico, con una medina bianca e blu fra le più belle del Marocco.',
    percheAndarci: 'Per un\'atmosfera diversa dal resto del viaggio, con lo shopping più conveniente che a Marrakech e un po\' di relax.',
    cosaVedere: ['La medina bianca e blu di Essaouira', 'Il porto fortificato', 'Il Ranch de Diabat'],
    cosaFare: [
      'Tour guidato di Essaouira (1h30)',
      'Hammam da Kenza (vedi la scheda esperienza dedicata)',
      'Avventura in quad al Ranch de Diabat, con possibile passeggiata a cavallo',
    ],
    doveDormire:
      'Abbiamo passato una notte alla Maison De Sud, in pieno centro storico, a pochi passi dai souk e dal porto: una casa di carattere, con decorazioni artigianali e, secondo le recensioni, un personale molto attento. Camere piccole, e di notte si sentono i richiami alla preghiera, normale nel cuore della medina.\n\nEconomiche: La Smala, Riad Al Madina · fascia media: Lyon Mogador, Riad Chakir Mogador · lux (non eccessiva): Heure Bleue Palais, Riad Dar Maya.',
    doveMangiare: 'Triskala, La Table by Madada o Des Rêves.',
    comeArrivare: 'Circa 2h30 da Agadir via Taghazout.',
    comeSpostarsi: 'A piedi nella medina.',
    periodoMigliore: 'tardo pomeriggio, per il tour guidato con luce migliore',
    costi: 'Hammam 250 MAD a persona; shopping generalmente più economico che a Marrakech.',
    erroriDaEvitare: [],
    miaEsperienza:
      'Dopo giorni di van, deserto e visite, l\'ora all\'hammam da Kenza è stata uno dei pochi momenti di relax vero del viaggio, e la medina bianca e blu di Essaouira resta una delle atmosfere più belle del Marocco.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Medina di Essaouira",
        "testo": "La città bianca e blu cinta da mura settecentesche, patrimonio UNESCO, con vicoli pedonali e botteghe di artigianato in legno di tuia.",
        "come": "A piedi: si entra da Bab Doukkala o dal porto.",
        "quando": "Tardo pomeriggio, con luce migliore.",
        "tempo": "2-3 ore",
        "consiglio": "Il tour guidato di circa un'ora e mezza dà un buon orientamento."
      },
      {
        "nome": "Porto e Skala",
        "testo": "Il porto con le barche blu dei pescatori e i bastioni con i cannoni, dove si vedono i gabbiani e i banchi di pesce.",
        "come": "A piedi dalla medina.",
        "quando": "Mattina, quando arrivano i pescherecci, e al tramonto.",
        "tempo": "1 ora"
      },
      {
        "nome": "Hammam",
        "testo": "Un bagno di vapore con scrub e massaggio nella tradizione marocchina.",
        "come": "Prenotare in anticipo in una struttura, in medina.",
        "quando": "Pomeriggio.",
        "tempo": "1-1,5 ore",
        "costo": "250 MAD a persona da Kenza (dal mio viaggio)",
        "consiglio": "Perfetto dopo giorni di van e visite."
      },
      {
        "nome": "Ranch de Diabat",
        "testo": "Escursioni a cavallo e in quad sulla costa sabbiosa vicino ai resti del vecchio castello di Diabat.",
        "come": "Dalla medina in taxi, circa 10 minuti.",
        "quando": "Tardo pomeriggio.",
        "tempo": "1-2 ore"
      },
      {
        "nome": "Spiaggia e kitesurf",
        "testo": "La lunga baia sabbiosa a sud della medina, battuta dagli alisei per gran parte dell'anno: per questo Essaouira è una delle capitali del kitesurf e del windsurf in Africa. Il bagno si fa poco, l'acqua è fredda; si cammina fino a Diabat con l'isola di Mogador davanti.",
        "come": "A piedi dalla medina, uscendo da Bab Sbaa verso sud. Scuole di kite e noleggio sulla spiaggia.",
        "quando": "Pomeriggio, quando il vento è più regolare. D'estate soffia di più.",
        "tempo": "Mezza giornata",
        "consiglio": "Per una lezione di kite scegliere una scuola con licenza e istruttori certificati, e chiedere cosa include l'assicurazione."
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: arrivo, medina e porto, cena di pesce",
          "Giorno 2: mattina al mercato, hammam, pomeriggio a Diabat"
        ]
      }
    ],
    zone: [
      {
        "nome": "Medina",
        "perChi": "chi vuole stare dentro la città",
        "testo": "Riad e pensioni nei vicoli bianchi, molto vicini a tutto. Camere piccole, ma l'atmosfera è unica."
      },
      {
        "nome": "Lungomare",
        "perChi": "chi vuole spiaggia e vento",
        "testo": "Hotel moderni davanti al mare, più grandi e con parcheggio."
      }
    ],
    sapori: [
      {
        "nome": "Pesce alla griglia al porto",
        "testo": "Si sceglie al banco e lo cuociono i ristoranti vicini."
      },
      {
        "nome": "Tajine di pesce",
        "testo": "Con verdure e spezie."
      },
      {
        "nome": "Olio d'argan",
        "testo": "Prodotto nelle cooperative di donne, per cucina e cosmetica."
      },
      {
        "nome": "Dolci alle mandorle",
        "testo": "Dai pasticceri della medina."
      }
    ],
    attenzioni: [
      "Il vento forte (alisei) rende spesso freddo il lungomare: portare una giacca anche d'estate.",
      "Gli acquisti a Essaouira costano in genere meno che a Marrakech, ma il prezzo si negozia comunque.",
      "Evitare le guide non ufficiali in strada."
    ],
    // GUIDA-END
    esperienzeSlugs: ['hammam-essaouira'],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'La medina bianca e blu della città portuale di Essaouira, Marocco',
    immagine: '/images/marocco/essaouira-stock.jpg',
  },
]
