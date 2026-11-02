import type { Guida } from './types'

/**
 * Guida PDF «Canarie in 9 giorni». Il racconto viene da
 * src/content/viaggi/62-canarie-itinerario.md; orari, prezzi e contatti
 * verificati sul web il 02/11/2026 (fonti in fondo, per id).
 *
 * Distanze e tempi su strada: router OSRM su dati OpenStreetMap, traffico libero.
 * Coordinate: OpenStreetMap (Nominatim).
 */

export const guidaCanarie: Guida = {
  slug: 'canarie-itinerario',
  tripSlug: 'canarie-itinerario',
  paese: 'Spagna',
  titolo: 'Canarie',
  sottotitolo: 'Tenerife, Gran Canaria e Lanzarote in nove giorni, con voli interni e un\'auto su ogni isola: orari, biglietti, permessi e numeri utili.',
  autore: 'Rick',
  verificatoAl: 'novembre 2026',
  intro: [
    'Nove giorni e otto notti su tre isole, con amici: auto a noleggio su ognuna e voli interni in mezzo. Il Teide e Anaga a Tenerife, le dune e il centro montuoso a Gran Canaria, Timanfaya e César Manrique a Lanzarote.',
    'Sul sito c\'è il racconto. Qui ci sono i chilometri delle strade, gli orari 2026 della funivia del Teide e dei centri di Lanzarote con i prezzi, come chiedere il permesso per la vetta e i numeri che servono in caso di guai.',
    'Ho ricontrollato tutto a novembre 2026. Le Canarie sono un\'ora indietro rispetto all\'Italia e al resto della Spagna: tienilo a mente con voli e prenotazioni.',
  ],
  cosaInPiu: [
    'Una scheda per ogni giorno con chilometri, tempi di guida e coordinate GPS',
    'Funivia del Teide: orari stagionali 2026 e prezzo; come avere il permesso per la vetta',
    'Timanfaya, Jameos del Agua, Cueva de los Verdes e Mirador del Río: orari e prezzi 2026',
    'Numeri di emergenza, Vice Consolato d\'Italia ad Arona, registrazione negli alloggi',
    'Lista per la valigia, budget da compilare e un frasario spagnolo',
  ],
  tappe: [
    { nome: 'Puerto de la Cruz', gps: [28.4159, -16.5533], giorno: 'G1', etichetta: 'sopra' },
    { nome: 'Teide', gps: [28.26225, -16.63236], giorno: 'G2', etichetta: 'sotto' },
    { nome: 'Anaga · La Laguna', gps: [28.53101, -16.27989], giorno: 'G3', etichetta: 'destra' },
    { nome: 'Las Palmas', gps: [28.09936, -15.41447], giorno: 'G4', etichetta: 'destra' },
    { nome: 'Roque Nublo', gps: [27.97082, -15.6126], giorno: 'G6', etichetta: 'sinistra' },
    { nome: 'Maspalomas', gps: [27.74388, -15.5829], giorno: 'G5', etichetta: 'sotto' },
    { nome: 'Arrecife', gps: [28.96397, -13.5499], giorno: 'G7', etichetta: 'destra' },
    { nome: 'Timanfaya', gps: [29.00283, -13.75067], giorno: 'G8', etichetta: 'sinistra' },
    { nome: 'Jameos del Agua', gps: [29.15749, -13.43168], giorno: 'G9', etichetta: 'destra' },
  ],
  giorni: [
    {
      numero: 1,
      titolo: 'Arrivo a Tenerife: Puerto de la Cruz',
      paginaSito: '/destinazioni/spagna/tenerife',
      racconto:
        'Siamo atterrati a Tenerife e siamo andati verso la costa nord. Il pomeriggio a Puerto de la Cruz, tra i giardini botanici e il centro storico coloniale: più verde e meno costruita del sud.',
      tratte: [{ da: 'Aeroporto Tenerife Nord (TFN)', a: 'Puerto de la Cruz', km: 28, minuti: 26, nelMioViaggio: 'dall\'aeroporto Sud la strada è più lunga' }],
      luoghi: [{ nome: 'Puerto de la Cruz, centro', gps: [28.4159, -16.5533], fonti: ['osm'] }],
      mangiare: [],
      dormire: 'Costa nord di Tenerife (nome dell\'alloggio non annotato).',
    },
    {
      numero: 2,
      titolo: 'Il Parco Nazionale del Teide',
      paginaSito: '/esperienze/spagna/teide-vetta-permesso',
      racconto:
        'Giornata tutta per il Teide. La funivia sale da 2.356 a 3.555 metri in circa 8 minuti; con il permesso si fa a piedi l\'ultimo tratto fino al cratere, a 3.715. Intorno il paesaggio lunare di Las Cañadas. La sera, se il cielo è limpido, le stelle.',
      tratte: [{ da: 'Puerto de la Cruz', a: 'Funivia del Teide, stazione base', km: 41, minuti: 51 }],
      luoghi: [
        {
          nome: 'Funivia del Teide',
          indirizzo: 'Stazione base sulla TF-21, Parco Nazionale del Teide',
          orari: '2026: 09:00-17:00 da gennaio a fine marzo, da metà aprile a giugno e dal 25 ottobre a dicembre (ultima salita 16:00); 09:00-18:40 a Pasqua e da luglio a settembre (ultima salita 17:40); a ottobre orari intermedi',
          biglietto: 'Andata e ritorno adulti non residenti 43 €',
          web: 'volcanoteide.com',
          gps: [28.26225, -16.63236],
          nota: 'Il vento chiude spesso la funivia: guarda lo stato la mattina stessa.',
          fonti: ['teide-orari', 'teide-funivia', 'osm'],
        },
        {
          nome: 'Permesso per la vetta (sentiero Telesforo Bravo)',
          biglietto: 'Gratuito, va chiesto online',
          telefono: 'Parco: +34 922 922 371 · pnteide@tenerife.es',
          web: 'reservasparquesnacionales.es',
          nota: 'La pagina ufficiale rimanda per la richiesta a Tenerife ON (info.tenerifeon@gesplan.es). Secondo il mio articolo i posti sono 200 al giorno e si chiedono fino a 56 giorni prima: richiedilo appena hai le date.',
          fonti: ['teide-permesso'],
        },
      ],
      mangiare: [],
      dormire: 'Stesso alloggio sulla costa nord.',
      costiNoti: ['Funivia andata e ritorno: 43 €'],
      nota: 'In vetta fa molto più freddo che in basso, in ogni stagione. Chi ha problemi cardiaci o respiratori deve sentire il medico prima di salire oltre i 3.500 metri.',
    },
    {
      numero: 3,
      titolo: 'Anaga e La Laguna',
      racconto:
        'Ci siamo spostati a nord-est, nel Parco Rurale di Anaga, riserva della biosfera UNESCO: foresta di lauro quasi sempre nella nebbia. Abbiamo camminato da Cruz del Carmen verso Taganana e visto La Laguna, l\'antica capitale con l\'impianto rinascimentale.',
      tratte: [
        { da: 'Puerto de la Cruz', a: 'La Laguna', km: 30, minuti: 25 },
        { da: 'La Laguna', a: 'Cruz del Carmen', km: 11, minuti: 14 },
        { da: 'Cruz del Carmen', a: 'Taganana', km: 18, minuti: 20 },
      ],
      luoghi: [
        { nome: 'Cruz del Carmen, punto di partenza dei sentieri', gps: [28.53101, -16.27989], nota: 'Sentieri spesso fangosi: scarpe da trekking.', fonti: ['osm'] },
        { nome: 'San Cristóbal de La Laguna, centro storico', gps: [28.48577, -16.31594], fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Stesso alloggio sulla costa nord.',
    },
    {
      numero: 4,
      titolo: 'Da Tenerife a Gran Canaria',
      paginaSito: '/destinazioni/spagna/gran-canaria',
      racconto:
        'Volo interno per Gran Canaria, 30-40 minuti. Il pomeriggio a Las Palmas, tra il centro storico di Vegueta e la spiaggia urbana di Las Canteras.',
      tratte: [{ da: 'Aeroporto di Gran Canaria (LPA)', a: 'Las Palmas, Vegueta', km: 21, minuti: 22 }],
      luoghi: [{ nome: 'Vegueta, centro storico di Las Palmas', gps: [28.09936, -15.41447], fonti: ['osm'] }],
      mangiare: [],
      dormire: 'Las Palmas (nome non annotato).',
      nota: 'Le frequenze dei voli interni calano in bassa stagione: prenotali insieme ai voli dall\'Italia.',
    },
    {
      numero: 5,
      titolo: 'Le dune di Maspalomas',
      racconto:
        'Siamo scesi a sud, alle Dune di Maspalomas, riserva naturale di sabbia che sembra Sahara. Si camminano meglio al tramonto, quando cala il caldo. Poi Puerto de Mogán, con i canali.',
      tratte: [
        { da: 'Las Palmas', a: 'Dune di Maspalomas', km: 54, minuti: 43 },
        { da: 'Maspalomas', a: 'Puerto de Mogán', km: 27, minuti: 28 },
      ],
      luoghi: [
        { nome: 'Dune di Maspalomas', gps: [27.74388, -15.5829], nota: 'Riserva naturale: si cammina solo sui percorsi segnati.', fonti: ['osm'] },
        { nome: 'Puerto de Mogán', gps: [27.8174, -15.76522], fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Gran Canaria (nome non annotato).',
    },
    {
      numero: 6,
      titolo: 'Roque Nublo e Barranco de Guayadeque',
      racconto:
        'Siamo saliti al centro dell\'isola, al Roque Nublo: nelle giornate limpide si vede il Teide. Poi il Barranco de Guayadeque, il canyon con le case-grotta ancora abitate.',
      tratte: [
        { da: 'Las Palmas', a: 'Roque Nublo (parcheggio)', km: 54, minuti: 68 },
        { da: 'Roque Nublo', a: 'Barranco de Guayadeque', km: 38, minuti: 58 },
      ],
      luoghi: [
        { nome: 'Roque Nublo', gps: [27.97082, -15.6126], nota: 'Dal parcheggio sono circa 30-40 minuti di sentiero; il parcheggio è piccolo e si riempie presto.', fonti: ['osm'] },
        { nome: 'Barranco de Guayadeque', gps: [27.93003, -15.46547], fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Gran Canaria (nome non annotato).',
    },
    {
      numero: 7,
      titolo: 'Da Gran Canaria a Lanzarote',
      paginaSito: '/destinazioni/spagna/lanzarote',
      racconto:
        'Per Lanzarote c\'è il volo interno o il traghetto. Il pomeriggio ad Arrecife e un primo giro nella Geria, dove le viti crescono in buche nella cenere vulcanica.',
      tratte: [
        { da: 'Aeroporto di Lanzarote (ACE)', a: 'Arrecife', km: 7, minuti: 13 },
        { da: 'Arrecife', a: 'La Geria', km: 18, minuti: 21 },
      ],
      luoghi: [{ nome: 'La Geria, zona vinicola', gps: [28.9899, -13.69718], fonti: ['osm'] }],
      mangiare: [],
      dormire: 'Lanzarote (nome non annotato).',
    },
    {
      numero: 8,
      titolo: 'Timanfaya e la Geria',
      paginaSito: '/esperienze/spagna/timanfaya-ruta-volcanes',
      racconto:
        'La mattina il Parco Nazionale di Timanfaya: la Ruta de los Volcanes in pullman tra le colate del 1730-1736 e le dimostrazioni geotermiche all\'Islote de Hilario. Nel pomeriggio una degustazione nella Geria, tra le vigne riparate dai muretti a semicerchio.',
      tratte: [
        { da: 'Arrecife', a: 'Montañas del Fuego (Islote de Hilario)', km: 33, minuti: 38 },
        { da: 'Islote de Hilario', a: 'La Geria', km: 16, minuti: 27 },
        { da: 'La Geria', a: 'Arrecife', km: 18, minuti: 21 },
      ],
      luoghi: [
        {
          nome: 'Montañas del Fuego (Parco Nazionale di Timanfaya)',
          indirizzo: 'Islote de Hilario, Tinajo',
          orari: '09:00-15:45',
          biglietto: '30 € (ridotti per residenti canari, solo in biglietteria)',
          telefono: 'CACT Lanzarote +34 928 84 84 84',
          web: 'cactlanzarote.com',
          gps: [29.00283, -13.75067],
          nota: 'Dal pullman non si scende: è vietato.',
          fonti: ['cact', 'osm'],
        },
      ],
      mangiare: [],
      dormire: 'Lanzarote (nome non annotato).',
      costiNoti: ['Montañas del Fuego: 30 €'],
    },
    {
      numero: 9,
      titolo: 'César Manrique e rientro',
      racconto:
        'L\'ultima giornata è stata per le opere di César Manrique: i Jameos del Agua, un tubo di lava diventato centro d\'arte, la Cueva de los Verdes e il Mirador del Río, davanti a La Graciosa. Poi il volo di rientro.',
      tratte: [
        { da: 'Arrecife', a: 'Jameos del Agua', km: 27, minuti: 30 },
        { da: 'Jameos del Agua', a: 'Cueva de los Verdes', km: 1, minuti: 4 },
        { da: 'Cueva de los Verdes', a: 'Mirador del Río', km: 10, minuti: 12 },
        { da: 'Mirador del Río', a: 'Aeroporto di Lanzarote', km: 40, minuti: 47 },
      ],
      luoghi: [
        { nome: 'Jameos del Agua', orari: '10:00-18:00', biglietto: 'Da 17 €', web: 'cactlanzarote.com', gps: [29.15749, -13.43168], fonti: ['cact', 'osm'] },
        { nome: 'Cueva de los Verdes', orari: '09:30-16:45', biglietto: '17 €', web: 'cactlanzarote.com', gps: [29.16042, -13.43937], fonti: ['cact', 'osm'] },
        { nome: 'Mirador del Río', orari: '10:00-17:00', biglietto: '9 €', web: 'cactlanzarote.com', gps: [29.21442, -13.48137], fonti: ['cact', 'osm'] },
      ],
      mangiare: [],
      dormire: 'Nessun pernottamento.',
      costiNoti: ['Jameos del Agua da 17 €, Cueva de los Verdes 17 €, Mirador del Río 9 €'],
    },
  ],
  mappa: {
    percorso: ['Puerto', 'Teide', 'Anaga', 'Las Palmas', 'Maspalomas', 'Roque', 'Arrecife', 'Timanfaya', 'Jameos'],
    legenda: 'Linea piena: l\'ordine delle tappe, voli interni compresi. Le coste non sono disegnate.',
    notaTempi: 'Tempi su strada senza traffico (OSRM su OpenStreetMap). Sulle strade di montagna (Teide, Anaga, Roque Nublo) aggiungi almeno un 25%.',
    notaTempiFonti: ['osrm'],
    scalaKm: 50,
  },
  primaDiPartire: [
    {
      titolo: 'Documenti e ingresso',
      righe: [
        { voce: 'Documento', valore: 'Carta d\'identità elettronica o passaporto validi. Le Canarie sono Spagna: UE e Schengen, niente visto.', fonti: ['vs'] },
        { voce: 'Registrazione', valore: 'Dal 2 dicembre 2024 alloggi e autonoleggi registrano i dati degli ospiti (Real Decreto 933/2021).', fonti: ['vs'] },
        { voce: 'Sanità', valore: 'Tessera sanitaria (TEAM) e un\'assicurazione con spese mediche e rimpatrio.', fonti: ['vs'] },
        { voce: 'Fuso orario', valore: 'Un\'ora indietro rispetto all\'Italia e al resto della Spagna.' },
      ],
    },
    {
      titolo: 'Da prenotare prima',
      righe: [
        { voce: 'Vetta del Teide', valore: 'Permesso gratuito ma a numero chiuso: chiedilo appena hai le date.', fonti: ['teide-permesso'] },
        { voce: 'Funivia', valore: 'Biglietto con orario sul sito ufficiale, 43 € andata e ritorno.', fonti: ['teide-orari'] },
        { voce: 'Voli interni', valore: 'Le frequenze calano in bassa stagione: prenotali insieme al volo dall\'Italia.' },
        { voce: 'Centri di Lanzarote', valore: 'Si comprano sul sito CACT; i ridotti per residenti solo in biglietteria.', fonti: ['cact'] },
      ],
    },
    {
      titolo: 'Clima, soldi, corrente',
      righe: [
        { voce: 'Clima', valore: 'Mite tutto l\'anno. Viaggiare Sicuri avvisa della calima, vento caldo con sabbia che riduce la visibilità e pesa su chi ha problemi respiratori.', fonti: ['vs'] },
        { voce: 'Valuta', valore: 'Euro.' },
        { voce: 'Corrente', valore: '230 V, prese C e F: per la spina italiana a tre poli in fila serve un adattatore.', fonti: ['prese'] },
        { voce: 'Sicurezza', valore: 'Viaggiare Sicuri segnala furti a Playa de las Américas (Tenerife). Niente in vista nell\'auto parcheggiata.', fonti: ['vs'] },
      ],
    },
  ],
  emergenze: {
    numeri: [
      { voce: 'Emergenze (numero unico, operatori anche in italiano)', valore: '112', fonti: ['vs'] },
      { voce: 'Parco Nazionale del Teide', valore: '+34 922 922 371', fonti: ['teide-permesso'] },
    ],
    ambasciata: [
      {
        nome: 'Vice Consolato d\'Italia ad Arona (Tenerife)',
        cosa: 'Competente per le Canarie. Telefono lun e gio 14:00-16:00; ricevimento solo su appuntamento (Prenot@mi)',
        indirizzo: 'Av. Antonio Domínguez 5, Zentral Center, 5ª planta, ufficio 8, 38660 Playa de Las Américas, Arona',
        telefono: '+34 822 124 070 · arona.consolare@esteri.it',
        stato: 'ufficiale',
        fonti: ['vs', 'rete-madrid'],
      },
      {
        nome: 'Ambasciata d\'Italia a Madrid',
        cosa: 'Centralino',
        indirizzo: 'Calle Lagasca 98, 28006 Madrid',
        telefono: '+34 91 423 3300',
        web: 'ambmadrid.esteri.it',
        stato: 'ufficiale',
        fonti: ['vs'],
      },
    ],
    ospedali: [
      { nome: 'Hospital Universitario de Canarias', cosa: 'Tenerife, La Laguna, pubblico', stato: 'ufficiale', avviso: 'Telefono non verificato: in emergenza chiama il 112.', fonti: [] },
      { nome: 'Hospital Universitario de Gran Canaria Doctor Negrín', cosa: 'Las Palmas, pubblico', stato: 'ufficiale', avviso: 'Telefono non verificato: in emergenza chiama il 112.', fonti: [] },
      { nome: 'Hospital Doctor José Molina Orosa', cosa: 'Arrecife, pubblico', stato: 'ufficiale', avviso: 'Telefono non verificato: in emergenza chiama il 112.', fonti: [] },
    ],
  },
  contatti: [
    {
      gruppo: 'Parchi e centri',
      voci: [
        { nome: 'Volcano Teide (funivia)', cosa: 'Biglietti e stato della funivia', web: 'volcanoteide.com', telefono: 'info@volcanoteide.com', stato: 'ufficiale', fonti: ['teide-funivia'] },
        { nome: 'Parco Nazionale del Teide', cosa: 'Permessi per la vetta (tramite Tenerife ON)', web: 'reservasparquesnacionales.es', telefono: '+34 922 922 371 · pnteide@tenerife.es', stato: 'ufficiale', fonti: ['teide-permesso'] },
        { nome: 'CACT Lanzarote', cosa: 'Timanfaya, Jameos, Cueva de los Verdes, Mirador del Río. Assistenza lun-ven 08:00-15:00 al 901 200 300', web: 'cactlanzarote.com', telefono: '+34 928 84 84 84', stato: 'ufficiale', fonti: ['cact'] },
      ],
    },
  ],
  budget: {
    righe: [
      { voce: 'Voli Italia-Tenerife e Lanzarote-Italia' },
      { voce: 'Voli interni (o traghetto) tra le isole' },
      { voce: 'Alloggi, 8 notti' },
      { voce: 'Tre noleggi auto', nota: 'più carburante' },
      { voce: 'Funivia del Teide, andata e ritorno', costo: '43 €' },
      { voce: 'Montañas del Fuego (Timanfaya)', costo: '30 €' },
      { voce: 'Jameos del Agua', costo: 'da 17 €' },
      { voce: 'Cueva de los Verdes', costo: '17 €' },
      { voce: 'Mirador del Río', costo: '9 €' },
      { voce: 'Degustazione nella Geria' },
      { voce: 'Pasti' },
    ],
    nota: 'Le cifre sono tariffe ufficiali 2026. Il resto lo riempi tu: alloggi e voli interni non sono annotati nei miei documenti.',
  },
  valigia: [
    { gruppo: 'Documenti', voci: ['Carta d\'identità o passaporto', 'Tessera sanitaria (TEAM)', 'Patente', 'Permesso per la vetta del Teide (stampato)', 'Carta di credito', 'Questa guida stampata'] },
    { gruppo: 'Vestiti', voci: ['Piumino leggero, cappello e guanti per il Teide', 'Giacca impermeabile per Anaga', 'Scarpe da trekking', 'Costume', 'Cappello e occhiali da sole'] },
    { gruppo: 'Zaino del giorno', voci: ['Acqua', 'Crema solare alta (in quota il sole brucia)', 'Power bank', 'Mappe offline delle tre isole'] },
  ],
  lingua: {
    nome: 'Spagnolo (delle Canarie)',
    pronuncia: 'Si legge quasi come si scrive; alle Canarie la «z» e la «c» davanti a e/i suonano come una «s». «Guagua» è l\'autobus.',
  },
  frasario: [
    {
      gruppo: 'Saluti e cortesia',
      frasi: [
        { it: 'Buongiorno', loc: 'buenos días' },
        { it: 'Grazie', loc: 'gracias' },
        { it: 'Per favore', loc: 'por favor' },
        { it: 'Scusi', loc: 'perdone' },
        { it: 'Parla inglese?', loc: '¿habla inglés?' },
      ],
    },
    {
      gruppo: 'Muoversi',
      frasi: [
        { it: 'L\'autobus', loc: 'la guagua', nota: 'così alle Canarie' },
        { it: 'Dov\'è…?', loc: '¿dónde está…?' },
        { it: 'La funivia è aperta?', loc: '¿está abierto el teleférico?' },
        { it: 'Quanto costa?', loc: '¿cuánto cuesta?' },
      ],
    },
    {
      gruppo: 'A tavola',
      frasi: [
        { it: 'Patate con salsa', loc: 'papas arrugadas con mojo' },
        { it: 'Il conto, per favore', loc: 'la cuenta, por favor' },
        { it: 'Acqua naturale', loc: 'agua sin gas' },
      ],
    },
    {
      gruppo: 'Emergenze',
      frasi: [
        { it: 'Aiuto!', loc: '¡socorro!' },
        { it: 'Ho bisogno di un medico', loc: 'necesito un médico' },
        { it: 'Mi gira la testa', loc: 'estoy mareado / mareada', nota: 'uomo / donna, utile in quota' },
      ],
    },
  ],
  numeri: [
    { it: '1', loc: 'uno' },
    { it: '2', loc: 'dos' },
    { it: '3', loc: 'tres' },
    { it: '4', loc: 'cuatro' },
    { it: '5', loc: 'cinco' },
    { it: '10', loc: 'diez' },
    { it: '20', loc: 'veinte' },
    { it: '100', loc: 'cien' },
  ],
  pagineSito: [
    { titolo: 'Il viaggio: Canarie', path: '/viaggi/canarie-itinerario' },
    { titolo: 'Tenerife', path: '/destinazioni/spagna/tenerife' },
    { titolo: 'Gran Canaria', path: '/destinazioni/spagna/gran-canaria' },
    { titolo: 'Lanzarote', path: '/destinazioni/spagna/lanzarote' },
    { titolo: 'Teide: vetta e permesso', path: '/esperienze/spagna/teide-vetta-permesso' },
    { titolo: 'Timanfaya, Ruta de los Volcanes', path: '/esperienze/spagna/timanfaya-ruta-volcanes' },
  ],
  nonVerificato: [
    'Numero di permessi al giorno e anticipo per la vetta del Teide sulla fonte ufficiale (il PDF delle regole non era leggibile)',
    'Telefoni degli ospedali delle tre isole',
    'Consolati onorari a Gran Canaria e Lanzarote (la pagina del Vice Consolato di Arona non era raggiungibile)',
    'Prezzi dei voli interni e dei traghetti tra le isole',
    'Nomi di alloggi, ristoranti e cantina della Geria: non annotati nei miei documenti',
  ],
  consultate: 'Consultate il 2 novembre 2026. Prezzi e orari cambiano: prima di pagare, guarda sempre la fonte ufficiale.',
  fonti: [
    { id: 'vs', titolo: 'Viaggiare Sicuri (Farnesina), scheda Spagna', url: 'https://www.viaggiaresicuri.it/schede_paese/ESP.json' },
    { id: 'rete-madrid', titolo: 'Ambasciata d\'Italia a Madrid, rete consolare', url: 'https://ambmadrid.esteri.it/it/chi-siamo/la-rete-consolare/' },
    { id: 'teide-funivia', titolo: 'Volcano Teide, funivia', url: 'https://www.volcanoteide.com/en/teide-cable-car' },
    { id: 'teide-orari', titolo: 'Volcano Teide, prezzi e orari 2026', url: 'https://www.volcanoteide.com/en/teide_cable_car/prices_and_opening_times' },
    { id: 'teide-permesso', titolo: 'Reservas Parques Nacionales, permesso per il sentiero Telesforo Bravo', url: 'https://www.reservasparquesnacionales.es/real/parquesnac/usu/html/detalle-actividad-oapn.aspx?ii=7ENG&cen=2&act=1' },
    { id: 'cact', titolo: 'CACT Lanzarote, centri turistici', url: 'https://cactlanzarote.com/en/' },
    { id: 'prese', titolo: 'WorldStandards, prese elettriche in Spagna', url: 'https://www.worldstandards.eu/electricity/plug-voltage-by-country/spain/' },
    { id: 'osm', titolo: 'OpenStreetMap / Nominatim (coordinate)', url: 'https://nominatim.openstreetmap.org' },
    { id: 'osrm', titolo: 'OSRM su dati OpenStreetMap (distanze e tempi)', url: 'https://router.project-osrm.org' },
  ],
}
