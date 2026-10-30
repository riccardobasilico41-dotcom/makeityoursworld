import type { Destinazione } from '@/lib/types'

// Terza e ultima tappa dell'itinerario "Capitali baltiche in 9 giorni"
// (src/content/viaggi/61-capitali-baltiche.md, dati in
// src/content/viaggi-dati/capitali-baltiche.ts). Stesso trattamento delle
// destinazioni lituane e lettoni: visitataPersonalmente false, nessun
// miaEsperienza. A differenza di Vilnius e Riga, qui non c'è una seconda
// destinazione satellite paragonabile a Trakai o Jūrmala: Toompea, Kadriorg e
// Telliskivi sono quartieri di Tallinn stessa, non luoghi separati, e restano
// dentro il cosaVedere/cosaFare dell'unica destinazione estone.

export const destinazioniEstonia: Destinazione[] = [
  {
    slug: 'tallinn',
    paeseSlug: 'estonia',
    ordine: 1,
    nome: 'Tallinn',
    tipologia: ['città', 'storia', 'architettura'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: false,
    introduzione:
      'La capitale dell\'Estonia è la più settentrionale delle tre capitali baltiche e si affaccia sul Golfo di Finlandia. La Città Vecchia, patrimonio UNESCO dal 1997, è uno dei centri medievali meglio conservati del nord Europa: in alto la Toompea, la collina fortificata dove risiedeva il potere, in basso la città dei mercanti anseatici. Fuori dalle mura, il parco barocco di Kadriorg e l\'ex complesso industriale di Telliskivi raccontano due Estonie diverse, quella zarista e quella più recente, digitale e creativa.',
    percheAndarci:
      'Il centro storico è autentico: mura, torri e la piazza con il municipio più antico del Baltico sono arrivate fino a oggi quasi intatte. E appena fuori da quelle mura Tallinn cambia faccia, con un parco imperiale russo da una parte e un distretto creativo nato in una fabbrica sovietica dall\'altra.',
    cosaVedere: [
      'La Piazza del Municipio (Raekoja plats), con il Municipio di Tallinn, del 1404, il più antico ancora in uso del Baltico',
      'La collina di Toompea, con il Castello di Toompea (oggi sede del parlamento estone, il Riigikogu) e la Cattedrale ortodossa di Alexander Nevsky, con le cupole a cipolla dorate',
      'Le piattaforme panoramiche di Kohtuotsa e Patkuli su Toompea, le due viste classiche sulla città bassa, sul porto e sul Golfo di Finlandia',
      'Le mura cittadine medievali, circa 1,85 km ancora in piedi con le torri superstiti, fra cui la Kiek in de Kök, la torre-cannone il cui nome significa «sbircia in cucina»: uno dei sistemi difensivi meglio conservati d\'Europa',
      'La Chiesa di Sant\'Olaf (Oleviste kirik): nel Cinquecento, con la sua guglia, fu per un periodo l\'edificio più alto del mondo',
      'Il Parco di Kadriorg, con il Palazzo di Kadriorg, fatto costruire nel 1718 da Pietro il Grande per la moglie Caterina I su progetto dell\'architetto italiano Niccolò Michetti, oggi sede del museo d\'arte straniera; a pochi passi il KUMU, il museo d\'arte estone in un edificio contemporaneo, Museo Europeo dell\'Anno nel 2008',
      'Telliskivi Creative City, l\'ex complesso industriale e ferroviario di epoca sovietica diventato dal 2009 un quartiere creativo, con street art, studi di design, negozi indipendenti e locali',
    ],
    cosaFare: [
      'Salire su Toompea fino alle piattaforme di Kohtuotsa e Patkuli per il panorama sulla città bassa',
      'Camminare lungo il tratto di mura ancora percorribile e salire su una delle torri aperte al pubblico',
      'Girare tra i musei e i viali del Parco di Kadriorg, con una sosta al KUMU se c\'è tempo per una visita più lunga',
      'Passare un pomeriggio tra i negozi indipendenti, i murales e i locali di Telliskivi Creative City',
    ],
    doveDormire:
      'Nella Città Vecchia, per avere tutto a piedi: la parte bassa intorno a Piazza del Municipio è la più centrale, Toompea la più tranquilla e panoramica. Il quartiere di Kalamaja, fra la Città Vecchia e Telliskivi, è un\'alternativa più residenziale, dall\'aria più locale.',
    doveMangiare:
      'La verivorst (sanguinaccio) con mirtilli rossi è un piatto tradizionale, soprattutto a Natale; il kiluvõileib, un tramezzino aperto con spratti marinati, burro e uovo sodo, è lo spuntino estone per eccellenza. A Telliskivi c\'è la scena gastronomica più giovane della città, fra street food, birrifici artigianali e mercati alimentari nei fine settimana.',
    comeArrivare:
      'L\'aeroporto di Tallinn-Lennart Meri (TLL) è a circa 4 km dal centro: 15-20 minuti di tram o pochi minuti di taxi/Bolt, uno degli aeroporti più vicini al centro città in Europa. Da alcuni aeroporti italiani ci sono voli diretti low-cost, stagionali o tutto l\'anno; altrimenti si fa scalo su un hub europeo. Da Riga: bus in circa 4-4h30, con più compagnie, tra cui Lux Express, e diverse corse al giorno. Da Helsinki: traghetto in circa 2 ore, un\'estensione classica per chi ha qualche giorno in più.',
    comeSpostarsi:
      'Il centro storico si gira tutto a piedi. Tram e bus pubblici portano dal centro a Kadriorg e Telliskivi in pochi minuti, con biglietti economici da comprare in app o alle biglietterie.',
    periodoMigliore:
      'maggio-settembre, per il clima più mite e le giornate lunghissime vicino al solstizio; giugno-agosto è la stagione più affollata nella Città Vecchia. L\'inverno (novembre-marzo) è freddo e buio, ma la neve sui tetti medievali e i mercatini di Natale in Piazza del Municipio hanno il loro fascino.',
    costi: 'un po\' più cara di Vilnius e Riga: ingresso alle quattro torri delle mura cittadine 12€, ingresso al KUMU 12-16€ secondo la mostra, cena normale 12-18€ a testa.',
    erroriDaEvitare: [
      'Fermarsi alla Città Vecchia: Kadriorg e Telliskivi mostrano la Tallinn zarista e quella contemporanea, che il centro medievale da solo non racconta',
      'Salire su Toompea e saltare le due piattaforme panoramiche (Kohtuotsa e Patkuli): sono a pochi passi l\'una dall\'altra e guardano la città bassa da angolazioni diverse',
      'Dare per scontato che l\'estone somigli al lituano o al lettone: è una lingua ugrofinnica, imparentata con il finlandese e del tutto estranea alla famiglia baltica delle altre due capitali',
      'Andare a Telliskivi la domenica sera o il lunedì, quando diversi locali e negozi indipendenti sono chiusi',
    ],
    esperienzeSlugs: ['tallinn-kadriorg-kumu', 'tallinn-telliskivi-creative-city'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Le case medievali color pastello con i tetti a punta sul lato est della Piazza del Municipio di Tallinn, con i tavolini dei caffè all\'aperto',
    immagine: '/images/estonia/tallinn.jpg',
  },
]
