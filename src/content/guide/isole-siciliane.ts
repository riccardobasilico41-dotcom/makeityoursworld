import type { Guida } from './types'

/**
 * Guida PDF «Le isole siciliane in 12 giorni». Il racconto viene dal viaggio
 * src/content/viaggi/38-isole-siciliane.md (con i dati di
 * src/content/viaggi-dati/isole-siciliane.ts); orari, prezzi e contatti sono
 * stati verificati sul web il 2/11/2026 e rimandano alle fonti in fondo (campo `fonti`, per id).
 *
 * Distanze e tempi su strada: router OSRM su dati OpenStreetMap, traffico libero.
 * Tratte via mare e in aereo: distanza in linea d'aria, durata indicata dagli operatori.
 * Coordinate: OpenStreetMap (Nominatim).
 */

export const guidaIsoleSiciliane: Guida = {
  slug: 'isole-siciliane',
  tripSlug: 'isole-siciliane',
  paese: 'Italia',
  titolo: 'Le isole siciliane',
  sottotitolo: 'Egadi, Pantelleria e Lampedusa in dodici giorni: tre arcipelaghi che non si collegano tra loro, con aliscafi, voli, bici e scooter.',
  autore: 'Rick',
  verificatoAl: 'novembre 2026',
  intro: [
    'Questo giro l\'ho fatto con amici, in autonomia: dodici giorni e undici notti tra le Egadi, Pantelleria e Lampedusa, con aliscafi, voli interni, una bici e uno scooter. Sono tre mondi separati, a centinaia di chilometri l\'uno dall\'altro, e Pantelleria e Lampedusa non sono collegate: in mezzo c\'è una giornata di transito che va messa in conto.',
    'Sul sito c\'è il racconto. Qui ci sono le cose da avere in tasca: per ogni giorno i mezzi e i tempi, gli indirizzi, i prezzi e i contatti dei posti che si prenotano, le coordinate da aprire nel telefono, i numeri utili e il lavoro da fare prima di partire.',
    'Prezzi, orari e regole li ho ricontrollati a inizio novembre 2026 sulle fonti ufficiali, elencate in fondo. Su queste isole decide il vento: corse e voli saltano, e le regole della Spiaggia dei Conigli cambiano ogni stagione.',
  ],
  cosaInPiu: [
    'Una scheda per ogni giorno con mezzi, tempi, indirizzi, prezzi, coordinate GPS e un QR che apre il punto su Google Maps',
    'Prezzi e regole di prenotazione della Grotta del Genovese a Levanzo',
    'Le regole della Riserva di Lampedusa per la Spiaggia dei Conigli: turni, posti, cosa non si può portare',
    'Biglietterie e numeri di Liberty Lines per Egadi e Pelagie, traghetti Siremar per Pantelleria e Lampedusa',
    'Numeri di emergenza, ospedali e presidi sanitari sulle isole',
    'Foglio budget, lista per la valigia e un glossario dei cartelli e delle parole di mare',
    'Mappa del percorso da stampare',
  ],
  tappe: [
    { nome: 'Aeroporto di Trapani-Birgi', gps: [37.91301, 12.49262], giorno: 'G1', etichetta: 'destra' },
    { nome: 'Trapani', gps: [38.0137, 12.51157], giorno: 'G1 · G4', etichetta: 'destra' },
    { nome: 'Favignana', gps: [37.9314, 12.32743], giorno: 'G1-G4', etichetta: 'sotto' },
    { nome: 'Levanzo', gps: [38.00264, 12.33183], giorno: 'G3', etichetta: 'sopra' },
    { nome: 'Marettimo', gps: [37.96912, 12.05874], giorno: 'G4', etichetta: 'sinistra' },
    { nome: 'Pantelleria', gps: [36.83146, 11.94504], giorno: 'G5-G9', etichetta: 'sinistra' },
    { nome: 'Palermo, aeroporto', gps: [38.17652, 13.09164], giorno: 'G9', etichetta: 'destra' },
    { nome: 'Lampedusa', gps: [35.51113, 12.59629], giorno: 'G9-G12', etichetta: 'destra' },
    { nome: 'Linosa', gps: [35.86516, 12.86753], giorno: 'G11', etichetta: 'destra' },
  ],
  giorni: [
    {
      numero: 1,
      titolo: 'Trapani e sbarco a Favignana',
      paginaSito: '/destinazioni/italia/isole-siciliane',
      racconto:
        'Siamo atterrati a Trapani-Birgi e abbiamo preso l\'aliscafo per Favignana, una ventina di minuti. L\'isola ha la forma di una farfalla, con il paese sull\'istmo e il Monte Santa Caterina sopra. È di calcarenite, che qui chiamano tufo, ed è stata per secoli una cava a cielo aperto: le ex cave scavate in verticale sono diventate giardini ipogei, riparati dal vento. La prima sera in paese, con il tonno.',
      tratte: [
        { da: 'Aeroporto di Trapani-Birgi', a: 'Trapani, molo aliscafi', km: 17, minuti: 34 },
        { da: 'Trapani', a: 'Favignana', km: 19, minuti: 20, mezzo: 'aliscafo' },
      ],
      luoghi: [
        {
          nome: 'Biglietteria aliscafi Liberty Lines di Trapani',
          indirizzo: 'Molo d\'imbarco aliscafi, Via Ammiraglio Staiti 23, Trapani',
          telefono: '+39 0923 022 022 (customer care, tutti i giorni 08:00-20:00)',
          web: 'libertylines.it',
          gps: [38.0137, 12.51157],
          nota: 'D\'estate i posti finiscono: compra online qualche giorno prima, soprattutto per Levanzo e Marettimo.',
          fonti: ['ll-biglietterie', 'll-carta', 'osm'],
        },
        {
          nome: 'Aeroporto di Trapani-Birgi (TPS)',
          indirizzo: 'Strada Trapani-Marsala, Misiliscemi (TP)',
          gps: [37.91301, 12.49262],
          nota: 'In alternativa si atterra a Palermo: dall\'aeroporto Falcone e Borsellino al molo di Trapani sono 91 km, circa un\'ora e mezza.',
          fonti: ['osm', 'osrm'],
        },
        {
          nome: 'Favignana, paese e porto',
          gps: [37.9314, 12.32743],
          nota: 'Biglietteria Liberty Lines al molo San Leonardo, stesso numero di Trapani. I noleggi bici sono intorno al porto.',
          fonti: ['ll-biglietterie', 'osm'],
        },
      ],
      mangiare: [],
      dormire: 'Favignana, in paese, per stare a piedi dal porto e dai noleggi bici. Il nome della struttura non è annotato nei miei appunti.',
      nota: 'Le Egadi sono la più grande area marina protetta d\'Europa: pesca, ancoraggio e navigazione hanno zone e regole diverse.',
    },
    {
      numero: 2,
      titolo: 'Favignana in bicicletta',
      paginaSito: '/destinazioni/italia/isole-siciliane',
      racconto:
        'Abbiamo fatto il giro in bici, come tutti. Sull\'ala orientale Cala Rossa, con la roccia bianca tagliata e l\'acqua turchese, poi Bue Marino, un\'ex cava che scende in acqua, Cala Azzurra e Lido Burrone, le uniche di sabbia. L\'ala occidentale è più alta e più vuota: Cala Rotonda, Cala Grande, il Faraglione. In paese abbiamo visitato l\'ex Stabilimento Florio, la tonnara ottocentesca che racconta la mattanza.',
      tratte: [],
      senzaStrada: 'Giornata in bici sull\'isola: le distanze sono tutte sotto i sei chilometri e l\'ala orientale è piatta.',
      luoghi: [
        {
          nome: 'Cala Rossa',
          indirizzo: 'Discesa Bue Marino, Favignana',
          gps: [37.92131, 12.36217],
          nota: 'Si scende su roccia tagliata, spesso con un piccolo salto in acqua: servono le scarpe di gomma.',
          fonti: ['osm'],
        },
        {
          nome: 'Ex Stabilimento Florio delle tonnare di Favignana e Formica',
          indirizzo: 'Via Roma 29, Favignana',
          gps: [37.93035, 12.32268],
          nota: 'Orari e prezzi 2026 non pubblicati su una pagina ufficiale: le fonti giornalistiche danno aperture estive mattina e sera e un biglietto tra 6 e 8 €. Chiedi in paese o all\'ufficio turistico.',
          fonti: ['fai-florio', 'osm'],
        },
      ],
      mangiare: [],
      dormire: 'Favignana, come la sera prima.',
      nota: 'Quasi nessuna cala di Favignana è di sabbia. Chi cerca la spiaggia classica resta deluso.',
    },
    {
      numero: 3,
      titolo: 'Levanzo e la Grotta del Genovese',
      paginaSito: '/destinazioni/italia/isole-siciliane',
      racconto:
        'Una traversata breve e siamo arrivati a Levanzo, un solo paese di case bianche e il resto roccia e macchia. Ci si viene per la Grotta del Genovese, con le incisioni di animali del Paleolitico superiore e le pitture nere del Neolitico sulla stessa parete. Ci siamo arrivati con l\'accompagnamento prenotato. Il resto dell\'isola a piedi, fino a Cala Minnola con il pineto.',
      tratte: [{ da: 'Favignana', a: 'Levanzo', km: 8, minuti: 10, mezzo: 'aliscafo', nelMioViaggio: 'traversata breve' }],
      luoghi: [
        {
          nome: 'Grotta del Genovese',
          indirizzo: 'Ufficio in Via Calvario 27, Levanzo; la grotta è a 4 km dal paese',
          orari: 'Visite solo al mattino, su prenotazione',
          biglietto: 'Visita guidata con trasporto in barca o fuoristrada: 44 € adulti, 37 € 6-11 anni. Solo ingresso e guida (ci arrivi a piedi, circa un\'ora): 22 € e 17 €. Gratis fino a 5 anni',
          telefono: '+39 331 1330259 · +39 339 7418800 · info@grottadelgenovese.it',
          web: 'grottadelgenovese.it',
          gps: [38.00188, 12.32189],
          nota: 'Prenotazione obbligatoria con almeno 48 ore di anticipo. Il mezzo (barca o fuoristrada) lo decide lo staff in base al mare. Prenota anche l\'aliscafo: d\'estate i posti sotto data sono rari.',
          fonti: ['genovese-prezzi', 'osm'],
        },
        {
          nome: 'Biglietteria Liberty Lines di Levanzo',
          indirizzo: 'Porto di Levanzo',
          telefono: '+39 0923 022 022 · +39 348 8042681',
          fonti: ['ll-biglietterie'],
        },
      ],
      mangiare: [],
      dormire: 'Favignana. Levanzo ha pochissime strutture, quasi tutte piccole.',
      costiNoti: ['Grotta del Genovese, visita con trasporto: 44 €'],
    },
    {
      numero: 4,
      titolo: 'Marettimo',
      paginaSito: '/destinazioni/italia/isole-siciliane',
      racconto:
        'La più lontana e la più alta delle Egadi, senza auto: il paese, il porto e i sentieri. I percorsi salgono a Pizzo Falcone, 686 metri, e passano dalle Case Romane, con una piccola chiesa bizantina. Dal mare abbiamo fatto il giro delle grotte, del Cammello, del Presepe e la Perciata. In serata siamo rientrati a Trapani.',
      tratte: [
        { da: 'Favignana', a: 'Marettimo', km: 24, minuti: 40, mezzo: 'aliscafo' },
        { da: 'Marettimo', a: 'Trapani', km: 40, minuti: 60, mezzo: 'aliscafo', nelMioViaggio: 'circa un\'ora' },
      ],
      luoghi: [
        {
          nome: 'Marettimo, paese e porto',
          gps: [37.96912, 12.05874],
          nota: 'Pochissimi posti letto e quasi nessun servizio la sera. Il giro delle grotte si fa con le barche dei pescatori in porto: prezzi e nomi non annotati.',
          fonti: ['osm'],
        },
        {
          nome: 'Sentiero per Pizzo Falcone e Case Romane',
          nota: 'Si parte dal paese. Acqua e cappello: sulla dorsale non c\'è ombra né fontana. Mappa dei sentieri non verificata su fonte ufficiale.',
          fonti: [],
        },
      ],
      mangiare: [],
      dormire: 'Trapani, per il volo o il traghetto del giorno dopo.',
      nota: 'La durata degli aliscafi per Marettimo cambia con gli scali intermedi: guarda l\'orario della corsa su libertylines.it.',
    },
    {
      numero: 5,
      titolo: 'Trasferimento a Pantelleria e primo giro',
      paginaSito: '/destinazioni/italia/isole-siciliane',
      racconto:
        'Per Pantelleria c\'è il volo o il traghetto; all\'arrivo abbiamo ritirato il mezzo prenotato. L\'isola è nera, un vulcano con muri di pietra lavica a secco e nessuna spiaggia di sabbia. Il primo giro ci è servito a orientarci: la costa di Scauri, la Balata dei Turchi a picco sul versante sud e l\'Arco dell\'Elefante, la roccia a forma di proboscide che è il simbolo dell\'isola.',
      tratte: [
        { da: 'Trapani', a: 'Pantelleria', km: 131, minuti: 40, mezzo: 'volo', nelMioViaggio: 'in alternativa traghetto Siremar, 5:30-7:30' },
        { da: 'Aeroporto di Pantelleria', a: 'Scauri', km: 7, minuti: 13 },
        { da: 'Scauri', a: 'Balata dei Turchi', km: 13, minuti: 22 },
        { da: 'Balata dei Turchi', a: 'Arco dell\'Elefante', km: 10, minuti: 20 },
      ],
      luoghi: [
        {
          nome: 'Aeroporto di Pantelleria (PNL)',
          indirizzo: 'Via Zinedi, Pantelleria',
          gps: [36.814, 11.96242],
          nota: 'Voli da Palermo, Trapani e Catania in continuità territoriale, più stagionali dal continente. Il traghetto da Trapani con il mare mosso viene cancellato spesso.',
          fonti: ['osm'],
        },
        {
          nome: 'Balata dei Turchi',
          gps: [36.73438, 12.02349],
          nota: 'Strada sterrata nell\'ultimo tratto: con lo scooter va fatta piano.',
          fonti: ['osm'],
        },
        {
          nome: 'Arco dell\'Elefante',
          indirizzo: 'Contrada Khamma, costa est',
          gps: [36.79299, 12.05368],
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'In un dammuso, la casa pantesca con muri di pietra lavica e tetto a cupola che raccoglie l\'acqua. Le zone più comode sono il versante sud-orientale e Scauri.',
      nota: 'Auto e scooter vanno prenotati prima di partire: in stagione i mezzi disponibili sono pochi.',
    },
    {
      numero: 6,
      titolo: 'Specchio di Venere, Benikulà e Montagna Grande',
      paginaSito: '/destinazioni/italia/isole-siciliane',
      racconto:
        'La giornata termale. Il lago Specchio di Venere sta in una caldera, con acqua calda nelle zone di risorgiva e fanghi bianchi sulle rive. Poi la sauna naturale di Benikulà, una grotta sul fianco della montagna dove il vapore esce dalla roccia: è libera e ci si sta pochi minuti. Nel pomeriggio siamo saliti sulla Montagna Grande, 836 metri, con le favare lungo la strada e la Tunisia all\'orizzonte nelle giornate limpide.',
      tratte: [
        { da: 'Aeroporto di Pantelleria', a: 'Lago Specchio di Venere', km: 6, minuti: 12 },
        { da: 'Specchio di Venere', a: 'Benikulà (Sibà)', km: 10, minuti: 19 },
        { da: 'Benikulà', a: 'Costa est (Arco dell\'Elefante), passando sotto la Montagna Grande', km: 18, minuti: 28 },
      ],
      luoghi: [
        {
          nome: 'Lago Specchio di Venere',
          indirizzo: 'Contrada Bugeber, Pantelleria',
          gps: [36.81597, 11.98673],
          nota: 'Il lago è dentro il Parco nazionale Isola di Pantelleria: rispetta i divieti esposti sulle rive.',
          fonti: ['osm'],
        },
        {
          nome: 'Sauna naturale di Benikulà (Bagno asciutto)',
          indirizzo: 'Via Grotta di Benikulà, Sibà',
          biglietto: 'Gratuita',
          gps: [36.78143, 11.97953],
          nota: 'Sentiero breve dal parcheggio. Chi ha problemi di pressione o di cuore deve stare attento al calore.',
          fonti: ['osm'],
        },
        {
          nome: 'Montagna Grande',
          gps: [36.78066, 12.00498],
          nota: 'Il punto più alto dell\'isola, 836 m, con il bosco di pini.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Il dammuso.',
    },
    {
      numero: 7,
      titolo: 'I vigneti, i capperi e il Passito',
      paginaSito: '/esperienze/italia/passito-pantelleria',
      racconto:
        'La giornata che spiega l\'isola. La vite ad alberello pantesco è tenuta bassissima dentro una conca scavata nel terreno, così il vento le passa sopra: dal 2014 è patrimonio immateriale UNESCO. Accanto i giardini panteschi, muri circolari di pietra lavica intorno a un solo albero di agrumi. L\'uva è lo Zibibbo, appassita al sole per il Passito: abbiamo visitato una cantina su appuntamento. Il tardo pomeriggio a Gadir, con le vasche termali a bordo mare.',
      tratte: [{ da: 'Specchio di Venere', a: 'Gadir', km: 6, minuti: 10 }],
      luoghi: [
        {
          nome: 'Cantine del Passito',
          nota: 'Si visitano solo su appuntamento: scrivi o telefona una o due settimane prima. Il nome della cantina non è annotato nei miei appunti.',
          fonti: ['unesco-alberello'],
        },
        {
          nome: 'Gadir, vasche termali',
          indirizzo: 'Contrada Gadir, costa nord-est',
          gps: [36.8123, 12.02536],
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Il dammuso.',
      nota: 'Cala Levante e Cala Tramontana si usano a turno: qui la cala si sceglie in base al vento del giorno.',
    },
    {
      numero: 8,
      titolo: 'Pantelleria dal mare',
      paginaSito: '/destinazioni/italia/isole-siciliane',
      racconto:
        'Il giro dell\'isola in barca è l\'unico modo di vedere la costa che non si raggiunge da terra: le grotte, le colate che scendono in acqua, le acque termali sottomarine dove il mare diventa caldo all\'improvviso e le falesie del sud. L\'ultima sera l\'abbiamo chiusa con i ravioli amari e il Passito.',
      tratte: [],
      senzaStrada: 'Giornata in barca dal porto di Pantelleria; in alternativa i sentieri dell\'interno o Cala Cinque Denti sul versante nord-est.',
      luoghi: [
        {
          nome: 'Porto di Pantelleria',
          gps: [36.83146, 11.94504],
          nota: 'Le barche per il giro dell\'isola partono da qui. Il nome dell\'operatore non è annotato nei miei appunti: con vento forte le uscite saltano.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Il dammuso, ultima notte.',
    },
    {
      numero: 9,
      titolo: 'Giornata di transito verso Lampedusa',
      paginaSito: '/viaggi/isole-siciliane',
      racconto:
        'È la giornata onesta dell\'itinerario: Pantelleria e Lampedusa non sono collegate, quindi si torna in Sicilia e si riparte. Volo per Palermo o Catania e coincidenza per Lampedusa, oppure una notte di passaggio in Sicilia. Una cancellazione per vento a Pantelleria fa saltare la coincidenza: non comprare biglietti non modificabili a poche ore l\'uno dall\'altro.',
      tratte: [
        { da: 'Pantelleria', a: 'Palermo', km: 181, minuti: 55, mezzo: 'volo' },
        { da: 'Palermo', a: 'Lampedusa', km: 300, minuti: 60, mezzo: 'volo' },
      ],
      luoghi: [
        {
          nome: 'Aeroporto di Palermo Falcone e Borsellino (PMO)',
          gps: [38.17652, 13.09164],
          nota: 'Con una sosta lunga, Monreale è a una ventina di minuti in direzione città.',
          fonti: ['osm'],
        },
        {
          nome: 'Aeroporto di Lampedusa (LMP)',
          indirizzo: 'Piazza Castello, Lampedusa',
          gps: [35.49854, 12.62235],
          nota: 'Accanto al paese. In alternativa c\'è la nave Siremar da Porto Empedocle, tra 8 e 10 ore secondo la corsa.',
          fonti: ['osm', 'ct-isole'],
        },
      ],
      mangiare: [],
      dormire: 'Lampedusa, in paese o lungo la strada per le cale: fuori paese servono scooter o auto.',
      nota: 'Durate dei voli: tempi di volo indicativi, senza le attese. Gli orari reali cambiano per stagione.',
    },
    {
      numero: 10,
      titolo: 'Lampedusa e la Spiaggia dei Conigli',
      paginaSito: '/destinazioni/italia/isole-siciliane',
      racconto:
        'Lampedusa sta sulla piattaforma continentale africana: calcarea e bianca come la Tunisia che ha di fronte. Siamo andati alla Spiaggia dei Conigli, la baia con l\'isolotto collegato da un fondale bassissimo, dentro una riserva con accesso a turni. Nel tardo pomeriggio la Porta d\'Europa, il monumento del 2008 per chi è morto attraversando questo mare: cinque minuti guardando a sud.',
      tratte: [
        { da: 'Lampedusa, aeroporto e paese', a: 'Spiaggia dei Conigli', km: 9, minuti: 26 },
        { da: 'Spiaggia dei Conigli', a: 'Porta d\'Europa', km: 9, minuti: 24 },
      ],
      luoghi: [
        {
          nome: 'Spiaggia dei Conigli (Riserva naturale orientata Isola di Lampedusa)',
          orari: 'Stagione 2025: dal 9 giugno al 12 ottobre, due turni 08:30-13:30 e 14:30-19:30. A fine turno si esce dalla riserva',
          biglietto: 'Prenotazione gratuita e obbligatoria su prenotazionespiaggiaconigli.it: 550 persone a turno, di cui 415 online; altri 100 posti per turno in lista all\'ingresso',
          telefono: 'Ufficio della riserva 0922 971611 · lampedusa@legambienteriserve.it',
          web: 'legambienteriserve.it',
          gps: [35.51308, 12.55754],
          nota: 'Massimo 2 persone e un turno a prenotazione, una prenotazione a settimana. Arriva entro le 09:30 (o le 15:30) o perdi il posto. Sentiero di 800 m su roccia: niente infradito. Vietati sedie, sdraio, teli ombra e gonfiabili, cani, fumo, droni. Non ci sono bagnini, bagni né acqua. Sono le regole 2025: quelle 2026 escono a primavera.',
          fonti: ['conigli', 'osm'],
        },
        {
          nome: 'Porta d\'Europa',
          indirizzo: 'Via Cala Francese, Lampedusa',
          gps: [35.49343, 12.60555],
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Lampedusa.',
      nota: 'La Caretta caretta nidifica qui: le zone recintate e i cartelli vanno rispettati anche fuori dagli orari della riserva.',
    },
    {
      numero: 11,
      titolo: 'In barca intorno all\'isola, oppure Linosa',
      paginaSito: '/destinazioni/italia/isole-siciliane',
      racconto:
        'Due possibilità. Il giro di Lampedusa in barca, con le grotte della costa sud e la Tabaccara, dove l\'acqua è così trasparente che le barche sembrano sospese: lì non si sbarca e l\'ancoraggio è regolato. Oppure Linosa, un\'ora verso nord: un\'isola vulcanica e nera, con le case dipinte a colori pieni, tre coni da salire a piedi e la Pozzolana di Ponente, anche lei sito di nidificazione.',
      tratte: [{ da: 'Lampedusa', a: 'Linosa', km: 46, minuti: 60, mezzo: 'aliscafo', nelMioViaggio: 'circa un\'ora' }],
      luoghi: [
        {
          nome: 'Tabaccara',
          gps: [35.5093, 12.57302],
          nota: 'Si vede solo dalla barca. Le barche per il giro partono dal porto: operatore non annotato.',
          fonti: ['osm'],
        },
        {
          nome: 'Linosa',
          gps: [35.86516, 12.86753],
          nota: 'Aliscafi Liberty Lines da Lampedusa: orari su libertylines.it, con il mare mosso le corse saltano.',
          fonti: ['ll-biglietterie', 'osm'],
        },
      ],
      mangiare: [],
      dormire: 'Lampedusa.',
    },
    {
      numero: 12,
      titolo: 'Partenza',
      paginaSito: '/viaggi/isole-siciliane',
      racconto: 'L\'ultima mattina, poi il volo. Con margine, perché qui l\'ultima parola ce l\'ha il vento.',
      tratte: [{ da: 'Lampedusa, paese', a: 'Aeroporto di Lampedusa', km: 1, minuti: 3 }],
      luoghi: [
        {
          nome: 'Aeroporto di Lampedusa (LMP)',
          gps: [35.49854, 12.62235],
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Nessun pernottamento.',
    },
  ],
  mappa: {
    percorso: ['Aeroporto di Trapani', 'Trapani', 'Favignana', 'Levanzo', 'Favignana', 'Marettimo', 'Trapani', 'Pantelleria', 'Palermo', 'Lampedusa', 'Linosa', 'Lampedusa'],
    legenda: 'Linea: l\'ordine delle tappe, quasi tutto via mare o in aereo. Le coste non sono disegnate.',
    notaTempi: 'Su strada, tempi OSRM senza traffico. Aliscafi, traghetti e voli: distanza in linea d\'aria e durata indicativa degli operatori, che cambia con gli scali e la stagione.',
    notaTempiFonti: ['osrm', 'll-carta'],
    scalaKm: 50,
  },
  primaDiPartire: [
    {
      titolo: 'Prenotazioni da fare a casa',
      righe: [
        { voce: 'Aliscafi Egadi', valore: 'Liberty Lines, online o in biglietteria. D\'estate i posti per Levanzo e Marettimo finiscono: compra qualche giorno prima.', fonti: ['ll-biglietterie'] },
        { voce: 'Grotta del Genovese', valore: 'Obbligatoria, almeno 48 ore prima, su grottadelgenovese.it o al +39 339 7418800. Pagamento da casa con PayPal, carta o bonifico.', fonti: ['genovese-prezzi'] },
        { voce: 'Mezzo a Pantelleria', valore: 'Auto o scooter da prenotare con anticipo: i mezzi sono pochi e finiscono.' },
        { voce: 'Voli Pantelleria e Lampedusa', valore: 'Tratte in continuità territoriale da Palermo, Trapani e Catania. Tra il volo da Pantelleria e quello per Lampedusa lascia ore di margine, o una notte in Sicilia.' },
        { voce: 'Spiaggia dei Conigli', valore: 'Prenotazione gratuita su prenotazionespiaggiaconigli.it, che si apre a scaglioni da fine maggio e da inizio luglio.', fonti: ['conigli'] },
        { voce: 'Cantine del Passito', valore: 'Solo su appuntamento.' },
      ],
    },
    {
      titolo: 'Mare, vento e traghetti',
      righe: [
        { voce: 'Il vento decide', valore: 'Scirocco e maestrale cancellano corse e chiudono le cale esposte. Non mettere un volo di rientro lo stesso giorno dell\'ultimo traghetto.' },
        { voce: 'Traghetti Siremar', valore: 'Trapani-Pantelleria e Porto Empedocle-Lampedusa fanno parte di Caronte & Tourist Isole Minori. Durate tra 5:30 e 7:30 per Pantelleria, tra 8 e 10 ore per Lampedusa secondo la corsa.', fonti: ['ct-isole'] },
        { voce: 'Area marina protetta Egadi', valore: 'Zone a tutela diversa per pesca, ancoraggio e navigazione: regole su ampisoleegadi.it.', fonti: ['amp-egadi'] },
        { voce: 'Scioperi', valore: 'Il calendario è su scioperi.mit.gov.it.', fonti: ['scioperi'] },
      ],
    },
    {
      titolo: 'Sulle isole',
      righe: [
        { voce: 'Favignana', valore: 'In bicicletta: è piccola e l\'ala est è piatta.' },
        { voce: 'Pantelleria', valore: 'Auto o scooter: circa 83 km², montuosa, con distanze vere.' },
        { voce: 'Lampedusa', valore: 'Scooter o auto: le spiagge sono agli estremi.' },
        { voce: 'Acqua dolce', valore: 'Su Pantelleria, Lampedusa e le Egadi minori arriva da dissalatori e cisterne: si usa con misura.' },
        { voce: 'Quando andare', valore: 'Fine maggio, giugno e settembre. Luglio e agosto pieni, cari e ventosi. D\'inverno quasi tutto chiude.' },
        { voce: 'Imposta di soggiorno', valore: 'Molti comuni la applicano: si paga all\'alloggio.' },
      ],
    },
  ],
  emergenze: {
    numeri: [
      { voce: 'Emergenze, numero unico', valore: '112. Smista a polizia, carabinieri, vigili del fuoco e ambulanza. In Sicilia il servizio risulta attivo.', fonti: ['nue', 'nue-servizio'] },
      { voce: 'Ambulanza · Polizia · Vigili del fuoco', valore: '118 · 113 · 115', fonti: ['nue-servizio'] },
      { voce: 'Emergenze in mare, Guardia costiera', valore: '1530', fonti: ['gc'] },
      { voce: 'Se non puoi parlare', valore: 'App Where Are U: manda la posizione alla centrale e permette di scrivere', fonti: ['nue'] },
      { voce: 'Riserva di Lampedusa, ufficio', valore: '0922 971611', fonti: ['conigli'] },
    ],
    ambasciata: [
      {
        nome: 'Non serve: sei in Italia',
        cosa: 'Documenti persi o rubati: denuncia a Polizia o Carabinieri (anche il 112); la carta d\'identità si rifà al Comune',
        web: 'cartaidentita.interno.gov.it',
        stato: 'ufficiale',
        fonti: ['cie'],
      },
    ],
    ospedali: [
      { nome: 'Ospedale Sant\'Antonio Abate (ASP Trapani)', cosa: 'Trapani, pronto soccorso, il riferimento per le Egadi', gps: [38.02796, 12.54987], web: 'asptrapani.it', stato: 'ufficiale', avviso: 'Telefono non verificato su fonte ufficiale.', fonti: ['asp-tp', 'osm'] },
      { nome: 'Ospedale Bernardo Nagar (ASP Trapani)', cosa: 'Pantelleria, pronto soccorso', indirizzo: 'Piazzale Nicolò Almanza 21, Pantelleria', telefono: '0923 910111', stato: 'ufficiale', avviso: 'Numero da un elenco sanitario, non dal sito dell\'ASP: riconfermalo.', fonti: ['nagar'] },
      { nome: 'Poliambulatorio di Lampedusa (ASP Palermo)', cosa: 'Lampedusa: sull\'isola non c\'è un ospedale, i casi gravi vanno in elisoccorso', web: 'asppalermo.org', stato: 'ufficiale', avviso: 'Indirizzo e telefono non verificati: in emergenza chiama il 118.', fonti: ['asp-pa'] },
      { nome: 'Favignana, Levanzo, Marettimo', cosa: 'Sulle Egadi non ci sono ospedali: in emergenza chiama il 118, che organizza il trasferimento a Trapani', stato: 'ufficiale', avviso: 'Indirizzi e orari della guardia medica sulle isole non verificati.', fonti: ['asp-tp'] },
    ],
  },
  contatti: [
    {
      gruppo: 'Mare e aerei',
      voci: [
        { nome: 'Liberty Lines', cosa: 'Aliscafi Trapani-Egadi e Lampedusa-Linosa', indirizzo: 'Molo aliscafi, Via Ammiraglio Staiti 23, Trapani', telefono: '+39 0923 022 022 (08:00-20:00)', web: 'libertylines.it · relazioniclientela@libertylines.it', stato: 'ufficiale', fonti: ['ll-biglietterie', 'll-carta'] },
        { nome: 'Siremar (Caronte & Tourist Isole Minori)', cosa: 'Traghetti Trapani-Pantelleria e Porto Empedocle-Lampedusa', web: 'carontetourist.it', stato: 'ufficiale', avviso: 'Call center non verificato.', fonti: ['ct-isole'] },
        { nome: 'Aeroporto di Trapani-Birgi', cosa: 'Voli per Pantelleria e dal continente', web: 'airgest.it', stato: 'ufficiale', avviso: 'Sito non aperto durante la verifica.', fonti: ['osm'] },
        { nome: 'Aeroporto di Palermo', cosa: 'Coincidenze per Pantelleria e Lampedusa', web: 'aeroportodipalermo.it', stato: 'ufficiale', avviso: 'Sito non aperto durante la verifica.', fonti: ['osm'] },
      ],
    },
    {
      gruppo: 'Siti e aree protette',
      voci: [
        { nome: 'Grotta del Genovese', cosa: 'Visite guidate su prenotazione', indirizzo: 'Via Calvario 27, Levanzo', telefono: '+39 331 1330259 · +39 339 7418800', web: 'grottadelgenovese.it', stato: 'ufficiale', fonti: ['genovese-prezzi'] },
        { nome: 'Riserva naturale orientata Isola di Lampedusa (Legambiente)', cosa: 'Spiaggia dei Conigli, regole e prenotazioni', indirizzo: 'Via Vittorio Emanuele 25, Lampedusa', telefono: '0922 971611 · lampedusa@legambienteriserve.it', web: 'prenotazionespiaggiaconigli.it', stato: 'ufficiale', fonti: ['conigli'] },
        { nome: 'Area marina protetta Isole Egadi', cosa: 'Regole per bagnanti, barche e immersioni', indirizzo: 'Piazza Europa 3, Favignana', telefono: '0923 921659 · info@ampisoleegadi.it', web: 'ampisoleegadi.it', stato: 'ufficiale', avviso: 'Recapiti da documenti del 2020-2021: riconfermali.', fonti: ['amp-egadi'] },
        { nome: 'Ex Stabilimento Florio', cosa: 'Museo della tonnara', indirizzo: 'Via Roma 29, Favignana', stato: 'ufficiale', avviso: 'Orari, prezzi e telefono non verificati.', fonti: ['fai-florio'] },
      ],
    },
  ],
  budget: {
    righe: [
      { voce: 'Volo Italia-Trapani o Palermo' },
      { voce: 'Aliscafi Egadi (4-5 tratte)' },
      { voce: 'Noleggio bici a Favignana' },
      { voce: 'Grotta del Genovese con trasporto', costo: '44 €', nota: 'solo ingresso 22 €' },
      { voce: 'Giro delle grotte a Marettimo' },
      { voce: 'Volo o traghetto Trapani-Pantelleria' },
      { voce: 'Auto o scooter a Pantelleria (4 giorni)', nota: 'da prenotare presto' },
      { voce: 'Visita in cantina con degustazione' },
      { voce: 'Giro in barca di Pantelleria' },
      { voce: 'Voli Pantelleria-Palermo-Lampedusa' },
      { voce: 'Scooter a Lampedusa' },
      { voce: 'Spiaggia dei Conigli', costo: '0 €', nota: 'prenotazione gratuita' },
      { voce: 'Giro in barca o aliscafo per Linosa' },
      { voce: 'Volo di rientro da Lampedusa' },
      { voce: 'Alloggi (11 notti)', nota: 'ad agosto i prezzi salgono moltissimo' },
      { voce: 'Imposta di soggiorno' },
      { voce: 'Cene e acquisti: tonno, capperi, Passito' },
    ],
    nota: 'Le cifre sono le tariffe ufficiali per un adulto, controllate a novembre 2026. Le righe vuote le riempi tu: nei miei appunti non ho le date né i costi di trasporti e alloggi.',
  },
  valigia: [
    {
      gruppo: 'Documenti e soldi',
      voci: ['Carta d\'identità', 'Patente per lo scooter o l\'auto', 'Tessera sanitaria', 'Conferme di aliscafi, voli, Grotta del Genovese e Spiaggia dei Conigli', 'Contanti per barche e piccoli negozi', 'Questa guida stampata'],
    },
    {
      gruppo: 'Mare',
      voci: ['Scarpe di gomma: quasi nessuna cala è di sabbia', 'Maschera e boccaglio', 'Ombrellone piccolo e telo (alla Spiaggia dei Conigli niente sdraio)', 'Costume di ricambio', 'Crema solare'],
    },
    {
      gruppo: 'Terra e vento',
      voci: ['Scarpe chiuse per i sentieri di Marettimo e della Montagna Grande', 'Giacca a vento leggera', 'Cappello e borraccia', 'Power bank', 'Mappe offline scaricate'],
    },
    {
      gruppo: 'Salute',
      voci: ['Farmaci personali e ricette: sulle isole le farmacie sono poche', 'Pastiglie contro il mal di mare', 'Cerotti', 'Doposole'],
    },
  ],
  lingua: {
    nome: 'Parole e cartelli da riconoscere',
    pronuncia: 'In Italia il frasario non serve. Qui ci sono le parole che si incontrano su questo viaggio: al porto, in mare e sulle isole.',
  },
  frasario: [
    {
      gruppo: 'Porti e mare',
      frasi: [
        { it: 'Aliscafo · traghetto', loc: 'Veloce, solo passeggeri · lento, con auto e moto' },
        { it: 'Corsa soppressa per avverse condizioni meteomarine', loc: 'La corsa salta per il mare: chiedi in biglietteria come riprotegge il biglietto' },
        { it: 'Continuità territoriale', loc: 'Voli e traghetti con tariffe regolate verso le isole minori' },
        { it: 'Scirocco · Maestrale', loc: 'Vento da sud-est · da nord-ovest: decide quale cala è riparata' },
        { it: 'Zona A · B · C', loc: 'Le fasce dell\'area marina protetta, dalla più vietata alla più libera' },
      ],
    },
    {
      gruppo: 'Sulle isole',
      frasi: [
        { it: 'Dammuso', loc: 'La casa pantesca con muri di pietra lavica e tetto a cupola' },
        { it: 'Favara', loc: 'Fumarola: il vapore che esce dal terreno a Pantelleria' },
        { it: 'Giardino pantesco', loc: 'Muro circolare di pietra intorno a un solo agrume' },
        { it: 'Tufo', loc: 'A Favignana la calcarenite delle cave' },
        { it: 'Mattanza', loc: 'La pesca del tonno con reti fisse a camere, non più praticata' },
      ],
    },
    {
      gruppo: 'Salute',
      frasi: [
        { it: 'Guardia medica', loc: 'Medico di notte e nei festivi, per le cose non gravi' },
        { it: 'Guardia medica turistica', loc: 'Ambulatorio estivo per chi non è residente' },
        { it: 'Elisoccorso', loc: 'Il trasferimento in elicottero verso gli ospedali della Sicilia' },
        { it: 'Farmacia di turno', loc: 'Aperta di notte e nei festivi: l\'elenco è sulla porta' },
      ],
    },
  ],
  numeri: [
    { it: '112', loc: 'Emergenze, numero unico' },
    { it: '118', loc: 'Ambulanza' },
    { it: '113', loc: 'Polizia' },
    { it: '115', loc: 'Vigili del fuoco' },
    { it: '1530', loc: 'Emergenze in mare, Guardia costiera' },
    { it: '+39 0923 022 022', loc: 'Liberty Lines, customer care' },
    { it: '+39 339 7418800', loc: 'Grotta del Genovese' },
    { it: '0922 971611', loc: 'Riserva di Lampedusa' },
    { it: '0923 921659', loc: 'Area marina protetta Egadi' },
    { it: '0923 910111', loc: 'Ospedale di Pantelleria' },
  ],
  pagineSito: [
    { titolo: 'Il viaggio completo', path: '/viaggi/isole-siciliane' },
    { titolo: 'Italia, la scheda paese', path: '/destinazioni/italia' },
    { titolo: 'Le isole siciliane', path: '/destinazioni/italia/isole-siciliane' },
    { titolo: 'Il Passito di Pantelleria', path: '/esperienze/italia/passito-pantelleria' },
  ],
  consultate: 'Consultate il 2 novembre 2026. Prezzi e orari cambiano: prima di pagare, guarda sempre la fonte ufficiale.',
  nonVerificato: [
    'Orari, prezzi e telefono 2026 dell\'ex Stabilimento Florio di Favignana',
    'Regole 2026 della Spiaggia dei Conigli: quelle in guida sono della stagione 2025',
    'Call center Siremar e orari dei traghetti per Pantelleria e Lampedusa',
    'Telefoni dell\'ospedale di Trapani, del poliambulatorio di Lampedusa e dei presidi delle Egadi',
    'Operatori dei giri in barca a Marettimo, Pantelleria e Lampedusa',
    'Durate esatte degli aliscafi per Levanzo, Marettimo e Linosa: dipendono dagli scali',
    'Nomi di alloggi, noleggi e cantine: non annotati nei miei appunti',
  ],
  fonti: [
    { id: 'nue', titolo: 'Ministero dell\'Interno, 112 Numero Unico Europeo', url: 'https://www.112.gov.it/' },
    { id: 'nue-servizio', titolo: '112.gov.it, il servizio', url: 'https://www.112.gov.it/il-servizio' },
    { id: 'gc', titolo: 'Guardia Costiera, 1530 emergenza in mare', url: 'https://www.guardiacostiera.gov.it/' },
    { id: 'cie', titolo: 'Ministero dell\'Interno, Carta d\'identità elettronica', url: 'https://www.cartaidentita.interno.gov.it/' },
    { id: 'll-biglietterie', titolo: 'Liberty Lines, biglietterie', url: 'https://www.libertylines.it/informazioni-di-viaggio/biglietterie/' },
    { id: 'll-carta', titolo: 'Liberty Lines, carta dei servizi (rev. 10 del 3/3/2026)', url: 'https://www.libertylines.it/wp-content/uploads/2026/03/Carta-dei-Servizi-em-02-rev-10-del-03.03.26-ITA.pdf' },
    { id: 'ct-isole', titolo: 'Caronte & Tourist Isole Minori (Siremar), carta dei servizi', url: 'https://static.carontetourist.it/sites/default/files/page/attachments/ct-isole-minori-carta-dei-servizi-rev-5.pdf' },
    { id: 'genovese-prezzi', titolo: 'Grotta del Genovese, prezzi e prenotazioni', url: 'https://grottadelgenovese.it/eng/prezzi.asp' },
    { id: 'fai-florio', titolo: 'FAI, Ex Stabilimento Florio delle tonnare di Favignana e Formica', url: 'https://fondoambiente.it/luoghi/ex-stabilimento-florio' },
    { id: 'conigli', titolo: 'Legambiente, visitare la Riserva di Lampedusa (stagione 2025)', url: 'https://www.legambienteriserve.it/island-of-lampedusa/visiting-lampedusa-reserve/' },
    { id: 'amp-egadi', titolo: 'Area marina protetta Isole Egadi', url: 'https://www.ampisoleegadi.it/' },
    { id: 'unesco-alberello', titolo: 'UNESCO, pratica agricola della vite ad alberello di Pantelleria (2014)', url: 'https://ich.unesco.org/en/RL/traditional-agricultural-practice-of-cultivating-the-vite-ad-alberello-head-trained-bush-vines-of-the-community-of-pantelleria-00720' },
    { id: 'asp-tp', titolo: 'ASP Trapani', url: 'https://www.asptrapani.it/' },
    { id: 'nagar', titolo: 'QSalute, Ospedale di Pantelleria (elenco)', url: 'https://www.qsalute.it/ospedale-di-pantelleria/' },
    { id: 'asp-pa', titolo: 'ASP Palermo, poliambulatori', url: 'https://www.asppalermo.org/' },
    { id: 'scioperi', titolo: 'Ministero delle Infrastrutture, calendario degli scioperi', url: 'https://scioperi.mit.gov.it/' },
    { id: 'osm', titolo: 'OpenStreetMap / Nominatim (coordinate)', url: 'https://nominatim.openstreetmap.org' },
    { id: 'osrm', titolo: 'OSRM su dati OpenStreetMap (distanze e tempi, traffico libero)', url: 'https://router.project-osrm.org' },
  ],
}
