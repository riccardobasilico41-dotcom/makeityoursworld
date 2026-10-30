import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Canada orientale on the road in 16
// giorni: Toronto, Niagara, Ottawa, Montréal, Québec e Tadoussac". Il testo
// narrativo resta nel markdown (src/content/viaggi/80-canada-itinerario.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni
// "### Giorno N — ..." del markdown. L'estensione di Churchill è una sezione a
// parte del markdown (non fatta da Rick): compare qui solo in tappeMappa.
// Viaggio fatto da Rick, ma tappe e date ancora da confermare con lui: i
// pernottamenti restano 'consigliato'. Foto dei giorni CC0 o pubblico dominio
// da Wikimedia Commons (crediti in viaggi-giorno-foto-crediti.ts).

const IMG = '/images/viaggi/canada-itinerario'

export const canadaItinerarioMeta: TripMeta = {
  tripSlug: 'canada-itinerario',
  paeseSlug: 'canada',
  ritmo:
    'Regolare: due o tre notti nelle città (Toronto, Niagara, Ottawa, Montréal, Québec) alternate a giornate di guida di 2-4 ore; una sola tappa lunga, il rientro da Tadoussac a Montréal (circa 5 ore e mezza).',
  trasporti:
    'Pick-up o auto a noleggio ritirati a Toronto e riconsegnati a Montréal (supplemento di sola andata da chiedere nel preventivo), circa 1.900-2.000 km; UP Express dall\'aeroporto di Toronto, metro a Montréal, traghetto gratuito sul Saguenay, battello ed elicottero al Niagara.',
  stile: ['road trip', 'città', 'natura', 'cascate', 'nord america'],
  adattoA: [
    'chi vuole un primo viaggio in Canada facile da guidare, con città e natura insieme',
    'chi vuole vedere le cascate del Niagara sia dal battello sia dall\'alto',
    'chi parte tra giugno e metà ottobre, con battello e crociere delle balene in servizio',
    'chi vuole aggiungere gli orsi polari di Churchill e accetta un budget molto più alto',
  ],
  puntiForti: [
    'Le Horseshoe Falls viste da sotto con il battello e dall\'alto in elicottero',
    'Montréal e Vieux-Québec, le due città francofone sul San Lorenzo',
    'Le balene e i beluga alla foce del fiordo del Saguenay, a Tadoussac',
    'Strade belle e distanze regolari, comode con un pick-up a noleggio',
    'Un\'estensione pronta per gli orsi polari di Churchill, in tundra buggy',
  ],
  criticita: [
    'Supplemento di sola andata se si riconsegna l\'auto in Québec',
    'Pedaggi elettronici della 407 ETR intorno a Toronto addebitati dal noleggiatore con commissioni',
    'Tasse (13-15 %) e mance (15-20 %) che si aggiungono a quasi ogni prezzo',
    'Battello del Niagara e crociere delle balene solo da maggio all\'autunno',
    'Churchill è raggiungibile solo in aereo o con 45 ore di treno da Winnipeg, ed è molto cara',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito: 'in autonomia, con un pick-up a noleggio',
  },
  tappeMappa: [
    { nome: 'Toronto', destinazioneSlug: 'toronto' },
    { nome: 'Cascate del Niagara', destinazioneSlug: 'niagara' },
    { nome: 'Mille Isole e Kingston', destinazioneSlug: 'mille-isole' },
    { nome: 'Ottawa', destinazioneSlug: 'ottawa' },
    { nome: 'Mont-Tremblant', destinazioneSlug: 'mont-tremblant' },
    { nome: 'Montréal', destinazioneSlug: 'montreal' },
    { nome: 'Québec', destinazioneSlug: 'quebec' },
    { nome: 'Charlevoix e Tadoussac', destinazioneSlug: 'charlevoix-tadoussac' },
    { nome: 'Estensione: Churchill e gli orsi polari', destinazioneSlug: 'churchill' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Toronto', tratta: 'Aeroporto Pearson → Union Station, UP Express (circa 25 minuti)', pernottamento: 'Toronto, centro o lungolago', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'toronto', immagine: `${IMG}/giorno-01-toronto.jpg`, imageAlt: 'Lo skyline di Toronto con la CN Tower visto dalle Toronto Islands, oltre il lago' },
    { titoloGiorno: 'Giorno 2 — Toronto: la CN Tower, il lago e i mercati', pernottamento: 'Toronto, centro o lungolago', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'CN Tower intorno ai 43 CAD (ingresso base)', destinazioneSlug: 'toronto', immagine: `${IMG}/giorno-02-toronto.jpg`, imageAlt: 'La CN Tower di Toronto vista dal basso' },
    { titoloGiorno: 'Giorno 3 — Le cascate del Niagara dal battello', tratta: 'Toronto → Niagara Falls, circa 130 km (1 ora e mezza)', pernottamento: 'Niagara Falls, Fallsview o Lundy\'s Lane', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Voyage to the Falls 47,95 CAD più HST; Journey Behind the Falls circa 30 CAD più HST', destinazioneSlug: 'niagara', immagine: `${IMG}/giorno-03-niagara.jpg`, imageAlt: 'Il battello con i passeggeri in poncho rosso nelle acque agitate sotto le cascate del Niagara' },
    { titoloGiorno: 'Giorno 4 — Il Niagara in elicottero e Niagara-on-the-Lake', tratta: 'Niagara Falls → Niagara-on-the-Lake lungo la Niagara Parkway, circa 25 km', pernottamento: 'Niagara Falls o Niagara-on-the-Lake', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'volo in elicottero da circa 171 CAD più HST a persona', destinazioneSlug: 'niagara', immagine: `${IMG}/giorno-04-niagara.jpg`, imageAlt: 'Le Horseshoe Falls e la torre Skylon viste dall\'alto, con la nebbia d\'acqua che sale dal ferro di cavallo' },
    { titoloGiorno: 'Giorno 5 — Le Mille Isole', tratta: 'Niagara Falls → Gananoque, circa 380 km (4 ore)', pernottamento: 'Gananoque o Kingston', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'mille-isole', immagine: `${IMG}/giorno-05-mille-isole.jpg`, imageAlt: 'Un\'isola boscosa con una rimessa per barche sul San Lorenzo, nelle Mille Isole' },
    { titoloGiorno: 'Giorno 6 — Kingston e l\'arrivo a Ottawa', tratta: 'Gananoque → Kingston → Ottawa, circa 225 km', pernottamento: 'Ottawa, ByWard Market o centro', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'ottawa', immagine: `${IMG}/giorno-06-ottawa.jpg`, imageAlt: 'Gli edifici neogotici della Parliament Hill di Ottawa sotto un cielo d\'inverno' },
    { titoloGiorno: 'Giorno 7 — Ottawa: il Parlamento, il canale Rideau e i musei', pernottamento: 'Ottawa, ByWard Market o centro', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'visite del Parlamento gratuite su prenotazione', destinazioneSlug: 'ottawa', immagine: `${IMG}/giorno-07-ottawa.jpg`, imageAlt: 'Il West Block del Parlamento di Ottawa con le torri neogotiche e la neve sul prato' },
    { titoloGiorno: 'Giorno 8 — Mont-Tremblant e le Laurentides', tratta: 'Ottawa → Mont-Tremblant, circa 150 km (2 ore)', pernottamento: 'Mont-Tremblant, villaggio o dintorni', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'mont-tremblant', immagine: `${IMG}/giorno-08-mont-tremblant.jpg`, imageAlt: 'Le colline boscose di Mont-Tremblant con i colori dell\'autunno' },
    { titoloGiorno: 'Giorno 9 — Montréal: la città vecchia e la basilica di Notre-Dame', tratta: 'Mont-Tremblant → Montréal, circa 130 km (1 ora e mezza)', pernottamento: 'Montréal, Vieux-Montréal o Plateau', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'montreal', immagine: `${IMG}/giorno-09-montreal.jpg`, imageAlt: 'L\'interno blu e oro della basilica di Notre-Dame di Montréal' },
    { titoloGiorno: 'Giorno 10 — Montréal: Mont Royal, il Plateau e i mercati', pernottamento: 'Montréal, Vieux-Montréal o Plateau', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'montreal', immagine: `${IMG}/giorno-10-montreal.jpg`, imageAlt: 'I grattacieli del centro di Montréal visti dal Mont Royal' },
    { titoloGiorno: 'Giorno 11 — Da Montréal a Québec: la città vecchia', tratta: 'Montréal → Québec, circa 255 km (2 ore e 45-3 ore)', pernottamento: 'Québec, dentro o appena fuori le mura', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'quebec', immagine: `${IMG}/giorno-11-quebec.jpg`, imageAlt: 'Lo Château Frontenac illuminato al crepuscolo sopra la città vecchia di Québec' },
    { titoloGiorno: 'Giorno 12 — Le cascate di Montmorency e l\'Île d\'Orléans', pernottamento: 'Québec, dentro o appena fuori le mura', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'parcheggio e cabinovia di Montmorency a pagamento (Sépaq)', destinazioneSlug: 'quebec', immagine: `${IMG}/giorno-12-quebec.jpg`, imageAlt: 'Le cascate di Montmorency con il ponte sospeso sopra il salto' },
    { titoloGiorno: 'Giorno 13 — Charlevoix: Baie-Saint-Paul e la strada sul fiume', tratta: 'Québec → Baie-Saint-Paul → La Malbaie → traghetto Baie-Sainte-Catherine-Tadoussac, circa 225 km', pernottamento: 'Tadoussac', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'traghetto sul Saguenay gratuito', destinazioneSlug: 'charlevoix-tadoussac', immagine: `${IMG}/giorno-13-charlevoix-tadoussac.jpg`, imageAlt: 'Boschi e campi intorno a Baie-Saint-Paul visti dall\'alto' },
    { titoloGiorno: 'Giorno 14 — Tadoussac e le balene del San Lorenzo', pernottamento: 'Tadoussac', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'crociera delle balene di 3 ore da 134,99 CAD più tasse (Croisières AML, 2026)', destinazioneSlug: 'charlevoix-tadoussac', immagine: `${IMG}/giorno-14-charlevoix-tadoussac.jpg`, imageAlt: 'Le pareti boscose del fiordo del Saguenay viste dall\'acqua' },
    { titoloGiorno: 'Giorno 15 — Rientro a Montréal', tratta: 'Tadoussac → Montréal, circa 470 km (5 ore e mezza)', pernottamento: 'Montréal o vicino all\'aeroporto', statoPernottamento: 'consigliato', intensita: 'intenso', destinazioneSlug: 'montreal', immagine: `${IMG}/giorno-15-montreal.jpg`, imageAlt: 'Lo skyline di Montréal visto dal Kondiaronk Boulevard sul Mont Royal' },
    { titoloGiorno: 'Giorno 16 — Partenza da Montréal', tratta: 'Montréal → aeroporto Montréal-Trudeau (YUL)', intensita: 'leggero', destinazioneSlug: 'montreal', immagine: `${IMG}/giorno-16-montreal.jpg`, imageAlt: 'Visitatori sul belvedere Kondiaronk del Mont Royal, con i grattacieli di Montréal innevati' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: undefined },
    { etichetta: 'eTA', valore: '7 CAD a persona' },
    { etichetta: 'Niagara', valore: 'battello Voyage to the Falls 47,95 CAD più HST; elicottero da circa 171 CAD più HST; Journey Behind the Falls circa 30 CAD più HST' },
    { etichetta: 'Altri ingressi', valore: 'CN Tower intorno ai 43 CAD; crociera delle balene a Tadoussac da 134,99 CAD più tasse' },
    { etichetta: 'Auto a noleggio e alloggi', valore: 'da preventivare sul periodo scelto, compreso il supplemento di sola andata Toronto-Montréal' },
    { etichetta: 'Tasse e mance', valore: 'HST 13 % in Ontario, circa 15 % in Québec; mance al ristorante 15-20 %' },
    { etichetta: 'Estensione Churchill', valore: 'volo Winnipeg-Churchill indicativamente 700-1.400 CAD andata e ritorno; pacchetti di più giorni da diverse migliaia di dollari a persona' },
  ],
}
