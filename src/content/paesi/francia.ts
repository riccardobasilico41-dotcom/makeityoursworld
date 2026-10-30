import type { Paese } from '@/lib/types'

// Come l'Italia, la Francia è organizzata per temi e per regioni-carattere
// invece che per divisioni amministrative: Costa Azzurra, Parigi, Normandia e
// Bretagna, Loira, Bordeaux, Provenza e Camargue, Occitania, le rotte dei
// vini, lo sci e la montagna d'estate. La Costa Azzurra è l'unica sezione
// dell'archivio scritta da dentro: due anni vissuti ad Antibes. Nessun nome di
// hotel, ristorante, operatore, rifugio o domaine è stato inventato. Prezzi,
// contingentamenti e regole di accesso (Louvre, Mont-Saint-Michel, Calanques,
// Crit'Air, Bordeaux) cambiano ogni stagione: vanno riverificati.

export const francia: Paese = {
  slug: 'francia',
  nome: 'Francia',
  continente: 'Europa',
  titolo: 'Francia: il paese più visitato del mondo, e quasi sempre nello stesso punto',
  descrizione:
    'Da decenni è la destinazione turistica più visitata del pianeta, e la statistica nasconde il fatto più interessante: quasi tutti quei visitatori si concentrano su Parigi, sulla Costa Azzurra e su una manciata di castelli. Tolto quello, la Francia è un paese enorme e pieno di spazi vuoti, il più esteso dell\'Unione Europea. Ha quattro climi, una costa atlantica che non somiglia in niente a quella mediterranea, il massiccio del Monte Bianco, la più alta densità di denominazioni vinicole al mondo e interi dipartimenti dove il turismo internazionale non arriva. Per questo la racconto per temi e per regioni-carattere, invece che per divisioni amministrative: elencare cosa c\'è serve poco, mentre serve scegliere tra posti che si assomigliano solo sulla carta.',
  periodoMigliore:
    'dipende dalla parte di Francia, e le differenze pesano più che in Italia. **Parigi** dà il meglio da aprile a giugno e a settembre-ottobre, con l\'inverno freddo e umido ma libero dalle code. La **Costa Azzurra** va da maggio a giugno e da metà settembre a ottobre: luglio e agosto sono pieni, cari e bloccati nel traffico, e in quei mesi l\'unica via d\'uscita è l\'entroterra. **Normandia e Bretagna** funzionano da maggio a settembre, con il meteo che resta una variabile in ogni mese dell\'anno. La **Loira** è primaverile e autunnale. La **Provenza** ha la finestra più stretta di tutte se si va per la lavanda, che fiorisce indicativamente **da fine giugno a metà luglio** e viene tagliata subito dopo. Le **rotte dei vini** danno il meglio in vendemmia, tra fine agosto e ottobre. Lo **sci** va da fine dicembre a inizio aprile, la **montagna d\'estate** da metà giugno a metà settembre, quando i rifugi sono aperti. Vale ovunque una regola: **agosto è il mese in cui si sposta tutta la Francia insieme**, e in cui mezza Parigi chiude.',
  durataConsigliata:
    'un lungo fine settimana per Parigi (che però ne chiede cinque), 7-10 giorni per la Costa Azzurra usandola come base, una settimana per la Loira o per Bordeaux con i suoi vigneti, due settimane per Normandia e Bretagna insieme o per una rotta dei vini fatta con calma. Un «giro di Francia» sensato non esiste: il paese è troppo grande e le regioni troppo diverse. Conviene scegliere un tema e farlo bene.',
  budgetIndicativo:
    'alto. Parigi e la Costa Azzurra in alta stagione sono tra le zone più care d\'Europa, il resto del paese sta su livelli molto più umani. Si risparmia soprattutto a pranzo: quasi ovunque il **menù del giorno a mezzogiorno** costa una frazione della stessa cucina servita la sera, ed è così che i francesi mangiano bene senza svenarsi. Poi aiutano i treni prenotati con mesi di anticipo, che possono costare un terzo, e stare lontani dalla settimana di Ferragosto e dalle vacanze scolastiche invernali.',
  stileViaggio: ['città d\'arte', 'mare', 'enogastronomia', 'montagna', 'sci'],
  scheda: {
    documenti:
      'Carta d\'identità per i cittadini UE, passaporto per gli altri. Nessuna formalità di ingresso. L\'unico adempimento, per chi arriva in auto, è la **vignetta Crit\'Air**: se ne parla nella voce sui trasporti interni, perché è la sorpresa più costosa del viaggio.',
    valuta: 'Euro. Nessun cambio da fare.',
    pagamenti:
      'Le carte sono accettate quasi ovunque e il contactless è diffusissimo, con tre eccezioni che si incontrano spesso: **molti piccoli esercizi applicano un minimo di spesa per il pagamento con carta** (di solito intorno ai dieci euro) ed è indicato alla cassa; **i mercati di paese, quelli veri, funzionano a contanti**; e **American Express è accettata molto meno che in Italia**. Per i mercati e per i rifugi di montagna conviene avere contanti nel portafoglio.',
    connettivita:
      'La copertura è ottima nelle città e lungo le direttrici principali. I buchi veri sono in alta montagna, nel Massiccio Centrale e in certe zone interne dell\'Occitania: per chi cammina le mappe offline restano una precauzione seria.',
    salute:
      'Sanità di ottimo livello, tessera sanitaria europea valida per i cittadini UE. Sul soccorso in montagna c\'è una distinzione che sorprende chi arriva dall\'Italia: **il soccorso in montagna dei reparti pubblici (PGHM e CRS) in Francia è in linea di principio gratuito**, mentre **il soccorso sulle piste da sci ("secours sur pistes") è a pagamento** e a carico di chi lo riceve, con tariffe fissate dai comuni che per un intervento fuori pista o in quota arrivano a cifre molto alte. Le assicurazioni vendute con lo skipass coprono proprio quella voce e costano pochi euro al giorno: in una settimana bianca è la spesa più sensata.',
    sicurezza:
      'Paese sicuro. I rischi sono borseggi e furti con destrezza nelle zone turistiche: a Parigi la metropolitana nelle ore di punta, gli assi Châtelet-Les Halles, Gare du Nord, Montmartre e Trocadéro, e le trappole classiche del «gioco delle tre carte» e delle petizioni da firmare sotto la Tour Eiffel. Stessa attenzione a Marsiglia e nelle stazioni di Nizza. I rischi più sottovalutati vengono dalla natura: sulla costa mediterranea gli **incendi estivi**, che ogni anno chiudono interi massicci forestali con divieti di accesso decisi la mattina stessa; in montagna i **temporali pomeridiani**; sulle spiagge atlantiche le **correnti di risacca**, che in Bretagna e nelle Landes fanno vittime ogni estate.',
    trasportiInterni:
      'Il **TGV** è eccellente e mette Parigi a poco più di tre ore da Marsiglia. **La prenotazione è obbligatoria** e i prezzi salgono man mano che la data si avvicina: prenotando con mesi di anticipo si può pagare un terzo. Lo stesso operatore ha anche una formula low cost, più economica e più scomoda. I **TER** regionali coprono il resto e non richiedono prenotazione. Per Loira, Provenza, Bretagna interna, Bordeaux e le rotte dei vini **serve l\'auto**. Due avvertenze per chi guida: le **autostrade sono a pedaggio e care**, e soprattutto **molte grandi città hanno una zona a basse emissioni (ZFE) in cui è obbligatorio esporre la vignetta Crit\'Air**. È un adesivo che si ordina online sul sito ufficiale e arriva per posta: va richiesto **settimane prima di partire**, perché senza si rischia la sanzione e in certe fasce non si entra.',
    costoVita:
      'Sono due paesi in uno. Parigi e la Costa Azzurra in stagione hanno prezzi tra i più alti d\'Europa; il Massiccio Centrale, l\'Occitania interna, la Bretagna lontana dalla costa e i dipartimenti agricoli costano molto meno. Ovunque vale il **menù di mezzogiorno**: la stessa cucina, in formula entrée-plat-dessert, a pranzo costa una frazione di quanto costa la sera.',
    lingua:
      'Francese. L\'inglese è meno diffuso che nel resto dell\'Europa occidentale, e fuori dalle zone turistiche può mancare del tutto. C\'è una cosa che vale più di un corso di lingua e quasi nessuno la fa: **si entra sempre dicendo «bonjour» prima di parlare**, in un negozio, in un bar, dal fornaio, e si esce dicendo «au revoir». Da quel saluto dipende il tono di tutto il resto: chi lo salta viene trattato come uno che ha infranto una regola, perché l\'ha infranta.',
    elettricita:
      '230V, 50Hz, **prese di tipo E**, con lo spinotto di terra sporgente dalla presa. Le spine italiane a due poli funzionano; le **schuko tedesche (tipo F) a volte non entrano** in certe prese vecchie, e per chi arriva con caricabatterie e ciabatte è la sorpresa più comune.',
    fusoOrario: 'UTC+1, UTC+2 in ora legale. Stesso fuso dell\'Italia.',
    clima:
      'Quattro climi distinti: anche per questo la Francia non si può raccontare come un blocco unico. L\'**ovest atlantico** (Bretagna, Normandia, costa delle Landes) è oceanico: mite, ventoso, piovoso in ogni stagione, con il tempo che cambia nel giro di un\'ora. L\'**est** è continentale, con inverni freddi ed estati calde. Il **sud mediterraneo** ha estati lunghe e torride e inverni miti, con il **mistral** che soffia nella valle del Rodano e in Provenza per giorni consecutivi, pulisce il cielo e abbassa la temperatura percepita. L\'**arco alpino e pirenaico** ha il suo clima d\'alta quota. Chi va in Bretagna aspettandosi il tempo della Provenza ha sbagliato regione, e cambiare stagione non lo aiuterà.',
    festivita:
      '**Agosto è il tema centrale**, come in Italia ma con una differenza: a Parigi la città si svuota e **molti ristoranti e negozi di quartiere chiudono per tre o quattro settimane**, mentre la costa e la montagna si riempiono. **Maggio è pieno di ponti** (1° maggio, 8 maggio, Ascensione, Pentecoste) e i francesi «font le pont», con weekend lunghi che intasano tutto. L\'informazione più utile riguarda però lo sci: **le vacanze scolastiche invernali sono scaglionate in tre zone** (A, B, C) che si alternano su quattro o cinque settimane tra febbraio e inizio marzo, e **in quel periodo le stazioni sono piene e i prezzi al massimo, a rotazione**. Il calendario delle zone esce con largo anticipo: consultarlo prima di prenotare una settimana bianca fa risparmiare centinaia di euro.',
    emergenze:
      'Numero unico europeo **112**. In alternativa: 15 SAMU (emergenza medica), 17 police, 18 pompiers. Per il soccorso in montagna si chiama il 112 indicando la posizione più precisa possibile.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImage: '/images/francia/francia-paese.jpg',
  heroImageAlt: 'Il Port Vauban di Antibes con gli yacht ormeggiati e la città vecchia sui bastioni, visto dal Fort Carré',
  tripPrincipaleSlug: 'costa-azzurra',
}
