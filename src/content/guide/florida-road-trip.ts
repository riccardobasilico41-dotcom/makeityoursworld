import type { Guida } from './types'

/**
 * Guida PDF «Florida in 10 giorni». Il racconto viene da
 * src/content/viaggi/09-florida-road-trip.md; prezzi, orari e contatti sono
 * stati verificati sul web il 2/11/2026 e rimandano alle fonti in fondo
 * (campo `fonti`, per id). Dove il viaggio riportava cifre superate (Kennedy
 * Space Center, Everglades, Hemingway Home) qui c'è la tariffa ufficiale.
 *
 * Distanze e tempi: OSRM su dati OpenStreetMap, traffico libero.
 * Coordinate: OpenStreetMap (Nominatim).
 */

export const guidaFlorida: Guida = {
  slug: 'florida-road-trip',
  tripSlug: 'florida-road-trip',
  paese: 'Stati Uniti',
  titolo: 'Florida',
  sottotitolo: 'Dieci giorni in auto da Miami alle Keys, nelle Everglades, a Orlando e a Cape Canaveral. Strade, chilometri, biglietti e numeri utili.',
  autore: 'Rick',
  verificatoAl: 'novembre 2026',
  intro: [
    'Ho girato la Florida con amici in dieci giorni e quasi 1.800 km, con un\'auto Sixt presa il secondo giorno e riconsegnata a Miami. Il giro è un anello: giù fino a Key West, su attraverso le Everglades fino a Naples, la costa del Golfo, Orlando, lo Space Center e di nuovo Miami Beach.',
    'Qui ci sono le tratte con i chilometri, gli indirizzi, gli orari e i biglietti dei posti, i pedaggi spiegati bene e i numeri da avere in tasca. Alcune cifre del racconto sul sito sono cambiate: qui trovi quelle aggiornate.',
    'Ho ricontrollato tutto a novembre 2026. Dal 2026 i parchi nazionali fanno pagare 100 $ in più ai visitatori stranieri: è la novità che pesa di più sul budget.',
  ],
  cosaInPiu: [
    'Ogni tratta con chilometri e tempi di guida, ogni luogo con indirizzo, orari, prezzo e QR per Google Maps',
    'Prezzi 2026 corretti: Kennedy Space Center 77 $, Hemingway Home 19 $, supplemento stranieri alle Everglades',
    'Pedaggi e noleggio: come funzionano Toll-By-Plate e SunPass con un\'auto Sixt',
    'Consolato Generale d\'Italia a Miami con il numero di emergenza, ospedali lungo tutto il percorso',
    'Budget, valigia per il caldo umido, frasario inglese pratico',
  ],
  tappe: [
    { nome: 'Miami Beach', gps: [25.79292, -80.1353], giorno: 'G1 · G7-9', etichetta: 'destra' },
    { nome: 'Aeroporto MIA', gps: [25.79498, -80.28672], giorno: 'G1 · G10', etichetta: 'sinistra' },
    { nome: 'Key West', gps: [24.55919, -81.80675], giorno: 'G2-3', etichetta: 'sinistra' },
    { nome: 'Marathon', gps: [24.70977, -81.10172], giorno: 'G3', etichetta: 'destra' },
    { nome: 'Everglades (Alligator Farm)', gps: [25.39335, -80.49981], giorno: 'G4', etichetta: 'destra' },
    { nome: 'Shark Valley', gps: [25.75694, -80.76538], giorno: 'G4', etichetta: 'sotto' },
    { nome: 'Naples', gps: [26.13155, -81.80773], giorno: 'G4', etichetta: 'sinistra' },
    { nome: 'Clearwater Beach', gps: [27.97747, -82.82793], giorno: 'G5', etichetta: 'sinistra' },
    { nome: 'Orlando', gps: [28.54397, -81.37043], giorno: 'G5-6', etichetta: 'sopra' },
    { nome: 'Kennedy Space Center', gps: [28.52428, -80.68186], giorno: 'G7', etichetta: 'destra' },
  ],
  giorni: [
    {
      numero: 1,
      titolo: 'Arrivo a Miami',
      paginaSito: '/destinazioni/florida/miami',
      racconto:
        'Dall\'aeroporto all\'hotel è un quarto d\'ora con la navetta o con Uber. Nel pomeriggio la riunione di benvenuto, la sera Little Havana per cucina cubana, poi Cubaocho o Lincoln Road a Miami Beach.',
      tratte: [{ da: 'Aeroporto MIA', a: 'Miami Beach', km: 24, minuti: 30, mezzo: 'Uber, Lyft o navetta', nelMioViaggio: '30-40 $ in Uber' }],
      luoghi: [
        { nome: 'Little Havana, Calle Ocho', indirizzo: 'SW 8th St, Miami', gps: [25.76549, -80.21937], nota: 'Dieci minuti di Uber da Downtown.', fonti: ['osm'] },
      ],
      mangiare: [
        { nome: 'Doce Provisions', cosa: 'Cucina cubana a Little Havana', stato: 'usato', avviso: 'Contatti non verificati: cercalo su Maps.', fonti: [] },
        { nome: 'CVI.CHE 105', cosa: 'Ceviche peruviano a Downtown', stato: 'usato', avviso: 'Contatti non verificati.', fonti: [] },
        { nome: 'Garcia\'s', cosa: 'Pesce', stato: 'usato', avviso: 'Contatti non verificati.', fonti: [] },
      ],
      dormire: 'Generator Miami, ostello di design a Miami Beach con camere private. Indirizzo e telefono non verificati: prendili dalla prenotazione.',
    },
    {
      numero: 2,
      titolo: 'Verso Key West',
      paginaSito: '/destinazioni/florida/key-west-marathon',
      racconto:
        'Ritirata l\'auto da Sixt, siamo scesi lungo l\'Overseas Highway. Più ci si avvicina alle isole più la strada diventa bella, e prima e dopo il Seven Mile Bridge ci sono piazzole per fermarsi. Il pomeriggio a Fort Zachary Taylor, il tramonto a Mallory Square, la sera musica al Green Parrot e su Duval Street.',
      tratte: [{ da: 'Miami', a: 'Key West', km: 256, minuti: 246, nelMioViaggio: '3 ore e mezza-4 ore, soste escluse' }],
      luoghi: [
        { nome: 'Sixt, Miami International Airport', indirizzo: '3900 NW 25th St, Rental Car Center, Miami FL 33142', orari: '24 ore su 24', web: 'sixt.com', nota: 'Età minima 21 anni, carta di credito intestata al guidatore. La patente italiana vale per i turisti.', fonti: ['sixt'] },
        { nome: 'Seven Mile Bridge', indirizzo: 'Overseas Highway (US-1), Marathon', gps: [24.6948, -81.18412], fonti: ['osm'] },
        { nome: 'Turtle Hospital', indirizzo: '2396 Overseas Hwy, Marathon (MM 48.5)', telefono: '+1 305 743 2552', web: 'turtlehospital.org', gps: [24.70977, -81.10172], nota: 'Visite guidate su prenotazione. Prezzo 2026 non verificato.', fonti: ['turtle', 'osm'] },
        { nome: 'Fort Zachary Taylor Historic State Park', indirizzo: 'Truman Annex, Key West', orari: 'Dalle 08:00 al tramonto; il forte chiude alle 17:00', biglietto: '6 $ ad auto più 0,50 $ a persona; a piedi o in bici 2,50 $', gps: [24.54775, -81.81041], fonti: ['ftz', 'osm'] },
        { nome: 'Mallory Square', indirizzo: 'Mallory Square, Key West', gps: [24.55919, -81.80675], nota: 'Il tramonto con artisti di strada. Parcheggio gratuito nelle vie intorno a Truman Ave.', fonti: ['osm'] },
      ],
      mangiare: [
        { nome: 'Robbie\'s', cosa: 'Sosta lungo la strada, circa due ore da Miami', stato: 'usato', avviso: 'Contatti non verificati.', fonti: [] },
        { nome: 'Blue Heaven', cosa: 'Key West, senza prenotazione', stato: 'usato', avviso: 'Contatti non verificati.', fonti: [] },
        { nome: 'Green Parrot', cosa: 'Concerti la sera', stato: 'usato', avviso: 'Contatti non verificati.', fonti: [] },
      ],
      dormire: 'Hotel a Key West (nome non annotato).',
    },
    {
      numero: 3,
      titolo: 'Key West e Marathon',
      paginaSito: '/destinazioni/florida/key-west-marathon',
      racconto:
        'La mattina a piedi: la casa di Hemingway con i gatti a sei dita, la foto al Southernmost Point, il museo dei galeoni di Mel Fisher. Recuperati i bagagli, un\'ora di strada fino a Bahia Honda per spiaggia, kayak o snorkeling. Il tramonto al Sunset Grille di Marathon.',
      tratte: [
        { da: 'Key West', a: 'Bahia Honda State Park', km: 61, minuti: 64 },
        { da: 'Bahia Honda', a: 'Marathon', km: 17, minuti: 16 },
      ],
      luoghi: [
        { nome: 'Ernest Hemingway Home & Museum', indirizzo: '907 Whitehead St, Key West', orari: 'Tutti i giorni 09:00-17:00; visite guidate ogni 15 minuti dalle 09:15', biglietto: 'Adulti 19 $, bambini 6-12 anni 7 $; +3% con la carta. Solo al cancello, niente prenotazioni', telefono: '+1 305 294 1136', web: 'hemingwayhome.com', gps: [24.5512, -81.80061], fonti: ['hemingway', 'osm'] },
        { nome: 'Key West Butterfly & Nature Conservatory', indirizzo: '1316 Duval St', orari: '09:00-17:00, ultimo ingresso 16:30', telefono: '+1 305 296 2988', web: 'keywestbutterfly.com', nota: 'Prezzo 2026 non verificato.', fonti: ['butterfly'] },
        { nome: 'Mel Fisher Maritime Museum', indirizzo: '200 Greene St, Key West', orari: '10:00-16:00, tutti i giorni dell\'anno', web: 'melfisher.org', nota: 'Nel mio programma risultava chiuso il lunedì: il sito oggi dice aperto sempre.', fonti: ['melfisher'] },
        { nome: 'Bahia Honda State Park', indirizzo: 'Overseas Hwy, MM 37, Big Pine Key', orari: 'Dalle 08:00 al tramonto', biglietto: '8 $ ad auto (2-8 persone) più 0,50 $ a persona', web: 'floridastateparks.org', gps: [24.66473, -81.26152], nota: 'Per lo snorkeling sulla barriera prenota il tour del pomeriggio e arriva entro mezzogiorno.', fonti: ['bahia', 'osm'] },
      ],
      mangiare: [
        { nome: 'Sunset Grille & Raw Bar', cosa: 'Tramonto a Marathon', stato: 'usato', avviso: 'Contatti non verificati.', fonti: [] },
        { nome: 'Burdine\'s Waterfront', cosa: 'Beach bar a Marathon, chiude presto', stato: 'usato', avviso: 'Contatti non verificati.', fonti: [] },
        { nome: 'La Nina', cosa: 'Cubano economico a Marathon', stato: 'usato', avviso: 'Contatti non verificati.', fonti: [] },
      ],
      dormire: 'Hotel a Marathon (nome non annotato).',
    },
    {
      numero: 4,
      titolo: 'Everglades e Naples',
      paginaSito: '/destinazioni/florida/everglades-naples',
      racconto:
        'Colazione presto, prima del caldo. L\'airboat all\'Everglades Alligator Farm con il GoCity Pass, poi la Tamiami Trail verso ovest, con la sosta a Shark Valley. Naples è elegante e cara; la sera una passeggiata sulla 5th Avenue.',
      tratte: [
        { da: 'Marathon', a: 'Everglades Alligator Farm (Homestead)', km: 134, minuti: 131 },
        { da: 'Alligator Farm', a: 'Shark Valley', km: 73, minuti: 74 },
        { da: 'Shark Valley', a: 'Naples', km: 119, minuti: 102, nelMioViaggio: 'circa un\'ora e mezza sulla Route 41' },
      ],
      luoghi: [
        { nome: 'Everglades Alligator Farm (airboat)', indirizzo: '40351 SW 192nd Ave, Homestead FL 33034', orari: '09:00-17:30; airboat ogni ora alle :20, dalle 09:20 alle 17:20', telefono: '+1 305 247 2628', gps: [25.39335, -80.49981], nota: 'Con il GoCity Pass si va al banco nel negozio; arriva prima delle 15:00.', fonti: ['gator', 'osm'] },
        { nome: 'Everglades National Park, ingresso Shark Valley', indirizzo: 'Shark Valley Loop Rd, Miami FL 33194', biglietto: '35 $ ad auto per 7 giorni, più 100 $ a persona per i non residenti dai 16 anni (dal 1/1/2026). Solo carta', web: 'nps.gov/ever', gps: [25.75694, -80.76538], fonti: ['nps-ever', 'osm'] },
        { nome: 'Shark Valley Tram Tours', indirizzo: 'Shark Valley Visitor Center', orari: 'Fino al 18/12: partenze 09:30, 11:00, 12:30, 14:00 (più 16:00 nel weekend); dal 20/12 al 30/4 ogni ora 09:00-16:00', biglietto: 'Adulti 36 $, over 62 27 $, bambini 3-12 anni 19 $', telefono: '+1 305 221 8455', web: 'sharkvalleytramtours.com', nota: 'Due ore circa. In alta stagione il parcheggio chiude quando è pieno.', fonti: ['tram'] },
        { nome: 'Naples Pier', indirizzo: '25 12th Ave S, Naples', gps: [26.13155, -81.80773], nota: 'Attenzione ai parcheggi riservati ai clienti dei negozi.', fonti: ['osm'] },
      ],
      mangiare: [
        { nome: 'Alberto\'s on 5th', cosa: 'Pasta buona, pizza meno', stato: 'usato', avviso: 'Contatti non verificati.', fonti: [] },
        { nome: 'Taqueria San Julian', cosa: 'Messicano economico', stato: 'usato', avviso: 'Contatti non verificati.', fonti: [] },
      ],
      dormire: 'Hotel a Naples (nome non annotato).',
      nota: 'Repellente, crema, pantaloni lunghi e giacca antipioggia: nelle Everglades servono tutti e quattro.',
    },
    {
      numero: 5,
      titolo: 'Da Naples a Orlando lungo il Golfo',
      racconto:
        'Il giorno più lungo al volante, con tante soste possibili: Fort Myers, il museo Ringling a Sarasota, il Dalí Museum a St. Petersburg, la spiaggia bianca di Clearwater. Poi Orlando, cena da Gringos Locos e un giro intorno a Lake Eola.',
      tratte: [
        { da: 'Naples', a: 'Clearwater Beach', km: 280, minuti: 209 },
        { da: 'Clearwater Beach', a: 'Orlando', km: 176, minuti: 139, nelMioViaggio: 'circa due ore' },
      ],
      luoghi: [
        { nome: 'The Ringling, Sarasota', orari: '10:00-17:00; giovedì 17:00-20:00 ingresso ridotto a museo d\'arte e giardini', web: 'ringling.org', nota: 'Chiuso a Thanksgiving, Natale e Capodanno. Prezzo non verificato.', fonti: ['ringling'] },
        { nome: 'The Dalí Museum', indirizzo: 'One Dalí Blvd, St. Petersburg FL 33701', orari: '10:00-18:00, giovedì fino alle 20:00', web: 'thedali.org', gps: [27.76615, -82.63125], nota: 'Biglietti a orario, meglio comprarli prima. Prezzo non verificato.', fonti: ['dali', 'osm'] },
        { nome: 'Clearwater Beach', gps: [27.97747, -82.82793], fonti: ['osm'] },
        { nome: 'Lake Eola Park, Orlando', gps: [28.54397, -81.37043], fonti: ['osm'] },
      ],
      mangiare: [{ nome: 'Gringos Locos', cosa: 'Cena in centro a Orlando', stato: 'usato', avviso: 'Contatti non verificati.', fonti: [] }],
      dormire: 'Villa privata in affitto con piscina, zona Kissimmee-ChampionsGate (nome e indirizzo non annotati). Due notti.',
    },
    {
      numero: 6,
      titolo: 'Orlando, parco a tema',
      paginaSito: '/destinazioni/florida/orlando',
      racconto:
        'La giornata più intensa: arrivare un\'ora prima dell\'apertura, restare fino allo show della sera, zaino piccolo e app del parco per le code. Noi abbiamo scelto Universal: con il biglietto per due parchi c\'è anche l\'Hogwarts Express.',
      tratte: [],
      senzaStrada: 'Dalla zona di Kissimmee a Universal o Disney sono 20-30 minuti d\'auto. Il parcheggio si paga: valuta la navetta se l\'alloggio la offre.',
      luoghi: [
        { nome: 'Universal Orlando Resort', indirizzo: '1000 Universal Studios Plaza, Orlando', gps: [28.47725, -81.46971], biglietto: '1 giorno, 1 parco da circa 119 $ + tasse; Park-to-Park da circa 174 $; Epic Universe da 139 $. Prezzi variabili per data', nota: 'Parcheggio circa 25-26 $ (non confermato su fonte ufficiale). Esiste anche il quinto parco, Epic Universe.', fonti: ['universal', 'osm'] },
        { nome: 'Walt Disney World', biglietto: '1 giorno da circa 119 $ a 209 $ nei giorni di punta; parcheggio 35 $', nota: 'Quattro parchi; serve la prenotazione per la data.', fonti: ['disney'] },
      ],
      mangiare: [{ nome: 'Mango\'s Tropical Café Orlando', cosa: 'Cena con spettacolo, menù a 39 $ più tasse quando ci sono stato', stato: 'usato', avviso: 'Contatti non verificati.', fonti: [] }],
      dormire: 'Villa in affitto a Kissimmee.',
    },
    {
      numero: 7,
      titolo: 'Kennedy Space Center e ritorno a Miami',
      paginaSito: '/destinazioni/florida/cape-canaveral',
      racconto:
        'Check-out all\'alba e un\'ora di strada fino a Cape Canaveral. Lo Space Center chiede almeno mezza giornata: Rocket Garden, il Saturn V con la sala di controllo, lo shuttle Atlantis, l\'incontro con un astronauta. Poi più di tre ore sulla Turnpike fino a Miami Beach.',
      tratte: [
        { da: 'Orlando', a: 'Kennedy Space Center', km: 75, minuti: 68 },
        { da: 'Kennedy Space Center', a: 'Miami Beach (Turnpike)', km: 347, minuti: 257, nelMioViaggio: 'circa 3 ore e un quarto' },
      ],
      luoghi: [
        { nome: 'Kennedy Space Center Visitor Complex', indirizzo: 'Space Commerce Way, Merritt Island FL 32953', orari: '09:00-17:00', biglietto: 'Adulti 77 $, bambini 3-11 anni 67 $; parcheggio a parte', telefono: '+1 855 433 4210', web: 'kennedyspacecenter.com', gps: [28.52428, -80.68186], nota: 'A novembre 2026 il sito segnalava biglietti online momentaneamente non disponibili: si comprano al cancello. Controlla se c\'è un lancio quel giorno.', fonti: ['ksc', 'osm'] },
        { nome: 'Cocoa Beach', gps: [28.31841, -80.6095], nota: 'Pranzo a mezz\'ora dallo Space Center.', fonti: ['osm'] },
      ],
      mangiare: [{ nome: 'Keke\'s Breakfast Cafe', cosa: 'Colazione prima di partire', stato: 'usato', avviso: 'Contatti non verificati.', fonti: [] }],
      dormire: 'Generator Miami.',
      nota: 'La Turnpike è tutta elettronica, senza caselli a contanti: con l\'auto a noleggio il pedaggio viene addebitato dalla targa tramite Sixt. Le corsie express sono solo per chi ha il transponder SunPass.',
    },
    {
      numero: 8,
      titolo: 'Miami Beach',
      paginaSito: '/destinazioni/florida/miami',
      racconto:
        'Riconsegnata l\'auto in orario, la mattina al mare a South Beach. Io consiglio il giro a piedi dell\'Art Deco Welcome Center, un\'ora e mezza tra gli hotel storici. Nel pomeriggio lo speedboat Thriller con il GoCity Pass, la sera Downtown.',
      tratte: [],
      senzaStrada: 'Senza auto: a piedi, in bici o in Uber (circa 15 $ tra Mid Beach e South Beach).',
      luoghi: [
        { nome: 'Thriller Miami Speedboat', indirizzo: 'Bayside Marketplace, 401 Biscayne Blvd, Miami', orari: 'Primo giro alle 10:00, ultimo tra le 17:00 e le 19:45 secondo la stagione', biglietto: 'Fino a 52 $ senza pass; incluso nel GoCity Pass', nota: 'Presentati 45 minuti prima, liberatoria obbligatoria. Si annulla con i temporali.', fonti: ['thriller'] },
      ],
      mangiare: [
        { nome: 'Fratelli la Bufala', cosa: 'Pizza', stato: 'usato', avviso: 'Contatti non verificati.', fonti: [] },
        { nome: 'Santorini by Georgios', cosa: 'Cucina greca', stato: 'usato', avviso: 'Contatti non verificati.', fonti: [] },
        { nome: 'Fat Ronnie\'s', cosa: 'Burger', stato: 'usato', avviso: 'Contatti non verificati.', fonti: [] },
      ],
      dormire: 'Generator Miami.',
      nota: 'Parcheggio a Mid Beach: in strada 3 $ l\'ora, nei garage circa 2 $ l\'ora (prezzi del mio viaggio).',
    },
    {
      numero: 9,
      titolo: 'Wynwood, Little Havana, Vizcaya',
      racconto:
        'La Miami di terra: colazione a Wynwood e murales, la Calle 8 con il Domino Park, la villa di Vizcaya a Coconut Grove. Il pomeriggio di nuovo al mare, la sera la serata di salsa con il GoCity Pass.',
      tratte: [],
      senzaStrada: 'In Uber: Wynwood è a un quarto d\'ora da Miami Beach, Little Havana e Coconut Grove a 20-25 minuti.',
      luoghi: [
        { nome: 'Wynwood Walls', indirizzo: '2520 NW 2nd Ave, Miami', gps: [25.80114, -80.19966], fonti: ['osm'] },
        { nome: 'Domino Park (Máximo Gómez Park)', indirizzo: 'SW 8th St e SW 15th Ave, Little Havana', gps: [25.76549, -80.21937], fonti: ['osm'] },
        { nome: 'Vizcaya Museum & Gardens', indirizzo: '3251 S Miami Ave, Miami FL 33129', orari: '09:30-16:30, chiuso il martedì', biglietto: 'Adulti 25 $ durante i restauri (32 $ pieno); bambini 6-12 anni 10 $', telefono: '+1 305 250 9133', web: 'vizcaya.org', gps: [25.7447, -80.21158], fonti: ['vizcaya', 'osm'] },
      ],
      mangiare: [
        { nome: 'Zak the Baker', cosa: 'Colazione a Wynwood', stato: 'usato', avviso: 'Contatti non verificati.', fonti: [] },
        { nome: 'Salsa Mia (Salsa Night)', cosa: 'Lezione di salsa e serata, prenotazione obbligatoria', telefono: '+1 305 458 4558', stato: 'usato', avviso: 'Numero dai documenti del mio viaggio, non riverificato. Dress code «glamour tropicale».', fonti: [] },
      ],
      dormire: 'Generator Miami.',
    },
    {
      numero: 10,
      titolo: 'Rientro',
      racconto: 'Check-out e saluti.',
      tratte: [{ da: 'Miami Beach', a: 'Aeroporto MIA', km: 24, minuti: 30 }],
      luoghi: [],
      mangiare: [],
      dormire: 'Nessun pernottamento.',
    },
  ],
  mappa: {
    percorso: ['Aeroporto', 'Key West', 'Marathon', 'Everglades', 'Shark Valley', 'Naples', 'Clearwater', 'Orlando', 'Kennedy'],
    ritorno: ['Kennedy', 'Miami Beach'],
    legenda: 'Linea piena: andata dalle Keys a Cape Canaveral. Tratteggio: rientro a Miami sulla Turnpike.',
    notaTempi: 'Tempi stimati senza traffico (OSRM su OpenStreetMap). Sull\'Overseas Highway e intorno a Miami e Orlando aggiungi un 20-30%.',
    notaTempiFonti: ['osrm'],
    scalaKm: 50,
  },
  primaDiPartire: [
    {
      titolo: 'Documenti e auto',
      righe: [
        { voce: 'ESTA', valore: 'Obbligatorio. 40,62 $ dal 16 ottobre 2026, vale 2 anni o fino alla scadenza del passaporto. Solo su esta.cbp.dhs.gov.', fonti: ['esta'] },
        { voce: 'Patente', valore: 'Quella italiana va bene per guidare da turista; porta anche il passaporto al ritiro.' },
        { voce: 'Noleggio', valore: 'Sixt al Rental Car Center del MIA, aperto 24 ore. Serve una carta di credito intestata al guidatore.', fonti: ['sixt'] },
        { voce: 'Pedaggi', valore: 'Turnpike e molte strade di Miami sono senza contanti: il pedaggio arriva dalla targa (Toll-By-Plate) o dal programma pedaggi del noleggio. Sixt aggiunge una commissione per ogni giorno d\'uso con un tetto per noleggio. Le express lanes accettano solo SunPass.', fonti: ['pedaggi', 'sixt-pedaggi'] },
        { voce: 'Assicurazione', valore: 'Indispensabile: la sanità americana costa moltissimo.', fonti: ['vs'] },
      ],
    },
    {
      titolo: 'Soldi',
      righe: [
        { voce: 'Valuta', valore: 'Dollaro. A fine ottobre 2026 1 € ≈ 1,12 $.', fonti: ['bce'] },
        { voce: 'Costi reali', valore: 'Fast food 20 $, ristorante semplice 35 $, ristorante vero da 50 $, più il 7% di tasse e il 18-20% di mancia. Controlla se la mancia è già nel conto.' },
        { voce: 'Parchi nazionali', valore: 'Dal 2026 i non residenti pagano 100 $ in più a persona alle Everglades; il pass annuale America the Beautiful per stranieri costa 250 $.', fonti: ['nps-ever', 'nps-yose'] },
      ],
    },
    {
      titolo: 'Telefono, corrente, ora',
      righe: [
        { voce: 'Dati', valore: 'eSIM o SIM USA attivata prima di partire; wifi in hotel e nei parchi.' },
        { voce: 'Corrente', valore: '120 V, prese A e B: serve un adattatore.', fonti: ['prese'] },
        { voce: 'Fuso', valore: 'Sei ore indietro rispetto all\'Italia.', fonti: ['vs'] },
      ],
    },
    {
      titolo: 'Clima e sicurezza',
      righe: [
        { voce: 'Uragani', valore: 'Stagione da giugno a novembre. Segui le allerte locali e tieni flessibile il giro delle Keys.', fonti: ['vs'] },
        { voce: 'Zanzare e sole', valore: 'Repellente e crema sempre; d\'estate piove quasi ogni pomeriggio.' },
        { voce: 'Città', valore: 'Viaggiare Sicuri segnala criminalità in aumento in alcune zone urbane la sera: Uber per tornare la notte.', fonti: ['vs'] },
      ],
    },
  ],
  emergenze: {
    numeri: [{ voce: 'Emergenze (polizia, ambulanza, pompieri)', valore: '911', fonti: ['vs'] }],
    ambasciata: [
      { nome: 'Consolato Generale d\'Italia a Miami', cosa: 'Competente per la Florida', indirizzo: '4000 Ponce de León Blvd, Suite 590, Coral Gables FL 33146', telefono: '+1 305 374 6322 · miami.urp@esteri.it', web: 'consmiami.esteri.it', stato: 'ufficiale', fonti: ['cg-miami'] },
      { nome: 'Consolato di Miami, numero di emergenza', cosa: 'Solo emergenze gravi: lun-ven 18:00-22:00, sabato, domenica e festivi 08:00-22:00', telefono: '+1 305 753 0532', stato: 'ufficiale', fonti: ['cg-miami'] },
      { nome: 'Ambasciata d\'Italia a Washington', cosa: 'Centralino e cellulare di emergenza', indirizzo: '3000 Whitehaven St NW, Washington DC 20008', telefono: '+1 202 612 4400 · emergenze +1 202 257 3753', stato: 'ufficiale', fonti: ['vs'] },
    ],
    ospedali: [
      { nome: 'Mount Sinai Medical Center', cosa: 'Miami Beach, pronto soccorso 24 ore', indirizzo: '4302 Alton Rd, Miami Beach', telefono: '+1 305 674 2121', stato: 'ufficiale', fonti: ['sinai-miami'] },
      { nome: 'Lower Keys Medical Center', cosa: 'Key West', indirizzo: '5900 College Rd, Key West FL 33040', telefono: '+1 305 294 5531', stato: 'ufficiale', fonti: ['lkmc'] },
      { nome: 'Fishermen\'s Community Hospital', cosa: 'Marathon', indirizzo: '3301 Overseas Hwy, Marathon FL 33050', telefono: '+1 305 743 5533', stato: 'ufficiale', fonti: ['fishermen'] },
      { nome: 'NCH Baker Hospital Downtown', cosa: 'Naples', indirizzo: '350 7th St N, Naples FL 34102', telefono: '+1 239 624 5000', stato: 'ufficiale', avviso: 'Un\'altra fonte dà +1 239 436 5000.', fonti: ['nch'] },
      { nome: 'AdventHealth Orlando', cosa: 'Orlando', indirizzo: '601 E Rollins St, Orlando FL 32803', telefono: '+1 407 303 5600', stato: 'ufficiale', fonti: ['advent'] },
      { nome: 'Health First Cape Canaveral Hospital', cosa: 'Cocoa Beach, pronto soccorso 24 ore', indirizzo: '701 W Cocoa Beach Causeway, Cocoa Beach', telefono: '+1 321 799 7111', stato: 'ufficiale', fonti: ['hf'] },
    ],
  },
  contatti: [
    {
      gruppo: 'Parchi ed enti',
      voci: [
        { nome: 'Everglades National Park', cosa: 'Tariffe, condizioni, avvisi', web: 'nps.gov/ever', stato: 'ufficiale', fonti: ['nps-ever'] },
        { nome: 'Florida State Parks', cosa: 'Bahia Honda, Fort Zachary Taylor', web: 'floridastateparks.org', stato: 'ufficiale', fonti: ['bahia', 'ftz'] },
        { nome: 'GoCity Miami', cosa: 'Pass con airboat, speedboat e Salsa Night: prenota ogni attività prima', web: 'gocity.com', stato: 'usato', fonti: ['gator', 'thriller'] },
      ],
    },
  ],
  budget: {
    righe: [
      { voce: 'Volo Italia-Miami' },
      { voce: 'ESTA', costo: '40,62 $' },
      { voce: 'Cassa comune del viaggio (attività e auto)', costo: '270 €', nota: 'a persona' },
      { voce: 'Noleggio Sixt e carburante' },
      { voce: 'Pedaggi e commissione Sixt' },
      { voce: 'Fort Zachary Taylor', costo: '6 $ + 0,50 $', nota: 'ad auto + a persona' },
      { voce: 'Hemingway Home', costo: '19 $' },
      { voce: 'Bahia Honda', costo: '8 $ + 0,50 $', nota: 'ad auto + a persona' },
      { voce: 'Everglades, ingresso + supplemento stranieri', costo: '35 $ + 100 $', nota: 'auto + a persona' },
      { voce: 'Tram di Shark Valley', costo: '36 $' },
      { voce: 'Parco a tema Universal, 1 giorno', costo: 'da 119 $ + tasse' },
      { voce: 'Kennedy Space Center', costo: '77 $' },
      { voce: 'Vizcaya', costo: '25 $' },
      { voce: 'Spesa personale nel resto del viaggio', costo: '900-1.000 $', nota: 'a testa, nel mio viaggio' },
    ],
    nota: 'Le cifre sono le tariffe ufficiali di novembre 2026 o quelle annotate nel viaggio. Le righe vuote le riempi tu.',
    cambio: 'Cambio di riferimento: 1 € ≈ 1,12 $ (BCE, 30/10/2026).',
    cambioFonti: ['bce'],
  },
  valigia: [
    { gruppo: 'Documenti', voci: ['Passaporto e ricevuta ESTA', 'Patente italiana', 'Carta di credito del guidatore', 'Polizza sanitaria', 'Voucher Sixt e GoCity Pass', 'Questa guida'] },
    { gruppo: 'Vestiti', voci: ['Zaino o borsone, niente trolley', 'Costume e telo', 'Felpa per l\'aria condizionata', 'Giacca antipioggia leggera', 'Pantaloni lunghi per le Everglades', 'Un capo elegante per i locali con dress code'] },
    { gruppo: 'Mare e sole', voci: ['Repellente per zanzare', 'Crema solare alta', 'Maschera da snorkeling', 'Occhiali e cappello'] },
    { gruppo: 'Tecnica', voci: ['Adattatore per prese A/B', 'Supporto per il telefono in auto', 'Cavo USB per l\'auto', 'Mappe offline delle Keys'] },
  ],
  lingua: {
    nome: 'Inglese americano, per le situazioni pratiche',
    pronuncia: 'Frasi in inglese; a Miami lo spagnolo è diffusissimo e funziona quasi ovunque.',
  },
  frasario: [
    {
      gruppo: 'In auto',
      frasi: [
        { it: 'Il pieno, per favore', loc: 'Fill it up, please', nota: 'quasi ovunque si paga prima alla pompa' },
        { it: 'Dove posso parcheggiare?', loc: 'Where can I park?' },
        { it: 'Il pedaggio è compreso?', loc: 'Are tolls included?' },
        { it: 'Ho una gomma a terra', loc: 'I have a flat tire' },
        { it: 'Riconsegno l\'auto', loc: 'I\'m returning the car' },
      ],
    },
    {
      gruppo: 'A tavola',
      frasi: [
        { it: 'Il servizio è incluso?', loc: 'Is the tip included?' },
        { it: 'Conti separati, per favore', loc: 'Separate checks, please' },
        { it: 'Da portare via', loc: 'To go' },
        { it: 'Il conto', loc: 'The check, please' },
      ],
    },
    {
      gruppo: 'Emergenze',
      frasi: [
        { it: 'Aiuto!', loc: 'Help!' },
        { it: 'Chiamate un\'ambulanza', loc: 'Call an ambulance, please' },
        { it: 'Ho avuto un incidente', loc: 'I\'ve had an accident' },
        { it: 'Mi ha punto qualcosa', loc: 'I\'ve been stung' },
      ],
    },
  ],
  numeri: [
    { it: '1', loc: 'one' },
    { it: '2', loc: 'two' },
    { it: '5', loc: 'five' },
    { it: '10', loc: 'ten' },
    { it: '20', loc: 'twenty' },
    { it: '50', loc: 'fifty' },
    { it: '100', loc: 'one hundred' },
  ],
  pagineSito: [
    { titolo: 'Il viaggio: Florida in 10 giorni', path: '/viaggi/florida-road-trip' },
    { titolo: 'Florida, la scheda', path: '/destinazioni/florida' },
    { titolo: 'Airboat nelle Everglades', path: '/esperienze/florida/everglades-airboat' },
    { titolo: 'Kennedy Space Center', path: '/esperienze/florida/kennedy-space-center' },
    { titolo: 'La casa di Hemingway', path: '/esperienze/florida/hemingway-home' },
  ],
  consultate: 'Consultate il 2 novembre 2026. Prezzi e orari cambiano: prima di pagare, guarda sempre la fonte ufficiale.',
  nonVerificato: [
    'Indirizzi e telefoni di ristoranti e locali (Doce Provisions, CVI.CHE 105, Garcia\'s, Robbie\'s, Blue Heaven, Burdine\'s, Sunset Grille, La Nina, Alberto\'s, Gringos Locos, Mango\'s, Keke\'s, Fratelli la Bufala, Santorini, Fat Ronnie\'s, Zak the Baker)',
    'Indirizzo e telefono del Generator Miami',
    'Prezzi di Turtle Hospital, Butterfly Conservatory, Mel Fisher, Dalí Museum, Ringling ed Edison & Ford',
    'Tariffa della commissione pedaggi Sixt in Florida e telefono di Sixt MIA',
    'Prezzo ufficiale dell\'airboat senza pass e delle bici a Shark Valley',
    'Parcheggio di Universal (25 o 26 $)',
    'Nomi degli hotel di Key West, Marathon e Naples e della villa di Orlando: non annotati nei miei documenti',
  ],
  fonti: [
    { id: 'esta', titolo: 'CBP, ESTA', url: 'https://esta.cbp.dhs.gov/' },
    { id: 'vs', titolo: 'Viaggiare Sicuri, scheda Stati Uniti', url: 'https://www.viaggiaresicuri.it/find-country/country/USA' },
    { id: 'cg-miami', titolo: 'Consolato Generale d\'Italia a Miami, numeri di emergenza', url: 'https://consmiami.esteri.it/en/chi-siamo/numeri-di-emergenza/' },
    { id: 'bce', titolo: 'BCE, cambi di riferimento EUR/USD', url: 'https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/eurofxref-graph-usd.en.html' },
    { id: 'prese', titolo: 'Remitly, prese elettriche', url: 'https://www.remitly.com/blog/technology/electrical-outlets-in-italy/' },
    { id: 'nps-ever', titolo: 'NPS, Everglades, tariffe', url: 'https://www.nps.gov/ever/planyourvisit/fees.htm' },
    { id: 'nps-yose', titolo: 'NPS, Yosemite, tariffe (pass America the Beautiful)', url: 'https://www.nps.gov/yose/planyourvisit/fees.htm' },
    { id: 'tram', titolo: 'Shark Valley Tram Tours', url: 'https://www.sharkvalleytramtours.com/?p=11400' },
    { id: 'gator', titolo: 'GoCity, Everglades Alligator Farm', url: 'https://gocity.com/en/miami/attractions/everglades-alligator-farm-and-airboat-ride' },
    { id: 'bahia', titolo: 'Florida State Parks, Bahia Honda', url: 'https://www.floridastateparks.org/parks-and-trails/bahia-honda-state-park/hours-fees' },
    { id: 'ftz', titolo: 'Florida State Parks, Fort Zachary Taylor', url: 'https://www.floridastateparks.org/parks-and-trails/fort-zachary-taylor-historic-state-park/hours-fees' },
    { id: 'ksc', titolo: 'Kennedy Space Center, biglietti', url: 'https://www.kennedyspacecenter.com/info/tickets' },
    { id: 'hemingway', titolo: 'Hemingway Home, tariffe', url: 'https://www.hemingwayhome.com/rates-info' },
    { id: 'butterfly', titolo: 'Key West Butterfly & Nature Conservatory', url: 'https://www.keywestbutterfly.com/' },
    { id: 'melfisher', titolo: 'Mel Fisher Maritime Museum', url: 'https://www.melfisher.org/' },
    { id: 'turtle', titolo: 'The Turtle Hospital', url: 'https://www.turtlehospital.org/' },
    { id: 'vizcaya', titolo: 'Vizcaya, orari e biglietti', url: 'https://vizcaya.org/visit/hours-and-admission/' },
    { id: 'dali', titolo: 'The Dalí Museum', url: 'https://thedali.org/' },
    { id: 'ringling', titolo: 'The Ringling, visita', url: 'https://www.ringling.org/visit/' },
    { id: 'universal', titolo: 'Theme Park Shark, prezzi Universal 2026', url: 'https://themeparkshark.com/2026/03/30/universal-orlando-ticket-prices-2026/' },
    { id: 'disney', titolo: 'ClickOrlando, prezzi Disney World', url: 'https://www.clickorlando.com/news/local/2025/10/08/disney-world-breaks-200-barrier-for-1-day-peak-ticket' },
    { id: 'thriller', titolo: 'GoCity, Thriller Miami Speedboat', url: 'https://gocity.com/en/miami/attractions/thriller-miami-speedboat-adventures' },
    { id: 'sixt', titolo: 'Sixt, Miami International Airport', url: 'https://www.sixt.com/car-rental/usa/miami-fl/miami-int-airport/' },
    { id: 'sixt-pedaggi', titolo: 'Sixt, help center pedaggi', url: 'https://www.sixt.com/help-center/articles/tolls/' },
    { id: 'pedaggi', titolo: 'TollGuru, strade a pedaggio in Florida', url: 'https://beta.tollguru.mapup.ai/florida-toll-roads-bridges-express-lanes-expressways-sunpass' },
    { id: 'sinai-miami', titolo: 'Mount Sinai Medical Center', url: 'https://www.msmc.com/location/mount-sinai-medical-center-main-campus-4302/' },
    { id: 'lkmc', titolo: 'Lower Keys Medical Center', url: 'https://lkmc.com/emergency-department' },
    { id: 'fishermen', titolo: 'Baptist Health, Fishermen\'s Community Hospital', url: 'https://baptisthealth.net/doctors/fishermen\'s-community-hospital/1999628' },
    { id: 'nch', titolo: 'NCH Baker Hospital', url: 'https://locations.nchmd.org/fl/naples/nch-ir-imaging-baker-hospital' },
    { id: 'advent', titolo: 'AdventHealth Orlando, numeri', url: 'https://www.adventhealth.com/locations/hospitals/orlando/phone-directory' },
    { id: 'hf', titolo: 'Health First, ospedali (PDF)', url: 'https://www.hf.org/sites/default/files/2022-09/3_HF%20Hospitals%20r10142021_JC.pdf' },
    { id: 'osm', titolo: 'OpenStreetMap / Nominatim (coordinate)', url: 'https://nominatim.openstreetmap.org' },
    { id: 'osrm', titolo: 'OSRM su dati OpenStreetMap', url: 'https://router.project-osrm.org' },
  ],
}
