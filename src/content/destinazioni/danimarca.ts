import type { Destinazione } from '@/lib/types'

// Prima uscita danese dell'archivio, collegata all'itinerario "Capitali
// nordiche" (src/content/viaggi/60-capitali-nordiche.md, dati in
// src/content/viaggi-dati/capitali-nordiche.ts), viaggio fatto da Rick: visitataPersonalmente
// è true. Il campo miaEsperienza resta assente finché non arriva un ricordo dell'autore. Nessun nome di hotel o ristorante specifico è stato
// inventato: solo zone e categorie di prezzo verificabili. Prezzi e orari
// (Tivoli è aperto solo a stagioni alterne, non tutto l'anno) vanno
// riverificati prima di partire.

export const destinazioniDanimarca: Destinazione[] = [
  {
    slug: 'copenaghen',
    paeseSlug: 'danimarca',
    ordine: 1,
    nome: 'Copenaghen',
    tipologia: ['città', 'design', 'gastronomia'],
    giorniConsigliati: '3 giorni, la prima tappa dell\'itinerario "Capitali nordiche"',
    visitataPersonalmente: true,
    introduzione:
      'La capitale danese, spesso citata come la città più a misura di bicicletta del mondo: oltre metà degli abitanti si sposta ogni giorno in bici su oltre 450 km di piste. In un centro raccolto ci sono i canali colorati di Nyhavn, i giardini storici di Tivoli, il lungomare della Sirenetta e Christiania, la comunità autogestita che dal 1971 vive con regole proprie nel cuore della città.',
    percheAndarci:
      'In un\'area che si gira a piedi o in bici ci sono alcune delle immagini più riconoscibili del nord Europa: le case a graticcio di Nyhavn, i tetti di rame verde del centro storico, il design scandinavo dentro e fuori i musei. Ed è la porta d\'ingresso più comoda per un giro delle capitali nordiche: da qui Stoccolma è a poche ore di treno o di volo.',
    cosaVedere: [
      'Nyhavn, il canale del XVII secolo con le facciate colorate delle case dei mercanti, oggi una fila continua di caffè e ristoranti sul molo: il punto più fotografato della città, e a ragione',
      'Tivoli Gardens, aperto nel 1843, uno dei parchi divertimento più antichi al mondo ancora in funzione: giardini curati, montagne russe storiche in legno e luci serali che valgono la visita anche senza salire su nessuna giostra. È aperto solo in alcune stagioni (primavera-estate, Halloween, mercatini di Natale) e chiude per alcuni mesi d\'inverno',
      'La Sirenetta (Den Lille Havfrue), la scultura in bronzo del 1913 ispirata alla fiaba di Hans Christian Andersen, sul lungomare di Langelinie. È piccola e spesso circondata da folla e gruppi, uno dei casi più citati di attrazione che vale più per la fama che per quello che si vede; la passeggiata sul lungomare intorno merita comunque',
      'Christiania, la «città libera» nata nel 1971 in un\'ex area militare a Christianshavn: case autocostruite, murales e un\'atmosfera diversa da tutto il resto della città. La storica Pusher Street, dove per decenni si è venduto hashish alla luce del sole, è stata chiusa dalle autorità danesi nel 2024 dopo un episodio di violenza; la vendita di stupefacenti è comunque illegale in tutta la Danimarca',
      'Il centro storico intorno a Strøget, una delle vie pedonali commerciali più lunghe d\'Europa, che collega Rådhuspladsen (la piazza del municipio) alla vecchia piazza del mercato di Kongens Nytorv',
      'Il quartiere di Christianshavn, con i canali minori, le case galleggianti e la chiesa di Vor Frelsers Kirke, famosa per la scala esterna a spirale che sale intorno alla guglia dorata',
    ],
    cosaFare: [
      'Un giro in bici a noleggio lungo il lungomare e i canali, come si muovono ogni giorno gli abitanti (vedi la scheda esperienza dedicata)',
      'Un giro in barca sui canali, da Nyhavn o da Christianshavn, per vedere il centro storico dall\'acqua (vedi la scheda esperienza dedicata)',
      'Una serata a Tivoli, tra giostre storiche e giardini illuminati, quando è in stagione',
      'Una visita a Christiania tenendo a mente le regole della comunità: niente foto sull\'ex Pusher Street e rispetto per i residenti (vedi la scheda esperienza dedicata)',
      'Un tour o una sosta per lo smørrebrød, il panino aperto danese, a Torvehallerne (il mercato coperto) o in una delle rosticcerie storiche del centro (vedi la scheda esperienza dedicata)',
    ],
    doveDormire:
      'Il centro storico (Indre By) è il più comodo per chi vuole tutto a piedi, ma è anche la zona più cara. Vesterbro, ex quartiere a luci rosse e oggi fra i più vivaci per bar e ristoranti, è un buon compromesso fra prezzo e posizione, a pochi minuti a piedi o in metro dal centro. Nørrebro, multiculturale e meno turistico, è la scelta più economica, con una vita di quartiere vera, ma è un po\' più lontano dalle attrazioni principali.',
    doveMangiare:
      'Torvehallerne, il mercato coperto vicino a Nørreport, per smørrebrød, pesce e prodotti locali in versione street food di qualità. Nyhavn è scenografico, ma i prezzi sono quelli della vista: meglio scegliere con attenzione o fermarsi per un caffè guardando il canale. Per qualcosa di più informale e internazionale c\'è Reffen, l\'area street food sul lungomare (aperta da primavera ad autunno).',
    comeArrivare:
      'Aeroporto di Copenaghen-Kastrup (CPH), fra gli scali meglio collegati del nord Europa, a circa 20 minuti dal centro in metro. Ci sono voli diretti dalle principali città italiane. In treno dall\'Italia non c\'è un collegamento diretto comodo: chi preferisce non volare passa dalla Germania con più cambi.',
    comeSpostarsi:
      'La bici a noleggio, la scelta più in linea con la città, poi metro, S-tog (treni suburbani) e bus con biglietto integrato a zone. Il centro storico si gira bene anche a piedi.',
    periodoMigliore:
      'maggio-settembre per il clima e le giornate lunghe; giugno-agosto è alta stagione, con Tivoli negli orari estivi. Dicembre per i mercatini di Natale, con un\'atmosfera molto diversa e altrettanto bella.',
    costi:
      'Tivoli: ingresso giardini da circa 20€, biglietto combinato giardini più giostre illimitate fino a circa 66€. Giro in barca sui canali: circa 15-20€ a persona per un\'ora. Pasto economico 7-20€, pranzo in caffè 17-27€, cena di fascia media 40-75€ per due.',
    erroriDaEvitare: [
      'Camminare o fermarsi su una pista ciclabile senza guardare: sono trafficate quanto le strade e i ciclisti non rallentano per i turisti distratti',
      'Fotografare a Christiania nelle zone segnalate (l\'ex Pusher Street in particolare) o i residenti senza permesso: le regole sono affisse e vengono fatte rispettare',
      'Dare per scontato che Tivoli sia aperto tutto l\'anno: fuori dal periodo di Natale chiude per alcuni mesi d\'inverno, quindi conviene controllare il calendario prima di programmare la serata',
      'Sottovalutare la delusione possibile della Sirenetta: è una statua piccola, spesso circondata da folla, da vedere durante una passeggiata sul lungomare più che come meta a sé',
      'Dare per scontato che si paghi in euro: la Danimarca non è nell\'eurozona, si paga in corone danesi (DKK)',
    ],
    esperienzeSlugs: ['nyhavn-giro-in-barca', 'copenaghen-tour-in-bicicletta', 'christiania-visita', 'smorrebrod-tour-torvehallerne'],
    tripSlugs: ['capitali-nordiche'],
    imageAlt: 'Il centro di Copenaghen illuminato di notte visto dall\'alto, con la piazza del Municipio e le strade piene di luci',
    immagine: '/images/danimarca/copenaghen.jpg',
  },
]
