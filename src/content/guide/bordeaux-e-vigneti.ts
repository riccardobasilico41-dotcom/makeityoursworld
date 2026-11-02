import type { Guida } from './types'
import {
  ambasciataParigi, consolati, fontiFrancia, frasarioFrancese, linguaFrancese, numeriFrancese,
  numeriFrancia, primaDiPartireFrancia, valigiaDocumentiFrancia,
} from './lotti/francia-comune'

/**
 * Guida PDF «Bordeaux e i suoi vigneti». Racconto da src/content/viaggi/43-bordeaux-e-vigneti.md e
 * src/content/viaggi-dati/bordeaux-e-vigneti.ts. Contatti e tariffe verificati il 2/11/2026 sui siti
 * ufficiali (in `fonti`). Coordinate: Base Adresse Nationale e OpenStreetMap. Tempi: OSRM.
 */

export const guidaBordeaux: Guida = {
  slug: 'bordeaux-e-vigneti',
  tripSlug: 'bordeaux-e-vigneti',
  paese: 'Francia',
  titolo: 'Bordeaux e i suoi vigneti',
  sottotitolo: 'Sette giorni con base in città: Saint-Émilion, Pomerol, il Médoc, il Sauternes e un giorno sull\'oceano ad Arcachon.',
  autore: 'Rick',
  verificatoAl: 'novembre 2026',
  intro: [
    'Sette giorni e sei notti con amici, sempre nello stesso alloggio a Bordeaux. Due giorni a piedi in città, quattro in auto tra le due rive del vigneto e il Sauternes, l\'ultimo sull\'oceano.',
    'Sul sito c\'è il racconto. Qui ci sono le distanze dalla città a ogni zona, i contatti degli uffici del turismo, le regole su vino e guida, i numeri utili e un frasario minimo.',
    'La regola dei giorni di vigneto: chi guida non beve. In alternativa un\'escursione accompagnata, oppure si sputa in degustazione, che lì è normale.',
  ],
  cosaInPiu: [
    'Chilometri e tempi da Bordeaux a Saint-Émilion, Pomerol, Graves, Médoc, Sauternes e Pilat',
    'Come si prenota la visita della chiesa monolitica di Saint-Émilion',
    'Tariffe del parcheggio della Dune du Pilat per stagione',
    'Numeri di emergenza, consolati, ospedale universitario di Bordeaux',
    'Regole per l\'auto in Francia, lista per la valigia e frasario francese',
  ],
  tappe: [
    { nome: 'Bordeaux', gps: [44.84146, -0.57049], giorno: 'G1-G2', etichetta: 'sinistra' },
    { nome: 'Saint-Émilion', gps: [44.89326, -0.15631], giorno: 'G3', etichetta: 'destra' },
    { nome: 'Pomerol', gps: [44.9318, -0.20381], giorno: 'G4', etichetta: 'sopra' },
    { nome: 'Pessac (Graves)', gps: [44.78747, -0.67593], giorno: 'G4', etichetta: 'sotto' },
    { nome: 'Margaux', gps: [45.03531, -0.66974], giorno: 'G5', etichetta: 'destra' },
    { nome: 'Pauillac', gps: [45.19514, -0.76992], giorno: 'G5', etichetta: 'destra' },
    { nome: 'Sauternes', gps: [44.5353, -0.34283], giorno: 'G6', etichetta: 'destra' },
    { nome: 'Dune du Pilat', gps: [44.57684, -1.22464], giorno: 'G7', etichetta: 'sotto' },
  ],
  giorni: [
    {
      numero: 1,
      titolo: 'Bordeaux città',
      paginaSito: '/destinazioni/francia/bordeaux',
      racconto:
        'Il primo giorno l\'abbiamo fatto a piedi: Place de la Bourse con il Miroir d\'eau, il centro settecentesco, il quartiere dei Chartrons. La sera un\'entrecôte à la bordelaise.',
      tratte: [],
      senzaStrada: 'Il centro si gira a piedi; il tram collega la Bourse ai Chartrons.',
      luoghi: [
        { nome: 'Place de la Bourse e Miroir d\'eau', indirizzo: 'Place de la Bourse, 33000 Bordeaux', gps: [44.84146, -0.57049], nota: 'Accesso libero.', fonti: ['ban'] },
        {
          nome: 'Office de tourisme de Bordeaux',
          indirizzo: '12 cours du XXX Juillet, 33000 Bordeaux',
          orari: 'Lunedì-sabato 9-18; domenica e festivi 10-17',
          telefono: '+33 5 56 00 66 00',
          web: 'bordeaux-tourisme.com',
          gps: [44.84365, -0.57436],
          nota: 'Vende il CityPass (24, 48, 72 o 96 ore: Cité du Vin, trasporti pubblici, musei). Il prezzo è sul sito.',
          fonti: ['ot-bordeaux', 'ban'],
        },
      ],
      mangiare: [],
      dormire: 'Bordeaux città, sei notti nello stesso alloggio (nome non annotato).',
      nota: 'Per entrare in auto nella zona a basse emissioni di Bordeaux serve il bollino Crit\'Air.',
    },
    {
      numero: 2,
      titolo: 'La Cité du Vin e i Chartrons',
      racconto:
        'La mattina alla Cité du Vin, il modo più ordinato per capire il vigneto prima di andarci. Il pomeriggio di nuovo ai Chartrons, tra gli ex magazzini dei commercianti di vino, con un canelé per merenda.',
      tratte: [],
      senzaStrada: 'Dalla Bourse alla Cité du Vin sono circa 3 km lungo la Garonna: a piedi o in tram.',
      luoghi: [
        {
          nome: 'La Cité du Vin',
          indirizzo: '134 quai de Bacalan, 33300 Bordeaux',
          web: 'laciteduvin.com',
          gps: [44.86237, -0.55002],
          nota: 'Biglietto con orario d\'ingresso, compreso il bicchiere al belvedere. Orari e prezzi cambiano con la stagione: conviene controllare su laciteduvin.com. Compresa nel CityPass.',
          fonti: ['osm', 'ot-bordeaux'],
        },
      ],
      mangiare: [],
      dormire: 'Bordeaux città.',
    },
    {
      numero: 3,
      titolo: 'Saint-Émilion',
      paginaSito: '/esperienze/francia/saint-emilion',
      racconto:
        'Una giornata intera sulla riva destra. La chiesa monolitica, scavata nella roccia, si visita solo con la guida; poi il borgo medievale e una degustazione su appuntamento.',
      tratte: [
        { da: 'Bordeaux', a: 'Saint-Émilion', km: 39, minuti: 42 },
        { da: 'Saint-Émilion', a: 'Bordeaux', km: 39, minuti: 43 },
      ],
      luoghi: [
        {
          nome: 'Saint-Émilion souterrain (chiesa monolitica)',
          indirizzo: 'Partenza da Place de l\'Église Monolithe, 33330 Saint-Émilion',
          orari: 'Solo visita guidata, 45 minuti-1 ora. Orari sul sito o all\'ufficio del turismo.',
          biglietto: 'Ridotto 6-17 anni e studenti; gratis sotto i 6 anni (serve comunque il biglietto). Prezzo pieno sul sito.',
          web: 'saint-emilion-tourisme.com',
          gps: [44.89326, -0.15631],
          nota: 'La visita è in francese; all\'ufficio del turismo chiedi il testo stampato in italiano prima di entrare.',
          fonti: ['se-souterrain', 'osm'],
        },
        {
          nome: 'Office de tourisme du Grand Saint-Émilionnais',
          indirizzo: 'Le Doyenné, Place des Créneaux, 33330 Saint-Émilion',
          telefono: '+33 5 57 55 28 28 · accueil@saint-emilion-tourisme.com',
          web: 'saint-emilion-tourisme.com',
          fonti: ['se-contatti'],
        },
      ],
      mangiare: [],
      dormire: 'Bordeaux città.',
      nota: 'Il borgo sta su un pendio, con vicoli acciottolati ripidi: scarpe comode.',
    },
    {
      numero: 4,
      titolo: 'Pomerol e i Graves',
      racconto:
        'Abbiamo attraversato Pomerol, minuscola, con i vini più cari del mondo, poi siamo scesi nei Graves, a sud della città.',
      tratte: [
        { da: 'Bordeaux', a: 'Pomerol', km: 40, minuti: 41 },
        { da: 'Pomerol', a: 'Pessac (Graves)', km: 56, minuti: 50 },
        { da: 'Pessac', a: 'Bordeaux', km: 13, minuti: 21 },
      ],
      luoghi: [
        { nome: 'Pomerol', indirizzo: 'Pomerol (Gironde)', gps: [44.9318, -0.20381], nota: 'Le proprietà si visitano solo su appuntamento, e molte non ricevono affatto.', fonti: ['ban'] },
        { nome: 'Graves e Pessac-Léognan', indirizzo: 'Pessac (Gironde), alle porte di Bordeaux', gps: [44.78747, -0.67593], fonti: ['ban'] },
      ],
      mangiare: [],
      dormire: 'Bordeaux città.',
    },
    {
      numero: 5,
      titolo: 'Il Médoc',
      racconto:
        'La strada dei château allineati sulla riva sinistra, con due visite nei cru classati. Ai grandi château non ci si presenta senza appuntamento: non si entra.',
      tratte: [
        { da: 'Bordeaux', a: 'Margaux', km: 30, minuti: 41 },
        { da: 'Margaux', a: 'Pauillac', km: 23, minuti: 29 },
        { da: 'Pauillac', a: 'Bordeaux', km: 53, minuti: 62 },
      ],
      luoghi: [
        { nome: 'Margaux', indirizzo: 'Margaux-Cantenac (Gironde)', gps: [45.03531, -0.66974], fonti: ['ban'] },
        { nome: 'Pauillac', indirizzo: 'Pauillac (Gironde)', gps: [45.19514, -0.76992], fonti: ['ban'] },
      ],
      mangiare: [],
      dormire: 'Bordeaux città.',
      nota: 'I cru classati si prenotano con settimane di anticipo, direttamente sul sito di ogni château. In vendemmia molte proprietà riducono le visite.',
    },
    {
      numero: 6,
      titolo: 'Sauternes',
      paginaSito: '/esperienze/francia/sauternes-muffa-nobile',
      racconto:
        'Una proprietà del Sauternes, e la cosa che resta di più del viaggio: grappoli con la muffa nobile che sembrano da buttare, raccolti a mano cinque o sei volte nello stesso filare.',
      tratte: [
        { da: 'Bordeaux', a: 'Sauternes', km: 47, minuti: 46 },
        { da: 'Sauternes', a: 'Bordeaux', km: 54, minuti: 46 },
      ],
      luoghi: [
        { nome: 'Sauternes', indirizzo: 'Sauternes (Gironde)', gps: [44.5353, -0.34283], nota: 'La vendemmia a passaggi successivi va indicativamente da fine settembre a novembre. Serve l\'appuntamento.', fonti: ['ban'] },
      ],
      mangiare: [],
      dormire: 'Bordeaux città.',
    },
    {
      numero: 7,
      titolo: 'Bacino di Arcachon',
      paginaSito: '/esperienze/francia/dune-du-pilat',
      racconto:
        'L\'ultimo giorno sull\'oceano. Il treno porta ad Arcachon, la Dune du Pilat si sale al tramonto e la cena è stata a base di ostriche appena aperte in una cabane sul pontile.',
      tratte: [{ da: 'Bordeaux', a: 'Dune du Pilat', km: 67, minuti: 58, nelMioViaggio: 'in treno fino ad Arcachon' }],
      luoghi: [
        {
          nome: 'Dune du Pilat',
          indirizzo: 'Route de Biscarrosse (RD 218), 33115 Pyla-sur-Mer',
          biglietto: 'Duna gratuita. Parcheggio: da metà febbraio a Ognissanti (vacanze scolastiche comprese) 4 ore da 5 a 10 €, 12 ore da 9 a 14 € secondo il veicolo; il resto dell\'anno 1-6 €. 30 minuti gratis.',
          telefono: '+33 5 56 22 12 85 · information@ladunedupilat.com',
          web: 'ladunedupilat.com',
          gps: [44.57684, -1.22464],
          nota: 'Parcheggio chiuso dalle 2 alle 5 di notte, con penale di 50 € per chi resta. Vietati fuochi, bivouac e prelievo di sabbia.',
          fonti: ['pilat', 'pilat-tarifs'],
        },
      ],
      mangiare: [],
      dormire: 'Nessun pernottamento.',
      nota: 'D\'estate la sabbia scotta: scarpe leggere e acqua. Treni Bordeaux Saint-Jean-Arcachon: orari su sncf-connect.com.',
    },
  ],
  mappa: {
    percorso: ['Bordeaux', 'Saint-Émilion', 'Pomerol', 'Pessac', 'Bordeaux', 'Margaux', 'Pauillac', 'Bordeaux', 'Sauternes', 'Bordeaux', 'Dune'],
    acque: [
      {
        nome: 'Atlantico',
        etichetta: [44.95, -1.45],
        allinea: 'end',
        punti: [[45.6, -1.25], [45.2, -1.17], [44.8, -1.2], [44.66, -1.26], [44.55, -1.25], [44.4, -1.3], [44.4, -1.6], [45.6, -1.6]],
      },
    ],
    legenda: 'Linea piena: le gite in auto da Bordeaux, tutte andata e ritorno in giornata.',
    notaTempi: 'Tempi stimati senza traffico (OSRM su OpenStreetMap): all\'uscita da Bordeaux la tangenziale si blocca nelle ore di punta.',
    notaTempiFonti: ['osrm'],
    scalaKm: 20,
  },
  primaDiPartire: [
    {
      titolo: 'Quando e come',
      righe: [
        { voce: 'Stagione', valore: 'Settembre-ottobre per la vendemmia, oppure maggio-giugno.' },
        { voce: 'Château', valore: 'Appuntamento sempre obbligatorio per i grandi château, da prenotare con settimane di anticipo.' },
        { voce: 'Vino e guida', valore: 'Guidatore designato che non assaggia, escursione accompagnata, oppure sputare in degustazione. I controlli sull\'alcol sono frequenti.', fonti: ['vs-fra'] },
        { voce: 'Base', valore: 'Bordeaux città: si gira a piedi e tutte le zone del vigneto stanno entro un\'ora d\'auto.' },
      ],
    },
    ...primaDiPartireFrancia(true),
  ],
  emergenze: {
    numeri: numeriFrancia,
    ambasciata: [consolati.bordeaux, consolati.parigi, ambasciataParigi],
    ospedali: [
      {
        nome: 'CHU de Bordeaux, Hôpital Pellegrin',
        cosa: 'Ospedale universitario, pronto soccorso adulti',
        indirizzo: 'Place Amélie Raba-Léon, 33000 Bordeaux',
        telefono: '+33 5 56 79 56 79 (centralino)',
        web: 'chu-bordeaux.fr',
        gps: [44.83039, -0.60313],
        stato: 'ufficiale',
        fonti: ['chu-bordeaux', 'ban'],
      },
    ],
  },
  contatti: [
    {
      gruppo: 'Uffici del turismo e siti',
      voci: [
        { nome: 'Office de tourisme de Bordeaux', cosa: 'Informazioni, CityPass, visite guidate', telefono: '+33 5 56 00 66 00', web: 'bordeaux-tourisme.com', stato: 'ufficiale', fonti: ['ot-bordeaux'] },
        { nome: 'Office de tourisme du Grand Saint-Émilionnais', cosa: 'Biglietti per la chiesa monolitica', telefono: '+33 5 57 55 28 28', web: 'saint-emilion-tourisme.com', stato: 'ufficiale', fonti: ['se-contatti'] },
        { nome: 'Médoc Atlantique Tourisme', cosa: 'Ufficio del turismo della costa del Médoc (Lacanau)', indirizzo: 'Place de l\'Europe, 33680 Lacanau Océan', telefono: '+33 5 56 03 21 01', web: 'medoc-atlantique.com', stato: 'ufficiale', fonti: ['medoc-atl'] },
        { nome: 'Dune du Pilat, punto accoglienza', cosa: 'Parcheggio e affluenza in tempo reale', telefono: '+33 5 56 22 12 85 · +33 7 86 79 45 34', web: 'ladunedupilat.com', stato: 'ufficiale', fonti: ['pilat'] },
        { nome: 'La Cité du Vin', cosa: 'Biglietti con orario', web: 'laciteduvin.com', stato: 'ufficiale', fonti: ['ot-bordeaux'] },
      ],
    },
  ],
  budget: {
    righe: [
      { voce: 'Noleggio auto, 7 giorni' },
      { voce: 'Alloggio a Bordeaux, 6 notti' },
      { voce: 'Cité du Vin', nota: 'oppure CityPass, prezzi sul sito' },
      { voce: 'Chiesa monolitica', nota: 'prezzo sul sito dell\'ufficio del turismo' },
      { voce: 'Degustazioni', nota: 'da gratuite nelle piccole proprietà a molto care nei cru classati' },
      { voce: 'Parcheggio Dune du Pilat', costo: '5-14 €', nota: 'alta stagione, secondo durata e veicolo' },
      { voce: 'Mangiare', nota: 'menù di mezzogiorno, ostriche nelle cabanes' },
    ],
    nota: 'Tariffe verificate a novembre 2026. Le righe vuote le riempi tu: nei miei appunti i costi non ci sono.',
  },
  valigia: [
    valigiaDocumentiFrancia,
    { gruppo: 'Vestiti', voci: ['Scarpe comode per i vicoli di Saint-Émilion', 'Scarpe leggere per la sabbia della duna', 'Una giacca per le cantine, fresche anche d\'estate'] },
    { gruppo: 'Auto e vino', voci: ['Patente', 'Giubbotto catarifrangente e triangolo', 'Bollino Crit\'Air', 'Etilometro monouso', 'Appuntamenti dei château salvati nel telefono'] },
  ],
  lingua: linguaFrancese,
  frasario: frasarioFrancese,
  numeri: numeriFrancese,
  pagineSito: [
    { titolo: 'Il viaggio completo', path: '/viaggi/bordeaux-e-vigneti' },
    { titolo: 'Bordeaux, la scheda', path: '/destinazioni/francia/bordeaux' },
    { titolo: 'Saint-Émilion', path: '/esperienze/francia/saint-emilion' },
    { titolo: 'Il Sauternes', path: '/esperienze/francia/sauternes-muffa-nobile' },
    { titolo: 'La Dune du Pilat', path: '/esperienze/francia/dune-du-pilat' },
    { titolo: 'Le ostriche di Arcachon', path: '/esperienze/francia/ostriche-arcachon' },
  ],
  nonVerificato: [
    'Orari e prezzi della Cité du Vin (il sito ufficiale non si è aperto)',
    'Prezzo pieno e orari della visita della chiesa monolitica',
    'Prezzo del CityPass di Bordeaux',
    'Orari e durata del TER Bordeaux-Arcachon',
    'Nomi dei château visitati, degli alloggi e dei ristoranti: non annotati',
  ],
  consultate: 'Consultate il 2 novembre 2026. Prima di pagare guarda sempre il sito ufficiale.',
  fonti: [
    ...fontiFrancia,
    { id: 'ot-bordeaux', titolo: 'Office de tourisme de Bordeaux Métropole, contatti, orari e CityPass', url: 'https://www.bordeaux-tourisme.com/' },
    { id: 'se-contatti', titolo: 'Office de tourisme du Grand Saint-Émilionnais, contatti', url: 'https://www.saint-emilion-tourisme.com/fr/contact' },
    { id: 'se-souterrain', titolo: 'Saint-Émilion souterrain, scheda della visita', url: 'https://boutique.saint-emilion-tourisme.com/fr/produit/saint-emilion-souterrain' },
    { id: 'medoc-atl', titolo: 'Médoc Atlantique Tourisme', url: 'https://www.medoc-atlantique.com/' },
    { id: 'pilat', titolo: 'Dune du Pilat, sito ufficiale (accoglienza e regole)', url: 'https://www.ladunedupilat.com/' },
    { id: 'pilat-tarifs', titolo: 'Dune du Pilat, tariffe del parcheggio', url: 'https://www.ladunedupilat.com/tarifs-et-abonnements' },
    { id: 'chu-bordeaux', titolo: 'CHU de Bordeaux', url: 'https://www.chu-bordeaux.fr/' },
  ],
}
