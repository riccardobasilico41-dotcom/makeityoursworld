import type { Guida } from './types'

/**
 * Guida PDF «Baleari in 8 giorni». Il racconto viene da
 * src/content/viaggi/63-baleari-itinerario.md; orari, prezzi e contatti
 * verificati sul web il 02/11/2026 (fonti in fondo, per id).
 *
 * Distanze e tempi su strada: router OSRM su dati OpenStreetMap, traffico libero.
 * Tratte in traghetto: chilometri in linea d'aria tra i porti, tempi dal viaggio.
 * Coordinate: OpenStreetMap (Nominatim).
 */

export const guidaBaleari: Guida = {
  slug: 'baleari-itinerario',
  tripSlug: 'baleari-itinerario',
  paese: 'Spagna',
  titolo: 'Baleari',
  sottotitolo: 'Mallorca, Ibiza e Minorca in otto giorni, in traghetto e con un\'auto su ogni isola, con indirizzi, orari e numeri utili.',
  autore: 'Rick',
  verificatoAl: 'novembre 2026',
  intro: [
    'Otto giorni e sette notti tra tre isole, con amici: auto a noleggio su ognuna e traghetti in mezzo. Palma e la Serra de Tramuntana, poi Ibiza tra Dalt Vila e il nord rurale, infine Minorca tra Ciutadella, le calette e Mahón.',
    'Sul sito c\'è il racconto. Qui ci sono le strade con i chilometri, gli indirizzi, il trenino di Sóller con orari e prezzi, i consolati onorari d\'Italia su tutte e tre le isole e i numeri di emergenza.',
    'Ho ricontrollato i dati a novembre 2026. I traghetti tra le isole cambiano orari e frequenze con la stagione: guardali sui siti delle compagnie prima di fissare le notti.',
  ],
  cosaInPiu: [
    'Una scheda per ogni giorno con chilometri, tempi di guida e coordinate GPS',
    'Il trenino di Sóller: prezzi 2026 e contatti',
    'I tre consolati onorari d\'Italia (Palma, Ibiza, Minorca) con indirizzi e orari',
    'Numeri di emergenza, registrazione obbligatoria negli alloggi, sicurezza',
    'Lista per la valigia, budget da compilare e un frasario spagnolo e catalano',
  ],
  tappe: [
    { nome: 'Palma', gps: [39.56747, 2.64817], giorno: 'G1 · G3', etichetta: 'sotto' },
    { nome: 'Valldemossa', gps: [39.71085, 2.62303], giorno: 'G2', etichetta: 'sinistra' },
    { nome: 'Sóller', gps: [39.7663, 2.71505], giorno: 'G2', etichetta: 'destra' },
    { nome: 'Ibiza, Dalt Vila', gps: [38.90739, 1.43579], giorno: 'G3 · G4', etichetta: 'sotto' },
    { nome: 'Nord di Ibiza', gps: [39.09851, 1.49637], giorno: 'G5', etichetta: 'sopra' },
    { nome: 'Ciutadella', gps: [39.99208, 3.89785], giorno: 'G6 · G7', etichetta: 'sopra' },
    { nome: 'Torre d\'en Galmés', gps: [39.90199, 4.11424], giorno: 'G8', etichetta: 'sotto' },
    { nome: 'Mahón', gps: [39.88949, 4.26621], giorno: 'G8', etichetta: 'destra' },
  ],
  giorni: [
    {
      numero: 1,
      titolo: 'Arrivo a Palma',
      paginaSito: '/destinazioni/spagna/mallorca',
      racconto:
        'Siamo atterrati a Palma e siamo andati in centro. Il pomeriggio alla Cattedrale, La Seu, gotica e sul mare, con gli interventi di Gaudí dentro. La sera nel Barrio Gótico, tra i vicoli e il Palazzo dell\'Almudaina.',
      tratte: [{ da: 'Aeroporto di Palma (PMI)', a: 'Cattedrale', km: 12, minuti: 19 }],
      luoghi: [
        {
          nome: 'Cattedrale di Palma (La Seu)',
          indirizzo: 'Plaça de la Seu, Palma',
          web: 'catedraldemallorca.org',
          gps: [39.56747, 2.64817],
          nota: 'Orari e prezzo non verificati: il sito ufficiale blocca la lettura automatica. Controllali lì prima di andare.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Palma, centro (nome dell\'alloggio non annotato). L\'alternativa è Sóller come base per la Serra.',
      nota: 'Viaggiare Sicuri segnala borseggi nel centro storico di Palma la sera.',
    },
    {
      numero: 2,
      titolo: 'Serra de Tramuntana: Valldemossa e Sóller',
      paginaSito: '/esperienze/spagna/serra-tramuntana-trekking',
      racconto:
        'Giornata nella Serra de Tramuntana, patrimonio UNESCO. Prima Valldemossa, il paese di pietra di Chopin e George Sand, poi Sóller, che si raggiunge anche con il trenino del 1912. Il pomeriggio al Port de Sóller.',
      tratte: [
        { da: 'Palma', a: 'Valldemossa', km: 20, minuti: 28 },
        { da: 'Valldemossa', a: 'Sóller', km: 24, minuti: 30, nelMioViaggio: 'strada a tornanti, più lenta del previsto' },
        { da: 'Sóller', a: 'Port de Sóller', km: 5, minuti: 9 },
      ],
      luoghi: [
        {
          nome: 'Tren de Sóller',
          indirizzo: 'Stazione di Palma (biglietteria in stazione) e stazione di Sóller',
          biglietto: 'Palma-Sóller solo andata 23 €; andata e ritorno 30 €',
          telefono: '+34 971 752 028',
          web: 'trendesoller.com',
          nota: 'Gli orari cambiano con la stagione: guarda la tabella sul sito. In alternativa alla guida, è il modo più comodo per Sóller.',
          fonti: ['soller'],
        },
        {
          nome: 'Valldemossa',
          gps: [39.71085, 2.62303],
          nota: 'Parcheggi a pagamento all\'ingresso del paese; d\'estate si riempiono a metà mattina.',
          fonti: ['osm'],
        },
        { nome: 'Port de Sóller', gps: [39.79776, 2.69642], fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Palma o Sóller (nome non annotato).',
      costiNoti: ['Tren de Sóller: 23 € solo andata, 30 € andata e ritorno'],
      nota: 'Chi vuole camminare trova i tratti del GR221 nella scheda esperienza del sito.',
    },
    {
      numero: 3,
      titolo: 'Da Mallorca a Ibiza',
      racconto:
        'Mattina libera a Palma. Nel pomeriggio il traghetto per Ibiza: da poco più di due ore a oltre quattro, secondo la nave. La sera in centro a Ibiza Town.',
      tratte: [{ da: 'Porto di Palma', a: 'Porto di Ibiza', km: 125, minuti: 135, mezzo: 'traghetto', nelMioViaggio: 'da 2 ore e un quarto a 4 ore e un quarto' }],
      luoghi: [],
      mangiare: [],
      dormire: 'Ibiza Town, vicino a Dalt Vila (nome non annotato). L\'alternativa tranquilla è Santa Gertrudis o Sant Joan.',
      nota: 'Se riconsegni l\'auto a Palma e ne prendi un\'altra a Ibiza, metti in conto i tempi dei due banchi noleggio.',
    },
    {
      numero: 4,
      titolo: 'Ibiza Town e Dalt Vila',
      paginaSito: '/destinazioni/spagna/ibiza',
      racconto:
        'La giornata è stata per Dalt Vila, la città alta fortificata, patrimonio UNESCO, con le mura rinascimentali. Il pomeriggio libero tra porto e spiagge vicine; chi vuole la notte dei club deve prenotare prima, in alta stagione.',
      tratte: [],
      senzaStrada: 'A piedi: Dalt Vila si sale dal Portal de ses Taules, sopra il porto.',
      luoghi: [
        {
          nome: 'Dalt Vila',
          indirizzo: 'Città alta di Eivissa, ingresso dal Portal de ses Taules',
          gps: [38.90739, 1.43579],
          nota: 'Le mura e le vie si girano liberamente; orari di musei e cattedrale non verificati.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Stesso alloggio a Ibiza.',
      nota: 'Viaggiare Sicuri segnala episodi di aggressività in alcuni locali notturni di Ibiza.',
    },
    {
      numero: 5,
      titolo: 'Il nord di Ibiza: calette e mercati',
      paginaSito: '/esperienze/spagna/ibiza-nord-calette',
      racconto:
        'Giornata nel nord rurale: Santa Gertrudis con i suoi caffè, le calette di Cala Xarraca e Cala Sant Vicent e, se cade il giorno giusto, il mercato del sabato di Sant Joan o quello di Las Dalias. La domenica si va a Benirràs per il tramonto con i tamburi.',
      tratte: [
        { da: 'Ibiza Town', a: 'Santa Gertrudis', km: 11, minuti: 16 },
        { da: 'Santa Gertrudis', a: 'Cala Xarraca', km: 18, minuti: 24 },
        { da: 'Cala Xarraca', a: 'Cala de Sant Vicent', km: 13, minuti: 18 },
      ],
      luoghi: [
        { nome: 'Santa Gertrudis de Fruitera', gps: [38.99823, 1.42847], fonti: ['osm'] },
        { nome: 'Cala Xarraca', gps: [39.09851, 1.49637], fonti: ['osm'] },
        { nome: 'Cala de Sant Vicent', gps: [39.07567, 1.59033], fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Stesso alloggio a Ibiza.',
      nota: 'Giorni e orari dei mercati non verificati: chiedi in alloggio.',
    },
    {
      numero: 6,
      titolo: 'Da Ibiza a Minorca',
      paginaSito: '/destinazioni/spagna/minorca',
      racconto:
        'Traghetto per Minorca, spesso con cambio o scalo a Mallorca secondo le corse disponibili. Il pomeriggio a Ciutadella, l\'ex capitale, con il porto vecchio e la cattedrale dentro le mura.',
      tratte: [],
      senzaStrada: 'Giornata in traghetto: tra Ibiza e Minorca le corse dirette sono poche, spesso si passa da Palma. Controlla gli orari della stagione prima di prenotare le notti.',
      luoghi: [{ nome: 'Ciutadella, porto vecchio', gps: [39.99208, 3.89785], fonti: ['osm'] }],
      mangiare: [],
      dormire: 'Ciutadella (nome non annotato).',
    },
    {
      numero: 7,
      titolo: 'Ciutadella e il Camí de Cavalls',
      racconto:
        'La mattina un tratto del Camí de Cavalls, il sentiero che fa il giro dell\'isola: vicino a Ciutadella ci sono tratti facili. Il pomeriggio a Cala Macarelleta e Cala Turqueta, tra le calette meno costruite delle Baleari.',
      tratte: [{ da: 'Ciutadella', a: 'Cala Macarelleta (parcheggio e sentiero)', km: 20, minuti: 59 }],
      luoghi: [
        {
          nome: 'Cala Macarelleta',
          gps: [39.93616, 3.93484],
          nota: 'Si arriva a piedi dalla vicina Cala Macarella. D\'estate il parcheggio vicino si riempie presto e l\'accesso in auto può essere limitato: chiedi in alloggio.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Stesso alloggio a Ciutadella.',
      nota: 'Porta acqua e scarpe chiuse: il Camí è sassoso e d\'estate quasi senza ombra.',
    },
    {
      numero: 8,
      titolo: 'Mahón e rientro',
      racconto:
        'Ci siamo spostati verso Mahón, la capitale di oggi, con uno dei porti naturali più profondi del Mediterraneo. Sulla strada un sito talayotico, Torre d\'en Galmés, resti di una civiltà preistorica che esiste solo qui. Poi il volo dall\'aeroporto di Mahón.',
      tratte: [
        { da: 'Ciutadella', a: 'Torre d\'en Galmés', km: 33, minuti: 45 },
        { da: 'Torre d\'en Galmés', a: 'Mahón', km: 18, minuti: 28 },
        { da: 'Mahón', a: 'Aeroporto di Minorca (MAH)', km: 8, minuti: 13 },
      ],
      luoghi: [
        {
          nome: 'Torre d\'en Galmés',
          indirizzo: 'Vicino a Cala en Porter, Alaior',
          gps: [39.90199, 4.11424],
          nota: 'Orari e prezzo non verificati.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Nessun pernottamento.',
    },
  ],
  mappa: {
    percorso: ['Palma', 'Valldemossa', 'Sóller', 'Palma', 'Ibiza', 'Nord', 'Ibiza', 'Ciutadella', 'Torre', 'Mahón'],
    legenda: 'Linea piena: l\'ordine delle tappe, traghetti compresi. Le coste non sono disegnate.',
    notaTempi: 'Tempi su strada senza traffico (OSRM su OpenStreetMap); per i traghetti chilometri in linea d\'aria e tempi del mio viaggio.',
    notaTempiFonti: ['osrm'],
    scalaKm: 50,
  },
  primaDiPartire: [
    {
      titolo: 'Documenti e ingresso',
      righe: [
        { voce: 'Documento', valore: 'Carta d\'identità elettronica o passaporto validi. Spagna in UE e Schengen: niente visto.', fonti: ['vs'] },
        { voce: 'Registrazione', valore: 'Dal 2 dicembre 2024 alloggi e autonoleggi devono registrare i dati degli ospiti (Real Decreto 933/2021): al check-in chiedono più dati del solito.', fonti: ['vs'] },
        { voce: 'Sanità', valore: 'Tessera sanitaria (TEAM) e, consiglia Viaggiare Sicuri, un\'assicurazione con spese mediche e rimpatrio.', fonti: ['vs'] },
      ],
    },
    {
      titolo: 'Traghetti e auto',
      righe: [
        { voce: 'Traghetti', valore: 'Per luglio e agosto prenota presto. Fuori stagione le corse calano molto, e tra Ibiza e Minorca spesso si cambia a Palma.' },
        { voce: 'Auto', valore: 'Serve su tutte e tre le isole, anche a Minorca: senza, molte calette restano fuori portata. Sulla Serra de Tramuntana le strade sono a tornanti e lente.' },
        { voce: 'Guida', valore: 'Controlli alcolemici rigidi, soprattutto nei weekend.', fonti: ['vs'] },
      ],
    },
    {
      titolo: 'Clima, soldi, corrente',
      righe: [
        { voce: 'Quando', valore: 'Maggio-giugno e settembre: mare già buono e meno gente che in alta stagione.' },
        { voce: 'Valuta', valore: 'Euro.' },
        { voce: 'Corrente', valore: '230 V, prese C e F: le spine italiane a due poli entrano, per quella a tre poli in fila serve un adattatore.', fonti: ['prese'] },
        { voce: 'Incendi', valore: 'D\'estate rischio alto: niente fuochi e sigarette spente bene.', fonti: ['vs'] },
      ],
    },
  ],
  emergenze: {
    numeri: [
      { voce: 'Emergenze (numero unico, operatori anche in italiano)', valore: '112', fonti: ['vs'] },
      { voce: 'Consolato Generale di Barcellona, reperibilità fuori orario', valore: '+34 659 790 266', fonti: ['vs'] },
    ],
    ambasciata: [
      {
        nome: 'Consolato Generale d\'Italia a Barcellona',
        cosa: 'Competente per le Baleari. Informazioni lun-ven 09:30-11:30',
        indirizzo: 'Calle Aribau 185, 08021 Barcelona',
        telefono: '+34 93 033 8000 · barcellona.info@esteri.it',
        web: 'consbarcellona.esteri.it',
        stato: 'ufficiale',
        fonti: ['vs', 'rete-bcn'],
      },
      {
        nome: 'Consolato onorario a Palma di Maiorca',
        cosa: 'Isola di Maiorca. Chiuso per ferie dal 10 al 30 agosto',
        indirizzo: 'Plaza de España 10, 2°, 07002 Palma',
        telefono: 'maiorca.onorario@esteri.it',
        stato: 'ufficiale',
        avviso: 'Telefono non pubblicato.',
        fonti: ['rete-bcn'],
      },
      {
        nome: 'Vice Consolato onorario di Ibiza',
        cosa: 'Ibiza e Formentera. Su appuntamento mar-gio 14:00-18:00',
        indirizzo: 'Paseo Vara del Rey 22, -1°, 07800 Ibiza',
        telefono: '+34 628 582 775 (anche WhatsApp) · ibiza.onorario@esteri.it',
        stato: 'ufficiale',
        fonti: ['rete-bcn'],
      },
      {
        nome: 'Vice Consolato onorario di Minorca',
        cosa: 'Su appuntamento lun, mar e gio 10:00-13:00',
        indirizzo: 'Carretera Sant Felip 35, 07720 Es Castell',
        telefono: '+34 871 941 109 · minorca.onorario@esteri.it',
        stato: 'ufficiale',
        fonti: ['rete-bcn'],
      },
    ],
    ospedali: [
      { nome: 'Hospital Universitari Son Espases', cosa: 'Palma, ospedale pubblico di riferimento delle Baleari', telefono: '+34 871 205 000', gps: [39.60701, 2.64475], stato: 'ufficiale', fonti: ['sonespases', 'osm'] },
      { nome: 'Hospital Can Misses', cosa: 'Ibiza, pubblico', stato: 'ufficiale', avviso: 'Telefono non verificato: in emergenza chiama il 112.', fonti: [] },
      { nome: 'Hospital Mateu Orfila', cosa: 'Mahón, pubblico', stato: 'ufficiale', avviso: 'Telefono non verificato: in emergenza chiama il 112.', fonti: [] },
    ],
  },
  contatti: [
    {
      gruppo: 'Trasporti',
      nota: 'Le compagnie dei traghetti cambiano rotte e orari con la stagione: confronta i siti prima di prenotare.',
      voci: [
        { nome: 'Tren de Sóller', cosa: 'Trenino storico Palma-Sóller', web: 'trendesoller.com', telefono: '+34 971 752 028', stato: 'ufficiale', fonti: ['soller'] },
        { nome: 'Baleària', cosa: 'Traghetti tra le isole', web: 'balearia.com', stato: 'non-provato', fonti: [] },
        { nome: 'Trasmed', cosa: 'Traghetti tra le isole', web: 'trasmed.com', stato: 'non-provato', fonti: [] },
      ],
    },
  ],
  budget: {
    righe: [
      { voce: 'Voli Italia-Palma e Mahón-Italia' },
      { voce: 'Alloggi, 7 notti' },
      { voce: 'Traghetto Palma-Ibiza' },
      { voce: 'Traghetto Ibiza-Minorca' },
      { voce: 'Tre noleggi auto', nota: 'più carburante e parcheggi' },
      { voce: 'Tren de Sóller, andata e ritorno', costo: '30 €' },
      { voce: 'Cattedrale di Palma' },
      { voce: 'Club a Ibiza (facoltativo)' },
      { voce: 'Pasti' },
    ],
    nota: 'Le cifre sono tariffe ufficiali 2026. Il resto lo riempi tu: alloggi e traghetti non sono annotati nei miei documenti.',
  },
  valigia: [
    { gruppo: 'Documenti', voci: ['Carta d\'identità o passaporto', 'Tessera sanitaria (TEAM)', 'Patente', 'Prenotazioni dei traghetti', 'Carta di credito', 'Questa guida stampata'] },
    { gruppo: 'Mare e sentieri', voci: ['Costume e telo', 'Scarpe chiuse per il Camí de Cavalls', 'Cappello e crema solare', 'Maschera da snorkeling', 'Borsa stagna'] },
    { gruppo: 'Altro', voci: ['Borraccia', 'Power bank', 'Strato per la sera in traghetto', 'Mappe offline delle tre isole'] },
  ],
  lingua: {
    nome: 'Spagnolo e catalano',
    pronuncia: 'Sulle isole si parlano spagnolo e catalano (nelle varianti locali): cartelli e nomi di luogo sono spesso in catalano. Lo spagnolo si legge quasi come si scrive.',
  },
  frasario: [
    {
      gruppo: 'Saluti e cortesia',
      frasi: [
        { it: 'Buongiorno', loc: 'buenos días', nota: 'catalano: bon dia' },
        { it: 'Grazie', loc: 'gracias', nota: 'catalano: gràcies' },
        { it: 'Per favore', loc: 'por favor', nota: 'catalano: si us plau' },
        { it: 'Scusi', loc: 'perdone' },
        { it: 'Parla inglese?', loc: '¿habla inglés?' },
      ],
    },
    {
      gruppo: 'Muoversi',
      frasi: [
        { it: 'Dov\'è il porto?', loc: '¿dónde está el puerto?' },
        { it: 'A che ora parte il traghetto?', loc: '¿a qué hora sale el ferry?' },
        { it: 'Quanto costa?', loc: '¿cuánto cuesta?' },
        { it: 'Spiaggia · Caletta', loc: 'playa · cala' },
      ],
    },
    {
      gruppo: 'A tavola',
      frasi: [
        { it: 'Un tavolo per quattro', loc: 'una mesa para cuatro' },
        { it: 'Il conto, per favore', loc: 'la cuenta, por favor' },
        { it: 'Acqua naturale', loc: 'agua sin gas' },
      ],
    },
    {
      gruppo: 'Emergenze',
      frasi: [
        { it: 'Aiuto!', loc: '¡socorro!' },
        { it: 'Ho bisogno di un medico', loc: 'necesito un médico' },
        { it: 'Ospedale · Farmacia', loc: 'hospital · farmacia' },
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
    { titolo: 'Il viaggio: Baleari', path: '/viaggi/baleari-itinerario' },
    { titolo: 'Mallorca', path: '/destinazioni/spagna/mallorca' },
    { titolo: 'Ibiza', path: '/destinazioni/spagna/ibiza' },
    { titolo: 'Minorca', path: '/destinazioni/spagna/minorca' },
    { titolo: 'Trekking nella Serra de Tramuntana', path: '/esperienze/spagna/serra-tramuntana-trekking' },
    { titolo: 'Il nord di Ibiza e le calette', path: '/esperienze/spagna/ibiza-nord-calette' },
  ],
  nonVerificato: [
    'Orari e prezzi della Cattedrale di Palma (sito non leggibile in automatico)',
    'Orari e prezzi di Torre d\'en Galmés e dei musei di Dalt Vila',
    'Orari e prezzi dei traghetti e quali compagnie fanno Ibiza-Minorca nella tua stagione',
    'Telefoni degli ospedali di Ibiza e Mahón',
    'Giorni dei mercati di Sant Joan e Las Dalias',
    'Nomi di alloggi e ristoranti: non annotati nei miei documenti',
  ],
  consultate: 'Consultate il 2 novembre 2026. Prezzi e orari cambiano: prima di pagare, guarda sempre la fonte ufficiale.',
  fonti: [
    { id: 'vs', titolo: 'Viaggiare Sicuri (Farnesina), scheda Spagna', url: 'https://www.viaggiaresicuri.it/schede_paese/ESP.json' },
    { id: 'rete-bcn', titolo: 'Consolato Generale di Barcellona, rete consolare', url: 'https://consbarcellona.esteri.it/it/chi-siamo/la-rete-consolare/' },
    { id: 'soller', titolo: 'Tren de Sóller', url: 'https://trendesoller.com/en/' },
    { id: 'sonespases', titolo: 'Hospital Universitari Son Espases', url: 'https://www.hospitalsonespases.es/' },
    { id: 'prese', titolo: 'WorldStandards, prese elettriche in Spagna', url: 'https://www.worldstandards.eu/electricity/plug-voltage-by-country/spain/' },
    { id: 'osm', titolo: 'OpenStreetMap / Nominatim (coordinate)', url: 'https://nominatim.openstreetmap.org' },
    { id: 'osrm', titolo: 'OSRM su dati OpenStreetMap (distanze e tempi)', url: 'https://router.project-osrm.org' },
  ],
}
