import type { Paese } from '@/lib/types'

// Prima uscita lituana dell'archivio, collegata al viaggio combinato
// "Capitali baltiche in 9 giorni: Vilnius, Riga e Tallinn"
// (src/content/viaggi/61-capitali-baltiche.md). Nessuno ha ancora messo
// piede in nessuno dei tre paesi baltici per conto di questo sito:
// visitataPersonalmente resta false su ogni destinazione ed esperienza, e il
// campo miaEsperienza è assente di proposito ovunque — niente ricordo
// inventato, solo fatti verificati con ricerca (stesso trattamento usato per
// la Polonia in src/content/paesi/polonia.ts e per i monumenti non visitati
// in src/content/meraviglie.ts).
//
// tripPrincipaleSlug punta all'itinerario combinato ed è impostato allo
// stesso modo su lituania.ts, lettonia.ts ed estonia.ts, seguendo lo stesso
// pattern di belize.ts/guatemala.ts/panama.ts per il Centro America: un solo
// viaggio, tre Paesi che vi puntano tutti. La Lituania è anche il Paese
// scelto come paeseSlug canonico del TripMeta, perché Vilnius è la tappa di
// apertura dell'itinerario (vedi la nota in
// viaggi-dati/capitali-baltiche.ts).

export const lituania: Paese = {
  slug: 'lituania',
  nome: 'Lituania',
  continente: 'Europa',
  titolo: 'Lituania: Vilnius barocca, la Repubblica di Užupis e il castello sul lago di Trakai',
  descrizione:
    'Vilnius è la più meridionale e la più popolosa delle tre capitali baltiche. Ha il centro storico barocco più esteso dell\'Europa centro-orientale, patrimonio UNESCO, e lì dentro un quartiere che il primo aprile di ogni anno festeggia la sua indipendenza di repubblica autoproclamata, per gioco ma non troppo. A mezz\'ora di treno c\'è Trakai, con il castello gotico in mattoni rossi su un\'isola del lago Galvė: lo costruirono nel Quattrocento i granduchi di Lituania ed è la gita fuori porta più fotografata del paese. Sul sito, per ora, la Lituania è la prima tappa dell\'itinerario combinato delle tre capitali baltiche: Vilnius apre il viaggio, prima di Riga e Tallinn.',
  periodoMigliore:
    'maggio-settembre. Giugno-agosto è il periodo più caldo e con più ore di luce (fino a 17 ore a fine giugno), ma anche il più affollato e caro; maggio e settembre restano miti, con meno turisti. Da novembre a marzo il freddo è pungente, spesso sotto zero, e da dicembre a febbraio può nevicare. La Città Vecchia vale la visita anche allora, soprattutto con i mercatini di Natale.',
  durataConsigliata:
    '3 giorni per Vilnius (Città Vecchia e Užupis) e la gita a Trakai, come prima tappa di un itinerario più ampio verso Riga e Tallinn. Bastano anche per un weekend lungo dedicato solo alla Lituania.',
  budgetIndicativo:
    'tra le capitali europee più economiche, anche se è nell\'eurozona: pasto normale 8-15€, birra locale 3-4€, Torre di Gediminas 8€ (più 2-3€ di funicolare), Castello dell\'Isola di Trakai 12-14€ secondo la stagione.',
  stileViaggio: ['città', 'storia', 'arte', 'natura'],
  scheda: {
    documenti:
      'La Lituania è nell\'Unione Europea, nell\'area Schengen e nell\'eurozona: ai cittadini italiani basta la carta d\'identità valida per l\'espatrio (o il passaporto), senza formalità per soggiorni turistici sotto i novanta giorni.',
    valuta:
      'Euro, dal 2015: è stato l\'ultimo dei tre Baltici ad adottarlo, dopo Estonia (2011) e Lettonia (2014). A differenza di mete come la Polonia, non c\'è nessun cambio da fare.',
    pagamenti:
      'Sui pagamenti digitali il paese è molto avanti: carta e contactless funzionano quasi ovunque, anche sui bus urbani e ai mercatini. I contanti servono per i piccoli acquisti a Trakai e per qualche bancarella del centro.',
    connettivita:
      'Con una SIM italiana il roaming UE è incluso nelle tariffe normali. La copertura 4G/5G è molto buona a Vilnius e lungo le strade principali, e la Lituania è tra i paesi europei con l\'internet mobile più veloce.',
    salute:
      'La tessera europea di assicurazione malattia (TEAM) è valida. Non sono richieste vaccinazioni. A Vilnius l\'acqua del rubinetto è potabile.',
    sicurezza:
      'Per gli standard europei Vilnius è una capitale sicura: basta la normale attenzione ai borseggi nelle zone più turistiche e sui mezzi affollati. Chi organizza il viaggio tenga presente che la Lituania confina a est e sud-est con la Bielorussia e a nord-est con l\'enclave russa di Kaliningrad. Questo itinerario (Vilnius, Trakai, poi Riga e Tallinn verso nord) resta tutto nel corridoio turistico occidentale del paese e non si avvicina a quelle zone di confine, che sono comunque fuori da qualunque percorso turistico standard.',
    trasportiInterni:
      'Il centro storico di Vilnius si gira tutto a piedi. Per il resto della città ci sono bus e filobus (rete Vilniaus viešasis transportas), economici, con biglietti a tempo o la carta ricaricabile Vilniečio kortelė. Per Trakai si prende il treno regionale (circa 34 minuti) o il bus (circa 35 minuti) dalla stazione centrale di Vilnius: entrambi costano poco e sono frequenti. Per questa tappa l\'auto a noleggio non serve.',
    costoVita:
      'Basso per gli standard dell\'Europa occidentale e nordica, anche pagando in euro: un pasto in un bar tradizionale costa pochi euro, una cena normale 10-15€ a testa, una birra artigianale locale 3-5€. Più cara di Cracovia (dove si paga in złoty), ma molto più economica delle capitali nordiche presenti altrove sul sito (Oslo, Stoccolma, Reykjavík).',
    lingua:
      'Lituano, una lingua baltica con un alfabeto latino esteso (lettere come ą, č, ę, š, ų, ž). È una lingua indoeuropea arcaica, che i linguisti citano spesso perché ha conservato molti tratti antichi. Con il lettone è imparentata solo alla lontana: nonostante la vicinanza, chi parla l\'una non capisce l\'altra. A Vilnius l\'inglese è diffuso tra i più giovani e nel turismo, meno nelle campagne.',
    elettricita: '230V, 50Hz, prese di tipo C ed F: le spine italiane a due poli entrano senza problemi.',
    fusoOrario:
      'UTC+2 in inverno, UTC+3 in estate (EET/EEST): un\'ora avanti rispetto all\'Italia tutto l\'anno, con il cambio dell\'ora legale nello stesso weekend europeo.',
    clima:
      'Continentale umido. Gli inverni sono freddi, spesso sotto zero da dicembre a febbraio, e può nevicare; le estati, da giugno ad agosto, sono miti e piacevoli, con giornate lunghissime intorno al solstizio. Le stagioni di mezzo (maggio, settembre) sono il miglior compromesso tra clima e affollamento.',
    festivita:
      'Il 1° aprile Užupis festeggia il suo "giorno dell\'indipendenza" con eventi in tutto il quartiere. Il solstizio d\'estate (fine giugno, festa di Rasos/Joninės) è tra le ricorrenze più sentite del paese, con fuochi e canti fino all\'alba. A dicembre ci sono i mercatini di Natale intorno a Piazza della Cattedrale, nella Città Vecchia.',
    emergenze: 'Numero unico europeo 112. L\'Ambasciata d\'Italia è a Vilnius.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'Piazza della Cattedrale a Vilnius con la Cattedrale neoclassica, il campanile e la statua di Gediminas',
  heroImage: '/images/lituania/lituania-paese.jpg',
  tripPrincipaleSlug: 'capitali-baltiche',
}
