import type { Guida } from './types'
import { guidaMalesiaSingapore as ms } from './malesia-singapore'

/**
 * Guida PDF «Borneo (Sabah)». Il racconto viene da src/content/viaggi/20-borneo-itinerario.md
 * (12 giorni con amici, in autonomia, lodge e permessi prenotati con mesi di anticipo).
 * Le parti di Paese (ingresso, MDAC, emergenze, ambasciata, frasario malese) sono quelle della
 * guida Malesia e Singapore, da Viaggiare Sicuri (scheda Malaysia, agg. 23/10/2026), che qui
 * aggiunge la zona di sicurezza ESSZone della costa orientale del Sabah.
 * Permessi, biglietti e orari non verificati: la guida rimanda ai siti ufficiali.
 *
 * Distanze su strada: OSRM su OpenStreetMap. Volo e barca: distanza in linea d'aria.
 * Coordinate: src/content/mappe/coordinate.ts (OpenStreetMap).
 */

export const guidaBorneo: Guida = {
  slug: 'borneo-itinerario',
  tripSlug: 'borneo-itinerario',
  paese: 'Borneo malese (Sabah)',
  titolo: 'Borneo',
  sottotitolo: 'Il Kinabalu all\'alba, gli oranghi di Sepilok, il fiume Kinabatangan e le immersioni di Mabul e Sipadan. Dodici giorni in Sabah.',
  autore: 'Rick',
  verificatoAl: 'novembre 2026',
  intro: [
    'Questo giro in Sabah l\'ho fatto con amici, in autonomia, ma con lodge e permessi prenotati mesi prima: la vetta del Kinabalu, Sepilok, tre giorni sul Kinabatangan e le immersioni tra Mabul e Sipadan.',
    'È un viaggio che si decide quasi tutto a casa: il permesso per il Kinabalu con il rifugio di Laban Rata, il lodge sul fiume, il resort a Mabul e il permesso giornaliero per Sipadan. Questa guida mette in fila distanze, coordinate, regole di sicurezza della costa orientale, numeri di emergenza e contatti ufficiali.',
    'Regole e contatti li ho ricontrollati a novembre 2026. Le tariffe dei permessi non sono riuscito a verificarle sulle fonti ufficiali: non le scrivo e ti indico dove guardare.',
  ],
  cosaInPiu: [
    'Una scheda per ogni giorno con distanze, tempi, coordinate GPS e un QR verso la pagina del sito',
    'I permessi da chiedere mesi prima: Kinabalu, Sipadan',
    'La zona di sicurezza ESSZone della costa est: cosa raccomanda la Farnesina',
    'MDAC, controllo passaporti del Sabah, ambasciata a Kuala Lumpur, numeri di emergenza',
    'Frasario malese di base',
  ],
  tappe: [
    { nome: 'Kota Kinabalu', gps: [5.97801, 116.0729], giorno: 'G1', etichetta: 'sinistra' },
    { nome: 'Kinabalu', gps: [6.07507, 116.5587], giorno: 'G2-G4', etichetta: 'sopra' },
    { nome: 'Sepilok · Sandakan', gps: [5.83913, 118.11586], giorno: 'G5-G6', etichetta: 'destra' },
    { nome: 'Kinabatangan', gps: [5.50973, 118.28699], giorno: 'G6-G8', etichetta: 'destra' },
    { nome: 'Semporna', gps: [4.47908, 118.42977], giorno: 'G8 · G11', etichetta: 'sinistra' },
    { nome: 'Sipadan · Mabul', gps: [4.11483, 118.62882], giorno: 'G9-G11', etichetta: 'destra' },
  ],
  giorni: [
    {
      numero: 1,
      titolo: 'Arrivo a Kota Kinabalu',
      paginaSito: '/destinazioni/borneo/kota-kinabalu',
      racconto:
        'Arrivati in volo da Kuala Lumpur, circa due ore e mezza, all\'aeroporto c\'è il controllo passaporti del Sabah anche se si arriva dalla penisola. Il primo giorno lungomare, mercato del pesce e tramonto. Cena al Filipino Market, con il pesce scelto al banco e grigliato al momento. È anche il giorno per fare scorta di contanti: più avanti gli ATM si diradano.',
      tratte: [],
      senzaStrada: 'Volo interno da Kuala Lumpur.',
      luoghi: [],
      mangiare: [
        { nome: 'Filipino Market', cosa: 'Pesce alla griglia scelto al banco', indirizzo: 'Lungomare di Kota Kinabalu', stato: 'usato', fonti: [] },
      ],
      dormire: 'Kota Kinabalu.',
    },
    {
      numero: 2,
      titolo: 'Verso il Kinabalu Park',
      paginaSito: '/destinazioni/borneo/kota-kinabalu',
      racconto:
        'Trasferimento a Kundasang o dentro il parco, circa due ore: si dorme in quota per essere al Timpohon Gate all\'alba. Pomeriggio leggero nel Kinabalu Park, patrimonio UNESCO, tra i sentieri bassi e il giardino botanico, per cominciare a stare in quota.',
      tratte: [{ da: 'Kota Kinabalu', a: 'Kinabalu Park', km: 92, minuti: 81, nelMioViaggio: 'circa 2 ore' }],
      luoghi: [
        {
          nome: 'Kinabalu Park',
          indirizzo: 'Kundasang-Ranau, Sabah',
          web: 'sabahparks.org.my',
          gps: [6.07507, 116.5587],
          nota: 'Ingresso, permesso di scalata, guida obbligatoria e rifugio: tariffe da controllare su Sabah Parks.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Kundasang o dentro il parco.',
    },
    {
      numero: 3,
      titolo: 'Kinabalu, la salita a Laban Rata',
      paginaSito: '/esperienze/borneo/monte-kinabalu',
      racconto:
        'Partiti dal Timpohon Gate, a 1.866 metri, con la guida obbligatoria: sei chilometri quasi tutti di gradini irregolari nella foresta pluviale. Nel primo pomeriggio a Laban Rata, 3.270 metri. Cena presto e a letto alle otto, che a quella quota riesce a pochi.',
      tratte: [],
      senzaStrada: 'A piedi, circa 6 km dal Timpohon Gate a Laban Rata.',
      luoghi: [],
      mangiare: [],
      dormire: 'Rifugio di Laban Rata, 3.270 m.',
    },
    {
      numero: 4,
      titolo: 'Vetta all\'alba e discesa',
      paginaSito: '/esperienze/borneo/monte-kinabalu',
      racconto:
        'Sveglia all\'una e mezza e uscita al buio sulla piattaforma di granito, con la corda fissa e la fila di frontali sopra e sotto. In poco più di ventiquattr\'ore si passa da meno di duemila a oltre quattromila metri: il mal di testa è la norma. In vetta, a 4.095 metri, il cielo diventa arancione con le nuvole sotto. La discesa si fa tutta in giornata e pesa sulle ginocchia; poi trasferimento verso Sandakan.',
      tratte: [{ da: 'Kinabalu Park', a: 'Sepilok', km: 250, minuti: 217 }],
      luoghi: [],
      mangiare: [],
      dormire: 'Sepilok o Sandakan.',
      nota: 'Bastoncini per la discesa, frontale, guanti per la corda e uno strato caldo: in vetta prima dell\'alba fa freddo.',
    },
    {
      numero: 5,
      titolo: 'Sepilok: oranghi e sun bear',
      paginaSito: '/esperienze/borneo/sepilok-oranghi',
      racconto:
        'La mattina al Sepilok Orangutan Rehabilitation Centre per la prima poppata; nel pomeriggio la seconda, perché in certe stagioni la foresta ha abbastanza frutta e non si presenta quasi nessuno. In mezzo il centro dei sun bear, a duecento metri, e il Rainforest Discovery Centre con la sua canopy walkway. Zaini chiusi: i macachi strappano bottiglie e sacchetti.',
      tratte: [],
      senzaStrada: 'Tutto a piedi tra i tre centri.',
      luoghi: [
        {
          nome: 'Sepilok Orangutan Rehabilitation Centre',
          indirizzo: 'Sepilok, Sandakan',
          gps: [5.86497, 117.94878],
          nota: 'Orari delle poppate e biglietto da controllare prima: non sono riuscito a consultare il sito ufficiale.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Sepilok.',
    },
    {
      numero: 6,
      titolo: 'Sandakan Memorial Park e il Kinabatangan',
      paginaSito: '/destinazioni/borneo/kinabatangan',
      racconto:
        'La mattina al Sandakan Memorial Park, sul sito del campo di prigionia giapponese da cui nel 1945 partirono le marce della morte verso Ranau: su circa duemilaquattrocento prigionieri alleati ne sopravvissero sei. Nel pomeriggio circa due ore di strada fino a Sukau o Bilit, la barca fino al lodge e la prima uscita al tramonto.',
      tratte: [{ da: 'Sandakan', a: 'Kinabatangan', km: 129, minuti: 122, nelMioViaggio: 'circa 2 ore più la barca' }],
      luoghi: [],
      mangiare: [],
      dormire: 'Lodge sul Kinabatangan (nome non annotato).',
    },
    {
      numero: 7,
      titolo: 'Kinabatangan, la giornata sul fiume',
      paginaSito: '/esperienze/borneo/crociera-kinabatangan',
      racconto:
        'Uscita all\'alba con la nebbia sull\'acqua, uscita al tramonto e uscita notturna con le torce. Nasiche, buceri, macachi, coccodrilli e, con fortuna, un orango selvatico. Poi la barca entra in un affluente e dietro la striscia di foresta compaiono le palme da olio fino all\'orizzonte: per questo gli animali sono tutti lì. Il binocolo vale più di qualsiasi obiettivo.',
      tratte: [],
      senzaStrada: 'Uscite in barca dal lodge.',
      luoghi: [
        {
          nome: 'Fiume Kinabatangan',
          indirizzo: 'Sukau e Bilit, Sabah',
          gps: [5.50332, 118.20832],
          nota: 'Le uscite in barca sono organizzate dal lodge.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Lodge sul Kinabatangan.',
    },
    {
      numero: 8,
      titolo: 'Ultima alba sul fiume e verso Semporna',
      paginaSito: '/destinazioni/borneo/semporna-sipadan',
      racconto:
        'Ultima uscita all\'alba: ogni uscita è una lotteria. In alternativa il trekking dietro il lodge o le Gomantong Caves, con milioni di pipistrelli e i nidi di rondine. Nel pomeriggio il lungo trasferimento a Semporna e la barca per Mabul, circa 45 minuti.',
      tratte: [
        { da: 'Kinabatangan', a: 'Semporna', km: 226, minuti: 202 },
        { da: 'Semporna', a: 'Mabul', km: 40, minuti: 45, mezzo: 'barca (distanza in linea d\'aria)' },
      ],
      luoghi: [],
      mangiare: [],
      dormire: 'Resort a Mabul.',
    },
    {
      numero: 9,
      titolo: 'Mabul e Kapalai: muck diving',
      paginaSito: '/destinazioni/borneo/semporna-sipadan',
      racconto:
        'Prima giornata di immersioni intorno a Mabul e Kapalai, fondali bassi e sabbiosi tra i migliori al mondo per il muck diving: cavallucci pigmei, polpi mimetici, nudibranchi, pesci rana. Intorno alle palafitte, a cinquanta metri dai resort, vivono i Bajau Laut, spesso senza la cittadinanza di nessuno Stato.',
      tratte: [],
      senzaStrada: 'Barche del resort.',
      luoghi: [],
      mangiare: [],
      dormire: 'Mabul.',
    },
    {
      numero: 10,
      titolo: 'Sipadan',
      paginaSito: '/esperienze/borneo/diving-sipadan',
      racconto:
        'La giornata per cui si costruisce il viaggio, se il permesso è arrivato: la rotazione dell\'operatore premia i soggiorni lunghi, per questo abbiamo fatto più notti a Mabul. Una parete che scende nel blu senza fondo, il banco di barracuda che si avvita, tartarughe ovunque. Il permesso vale tre immersioni nella giornata. Sull\'isola non si dorme: le strutture sono state tolte nel 2004.',
      tratte: [],
      senzaStrada: 'Barca del diving da Mabul.',
      luoghi: [
        {
          nome: 'Sipadan',
          indirizzo: 'Mare di Celebes, al largo di Semporna',
          web: 'sabahparks.org.my',
          gps: [4.11483, 118.62882],
          nota: 'Permessi giornalieri a numero chiuso, assegnati tramite i diving con licenza. Tariffa da controllare su Sabah Parks.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Mabul.',
    },
    {
      numero: 11,
      titolo: 'Ultime immersioni o Bohey Dulang',
      paginaSito: '/destinazioni/borneo/semporna-sipadan',
      racconto:
        'Seconda giornata di immersioni. Chi non si immerge sale a Bohey Dulang, un cratere con un sentiero ripido sopra la laguna e una delle viste migliori del Sabah. Nel pomeriggio rientro a Semporna e ultima cena di pesce sul lungomare.',
      tratte: [{ da: 'Mabul', a: 'Semporna', km: 40, minuti: 45, mezzo: 'barca (distanza in linea d\'aria)' }],
      luoghi: [],
      mangiare: [],
      dormire: 'Semporna.',
    },
    {
      numero: 12,
      titolo: 'Tawau e rientro',
      paginaSito: '/viaggi/borneo-itinerario',
      racconto: 'Circa un\'ora e mezza di strada fino a Tawau, poi il volo per Kota Kinabalu o direttamente per Kuala Lumpur.',
      tratte: [{ da: 'Semporna', a: 'Tawau', km: 99, minuti: 89, nelMioViaggio: 'circa un\'ora e mezza' }],
      luoghi: [],
      mangiare: [],
      dormire: 'Nessun pernottamento.',
    },
  ],
  mappa: {
    percorso: ['Kota Kinabalu', 'Kinabalu', 'Sepilok', 'Kinabatangan', 'Semporna', 'Sipadan'],
    legenda: 'Linea piena: il percorso su strada da Kota Kinabalu alla costa est, poi la barca per Mabul e Sipadan.',
    notaTempi: 'Tempi su strada stimati senza traffico (OSRM su OpenStreetMap). Le barche sono in linea d\'aria, con il tempo del diario.',
    notaTempiFonti: ['osrm'],
    scalaKm: 50,
  },
  pass: {
    nome: 'Permessi',
    titolo: 'I permessi da chiedere mesi prima',
    occhiello: 'La prima decisione',
    regola:
      'In Sabah le cose migliori sono a numero chiuso. Per il Kinabalu servono il permesso di scalata, la guida obbligatoria e un posto nel rifugio di Laban Rata; per Sipadan c\'è un numero limitato di permessi al giorno, assegnati dai diving con licenza a rotazione. Il lodge sul Kinabatangan e il resort a Mabul si prenotano insieme, con mesi di anticipo.',
    scenari: [
      { situazione: 'Vuoi la vetta del Kinabalu', scelta: 'Prenota permesso, guida e rifugio insieme: senza posto a Laban Rata niente vetta' },
      { situazione: 'Vuoi Sipadan', scelta: 'Prendi più notti a Mabul: la rotazione dei permessi premia i soggiorni lunghi' },
      { situazione: 'Non ti immergi', scelta: 'Snorkeling a Mabul o la salita a Bohey Dulang' },
      { situazione: 'Ti muovi sulla costa est', scelta: 'Solo con strutture note ed escursioni organizzate: è la raccomandazione della Farnesina' },
    ],
    esito: 'Fai scorta di contanti a Kota Kinabalu: lungo il fiume e sulle isole gli ATM sono rari.',
    fonti: ['vs-my'],
  },
  primaDiPartire: [
    {
      titolo: 'Documenti e ingresso',
      righe: [
        { voce: 'Passaporto', valore: 'Almeno 6 mesi di validità all\'ingresso.', fonti: ['vs-my'] },
        { voce: 'Visto', valore: 'Non serve per turismo fino a 90 giorni.', fonti: ['vs-my'] },
        { voce: 'MDAC', valore: 'Malaysia Digital Arrival Card obbligatoria, da compilare online da tre giorni prima su imigresen-online.imi.gov.my/mdac.', fonti: ['vs-my'] },
        { voce: 'Valuta', valore: 'Ringgit malese (MYR o RM). Oltre 10.000 USD in contanti vanno dichiarati in entrata e in uscita.', fonti: ['vs-my'] },
        { voce: 'Assicurazione', valore: 'La sanità privata è migliore della pubblica ma cara: polizza con spese mediche, che copra immersioni e alta quota.', fonti: ['vs-my'] },
      ],
    },
    {
      titolo: 'Telefono, corrente, salute',
      righe: [
        { voce: 'Corrente', valore: '230 V, 50 Hz, prese di tipo G (britanniche): serve l\'adattatore.', fonti: ['prese-my'] },
        { voce: 'Fuso orario', valore: 'Sette ore avanti rispetto all\'Italia, sei con l\'ora legale.', fonti: ['vs-my'] },
        { voce: 'Lingua', valore: 'L\'inglese lo parla la maggioranza, soprattutto in città.', fonti: ['vs-my'] },
        { voce: 'Dengue', valore: 'Presente: repellente e abiti coprenti. Con la febbre niente aspirina senza il parere di un medico.', fonti: ['vs-my'] },
      ],
    },
    {
      titolo: 'Sicurezza in Sabah',
      righe: [
        { voce: 'ESSZone', valore: 'Dal 2013 la fascia costiera tra Kudat e Tawau (con Sandakan, Kinabatangan, Lahad Datu e Semporna) è la Eastern Sabah Security Zone, coordinata dall\'ESSCOM.', fonti: ['vs-my'] },
        { voce: 'Mare', valore: 'Coprifuoco marittimo notturno e restrizioni alla navigazione intorno a isole come Kapalai, Mabul e Sipadan. Il rischio di rapimenti è considerato limitato ma non inesistente.', fonti: ['vs-my'] },
        { voce: 'Cosa fare', valore: 'Niente escursioni autonome in mare aperto, niente isole senza presidi ESSCOM, strutture note prenotate tramite canali organizzati. A Sandakan, Semporna e Tawau evita i quartieri periferici.', fonti: ['vs-my'] },
        { voce: 'Ingresso in Sabah', valore: 'All\'arrivo c\'è un controllo passaporti anche venendo dalla Malesia peninsulare.' },
        { voce: 'Quota', valore: 'Sul Kinabalu si sale oltre i 4.000 metri in poco più di un giorno, senza acclimatamento.' },
      ],
    },
  ],
  emergenze: {
    numeri: ms.emergenze.numeri.filter((n) => !n.voce.startsWith('Singapore') && !n.voce.startsWith('Polizia di Kuala')),
    ambasciata: ms.emergenze.ambasciata.filter((a) => (a.fonti ?? []).includes('vs-my')),
    ospedali: [],
  },
  contatti: [
    {
      gruppo: 'Siti ufficiali',
      voci: [
        ...ms.contatti[0].voci.filter((v) => v.nome === 'MDAC' || v.nome === 'Tourism Malaysia'),
        { nome: 'Sabah Parks', cosa: 'Kinabalu Park e Sipadan: permessi e tariffe', web: 'sabahparks.org.my', stato: 'ufficiale', fonti: [] },
        { nome: 'Sabah Tourism', cosa: 'Ente del turismo del Sabah', web: 'sabahtourism.com', stato: 'ufficiale', fonti: [] },
      ],
    },
  ],
  budget: {
    righe: [
      { voce: 'Voli Italia-Kuala Lumpur e interni per Kota Kinabalu e da Tawau' },
      { voce: 'Permesso, guida e rifugio del Kinabalu' },
      { voce: 'Sepilok, sun bear, Rainforest Discovery Centre' },
      { voce: 'Lodge sul Kinabatangan con le uscite in barca' },
      { voce: 'Resort a Mabul con le immersioni' },
      { voce: 'Permesso di Sipadan' },
      { voce: 'Trasferimenti su strada' },
      { voce: 'Mance a guide e barcaioli' },
    ],
    nota: 'Nel diario i costi non sono annotati: le righe le riempi tu, con i prezzi del parco e degli operatori.',
  },
  valigia: [
    { gruppo: 'Documenti', voci: ['Passaporto con 6 mesi di validità', 'MDAC compilata', 'Brevetto e logbook per Sipadan', 'Conferme di permessi, rifugio, lodge e resort', 'Polizza che copra immersioni e alta quota', 'Contanti in ringgit'] },
    { gruppo: 'Kinabalu', voci: ['Scarpe da trekking rodate', 'Bastoncini', 'Frontale con batterie di ricambio', 'Guanti per la corda', 'Strato caldo e giacca antivento', 'Zaino piccolo: in rifugio si sale leggeri'] },
    { gruppo: 'Fiume e mare', voci: ['Binocolo', 'Repellente', 'Abiti lunghi e leggeri', 'Sacca stagna', 'Crema solare reef safe', 'Maschera personale'] },
    { gruppo: 'Tecnica e salute', voci: ['Adattatore per prese G', 'Farmaci per il mal di testa da quota, sentito il medico', 'Antidiarroico e reidratanti'] },
  ],
  lingua: ms.lingua,
  frasario: ms.frasario,
  numeri: ms.numeri,
  consultate: ms.consultate,
  pagineSito: [
    { titolo: 'Il viaggio completo', path: '/viaggi/borneo-itinerario' },
    { titolo: 'Borneo, scheda paese', path: '/destinazioni/borneo' },
    { titolo: 'Monte Kinabalu', path: '/esperienze/borneo/monte-kinabalu' },
    { titolo: 'Gli oranghi di Sepilok', path: '/esperienze/borneo/sepilok-oranghi' },
    { titolo: 'Crociera sul Kinabatangan', path: '/esperienze/borneo/crociera-kinabatangan' },
    { titolo: 'Immersioni a Sipadan', path: '/esperienze/borneo/diving-sipadan' },
  ],
  nonVerificato: [
    'Tariffe 2026 di ingresso, permesso di scalata, guida e rifugio del Kinabalu',
    'Tariffa e numero dei permessi giornalieri per Sipadan',
    'Orari delle poppate e biglietti di Sepilok, del centro dei sun bear e del Rainforest Discovery Centre',
    'Nomi e contatti di hotel, lodge, resort e diving: nel diario non ci sono',
    'Ospedali in Sabah (Viaggiare Sicuri non ne elenca)',
  ],
  fonti: ms.fonti.filter((f) => f.id !== 'vs-sg' && f.id !== 'prese-sg'),
}
