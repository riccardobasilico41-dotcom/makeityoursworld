import type { Guida } from './types'

/**
 * Guida PDF «Messico, Día de los Muertos». Il racconto viene da
 * src/content/viaggi/66-messico-dia-de-los-muertos.md. Ingresso, ambasciata,
 * consolati e sicurezza da Viaggiare Sicuri (scheda Messico, agg. 27/5/2026);
 * tariffe INAH 2026, date 2026 della parata, ospedali verificati sul web il
 * 2/11/2026 e rimandati alle fonti in fondo al file.
 * Distanze e tempi: OSRM su dati OpenStreetMap. Coordinate: Nominatim.
 */

export const guidaMessicoDiaDeLosMuertos: Guida = {
  slug: 'messico-dia-de-los-muertos',
  tripSlug: 'messico-dia-de-los-muertos',
  paese: 'Messico',
  titolo: 'Messico, Día de los Muertos',
  sottotitolo: 'Sedici giorni da Città del Messico a Oaxaca per le tre notti della festa, poi l\'oceano a Puerto Escondido. Calendario, cimiteri, bus e numeri utili.',
  autore: 'Rick',
  verificatoAl: 'novembre 2026',
  intro: [
    'Questo giro l\'abbiamo costruito, con amici, perché le tre notti della festa cadessero tutte a Oaxaca: prima qualche giorno per capire il paese a Città del Messico e Puebla, dopo l\'oceano per riposare. Ci si muove in bus ADO, colectivos e tour serali, con un volo interno per il rientro.',
    'Qui ci sono il calendario notte per notte, le tratte con chilometri e tempi, le tariffe INAH 2026, il galateo dei cimiteri, consolati e ospedali, e un frasario di spagnolo.',
    'Ho ricontrollato i dati a novembre 2026. Le date della processione delle Catrinas, della parata e della muerteada di Etla cambiano ogni anno: per il 2027 guarda i canali ufficiali a settembre.',
  ],
  cosaInPiu: [
    'Il calendario delle notti 31 ottobre, 1° e 2 novembre, con i cimiteri e le alternative',
    'Ogni tratta con chilometri e tempi, ogni luogo con biglietto 2026, coordinate e QR',
    'Consolati onorari di Puebla e Oaxaca, ambasciata, ospedali di Città del Messico, Puebla e Oaxaca',
    'Perché il Michoacán (Janitzio) resta fuori: l\'avviso della Farnesina',
    'Budget, valigia per notti fredde e giorni caldi, frasario',
  ],
  tappe: [
    { nome: 'Città del Messico', gps: [19.43265, -99.1332], giorno: 'G1-4 · G16', etichetta: 'sopra' },
    { nome: 'Teotihuacán', gps: [19.69027, -98.87673], giorno: 'G3', etichetta: 'destra' },
    { nome: 'Puebla', gps: [19.04286, -98.19838], giorno: 'G5', etichetta: 'destra' },
    { nome: 'Cholula', gps: [19.05796, -98.30223], giorno: 'G6', etichetta: 'sinistra' },
    { nome: 'Oaxaca', gps: [17.06562, -96.723], giorno: 'G7-11', etichetta: 'sinistra' },
    { nome: 'Mitla · Hierve el Agua', gps: [16.92083, -96.36167], giorno: 'G11', etichetta: 'destra' },
    { nome: 'Puerto Escondido', gps: [15.86933, -97.07264], giorno: 'G12-15', etichetta: 'sinistra' },
    { nome: 'Mazunte', gps: [15.66759, -96.55366], giorno: 'G15', etichetta: 'destra' },
  ],
  giorni: [
    {
      numero: 1,
      titolo: 'Arrivo a Città del Messico',
      paginaSito: '/destinazioni/messico/citta-del-messico',
      racconto:
        'Dall\'aeroporto con il taxi autorizzato prepagato, comprato ai banchi dentro il terminal, fino a Roma-Condesa, la nostra base. Pomeriggio leggero, perché a 2.240 metri dopo il volo la stanchezza si sente. La sera una passeggiata nel Parque México e i primi tacos al pastor; nelle vetrine c\'erano già calaveras di zucchero e pan de muerto.',
      tratte: [{ da: 'Aeroporto AICM', a: 'Condesa', km: 13, minuti: 16, mezzo: 'taxi autorizzato', nelMioViaggio: 'con il traffico anche il doppio' }],
      luoghi: [
        { nome: 'Aeroporto internazionale Benito Juárez (AICM)', gps: [19.43423, -99.07331], nota: 'Taxi solo dai banchi prepagati nel terminal o con un\'app. Il tagliando dell\'immigrazione indica i giorni concessi.', fonti: ['vs', 'osm'] },
        { nome: 'Parque México', indirizzo: 'Condesa', gps: [19.41186, -99.16981], fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Roma o Condesa, quartieri alberati a 20-30 minuti dal centro storico.',
    },
    {
      numero: 2,
      titolo: 'Centro Histórico e processione delle Catrinas',
      paginaSito: '/destinazioni/messico/citta-del-messico',
      racconto:
        'La mattina lo Zócalo con la grande ofrenda pubblica, la Cattedrale, il Templo Mayor, il Palacio Nacional con i murales di Rivera e poi Madero fino a Bellas Artes. Nel pomeriggio la Mega Procesión de Catrinas lungo Reforma, gratuita e aperta a chiunque si trucchi: intorno all\'Ángel ci sono truccatori di strada.',
      tratte: [],
      senzaStrada: 'In città a piedi, in metro o con Uber e DiDi. Niente taxi presi per strada.',
      luoghi: [
        { nome: 'Zócalo (Plaza de la Constitución)', gps: [19.43265, -99.1332], fonti: ['osm'] },
        { nome: 'Templo Mayor', orari: 'Chiuso il lunedì', biglietto: 'Biglietto INAH, prezzo 2026 da controllare', gps: [19.43506, -99.13143], fonti: ['osm'] },
        { nome: 'Palacio Nacional', nota: 'Ingresso gratuito con il passaporto, orari variabili e code.', fonti: [] },
        { nome: 'Mega Procesión de Catrinas', nota: 'Nel 2026 le fonti la danno il 24 o il 25 ottobre, la sera, dall\'Ángel de la Independencia allo Zócalo. Arriva un\'ora prima, zaino davanti.', fonti: ['unotv'] },
      ],
      mangiare: [],
      dormire: 'Roma o Condesa.',
    },
    {
      numero: 3,
      titolo: 'Teotihuacán',
      paginaSito: '/destinazioni/messico/citta-del-messico',
      racconto:
        'Teotihuacán all\'apertura, alle 9, quando la luce è morbida e i gruppi non sono ancora arrivati: Piramide del Sole, Piramide della Luna e Calzada de los Muertos. Nelle ore centrali non c\'è ombra. Rientro nel primo pomeriggio e sera libera a Condesa.',
      tratte: [{ da: 'Condesa', a: 'Teotihuacán', km: 54, minuti: 50, mezzo: 'bus dalla Terminal del Norte o tour', nelMioViaggio: 'circa un\'ora' }],
      luoghi: [
        { nome: 'Zona archeologica di Teotihuacán', orari: 'Apre alle 9', biglietto: '210 MXN per gli stranieri (tariffa INAH 2026)', gps: [19.69027, -98.87673], nota: 'Volo in mongolfiera all\'alba indicativamente 2.500-4.000 MXN a persona.', fonti: ['chilango', 'osm'] },
        { nome: 'Terminal de Autobuses del Norte', nota: 'Bus diretti per le piramidi, circa un\'ora, poco più di 100 MXN nel mio programma.', fonti: [] },
      ],
      mangiare: [],
      dormire: 'Roma o Condesa.',
    },
    {
      numero: 4,
      titolo: 'Antropologia, Chapultepec e Coyoacán',
      paginaSito: '/destinazioni/messico/citta-del-messico',
      racconto:
        'Tre ore al Museo Nacional de Antropología, la chiave per tutto il resto del viaggio, dalle divinità mexica della morte agli zapotechi di Oaxaca. Nel pomeriggio Coyoacán: il centro coloniale, il mercato con le tostadas e la Casa Azul di Frida Kahlo, prenotata online giorni prima.',
      tratte: [{ da: 'Museo di Antropologia', a: 'Museo Frida Kahlo, Coyoacán', km: 12, minuti: 20 }],
      luoghi: [
        { nome: 'Museo Nacional de Antropología', indirizzo: 'Bosque de Chapultepec', orari: 'Chiuso il lunedì', biglietto: '210 MXN per gli stranieri (tariffa INAH 2026)', gps: [19.42615, -99.18665], fonti: ['chilango', 'osm'] },
        { nome: 'Museo Frida Kahlo (Casa Azul)', indirizzo: 'Londres 247, Coyoacán', web: 'museofridakahlo.org.mx', gps: [19.35514, -99.16236], nota: 'Solo con biglietto online a orario; a fine ottobre si esaurisce. Prezzo sul sito.', fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Roma o Condesa.',
      nota: 'Plaza Garibaldi e i mariachi la sera: andata e ritorno in taxi o app, non a piedi.',
    },
    {
      numero: 5,
      titolo: 'Puebla',
      paginaSito: '/destinazioni/messico/puebla-cholula',
      racconto:
        'Bus ADO dalla TAPO, circa due ore. Il centro patrimonio UNESCO con le facciate di talavera, la Cattedrale, la Capilla del Rosario in Santo Domingo e la Biblioteca Palafoxiana. A tavola il mole poblano, le cemitas e i dolci della Calle de los Dulces; nello Zócalo e nel Barrio del Artista c\'erano altari in concorso.',
      tratte: [{ da: 'Città del Messico', a: 'Puebla', km: 132, minuti: 122, mezzo: 'bus ADO', nelMioViaggio: 'circa 2 ore, 200-300 MXN' }],
      luoghi: [
        { nome: 'Cattedrale di Puebla', gps: [19.04286, -98.19838], fonti: ['osm'] },
        { nome: 'Capilla del Rosario, Templo de Santo Domingo', fonti: [] },
        { nome: 'Biblioteca Palafoxiana', nota: 'Orari e biglietto da controllare.', fonti: [] },
      ],
      mangiare: [],
      dormire: 'Centro storico di Puebla, intorno allo Zócalo.',
    },
    {
      numero: 6,
      titolo: 'Cholula e il Popocatépetl',
      paginaSito: '/destinazioni/messico/puebla-cholula',
      racconto:
        'Cholula, a venti minuti: la Gran Piramide, la più grande del mondo per volume, con i tunnel degli archeologi, e in cima il santuario giallo della Virgen de los Remedios. Nelle mattine limpide dietro la chiesa si vedono il Popocatépetl che fuma e l\'Iztaccíhuatl. Nel pomeriggio le chiese barocche di Tonantzintla e Acatepec.',
      tratte: [{ da: 'Puebla', a: 'Cholula', km: 12, minuti: 17 }],
      luoghi: [
        { nome: 'Gran Pirámide de Cholula e Santuario de los Remedios', gps: [19.05796, -98.30223], nota: 'Tunnel e zona archeologica con biglietto INAH (prezzo da controllare); salita al santuario libera.', fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Cholula, ai piedi della piramide.',
      nota: 'Il Popocatépetl ha un semaforo di allerta del CENAPRED (a maggio 2026 giallo, fase II); con molta cenere possono chiudere per ore gli aeroporti di Puebla e Città del Messico.',
    },
    {
      numero: 7,
      titolo: 'Verso Oaxaca: mercati e prime comparsas',
      paginaSito: '/destinazioni/messico/oaxaca',
      racconto:
        'Quattro ore e mezza di bus da Puebla attraverso la sierra, prenotato giorni prima. A Oaxaca archi di fiori sulle porte e altari nei negozi. Il pomeriggio al Mercado 20 de Noviembre e al Benito Juárez per pan de muerto, cioccolato e candele; la sera nei barrios di Jalatlaco e Xochimilco giravano le prime comparsas con la banda.',
      tratte: [{ da: 'Cholula', a: 'Oaxaca', km: 349, minuti: 246, mezzo: 'bus ADO dalla CAPU di Puebla', nelMioViaggio: 'circa 4 ore e mezza, 450-800 MXN secondo la classe' }],
      luoghi: [
        { nome: 'Mercado 20 de Noviembre e Mercado Benito Juárez', indirizzo: 'Centro di Oaxaca, a sud dello Zócalo', nota: 'Il pasillo de humo del 20 de Noviembre: scegli la carne cruda e te la grigliano.', fonti: [] },
      ],
      mangiare: [],
      dormire: 'Centro di Oaxaca, fra Santo Domingo e Jalatlaco: prenotato 4-6 mesi prima. Nelle notti della festa i prezzi salgono di due o tre volte.',
      nota: 'Le comparsas di barrio non hanno orari pubblicati: si trovano chiedendo in hotel o seguendo la musica.',
    },
    {
      numero: 8,
      titolo: '31 ottobre: Monte Albán e Xoxocotlán',
      paginaSito: '/destinazioni/messico/valles-centrales-oaxaca',
      racconto:
        'La mattina a Monte Albán, la capitale zapoteca su una montagna spianata, presto per il caldo; poi riposo, perché la notte è lunga. La sera il cimitero di Santa Cruz Xoxocotlán: il Panteón Viejo intorno alla chiesa senza tetto, il più intimo, e il Panteón Nuevo con la fiera fuori. Le famiglie arrivano dopo il tramonto e restano fino a notte fonda tra candele e bande.',
      tratte: [
        { da: 'Oaxaca', a: 'Monte Albán', km: 9, minuti: 15 },
        { da: 'Oaxaca', a: 'Santa Cruz Xoxocotlán', km: 8, minuti: 10, nelMioViaggio: 'con il traffico della festa molto di più' },
      ],
      luoghi: [
        { nome: 'Zona archeologica di Monte Albán', biglietto: '210 MXN per gli stranieri (tariffa INAH 2026)', gps: [17.04567, -96.76832], fonti: ['chilango', 'osm'] },
        { nome: 'Cimiteri di Santa Cruz Xoxocotlán', gps: [17.00971, -96.73764], nota: 'Ingresso libero: nessun tour vende un «accesso». I tour serali da Oaxaca costano indicativamente 600-1.200 MXN con il trasporto.', fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Oaxaca.',
      nota: 'In taxi concorda anche il ritorno: dopo mezzanotte trovarne uno libero è difficile. Giacca, scarpe chiuse e torcia.',
    },
    {
      numero: 9,
      titolo: '1° novembre: Teotitlán e la muerteada di Etla',
      paginaSito: '/destinazioni/messico/valles-centrales-oaxaca',
      racconto:
        'Mattina lenta, poi la valle di Tlacolula: l\'Árbol del Tule, il cipresso con uno dei tronchi più larghi del mondo, e Teotitlán del Valle, il paese zapoteco dei tappeti tinti con colori naturali. La notte la muerteada di San Agustín Etla: centinaia di persone in maschera, bande, petardi e mezcal da una casa all\'altra fino al mattino. Rumorosa e molto alcolica: con un tour che riporta in città è più semplice.',
      tratte: [
        { da: 'Oaxaca', a: 'Árbol del Tule', km: 11, minuti: 12 },
        { da: 'Árbol del Tule', a: 'Teotitlán del Valle', km: 20, minuti: 23 },
        { da: 'Teotitlán del Valle', a: 'San Agustín Etla', km: 55, minuti: 79 },
      ],
      luoghi: [
        { nome: 'Árbol del Tule', indirizzo: 'Santa María del Tule', gps: [17.04647, -96.63616], fonti: ['osm'] },
        { nome: 'Teotitlán del Valle', gps: [17.04994, -96.5028], nota: 'Negli altari di casa si entra solo se invitati.', fonti: ['osm'] },
        { nome: 'San Agustín Etla, muerteada', gps: [17.204, -96.71808], nota: 'Negli anni scorsi il corteo partiva verso le 22. Per il 2026 non ho trovato un programma pubblicato: chiedi in hotel o all\'operatore.', fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Oaxaca.',
    },
    {
      numero: 10,
      titolo: '2 novembre: il Panteón General',
      paginaSito: '/destinazioni/messico/oaxaca',
      racconto:
        'Dopo Etla la mattina si dorme. Il pomeriggio in centro tra ofrendas e tapetes di sabbia colorata, il Templo de Santo Domingo con il museo e il giardino etnobotanico, che si visita solo con guida a orari fissi. La sera il Panteón General con le tombe illuminate e le ultime comparsas in città. Dal giorno dopo gli altari si smontano.',
      tratte: [],
      senzaStrada: 'Tutto a piedi in centro; il Panteón General è a Jalatlaco, a un chilometro da Santo Domingo.',
      luoghi: [
        { nome: 'Templo de Santo Domingo e Jardín Etnobotánico', gps: [17.06562, -96.723], nota: 'Giardino solo con visita guidata a orari fissi.', fonti: ['osm'] },
        { nome: 'Panteón General (San Miguel)', gps: [17.06443, -96.71262], fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Oaxaca.',
    },
    {
      numero: 11,
      titolo: 'La strada del mezcal: Matatlán, Mitla, Hierve el Agua',
      paginaSito: '/destinazioni/messico/valles-centrales-oaxaca',
      racconto:
        'Giornata intera sulla carretera 190 con un tour. Santiago Matatlán e i suoi palenques, dove l\'agave si cuoce in forni sotto terra e si schiaccia con la ruota di pietra; degustazioni gratis o quasi, senza obbligo di comprare. Poi Mitla con i mosaici di pietra senza malta e Hierve el Agua, le cascate pietrificate con le piscine sul vuoto.',
      tratte: [
        { da: 'Oaxaca', a: 'Santiago Matatlán', km: 47, minuti: 38 },
        { da: 'Santiago Matatlán', a: 'Mitla', km: 11, minuti: 11 },
        { da: 'Mitla', a: 'Hierve el Agua', km: 23, minuti: 25 },
        { da: 'Hierve el Agua', a: 'Oaxaca', km: 67, minuti: 57 },
      ],
      luoghi: [
        { nome: 'Santiago Matatlán', gps: [16.86204, -96.37613], fonti: ['osm'] },
        { nome: 'Zona archeologica di Mitla', biglietto: 'Biglietto INAH, prezzo 2026 da controllare', gps: [16.92083, -96.36167], fonti: ['osm'] },
        { nome: 'Hierve el Agua', biglietto: 'Indicativamente 50-100 MXN tra quota comunitaria e biglietto, solo contanti', gps: [16.86783, -96.27638], nota: 'Conteso fra due comunità, ha avuto chiusure improvvise (la più lunga dal 2020 a ottobre 2021). Controlla la settimana prima.', fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Oaxaca.',
      costiNoti: ['Tour di gruppo da Oaxaca: 600-900 MXN a persona, ingressi esclusi (indicativo)'],
    },
    {
      numero: 12,
      titolo: 'Da Oaxaca a Puerto Escondido',
      paginaSito: '/destinazioni/messico/puerto-escondido',
      racconto:
        'Con l\'autostrada Barranca Larga-Ventanilla, aperta del tutto nel 2024, la discesa verso la costa in van o bus prende circa tre ore, tre e mezza. Da 1.550 metri al livello del mare: quindici gradi in più. Il primo tramonto l\'abbiamo guardato dalla baia di Carrizalillo, scendendo circa 160 gradini.',
      tratte: [{ da: 'Oaxaca', a: 'Puerto Escondido', km: 192, minuti: 167, mezzo: 'van o bus', nelMioViaggio: '3-3,5 ore, 300-500 MXN' }],
      luoghi: [
        { nome: 'Playa Carrizalillo', gps: [15.85955, -97.07851], nota: 'Circa 160 gradini; onde morbide.', fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Puerto Escondido: La Punta per ostelli, Zicatela per la vita serale, Carrizalillo e Rinconada più tranquille.',
      nota: 'L\'autostrada ha due caselli a pagamento: il costo per i bus non è pubblicato.',
    },
    {
      numero: 13,
      titolo: 'Puerto Escondido: surf e tartarughe',
      paginaSito: '/destinazioni/messico/puerto-escondido',
      racconto:
        'Mattina in acqua: a Zicatela l\'onda grande è per esperti, le lezioni si fanno a Carrizalillo o alla Punta. Manzanillo e Puerto Angelito sono calette dove si nuota e si fa snorkeling. Al tramonto, a Playa Bacocho, alcuni vivai liberano le tartarughine in mare per una piccola donazione: non si toccano e niente flash.',
      tratte: [],
      senzaStrada: 'In taxi fra le spiagge, pochi minuti.',
      luoghi: [
        { nome: 'Playa Zicatela', gps: [15.87047, -97.08036], nota: 'Correnti di risacca forti: non è una spiaggia da nuoto, ogni anno ci sono annegamenti.', fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Puerto Escondido.',
      costiNoti: ['Lezione di surf di gruppo: 600-900 MXN (indicativo)'],
    },
    {
      numero: 14,
      titolo: 'Laguna di Manialtepec',
      paginaSito: '/destinazioni/messico/puerto-escondido',
      racconto:
        'Alla laguna di Manialtepec, venti minuti a ovest, ci siamo andati due volte: all\'alba in barca tra le mangrovie per gli uccelli e di notte per la bioluminescenza, il plancton che si accende quando l\'acqua si muove. Meglio le notti senza luna. In mezzo spiaggia, amaca e pesce a la talla.',
      tratte: [{ da: 'Puerto Escondido', a: 'Laguna di Manialtepec', km: 18, minuti: 16, nelMioViaggio: 'circa 20 minuti' }],
      luoghi: [
        { nome: 'Laguna di Manialtepec', gps: [15.94105, -97.19003], nota: 'Tour indicativamente 500-900 MXN. Scegli chi usa kayak o remi nell\'ultimo tratto e niente crema solare in acqua.', fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Puerto Escondido.',
    },
    {
      numero: 15,
      titolo: 'Mazunte, Zipolite e Punta Cometa',
      paginaSito: '/destinazioni/messico/puerto-escondido',
      racconto:
        'Gita verso est in colectivo lungo la costiera 200: Mazunte con il Centro Mexicano de la Tortuga, San Agustinillo e Zipolite, la spiaggia libera e nudista. Il tramonto da Punta Cometa, il promontorio sopra Mazunte, con un sentiero breve.',
      tratte: [{ da: 'Puerto Escondido', a: 'Mazunte', km: 66, minuti: 65, mezzo: 'colectivo o taxi condiviso' }],
      luoghi: [
        { nome: 'Mazunte e Punta Cometa', gps: [15.66759, -96.55366], fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Puerto Escondido (oppure due notti a Mazunte e rientro dall\'aeroporto di Huatulco).',
    },
    {
      numero: 16,
      titolo: 'Rientro via Città del Messico',
      racconto:
        'Volo diretto da Puerto Escondido a Città del Messico, circa un\'ora, e coincidenza internazionale. Tra i due voli almeno quattro ore: l\'aeroporto di Puerto Escondido è piccolo, i voli interni fanno ritardo e all\'AICM si ripassano i controlli.',
      tratte: [],
      senzaStrada: 'Volo diretto Puerto Escondido-Città del Messico di circa un\'ora con Aeroméxico, Volaris o Viva.',
      luoghi: [
        { nome: 'Aeropuerto Internacional de Puerto Escondido', gps: [15.87631, -97.08862], fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'In volo.',
      nota: 'Viaggiare Sicuri consiglia tre ore di anticipo per i voli internazionali.',
    },
  ],
  mappa: {
    percorso: ['Città del Messico', 'Puebla', 'Cholula', 'Oaxaca', 'Puerto Escondido'],
    ritorno: ['Puerto Escondido', 'Città del Messico'],
    legenda: 'Linea piena: Città del Messico, Puebla e Cholula, Oaxaca e la costa. Tratteggio: volo di rientro. Teotihuacán, Mitla e Mazunte sono gite in giornata.',
    notaTempi: 'Tempi stimati senza traffico (OSRM su OpenStreetMap). Nelle notti della festa intorno a Oaxaca il traffico allunga tutto; i bloqueos possono fermare un bus per ore.',
    notaTempiFonti: ['osrm'],
    scalaKm: 100,
  },
  primaDiPartire: [
    {
      titolo: 'Il calendario della festa',
      righe: [
        { voce: '28 ottobre', valore: 'In molte zone si ricordano i morti per incidente.' },
        { voce: '31 ottobre e 1° novembre', valore: 'Dedicati ai bambini, gli angelitos. Notte del 31 a Xoxocotlán, del 1° alla muerteada di Etla.' },
        { voce: '2 novembre', valore: 'I morti adulti; sera al Panteón General di Oaxaca. Nel 2027 il 31 ottobre cade di domenica.' },
        { voce: 'Città del Messico', valore: 'Il Gran Desfile nel 2026 è stato sabato 31 ottobre alle 14, lungo Reforma fino allo Zócalo, gratuito. La data cambia ogni anno.', fonti: ['cdmx-desfile'] },
        { voce: 'Prenotare', valore: 'Alloggi a Oaxaca 4-6 mesi prima; tour serali qualche settimana prima; bus ADO per Oaxaca qualche giorno prima.' },
      ],
    },
    {
      titolo: 'Documenti e ingresso',
      righe: [
        { voce: 'Passaporto', valore: 'Almeno sei mesi di validità residua all\'arrivo. Niente visto per turismo fino a 180 giorni.', fonti: ['vs'] },
        { voce: 'Al controllo', valore: 'Tieni pronte la prenotazione dell\'alloggio e il volo di uscita. Il tagliando rilasciato all\'arrivo indica i giorni concessi; a Città del Messico ci sono gli e-gate per i passaporti elettronici.', fonti: ['vs'] },
        { voce: 'Dove Siamo nel Mondo', valore: 'Registra il viaggio sul sito della Farnesina prima di partire.' },
        { voce: 'Assicurazione', valore: 'Le cliniche private sono care: polizza sanitaria con rimpatrio.', fonti: ['vs'] },
      ],
    },
    {
      titolo: 'Soldi',
      righe: [
        { voce: 'Valuta', valore: 'Peso messicano (MXN). Il 2 novembre 2026 1 € valeva 21,00 MXN.', fonti: ['cambio'] },
        { voce: 'Contanti', valore: 'Mercati, colectivos, cimiteri, palenques e paesi dei Valles Centrales: solo pesos, meglio in banconote piccole. Preleva agli sportelli dentro banche e centri commerciali.' },
        { voce: 'Mance', valore: '10-15% al ristorante.' },
      ],
    },
    {
      titolo: 'Sicurezza, salute, ora',
      righe: [
        { voce: 'Oaxaca', valore: 'Non è tra le aree di particolare cautela. Attenzione ai bloqueos, i blocchi stradali: chiedi in hotel prima degli spostamenti lunghi.', fonti: ['vs'] },
        { voce: 'Michoacán', valore: 'Pátzcuaro e Janitzio stanno in uno stato dove Viaggiare Sicuri raccomanda di evitare i viaggi non indispensabili: per questo non sono nel giro.', fonti: ['vs'] },
        { voce: 'Taxi', valore: 'Mai per strada: taxi de sitio prenotati dall\'hotel, prepagati in aeroporto, o Uber e DiDi.', fonti: ['vs'] },
        { voce: 'Salute', valore: 'Nessuna vaccinazione obbligatoria. Dengue e chikungunya anche nello stato di Oaxaca: repellente sulla costa. Acqua in bottiglia, niente ghiaccio.', fonti: ['vs'] },
        { voce: 'Fuso', valore: 'Città del Messico e Oaxaca 8 ore indietro rispetto all\'Italia con l\'ora legale, 7 dopo il ritorno all\'ora solare (ultima domenica di ottobre). Il Messico non usa più l\'ora legale.', fonti: ['vs'] },
        { voce: 'Corrente e telefono', valore: '127 V, prese A e B. Dall\'Italia 0052, per l\'Italia 0039.', fonti: ['vs'] },
        { voce: 'Divieti', valore: 'Vietato introdurre sigarette elettroniche e liquidi. Droghe vietate anche per uso personale.', fonti: ['vs'] },
      ],
    },
    {
      titolo: 'Nei cimiteri',
      righe: [
        { voce: 'Foto', valore: 'Chiedi prima di fotografare persone e altari; niente flash a pochi centimetri.' },
        { voce: 'Comportamento', valore: 'Non ci si siede sulle tombe, si sta in silenzio vicino a chi prega, negli altari di casa si entra solo su invito.' },
        { voce: 'Un gesto', valore: 'Una candela o un mazzo di cempasúchil da lasciare è apprezzato.' },
        { voce: 'Freddo', valore: 'Dopo mezzanotte sotto i 10 °C: giacca.' },
      ],
    },
  ],
  emergenze: {
    numeri: [
      { voce: 'Emergenze (polizia, ambulanza, pompieri)', valore: '911', fonti: ['vs'] },
      { voce: 'Ángeles Verdes, assistenza stradale', valore: '078', fonti: ['vs'] },
      { voce: 'Protezione civile (terremoti, vulcano)', valore: '800 004 1300', fonti: ['vs'] },
    ],
    ambasciata: [
      { nome: 'Ambasciata d\'Italia a Città del Messico', cosa: 'Competente per tutto il Paese', indirizzo: 'Av. de las Palmas 1994, Lomas de Chapultepec, 11000 Ciudad de México', telefono: '+52 55 5596 3655 · reperibilità +52 55 5437 2596 · segreteria.messico@esteri.it', web: 'ambcittadelmessico.esteri.it', stato: 'ufficiale', fonti: ['vs'] },
      { nome: 'Consolato onorario a Puebla', cosa: 'Stati di Puebla e Tlaxcala', indirizzo: 'Calzada Zavaleta 3920, local 2, Col. Sta. Cruz Buenavista, 72170 Puebla', telefono: '+52 222 283 4169 · puebla.onorario@esteri.it', stato: 'ufficiale', fonti: ['vs'] },
      { nome: 'Consolato onorario a Oaxaca', cosa: 'Stato di Oaxaca', telefono: 'cell. +52 951 119 8160 · oaxaca.onorario@esteri.it', stato: 'ufficiale', fonti: ['vs'] },
    ],
    ospedali: [
      { nome: 'Centro Médico ABC, Campus Observatorio', cosa: 'Città del Messico, privato, aperto 24 ore', indirizzo: 'Sur 136 n. 116, Col. Las Américas, Álvaro Obregón, 01120 CDMX', telefono: '+52 55 5230 8000', web: 'centromedicoabc.com', stato: 'ufficiale', fonti: ['abc'] },
      { nome: 'Hospital Ángeles Puebla', cosa: 'Puebla, privato', indirizzo: 'Av. Kepler 2143, Reserva Territorial Atlixcáyotl, 72190 Puebla', stato: 'non-provato', avviso: 'Indirizzo da directory medici; telefono delle urgenze non trovato.', fonti: ['topdoctors-puebla'] },
      { nome: 'Hospital Reforma', cosa: 'Oaxaca, privato, in centro', indirizzo: 'Reforma 613, Centro, Oaxaca', telefono: '+52 951 516 0989', stato: 'non-provato', avviso: 'Telefono da una sola fonte non ufficiale: riconfermalo.', fonti: ['oax-library'] },
      { nome: 'Hospital General de Puerto Escondido', cosa: 'Puerto Escondido, pubblico', indirizzo: 'Raúl Gonzáles s/n, Col. Jardines, 71980 San Pedro Mixtepec', stato: 'non-provato', avviso: 'Ospedale pubblico: per gli stranieri di solito si va in una clinica privata con l\'assicurazione.', fonti: ['angels-pe'] },
    ],
  },
  contatti: [
    {
      gruppo: 'Trasporti e prenotazioni',
      voci: [
        { nome: 'ADO', cosa: 'Bus Città del Messico-Puebla-Oaxaca e verso la costa', web: 'ado.com.mx', stato: 'non-provato', fonti: ['ado'] },
        { nome: 'Museo Frida Kahlo', cosa: 'Biglietti online a orario', web: 'museofridakahlo.org.mx', stato: 'non-provato', fonti: [] },
        { nome: 'Governo di Città del Messico', cosa: 'Date di processione, parata e ofrenda dello Zócalo', web: 'mexicocity.cdmx.gob.mx', stato: 'ufficiale', fonti: ['cdmx-desfile'] },
        { nome: 'CENAPRED', cosa: 'Semaforo di allerta del Popocatépetl', web: 'gob.mx/cenapred', stato: 'ufficiale', fonti: ['vs'] },
      ],
    },
  ],
  budget: {
    righe: [
      { voce: 'Volo Italia-Città del Messico' },
      { voce: 'Teotihuacán', costo: '210 MXN' },
      { voce: 'Museo di Antropologia', costo: '210 MXN' },
      { voce: 'Monte Albán', costo: '210 MXN' },
      { voce: 'Bus Città del Messico-Puebla', costo: '200-300 MXN', nota: 'indicativo' },
      { voce: 'Bus Puebla-Oaxaca', costo: '450-800 MXN', nota: 'indicativo' },
      { voce: 'Oaxaca-Puerto Escondido', costo: '300-500 MXN', nota: 'indicativo' },
      { voce: 'Tour serale ai cimiteri', costo: '600-1.200 MXN', nota: 'indicativo' },
      { voce: 'Tour della strada del mezcal', costo: '600-900 MXN', nota: 'indicativo' },
      { voce: 'Volo Puerto Escondido-Città del Messico', costo: '1.200-3.000 MXN', nota: 'prenotato in anticipo' },
      { voce: 'Hotel, 15 notti', nota: 'a Oaxaca nelle notti della festa il doppio o il triplo' },
      { voce: 'Spesa giornaliera', costo: '1.200-4.000 MXN', nota: 'da ostelli e street food a hotel boutique' },
    ],
    nota: 'Le tariffe INAH sono quelle ufficiali 2026; le altre cifre sono stime del mio programma, da riverificare.',
    cambio: 'Cambio di riferimento: 1 € = 21,00 MXN (BCE, 2/11/2026). Per 100 MXN conta circa 4,80 €.',
    cambioFonti: ['cambio'],
  },
  valigia: [
    { gruppo: 'Documenti', voci: ['Passaporto con sei mesi di validità', 'Stampa di alloggi e volo di uscita', 'Polizza sanitaria', 'Carta di credito e una di riserva', 'Questa guida'] },
    { gruppo: 'Vestiti', voci: ['Giacca e strati per le notti nei cimiteri', 'Scarpe chiuse per i terreni sconnessi', 'Vestiti leggeri e costume per la costa', 'Cappello per Teotihuacán e Monte Albán', 'Trucco o costume da Catrina, se vuoi partecipare'] },
    { gruppo: 'Notti della festa', voci: ['Torcia o frontale', 'Banconote piccole', 'Una candela o fiori da lasciare', 'Powerbank'] },
    { gruppo: 'Salute', voci: ['Repellente per la costa', 'Antidiarroico', 'Crema solare (fuori dall\'acqua della laguna)', 'Adattatore per prese A/B'] },
  ],
  lingua: {
    nome: 'Spagnolo del Messico',
    pronuncia: 'Si legge quasi come si scrive. La j e la g davanti a e, i suonano come una h aspirata; la ll e la y come la «gi» di giallo; la x di México e Oaxaca come una j (oa-HA-ca).',
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
        { it: 'Scusi', loc: 'disculpe · con permiso', nota: 'la seconda per passare tra la folla' },
        { it: 'Come? Prego?', loc: '¿mande?' },
      ],
    },
    {
      gruppo: 'Nei cimiteri e alla festa',
      frasi: [
        { it: 'Posso fare una foto?', loc: '¿puedo tomar una foto?' },
        { it: 'Condoglianze', loc: 'mi más sentido pésame' },
        { it: 'È bellissimo l\'altare', loc: 'qué bonita ofrenda' },
        { it: 'Fiore dei morti', loc: 'cempasúchil' },
        { it: 'A che ora parte la comparsa?', loc: '¿a qué hora sale la comparsa?' },
      ],
    },
    {
      gruppo: 'Muoversi e comprare',
      frasi: [
        { it: 'Dov\'è…?', loc: '¿dónde está…?' },
        { it: 'Quanto costa?', loc: '¿cuánto cuesta?' },
        { it: 'Un biglietto per…', loc: 'un boleto para…' },
        { it: 'Mi aspetta e mi riporta?', loc: '¿me espera y me regresa?', nota: 'al taxi, nelle notti della festa' },
        { it: 'Non capisco', loc: 'no entiendo' },
      ],
    },
    {
      gruppo: 'A tavola e al palenque',
      frasi: [
        { it: 'Poco piccante', loc: 'que no pique mucho' },
        { it: 'Senza ghiaccio', loc: 'sin hielo' },
        { it: 'Un assaggio', loc: 'una probadita' },
        { it: 'Il conto, per favore', loc: 'la cuenta, por favor' },
      ],
    },
    {
      gruppo: 'Emergenze',
      frasi: [
        { it: 'Aiuto!', loc: '¡ayuda!' },
        { it: 'Ho bisogno di un medico', loc: 'necesito un médico' },
        { it: 'Ospedale · Pronto soccorso', loc: 'hospital · urgencias' },
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
    { titolo: 'Il viaggio: Messico, Día de los Muertos', path: '/viaggi/messico-dia-de-los-muertos' },
    { titolo: 'Oaxaca', path: '/destinazioni/messico/oaxaca' },
    { titolo: 'I Valles Centrales di Oaxaca', path: '/destinazioni/messico/valles-centrales-oaxaca' },
    { titolo: 'Pátzcuaro e Janitzio (variante)', path: '/destinazioni/messico/patzcuaro-janitzio' },
  ],
  consultate: 'Consultate il 2 novembre 2026. Le date degli eventi cambiano ogni anno: prima di prenotare guarda i canali ufficiali.',
  nonVerificato: [
    'Data 2026 della Mega Procesión de Catrinas (le fonti danno 24 o 25 ottobre)',
    'Programma 2026 della muerteada di San Agustín Etla',
    'Prezzi INAH 2026 di Templo Mayor, Cholula e Mitla; prezzo della Casa Azul',
    'Tariffe 2026 dei bus ADO e pedaggio della Barranca Larga-Ventanilla',
    'Stato di Hierve el Agua nella settimana del viaggio',
    'Telefoni degli ospedali di Puebla e Puerto Escondido',
    'Nomi di hotel e ristoranti: non annotati nei miei documenti',
  ],
  fonti: [
    { id: 'vs', titolo: 'Viaggiare Sicuri, scheda Messico (agg. 27/5/2026)', url: 'https://www.viaggiaresicuri.it/schede_paese/MEX.json' },
    { id: 'cambio', titolo: 'Frankfurter (dati BCE), EUR/MXN 2/11/2026', url: 'https://api.frankfurter.dev/v1/latest?from=EUR&to=MXN' },
    { id: 'chilango', titolo: 'Chilango, tariffe INAH 2026 (7/1/2026)', url: 'https://www.chilango.com/que-hacer/arte-y-cultura/precios-de-entrada-museos-cdmx-zonas-arqueologicas-del-pais-2026/' },
    { id: 'cdmx-desfile', titolo: 'Città del Messico, Gran Desfile de Día de Muertos 2026', url: 'https://mexicocity.cdmx.gob.mx/?p=21852' },
    { id: 'unotv', titolo: 'UnoTV, calendario Día de Muertos 2026 a Città del Messico', url: 'https://www.unotv.com/estados/ciudad-de-mexico/calendario-de-dia-de-muertos-2026-en-cdmx-fechas-del-desfile-ofrenda-monumental-y-actividades-gratis/' },
    { id: 'ado', titolo: 'ADO, autobus', url: 'https://www.ado.com.mx/' },
    { id: 'abc', titolo: 'Centro Médico ABC, sedi', url: 'https://centromedicoabc.com/en/foreign-patients' },
    { id: 'topdoctors-puebla', titolo: 'Topdoctors, Hospital Ángeles Puebla', url: 'https://www.topdoctors.mx/puebla-ciudad/centro/rosacea/gnp/' },
    { id: 'oax-library', titolo: 'Oaxaca Lending Library, numeri di emergenza', url: 'https://oaxlibrary.org/emergency-resources' },
    { id: 'angels-pe', titolo: 'Angels Initiative, Hospital General de Puerto Escondido', url: 'https://angels-initiative.com/content/hospital-general-de-puerto-escondido' },
    { id: 'osm', titolo: 'OpenStreetMap / Nominatim (coordinate)', url: 'https://nominatim.openstreetmap.org' },
    { id: 'osrm', titolo: 'OSRM su dati OpenStreetMap', url: 'https://router.project-osrm.org' },
  ],
}
