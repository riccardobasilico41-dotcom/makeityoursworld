import type { Destinazione } from '@/lib/types'

// Prima uscita spagnola dell'archivio. Tutte e tredici le destinazioni sono
// tappe dei quattro viaggi fatti da Rick (Andalusia, Nord, Baleari, Canarie):
// visitataPersonalmente è true su tutte. Il campo miaEsperienza resta assente finché non arriva un ricordo dell'autore. Nessun nome di hotel
// o ristorante specifico è stato inventato. Prezzi, orari e regole di
// prenotazione (Alhambra, Teide, Guggenheim) cambiano spesso e vanno
// riverificati sui canali ufficiali prima di partire.
//
// Ordine: Andalusia (1-4, la regione del trip principale), Nord (5-7),
// Baleari (8-10), Canarie (11-13) — coerente con l'ordine delle quattro
// regioni descritto in paesi/spagna.ts.

export const destinazioniSpagna: Destinazione[] = [
  // --- ANDALUSIA (Sud) ---
  {
    slug: 'siviglia',
    paeseSlug: 'spagna',
    ordine: 1,
    nome: 'Siviglia',
    tipologia: ['città', 'cultura moresca', 'flamenco'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La capitale dell\'Andalusia, sul Guadalquivir. Qui otto secoli di dominio moresco convivono con la Siviglia barocca e, sull\'altra riva, con il quartiere gitano di Triana, dove il flamenco è nato per strada prima di diventare spettacolo.',
    percheAndarci:
      'In un centro che si gira a piedi ci sono la cattedrale gotica più grande del mondo, il palazzo moresco-cristiano più bello di Spagna dopo l\'Alhambra e il quartiere dove il flamenco è ancora una tradizione di casa, oltre che tablao per turisti.',
    cosaVedere: [
      'La Cattedrale di Siviglia, la più grande chiesa gotica del mondo, costruita sopra l\'antica moschea almohade: dentro, la tomba di Cristoforo Colombo',
      'La Giralda, l\'antico minareto della moschea trasformato in campanile, con la rampa (non scale) che sale fino in cima',
      'Il Real Alcázar, palazzo reale ancora in uso, capolavoro dello stile mudéjar con i suoi patii, giardini e la Sala degli Ambasciatori',
      'Il Barrio de Santa Cruz, l\'ex quartiere ebraico, un dedalo di vicoli stretti e patii fioriti',
      'Triana, il quartiere al di là del fiume, culla del flamenco e della ceramica sivigliana',
      'La Plaza de España, costruita per l\'Esposizione Iberoamericana del 1929, con il canale navigabile e le piastrelle che rappresentano ogni provincia spagnola',
    ],
    cosaFare: [
      'Salire sulla Giralda al mattino presto, prima del caldo e della folla',
      'Un giro nei patii di Triana e sul Mercado de Triana, il mercato coperto sul lungofiume',
      'Assistere a uno spettacolo di flamenco in un tablao acustico, senza amplificazione, invece che in uno dei grandi locali per gruppi turistici',
      'Passeggiata serale lungo il Guadalquivir, quando il caldo estivo cala',
    ],
    doveDormire: 'Il Barrio de Santa Cruz è il quartiere più centrale e turistico; Triana è più di quartiere e costa un po\' meno, a pochi minuti a piedi dal centro attraverso il Puente de Triana.',
    doveMangiare:
      'Il tapeo (giro di tapas tra più bar) è l\'istituzione locale: salmorejo (crema fredda di pomodoro, più densa del gazpacho), espinacas con garbanzos, il pescaíto frito (fritto misto di pesce) e il jamón ibérico. A Triana i bar del mercato coperto sono il modo più economico per iniziare la serata.',
    comeArrivare: 'Aeroporto di San Pablo, a circa 10 km dal centro (bus EA o taxi). Treno AVE ad alta velocità da Madrid in circa 2h30.',
    comeSpostarsi: 'Il centro storico si gira quasi interamente a piedi; per le distanze maggiori, bus urbani e il tram (linea T1) lungo l\'asse centrale.',
    periodoMigliore:
      'marzo-maggio e ottobre-inizio novembre, con temperature gradevoli. Da evitare luglio-agosto: Siviglia è fra le città più calde di Spagna, con medie spesso sopra i 36°C e picchi ben oltre. La Settimana Santa e la Feria de Abril (due settimane dopo Pasqua) portano folla e prezzi alti, ma sono anche i giorni in cui la città vive le sue tradizioni più sentite.',
    costi: 'Cattedrale e Giralda circa 15€; Real Alcázar circa 15,50€ (Appartamenti Reali +5,50€, gratuito la sera con prenotazione in una fascia oraria dedicata); un tablao di flamenco medio 35-45€ a persona.',
    erroriDaEvitare: [
      'Sottovalutare il caldo estivo: da giugno a settembre le ore centrali della giornata vanno evitate per qualsiasi attività all\'aperto',
      'Scegliere il primo tablao pubblicizzato in centro senza controllarne la reputazione: i locali più turistici fanno spettacoli standard e amplificati, lontani dal flamenco dei quartieri',
      'Salire sulla Giralda a metà giornata in alta stagione: le code sotto il sole possono essere lunghe',
    ],
    esperienzeSlugs: ['flamenco-triana', 'tapeo-siviglia'],
    tripSlugs: ['andalusia-itinerario'],
    imageAlt: 'La Giralda e le guglie della Cattedrale di Siviglia accanto a una torre delle mura del Real Alcázar',
    immagine: '/images/spagna/siviglia.jpg',
  },
  {
    slug: 'granada',
    paeseSlug: 'spagna',
    ordine: 2,
    nome: 'Granada',
    tipologia: ['città', 'cultura moresca', 'montagna'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'L\'ultima capitale del regno moresco di al-Andalus, caduta nel 1492. L\'Alhambra la domina dalla collina e intorno ci sono le vette innevate della Sierra Nevada: in certi periodi dell\'anno è l\'unico posto in Europa dove si può sciare al mattino e stare in spiaggia il pomeriggio.',
    percheAndarci:
      'Per l\'Alhambra, uno dei monumenti più visitati al mondo e per molti il motivo principale di un viaggio in Andalusia. Poi c\'è l\'Albaicín, il quartiere moresco che le sta di fronte, e una vita studentesca che rende Granada più economica e più giovane delle altre città andaluse.',
    cosaVedere: [
      'L\'Alhambra: i Palazzi Nazridi (Palacio de Comares e Palacio de los Leones, con il celebre Patio de los Leones), l\'Alcazaba, la fortezza più antica, e il Generalife, i giardini estivi dei sultani',
      'L\'Albaicín, il quartiere moresco patrimonio UNESCO con l\'antico impianto arabo di vicoli e carmens (case con giardino recintato)',
      'Il Mirador de San Nicolás, il punto panoramico sull\'Alhambra con la Sierra Nevada innevata sullo sfondo, soprattutto al tramonto',
      'La Cattedrale rinascimentale e la Capilla Real, dove sono sepolti i Re Cattolici Ferdinando e Isabella',
      'Il Sacromonte, il quartiere delle case-grotta abitate storicamente dalla comunità gitana, cuore di una tradizione di flamenco propria (la zambra)',
    ],
    cosaFare: [
      'Prenotare i biglietti dell\'Alhambra con largo anticipo (vedi la scheda esperienza dedicata): dimenticarsene è l\'errore più comune di chi visita Granada',
      'Passeggiare per l\'Albaicín senza meta fissa, tra i carmens e le piccole moschee',
      'Salire al Mirador de San Nicolás al tramonto per la vista classica sull\'Alhambra',
      'Una zambra di flamenco in una delle case-grotta del Sacromonte',
      'Il tapeo granadino: qui, a differenza di quasi tutto il resto di Spagna, la tapa arriva gratis con ogni consumazione',
    ],
    doveDormire: 'L\'Albaicín per l\'atmosfera e la vista, con salite ripide da mettere in conto; il centro intorno alla Cattedrale per comodità e vita notturna.',
    doveMangiare:
      'Granada è tra le poche città spagnole dove la tapa è ancora gratuita con ogni bevanda ordinata: un giro di birre nei bar del centro o di Calle Navas equivale a una cena leggera. Da provare il remojón granadino (insalata di arancia, baccalà e olive) e i piatti della tradizione morisca con spezie come cumino e cannella.',
    comeArrivare: 'Aeroporto Federico García Lorca, circa 15 km dal centro. Treno AVE da Madrid in circa 3h10-3h30; bus diretto da Siviglia (circa 3h) o da Córdoba (circa 2h).',
    comeSpostarsi: 'Centro storico e Albaicín solo a piedi (salite ripide); minibus locali per le zone più alte del Sacromonte e dell\'Albaicín; l\'Alhambra si raggiunge a piedi in salita dal centro o con un bus navetta dedicato.',
    periodoMigliore: 'aprile-giugno e settembre-ottobre. L\'estate è calda ma meno estrema che a Siviglia grazie alla quota (circa 700 metri) e alla vicinanza della Sierra Nevada; l\'inverno è freddo, con la neve visibile sulle vette a pochi km dalla città.',
    costi: 'Alhambra generale circa 19,60€ (i biglietti si esauriscono con settimane, in alta stagione anche mesi, di anticipo); Cattedrale e Capilla Real circa 7€ ciascuna.',
    erroriDaEvitare: [
      'Arrivare a Granada senza aver già prenotato l\'Alhambra: i biglietti si vendono solo online fino a tre mesi prima e in alta stagione (giugno-settembre e vacanze) si esauriscono con settimane di anticipo',
      'Sottovalutare le salite dell\'Albaicín e del Sacromonte: sono ripide e acciottolate, poco comode con bagagli o scarpe non adatte',
      'Prenotare uno spettacolo di flamenco senza informarsi: nel Sacromonte convivono zambras autentiche e format molto turistici allo stesso prezzo',
    ],
    esperienzeSlugs: ['alhambra-visita', 'zambra-sacromonte'],
    tripSlugs: ['andalusia-itinerario'],
    imageAlt: 'L\'Alhambra di Granada con il Palazzo di Carlo V e le torri nazarí illuminate dalla luce dell\'alba, con la Sierra Nevada sullo sfondo',
    immagine: '/images/spagna/granada.jpg',
  },
  {
    slug: 'cordoba',
    paeseSlug: 'spagna',
    ordine: 3,
    nome: 'Córdoba',
    tipologia: ['città', 'cultura moresca'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Nel X secolo, sotto il Califfato omayyade, Córdoba era la città più popolosa e più colta dell\'Europa occidentale, dove convivevano cultura islamica, ebraica e cristiana. Ne resta il monumento più spiazzante d\'Andalusia: la Mezquita, una foresta di oltre ottocento colonne di marmo e onice con una cattedrale rinascimentale costruita proprio nel mezzo.',
    percheAndarci:
      'Per la Mezquita-Catedral, uno spazio che le foto non rendono: si attraversa la foresta di colonne e di archi bicolori a doppio livello e al centro ci si trova davanti a una navata gotica innestata di forza nella moschea. Delle quattro città andaluse è la più compatta, la più facile da vedere in un giorno.',
    cosaVedere: [
      'La Mezquita-Catedral, con il Mihrab (la nicchia di preghiera più preziosa dell\'arte islamica occidentale) e la Capilla Mayor rinascimentale al centro della sala a colonne',
      'L\'Alcázar de los Reyes Cristianos, la fortezza-palazzo dei Re Cattolici con i giardini a terrazze',
      'La Judería, l\'antico quartiere ebraico, con la Sinagoga medievale (una delle tre rimaste in Spagna) e le vie strette intorno a Calleja de las Flores',
      'Il Ponte Romano sul Guadalquivir, con la Torre della Calahorra all\'estremità opposta',
      'I Patios de Córdoba, i cortili interni fioriti tipici della città, protagonisti del Festival dei Patios a maggio (patrimonio culturale immateriale UNESCO)',
    ],
    cosaFare: [
      'Visitare la Mezquita presto al mattino, quando è gratuita per i residenti dalle 8:30 alle 9:30 e comunque meno affollata',
      'Perdersi nella Judería tra Calleja de las Flores e la Sinagoga',
      'Se il viaggio cade a maggio, seguire il percorso dei Patios de Córdoba aperti al pubblico',
      'Attraversare il Ponte Romano al tramonto per la vista classica sulla Mezquita',
    ],
    doveDormire: 'La Judería per la vicinanza alla Mezquita; il centro moderno intorno a Plaza de las Tendillas per prezzi più contenuti.',
    doveMangiare: 'Il salmorejo è nato qui, più denso del gazpacho sivigliano; il rabo de toro (coda di toro brasata) e il flamenquín (involtino di prosciutto e formaggio fritto) sono i piatti simbolo della cucina cordovana.',
    comeArrivare: 'Treno AVE da Madrid in circa 1h40-2h, da Siviglia in circa 45 minuti, da Málaga in circa 1h: è uno degli snodi meglio collegati dell\'alta velocità andalusa.',
    comeSpostarsi: 'Il centro storico è piccolo e si gira tutto a piedi.',
    periodoMigliore:
      'marzo-maggio (col Festival dei Patios a maggio) e ottobre. Córdoba è, con Siviglia, la città più calda di Spagna: da metà luglio a fine agosto molte attrazioni riducono gli orari per il caldo, che qui ha toccato il record spagnolo di 47,6°C nell\'agosto 2021.',
    costi: 'Mezquita-Catedral circa 15€ (visita notturna 18€; gratuita nei giorni feriani 8:30-9:30); Alcázar de los Reyes Cristianos circa 7€.',
    erroriDaEvitare: [
      'Programmare una visita a mezzogiorno in piena estate: tra metà luglio e fine agosto va evitato ogni spostamento nelle ore centrali',
      'Trattare Córdoba come una mezza giornata frettolosa tra Siviglia e Granada: la sola Mezquita merita almeno 2 ore con calma',
      'Perdersi il Festival dei Patios se il viaggio cade a maggio: va programmato per tempo, perché i cortili aperti hanno orari limitati',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['andalusia-itinerario'],
    imageAlt: 'La foresta di colonne e archi bicolori rossi e bianchi dentro la Mezquita di Córdoba',
    immagine: '/images/spagna/cordoba.jpg',
  },
  {
    slug: 'ronda-pueblos-blancos',
    paeseSlug: 'spagna',
    ordine: 4,
    nome: 'Ronda e i pueblos blancos',
    tipologia: ['montagna', 'borghi', 'natura'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Ronda è il più scenografico dei «pueblos blancos», i borghi bianchi dell\'entroterra andaluso. Sta sui due lati del Tajo, una gola profonda oltre 100 metri, uniti dal Puente Nuevo del XVIII secolo. È la montagna dopo le città moresche della pianura, ed è la culla della tauromachia moderna.',
    percheAndarci:
      'È la vista più fotografata d\'Andalusia dopo l\'Alhambra, e rallenta un itinerario fatto di grandi città: si cammina sull\'orlo di un canyon, si visita l\'arena più antica di Spagna ancora in uso e ci si ferma nelle cantine della zona.',
    cosaVedere: [
      'Il Puente Nuevo, il ponte in pietra che scavalca la gola del Tajo a oltre 100 metri di altezza',
      'La Plaza de Toros de Ronda, tra le arene più antiche di Spagna (1785), con il museo della tauromachia',
      'Il Mirador de Aldehuela e il sentiero che scende nella gola per la vista dal basso sul ponte',
      'La Ciudad, il quartiere moresco più antico, sul lato opposto del ponte rispetto al centro moderno',
      'I bagni arabi (Baños Árabes), tra i meglio conservati di Spagna',
    ],
    cosaFare: [
      'Camminare sul Puente Nuevo e scendere nel sentiero del Mirador de Aldehuela per la prospettiva dal fondo della gola',
      'Un giro di degustazione nelle cantine della zona vinicola di Ronda, meno nota di altre in Andalusia ma con una qualità in crescita',
      'Estendere la visita a uno o due pueblos blancos vicini come Setenil de las Bodegas (case scavate sotto gli speroni di roccia) o Grazalema, nel parco naturale omonimo',
    ],
    doveDormire: 'Il centro storico di Ronda, vicino al Puente Nuevo, per la vista e la comodità; in alternativa un agriturismo o una masía nella campagna intorno, per chi vuole rallentare ancora.',
    doveMangiare: 'La cucina di montagna andalusa: rabo de toro, cordero (agnello) alla brace e formaggi di capra locali, spesso accompagnati dai vini della denominazione Sierras de Málaga.',
    comeArrivare: 'In auto da Siviglia (circa 2h) o da Málaga (circa 1h30) attraverso la Serranía de Ronda; treno regionale da Málaga (circa 2h, panoramico) o da Algeciras.',
    comeSpostarsi: 'Il centro si gira a piedi; per i pueblos blancos vicini serve un\'auto, i collegamenti bus tra borghi sono scarsi e lenti.',
    periodoMigliore: 'aprile-giugno e settembre-ottobre, con temperature più miti che nella pianura del Guadalquivir grazie alla quota (circa 750 metri).',
    costi: 'Plaza de Toros e museo circa 10€; Puente Nuevo e Mirador liberi; bagni arabi circa 3,50€.',
    erroriDaEvitare: [
      'Farla in giornata da Siviglia senza pernottare: il tragitto (circa 2h a tratta) rende la visita frettolosa se non ci si ferma almeno una notte',
      'Guidare tra i pueblos blancos senza mettere in conto strade di montagna strette e tornanti',
      'Sottovalutare il vento sul Puente Nuevo: nella gola le correnti possono essere forti, soprattutto in inverno',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['andalusia-itinerario'],
    imageAlt: 'Il Puente Nuevo di Ronda sopra la gola del Tajo, con le case bianche affacciate sul bordo della rupe',
    immagine: '/images/spagna/ronda-pueblos-blancos.jpg',
  },

  // --- NORD (Paesi Baschi, Cantabria, Asturie, Galizia) ---
  {
    slug: 'san-sebastian',
    paeseSlug: 'spagna',
    ordine: 5,
    nome: 'San Sebastián (Donostia)',
    tipologia: ['città', 'gastronomia', 'mare'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La città basca sulla baia a conchiglia della Concha, con più stelle Michelin per abitante di qualsiasi altra città al mondo e la cultura del pintxo (lo spuntino da bar basco) più fitta di Spagna. È l\'opposto dell\'Andalusia: clima fresco, atmosfera raccolta e un\'identità basca, di lingua e di cultura, ben distinta dal resto del paese.',
    percheAndarci:
      'Per il modo di mangiare. Qui il pasto vero si fa girando i bar della Parte Vieja, un pintxo e un bicchiere per locale: i baschi lo chiamano txikiteo ed è un rito sociale prima che gastronomico. È il motivo principale per venire in città.',
    cosaVedere: [
      'La Parte Vieja, il centro storico con la più alta densità di bar da pintxos della città',
      'La Playa de la Concha, la spiaggia urbana a forma di conchiglia considerata fra le più belle d\'Europa',
      'Il Monte Igueldo, raggiungibile con una funicolare storica, per la vista sulla baia',
      'L\'Isla de Santa Clara, al centro della baia, raggiungibile in barca in estate',
      'Il Peine del Viento (Pettine del Vento), la scultura di Eduardo Chillida incastonata nelle rocce a fine Concha',
    ],
    cosaFare: [
      'Un giro di pintxos nella Parte Vieja seguendo la regola locale: un bar, una specialità, un bicchiere di txakoli o sidra, poi si cambia locale',
      'Salita al Monte Igueldo in funicolare per il tramonto sulla baia',
      'Nuotata alla Playa de la Concha nei mesi estivi',
      'Estensione di mezza giornata a Getaria o Zarautz, i paesi costieri poco fuori città noti per il pesce alla brace e il surf',
    ],
    doveDormire: 'La Parte Vieja per stare in mezzo ai bar da pintxos, ma la sera è rumorosa; Gros, oltre il fiume Urumea, è più tranquillo e vicino alla spiaggia di Zurriola, quella del surf.',
    doveMangiare:
      'Il txikiteo nella Parte Vieja è l\'esperienza in sé (vedi la scheda esperienza dedicata): un bar, una specialità, un bicchiere di txakoli (vino bianco basco leggermente frizzante) o sidra, poi si passa al bar successivo. Regola non scritta: si mangia in piedi al bancone, si prende il pintxo con le mani, si paga a fine giro dichiarando all\'oste cosa si è consumato.',
    comeArrivare: 'Aeroporto di San Sebastián (piccolo, pochi voli) o, più spesso, aeroporto di Bilbao (circa 1h20 in bus). Treno da Madrid (circa 5h) o Barcellona; in auto, circa 20 minuti dal confine francese.',
    comeSpostarsi: 'Il centro si gira a piedi; bus urbani per le zone periferiche e le spiagge più lontane.',
    periodoMigliore:
      'giugno-settembre, il periodo più asciutto e più caldo dell\'anno (comunque mite, di rado sopra i 25-27°C). In Andalusia è la stagione da evitare per il caldo.',
    costi: 'un giro di 4-5 pintxos con altrettanti bicchieri costa indicativamente 25-35€ a persona; i bar più semplici hanno pintxos da 2-4€ ciascuno.',
    erroriDaEvitare: [
      'Chiedere un piatto e caricarlo di pintxos come a un buffet: è considerato poco locale, meglio uno o due pezzi per bar prima di cambiare locale',
      'Fermarsi in un solo bar per tutta la serata: il senso del txikiteo è muoversi',
      'Sottovalutare il meteo atlantico anche d\'estate: piove più spesso che nelle altre tre regioni spagnole di questa guida, quindi conviene avere sempre con sé una giacca leggera',
    ],
    esperienzeSlugs: ['pintxos-crawl-donostia'],
    tripSlugs: ['spagna-nord-itinerario'],
    imageAlt: 'La spiaggia della Concha a San Sebastián con l\'isola di Santa Clara e il Monte Igueldo sullo sfondo',
    immagine: '/images/spagna/san-sebastian.jpg',
  },
  {
    slug: 'bilbao',
    paeseSlug: 'spagna',
    ordine: 6,
    nome: 'Bilbao',
    tipologia: ['città', 'arte', 'architettura'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'L\'ex capitale industriale basca. Nel 1997 ha aperto il Museo Guggenheim di Frank Gehry ed è nato il termine «effetto Bilbao», per una città intera rigenerata da un solo edificio. Oggi è una delle capitali culturali più vivaci del Nord della Spagna, con un centro storico (il Casco Viejo) rimasto quasi com\'era accanto ai grattacieli sull\'estuario del Nervión.',
    percheAndarci:
      'Il Guggenheim da solo vale il viaggio, per l\'edificio in titanio che riflette la luce in modo diverso a ogni ora e per le collezioni d\'arte contemporanea. Il Casco Viejo, con le sue «Siete Calles» medievali, ha poi una scena di pintxos seria quanto quella di San Sebastián, con meno turisti.',
    cosaVedere: [
      'Il Museo Guggenheim Bilbao, l\'edificio in titanio di Frank Gehry sull\'estuario del Nervión, con «Puppy» di Jeff Koons e «Maman» di Louise Bourgeois all\'esterno',
      'Il Casco Viejo, le «Siete Calles» del centro storico medievale, con la Cattedrale di Santiago',
      'Il Mercado de la Ribera, uno dei mercati coperti più grandi d\'Europa sul lungofiume',
      'Il Puente de Vizcaya (a Portugalete, poco fuori città), il ponte trasbordatore più antico del mondo, patrimonio UNESCO',
      'Il quartiere dell\'Ensanche, il Bilbao ottocentesco borghese, con negozi e architettura liberty',
    ],
    cosaFare: [
      'Visitare il Guggenheim al mattino presto, quando la luce sul titanio è più bella e le code più corte',
      'Un giro di pintxos nel Casco Viejo, meno turistico e più economico di quello di San Sebastián',
      'Attraversare il Puente de Vizcaya sulla navicella sospesa, o salire sulla passerella panoramica',
      'Passeggiata lungo il Nervión dal Guggenheim fino al Casco Viejo',
    ],
    doveDormire: 'Il Casco Viejo per l\'atmosfera storica e i pintxos; l\'Ensanche, vicino al Guggenheim, per comodità e collegamenti.',
    doveMangiare: 'Stessa cultura del pintxo di San Sebastián ma con un carattere più cittadino e meno turistico, concentrata nelle Siete Calles del Casco Viejo; il bacalao al pil-pil e il txuletón (bistecca alla brace) sono i piatti forti della cucina basca da ristorante.',
    comeArrivare: 'Aeroporto di Bilbao (Loiu), circa 12 km dal centro (bus Bizkaibus A3247). Treno o bus da Madrid (circa 4h30-5h) o da San Sebastián (circa 1h20 in bus).',
    comeSpostarsi: 'Metro (linea Euskotren/Metro Bilbao) efficiente per raggiungere il Guggenheim e le zone periferiche; il centro storico si gira a piedi.',
    periodoMigliore: 'giugno-settembre, come il resto del Nord: clima fresco e piovoso tutto l\'anno, con l\'estate come finestra più stabile.',
    costi: 'Guggenheim: 18€ da metà giugno a metà settembre, 15€ nel resto dell\'anno (ridotto 9€/7,50€); gratuito per i minori di 18 anni e, in bassa stagione, l\'ultima domenica del mese (conviene controllare sul sito ufficiale prima di andare).',
    erroriDaEvitare: [
      'Visitare il Guggenheim di lunedì senza controllare prima: il museo chiude quasi tutti i lunedì, tranne un\'estensione stagionale estiva',
      'Trattare Bilbao come una tappa mordi e fuggi fra San Sebastián e la Cantabria: il Casco Viejo merita almeno una serata intera',
      'Sottovalutare la pioggia: portarsi sempre un impermeabile leggero, indipendentemente dalla stagione',
    ],
    esperienzeSlugs: ['guggenheim-bilbao'],
    tripSlugs: ['spagna-nord-itinerario'],
    imageAlt: 'Il Museo Guggenheim di Bilbao in titanio lungo la passeggiata sul Nervión, con il ponte rosso de La Salve sullo sfondo',
    immagine: '/images/spagna/bilbao.jpg',
  },
  {
    slug: 'santiago-compostela-camino-del-norte',
    paeseSlug: 'spagna',
    ordine: 7,
    nome: 'Santiago de Compostela e il Camino del Norte',
    tipologia: ['cammino', 'cultura', 'natura'],
    giorniConsigliati: '2-3 giorni per Santiago, più il tempo scelto per il tratto di Cammino',
    visitataPersonalmente: true,
    introduzione:
      'La meta finale di tutti i Cammini di Santiago: la Cattedrale custodisce, secondo la tradizione, le reliquie dell\'apostolo Giacomo. Il Camino del Norte è la variante costiera che da Irún attraversa Paesi Baschi, Cantabria, Asturie e Galizia per circa 825-865 km. È meno battuto del Cammino Francese e passa per i paesaggi più vari della Spagna del Nord: scogliere atlantiche, spiagge, montagne e alla fine la Galizia verde e piovosa.',
    percheAndarci:
      'Anche pochi giorni sul Camino del Norte, per esempio lungo la costa cantabrica o asturiana, mostrano il Nord spagnolo vero, lontano dal caldo e dalla folla del sud. E Santiago de Compostela, alla fine, ha un\'atmosfera d\'arrivo che nessun\'altra città spagnola ha.',
    cosaVedere: [
      'La Cattedrale di Santiago de Compostela, con il Pórtico da Gloria romanico e il botafumeiro, l\'enorme turibolo che oscilla lungo la navata nelle messe principali',
      'La Praza do Obradoiro, la piazza davanti alla facciata barocca della Cattedrale, punto d\'arrivo simbolico di tutti i Cammini',
      'Il centro storico di Santiago, patrimonio UNESCO, con una delle università più antiche di Spagna',
      'Lungo il Camino del Norte: San Sebastián e Bilbao (vedi le schede dedicate), Santander e Santillana del Mar in Cantabria, la Costa Verde asturiana intorno a Llanes e Gijón',
      'Il Museo delle Peregrinazioni a Santiago, per contestualizzare la storia del Cammino prima o dopo la visita alla Cattedrale',
    ],
    cosaFare: [
      'Camminare un tratto del Camino del Norte, anche di pochi giorni: la costa fra San Sebastián e Bilbao e quella asturiana intorno a Llanes sono fra i tratti più belli',
      'Assistere a una messa del pellegrino a mezzogiorno nella Cattedrale di Santiago, quando in certe occasioni oscilla il botafumeiro',
      'Ritirare la Compostela, il certificato di pellegrinaggio, all\'Ufficio del Pellegrino, se si sono percorsi almeno gli ultimi 100 km a piedi (o 200 in bici)',
    ],
    doveDormire:
      'A Santiago, il centro storico intorno alla Cattedrale. Lungo il Cammino la scelta tradizionale sono gli albergues (ostelli per pellegrini, spesso con letti a castello e prezzi molto bassi); chi vuole più comodità trova pensiones e piccoli hotel nei paesi della costa.',
    doveMangiare: 'In Galizia si mangiano il pulpo á feira (polpo bollito con paprika e olio, servito su un piatto di legno) e i frutti di mare; lungo la costa cantabrica e asturiana, il pescato del giorno e la fabada asturiana (stufato di fagioli, chorizo e morcilla).',
    comeArrivare: 'Aeroporto di Santiago-Rosalía de Castro, ben collegato con l\'Europa. Per iniziare un tratto del Camino del Norte: Irún (confine francese) o una qualsiasi delle tappe intermedie, raggiungibili in treno o bus dalle rispettive città (San Sebastián, Bilbao, Santander).',
    comeSpostarsi: 'A piedi lungo il Cammino, seguendo le frecce gialle e le conchiglie che segnano il percorso; a Santiago, il centro storico è interamente pedonale.',
    periodoMigliore:
      'maggio-settembre per camminare; il periodo più asciutto va da giugno a inizio settembre. Il Cammino si può fare tutto l\'anno, ma in inverno e a fine autunno piove spesso e le giornate sono corte.',
    costi: 'Cattedrale e complesso museale: il prezzo cambia secondo le sezioni (alcune aree sono gratuite); un albergue lungo il Cammino costa fra 10 e 20€ a notte.',
    erroriDaEvitare: [
      'Sottovalutare dislivello e fondo del Camino del Norte: è più impegnativo e meno attrezzato del Cammino Francese, con tratti di sentiero costiero esposti',
      'Non prenotare l\'albergue nei mesi di punta (giugno-settembre) lungo i tratti più popolari: i posti letto, soprattutto nei paesi piccoli, si esauriscono',
      'Arrivare a Santiago senza le credenziali del pellegrino timbrate lungo il percorso, se si vuole ottenere la Compostela',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['spagna-nord-itinerario'],
    imageAlt: 'La facciata barocca della Cattedrale di Santiago de Compostela sulla Praza do Obradoiro nella luce del pomeriggio',
    immagine: '/images/spagna/santiago-compostela-camino-del-norte.jpg',
  },

  // --- BALEARI ---
  {
    slug: 'mallorca',
    paeseSlug: 'spagna',
    ordine: 8,
    nome: 'Mallorca',
    tipologia: ['isola', 'mare', 'montagna'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La più grande e la più completa delle Baleari. Ha Palma, una capitale vera con una cattedrale gotica sul mare, e la Serra de Tramuntana, la catena montuosa patrimonio UNESCO che corre per 90 km lungo la costa nord-occidentale: la parte verde dell\'isola, che chi viene per le spiagge spesso non vede.',
    percheAndarci:
      'Sulla stessa isola ci sono la vita da capitale mediterranea di Palma e una montagna terrazzata che alle Baleari non ci si aspetta. La Serra de Tramuntana è un paesaggio agricolo modellato dall\'uomo per secoli, e per questo nel 2011 l\'UNESCO l\'ha dichiarata patrimonio culturale.',
    cosaVedere: [
      'La Cattedrale di Palma (La Seu), gotica, direttamente sul mare, con gli interventi di Antoni Gaudí all\'interno',
      'Il centro storico di Palma, con il Palazzo dell\'Almudaina e i vicoli del Barrio Gótico',
      'La Serra de Tramuntana: Valldemossa, il paese di pietra dove soggiornarono Chopin e George Sand, e Sóller, raggiungibile con un trenino d\'epoca del primo Novecento',
      'Il Port de Sóller e la costa frastagliata sotto la Serra',
      'Le spiagge della costa est, più regolari e meno scenografiche di quelle del nord ma più adatte alle famiglie',
    ],
    cosaFare: [
      'Il trenino storico Palma-Sóller (in funzione dal 1912) attraverso la Serra de Tramuntana',
      'Un tratto del GR221, il «Sentiero della Pietra a Secco» che attraversa la Serra: basta una tappa di poche ore per capire il paesaggio terrazzato',
      'Perdersi nel centro storico di Palma la sera, quando il caldo cala e i vicoli si animano',
    ],
    confronti: [
      {
        titolo: 'Quale isola delle Baleari scegliere (o come dividerle tra più giorni)',
        introduzione:
          'Mallorca, Ibiza e Minorca hanno carattere, ritmo e servizi molto diversi. Prima di prenotare conviene sapere cosa le distingue.',
        opzioni: [
          {
            nome: 'Mallorca',
            sintesi: 'La più grande e la più completa: una vera capitale (Palma), montagna (Serra de Tramuntana) e più tipi di costa diversi sulla stessa isola.',
            pro: [
              'Ha città, montagna e spiagge di più tipi, senza bisogno di spostarsi altrove',
              'La rete di trasporti interna (treni, bus) è la più sviluppata delle tre isole',
              'Meno legata di Ibiza all\'immagine della vita notturna',
            ],
            contro: [
              'La costa più turistica (Playa de Palma, Magaluf) è sovraffollata e poco rappresentativa del resto dell\'isola',
              'In alta stagione Palma e la Serra de Tramuntana possono essere molto affollate',
            ],
            perChi: 'Chi vuole un\'unica isola che copra più interessi diversi, dalla città alla montagna al mare.',
          },
          {
            nome: 'Ibiza',
            sintesi: 'Famosa per la vita notturna del sud (Ibiza Town, Playa d\'en Bossa, San Antonio), ma con un nord rurale e tranquillo (Sant Joan, Santa Gertrudis) completamente diverso.',
            pro: [
              'Per chi la cerca, la vita notturna resta la più famosa e varia d\'Europa',
              'Il nord dell\'isola ha calette isolate, mercati artigianali e un\'aria bohémien che pochi associano a Ibiza',
              'Dalt Vila, la città vecchia fortificata, è patrimonio UNESCO e merita anche a chi non cerca la vita notturna',
            ],
            contro: [
              'La fama di isola dei club scoraggia, a torto, chi cerca altro',
              'Prezzi tra i più alti delle tre isole in alta stagione, soprattutto nel sud',
            ],
            perChi: 'Chi vuole sia la vita notturna sia, volendo, un\'isola rurale e quasi silenziosa a pochi km di distanza.',
          },
          {
            nome: 'Minorca',
            sintesi: 'La più piccola e la più tranquilla delle tre: poco costruita, con spiagge meno affollate e un ritmo più lento per scelta.',
            pro: [
              'Molto meno sviluppata di Mallorca e Ibiza: gran parte dell\'isola è riserva della biosfera UNESCO',
              'Le calette (per esempio Cala Macarelleta) restano tra le meno affollate delle Baleari',
              'Il Camí de Cavalls, l\'antico sentiero costiero che gira intorno all\'isola, è adatto a chi cerca escursioni tranquille',
            ],
            contro: [
              'Vita notturna quasi assente, per chi la cerca',
              'Meno collegamenti diretti e più cara da raggiungere fuori stagione',
            ],
            perChi: 'Chi vuole l\'opposto di Ibiza: mare, natura e silenzio, senza rinunciare alle comodità.',
          },
        ],
        raccomandazione:
          'Con una settimana conviene sceglierne una invece di comprimerle tutte: Mallorca per un\'isola completa, Ibiza se interessano la vita notturna e il nord rurale, Minorca per le Baleari più quiete. Con più tempo, i traghetti frequenti fra Mallorca e le altre due rendono facile combinarne due.',
      },
    ],
    doveDormire: 'Palma per la vita cittadina; Sóller o Port de Sóller per la base ideale nella Serra de Tramuntana.',
    doveMangiare: 'La sobrasada (salume spalmabile di maiale con paprika) e le ensaïmadas (dolce a spirale) sono i prodotti simbolo; nella Serra, i ristoranti di montagna servono piatti a base di agnello e verdure locali.',
    comeArrivare: 'Aeroporto di Palma di Son Sant Joan, uno dei più trafficati di Spagna in estate, con voli diretti da tutte le principali città italiane. Traghetto da Barcellona o Valencia (7-8 ore, o 4 ore con i traghetti veloci).',
    comeSpostarsi: 'Auto a noleggio consigliata per la Serra de Tramuntana; a Palma i mezzi pubblici bastano; il trenino storico per Sóller è un\'attrazione in sé oltre che un mezzo di trasporto.',
    periodoMigliore: 'maggio-giugno e settembre, con temperature gradevoli e meno folla di luglio-agosto, quando prezzi e afflusso turistico raggiungono il picco.',
    costi: 'Cattedrale di Palma circa 10€; trenino storico per Sóller circa 32€ andata e ritorno; in alta stagione il noleggio auto può costare molto di più che nel resto dell\'anno.',
    erroriDaEvitare: [
      'Limitarsi alla costa turistica di Palma (Playa de Palma, S\'Arenal) senza mai vedere la Serra de Tramuntana: è come andare a Roma e vedere solo l\'aeroporto',
      'Guidare sulle strade a tornanti della Serra senza mettere in conto tempi più lunghi del previsto',
      'Prenotare voli e traghetti per luglio-agosto senza anticipo: è il periodo di massima domanda e i prezzi salgono di conseguenza',
    ],
    esperienzeSlugs: ['serra-tramuntana-trekking'],
    tripSlugs: ['baleari-itinerario'],
    imageAlt: 'Le case di pietra di Valldemossa e il campanile di Sant Bartomeu tra le montagne boscose della Serra de Tramuntana, Mallorca',
    immagine: '/images/spagna/mallorca.jpg',
  },
  {
    slug: 'ibiza',
    paeseSlug: 'spagna',
    ordine: 9,
    nome: 'Ibiza',
    tipologia: ['isola', 'mare', 'vita notturna'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Ibiza sono due isole in una, e ridurla a capitale mondiale della vita notturna è la semplificazione più comune. Il sud (Ibiza Town, Playa d\'en Bossa, San Antonio) è il centro di una scena clubbing senza pari in Europa; il nord (Sant Joan de Labritja, Santa Gertrudis) è rurale, tranquillo e quasi hippie, con calette isolate e mercati artigianali.',
    percheAndarci:
      'A seconda di dove ci si ferma, si ha l\'Ibiza dei club fino all\'alba o quella delle calette silenziose e del mercato biologico la domenica mattina. Il nord, che le guide spesso trascurano, è la parte che mostra meglio il carattere dell\'isola.',
    cosaVedere: [
      'Dalt Vila, la città alta fortificata di Ibiza Town, patrimonio UNESCO, con le mura rinascimentali e vicoli medievali',
      'Le grandi discoteche del sud (Pacha, Amnesia, Ushuaïa), simbolo mondiale della cultura clubbing dagli anni \'80-\'90 a oggi',
      'Il nord rurale intorno a Sant Joan de Labritja: calette come Cala Xarraca e Cala Sant Vicent, e Benirràs, famosa per i tamburi al tramonto della domenica',
      'Santa Gertrudis de Fruitera, il paese al centro dell\'isola con caffè, gallerie d\'arte e un\'atmosfera rilassata',
      'Il mercato hippie di Las Dalias (a Sant Carles) e il mercato del sabato di Sant Joan, fra i meno commerciali dell\'isola',
    ],
    cosaFare: [
      'Un giro tra le calette del nord (Cala Xarraca, Cala Sant Vicent) come contrappunto silenzioso alla scena del sud',
      'Il tramonto ai tamburi di Benirràs, la domenica, un rituale informale che dura da decenni',
      'Un giro nei mercati artigianali del nord (Las Dalias, Sant Joan) invece che nei negozi turistici del porto',
      'Per chi cerca la vita notturna, una serata in uno dei club storici, prenotando con largo anticipo in alta stagione',
    ],
    doveDormire: 'Ibiza Town/Dalt Vila per la vita cittadina e la vicinanza ai club del sud; Santa Gertrudis o Sant Joan per la versione tranquilla dell\'isola, con spostamenti in auto per raggiungere le spiagge.',
    doveMangiare: 'Il bullit de peix (zuppa di pesce con riso a parte) è il piatto tradizionale dell\'isola; nel nord, i piccoli ristoranti di campagna intorno a Santa Gertrudis e San Juan hanno una cucina più semplice e meno cara di quella del porto.',
    comeArrivare: 'Aeroporto di Ibiza, con voli diretti stagionali dall\'Italia in alta stagione; traghetto da Mallorca (Palma-Ibiza, circa 2h15-5h secondo il tipo di nave) o da Barcellona/Valencia.',
    comeSpostarsi: 'Auto o scooter a noleggio quasi indispensabili per raggiungere il nord dell\'isola e le calette più isolate; bus locali collegano i centri principali ma con frequenze limitate fuori stagione.',
    periodoMigliore:
      'giugno e settembre, il compromesso migliore fra clima e folla. Luglio-agosto è il picco di prezzi e vita notturna, con il sud pieno; il nord resta abbastanza tranquillo anche in alta stagione.',
    costi: 'Molto variabile: un ingresso ai grandi club può superare i 60-100€ in alta stagione, mentre una giornata nel nord tra spiagge libere e un pranzo semplice costa una frazione di quella cifra.',
    erroriDaEvitare: [
      'Ridurre Ibiza alla vita notturna senza mai vedere il nord: è la parte che sorprende di più chi arriva con l\'idea dell\'isola dei club',
      'Prenotare gli ingressi ai grandi club last minute in alta stagione: i migliori eventi si esauriscono con giorni o settimane di anticipo',
      'Muoversi solo a piedi o affidarsi solo ai bus: senza un mezzo proprio buona parte del nord e delle calette più belle resta fuori portata',
    ],
    esperienzeSlugs: ['ibiza-nord-calette'],
    tripSlugs: ['baleari-itinerario'],
    imageAlt: 'Le mura e la cattedrale di Dalt Vila sopra le case bianche del porto di Ibiza Town',
    immagine: '/images/spagna/ibiza.jpg',
  },
  {
    slug: 'minorca',
    paeseSlug: 'spagna',
    ordine: 10,
    nome: 'Minorca',
    tipologia: ['isola', 'mare', 'natura'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La più piccola e la più tranquilla delle tre isole maggiori delle Baleari. Gran parte del territorio è Riserva della Biosfera UNESCO, dagli anni \'80 si costruisce poco per scelta politica e le calette restano fra le meno affollate dell\'arcipelago.',
    percheAndarci:
      'È l\'isola giusta per chi conosce la fama di Mallorca e Ibiza e cerca il contrario: niente grandi resort né club. Il modo migliore per conoscerla resta il Camí de Cavalls, l\'antico sentiero costiero che le gira tutto intorno.',
    cosaVedere: [
      'Ciutadella, l\'ex capitale, con il porto vecchio e la Cattedrale gotica dentro le mura',
      'Mahón (Maó), la capitale attuale, con uno dei porti naturali più profondi del Mediterraneo',
      'Il Camí de Cavalls, il sentiero costiero di circa 185 km che circonda l\'intera isola, percorribile a tappe',
      'Cala Macarelleta e Cala Turqueta, tra le calette più fotografate e meno sviluppate delle Baleari',
      'I siti megalitici talayotici (taulas e navetas), lasciati da una civiltà preistorica propria dell\'isola, patrimonio UNESCO dal 2023',
    ],
    cosaFare: [
      'Percorrere una o più tappe del Camí de Cavalls, dalle più semplici vicino a Ciutadella a quelle più selvagge della costa nord',
      'Un giro in barca lungo la costa sud per raggiungere le calette non accessibili in auto',
      'Visita a uno dei siti talayotici (per esempio Torre d\'en Galmés, il più esteso dell\'isola)',
    ],
    doveDormire: 'Ciutadella per l\'atmosfera storica e il porto vecchio; Mahón per la capitale e i collegamenti; le zone costiere sud per chi punta soprattutto sulle calette.',
    doveMangiare: 'La caldereta de langosta (zuppa di aragosta, piatto simbolo dell\'isola, non economico) e il formaggio Mahón-Menorca DOP, tra i più noti di Spagna.',
    comeArrivare: 'Aeroporto di Mahón, con voli stagionali diretti dall\'Italia in alta stagione. Traghetto da Mallorca: Alcúdia-Ciutadella (1-2h30) o Palma-Mahón (circa 6h).',
    comeSpostarsi: 'L\'auto a noleggio è quasi indispensabile: i bus collegano i centri principali ma non le calette più isolate, che sono il motivo per venire qui.',
    periodoMigliore: 'giugno e settembre, con temperature piacevoli e meno folla; l\'isola resta più tranquilla di Mallorca e Ibiza anche in piena estate, grazie al minor sviluppo turistico.',
    costi: 'In alta stagione costa in genere un po\' meno di Ibiza; noleggio auto e traghetti sono le voci principali del budget.',
    erroriDaEvitare: [
      'Aspettarsi la vita notturna o i servizi turistici di Ibiza o Mallorca: Minorca ha scelto un\'altra strada',
      'Provare a vedere tutta l\'isola in un solo giorno: le calette migliori richiedono spostamenti su strade secondarie, spesso non asfaltate negli ultimi tratti',
      'Andarci senza auto, contando solo sui bus: gran parte del fascino dell\'isola sta nelle calette raggiungibili solo su strada propria o a piedi',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['baleari-itinerario'],
    imageAlt: 'La spiaggia di sabbia bianca e l\'acqua turchese di Cala Macarelleta tra le pinete, Minorca',
    immagine: '/images/spagna/minorca.jpg',
  },

  // --- CANARIE ---
  {
    slug: 'tenerife',
    paeseSlug: 'spagna',
    ordine: 11,
    nome: 'Tenerife',
    tipologia: ['isola', 'vulcano', 'natura'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La più grande delle Canarie. Qui c\'è il Teide, il vulcano più alto di Spagna (3.715 metri) e, misurato dalla base sul fondale oceanico, la terza struttura vulcanica più alta del mondo. Il Parco Nazionale del Teide, patrimonio UNESCO, è un paesaggio lunare di colate di lava e formazioni rocciose che non si trovano altrove. All\'estremo nord il Parco Rurale di Anaga è una foresta laurifoglia sopravvissuta dall\'era terziaria, riserva della biosfera dal 2015.',
    percheAndarci:
      'Per il Teide, il punto più alto della Spagna e, grazie al cielo limpido in quota, uno dei migliori osservatori astronomici al mondo. E per il contrasto con Anaga, a poche decine di km, dove la nebbia degli alisei alimenta una foresta primordiale coperta di muschio e licheni.',
    cosaVedere: [
      'Il Parco Nazionale del Teide, con la funivia che sale fino a 3.555 metri e il paesaggio lunare di Las Cañadas, la grande caldera che lo circonda',
      'Il Parco Rurale di Anaga, riserva della biosfera UNESCO, con sentieri tra la foresta laurifoglia e villaggi isolati come Taganana',
      'La Laguna, l\'antica capitale dell\'isola, patrimonio UNESCO per il suo impianto urbanistico rinascimentale non fortificato',
      'Puerto de la Cruz e i suoi giardini botanici sulla costa nord, più verde e meno sviluppata turisticamente della costa sud',
      'Los Gigantes, le alte falesie a picco sull\'Atlantico, sulla costa ovest',
    ],
    cosaFare: [
      'Prenotare per tempo il biglietto della funivia del Teide e, separatamente, il permesso gratuito per l\'ultimo tratto a piedi fino alla vetta (vedi la scheda esperienza dedicata)',
      'Un\'escursione nel Parco Rurale di Anaga, per esempio da Cruz del Carmen a Taganana',
      'Osservare le stelle: Tenerife è uno dei posti migliori al mondo, grazie alla Legge del Cielo che protegge l\'isola dall\'inquinamento luminoso',
    ],
    doveDormire: 'Puerto de la Cruz per la costa nord, più verde e meno turistica; Costa Adeje o Los Cristianos per la costa sud, più soleggiata e turistica, comoda per chi punta sul mare.',
    doveMangiare: 'Le papas arrugadas (patate piccole bollite in acqua molto salata) con mojo rojo e mojo verde (salse piccanti, l\'una a base di peperone, l\'altra di coriandolo o prezzemolo) sono il piatto simbolo di tutte le Canarie; il gofio, farina tostata di cereali di origine guanche, compare in mille varianti.',
    comeArrivare: 'Due aeroporti: Tenerife Sur (TFS), il principale per i voli internazionali e la costa turistica sud, e Tenerife Norte (TNO), più vicino a Santa Cruz e La Laguna.',
    comeSpostarsi: 'Auto a noleggio consigliata per raggiungere il Teide e Anaga; tram tra Santa Cruz e La Laguna; bus (guaguas) capillari ma con tempi lunghi verso le zone di montagna.',
    periodoMigliore:
      'tutto l\'anno, col clima mite e costante (16-21°C anche a gennaio): per questo le Canarie sono la meta spagnola giusta in inverno, quando il resto d\'Europa è al freddo. In quota, al Teide, fa più freddo e d\'inverno la neve non è rara.',
    costi: 'Funivia del Teide circa 40€ andata e ritorno; il permesso per la vetta è gratuito ma a numero chiuso (200 persone al giorno, prenotabile fino a 56 giorni prima).',
    erroriDaEvitare: [
      'Salire al Teide senza aver prenotato il permesso per la vetta con largo anticipo: la funivia da sola non dà accesso all\'ultimo tratto, regolamentato a parte',
      'Sottovalutare il freddo in quota: alla stazione superiore della funivia (3.555 m) le temperature sono molto più basse che sulla costa, in ogni stagione',
      'Concentrarsi solo sulla costa sud e non vedere mai Anaga: è un ecosistema che non esiste altrove sull\'isola',
    ],
    esperienzeSlugs: ['teide-vetta-permesso'],
    tripSlugs: ['canarie-itinerario'],
    imageAlt: 'Il vulcano Teide visto dalla piana di Ucanca, nella caldera di Las Cañadas, Tenerife',
    immagine: '/images/spagna/tenerife.jpg',
  },
  {
    slug: 'gran-canaria',
    paeseSlug: 'spagna',
    ordine: 12,
    nome: 'Gran Canaria',
    tipologia: ['isola', 'natura', 'mare'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La chiamano «un continente in miniatura» per i tanti microclimi e paesaggi chiusi in appena 1.560 km². A sud ci sono le dune quasi sahariane di Maspalomas; al centro le montagne intorno al Roque Nublo, a oltre 1.800 metri, con il clima di una media montagna europea.',
    percheAndarci:
      'In una sola giornata di strada si passa dalle dune desertiche del sud ai pini canari delle montagne centrali: nessun\'altra isola delle Canarie ha paesaggi così diversi in così poco spazio.',
    cosaVedere: [
      'Le Dune di Maspalomas, riserva naturale di dune di sabbia mobile sulla costa sud, con la vicina spiaggia di Playa del Inglés',
      'Las Palmas de Gran Canaria, la capitale, con il centro storico di Vegueta e la casa-museo di Cristoforo Colombo',
      'Il Roque Nublo, la roccia vulcanica simbolo dell\'isola, raggiungibile con un\'escursione di poche ore dal centro dell\'isola',
      'Il Barranco de Guayadeque, un canyon abitato fin dai tempi preispanici, con case-grotta ancora abitate',
      'Puerto de Mogán, il paese-porto sud-occidentale con i canali navigabili che gli valgono il soprannome di "piccola Venezia"',
    ],
    cosaFare: [
      'Un\'escursione al Roque Nublo, con vista che nelle giornate limpide arriva fino al Teide di Tenerife',
      'Camminata tra le dune di Maspalomas al tramonto, quando il caldo cala',
      'Un giro nel Barranco de Guayadeque, tra case-grotta e un ristorante scavato nella roccia',
    ],
    doveDormire: 'Las Palmas per la vita cittadina e la spiaggia urbana di Las Canteras; Maspalomas/Playa del Inglés per chi punta soprattutto sulle dune e sul mare.',
    doveMangiare: 'Come nel resto delle Canarie, papas arrugadas con mojo e gofio; a Las Palmas, il Mercado de Vegueta è il posto giusto per un primo assaggio della cucina locale tra i banchi.',
    comeArrivare: 'Aeroporto di Gran Canaria (LPA), a circa 30 km da Las Palmas e vicino alla costa sud turistica. Volo interno da Tenerife in circa 30-40 minuti, oppure traghetto (circa 1h30-2h30 secondo la tratta).',
    comeSpostarsi: 'Auto a noleggio per raggiungere il centro montuoso; bus efficienti lungo la costa tra Las Palmas e Maspalomas.',
    periodoMigliore: 'tutto l\'anno, con lo stesso clima mite del resto delle Canarie; le montagne del centro, più fresche, sono piacevoli nei mesi in cui la costa è più calda.',
    costi: 'Nel complesso simile al resto delle Canarie, con Las Palmas leggermente più economica delle zone turistiche del sud.',
    erroriDaEvitare: [
      'Restare sulla costa sud senza mai salire verso le montagne del centro: è la parte che fa dell\'isola «un continente in miniatura»',
      'Sottovalutare il sole sulle dune di Maspalomas: poca ombra, conviene evitare le ore centrali della giornata',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['canarie-itinerario'],
    imageAlt: 'Le dune di sabbia di Maspalomas nella luce radente del tramonto, con l\'oceano sullo sfondo, Gran Canaria',
    immagine: '/images/spagna/gran-canaria.jpg',
  },
  {
    slug: 'lanzarote',
    paeseSlug: 'spagna',
    ordine: 13,
    nome: 'Lanzarote',
    tipologia: ['isola', 'vulcano', 'architettura'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'L\'isola più vulcanica delle Canarie: fra il 1730 e il 1736 le eruzioni hanno coperto di lava un quarto della superficie e creato il paesaggio di Timanfaya. Dal 1993 tutta l\'isola è Riserva della Biosfera UNESCO, la prima delle Canarie ad averla su tutto il territorio. Architettura e urbanistica portano il segno di un solo artista, César Manrique.',
    percheAndarci:
      'Per Timanfaya, un paesaggio lunare che si visita solo in pullman guidato (sulla lava non si cammina liberamente), con dimostrazioni geotermiche dal vivo. E per vedere come un\'isola intera sia stata modellata da un solo architetto-artista, che vietò i cartelloni pubblicitari e gli edifici più alti delle palme: regole che valgono ancora oggi.',
    cosaVedere: [
      'Il Parco Nazionale di Timanfaya, con la Ruta de los Volcanes in pullman guidato e le dimostrazioni geotermiche all\'Islote del Hilario',
      'I Jameos del Agua, un tubo di lava trasformato da César Manrique in un centro artistico con laghetto naturale e un piccolo crostaceo cieco endemico',
      'Il Mirador del Río, il belvedere di Manrique incastonato nella roccia con vista sull\'isola di La Graciosa',
      'La Cueva de los Verdes, un altro tubo di lava, tra i più lunghi al mondo, visitabile con percorso guidato',
      'Il Jardín de Cactus, l\'ultima opera di Manrique, un giardino terrazzato con centinaia di specie di cactus in un\'antica cava',
      'La regione vinicola de La Geria, dove le viti crescono in piccole buche scavate nella cenere vulcanica e protette da muretti a semicerchio',
    ],
    cosaFare: [
      'La Ruta de los Volcanes a Timanfaya, restando sempre a bordo del pullman per motivi di sicurezza e tutela del suolo ancora caldo pochi metri sotto la superficie',
      'Un giro fra le opere di César Manrique (Jameos del Agua, Mirador del Río, Jardín de Cactus), che da sole spiegano l\'aspetto dell\'isola',
      'Degustazione di vino nella Geria, tra le vigne scavate nella cenere vulcanica',
      'Traghetto per una gita in giornata a La Graciosa, l\'isolotto disabitato di auto a nord di Lanzarote',
    ],
    doveDormire: 'Arrecife, la capitale, per i collegamenti; Playa Blanca a sud o Puerto del Carmen per chi punta sul mare, entrambe con edifici bassi per via delle regole urbanistiche volute da Manrique.',
    doveMangiare: 'Come nel resto delle Canarie, papas arrugadas e mojo. I vini della Geria, in particolare il malvasía volcánico, vengono da vigne che non hanno equivalenti altrove e meritano un assaggio a parte.',
    comeArrivare: 'Aeroporto di Lanzarote (ACE), vicino ad Arrecife. Volo interno dalle altre Canarie o traghetto da Gran Canaria/Fuerteventura.',
    comeSpostarsi: 'L\'auto a noleggio è quasi indispensabile: le distanze fra i luoghi da vedere sono maggiori che sulle altre isole minori e i bus ci sono, ma passano di rado.',
    periodoMigliore: 'tutto l\'anno, con lo stesso clima mite delle altre Canarie; Timanfaya, esposta al sole su terreno scuro, è più comoda da visitare nelle ore più fresche della giornata.',
    costi: 'Timanfaya circa 12-18€ con bus incluso; Jameos del Agua e Cueva de los Verdes circa 10-12€ ciascuno; un biglietto combinato per più siti di Manrique conviene quasi sempre a chi li vede tutti.',
    erroriDaEvitare: [
      'Scendere dal pullman o allontanarsi dai percorsi segnati a Timanfaya: è vietato per sicurezza (il suolo resta caldo a pochi metri di profondità) e per tutela ambientale',
      'Sottovalutare le distanze tra un sito e l\'altro: Lanzarote è più estesa di quanto sembri sulla carta e le strade, per quanto buone, richiedono tempo',
      'Visitare i siti di Manrique come attrazioni separate, senza coglierne il filo comune: sono pensati come un unico progetto che unisce architettura e paesaggio vulcanico',
    ],
    esperienzeSlugs: ['timanfaya-ruta-volcanes'],
    tripSlugs: ['canarie-itinerario'],
    imageAlt: 'I coni vulcanici e le distese di cenere scura del Parco Nazionale di Timanfaya, Lanzarote',
    immagine: '/images/spagna/lanzarote.jpg',
  },
]
