import type { Paese } from '@/lib/types'

// La Danimarca entra nell'archivio come prima tappa di "Capitali nordiche",
// l'itinerario che unisce Copenaghen, Stoccolma e Oslo (src/content/viaggi/
// 60-capitali-nordiche.md). Nessuno ha ancora messo piede in Danimarca per
// conto di questo sito: la destinazione di Copenaghen resta visitataPersonalmente:
// false e senza il campo miaEsperienza, facoltativo apposta nel tipo Destinazione
// (vedi il commento sul tipo in src/lib/types.ts) — stesso trattamento già usato
// per la Polonia (src/content/paesi/polonia.ts) e per il Centro America
// (src/content/viaggi-dati/centro-america-itinerario.ts). Scheda di ricerca,
// non un diario: fatti verificabili, senza episodi in prima persona.
//
// tripPrincipaleSlug punta a 'capitali-nordiche': a differenza di Svezia e
// Norvegia, che restano ancorate ai loro viaggi natura già pubblicati
// (lapponia-svedese-abisko, lofoten-estate-2025/tromso), la Danimarca non ha
// altri viaggi e nasce direttamente con questo come tappa di apertura.

export const danimarca: Paese = {
  slug: 'danimarca',
  nome: 'Danimarca',
  continente: 'Europa',
  titolo: 'Danimarca: Copenaghen, la porta d\'ingresso a un giro delle capitali nordiche',
  descrizione:
    'Per ora sul sito c\'è una sola meta danese, ed è quella che conta: Copenaghen, la città d\'Europa più a misura di bicicletta, con i canali colorati di Nyhavn, i giardini storici di Tivoli, la Sirenetta sul lungomare e Christiania, la comunità autogestita che dal 1971 vive con regole proprie nel cuore della città. È anche la prima tappa di «Capitali nordiche», l\'itinerario che la unisce a Stoccolma e Oslo in un solo giro: tre paesi con lingue affini e tre valute diverse, nessuna delle quali è l\'euro.',
  periodoMigliore:
    'maggio-settembre per le giornate lunghe e il clima più mite; giugno-agosto è alta stagione (più caldo, più turisti, Tivoli con gli orari estivi). Ad aprile e a ottobre si sta bene e c\'è meno gente. L\'inverno è freddo e fa buio presto, ma a fine novembre Tivoli riapre per i mercatini di Natale.',
  durataConsigliata: '3 giorni per Copenaghen da sola; è anche la prima tappa di un giro di 9 giorni con Stoccolma e Oslo (vedi l\'itinerario "Capitali nordiche")',
  budgetIndicativo:
    'fra le città più care d\'Europa: una birra al bar 7-11€, un pranzo semplice 12-20€, una cena in un ristorante di fascia media 30-45€ a persona. Musei e attrazioni principali (Tivoli, battello sui canali) aggiungono facilmente 20-40€ al giorno a persona.',
  stileViaggio: ['città', 'design', 'gastronomia', 'bici'],
  scheda: {
    documenti:
      'La Danimarca è nell\'Unione Europea e nell\'area Schengen: ai cittadini italiani basta la carta d\'identità valida per l\'espatrio (o il passaporto), senza formalità per soggiorni turistici sotto i tre mesi. Groenlandia e Isole Fær Øer sono territori danesi ma restano fuori da Schengen e dall\'unione doganale europea: per Copenaghen non cambia nulla, ma è utile saperlo per chi pensa a un\'estensione.',
    valuta:
      'Corona danese (DKK): la Danimarca ha un opt-out storico dall\'eurozona (referendum del 2000) e non intende adottare l\'euro. La corona però è agganciata all\'euro con l\'accordo ERM II, con una banda di oscillazione molto stretta (indicativamente 1€ = 7,46 DKK, con variazioni minime). È la valuta più stabile delle tre capitali di questo giro, ma resta una valuta diversa: le carte estere pagano spesso una piccola commissione di cambio.',
    pagamenti:
      'Uno dei paesi al mondo dove si usano meno contanti: carte e contactless funzionano ovunque, molti locali non accettano proprio i contanti e alcuni applicano un piccolo sovrapprezzo alle carte straniere. Non serve cambiare prima di partire; qualche corona in contanti serve solo in casi rari (alcuni mercatini, mance).',
    connettivita: 'Roaming UE incluso nelle tariffe italiane. Copertura 4G/5G ottima in tutta Copenaghen, senza zone scoperte da segnalare.',
    salute: 'Vale la tessera europea di assicurazione malattia (TEAM). Nessuna vaccinazione richiesta. L\'acqua del rubinetto è potabile ovunque, fra le migliori d\'Europa.',
    sicurezza:
      'Copenaghen è una delle capitali più sicure d\'Europa, con pochissima criminalità violenta. L\'attenzione va alle biciclette: le piste ciclabili sono separate e trafficate quanto le strade, e camminare o fermarsi su una pista senza guardare è la causa più comune di incidenti (e di scampanellate furiose) per i turisti a piedi. A Christiania valgono le regole della comunità («have fun, don\'t run, no hard drugs, no guns, no violence»). Pusher Street, dove per decenni si è venduto hashish alla luce del sole, è stata chiusa dalle autorità nel 2024 dopo un episodio di violenza; la vendita di stupefacenti, hashish compreso, è comunque illegale in tutta la Danimarca, e Christiania non è la zona franca che a volte si racconta. Nelle zone segnalate (l\'ex Pusher Street in particolare) è vietato fotografare, e i residenti e le loro case non vanno fotografati senza permesso: le regole sono affisse e i residenti le fanno rispettare con rigore.',
    trasportiInterni:
      'Una rete fitta di metro (senza conducente, attiva 24 ore nei weekend), S-tog (treni suburbani) e bus, con biglietto integrato a zone o Rejsekort ricaricabile. Il centro storico si gira bene anche a piedi o, come fa la gente del posto, in bici a noleggio. La Copenhagen Card include trasporti e ingressi a molte attrazioni, ma conviene solo con un programma molto fitto di musei.',
    costoVita:
      'Fra le capitali più care d\'Europa: una birra al bar 7-11€ (al supermercato molto meno, 2-3€), un cappuccino 4,50-7€, un pasto economico (hot dog, panetteria, mercato) 7-20€, un pranzo in un caffè 17-27€, una cena in un ristorante di fascia media 40-75€ per due persone. Più dei singoli ingressi pesa la somma di pasti e trasporti, giorno dopo giorno.',
    lingua: 'Danese. Quasi tutti parlano bene l\'inglese, soprattutto a Copenaghen: farsi capire non è mai un problema.',
    elettricita: '230V, 50Hz, prese di tipo C e K: le spine italiane di tipo C (due poli, senza terra) entrano senza adattatore; quelle di tipo F o con terra a tre poli possono richiederne uno.',
    fusoOrario: 'UTC+1 (CET), stessa ora dell\'Italia tutto l\'anno, ora legale compresa: nessuna differenza oraria.',
    clima:
      'Clima oceanico temperato, mite per la latitudine grazie al mare. Le estati (giugno-agosto) sono fresche e piacevoli, di rado sopra i 22-25°C, con giornate molto lunghe; gli inverni (dicembre-febbraio) sono freddi, spesso intorno o sotto lo zero, il buio arriva presto nel pomeriggio e il vento si sente più del termometro. Piove spesso tutto l\'anno: un k-way leggero serve in ogni stagione.',
    festivita:
      'Il 5 giugno (Festa della Costituzione) è semifestivo, con molti negozi chiusi il pomeriggio. A Pasqua uffici e alcuni negozi restano chiusi per diversi giorni. A dicembre Tivoli e il centro si preparano per i mercatini di Natale, una delle cose più belle della stagione fredda, con molta gente nei weekend.',
    emergenze: 'Numero unico europeo 112. L\'Ambasciata d\'Italia si trova a Copenaghen.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'Le case colorate del canale di Nyhavn a Copenaghen, con i velieri storici ormeggiati lungo il molo',
  heroImage: '/images/danimarca/danimarca-paese.jpg',
  tripPrincipaleSlug: 'capitali-nordiche',
}
