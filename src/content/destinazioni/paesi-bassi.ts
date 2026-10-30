import type { Destinazione } from '@/lib/types'

// Prima uscita olandese dell'archivio, collegata al viaggio "Amsterdam in un
// weekend lungo" (src/content/viaggi/58-amsterdam-weekend.md, dati in
// src/content/viaggi-dati/amsterdam-weekend.ts). Un'unica destinazione:
// Amsterdam stessa. Non è stata visitata di persona: visitataPersonalmente
// resta false e il campo miaEsperienza, facoltativo nel tipo, è assente di
// proposito — niente ricordo inventato, solo fatti verificati con ricerca
// (stesso trattamento usato in src/content/paesi/polonia.ts). Nessun nome di
// hotel, ristorante o operatore è stato inventato. Prezzi e orari (soprattutto
// quelli della Casa di Anna Frank) cambiano spesso e vanno riverificati sui
// canali ufficiali prima di partire.

export const destinazioniPaesiBassi: Destinazione[] = [
  {
    slug: 'amsterdam',
    paeseSlug: 'paesi-bassi',
    ordine: 1,
    nome: 'Amsterdam',
    tipologia: ['città', 'arte', 'storia'],
    giorniConsigliati: '3-4 giorni per il centro storico, l\'anello dei canali e i musei principali',
    visitataPersonalmente: false,
    introduzione:
      'La capitale dei Paesi Bassi, costruita su una rete di canali concentrici scavati a partire dal Seicento, nell\'età dell\'oro olandese. Il Grachtengordel (l\'anello dei canali), con le tipiche case a schiera strette e alte affacciate sull\'acqua, è Patrimonio UNESCO dal 2010. È una città compatta, quasi piatta, da girare a piedi o, più spesso, in bicicletta.',
    percheAndarci:
      'In un\'area che in bici si attraversa in mezz\'ora ci sono alcuni dei musei più importanti d\'Europa (Rijksmuseum, Van Gogh Museum), un luogo della memoria da visitare preparati come la Casa di Anna Frank e un intero quartiere di canali patrimonio dell\'umanità. E c\'è una cultura urbana che altrove non si trova così: la bicicletta come mezzo di trasporto principale, non come attività per turisti.',
    cosaVedere: [
      'Il Grachtengordel, l\'anello dei canali seicenteschi (Herengracht, Keizersgracht, Prinsengracht) patrimonio UNESCO, con le case a schiera e i tipici gable, i frontoni decorati che un tempo indicavano il mestiere o la ricchezza del proprietario',
      'La Casa di Anna Frank (Anne Frank Huis), sul Prinsengracht, l\'edificio dove la famiglia Frank si nascose dal 1942 al 1944: i biglietti si esauriscono con settimane di anticipo e vanno prenotati online sul sito ufficiale',
      'Il Rijksmuseum, il museo nazionale con la più grande collezione di arte e storia olandese al mondo, dalla Ronda di notte di Rembrandt in poi',
      'Il Van Gogh Museum, la più grande collezione al mondo di opere di Vincent van Gogh, ordinata in gran parte cronologicamente',
      'Jordaan, l\'ex quartiere operaio a ovest del centro, oggi tra le zone più vissute della città, con stradine strette, hofjes (piccoli cortili interni, un tempo case di carità) e un\'atmosfera più residenziale del centro storico',
      'Il Quartiere a Luci Rosse (De Wallen), nel cuore medievale della città: un\'area a luci rosse regolamentata da secoli, da attraversare senza fotografare',
      'Dam Square, la piazza centrale con il Palazzo Reale e il Monumento Nazionale',
    ],
    cosaFare: [
      'Noleggiare una bicicletta e spostarsi come gli amsterdammer: è il modo più naturale di vivere la città, ma bisogna imparare in fretta le regole base (vedi la scheda esperienza dedicata)',
      'Una crociera sui canali, di giorno o al tramonto, per vedere l\'anello del Grachtengordel dall\'acqua invece che dai ponti',
      'Camminare per Jordaan senza una meta precisa, tra hofjes e piccoli negozi',
      'Attraversare il Quartiere a Luci Rosse con lo stesso passo di qualunque altra zona della città, senza fermarsi a fotografare le vetrine né le persone che ci lavorano: in molte aree è vietato per legge, e in ogni caso è una questione di rispetto elementare',
      'Se il tempo lo consente, visitare uno dei musei minori: il Museo Van Loon o il Museo Willet-Holthuysen, due case-museo di canale che mostrano come si viveva in queste case',
    ],
    doveDormire:
      'Il Grachtengordel (l\'anello dei canali) è la zona più centrale e caratteristica, comoda a piedi per quasi tutto; Jordaan, appena a ovest, è l\'alternativa più residenziale e spesso un po\' più economica, a dieci minuti a piedi dal cuore del centro storico.',
    doveMangiare:
      'Le bitterballen (polpette fritte ripiene, tipico snack da bar) con una birra olandese; l\'haring (aringa cruda marinata, servita a pezzi con cipolla tritata) dai chioschi di strada; lo stroopwafel, la cialda ripiena di sciroppo di caramello, meglio appena fatto e ancora caldo dai banchetti del mercato; la rijsttafel, il «tavolo di riso» con decine di piccoli piatti in stile indonesiano, eredità del passato coloniale olandese e oggi parte della cucina della città.',
    comeArrivare:
      'Aeroporto di Amsterdam Schiphol (AMS), tra i più trafficati d\'Europa, a circa 15 km dal centro: treno diretto in 15-20 minuti fino alla Stazione Centrale, con corse molto frequenti. Dall\'Italia non c\'è un collegamento ferroviario diretto comodo: si arriva quasi sempre in aereo.',
    comeSpostarsi: 'In centro bicicletta o piedi; per il resto della città tram, bus e metro GVB, che si pagano anche con carta contactless direttamente sui mezzi. Auto sconsigliata: in centro il traffico è scoraggiato e il parcheggio caro e scarso.',
    periodoMigliore: 'aprile-maggio e settembre-ottobre per il clima mite e meno folla; giugno-agosto è alta stagione, calda e molto affollata; novembre-marzo è freddo e spesso piovoso ma gestibile, con i mercatini di Natale a dicembre',
    costi: 'città cara per gli standard europei: musei principali 20-25€ l\'uno, cena normale 20-25€ a testa, noleggio bici 10-15€ al giorno',
    erroriDaEvitare: [
      'Arrivare senza aver prenotato online la Casa di Anna Frank: i biglietti si esauriscono con settimane di anticipo e non si comprano più alla cassa',
      'Camminare o fermarsi distratti sulle piste ciclabili (l\'asfalto rosso, distinto dal marciapiede): in tutta la città è la causa più comune di incidenti e discussioni con i turisti',
      'Dare per scontato di poter pagare in contanti ovunque: molti locali accettano solo carta o contactless',
      'Fotografare le vetrine o le persone che lavorano nel Quartiere a Luci Rosse: è vietato in gran parte dell\'area e culturalmente molto mal visto',
      'Sottovalutare le code al Rijksmuseum e al Van Gogh Museum in alta stagione: conviene prenotare online in anticipo i biglietti con fascia oraria',
    ],
    esperienzeSlugs: ['amsterdam-in-bicicletta', 'crociera-sui-canali-amsterdam', 'casa-di-anna-frank'],
    tripSlugs: ['amsterdam-weekend'],
    imageAlt: 'Un vecchio ponte ad arco in mattoni sul canale Reguliersgracht ad Amsterdam, con le case a schiera e gli alberi spogli lungo le rive',
    immagine: '/images/paesi-bassi/amsterdam.jpg',
  },
]
