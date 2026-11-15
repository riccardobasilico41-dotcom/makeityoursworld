import type { Destinazione } from '@/lib/types'

// Nessun nome di lodge, resort o operatore è stato inventato. Quote dei
// permessi (Kinabalu, Sipadan) e orari delle poppate ai centri di
// riabilitazione cambiano: vanno riverificati sui canali ufficiali.

export const destinazioniBorneo: Destinazione[] = [
  {
    slug: 'kota-kinabalu',
    paeseSlug: 'borneo',
    ordine: 1,
    nome: 'Kota Kinabalu e il Monte Kinabalu',
    tipologia: ['città', 'montagna', 'trekking'],
    giorniConsigliati: '1 giorno in città, più 2-3 per la salita al Kinabalu',
    visitataPersonalmente: true,
    introduzione:
      'La porta d\'ingresso del Sabah: una città portuale senza grandi pretese, con tramonti molto belli sul mare e cinque isole a poca distanza in barca. Alle spalle c\'è il Monte Kinabalu, 4.095 metri, la cima più alta del Borneo.',
    percheAndarci:
      'In Sabah tutto parte da qui. E il Kinabalu è una vetta oltre i 4.000 metri che si sale senza esperienza alpinistica, a patto di avere il permesso, che è a numero chiuso e va prenotato con largo anticipo.',
    cosaVedere: [
      'Il Monte Kinabalu, con i sentieri che partono dal Timpohon Gate e il rifugio di Laban Rata',
      'Il Kinabalu Park, patrimonio UNESCO, che si visita anche senza salire in vetta',
      'Le sorgenti termali di Poring e la canopy walkway del parco',
      'Il parco marino di Tunku Abdul Rahman, cinque isole a poca distanza in barca dalla città',
      'Il mercato del pesce e il Filipino Market sul lungomare, con i banchi della sera',
      'La moschea cittadina di Likas, che sembra galleggiare sull\'acqua',
    ],
    cosaFare: [
      'Salire il Kinabalu in due giorni con la notte a Laban Rata (c\'è la scheda esperienza dedicata)',
      'La via ferrata vicino alla vetta, per chi ha già il permesso di salita',
      'Una giornata di snorkeling alle isole del parco marino',
      'Il tramonto sul lungomare, che a Kota Kinabalu è un rito collettivo',
    ],
    doveDormire:
      'In città la zona più comoda è il lungomare. Per la salita al Kinabalu si dorme a Kundasang o dentro il parco, perché si parte all\'alba e da Kota Kinabalu c\'è un lungo tratto di strada: farla in giornata vuol dire alzarsi nel cuore della notte.',
    doveMangiare:
      'A Kota Kinabalu si mangia sul mare. Al Filipino Market si sceglie il pesce al banco e lo si fa grigliare al momento: è la cena più tipica della città, a prezzi bassi. Da provare l\'hinava, il pesce crudo marinato nel lime dei Kadazan-Dusun, e il tuaran mee, i noodles fatti a mano della zona. Nelle città del Sabah la cucina cinese è ottima e c\'è ovunque.',
    comeArrivare: "In aereo su Kota Kinabalu (BKI) da Kuala Lumpur, con molti voli al giorno e circa 2 ore e 30 di volo. All'arrivo si passa il controllo passaporti del Sabah, che ha un'immigrazione propria anche per chi arriva dalla penisola. L'aeroporto è a circa 8 km dal centro: Grab dalla zona di prelievo segnalata costa circa 15-25 RM (3-5 €) in 20-30 minuti; il taxi con coupon a prezzo fisso, comprato al banco degli arrivi, circa 30-45 RM; il bus urbano circa 5 RM, ma è lento e passa di rado.",
    comeSpostarsi:
      'In città a piedi e con Grab. Per il parco del Kinabalu e per Sandakan servono minibus interurbani o trasferimenti privati: le strade sono lente e sulla mappa le distanze ingannano.',
    periodoMigliore:
      'da marzo a settembre per la salita, quando in vetta piove meno. Con il maltempo la montagna chiude, e in passato è successo anche dopo dei terremoti: meglio fissare la data con un po\' di margine.',
    costi: "la salita al Kinabalu è cara e non c'è modo di risparmiare: permesso 400 RM e guida 350 RM ogni cinque adulti (circa 80 e 70 €), più notte a Laban Rata e trasferimenti, che si pagano a pacchetto. È una delle voci più alte di tutto il viaggio. Le isole del parco marino, invece, costano pochissimo: 25 RM d'ingresso più la barca (2026). In città il budget è di circa 30-45 € al giorno con guesthouse, mercati e Grab; medio 70-110 € con albergo sul lungomare e una giornata alle isole; alto oltre 180 € con resort a Tanjung Aru e ristoranti.",
    erroriDaEvitare: [
      'Pensare di prenotare la salita al Kinabalu sul posto: i permessi giornalieri sono pochi e finiscono con largo anticipo',
      'Sottovalutare la quota: si parte da meno di duemila metri e si arriva a 4.095 in poco più di un giorno, senza acclimatamento, e il mal di montagna colpisce anche chi è allenato',
      'Dormire a Kota Kinabalu la sera prima della salita',
      'Usare la città solo come scalo: il tramonto sul lungomare e le isole vicine valgono una giornata',
    ],
    miaEsperienza:
      'Kota Kinabalu in sé è una città più funzionale che bella, ricostruita dopo i bombardamenti della seconda guerra mondiale, e in mezza giornata la si è capita. Il motivo per venire sta alle spalle. Il Kinabalu si sale in due giorni. Il primo è una scalinata senza fine nella foresta pluviale, sei chilometri di gradini irregolari con l\'umidità addosso, fino al rifugio di Laban Rata a 3.270 metri, dove siamo arrivati nel primo pomeriggio. Il secondo comincia alle due di notte, al buio, sul granito nudo, tenendosi a una corda fissa. La quota si sente: si parte da meno di duemila metri e in poco più di un giorno si è sopra i quattromila, senza acclimatamento, e il mal di testa è la regola più che l\'eccezione. Poi il sole sorge sulla piattaforma di granito, e sotto c\'è tutto il Borneo, con le nuvole sotto i piedi. Il consiglio pratico che conta più di tutti: i permessi sono poco più di centosessanta al giorno e vanno prenotati mesi prima, non settimane.',
    luoghi: [
      {
        nome: "Monte Kinabalu",
        testo: "4.095 metri, la montagna più alta del Borneo. Si sale in due giorni: il primo fino al rifugio di Laban Rata, a 3.270 metri, il secondo con partenza nella notte per l'alba sul granito nudo della vetta.",
        come: "La salita è consentita solo con guida registrata (una ogni cinque adulti) e un permesso nominale, da prenotare con mesi di anticipo insieme al posto letto a Laban Rata, tramite Sabah Parks o operatori autorizzati. Si sale dal Timpohon Gate, a 1.866 metri: il sentiero di Mesilau è chiuso.",
        quando: "Nei mesi più asciutti; con il maltempo la montagna chiude. Prenotare con margine.",
        tempo: "2 giorni, 1 notte a Laban Rata",
        costo: "Permesso di salita 400 RM per gli stranieri adulti (circa 80 €), 200 RM sotto i 18 anni; guida 350 RM ogni cinque adulti (circa 70 €); assicurazione 10 RM (tariffe in vigore dal 2023, invariate nel 2026). Rifugio e ingresso al parco a parte.",
        url: "https://www.sabahparks.org.my/",
        consiglio: "Dormire vicino al parco la sera prima della salita e non a Kota Kinabalu, per partire riposati.",
        orari: "Partenza dal Timpohon Gate la mattina presto, dopo il controllo dei permessi; il briefing per chi sale è alle 18 della sera prima, alla sede del parco.",
        lat: 6.075,
        lng: 116.5586,
      },
      {
        nome: "Kinabalu Park",
        testo: "Il parco, patrimonio UNESCO dal 2000, ha una biodiversità ricchissima. Si visita anche senza salire in vetta, con sentieri nella foresta, orchidee e un centro botanico.",
        come: "In bus o auto da Kota Kinabalu verso Ranau. Sentieri a piedi dalla sede del parco.",
        quando: "Al mattino.",
        tempo: "mezza giornata",
        url: "https://www.sabahparks.org.my/",
        consiglio: "Un giorno nel parco è la scelta giusta per chi non fa la salita.",
        costo: "Tassa di conservazione 50 RM per gli stranieri adulti (circa 10 €), 25 RM sotto i 18 anni; giardino botanico 5 RM (2026).",
        orari: "Tutti i giorni 8-17. Giardino botanico 9-16, ultimo ingresso alle 15, con visite guidate alle 9, alle 12 e alle 15; passeggiata guidata sul sentiero natura alle 11.",
        lat: 6.0057,
        lng: 116.5425,
      },
      {
        nome: "Poring Hot Springs e canopy walkway",
        testo: "Sorgenti termali in un'altra area del parco, circa 40 km a sud-est della sede principale, con una passerella sospesa tra gli alberi della foresta: circa 158 metri di lunghezza, a 41 metri d'altezza.",
        come: "In auto o in taxi dal Kinabalu Park.",
        quando: "Al mattino per la passerella; il pomeriggio per le vasche.",
        tempo: "3 ore",
        consiglio: "Combinare con il Kinabalu Park nello stesso giorno.",
        costo: "Tassa di conservazione 50 RM per gli stranieri adulti (circa 10 €); canopy walkway 10 RM; vasca all'aperto 10 RM per le prime tre ore (2026).",
        orari: "Tutti i giorni 8-17. A fine 2026 la canopy walkway risulta chiusa temporaneamente: chiedere a Sabah Parks prima di andare.",
        url: "https://www.sabahparks.org.my/",
        lat: 6.048,
        lng: 116.7023,
      },
      {
        nome: "Parco marino Tunku Abdul Rahman",
        testo: "Cinque isole a poca distanza in barca dalla città, Gaya, Manukan, Mamutik, Sapi e Sulug, con spiagge, snorkeling e acqua limpida. Gaya è la più grande. La scelta giusta per un pomeriggio di mare dopo la montagna.",
        come: "In barca dal molo di Jesselton Point. Si paga la tassa del parco.",
        quando: "Il parco è aperto tutti i giorni, 8-17. Al mattino il mare è più calmo.",
        tempo: "mezza giornata",
        costo: "Ingresso 25 RM al giorno per gli stranieri adulti, circa 5 € (2026), più la barca da Jesselton Point.",
        url: "https://www.sabahparks.org.my/",
        consiglio: "Manukan, Mamutik e Sapi sono le mete più comuni per una giornata.",
        orari: "Tutti i giorni 8-17.",
        lat: 5.9667,
        lng: 116.0,
      },
      {
        nome: "Lungomare, Filipino Market e tramonto",
        testo: "Il lungomare di Kota Kinabalu, con il mercato del pesce, i banchi serali del Filipino Market e i bar dove si guarda il tramonto sulle isole.",
        come: "A piedi dal centro. Il mercato è attivo la sera.",
        quando: "Il tramonto e la sera.",
        tempo: "2 ore",
        consiglio: "Mangiare pesce alla griglia ai banchi serali, scegliendolo dal ghiaccio.",
        orari: "I banchi del pesce lavorano dal tardo pomeriggio a sera.",
        lat: 5.9816,
        lng: 116.072,
      },
      {
        nome: "Moschea cittadina di Kota Kinabalu",
        testo: "La seconda moschea principale della città, nel quartiere di Likas, costruita su una laguna: con l'acqua ferma sembra galleggiare. La cupola e i minareti si vedono bene anche dalla strada costiera.",
        come: "In Grab dal centro, circa 15 minuti verso nord. I visitatori non musulmani entrano fuori dagli orari di preghiera, con braccia e gambe coperte.",
        quando: "Nel tardo pomeriggio, per la luce sull'acqua; evitare il venerdì a mezzogiorno.",
        tempo: "1 ora",
        lat: 5.9959,
        lng: 116.1078,
      },
      {
        nome: "Atkinson Clock Tower",
        testo: "La torre dell'orologio in legno sul pendio di Signal Hill è la struttura più antica ancora in piedi a Kota Kinabalu, una delle poche sopravvissute alla guerra. Fu dedicata a Francis Atkinson, il primo funzionario del distretto di Jesselton, il vecchio nome della città.",
        come: "A piedi dal centro, pochi minuti di salita da Gaya Street.",
        quando: "Di giorno, insieme a Signal Hill.",
        tempo: "20 minuti",
        costo: "Gratuita: si vede dall'esterno.",
        lat: 5.9822,
        lng: 116.0773,
      },
      {
        nome: "Signal Hill Observatory",
        testo: "Il belvedere sulla collina alle spalle del centro, con la vista sui tetti, sul porto e sulle isole del parco marino. È il modo più semplice per capire com'è fatta la città.",
        come: "A piedi dal centro per una scalinata ripida, oppure in Grab fino in cima.",
        quando: "Al tramonto, quando il sole scende dietro le isole.",
        tempo: "1 ora",
        lat: 5.9856,
        lng: 116.0791,
      },
      {
        nome: "Gaya Street e il mercato della domenica",
        testo: "La via principale della città vecchia, con shophouse cinesi, caffè e kopitiam. La domenica mattina si riempie di bancarelle di frutta, piante, artigianato e cibo di strada.",
        come: "A piedi dal lungomare.",
        quando: "La domenica mattina presto, prima del caldo.",
        tempo: "1-2 ore",
        orari: "Il mercato c'è solo la domenica, dalla mattina presto a fine mattinata.",
        lat: 5.9835,
        lng: 116.077,
      },
      {
        nome: "Sabah Museum",
        testo: "Il museo statale del Sabah sulla collina di Bukit Istana Lama, con sezioni di etnografia, storia naturale e archeologia e un villaggio di case tradizionali all'aperto. L'edificio principale è chiuso temporaneamente per lavori: prima di andare conviene verificare quali parti del complesso sono aperte.",
        come: "In Grab dal centro, circa 10 minuti verso sud.",
        quando: "Nelle ore più calde o con la pioggia.",
        tempo: "1-2 ore",
        costo: "15 RM per gli stranieri, circa 3 € (2026).",
        lat: 5.9614,
        lng: 116.0709,
        url: "https://museum.sabah.gov.my/",
      },
      {
        nome: "Kota Kinabalu Wetland Centre",
        testo: "Ventiquattro ettari di mangrovie, l'ultimo lembo di quelle che coprivano la costa della città. Una passerella di legno attraversa la palude, tra uccelli residenti, migratori dal nord dell'Asia, granchi e saltafango.",
        come: "In Grab dal centro, circa 10 minuti verso Likas.",
        quando: "Al mattino presto o verso sera, per gli uccelli.",
        tempo: "1-2 ore",
        lat: 5.9874,
        lng: 116.0892,
      },
      {
        nome: "Spiaggia di Tanjung Aru",
        testo: "La lunga spiaggia a sud del centro, vicino all'aeroporto, dove la sera arrivano famiglie e banchi di cibo. Per il bagno non è memorabile, ma il tramonto è tra i migliori della città.",
        come: "In Grab, circa 15 minuti dal centro.",
        quando: "Al tramonto.",
        tempo: "2 ore",
        costo: "Gratuita.",
        lat: 5.9357,
        lng: 116.0467,
      },
      {
        nome: "Kundasang War Memorial",
        testo: "Il memoriale dei prigionieri britannici e australiani morti nelle marce della morte da Sandakan a Ranau, che ricorda anche le sofferenze della popolazione del Sabah. È a Kundasang, sulla strada per il Kinabalu Park, con giardini e la vista sulla montagna.",
        come: "In auto, lungo il trasferimento verso il parco: pochi minuti dal centro di Kundasang.",
        quando: "Al mattino, quando la vetta del Kinabalu è scoperta.",
        tempo: "1 ora",
        lat: 5.9874,
        lng: 116.5763,
        consiglio: "Ha più senso dopo il Sandakan Memorial Park, o prima se il viaggio comincia dalla montagna.",
      }
    ],
    programmi: [
      {
        titolo: "1 giorno in città",
        tappe: [
          "Mattina: barca per Mamutik o Manukan, snorkeling",
          "Pranzo sull'isola o in città",
          "Pomeriggio: riposo",
          "Tramonto sul lungomare e cena ai banchi del Filipino Market"
        ]
      },
      {
        titolo: "2 giorni in città",
        tappe: [
          "Giorno 1: Gaya Street, Atkinson Clock Tower e Signal Hill al mattino",
          "Pomeriggio al Wetland Centre o al Sabah Museum, tramonto sul lungomare e cena al Filipino Market",
          "Giorno 2: barca da Jesselton Point per Manukan o Sapi, rientro nel primo pomeriggio",
          "Moschea di Likas nel tardo pomeriggio e tramonto a Tanjung Aru",
        ],
      },
      {
        titolo: "3 giorni con la salita",
        tappe: [
          "Giorno 1: arrivo a Kota Kinabalu, trasferimento al Kinabalu Park, notte vicino al parco",
          "Giorno 2: salita fino a Laban Rata, riposo e cena",
          "Giorno 3: partenza nella notte, vetta all'alba, discesa e rientro a Kota Kinabalu"
        ]
      }
    ],
    zone: [
      {
        nome: "Centro di Kota Kinabalu",
        perChi: "chi vuole comodità e il lungomare",
        testo: "Alberghi di ogni fascia vicino al porto e ai ristoranti. Rumoroso la sera."
      },
      {
        nome: "Vicino al Kinabalu Park (Kundasang)",
        perChi: "chi sale in vetta",
        testo: "Lodge e guesthouse lontano dalla città, vicino al Timpohon Gate. Fresco la sera."
      },
      {
        nome: "Tanjung Aru",
        perChi: "chi vuole il mare vicino all'aeroporto",
        testo: "I grandi resort sulla spiaggia a sud del centro, a pochi minuti dall'aeroporto. Tranquilli, ma per il centro serve sempre Grab.",
      }
    ],
    sapori: [
      {
        nome: "Hinava",
        testo: "Pesce crudo marinato in lime con cipolla e zenzero, un piatto tradizionale dei Kadazan-Dusun."
      },
      {
        nome: "Tuaran mee",
        testo: "Noodles fritti all'uovo con carne e verdure, specialità di Tuaran vicino a Kota Kinabalu."
      },
      {
        nome: "Pesce alla griglia",
        testo: "Pesce cotto alla brace con sambal, nei banchi del lungomare."
      }
    ],
    attenzioni: [
      "I permessi per il Kinabalu sono limitati e finiscono mesi prima: non pensare di prenotare sul posto.",
      "La quota si sente: si sale da meno di duemila metri a 4.095 in poco più di un giorno, e il mal di montagna colpisce anche chi è allenato.",
      "Controllare gli avvisi di viaggio sulla costa orientale del Sabah prima di spostarsi oltre la zona di Kota Kinabalu.",
      "Portare contanti per i piccoli esercizi: fuori città le carte non sempre funzionano."
    ],
    gite: [
      {
        nome: "Fiume Klias e le nasiche",
        distanza: "circa 2 ore d'auto a sud",
        testo: "Una crociera tra le mangrovie della penisola di Klias al tramonto, con le nasiche sugli alberi e, dopo il buio, le lucciole. È l'alternativa più vicina per chi non va sul Kinabatangan.",
        come: "Con un tour del pomeriggio, rientro in città in serata.",
      },
      {
        nome: "Tip of Borneo",
        distanza: "circa 190 km, 3-4 ore d'auto",
        testo: "Tanjung Simpang Mengayau, la punta più settentrionale del Borneo, dove il Mar Cinese Meridionale incontra il Mare di Sulu. La giornata è lunga: si abbina alle longhouse dei Rungus nei dintorni di Kudat.",
        come: "In auto con autista o con un tour di un giorno, partendo presto; si passa da Kudat.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Kota Kinabalu?",
        risposta: "Uno o due giorni per la città e le isole del parco marino. Per il Kinabalu se ne aggiungono tre: trasferimento al parco, salita fino a Laban Rata e vetta all'alba con discesa.",
      },
      {
        domanda: "Come si prenota la salita al Monte Kinabalu?",
        risposta: "Il permesso è nominale e legato al posto letto a Laban Rata: si prenota con mesi di anticipo tramite Sabah Parks o un operatore autorizzato, insieme alla guida obbligatoria. Sul posto non si trova.",
      },
      {
        domanda: "Quanto costa salire sul Kinabalu?",
        risposta: "Per gli stranieri adulti il permesso costa 400 RM (circa 80 €) e la guida 350 RM ogni cinque persone. A parte si pagano rifugio, ingresso al parco e trasferimenti, che di solito si comprano a pacchetto.",
      },
      {
        domanda: "Serve esperienza di montagna per il Kinabalu?",
        risposta: "Non servono tecnica né attrezzatura alpinistica, ma serve fiato: circa 1.400 metri di dislivello il primo giorno e la vetta a 4.095 metri il secondo, senza acclimatamento. Lungo la via c'è un orario limite, e chi è troppo lento viene fatto tornare.",
      },
      {
        domanda: "Come si va dall'aeroporto al centro?",
        risposta: "Con Grab, circa 15-25 RM in 20-30 minuti, o con il taxi a prezzo fisso comprato al banco degli arrivi, circa 30-45 RM. Il bus urbano costa circa 5 RM ma passa di rado.",
      },
      {
        domanda: "Quali isole scegliere nel parco Tunku Abdul Rahman?",
        risposta: "Manukan, Mamutik e Sapi sono le più comode per mezza giornata di spiaggia e snorkeling, a una ventina di minuti di barca da Jesselton Point; Gaya è la più grande. L'ingresso costa 25 RM per gli stranieri adulti.",
      },
    ],
    esperienzeSlugs: ['monte-kinabalu'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'La cupola e i minareti della moschea cittadina di Kota Kinabalu sotto un cielo temporalesco',
    immagine: '/images/borneo/kota-kinabalu.jpg',
  },
  {
    slug: 'sepilok-sandakan',
    immagine: '/images/viaggi/borneo-itinerario/giorno-5-sepilok-orangutan.jpg',
    paeseSlug: 'borneo',
    ordine: 2,
    nome: 'Sepilok e Sandakan',
    tipologia: ['fauna selvatica', 'natura', 'storia'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Qui c\'è un noto centro di riabilitazione degli oranghi, dove gli animali orfani o confiscati vengono riportati poco a poco nella foresta, e accanto il centro dei sun bear, gli orsi più piccoli del pianeta. Poco lontano, la città di Sandakan conserva la memoria di uno dei capitoli più duri della guerra nel Pacifico.',
    percheAndarci:
      'È il posto dove è più probabile vedere gli oranghi da vicino, e la base naturale per il Kinabatangan. Il Sandakan Memorial Park, poi, racconta le marce della morte del 1945, a cui sopravvissero pochissimi prigionieri alleati.',
    cosaVedere: [
      'Il Sepilok Orangutan Rehabilitation Centre, con le piattaforme dove si lascia il cibo',
      'Il Bornean Sun Bear Conservation Centre, accanto, spesso saltato e altrettanto interessante',
      'Il Rainforest Discovery Centre, con una canopy walkway ottima per il birdwatching all\'alba',
      'Il Sandakan Memorial Park, sul sito del campo di prigionia giapponese',
    ],
    cosaFare: [
      'Assistere alle poppate al centro di Sepilok (c\'è la scheda esperienza dedicata)',
      'La canopy walkway del Rainforest Discovery Centre all\'alba, quando passano i buceri',
      'Il centro dei sun bear, accanto, che quasi nessuno mette in programma',
      'Un\'escursione alle isole delle tartarughe di Selingan, per vedere di notte la deposizione delle uova',
    ],
    doveDormire:
      'A Sepilok, nei lodge immersi nella foresta a pochi minuti dai centri. È la scelta migliore, perché permette di essere alla prima poppata e sulla canopy walkway all\'alba. Sandakan città serve solo per i collegamenti.',
    doveMangiare:
      'A Sandakan si mangiano pesce e cucina cinese, entrambi di buon livello: la città ha una comunità cinese storica, e il posto giusto sono i ristoranti di mare sul lungomare. A Sepilok ci sono solo i ristoranti dei lodge, semplici e con menu fissi.',
    comeArrivare: "Volo da Kota Kinabalu a Sandakan (SDK), poco meno di un'ora, oppure circa sei ore di strada; dal Kinabalu Park, dopo la salita, sono quattro o cinque ore di trasferimento. Sepilok è a circa 25 km a ovest della città, una mezz'ora in taxi o con il trasferimento del lodge, ed è comoda anche dall'aeroporto.",
    comeSpostarsi: 'Taxi o trasferimenti organizzati dai lodge. I mezzi pubblici ci sono, ma passano di rado e con i bagagli sono scomodi.',
    periodoMigliore:
      'tutto l\'anno per i centri, con una precisazione importante: nella stagione dei frutti della foresta, che varia di anno in anno, gli oranghi trovano cibo da soli e alle poppate ne arrivano molti meno.',
    costi: "Sepilok 30 RM per gli stranieri adulti (circa 6 €), Rainforest Discovery Centre 30 RM, Agnes Keith House 15 RM (2026); centro dei sun bear 50 RM (2025). Budget circa 35-50 € al giorno con guesthouse a Sepilok e taxi; medio 70-120 € con un lodge nella foresta e trasferimenti privati; alto oltre 150 € aggiungendo la notte a Selingan o tour guidati.",
    erroriDaEvitare: [
      'Andare a una sola poppata: in una stagione sfavorevole due tentativi raddoppiano le probabilità',
      'Portare zaini aperti, bottiglie o cibo in mano: i macachi li strappano, e succede spesso',
      'Fermarsi a Sepilok e saltare il Kinabatangan convinti di aver visto la fauna del Borneo: qui gli oranghi sono semi-selvatici e abituati alle persone',
      'Saltare il Sandakan Memorial Park perché "è solo un parco": è un luogo della memoria molto intenso',
    ],
    confronti: [
      {
        titolo: 'Dove vedere gli oranghi: Borneo o Sumatra',
        introduzione:
          'Gli oranghi selvatici vivono solo su due isole al mondo, il Borneo e Sumatra, e sono due specie diverse; tre, contando il tapanuli, descritto da pochi anni e con pochissimi individui. È la scelta che cambia il viaggio più di ogni altra, perché nei luoghi principali probabilità di avvistamento, costi e libertà degli animali sono completamente diversi. In generale, più l\'incontro è selvatico, meno è garantito e più costa arrivarci.',
        opzioni: [
          {
            nome: 'Sepilok (Sabah)',
            sintesi: 'Centro di riabilitazione per orfani e animali confiscati, con poppate quotidiane su piattaforme raggiungibili da passerelle.',
            costo: 'biglietto d\'ingresso, prezzi in biglietteria',
            durata: 'mezza giornata; si dorme accanto',
            pro: [
              'La probabilità più alta di vedere oranghi da vicino, in qualsiasi periodo',
              'Facile da raggiungere e da abbinare al Kinabatangan',
              'Il lavoro di riabilitazione è serio e documentato: non è uno zoo',
              'Accanto ci sono il centro dei sun bear e un\'ottima canopy walkway',
            ],
            contro: [
              'Gli animali sono semi-selvatici e abituati alle persone: non è un incontro in natura',
              'Nella stagione dei frutti della foresta ne arrivano molti meno, perché mangiano da soli',
              'Affollato agli orari delle poppate',
            ],
            perChi: 'Chiunque voglia una ragionevole certezza di vederli, e chi ha poco tempo. È il punto di partenza, non il traguardo.',
          },
          {
            nome: 'Fiume Kinabatangan (Sabah)',
            sintesi: 'Uscite in barca all\'alba e al tramonto lungo il fiume, dove gli animali si concentrano nella fascia di foresta rimasta sulle rive.',
            costo: 'pacchetti in lodge con pasti e uscite compresi',
            durata: '2-3 notti',
            pro: [
              'Oranghi del tutto selvatici, insieme a nasiche, elefanti pigmei, coccodrilli e buceri',
              'Un ottimo rapporto fra probabilità di avvistamento e costo',
              'Con due o tre notti le probabilità salgono parecchio',
            ],
            contro: [
              'Nessuna garanzia: si vedono dalla barca, spesso lontani e in controluce',
              'La fascia di foresta è stretta proprio perché intorno c\'è la palma da olio; è anche il motivo per cui gli animali si concentrano lì, e fa riflettere',
              'Zanzare e caldo pesanti nelle uscite serali',
            ],
            perChi: 'Chiunque abbia almeno due notti: è la scelta con il miglior equilibrio tra animali in libertà e probabilità di vederli.',
          },
          {
            nome: 'Danum Valley (Sabah)',
            sintesi: 'Foresta primaria mai tagliata, con un centro di ricerca e un lodge di alta gamma, sentieri e una canopy walkway.',
            costo: 'la tappa più cara del Borneo, con pacchetti di più notti',
            durata: 'almeno 3 notti, perché abbia senso',
            pro: [
              'Foresta primaria vera, la cosa più vicina al Borneo di prima del disboscamento',
              'Fauna completa: oranghi, gibboni, leopardi nebulosi, cervi, tantissimi uccelli',
              'Pochissime persone e guide naturalistiche di livello',
            ],
            contro: [
              'Carissima, e gli oranghi si vedono o non si vedono senza regola: qui si viene per la foresta, non per una specie',
              'Difficile da raggiungere: trasferimenti lunghi su piste forestali',
              'Sanguisughe, umidità e trekking impegnativi',
            ],
            perChi: 'Chi ha budget e almeno tre notti, e viene per la foresta in sé più che per una lista di animali.',
          },
          {
            nome: 'Bukit Lawang (Sumatra, Indonesia)',
            sintesi: 'L\'altra isola: trekking nella giungla del Gunung Leuser, con gli oranghi di Sumatra, una specie diversa da quella del Borneo e in pericolo critico.',
            costo: 'di gran lunga il più economico: trekking guidati a prezzi bassi',
            durata: '1-3 giorni di trekking',
            pro: [
              'Si cammina dentro la foresta e li si cerca a piedi, invece di guardarli da una piattaforma o da una barca',
              'Le probabilità di vederli sono alte, perché nella zona vivono animali un tempo riabilitati e ormai selvatici',
              'Costi bassissimi rispetto a qualsiasi opzione nel Borneo: alloggi, guide e trekking costano una frazione',
              'La giungla del Leuser è uno degli ultimi posti al mondo dove oranghi, tigri, rinoceronti ed elefanti vivono nello stesso ecosistema',
            ],
            contro: [
              'Il problema etico c\'è e va conosciuto prima: alcune guide attirano gli animali con il cibo per garantire l\'avvistamento, una pratica da rifiutare in modo esplicito quando si prenota',
              'È molto più fisico: si sale nel fango aggrappandosi alle radici, con caldo e umidità alti',
              'Le regole sono meno rigide che in Malesia, e la qualità dipende molto dalla guida che capita',
              'Sumatra è lontana dal Borneo: sono due viaggi diversi, non due tappe dello stesso',
            ],
            perChi: 'Chi vuole cercarli a piedi invece di guardarli, ha un budget contenuto e sceglie l\'operatore con attenzione.',
          },
          {
            nome: 'Semenggoh (Sarawak)',
            sintesi: 'Riserva vicino a Kuching dove vivono oranghi riabilitati ormai liberi, che tornano alle piattaforme solo quando la foresta offre poco.',
            costo: 'pochi ringgit',
            durata: '2-3 ore, in giornata da Kuching',
            pro: [
              'Comodissima: è vicina a Kuching e si fa in una mattinata',
              'Gli animali sono liberi e semi-selvatici, non in recinti',
              'Nella stagione giusta ne possono arrivare parecchi insieme',
            ],
            contro: [
              'Nella stagione dei frutti può non arrivare nessuno, e la riserva lo dice apertamente',
              'Molto affollata, e la sosta dura poco',
              'È in Sarawak: ha senso solo se il viaggio passa da Kuching',
            ],
            perChi: 'Chi è già a Kuching. Da sola non è una ragione per attraversare il Borneo.',
          },
        ],
        raccomandazione:
          'Dentro il Borneo funziona la combinazione Sepilok più Kinabatangan: il primo garantisce l\'incontro da vicino, il secondo lo rende selvatico, e insieme costano meno di tre notti alla Danum Valley. La Danum si aggiunge se ci sono budget e giorni, Semenggoh solo se l\'itinerario tocca il Sarawak. Tra le due isole, invece, la differenza riguarda l\'esperienza prima ancora della fauna: a Sumatra si cammina nella giungla e li si cerca, nel Borneo si sta su una piattaforma o su una barca e si aspetta. Sumatra costa una frazione ed è più fisica e più diretta; il Borneo è più organizzato, più regolamentato e in più offre cose che a Bukit Lawang non ci sono: le nasiche, gli elefanti pigmei, la foresta primaria della Danum e Sipadan a poche ore. Chi ha già fatto Bukit Lawang non venga nel Borneo per gli oranghi: ci venga per tutto il resto, e li rivedrà comunque.',
      },
    ],
    miaEsperienza:
      'A Sepilok gli oranghi si vedono con più sicurezza che altrove, e conviene dire subito cosa significa. Sono animali orfani o confiscati al commercio illegale, in riabilitazione e abituati alle persone, e le piattaforme servono a integrare il cibo che non sanno ancora trovarsi da soli. Non è natura, e il centro non finge che lo sia. Detto questo, vedere un orango attraversare una corda tesa sopra la testa, a tre metri, con quel modo di muoversi lentissimo e all\'apparenza ragionato, basta a giustificare un viaggio. Il consiglio più utile è andare a entrambe le poppate, perché in certe stagioni la foresta dà abbastanza frutta e non arriva quasi nessuno. Poi c\'è quello che quasi tutti saltano: il centro dei sun bear a duecento metri, con gli orsi più piccoli del mondo salvati dal commercio di animali domestici, e il Sandakan Memorial Park, dove abbiamo passato una mattina, sul sito del campo di prigionia da cui partirono le marce della morte del 1945. Su duemilaquattrocento prigionieri alleati ne sopravvissero sei.',
    luoghi: [
      {
        nome: "Sepilok Orangutan Rehabilitation Centre",
        testo: "Centro che accoglie oranghi orfani o confiscati al commercio illegale, in riabilitazione prima del ritorno alla foresta. Dalle piattaforme si vedono gli animali arrivare a mangiare, dopo la poppata di frutta.",
        come: "Circa 25 km a ovest di Sandakan, in taxi o bus. Si cammina su passerelle di legno fino alla piattaforma.",
        quando: "Poppate alle 10 e alle 15 (Sabah Wildlife Department): arrivare con mezz'ora di anticipo e controllare in biglietteria eventuali cambi. Andare a entrambe le poppate raddoppia le probabilità.",
        tempo: "2-3 ore",
        costo: "30 RM per gli stranieri adulti, circa 6 €; 15 RM sotto i 18 anni; 10 RM in più per fotocamere professionali e videocamere, gratis il telefono (2026). Il biglietto vale per tutta la giornata, poppata del pomeriggio compresa.",
        url: "https://wildlife.sabah.gov.my/",
        consiglio: "Portare zaino chiuso e niente cibo in mano: i macachi strappano tutto.",
        orari: "Tutti i giorni 9-12 e 14-16; il venerdì 9-11 e 14-16.",
        lat: 5.865,
        lng: 117.9488,
      },
      {
        nome: "Bornean Sun Bear Conservation Centre",
        testo: "Accanto a Sepilok, ospita gli orsi del sole, i più piccoli al mondo, salvati dal commercio di animali. Spesso viene saltato, ed è altrettanto interessante.",
        come: "A piedi o in taxi da Sepilok, pochi minuti.",
        quando: "Al mattino o a primo pomeriggio.",
        tempo: "1 ora",
        costo: "50 RM per gli stranieri adulti, circa 10 € (2025).",
        url: "https://www.bsbcc.org.my/",
        consiglio: "Visitarlo nello stesso giorno degli oranghi.",
        lat: 5.865,
        lng: 117.9496,
      },
      {
        nome: "Rainforest Discovery Centre",
        testo: "Una foresta con passerelle sospese, una torre e sentieri, ottima per vedere uccelli all'alba.",
        come: "A piedi dal centro di Sepilok o in taxi.",
        quando: "All'alba per gli uccelli.",
        tempo: "2 ore",
        consiglio: "Binocolo e partenza all'alba: è il momento in cui la foresta è più viva.",
        costo: "30 RM per gli stranieri adulti (circa 6 €), 20 RM tra 5 e 17 anni; passeggiata notturna guidata 30 RM (2026).",
        orari: "Tutti i giorni 8-17, festivi compresi.",
        url: "https://sabahtourism.com/destination/rainforest-discovery-centre-rdc/",
        lat: 5.8765,
        lng: 117.9445,
      },
      {
        nome: "Sandakan Memorial Park",
        testo: "Il sito del campo di prigionia giapponese della seconda guerra mondiale, da cui partirono nel 1945 le marce della morte verso Ranau: morirono circa 2.400 prigionieri alleati e sopravvissero solo sei australiani, tutti evasi. Un parco con un piccolo museo e un percorso nella foresta.",
        come: "A pochi chilometri da Sandakan, in taxi.",
        quando: "Al mattino.",
        tempo: "1 ora e mezza",
        consiglio: "Non saltarlo perché «è solo un parco»: merita il tempo.",
        lat: 5.8876,
        lng: 118.0471,
      },
      {
        nome: "Agnes Keith House",
        testo: "La casa coloniale di Agnes Newton Keith, scrittrice americana che raccontò il Borneo e la prigionia durante la guerra. Restaurata dal Sabah Museum, è aperta al pubblico dal 2004, con sale sulla vita dei Keith e sulla Sandakan coloniale della prima metà del Novecento.",
        come: "In taxi dal centro di Sandakan.",
        quando: "Al pomeriggio.",
        tempo: "1 ora",
        consiglio: "Si abbina al Memorial Park nella stessa giornata a Sandakan.",
        costo: "15 RM per gli stranieri, circa 3 € (2026).",
        url: "https://museum.sabah.gov.my/",
        lat: 5.8431,
        lng: 118.1155,
      },
      {
        nome: "Labuk Bay Proboscis Monkey Sanctuary",
        testo: "Un santuario privato nato dentro una piantagione di palma da olio, dove le nasiche arrivano alle piattaforme di legno all'ora della frutta. Si vedono da vicinissimo e con poca fatica, ma è un incontro organizzato, non selvatico.",
        come: "Circa 40 minuti d'auto da Sepilok, in taxi o con i tour di mezza giornata dei lodge.",
        quando: "Alle poppate sulle piattaforme, una al mattino e una al pomeriggio: controllare gli orari quando si prenota.",
        tempo: "2-3 ore",
        lat: 5.9352,
        lng: 117.7982,
        consiglio: "Ha senso per chi non va sul Kinabatangan; chi ci va le vedrà in libertà.",
      },
      {
        nome: "Tempio di Puu Jih Shih",
        testo: "Un grande tempio buddhista cinese su una collina a ovest del centro, con colonne avvolte dai draghi e una vista larga sulla baia di Sandakan. Racconta il peso della comunità cinese nella storia della città.",
        come: "In taxi o Grab dal centro, pochi minuti.",
        quando: "Al mattino o verso sera.",
        tempo: "45 minuti",
        lat: 5.8342,
        lng: 118.0861,
      },
      {
        nome: "Chiesa di St. Michael and All Angels",
        testo: "Una chiesa anglicana in pietra sulla collina del centro, tra le più antiche del Sabah e tra i pochi edifici di Sandakan rimasti in piedi dopo la guerra. Si abbina alla Agnes Keith House nel giro della città storica.",
        come: "A piedi dal centro, in salita.",
        quando: "Di giorno.",
        tempo: "30 minuti",
        lat: 5.8406,
        lng: 118.1129,
      },
      {
        nome: "Mercato centrale di Sandakan",
        testo: "Il mercato vicino al porto, con pesce, frutti di mare secchi, frutta, verdura e banchi di cibo. È il posto dove si vede la Sandakan di tutti i giorni.",
        come: "A piedi nel centro.",
        quando: "Al mattino presto, quando arriva il pesce.",
        tempo: "1 ora",
        lat: 5.839,
        lng: 118.121,
      },
      {
        nome: "Turtle Islands Park (Selingan)",
        testo: "Tre isole a 40 km a nord di Sandakan dove le tartarughe verdi e le embricate depongono le uova sulla spiaggia. Si dorme sull'isola di Selingan e la sera i ranger chiamano gli ospiti quando una tartaruga sale sulla sabbia; poi si assiste al rilascio dei piccoli.",
        come: "Solo con la notte sull'isola, prenotata in anticipo tramite l'operatore autorizzato; barca da Sandakan. I posti sono limitati.",
        quando: "Tutto l'anno; prenotare con largo anticipo.",
        tempo: "1 notte",
        costo: "Tassa di conservazione 60 RM al giorno per gli stranieri adulti (circa 12 €), 30 RM sotto i 18 anni (2026); barca e notte nel pacchetto.",
        orari: "Il programma delle tartarughe si svolge di notte.",
        lat: 6.1745,
        lng: 118.0605,
        url: "https://www.sabahparks.org.my/turtle-islands-park",
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Poppata delle 10 a Sepilok",
          "Sun Bear Centre, a pochi passi",
          "Pranzo e Rainforest Discovery Centre",
          "Poppata delle 15, con lo stesso biglietto",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: poppata del mattino a Sepilok, Sun Bear Centre, pranzo, Rainforest Discovery Centre, poppata del pomeriggio",
          "Giorno 2: Sandakan Memorial Park, poi trasferimento per il Kinabatangan"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2: come i 2 giorni, senza partire per il fiume",
          "Giorno 3: notte a Selingan per le tartarughe, oppure Labuk Bay e la Sandakan storica con Puu Jih Shih, St. Michael e la Agnes Keith House",
        ],
      }
    ],
    zone: [
      {
        nome: "Sepilok",
        perChi: "chi vuole essere vicino al centro degli oranghi",
        testo: "Lodge e guesthouse nella foresta, vicino ai centri. Tranquillo e senza vita serale."
      },
      {
        nome: "Sandakan",
        perChi: "chi arriva in aereo o vuole servizi",
        testo: "Alberghi e ristoranti in città, poco lontano da Sepilok. Più comodo per partire."
      },
      {
        nome: "Isola di Selingan",
        perChi: "chi vuole vedere le tartarughe",
        testo: "Le uniche camere sono quelle del parco, legate al programma notturno: una notte sola, prenotata con largo anticipo.",
      }
    ],
    sapori: [
      {
        nome: "Pesce fresco alla griglia",
        testo: "Pescato di Sandakan, cotto alla brace nei ristoranti sul mare."
      },
      {
        nome: "Hainan chicken rice",
        testo: "Pollo bollito con riso al brodo, una specialità cinese diffusa."
      },
      {
        nome: "Teh tarik",
        testo: "Tè con latte condensato, ovunque."
      }
    ],
    attenzioni: [
      "Quando nella foresta c'è molta frutta gli oranghi trovano cibo da soli e alle poppate ne arrivano meno.",
      "I macachi strappano zaini aperti, bottiglie e cibo: tenere tutto chiuso.",
      "Sepilok non è foresta selvatica: gli oranghi sono abituati alle persone. Per la fauna selvatica serve il Kinabatangan.",
      "Controllare gli avvisi di viaggio per la costa orientale del Sabah."
    ],
    gite: [
      {
        nome: "Gomantong Caves",
        distanza: "sulla strada per il Kinabatangan, circa un'ora prima di Sukau",
        testo: "Grotte di calcare con colonie di pipistrelli e rondini salangane, i cui nidi si raccolgono per la zuppa. L'ingresso costa circa 30 RM per gli stranieri; scarpe chiuse, perché il pavimento è coperto di guano.",
        come: "Con il trasferimento verso il fiume o con un'uscita del lodge.",
      },
      {
        nome: "Fiume Kinabatangan",
        distanza: "circa 2 ore di strada fino a Sukau o Bilit",
        testo: "Il seguito naturale di Sepilok: oranghi e nasiche in libertà, visti dalla barca. Non è una gita in giornata: servono almeno due notti.",
        come: "Con i pacchetti dei lodge, che partono da Sandakan o da Sepilok.",
      },
    ],
    faq: [
      {
        domanda: "A che ora sono le poppate a Sepilok?",
        risposta: "Alle 10 e alle 15, sulla piattaforma principale. Il biglietto vale tutta la giornata, quindi si può tornare per la seconda; con la pioggia possono slittare.",
      },
      {
        domanda: "Quanto costa l'ingresso a Sepilok?",
        risposta: "30 RM per gli stranieri adulti e 15 RM sotto i 18 anni (2026). Le fotocamere professionali pagano 10 RM in più, i telefoni no.",
      },
      {
        domanda: "Gli oranghi si vedono sempre?",
        risposta: "No. Quando nella foresta c'è molta frutta ne arrivano pochi o nessuno; andare a entrambe le poppate raddoppia le probabilità.",
      },
      {
        domanda: "Meglio dormire a Sepilok o a Sandakan?",
        risposta: "A Sepilok, nei lodge a pochi minuti dai centri: si arriva alla prima poppata e alla canopy walkway all'alba senza trasferimenti. Sandakan serve per voli e collegamenti.",
      },
      {
        domanda: "Quanto tempo serve a Sepilok e Sandakan?",
        risposta: "Un giorno pieno per Sepilok, il centro dei sun bear e il Rainforest Discovery Centre; un secondo per il Sandakan Memorial Park e la città, prima di partire per il Kinabatangan.",
      },
      {
        domanda: "Si possono vedere le tartarughe da Sandakan?",
        risposta: "Sì, al Turtle Islands Park, con una notte sull'isola di Selingan prenotata in anticipo. La deposizione avviene di notte e i ranger chiamano gli ospiti quando una tartaruga sale sulla spiaggia.",
      },
    ],
    esperienzeSlugs: ['sepilok-oranghi'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Due oranghi al Sepilok Orangutan Rehabilitation Centre, ripresi da vicino mentre si nutrono',
  },
  {
    slug: 'kinabatangan',
    immagine: '/images/borneo/kinabatangan.jpg',
    paeseSlug: 'borneo',
    ordine: 3,
    nome: 'Fiume Kinabatangan',
    tipologia: ['fauna selvatica', 'natura', 'fiume'],
    giorniConsigliati: '2-3 notti',
    visitataPersonalmente: true,
    introduzione:
      'Il fiume più lungo del Sabah, con una fascia di foresta rimasta lungo le rive e piantagioni di palma da olio tutto intorno. Questa compressione è una tragedia ecologica, ed è anche il motivo per cui qui si vede tanta fauna selvatica: gli animali non hanno altro dove andare.',
    percheAndarci:
      'In due giorni di uscite all\'alba e al tramonto si vedono oranghi selvatici, nasiche, elefanti pigmei del Borneo, coccodrilli, macachi, buceri e martin pescatori, con un ottimo rapporto fra probabilità di avvistamento e costo.',
    cosaVedere: [
      'Gli oranghi selvatici sugli alberi lungo le rive, che al tramonto si costruiscono il nido per la notte',
      'Le nasiche, le scimmie dal naso enorme che esistono solo nel Borneo',
      'Gli elefanti pigmei del Borneo, che si spostano in branco lungo il fiume',
      'I coccodrilli d\'estuario, che si vedono meglio nelle uscite notturne',
      'Diverse specie di bucero, compreso il bucero rinoceronte con il casco arancione',
    ],
    cosaFare: [
      'Le uscite in barca all\'alba e al tramonto, il cuore dell\'esperienza (c\'è la scheda esperienza dedicata)',
      'Un\'uscita notturna in barca con le torce, per coccodrilli, civette e gufi',
      'Un trekking guidato nella foresta dietro il lodge, con le calze antisanguisughe',
    ],
    doveDormire:
      'Nei lodge lungo il fiume, quasi tutti intorno a Sukau e Bilit, da prenotare a pacchetto con pasti e uscite in barca compresi: è l\'unico modo sensato di organizzarsi. Si va dal molto essenziale al confortevole, e la differenza di prezzo sta più nella camera che nelle guide.',
    doveMangiare:
      'Non c\'è scelta, ed è normale: si mangia al lodge, a buffet, tre volte al giorno. Cucina malese semplice: riso, pollo, pesce di fiume, verdure saltate, frutta. Buona e ripetitiva. Negozi non ce ne sono: acqua, snack e soprattutto contanti vanno presi a Sandakan prima di partire.',
    comeArrivare: "Qualche ora di strada da Sandakan, circa due, fino a Sukau o Bilit, poi la barca fino al lodge. Quasi tutti i pacchetti comprendono il trasferimento da Sandakan, da Sepilok o direttamente dall'aeroporto, e molti si fermano alle Gomantong Caves lungo la strada. Per proseguire verso Semporna servono cinque-sei ore d'auto, oppure il volo da Sandakan a Tawau e un'ora e mezza di strada.",
    comeSpostarsi: 'Solo in barca, con le uscite organizzate dal lodge: lungo il fiume non ci sono strade.',
    periodoMigliore:
      'da marzo a ottobre. Nella stagione delle piogge il fiume si alza e gli animali si spargono nella foresta allagata invece di concentrarsi sulle rive: le probabilità di vederli calano parecchio.',
    costi: "pacchetti a persona per notte con pensione completa, uscite in barca e trasferimenti compresi, da pagare spesso in parte in contanti; le differenze di prezzo riguardano soprattutto il livello della camera. Gomantong costa circa 30 RM per gli stranieri (circa 6 €). Budget circa 50-80 € al giorno a persona in homestay o in un lodge semplice; medio 100-180 € nei lodge confortevoli di Sukau; alto oltre 250 € con le camere migliori e guide private.",
    erroriDaEvitare: [
      'Fermarsi una notte sola: con due uscite si dipende dalla fortuna, con quattro o sei le probabilità cambiano del tutto',
      'Arrivare senza contanti: lungo il fiume non ci sono bancomat, e molti lodge e servizi extra si pagano solo in ringgit',
      'Aspettarsi gli animali vicini: si vedono dalla barca, spesso lontani e in controluce. Un binocolo cambia la giornata più di qualsiasi obiettivo fotografico',
      'Sottovalutare le zanzare nelle uscite serali: qui il repellente ad alta concentrazione serve sul serio',
    ],
    miaEsperienza:
      'Sul Kinabatangan il Borneo mantiene tutte le promesse, e allo stesso tempo si capisce cosa è successo a quest\'isola. Siamo arrivati nel pomeriggio, e la prima uscita al tramonto l\'abbiamo fatta la sera stessa. Si esce in barca all\'alba, si risale il fiume con il motore al minimo e in due ore si vedono nasiche che saltano tra gli alberi, buceri che passano in coppia, macachi e, con un po\' di fortuna, un orango selvatico che si muove lentissimo su un ramo. Poi la barca svolta in un affluente, la fascia di foresta si assottiglia e dietro compaiono le file ordinate delle palme da olio, a perdita d\'occhio. Lì si capisce perché gli animali sono tutti concentrati in una striscia larga poche centinaia di metri. Non è una riserva ben riuscita, è quello che è rimasto. Due cose pratiche contano più delle altre. Restare almeno due notti, perché ogni uscita è una lotteria e quattro biglietti valgono più di due. E portare un binocolo: si guarda quasi sempre a venti metri, e senza si perde metà di quello che la guida indica.',
    luoghi: [
      {
        nome: "Crociera all'alba sul fiume",
        testo: "Si risale il fiume con il motore al minimo nell'ora più attiva. Si vedono nasiche, macachi, buceri e con fortuna oranghi selvatici sugli alberi.",
        come: "In barca con il lodge, a orari fissi. I pacchetti comprendono trasferimento, pensione completa e uscite in barca.",
        quando: "All'alba: la luce è bassa e gli animali sono attivi.",
        tempo: "2 ore",
        consiglio: "Un binocolo cambia la giornata più di qualsiasi teleobiettivo."
      },
      {
        nome: "Uscita al tramonto e notturna",
        testo: "Gli oranghi costruiscono il nido per la notte, le nasiche si radunano sugli alberi in riva e di notte si vedono coccodrilli, civette e altri animali notturni.",
        come: "In barca con il lodge, a orari fissi.",
        quando: "Al tramonto e dopo cena.",
        tempo: "2 ore per uscita",
        consiglio: "Il repellente ad alta concentrazione serve sul serio: le zanzare sono aggressive."
      },
      {
        nome: "Elefanti pigmei e fauna del fiume",
        testo: "Gli elefanti pigmei del Borneo si spostano in branco lungo le rive. Il fiume ospita anche coccodrilli marini, diverse specie di bucero, tra cui il bucero rinoceronte, e macachi.",
        come: "Si vedono dalla barca, di solito a distanza e in controluce.",
        quando: "Gli elefanti si spostano molto: gli avvistamenti non sono garantiti in nessun periodo, chiedere al lodge dove sono stati visti di recente.",
        tempo: "durante le uscite",
        consiglio: "Fare almeno quattro o sei uscite: con due si dipende dalla fortuna."
      },
      {
        nome: "Gomantong Caves",
        testo: "Grotte dentro la collina di Gomantong, il più grande affioramento calcareo del basso Kinabatangan, con colonie di pipistrelli (un conteggio del 2012 ne ha stimati circa 275.000) e di rondini salangane. I nidi si raccolgono due volte l'anno, da febbraio ad aprile e da luglio a settembre, solo da raccoglitori autorizzati. Dentro si gira su una passerella di legno.",
        come: "In auto, di solito con il trasferimento o un'uscita del lodge. Si visita la grotta Simud Hitam, a pochi minuti a piedi dall'ingresso; la Simud Putih è chiusa al pubblico.",
        quando: "Al pomeriggio, verso l'uscita serale dei pipistrelli.",
        tempo: "2 ore",
        consiglio: "Scarpe chiuse e torcia: il pavimento è coperto di guano e l'odore è forte.",
        costo: "Circa 30 RM per gli stranieri, circa 6 €.",
        lat: 5.5299,
        lng: 118.0751,
      },
      {
        nome: "Affluente Menanggul",
        testo: "Uno stretto affluente del Kinabatangan vicino a Sukau, dove la barca passa a pochi metri dalle rive. Nel tardo pomeriggio le nasiche si sistemano sugli alberi per la notte, e si vedono martin pescatori e coccodrilli.",
        come: "Con le uscite in barca dei lodge di Sukau.",
        quando: "Nel tardo pomeriggio.",
        tempo: "2 ore",
      },
      {
        nome: "Lanca di Kelenanap",
        testo: "Un lago a ferro di cavallo nato da un'ansa abbandonata del fiume, che si raggiunge risalendo il Kinabatangan. È uno dei posti migliori per gli uccelli, buceri compresi, nelle prime ore del giorno.",
        come: "Con l'uscita del mattino dei lodge, in barca.",
        quando: "All'alba.",
        tempo: "1-2 ore",
      },
      {
        nome: "Agop Batu Tulug",
        testo: "Grotte in una collina calcarea sul fiume, a Batu Puteh, con circa 125 bare di legno intagliato attribuite di solito agli Orang Sungai, le popolazioni del fiume. È un sito del patrimonio statale, con un piccolo museo e una scalinata di legno fino alle grotte.",
        come: "In auto sulla strada tra Sandakan e Lahad Datu, circa un'ora e mezza da Sandakan.",
        quando: "Al mattino, prima del caldo.",
        tempo: "1-2 ore",
        lat: 5.4157,
        lng: 117.9424,
        url: "https://museum.sabah.gov.my/",
      },
      {
        nome: "Batu Puteh e l'ecoturismo comunitario",
        testo: "Il villaggio di Batu Puteh, sul tratto più a monte, ospita un progetto di ecoturismo gestito dalla comunità con homestay, uscite in barca e giornate di riforestazione nelle aree degradate. È il modo di vedere il fiume dalla parte di chi ci vive.",
        come: "In auto sulla strada Sandakan-Lahad Datu; si prenota in anticipo.",
        quando: "Tutto l'anno.",
        tempo: "1-2 giorni",
        lat: 5.4201,
        lng: 117.9418,
      },
      {
        nome: "Trekking guidato e night walk",
        testo: "Le camminate nella foresta dietro i lodge, di giorno o con la torcia dopo cena: insetti, rane, ragni, gufi e, con fortuna, un tarsio. Il terreno è fangoso e le sanguisughe sono la regola.",
        come: "Con le guide del lodge; molti prestano gli stivali di gomma.",
        quando: "Nel pomeriggio o dopo cena.",
        tempo: "1-2 ore",
        consiglio: "Calze antisanguisughe e maniche lunghe.",
      }
    ],
    programmi: [
      {
        titolo: "2-3 notti",
        tappe: [
          "Giorno 1: arrivo a metà giornata, uscita al tramonto",
          "Giorno 2: crociera all'alba, mattina libera, trekking guidato nel pomeriggio, uscita notturna",
          "Giorno 3: ultima crociera all'alba e partenza"
        ]
      },
      {
        titolo: "3 notti",
        tappe: [
          "Giorno 1: Gomantong lungo la strada, uscita al tramonto sul Menanggul",
          "Giorno 2: alba alla lanca di Kelenanap, trekking nel pomeriggio, uscita notturna",
          "Giorno 3: crociera all'alba, poi Agop Batu Tulug o mezza giornata a Batu Puteh",
          "Giorno 4: ultima uscita all'alba e partenza",
        ],
      }
    ],
    zone: [
      {
        nome: "Sukau",
        perChi: "chi vuole essere vicino alle uscite sul fiume principale",
        testo: "Lodge sul fiume con pensione completa. Il luogo classico, un po' più caro."
      },
      {
        nome: "Bilit",
        perChi: "chi vuole risparmiare",
        testo: "Lodge più semplici, in un tratto più isolato del fiume. Un po' meno comodo da raggiungere."
      },
      {
        nome: "Batu Puteh",
        perChi: "chi cerca un homestay comunitario",
        testo: "Case di famiglie del villaggio sul tratto più a monte del fiume. Più semplice, con il ricavato che resta alla comunità.",
      }
    ],
    sapori: [
      {
        nome: "Cucina del lodge",
        testo: "Pasti a buffet o serviti, con riso, pesce e verdure. È l'unica scelta e cambia secondo il lodge."
      },
      {
        nome: "Pesce di fiume",
        testo: "Il pesce locale è cotto alla griglia o fritto con sambal."
      },
      {
        nome: "Ulam",
        testo: "Insalata di erbe fresche mangiate con il riso e il sambal."
      }
    ],
    attenzioni: [
      "Portare contanti: lungo il fiume non ci sono bancomat e molti servizi si pagano solo in ringgit.",
      "Gli animali si vedono a distanza e spesso in controluce: non aspettarsi vicinanza.",
      "Una notte sola non basta: con due uscite si dipende dalla fortuna.",
      "Nella stagione delle piogge il fiume sale e gli animali si disperdono: meno avvistamenti."
    ],
    gite: [
      {
        nome: "Sepilok e Sandakan",
        distanza: "circa 2-3 ore di strada",
        testo: "Le poppate degli oranghi a Sepilok, il centro dei sun bear e il Sandakan Memorial Park: il complemento naturale del fiume, dove gli animali si vedono da vicino.",
        come: "Con il trasferimento del lodge, prima o dopo il fiume.",
      },
      {
        nome: "Danum Valley",
        distanza: "alcune ore di strada verso sud, fino a Lahad Datu",
        testo: "La foresta primaria mai tagliata, l'opposto del Kinabatangan: meno animali facili da vedere, alberi giganti e una foresta intatta. Non è una gita in giornata.",
        come: "Solo con pacchetto e trasferimento dalla struttura; almeno tre notti.",
      },
    ],
    faq: [
      {
        domanda: "Quante notti servono sul Kinabatangan?",
        risposta: "Almeno due: con quattro o cinque uscite in barca le probabilità di vedere oranghi ed elefanti cambiano del tutto. Una notte sola lascia due uscite e molta fortuna.",
      },
      {
        domanda: "Meglio Sukau o Bilit?",
        risposta: "Sukau è il punto classico, vicino al Menanggul e alla lanca di Kelenanap; Bilit ha lodge più semplici in un tratto più isolato. Guide e uscite sono simili, cambia soprattutto la camera.",
      },
      {
        domanda: "Si vedono gli elefanti pigmei?",
        risposta: "A volte, ma non in un periodo garantito: i branchi si spostano molto lungo il fiume. I lodge sanno dove sono stati visti negli ultimi giorni.",
      },
      {
        domanda: "Qual è il periodo migliore per il Kinabatangan?",
        risposta: "Da marzo a ottobre, con il fiume basso e gli animali concentrati sulle rive. Nella stagione delle piogge l'acqua sale e la fauna si disperde nella foresta allagata.",
      },
      {
        domanda: "Servono contanti sul fiume?",
        risposta: "Sì. Lungo il fiume non ci sono bancomat e molti extra si pagano solo in ringgit: conviene prelevare a Sandakan o a Kota Kinabalu.",
      },
      {
        domanda: "Cosa portare in barca?",
        risposta: "Binocolo, guscio impermeabile, una custodia stagna per telefono e macchina fotografica e repellente forte per le uscite serali. Per i trekking servono le calze antisanguisughe.",
      },
    ],
    esperienzeSlugs: ['crociera-kinabatangan'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Barche di legno colorate ormeggiate sulla riva fangosa del fiume Kinabatangan, con la foresta pluviale sull\'altra sponda',
  },
  {
    slug: 'danum-valley',
    paeseSlug: 'borneo',
    ordine: 4,
    nome: 'Danum Valley',
    tipologia: ['natura', 'foresta primaria', 'trekking'],
    giorniConsigliati: '3 notti minimo',
    visitataPersonalmente: false,
    introduzione:
      'Una vasta foresta pluviale primaria mai tagliata, una delle poche rimaste nel sud-est asiatico: alberi altissimi, una canopy walkway sospesa tra le chiome e un silenzio che la mattina presto rompono solo i gibboni. Non ci sono villaggi né strade pubbliche.',
    percheAndarci: "È la cosa più vicina al Borneo di prima del disboscamento. La differenza tra foresta primaria e secondaria, che sulla carta sembra un dettaglio tecnico, qui si vede a occhio nudo: alberi di dimensioni che altrove non esistono più e una struttura a strati completa. Ed è il rovescio del Kinabatangan: là gli animali si vedono facilmente perché sono stretti in una fascia di foresta tra le palme da olio, qui se ne vedono meno perché hanno ancora 438 km² in cui muoversi. Per questo servono almeno tre notti.",
    cosaVedere: [
      'La canopy walkway sospesa tra le chiome',
      'Gli alberi emergenti, tra cui Menara, un meranti giallo di 97,6 metri',
      'La fauna della foresta primaria: gibboni, oranghi selvatici, cervi, orsi malesi e, per pochissimi fortunati, leopardi nebulosi',
      'Un belvedere con la vista sulla foresta senza interruzioni',
    ],
    cosaFare: [
      'Trekking guidati di giorno e di notte con naturalisti che vivono sul posto',
      'Il night drive sulla pista forestale, il momento migliore per i mammiferi',
      'L\'alba dalla canopy walkway, quando i gibboni cominciano a chiamarsi',
      'Il bagno nel fiume Danum, con cui si chiude ogni giornata',
    ],
    doveDormire:
      'Si dorme solo dentro la valle: al centro di ricerca, essenziale e più economico, o al lodge di alta gamma. In giornata non si può venire: è la tappa più cara di qualsiasi viaggio nel Borneo.',
    doveMangiare: 'Pensione completa compresa nel pacchetto, senza alternative: intorno non c\'è altro.',
    comeArrivare: "Volo su Lahad Datu da Kota Kinabalu, poi circa 82 km di strade in gran parte forestali, intorno alle due ore, con il trasferimento organizzato dalla struttura. Non si arriva da soli e non ci sono mezzi pubblici: i trasferimenti partono a orari fissi, quindi chi atterra tardi dorme a Lahad Datu e parte la mattina dopo.",
    comeSpostarsi: 'A piedi sui sentieri, sempre con la guida, e in fuoristrada per i night drive.',
    periodoMigliore:
      'da marzo a ottobre, il periodo più asciutto. Piove comunque: è foresta pluviale equatoriale, e la pioggia fa parte del pacchetto.',
    costi: "la voce più cara del viaggio, con pacchetti di più notti che comprendono trasferimenti, pensione completa e attività guidate, più 10 RM di tassa turistica per camera a notte per gli stranieri. Nei pacchetti più semplici del centro di ricerca si spendono circa 300 € al giorno a persona; in chalet 400-450 €; il lodge di alta gamma costa ancora di più.",
    erroriDaEvitare: [
      'Andarci per gli oranghi: ci sono, ma vederli è imprevedibile, e chi viene per una specie sola resta deluso. Qui si viene per la foresta',
      'Restare una notte: tolti i trasferimenti rimarrebbero poche ore, e il costo per ora diventerebbe assurdo',
      'Sottovalutare le sanguisughe: nella stagione umida sono tante, e le calze apposite sono l\'unica difesa che funziona',
      'Dare per scontata la connessione: qui non c\'è, e fa parte del fascino',
    ],
    luoghi: [
      {
        nome: "Canopy walkway",
        testo: "Una passerella sospesa tra le chiome della foresta primaria, alta fino a circa 26 metri nel punto più alto. Permette di vedere uccelli e scimmie a livello delle cime.",
        come: "A piedi dal lodge con una guida, su sentiero segnato.",
        quando: "All'alba per gli uccelli.",
        tempo: "2 ore",
        consiglio: "Andare con una guida: vede ciò che il visitatore perde.",
        lat: 5.0197,
        lng: 117.7461,
      },
      {
        nome: "Alberi emergenti e foresta primaria",
        testo: "Circa 438 km² di foresta pluviale di pianura quasi intatta, con la volta che in alcuni punti supera i 70 metri. Qui nel 2019 è stato misurato Menara, un meranti giallo di 97,6 metri: è l'albero tropicale vivente più alto conosciuto.",
        come: "Con sentieri e uscite guidate dal lodge.",
        quando: "Al mattino e dopo la pioggia.",
        tempo: "mezza giornata",
        consiglio: "Camminare piano e in silenzio: si vede di più di quanto sembri.",
        lat: 4.9167,
        lng: 117.6667,
      },
      {
        nome: "Night drive e night walk",
        testo: "Uscite notturne con torcia in fuoristrada o a piedi. È il momento in cui compaiono civette, tarsi, serpenti e, con fortuna, qualche mammifero come i gatti selvatici.",
        come: "Con le guide del lodge, a orari fissi.",
        quando: "Dopo il tramonto.",
        tempo: "2 ore",
        consiglio: "Non lasciare le uscite notturne per l'ultima sera."
      },
      {
        nome: "Coffin Cliff e belvedere",
        testo: "Un sentiero nella foresta fino a una parete dove, nelle cavità della roccia, restano bare in legno duro dei Kadazan-Dusun, alcune vecchie di secoli. Più in alto un belvedere si apre sulla valle, con la foresta senza interruzioni fino all'orizzonte.",
        come: "A piedi con guida, partendo dal lodge.",
        quando: "Al mattino.",
        tempo: "3 ore",
        consiglio: "Partire presto, prima del caldo."
      },
      {
        nome: "Jacuzzi Pool e fiume Danum",
        testo: "Una pozza naturale tra le rocce, alimentata dai torrenti della foresta, dove ci si ferma per un bagno al rientro dal Coffin Cliff. Con il fiume nella giusta condizione si scende anche il Danum sulle camere d'aria.",
        come: "A piedi con la guida; il tubing dipende dal livello dell'acqua e dal tempo.",
        quando: "Nelle ore calde del giorno.",
        tempo: "1-2 ore",
      },
      {
        nome: "Danum Valley Field Centre",
        testo: "Il centro di ricerca e didattica della Yayasan Sabah, la fondazione che gestisce la riserva. Accanto ai laboratori c'è un vivaio che produce centinaia di migliaia di piantine di dipterocarpi per la riforestazione, e i visitatori dormono in camere semplici o in dormitorio.",
        come: "Con un pacchetto prenotato in anticipo e il trasferimento da Lahad Datu.",
        quando: "Tutto l'anno.",
        tempo: "almeno 3 notti",
      },
      {
        nome: "Birdwatching",
        testo: "Nella riserva sono state registrate oltre 270 specie di uccelli, con diversi buceri, fagiani argo e pitte; un piccolo uccello della famiglia dei dicaeidi, lo spectacled flowerpecker, finora è stato segnalato solo qui.",
        come: "Con le guide naturalistiche, dalla canopy walkway e lungo la strada d'accesso.",
        quando: "All'alba e nel tardo pomeriggio.",
        tempo: "mezza giornata",
        consiglio: "Un binocolo vale più di qualsiasi teleobiettivo.",
      },
      {
        nome: "Fauna della foresta primaria",
        testo: "Oranghi, gibboni di Müller, tarsi, cervi, orsi malesi, elefanti pigmei e, per pochissimi, il leopardo nebuloso. La foresta è così grande che gli incontri restano rari e imprevedibili, e proprio per questo valgono di più.",
        come: "Con le uscite guidate di giorno e di notte.",
        quando: "All'alba, al tramonto e dopo il buio.",
        tempo: "durante tutto il soggiorno",
      }
    ],
    programmi: [
      {
        titolo: "3 notti",
        tappe: [
          "Giorno 1: trasferimento da Lahad Datu, pomeriggio sentiero vicino al lodge, night walk",
          "Giorno 2: alba sulla canopy walkway, mattina in foresta, pomeriggio belvedere, night drive",
          "Giorno 3: sentiero lungo con le guide e rientro il giorno dopo"
        ]
      },
      {
        titolo: "4 notti",
        tappe: [
          "Come le 3 notti",
          "Un giorno in più per il Coffin Cliff, la Jacuzzi Pool e il tubing sul fiume Danum",
          "Ultima alba sulla canopy walkway prima del rientro",
        ],
      }
    ],
    zone: [
      {
        nome: "Lodge dentro la riserva",
        perChi: "chi vuole comodità dentro la foresta",
        testo: "Il lodge di alta gamma, con pensione completa e attività guidate. Costoso e senza connessione."
      },
      {
        nome: "Centro di ricerca",
        perChi: "chi cerca una sistemazione semplice",
        testo: "Ostello del centro di ricerca, con prezzi più bassi e confort minimo."
      },
      {
        nome: "Lahad Datu",
        perChi: "chi arriva il giorno prima",
        testo: "La cittadina dell'aeroporto, dove si dorme se il volo arriva tardi: i trasferimenti per la valle partono la mattina.",
      }
    ],
    sapori: [
      {
        nome: "Cucina del lodge",
        testo: "Pasti a buffet o serviti, con riso, pesce e verdure. Non c'è altra scelta."
      }
    ],
    attenzioni: [
      "Non ci si va per gli oranghi: ci sono, ma vederli è imprevedibile. Si va per la foresta.",
      "Le sanguisughe sono numerose nella stagione umida: calze apposite.",
      "Non c'è connessione, ed è parte del fascino.",
      "Una notte sola non ha senso: tolti i trasferimenti rimangono poche ore."
    ],
    gite: [
      {
        nome: "Tabin Wildlife Reserve",
        distanza: "circa 48 km a est di Lahad Datu",
        testo: "Una riserva di 1.225 km² al centro della penisola di Dent, con vulcani di fango dove gli animali vengono a leccare il sale: un buon posto per elefanti pigmei, cervi e primati. Si aggiunge alla Danum per chi ha giorni in più.",
        come: "Con pacchetto e notte nella riserva, tra strade asfaltate e sterrate.",
      },
      {
        nome: "Fiume Kinabatangan",
        distanza: "alcune ore di strada verso nord",
        testo: "L'altra faccia del Sabah: fauna concentrata sulle rive e vista dalla barca. Insieme alla Danum dà il quadro completo della foresta del Borneo.",
        come: "Con un trasferimento organizzato e almeno due notti nei lodge sul fiume.",
      },
    ],
    faq: [
      {
        domanda: "Quante notti servono alla Danum Valley?",
        risposta: "Almeno tre. Il trasferimento da Lahad Datu richiede circa due ore per tratta, e con meno notti resterebbero poche ore nella foresta.",
      },
      {
        domanda: "Alla Danum Valley si vedono gli oranghi?",
        risposta: "Vivono nella riserva, ma gli avvistamenti sono imprevedibili. Alla Danum si viene per la foresta primaria nel suo insieme, non per una specie.",
      },
      {
        domanda: "Si può visitare in giornata?",
        risposta: "No. Non ci sono mezzi pubblici né accessi liberi: si entra solo con un pacchetto e almeno una notte in una delle strutture della valle.",
      },
      {
        domanda: "Meglio il centro di ricerca o il lodge?",
        risposta: "Il Danum Valley Field Centre è più semplice e costa meno, con camere essenziali e dormitori; il lodge di alta gamma offre più comfort e guide dedicate. La foresta è la stessa.",
      },
      {
        domanda: "Qual è il periodo migliore per la Danum Valley?",
        risposta: "Da marzo a ottobre, il periodo più asciutto. Piove comunque spesso: è foresta pluviale equatoriale.",
      },
      {
        domanda: "Cosa portare alla Danum Valley?",
        risposta: "Calze antisanguisughe, abiti a maniche lunghe che asciugano in fretta, una frontale per le uscite notturne e un binocolo. La connessione non c'è.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Un fiume che scorre nella foresta pluviale di pianura della Danum Valley, Sabah',
    immagine: '/images/borneo/danum-valley.jpg',
  },
  {
    slug: 'semporna-sipadan',
    immagine: '/images/borneo/diving-sipadan.jpg',
    paeseSlug: 'borneo',
    ordine: 5,
    nome: 'Semporna e Sipadan',
    tipologia: ['diving', 'mare', 'isole'],
    giorniConsigliati: '4-5 giorni, per avere una possibilità vera di ottenere il permesso',
    visitataPersonalmente: true,
    introduzione:
      'La costa sud-orientale del Sabah, con al largo l\'isola di Sipadan: un pinnacolo corallino che sale da fondali molto profondi e che molti considerano tra i migliori siti di immersione al mondo. L\'accesso è a numero chiuso, sull\'isola non si dorme e il permesso si ottiene solo tramite un operatore.',
    percheAndarci:
      'Per Sipadan, e non è un\'esagerazione da dépliant: banchi di barracuda a spirale, moltissime tartarughe, squali di barriera e pareti che scendono nel blu. E per Mabul e Kapalai, che sono l\'opposto: fondali bassi e sabbiosi dove si cercano gli animali più piccoli e strani dell\'oceano.',
    cosaVedere: [
      'Sipadan, con i punti Barracuda Point, Drop Off e Turtle Tomb',
      'Mabul, famosa per il muck diving: cavallucci pigmei, polpi mimetici, nudibranchi, pesci rana',
      'Kapalai, con le palafitte sul banco di sabbia',
      'Le comunità Bajau Laut, i "nomadi del mare", che vivono su barche e palafitte, spesso senza cittadinanza',
      'Bohey Dulang, il cratere vulcanico dell\'isola, con il sentiero panoramico sulla laguna',
    ],
    cosaFare: [
      'Immersioni a Sipadan, con il permesso ottenuto tramite l\'operatore (c\'è la scheda esperienza dedicata)',
      'Muck diving a Mabul e Kapalai, che vale il viaggio anche senza Sipadan',
      'La salita a Bohey Dulang, per vedere la laguna dall\'alto del cratere',
      'Snorkeling per chi non ha il brevetto, sapendo che a Sipadan i permessi vanno soprattutto ai subacquei',
    ],
    doveDormire:
      'Noi abbiamo dormito sull\'isola di Mabul, per essere già in mare; lì ci sono resort e strutture più economiche. Semporna città costa meno ed è più comoda per i collegamenti, ma toglie questo vantaggio. **Sull\'isola di Sipadan non si può dormire**: le strutture furono rimosse nel 2004 proprio per proteggerla.',
    doveMangiare:
      'Nei resort si mangia a pensione completa, compresa nel pacchetto. A Semporna città ci sono ristoranti di pesce sul lungomare, ottimi ed economici, dove il pescato del giorno si sceglie al banco.',
    comeArrivare: "Volo su Tawau (TWU) da Kota Kinabalu o da Kuala Lumpur, poi circa un'ora e mezza di strada fino a Semporna e 45 minuti di barca fino a Mabul. Quasi tutti i resort organizzano l'intero trasferimento. Le barche non viaggiano col buio: chi arriva tardi dorme a Semporna e parte la mattina dopo. Dal Kinabatangan sono cinque-sei ore d'auto.",
    comeSpostarsi: 'Solo in barca, con le uscite organizzate dal diving center.',
    periodoMigliore:
      'da aprile a settembre, con il mare più calmo e la visibilità migliore. Da novembre a febbraio il mare è più mosso e alcune uscite saltano.',
    costi: "pacchetti diving di più notti con pensione completa; il permesso per Sipadan, 100 RM di tassa di conservazione più 350 RM di permesso d'immersione (circa 90 €, 2026), si paga a parte ed è la voce che decide tutto. Il numero di immersioni per permesso lo fissa Sabah Parks e cambia nel tempo: chiederlo all'operatore. Il parco Tun Sakaran costa 20 RM al giorno. Budget circa 40-60 € al giorno a Semporna con guesthouse e un giro in barca; medio 120-200 € a persona nei pacchetti diving di Mabul; alto oltre 250 € nei resort su palafitte con Sipadan.",
    erroriDaEvitare: [
      'Presentarsi sperando di immergersi a Sipadan senza aver prenotato mesi prima: i permessi giornalieri sono pochi, Sabah Parks li assegna ai singoli operatori e questi li distribuiscono tra gli ospiti, quasi sempre a rotazione e premiando i soggiorni più lunghi',
      'Prenotare solo due notti e contare su Sipadan: la rotazione favorisce chi resta 4-5 notti, ed è per questo che l\'itinerario va costruito così',
      'Provare a comprare un permesso da soli: non si danno ai privati, solo agli operatori autorizzati',
      'Ignorare gli avvisi di sicurezza sulla costa orientale del Sabah: la zona è presidiata e il turismo funziona regolarmente, ma la situazione va controllata prima di prenotare',
    ],
    miaEsperienza:
      'Sipadan regge la sua fama, cosa rara per un posto così celebrato. Si scende lungo una parete che continua nel blu senza un fondo visibile, e dopo pochi minuti passa un banco di barracuda che si avvita in una spirale larga come una casa; le tartarughe sono così tante che dopo la quinta si smette di fotografarle. Prima di prenotare, però, bisogna capire che il permesso decide tutto. Sono poco più di duecentocinquanta al giorno, non si comprano da privati: li assegna Sabah Parks agli operatori, che poi li distribuiscono tra gli ospiti a rotazione, e la rotazione premia chi resta più a lungo. Prenotare due notti e sperare è il modo più sicuro per non immergersi affatto. La sorpresa, comunque, è stata un\'altra: Mabul, che tutti trattano come una base d\'appoggio, è uno dei posti migliori al mondo per il muck diving, e cercare su una gorgonia un cavalluccio pigmeo grande come un\'unghia è divertente quanto un banco di barracuda. Un\'ultima cosa, che turistica non è: intorno alle palafitte vivono i Bajau Laut, spesso senza la cittadinanza di nessuno stato, e il contrasto con i resort a cinquanta metri merita che ci si fermi a pensare.',
    luoghi: [
      {
        nome: "Sipadan",
        testo: "Un'isola oceanica che sale per 600 metri dal fondale. Le immersioni sono tra le più famose al mondo, con Barracuda Point, Drop Off e la Turtle Tomb, una grotta sotto l'isola con scheletri di tartarughe.",
        come: "Solo con operatori autorizzati che hanno i permessi di Sabah Parks. Sull'isola non si dorme: le strutture sono chiuse dal 2004 e si parte in barca da Mabul, Kapalai o Semporna. Il numero di immersioni per permesso lo fissa Sabah Parks: chiederlo all'operatore.",
        quando: "I permessi giornalieri sono a numero chiuso, assegnati da Sabah Parks agli operatori, che possono prenotarli fino a sei mesi prima. Di solito l'isola chiude a novembre per la tutela del reef.",
        tempo: "1 giorno per permesso",
        costo: "Per gli stranieri tassa di conservazione 100 RM più permesso di immersione 350 RM a persona al giorno, circa 90 € in tutto (Sabah Parks, 2026); gli operatori li inseriscono nel pacchetto con un sovrapprezzo.",
        url: "https://www.sabahparks.org.my/",
        consiglio: "Prenotare 4-5 notti: la rotazione dei permessi premia i soggiorni più lunghi.",
        lat: 4.1147,
        lng: 118.6288,
      },
      {
        nome: "Mabul",
        testo: "Una piccola isola a circa 15 km a nord di Sipadan, famosa per il muck diving: cavallucci marini pigmei, polpi mimetici, nudibranchi e pesci rana su fondali sabbiosi.",
        come: "Dai resort su palafitte, in barca per le immersioni.",
        quando: "Tutto l'anno; chiedere agli operatori le condizioni del mare.",
        tempo: "2-3 giorni",
        consiglio: "Dormire a Mabul, non a Semporna, per essere vicino ai siti.",
        lat: 4.2458,
        lng: 118.6311,
      },
      {
        nome: "Kapalai",
        testo: "Un banco di sabbia con resort su palafitte nell'acqua, con snorkeling e immersioni da ottime a eccellenti.",
        come: "Con le barche dei resort da Mabul.",
        quando: "Tutto l'anno; chiedere agli operatori le condizioni del mare.",
        tempo: "mezza giornata",
        consiglio: "Informarsi se il resort è ancora aperto prima di prenotare.",
        lat: 4.2167,
        lng: 118.6833,
      },
      {
        nome: "Comunità Bajau Laut",
        testo: "I «nomadi del mare» vivono su barche e palafitte, spesso senza cittadinanza. A Semporna si vedono i bambini che remano in barca per chiedere l'elemosina.",
        come: "Con operatori che lavorano con le comunità, non per fare foto.",
        quando: "Tutto l'anno.",
        tempo: "mezza giornata",
        consiglio: "Non dare soldi ai bambini in barca: incoraggia a non andare a scuola."
      },
      {
        nome: "Bohey Dulang",
        testo: "L'isola con un cratere vulcanico e un sentiero panoramico sulla laguna, nel parco marino Tun Sakaran: la cima più alta arriva a 353 metri.",
        come: "In barca da Semporna con tour organizzati.",
        quando: "Al mattino.",
        tempo: "mezza giornata",
        url: "https://www.sabahparks.org.my/tun-sakaran-marine-park",
        consiglio: "Portare scarpe da trekking e acqua: il sentiero è ripido.",
        costo: "Tassa del parco Tun Sakaran 20 RM per gli stranieri adulti (circa 4 €); salita a Bohey Dulang 50 RM a persona, più la guida, 50 RM ogni sei persone (2026).",
        orari: "Parco aperto tutti i giorni 8-17.",
        lat: 4.5994,
        lng: 118.7866,
      },
      {
        nome: "Pulau Sibuan",
        testo: "Un'isola bassa di sabbia bianca nel parco marino Tun Sakaran, con un reef poco profondo tutto intorno. È la sosta classica dei giri in barca per lo snorkeling, spesso insieme a Bohey Dulang.",
        come: "Con i giri in barca da Semporna.",
        quando: "Al mattino, con il mare più calmo.",
        tempo: "1-2 ore",
        costo: "Compresa nella tassa del parco Tun Sakaran, 20 RM per gli stranieri adulti (2026).",
        lat: 4.6504,
        lng: 118.658,
        url: "https://www.sabahparks.org.my/tun-sakaran-marine-park",
      },
      {
        nome: "Pulau Mantabuan",
        testo: "Un'altra isola del parco Tun Sakaran, più a est, con spiaggia e reef dove si fa snorkeling tra coralli e pesci di barriera durante i giri del parco.",
        come: "Con i giri in barca da Semporna.",
        quando: "Al mattino.",
        tempo: "1-2 ore",
        costo: "Compresa nella tassa del parco Tun Sakaran (2026).",
        lat: 4.6352,
        lng: 118.7931,
      },
      {
        nome: "Lungomare e mercato del pesce di Semporna",
        testo: "Semporna vive intorno al porto: banchi di pesce e frutti di mare, barche dei Bajau dipinte e ristoranti su palafitte dove la sera si sceglie il pescato al banco. Da qui partono quasi tutte le barche per le isole.",
        come: "A piedi nel centro.",
        quando: "La sera, per la cena.",
        tempo: "1-2 ore",
        lat: 4.4757,
        lng: 118.616,
      }
    ],
    programmi: [
      {
        titolo: "1 giorno da Semporna, senza immersioni",
        tappe: [
          "Barca del mattino nel parco Tun Sakaran",
          "Salita a Bohey Dulang prima del caldo",
          "Snorkeling a Sibuan e Mantabuan",
          "Cena di pesce sul lungomare di Semporna",
        ],
      },
      {
        titolo: "4-5 giorni",
        tappe: [
          "Giorno 1: arrivo a Tawau, trasferimento a Semporna e Mabul",
          "Giorno 2-4: immersioni a Sipadan quando c'è il permesso, muck diving a Mabul negli altri giorni",
          "Giorno 5: Kapalai o Bohey Dulang, rientro a Semporna"
        ]
      }
    ],
    zone: [
      {
        nome: "Mabul",
        perChi: "chi fa immersioni e vuole stare vicino ai siti",
        testo: "Resort e lodge su palafitte, spesso con pacchetti completi. Costoso e senza altra scelta."
      },
      {
        nome: "Semporna",
        perChi: "chi vuole risparmiare",
        testo: "Alberghi in città, con trasferimenti in barca ai siti. Meno comodo e più rumoroso."
      },
      {
        nome: "Kapalai",
        perChi: "chi vuole dormire sull'acqua",
        testo: "Resort su palafitte sopra un banco di sabbia, vicino ai siti di Mabul. Solo pacchetti completi.",
      }
    ],
    sapori: [
      {
        nome: "Pesce alla griglia",
        testo: "Pescato fresco nei ristoranti sul molo di Semporna."
      },
      {
        nome: "Curry di pesce",
        testo: "Curry piccante di pesce con riso, nei locali di Semporna."
      }
    ],
    attenzioni: [
      "I permessi per Sipadan non si comprano da privati: li dà Sabah Parks agli operatori, e due notti non bastano.",
      "Controllare gli avvisi di sicurezza sulla costa orientale del Sabah: la zona è presidiata, ma va controllata prima di partire.",
      "Non dare soldi ai bambini Bajau in barca.",
      "Con il mare mosso alcune uscite saltano: lasciare giorni di margine."
    ],
    gite: [
      {
        nome: "Isole del parco Tun Sakaran",
        distanza: "giro in barca di mezza o intera giornata da Semporna",
        testo: "Bohey Dulang con il sentiero sul cratere, poi lo snorkeling a Sibuan e Mantabuan. È la giornata giusta per chi non si immerge o per il giorno prima del volo.",
        come: "Con un'escursione da Semporna o dai resort, con la tassa del parco.",
      },
      {
        nome: "Tawau Hills Park",
        distanza: "24 km a nord-ovest di Tawau, sulla strada per l'aeroporto",
        testo: "Foresta collinare con sentieri, cascate e sorgenti calde. L'ingresso, 20 RM per gli stranieri adulti, comprende il giardino botanico; apre 8-16 nei giorni feriali e 7:30-15:30 nel fine settimana e nei festivi.",
        come: "In auto o Grab da Tawau; si fa anche il giorno della partenza con un volo serale.",
      },
    ],
    faq: [
      {
        domanda: "Come si ottiene il permesso per Sipadan?",
        risposta: "Solo tramite un operatore autorizzato: Sabah Parks assegna i permessi giornalieri ai diving center, che li distribuiscono tra gli ospiti a rotazione. Ai privati non si vendono.",
      },
      {
        domanda: "Quante notti servono per immergersi a Sipadan?",
        risposta: "Quattro o cinque, perché la rotazione premia i soggiorni lunghi; con due notti è facile non ottenere il permesso.",
      },
      {
        domanda: "Quanto costa il permesso per Sipadan?",
        risposta: "Per gli stranieri 100 RM di tassa di conservazione più 350 RM di permesso d'immersione al giorno, circa 90 € in tutto (2026), di solito inseriti nel pacchetto con un sovrapprezzo.",
      },
      {
        domanda: "Si può dormire a Sipadan?",
        risposta: "No. Le strutture sull'isola sono state rimosse nel 2004 per proteggerla: si dorme a Mabul, a Kapalai o a Semporna e si arriva in barca.",
      },
      {
        domanda: "Cosa fa chi non si immerge?",
        risposta: "Snorkeling a Mabul e nelle isole del parco Tun Sakaran, come Sibuan e Mantabuan, e la salita a Bohey Dulang. A Sipadan i permessi vanno soprattutto ai subacquei.",
      },
      {
        domanda: "La zona di Semporna è sicura?",
        risposta: "La costa orientale ha una zona di sicurezza presidiata, con un coprifuoco marittimo notturno, e il turismo funziona regolarmente. Conviene comunque controllare gli avvisi di viaggio aggiornati prima di prenotare.",
      },
    ],
    esperienzeSlugs: ['diving-sipadan'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Un banco di pesci e il reef corallino nelle acque di Sipadan, illuminati dai raggi del sole',
  },
  {
    slug: 'kuching-bako',
    paeseSlug: 'borneo',
    ordine: 6,
    nome: 'Kuching e il Sarawak',
    tipologia: ['città', 'natura', 'cultura'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La capitale del Sarawak sta sul fiume, con un lungofiume ordinato e una storia particolare: per un secolo fu il regno privato dei "rajah bianchi", la dinastia inglese dei Brooke. Intorno ci sono il parco nazionale di Bako con le nasiche, i villaggi di longhouse iban e le grotte preistoriche di Niah.',
    percheAndarci:
      'È una delle città più piacevoli della Malesia. E il Sarawak ha una storia e una composizione etnica del tutto diverse dal Sabah: qui domina la cultura iban, con le longhouse, case comuni lunghissime dove vivono molte famiglie.',
    cosaVedere: [
      'Il lungofiume di Kuching e le vecchie shophouse del centro',
      'Il Sarawak Museum e il Borneo Cultures Museum, due ricchi musei etnografici',
      'Il parco nazionale di Bako, con le nasiche, i macachi e le formazioni di arenaria sul mare',
      'Il Sarawak Cultural Village, con le case tradizionali dei diversi gruppi etnici',
      'La Semenggoh Nature Reserve, con gli oranghi riabilitati e ormai liberi',
      'Le grotte di Niah, con tracce di presenza umana di decine di migliaia di anni fa',
    ],
    cosaFare: [
      'Una giornata a Bako, raggiungibile solo in barca, con i sentieri tra la foresta e le scogliere',
      'Semenggoh alla poppata del mattino, sapendo che nella stagione dei frutti può non arrivare nessuno',
      'Una notte in una longhouse iban lungo il Batang Ai o il Lemanak',
      'Il laksa di Sarawak a colazione, un piatto diverso da tutti gli altri laksa malesi',
    ],
    doveDormire:
      'Sul lungofiume o nel centro storico di Kuching, che si gira tutto a piedi. Per Bako conviene una notte nei chalet del parco: permette la passeggiata notturna e i sentieri all\'alba senza dipendere dagli orari delle barche, legati alla marea.',
    doveMangiare:
      'A Kuching si mangia molto bene, e in modo diverso dal resto della Malesia. Il piatto da provare è il Sarawak laksa, a colazione, con un brodo di gamberi e spezie che non somiglia né a quello di Penang né a quello nyonya. Poi il kolo mee, i noodles asciutti, e il midin, una felce di foresta saltata all\'aglio che si trova solo qui. I posti giusti sono il mercato notturno di Chinatown e i food court sul fiume.',
    comeArrivare: "Volo su Kuching (KCH) da Kuala Lumpur, poco meno di due ore, o da Kota Kinabalu; ci sono anche voli diretti da Singapore. Anche qui c'è un controllo passaporti proprio: il Sarawak ha un'immigrazione separata persino rispetto al Sabah. Dall'aeroporto, a sud della città, il centro si raggiunge in Grab o in taxi con coupon in 20-30 minuti.",
    comeSpostarsi:
      'Kuching si gira a piedi e con Grab. Per Bako servono un bus e poi una barca, con orari legati alla marea; per Semenggoh, autobus o Grab.',
    periodoMigliore:
      'da marzo a ottobre. A Semenggoh la stagione conta parecchio: da aprile a ottobre le probabilità di vedere oranghi sono molto più alte, mentre nella stagione dei frutti della foresta possono non farsi vedere affatto.',
    costi: "Bako 20 RM per gli stranieri adulti più la barca da Kampung Bako, Semenggoh 10 RM, Niah 20 RM; il lungofiume, i templi e il ponte Darul Hana sono gratuiti. Kuching è economica anche per gli standard malesi: budget circa 30-40 € al giorno con guesthouse in centro e Grab; medio 60-100 € con albergo sul lungofiume e una gita; alto oltre 150 € con resort a Damai e tour privati.",
    erroriDaEvitare: [
      'Andare a Semenggoh nella stagione dei frutti contando di vederli: nella stagione dei frutti gli oranghi mangiano nella foresta, e la riserva lo dice apertamente',
      'Fare Bako in giornata senza guardare le maree: le barche vanno e tornano in base all\'acqua, ed è facile restare bloccati',
      'Aspettarsi che il Sarawak sia come il Sabah: sono due stati con storia, popolazioni e immigrazione separate, e passare dall\'uno all\'altro vuol dire un nuovo timbro sul passaporto',
      'Prenotare una longhouse "turistica" senza informarsi: le esperienze cambiano moltissimo, dalla visita costruita al soggiorno vero in una comunità',
    ],
    miaEsperienza:
      'Kuching è la sorpresa del Borneo: una città di fiume tranquilla, con il lungofiume pedonale, le case cinesi basse e una vivibilità che nessun\'altra città malese di queste dimensioni ha. Il Sarawak laksa a colazione, in una di quelle sale con i ventilatori al soffitto, è una delle cose migliori di tutta la Malesia. Bako è il parco che rende. Si arriva solo in barca, con gli orari decisi dalla marea, e in un\'ora di sentiero si incontrano le nasiche, le scimmie dal naso enorme che esistono solo su quest\'isola: si guardano da pochi metri mentre mangiano foglie, senza badare a chi passa. Su Semenggoh, invece, meglio essere chiari: gli oranghi sono liberi e tornano alle piattaforme solo quando la foresta offre poco, quindi tra novembre e marzo può non arrivare nessuno, e la riserva lo scrive all\'ingresso. Chi ha già visto Sepilok non venga nel Sarawak per questo: ci venga per Bako, per le longhouse e per la città.',
    luoghi: [
      {
        nome: "Lungofiume di Kuching",
        testo: "Il lungofiume pedonale sul fiume Sarawak, con vecchie shophouse cinesi, il Fort Margherita sull'altra sponda e le barche. Una città tranquilla e vivibile.",
        come: "A piedi dal centro. I sampan attraversano il fiume per pochi ringgit.",
        quando: "La sera, con le luci accese.",
        tempo: "2 ore",
        consiglio: "Prendere un sampan per il Fort Margherita e tornare a piedi.",
        lat: 1.5605,
        lng: 110.3431,
      },
      {
        nome: "Sarawak Museum e Borneo Cultures Museum",
        testo: "Due musei etnografici: gli oggetti delle popolazioni dayak e il Borneo Cultures Museum, il più recente, con collezioni e ricostruzioni di longhouse.",
        come: "Nel centro di Kuching, a piedi o in taxi.",
        quando: "Al mattino o nelle ore più calde.",
        tempo: "2 ore",
        url: "https://sarawaktourism.com/",
        consiglio: "Visitarli prima di andare in una longhouse: aiuta a capire cosa si sta vedendo.",
        orari: "Borneo Cultures Museum: lunedì-venerdì 9-16:45; sabato, domenica e festivi 9:30-16:30.",
        lat: 1.5555,
        lng: 110.3425,
      },
      {
        nome: "Parco nazionale di Bako",
        testo: "Un parco sul mare con nasiche, macachi, maiali barbuti e scogli di arenaria scolpiti dalle onde. È uno dei posti migliori del Sarawak per vedere le nasiche.",
        come: "Da Kuching (circa 40 km) in bus fino a Kampung Bako, poi circa 20 minuti di barca. Gli orari dipendono dalla marea.",
        quando: "Al mattino, con la marea giusta.",
        tempo: "1 giorno",
        consiglio: "Controllare gli orari delle maree: si rischia di restare bloccati.",
        costo: "Ingresso 20 RM per gli stranieri adulti, circa 4 €, più la barca da Kampung Bako, da concordare al molo.",
        lat: 1.7163,
        lng: 110.4442,
      },
      {
        nome: "Semenggoh Nature Reserve",
        testo: "Una riserva con oranghi riabilitati ormai liberi, che tornano alle piattaforme solo quando manca frutta nella foresta.",
        come: "In taxi o tour da Kuching.",
        quando: "Due sessioni al giorno, mattina e pomeriggio (orari in biglietteria). Quando nella foresta c'è molta frutta gli oranghi si fanno vedere meno.",
        tempo: "2-3 ore",
        consiglio: "Andarci senza contare di vederli: gli oranghi sono liberi e vengono solo se vogliono.",
        costo: "10 RM per gli stranieri adulti, circa 2 €.",
        lat: 1.4019,
        lng: 110.3144,
      },
      {
        nome: "Sarawak Cultural Village",
        testo: "Un villaggio-museo con le case tradizionali dei diversi gruppi etnici del Sarawak, con dimostrazioni di artigianato e danze.",
        come: "In bus o tour da Kuching, verso Damai.",
        quando: "Al mattino.",
        tempo: "mezza giornata",
        consiglio: "È una ricostruzione: va visto come introduzione, non al posto di una longhouse vera.",
        orari: "Tutti i giorni 9-17.",
        url: "https://scv.com.my",
        lat: 1.7498,
        lng: 110.3168,
      },
      {
        nome: "Grotte di Niah",
        testo: "Grotte enormi nel nord del Sarawak con resti umani di circa 40.000 anni fa, pitture rupestri di circa 1.200 anni nella Painted Cave e raccoglitori di nidi di rondine al lavoro sulle pareti. Dal 2024 sono patrimonio UNESCO.",
        come: "Da Miri in auto, poi una passerella nella foresta.",
        quando: "Al mattino.",
        tempo: "mezza giornata",
        consiglio: "Si raggiungono con una deviazione dal nord: valutare il tempo.",
        costo: "Ingresso al parco 20 RM per gli stranieri adulti, circa 4 €.",
        lat: 3.8141,
        lng: 113.7827,
      },
      {
        nome: "Fort Margherita",
        testo: "Il forte in stile castello inglese costruito nel 1879 da Charles Brooke, il secondo rajah bianco, per difendere Kuching dai pirati che risalivano il fiume. Prende il nome dalla moglie Margaret e oggi ospita la Brooke Gallery, sulla storia del Sarawak sotto la dinastia.",
        come: "In sampan dal lungofiume, pochi minuti, oppure in auto passando da Petra Jaya.",
        quando: "Al mattino o nel tardo pomeriggio.",
        tempo: "1 ora e mezza",
        lat: 1.5606,
        lng: 110.3494,
      },
      {
        nome: "Astana",
        testo: "Il palazzo costruito nel 1870 da Charles Brooke come regalo di nozze per la moglie, sulla riva nord del fiume, di fronte al lungofiume. È la residenza del governatore del Sarawak: dentro non si entra, ma i giardini sono aperti.",
        come: "In sampan dal lungofiume.",
        quando: "Di giorno; dal lungofiume si vede bene anche al tramonto.",
        tempo: "30 minuti",
        lat: 1.5636,
        lng: 110.346,
      },
      {
        nome: "Main Bazaar e Carpenter Street",
        testo: "Le strade più antiche del centro, parallele al fiume: Main Bazaar con le botteghe di artigianato e antiquariato nelle shophouse, Carpenter Street con vecchi laboratori, kopitiam e piccoli templi cinesi.",
        come: "A piedi dal lungofiume.",
        quando: "Al mattino o nel tardo pomeriggio.",
        tempo: "1-2 ore",
        lat: 1.5588,
        lng: 110.3469,
      },
      {
        nome: "Tempio di Tua Pek Kong e Chinese History Museum",
        testo: "Il tempio cinese più antico di Kuching, all'estremità del lungofiume, e di fronte il piccolo museo sulla storia delle comunità cinesi del Sarawak. Insieme raccontano una parte della città che il lungofiume da solo non mostra.",
        come: "A piedi dal lungofiume.",
        quando: "Al mattino.",
        tempo: "45 minuti",
        lat: 1.5571,
        lng: 110.349,
      },
      {
        nome: "Ponte Darul Hana",
        testo: "Il ponte pedonale a forma di S sul fiume Sarawak, l'unico che unisce a piedi le due rive del centro. Porta dal lungofiume al palazzo dell'assemblea legislativa, con il grande tetto dorato, ed è illuminato la sera.",
        come: "A piedi dal lungofiume.",
        quando: "La sera.",
        tempo: "30 minuti",
        costo: "Gratuito.",
        lat: 1.5609,
        lng: 110.3456,
      },
      {
        nome: "Longhouse di Annah Rais",
        testo: "Una longhouse bidayuh nell'interno a sud di Kuching, vicino al confine con il Kalimantan, abitata dalle famiglie del villaggio e aperta ai visitatori, con la lunga veranda comune in bambù. Chi vuole può dormire in homestay.",
        come: "In auto o con un tour da Kuching, circa un'ora e mezza.",
        quando: "Di giorno, o con una notte.",
        tempo: "mezza giornata",
        lat: 1.1561,
        lng: 110.2654,
      },
      {
        nome: "Parco nazionale di Kubah",
        testo: "Un parco di 2.230 ettari sui monti Matang, a circa 20 km da Kuching, con foresta di dipterocarpi, palme, orchidee e moltissime rane. Dalla città, nelle giornate limpide, si vedono le sue tre cime di arenaria: Serapi, Selang e Sendok.",
        come: "In auto o Grab da Kuching.",
        quando: "Al mattino, oppure la sera per le rane con una guida.",
        tempo: "mezza giornata",
        lat: 1.6126,
        lng: 110.1966,
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Sarawak laksa a colazione",
          "Lungofiume, Main Bazaar e Carpenter Street",
          "Tempio di Tua Pek Kong e Chinese History Museum",
          "Borneo Cultures Museum nelle ore calde",
          "Sampan per Fort Margherita e rientro sul ponte Darul Hana al tramonto",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: come sopra",
          "Giorno 2: Bako con la barca del mattino, rientro nel pomeriggio e cena al mercato notturno",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: lungofiume, musei e Sarawak laksa a colazione",
          "Giorno 2: Bako con la barca del mattino, ritorno nel pomeriggio",
          "Giorno 3: Semenggoh al mattino, Sarawak Cultural Village al pomeriggio"
        ]
      },
      {
        titolo: "4 giorni",
        tappe: [
          "Come i 3 giorni, con il quarto per una longhouse o una escursione fuori città"
        ]
      }
    ],
    zone: [
      {
        nome: "Centro di Kuching (Waterfront)",
        perChi: "chi vuole fare tutto a piedi",
        testo: "Alberghi e guesthouse vicino al lungofiume e ai ristoranti. Comodissimo, rumoroso la sera."
      },
      {
        nome: "Dintorni di Bako",
        perChi: "chi vuole svegliarsi nella foresta",
        testo: "Pochi lodge vicino al parco, per vedere gli animali all'alba."
      },
      {
        nome: "Santubong e Damai",
        perChi: "chi vuole il mare e la montagna",
        testo: "Resort sulla penisola di Santubong, vicino al Sarawak Cultural Village e al monte Santubong. Comodi per le gite, lontani dalla città la sera.",
      }
    ],
    sapori: [
      {
        nome: "Sarawak laksa",
        testo: "Noodles in brodo di spezie e cocco con gamberi, pollo e uovo. È la colazione di Kuching ed è tra le cose migliori della Malesia."
      },
      {
        nome: "Kolo mee",
        testo: "Noodles conditi con carne e salsa, serviti a colazione."
      },
      {
        nome: "Midin",
        testo: "Una felce selvatica saltata con aglio, tipica del Sarawak."
      },
      {
        nome: "Pesce in foglia di banana",
        testo: "Pesce marinato e cotto in foglia, cucina dei dayak."
      }
    ],
    attenzioni: [
      "Il Sarawak ha una propria immigrazione: un nuovo timbro sul passaporto anche arrivando dalla penisola o dal Sabah.",
      "A Bako gli orari dipendono dalla marea: controllare prima.",
      "A Semenggoh gli oranghi non sono garantiti, soprattutto quando la foresta è piena di frutta.",
      "Scegliere con cura la longhouse: le esperienze vanno dalla visita costruita al soggiorno vero."
    ],
    gite: [
      {
        nome: "Penisola di Santubong e Damai",
        distanza: "circa 35 km, 40 minuti d'auto",
        testo: "Il monte Santubong, con un sentiero ripido fino in cima, le spiagge di Damai e il Sarawak Cultural Village. Al tramonto, nell'estuario, partono le uscite in barca per cercare i delfini dell'Irrawaddy.",
        come: "In Grab o con le navette dei resort.",
      },
      {
        nome: "Longhouse iban del Batang Ai o del Lemanak",
        distanza: "4-5 ore di strada a est, poi in barca",
        testo: "Le longhouse iban lungo i fiumi dell'interno: la vita comune sulla veranda, le risaie, la foresta. È l'esperienza che cambia di più secondo la comunità e l'operatore.",
        come: "Con un operatore che lavora con la comunità, almeno una notte.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Kuching?",
        risposta: "Tre: uno per la città e i musei, uno per Bako e uno per Semenggoh e il Sarawak Cultural Village. Con un quarto si aggiunge una longhouse o la penisola di Santubong.",
      },
      {
        domanda: "Come si arriva a Bako?",
        risposta: "In bus o Grab fino a Kampung Bako, circa 40 km, poi una ventina di minuti di barca. Gli orari delle barche dipendono dalla marea: il rientro va concordato prima di partire.",
      },
      {
        domanda: "A Semenggoh si vedono sicuramente gli oranghi?",
        risposta: "No: sono liberi e tornano alle piattaforme soprattutto quando la foresta offre poco. Tra novembre e marzo, nella stagione dei frutti, può non arrivare nessuno.",
      },
      {
        domanda: "Serve il passaporto tra Sabah e Sarawak?",
        risposta: "Sì. Il Sarawak ha un'immigrazione propria: all'arrivo si passa un controllo passaporti con un nuovo timbro, anche da Kota Kinabalu o dalla penisola.",
      },
      {
        domanda: "Cosa mangiare a Kuching?",
        risposta: "Il Sarawak laksa a colazione, il kolo mee e il midin, la felce di foresta saltata all'aglio. I posti giusti sono i kopitiam del centro, il mercato notturno e i food court sul fiume.",
      },
      {
        domanda: "Come si sceglie una longhouse?",
        risposta: "Informandosi sull'operatore: si va dalla visita costruita per i gruppi al soggiorno vero con una famiglia. Le longhouse del Batang Ai e del Lemanak richiedono almeno una notte.",
      },
    ],
    esperienzeSlugs: ['bako-nasiche'],
    tripSlugs: [],
    imageAlt: 'Il monte Santubong nella foschia oltre il fiume Sarawak, vicino a Kuching',
    immagine: '/images/borneo/kuching-bako.jpg',
  },
  {
    slug: 'gunung-mulu',
    paeseSlug: 'borneo',
    ordine: 7,
    nome: 'Gunung Mulu',
    tipologia: ['natura', 'grotte', 'trekking'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: false,
    immagine: '/images/borneo/gunung-mulu.jpg',
    imageAlt: 'I Pinnacles di Gunung Mulu: guglie di calcare grigio alte decine di metri tra la foresta pluviale e la nebbia',
    introduzione:
      'Un parco nazionale patrimonio UNESCO nell\'interno del Sarawak, raggiungibile di solito in aereo, con alcuni dei sistemi di grotte più grandi del pianeta. La Sarawak Chamber è tra le camere sotterranee più grandi conosciute, e quasi ogni sera dalla Deer Cave escono milioni di pipistrelli in formazioni a spirale.',
    percheAndarci: "Per le grotte, che per dimensioni non hanno paragoni al mondo, e per i Pinnacoli, lame di calcare alte decine di metri sul fianco della montagna, raggiungibili con un trekking molto impegnativo. La Sarawak Chamber è la camera sotterranea più grande conosciuta, e la Deer Cave ha un'imboccatura così ampia che l'uscita serale dei pipistrelli sembra una colonna di fumo scuro sopra la foresta. Al parco si arriva di solito in aereo e i posti letto sono pochi: si prenota prima il letto, poi il volo.",
    cosaVedere: [
      'La Deer Cave, con l\'uscita serale di milioni di pipistrelli',
      'La Lang Cave, ricca di concrezioni',
      'La Clearwater Cave e la Wind Cave, raggiungibili in barca lungo il fiume',
      'I Pinnacoli del Gunung Api, le lame di calcare sul versante della montagna',
      'La canopy walkway del parco, lunga 420 metri',
    ],
    cosaFare: [
      'Guardare al tramonto l\'uscita dei pipistrelli dalla Deer Cave, dall\'osservatorio apposito',
      'Il trekking di tre giorni ai Pinnacoli, con notte al campo base e una salita durissima su roccia e scale',
      'L\'adventure caving, per chi vuole entrare nelle parti non attrezzate',
      'La canopy walkway e i sentieri nella foresta intorno al quartier generale del parco',
    ],
    doveDormire:
      'Dentro il parco, nelle sistemazioni che gestisce il parco stesso, o in un resort esterno. Le possibilità sono poche e vanno prenotate in anticipo, perché i posti letto limitano di fatto il numero di visitatori.',
    doveMangiare: 'Il ristorante del parco e quello del resort, senza alternative. Come nelle altre tappe nella foresta, quello che serve va portato da fuori.',
    comeArrivare: "Di solito in aereo, con i voli interni da Miri, circa mezz'ora, e da Kota Kinabalu e Kuching: nessuna strada arriva al parco, l'alternativa è una lunga risalita in barca da Marudi. L'aeroporto è a pochi minuti dal quartier generale. Gli aerei sono piccoli e i posti pochi, ed è il motivo principale per cui questa tappa va organizzata prima di tutto il resto.",
    comeSpostarsi: 'A piedi lungo le passerelle del parco e in barca lungo il fiume per le grotte più lontane.',
    periodoMigliore:
      'tutto l\'anno, ma l\'uscita dei pipistrelli non è garantita: se al tramonto piove, restano dentro. Il trekking ai Pinnacoli è più sicuro nella stagione più asciutta.',
    costi: "ogni grotta e ogni escursione guidata si pagano a parte: Deer e Lang Cave 35 MYR, Clearwater e Wind Cave 70 MYR, canopy walk 55 MYR, Pinnacoli 465 MYR a persona (2026). Dormire nel parco costa 370-402 MYR a notte in due (circa 75-80 €), il dormitorio 80 MYR a letto, più 10 RM di tassa turistica per camera. Budget circa 40-60 € al giorno con dormitorio e tour principali; medio 100-150 € con camera nel parco; alto oltre 250 € con resort e caving avanzato. La voce più alta resta il volo.",
    erroriDaEvitare: [
      'Prenotare il volo prima dell\'alloggio: i posti dentro il parco sono limitati, e senza sistemazione non si va da nessuna parte',
      'Programmare una notte sola: tra voli e distanze interne resterebbe poco tempo',
      'Iscriversi al trekking dei Pinnacoli sottovalutandolo: è una salita molto impegnativa su roccia e scale a pioli, con limiti di tempo fissati dalle guide',
      'Contare sull\'uscita dei pipistrelli: se piove non escono, e succede spesso',
    ],
    luoghi: [
      {
        nome: "Deer Cave e uscita dei pipistrelli",
        testo: "Il passaggio di grotta più grande del mondo, largo tra 120 e 150 metri. Al tramonto circa tre milioni di pipistrelli escono a spirale verso la foresta, come una colonna di fumo.",
        come: "A piedi dal quartier generale del parco su passerella. Si vede la Deer Cave con un tour insieme alla Lang Cave; l'uscita dei pipistrelli si osserva da una piattaforma.",
        quando: "Al tramonto. Se piove i pipistrelli non escono.",
        tempo: "mezza giornata",
        url: "https://mulupark.com/deer-lang/",
        consiglio: "Non pianificare l'uscita come l'unica sera: con la pioggia può saltare.",
        costo: "Tour guidato di Deer Cave e Lang Cave 35 MYR a persona, circa 7 € (2026), guida compresa.",
        orari: "Partenze tutti i giorni alle 14 o alle 14:30 dal quartier generale; l'uscita dei pipistrelli può cominciare dopo le 17. Il percorso totale è di 9 km, i primi 3 su passerella quasi piana.",
        lat: 4.0271,
        lng: 114.8286,
      },
      {
        nome: "Lang Cave",
        testo: "Una grotta più piccola e ricca di concrezioni, stalattiti e stalagmiti illuminate.",
        come: "Con tour guidato dal quartier generale.",
        quando: "Nel pomeriggio, con il tour delle 14.",
        tempo: "1 ora e mezza",
        consiglio: "Si abbina alla Deer Cave nello stesso tour.",
        costo: "Compresa nel tour con la Deer Cave, 35 MYR (2026).",
        lat: 4.0243,
        lng: 114.8252,
      },
      {
        nome: "Clearwater Cave e Wind Cave",
        testo: "Grotte raggiungibili in barca lungo il fiume. La Clearwater è il sistema di grotte più lungo del sud-est asiatico, con oltre 227 km di gallerie esplorate (2018); la Wind Cave ha fresche gallerie con formazioni.",
        come: "In barca dal quartier generale, poi a piedi con una guida.",
        quando: "Al mattino.",
        tempo: "mezza giornata",
        url: "https://mulupark.com/clearwater-winds/",
        consiglio: "Portare un costume: nelle pozze del fiume ci si può bagnare.",
        costo: "70 MYR a persona, circa 14 € (2026), con guida e longboat; cibo e acqua da portare.",
        orari: "Tutti i giorni, partenze alle 8:45 e alle 9:15; circa 4 ore.",
        lat: 4.065,
        lng: 114.8314,
      },
      {
        nome: "Pinnacoli del Gunung Api",
        testo: "Lame di calcare alte fino a 50 metri sul fianco del Gunung Api. L'ultimo tratto sale per 2,4 km e circa 1.200 metri di dislivello fino al belvedere, su roccia e scale a pioli: un trekking molto impegnativo, sconsigliato sotto i 16 anni.",
        come: "Solo con guida del parco: tre giorni e due notti, con un tratto in barca, una lunga camminata fino al Camp 5 e l'ultima salita ripidissima tra corde e scale.",
        quando: "Nella stagione più asciutta.",
        tempo: "3 giorni, 2 notti",
        consiglio: "Sottovalutarlo è l'errore più comune: serve allenamento.",
        costo: "465 MYR a persona, circa 93 €, con guida, barca e campo (2026); minimo tre partecipanti, in uno o due si paga molto di più.",
        orari: "Partenza alle 9:15 dal quartier generale; la salita comincia verso le 6:30 del secondo giorno.",
        url: "https://mulupark.com/pinnacles/",
      },
      {
        nome: "Canopy skywalk",
        testo: "Una passerella sospesa di 420 metri, a 25 metri d'altezza tra le chiome della foresta.",
        come: "A piedi dal quartier generale, solo con guida.",
        quando: "Al mattino presto.",
        tempo: "1 ora",
        consiglio: "Combinarla con una camminata in foresta.",
        costo: "55 MYR a persona, circa 11 €, guida compresa (2026).",
        orari: "Partenze alle 7, 8:30, 10, 10:30 e 12:30; circa 2 ore.",
        url: "https://mulupark.com/canopy-walk/",
        lat: 4.0326,
        lng: 114.819,
      },
      {
        nome: "Batu Bungan",
        testo: "Un insediamento penan sul fiume Melinau, prima tappa del giro in barca verso la Wind Cave e la Clearwater, con un piccolo mercato di artigianato.",
        come: "Con il tour in barca di Clearwater e Wind Cave.",
        quando: "Al mattino; il mercato è chiuso la domenica.",
        tempo: "30 minuti",
        lat: 4.0536,
        lng: 114.8186,
      },
      {
        nome: "Racer Cave",
        testo: "Una grotta di adventure caving di livello intermedio, che prende il nome dai serpenti racer che dentro cacciano pipistrelli e rondini. Si cammina, ci si arrampica con le corde e si attraversano tratti senza luce.",
        come: "Solo con guida del parco, su prenotazione; età minima 12 anni.",
        quando: "Tutto l'anno.",
        costo: "165 MYR a persona, circa 33 € (2026).",
        lat: 4.0585,
        lng: 114.8279,
        url: "https://mulupark.com/racer-cave/",
      },
      {
        nome: "Sarawak Chamber",
        testo: "La camera sotterranea più grande conosciuta, nella grotta di Gua Nasib Bagus. Ci si arriva con tre ore di sentiero fino all'imboccatura, poi un canale d'acqua di circa 900 metri e un traverso su corda, con notte obbligatoria al Camp 1.",
        come: "Su prenotazione, gruppi da 3 a 6 persone, età minima 16 anni; bisogna saper nuotare e dimostrare esperienza in grotte non attrezzate.",
        quando: "Solo con acqua bassa: con il livello alto la guida annulla l'uscita.",
        tempo: "2 giorni, 1 notte",
        costo: "315 MYR a persona, circa 63 € (2026).",
        lat: 4.0719,
        lng: 114.8768,
        url: "https://mulupark.com/sarawak-chamber-overnight-at-camp-1/",
      },
      {
        nome: "Cascata di Paku",
        testo: "Un sentiero nella foresta dal quartier generale fino a una piccola cascata con una pozza dove fare il bagno. È la camminata libera più semplice del parco.",
        come: "A piedi dal quartier generale, su sentiero segnato.",
        quando: "Al mattino, prima dei tour delle grotte.",
        tempo: "mezza giornata",
        lat: 4.037,
        lng: 114.8293,
      },
      {
        nome: "Night walk",
        testo: "Un'uscita guidata con la torcia nella foresta intorno al quartier generale: insetti stecco, rane, ragni e serpenti, tutto a pochi metri dalle passerelle.",
        come: "Con guida del parco.",
        quando: "Dopo cena.",
        tempo: "1-2 ore",
        costo: "35 MYR a persona, circa 7 € (2026).",
        orari: "Partenze alle 19 o alle 19:30, secondo il tempo.",
        url: "https://mulupark.com/night-walk/",
      }
    ],
    programmi: [
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: arrivo in aereo, Deer Cave, Lang Cave e uscita dei pipistrelli",
          "Giorno 2: barca per Clearwater Cave e Wind Cave, canopy skywalk",
          "Giorno 3: mattina libera e volo di rientro"
        ]
      },
      {
        titolo: "5 giorni con i Pinnacoli",
        tappe: [
          "Giorno 1: arrivo in aereo, Deer Cave, Lang Cave e uscita dei pipistrelli",
          "Giorni 2-4: trekking dei Pinnacoli con due notti al Camp 5 e la barca sul Melinau",
          "Giorno 5: canopy walk al mattino e volo di rientro",
        ],
      }
    ],
    zone: [
      {
        nome: "Dentro il parco (vicino al quartier generale)",
        perChi: "tutti: i posti letto sono pochi",
        testo: "Lodge, ostello e un resort vicino all'ingresso. Si prenota prima il letto, poi il volo.",
        fascia: "75-80 €",
      },
      {
        nome: "Dormitorio del parco",
        perChi: "chi viaggia da solo o con poco budget",
        testo: "Un dormitorio da 14 letti con bagno in comune e acqua calda, colazione compresa: 80 MYR a letto a notte (2026).",
      },
      {
        nome: "Resort fuori dal parco",
        perChi: "chi vuole piscina e spa",
        testo: "Un resort a cinque stelle a circa cinque minuti dal parco, con camere sulle passerelle nella foresta.",
      }
    ],
    sapori: [
      {
        nome: "Cucina del lodge",
        testo: "Pasti semplici, con riso, pesce e verdure."
      }
    ],
    attenzioni: [
      "Non ci sono strade: si arriva in aereo (o con una lunga risalita in barca da Marudi) e i posti letto nel parco sono pochi. Prenotare prima l'alloggio, poi il volo.",
      "L'uscita dei pipistrelli non è garantita: se piove, restano dentro.",
      "Il trekking dei Pinnacoli è duro: roccia e scale a pioli, con limiti di tempo.",
      "Una notte sola non basta: tra voli e distanze resterebbe poco tempo."
    ],
    gite: [
      {
        nome: "Niah National Park",
        distanza: "circa 2 ore d'auto da Miri",
        testo: "Le grotte con resti umani di circa 40.000 anni fa e le pitture della Painted Cave, patrimonio UNESCO dal 2024. Ha senso con una notte a Miri tra l'arrivo e il volo per il Mulu.",
        come: "In auto da Miri, prima o dopo il volo per il Mulu.",
      },
      {
        nome: "Miri",
        distanza: "circa 30 minuti di volo",
        testo: "La città da cui partono quasi tutti i voli per il parco e la base per Niah. Conviene una notte qui quando gli orari dei voli non combaciano.",
        come: "Con i voli interni dal Mulu.",
      },
    ],
    faq: [
      {
        domanda: "Come si arriva al Gunung Mulu?",
        risposta: "In aereo, di solito da Miri con circa mezz'ora di volo, oppure da Kota Kinabalu e Kuching. Non ci sono strade: l'alternativa è una lunga risalita in barca da Marudi.",
      },
      {
        domanda: "Quanti giorni servono al Mulu?",
        risposta: "Tre per le grotte principali e la canopy walk; cinque se si aggiunge il trekking dei Pinnacoli, che dura tre giorni e due notti.",
      },
      {
        domanda: "Quanto costano i tour delle grotte?",
        risposta: "Deer e Lang Cave 35 MYR a persona, Clearwater e Wind Cave 70 MYR con la barca, canopy walk 55 MYR (2026). Tutte le attività si fanno con le guide del parco.",
      },
      {
        domanda: "L'uscita dei pipistrelli si vede sempre?",
        risposta: "No. Comincia di solito dopo le 17, ma con la pioggia i pipistrelli restano dentro: conviene avere almeno due sere a disposizione.",
      },
      {
        domanda: "Il trekking dei Pinnacoli è per tutti?",
        risposta: "No: 2,4 km e circa 1.200 metri di dislivello su roccia e scale, con discese che spesso durano cinque ore o più. Il parco lo sconsiglia sotto i 16 anni e chiede almeno tre partecipanti.",
      },
      {
        domanda: "Dove si dorme al Mulu?",
        risposta: "Dentro il parco, in bungalow, longhouse e un dormitorio gestiti dal parco, oppure in un resort a cinque minuti. I posti sono pochi: si prenota l'alloggio prima del volo.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: [],
  },
]
