import type { Esperienza } from '@/lib/types'

// Prima uscita spagnola dell'archivio: è un viaggio fatto da Rick. giudizio
// resta 'da-verificare' finché non arriva la sua valutazione e il campo
// miaEsperienza resta assente finché non arriva un ricordo dell'autore (vedi
// il commento in src/content/destinazioni/spagna.ts). Prezzi, orari e regole
// di prenotazione (Alhambra, Teide, Guggenheim) cambiano spesso e vanno
// riverificati sui canali ufficiali prima di prenotare.

export const esperienzeSpagna: Esperienza[] = [
  // --- Andalusia ---
  {
    slug: 'alhambra-visita',
    paeseSlug: 'spagna',
    destinazioneSlug: 'granada',
    nome: 'Visita all\'Alhambra e al Generalife',
    localita: 'Granada, Andalusia',
    cosE:
      'Il complesso palaziale-fortezza dell\'ultima dinastia moresca di Al-Andalus (i Nazridi, XIII-XV secolo), su una collina che domina Granada: i Palazzi Nazridi con il Patio de los Leones e la Sala degli Ambasciatori, l\'Alcazaba (la fortezza militare più antica) e il Generalife, i giardini estivi con le fontane a scomparsa. È uno dei monumenti più visitati al mondo, con ingresso a numero chiuso e fasce orarie fisse per i Palazzi Nazridi.',
    percheFarla:
      'È probabilmente il monumento che racconta meglio l\'arte moresca in Spagna: un palazzo che si percorre ancora stanza per stanza, con gli stucchi e i giochi d\'acqua quasi intatti da sei secoli.',
    durata: 'mezza giornata (3-4 ore) per vedere con calma Palazzi Nazridi, Alcazaba e Generalife',
    periodo: 'tutto l\'anno; in estate conviene la fascia mattutina più presto possibile, per il caldo e per la luce migliore sui giardini',
    costo: 'biglietto generale circa 19,60€, con l\'accesso ai Palazzi Nazridi vincolato a una fascia oraria specifica indicata sul biglietto',
    comePrenotare:
      'Solo online sul sito ufficiale (alhambra-patronato.es), fino a tre mesi prima della visita. In alta stagione (giugno-settembre, Settimana Santa, Natale) i biglietti finiscono spesso con settimane, a volte mesi, di anticipo: conviene prenotare appena si fissa la data del viaggio. Se il sito ufficiale è esaurito restano alcune strade: tour operator con quote già acquistate, Granada Card, biglietti liberati dalle cancellazioni a mezzanotte ora spagnola.',
    cosaPortare: 'Un documento d\'identità valido, intestato alla persona indicata sul biglietto (i controlli sono severi); scarpe comode per il percorso, in gran parte all\'aperto.',
    perChiEAdatta: 'Adatta a chiunque, bambini compresi; il percorso richiede cammino ma non è fisicamente impegnativo.',
    giudizio: 'da-verificare',
    alternative: ['Tour guidato con ingresso incluso, per chi non riesce a trovare posto sul sito ufficiale o preferisce una spiegazione storica strutturata'],
    tripSlugs: ['andalusia-itinerario'],
    imageAlt: 'La fontana dei dodici leoni al centro del Patio de los Leones nei Palazzi Nazridi dell\'Alhambra',
    immagine: '/images/spagna/alhambra-visita.jpg',
  },
  {
    slug: 'flamenco-triana',
    immagine: '/images/spagna/siviglia.jpg',
    paeseSlug: 'spagna',
    destinazioneSlug: 'siviglia',
    nome: 'Spettacolo di flamenco in un tablao acustico a Triana o Santa Cruz',
    localita: 'Siviglia, Andalusia',
    cosE:
      'Uno spettacolo di flamenco dal vivo in un piccolo tablao senza amplificazione (cante, chitarra e ballo tutti acustici), nella tradizione dei locali storici di Triana e del Barrio de Santa Cruz. I grandi format turistici, con più artisti, luci teatrali e sale da centinaia di posti, sono un\'altra cosa.',
    percheFarla:
      'Il flamenco è nato a Siviglia, soprattutto nel quartiere gitano di Triana, come espressione popolare. Un tablao piccolo e acustico ne rende l\'intensità molto meglio di uno spettacolo pensato per i pullman di turisti.',
    durata: 'circa 1-1,5 ore per spettacolo',
    periodo: 'tutto l\'anno, perché è al chiuso',
    costo: 'indicativamente 20-45€ a persona secondo il locale, spesso con un drink incluso; i tablao più curati (senza amplificazione, con pochi posti) di solito costano più di quelli standard per grandi gruppi',
    comePrenotare: 'Direttamente sul sito del tablao scelto o tramite le piattaforme di biglietteria online; consigliata la prenotazione con qualche giorno di anticipo nei weekend e in alta stagione.',
    perChiEAdatta: 'Adatta a tutti; chi cerca qualcosa di più intimo e meno «da show» farebbe bene a informarsi prima sulla grandezza della sala e sull\'amplificazione.',
    giudizio: 'da-verificare',
    alternative: ['Assistere a una sessione informale in una peña flamenca (club non a scopo di lucro frequentato da appassionati locali), meno turistica ma con orari e disponibilità più incerti'],
    tripSlugs: ['andalusia-itinerario'],
    imageAlt: 'La Giralda e le guglie della Cattedrale di Siviglia accanto a una torre delle mura del Real Alcázar',
  },
  {
    slug: 'tapeo-siviglia',
    paeseSlug: 'spagna',
    destinazioneSlug: 'siviglia',
    nome: 'Tapeo tra Triana e Santa Cruz',
    localita: 'Siviglia, Andalusia',
    cosE:
      'Un giro serale a piedi fra i bar di tapas del Mercado de Triana, i locali storici sul lungofiume e i vicoli del Barrio de Santa Cruz, con poche tapas per locale prima di cambiare. È l\'equivalente andaluso del txikiteo basco, con un ritmo più informale.',
    percheFarla:
      'A Siviglia la cena «seria» spesso non esiste: si mangia girando, ed è così che i sivigliani passano la serata, soprattutto d\'estate, quando il caldo scoraggia i pasti seduti.',
    durata: '2-3 ore, di solito a partire dalla tarda serata (21-22), quando il caldo estivo è calato',
    periodo: 'tutto l\'anno; in primavera e autunno le sere sono più piacevoli',
    costo: 'indicativamente 20-30€ a persona per una serata di 4-5 tapas con vino o birra',
    comePrenotare: 'Nessuna prenotazione necessaria nella maggior parte dei bar tradizionali; nei locali più noti nei weekend può convenire arrivare presto per un tavolo.',
    perChiEAdatta: 'Adatta a tutti; chi ha intolleranze o allergie dovrebbe segnalarle bar per bar, dato che i menu spesso non sono scritti.',
    giudizio: 'da-verificare',
    alternative: ['Un tour gastronomico guidato fra i bar di tapas, per chi preferisce farsi guidare da qualcuno del posto'],
    tripSlugs: ['andalusia-itinerario'],
    imageAlt: 'Le case colorate di Calle Betis lungo il Guadalquivir, il fronte fiume del quartiere di Triana a Siviglia',
    immagine: '/images/spagna/tapeo-siviglia.jpg',
  },
  {
    slug: 'zambra-sacromonte',
    paeseSlug: 'spagna',
    destinazioneSlug: 'granada',
    nome: 'Zambra di flamenco in una casa-grotta del Sacromonte',
    localita: 'Sacromonte, Granada',
    cosE:
      'Uno spettacolo di flamenco nella variante zambra, nata nel Sacromonte fra la comunità gitana, in una delle case-grotta scavate nella collina. L\'atmosfera è più raccolta e domestica di quella di un tablao di città.',
    percheFarla:
      'Il Sacromonte ha una tradizione flamenca sua, distinta da quella di Siviglia, e vederla dove è nata, in una grotta abitata invece che in un teatro, cambia tutto rispetto a un tablao di città.',
    durata: 'circa 1-1,5 ore',
    periodo: 'tutto l\'anno',
    costo: 'indicativamente 25-40€ a persona secondo la casa-grotta scelta',
    comePrenotare: 'Online tramite i siti delle singole cuevas o piattaforme di biglietteria; consigliata la prenotazione con qualche giorno di anticipo.',
    cosaPortare: 'Scarpe comode: il Sacromonte è in salita e alcune grotte si raggiungono solo a piedi lungo sentieri non asfaltati.',
    perChiEAdatta: 'Adatta a tutti; nel quartiere convivono zambras storiche e format più turistici allo stesso prezzo, quindi conviene informarsi sulla reputazione della singola cueva prima di prenotare.',
    giudizio: 'da-verificare',
    alternative: ['Un tablao in centro a Granada, più comodo da raggiungere ma meno legato alla tradizione specifica del quartiere'],
    tripSlugs: ['andalusia-itinerario'],
    imageAlt: 'La facciata bianca della Venta El Gallo, una cueva flamenca scavata nella collina del Sacromonte a Granada',
    immagine: '/images/spagna/zambra-sacromonte.jpg',
  },

  // --- Nord ---
  {
    slug: 'pintxos-crawl-donostia',
    paeseSlug: 'spagna',
    destinazioneSlug: 'san-sebastian',
    nome: 'Txikiteo: giro di pintxos nella Parte Vieja',
    localita: 'San Sebastián (Donostia), Paesi Baschi',
    cosE:
      'Il giro serale da bar a bar della Parte Vieja di San Sebastián: in ogni locale un pintxo (o due) e un bicchiere di txakoli o sidra, poi si passa al successivo. La regola non scritta è «un bar, una specialità», e in ognuno si resta al massimo 15-20 minuti.',
    percheFarla:
      'È la cultura gastronomica basca nella sua forma più concentrata, in poche vie della città vecchia. San Sebastián ha più stelle Michelin per abitante di qualsiasi altra città al mondo, e anche fra i pintxos da bancone il livello medio è molto alto.',
    durata: '2-3 ore per un giro di 4-6 bar',
    periodo: 'tutto l\'anno; d\'estate c\'è più movimento e si mangia anche all\'aperto',
    costo: 'indicativamente 25-35€ a persona per una serata di 4-5 pintxos con altrettanti bicchieri; i pintxos singoli costano in media 2-5€ ciascuno',
    comePrenotare: 'Nessuna prenotazione necessaria: si entra, ci si mette al bancone, si ordina.',
    cosaPortare: 'Niente di particolare; aiuta un po\' di spagnolo o di basco per orientarsi nei bar frequentati dalla gente del posto, dove i menu non sono sempre in inglese.',
    perChiEAdatta: 'Adatta a tutti; poco indicata a chi preferisce un pasto seduto e tranquillo invece che in piedi e in movimento.',
    giudizio: 'da-verificare',
    alternative: ['Un tour guidato con qualcuno del posto, utile a chi arriva senza sapere quali bar scegliere fra le decine della Parte Vieja'],
    tripSlugs: ['spagna-nord-itinerario'],
    imageAlt: 'Il bancone di un bar della Parte Vieja di San Sebastián coperto di piattini di pintxos, con i prosciutti appesi alle spalle',
    immagine: '/images/spagna/pintxos-crawl-donostia.jpg',
  },
  {
    slug: 'guggenheim-bilbao',
    paeseSlug: 'spagna',
    destinazioneSlug: 'bilbao',
    nome: 'Museo Guggenheim Bilbao',
    localita: 'Bilbao, Paesi Baschi',
    cosE:
      'Il museo di arte contemporanea progettato da Frank Gehry e aperto nel 1997. L\'edificio in titanio sull\'estuario del Nervión è diventato l\'opera più famosa che ospita. Accanto alle collezioni permanenti (arte astratta, espressionismo astratto, arte contemporanea basca e spagnola) ci sono mostre temporanee di livello internazionale.',
    percheFarla:
      'È l\'esempio più citato al mondo di «effetto Bilbao»: un solo edificio che ha rigenerato una città industriale in declino. L\'architettura, che cambia aspetto con la luce del giorno, conta quanto le opere esposte.',
    durata: '2-3 ore per una visita con calma',
    periodo: 'tutto l\'anno; il museo chiude quasi tutti i lunedì, con qualche eccezione d\'estate che conviene controllare sul sito',
    costo: 'adulti 18€ da metà giugno a metà settembre, 15€ nel resto dell\'anno (ridotto 9€/7,50€); gratuito per i minori di 18 anni',
    comePrenotare: 'Consigliata la prenotazione online sul sito ufficiale per saltare la fila, soprattutto nei weekend e nei mesi estivi.',
    perChiEAdatta: 'Adatta a tutti; chi non vuole entrare può guardare l\'edificio gratis da fuori, lungo il Nervión.',
    giudizio: 'da-verificare',
    alternative: ['Passeggiata gratuita intorno all\'edificio e alle sculture esterne («Puppy» di Jeff Koons, «Maman» di Louise Bourgeois), per chi vuole vedere solo l\'architettura'],
    tripSlugs: ['spagna-nord-itinerario'],
    imageAlt: 'Le curve di titanio e pietra del Museo Guggenheim Bilbao viste dall\'altra riva, con le colline verdi alle spalle',
    immagine: '/images/spagna/guggenheim-bilbao.jpg',
  },

  // --- Baleari ---
  {
    slug: 'serra-tramuntana-trekking',
    paeseSlug: 'spagna',
    destinazioneSlug: 'mallorca',
    nome: 'Trekking nella Serra de Tramuntana',
    localita: 'Serra de Tramuntana, Mallorca',
    cosE:
      'Un\'escursione, anche di una sola giornata, su una tappa del GR221 (il «Sentiero della Pietra a Secco») o su un sentiero minore della Serra de Tramuntana. È la catena montuosa patrimonio culturale UNESCO che corre per 90 km lungo la costa nord-occidentale di Mallorca, fra terrazzamenti costruiti a mano nei secoli, uliveti e paesi di pietra come Valldemossa e Deià.',
    percheFarla:
      'Smentisce l\'idea di Mallorca come isola da spiaggia e basta. È un paesaggio agricolo modellato dall\'uomo per secoli: l\'UNESCO l\'ha dichiarato patrimonio nel 2011 proprio per questo legame fra uomo e territorio, più che per la natura in sé.',
    durata: 'da poche ore per un tratto breve fino a 8 giorni per l\'attraversata completa del GR221 con pernottamento nei rifugi',
    periodo: 'primavera e autunno per le temperature migliori; l\'estate è più calda ma praticabile nelle ore mattutine',
    costo: 'accesso libero ai sentieri; i rifugi lungo il GR221 richiedono prenotazione e hanno un costo a notte',
    comePrenotare: 'Nessuna prenotazione per le escursioni di giornata; per l\'attraversata multi-giorno, i rifugi (refugis) vanno prenotati in anticipo tramite il sito ufficiale del Consell de Mallorca.',
    cosaPortare: 'Scarpe da trekking, molta acqua (sulle fonti non si può sempre contare), protezione solare.',
    perChiEAdatta: 'Le tappe brevi sono adatte a camminatori di livello medio; l\'attraversata completa richiede allenamento ed esperienza escursionistica.',
    giudizio: 'da-verificare',
    alternative: ['Il trenino storico Palma-Sóller, per vedere la Serra dal basso senza camminare'],
    tripSlugs: ['baleari-itinerario'],
    imageAlt: 'Il sentiero lastricato della GR 221 tra le rocce calcaree della Serra de Tramuntana, nella tappa da Valldemossa a Deià',
    immagine: '/images/spagna/serra-tramuntana-trekking.jpg',
  },
  {
    slug: 'ibiza-nord-calette',
    paeseSlug: 'spagna',
    destinazioneSlug: 'ibiza',
    nome: 'Il nord di Ibiza: calette e mercati oltre la vita notturna',
    localita: 'Sant Joan de Labritja e Santa Gertrudis, Ibiza',
    cosE:
      'Una giornata (o più) nel nord rurale di Ibiza: le calette di Cala Xarraca e Cala Sant Vicent, il mercato hippie e artigianale di Las Dalias o quello del sabato di Sant Joan e il tramonto coi tamburi di Benirràs, un rito informale della domenica che va avanti da decenni.',
    percheFarla:
      'È la parte di Ibiza che le guide generaliste di solito saltano, e quella che conserva il carattere bohémien dell\'isola: negli anni \'60-\'70 Ibiza è stata una meta hippie prima di diventare una capitale del clubbing.',
    durata: 'una giornata intera per coprire con calma calette e mercati',
    periodo: 'da maggio a ottobre per il mare; mercati e tamburi di Benirràs seguono un calendario stagionale, meglio chiedere sul posto',
    costo: 'nessun costo di ingresso alle calette; i mercati hanno prezzi variabili sugli acquisti, senza costo di ingresso',
    comePrenotare: 'Nessuna prenotazione necessaria; utile un\'auto o uno scooter a noleggio, dato che i collegamenti bus verso il nord sono limitati.',
    cosaPortare: 'Crema solare, acqua, un telo da mare: le calette del nord hanno pochi servizi rispetto alle spiagge attrezzate del sud.',
    perChiEAdatta: 'Adatta a tutti, famiglie comprese; è la scelta ovvia per chi va a Ibiza senza interesse per la vita notturna.',
    giudizio: 'da-verificare',
    alternative: ['Un tour organizzato in jeep o minivan tra le calette del nord, per chi non vuole guidare su strade secondarie'],
    tripSlugs: ['baleari-itinerario'],
    imageAlt: 'Un cormorano su uno scoglio nell\'acqua limpida di Cala Xarraca, con le rocce della caletta sullo sfondo, nord di Ibiza',
    immagine: '/images/spagna/ibiza-nord-calette.jpg',
  },

  // --- Canarie ---
  {
    slug: 'teide-vetta-permesso',
    paeseSlug: 'spagna',
    destinazioneSlug: 'tenerife',
    nome: 'Salita al Pico del Teide: funivia e permesso per la vetta',
    localita: 'Parco Nazionale del Teide, Tenerife',
    cosE:
      'La salita al punto più alto di Spagna (3.715 metri) in due tappe. La funivia del Teide porta dalla stazione base (2.356 m) a quella superiore (3.555 m) in circa 8 minuti; da lì il sentiero PNT-10 Telesforo Bravo, a numero chiuso e con permesso obbligatorio, arriva al cratere sommitale in circa 45 minuti-1 ora di cammino.',
    percheFarla:
      'Dalla cima si guarda sopra il mare di nubi che spesso copre il resto dell\'isola: è uno dei panorami più forti delle Canarie. E grazie all\'accesso regolamentato in vetta c\'è molta meno gente di quanta la fama del luogo farebbe pensare.',
    durata: 'mezza giornata, tra funivia, tempo in vetta e ridiscesa',
    periodo: 'tutto l\'anno, ma in quota fa sempre molto più freddo che a valle; d\'inverno, con la neve, può servire altra attrezzatura o il sentiero sommitale può essere chiuso',
    costo: 'funivia circa 40€ andata e ritorno; il permesso per la vetta è gratuito',
    comePrenotare:
      'Due prenotazioni separate: il biglietto della funivia sul sito ufficiale volcanoteide.com e il permesso gratuito per il tratto sommitale sul portale del Parco Nazionale (tramite Tenerife ON), fino a 56 giorni prima e con un limite di 200 persone al giorno. Va chiesto con largo anticipo, nei periodi di punta mesi prima.',
    cosaPortare: 'Abbigliamento a strati (le temperature in vetta sono molto più basse che a valle, anche d\'estate), scarpe da trekking, protezione solare e occhiali da sole (la radiazione UV in quota è alta), acqua.',
    perChiEAdatta: 'Per il tratto sommitale basta una forma fisica normale, ma l\'altitudine si sente; chi ha problemi cardiorespiratori farebbe bene a informarsi prima.',
    giudizio: 'da-verificare',
    alternative: ['Solo funivia, senza permesso per la vetta: dalla stazione superiore il panorama sulla caldera è già ampio, e basta a chi non vuole occuparsi del permesso'],
    tripSlugs: ['canarie-itinerario'],
    imageAlt: 'La vetta del Pico del Teide con le colate di lava scura e i depositi di pomice chiara sotto il cielo azzurro, Tenerife',
    immagine: '/images/spagna/teide-vetta-permesso.jpg',
  },
  {
    slug: 'timanfaya-ruta-volcanes',
    paeseSlug: 'spagna',
    destinazioneSlug: 'lanzarote',
    nome: 'Ruta de los Volcanes a Timanfaya',
    localita: 'Parco Nazionale di Timanfaya, Lanzarote',
    cosE:
      'Il percorso guidato in pullman nel paesaggio vulcanico nato dalle eruzioni del 1730-1736, che coprirono di lava un quarto dell\'isola: dune di cenere nera, colate pietrificate e crateri. Si resta a bordo per sicurezza (il suolo è caldo a pochi metri di profondità) e per tutela ambientale. Sono comprese le dimostrazioni geotermiche all\'Islote del Hilario.',
    percheFarla:
      'È il paesaggio vulcanico più intatto e più scenografico delle Canarie. Con le dimostrazioni geotermiche dal vivo (la legna che prende fuoco a contatto col terreno, l\'acqua versata in un foro che schizza in aria come un geyser) si tocca con mano un\'attività vulcanica che altrove si vede solo nei documentari.',
    durata: 'circa 2-3 ore, tra ingresso, percorso in bus (circa 40 minuti) e dimostrazioni',
    periodo: 'tutto l\'anno; nelle ore centrali il terreno scuro assorbe calore e fa più caldo',
    costo: 'biglietto con bus incluso circa 12-18€ a persona',
    comePrenotare: 'Nei mesi di punta conviene prenotare online in anticipo, per avere la fascia oraria voluta e aspettare meno sul posto.',
    cosaPortare: 'Protezione solare e acqua; l\'attrezzatura da trekking non serve, perché il percorso principale si fa tutto in pullman.',
    perChiEAdatta: 'Adatta a tutti, bambini compresi, perché non si cammina.',
    giudizio: 'da-verificare',
    alternative: ['Il sentiero guidato a piedi (con prenotazione separata e posti più limitati), per chi vuole vedere il paesaggio da vicino, sempre con una guida del parco'],
    tripSlugs: ['canarie-itinerario'],
    imageAlt: 'Crateri e colate di lava solidificata lungo il percorso della Ruta de los Volcanes, nel Parco di Timanfaya a Lanzarote',
    immagine: '/images/spagna/timanfaya-ruta-volcanes.jpg',
  },
]
