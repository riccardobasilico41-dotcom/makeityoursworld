import type { Guida } from './types'

/**
 * Guida PDF «Torino in 2 giorni». Il racconto viene dal viaggio
 * src/content/viaggi/32-torino-2-giorni.md (con i metadati di
 * src/content/viaggi-dati/torino-2-giorni.ts); orari, prezzi e contatti sono stati
 * verificati sui siti ufficiali il 2 novembre 2026 e rimandano alle fonti in fondo al
 * file (campo `fonti`, per id).
 *
 * Città girata a piedi e in metro: niente tabelle stradali, i giorni usano `senzaStrada`.
 * Coordinate: OpenStreetMap (Nominatim).
 */

export const guidaTorino2Giorni: Guida = {
  slug: 'torino-2-giorni',
  tripSlug: 'torino-2-giorni',
  paese: 'Italia',
  titolo: 'Torino in 2 giorni',
  sottotitolo: "L'Egitto, la Mole e i portici: due giorni e una notte a piedi e in metro, con orari, biglietti e contatti per rifarli.",
  autore: 'Rick',
  verificatoAl: 'novembre 2026',
  intro: [
    "Torino l'ho girata con amici, in autonomia, a piedi e in metro: due giorni e una notte, il primo per il Museo Egizio e il centro barocco, il secondo per la Mole e la collina. Buona parte del centro si cammina sotto i portici, quindi la pioggia conta poco.",
    "Sul sito c'è il racconto. Qui ci sono orari e prezzi dei musei, il conto dei biglietti GTT, la tranvia per Superga, l'aeroporto, i numeri utili e un glossario delle sigle che si incontrano in città.",
    "Prezzi e orari li ho ricontrollati a inizio novembre 2026 sui siti ufficiali, elencati in fondo. Quello che non sono riuscito a verificare è segnato come tale.",
  ],
  cosaInPiu: [
    'Una scheda per ogni giorno con indirizzi, orari, biglietti, coordinate GPS e un QR che apre il punto su Google Maps',
    'I giorni di chiusura incrociati: Musei Reali il mercoledì, Mole e Palazzo Madama il martedì, Egizio il lunedì solo la mattina',
    'Orari e tariffe della tranvia a dentiera Sassi-Superga e dei biglietti della basilica',
    'Aeroporto di Caselle in treno o in bus, con prezzi e frequenze',
    'Numeri utili, pronto soccorso, glossario di sigle e cartelli',
    'Budget con le tariffe ufficiali e lista per la valigia',
  ],
  tappe: [
    { nome: 'Porta Nuova', gps: [45.06189, 7.67837], giorno: 'arrivo', etichetta: 'sinistra' },
    { nome: 'Museo Egizio', gps: [45.06844, 7.68435], giorno: 'G1', etichetta: 'sinistra' },
    { nome: 'Piazza San Carlo', gps: [45.06792, 7.68272], giorno: 'G1', etichetta: 'sotto' },
    { nome: 'Palazzo Madama', gps: [45.07097, 7.6858], giorno: 'G1', etichetta: 'destra' },
    { nome: 'Musei Reali', gps: [45.07305, 7.68696], giorno: 'G1', etichetta: 'destra' },
    { nome: 'Porta Palatina', gps: [45.07501, 7.68465], giorno: 'G1', etichetta: 'sopra' },
    { nome: 'Mole Antonelliana', gps: [45.06899, 7.69319], giorno: 'G2', etichetta: 'destra' },
    { nome: 'Piazza Vittorio', gps: [45.06514, 7.69489], giorno: 'G2', etichetta: 'destra' },
    { nome: 'Monte dei Cappuccini', gps: [45.05958, 7.69745], giorno: 'G2', etichetta: 'destra' },
    { nome: 'Sassi', gps: [45.08066, 7.73166], giorno: 'G2', etichetta: 'sotto' },
    { nome: 'Superga', gps: [45.08087, 7.76867], giorno: 'G2', etichetta: 'destra' },
    { nome: 'MAUTO', gps: [45.03185, 7.67345], giorno: 'G2 (opzione B)', etichetta: 'destra' },
    { nome: 'Lingotto · Pinacoteca Agnelli', gps: [45.03304, 7.66596], giorno: 'G2 (opzione B)', etichetta: 'sinistra' },
  ],
  giorni: [
    {
      numero: 1,
      titolo: 'Museo Egizio, piazze e caffè',
      paginaSito: '/esperienze/italia/museo-egizio',
      racconto:
        "La mattina al Museo Egizio, dandogli tempo: la tomba intatta di Kha e Merit, il Tempio di Ellesiya, il Papiro delle Miniere d'Oro, la Galleria dei Re. Il pomeriggio nel centro barocco, quasi tutto sotto i portici: Palazzo Madama in Piazza Castello, i Musei Reali con l'Armeria e la Cappella della Sindone, Piazza San Carlo e la Galleria Subalpina, con il bicerin in un caffè storico. A fine giornata il Quadrilatero Romano con la Porta Palatina e Porta Palazzo; l'aperitivo l'abbiamo fatto lì.",
      tratte: [],
      senzaStrada: "Tutto a piedi: dall'Egizio a Piazza Castello sono pochi minuti, poi il Quadrilatero. La metro serve solo per arrivare da Porta Nuova o Porta Susa.",
      luoghi: [
        {
          nome: 'Museo Egizio',
          indirizzo: 'Via Accademia delle Scienze 6',
          orari: "Lunedì 09:00-14:00; martedì-venerdì e domenica 09:00-18:30; sabato 09:00-20:00. Ultimo ingresso un'ora prima. A novembre 2026 apertura fino alle 22:00 il 23, 24, 25 e 29.",
          biglietto: "18 €; over 70 15 €; 15-18 anni e universitari 3 €; 6-14 anni 1 €; famiglia (2+2) 36 €. Gratis con Torino+Piemonte Card. Solo online, con fascia oraria: si entra entro 15 minuti dall'orario scelto.",
          telefono: 'Prenotazioni +39 011 440 6903 · info@museitorino.it (lunedì-sabato 09:00-18:00)',
          web: 'museoegizio.it',
          gps: [45.06844, 7.68435],
          nota: 'Calcola almeno tre ore. Anche chi ha la Card deve prenotare online un biglietto gratuito («Ingresso CARD»).',
          fonti: ['egizio-faq', 'egizio-orari', 'egizio-contatti', 'osm'],
        },
        {
          nome: 'Palazzo Madama',
          indirizzo: 'Piazza Castello',
          orari: 'Lunedì e mercoledì-domenica 10:00-18:00; chiuso il martedì. Biglietteria fino a un\'ora prima.',
          biglietto: 'Collezioni permanenti 10 €, ridotto 8 €; solo giardino 5 €',
          web: 'palazzomadamatorino.it',
          gps: [45.07097, 7.6858],
          fonti: ['madama-orari', 'madama-biglietti', 'osm'],
        },
        {
          nome: 'Musei Reali (Palazzo Reale, Galleria Sabauda, Armeria, Cappella della Sindone)',
          indirizzo: 'Piazzetta Reale 1',
          orari: 'Giovedì-martedì 09:00-19:00, ultimo ingresso 18:00; chiusi il mercoledì, il 25 dicembre e il 1° gennaio',
          biglietto: '15 €; 18-25 anni 2 €; biglietto «Open» 18 € valido fino al 31 dicembre. Under 18 gratis. Il biglietto vale per tutta la giornata.',
          web: 'museireali.cultura.gov.it',
          gps: [45.07305, 7.68696],
          nota: "La Sindone non è esposta: si vede la cappella del Guarini, non il telo. I Giardini Reali sono gratuiti, in inverno (fino al 27 marzo 2027) 08:30-17:00.",
          fonti: ['reali', 'osm'],
        },
        {
          nome: 'Porta Palatina e mercato di Porta Palazzo',
          indirizzo: 'Piazza Cesare Augusto; Piazza della Repubblica',
          gps: [45.07501, 7.68465],
          nota: 'Il mercato va visto la mattina. Orari del mercato non verificati.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: "In centro, tra Piazza Castello e Piazza San Carlo, per stare sotto i portici e a piedi da tutto. Il nome dell'alloggio non è annotato nei miei appunti.",
      nota: 'Mercoledì chiudono i Musei Reali, martedì Palazzo Madama: questo giorno va bene da giovedì a domenica, oppure di lunedì entrando all\'Egizio di mattina (chiude alle 14:00).',
      costiNoti: ['Museo Egizio 18 €', 'Musei Reali 15 €', 'Palazzo Madama 10 €'],
    },
    {
      numero: 2,
      titolo: 'La Mole, il fiume e la collina',
      paginaSito: '/destinazioni/italia/torino',
      racconto:
        "La mattina alla Mole Antonelliana: il Museo Nazionale del Cinema lungo la rampa a spirale, con le poltrone rosse al centro, poi l'ascensore di vetro che sale nel vuoto dell'aula fino al tempietto. Il pomeriggio due possibilità. La prima: Piazza Vittorio, il Monte dei Cappuccini, il Valentino con il Borgo Medievale e, se resta tempo, la tranvia per Superga. La seconda: il Museo dell'Automobile e il Lingotto con la pista sul tetto e la Pinacoteca Agnelli. La sera aperitivo e cena piemontese.",
      tratte: [],
      senzaStrada:
        "Mole, Piazza Vittorio e Monte dei Cappuccini a piedi. Per Superga: bus o tram GTT fino a Sassi, poi la tranvia a dentiera. Per MAUTO e Lingotto: metro fino a Lingotto, biglietto City 1,90 €.",
      luoghi: [
        {
          nome: 'Mole Antonelliana: Museo Nazionale del Cinema e ascensore panoramico',
          indirizzo: 'Via Montebello 20',
          orari: "Lunedì e mercoledì-domenica 09:00-19:00; chiuso il martedì. Ultimo accesso un'ora prima; l'ascensore fa l'ultima discesa 10 minuti prima della chiusura.",
          biglietto: 'Museo 18 €, ascensore 9 €, museo + ascensore 23 €. Ridotto 6-26 anni: 16 € / 7 € / 20 €.',
          web: 'museocinema.it',
          gps: [45.06899, 7.69319],
          nota: "Prenotazione consigliata, almeno un giorno prima nel fine settimana. Pochi biglietti in più per l'ascensore escono online 19 ore prima. A novembre-dicembre 2026, per l'allestimento di una mostra, il solo museo è a tariffa ridotta per tutti.",
          fonti: ['cinema-orari', 'cinema-tariffe', 'osm'],
        },
        {
          nome: 'Monte dei Cappuccini',
          indirizzo: 'Oltre il Po, dal ponte Vittorio Emanuele I',
          gps: [45.05958, 7.69745],
          nota: 'Una decina di minuti a piedi in salita da Piazza Vittorio.',
          fonti: ['osm'],
        },
        {
          nome: 'Tranvia a dentiera Sassi-Superga (GTT)',
          indirizzo: 'Stazione Sassi, Piazza Gustavo Modena 6',
          orari: 'Lunedì, martedì, giovedì e venerdì una corsa ogni ora da Sassi 10:00-18:00, ultima da Superga 18:30. Sabato e festivi ogni ora 09:00-20:00, ultima da Superga 20:30. Chiusa il mercoledì.',
          biglietto: 'Feriali 4 € corsa semplice, 6 € andata e ritorno; sabato e festivi 6 € e 9 €. Con Torino+Piemonte Card 4 € andata e ritorno.',
          telefono: 'Assistenza per persone con disabilità 011 5764733',
          web: 'gtt.to.it',
          gps: [45.08066, 7.73166],
          fonti: ['gtt-superga', 'osm'],
        },
        {
          nome: 'Basilica di Superga',
          indirizzo: 'Strada della Basilica di Superga 73',
          biglietto: 'Chiesa gratuita. Salita alla cupola 4 € (ridotto 3 €); Tombe reali 6 € (ridotto 5 €), solo in gruppo con accompagnatore; Appartamento reale 6 €.',
          web: 'basilicadisuperga.com',
          gps: [45.08087, 7.76867],
          nota: "Dal 2 novembre 2026 vale l'orario invernale: guardalo sul sito prima di salire. Cupola chiusa con maltempo, vento forte o oltre 32 °C. Il memoriale del Grande Torino è sul retro della collina.",
          fonti: ['superga-tariffe', 'superga-orari', 'osm'],
        },
        {
          nome: "MAUTO, Museo Nazionale dell'Automobile (opzione B)",
          indirizzo: "Corso Unità d'Italia 40",
          orari: "Lunedì 10:00-14:00; martedì-domenica 10:00-19:00. Ultimo ingresso un'ora prima.",
          telefono: '011 677 666',
          web: 'museoauto.com',
          gps: [45.03185, 7.67345],
          nota: 'Prezzo del biglietto non verificato.',
          fonti: ['mauto', 'osm'],
        },
        {
          nome: 'Lingotto e Pinacoteca Agnelli (opzione B)',
          indirizzo: 'Via Nizza 230',
          web: 'pinacoteca-agnelli.it',
          gps: [45.03304, 7.66596],
          nota: 'Orari e prezzi non verificati (il sito non si legge in automatico).',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Nessun pernottamento: rientro in serata.',
      nota: 'Mole e tranvia hanno chiusure diverse (Mole il martedì, tranvia il mercoledì): il giorno della collina va scelto di conseguenza.',
      costiNoti: ['Mole, museo + ascensore 23 €', 'Tranvia per Superga 6-9 € andata e ritorno', 'Tombe reali di Superga 6 €'],
    },
  ],
  mappa: {
    percorso: ['Porta Nuova', 'Museo Egizio', 'Piazza San Carlo', 'Palazzo Madama', 'Musei Reali', 'Porta Palatina', 'Mole', 'Piazza Vittorio', 'Monte dei Cappuccini', 'Sassi', 'Superga'],
    ritorno: ['Mole', 'MAUTO', 'Lingotto'],
    legenda: "Linea piena: i due giorni con l'opzione A (fiume e collina). Tratteggio: l'opzione B verso MAUTO e Lingotto. Le linee uniscono le tappe, non seguono le strade.",
    notaTempi: "In città si va a piedi e in metro; per Superga contano gli orari della tranvia GTT, non la strada.",
    notaTempiFonti: ['gtt-superga'],
    scalaKm: 2,
  },
  primaDiPartire: [
    {
      titolo: 'Prenotazioni da fare a casa',
      righe: [
        { voce: 'Museo Egizio', valore: 'Biglietti solo online, con fascia oraria; nei fine settimana e nei ponti la fascia va presa con anticipo.', fonti: ['egizio-faq'] },
        { voce: 'Mole, ascensore', valore: 'Biglietto con slot, da comprare almeno un giorno prima nel fine settimana; 19 ore prima escono online pochi biglietti in più.', fonti: ['cinema-tariffe'] },
        { voce: 'Giorni di chiusura', valore: 'Musei Reali il mercoledì; Mole e Palazzo Madama il martedì; tranvia di Superga il mercoledì; Egizio e MAUTO il lunedì chiudono alle 14:00.', fonti: ['reali', 'cinema-orari', 'madama-orari', 'gtt-superga', 'egizio-orari', 'mauto'] },
        { voce: 'Sindone', valore: 'Non è esposta: si mostra solo nelle ostensioni straordinarie. Nei Musei Reali si visita la Cappella della Sindone.' },
        { voce: 'Torino+Piemonte Card', valore: "Dà l'ingresso gratuito all'Egizio e riduzioni su Mole, tranvia e bus per l'aeroporto. Formule e prezzi non sono riuscito a leggerli: guardali su turismotorino.org (contact centre +39 011 535181).", fonti: ['egizio-faq', 'cinema-tariffe', 'gtt-superga', 'caselle-bus', 'turismotorino'] },
      ],
    },
    {
      titolo: 'Treni, metro e aeroporto',
      righe: [
        { voce: 'Biglietti GTT', valore: "City 1,90 € in digitale (2 € su carta), valido 100 minuti con una corsa in metro. Daily 3,70 € in digitale (4,50 € su carta). Tour 48 ore 7,80 €, 72 ore 10,30 € in digitale.", fonti: ['gtt-biglietti'] },
        { voce: 'Metro', valore: "Una sola linea automatica, che passa da Porta Susa, Porta Nuova e Lingotto." },
        { voce: 'Aeroporto in treno', valore: 'Treno Porta Susa-Aeroporto in circa mezz\'ora, 3,70 €. Nei feriali da Porta Susa dalle 05:01 alle 21:25, dall\'aeroporto dalle 06:00 alle 22:28.', fonti: ['caselle-treno'] },
        { voce: 'Aeroporto in bus', valore: 'Bus diretti da Porta Nuova e Porta Susa: 7,50 € (1 € in più a bordo), andata e ritorno 11 €, 6,50 € con Torino+Piemonte Card.', fonti: ['caselle-bus'] },
        { voce: 'Treni nazionali', valore: 'Milano è a circa un\'ora di alta velocità. Trenitalia call center 892021; Italo 892020 o Pronto Italo 06 0708.', fonti: ['trenitalia', 'italo'] },
        { voce: 'Scioperi', valore: 'Controlla scioperi.mit.gov.it prima di partire.', fonti: ['scioperi'] },
      ],
    },
    {
      titolo: 'Auto e ZTL',
      righe: [
        { voce: 'ZTL', valore: "Il centro ha una ZTL con varchi a telecamera: la mappa è sul sito GTT, orari e regole sul sito del Comune. Non le ho verificate: se arrivi in auto, controllale prima.", fonti: ['gtt-ztl'] },
        { voce: 'Consiglio', valore: "In città l'auto non serve. Serve per le Langhe, non per questo itinerario." },
      ],
    },
    {
      titolo: 'Stagione',
      righe: [
        { voce: 'Quando', valore: "Primavera e autunno. D'inverno funziona: portici, musei al coperto e, nelle giornate limpide, le Alpi in fondo alle vie. Luglio e agosto sono caldi e la città si svuota." },
        { voce: 'Tartufo', valore: "Da ottobre a dicembre è la stagione del tartufo bianco d'Alba: nelle Langhe salgono i prezzi." },
      ],
    },
  ],
  emergenze: {
    numeri: [
      { voce: 'Emergenze (112)', valore: "Numero unico europeo: dove il NUE è attivo smista a polizia, carabinieri, vigili del fuoco e ambulanza; dove non lo è risponde l'Arma dei Carabinieri e restano validi 113, 115 e 118. In Piemonte è attivo.", fonti: ['wiki-112'] },
      { voce: 'Polizia · Vigili del fuoco · Emergenza sanitaria', valore: '113 · 115 · 118', fonti: ['wiki-112'] },
      { voce: 'Turismo Torino, contact centre', valore: '+39 011 535181', fonti: ['turismotorino'] },
    ],
    ambasciata: [
      {
        nome: 'Non serve: sei in Italia',
        cosa: "Documenti persi o rubati: denuncia a Polizia o Carabinieri (anche il 112); la carta d'identità si rifà al Comune",
        stato: 'ufficiale',
        fonti: ['wiki-112'],
      },
    ],
    ospedali: [
      {
        nome: 'Ospedale Molinette (A.O.U. Città della Salute e della Scienza)',
        cosa: 'Il grande ospedale pubblico di Torino, con pronto soccorso',
        indirizzo: 'Corso Bramante 88',
        web: 'cittadellasalute.to.it',
        gps: [45.03947, 7.67441],
        stato: 'ufficiale',
        avviso: 'Centralino non verificato sul sito. In emergenza chiama il 112.',
        fonti: ['molinette', 'osm'],
      },
    ],
  },
  contatti: [
    {
      gruppo: 'Treni e trasporti',
      voci: [
        { nome: 'Trenitalia', cosa: 'Call center a pagamento, 24 ore', telefono: '892021 · dall\'estero +39 06 68475475', web: 'trenitalia.com', stato: 'ufficiale', fonti: ['trenitalia'] },
        { nome: 'Italo', cosa: 'Assistenza a pagamento 892020; Pronto Italo per acquisti senza costi di vendita', telefono: '892020 · 06 0708', web: 'italotreno.com', stato: 'ufficiale', fonti: ['italo'] },
        { nome: 'GTT', cosa: 'Metro, tram, bus, tranvia di Superga', web: 'gtt.to.it', stato: 'ufficiale', fonti: ['gtt-biglietti', 'gtt-superga'] },
        { nome: 'Aeroporto di Torino (SAGAT)', cosa: 'Voli, treno e bus per il centro', web: 'aeroportoditorino.it', gps: [45.20097, 7.64898], stato: 'ufficiale', fonti: ['caselle-treno', 'osm'] },
      ],
    },
    {
      gruppo: 'Musei e prenotazioni ufficiali',
      voci: [
        { nome: 'Museo Egizio', cosa: 'Biglietti solo online; ufficio prenotazioni', telefono: '+39 011 440 6903 · uffici +39 011 561 7776', web: 'museoegizio.it', stato: 'ufficiale', fonti: ['egizio-contatti'] },
        { nome: 'Museo Nazionale del Cinema', cosa: 'Mole e ascensore panoramico', web: 'museocinema.it', stato: 'ufficiale', fonti: ['cinema-tariffe'] },
        { nome: 'Musei Reali', cosa: 'Gruppi e scuole: prenotazione obbligatoria', telefono: '011 19510758 (gruppi, lunedì-venerdì 09:00-17:30)', web: 'museireali.cultura.gov.it', stato: 'ufficiale', fonti: ['reali'] },
        { nome: 'Palazzo Madama', cosa: 'Museo Civico d\'Arte Antica', web: 'palazzomadamatorino.it', stato: 'ufficiale', fonti: ['madama-biglietti'] },
        { nome: 'Basilica di Superga (Sermig)', cosa: 'Cupola, Tombe reali, Appartamento reale', web: 'basilicadisuperga.com', stato: 'ufficiale', fonti: ['superga-tariffe'] },
        { nome: 'MAUTO', cosa: "Museo Nazionale dell'Automobile", telefono: '011 677 666', web: 'museoauto.com', stato: 'ufficiale', fonti: ['mauto'] },
      ],
    },
    {
      gruppo: 'Turismo',
      voci: [
        { nome: 'Turismo Torino e Provincia', cosa: 'Informazioni e Torino+Piemonte Card', telefono: '+39 011 535181 · contact@turismotorino.org', web: 'turismotorino.org', stato: 'ufficiale', fonti: ['turismotorino'] },
      ],
    },
  ],
  budget: {
    righe: [
      { voce: 'Treno per Torino' },
      { voce: 'Biglietti GTT', costo: '1,90 € a corsa', nota: 'Daily 3,70 €, Tour 48 ore 7,80 €' },
      { voce: 'Museo Egizio', costo: '18 €' },
      { voce: 'Musei Reali', costo: '15 €' },
      { voce: 'Palazzo Madama', costo: '10 €' },
      { voce: 'Mole, museo + ascensore', costo: '23 €' },
      { voce: 'Tranvia Sassi-Superga, andata e ritorno', costo: '6-9 €', nota: 'feriale / festivo' },
      { voce: 'Superga: cupola e tombe reali', costo: '10 €' },
      { voce: 'Torino+Piemonte Card (alternativa ai singoli biglietti)', nota: 'prezzo su turismotorino.org' },
      { voce: 'Alloggio (1 notte)' },
      { voce: 'Bicerin, aperitivo e cena piemontese' },
    ],
    nota: 'Le cifre sono tariffe intere ufficiali di novembre 2026. Le righe vuote le riempi tu: nei miei appunti il costo dell\'alloggio e dei pasti non è scritto.',
  },
  valigia: [
    {
      gruppo: 'Documenti e biglietti',
      voci: ["Carta d'identità", 'Prenotazioni di Egizio e Mole stampate o nel telefono', 'App GTT o biglietti digitali', 'Questa guida stampata'],
    },
    {
      gruppo: 'Vestiti',
      voci: ['Scarpe comode', 'Ombrello piccolo (i portici coprono quasi tutto)', "D'inverno strati e cappello: la collina è più fredda"],
    },
    {
      gruppo: 'Zaino del giorno',
      voci: ['Borraccia: tre ore di Egizio si sentono', 'Power bank', 'Contanti per i caffè storici e il mercato'],
    },
  ],
  lingua: {
    nome: 'Sigle e cartelli da riconoscere',
    pronuncia: 'In Italia il frasario non serve: qui ci sono le sigle dei mezzi, dei musei e del cibo che a Torino trovi ovunque.',
  },
  frasario: [
    {
      gruppo: 'Mezzi e strada',
      frasi: [
        { it: 'GTT', loc: "L'azienda di metro, tram e bus" },
        { it: 'City · Daily · Tour', loc: 'Biglietto da 100 minuti · giornaliero · 48 o 72 ore' },
        { it: 'Convalida', loc: 'Il biglietto va validato a ogni cambio di mezzo' },
        { it: 'ZTL · varco', loc: 'Zona a traffico limitato · accesso controllato da telecamera' },
        { it: 'Dentiera', loc: 'La tranvia a cremagliera Sassi-Superga' },
      ],
    },
    {
      gruppo: 'Musei',
      frasi: [
        { it: 'Fascia oraria', loc: "L'ora di ingresso scelta online: all'Egizio entri entro 15 minuti" },
        { it: 'Biglietto Open', loc: 'Valido un giorno a scelta entro il 31 dicembre (Musei Reali)' },
        { it: 'Ostensione', loc: 'Le rare esposizioni pubbliche della Sindone' },
      ],
    },
    {
      gruppo: 'Caffè e tavola',
      frasi: [
        { it: 'Bicerin', loc: 'Caffè, cioccolata e crema di latte a strati: non si mescola' },
        { it: 'Gianduiotto', loc: 'Cioccolatino con le nocciole delle Langhe' },
        { it: 'Plin · al tovagliolo', loc: 'Agnolotti pizzicati a mano · serviti senza condimento' },
        { it: 'Bagna cauda', loc: "Salsa calda d'aglio e acciughe, piatto d'inverno da condividere" },
        { it: 'Vermouth', loc: 'Il vino aromatizzato nato a Torino, base dell\'aperitivo' },
      ],
    },
    {
      gruppo: 'Salute',
      frasi: [
        { it: 'Pronto soccorso', loc: "Le emergenze in ospedale" },
        { it: 'Guardia medica', loc: 'Medico di notte e nei festivi per i casi non urgenti' },
        { it: 'Farmacia di turno', loc: 'La farmacia aperta di notte e nei festivi' },
      ],
    },
  ],
  numeri: [
    { it: '112', loc: 'Emergenze, numero unico (attivo in Piemonte)' },
    { it: '113', loc: 'Polizia' },
    { it: '115', loc: 'Vigili del fuoco' },
    { it: '118', loc: 'Emergenza sanitaria' },
    { it: '011 440 6903', loc: 'Museo Egizio, prenotazioni' },
    { it: '011 535181', loc: 'Turismo Torino' },
    { it: '011 5764733', loc: 'Tranvia di Superga, assistenza disabili' },
    { it: '892021', loc: 'Trenitalia (a pagamento)' },
    { it: '892020', loc: 'Italo, assistenza (a pagamento)' },
    { it: '06 0708', loc: 'Pronto Italo' },
  ],
  pagineSito: [
    { titolo: 'Il viaggio: Torino in 2 giorni', path: '/viaggi/torino-2-giorni' },
    { titolo: 'Italia, la scheda del paese', path: '/destinazioni/italia' },
    { titolo: 'Torino', path: '/destinazioni/italia/torino' },
    { titolo: 'Il Museo Egizio', path: '/esperienze/italia/museo-egizio' },
  ],
  consultate: 'Consultate il 2 novembre 2026. Prezzi e orari cambiano: prima di pagare, guarda sempre la fonte ufficiale.',
  nonVerificato: [
    'Formule e prezzi della Torino+Piemonte Card (pagina ufficiale non leggibile)',
    'Orari della Basilica di Superga in inverno, del mercato di Porta Palazzo e del Borgo Medievale',
    'Prezzi del MAUTO; orari e prezzi della Pinacoteca Agnelli',
    'Regole e orari della ZTL',
    'Centralino delle Molinette e Guardia medica turistica',
    'Nome dell\'alloggio, quale opzione del secondo pomeriggio è stata scelta e quali caffè storici abbiamo visitato: non annotati nei miei appunti',
  ],
  fonti: [
    { id: 'egizio-faq', titolo: 'Museo Egizio, domande frequenti (tariffe, orari, acquisto)', url: 'https://museoegizio.it/info/domande-frequenti/' },
    { id: 'egizio-orari', titolo: 'Museo Egizio, orari e aperture speciali', url: 'https://museoegizio.it/info/orari/' },
    { id: 'egizio-contatti', titolo: 'Museo Egizio, contatti', url: 'https://museoegizio.it/info/contatti/' },
    { id: 'madama-orari', titolo: 'Palazzo Madama, orari', url: 'https://www.palazzomadamatorino.it/it/visita-il-museo/orari/' },
    { id: 'madama-biglietti', titolo: 'Palazzo Madama, biglietti', url: 'https://www.palazzomadamatorino.it/it/visita-il-museo/biglietti/' },
    { id: 'reali', titolo: 'Musei Reali Torino, organizza la tua visita', url: 'https://museireali.cultura.gov.it/organizza-la-tua-visita/' },
    { id: 'cinema-orari', titolo: 'Museo Nazionale del Cinema, orari', url: 'https://www.museocinema.it/it/orari-museo-nazionale-del-cinema' },
    { id: 'cinema-tariffe', titolo: 'Museo Nazionale del Cinema, tariffe', url: 'https://www.museocinema.it/it/pianifica-una-visita/tariffe' },
    { id: 'gtt-superga', titolo: 'GTT, tranvia Sassi-Superga (orari e tariffe)', url: 'https://www.gtt.to.it/cms/turismo/sassisup' },
    { id: 'gtt-biglietti', titolo: 'GTT, biglietti urbani e suburbani', url: 'https://www.gtt.to.it/cms/biglietti-abbonamenti/biglietti/biglietti-carnet' },
    { id: 'gtt-ztl', titolo: 'GTT, mappa della ZTL (PDF)', url: 'https://www.gtt.to.it/cms/risorse/ztl/ztl_mappa.pdf' },
    { id: 'superga-tariffe', titolo: 'Basilica di Superga, tariffe', url: 'https://www.basilicadisuperga.com/organizza-la-tua-visita/tariffe.html' },
    { id: 'superga-orari', titolo: 'Basilica di Superga, orari invernali 2026-2027', url: 'https://www.basilicadisuperga.com/avvisi/orari-invernali-2026-2027.html' },
    { id: 'mauto', titolo: "MAUTO, Museo Nazionale dell'Automobile", url: 'https://www.museoauto.com/' },
    { id: 'caselle-treno', titolo: 'Aeroporto di Torino, in treno', url: 'https://www.aeroportoditorino.it/it/tomove/trasporti-e-parcheggi/in-treno' },
    { id: 'caselle-bus', titolo: 'Aeroporto di Torino, in bus', url: 'https://www.aeroportoditorino.it/it/tomove/trasporti-e-parcheggi/in-bus' },
    { id: 'turismotorino', titolo: 'Turismo Torino e Provincia, contatti e Torino+Piemonte Card', url: 'https://www.turismotorino.org/it/torino-piemonte-card' },
    { id: 'molinette', titolo: 'A.O.U. Città della Salute e della Scienza di Torino', url: 'https://www.cittadellasalute.to.it/' },
    { id: 'wiki-112', titolo: 'Wikipedia, 112 (numero di emergenza): stato del NUE per regione (agg. 27/10/2026)', url: 'https://it.wikipedia.org/wiki/112_(numero_di_emergenza)' },
    { id: 'trenitalia', titolo: 'Trenitalia, contatti e assistenza', url: 'https://www.trenitalia.com/it/informazioni/contatti.html' },
    { id: 'italo', titolo: 'Italo, contatti', url: 'https://www.italotreno.com/it/contatti' },
    { id: 'scioperi', titolo: 'Ministero dei Trasporti, calendario scioperi', url: 'https://scioperi.mit.gov.it' },
    { id: 'osm', titolo: 'OpenStreetMap / Nominatim (coordinate)', url: 'https://nominatim.openstreetmap.org' },
  ],
}
