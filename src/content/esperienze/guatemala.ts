import type { Esperienza } from '@/lib/types'

// Paese non ancora visitato: miaEsperienza assente e giudizio 'da-verificare'
// ovunque. Prezzi e modalità sono indicativi, da riverificare prima di
// prenotare.

export const esperienzeGuatemala: Esperienza[] = [
  {
    slug: 'trekking-acatenango',
    paeseSlug: 'guatemala',
    destinazioneSlug: 'antigua-guatemala',
    nome: 'Trekking notturno all\'Acatenango',
    localita: 'Vulcano Acatenango, vicino Antigua Guatemala',
    cosE:
      'Un trekking di due giorni con la notte in campo sul fianco del vulcano Acatenango (3.976 m), da cui si vede il vicino Fuego, uno dei vulcani più attivi al mondo, eruttare a intervalli regolari, spesso più volte in una notte. Si sale in 5-6 ore con 1.500 metri di dislivello, si dorme in tenda o in rifugio e si scende la mattina dopo.',
    percheFarla:
      'È l\'esperienza simbolo del Guatemala: capita di rado di guardare dall\'alto, a distanza di sicurezza, un vulcano che erutta lava per tutta la notte.',
    durata: '2 giorni, 1 notte',
    periodo: 'tutto l\'anno, ma molto meglio nella stagione secca (novembre-aprile) per i sentieri e per la visibilità di notte',
    costo:
      'indicativamente 60-120€ a persona secondo l\'operatore e il livello del campo, con attrezzatura, pasti e guida inclusi; l\'escursione extra fino alla base del Fuego costa di solito 20-30€ in più',
    comePrenotare: 'Con le agenzie del centro di Antigua o con gli operatori specializzati; fuori stagione anche il giorno prima, in alta stagione meglio qualche giorno prima.',
    cosaPortare:
      'Strati termici seri, perché al campo si va vicino allo zero. Scarpe da trekking con buona presa, torcia frontale, almeno 3-4 litri d\'acqua (spesso non è inclusa), guanti e berretto.',
    perChiEAdatta:
      'Serve una discreta forma fisica: il dislivello è importante, la sabbia vulcanica cede sotto i piedi e l\'altitudine si sente. Per lo zaino si possono prendere a parte dei portatori.',
    giudizio: 'da-verificare',
    alternative: ['Vulcano Pacaya in mezza giornata, molto più semplice ma senza eruzioni dal vivo garantite'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Il vulcano Fuego in eruzione di notte, con la lava incandescente sopra il cratere, Guatemala',
    immagine: '/images/guatemala/trekking-acatenango.jpg',
  },
  {
    slug: 'lance-villaggi-atitlan',
    paeseSlug: 'guatemala',
    destinazioneSlug: 'lago-atitlan',
    nome: 'Giro dei villaggi del lago Atitlán in lancha',
    localita: 'Lago Atitlán, tra Panajachel, San Juan, San Pedro e Santiago',
    cosE:
      'Le lance sono le barche pubbliche che collegano i villaggi del lago, l\'unico vero mezzo di trasporto della zona. Partono dai moli principali quando sono piene e permettono di farsi un giro su misura, da un paese all\'altro, in una giornata.',
    percheFarla:
      'Ogni villaggio del lago ha un\'identità sua (la tessitura a San Juan, la vita tradizionale a Santiago, le scuole di spagnolo a San Pedro, lo yoga a San Marcos), e per capirlo bisogna vederne almeno tre o quattro di fila.',
    durata: 'una giornata per 3-4 villaggi; ogni tratta dura tra i 10 e i 40 minuti',
    periodo: 'tutto l\'anno, sempre al mattino: dal primo pomeriggio si alza il vento Xocomil e il lago diventa mosso',
    costo: 'indicativamente 10-25 GTQ a tratta (1-3€), da pagare in contanti a bordo',
    comePrenotare: 'Nessuna prenotazione: ci si presenta al molo e si aspetta la partenza successiva, con corse frequenti fino al tramonto.',
    cosaPortare: 'Contanti in quetzales in piccoli tagli, giacca antivento e antispruzzo, protezione solare.',
    perChiEAdatta: 'Adatta a tutti; chi soffre il mal di mare farebbe bene a muoversi la mattina presto, quando l\'acqua è ferma.',
    giudizio: 'da-verificare',
    alternative: ['Tour organizzato in barca privata con guida, più caro ma con orari garantiti'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Il lago Atitlán al crepuscolo con le luci dei villaggi lungo le rive, visto da San Pedro La Laguna, Guatemala',
    immagine: '/images/guatemala/lance-villaggi-atitlan.jpg',
  },
  {
    slug: 'alba-tikal',
    paeseSlug: 'guatemala',
    destinazioneSlug: 'tikal-flores',
    nome: 'Alba a Tikal dal Tempio IV',
    localita: 'Parco Nazionale di Tikal, Petén',
    cosE:
      'L\'ingresso al parco prima dell\'apertura normale, per salire sulla piattaforma del Tempio IV e assistere al risveglio della giungla: prima il buio e i richiami delle scimmie urlatrici, poi la luce che scopre le cime dei templi sopra la foresta.',
    percheFarla:
      'Più che per l\'alba, spesso velata dalla foschia, vale per i suoni: il coro di scimmie urlatrici e uccelli al primo chiarore nessuna visita di giorno lo può dare.',
    durata: 'circa 3-4 ore per la parte all\'alba, poi si prosegue con la visita del sito',
    periodo: 'tutto l\'anno; nella stagione secca la foschia mattutina è frequente, nella stagione delle piogge il cielo è a volte più limpido all\'alba',
    costo: 'ingresso al parco circa 150 GTQ più il supplemento per l\'ingresso anticipato, con guida obbligatoria in quella fascia oraria',
    comePrenotare: 'Con le agenzie di Flores o con gli hotel dentro il parco, il giorno prima; si parte verso le 3:00-4:00 del mattino.',
    cosaPortare: 'Torcia frontale, repellente per insetti, acqua abbondante, scarpe chiuse per i sentieri umidi.',
    perChiEAdatta: 'Adatta a tutti, mettendo in conto la sveglia molto presto e qualche chilometro a piedi nella giungla al buio.',
    giudizio: 'da-verificare',
    alternative: ['Il tramonto a Yaxhá, un sito vicino molto meno affollato, che molti preferiscono proprio per la luce della sera'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Le sagome dei templi di Tikal che emergono dalla giungla controluce, Guatemala',
    immagine: '/images/guatemala/alba-tikal.jpg',
  },
]
