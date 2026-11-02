import type { Guida } from './types'

/**
 * Guida PDF «Canada orientale in 16 giorni». Il racconto viene da
 * src/content/viaggi/80-canada-itinerario.md; documenti, ambasciata,
 * consolati, ospedali, prezzi e contatti sono stati verificati sul web il
 * 2/11/2026 (Viaggiare Sicuri, canada.ca, siti ufficiali delle attrazioni)
 * e rimandano alle fonti in fondo al file.
 *
 * Le schede raggruppano più giorni nello stesso posto (campo `fino`).
 * Distanze e tempi: OSRM su dati OpenStreetMap, traffico libero.
 * Coordinate: OpenStreetMap (Nominatim).
 */

export const guidaCanada: Guida = {
  slug: 'canada-itinerario',
  tripSlug: 'canada-itinerario',
  paese: 'Canada',
  titolo: 'Canada orientale',
  sottotitolo: 'Sedici giorni on the road da Toronto a Tadoussac: Niagara, Mille Isole, Ottawa, Montréal, Québec e le balene del San Lorenzo. Strade, biglietti e numeri utili.',
  autore: 'Rick',
  verificatoAl: 'novembre 2026',
  intro: [
    'Il Canada orientale l\'abbiamo girato in macchina, con amici, su un pick-up a noleggio preso a Toronto e lasciato a Montréal. Le strade le abbiamo trovate belle e larghe: il percorso segue il lago Ontario e poi il San Lorenzo fino al fiordo del Saguenay.',
    'Qui ci sono le tratte con chilometri e tempi, indirizzi, orari e prezzi dei posti, le regole di guida che sorprendono, i pedaggi della 407 e i numeri da avere in tasca, dal consolato agli ospedali.',
    'Ho ricontrollato tutto a novembre 2026. Diverse attrazioni sono stagionali (battello del Niagara, crociere delle balene, Fort Henry): prima di partire guarda le date sui siti ufficiali.',
  ],
  cosaInPiu: [
    'Ogni tratta con chilometri e tempi di guida, ogni luogo con orari, biglietto e QR per Google Maps',
    'eTA, patente, sola andata del noleggio, 407 ETR e regole di guida di Ontario e Québec',
    'Ambasciata a Ottawa e consolati di Toronto e Montréal con i cellulari di emergenza, ospedali città per città',
    'Prezzi 2026 corretti: CN Tower 47 CAD, Journey Behind the Falls 33 CAD',
    'Budget, valigia, frasario francese del Québec',
  ],
  tappe: [
    { nome: 'Toronto', gps: [43.64471, -79.38014], giorno: 'G1-2', etichetta: 'sinistra' },
    { nome: 'Niagara Falls', gps: [43.07944, -79.07899], giorno: 'G3-4', etichetta: 'sotto' },
    { nome: 'Niagara-on-the-Lake', gps: [43.25561, -79.07233], giorno: 'G4', etichetta: 'destra' },
    { nome: 'Gananoque · Mille Isole', gps: [44.33527, -76.16466], giorno: 'G5', etichetta: 'destra' },
    { nome: 'Kingston', gps: [44.23088, -76.45902], giorno: 'G6', etichetta: 'sotto' },
    { nome: 'Ottawa', gps: [45.42284, -75.70306], giorno: 'G6-7', etichetta: 'sinistra' },
    { nome: 'Mont-Tremblant', gps: [46.11588, -74.58914], giorno: 'G8', etichetta: 'sinistra' },
    { nome: 'Montréal', gps: [45.50444, -73.55599], giorno: 'G9-10 · G15-16', etichetta: 'destra' },
    { nome: 'Québec', gps: [46.81182, -71.20514], giorno: 'G11-12', etichetta: 'sinistra' },
    { nome: 'Baie-Saint-Paul', gps: [47.44434, -70.50545], giorno: 'G13', etichetta: 'sinistra' },
    { nome: 'Tadoussac', gps: [48.14334, -69.71746], giorno: 'G13-14', etichetta: 'destra' },
  ],
  giorni: [
    {
      numero: 1,
      fino: 2,
      titolo: 'Toronto',
      paginaSito: '/destinazioni/canada/toronto',
      racconto:
        'Dal Pearson in centro con l\'UP Express e la sera un giro sul lungolago dell\'Harbourfront. Il secondo giorno la CN Tower la mattina, pranzo al St. Lawrence Market, il Distillery District, Kensington Market e il traghetto per le Toronto Islands per lo skyline al tramonto. L\'auto la ritiri il terzo giorno.',
      tratte: [{ da: 'Aeroporto Pearson', a: 'Union Station', km: 31, minuti: 32, mezzo: 'UP Express in treno', nelMioViaggio: 'circa 25 minuti in treno' }],
      luoghi: [
        { nome: 'CN Tower', indirizzo: '290 Bremner Blvd, Toronto', biglietto: 'Ingresso a orario (Main Observation Level) 47 CAD più tasse', web: 'cntower.ca', gps: [43.64256, -79.38709], nota: 'Orari ridotti in alcune date di novembre e dicembre: controlla sul sito.', fonti: ['cntower', 'osm'] },
        { nome: 'Union Station', indirizzo: '65 Front St W (140 Bay St)', gps: [43.64471, -79.38014], nota: 'Arrivo dell\'UP Express dall\'aeroporto.', fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Toronto, zona Union Station e lungolago (nome dell\'hotel non annotato). Il parcheggio degli hotel del centro si paga a parte.',
    },
    {
      numero: 3,
      fino: 4,
      titolo: 'Le cascate del Niagara',
      paginaSito: '/destinazioni/canada/niagara',
      racconto:
        'Ritirato il pick-up, un\'ora e mezza fino alle cascate. Il battello Voyage to the Falls è il modo di vederle che ci è piaciuto di più: si entra nella nebbia delle Horseshoe Falls con il poncho rosso e ci si bagna comunque. Il giorno dopo l\'elicottero, bello e scenografico ma meno del battello, e nel pomeriggio la Niagara Parkway fino a Niagara-on-the-Lake.',
      tratte: [
        { da: 'Toronto', a: 'Niagara Falls (Table Rock)', km: 131, minuti: 100, nelMioViaggio: 'circa un\'ora e mezza' },
        { da: 'Niagara Falls', a: 'Niagara-on-the-Lake (Niagara Parkway)', km: 24, minuti: 31 },
      ],
      luoghi: [
        { nome: 'Niagara City Cruises, Voyage to the Falls', web: 'niagaracitycruises.com', nota: 'Stagione da primavera all\'autunno (nel 2026 ha aperto il 1° maggio). Prezzi e date ufficiali da verificare sul sito.', fonti: ['ncc'] },
        { nome: 'Journey Behind the Falls (Table Rock)', indirizzo: '6650 Niagara Parkway, Niagara Falls ON', biglietto: 'Adulti 33,00, bambini 3-12 anni 21,50, fino a 2 anni gratis', web: 'niagaraparks.com', gps: [43.07944, -79.07899], fonti: ['jbtf', 'osm'] },
        { nome: 'Niagara Helicopters', orari: 'Tutti i giorni dalle 09:00 al tramonto, con buona visibilità; niente prenotazione', telefono: '+1 905 357 5672', web: 'niagarahelicopters.com', nota: 'Volo di circa 9 minuti. Io ho speso sui 200 dollari a testa, a spanne.', fonti: ['heli'] },
        { nome: 'Niagara-on-the-Lake', gps: [43.25561, -79.07233], nota: 'Cittadina ottocentesca e cantine dell\'icewine.', fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Due notti a Niagara Falls: Fallsview per la vista, Lundy\'s Lane per spendere meno.',
      nota: 'I parcheggi vicino alle cascate sono cari: lascia l\'auto in hotel e usa le navette WEGO.',
    },
    {
      numero: 5,
      titolo: 'Le Mille Isole',
      paginaSito: '/destinazioni/canada/mille-isole',
      racconto:
        'La tappa di trasferimento più lunga, quattro ore lungo il lago Ontario fino a Gananoque, dove il San Lorenzo si spezza in quasi duemila isole. Crociera nel pomeriggio oppure la Thousand Islands Parkway in auto.',
      tratte: [{ da: 'Niagara-on-the-Lake', a: 'Gananoque', km: 413, minuti: 296, nelMioViaggio: 'circa 4 ore' }],
      luoghi: [
        { nome: 'Gananoque Boat Line (City Experiences)', telefono: '+1 855 647 9710', web: 'cityexperiences.com/gananoque', gps: [44.33527, -76.16466], nota: 'Crociere da 1 ora (da Gananoque o Ivy Lea), 3 ore e 5 ore con sosta a Boldt Castle. Per sbarcare a Boldt Castle, sul lato americano, servono i documenti per entrare negli Stati Uniti. Prezzi e stagione da verificare.', fonti: ['gbl', 'osm'] },
      ],
      mangiare: [],
      dormire: 'Gananoque, motel e B&B.',
    },
    {
      numero: 6,
      fino: 7,
      titolo: 'Kingston e Ottawa',
      paginaSito: '/destinazioni/canada/ottawa',
      racconto:
        'Kingston, prima capitale del Canada unito, con Fort Henry sulla collina. Poi Ottawa in un paio d\'ore. Il settimo giorno a piedi: Parliament Hill, le chiuse del canale Rideau, il ByWard Market e un grande museo, la National Gallery o il Museo della Storia a Gatineau.',
      tratte: [
        { da: 'Gananoque', a: 'Fort Henry (Kingston)', km: 32, minuti: 30 },
        { da: 'Kingston', a: 'Ottawa', km: 194, minuti: 144, nelMioViaggio: 'circa 2 ore' },
      ],
      luoghi: [
        { nome: 'Fort Henry', indirizzo: 'Fort Henry Dr, Kingston', web: 'forthenry.com', gps: [44.23088, -76.45902], nota: 'Aperto in stagione (da maggio a settembre secondo il mio programma); a ottobre 2026 c\'era Fort Fright. Prezzi da verificare.', fonti: ['forthenry', 'osm'] },
        { nome: 'Parliament Hill', indirizzo: 'Wellington St, Ottawa', gps: [45.42284, -75.70306], nota: 'Il Centre Block è chiuso per restauro; le visite guidate gratuite negli altri edifici si prenotano online su visit.parl.ca.', fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Ottawa, ByWard Market o centro, due notti.',
      nota: 'Gatineau, al di là del ponte, è già Québec: da lì la segnaletica è solo in francese.',
    },
    {
      numero: 8,
      titolo: 'Mont-Tremblant e le Laurentides',
      paginaSito: '/destinazioni/canada/mont-tremblant',
      racconto:
        'Colline di boschi e laghi a nord di Montréal. Mont-Tremblant è una stazione sciistica con un villaggio pedonale di case colorate; in estate e autunno la cabinovia sale in vetta.',
      tratte: [{ da: 'Ottawa', a: 'Mont-Tremblant', km: 155, minuti: 133, nelMioViaggio: 'circa 2 ore' }],
      luoghi: [{ nome: 'Mont-Tremblant', gps: [46.11588, -74.58914], nota: 'Prezzi della cabinovia e del Parc national non verificati. Nei weekend d\'autunno prenota presto o dormi nei paesi vicini.', fonti: ['osm'] }],
      mangiare: [],
      dormire: 'Mont-Tremblant o dintorni.',
    },
    {
      numero: 9,
      fino: 10,
      titolo: 'Montréal',
      paginaSito: '/destinazioni/canada/montreal',
      racconto:
        'Arrivati, l\'auto resta in hotel. Il primo pomeriggio il Vieux-Montréal e la basilica di Notre-Dame, la sera il Vieux-Port. Il giorno dopo il Mont Royal fino al belvedere Kondiaronk, il Plateau, i bagel a legna del Mile End e il Marché Jean-Talon.',
      tratte: [{ da: 'Mont-Tremblant', a: 'Montréal, Vieux-Montréal', km: 133, minuti: 112, nelMioViaggio: 'circa un\'ora e mezza' }],
      luoghi: [
        { nome: 'Basilica di Notre-Dame', indirizzo: '110 rue Notre-Dame Ouest, Montréal H2Y 1T1', telefono: '+1 514 842 2925', web: 'basiliquenotredame.ca', gps: [45.50444, -73.55599], nota: 'Ingresso a pagamento. Il biglietto Day & Night con lo spettacolo AURA parte da 43,50; il prezzo della sola visita va visto sul sito.', fonti: ['notredame', 'osm'] },
      ],
      mangiare: [],
      dormire: 'Montréal, Vieux-Montréal o Plateau, due notti.',
      nota: 'Su tutta l\'isola di Montréal è vietato svoltare a destra con il rosso.',
    },
    {
      numero: 11,
      fino: 12,
      titolo: 'Québec, Montmorency e Île d\'Orléans',
      paginaSito: '/destinazioni/canada/quebec',
      racconto:
        'Meno di tre ore lungo il San Lorenzo fino alla città fortificata. Il pomeriggio la Terrasse Dufferin sotto lo Château Frontenac e la città bassa del Petit-Champlain. Il giorno dopo le cascate di Montmorency, 83 metri, e l\'anello dell\'Île d\'Orléans tra fattorie e cantine di sidro.',
      tratte: [
        { da: 'Montréal', a: 'Québec (Château Frontenac)', km: 251, minuti: 207, nelMioViaggio: '2 ore e 45-3 ore' },
        { da: 'Québec', a: 'Chute Montmorency', km: 14, minuti: 17 },
      ],
      luoghi: [
        { nome: 'Château Frontenac e Terrasse Dufferin', indirizzo: '1 rue des Carrières, Québec', gps: [46.81182, -71.20514], fonti: ['osm'] },
        { nome: 'Parc de la Chute-Montmorency (Sépaq)', gps: [46.89075, -71.14774], nota: 'Parcheggio e cabinovia a pagamento; tariffe non verificate.', fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Québec, dentro le mura o appena fuori con parcheggio, due notti.',
    },
    {
      numero: 13,
      fino: 14,
      titolo: 'Charlevoix e Tadoussac',
      paginaSito: '/destinazioni/canada/charlevoix-tadoussac',
      racconto:
        'Baie-Saint-Paul, gallerie e caseifici, poi la strada 362 alta sul fiume fino a La Malbaie e il traghetto gratuito per Tadoussac. Il quattordicesimo giorno la crociera delle balene alla foce del Saguenay: balenottere, megattere nelle settimane giuste e i beluga, che vivono qui tutto l\'anno.',
      tratte: [
        { da: 'Montmorency', a: 'Baie-Saint-Paul', km: 83, minuti: 75 },
        { da: 'Baie-Saint-Paul', a: 'Tadoussac (traghetto compreso)', km: 123, minuti: 121 },
      ],
      luoghi: [
        { nome: 'Traghetto Baie-Sainte-Catherine-Tadoussac', web: 'traversiers.com', nota: 'Gratuito, passa tutto il giorno. Orari solo in PDF sul sito.', fonti: ['traghetto'] },
        { nome: 'Croisières AML, crociera delle balene', telefono: '+1 866 856 6668', web: 'croisieresaml.com', gps: [48.14334, -69.71746], nota: 'Circa 3-3,5 ore secondo marea e mare. Partenze anche da Baie-Sainte-Catherine, senza prendere il traghetto. Prezzo 2026 e date di stagione da verificare.', fonti: ['aml', 'osm'] },
      ],
      mangiare: [],
      dormire: 'Una notte a Tadoussac o due, in auberge o motel. In luglio e agosto i posti finiscono presto.',
      nota: 'Chi soffre il mare può guardare le balene da terra a Cap-de-Bon-Désir, poco a est di Tadoussac.',
    },
    {
      numero: 15,
      fino: 16,
      titolo: 'Rientro a Montréal e partenza',
      racconto:
        'Il giorno di guida più lungo: si ripercorre Charlevoix e il San Lorenzo fino a Montréal, cinque ore e mezza senza soste. Chi ha il volo la sera dopo può spezzare a Québec. Riconsegna dell\'auto e volo da Montréal-Trudeau.',
      tratte: [
        { da: 'Tadoussac', a: 'Montréal', km: 471, minuti: 400, nelMioViaggio: 'circa 5 ore e mezza' },
        { da: 'Montréal, centro', a: 'Aeroporto Montréal-Trudeau (YUL)', km: 20, minuti: 24 },
      ],
      luoghi: [{ nome: 'Aeroporto Montréal-Trudeau', gps: [45.46873, -73.74249], nota: 'Riconsegnare l\'auto qui evita il taxi. Tre ore prima per i voli internazionali.', fonti: ['osm'] }],
      mangiare: [],
      dormire: 'Montréal l\'ultima notte.',
    },
  ],
  mappa: {
    percorso: ['Toronto', 'Niagara Falls', 'Niagara-on', 'Gananoque', 'Kingston', 'Ottawa', 'Mont-Tremblant', 'Montréal', 'Québec', 'Baie-Saint-Paul', 'Tadoussac'],
    ritorno: ['Tadoussac', 'Montréal'],
    legenda: 'Linea piena: andata da Toronto a Tadoussac. Tratteggio: rientro a Montréal lungo il San Lorenzo.',
    notaTempi: 'Tempi stimati senza traffico (OSRM su OpenStreetMap). Toronto e Montréal nelle ore di punta e i lavori estivi allungano parecchio.',
    notaTempiFonti: ['osrm'],
    scalaKm: 100,
  },
  primaDiPartire: [
    {
      titolo: 'Documenti e ingresso',
      righe: [
        { voce: 'Passaporto', valore: 'Valido almeno per tutta la durata del soggiorno.', fonti: ['vs'] },
        { voce: 'eTA', valore: 'Obbligatoria per chi arriva in aereo, anche solo in transito. 7 CAD, solo su canada.ca; vale 5 anni o fino alla scadenza del passaporto. Il numero di passaporto deve essere lo stesso del check-in. Attenzione ai siti non ufficiali.', fonti: ['eta', 'vs'] },
        { voce: 'Patente', valore: 'In Ontario la patente straniera basta fino a tre mesi, in Québec fino a sei. Il permesso internazionale non è obbligatorio ma alcuni noleggiatori lo chiedono.' },
        { voce: 'Assicurazione', valore: 'Le cure per gli stranieri si pagano e costano molto: polizza con massimale alto.', fonti: ['vs'] },
      ],
    },
    {
      titolo: 'Auto e strade',
      righe: [
        { voce: 'Sola andata', valore: 'Lasciare l\'auto in un\'altra provincia costa quasi sempre un supplemento: chiedilo nel preventivo.' },
        { voce: '407 ETR', valore: 'Intorno a Toronto la 407 è a pedaggio elettronico: senza transponder la targa viene fotografata e il conto passa dal noleggiatore con le sue commissioni. Imposta «evita pedaggi»: la 401 è gratuita.' },
        { voce: 'Regole', valore: 'Destra con il rosso consentita in Ontario, vietata sull\'isola di Montréal. Mai sorpassare uno scuolabus fermo con le luci accese. In Québec gomme invernali obbligatorie dal 1° dicembre al 15 marzo.' },
        { voce: 'Condizioni stradali', valore: 'Numero 511.', fonti: ['vs'] },
      ],
    },
    {
      titolo: 'Soldi',
      righe: [
        { voce: 'Valuta', valore: 'Dollaro canadese (CAD). Il 30 ottobre 2026 1 € valeva 1,56 CAD.', fonti: ['cambio'] },
        { voce: 'Tasse', valore: 'I prezzi esposti sono quasi sempre senza tasse: in Ontario l\'HST è del 13%, in Québec circa il 15%.' },
        { voce: 'Mance', valore: '15-20% al ristorante, spesso proposta sul terminale della carta.' },
      ],
    },
    {
      titolo: 'Telefono, corrente, ora',
      righe: [
        { voce: 'Fuso', valore: 'Ontario e Québec sei ore indietro rispetto all\'Italia; Manitoba (Churchill) sette.', fonti: ['vs'] },
        { voce: 'Prefissi', valore: 'Dall\'Italia 001; per chiamare l\'Italia 011 39.', fonti: ['vs'] },
        { voce: 'Corrente', valore: '120 V, prese A e B: serve un adattatore.' },
        { voce: 'Sicurezza', valore: 'Viaggiare Sicuri raccomanda le normali precauzioni. D\'inverno informati sul meteo.', fonti: ['vs'] },
      ],
    },
  ],
  emergenze: {
    numeri: [
      { voce: 'Polizia, ambulanza, vigili del fuoco', valore: '911', fonti: ['vs'] },
      { voce: 'Condizioni stradali', valore: '511', fonti: ['vs'] },
    ],
    ambasciata: [
      { nome: 'Ambasciata d\'Italia a Ottawa', cosa: 'Copre anche l\'Ontario orientale (Mille Isole, Kingston)', indirizzo: '275 Slater Street, 21° piano, Ottawa ON K1P 5H9', telefono: '+1 613 232 2401 · emergenze +1 613 796 2283 · ambasciata.ottawa@esteri.it', web: 'ambottawa.esteri.it', stato: 'ufficiale', fonti: ['vs', 'amb-ottawa'] },
      { nome: 'Consolato Generale d\'Italia a Toronto', cosa: 'Ontario e Manitoba (anche Churchill); pubblico su appuntamento', indirizzo: '136 Beverley Street, Toronto ON M5T 1Y5', telefono: '+1 416 977 1566 · emergenze +1 416 456 3355 · toronto.consolato@esteri.it', web: 'constoronto.esteri.it', stato: 'ufficiale', fonti: ['vs', 'cg-toronto'] },
      { nome: 'Consolato Generale d\'Italia a Montréal', cosa: 'Québec', indirizzo: '3489 Drummond Avenue, Montréal QC H3G 1X6', telefono: '+1 514 849 8351 · emergenze +1 514 240 9991 · consolato.montreal@esteri.it', web: 'consmontreal.esteri.it', stato: 'ufficiale', avviso: 'Il sito dell\'Ambasciata riporta un altro numero (+1 438 229 4359): vale quello del Consolato, confermato da Viaggiare Sicuri.', fonti: ['vs', 'cg-montreal'] },
    ],
    ospedali: [
      { nome: 'Toronto General Hospital', cosa: 'Toronto, pronto soccorso dal 190 Elizabeth St', indirizzo: '200 Elizabeth St, Toronto', telefono: '+1 416 340 4800', stato: 'ufficiale', avviso: 'Viaggiare Sicuri dà anche +1 416 340 3111.', fonti: ['tgh', 'vs'] },
      { nome: 'Niagara Health, Niagara Falls Site', cosa: 'Niagara Falls', indirizzo: '5546 Portage Rd, Niagara Falls ON L2E 6X2', telefono: '+1 905 378 4647', stato: 'ufficiale', fonti: ['niagara-h'] },
      { nome: 'The Ottawa Hospital, Civic Campus', cosa: 'Ottawa', indirizzo: '1053 Carling Ave, Ottawa', telefono: '+1 613 722 7000', stato: 'ufficiale', fonti: ['ottawa-h', 'vs'] },
      { nome: 'CHUM', cosa: 'Montréal, pronto soccorso al Pavillon D', indirizzo: '1001 rue Sanguinet, Montréal H2X 1R6', telefono: '+1 514 890 8000', stato: 'ufficiale', fonti: ['chum', 'vs'] },
      { nome: 'Montreal General Hospital', cosa: 'Montréal', telefono: '+1 514 934 1934 · emergenze +1 514 934 8090', stato: 'ufficiale', fonti: ['vs'] },
      { nome: 'Hôtel-Dieu de Québec (CHU de Québec)', cosa: 'Québec, aperto 24 ore', indirizzo: '11 côte du Palais, Québec G1R 2J6', telefono: '+1 418 525 4444 (linea generale)', stato: 'ufficiale', fonti: ['hdq'] },
    ],
  },
  contatti: [
    {
      gruppo: 'Attrazioni e trasporti',
      voci: [
        { nome: 'Niagara Parks', cosa: 'Journey Behind the Falls, navette WEGO', web: 'niagaraparks.com', stato: 'ufficiale', fonti: ['jbtf'] },
        { nome: 'Société des traversiers du Québec', cosa: 'Traghetto gratuito Baie-Sainte-Catherine-Tadoussac', web: 'traversiers.com', stato: 'ufficiale', fonti: ['traghetto'] },
        { nome: 'Croisières AML', cosa: 'Crociere delle balene da Tadoussac e Baie-Sainte-Catherine', telefono: '+1 866 856 6668', web: 'croisieresaml.com', stato: 'non-provato', fonti: ['aml'] },
      ],
    },
    {
      gruppo: 'Estensione Churchill (non fatta da me)',
      nota: 'Gli orsi polari si vedono da metà ottobre a metà novembre. A Churchill non arriva nessuna strada: volo da Winnipeg o treno VIA Rail. Prezzi non pubblicati o non verificati: chiedi un preventivo.',
      voci: [
        { nome: 'Frontiers North', cosa: 'Tundra buggy, uscite giornaliere e pacchetti', telefono: '+1 800 663 9832 · +1 204 949 2050', web: 'frontiersnorth.com', stato: 'non-provato', fonti: ['frontiers'] },
        { nome: 'Great White Bear Tours', cosa: 'Polar Rover, Tundra Lodge, pacchetti', indirizzo: '174 Kelsey Blvd, Churchill MB R0B 0E0', telefono: '+1 866 262 6202', web: 'greatwhitebeartours.com', stato: 'non-provato', fonti: ['gwbt'] },
        { nome: 'Calm Air', cosa: 'Voli Winnipeg-Churchill', telefono: '+1 800 839 2256', web: 'calmair.com', stato: 'non-provato', fonti: ['calmair'] },
      ],
    },
  ],
  budget: {
    righe: [
      { voce: 'Volo Italia-Toronto, rientro da Montréal' },
      { voce: 'eTA', costo: '7 CAD' },
      { voce: 'Pick-up a noleggio e supplemento sola andata' },
      { voce: 'Carburante, circa 1.900-2.000 km' },
      { voce: 'CN Tower', costo: '47 CAD + tasse' },
      { voce: 'Voyage to the Falls', costo: 'circa 48 CAD + HST', nota: 'prezzo da rivenditori' },
      { voce: 'Journey Behind the Falls', costo: '33 CAD' },
      { voce: 'Elicottero sul Niagara', costo: 'sui 200 $', nota: 'a spanne, nel mio viaggio' },
      { voce: 'Crociera delle balene a Tadoussac' },
      { voce: 'Hotel, 15 notti' },
      { voce: 'Pasti, tasse e mance' },
    ],
    nota: 'Le cifre sono tariffe ufficiali di novembre 2026 o quelle del mio viaggio. Tasse e mance aggiungono circa un terzo a molti conti.',
    cambio: 'Cambio di riferimento: 1 € = 1,56 CAD (BCE, 30/10/2026). Per 10 CAD conta circa 6,40 €.',
    cambioFonti: ['cambio'],
  },
  valigia: [
    { gruppo: 'Documenti', voci: ['Passaporto e conferma eTA', 'Patente italiana (e internazionale se il noleggiatore la chiede)', 'Carta di credito del guidatore', 'Polizza sanitaria', 'Documenti per gli USA se sbarchi a Boldt Castle', 'Questa guida'] },
    { gruppo: 'Vestiti', voci: ['Giacca impermeabile per battello e balene', 'Pile e strati per le sere sul San Lorenzo', 'Scarpe comode', 'Cappello e guanti se vai in autunno', 'Abbigliamento artico per Churchill'] },
    { gruppo: 'In auto', voci: ['Supporto e cavo per il telefono', 'Navigatore impostato su «evita pedaggi»', 'Mappe offline del Québec', 'Copertura per i bagagli se il cassone è aperto'] },
    { gruppo: 'Tecnica e salute', voci: ['Adattatore per prese A/B', 'Pastiglie contro il mal di mare', 'Repellente (estate)', 'Binocolo per le balene'] },
  ],
  lingua: {
    nome: 'Francese del Québec',
    pronuncia: 'In Québec si parla francese; frasi in francese standard, che tutti capiscono. Accanto qualche parola tipica del posto.',
  },
  frasario: [
    {
      gruppo: 'Saluti e cortesia',
      frasi: [
        { it: 'Buongiorno', loc: 'Bonjour' },
        { it: 'Buonasera', loc: 'Bonsoir' },
        { it: 'Grazie', loc: 'Merci' },
        { it: 'Prego', loc: 'Bienvenue', nota: 'in Québec si risponde così al grazie' },
        { it: 'Per favore', loc: 'S\'il vous plaît' },
        { it: 'Scusi', loc: 'Excusez-moi' },
        { it: 'Parla inglese?', loc: 'Parlez-vous anglais?' },
      ],
    },
    {
      gruppo: 'In giro e in auto',
      frasi: [
        { it: 'Dov\'è…?', loc: 'Où est…?' },
        { it: 'Il pieno, per favore', loc: 'Le plein, s\'il vous plaît' },
        { it: 'Parcheggio', loc: 'Stationnement' },
        { it: 'Uscita', loc: 'Sortie' },
        { it: 'Lavori in corso', loc: 'Travaux' },
        { it: 'Traghetto', loc: 'Traversier' },
      ],
    },
    {
      gruppo: 'A tavola',
      frasi: [
        { it: 'Il conto, per favore', loc: 'L\'addition, s\'il vous plaît' },
        { it: 'Colazione · pranzo · cena', loc: 'Déjeuner · dîner · souper', nota: 'in Québec i nomi dei pasti sono questi' },
        { it: 'Acqua del rubinetto', loc: 'De l\'eau du robinet' },
      ],
    },
    {
      gruppo: 'Emergenze',
      frasi: [
        { it: 'Aiuto!', loc: 'À l\'aide!' },
        { it: 'Chiamate un\'ambulanza', loc: 'Appelez une ambulance' },
        { it: 'Ospedale', loc: 'Hôpital' },
        { it: 'Pronto soccorso', loc: 'Urgence' },
      ],
    },
  ],
  numeri: [
    { it: '1', loc: 'un' },
    { it: '2', loc: 'deux' },
    { it: '3', loc: 'trois' },
    { it: '4', loc: 'quatre' },
    { it: '5', loc: 'cinq' },
    { it: '10', loc: 'dix' },
    { it: '20', loc: 'vingt' },
    { it: '50', loc: 'cinquante' },
    { it: '100', loc: 'cent' },
  ],
  pagineSito: [
    { titolo: 'Il viaggio: Canada orientale in 16 giorni', path: '/viaggi/canada-itinerario' },
    { titolo: 'Canada, la scheda', path: '/destinazioni/canada' },
    { titolo: 'Niagara', path: '/destinazioni/canada/niagara' },
    { titolo: 'Charlevoix e Tadoussac', path: '/destinazioni/canada/charlevoix-tadoussac' },
    { titolo: 'Churchill e gli orsi polari', path: '/destinazioni/canada/churchill' },
  ],
  consultate: 'Consultate il 2 novembre 2026. Prezzi e stagioni cambiano ogni anno: prima di pagare, guarda sempre la fonte ufficiale.',
  nonVerificato: [
    'Prezzo e date 2026 ufficiali di Voyage to the Falls e prezzo di Niagara Helicopters',
    'Prezzi delle crociere delle Mille Isole e di Croisières AML 2026',
    'Fort Henry, cabinovia di Mont-Tremblant, Parc de la Chute-Montmorency: prezzi e stagione',
    'Tariffe 2026 della 407 ETR',
    'Visite al Parlamento di Ottawa (il sito non risponde ai controlli automatici)',
    'Prezzi di Frontiers North, Calm Air e VIA Rail per Churchill',
    'Nomi degli hotel: non annotati nei miei documenti',
  ],
  fonti: [
    { id: 'vs', titolo: 'Viaggiare Sicuri, scheda Canada (agg. 4/6/2026)', url: 'https://www.viaggiaresicuri.it/schede_paese/CAN.json' },
    { id: 'eta', titolo: 'Governo del Canada, eTA', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html' },
    { id: 'amb-ottawa', titolo: 'Ambasciata d\'Italia a Ottawa, numeri di emergenza', url: 'https://ambottawa.esteri.it/it/chi-siamo/numeri-di-emergenza/' },
    { id: 'cg-toronto', titolo: 'Consolato Generale d\'Italia a Toronto, contatti', url: 'https://constoronto.esteri.it/it/contatti/' },
    { id: 'cg-montreal', titolo: 'Consolato Generale d\'Italia a Montréal, emergenze', url: 'https://consmontreal.esteri.it/it/chi-siamo/numeri-di-emergenza/' },
    { id: 'cambio', titolo: 'Frankfurter (dati BCE), EUR/CAD 30/10/2026', url: 'https://api.frankfurter.dev/v1/latest?from=EUR&to=CAD' },
    { id: 'cntower', titolo: 'CN Tower, biglietti', url: 'https://www.cntower.ca/plan-your-visit/tickets-and-hours/tickets' },
    { id: 'ncc', titolo: 'Niagara City Cruises', url: 'https://www.niagaracitycruises.com/' },
    { id: 'jbtf', titolo: 'Niagara Parks, Journey Behind the Falls', url: 'https://www.niagaraparks.com/visit/attractions/journey-behind-the-falls' },
    { id: 'heli', titolo: 'Niagara Helicopters', url: 'https://www.niagarahelicopters.com/' },
    { id: 'gbl', titolo: 'City Experiences, Gananoque', url: 'https://www.cityexperiences.com/gananoque/city-cruises/' },
    { id: 'forthenry', titolo: 'Fort Henry', url: 'https://www.forthenry.com/' },
    { id: 'notredame', titolo: 'Basilica di Notre-Dame di Montréal', url: 'https://www.basiliquenotredame.ca/en' },
    { id: 'aml', titolo: 'Croisières AML, crociere delle balene', url: 'https://www.croisieresaml.com/en/our-cruises/whale-watching-boat-tours' },
    { id: 'traghetto', titolo: 'Société des traversiers du Québec, Tadoussac-Baie-Sainte-Catherine', url: 'https://www.traversiers.com/en/our-ferries/tadoussac-baie-sainte-catherine-ferry/fares/' },
    { id: 'frontiers', titolo: 'Frontiers North Adventures', url: 'https://www.frontiersnorth.com/' },
    { id: 'gwbt', titolo: 'Great White Bear Tours', url: 'https://www.greatwhitebeartours.com/' },
    { id: 'calmair', titolo: 'Calm Air', url: 'https://www.calmair.com/' },
    { id: 'tgh', titolo: 'UHN, Toronto General Hospital', url: 'https://www.uhn.ca/OurHospitals/TGH' },
    { id: 'niagara-h', titolo: 'HNHB Healthline, Niagara Falls Site', url: 'https://hnhbhealthline.ca/displayService.aspx?id=181955' },
    { id: 'ottawa-h', titolo: 'Champlain Healthline, Ottawa Hospital Civic', url: 'https://champlainhealthline.ca/displayService.aspx?id=210029' },
    { id: 'chum', titolo: 'Santé Québec, CHUM', url: 'https://sante.gouv.qc.ca/en/repertoire-ressources/ressource/?nofiche=1102474' },
    { id: 'hdq', titolo: 'Santé Québec, Hôtel-Dieu de Québec', url: 'https://sante.gouv.qc.ca/repertoire-ressources/ressource/?nofiche=461' },
    { id: 'osm', titolo: 'OpenStreetMap / Nominatim (coordinate)', url: 'https://nominatim.openstreetmap.org' },
    { id: 'osrm', titolo: 'OSRM su dati OpenStreetMap', url: 'https://router.project-osrm.org' },
  ],
}
