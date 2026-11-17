import type { GuidaMeraviglia } from '../index'

export const guida: GuidaMeraviglia = {
  luoghi: [
    {
      nome: 'Taj Mahal',
      testo:
        'Il mausoleo di marmo bianco che Shah Jahan fece costruire per la moglie Mumtaz Mahal, morta nel 1631. La simmetria è totale: giardino, vasche, moschea e foresteria si specchiano ai lati. Da vicino il marmo è intarsiato di fiori composti con decine di pietre dure, che si vedono solo sulla piattaforma.',
      come: "Le auto non possono avvicinarsi: dai parcheggi si prosegue in tuk-tuk elettrico, in golf cart o a piedi. Gli ingressi principali sono due, est e ovest, con controlli di sicurezza. Le guide autorizzate hanno il tesserino.",
      quando: "All'apertura, con il biglietto comprato online la sera prima: entro le nove i cortili sono pieni. Il tramonto è l'alternativa, con più gente.",
      tempo: '2-3 ore',
      costo: "1.100 rupie (circa 11 €) per gli stranieri, più 200 (circa 2 €) per l'interno del mausoleo; 50 rupie in meno online, gratis sotto i 15 anni (2026)",
      orari: "Da mezz'ora prima dell'alba a mezz'ora prima del tramonto; chiuso il venerdì.",
      lat: 27.1751,
      lng: 78.0421,
      url: 'https://www.tajmahal.gov.in/',
      consiglio: 'Ai controlli ci sono file: entrare con il minimo indispensabile, senza zaini, accorcia i tempi.',
    },
    {
      nome: 'Museo del Taj',
      testo:
        'Un piccolo museo dentro il complesso, nel padiglione sul lato ovest del giardino. Espone miniature di Shah Jahan e Mumtaz Mahal, disegni del mausoleo, calligrafie e piatti di celadon che, si diceva, cambiavano colore a contatto con il veleno.',
      come: 'Si entra con il biglietto del Taj, senza supplemento.',
      quando: 'A metà visita, quando il sole è alto sul marmo.',
      tempo: '30 minuti',
      costo: 'Incluso nel biglietto del Taj Mahal',
      orari: 'Chiuso il venerdì, come il Taj.',
      lat: 27.1738,
      lng: 78.0408,
      url: 'https://www.tajmahal.gov.in/',
    },
    {
      nome: 'Mehtab Bagh',
      testo:
        'Il giardino moghul sulla riva nord della Yamuna, allineato esattamente con il Taj. Da qui il mausoleo si vede di fronte, oltre il fiume, senza folla e con la luce del tramonto alle spalle di chi guarda.',
      come: "In tuk-tuk dall'Itimad-ud-Daulah, circa 15 minuti. Il belvedere sul fiume è in fondo al giardino.",
      quando: 'Al tramonto, e il venerdì, quando il Taj è chiuso.',
      tempo: '1 ora',
      costo: '300 rupie (circa 3 €) per gli stranieri (2026)',
      orari: "Tutti i giorni dall'alba al tramonto.",
      lat: 27.1797,
      lng: 78.0425,
      url: 'https://www.tajmahal.gov.in/',
    },
    {
      nome: 'Forte di Agra',
      testo:
        "La cittadella in arenaria rossa di Akbar, poi ampliata con i padiglioni di marmo di Shah Jahan, che vi passò gli ultimi anni prigioniero del figlio. Dal Musamman Burj si vede il Taj lungo il fiume. È patrimonio UNESCO a sé.",
      come: "Ingresso dall'Amar Singh Gate, a circa 2,5 km dal Taj, in tuk-tuk. Una guida autorizzata aiuta a capire chi ha costruito cosa.",
      quando: 'La mattina o il primo pomeriggio, prima del Taj al tramonto.',
      tempo: '2 ore',
      costo: '650 rupie (circa 6,5 €) per gli stranieri, 600 il venerdì o nello stesso giorno del Taj (2026)',
      orari: "Tutti i giorni dall'alba al tramonto.",
      lat: 27.1795,
      lng: 78.0211,
      url: 'https://www.tajmahal.gov.in/',
    },
    {
      nome: 'Itimad-ud-Daulah',
      testo:
        'La tomba che Nur Jahan fece costruire per il padre tra il 1622 e il 1628, sulla riva opposta della Yamuna. In marmo bianco intarsiato di pietre dure, segna il passaggio dalle tombe moghul in arenaria rossa al marmo del Taj: per questo la chiamano «piccolo Taj».',
      come: 'In tuk-tuk dal Forte, attraversando il ponte, circa 20 minuti. Si visita da soli.',
      quando: 'A qualsiasi ora, c\'è sempre poca gente; aperto anche il venerdì.',
      tempo: '45 minuti',
      costo: '310 rupie (circa 3 €) per gli stranieri, 300 il venerdì o nello stesso giorno del Taj (2026)',
      orari: "Tutti i giorni dall'alba al tramonto.",
      lat: 27.1929,
      lng: 78.0311,
      url: 'https://www.tajmahal.gov.in/',
      consiglio: 'Guardare da vicino gli intarsi: qui sono state provate le decorazioni che poi sono finite sul Taj.',
    },
    {
      nome: 'Chini ka Rauza',
      testo:
        'La tomba del poeta e ministro persiano Afzal Khan, morto nel 1639, sulla riva est della Yamuna. Era rivestita di piastrelle smaltate in stile persiano, di cui restano frammenti blu, verdi e gialli: un caso unico ad Agra.',
      come: "In tuk-tuk, a un chilometro a nord dell'Itimad-ud-Daulah, sulla stessa strada.",
      quando: "Insieme all'Itimad-ud-Daulah e a Mehtab Bagh.",
      tempo: '20 minuti',
      costo: 'Ingresso libero',
      lat: 27.1965,
      lng: 78.033,
    },
    {
      nome: 'Jama Masjid di Agra',
      testo:
        'La moschea del venerdì che Shah Jahan dedicò nel 1648 alla figlia Jahanara, di fronte al Forte, con le cupole a strisce di arenaria rossa e marmo bianco. Intorno si stendono i mercati della città vecchia, come il Kinari Bazar.',
      come: 'In tuk-tuk dal Forte, 5 minuti. Scarpe tolte, spalle e gambe coperte.',
      quando: 'Fuori dagli orari di preghiera, mai il venerdì a mezzogiorno.',
      tempo: '30 minuti',
      costo: 'Ingresso libero',
      lat: 27.1823,
      lng: 78.0151,
    },
    {
      nome: 'Tomba di Akbar a Sikandra',
      testo:
        "Il mausoleo dell'imperatore Akbar, costruito dal figlio Jahangir tra il 1605 e il 1613 a circa 8 km dal centro, con una porta monumentale intarsiata di marmo e un grande giardino intorno.",
      come: 'In auto o tuk-tuk verso nord, sulla strada per Delhi. Si visita da soli.',
      quando: 'Arrivando da Delhi in auto, prima di entrare in città; aperta anche il venerdì.',
      tempo: '1 ora',
      costo: '310 rupie (circa 3 €) per gli stranieri, 300 il venerdì o nello stesso giorno del Taj (2026)',
      orari: "Tutti i giorni dall'alba al tramonto.",
      lat: 27.2204,
      lng: 77.9503,
      url: 'https://www.tajmahal.gov.in/',
    },
    {
      nome: 'Fatehpur Sikri',
      testo:
        'La capitale che Akbar costruì tra il 1571 e il 1585 e abbandonò poco dopo. Palazzi, cortili e la grande moschea con la Buland Darwaza sono rimasti quasi intatti, in arenaria rossa.',
      come: "A circa 37 km, un'ora d'auto, sulla strada per Jaipur o Ranthambore. Il complesso reale ha il biglietto; nella moschea si entra senza scarpe.",
      quando: 'Al mattino, prima che il cortile di arenaria si scaldi; aperta anche il venerdì.',
      tempo: '2 ore',
      costo: '610 rupie (circa 6 €) per gli stranieri, 600 il venerdì o nello stesso giorno del Taj (2026)',
      orari: "Tutti i giorni dall'alba al tramonto.",
      lat: 27.094,
      lng: 77.665,
      url: 'https://www.tajmahal.gov.in/',
      consiglio: 'Nel cortile della moschea si viene avvicinati da venditori e finte guide: un no deciso e si prosegue.',
    },
    {
      nome: 'Ram Bagh',
      testo:
        'Considerato il più antico giardino moghul dell\'India, legato a Babur, il fondatore della dinastia, negli anni Venti del Cinquecento. Oggi è un giardino a terrazze con canali e padiglioni, poco curato ma quasi sempre vuoto.',
      come: 'In tuk-tuk lungo la riva est, dopo Chini ka Rauza.',
      quando: 'La mattina o il tardo pomeriggio.',
      tempo: '30 minuti',
      costo: '300 rupie (circa 3 €) per gli stranieri (2026)',
      orari: "Tutti i giorni dall'alba al tramonto.",
      lat: 27.2035,
      lng: 78.0382,
      url: 'https://www.tajmahal.gov.in/',
    },
  ],
  programmi: [
    {
      titolo: 'Mezza giornata',
      tappe: [
        "Taj Mahal all'apertura, con il biglietto online e l'interno del mausoleo",
        'Museo del Taj',
        'Forte di Agra in tarda mattinata',
      ],
    },
    {
      titolo: '1 giorno',
      tappe: [
        'Forte di Agra in mattinata',
        'Itimad-ud-Daulah e Chini ka Rauza sulla riva est',
        'Pranzo e riposo in hotel a Taj Ganj',
        'Taj Mahal nel tardo pomeriggio, fino alla chiusura',
      ],
    },
    {
      titolo: '2-3 giorni',
      tappe: [
        'Giorno 1: Forte di Agra, Jama Masjid e Kinari Bazar, tramonto da Mehtab Bagh',
        "Giorno 2: Taj Mahal all'alba con il museo, poi riva est con Itimad-ud-Daulah, Chini ka Rauza e Ram Bagh",
        'Giorno 3: Sikandra, poi Fatehpur Sikri sulla strada per Jaipur',
        'Se uno dei giorni è venerdì: Forte e riva est quel giorno, il Taj in un altro',
      ],
    },
  ],
  biglietti: [
    {
      tipo: 'Taj Mahal, stranieri',
      prezzo: '1.100 rupie (circa 11 €), 1.050 online',
      include: 'Ingresso al complesso con giardini, moschea e museo; acqua e copriscarpe. Gratis sotto i 15 anni',
      dove: 'Online sul portale ASI o alle biglietterie degli ingressi est e ovest',
    },
    {
      tipo: 'Mausoleo principale',
      prezzo: '200 rupie (circa 2 €)',
      include: 'Ingresso nella sala dei cenotafi, da aggiungere al biglietto del complesso',
      dove: 'Insieme al biglietto del Taj, online o in biglietteria',
    },
    {
      tipo: 'Visita notturna',
      prezzo: 'Biglietto separato, da prenotare sul portale ASI',
      include: 'Mezz\'ora nel giardino in turni da massimo 50 persone, dalle 20 a mezzanotte, la notte di luna piena e le due prima e dopo',
      dove: 'Portale ASI, con prenotazione',
    },
    {
      tipo: 'Forte di Agra',
      prezzo: '650 rupie (circa 6,5 €), 600 il venerdì',
      include: 'Ingresso alla cittadella',
      dove: "Online sul portale ASI o all'Amar Singh Gate",
    },
    {
      tipo: 'Fatehpur Sikri',
      prezzo: '610 rupie (circa 6 €), 600 il venerdì',
      include: 'Complesso dei palazzi reali; la moschea è a ingresso libero',
      dove: 'Online sul portale ASI o in biglietteria',
    },
    {
      tipo: 'Itimad-ud-Daulah, Tomba di Akbar, Mehtab Bagh',
      prezzo: '300-310 rupie ciascuno (circa 3 €)',
      include: 'Ingresso al singolo monumento',
      dove: 'Online sul portale ASI o in biglietteria',
    },
  ],
  mesi: [
    { voto: 4, folla: 'alta', nota: "Freddo all'alba e nebbia che può coprire il Taj per un paio d'ore; folla delle vacanze." },
    { voto: 5, folla: 'alta', nota: 'Cieli limpidi e temperature miti. Nel 2027 il Ramadan inizia a febbraio, senza effetti sulla visita.' },
    { voto: 4, folla: 'media', nota: 'Si scalda a fine mese; mattine ancora piacevoli.' },
    { voto: 2, folla: 'media', nota: 'Si superano spesso i 35 °C: solo alba e tramonto.' },
    { voto: 1, folla: 'bassa', nota: 'Caldo estremo, spesso oltre i 40 °C; il marmo scotta a piedi scalzi.' },
    { voto: 1, folla: 'bassa', nota: 'Caldo fino all\'arrivo del monsone, a fine mese.' },
    { voto: 2, folla: 'bassa', nota: 'Monsone: afa altissima, ma cieli spesso drammatici e poca gente.' },
    { voto: 2, folla: 'bassa', nota: 'Piogge e umidità; la Yamuna è piena e Mehtab Bagh più verde.' },
    { voto: 3, folla: 'media', nota: 'Le piogge si diradano, resta caldo umido.' },
    { voto: 5, folla: 'alta', nota: 'Inizio dell\'alta stagione, con luce pulita e temperature buone.' },
    { voto: 5, folla: 'alta', nota: 'Il mese migliore per clima; cortili pieni dopo le nove. Il venerdì resta chiuso.' },
    { voto: 4, folla: 'alta', nota: 'Mattine fredde e prime nebbie; folla massima tra Natale e Capodanno.' },
  ],
  zone: [
    {
      nome: 'Taj Ganj',
      perChi: 'chi vuole il Taj a piedi',
      testo: 'I vicoli a sud del Taj, a 5-10 minuti dai cancelli: guesthouse economiche e terrazze con vista sulla cupola. Rumoroso, stretto e pieno di procacciatori.',
      fascia: '15-50 €',
    },
    {
      nome: 'Fatehabad Road',
      perChi: 'fascia media e alta',
      testo: "Il viale degli hotel di catena e di lusso, a 1-2 km dall'ingresso est. Più tranquillo e ordinato; serve un tuk-tuk per tutto.",
      fascia: '50-150 €',
    },
    {
      nome: 'Sadar Bazar e Agra Cantt',
      perChi: 'chi arriva e riparte in treno',
      testo: 'Il quartiere del Cantonment, vicino alla stazione Agra Cantt, con hotel di fascia media, negozi e ristoranti. A 15-20 minuti di tuk-tuk dal Taj.',
      fascia: '30-80 €',
    },
  ],
  gite: [
    {
      nome: 'Jaipur',
      distanza: '5-6 ore in auto con la sosta a Fatehpur Sikri',
      come: 'Auto con autista, oppure in treno.',
      testo: "La città rosa del Rajasthan, con il Forte di Amber, il Palazzo dei Venti e i bazar della città vecchia. È la tappa successiva più comune dopo Agra.",
      link: '/destinazioni/india/jaipur',
    },
    {
      nome: 'Ranthambore',
      distanza: '5-6 ore in auto, passando da Fatehpur Sikri',
      come: 'Auto con autista fino a Sawai Madhopur.',
      testo: 'Il parco nazionale delle tigri, con i safari in jeep o in canter tra laghi e rovine di un forte.',
      link: '/destinazioni/india/ranthambore',
    },
    {
      nome: 'Fatehpur Sikri e Bharatpur',
      distanza: '37 km a Fatehpur Sikri, altri 20 a Bharatpur',
      come: 'Auto con autista per la giornata, oppure in uscita verso Jaipur.',
      testo: "La città fantasma di Akbar al mattino e, d'inverno, il parco nazionale di Keoladeo a Bharatpur, una zona umida patrimonio UNESCO piena di uccelli, da girare in bicicletta o in risciò.",
    },
    {
      nome: 'Delhi',
      distanza: 'circa 1 ora e 40 minuti-2 ore in treno',
      come: 'Gatimaan Express o Vande Bharat da Agra Cantt; in auto 3-4 ore sulla Yamuna Expressway.',
      testo: 'Di solito è il punto di arrivo e partenza: la Delhi moghul del Forte Rosso e della Tomba di Humayun completa bene la visita ad Agra.',
      link: '/destinazioni/india/delhi',
    },
  ],
  faq: [
    {
      domanda: 'Il Taj Mahal è chiuso il venerdì?',
      risposta: 'Sì, ogni venerdì. Gli altri monumenti di Agra restano aperti a tariffa ridotta, e il Taj si può guardare dal giardino di Mehtab Bagh, sull\'altra riva.',
    },
    {
      domanda: "Meglio il Taj Mahal all'alba o al tramonto?",
      risposta: "All'alba c'è meno gente e il marmo passa dal grigio al rosa; al tramonto la luce è calda ma la folla è maggiore. Chi dorme ad Agra può fare entrambi, con due biglietti.",
    },
    {
      domanda: 'Bisogna prenotare il biglietto del Taj Mahal?',
      risposta: "Non è obbligatorio, ma online sul portale ASI costa 50 rupie in meno e si evita la coda in biglietteria. L'ingresso al mausoleo si aggiunge allo stesso biglietto.",
    },
    {
      domanda: 'Si può fare il Taj Mahal in giornata da Delhi?',
      risposta: "Sì, con il treno veloce del mattino e il rientro la sera, ma si arriva quando i cortili sono già pieni. Una notte ad Agra permette l'ingresso all'alba.",
    },
    {
      domanda: 'Cosa non si può portare al Taj Mahal?',
      risposta: 'Cibo, treppiedi, droni, tabacco e oggetti come coltelli restano fuori; borse grandi e zaini allungano i controlli. Acqua e copriscarpe sono dati con il biglietto per stranieri.',
    },
    {
      domanda: 'Come evitare le finte guide e i negozi di marmo?',
      risposta: "Non avviare conversazioni con chi si offre ai cancelli senza tesserino e comprare il biglietto solo online o in biglietteria. Le botteghe dove portano autisti e tuk-tuk pagano una commissione, che finisce nel prezzo.",
    },
  ],
  galleria: [
    {
      src: '/images/india/agra-taj-mahal-alba-riccardo.jpg',
      alt: "Il Taj Mahal simmetrico all'alba, con la vasca d'acqua e i cipressi del giardino",
    },
    {
      src: '/images/india/agra-taj-mahal-portale-riccardo.jpg',
      alt: "Il Taj Mahal incorniciato dall'arco scuro del portale d'ingresso, sagome di visitatori in controluce",
    },
    {
      src: '/images/india/agra-taj-mahal-cupola-riccardo.jpg',
      alt: 'La cupola del Taj Mahal che spunta dietro un pilastro scuro in controluce',
    },
    {
      src: '/images/india/agra-minareto-tramonto-riccardo.jpg',
      alt: 'Un minareto di marmo del Taj Mahal al tramonto, con il sole arancio basso sugli alberi e visitatori sulla piattaforma',
    },
    {
      src: '/images/india/agra-forte-archi-riccardo.jpg',
      alt: 'Una fuga di archi polilobati in arenaria scolpita nel Forte di Agra, illuminati da una luce calda',
    },
    {
      src: '/images/india/agra-chhatri-tramonto-riccardo.jpg',
      alt: "Un chhatri in silhouette contro il cielo arancio del tramonto ad Agra, tra le chiome scure degli alberi",
    },
  ],
  destinazione: 'india/agra',
}
