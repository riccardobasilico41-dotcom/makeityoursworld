import type { Guida } from './types'

/**
 * Guida PDF «Messico Beach Life». Il racconto viene da
 * src/content/viaggi/13-messico-beach-life.md (diario di Rick, giorni 0-12):
 * qui i giorni sono numerati da 1 a 13 (Giorno 1 = il «Giorno 0» del sito).
 * Ingresso, ambasciata e consolati da Viaggiare Sicuri (scheda Messico,
 * agg. 27/5/2026); prezzi dei siti, ospedali e traghetti verificati sul web
 * il 2/11/2026 e rimandati alle fonti in fondo al file.
 * Distanze e tempi: OSRM su dati OpenStreetMap. Coordinate: Nominatim.
 */

export const guidaMessicoBeachLife: Guida = {
  slug: 'messico-beach-life',
  tripSlug: 'messico-beach-life',
  paese: 'Messico',
  titolo: 'Messico Beach Life',
  sottotitolo: 'Tredici giorni nello Yucatán, da Cancún a Holbox: siti maya, cenote, Bacalar, Tulum e lo squalo balena. Tratte, biglietti e numeri utili.',
  autore: 'Rick',
  verificatoAl: 'novembre 2026',
  intro: [
    'Lo Yucatán l\'abbiamo attraversato con amici, da una costa all\'altra, su un van privato con autista e il supporto di un\'agenzia locale. Il driver prenotava guide e pranzi lungo la strada: senza di lui alcune giornate a tappe serrate non sarebbero state possibili.',
    'Qui ci sono le tratte con chilometri e tempi, gli orari e i prezzi 2026 dei siti archeologici, il traghetto per Holbox, i due fusi orari della penisola, consolati e ospedali, e un frasario di spagnolo. I giorni sono numerati da 1 a 13: sul sito il primo è il «Giorno 0».',
    'Ho ricontrollato i dati a novembre 2026. I prezzi dei siti dello Yucatán sono cambiati più volte nel 2026: prima di partire guarda sempre la fonte.',
  ],
  cosaInPiu: [
    'Ogni tratta con chilometri e tempi di guida, ogni luogo con prezzo 2026, coordinate e QR',
    'Visitax del Quintana Roo, FMM e i due fusi orari della penisola',
    'Consolati onorari di Cancún e Playa del Carmen, ambasciata a Città del Messico, ospedali di Cancún, Playa del Carmen e Mérida',
    'Stagioni di squalo balena e bioluminescenza a Holbox',
    'Budget, valigia, frasario di spagnolo',
  ],
  tappe: [
    { nome: 'Cancún', gps: [21.16056, -86.8475], giorno: 'G1-2 · G13', etichetta: 'destra' },
    { nome: 'Río Lagartos', gps: [21.5205, -88.13315], giorno: 'G3', etichetta: 'sopra' },
    { nome: 'Valladolid', gps: [20.69025, -88.2017], giorno: 'G3', etichetta: 'destra' },
    { nome: 'Chichén Itzá', gps: [20.68288, -88.56872], giorno: 'G4', etichetta: 'sotto' },
    { nome: 'Mérida', gps: [20.96708, -89.62374], giorno: 'G4-5', etichetta: 'sinistra' },
    { nome: 'Uxmal', gps: [20.36029, -89.77056], giorno: 'G6', etichetta: 'destra' },
    { nome: 'Campeche', gps: [19.84368, -90.53675], giorno: 'G6-7', etichetta: 'sinistra' },
    { nome: 'Mahahual', gps: [18.72573, -87.70723], giorno: 'G7-8', etichetta: 'destra' },
    { nome: 'Bacalar', gps: [18.94079, -88.61643], giorno: 'G8', etichetta: 'sinistra' },
    { nome: 'Tulum', gps: [20.21457, -87.42946], giorno: 'G9-10', etichetta: 'sinistra' },
    { nome: 'Playa del Carmen', gps: [20.64628, -87.08079], giorno: 'G10', etichetta: 'destra' },
    { nome: 'Holbox', gps: [21.52213, -87.37831], giorno: 'G11-12', etichetta: 'sopra' },
  ],
  giorni: [
    {
      numero: 1,
      fino: 2,
      titolo: 'Cancún',
      paginaSito: '/destinazioni/messico/cancun',
      racconto:
        'Dall\'aeroporto in bus ADO fino al terminal del centro, con il biglietto comprato in aeroporto con la carta. Due notti al Selina Downtown, a circa 200 metri dal terminal. La SIM Telcel l\'ho presa al 7-Eleven lì vicino. Il secondo giorno spiaggia, Playa Marlin o Playa Gaviota con il bus R1, e la sera street food al Parque de las Palapas e cena da a la Parrilla.',
      tratte: [{ da: 'Aeroporto di Cancún', a: 'Terminal ADO Cancún Centro', km: 20, minuti: 25, mezzo: 'bus ADO', nelMioViaggio: 'bus dall\'aeroporto, biglietto con carta di credito' }],
      luoghi: [
        { nome: 'Aeroporto internazionale di Cancún', gps: [21.0407, -86.88176], nota: 'All\'arrivo il tagliando dell\'immigrazione indica i giorni concessi: controllalo prima di uscire.', fonti: ['vs', 'osm'] },
        { nome: 'ADO, autobus dall\'aeroporto e fra le città', web: 'ado.com.mx', nota: 'Biglietti in aeroporto, al terminal o online. Orari e prezzi sul sito.', fonti: ['ado'] },
        { nome: 'Parque de las Palapas', indirizzo: 'Centro di Cancún, a pochi isolati dal terminal ADO', nota: 'Bancarelle e cibo di strada la sera.', fonti: [] },
      ],
      mangiare: [
        { nome: 'a la Parrilla', cosa: 'Cucina messicana; fa il conto separato e offre il chupito finale. Con più di dieci persone al tavolo spesso aggiunge un servizio extra.', stato: 'usato', fonti: [] },
      ],
      dormire: 'Hostel Selina Cancún Downtown, a circa 200 metri dal terminal ADO, colazione a bordo piscina.',
      nota: 'Il primo giorno cambia o preleva contanti in abbondanza, in banca e con il passaporto: nei giorni del van le soste sono contate.',
    },
    {
      numero: 3,
      titolo: 'Río Lagartos, Ek Balam e Valladolid',
      paginaSito: '/destinazioni/messico/valladolid',
      racconto:
        'Il giorno dell\'incontro con Manuel, il nostro driver. Partenza presto per Río Lagartos, poi Ek Balam con una guida prenotata da lui e il cenote Xcanché, a due passi: le empanadas le abbiamo mangiate in una palapita accanto al cenote, appena usciti dall\'acqua. In serata a Valladolid, all\'hotel Waye, e una passeggiata in centro dopo cena.',
      tratte: [
        { da: 'Cancún', a: 'Río Lagartos', km: 246, minuti: 199 },
        { da: 'Río Lagartos', a: 'Ek Balam', km: 83, minuti: 79 },
        { da: 'Ek Balam', a: 'Valladolid', km: 27, minuti: 34 },
      ],
      luoghi: [
        { nome: 'Río Lagartos', gps: [21.5205, -88.13315], nota: 'Riserva della biosfera con i fenicotteri; al porto c\'è un bar per la sosta.', fonti: ['osm'] },
        { nome: 'Zona archeologica di Ek Balam', biglietto: '691 MXN per gli stranieri nel 2026 (quota federale e statale insieme)', gps: [20.89324, -88.1454], nota: 'Con guida. Il cenote Xcanché è a poca distanza, ingresso a parte.', fonti: ['poresto-2026', 'osm'] },
      ],
      mangiare: [
        { nome: 'Palapita del cenote Xcanché', cosa: 'Empanadas fatte al momento, prenotate dal driver', stato: 'usato', fonti: [] },
      ],
      dormire: 'Hotel Waye, Valladolid, a pochi passi dalla piazza principale.',
    },
    {
      numero: 4,
      titolo: 'Chichén Itzá, Izamal e Ik Kil',
      paginaSito: '/esperienze/messico/chichen-itza',
      racconto:
        'Partenza presto per Chichén Itzá, entrati in mattinata con circa due ore per la visita. Sosta a Izamal per la piramide e il convento, con un passaggio all\'OXXO vicino al convento. Pranzo tardi al cenote Ik Kil e arrivo a Mérida prima di cena, all\'hotel Ontico.',
      tratte: [
        { da: 'Valladolid', a: 'Chichén Itzá', km: 42, minuti: 45 },
        { da: 'Chichén Itzá', a: 'Izamal', km: 74, minuti: 65 },
        { da: 'Izamal', a: 'Cenote Ik Kil', km: 75, minuti: 65 },
        { da: 'Cenote Ik Kil', a: 'Mérida', km: 127, minuti: 102 },
      ],
      luoghi: [
        { nome: 'Chichén Itzá', orari: 'Tutti i giorni 8:00-17:00, ultimo ingresso 16:00 (dal mio vade mecum)', biglietto: '676 MXN per gli stranieri a inizio 2026 (105 INAH + 571 dello Stato dello Yucatán). Da fine marzo 2026 c\'è un biglietto unico e le cifre riportate variano: conviene controllare.', gps: [20.68288, -88.56872], nota: 'Alla cassa si paga con carta. All\'ufficio dietro l\'ingresso c\'è un timbro gratuito per il passaporto. La domenica l\'ingresso gratuito vale solo per messicani e residenti.', fonti: ['poresto-2026', 'cronista', 'osm'] },
        { nome: 'Izamal', gps: [20.93337, -89.01827], nota: 'Convento e piramide. Paese caro per i souvenir.', fonti: ['osm'] },
        { nome: 'Cenote Ik Kil', orari: 'Circa 9:00-17:00', biglietto: 'Intorno ai 250 MXN solo ingresso, di più con il buffet (prezzo 2026 non ufficiale)', gps: [20.66113, -88.5505], nota: 'Si paga con carta alla cassa. Chiude alle 17.', fonti: ['osm'] },
      ],
      mangiare: [
        { nome: 'Mezcalería, Mérida', cosa: 'Locale grande, non serve prenotare', stato: 'usato', fonti: [] },
      ],
      dormire: 'Ontico Urban Design Hotel, centro storico di Mérida, due notti. Ha il servizio di lavanderia: a metà viaggio torna utile.',
    },
    {
      numero: 5,
      titolo: 'Mérida e Playa Progreso',
      paginaSito: '/destinazioni/messico/merida',
      racconto:
        'Giornata senza transfer. Al mattino Progreso, sul golfo: al beach club El Adiós, chiedendo di Ana, con una consumazione i lettini erano gratis. Rientro nel tardo pomeriggio, prenotazione alla Negrita, che chiude alle 22, e pomeriggio libero al mercato municipale. La sera Negrita e poi di nuovo la Mezcalería.',
      tratte: [
        { da: 'Mérida', a: 'Progreso', km: 37, minuti: 35 },
        { da: 'Progreso', a: 'Mérida', km: 37, minuti: 35 },
      ],
      luoghi: [
        { nome: 'Progreso', gps: [21.28221, -89.66366], nota: 'Spiaggia con il molo lunghissimo. Nei dintorni la Playa de los Cerditos, il bagno con i maialini: me l\'hanno consigliata, io non l\'ho fatta.', fonti: ['osm'] },
      ],
      mangiare: [
        { nome: 'Beach club El Adiós, Progreso', cosa: 'Lettini gratis con una consumazione (chiedere di Ana)', stato: 'usato', fonti: [] },
        { nome: 'La Negrita, Mérida', cosa: 'Cantina con musica; chiude alle 22', stato: 'usato', fonti: [] },
      ],
      dormire: 'Ontico Urban Design Hotel, Mérida.',
    },
    {
      numero: 6,
      titolo: 'Uxmal, Becal, Pomuch e il temazcal',
      paginaSito: '/destinazioni/messico/campeche',
      racconto:
        'Tappe serrate per arrivare puntuali al temazcal. Uxmal la mattina con la guida, pranzo con la carne cotta sottoterra al Po\' Pol Chac. Nel pomeriggio Becal, dove fanno i sombreros (il modello base costava circa 800 MXN), e il cimitero dei teschi di Pomuch. In serata il temazcal Yax Ha, circa 450 MXN con la cena compresa, e arrivo a Campeche, all\'hotel Francis Drake.',
      tratte: [
        { da: 'Mérida', a: 'Uxmal', km: 80, minuti: 75 },
        { da: 'Uxmal', a: 'Becal', km: 48, minuti: 51 },
        { da: 'Becal', a: 'Pomuch', km: 41, minuti: 30 },
        { da: 'Pomuch', a: 'Campeche', km: 53, minuti: 43 },
      ],
      luoghi: [
        { nome: 'Zona archeologica di Uxmal', biglietto: '586 MXN per gli stranieri nel 2026', gps: [20.36029, -89.77056], nota: 'Vicino al sito c\'è un bancomat e il museo del cioccolato.', fonti: ['poresto-2026', 'osm'] },
        { nome: 'Becal', gps: [20.4421, -90.02738], nota: 'Sombreros di jipi intrecciati a mano.', fonti: ['osm'] },
        { nome: 'Pomuch', gps: [20.13683, -90.17517], nota: 'Cimitero dove le ossa dei defunti vengono pulite e conservate in teche.', fonti: ['osm'] },
        { nome: 'Temazcal Yax Ha', biglietto: 'Circa 450 MXN nel mio viaggio, cena compresa', nota: 'Cerimonia nella selva, con una piscina per chi non vuole entrare nel temazcal.', fonti: [] },
      ],
      mangiare: [
        { nome: 'Po\' Pol Chac, vicino a Uxmal', cosa: 'Pranzo tipico, carne cotta sottoterra', stato: 'usato', fonti: [] },
      ],
      dormire: 'Hotel Francis Drake, centro storico di Campeche.',
    },
    {
      numero: 7,
      titolo: 'Da Campeche a Mahahual',
      paginaSito: '/destinazioni/messico/mahahual',
      racconto:
        'Il transfer più lungo, da una costa all\'altra e con il cambio di fuso. Il driver mi ha lasciato in piazza della Cattedrale, a piedi fino alla Puerta del Mar e al lungomare, dove mi ha ripreso. Poi un\'ora e mezza di van fino al cenote Miguel Colorado, da cui si riparte entro mezzogiorno, una sosta a Balamkú e l\'arrivo a Mahahual in serata.',
      tratte: [
        { da: 'Campeche', a: 'Balamkú', km: 243, minuti: 215, nelMioViaggio: 'con la sosta al cenote Miguel Colorado lungo la strada' },
        { da: 'Balamkú', a: 'Mahahual', km: 280, minuti: 257 },
      ],
      luoghi: [
        { nome: 'Puerta del Mar, Campeche', gps: [19.84368, -90.53675], nota: 'Una delle porte delle mura; da lì il lungomare.', fonti: ['osm'] },
        { nome: 'Zona archeologica di Balamkú', gps: [18.54084, -89.92219], nota: 'Lungo la carretera Escárcega-Chetumal. Prezzo 2026 non verificato.', fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Mahahual, due notti (nome dell\'hotel non annotato).',
      nota: 'Entrando nel Quintana Roo l\'orologio va avanti di un\'ora.',
    },
    {
      numero: 8,
      titolo: 'Bacalar, le tartarughe e il secondo temazcal',
      paginaSito: '/esperienze/messico/tour-barca-bacalar',
      racconto:
        'In mattinata due ore in barca sulla laguna di Bacalar, con un\'ora di kayak dopo. Nel primo pomeriggio snorkeling tra le tartarughe a Mahahual. In serata il secondo temazcal: oltre al rito con lo sciamano è una sauna lunga e al buio, e chi soffre di claustrofobia deve saperlo prima.',
      tratte: [
        { da: 'Mahahual', a: 'Bacalar', km: 143, minuti: 181 },
        { da: 'Bacalar', a: 'Mahahual', km: 143, minuti: 181 },
      ],
      luoghi: [
        { nome: 'Laguna di Bacalar', gps: [18.94079, -88.61643], nota: 'Tour in barca di 2 ore più kayak, pagato in loco. Prezzo non annotato.', fonti: ['osm'] },
        { nome: 'Mahahual, snorkeling con le tartarughe', gps: [18.72573, -87.70723], fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Mahahual.',
    },
    {
      numero: 9,
      fino: 10,
      titolo: 'Tulum e Playa del Carmen',
      paginaSito: '/destinazioni/messico/tulum',
      racconto:
        'Il primo giorno a Caleta Tankah: il mare all\'inizio non invitava, ma il rimborso non c\'è nemmeno dopo pochi minuti; poi è uscito il sole e il cenote dentro la caleta valeva il biglietto. Bagno anche in un cenote vicino a Dos Ojos, dentro una grotta. La sera allo Straw Hat. Il giorno dopo il sito di Tulum sulla scogliera, pomeriggio a Playa Paraíso al beach club di El Paraíso Hotel e la sera a Playa del Carmen, al Clandestino.',
      tratte: [
        { da: 'Mahahual', a: 'Caleta Tankah', km: 231, minuti: 192 },
        { da: 'Caleta Tankah', a: 'Cenote Dos Ojos', km: 17, minuti: 23 },
        { da: 'Tulum, zona archeologica', a: 'Playa del Carmen', km: 63, minuti: 52 },
      ],
      luoghi: [
        { nome: 'Caleta Tankah', biglietto: '300 MXN a persona nel mio viaggio, solo contanti, nessun rimborso', gps: [20.23168, -87.4181], fonti: ['osm'] },
        { nome: 'Cenote Dos Ojos (sistema Sac Actun)', gps: [20.32473, -87.39061], nota: 'Cenote in grotta. Prezzo da verificare in loco.', fonti: ['osm'] },
        { nome: 'Zona archeologica di Tulum', biglietto: '210 MXN (tariffa INAH 2026)', gps: [20.21457, -87.42946], nota: 'Il sito sta dentro il Parque del Jaguar, che può avere un ingresso a parte: conviene controllare.', fonti: ['poresto-2026', 'osm'] },
        { nome: 'Playa Paraíso', gps: [20.20404, -87.43127], nota: 'El Paraíso Hotel Tulum è il secondo beach club a destra entrando in spiaggia; lettini a pagamento.', fonti: ['osm'] },
      ],
      mangiare: [
        { nome: 'Straw Hat, Tulum', cosa: 'Serata con giochi di gruppo', stato: 'usato', fonti: [] },
        { nome: 'Clandestino, Playa del Carmen', cosa: 'Drink la sera', stato: 'usato', fonti: [] },
      ],
      dormire: 'Tulum, due notti (nome dell\'hotel non annotato).',
      nota: 'Viaggiare Sicuri segnala incidenti frequenti sulla costiera Cancún-Tulum, con camion e poca illuminazione: meglio non guidare di notte.',
    },
    {
      numero: 11,
      fino: 12,
      titolo: 'Holbox',
      paginaSito: '/destinazioni/messico/holbox',
      racconto:
        'Partiti prima dell\'alba per arrivare a Chiquilá e prendere il traghetto in tempo per il tour delle 3 Islas, fenicotteri e mangrovie. Pomeriggio a Punta Mosquito e la sera la bioluminescenza, con le zanzare all\'attacco. Il giorno dopo otto ore in barca per nuotare con lo squalo balena: costa parecchio, ed è l\'attività che consiglierei a chiunque.',
      tratte: [
        { da: 'Tulum', a: 'Chiquilá', km: 185, minuti: 161 },
        { da: 'Chiquilá', a: 'Holbox', km: 11, minuti: 25, mezzo: 'traghetto' },
      ],
      luoghi: [
        { nome: 'Traghetto Chiquilá-Holbox', orari: 'Nel mio viaggio ogni 30 minuti dalle 6:30 alle 20:30', gps: [21.42777, -87.33934], nota: 'Due compagnie, 9 Hermanos e Holbox Express. Niente prenotazione: arriva al porto 30-45 minuti prima. Prezzo attuale da chiedere in biglietteria.', fonti: ['ruptura-ferry', 'osm'] },
        { nome: 'Punta Mosquito', gps: [21.54307, -87.35312], nota: 'Bioluminescenza da aprile a novembre circa, meglio senza luna. Repellente in abbondanza.', fonti: ['osm'] },
        { nome: 'Squalo balena', biglietto: 'Fra 180 e 200 USD a persona nel 2026, secondo i servizi compresi', nota: 'Stagione estiva, con il picco a luglio e agosto; nel 2025 i permessi CONANP sono scaduti il 17 settembre. Escursione di circa 8 ore.', fonti: ['ruptura-squalo', 'ruptura-conanp'] },
      ],
      mangiare: [],
      dormire: 'Holbox, due notti (nome dell\'hotel non annotato).',
      nota: 'A Holbox c\'è un solo bancomat: arriva con i contanti.',
    },
    {
      numero: 13,
      titolo: 'Rientro a Cancún',
      paginaSito: '/destinazioni/messico/cancun',
      racconto:
        'Lasciata Holbox in mattinata, a Cancún per pranzo. Pomeriggio sulla spiaggia libera di fronte al Coco Bongo, con il beach party, e la sera il Coco Bongo per chiudere il viaggio dove era cominciato.',
      tratte: [
        { da: 'Holbox', a: 'Chiquilá', km: 11, minuti: 25, mezzo: 'traghetto' },
        { da: 'Chiquilá', a: 'Cancún', km: 147, minuti: 133 },
      ],
      luoghi: [
        { nome: 'Coco Bongo Cancún', indirizzo: 'Zona Hotelera, km 9,5', web: 'cocobongo.com', gps: [21.1329, -86.74721], nota: 'Prezzi dei biglietti sul sito.', fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Cancún (non annotato) oppure volo di rientro.',
      nota: 'Viaggiare Sicuri consiglia di arrivare in aeroporto tre ore prima dei voli internazionali.',
    },
  ],
  mappa: {
    percorso: ['Cancún', 'Río Lagartos', 'Valladolid', 'Chichén', 'Mérida', 'Uxmal', 'Campeche', 'Bacalar', 'Mahahual', 'Tulum', 'Playa del Carmen', 'Holbox'],
    ritorno: ['Holbox', 'Cancún'],
    legenda: 'Linea piena: il giro da Cancún al golfo, poi a sud fino a Mahahual e su per la Riviera Maya fino a Holbox. Tratteggio: rientro a Cancún.',
    notaTempi: 'Tempi stimati senza traffico (OSRM su OpenStreetMap). In van con le soste ci si mette di più; i topes, i dossi dei paesi, rallentano ovunque.',
    notaTempiFonti: ['osrm'],
    scalaKm: 100,
  },
  primaDiPartire: [
    {
      titolo: 'Documenti e ingresso',
      righe: [
        { voce: 'Passaporto', valore: 'Almeno sei mesi di validità residua all\'arrivo. Niente visto per turismo fino a 180 giorni.', fonti: ['vs'] },
        { voce: 'Al controllo', valore: 'Tieni pronte le prenotazioni dell\'alloggio e il volo di uscita: la polizia di frontiera può chiederle. Il tagliando rilasciato all\'arrivo indica i giorni concessi; controlla che coprano il viaggio. A Cancún ci sono gli e-gate per i passaporti elettronici.', fonti: ['vs'] },
        { voce: 'Visitax', valore: 'Tassa del Quintana Roo per i turisti stranieri, da pagare online su visitax.gob.mx prima di ripartire. Viaggiare Sicuri la indica in 20,99 USD; nel 2026 si parla di circa 285 MXN. I controlli sono sporadici, ma conviene pagarla.', fonti: ['vs', 'visitax'] },
        { voce: 'Assicurazione', valore: 'Le cliniche private costano molto: polizza sanitaria con rimpatrio.', fonti: ['vs'] },
      ],
    },
    {
      titolo: 'Soldi',
      righe: [
        { voce: 'Valuta', valore: 'Peso messicano (MXN). Il 2 novembre 2026 1 € valeva 21,00 MXN.', fonti: ['cambio'] },
        { voce: 'Contanti', valore: 'Preleva in banca o agli sportelli delle banche; per strada, nelle zone turistiche, girano banconote false. A Holbox c\'è un solo bancomat.' },
        { voce: 'Carte', valore: 'Accettate nei posti turistici, a volte con commissioni fino al 10%. Chichén Itzá e Ik Kil si pagano con carta; Caleta Tankah solo in contanti.' },
        { voce: 'Mance', valore: '10-15% al ristorante e nelle uscite in barca.' },
      ],
    },
    {
      titolo: 'Telefono, corrente, ora',
      righe: [
        { voce: 'Fuso', valore: 'Quintana Roo (Cancún, Tulum, Holbox, Mahahual): 6 ore indietro rispetto all\'Italia d\'inverno, 7 d\'estate. Yucatán e Campeche (Valladolid, Mérida, Campeche): un\'ora in più, 7 e 8. Il Messico non usa più l\'ora legale.' },
        { voce: 'Prefissi', valore: 'Dall\'Italia 0052; per chiamare l\'Italia 0039.', fonti: ['vs'] },
        { voce: 'SIM', valore: 'Telcel nei chioschi, all\'OXXO o al 7-Eleven, circa 150 MXN più la ricarica nel mio viaggio; oppure un\'eSIM attivata prima di partire.' },
        { voce: 'Corrente', valore: '127 V, prese A e B: serve un adattatore.' },
      ],
    },
    {
      titolo: 'Sicurezza e salute',
      righe: [
        { voce: 'Riviera Maya', valore: 'A Cancún, Playa del Carmen e Tulum sono frequenti i furti di denaro e documenti. Taxi solo delle compagnie ufficiali o chiamati dall\'hotel; Uber e DiDi sono considerati più sicuri.', fonti: ['vs'] },
        { voce: 'Droghe', valore: 'Vietato anche l\'uso personale, funghi e peyote compresi: quasi tutti gli italiani detenuti in Messico lo sono per questo.', fonti: ['vs'] },
        { voce: 'Zanzare', valore: 'Dengue e chikungunya presenti anche nello Yucatán e nel Quintana Roo: repellente, soprattutto la sera.', fonti: ['vs'] },
        { voce: 'Acqua', valore: 'Solo in bottiglia, niente ghiaccio di dubbia provenienza.', fonti: ['vs'] },
        { voce: 'Uragani', valore: 'Stagione da giugno a ottobre circa.', fonti: ['vs'] },
      ],
    },
  ],
  emergenze: {
    numeri: [
      { voce: 'Emergenze (polizia, ambulanza, pompieri)', valore: '911', fonti: ['vs'] },
      { voce: 'Ángeles Verdes, assistenza stradale', valore: '078', fonti: ['vs'] },
    ],
    ambasciata: [
      { nome: 'Ambasciata d\'Italia a Città del Messico', cosa: 'Competente per tutto il Paese', indirizzo: 'Av. de las Palmas 1994, Lomas de Chapultepec, 11000 Ciudad de México', telefono: '+52 55 5596 3655 · reperibilità +52 55 5437 2596 · segreteria.messico@esteri.it', web: 'ambcittadelmessico.esteri.it', stato: 'ufficiale', fonti: ['vs'] },
      { nome: 'Consolato onorario a Cancún', cosa: 'Stato dello Yucatán e municipi di Benito Juárez e Isla Mujeres', indirizzo: 'Av. Bonampak 45, Local 1, SM 3, 77500 Cancún', telefono: '+52 998 251 3522 · cancun.onorario@esteri.it', stato: 'ufficiale', fonti: ['vs'] },
      { nome: 'Consolato onorario a Playa del Carmen', cosa: 'Riviera Maya', indirizzo: 'Calle Sur entre Diagonal 85 y 80, Ejido Sur, 77710 Playa del Carmen', telefono: 'playacarmen.onorario@esteri.it', stato: 'ufficiale', avviso: 'Il telefono pubblicato da Viaggiare Sicuri ha una cifra di troppo: scrivi o chiama l\'ambasciata.', fonti: ['vs'] },
    ],
    ospedali: [
      { nome: 'Hospiten Cancún', cosa: 'Cancún, ospedale privato', indirizzo: 'Av. Bonampak 10, SM 10, Mza. 2 Lte. 7-A, Cancún', telefono: '+52 998 881 3700', web: 'hospiten.com', stato: 'ufficiale', fonti: ['hospiten-cancun'] },
      { nome: 'Hospiten Riviera Maya', cosa: 'Playa del Carmen, ospedale privato (il più vicino anche a Tulum)', indirizzo: 'Av. Balamcanché Lote 1, Mza. 30, 77710 Playa del Carmen', telefono: '+52 984 159 2200', web: 'hospiten.com', stato: 'ufficiale', fonti: ['hospiten-rm'] },
      { nome: 'Hospital Star Médica Mérida', cosa: 'Mérida, ospedale privato', indirizzo: 'Calle 26 n. 199, Col. Altabrisa, 97133 Mérida', telefono: '+52 999 930 2880 (opzione 1 per le urgenze)', web: 'starmedica.com', stato: 'ufficiale', fonti: ['starmedica'] },
    ],
  },
  contatti: [
    {
      gruppo: 'Trasporti',
      voci: [
        { nome: 'ADO', cosa: 'Autobus dall\'aeroporto di Cancún e fra le città', web: 'ado.com.mx', stato: 'non-provato', fonti: ['ado'] },
        { nome: 'Holbox Express', cosa: 'Traghetto Chiquilá-Holbox', telefono: '+52 984 187 3326', web: 'holboxexpress.com', stato: 'non-provato', avviso: 'Telefono da un articolo del 2023: riconfermalo.', fonti: ['ruptura-ferry'] },
        { nome: '9 Hermanos', cosa: 'Traghetto Chiquilá-Holbox', telefono: '+52 984 108 7514', stato: 'non-provato', avviso: 'Telefono da un articolo del 2023: riconfermalo.', fonti: ['ruptura-ferry'] },
      ],
    },
    {
      gruppo: 'Ingressi e tasse',
      voci: [
        { nome: 'Visitax', cosa: 'Pagamento online della tassa turistica del Quintana Roo', web: 'visitax.gob.mx', stato: 'ufficiale', fonti: ['vs'] },
        { nome: 'INAH', cosa: 'Zone archeologiche federali (Chichén Itzá, Uxmal, Ek Balam, Tulum)', web: 'inah.gob.mx', stato: 'ufficiale', fonti: [] },
      ],
    },
  ],
  budget: {
    righe: [
      { voce: 'Volo Italia-Cancún' },
      { voce: 'Van privato con autista e agenzia locale', nota: 'pacchetto, prezzo non annotato' },
      { voce: 'Visitax', costo: 'circa 285 MXN' },
      { voce: 'Chichén Itzá', costo: '676 MXN', nota: 'inizio 2026' },
      { voce: 'Ek Balam', costo: '691 MXN' },
      { voce: 'Uxmal', costo: '586 MXN' },
      { voce: 'Tulum', costo: '210 MXN' },
      { voce: 'Cenote Ik Kil', costo: 'circa 250 MXN' },
      { voce: 'Temazcal Yax Ha', costo: '450 MXN', nota: 'nel mio viaggio, cena compresa' },
      { voce: 'Caleta Tankah', costo: '300 MXN', nota: 'nel mio viaggio' },
      { voce: 'Sombrero di Becal', costo: 'da circa 800 MXN' },
      { voce: 'Traghetto per Holbox, andata e ritorno' },
      { voce: 'Squalo balena', costo: '180-200 USD', nota: 'tariffe 2026' },
      { voce: '3 Islas, Bacalar, snorkeling', nota: 'pagati in loco' },
      { voce: 'Hotel, 12 notti' },
      { voce: 'Pasti, locali e mance' },
    ],
    nota: 'Le cifre sono tariffe 2026 pubblicate o quelle pagate nel mio viaggio. Le attività in mare si pagano quasi sempre in contanti.',
    cambio: 'Cambio di riferimento: 1 € = 21,00 MXN (BCE, 2/11/2026). Per 100 MXN conta circa 4,80 €.',
    cambioFonti: ['cambio'],
  },
  valigia: [
    { gruppo: 'Documenti', voci: ['Passaporto con sei mesi di validità', 'Stampa di hotel e volo di rientro', 'Ricevuta del Visitax', 'Polizza sanitaria', 'Carta di credito e una di riserva', 'Questa guida'] },
    { gruppo: 'Vestiti', voci: ['Zaino morbido o borsone, niente trolley rigido', 'Costumi e telo mare', 'Scarpe comode per i siti', 'Cappello e occhiali da sole', 'Maglia leggera a maniche lunghe per le zanzare'] },
    { gruppo: 'Mare e cenote', voci: ['Maschera e boccaglio', 'Crema solare biodegradabile (nei cenote spesso è richiesta)', 'Custodia stagna per il telefono', 'Torcia frontale per la bioluminescenza e il temazcal'] },
    { gruppo: 'Salute', voci: ['Repellente forte, formula tropicale', 'Antidiarroico e gastroprotettore', 'Adattatore per prese A/B'] },
  ],
  lingua: {
    nome: 'Spagnolo del Messico',
    pronuncia: 'Si legge quasi come si scrive. La j e la g davanti a e, i suonano come una h aspirata; la ll e la y come la «gi» di giallo; la x di México come una j. Nello Yucatán si sentono parole maya.',
  },
  frasario: [
    {
      gruppo: 'Saluti e cortesia',
      frasi: [
        { it: 'Buongiorno', loc: 'buenos días' },
        { it: 'Buonasera', loc: 'buenas tardes · buenas noches', nota: 'la prima fino al tramonto' },
        { it: 'Grazie', loc: 'gracias' },
        { it: 'Prego', loc: 'de nada · con gusto' },
        { it: 'Per favore', loc: 'por favor' },
        { it: 'Scusi', loc: 'disculpe' },
        { it: 'Come? Prego?', loc: '¿mande?', nota: 'tipicamente messicano, quando non si è capito' },
        { it: 'Grazie', loc: 'dios bo\'otik', nota: 'in maya yucateco' },
      ],
    },
    {
      gruppo: 'Muoversi e comprare',
      frasi: [
        { it: 'Dov\'è…?', loc: '¿dónde está…?' },
        { it: 'Quanto costa?', loc: '¿cuánto cuesta?' },
        { it: 'Accettate la carta?', loc: '¿aceptan tarjeta?' },
        { it: 'Un biglietto per…', loc: 'un boleto para…' },
        { it: 'A che ora parte il traghetto?', loc: '¿a qué hora sale el ferry?' },
        { it: 'Il bancomat', loc: 'el cajero' },
        { it: 'Non capisco', loc: 'no entiendo' },
      ],
    },
    {
      gruppo: 'A tavola',
      frasi: [
        { it: 'Acqua in bottiglia', loc: 'agua embotellada' },
        { it: 'Senza ghiaccio', loc: 'sin hielo' },
        { it: 'Poco piccante', loc: 'que no pique mucho' },
        { it: 'Il conto, per favore', loc: 'la cuenta, por favor' },
        { it: 'Conti separati', loc: 'cuentas separadas' },
      ],
    },
    {
      gruppo: 'Emergenze',
      frasi: [
        { it: 'Aiuto!', loc: '¡ayuda!' },
        { it: 'Ho bisogno di un medico', loc: 'necesito un médico' },
        { it: 'Ospedale · Pronto soccorso', loc: 'hospital · urgencias' },
        { it: 'Polizia', loc: 'policía' },
        { it: 'Mi hanno rubato…', loc: 'me robaron…' },
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
    { it: '50', loc: 'cincuenta' },
    { it: '100', loc: 'cien' },
    { it: '500', loc: 'quinientos' },
    { it: '1000', loc: 'mil' },
  ],
  pagineSito: [
    { titolo: 'Il viaggio: Messico Beach Life', path: '/viaggi/messico-beach-life' },
    { titolo: 'Messico, la scheda', path: '/destinazioni/messico' },
    { titolo: 'Lo squalo balena a Holbox', path: '/esperienze/messico/squalo-balena-holbox' },
    { titolo: 'La bioluminescenza a Holbox', path: '/esperienze/messico/bioluminescenza-holbox' },
    { titolo: 'Il temazcal', path: '/esperienze/messico/temazcal' },
  ],
  consultate: 'Consultate il 2 novembre 2026. I prezzi dei siti archeologici dello Yucatán cambiano anche durante l\'anno: prima di pagare guarda la fonte ufficiale.',
  nonVerificato: [
    'Prezzo di Chichén Itzá dopo il biglietto unico di marzo 2026 (le fonti danno cifre diverse)',
    'Prezzi ufficiali di Ik Kil, Xcanché, Dos Ojos, Balamkú e del Parque del Jaguar di Tulum',
    'Prezzi 2026 del traghetto per Holbox e dei tour 3 Islas e Bacalar; date ufficiali della stagione 2026 dello squalo balena',
    'Importo esatto del Visitax 2026 e età da cui si paga',
    'Indirizzi e contatti di ristoranti, locali e temazcal: non annotati nei miei documenti',
    'Nomi degli hotel a Mahahual, Tulum e Holbox',
  ],
  fonti: [
    { id: 'vs', titolo: 'Viaggiare Sicuri, scheda Messico (agg. 27/5/2026)', url: 'https://www.viaggiaresicuri.it/schede_paese/MEX.json' },
    { id: 'visitax', titolo: 'Por Esto, Visitax a 2,5 UMA (31/12/2025)', url: 'https://www.poresto.com/quintana-roo/cancun/2025/12/31/extranjeros-reprochan-presunto-cobro-abusivo-en-impuestos-del-visitax-en-cancun.amp.html' },
    { id: 'cambio', titolo: 'Frankfurter (dati BCE), EUR/MXN 2/11/2026', url: 'https://api.frankfurter.dev/v1/latest?from=EUR&to=MXN' },
    { id: 'poresto-2026', titolo: 'Por Esto, tariffe 2026 di Chichén Itzá, Uxmal ed Ek Balam (7/1/2026)', url: 'https://www.poresto.com/yucatan/2026/1/7/acceso-a-zonas-arqueologicas-de-yucatan-sube-en-2026-cuanto-cuesta-entrar-a-chichen-itza-uxmal-y-ek-balam.html' },
    { id: 'cronista', titolo: 'El Cronista, biglietto unico a Chichén Itzá dal 27 marzo 2026', url: 'https://www.cronista.com/mexico/actualidad-mx/chichen-itza-implementa-boleto-unico-permanente-desde-el-27-de-marzo-cuanto-cuesta-y-quienes-entran-gratis' },
    { id: 'ruptura-ferry', titolo: 'Ruptura360, traghetti per Holbox (12/2023)', url: 'https://ruptura360.mx/periodismo-de-servicio/ferry-a-holbox-precios/' },
    { id: 'ruptura-squalo', titolo: 'Ruptura360, stagione dello squalo balena a Holbox', url: 'https://ruptura360.mx/el-estado/temporada-del-tiburon-ballena-en-holbox/' },
    { id: 'ruptura-conanp', titolo: 'Ruptura360, fine dei permessi CONANP a Chiquilá e Holbox', url: 'https://ruptura360.mx/el-estado/avistamiento-del-tiburon-ballena/' },
    { id: 'ado', titolo: 'ADO, autobus', url: 'https://www.ado.com.mx/' },
    { id: 'hospiten-cancun', titolo: 'Hospiten Cancún', url: 'https://hospiten.com/en/hospitals/hospiten-cancun' },
    { id: 'hospiten-rm', titolo: 'Hospiten Riviera Maya', url: 'https://hospiten.com/en/hospitals/hospiten-riviera-maya' },
    { id: 'starmedica', titolo: 'Star Médica Mérida', url: 'https://www.starmedica.com/s/merida' },
    { id: 'osm', titolo: 'OpenStreetMap / Nominatim (coordinate)', url: 'https://nominatim.openstreetmap.org' },
    { id: 'osrm', titolo: 'OSRM su dati OpenStreetMap', url: 'https://router.project-osrm.org' },
  ],
}
