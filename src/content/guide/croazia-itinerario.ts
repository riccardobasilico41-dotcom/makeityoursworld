import type { Guida } from './types'

/**
 * Guida PDF «Croazia in 14 giorni». Il racconto viene da
 * src/content/viaggi/69-croazia-itinerario.md; prezzi, orari e contatti
 * verificati sui siti ufficiali il 02/11/2026 (fonti in fondo, per id).
 *
 * Distanze e tempi su strada: router OSRM su dati OpenStreetMap, traffico libero.
 * Coordinate: src/content/mappe/coordinate.ts e OpenStreetMap (Nominatim).
 */

export const guidaCroazia: Guida = {
  slug: 'croazia-itinerario',
  tripSlug: 'croazia-itinerario',
  paese: 'Croazia',
  titolo: 'Croazia',
  sottotitolo: 'Da Zagabria a Dubrovnik in quattordici giorni: auto fino a Spalato, poi catamarani tra Hvar e Curzola. Biglietti dei parchi, orari, numeri utili.',
  autore: 'Rick',
  verificatoAl: 'novembre 2026',
  intro: [
    'Due settimane con amici: Zagabria, i laghi di Plitvice, Zara, il Krka e Sebenico, Traù e Spalato in auto; poi l\'auto restituita a Spalato e i catamarani per Hvar, Curzola e Dubrovnik, con la gita finale a Ston.',
    'Sul sito c\'è il racconto. Qui trovi i chilometri delle tratte, i listini 2026 di Plitvice e del Krka con le fasce orarie, Lokrum, gli uffici consolari italiani lungo la costa e i numeri da chiamare se qualcosa va storto.',
    'Ho ricontrollato i dati a novembre 2026. Il periodo giusto resta fine maggio-giugno o settembre: a luglio e agosto parchi e centri storici sono pieni e i prezzi salgono.',
  ],
  cosaInPiu: [
    'Una scheda per ogni giorno con chilometri, tempi di guida e coordinate GPS',
    'Listini 2026 di Plitvice e del Krka, con le tariffe del pomeriggio e la gita in barca a Visovac',
    'Lokrum: biglietto, biglietteria al porto vecchio e telefoni della riserva',
    'Ambasciata a Zagabria e uffici consolari a Spalato, Hvar, Sebenico, Zara e Dubrovnik',
    'Numeri di emergenza, regole dei centri storici, valigia, budget e frasario croato',
  ],
  tappe: [
    { nome: 'Zagabria', gps: [45.8131, 15.97728], giorno: 'G1', etichetta: 'destra' },
    { nome: 'Plitvice', gps: [44.87391, 15.62495], giorno: 'G2-3', etichetta: 'destra' },
    { nome: 'Zara', gps: [44.11686, 15.23533], giorno: 'G3-4', etichetta: 'sinistra' },
    { nome: 'Skradin · Krka', gps: [43.81785, 15.92332], giorno: 'G5', etichetta: 'destra' },
    { nome: 'Sebenico', gps: [43.73406, 15.89448], giorno: 'G5', etichetta: 'sinistra' },
    { nome: 'Traù', gps: [43.51641, 16.24972], giorno: 'G6', etichetta: 'sinistra' },
    { nome: 'Spalato', gps: [43.51164, 16.43997], giorno: 'G6-7', etichetta: 'destra' },
    { nome: 'Hvar', gps: [43.17978, 16.44015], giorno: 'G8-9', etichetta: 'sinistra' },
    { nome: 'Curzola', gps: [42.95431, 17.16087], giorno: 'G10', etichetta: 'sotto' },
    { nome: 'Ston', gps: [42.83835, 17.69627], giorno: 'G13', etichetta: 'sopra' },
    { nome: 'Dubrovnik', gps: [42.6491, 18.09395], giorno: 'G11-14', etichetta: 'destra' },
  ],
  giorni: [
    {
      numero: 1,
      titolo: 'Arrivo a Zagabria',
      paginaSito: '/destinazioni/croazia/zagabria',
      racconto:
        'Siamo arrivati a Zagabria e abbiamo girato la Città Alta: la chiesa di San Marco con il tetto a piastrelle, la Porta di Pietra, la torre Lotrščak con il cannone di mezzogiorno. Il pomeriggio il mercato di Dolac e il Museo delle Relazioni Interrotte, la sera via Tkalčićeva.',
      tratte: [{ da: 'Aeroporto di Zagabria', a: 'Zagabria, centro', km: 17, minuti: 27 }],
      luoghi: [
        { nome: 'Città Alta (Gornji Grad) e piazza Jelačić', gps: [45.8131, 15.97728], fonti: ['osm'] },
        { nome: 'Ente nazionale croato per il turismo', indirizzo: 'Iblerov trg 10/IV, Zagabria', telefono: '+385 1 4699 333 · info@htz.hr', web: 'htz.hr', fonti: ['vs'] },
      ],
      mangiare: [],
      dormire: 'Zagabria, Città Bassa o vicino a piazza Jelačić (nome non annotato).',
      nota: 'Tassa di soggiorno a Zagabria: 1,86 € a persona a notte secondo il mio articolo; spesso non è compresa nel prezzo online.',
    },
    {
      numero: 2,
      titolo: 'Verso Plitvice: i laghi inferiori',
      paginaSito: '/destinazioni/croazia/plitvice',
      racconto:
        'Due ore di strada verso sud fino a Plitvice. Abbiamo dormito vicino al parco e nel pomeriggio, quando i gruppi del mattino erano andati via, abbiamo fatto i laghi inferiori dall\'ingresso 1 fino alla Veliki slap, la cascata più alta, 78 metri.',
      tratte: [{ da: 'Zagabria', a: 'Mukinje (Plitvice)', km: 140, minuti: 141, nelMioViaggio: 'circa due ore' }],
      luoghi: [
        {
          nome: 'Parco Nazionale dei Laghi di Plitvice',
          indirizzo: 'Ingresso 1 e Ingresso 2 sulla statale D1; biglietterie anche all\'ingresso ausiliario Flora',
          orari: 'Gli orari cambiano per stagione: tabella sul sito del parco',
          biglietto: '2026, adulti: 40 € da giugno a settembre (25 € dopo le 16 in giugno-agosto, dopo le 15 a settembre); 23 € in aprile, maggio e ottobre; 10 € da novembre a marzo. Ragazzi 7-18 anni 15 € in estate. Biglietto di due giorni 60 € in estate',
          telefono: '+385 53 751 014 · +385 53 751 015 · info@np-plitvicka-jezera.hr',
          web: 'np-plitvicka-jezera.hr',
          gps: [44.87391, 15.62495],
          nota: 'Il biglietto comprende battello elettrico e trenino panoramico. Si compra online con l\'ingresso scelto e va convalidato lì, nella fascia acquistata. Vietati bagno e uscita dalle passerelle.',
          fonti: ['plitvice', 'osm'],
        },
      ],
      mangiare: [],
      dormire: 'Pensione vicino agli ingressi (Mukinje, Rastovača o Grabovac); nome non annotato.',
      costiNoti: ['Plitvice, pomeriggio in estate: 25 €'],
    },
    {
      numero: 3,
      titolo: 'Plitvice all\'apertura e strada per Zara',
      racconto:
        'Siamo entrati all\'apertura dall\'ingresso 2 per i laghi superiori: battello sul Kozjak e passerelle fino al Prošćansko jezero. Prima delle nove erano quasi vuote. Servono 3-4 ore. Poi giù verso la costa, attraverso la Lika e la galleria del Velebit, fino a Zara.',
      tratte: [{ da: 'Plitvice', a: 'Zara', km: 131, minuti: 123, nelMioViaggio: 'circa due ore' }],
      luoghi: [{ nome: 'Plitvice, Ingresso 2 (laghi superiori)', nota: 'Il biglietto di un giorno non basta per due visite: per pomeriggio e mattina dopo serve quello di due giorni (60 € in estate).', fonti: ['plitvice'] }],
      mangiare: [],
      dormire: 'Zara, centro storico (nome non annotato).',
    },
    {
      numero: 4,
      titolo: 'Zara: l\'Organo marino e il Saluto al Sole',
      paginaSito: '/destinazioni/croazia/zara-krka-sebenico',
      racconto:
        'Giornata a piedi nella penisola di Zara: il foro romano, San Donato, il campanile di Sant\'Anastasia. Al tramonto sul lungomare, tra l\'Organo marino di Nikola Bašić che suona con le onde e il cerchio del Saluto al Sole che si accende quando fa buio.',
      tratte: [],
      senzaStrada: 'Giornata a piedi nel centro storico. Per Ugljan c\'è il traghetto, circa 25 minuti.',
      luoghi: [
        { nome: 'Organo marino (Morske orgulje)', indirizzo: 'Obala kralja Petra Krešimira IV, Zara', biglietto: 'Libero', gps: [44.11704, 15.22], fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Zara, centro storico.',
      nota: 'Corrispondente consolare italiano a Zara: +385 98 655 521 (cellulare italiano +39 351 320 6546).',
    },
    {
      numero: 5,
      titolo: 'Le cascate del Krka e Sebenico',
      racconto:
        'Da Skradin siamo saliti in battello sul fiume fino allo Skradinski buk, la cascata a gradoni percorsa dalle passerelle. Il bagno sotto le cascate è vietato dal 2021. Il pomeriggio a Sebenico: la cattedrale di San Giacomo, tutta in pietra, con le settantuno teste sulle absidi, e la fortezza di San Michele.',
      tratte: [
        { da: 'Zara', a: 'Skradin', km: 75, minuti: 59 },
        { da: 'Skradin', a: 'Sebenico', km: 20, minuti: 24 },
      ],
      luoghi: [
        {
          nome: 'Parco Nazionale del Krka, Skradinski buk',
          indirizzo: 'Ingresso da Skradin (battello) o da Lozovac (navetta)',
          orari: '2026 Skradinski buk: 08:00-20:00 da giugno ad agosto, 08:00-19:00 a maggio e settembre, 08:00-18:00 ad aprile e 1-15 ottobre, 09:00-17:00 dal 16 ottobre, 09:00-16:00 in inverno. Chiuso il 25 e 26 dicembre',
          biglietto: '2026, tutti i siti a terra, adulti: 40 € da giugno a settembre (30 € dopo le 15), 20 € in aprile, maggio e ottobre, 7 € in inverno; ragazzi 7-18 anni 15 € in estate',
          telefono: '+385 22 201 741 · info@npk.hr',
          web: 'npkrka.hr',
          gps: [43.80515, 15.964],
          nota: 'Il biglietto comprende il battello Skradin-Skradinski buk e la navetta da Lozovac, dal 1° aprile al 31 ottobre. La gita in barca a Visovac (2 ore da Skradinski buk) è a parte: 15 €.',
          fonti: ['krka-prezzi', 'krka-orari', 'krka', 'osm'],
        },
        { nome: 'Cattedrale di San Giacomo, Sebenico', gps: [43.73406, 15.89448], nota: 'Corrispondente consolare italiano a Sebenico: +385 22 215 933, cellulare +385 98 759 841.', fonti: ['vs'] },
      ],
      mangiare: [],
      dormire: 'Sebenico (nome non annotato).',
      costiNoti: ['Krka in estate: 40 € (30 € dopo le 15)', 'Barca per Visovac: 15 €'],
    },
    {
      numero: 6,
      titolo: 'Traù e arrivo a Spalato',
      paginaSito: '/destinazioni/croazia/spalato',
      racconto:
        'Sulla strada per Spalato ci siamo fermati un paio d\'ore a Traù, l\'isoletta col centro medievale e il portale di Radovan sulla cattedrale. Arrivati a Spalato abbiamo restituito l\'auto e da lì in poi ci siamo mossi a piedi e in catamarano. La sera, la Riva.',
      tratte: [
        { da: 'Sebenico', a: 'Traù', km: 54, minuti: 57 },
        { da: 'Traù', a: 'Spalato', km: 28, minuti: 33 },
      ],
      luoghi: [{ nome: 'Traù (Trogir), centro storico', gps: [43.51641, 16.24972], fonti: ['osm'] }],
      mangiare: [],
      dormire: 'Spalato, dentro o accanto al palazzo di Diocleziano (nome non annotato).',
      nota: 'Per la sola andata Zagabria-Spalato il noleggiatore chiede un supplemento: fallo indicare nel preventivo.',
    },
    {
      numero: 7,
      titolo: 'Spalato: il palazzo di Diocleziano e il Marjan',
      racconto:
        'Il centro di Spalato sta dentro il palazzo che Diocleziano si fece costruire intorno al 300: il Peristilio, la cattedrale di San Doimo nel mausoleo, il campanile, i sotterranei. Il pomeriggio sulla collina del Marjan, oppure a Bačvice a guardare il picigin.',
      tratte: [],
      senzaStrada: 'Giornata a piedi. Il Marjan si raggiunge a piedi dalla Riva.',
      luoghi: [
        { nome: 'Palazzo di Diocleziano e sotterranei', gps: [43.5085, 16.44025], biglietto: 'Sotterranei: circa 10 € secondo il mio articolo; conviene controllare in biglietteria', fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Spalato, centro storico.',
      nota: 'Nel centro di Spalato costume, torso nudo e alcol per strada si multano: 150 € secondo il mio articolo.',
    },
    {
      numero: 8,
      titolo: 'In catamarano a Hvar',
      paginaSito: '/destinazioni/croazia/hvar',
      racconto:
        'Un\'ora di catamarano da Spalato a Hvar città. La piazza di Santo Stefano, l\'arsenale col teatro del 1612 e la fortezza spagnola sopra il paese per il tramonto sull\'arcipelago. Chi vuole quiete dorme a Stari Grad o a Jelsa.',
      tratte: [{ da: 'Spalato', a: 'Hvar città', km: 37, minuti: 60, mezzo: 'catamarano', nelMioViaggio: 'circa un\'ora' }],
      luoghi: [
        { nome: 'Hvar città, piazza di Santo Stefano', gps: [43.17978, 16.44015], fonti: ['osm'] },
        { nome: 'Corrispondente consolare italiano a Hvar', indirizzo: 'Ulica Antifašizma 9, Hvar', telefono: '+385 91 506 9888', fonti: ['vs'] },
      ],
      mangiare: [],
      dormire: 'Hvar città o Stari Grad (nome non annotato).',
      nota: 'Hvar multa chi beve per strada, gira in costume o dorme in spiaggia: secondo il mio articolo da 400 a 700 €.',
    },
    {
      numero: 9,
      titolo: 'Hvar: le isole Pakleni',
      racconto:
        'Taxi-boat dal porto alle Pakleni, una corsa ogni mezz\'ora in estate: le baie di Palmižana e Ždrilca su Sveti Klement, acqua trasparente e pinete. In alternativa l\'interno in scooter: Malo Grablje, la lavanda (giugno-luglio) e la piana di Stari Grad.',
      tratte: [],
      senzaStrada: 'Taxi-boat dal porto di Hvar, prezzo da chiedere al molo (10-15 € andata e ritorno secondo il mio articolo).',
      luoghi: [],
      mangiare: [],
      dormire: 'Hvar città o Stari Grad.',
    },
    {
      numero: 10,
      titolo: 'Curzola, la città di Marco Polo',
      paginaSito: '/destinazioni/croazia/curzola',
      racconto:
        'Un\'ora e mezza di catamarano fino a Curzola. La città vecchia è a lisca di pesce, con le vie laterali curve contro il vento. La casa di Marco Polo, le mura, la cattedrale di San Marco e il tramonto dal torrione. D\'estate la sera si balla la moreška.',
      tratte: [{ da: 'Hvar', a: 'Curzola', km: 64, minuti: 90, mezzo: 'catamarano', nelMioViaggio: 'circa un\'ora e mezza' }],
      luoghi: [{ nome: 'Curzola, città vecchia', gps: [42.95431, 17.16087], fonti: ['osm'] }],
      mangiare: [],
      dormire: 'Curzola città vecchia o Lumbarda (nome non annotato).',
    },
    {
      numero: 11,
      titolo: 'Da Curzola a Dubrovnik e le mura',
      paginaSito: '/destinazioni/croazia/dubrovnik',
      racconto:
        'Circa due ore di catamarano fino al porto di Gruž, poi bus o taxi per la città vecchia. Il pomeriggio sulle mura: quasi due chilometri di camminamento tra torri e bastioni. Siamo saliti tardi, con il sole basso e le crociere già ripartite.',
      tratte: [{ da: 'Curzola', a: 'Dubrovnik, porto di Gruž', km: 82, minuti: 120, mezzo: 'catamarano', nelMioViaggio: 'circa due ore' }],
      luoghi: [
        {
          nome: 'Mura di Dubrovnik',
          indirizzo: 'Ingressi a Porta Pile, Porta Ploče e vicino al Museo Marittimo (forte San Giovanni)',
          orari: 'Secondo il calendario pubblicato: 10:00-17:00 aprile-giugno, 08:00-19:30 luglio, 08:00-19:00 agosto, 08:00-18:00/18:30 settembre, 08:00-17:30 ottobre, 09:00-15:00 da novembre a marzo; chiuso il 25 dicembre',
          biglietto: 'Conviene controllare su citywallsdubrovnik.hr (le fonti 2026 indicano circa 40 €)',
          telefono: '+385 20 638 800 · info@citywallsdubrovnik.hr',
          web: 'citywallsdubrovnik.hr',
          gps: [42.6491, 18.09395],
          nota: 'Le mura le gestisce la Società degli amici delle antichità di Dubrovnik. Diffida dei siti che rivendono il biglietto con commissione.',
          fonti: ['mura', 'mura-orari'],
        },
      ],
      mangiare: [],
      dormire: 'Dubrovnik, Lapad o Gruž (nome non annotato).',
      nota: 'Tassa di soggiorno a Dubrovnik: 2,65 € a persona a notte da aprile a settembre secondo il mio articolo.',
    },
    {
      numero: 12,
      titolo: 'Dubrovnik: Stradun, Lokrum e la funivia',
      racconto:
        'Presto la mattina lo Stradun, il palazzo del Rettore, la farmacia del monastero francescano, la colonna di Orlando. Poi in barca a Lokrum, quindici minuti dal porto vecchio: pavoni, orto botanico, il monastero e il «Mar Morto». Al tramonto la funivia sul monte Srđ.',
      tratte: [],
      senzaStrada: 'A piedi in città; barca per Lokrum dal porto vecchio, funivia sopra le mura.',
      luoghi: [
        {
          nome: 'Riserva di Lokrum',
          indirizzo: 'Biglietteria Luža, porto vecchio di Dubrovnik (08:00-16:00)',
          biglietto: '30 € a persona, ingresso e barca andata e ritorno',
          telefono: 'Biglietteria +385 99 476 5224 · riserva +385 20 311 738 · info@lokrum.hr',
          web: 'lokrum.hr',
          gps: [42.62757, 18.12066],
          nota: 'Orario delle barche 2026 nel PDF sul sito della riserva. Secondo il mio articolo i ragazzi 7-18 anni pagano 5 €: il sito non lo indica, chiedi in biglietteria.',
          fonti: ['lokrum', 'osm'],
        },
        { nome: 'Funivia di Dubrovnik (monte Srđ)', web: 'dubrovnikcablecar.com', nota: 'Chiusa d\'inverno per manutenzione, riapre il 1° aprile. Prezzi da controllare sul sito: la pagina dei prezzi non era aggiornata.', fonti: ['funivia'] },
      ],
      mangiare: [],
      dormire: 'Dubrovnik.',
      costiNoti: ['Lokrum con barca: 30 €'],
    },
    {
      numero: 13,
      titolo: 'Ston e la penisola di Sabbioncello',
      racconto:
        'Gita a Ston, sulla penisola di Pelješac: le mura che salgono sulla collina per oltre cinque chilometri e le saline. A Mali Ston le ostriche crude con un bianco. Più avanti i vigneti di Dingač e Postup, dove si fa il plavac mali.',
      tratte: [
        { da: 'Dubrovnik', a: 'Ston', km: 54, minuti: 64, nelMioViaggio: 'circa un\'ora' },
        { da: 'Ston', a: 'Dubrovnik', km: 54, minuti: 63 },
      ],
      luoghi: [
        { nome: 'Mura di Ston', web: 'citywallsdubrovnik.hr', gps: [42.83835, 17.69627], nota: 'Gestite dalla stessa società delle mura di Dubrovnik: biglietto e orari sul suo sito.', fonti: ['mura', 'osm'] },
        { nome: 'Mali Ston, allevamenti di ostriche', gps: [42.84637, 17.70403], fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Dubrovnik.',
      nota: 'Senza auto si va con l\'autobus o un\'auto noleggiata per un giorno a Dubrovnik. Le Bocche di Cattaro sono a due ore, con frontiera esterna a Schengen: per l\'auto a noleggio serve il permesso del noleggiatore e la carta verde.',
    },
    {
      numero: 14,
      titolo: 'Rientro da Dubrovnik',
      racconto:
        'L\'aeroporto di Čilipi è a sud della città, con voli diretti per l\'Italia in stagione. In alcuni periodi c\'è anche il traghetto notturno Jadrolinija per Bari.',
      tratte: [{ da: 'Dubrovnik', a: 'Aeroporto di Dubrovnik (Čilipi)', km: 22, minuti: 29 }],
      luoghi: [],
      mangiare: [],
      dormire: 'Nessun pernottamento.',
    },
  ],
  mappa: {
    percorso: ['Zagabria', 'Plitvice', 'Zara', 'Skradin', 'Sebenico', 'Traù', 'Spalato', 'Hvar', 'Curzola', 'Dubrovnik'],
    ritorno: ['Dubrovnik', 'Ston'],
    legenda: 'Linea piena: l\'ordine delle tappe, in auto fino a Spalato e poi in catamarano. Tratteggio: la gita a Ston. Le coste non sono disegnate.',
    notaTempi: 'Tempi su strada senza traffico (OSRM su OpenStreetMap). D\'estate sulla costa conta un 30% in più; per i catamarani i km sono in linea d\'aria e i tempi quelli del viaggio, gli orari esatti li pubblicano le compagnie.',
    notaTempiFonti: ['osrm'],
    scalaKm: 50,
  },
  primaDiPartire: [
    {
      titolo: 'Documenti e ingresso',
      righe: [
        { voce: 'Documento', valore: 'Carta d\'identità elettronica o passaporto, validi per tutto il soggiorno. La Croazia è UE, Schengen ed euro dal 2023.', fonti: ['vs'] },
        { voce: 'Carta cartacea', valore: 'Dal 3 agosto 2026 la vecchia carta d\'identità cartacea non vale più per l\'espatrio.' },
        { voce: 'Montenegro o Bosnia', valore: 'Fuori Schengen: documento valido e, con l\'auto a noleggio, autorizzazione del noleggiatore e carta verde.' },
        { voce: 'Sanità', valore: 'Tessera sanitaria (TEAM). Viaggiare Sicuri segnala carenze di farmaci: porta il foglietto dei tuoi, per il principio attivo.', fonti: ['vs'] },
      ],
    },
    {
      titolo: 'Auto e strade',
      righe: [
        { voce: 'Patente e assicurazione', valore: 'Basta la patente italiana; l\'assicurazione italiana vale. Per un\'auto non tua serve una delega del proprietario.', fonti: ['vs'] },
        { voce: 'Regole', valore: 'Anabbaglianti accesi anche di giorno, cinture sempre. Multe alte e controlli severi sulla costa e sulla Zagabria-Spalato.', fonti: ['vs'] },
        { voce: 'Pedaggi', valore: 'Caselli con carta o contanti; Zagabria-Spalato circa 25-30 € secondo il mio articolo. Dal 1° marzo 2027 è previsto il pedaggio senza caselli.' },
        { voce: 'Scooter e barche', valore: 'Sopra i 50 cc serve la patente A2; per qualsiasi barca a motore, gommoni compresi, la patente nautica.', fonti: ['vs'] },
      ],
    },
    {
      titolo: 'Da prenotare prima',
      righe: [
        { voce: 'Plitvice', valore: 'Online con ingresso e fascia oraria; in estate i posti finiscono.', fonti: ['plitvice'] },
        { voce: 'Catamarani', valore: 'Jadrolinija, TP Line e Krilo: in luglio e agosto le corse si riempiono.' },
        { voce: 'Auto', valore: 'Sola andata Zagabria-Spalato, con il supplemento scritto nel preventivo.' },
      ],
    },
    {
      titolo: 'Soldi, corrente, sicurezza',
      righe: [
        { voce: 'Valuta', valore: 'Euro. Contanti utili nei bar delle isole e nelle sobe. Preleva agli sportelli delle banche e rifiuta la conversione in valuta di casa.' },
        { voce: 'Corrente', valore: '230 V, prese C e F come in Italia (per la spina a tre poli in fila serve un adattatore).', fonti: ['prese'] },
        { voce: 'Conti', valore: 'La Farnesina segnala contestazioni sui conti di cibo e alcolici: chiedi il prezzo prima, il pesce si paga al chilo.', fonti: ['vs'] },
        { voce: 'Rischi naturali', valore: 'Zona sismica; d\'estate incendi nei boschi. Bora che ferma i catamarani. Ricci di mare: scarpette da scoglio.', fonti: ['vs'] },
      ],
    },
  ],
  emergenze: {
    numeri: [
      { voce: 'Numero unico di emergenza', valore: '112', fonti: ['vs'] },
      { voce: 'Polizia', valore: '192', fonti: ['vs'] },
      { voce: 'Vigili del fuoco', valore: '193', fonti: ['vs'] },
      { voce: 'Soccorso stradale', valore: '1987', fonti: ['vs'] },
      { voce: 'Soccorso in mare', valore: '9155', fonti: ['vs'] },
    ],
    ambasciata: [
      {
        nome: 'Ambasciata d\'Italia a Zagabria',
        cosa: 'Uffici 09:00-18:00 nei feriali; cancelleria consolare su appuntamento (+385 1 2369 250, lun-ven 14:00-16:00). Cellulare di emergenza dopo la chiusura: +385 98 417 660',
        indirizzo: 'Radnička cesta 50, 10000 Zagabria',
        telefono: '+385 1 4846 386 · consolare.ambzagabria@esteri.it',
        web: 'ambzagabria.esteri.it',
        stato: 'ufficiale',
        fonti: ['vs'],
      },
      {
        nome: 'Vice Consolato onorario d\'Italia a Spalato',
        cosa: 'Ufficio onorario',
        indirizzo: 'Obala HNP 10, 21000 Spalato',
        telefono: '+385 21 347 376 · cell. +385 91 587 2468 · spalato.onorario@esteri.it',
        stato: 'ufficiale',
        fonti: ['vs'],
      },
      {
        nome: 'Consolato onorario d\'Italia a Dubrovnik',
        cosa: 'Ufficio onorario',
        indirizzo: 'c/o Hotel Libertas Rixos, Liechtensteinov put 3, 20000 Dubrovnik',
        telefono: '+385 20 200 262 · cell. +385 98 941 4654 · ragusa.onorario@esteri.it',
        stato: 'ufficiale',
        fonti: ['vs'],
      },
    ],
    ospedali: [
      { nome: 'KBC Zagreb (Rebro)', cosa: 'Zagabria, ospedale universitario', stato: 'ufficiale', avviso: 'Telefono non verificato: in emergenza chiama il 112.', fonti: [] },
      { nome: 'KBC Split', cosa: 'Spalato, ospedale universitario', stato: 'ufficiale', avviso: 'Telefono non verificato: in emergenza chiama il 112.', fonti: [] },
      { nome: 'Opća bolnica Dubrovnik', cosa: 'Dubrovnik, ospedale generale', stato: 'ufficiale', avviso: 'Telefono non verificato: in emergenza chiama il 112.', fonti: [] },
    ],
  },
  contatti: [
    {
      gruppo: 'Parchi e siti',
      voci: [
        { nome: 'Parco Nazionale di Plitvice', cosa: 'Biglietti online e informazioni', web: 'np-plitvicka-jezera.hr', telefono: '+385 53 751 014 · info@np-plitvicka-jezera.hr', stato: 'ufficiale', fonti: ['plitvice'] },
        { nome: 'Parco Nazionale del Krka', cosa: 'Sede a Sebenico, Trg Ivana Pavla II 5', web: 'npkrka.hr', telefono: '+385 22 201 741 · info@npk.hr', stato: 'ufficiale', fonti: ['krka'] },
        { nome: 'Mura di Dubrovnik e di Ston', cosa: 'Società degli amici delle antichità di Dubrovnik, Gundulićeva poljana 2', web: 'citywallsdubrovnik.hr', telefono: '+385 20 638 800 · info@citywallsdubrovnik.hr', stato: 'ufficiale', fonti: ['mura'] },
        { nome: 'Riserva di Lokrum', cosa: 'Biglietti e barche dal porto vecchio', web: 'lokrum.hr', telefono: '+385 20 311 738 · info@lokrum.hr', stato: 'ufficiale', fonti: ['lokrum'] },
      ],
    },
    {
      gruppo: 'Traghetti e catamarani',
      nota: 'Orari e prezzi cambiano ogni stagione: controlla sui siti delle compagnie e compra lì.',
      voci: [
        { nome: 'Jadrolinija', cosa: 'Catamarani Spalato-Hvar-Curzola-Dubrovnik e traghetto per Bari', web: 'jadrolinija.hr', stato: 'non-provato', fonti: [] },
        { nome: 'TP Line', cosa: 'Catamarani in Dalmazia', web: 'tpline.hr', stato: 'non-provato', fonti: [] },
        { nome: 'Krilo', cosa: 'Catamarani Spalato-Hvar-Curzola-Dubrovnik', web: 'krilo.hr', stato: 'non-provato', fonti: [] },
      ],
    },
  ],
  budget: {
    righe: [
      { voce: 'Voli o viaggio fino a Zagabria e rientro da Dubrovnik' },
      { voce: 'Auto Zagabria-Spalato, sola andata', nota: 'più carburante e pedaggi' },
      { voce: 'Alloggi, 13 notti', nota: 'più tassa di soggiorno' },
      { voce: 'Plitvice, due giorni (estate)', costo: '60 €' },
      { voce: 'Krka (estate)', costo: '40 €' },
      { voce: 'Barca per Visovac', costo: '15 €' },
      { voce: 'Catamarani Spalato-Hvar-Curzola-Dubrovnik' },
      { voce: 'Taxi-boat per le Pakleni' },
      { voce: 'Mura di Dubrovnik', nota: 'circa 40 €, da confermare' },
      { voce: 'Lokrum con barca', costo: '30 €' },
      { voce: 'Funivia del Srđ' },
      { voce: 'Pasti' },
    ],
    nota: 'Le cifre sono i listini ufficiali 2026 per un adulto in alta stagione. Il resto lo riempi tu.',
  },
  valigia: [
    { gruppo: 'Documenti', voci: ['Carta d\'identità elettronica o passaporto', 'Tessera sanitaria (TEAM)', 'Patente', 'Biglietti di Plitvice stampati o sul telefono', 'Carta di credito e qualche contante', 'Questa guida stampata'] },
    { gruppo: 'Vestiti', voci: ['Scarpe comode per le passerelle', 'Scarpette da scoglio', 'Costume e telo', 'Cappello e occhiali da sole', 'Una maglia o felpa per la sera e la bora', 'Qualcosa da mettere sopra il costume nei centri storici'] },
    { gruppo: 'Auto', voci: ['Gilet catarifrangente, triangolo e kit di pronto soccorso (controlla che siano a bordo)'] },
    { gruppo: 'Zaino del giorno', voci: ['Acqua', 'Crema solare', 'Power bank', 'Mappe offline'] },
  ],
  lingua: {
    nome: 'Croato',
    pronuncia: 'Si legge come si scrive. «c» = z di «zio», «č» e «ć» = c di «ciao», «š» = sc di «scena», «ž» = j francese, «j» = i, «dž» e «đ» = g di «gelo». L\'accento cade quasi sempre sulla prima sillaba.',
  },
  frasario: [
    {
      gruppo: 'Saluti e cortesia',
      frasi: [
        { it: 'Buongiorno', loc: 'dobar dan' },
        { it: 'Ciao', loc: 'bok' },
        { it: 'Grazie', loc: 'hvala' },
        { it: 'Per favore / prego', loc: 'molim' },
        { it: 'Sì / no', loc: 'da / ne' },
        { it: 'Scusi', loc: 'oprostite' },
        { it: 'Parla inglese?', loc: 'govorite li engleski?' },
      ],
    },
    {
      gruppo: 'Muoversi',
      frasi: [
        { it: 'Dov\'è…?', loc: 'gdje je…?' },
        { it: 'Il porto', loc: 'luka' },
        { it: 'Il traghetto', loc: 'trajekt' },
        { it: 'Un biglietto per Hvar', loc: 'jednu kartu za Hvar' },
        { it: 'Quanto costa?', loc: 'koliko košta?' },
      ],
    },
    {
      gruppo: 'A tavola',
      frasi: [
        { it: 'Il conto, per favore', loc: 'račun, molim' },
        { it: 'Acqua', loc: 'voda' },
        { it: 'Vino bianco / rosso', loc: 'bijelo / crno vino' },
        { it: 'Pesce', loc: 'riba' },
      ],
    },
    {
      gruppo: 'Emergenze',
      frasi: [
        { it: 'Aiuto!', loc: 'upomoć!' },
        { it: 'Chiamate un medico', loc: 'zovite liječnika' },
        { it: 'Ospedale', loc: 'bolnica' },
        { it: 'Farmacia', loc: 'ljekarna' },
      ],
    },
  ],
  numeri: [
    { it: '1', loc: 'jedan' },
    { it: '2', loc: 'dva' },
    { it: '3', loc: 'tri' },
    { it: '4', loc: 'četiri' },
    { it: '5', loc: 'pet' },
    { it: '10', loc: 'deset' },
    { it: '20', loc: 'dvadeset' },
    { it: '100', loc: 'sto' },
  ],
  pagineSito: [
    { titolo: 'Il viaggio: Croazia in 14 giorni', path: '/viaggi/croazia-itinerario' },
    { titolo: 'Zagabria', path: '/destinazioni/croazia/zagabria' },
    { titolo: 'Laghi di Plitvice', path: '/destinazioni/croazia/plitvice' },
    { titolo: 'Zara, Krka e Sebenico', path: '/destinazioni/croazia/zara-krka-sebenico' },
    { titolo: 'Spalato', path: '/destinazioni/croazia/spalato' },
    { titolo: 'Hvar', path: '/destinazioni/croazia/hvar' },
    { titolo: 'Curzola', path: '/destinazioni/croazia/curzola' },
    { titolo: 'Dubrovnik', path: '/destinazioni/croazia/dubrovnik' },
  ],
  nonVerificato: [
    'Prezzo 2026 delle mura di Dubrovnik sul sito ufficiale (la pagina non lo riporta)',
    'Prezzi della funivia del Srđ e dei sotterranei del palazzo di Diocleziano',
    'Orari e prezzi dei catamarani e dei taxi-boat per le Pakleni',
    'Telefoni degli ospedali',
    'Tasse di soggiorno e multe dei centri storici (dal mio articolo, non riscontrate sui siti dei comuni)',
    'Nomi di alloggi e ristoranti: non annotati nei miei documenti',
  ],
  consultate: 'Consultate il 2 novembre 2026. Prezzi e orari cambiano: prima di pagare, guarda sempre la fonte ufficiale.',
  fonti: [
    { id: 'vs', titolo: 'Viaggiare Sicuri (Farnesina), scheda Croazia', url: 'https://www.viaggiaresicuri.it/schede_paese/HRV.json' },
    { id: 'plitvice', titolo: 'Parco Nazionale di Plitvice, listino 2026', url: 'https://np-plitvicka-jezera.hr/en/plan-your-visit/istrazite-jezera/price-list/' },
    { id: 'krka', titolo: 'Parco Nazionale del Krka', url: 'https://www.npkrka.hr/en/' },
    { id: 'krka-prezzi', titolo: 'Parco Nazionale del Krka, listino 2026 (PDF)', url: 'https://npkrka.hr/wp-content/uploads/Cjenik-2026.pdf' },
    { id: 'krka-orari', titolo: 'Parco Nazionale del Krka, orari', url: 'https://npkrka.hr/hr/posjeti/radno-vrijeme/' },
    { id: 'mura', titolo: 'City Walls Dubrovnik, contatti', url: 'https://citywallsdubrovnik.hr/contacts-en/?lang=en' },
    { id: 'mura-orari', titolo: 'Walls of Dubrovnik, orari', url: 'https://www.wallsofdubrovnik.com/info-ticket-prices-working-hours/' },
    { id: 'lokrum', titolo: 'Riserva di Lokrum', url: 'https://www.lokrum.hr/en/' },
    { id: 'funivia', titolo: 'Dubrovnik Cable Car, prezzi e orari', url: 'https://www.dubrovnikcablecar.com/timetable-and-prices' },
    { id: 'prese', titolo: 'WorldStandards, prese elettriche in Croazia', url: 'https://www.worldstandards.eu/electricity/plug-voltage-by-country/croatia/' },
    { id: 'osm', titolo: 'OpenStreetMap / Nominatim (coordinate)', url: 'https://nominatim.openstreetmap.org' },
    { id: 'osrm', titolo: 'OSRM su dati OpenStreetMap (distanze e tempi)', url: 'https://router.project-osrm.org' },
  ],
}
