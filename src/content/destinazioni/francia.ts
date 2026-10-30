import type { Destinazione } from '@/lib/types'

// La Francia è organizzata per temi e per regioni-carattere: vedi il commento
// in src/content/paesi/francia.ts. Nessun nome di hotel, ristorante, operatore
// o domaine è stato inventato. Prezzi, contingentamenti e regole di accesso
// cambiano ogni stagione e sono la parte che invecchia più in fretta: vanno
// riverificati prima di partire.

export const destinazioniFrancia: Destinazione[] = [
  {
    slug: 'costa-azzurra',
    paeseSlug: 'francia',
    ordine: 1,
    nome: 'Costa Azzurra',
    tipologia: ['mare', 'città', 'arte'],
    giorniConsigliati: '7-10 giorni usando una sola base',
    visitataPersonalmente: true,
    introduzione:
      'Centoventi chilometri di costa tra Cassis e Mentone. Uno dietro l\'altro ci stanno una città di mezzo milione di abitanti che l\'UNESCO ha riconosciuto per aver inventato la villeggiatura, il porto turistico più importante del Mediterraneo, tre musei di Picasso, una fondazione d\'arte moderna tra le più importanti d\'Europa e un parco nazionale alpino a un\'ora e mezza dalla spiaggia. È anche il pezzo di Francia che più soffre la propria fama: in luglio e agosto la costa è un ingorgo continuo e i prezzi non hanno rapporto con niente.',
    percheAndarci:
      'Nessun\'altra costa mediterranea ha così tante cose diverse a venti minuti l\'una dall\'altra, ed è uno dei pochi posti al mondo dove a febbraio si può sciare al mattino e stare al sole in riva al mare nel pomeriggio. La versione che vale la pena è quella di maggio, di ottobre e, a sorpresa, di gennaio. Quella di agosto molto meno.',
    cosaVedere: [
      '**Antibes**: la città vecchia dentro i bastioni, il **Marché Provençal** al mattino sul Cours Masséna, il **Musée Picasso** nel Château Grimaldi, dove Picasso lavorò nell\'autunno del 1946, e **Port Vauban**, il porto più grande del Mediterraneo per tonnellaggio, con il molo degli yacht enormi',
      '**Il Cap d\'Antibes** e il sentiero del litorale che ne gira la punta: gratuito, sul mare, e quasi nessuno lo fa',
      '**Nizza**: la Promenade des Anglais, il Vieux Nice, il mercato del **Cours Saleya**, la Colline du Château e i musei **Matisse** e **Chagall** a Cimiez. Dal 2021 la città è patrimonio UNESCO come luogo in cui è nata la villeggiatura invernale',
      '**Villefranche-sur-Mer** con la rada profonda e la cappella decorata da **Cocteau**, e **Saint-Jean-Cap-Ferrat** con la **Villa Ephrussi de Rothschild** e i suoi nove giardini tematici',
      '**Èze**, villaggio arroccato con il giardino esotico in cima, e il **Sentier Nietzsche** che ci sale dal mare',
      '**Cannes** con Le Suquet e il mercato Forville, e davanti le **Isole di Lerino**: Sainte-Marguerite con il forte della Maschera di Ferro e Saint-Honorat con l\'abbazia dove i monaci coltivano la vigna',
      '**Saint-Paul-de-Vence** e la **Fondation Maeght**, e a Vence la **Chapelle du Rosaire**, che Matisse progettò in ogni dettaglio (vetrate, ceramiche, paramenti) e considerava il proprio capolavoro',
      '**Mentone**, il punto più caldo della costa, con i giardini botanici e la Festa del Limone di febbraio',
      '**Grasse** per il profumo, **Biot** per il vetro soffiato, **Vallauris** per le ceramiche di Picasso',
      '**Il Mercantour e la Valle delle Meraviglie**, con migliaia di incisioni rupestri dell\'età del Bronzo sotto il Monte Bego, a un\'ora e mezza dal mare',
    ],
    cosaFare: [
      'Il **sentiero del litorale del Cap d\'Antibes**: è la cosa migliore della costa e non costa niente (c\'è una scheda esperienza dedicata)',
      'Il **mercato di Antibes** o il **Cours Saleya** al mattino, che è dove la costa vive la sua giornata normale',
      'Le **Isole di Lerino** in traghetto da Cannes, per capire cosa c\'era prima degli alberghi',
      'La **Grande Corniche** in auto da Nizza a Mentone, con le tre corniches a quote diverse',
      'Sciare a **Isola 2000, Auron o Valberg** e scendere al mare nel pomeriggio: si può fare sul serio',
      'Il **Train des Pignes** da Nizza verso l\'entroterra, una ferrovia a scartamento ridotto che lascia la costa e sale',
    ],
    doveDormire:
      'Conta più la base della struttura, ed è il tema del primo confronto qui sotto. In generale **il treno regionale lungo la costa è ottimo**: si dorme in un posto e ci si muove ovunque senza auto, che in estate è un vantaggio enorme. Antibes e Villefranche sono i compromessi migliori tra prezzo, posizione e vivibilità. Nizza ha l\'offerta più ampia e l\'aeroporto. Cannes costa di più, e nella settimana del festival è impraticabile. Mentone è la più economica e la più lontana da tutto.',
    doveMangiare:
      'La cucina nizzarda è mediterranea e povera, e con quella francese classica c\'entra poco: **socca** (una focaccia di farina di ceci cotta nel forno a legna e servita bollente, a pezzi, in coppette di carta), **pissaladière** (cipolle, acciughe, olive), **pan bagnat**, **petits farcis**, **ratatouille**, e la **salade niçoise**, che nella versione locale **non ha né patate né fagiolini cotti**: è un\'insalata cruda, e la questione qui è presa molto sul serio. Poi la **daube** di manzo, la **bouillabaisse** più a ovest verso Marsiglia, e i **vini di Bellet**, la denominazione minuscola che sta dentro il comune di Nizza. In generale **il menù di mezzogiorno** costa la metà di quello della sera, e sui lungomare si paga la posizione.',
    comeArrivare:
      'L\'aeroporto di **Nizza** è il secondo di Francia, sta sulla costa ed è collegato al centro dal tram. In treno l\'alta velocità arriva da Parigi in circa sei ore; dall\'Italia la linea costiera passa da Ventimiglia. In auto c\'è l\'autostrada A8, a pedaggio, lungo tutta la costa.',
    comeSpostarsi:
      '**Quasi sempre la risposta giusta è il treno regionale lungo la costa**: collega Cannes, Antibes, Nizza, Monaco e Mentone con corse frequenti, costa pochissimo e salta il traffico, che d\'estate è quello che rovina le giornate. Gli autobus regionali del dipartimento hanno tariffe molto basse e coprono anche l\'entroterra; **le formule tariffarie cambiano spesso, conviene controllarle prima**. L\'auto serve solo per l\'entroterra e per il Mercantour, e ovunque altrove è un peso: **in tutte le città costiere il parcheggio è caro, scarso e d\'estate una battaglia**.',
    periodoMigliore:
      '**maggio-giugno e da metà settembre a ottobre.** **Luglio e agosto sono il momento peggiore**: traffico, spiagge piene, prezzi al massimo, e una città come Antibes triplica gli abitanti. **L\'inverno è il segreto meglio custodito della costa**: da dicembre a marzo il clima è mite e i sentieri sul mare sono vuoti; a febbraio ci sono la mimosa in fiore, la Festa del Limone a Mentone e il Carnevale di Nizza, e le stazioni di sci del Mercantour sono a un\'ora e mezza. Aprile e ottobre sono i mesi ideali per i sentieri costieri.',
    costi:
      'In alta stagione è tra le zone più care di Francia; da ottobre a marzo i prezzi tornano normali. I musei costano poco (il Picasso di Antibes e i musei municipali di Nizza hanno prezzi contenuti), i trasporti regionali pochissimo, gli alloggi molto. Le due voci che sfuggono di mano sono **il parcheggio** e **gli stabilimenti balneari privati**, dove in alta stagione un lettino costa quanto una cena.',
    erroriDaEvitare: [
      '**Venire in luglio o agosto con l\'auto e senza aver prenotato il parcheggio.** È l\'errore che rovina più soggiorni: si passa la giornata in coda sulla costiera e a girare in cerca di un posto',
      'Prenotare a Cannes nella settimana del festival senza saperlo: la città diventa impraticabile e i prezzi si moltiplicano',
      'Non usare il treno costiero, che è frequente, economico e nelle ore di punta più veloce dell\'auto',
      'Aspettarsi spiagge di sabbia: **gran parte della costa, Nizza compresa, è di ciottoli**. Le scarpette di gomma cambiano la giornata; le spiagge di sabbia vera stanno più a ovest, verso Antibes-Juan e Cannes',
      'Fermarsi sulla fascia costiera. **L\'entroterra comincia a dieci chilometri dal mare** ed è lì che la Costa Azzurra è ancora sé stessa',
      'Ordinare una salade niçoise aspettandosi le patate, e discuterne con un nizzardo',
      'Dare per scontato che il Mercantour sia sempre raggiungibile: **la tempesta Alex del 2020 ha devastato le valli della Roya e della Vésubie** e la viabilità è stata ricostruita a tappe. Prima di salire conviene controllare lo stato delle strade',
    ],
    confronti: [
      {
        titolo: 'Dove mettere base sulla Costa Azzurra',
        introduzione:
          'In treno la costa si attraversa da un capo all\'altro in un\'ora e mezza, quindi la base non limita quello che si vede. Cambia quanto si spende, quanta gente si ha intorno e che serate si fanno. È la decisione più importante del viaggio, e quasi sempre si prende a caso.',
        opzioni: [
          {
            nome: 'Nizza',
            sintesi: 'La città vera: mezzo milione di abitanti, aeroporto, tram, musei, un centro storico che vive tutto l\'anno e la scelta di alloggi più ampia della costa.',
            costo: 'media-alta, con la forbice più ampia della costa: si trova di tutto',
            durata: 'ottima anche per soggiorni lunghi',
            pro: [
              'L\'unica base che funziona del tutto senza auto: aeroporto, stazione, tram e treni costieri',
              'Musei di primo livello (Matisse, Chagall, MAMAC) a prezzi contenuti',
              'Il Vieux Nice e il Cours Saleya sono vivi tutto l\'anno, anche fuori stagione',
              'La scelta di alloggi più ampia, e la più facile da trovare fuori stagione',
            ],
            contro: [
              'È una città, con i problemi di una città: traffico, rumore, borseggi nelle zone turistiche',
              'La spiaggia è di ciottoli grossi, e per molti è una delusione',
              'In alta stagione la Promenade è satura',
            ],
            perChi: 'Chi viaggia senza auto, chi vuole musei e vita cittadina, chi arriva in aereo per pochi giorni.',
          },
          {
            nome: 'Antibes e Juan-les-Pins',
            sintesi: 'Il compromesso migliore della costa: una città vecchia dentro i bastioni, un mercato vero, spiagge di sabbia, il Cap con i sentieri, e il treno per tutto il resto.',
            costo: 'media, parecchio sotto Cannes e Saint-Jean-Cap-Ferrat',
            durata: 'la base ideale per 7-10 giorni',
            pro: [
              'La città vecchia è abitata e il Marché Provençal è un mercato di quartiere, non una scenografia',
              'Spiagge di sabbia, che su questa costa non sono scontate',
              'Il Cap d\'Antibes con il sentiero del litorale a venti minuti a piedi dal centro',
              'Il Musée Picasso nel castello dove Picasso ha lavorato, con la vista sul mare dalla terrazza',
              'Posizione centrale: Cannes a un quarto d\'ora di treno, Nizza a venti minuti',
            ],
            contro: [
              'D\'estate Juan-les-Pins è rumorosa fino a notte fonda: chi cerca silenzio stia dalla parte del Cap o del centro storico',
              'In agosto la popolazione si moltiplica e parcheggiare diventa impossibile',
              'Meno musei di Nizza',
            ],
            perChi: 'Chi vuole una base per una settimana o più, chi viaggia in famiglia, chi cerca l\'equilibrio tra prezzo, mare e posizione. È la scelta che consiglio.',
          },
          {
            nome: 'Cannes',
            sintesi: 'Croisette, Palais des Festivals, Le Suquet in collina e il mercato Forville. Più ordinata e più cara di Antibes, con le Isole di Lerino davanti.',
            costo: 'alta, e fuori scala nelle settimane degli eventi',
            durata: '3-5 giorni',
            pro: [
              'Spiagge di sabbia lungo tutta la Croisette',
              'Le Suquet, la collina della città vecchia, con la vista sul porto',
              'Le Isole di Lerino a quindici minuti di traghetto, il contrasto migliore con la città',
              'Il mercato Forville, uno dei migliori della costa',
            ],
            contro: [
              '**Nella settimana del festival la città è impraticabile** e i prezzi si moltiplicano: prima di prenotare conviene guardare il calendario',
              'Fuori dagli eventi è meno viva di Nizza e meno abitata di Antibes',
              'Il rapporto qualità-prezzo degli alloggi è il peggiore della costa',
            ],
            perChi: 'Chi vuole le spiagge di sabbia e un contesto ordinato, e non capita nelle settimane sbagliate.',
          },
          {
            nome: 'Villefranche, Beaulieu e Saint-Jean-Cap-Ferrat',
            sintesi: 'Il tratto più bello e più raccolto della costa, tra Nizza e Monaco: una rada profondissima, un borgo di case ocra e la penisola delle ville.',
            costo: 'da media (Villefranche) a molto alta (Saint-Jean-Cap-Ferrat)',
            durata: '3-5 giorni',
            pro: [
              'Villefranche è forse il borgo più bello della costa, con la rue Obscure medievale e la cappella di Cocteau',
              'La Villa Ephrussi de Rothschild e i sentieri del litorale del Cap Ferrat',
              'Nizza e Monaco a pochi minuti di treno',
              'Molto più tranquilla della costa a ovest',
            ],
            contro: [
              'Pochi alloggi e cari, soprattutto sul Cap Ferrat',
              'Poca vita serale: chi cerca movimento deve spostarsi',
              'In stagione le spiagge sono piccole e affollate',
            ],
            perChi: 'Chi cerca la costa più scenografica e accetta di pagarla, chi viaggia in coppia, chi vuole Monaco a portata.',
          },
          {
            nome: 'L\'entroterra: Valbonne, Mougins, Vence, Tourrettes',
            sintesi: 'Dieci o quindici chilometri dentro e cambia tutto: villaggi in pietra, uliveti, prezzi normali, e il mare a venti minuti di auto.',
            costo: 'media-bassa, la più economica di tutte le opzioni',
            durata: 'ottima per soggiorni lunghi e per chi ha l\'auto',
            pro: [
              'A parità di struttura i prezzi sono parecchio più bassi',
              'Il caldo è più sopportabile e le sere sono fresche',
              'Si è vicini a Grasse, alle Gorges du Loup, a Saint-Paul-de-Vence e alla Fondation Maeght',
              'È la Provenza collinare, diversa dalla costa e spesso più bella',
            ],
            contro: [
              '**Serve l\'auto**, e sulla costa l\'auto è un peso: parcheggio caro e traffico',
              'Ogni volta che si va al mare bisogna mettere in conto traffico e sosta',
              'I mezzi pubblici ci sono, ma sono lenti',
            ],
            perChi: 'Chi ha l\'auto, chi si ferma a lungo, chi viene in estate e vuole scappare dal caos della costa, chi ha un budget da rispettare.',
          },
        ],
        raccomandazione:
          'Per la maggior parte delle persone la risposta giusta è **Antibes**: è l\'unica base della costa che sia abitata, economica rispetto alle vicine, con spiagge di sabbia, in posizione centrale sulla ferrovia e a piedi da un sentiero costiero che vale il viaggio. **Nizza** la batte solo per chi non ha l\'auto e va per i musei, **l\'entroterra** solo per chi viene in agosto o resta un mese.',
      },
      {
        titolo: 'Quanto entrare nell\'entroterra, e dove',
        introduzione:
          'La Costa Azzurra è larga dieci chilometri e profonda cento. Quello che sta dietro la prima fila di colline costa meno, è meno affollato e spesso è più interessante della costa. Però sono posti molto diversi tra loro, e il tempo che chiedono cambia di un ordine di grandezza.',
        opzioni: [
          {
            nome: 'I villaggi arroccati vicini: Èze, Saint-Paul-de-Vence, Mougins',
            sintesi: 'Borghi in pietra a mezz\'ora dal mare, con vicoli stretti, gallerie d\'arte e panorami. Sono i più belli e i più visitati.',
            costo: 'bassi (i borghi sono gratis), a pagamento i giardini e le fondazioni',
            durata: 'mezza giornata ciascuno',
            pro: [
              'Èze ha in cima al villaggio il giardino esotico, con la vista più alta della costa',
              'Saint-Paul-de-Vence ospita la **Fondation Maeght**, una delle raccolte d\'arte moderna più importanti d\'Europa, con il cortile di Giacometti e il labirinto di Miró',
              'A Vence, poco sopra, c\'è la **Chapelle du Rosaire** di Matisse, che la progettò in ogni dettaglio e la considerava il proprio capolavoro',
              'Si raggiungono facilmente anche senza fermarsi a dormire',
            ],
            contro: [
              'Nelle ore centrali sono pieni di pullman: conviene andarci presto al mattino o nel tardo pomeriggio',
              'Le vie principali sono file di negozi per turisti',
              '**La Chapelle du Rosaire apre pochi giorni e con orari molto limitati**: conviene controllarli prima, perché chi si presenta a caso la trova chiusa',
            ],
            perChi: 'Tutti, purché ci si vada fuori dalle ore centrali.',
          },
          {
            nome: 'Grasse e le colline del profumo',
            sintesi: 'La capitale storica della profumeria, con il museo internazionale e le case storiche dove si prova a comporre una fragranza.',
            costo: 'contenuto per il museo, medio per i laboratori di composizione',
            durata: 'mezza giornata o una giornata',
            pro: [
              'Il **Musée International de la Parfumerie** racconta una storia industriale e agricola vera, non è una vetrina',
              'Le colline intorno sono coltivate a rosa centifolia e gelsomino, con la raccolta a maggio e in agosto',
              'La città vecchia è meno turistica di quanto ci si aspetti',
            ],
            contro: [
              'Grasse città è meno bella dei villaggi vicini e in parte trascurata',
              'I laboratori «crea il tuo profumo» sono un prodotto turistico: piacevoli, ma con l\'artigianato c\'entrano poco',
            ],
            perChi: 'Chi vuole capire come una valle agricola è diventata un distretto industriale globale.',
          },
          {
            nome: 'Le Gorges du Loup e Tourrettes-sur-Loup',
            sintesi: 'Una gola scavata nella roccia con una strada a strapiombo, cascate e piscine naturali, e sopra un villaggio noto per la coltivazione della violetta.',
            costo: 'gratis, salvo i parcheggi',
            durata: 'una giornata',
            pro: [
              'La strada della gola è una delle più belle del dipartimento e si fa in auto o in bici',
              'Lungo il torrente ci sono piscine naturali e cascate, che d\'estate sono una vera alternativa al mare',
              'Tourrettes-sur-Loup è un borgo abitato, con botteghe artigiane e senza folla',
            ],
            contro: [
              'Serve l\'auto, e la strada è stretta con pochi punti di sosta',
              'In agosto le piscine naturali sono affollate, e l\'acqua è gelida tutto l\'anno',
            ],
            perChi: 'Chi vuole una giornata lontano dal mare senza allontanarsi troppo.',
          },
          {
            nome: 'Il Mercantour e la Valle delle Meraviglie',
            sintesi: 'Un parco nazionale alpino con cime sopra i tremila metri a un\'ora e mezza dalla spiaggia, e sotto il Monte Bego decine di migliaia di incisioni rupestri dell\'età del Bronzo.',
            costo: 'accesso al parco gratuito; visite accompagnate alla zona delle incisioni a pagamento',
            durata: '2-3 giorni minimo',
            pro: [
              'È quello che più stupisce chi conosce solo la costa: alta montagna vera, marmotte, camosci e laghi glaciali',
              'La **Valle delle Meraviglie** ha una delle maggiori concentrazioni di arte rupestre preistorica d\'Europa',
              'Il Train des Pignes e il treno per Tenda risalgono le valli senza bisogno di guidare',
            ],
            contro: [
              '**La zona delle incisioni è accessibile solo d\'estate** (indicativamente da luglio a settembre), si raggiunge con lunghe camminate in quota e **le aree principali si visitano solo con una guida autorizzata**: le regole cambiano, conviene controllarle ogni stagione',
              'Serve un abbigliamento completamente diverso: è alta montagna, non mare',
              '**La tempesta Alex del 2020 ha devastato le valli della Roya e della Vésubie**: strade e servizi sono stati ricostruiti a tappe, ed è meglio informarsi sul loro stato prima di partire',
            ],
            perChi: 'Chi resta almeno una settimana e vuole vedere l\'altra faccia della Costa Azzurra.',
          },
        ],
        raccomandazione:
          'In una settimana il minimo è **mezza giornata a Saint-Paul-de-Vence con la Fondation Maeght e la Chapelle du Rosaire a Vence**: insieme raccontano l\'arte del Novecento su questa costa meglio di qualunque museo. Chi ha dieci giorni aggiunga **due giorni nel Mercantour**, il contrasto più forte che la regione offra.',
      },
    ],
    miaEsperienza:
      'In due anni ad Antibes ho imparato una cosa che le guide non scrivono: la Costa Azzurra ha due stagioni, ed è il contrario di come la si immagina. Da giugno a settembre è un posto difficile. Il traffico sulla costiera non si ferma mai, trovare parcheggio è una battaglia quotidiana, le spiagge sono piene e i prezzi salgono ovunque. Da ottobre a maggio è uno dei posti più piacevoli d\'Europa: c\'è il sole, i sentieri sul mare sono deserti, i mercati tornano a essere mercati di quartiere, e a febbraio la mimosa è in fiore mentre a un\'ora e mezza di macchina si scia. Chi ci vive, in agosto, parte o sale nell\'entroterra. La seconda cosa è il treno. La linea costiera passa ogni pochi minuti, costa pochi euro, collega tutto da Cannes a Mentone e non conosce ingorghi, eppure quasi nessun turista lo usa: noleggiano l\'auto e passano la vacanza a cercare posto. La terza è che la costa si esaurisce in fretta, l\'entroterra no. Dieci chilometri più in là ci sono villaggi in pietra dove si mangia spendendo la metà, e a un\'ora e mezza c\'è un parco nazionale con i camosci. E poi il Cap d\'Antibes, che finisci per rifare cento volte: un sentiero pubblico e gratuito che gira la punta del capo sul mare, con le onde sotto e le ville nascoste dietro i muri. D\'inverno non c\'è nessuno.',
    esperienzeSlugs: ['sentiero-cap-antibes', 'mercato-provenzale-antibes', 'museo-picasso-antibes', 'sentiero-nietzsche-eze', 'fondation-maeght', 'isole-lerino'],
    tripSlugs: ['costa-azzurra'],
    imageAlt: 'Il bastione di pietra della città vecchia di Antibes affacciato sul mare sotto un cielo limpido, Costa Azzurra',
    immagine: '/images/francia/costa-azzurra.jpg',
  },
  {
    slug: 'parigi',
    paeseSlug: 'francia',
    ordine: 2,
    nome: 'Parigi',
    tipologia: ['città', 'arte', 'architettura'],
    giorniConsigliati: '5 giorni, con versioni da 3 e da 2',
    visitataPersonalmente: true,
    introduzione:
      'Venti arrondissement disposti a spirale a partire dal primo, due isole sulla Senna, il museo più visitato del mondo e una concentrazione di grandi collezioni che in Europa ha pochi confronti. È anche la città dove si sbaglia più spesso il programma: sulla mappa tutto sembra vicino e non lo è, e i musei chiudono in giorni diversi.',
    percheAndarci:
      'In nessun\'altra città, nello stesso giorno, si passa da una vetrata gotica del Duecento a una collezione impressionista dentro una stazione ferroviaria del 1900, e poi a un quartiere senza niente di monumentale dove si mangia meglio che in centro. E la Parigi che resta in testa è quella dei quartieri, più che quella dei monumenti.',
    cosaVedere: [
      'Il **Louvre**, il museo più grande del mondo, con la Vittoria di Samotracia in cima allo scalone Daru, la Venere di Milo, la Zattera della Medusa e gli appartamenti di Napoleone III. **La prenotazione con fascia oraria è di fatto obbligatoria; chiuso il martedì**',
      'Il **Musée d\'Orsay** dentro l\'ex stazione ferroviaria del 1900, con gli impressionisti all\'ultimo piano. **Chiuso il lunedì**',
      'L\'**Orangerie**, con le due sale ovali delle **Ninfee** progettate da Monet stesso per quello spazio',
      'La **Sainte-Chapelle**, con quindici vetrate alte quindici metri e oltre mille pannelli istoriati, costruita in circa sette anni per custodire la Corona di Spine',
      '**Notre-Dame**, riaperta nel dicembre 2024 dopo l\'incendio del 2019: la pietra ripulita ha restituito un interno chiarissimo. **Ingresso gratuito, con prenotazione a fasce orarie: il sistema cambia, conviene controllarlo prima**',
      'La **Tour Eiffel**, e soprattutto i punti da cui guardarla: Trocadéro, l\'Arc de Triomphe, Montparnasse, le terrazze dei grandi magazzini (gratuite), il Parc de Belleville',
      '**Versailles**, con la Galleria degli Specchi, il Trianon e l\'Hameau de la Reine. **Prenotazione obbligatoria, chiuso il lunedì**',
      'Il **Marais** con Place des Vosges, la piazza pianificata più antica di Parigi, e il **Musée Picasso** nell\'Hôtel Salé',
      'Le **Catacombe**, un chilometro e mezzo di gallerie con i resti di milioni di persone, a quattordici gradi costanti. **Su prenotazione**',
      'Il **Père-Lachaise**, gratuito, e i quartieri che non stanno sulle cartoline: Canal Saint-Martin, Belleville, Buttes-Chaumont, la **Coulée verte René-Dumont**, il parco lineare sopra un viadotto ferroviario che ha anticipato di vent\'anni la High Line di New York',
    ],
    cosaFare: [
      'Il **Louvre con una strategia decisa prima**, invece di percorrerlo tutto (c\'è una scheda esperienza dedicata)',
      'La **Sainte-Chapelle in una giornata di sole**, l\'unica condizione in cui ha senso (c\'è una scheda esperienza dedicata)',
      'Salire a **Montmartre all\'alba**, quando il quartiere è di chi ci abita (c\'è una scheda esperienza dedicata)',
      'Camminare nei **passages couverts** del secondo arrondissement, gallerie commerciali ottocentesche con i lucernari in vetro',
      'Prendere il caffè **al banco** invece che al tavolo: i due prezzi sono diversi, esposti per legge, e al banco si paga la metà',
      'Comprare una **baguette de tradition** in una boulangerie di quartiere: è una categoria regolata per legge, non un nome commerciale',
    ],
    doveDormire:
      'La regola è una sola: stare **dentro i venti arrondissement e vicino a una stazione della metropolitana**. Il resto conta poco. Il **Marais** (3° e 4°) e **Saint-Germain** (6°) sono i più belli e i più cari; il **quartiere latino** (5°) è centrale e più economico; **Canal Saint-Martin e République** (10° e 11°) hanno il miglior rapporto tra prezzo, vita di quartiere e collegamenti; **Montmartre** (18°) è bellissimo e in salita, e la parte bassa verso Pigalle è molto diversa da quella alta. Per un primo viaggio meglio evitare le zone fuori dal Périphérique: sulla mappa sembrano vicine, ma costano quaranta minuti a tratta.',
    doveMangiare:
      'A Parigi è facilissimo mangiare male spendendo molto, e c\'è una sola difesa: **allontanarsi dai monumenti**. Il **menù di mezzogiorno** (formule entrée-plat o plat-dessert) costa una frazione della stessa cucina la sera. I **bouillon**, ristoranti popolari nati nell\'Ottocento per dare da mangiare agli operai, esistono ancora e servono cucina classica a prezzi bassissimi. Da provare: **steak-frites**, **confit de canard**, **soupe à l\'oignon gratinée**, le **ostriche** da settembre, i formaggi di una fromagerie vera e la **baguette de tradition** appena sfornata. Il **servizio è compreso per legge**: la mancia è facoltativa e simbolica.',
    comeArrivare:
      'Tre aeroporti: **Charles-de-Gaulle** (collegato dal treno regionale RER B), **Orly** (collegato dal prolungamento della **linea 14** della metropolitana, inaugurato nel 2024, oggi il modo più semplice per arrivare in centro) e **Beauvais**, lontano, che serve i voli low cost. In treno l\'alta velocità collega Parigi a tutta Europa; il diretto da Milano e Torino è rimasto a lungo interrotto per una frana in Savoia, quindi **prima di prenotare conviene controllare se è tornato in servizio**.',
    comeSpostarsi:
      'La **metropolitana** ha sedici linee e passa di continuo: quasi sempre è la risposta giusta. **I carnet di biglietti di carta non ci sono più**: si usa una carta ricaricabile o il telefono, e **dal 2025 c\'è una tariffa unica semplificata per la rete di Parigi e dell\'Île-de-France**, con un prezzo a parte per gli aeroporti. **Importi e condizioni cambiano, conviene controllarli sul sito ufficiale**. Parigi si gira benissimo anche a piedi, e negli ultimi anni le piste ciclabili sono aumentate moltissimo, con un sistema di bici pubbliche capillare.',
    periodoMigliore:
      '**aprile-giugno e settembre-ottobre.** L\'estate è calda e affollata, e **in agosto molti ristoranti e negozi di quartiere chiudono per settimane**: la città è più vuota, ma anche più difficile da vivere. L\'inverno è freddo e umido, con le giornate corte, però ha le code più brevi e i prezzi più bassi. Per chi viene soprattutto per i musei è un\'ottima scelta.',
    costi:
      'Alti, e la voce che pesa di più è l\'alloggio. I singoli musei costano poco. Il **Paris Museum Pass** da 2, 4 o 6 giorni conviene da circa tre musei al giorno, ma **non salta i controlli di sicurezza e non sostituisce la prenotazione oraria dove è richiesta** (Louvre e Versailles su tutti): è l\'equivoco più comune. Diversi musei municipali, come Carnavalet e Petit Palais, hanno la **collezione permanente gratuita**.',
    erroriDaEvitare: [
      '**Non prenotare Louvre e Versailles.** Il pass da solo non basta: serve la fascia oraria, e nei periodi di punta si esaurisce',
      'Non controllare i giorni di chiusura: **il Louvre chiude il martedì, Orsay il lunedì, Versailles il lunedì**, e il martedì la folla si riversa su Orsay e Versailles',
      'Mettere in programma il **Centre Pompidou** senza controllare: è entrato in una lunga chiusura per ristrutturazione e la riapertura è prevista a fine decennio',
      'Salire sulla Tour Eiffel per vedere Parigi: da lassù al panorama manca proprio la torre',
      'Fermarsi a Place du Tertre, la parte meno autentica di Montmartre, a duecento metri da vie in cui non c\'è nessuno',
      'Sedersi al tavolo per un caffè veloce: al banco costa circa la metà, e i due prezzi sono esposti per legge',
      'Sottovalutare le distanze: la mappa della metropolitana comprime tutto, e Parigi è larga dieci chilometri',
    ],
    confronti: [
      {
        titolo: 'Quali musei scegliere',
        introduzione:
          'Parigi ha più grandi musei di quanti se ne possano vedere in una settimana, e viene la tentazione di infilarne tre al giorno. Dopo il secondo si smette di guardare. La domanda utile è quali reggono il tempo che hai, più che quali sono i più importanti.',
        opzioni: [
          {
            nome: 'Il Louvre',
            sintesi: 'Il museo più grande e più visitato del mondo, con decine di migliaia di opere esposte su chilometri di sale.',
            costo: 'biglietto singolo contenuto rispetto alla dimensione; incluso nel Museum Pass, ma la prenotazione oraria serve comunque',
            durata: 'mezza giornata come minimo, e non lo si finisce mai',
            pro: [
              'Copre cinquemila anni, dall\'Egitto al Settecento francese: nessun altro museo ha questa ampiezza',
              'La Vittoria di Samotracia in cima allo scalone Daru è forse l\'allestimento più riuscito di qualunque museo al mondo',
              'Le antichità mesopotamiche ed egizie sono di primo livello e semivuote',
              'L\'edificio stesso, con le fondazioni del castello medievale visitabili nei sotterranei',
            ],
            contro: [
              'La sala della Gioconda è un imbuto di folla in cui si guarda da lontano un quadro piccolo, e per molti è una delusione annunciata',
              'È faticoso: si camminano chilometri',
              'Chiuso il martedì, e senza fascia oraria prenotata si rischia di restare fuori',
            ],
            perChi: 'Chi ha almeno tre giorni in città e accetta di sceglierne due o tre ali invece di percorrerlo tutto.',
          },
          {
            nome: 'Il Musée d\'Orsay',
            sintesi: 'Impressionismo e post-impressionismo dentro una stazione ferroviaria del 1900 rimasta intatta come contenitore.',
            costo: 'contenuto, incluso nel Museum Pass',
            durata: 'mezza giornata',
            pro: [
              'La collezione impressionista più importante al mondo, concentrata all\'ultimo piano',
              'L\'edificio: la navata della stazione con il grande orologio fa parte della visita',
              'Ha una dimensione umana: lo si finisce, e rispetto al Louvre questo cambia tutto',
            ],
            contro: [
              'Molto affollato, soprattutto il martedì quando il Louvre è chiuso',
              'Chiuso il lunedì',
            ],
            perChi: 'Quasi tutti. Se a Parigi si sceglie un solo grande museo, per molti è questo.',
          },
          {
            nome: 'L\'Orangerie e il Musée Marmottan Monet',
            sintesi: 'Due musei piccoli e monografici: le Ninfee nelle sale ovali volute da Monet, e la più ampia raccolta di Monet al mondo.',
            costo: 'contenuti; l\'Orangerie è nel Museum Pass, il Marmottan di solito no',
            durata: 'un\'ora e mezza ciascuno',
            pro: [
              'Le due sale ovali dell\'Orangerie sono uno spazio progettato dall\'artista per le sue opere, e si vivono più che visitarle',
              'Il Marmottan, fuori dal circuito, conserva il quadro da cui l\'impressionismo prende il nome ed è quasi sempre tranquillo',
              'Sono corti: stanno in mezza giornata senza stancare',
            ],
            contro: [
              'L\'Orangerie, pur piccola, ha code lunghe nelle ore centrali',
              'Il Marmottan è decentrato e bisogna andarci apposta',
            ],
            perChi: 'Chi ha già visto Orsay e vuole approfondire, o chi ha poco tempo e preferisce una cosa breve e intensa.',
          },
          {
            nome: 'I musei gratuiti e sottovalutati',
            sintesi: 'Carnavalet per la storia di Parigi, Petit Palais per la pittura dell\'Ottocento, la Maison de Victor Hugo: collezioni permanenti a ingresso gratuito.',
            costo: 'gratuiti (collezioni permanenti; le mostre temporanee si pagano)',
            durata: 'un\'ora o due ciascuno',
            pro: [
              'Il **Carnavalet** racconta la storia della città in modo molto concreto, con insegne, interni ricostruiti e oggetti della Rivoluzione',
              'Il **Petit Palais** ha un cortile-giardino interno che quasi nessuno conosce',
              'Rispetto ai grandi musei sono vuoti, e si entra senza code',
            ],
            contro: [
              'Non hanno capolavori famosi in tutto il mondo: per alcuni è il bello, per altri un limite',
            ],
            perChi: 'Chi torna a Parigi, chi ha un budget stretto, chi vuole capire la città oltre che attraversarla.',
          },
        ],
        raccomandazione:
          'In cinque giorni: **Orsay e Louvre in due mezze giornate separate**, mai nello stesso giorno, **l\'Orangerie** come terza visita breve e almeno **un museo gratuito di quartiere**. In tre giorni: **Orsay e basta**, più la Sainte-Chapelle, che non è un museo ed è l\'interno più bello della città.',
      },
      {
        titolo: 'Versailles, Fontainebleau o Chantilly?',
        introduzione:
          'Sono tre regge raggiungibili in giornata da Parigi, molto diverse per folla, dimensioni e tipo di visita. Versailles è la più famosa e la più faticosa; le altre due sono quasi vuote e quasi nessuno ci pensa.',
        opzioni: [
          {
            nome: 'Versailles',
            sintesi: 'La reggia che ha fissato il modello della corte europea, con la Galleria degli Specchi, i giardini di Le Nôtre, il Trianon e l\'Hameau de la Reine.',
            costo: 'biglietto per il castello, supplemento nelle giornate con le fontane in funzione; il parco è in gran parte gratuito',
            durata: 'una giornata intera, e non basta',
            pro: [
              'La Galleria degli Specchi e gli appartamenti reali non hanno equivalenti',
              'Il **Domaine de Marie-Antoinette**, con il Petit Trianon e l\'**Hameau de la Reine** (un finto villaggio agricolo costruito per la regina), è la parte che sorprende di più ed è la meno visitata',
              'Il parco è enorme e si gira in bici, in barca sul Grand Canal o con il trenino',
              'Nei fine settimana, da primavera ad autunno, **le fontane funzionano con accompagnamento musicale**: è lo spettacolo per cui il giardino è stato progettato',
            ],
            contro: [
              '**Folla estrema**: negli appartamenti si procede in fila indiana',
              'Prenotazione obbligatoria con fascia oraria, e **chiuso il lunedì**',
              'Il Trianon apre più tardi del castello: sbagliare l\'ordine costa ore',
              'Il martedì, con il Louvre chiuso, è ancora peggio',
            ],
            perChi: 'Chi è a Parigi per la prima volta e non vuole perderla, mettendo in conto la folla e arrivando all\'apertura.',
          },
          {
            nome: 'Fontainebleau',
            sintesi: 'La residenza reale abitata più a lungo in Francia, da otto secoli di sovrani, con una foresta enorme intorno.',
            costo: 'contenuto, parecchio meno di Versailles',
            durata: 'mezza giornata per il castello, una giornata con la foresta',
            pro: [
              'Ha una stratificazione che Versailles non ha: otto secoli di re, e ognuno ha costruito il suo pezzo',
              'La Galleria di Francesco I è uno dei capolavori del Rinascimento in Francia',
              'C\'è molta meno gente',
              'La **foresta di Fontainebleau** è famosa in tutto il mondo per l\'arrampicata sui massi ed è bellissima da camminare',
            ],
            contro: [
              'I giardini sono meno spettacolari di quelli di Versailles',
              'È meno noto, e chi cerca «la cosa da vedere» resta indeciso',
            ],
            perChi: 'Chi torna a Parigi, chi odia la folla, chi vuole unire un castello a una giornata nella natura.',
          },
          {
            nome: 'Chantilly',
            sintesi: 'Un castello su uno specchio d\'acqua, con una pinacoteca che per numero di dipinti antichi è tra le più importanti di Francia dopo il Louvre, e le grandi scuderie settecentesche.',
            costo: 'contenuto, con biglietti cumulativi castello-parco-scuderie',
            durata: 'una giornata',
            pro: [
              'Il **Musée Condé** ha una collezione di pittura straordinaria, esposta secondo l\'allestimento ottocentesco originale per volontà testamentaria del donatore',
              'Le **Grandes Écuries**, scuderie monumentali costruite per un principe convinto di reincarnarsi in cavallo: oggi sono il museo del cavallo, con spettacoli equestri',
              'Il parco disegnato da Le Nôtre, con il giardino all\'inglese e il borgo rustico',
              'Quasi nessun turista internazionale',
            ],
            contro: [
              'È meno collegato: si arriva con il treno regionale più una camminata o una navetta',
              'A chi viene da fuori il nome dice poco, e per questo è il più trascurato dei tre',
            ],
            perChi: 'Chi ama la pittura antica, chi è già stato a Versailles, chi vuole una giornata fuori città senza la calca.',
          },
        ],
        raccomandazione:
          'Alla prima visita **Versailles**, ma fatta bene: prenotazione all\'apertura, subito gli appartamenti, e poi il resto della giornata nel parco e al Trianon, dove la folla si disperde. Alla seconda visita a Parigi, **Chantilly** senza esitare.',
      },
    ],
    miaEsperienza:
      'A Parigi i primi due giorni li ho passati nei posti che conoscevo già prima di arrivare, e il viaggio vero è cominciato il terzo. Il momento in cui la città cambia è quasi sempre lo stesso: esci da un museo grande, sei stanco, prendi una direzione a caso invece di andare verso il monumento successivo e finisci in un quartiere dove non c\'è niente da vedere. Belleville, il Canal Saint-Martin, la parte alta del decimo: la gente seduta sul bordo dell\'acqua, la fila davanti alle boulangerie, nessuno che fotografa niente. Da lì in poi la città funziona. La seconda cosa che ho imparato è la gestione del tempo. Sulla mappa della metropolitana tutto sembra vicino, perché comprime le distanze e inganna, e tre grandi musei in un giorno vogliono dire non vederne nessuno. Due cose grandi al giorno, mai tre. Poi ci sono le regole piccole che cambiano il rapporto con la città: si dice bonjour entrando ovunque, il caffè si beve al banco, dove costa la metà, e la Tour Eiffel si guarda da lontano. Da lassù al panorama manca proprio la torre.',
    esperienzeSlugs: ['louvre-strategia', 'sainte-chapelle', 'montmartre-alba', 'catacombe-parigi', 'pere-lachaise'],
    tripSlugs: ['parigi-5-giorni'],
    imageAlt: 'I tetti di Parigi visti dalla collina di Montmartre accanto alla cupola del Sacré-Cœur, con la Tour Eiffel all\'orizzonte',
    immagine: '/images/francia/parigi.jpg',
  },
  {
    slug: 'normandia',
    paeseSlug: 'francia',
    ordine: 3,
    nome: 'Normandia',
    tipologia: ['storia', 'costa', 'gastronomia'],
    giorniConsigliati: '5-7 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La regione porta il nome di un popolo venuto dal nord, che nel 1066 conquistò l\'Inghilterra, e nel 1944 ha visto lo sbarco più grande della storia militare. Ha una costa di falesie di gesso bianco, un entroterra di pascoli e meli, ed è il posto dove è nato l\'impressionismo: il nome stesso viene da un quadro dipinto nel porto di Le Havre.',
    percheAndarci:
      'È una delle poche regioni d\'Europa dove la storia è il motivo stesso del viaggio, più che un contorno del paesaggio: le spiagge dello sbarco cambiano chi le attraversa. E il Mont-Saint-Michel, al netto della folla, resta una delle cose più straordinarie mai costruite in Europa.',
    cosaVedere: [
      'Le **spiagge dello sbarco**: Utah, Omaha, Gold, Juno e Sword, con il cimitero americano di Colleville-sur-Mer, la **Pointe du Hoc** ancora crivellata dai crateri, le batterie di Longues-sur-Mer e i cassoni del **porto artificiale di Arromanches** ancora in mare',
      'Il **Mémorial de Caen**, il museo che inquadra tutta la vicenda a partire dalla fine della Prima guerra mondiale: va visto prima di andare sulle spiagge',
      'L\'**Arazzo di Bayeux**: settanta metri di ricamo dell\'XI secolo che raccontano la conquista normanna dell\'Inghilterra, iscritto nel registro UNESCO della Memoria del Mondo. **Il museo è in un lungo cantiere di ristrutturazione: prima di andare conviene controllare le date di chiusura e di riapertura**',
      'Il **Mont-Saint-Michel**, con l\'abbazia in cima alla roccia e intorno le maree più ampie dell\'Europa continentale',
      'Le **falesie di Étretat**, con le arcate di gesso, l\'ago di roccia e i sentieri in cima',
      '**Honfleur**, con il Vieux Bassin e Sainte-Catherine, la chiesa in legno più grande di Francia, costruita dai maestri d\'ascia dei cantieri navali',
      '**Rouen**, con la cattedrale che Monet ha dipinto decine di volte a ore diverse del giorno, il Gros-Horloge e il luogo del rogo di Giovanna d\'Arco',
      '**Giverny**, la casa e il giardino di Monet con lo stagno delle ninfee e il ponte giapponese',
    ],
    cosaFare: [
      'Percorrere le **spiagge dello sbarco** in un giorno solo e nell\'ordine giusto (c\'è una scheda esperienza dedicata)',
      'Vedere il **Mont-Saint-Michel con la marea**, l\'unico modo di capirlo (c\'è una scheda esperienza dedicata)',
      'Camminare sopra la **falesia di Étretat** invece di guardarla dalla spiaggia',
      'Visitare una **distilleria di calvados** o una fattoria del sidro: qui sono una filiera agricola vera',
      'Mangiare i formaggi normanni dove nascono: sono quattro e stanno tutti entro cinquanta chilometri',
    ],
    doveDormire:
      '**Bayeux** è la base migliore per le spiagge dello sbarco: piccola, bella, risparmiata dai bombardamenti del 1944 e a mezz\'ora da tutto. **Caen** ha più servizi e il Mémorial. Al Mont-Saint-Michel **si può dormire sull\'isola**, in poche strutture piccole e care: è l\'unico modo di esserci la sera e all\'alba, quando i pullman sono ripartiti. Altrimenti si dorme nei paesi della baia, molto più economici. **Honfleur** e la Côte Fleurie in stagione sono care.',
    doveMangiare:
      'La Normandia è una regione di **burro, panna e mele**, e la cucina lo dice subito: qui olio e vino contano poco. **Camembert, livarot, pont-l\'évêque e neufchâtel** sono quattro formaggi a denominazione nati tutti qui. Il **sidro** si beve a tutto pasto in scodella, il **pommeau** è l\'aperitivo locale e il **calvados** è il distillato di sidro, servito per tradizione a metà pranzo come «trou normand» per riaprire lo stomaco. Poi **ostriche e cozze**, le **capesante**, che hanno una stagione precisa (indicativamente da ottobre a maggio), l\'**agnello di pré-salé** allevato sulle praterie salmastre della baia del Mont-Saint-Michel, e la **teurgoule**, un riso al latte cotto in forno per ore.',
    comeArrivare:
      'In treno da Parigi si arriva a Rouen, Caen e Bayeux in poche ore. **Per le spiagge dello sbarco e per l\'entroterra serve l\'auto**: le distanze sono brevi, ma i siti sono sparsi e i mezzi pubblici non li collegano. Il Mont-Saint-Michel si raggiunge in treno più navetta oppure in auto, con parcheggio obbligatorio sulla terraferma.',
    comeSpostarsi:
      '**Auto**, senza vere alternative. Le strade sono buone e le distanze contenute: tutta la fascia delle spiagge dello sbarco sta in una cinquantina di chilometri. Da Bayeux e Caen partono anche tour accompagnati in giornata, che sul fronte dello sbarco hanno un vantaggio reale: il racconto è metà della visita.',
    periodoMigliore:
      '**da maggio a settembre**, e i mesi migliori sono giugno e settembre. **Il meteo resta una variabile in ogni mese**: piove in tutte le stagioni e il tempo cambia nel giro di un\'ora. Intorno al **6 giugno**, anniversario dello sbarco, ci sono commemorazioni importanti e la zona è affollatissima: è il momento più intenso e il più difficile da organizzare. L\'inverno è grigio e ventoso, e molte strutture sulla costa chiudono.',
    costi:
      'Nella media francese, più bassi che in Costa Azzurra e a Parigi. Nei luoghi dello sbarco si entra quasi sempre **gratis**: cimiteri, Pointe du Hoc e batterie non si pagano, mentre i musei e il Mémorial hanno biglietti contenuti. La voce che sorprende è navetta più parcheggio al Mont-Saint-Michel.',
    erroriDaEvitare: [
      'Andare sulle spiagge dello sbarco senza contesto: **il Mémorial de Caen o un museo vanno visti prima**, altrimenti si guardano delle spiagge qualunque',
      'Provare a vedere tutti e cinque i settori dello sbarco in una giornata: se ne vedono bene due o tre',
      'Arrivare al Mont-Saint-Michel a mezzogiorno in alta stagione, l\'ora peggiore',
      '**Non controllare il calendario delle maree**: le grandi maree sono pubblicate con anni di anticipo, e sono gli unici giorni in cui il Mont torna un\'isola',
      'Attraversare la baia a piedi da soli: **le sabbie mobili esistono e la marea risale in fretta. La traversata si fa solo con una guida**',
      'Aspettarsi il sole. In Normandia la giacca impermeabile serve anche a luglio',
      'Dare per scontato che l\'Arazzo di Bayeux sia visitabile: il museo è in un lungo cantiere di ristrutturazione',
    ],
    confronti: [
      {
        titolo: 'Mont-Saint-Michel: come e quando visitarlo',
        introduzione:
          'Fuori da Parigi è il monumento più visitato di Francia: milioni di persone l\'anno su una roccia larga poche centinaia di metri. Tra una visita che si ricorda e una coda in salita la differenza la fanno tre scelte: l\'orario, dove si dorme e la marea.',
        opzioni: [
          {
            nome: 'In giornata, nelle ore centrali',
            sintesi: 'È come la fanno quasi tutti: arrivo tra le 10 e le 16, parcheggio sulla terraferma, navetta, visita all\'abbazia, ripartenza.',
            costo: 'parcheggio più biglietto dell\'abbazia',
            durata: 'mezza giornata',
            pro: [
              'Semplice, senza dover prenotare per dormire',
              'L\'abbazia è aperta e tutti i servizi funzionano',
            ],
            contro: [
              'È l\'ora di punta: la Grande Rue in salita diventa una fila compatta tra i negozi di souvenir',
              'La luce di mezzogiorno è la peggiore per il Mont, che dà il meglio all\'alba e al tramonto',
              'Non si vede la baia cambiare, che è metà del senso del posto',
            ],
            perChi: 'Chi è di passaggio e non ha alternative.',
          },
          {
            nome: 'Dormendo sull\'isola',
            sintesi: 'Poche strutture piccole dentro le mura, care e da prenotare con molto anticipo, che permettono di restare quando i pullman sono ripartiti.',
            costo: 'alto: è uno dei pernottamenti più cari della Normandia',
            durata: 'una notte',
            pro: [
              'Dopo le 18 e prima delle 9 il Mont è un altro posto: vicoli vuoti, il rumore del vento, le luci sulla baia',
              'Si vede il cambio di marea senza dover incastrare gli orari',
              'In certi periodi dell\'anno l\'abbazia fa **visite serali** con musica e illuminazione: **le date cambiano ogni stagione, conviene controllarle**',
            ],
            contro: [
              'Costoso, con pochissima disponibilità',
              'Portare i bagagli su per la Grande Rue non è banale',
            ],
            perChi: 'Chi ci va una volta nella vita e vuole vederlo come va visto.',
          },
          {
            nome: 'Dormendo nella baia e andando all\'alba o alla sera',
            sintesi: 'Base in uno dei paesi a pochi chilometri, con prezzi normali, e visita fuori dalle ore centrali con la navetta o a piedi lungo la passerella.',
            costo: 'medio-basso',
            durata: 'una o due notti',
            pro: [
              'Il miglior rapporto tra costo e qualità della visita',
              'Si può tornare due volte, la sera e all\'alba, e vedere due Mont completamente diversi',
              'La camminata sulla passerella, con il Mont davanti che si fa sempre più grande, è la parte più bella dell\'arrivo',
            ],
            contro: [
              'Serve l\'auto',
              'Le navette hanno orari: chi resta fino a tardi deve controllare l\'ultima corsa, o tornare a piedi',
            ],
            perChi: 'La scelta che consiglio a quasi tutti.',
          },
          {
            nome: 'Attraversando la baia a piedi con una guida',
            sintesi: 'La traversata della baia sulla sabbia, scalzi, con una guida autorizzata, seguendo i canali e aggirando le zone instabili.',
            costo: 'contenuto a persona',
            durata: '2-4 ore a seconda del percorso',
            pro: [
              'È il modo storico di arrivarci, quello dei pellegrini, e cambia del tutto la percezione della baia',
              'Si capisce dal vivo cosa sono le sabbie mobili e perché qui la marea è pericolosa',
              'Si vede il Mont crescere dall\'orizzonte per ore',
            ],
            contro: [
              '**Da non fare mai da soli**: le sabbie mobili esistono e la marea risale molto più in fretta di quanto si immagini',
              'Dipende dalle maree e dal meteo: si prenota, e a volte si annulla',
              'Si torna bagnati e infangati: serve un cambio',
            ],
            perChi: 'Chi ha un giorno in più e vuole viverlo, oltre che fotografarlo.',
          },
        ],
        raccomandazione:
          'Dormire **nella baia**, andare **la sera e tornare all\'alba** e, se c\'è una **grande marea** vicino alle proprie date, spostare il viaggio per esserci: sono i pochi giorni all\'anno in cui il Mont torna a essere un\'isola circondata dall\'acqua, e il calendario esce con largo anticipo.',
      },
    ],
    miaEsperienza:
      'Delle spiagge dello sbarco mi ha spiazzato quanto siano normali. Omaha Beach, in una giornata di vento, è una spiaggia larghissima di sabbia chiara, con qualche bagnante e qualche cane. Nel paesaggio non c\'è niente di drammatico, ed è proprio questo che la rende difficile da reggere: guardi quella distesa piatta, pensi a cosa voleva dire attraversarla di corsa sotto il fuoco delle postazioni sulla scarpata, e capisci che non c\'è niente da vedere perché il problema era la geografia. Poi si sale alla Pointe du Hoc, dove il terreno è rimasto com\'era, con i crateri delle bombe uno dentro l\'altro e i bunker spaccati, e lì l\'effetto è opposto e immediato. L\'ordine giusto è questo: prima un museo che spieghi, poi le spiagge. Al contrario si guarda il mare e basta. Il Mont-Saint-Michel è l\'altra faccia della regione, e il suo problema sono gli orari più che la folla. Alle undici del mattino la via principale è una fila in salita tra i negozi di souvenir; alle sette di sera è vuota, con il vento e il rumore dell\'acqua. Chi ci passa mezza giornata nelle ore centrali torna dicendo che è sopravvalutato, ma ha visto un altro posto.',
    esperienzeSlugs: ['spiagge-sbarco', 'mont-saint-michel', 'arazzo-bayeux', 'giverny'],
    tripSlugs: ['normandia-bretagna'],
    imageAlt: 'Le falesie di gesso bianco di Étretat con l\'arco della Porte d\'Aval e una barca arancione sulla spiaggia di ciottoli, Normandia',
    immagine: '/images/francia/normandia.jpg',
  },
  {
    slug: 'bretagna',
    paeseSlug: 'francia',
    ordine: 4,
    nome: 'Bretagna',
    tipologia: ['costa', 'trekking', 'archeologia'],
    giorniConsigliati: '7-10 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Una penisola che entra nell\'Atlantico per duecento chilometri, con duemilasettecento chilometri di costa, una lingua celtica ancora viva, le maree più ampie d\'Europa e allineamenti di megaliti più antichi delle piramidi. È la regione francese che somiglia meno alla Francia, e ci tiene a dirlo.',
    percheAndarci:
      'Per il **GR34**, il sentiero dei doganieri, che gira tutta la costa bretone ed è il percorso costiero più lungo di Francia. È nato perché i doganieri potessero sorvegliare i contrabbandieri, e oggi è uno dei cammini più belli d\'Europa. E per Carnac, dove ci sono tremila pietre alzate seimila anni fa per ragioni che non conosciamo.',
    cosaVedere: [
      'Gli **allineamenti di Carnac**: migliaia di menhir disposti in file parallele per chilometri, eretti nel Neolitico, **più antichi di Stonehenge e delle piramidi di Giza**',
      '**Saint-Malo**, la città corsara dentro le mura, distrutta nel 1944 e ricostruita pietra su pietra, con il camminamento sui bastioni e le isolette che con la bassa marea si raggiungono a piedi',
      'La **Côte de Granit Rose** intorno a Ploumanac\'h, con blocchi di granito rosa erosi in forme impossibili, direttamente sul mare',
      'La **Pointe du Raz**, promontorio sull\'Atlantico e uno dei punti più occidentali di Francia, e **Cap Fréhel** con il Fort la Latte',
      'Il **Golfo del Morbihan**, un mare interno con decine di isole, e il cairn di **Gavrinis** con le sue incisioni neolitiche',
      '**Locronan**, **Dinan** e **Concarneau** con la Ville Close: borghi murati che hanno conservato l\'impianto medievale',
      'La **penisola di Crozon**, con falesie, spiagge e pochissima gente',
      '**Cancale** per le ostriche e, poco più a sud, **Guérande** per le saline e la fleur de sel',
    ],
    cosaFare: [
      'Camminare un tratto del **GR34**, a tappe o in giornata da quasi ogni paese della costa (c\'è una scheda esperienza dedicata)',
      'Vedere gli **allineamenti di Carnac** sapendo cosa sono (c\'è una scheda esperienza dedicata)',
      'Fare il giro dei **bastioni di Saint-Malo** con l\'alta marea, quando le onde scavalcano il molo',
      'Prendere un traghetto per un\'isola: **Belle-Île**, **Bréhat**, **Ouessant** o l\'**Île aux Moines**',
      'Mangiare **galettes di grano saraceno** con il sidro in una crêperie di paese: è il vero pasto bretone',
    ],
    doveDormire:
      'La Bretagna si gira cambiando base, perché da est a ovest le distanze sono lunghe. **Saint-Malo** per la costa nord-orientale e il Mont-Saint-Michel; **Perros-Guirec o Ploumanac\'h** per la Côte de Granit Rose; **Quimper, Douarnenez o la penisola di Crozon** per il Finistère; **Carnac, Vannes o Auray** per il Morbihan e i megaliti. I prezzi sono molto più bassi che sulla costa mediterranea, tranne a Saint-Malo e Dinard in agosto.',
    doveMangiare:
      'C\'è una distinzione che i bretoni prendono sul serio: le **galettes** sono salate e si fanno con la **farina di grano saraceno**, le **crêpes** sono dolci e si fanno con la farina di frumento. Chi chiede una «crêpe al prosciutto» dichiara subito da dove viene. Si accompagnano con il **sidro servito in scodella** (bolée). Poi le **ostriche di Cancale**, le **cozze**, il **kouign-amann** (pasta sfoglia, burro e zucchero caramellato: forse il dolce più calorico di Francia), il **far breton**, il **caramello al burro salato** e il **burro salato** in generale, che qui è la regola.',
    comeArrivare:
      'Da Parigi l\'alta velocità arriva a Rennes in circa un\'ora e mezza, e da lì si prosegue verso Saint-Malo, Brest, Quimper e Vannes. Gli aeroporti utili sono Rennes, Brest e Nantes. **Per la costa e per l\'interno serve l\'auto**.',
    comeSpostarsi:
      '**Auto.** I treni collegano le città principali ma non la costa, che è il motivo per cui si viene. Una cosa utile da sapere: **in Bretagna le autostrade sono gratuite**, un\'eredità dei vecchi piani di sviluppo regionale. È l\'unica regione francese in cui vale su tutta la rete principale.',
    periodoMigliore:
      '**da maggio a settembre**; i mesi ideali sono **giugno e settembre**. Il meteo bretone è proverbiale, e qui dicono che il bel tempo capita più volte al giorno: piove, spiove e torna il sole nel giro di un\'ora, tutto l\'anno. Luglio e agosto hanno più sole e più gente. **Le grandi maree**, con un\'escursione tra le maggiori d\'Europa, sono uno spettacolo, e il calendario esce in anticipo.',
    costi:
      'Per alloggi e ristoranti è tra le regioni francesi più economiche, tranne le località di mare più note in agosto. Il GR34 è gratuito, i megaliti costano poco, i traghetti per le isole hanno prezzi contenuti.',
    erroriDaEvitare: [
      'Sottovalutare le distanze: la Bretagna è grande, e per andare da Saint-Malo a Quimper ci vuole mezza giornata',
      'Contare sul meteo. L\'antipioggia serve in ogni mese dell\'anno',
      '**Sottovalutare le maree**: restare isolati su un isolotto o su una spiaggia è facilissimo. Gli orari sono affissi ovunque, e vanno letti',
      '**Sottovalutare le correnti di risacca** sulle spiagge atlantiche, la prima causa di incidenti in mare in Francia',
      'Chiamare «crêpe» una galette salata',
      'Presentarsi ai campi di menhir di Carnac aspettandosi di camminarci in mezzo: **l\'accesso ai recinti è regolato per proteggere il terreno, con visite accompagnate in alta stagione e più libertà fuori stagione**. Le regole cambiano: conviene informarsi prima',
    ],
    confronti: [
      {
        titolo: 'Normandia o Bretagna, se c\'è tempo per una sola',
        introduzione:
          'Confinano, si visitano spesso insieme e sono due viaggi completamente diversi. Chi le mette nello stesso itinerario senza saperlo finisce per trattare la seconda come un\'appendice della prima.',
        opzioni: [
          {
            nome: 'Normandia',
            sintesi: 'Un viaggio nella storia: lo sbarco del 1944, la conquista normanna dell\'Inghilterra, l\'abbazia sulla roccia, l\'impressionismo dove è nato.',
            costo: 'media',
            durata: '5-7 giorni',
            pro: [
              'Le spiagge dello sbarco cambiano chi le attraversa, e non hanno equivalenti',
              'Il Mont-Saint-Michel',
              'È più vicina a Parigi: due ore di treno, e si incastra facilmente',
              'Una gastronomia forte e riconoscibile: formaggi, sidro, calvados',
            ],
            contro: [
              'Étretat a parte, la costa è meno spettacolare di quella bretone',
              'Molto più visitata: Mont-Saint-Michel e spiagge dello sbarco sono tra i luoghi più affollati di Francia',
              'Va meno bene per chi cerca natura e cammino',
            ],
            perChi: 'Chi viaggia per la storia, chi ha pochi giorni, chi parte da Parigi.',
          },
          {
            nome: 'Bretagna',
            sintesi: 'Un viaggio di costa e di preistoria: duemila chilometri di sentiero sul mare, megaliti neolitici, isole, una lingua celtica e un tempo che cambia ogni ora.',
            costo: 'medio-bassa',
            durata: '7-10 giorni',
            pro: [
              'Il GR34 è uno dei cammini costieri più belli d\'Europa e si può fare anche a giornate singole',
              'Carnac e il Morbihan sono tra i complessi megalitici più importanti al mondo',
              'Molto meno affollata, con prezzi parecchio più bassi',
              'Ha un\'identità culturale propria (lingua, musica, feste) che si sente',
            ],
            contro: [
              'Serve più tempo: è grande e le distanze pesano',
              'Il meteo è una variabile in ogni stagione',
              'Ha meno «cose da vedere» in senso monumentale: è una regione da percorrere più che da spuntare',
            ],
            perChi: 'Chi cammina, chi cerca natura e costa, chi ha almeno una settimana e non vuole folla.',
          },
        ],
        raccomandazione:
          'Con **cinque giorni**, la Normandia: è più densa, più vicina e più facile da organizzare. Con **dieci giorni o più** si fanno entrambe, in quest\'ordine: prima la Normandia, poi la Bretagna, perché il ritmo deve andare dal denso al lento e non al contrario. Chi ha una settimana e cammina scelga la Bretagna senza rimpianti.',
      },
    ],
    miaEsperienza:
      'La Bretagna l\'ho capita il primo giorno sul GR34, quando mi sono reso conto che il sentiero non finisce. Gira tutta la penisola, un promontorio dopo l\'altro, e da qualunque paese della costa si parta ci si può mettere a camminare e andare avanti per settimane. È nato per un motivo pratico, sorvegliare i contrabbandieri, e si vede dalla traccia: sta il più vicino possibile all\'acqua, sul bordo delle falesie, e non prende mai scorciatoie. In un paio d\'ore si passa da una spiaggia a una scogliera, da un bosco di pini a un porticciolo con le barche in secca sul fango, perché la marea se n\'è andata. Ed è la marea la cosa che colpisce di più. Qui l\'escursione è tra le più ampie d\'Europa, e due volte al giorno il paesaggio cambia del tutto: un\'insenatura piena d\'acqua diventa una distesa di sabbia dove la gente raccoglie le vongole. La seconda cosa è Carnac, da affrontare sapendo cosa si sta guardando: tremila pietre alzate in file parallele per chilometri, seimila anni fa, cioè prima delle piramidi, da persone che non avevano il metallo. Non sappiamo perché. È uno dei pochi posti in Europa dove l\'unica reazione onesta è ammettere di non capire.',
    esperienzeSlugs: ['gr34-sentiero-doganieri', 'carnac-megaliti', 'saint-malo-bastioni'],
    tripSlugs: ['normandia-bretagna'],
    imageAlt: 'Il faro di Ploumanac\'h in granito rosa tra i massi levigati della Côte de Granit Rose, Bretagna',
    immagine: '/images/francia/bretagna.jpg',
  },
  {
    slug: 'castelli-loira',
    paeseSlug: 'francia',
    ordine: 5,
    nome: 'Castelli della Loira',
    tipologia: ['castelli', 'giardini', 'bicicletta'],
    giorniConsigliati: '5-7 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Duecentottanta chilometri di valle fluviale patrimonio UNESCO, iscritti **come paesaggio culturale** più che per i singoli castelli: conta il modo in cui fiume, coltivazioni e architettura si sono costruiti a vicenda nei secoli. I castelli sono circa trecento, e una ventina vale la visita. Tra un bel viaggio e una settimana di sale vuote la differenza sta tutta nello sceglierne cinque invece di vederne quindici.',
    percheAndarci:
      'Qui il Rinascimento italiano è stato importato di peso in Francia, e ne è uscito qualcosa di diverso: castelli fatti per mostrare più che per difendersi, costruiti in un tufo tenero che si taglia come il burro e li lascia bianchi. Ed è una delle poche grandi mete d\'Europa che si visitano meglio in bicicletta che in auto.',
    cosaVedere: [
      '**Chambord**, il più grande, voluto da Francesco I: quattrocentoquaranta stanze, la **scala a doppia elica** in cui due persone salgono senza incontrarsi mai (con l\'ipotesi, discussa, di un\'ispirazione leonardesca) e la terrazza sul tetto, una foresta di camini e lucernari. Non è mai stato abitato sul serio',
      '**Chenonceau**, il castello delle dame, costruito **sopra il fiume Cher** con la galleria a ponte. Durante la Seconda guerra mondiale **la galleria attraversava la linea di demarcazione**: l\'ingresso era in zona occupata e l\'uscita in zona libera, e c\'era chi ci passava per fuggire',
      '**Villandry**, per i giardini: l\'orto rinascimentale a disegni geometrici, il giardino ornamentale dell\'amore e quello d\'acqua, ricostruiti su modelli del Cinquecento',
      '**Amboise** e il **Clos Lucé**, dove **Leonardo da Vinci ha passato gli ultimi tre anni di vita ed è morto nel 1519**: la casa conserva i modelli delle sue macchine, e lui è sepolto nella cappella del castello',
      '**Azay-le-Rideau**, su un\'isola dell\'Indre, che si specchia nell\'acqua, e **Cheverny**, abitato da secoli dalla stessa famiglia e modello dichiarato del castello di Moulinsart nelle avventure di Tintin',
      '**Chaumont-sur-Loire** con il **festival internazionale dei giardini**, che ogni anno da primavera ad autunno espone decine di giardini d\'autore',
      '**Fontevraud**, la più grande abbazia-città d\'Europa, con le **tombe dei Plantageneti**: Eleonora d\'Aquitania, Enrico II e Riccardo Cuor di Leone',
      'Le **cantine trogloditiche** scavate nel tufo: la pietra estratta per costruire i castelli ha lasciato chilometri di gallerie, che oggi servono da cantine e per coltivare funghi',
    ],
    cosaFare: [
      'Percorrere un tratto della **Loira in bicicletta**: un itinerario ciclabile segnalato di circa novecento chilometri lungo il fiume, in piano, che collega i castelli meglio dell\'auto',
      'Visitare **Chambord dalla terrazza**, il punto per cui è stato costruito (c\'è una scheda esperienza dedicata)',
      'Fare una **degustazione in una cantina trogloditica** di Vouvray, Chinon o Saumur, dentro la roccia',
      'Vedere il **Clos Lucé** e le macchine di Leonardo, la visita che piace anche a chi dei castelli non sa che farsene',
      'Salire sulla **scala a doppia elica** di Chambord e provare a incrociare qualcuno: non succede',
    ],
    doveDormire:
      '**Amboise, Tours o Blois** sono le basi più pratiche: centrali rispetto ai castelli principali, servite dal treno e con prezzi ragionevoli. **Saumur e Chinon** servono la parte occidentale e i vini. Si può anche dormire in un castello, e fuori stagione non sempre costa moltissimo. Chi pedala fa meglio a spostarsi lungo il fiume a tappe, senza una base fissa.',
    doveMangiare:
      'Cucina di fiume e di orto: **rillettes** e **rillons** di maiale, il **beurre blanc** (una salsa di burro, scalogno e vino bianco nata da queste parti), pesce d\'acqua dolce, **formaggi di capra** a denominazione come Sainte-Maure-de-Touraine, Selles-sur-Cher e Crottin de Chavignol, e la **tarte Tatin**, nata nel Loiret. I vini della valle sono tra i più vari di Francia: **Sancerre e Pouilly-Fumé** da Sauvignon, **Vouvray e Montlouis** da Chenin, **Chinon, Bourgueil e Saumur-Champigny** da Cabernet Franc, e il **Muscadet** alla foce.',
    comeArrivare:
      'In treno da Parigi si arriva a Tours, Blois, Amboise e Orléans in un\'ora o poco più. **Le stazioni più utili sono Blois e Amboise.** L\'auto è comoda, ma in alta stagione i parcheggi dei castelli principali si riempiono presto.',
    comeSpostarsi:
      '**Quasi tutti usano l\'auto, ma la scelta giusta è la bicicletta.** La valle è piana, lungo tutto il fiume c\'è un itinerario ciclabile segnalato con noleggi a senso unico tra una città e l\'altra, e i castelli distano dieci o venti chilometri l\'uno dall\'altro: questo paesaggio va attraversato pedalando lungo la Loira. Ci sono anche navette stagionali tra i castelli principali e le stazioni; **periodi e percorsi cambiano, conviene controllarli prima**.',
    periodoMigliore:
      '**da aprile a giugno e in settembre-ottobre.** I **giardini**, Villandry su tutti e il festival di Chaumont, danno il meglio da maggio a settembre. Luglio e agosto sono affollati nei castelli principali, mentre i minori restano tranquilli. L\'inverno è freddo e molti castelli riducono gli orari o chiudono: **meglio controllare castello per castello**.',
    costi:
      'Ogni castello ha il suo biglietto e la somma pesa: cinque castelli sono una spesa vera. Esistono **biglietti cumulativi e pass di zona** che convengono da tre o quattro visite, ma cambiano spesso ed è meglio controllarli prima. Il noleggio della bici a senso unico ha un supplemento, ma evita di dover riportare indietro il mezzo.',
    erroriDaEvitare: [
      '**Vederne troppi.** Dopo il terzo castello in due giorni non li si distingue più: cinque in una settimana, con calma, valgono il triplo',
      'Fare solo i grandi: Chambord e Chenonceau sono i più visitati di tutti, e nei minori c\'è un decimo della gente',
      'Arrivare a Chambord o Chenonceau a metà mattina in alta stagione, insieme ai pullman',
      'Trascurare i giardini: a Villandry il castello è l\'accessorio, il motivo per andarci è il giardino',
      'Muoversi solo in auto senza provare almeno una giornata in bici lungo il fiume',
      'Andare a Chaumont fuori dal periodo del festival dei giardini aspettandosi di trovarlo',
    ],
    confronti: [
      {
        titolo: 'Quali castelli della Loira scegliere',
        introduzione:
          'Sono circa trecento, e visitarne più di cinque o sei in una settimana è controproducente. Ognuno è una cosa a sé: uno è una reggia di rappresentanza mai abitata, uno un ponte sul fiume, uno un giardino, uno la casa in cui è morto Leonardo. Conviene scegliere per tipo, non per fama.',
        opzioni: [
          {
            nome: 'Chambord',
            sintesi: 'Il più grande e il più teatrale: una reggia di caccia di quattrocentoquaranta stanze in mezzo al parco recintato più esteso d\'Europa.',
            costo: 'biglietto tra i più cari della valle, più il parcheggio',
            durata: 'mezza giornata',
            pro: [
              'La scala a doppia elica e la terrazza-foresta di camini non hanno equivalenti',
              'Il parco recintato è enorme e si gira in bici, in barca o a piedi, tra cervi e cinghiali',
              'L\'edificio è così sproporzionato rispetto a qualunque funzione da raccontare da solo cos\'era il potere nel Cinquecento',
            ],
            contro: [
              'Gli interni sono in gran parte vuoti: non è mai stato abitato sul serio e l\'arredo è scarso',
              'Con Chenonceau è il più affollato',
              'Grande e dispersivo: si cammina molto',
            ],
            perChi: 'Tutti, almeno una volta. È il castello che resta in mente.',
          },
          {
            nome: 'Chenonceau',
            sintesi: 'Il castello costruito sopra il fiume, con la galleria a ponte: il più bello dei grandi, e il più ricco di storie di donne e di guerra.',
            costo: 'alto, in linea con Chambord',
            durata: 'mezza giornata',
            pro: [
              'L\'immagine del castello sull\'acqua è la più forte della valle',
              'Gli interni sono arredati, e i giardini di Diana di Poitiers e di Caterina de\' Medici stanno uno di fronte all\'altro',
              'La **linea di demarcazione che durante l\'occupazione passava dentro la galleria** è uno di quei dettagli che cambiano il modo di guardare un luogo',
              'Le composizioni floreali, rifatte di continuo con i fiori del giardino, sono una tradizione della casa',
            ],
            contro: [
              'Molto affollato: la galleria diventa una fila',
              'Va visto all\'apertura o nell\'ultima ora',
            ],
            perChi: 'Tutti. Se se ne vede uno solo, per molti è questo.',
          },
          {
            nome: 'Villandry',
            sintesi: 'Il castello che si visita per il giardino: orto rinascimentale a disegni geometrici, giardino dell\'amore, giardino d\'acqua e labirinto.',
            costo: 'medio, con biglietto ridotto per i soli giardini',
            durata: 'mezza giornata',
            pro: [
              'L\'orto decorativo, con le verdure piantate a disegno e rinnovate due volte l\'anno, in questa forma non esiste da nessun\'altra parte',
              'Si può prendere il biglietto per i soli giardini, che sono la parte che conta',
              'Dalla terrazza alta si vedono i disegni dall\'alto, il punto di vista per cui sono stati progettati',
            ],
            contro: [
              'Fuori stagione i giardini sono spogli e la visita perde gran parte del senso',
              'Il castello in sé è meno interessante del parco',
            ],
            perChi: 'Chi viene tra maggio e settembre. Negli altri mesi si può saltare.',
          },
          {
            nome: 'Amboise e il Clos Lucé',
            sintesi: 'Il castello reale sulla Loira e, a quattrocento metri, la casa in cui Leonardo ha passato gli ultimi tre anni ed è morto.',
            costo: 'due biglietti distinti, entrambi medi',
            durata: 'una giornata per entrambi',
            pro: [
              'Il **Clos Lucé** espone i modelli funzionanti delle macchine di Leonardo, ed è la visita che conquista anche chi è stanco di castelli',
              'Leonardo è sepolto nella cappella del castello di Amboise',
              'Amboise è una cittadina viva dove ha senso dormire, oltre che fermarsi per il monumento',
              'Dalla terrazza del castello sul fiume si ha uno dei punti di vista migliori sulla valle',
            ],
            contro: [
              'Il Clos Lucé punta molto sulla divulgazione e in alta stagione è pieno di famiglie',
              'Il castello di Amboise è molto più piccolo dell\'originale, demolito in gran parte dopo la Rivoluzione',
            ],
            perChi: 'Chi viaggia con bambini, chi si interessa di storia della tecnica, chi vuole una base oltre a una visita.',
          },
          {
            nome: 'I minori: Azay-le-Rideau, Cheverny, Chaumont, Fontevraud',
            sintesi: 'Quattro visite più corte e molto meno affollate, ognuna con una ragione precisa: il riflesso sull\'acqua, la casa ancora abitata, il festival dei giardini, le tombe dei Plantageneti.',
            costo: 'medi o bassi',
            durata: 'due o tre ore ciascuno',
            pro: [
              '**Cheverny** è arredato e abitato da secoli dalla stessa famiglia: è l\'unico che sembra una casa più che un museo',
              '**Fontevraud** è un\'abbazia enorme con le tombe di Eleonora d\'Aquitania e di Riccardo Cuor di Leone, e ha un\'atmosfera che nessun castello ha',
              '**Chaumont** con il festival dei giardini è una cosa a sé: decine di giardini d\'autore rinnovati ogni anno',
              'Molta meno gente',
            ],
            contro: [
              'Nessuno di questi è «il castello della Loira» che si aveva in mente prima di partire',
              'Fontevraud è lontana dagli altri',
            ],
            perChi: 'Chi ha più di quattro giorni, chi torna, chi non sopporta la folla.',
          },
        ],
        raccomandazione:
          'In cinque giorni funziona questa combinazione: **Chenonceau all\'apertura**, **Chambord con il parco**, **Villandry se è la stagione dei giardini**, **Amboise con il Clos Lucé** come giornata alla base, e **uno tra Cheverny e Fontevraud** per vedere come si viveva o come si pregava. Almeno una di queste giornate va fatta **in bicicletta lungo il fiume**: cambia il viaggio.',
      },
    ],
    miaEsperienza:
      'In Loira quasi tutti fanno lo stesso errore: la trattano come una lista. Due castelli il primo giorno, tre il secondo, e al quarto si entra in una sala di rappresentanza del Cinquecento senza più reagire. Sono tutti bianchi, con le finestre a crociera, i camini enormi e le targhette. La valle funziona in un altro modo: un castello al giorno, la mattina, e il resto del tempo lungo il fiume. È lì che si capisce perché l\'UNESCO abbia iscritto **il paesaggio** e non i monumenti. La Loira è l\'ultimo grande fiume europeo rimasto in gran parte non canalizzato, con i banchi di sabbia che si spostano e le isole che cambiano, e i castelli stanno lì per via del fiume. La cosa migliore da fare è noleggiare una bici per una giornata. Il percorso sull\'argine è piatto, attraversa paesi che non hanno un castello e quindi non hanno nessuno, e si arriva al monumento successivo dopo due ore di pedalata invece che dopo venti minuti di auto e mezz\'ora a cercare parcheggio. La seconda scoperta sono le cantine nel tufo. La pietra bianca dei castelli è stata cavata nella collina dietro, e quelle gallerie oggi sono cantine: si scende a dodici gradi costanti, con le bottiglie nelle nicchie, e chi versa il vino spiega che il buco nel muro è vecchio quanto la facciata del castello sull\'altra riva.',
    esperienzeSlugs: ['chambord', 'chenonceau', 'loira-in-bicicletta', 'cantina-troglodita-loira'],
    tripSlugs: ['castelli-loira'],
    imageAlt: 'Il castello di Amboise sopra le case della città, riflesso nelle acque della Loira',
    immagine: '/images/francia/castelli-loira.jpg',
  },
  {
    slug: 'bordeaux',
    paeseSlug: 'francia',
    ordine: 6,
    nome: 'Bordeaux e i suoi vigneti',
    tipologia: ['vino', 'città', 'costa'],
    giorniConsigliati: '6-8 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La città è un insieme urbanistico del Settecento che l\'UNESCO ha iscritto come «Porto della Luna», e per anni è stata la più vasta area urbana iscritta al mondo. Intorno c\'è il vigneto a denominazione più esteso di Francia, oltre centomila ettari, ordinato in una gerarchia di classificazioni che risale al 1855 e che ancora oggi è il riferimento del mercato mondiale del vino.',
    percheAndarci:
      'È l\'unico posto al mondo dove si vede dal vivo come un vino sia diventato un bene finanziario: la classificazione del 1855, i castelli-azienda, i mercati a termine, i prezzi. E a un\'ora dai vigneti c\'è il Bacino di Arcachon, con la duna di sabbia più alta d\'Europa.',
    cosaVedere: [
      '**Place de la Bourse** con davanti il **Miroir d\'eau**, una lastra d\'acqua di pochi millimetri che riflette la facciata settecentesca e a intervalli si trasforma in nebbia',
      'Il centro settecentesco: la **Grosse Cloche**, la cattedrale di Saint-André con la **Tour Pey-Berland**, da salire per il panorama, la basilica di Saint-Michel e **rue Sainte-Catherine**, una delle vie pedonali più lunghe d\'Europa',
      'Il quartiere degli **Chartrons**, dove stavano i commercianti di vino, con i magazzini riconvertiti',
      'La **Cité du Vin**, il museo del vino affacciato sulla Garonna',
      '**Saint-Émilion**, patrimonio UNESCO dal 1999 come **primo paesaggio vitivinicolo iscritto al mondo**, con la **chiesa monolitica scavata nella roccia**, la più grande d\'Europa nel suo genere, e le catacombe sotto il paese',
      'Il **Médoc** con i castelli-azienda in fila lungo la strada dei vini, e a sud i **Graves e il Sauternes**',
      'La **Dune du Pilat**, la duna di sabbia più alta d\'Europa, che avanza di qualche metro all\'anno verso l\'interno inghiottendo la pineta',
      'Il **Bacino di Arcachon** con le ostriche, il Cap Ferret e le capanne su palafitte dell\'Île aux Oiseaux',
    ],
    cosaFare: [
      'Una **degustazione a Saint-Émilion** con la visita della chiesa monolitica (c\'è una scheda esperienza dedicata)',
      'Visitare un **château del Médoc su appuntamento**, sapendo che i grandi nomi si prenotano con settimane di anticipo',
      'Capire il **Sauternes**: la muffa nobile, le nebbie del mattino e la vendemmia a passaggi successivi (c\'è una scheda esperienza dedicata)',
      'Salire sulla **Dune du Pilat** al tramonto e mangiare **ostriche di Arcachon** nelle cabanes dei produttori',
      'Percorrere in bici un pezzo delle piste ciclabili delle Landes, tra le più estese di Francia',
    ],
    doveDormire:
      'La base giusta è **Bordeaux città**: bella, viva, con un tram che funziona, e da lì tutte le zone si raggiungono in meno di un\'ora. **Saint-Émilion** è bellissima e cara, e la sera il paese si svuota del tutto. **Arcachon o il Cap Ferret** per il mare, con prezzi molto alti in luglio e agosto.',
    doveMangiare:
      'La cucina bordolese gira intorno alla carne e al vino: l\'**entrecôte à la bordelaise** con la salsa al vino rosso e midollo, il **manzo di Bazas**, la **lamproie** (una specialità di fiume che divide), le **ostriche di Arcachon**, servite per tradizione con piccole salsicce calde, e il **canelé**, il dolce di pasta densa con la crosta caramellata nato qui. Anche a Bordeaux il **menù di mezzogiorno** costa una frazione di quello della sera.',
    comeArrivare:
      'Alta velocità da Parigi in circa due ore. L\'aeroporto di **Bordeaux-Mérignac** è collegato al centro. Per i vigneti **serve l\'auto**, con un\'avvertenza seria, qui sotto.',
    comeSpostarsi:
      'In città, tram e bici. Per i vigneti serve l\'auto, ed ecco il problema di ogni viaggio del vino: **in Francia i controlli sull\'alcol alla guida sono frequenti e il limite è basso**, per i neopatentati più basso che in Italia, con sanzioni pesanti. Le soluzioni sono tre: **un guidatore designato che non assaggia**, le **escursioni accompagnate in giornata** che partono da Bordeaux, oppure **sputare durante le degustazioni**. È la prassi normale e nessuno si offende: nelle cantine serie la sputacchiera c\'è sempre, e ci si aspetta che la si usi.',
    periodoMigliore:
      '**da maggio a ottobre**, e il periodo migliore è **settembre-ottobre**, per la vendemmia. Da metà settembre le cantine sono in piena attività e alcune riducono le visite perché stanno lavorando: **conviene chiedere prima**. Luglio e agosto sono caldi e la costa è piena. L\'inverno è tranquillo, e molte proprietà sospendono le visite.',
    costi:
      'La città è nella media francese; le degustazioni vanno dal gratuito al molto caro secondo il livello della proprietà. La vera differenza è tra le **cantine che ricevono senza appuntamento** nelle denominazioni minori, dove si spende poco, e i **grand cru classé**, dove la visita è un prodotto a sé, con prezzi importanti e prenotazione obbligatoria.',
    erroriDaEvitare: [
      '**Presentarsi ai grandi château senza appuntamento.** I nomi noti si prenotano con settimane di anticipo, e molti non ricevono il pubblico',
      'Guidare dopo aver assaggiato. Sputare è la norma; chi non vuole farlo prenoti un\'escursione accompagnata',
      'Fare solo i grandi nomi: le denominazioni satellite intorno a Saint-Émilion e le zone meno classificate offrono visite più autentiche e costano una frazione',
      'Andare a Saint-Émilion solo per la degustazione: **la chiesa monolitica e le catacombe si visitano solo con una visita accompagnata prenotata all\'ufficio del turismo**, e sono il motivo per cui il paese è patrimonio UNESCO',
      'Sottovalutare la Dune du Pilat: si sale su sabbia ripida, e d\'estate la sabbia scotta',
      'Fare il bagno nell\'oceano senza informarsi: **sulla costa atlantica le correnti di risacca sono pericolose**, e le spiagge sorvegliate hanno un perimetro segnalato da rispettare',
    ],
    confronti: [
      {
        titolo: 'Riva sinistra o riva destra: quale Bordeaux',
        introduzione:
          'La Garonna e la Dordogna dividono il vigneto bordolese in due mondi, con suoli, vitigni e paesaggi diversi, e modi diversi di ricevere chi visita. Chi ha pochi giorni deve sceglierne uno.',
        opzioni: [
          {
            nome: 'Riva sinistra: il Médoc',
            sintesi: 'Suoli di ghiaia, Cabernet Sauvignon dominante, i castelli-azienda della classificazione del 1855 in fila lungo una sola strada.',
            costo: 'da alto ad altissimo per le visite ai cru classificati',
            durata: '1-2 giorni',
            pro: [
              'È la storia del vino come sistema economico: la **classificazione del 1855**, stilata per l\'Esposizione Universale in base ai prezzi di mercato, è ancora oggi quasi immutata',
              'I castelli sono architetture di rappresentanza, e vederli in fila lungo la strada è uno spettacolo a sé',
              'Le cantine sono organizzate per ricevere: visite strutturate, spesso in più lingue',
            ],
            contro: [
              'Il paesaggio è piatto e ripetitivo: chi si aspetta colline resta deluso',
              'Le visite ai grandi nomi costano care e vanno prenotate con largo anticipo',
              'Nei paesi c\'è poca vita: si visita e si torna a Bordeaux',
            ],
            perChi: 'Chi è interessato al vino come sistema, ai grandi rossi da invecchiamento e alla storia delle classificazioni.',
          },
          {
            nome: 'Riva destra: Saint-Émilion e Pomerol',
            sintesi: 'Argilla e calcare, Merlot dominante, colline vere, e un borgo medievale patrimonio UNESCO costruito sopra una rete di gallerie.',
            costo: 'medio-alto, con molte piccole proprietà accessibili',
            durata: '1-2 giorni',
            pro: [
              '**Saint-Émilion è un paese bellissimo**, e la visita va oltre il vino: la chiesa monolitica scavata nella roccia non ha uguali in Europa per dimensioni',
              'Il paesaggio è collinare e molto più fotogenico del Médoc',
              'Centinaia di piccole proprietà ricevono, spesso con visite più personali e meno care',
              'Pomerol, minuscola, produce su pochi ettari alcuni dei vini più cari al mondo, e la si attraversa in auto',
            ],
            contro: [
              'In alta stagione Saint-Émilion è molto affollata nelle ore centrali',
              'In paese i parcheggi sono pochi e a pagamento',
            ],
            perChi: 'Chi ha un solo giorno, chi vuole unire il vino alla visita di un luogo, chi preferisce i rossi più morbidi. È la scelta che consiglio per la prima volta.',
          },
          {
            nome: 'Graves e Sauternes',
            sintesi: 'A sud della città: i rossi e i bianchi secchi dei Graves e, più giù, il Sauternes con i vini dolci da muffa nobile.',
            costo: 'medio, con alcune eccezioni molto alte',
            durata: 'una giornata',
            pro: [
              'Il **Sauternes** ha la storia enologica più affascinante della regione: **le nebbie del mattino, nate dove un affluente freddo incontra un fiume più caldo, creano le condizioni per la Botrytis cinerea**, la muffa nobile, che concentra gli zuccheri negli acini. La vendemmia si fa **a mano e a passaggi successivi**, acino per acino, raccogliendo solo quelli al punto giusto',
              'Le rese sono bassissime: si dice che da una vite esca un bicchiere',
              'Molto meno visitato del Médoc e di Saint-Émilion',
              'Nei Graves, alle porte della città, c\'è l\'unico château classificato nel 1855 fuori dal Médoc',
            ],
            contro: [
              'Il vino dolce ha un pubblico più ristretto, e chi non lo ama trova poco altro',
              'Le proprietà sono sparse e serve l\'auto',
            ],
            perChi: 'Chi ha almeno tre giorni per i vigneti, chi si interessa alla viticoltura più che alle etichette.',
          },
          {
            nome: 'Bordeaux città e il Bacino di Arcachon',
            sintesi: 'La versione senza vigneti: la città settecentesca, la Cité du Vin, e un\'ora di treno fino all\'oceano, alle ostriche e alla duna.',
            costo: 'medio',
            durata: '2-3 giorni',
            pro: [
              'Bordeaux si gira a piedi e in tram, è una delle città più belle di Francia e non serve l\'auto',
              'La **Cité du Vin** spiega il vino di tutto il mondo, non solo quello locale, e risolve il problema di chi non guida',
              'La **Dune du Pilat** e il Bacino di Arcachon si raggiungono in treno e sono tutta un\'altra giornata',
              'Le **ostriche nelle cabanes dei produttori**, seduti sul pontile, costano poco e sono il pasto migliore della zona',
            ],
            contro: [
              'Non è un viaggio del vino: si vede il prodotto, non il territorio',
            ],
            perChi: 'Chi non guida, chi viaggia con qualcuno che non beve, chi ha un fine settimana.',
          },
        ],
        raccomandazione:
          'In una settimana: **due notti a Bordeaux città**, **una giornata a Saint-Émilion** con la chiesa monolitica prenotata, **una nel Médoc** con due château su appuntamento, **una nel Sauternes** e **due giorni sul Bacino di Arcachon** per chiudere con l\'oceano. Chi ha tre giorni faccia la città e Saint-Émilion, e lasci perdere il resto.',
      },
    ],
    miaEsperienza:
      'Bordeaux tiene insieme due cose che di solito non vanno d\'accordo: la città si gira a piedi, il territorio senza auto non si vede. La prima sorpresa è proprio la città. Ha fama di posto serio e noioso, e invece è uno degli insiemi urbani più belli di Francia: chilometri di facciate settecentesche della stessa pietra chiara, tenute pulite, e una vita studentesca che le impedisce di diventare un museo. La seconda è quanto poco il vigneto somigli all\'immagine che se ne ha. Nel Médoc non ci sono colline: è una pianura di ghiaia con i castelli in fila lungo una strada, e il fascino sta nel capire cosa fa quella ghiaia. Drena, scalda, e fa sì che una vite a duecento metri di distanza dia un vino che vale dieci volte l\'altro. La terza cosa, quella che mi è rimasta, è il Sauternes. Siamo arrivati in una proprietà a settembre e ci hanno mostrato i grappoli: orribili, acini raggrinziti e coperti di muffa grigia, che qualunque agricoltore normale butterebbe. Invece è proprio quello che aspettavano tutto l\'anno, e la squadra ripassa nello stesso filare cinque o sei volte, in settimane diverse, per raccogliere solo gli acini arrivati al punto. È una delle cose più controintuitive dell\'agricoltura europea, e per crederci bisogna vederla sul posto.',
    esperienzeSlugs: ['saint-emilion', 'sauternes-muffa-nobile', 'dune-du-pilat', 'ostriche-arcachon'],
    tripSlugs: ['bordeaux-e-vigneti'],
    imageAlt: 'La Place de la Bourse di Bordeaux illuminata di notte e riflessa nel Miroir d\'eau',
    immagine: '/images/francia/bordeaux.jpg',
  },
  {
    slug: 'vigneti-di-francia',
    paeseSlug: 'francia',
    ordine: 7,
    nome: 'Le rotte dei vini',
    tipologia: ['vino', 'paesaggi', 'gastronomia'],
    giorniConsigliati: '4-5 giorni per regione, 12-14 per una rotta lunga',
    visitataPersonalmente: true,
    introduzione:
      'La Francia ha inventato il **terroir**, l\'idea che un vino debba dire da quale pezzo di terra viene e che quel pezzo possa essere grande due ettari, e su quell\'idea ha costruito un sistema di denominazioni che il resto del mondo ha copiato. Qui le regioni sono messe a confronto per aiutare a sceglierne una: Champagne, Borgogna, Alsazia e Rodano hanno paesaggi, prezzi, accessibilità e modi di ricevere completamente diversi.',
    percheAndarci:
      'In Borgogna un muro a secco separa due parcelle i cui vini costano uno dieci volte l\'altro, e solo andando a vedere quel muro si crede al terroir. In Champagne si scende in gallerie scavate dai Romani per estrarre il gesso e riusate duemila anni dopo per far maturare il vino.',
    cosaVedere: [
      '**Champagne**: Reims con la cattedrale delle incoronazioni e le vetrate di Chagall, l\'**Avenue de Champagne** a Épernay con chilometri di gallerie sotto la strada, le **crayères** (cave di gesso di epoca gallo-romana usate come cantine) e le colline patrimonio UNESCO dal 2015',
      '**Borgogna**: la Côte de Nuits e la Côte de Beaune, con i **climats** iscritti all\'UNESCO nel 2015, oltre milleduecento parcelle delimitate e con un nome, alcune grandi pochi ettari; l\'**Hôtel-Dieu di Beaune** con il tetto di tegole policrome e l\'asta dei vini di novembre; il **Clos de Vougeot**',
      '**Alsazia**: la Route des Vins, circa centosettanta chilometri tra i Vosgi e la pianura, con **Colmar**, **Riquewihr**, **Eguisheim** e **Kaysersberg**, e a Colmar il **Museo Unterlinden** con il polittico di Issenheim',
      '**Valle del Rodano**: a nord i pendii terrazzati di **Côte-Rôtie** e **Hermitage**, tra i più ripidi d\'Europa; a sud **Châteauneuf-du-Pape** con i suoi **galets roulés**, i ciottoli tondi che di giorno accumulano calore e di notte lo restituiscono',
      '**Il Giura**, minuscolo e fuori da ogni circuito, con il **vin jaune** che matura sei anni e tre mesi in botte sotto un velo di lieviti, senza rabbocco',
    ],
    cosaFare: [
      'Scendere in una **cantina di Champagne** scavata nel gesso e vedere il rémuage (c\'è una scheda esperienza dedicata)',
      'Percorrere la **Route des Vins d\'Alsace** fermandosi nei villaggi (c\'è una scheda esperienza dedicata)',
      'Camminare a piedi tra i muri a secco dei **climats della Côte de Nuits**: è gratis e vale quanto una degustazione',
      'Vedere le **terrazze della Côte-Rôtie**, dove si vendemmia su pendenze che richiedono i verricelli',
      'Andare in **vendemmia**, tra fine agosto e ottobre, quando le cantine sono al lavoro e si vede cosa succede',
    ],
    doveDormire:
      'Ogni regione ha la sua logica. In **Champagne**, Reims o Épernay; in **Borgogna** la base perfetta è **Beaune**, al centro della Côte; in **Alsazia**, Colmar o uno dei villaggi della Route des Vins; nel **Rodano**, Avignone o Valence secondo il versante. Ovunque ci sono le **chambres d\'hôtes nelle proprietà vinicole**, che costano meno degli alberghi e spesso includono una degustazione.',
    doveMangiare:
      'Ogni regione ha una cucina costruita intorno ai suoi vini. In **Borgogna**: boeuf bourguignon, oeufs en meurette, jambon persillé, escargots, e i formaggi Époisses e Cîteaux. In **Alsazia**: choucroute, baeckeoffe, **tarte flambée** (una sfoglia sottilissima con panna acida, cipolla e lardo, cotta nel forno a legna), kougelhopf, bretzel. In **Champagne**: il jambon de Reims e i biscotti rosa da inzuppare nel vino. Nel **Rodano**: la cucina lionese a nord (quenelle, andouillette, bouchons) e quella provenzale a sud.',
    comeArrivare:
      'Reims è a quarantacinque minuti da Parigi in alta velocità, ed è la rotta del vino più facile da raggiungere senza auto. Digione e Beaune sono a un\'ora e mezza-due ore, Strasburgo e Colmar a due ore. Per il Rodano si arriva a Lione, Valence o Avignone. **Per girare tra le cantine serve comunque l\'auto**, tranne in Champagne e in Alsazia, dove ci sono alternative.',
    comeSpostarsi:
      '**Auto, con un guidatore che non assaggia**, oppure **escursioni accompagnate in giornata**, che in tutte queste regioni esistono e risolvono il problema. Due alternative che funzionano: in **Alsazia** la Route des Vins si fa benissimo **in bicicletta**, perché i villaggi distano pochi chilometri e c\'è una rete ciclabile; in **Borgogna** una ciclabile lungo la Côte collega i paesi del vigneto. **Sputare durante le degustazioni è la norma professionale, e nessuno si offende.**',
    periodoMigliore:
      '**settembre e ottobre**, per la vendemmia e i colori. Da sapere: **durante la vendemmia molte proprietà sospendono o riducono le visite** perché stanno lavorando, quindi conviene chiedere prima. **Maggio e giugno** sono ottimi per il paesaggio e più facili per le prenotazioni. L\'**Alsazia a dicembre** è un caso a sé: i mercatini di Natale (quello di Strasburgo è il più antico di Francia) riempiono i villaggi e fanno salire i prezzi.',
    costi:
      'Molto variabili. In Champagne e in Borgogna le visite alle grandi maison e ai domaine più noti sono care e vanno prenotate; nelle denominazioni minori e dai piccoli produttori si spende poco o niente. **La Borgogna è la regione più difficile e più cara di tutte**: molti domaine non ricevono il pubblico, e quelli che lo fanno vogliono essere contattati prima.',
    erroriDaEvitare: [
      '**Presentarsi senza appuntamento.** In Francia le cantine non sono negozi: la visita si concorda, e in Borgogna spesso non la si ottiene',
      'Andare in vendemmia senza chiedere prima: è il periodo più bello, ed è quello in cui molti produttori non ricevono',
      'Guidare dopo le degustazioni. Sputare è la prassi; in alternativa, guidatore designato o escursione accompagnata',
      'Trattare la Borgogna come Bordeaux: qui le proprietà sono minuscole, spesso a conduzione familiare, e la scala è tutta un\'altra',
      'Comprare in cantina pensando di risparmiare: sui grandi nomi il prezzo in cantina non è quasi mai più basso',
      'Ignorare le denominazioni minori, dove si beve meglio in rapporto al prezzo e si viene accolti meglio',
    ],
    confronti: [
      {
        titolo: 'Quale regione vinicola francese scegliere',
        introduzione:
          'Sono viaggi diversi. Cambiano il paesaggio, l\'accessibilità delle cantine, il costo, la difficoltà di prenotare e perfino la lingua che si sente nei paesi. Per chi deve sceglierne una, ecco come si dividono.',
        opzioni: [
          {
            nome: 'Champagne',
            sintesi: 'Colline UNESCO a quarantacinque minuti da Parigi, con chilometri di gallerie scavate nel gesso sotto le città e le grandi maison organizzate per ricevere.',
            costo: 'medio-alto per le visite alle grandi maison, basso dai piccoli vignaioli',
            durata: '2-3 giorni',
            pro: [
              'La più facile di tutte da raggiungere e da organizzare: si fa anche in giornata da Parigi',
              'Le **crayères**, cave di gesso gallo-romane profonde decine di metri e riusate come cantine, valgono la visita anche a prescindere dal vino',
              'Il processo è affascinante da vedere: seconda fermentazione in bottiglia, rémuage, sboccatura',
              'Le maison sono attrezzate per il pubblico, con visite in più lingue e orari certi',
              'Reims ha una cattedrale gotica di primo livello, dove venivano incoronati i re di Francia',
            ],
            contro: [
              'È la regione più «industriale» nel modo di ricevere: la visita alle grandi case è un prodotto ben confezionato',
              'Il paesaggio è bello, ma meno spettacolare di Alsazia e Borgogna',
              'Prezzi alti, senza vie di mezzo tra la grande maison e il piccolo vignaiolo',
            ],
            perChi: 'Chi ha pochi giorni, chi parte da Parigi, chi vuole capire un metodo di produzione.',
          },
          {
            nome: 'Borgogna',
            sintesi: 'La regione che ha inventato l\'idea di parcella: oltre milleduecento **climats** delimitati e con un nome, patrimonio UNESCO, su una striscia di colline lunga una sessantina di chilometri.',
            costo: 'alto, e i vini sono tra i più cari del mondo',
            durata: '3-4 giorni',
            pro: [
              'Qui il terroir si tocca con mano: **due parcelle separate da un muro a secco producono vini di prezzo incomparabile**, e ci si può camminare in mezzo gratis',
              'L\'**Hôtel-Dieu di Beaune**, ospedale per i poveri del Quattrocento con il tetto di tegole smaltate, è uno dei monumenti più belli di Francia',
              'La ciclabile lungo la Côte permette di attraversare i grandi cru in bicicletta',
              'La cucina borgognona è una delle più solide del paese',
            ],
            contro: [
              '**È la più difficile da visitare**: quasi tutti i domaine sono piccolissimi, non hanno una struttura per il pubblico e non ricevono senza un contatto preso prima',
              'I prezzi dei vini sono fuori scala, e le degustazioni spesso deludono chi sperava di assaggiare i nomi noti',
              'Il paesaggio è dolce, ma monotono per chi cerca scenografia',
            ],
            perChi: 'Chi il vino lo conosce già e viene per capirlo, più che per assaggiare a caso. Non è la rotta del vino da cui cominciare.',
          },
          {
            nome: 'Alsazia',
            sintesi: 'Centosettanta chilometri di strada dei vini tra i Vosgi e la pianura, con villaggi di case a graticcio, gerani alle finestre e una cultura a metà tra Francia e Germania.',
            costo: 'il più basso tra le grandi regioni vinicole',
            durata: '3-5 giorni',
            pro: [
              '**È la più bella da attraversare**: i villaggi sono scenografici quasi all\'eccesso, e sono veri, non ricostruiti',
              'Le cantine ricevono facilmente, spesso senza appuntamento, e le degustazioni sono gratuite o quasi',
              'Si fa **in bicicletta**: i paesi distano pochi chilometri e la rete ciclabile è ottima',
              'I bianchi (Riesling, Gewurztraminer, Pinot Gris, Muscat) sono tra i più interessanti d\'Europa e costano poco',
              'Cultura, cucina e lingua proprie: qui si parla ancora l\'alsaziano, e i cartelli sono bilingui',
            ],
            contro: [
              'Alcuni villaggi, Riquewihr su tutti, nelle ore centrali sono pieni di turisti',
              'A dicembre, con i mercatini di Natale, i prezzi salgono e i paesi sono pieni',
              'Chi cerca grandi rossi non troverà nulla: è terra di bianchi',
            ],
            perChi: 'Chi va per la prima volta in una regione vinicola francese, chi viaggia in famiglia, chi ha un budget. **È la scelta che consiglio a chi non sa da dove cominciare.**',
          },
          {
            nome: 'Valle del Rodano',
            sintesi: 'Due regioni in una: a nord pendii terrazzati vertiginosi di Syrah, a sud un altopiano di ciottoli con Châteauneuf-du-Pape e il mistral.',
            costo: 'medio, con ampie fasce accessibili',
            durata: '3-4 giorni',
            pro: [
              'Il **Rodano settentrionale** ha i vigneti più scenografici di Francia: terrazze a secco su pendenze tali che si vendemmia con i verricelli',
              'Il **Rodano meridionale** è a portata da Avignone e si unisce facilmente alla Provenza',
              'I **galets roulés** di Châteauneuf-du-Pape, un campo di ciottoli tondi dove sembra impossibile che cresca qualcosa, sono una lezione di viticoltura a occhio nudo',
              'Molto più accessibile della Borgogna e meno caro di Bordeaux',
            ],
            contro: [
              'Il nord e il sud sono lontani: per fare entrambi bisogna spostarsi parecchio',
              'Il mistral può soffiare per giorni e cambia il viaggio',
            ],
            perChi: 'Chi unisce il vino alla Provenza, chi ama i rossi strutturati, chi vuole paesaggi vertiginosi.',
          },
          {
            nome: 'Loira',
            sintesi: 'La regione vinicola più varia di Francia, distesa per centinaia di chilometri lungo il fiume, con le cantine scavate nel tufo e i castelli accanto.',
            costo: 'basso',
            durata: 'si unisce ai castelli',
            pro: [
              'Una varietà enorme: bianchi secchi, dolci, rossi leggeri e spumanti nella stessa valle',
              'Le **cantine trogloditiche**, scavate nella stessa roccia con cui sono stati costruiti i castelli',
              'Costi bassi e accoglienza semplice',
              'Si unisce senza sforzo ai castelli: è lo stesso viaggio',
            ],
            contro: [
              'È dispersa su centinaia di chilometri: una «rotta» compatta non c\'è',
              'Nessuna denominazione ha il peso simbolico di Champagne o Borgogna',
            ],
            perChi: 'Chi va in Loira per i castelli e vuole aggiungere il vino senza organizzare un viaggio a parte.',
          },
          {
            nome: 'Bordeaux',
            sintesi: 'Il vigneto a denominazione più esteso di Francia, con la gerarchia del 1855 e i castelli-azienda. Sul sito c\'è un itinerario dedicato.',
            costo: 'da medio a molto alto',
            durata: '4-6 giorni',
            pro: [
              'La storia del vino come sistema economico e finanziario, che altrove non si capisce',
              'Bordeaux città è una delle più belle di Francia e non serve l\'auto',
              'Saint-Émilion unisce vino e patrimonio UNESCO',
            ],
            contro: [
              'Le grandi proprietà sono care e vanno prenotate con largo anticipo',
              'Il paesaggio del Médoc è piatto e ripetitivo',
            ],
            perChi: 'Chi si interessa ai grandi rossi da invecchiamento e al vino come mercato.',
          },
        ],
        raccomandazione:
          'La prima volta, l\'**Alsazia**: è la più bella, la più economica, la più facile da visitare senza appuntamenti, e si fa in bicicletta. La **Champagne** se si hanno due giorni e si parte da Parigi. La **Borgogna** solo quando si sa già cosa si cerca, e dopo aver scritto ai domaine con settimane di anticipo. **Bordeaux** se interessa il vino come sistema, oltre che come bevanda.',
      },
    ],
    miaEsperienza:
      'Il mio modo di guardare il vino francese è cambiato camminando, più che in una cantina. In Borgogna, lungo la Côte de Nuits, un sentiero passa tra i vigneti e attraversa i grandi cru uno dopo l\'altro, con i cartelli di pietra all\'angolo di ogni parcella. In venti minuti a piedi si passa da una denominazione regionale a un grand cru che vale cento volte tanto, e in mezzo c\'è un muro a secco alto un metro. Il terreno dalle due parti sembra identico. Non lo è: cambiano la pendenza, il drenaggio, l\'esposizione al sole del mattino. Ma la differenza è così sottile da essere invisibile, e solo il vino la registra. In Italia l\'idea esiste, ma nessuno l\'ha mai codificata così, e vederla disegnata sul terreno con i muretti è la lezione più utile di tutto il viaggio. L\'altra scoperta è che le regioni trattano chi arriva in modi opposti. In Alsazia entri in cantina, ti accolgono, assaggi sei vini, paghi poco o niente e chiacchieri. In Borgogna la stessa richiesta, senza un contatto preso settimane prima, riceve un no gentile: il produttore fa diecimila bottiglie l\'anno, le ha già vendute tutte, e ricevere visitatori non è il suo lavoro. Saperlo prima evita di scambiare per scortesia una questione di scala.',
    esperienzeSlugs: ['cantina-champagne', 'route-des-vins-alsazia', 'climats-borgogna'],
    tripSlugs: ['rotte-dei-vini-francia'],
    imageAlt: 'I filari dei vigneti grand cru di Verzenay sulla Montagne de Reims, con la terra chiara di gesso, Champagne',
    immagine: '/images/francia/vigneti-di-francia.jpg',
  },
  {
    slug: 'provenza',
    paeseSlug: 'francia',
    ordine: 8,
    nome: 'Provenza',
    tipologia: ['paesaggi', 'borghi', 'archeologia'],
    giorniConsigliati: '6-8 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Nell\'immaginario la Provenza coincide con due settimane di lavanda in fiore. In realtà è un territorio enorme, con il canyon più profondo d\'Europa, la più alta concentrazione di monumenti romani fuori dall\'Italia, un parco nazionale di falesie calcaree sul mare e una montagna dipinta ottanta volte dallo stesso pittore.',
    percheAndarci:
      'Qui la luce ha cambiato la storia della pittura (Cézanne, Van Gogh, i fauve), e si capisce subito perché: il mistral pulisce l\'aria e i colori diventano saturi, quasi innaturali. E a un\'ora l\'uno dall\'altra ci sono un acquedotto romano alto quasi cinquanta metri e una gola dove l\'acqua è verde smeraldo tra pareti di settecento metri.',
    cosaVedere: [
      'Le **Gole del Verdon**, il canyon più profondo d\'Europa, con il lago di Sainte-Croix all\'uscita e la strada panoramica sul bordo',
      'Il **Luberon** con i villaggi arroccati: **Gordes**, **Roussillon** con le cave di ocra e il sentiero tra le terre rosse, Ménerbes, Bonnieux, Lacoste',
      'L\'**altopiano di Valensole** e quello di **Sault**, i due grandi paesaggi della lavanda, che fioriscono e si tagliano in periodi diversi',
      '**Avignone** con il **Palazzo dei Papi**, il più grande palazzo gotico del mondo, e il ponte rimasto a metà',
      '**Arles** con l\'**anfiteatro romano ancora in uso**, gli Alyscamps e i luoghi di Van Gogh, sapendo però che **in città non c\'è nessun quadro di Van Gogh**',
      '**Nîmes** con l\'**arena romana meglio conservata al mondo** e la **Maison Carrée**, iscritta all\'UNESCO nel 2023',
      'Il **Pont du Gard**, patrimonio UNESCO: tre ordini di arcate, quasi cinquanta metri di altezza, parte di un acquedotto di circa cinquanta chilometri con una **pendenza media di circa venticinque centimetri al chilometro**',
      '**Aix-en-Provence** con il Cours Mirabeau, l\'atelier di **Cézanne** e la **Montagne Sainte-Victoire**, che lui ha dipinto decine di volte',
      '**Marsiglia** con il Vieux-Port, il MuCEM, Le Panier e il **Parco Nazionale delle Calanques**, falesie calcaree e insenature tra la città e Cassis',
    ],
    cosaFare: [
      'Vedere la **lavanda nel periodo e nel posto giusti**, una finestra molto più stretta di quanto si creda (c\'è una scheda esperienza dedicata)',
      'Percorrere le **Gole del Verdon**, a piedi sul fondo o in kayak dal lago (c\'è una scheda esperienza dedicata)',
      'Entrare nelle **Calanques** da Marsiglia o da Cassis, dal mare o a piedi (c\'è una scheda esperienza dedicata)',
      'Attraversare il **Pont du Gard** e fare il bagno nel fiume sotto le arcate',
      'Salire sul **Mont Ventoux**, il «gigante di Provenza» e la salita più famosa del ciclismo francese, in bici o in auto',
      'Andare a un **mercato provenzale** nel giorno giusto: ogni paese ha il suo, ed è lì che la regione si mostra com\'è',
    ],
    doveDormire:
      'La Provenza è grande e conviene dividerla su due basi. **Avignone o Saint-Rémy** per la parte occidentale: papi, romani, Alpilles, Camargue. **Gordes, Bonnieux o Apt** per il Luberon; **Moustiers-Sainte-Marie** per il Verdon; **Cassis** per le Calanques. Marsiglia è una città vera e un\'ottima base per chi non vuole guidare. In luglio e agosto i prezzi salgono molto, soprattutto nel Luberon.',
    doveMangiare:
      'Cucina di verdure, olio ed erbe: **ratatouille**, **tapenade**, **anchoïade**, **pissaladière**, **daube** di manzo al vino, **pieds et paquets** a Marsiglia, e la **bouillabaisse**. Quella vera è un piatto di pescatori con pesci di scoglio e rascasse, servito in due tempi (prima il brodo con la rouille e i crostini, poi il pesce), e costa caro per una ragione: se costa poco, non è quella vera. I mercati sono pieni di **meloni di Cavaillon**, **olive**, **formaggi di capra**, **miele di lavanda** ed **erbe di Provenza**. Da bere, i rosé della Provenza e i rossi del Rodano meridionale.',
    comeArrivare:
      'L\'alta velocità porta da Parigi ad Avignone in poco più di due ore e a Marsiglia in circa tre. Ci sono aeroporti a Marsiglia e Nîmes, più Nizza a est. **Per tutto quello che non è una città serve l\'auto.**',
    comeSpostarsi:
      '**Auto**, con due avvertenze. La prima: **Marsiglia, Aix e altre città hanno zone a basse emissioni dove serve la vignetta Crit\'Air**, da ordinare online settimane prima. La seconda: in alta stagione, nei villaggi del Luberon e a Moustiers, **i parcheggi sono pochi, a pagamento e pieni entro metà mattina**.',
    periodoMigliore:
      '**maggio-giugno e settembre-ottobre**, con un\'eccezione importante. Chi viene **per la lavanda** ha una finestra che va indicativamente **da metà giugno a inizio agosto**, diversa da un altopiano all\'altro, e **il taglio arriva subito dopo la fioritura**: con una settimana di ritardo si trovano i campi già tagliati. Luglio e agosto sono caldissimi, affollati e cari, e in luglio il **Festival di Avignone** rende la città impraticabile per chi non ci va apposta. Il **mistral** può soffiare per giorni di fila in qualunque stagione.',
    costi:
      'Nella media francese; il Luberon e le Calanques in alta stagione stanno sopra. Molte delle cose migliori sono gratuite o quasi: i villaggi, i mercati, i sentieri, i campi di lavanda. Al Pont du Gard si paga parcheggio più museo; i monumenti romani di Arles e Nîmes hanno biglietti cumulativi convenienti.',
    erroriDaEvitare: [
      '**Venire per la lavanda nel periodo sbagliato.** È l\'errore più frequente: le finestre di fioritura sono brevi e diverse tra Valensole e Sault, e dopo il taglio non resta niente da vedere',
      'Entrare nei campi di lavanda per le fotografie: sono **coltivazioni private**, e all\'abbazia più fotografata della regione i religiosi hanno chiesto espressamente di non farlo',
      '**D\'estate, non controllare se le Calanques sono aperte**: per il rischio incendi il parco **valuta il rischio giorno per giorno e decide le chiusure il giorno prima**, e alcune calanque sono **a numero chiuso, con prenotazione gratuita obbligatoria**',
      'Andare ad Arles aspettandosi di vedere i quadri di Van Gogh: in città non ce n\'è nessuno',
      'Arrivare a Gordes o a Moustiers a mezzogiorno in agosto e cercare parcheggio',
      'Sottovalutare il caldo: in luglio l\'interno della Provenza supera spesso i trentacinque gradi, e i sentieri vanno fatti all\'alba',
      'Entrare in una zona a basse emissioni senza la vignetta Crit\'Air',
    ],
    confronti: [
      {
        titolo: 'La lavanda: dove e quando',
        introduzione:
          'Per molti è il motivo del viaggio in Provenza, ed è anche la cosa che va storta più spesso. Il motivo: con «lavanda» si indicano due piante diverse, coltivate a quote diverse, che fioriscono in momenti diversi e vengono tagliate presto. Chi prenota ad agosto pensando di trovare i campi viola arriva quasi sempre dopo la mietitura.',
        opzioni: [
          {
            nome: 'Altopiano di Valensole: lavandino',
            sintesi: 'I campi larghissimi e regolari delle fotografie, a quota piuttosto bassa, coltivati a lavandino: un ibrido più produttivo, dal colore più intenso e con i filari più fitti.',
            costo: 'gratuito (sono campi privati visibili dalla strada)',
            durata: 'fioritura indicativamente da metà giugno a metà luglio, con taglio subito dopo',
            pro: [
              'È il paesaggio che tutti hanno in mente: filari fino all\'orizzonte, colore pieno',
              'È facile da raggiungere e vicino al Verdon, quindi si unisce al canyon senza sforzo',
              'Fiorisce presto: è la scelta giusta per chi viene a giugno',
            ],
            contro: [
              '**Viene tagliato presto**, spesso già entro metà luglio: chi arriva a fine luglio trova le stoppie',
              'Nelle due settimane di picco è affollatissimo, con file di auto lungo le strade',
              'Il lavandino ha un profumo meno fine della lavanda vera',
            ],
            perChi: 'Chi viene tra metà giugno e i primi giorni di luglio e vuole l\'immagine classica.',
          },
          {
            nome: 'Altopiano di Sault: lavanda vera',
            sintesi: 'Sopra gli ottocento metri, dove cresce la lavanda fine, in campi più piccoli e irregolari ai piedi del Mont Ventoux.',
            costo: 'gratuito',
            durata: 'fioritura più tardiva, indicativamente da metà luglio a inizio agosto',
            pro: [
              '**Fiorisce più tardi**: è la risposta giusta per chi può venire solo a fine luglio',
              'La lavanda vera ha il profumo migliore ed è quella usata in profumeria',
              'Molto meno affollato di Valensole',
              'Il paesaggio è più vario, con il Ventoux sullo sfondo',
            ],
            contro: [
              'I campi sono più piccoli e in fotografia rendono meno',
              'È più fuori mano rispetto al resto della Provenza',
            ],
            perChi: 'Chi viaggia nella seconda metà di luglio, chi cerca il profumo più della fotografia.',
          },
          {
            nome: 'L\'abbazia cistercense del Luberon',
            sintesi: 'L\'immagine più riprodotta della Provenza: un\'abbazia romanica del XII secolo con un campo di lavanda davanti.',
            costo: 'gratuito dall\'esterno; visita dell\'abbazia a pagamento e su prenotazione',
            durata: 'fioritura indicativamente da fine giugno a metà luglio',
            pro: [
              'L\'accostamento tra l\'architettura romanica spoglia e il campo viola è straordinario',
              'L\'abbazia ospita una comunità monastica attiva, e la visita vale già di per sé',
            ],
            contro: [
              '**Durante la fioritura è il punto più affollato di tutta la Provenza**, con parcheggi pieni e file',
              '**I monaci hanno chiesto espressamente di non entrare nel campo**, e rispettare la richiesta è il minimo',
              'La visita interna è a numero chiuso e va prenotata',
            ],
            perChi: 'Chi ci arriva presto al mattino e accetta di fotografare dal bordo.',
          },
          {
            nome: 'Rinunciare alla lavanda',
            sintesi: 'Venire in Provenza a maggio, a settembre o in ottobre: niente lavanda, ma tutto il resto e nessuna folla.',
            costo: 'parecchio più basso',
            durata: 'tutta la stagione',
            pro: [
              'Il Verdon, le Calanques, i romani, i villaggi e i mercati ci sono tutto l\'anno, e a settembre sono vuoti',
              'Le temperature sono sopportabili, mentre in luglio i sentieri si possono fare solo all\'alba',
              'Gli alloggi costano molto meno',
              'A settembre c\'è la vendemmia nel Rodano meridionale',
            ],
            contro: [
              'Niente campi viola, che per molti sono la ragione del viaggio',
            ],
            perChi: 'Chi torna, chi soffre il caldo, chi vuole vedere la Provenza oltre la fotografia.',
          },
        ],
        raccomandazione:
          'Chi vuole la lavanda punti su **fine giugno-inizio luglio a Valensole** oppure su **metà-fine luglio a Sault**, e **controlli lo stato della fioritura pochi giorni prima di partire**, perché cambia ogni anno con l\'andamento della stagione. Chi non ha questo vincolo venga a **settembre**, quando la Provenza dà il meglio.',
      },
    ],
    miaEsperienza:
      'In Provenza le aspettative si sistemano in un giorno, a patto di fare una cosa: uscire dal Luberon. I villaggi arroccati sono bellissimi, ma è lì che si concentra tutto. In agosto a Gordes si gira quaranta minuti per parcheggiare e poi si cammina in fila per una via di negozi. A un\'ora di distanza ci sono le Gole del Verdon, il canyon più profondo d\'Europa, che quasi nessuno mette in programma. Si cammina sul fondo tra pareti verticali di centinaia di metri, con l\'acqua verde smeraldo accanto e tunnel scavati nella roccia da attraversare con la torcia. Oppure ci sono i romani. L\'arena di Nîmes è l\'anfiteatro romano meglio conservato del mondo e ci fanno ancora gli spettacoli; il Pont du Gard faceva parte di un acquedotto che portava l\'acqua per cinquanta chilometri con una pendenza media di venticinque centimetri al chilometro, un margine d\'errore che oggi si ottiene con il laser. Sulla lavanda c\'è una sola cosa da sapere: ha un calendario, e il calendario non aspetta. Fiorisce e viene tagliata, e chi arriva ad agosto pensando ai campi viola trova le stoppie e non ci crede.',
    esperienzeSlugs: ['lavanda-provenza', 'gole-verdon', 'calanques-marsiglia', 'pont-du-gard'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'Il villaggio di Gordes arroccato sulla collina con le case in pietra chiara e il castello in cima, Provenza',
    immagine: '/images/francia/provenza.jpg',
  },
  {
    slug: 'camargue',
    paeseSlug: 'francia',
    ordine: 9,
    nome: 'Camargue',
    tipologia: ['natura', 'fauna', 'tradizioni'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il delta del Rodano: quasi mille chilometri quadrati di lagune salmastre, risaie, saline e praterie tra i due bracci del fiume e il mare. È il più grande delta fluviale dell\'Europa occidentale e non somiglia a nessun altro posto in Francia: piatto fino all\'orizzonte, con l\'acqua e la terra che si confondono e una luce bassissima.',
    percheAndarci:
      'È l\'unico sito di nidificazione regolare del fenicottero rosa in Francia. Ci sono cavalli bianchi e tori neri allevati allo stato semibrado da una comunità di mandriani che esiste ancora. Ed è uno dei pochi paesaggi europei dove si guida per venti chilometri senza vedere un rilievo.',
    cosaVedere: [
      'L\'**Étang de Vaccarès** e le lagune interne, il cuore della riserva',
      'I **fenicotteri rosa**, presenti tutto l\'anno e più numerosi in primavera ed estate; il parco ornitologico di Pont de Gau permette di vederli da vicino dalle passerelle',
      'I **cavalli camarguesi**, una razza antichissima: **nascono scuri e diventano bianchi tra i quattro e i sette anni**',
      'I **tori neri** allevati nelle *manades*, e i **gardians**, i mandriani a cavallo che li governano',
      '**Saintes-Maries-de-la-Mer**, il paese di mare con la chiesa fortificata, meta a fine maggio del **pellegrinaggio dei Rom e Sinti** per Sara la Nera',
      '**Aigues-Mortes**, la città murata fatta costruire da Luigi IX come porto d\'imbarco per le crociate, con le mura intatte e accanto le **saline rosa**',
      'Le **risaie**: la Camargue è la principale zona di coltivazione del riso in Francia',
    ],
    cosaFare: [
      'Una **passeggiata a cavallo** con i cavalli camarguesi, il modo tradizionale di entrare nelle zone dove le strade non arrivano (c\'è una scheda esperienza dedicata)',
      'Il **birdwatching** a Pont de Gau o lungo la digue à la mer, con i fenicotteri e centinaia di altre specie',
      'Girare la Camargue **in bicicletta**: è piatta e ha una rete di sterrati',
      'Vedere una **course camarguaise**, che con la corrida c\'entra poco: **il toro non viene ucciso**, e i *raseteurs* vestiti di bianco devono strappargli le coccarde dalle corna',
      'Salire sulle mura di **Aigues-Mortes** al tramonto, con le saline rosa sotto',
    ],
    doveDormire:
      '**Arles** è la base più pratica e più bella, a mezz\'ora dal cuore della Camargue e piena di storia romana. **Saintes-Maries-de-la-Mer** per stare dentro, con un\'offerta limitata e stagionale. **Aigues-Mortes** per il lato occidentale. Molte **manades** offrono alloggio in azienda, ed è il modo più coerente di dormire qui.',
    doveMangiare:
      'La cucina camarguese è particolare e molto locale: la **gardiane de taureau**, uno stufato di toro al vino rosso cotto per ore e servito con il **riso di Camargue**; il **riso rosso** integrale della zona; le **telline** raccolte sulla battigia; le **anguille**; e il **sale di Camargue** con la sua fleur de sel. Da bere i *vins de sable*, prodotti su suoli sabbiosi dove la fillossera non è mai arrivata.',
    comeArrivare:
      'In treno fino ad **Arles** o **Nîmes**, poi in auto. Gli aeroporti più vicini sono Marsiglia e Nîmes.',
    comeSpostarsi:
      '**Auto o bicicletta.** Le strade sono poche e dritte, e molte piste sono sterrate e chiuse al traffico. La bici va benissimo perché non c\'è un metro di dislivello, ma **il vento conta parecchio**: con il mistral, pedalare controvento sulla digue è durissimo.',
    periodoMigliore:
      '**aprile-maggio e settembre-ottobre.** In primavera ci sono la migrazione, i fenicotteri in piena attività e i fiori nelle praterie salmastre; in autunno la luce è migliore e non c\'è nessuno. **L\'estate ha due problemi seri: il caldo umido e le zanzare**, che in Camargue decidono se una serata all\'aperto si può fare o no. Repellente forte e maniche lunghe al tramonto.',
    costi:
      'Bassi. Gran parte della riserva è ad **accesso libero**, i sentieri e le strade panoramiche sono gratuiti, il parco ornitologico e le mura di Aigues-Mortes hanno biglietti contenuti. La spesa principale sono le passeggiate a cavallo e le visite alle manades.',
    erroriDaEvitare: [
      '**Venire d\'estate senza repellente.** Le zanzare della Camargue hanno la fama che si meritano, e al tramonto rendono impraticabili le zone umide',
      'Aspettarsi paesaggi spettacolari: la Camargue è piattissima e va guardata da vicino (uccelli, luce, orizzonte). Chi cerca panorami resta deluso',
      'Confondere la **course camarguaise** con la corrida spagnola: nella prima il toro non viene ucciso. **Ad Arles e Nîmes, però, durante le ferias si tengono anche corride di tipo spagnolo**, ed è bene sapere per cosa si compra il biglietto',
      'Uscire dai sentieri nelle zone protette: gran parte della riserva è ad accesso regolato per proteggere la nidificazione',
      'Andare a Saintes-Maries a fine maggio senza sapere del pellegrinaggio: è un evento importante e il paese è pieno',
      'Guidare sulle piste sterrate con un\'auto bassa dopo la pioggia',
    ],
    miaEsperienza:
      'La Camargue è il posto che meno somiglia al resto della Francia, e quello che delude più facilmente chi arriva con le aspettative sbagliate. Non ci sono panorami. È piatta, l\'orizzonte è una linea continua, e da qualunque punto si vedono acqua, canne e cielo. Bisogna abbassare lo sguardo, e allora cominciano ad apparire le cose: i fenicotteri che filtrano il fango con il becco rovesciato all\'ingiù, una postura assurda da vedere; i cavalli bianchi in gruppo nell\'acqua bassa; gli aironi; e al tramonto una quantità di uccelli che si spostano tutti insieme. Poi c\'è la gente. I gardians non sono una messinscena per turisti: sono mandriani che governano a cavallo, con un tridente, tori semibradi, e il mestiere esiste ancora perché esiste ancora l\'allevamento. Una course camarguaise in un\'arena di paese, dove il toro non si uccide e la folla applaude l\'animale più del raseteur, è il modo più diretto per capire che qui il rapporto con quegli animali è diverso da come lo si immagina. E una nota pratica che vale più di molte altre: d\'estate, dopo il tramonto, le zanzare sono un problema serio, non una battuta.',
    esperienzeSlugs: ['camargue-a-cavallo', 'fenicotteri-camargue', 'aigues-mortes'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'Cavalli bianchi della Camargue al pascolo tra le canne della palude, con uno stormo di fenicotteri in volo',
    immagine: '/images/francia/camargue.jpg',
  },
  {
    slug: 'occitania',
    paeseSlug: 'francia',
    ordine: 10,
    nome: 'Occitania e Linguadoca',
    tipologia: ['storia', 'borghi', 'paesaggi'],
    giorniConsigliati: '5-7 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il sud che quasi nessun turista internazionale percorre: la città fortificata più grande d\'Europa, un canale del Seicento iscritto all\'UNESCO, i castelli catari arroccati su speroni impossibili, la cattedrale in mattoni più grande del mondo e un viadotto autostradale che è il ponte più alto del pianeta.',
    percheAndarci:
      'È il contrappeso della Provenza: stessi paesaggi mediterranei, stesso sole, un terzo dei prezzi e un decimo della gente. E la storia catara, una crociata bandita contro cristiani dello stesso paese, è una delle vicende più dure del medioevo europeo, e la si visita camminando su rocce a mille metri.',
    cosaVedere: [
      '**Carcassonne**, la cité fortificata: cinquantadue torri e doppia cinta muraria, restaurata nell\'Ottocento da Viollet-le-Duc con criteri molto discussi, e proprio per questo un documento di cosa volesse dire «restaurare» nel XIX secolo',
      'Il **Canal du Midi**, patrimonio UNESCO: oltre duecento chilometri scavati nel Seicento per collegare l\'Atlantico al Mediterraneo, con i platani sulle sponde e le **scale di chiuse di Fonseranes**',
      'I **castelli catari** (Quéribus, Peyrepertuse, Montségur), arroccati su creste calcaree a centinaia di metri: furono gli ultimi rifugi di una comunità religiosa sterminata dalla crociata albigese',
      '**Albi**, con la **cattedrale di Sainte-Cécile**, la più grande chiesa in mattoni del mondo, che da fuori sembra una fortezza, e il museo dedicato a **Toulouse-Lautrec**, che qui è nato',
      '**Tolosa**, la ville rose, con la basilica di Saint-Sernin, la più grande chiesa romanica conservata d\'Europa',
      '**Collioure** sulla costa catalana, il porto dove **Matisse e Derain** inventarono il fauvismo in un\'estate',
      'Il **viadotto di Millau**, il ponte più alto del mondo per altezza dei piloni, e sotto le **Gorges du Tarn**',
      'Le **Cévennes** e il **Causse**, altopiani calcarei iscritti all\'UNESCO come paesaggio dell\'agropastorizia mediterranea',
    ],
    cosaFare: [
      'Salire a un **castello cataro**: vuol dire sempre mezz\'ora o un\'ora di sentiero ripido (c\'è una scheda esperienza dedicata)',
      'Navigare o pedalare lungo il **Canal du Midi**, che ha una ciclabile sull\'alzaia',
      'Vedere **Carcassonne di sera**, quando i pullman sono ripartiti e le mura sono illuminate',
      'Attraversare il **viadotto di Millau** e poi guardarlo dal basso, dalle gole',
      'Mangiare un **cassoulet** dove è nato, e dove si discute da secoli su quale città lo faccia meglio',
    ],
    doveDormire:
      '**Carcassonne**, meglio nella città bassa, molto più economica, a venti minuti a piedi dalla cité. **Narbonne o Béziers** per il canale e la costa. **Albi** per il nord. **Millau** per le gole. I prezzi sono tra i più bassi del sud della Francia.',
    doveMangiare:
      'Il piatto simbolo è il **cassoulet**: fagioli bianchi, cotenna, salsiccia e confit, cotti lentamente in un recipiente di terracotta. Tre città rivendicano la ricetta giusta, e la polemica dura da sempre. Poi il **confit de canard**, il **foie gras**, il **Roquefort**, che si affina nelle grotte del paese omonimo e si può visitare, e le **ostriche di Bouzigues** dallo stagno di Thau. Da bere, i vini della **Linguadoca**, la più vasta area vinicola di Francia per superficie, e sulla costa catalana il **Banyuls** dolce.',
    comeArrivare:
      'Alta velocità e treni per Tolosa, Carcassonne, Narbonne, Béziers e Montpellier. Aeroporti a Tolosa, Montpellier, Carcassonne e Perpignano. **Per i castelli catari e per le gole serve l\'auto**.',
    comeSpostarsi:
      '**Auto.** I castelli catari sono sparsi su strade di montagna lente. Il canale si percorre in bici o con una barca a noleggio, una formula molto diffusa che non richiede la patente nautica.',
    periodoMigliore:
      '**maggio-giugno e settembre-ottobre.** L\'estate nell\'interno è molto calda, e i castelli catari, senza ombra, diventano faticosi. In agosto la costa è affollata, ma molto meno di quella provenzale. L\'inverno è mite sulla costa e freddo sui causse.',
    costi:
      'Tra i più bassi del sud della Francia: alloggi, ristoranti e ingressi costano parecchio meno che in Provenza e in Costa Azzurra. Molti castelli catari hanno biglietti simbolici o sono gratuiti.',
    erroriDaEvitare: [
      'Vedere Carcassonne solo di giorno: **nelle ore centrali la cité è un flusso continuo**, la sera è vuota e illuminata',
      'Sottovalutare i castelli catari: si arriva in auto a un parcheggio e poi **si sale a piedi**, spesso su forte pendenza, con vento forte in cima',
      'Andarci in luglio e agosto senza acqua e cappello: sono creste calcaree senza un albero',
      'Trattare l\'Occitania come una Provenza economica: ha una storia propria e una lingua che dà il nome alla regione',
      'Ignorare il Canal du Midi perché «è un canale»: è un\'opera idraulica del Seicento con una soluzione tecnica per ogni dislivello, e percorrerlo in bici è una delle cose migliori del sud',
    ],
    miaEsperienza:
      'L\'Occitania risponde a una domanda che quasi nessuno si fa: dove andare nel sud della Francia quando la Provenza è piena e cara. I paesaggi sono gli stessi (calcare, vigne, cipressi, luce), i prezzi un terzo e i turisti quasi assenti. Però quello che mi è rimasto è la storia catara, più del risparmio. Si sale a Peyrepertuse o a Quéribus, castelli costruiti su creste calcaree strettissime a centinaia di metri d\'altezza, con un vento che non smette mai, e sotto c\'è una valle vuota. Lassù, nel Duecento, si rifugiò una comunità religiosa contro cui il papato bandì una crociata: contro cristiani dello stesso paese, non contro musulmani. La campagna durò vent\'anni e finì con uno sterminio. Di quella gente sono rimasti solo queste rocce e i nomi dei luoghi. In Italia questa storia non si studia; qui è dappertutto, nei cartelli, nei musei di paese, nelle insegne. Carcassonne, al contrario, va presa per quello che è: un restauro ottocentesco molto discusso, che ha inventato tetti a punta che probabilmente non erano mai esistiti. Impressiona comunque, e la sera, quando i pullman sono ripartiti, si cammina tra le due cinte murarie senza incontrare nessuno.',
    esperienzeSlugs: ['castelli-catari', 'canal-du-midi', 'carcassonne'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'La cittadella fortificata di Carcassonne sulla collina vista dalle rive dell\'Aude, con gli archi del Pont-Vieux',
    immagine: '/images/francia/occitania.jpg',
  },
  {
    slug: 'sciare-in-francia',
    paeseSlug: 'francia',
    ordine: 11,
    nome: 'Sciare in Francia',
    tipologia: ['sci', 'montagna', 'inverno'],
    giorniConsigliati: '6-7 giorni, la settimana da sabato a sabato',
    visitataPersonalmente: true,
    introduzione:
      'La Francia ha i comprensori sciistici collegati più grandi del mondo, e c\'è una ragione storica: dagli anni Sessanta lo Stato ha pianificato e costruito da zero, in alta quota, stazioni che prima non esistevano, le *stations intégrées*, scegliendo i siti per l\'innevamento e non per il paesaggio. Ne è uscita un\'offerta che in Europa non ha eguali per estensione e affidabilità della neve, e che divide molto chi ci va.',
    percheAndarci:
      'In un comprensorio come le Tre Valli si scia una settimana senza rifare due volte la stessa pista, e le stazioni sopra i duemila metri hanno la neve anche quando le Alpi basse non ce l\'hanno. E a Chamonix, che è l\'opposto di tutto questo, c\'è la discesa fuoripista più famosa del mondo.',
    cosaVedere: [
      'Le **Tre Valli** (Courchevel, Méribel, Val Thorens, Les Menuires, Saint-Martin), **il comprensorio collegato più esteso del mondo**, con Val Thorens, la stazione più alta d\'Europa',
      '**Paradiski** (La Plagne, Les Arcs, Peisey-Vallandry), collegate dal **Vanoise Express**, una funivia a due piani che attraversa la valle in pochi minuti',
      '**Tignes e Val d\'Isère**, ad alta quota, con il ghiacciaio della Grande Motte',
      '**Chamonix**, che è una valle con settori separati più che un comprensorio collegato, ed è la capitale mondiale dell\'alpinismo: l\'**Aiguille du Midi a 3.842 metri** e la **Vallée Blanche**',
      '**Portes du Soleil** e il **Grand Massif**, a quote più basse ma enormi e più economici',
      '**Alpe d\'Huez** e **Les 2 Alpes**, sul versante dell\'Isère, con piste lunghissime',
      'Le **Alpi del Sud** (Isola 2000, Auron, Valberg) a un\'ora e mezza dal mare, e i **Pirenei**, molto più economici e meno affidabili per la neve',
    ],
    cosaFare: [
      'Sciare un comprensorio collegato **spostandosi di valle in valle**, che è il motivo per cui questi domini esistono',
      'La **Vallée Blanche** a Chamonix con una guida: è una discesa su ghiacciaio, non una pista (c\'è una scheda esperienza dedicata)',
      'Salire all\'**Aiguille du Midi** anche senza sciare, per la funivia e la terrazza (c\'è una scheda esperienza dedicata)',
      'Provare lo **scialpinismo o le ciaspole** nelle valli laterali, il contrario del comprensorio, e quasi gratis',
      'Sciare nelle **Alpi Marittime al mattino e scendere al mare nel pomeriggio**: dalla Costa Azzurra si può fare sul serio',
    ],
    doveDormire:
      'Bisogna scegliere tra **stazione integrata d\'alta quota** (appartamenti ai piedi delle piste, si esce e si rientra con gli sci, architettura funzionale e spesso brutta) e **villaggio tradizionale** a quota più bassa, con il centro storico, il legno e le navette per gli impianti. È il tema del secondo confronto qui sotto, ed è la scelta che decide il tipo di settimana. Nota pratica: in Francia la formula più diffusa è **l\'appartamento in residence** con settimana da sabato a sabato, più che la mezza pensione in albergo.',
    doveMangiare:
      'La cucina savoiarda è fatta di formaggio e calorie: **raclette** (mezza forma scaldata e raschiata sul piatto), **fondue savoyarde**, **tartiflette** (patate, lardo, cipolle e **Reblochon** fuso: un piatto molto più recente di quanto sembri, nato in buona parte per promuovere il formaggio), **diots** (salsicce) al vino bianco, e i formaggi Beaufort, Abondance e Tomme de Savoie. Da bere i bianchi di Savoia (Apremont, Roussette) e il **génépi** come digestivo. Sulle piste i **ristoranti d\'altura** sono un\'istituzione, e una voce di spesa importante.',
    comeArrivare:
      'In treno fino alle stazioni di fondovalle della Tarentaise (Bourg-Saint-Maurice, Moûtiers), poi bus o navetta; d\'inverno ci sono treni notturni e collegamenti diretti stagionali da diverse città europee. Aeroporti di Ginevra, Lione, Grenoble e Chambéry. **In auto, nei comuni di montagna catene o pneumatici invernali sono obbligatori per legge in un periodo fissato ogni anno**: conviene controllare le date prima di partire.',
    comeSpostarsi:
      'In stazione l\'auto non serve: le navette gratuite collegano quartieri e impianti. **Il punto delicato è il giorno di arrivo**: il sabato, in alta stagione, tutte le settimane bianche francesi cambiano insieme, e sulle strade della Tarentaise e della Maurienne le code possono durare ore. Partire di domenica, o molto presto il sabato, cambia la giornata.',
    periodoMigliore:
      '**da metà gennaio a metà marzo** per il rapporto tra neve e prezzi, e **marzo** è il mese migliore per neve, luce e giornate lunghe. **In Francia la variabile decisiva sono le vacanze scolastiche invernali, scaglionate in tre zone** su quattro o cinque settimane di fila tra febbraio e inizio marzo: in quel periodo, a rotazione, le stazioni sono piene e i prezzi al massimo. **Il calendario delle zone esce con largo anticipo e va consultato prima di prenotare.** Natale e Capodanno sono carissimi, e alle quote basse la neve non è garantita.',
    costi:
      'Alti, e strutturati diversamente dall\'Italia: **appartamento per la settimana + forfait + noleggio + scuola**, con il forfait dei grandi comprensori tra le voci più care d\'Europa. **I forfait di più giorni comprati online in anticipo costano parecchio meno.** Va aggiunta l\'**assicurazione per il soccorso sulle piste**, venduta con lo skipass: **in Francia il soccorso sulle piste si paga**, e un intervento fuoripista costa cifre molto alte.',
    erroriDaEvitare: [
      '**Prenotare senza guardare il calendario delle vacanze scolastiche francesi**: è la differenza tra una settimana normale e una con prezzi doppi e piste piene',
      'Arrivare di sabato in alta stagione senza mettere in conto le code in valle',
      'Non comprare l\'assicurazione del soccorso sulle piste, che costa pochi euro al giorno e copre una voce che in Francia si paga',
      'Comprare il forfait alla cassa il primo giorno: online e in anticipo costa meno',
      'Scegliere un comprensorio enorme da principianti o se si scia poche ore al giorno: si paga un forfait grande per usarne un decimo',
      'Andare fuoripista senza guida, senza ARVA, pala e sonda e senza saper leggere il bollettino valanghe. **La Vallée Blanche non è una pista**: è un itinerario su ghiacciaio, con i crepacci',
      'Aspettarsi villaggi alpini di legno in una stazione integrata degli anni Settanta: sono state costruite per sciare, non per essere guardate',
    ],
    confronti: [
      {
        titolo: 'Quale comprensorio scegliere',
        introduzione:
          'Sulla carta i grandi domini francesi si assomigliano; sugli sci sono molto diversi. Conta prima di tutto la **quota**, che decide quanto è affidabile la neve; poi il **carattere della stazione**; infine il prezzo, che in Francia varia molto più di quanto si creda.',
        opzioni: [
          {
            nome: 'Les 3 Vallées',
            sintesi: 'Il comprensorio collegato più esteso del mondo: cinque stazioni, centinaia di chilometri di piste, e Val Thorens, la stazione più alta d\'Europa.',
            costo: 'il forfait più caro di Francia; alloggi da Courchevel (carissimo) a Les Menuires (accessibile)',
            durata: 'una settimana, e non si finisce',
            pro: [
              'Un\'estensione senza paragoni: si sciano sei giorni senza ripetere',
              '**Val Thorens a 2.300 metri ha la neve più affidabile delle Alpi francesi**',
              'Cinque stazioni molto diverse sotto lo stesso forfait: si sceglie il carattere senza rinunciare al dominio',
              'Impianti tra i più moderni ed efficienti d\'Europa',
            ],
            contro: [
              'Il forfait è caro, e conviene solo a chi scia tutto il giorno e si sposta parecchio',
              'Courchevel e Méribel hanno prezzi fuori scala',
              'Val Thorens è una stazione integrata d\'alta quota senza alcun carattere alpino tradizionale',
            ],
            perChi: 'Sciatori bravi che sciano molte ore al giorno e vogliono il massimo dell\'estensione.',
          },
          {
            nome: 'Paradiski (La Plagne e Les Arcs)',
            sintesi: 'Due grandi stazioni unite da una funivia a due piani che attraversa la valle, con un dominio enorme e quote alte.',
            costo: 'alto, ma sotto le Tre Valli',
            durata: 'una settimana',
            pro: [
              'Un dominio molto vasto e vario, con boschi e alta quota insieme',
              'Il collegamento tra i due versanti è un\'attrazione a sé',
              'Ottimo per le famiglie: molte aree protette e piste blu lunghe',
              'Les Arcs ha una delle piste di chilometro lanciato più famose al mondo',
            ],
            contro: [
              'Le due stazioni sono divise in molti «villaggi» satellite: sbagliando quartiere si finisce lontani dagli impianti giusti',
              'L\'architettura degli anni Settanta divide',
            ],
            perChi: 'Famiglie e gruppi misti, chi vuole grandi dimensioni senza i prezzi delle Tre Valli.',
          },
          {
            nome: 'Tignes e Val d\'Isère',
            sintesi: 'Alta quota pura, con il ghiacciaio della Grande Motte e una delle stagioni più lunghe delle Alpi.',
            costo: 'alto',
            durata: 'una settimana',
            pro: [
              '**Innevamento tra i più affidabili d\'Europa**, grazie alla quota e al ghiacciaio',
              'Terreno eccezionale per sciatori esperti e per il fuoripista, con moltissimi itinerari',
              'Val d\'Isère ha un centro con più carattere delle stazioni integrate pure',
              'Stagione lunghissima, con aperture precoci e chiusure tardive',
            ],
            contro: [
              'La quota alta vuol dire anche vento e impianti chiusi nelle giornate di bufera',
              'Poco adatto ai principianti assoluti, e caro',
              'Tignes è la stazione che divide di più per l\'architettura',
            ],
            perChi: 'Sciatori esperti, appassionati di fuoripista, chi vuole la neve sicura a inizio o fine stagione.',
          },
          {
            nome: 'Chamonix',
            sintesi: 'Una valle alpina storica con settori separati, ai piedi del Monte Bianco, più che un comprensorio: la capitale mondiale dell\'alpinismo.',
            costo: 'medio per l\'alloggio, alto per guide e impianti d\'alta quota',
            durata: 'una settimana, anche senza sciare tutti i giorni',
            pro: [
              '**L\'Aiguille du Midi a 3.842 metri** e la **Vallée Blanche**, oltre venti chilometri di discesa su ghiacciaio con una guida: non ha equivalenti',
              'È una città vera, abitata tutto l\'anno, con negozi, musei e ristoranti, ben diversa da una stazione',
              'Terreno leggendario per sciatori esperti (i Grands Montets su tutti)',
              'Ottima anche per chi non scia: funivie panoramiche, ciaspole, terme',
            ],
            contro: [
              '**I settori non sono collegati tra loro**: ci si sposta in navetta, e chi cerca un grande dominio continuo resta deluso',
              'Poco adatta ai principianti',
              'I ghiacciai stanno cambiando, e alcuni itinerari classici sono più difficili o più brevi di un tempo',
            ],
            perChi: 'Sciatori esperti, alpinisti, chi vuole una valle con una vita propria più che un impianto turistico.',
          },
          {
            nome: 'Portes du Soleil, Grand Massif, Alpe d\'Huez',
            sintesi: 'Grandi domini a quote intermedie, con più bosco, prezzi più bassi e villaggi con più carattere.',
            costo: 'medio',
            durata: 'una settimana',
            pro: [
              'Ottimo rapporto tra dimensioni e prezzo',
              'Si scia tra gli alberi, cosa impossibile nelle stazioni d\'alta quota',
              'Le **Portes du Soleil** attraversano il confine: si scia in due paesi con lo stesso forfait',
              '**Alpe d\'Huez** ha una delle piste nere più lunghe del mondo, con un dislivello enorme in un solo tracciato',
            ],
            contro: [
              '**Innevamento meno affidabile** alle quote basse, soprattutto a inizio e fine stagione',
              'Domini frammentati, con lunghi trasferimenti sugli sci',
            ],
            perChi: 'Chi ha un budget, chi scia a gennaio e febbraio, chi preferisce il bosco all\'alta quota.',
          },
          {
            nome: 'Alpi del Sud e Pirenei',
            sintesi: 'Isola 2000, Auron e Valberg a un\'ora e mezza dalla Costa Azzurra; e la catena dei Pirenei, molto più economica.',
            costo: 'il più basso di tutti',
            durata: 'anche pochi giorni, o giornate singole',
            pro: [
              'Dalle Alpi Marittime **si scia al mattino e si è al mare nel pomeriggio**, e non è un modo di dire',
              'Prezzi molto più bassi: forfait, scuola e alloggio costano una frazione di quelli della Tarentaise',
              'Molta meno gente, anche a febbraio',
              'I Pirenei hanno stazioni dal carattere un po\' spagnolo e una cucina propria',
            ],
            contro: [
              '**Domini molto più piccoli** e innevamento meno affidabile, con stagioni corte',
              'Meno impianti moderni',
              'I Pirenei sono lontani da tutto il resto di questo itinerario',
            ],
            perChi: 'Chi ha un budget, chi scia pochi giorni, chi unisce neve e mare, chi è già in Costa Azzurra.',
          },
        ],
        raccomandazione:
          'Per una settimana classica con neve sicura e grande estensione: le **Tre Valli** se il budget lo permette, **Paradiski** come alternativa più equilibrata. Per sciatori esperti: **Tignes-Val d\'Isère** o **Chamonix**, due mondi opposti ed entrambi validi. Con un budget o pochi giorni: **le Alpi del Sud**, soprattutto se si è già sulla costa. E comunque **prima si guarda il calendario delle vacanze scolastiche, poi tutto il resto**.',
      },
      {
        titolo: 'Stazione integrata d\'alta quota o villaggio tradizionale?',
        introduzione:
          'È la scelta più francese di tutte, e quasi nessuno la fa sapendo cosa sceglie. Negli anni Sessanta e Settanta lo Stato ha costruito da zero decine di stazioni sopra i milleottocento metri, in luoghi disabitati, progettate da urbanisti con un solo criterio: uscire di casa con gli sci ai piedi. L\'alternativa sono i villaggi alpini che c\'erano già, più bassi e più belli.',
        opzioni: [
          {
            nome: 'Stazione integrata d\'alta quota',
            sintesi: 'Val Thorens, Tignes, Les Arcs, La Plagne, Avoriaz, Flaine: residence ai piedi delle piste, tutto pedonale, tutto in quota.',
            costo: 'medio-alto, con appartamenti di varie categorie',
            durata: 'la settimana classica',
            pro: [
              '**Ski-in ski-out vero**: si esce dal portone con gli sci ai piedi e si rientra allo stesso modo',
              'La quota garantisce la neve, e la stagione è lunga',
              'Tutto a distanza pedonale: niente auto, niente navette, niente tempi morti',
              'Ideale con bambini e attrezzatura da portarsi dietro',
            ],
            contro: [
              '**Un\'architettura funzionale che molti trovano brutta**: cemento, grandi volumi, nessun centro storico',
              'Fuori dalla stagione dello sci non c\'è nulla, e anche in stagione la «vita» è quella dei residence',
              'Esposte al vento e alle chiusure degli impianti nelle giornate cattive',
              'Per chi non scia non c\'è alternativa',
            ],
            perChi: 'Chi scia tutti i giorni e tutto il giorno, famiglie con bambini piccoli, chi non vuole spostarsi per niente.',
          },
          {
            nome: 'Villaggio alpino tradizionale',
            sintesi: 'Chamonix, Megève, La Clusaz, Le Grand-Bornand, Samoëns, Serre Chevalier: paesi che c\'erano già, più bassi, con un centro e una vita propria.',
            costo: 'variabile, da accessibile a molto alto (Megève)',
            durata: 'la settimana classica, con più senso anche per chi non scia',
            pro: [
              'Sono paesi veri, con una chiesa, un mercato e gente che ci vive tutto l\'anno',
              'Molto più belli, e più piacevoli quando il tempo è brutto',
              'Per mangiare e per la sera l\'offerta è molto migliore',
              'Vanno bene anche per chi non scia o scia poco',
            ],
            contro: [
              '**Quote più basse e innevamento meno affidabile**, soprattutto a dicembre e a fine stagione',
              'Per raggiungere gli impianti servono la navetta o l\'auto, con tempi morti ogni giorno',
              'Megève e simili hanno prezzi alti per ragioni che con lo sci c\'entrano poco',
            ],
            perChi: 'Chi non scia tutti i giorni, chi viaggia con persone che non sciano, chi vuole una vacanza in montagna oltre che sulle piste.',
          },
        ],
        raccomandazione:
          'Se tutto il gruppo scia tutti i giorni, **vince la stazione integrata, senza discussione**: il tempo risparmiato ogni giorno vale molto più dell\'estetica. Se anche una sola persona non scia, o se si pensa di alternare, **l\'unica scelta sensata è il villaggio tradizionale**, perché in una stazione integrata chi non scia non ha niente da fare.',
      },
    ],
    miaEsperienza:
      'La prima volta che sono arrivato in una stazione integrata francese sono rimasto perplesso. Si sale in valle tra i boschi, si passa un tornante e compare un blocco di edifici degli anni Settanta a duemila metri, senza un campanile, senza una piazza, con gli sci appoggiati ovunque. Poi la mattina dopo esci dal portone con gli sci ai piedi, due spinte e sei sulla seggiovia, e alle nove e un quarto stai già sciando su una neve che a quella quota c\'è sempre. Al terzo giorno la questione estetica è sparita. Sono state costruite proprio per questo, e per chi scia sul serio funzionano meglio di qualunque villaggio da cartolina. Il rovescio si vede nei giorni di brutto tempo, quando gli impianti alti chiudono per il vento: in una stazione integrata non c\'è nient\'altro da fare, e la giornata è persa. Però le due cose che cambiano di più la settimana non riguardano lo sci, sono burocrazia. La prima è il calendario delle vacanze scolastiche, diviso in tre zone: le stesse piste, la stessa neve, la stessa settimana di febbraio possono costare il doppio e avere il triplo della gente, a seconda di quale zona è in vacanza. La seconda è l\'assicurazione del soccorso: qui il soccorso sulle piste si paga, e la polizza venduta con lo skipass costa pochi euro al giorno.',
    esperienzeSlugs: ['vallee-blanche', 'aiguille-du-midi', 'scialpinismo-francia'],
    tripSlugs: ['settimana-bianca-francia'],
    imageAlt: 'Una pista innevata sopra Chamonix con le guglie del massiccio del Monte Bianco sullo sfondo',
    immagine: '/images/francia/sciare-in-francia.jpg',
  },
  {
    slug: 'montagne-francesi',
    paeseSlug: 'francia',
    ordine: 12,
    nome: 'Camminare in montagna',
    tipologia: ['trekking', 'montagna', 'natura'],
    giorniConsigliati: '7-11 giorni per un trekking a tappe',
    visitataPersonalmente: true,
    introduzione:
      'La Francia ha il massiccio più alto delle Alpi, undici parchi nazionali, una rete di sentieri a lunga percorrenza (i **GR**) segnata da ottant\'anni con la stessa bandierina bianca e rossa, e due dei trekking più famosi d\'Europa: il giro del Monte Bianco e la traversata della Corsica. E ha una cosa che l\'Italia non ha: **il soccorso in montagna dei reparti pubblici è in linea di principio gratuito**.',
    percheAndarci:
      'Il **Tour du Mont Blanc** gira intorno alla montagna più alta delle Alpi attraversando tre paesi in una decina di giorni, con una notte in rifugio ogni sera, ed è forse il trekking a tappe più bello d\'Europa. Il **GR20** in Corsica è considerato il percorso segnalato più duro del continente, e per un certo tipo di persone questo basta come motivo.',
    cosaVedere: [
      'Il **Tour du Mont Blanc**: circa centosettanta chilometri intorno al massiccio, tra Francia, Italia e Svizzera, con circa diecimila metri di dislivello complessivo',
      'Il massiccio del **Monte Bianco** da Chamonix: il **Lac Blanc**, il **Grand Balcon** e l\'**Aiguille du Midi** a 3.842 metri, con la funivia che sale di quasi tremila metri in venti minuti',
      'La **Mer de Glace**, il ghiacciaio più grande di Francia, che si raggiunge con il trenino a cremagliera del Montenvers: **lungo la scala che scende alla grotta di ghiaccio sono segnati gli anni e il livello del ghiacciaio in quegli anni**, la testimonianza più diretta del ritiro glaciale che si possa vedere in Europa',
      'Il **Parco Nazionale della Vanoise**, il primo parco nazionale francese, istituito nel 1963, dove sul versante alpino occidentale lo stambecco è stato salvato dall\'estinzione',
      'Il **Parco Nazionale degli Écrins**, alta montagna severa, con la **Barre des Écrins**, il quattromila più meridionale delle Alpi',
      'I **Pirenei**: il **Cirque de Gavarnie**, patrimonio UNESCO, un anfiteatro glaciale con pareti di centinaia di metri e una delle cascate più alte d\'Europa, e la **Brèche de Roland**',
      'Il **GR20** in Corsica, circa centottanta chilometri da nord a sud lungo la dorsale montuosa dell\'isola',
    ],
    cosaFare: [
      'Il **Tour du Mont Blanc** completo o in versione ridotta (c\'è una scheda esperienza dedicata)',
      'Il **GR20**, per chi ha esperienza vera (c\'è una scheda esperienza dedicata)',
      'Le escursioni in giornata da Chamonix, che danno il novanta per cento del panorama con il dieci per cento della fatica',
      'Salire all\'**Aiguille du Midi** e affacciarsi dalla terrazza sospesa',
      'Una traversata breve in **Vanoise** o negli **Écrins**, meno noti e molto meno affollati',
    ],
    doveDormire:
      '**In rifugio**: è il senso di questi percorsi. Le regole sono quasi ovunque le stesse: **mezza pensione**, cena a orario fisso, camerate, **sacco lenzuolo obbligatorio**, silenzio presto e spesso **solo contanti**. **I rifugi del Tour du Mont Blanc per l\'estate si prenotano da gennaio-febbraio**, e questo vincolo decide tutto l\'itinerario: il percorso si costruisce sulle disponibilità, non il contrario.',
    doveMangiare:
      'In rifugio la cucina è ripetitiva e sostanziosa (zuppe, polenta, formaggi, torte), e dopo tre giorni la si ama. In valle c\'è la cucina savoiarda: **raclette**, **fondue**, **tartiflette**, **Beaufort** e **Reblochon**, e i vini bianchi di Savoia. In Corsica è tutta un\'altra cosa: **charcuterie** di maiale allevato allo stato brado, **brocciu** (un formaggio fresco di siero), **castagne** in ogni forma.',
    comeArrivare:
      'Per il Monte Bianco: treno o bus fino a **Chamonix**, oppure Ginevra e navetta. Per la Vanoise e gli Écrins: le stazioni di fondovalle della Savoia e del Delfinato. Per i Pirenei: Lourdes, Pau, Tarbes. Per il GR20: aereo o traghetto per la Corsica, poi treno o bus fino a Calenzana o Conca.',
    comeSpostarsi:
      'Nei trekking a tappe ci si sposta a piedi: il problema, semmai, è tornare al punto di partenza, e per il Tour du Mont Blanc ci sono navette e trasferimenti bagagli su tutto il percorso. Nella valle di Chamonix i mezzi pubblici sono ottimi e **di solito sono inclusi nella tessera data dalle strutture dove si dorme**: conviene chiedere al momento della prenotazione.',
    periodoMigliore:
      '**da metà giugno a metà settembre**, la finestra in cui i rifugi sono aperti e i colli alti sono liberi dalla neve. **Luglio e agosto sono i mesi più affollati**, e sul Tour du Mont Blanc la folla si sente. **Il mese migliore è settembre**: aria limpida, meno gente, rifugi ancora aperti nella prima metà del mese. A giugno i nevai rimasti sui colli alti sono un problema serio. **Il GR20 si percorre indicativamente da giugno a settembre**, con i mesi centrali molto caldi nei tratti bassi.',
    costi:
      'La voce principale è la mezza pensione in rifugio, che in Francia sta nella fascia alta delle Alpi. Gli impianti di risalita (Aiguille du Midi, Montenvers) sono cari e vanno messi in conto a parte. Il soccorso pubblico è in linea di principio gratuito, ma **un\'assicurazione che copra rimpatrio e spese mediche resta sensata**.',
    erroriDaEvitare: [
      '**Prenotare a maggio i rifugi del Tour du Mont Blanc per agosto.** Finiscono da gennaio-febbraio, ed è il vincolo su cui si costruisce tutto il viaggio',
      'Sottovalutare i dislivelli: sul TMB le tappe hanno spesso otto-novecento metri di salita e altrettanti di discesa',
      'Partire tardi: **in quota d\'estate i temporali del pomeriggio sono regolari e violenti**, e la regola è arrivare al rifugio prima del pomeriggio',
      'Salire senza contanti: molti rifugi non hanno linea',
      'Affrontare il **GR20** come un\'escursione qualunque: ha tratti attrezzati, passaggi in cui servono le mani, roccia e dislivelli enormi, e ogni anno molti si ritirano dopo tre tappe',
      'Dimenticare il **sacco lenzuolo**, obbligatorio in tutti i rifugi',
      'Fidarsi del meteo del mattino: in alta montagna cambia in due ore',
    ],
    confronti: [
      {
        titolo: 'Quale trekking di montagna scegliere',
        introduzione:
          'Sono tutti percorsi a tappe con rifugi, e più che il paesaggio cambiano la difficoltà tecnica, la folla e la possibilità di ritirarsi a metà. Sceglierne uno sbagliato per la propria preparazione è il modo più sicuro di rovinarsi la vacanza.',
        opzioni: [
          {
            nome: 'Tour du Mont Blanc',
            sintesi: 'Il giro completo del massiccio, circa centosettanta chilometri in dieci giorni, attraverso Francia, Italia e Svizzera.',
            costo: 'medio-alto: mezza pensione in rifugio ogni notte',
            durata: '7-11 giorni; esistono versioni di 3-5 tappe',
            pro: [
              'Un paesaggio di primo livello dall\'inizio alla fine, con il massiccio sempre in vista da angolazioni diverse',
              '**Non è tecnico**: serve allenamento, non alpinismo. Non ci sono tratti attrezzati obbligatori',
              'Attraversa tre paesi e tre culture alpine, e la cucina cambia a ogni colle',
              'Logistica eccellente: trasferimento bagagli, navette, tappe che si possono saltare',
              'Si può fare in versione ridotta, la scelta giusta per chi non ha mai fatto un trekking a tappe',
            ],
            contro: [
              '**In luglio e agosto è molto affollato**: è il trekking più famoso d\'Europa, e si vede',
              'I rifugi si prenotano con mesi di anticipo e fissano l\'itinerario senza margini',
              'Le tappe sono lunghe e i dislivelli seri, anche se il terreno è facile',
            ],
            perChi: 'Chi è allenato, chi vuole un grande trekking senza difficoltà tecniche, chi lo fa per la prima volta.',
          },
          {
            nome: 'GR20, Corsica',
            sintesi: 'Circa centottanta chilometri lungo la dorsale montuosa dell\'isola, in quindici tappe: è considerato il percorso segnalato più duro d\'Europa.',
            costo: 'medio-basso: i rifugi sono spartani e si può portare la tenda',
            durata: '15 tappe, circa 12-16 giorni; si può fare anche solo la metà nord o la metà sud',
            pro: [
              'Un paesaggio unico nel Mediterraneo: creste di granito, laghi glaciali, boschi di pino laricio',
              'La **metà nord** è la più spettacolare e la più dura; la **metà sud** è più accessibile',
              'Fuori dall\'alta stagione, molto meno affollato del TMB',
              'Un obiettivo vero: chi lo finisce se lo ricorda',
            ],
            contro: [
              '**È duro sul serio**: passaggi in cui servono le mani, tratti attrezzati con catene, roccia instabile, dislivelli enormi',
              'I rifugi sono spartani e c\'è poco da mangiare: molti si portano tenda e cibo',
              'D\'estate nei tratti bassi fa molto caldo, e l\'acqua non c\'è sempre',
              '**Ritirarsi a metà è complicato**: le vie di fuga sono poche e lunghe',
            ],
            perChi: 'Chi ha già fatto trekking impegnativi, ha il piede fermo sulla roccia e sa cosa vuol dire camminare otto ore su terreno tecnico. Non è un trekking da cui cominciare.',
          },
          {
            nome: 'Vanoise',
            sintesi: 'Il primo parco nazionale francese, con una rete fitta di rifugi e anelli di tre-sei giorni tra ghiacciai, laghi e alpeggi.',
            costo: 'medio',
            durata: '3-7 giorni',
            pro: [
              'Molto meno affollato del Monte Bianco',
              'La fauna è straordinaria: **è il parco dove lo stambecco è stato salvato dall\'estinzione**, e oggi se ne vedono facilmente',
              'Anelli brevi, senza logistica per il rientro',
              'Rifugi ben distribuiti e più facili da prenotare',
            ],
            contro: [
              'Meno spettacolare del massiccio del Monte Bianco, che resta un altro ordine di grandezza',
              'Confina con grandi stazioni sciistiche, e ai margini si vedono gli impianti',
            ],
            perChi: 'Chi vuole un vero trekking alpino senza folla, chi ha meno di una settimana, chi ci va per la fauna.',
          },
          {
            nome: 'Écrins',
            sintesi: 'Alta montagna severa nel Delfinato, con il quattromila più meridionale delle Alpi e valli lunghe e selvagge.',
            costo: 'medio',
            durata: '4-7 giorni',
            pro: [
              'Il più alpinistico dei parchi francesi, dal carattere severo e poco addomesticato',
              'Pochissima gente rispetto al Monte Bianco',
              'Il **Glacier Blanc** è un\'escursione in giornata che porta a contatto con un ghiacciaio vero',
              'Prezzi più bassi in valle',
            ],
            contro: [
              'Più impegnativo del TMB: i colli sono alti e le tappe lunghe',
              'Meno servizi e meno logistica per bagagli e trasferimenti',
              'Il tempo è più variabile: è una zona di confine tra influssi atlantici e mediterranei',
            ],
            perChi: 'Chi ha già camminato in quota e vuole montagna seria senza folla.',
          },
          {
            nome: 'Pirenei: GR10 e Cirque de Gavarnie',
            sintesi: 'Una catena del tutto diversa dalle Alpi, più verde, più selvaggia e molto meno frequentata, attraversata da un sentiero che va da un oceano all\'altro.',
            costo: 'basso',
            durata: 'da 3 giorni a un mese e mezzo per il GR10 completo',
            pro: [
              'Il **Cirque de Gavarnie** è uno dei paesaggi glaciali più impressionanti d\'Europa, e ci si arriva con una camminata facile',
              'Molto meno frequentati e molto più economici delle Alpi',
              'Fauna eccezionale, con i grifoni e i camosci dei Pirenei',
              'La cultura locale, basca a ovest e catalana a est, è forte e riconoscibile',
            ],
            contro: [
              'Più lontani da tutto: non si uniscono a nessun altro itinerario di questa sezione',
              'Il meteo atlantico è molto variabile, con nebbie frequenti',
              'La rete dei rifugi è meno fitta che sulle Alpi',
            ],
            perChi: 'Chi cerca montagna senza folla, chi ha già fatto le Alpi, chi ha un budget.',
          },
        ],
        raccomandazione:
          'Al primo trekking a tappe: il **Tour du Mont Blanc in versione ridotta**, tre o quattro tappe, per capire cosa vuol dire camminare più giorni di fila dormendo in rifugio. Con esperienza e allenamento: **il TMB completo**, prenotando i rifugi a gennaio. Per chi vuole montagna vera senza folla: **Vanoise o Écrins**. Il **GR20** solo sapendo bene a cosa si va incontro.',
      },
    ],
    miaEsperienza:
      'In montagna, in Francia, c\'è una cosa che si nota subito e cambia il modo di stare in quota: **il soccorso pubblico è gratuito**. Sembra una nota amministrativa, ma ha un effetto concreto: nessuno esita a chiamare, e il rapporto con il rischio è più sereno che nei paesi dove un intervento in elicottero vuol dire una fattura da migliaia di euro. Poi c\'è la rete dei GR, che esiste dagli anni Quaranta ed è segnata con due bandierine, una bianca e una rossa, dipinte su rocce, alberi e muri per migliaia di chilometri: puoi partire da un paese qualunque e camminare per un mese seguendo dei tratti di vernice. Del Tour du Mont Blanc mi ha spiazzato quanto è internazionale. In rifugio dormi con persone di dieci nazionalità che fanno lo stesso giro in senso opposto, e le ritrovi tre giorni dopo su un colle. E poi quanto cambia il paesaggio girando intorno a una sola montagna. Il versante francese è verticale e ghiacciato; quello italiano si apre su prati larghissimi, con il massiccio come una parete continua; quello svizzero è ordinato e verde. Tre modi diversi di stare sotto la stessa cima. La cosa più dura da guardare è la Mer de Glace. Scendi la scala verso la grotta di ghiaccio e ai lati ci sono i cartelli con gli anni e il livello del ghiacciaio in quegli anni: 1990 qui, 2000 più sotto, 2010 ancora più sotto. E continui a scendere.',
    esperienzeSlugs: ['tour-du-mont-blanc', 'gr20-corsica', 'mer-de-glace'],
    tripSlugs: ['tour-du-mont-blanc'],
    imageAlt: 'Il Mont Pourri innevato e l\'Aiguille Rouge sopra i boschi e i pascoli di Sainte-Foy-Tarentaise, nelle Alpi francesi',
    immagine: '/images/francia/montagne-francesi.jpg',
  },
]
