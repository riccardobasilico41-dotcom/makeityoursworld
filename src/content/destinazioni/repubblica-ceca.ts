import type { Destinazione } from '@/lib/types'

// Prima uscita ceca dell'archivio, collegata al viaggio "Praga in un weekend
// lungo" (src/content/viaggi/54-praga-weekend.md, dati in
// src/content/viaggi-dati/praga-weekend.ts). Praga non è stata visitata di
// persona: visitataPersonalmente resta false e il campo miaEsperienza,
// facoltativo nel tipo, è assente di proposito — niente ricordo inventato,
// solo fatti verificati con ricerca (stesso trattamento usato in
// src/content/destinazioni/polonia.ts per Cracovia). Nessun nome di hotel,
// ristorante o operatore è stato inventato. Prezzi e orari cambiano spesso e
// vanno riverificati sui canali ufficiali prima di partire.

export const destinazioniRepubblicaCeca: Destinazione[] = [
  {
    slug: 'praga',
    paeseSlug: 'repubblica-ceca',
    ordine: 1,
    nome: 'Praga',
    tipologia: ['città', 'storia', 'architettura'],
    giorniConsigliati: '3-4 giorni per il centro storico, il Castello e Vyšehrad',
    visitataPersonalmente: false,
    introduzione:
      'La "città dalle cento torri", capitale ceca sulle due rive della Moldava, con uno dei centri storici medievali e barocchi meglio conservati d\'Europa. È uscita quasi indenne dai bombardamenti della Seconda guerra mondiale, e oggi è un insieme compatto di cinque nuclei storici, tutti percorribili a piedi in pochi giorni: Staré Město (Città Vecchia), Malá Strana (Città Piccola), Hradčany (il colle del Castello), Josefov (il quartiere ebraico) e la Nové Město (Città Nuova) ottocentesca.',
    percheAndarci:
      'In un\'area compatta concentra secoli di architettura gotica, rinascimentale e barocca quasi intatta, un castello che è tra i complessi castellani più grandi al mondo e un quartiere ebraico con una delle collezioni di sinagoghe storiche più importanti d\'Europa. E i prezzi, birra compresa, restano contenuti rispetto all\'Europa occidentale.',
    cosaVedere: [
      'La Piazza della Città Vecchia (Staroměstské náměstí), con la Torre dell\'Orologio Astronomico (Orloj) del municipio (del 1410, il terzo orologio astronomico più antico al mondo ancora funzionante), la Chiesa di Tyn gotica e la Chiesa di San Nicola barocca',
      'Il Ponte Carlo (Karlův most), gotico, lungo 516 metri, costruito a partire dal 1357 su commissione di Carlo IV: sedici arcate e oltre settanta statue barocche (tutte copie: gli originali sono conservati al riparo), tra cui la più antica e venerata, quella di San Giovanni Nepomuceno del 1683',
      'Il colle del Castello di Praga (Pražský hrad), tra i complessi castellani chiusi più grandi al mondo, con la Cattedrale di San Vito (Katedrála svatého Víta) gotica al suo interno, il Vecchio Palazzo Reale, il Vicolo d\'Oro (Zlatá ulička) e la Basilica di San Giorgio',
      'Malá Strana, il quartiere barocco ai piedi del Castello, con la Chiesa di San Nicola (da non confondere con quella omonima in Piazza della Città Vecchia), il Muro di John Lennon e l\'Isola di Kampa sulla Moldava',
      'Josefov, l\'ex quartiere ebraico nel cuore di Staré Město, con sei siti storici tra sinagoghe e l\'Antico Cimitero Ebraico, gestiti dal Museo Ebraico di Praga',
      'Vyšehrad, la fortezza collinare a sud del centro, meno battuta del Castello ma con oltre mille anni di storia (secondo la leggenda fondativa di Praga, qui la principessa Libuše ne profetizzò la nascita) e alcuni dei panorami più ampi sulla città e sulla Moldava',
    ],
    cosaFare: [
      'Fermarsi in Piazza della Città Vecchia allo scoccare dell\'ora, tra le 9 e le 23, per la processione degli Apostoli meccanici dell\'Orloj e lo scheletro della Morte che tira la corda',
      'Attraversare il Ponte Carlo presto, prima delle 8, per evitare il grosso della folla che lo riempie di giorno',
      'Salire sulla Torre della Città Piccola (Malostranská mostecká věž), all\'estremità del Ponte Carlo lato Malá Strana, per una vista dall\'alto meno affollata di quella dalla torre della Città Vecchia',
      'Camminare lungo le mura di Vyšehrad al tramonto, per un panorama sulla città molto più tranquillo di quello dal Castello',
      'Una serata in un hospoda (pub) tradizionale fuori dal centro più turistico, per bere birra ceca ai prezzi veri della città, non a quelli gonfiati intorno alla piazza principale',
    ],
    doveDormire:
      'Staré Město (Città Vecchia) è la scelta più comoda e concentra quasi tutta l\'offerta turistica, ma è anche la zona più cara e più affollata la sera. Malá Strana, ai piedi del Castello, è più tranquilla e centrale quanto lei. Vinohrady e Žižkov, poco fuori dal nucleo storico ma ben collegati in tram, sono le alternative più vissute e più economiche.',
    doveMangiare:
      'Il piatto simbolo è il svíčková (arrosto di manzo in salsa di panna e verdure, servito con knedlíky, gli gnocchi di pane a fette), insieme al guláš e ai trdelník, il dolce da strada arrotolato e cotto sulla brace, diventato negli ultimi anni un simbolo (più turistico che tradizionale). Gli hospoda, i pub tradizionali, restano il modo più vero ed economico di mangiare piatti cechi con una birra alla spina. Da bere c\'è la birra: il paese ha il consumo pro capite più alto al mondo, e fuori dalle zone turistiche la birra costa spesso meno dell\'acqua in bottiglia.',
    comeArrivare:
      'Aeroporto Václav Havel (PRG), a circa 17 km dal centro: non c\'è un collegamento diretto in metro, ma un autobus (linea 119 o 191) porta in 15-20 minuti alla stazione della metro più vicina (Nádraží Veleslavín, linea A), e da lì il centro è a pochi minuti. Dall\'Italia non c\'è un treno diretto comodo: di solito si arriva in aereo. Da Vienna, treno diretto in circa 4 ore.',
    comeSpostarsi: 'Il centro storico tutto a piedi. Per il resto della città c\'è la rete di metro, tram e bus PID, con biglietti a tempo economici da convalidare a bordo. L\'auto non serve.',
    periodoMigliore: 'aprile-maggio e settembre-ottobre per il clima mite e meno folla; giugno-agosto è alta stagione, affollata e più calda; novembre-marzo fa freddo ma si gira bene, con i mercatini di Natale a dicembre',
    costi: 'città ancora economica fuori dal centro più turistico: pasto in un hospoda di quartiere pochi euro, cena nel centro storico 15-20€ a testa, mezzi pubblici pochi CZK a corsa',
    erroriDaEvitare: [
      'Sedersi in un ristorante intorno alla Piazza della Città Vecchia o in via Karlova senza controllare prima il menù e i prezzi: è la zona con più segnalazioni di conti gonfiati, "welcome drink" non richiesti e voci aggiunte al conto',
      'Prendere il tram 22 verso il Castello con oggetti di valore in tasche o zaini aperti: è la linea più segnalata per i borseggi, soprattutto in alta stagione',
      'Dare retta a chi per strada si presenta come agente di polizia e chiede i documenti o di pagare subito una multa: un vero agente non lo fa, e nel dubbio si chiede di andare insieme a una stazione di polizia',
      'Cambiare valuta o pagare in euro contando su un cambio "automatico" vantaggioso: la Repubblica Ceca non è nell\'eurozona, e i prezzi "convertiti" esposti nei locali turistici sono quasi sempre penalizzanti',
      'Sottovalutare la coda per l\'Orologio Astronomico o per la Cattedrale di San Vito in alta stagione: conviene arrivare presto o verso sera',
    ],
    esperienzeSlugs: ['praga-castello-biglietto', 'praga-josefov-jewish-town', 'praga-degustazione-birra'],
    tripSlugs: ['praga-weekend'],
    imageAlt: 'Il Castello di Praga e la Cattedrale di San Vito illuminati all\'ora blu, con il Ponte Carlo e la Moldava in primo piano',
    immagine: '/images/repubblica-ceca/praga.jpg',
  },
]
