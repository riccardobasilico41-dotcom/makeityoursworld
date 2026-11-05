import type { Paese } from '@/lib/types'

// Scheda Paese «Irlanda» (Repubblica d'Irlanda). Rick non ha scritto ricordi personali di
// questo viaggio: la scheda è informativa, verificata a novembre 2026 su ireland.com,
// heritageireland.ie, cliffsofmoher.ie, Citizens Information e Wikipedia per clima e storia.
// L'Irlanda del Nord ha una scheda a parte (regione del Regno Unito): src/content/paesi/irlanda-del-nord.ts.

export const irlanda: Paese = {
  slug: 'irlanda',
  nome: 'Irlanda',
  continente: 'Europa',
  titolo: 'Irlanda in auto: Dublino, la costa atlantica e il Connemara',
  descrizione:
    'La Repubblica d\'Irlanda in un anello in auto: Dublino, i monasteri di Glendalough, Kilkenny e la Rocca di Cashel, Cork e Kinsale, il Ring of Kerry e Dingle, le Cliffs of Moher e il Burren, Galway e il Connemara. Si guida a sinistra e piove spesso, ma le distanze sono brevi e ogni giorno cambia paesaggio. Il viaggio prosegue nell\'Irlanda del Nord, che è un altro Stato.',
  periodoMigliore: 'da maggio a settembre, con giornate lunghe; maggio e giugno sono di solito i mesi più soleggiati',
  durataConsigliata: '8-9 giorni per la Repubblica, 12 per l\'anello completo con l\'Irlanda del Nord',
  budgetIndicativo: 'da calcolare su voli, auto e alloggi; gli ingressi principali costano 5-16€ (2026)',
  scheda: {
    documenti:
      'L\'Irlanda è nell\'Unione Europea ma non nell\'area Schengen: alla frontiera c\'è il controllo dei documenti. I cittadini UE possono entrare con la carta d\'identità valida per l\'espatrio o con il passaporto; ireland.com avverte però che compagnie aeree e traghetti chiedono sempre più spesso il passaporto, quindi conviene verificare con il vettore. Attenzione se il viaggio passa nell\'Irlanda del Nord: lì la carta d\'identità non basta, servono passaporto ed ETA britannica (vedi la scheda dell\'Irlanda del Nord). Prima di partire va controllata la pagina dell\'Irlanda su viaggiaresicuri.it.',
    valuta: 'Euro. Appena si passa il confine con l\'Irlanda del Nord la moneta diventa la sterlina britannica.',
    pagamenti:
      'Le carte sono accettate quasi ovunque, anche per piccoli importi e nei parcheggi. Un po\' di contanti serve per qualche pub di campagna, i mercati e le offerte nelle chiese.',
    connettivita: 'Il roaming UE è incluso nelle tariffe italiane, quindi non serve una SIM locale. Sulle penisole del sud-ovest e nel Connemara la copertura a tratti è debole: conviene scaricare le mappe offline.',
    salute:
      'Vale la tessera europea di assicurazione malattia (TEAM) per le cure necessarie. Un\'assicurazione di viaggio resta utile, anche perché il giro passa nel Regno Unito.',
    sicurezza:
      'È un Paese tranquillo. Il rischio principale è la guida: si va a sinistra, le strade di campagna sono strette, con muretti a secco e siepi a filo della carreggiata, e il meteo cambia in fretta. Sulle scogliere si resta dentro i percorsi segnati, soprattutto col vento.',
    trasportiInterni:
      'Per un anello come questo serve l\'auto a noleggio: treni e bus collegano bene le città ma non il Ring of Kerry, Dingle, il Burren o il Connemara. Si guida a sinistra e i limiti sono in km/h (120 in autostrada, 100 sulle strade nazionali; su molte strade locali il limite è stato abbassato di recente, quindi si seguono i cartelli). Se l\'auto noleggiata nella Repubblica deve entrare nell\'Irlanda del Nord va detto al noleggio al momento della prenotazione. Su alcune autostrade c\'è il pedaggio: come si paga con l\'auto a noleggio va chiesto al ritiro.',
    costoVita:
      'Caro, soprattutto a Dublino e d\'estate. Alcuni ingressi verificati nel 2026: Kilmainham Gaol 8€, Kilkenny Castle 8€, Rocca di Cashel 8€, centro visitatori di Glendalough 5€, Cliffs of Moher 15€ alla cassa (meno online). Alloggi e auto vanno prenotati presto per luglio e agosto.',
    lingua: 'Inglese e irlandese (gaelico), entrambe lingue ufficiali. Nelle zone del Gaeltacht, come la penisola di Dingle e parte del Connemara, l\'irlandese si parla ogni giorno e i cartelli sono spesso solo in irlandese.',
    elettricita: '230V, 50Hz, prese di tipo G a tre poli rettangolari, come nel Regno Unito: serve un adattatore.',
    fusoOrario: 'Un\'ora indietro rispetto all\'Italia tutto l\'anno, con l\'ora legale negli stessi giorni.',
    clima:
      'Oceanico temperato: raramente fa molto caldo o molto freddo. A luglio e agosto le medie giornaliere sono di 14-16 °C, a gennaio e febbraio di 4-7 °C. Piove più a ovest che a est: l\'isola di Valentia, sulla costa del Kerry, riceve circa il doppio della pioggia di Dublino. Maggio e giugno sono di solito i mesi più soleggiati. Giacca impermeabile in valigia anche ad agosto.',
    festivita: 'Il 17 marzo, San Patrizio, è festa nazionale: Dublino si riempie e gli alloggi costano di più.',
    emergenze: 'Il 112 e il 999 funzionano entrambi. L\'Ambasciata d\'Italia si trova a Dublino.',
    aggiornatoAl: 'novembre 2026',
  },
  stileViaggio: ['on the road', 'natura', 'storia', 'pub e musica'],
  heroImageAlt: 'Le Cliffs of Moher a strapiombo sull\'Atlantico, con la O\'Brien\'s Tower in cima, nella contea di Clare',
  heroImage: '/images/irlanda/irlanda-hero.webp',
  tripPrincipaleSlug: 'irlanda-due-irlande',
}
