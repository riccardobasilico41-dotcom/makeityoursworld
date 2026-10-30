import type { Paese } from '@/lib/types'

// L\'Italia è organizzata per temi invece che per regioni: montagna estiva,
// sci, grandi città, isole, Italia inesplorata e rotte del vino. È l\'unico
// Paese dell\'archivio in cui le "destinazioni" sono in parte collezioni
// tematiche, perché è l\'unico che si conosce abbastanza bene da poterlo
// raccontare per criteri di scelta invece che per tappe. Nessun nome di hotel,
// rifugio, ristorante o cantina è stato inventato. Prezzi, contingentamenti e
// regole di accesso (Venezia, Tre Cime, Braies, Pompei, Colosseo) cambiano
// ogni stagione: vanno riverificati.

export const italia: Paese = {
  slug: 'italia',
  nome: 'Italia',
  continente: 'Europa',
  titolo: 'Italia: sei modi di attraversarla, e nessuno la esaurisce',
  descrizione:
    'È il paese che si conosce meglio e che si visita peggio, perché quando ce l\'hai in casa lo rimandi. Ha più siti UNESCO di chiunque altro al mondo, un arco alpino con le Dolomiti dichiarate patrimonio dell\'umanità per ragioni geologiche, ottomila chilometri di costa con due isole grandi come nazioni, quattrocento denominazioni di vino e interi pezzi di Appennino dove non passa nessuno. Questa sezione è divisa per temi e non per regioni (montagna d\'estate, sci, grandi città, isole, Italia inesplorata e rotte del vino), perché elencare cosa c\'è serve meno che aiutare a scegliere.',
  periodoMigliore:
    'dipende da cosa si va a fare, ed è per questo che la sezione è divisa per temi. Le città d\'arte danno il meglio da ottobre a marzo, quando non si muore di caldo e le code si accorciano. Le Dolomiti d\'estate vanno da fine giugno a metà settembre, con i rifugi aperti; lo sci da dicembre a inizio aprile, e marzo è il mese migliore per neve e luce. Le isole vanno bene a maggio, giugno e settembre, non ad agosto; le rotte del vino in vendemmia, tra fine agosto e ottobre. Una regola vale ovunque: **agosto va evitato quasi dappertutto**, perché è il mese in cui si sposta tutto il paese insieme.',
  durataConsigliata:
    'un fine settimana lungo per una grande città, 5-7 giorni per una settimana bianca o per un trekking in Dolomiti, 10-12 giorni per la Sicilia o per una rotta del vino fatta con calma. Sotto le tre settimane un «giro d\'Italia» non ha senso, e anche in tre settimane bisogna scegliere.',
  budgetIndicativo:
    'cambia moltissimo, e conta soprattutto il periodo. Una settimana bianca in Dolomiti in alta stagione costa quanto due settimane nel sud-est asiatico; le stesse piste a metà gennaio o a fine marzo costano il quaranta per cento in meno. Le città d\'arte fuori stagione hanno prezzi accessibili, in primavera no. L\'Italia inesplorata invece costa poco sempre: nell\'Appennino interno si mangia e si dorme con cifre che altrove non esistono più.',
  stileViaggio: ['montagna', 'sci', 'città d\'arte', 'isole', 'enogastronomia'],
  scheda: {
    documenti:
      'Carta d\'identità per i cittadini UE, passaporto per gli altri. Nessuna formalità. L\'unica cosa simile a una tassa d\'ingresso è il **contributo di accesso di Venezia**, che nel 2026 si è pagato in 60 giornate tra aprile e luglio da chi entra in città in giornata senza dormirci: 5 euro con almeno quattro giorni d\'anticipo, 10 euro sotto quella soglia. È una sperimentazione che cambia calendario e condizioni ogni anno, quindi conviene ricontrollarla prima di partire.',
    valuta: 'Euro. Nessun cambio da fare, ma in molti rifugi alpini e in diversi agriturismi dell\'interno non ci sono né il bancomat né la connessione.',
    pagamenti:
      'Le carte sono accettate ovunque per legge e il contactless è molto diffuso. Le eccezioni sono due e si incontrano proprio nei posti migliori: i **rifugi in quota**, dove spesso si paga solo in contanti perché non c\'è linea, e i piccoli produttori di vino e le trattorie di paese nell\'Appennino. In montagna i contanti nello zaino ci vogliono sempre.',
    connettivita:
      'Copertura ottima nelle città e lungo le direttrici principali. I buchi ci sono in due casi: in alta montagna, dove il segnale va e viene e nei rifugi spesso manca del tutto, e in certe valli interne dell\'Appennino centro-meridionale. Per chi cammina le mappe offline sono una precauzione seria.',
    salute:
      'Sanità pubblica di buon livello, tessera sanitaria europea valida per i cittadini UE. Per la montagna vale un discorso a parte: il **soccorso alpino in Italia è a pagamento** e in diverse regioni i costi di un intervento con elicottero sono a carico di chi lo chiama, con cifre che arrivano a migliaia di euro. Un\'assicurazione che copra il soccorso in montagna costa pochi euro l\'anno ed è la spesa più sensata di tutta la sezione; le tessere CAI la includono.',
    sicurezza:
      'Paese sicuro. I rischi sono soprattutto borseggi e truffe nelle zone turistiche delle grandi città: stazioni di Roma e Milano, Rialto e San Marco a Venezia, mezzi pubblici affollati. Nelle città del sud conviene stare più attenti agli oggetti in vista. Il rischio più sottovalutato è ambientale: in montagna i temporali estivi del pomeriggio sono violenti e regolari, e ogni anno causano incidenti a chi parte tardi. La regola alpina è banale e la si ignora sempre: partire presto ed essere al rifugio prima delle due.',
    trasportiInterni:
      'L\'alta velocità ferroviaria funziona benissimo sull\'asse Torino-Milano-Bologna-Firenze-Roma-Napoli-Salerno, con due operatori in concorrenza e prezzi molto più bassi se si prenota con settimane di anticipo. Fuori da quell\'asse la rete regionale è molto più lenta e irregolare, ed è il motivo per cui **per le isole, l\'Appennino e le rotte del vino serve l\'auto**. I traghetti per Sicilia e Sardegna vanno prenotati con mesi di anticipo per luglio e agosto se si imbarca il mezzo. In montagna d\'inverno le catene o le gomme invernali sono obbligatorie per legge su gran parte della rete, con date che variano per regione.',
    costoVita:
      'Sembrano due paesi diversi, a seconda di dove e quando. Nelle città d\'arte in alta stagione e nelle località alpine a Natale e Capodanno i prezzi sono tra i più alti d\'Europa; nell\'Italia interna, nello stesso periodo, un pasto completo con vino costa venti euro e una notte in agriturismo cinquanta. Per costruire un viaggio è la cosa più utile da sapere.',
    lingua:
      'Italiano, con dialetti che in molte zone sono lingue vere e si parlano ogni giorno. In Alto Adige la maggioranza parla tedesco, con toponimi doppi e un bilinguismo ufficiale che confonde chi arriva. L\'inglese è diffuso nelle zone turistiche e molto meno nell\'Italia interna, che è proprio la parte più interessante.',
    elettricita: '230V, 50Hz, prese di tipo L (le italiane a tre poli in linea), C e in crescita F (schuko): nelle strutture nuove le prese schuko sono ormai la norma.',
    fusoOrario: 'UTC+1, UTC+2 in ora legale.',
    clima:
      'Non esiste un clima italiano. L\'arco alpino ha inverni lunghi e nevosi ed estati brevi, con i rifugi aperti solo da fine giugno a metà o fine settembre. La pianura padana ha inverni umidi e nebbiosi ed estati afose. Le coste tirreniche e adriatiche hanno un clima mediterraneo, con estati sempre più torride: le ondate di calore di luglio e agosto rendono le città d\'arte faticose e a volte rischiose. Il sud e le isole hanno estati lunghissime e inverni miti, e sono la scelta giusta ad aprile, maggio e ottobre.',
    festivita:
      '**Il punto è agosto**: nella settimana di Ferragosto il paese si sposta in massa verso il mare e la montagna, i prezzi triplicano, le strade si bloccano e in città molte attività chiudono. Tra Natale e l\'Epifania succede lo stesso sulla neve. Il ponte del 25 aprile-1° maggio e quello del 2 giugno riempiono le città d\'arte, la Settimana Santa muove il sud. In compenso ogni paese ha la sua festa patronale, e nell\'Italia interna resta l\'evento più vivo dell\'anno.',
    emergenze: 'Numero unico europeo 112. Soccorso alpino attraverso il 112, specificando la posizione: le app che trasmettono le coordinate esatte sono utili quanto un\'assicurazione.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImage: '/images/italia/italia-paese.jpg',
  heroImageAlt: 'Prati d\'alta quota e pareti di roccia delle Dolomiti viste dal Monte Piana sotto un cielo di nuvole',
  tripPrincipaleSlug: 'dolomiti-roadtrip',
}
