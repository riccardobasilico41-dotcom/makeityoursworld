import type { Destinazione } from '@/lib/types'

// Destinazioni della Turchia per la guida "turchia-itinerario" (73), costruite su
// ricerca documentale. Nessuna visita diretta: miaEsperienza resta assente.
// Prezzi indicativi a ottobre 2026; i musei statali sono quotati in euro.

export const destinazioniTurchia: Destinazione[] = [
  {
    slug: 'istanbul',
    paeseSlug: 'turchia',
    ordine: 1,
    nome: 'Istanbul',
    tipologia: ['città', 'storia', 'cibo'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: false,
    introduzione:
      'L\'antica Bisanzio e Costantinopoli, divisa dal Bosforo tra Europa e Asia: la penisola storica di Sultanahmet, i quartieri di Beyoğlu e Karaköy, il lato asiatico di Kadıköy.',
    percheAndarci:
      'Per Santa Sofia, il Topkapı e la Süleymaniye, per i bazar, per i traghetti sul Bosforo e per una delle cucine di strada più ricche del Mediterraneo.',
    cosaVedere: [
      'Santa Sofia, con la visita delle gallerie superiori per i turisti',
      'La Moschea Blu e l\'Ippodromo',
      'La Cisterna Basilica',
      'Il palazzo Topkapı con l\'harem',
      'La moschea di Süleymaniye, capolavoro di Sinan',
      'Il Gran Bazar e il Bazar delle Spezie',
      'Chora (Kariye), con i mosaici bizantini riaperti nel 2024',
    ],
    cosaFare: [
      'Il traghetto pubblico sul Bosforo fino ad Anadolu Kavağı',
      'Attraversare in traghetto da Eminönü a Kadıköy per il mercato del lato asiatico',
      'Un hammam storico',
      'Il tramonto dalla torre di Galata o da una terrazza di Karaköy',
    ],
    doveDormire:
      'Sultanahmet per stare a piedi dai monumenti, Karaköy e Galata per locali e vita serale, Kadıköy per un\'Istanbul più locale. Economiche: piccoli hotel di Sultanahmet e Fatih · fascia media: boutique hotel di Karaköy · lusso: hotel storici sul Bosforo.',
    doveMangiare:
      'Balık ekmek (panino di pesce) a Eminönü, kebab di Adana e lahmacun nelle lokanta, meze e rakı nelle meyhane di Beyoğlu, colazione turca a Kadıköy, baklava da Karaköy Güllüoğlu.',
    comeArrivare: 'Aeroporto di Istanbul (IST), collegato dalla metro M11 e dagli autobus Havaist; aeroporto Sabiha Gökçen (SAW) sul lato asiatico.',
    comeSpostarsi:
      'Istanbulkart ricaricabile per metro, tram T1, funicolari e traghetti; taxi con app BiTaksi o Uber, che a Istanbul chiama i taxi gialli.',
    periodoMigliore: 'aprile-giugno e settembre-novembre',
    costi:
      'Santa Sofia 25 € per i turisti; Topkapı con harem intorno ai 50 €; Museum Pass Istanbul intorno ai 105 € per 5 giorni (indicativi, quotati in euro).',
    erroriDaEvitare: [
      'Accettare l\'invito di uno sconosciuto a bere qualcosa in un locale: è la truffa del conto gonfiato, frequente a Taksim e Sultanahmet',
      'Raccogliere la spazzola del lustrascarpe caduta davanti a voi: è il pretesto per una lucidatura a pagamento',
      'Mangiare nei ristoranti di Sultanahmet senza prezzi esposti',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Santa Sofia e la Moschea Blu viste dal Bosforo al tramonto, Istanbul',
  },
  {
    slug: 'cappadocia',
    paeseSlug: 'turchia',
    ordine: 2,
    nome: 'Cappadocia',
    tipologia: ['paesaggio', 'trekking', 'storia'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: false,
    introduzione:
      'Un altopiano di tufo vulcanico scolpito dall\'erosione in camini delle fate, valli e pinnacoli, con chiese rupestri bizantine e città sotterranee.',
    percheAndarci:
      'Per le mongolfiere all\'alba, le chiese affrescate del museo all\'aperto di Göreme, le passeggiate nelle valli e le notti in un hotel scavato nella roccia.',
    cosaVedere: [
      'Il museo all\'aperto di Göreme e la Chiesa Oscura',
      'La cittadella di Uçhisar',
      'La Valle Rossa e la Valle Rosa al tramonto',
      'Paşabağ (valle dei Monaci) e la valle di Devrent',
      'Le città sotterranee di Derinkuyu e Kaymaklı',
      'La valle di Ihlara',
    ],
    cosaFare: [
      'Il volo in mongolfiera all\'alba',
      'Trekking nella Valle d\'Amore e nella Valle dei Piccioni',
      'Giro a cavallo o in quad al tramonto',
    ],
    doveDormire:
      'Göreme per comodità, Uçhisar e Ortahisar per la vista e la calma, Ürgüp per ristoranti e cantine. Economiche: pensioni di Göreme · fascia media: cave hotel di Göreme e Uçhisar · lusso: Argos in Cappadocia, Museum Hotel.',
    doveMangiare:
      'Testi kebab cotto nel vaso di terracotta, mantı (ravioli con yogurt), pide, i vini di Ürgüp e Uçhisar.',
    comeArrivare: 'Voli da Istanbul su Kayseri (ASR, 1 ora di transfer) o Nevşehir (NAV, 40 minuti); bus notturni da Istanbul (circa 10-11 ore).',
    comeSpostarsi: 'Auto a noleggio o tour giornalieri (Red Tour, Green Tour); i dolmuş collegano Göreme, Uçhisar, Avanos e Ürgüp.',
    periodoMigliore: 'aprile-giugno e settembre-ottobre; d\'inverno neve e paesaggi bellissimi, ma più voli in mongolfiera annullati',
    costi:
      'Mongolfiera indicativamente 180-350 € a persona secondo stagione; museo all\'aperto di Göreme intorno ai 20-25 €; Derinkuyu intorno ai 15-20 €; Museum Pass Cappadocia intorno ai 45-50 € (indicativi).',
    erroriDaEvitare: [
      'Prenotare la mongolfiera per l\'ultima mattina: i voli si annullano per vento e conviene avere almeno un giorno di riserva',
      'Scegliere l\'operatore solo sul prezzo: conta la licenza e il numero di passeggeri per cesta',
      'Visitare il museo all\'aperto a mezzogiorno, quando arrivano tutti i gruppi',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Mongolfiere colorate sopra le valli della Cappadocia all\'alba',
  },
  {
    slug: 'pamukkale',
    paeseSlug: 'turchia',
    ordine: 3,
    nome: 'Pamukkale e Hierapolis',
    tipologia: ['paesaggio', 'archeologia', 'terme'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: false,
    introduzione:
      'Una collina di terrazze di travertino bianco formate da sorgenti calde, sopra le quali sorgono le rovine della città romana di Hierapolis.',
    percheAndarci:
      'Per camminare a piedi nudi nelle vasche calcaree, il teatro romano di Hierapolis e la piscina antica di Cleopatra, con colonne sommerse.',
    cosaVedere: [
      'Le terrazze di travertino',
      'Il teatro e la necropoli di Hierapolis',
      'La piscina antica (Antique Pool), con ingresso a parte',
      'Il martyrion di San Filippo',
    ],
    cosaFare: ['Salire a piedi nudi dal basso al tramonto', 'Un bagno nella piscina antica'],
    doveDormire: 'Il villaggio di Pamukkale, ai piedi delle terrazze, con pensioni e piccoli hotel con piscina termale.',
    comeArrivare: 'Aeroporto di Denizli Çardak, poi 1 ora di strada; bus da Göreme (notturno, circa 9-10 ore), da Selçuk (3 ore) e da Antalya (4 ore).',
    comeSpostarsi: 'A piedi; dolmuş per Denizli.',
    periodoMigliore: 'primavera e autunno; d\'estate le terrazze bianche abbagliano e scottano',
    costi: 'Ingresso Pamukkale-Hierapolis intorno ai 30 €; piscina antica a parte, intorno ai 10-15 € (indicativi).',
    erroriDaEvitare: [
      'Salire a mezzogiorno d\'estate: il riflesso del bianco è accecante',
      'Aspettarsi tutte le vasche piene: molte sono asciutte a rotazione per preservare il travertino',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Le terrazze bianche di travertino di Pamukkale con l\'acqua azzurra nelle vasche',
  },
  {
    slug: 'efeso',
    paeseSlug: 'turchia',
    ordine: 4,
    nome: 'Efeso, Selçuk e Şirince',
    tipologia: ['archeologia', 'borghi'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: false,
    introduzione:
      'La città romana meglio conservata del Mediterraneo orientale, con la biblioteca di Celso e il grande teatro, a pochi chilometri dalla cittadina di Selçuk e dal villaggio collinare di Şirince.',
    percheAndarci:
      'Per percorrere la via dei Cureti fino alla biblioteca di Celso, vedere gli affreschi e i mosaici delle case a terrazza e passare una sera tra le case greche di Şirince.',
    cosaVedere: [
      'La biblioteca di Celso e il grande teatro di Efeso',
      'Le case a terrazza, con biglietto a parte',
      'La basilica di San Giovanni e il castello di Selçuk',
      'Il museo di Efeso a Selçuk',
      'La casa della Madonna (Meryem Ana Evi)',
      'Afrodisia, sulla strada da Pamukkale',
    ],
    cosaFare: ['Entrare dalla porta alta e scendere verso la biblioteca', 'Assaggiare i vini di frutta a Şirince'],
    doveDormire: 'Selçuk per comodità e prezzi, Şirince per la calma; Kuşadası per chi vuole il mare vicino.',
    comeArrivare: 'Aeroporto di Izmir (1 ora); treno Izmir-Selçuk; bus da Pamukkale.',
    comeSpostarsi: 'Taxi o dolmuş da Selçuk all\'ingresso alto di Efeso (pochi km); auto a noleggio.',
    periodoMigliore: 'aprile-giugno e settembre-ottobre, sempre all\'apertura',
    costi: 'Efeso intorno ai 40 €, case a terrazza intorno ai 15 € (indicativi, in euro).',
    erroriDaEvitare: [
      'Entrare a metà mattina in alta stagione, quando arrivano i passeggeri delle navi da crociera di Kuşadası',
      'Saltare le case a terrazza per risparmiare: sono la parte più bella del sito',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'La facciata della biblioteca di Celso a Efeso',
  },
  {
    slug: 'costa-licia',
    paeseSlug: 'turchia',
    ordine: 5,
    nome: 'Costa licia: Fethiye, Ölüdeniz, Kaş e Kekova',
    tipologia: ['mare', 'trekking', 'road trip'],
    giorniConsigliati: '4-5 giorni',
    visitataPersonalmente: false,
    introduzione:
      'Il tratto di costa tra Fethiye e Antalya, con calette di acqua turchese, tombe licie scavate nella roccia, il sentiero della Via Licia e le rovine sommerse di Kekova.',
    percheAndarci:
      'Per il mare più bello della Turchia, le spiagge di Ölüdeniz e Kaputaş, la sabbia di Patara, la gola di Saklıkent e le uscite in barca tra le isole.',
    cosaVedere: [
      'La laguna di Ölüdeniz e la Valle delle Farfalle',
      'Il villaggio abbandonato di Kayaköy',
      'La gola di Saklıkent',
      'Le rovine e la spiaggia di Patara',
      'La spiaggia di Kaputaş',
      'Le rovine sommerse di Kekova e il castello di Kaleköy (Simena)',
    ],
    cosaFare: [
      'Parapendio dal Babadağ su Ölüdeniz',
      'Una tappa della Via Licia',
      'Kayak o barca sopra la città sommersa di Kekova',
      'Immersioni e snorkeling a Kaş',
    ],
    doveDormire:
      'Fethiye o Ölüdeniz per la prima base, Kaş per la seconda (la più bella e vivace). Economiche: pensioni di Kaş · fascia media: hotel con vista mare · lusso: resort di Ölüdeniz e Kalkan.',
    doveMangiare: 'Pesce scelto al mercato di Fethiye e cucinato nei ristoranti intorno, gözleme nei villaggi, meze nelle taverne di Kaş.',
    comeArrivare: 'Aeroporti di Dalaman (per Fethiye) e Antalya (per Kaş e Kekova).',
    comeSpostarsi: 'Auto a noleggio; dolmuş tra le località principali; barche dal porto per le isole.',
    periodoMigliore: 'maggio-giugno e settembre-ottobre; luglio-agosto caldissimo e affollato',
    costi:
      'Gita in barca con pranzo indicativamente 25-45 €; parapendio intorno ai 100-150 €; Patara e Saklıkent intorno ai 5-15 € ciascuno (indicativi).',
    erroriDaEvitare: [
      'Fare la costa senza auto: tra un posto e l\'altro i dolmuş ci sono, ma le calette migliori restano fuori',
      'Andarci ad agosto senza prenotare: Kaş e Ölüdeniz si riempiono',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'La laguna turchese di Ölüdeniz vista dall\'alto, costa licia',
  },
  {
    slug: 'antalya',
    paeseSlug: 'turchia',
    ordine: 6,
    nome: 'Antalya',
    tipologia: ['città', 'mare', 'archeologia'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: false,
    introduzione:
      'La grande città della costa mediterranea, con il centro storico di Kaleiçi intorno al porto romano e un museo archeologico tra i migliori del Paese.',
    percheAndarci: 'Per chiudere il viaggio vicino all\'aeroporto, con Kaleiçi, il museo e le cascate di Düden; dintorni con Perge, Aspendos e Termessos.',
    cosaVedere: ['Kaleiçi e la porta di Adriano', 'Il Museo archeologico di Antalya', 'Le cascate di Düden', 'Il teatro di Aspendos e Perge'],
    cosaFare: ['Un bagno a Konyaaltı', 'La sera al porto vecchio'],
    doveDormire: 'Nelle case ottomane restaurate di Kaleiçi.',
    comeArrivare: 'Aeroporto di Antalya (AYT), con voli diretti dall\'Italia in stagione e da Istanbul tutto l\'anno.',
    comeSpostarsi: 'Tram e taxi in città; auto per i siti dei dintorni.',
    periodoMigliore: 'da aprile a novembre',
    costi: 'Museo archeologico e Aspendos intorno ai 15-20 € ciascuno (indicativi).',
    erroriDaEvitare: ['Restituire l\'auto a noleggio in un\'altra città senza aver verificato la tassa di sola andata'],
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Il porto antico di Kaleiçi ad Antalya con le scogliere sullo sfondo',
  },
]
