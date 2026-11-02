import type { Guida } from './types'
import {
  ambasciataParigi, consolati, fontiFrancia, frasarioFrancese, linguaFrancese, numeriFrancese,
  numeriFrancia, primaDiPartireFrancia, valigiaDocumentiFrancia,
} from './lotti/francia-comune'

/**
 * Guida PDF «Normandia e Bretagna». Racconto da src/content/viaggi/41-normandia-bretagna.md e
 * src/content/viaggi-dati/normandia-bretagna.ts. Orari, prezzi e avvisi verificati il 2/11/2026
 * sui siti ufficiali (elencati in `fonti`). Coordinate: Base Adresse Nationale (centri dei comuni
 * dove manca un indirizzo) e src/content/mappe/coordinate.ts. Tempi: OSRM, traffico libero.
 */

export const guidaNormandiaBretagna: Guida = {
  slug: 'normandia-bretagna',
  tripSlug: 'normandia-bretagna',
  paese: 'Francia',
  titolo: 'Normandia e Bretagna',
  sottotitolo: 'Dodici giorni in auto da Rouen a Vannes: le spiagge dello sbarco, il Mont-Saint-Michel dormendo nella baia, la costa bretone a piedi.',
  autore: 'Rick',
  verificatoAl: 'novembre 2026',
  intro: [
    'Dodici giorni e undici notti con amici e un\'auto a noleggio, da Rouen fino al Golfo del Morbihan. La Normandia è la parte densa, di storia; in Bretagna il viaggio rallenta.',
    'Sul sito c\'è il racconto. Qui ci sono le distanze tra le tappe, indirizzi, orari e biglietti, gli avvisi sui cantieri, i numeri utili e un frasario minimo.',
    'Due notizie da sapere prima di partire, verificate a novembre 2026: il museo dell\'Arazzo di Bayeux è chiuso per lavori fino all\'autunno 2027, e il monumento della Pointe du Hoc è in restauro fino a metà 2027.',
  ],
  cosaInPiu: [
    'Chilometri e tempi di guida per ogni tappa',
    'Orari e prezzi aggiornati di Mémorial de Caen, abbazia del Mont-Saint-Michel e alignements di Carnac',
    'Gli avvisi sui cantieri: Arazzo di Bayeux e Pointe du Hoc',
    'Numeri di emergenza, Consolato d\'Italia a Parigi, ospedali di Bayeux e Vannes',
    'Regole per l\'auto in Francia, lista per la valigia e frasario francese',
  ],
  tappe: [
    { nome: 'Rouen', gps: [49.44027, 1.09363], giorno: 'G1', etichetta: 'destra' },
    { nome: 'Caen', gps: [49.19, -0.38], giorno: 'G2', etichetta: 'sotto' },
    { nome: 'Bayeux', gps: [49.27423, -0.70091], giorno: 'G2-G4', etichetta: 'sotto' },
    { nome: 'Omaha Beach', gps: [49.3479, -0.8498], giorno: 'G3', etichetta: 'sopra' },
    { nome: 'Étretat', gps: [49.70535, 0.20975], giorno: 'G5', etichetta: 'sopra' },
    { nome: 'Honfleur', gps: [49.42045, 0.23259], giorno: 'G5', etichetta: 'destra' },
    { nome: 'Mont-Saint-Michel', gps: [48.63595, -1.51146], giorno: 'G6-G7', etichetta: 'sotto' },
    { nome: 'Saint-Malo', gps: [48.65059, -2.0232], giorno: 'G7', etichetta: 'sopra' },
    { nome: 'Dinan', gps: [48.44657, -2.05392], giorno: 'G8', etichetta: 'sotto' },
    { nome: 'Ploumanac\'h', gps: [48.82792, -3.48459], giorno: 'G8-G9', etichetta: 'sopra' },
    { nome: 'Crozon', gps: [48.23889, -4.46993], giorno: 'G10', etichetta: 'sinistra' },
    { nome: 'Carnac', gps: [47.60215, -3.06607], giorno: 'G11', etichetta: 'sotto' },
    { nome: 'Vannes', gps: [47.65997, -2.75219], giorno: 'G12', etichetta: 'destra' },
  ],
  giorni: [
    {
      numero: 1,
      titolo: 'Rouen',
      paginaSito: '/destinazioni/francia/normandia',
      racconto:
        'Abbiamo cominciato da Rouen: la cattedrale che Monet ha dipinto tante volte, il Gros-Horloge sopra la via e la piazza del rogo di Giovanna d\'Arco. Un giorno basta per entrare nel ritmo.',
      tratte: [],
      senzaStrada: 'Il centro di Rouen si gira a piedi.',
      luoghi: [
        {
          nome: 'Cattedrale di Notre-Dame di Rouen',
          indirizzo: 'Place de la Cathédrale, 76000 Rouen',
          orari: 'Lunedì 14-18; martedì-sabato 9-12 e 14-18; domenica e festivi 8-18',
          web: 'cathedrale-rouen.net',
          gps: [49.44027, 1.09363],
          fonti: ['rouen-cattedrale', 'ban'],
        },
      ],
      mangiare: [],
      dormire: 'Rouen (nome non annotato).',
    },
    {
      numero: 2,
      titolo: 'Mémorial de Caen, poi Bayeux',
      paginaSito: '/esperienze/francia/spiagge-sbarco',
      racconto:
        'Spostamento a Bayeux, la base per le spiagge, ma prima il Mémorial de Caen. L\'ordine conta: senza il contesto del museo, le spiagge restano solo spiagge.',
      tratte: [
        { da: 'Rouen', a: 'Caen, Mémorial', km: 131, minuti: 87 },
        { da: 'Caen', a: 'Bayeux', km: 27, minuti: 24 },
      ],
      luoghi: [
        {
          nome: 'Mémorial de Caen',
          indirizzo: 'Esplanade Général Eisenhower, 14050 Caen',
          orari: 'Da aprile a settembre 9-19 tutti i giorni. Chiuso il 4, 18, 25 novembre e il 2, 9, 16 dicembre 2026. Biglietteria chiusa 1 ora e 15 prima della chiusura.',
          biglietto: '20,80 € (18-65 anni); 10-18 anni e over 65 18,50 €; studenti 6 €',
          telefono: '+33 2 31 06 06 44',
          web: 'memorial-caen.fr',
          nota: 'Il museo stima 4 ore di visita: arrivaci la mattina.',
          fonti: ['memorial'],
        },
      ],
      mangiare: [],
      dormire: 'Bayeux, tre notti (nome non annotato).',
    },
    {
      numero: 3,
      titolo: 'Le spiagge dello sbarco',
      racconto:
        'Una giornata intera sui settori dello sbarco: Omaha Beach, il cimitero americano di Colleville, la Pointe du Hoc e il porto artificiale di Arromanches. Omaha è una spiaggia normalissima, ed è questo che la rende difficile da reggere.',
      tratte: [
        { da: 'Bayeux', a: 'Colleville-sur-Mer (Omaha, cimitero americano)', km: 26, minuti: 23 },
        { da: 'Colleville', a: 'Pointe du Hoc', km: 12, minuti: 14 },
        { da: 'Pointe du Hoc', a: 'Arromanches', km: 38, minuti: 39 },
        { da: 'Arromanches', a: 'Bayeux', km: 10, minuti: 14 },
      ],
      luoghi: [
        {
          nome: 'Normandy American Cemetery',
          indirizzo: 'Colleville-sur-Mer, sopra Omaha Beach',
          web: 'abmc.gov',
          gps: [49.3479, -0.8498],
          nota: 'Gestito dall\'American Battle Monuments Commission. Orari sul sito ABMC.',
          fonti: ['abmc-colleville', 'ban'],
        },
        {
          nome: 'Pointe du Hoc Ranger Monument',
          indirizzo: 'Cricqueville-en-Bessin, 8 miglia a ovest del cimitero americano',
          web: 'abmc.gov',
          nota: 'Il monumento è in un grande restauro che durerà fino a metà 2027: controlla sul sito ABMC che cosa è aperto.',
          fonti: ['abmc-hoc'],
        },
      ],
      mangiare: [],
      dormire: 'Bayeux.',
    },
    {
      numero: 4,
      titolo: 'Bayeux',
      paginaSito: '/esperienze/francia/arazzo-bayeux',
      racconto:
        'La mattina era per l\'Arazzo di Bayeux, il pomeriggio libero a Bayeux o al mare di Cabourg. Oggi il museo dell\'Arazzo è chiuso: la mattina va ripensata.',
      tratte: [],
      senzaStrada: 'Giornata a Bayeux, a piedi.',
      luoghi: [
        {
          nome: 'Musée de la Tapisserie de Bayeux',
          indirizzo: 'Rue de Nesmond, 14400 Bayeux',
          orari: 'Chiuso per lavori di rinnovamento per due anni; riapertura prevista nell\'autunno 2027',
          web: 'bayeuxmuseum.com',
          gps: [49.27423, -0.70091],
          nota: 'Restano aperti gli altri due musei della città: il Musée Mémorial de la Bataille de Normandie e il MAHB (Musée d\'Art et d\'Histoire Baron Gérard).',
          fonti: ['bayeux-musei', 'ban'],
        },
      ],
      mangiare: [],
      dormire: 'Bayeux.',
    },
    {
      numero: 5,
      titolo: 'Étretat e Honfleur',
      racconto:
        'Verso la costa: le falesie di Étretat con le arcate di gesso sul mare, poi Honfleur e il Vieux Bassin. Nel tardo pomeriggio verso il Mont-Saint-Michel. In questi giorni a tavola c\'erano camembert e sidro, con il calvados a metà pasto.',
      tratte: [
        { da: 'Bayeux', a: 'Étretat', km: 144, minuti: 109 },
        { da: 'Étretat', a: 'Honfleur', km: 46, minuti: 48 },
        { da: 'Honfleur', a: 'Mont-Saint-Michel', km: 187, minuti: 131 },
      ],
      luoghi: [
        { nome: 'Falesie di Étretat', indirizzo: 'Étretat (Seine-Maritime)', gps: [49.70535, 0.20975], nota: 'Accesso libero ai sentieri sulle falesie. Tieniti lontano dal bordo.', fonti: ['ban'] },
        { nome: 'Vieux Bassin di Honfleur', indirizzo: 'Quai Sainte-Catherine, 14600 Honfleur', gps: [49.42045, 0.23259], fonti: ['ban'] },
      ],
      mangiare: [],
      dormire: 'Verso il Mont-Saint-Michel (nome non annotato).',
      nota: 'È la giornata più lunga in auto: quasi 380 km.',
    },
    {
      numero: 6,
      titolo: 'Mont-Saint-Michel',
      paginaSito: '/esperienze/francia/mont-saint-michel',
      racconto:
        'Il Mont va vissuto dormendo nella baia. Siamo arrivati nel primo pomeriggio e abbiamo camminato sulla passerella con il Mont che cresceva davanti. L\'abbazia l\'abbiamo visitata in tarda giornata, quando i pullman erano ripartiti.',
      tratte: [],
      senzaStrada: 'Dalla baia al Mont a piedi, sulla passerella.',
      luoghi: [
        {
          nome: 'Abbazia del Mont-Saint-Michel',
          indirizzo: 'Le Mont-Saint-Michel, 50170',
          orari: 'Dal 1° maggio al 31 agosto 9-19; dal 1° settembre al 30 aprile 9:30-18. Chiusa 1/1, 1/5, 25/12. Ultimo ingresso 1 ora prima.',
          biglietto: '13 € da ottobre a marzo, 16 € da aprile a settembre; gratis sotto i 18 anni e per i residenti UE sotto i 26',
          web: 'abbaye-mont-saint-michel.fr',
          gps: [48.63595, -1.51146],
          nota: 'Il villaggio è un comune: si entra liberamente, senza biglietto. Il biglietto serve solo per l\'abbazia.',
          fonti: ['msm'],
        },
      ],
      mangiare: [],
      dormire: 'Nella baia del Mont-Saint-Michel (nome non annotato).',
      nota: 'Controlla il calendario delle grandi maree prima di partire. La baia a piedi non si attraversa mai da soli.',
    },
    {
      numero: 7,
      titolo: 'Il Mont all\'alba, poi Saint-Malo',
      paginaSito: '/esperienze/francia/saint-malo-bastioni',
      racconto:
        'Siamo tornati a guardare il Mont all\'alba, poi siamo entrati in Bretagna. A Saint-Malo il giro dei bastioni con la marea, e a Cancale, lì vicino, le ostriche.',
      tratte: [
        { da: 'Mont-Saint-Michel', a: 'Saint-Malo', km: 55, minuti: 49 },
        { da: 'Saint-Malo', a: 'Cancale', km: 14, minuti: 22 },
      ],
      luoghi: [
        { nome: 'Bastioni di Saint-Malo (intra-muros)', indirizzo: 'Porte Saint-Vincent, 35400 Saint-Malo', gps: [48.65059, -2.0232], nota: 'Il giro delle mura è libero.', fonti: ['ban'] },
      ],
      mangiare: [],
      dormire: 'Saint-Malo (nome non annotato).',
    },
    {
      numero: 8,
      titolo: 'Dinan e la Côte de Granit Rose',
      racconto:
        'Dinan, borgo medievale chiuso nelle mura. Poi la costa nord, con la prima tappa sulla Côte de Granit Rose. Le distanze bretoni sulla carta sembrano piccole e non lo sono.',
      tratte: [
        { da: 'Cancale', a: 'Dinan', km: 36, minuti: 38 },
        { da: 'Dinan', a: 'Ploumanac\'h (Perros-Guirec)', km: 137, minuti: 110 },
      ],
      luoghi: [{ nome: 'Dinan, città murata', indirizzo: 'Dinan (Côtes-d\'Armor)', gps: [48.44657, -2.05392], fonti: ['ban'] }],
      mangiare: [],
      dormire: 'Zona di Perros-Guirec, due notti (nome non annotato).',
    },
    {
      numero: 9,
      titolo: 'Ploumanac\'h e il GR34',
      paginaSito: '/esperienze/francia/gr34-sentiero-doganieri',
      racconto:
        'La mattina a Ploumanac\'h, tra i blocchi di granito rosa. Poi un tratto del GR34, il sentiero dei doganieri che gira tutta la costa: il paesaggio cambia ogni due ore di cammino.',
      tratte: [],
      senzaStrada: 'A piedi sul GR34 da Ploumanac\'h: scegli il tratto e torna indietro sullo stesso sentiero.',
      luoghi: [{ nome: 'Ploumanac\'h e il Sentier des Douaniers', indirizzo: 'Ploumanac\'h, 22700 Perros-Guirec', gps: [48.82792, -3.48459], fonti: ['ban'] }],
      mangiare: [],
      dormire: 'Zona di Perros-Guirec.',
      nota: 'Sulle spiagge atlantiche le correnti di risacca sono un pericolo serio: fai il bagno solo dove c\'è sorveglianza.',
    },
    {
      numero: 10,
      titolo: 'Penisola di Crozon',
      racconto: 'Ci siamo spostati a ovest, sulla penisola di Crozon: falesie e pochissima gente.',
      tratte: [{ da: 'Ploumanac\'h', a: 'Crozon', km: 130, minuti: 139 }],
      luoghi: [{ nome: 'Penisola di Crozon', indirizzo: 'Crozon (Finistère)', gps: [48.23889, -4.46993], fonti: ['ban'] }],
      mangiare: [],
      dormire: 'Penisola di Crozon (nome non annotato).',
    },
    {
      numero: 11,
      titolo: 'Carnac e il Golfo del Morbihan',
      paginaSito: '/esperienze/francia/carnac-megaliti',
      racconto:
        'Gli allineamenti di Carnac, poi il Golfo del Morbihan, con una possibile gita a Gavrinis. La sera galettes salate e crêpes dolci, con il sidro bevuto in scodella.',
      tratte: [{ da: 'Crozon', a: 'Carnac', km: 156, minuti: 133 }],
      luoghi: [
        {
          nome: 'Alignements de Carnac, Maison des Mégalithes',
          indirizzo: 'Carnac (Morbihan)',
          orari: 'Maison des Mégalithes: aprile-giugno e settembre 9:30-18; luglio-agosto 9:30-19; ottobre-marzo 10-13 e 14-17. Chiusa 1/1, 1/5, 25/12.',
          biglietto: 'Visita guidata negli allineamenti 13 €. Il percorso pedonale intorno ai siti è libero e gratuito; alcuni siti si visitano liberamente da ottobre a fine marzo',
          web: 'menhirs-carnac.fr',
          gps: [47.58366, -3.07944],
          fonti: ['carnac', 'carnac-home'],
        },
      ],
      mangiare: [],
      dormire: 'Carnac o Vannes (nome non annotato).',
    },
    {
      numero: 12,
      titolo: 'Partenza',
      racconto: 'L\'ultima mattina a Vannes o ad Auray, poi si rientra.',
      tratte: [{ da: 'Carnac', a: 'Vannes', km: 31, minuti: 27 }],
      luoghi: [],
      mangiare: [],
      dormire: 'Nessun pernottamento.',
    },
  ],
  mappa: {
    percorso: ['Rouen', 'Caen', 'Bayeux', 'Omaha', 'Bayeux', 'Étretat', 'Honfleur', 'Mont-Saint-Michel', 'Saint-Malo', 'Dinan', 'Ploumanac', 'Crozon', 'Carnac', 'Vannes'],
    acque: [
      {
        nome: 'Manica',
        etichetta: [49.9, -1.5],
        punti: [[49.75, 0.25], [49.45, 0.15], [49.3, -0.3], [49.36, -0.85], [49.4, -1.2], [49.7, -1.3], [49.65, -1.6], [49.2, -1.6], [48.65, -1.55], [48.68, -2.1], [48.85, -3.0], [48.83, -3.5], [48.72, -4.0], [48.6, -4.6], [50.1, -4.6], [50.1, 0.3]],
      },
    ],
    legenda: 'Linea piena: il percorso in auto da Rouen a Vannes. Schema non in scala per le coste.',
    notaTempi: 'Tempi stimati senza traffico (OSRM su OpenStreetMap): aggiungi un 15-25% per soste e strade di campagna.',
    notaTempiFonti: ['osrm'],
    scalaKm: 50,
  },
  primaDiPartire: [
    {
      titolo: 'Quando e come',
      righe: [
        { voce: 'Stagione', valore: 'Maggio-giugno oppure settembre.' },
        { voce: 'Auto', valore: 'Indispensabile: le spiagge dello sbarco, Crozon e la costa bretone non si fanno con i mezzi in un viaggio di dodici giorni.' },
        { voce: 'Maree', valore: 'Al Mont-Saint-Michel e a Saint-Malo il paesaggio cambia con la marea: guarda il calendario delle grandi maree prima di fissare le date.' },
        { voce: 'Cantieri', valore: 'Arazzo di Bayeux chiuso fino all\'autunno 2027; Pointe du Hoc in restauro fino a metà 2027.', fonti: ['bayeux-musei', 'abmc-hoc'] },
      ],
    },
    ...primaDiPartireFrancia(true),
  ],
  emergenze: {
    numeri: numeriFrancia,
    ambasciata: [consolati.parigi, ambasciataParigi],
    ospedali: [
      { nome: 'Centre hospitalier Aunay-Bayeux', cosa: 'Ospedale di Bayeux, la base per le spiagge', indirizzo: '13 rue de Nesmond, 14400 Bayeux', telefono: '+33 2 31 51 51 51', gps: [49.27483, -0.70191], stato: 'ufficiale', fonti: ['ch-bayeux', 'ban'] },
      { nome: 'Centre hospitalier Bretagne Atlantique', cosa: 'Ospedale di Vannes, per Carnac e il Morbihan', indirizzo: '20 boulevard Général Maurice Guillaudot, 56017 Vannes', telefono: '+33 2 97 01 41 41', stato: 'ufficiale', fonti: ['chba'] },
    ],
  },
  contatti: [
    {
      gruppo: 'Siti e musei',
      voci: [
        { nome: 'Mémorial de Caen', cosa: 'Biglietteria online', telefono: '+33 2 31 06 06 44', web: 'memorial-caen.fr', stato: 'ufficiale', fonti: ['memorial'] },
        { nome: 'Abbazia del Mont-Saint-Michel', cosa: 'Centre des monuments nationaux, biglietti online', web: 'abbaye-mont-saint-michel.fr', stato: 'ufficiale', fonti: ['msm'] },
        { nome: 'Musei di Bayeux', cosa: 'Mémorial de la Bataille de Normandie, MAHB, notizie sull\'Arazzo', web: 'bayeuxmuseum.com', stato: 'ufficiale', fonti: ['bayeux-musei'] },
        { nome: 'American Battle Monuments Commission', cosa: 'Cimitero di Colleville e Pointe du Hoc', web: 'abmc.gov', stato: 'ufficiale', fonti: ['abmc-colleville'] },
        { nome: 'Alignements de Carnac', cosa: 'Visite guidate, prenotazione online', web: 'menhirs-carnac.fr', stato: 'ufficiale', fonti: ['carnac'] },
      ],
    },
  ],
  budget: {
    righe: [
      { voce: 'Noleggio auto, 12 giorni' },
      { voce: 'Carburante e pedaggi' },
      { voce: 'Alloggi, 11 notti' },
      { voce: 'Mémorial de Caen', costo: '20,80 €' },
      { voce: 'Abbazia del Mont-Saint-Michel', costo: '13-16 €', nota: 'secondo la stagione' },
      { voce: 'Visita guidata a Carnac', costo: '13 €' },
      { voce: 'Mangiare', nota: 'galettes, ostriche a Cancale, sidro' },
    ],
    nota: 'Tariffe piene verificate a novembre 2026. Le righe vuote le riempi tu: nei miei appunti i costi di auto e alloggi non ci sono.',
  },
  valigia: [
    valigiaDocumentiFrancia,
    { gruppo: 'Vestiti', voci: ['Giacca impermeabile', 'Strati: maglione e pile', 'Scarpe da camminata per il GR34 e le falesie', 'Costume'] },
    { gruppo: 'Auto', voci: ['Patente', 'Giubbotto catarifrangente e triangolo', 'Calendario delle maree salvato nel telefono'] },
  ],
  lingua: linguaFrancese,
  frasario: frasarioFrancese,
  numeri: numeriFrancese,
  pagineSito: [
    { titolo: 'Il viaggio completo', path: '/viaggi/normandia-bretagna' },
    { titolo: 'Normandia, la scheda', path: '/destinazioni/francia/normandia' },
    { titolo: 'Bretagna, la scheda', path: '/destinazioni/francia/bretagna' },
    { titolo: 'Le spiagge dello sbarco', path: '/esperienze/francia/spiagge-sbarco' },
    { titolo: 'Il Mont-Saint-Michel', path: '/esperienze/francia/mont-saint-michel' },
    { titolo: 'Il GR34', path: '/esperienze/francia/gr34-sentiero-doganieri' },
    { titolo: 'I megaliti di Carnac', path: '/esperienze/francia/carnac-megaliti' },
  ],
  nonVerificato: [
    'Orari del cimitero americano di Colleville e parti aperte della Pointe du Hoc durante il restauro',
    'Orari invernali del Mémorial de Caen (il sito pubblica quelli da aprile a settembre)',
    'Visite a Gavrinis: orari e prezzi',
    'Ospedali lungo la costa nord della Bretagna (Saint-Malo, Lannion, Crozon)',
    'Nomi degli alloggi e dei ristoranti: non annotati',
  ],
  consultate: 'Consultate il 2 novembre 2026. Prima di pagare guarda sempre il sito ufficiale.',
  fonti: [
    ...fontiFrancia,
    { id: 'rouen-cattedrale', titolo: 'Cattedrale di Rouen, orari', url: 'https://www.cathedrale-rouen.net/' },
    { id: 'memorial', titolo: 'Mémorial de Caen, orari, tariffe e contatti', url: 'https://www.memorial-caen.fr/' },
    { id: 'abmc-colleville', titolo: 'ABMC, Normandy American Cemetery', url: 'https://www.abmc.gov/cemeteries-memorials/europe/normandy-american-cemetery' },
    { id: 'abmc-hoc', titolo: 'ABMC, Pointe du Hoc Ranger Monument (restauro fino a metà 2027)', url: 'https://www.abmc.gov/cemeteries-memorials/europe/pointe-du-hoc-ranger-monument' },
    { id: 'bayeux-musei', titolo: 'Musei di Bayeux, chiusura della Tapisserie fino al 2027', url: 'https://www.bayeuxmuseum.com/' },
    { id: 'msm', titolo: 'Centre des monuments nationaux, abbazia del Mont-Saint-Michel, informazioni pratiche', url: 'https://www.abbaye-mont-saint-michel.fr/visiter/informations-pratiques' },
    { id: 'carnac', titolo: 'Centre des monuments nationaux, Alignements de Carnac, informazioni pratiche', url: 'https://www.menhirs-carnac.fr/visiter/informations-pratiques' },
    { id: 'carnac-home', titolo: 'Alignements de Carnac, tariffa della visita guidata', url: 'https://www.menhirs-carnac.fr/' },
    { id: 'ch-bayeux', titolo: 'Centre hospitalier Aunay-Bayeux', url: 'https://www.ch-bayeux.fr/' },
    { id: 'chba', titolo: 'Centre hospitalier Bretagne Atlantique (Vannes)', url: 'https://www.ch-bretagne-atlantique.fr/' },
  ],
}
