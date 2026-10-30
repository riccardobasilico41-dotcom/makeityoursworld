import type { Paese } from '@/lib/types'

// Paese trattato soprattutto come destinazione da stopover lungo, che è il
// modo in cui quasi tutti ci arrivano: il confronto tra i programmi stopover
// delle compagnie del Golfo sta nella scheda Dubai. Nessun nome di hotel,
// ristorante o operatore è stato inventato. Regole d\'ingresso e condizioni
// dei programmi stopover cambiano spesso: vanno riverificate sui siti
// ufficiali delle compagnie prima di prenotare.

export const emiratiArabiUniti: Paese = {
  slug: 'emirati-arabi-uniti',
  nome: 'Emirati Arabi Uniti',
  continente: 'Medio Oriente',
  titolo: 'Emirati Arabi Uniti: lo scalo che conviene trasformare in sosta',
  descrizione:
    'Quasi tutti ci passano senza fermarsi, ed è un peccato per una ragione pratica: con i programmi di Emirates ed Etihad la sosta a Dubai o ad Abu Dhabi costa quasi niente, e in due giorni si vede molto più di quanto la fama lasci pensare. Dietro lo skyline e i centri commerciali ci sono un creek con le barche di legno, un souq dell\'oro ancora in attività, una delle moschee più belle del mondo e un Louvre con la cupola forata che filtra la luce come una palma.',
  periodoMigliore:
    'da novembre a marzo, senza dubbi: in quei mesi si sta all\'aperto con 24-28 gradi. Da maggio a settembre si superano spesso i 45 gradi con un\'umidità altissima e si vive solo al chiuso. Detto in modo educato: un viaggio estivo qui è un viaggio sprecato.',
  durataConsigliata:
    '24 ore per uno stopover essenziale, 48 per vedere bene Dubai, 3-4 giorni per aggiungere Abu Dhabi e una notte nel deserto. Oltre i cinque giorni si comincia a ripetersi.',
  budgetIndicativo:
    'molto variabile. Tra i paesi raccontati qui è l\'unico in cui il modo di arrivare cambia il conto: con Dubai Connect o lo stopover Etihad l\'hotel è compreso. Fuori da quei programmi, gli alloggi vanno dai 70€ delle zone vecchie a cifre senza limite sul lungomare. Mangiare invece costa poco: nei quartieri indiani e pakistani si mangia benissimo con meno di 10€.',
  stileViaggio: ['stopover', 'architettura', 'deserto', 'città'],
  scheda: {
    documenti:
      'Passaporto con almeno 6 mesi di validità residua. Ai cittadini italiani non serve un visto in anticipo: all\'arrivo ricevono gratis un permesso valido 180 giorni, con più ingressi e un totale di 90 giorni di soggiorno. È una delle regole d\'ingresso più semplici al mondo, ed è anche il motivo per cui qui gli stopover funzionano senza pratiche.',
    valuta: 'Dirham degli Emirati (AED), agganciato al dollaro USA. Si cambia ovunque, ma di contanti ne servono pochi.',
    pagamenti: 'Le carte si usano quasi ovunque, anche contactless: si può passare una settimana senza toccare un contante. Qualche souq e qualche taxi di quartiere preferiscono ancora i contanti, quindi conviene averne un po\'.',
    connettivita:
      'Copertura eccellente e Wi-Fi ovunque. Una cosa da sapere prima di partire: **le chiamate VoIP sono limitate**. Sulle reti locali WhatsApp, FaceTime e Skype non fanno chiamate audio e video, mentre i messaggi passano. Esistono app di chiamata autorizzate, ma per una sosta breve la soluzione più semplice è una eSIM estera in roaming.',
    salute:
      'Standard sanitari altissimi e nessuna vaccinazione richiesta. Il vero rischio è il caldo: da maggio a settembre stare al sole nelle ore centrali è pericoloso e ci si disidrata in fretta. L\'acqua del rubinetto in teoria è potabile, ma quasi nessuno la beve. L\'assicurazione sanitaria è indispensabile, perché le cure private, che sono la norma, costano moltissimo.',
    sicurezza:
      'Per criminalità comune è tra i paesi più sicuri al mondo: si cammina ovunque a qualsiasi ora. Il problema è un altro, ed è legale. L\'alcol si beve solo nei locali autorizzati e negli hotel, l\'ubriachezza in pubblico è un reato e le effusioni in pubblico vanno contenute. Le leggi su droga e sostanze sono severissime, anche per quantità minime e per farmaci che in Europa sono da banco e qui risultano controllati. Fotografare persone senza permesso, edifici governativi e installazioni militari crea guai veri.',
    trasportiInterni:
      'La metropolitana di Dubai è pulita, economica e copre l\'asse principale della città, aeroporto compreso; si paga con la Nol Card. Taxi e Careem/Uber costano poco per gli standard occidentali. Tra Dubai e Abu Dhabi ci sono autobus frequenti (circa 2 ore) e taxi; dal 2025 si sta costruendo una rete ferroviaria passeggeri che cambierà gli spostamenti. Per il deserto e per Al Ain serve un mezzo proprio o un tour.',
    costoVita:
      'Anche qui ci sono due livelli. Hotel, alcol e attrazioni hanno prezzi da capitale occidentale o più alti; la metropolitana costa pochi dirham e a Deira e Bur Dubai si mangia cucina indiana, pakistana e filippina ottima con pochi euro. Chi sta sul lungomare e beve in hotel spende dieci volte più di chi dorme in città vecchia e mangia nei ristoranti di quartiere.',
    lingua:
      'La lingua ufficiale è l\'arabo, ma quella che si usa davvero è l\'inglese. Gli emiratini sono una minoranza nel loro paese, intorno al 10-12% della popolazione, e la maggior parte dei residenti viene da India, Pakistan, Bangladesh e Filippine. In pratica si parla inglese ovunque, spesso come seconda lingua per entrambi.',
    elettricita: '230V, 50Hz, prese britanniche di tipo G a tre poli rettangolari: serve l\'adattatore, e quello europeo non va bene.',
    fusoOrario: 'UTC+4: 2 ore avanti rispetto all\'Italia con l\'ora legale, 3 in inverno. Comodo per gli stopover verso l\'Asia, meno per quelli al ritorno.',
    clima:
      'Desertico. Da novembre a marzo è perfetto, con 24-28 gradi di giorno e sere fresche. Da aprile la temperatura sale in fretta e tra giugno e settembre si superano spesso i 45 gradi, con l\'umidità della costa che rende l\'aria irrespirabile. Piove pochissimo, ma quando piove la città va in crisi, perché lo scolo dell\'acqua non è pensato per questo. Qualche volta l\'anno le tempeste di sabbia riducono la visibilità.',
    festivita:
      'Durante il **Ramadan** molti ristoranti restano chiusi di giorno o servono solo in aree riservate, mangiare e bere in pubblico alla luce del sole è sconsigliato (in certi contesti anche sanzionato) e tutti gli orari si spostano verso la notte. In compenso le sere del Ramadan sono il momento più interessante dell\'anno, perché l\'iftar diventa un evento sociale aperto a tutti. La Festa Nazionale è il 2 dicembre.',
    emergenze: 'Polizia 999, ambulanza 998, vigili del fuoco 997. L\'Ambasciata d\'Italia è ad Abu Dhabi, e a Dubai c\'è un Consolato generale.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'Lo skyline di Dubai con il Burj Khalifa illuminato di notte e riflesso nell\'acqua',
  heroImage: '/images/emirati-arabi-uniti/emirati-arabi-uniti-paese.jpg',
  tripPrincipaleSlug: 'stopover-golfo',
}
