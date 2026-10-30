import type { Paese } from '@/lib/types'

// Primo ingresso dei Paesi Bassi nell'archivio: un solo itinerario, un
// weekend lungo ad Amsterdam (3-4 giorni), nello stesso filone "weekend
// lunghi in Europa" di Cracovia, Parigi, Roma. Non è una guida al paese
// intero: Rotterdam, L'Aia e il resto dei Paesi Bassi restano fuori di
// proposito.
//
// Nessuno ha ancora messo piede ad Amsterdam per conto di questo sito: la
// destinazione resta visitataPersonalmente: false e senza il campo
// miaEsperienza, facoltativo nel tipo Destinazione apposta per questo caso
// (la UI mostra un placeholder editoriale invece di un ricordo inventato,
// vedi src/lib/types.ts e lo stesso trattamento in src/content/paesi/polonia.ts).
// Scheda di ricerca, non un diario: fatti verificabili, senza episodi in
// prima persona.

export const paesiBassi: Paese = {
  slug: 'paesi-bassi',
  nome: 'Paesi Bassi',
  continente: 'Europa',
  titolo: 'Paesi Bassi: Amsterdam in un weekend lungo, tra canali, musei e due ruote',
  descrizione:
    'Per ora sul sito c\'è una sola meta olandese, la più ovvia per cominciare: Amsterdam. La capitale si gira quasi solo a piedi o in bicicletta, e ha l\'anello di canali del Seicento patrimonio UNESCO, i grandi musei (Rijksmuseum, Van Gogh Museum), il quartiere di Jordaan e la Casa di Anna Frank, un luogo da visitare preparati, non da turisti. Rotterdam, L\'Aia e il resto del paese restano fuori: un weekend di tre-quattro giorni basta a malapena per Amsterdam.',
  periodoMigliore:
    'aprile-maggio (tulipani e clima mite) e settembre-ottobre, con meno folla che in piena estate. Giugno-agosto è alta stagione, calda per gli standard olandesi e molto affollata sui canali e nei grandi musei; novembre-marzo è freddo, spesso piovoso e ventoso, ma con code più corte, e a dicembre ci sono i mercatini di Natale.',
  durataConsigliata:
    '3-4 giorni per il centro storico, l\'anello dei canali e i musei principali; il resto dei Paesi Bassi resta fuori.',
  budgetIndicativo:
    'Amsterdam è una delle capitali più care dell\'Europa occidentale, come Parigi o Londra. Le voci fisse che pesano di più sono i biglietti dei musei maggiori (Rijksmuseum e Van Gogh Museum, circa 20-25€ l\'uno) e la Casa di Anna Frank (circa 16€, da prenotare con largo anticipo), più il noleggio bici (10-15€ al giorno) e una crociera sui canali (15-20€).',
  stileViaggio: ['città', 'arte', 'storia', 'cicloturismo'],
  scheda: {
    documenti:
      'I Paesi Bassi sono nell\'Unione Europea e nell\'area Schengen: ai cittadini italiani basta la carta d\'identità valida per l\'espatrio (o il passaporto), senza formalità per soggiorni turistici sotto i tre mesi.',
    valuta:
      'Euro (€), come l\'Italia: nessun cambio necessario.',
    pagamenti:
      'Sui pagamenti digitali è tra i paesi più avanti al mondo, all\'opposto di molte mete turistiche: moltissimi negozi, bar, ristoranti e perfino alcuni mercatini accettano solo carta o contactless, e un certo numero non accetta contanti. È la sorpresa più comune per chi arriva pensando «meglio avere sempre un po\' di contanti»: conviene invece assicurarsi che la propria carta funzioni senza problemi (Maestro/V PAY sono diffuse quanto Visa/Mastercard) e non contare sui contanti come piano B.',
    connettivita:
      'Con una SIM italiana il roaming UE è incluso nelle tariffe normali. Copertura 4G/5G capillare in tutto il paese, Amsterdam compresa.',
    salute:
      'Vale la tessera europea di assicurazione malattia (TEAM). Nessuna vaccinazione richiesta. In tutti i Paesi Bassi l\'acqua del rubinetto è potabile e di buona qualità.',
    sicurezza:
      'Per gli standard europei Amsterdam è una città sicura, ma il centro storico, e in particolare la zona intorno alla Stazione Centrale, Dam Square e il Quartiere a Luci Rosse, è tra i più battuti d\'Europa dai borseggiatori, soprattutto sui tram affollati, in coda ai musei e tra la folla serale. Il rischio tipico della città però sono i ciclisti. Amsterdam ha più biciclette che abitanti e sulle piste ciclabili le bici hanno la precedenza sul serio: camminare o fermarsi distratti su una pista (spesso in asfalto rosso, ben distinta dal marciapiede) è la causa più comune di incidenti e discussioni con i turisti, che non si aspettano un traffico di bici così silenzioso e veloce.',
    trasportiInterni:
      'Il centro si gira benissimo a piedi, ma il modo più naturale di spostarsi è la bicicletta, con noleggi ovunque (10-15€ al giorno). In alternativa tram, autobus e metro GVB coprono la città, con biglietti a tempo o con la OV-chipkaart contactless (sui mezzi si può pagare direttamente con carta di credito o di debito contactless). L\'auto non serve: in centro il traffico privato è scoraggiato e il parcheggio è caro e scarso.',
    costoVita: 'Alto per gli standard europei: un pasto normale al ristorante parte da 20-25€ a testa, una birra al bar 5-6€, un caffè 3-4€.',
    lingua: 'Olandese. L\'inglese lo parlano quasi tutti, e molto bene, non solo nel turismo: è probabilmente il paese europeo dove serve meno conoscere anche solo qualche parola della lingua locale.',
    elettricita: '230V, 50Hz, prese di tipo C ed F: le spine italiane a due poli entrano senza problemi, quelle a tre poli con messa a terra possono richiedere un adattatore.',
    fusoOrario: 'UTC+1 (CET), lo stesso fuso orario dell\'Italia tutto l\'anno, ora legale compresa: nessuna differenza oraria.',
    clima:
      'Oceanico, mite ma instabile tutto l\'anno: piove spesso, anche d\'estate, e il vento (Amsterdam è vicina al mare) si sente soprattutto sui canali e in bicicletta. Le temperature di rado sono estreme, in un senso o nell\'altro, ma un k-way o un ombrello compatto servono in ogni stagione.',
    festivita:
      'Il 27 aprile, Koningsdag (Festa del Re), è l\'evento cittadino più grande dell\'anno: Amsterdam si veste d\'arancione, i canali si riempiono di barche e il centro diventa un unico grande mercatino e festa di strada. La città è bellissima ma affollatissima, e gli alloggi vanno prenotati con largo anticipo. A dicembre mercatini di Natale e luci lungo i canali (Amsterdam Light Festival, da fine novembre a gennaio).',
    emergenze: 'Numero unico europeo 112. L\'Ambasciata d\'Italia è all\'Aia; ad Amsterdam c\'è un Consolato Generale d\'Italia.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'Case a schiera con i frontoni a gradino lungo un canale di Amsterdam, con le case galleggianti ormeggiate in primo piano',
  heroImage: '/images/paesi-bassi/paesi-bassi-paese.jpg',
  tripPrincipaleSlug: 'amsterdam-weekend',
}
