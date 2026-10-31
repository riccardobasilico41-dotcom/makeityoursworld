import type { Paese } from '@/lib/types'

// La Repubblica Ceca entra nell'archivio con un solo itinerario: un weekend
// lungo a Praga (3-4 giorni), nello stesso filone "weekend lunghi in Europa"
// già usato per Roma, Firenze, Venezia, Parigi e Cracovia. È un viaggio fatto da Rick
// (articolo praga-weekend): la destinazione di Praga è visitataPersonalmente:
// true. Il campo miaEsperienza resta assente finché non arriva un ricordo dell'autore (vedi il commento sul tipo in src/lib/types.ts).

export const repubblicaCeca: Paese = {
  slug: 'repubblica-ceca',
  nome: 'Repubblica Ceca',
  continente: 'Europa',
  titolo: 'Repubblica Ceca: Praga in un weekend lungo, tra Staré Město, il Castello e i boccali di birra più economici d\'Europa',
  descrizione:
    'Per ora sul sito c\'è una sola meta ceca, la più ovvia per cominciare: Praga, la "città dalle cento torri" uscita quasi indenne dai bombardamenti della Seconda guerra mondiale, con uno dei centri storici medievali meglio conservati d\'Europa. La Piazza della Città Vecchia con l\'Orologio Astronomico, il Ponte Carlo che unisce le due rive della Moldava, il colle del Castello con la Cattedrale di San Vito, il quartiere di Malá Strana ai piedi del Castello e quello ebraico di Josefov: tutto sta in un\'area che si gira a piedi in tre-quattro giorni. Per staccare c\'è Vyšehrad, tranquilla, a un\'ora di cammino dal centro più affollato.',
  periodoMigliore:
    'aprile-maggio e settembre-ottobre, con clima mite e senza il pieno dell\'alta stagione. Giugno, luglio e agosto sono caldi e molto affollati, con la Piazza della Città Vecchia e il Ponte Carlo al limite della capienza. Da novembre a marzo fa freddo (spesso sotto zero, a volte nevica), ma la città si gira bene anche d\'inverno, con meno code e, a dicembre, i mercatini di Natale.',
  durataConsigliata:
    '3-4 giorni per il centro storico di Praga (Staré Město, Malá Strana, il Castello, Josefov) più mezza giornata tranquilla a Vyšehrad. La scheda non copre un giro di tutto il paese.',
  budgetIndicativo:
    'fuori dalle zone più turistiche è tra le capitali europee più economiche: pasti, alloggi e trasporti pubblici costano una frazione dell\'Europa occidentale, e nei locali non turistici la birra per tradizione costa meno dell\'acqua in bottiglia. Il conto sale con i ristoranti intorno alla Piazza della Città Vecchia (spesso con menù gonfiati per i turisti) e con i biglietti dei monumenti principali (Castello, quartiere ebraico), che vanno comunque messi in conto.',
  stileViaggio: ['città', 'storia', 'architettura', 'gastronomia'],
  scheda: {
    documenti:
      'La Repubblica Ceca è nell\'Unione Europea e nell\'area Schengen: ai cittadini italiani basta la carta d\'identità valida per l\'espatrio (o il passaporto), senza formalità per soggiorni turistici sotto i tre mesi.',
    valuta:
      'Corona ceca (CZK), non l\'euro. È la sorpresa più comune per chi dà per scontato che "Unione Europea" voglia dire euro: la Repubblica Ceca non è nell\'eurozona e non ha una data fissata per entrarci, quindi si paga in corone ovunque. Alcuni locali turistici intorno alla Piazza della Città Vecchia espongono prezzi "convertiti" in euro a un cambio spesso svantaggioso: meglio pagare sempre in CZK.',
    pagamenti:
      'Sui pagamenti digitali il paese è molto avanti: carta e contactless funzionano quasi ovunque, tram e metro compresi. Il contante resta utile nei locali più tradizionali e per le mance. Attenzione ai cambiavalute più vistosi intorno a Piazza Venceslao e nel centro storico: spesso applicano commissioni nascoste o tassi di acquisto e vendita molto distanti. Meglio prelevare in corone da uno sportello bancario, oppure usare un cambiavalute con un tabellino chiaro, un po\' fuori dall\'asse più turistico.',
    connettivita:
      'Con una SIM italiana il roaming UE è incluso nelle tariffe normali, senza bisogno di una SIM locale. La copertura 4G e 5G è buona in tutta la città.',
    salute:
      'Vale la tessera europea di assicurazione malattia (TEAM). Nessuna vaccinazione richiesta. A Praga l\'acqua del rubinetto è potabile.',
    sicurezza:
      'Per gli standard europei Praga è una città sicura, e la criminalità violenta contro i turisti è molto rara. Il rischio reale sono i piccoli furti e le truffe da zona turistica: **borseggi concentrati sul tram 22** (la linea che sale verso il Castello, spesso presa dai turisti) e nei vagoni affollati della metro, con la tecnica classica della distrazione in coppia; **ristoranti intorno alla Piazza della Città Vecchia e via Karlova** che applicano conti gonfiati, menù senza prezzi, "welcome drink" non richiesti ma addebitati, o pane e antipasti lasciati sul tavolo e fatturati come se fossero stati ordinati; occasionali **finti agenti di polizia** che fermano i turisti per un presunto controllo del biglietto o del passaporto chiedendo di pagare subito una multa in contanti (un vero agente per strada non chiede mai soldi). La regola pratica è semplice: controllare sempre menù e prezzi prima di ordinare, chiedere conferma se arriva in tavola qualcosa che non si è ordinato, e farsi mostrare il tesserino da chiunque dica di essere un poliziotto.',
    trasportiInterni:
      'Il centro storico si gira tutto a piedi. Per il resto della città la rete di metro (tre linee), tram e bus è capillare, puntuale ed economica (biglietti a tempo del sistema PID, da circa 30 a 120 CZK secondo la durata): il biglietto singolo vale su tutti i mezzi e va convalidato a bordo. Per un weekend nel centro di Praga l\'auto a noleggio non serve.',
    costoVita:
      'Fuori dalle zone più turistiche è basso per gli standard dell\'Europa occidentale: un mezzo litro di birra alla spina in un pub di quartiere costa indicativamente 55-80 CZK, contro i 100-150 CZK (o più) dei locali sulla Piazza della Città Vecchia; un pasto normale fuori dal centro turistico costa sui 10-15€ a testa.',
    lingua: 'Ceco. L\'inglese è diffuso nel centro storico, negli hotel e tra i più giovani; cala nei quartieri periferici e tra le generazioni più anziane. Qualche parola di ceco (dobrý den, děkuji) fa sempre piacere.',
    elettricita: '230V, 50Hz, prese di tipo C ed E: le spine italiane a due poli entrano senza problemi, quelle a tre poli con messa a terra possono richiedere un adattatore.',
    fusoOrario: 'UTC+1 (CET), lo stesso fuso dell\'Italia tutto l\'anno, ora legale compresa: nessuna differenza oraria.',
    clima:
      'Continentale. Da dicembre a febbraio gli inverni sono freddi e a tratti nevosi, con temperature spesso sotto zero; da giugno ad agosto le estati sono calde, e luglio e agosto sono anche il picco dell\'affollamento turistico. Primavera e autunno sono le stagioni più equilibrate: meno folla e un clima che permette di camminare tutto il giorno.',
    festivita:
      'A dicembre la Piazza della Città Vecchia e Piazza Venceslao ospitano due dei mercatini di Natale più noti dell\'Europa centrale, con la folla che ne consegue la sera. Il 28 ottobre (Giorno dell\'Indipendenza) e il 6 luglio (Jan Hus) sono tra le feste nazionali più sentite.',
    emergenze: 'Numero unico europeo 112. L\'Ambasciata d\'Italia è a Praga.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'La Piazza della Città Vecchia di Praga con le due guglie gotiche della Chiesa di Santa Maria di Týn e il Palazzo Kinský in una giornata di sole',
  heroImage: '/images/repubblica-ceca/repubblica-ceca-paese.jpg',
  tripPrincipaleSlug: 'praga-weekend',
}
