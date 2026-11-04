import type { Esperienza } from '@/lib/types'

// Esperienze della Tanzania. L'unico ricordo di Rick è sul safari in tenda con
// Suricata Safaris (che consiglia): miaEsperienza c'è solo lì. Le altre schede
// sono guida pratica su fonti verificate (tariffe ufficiali NCAA, novembre 2026).

export const esperienzeTanzania: Esperienza[] = [
  {
    slug: 'safari-in-tenda',
    paeseSlug: 'tanzania',
    destinazioneSlug: 'serengeti',
    nome: 'Safari in tenda nel Serengeti',
    localita: 'Serengeti e circuito nord',
    cosE:
      "Un safari di più giorni dormendo in tenda dentro i parchi, nei campeggi pubblici o nei campi tendati, invece che nei lodge. Si cena al campo e la notte si sentono gli animali attorno.",
    percheFarla:
      "Si sta più vicini alla natura, si è già dentro il parco all'alba e, con i campeggi pubblici, si spende meno che con i lodge.",
    durata: '3-7 giorni',
    periodo: 'tutto l\'anno, meglio nella stagione secca (giugno-ottobre)',
    costo: "un safari di gruppo di 4 giorni tra Tarangire, Serengeti e Ngorongoro con Suricata Safaris parte da circa 858 $ a persona (indicativo); il campeggio costa meno dei lodge",
    comePrenotare: "con un operatore di Arusha; io l'ho fatto con Suricata Safaris (suricatasafaris.com), che ha formule in campeggio, di fascia media e di lusso",
    cosaPortare: 'strati caldi per la notte e per l\'alba, una frontale, power bank, salviette, repellente',
    perChiEAdatta: 'chi non ha bisogno di comodità e vuole stare a contatto con la natura',
    miaEsperienza:
      "Suricata Safaris sono top: hanno accommodation per tutti i gusti e anche le esperienze in tenda, che consiglio. Mi piace viaggiare scomodo e a contatto con la natura, anche se ogni tanto qualche 5 stelle va bene.",
    giudizio: 'la-rifarei',
    alternative: ['Campi tendati fissi o lodge di fascia media, per chi vuole un letto vero', 'Lodge e campi di lusso, almeno per una notte'],
    tripSlugs: [],
    imageAlt: 'Tende da campeggio montate su un prato in Tanzania',
    immagine: '/images/tanzania/tende-campo.jpg',
  },
  {
    slug: 'grande-migrazione',
    paeseSlug: 'tanzania',
    destinazioneSlug: 'serengeti',
    nome: 'La Grande Migrazione',
    localita: 'Serengeti e Ngorongoro Conservation Area',
    cosE:
      "Il movimento circolare di gnu e zebre tra il Serengeti e il Masai Mara, in Kenya, che segue le piogge e l'erba fresca. Non è un evento di un giorno: le mandrie sono in un posto diverso a seconda del mese.",
    percheFarla: 'Vedere mandrie che riempiono la pianura fino all\'orizzonte, e nei mesi giusti le nascite o gli attraversamenti dei fiumi.',
    durata: '2-4 giorni nella zona giusta',
    periodo:
      "indicativamente: da dicembre a marzo nel sud, verso Ndutu, con le nascite tra gennaio e febbraio; da aprile a maggio le piogge lunghe; tra giugno e luglio il corridoio occidentale e il fiume Grumeti; da luglio-agosto a ottobre il nord, con gli attraversamenti del fiume Mara; a novembre il ritorno verso sud. Ogni anno cambia con le piogge",
    costo: 'i normali park fee del Serengeti; nei mesi degli attraversamenti i campi del nord sono i più cari',
    comePrenotare: "con l'operatore del safari, scegliendo il campo in base al mese: Suricata Safaris ha itinerari dedicati alla migrazione e alla stagione delle nascite",
    cosaPortare: 'binocolo, teleobiettivo, pazienza: agli attraversamenti si può aspettare ore',
    perChiEAdatta: 'chiunque, purché accetti che gli animali non hanno orari',
    giudizio: 'da-verificare',
    alternative: ['Nella stagione delle nascite, le pianure di Ndutu sono più tranquille degli attraversamenti del Mara'],
    tripSlugs: [],
    imageAlt: 'Una mandria di gnu attraversa il fiume Mara nel Serengeti',
    immagine: '/images/tanzania/grande-migrazione-mara.jpg',
  },
  {
    slug: 'cratere-ngorongoro',
    paeseSlug: 'tanzania',
    destinazioneSlug: 'ngorongoro',
    nome: 'Game drive nel cratere di Ngorongoro',
    localita: 'Ngorongoro Conservation Area',
    cosE: 'Una giornata sul fondo della caldera, scendendo e risalendo le pareti in fuoristrada, tra erbivori, leoni, ippopotami e rinoceronti neri.',
    percheFarla: 'È il posto del circuito nord dove è più facile vedere il rinoceronte nero.',
    durata: 'mezza giornata o giornata intera',
    periodo: 'tutto l\'anno, partendo all\'alba',
    costo: 'ingresso NCAA 70,80 $ a persona ogni 24 ore, più 295 $ a veicolo per la discesa nel cratere',
    comePrenotare: "è compreso nei safari del circuito nord; la tassa del cratere la paga l'operatore per il veicolo",
    cosaPortare: 'una giacca: sul bordo e all\'alba fa freddo',
    perChiEAdatta: 'chiunque',
    giudizio: 'da-verificare',
    alternative: [],
    tripSlugs: [],
    imageAlt: "Due rinoceronti neri nell'erba alta sul fondo del cratere di Ngorongoro",
    immagine: '/images/tanzania/ngorongoro-rinoceronti.jpg',
  },
  {
    slug: 'stone-town',
    paeseSlug: 'tanzania',
    destinazioneSlug: 'zanzibar',
    nome: 'Stone Town a piedi',
    localita: 'Stone Town, Zanzibar',
    cosE:
      "Un giro a piedi nella città vecchia di Zanzibar, patrimonio UNESCO: vicoli stretti, porte di legno intagliate, il Forte Antico, la cattedrale anglicana costruita sul sito del vecchio mercato degli schiavi e il lungomare dei Forodhani Gardens.",
    percheFarla: 'È la parte di Zanzibar che racconta la storia dell\'isola, ed è un bel cambio di ritmo dopo i giorni di safari.',
    durata: 'mezza giornata, più la sera al mercato dei Forodhani Gardens',
    periodo: 'mattina presto o tardo pomeriggio, per evitare il caldo',
    comePrenotare: 'si gira da soli; per la storia del mercato degli schiavi conviene una guida locale autorizzata',
    cosaPortare: 'vestiti che coprano spalle e ginocchia, acqua, scarpe comode',
    perChiEAdatta: 'chiunque',
    giudizio: 'da-verificare',
    alternative: ['Tour delle spezie nelle piantagioni dell\'interno, spesso abbinato alla città'],
    tripSlugs: [],
    imageAlt: 'Il lungomare di Stone Town visto da una veranda in legno intagliato, con le palme e le barche',
    immagine: '/images/tanzania/stone-town.jpg',
  },
]
