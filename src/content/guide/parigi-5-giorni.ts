import type { Guida } from './types'
import {
  ambasciataParigi, consolati, fontiFrancia, frasarioFrancese, linguaFrancese, numeriFrancese,
  numeriFrancia, primaDiPartireFrancia, valigiaDocumentiFrancia,
} from './lotti/francia-comune'

/**
 * Guida PDF «Parigi in 5 giorni». Racconto da src/content/viaggi/40-parigi-5-giorni.md e
 * src/content/viaggi-dati/parigi-5-giorni.ts. Orari e prezzi verificati il 2/11/2026 sui siti
 * ufficiali dei monumenti (elencati in `fonti`). Alcuni siti (Orsay, Orangerie, Tour Eiffel,
 * RATP) non erano leggibili in automatico: lì la guida rimanda alla fonte invece di stampare cifre.
 * Coordinate: Base Adresse Nationale. Tempi: OSRM, traffico libero.
 */

export const guidaParigi: Guida = {
  slug: 'parigi-5-giorni',
  tripSlug: 'parigi-5-giorni',
  paese: 'Francia',
  titolo: 'Parigi',
  sottotitolo: 'Cinque giorni, un grande museo al giorno, Montmartre all\'alba e Versailles. Con la versione da tre giorni.',
  autore: 'Rick',
  verificatoAl: 'novembre 2026',
  intro: [
    'Cinque giorni a Parigi con amici, in metropolitana e a piedi, con una regola: un grande museo al giorno, mai due. Abbiamo dormito tra il Marais e il quartiere latino.',
    'Sul sito c\'è il racconto. Qui ci sono indirizzi, orari, biglietti e giorni di chiusura di ogni tappa, le prenotazioni da fare prima di partire, i numeri utili e un frasario minimo.',
    'Ho ricontrollato i siti ufficiali a novembre 2026. Il Louvre ha prezzi diversi per chi viene da fuori dello Spazio economico europeo e Versailles vuole sempre la fascia oraria: prenota da casa.',
  ],
  cosaInPiu: [
    'Una scheda per ogni giorno con indirizzi, orari, giorni di chiusura e biglietti',
    'Le prenotazioni da fare prima di partire: Louvre, Versailles, Catacombe',
    'I giorni di chiusura incrociati, per costruire il programma senza trovare porte chiuse',
    'Numeri di emergenza, Consolato e Ambasciata d\'Italia a Parigi',
    'Lista per la valigia e frasario francese con la pronuncia',
  ],
  tappe: [
    { nome: 'Sainte-Chapelle', gps: [48.85465, 2.34494], giorno: 'G1', etichetta: 'sotto' },
    { nome: 'Marais', gps: [48.85533, 2.36552], giorno: 'G1', etichetta: 'destra' },
    { nome: 'Louvre', gps: [48.86115, 2.33803], giorno: 'G2', etichetta: 'sopra' },
    { nome: 'Orsay', gps: [48.86038, 2.32513], giorno: 'G3', etichetta: 'sotto' },
    { nome: 'Tour Eiffel', gps: [48.85882, 2.2946], giorno: 'G3', etichetta: 'sinistra' },
    { nome: 'Montmartre', gps: [48.88709, 2.34342], giorno: 'G4', etichetta: 'sopra' },
    { nome: 'Père-Lachaise', gps: [48.85979, 2.39084], giorno: 'G5', etichetta: 'destra' },
    { nome: 'Catacombe', gps: [48.83398, 2.33251], giorno: 'G5', etichetta: 'sotto' },
  ],
  giorni: [
    {
      numero: 1,
      titolo: 'Île de la Cité e il Marais',
      paginaSito: '/esperienze/francia/sainte-chapelle',
      racconto:
        'La mattina la Sainte-Chapelle, da fare solo con il sole, poi Notre-Dame. Pranzo nel quartiere latino. Il pomeriggio nel Marais: Place des Vosges, il Musée Picasso nell\'Hôtel Salé e le vie strette del 3° e 4° arrondissement. La sera Saint-Germain o di nuovo il Marais.',
      tratte: [],
      senzaStrada: 'A piedi: dalla Sainte-Chapelle a Place des Vosges sono circa 2 km.',
      luoghi: [
        {
          nome: 'Sainte-Chapelle',
          indirizzo: '10 boulevard du Palais, 75001 Parigi',
          biglietto: '22 €; gratis sotto i 26 anni (residenti UE)',
          web: 'sainte-chapelle.fr',
          gps: [48.85465, 2.34494],
          nota: 'Orari sul sito del Centre des monuments nationaux. Le vetrate rendono solo con il sole: se il cielo è coperto, sposta la visita a un altro giorno.',
          fonti: ['sainte-chapelle', 'ban'],
        },
        {
          nome: 'Musée national Picasso-Paris (Hôtel Salé)',
          indirizzo: '5 rue de Thorigny, 75003 Parigi',
          orari: 'Da martedì a domenica 9:30-18, ultimo ingresso 17:15. Chiuso il lunedì e 1/1, 1/5, 25/12',
          biglietto: '16 €; gratis la prima domenica del mese',
          telefono: '+33 1 85 56 00 36',
          web: 'museepicassoparis.fr',
          gps: [48.8596, 2.36252],
          fonti: ['picasso-paris', 'ban'],
        },
        {
          nome: 'Notre-Dame de Paris',
          indirizzo: '6 parvis Notre-Dame, place Jean-Paul II, 75004 Parigi',
          web: 'notredamedeparis.fr',
          gps: [48.85299, 2.3489],
          nota: 'Orari di visita e prenotazione della fascia oraria (facoltativa) sul sito ufficiale.',
          fonti: ['ban'],
        },
      ],
      mangiare: [],
      dormire: 'Marais o quartiere latino (nome dell\'alloggio non annotato).',
    },
    {
      numero: 2,
      titolo: 'Il Louvre',
      paginaSito: '/esperienze/francia/louvre-strategia',
      racconto:
        'Giornata al Louvre con una strategia decisa la sera prima: due o tre ali e dieci opere, non di più. La Vittoria di Samotracia sullo scalone Daru, le antichità egizie e mesopotamiche, i sotterranei con le fondazioni del castello medievale. Il pomeriggio alle Tuileries o al Jeu de Paume.',
      tratte: [],
      senzaStrada: 'In metro (linea 1, fermata Palais Royal-Musée du Louvre) o a piedi dal Marais.',
      luoghi: [
        {
          nome: 'Musée du Louvre',
          indirizzo: 'Rue de Rivoli, 75001 Parigi (ingresso Piramide)',
          orari: 'Chiuso il martedì. Lunedì, giovedì, sabato e domenica 9-18; mercoledì e venerdì 9-21. Ultimo ingresso un\'ora prima.',
          biglietto: '22 € per i visitatori dello Spazio economico europeo, 32 € per gli altri. Gratis sotto i 18 anni e per i residenti SEE sotto i 26. Audioguida 6 €',
          web: 'louvre.fr',
          gps: [48.86115, 2.33803],
          nota: 'Prenota la fascia oraria anche se entri gratis. Dal 17 ottobre al 1° novembre 2026 la prenotazione era obbligatoria per tutti.',
          fonti: ['louvre'],
        },
      ],
      mangiare: [],
      dormire: 'Stesso alloggio.',
    },
    {
      numero: 3,
      titolo: 'Orsay, Orangerie e Tour Eiffel',
      racconto:
        'La mattina al Musée d\'Orsay, con gli impressionisti all\'ultimo piano. Pranzo lì vicino, poi l\'Orangerie con le due sale ovali delle Ninfee. Nel pomeriggio verso la Tour Eiffel, da guardare dal Trocadéro o dal Champ de Mars: salire non serve, al panorama manca proprio la torre.',
      tratte: [],
      senzaStrada: 'A piedi: Orsay e Orangerie sono sulle due rive della Senna, a un quarto d\'ora; da lì alla Tour Eiffel circa 3 km.',
      luoghi: [
        {
          nome: 'Musée d\'Orsay',
          indirizzo: '1 rue de la Légion d\'Honneur, 75007 Parigi',
          web: 'musee-orsay.fr',
          gps: [48.86038, 2.32513],
          nota: 'Orari, chiusura settimanale e prezzi sul sito ufficiale (non leggibile in automatico a novembre 2026). Prenota l\'ingresso.',
          fonti: ['ban'],
        },
        {
          nome: 'Musée de l\'Orangerie',
          indirizzo: 'Jardin des Tuileries, lato place de la Concorde, 75001 Parigi',
          web: 'musee-orangerie.fr',
          nota: 'Orari e prezzi sul sito ufficiale (non verificati).',
          fonti: [],
        },
        {
          nome: 'Tour Eiffel',
          indirizzo: '5 avenue Anatole France, 75007 Parigi',
          web: 'toureiffel.paris',
          gps: [48.85882, 2.2946],
          nota: 'Se vuoi salire, compra sul sito ufficiale; prezzi non verificati.',
          fonti: ['ban'],
        },
      ],
      mangiare: [],
      dormire: 'Stesso alloggio.',
    },
    {
      numero: 4,
      titolo: 'Montmartre all\'alba e Versailles',
      paginaSito: '/esperienze/francia/montmartre-alba',
      racconto:
        'L\'alba a Montmartre: il Sacré-Cœur alle sette, poi Rue de l\'Abreuvoir e il Clos Montmartre, lontano da Place du Tertre. Poi il treno per Versailles: Galleria degli Specchi e l\'Hameau de la Reine, la parte meno visitata.',
      tratte: [{ da: 'Parigi centro', a: 'Versailles, Place d\'Armes', km: 23, minuti: 36, mezzo: 'RER C (tempo stimato su strada)' }],
      luoghi: [
        {
          nome: 'Basilica del Sacré-Cœur',
          indirizzo: '35 rue du Chevalier de la Barre, 75018 Parigi',
          orari: 'Tutti i giorni 6:30-22:30',
          biglietto: 'Ingresso libero alla basilica; la salita alla cupola è una visita a parte',
          web: 'sacre-coeur-montmartre.com',
          gps: [48.88709, 2.34342],
          fonti: ['sacre-coeur', 'ban'],
        },
        {
          nome: 'Château de Versailles',
          indirizzo: 'Place d\'Armes, 78000 Versailles',
          orari: 'Castello 9-18:30 (d\'inverno forse fino alle 17:30), Trianon 12-18:30, giardini 7-20:30. Chiuso il lunedì e 25/12, 1/1, 1/5.',
          biglietto: 'Fascia oraria obbligatoria per tutti, anche per chi entra gratis. Prezzi 2026 sul sito',
          web: 'chateauversailles.fr',
          gps: [48.80389, 2.12385],
          fonti: ['versailles-orari', 'versailles-biglietti', 'ban'],
        },
      ],
      mangiare: [],
      dormire: 'Stesso alloggio.',
    },
    {
      numero: 5,
      titolo: 'Quartieri e chiusura',
      paginaSito: '/esperienze/francia/pere-lachaise',
      racconto:
        'La mattina al Père-Lachaise con la mappa in mano: le tombe famose e soprattutto il parco, con il Mur des Fédérés. Il pomeriggio si sceglie tra Canal Saint-Martin, Belleville o le Catacombe, che vanno prenotate a fascia oraria. L\'ultima sera in un bistrot di quartiere lontano dai monumenti.',
      tratte: [],
      senzaStrada: 'In metro: Père-Lachaise (linee 2 e 3), Denfert-Rochereau per le Catacombe.',
      luoghi: [
        {
          nome: 'Cimitero del Père-Lachaise',
          indirizzo: '16 rue du Repos, 75020 Parigi (ingresso principale boulevard de Ménilmontant)',
          gps: [48.85979, 2.39084],
          fonti: ['ban'],
        },
        {
          nome: 'Catacombe di Parigi',
          indirizzo: '1 avenue du Colonel Henri Rol-Tanguy, 75014 Parigi',
          orari: 'Da martedì a domenica 9:45-20:30, ultimo ingresso 19:30. Chiuse il lunedì',
          biglietto: '31 € (ridotto 25 €), audioguida compresa; 8-17 anni 15 €; gratis fino a 7 anni',
          web: 'catacombes.paris.fr',
          gps: [48.83398, 2.33251],
          fonti: ['catacombe', 'ban'],
        },
      ],
      mangiare: [],
      dormire: 'Stesso alloggio.',
    },
  ],
  mappa: {
    percorso: ['Sainte-Chapelle', 'Marais', 'Louvre', 'Orsay', 'Tour Eiffel', 'Montmartre', 'Père-Lachaise', 'Catacombe'],
    legenda: 'L\'ordine delle tappe in città. Versailles è a sud-ovest, fuori dalla carta.',
    notaTempi: 'Tempo per Versailles stimato su strada (OSRM, traffico libero); in RER C controlla l\'orario su SNCF o RATP.',
    notaTempiFonti: ['osrm'],
    scalaKm: 5,
  },
  primaDiPartire: [
    {
      titolo: 'Da prenotare',
      righe: [
        { voce: 'Louvre', valore: 'Fascia oraria consigliata sempre, obbligatoria nei periodi di punta. Chiuso il martedì.', fonti: ['louvre'] },
        { voce: 'Versailles', valore: 'Fascia oraria obbligatoria per tutti. Chiuso il lunedì.', fonti: ['versailles-biglietti'] },
        { voce: 'Catacombe', valore: 'Prenotazione fortemente raccomandata. Chiuse il lunedì.', fonti: ['catacombe'] },
        { voce: 'Stagione', valore: 'Aprile-giugno e settembre-ottobre.' },
        { voce: 'Versione da 3 giorni', valore: 'Giorno 1 Sainte-Chapelle, Marais e Louvre con un\'ala sola; giorno 2 Orsay, Orangerie e Montmartre; giorno 3 Versailles. Si rinuncia a Père-Lachaise, quartieri e Catacombe.' },
      ],
    },
    {
      titolo: 'Muoversi in città',
      righe: [
        { voce: 'Metro e RER', valore: 'Biglietti nell\'app ufficiale RATP o sulla carta Navigo Easy. Prezzi e zone su ratp.fr: non li stampo perché cambiano a inizio anno.' },
        { voce: 'Versailles', valore: 'RER C fino a Versailles Château Rive Gauche, poi a piedi.' },
      ],
    },
    ...primaDiPartireFrancia(false),
  ],
  emergenze: {
    numeri: numeriFrancia,
    ambasciata: [consolati.parigi, { ...ambasciataParigi, gps: [48.85445, 2.32176] }],
    ospedali: [
      { nome: 'Ospedali pubblici di Parigi (AP-HP)', cosa: 'Pronti soccorso in tutta la città; per un\'urgenza chiama il 15, che ti indirizza', web: 'aphp.fr', stato: 'ufficiale', avviso: 'Indirizzi e telefoni dei singoli pronti soccorso non verificati: il sito AP-HP blocca la lettura automatica.', fonti: ['sp-urgences'] },
    ],
  },
  contatti: [
    {
      gruppo: 'Monumenti e biglietterie ufficiali',
      voci: [
        { nome: 'Musée du Louvre', cosa: 'Biglietti a fascia oraria', web: 'louvre.fr', stato: 'ufficiale', fonti: ['louvre'] },
        { nome: 'Château de Versailles', cosa: 'Biglietti e fascia oraria', web: 'chateauversailles.fr', stato: 'ufficiale', fonti: ['versailles-biglietti'] },
        { nome: 'Paris Musées', cosa: 'Biglietteria delle Catacombe e dei musei della città', web: 'billetterie-parismusees.paris.fr', stato: 'ufficiale', fonti: ['catacombe'] },
        { nome: 'Centre des monuments nationaux', cosa: 'Sainte-Chapelle', web: 'sainte-chapelle.fr', stato: 'ufficiale', fonti: ['sainte-chapelle'] },
      ],
    },
  ],
  budget: {
    righe: [
      { voce: 'Viaggio per Parigi' },
      { voce: 'Alloggio, 4 notti' },
      { voce: 'Sainte-Chapelle', costo: '22 €' },
      { voce: 'Musée Picasso', costo: '16 €' },
      { voce: 'Louvre', costo: '22 €', nota: '32 € fuori dal SEE' },
      { voce: 'Orsay e Orangerie' },
      { voce: 'Versailles' },
      { voce: 'Catacombe', costo: '31 €' },
      { voce: 'Metro e RER' },
      { voce: 'Mangiare', nota: 'il menù di mezzogiorno costa molto meno della sera' },
    ],
    nota: 'Tariffe piene di novembre 2026 dove le ho trovate sui siti ufficiali. Le righe vuote le riempi tu.',
  },
  valigia: [
    valigiaDocumentiFrancia,
    { gruppo: 'Per la città', voci: ['Scarpe comode: si cammina molto', 'Giacca impermeabile leggera', 'Biglietti prenotati nel telefono (Louvre, Versailles, Catacombe)', 'Power bank', 'Una felpa per le Catacombe'] },
  ],
  lingua: linguaFrancese,
  frasario: frasarioFrancese,
  numeri: numeriFrancese,
  pagineSito: [
    { titolo: 'Il viaggio completo', path: '/viaggi/parigi-5-giorni' },
    { titolo: 'Parigi, la scheda', path: '/destinazioni/francia/parigi' },
    { titolo: 'Il Louvre con una strategia', path: '/esperienze/francia/louvre-strategia' },
    { titolo: 'La Sainte-Chapelle', path: '/esperienze/francia/sainte-chapelle' },
    { titolo: 'Montmartre all\'alba', path: '/esperienze/francia/montmartre-alba' },
    { titolo: 'Le Catacombe', path: '/esperienze/francia/catacombe-parigi' },
    { titolo: 'Il Père-Lachaise', path: '/esperienze/francia/pere-lachaise' },
  ],
  nonVerificato: [
    'Orari e prezzi di Musée d\'Orsay, Orangerie e Tour Eiffel: i siti non si leggono in automatico',
    'Prezzi 2026 dei biglietti di Versailles e orari invernali esatti',
    'Orari di visita di Notre-Dame e del Père-Lachaise, orari della Sainte-Chapelle',
    'Prezzi dei biglietti metro e RER 2026',
    'Indirizzi e telefoni dei pronti soccorso AP-HP',
    'Nome dell\'alloggio e dei bistrot: non annotati',
  ],
  consultate: 'Consultate il 2 novembre 2026. Prima di pagare guarda sempre il sito ufficiale.',
  fonti: [
    ...fontiFrancia,
    { id: 'louvre', titolo: 'Musée du Louvre, orari e tariffe', url: 'https://www.louvre.fr/en/visit/hours-admission' },
    { id: 'sainte-chapelle', titolo: 'Centre des monuments nationaux, Sainte-Chapelle', url: 'https://www.sainte-chapelle.fr/' },
    { id: 'picasso-paris', titolo: 'Musée national Picasso-Paris, informazioni pratiche', url: 'https://www.museepicassoparis.fr/en/practical-information' },
    { id: 'sacre-coeur', titolo: 'Basilique du Sacré-Cœur de Montmartre, orari', url: 'https://www.sacre-coeur-montmartre.com/' },
    { id: 'versailles-orari', titolo: 'Château de Versailles, orari', url: 'https://www.chateauversailles.fr/preparer-ma-visite/informations-pratiques/horaires' },
    { id: 'versailles-biglietti', titolo: 'Château de Versailles, biglietti e prezzi', url: 'https://en.chateauversailles.fr/plan-your-visit/tickets-and-prices' },
    { id: 'catacombe', titolo: 'Catacombes de Paris, informazioni pratiche 2026', url: 'https://www.catacombes.paris.fr/' },
  ],
}
