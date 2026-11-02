import type { Guida } from './types'

/**
 * Guida PDF «Sulle rotte dei grandi vini in 10 giorni». Il racconto viene dal viaggio
 * src/content/viaggi/27-rotte-dei-vini-itinerario.md (con i dati di
 * src/content/viaggi-dati/rotte-dei-vini-itinerario.ts); orari, prezzi e contatti sono
 * stati verificati sul web il 2/11/2026 e rimandano alle fonti in fondo (campo `fonti`, per id).
 * Le cantine non hanno nome, come nell'articolo: vanno scelte e prenotate da chi parte.
 *
 * Distanze e tempi: router OSRM su dati OpenStreetMap, traffico libero.
 * Coordinate: OpenStreetMap (Nominatim).
 */

export const guidaRotteDeiVini: Guida = {
  slug: 'rotte-dei-vini-itinerario',
  tripSlug: 'rotte-dei-vini-itinerario',
  paese: 'Italia',
  titolo: 'Sulle rotte dei grandi vini',
  sottotitolo: 'Langhe, Valpolicella, colline del Prosecco e Toscana in dieci giorni d\'auto, in vendemmia, con le cantine prenotate e il problema di chi guida risolto prima.',
  autore: 'Rick',
  verificatoAl: 'novembre 2026',
  intro: [
    'Questo giro l\'ho fatto con amici, in autonomia, con un\'auto a noleggio e le cantine prenotate: dieci giorni e nove notti tra settembre e ottobre, dalle Langhe alla Valpolicella, poi le colline del Prosecco e la Toscana del Chianti e di Montalcino.',
    'Sul sito c\'è il racconto. Qui ci sono le cose da avere in tasca: per ogni giorno i chilometri e i tempi di guida, gli indirizzi e i contatti dei musei e dei consorzi, le coordinate, i numeri utili e le regole su alcol e guida. I nomi delle cantine non ci sono, di proposito: si scelgono sui siti dei consorzi e si prenotano con una mail qualche giorno prima.',
    'Prezzi, orari e regole li ho ricontrollati a inizio novembre 2026 sulle fonti ufficiali, elencate in fondo. Le degustazioni cambiano prezzo per azienda e per stagione.',
  ],
  cosaInPiu: [
    'Una scheda per ogni giorno con chilometri e tempi di guida, indirizzi, orari, coordinate GPS e un QR che apre il punto su Google Maps',
    'I siti dei consorzi dove cercare le cantine che ricevono, zona per zona',
    'Orari e contatti di WiMu a Barolo, Castello di Grinzane Cavour, Abbazia di Sant\'Antimo e Fiera del Tartufo di Alba',
    'Le soglie di alcol per chi guida e cosa si rischia',
    'Numeri di emergenza e ospedali lungo il percorso',
    'Foglio budget, lista per la valigia e un glossario delle parole che si sentono in cantina',
    'Mappa del percorso da stampare',
  ],
  tappe: [
    { nome: 'Aeroporto di Torino', gps: [45.19156, 7.64144], giorno: 'G1', etichetta: 'sinistra' },
    { nome: 'Alba', gps: [44.68659, 8.03113], giorno: 'G1-G3', etichetta: 'destra' },
    { nome: 'Barolo', gps: [44.61468, 7.93944], giorno: 'G2', etichetta: 'sinistra' },
    { nome: 'Barbaresco', gps: [44.71927, 8.07686], giorno: 'G3', etichetta: 'destra' },
    { nome: 'Canale (Roero)', gps: [44.80213, 8.00996], giorno: 'G3', etichetta: 'sopra' },
    { nome: 'Valpolicella Classica', gps: [45.50709, 10.8944], giorno: 'G4-G5', etichetta: 'sopra' },
    { nome: 'Verona', gps: [45.43902, 10.99493], giorno: 'G5', etichetta: 'sotto' },
    { nome: 'Soave', gps: [45.43591, 11.24253], giorno: 'G5', etichetta: 'destra' },
    { nome: 'Valdobbiadene', gps: [45.91632, 12.02737], giorno: 'G6', etichetta: 'sopra' },
    { nome: 'Conegliano', gps: [45.90373, 12.26531], giorno: 'G6', etichetta: 'destra' },
    { nome: 'Firenze', gps: [43.77757, 11.24742], giorno: 'G10', etichetta: 'sinistra' },
    { nome: 'Castellina in Chianti', gps: [43.46918, 11.28729], giorno: 'G7-G9', etichetta: 'sinistra' },
    { nome: 'Radda in Chianti', gps: [43.48705, 11.3747], giorno: 'G7', etichetta: 'destra' },
    { nome: 'Montalcino', gps: [43.05756, 11.49028], giorno: 'G8', etichetta: 'sinistra' },
    { nome: 'Sant\'Antimo', gps: [42.99963, 11.5157], giorno: 'G8', etichetta: 'sotto' },
    { nome: 'San Quirico d\'Orcia', gps: [43.0604, 11.60365], giorno: 'G9', etichetta: 'sotto' },
    { nome: 'Pienza', gps: [43.07655, 11.67891], giorno: 'G9', etichetta: 'sopra' },
    { nome: 'Montepulciano', gps: [43.09453, 11.78268], giorno: 'G9', etichetta: 'destra' },
  ],
  giorni: [
    {
      numero: 1,
      titolo: 'Arrivo nelle Langhe',
      paginaSito: '/viaggi/rotte-dei-vini-itinerario',
      racconto:
        'Siamo arrivati ad Alba e ci siamo sistemati in un agriturismo tra le colline. Le Langhe sono patrimonio UNESCO e il paesaggio si capisce già dalla strada: colline di marna coltivate a vite, con i paesi sui crinali. Il pomeriggio ad Alba per orientarci, e la prima cena piemontese: carne cruda battuta al coltello, vitello tonnato, tajarin.',
      tratte: [{ da: 'Aeroporto di Torino-Caselle', a: 'Alba', km: 90, minuti: 74 }],
      luoghi: [
        {
          nome: 'Alba, centro storico',
          gps: [44.68659, 8.03113],
          fonti: ['osm'],
        },
        {
          nome: 'Fiera Internazionale del Tartufo Bianco d\'Alba',
          indirizzo: 'Cortile della Maddalena, Alba · Ente Fiera, Piazza Medford 3',
          orari: 'Edizione 2026: dal 10 ottobre a inizio dicembre, mercato mondiale del tartufo il sabato e la domenica 09:30-19:30',
          telefono: '+39 0173 361051 · info@fieradeltartufo.org',
          web: 'fieradeltartufo.org',
          nota: 'Le fonti non concordano sul giorno di chiusura (6 o 8 dicembre): guarda il sito. In quelle settimane i prezzi degli alloggi raddoppiano.',
          fonti: ['fiera-tartufo', 'fiera-date'],
        },
      ],
      mangiare: [],
      dormire: 'Agriturismo tra le colline delle Langhe, spesso di un\'azienda vitivinicola. Il nome non è annotato nei miei appunti.',
      nota: 'L\'aeroporto di arrivo non è annotato: la tratta da Torino-Caselle è un\'indicazione. Da Milano Malpensa i chilometri sono di più.',
    },
    {
      numero: 2,
      titolo: 'Barolo',
      paginaSito: '/esperienze/italia/degustazione-cantina',
      racconto:
        'Due cantine prenotate nella zona del Barolo, dove i comuni della denominazione sono undici e il suolo cambia il vino a poche centinaia di metri. Abbiamo scelto una cantina storica e una piccola: nella prima le grandi botti e l\'accoglienza organizzata, nella seconda apre il proprietario e si parla di vendemmia. Il pomeriggio a Barolo paese e al Castello di Grinzane Cavour.',
      tratte: [
        { da: 'Alba', a: 'Barolo', km: 15, minuti: 18 },
        { da: 'Barolo', a: 'Grinzane Cavour', km: 7, minuti: 9 },
        { da: 'Grinzane Cavour', a: 'Alba', km: 9, minuti: 11 },
      ],
      luoghi: [
        {
          nome: 'WiMu, Museo del vino a Barolo',
          indirizzo: 'Castello Falletti, Piazza Falletti, Barolo (CN)',
          orari: 'Tutti i giorni 10:30-19:00, ultimo ingresso 18:00',
          telefono: '+39 0173 386697 · info@wimubarolo.it',
          web: 'wimubarolo.it',
          gps: [44.61468, 7.93944],
          nota: 'Prezzo del biglietto 2026 non pubblicato sulla pagina che ho letto (le guide danno tra 9 e 12 €). Incluso nell\'Abbonamento Musei Piemonte.',
          fonti: ['wimu', 'abbonamento-musei', 'osm'],
        },
        {
          nome: 'Castello di Grinzane Cavour ed Enoteca regionale piemontese Cavour',
          indirizzo: 'Via Castello 5, 12060 Grinzane Cavour (CN)',
          orari: 'Chiuso il martedì; negli altri giorni dalle 10:00, chiusura tra le 18:00 e le 19:00 secondo la fonte. Pausa invernale tra gennaio e metà febbraio',
          biglietto: 'Museo delle Langhe: 8 €, ridotto 6 € (tariffe dell\'Abbonamento Musei). Cortile, enoteca e giardini sono liberi',
          telefono: '+39 0173 262159 · info@castellogrinzane.com',
          web: 'castellogrinzane.com',
          gps: [44.65313, 7.99487],
          fonti: ['grinzane-am', 'grinzane-tci', 'osm'],
        },
        {
          nome: 'Cantine del Barolo',
          nota: 'L\'elenco dei produttori associati è sul sito del Consorzio Barolo Barbaresco Alba Langhe e Dogliani. Scrivi una mail tre giorni prima: senza appuntamento trovi il cancello chiuso.',
          web: 'langhevini.it',
          fonti: ['cons-langhe'],
        },
      ],
      mangiare: [],
      dormire: 'Stesso agriturismo nelle Langhe.',
      costiNoti: ['Castello di Grinzane Cavour: 8 €', 'Degustazioni: di solito 15-40 € a persona, spesso scalate sull\'acquisto'],
    },
    {
      numero: 3,
      titolo: 'Barbaresco e Roero',
      paginaSito: '/esperienze/italia/degustazione-cantina',
      racconto:
        'La mattina nel Barbaresco, l\'altra faccia del Nebbiolo: stessa uva, suoli diversi, vino più pronto del Barolo. Confrontarli nello stesso viaggio è la cosa più istruttiva che si possa fare qui. Il pomeriggio nel Roero, sull\'altra sponda del Tanaro: sabbie invece di marne, Arneis per i bianchi, meno gente. Cena in un\'osteria con i plin.',
      tratte: [
        { da: 'Alba', a: 'Barbaresco', km: 13, minuti: 19 },
        { da: 'Barbaresco', a: 'Canale (Roero)', km: 19, minuti: 24 },
        { da: 'Canale', a: 'Alba', km: 16, minuti: 19 },
      ],
      luoghi: [
        {
          nome: 'Barbaresco, paese e torre',
          gps: [44.71927, 8.07686],
          nota: 'Orari dell\'Enoteca regionale del Barbaresco non verificati.',
          fonti: ['osm'],
        },
        {
          nome: 'Canale, Roero',
          gps: [44.80213, 8.00996],
          nota: 'Produttori del Roero sul sito del consorzio di tutela del Roero (non verificato): chiedi anche all\'ufficio turistico di Alba.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Ultima notte nelle Langhe.',
    },
    {
      numero: 4,
      titolo: 'Trasferimento in Valpolicella',
      paginaSito: '/esperienze/italia/degustazione-cantina',
      racconto:
        'Ci siamo spostati verso Verona e la Valpolicella, circa tre ore e mezza. Nel pomeriggio abbiamo visto le fruttaie: dopo la vendemmia le uve dell\'Amarone vengono stese ad appassire su graticci per tre o quattro mesi, perdono fino al quaranta per cento del peso e solo dopo si vinificano. L\'odore si sente già dal cortile.',
      tratte: [{ da: 'Alba', a: 'San Pietro in Cariano (Valpolicella Classica)', km: 299, minuti: 198 }],
      luoghi: [
        {
          nome: 'Valpolicella Classica',
          indirizzo: 'Comuni di San Pietro in Cariano, Negrar, Fumane, Marano, Sant\'Ambrogio',
          web: 'consorziovalpolicella.it',
          gps: [45.50709, 10.8944],
          nota: 'Le fruttaie sono piene tra ottobre e gennaio. Le cantine che le mostrano si trovano sul sito del Consorzio della Valpolicella.',
          fonti: ['cons-valpolicella', 'osm'],
        },
      ],
      mangiare: [],
      dormire: 'Un\'azienda con ospitalità nella zona classica, che è piccola e si gira in mezz\'ora.',
      nota: 'Il trasferimento passa su autostrade con pedaggio (A21 e A4): conta anche quello nel budget.',
    },
    {
      numero: 5,
      titolo: 'Amarone, Soave e Verona',
      paginaSito: '/esperienze/italia/degustazione-cantina',
      racconto:
        'Una cantina in Valpolicella Classica e una nel Soave: un bianco di Garganega su suoli vulcanici, tutt\'altra cosa e molto sottovalutato. Il pomeriggio a Verona. Cena con il risotto all\'Amarone e i bolliti.',
      tratte: [
        { da: 'Valpolicella Classica', a: 'Soave', km: 51, minuti: 47 },
        { da: 'Soave', a: 'Verona, Arena', km: 33, minuti: 33 },
        { da: 'Verona', a: 'Valpolicella Classica', km: 14, minuti: 22 },
      ],
      luoghi: [
        {
          nome: 'Soave, borgo murato',
          web: 'ilsoave.com',
          gps: [45.43591, 11.24253],
          nota: 'Produttori sul sito del Consorzio del Soave.',
          fonti: ['cons-soave', 'osm'],
        },
        {
          nome: 'Verona, Arena e centro',
          gps: [45.43902, 10.99493],
          nota: 'Il centro di Verona ha la ZTL: lascia l\'auto in un parcheggio fuori e prosegui a piedi.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Valpolicella, come la sera prima.',
    },
    {
      numero: 6,
      titolo: 'Le colline del Prosecco',
      paginaSito: '/esperienze/italia/degustazione-cantina',
      racconto:
        'Giornata sulle colline di Conegliano e Valdobbiadene, patrimonio UNESCO: pendenze coltivate a mano, con il Cartizze nella sottozona più ripida. La viticoltura è intensiva e in certi tratti si vede, quindi abbiamo scelto un produttore piccolo per capire la differenza con il Prosecco industriale. La sera il trasferimento verso la Toscana.',
      tratte: [
        { da: 'Verona', a: 'Valdobbiadene', km: 142, minuti: 124 },
        { da: 'Valdobbiadene', a: 'Conegliano', km: 30, minuti: 44, nelMioViaggio: 'lungo la Strada del Prosecco' },
        { da: 'Conegliano', a: 'Castellina in Chianti', km: 341, minuti: 233 },
      ],
      luoghi: [
        {
          nome: 'Consorzio Conegliano Valdobbiadene Prosecco Superiore DOCG',
          web: 'prosecco.it',
          gps: [45.91632, 12.02737],
          nota: 'Elenco dei produttori e mappa delle Rive sul sito del consorzio.',
          fonti: ['cons-prosecco', 'osm'],
        },
      ],
      mangiare: [],
      dormire: 'Chianti Classico, tra Firenze e Siena, oppure una notte nel Trevigiano e partenza il mattino dopo.',
      nota: 'Con cantina e quasi sei ore di strada nello stesso giorno, chi guida non assaggia. Se si può, conviene dormire in zona e partire il mattino.',
    },
    {
      numero: 7,
      titolo: 'Chianti Classico',
      paginaSito: '/destinazioni/italia/rotte-dei-vini',
      racconto:
        'Due cantine prenotate nel Chianti Classico. Il Gallo Nero sul collo della bottiglia è il marchio del consorzio ed è il modo più rapido per distinguerlo dal Chianti, che è un\'altra denominazione. Il pomeriggio tra i borghi murati, Castellina, Radda e Volpaia, e la cena con la bistecca, servita al chilo e al sangue.',
      tratte: [
        { da: 'Castellina in Chianti', a: 'Radda in Chianti', km: 12, minuti: 14 },
        { da: 'Radda in Chianti', a: 'Castellina in Chianti', km: 12, minuti: 14 },
      ],
      luoghi: [
        {
          nome: 'Consorzio Vino Chianti Classico',
          web: 'chianticlassico.com',
          gps: [43.46918, 11.28729],
          nota: 'Le cantine che ricevono sono sul sito del consorzio. Le coordinate sono di Castellina.',
          fonti: ['cons-chianti', 'osm'],
        },
        {
          nome: 'Radda in Chianti',
          gps: [43.48705, 11.3747],
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Wine resort o agriturismo nel Chianti: la zona più cara dell\'itinerario. Nome non annotato.',
    },
    {
      numero: 8,
      titolo: 'Montalcino e Sant\'Antimo',
      paginaSito: '/destinazioni/italia/rotte-dei-vini',
      racconto:
        'Giornata a Montalcino per il Brunello: lo stesso Sangiovese del Chianti, clima più caldo e secco, cinque anni minimi prima di uscire. Le cantine qui hanno un\'accoglienza di livello internazionale. Nel pomeriggio l\'Abbazia di Sant\'Antimo, romanica, in mezzo agli ulivi.',
      tratte: [
        { da: 'Castellina in Chianti', a: 'Montalcino', km: 64, minuti: 87 },
        { da: 'Montalcino', a: 'Abbazia di Sant\'Antimo', km: 10, minuti: 12 },
        { da: 'Sant\'Antimo', a: 'Castellina in Chianti', km: 73, minuti: 98 },
      ],
      luoghi: [
        {
          nome: 'Consorzio del vino Brunello di Montalcino',
          indirizzo: 'Piazza Cavour, Montalcino (SI)',
          web: 'consorziobrunellodimontalcino.it',
          gps: [43.05756, 11.49028],
          nota: 'Sul sito c\'è la scheda di ogni azienda associata, con i contatti per prenotare.',
          fonti: ['cons-brunello', 'osm'],
        },
        {
          nome: 'Abbazia di Sant\'Antimo',
          indirizzo: 'Località Castelnuovo dell\'Abate, 53024 Montalcino (SI)',
          orari: 'Aperta tutti i giorni; gli orari pubblicati cambiano con la stagione (in inverno circa 10:30-17:00)',
          biglietto: 'Chiesa a ingresso libero; percorsi di visita e audioguida a pagamento',
          telefono: '+39 0577 835693 · antimo@operalaboratori.com',
          web: 'antimo.it',
          gps: [42.99963, 11.5157],
          nota: 'Spalle e ginocchia coperte. Controlla l\'orario del giorno sul sito prima di andare.',
          fonti: ['antimo', 'antimo-italia', 'osm'],
        },
      ],
      mangiare: [],
      dormire: 'Chianti, oppure una notte a Montalcino.',
      nota: 'Per spendere meno: Montepulciano, a mezz\'ora, con il Vino Nobile. Stesso Sangiovese, prezzi molto più umani.',
    },
    {
      numero: 9,
      titolo: 'La Val d\'Orcia',
      paginaSito: '/destinazioni/italia/rotte-dei-vini',
      racconto:
        'La giornata senza cantine, per far riposare il palato: la Val d\'Orcia, patrimonio UNESCO, con i cipressi, San Quirico, Pienza e le crete senesi. È un paesaggio agrario costruito: quelle colline hanno quella forma perché per secoli sono state coltivate in un certo modo. Nel tardo pomeriggio un\'ultima sosta a Montepulciano.',
      tratte: [
        { da: 'Castellina in Chianti', a: 'San Quirico d\'Orcia', km: 67, minuti: 88 },
        { da: 'San Quirico d\'Orcia', a: 'Pienza', km: 10, minuti: 14 },
        { da: 'Pienza', a: 'Montepulciano', km: 14, minuti: 20 },
        { da: 'Montepulciano', a: 'Castellina in Chianti', km: 87, minuti: 88 },
      ],
      luoghi: [
        { nome: 'San Quirico d\'Orcia', gps: [43.0604, 11.60365], fonti: ['osm'] },
        { nome: 'Pienza', gps: [43.07655, 11.67891], fonti: ['osm'] },
        {
          nome: 'Montepulciano e il Consorzio del Vino Nobile',
          web: 'consorziovinonobile.it',
          gps: [43.09453, 11.78268],
          nota: 'Per assaggiare molti produttori in un posto solo, chiedi al consorzio dove si fanno le degustazioni collettive.',
          fonti: ['cons-nobile', 'osm'],
        },
      ],
      mangiare: [],
      dormire: 'Ultima notte nel Chianti.',
    },
    {
      numero: 10,
      titolo: 'Rientro da Firenze',
      paginaSito: '/destinazioni/italia/firenze',
      racconto: 'Ultima mattina, ultimi acquisti in azienda e rientro da Firenze.',
      tratte: [{ da: 'Castellina in Chianti', a: 'Firenze, stazione di Santa Maria Novella', km: 44, minuti: 54 }],
      luoghi: [
        {
          nome: 'Firenze',
          gps: [43.77757, 11.24742],
          nota: 'Il centro di Firenze è ZTL: se riconsegni l\'auto in città, scegli un noleggio fuori dalla zona o all\'aeroporto.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Nessun pernottamento.',
    },
  ],
  mappa: {
    percorso: ['Aeroporto di Torino', 'Alba', 'Barolo', 'Alba', 'Barbaresco', 'Canale', 'Alba', 'Valpolicella', 'Soave', 'Verona', 'Valdobbiadene', 'Conegliano', 'Castellina', 'Radda', 'Castellina', 'Montalcino', 'Sant\'Antimo', 'San Quirico', 'Pienza', 'Montepulciano', 'Castellina'],
    ritorno: ['Castellina', 'Firenze'],
    legenda: 'Linea piena: il giro dalle Langhe alla Toscana. Tratteggio: il rientro a Firenze.',
    notaTempi: 'Tempi stimati senza traffico (OSRM su OpenStreetMap). Sulle strade di collina e nei giorni di vendemmia, con trattori e mezzi agricoli, aggiungi margine.',
    notaTempiFonti: ['osrm'],
    scalaKm: 50,
  },
  primaDiPartire: [
    {
      titolo: 'Prenotare le cantine',
      righe: [
        { voce: 'La regola', valore: 'Una cantina è un\'azienda agricola, non un negozio. Una mail tre giorni prima e ti riceve il produttore; senza appuntamento trovi il cancello chiuso.' },
        { voce: 'Quante', valore: 'Due o tre al giorno al massimo. Meglio una storica e una piccola nella stessa zona.' },
        { voce: 'Dove cercarle', valore: 'Sui siti dei consorzi: langhevini.it, consorziovalpolicella.it, ilsoave.com, prosecco.it, chianticlassico.com, consorziobrunellodimontalcino.it, consorziovinonobile.it.', fonti: ['cons-langhe', 'cons-valpolicella', 'cons-soave', 'cons-prosecco', 'cons-chianti', 'cons-brunello', 'cons-nobile'] },
        { voce: 'Costi', valore: 'Di solito 15-40 € a persona secondo i vini, spesso scalati se compri. Barolo e Montalcino costano di più.' },
        { voce: 'Quando', valore: 'Settembre e ottobre, in vendemmia; seconda finestra aprile-giugno. Ad agosto molte cantine chiudono.' },
      ],
    },
    {
      titolo: 'Chi guida',
      righe: [
        { voce: 'Il limite', valore: '0,5 g/l per chi ha la patente da più di tre anni; zero per i neopatentati e i conducenti professionali.', fonti: ['alcol'] },
        { voce: 'Cosa si rischia', valore: 'Sopra 0,5 g/l multe da 543 € e decurtazione di punti; sopra 0,8 g/l è reato. Nelle zone del vino i controlli ci sono.', fonti: ['alcol'] },
        { voce: 'Le soluzioni', valore: 'Assaggiare e sputare, come fanno i professionisti: in ogni cantina c\'è il contenitore sul tavolo. Oppure pagare un autista o una navetta locale.' },
      ],
    },
    {
      titolo: 'Auto e strade',
      righe: [
        { voce: 'ZTL', valore: 'Alba, Verona, Firenze, Montepulciano e Pienza hanno centri a traffico limitato: parcheggia fuori e segui i cartelli dei varchi.' },
        { voce: 'Pedaggi', valore: 'I trasferimenti Langhe-Verona e Treviso-Toscana sono quasi tutti in autostrada a pagamento.' },
        { voce: 'Bottiglie', valore: 'Porta qualcosa per proteggerle: si accumulano. In auto non lasciarle al sole.' },
        { voce: 'Abbonamento Musei', valore: 'In Piemonte copre WiMu e Castello di Grinzane Cavour.', fonti: ['abbonamento-musei'] },
      ],
    },
  ],
  emergenze: {
    numeri: [
      { voce: 'Emergenze, numero unico', valore: '112. Smista a polizia, carabinieri, vigili del fuoco e ambulanza; in Piemonte, Veneto e Toscana il servizio risulta attivo.', fonti: ['nue', 'nue-servizio'] },
      { voce: 'Ambulanza · Polizia · Vigili del fuoco', valore: '118 · 113 · 115', fonti: ['nue-servizio'] },
      { voce: 'Se non puoi parlare', valore: 'App Where Are U: manda la posizione alla centrale e permette di scrivere', fonti: ['nue'] },
      { voce: 'Guardia medica', valore: '116117 nelle regioni dove è attivo; altrimenti il numero è sul sito dell\'azienda sanitaria', fonti: ['116117'] },
    ],
    ambasciata: [
      {
        nome: 'Non serve: sei in Italia',
        cosa: 'Documenti persi o rubati: denuncia a Polizia o Carabinieri (anche il 112); la carta d\'identità si rifà al Comune',
        web: 'cartaidentita.interno.gov.it',
        stato: 'ufficiale',
        fonti: ['cie'],
      },
    ],
    ospedali: [
      { nome: 'Ospedale Michele e Pietro Ferrero (ASL CN2)', cosa: 'Langhe e Roero, pronto soccorso', indirizzo: 'Via Tanaro 7, 12060 Verduno (CN)', gps: [44.67501, 7.93327], web: 'aslcn2.it', stato: 'ufficiale', avviso: 'Centralino da un elenco sanitario (0173 316111): riconfermalo sul sito dell\'ASL.', fonti: ['aslcn2', 'osm'] },
      { nome: 'Ospedale Borgo Trento (AOUI Verona)', cosa: 'Verona e Valpolicella, pronto soccorso', indirizzo: 'Piazzale Aristide Stefani 1, 37126 Verona', telefono: 'Centralino 045 812 1111', gps: [45.45146, 10.98536], web: 'aovr.veneto.it', stato: 'ufficiale', fonti: ['aovr', 'osm'] },
      { nome: 'Ospedale di Conegliano (ULSS 2 Marca Trevigiana)', cosa: 'Colline del Prosecco', indirizzo: 'Via Toniolo, Conegliano (TV)', gps: [45.88191, 12.28935], web: 'aulss2.veneto.it', stato: 'ufficiale', avviso: 'Telefono non verificato.', fonti: ['aulss2', 'osm'] },
      { nome: 'Policlinico Santa Maria alle Scotte (AOU Senese)', cosa: 'Chianti senese, Montalcino, Val d\'Orcia', indirizzo: 'Viale Mario Bracci 16, 53100 Siena', gps: [43.34357, 11.32967], stato: 'ufficiale', avviso: 'Centralino non verificato: gli elenchi danno numeri diversi.', fonti: ['osm'] },
    ],
  },
  contatti: [
    {
      gruppo: 'Consorzi: dove trovare le cantine',
      voci: [
        { nome: 'Consorzio Barolo Barbaresco Alba Langhe e Dogliani', cosa: 'Barolo, Barbaresco, Langhe', web: 'langhevini.it', stato: 'ufficiale', fonti: ['cons-langhe'] },
        { nome: 'Consorzio della Valpolicella', cosa: 'Amarone, Valpolicella, Ripasso', web: 'consorziovalpolicella.it', stato: 'ufficiale', fonti: ['cons-valpolicella'] },
        { nome: 'Consorzio del Soave', cosa: 'Soave e Recioto di Soave', web: 'ilsoave.com', stato: 'ufficiale', fonti: ['cons-soave'] },
        { nome: 'Consorzio Conegliano Valdobbiadene Prosecco Superiore', cosa: 'Prosecco Superiore DOCG e Cartizze', web: 'prosecco.it', stato: 'ufficiale', fonti: ['cons-prosecco'] },
        { nome: 'Consorzio Vino Chianti Classico', cosa: 'Gallo Nero', web: 'chianticlassico.com', stato: 'ufficiale', fonti: ['cons-chianti'] },
        { nome: 'Consorzio del vino Brunello di Montalcino', cosa: 'Brunello e Rosso di Montalcino', indirizzo: 'Piazza Cavour, Montalcino', web: 'consorziobrunellodimontalcino.it', stato: 'ufficiale', fonti: ['cons-brunello'] },
        { nome: 'Consorzio del Vino Nobile di Montepulciano', cosa: 'Vino Nobile', web: 'consorziovinonobile.it', stato: 'ufficiale', fonti: ['cons-nobile'] },
      ],
    },
    {
      gruppo: 'Musei, eventi e luoghi',
      voci: [
        { nome: 'WiMu, Museo del vino a Barolo', cosa: 'Museo nel Castello Falletti', telefono: '+39 0173 386697', web: 'wimubarolo.it', stato: 'ufficiale', fonti: ['wimu'] },
        { nome: 'Castello di Grinzane Cavour', cosa: 'Museo delle Langhe ed Enoteca regionale', indirizzo: 'Via Castello 5, Grinzane Cavour', telefono: '+39 0173 262159', web: 'castellogrinzane.com', stato: 'ufficiale', fonti: ['grinzane-am'] },
        { nome: 'Ente Fiera di Alba', cosa: 'Fiera del Tartufo Bianco', indirizzo: 'Piazza Medford 3, Alba', telefono: '+39 0173 361051', web: 'fieradeltartufo.org', stato: 'ufficiale', fonti: ['fiera-tartufo'] },
        { nome: 'Abbazia di Sant\'Antimo', cosa: 'Visite e orari', telefono: '+39 0577 835693', web: 'antimo.it', stato: 'ufficiale', fonti: ['antimo'] },
      ],
    },
  ],
  budget: {
    righe: [
      { voce: 'Volo o treno per Torino e rientro da Firenze' },
      { voce: 'Auto a noleggio, 10 giorni', nota: 'con riconsegna in un\'altra città' },
      { voce: 'Carburante e pedaggi', nota: 'circa 1.300 km' },
      { voce: 'Degustazioni (circa 12 cantine)', costo: '15-40 € l\'una', nota: 'a persona, spesso scalate sull\'acquisto' },
      { voce: 'Castello di Grinzane Cavour', costo: '8 €' },
      { voce: 'WiMu a Barolo' },
      { voce: 'Autista o navetta per i giorni di cantina' },
      { voce: 'Alloggi (9 notti)', nota: 'Chianti e Langhe in fiera del tartufo i più cari' },
      { voce: 'Cene in osteria' },
      { voce: 'Bottiglie comprate in cantina' },
    ],
    nota: 'Le cifre sono quelle che ho trovato sulle fonti ufficiali a novembre 2026, per un adulto. Le righe vuote le riempi tu: nei miei appunti non ho né le date né i costi.',
  },
  valigia: [
    {
      gruppo: 'Documenti e soldi',
      voci: ['Carta d\'identità', 'Patente e carta di credito per il noleggio', 'Tessera sanitaria', 'Conferme delle cantine con indirizzo e telefono', 'Questa guida stampata'],
    },
    {
      gruppo: 'Per le cantine',
      voci: ['Niente profumi forti: interferiscono con l\'assaggio', 'Scarpe chiuse per camminare tra i filari e nelle cantine fresche', 'Un maglione: le cantine sono fredde anche a settembre', 'Taccuino per i vini assaggiati'],
    },
    {
      gruppo: 'Per le bottiglie',
      voci: ['Protezioni per bottiglie o una valigia rigida', 'Una borsa termica per l\'auto'],
    },
    {
      gruppo: 'Salute',
      voci: ['Farmaci personali e ricette', 'Acqua sempre in auto', 'Qualcosa da mangiare tra una cantina e l\'altra'],
    },
  ],
  lingua: {
    nome: 'Parole da cantina',
    pronuncia: 'In Italia il frasario non serve. Qui ci sono le parole che si sentono in cantina e sulle etichette di questo viaggio.',
  },
  frasario: [
    {
      gruppo: 'Etichette',
      frasi: [
        { it: 'DOCG · DOC', loc: 'Denominazione di origine controllata (e garantita): zona e regole di produzione fissate' },
        { it: 'MGA · Rive · UGA', loc: 'Le sottozone: menzioni geografiche nel Barolo, Rive nel Prosecco, unità geografiche nel Chianti Classico' },
        { it: 'Gallo Nero', loc: 'Il marchio del Chianti Classico sul collo della bottiglia' },
        { it: 'Riserva', loc: 'Invecchiamento più lungo del minimo della denominazione' },
        { it: 'Cartizze', loc: 'La sottozona più ripida del Valdobbiadene' },
      ],
    },
    {
      gruppo: 'In cantina',
      frasi: [
        { it: 'Fruttaio', loc: 'La stanza dove le uve dell\'Amarone appassiscono sui graticci' },
        { it: 'Botte grande · barrique', loc: 'Legno da molti ettolitri · piccola botte da 225 litri' },
        { it: 'Sputacchiera', loc: 'Il contenitore sul tavolo per sputare il vino: usarla è normale' },
        { it: 'Degustazione scalabile', loc: 'Il prezzo della degustazione si toglie dal conto se compri' },
        { it: 'Ripasso', loc: 'Valpolicella rifermentato sulle vinacce dell\'Amarone' },
      ],
    },
    {
      gruppo: 'Strada',
      frasi: [
        { it: 'ZTL · Varco attivo', loc: 'Zona a traffico limitato: con la scritta «attivo» non si entra' },
        { it: 'Etilometro', loc: 'Il test dell\'alcol fatto dalle forze dell\'ordine' },
        { it: 'Neopatentato', loc: 'Patente da meno di tre anni: alcol zero' },
      ],
    },
  ],
  numeri: [
    { it: '112', loc: 'Emergenze, numero unico' },
    { it: '118', loc: 'Ambulanza' },
    { it: '113', loc: 'Polizia' },
    { it: '115', loc: 'Vigili del fuoco' },
    { it: '116117', loc: 'Guardia medica, dove attivo' },
    { it: '045 812 1111', loc: 'Ospedale di Verona, centralino' },
    { it: '+39 0173 386697', loc: 'WiMu Barolo' },
    { it: '+39 0173 262159', loc: 'Castello di Grinzane Cavour' },
    { it: '+39 0173 361051', loc: 'Ente Fiera di Alba' },
    { it: '+39 0577 835693', loc: 'Abbazia di Sant\'Antimo' },
  ],
  pagineSito: [
    { titolo: 'Il viaggio completo', path: '/viaggi/rotte-dei-vini-itinerario' },
    { titolo: 'Italia, la scheda paese', path: '/destinazioni/italia' },
    { titolo: 'Le rotte dei vini', path: '/destinazioni/italia/rotte-dei-vini' },
    { titolo: 'Visita e degustazione in cantina', path: '/esperienze/italia/degustazione-cantina' },
  ],
  consultate: 'Consultate il 2 novembre 2026. Prezzi e orari cambiano: prima di pagare, guarda sempre la fonte ufficiale.',
  nonVerificato: [
    'Prezzo del biglietto 2026 del WiMu di Barolo',
    'Orari esatti 2026 del Castello di Grinzane Cavour e dell\'Abbazia di Sant\'Antimo: le fonti non concordano',
    'Orari delle enoteche regionali di Barolo e Barbaresco',
    'Telefoni dei consorzi: ho messo solo i siti',
    'Centralini degli ospedali di Verduno, Conegliano e Siena',
    'Navette e autisti per le zone del vino',
    'Nomi di cantine, alloggi e osterie: non annotati nei miei appunti, di proposito',
  ],
  fonti: [
    { id: 'nue', titolo: 'Ministero dell\'Interno, 112 Numero Unico Europeo', url: 'https://www.112.gov.it/' },
    { id: 'nue-servizio', titolo: '112.gov.it, il servizio', url: 'https://www.112.gov.it/il-servizio' },
    { id: '116117', titolo: 'Ministero della Salute, numero europeo 116117', url: 'https://www.salute.gov.it/' },
    { id: 'cie', titolo: 'Ministero dell\'Interno, Carta d\'identità elettronica', url: 'https://www.cartaidentita.interno.gov.it/' },
    { id: 'alcol', titolo: 'Codice della strada, artt. 186 e 186-bis (sintesi Sky TG24, 2026)', url: 'https://tg24.sky.it/cronaca/approfondimenti/tasso-alcolemico-limite-italia' },
    { id: 'wimu', titolo: 'WiMu, Museo del vino a Barolo', url: 'https://www.wimubarolo.it/' },
    { id: 'abbonamento-musei', titolo: 'Abbonamento Musei, WiMu e Castello di Grinzane Cavour', url: 'https://abbonamentomusei.it/en/spazio_espositivo/wi-mu-museo-del-vino-a-barolo-e-wi-la-wine-labels-collection/' },
    { id: 'grinzane-am', titolo: 'Abbonamento Musei, Castello di Grinzane Cavour', url: 'https://abbonamentomusei.it/en/?p=2085' },
    { id: 'grinzane-tci', titolo: 'Touring Club Italiano, Castello di Grinzane Cavour', url: 'https://www.touringclub.it/destinazioni/grinzane-cavour/vedere/141286-castello-di-grinzane-cavour' },
    { id: 'fiera-tartufo', titolo: 'Fiera Internazionale del Tartufo Bianco d\'Alba', url: 'https://www.fieradeltartufo.org/' },
    { id: 'fiera-date', titolo: 'Visit Langhe Monferrato Roero, la Fiera del Tartufo 2026', url: 'https://www.visitlmr.it/en/events/top-events/the-international-alba-white-truffle-fair-alba' },
    { id: 'antimo', titolo: 'Abbazia di Sant\'Antimo, sito ufficiale', url: 'https://www.antimo.it/' },
    { id: 'antimo-italia', titolo: 'Italia.it, Abbazia di Sant\'Antimo', url: 'https://www.italia.it/it/toscana/siena/abbazia-di-sant-antimo' },
    { id: 'cons-langhe', titolo: 'Consorzio Barolo Barbaresco Alba Langhe e Dogliani', url: 'https://www.langhevini.it/' },
    { id: 'cons-valpolicella', titolo: 'Consorzio della Valpolicella', url: 'https://www.consorziovalpolicella.it/' },
    { id: 'cons-soave', titolo: 'Consorzio del Soave', url: 'https://www.ilsoave.com/' },
    { id: 'cons-prosecco', titolo: 'Consorzio Conegliano Valdobbiadene Prosecco Superiore DOCG', url: 'https://www.prosecco.it/' },
    { id: 'cons-chianti', titolo: 'Consorzio Vino Chianti Classico', url: 'https://www.chianticlassico.com/' },
    { id: 'cons-brunello', titolo: 'Consorzio del vino Brunello di Montalcino', url: 'https://www.consorziobrunellodimontalcino.it/' },
    { id: 'cons-nobile', titolo: 'Consorzio del Vino Nobile di Montepulciano', url: 'https://www.consorziovinonobile.it/' },
    { id: 'aslcn2', titolo: 'ASL CN2 Alba e Bra', url: 'https://www.aslcn2.it/' },
    { id: 'aovr', titolo: 'AOUI Verona', url: 'https://www.aovr.veneto.it/' },
    { id: 'aulss2', titolo: 'ULSS 2 Marca Trevigiana', url: 'https://www.aulss2.veneto.it/' },
    { id: 'osm', titolo: 'OpenStreetMap / Nominatim (coordinate)', url: 'https://nominatim.openstreetmap.org' },
    { id: 'osrm', titolo: 'OSRM su dati OpenStreetMap (distanze e tempi, traffico libero)', url: 'https://router.project-osrm.org' },
  ],
}
