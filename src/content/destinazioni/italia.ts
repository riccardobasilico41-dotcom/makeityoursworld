import type { Destinazione } from '@/lib/types'

// L\'Italia è organizzata per temi invece che per regioni: vedi il commento in
// src/content/paesi/italia.ts. Nessun nome di hotel, rifugio, ristorante o
// cantina è stato inventato. Prezzi, contingentamenti e regole di accesso
// cambiano ogni stagione e sono la parte che invecchia più in fretta: vanno
// riverificati prima di partire.

export const destinazioniItalia: Destinazione[] = [
  {
    slug: 'dolomiti',
    paeseSlug: 'italia',
    ordine: 1,
    nome: 'Dolomiti d\'estate',
    tipologia: ['montagna', 'trekking', 'natura'],
    giorniConsigliati: '4-5 giorni per una valle, 7-10 per un\'Alta Via completa',
    visitataPersonalmente: true,
    introduzione:
      'Sono patrimonio UNESCO dal 2009 per una ragione che quasi nessuno conosce: sono un archivio geologico. Erano barriere coralline di un mare tropicale di duecentocinquanta milioni di anni fa, poi sollevate e spaccate, e le pareti verticali ne conservano la stratificazione. Si tratta di nove sistemi separati su tre province, e scegliere quale fare è la decisione più importante del viaggio.',
    percheAndarci:
      'Pareti verticali di dolomia, prati di fondovalle e una rete così fitta di rifugi con cucina e posti letto non si trovano insieme da nessun\'altra parte al mondo. Si cammina per giorni senza tenda né cibo, si dorme a tremila metri e si mangiano canederli.',
    cosaVedere: [
      'Le Tre Cime di Lavaredo, con il giro ad anello attorno alla base: **la strada per il Rifugio Auronzo è a pedaggio e dal 2026 richiede prenotazione online obbligatoria**',
      'Il Lago di Braies, punto di partenza dell\'Alta Via 1: **accesso in auto contingentato d\'estate, con prenotazione obbligatoria tra le 9 e le 16**',
      'Seceda, con la cresta erbosa che si spezza di colpo in pareti verticali, e l\'Alpe di Siusi, l\'altopiano alpino più esteso d\'Europa',
      'Il Gruppo del Sella, il massiccio tabulare attorno a cui girano i quattro passi',
      'La Marmolada, la Regina delle Dolomiti, con quello che resta del ghiacciaio',
      'Il Lago di Sorapis e il Lago di Carezza, con l\'acqua di quel turchese lattiginoso dato dalla farina glaciale',
      'Le Cinque Torri e il museo all\'aperto della Grande Guerra, con le trincee restaurate',
    ],
    cosaFare: [
      'Alta Via 1, da Braies a Belluno, il trekking a tappe più bello delle Alpi (vedi la scheda esperienza dedicata)',
      'Il giro delle Tre Cime, l\'escursione più famosa e la più affollata (vedi la scheda esperienza dedicata)',
      'Una via ferrata: sono nate nelle Dolomiti, che hanno la rete più fitta al mondo (vedi la scheda esperienza dedicata)',
      'Dormire in rifugio almeno una notte, anche senza fare un trekking lungo: cambia il rapporto con la montagna',
      'Vedere l\'enrosadira, il rosa che prende le pareti al tramonto e all\'alba per la presenza di dolomia',
    ],
    doveDormire:
      'La scelta della valle conta più della struttura, ed è il senso del confronto qui sotto. In generale i **rifugi** vanno provati almeno una volta e per l\'estate si prenotano da gennaio: camerate comuni, cena alle 19, silenzio alle 22, sacco lenzuolo obbligatorio, quasi sempre solo contanti. In fondovalle gli **agriturismi masi** dell\'Alto Adige hanno un rapporto qualità-prezzo che gli hotel non reggono, ma vanno prenotati con mesi di anticipo per luglio e agosto.',
    doveMangiare:
      'In rifugio la cucina è precisa e ripetitiva, e dopo tre giorni la si ama: canederli in brodo, gulasch, polenta con formaggio fuso e funghi, Kaiserschmarrn come dolce, e la zuppa d\'orzo che è il piatto d\'alta quota per eccellenza. In fondovalle l\'Alto Adige ha una cucina sua, né italiana né austriaca: speck, Schlutzkrapfen (i ravioli di segale con spinaci), strudel, e i Törggelen autunnali nei masi, quando esce il vino nuovo. Da bere, il Lagrein e la Schiava in Alto Adige, il Teroldego in Trentino.',
    comeArrivare:
      "L'auto è il mezzo più pratico, e per certe valli l'unico sensato. In treno si arriva a Bolzano, Bressanone o Calalzo e si prosegue con i bus di valle, buoni in Alto Adige e molto meno in Veneto. Gli aeroporti utili sono Venezia, Verona, Innsbruck e Treviso, a 2-3 ore d'auto dalle valli. Senza auto, da Venezia i bus Cortina Express e ATVO arrivano a Cortina in circa 2 ore e un quarto, a 10-30 € secondo la data.",
    comeSpostarsi:
      'Auto, con l\'avvertenza che **d\'estate i parcheggi dei punti più noti si esauriscono entro le otto del mattino** e diverse strade sono contingentate. I bus dell\'Alto Adige, inclusi nelle card locali di molte strutture, funzionano bene e permettono di lasciare l\'auto ferma; in Veneto la copertura è peggiore. Le funivie estive fanno risparmiare centinaia di metri di dislivello e vanno messe in conto nel budget.',
    periodoMigliore:
      '**da fine giugno a metà settembre**, quando i rifugi sono aperti; prima e dopo gran parte della rete è chiusa e certi sentieri alti hanno ancora neve. Luglio e agosto sono i mesi più affollati e più cari. **Settembre è il mese migliore**: meno gente, aria limpida, bei colori e rifugi aperti fino a fine mese. A giugno i nevai residui sui passi alti sono una variabile seria.',
    costi:
      "Mezza pensione in rifugio indicativamente 60-80€ a persona, con sconti per i soci CAI e delle associazioni alpinistiche affiliate: la tessera si ripaga in tre notti. **Pedaggio per le Tre Cime attorno ai 40€ per auto** (valido 12 ore, con prenotazione obbligatoria), funivie 15-30€ a tratta, noleggio del kit da ferrata 15-25€ al giorno. Budget indicativo al giorno a persona, in doppia: **economico 90-120 €** (rifugi e agriturismi, pranzi in malga), **medio 160-220 €** (hotel di valle e una funivia al giorno), **alto da 300 €** (hotel con spa a Cortina o in Val Gardena).",
    erroriDaEvitare: [
      'Presentarsi alle Tre Cime o a Braies senza prenotazione: dal 2026 la strada delle Tre Cime richiede prenotazione online obbligatoria e Braies contingenta l\'accesso in auto tra le 9 e le 16 in alta stagione. Chi arriva senza torna indietro',
      'Prenotare i rifugi a giugno per agosto: i posti si esauriscono da gennaio-febbraio, e per le camere private anche prima',
      'Partire tardi: i temporali pomeridiani estivi sono regolari e violenti, e la regola alpina è essere al rifugio prima delle due',
      'Andare in quota senza contanti: in molti rifugi la carta non si usa perché non c\'è linea',
      'Sottovalutare il dislivello: nelle Dolomiti i numeri sono bassi in chilometri e alti in metri, e un «sentiero facile» può voler dire ottocento metri di salita',
      'Fare una ferrata senza kit omologato e senza sapere cosa si sta facendo: è la causa più frequente di interventi del soccorso alpino, che in Italia si paga',
    ],
    confronti: [
      {
        titolo: 'Quale zona delle Dolomiti scegliere',
        introduzione:
          'Le Dolomiti non sono un posto ma nove sistemi montuosi su tre province, con lingue, prezzi, affollamento e carattere diversi. Chi sceglie a caso finisce quasi sempre nei due o tre punti più fotografati, che sono anche i più congestionati. Ecco come si dividono.',
        opzioni: [
          {
            nome: 'Val Gardena e Alpe di Siusi',
            sintesi: 'Il cuore turistico dell\'Alto Adige, con Seceda, il Sassolungo e l\'altopiano alpino più esteso d\'Europa. Ladino, tedesco e italiano nella stessa valle.',
            costo: 'fascia alta: è la zona più cara delle Dolomiti insieme a Cortina',
            durata: '4-5 giorni',
            pro: [
              'La densità di panorami iconici più alta di tutte: Seceda, Alpe di Siusi, Sassolungo in pochi chilometri',
              'Impianti estivi numerosi, che rendono accessibili quote alte anche a chi cammina poco',
              'Ottimi servizi, bus di valle efficienti e strutture di livello',
              'Ottima per famiglie e per chi non vuole un trekking impegnativo',
            ],
            contro: [
              'Affollatissima a luglio e agosto: i parcheggi di Seceda e Ortisei si riempiono prestissimo',
              'Molto costruita: il fondovalle è una fila di alberghi e non ha più niente di alpino',
              'I prezzi in alta stagione sono da capogiro',
            ],
            perChi: 'Chi ci va per la prima volta, chi viaggia con famiglia, chi vuole le fotografie che ha visto.',
          },
          {
            nome: 'Cortina e le Dolomiti Ampezzane',
            sintesi: 'Il versante veneto, con Tre Cime, Cinque Torri, Lago di Sorapis e Tofane. Sede olimpica 2026 insieme a Milano.',
            costo: 'fascia alta, con i prezzi di Cortina che condizionano tutta la valle',
            durata: '4-6 giorni',
            pro: [
              'Le Tre Cime, che restano il simbolo delle Dolomiti',
              'Il museo all\'aperto della Grande Guerra alle Cinque Torri, con le trincee restaurate: oltre al paesaggio, c\'è la storia',
              'Accesso comodo a Misurina, Sorapis e al Passo Giau',
            ],
            contro: [
              'Il pedaggio e la prenotazione obbligatoria per le Tre Cime, con code reali nelle ore centrali',
              'Cortina è cara e in alta stagione ha una mondanità che c\'entra poco con la montagna',
              'I lavori e gli interventi legati alle Olimpiadi hanno cambiato la valle: conviene controllare prima cosa è aperto',
            ],
            perChi: 'Chi vuole le Tre Cime e la parte storica della Grande Guerra, e accetta l\'affollamento.',
          },
          {
            nome: 'Val Badia e Alta Badia',
            sintesi: 'Il cuore ladino, attorno al Gruppo del Sella e alle Odle, con il Parco Naturale Fanes-Sennes-Braies alle spalle.',
            costo: 'media-alta, un gradino sotto la Gardena',
            durata: '4-6 giorni',
            pro: [
              'Cultura ladina ancora viva, con lingua e toponomastica proprie',
              'Base perfetta per il giro dei quattro passi e per il gruppo del Sella',
              'Il Parco Fanes-Sennes, uno degli altopiani più belli e meno battuti delle Dolomiti',
              'Cucina di livello altissimo in rapporto alle dimensioni della valle',
            ],
            contro: ['Meno «iconica» nelle fotografie: per alcuni è un pregio, per altri no', 'I passi in alta stagione sono presi d\'assalto dalle moto e dai ciclisti'],
            perChi: 'Chi torna una seconda volta e vuole camminare sul serio senza rinunciare ai servizi.',
          },
          {
            nome: 'Val di Fassa e Pale di San Martino',
            sintesi: 'Il Trentino: Catinaccio, Marmolada, e più a sud l\'altopiano delle Pale, un deserto di roccia a duemilaseicento metri.',
            costo: 'media, parecchio più bassa dell\'Alto Adige',
            durata: '4-6 giorni',
            pro: [
              'Prezzi più accessibili a parità di paesaggio',
              'L\'altopiano delle Pale di San Martino non somiglia a nient\'altro nelle Dolomiti: sembra la luna',
              'Meno affollamento rispetto ai poli altoatesini',
              'Il Catinaccio al tramonto è il posto dove l\'enrosadira dà il meglio',
            ],
            contro: ['Servizi e trasporti pubblici meno curati che in Alto Adige', 'San Martino di Castrozza è lontana dagli altri poli dolomitici'],
            perChi: 'Chi vuole le Dolomiti spendendo meno e con meno gente intorno.',
          },
          {
            nome: 'Dolomiti Friulane e Bellunesi',
            sintesi: 'Il pezzo che quasi nessuno fa: le Dolomiti Friulane, dichiarate «wilderness», e il Parco Nazionale delle Dolomiti Bellunesi.',
            costo: 'bassa: è la zona più economica dell\'intero sistema',
            durata: '3-5 giorni',
            pro: [
              'Si cammina per giornate intere incontrando pochissime persone',
              'Prezzi da altra epoca rispetto all\'Alto Adige',
              'Rifugi piccoli e a conduzione familiare, senza prenotazioni impossibili',
            ],
            contro: [
              'Sentieri meno curati e segnati, con tratti che richiedono più esperienza',
              'Pochi impianti: qui si sale con le gambe',
              'Servizi minimi e trasporti pubblici quasi assenti',
            ],
            perChi: 'Chi ha già fatto le Dolomiti classiche e non sopporta più la coda sul sentiero.',
          },
        ],
        raccomandazione:
          'Prima volta: Val Gardena o Alta Badia, a **settembre** invece che ad agosto, scelta che cambia il viaggio più di qualsiasi altra. Seconda volta: Val di Fassa o Pale di San Martino, per spendere meno e vedere di più. Se il problema principale è la coda sul sentiero, Dolomiti Friulane senza pensarci, sapendo che lì bisogna saper camminare da soli.',
      },
      {
        titolo: 'Rifugio o fondovalle: come dormire in Dolomiti',
        introduzione:
          'È la scelta che decide il tipo di viaggio, e quasi sempre la si fa per abitudine invece che con un criterio. Dormire in quota è più scomodo, e cambia tutto il viaggio.',
        opzioni: [
          {
            nome: 'Rifugio in quota',
            sintesi: 'Camerate comuni o camere piccole a duemila-tremila metri, mezza pensione, cena a orario fisso, silenzio dalle 22.',
            costo: 'mezza pensione indicativamente 60-80€, con sconti soci CAI che rendono la tessera conveniente in tre notti',
            durata: 'da una notte a un\'Alta Via intera',
            pro: [
              'Si è già in quota all\'alba e al tramonto, che sono le due ore per cui vale la pena essere lì',
              'Permette trekking a tappe senza tenda né cibo: è il modello alpino, e altrove non c\'è una rete così fitta',
              'La cena in comune con gli altri escursionisti è metà dell\'esperienza',
              'Sconti importanti per i soci delle associazioni alpinistiche',
            ],
            contro: [
              'Va prenotato da gennaio-febbraio per l\'estate; le camere private molto prima',
              'Sacco lenzuolo obbligatorio, docce a gettone o assenti, camerate rumorose',
              'Spesso **solo contanti**, perché non c\'è linea',
              'Niente di negoziabile: cena alle 19, luci spente alle 22',
            ],
            perChi: 'Chiunque cammini. Almeno una notte va fatta anche da chi non ha intenzione di fare un trekking lungo.',
          },
          {
            nome: 'Maso o agriturismo di fondovalle',
            sintesi: 'Le strutture agricole dell\'Alto Adige e del Trentino, spesso ancora aziende attive, con camere e colazione di produzione propria.',
            costo: 'accessibile rispetto agli hotel, ma va prenotato con mesi di anticipo',
            durata: 'base fissa per 4-7 giorni di escursioni giornaliere',
            pro: [
              'Il miglior rapporto qualità-prezzo della montagna italiana',
              'Colazioni con prodotti dell\'azienda che nessun hotel eguaglia',
              'Base comoda per uscite diverse ogni giorno, senza spostare i bagagli',
              'Molte strutture includono la card dei trasporti pubblici di valle',
            ],
            contro: [
              'Si perdono alba e tramonto in quota, che sono il momento migliore',
              'Servono auto o bus ogni mattina, con i parcheggi che si riempiono presto',
              'Prenotazione con mesi di anticipo per luglio e agosto',
            ],
            perChi: 'Chi fa escursioni in giornata, chi viaggia con bambini, chi vuole una base fissa.',
          },
          {
            nome: 'Hotel in località turistica',
            sintesi: 'Ortisei, Cortina, Canazei, Corvara: servizi completi, spa, mezza pensione.',
            costo: 'da alto a molto alto, con picchi in agosto',
            durata: 'settimana classica',
            pro: ['Comodità totale e servizi di livello', 'Ottimo con famiglie o in caso di meteo pessimo', 'Vicinanza agli impianti e ai bus'],
            contro: ['Il fondovalle turistico ha perso quasi ogni carattere alpino', 'Prezzi alti per quello che si vede, rispetto alle altre due opzioni', 'Si vive la montagna a orario, tra le nove e le cinque'],
            perChi: 'Chi cerca una vacanza più che un\'escursione, e chi ha esigenze di comfort precise.',
          },
        ],
        raccomandazione:
          'La formula che funziona meglio è mista: base in un maso di fondovalle per quattro o cinque giorni di uscite, con **almeno una o due notti in rifugio** nel mezzo. Costa poco di più, e le notti in quota sono quelle che si ricordano. Chi fa un\'Alta Via invece vive in rifugio e basta, e prenota a gennaio.',
      },
    ],
    miaEsperienza:
      'Nelle Dolomiti il paragone con il resto del mondo smette di funzionare, e il campanilismo non c\'entra: pareti verticali, prati alti e una rete così fitta di rifugi con cucina e letti non li ho trovati insieme da nessun\'altra parte. Si cammina otto ore con uno zaino da trenta litri e la sera si mangia polenta e formaggio fuso a duemilacinquecento metri, mentre la parete diventa rosa. L\'enrosadira sembra una trovata da dépliant, invece è un fenomeno reale legato alla composizione della dolomia: la prima volta che si vede una parete accendersi così si capisce perché a questi monti abbiano dato un nome proprio. Detto questo, va detto chiaro che a luglio e agosto certi punti sono diventati impraticabili. Il giro delle Tre Cime nel pieno di agosto è una fila indiana, i parcheggi si esauriscono all\'alba, e nel 2026 hanno dovuto mettere la prenotazione obbligatoria sulla strada. Rinunciare non serve: basta andare a settembre, quando i rifugi sono ancora aperti e c\'è un terzo delle persone, oppure spostarsi di venti chilometri verso le valli che nessuno fotografa.',
    luoghi: [
      {
        "nome": "Tre Cime di Lavaredo",
        "testo": "Tre torri di dolomia che spuntano da un altopiano di ghiaia: il simbolo delle Dolomiti. Il giro ad anello attorno alla base passa per il Rifugio Auronzo, il Rifugio Lavaredo, la Forcella Lavaredo e il Rifugio Locatelli, con la parete nord proprio sopra la testa.",
        "come": "Da Cortina o da Dobbiaco si arriva ad Auronzo o a Misurina, poi si sale in auto sulla strada a pedaggio fino al Rifugio Auronzo (2.320 m), dove parte il giro. In alternativa c'è la navetta da Misurina.",
        "quando": "Dalla tarda primavera all'autunno, quando la strada è aperta: le date si controllano sul portale di prenotazione. Arrivare all'apertura o nel tardo pomeriggio: nelle ore centrali di luglio e agosto il sentiero è una fila continua.",
        "tempo": "3-4 ore per il giro completo (circa 10 km)",
        "costo": "40 euro per auto, 2026; la prenotazione online è obbligatoria e il ticket vale 12 ore dall'orario scelto. La navetta da Misurina al Rifugio Auronzo costa 10 euro a persona al giorno",
        "lat": 46.6122,
        "lng": 12.2961,
        "consiglio": "Ho fatto il giro in agosto e sembrava una fila indiana: a settembre si cammina con un terzo della gente. Se si parte presto, conviene girare in senso orario e salire al Locatelli con la luce laterale del mattino."
      },
      {
        "nome": "Lago di Braies",
        "testo": "Uno dei laghi alpini più fotografati dell'Alto Adige, verde smeraldo, ai piedi della Croda del Becco. Il sentiero attorno al lago è facile e pianeggiante. Da qui parte anche l'Alta Via 1.",
        "come": "Da Dobbiaco si prende la strada della Val di Braies fino al parcheggio sul lago. D'estate l'accesso in auto è contingentato e nelle ore centrali richiede prenotazione: date e orari sul sito del Comune di Braies. In alternativa ci sono bus e navette da Dobbiaco e da Villabassa.",
        "quando": "Da giugno a ottobre. All'alba o nel tardo pomeriggio si ha il lago senza folla; a mezzogiorno d'estate è molto affollato.",
        "tempo": "1 ora per il giro del lago, 3-4 ore con il sentiero fino alla Forcella del Lago",
        "orari": "Dal 1 luglio al 15 settembre 2026, tra le 9 e le 16, in auto si entra nella valle solo con prenotazione online o permesso; prima delle 9 e dopo le 16 l'accesso è libero, e dal 16 settembre le limitazioni finiscono.",
        "lat": 46.69409,
        "lng": 12.08546,
        "consiglio": "Chi dorme nella valle e va al lago all'alba o la sera ha un'altra esperienza. Evitare di noleggiare la barca a mezzogiorno: la coda è lunga e il lago è pieno."
      },
      {
        "nome": "Seceda",
        "testo": "Una cresta erbosa a circa 2.500 metri che a un certo punto si spezza in pareti verticali: il panorama che compare in tutte le cartoline della Val Gardena. Dalla cima si vedono le Odle e, dall'altra parte, tutte le Dolomiti.",
        "come": "Da Ortisei la funivia sale alla Furnes e poi alla Seceda (2.500 m). Dalla cima si può scendere a piedi verso Santa Cristina passando dal Rifugio Firenze.",
        "quando": "Da giugno a ottobre, con funivie aperte in estate. Meglio la prima corsa del mattino: le nuvole salgono di solito in tarda mattinata.",
        "tempo": "mezza giornata; una giornata con la discesa a piedi",
        "costo": "74 € andata e ritorno da Ortisei, 49 € la sola andata (estate 2026)",
        "lat": 46.60059,
        "lng": 11.72579,
        "url": "https://www.seceda.it/it/estate",
        "consiglio": "La discesa a piedi verso Santa Cristina costa fatica nelle gambe ma si lascia la folla all'arrivo della funivia. Portare una giacca: in cima tira vento anche ad agosto."
      },
      {
        "nome": "Alpe di Siusi",
        "testo": "L'altopiano alpino più esteso d'Europa, con prati d'alta quota, malghe e il Sassolungo e lo Sciliar sullo sfondo. È uno dei posti più facili delle Dolomiti: sentieri larghi, pochi dislivelli, ottimo per famiglie e passeggiate lunghe.",
        "come": "Da Siusi allo Sciliar o da Ortisei si sale in cabinovia fino alla Compaccio o al Mont Seuc. Sull'altopiano le auto private non possono salire quasi tutto il giorno: ci si muove a piedi, in bus o in bici.",
        "quando": "Da giugno a ottobre. A fine settembre i larici sono gialli.",
        "tempo": "una giornata",
        "lat": 46.54111,
        "lng": 11.64472,
        "consiglio": "Con le cabinovie si arriva direttamente in quota: si può camminare in piano per ore e rientrare con l'ultima corsa. Controllare l'orario dell'ultima discesa."
      },
      {
        "nome": "Cinque Torri",
        "testo": "Un gruppo di cinque torri di roccia vicino a Cortina, dove durante la Grande Guerra si combatté a pochi metri dal nemico. Oggi è un museo all'aperto con trincee, gallerie e postazioni restaurate, percorribili a piedi.",
        "come": "Dal Passo Falzarego o da Bai de Dones, con la seggiovia fino al Rifugio Scoiattoli, poi si cammina tra le torri e il museo. Cortina è vicina in auto.",
        "quando": "Da fine giugno a metà ottobre, con gli impianti aperti.",
        "tempo": "3-4 ore con la visita al museo all'aperto",
        "orari": "Seggiovia aperta dal 6 giugno all'11 ottobre 2026, prima corsa alle 9, ultima salita e ultima discesa alle 17.",
        "lat": 46.50925,
        "lng": 12.05397,
        "url": "https://www.5torri.it",
        "consiglio": "È una delle poche escursioni facili con la storia dentro il paesaggio: arrivare con un pannello della Grande Guerra in mente rende le torri molto più interessanti."
      },
      {
        "nome": "Lago di Sorapis",
        "testo": "Un lago di montagna a forma di ferro di cavallo, di un turchese lattiginoso dato dalla farina glaciale, sotto le pareti del Sorapis. Il sentiero passa su cenge attrezzate con cavi.",
        "come": "Dal Passo Tre Croci, a pochi chilometri da Cortina, parte il sentiero 215, il più frequentato. Nel tratto finale ci sono passaggi esposti con cavi di sicurezza; servono scarpe da trekking. Al lago è vietato fare il bagno e campeggiare.",
        "quando": "Da fine giugno a settembre. Prima, sui tratti ombrosi, si trova ancora neve.",
        "tempo": "5-6 ore andata e ritorno",
        "costo": "sentiero libero, nessun biglietto",
        "lat": 46.52056,
        "lng": 12.2235,
        "consiglio": "Partire presto: il sentiero è stretto e in alta stagione si fa coda proprio sui cavi. Il lago è il punto più bello alla fine, ma va visitato in un orario in cui ci sia ancora luce."
      },
      {
        "nome": "Pale di San Martino",
        "testo": "Il gruppo trentino che sembra la luna: un altopiano di roccia d'alta quota, senza alberi né prati, circondato da guglie. Le Pale sono uno dei posti meno affollati delle Dolomiti rispetto alla qualità del paesaggio.",
        "come": "Da San Martino di Castrozza la funivia Colverde e la Rosetta portano al Rifugio Rosetta. Da lì si cammina sull'altopiano.",
        "quando": "Da fine giugno a fine settembre. Il tempo cambia in fretta: partire la mattina presto.",
        "tempo": "una giornata",
        "lat": 46.26744,
        "lng": 11.83902,
        "consiglio": "Sull'altopiano non ci sono punti di riferimento e con la nebbia ci si perde: portare una mappa o la traccia GPS scaricata."
      },
      {
        "nome": "Marmolada e Lago di Fedaia",
        "testo": "La cima più alta delle Dolomiti (3.343 m) con il suo ghiacciaio, che si ritira ogni anno. Nel luglio 2022 il crollo di una parte del ghiacciaio ha causato undici morti: oggi la salita alla cima richiede guida e attenzione al meteo.",
        "come": "Dal Passo Fedaia o da Malga Ciapela, con la funivia fino a Punta Rocca. Il lago di Fedaia, sotto, si gira in un'ora.",
        "quando": "Da giugno a settembre; le condizioni del ghiacciaio sono da verificare ogni stagione.",
        "tempo": "mezza giornata con funivia; il giro del lago in un'ora",
        "lat": 46.45971,
        "lng": 11.8691,
        "consiglio": "Chi vuole il ghiacciaio deve andare con una guida alpina e informarsi sulle condizioni prima di partire. Per un'escursione leggera basta il Lago di Fedaia."
      },
      {
        "nome": "Lago di Carezza",
        "testo": "Un lago piccolo a circa 1.500 metri, sotto le guglie del Latemar, con l'acqua che cambia tra verde e blu secondo la luce. È uno dei laghi più fotografati dell'Alto Adige e si vede in poco tempo.",
        "come": "In Val d'Ega, sulla statale tra Bolzano e il Passo di Costalunga. Dal parcheggio a pagamento un sottopasso porta alla riva. Le sponde sono recintate per proteggerle: si gira il lago su un sentiero ad anello.",
        "quando": "Mattina presto, con il lago fermo e il Latemar riflesso. Da maggio a ottobre; a inizio estate il livello è più alto.",
        "tempo": "30-45 minuti",
        "lat": 46.40929,
        "lng": 11.5751,
        "consiglio": "Si combina bene con il Passo di Costalunga e la Val di Fassa nello stesso giorno."
      },
      {
        "nome": "Passo Giau",
        "testo": "Un valico a 2.236 metri tra Cortina e Selva di Cadore, con la parete del Ra Gusela proprio sopra la strada e, di fronte, Cinque Torri, Tofane e Marmolada. Al tramonto è uno dei punti panoramici più belli raggiungibili in auto.",
        "come": "In auto o in moto da Pocol (Cortina) o da Selva di Cadore, su una strada di tornanti. Dal passo partono sentieri verso il Rifugio Nuvolau e le Cinque Torri.",
        "quando": "Al tramonto o la mattina presto. La strada è aperta d'estate; d'inverno può chiudere per neve.",
        "tempo": "1 ora per il panorama, mezza giornata con un sentiero",
        "costo": "strada senza pedaggio",
        "lat": 46.48417,
        "lng": 12.05167,
        "consiglio": "Nei fine settimana d'estate passano molte moto: in settimana e fuori dalle ore centrali è più tranquillo."
      },
      {
        "nome": "Lagazuoi",
        "testo": "Una cima a circa 2.750 metri sopra il Passo Falzarego, con un rifugio panoramico e le gallerie scavate nella roccia durante la Grande Guerra. Dalla terrazza si vedono Tofane, Marmolada e Civetta.",
        "come": "Dal Passo Falzarego la funivia sale al Piccolo Lagazuoi in pochi minuti. Chi ha esperienza può scendere a piedi nelle gallerie di guerra, con casco e torcia frontale.",
        "quando": "D'estate con la funivia aperta. La mattina c'è più visibilità; si può dormire al rifugio per vedere alba e tramonto.",
        "tempo": "mezza giornata",
        "lat": 46.52775,
        "lng": 12.008,
        "url": "https://www.lagazuoi.it",
        "consiglio": "Le gallerie sono buie, ripide e scivolose: servono casco, frontale e scarpe da trekking."
      },
      {
        "nome": "Sass Pordoi e Gruppo del Sella",
        "testo": "La funivia dal Passo Pordoi arriva a quasi 3.000 metri sull'altopiano di roccia del Sella, chiamato la Terrazza delle Dolomiti. Da lì un sentiero porta al Piz Boè, la cima più alta del gruppo.",
        "come": "Dal Passo Pordoi, tra Canazei e Arabba, con la funivia. Il Piz Boè richiede scarpe da montagna e passo sicuro.",
        "quando": "Mattina, prima che salgano le nuvole. Funivia aperta in estate.",
        "tempo": "mezza giornata; una giornata con il Piz Boè",
        "lat": 46.50061,
        "lng": 11.80641,
        "consiglio": "Sul Sella fa freddo anche ad agosto: giacca e strati."
      },
      {
        "nome": "Lago di Misurina",
        "testo": "Un lago a circa 1.750 metri lungo la strada per le Tre Cime, con il Sorapis riflesso nell'acqua. Ha una passeggiata pianeggiante tutto intorno e da qui partono le navette per il Rifugio Auronzo.",
        "come": "In auto da Cortina o da Auronzo. Parcheggi sulla riva; il giro del lago si fa a piedi.",
        "quando": "Alba o tardo pomeriggio. Si visita tutto l'anno, d'inverno ghiacciato.",
        "tempo": "1 ora",
        "costo": "ingresso libero",
        "lat": 46.58194,
        "lng": 12.25389,
        "consiglio": "Chi non trova posto al pedaggio delle Tre Cime può lasciare l'auto qui e salire in navetta."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Salire con la prima funivia da Ortisei alla Seceda e camminare sulla cresta fino alla Cima Pana.",
          "Scendere a piedi verso il Rifugio Firenze e pranzare con canederli e orzotto.",
          "Nel pomeriggio proseguire fino a Santa Cristina e rientrare in bus a Ortisei.",
          "Cena a Ortisei con speck, Schlutzkrapfen e un bicchiere di Lagrein."
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1, Val Gardena: prima funivia per la Seceda, discesa a piedi verso il Rifugio Firenze e Santa Cristina, sera a Ortisei.",
          "Giorno 2, Alpe di Siusi o Sass Pordoi: cabinovia fino all'altopiano e giro tra le malghe, oppure funivia del Pordoi sul Sella; al ritorno, sosta al Lago di Carezza."
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1, Alpe di Siusi: salire in cabinovia da Siusi, camminare sull'altopiano per tutto il giorno fino a una malga per pranzo, rientrare con l'ultima corsa.",
          "Giorno 2, Seceda e Val Gardena: partire all'apertura della funivia, camminare fino al Rifugio Firenze e scendere a Santa Cristina nel pomeriggio.",
          "Giorno 3, Passo Gardena e Sella: salire con la funivia dal passo e fare un giro corto sull'altopiano del Sella; la sera cena in baita."
        ]
      },
      {
        "titolo": "5 giorni",
        "tappe": [
          "Giorno 1: arrivo a Cortina o a Dobbiaco, pomeriggio al Lago di Braies per il giro del lago.",
          "Giorno 2: Tre Cime di Lavaredo con prenotazione del pedaggio fatta in anticipo, partendo all'apertura.",
          "Giorno 3: Cinque Torri e museo della Grande Guerra, poi Passo Falzarego.",
          "Giorno 4: Lago di Sorapis dal Passo Tre Croci, con partenza presto.",
          "Giorno 5: Alpe di Siusi o Seceda, scendendo in Val Gardena per il rientro."
        ]
      }
    ],
    zone: [
      {
        "nome": "Val Gardena (Ortisei, Santa Cristina, Selva)",
        "perChi": "primo viaggio, famiglie, chi vuole servizi",
        "testo": "Il polo più attrezzato: impianti numerosi, bus di valle, ottimi ristoranti. In alta stagione è cara e affollata, il fondovalle è costruito. Le funivie portano subito alla Seceda e all'Alpe di Siusi.",
        "fascia": "180-350 €"
      },
      {
        "nome": "Val Badia e Alta Badia (Corvara, La Villa, San Cassiano)",
        "perChi": "chi torna e vuole camminare sul serio",
        "testo": "Cultura ladina viva, ottima cucina, base per il Sella e per il Parco Fanes-Sennes-Braies. Un gradino più economica della Gardena. I passi in estate sono pieni di moto e bici.",
        "fascia": "160-320 €"
      },
      {
        "nome": "Cortina d'Ampezzo e Misurina",
        "perChi": "Tre Cime, Cinque Torri, Sorapis, storia della Grande Guerra",
        "testo": "Vicina ai posti più noti, ma cara e con la mondanità di una località da gran mondo. Dopo le Olimpiadi 2026 conviene controllare cosa è aperto e quali cantieri ci sono. Misurina è più piccola, sul lago, e più vicina alle Tre Cime.",
        "fascia": "200-400 €"
      },
      {
        "nome": "Val di Fassa e San Martino di Castrozza",
        "perChi": "chi vuole spendere meno",
        "testo": "Prezzi inferiori all'Alto Adige a parità di panorama, con Catinaccio, Marmolada e le Pale. Servizi e trasporti pubblici meno curati, distanze maggiori tra un polo e l'altro.",
        "fascia": "120-220 €"
      }
    ],
    sapori: [
      {
        "nome": "Canederli",
        "testo": "Palle di pane raffermo con speck, in brodo o asciutte con burro fuso. Il piatto che si mangia in ogni rifugio, spesso fatto la mattina."
      },
      {
        "nome": "Schlutzkrapfen",
        "testo": "Ravioli di pasta di segale ripieni di spinaci e ricotta, conditi con burro e parmigiano. Tipici dell'Alto Adige, si trovano in tutte le malghe e nelle trattorie di valle."
      },
      {
        "nome": "Polenta, formaggio e funghi",
        "testo": "Polenta con formaggio fuso e funghi o con salsiccia: il pranzo da rifugio sul versante veneto e trentino."
      },
      {
        "nome": "Kaiserschmarrn",
        "testo": "Frittata dolce spezzata a pezzi, con zucchero a velo e composta di mirtilli rossi. Il dolce di quota dopo una giornata lunga."
      },
      {
        "nome": "Zuppa d'orzo",
        "testo": "Brodo denso di orzo, verdure e speck: il piatto da rifugio per riprendersi dalla fatica."
      },
      {
        "nome": "Strudel",
        "testo": "Il dolce di mele e uvetta dell'Alto Adige, da provare caldo con salsa alla vaniglia. Ogni malga ha il suo."
      }
    ],
    attenzioni: [
      "Prenotare online l'accesso in auto alle Tre Cime e a Braies prima di partire: senza prenotazione la strada o il parcheggio possono essere chiusi, e si torna indietro. Controllare date e orari sul sito del gestore.",
      "Temporali pomeridiani frequenti in estate: bisogna essere al rifugio o a valle prima delle 15. Controllare il bollettino meteo di Alto Adige o Veneto la sera prima e il mattino.",
      "Rifugi: per luglio e agosto prenotare con largo anticipo, portare contanti e il sacco lenzuolo, richiesto in molti rifugi.",
      "Il soccorso alpino in montagna in alcune regioni si paga; conviene un'assicurazione con copertura per il trekking e per l'elisoccorso.",
      "Nelle ferrate usare kit completo omologato (casco, imbrago, dissipatore) e non andare da soli senza esperienza.",
      "Parcheggi: ai punti più noti d'estate i posti finiscono presto la mattina. Molte strade dei passi hanno limitazioni orarie o divieti per le moto in certi giorni: controllare i cartelli."
    ],
    gite: [
      {
        "nome": "Val di Funes e Santa Maddalena",
        "distanza": "35 km da Ortisei, circa 45 minuti in auto",
        "come": "In auto via Chiusa; parcheggio a pagamento sopra Santa Maddalena.",
        "testo": "La chiesetta di San Giovanni in Ranui davanti alle Odle è una delle immagini più note dell'Alto Adige. La valle è tranquilla, con sentieri facili verso le malghe del Parco Puez-Odle."
      },
      {
        "nome": "Bolzano e il Museo di Ötzi",
        "distanza": "35 km da Ortisei, circa 45 minuti in auto",
        "come": "In auto o con i bus di valle fino alla stazione di Bolzano.",
        "testo": "Il capoluogo dell'Alto Adige, con i portici, il mercato di piazza delle Erbe e il Museo Archeologico che conserva l'Uomo venuto dal ghiaccio. Buona alternativa per una giornata di pioggia."
      },
      {
        "nome": "Bressanone",
        "distanza": "30 km dalla Val di Funes, circa 40 minuti in auto",
        "come": "In auto o in treno sulla linea del Brennero.",
        "testo": "Una cittadina vescovile con il duomo, il chiostro affrescato e un centro di portici compatto. Si gira in mezza giornata."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono per le Dolomiti?",
        "risposta": "Per una valle bastano 4-5 giorni, con un'escursione al giorno. Un'Alta Via completa ne chiede 7-10. In un weekend conviene restare in una sola zona, per esempio la Val Gardena."
      },
      {
        "domanda": "Serve la prenotazione per le Tre Cime di Lavaredo?",
        "risposta": "Sì, per salire in auto al Rifugio Auronzo: dal 2026 la strada a pedaggio richiede prenotazione online con fascia oraria, 40 € per auto. In alternativa si sale con la navetta da Misurina."
      },
      {
        "domanda": "Come si entra al Lago di Braies in estate?",
        "risposta": "Dal 1 luglio al 15 settembre 2026, tra le 9 e le 16, in auto si passa solo con prenotazione online. Prima e dopo quelle ore l'accesso è libero; in alternativa bus e navette da Dobbiaco."
      },
      {
        "domanda": "Qual è il periodo migliore per andare nelle Dolomiti?",
        "risposta": "Da fine giugno a metà settembre, quando rifugi e impianti sono aperti. Settembre ha meno gente e aria più limpida; luglio e agosto sono i mesi più cari e affollati."
      },
      {
        "domanda": "Val Gardena o Cortina come base?",
        "risposta": "La Val Gardena è più comoda per Seceda, Alpe di Siusi e Sella, con ottimi bus. Cortina è meglio per Tre Cime, Cinque Torri, Sorapis e Lagazuoi. Entrambe sono care in alta stagione."
      },
      {
        "domanda": "Si può visitare le Dolomiti senza auto?",
        "risposta": "In Alto Adige sì: i bus di valle e le funivie coprono quasi tutto. Sul versante veneto è più difficile, ma Cortina si raggiunge in bus da Venezia e da lì partono navette per i passi."
      }
    ],
    esperienzeSlugs: ['alta-via-1', 'tre-cime-lavaredo', 'via-ferrata-dolomiti'],
    tripSlugs: ['dolomiti-roadtrip'],
    imageAlt: 'Le guglie delle Pale di San Martino che escono dalle nuvole sopra i prati del Passo Rolle, Dolomiti',
    immagine: '/images/italia/pale-san-martino-passo-rolle-riccardo.jpg',
  },
  {
    slug: 'sciare-in-italia',
    paeseSlug: 'italia',
    ordine: 2,
    nome: 'Sciare in Italia',
    tipologia: ['sci', 'montagna', 'inverno'],
    giorniConsigliati: '5-7 giorni per una settimana bianca, 2-3 per un fine settimana lungo',
    visitataPersonalmente: true,
    introduzione:
      'L\'Italia ha una delle offerte sciistiche più grandi al mondo. Il solo Dolomiti Superski mette insieme dodici comprensori e oltre milleduecento chilometri di piste con un unico skipass, e sull\'arco alpino ci sono collegamenti internazionali con Francia e Svizzera, ghiacciai sciabili e stazioni a quota altissima. La vera domanda è quale comprensorio corrisponde al proprio modo di sciare, e quanto si è disposti a spendere.',
    percheAndarci:
      'In Italia il rapporto tra estensione, qualità dei servizi e prezzo regge il confronto con Francia, Svizzera e Austria. E qui, a differenza di quasi tutto l\'arco alpino, in quota si mangia bene: il rifugio a metà pista è un ristorante.',
    cosaVedere: [
      'Il Sellaronda, il giro sciistico attorno al Gruppo del Sella: quattro passi, quattro valli, un giorno intero sugli sci',
      'La Marmolada, con la pista che scende dal ghiacciaio e la vista su tutta la catena',
      'Il Cervino da Breuil-Cervinia, con il collegamento internazionale a Zermatt',
      'Il Monte Bianco da Courmayeur, con lo Skyway e il fuoripista della Vallée Blanche sul versante francese',
      'La Via Lattea, che collega Sestriere, Sauze d\'Oulx, Sansicario e Montgenèvre in Francia',
      'Livigno, zona extradoganale a 1.800 metri, con la neve più affidabile delle Alpi italiane',
    ],
    cosaFare: [
      'Il giro del Sellaronda in giornata, in senso orario o antiorario (vedi la scheda esperienza dedicata)',
      'Sci d\'alba, quando i comprensori aprono gli impianti prima dell\'orario per il primo tracciato sul battuto',
      'Scialpinismo o ciaspole, per chi vuole la montagna invernale senza impianti (vedi la scheda esperienza dedicata)',
      'Pranzare in un rifugio in quota, che in Italia è uno dei motivi per cui si scia',
      'Sciare di notte, dove le piste illuminate restano aperte fino a tardi',
    ],
    doveDormire:
      'Vale la regola opposta a quella estiva: d\'inverno **stare sulle piste conta**, perché mezz\'ora di navetta con gli scarponi ai piedi due volte al giorno pesa. Le formule ski-in/ski-out costano di più e spesso ne vale la pena. La settimana bianca in mezza pensione resta il formato più conveniente, e i pacchetti che includono skipass e noleggio fanno risparmiare parecchio rispetto a comprare tutto separatamente.',
    doveMangiare:
      'Qui l\'Italia batte tutti sulla neve: i rifugi di pista sono veri ristoranti. Si mangiano canederli, polenta, gulasch e casunziei in Dolomiti, polenta concia e fonduta in Valle d\'Aosta, pizzoccheri in Valtellina, e si beve bene. Il conto è più alto che a valle, ma lontano da quelli di Francia e Svizzera. In alta stagione i rifugi migliori vanno prenotati, anche a pranzo.',
    comeArrivare:
      'In auto, con **catene o gomme invernali obbligatorie per legge** su gran parte della rete montana nel periodo invernale, con date che variano da regione a regione. I collegamenti in treno arrivano ai fondovalle principali (Bolzano, Aosta, Tirano, Oulx) e proseguono in bus. Gli aeroporti più utili sono Verona, Venezia, Milano, Torino e Innsbruck, con transfer organizzati verso le stazioni maggiori.',
    comeSpostarsi:
      'Dentro i grandi comprensori gli sci sono il mezzo di trasporto: si attraversano valli intere senza toccare l\'auto. Gli skibus di valle sono in genere inclusi nella tessera ospiti e risolvono l\'ultimo miglio.',
    periodoMigliore:
      'La stagione va da inizio dicembre a metà aprile, ma i periodi sono molto diversi. **Natale e Capodanno** hanno i prezzi più alti dell\'anno e le piste più affollate. **Gennaio dopo l\'Epifania** è il momento migliore per rapporto qualità-prezzo: neve buona, poca gente, prezzi bassi. **Febbraio** è il mese con la neve più affidabile ma coincide con le settimane bianche scolastiche. **Marzo** è il mese migliore per chi scia bene: giornate lunghe, sole, neve ancora buona in quota e prezzi in calo. Ad aprile si scia solo in alta quota e sui ghiacciai.',
    costi:
      'Lo skipass è la voce principale e varia molto. Nel Dolomiti Superski il giornaliero in alta stagione sta attorno agli 86 euro (circa 77 in bassa) e lo stagionale attorno ai 970: sono cifre indicative che vanno riverificate ogni anno. Poi ci sono noleggio (25-45€ al giorno per un set completo), lezioni e pranzo in quota. **Le tariffe scendono parecchio prenotando skipass e alloggio in pacchetto e fuori dai periodi di punta.**',
    erroriDaEvitare: [
      'Prenotare a Natale o a Capodanno senza sapere che sono le due settimane più care dell\'anno, con differenze anche del quaranta per cento rispetto a gennaio',
      'Scegliere il comprensorio per fama invece che per quota: sotto i 1.800 metri, con gli inverni degli ultimi anni, la neve naturale non è più garantita e si scia su innevamento programmato',
      'Comprare skipass e noleggio separatamente quando c\'è il pacchetto: la differenza si sente',
      'Mettersi in strada senza catene o gomme invernali: in Italia è un obbligo di legge, e si rischia la multa',
      'Sottovalutare l\'assicurazione: in Italia **il soccorso in pista e in montagna si paga**, e in diverse regioni un intervento con elicottero costa migliaia di euro. Molti skipass includono una copertura base: conviene controllare cosa copre',
      'Affrontare il fuoripista senza ARTVA, pala, sonda e qualcuno che sappia usarli: senza, lo sport diventa un rischio',
    ],
    confronti: [
      {
        titolo: 'Quale comprensorio sciistico scegliere in Italia',
        introduzione:
          'La scelta si fa quasi sempre per abitudine o per passaparola, e quasi sempre senza considerare i due criteri che contano: la **quota** (che oggi decide se ci sarà neve) e il **tipo di sciata** che si cerca. Ecco i grandi comprensori italiani messi a confronto su quelle basi.',
        opzioni: [
          {
            nome: 'Dolomiti Superski',
            sintesi: 'Il più grande consorzio sciistico al mondo per estensione servita da un unico skipass: dodici comprensori, oltre 1.200 km di piste, dal Sellaronda alla Marmolada a Cortina.',
            costo: 'giornaliero attorno agli 86€ in alta stagione, stagionale attorno ai 970€',
            durata: 'una settimana non basta per vederlo tutto',
            pro: [
              'Un\'estensione che non ha confronti: si scia per giorni senza mai ripetere una pista',
              'Il Sellaronda, un giro completo attorno a un massiccio in giornata, non esiste altrove',
              'Rifugi in quota molto migliori che in Francia e Svizzera',
              'Manutenzione delle piste e innevamento programmato tra i migliori d\'Europa',
              'Panorama: si scia dentro un patrimonio UNESCO',
            ],
            contro: [
              'Lo skipass più caro d\'Italia',
              'Piste in gran parte facili e medie: chi cerca pendenze serie trova meno di quanto l\'estensione faccia sperare',
              'Quote medie non altissime rispetto alla Francia: nelle stagioni scarse si dipende molto dall\'innevamento artificiale',
              'Sellaronda affollato nelle settimane di punta',
            ],
            perChi: 'Chi scia per il piacere di girare, chi mette il paesaggio e il pranzo tra i motivi della giornata, famiglie e livelli intermedi.',
          },
          {
            nome: 'Cervinia-Zermatt (Valle d\'Aosta)',
            sintesi: 'Il comprensorio più alto delle Alpi italiane, con collegamento sciistico internazionale alla svizzera Zermatt e sci estivo sul ghiacciaio del Plateau Rosà.',
            costo: 'alto, con supplemento importante per lo skipass internazionale verso Zermatt',
            durata: '5-7 giorni',
            pro: [
              'Quota altissima: è il comprensorio italiano con la neve più garantita, e si scia fino a tarda primavera',
              'Il collegamento a Zermatt permette di sciare in due paesi nello stesso giorno, sotto il Cervino da entrambi i versanti',
              'Piste lunghissime e larghe, perfette per macinare chilometri',
              'Sci estivo sul ghiacciaio',
            ],
            contro: [
              'Il paese di Cervinia non ha nessun carattere: è una stazione costruita per sciare, senza un centro storico',
              'Esposto al vento e alla nebbia in quota, con chiusure impianti frequenti nelle giornate brutte',
              'Il supplemento per Zermatt è caro',
              'Poche piste difficili in proporzione',
            ],
            perChi: 'Chi vuole la certezza della neve e piste lunghe, e chi ci va a fine stagione quando altrove si scia su fondo marcio.',
          },
          {
            nome: 'Livigno',
            sintesi: 'Zona extradoganale in Alta Valtellina a 1.800 metri di quota minima, con esposizione favorevole e una vocazione forte per snowpark e freestyle. Sede olimpica 2026 per le discipline freestyle e snowboard.',
            costo: 'medio, con il vantaggio dell\'esenzione fiscale su attrezzatura, carburante e alcol',
            durata: '5-7 giorni',
            pro: [
              'Quota di partenza alta e clima secco: tra le stazioni italiane con la neve più affidabile',
              'Zona franca: attrezzatura, carburante e generi vari costano parecchio meno',
              'Lo snowpark è tra i migliori d\'Europa, e le strutture olimpiche hanno alzato ancora il livello',
              'Ottima anche per sci di fondo, con anelli molto estesi',
            ],
            contro: [
              'Arrivarci è lungo: la strada passa da passi alti o dal tunnel, e in caso di neve i tempi si allungano parecchio',
              'Il paese è lungo e sparpagliato, e servono le navette',
              'Estensione del comprensorio inferiore a quella dolomitica',
              'Freddo secco molto intenso a gennaio',
            ],
            perChi: 'Freestyler, snowboarder, chi cerca neve garantita senza i prezzi dolomitici, chi scia anche di fondo.',
          },
          {
            nome: 'Via Lattea (Piemonte)',
            sintesi: 'Sestriere, Sauze d\'Oulx, Sansicario, Claviere e la francese Montgenèvre: quattrocento chilometri di piste con un unico skipass, a un\'ora e mezza da Torino.',
            costo: 'molto più basso del Dolomiti Superski a parità di estensione',
            durata: '4-6 giorni',
            pro: [
              'Il miglior rapporto chilometri-prezzo delle Alpi italiane',
              'Collegamento con la Francia compreso nello skipass completo',
              'Comodissima da Torino e dal nord-ovest: si fa anche in giornata',
              'Piste tecniche di livello olimpico a Sestriere, eredità dei Giochi 2006',
            ],
            contro: [
              'Innevamento meno affidabile dei comprensori alpini più alti, con dipendenza forte dal programmato',
              'Le stazioni sono brutte da vedere, figlie dell\'edilizia degli anni Sessanta e Settanta',
              'Servizi e rifugi non al livello dolomitico',
              'Collegamenti tra i settori a volte lenti',
            ],
            perChi: 'Chi vuole tanti chilometri spendendo poco, chi vive nel nord-ovest, sciatori intermedi e avanzati.',
          },
          {
            nome: 'Monterosa Ski (Valle d\'Aosta e Piemonte)',
            sintesi: 'Champoluc, Gressoney e Alagna collegate tra loro sotto il massiccio del Monte Rosa. È il riferimento italiano per il fuoripista.',
            costo: 'medio',
            durata: '5-7 giorni',
            pro: [
              'Il miglior freeride d\'Italia: Alagna è una delle mete freeride più note d\'Europa',
              'Tre valli walser con un\'identità culturale e architettonica forte, che le stazioni costruite non hanno',
              'Quote alte e versanti nord che tengono bene la neve',
              'Meno affollato dei grandi nomi',
            ],
            contro: [
              'Comprensorio pensato per sciatori esperti: i principianti hanno poco',
              'Il fuoripista qui è serio e richiede attrezzatura di autosoccorso e guida',
              'Collegamenti tra le valli che con vento forte si interrompono',
              'Meno servizi e meno vita serale',
            ],
            perChi: 'Freerider, sciatori esperti, chi cerca la montagna più della stazione sciistica.',
          },
          {
            nome: 'Appennino: Roccaraso, Campo Felice, Abetone, Monte Amiata',
            sintesi: 'Le stazioni appenniniche, dal grande comprensorio di Roccaraso-Rivisondoli in Abruzzo ai poli toscani ed emiliani.',
            costo: 'il più basso di tutti, spesso la metà delle Alpi',
            durata: 'weekend',
            pro: [
              'Prezzi di skipass, alloggio e ristorazione lontanissimi da quelli alpini',
              'Comodità per chi vive nel centro-sud: si scia a poche ore da Roma e da Napoli',
              'Roccaraso ha un\'estensione seria, la maggiore dell\'Appennino',
              'Atmosfera più familiare e meno mondana',
            ],
            contro: [
              'Quote basse: l\'innevamento è la variabile critica e negli ultimi inverni ha vacillato spesso',
              'Stagioni corte e sempre più incerte',
              'Piste meno estese e meno varie',
              'Affollamento pesante nei fine settimana, perché è il bacino di tutto il centro-sud',
            ],
            perChi: 'Chi vive nel centro-sud, chi scia pochi giorni l\'anno, famiglie con budget contenuto.',
          },
        ],
        raccomandazione:
          'Il criterio più utile oggi è la **quota**, perché è quella che decide se ci sarà neve: sopra i duemila metri di partenza si scia con ragionevole certezza, sotto i milleottocento si dipende dal cannone. Per una settimana bianca classica con famiglia o livello intermedio, **Dolomiti Superski**, accettandone il prezzo e andando a gennaio dopo l\'Epifania o a marzo. Per la certezza della neve e per sciare tardi, **Cervinia**. Per il fuoripista, **Monterosa**. Per tanti chilometri a poco, **Via Lattea**. Per il freestyle e la neve garantita senza i prezzi dolomitici, **Livigno**. L\'Appennino ha senso per chi vive nel centro-sud e scia pochi giorni, sapendo che la stagione è diventata una scommessa.',
      },
      {
        titolo: 'Quando andare: le cinque stagioni della settimana bianca',
        introduzione:
          'Nella stessa stazione, nello stesso comprensorio, lo stesso appartamento può costare il doppio a seconda della settimana. Conoscere il calendario è il modo più efficace per risparmiare sulla neve.',
        opzioni: [
          {
            nome: 'Dicembre fino all\'Immacolata',
            sintesi: 'L\'apertura della stagione, con l\'8 dicembre come primo weekend forte.',
            costo: 'basso fuori dal ponte, alto durante',
            durata: 'weekend o pochi giorni',
            pro: ['Prezzi bassi nelle settimane feriali', 'Piste nuove e poca gente', 'L\'aria di inizio stagione'],
            contro: ['Innevamento incerto: spesso è aperta solo una parte del comprensorio', 'Giornate cortissime', 'Il ponte dell\'Immacolata ha già prezzi da alta stagione'],
            perChi: 'Chi vuole sciare presto e accetta che sia aperto a metà.',
          },
          {
            nome: 'Natale e Capodanno',
            sintesi: 'Le due settimane più care dell\'anno, di gran lunga.',
            costo: 'il più alto dell\'anno, con differenze anche del 40% rispetto a gennaio',
            durata: 'settimana',
            pro: ['Eventi e vita serale al massimo', 'Tutti gli impianti aperti', 'Se si viaggia con famiglia, coincide con le vacanze scolastiche'],
            contro: ['Prezzi altissimi su tutto', 'Piste affollate e code agli impianti', 'Va prenotato con mesi di anticipo'],
            perChi: 'Chi non ha alternative per il calendario, e chi cerca l\'atmosfera più che la sciata.',
          },
          {
            nome: 'Gennaio dopo l\'Epifania',
            sintesi: 'La finestra migliore per rapporto qualità-prezzo di tutta la stagione.',
            costo: 'il più basso dell\'alta stagione, spesso con offerte aggressive',
            durata: 'settimana',
            pro: [
              'Prezzi in caduta subito dopo il 6 gennaio',
              'Neve in genere ottima e comprensori tutti aperti',
              'Piste vuote nelle settimane feriali',
            ],
            contro: ['Freddo intenso, con giornate rigide in quota', 'Giornate ancora corte', 'Meno vita serale'],
            perChi: 'Chiunque possa scegliere le date. È la risposta giusta nella maggioranza dei casi.',
          },
          {
            nome: 'Febbraio',
            sintesi: 'Il mese con la neve statisticamente più affidabile, ma coincide con le settimane bianche scolastiche.',
            costo: 'alto, con picchi nelle settimane di vacanza scolastica',
            durata: 'settimana',
            pro: ['Neve al suo meglio', 'Giornate che si allungano', 'Comprensori al massimo dell\'efficienza'],
            contro: ['Affollamento nelle settimane di vacanze scolastiche, che cambiano per regione', 'Prezzi alti', 'Code agli impianti nelle ore centrali'],
            perChi: 'Chi mette la qualità della neve davanti a tutto, evitando le settimane scolastiche della propria regione e delle confinanti.',
          },
          {
            nome: 'Marzo e inizio aprile',
            sintesi: 'La stagione dello sci primaverile: sole, giornate lunghe, prezzi in calo.',
            costo: 'in discesa, con offerte forti a fine stagione',
            durata: 'settimana o weekend',
            pro: [
              'Giornate lunghe e luminose: si scia dalle nove alle cinque',
              'Prezzi parecchio più bassi',
              'Pranzi sulle terrazze dei rifugi, che sono metà del piacere',
              'Poca gente dopo le settimane scolastiche',
            ],
            contro: [
              'La neve si trasforma: dura al mattino, marcia nel pomeriggio, e alle quote basse può sparire',
              'Alcuni impianti chiudono prima',
              'Serve alta quota per avere garanzie',
            ],
            perChi: 'Chi scia bene e sa gestire la neve trasformata, e chi mette il sole tra i motivi per andare in montagna.',
          },
        ],
        raccomandazione:
          '**Gennaio dopo l\'Epifania** se si può scegliere liberamente: stesse piste, stesso comprensorio, quaranta per cento in meno e nessuna coda. **Marzo in alta quota** se si scia bene e si vuole il sole. Natale e Capodanno solo se il calendario non lascia alternative, e in quel caso prenotando con mesi di anticipo.',
      },
    ],
    miaEsperienza:
      'Lo sci italiano si distingue da quello francese o svizzero per il pranzo, più che per la lunghezza delle piste. In Francia si scia forte e si mangia in un self-service; in Dolomiti si fanno quattro ore al mattino, ci si siede in un rifugio a duemilaquattrocento metri e si mangiano canederli e strudel davanti a una parete rosa. Chi scia per fare chilometri lo considera tempo perso, chi ci va per stare in montagna lo considera il motivo. Il Sellaronda, il giro attorno al Gruppo del Sella, è insieme la cosa più bella e la più sopravvalutata. L\'idea è bellissima (quattro passi, quattro valli, un massiccio intero girato sugli sci in una giornata), ma nelle settimane di punta è una coda continua, con le ultime risalite che chiudono prestissimo e il rischio concreto di restare dalla parte sbagliata. Va fatto a gennaio, partendo alle nove. Negli ultimi anni invece è cambiata la quota: sotto i milleottocento metri la neve naturale non è più una garanzia, e scegliere la stazione per fama invece che per altitudine è il modo più rapido per trovare una lingua bianca in mezzo all\'erba.',
    luoghi: [
      {
        "nome": "Sellaronda",
        "testo": "Il giro sugli sci attorno al Gruppo del Sella: quattro passi (Gardena, Sella, Pordoi, Campolongo) e quattro valli (Val Gardena, Val di Fassa, Arabba, Alta Badia). Il giro, circa 40 km, alterna piste e impianti, con le piste facili e medie quasi sempre in alto, e panorami sulle Dolomiti per tutto il percorso.",
        "come": "Si parte da qualunque paese attorno al Sella (Selva, Canazei, Arabba, Corvara) con lo skipass Dolomiti Superski. Il senso orario è segnato con cartelli arancioni, quello antiorario con cartelli verdi.",
        "quando": "In stagione, da dicembre a metà aprile. Partire presto e arrivare all'ultimo impianto prima della chiusura: chi arriva tardi deve rientrare con il taxi.",
        "tempo": "una giornata intera: 4-5 ore sugli sci più pause",
        "costo": "Le tariffe dello skipass Dolomiti Superski cambiano ogni stagione: controllarle sul sito ufficiale prima di partire",
        "url": "https://www.dolomitisuperski.com/",
        "consiglio": "Controllare gli orari dell'ultimo impianto di ogni passo la mattina stessa e portare qualcosa da mangiare in tasca."
      },
      {
        "nome": "Alta Badia e Gran Risa",
        "testo": "La Val Badia ladina ha piste larghe e ben tenute e una cucina tra le migliori sulle Alpi. La Gran Risa, a La Villa, è la pista da Coppa del Mondo di slalom gigante: lunga e ripida.",
        "come": "Si dorme a Corvara, La Villa o San Cassiano e si sale con gli impianti direttamente dal paese. Con lo skipass Dolomiti Superski si raggiunge anche il Sellaronda.",
        "quando": "Da dicembre ad aprile. Gennaio e marzo sono i mesi migliori per neve e prezzi.",
        "tempo": "2-3 giorni per scoprire il comprensorio",
        "url": "https://www.dolomitisuperski.com/",
        "consiglio": "Pranzare in un rifugio in quota e prenotare in alta stagione: i migliori finiscono i tavoli presto."
      },
      {
        "nome": "Cortina d'Ampezzo",
        "testo": "La località olimpica del 2026, con tre aree principali: Tofane, Faloria-Cristallo e Cinque Torri-Lagazuoi. Piste da livello intermedio alle più impegnative, con le pareti delle Tofane come sfondo. L'area del Lagazuoi permette anche il giro sciistico della Grande Guerra.",
        "come": "Si dorme a Cortina e si prende la telecabina o la navetta fino all'impianto di partenza; gli skibus di valle collegano le tre aree.",
        "quando": "Da dicembre ad aprile. Nelle settimane dopo l'Epifania e a fine febbraio i prezzi calano.",
        "tempo": "3-4 giorni",
        "url": "https://www.dolomitisuperski.com/",
        "consiglio": "Dopo le Olimpiadi 2026 alcuni impianti e piste sono stati cambiati: controllare la mappa aggiornata prima di organizzare le giornate."
      },
      {
        "nome": "Cervinia e Zermatt",
        "testo": "Un comprensorio d'alta quota: da Breuil-Cervinia (circa 2.050 m) si sale al Plateau Rosà (circa 3.480 m) e si scia anche d'estate sul ghiacciaio. Con lo skipass internazionale si attraversa il confine con la Svizzera e si scende a Zermatt, sotto il Cervino.",
        "come": "Da Aosta si va a Breuil-Cervinia in auto o con i bus. Gli impianti partono dal paese. Per Zermatt serve lo skipass esteso.",
        "quando": "Da novembre a maggio per la neve in quota; il collegamento con Zermatt dipende dal meteo e dal vento.",
        "tempo": "3-5 giorni; il giro Cervinia-Zermatt richiede una giornata intera",
        "url": "https://www.cervinia.it/",
        "consiglio": "Controllare l'ultimo impianto per tornare dalla Svizzera: se si perde l'ultima corsa, si rientra in taxi o treno con costi alti."
      },
      {
        "nome": "Courmayeur e Skyway Monte Bianco",
        "testo": "Courmayeur si trova ai piedi del Monte Bianco. La funivia Skyway sale fino alla Punta Helbronner (3.466 m): da lì si vede il massiccio da vicino. Le piste sono più corte che nei grandi comprensori ma ci sono itinerari fuoripista famosi, come la Vallée Blanche, da fare solo con guida.",
        "come": "Courmayeur si raggiunge in auto o bus da Aosta. La Skyway parte da Pontal d'Entrèves, a pochi minuti dal centro.",
        "quando": "Dicembre-aprile. Per salire con la Skyway scegliere giornate limpide: con nuvole non c'è panorama.",
        "tempo": "2-3 giorni; la Skyway richiede mezza giornata",
        "url": "https://www.montebianco.com/",
        "consiglio": "Chi vuole la Vallée Blanche deve prenotare una guida alpina in anticipo e controllare le condizioni dei crepacci."
      },
      {
        "nome": "Via Lattea (Sestriere e Sauze d'Oulx)",
        "testo": "Un grande comprensorio piemontese che collega Sestriere, Sauze d'Oulx, Sansicario, Cesana e Claviere, con un passaggio in Francia a Montgenèvre. Sestriere ha ospitato le Olimpiadi del 2006. Le piste sono varie e il carattere è meno di lusso che nelle Dolomiti.",
        "come": "Da Torino in auto lungo la Val di Susa. Da Oulx c'è anche il treno, poi bus fino a Sauze o Sestriere.",
        "quando": "Da dicembre ad aprile. Quote più basse di Cervinia: la neve è meno garantita a inizio e fine stagione.",
        "tempo": "3-5 giorni",
        "url": "https://www.vialattea.it/",
        "consiglio": "Per chi arriva da Torino è la scelta più comoda per un fine settimana: si può fare un weekend senza dormire due notti in macchina."
      },
      {
        "nome": "Livigno",
        "testo": "Zona extradoganale in Valtellina, a 1.816 m, con una neve tra le più affidabili delle Alpi italiane. Piste larghe e tranquille, buone per principianti e famiglie, e un grande snowpark. Qui il carburante, gli alcolici e i profumi costano meno.",
        "come": "Da Milano in auto, passando da Bormio e dal Passo d'Eira, oppure dalla Svizzera con il tunnel Munt la Schera. Controllare la viabilità invernale.",
        "quando": "Da fine novembre ad aprile.",
        "tempo": "3-5 giorni",
        "url": "https://www.livigno.eu/",
        "consiglio": "All'uscita ci sono controlli doganali con limiti sulle quantità di alcol, tabacco e carburante: informarsi prima di fare acquisti."
      },
      {
        "nome": "Marmolada",
        "testo": "Una lunga pista scende dal ghiacciaio, dalla Punta Rocca a Malga Ciapela, con un dislivello molto forte. È una discesa di sci di alta quota, aperta secondo le condizioni di neve.",
        "come": "Da Malga Ciapela, nell'Alto Agordino, si sale con la funivia in tre tronconi fino a Punta Rocca. Da lì si scende a valle seguendo la pista. Gli impianti sono parte del Dolomiti Superski.",
        "quando": "Da dicembre ad aprile, con neve spesso buona a primavera. Gli impianti dipendono dal meteo.",
        "tempo": "mezza giornata per la discesa",
        "url": "https://www.dolomitisuperski.com/",
        "consiglio": "La discesa è lunga: controllare condizioni e tempi dell'ultima corsa e portare con sé un po' di liquidi."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Al mattino presto essere già in funivia a Corvara o a Selva, con skipass Dolomiti Superski e mappa in tasca.",
          "Fare il Sellaronda in senso orario o antiorario, fermandosi per un pranzo veloce in rifugio a metà giornata.",
          "Controllare gli orari dell'ultimo impianto per ogni passo e rientrare prima della chiusura."
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1, Alta Badia: piste larghe e facili per riscaldarsi, pranzo in rifugio, Gran Risa nel pomeriggio.",
          "Giorno 2, Sellaronda in giornata partendo presto.",
          "Giorno 3, Val Gardena o Cortina per cambiare ambiente, con rientro in giornata o serata."
        ]
      },
      {
        "titolo": "7 giorni",
        "tappe": [
          "Giorno 1: giornata di riscaldamento in zona, pomeriggio libero e nessuna fretta.",
          "Giorno 2: Sellaronda in giornata.",
          "Giorno 3: Marmolada con discesa dal ghiacciaio.",
          "Giorno 4: Cortina e Lagazuoi, con giro della Grande Guerra.",
          "Giorno 5: giornata libera, o lezione o sci di fondo.",
          "Giorno 6: Alta Badia e Gran Risa.",
          "Giorno 7: ultima sciata al mattino, rientro nel pomeriggio."
        ]
      }
    ],
    zone: [
      {
        "nome": "Corvara e Alta Badia",
        "perChi": "chi vuole sciare sul Sellaronda dal letto",
        "testo": "Impianti a ridosso dei paesi, ottimi rifugi, cultura ladina. Ski-in/ski-out diffuso, prezzi alti in alta stagione. In serata è tranquilla."
      },
      {
        "nome": "Selva di Val Gardena",
        "perChi": "chi cerca vita serale e servizi",
        "testo": "Paese vivo, con negozi e locali, e il Sellaronda a portata di pedoni. Più affollata di Alta Badia e più cara. Il Passo Gardena è subito a monte."
      },
      {
        "nome": "Breuil-Cervinia",
        "perChi": "sciatori che vogliono la neve garantita",
        "testo": "Quota alta e piste larghe, collegamento con Zermatt. Il paese è costruito per lo sci e ha poco fascino. Vento e nebbia possono chiudere gli impianti alti."
      },
      {
        "nome": "Livigno",
        "perChi": "famiglie, principianti, chi vuole risparmiare su alcuni acquisti",
        "testo": "Neve affidabile, piste facili e prezzi dei beni più bassi per la zona extradoganale. Lontana dalle altre grandi stazioni: si arriva solo in auto o con bus lunghi."
      }
    ],
    sapori: [
      {
        "nome": "Canederli e casunziei",
        "testo": "Canederli in tutta l'area dolomitica; i casunziei sono i ravioli a mezzaluna di Cortina, ripieni di barbabietola e conditi con burro e semi di papavero."
      },
      {
        "nome": "Polenta concia e fonduta valdostana",
        "testo": "In Valle d'Aosta, polenta con formaggio fuso e fonduta con fontina, spesso con pane tostato. Si mangiano nei rifugi e nei ristoranti di Courmayeur e Cervinia."
      },
      {
        "nome": "Pizzoccheri",
        "testo": "Tagliatelle di grano saraceno con verza, patate e formaggio Casera. Tipici di Valtellina e Livigno."
      },
      {
        "nome": "Gulasch e zuppa d'orzo",
        "testo": "Piatti caldi di rifugio in Alto Adige, perfetti per riprendersi a metà giornata sugli sci."
      },
      {
        "nome": "Vin brulé",
        "testo": "Vino rosso caldo con spezie e agrumi. Si beve nelle baite a bordo pista per riscaldarsi, ma l'alcol e lo sci non vanno d'accordo."
      },
      {
        "nome": "Kaiserschmarrn",
        "testo": "Frittata dolce spezzettata con marmellata di mirtilli rossi, il dolce di molti rifugi altoatesini."
      }
    ],
    attenzioni: [
      "Per legge chi pratica scialpinismo, fuoripista o ciaspole in ambiente innevato fuori dalle piste battute deve avere ARTVA, pala e sonda. Il casco è obbligatorio per i minori di 18 anni e l'assicurazione di responsabilità civile è obbligatoria per tutti gli sciatori.",
      "In molte strade di montagna vale l'obbligo di catene a bordo o gomme invernali, di norma dal 15 ottobre al 15 aprile. Controllare l'ordinanza della strada specifica: le date cambiano.",
      "Il soccorso in pista e fuori pista in Italia può essere a pagamento, e l'elicottero è molto caro. Verificare cosa copre lo skipass e prendere un'assicurazione.",
      "A Natale, Capodanno e nelle settimane di febbraio i prezzi salgono molto e le piste sono molto affollate. Prenotare per tempo oppure scegliere gennaio dopo l'Epifania o marzo.",
      "Nelle località più basse la neve naturale non è garantita: controllare webcam e bollettino neve prima di prenotare.",
      "A Cervinia vento e nebbia chiudono gli impianti alti con frequenza: tenere un piano B a quote più basse. A Livigno ci sono controlli doganali all'uscita."
    ],
    esperienzeSlugs: ['sellaronda', 'scialpinismo-ciaspole'],
    tripSlugs: ['settimana-bianca'],
    imageAlt: 'Piste innevate con gli impianti di risalita sopra Madonna di Campiglio e le cime delle Alpi sullo sfondo',
    immagine: '/images/italia/sciare-in-italia.jpg',
  },
  {
    slug: 'roma',
    paeseSlug: 'italia',
    ordine: 3,
    nome: 'Roma',
    tipologia: ['città d\'arte', 'archeologia', 'gastronomia'],
    giorniConsigliati: '4-5 giorni, e non bastano',
    visitataPersonalmente: true,
    introduzione:
      'Tremila anni di strati in un centro storico che è tutto patrimonio UNESCO e che contiene uno stato sovrano. È l\'unica città al mondo dove si scava per una metropolitana, si trova una caserma imperiale e la cosa viene vissuta come un problema logistico più che come una scoperta.',
    percheAndarci:
      'Nessun altro posto ha tanti strati sovrapposti. E a differenza di quasi tutte le grandi città d\'arte europee, Roma è ancora abitata nel suo centro: nei rioni si compra il pane, si litiga e si vive.',
    cosaVedere: [
      'Il Colosseo, il Foro Romano e il Palatino, con il biglietto unico: **nominativo dal 2023, con documento d\'identità obbligatorio all\'ingresso**',
      'I Musei Vaticani e la Cappella Sistina, più San Pietro con la cupola',
      'Il Pantheon, che dal 2023 ha un biglietto d\'ingresso, e la cupola in calcestruzzo non armato più grande mai costruita',
      'Il Foro di Traiano, i Mercati e la Domus Aurea, con visite guidate a numero molto limitato',
      'Trastevere, il Ghetto e Monti: i rioni dove Roma è ancora un posto dove si vive',
      'La Galleria Borghese, a prenotazione obbligatoria con ingressi ogni due ore',
      'L\'Appia Antica e gli acquedotti, la Roma che quasi nessuno mette in programma',
    ],
    cosaFare: [
      'Roma sotterranea: Basilica di San Clemente, Case Romane del Celio, Domus Aurea (vedi la scheda esperienza dedicata)',
      'Camminare l\'Appia Antica la domenica, quando è chiusa al traffico (vedi la scheda esperienza dedicata)',
      'Aperitivo e cena nei rioni invece che attorno ai monumenti: è lì che si mangia bene',
      'Entrare in una decina di chiese a caso: a Roma la pittura di Caravaggio è gratis e spesso non c\'è nessuno',
    ],
    doveDormire:
      'Monti e Trastevere per stare in un rione vivo, Prati per i prezzi più bassi e la comodità della metro A verso il Vaticano, Testaccio per mangiare bene e stare fuori dalla calca. Meglio evitare le zone subito attorno alla Stazione Termini per la sera e l\'area di Fontana di Trevi, che di giorno è impraticabile.',
    doveMangiare:
      'La cucina romana sono quattro paste (cacio e pepe, gricia, amatriciana, carbonara) più il quinto quarto, che pochi provano e che spiega la città meglio delle paste: coda alla vaccinara, trippa, coratella. Da mangiare in trattoria a Testaccio o al Pigneto, non in centro. Il carciofo alla giudia nel Ghetto in stagione (da fine inverno a primavera), la pizza romana sottile e croccante, il supplì come merenda. **La regola più importante: non mangiare in nessun locale con le foto dei piatti fuori o con qualcuno che invita a entrare.**',
    comeArrivare:
      'Volo su Fiumicino (FCO), con il Leonardo Express in 32 minuti per Termini, o su Ciampino (CIA) per i voli low cost. In treno l\'alta velocità collega Roma a Milano in tre ore e a Napoli in poco più di un\'ora. Il Leonardo Express costa 14 € e parte ogni 15 minuti fino alle 23:30 circa; il taxi bianco dalla fila ufficiale ha una tariffa fissa di 55 € entro le Mura Aureliane. Da Ciampino il bus per Termini costa circa 6 € e impiega 40 minuti, il taxi fisso circa 40 €.',
    comeSpostarsi:
      'La metropolitana ha tre linee (poche per una città così, per ragioni archeologiche: ogni scavo trova qualcosa), gli autobus sono lenti e irregolari, i tram utili su alcune direttrici. **Il centro storico si gira a piedi**, ed è l\'unico modo sensato: le distanze sono minori di quanto sembri e quasi tutto è nel raggio di due chilometri.',
    periodoMigliore:
      '**da ottobre a marzo**, senza dubbio. Aprile, maggio e settembre sono bellissimi e pieni di gente; luglio e agosto sono difficili, con temperature che superano i 38 gradi e ondate di calore che rendono la visita faticosa e per alcuni rischiosa. Ad agosto in compenso molti romani sono via e la città cambia faccia, ma molte trattorie sono chiuse.',
    costi:
      'Biglietto unico Colosseo-Foro-Palatino, nominativo e a fascia oraria; Musei Vaticani da prenotare per forza, anche se non è un obbligo formale; Galleria Borghese con ingressi contingentati ogni due ore. Le chiese sono quasi tutte gratuite, e contengono una parte enorme di quello che si viene a vedere. Budget indicativo al giorno a persona, con la doppia divisa in due: basso 70-90 €, medio 130-180 €, alto oltre 250 €.',
    erroriDaEvitare: [
      'Comprare il biglietto del Colosseo sul posto o da rivenditori per strada: è **nominativo**, serve un documento d\'identità originale (non una copia), e dal 2026 il cambio del nominativo è ancora più limitato. Si compra solo sul canale ufficiale, con settimane di anticipo per le fasce migliori',
      'Non prenotare la Galleria Borghese: gli ingressi sono contingentati a fasce di due ore e si esauriscono',
      'Mangiare entro trecento metri da un monumento famoso',
      'Programmare Vaticano e Colosseo lo stesso giorno: sono due mezze giornate pesanti e stanno agli antipodi del centro',
      'Dare per scontato di poter entrare in San Pietro in pantaloncini: il codice di abbigliamento viene controllato all\'ingresso',
      'Andarci a luglio o agosto senza organizzare le giornate attorno al caldo, con i musei nelle ore centrali',
    ],
    miaEsperienza:
      'Roma si visita male proprio perché si crede di conoscerla. La trappola è il triangolo Colosseo-Trevi-Vaticano, fatto in due giorni con la lingua di fuori, in coda, mangiando male. A me sono rimaste due cose che non costano niente. La prima sono le chiese: in San Luigi dei Francesi ci sono tre Caravaggio, si entra gratis e a metà mattina di un martedì di novembre non c\'era quasi nessuno. Si mette un euro nella gettoniera per la luce e si resta dieci minuti davanti alla Vocazione di San Matteo. La seconda è l\'Appia Antica di domenica, chiusa al traffico: si cammina su basoli romani originali tra i sepolcri e i pini, con gli acquedotti in lontananza, e per chilometri ci sono solo ciclisti e famiglie. È a mezz\'ora dal Colosseo, eppure quasi nessuno dei milioni di persone che fotografano il Colosseo ci va. Per mangiare vale una regola sola: allontanarsi. A Testaccio, al Pigneto o a San Lorenzo si mangia una cacio e pepe fatta bene per quindici euro, a cinquecento metri da un posto dove la stessa cosa costa il doppio ed è surgelata.',
    luoghi: [
      {
        "nome": "Colosseo, Foro Romano e Palatino",
        "testo": "L'anfiteatro Flavio, inaugurato nell'80 d.C., ospitava decine di migliaia di spettatori. Con lo stesso biglietto si visitano il Foro Romano, il cuore politico della città antica, e il Palatino, la collina dei palazzi imperiali.",
        "come": "Metro B fino a Colosseo. Il biglietto è nominativo per tutte le tipologie e all'ingresso si mostra il documento. Il biglietto standard vale 24 ore, con un ingresso al Colosseo (senza arena) e uno a Foro e Palatino; le Full Experience (arena, sotterranei, attico) valgono due giorni consecutivi.",
        "quando": "Chiuso il 25 dicembre e il 1 gennaio. Dal 25 ottobre 2026 al 28 febbraio 2027 apre alle 8:30 e chiude alle 16:30, ultimo ingresso alle 15:30; d'estate l'orario è più lungo, sul sito ufficiale. Prima fascia del mattino o ultime ore per evitare le code; d'estate il Foro è molto caldo e senza ombra.",
        "tempo": "mezza giornata, 3-4 ore per tutto",
        "costo": "tariffe sul canale ufficiale; ingresso gratuito la prima domenica del mese, il 25 aprile, il 2 giugno e il 4 novembre",
        "orari": "Tutti i giorni dalle 8:30; chiusura tra le 16:30 d'inverno e le 19:15 d'estate, ultimo ingresso un'ora prima. Chiuso il 25 dicembre e il 1 gennaio.",
        "lat": 41.8902,
        "lng": 12.4922,
        "url": "https://colosseo.it/",
        "consiglio": "Comprare solo dal canale ufficiale e con anticipo per le fasce migliori. Visitare prima il Foro e il Palatino se fa caldo, e il Colosseo dentro verso le ore più fresche."
      },
      {
        "nome": "Musei Vaticani e Cappella Sistina",
        "testo": "Chilometri di sale con collezioni di arte antica e rinascimentale: la Galleria delle Carte Geografiche, le Stanze di Raffaello e, in fondo, la Cappella Sistina con gli affreschi di Michelangelo. Il percorso è lungo e obbligato, con folla continua.",
        "come": "Metro A fino a Ottaviano o Cipro, poi a piedi. Meglio prenotare online dal sito ufficiale per saltare la coda in biglietteria.",
        "quando": "Dal lunedì al sabato 8-20, ultimo ingresso alle 18. Chiusi la domenica, tranne l'ultima del mese (9-14, ultimo ingresso alle 12:30), quando l'ingresso è gratuito e c'è una folla enorme. Chiusi anche in alcune festività religiose: vedere il calendario sul sito. Prima fascia del mattino o fine pomeriggio.",
        "tempo": "3-4 ore",
        "costo": "20 euro intero, 25 euro con la prenotazione online sul sito ufficiale (2026)",
        "orari": "Lunedì-sabato 8-20, ultimo ingresso alle 18. Domenica chiusi, tranne l'ultima del mese (9-14, gratis).",
        "lat": 41.9065,
        "lng": 12.4536,
        "url": "https://www.museivaticani.va/",
        "consiglio": "In Sistina il silenzio e il divieto di fotografare sono controllati dal personale. Decidere prima cosa vedere: nessuno riesce a vederlo tutto."
      },
      {
        "nome": "Basilica di San Pietro e cupola",
        "testo": "Una delle chiese più grandi del mondo, con la Pietà di Michelangelo, il baldacchino del Bernini e la cupola disegnata da Michelangelo. Dalla cupola si vede tutta Roma.",
        "come": "Metro A fino a Ottaviano e a piedi. Si passa per i controlli di sicurezza; l'ingresso alla basilica è gratuito, la salita alla cupola è a pagamento. Spalle e ginocchia devono essere coperte.",
        "quando": "Tutti i giorni, ma chiusa durante le cerimonie papali; il mercoledì mattina c'è l'udienza generale e la zona è molto affollata. Presto al mattino.",
        "tempo": "1-2 ore, più 1 ora per la cupola",
        "costo": "basilica gratuita; cupola a pagamento, con supplemento per l'ascensore",
        "orari": "Tutti i giorni dal primo mattino al tardo pomeriggio; chiusa o con accesso limitato durante le celebrazioni papali.",
        "lat": 41.9022,
        "lng": 12.4539,
        "url": "https://www.basilicasanpietro.va/",
        "consiglio": "Il codice di abbigliamento è controllato: in pantaloncini o con spalle scoperte non si entra. Portare una sciarpa leggera nello zaino."
      },
      {
        "nome": "Pantheon",
        "testo": "Il tempio di tutti gli dèi, rifatto sotto Adriano nel II secolo d.C. La cupola in calcestruzzo non armato è ancora la più grande al mondo del suo genere, con l'oculo aperto al centro da cui entra la luce e anche la pioggia. Dentro sono sepolti Raffaello e i primi re d'Italia.",
        "come": "In centro, tra Piazza Navona e Fontana di Trevi, a piedi. Dal 2023 l'ingresso è a pagamento, con biglietto online o in loco. Durante le funzioni religiose l'accesso è limitato.",
        "quando": "Tutti i giorni 9-19, ultimo ingresso alle 18:30; la prima domenica del mese l'ingresso è gratuito (sito ufficiale). Mattina presto o sera per avere meno gente; con la pioggia l'oculo crea un'atmosfera particolare.",
        "tempo": "30-45 minuti",
        "costo": "7 € (dal 1 luglio 2026); gratis la prima domenica del mese",
        "orari": "Tutti i giorni 9-19, ultimo ingresso alle 18:30.",
        "lat": 41.8986,
        "lng": 12.4769,
        "consiglio": "Controllare in anticipo le regole e il prezzo del biglietto. La piazza all'esterno è affollata e piena di ristoranti turistici: non pranzare lì."
      },
      {
        "nome": "Galleria Borghese",
        "testo": "La collezione del cardinale Scipione Borghese in una villa dentro il parco: Bernini (Apollo e Dafne, il Ratto di Proserpina), Caravaggio, Tiziano e Canova. È una delle raccolte più belle di Roma, con pochi visitatori alla volta.",
        "come": "Dentro Villa Borghese, a piedi da Piazza di Spagna o da Piazzale Flaminio. Prenotazione obbligatoria con ingresso a fasce da due ore.",
        "quando": "Chiusa il lunedì. Le fasce si esauriscono con giorni o settimane di anticipo in alta stagione.",
        "tempo": "2 ore (la visita ha durata fissa)",
        "costo": "circa 18 €: 16 € il biglietto più 2 € di prenotazione obbligatoria (2026)",
        "orari": "Martedì-domenica 9-19, ingressi a fasce di due ore. Chiusa il lunedì.",
        "lat": 41.9142,
        "lng": 12.4922,
        "url": "https://galleriaborghese.cultura.gov.it/",
        "consiglio": "Arrivare un po' prima per il ritiro del biglietto e il guardaroba. Il parco intorno è bello per una passeggiata dopo."
      },
      {
        "nome": "Appia Antica",
        "testo": "La regina delle strade romane, costruita nel 312 a.C. Ci sono i basoli originali, tombe, ville e acquedotti, e le catacombe di San Callisto e San Sebastiano sotto la strada. Il Parco dell'Appia Antica è una delle poche aree verdi grandi vicine al centro.",
        "come": "Dal centro con il bus 118 (fermata Circo Massimo o Colosseo) o con il 660 (dalla metro A Arco di Travertino), poi a piedi; in alternativa in bici a noleggio. La domenica e nei festivi l'Appia è chiusa ai veicoli a motore da Porta San Sebastiano in poi, dalle 9 alle 16 con l'ora solare e dalle 9 alle 18 con l'ora legale.",
        "quando": "Domenica, che è il giorno migliore perché è chiusa alle auto. Le catacombe hanno giorni di chiusura diversi: controllarli sui loro siti prima di andare.",
        "tempo": "mezza giornata",
        "costo": "la strada è libera; catacombe e siti del Parco a pagamento",
        "orari": "Chiusa alle auto la domenica e nei festivi dalle 9 alle 16 (ora solare) o alle 18 (ora legale).",
        "lat": 41.856,
        "lng": 12.515,
        "url": "https://www.parcoappiaantica.it/",
        "consiglio": "L'Appia di domenica non è lontana dal Colosseo e quasi nessuno ci va. Si cammina su basoli originali tra sepolcri e pini, con gli acquedotti in lontananza. Portare acqua: lungo la strada ci sono pochi punti di ristoro."
      },
      {
        "nome": "Basilica di San Clemente",
        "testo": "Una chiesa del XII secolo costruita sopra una basilica del IV secolo, a sua volta sopra edifici romani e un mitreo del II secolo. Scendendo si attraversano mille anni di storia della città in tre livelli.",
        "come": "A pochi minuti a piedi dal Colosseo, in via Labicana. La basilica superiore si visita liberamente, i livelli sotterranei con biglietto.",
        "quando": "Orari con pausa a metà giornata; controllare sul sito. Gli ambienti sotterranei sono umidi e freschi anche d'estate.",
        "tempo": "1 ora",
        "costo": "basilica gratuita; livelli sotterranei a pagamento",
        "lat": 41.8893,
        "lng": 12.4975,
        "url": "https://www.basilicasanclemente.com/",
        "consiglio": "È il modo più semplice di capire cosa vuol dire Roma sotterranea, e sta a due passi dal Colosseo. Spesso si abbina alle Case Romane del Celio."
      },
      {
        "nome": "San Luigi dei Francesi",
        "testo": "La chiesa nazionale dei francesi a Roma, vicino a Piazza Navona. Nella cappella Contarelli ci sono tre tele di Caravaggio su san Matteo: la Vocazione, il Martirio e l'Ispirazione.",
        "come": "A piedi da Piazza Navona o dal Pantheon, in pochi minuti. L'ingresso è gratuito.",
        "quando": "Tutti i giorni con orari spezzati. A metà mattina di un giorno feriale c'è poca gente.",
        "tempo": "20-30 minuti",
        "costo": "ingresso gratuito",
        "lat": 41.8996,
        "lng": 12.4746,
        "consiglio": "Ci sono andato a metà mattina di un martedì di novembre: si può restare dieci minuti davanti alla Vocazione di San Matteo praticamente da soli. Portare monete."
      },
      {
        "nome": "Trastevere e Ghetto ebraico",
        "testo": "Due rioni dove Roma è ancora abitata. Trastevere ha vicoli, osterie e la basilica di Santa Maria in Trastevere con i mosaici dorati. Il Ghetto ebraico, vicino al Portico d'Ottavia, è il posto del carciofo alla giudia.",
        "come": "A piedi dal centro attraversando il Tevere sull'isola Tiberina, oppure con il tram 8 (da piazza Venezia, passando per Largo Argentina).",
        "quando": "Mattina per i vicoli; sera per cena. Trastevere il sabato sera è molto affollata.",
        "tempo": "mezza giornata",
        "costo": "passeggiata gratuita; Santa Maria in Trastevere a ingresso libero",
        "lat": 41.8894,
        "lng": 12.47,
        "consiglio": "Per mangiare bene allontanarsi dai ristoranti con camerieri che invitano a entrare. A Testaccio, al Pigneto o a San Lorenzo si mangia una cacio e pepe fatta bene, spesso a una frazione del prezzo dei locali vicino ai monumenti."
      },
      {
        "nome": "Castel Sant'Angelo",
        "testo": "Nato come mausoleo di Adriano, è diventato fortezza, prigione e rifugio dei papi, collegato al Vaticano dal Passetto di Borgo. Dalla terrazza dell'Angelo si guarda San Pietro e il Tevere dall'alto.",
        "come": "A piedi dal Vaticano lungo via della Conciliazione, o da Piazza Navona attraversando ponte Sant'Angelo. Si sale per la rampa elicoidale romana fino alle terrazze.",
        "quando": "Nel tardo pomeriggio, per il tramonto sulla cupola di San Pietro.",
        "tempo": "1h30-2 ore",
        "costo": "circa 18 € (dal 1 luglio 2026)",
        "orari": "Martedì-domenica 9-19:30. Chiuso il lunedì, il 1 maggio e il 25 dicembre.",
        "lat": 41.9031,
        "lng": 12.4663,
        "consiglio": "Si abbina bene alla mattina in Vaticano: si esce dai Musei, si pranza a Borgo e si arriva qui nel pomeriggio."
      },
      {
        "nome": "Fontana di Trevi",
        "testo": "La fontana barocca di Nicola Salvi, finita nel 1762, addossata a Palazzo Poli in una piazza minuscola. È lo scenario della Dolce Vita e di milioni di monetine lanciate di spalle.",
        "come": "A piedi da Piazza di Spagna o dal Pantheon, in dieci minuti. Dal 2026 l'area ai bordi della vasca è a pagamento e ad accesso contingentato; la piazza resta libera.",
        "quando": "Prima delle 8 del mattino o dopo le 22: di giorno la piazza è impraticabile.",
        "tempo": "15-20 minuti",
        "costo": "2 € (2026) per scendere alla vasca; vista dalla piazza gratuita",
        "lat": 41.9009,
        "lng": 12.4833,
        "consiglio": "Non si entra nella fontana e non ci si siede sul bordo: i vigili multano."
      },
      {
        "nome": "Piazza Navona",
        "testo": "La piazza ha la forma dello stadio di Domiziano, su cui è costruita. Al centro c'è la Fontana dei Quattro Fiumi del Bernini, di fronte alla facciata di Sant'Agnese in Agone del Borromini.",
        "come": "A piedi dal Pantheon in cinque minuti; bus fino a corso Rinascimento o Largo Argentina.",
        "quando": "Al mattino presto o dopo cena; a dicembre c'è il mercatino della Befana.",
        "tempo": "30 minuti",
        "costo": "gratuita",
        "lat": 41.8992,
        "lng": 12.4731,
        "consiglio": "I resti dello stadio si vedono sotto la piazza, lato piazza di Tor Sanguigna, anche da fuori."
      },
      {
        "nome": "Piazza di Spagna e Trinità dei Monti",
        "testo": "La scalinata settecentesca sale dalla Barcaccia del Bernini alla chiesa di Trinità dei Monti. Intorno ci sono via Condotti e le strade della moda; dall'alto si arriva al Pincio a piedi.",
        "come": "Metro A fermata Spagna, che sbuca accanto alla piazza.",
        "quando": "Mattina presto per la scalinata vuota; a primavera ci sono le azalee.",
        "tempo": "30-45 minuti",
        "costo": "gratuita",
        "lat": 41.9058,
        "lng": 12.4823,
        "consiglio": "Sedersi sui gradini è vietato e sanzionato."
      },
      {
        "nome": "Musei Capitolini",
        "testo": "Il museo pubblico più antico del mondo, sulla piazza del Campidoglio disegnata da Michelangelo. Ci sono la Lupa, il Marco Aurelio originale a cavallo, Caravaggio e, dal Tabularium, la vista migliore sul Foro.",
        "come": "A piedi da Piazza Venezia salendo la Cordonata. Biglietto online o in biglietteria.",
        "quando": "Nel pomeriggio, dopo il Colosseo: il Tabularium al tramonto guarda il Foro con la luce migliore.",
        "tempo": "2-3 ore",
        "orari": "Tutti i giorni 9:30-19:30, ultimo ingresso un'ora prima. Chiusi il 1 gennaio, il 1 maggio e il 25 dicembre.",
        "lat": 41.893,
        "lng": 12.4828,
        "url": "https://www.museicapitolini.org/"
      },
      {
        "nome": "Terme di Caracalla",
        "testo": "Le terme del III secolo, con muri alti più di trenta metri e mosaici ancora a terra, danno la scala vera dell'architettura romana. D'estate ospitano la stagione dell'Opera di Roma all'aperto.",
        "come": "Metro B fino a Circo Massimo e dieci minuti a piedi; dal Colosseo sono circa venti minuti.",
        "quando": "Mattina, quando c'è poca gente; d'estate la sera per l'opera.",
        "tempo": "1-1h30",
        "orari": "Dal martedì alla domenica dalle 9, con chiusura che varia con la stagione. Chiuse il lunedì.",
        "lat": 41.879,
        "lng": 12.4925,
        "consiglio": "È uno dei siti grandi meno affollati di Roma: si abbina al Circo Massimo e all'Aventino con il giardino degli Aranci."
      },
      {
        "nome": "Santa Maria Maggiore",
        "testo": "Una delle quattro basiliche papali, con i mosaici del V secolo nella navata e il soffitto a cassettoni dorato. Dal 2025 vi è sepolto papa Francesco, e la sua tomba richiama molti visitatori.",
        "come": "A piedi da Termini in dieci minuti, o dalla metro A/B a Termini o Cavour. Ingresso libero dopo il controllo, spalle e ginocchia coperte.",
        "quando": "Al mattino, prima che arrivino i gruppi alla tomba.",
        "tempo": "30-45 minuti",
        "costo": "ingresso gratuito",
        "lat": 41.8976,
        "lng": 12.4984
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Colosseo, Foro Romano e Palatino con biglietto nominativo prenotato, alla prima fascia.",
          "Pranzo a Monti, lontano dai monumenti.",
          "Pomeriggio: Pantheon, San Luigi dei Francesi e Piazza Navona.",
          "Fontana di Trevi dopo cena, quando la piazza si svuota.",
          "Cena a Trastevere o nel Ghetto."
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Colosseo, Foro e Palatino al mattino; San Clemente e pranzo a Monti; Musei Capitolini al tramonto.",
          "Giorno 2: Musei Vaticani alla prima fascia e San Pietro; pranzo a Borgo o Prati; Castel Sant'Angelo; Pantheon, San Luigi dei Francesi, Piazza Navona e Trevi la sera."
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Colosseo, Foro e Palatino, San Clemente, Musei Capitolini.",
          "Giorno 2: Musei Vaticani e San Pietro, Castel Sant'Angelo, Piazza Navona e Pantheon.",
          "Giorno 3: Galleria Borghese al mattino, Piazza di Spagna e Trevi; nel pomeriggio l'Appia Antica (meglio di domenica) o le Terme di Caracalla e Trastevere."
        ]
      }
    ],
    zone: [
      {
        "nome": "Monti",
        "perChi": "chi vuole un rione vivo vicino a Colosseo e Termini",
        "testo": "Vicoli, botteghe e locali a piedi dal Colosseo. Un po' rumorosa la sera, con pochi grandi hotel e molti appartamenti. Comoda per metro e treni.",
        "fascia": "130-250 €"
      },
      {
        "nome": "Trastevere",
        "perChi": "chi vuole la vita serale",
        "testo": "Vicoli, osterie e musica. Affollata e rumorosa nei fine settimana; i ristoranti sulle vie principali sono turistici. Il centro si raggiunge a piedi attraversando il Tevere.",
        "fascia": "120-220 €"
      },
      {
        "nome": "Prati",
        "perChi": "chi vuole spendere meno e vedere il Vaticano",
        "testo": "Quartiere residenziale con prezzi più bassi e la metro A per San Pietro e per Termini. Poco affascinante, ma tranquillo e comodo.",
        "fascia": "100-180 €"
      },
      {
        "nome": "Testaccio",
        "perChi": "chi vuole mangiare bene e stare fuori dalla calca",
        "testo": "Quartiere popolare con trattorie storiche e il mercato. Un po' fuori mano dal centro e dai monumenti, ma ben collegato dalla metro B.",
        "fascia": "90-160 €"
      }
    ],
    gite: [
      {
        "nome": "Tivoli: Villa d'Este e Villa Adriana",
        "distanza": "30 km, circa 1 ora",
        "come": "Treno regionale da Tiburtina o bus Cotral da Ponte Mammolo (metro B); tra le due ville c'è un bus locale.",
        "testo": "Le fontane rinascimentali di Villa d'Este e l'immensa residenza dell'imperatore Adriano, entrambe patrimonio UNESCO. Insieme occupano una giornata intera."
      },
      {
        "nome": "Ostia Antica",
        "distanza": "25 km, circa 40 minuti",
        "come": "Treno Roma-Lido da Piramide (metro B) fino a Ostia Antica, con il biglietto urbano.",
        "testo": "Il porto di Roma antica: strade, case, terme, un teatro e le botteghe con i mosaici delle corporazioni. È una Pompei con meno folla, a mezz'ora dal centro."
      },
      {
        "nome": "Orvieto",
        "distanza": "1 ora-1h20 in treno",
        "come": "Treno regionale o Intercity da Termini, poi funicolare dalla stazione alla rupe.",
        "testo": "Una città di tufo sulla rupe, con il Duomo dalla facciata a mosaici e gli affreschi di Signorelli. Sotto c'è una seconda città di grotte e pozzi."
      },
      {
        "nome": "Castelli Romani e Frascati",
        "distanza": "20 km, 30 minuti in treno",
        "come": "Treno regionale da Termini a Frascati; per Castel Gandolfo e Nemi meglio l'auto.",
        "testo": "Paesi sui colli vulcanici con il vino bianco di Frascati, le fraschette e i laghi di Albano e Nemi. È la gita che fanno i romani la domenica."
      }
    ],
    sapori: [
      {
        "nome": "Le quattro paste romane",
        "testo": "Cacio e pepe, gricia, amatriciana e carbonara: poche materie prime e molta tecnica. Si mangiano in trattoria, meglio a Testaccio, Pigneto o San Lorenzo che nel centro."
      },
      {
        "nome": "Carciofo alla giudia",
        "testo": "Carciofo romanesco fritto intero, croccante fuori e tenero dentro. Si mangia nel Ghetto, in stagione, da fine inverno a primavera."
      },
      {
        "nome": "Coda alla vaccinara",
        "testo": "Coda di bue stufata con sedano e pomodoro, uno dei piatti del quinto quarto. Si trova nelle trattorie tradizionali, soprattutto a Testaccio."
      },
      {
        "nome": "Supplì",
        "testo": "Crocchetta di riso fritta con ragù e un cuore di mozzarella che fila. Si compra da asporto nelle friggitorie e nelle pizzerie al taglio."
      },
      {
        "nome": "Pizza romana",
        "testo": "Sottile e croccante, a differenza di quella napoletana. Si mangia in pizzeria la sera, o al taglio al banco per merenda."
      },
      {
        "nome": "Maritozzo",
        "testo": "Panino dolce soffice con panna montata, tipico della colazione romana. Si trova nei bar e nelle pasticcerie."
      }
    ],
    attenzioni: [
      "Il biglietto del Colosseo è nominativo e serve un documento d'identità all'ingresso. Comprare solo sul sito ufficiale: i rivenditori in strada e molti siti non ufficiali applicano sovrapprezzi.",
      "I borseggiatori lavorano su metro A e B, sugli autobus per San Pietro, a Termini e vicino ai monumenti. Tenere borse chiuse e davanti, telefono in tasca interna.",
      "Evitare i ristoranti con foto dei piatti fuori o con chi invita a entrare. Controllare il coperto e le voci aggiunte sul conto prima di ordinare.",
      "Taxi: salire solo su quelli bianchi con licenza, con tariffa fissa dall'aeroporto di Fiumicino al centro entro le Mura Aureliane. Rifiutare chi propone corse a prezzo concordato all'uscita dagli arrivi.",
      "Finti centurioni e persone che mettono braccialetti o rose in mano chiedono soldi dopo: dire no con decisione. Non entrare nelle fontane, c'è una multa.",
      "Tassa di soggiorno per notte, da pagare in struttura; l'importo dipende dalla categoria. Il centro storico ha una ZTL con telecamere: se si arriva in auto, chiedere all'hotel come fare per non prendere la multa."
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono per visitare Roma?",
        "risposta": "Tre giorni bastano per Colosseo, Vaticano e centro storico senza correre. Con quattro o cinque si aggiungono Borghese, Appia Antica e una gita a Tivoli o Ostia."
      },
      {
        "domanda": "Bisogna prenotare il Colosseo?",
        "risposta": "Sì, di fatto: il biglietto è nominativo e a fascia oraria, e le fasce migliori finiscono con settimane di anticipo. Si compra solo sul sito ufficiale e all'ingresso si mostra il documento."
      },
      {
        "domanda": "Si possono fare Vaticano e Colosseo nello stesso giorno?",
        "risposta": "Si può, ma è sconsigliato: sono due mezze giornate faticose ai lati opposti del centro. Meglio dedicare a ciascuno una mattina."
      },
      {
        "domanda": "Dove dormire a Roma la prima volta?",
        "risposta": "Monti per stare a piedi dal Colosseo, Trastevere per la sera, Prati per spendere meno ed essere vicini al Vaticano. Una doppia va da circa 90 € a Testaccio a oltre 200 € a Monti in alta stagione."
      },
      {
        "domanda": "Quando i musei di Roma sono gratis?",
        "risposta": "La prima domenica del mese per Colosseo, Pantheon e musei statali, l'ultima domenica del mese per i Musei Vaticani. Sono le giornate con le code più lunghe dell'anno."
      },
      {
        "domanda": "Come si va da Fiumicino al centro di Roma?",
        "risposta": "Il Leonardo Express arriva a Termini in 32 minuti per 14 €. Il taxi bianco ha una tariffa fissa di 55 € fino al centro dentro le Mura Aureliane."
      }
    ],
    esperienzeSlugs: ['roma-sotterranea', 'appia-antica'],
    tripSlugs: ['roma-4-giorni', 'grandi-citta-italia'],
    imageAlt: 'Il Colosseo visto dal Foro Romano tra i resti delle colonne e i cipressi, Roma',
    immagine: '/images/italia/roma.jpg',
  },
  {
    slug: 'firenze',
    paeseSlug: 'italia',
    ordine: 4,
    nome: 'Firenze',
    tipologia: ['città d\'arte', 'rinascimento', 'gastronomia'],
    giorniConsigliati: '3 giorni, più uno o due per la Toscana attorno',
    visitataPersonalmente: true,
    introduzione:
      'Qui è nato il Rinascimento, tutto dentro un centro storico che si attraversa a piedi in venti minuti. Per la stessa ragione è anche una delle città più sature d\'Europa: nello stesso mezzo chilometro quadrato ci sono la cupola di Brunelleschi, gli Uffizi, il David e il Ponte Vecchio.',
    percheAndarci:
      'Nessun posto al mondo ha tante opere per metro quadrato. E la cupola di Brunelleschi, costruita senza centine con una tecnica che nessuno è mai riuscito a replicare con esattezza, è ancora oggi un problema di ingegneria prima che un monumento.',
    cosaVedere: [
      'La cupola di Brunelleschi, salendo i 463 gradini fino alla lanterna: **salita a prenotazione obbligatoria con fascia oraria**',
      'Gli Uffizi, da prenotare per forza',
      'La Galleria dell\'Accademia per il David, e il Museo dell\'Opera del Duomo, che quasi tutti saltano ed è il migliore della città',
      'Palazzo Pitti e il Giardino di Boboli, sull\'altra riva',
      'La Cappella Brancacci e le Cappelle Medicee, meno affollate e altrettanto importanti',
      'San Miniato al Monte, la chiesa romanica sulla collina, con il canto gregoriano dei monaci nel pomeriggio',
      'L\'Oltrarno, con le botteghe artigiane, la parte della città che sta scomparendo più in fretta',
    ],
    cosaFare: [
      'Salire la cupola prenotando la prima fascia del mattino (vedi la scheda esperienza dedicata)',
      'Passare un pomeriggio nell\'Oltrarno tra le botteghe di restauro, doratura e pelletteria',
      'Salire a San Miniato al tramonto invece che al Piazzale Michelangelo, che è a cento metri e ha dieci volte la gente',
      'Mangiare in una trattoria dell\'Oltrarno o a Sant\'Ambrogio invece che nel quadrilatero del centro',
    ],
    doveDormire:
      'L\'Oltrarno per stare in un quartiere ancora vivo a cinque minuti a piedi dal centro, Sant\'Ambrogio per i prezzi e il mercato, San Frediano per la sera. Il quadrilatero tra Duomo e Signoria è comodissimo e caro, e la sera non ci sono residenti.',
    doveMangiare:
      'La cucina toscana è povera e di materia prima: ribollita, pappa al pomodoro, panzanella d\'estate, e la bistecca alla fiorentina, un taglio preciso, alto almeno tre dita, cotto al sangue senza discussioni e servito al chilo. Da provare i panini con il lampredotto ai banchi, la cosa più fiorentina che ci sia, e i crostini di fegatini. Il mercato di Sant\'Ambrogio è quello dei residenti; quello centrale di San Lorenzo, al primo piano, è diventato una food court.',
    comeArrivare:
      'Alta velocità: Firenze Santa Maria Novella è in centro, a quindici minuti a piedi dal Duomo, e collega Milano in un\'ora e quaranta e Roma in un\'ora e mezza. L\'aeroporto di Firenze è piccolo; Pisa e Bologna sono le alternative con collegamento in treno. Dall\'aeroporto di Peretola la tramvia T2 arriva accanto a Santa Maria Novella in circa 20 minuti, con biglietto da circa 2 €; il taxi ha una tariffa fissa per il centro di circa 28 € di giorno. Da Pisa il Pisa Mover e il treno regionale portano a Firenze in poco più di un\'ora.',
    comeSpostarsi:
      'Tutto a piedi: il centro storico è piccolo, ed è il suo pregio e insieme la causa della congestione. La tramvia serve la periferia e l\'aeroporto. **L\'auto in centro è inutile e la ZTL la multa**, con telecamere che sanzionano chi non lo sa.',
    periodoMigliore:
      'novembre, gennaio e febbraio sono i mesi in cui la città torna vivibile e i musei si visitano senza code infinite. Aprile-giugno e settembre-ottobre sono i più belli e i più pieni. Luglio e agosto sono caldissimi e saturi.',
    costi:
      'Uffizi e Accademia hanno tariffe più alte in alta stagione; il biglietto cumulativo del complesso del Duomo copre cupola, battistero, campanile, cripta e museo ed è l\'unico modo di salire. **Le prime domeniche del mese i musei statali sono gratuiti**, e quindi ci sono code enormi. Budget indicativo al giorno a persona, con la doppia divisa in due: basso 70-90 €, medio 120-170 €, alto oltre 250 €.',
    erroriDaEvitare: [
      'Presentarsi agli Uffizi o all\'Accademia senza prenotazione: le code arrivano a ore, e in alta stagione si rischia di non entrare',
      'Non prenotare la salita alla cupola, che ha fasce orarie contingentate e si esaurisce con giorni di anticipo',
      'Saltare il Museo dell\'Opera del Duomo perché «è solo un museo annesso»: contiene le porte originali del Battistero e la Pietà Bandini, ed è il migliore della città',
      'Entrare in centro in auto: la ZTL è attiva e le multe arrivano a casa mesi dopo',
      'Andare al Piazzale Michelangelo al tramonto invece che a San Miniato, che sta cento metri più su, ha la stessa vista e un decimo della gente',
      'Ordinare una «bistecca fiorentina» ben cotta o sotto i due etti e mezzo: non esiste, e chi la serve così sta servendo altro',
    ],
    miaEsperienza:
      'Firenze ha un problema di scala che le guide non dicono: tutto quello che si viene a vedere sta in mezzo chilometro quadrato, e da aprile a ottobre il centro è una folla compatta che si muove piano lungo tre assi. In pratica la città va fatta al contrario: presto al mattino, o a novembre. La salita alla cupola prenotata alla prima fascia, alle otto e mezza, è un\'altra esperienza rispetto a farla a mezzogiorno: si sale per una scala stretta tra i due gusci, si passa a pochi centimetri dagli affreschi del Giudizio, e in cima c\'è aria. Quasi nessuno invece va al Museo dell\'Opera del Duomo, che vale quanto gli Uffizi: dentro ci sono le porte originali del Battistero (quelle in piazza sono copie) e l\'ultima Pietà di Michelangelo, quella che voleva distruggere. Ci sono quattro persone. Per il tramonto, tutti vanno al Piazzale Michelangelo, che è un parcheggio con i venditori; cento metri più su c\'è San Miniato al Monte, una chiesa romanica del Mille con la facciata a intarsi di marmo, la stessa vista e, nel pomeriggio, i monaci che cantano in gregoriano nella cripta.',
    luoghi: [
      {
        "nome": "Duomo e cupola del Brunelleschi",
        "testo": "La cattedrale di Santa Maria del Fiore con la cupola più grande mai costruita in muratura, finita nel 1436 senza centine. Salendo i 463 gradini si cammina tra i due gusci, a pochi centimetri dagli affreschi del Giudizio, fino alla lanterna con la vista su tutta la città.",
        "come": "In pieno centro, a piedi dalla stazione. La salita alla cupola è a fascia oraria e va prenotata online sul sito ufficiale dell'Opera del Duomo. L'ingresso in cattedrale è gratuito, con una coda ai controlli.",
        "quando": "Prima fascia del mattino, per salire con poca gente. La scala è stretta e non ci sono ascensori: non adatto a chi soffre di claustrofobia o di vertigini.",
        "tempo": "1 ora e mezza per la cupola, più la cattedrale",
        "costo": "cattedrale gratuita; Brunelleschi Pass circa 30 € (2026), valido tre giorni per cupola, Battistero, Campanile, Museo dell'Opera e cripta",
        "lat": 43.7731,
        "lng": 11.256,
        "url": "https://www.duomo.firenze.it/",
        "consiglio": "Ho salito la cupola alla prima fascia, alle otto e mezza: è un'altra esperienza rispetto a mezzogiorno. Si passa vicino agli affreschi e in cima c'è aria."
      },
      {
        "nome": "Museo dell'Opera del Duomo",
        "testo": "Il museo del complesso del Duomo, che molti saltano ed è tra i migliori della città. Dentro ci sono le porte originali del Battistero (quelle in piazza sono copie), la Pietà Bandini di Michelangelo, la Maddalena di Donatello e i modelli della cupola.",
        "come": "A due passi dal Duomo, sul retro. Il biglietto cumulativo del complesso del Duomo comprende cupola, battistero, campanile, cripta e museo.",
        "quando": "Tutti i giorni; controllare gli orari sul sito. La mattina presto è quasi vuoto.",
        "tempo": "1 ora e mezza-2 ore",
        "costo": "incluso nei pass del complesso del Duomo",
        "lat": 43.7733,
        "lng": 11.2577,
        "url": "https://www.duomo.firenze.it/",
        "consiglio": "Non lo salterei: dentro ci sono le porte del Battistero e l'ultima Pietà di Michelangelo, quella che voleva distruggere. Quando ci sono andato c'erano quattro persone."
      },
      {
        "nome": "Galleria degli Uffizi",
        "testo": "Uno dei musei di pittura più importanti d'Italia: la Nascita di Venere e la Primavera di Botticelli, la Madonna Ognissanti di Giotto, Leonardo, Raffaello, Michelangelo, Caravaggio. Il percorso segue la storia della pittura dal Medioevo al Settecento.",
        "come": "A piedi da Piazza della Signoria. L'ingresso è su prenotazione: la fila senza biglietto è lunga anche in bassa stagione. La visita è lineare e non c'è una scorciatoia: scegliere prima le sale.",
        "quando": "Da martedì a domenica 8:15-18:30, ultimo ingresso alle 17:30; chiuso il lunedì, il 1 gennaio e il 25 dicembre. Prima fascia del mattino o tardo pomeriggio.",
        "tempo": "3 ore",
        "costo": "25 euro il giorno stesso, 29 euro prenotando in anticipo (sito ufficiale, 2026)",
        "orari": "Martedì-domenica 8:15-18:30. Chiusi il lunedì.",
        "lat": 43.7678,
        "lng": 11.2553,
        "url": "https://www.uffizi.it/",
        "consiglio": "Prenotare con settimane di anticipo in alta stagione. Tre ore bastano per le sale principali: provare a concentrarsi su Botticelli, Leonardo e Caravaggio."
      },
      {
        "nome": "Galleria dell'Accademia",
        "testo": "Il David di Michelangelo, alto più di cinque metri, in fondo a una galleria con i Prigioni incompiuti. Il resto del museo è piccolo e si vede in un'ora.",
        "come": "A piedi dal Duomo, in via Ricasoli. Prenotazione consigliata.",
        "quando": "Chiusa il lunedì; orari e giornate gratuite sul sito ufficiale. Meglio la prima fascia del mattino.",
        "tempo": "1 ora-1 ora e mezza",
        "costo": "circa 20 € più la prenotazione (2026)",
        "orari": "Martedì-domenica 8:15-18:50. Chiusa il lunedì.",
        "lat": 43.7768,
        "lng": 11.2586,
        "url": "https://www.galleriaaccademiafirenze.it/",
        "consiglio": "Il David si guarda meglio da vicino, camminando intorno: i Prigioni nella galleria aiutano a capire come lavorava Michelangelo. Prenotare con anticipo."
      },
      {
        "nome": "Palazzo Pitti e Giardino di Boboli",
        "testo": "La residenza dei Medici, poi dei Lorena e dei Savoia, sull'altra riva dell'Arno. Dentro ci sono la Galleria Palatina con Raffaello e Tiziano, gli appartamenti reali e vari musei. Dietro, il Giardino di Boboli è un parco all'italiana con vista sulla città.",
        "come": "A piedi dal Ponte Vecchio. I musei e il giardino si visitano con biglietti separati o cumulativi: controllare sul sito.",
        "quando": "Chiuso il lunedì. D'estate il giardino è caldo e senza ombra in molti punti: andare la mattina presto.",
        "tempo": "mezza giornata",
        "costo": "Palazzo Pitti 16 € il giorno stesso, 19 € prenotando; Pitti e Boboli 22 € (sito ufficiale, 2026)",
        "orari": "Palazzo Pitti martedì-domenica 8:15-18:30, chiuso il lunedì. Boboli dalle 8:15 al tramonto, chiuso il primo e l'ultimo lunedì del mese.",
        "lat": 43.7651,
        "lng": 11.25,
        "url": "https://www.uffizi.it/palazzo-pitti",
        "consiglio": "Il Giardino di Boboli è il posto giusto per riposare dopo la folla del centro. Portare acqua."
      },
      {
        "nome": "Cappella Brancacci",
        "testo": "Il ciclo di affreschi di Masaccio e Masolino nella chiesa del Carmine, che segna l'inizio della pittura rinascimentale. La Cacciata dall'Eden di Masaccio è una delle immagini più forti del Quattrocento.",
        "come": "In Oltrarno, in piazza del Carmine, a piedi dal centro. Ingresso a numero limitato e prenotazione consigliata.",
        "quando": "Controllare orari e giorni di chiusura sul sito dei musei civici fiorentini prima di andare.",
        "tempo": "45 minuti",
        "lat": 43.768,
        "lng": 11.244,
        "url": "https://museicivicifiorentini.comune.fi.it/",
        "consiglio": "È meno affollata dei grandi musei e altrettanto importante. Prima di entrare vale la pena di leggere due righe sul Masaccio: la visita è molto più interessante."
      },
      {
        "nome": "San Miniato al Monte",
        "testo": "La chiesa romanica del XI secolo sulla collina a sud dell'Arno, con la facciata a intarsi di marmo bianco e verde e un pavimento a motivi zodiacali. I monaci olivetani cantano in gregoriano nel pomeriggio.",
        "come": "A piedi dal Ponte Vecchio, passando per Porta San Niccolò e le scale, o in bus. Poco sopra il Piazzale Michelangelo.",
        "quando": "Tutti i giorni. Il tardo pomeriggio, per il tramonto e il canto dei monaci. Controllare gli orari delle funzioni sul sito.",
        "tempo": "1 ora",
        "costo": "ingresso libero",
        "lat": 43.7595,
        "lng": 11.265,
        "url": "https://www.sanminiatoalmonte.it/",
        "consiglio": "Poco sopra il Piazzale Michelangelo, che a quell'ora è un parcheggio con i venditori, c'è la stessa vista con meno gente. Nella cripta i monaci cantano in gregoriano nel pomeriggio."
      },
      {
        "nome": "Oltrarno: Santo Spirito e le botteghe",
        "testo": "La riva sud dell'Arno è la parte della città dove ci sono ancora le botteghe di restauro, doratura, liuteria e pelletteria. Piazza Santo Spirito è il cuore del quartiere, con la basilica del Brunelleschi.",
        "come": "A piedi attraversando il Ponte Vecchio o il Ponte alla Carraia. Non servono biglietti: si cammina e si entra nelle botteghe.",
        "quando": "Pomeriggio nei giorni feriali, quando le botteghe sono aperte. La domenica molte sono chiuse.",
        "tempo": "mezza giornata",
        "costo": "passeggiata gratuita; basilica di Santo Spirito a ingresso libero o con offerta",
        "lat": 43.7672,
        "lng": 11.2479,
        "consiglio": "Chiedere sempre il permesso prima di fotografare dentro le botteghe. Per cenare, le trattorie dell'Oltrarno sono migliori e più economiche di quelle attorno al Duomo."
      },
      {
        "nome": "Piazza della Signoria e Palazzo Vecchio",
        "testo": "La piazza politica della città, con la copia del David, il Nettuno dell'Ammannati e la Loggia dei Lanzi piena di statue a cielo aperto. Palazzo Vecchio, ancora sede del Comune, ha il Salone dei Cinquecento e una torre da cui si vede la cupola alla stessa altezza.",
        "come": "A piedi dal Duomo in cinque minuti lungo via dei Calzaiuoli. Museo e torre hanno biglietti separati o combinati.",
        "quando": "La piazza la sera, quando i gruppi sono andati via; la torre con il bel tempo, perché con pioggia chiude.",
        "tempo": "1h30-2 ore con il museo",
        "costo": "piazza e Loggia dei Lanzi gratuite; museo e torre a pagamento",
        "lat": 43.7694,
        "lng": 11.2562
      },
      {
        "nome": "Ponte Vecchio",
        "testo": "L'unico ponte di Firenze risparmiato dai tedeschi nel 1944, con le botteghe degli orafi appese sull'Arno. Sopra corre il Corridoio Vasariano, che univa Palazzo Vecchio a Palazzo Pitti.",
        "come": "A piedi dagli Uffizi; la vista migliore del ponte è da ponte Santa Trinita, il successivo verso ovest.",
        "quando": "All'alba o al tramonto; di giorno è un corridoio di folla.",
        "tempo": "15-20 minuti",
        "costo": "gratuito",
        "lat": 43.768,
        "lng": 11.2531
      },
      {
        "nome": "Museo del Bargello",
        "testo": "Il palazzo del podestà, poi carcere, è oggi il museo della scultura: il David di Donatello, il Bacco di Michelangelo, i bronzi del Cellini e del Giambologna. Ha un cortile medievale tra i più belli della città.",
        "come": "In via del Proconsolo, a tre minuti dalla Signoria. Fuori stagione di solito non serve prenotare.",
        "quando": "Nel primo pomeriggio, quando gli Uffizi sono pieni.",
        "tempo": "1h30",
        "costo": "circa 12 € (2026); cumulativo con Accademia e Cappelle Medicee",
        "orari": "Chiuso il lunedì.",
        "lat": 43.7704,
        "lng": 11.2581,
        "url": "https://bargellomusei.it/"
      },
      {
        "nome": "Basilica di Santa Croce",
        "testo": "La grande chiesa francescana dove sono sepolti Michelangelo, Galileo, Machiavelli e Rossini. Nelle cappelle Bardi e Peruzzi ci sono gli affreschi di Giotto, nel chiostro la Cappella dei Pazzi del Brunelleschi.",
        "come": "A piedi dalla Signoria in dieci minuti. Biglietto unico per basilica, chiostri e museo.",
        "quando": "Al mattino; la domenica la visita apre solo nel pomeriggio.",
        "tempo": "1-1h30",
        "lat": 43.7686,
        "lng": 11.2622,
        "url": "https://www.santacroceopera.it/"
      },
      {
        "nome": "Cappelle Medicee",
        "testo": "Il mausoleo dei Medici dietro San Lorenzo: la Cappella dei Principi coperta di marmi e pietre dure e la Sagrestia Nuova di Michelangelo, con le tombe e le statue del Giorno, della Notte, dell'Aurora e del Crepuscolo.",
        "come": "Ingresso da piazza Madonna degli Aldobrandini, a cinque minuti dal Duomo e dalla stazione.",
        "quando": "In qualsiasi momento: raramente c'è coda.",
        "tempo": "45 minuti-1 ora",
        "costo": "circa 11 € (2026)",
        "orari": "Chiuse il lunedì.",
        "lat": 43.775,
        "lng": 11.2532,
        "url": "https://bargellomusei.it/"
      },
      {
        "nome": "Santa Maria Novella",
        "testo": "La basilica domenicana davanti alla stazione, con la facciata in marmo di Leon Battista Alberti. Dentro ci sono la Trinità di Masaccio, il Crocifisso di Giotto e la Cappella Tornabuoni affrescata dal Ghirlandaio.",
        "come": "Davanti alla stazione di Santa Maria Novella; si entra dal lato della piazza o dal giardino. Biglietto d'ingresso per il complesso.",
        "quando": "Appena arrivati o prima del treno: è a due passi dai binari.",
        "tempo": "1 ora",
        "lat": 43.7743,
        "lng": 11.2493,
        "url": "https://www.smn.it/"
      },
      {
        "nome": "Piazzale Michelangelo",
        "testo": "La terrazza panoramica sopra l'Oltrarno, con tutta Firenze davanti: cupola, Palazzo Vecchio, i ponti sull'Arno. È affollata e piena di venditori, ma è la cartolina classica.",
        "come": "A piedi da Ponte Vecchio in circa 25 minuti, per le Rampe del Poggi o via San Niccolò; in bus 12 o 13.",
        "quando": "Al mattino presto per la luce senza folla; al tramonto meglio salire fino a San Miniato.",
        "tempo": "30 minuti più la salita",
        "costo": "gratuito",
        "lat": 43.7629,
        "lng": 11.265
      },
      {
        "nome": "Mercato Centrale e San Lorenzo",
        "testo": "Il mercato coperto in ghisa dell'Ottocento: al piano terra banchi di carne, formaggi e lampredotto, al primo piano una food hall. Accanto c'è la basilica di San Lorenzo, la chiesa dei Medici, con la Biblioteca Laurenziana di Michelangelo.",
        "come": "A cinque minuti dalla stazione e dal Duomo; si attraversa il mercato di bancarelle di pelletteria intorno.",
        "quando": "Al mattino per il mercato vero; a pranzo per la food hall.",
        "tempo": "1 ora",
        "costo": "ingresso libero al mercato",
        "lat": 43.7765,
        "lng": 11.2534,
        "consiglio": "Le bancarelle di pelle intorno al mercato sono per turisti: la qualità va controllata pezzo per pezzo."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Cupola alla prima fascia delle 8:30, poi Battistero e Museo dell'Opera del Duomo.",
          "Piazza della Signoria e Loggia dei Lanzi; pranzo con il lampredotto al Mercato Centrale o a Sant'Ambrogio.",
          "Uffizi nel pomeriggio, con fascia prenotata.",
          "Ponte Vecchio e Oltrarno; al tramonto San Miniato al Monte."
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: cupola e Museo dell'Opera, Signoria e Palazzo Vecchio, Uffizi nel pomeriggio, Ponte Vecchio al tramonto.",
          "Giorno 2: Accademia per il David all'apertura, Cappelle Medicee e Mercato Centrale; nel pomeriggio Santa Croce, poi Oltrarno, Santo Spirito e San Miniato al tramonto."
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: complesso del Duomo, Signoria, Uffizi.",
          "Giorno 2: Accademia, Cappelle Medicee, Bargello, Santa Croce.",
          "Giorno 3: Palazzo Pitti e Boboli, Cappella Brancacci, Santo Spirito e le botteghe; tramonto a San Miniato, oppure gita a Fiesole."
        ]
      }
    ],
    zone: [
      {
        "nome": "Oltrarno",
        "perChi": "chi vuole un quartiere vivo a cinque minuti dal centro",
        "testo": "Botteghe, trattorie e piazze. Più tranquillo del centro, con prezzi leggermente più bassi. San Frediano è il rione per la sera.",
        "fascia": "110-200 €"
      },
      {
        "nome": "Sant'Ambrogio",
        "perChi": "chi cerca prezzi più bassi e un mercato vero",
        "testo": "Zona residenziale a est del Duomo, con il mercato dei fiorentini e molte trattorie. Un po' fuori dai percorsi dei turisti.",
        "fascia": "100-180 €"
      },
      {
        "nome": "Santa Maria Novella",
        "perChi": "chi arriva in treno e riparte presto",
        "testo": "Vicina alla stazione: comoda per i treni e per i bus verso la Toscana. Zona più trafficata e meno bella la sera.",
        "fascia": "90-170 €"
      },
      {
        "nome": "Centro storico (Duomo e Signoria)",
        "perChi": "chi vuole tutto a piedi e non bada ai prezzi",
        "testo": "Comodissimo e caro. La sera ci sono pochi residenti e molti turisti, e il rumore delle strade pedonali arriva fino alle camere.",
        "fascia": "150-300 €"
      }
    ],
    gite: [
      {
        "nome": "Siena",
        "distanza": "75 km, 1h15 in bus",
        "come": "Bus diretti da Firenze, che arrivano più vicini al centro del treno; in treno 1h30 con risalita in scale mobili.",
        "testo": "Piazza del Campo, il Duomo con il pavimento a intarsi e il Palazzo Pubblico con il Buongoverno di Lorenzetti. È la rivale gotica di Firenze."
      },
      {
        "nome": "Pisa e Lucca",
        "distanza": "1 ora in treno ciascuna",
        "come": "Treni regionali frequenti da Santa Maria Novella; tra Pisa e Lucca ci sono 30 minuti di treno.",
        "testo": "Piazza dei Miracoli a Pisa al mattino, le mura alberate di Lucca da girare in bici nel pomeriggio. Si fanno bene nello stesso giorno."
      },
      {
        "nome": "Chianti",
        "distanza": "30-60 km, 45 minuti in auto",
        "come": "In auto o con un tour organizzato; il bus per Greve c'è ma rende difficile girare più cantine.",
        "testo": "Colline di vigne e cipressi tra Greve, Panzano, Radda e Castellina, con degustazioni in cantina. Chi guida non beve: meglio un tour con autista."
      },
      {
        "nome": "Fiesole",
        "distanza": "8 km, 20-30 minuti in bus",
        "come": "Bus urbano 7 da piazza San Marco, con il normale biglietto.",
        "testo": "Il paese etrusco sulla collina, con il teatro romano e la vista su Firenze dal convento di San Francesco. È mezza giornata fresca d'estate."
      }
    ],
    sapori: [
      {
        "nome": "Bistecca alla fiorentina",
        "testo": "Taglio alto almeno tre dita, cotto al sangue e servito al peso, di solito un chilo o più. Si ordina in trattoria, controllando il prezzo all'etto."
      },
      {
        "nome": "Lampredotto",
        "testo": "Panino con la trippa del quarto stomaco del bovino, bollita e servita con salsa verde. Si mangia in piedi ai banchi di strada, come i fiorentini."
      },
      {
        "nome": "Ribollita e pappa al pomodoro",
        "testo": "Due zuppe di pane raffermo: la ribollita con verze e fagioli, la pappa con pomodoro e basilico. Cucina povera da trattoria."
      },
      {
        "nome": "Crostini di fegatini",
        "testo": "Fette di pane toscano con paté di fegatini di pollo, antipasto classico toscano."
      },
      {
        "nome": "Panzanella",
        "testo": "Insalata estiva di pane raffermo bagnato, pomodoro, cipolla, basilico e olio."
      },
      {
        "nome": "Cantucci e vin santo",
        "testo": "Biscotti alle mandorle da inzuppare nel vino dolce da dessert. Si servono a fine pasto in quasi tutte le trattorie."
      }
    ],
    attenzioni: [
      "La ZTL del centro è controllata da telecamere: entrare in auto senza permesso porta una multa che arriva a casa dopo mesi. Se si arriva in auto, chiedere all'hotel come registrare la targa o lasciare l'auto in un parcheggio fuori.",
      "Prenotare online Uffizi, Accademia e cupola: senza biglietto le code possono durare ore e in alta stagione si rischia di non entrare.",
      "Il Comune vieta di sedersi a mangiare sui gradini di chiese e monumenti e in alcune strade del centro, con multe. Evitare di mangiare per terra.",
      "Borseggi alla stazione Santa Maria Novella, sugli autobus affollati e nei punti più visitati come Ponte Vecchio. Tenere borse chiuse e davanti.",
      "Al ristorante controllare il prezzo della bistecca all'etto e il coperto. Diffidare di locali con menu turistici attorno al Duomo e a Piazza della Signoria.",
      "Tassa di soggiorno per notte, da pagare in struttura. In caso di scioperi dei trasporti, tenere un margine di tempo."
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Firenze?",
        "risposta": "Due giorni pieni per Duomo, Uffizi, Accademia e Oltrarno; tre per aggiungere Pitti, Bargello e Santa Croce senza correre. Con quattro si fa una gita a Siena o nel Chianti."
      },
      {
        "domanda": "Bisogna prenotare la cupola del Brunelleschi?",
        "risposta": "Sì: la salita ha fasce orarie contingentate e si prenota insieme al Brunelleschi Pass sul sito dell'Opera del Duomo. In alta stagione le fasce finiscono con settimane di anticipo."
      },
      {
        "domanda": "Uffizi e Accademia vanno prenotati?",
        "risposta": "Conviene sempre, soprattutto da aprile a ottobre, quando senza prenotazione la coda arriva a ore. Entrambi sono chiusi il lunedì."
      },
      {
        "domanda": "Si può entrare in auto nel centro di Firenze?",
        "risposta": "No: il centro è una ZTL con telecamere e le multe arrivano a casa mesi dopo. Si lascia l'auto in un parcheggio fuori dalla ZTL e si gira a piedi."
      },
      {
        "domanda": "Come si arriva in centro dall'aeroporto di Pisa?",
        "risposta": "Pisa Mover fino a Pisa Centrale in 5 minuti, poi treno regionale per Santa Maria Novella in circa un'ora, circa 9 € in tutto per il treno. In alternativa ci sono bus diretti in circa 1h10."
      },
      {
        "domanda": "Dove dormire a Firenze?",
        "risposta": "Oltrarno o Sant'Ambrogio per un quartiere vissuto, Santa Maria Novella per la comodità del treno. In centro una doppia parte da circa 150 € e supera spesso i 250 € in alta stagione."
      }
    ],
    esperienzeSlugs: ['cupola-brunelleschi'],
    tripSlugs: ['firenze-3-giorni', 'grandi-citta-italia'],
    imageAlt: 'Il Ponte Vecchio e gli altri ponti sull\'Arno visti da Piazzale Michelangelo al tramonto, Firenze',
    immagine: '/images/italia/firenze.jpg',
  },
  {
    slug: 'venezia',
    paeseSlug: 'italia',
    ordine: 5,
    nome: 'Venezia',
    tipologia: ['città d\'arte', 'isole', 'architettura'],
    giorniConsigliati: '3 giorni, di cui uno per la laguna',
    visitataPersonalmente: true,
    introduzione:
      'Una città costruita su pali di legno conficcati nel fango di una laguna, che per mille anni è stata una potenza marittima e oggi ha meno di cinquantamila residenti nel centro storico, meno di un terzo rispetto agli anni Cinquanta. È l\'unico posto in Italia dove esiste un biglietto d\'ingresso per la città.',
    percheAndarci:
      'Non somiglia a nient\'altro: è una città senza automobili, dove tutto, dai rifiuti ai mobili ai malati, si muove in barca. E la laguna, che quasi nessuno visita, è la ragione per cui Venezia esiste.',
    cosaVedere: [
      'La Basilica di San Marco, con i mosaici d\'oro, e il Palazzo Ducale con i Piombi e il Ponte dei Sospiri',
      'Le Gallerie dell\'Accademia e la Collezione Peggy Guggenheim',
      'Il Ponte di Rialto e il mercato del pesce al mattino presto, ancora frequentato da chi ci fa la spesa',
      'Cannaregio e il Ghetto, il primo ghetto ebraico d\'Europa, dove Venezia è ancora abitata',
      'Le isole della laguna: Murano per il vetro, Burano per le case colorate, Torcello per la basilica con i mosaici bizantini',
      'La Scuola Grande di San Rocco, con il ciclo di Tintoretto: è la Cappella Sistina di Venezia, e ci sono dieci persone',
      'San Giorgio Maggiore, con il campanile che ha la vista migliore su San Marco e nessuna coda',
    ],
    cosaFare: [
      'Venezia all\'alba, prima che arrivino i treni e le navi (vedi la scheda esperienza dedicata)',
      'Prendere il vaporetto della linea 1 lungo il Canal Grande, che costa una frazione di una gondola e dura molto di più',
      'Perdersi a Cannaregio e Castello, i sestieri dove vive ancora la gente',
      'Un giro in laguna verso Torcello e le isole minori: la Venezia di prima di Venezia',
    ],
    doveDormire:
      'Cannaregio e Castello per stare in una zona ancora abitata e spendere meno; Dorsoduro per la vicinanza ai musei e una sera più viva. **Dormire in centro esenta dal contributo di accesso** e permette di avere la città all\'alba e dopo le sei di sera, le uniche due finestre in cui è come ce la si aspetta. Mestre costa meno, ma toglie proprio questo.',
    doveMangiare:
      'La cucina veneziana è di laguna e di pesce povero: sarde in saor, baccalà mantecato, moeche (i granchi in muta, stagionali e costosissimi), risotto di gò, fegato alla veneziana. Il modo giusto di mangiare è il **giro di bacari**: piccole osterie dove si mangiano i cicheti in piedi al banco (mezzo uovo con l\'acciuga, polpette, baccalà su un crostino) con un\'ombra di vino, spostandosi da una all\'altra. Costa poco e si mangia benissimo, purché si esca dagli assi principali.',
    comeArrivare:
      'Treno fino a Venezia Santa Lucia, che è **dentro** la città: è il modo più sensato di arrivarci. Aeroporto Marco Polo, collegato con vaporetto Alilaguna o bus a Piazzale Roma. In auto si arriva solo fino a Piazzale Roma o al Tronchetto, con parcheggi carissimi. Dal Marco Polo il bus ATVO o l\'Aerobus 5 arrivano a Piazzale Roma in 20-25 minuti per circa 10 €; l\'Alilaguna va a San Marco in circa 75 minuti per circa 15-18 €; il taxi acqueo privato parte da circa 120-150 € a barca.',
    comeSpostarsi:
      'A piedi e in vaporetto. **I biglietti singoli del vaporetto sono cari e i pass a tempo si ripagano subito** se si fa più di una corsa al giorno. I traghetti da gondola che attraversano il Canal Grande nei punti senza ponte costano pochi centesimi e quasi nessun visitatore sa che esistono.',
    periodoMigliore:
      'da novembre a febbraio, Carnevale escluso, Venezia torna a essere una città. Le giornate sono corte e umide, c\'è la possibilità di acqua alta (che oggi il MOSE limita ma non annulla), ma in cambio si hanno i campielli tutti per sé. Aprile-giugno e settembre-ottobre sono i mesi più belli e i più saturi.',
    costi:
      '**Il contributo di accesso** si applica a chi entra in giornata senza pernottare, in un numero definito di giornate di alta stagione: nel 2026 si è pagato in 60 giornate tra aprile e luglio, 5 euro prenotando con almeno quattro giorni d\'anticipo e 10 euro sotto quella soglia. Chi pernotta in città ne è esente ma deve comunque registrarsi. Il calendario cambia ogni anno: conviene controllarlo prima di partire. Il pass vaporetto a tempo è quasi sempre conveniente; la gondola ha tariffe fissate dal Comune ed è comunque cara. Budget indicativo al giorno a persona, con la doppia divisa in due: basso 80-100 € (dormendo a Mestre), medio 150-200 €, alto oltre 300 €.',
    erroriDaEvitare: [
      'Venire in giornata in alta stagione senza controllare il contributo di accesso e senza prenotarlo in anticipo, pagando il doppio',
      'Fare Venezia tra le dieci e le cinque e giudicarla: in quelle ore, sugli assi principali, è una folla compatta. Alle sette del mattino la stessa calle è vuota',
      'Mangiare nei ristoranti con il menu turistico attorno a San Marco e Rialto: è il posto d\'Italia dove il rapporto qualità-prezzo è peggiore',
      'Prendere la gondola pensando che sia un trasporto: è un\'esperienza a tariffa fissa e cara. Il vaporetto 1 sul Canal Grande costa una frazione e dura di più',
      'Saltare la laguna: Torcello, con la basilica del VII secolo e i mosaici del Giudizio Universale, è dove Venezia è cominciata e ci sono venti persone',
      'Dare per scontato di trovare facilmente un bancomat o un bagno pubblico: sono pochi entrambi, e i bagni sono a pagamento',
    ],
    miaEsperienza:
      'Venezia è la città più fraintesa d\'Italia, e il motivo è l\'orario. Tra le dieci del mattino e le cinque del pomeriggio, sugli assi che vanno dalla stazione a Rialto e da Rialto a San Marco, si cammina in un flusso compatto e si capisce perché i veneziani se ne siano andati: sono meno di cinquantamila, un terzo rispetto agli anni Cinquanta, e continuano a calare. Ma quella è solo una fascia oraria. Alle sette del mattino le stesse calli sono vuote, si sente l\'acqua battere contro i muri, passano le barche delle consegne, e i bacari aprono per chi va al lavoro. Dopo le sette di sera succede la stessa cosa al contrario. È l\'unica ragione seria per dormire in centro invece che a Mestre, più della comodità: avere quelle due finestre. Quasi nessuno invece va in laguna: Torcello ha una basilica del settimo secolo con un Giudizio Universale a mosaico che copre un\'intera parete, ci si arriva in quaranta minuti di vaporetto, e ci sono venti persone. È lì che Venezia è cominciata, prima che esistesse Venezia.',
    luoghi: [
      {
        "nome": "Basilica di San Marco",
        "testo": "La basilica bizantina dei dogi, con migliaia di metri quadrati di mosaici dorati che coprono volte e cupole. Il pavimento ondulato, la Pala d'Oro e i cavalli di bronzo nel museo sono i punti da cercare.",
        "come": "In Piazza San Marco, raggiungibile in vaporetto (fermata San Marco-San Zaccaria) o a piedi da Rialto. L'ingresso richiede abiti che coprano spalle e ginocchia. Zaini e borse grandi non entrano: ci sono depositi nelle vicinanze.",
        "quando": "Tutti i giorni; le prime ore del mattino sono le meno affollate. Nelle funzioni religiose l'accesso è limitato.",
        "tempo": "1 ora",
        "costo": "circa 10 € con prenotazione online a orario (2026)",
        "lat": 45.4345,
        "lng": 12.3397,
        "url": "https://www.basilicasanmarco.it/",
        "consiglio": "Prenotare online l'ingresso per evitare la coda in piazza. La Pala d'Oro e il Museo con la Loggia dei Cavalli hanno biglietti propri: la loggia vale la salita, per vedere i mosaici da vicino e la piazza dall'alto."
      },
      {
        "nome": "Palazzo Ducale",
        "testo": "La sede del governo della Repubblica e residenza del doge, in gotico veneziano. Dentro ci sono la Sala del Maggior Consiglio con il Paradiso di Tintoretto, la Scala dei Giganti, le prigioni e il Ponte dei Sospiri. Gli Itinerari Segreti portano nelle stanze dei funzionari.",
        "come": "Accanto alla Basilica, sul bacino di San Marco. Il biglietto standard comprende anche i musei di Piazza San Marco.",
        "quando": "Aperto tutti i giorni: 9-19 da aprile a ottobre, 9-18 da novembre a marzo, ultimo ingresso un'ora prima della chiusura. Prima mattina o fine pomeriggio per evitare i gruppi.",
        "tempo": "2-3 ore",
        "costo": "35 euro intero con i Musei di Piazza San Marco, 30 euro comprando online più di 30 giorni prima (2026)",
        "lat": 45.4337,
        "lng": 12.3404,
        "url": "https://palazzoducale.visitmuve.it/",
        "consiglio": "Comprare online con più di un mese di anticipo fa risparmiare 5 euro e permette di saltare la coda. Se si ha tempo, gli Itinerari Segreti, con visita guidata, mostrano le stanze che il percorso normale non tocca."
      },
      {
        "nome": "Scuola Grande di San Rocco",
        "testo": "Il ciclo di dipinti di Tintoretto, realizzato in più di vent'anni, copre pareti e soffitti di tre piani. È la Cappella Sistina di Venezia, ma con molte meno persone. Nella sala superiore gli specchi permettono di guardare il soffitto senza piegare il collo.",
        "come": "A piedi dalla stazione ferroviaria o da Piazzale Roma, vicino alla chiesa dei Frari (campo San Rocco). Con il vaporetto fermata San Tomà.",
        "quando": "Aperta tutti i giorni; controllare orari e chiusure sul sito. Le ore centrali sono tranquille.",
        "tempo": "1 ora",
        "lat": 45.4365,
        "lng": 12.3264,
        "url": "https://www.scuolagrandesanrocco.it/",
        "consiglio": "Prendere uno degli specchi in prestito all'ingresso per guardare i dipinti del soffitto. Nei Frari, a due passi, ci sono le pale di Tiziano e Bellini."
      },
      {
        "nome": "Rialto e il mercato del pesce",
        "testo": "Il ponte più antico sul Canal Grande, in pietra dal 1591, e attorno il quartiere commerciale storico. Alla Pescheria, sul lato di San Polo, la mattina si vendono pesce di laguna e di mare ai residenti; vicino ci sono la frutta e la verdura.",
        "come": "A piedi dalla stazione o da San Marco, o in vaporetto fino a Rialto. Il mercato è ad alcuni minuti dal ponte.",
        "quando": "Mattina presto. Controllare i giorni di apertura della Pescheria. Il ponte si riempie in tarda mattinata.",
        "tempo": "1 ora",
        "costo": "gratuito",
        "orari": "Mercato del pesce dal martedì al sabato la mattina; chiuso domenica e lunedì.",
        "lat": 45.4392,
        "lng": 12.3343,
        "consiglio": "Dopo il mercato si va a mangiare cicheti ai bacari vicini. Guardare il ponte all'alba, quando è vuoto."
      },
      {
        "nome": "Cannaregio e il Ghetto",
        "testo": "Il sestiere più abitato, con canali larghi e osterie dove mangiano i veneziani. Il Ghetto, istituito nel 1516, è tra i primi ghetti ebraici d'Europa: i palazzi sono alti perché non si poteva allargare l'area. Si visitano le sinagoghe e il museo ebraico.",
        "come": "A piedi dalla stazione ferroviaria. Il museo ebraico organizza visite guidate alle sinagoghe.",
        "quando": "Aperto tutto l'anno; orari e chiusure del museo ebraico sul suo sito.",
        "tempo": "mezza giornata",
        "costo": "passeggiata gratuita; sinagoghe solo con visita guidata del Museo Ebraico",
        "lat": 45.4447,
        "lng": 12.326,
        "consiglio": "Perdersi nelle calli lontane dall'asse stazione-Rialto: a Cannaregio è facile trovare Venezia come la vivono i residenti."
      },
      {
        "nome": "San Giorgio Maggiore",
        "testo": "L'isola davanti a San Marco con la chiesa di Palladio e un campanile da cui si vede la città e la laguna. È uno dei punti panoramici migliori, di solito con poca coda.",
        "come": "Dalla fermata San Zaccaria si prende il vaporetto della linea 2 per San Giorgio, in pochi minuti. Il campanile ha l'ascensore.",
        "quando": "Tutti i giorni; il tardo pomeriggio dà la luce migliore su San Marco. Controllare l'orario dell'ascensore.",
        "tempo": "1 ora",
        "costo": "chiesa gratuita; campanile a pagamento",
        "lat": 45.4294,
        "lng": 12.3433,
        "consiglio": "Dal campanile si vede San Marco e tutta la laguna con una frazione della folla che c'è sul campanile in piazza."
      },
      {
        "nome": "Torcello",
        "testo": "L'isola dove Venezia è cominciata. La basilica di Santa Maria Assunta, del VII secolo, ha un mosaico del Giudizio Universale che copre una parete intera. Oggi vivono poche decine di persone.",
        "come": "Da Fondamente Nove con il vaporetto 12 fino a Burano, e da lì con la linea 9 a Torcello.",
        "quando": "Tutti i giorni; la mattina è tranquilla. Controllare l'orario della basilica.",
        "tempo": "mezza giornata, abbinata a Burano",
        "lat": 45.4977,
        "lng": 12.418,
        "consiglio": "Ci sono andato in pieno giorno e c'erano venti persone: è lì che Venezia è cominciata, prima che esistesse Venezia."
      },
      {
        "nome": "Murano e Burano",
        "testo": "Murano è l'isola del vetro, con il Museo del Vetro e le fornaci. Burano ha le case dipinte in colori vivaci e la tradizione del pizzo. Sono molto fotografate e frequentate dai gruppi.",
        "come": "In vaporetto da Fondamente Nove: la linea 12 ferma a Murano e prosegue per Burano. Al Museo del Vetro si vedono i pezzi storici.",
        "quando": "Tutto l'anno; la mattina presto è meno affollato. In inverno l'isola è tranquilla.",
        "tempo": "mezza giornata ciascuna",
        "costo": "vaporetto con i pass ACTV; vetrerie di Murano spesso a ingresso libero",
        "lat": 45.4853,
        "lng": 12.4168,
        "consiglio": "Evitare le fornaci che portano i turisti con lance gratuite e poi spingono ad acquistare: acquistare il vetro marchiato Vetro Artistico Murano."
      },
      {
        "nome": "Canal Grande in vaporetto (linea 1)",
        "testo": "La linea 1 percorre tutto il Canal Grande fermando quasi a ogni pontile, davanti a Ca' d'Oro, Rialto, Ca' Rezzonico e la Salute. È il giro turistico più economico e più bello della città.",
        "come": "Si sale a Ferrovia o Piazzale Roma e si scende a San Marco: circa 40 minuti. Conviene sedersi sui posti esterni a prua o a poppa.",
        "quando": "Al mattino presto o di sera, quando i palazzi sono illuminati e c'è meno gente.",
        "tempo": "40 minuti",
        "costo": "corsa singola circa 9,50 €, pass 24 ore circa 25 € (2026)",
        "lat": 45.441,
        "lng": 12.3215,
        "url": "https://actv.avmspa.it/"
      },
      {
        "nome": "Gallerie dell'Accademia",
        "testo": "La pinacoteca della pittura veneziana, da Bellini e Carpaccio a Giorgione, Tiziano, Tintoretto e Veronese. Qui c'è la Tempesta di Giorgione e il Convito in casa di Levi del Veronese.",
        "come": "Fermata vaporetto Accademia, ai piedi del ponte di legno, in Dorsoduro.",
        "quando": "Chiuse il lunedì dal 2026: meglio la mattina, dal martedì alla domenica.",
        "tempo": "2 ore",
        "costo": "circa 15 € (2026)",
        "orari": "Martedì-domenica 9-19, biglietteria fino alle 18. Chiuse il lunedì.",
        "lat": 45.4312,
        "lng": 12.3282,
        "url": "https://www.gallerieaccademia.it/"
      },
      {
        "nome": "Collezione Peggy Guggenheim",
        "testo": "La casa-museo di Peggy Guggenheim in un palazzo incompiuto sul Canal Grande, con Pollock, Magritte, Ernst, Picasso e Calder. Il giardino delle sculture e la terrazza sull'acqua valgono la visita da soli.",
        "come": "A cinque minuti a piedi dall'Accademia, in Dorsoduro; biglietto online consigliato.",
        "quando": "In tarda mattinata, dopo le Gallerie dell'Accademia.",
        "tempo": "1h30",
        "costo": "circa 17 € (2026)",
        "orari": "Dalle 10 alle 18. Chiusa il martedì.",
        "lat": 45.4309,
        "lng": 12.3315,
        "url": "https://www.guggenheim-venice.it/"
      },
      {
        "nome": "Basilica dei Frari",
        "testo": "La grande chiesa gotica francescana di San Polo, con l'Assunta di Tiziano sull'altare maggiore e la sua Pala Pesaro. Ci sono le tombe di Tiziano e di Canova.",
        "come": "A piedi da San Rocco, che è accanto, o da Rialto in quindici minuti. Biglietto d'ingresso, oppure Chorus Pass.",
        "quando": "Da abbinare a San Rocco nella stessa mattina.",
        "tempo": "45 minuti",
        "costo": "circa 8 € (2026)",
        "lat": 45.4371,
        "lng": 12.3267,
        "url": "https://www.basilicadeifrari.it/"
      },
      {
        "nome": "Campanile di San Marco",
        "testo": "Il campanile di 98 metri, ricostruito identico dopo il crollo del 1902. Si sale in ascensore e dalla cella campanaria si vedono la laguna, le isole e, nelle giornate limpide, le Dolomiti.",
        "come": "In Piazza San Marco; biglietto online con orario per evitare la coda.",
        "quando": "In una giornata tersa d'inverno, oppure all'ultima ora per il tramonto.",
        "tempo": "30-45 minuti",
        "lat": 45.434,
        "lng": 12.339,
        "consiglio": "Se la coda è lunga, la vista da San Giorgio Maggiore è simile e con meno gente."
      },
      {
        "nome": "Santa Maria della Salute",
        "testo": "La basilica barocca del Longhena, votata dopo la peste del 1630, chiude il Canal Grande davanti a San Marco. Nella sagrestia ci sono tele di Tiziano e le Nozze di Cana del Tintoretto.",
        "come": "Fermata vaporetto Salute, o a piedi dall'Accademia; dalla Piazza si attraversa in traghetto da gondola dove c'è il servizio.",
        "quando": "Il 21 novembre, festa della Salute, con il ponte di barche dalla riva opposta.",
        "tempo": "30-45 minuti",
        "costo": "basilica gratuita; sagrestia con piccolo biglietto",
        "lat": 45.4308,
        "lng": 12.3346
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Arrivo a Santa Lucia e Canal Grande in vaporetto linea 1 fino a San Marco.",
          "Basilica di San Marco con prenotazione, poi Palazzo Ducale.",
          "Pranzo a cicchetti verso Rialto e il mercato.",
          "Pomeriggio tra San Polo e i Frari, con la Scuola Grande di San Rocco.",
          "Sera a Cannaregio, sulla Fondamenta della Misericordia."
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Canal Grande in vaporetto, San Marco, Palazzo Ducale, Campanile; sera a Cannaregio.",
          "Giorno 2: Rialto al mattino, Frari e San Rocco, Dorsoduro con Accademia o Guggenheim, Salute al tramonto e San Giorgio Maggiore in vaporetto."
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Canal Grande, San Marco, Palazzo Ducale.",
          "Giorno 2: Rialto, Frari, San Rocco, Gallerie dell'Accademia, Salute.",
          "Giorno 3: laguna: Murano al mattino, Burano a pranzo, Torcello nel pomeriggio; rientro per cena a Castello."
        ]
      }
    ],
    zone: [
      {
        "nome": "Cannaregio",
        "perChi": "chi vuole una zona abitata e spendere meno",
        "testo": "Vicino alla stazione, con canali ampi e osterie dei veneziani. Più tranquilla e meno cara del centro, a una passeggiata da San Marco.",
        "fascia": "120-220 €"
      },
      {
        "nome": "Castello",
        "perChi": "chi cerca calma lontano da San Marco",
        "testo": "Sestiere grande e residenziale, con zone molto quiete verso l'Arsenale e i Giardini. Poche cose da fare la sera, ma vicino a San Marco.",
        "fascia": "130-240 €"
      },
      {
        "nome": "Dorsoduro",
        "perChi": "chi vuole musei e vita serale",
        "testo": "Vicino alle Gallerie dell'Accademia e alla Collezione Guggenheim, con locali attorno a Campo Santa Margherita. Più viva la sera, un po' più cara.",
        "fascia": "150-280 €"
      },
      {
        "nome": "Mestre",
        "perChi": "chi vuole spendere il meno possibile",
        "testo": "Sulla terraferma, a pochi minuti di treno da Venezia Santa Lucia. Costa meno, ma si perdono l'alba e la sera in città, che sono i momenti migliori. Chi dorme in centro storico è esente dal contributo di accesso.",
        "fascia": "70-130 €"
      }
    ],
    gite: [
      {
        "nome": "Padova",
        "distanza": "30 minuti in treno",
        "come": "Treni regionali e alta velocità frequenti da Santa Lucia; la Cappella degli Scrovegni va prenotata.",
        "testo": "La Cappella degli Scrovegni affrescata da Giotto, la basilica del Santo e le piazze del mercato sotto il Palazzo della Ragione. Una città universitaria viva e meno cara."
      },
      {
        "nome": "Verona",
        "distanza": "1h10 in alta velocità",
        "come": "Frecciarossa o Italo da Santa Lucia a Verona Porta Nuova, poi 20 minuti a piedi fino all'Arena.",
        "testo": "L'Arena romana, piazza delle Erbe, i ponti sull'Adige e la vista da Castel San Pietro. D'estate si può restare la sera per l'opera all'Arena."
      },
      {
        "nome": "Chioggia",
        "distanza": "1h30 tra vaporetto e bus",
        "come": "Linea 11 dal Lido a Pellestrina e motonave per Chioggia, tutto con i biglietti ACTV.",
        "testo": "Una piccola Venezia di pescatori, con canali, il mercato del pesce e quasi nessun turista. Il viaggio attraverso il Lido e Pellestrina fa parte della gita."
      }
    ],
    sapori: [
      {
        "nome": "Cicheti e bacari",
        "testo": "Piccoli assaggi (polpette, baccalà su crostino, mezzo uovo con l'acciuga) da mangiare in piedi al banco con un'ombra di vino. Si va di bacaro in bacaro."
      },
      {
        "nome": "Sarde in saor",
        "testo": "Sarde fritte marinate con cipolla, aceto, uvetta e pinoli. Piatto storico dei marinai, si mangia freddo."
      },
      {
        "nome": "Baccalà mantecato",
        "testo": "Stoccafisso lavorato fino a una crema bianca, servito su crostini di polenta. Il cicheto più veneziano."
      },
      {
        "nome": "Fegato alla veneziana",
        "testo": "Fegato di vitello con cipolle stufate, di solito con polenta bianca."
      },
      {
        "nome": "Risotto di gò e risi e bisi",
        "testo": "Risotto con il ghiozzo, un pesce di laguna; il risi e bisi è una minestra densa di riso e piselli, di primavera."
      },
      {
        "nome": "Spritz",
        "testo": "Aperitivo con prosecco, Aperol o Select e soda, nato nel Veneto. Si beve nei bacari prima di cena."
      }
    ],
    attenzioni: [
      "Contributo di accesso per chi entra in giornata senza pernottare: la sperimentazione 2026 è finita il 27 luglio. Per il 2027 il Comune ha già fissato 72 giornate tra il 26 marzo e il 15 agosto, con il contributo dovuto dalle 8:30 alle 16:30; importi ed esenzioni vengono pubblicati su cda.ve.it. Controllare il calendario prima di partire.",
      "Dal 2024 i gruppi turistici sono limitati a 25 persone e sono vietati gli altoparlanti.",
      "Borseggi sui vaporetti affollati, a Rialto e a San Marco. Tenere borse chiuse e davanti.",
      "Il biglietto singolo del vaporetto è caro e i pass a tempo convengono se si fanno più corse al giorno. Convalidare sempre il biglietto prima di salire.",
      "Ristoranti attorno a San Marco e Rialto con menu turistico e coperto alto: controllare il conto. La gondola ha tariffe fissate dal Comune; concordare il prezzo prima di salire.",
      "Acqua alta in autunno e inverno: il MOSE protegge la laguna, ma le passerelle si montano ancora quando la marea supera una certa soglia. Portare stivali di gomma leggeri. Divieti: nuotare nei canali, sedersi sui ponti e mangiare sui gradini dei monumenti."
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Venezia?",
        "risposta": "Due giorni per San Marco, Rialto, i Frari e Dorsoduro; tre per aggiungere Murano, Burano e Torcello. Dormire in città permette di vederla la sera, quando i turisti di giornata sono partiti."
      },
      {
        "domanda": "Si paga per entrare a Venezia?",
        "risposta": "Solo chi arriva in giornata senza pernottare, in un calendario di giornate di alta stagione: nel 2026 5 € con prenotazione anticipata e 10 € a ridosso della data. Chi dorme in città è esente ma si registra."
      },
      {
        "domanda": "Conviene il pass del vaporetto?",
        "risposta": "Quasi sempre: una corsa singola costa circa 9,50 €, il pass di 24 ore circa 25 €. Con tre corse al giorno è già conveniente, e le isole lo rendono indispensabile."
      },
      {
        "domanda": "Quanto costa un giro in gondola?",
        "risposta": "Le tariffe sono fissate dal Comune: circa 90 € per 30 minuti di giorno, di più dopo le 19, per l'intera gondola fino a cinque persone. Per attraversare il Canal Grande il traghetto da gondola costa circa 2 €."
      },
      {
        "domanda": "Meglio dormire a Venezia o a Mestre?",
        "risposta": "Mestre costa circa la metà ed è a dieci minuti di treno, ma si perde la città di sera e al mattino presto. Per una o due notti vale la pena spendere di più e stare a Cannaregio o Castello."
      },
      {
        "domanda": "Cosa succede con l'acqua alta?",
        "risposta": "Da ottobre a gennaio può allagare la Piazza e le zone basse per qualche ora, in coincidenza con l'alta marea. Il MOSE protegge dalle maree più forti; per le altre bastano stivali di gomma e l'app delle maree del Comune."
      }
    ],
    esperienzeSlugs: ['venezia-alba'],
    tripSlugs: ['venezia-3-giorni', 'grandi-citta-italia'],
    imageAlt: 'Il Canal Grande di Venezia al tramonto con i palazzi affacciati sull\'acqua e un motoscafo che risale il canale',
    immagine: '/images/italia/venezia.jpg',
  },
  {
    slug: 'napoli',
    paeseSlug: 'italia',
    ordine: 6,
    nome: 'Napoli e il golfo',
    tipologia: ['città d\'arte', 'archeologia', 'gastronomia'],
    giorniConsigliati: '4-5 giorni con Pompei e la costiera',
    visitataPersonalmente: true,
    introduzione:
      'È il centro storico più densamente abitato d\'Europa, fondato dai greci, con sotto quaranta metri di città sotterranea e davanti un vulcano attivo che nel 79 d.C. ha sigillato due città intere sotto la cenere, conservandole meglio di qualsiasi restauro.',
    percheAndarci:
      'È la città italiana con più energia e più contraddizioni, e nel raggio di trenta chilometri ci sono Pompei, Ercolano, il Vesuvio, i Campi Flegrei, Capri e la Costiera Amalfitana. Una concentrazione così non c\'è altrove.',
    cosaVedere: [
      'Il centro storico UNESCO, con Spaccanapoli e San Gregorio Armeno',
      'Il Museo Archeologico Nazionale, che contiene i reperti di Pompei ed Ercolano e va visto **prima** dei siti, non dopo',
      'La Cappella Sansevero con il Cristo Velato',
      'Napoli sotterranea e le catacombe di San Gennaro e San Gaudioso',
      'Pompei ed Ercolano: **biglietti nominativi e tetto di 20.000 visitatori al giorno a Pompei, con fasce orarie in estate**',
      'Il Vesuvio, con la salita al cratere, e i Campi Flegrei con la Solfatara',
      'La Costiera Amalfitana, Capri, Ischia e Procida',
    ],
    cosaFare: [
      'Pompei ed Ercolano nello stesso viaggio, sapendo che si completano a vicenda (vedi la scheda esperienza dedicata)',
      'Napoli sotterranea, scendendo nelle cave greche e nei rifugi antiaerei (vedi la scheda esperienza dedicata)',
      'Mangiare una pizza napoletana dove è nata, diversa da qualsiasi altra pizza (vedi la scheda esperienza dedicata)',
      'Il Sentiero degli Dei sulla Costiera, da Bomerano a Nocelle: la costiera vista dall\'alto invece che dalla strada',
    ],
    doveDormire:
      'Il centro storico per stare dentro la città, Chiaia per una zona più tranquilla e residenziale, il Vomero per la vista e i prezzi. Per la Costiera, dormire a Napoli e fare le gite in giornata costa molto meno che alloggiare ad Amalfi o Positano in stagione.',
    doveMangiare:
      'La pizza, con la differenza che qui è un cibo popolare e costa poco: l\'impasto alto sul cornicione, cotto novanta secondi a quattrocento gradi, morbido al centro al punto che si mangia piegata. Poi il ragù napoletano che cuoce ore, la genovese (che di genovese non ha niente), il babà, la sfogliatella riccia calda del mattino, e il caffè, che a Napoli è una cosa seria: corto, forte, bevuto in piedi. E la pizza a portafoglio da strada, che costa due euro.',
    comeArrivare:
      'Alta velocità da Roma in poco più di un\'ora e da Milano in quattro e mezza, con la stazione di Napoli Centrale in città. Aeroporto di Capodichino, vicinissimo al centro. Per la Costiera e Pompei si usa la Circumvesuviana, che è lenta e affollata ma diretta. Da Capodichino l\'Alibus arriva alla Stazione Centrale in 15-20 minuti e al Molo Beverello in circa 35, per circa 5 €; il taxi bianco ufficiale ha una tariffa predeterminata di circa 21 € per il centro storico, da chiedere prima di salire.',
    comeSpostarsi:
      'Metropolitana linea 1, con le «stazioni dell\'arte» che sono opere in sé, e funicolari verso il Vomero. Il centro si gira a piedi. **Per la costiera, il traghetto batte l\'auto e l\'autobus in ogni stagione**, e d\'estate la strada statale amalfitana è un ingorgo continuo.',
    periodoMigliore:
      'aprile-giugno e settembre-ottobre. Ad agosto la costiera è satura e la statale è bloccata; in inverno Napoli è ottima e la costiera si svuota (con molte strutture chiuse). Il periodo natalizio a San Gregorio Armeno, la strada dei presepi, è un fenomeno a sé: bellissimo e impraticabile.',
    costi:
      'Museo Archeologico e siti vesuviani hanno biglietti contenuti rispetto al nord Italia. Il biglietto cumulativo per Pompei, Ercolano, Oplontis e Stabia dura tre giorni e conviene sempre se se ne fanno almeno due. Budget indicativo al giorno a persona, con la doppia divisa in due: basso 60-80 €, medio 110-150 €, alto oltre 220 €.',
    erroriDaEvitare: [
      'Andare a Pompei senza biglietto prenotato: dal 2024 i biglietti sono **nominativi** e c\'è un **tetto di 20.000 visitatori al giorno**, con fasce orarie in estate (15.000 al mattino, 5.000 dal primo pomeriggio). Esaurita la quota non si entra, né online né in biglietteria',
      'Visitare Pompei senza aver visto prima il Museo Archeologico di Napoli: mosaici, affreschi e bronzi migliori sono lì, e senza quel passaggio il sito sembra un campo di muri',
      'Fare Pompei a mezzogiorno d\'estate: non c\'è ombra, è vastissima, e ogni anno qualcuno sta male',
      'Scegliere Pompei al posto di Ercolano: Ercolano è molto più piccola ma meglio conservata, con i piani superiori, il legno carbonizzato, i mobili',
      'Guidare sulla statale amalfitana ad agosto',
      'Aspettarsi che a Napoli il traffico e i motorini seguano le regole a cui si è abituati: si attraversa con decisione e in modo prevedibile, senza aspettare un varco che non arriva',
    ],
    miaEsperienza:
      'Napoli è la città italiana che divide di più, perché chiede di adattarsi invece di accogliere. Il centro storico è la zona più densamente abitata d\'Europa e si sente: i vicoli sono stretti, i motorini passano dove non dovrebbero, i panni sono stesi sopra la testa e c\'è un rumore costante. Chi si irrita torna a casa dicendo che è caotica; chi entra nel ritmo scopre la città con più energia del paese. A cambiare di più la visita è però un consiglio banale sull\'ordine: il Museo Archeologico Nazionale va visto **prima** di Pompei e non dopo. Tutti i mosaici, gli affreschi e i bronzi migliori sono stati portati lì nell\'Ottocento, e chi arriva a Pompei senza averli visti cammina per tre ore in mezzo a muri senza capire cosa ci fosse dentro. E poi Ercolano, che quasi tutti saltano per fare la più famosa: è un decimo di Pompei ma è stata sepolta da fango e non da cenere, quindi si sono conservati i piani superiori, le travi di legno carbonizzate e perfino i mobili. Si cammina dentro case a due piani con le scale ancora al loro posto.',
    luoghi: [
      {
        "nome": "Centro storico, Spaccanapoli e San Gregorio Armeno",
        "testo": "Il tracciato greco-romano è ancora quello delle strade: Spaccanapoli taglia il centro in linea retta, con chiese, palazzi e botteghe. San Gregorio Armeno è la via dei presepi, con gli artigiani al lavoro tutto l'anno.",
        "come": "A piedi, partendo da Piazza del Gesù Nuovo o dalla fermata Dante della metro 1. Il percorso è tutto pedonale o quasi, con motorini che passano ovunque.",
        "quando": "Mattina presto per i vicoli senza folla. A dicembre San Gregorio Armeno è bellissima e impraticabile.",
        "tempo": "Mezza giornata",
        "costo": "passeggiata gratuita; chiese per lo più a ingresso libero",
        "lat": 40.8507,
        "lng": 14.2576,
        "consiglio": "Entrare nelle chiese aperte (Gesù Nuovo, Santa Chiara, San Domenico Maggiore): sono gratis o costano poco e fanno da pausa dal rumore."
      },
      {
        "nome": "Museo Archeologico Nazionale (MANN)",
        "testo": "Contiene i mosaici, gli affreschi, i bronzi e le statue portati qui da Pompei ed Ercolano, più la collezione Farnese. Va visto prima dei siti vesuviani: a Pompei poi si capisce cosa c'era dentro i muri.",
        "come": "Metro linea 1 o 2 fino a Museo/Piazza Cavour, a pochi minuti a piedi. Si visita da soli con i pannelli; l'audioguida è facoltativa.",
        "quando": "Chiuso il martedì. Aperto 9-19:30, ultimo ingresso alle 18:30 (2026). Mattina, quando c'è meno gente nelle sale dei mosaici.",
        "tempo": "2-3 ore",
        "orari": "9-19:30, ultimo ingresso alle 18:30. Chiuso il martedì.",
        "lat": 40.8536,
        "lng": 14.2505,
        "url": "https://mann-napoli.it/",
        "consiglio": "Salire subito ai mosaici di Pompei e al Gabinetto segreto, poi scendere alla collezione Farnese se resta tempo."
      },
      {
        "nome": "Cappella Sansevero",
        "testo": "Una cappella gentilizia del Settecento con il Cristo Velato di Giuseppe Sanmartino, un marmo che sembra un telo bagnato sul corpo. Nella cripta ci sono le macchine anatomiche.",
        "come": "A piedi, in via Francesco De Sanctis, nel centro storico. Visita da soli, si entra con biglietto a orario.",
        "quando": "Prenotare in anticipo: i posti si esauriscono, soprattutto nei fine settimana e in alta stagione. Foto vietate all'interno.",
        "tempo": "45 minuti",
        "costo": "circa 12 € con prenotazione online a fascia oraria (2026)",
        "orari": "Chiusa di solito il martedì.",
        "lat": 40.8494,
        "lng": 14.2547,
        "url": "https://www.museosansevero.it/",
        "consiglio": "Comprare il biglietto sul sito ufficiale giorni prima: davanti alla porta spesso c'è già la coda."
      },
      {
        "nome": "Napoli sotterranea e catacombe",
        "testo": "Sotto la città ci sono cave greche, acquedotti romani e rifugi antiaerei della guerra. Le catacombe di San Gennaro, nel rione Sanità, sono tra le più grandi del sud Italia, con affreschi paleocristiani.",
        "come": "Per Napoli sotterranea l'ingresso è in Piazza San Gaetano, con visita guidata a orari fissi. Le catacombe di San Gennaro sono nel rione Sanità, raggiungibili a piedi dal MANN.",
        "quando": "Tutto l'anno, anche con pioggia. Sottoterra la temperatura è fresca: portare una felpa.",
        "tempo": "1 ora e mezza per ciascuna visita",
        "lat": 40.851,
        "lng": 14.257,
        "consiglio": "Fare una sola delle due visite se il tempo è poco: Napoli sotterranea per la guerra e le cave, le catacombe per l'arte."
      },
      {
        "nome": "Pompei",
        "testo": "Una grande città romana sigillata dall'eruzione del 79 d.C.: strade con i solchi dei carri, botteghe, terme, case con affreschi, il foro e l'anfiteatro. La parte scavata è grande: serve scegliere cosa vedere.",
        "come": "Circumvesuviana linea Napoli-Sorrento fino a Pompei Scavi-Villa dei Misteri, da Napoli Garibaldi. Si può anche arrivare con treno regionale a Pompei. Audioguida o guida consigliate.",
        "quando": "All'apertura o nel tardo pomeriggio d'estate; non a mezzogiorno, senza ombra. Aperto 9-19 dal 16 marzo al 14 ottobre (ultimo ingresso 17:30) e 9-17 nel resto dell'anno (ultimo ingresso 15:30). Chiuso il 25 dicembre e il 1 gennaio, salvo aperture straordinarie. Biglietti nominativi, tetto di 20.000 ingressi al giorno e fasce orarie in alta stagione.",
        "tempo": "3-4 ore",
        "costo": "Pompei Express 20 euro; Pompei+, con le ville suburbane e Boscoreale, 25 euro (dal 12 gennaio 2026). Vendita online solo su Vivaticket, oppure in biglietteria",
        "lat": 40.749,
        "lng": 14.4848,
        "url": "https://pompeiisites.org/",
        "consiglio": "Visto dopo il MANN: si riconoscono le opere. Portare acqua e cappello, i punti ristoro sono pochi."
      },
      {
        "nome": "Ercolano",
        "testo": "Una città più piccola di Pompei, sepolta da fango e non da cenere: si sono conservati piani superiori, travi di legno carbonizzato, porte, letti. Si vede come vivevano davvero.",
        "come": "Circumvesuviana linea Napoli-Sorrento fino a Ercolano Scavi, da Napoli Garibaldi, poi un tratto a piedi in discesa.",
        "quando": "Mattina, in estate. Il sito chiude nelle festività principali: controllare il calendario sul sito ufficiale.",
        "tempo": "2 ore",
        "lat": 40.8059,
        "lng": 14.348,
        "url": "https://ercolano.beniculturali.it/",
        "consiglio": "Se c'è tempo per un solo sito, molti scelgono Ercolano: meno folla, più dettagli conservati."
      },
      {
        "nome": "Vesuvio",
        "testo": "Il vulcano che ha sepolto Pompei è attivo. Si arriva in auto o con navetta fino ai parcheggi in quota e si sale a piedi lungo il sentiero del Gran Cono fino al bordo del cratere, con vista sul golfo.",
        "come": "Da Ercolano ci sono navette verso i parcheggi in quota. Il biglietto per il Gran Cono si compra solo online, sul canale indicato dal Parco Nazionale del Vesuvio. Dal parcheggio si cammina su sentiero sterrato in salita, con scarpe chiuse.",
        "quando": "Mattina, con cielo limpido. Con le allerte meteo o per eventi l'accesso viene sospeso: controllare gli avvisi sul sito del Parco.",
        "tempo": "3-4 ore tra andata, salita e ritorno",
        "costo": "circa 12 €, solo online (2026)",
        "lat": 40.8213,
        "lng": 14.4261,
        "url": "https://www.parconazionaledelvesuvio.it/",
        "consiglio": "Controllare il meteo il giorno prima: con nuvole basse si sale senza vedere nulla."
      },
      {
        "nome": "Campi Flegrei e Pozzuoli",
        "testo": "Un'area vulcanica a ovest di Napoli, con bradisismo ancora attivo: l'anfiteatro Flavio di Pozzuoli, il Rione Terra, il parco archeologico di Baia con le terme romane.",
        "come": "Cumana o linea 2 della metropolitana fino a Pozzuoli, poi bus locali o taxi per i siti. Si arriva anche in auto.",
        "quando": "Controllare prima gli avvisi della Protezione civile e l'apertura dei singoli siti, che cambia con i lavori.",
        "tempo": "Mezza giornata",
        "lat": 40.8231,
        "lng": 14.1214,
        "consiglio": "Abbinarla a un pranzo di pesce a Pozzuoli: costa meno che a Posillipo."
      },
      {
        "nome": "Certosa di San Martino e Castel Sant'Elmo",
        "testo": "In cima al Vomero, la certosa barocca con il chiostro, i presepi e il belvedere sul golfo, e accanto la fortezza stellata di Sant'Elmo. Da qui si capisce la forma della città, dal Vesuvio a Posillipo.",
        "come": "Funicolare Centrale o di Montesanto fino al Vomero, poi 10 minuti a piedi. Biglietti separati per certosa e castello.",
        "quando": "Nel pomeriggio con il cielo limpido, per il golfo controluce.",
        "tempo": "2-3 ore",
        "costo": "circa 6 € la certosa e circa 5 € il castello (2026)",
        "orari": "Certosa chiusa il martedì; Castel Sant'Elmo aperto tutti i giorni.",
        "lat": 40.8434,
        "lng": 14.239
      },
      {
        "nome": "Museo e Real Bosco di Capodimonte",
        "testo": "La reggia borbonica sulla collina ospita una delle pinacoteche più ricche d'Italia: la Flagellazione di Caravaggio, Tiziano, Masaccio, Artemisia Gentileschi. Intorno c'è un parco di oltre cento ettari.",
        "come": "Bus dal Museo Archeologico o da piazza Dante, circa 20 minuti; in taxi è più semplice.",
        "quando": "Una mattina feriale: le sale sono spesso quasi vuote.",
        "tempo": "3 ore con il parco",
        "costo": "circa 15 € il museo (2026); parco gratuito",
        "orari": "Museo chiuso il mercoledì; il parco apre ogni giorno.",
        "lat": 40.867,
        "lng": 14.2505,
        "url": "https://capodimonte.cultura.gov.it/"
      },
      {
        "nome": "Duomo e Tesoro di San Gennaro",
        "testo": "La cattedrale gotica conserva la cappella del Tesoro con le ampolle del sangue di san Gennaro, che si scioglie tre volte l'anno. Dal transetto si scende alla basilica paleocristiana di Santa Restituta e al battistero più antico d'Occidente.",
        "come": "In via Duomo, a cinque minuti da via dei Tribunali. La cattedrale è gratuita; il Museo del Tesoro, accanto, ha un biglietto.",
        "quando": "Il sabato prima della prima domenica di maggio, il 19 settembre e il 16 dicembre per il miracolo, con folla enorme.",
        "tempo": "1 ora",
        "costo": "cattedrale gratuita; Museo del Tesoro a pagamento",
        "lat": 40.8525,
        "lng": 14.2597
      },
      {
        "nome": "Pio Monte della Misericordia",
        "testo": "Un'istituzione di carità del Seicento ancora attiva, che conserva sull'altare per cui fu dipinto le Sette opere di Misericordia di Caravaggio. Al piano superiore c'è una piccola quadreria.",
        "come": "In via dei Tribunali, di fronte alla guglia di San Gennaro, accanto al Duomo.",
        "quando": "In mattinata, prima del pranzo in pizzeria sui Tribunali.",
        "tempo": "30-45 minuti",
        "costo": "circa 10 € (2026)",
        "lat": 40.8517,
        "lng": 14.2595,
        "url": "https://www.piomontedellamisericordia.it/"
      },
      {
        "nome": "Chiostro di Santa Chiara",
        "testo": "Dietro la basilica angioina di Santa Chiara c'è il chiostro delle clarisse, con pilastri e panche rivestiti di maioliche settecentesche a tralci e scene di campagna. È un giardino silenzioso in mezzo a Spaccanapoli.",
        "come": "Piazza del Gesù Nuovo, all'inizio di Spaccanapoli; metro 1 Dante o Toledo e cinque minuti a piedi.",
        "quando": "A metà giornata, per una pausa dal caos.",
        "tempo": "45 minuti",
        "costo": "basilica gratuita; chiostro e museo con biglietto di pochi euro",
        "lat": 40.8467,
        "lng": 14.2525,
        "url": "https://www.monasterodisantachiara.it/"
      },
      {
        "nome": "Piazza del Plebiscito e Palazzo Reale",
        "testo": "La piazza più grande di Napoli, chiusa dal colonnato di San Francesco di Paola e dal Palazzo Reale dei Borbone. Accanto ci sono il Teatro San Carlo e la Galleria Umberto I, e il Gambrinus per il caffè.",
        "come": "Metro 1 fermata Municipio o Toledo; dal centro storico si scende a piedi per via Toledo in 20 minuti.",
        "quando": "Al tramonto, scendendo poi verso il lungomare.",
        "tempo": "1-2 ore con il Palazzo Reale",
        "costo": "piazza gratuita; Palazzo Reale a pagamento",
        "lat": 40.8359,
        "lng": 14.2488
      },
      {
        "nome": "Lungomare e Castel dell'Ovo",
        "testo": "Il lungomare pedonale di via Caracciolo e via Partenope va da Mergellina al Castel dell'Ovo, con il Vesuvio di fronte. Il castello, sull'isolotto di Megaride, ha terrazze aperte e il borgo Marinari ai piedi.",
        "come": "A piedi da Piazza del Plebiscito in dieci minuti.",
        "quando": "La sera, quando i napoletani fanno la passeggiata.",
        "tempo": "1-2 ore",
        "costo": "gratuito, castello compreso",
        "lat": 40.8282,
        "lng": 14.2477
      },
      {
        "nome": "Quartieri Spagnoli",
        "testo": "La griglia di vicoli stretti sopra via Toledo, costruita per le truppe spagnole nel Cinquecento, con i panni stesi e i bassi a livello strada. In Largo Maradona c'è il murale dedicato al calciatore, diventato un santuario laico.",
        "come": "Metro 1 Toledo, la stazione dell'arte più fotografata, e si sale nei vicoli.",
        "quando": "Di giorno; il sabato sera il largo è pieno di gente.",
        "tempo": "1 ora",
        "costo": "gratuito",
        "lat": 40.8418,
        "lng": 14.2463,
        "consiglio": "Telefono in tasca e attenzione agli scooter che passano nei vicoli."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Spaccanapoli, Santa Chiara, San Gregorio Armeno e Cappella Sansevero prenotata.",
          "Pio Monte della Misericordia e Duomo; pizza a pranzo su via dei Tribunali.",
          "Pomeriggio: Museo Archeologico Nazionale.",
          "Scendere per via Toledo e i Quartieri Spagnoli fino a Piazza del Plebiscito.",
          "Sera sul lungomare fino al Castel dell'Ovo."
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: centro storico con Sansevero, Santa Chiara e Napoli sotterranea; pomeriggio al MANN.",
          "Giorno 2: Pompei al mattino presto in Circumvesuviana; rientro nel pomeriggio, Plebiscito, Quartieri Spagnoli e lungomare al tramonto."
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: centro storico, Sansevero, Pio Monte, Duomo, MANN.",
          "Giorno 2: Pompei e, nel pomeriggio, Ercolano o il Vesuvio.",
          "Giorno 3: Capodimonte al mattino, funicolare per il Vomero con San Martino e Sant'Elmo, discesa a Chiaia e sera sul lungomare."
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro storico",
        "perChi": "Chi vuole essere dentro la città",
        "testo": "Tutto a piedi, vicoli pieni di vita e di locali fino a tardi. Rumore costante di motorini e voci anche la notte, strade strette e non sempre pulite. Meglio una camera sui piani alti o sul cortile.",
        "fascia": "70-130 €"
      },
      {
        "nome": "Chiaia e lungomare",
        "perChi": "Chi cerca una zona più tranquilla",
        "testo": "Quartiere residenziale e commerciale, con ristoranti e vista sul mare dal lungomare. Più tranquillo la sera, raggiungibile a piedi dal centro storico e vicino alla metro.",
        "fascia": "110-200 €"
      },
      {
        "nome": "Vomero",
        "perChi": "Chi bada ai prezzi e vuole una vista",
        "testo": "Collina servita da funicolari e metro linea 1, con panorami sul golfo. Più sicuro e silenzioso, ma si scende e si risale in funicolare ogni volta: la sera si perde tempo.",
        "fascia": "80-140 €"
      }
    ],
    gite: [
      {
        "nome": "Reggia di Caserta",
        "distanza": "40 minuti in treno",
        "come": "Treni regionali da Napoli Centrale; la reggia è davanti alla stazione di Caserta.",
        "testo": "La reggia borbonica del Vanvitelli, con 1.200 stanze e un parco lungo tre chilometri di fontane e cascate. Per il parco conviene noleggiare una bici o prendere la navetta."
      },
      {
        "nome": "Capri",
        "distanza": "50 minuti in aliscafo",
        "come": "Aliscafi dal Molo Beverello e da Calata Porta di Massa, frequenti da primavera ad autunno.",
        "testo": "La Piazzetta, i Faraglioni, Anacapri e il Monte Solaro in seggiovia. In giornata si vede bene se si parte con la prima corsa."
      },
      {
        "nome": "Procida",
        "distanza": "40 minuti-1 ora in traghetto",
        "come": "Aliscafi e traghetti da Molo Beverello o da Pozzuoli.",
        "testo": "L'isola più piccola e meno turistica del golfo, con le case colorate della Marina Corricella e Terra Murata in alto. Si gira a piedi o in bus."
      },
      {
        "nome": "Sorrento e Costiera Amalfitana",
        "distanza": "1h10 in Circumvesuviana fino a Sorrento",
        "come": "Circumvesuviana fino a Sorrento e bus SITA per Positano e Amalfi; da primavera anche traghetti diretti da Napoli.",
        "testo": "In giornata si arriva a Sorrento e a una delle due perle della Costiera. Per vederla davvero servono almeno due notti sul posto."
      }
    ],
    sapori: [
      {
        "nome": "Pizza napoletana",
        "testo": "Impasto alto e morbido sul cornicione, cotta in forno a legna in meno di due minuti. Le due classiche sono la Margherita e la Marinara; si mangia piegata «a libretto» e a portafoglio per strada."
      },
      {
        "nome": "Ragù e genovese",
        "testo": "Due salse di domenica. Il ragù cuoce ore con la carne; la genovese è un sugo di cipolle e carne che di Genova non ha nulla. Si trovano nelle trattorie più che nelle pizzerie."
      },
      {
        "nome": "Sfogliatella e babà",
        "testo": "La sfogliatella riccia, calda del mattino, con ricotta e canditi. Il babà, brioche inzuppata nel rum, si mangia in pasticceria."
      },
      {
        "nome": "Frittura di strada",
        "testo": "Frittatine di pasta, crocchè di patate, arancini e pizza fritta. Si prendono nei cuoppi di carta, per due-tre euro."
      },
      {
        "nome": "Caffè",
        "testo": "Corto, forte, preso in piedi al banco. Il «caffè sospeso» è l'usanza di pagarne uno in più per chi viene dopo."
      }
    ],
    attenzioni: [
      "Borseggi su Circumvesuviana, stazione Centrale, Piazza Garibaldi e nei vicoli affollati: borsa davanti, niente telefono in mano vicino ai motorini.",
      "A Pompei i biglietti sono nominativi e c'è un tetto di visitatori al giorno: comprare online sul sito ufficiale e non da intermediari che chiedono di più.",
      "Taxi: usare solo quelli bianchi ufficiali, chiedere la tariffa fissa per il tragitto aeroporto-centro e porto, diffidare di chi propone un passaggio in aeroporto.",
      "Il centro ha zone a traffico limitato con telecamere: dormire dove si può lasciare l'auto in garage ed evitare di guidare in città.",
      "Scioperi dei trasporti frequenti, anche della Circumvesuviana: controllare il calendario prima di programmare Pompei o il Vesuvio.",
      "Vesuvio e Campi Flegrei sono aree vulcaniche attive: seguire gli avvisi della Protezione civile e le indicazioni dei sentieri."
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Napoli?",
        "risposta": "Tre giorni: uno per il centro storico e il MANN, uno per Pompei ed Ercolano, uno per Vomero, Capodimonte e lungomare. Con cinque si aggiungono Capri o Procida e i Campi Flegrei."
      },
      {
        "domanda": "Napoli è sicura per i turisti?",
        "risposta": "Nel centro e nelle zone turistiche sì, con le precauzioni di ogni grande città: borseggi e scippi sono il rischio principale. Meglio non ostentare telefono e orologi e tenere la borsa dal lato del muro."
      },
      {
        "domanda": "Come si va da Napoli a Pompei?",
        "risposta": "Con la Circumvesuviana da Porta Nolana o Garibaldi fino a Pompei Scavi, circa 40 minuti. Il biglietto degli scavi è nominativo e a fascia oraria, da comprare su pompeiisites.org."
      },
      {
        "domanda": "Serve prenotare la Cappella Sansevero?",
        "risposta": "Sì, l'ingresso è solo a fasce orarie online e nei fine settimana si esaurisce. Costa circa 12 € ed è chiusa di solito il martedì."
      },
      {
        "domanda": "Dove dormire a Napoli?",
        "risposta": "Centro storico per avere tutto a piedi e spendere poco, Chiaia per il mare e i locali, Vomero per la tranquillità. Una doppia costa da circa 70 € in centro a 200 € sul lungomare."
      }
    ],
    esperienzeSlugs: ['pompei-ercolano', 'napoli-sotterranea', 'pizza-napoletana'],
    tripSlugs: ['napoli-3-giorni', 'grandi-citta-italia'],
    imageAlt: 'Il golfo di Napoli con il Vesuvio sullo sfondo, una nave in rada e le barche ormeggiate nel porticciolo',
    immagine: '/images/italia/napoli.jpg',
  },
  {
    slug: 'milano-nord',
    paeseSlug: 'italia',
    ordine: 7,
    nome: 'Milano e il nord',
    tipologia: ['città', 'design', 'laghi'],
    giorniConsigliati: '2-3 giorni, più i laghi',
    visitataPersonalmente: true,
    introduzione:
      'La città che meno somiglia al resto d\'Italia: lavora, si muove in fretta, e ha scelto il design e la moda come identità. Ha anche un Duomo gotico che ci hanno messo quasi seicento anni a finire e, su un muro di refettorio, un dipinto che si prenota mesi prima per vederlo quindici minuti.',
    percheAndarci:
      'È la porta d\'ingresso naturale del nord Italia, e nel raggio di un\'ora ha i laghi prealpini (Como, Maggiore, Garda), da due secoli tra i paesaggi più celebrati d\'Europa.',
    cosaVedere: [
      'Il Duomo e soprattutto le **terrazze**, che si camminano tra i pinnacoli e sono la parte migliore',
      'Il Cenacolo di Leonardo in Santa Maria delle Grazie: **prenotazione obbligatoria, aperture a cadenza trimestrale, quindici minuti di visita**',
      'La Pinacoteca di Brera e il quartiere omonimo',
      'Il Castello Sforzesco, con l\'ultima Pietà di Michelangelo, lasciata incompiuta',
      'La Galleria Vittorio Emanuele II e il Teatro alla Scala con il suo museo',
      'I Navigli e la zona di Porta Venezia, per la sera',
      'Il Lago di Como con Bellagio e Varenna, il Lago Maggiore con le Isole Borromee, il Garda con Sirmione',
    ],
    cosaFare: [
      'Salire sulle terrazze del Duomo, meglio a piedi che in ascensore',
      'Prenotare il Cenacolo con mesi di anticipo: è l\'unico modo, e le prenotazioni si aprono a scaglioni trimestrali',
      'L\'aperitivo, che a Milano è un\'istituzione con le sue regole',
      'Una giornata sul Lago di Como in battello, il modo giusto di vederlo: la strada costiera è stretta e trafficata',
    ],
    doveDormire:
      'Brera e il centro per la comodità, Navigli e Porta Venezia per la sera, la zona della Stazione Centrale per i prezzi. Milano è ben servita dalla metropolitana: la posizione conta meno che in altre città italiane.',
    doveMangiare:
      'La cucina milanese è ricca e invernale: risotto allo zafferano, cotoletta (alta, con l\'osso, non sottile), ossobuco, cassoeula. Il resto è una scena internazionale tra le più sviluppate d\'Italia. L\'aperitivo è un formato: si paga il drink e il buffet è compreso, con qualità molto variabile. I mercati coperti e la zona di Porta Romana hanno il miglior rapporto qualità-prezzo.',
    comeArrivare:
      'Tre aeroporti (Malpensa, Linate, Bergamo) e il nodo ferroviario più importante d\'Italia: da Milano Centrale si raggiunge Roma in tre ore, Firenze in un\'ora e quaranta, Venezia in due e mezza.',
    comeSpostarsi:
      'Metropolitana con quattro linee, tram storici, bike e scooter sharing ovunque. **Area B e Area C limitano l\'accesso delle auto al centro**, con telecamere: chi entra in auto senza saperlo paga.',
    periodoMigliore:
      'aprile-giugno e settembre-ottobre. L\'inverno è freddo e nebbioso ma la città funziona; l\'estate è afosa e ad agosto Milano si svuota, con molti locali chiusi. Durante il Salone del Mobile (aprile) e le settimane della moda i prezzi degli alloggi triplicano e trovare posto è difficile.',
    costi:
      'Per gli alloggi è la città più cara d\'Italia. Duomo e terrazze hanno un biglietto cumulativo; il Cenacolo costa 15 euro intero (sito ufficiale, 2026), il problema è trovare posto.',
    erroriDaEvitare: [
      'Provare a vedere il Cenacolo senza prenotazione: **non si entra**, le aperture delle prenotazioni sono trimestrali e si esauriscono in poco tempo. È l\'errore più comune dei visitatori a Milano',
      'Entrare in centro in auto senza conoscere Area B e Area C',
      'Prenotare durante il Salone del Mobile senza saperlo: i prezzi degli hotel arrivano a moltiplicarsi',
      'Fare il Lago di Como in auto in un fine settimana estivo: la strada è stretta, i parcheggi non esistono e il battello fa tutto meglio',
      'Giudicare Milano dal centro: la città interessante sta nei quartieri, e il centro è la parte che la rappresenta meno',
    ],
    miaEsperienza:
      'Milano ha fama di essere la città italiana che non vale un viaggio, e per il turismo classico è quasi vero: il centro si vede in un giorno e non ha il fascino stratificato di Roma o di Firenze. Poi però si sale sulle terrazze del Duomo, che quasi tutti saltano per fare solo l\'interno, e la prospettiva cambia: si cammina sul tetto di una cattedrale gotica in mezzo a centotrentacinque guglie e a tremila statue, con la città sotto e nelle giornate limpide le Alpi all\'orizzonte. È una delle cose più belle d\'Italia e costa quanto un museo. Sul Cenacolo va detta la cosa scomoda: non lo si «prova a vedere». È un dipinto su un muro, in un ambiente a umidità controllata dove entrano piccoli gruppi per quindici minuti; si prenota mesi prima con aperture trimestrali, e chi arriva a Milano sperando di trovarne uno all\'ultimo non entra. Chi ci riesce, però, sta davanti a un affresco che scompare da cinquecento anni (Leonardo lo dipinse con una tecnica sperimentale che iniziò a degradarsi quando lui era ancora vivo), e quei quindici minuti valgono la trafila.',
    luoghi: [
      {
        "nome": "Duomo e terrazze",
        "testo": "La cattedrale gotica ha richiesto quasi seicento anni. Le terrazze sul tetto si camminano tra le guglie e le statue, con la città sotto e, nelle giornate limpide, le Alpi all'orizzonte. Costa quanto un museo e per me è la parte migliore.",
        "come": "Metro M1 o M3 fino a Duomo, l'ingresso delle terrazze è sul lato della piazza. Si sale a piedi o in ascensore; l'ascensore non arriva al livello più alto, dove si prosegue per scale.",
        "quando": "Mattina o tardo pomeriggio, con cielo limpido. Prenotare online nei weekend e in alta stagione. Il museo del Duomo ha giorni di chiusura propri: controllare.",
        "tempo": "1 ora e mezza per le terrazze, 2-3 ore con interno e museo",
        "url": "https://www.duomomilano.it/",
        "consiglio": "Salire a piedi: il tragitto è parte della visita e le code all'ascensore a volte sono lunghe."
      },
      {
        "nome": "Cenacolo Vinciano",
        "testo": "L'Ultima Cena di Leonardo, dipinta su una parete del refettorio di Santa Maria delle Grazie. La tecnica sperimentale ha iniziato a rovinarsi quando lui era ancora vivo. Si entra in gruppi di 40 persone al massimo, per turni di 15 minuti, in un ambiente a umidità controllata.",
        "come": "Metro M1 Conciliazione o M2 Cadorna, poi pochi minuti a piedi. Visita da soli, a orario fissato sul biglietto.",
        "quando": "Da martedì a domenica 8:15-19, ultimo ingresso alle 18:45; chiuso il lunedì, il 1 gennaio e il 25 dicembre. Prenotazione obbligatoria per tutti i biglietti, anche gratuiti: senza non si entra. Il biglietto si ritira alla biglietteria accanto all'ingresso almeno 30 minuti prima del turno, con un documento.",
        "tempo": "15 minuti dentro, un'ora con attesa e controlli",
        "costo": "15 euro intero, 2 euro per i 18-25 anni, gratis sotto i 18 (sito ufficiale, 2026)",
        "url": "https://cenacolovinciano.org/",
        "consiglio": "Controllare con mesi di anticipo le nuove aperture di vendita e prenotare appena disponibili: è l'errore più comune a Milano."
      },
      {
        "nome": "Pinacoteca di Brera",
        "testo": "Una delle raccolte di pittura italiana più importanti, con Mantegna, Raffaello, Caravaggio e il Bacio di Hayez. Si trova in un palazzo del Settecento con cortile, nel quartiere di Brera.",
        "come": "Metro M2 Lanza o M3 Montenapoleone, poi a piedi tra le vie di Brera. Visita da soli.",
        "quando": "Chiusa il lunedì; dal martedì alla domenica 8:30-19:15, con prenotazione richiesta. Il pomeriggio è più tranquillo. Il quartiere si gira bene la sera.",
        "tempo": "2 ore",
        "costo": "20 euro intero, biglietto Grande Brera con Palazzo Citterio (2026)",
        "url": "https://pinacotecabrera.org/",
        "consiglio": "Scegliere cinque o sei sale e non provare a vederle tutte."
      },
      {
        "nome": "Castello Sforzesco",
        "testo": "La fortezza dei Visconti e degli Sforza oggi ospita musei civici. Il più noto contiene la Pietà Rondanini, l'ultima opera di Michelangelo, lasciata incompiuta. Il cortile e il parco Sempione sono gratuiti.",
        "come": "Metro M1 Cairoli o M2 Lanza. Cortili e giardino sono aperti a tutti, i musei hanno biglietto a parte.",
        "quando": "Musei chiusi il lunedì. Mattina per il castello, pomeriggio per il parco.",
        "tempo": "2 ore con i musei, 1 ora per cortili e parco",
        "url": "https://www.milanocastello.it/",
        "consiglio": "Entrare solo per la Pietà Rondanini, se si ha poco tempo: è una sala sola."
      },
      {
        "nome": "Galleria Vittorio Emanuele II e Teatro alla Scala",
        "testo": "La galleria in vetro e ferro dell'Ottocento unisce Piazza Duomo a Piazza della Scala. Accanto c'è il teatro, con un museo che mostra costumi, strumenti e documenti.",
        "come": "A pochi passi dal Duomo. Il museo della Scala è nel Largo Ghiringhelli.",
        "quando": "Galleria sempre aperta. Museo della Scala con orari propri: controllare prima. Sera per le vetrine illuminate.",
        "tempo": "1 ora per galleria e piazza, un'ora in più col museo",
        "consiglio": "I caffè in galleria sono cari: meglio un caffè in una via laterale e la galleria solo da passeggio."
      },
      {
        "nome": "Navigli",
        "testo": "Due canali, il Naviglio Grande e il Pavese, un tempo usati per portare il marmo del Duomo. Oggi sono pieni di locali e botteghe, con l'aperitivo al tramonto.",
        "come": "Metro M2 Porta Genova o tram. Si cammina lungo le alzaie.",
        "quando": "Sera per l'aperitivo. L'ultima domenica del mese c'è il mercato dell'antiquariato sul Naviglio Grande.",
        "tempo": "2-3 ore la sera",
        "consiglio": "Allontanarsi dai locali sul canale: due vie più in là i prezzi calano."
      },
      {
        "nome": "Lago di Como: Varenna e Bellagio",
        "testo": "Il lago prealpino più celebre, con borghi di pietra e ville sulle rive. Varenna e Bellagio si guardano a vicenda e si collegano in battello.",
        "come": "Treno da Milano Centrale a Varenna-Esino, poi battello a Bellagio. Linee e orari su Navigazione Laghi.",
        "quando": "Primavera e autunno, quando i battelli sono meno pieni. Nei fine settimana d'estate c'è molta folla.",
        "tempo": "Una giornata intera",
        "url": "https://www.navigazionelaghi.it/",
        "consiglio": "Si va in treno e battello, non in auto: la strada costiera è stretta e senza parcheggi."
      },
      {
        "nome": "Lago Maggiore e Isole Borromee",
        "testo": "Tre isole di fronte a Stresa: Isola Bella con il palazzo barocco e il giardino, Isola Madre con il parco botanico, Isola dei Pescatori con il borgo di pescatori.",
        "come": "Treno da Milano Centrale a Stresa, poi battello dal lungolago. Biglietti separati per i palazzi.",
        "quando": "Aprile-ottobre, con i giardini fioriti in primavera. In alta stagione partire presto.",
        "tempo": "Una giornata per due isole",
        "consiglio": "Con una giornata sola scegliere Isola Bella e Isola dei Pescatori: si fanno nello stesso giro."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Duomo e terrazze, a piedi.",
          "Pranzo: Galleria Vittorio Emanuele II, poi un panino o un risotto in una via laterale.",
          "Primo pomeriggio: Castello Sforzesco, con la Pietà Rondanini.",
          "Pomeriggio: Brera, a piedi.",
          "Sera: aperitivo sui Navigli."
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1 come sopra; se si ha il biglietto del Cenacolo, metterlo al posto del Castello.",
          "Giorno 2: treno a Varenna e battello per Bellagio, oppure a Stresa per le Isole Borromee.",
          "Pranzo sul lago.",
          "Pomeriggio: battello e ritorno in treno prima di sera."
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Duomo, Galleria, Scala, Brera.",
          "Giorno 2: Cenacolo con biglietto prenotato, Castello Sforzesco, Navigli la sera.",
          "Giorno 3: un lago in giornata, Como o Maggiore."
        ]
      }
    ],
    zone: [
      {
        "nome": "Brera e centro",
        "perChi": "Chi vuole andare a piedi ovunque",
        "testo": "Comodo e bello, vicino a Duomo, Brera e Castello. Il più caro della città, con locali che chiudono presto e meno vita di sera."
      },
      {
        "nome": "Navigli e Porta Ticinese",
        "perChi": "Chi vuole la sera",
        "testo": "Locali e vita notturna fino a tardi. Il rumore sull'alzaia si sente nelle camere sul canale: meglio una camera sul retro."
      },
      {
        "nome": "Stazione Centrale",
        "perChi": "Chi ha un budget stretto o parte in treno",
        "testo": "Alberghi più economici e collegamenti verso i laghi e le altre città. La zona è meno curata e la sera conviene stare attenti; il centro è a poche fermate di metro."
      }
    ],
    sapori: [
      {
        "nome": "Risotto alla milanese",
        "testo": "Riso mantecato con zafferano e midollo. Si mangia in trattoria, spesso accanto all'ossobuco."
      },
      {
        "nome": "Cotoletta alla milanese",
        "testo": "Il taglio è alto e con l'osso, impanata e fritta nel burro, diversa dalla sottile «viennese». Si trova nelle trattorie tradizionali."
      },
      {
        "nome": "Ossobuco",
        "testo": "Stinco di vitello in umido con gremolada. È un piatto invernale."
      },
      {
        "nome": "Panettone",
        "testo": "Dolce natalizio, ma nelle pasticcerie milanesi si trova buono quasi tutto l'anno."
      },
      {
        "nome": "Aperitivo",
        "testo": "Si paga il drink e il buffet è compreso, con qualità molto variabile. I migliori sono nei quartieri, non in centro."
      }
    ],
    attenzioni: [
      "Cenacolo: senza prenotazione non si entra. Le vendite si aprono a scaglioni, controllare il sito ufficiale con mesi di anticipo.",
      "Area B e Area C limitano l'accesso delle auto al centro, con telecamere: chi entra senza saperlo prende la multa.",
      "Salone del Mobile (aprile) e settimane della moda: gli alloggi salgono molto di prezzo, prenotare con mesi di anticipo.",
      "Borseggi in metro, davanti al Duomo e alla stazione Centrale: borsa chiusa davanti, mai in tasca posteriore.",
      "Chi offre mangime per piccioni o braccialetti in Piazza Duomo poi chiede denaro: rifiutare senza prendere nulla in mano.",
      "Scioperi dei trasporti frequenti (ATM e treni): controllare il calendario prima di andare ai laghi."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['milano-e-i-laghi', 'grandi-citta-italia'],
    imageAlt: 'La facciata del Duomo di Milano vista dal fondo di Piazza del Duomo, con la gente e i piccioni sul selciato',
    immagine: '/images/italia/milano-nord.jpg',
  },
  {
    slug: 'sicilia',
    paeseSlug: 'italia',
    ordine: 8,
    nome: 'Sicilia',
    tipologia: ['isole', 'archeologia', 'gastronomia'],
    giorniConsigliati: '10-12 giorni, 7 per una metà sola',
    visitataPersonalmente: true,
    introduzione:
      'È un\'isola grande come una nazione, che in tremila anni è stata greca, romana, bizantina, araba, normanna, sveva, spagnola e borbonica: ogni dominazione ha lasciato architettura, parole e ricette che convivono ancora. Ha anche il vulcano attivo più alto d\'Europa, che erutta regolarmente.',
    percheAndarci:
      'Nessun\'altra regione italiana ha tanti strati: si può vedere un tempio greco meglio conservato di quelli in Grecia, un duomo normanno con i mosaici bizantini e le iscrizioni in arabo, e un palazzo barocco, nello stesso giorno. E si mangia in un modo che non somiglia al resto d\'Italia.',
    cosaVedere: [
      'La Valle dei Templi ad Agrigento, con il Tempio della Concordia, tra i templi dorici meglio conservati al mondo',
      'Palermo, con la Cappella Palatina e il Duomo di Monreale: arte bizantina, maestranze arabe e struttura normanna nello stesso edificio',
      'L\'Etna, con i crateri sommitali e le colate recenti',
      'Siracusa e Ortigia, con il teatro greco e il Duomo costruito dentro un tempio dorico ancora visibile nelle colonne',
      'Il barocco della Val di Noto (Noto, Modica, Ragusa Ibla, Scicli), ricostruito dopo il terremoto del 1693',
      'Taormina con il teatro greco-romano affacciato sull\'Etna e sul mare',
      'Segesta e Selinunte, i due siti greci dell\'ovest, molto meno affollati di Agrigento',
      'Le riserve di Vendicari e dello Zingaro, e la Scala dei Turchi',
    ],
    cosaFare: [
      'Salire sull\'Etna fino alla zona sommitale, con guida obbligatoria oltre una certa quota (vedi la scheda esperienza dedicata)',
      'Il mercato di Ballarò o della Vucciria a Palermo al mattino, street food e teatro insieme',
      'La Valle dei Templi al tramonto o in notturna, quando i templi sono illuminati e la temperatura è vivibile',
      'Un giro del barocco della Val di Noto in auto, il modo giusto di farlo',
    ],
    doveDormire:
      'In Sicilia la questione centrale è la base, ed è il senso del confronto qui sotto: l\'isola è troppo grande per una base sola. In generale Palermo per l\'ovest, Siracusa o Catania per l\'est, con una o due basi intermedie.',
    doveMangiare:
      'La Sicilia ha due cucine diverse, una per versante. A Palermo domina lo street food arabo-normanno: arancine (femminile, a Palermo), panelle, sfincione, pane con la milza per i coraggiosi. A est prevalgono il pesce e la pasta: pasta alla Norma a Catania, pasta con le sarde, ricci a Siracusa. Poi i dolci, un capitolo a parte: cannoli riempiti al momento e mai prima, cassata, granita con la brioche a colazione, che d\'estate è il modo giusto di cominciare la giornata. Il vino: Etna Rosso dal Nerello Mascalese, Nero d\'Avola, Grillo e Carricante.',
    comeArrivare:
      "Voli su Palermo e Catania, i due scali principali, più Trapani e Comiso. In treno e in auto si arriva con il traghetto da Villa San Giovanni: i treni vengono ancora imbarcati sulla nave, cosa che non si fa quasi più da nessuna parte. Dal nord Italia i traghetti notturni da Genova, Livorno e Napoli portano anche l'auto. Da Palermo Falcone Borsellino il bus Prestia e Comandè porta al Politeama e alla Stazione Centrale in circa 50 minuti, ogni mezz'ora, a circa 6 € online; c'è anche il treno Trinacria Express, circa un'ora. Da Catania Fontanarossa l'Alibus arriva in centro in 20-30 minuti, 4 €.",
    comeSpostarsi:
      '**L\'auto è indispensabile.** La rete ferroviaria è lenta e copre poco, per chi non guida l\'alternativa sono gli autobus, che però vincolano parecchio. Le autostrade collegano Palermo, Catania e Messina; il resto è strada statale, con tempi più lunghi di quanto Google suggerisca.',
    periodoMigliore:
      '**maggio-giugno e settembre-ottobre**, senza dubbio. Luglio e agosto sono torridi (nell\'interno si superano spesso i 40 gradi), affollati e cari. L\'inverno è mite e ottimo per le città d\'arte e i siti archeologici, con il mare fuori gioco e molte strutture costiere chiuse. Aprile e novembre sono ottimi e poco battuti.',
    costi:
      "Più economica del centro-nord su alloggi e ristorazione, con l'eccezione di Taormina e delle località balneari in agosto. Gli ingressi ai siti archeologici sono contenuti; il biglietto cumulativo per più siti conviene quasi sempre. Budget indicativo al giorno a persona, in doppia: **economico 70-90 €** (B&B e street food), **medio 120-170 €** (hotel di centro, trattorie, auto a noleggio divisa in due), **alto da 250 €** (Taormina, Ortigia e resort sul mare).",
    erroriDaEvitare: [
      'Provare a fare tutta la Sicilia in una settimana: è grande come una regione e mezza, le strade interne sono lente, e il risultato è passare la vacanza in auto',
      'Fare Agrigento a mezzogiorno d\'estate: la Valle dei Templi non ha ombra e si superano i 40 gradi',
      'Andarci ad agosto senza sapere che è il mese peggiore sotto ogni aspetto',
      'Saltare l\'interno (Enna, Piazza Armerina, le Madonie) per stare solo sulla costa: è dove la Sicilia è più sé stessa e meno turistica',
      'Prendere la granita con la panna montata pensando che sia la versione autentica: la granita siciliana si fa con acqua, zucchero e il frutto, e si accompagna alla brioche col tuppo',
      'Fidarsi dei tempi di percorrenza stimati: sulle statali interne vanno aumentati di un terzo',
    ],
    confronti: [
      {
        titolo: 'Sicilia orientale o occidentale: quale metà scegliere',
        introduzione:
          'La Sicilia è troppo grande per essere fatta bene in una settimana, e il modo migliore di affrontarla è sceglierne una metà invece di attraversarla di corsa. Le due parti hanno storia, architettura, cucina e ritmo diversi.',
        opzioni: [
          {
            nome: 'Sicilia orientale (Catania, Siracusa, Val di Noto, Etna, Taormina)',
            sintesi: 'Il versante greco e barocco, dominato dall\'Etna: teatri greci, città ricostruite in barocco dopo il terremoto del 1693, e il vulcano che si vede da ovunque.',
            costo: 'medio, con Taormina fuori scala rispetto al resto',
            durata: '7-8 giorni',
            pro: [
              'L\'Etna, che oltre al panorama è un\'esperienza a sé',
              'Siracusa e Ortigia, dove il Duomo è costruito dentro un tempio greco, con le colonne doriche inglobate nei muri',
              'Il barocco della Val di Noto, patrimonio UNESCO, concentrato in pochi chilometri',
              'Distanze più brevi: si gira con una o due basi',
              'Le spiagge e le riserve del sud-est (Vendicari, Marzamemi) sono tra le migliori dell\'isola',
            ],
            contro: [
              'Taormina in alta stagione è satura e ha prezzi da altra regione',
              'Catania come città divide molto: viva e caotica, meno bella di Palermo',
              'Più battuta dal turismo internazionale',
            ],
            perChi: 'Chi ci va la prima volta, chi ha una settimana sola, chi vuole unire archeologia, barocco e mare senza spostamenti lunghi.',
          },
          {
            nome: 'Sicilia occidentale (Palermo, Monreale, Segesta, Trapani, Agrigento)',
            sintesi: 'Il versante arabo-normanno e fenicio-punico: Palermo con la Cappella Palatina, Monreale, i templi di Segesta e Selinunte, le saline, le Egadi.',
            costo: 'più basso dell\'est a parità di qualità',
            durata: '7-8 giorni',
            pro: [
              'Palermo è la città più stratificata e più interessante dell\'isola, e il duomo di Monreale è uno dei capolavori del Medioevo europeo',
              'Segesta e Selinunte hanno templi quasi come Agrigento con un decimo delle persone',
              'Lo street food palermitano non ha equivalenti in Italia',
              'Le saline di Trapani e Marsala, le isole Egadi, San Vito Lo Capo e la riserva dello Zingaro',
              'Meno turismo internazionale e prezzi più bassi',
            ],
            contro: [
              'Palermo richiede di adattarsi: traffico, disordine e degrado in certe zone',
              'Distanze maggiori tra i punti d\'interesse',
              'La Valle dei Templi ad Agrigento resta il sito più affollato dell\'isola',
              'Trasporto pubblico peggiore che a est',
            ],
            perChi: 'Chi torna una seconda volta, chi mette la storia e il cibo davanti al mare, chi vuole spendere meno.',
          },
          {
            nome: 'Il giro completo',
            sintesi: 'Tutta l\'isola in un solo viaggio, con base mobile.',
            costo: 'alto in carburante e tempo',
            durata: 'minimo 12-14 giorni per avere senso',
            pro: ['Si vede tutto quello che si era messo in lista', 'Con due settimane vere si fa bene', 'Il passaggio attraverso l\'interno mostra la Sicilia meno turistica'],
            contro: [
              'Sotto i dodici giorni diventa un tour di trasferimenti: si dorme in un posto diverso ogni notte e si passa la vacanza in auto',
              'I tempi sulle statali interne sono più lunghi di quanto le mappe stimino',
              'Si finisce per vedere tutto di corsa e niente con calma',
            ],
            perChi: 'Chi ha almeno due settimane piene e accetta di stare parecchio in auto.',
          },
        ],
        raccomandazione:
          'Con una settimana o dieci giorni, **si sceglie una metà**: l\'est la prima volta, per l\'Etna, Siracusa e il barocco; l\'ovest la seconda, per Palermo, Monreale e i templi senza fila. Il giro completo ha senso solo da dodici giorni in su. E qualunque sia la scelta, un paio di giorni nell\'interno (Enna, Piazza Armerina, le Madonie) cambiano la percezione dell\'isola più di qualsiasi tappa costiera.',
      },
    ],
    miaEsperienza:
      'Quando si organizza il viaggio, la Sicilia è la regione italiana che si sottovaluta di più: sulla mappa sembra un\'isola, in realtà è una nazione, e il classico «giro della Sicilia in una settimana» diventa sei giorni di statali. Più di ogni monumento mi ha colpito un edificio che li contiene tutti: il Duomo di Monreale, costruito da re normanni con maestranze arabe e mosaicisti bizantini, con seimila metri quadrati di mosaici d\'oro e un chiostro dove ogni capitello è diverso. Lì dentro si capisce che la Sicilia ha tenuto insieme tutte le culture che l\'hanno conquistata. La seconda cosa è l\'Etna, da salire sapendo che è un vulcano in attività: si sale su un terreno nero di lapilli che scricchiola sotto i piedi, con le fumarole che escono dalle fessure e il terreno caldo se ci si appoggia la mano. Infine un consiglio poco romantico ma utile: la Valle dei Templi si fa in notturna. Di giorno, in estate, si cammina in un forno senza un albero.',
    luoghi: [
      {
        "nome": "Palermo: Palazzo dei Normanni e Cappella Palatina",
        "testo": "La Cappella Palatina, dentro il palazzo reale, riunisce struttura normanna, mosaici bizantini e soffitto ligneo di maestranze arabe. Nel palazzo ci sono anche gli appartamenti reali.",
        "come": "A piedi dal centro storico di Palermo, vicino alla Cattedrale, in piazza del Parlamento. Si entra con biglietto a orario; la visita è libera, audioguida facoltativa.",
        "quando": "Lunedì-sabato 8:30-16:30, domenica e festivi 8:30-12:30 (orari di ultimo ingresso, sito della Fondazione Federico II). Mattina, per la luce sui mosaici. Controllare le chiusure per cerimonie e sedute dell'assemblea regionale.",
        "tempo": "1 ora e mezza",
        "costo": "19 € con il Palazzo Reale, 15,50 € la sola Cappella Palatina (dato 2025-26)",
        "orari": "Cappella Palatina: lunedì-sabato 8:30-16:30, domenica e festivi 8:30-12:30. Il percorso con il Palazzo Reale non si visita il martedì e il mercoledì.",
        "lat": 38.11083,
        "lng": 13.35361,
        "url": "https://federicosecondoonline.tm.vivaticket.com",
        "consiglio": "Alzare lo sguardo: i mosaici del catino occupano un'intera parete e il soffitto a muqarnas merita il collo storto."
      },
      {
        "nome": "Duomo di Monreale",
        "testo": "Una cattedrale normanna del XII secolo con migliaia di metri quadrati di mosaici dorati bizantini e un chiostro dove ogni capitello è diverso. Dentro si capisce come la Sicilia abbia tenuto insieme tutte le culture che l'hanno conquistata.",
        "come": "Da Palermo con l'autobus AMAT 389 da Piazza Indipendenza (a due passi dal Palazzo dei Normanni) o in taxi. Il duomo si visita da soli; il chiostro ha ingresso separato.",
        "quando": "Mattina presto o nel primo pomeriggio. L'orario ha una pausa a metà giornata: controllare prima.",
        "tempo": "2 ore",
        "costo": "duomo gratuito; chiostro 8 €, gratis la prima domenica del mese",
        "orari": "Duomo: lunedì-sabato 9-12:45 e 14-16:45, domenica e festivi 14-17. Chiostro: lunedì-sabato 9-18:30, domenica e festivi 9-13.",
        "lat": 38.08186,
        "lng": 13.29207,
        "consiglio": "Salire sulla terrazza sui tetti, se aperta: si cammina sopra la navata e si vede Palermo."
      },
      {
        "nome": "Ballarò e i mercati di Palermo",
        "testo": "Ballarò è il mercato storico del centro: banchi di pesce, frutta, spezie e friggitorie. Si mangia sul posto: arancine, panelle, sfincione, pane con la milza. La Vucciria è più piccola e di sera diventa un ritrovo.",
        "come": "A piedi dal Teatro Massimo o dalla stazione. Mercato aperto la mattina, fino al primo pomeriggio.",
        "quando": "Mattina. Il mercato chiude nel primo pomeriggio. La domenica è più tranquillo.",
        "tempo": "1-2 ore",
        "costo": "ingresso libero",
        "lat": 38.11192,
        "lng": 13.35952,
        "consiglio": "Mangiare in piedi ai banchi più affollati dai palermitani, non in quelli con il menu in inglese."
      },
      {
        "nome": "Valle dei Templi, Agrigento",
        "testo": "Un parco di templi dorici del V secolo a.C. allineati su una cresta. Il Tempio della Concordia è tra i meglio conservati al mondo. Il resto del parco scende verso il giardino della Kolymbethra.",
        "come": "Dalla stazione di Agrigento si prende un autobus urbano fino all'ingresso, oppure l'auto con parcheggio a pagamento. Il sentiero lungo il crinale è pianeggiante.",
        "quando": "Mattina presto o tramonto: a mezzogiorno d'estate non c'è ombra e il caldo è fortissimo. In estate ci sono aperture serali: controllare le date sul sito.",
        "tempo": "3 ore",
        "costo": "circa 23 € il cumulativo con il Giardino della Kolymbethra (2026); alcune domeniche gratuite, calendario sul sito",
        "orari": "Aperto tutti i giorni dell'anno dalle 8:30. Dal 20 giugno al 20 settembre apertura serale, con ingresso fino alle 22 nei feriali e alle 23 nei prefestivi e festivi.",
        "lat": 37.2897,
        "lng": 13.5922,
        "url": "https://www.parcovalledeitempli.it/",
        "consiglio": "Nelle sere d'estate si visita con i templi illuminati e una temperatura vivibile."
      },
      {
        "nome": "Segesta e Selinunte",
        "testo": "Segesta ha un tempio dorico mai finito e un teatro sulla collina. Selinunte è un parco archeologico molto vasto, con templi crollati e l'acropoli sul mare. Hanno una frazione dei visitatori di Agrigento.",
        "come": "In auto da Palermo, più vicina Segesta e più lontana Selinunte. Dal parcheggio di Segesta una navetta sale al teatro.",
        "quando": "Mattina, per il caldo. Selinunte al tramonto è molto bella.",
        "tempo": "2 ore a Segesta, 3 a Selinunte",
        "lat": 37.94145,
        "lng": 12.83307,
        "consiglio": "Dormire a Trapani o Marsala per fare i due siti con calma in un giorno e mezzo."
      },
      {
        "nome": "Etna",
        "testo": "Il vulcano attivo più alto d'Europa. Si sale in funivia da Rifugio Sapienza e poi con fuoristrada o a piedi, camminando su lapilli neri che scricchiolano e vicino alle fumarole. I crateri sommitali si visitano solo con guida e dipendono dall'attività.",
        "come": "Da Catania in auto o bus fino a Rifugio Sapienza. Oltre una certa quota la guida è obbligatoria. Scarpe chiuse, strati caldi e giacca a vento.",
        "quando": "Mattina o tramonto con cielo limpido. Le ascensioni possono essere sospese per attività o meteo.",
        "tempo": "Mezza giornata, una giornata con l'escursione sui crateri",
        "costo": "pacchetto funivia, fuoristrada e guida da circa 80-95 € a persona (2026)",
        "lat": 37.70022,
        "lng": 14.99825,
        "url": "https://www.parcoetna.it/",
        "consiglio": "Portare più strati di quanti sembrino necessari: in quota fa freddo anche in estate."
      },
      {
        "nome": "Siracusa e Ortigia",
        "testo": "Ortigia è l'isola della città vecchia: il Duomo è costruito dentro un tempio dorico, con le colonne ancora visibili nei muri. Al parco della Neapolis ci sono il teatro greco, l'Orecchio di Dionisio e l'anfiteatro romano.",
        "come": "Ortigia a piedi dal ponte; il parco archeologico a piedi o in bus dalla stazione. Si visita da soli.",
        "quando": "Neapolis di mattina presto. In maggio-giugno, durante le rappresentazioni classiche al teatro greco, la visita può essere limitata.",
        "tempo": "1 giorno intero, mezza giornata per Ortigia",
        "costo": "Duomo circa 2-3 €; parco della Neapolis con biglietto proprio o cumulativo con il Museo Paolo Orsi",
        "lat": 37.0596,
        "lng": 15.29383,
        "consiglio": "Cenare a Ortigia e sistemarsi fuori dalla zona a traffico limitato, dove il parcheggio costa meno."
      },
      {
        "nome": "Val di Noto: Noto, Modica e Ragusa Ibla",
        "testo": "Città ricostruite in stile barocco dopo il terremoto del 1693, patrimonio UNESCO. Noto ha la scenografia di una via lunga e dorata; Modica ha il cioccolato a freddo; Ragusa Ibla un centro su uno sperone.",
        "come": "In auto, il modo giusto di farlo: le tre città sono vicine tra loro. Si parcheggia fuori e si gira a piedi.",
        "quando": "Primo pomeriggio per le facciate dorate, sera per Noto illuminata. Evitare agosto.",
        "tempo": "Un giorno per due città, due giorni per tre",
        "lat": 36.89137,
        "lng": 15.07081,
        "consiglio": "Dormire a Ragusa Ibla o Modica: tranquillo e con ottimi ristoranti, e si risparmia rispetto a Noto."
      },
      {
        "nome": "Taormina e il teatro antico",
        "testo": "Un teatro greco-romano affacciato sull'Etna e sul mare, in un borgo in cima a una rupe. È il panorama più fotografato dell'isola. La città è cara, ma il teatro vale la salita.",
        "come": "Treno fino a Taormina-Giardini, poi autobus o taxi in salita. In auto si lascia in un parcheggio a pagamento fuori dal centro.",
        "quando": "Mattina presto, prima dei bus turistici, o al tramonto. Alta stagione molto affollata.",
        "tempo": "2 ore",
        "costo": "circa 14 € (2026)",
        "lat": 37.85245,
        "lng": 15.29212,
        "consiglio": "Salire a Castelmola a piedi o in auto: panorama migliore e con molta meno gente."
      },
      {
        "nome": "Villa Romana del Casale, Piazza Armerina",
        "testo": "Una villa romana del IV secolo con pavimenti a mosaico in quasi tutte le stanze, tra cui le «ragazze in bikini». Sta nell'interno, lontana dalla costa e dai percorsi più battuti.",
        "come": "In auto da Enna o Catania, proseguendo per Piazza Armerina. Passerelle sopraelevate guidano la visita.",
        "quando": "Mattina o primo pomeriggio; evitare l'estate nelle ore centrali, la copertura trattiene il caldo.",
        "tempo": "1 ora e mezza",
        "costo": "14 € intero, 7 € dai 18 ai 24 anni; gratis la prima domenica del mese",
        "orari": "Tutti i giorni. Da fine marzo a fine ottobre 9-19, ultimo ingresso alle 18; da fine ottobre a fine marzo 9-17:30, ultimo ingresso alle 16:30.",
        "lat": 37.36472,
        "lng": 14.33455,
        "url": "https://www.villaromanadelcasale.it",
        "consiglio": "Combinarla con Enna e le Madonie: l'interno cambia la percezione dell'isola."
      },
      {
        "nome": "Riserve di Vendicari, Zingaro e Scala dei Turchi",
        "testo": "Tre tratti di costa selvaggia: Vendicari nel sud-est, con spiagge e saline; la riserva dello Zingaro tra Scopello e San Vito Lo Capo, con calette raggiungibili solo a piedi; la Scala dei Turchi, falesia bianca di marna vicino ad Agrigento.",
        "come": "In auto fino all'ingresso di ciascuna. Allo Zingaro e a Vendicari si cammina; sulla Scala dei Turchi si va dalla spiaggia di Realmonte.",
        "quando": "Primavera e inizio estate o settembre. In agosto sono affollate e roventi. Allo Zingaro si entra a pagamento.",
        "tempo": "Mezza giornata ciascuna",
        "costo": "Zingaro 5 € intero, 3 € ridotto; Scala dei Turchi circa 6 € a turni di 20 minuti, quando è aperta (2026); Vendicari ingresso libero",
        "orari": "Riserva dello Zingaro: tutti i giorni 8-16.",
        "lat": 38.10424,
        "lng": 12.79083,
        "url": "https://www.riservazingaro.it",
        "consiglio": "Acqua, cappello e scarpe da camminata anche per la spiaggia: non ci sono chioschi lungo i sentieri."
      },
      {
        "nome": "Catania: Piazza del Duomo, Via Etnea e la Pescheria",
        "testo": "Il centro barocco di Catania, ricostruito in pietra lavica dopo il terremoto del 1693. In piazza c'è il Liotru, l'elefante di pietra nera simbolo della città; la Via Etnea sale dritta verso il vulcano. A due passi, la Pescheria è il mercato del pesce più teatrale dell'isola.",
        "come": "A piedi dalla stazione o con l'Alibus dall'aeroporto, in 20-30 minuti. Chi ha un'ora in più entra nel Monastero dei Benedettini, oggi sede dell'università.",
        "quando": "La Pescheria la mattina, fino all'ora di pranzo. La Via Etnea la sera, quando si riempie.",
        "tempo": "mezza giornata",
        "costo": "piazza e mercato liberi",
        "lat": 37.50246,
        "lng": 15.08821,
        "consiglio": "Cenare con la pasta alla Norma, il piatto della città, che prende il nome dall'opera di Bellini, nato qui."
      },
      {
        "nome": "Cefalù e il Duomo normanno",
        "testo": "Un borgo di pescatori sotto una rupe, con una spiaggia lunga davanti al centro storico. Il Duomo, voluto da Ruggero II, fa parte del sito UNESCO arabo-normanno con Palermo e Monreale: nell'abside c'è un Cristo Pantocratore a mosaico tra i più belli del Medioevo.",
        "come": "In treno da Palermo Centrale in circa un'ora, poi a piedi dalla stazione al centro. In auto si lascia nei parcheggi a pagamento sopra il lungomare.",
        "quando": "Da aprile a ottobre per abbinare la spiaggia; mattina presto per il Duomo, prima dei gruppi.",
        "tempo": "mezza giornata o una giornata con la spiaggia",
        "lat": 38.03983,
        "lng": 14.02359,
        "consiglio": "Chi ha gambe può salire sulla Rocca, sopra il paese: un sentiero di circa un'ora porta ai resti del tempio di Diana e alla vista su tutta la costa."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Palermo, mattina: Palazzo dei Normanni e Cappella Palatina.",
          "Tarda mattina: Cattedrale e passeggiata verso i Quattro Canti.",
          "Pranzo: street food a Ballarò.",
          "Pomeriggio: Monreale in autobus o taxi.",
          "Sera: ritorno a Palermo, cena con vino siciliano."
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1, Palermo: Cappella Palatina la mattina, pranzo a Ballarò, Monreale nel pomeriggio.",
          "Giorno 2, Cefalù: treno da Palermo Centrale, Duomo la mattina, pomeriggio in spiaggia o sulla Rocca, rientro la sera."
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Siracusa, Neapolis al mattino e Ortigia al pomeriggio.",
          "Giorno 2: Val di Noto in auto, con Noto, Modica e Ragusa Ibla.",
          "Giorno 3: Etna al mattino e Taormina nel pomeriggio, rientro a Catania."
        ]
      },
      {
        "titolo": "5 giorni",
        "tappe": [
          "Giorno 1: Palermo.",
          "Giorno 2: Monreale e Segesta, dormire a Trapani.",
          "Giorno 3: Selinunte e poi verso Agrigento.",
          "Giorno 4: Valle dei Templi all'alba o al tramonto, poi Piazza Armerina.",
          "Giorno 5: Catania ed Etna."
        ]
      }
    ],
    zone: [
      {
        "nome": "Palermo centro",
        "perChi": "Chi vuole città, cibo e arte",
        "testo": "Base ideale per l'ovest. Rumorosa e caotica, con ottimi mercati, ma parcheggiare è difficile: meglio dormire in zona con garage.",
        "fascia": "70-140 €"
      },
      {
        "nome": "Catania",
        "perChi": "Chi arriva in aereo e vuole l'Etna",
        "testo": "Base per l'Etna, Siracusa e Taormina. Barocca e viva, con un centro un po' trascurato fuori dalle vie principali. Sera animata, movimento anche di notte.",
        "fascia": "60-120 €"
      },
      {
        "nome": "Ortigia, Siracusa",
        "perChi": "Chi cerca un centro pedonale e mare",
        "testo": "Isola piccola e compatta, bella di sera, con zona a traffico limitato. Camere care in alta stagione e parcheggio fuori dall'isola.",
        "fascia": "90-180 €"
      },
      {
        "nome": "Ragusa Ibla e Modica",
        "perChi": "Chi vuole una base tranquilla per il barocco",
        "testo": "Più tranquille e meno care di Taormina e Noto, con ottima cucina. Servono l'auto e un po' di pazienza con le strade in salita.",
        "fascia": "70-130 €"
      }
    ],
    sapori: [
      {
        "nome": "Arancine",
        "testo": "Palle di riso fritte con ragù o burro e prosciutto. A Palermo sono «arancine» al femminile e tonde, a Catania «arancini» al maschile e a punta."
      },
      {
        "nome": "Pasta alla Norma",
        "testo": "Pasta con pomodoro, melanzane fritte e ricotta salata. È il piatto di Catania."
      },
      {
        "nome": "Street food di Palermo",
        "testo": "Panelle di ceci, sfincione, pane con la milza. Si mangiano in piedi nei mercati."
      },
      {
        "nome": "Cannoli e cassata",
        "testo": "Il cannolo va riempito al momento, con la ricotta; la cassata è la torta di ricotta e pasta reale. Si trovano nelle pasticcerie storiche."
      },
      {
        "nome": "Granita con la brioche",
        "testo": "Granita di limone, mandorla, pistacchio o gelsi, con la brioche col tuppo: è la colazione d'estate. Si fa con acqua, zucchero e frutto, non con la panna."
      },
      {
        "nome": "Pasta con le sarde e ricci",
        "testo": "A Palermo la pasta con le sarde, finocchietto e uvetta; a Siracusa i ricci di mare in stagione, mangiati con il pane."
      }
    ],
    attenzioni: [
      "L'auto serve quasi ovunque, ma Palermo, Catania, Ortigia e Taormina hanno zone a traffico limitato con telecamere: chiedere all'hotel dove lasciarla ed evitare le multe.",
      "Caldo estremo a luglio e agosto, che può superare i 40 gradi nell'interno e nei siti archeologici senza ombra: acqua, cappello, visite all'alba o al tramonto.",
      "Etna: oltre una certa quota la guida è obbligatoria e gli accessi dipendono dall'attività del vulcano e dal meteo. Controllare gli avvisi del parco prima di partire.",
      "Borseggi nei mercati e nel centro di Palermo e Catania: borsa davanti, telefono in tasca.",
      "Tempi di percorrenza più lunghi del previsto sulle statali interne: tenere margine rispetto a quello che indica la mappa.",
      "Tassa di soggiorno nelle principali città: si paga in hotel, controllare l'importo del comune."
    ],
    gite: [
      {
        "nome": "Isole Eolie (Lipari e Vulcano)",
        "distanza": "circa 1 ora di aliscafo da Milazzo",
        "come": "In auto o in bus fino al porto di Milazzo, poi aliscafo per Vulcano e Lipari. In estate le corse sono frequenti; d'inverno sono poche e dipendono dal mare.",
        "testo": "Sette isole vulcaniche: a Vulcano si sale sul cratere e si fanno i fanghi, Lipari ha il castello e il museo archeologico. Una giornata basta per un assaggio, ma conviene dormirci."
      },
      {
        "nome": "Erice",
        "distanza": "15 km da Trapani, con la funivia dal basso della città",
        "come": "Funivia da Trapani (quando è in servizio) o auto su una strada di tornanti.",
        "testo": "Un borgo medievale a 750 metri sopra Trapani, con vicoli lastricati, il Castello di Venere e la vista sulle saline e sulle Egadi. Le pasticcerie vendono i dolci di mandorla del convento."
      },
      {
        "nome": "Favignana e le Egadi",
        "distanza": "circa 30 minuti di aliscafo da Trapani",
        "come": "Aliscafo da Trapani; sull'isola ci si muove in bici a noleggio.",
        "testo": "Un'isola piatta di cave di tufo e calette di acqua chiarissima, come Cala Rossa e il Bue Marino. A maggio-giugno e a settembre è al meglio."
      },
      {
        "nome": "Gole dell'Alcantara",
        "distanza": "circa 20 km da Taormina",
        "come": "In auto o con i bus da Taormina e Giardini Naxos.",
        "testo": "Un canyon di basalto scavato dal fiume nelle colate dell'Etna, con colonne di lava a prismi. Si cammina nell'acqua gelida: servono scarpe da acqua o stivali."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono per visitare la Sicilia?",
        "risposta": "Per una metà dell'isola 7-8 giorni, per il giro completo almeno 12-14. In un weekend lungo conviene scegliere una città, Palermo o Catania, e le sue gite."
      },
      {
        "domanda": "Meglio la Sicilia orientale o occidentale?",
        "risposta": "La prima volta l'est, per Etna, Siracusa, il barocco della Val di Noto e Taormina, con distanze più corte. L'ovest per Palermo, Monreale, Segesta e Selinunte, con meno turisti e prezzi più bassi."
      },
      {
        "domanda": "Serve l'auto in Sicilia?",
        "risposta": "Quasi sempre sì: i treni sono lenti e coprono poco. Senza auto si possono fare bene Palermo con Monreale e Cefalù, oppure Catania con Siracusa e Taormina, usando bus e treni regionali."
      },
      {
        "domanda": "Quando andare in Sicilia?",
        "risposta": "Maggio-giugno e settembre-ottobre. Luglio e agosto sono torridi, oltre i 40 gradi nell'interno, affollati e cari; l'inverno è mite e va bene per città e siti archeologici."
      },
      {
        "domanda": "Bisogna prenotare la Cappella Palatina?",
        "risposta": "Non è obbligatorio, ma il biglietto online evita la coda. Gli orari cambiano con le attività dell'Assemblea Regionale, che ha sede nel palazzo: il percorso con il Palazzo Reale non si visita il martedì e il mercoledì."
      },
      {
        "domanda": "Si può salire sull'Etna da soli?",
        "risposta": "Fino al Rifugio Sapienza e ai crateri Silvestri sì, in auto. Oltre una certa quota la guida è obbligatoria, e la zona sommitale può essere chiusa senza preavviso per l'attività del vulcano."
      }
    ],
    esperienzeSlugs: ['etna'],
    tripSlugs: ['sicilia-itinerario', 'sicilia-completa'],
    imageAlt: 'Taormina vista dall\'alto con le case sulla collina e il mare Ionio sullo sfondo, Sicilia',
    immagine: '/images/italia/sicilia.jpg',
  },
  {
    slug: 'sardegna',
    paeseSlug: 'italia',
    ordine: 9,
    nome: 'Sardegna',
    tipologia: ['isole', 'mare', 'trekking'],
    giorniConsigliati: '8-10 giorni',
    visitataPersonalmente: true,
    introduzione:
      'È un\'isola con una lingua propria, una civiltà preistorica che ha lasciato settemila torri di pietra e nessun\'altra spiegazione di sé, e un mare che regge il confronto con i Caraibi. Ed è anche, a sorpresa, una delle mete di trekking più dure d\'Italia.',
    percheAndarci:
      'Per il mare (Cala Goloritzé, Cala Mariolu, La Pelosa, l\'arcipelago della Maddalena), e soprattutto perché l\'interno è tutta un\'altra isola: il Supramonte, la gola di Gorropu, i nuraghi, i paesi della Barbagia dove si parla sardo e dove il turismo non è mai arrivato.',
    cosaVedere: [
      'Il Golfo di Orosei, con Cala Goloritzé, Cala Mariolu e Cala Luna, raggiungibili quasi solo via mare o a piedi',
      'L\'arcipelago della Maddalena e Budelli con la spiaggia rosa, oggi protetta e inaccessibile',
      'Su Nuraxi di Barumini, patrimonio UNESCO, il complesso nuragico meglio conservato',
      'La gola di Gorropu, tra le più profonde d\'Europa, con pareti fino a cinquecento metri',
      'La Barbagia e i paesi del Supramonte: Orgosolo con i murales, Oliena, Urzulei',
      'Alghero, con l\'impronta catalana ancora nella lingua, e la Grotta di Nettuno',
      'Le miniere dismesse del Sulcis-Iglesiente, patrimonio geominerario, con Porto Flavia scavata dentro la falesia',
      'Le dune di Piscinas sulla Costa Verde, tra le più alte d\'Europa, e Carloforte dove si parla ligure',
    ],
    cosaFare: [
      'Trekking nella gola di Gorropu, la cosa più impressionante dell\'interno (vedi la scheda esperienza dedicata)',
      'Scendere a Cala Goloritzé a piedi (l\'unico modo via terra; vedi la scheda esperienza dedicata)',
      'Giro in gommone del Golfo di Orosei, per vedere le cale che da terra non si raggiungono',
      'Un giorno in Barbagia, tra Orgosolo e Oliena, per vedere l\'isola lontana dal mare',
    ],
    doveDormire:
      'La Sardegna si fa con due o tre basi: il nord-est per la Maddalena e la Costa Smeralda, il centro-est per il Golfo di Orosei e il Supramonte, il sud-ovest per il Sulcis e le spiagge meno battute. Gli agriturismi dell\'interno hanno un rapporto qualità-prezzo che la costa non si sogna.',
    doveMangiare:
      'A sorpresa, la cucina sarda è di pastori più che di mare. Porceddu allo spiedo, pane carasau, culurgiones (i ravioli con patata, menta e pecorino, chiusi a spiga), malloreddus, pecorino sardo in tutte le stagionature, e il fiore sardo affumicato. Il mirto come digestivo. Il Cannonau è il vino simbolo, il Vermentino di Gallura l\'unica DOCG dell\'isola. **Sulla costa si mangia pesce a prezzi turistici; a venti chilometri nell\'interno si mangia meglio e si spende metà.**',
    comeArrivare:
      'Voli su Cagliari, Olbia e Alghero, con tariffe che schizzano a luglio e agosto. **I traghetti con l\'auto da Genova, Livorno, Civitavecchia e Napoli vanno prenotati con mesi di anticipo per l\'estate**, e sono l\'opzione più sensata per chi resta più di una settimana.',
    comeSpostarsi:
      '**Auto obbligatoria.** La rete ferroviaria è minima e lenta, gli autobus collegano i centri principali ma non le spiagge. Le strade interne del Supramonte sono strette e tortuose; molte cale si raggiungono solo con sterrati o a piedi.',
    periodoMigliore:
      '**maggio-giugno e settembre**, la risposta giusta quasi sempre: mare già caldo, prezzi normali, spiagge vivibili. Luglio e agosto sono affollatissimi e carissimi, con i traghetti esauriti e le cale contingentate. Ottobre e aprile sono ottimi per l\'interno e il trekking, con il mare fuori gioco.',
    costi:
      'In alta stagione la costa ha prezzi tra i più alti d\'Italia, con la Costa Smeralda fuori scala. **Diverse spiagge hanno accessi contingentati con prenotazione a pagamento** (La Pelosa, Cala Goloritzé, alcune cale del Golfo di Orosei), introdotti per proteggerle: vanno controllati e prenotati prima di partire, perché senza non si entra.',
    erroriDaEvitare: [
      'Non prenotare il traghetto con l\'auto per luglio e agosto: si esaurisce con mesi di anticipo e i prezzi salgono in modo drastico',
      'Presentarsi a una spiaggia contingentata senza prenotazione: diverse cale hanno numeri chiusi e accessi a pagamento, e senza si torna indietro',
      'Fare solo la costa: l\'interno (Supramonte, Barbagia, Gorropu) è la parte che nessuno si aspetta e la più sorprendente',
      'Sottovalutare i sentieri: quelli del Supramonte sono duri, poco segnati e senza acqua, e ogni anno ci sono interventi di soccorso',
      'Andare ad agosto',
      'Aspettarsi di mangiare pesce come piatto tradizionale: la cucina sarda è pastorale, e il meglio è nell\'interno',
    ],
    confronti: [
      {
        titolo: 'Sardegna chic o Sardegna inesplorata',
        introduzione:
          'La Sardegna vive da sessant\'anni una doppia identità: da una parte la costa disegnata negli anni Sessanta dal consorzio dell\'Aga Khan, con prezzi da capitale del lusso; dall\'altra un interno di pastori, nuraghi e montagne dove il turismo non è mai arrivato. Sono due isole diverse: si può scegliere, oppure mescolarle, che è la cosa più interessante.',
        opzioni: [
          {
            nome: 'Costa Smeralda e nord-est',
            sintesi: 'Porto Cervo, Porto Rotondo, Baja Sardinia e l\'arcipelago della Maddalena: il tratto di costa progettato dal consorzio negli anni Sessanta, con un\'architettura studiata a tavolino e i prezzi più alti del Mediterraneo.',
            costo: 'altissimo in alta stagione, tra i più cari d\'Europa',
            durata: '4-5 giorni',
            pro: [
              'Il mare è eccezionale, e le spiagge del nord-est sono tra le più belle dell\'isola',
              'L\'arcipelago della **Maddalena** è parco nazionale e si gira in barca: Budelli, Spargi, Caprera',
              'Servizi di livello internazionale e collegamenti comodi da Olbia',
              'L\'architettura del consorzio, per quanto artificiale, è studiata e in certi tratti riuscita',
            ],
            contro: [
              'Prezzi fuori scala a luglio e agosto, con ristoranti e alloggi da capitale del lusso',
              'Tanta gente e traffico sulle strade costiere',
              'È un paesaggio costruito per il turismo: di sardo, lì, c\'è poco',
              'I traghetti e i voli per il nord-est in alta stagione costano il doppio',
            ],
            perChi: 'Chi viene per il mare e per i servizi e accetta il prezzo, e chi vuole girare la Maddalena in barca.',
          },
          {
            nome: 'Interno: Barbagia, Supramonte e Ogliastra',
            sintesi: 'L\'altra Sardegna: i paesi del Supramonte, i nuraghi, la gola di Gorropu, i murales di Orgosolo, gli ovili dei pastori e una lingua che è una lingua vera, non un dialetto.',
            costo: 'bassissimo, con agriturismi a prezzi che sulla costa non esistono più',
            durata: '4-6 giorni',
            pro: [
              'La **gola di Gorropu**, tra le più profonde d\'Europa, con pareti fino a cinquecento metri',
              'I **nuraghi**: settemila torri di pietra a secco costruite tra il 1800 e il 1100 a.C. da una civiltà senza scrittura, di cui non si sa con certezza nemmeno a cosa servissero. Su Nuraxi di Barumini è patrimonio UNESCO',
              'La cucina è pastorale più che marinara (porceddu, pane carasau, culurgiones, pecorini), e si mangia meglio e a metà prezzo rispetto alla costa',
              'Si cammina mezza giornata senza incontrare nessuno',
              'Tiscali, il villaggio nuragico nascosto dentro una dolina',
            ],
            contro: [
              'Servizi turistici minimi e nessuna infrastruttura di accoglienza',
              'Strade strette e lente, con tempi molto più lunghi delle stime',
              'Sentieri del Supramonte duri, poco segnati e senza acqua: ogni anno ci sono interventi di soccorso',
              'Niente mare a portata immediata',
            ],
            perChi: 'Chi ha già fatto la costa, chi cammina, chi vuole capire cos\'è la Sardegna oltre le spiagge.',
          },
          {
            nome: 'Sud-ovest: Sulcis, Iglesiente e Costa Verde',
            sintesi: 'La parte che quasi nessuno fa: le miniere dismesse patrimonio geominerario, Porto Flavia scavata nella falesia, le dune di Piscinas e le spiagge senza nessuno.',
            costo: 'basso',
            durata: '4-5 giorni',
            pro: [
              'Spiagge di livello nord-est con una frazione delle persone e dei prezzi',
              'L\'archeologia industriale mineraria: **Porto Flavia**, un porto scavato dentro una falesia a picco sul mare, è una delle cose più impressionanti dell\'isola',
              'Le dune di **Piscinas**, tra le più alte d\'Europa, con il deserto che arriva al mare',
              'Sant\'Antioco e San Pietro, con Carloforte dove si parla ancora un dialetto ligure',
            ],
            contro: [
              'Meno servizi e meno collegamenti: si arriva da Cagliari e serve l\'auto',
              'Alcune spiagge sono raggiungibili solo con sterrati',
              'Meno «famoso»: per alcuni è un difetto, per altri il motivo per andarci',
            ],
            perChi: 'Chi vuole spiagge di primo livello senza i prezzi del nord-est, e chi si interessa di archeologia industriale.',
          },
        ],
        raccomandazione:
          'La formula che rende di più è **mescolarle**: quattro giorni di costa e tre nell\'interno, che stanno a un\'ora di strada l\'uno dall\'altra e sembrano due paesi. Chi ha già visto il nord-est vada nel **sud-ovest**, che ha spiagge dello stesso livello, Porto Flavia e le dune di Piscinas, a una frazione del prezzo. E chi vuole capire quest\'isola dedichi almeno due giorni al **Supramonte**: i nuraghi e Gorropu spiegano la Sardegna molto più di qualsiasi tratto di costa.',
      },
    ],
    miaEsperienza:
      'La Sardegna ha un problema di percezione: la si associa al mare, e il mare è tra i più belli del Mediterraneo (Cala Goloritzé, con quel pinnacolo di calcare e l\'acqua trasparente, regge qualsiasi confronto). Ma la sorpresa sta a venti chilometri dalla costa, nell\'interno, dove arriva una frazione delle persone. La gola di Gorropu è una fenditura tra pareti che arrivano a cinquecento metri, dove si cammina su massi grandi come automobili con una striscia di cielo sopra: sembra un canyon americano e sta in Barbagia. E i nuraghi sono la cosa più strana d\'Italia: settemila torri di pietra a secco costruite tra il 1800 e il 1100 avanti Cristo da una civiltà di cui non sappiamo quasi nulla, senza scrittura, e di cui non si capisce con certezza nemmeno a cosa servissero quelle torri. A Barumini si entra dentro e si sale per scale interne nello spessore del muro. Poi c\'è una cosa pratica da sapere: le cale più belle sono state contingentate proprio perché stavano venendo distrutte, e oggi senza prenotazione non ci si entra.',
    luoghi: [
      {
        "nome": "Cala Goloritzé",
        "testo": "Una caletta di ciottoli bianchi sotto un pinnacolo di calcare alto 143 metri, nel Golfo di Orosei, con acqua trasparente. Regge qualsiasi confronto con il mare dei Caraibi. L'accesso è regolato per proteggerla.",
        "come": "A piedi dall'Altopiano del Golgo, a Baunei, per un sentiero che scende nella macchia. In barca ci si avvicina, ma lo sbarco è limitato. Serve la prenotazione.",
        "quando": "Mattina presto, quando si cammina al fresco e la cala è ancora vuota. Maggio-giugno e settembre. Prenotare prima di partire: il numero di accessi al giorno è limitato.",
        "tempo": "3-4 ore tra discesa, bagno e risalita",
        "consiglio": "Scarpe da trekking e un litro e mezzo d'acqua a testa: la risalita nel pomeriggio d'estate è dura."
      },
      {
        "nome": "Golfo di Orosei in barca: Cala Mariolu e Cala Luna",
        "testo": "Una serie di cale sotto la falesia, raggiungibili quasi solo via mare: Cala Luna con le grotte, Cala Mariolu con i ciottoli rosa e bianchi, Cala Sisine. Dal mare si vede un tratto di costa che da terra non si vede.",
        "come": "Gommone o barca da Cala Gonone, con partenza al porto. Itinerario e soste le decide il capitano. Prenotare in anticipo in estate.",
        "quando": "Mattina, con mare calmo. Le uscite si fanno da maggio a ottobre. L'acqua è più chiara prima di mezzogiorno.",
        "tempo": "Una giornata",
        "consiglio": "Prenotare un gommone piccolo per sbarcare nelle cale più strette, dove le barche grandi non arrivano."
      },
      {
        "nome": "Gola di Gorropu",
        "testo": "Una fenditura scavata dal Rio Flumineddu tra pareti di calcare alte fino a 500 metri, nel Supramonte. Si cammina su massi grandi come automobili, con una striscia di cielo sopra. Sembra un canyon americano e sta in Barbagia.",
        "come": "In auto da Dorgali o Urzulei fino a Sa Barva, poi un sentiero lungo fino all'ingresso della gola, con attraversamento di un fiume. L'accesso può avere regole e biglietto: controllare prima.",
        "quando": "Primavera e autunno. D'estate fa caldo e la gola si riempie. Dopo piogge forti il torrente può impedire il passaggio.",
        "tempo": "Mezza giornata, una giornata col trekking lungo",
        "consiglio": "Informarsi sulle regole di accesso e valutare una guida: il sentiero si perde nel greto del fiume."
      },
      {
        "nome": "Orgosolo e Oliena, Barbagia",
        "testo": "Orgosolo è famosa per i murales politici sulle case, dipinti dagli anni Sessanta in poi: lotte contadine, guerre, diritti. Oliena sta ai piedi del Supramonte, con vigneti di Cannonau e una vista sul monte Corrasi.",
        "come": "In auto da Nuoro, che è vicina a entrambi. Si cammina nei paesi; i murales sono tutti sulla strada.",
        "quando": "Mattina o tardo pomeriggio. In autunno, con Autunno in Barbagia, i paesi aprono case e botteghe ai visitatori.",
        "tempo": "Mezza giornata ciascuno",
        "consiglio": "Rispettare le persone che vivono nelle case dipinte: chiedere prima di fotografare ritratti."
      },
      {
        "nome": "Su Nuraxi di Barumini",
        "testo": "Il complesso nuragico meglio conservato dell'isola, patrimonio UNESCO: una torre centrale dell'età del Bronzo circondata da bastioni e da un villaggio di pietra. A Barumini si entra dentro e si sale per scale interne nello spessore del muro.",
        "come": "In auto da Cagliari; in treno e poi bus, con coincidenze limitate. La visita è con una guida, che accompagna il gruppo nei vari ambienti.",
        "quando": "Mattina o fine pomeriggio. L'orario varia con la stagione: controllare sul sito della Fondazione prima di andare.",
        "tempo": "1 ora e mezza",
        "url": "https://www.fondazionebarumini.it/",
        "consiglio": "Un nuraghe sembra una pila di pietre finché non si entra: le scale interne spiegano come era fatto."
      },
      {
        "nome": "La Pelosa, Stintino",
        "testo": "Una spiaggia di sabbia bianca e acqua bassa, di fronte alla torre aragonese e all'isola Piana. È fra le più fotografate d'Italia. Per proteggerla, dal 15 maggio al 15 ottobre 2026 si entra solo prenotando: 1.500 posti al giorno, 3,50 € a persona (2026), gratis sotto i 12 anni, controlli dalle 8 alle 18.",
        "come": "In auto fino a Stintino, nel nord-ovest, poi a piedi dai parcheggi. Si prenota sul sito ufficiale spiaggialapelosa.it, al massimo 4 persone per prenotazione: 1.000 posti si aprono due giorni prima, alle 9.",
        "quando": "Mattina presto. Giugno e settembre, evitando luglio e agosto. Con il maestrale il mare è mosso e la spiaggia chiusa a tratti.",
        "tempo": "Mezza giornata",
        "consiglio": "Controllare le regole di accesso qualche giorno prima e portare una stuoia per la sabbia."
      },
      {
        "nome": "Arcipelago della Maddalena",
        "testo": "Un gruppo di isole di granito rosa e acqua verde nel nord-est: La Maddalena, Caprera con la casa di Garibaldi, Spargi, Santa Maria. Budelli e la spiaggia rosa sono oggi protette e inaccessibili.",
        "come": "Traghetto da Palau a La Maddalena, anche con l'auto, con una traversata breve. Per le altre isole servono barche o gommoni.",
        "quando": "Giugno e settembre. In agosto è affollatissimo e le barche scarseggiano.",
        "tempo": "Una giornata",
        "consiglio": "Prenotare con anticipo il giro in barca: i posti nelle imbarcazioni di agosto finiscono presto."
      },
      {
        "nome": "Alghero e Grotta di Nettuno",
        "testo": "Alghero ha un centro di impronta catalana, con bastioni sul mare e la lingua ancora parlata. A Capo Caccia, poco lontano, la Grotta di Nettuno è una grande caverna con stalattiti e un lago interno.",
        "come": "Alghero in aereo o in auto. Per la grotta: battello dal porto di Alghero o a piedi dall'Escala del Cabirol, la lunga scalinata scavata nella falesia.",
        "quando": "Mattina. Il battello non parte con mare mosso. Il tramonto da Alghero è bello sui bastioni.",
        "tempo": "Mezza giornata per la grotta, una giornata con Alghero",
        "consiglio": "Scegliere la scala dalla strada o il battello in base al mare: se è agitato la grotta può restare chiusa."
      },
      {
        "nome": "Porto Flavia e le dune di Piscinas",
        "testo": "Nel Sulcis-Iglesiente, le miniere dismesse formano un paesaggio geominerario. Porto Flavia è un porto scavato dentro la falesia di Masua per caricare i minerali sulle navi. A Piscinas, sulla Costa Verde, le dune sono fra le più alte d'Europa.",
        "come": "In auto da Iglesias: Masua è vicina, Piscinas più lontana, con un tratto di sterrato. Per Porto Flavia informarsi prima su come si visita.",
        "quando": "Primavera e autunno. D'estate le dune sono roventi.",
        "tempo": "Mezza giornata ciascuno",
        "consiglio": "Le dune si visitano meglio alla fine della giornata, quando la sabbia ha già perso il caldo."
      }
    ],
    programmi: [
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Cala Gonone, uscita in gommone nel Golfo di Orosei.",
          "Giorno 2: Gola di Gorropu al mattino, Oliena e Orgosolo nel pomeriggio.",
          "Giorno 3: Cala Goloritzé a piedi dal Golgo, prenotata."
        ]
      },
      {
        "titolo": "5 giorni",
        "tappe": [
          "Giorno 1: arrivo a Olbia, traghetto da Palau per La Maddalena e giro in barca.",
          "Giorno 2: da Palau verso Alghero lungo la costa.",
          "Giorno 3: Alghero, bastioni e Grotta di Nettuno.",
          "Giorno 4: La Pelosa a Stintino, poi verso il centro dell'isola.",
          "Giorno 5: Su Nuraxi di Barumini e rientro a Cagliari."
        ]
      },
      {
        "titolo": "7 giorni",
        "tappe": [
          "Giorno 1: Cagliari e Su Nuraxi di Barumini.",
          "Giorno 2: Barbagia, Oliena e Orgosolo.",
          "Giorno 3: Gorropu.",
          "Giorno 4: Golfo di Orosei in barca.",
          "Giorno 5: Cala Goloritzé.",
          "Giorno 6: Alghero e Grotta di Nettuno.",
          "Giorno 7: Stintino e La Pelosa, volo da Alghero."
        ]
      }
    ],
    zone: [
      {
        "nome": "Nord-est: Palau e La Maddalena",
        "perChi": "Chi vuole mare e arcipelago",
        "testo": "Base per le isole e per le spiagge della Gallura. Costa Smeralda vicina e cara. Traghetti frequenti per La Maddalena. Alta stagione molto affollata."
      },
      {
        "nome": "Centro-est: Cala Gonone, Dorgali, Baunei",
        "perChi": "Chi vuole cale e trekking",
        "testo": "Base per il Golfo di Orosei, Gorropu e Goloritzé. Strade lunghe e tortuose; i paesi dell'interno hanno agriturismi con ottimo rapporto qualità-prezzo."
      },
      {
        "nome": "Nord-ovest: Alghero e Stintino",
        "perChi": "Chi vuole città e spiagge",
        "testo": "Alghero ha un centro vivo e l'aeroporto; Stintino, vicino alla Pelosa, si raggiunge in auto. Con il maestrale il mare cambia da un lato all'altro."
      },
      {
        "nome": "Sud-ovest: Sulcis e Costa Verde",
        "perChi": "Chi cerca le spiagge meno battute",
        "testo": "Spiagge e dune quasi vuote, miniere, Carloforte. Più lontano da tutto, serve l'auto e qualche giorno in più."
      }
    ],
    sapori: [
      {
        "nome": "Porceddu",
        "testo": "Maialino arrosto allo spiedo, con pelle croccante e profumo di mirto. È il piatto delle feste e dei pranzi in agriturismo."
      },
      {
        "nome": "Culurgiones",
        "testo": "Ravioli d'Ogliastra con patata, menta e pecorino, chiusi a spiga. Si condiscono con sugo di pomodoro."
      },
      {
        "nome": "Pane carasau",
        "testo": "Pane sottile e croccante di pastori, mangiato con olio o come base del «pane guttiau»."
      },
      {
        "nome": "Pecorino sardo e fiore sardo",
        "testo": "Formaggi di pecora in tutte le stagionature, il fiore sardo anche affumicato. Si comprano dai produttori."
      },
      {
        "nome": "Cannonau e Vermentino",
        "testo": "Il Cannonau è il rosso simbolo, dalle vigne di Oliena e Jerzu. Il Vermentino di Gallura è l'unico DOCG dell'isola."
      },
      {
        "nome": "Mirto",
        "testo": "Il liquore alle bacche, bevuto freddo a fine pasto. Quello fatto in casa è più dolce."
      }
    ],
    attenzioni: [
      "Alcune spiagge e cale hanno accessi regolati, a volte con prenotazione (per esempio La Pelosa, con prenotazione dal 15 maggio al 15 ottobre e 3,50 € nel 2026, e Cala Goloritzé): controllare le regole della stagione prima di andare.",
      "È vietato portare via sabbia, ciottoli e conchiglie: le multe sono salate e i controlli ai porti e agli aeroporti ci sono.",
      "I traghetti con l'auto per l'estate si prenotano con mesi di anticipo e i prezzi salgono a luglio e agosto.",
      "Trekking come Gorropu e Goloritzé: in estate fa caldo, l'acqua serve in abbondanza, le scarpe devono essere adatte e dopo temporali i torrenti possono impedire il passaggio.",
      "Incendi in estate: vietati fuochi e barbecue nella macchia, e le strade possono chiudere. Rispettare i divieti dei comuni.",
      "Strade interne strette e tortuose, con pecore e curve cieche: contare più tempo di quello che suggerisce il navigatore e fare benzina prima di entrare nel Supramonte."
    ],
    esperienzeSlugs: ['gorropu', 'cala-goloritze'],
    tripSlugs: ['sardegna-due-anime'],
    imageAlt: 'La Costa Smeralda vista dall\'alto con la macchia mediterranea, le insenature e le isole sullo sfondo, Sardegna',
    immagine: '/images/italia/sardegna.jpg',
  },
  {
    slug: 'isole-minori',
    paeseSlug: 'italia',
    ordine: 10,
    nome: 'Le isole minori',
    tipologia: ['isole', 'mare', 'natura'],
    giorniConsigliati: '4-7 giorni per arcipelago',
    visitataPersonalmente: true,
    introduzione:
      'Oltre alle due grandi, l\'Italia ha una sessantina di isole abitate distribuite in otto arcipelaghi, e ognuna è un mondo a sé: vulcani attivi alle Eolie, rocce nere e vigne ad alberello a Pantelleria, il tufo e le grotte alle Ponziane, i fondali delle Tremiti nell\'unico parco marino dell\'Adriatico.',
    percheAndarci:
      'Hanno conservato una misura che la costa continentale ha perso: si girano a piedi o in barca, in bassa stagione ci vive poca gente e diverse sono ancora senza auto. Ognuna ha un carattere tutto suo, e sceglierle a caso è il modo migliore per finire nel posto sbagliato.',
    cosaVedere: [
      'Stromboli, con l\'eruzione visibile dal mare o dal punto di osservazione, e la Sciara del Fuoco',
      'Salina, Filicudi e Alicudi, le Eolie che non sono Lipari e Panarea',
      'Pantelleria, con i dammusi, i giardini panteschi e il Lago Specchio di Venere',
      'Capri con i Faraglioni e la Grotta Azzurra, Ischia con le terme naturali, Procida con Marina Corricella',
      'Ponza e Palmarola, con il tufo colorato e le grotte marine',
      'Le Tremiti, unico arcipelago dell\'Adriatico, con i fondali dell\'area marina protetta',
      'L\'Elba e l\'Arcipelago Toscano, il parco marino più grande d\'Europa',
      'Lampedusa con la Spiaggia dei Conigli, e Favignana con le cave di tufo e la tonnara',
    ],
    cosaFare: [
      'Salire a vedere l\'attività dello Stromboli, con guida obbligatoria oltre una certa quota',
      'Immersioni o snorkeling alle Tremiti e a Ustica, la prima area marina protetta istituita in Italia',
      'Bagno notturno nel Lago Specchio di Venere a Pantelleria, con il fango termale',
      'Il giro di un\'isola in barca, che nelle isole minori è quasi sempre il modo migliore di vederla',
    ],
    doveDormire:
      'Nelle isole minori l\'offerta è per forza limitata e in alta stagione si esaurisce: si prenota con mesi di anticipo per luglio e agosto. I dammusi a Pantelleria, le case eoliane a Salina e gli alberghi diffusi sono le formule più coerenti con i posti.',
    doveMangiare:
      'Ogni arcipelago ha la sua identità: capperi, malvasia e pesce azzurro alle Eolie; capperi, passito e il pesto pantesco a Pantelleria; coniglio all\'ischitana a Ischia, un piatto di terra su un\'isola; il pesce e il tonno in tutte le sue conserve a Favignana. La regola generale è che nelle isole minori **il pesce costa caro e la cucina di terra costa poco ed è spesso migliore**.',
    comeArrivare:
      'Traghetti e aliscafi dai porti continentali, con **frequenze che crollano in bassa stagione** e corse che saltano con il mare mosso: è la variabile che condiziona tutto. Pantelleria e Lampedusa hanno aeroporti; l\'Elba pure, ma con pochi collegamenti.',
    comeSpostarsi:
      'A piedi, in scooter, in barca. **Diverse isole limitano o vietano lo sbarco delle auto in estate** e in alcune (Panarea, Alicudi, Filicudi) le auto quasi non ci sono. Portarsi il mezzo è quasi sempre inutile e spesso impossibile.',
    periodoMigliore:
      'giugno e settembre sono la finestra ideale: mare caldo, collegamenti pieni, prezzi non ancora fuori scala. **Luglio e agosto sono da evitare** ovunque nelle isole minori: l\'offerta è satura, i prezzi si moltiplicano e posti già piccoli si riempiono. Da novembre a marzo molte isole chiudono quasi del tutto, con traghetti ridotti e strutture serrate.',
    costi:
      'I traghetti incidono più di quanto si pensi, e con l\'auto al seguito raddoppiano. In alta stagione gli alloggi nelle isole più note (Capri, Panarea, Ponza) raggiungono cifre da capitale europea.',
    erroriDaEvitare: [
      'Programmare coincidenze strette con i traghetti: **con il mare mosso le corse saltano**, e restare bloccati un giorno in più è la regola',
      'Scegliere l\'isola per fama invece che per carattere: Capri e Panarea in agosto sono mondane e affollatissime, e chi cercava la pace ha sbagliato indirizzo',
      'Portare l\'auto: quasi sempre inutile, spesso vietata, sempre cara',
      'Andare in bassa stagione senza controllare cosa è aperto: da novembre a marzo diverse isole hanno due ristoranti e un traghetto ogni tanto',
      'Sottovalutare l\'acqua: molte isole minori hanno problemi idrici e l\'acqua arriva con le navi cisterna, quindi va usata senza sprechi',
    ],
    confronti: [
      {
        titolo: 'Quale arcipelago italiano scegliere',
        introduzione:
          'Le isole minori italiane vengono spesso trattate come un blocco unico, mentre per geologia, carattere, prezzi e affollamento sono mondi separati. Ecco come si dividono.',
        opzioni: [
          {
            nome: 'Eolie (Sicilia)',
            sintesi: 'Sette isole vulcaniche a nord della Sicilia, patrimonio UNESCO, con due vulcani attivi: Stromboli, che erutta in continuazione, e Vulcano.',
            costo: 'medio-alto, con Panarea fuori scala e Alicudi e Filicudi molto economiche',
            durata: '5-7 giorni per farne almeno tre',
            pro: [
              'Due vulcani attivi: Stromboli è uno dei pochi al mondo in eruzione permanente e si vede dal mare di notte',
              'Le sette isole sono diversissime tra loro: si può passare da Panarea mondana ad Alicudi, dove non ci sono strade e ci si muove a piedi o con i muli',
              'Collegamenti interni frequenti in alta stagione',
              'Capperi, malvasia e una cucina isolana forte',
            ],
            contro: [
              'Affollatissime a luglio e agosto, con Panarea e Lipari sature',
              'I collegamenti dipendono dal mare: in caso di libeccio si resta fermi',
              'In inverno la vita si riduce al minimo',
            ],
            perChi: 'Chi vuole vulcani e varietà, e chi è disposto a spostarsi tra più isole in un viaggio.',
          },
          {
            nome: 'Pantelleria',
            sintesi: 'Un\'isola vulcanica più vicina all\'Africa che alla Sicilia, senza spiagge di sabbia, con i dammusi di pietra lavica e la vite ad alberello riconosciuta patrimonio immateriale UNESCO.',
            costo: 'medio-alto, ma senza il turismo di massa',
            durata: '5-7 giorni',
            pro: [
              'Non somiglia a nessun\'altra isola italiana: roccia nera, vento costante, terrazzamenti e giardini panteschi (i muri circolari che proteggono un solo albero)',
              'Il Lago Specchio di Venere, con il fango termale, e le grotte di vapore naturali',
              'Passito e capperi di altissimo livello',
              'Turismo meno di massa, con una clientela che ci torna',
            ],
            contro: [
              'Nessuna spiaggia di sabbia: si entra in acqua dalle rocce, e non è per tutti',
              'Il vento è una costante e può essere forte',
              'Serve l\'auto, e i collegamenti dal continente sono meno frequenti',
            ],
            perChi: 'Chi cerca un\'isola di carattere invece che di spiagge, e chi ama il vino.',
          },
          {
            nome: 'Golfo di Napoli: Capri, Ischia, Procida',
            sintesi: 'Tre isole vicinissime tra loro e completamente diverse: Capri verticale e mondana, Ischia termale e grande, Procida piccola e colorata.',
            costo: 'da altissimo (Capri) a contenuto (Procida)',
            durata: '3-5 giorni',
            pro: [
              'Accessibilità: si raggiungono in meno di un\'ora da Napoli, anche in giornata',
              'Ischia ha terme naturali, con sorgenti già sfruttate dai greci',
              'Procida è rimasta un paese di pescatori ed è la più autentica delle tre',
              'Capri fuori stagione, senza i visitatori in giornata, è un\'altra isola',
            ],
            contro: [
              'Capri in alta stagione è invivibile e carissima: arrivano decine di migliaia di visitatori in giornata',
              'Ischia è grande e in parte edificata in modo pesante',
              'Poca sensazione di isola remota: sono a vista dalla terraferma',
            ],
            perChi: 'Chi è già a Napoli, chi ha pochi giorni, chi cerca le terme (Ischia).',
          },
          {
            nome: 'Ponziane: Ponza e Palmarola',
            sintesi: 'Isole di tufo colorato a metà strada tra Roma e Napoli, con falesie, grotte marine e un mare che compete con le migliori del Tirreno.',
            costo: 'alto in alta stagione, soprattutto per il bacino romano che le riempie',
            durata: '4-5 giorni',
            pro: [
              'Il tufo giallo e rosso crea una costa unica, con grotte e archi naturali',
              'Palmarola, disabitata, è considerata da molti la più bella isola del Tirreno',
              'Vicinissime a Roma: si raggiungono in giornata',
            ],
            contro: [
              'Ad agosto sono il mare di Roma, e si sente: affollatissime e care',
              'Servizi limitati e alloggi pochi',
              'I collegamenti fuori stagione si riducono molto',
            ],
            perChi: 'Chi viene dal centro Italia e vuole un mare eccezionale senza andare in Sicilia.',
          },
          {
            nome: 'Tremiti e Arcipelago Toscano',
            sintesi: 'Le Tremiti, unico arcipelago dell\'Adriatico e area marina protetta; l\'Arcipelago Toscano con l\'Elba, il parco marino più grande d\'Europa.',
            costo: 'medio, parecchio più basso del Tirreno meridionale',
            durata: '3-5 giorni',
            pro: [
              'Le Tremiti hanno i fondali migliori dell\'Adriatico e sono minuscole: si girano a piedi',
              'L\'Elba unisce mare, montagna (il Monte Capanne), storia napoleonica e miniere',
              'Prezzi più contenuti e turismo soprattutto italiano',
              'Ottime per immersioni e snorkeling',
            ],
            contro: [
              'Mare meno spettacolare rispetto al Tirreno meridionale',
              'Le Tremiti ad agosto sono piccolissime e affollate',
              'L\'Elba è grande e in parte molto costruita',
            ],
            perChi: 'Chi viene dal centro-nord, subacquei, famiglie, chi vuole spendere meno.',
          },
        ],
        raccomandazione:
          'Per varietà e carattere, **le Eolie** restano la scelta più forte, a patto di andarci a giugno o a settembre e di includere almeno un\'isola minore come Salina o Filicudi. **Pantelleria** se si cerca un\'isola che non somigli a nulla e non si ha bisogno di sabbia. **Procida** se si è a Napoli e si ha poco tempo. E una regola vale per tutte: ad agosto, nelle isole minori italiane, si paga il triplo per stare in mezzo al triplo delle persone.',
      },
    ],
    miaEsperienza:
      'Nelle isole minori andare a giugno o ad agosto vuol dire trovare due posti diversi: sono piccole, con un numero finito di letti, ristoranti e barche, e quando arriva il carico di agosto smettono di funzionare come nel resto dell\'anno. Fra tutte, il ricordo più forte è Stromboli visto dal mare di notte: si sta su una barca a motore spento davanti alla Sciara del Fuoco, al buio, e ogni pochi minuti il cratere sputa materiale incandescente che rotola lungo il versante fino all\'acqua. Nessun effetto speciale: è un vulcano che fa quello che fa da millenni, con un paese abitato sotto. L\'altra sorpresa è Pantelleria, l\'anti-isola italiana: niente sabbia, vento sempre, roccia nera, e una viticoltura in cui le viti si coltivano in buche scavate nel terreno per proteggerle dal vento, tecnica dichiarata patrimonio immateriale dall\'UNESCO. Ci si va per capire cosa vuol dire coltivare qualcosa in un posto ostile.',
    luoghi: [
      {
        "nome": "Stromboli",
        "testo": "Isola-vulcano con eruzioni quasi continue dal cratere, visibili a intervalli di pochi minuti. Sotto la Sciara del Fuoco c'è il paese, con pochi abitanti. Il ricordo più forte per me è stato vederla dal mare di notte, a motore spento davanti alla Sciara, quando il cratere lancia materiale incandescente fino all'acqua.",
        "come": "Aliscafo da Milazzo o da Lipari e dalle altre Eolie. Sull'isola si cammina e si usano taxi-ape. Oltre la quota libera servono guide vulcanologiche autorizzate.",
        "quando": "La salita è regolata da ordinanze che cambiano con l'attività del vulcano: la quota massima, l'accesso alla cima e l'obbligo di guida si controllano presso il Comune di Lipari o le guide autorizzate prima di prenotare. Giugno e settembre, con mare calmo, per le uscite in barca.",
        "tempo": "1 giornata intera, meglio una notte",
        "consiglio": "La sera si cena a Stromboli e si esce in barca al buio: non serve la cima per vedere le esplosioni. Torcia frontale, scarpe da trekking e un maglione anche a settembre."
      },
      {
        "nome": "Salina",
        "testo": "La seconda isola più grande delle Eolie, due coni vulcanici gemelli coperti di verde, con vigneti di malvasia e capperi. Ha villaggi come Malfa e Pollara, dove è stato girato 'Il postino', e sentieri sul Monte Fossa delle Felci.",
        "come": "Aliscafo da Milazzo o da Lipari; in alta stagione sbarchi a Santa Marina e Rinella. Sull'isola ci sono pochi bus e conviene lo scooter.",
        "quando": "Giugno e settembre. In estate il tramonto da Pollara è affollato; meglio la mattina presto.",
        "tempo": "1-2 giorni",
        "consiglio": "Provare il tramonto da Pollara e la malvasia al passito in cantina. In agosto i collegamenti sono pieni."
      },
      {
        "nome": "Lago Specchio di Venere, Pantelleria",
        "testo": "Lago termale nel cratere spento di un vulcano, con acque calde sulla riva e fanghi usati per i bagni. Si vede dall'alto, a forma di cuore, appena sopra la strada per Bukkuram. Pantelleria è più vicina all'Africa che alla Sicilia: roccia nera, vento e viti ad alberello coltivate in buche scavate nel terreno, tecnica che l'UNESCO ha riconosciuto.",
        "come": "Serve un'auto o uno scooter da Pantelleria paese. Si arriva con volo da Trapani, Palermo e Catania, oppure via mare da Trapani con traghetto o aliscafo; con il mare mosso le corse saltano.",
        "quando": "Primavera e autunno per camminare, giugno e settembre per il bagno. L'isola è molto ventosa. Fango e bagno nel lago sono più piacevoli al mattino.",
        "tempo": "2-3 ore",
        "consiglio": "Se si fa il bagno di fango, togliere i gioielli e fare la doccia al lago prima di rientrare. Portare scarpe da scoglio: non ci sono spiagge di sabbia."
      },
      {
        "nome": "Dammusi, giardini panteschi e Montagna Grande",
        "testo": "I dammusi sono case in pietra lavica con cupola, costruite per resistere al vento e alla calura. I giardini panteschi sono muri di pietra circolari che proteggono un solo albero d'agrumi. La Montagna Grande è la cima dell'isola, con sentieri nel bosco.",
        "come": "Strade interne da percorrere in auto o scooter. I sentieri partono dalla strada per Montagna Grande.",
        "quando": "Primavera e autunno. L'estate è torrida di giorno e le giornate di scirocco rendono difficili i sentieri.",
        "tempo": "mezza giornata",
        "consiglio": "La Cantina di Pantelleria e le aziende locali fanno degustazioni di passito: prenotare. La vite ad alberello si vede soprattutto nella parte sud."
      },
      {
        "nome": "Capri: Faraglioni e Grotta Azzurra",
        "testo": "I tre Faraglioni sono scogli alti più di 100 metri a sud-est, visti meglio in barca. La Grotta Azzurra si visita con barchette a remi da Marina Grande, ma resta chiusa con il mare mosso. Capri in estate è presa d'assalto dai visitatori in giornata.",
        "come": "Aliscafo o traghetto da Napoli e da Sorrento. Dentro l'isola si va in bus e funicolare, poi si cammina.",
        "quando": "Maggio, giugno e settembre; fuori stagione Capri è un'altra isola. La Grotta Azzurra è visitabile con mare calmo, di mattina presto.",
        "tempo": "1 giorno, meglio 2 con una notte",
        "consiglio": "Per sfuggire alla folla, fare il giro dell'isola in barca la mattina presto e salire poi ad Anacapri. Nel pomeriggio i Faraglioni sono più belli in controluce."
      },
      {
        "nome": "Procida: Marina Corricella e Terra Murata",
        "testo": "La più piccola e meno costosa delle tre isole del golfo di Napoli. Marina Corricella è un porticciolo di pescatori con le case dipinte, Terra Murata il borgo alto con l'abbazia di San Michele Arcangelo.",
        "come": "Traghetto o aliscafo da Napoli (Molo Beverello e Calata Porta di Massa) o da Pozzuoli. Sull'isola si cammina e circolano minibus.",
        "quando": "Tutto l'anno, ma da maggio a settembre. In luglio e agosto i battelli di giornata portano molta gente.",
        "tempo": "1 giorno",
        "consiglio": "Scendere a Corricella dalla scalinata e mangiare in uno dei locali sul molo."
      },
      {
        "nome": "Ponza e Palmarola",
        "testo": "Ponza è un'isola di tufo giallo, con grotte e calette. Palmarola, disabitata, ha falesie e archi naturali, e si raggiunge con le barche dei pescatori da Ponza. Il mare è tra i più chiari del Tirreno.",
        "come": "Traghetto o aliscafo da Anzio, Formia o Terracina. Sull'isola si cammina o si prende il bus; il giro in barca si prenota in porto.",
        "quando": "Giugno e settembre. In agosto Ponza si riempie con il bacino romano.",
        "tempo": "1-2 giorni",
        "consiglio": "Il giro in barca è il modo migliore: partire presto e fermarsi per il bagno a Palmarola. Chiaia di Luna è spesso interdetta per rischio frane."
      },
      {
        "nome": "Isole Tremiti",
        "testo": "L'unico arcipelago italiano dell'Adriatico, con San Domino e San Nicola e un'area marina protetta. San Domino ha pinete, calette e grotte. San Nicola ha l'abbazia fortificata con vista a 360 gradi.",
        "come": "Traghetti e aliscafi da Termoli, Vieste, Peschici, Rodi Garganico e Ortona; da Termoli la traversata è la più breve.",
        "quando": "Giugno e settembre. D'inverno i collegamenti sono ridotti.",
        "tempo": "1-2 giorni",
        "consiglio": "Fare lo snorkeling con un operatore locale: l'area è protetta e l'accesso con la barca è regolato."
      },
      {
        "nome": "Favignana",
        "testo": "Isola delle Egadi, piatta a est, con le cave di tufo e il grande ex stabilimento Florio per la lavorazione del tonno. L'isola ha mare turchese a Cala Rossa e Lido Burrone.",
        "come": "Aliscafo da Trapani o da Marsala. Sull'isola si noleggia la bici: le distanze sono brevi.",
        "quando": "Maggio, giugno e settembre. La mattina presto le calette sono vuote.",
        "tempo": "1 giorno",
        "consiglio": "Giro in bici sulle cave, poi cena a base di tonno. Prenotare la bici in alta stagione."
      }
    ],
    programmi: [
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: aliscafo da Milazzo, arrivo a Salina, giro e tramonto a Pollara",
          "Giorno 2: trasferimento a Stromboli, cena sull'isola",
          "Giorno 3: uscita in barca verso la Sciara del Fuoco al buio"
        ]
      },
      {
        "titolo": "4 giorni",
        "tappe": [
          "Giorno 1-2: Capri e Procida dal golfo di Napoli",
          "Giorno 3-4: Ponza e Palmarola con giro in barca"
        ]
      }
    ],
    zone: [
      {
        "nome": "Eolie: Salina, Lipari o Stromboli",
        "perChi": "chi vuole più isole in un viaggio",
        "testo": "Salina è verde e tranquilla, Lipari la più comoda, Stromboli piccola e spartana. Le corse dipendono dal mare e saltano spesso."
      },
      {
        "nome": "Pantelleria",
        "perChi": "chi cerca un'isola di carattere senza sabbia",
        "testo": "Si dorme in dammusi, serve l'auto. Il vento è costante e a Pantelleria gli orari dei collegamenti cambiano con il tempo."
      },
      {
        "nome": "Golfo di Napoli: Procida",
        "perChi": "chi ha pochi giorni",
        "testo": "Procida costa meno di Capri e Ischia, vita da villaggio, con collegamenti frequenti da Napoli."
      }
    ],
    sapori: [
      {
        "nome": "Pane cunzato e capperi, Eolie",
        "testo": "Pane condito con pomodoro, acciughe, capperi, origano e formaggio. I capperi di Salina sono un presidio Slow Food."
      },
      {
        "nome": "Malvasia delle Lipari",
        "testo": "Vino bianco dolce da uve appassite, la Malvasia di Salina e Lipari. Si beve a fine pasto."
      },
      {
        "nome": "Passito di Pantelleria",
        "testo": "Vino dolce da uva zibibbo coltivata ad alberello, patrimonio UNESCO. Si assaggia nelle cantine locali, su prenotazione."
      },
      {
        "nome": "Coniglio all'ischitana",
        "testo": "Piatto di terra di Ischia: coniglio in casseruola con pomodoro, aglio e vino. Si mangia nelle trattorie di campagna."
      },
      {
        "nome": "Tonno di Favignana",
        "testo": "Tonno rosso lavorato per generazioni nello stabilimento Florio. In conserva o fresco nei ristoranti del porto."
      },
      {
        "nome": "Cucina di terra",
        "testo": "Nelle isole minori il pesce costa caro e la cucina di terra costa poco ed è spesso migliore."
      }
    ],
    attenzioni: [
      "In luglio e agosto le isole minori sono sature e i prezzi si moltiplicano: prenotare alloggio e traghetto con mesi di anticipo o andare a giugno e settembre.",
      "Il mare mosso blocca aliscafi e traghetti: non incastrare coincidenze strette con voli o treni nello stesso giorno.",
      "Stromboli: la salita è regolata da un'ordinanza che cambia con l'attività del vulcano (quota consentita, obbligo di guida): verificarla prima. Chi non la rispetta rischia multe e pericoli.",
      "Molte isole limitano o vietano lo sbarco delle auto in estate: portare l'auto è quasi sempre inutile e costoso.",
      "L'acqua dolce è scarsa e arriva con navi cisterna: usarla con parsimonia.",
      "Fuori stagione (novembre-marzo) molte strutture sono chiuse e i collegamenti ridotti: verificare cosa è aperto prima di partire."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['eolie-in-vela', 'isole-siciliane', 'costiera-e-isole'],
    imageAlt: 'L\'Isola dei Conigli a Lampedusa circondata da acqua turchese e trasparente',
    immagine: '/images/italia/isole-minori.jpg',
  },
  {
    slug: 'italia-inesplorata',
    paeseSlug: 'italia',
    ordine: 11,
    nome: 'L\'Italia inesplorata',
    tipologia: ['borghi', 'natura', 'cammini'],
    giorniConsigliati: '4-7 giorni per area',
    visitataPersonalmente: true,
    introduzione:
      'Il paese ha cinquantanove siti UNESCO e milioni di visitatori concentrati su una decina di posti. Intanto ci sono intere regioni dove il turismo non è mai arrivato: il Molise, che è diventato un meme proprio per questo, l\'Appennino lucano, le montagne del Friuli, i Sibillini, l\'entroterra calabrese. Sono le zone dove l\'Italia costa ancora quello che costava vent\'anni fa.',
    percheAndarci:
      'È l\'unica parte del paese dove si può camminare un\'intera giornata senza incontrare nessuno, mangiare con venti euro e parlare con chi ci vive invece che con chi ci lavora. E molti di questi posti si stanno spopolando: o si vedono adesso o non si vedono più.',
    cosaVedere: [
      'Il Molise: Campobasso e Isernia, i tratturi della transumanza (patrimonio immateriale UNESCO), Pietrabbondante con il teatro sannita, la costa di Termoli',
      'L\'Appennino lucano e il Pollino, il parco nazionale più grande d\'Italia, con i pini loricati',
      'I Monti Sibillini e l\'entroterra marchigiano, con i borghi ricostruiti dopo il sisma del 2016',
      'La Carnia e le Valli del Natisone in Friuli, con le case in pietra e una cultura di confine slovena e germanica',
      'L\'Aspromonte e la Calabria greca, dove si parla ancora il grecanico',
      'La Val Grande in Piemonte, la più vasta area wilderness d\'Italia: nessuna strada, nessun paese abitato',
      'Il Cilento interno, con i borghi e il Vallo di Diano, e le Murge con le gravine',
      'I cammini: la Via degli Dei, il Cammino di San Benedetto, la Via Francigena nel sud',
    ],
    cosaFare: [
      'Camminare un tratto della Via degli Dei o di un altro cammino, dormendo negli ostelli e nelle parrocchie (vedi la scheda esperienza dedicata)',
      'Le feste patronali di paese, che nell\'Italia interna restano l\'evento principale dell\'anno',
      'Mangiare in una trattoria di paese senza menu, dove si chiede cosa c\'è',
      'Percorrere un tratto di tratturo, le vie erbose larghe cento metri su cui si spostavano le greggi da secoli',
    ],
    doveDormire:
      'Agriturismi, alberghi diffusi (formula nata proprio in Friuli e diffusa nei borghi in spopolamento) e B&B familiari. I prezzi sono quelli che nel resto d\'Italia non esistono più: cinquanta-settanta euro per due persone con colazione sono la norma.',
    doveMangiare:
      'È la parte migliore. Nell\'Italia interna la cucina è ancora legata al territorio e alle stagioni, cosa che altrove è diventata uno slogan: pasta fatta a mano con nomi diversi ogni venti chilometri, carni di allevamento locale, formaggi di piccole produzioni, verdure spontanee. **Un pasto completo con vino sta tra i venti e i trenta euro**, e spesso non c\'è un menu scritto. Il rovescio della medaglia: fuori orario non si mangia, e la domenica sera e il lunedì molti posti sono chiusi.',
    comeArrivare:
      '**Auto obbligatoria, senza eccezioni.** I treni regionali arrivano ai capoluoghi e lì si ferma tutto; gli autobus extraurbani hanno corse pensate per gli studenti, quindi due la mattina e due il pomeriggio, e niente nei fine settimana.',
    comeSpostarsi:
      'Serve un\'auto propria. Le strade interne sono strette, tortuose e in certi tratti dissestate: i tempi vanno aumentati di un terzo rispetto alle stime delle mappe. Il carburante nei paesi piccoli può non esserci: si fa il pieno quando si può, non quando serve.',
    periodoMigliore:
      'maggio-giugno e settembre-ottobre. L\'estate nell\'interno del centro-sud è torrida; l\'inverno in Appennino porta neve e strade chiuse, con diversi paesi che vanno in letargo. Le feste patronali si concentrano tra giugno e settembre ed è quando i paesi tornano pieni, perché rientrano gli emigrati.',
    costi:
      'È la parte d\'Italia dove si spende meno, di gran lunga. Ingressi quasi ovunque gratuiti o simbolici, alloggi e ristoranti a cifre che sulla costa o in città non esistono più.',
    erroriDaEvitare: [
      'Contare sui mezzi pubblici: qui non servono a niente',
      'Arrivare in un paese alle tre del pomeriggio e cercare da mangiare: nell\'Italia interna si mangia tra le dodici e mezza e le due, e poi si chiude',
      'Dare per scontata la connessione: in molte valli interne il segnale è assente, e le mappe offline sono una precauzione seria',
      'Sottovalutare le distanze e le strade: sessanta chilometri di statale interna possono voler dire due ore',
      'Aspettarsi servizi turistici: qui non ci sono uffici informazioni, audioguide né cartelli in inglese, ed è proprio questo il bello',
      'Andare ad agosto pensando di trovarla vuota: ad agosto i paesi si riempiono di chi è emigrato e torna, ed è il periodo più vivo dell\'anno, bello ma non silenzioso',
    ],
    confronti: [
      {
        titolo: 'Dove non va nessuno: cinque Italie fuori rotta',
        introduzione:
          'Le zone poco battute non sono tutte uguali: alcune sono remote per geografia, altre per lo spopolamento, altre perché non hanno mai avuto un\'immagine da vendere. Cambiano parecchio per accessibilità, paesaggio e cosa ci si trova.',
        opzioni: [
          {
            nome: 'Molise',
            sintesi: 'La regione più piccola e meno visitata d\'Italia, con i tratturi della transumanza, i siti sanniti, un pezzo di Appennino e sessanta chilometri di costa.',
            costo: 'il più basso d\'Italia',
            durata: '4-5 giorni',
            pro: [
              'I tratturi, le vie erbose larghe fino a cento metri su cui si spostavano le greggi per secoli: la transumanza è patrimonio immateriale UNESCO',
              'Pietrabbondante, con un teatro sannita del II secolo a.C. in una posizione spettacolare e nessuno intorno',
              'Prezzi e ospitalità di un\'Italia che altrove non c\'è più',
              'Accessibile: è a due ore da Roma e Napoli',
            ],
            contro: [
              'Non ha un «pezzo forte» da cartolina, ed è il motivo per cui nessuno ci va',
              'Servizi turistici quasi assenti',
              'Serve l\'auto e serve accettare che il programma sia poco denso',
            ],
            perChi: 'Chi vuole l\'Italia senza filtro e non ha bisogno di monumenti famosi.',
          },
          {
            nome: 'Appennino lucano e Pollino',
            sintesi: 'Il parco nazionale più grande d\'Italia a cavallo tra Basilicata e Calabria, con i pini loricati e i paesi arbëreshë di lingua albanese.',
            costo: 'molto basso',
            durata: '5-7 giorni',
            pro: [
              'Montagna seria e poco frequentata, con vette sopra i duemila metri',
              'I pini loricati, che crescono solo qui e nei Balcani, aggrappati alle rocce',
              'I paesi arbëreshë, fondati da profughi albanesi nel Quattrocento, dove si parla ancora una lingua propria',
              'Vicino a Matera, che si può aggiungere',
            ],
            contro: [
              'Strade lunghe e lente, distanze che si sentono',
              'Sentieristica meno curata rispetto alle Alpi',
              'Pochissimi servizi in quota',
            ],
            perChi: 'Chi cammina e vuole montagna senza folla, e chi si interessa alle minoranze linguistiche.',
          },
          {
            nome: 'Carnia e Valli del Natisone (Friuli)',
            sintesi: 'Le montagne del Friuli, con una cultura di confine tra italiano, friulano, sloveno e tedesco, e i luoghi della Grande Guerra.',
            costo: 'basso per gli standard alpini',
            durata: '4-6 giorni',
            pro: [
              'Alpi senza i prezzi e l\'affollamento alpini',
              'Strati culturali che non si trovano altrove, con quattro lingue in poche valli',
              'I luoghi della Grande Guerra, dal Monte Cavallo alle trincee',
              'Cucina di montagna con il frico, il formaggio di malga e i vini friulani a poca distanza',
            ],
            contro: ['Clima piovoso: il Friuli è tra le zone più piovose d\'Italia', 'Distanze dalle grandi città', 'Alcuni valichi chiusi d\'inverno'],
            perChi: 'Chi ama la montagna ma non vuole pagare le Dolomiti, e chi si interessa alla storia di confine.',
          },
          {
            nome: 'Val Grande (Piemonte)',
            sintesi: 'La più vasta area wilderness d\'Italia, tra Lago Maggiore e Svizzera: nessuna strada, nessun paese abitato, alpeggi abbandonati riconquistati dal bosco.',
            costo: 'basso, ma richiede autonomia',
            durata: '2-4 giorni di trekking',
            pro: [
              'È l\'unico posto in Italia dove si può camminare giorni senza incontrare nessuno e senza strade',
              'Vicinissima al Lago Maggiore, quindi facile da raggiungere',
              'Storia della resistenza partigiana e dell\'abbandono montano',
            ],
            contro: [
              '**Non è per principianti**: sentieri poco segnati, bivacchi essenziali, nessun rifugio con servizio, nessun segnale telefonico',
              'Serve autonomia completa: acqua, cibo, orientamento',
              'Ogni anno ci sono interventi di soccorso per persone che l\'hanno sottovalutata',
            ],
            perChi: 'Escursionisti esperti e autonomi. Non è una passeggiata e non va trattata come tale.',
          },
          {
            nome: 'Aspromonte e Calabria greca',
            sintesi: 'L\'estremità della penisola, con il parco nazionale dell\'Aspromonte, i borghi abbandonati come Pentedattilo e Roghudi, e le comunità dove si parla ancora il grecanico.',
            costo: 'molto basso',
            durata: '5-7 giorni',
            pro: [
              'Il grecanico, una lingua greca sopravvissuta dall\'antichità, ancora parlata da poche centinaia di persone',
              'Borghi abbandonati spettacolari, svuotati da frane e alluvioni e lasciati dov\'erano',
              'Paesaggio che passa dal mare a milleottocento metri in venti chilometri',
              'I Bronzi di Riace a Reggio, che sono tra i pochi bronzi greci originali al mondo',
            ],
            contro: [
              'Strade interne molto lente e in certi tratti dissestate',
              'Servizi turistici minimi',
              'Estate torrida sulla costa',
            ],
            perChi: 'Chi vuole spingersi dove finisce l\'Italia, e chi si interessa alle culture in via di estinzione.',
          },
        ],
        raccomandazione:
          'La più accessibile e la meno impegnativa è il **Molise**, a due ore da Roma, che non chiede niente. Per la montagna, **Carnia** al nord e **Pollino** al sud, entrambe a una frazione del prezzo delle Alpi famose. La **Val Grande** solo per chi cammina sul serio ed è autonomo. L\'**Aspromonte** è la più lontana e la più sorprendente, ma va messo in conto un viaggio lungo. E per tutte vale una cosa: qui l\'auto è indispensabile.',
      },
    ],
    miaEsperienza:
      'Nell\'Italia inesplorata si capisce quanto sia concentrato il turismo in questo paese: cinquanta milioni di persone all\'anno si distribuiscono su una decina di città e di coste, e a due ore da quelle stesse città ci sono valli in cui si cammina mezza giornata senza incontrare nessuno. Più del paesaggio, bello ma non straordinario rispetto alle Alpi, colpisce il rapporto con chi ci vive. In un paese di trecento abitanti dell\'Appennino nessuno cerca di venderti niente, perché non c\'è un mercato: ti chiedono da dove vieni, e la risposta gli interessa. Si mangia in trattorie senza menu dove si chiede cosa c\'è e arrivano tre portate per venticinque euro con il vino della casa. Il rovescio da conoscere: qui non ci sono orari flessibili, non c\'è connessione, non c\'è un ufficio informazioni, e chi arriva alle tre del pomeriggio cercando un pranzo trova tutto chiuso. E non si può ignorare il motivo per cui questi posti sono vuoti: si stanno spopolando. Ci sono paesi con più case vuote che abitate e con l\'età media sopra i sessant\'anni. Vederli adesso significa vederli finché ci sono.',
    luoghi: [
      {
        "nome": "Pietrabbondante e il Molise sannita",
        "testo": "Il santuario sannita di Pietrabbondante, in quota nell'Alto Molise, ha un teatro-tempio del II secolo a.C. con le sedute in pietra e il tempio principale. Intorno restano le colline vuote su cui passavano i tratturi, le vie della transumanza riconosciute dall'UNESCO.",
        "come": "In auto da Isernia o da Campobasso. Non ci sono mezzi pubblici utili. Si visita da soli, con pannelli.",
        "quando": "Primavera e autunno. Controllare orari e giorni di apertura con il Comune o la Soprintendenza prima di partire, soprattutto fuori stagione.",
        "tempo": "1-2 ore, più il giro dei paesi",
        "consiglio": "Abbinare la visita a un pranzo in una trattoria di paese, arrivando presto: dopo l'ora di pranzo la cucina chiude."
      },
      {
        "nome": "Termoli",
        "testo": "Piccola città sul mare con il borgo vecchio sul promontorio, il castello svevo e i trabucchi, le antiche macchine da pesca su palafitte. È il porto da cui partono i traghetti per le isole Tremiti.",
        "come": "Treno sulla linea adriatica o autostrada A14. Il borgo si raggiunge a piedi dalla stazione.",
        "quando": "Maggio-giugno e settembre. In agosto si riempie di vacanzieri italiani.",
        "tempo": "mezza giornata",
        "consiglio": "Mangiare il brodetto alla termolese in uno dei locali in porto, e passeggiare sul lungomare al tramonto."
      },
      {
        "nome": "Parco Nazionale del Pollino",
        "testo": "Il parco più grande d'Italia, tra Basilicata e Calabria, con vette oltre i 2.000 metri e i pini loricati, alberi secolari che crescono ad alta quota solo qui e in pochi altri posti dei Balcani. I sentieri partono dai valichi di Colle Impiso e Piano di Ruggio.",
        "come": "Solo in auto. Da Terranova di Pollino o San Severino Lucano. Il Pollino si gira con carta o app di sentieri; servono scarpe da montagna.",
        "quando": "Giugno-settembre per la quota, ottobre per i colori. Da novembre a maggio neve e strade chiuse.",
        "tempo": "1-2 giorni",
        "consiglio": "Fare il pieno e portare cibo: nei villaggi di montagna i negozi chiudono presto. Il tempo cambia in fretta sopra i 1.800 metri."
      },
      {
        "nome": "Monti Sibillini e Castelluccio di Norcia",
        "testo": "Parco con cime oltre i 2.000 metri e l'altopiano del Piano Grande di Castelluccio, noto per la fioritura delle lenticchie e dei fiori selvatici. Il sisma del 2016 ha colpito molti borghi: oggi sono ricostruiti in parte.",
        "come": "In auto da Norcia o dalle Marche. Alcune strade possono essere chiuse per frane o lavori: controllare.",
        "quando": "La fioritura si concentra tra fine maggio e luglio. Nei fine settimana di fioritura il Piano si riempie di auto.",
        "tempo": "1 giornata",
        "url": "https://www.sibillini.net/",
        "consiglio": "Visitare in settimana e al mattino presto per la luce migliore, e non camminare tra i campi fioriti."
      },
      {
        "nome": "Carnia e le valli del Friuli",
        "testo": "Valli alpine con case in pietra, borghi come Sauris e Forni di Sopra e una cultura di confine tra friulano, tedesco e sloveno. Qui è nato l'albergo diffuso, che usa le case dei paesi svuotati.",
        "come": "In auto da Udine verso Tolmezzo. Le valli si girano in macchina e con brevi camminate.",
        "quando": "Giugno-settembre per i sentieri, inverno per la neve. Il Friuli è tra le zone più piovose d'Italia.",
        "tempo": "2-3 giorni",
        "consiglio": "Provare il prosciutto di Sauris e il formaggio di malga, e chiedere dei sentieri alla pro loco."
      },
      {
        "nome": "Val Grande",
        "testo": "Una delle più vaste aree wilderness d'Italia, senza strade né paesi abitati, tra il Lago Maggiore e la Svizzera. Ci sono alpeggi abbandonati ripresi dal bosco e sentieri poco segnati. Non è per principianti.",
        "come": "Gli accessi partono da Cicogna, Premosello e dalla Val d'Ossola. Servono autonomia, mappe e acqua: i bivacchi sono essenziali e non c'è segnale.",
        "quando": "Fine primavera-autunno. Dopo le piogge i sentieri possono essere impraticabili.",
        "tempo": "2-4 giorni di trekking",
        "url": "https://www.parcovalgrande.it/",
        "consiglio": "Chiedere informazioni all'ente parco prima di partire e comunicare il percorso. Ogni anno ci sono soccorsi per chi sottovaluta l'area."
      },
      {
        "nome": "Aspromonte e Pentedattilo",
        "testo": "Parco nazionale che passa dal mare a quasi 2.000 metri in pochi chilometri. Pentedattilo è un borgo fantasma ai piedi di una roccia a forma di mano; Roghudi e Gallicianò sono comunità grecaniche, dove sopravvive il grecanico, un dialetto di origine greca.",
        "come": "In auto da Reggio Calabria. Le strade interne sono lente e dissestate in tratti.",
        "quando": "Primavera e autunno. L'estate è torrida sulla costa.",
        "tempo": "2-3 giorni",
        "consiglio": "Al Museo Archeologico di Reggio Calabria si vedono i Bronzi di Riace: farlo il giorno di arrivo o partenza."
      },
      {
        "nome": "Via degli Dei",
        "testo": "Cammino di circa 130 km da Bologna a Firenze che segue l'antica via romana attraverso l'Appennino. Si dorme in ostelli e foresterie e si cammina 4-5 giorni, con salite e scalinate.",
        "come": "Treno fino a Bologna per la partenza, rientro con treno da Firenze. Il tracciato è segnato; ostelli da prenotare.",
        "quando": "Aprile-giugno e settembre-ottobre. In estate il caldo e in inverno il fango.",
        "tempo": "4-5 giorni",
        "consiglio": "Prenotare i posti letto con anticipo e portare poco peso: le tappe sono lunghe."
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Pietrabbondante e pranzo in trattoria di paese",
          "Giorno 1 sera: Isernia o un agriturismo",
          "Giorno 2: Termoli, borgo vecchio e trabucchi, poi il mare"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Pollino, sentiero ai pini loricati",
          "Giorno 2: borghi lucani e cena in trattoria",
          "Giorno 3: Castelluccio o l'Aspromonte, secondo la direzione del viaggio"
        ]
      }
    ],
    zone: [
      {
        "nome": "Agriturismi e alberghi diffusi",
        "perChi": "chi vuole prezzi bassi e cucina vera",
        "testo": "I prezzi sono molto più bassi che nelle zone turistiche. Servono l'auto e la prenotazione: molti posti chiudono tra novembre e marzo."
      },
      {
        "nome": "Capoluoghi (Isernia, Campobasso, Reggio Calabria)",
        "perChi": "chi arriva in treno",
        "testo": "Comodi come base per i treni regionali, ma poco interessanti. Da lì si prende l'auto per i borghi."
      },
      {
        "nome": "B&B di paese",
        "perChi": "chi vuole parlare con chi ci vive",
        "testo": "Pochi letti, ospitalità familiare. Chiedere dove mangiare: spesso non esiste un menu scritto."
      }
    ],
    sapori: [
      {
        "nome": "Cavatelli e pasta fatta a mano",
        "testo": "Nell'Italia interna la pasta fresca cambia nome ogni venti chilometri. Si mangia nelle trattorie di paese, spesso senza menu."
      },
      {
        "nome": "Caciocavallo e formaggi di piccole produzioni",
        "testo": "Formaggi di malga e di caseificio familiare, dal Molise alla Carnia."
      },
      {
        "nome": "Frico della Carnia",
        "testo": "Formaggio e patate cotti in padella fino a una crosta dorata. Piatto di montagna friulano."
      },
      {
        "nome": "Peperoni cruschi di Senise",
        "testo": "Peperoni secchi e fritti, croccanti, tipici della Basilicata e dell'area del Pollino."
      },
      {
        "nome": "Lenticchie di Castelluccio",
        "testo": "Piccole lenticchie coltivate sull'altopiano dei Sibillini, che si mangiano in zuppa."
      }
    ],
    attenzioni: [
      "Auto obbligatoria: in queste zone i mezzi pubblici arrivano ai capoluoghi e poi finiscono. Calcolare tempi più lunghi di quelli stimati dalle mappe.",
      "Si mangia a pranzo presto e la sera presto; la domenica sera e il lunedì molti posti sono chiusi. A metà pomeriggio non si trova nulla.",
      "Il segnale telefonico manca in molte valli: scaricare mappe offline e fare il pieno quando si può.",
      "Val Grande e alta quota del Pollino sono ambienti da escursionisti esperti: meteo che cambia, pochi rifugi, soccorsi lontani.",
      "Ad agosto i paesi si riempiono di chi è emigrato e torna: è il periodo più vivo, non il più tranquillo.",
      "Dopo il sisma del 2016 alcune strade e borghi dei Sibillini hanno chiusure: controllare gli avvisi dell'ente parco."
    ],
    esperienzeSlugs: ['cammini-italia'],
    tripSlugs: [],
    imageAlt: 'Civita di Bagnoregio arroccata sul suo sperone di tufo, raggiungibile solo dal lungo ponte pedonale, nella Tuscia',
    immagine: '/images/italia/italia-inesplorata.jpg',
  },
  {
    slug: 'rotte-dei-vini',
    paeseSlug: 'italia',
    ordine: 12,
    nome: 'Sulle rotte dei grandi vini',
    tipologia: ['enogastronomia', 'paesaggi', 'itinerari'],
    giorniConsigliati: '4-6 giorni per rotta',
    visitataPersonalmente: true,
    introduzione:
      'L\'Italia è il maggior produttore mondiale di vino e ha oltre cinquecento varietà autoctone catalogate, più di qualunque altro paese. Tre paesaggi vitivinicoli sono patrimonio UNESCO: le Langhe-Roero e Monferrato, le colline del Prosecco di Conegliano e Valdobbiadene, e la Costiera come paesaggio culturale. E quasi ogni denominazione importante ha attorno un territorio che si gira in auto in pochi giorni.',
    percheAndarci:
      'Qui il vino è il pretesto migliore per vedere paesaggi agrari costruiti in secoli: i terrazzamenti della Valtellina, le colline delle Langhe, i muretti a secco dell\'Etna. E in cantina si parla con chi produce, cosa che in Francia succede molto meno.',
    cosaVedere: [
      'Le Langhe e il Roero, patrimonio UNESCO, con Barolo, Barbaresco, Alba e il tartufo bianco',
      'La Valpolicella e il Soave, con le ville venete e le fruttaie dove appassiscono le uve dell\'Amarone',
      'Le colline del Prosecco tra Conegliano e Valdobbiadene, patrimonio UNESCO, con il Cartizze',
      'Il Chianti Classico, Montalcino e Montepulciano, con le abbazie e i borghi murati',
      'L\'Etna, con le contrade sui versanti del vulcano e le viti a piede franco, sopravvissute alla fillossera',
      'Il Collio e i Colli Orientali in Friuli, per i bianchi e i macerati',
      'La Valtellina, con i terrazzamenti a strapiombo e i muretti a secco',
      'L\'Irpinia e il Vulture, i due grandi rossi del sud: Taurasi e Aglianico del Vulture',
    ],
    cosaFare: [
      'Visita e degustazione in cantina, prenotando in anticipo (vedi la scheda esperienza dedicata)',
      'Andarci in vendemmia, tra fine agosto e ottobre, quando le cantine lavorano',
      'La fiera del tartufo bianco d\'Alba, in autunno, quando le Langhe danno il meglio e si riempiono',
      'Camminare tra i vigneti: quasi tutte le zone hanno sentieri segnati tra le vigne',
    ],
    doveDormire:
      'Gli agriturismi e i wine resort delle zone vitivinicole sono la formula giusta, e in molti casi sono le cantine stesse. In Langhe e in Chianti i prezzi sono alti in stagione; in Irpinia, nel Vulture e in Valtellina si spende una frazione per una qualità simile.',
    doveMangiare:
      'Ogni rotta ha la sua cucina, ed è per questo che il tema funziona: nelle Langhe il tajarin, il vitello tonnato, la carne cruda e il tartufo; in Valpolicella il risotto all\'Amarone e i bolliti; in Toscana la bistecca e i pici; sull\'Etna la pasta alla Norma e il pesce dello Ionio; in Valtellina i pizzoccheri e la bresaola. **Il modo migliore di mangiare in queste zone è nelle osterie convenzionate con i consorzi**, che hanno le carte dei vini locali complete a prezzi di cantina.',
    comeArrivare:
      'In auto, sempre. Le zone del vino sono colline con paesi sparsi, e i mezzi pubblici servono a poco. Gli aeroporti e le stazioni di riferimento sono Torino e Milano per il Piemonte, Verona per il Veneto, Firenze per la Toscana, Catania per l\'Etna, Trieste per il Friuli.',
    comeSpostarsi:
      'Auto, con un tema serio: **chi guida non degusta**. Le alternative sono affidarsi a un autista, usare i servizi navetta che diverse zone offrono, oppure organizzare le visite in modo che chi guida assaggi e sputi, come fanno i professionisti.',
    periodoMigliore:
      '**settembre e ottobre**, durante la vendemmia: le cantine sono in piena attività, i colori delle vigne cambiano e le fiere sono in calendario. Aprile-giugno è la seconda finestra, con il verde e meno gente. Da novembre a marzo molte piccole cantine riducono le visite, e ad agosto diverse chiudono.',
    costi:
      'Le degustazioni in cantina costano di solito tra i 15 e i 40 euro a persona a seconda dei vini e dell\'accoglienza, spesso scalati sull\'acquisto. Nelle zone più note (Barolo, Montalcino) le visite guidate delle cantine storiche costano di più; nelle zone emergenti si paga molto meno o nulla.',
    erroriDaEvitare: [
      '**Presentarsi in cantina senza appuntamento**: è l\'errore numero uno. Le cantine sono aziende agricole con orari di lavoro, e quasi tutte ricevono solo su prenotazione, spesso con qualche giorno di anticipo',
      'Programmare più di due o tre cantine al giorno: dopo la terza non si assaggia più niente con attenzione, e la giornata diventa una collezione di timbri',
      'Non risolvere il problema di chi guida prima di partire: le sanzioni per la guida in stato di ebbrezza in Italia sono severe e i controlli nelle zone vitivinicole esistono',
      'Andare ad agosto: molte cantine chiudono o riducono, e chi lavora è in ferie o in preparazione della vendemmia',
      'Fermarsi solo alle denominazioni famose: le Langhe e Montalcino sono care e affollate, mentre l\'Irpinia, il Vulture, la Valtellina e l\'Etna offrono lo stesso livello con una frazione dei visitatori',
      'Comprare in enoteca quello che si può comprare in cantina: in azienda il prezzo è quello di produzione e si parla con chi l\'ha fatto',
    ],
    confronti: [
      {
        titolo: 'Quale rotta del vino scegliere',
        introduzione:
          'Le denominazioni italiane sono oltre quattrocento, ma le rotte che funzionano come viaggio, con paesaggio, cantine visitabili e cucina all\'altezza in un raggio percorribile, sono una decina. Cambiano moltissimo per prezzo, affollamento e tipo di vino.',
        opzioni: [
          {
            nome: 'Langhe e Roero (Piemonte)',
            sintesi: 'Patrimonio UNESCO: Barolo, Barbaresco, Barbera e Dolcetto su colline di marna, con Alba al centro e il tartufo bianco in autunno.',
            costo: 'la rotta più cara d\'Italia, con Barolo e Barbaresco a livelli internazionali',
            durata: '4-5 giorni',
            pro: [
              'Il livello enologico più alto d\'Italia, con il Nebbiolo che è tra i grandi vitigni del mondo',
              'Paesaggio UNESCO di colline coltivate a vite fino all\'orizzonte',
              'La cucina piemontese è tra le migliori del paese: tajarin, carne cruda, plin, tartufo in stagione',
              'Cantine strutturate per l\'accoglienza, con visite ben organizzate',
            ],
            contro: [
              'Cara su tutto: cantine, alloggi, ristoranti',
              'In autunno, durante la fiera del tartufo, è satura e i prezzi raddoppiano',
              'È la rotta più battuta e si sente',
            ],
            perChi: 'Chi vuole il meglio e ha budget, e chi mette la cucina allo stesso livello del vino.',
          },
          {
            nome: 'Valpolicella, Soave e le colline del Prosecco (Veneto)',
            sintesi: 'Tre zone vicine tra loro alle spalle di Verona: l\'Amarone con le sue fruttaie, il Soave, e le colline del Prosecco patrimonio UNESCO.',
            costo: 'medio',
            durata: '3-5 giorni',
            pro: [
              'Tre denominazioni diversissime in poche decine di chilometri',
              'Le fruttaie dell\'Amarone, dove le uve appassiscono per mesi su graticci: una tecnica che si vede solo qui',
              'Le colline del Prosecco sono paesaggio UNESCO, con pendenze coltivate a mano',
              'Vicinissime a Verona, al Garda e a Venezia: facili da incastrare',
            ],
            contro: [
              'La zona del Prosecco ha subito una viticoltura molto intensiva, e in certi tratti si vede',
              'Meno «remota» delle altre: si è sempre vicini a strade trafficate',
              'La Valpolicella classica è piccola e in alta stagione le cantine migliori si riempiono',
            ],
            perChi: 'Chi ha pochi giorni, chi combina il vino con Verona e il Garda, chi vuole vedere tecniche diverse.',
          },
          {
            nome: 'Chianti Classico, Montalcino e Montepulciano (Toscana)',
            sintesi: 'Il Sangiovese in tre declinazioni, tra Firenze e Siena, con le abbazie, i borghi murati e i cipressi.',
            costo: 'alto, con Montalcino ai livelli delle Langhe',
            durata: '4-6 giorni',
            pro: [
              'Il paesaggio più fotografato d\'Italia, e non a caso',
              'Si combina con Firenze e Siena senza spostamenti lunghi',
              'Brunello di Montalcino e Chianti Classico sono denominazioni con cantine molto ben organizzate per le visite',
              'Le abbazie (Sant\'Antimo, San Galgano) aggiungono qualcosa in più al viaggio',
            ],
            contro: [
              'La rotta più turistica di tutte: in alta stagione le strade del Chianti sono trafficate',
              'Prezzi alti, con molte strutture pensate per un turismo internazionale di fascia alta',
              'Meno varietà: è quasi tutto Sangiovese',
            ],
            perChi: 'Chi ci va la prima volta, chi combina vino e città d\'arte, chi vuole il paesaggio da cartolina.',
          },
          {
            nome: 'Etna (Sicilia)',
            sintesi: 'Le contrade sui versanti del vulcano, con il Nerello Mascalese e il Carricante coltivati tra i 400 e i 1.000 metri su suoli lavici, spesso con viti a piede franco.',
            costo: 'medio, con alcune cantine di livello internazionale',
            durata: '3-4 giorni',
            pro: [
              'Le **viti a piede franco**: l\'Etna è una delle poche zone d\'Europa dove la fillossera non è mai arrivata, e ci sono ceppi prefillosserici di oltre cento anni',
              'Il concetto di contrada, che funziona come i cru borgognoni: suoli e quote diverse a poche centinaia di metri di distanza',
              'Un paesaggio che non si trova altrove: terrazzamenti di pietra lavica con il vulcano fumante sopra',
              'Si combina con Taormina, Catania e il mare',
            ],
            contro: [
              'Le cantine sono sparse su un territorio ampio e le strade del versante sono lente',
              'Zona in forte crescita: alcune realtà sono molto commerciali',
              'D\'estate fa molto caldo alle quote basse',
            ],
            perChi: 'Chi cerca vini di carattere e un territorio che non somiglia a nessun altro in Italia.',
          },
          {
            nome: 'Collio e Colli Orientali (Friuli)',
            sintesi: 'La zona dei grandi bianchi italiani, a cavallo del confine sloveno, con il Friulano, la Ribolla Gialla e la scuola dei macerati.',
            costo: 'medio, molto accessibile rispetto al livello',
            durata: '3-4 giorni',
            pro: [
              'I migliori bianchi d\'Italia, riconosciuti a livello internazionale',
              'La scuola degli **orange wine**, cioè bianchi macerati sulle bucce, è nata proprio qui e in Slovenia',
              'Paesaggio dolce di colline a cavallo di un confine che si attraversa senza accorgersene',
              'Prezzi molto più umani delle Langhe a parità di qualità',
            ],
            contro: ['Meno spettacolare come paesaggio', 'Lontano dalle grandi direttrici turistiche', 'Poca offerta ricettiva di fascia alta'],
            perChi: 'Chi beve bianchi, chi si interessa ai macerati, chi vuole qualità senza pagare la fama.',
          },
          {
            nome: 'Irpinia e Vulture (Campania e Basilicata)',
            sintesi: 'I grandi rossi del sud: Taurasi in Irpinia e Aglianico del Vulture sulle pendici di un vulcano spento, più Fiano e Greco di Tufo per i bianchi.',
            costo: 'il più basso di tutte le rotte',
            durata: '4-5 giorni',
            pro: [
              'L\'Aglianico è uno dei grandi vitigni italiani e costa una frazione del Nebbiolo o del Sangiovese di pari livello',
              'Zone quasi senza turismo: si visita in cantina parlando con il proprietario',
              'Il Vulture ha le cantine scavate nel tufo e un paesaggio vulcanico inaspettato',
              'Prezzi di alloggi e ristoranti bassissimi',
            ],
            contro: [
              'Poca organizzazione per l\'accoglienza: molte cantine ricevono ma non sono strutturate per il turismo',
              'Strade interne lente',
              'Servizi ricettivi limitati',
            ],
            perChi: 'Chi ha già fatto le rotte famose e vuole bere altrettanto bene spendendo un terzo.',
          },
          {
            nome: 'Valtellina (Lombardia)',
            sintesi: 'Il Nebbiolo di montagna, coltivato su terrazzamenti a strapiombo sostenuti da centinaia di chilometri di muretti a secco.',
            costo: 'medio-basso',
            durata: '2-3 giorni',
            pro: [
              'Il paesaggio terrazzato più impressionante d\'Italia: muretti a secco costruiti a mano su versanti ripidissimi',
              'Viticoltura eroica nel senso pieno: si lavora a mano perché nessun mezzo può salire',
              'Lo Sforzato, ottenuto da uve appassite, è un vino di montagna senza equivalenti',
              'Si combina con la montagna e con i pizzoccheri',
            ],
            contro: ['Zona piccola con poche cantine visitabili', 'Il fondovalle è trafficato e poco bello', 'Meno varietà rispetto alle altre rotte'],
            perChi: 'Chi ama la montagna e vuole vedere cosa significa viticoltura eroica.',
          },
        ],
        raccomandazione:
          'Come prima rotta: **Langhe**, perché il livello è il più alto e la cucina è all\'altezza, accettandone il prezzo e andandoci a settembre invece che durante la fiera del tartufo. Se il budget conta, **Irpinia e Vulture** danno quasi lo stesso per un terzo, con l\'unica rinuncia dell\'accoglienza organizzata. Per qualcosa che non somiglia a nessun\'altra parte d\'Italia, **Etna**, con le viti prefillosseriche. Per i bianchi, **Collio** senza dubbio. E qualunque rotta si scelga: **si prenota in cantina, non ci si presenta**, e si risolve prima il problema di chi guida.',
      },
    ],
    miaEsperienza:
      'Le rotte del vino sono il modo migliore per vedere l\'Italia agricola invece di quella monumentale, e a cambiare tutto è una cosa banale: prenotare. Una cantina è un\'azienda agricola con un lavoro da fare: chi arriva senza appuntamento di solito trova il cancello chiuso, mentre chi scrive una mail tre giorni prima viene ricevuto dal produttore in persona, che ha un\'ora per te. La seconda cosa che ho capito riguarda il rapporto tra fama e valore: le Langhe sono straordinarie e costano di conseguenza, ma sull\'Etna ci sono viti a piede franco di oltre cento anni (la fillossera su quel suolo lavico non è mai arrivata), e in Irpinia si beve un Aglianico che regge il confronto con rossi che costano quattro volte tanto, in cantine dove entri e c\'è il proprietario che sta travasando. Il problema pratico più serio, che nessuno affronta quando organizza, è chi guida: si visitano cantine in zone collinari, si assaggia, e la tentazione di far finta di niente è forte. Le soluzioni serie sono due: assaggiare e sputare, come fanno i professionisti, oppure pagare un autista.',
    luoghi: [
      {
        "nome": "Barolo e La Morra (Langhe)",
        "testo": "Le colline di Barolo, patrimonio UNESCO con Langhe-Roero e Monferrato, sono coperte di vigneti di nebbiolo. Il villaggio di Barolo ha il castello Falletti e La Morra il belvedere sul mare di colline. Qui il vino è il pretesto per un paesaggio agrario costruito in secoli.",
        "come": "In auto da Alba. Le cantine ricevono su prenotazione: scrivere con qualche giorno di anticipo. Molte strade sono strette e in salita.",
        "quando": "Settembre-ottobre in vendemmia, o aprile-giugno col verde. Ad agosto molte cantine chiudono.",
        "tempo": "1 giornata, 2 cantine",
        "consiglio": "Prenotare una sola cantina al mattino e una al pomeriggio. Dopo la terza non si assaggia più niente con attenzione."
      },
      {
        "nome": "Alba e il tartufo bianco",
        "testo": "Capitale delle Langhe, con la fiera internazionale del tartufo bianco in autunno, quando la città si riempie. Ha torri, portici e botteghe di cioccolato e nocciole.",
        "come": "Da Torino in treno con cambio, ma è più comoda l'auto. In città si va a piedi.",
        "quando": "Ottobre-novembre per il tartufo. Fuori fiera Alba è più tranquilla.",
        "tempo": "mezza giornata",
        "consiglio": "Alla fiera i prezzi del tartufo sono alti: chiedere il peso e il prezzo prima di ordinare, e preferire i ristoranti con tartufo di stagione."
      },
      {
        "nome": "Valpolicella (Veneto)",
        "testo": "Colline a nord-ovest di Verona dove si produce l'Amarone: le uve appassiscono per mesi nelle fruttaie prima di essere pressate. Ville venete e pievi romaniche punteggiano i paesi di Fumane e San Pietro in Cariano.",
        "come": "In auto o taxi da Verona. Le cantine ricevono su appuntamento.",
        "quando": "Settembre-ottobre per la vendemmia, gennaio-febbraio per la pressatura delle uve appassite.",
        "tempo": "1 giornata",
        "consiglio": "Se chi guida non beve, il taxi da Verona alle cantine è una soluzione semplice."
      },
      {
        "nome": "Colline del Prosecco tra Conegliano e Valdobbiadene",
        "testo": "Patrimonio UNESCO dal 2019: file di viti su colline ripide, con la strada del Prosecco superiore tra borghi e osterie. Il Cartizze è il vigneto più pregiato, una piccola zona di colline sopra Valdobbiadene.",
        "come": "In auto da Treviso o in treno fino a Conegliano. In bici si fa un giro tra i filari.",
        "quando": "Primavera e autunno. Non ad agosto: fa caldo e molte cantine sono chiuse.",
        "tempo": "1 giornata",
        "consiglio": "Le osterie di Valdobbiadene servono il Prosecco spumante con salumi: pranzare lì dopo la visita in cantina."
      },
      {
        "nome": "Chianti Classico (Toscana)",
        "testo": "Il territorio tra Firenze e Siena con Greve, Castellina, Radda e Gaiole. Il Gallo Nero è il marchio del consorzio. Pievi, castelli e fattorie si alternano a vigne e uliveti.",
        "come": "In auto da Firenze o Siena. La strada Chiantigiana attraversa i paesi.",
        "quando": "Aprile-giugno e settembre-ottobre. In estate ci sono tante gite in pullman.",
        "tempo": "1-2 giornate",
        "consiglio": "Dormire in agriturismo e visitare cantine piccole: spesso il produttore stesso accoglie."
      },
      {
        "nome": "Montalcino e Brunello",
        "testo": "Borgo medievale con la fortezza e le cantine del Brunello, sangiovese in purezza. L'Abbazia di Sant'Antimo, romanica, è a pochi chilometri tra gli ulivi.",
        "come": "In auto da Siena. Montalcino si gira a piedi, le cantine sono sparse intorno.",
        "quando": "Primavera e autunno. Prenotare le cantine con anticipo.",
        "tempo": "1 giornata",
        "consiglio": "Visitare l'Abbazia di Sant'Antimo la mattina presto, quando c'è silenzio e la luce entra di lato nelle navate."
      },
      {
        "nome": "Etna (Sicilia)",
        "testo": "Contrade sui versanti del vulcano, con viti di nerello mascalese a piede franco, rimaste fuori dalla fillossera. Alcune hanno più di cento anni. Si degusta in cantine di pietra lavica.",
        "come": "In auto da Catania, su strade tortuose e lente. Base a Linguaglossa, Castiglione di Sicilia o Randazzo.",
        "quando": "Settembre-ottobre per la vendemmia, ma l'Etna è bella anche in primavera.",
        "tempo": "1-2 giornate",
        "consiglio": "Chiedere di vedere le vigne vecchie: si capisce perché il suolo lavico ha salvato le viti dal parassita."
      },
      {
        "nome": "Collio e Colli Orientali (Friuli)",
        "testo": "Colline al confine con la Slovenia, famose per i vini bianchi: ribolla gialla, friulano, malvasia. Molte aziende fanno vini macerati sulle bucce, detti orange.",
        "come": "In auto da Gorizia o Cormons, che sono vicine. Le cantine sono piccole, a conduzione familiare.",
        "quando": "Primavera e autunno. In estate ha più sole.",
        "tempo": "1-2 giornate",
        "consiglio": "Attraversare il confine sloveno per un pranzo in una gostilna: a poca distanza cambia la cucina."
      },
      {
        "nome": "Irpinia e Vulture (Campania e Basilicata)",
        "testo": "Due grandi rossi del sud: il Taurasi in Irpinia e l'Aglianico del Vulture, entrambi da aglianico. In Irpinia anche i bianchi Fiano di Avellino e Greco di Tufo. Sono zone con pochi turisti e prezzi bassi.",
        "come": "Solo in auto da Avellino o da Potenza. Poche cantine hanno strutture per l'accoglienza.",
        "quando": "Settembre-ottobre. Estate molto calda.",
        "tempo": "2 giornate, una per zona",
        "consiglio": "Qui ci si ritrova spesso nella cantina dove il proprietario sta travasando: è quello il momento di fare domande."
      },
      {
        "nome": "Valtellina (Lombardia)",
        "testo": "Terrazzamenti vitati sostenuti da centinaia di chilometri di muretti a secco su pendii ripidi, per il nebbiolo di montagna, qui detto chiavennasca. Lo Sforzato è ottenuto da uve appassite.",
        "come": "Treno da Milano a Tirano o Sondrio. Gli spostamenti tra le cantine richiedono l'auto.",
        "quando": "Settembre-ottobre. Il fondovalle d'estate è caldo e trafficato.",
        "tempo": "1-2 giornate",
        "consiglio": "Camminare un tratto della Via dei Terrazzamenti, il sentiero tra i muretti, prima o dopo le degustazioni."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: cantina a Barolo, su prenotazione",
          "Pranzo: osteria con piatti piemontesi",
          "Pomeriggio: seconda cantina a La Morra e belvedere",
          "Sera: ad Alba, aperitivo e cena"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Barolo, La Morra e pranzo in osteria",
          "Giorno 2: Barbaresco e Alba",
          "Chi guida assaggia e sputa, oppure si prende un autista"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1-2: come sopra",
          "Giorno 3: Roero e Monferrato, oppure il lago d'Orta",
          "Ritorno a Torino con la Valle di Susa come alternativa"
        ]
      }
    ],
    zone: [
      {
        "nome": "Alba e dintorni",
        "perChi": "chi vuole cucina e tartufo",
        "testo": "Piccola città, base comoda per le Langhe, ma costosa in ottobre. Treni lenti, meglio l'auto."
      },
      {
        "nome": "Agriturismi tra le vigne",
        "perChi": "chi cerca tranquillità",
        "testo": "Si dorme nelle cantine stesse, con panorama. Serve auto e prenotazione, in alta stagione i prezzi salgono."
      },
      {
        "nome": "Verona o Siena",
        "perChi": "chi lega il vino a una città",
        "testo": "Si dorme in città e si va in cantina in auto: ottima per chi ama monumenti, ma niente colline la sera."
      }
    ],
    sapori: [
      {
        "nome": "Tajarin e carne cruda",
        "testo": "La pasta all'uovo sottile delle Langhe e la carne cruda battuta al coltello. Si mangiano in tutte le osterie di Alba."
      },
      {
        "nome": "Vitello tonnato",
        "testo": "Antipasto piemontese: vitello freddo con salsa tonnata e capperi."
      },
      {
        "nome": "Risotto all'Amarone",
        "testo": "Piatto della Valpolicella a base di risotto cotto nel vino Amarone."
      },
      {
        "nome": "Bistecca e pici",
        "testo": "Bistecca alla fiorentina nel Chianti; pici fatti a mano a Montalcino e Montepulciano."
      },
      {
        "nome": "Pasta alla Norma",
        "testo": "Pasta con pomodoro, melanzane fritte e ricotta salata, tipica di Catania e dell'Etna."
      },
      {
        "nome": "Pizzoccheri",
        "testo": "Tagliatelle di grano saraceno con verza, patate e formaggio: piatto della Valtellina."
      }
    ],
    attenzioni: [
      "Presentarsi in cantina senza appuntamento è l'errore numero uno: molte cantine ricevono solo su prenotazione, spesso con qualche giorno di anticipo.",
      "Chi guida non degusta: le sanzioni per guida in stato di ebbrezza sono severe e ci sono controlli nelle zone vinicole. Prevedere autista, taxi o navetta.",
      "Non più di due o tre cantine al giorno, altrimenti si perde il gusto e la sicurezza.",
      "Ad agosto molte cantine chiudono o riducono le visite, mentre in vendemmia si riempiono.",
      "Nelle zone famose (Barolo, Montalcino) i prezzi di alloggio e degustazione sono alti: considerare Irpinia, Vulture, Valtellina ed Etna.",
      "Comprare in cantina costa meno dell'enoteca e si parla con chi ha fatto il vino."
    ],
    esperienzeSlugs: ['degustazione-cantina'],
    tripSlugs: ['rotte-dei-vini-itinerario'],
    imageAlt: 'Le colline coltivate a vite intorno a Castellina in Chianti con un casale tra i cipressi, Toscana',
    immagine: '/images/italia/rotte-dei-vini.jpg',
  },
  {
    slug: 'torino',
    paeseSlug: 'italia',
    ordine: 13,
    nome: 'Torino',
    tipologia: ['città d\'arte', 'musei', 'gastronomia'],
    giorniConsigliati: '2-3 giorni, più le Langhe o la Valle di Susa',
    visitataPersonalmente: true,
    introduzione:
      'È stata la prima capitale d\'Italia, costruita su una griglia romana e poi barocca, con diciotto chilometri di portici che permettono di attraversarla senza mai prendere la pioggia. Ha il museo egizio più importante al mondo dopo il Cairo, la Mole che è il simbolo più improbabile mai adottato da una città, e una cultura del caffè e del vermouth che qui è nata.',
    percheAndarci:
      'È la grande città italiana più sottovalutata. Non ha il turismo di massa di Firenze o Venezia, ha musei di livello internazionale, si gira benissimo a piedi e si mangia e si beve come in poche altre, con le Alpi in fondo alle strade nelle giornate limpide.',
    cosaVedere: [
      'Il Museo Egizio, secondo al mondo solo a quello del Cairo per importanza della collezione',
      'La Mole Antonelliana con il Museo Nazionale del Cinema e l\'ascensore panoramico nel vuoto centrale',
      'Il Palazzo Reale, i Musei Reali e l\'Armeria, con la Cappella della Sindone di Guarini restaurata',
      'La Basilica di Superga sulla collina, con le tombe dei Savoia e il memoriale del Grande Torino',
      'La Reggia di Venaria, patrimonio UNESCO, con i giardini',
      'Il Quadrilatero Romano e Porta Palazzo, il mercato all\'aperto più grande d\'Europa',
      'I caffè storici: qui sono nati il bicerin, il vermouth e il rito dell\'aperitivo',
    ],
    cosaFare: [
      'Museo Egizio all\'apertura, con almeno tre ore a disposizione',
      'Salire alla Mole con l\'ascensore che attraversa il vuoto della cupola, un\'esperienza a sé',
      'L\'aperitivo in un caffè storico, a Torino un rito con regole precise da due secoli',
      'Salire a Superga con la tranvia a dentiera storica, e fare il giro della collina',
      'Il mercato di Porta Palazzo al mattino, il più grande mercato all\'aperto d\'Europa',
    ],
    doveDormire:
      'Il centro dentro il quadrilatero barocco è comodissimo e si gira tutto a piedi. San Salvario, dietro Porta Nuova, ha i prezzi migliori e la vita serale. Il Quadrilatero Romano per l\'atmosfera. La città è ben servita dalla metropolitana e dai tram: la posizione conta meno che a Roma o Napoli.',
    doveMangiare:
      'La cucina piemontese è tra le più ricche d\'Italia: agnolotti del plin, vitello tonnato, carne cruda battuta al coltello, bagna càuda (d\'inverno, e si mangia in gruppo), finanziera per i coraggiosi. Poi c\'è la parte dolce e da bere, che a Torino è identità: il **bicerin** (caffè, cioccolata e crema di latte, servito a strati nel bicchiere), il gianduiotto, i grissini, nati qui, e il **vermouth**, inventato a Torino nel Settecento. L\'aperitivo con il buffet qui si fa da due secoli.',
    comeArrivare:
      'Alta velocità: Torino Porta Nuova e Porta Susa sono in città, con Milano a un\'ora e Roma in quattro e mezza. Aeroporto di Caselle, collegato in treno e bus.',
    comeSpostarsi:
      'A piedi sotto i portici, che coprono il centro per chilometri. Metropolitana automatica (una linea) e una rete di tram tra le più estese d\'Italia. **Attenzione alla ZTL centrale**, attiva nei giorni feriali con telecamere.',
    periodoMigliore:
      'aprile-giugno e settembre-novembre. L\'inverno è freddo e nebbioso ma la città funziona benissimo e i musei sono vuoti; l\'estate è afosa e ad agosto Torino si svuota. A novembre c\'è il Salone del Gusto negli anni pari e la fiera del tartufo ad Alba a un\'ora di distanza.',
    costi:
      'Museo Egizio con biglietto contenuto rispetto al livello; la **Torino+Piemonte Card** copre decine di musei e conviene da due giorni in su. Per alloggi e ristoranti la città costa parecchio meno di Milano.',
    erroriDaEvitare: [
      'Dedicare un\'ora al Museo Egizio: ce ne vogliono almeno tre, ed è la collezione egizia più importante al mondo dopo quella del Cairo',
      'Saltare la collina: Superga e il giro panoramico sono metà del carattere della città e quasi nessun visitatore ci sale',
      'Entrare in auto in centro senza conoscere la ZTL',
      'Considerarla solo una tappa di passaggio verso le Langhe: Torino regge due giorni pieni',
      'Aspettarsi una città «da cartolina»: Torino è rigorosa, geometrica e un po\' severa, e piace per questo',
    ],
    miaEsperienza:
      'Torino è la grande città italiana che arriva come un regalo: nessuno ti dice di andarci, poi ci vai e regge due giorni pieni senza sforzo. Il pezzo forte è il Museo Egizio, ed è enorme: la seconda collezione egizia al mondo dopo il Cairo, con statuari interi, papiri e la tomba di Kha e Merit ricostruita con tutto il corredo trovato intatto. Ci vogliono tre ore, e non è un modo di dire. La Mole invece è la cosa più assurda: nata come sinagoga, mai usata come tale, diventata simbolo della città, e oggi museo del cinema con un ascensore a cabina trasparente che sale nel vuoto della cupola, sopra la testa dei visitatori sdraiati sui divani a guardare filmati. Poi c\'è la parte che quasi nessuno fa, la collina: si prende la tranvia a dentiera e si sale a Superga, dove ci sono le tombe dei Savoia e, sul retro, il muro contro cui si schiantò l\'aereo del Grande Torino nel 1949. E la sera l\'aperitivo, lontano dalla moda milanese: i caffè storici con i banconi di marmo dove si beve un vermouth fatto a cento metri da lì.',
    luoghi: [
      {
        "nome": "Museo Egizio",
        "testo": "Una delle collezioni egizie più importanti fuori dal Cairo, nata nel 1824 dal nucleo raccolto dal console Drovetti. Il pezzo da non perdere è la tomba di Kha e Merit, trovata intatta nel 1906 con tutto il corredo. Poi il Tempio di Ellesiya, la Galleria dei Re e il Papiro delle Miniere d'Oro.",
        "come": "In pieno centro, a piedi da Piazza Castello o Piazza San Carlo. Il biglietto si compra obbligatoriamente online, a fascia oraria. Audioguida o app per capire i pezzi.",
        "quando": "Aperto tutti i giorni: lunedì 9-14, martedì-venerdì e domenica 9-18:30, sabato 9-20; in alcune giornate ci sono aperture serali straordinarie, sul sito. Mattina presto o sabato sera per evitare la folla. Le Sale Storiche sono chiuse temporaneamente dal 12 dicembre 2025: vedere l'avviso sul sito.",
        "tempo": "3 ore, meglio 4",
        "costo": "18 euro intero (2026)",
        "url": "https://www.museoegizio.it/",
        "consiglio": "Prenotare l'orario online, soprattutto nei weekend e nei ponti. Tenere per la fine la Galleria dei Re, quando le gambe sono stanche."
      },
      {
        "nome": "Mole Antonelliana e Museo Nazionale del Cinema",
        "testo": "Nata nel 1863 come sinagoga e mai usata come tale, è il simbolo della città. Dentro c'è il museo del cinema, disposto a spirale attorno all'aula centrale, con le poltrone rosse reclinabili al centro. L'ascensore panoramico di vetro sale nel vuoto fino al tempietto.",
        "come": "In via Montebello, a piedi da Piazza Castello. Biglietto del museo, dell'ascensore o cumulativo, con slot orario.",
        "quando": "Nelle giornate limpide l'ascensore si esaurisce: prenotare. Controllare sul sito eventuali lavori o aperture ridotte.",
        "tempo": "2-3 ore con l'ascensore",
        "costo": "museo 18 euro, ascensore 9 euro, cumulativo 23 euro (sito ufficiale, 2026); fino all'8 dicembre 2026 il solo museo è ridotto per tutti a 16 euro per l'allestimento di una nuova mostra",
        "url": "https://www.museocinema.it/",
        "consiglio": "Il cumulativo conviene se si fa tutto. In una giornata limpida si vede il Monviso dietro l'arco alpino."
      },
      {
        "nome": "Musei Reali e Cappella della Sindone",
        "testo": "Palazzo Reale, Armeria Reale, Galleria Sabauda e la Cappella della Sindone del Guarini, con la cupola a esagoni sovrapposti, riaperta dopo il restauro seguito all'incendio del 1997. La Sindone non è esposta: si vede la cappella, non il telo.",
        "come": "In Piazza Castello, ingresso dal cortile. Biglietto unico per tutto il complesso. Si può girare da soli, le sale hanno pannelli chiari.",
        "quando": "Aperti dal giovedì al martedì, 9-19, chiusi il mercoledì. La prima domenica del mese l'ingresso è gratuito senza prenotazione: i biglietti si ritirano solo in biglietteria il giorno stesso.",
        "tempo": "3 ore",
        "costo": "15 euro intero (sito ufficiale, 2026)",
        "url": "https://museireali.cultura.gov.it/",
        "consiglio": "2 ore bastano per Palazzo Reale, Armeria e cappella: la Galleria Sabauda è per chi ama i quadri antichi."
      },
      {
        "nome": "Basilica di Superga e tranvia a dentiera",
        "testo": "Basilica di Juvarra sulla collina a est del Po, con le tombe dei Savoia nella cripta. Sul retro c'è il memoriale del Grande Torino, nel punto dove si schiantò l'aereo nel 1949. Dalla terrazza si vedono la città e le Alpi.",
        "come": "Tranvia storica a dentiera dalla stazione Sassi, raggiungibile con i mezzi GTT dal centro, con partenze ogni ora. Il mercoledì la tranvia è ferma.",
        "quando": "Partenze da Sassi ogni ora dalle 10 alle 18, ultima discesa da Superga alle 18:30; orari aggiornati sul sito GTT. Giornata limpida, meglio il pomeriggio per la luce sulle Alpi.",
        "tempo": "2-3 ore compresa la salita",
        "url": "https://www.gtt.to.it/cms/turismo/sassisup",
        "costo": "tranvia: 4 euro corsa singola e 6 andata e ritorno nei feriali, 6 e 9 euro il sabato e nei festivi (GTT, 2026)",
        "consiglio": "Un giro a piedi sul crinale dietro la basilica costa niente e dà la vista migliore. Il biglietto di andata e ritorno conviene rispetto a due corse singole."
      },
      {
        "nome": "Reggia di Venaria",
        "testo": "Residenza sabauda di caccia, patrimonio UNESCO, con la Galleria Grande di Juvarra, la Cappella di Sant'Uberto e i giardini. Il complesso è enorme e ospita anche mostre.",
        "come": "A una decina di chilometri da Torino, raggiungibile in treno, bus o auto: collegamenti sul sito ufficiale. Si consiglia di prenotare l'ingresso a orario.",
        "quando": "Aperta dal martedì alla domenica, chiusa il lunedì; gli orari di Reggia, mostre e giardini cambiano durante l'anno. Giardini e parco restano visitabili anche con tempo incerto, ma le sale vanno viste con una giornata libera.",
        "tempo": "mezza giornata, una giornata con i giardini",
        "url": "https://www.lavenaria.it/",
        "consiglio": "Serve un mezzo mattino pieno: meglio dedicarle un giorno in più, non incastrarla tra Egizio e Mole."
      },
      {
        "nome": "Quadrilatero Romano e Porta Palazzo",
        "testo": "La zona più antica della città, con la maglia ortogonale romana e la Porta Palatina del I secolo, con le torri in piedi. A due passi c'è Porta Palazzo, uno dei più grandi mercati all'aperto d'Europa.",
        "come": "A piedi da Piazza Castello. Il mercato è in Piazza della Repubblica.",
        "quando": "Mercato al mattino, dal lunedì al sabato. La sera il Quadrilatero è il quartiere dell'aperitivo.",
        "tempo": "2 ore",
        "costo": "ingresso libero",
        "consiglio": "Al mercato si compra anche la frutta del giorno e le spezie dei banchi nordafricani. Occhio alle tasche nella folla."
      },
      {
        "nome": "Caffè storici e bicerin",
        "testo": "Torino ha inventato il bicerin: caffè, cioccolata e crema di latte in strati, da non mescolare. Si beve in bicchiere di vetro al Caffè Al Bicerin, aperto dal 1763, o in uno dei caffè di Piazza San Carlo e della Galleria Subalpina. Qui nasce anche il rito dell'aperitivo con vermouth.",
        "come": "Tutti in centro, a piedi. Il Caffè Al Bicerin è in Piazza della Consolata, piccolo e con pochi tavoli.",
        "quando": "Bicerin al mattino o nel pomeriggio, vermouth dalle 18. Al Bicerin spesso c'è coda nei weekend.",
        "tempo": "1 ora a tappa",
        "consiglio": "Il bicerin non si mescola: si beve a strati, e ogni sorso cambia."
      },
      {
        "nome": "Monte dei Cappuccini e Parco del Valentino",
        "testo": "Sul colle sopra il Po, il Monte dei Cappuccini dà la vista classica con la Mole e le Alpi dietro. Più sotto il Parco del Valentino segue il fiume e ospita il Borgo Medievale, ricostruzione ottocentesca fatta con rigore filologico.",
        "come": "A piedi da Piazza Vittorio Veneto, con una breve salita. Il Valentino è a sud, lungo il Po.",
        "quando": "Giornata limpida, meglio il tardo pomeriggio. Il parco è aperto sempre.",
        "tempo": "2 ore",
        "consiglio": "Salire con la luce del tardo pomeriggio, poi scendere a piedi verso il fiume."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Museo Egizio, con prenotazione, almeno 3 ore",
          "Pranzo: agnolotti del plin in una trattoria del centro",
          "Pomeriggio: Piazza Castello, Musei Reali e Cappella della Sindone",
          "Sera: bicerin o vermouth in Piazza San Carlo, aperitivo nel Quadrilatero"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Museo Egizio, Piazza San Carlo, Musei Reali, Quadrilatero Romano e aperitivo",
          "Giorno 2 mattina: Mole Antonelliana, museo e ascensore",
          "Giorno 2 pomeriggio: Monte dei Cappuccini e Valentino, oppure tranvia per Superga (non il mercoledì)",
          "Sera: cena piemontese, tajarin o vitello tonnato"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1 e 2: come sopra",
          "Giorno 3: Reggia di Venaria con giardini (non il lunedì)",
          "Pomeriggio: Porta Palazzo se è ancora mattina presto, altrimenti Superga con l'ultima luce",
          "Sera: bagna cauda in inverno, altrimenti una cena in San Salvario"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro storico, tra Piazza Castello e Piazza San Carlo",
        "perChi": "chi vuole girare tutto a piedi",
        "testo": "Si cammina sotto i portici, musei e caffè sono a pochi minuti. Gli alberghi costano di più, la sera è tranquilla. Dalla stazione di Porta Nuova si arriva a piedi."
      },
      {
        "nome": "San Salvario",
        "perChi": "chi cerca prezzi più bassi e vita serale",
        "testo": "Quartiere dietro Porta Nuova, con locali e ristoranti. Più rumoroso nei weekend e a fine serata, raggiungibile a piedi dal centro."
      },
      {
        "nome": "Quadrilatero Romano",
        "perChi": "chi cerca atmosfera",
        "testo": "Vicoli antichi, aperitivi e locali. Di sera molto vivace e rumoroso, vicino a Porta Palazzo."
      }
    ],
    sapori: [
      {
        "nome": "Agnolotti del plin",
        "testo": "Piccola pasta ripiena di carne, pizzicata a mano, servita anche al tovagliolo senza condimento. Si trova nelle trattorie piemontesi del centro."
      },
      {
        "nome": "Vitello tonnato e carne cruda",
        "testo": "Antipasti tipici: il vitello tonnato con salsa di tonno e capperi, la carne cruda battuta al coltello con olio e limone."
      },
      {
        "nome": "Bicerin",
        "testo": "Caffè, cioccolata e crema di latte in tre strati. Al Caffè Al Bicerin e nei caffè storici."
      },
      {
        "nome": "Gianduiotto",
        "testo": "Cioccolatino a base di nocciole piemontesi, nato nell'Ottocento quando il cacao scarseggiava. In tutte le cioccolaterie del centro."
      },
      {
        "nome": "Vermouth",
        "testo": "Inventato a Torino nel Settecento. Si beve nei caffè storici e nei bar del Quadrilatero con l'aperitivo."
      },
      {
        "nome": "Bagna càuda",
        "testo": "Salsa calda di aglio, acciughe e olio in cui si intingono verdure crude e cotte. Piatto invernale, si mangia in gruppo."
      }
    ],
    attenzioni: [
      "La ZTL centrale ha telecamere e ha orari nei giorni feriali: non entrare in auto senza verificare gli orari sul sito del Comune. Meglio parcheggiare fuori o in un parcheggio sotterraneo.",
      "Il Museo Egizio e la Mole si visitano con biglietto online a fascia oraria: nei weekend e nei ponti i posti finiscono. Prenotare qualche giorno prima.",
      "I Musei Reali sono chiusi il mercoledì e la tranvia di Superga è ferma lo stesso giorno. La Reggia di Venaria chiude il lunedì.",
      "La Sindone non è esposta, tranne nelle ostensioni straordinarie: chi va a Torino per vederla resta deluso. Si visita la cappella del Guarini.",
      "A Porta Palazzo e sui mezzi pubblici affollati attenzione ai borseggiatori.",
      "A Torino si paga l'imposta di soggiorno: l'importo si controlla sul sito del Comune o dell'albergo."
    ],
    esperienzeSlugs: ['museo-egizio'],
    tripSlugs: ['torino-2-giorni'],
    imageAlt: 'I Giardini Reali e i tetti di Torino visti dalla cima della Mole Antonelliana',
    immagine: '/images/italia/torino.jpg',
  },
  {
    slug: 'costiera-amalfitana',
    paeseSlug: 'italia',
    ordine: 14,
    nome: 'Costiera Amalfitana',
    tipologia: ['mare', 'paesaggi', 'trekking'],
    giorniConsigliati: '4-5 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Cinquanta chilometri di costa a picco tra Sorrento e Salerno, patrimonio UNESCO come **paesaggio culturale**, cioè per il modo in cui l\'uomo l\'ha terrazzata a limoni e vite su pendenze impossibili. Tredici comuni aggrappati alla roccia, collegati da una strada statale che è insieme la più bella e la più maledetta d\'Italia.',
    percheAndarci:
      'Un rapporto così stretto tra montagna e mare non c\'è altrove nel Mediterraneo: si passa da seicento metri di quota al mare in due chilometri in linea d\'aria. E sopra la strada, sui sentieri, c\'è una costiera tutta diversa da quella che vedono i pullman.',
    cosaVedere: [
      'Positano, verticale e fotogenica, che si scende a piedi e si risale con le gambe',
      'Amalfi con il Duomo e il Chiostro del Paradiso, e Ravello con Villa Cimbrone e Villa Rufolo',
      'Il **Sentiero degli Dei**, da Bomerano a Nocelle: la costiera vista dall\'alto',
      'La Valle delle Ferriere sopra Amalfi, con le felci giganti sopravvissute dall\'era glaciale',
      'Il Fiordo di Furore e la Grotta dello Smeraldo',
      'Atrani, il comune più piccolo d\'Italia per superficie, a duecento metri da Amalfi e senza nessuno',
      'Cetara, paese di pescatori con la colatura di alici, e Vietri con le ceramiche',
    ],
    cosaFare: [
      'Il Sentiero degli Dei, la cosa migliore della Costiera (vedi la scheda esperienza dedicata)',
      'Muoversi in traghetto invece che in auto: d\'estate è l\'unica scelta sensata',
      'La Scala Fenicia o i sentieri dei Limoni tra Maiori e Minori, che quasi nessuno fa',
      'Una serata a Ravello, che sta a quattrocento metri sopra la costa ed è un altro mondo rispetto al fondo',
    ],
    doveDormire:
      '**Dormire a Napoli o a Salerno e fare gite in giornata costa una frazione** rispetto ad alloggiare a Positano o ad Amalfi in stagione. Chi vuole stare sulla costa: Praiano e Minori hanno prezzi molto più umani di Positano e Amalfi, con la stessa costa. Ravello è un\'altra cosa: più alta, più silenziosa, più cara.',
    doveMangiare:
      'Pesce azzurro, non pesce nobile: qui la tradizione è quella dei pescatori. La **colatura di alici di Cetara**, erede del garum romano, si usa su spaghetti con aglio, olio e prezzemolo e non va cotta. Poi gli scialatielli ai frutti di mare, la mozzarella nella mortella e i limoni: lo sfusato amalfitano è enorme e si mangia anche in insalata. Il limoncello è ovunque e quasi sempre industriale: quello buono si compra dai produttori. **Sul lungomare di Positano e Amalfi si paga la posizione**, non il piatto.',
    comeArrivare:
      'Da Napoli: Circumvesuviana fino a Sorrento e poi bus o traghetto; oppure traghetto diretto in stagione. Da Salerno: bus o traghetto lungo tutta la costa. **L\'aereo arriva a Napoli Capodichino.**',
    comeSpostarsi:
      '**Il traghetto batte l\'auto e il bus in ogni stagione.** La statale amalfitana è una strada a due corsie strette con centinaia di tornanti e nessun parcheggio: d\'estate è un ingorgo continuo, con code di ore. I bus SITA sono economici e panoramici ma pieni. **In alta stagione su alcuni tratti ci sono le targhe alterne**: conviene informarsi prima. Lo scooter è l\'alternativa per chi se la sente.',
    periodoMigliore:
      '**maggio-giugno e settembre-inizio ottobre.** Luglio e agosto sono saturi, con la statale bloccata e i prezzi al massimo. Da novembre a marzo la costa si svuota: bellissima e silenziosa, con molte strutture chiuse e il mare fuori gioco. Aprile e ottobre sono ottimi per i sentieri.',
    costi:
      'Tra le zone più care d\'Italia in alta stagione. Il Sentiero degli Dei è gratuito; Villa Cimbrone e Villa Rufolo a Ravello hanno biglietti contenuti; i traghetti costano pochi euro a tratta e sono il miglior investimento del viaggio.',
    erroriDaEvitare: [
      '**Venire in auto a luglio o agosto.** È l\'errore che rovina più vacanze sulla Costiera: la statale è bloccata, i parcheggi costano cifre assurde dove esistono, e si passa la giornata in coda',
      'Dormire a Positano o Amalfi senza sapere che a Praiano o Minori si spende metà con la stessa costa',
      'Fare solo il fondo: Ravello sta a quattrocento metri e i sentieri sopra la strada sono un\'altra costiera',
      'Fermarsi a Positano e Amalfi saltando Atrani, che è a duecento metri da Amalfi, è il comune più piccolo d\'Italia e non ha nessuno',
      'Fare il Sentiero degli Dei nel senso sbagliato: da Bomerano a Nocelle si scende, al contrario si sale tutto',
      'Cuocere la colatura di alici, che va aggiunta a crudo',
    ],
    miaEsperienza:
      'La Costiera ha un problema che si chiama statale 163: una strada a due corsie strettissime, scavata nella roccia, con i bus che si incrociano a specchietti rientrati, e d\'estate una coda continua da Sorrento a Salerno. Chi ci arriva in auto ad agosto passa la vacanza fermo, e basta questo a rovinare uno dei posti più belli del Mediterraneo. La soluzione è banale e quasi nessuno la usa: **il traghetto**. Costa pochi euro, collega tutti i paesi e si arriva dal mare, che è anche il modo giusto di guardare questa costa: i paesi sono stati costruiti per essere visti da lì. La seconda cosa che cambia il viaggio è salire. Sopra la strada c\'è una costiera di sentieri, terrazzamenti e mulattiere che collegavano i paesi prima che la statale esistesse: il **Sentiero degli Dei** corre a cinquecento metri sopra il mare con Positano sotto e Capri all\'orizzonte, dura tre ore, è gratis e ci va una frazione minima delle persone che si accalcano sul lungomare. Da lassù si capisce anche perché sia patrimonio UNESCO: quei terrazzamenti a limoni su pendenze del quaranta per cento li ha costruiti qualcuno, a mano, nei secoli.',
    luoghi: [
      {
        "nome": "Positano",
        "testo": "Il paese più fotografato della costa: case color pastello a gradoni su un vallone che scende fino alla Spiaggia Grande. Si visita scendendo a piedi dalla strada, tra scale e botteghe, e si risale con le gambe.",
        "come": "Da Amalfi in traghetto o con bus SITA lungo la statale. In auto è sconsigliato: i parcheggi sono pochi e cari.",
        "quando": "Mattina presto o dopo le 17, quando i gruppi in giornata se ne vanno. Luglio e agosto sono saturi.",
        "tempo": "3-4 ore",
        "consiglio": "Per il bagno, la spiaggia di Fornillo, a ovest della Spiaggia Grande, è meno affollata e si raggiunge a piedi lungo il sentiero sul mare."
      },
      {
        "nome": "Amalfi: Duomo e Chiostro del Paradiso",
        "testo": "Il Duomo di Sant'Andrea sta in cima a una scalinata sulla piazza del porto, con la facciata a mosaici e il portale di bronzo bizantino. Accanto c'è il Chiostro del Paradiso, del Duecento, con archi intrecciati di gusto arabo. Amalfi è stata una repubblica marinara prima di Pisa e Genova.",
        "come": "Dal molo dei traghetti si arriva a piedi in pochi minuti. Il biglietto copre chiostro, basilica del Crocifisso e museo; il duomo si visita dalla scalinata.",
        "quando": "Orari e giorni variano con le funzioni religiose. Meglio la mattina, prima dei pullman.",
        "tempo": "1 ora",
        "consiglio": "Salire la scalinata e girarsi: la piazza vista dall'alto è la foto migliore della città."
      },
      {
        "nome": "Atrani",
        "testo": "Un paese di meno di mille abitanti, attaccato ad Amalfi, stretto in una gola con la piazza che si apre sul mare sotto un arco. Case bianche, vicoli a scale, la chiesa della Maddalena. Quasi nessuno ci si ferma.",
        "come": "A piedi da Amalfi lungo la statale e poi per le scale, oppure dal sottopassaggio vicino al molo.",
        "quando": "Tutto il giorno. La sera, quando i visitatori in giornata sono ripartiti, è molto tranquillo.",
        "tempo": "1 ora",
        "costo": "gratuito",
        "consiglio": "Un aperitivo in piazza, con i bambini del paese che giocano a pallone sotto l'arco."
      },
      {
        "nome": "Ravello: Villa Rufolo e Villa Cimbrone",
        "testo": "Ravello sta in alto sopra la costa e ha un altro ritmo: silenzio, giardini e belvedere. Villa Rufolo, del Duecento, ha la torre moresca e il giardino sul vuoto dove si tiene il festival musicale. Villa Cimbrone ha il Belvedere dell'Infinito, con le statue affacciate sul mare.",
        "come": "Da Amalfi con bus SITA, o a piedi per la Scala Fenicia (sentiero con molti gradini). Le due ville sono collegate a piedi passando per il centro.",
        "quando": "Villa Rufolo è aperta tutti i giorni, con orario esteso in stagione. Le ore dopo le 17 hanno la luce migliore sul Belvedere. Il festival cambia gli orari di chiusura.",
        "tempo": "mezza giornata",
        "url": "https://www.villarufolo.com/",
        "consiglio": "Verificare i prezzi sui siti ufficiali delle due ville prima di andare e vederle in ordine, Rufolo al mattino e Cimbrone al tramonto."
      },
      {
        "nome": "Sentiero degli Dei",
        "testo": "Uno dei percorsi panoramici più belli della costa, da Bomerano (Agerola) a Nocelle, a mezza quota, con Positano e Capri all'orizzonte. Sono circa 8 km, tra i 630 e i 30 metri di quota, e si fanno in tre-quattro ore, quasi tutto in discesa.",
        "come": "Bus SITA da Amalfi a Bomerano, poi si cammina fino a Nocelle. Da Nocelle si scende a Positano per una lunga scalinata, oppure ci si ferma e si prende il bus.",
        "quando": "Primavera e autunno. D'estate partire all'alba: il sentiero ha poca ombra.",
        "tempo": "3-4 ore più la discesa a Positano",
        "consiglio": "Farlo da Bomerano a Nocelle, non al contrario: si scende tutto e si arriva con il mare davanti. Scarpe da trekking e acqua."
      },
      {
        "nome": "Valle delle Ferriere",
        "testo": "Una gola umida sopra Amalfi, dove sopravvivono felci rare, relitti di epoche più fredde. Il sentiero costeggia il torrente Canneto, tra i resti delle antiche ferriere e delle cartiere. È una riserva naturale.",
        "come": "Da Amalfi si sale a piedi per un sentiero, oppure si parte da Pontone (Scala). Il percorso ad anello richiede scarpe da trekking.",
        "quando": "Tutto l'anno; d'estate è fresco e ombreggiato. Dopo piogge forti può essere scivoloso o con tratti chiusi.",
        "tempo": "3 ore",
        "consiglio": "Un buon giro per le giornate di caldo o di mare mosso, quando la costa non è piacevole."
      },
      {
        "nome": "Furore e il Fiordo",
        "testo": "Furore è un comune sparso su un vallone profondo: il Fiordo è una spaccatura nella roccia con una piccola spiaggia di ciottoli, sotto un ponte della statale. Il paese è noto per i murales e per i vigneti terrazzati sulla roccia.",
        "come": "Bus SITA da Amalfi o Positano fino a Furore, poi una scala scende al Fiordo. In barca da Amalfi con i taxi-boat.",
        "quando": "Il mare calmo è necessario per scendere in sicurezza; evitare i giorni di vento. Tarda mattinata per la luce sul vallone.",
        "tempo": "1-2 ore",
        "consiglio": "Si arriva dal mare nei periodi di punta, per evitare la statale ferma e la scalinata nel pieno del caldo."
      },
      {
        "nome": "Cetara",
        "testo": "Un villaggio di pescatori di tonno e alici, verso Salerno, lontano dalla folla. Qui si fa la colatura di alici, erede del garum romano. Il porticciolo e la spiaggia sono quelli di un paese vero.",
        "come": "Bus SITA da Amalfi o da Salerno; traghetto in stagione. Si gira a piedi in un'ora.",
        "quando": "Tutto l'anno. Il pranzo è l'ora giusta, con i locali pieni di gente del posto.",
        "tempo": "2 ore",
        "consiglio": "Comprare la colatura direttamente da un produttore, in bottiglietta sigillata, e portarla a casa."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Arrivo ad Amalfi in traghetto da Salerno o Positano, prima dei pullman",
          "Duomo e Chiostro del Paradiso, poi passeggiata ad Atrani",
          "Pranzo ad Amalfi lontano dal lungomare",
          "Bus SITA a Ravello nel pomeriggio, Villa Rufolo e Villa Cimbrone",
          "Traghetto di ritorno prima di sera"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Sentiero degli Dei da Bomerano a Nocelle, discesa a Positano, bagno e cena",
          "Giorno 2: traghetto Positano-Amalfi, Duomo e Atrani",
          "Ravello nel pomeriggio, rientro in bus o a piedi dalla Scala Fenicia",
          "Cena a Cetara se si dorme dalle parti di Salerno"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Positano e Praiano, bagno in una caletta",
          "Giorno 2: Sentiero degli Dei e Furore",
          "Giorno 3: Amalfi, Valle delle Ferriere al mattino, Ravello al tramonto",
          "Facoltativo: mezza giornata a Cetara e Vietri sul Mare per le ceramiche"
        ]
      }
    ],
    zone: [
      {
        "nome": "Praiano",
        "perChi": "chi vuole la costa a metà prezzo",
        "testo": "Più tranquilla e più economica di Positano, con calette raggiungibili a piedi. Il paese è lungo e in salita: serve scarpa buona. Ai traghetti si arriva a piedi o col bus."
      },
      {
        "nome": "Positano e Amalfi",
        "perChi": "chi vuole stare al centro e può spendere",
        "testo": "Comodi per tutto, ma cari e affollatissimi in alta stagione. Alloggiare qui vuol dire anche rumore e scale con i bagagli."
      },
      {
        "nome": "Ravello",
        "perChi": "chi cerca silenzio e belvedere",
        "testo": "Alta, quieta, la sera si svuota. Costa di più e per il mare bisogna scendere in bus. Ottima per uno-due giorni di calma."
      },
      {
        "nome": "Salerno",
        "perChi": "budget stretto e chi arriva in treno",
        "testo": "Alloggi molto più economici e stazione dell'alta velocità. Il traghetto per la costa parte da qui; si perde però il fascino del dormire sul mare."
      }
    ],
    sapori: [
      {
        "nome": "Colatura di alici di Cetara",
        "testo": "Liquido ambrato ottenuto dalla salagione delle alici, erede del garum romano. Si usa su spaghetti con aglio, olio e prezzemolo, crudo, a fine cottura."
      },
      {
        "nome": "Scialatielli ai frutti di mare",
        "testo": "Pasta fresca lunga e larga, spesso con vongole, cozze e crostacei. Si trovano in tutta la costa, migliori nei locali un po' lontani dal porto."
      },
      {
        "nome": "Delizia al limone",
        "testo": "Dolce di pan di spagna bagnato e crema di limone, nato in penisola sorrentina e diffuso in tutta la costiera. Il limone locale, lo sfusato amalfitano, è grande e poco acido."
      },
      {
        "nome": "Mozzarella nella mortella",
        "testo": "Mozzarella avvolta in foglie di mirto, tipica del vicino Cilento e che si trova anche in costiera. Si mangia fresca, a temperatura ambiente."
      },
      {
        "nome": "Limoncello",
        "testo": "Molto diffuso e spesso industriale: quello buono si compra dai produttori, che spesso fanno assaggiare."
      }
    ],
    attenzioni: [
      "La statale 163 in alta stagione può bloccarsi per ore, e in alcuni periodi ci sono targhe alterne: meglio il traghetto. Prima di partire informarsi sulle ordinanze del momento.",
      "I traghetti si fermano con il mare mosso: tenere un piano B (bus SITA) e non lasciare l'ultima corsa al caso.",
      "Parcheggi molto cari e posti in garage a prezzi da hotel: conviene lasciare l'auto a Salerno o in un'area fuori costa.",
      "I taxi-boat e i taxi non hanno sempre tariffe esposte: concordare il prezzo prima di salire.",
      "Sentieri come quello degli Dei richiedono scarpe adatte e acqua; la discesa a Positano per la scalinata è lunga e ripida.",
      "In molti comuni si paga la tassa di soggiorno, da pagare in contanti o in struttura."
    ],
    esperienzeSlugs: ['sentiero-degli-dei'],
    tripSlugs: ['costiera-e-isole'],
    imageAlt: 'Le case color pastello di Positano arrampicate sulla collina sopra la spiaggia con le barche tirate a secco, Costiera Amalfitana',
    immagine: '/images/italia/costiera-amalfitana.jpg',
  },
  {
    slug: 'isole-golfo-napoli',
    paeseSlug: 'italia',
    ordine: 15,
    nome: 'Capri, Ischia e Procida',
    tipologia: ['isole', 'mare', 'terme'],
    giorniConsigliati: '4-5 giorni per farne almeno due',
    visitataPersonalmente: true,
    introduzione:
      'Tre isole a meno di un\'ora da Napoli e completamente diverse tra loro: Capri verticale, mondana e carissima; Ischia grande, verde e termale, con sorgenti già sfruttate dai greci; Procida minuscola, colorata e rimasta un paese di pescatori.',
    percheAndarci:
      'Si raggiungono in giornata da Napoli, e il contrasto tra le tre, a poche miglia di distanza, è la cosa più interessante: si può passare dalla mondanità di Capri alla Marina Corricella di Procida, dove la gente stende i panni, nello stesso pomeriggio.',
    cosaVedere: [
      'Capri: i Faraglioni, la Grotta Azzurra, Villa Jovis di Tiberio, il Monte Solaro con la seggiovia da Anacapri',
      'Il Sentiero dei Fortini e la Scala Fenicia a Capri, che quasi nessuno fa',
      'Ischia: il Castello Aragonese su un isolotto, le terme di Cavascura scavate nella roccia, il Monte Epomeo',
      'La Baia di Sorgeto a Ischia, dove sorgenti termali bollenti sgorgano direttamente in mare',
      'Procida: Marina Corricella con le case colorate, Terra Murata, la Chiaiolella',
      'I Campi Flegrei sulla terraferma, con la Solfatara e Baia sommersa',
    ],
    cosaFare: [
      'Capri **dormendoci**, perché l\'isola cambia del tutto quando ripartono i visitatori in giornata',
      'Bagno termale a Sorgeto a Ischia, dove si scava una buca nella ghiaia e si sta nell\'acqua calda',
      'Salire al Monte Solaro in seggiovia e scendere a piedi lungo la Scala Fenicia',
      'Il giro di Procida in bici o a piedi, che si fa in mezza giornata',
      'Il giro dell\'isola in barca, che a Capri è l\'unico modo di vedere le grotte e i Faraglioni da vicino',
    ],
    doveDormire:
      'Capri è carissima in alta stagione; Anacapri costa parecchio meno ed è più tranquilla. Ischia ha l\'offerta più larga e più economica delle tre, con gli hotel termali. Procida è la più accessibile e la più autentica. **Molti fanno base a Napoli o a Sorrento e vanno in giornata**: è la scelta più economica, ma la peggiore per Capri.',
    doveMangiare:
      'A Capri sono nate l\'insalata caprese e la torta caprese, con le mandorle e senza farina. A Ischia il piatto da cercare è il **coniglio all\'ischitana**, un piatto di terra su un\'isola: i conigli venivano allevati in fosse scavate nel tufo, e la cucina isolana è più contadina che marinara. A Procida si mangia pesce e si compra il limone locale, enorme, che si usa in insalata. **Sulle piazzette principali si paga la posizione**: due vicoli più in là si mangia meglio e si spende metà.',
    comeArrivare:
      'Traghetti e aliscafi da Napoli (Molo Beverello per gli aliscafi, Calata Porta di Massa per i traghetti) e da Sorrento. Per Procida e Ischia ci sono anche le partenze da Pozzuoli, più vicino e meno caotico.',
    comeSpostarsi:
      'A Capri **non si porta l\'auto** (in alta stagione è vietata ai non residenti) e ci si muove con la funicolare, i bus e i taxi scoperti. A Ischia servono bus o scooter, perché l\'isola è grande. Procida si gira a piedi o in bici.',
    periodoMigliore:
      '**maggio-giugno e settembre.** A luglio e agosto Capri riceve decine di migliaia di visitatori in giornata ed è invivibile. Ischia funziona anche in inverno per le terme, ed è l\'unica delle tre con una stagione lunga.',
    costi:
      'Capri è tra i posti più cari d\'Italia. Ischia ha prezzi normali, Procida bassi. I traghetti costano pochi euro; la Grotta Azzurra richiede biglietto più il passaggio sulla barchetta, con code lunghe e accesso sospeso quando il mare è mosso.',
    erroriDaEvitare: [
      '**Fare Capri in giornata ad agosto**: si arriva insieme a migliaia di persone, si fa la fila per la funicolare, si cammina in fila in Piazzetta e si riparte. Chi ci dorme vede un\'altra isola dopo le sei di sera',
      'Andare alla Grotta Azzurra senza guardare il mare: con onda l\'accesso viene sospeso, e la coda può essere di ore per cinque minuti dentro',
      'Portare l\'auto a Capri, dove è vietata, o a Procida, dove è inutile',
      'Scegliere Ischia pensando che sia una Capri più economica: è più grande, più verde, più contadina, e la sua ragione sono le terme',
      'Saltare Procida perché «è piccola»: è l\'unica delle tre rimasta un paese vero',
    ],
    confronti: [
      {
        titolo: 'Capri, Ischia o Procida: quale scegliere',
        introduzione:
          'Sono a poche miglia l\'una dall\'altra e vengono trattate come intercambiabili, mentre sono tre viaggi diversi per costo, ritmo e ragione per andarci.',
        opzioni: [
          {
            nome: 'Capri',
            sintesi: 'Verticale, mondana, con i Faraglioni, Villa Jovis e il Monte Solaro. È l\'isola più celebre del Mediterraneo e si comporta di conseguenza.',
            costo: 'altissimo, tra i più alti d\'Italia',
            durata: '1-2 giorni, meglio con un pernottamento',
            pro: [
              'Il paesaggio regge la fama: i Faraglioni e la costa da Punta Carena sono spettacolari',
              'Dopo le sei di sera, quando ripartono i visitatori in giornata, diventa un\'altra isola',
              'Il Sentiero dei Fortini e la Scala Fenicia sono tra le camminate più belle del Tirreno e ci va pochissima gente',
              'Anacapri, in alto, è tutt\'altro ritmo rispetto alla Piazzetta',
            ],
            contro: [
              'In alta stagione arrivano decine di migliaia di visitatori in giornata: la Piazzetta è impraticabile',
              'Prezzi da capitale internazionale su tutto',
              'La Grotta Azzurra ha code lunghissime per cinque minuti dentro, e chiude col mare mosso',
            ],
            perChi: 'Chi accetta il prezzo e soprattutto chi ci dorme. In giornata ad agosto è il modo peggiore di conoscerla.',
          },
          {
            nome: 'Ischia',
            sintesi: 'La più grande delle tre, verde e montuosa, con il termalismo come identità: le sorgenti sono sfruttate dai tempi dei greci.',
            costo: 'medio, con l\'offerta più larga e più accessibile delle tre',
            durata: '3-4 giorni',
            pro: [
              'Le terme sono naturali, ben lontane da una spa: a **Sorgeto** l\'acqua bollente sgorga direttamente in mare e ci si scava una buca nella ghiaia',
              'Il Castello Aragonese su un isolotto collegato da un ponte è uno dei posti più belli del golfo',
              'Grande abbastanza da avere un interno agricolo: il Monte Epomeo, i vigneti, i paesi in collina',
              'Stagione lunga: funziona anche in inverno grazie alle terme',
            ],
            contro: [
              'Molto edificata in alcune zone, con un\'urbanistica pesante lungo la costa nord',
              'Serve muoversi: l\'isola è grande e i bus sono lenti',
              'Meno «da cartolina» delle altre due',
            ],
            perChi: 'Chi cerca terme naturali, chi sta più giorni, chi viaggia con famiglia, chi vuole spendere il giusto.',
          },
          {
            nome: 'Procida',
            sintesi: 'La più piccola, la meno turistica, rimasta un paese di pescatori con le case colorate di Marina Corricella. Capitale italiana della cultura nel 2022.',
            costo: 'il più basso delle tre',
            durata: 'mezza giornata o una notte',
            pro: [
              'È l\'unica rimasta un paese vero: la gente ci vive, stende i panni, ripara le barche',
              'Marina Corricella, con le case a gradoni di tutti i colori, è uno dei porti più belli d\'Italia',
              'Si gira a piedi in mezza giornata e costa pochissimo',
              'Vicinissima: quaranta minuti da Napoli',
            ],
            contro: [
              'Poco da «fare» in senso classico: si cammina, si guarda, si mangia',
              'Spiagge modeste rispetto alle altre due',
              'Dopo la nomina a capitale della cultura l\'affluenza è cresciuta molto',
            ],
            perChi: 'Chi ha mezza giornata, chi preferisce un paese vissuto a una scenografia, chi vuole spendere poco.',
          },
        ],
        raccomandazione:
          'Con un giorno solo: **Procida**, che costa poco e non delude mai. Con tre o quattro giorni: **Ischia** come base, con una giornata a Procida, a venti minuti di traghetto. **Capri** merita, ma solo dormendoci o venendo fuori stagione: farla in giornata ad agosto vuol dire vedere la versione peggiore del posto più bello del golfo.',
      },
    ],
    miaEsperienza:
      'La differenza tra queste tre isole si vede alle sei di sera. A Capri, a quell\'ora, ripartono gli ultimi aliscafi di chi è venuto in giornata e la Piazzetta, che a mezzogiorno è una folla compatta in cui non ci si muove, si svuota. Rimangono i residenti e i pochi che ci dormono, la luce si abbassa sui Faraglioni, e si capisce perché per duemila anni questa sia stata l\'isola più desiderata del Mediterraneo. Chi la fa in giornata ad agosto vede solo la parte peggiore e torna dicendo che è sopravvalutata. Ischia funziona diversamente, perché è grande e ha un\'economia sua: le terme sono una risorsa geologica già sfruttata dai greci, più che un servizio d\'albergo. A **Sorgeto** si scende una scalinata fino a una baia dove l\'acqua bollente sgorga dal fondale e si mescola col mare: ci si scava una buca nella ghiaia e ci si siede, gratis, con il mare freddo a due metri. Procida è la più piccola e la più onesta: non c\'è niente da spuntare, si cammina fino a Marina Corricella, ci si siede e si guarda un porto di pescatori con le case di tutti i colori, dove la gente ci vive.',
    luoghi: [
      {
        "nome": "Grotta Azzurra, Capri",
        "testo": "Una cavità marina di Anacapri dove la luce entra da un'apertura subacquea e colora l'acqua di blu intenso. Ci si entra solo con piccole barche a remi, sdraiati, attraverso un varco basso.",
        "come": "Da Marina Grande in barca fino all'ingresso, oppure in bus da Anacapri e poi a piedi alla biglietteria dei barcaioli. Si sale sulla barchetta e si paga sul posto.",
        "quando": "Mattina e primo pomeriggio, con mare calmo. Con onda l'accesso viene sospeso, e d'inverno le giornate di chiusura sono frequenti.",
        "tempo": "1-2 ore con la coda, 5 minuti dentro",
        "costo": "si pagano sul posto la barca a remi e l'ingresso: chiedere la cifra totale prima di salire",
        "consiglio": "Guardare il mare prima di partire dalla Marina Grande: se è mosso, chiedere se la grotta è aperta prima di pagare un giro in barca."
      },
      {
        "nome": "Monte Solaro e Scala Fenicia",
        "testo": "Il punto più alto di Capri, 589 metri, raggiungibile da Anacapri con una seggiovia. Dalla cima si vedono i due golfi, Napoli e Salerno insieme. In basso la Scala Fenicia, 921 gradini per circa 1,7 km, è l'antica via tra Marina Grande e Anacapri.",
        "come": "Seggiovia dalla piazza di Anacapri. Per scendere a piedi si può prendere la Scala Fenicia, con scarpe comode.",
        "quando": "Mattina, con aria limpida. La seggiovia si ferma con il vento forte.",
        "tempo": "2-3 ore",
        "consiglio": "Salire in seggiovia e tornare a piedi: la discesa è lunga ma l'ultimo tratto, tra i muretti, è il più bello."
      },
      {
        "nome": "Villa Jovis",
        "testo": "I resti della villa dove l'imperatore Tiberio visse gli ultimi anni del suo regno, sul bordo di un precipizio sul mare, in cima al Monte Tiberio. Restano cisterne, terrazze e l'impianto della residenza.",
        "come": "A piedi da Capri, in salita lungo via Longano, in parte tra le case e poi tra muri a secco. Nessun mezzo.",
        "quando": "Mattina presto per il fresco; orari e giorni di apertura vanno controllati prima, cambiano con la stagione.",
        "tempo": "2 ore tra andata e ritorno",
        "consiglio": "Portare acqua, perché lungo la salita ci sono pochi punti di ristoro."
      },
      {
        "nome": "Sentiero dei Fortini",
        "testo": "Un sentiero costiero sulla parte occidentale di Anacapri, tra vecchi fortini e muri a secco, con il mare di sotto e quasi nessuno intorno. Finisce nei dintorni di Punta Carena, con il faro.",
        "come": "Da Anacapri in bus fino a Punta Carena, poi a piedi lungo la costa in direzione della Grotta Azzurra. Scarpe chiuse.",
        "quando": "Primavera, autunno e fine pomeriggio d'estate. A mezzogiorno è senza ombra.",
        "tempo": "1 ora e mezza-2 ore",
        "costo": "gratuito",
        "consiglio": "Chiudere con il tramonto a Punta Carena: dal faro il sole cade in mare senza nessuno davanti."
      },
      {
        "nome": "Castello Aragonese, Ischia",
        "testo": "Un isolotto di roccia collegato a Ischia Ponte da una passerella, con un castello fortificato che nei secoli ha ospitato una città intera, chiese e un monastero. Dall'alto si vede la costa dell'isola.",
        "come": "A piedi da Ischia Ponte attraverso il ponte. C'è un ascensore panoramico per salire.",
        "quando": "Aperto tutto l'anno con orari che cambiano; la luce migliore è nel tardo pomeriggio.",
        "tempo": "2-3 ore",
        "url": "https://www.castelloaragonese.it/",
        "consiglio": "Il giro è lungo e in salita: partire presto e fermarsi nei giardini a metà strada."
      },
      {
        "nome": "Baia di Sorgeto, Ischia",
        "testo": "Una piccola baia di ciottoli dove sorgenti calde sgorgano direttamente in mare. Si scava una buca nella ghiaia e ci si siede nell'acqua tiepida, con il mare fresco a due metri. L'ingresso alla baia è gratuito.",
        "come": "Da Panza (Forio) una scalinata ripida scende alla baia; in alternativa una barca da Sant'Angelo. Bus da Forio o Ischia Porto fino a Panza.",
        "quando": "Mattina o fine pomeriggio. D'estate è affollata; in inverno funziona lo stesso grazie all'acqua calda.",
        "tempo": "2-3 ore",
        "costo": "gratuito",
        "consiglio": "Provare l'acqua prima di sedersi: in alcune pozze è bollente. Portare ciabatte da scoglio e un asciugamano."
      },
      {
        "nome": "Monte Epomeo",
        "testo": "Il monte più alto di Ischia, al centro dell'isola, 789 metri, con una cima di tufo verde. Dal belvedere si vede tutta l'isola e il golfo. Sul percorso ci sono cantine scavate nella roccia.",
        "come": "Sentiero da Fontana (bus da Ischia Porto o Forio) o da Serrara Fontana, in salita. Si può anche salire in minibus per il tratto iniziale.",
        "quando": "Mattina limpida; evitare giorni di vento o dopo la pioggia per il tufo scivoloso.",
        "tempo": "3 ore tra salita e discesa",
        "costo": "gratuito",
        "consiglio": "Mangiare qualcosa in uno dei ristoranti di roccia sotto la cima, nella cucina contadina dell'isola."
      },
      {
        "nome": "Procida: Marina Corricella e Terra Murata",
        "testo": "Corricella è un villaggio di pescatori a gradoni, con case di mille colori sul porticciolo. Sopra, Terra Murata è la parte alta e fortificata dell'isola, con l'abbazia di San Michele e il belvedere. Procida è piccola e si gira tutta in mezza giornata.",
        "come": "Traghetto o aliscafo da Napoli o Pozzuoli. Dal porto di Marina Grande si cammina o si prende il minibus verso Terra Murata.",
        "quando": "Tutto l'anno. Il tardo pomeriggio e la sera sono i momenti migliori, con i pescatori al lavoro.",
        "tempo": "mezza giornata",
        "consiglio": "Scendere a Corricella dalla scalinata di Terra Murata e mangiare pesce nel porticciolo sotto le case."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: aliscafo da Napoli o Pozzuoli per Procida",
          "Terra Murata e Marina Corricella a piedi",
          "Pranzo di pesce sul porticciolo",
          "Giro verso la Chiaiolella e rientro nel pomeriggio"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Capri, Anacapri, seggiovia del Monte Solaro e discesa dalla Scala Fenicia",
          "Pernottamento a Capri o Anacapri per vedere l'isola dopo le 18",
          "Giorno 2: giro di Capri in barca con i Faraglioni, Grotta Azzurra se il mare è calmo, rientro in serata"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Procida in mezza giornata, poi traghetto per Ischia",
          "Giorno 2: Castello Aragonese al mattino, Sorgeto al pomeriggio",
          "Giorno 3: Monte Epomeo al mattino e terme in un parco termale, o giro in barca dell'isola"
        ]
      }
    ],
    zone: [
      {
        "nome": "Anacapri (Capri)",
        "perChi": "chi vuole Capri senza i prezzi della Piazzetta",
        "testo": "Costa meno di Capri paese, è più tranquilla la sera e ha il Monte Solaro. Si scende in bus a Marina Grande e a Capri; la sera tardi i collegamenti sono radi."
      },
      {
        "nome": "Forio e Sant'Angelo (Ischia)",
        "perChi": "terme, tramonti e mare",
        "testo": "Forio, sulla costa ovest, ha i tramonti e la vita serale. Sant'Angelo, a sud, è un villaggio pedonale con poche auto e calette. Dormire qui vuol dire essere lontani dal porto principale."
      },
      {
        "nome": "Marina Corricella (Procida)",
        "perChi": "chi cerca un paese vero",
        "testo": "Camere nelle case colorate del porticciolo, spesso piccole e con scale. Le sere sono tranquille. Non si arriva con l'auto."
      },
      {
        "nome": "Napoli o Sorrento",
        "perChi": "budget stretto e gite in giornata",
        "testo": "Si spende meno e si va in giornata con aliscafo, ma Capri in giornata ad agosto è il modo peggiore di vederla."
      }
    ],
    sapori: [
      {
        "nome": "Insalata caprese e torta caprese",
        "testo": "Pomodoro, mozzarella e basilico, nati a Capri. La torta è al cioccolato e mandorle, senza farina."
      },
      {
        "nome": "Coniglio all'ischitana",
        "testo": "Il piatto da cercare a Ischia: coniglio cotto in casseruola con pomodoro, vino e erbe, in ricordo dei conigli allevati in fosse nel tufo."
      },
      {
        "nome": "Ravioli capresi",
        "testo": "Ravioli con ripieno di caciotta e maggiorana, conditi con salsa di pomodoro fresco. Si trovano nei locali di Capri e Anacapri."
      },
      {
        "nome": "Limone di Procida",
        "testo": "Enorme, profumato e poco acido: lo si mangia anche in insalata, lo si trasforma in limoncello e in dolci. Si compra dai coltivatori."
      },
      {
        "nome": "Pesce di Corricella",
        "testo": "A Procida il pesce è appena pescato e si mangia vicino al porticciolo. Si spende meno che sulle altre due isole."
      }
    ],
    attenzioni: [
      "Il giro in barca e le tariffe dei barcaioli a Capri vanno concordati prima di salire: chiedere il prezzo totale e cosa comprende.",
      "La Grotta Azzurra chiude con il mare mosso, e i biglietti si pagano sul posto: non pagare in anticipo a chi vi ferma al porto.",
      "A Capri in alta stagione l'auto dei non residenti non può entrare: ci si muove con funicolare, bus e taxi.",
      "La funicolare di Capri ha code lunghe a mezzogiorno in estate: prenotare il rientro con anticipo sull'ultimo aliscafo.",
      "Gli scioperi dei traghetti e il mare mosso cancellano corse: non prendere voli o treni la sera stessa del rientro dalle isole.",
      "A Sorgeto l'acqua di alcune pozze è molto calda: provare prima di sedersi, soprattutto con i bambini."
    ],
    esperienzeSlugs: ['sorgeto-ischia'],
    tripSlugs: ['costiera-e-isole'],
    imageAlt: 'La costa di Capri vista dall\'alto con i Faraglioni e le barche ormeggiate nella baia',
    immagine: '/images/italia/isole-golfo-napoli.jpg',
  },
  {
    slug: 'eolie',
    paeseSlug: 'italia',
    ordine: 16,
    nome: 'Isole Eolie',
    tipologia: ['isole', 'vulcani', 'vela'],
    giorniConsigliati: '6-7 giorni per farne almeno quattro',
    visitataPersonalmente: true,
    introduzione:
      'Sette isole vulcaniche a nord della Sicilia, patrimonio UNESCO dal 2000 per il loro valore geologico: qui sono stati studiati e battezzati due tipi di eruzione, quella **stromboliana** e quella **vulcaniana**, che portano il nome di queste isole in tutti i manuali del mondo. Stromboli è uno dei pochissimi vulcani al mondo in eruzione permanente da millenni.',
    percheAndarci:
      'Sono sette mondi separati a poche miglia l\'uno dall\'altro: da Panarea mondana ad Alicudi, dove non ci sono strade e le merci salgono ancora con i muli. E il modo migliore di girarle, in barca a vela, permette di dormire in rada davanti a un vulcano in eruzione.',
    cosaVedere: [
      'Stromboli, con la Sciara del Fuoco e le esplosioni visibili dal mare di notte',
      'Vulcano, con il Gran Cratere, le fumarole e i fanghi sulfurei',
      'Lipari, la più grande, con le cave di pomice e ossidiana e il Museo Archeologico Eoliano',
      'Salina, la più verde, con i due vulcani spenti, la malvasia e i capperi',
      'Panarea, la più piccola e la più mondana, con il villaggio preistorico di Capo Milazzese',
      'Filicudi e Alicudi, le due più remote: ad Alicudi non ci sono strade, solo scalinate',
      'Le pomici e le sabbie bianche di Lipari e le acque termali sottomarine di Vulcano',
    ],
    cosaFare: [
      'Vedere Stromboli in eruzione dal mare di notte (vedi la scheda esperienza dedicata)',
      'Salire sul Gran Cratere di Vulcano, con l\'avvertenza che l\'accesso è stato più volte regolamentato o chiuso per l\'attività fumarolica',
      'Girare le isole **in barca a vela**, il modo per cui queste isole sembrano fatte (vedi la scheda esperienza dedicata)',
      'Salire a piedi ad Alicudi lungo le scalinate, le uniche vie dell\'isola',
      'Assaggiare la malvasia delle Lipari a Salina, dove si produce',
    ],
    doveDormire:
      'Lipari come base, per i collegamenti e l\'offerta più larga; Salina per la qualità e la tranquillità; Panarea se il budget non è un tema; Stromboli per la salita e le eruzioni. **In alta stagione i posti si esauriscono**: sono isole piccole con un numero finito di letti. Chi va in vela dorme a bordo e risolve il problema.',
    doveMangiare:
      'La cucina eoliana è povera e di mare: **pasta alla eoliana** con capperi, olive e pomodorini, pesce azzurro, totani, e il **pane cunzato**, una fetta di pane con pomodoro, acciughe, capperi, origano e formaggio, nato come pasto dei contadini. I **capperi di Salina** sono un presidio e sono diversi da tutti gli altri. Da bere, la **Malvasia delle Lipari** passita, che si beve a fine pasto.',
    comeArrivare:
      'Aliscafi e traghetti da **Milazzo** (il collegamento principale, circa un\'ora per Lipari), Messina, Palermo e in stagione da Napoli. **Con il mare mosso le corse saltano**, ed è la variabile che condiziona tutto: restare bloccati un giorno in più è la regola.',
    comeSpostarsi:
      'Traghetti e aliscafi interni tra le isole, frequenti in alta stagione e radi in bassa. Sulle isole: scooter a Lipari e Salina, nulla a Panarea (solo carrelli elettrici), **niente a Filicudi e Alicudi**, dove ci si muove a piedi e i muli portano ancora le merci.',
    periodoMigliore:
      '**giugno e settembre.** Luglio e agosto sono saturi: sono isole piccole, e con il carico di agosto smettono di funzionare come nel resto dell\'anno. Da novembre a marzo molte strutture chiudono e i collegamenti si riducono al minimo.',
    costi:
      'I traghetti incidono più di quanto si pensi, soprattutto facendo più isole. Panarea ha prezzi da altra categoria; Filicudi e Alicudi sono economicissime. La salita guidata allo Stromboli ha un costo fisso ed è obbligatoria oltre una certa quota.',
    erroriDaEvitare: [
      '**Programmare coincidenze strette**: con il mare mosso le corse saltano e si resta bloccati. Non si prenota un volo per la sera stessa del rientro dalle isole',
      'Fare solo Lipari e Vulcano perché sono le più comode: Salina, Filicudi e Alicudi sono la ragione per venire fin qui',
      'Dare per scontata la salita allo Stromboli: **l\'accesso oltre quota è regolamentato dalla protezione civile e cambia con l\'attività del vulcano**, e negli ultimi anni è stato più volte limitato. Conviene informarsi prima di partire',
      'Andare ad agosto',
      'Portare l\'auto: su queste isole è inutile e in gran parte impossibile',
      'Sottovalutare l\'acqua: diverse isole hanno problemi idrici e l\'acqua arriva con le navi cisterna',
    ],
    confronti: [
      {
        titolo: 'Eolie in vela o via traghetto?',
        introduzione:
          'Le Eolie si possono fare in due modi molto diversi, e la scelta cambia il viaggio più di qualunque altra decisione. Oltre al mezzo cambiano il posto dove si dorme, quello che si vede e quanto si dipende dagli orari degli altri.',
        opzioni: [
          {
            nome: 'In barca a vela',
            sintesi: 'Si noleggia una barca, con skipper o in autonomia se si ha la patente nautica, e si vive a bordo per una settimana, spostandosi tra le isole e dormendo in rada.',
            costo: 'una barca da 8-10 persone divisa tra l\'equipaggio costa spesso meno di sette notti in hotel a testa in alta stagione, più skipper, carburante e cassa comune',
            durata: '7 giorni, il formato standard del noleggio',
            pro: [
              '**Stromboli di notte dal mare**: si sta alla fonda davanti alla Sciara del Fuoco con il motore spento e si guardano le esplosioni. Basta questo a giustificare la formula',
              'Si raggiungono cale e punti di ancoraggio inaccessibili da terra',
              'Nessuna dipendenza dagli orari degli aliscafi e nessun problema di alloggio in alta stagione',
              'Con un equipaggio pieno, il costo a testa è competitivo con gli hotel',
              'Si dorme in rada, un\'esperienza a sé',
            ],
            contro: [
              'Spazi stretti e vita in comune: con le persone sbagliate, sette giorni sono lunghi',
              'Il mare decide: con vento forte si cambia programma o si resta in porto',
              'Comfort limitato: acqua razionata, docce brevi, cuccette',
              'Serve uno skipper se non si ha la patente nautica, e va messo in conto',
              'Chi soffre il mare lo scopre il primo giorno',
            ],
            perChi: 'Gruppi di amici, chi vuole vedere Stromboli dal mare, chi non sopporta di dipendere dagli aliscafi.',
          },
          {
            nome: 'Base a terra e traghetti',
            sintesi: 'Si sceglie una base, di solito Lipari o Salina, e si fanno le altre isole in giornata con aliscafi e traghetti.',
            costo: 'alloggio più biglietti dei collegamenti interni, che sommati incidono',
            durata: '5-7 giorni',
            pro: [
              'Comodità: letto fisso, doccia vera, bagagli che restano fermi',
              'Si può cambiare programma in base al meteo senza conseguenze',
              'Accessibile a tutti, anche a chi soffre il mare',
              'Si conoscono meglio le isole dove si dorme, perché si vive la sera',
            ],
            contro: [
              '**Si dipende dagli orari**: gli aliscafi in giornata limitano le isole raggiungibili e impongono di ripartire nel pomeriggio',
              'Con il mare mosso le corse saltano e si resta fermi',
              'In alta stagione gli alloggi si esauriscono e i prezzi salgono',
              'Stromboli di notte dal mare si può fare solo con escursioni organizzate a orario',
            ],
            perChi: 'Chi viaggia in coppia o in famiglia, chi non vuole vivere in barca, chi ha tempi flessibili.',
          },
        ],
        raccomandazione:
          'Per un gruppo con sette giorni: **la vela**, senza esitazione. Il costo a testa regge il confronto con gli hotel di alta stagione, si eliminano i problemi di alloggio e di orari, e si ottiene quello che nessuna formula a terra offre: stare alla fonda davanti allo Stromboli di notte, a motore spento, a guardare un vulcano che esplode ogni pochi minuti. In coppia o con bambini, base a **Salina** (più bella e più tranquilla di Lipari) e traghetti, mettendo in conto una notte a Stromboli.',
      },
    ],
    miaEsperienza:
      'Le Eolie sono l\'arcipelago italiano con la varietà più alta, e il modo di capirlo è fare quattro isole invece di due. Si passa da Panarea, dove d\'estate attraccano gli yacht e i prezzi sono da Costa Smeralda, ad Alicudi, che ha meno di cento abitanti, nessuna strada (solo scalinate di pietra) e le merci che salgono ancora con i muli. Sono a venti miglia di distanza. Ma il ricordo più forte, senza paragoni in Italia, è Stromboli visto dal mare di notte. Ci si ferma alla fonda davanti alla **Sciara del Fuoco**, il versante nudo lungo cui rotola il materiale, si spegne il motore, e si sta al buio ad aspettare. Ogni pochi minuti il cratere sputa materiale incandescente che scende lungo il pendio fino all\'acqua, con un rumore sordo che arriva un attimo dopo. Non c\'è illuminazione né spettacolo organizzato: è un vulcano che fa questo da millenni, con un paese abitato sotto e le luci delle case accese a poche centinaia di metri dalla colata. Sulla salita a piedi invece va detto chiaro che **l\'accesso oltre quota è regolamentato e cambia con l\'attività**: negli ultimi anni è stato più volte limitato, e conviene informarsi prima di costruirci sopra il viaggio.',
    luoghi: [
      {
        "nome": "Stromboli e la Sciara del Fuoco",
        "testo": "Il vulcano in eruzione quasi continua da millenni, con un paese abitato ai piedi. Ogni pochi minuti il cratere lancia materiale incandescente che rotola lungo la Sciara del Fuoco fino al mare. Il modo più bello per vederlo è dall'acqua, di notte.",
        "come": "Aliscafo o traghetto da Lipari, Milazzo o dalle altre isole. Per vederlo dal mare si prende un'escursione serale in barca, oppure si dorme in barca a vela davanti alla Sciara con il motore spento.",
        "quando": "Di sera e di notte, con il mare calmo. Le escursioni in barca partono nel tardo pomeriggio e rientrano a notte.",
        "tempo": "una sera, meglio una notte",
        "consiglio": "Spegnere il motore e stare in silenzio: il rumore arriva un attimo dopo la luce. Portare una felpa, di notte sul mare fa freddo."
      },
      {
        "nome": "Salita a Stromboli",
        "testo": "La salita ai crateri è regolata dalle autorità: negli ultimi anni i limiti di quota e le regole sono cambiati più volte in base all'attività del vulcano. Fino a una certa quota si sale senza guida, oltre è obbligatoria una guida vulcanologica autorizzata, e in alto l'accesso è vietato.",
        "come": "I sentieri partono dal paese di Stromboli. Le guide autorizzate organizzano le salite al tramonto e rientrano al buio, con elmetto e torcia.",
        "quando": "Salita nel tardo pomeriggio per vedere le esplosioni al buio. Prenotare con anticipo in alta stagione e controllare le regole del momento.",
        "tempo": "5-6 ore",
        "consiglio": "Controllare la regola vigente presso il Comune di Lipari o le guide locali: non costruire il viaggio su una salita che potrebbe essere vietata."
      },
      {
        "nome": "Vulcano: Gran Cratere e fanghi",
        "testo": "Un cratere di poco meno di 400 metri con fumarole di zolfo sul bordo, raggiungibile a piedi da Porto di Levante. A valle ci sono i fanghi sulfurei e il mare che ribolle di gas vicino ai Faraglioni.",
        "come": "Aliscafo da Lipari, una traversata breve. Dal porto il sentiero parte a piedi. Il laghetto dei fanghi è vicino al porto, ma è chiuso al pubblico dal 2020 in attesa di lavori di messa in sicurezza: verificare se ha riaperto.",
        "quando": "Mattina presto per il caldo e il sole. L'accesso al cratere è stato più volte regolato o chiuso per l'attività fumarolica: verificare prima.",
        "tempo": "mezza giornata per il cratere, 1 ora per i fanghi",
        "consiglio": "I fanghi macchiano e l'odore resta addosso: costume vecchio e niente gioielli d'argento. Respirare poco vicino alle fumarole."
      },
      {
        "nome": "Lipari: Castello e Museo Archeologico",
        "testo": "L'isola più grande ha un castello sulla rupe che domina il porto, con il Museo Archeologico Regionale Eoliano dentro. Raccoglie reperti dal Neolitico alla Grecia, compresa la collezione dei vasi e le maschere teatrali. Fuori, le cave di pomice e le spiagge bianche di Canneto.",
        "come": "Si arriva al porto di Marina Corta e si sale a piedi al Castello. Per le cave di pomice, bus o scooter verso Canneto e Acquacalda.",
        "quando": "Mattina per il museo, pomeriggio per il mare. Il museo ha giorno di riposo: controllare prima.",
        "tempo": "mezza giornata",
        "consiglio": "Salire al belvedere Quattrocchi, sul lato sud, al tramonto: si vede Vulcano contro il sole."
      },
      {
        "nome": "Salina: Pollara e Fossa delle Felci",
        "testo": "L'isola più verde, con due vulcani spenti gemelli. Pollara è il cratere crollato in mare, con un belvedere e uno scoglio a picco. Il Monte Fossa delle Felci, il punto più alto dell'arcipelago, si sale in poche ore tra boschi e capperi.",
        "come": "Aliscafo da Lipari fino a Rinella o Santa Marina. Dentro l'isola bus o scooter. Pollara è dalla parte ovest.",
        "quando": "Primavera e inizio estate per il verde; tramonto a Pollara. L'accesso alla spiaggia di Pollara è spesso limitato per il rischio di frane: controllare.",
        "tempo": "1 giorno",
        "consiglio": "Assaggiare la Malvasia in una delle cantine e comprare i capperi direttamente dai produttori."
      },
      {
        "nome": "Panarea e Capo Milazzese",
        "testo": "La più piccola e mondana, con case bianche e niente auto. Il villaggio preistorico di Capo Milazzese, dell'età del bronzo, è su un promontorio a sud, con le capanne di pietra visibili. In mare ci sono gli isolotti, tra cui Lisca Bianca.",
        "come": "Aliscafo da Lipari o Stromboli. Dal porto si va a piedi verso sud fino a Capo Milazzese; le valigie viaggiano sui carrelli elettrici.",
        "quando": "Giugno e settembre. D'estate la sera è frequentata dagli yacht e i prezzi salgono.",
        "tempo": "mezza giornata",
        "consiglio": "Il giro in barca degli isolotti è il modo giusto di vedere il mare di Panarea, ma contrattare il prezzo."
      },
      {
        "nome": "Filicudi: Grotta del Bue Marino e Capo Graziano",
        "testo": "Un'isola quasi senza turismo. Il Capo Graziano ha un villaggio preistorico e una costa di roccia scura. La Grotta del Bue Marino è una grotta marina raggiungibile in barca, con acque limpide.",
        "come": "Aliscafo da Lipari o Salina. Sull'isola si cammina; i taxi-barca fanno il giro delle grotte.",
        "quando": "Giugno e settembre; il mare mosso impedisce l'ingresso alle grotte.",
        "tempo": "1 giorno",
        "consiglio": "Dormirci almeno una notte: la sera, quando partono gli aliscafi, l'isola resta quasi vuota."
      },
      {
        "nome": "Alicudi",
        "testo": "La più remota, circolare e quasi senza strade, con pochi abitanti stabili. Si sale per mulattiere e scalinate di pietra; i muli portano ancora le merci. Dalla cima si vede tutto l'arcipelago.",
        "come": "Aliscafo da Lipari o Filicudi. Dal porto si sale a piedi, senza veicoli.",
        "quando": "Primavera e inizio autunno. D'estate la salita è dura per il caldo.",
        "tempo": "1 giorno o una notte",
        "consiglio": "Portare poco bagaglio: le valigie salgono a spalla o a dorso di mulo. Prenotare l'alloggio con largo anticipo."
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: aliscafo da Milazzo a Lipari, Castello e Museo Archeologico",
          "Pomeriggio a Canneto, bagno nelle spiagge di pomice",
          "Giorno 2: mattina a Vulcano per il cratere e i fanghi, rientro a Lipari nel pomeriggio"
        ]
      },
      {
        "titolo": "4 giorni",
        "tappe": [
          "Giorno 1: Lipari, Castello e Museo",
          "Giorno 2: Vulcano al mattino, Salina nel pomeriggio",
          "Giorno 3: Panarea in giornata o in barca, bagno a Lisca Bianca",
          "Giorno 4: Stromboli, serata in barca per la Sciara del Fuoco, notte sul posto"
        ]
      },
      {
        "titolo": "7 giorni",
        "tappe": [
          "Giorno 1-2: Lipari e Vulcano",
          "Giorno 3: Salina con Pollara e Fossa delle Felci",
          "Giorno 4: Panarea e Capo Milazzese",
          "Giorno 5: Stromboli, Sciara del Fuoco di notte dal mare",
          "Giorno 6: Filicudi, Grotta del Bue Marino",
          "Giorno 7: Alicudi o riposo, rientro a Milazzo con margine su mare e aliscafi"
        ]
      }
    ],
    zone: [
      {
        "nome": "Lipari",
        "perChi": "chi vuole la base più comoda",
        "testo": "Collegamenti per tutte le isole, tanta scelta di alloggi e ristoranti. È la più affollata d'estate, ma è il punto da cui si raggiunge tutto in giornata."
      },
      {
        "nome": "Salina",
        "perChi": "calma e qualità",
        "testo": "Più verde e tranquilla, con paesi come Malfa, Santa Marina e Rinella. Meno collegata, si usa lo scooter. Cenare con la Malvasia è la ragione per fermarsi."
      },
      {
        "nome": "Stromboli",
        "perChi": "chi vuole il vulcano",
        "testo": "Case nere basse, spiagge di sabbia scura, rumore del vulcano di notte. Piccola, con pochi letti e prezzi alti; la salita e le escursioni partono da qui."
      },
      {
        "nome": "Panarea",
        "perChi": "chi può spendere",
        "testo": "Isola minuscola e mondana, con prezzi molto alti nella stagione dei grandi yacht. Si va a piedi o con carrelli elettrici."
      }
    ],
    sapori: [
      {
        "nome": "Pane cunzato",
        "testo": "Fetta di pane con pomodoro, acciughe, capperi, origano e formaggio, nato come pasto dei contadini. Si mangia in ogni isola, spesso con i prodotti del posto."
      },
      {
        "nome": "Pasta alla eoliana",
        "testo": "Pasta con capperi, olive, pomodorini e pesce azzurro. Un piatto semplice, di dispensa."
      },
      {
        "nome": "Capperi di Salina",
        "testo": "Presidio Slow Food, raccolti a mano e conservati sotto sale. Diversi dagli altri per il profumo."
      },
      {
        "nome": "Malvasia delle Lipari",
        "testo": "Vino dolce e passito, che si beve a fine pasto. Si produce soprattutto a Salina."
      },
      {
        "nome": "Granita",
        "testo": "Come in tutta la Sicilia, ma qui con brioche a colazione e ai gusti locali di caffè, mandorla e pistacchio."
      }
    ],
    attenzioni: [
      "Con il mare mosso aliscafi e traghetti saltano: non incastrare coincidenze strette e non prenotare un volo la sera del rientro.",
      "La salita al cratere di Stromboli e al Gran Cratere di Vulcano è regolata e cambia con l'attività: verificare le regole attuali prima di prenotare.",
      "Alloggi e posti in barca si esauriscono in alta stagione: prenotare mesi prima per luglio e agosto.",
      "L'acqua è scarsa e arriva con le navi cisterna: usarla con parsimonia.",
      "A Vulcano le fumarole e il gas sono concentrati vicino al cratere e ai fanghi: restare nei punti segnalati e allontanarsi se l'aria si fa pesante.",
      "Giri in barca e taxi-boat: concordare prezzo e durata prima di salire."
    ],
    esperienzeSlugs: ['stromboli-notte', 'eolie-in-vela'],
    tripSlugs: ['eolie-in-vela'],
    imageAlt: 'Le Isole Eolie viste dall\'orlo del Gran Cratere di Vulcano, con Lipari e Salina all\'orizzonte',
    immagine: '/images/italia/eolie.jpg',
  },
  {
    slug: 'sicilia-occidentale',
    paeseSlug: 'italia',
    ordine: 17,
    nome: 'Sicilia occidentale',
    tipologia: ['archeologia', 'città d\'arte', 'gastronomia'],
    giorniConsigliati: '7-8 giorni',
    visitataPersonalmente: true,
    introduzione:
      'L\'altra metà dell\'isola: quella araba, normanna, fenicia e punica. Palermo con la Cappella Palatina e il Duomo di Monreale, i templi di Segesta e Selinunte, le saline di Trapani e Marsala, Erice a settecentocinquanta metri sopra il mare, e le Egadi davanti.',
    percheAndarci:
      'Monreale e la Cappella Palatina sono tra i capolavori del Medioevo europeo, costruiti da re normanni con maestranze arabe e mosaicisti bizantini, e lo street food palermitano non ha equivalenti in Italia. Segesta e Selinunte, poi, hanno templi quasi come Agrigento con un decimo delle persone.',
    cosaVedere: [
      'Il **Duomo di Monreale**, con seimila metri quadrati di mosaici d\'oro e un chiostro dove ogni capitello è diverso',
      'La Cappella Palatina a Palermo, con il soffitto a muqarnas arabo su una struttura normanna: l\'itinerario arabo-normanno è patrimonio UNESCO',
      'I mercati di Palermo, Ballarò, Vucciria e Capo: street food e teatro insieme',
      'Segesta, con il tempio dorico incompiuto isolato su una collina e il teatro greco in cima',
      'Selinunte, il parco archeologico più esteso d\'Europa, con i templi sul mare',
      'Erice a 750 metri, con la nebbia che la copre quasi sempre, e Trapani con le saline e i mulini',
      'Mozia, l\'isola fenicia nello Stagnone, con la strada punica sommersa e il Giovinetto',
      'La Riserva dello Zingaro e San Vito Lo Capo',
    ],
    cosaFare: [
      'Monreale al mattino presto, prima dei pullman (vedi la scheda esperienza dedicata)',
      'Girare i mercati di Palermo mangiando: è il modo giusto di conoscere la città',
      'Le saline di Trapani e Marsala al tramonto, quando l\'acqua diventa rosa',
      'Traversata a Mozia nello Stagnone, con la barca che attraversa acque basse dove passava una strada punica',
      'Trekking nella Riserva dello Zingaro, la prima riserva istituita in Sicilia',
    ],
    doveDormire:
      'Palermo come base per i primi giorni: il centro storico attorno a Ballarò e alla Kalsa è la scelta più viva. Poi Trapani o Marsala per l\'ovest, o San Vito Lo Capo per il mare. Erice per una notte, per vederla la sera quando i pullman se ne sono andati e resta la nebbia.',
    doveMangiare:
      'Palermo è la capitale italiana dello street food: **arancine** (femminile, qui), **panelle** di ceci, **sfincione**, crocchè, e il **pane con la milza**, per i coraggiosi, da provare almeno una volta ai banchi storici. Poi la pasta con le sarde, le sarde a beccafico, il cous cous di pesce a **San Vito Lo Capo** e a Trapani, eredità diretta del mondo arabo e nordafricano. I dolci: cassata, cannoli e frutta martorana. Il vino: Marsala nella sua zona, Grillo e Catarratto per i bianchi.',
    comeArrivare:
      'Volo su Palermo Punta Raisi, oppure Trapani Birgi per i low cost. In traghetto da Napoli, Genova e Civitavecchia. **Auto indispensabile** per muoversi fuori da Palermo.',
    comeSpostarsi:
      'Palermo si gira a piedi nel centro storico, con i mezzi pubblici che funzionano male. Fuori serve l\'auto: le autostrade collegano Palermo, Trapani e Marsala, il resto è statale. Per le Egadi, aliscafi da Trapani e Marsala.',
    periodoMigliore:
      '**aprile-giugno e settembre-ottobre.** In estate l\'ovest è torrido e le zone archeologiche non hanno ombra. L\'inverno è mite e ottimo per Palermo e i siti, con il mare fuori gioco. A settembre c\'è il Cous Cous Fest a San Vito Lo Capo.',
    costi:
      'Per alloggi e ristoranti costa parecchio meno della Sicilia orientale. Monreale ha biglietti separati per duomo, chiostro e terrazze; Segesta e Selinunte hanno ingressi contenuti; i mercati non costano niente oltre a quello che si mangia.',
    erroriDaEvitare: [
      'Andare a Monreale a metà giornata, quando arrivano i pullman: alle otto e mezza si sta dentro con dieci persone',
      'Giudicare Palermo dal degrado di certe zone e fermarsi lì: è la città più stratificata d\'Italia e chiede di adattarsi',
      'Saltare Segesta e Selinunte perché «c\'è già Agrigento»: Segesta ha un tempio isolato su una collina senza nessuno intorno, e Selinunte è il parco archeologico più esteso d\'Europa',
      'Fare Selinunte a mezzogiorno d\'estate: è vastissimo e senza ombra',
      'Aspettarsi che Erice sia limpida: è a 750 metri e la nebbia la copre per gran parte dell\'anno: fa parte del posto',
      'Lasciare oggetti in vista in auto nelle zone urbane',
    ],
    miaEsperienza:
      'La Sicilia occidentale è quella che si fa la seconda volta, e per molti aspetti è la più forte. Il **Duomo di Monreale** regge qualsiasi confronto: un edificio costruito nel Dodicesimo secolo da re normanni, con architetti e maestranze arabi e mosaicisti bizantini, dove un Cristo Pantocratore alto quasi venti metri guarda giù da un\'abside interamente rivestita d\'oro. Intorno, seimila metri quadrati di mosaici raccontano l\'Antico e il Nuovo Testamento. Fuori c\'è un chiostro con duecentoventotto colonnine, e **ogni capitello è diverso dagli altri**. Lì si capisce che la Sicilia ha tenuto insieme tutte le culture che l\'hanno conquistata, nello stesso edificio e nello stesso momento. La seconda cosa è Palermo, che chiede di adattarsi: è caotica, in certe zone degradata, rumorosa, e chi si irrita torna a casa dicendo che è sporca. Chi entra nel ritmo scopre i mercati, che al mattino sono un teatro, con i venditori che urlano l\'abbanniata, una specie di richiamo cantato, e dove si mangia in piedi camminando con due euro. E poi Segesta: un tempio dorico del quinto secolo, mai finito, in piedi da solo su una collina in mezzo al niente, con il vento. Ci sono venti persone.',
    luoghi: [
      {
        "nome": "Mercati di Palermo: Ballarò, Capo e Vucciria",
        "testo": "Tre mercati storici nel centro, con origini arabe. Al mattino sono un teatro: banchi di pesce, spezie, verdure, venditori che urlano l'abbanniata. Si mangia in piedi, camminando, spendendo pochi euro.",
        "come": "A piedi dal centro storico. Ballarò è vicino alla Casa Professa e a Porta Nuova; il Capo è dietro il Teatro Massimo; la Vucciria sta tra via Roma e il porto.",
        "quando": "Mattina, quando i banchi sono al completo. Il pomeriggio molti banchi smontano. La domenica è più vuota.",
        "tempo": "2-3 ore",
        "consiglio": "Mangiare panelle, arancine e sfincione in piedi, ai banchi dove fa la fila la gente del posto, non nei locali con il menu in inglese."
      },
      {
        "nome": "Palazzo dei Normanni e Cappella Palatina",
        "testo": "La cappella reale del Dodicesimo secolo: pareti a mosaici d'oro, soffitto ligneo a muqarnas di mano araba e pavimenti di marmo. È una delle chiese più belle d'Italia e fa parte dell'itinerario arabo-normanno, patrimonio UNESCO.",
        "come": "Dal centro si arriva a piedi verso Porta Nuova. Biglietto online sul sito della Fondazione Federico II, ingresso con controlli e file brevi se si va presto.",
        "quando": "Lunedì-sabato 8:30-16:30, domenica e festivi 8:30-12:30 (orari di ultimo ingresso, sito della Fondazione Federico II). Al mattino, appena apre. Gli orari cambiano con le funzioni e con le sedute dell'assemblea regionale: controllare prima.",
        "tempo": "1 ora e mezza",
        "url": "https://www.federicosecondo.org/",
        "consiglio": "Alzare gli occhi al soffitto: i muqarnas sono in legno dipinto, con scene di corte arabe."
      },
      {
        "nome": "Duomo di Monreale",
        "testo": "Il capolavoro normanno del Dodicesimo secolo: migliaia di metri quadrati di mosaici a fondo oro, con il grande Cristo Pantocratore nell'abside. Accanto il chiostro ha un colonnato di colonnine binate, e ogni capitello è diverso dagli altri. Le terrazze sopra danno sulla Conca d'Oro.",
        "come": "Bus AMAT 389 da Palermo (piazza Indipendenza o corso Calatafimi). Il chiostro e le terrazze hanno biglietti propri.",
        "quando": "Primo mattino, prima dei pullman. Orari variano con le funzioni: controllare prima.",
        "tempo": "2 ore",
        "consiglio": "Salire sulle terrazze per vedere il tetto e Palermo; portare una felpa per il fresco dentro."
      },
      {
        "nome": "Segesta",
        "testo": "Un tempio dorico del quinto secolo avanti Cristo, mai finito, in piedi da solo su una collina in mezzo al niente, con il vento. Più in alto c'è il teatro greco con vista sul golfo di Castellammare.",
        "come": "Da Palermo in auto, per l'autostrada Palermo-Trapani. Il tempio è vicino all'ingresso; per il teatro c'è una navetta o una salita a piedi.",
        "quando": "Mattina o fine pomeriggio. D'estate non c'è ombra: evitare il mezzogiorno.",
        "tempo": "2 ore",
        "costo": "biglietti e pass cumulativi sul sito del Parco archeologico: le tariffe cambiano",
        "consiglio": "Salire al teatro: in cima si capisce perché i Greci lo costruirono qui."
      },
      {
        "nome": "Selinunte",
        "testo": "Il parco archeologico più esteso d'Europa: templi dorici sul mare, l'acropoli, la città con le sue strade. Il Tempio E è stato ricostruito in piedi, gli altri sono giganteschi cumuli di pietre cadute in un terremoto.",
        "come": "In auto da Trapani o da Palermo. Dentro il parco c'è una navetta; si può anche noleggiare una bici.",
        "quando": "Prima mattina o tardo pomeriggio. A mezzogiorno d'estate è vastissimo e senza ombra.",
        "tempo": "3 ore",
        "costo": "biglietti e pass cumulativi sul sito del Parco archeologico: le tariffe cambiano",
        "consiglio": "Finire sulla spiaggia di Marinella, a due passi dai templi."
      },
      {
        "nome": "Erice",
        "testo": "Un borgo medievale a 750 metri sopra Trapani, spesso avvolto dalla nebbia. Vicoli di ciottoli, il castello di Venere in cima, le chiese e le pasticcerie con i dolci di mandorla.",
        "come": "In auto con strada a tornanti da Trapani, oppure con il bus di linea. La funivia Trapani-Erice, quando è in funzione, è il modo più breve.",
        "quando": "La sera, quando i pullman se ne sono andati e resta la nebbia. La nebbia fa parte del posto.",
        "tempo": "mezza giornata",
        "consiglio": "Dormirci una notte per vederla vuota, e portare una felpa anche d'estate."
      },
      {
        "nome": "Saline di Trapani e Marsala, Mozia",
        "testo": "Lo Stagnone e le saline tra Trapani e Marsala: vasche piatte, mulini a vento e montagne di sale. Al centro c'è Mozia, un'isola fenicia con strada punica sommersa e la statua del Giovinetto, raggiungibile in barca.",
        "come": "Auto lungo la Via del Sale. Per Mozia, barchetta dall'imbarcadero di Birgi, pochi minuti. Il museo delle saline sta a Nubia.",
        "quando": "Tramonto, quando l'acqua diventa rosa. Mozia: giornate senza vento forte.",
        "tempo": "mezza giornata",
        "consiglio": "Fermarsi a Marsala per l'omonimo vino: le cantine storiche fanno visite con degustazione."
      },
      {
        "nome": "Riserva dello Zingaro",
        "testo": "La prima riserva naturale istituita in Sicilia, sulla costa tra Scopello e San Vito Lo Capo: sette chilometri di costa senza strade, con calette di ciottoli e acqua limpida, raggiungibili solo a piedi.",
        "come": "Due ingressi: Scopello (a sud) e San Vito Lo Capo (a nord). Si lascia l'auto nei parcheggi dell'ingresso.",
        "quando": "Primavera e autunno; d'estate partire all'apertura e portare acqua. Orari e ingressi vanno controllati.",
        "tempo": "mezza giornata o tutto il giorno",
        "consiglio": "Scarpe da scoglio e maschera: il mare nelle calette è tra i più belli della Sicilia."
      },
      {
        "nome": "San Vito Lo Capo",
        "testo": "Un paese di mare con una spiaggia lunga di sabbia chiara, sotto il Monte Monaco. È anche la città del couscous: ogni settembre c'è il Cous Cous Fest, festival internazionale.",
        "come": "Da Trapani o da Palermo in auto. Parcheggio a pagamento in paese, pieno in estate.",
        "quando": "Giugno e settembre, per il mare e il couscous. A luglio e agosto è pieno.",
        "tempo": "mezza giornata o una notte",
        "consiglio": "Assaggiare il couscous di pesce in un locale con ricetta di famiglia, e prenotare a settembre."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Palazzo dei Normanni e Cappella Palatina all'apertura",
          "Mercato del Capo e Ballarò, pranzo con street food",
          "Pomeriggio: Cattedrale e quartiere della Kalsa",
          "Sera: aperitivo a piazza Marina o a Mondello se è estate"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Palermo, Cappella Palatina e mercati, poi Monreale con il chiostro",
          "Giorno 2: Segesta al mattino, Erice nel pomeriggio, notte a Trapani",
          "Giorno 3: Selinunte presto, poi saline e Marsala, rientro a Palermo"
        ]
      },
      {
        "titolo": "5 giorni",
        "tappe": [
          "Giorno 1: Palermo e mercati",
          "Giorno 2: Monreale al mattino, Palazzo dei Normanni nel pomeriggio",
          "Giorno 3: Segesta, Erice, Trapani",
          "Giorno 4: Mozia e saline, tramonto allo Stagnone",
          "Giorno 5: Zingaro o San Vito Lo Capo, o Selinunte al mattino"
        ]
      }
    ],
    zone: [
      {
        "nome": "Palermo centro storico (Kalsa, Ballarò)",
        "perChi": "chi vuole vivere la città",
        "testo": "Vivace, a piedi da tutto, con ristoranti e mercati vicini. Rumorosa la sera, con strade strette e un po' di degrado in alcune vie. Lasciare l'auto in un parcheggio custodito."
      },
      {
        "nome": "Trapani",
        "perChi": "chi vuole una base per l'ovest",
        "testo": "Vicino a Erice, alle saline, alle Egadi e all'aeroporto di Birgi. Centro storico di tufo con vicoli e il porto per gli aliscafi. Più economica di Palermo."
      },
      {
        "nome": "San Vito Lo Capo",
        "perChi": "mare e Zingaro",
        "testo": "Spiaggia, calette, couscous. Affollatissima ad agosto e con parcheggi difficili; molto più piacevole a giugno e settembre."
      },
      {
        "nome": "Erice",
        "perChi": "una notte di silenzio",
        "testo": "Piccola, medievale, quasi vuota di sera. Pochi alloggi, vento e nebbia. Si fa per una notte, non di più."
      }
    ],
    sapori: [
      {
        "nome": "Arancine",
        "testo": "Palle di riso fritte con ragù o burro e prosciutto. Qui si dice «arancina», al femminile."
      },
      {
        "nome": "Panelle e crocchè",
        "testo": "Frittelle di farina di ceci servite in un panino, con crocchè di patate. Street food puro, da mangiare al mercato."
      },
      {
        "nome": "Sfincione",
        "testo": "Focaccia soffice con cipolla, caciocavallo, acciughe e pomodoro. Si compra dai venditori ambulanti e dai forni."
      },
      {
        "nome": "Pane con la milza",
        "testo": "Panino con milza e polmone di vitello, ai banchi storici; a scelta «schietta» (con limone e sale) o «maritata» (con caciocavallo)."
      },
      {
        "nome": "Pasta con le sarde e cous cous di pesce",
        "testo": "La pasta con sarde, finocchietto selvatico, uvetta e pinoli è un piatto palermitano. Il cous cous di pesce è tipico di Trapani e San Vito."
      },
      {
        "nome": "Cassata e cannoli",
        "testo": "I dolci siciliani per eccellenza: la cassata con ricotta e pasta reale, i cannoli riempiti al momento."
      }
    ],
    attenzioni: [
      "A Palermo c'è una ZTL nel centro storico e le multe arrivano a casa: lasciare l'auto fuori e usare i parcheggi custoditi.",
      "I parcheggiatori abusivi sono diffusi: pagare solo i parcheggi ufficiali o quelli custoditi.",
      "Non lasciare nulla in vista in auto, specie nelle zone urbane e vicino ai siti archeologici.",
      "Borseggi nei mercati e nelle strade affollate: portare lo zaino davanti.",
      "Segesta e Selinunte non hanno ombra: acqua, cappello e visita presto d'estate.",
      "Orari e prezzi dei siti cambiano: controllare sempre i siti ufficiali prima di andare."
    ],
    esperienzeSlugs: ['monreale', 'street-food-palermo'],
    tripSlugs: ['sicilia-completa'],
    imageAlt: 'Il belvedere merlato di Erice sopra un mare di nuvole, con la costa trapanese sullo sfondo',
    immagine: '/images/italia/sicilia-occidentale.jpg',
  },
  {
    slug: 'isole-siciliane',
    paeseSlug: 'italia',
    ordine: 18,
    nome: 'Egadi, Pantelleria e Pelagie',
    tipologia: ['isole', 'mare', 'natura'],
    giorniConsigliati: '4-5 giorni per arcipelago',
    visitataPersonalmente: true,
    introduzione:
      'Le altre isole siciliane, che non sono le Eolie: le **Egadi** davanti a Trapani, con Favignana e le cave di tufo; **Pantelleria**, più vicina all\'Africa che alla Sicilia, senza una spiaggia di sabbia; e le **Pelagie**, con Lampedusa che sta sulla placca africana e ha una delle spiagge più celebrate del Mediterraneo.',
    percheAndarci:
      'Sono tre mondi diversi tra loro e da tutto il resto: Favignana è mare trasparente e archeologia industriale della tonnara, Pantelleria è roccia lavica, vento e vino, Lampedusa è geologicamente Africa e ha un mare che non somiglia a niente in Italia.',
    cosaVedere: [
      'Favignana: Cala Rossa, Cala Azzurra, le **cave di tufo** che hanno scavato l\'isola e l\'ex stabilimento Florio della tonnara',
      'Levanzo, con la **Grotta del Genovese** e le pitture rupestri del Paleolitico',
      'Marettimo, la più selvaggia delle Egadi, senza quasi turismo',
      'Pantelleria: il **Lago Specchio di Venere**, i dammusi, i giardini panteschi e le grotte di vapore naturali',
      'La Montagna Grande e l\'Arco dell\'Elefante a Pantelleria',
      'Lampedusa: la **Spiaggia dei Conigli**, riserva naturale dove depone la tartaruga Caretta caretta, con accesso regolamentato',
      'Linosa, vulcanica e nera, con duecento abitanti',
    ],
    cosaFare: [
      'Girare Favignana in bicicletta: è il modo giusto, e l\'isola è piatta',
      'Bagno notturno nel Lago Specchio di Venere a Pantelleria, con il fango termale sulla riva',
      'Visitare una cantina pantesca, dove la vite si coltiva **in buche scavate nel terreno** per proteggerla dal vento, una tecnica riconosciuta patrimonio immateriale UNESCO',
      'Snorkeling e immersioni: alle Egadi e alle Pelagie sono tra i migliori d\'Italia',
      'La Grotta del Genovese a Levanzo, con le incisioni di dodicimila anni fa',
    ],
    doveDormire:
      'Favignana ha l\'offerta più larga e i prezzi più accessibili. A Pantelleria si dorme nei **dammusi**, le case di pietra lavica con il tetto a cupola, la formula giusta. Lampedusa ha un\'offerta stagionale che chiude quasi del tutto in inverno. **In tutte e tre, ad agosto i posti si esauriscono.**',
    doveMangiare:
      'Alle Egadi il tonno, in tutte le sue conserve: la tonnara di Favignana è stata la più importante del Mediterraneo, e la **mattanza** si praticava fino a pochi decenni fa. A Pantelleria il **pesto pantesco**, i capperi, che qui sono un presidio e si raccolgono a mano, e il **passito di Pantelleria**, uno dei grandi vini dolci del mondo. A Lampedusa il pesce, e una cucina che risente della vicinanza alla Tunisia.',
    comeArrivare:
      '**Egadi:** aliscafo da Trapani, venti minuti per Favignana. **Pantelleria:** aereo da Trapani o Palermo (in stagione anche da Milano e Roma), o traghetto notturno da Trapani, sei ore. **Lampedusa:** aereo da Palermo o Catania, o traghetto da Porto Empedocle, otto ore. Sono le isole italiane più lontane dalla terraferma.',
    comeSpostarsi:
      'Favignana in bicicletta o scooter. **Pantelleria richiede l\'auto**: è grande, montuosa e i punti d\'interesse sono distribuiti. Lampedusa in scooter o auto, ma è piccola.',
    periodoMigliore:
      '**giugno e settembre**, come tutte le isole minori. A Pantelleria la stagione è più lunga e l\'isola funziona anche in primavera e in autunno grazie al vino e al termalismo. Lampedusa da novembre a marzo chiude quasi del tutto.',
    costi:
      'La voce principale sono i trasporti, e non è da poco: Pantelleria e Lampedusa richiedono un volo o un traghetto lungo. **La Spiaggia dei Conigli a Lampedusa ha accesso regolamentato e contingentato** per la nidificazione delle tartarughe: conviene informarsi prima.',
    erroriDaEvitare: [
      'Andare a Pantelleria cercando spiagge di sabbia: **non ce ne sono**. Si entra in acqua dalle rocce, e chi non lo sa resta deluso',
      'Sottovalutare il vento a Pantelleria: è una costante e può essere forte per giorni',
      'Presentarsi alla Spiaggia dei Conigli senza conoscere le regole di accesso, che è contingentato',
      'Programmare coincidenze strette con i traghetti per Pantelleria e Lampedusa, che con il mare mosso non partono',
      'Fare Favignana in auto: è piatta, piccola e l\'auto è un impiccio: la bici è il mezzo giusto',
      'Andare a Lampedusa fuori stagione aspettandosi servizi: da novembre a marzo l\'isola si ferma',
    ],
    confronti: [
      {
        titolo: 'Favignana, Pantelleria o Lampedusa',
        introduzione:
          'Vengono messe insieme perché sono tutte «isole siciliane», ma sono tre viaggi del tutto diversi per geologia, accessibilità, costo e tipo di vacanza.',
        opzioni: [
          {
            nome: 'Favignana e le Egadi',
            sintesi: 'Venti minuti di aliscafo da Trapani: isola piatta, mare trasparente, cave di tufo e l\'archeologia industriale della tonnara Florio.',
            costo: 'il più basso dei tre, sia per arrivare che per stare',
            durata: '3-4 giorni',
            pro: [
              'Accessibilità: si arriva in venti minuti da Trapani, anche in giornata',
              'Si gira in bicicletta: l\'isola è piatta e piccola',
              'Cala Rossa e Cala Azzurra hanno un\'acqua che regge qualsiasi confronto',
              'Le **cave di tufo** sono uno scenario che non si trova altrove: l\'isola è stata scavata, e oggi ci sono giardini ipogei dentro le cave',
              'Levanzo con le pitture rupestri del Paleolitico è a venti minuti',
            ],
            contro: [
              'Molto affollata a luglio e agosto: è l\'isola dei siciliani e in quei mesi lo si vede',
              'Poche spiagge di sabbia, si entra in acqua dagli scogli',
              'Poca vita oltre il mare',
            ],
            perChi: 'Chi ha pochi giorni, chi viene dalla Sicilia occidentale, chi vuole spendere poco.',
          },
          {
            nome: 'Pantelleria',
            sintesi: 'Più vicina all\'Africa che alla Sicilia: isola vulcanica di roccia nera, senza spiagge di sabbia, con i dammusi, il vento costante e una viticoltura eroica.',
            costo: 'medio-alto, ma senza turismo di massa',
            durata: '5-7 giorni',
            pro: [
              'Non somiglia a nessun\'altra isola italiana: terrazzamenti di pietra lavica, **giardini panteschi** (muri circolari che proteggono un solo albero), grotte di vapore naturali',
              'La **vite ad alberello pantesca** è patrimonio immateriale UNESCO: si coltiva in buche scavate nel terreno per proteggerla dal vento',
              'Il passito e i capperi sono tra i prodotti migliori d\'Italia',
              'Il Lago Specchio di Venere con il fango termale e il bagno notturno',
              'Turismo di ritorno, non di massa: ci si torna',
            ],
            contro: [
              '**Nessuna spiaggia di sabbia**: si entra in acqua dalle rocce, e per molti è un problema serio',
              'Il vento è una costante e può soffiare forte per giorni',
              'Serve l\'auto: l\'isola è grande e montuosa',
              'Collegamenti meno frequenti e più cari',
            ],
            perChi: 'Chi cerca un\'isola di carattere invece che di spiagge, chi ama il vino, chi torna.',
          },
          {
            nome: 'Lampedusa e le Pelagie',
            sintesi: 'L\'isola più a sud d\'Italia, geologicamente sulla **placca africana**, con la Spiaggia dei Conigli e un mare che non somiglia a niente nel resto del paese.',
            costo: 'alto, soprattutto per arrivarci',
            durata: '5-7 giorni',
            pro: [
              'Il mare è il più bello d\'Italia: acqua trasparente su fondali chiari, con gradazioni che si vedono dall\'alto',
              'La **Spiaggia dei Conigli** è riserva naturale e sito di nidificazione della Caretta caretta',
              'Geologicamente è Africa: la vegetazione, la roccia e il paesaggio non sono mediterranei nel senso italiano',
              'Linosa, vulcanica e nera, a poche miglia, con duecento abitanti',
            ],
            contro: [
              'La più difficile da raggiungere: volo o otto ore di traghetto da Porto Empedocle',
              'Prezzi alti in alta stagione, con la stagione concentrata in tre mesi',
              'Da novembre a marzo l\'isola si ferma quasi del tutto',
              'L\'accesso alla Spiaggia dei Conigli è contingentato e regolamentato',
              'Isola brulla: chi cerca verde non la trova',
            ],
            perChi: 'Chi mette il mare al primo posto e accetta il costo e la distanza per averlo al massimo livello.',
          },
        ],
        raccomandazione:
          'Per il mare puro e senza compromessi, **Lampedusa**: è il più bello d\'Italia e vale il viaggio, a patto di andarci a giugno o a settembre e di mettere in conto il costo. Per un\'isola che abbia un carattere proprio e una cultura da capire, **Pantelleria**, sapendo che non ci sono spiagge di sabbia. **Favignana** è la scelta giusta per chi è già in Sicilia occidentale e ha tre giorni: costa poco, si arriva in venti minuti e non delude.',
      },
    ],
    miaEsperienza:
      'Queste tre isole spiegano bene quanto sia larga la parola «Sicilia». Favignana è la più semplice e la più immediata: si arriva in venti minuti da Trapani, si noleggia una bici e in un giorno si è girata tutta, con l\'acqua di Cala Rossa di un turchese che non sembra italiano. A renderla diversa dalle altre isole è il tufo: per secoli qui si è scavata pietra da costruzione, e il risultato è un paesaggio di cave a cielo aperto, con pareti verticali gialle e, dentro alcune, giardini ipogei piantati sul fondo. Pantelleria è l\'opposto esatto e l\'isola che ho trovato più interessante: niente sabbia, roccia nera ovunque, vento che non smette mai, e una viticoltura in cui le viti crescono dentro buche scavate nel terreno per ripararle, una tecnica così particolare da essere stata riconosciuta patrimonio immateriale dall\'UNESCO. Il bagno notturno nello Specchio di Venere, con il fango termale, è una di quelle cose che nessuno racconta prima. Lampedusa infine ha il mare più bello d\'Italia, senza discussione; ma è geologicamente Africa, brulla, lontana e cara, e ci si va per quello e solo per quello.',
    luoghi: [
      {
        "nome": "Favignana: cale e Ex Stabilimento Florio",
        "testo": "Un'isola a forma di farfalla, piatta e scavata dalle cave di tufo. Cala Rossa e Cala Azzurra hanno acqua trasparente su roccia bianca. In paese l'ex stabilimento Florio, la tonnara ottocentesca, racconta la mattanza, oggi non più praticata.",
        "come": "Aliscafo da Trapani. Sull'isola si noleggia una bicicletta: le distanze sono brevi.",
        "quando": "Giugno e settembre. Mattina per le cale, pomeriggio per il museo. Ad agosto è affollata.",
        "tempo": "2 giorni",
        "consiglio": "Portare scarpe di gomma: quasi nessuna cala è di sabbia, si entra dalla roccia."
      },
      {
        "nome": "Cave di tufo e giardini ipogei",
        "testo": "L'isola per secoli è stata una cava: pietre da costruzione di mezza Sicilia occidentale sono uscite da qui. Il risultato sono voragini a pareti verticali, alcune diventate giardini ipogei, riparati dal vento, con agrumi e piante.",
        "come": "In bicicletta, con segnalazioni lungo le strade secondarie. Alcune cave sono visitabili con gestori privati.",
        "quando": "Mattina o fine pomeriggio; d'estate le cave danno ombra e freschezza.",
        "tempo": "1-2 ore",
        "consiglio": "Chiedere in paese quali giardini sono aperti: orari e ingressi cambiano da cava a cava."
      },
      {
        "nome": "Levanzo e Grotta del Genovese",
        "testo": "La più piccola delle tre Egadi maggiori, con un solo paese di pescatori. La Grotta del Genovese conserva incisioni e pitture del Paleolitico superiore e del Neolitico.",
        "come": "Aliscafo da Trapani o da Favignana. La grotta si raggiunge a piedi o in barca e si visita con una guida.",
        "quando": "Giugno e settembre. La visita è su prenotazione e a gruppi limitati: organizzarsi al mattino.",
        "tempo": "mezza giornata",
        "url": "https://www.ampisoleegadi.it/",
        "consiglio": "Prenotare la visita alla grotta il giorno prima, e portare scarpe chiuse per il sentiero."
      },
      {
        "nome": "Marettimo",
        "testo": "La più selvaggia e remota delle Egadi, quasi senza turismo, con un unico paese di case bianche e un entroterra di sentieri. Le grotte marine si vedono in barca.",
        "come": "Aliscafo da Trapani (più lungo di quello per Favignana) o traghetto. Si gira a piedi e in barca.",
        "quando": "Giugno e settembre. Con mare mosso le corse saltano.",
        "tempo": "1-2 giorni",
        "consiglio": "Il giro delle grotte in barca è l'esperienza principale; concordare il prezzo con il barcaiolo."
      },
      {
        "nome": "Pantelleria: Lago Specchio di Venere e dammusi",
        "testo": "Isola vulcanica più vicina alla Tunisia che alla Sicilia. Il Lago Specchio di Venere è un lago in un cratere, con fanghi termali sulla riva. I dammusi sono case in pietra lavica con il tetto a cupola, e la vite si coltiva ad alberello in buche scavate nel terreno, tecnica patrimonio UNESCO.",
        "come": "Aereo da Trapani, Palermo o in stagione dal continente, oppure traghetto notturno da Trapani. Sull'isola serve l'auto, da prenotare in anticipo.",
        "quando": "Primavera e settembre. Il lago al tramonto, con il fango già caldo. Il vento è una costante.",
        "tempo": "4-5 giorni",
        "url": "https://www.parconazionalepantelleria.it/",
        "consiglio": "Non cercare spiagge di sabbia: non ce ne sono, si entra in acqua dalle rocce o dai laghetti termali."
      },
      {
        "nome": "Pantelleria: Montagna Grande e giardini panteschi",
        "testo": "La Montagna Grande è il punto più alto dell'isola, con boschi di pino e sentieri. I giardini panteschi sono muri circolari di pietra a secco che proteggono un solo albero d'arancio dal vento.",
        "come": "In auto fino alla base della Montagna Grande e poi a piedi. I giardini si vedono lungo le strade interne e in alcune aziende agricole.",
        "quando": "Mattina. Vento forte e fresco in quota anche d'estate.",
        "tempo": "mezza giornata",
        "consiglio": "Visitare una cantina e provare il passito: le visite si prenotano."
      },
      {
        "nome": "Lampedusa: Spiaggia dei Conigli",
        "testo": "Una spiaggia di sabbia chiara e acqua turchese dentro una riserva naturale, dove depone la tartaruga Caretta caretta. L'isola sta sulla placca africana. L'accesso è regolamentato per proteggere i nidi.",
        "come": "Aereo da Palermo o Catania, oppure nave da Porto Empedocle, con una traversata lunga. Dal paese in scooter o in auto fino al parcheggio, poi a piedi.",
        "quando": "Giugno e settembre. In alta stagione l'accesso può essere contingentato e a prenotazione.",
        "tempo": "mezza giornata",
        "url": "https://www.ampisolepelagie.it/",
        "consiglio": "Informarsi sulle regole di accesso della stagione prima di partire e arrivare presto al mattino."
      },
      {
        "nome": "Linosa",
        "testo": "Un'isola vulcanica nera, a metà strada tra Lampedusa e la Sicilia, con poche centinaia di abitanti. Case dai colori vivaci, spiagge di lava e acque limpide per snorkeling.",
        "come": "Nave dalla Sicilia o aliscafo da Lampedusa in stagione. Si gira a piedi in un giorno.",
        "quando": "Giugno e settembre; fuori stagione i collegamenti sono radi.",
        "tempo": "1 giorno o una notte",
        "consiglio": "Controllare gli orari di ritorno prima di partire: con il mare mosso le corse saltano."
      }
    ],
    programmi: [
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: aliscafo da Trapani a Favignana, bici verso Cala Rossa e le cale dell'ala orientale",
          "Giorno 2: ex stabilimento Florio al mattino, cave di tufo nel pomeriggio, cena di tonno",
          "Giorno 3: Levanzo e Grotta del Genovese su prenotazione, rientro a Trapani in aliscafo"
        ]
      },
      {
        "titolo": "5 giorni",
        "tappe": [
          "Giorno 1: volo o traghetto notturno per Pantelleria, ritiro auto",
          "Giorno 2: Lago Specchio di Venere e fanghi, bagni lungo la costa",
          "Giorno 3: Montagna Grande, giardini panteschi e cantina",
          "Giorno 4: giro dei dammusi e dei laghetti termali, cena con ravioli di ricotta e menta",
          "Giorno 5: rientro con margine su vento e mare"
        ]
      },
      {
        "titolo": "7 giorni",
        "tappe": [
          "Giorno 1-2: Lampedusa, Spiaggia dei Conigli con le regole della stagione",
          "Giorno 3: giro in barca intorno all'isola",
          "Giorno 4: Linosa in giornata o con una notte",
          "Giorno 5-6: rientro a Palermo o Porto Empedocle, poi Egadi o Pantelleria",
          "Giorno 7: margine per il mare mosso"
        ]
      }
    ],
    zone: [
      {
        "nome": "Favignana (paese e Cala Rossa)",
        "perChi": "chi arriva dal continente in giornata o per pochi giorni",
        "testo": "L'offerta più larga e i prezzi più accessibili delle tre isole. Ad agosto è piena e rumorosa; si gira in bici da qualsiasi alloggio."
      },
      {
        "nome": "Pantelleria (Khamma e Scauri)",
        "perChi": "chi cerca dammusi e quiete",
        "testo": "Dormire in un dammuso in campagna, lontano dal porto, con giardino e muri di lava. Serve l'auto per tutto e si cena nei posti vicini."
      },
      {
        "nome": "Lampedusa paese",
        "perChi": "chi cerca mare e servizi",
        "testo": "Alloggi stagionali vicini a porto e spiagge. Da novembre a marzo chiude quasi tutto. Si noleggia lo scooter per le spiagge più lontane."
      },
      {
        "nome": "Levanzo o Marettimo",
        "perChi": "chi vuole silenzio",
        "testo": "Pochi letti, pochi ristoranti, nessuna vita notturna. Sono isole da una notte tranquilla, con le corse che dipendono dal mare."
      }
    ],
    sapori: [
      {
        "nome": "Tonno delle Egadi",
        "testo": "La tonnara di Favignana è stata tra le più importanti del Mediterraneo. Si mangia fresco e in conserva: ventresca, bottarga, mosciame."
      },
      {
        "nome": "Pesto pantesco",
        "testo": "Salsa cruda di pomodoro, mandorle, basilico e aglio, spesso su pasta. Si trova a Pantelleria."
      },
      {
        "nome": "Ravioli di ricotta e menta",
        "testo": "Ravioli amari con ricotta e menta, tipici di Pantelleria, conditi con sugo di pomodoro."
      },
      {
        "nome": "Capperi di Pantelleria",
        "testo": "Presidio Slow Food, raccolti a mano e conservati sotto sale. Hanno un profumo più forte degli altri."
      },
      {
        "nome": "Passito di Pantelleria",
        "testo": "Vino dolce e ambrato da uva Zibibbo, tra i grandi vini dolci del mondo. Si assaggia in cantina."
      }
    ],
    attenzioni: [
      "Con il mare mosso traghetti e aliscafi non partono, specie per Pantelleria e Lampedusa: prevedere un margine e non prenotare un volo il giorno stesso.",
      "Alla Spiaggia dei Conigli l'accesso è regolamentato per proteggere le tartarughe: informarsi sulle regole della stagione e non portare via sabbia o conchiglie.",
      "La Grotta del Genovese si visita solo con guida e su prenotazione: non contare sull'ingresso libero.",
      "A Pantelleria si cerca un'auto con anticipo, perché i mezzi disponibili sono pochi in stagione.",
      "L'acqua dolce è scarsa su Pantelleria, Lampedusa e le isole minori: consumarla con misura.",
      "Il vento è costante a Pantelleria: scegliere calette riparate e controllare le previsioni."
    ],
    esperienzeSlugs: ['passito-pantelleria'],
    tripSlugs: ['isole-siciliane'],
    imageAlt: 'L\'acqua turchese e gli scogli bassi di Lido Burrone a Favignana, Isole Egadi',
    immagine: '/images/italia/isole-siciliane.jpg',
  },
]
