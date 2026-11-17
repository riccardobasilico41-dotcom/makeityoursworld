import type { GuidaMeraviglia } from '../index'

export const guida: GuidaMeraviglia = {
  destinazione: 'italia/roma',
  prezzi:
    "Colosseo, Foro Romano e Palatino (24 ore): 18 €, con primo e secondo livello del Colosseo, Foro e Palatino, senza arena né sotterranei. Only Arena: 18 €, con 20 minuti sul piano dell'arena più Foro e Palatino. Full Experience (2 giorni consecutivi): 24 € con arena, con sotterranei e arena (32 € con visita didattica) o con attico; 32 € con il Passaggio di Commodo. Forum Pass SUPER: 18 €, con Foro, Palatino e Fori Imperiali ma senza Colosseo. Ridotto a 2 € per i cittadini UE dai 18 anni al compimento dei 25. Ingresso gratuito la prima domenica del mese, il 25 aprile, il 2 giugno e il 4 novembre.",
  luoghi: [
    {
      nome: 'Colosseo: primo e secondo livello, attico',
      testo:
        "Il percorso ordinario passa per il primo e il secondo livello, con le terrazze panoramiche sull'arena e sull'Arco di Costantino, e per il Museo del Colosseo. Più in alto si sale solo con la Full Experience Attico: terzo livello, galleria intermedia e attico, con l'ascensore panoramico, da dove si capisce la vera altezza della cavea.",
      come:
        "Metro B fermata Colosseo, di fronte all'ingresso. Si entra solo nella fascia oraria prenotata, dopo i controlli di sicurezza, con il biglietto sullo smartphone e un documento d'identità.",
      quando:
        "Alla prima fascia del mattino o nelle ultime ore, quando i gruppi diminuiscono. D'estate le gradinate sono quasi senza ombra.",
      tempo: 'Massimo 75 minuti con il biglietto base, 90 con le Full Experience',
      costo: '18 € il biglietto base 24 ore; 24 € la Full Experience Attico (2026)',
      orari:
        "Tutti i giorni dalle 8:30. Dal 25 ottobre 2026 al 28 febbraio 2027 chiude alle 16:30, ultimo ingresso alle 15:30; d'estate chiude più tardi. Chiuso il 25 dicembre e il 1° gennaio.",
      url: 'https://colosseo.it/biglietti/colosseo-foro-romano-palatino/',
      lat: 41.8903,
      lng: 12.4922,
    },
    {
      nome: "Arena e sotterranei (ipogei)",
      testo:
        "Sotto il piano dell'arena correva una rete di corridoi, gabbie e montacarichi che faceva comparire all'improvviso animali e gladiatori. Oggi una parte del piano è ricostruita: ci si cammina sopra guardando le gradinate dal basso, come le vedevano i combattenti, e poi si scende negli ipogei.",
      come:
        "Solo con la Full Experience Sotterranei e Arena (o con Only Arena e Full Experience Arena per il solo piano). I sotterranei sono accessibili secondo disponibilità e i posti sono pochi.",
      quando: "Prenotare appena aprono le vendite, 30 giorni prima: sono i turni che finiscono per primi.",
      tempo: '1h30 compreso il resto del Colosseo; 20 minuti con Only Arena',
      costo: '24 €, 32 € con visita didattica; Only Arena 18 € (2026)',
      orari: "Ingresso solo all'ora prenotata, negli orari del Colosseo.",
      url: 'https://colosseo.it/en/tickets/full-experience-underground-arena/',
      lat: 41.8903,
      lng: 12.4922,
      consiglio:
        "È la parte del monumento che cambia di più la visita: se si può scegliere un solo extra, è questo.",
    },
    {
      nome: 'Arco di Costantino',
      testo:
        "L'arco trionfale più grande di Roma, dedicato nel 315 d.C. per la vittoria di Costantino su Massenzio. Molti rilievi sono presi da monumenti più antichi, di Traiano, Adriano e Marco Aurelio, e si riconoscono dallo stile diverso.",
      come: "Sta tra il Colosseo e l'inizio della via di San Gregorio; si guarda dall'esterno, attorno c'è una recinzione.",
      quando: 'Al mattino presto o al tramonto, con la luce radente sui rilievi.',
      tempo: '15 minuti',
      costo: 'Gratuito, si vede dalla piazza',
      orari: 'Visibile a qualsiasi ora',
      lat: 41.8897,
      lng: 12.4908,
    },
    {
      nome: 'Foro Romano',
      testo:
        "Il centro politico, religioso e commerciale della Roma antica: la Via Sacra, la Curia dove si riuniva il Senato, i templi di Saturno e dei Dioscuri, la Casa delle Vestali e la chiesa di Santa Maria Antiqua con i suoi affreschi. Senza una chiave di lettura sembra un campo di pietre; con una mappa o un'audioguida diventa leggibile.",
      come:
        "Incluso nel biglietto del Colosseo e nel Forum Pass SUPER. Si entra dall'Arco di Tito, da Largo della Salara Vecchia (via dei Fori Imperiali) o da via del Tulliano.",
      quando: "D'estate al mattino: il Foro ha pochissima ombra. Con il biglietto 24 ore si può fare nelle 24 ore prima o dopo il Colosseo; con le Full Experience anche il giorno prima o dopo.",
      tempo: '1h30-2 ore',
      costo: 'Compreso nei biglietti da 18 € (2026)',
      orari:
        "Dal 25 ottobre 2026 al 28 febbraio 2027 dalle 9 alle 16:30, ultimo ingresso alle 15:30; d'estate orario più lungo. Chiuso il 25 dicembre e il 1° gennaio.",
      url: 'https://colosseo.it/area/foro-romano/',
      lat: 41.8922,
      lng: 12.4852,
    },
    {
      nome: 'Palatino',
      testo:
        "La collina dove, secondo la tradizione, nacque Roma e dove gli imperatori costruirono i loro palazzi, dalla Domus Augustana alla Domus Tiberiana. È verde, alta e meno affollata del Foro, e dalle terrazze si guarda il Foro dall'alto da un lato e il Circo Massimo dall'altro.",
      come:
        "Con lo stesso ingresso del Foro, salendo dall'Arco di Tito, oppure dal cancello di via di San Gregorio. Dentro ci sono la Casa di Augusto (chiusa il lunedì), l'Aula Isiaca e il Museo Palatino.",
      quando: 'Nel pomeriggio, quando la luce scende sul Foro; molti lo saltano per stanchezza, conviene tenersi le energie.',
      tempo: '1-2 ore',
      costo: 'Compreso nei biglietti da 18 € (2026)',
      orari: 'Stessi orari del Foro Romano.',
      url: 'https://colosseo.it/area/palatino/',
      lat: 41.8883,
      lng: 12.4869,
      consiglio: 'La Casa di Livia è chiusa per restauri; la Casa di Augusto rientra tra i siti SUPER a capienza limitata.',
    },
    {
      nome: 'Fori Imperiali e Mercati di Traiano',
      testo:
        "Dopo il Foro Romano gli imperatori costruirono piazze nuove: i Fori di Cesare, Augusto, Nerva e Traiano, tagliati oggi da via dei Fori Imperiali. Sopra il Foro di Traiano salgono i Mercati, un complesso a più piani di botteghe e uffici in mattoni che ospita il Museo dei Fori Imperiali.",
      come:
        "Dalla strada si vedono gratis. Si scende nei Fori con il Forum Pass SUPER; i Mercati di Traiano hanno un biglietto a parte, con ingresso da via Quattro Novembre.",
      quando: 'Al tramonto la luce sui mattoni dei Mercati è la migliore.',
      tempo: '1-2 ore',
      costo: 'Forum Pass SUPER 18 €; Mercati di Traiano 15 € più 1 € di prevendita online (2026)',
      orari: 'Mercati di Traiano tutti i giorni 9:30-19:30, ultimo ingresso un\'ora prima; chiusi il 1° maggio e il 25 dicembre.',
      url: 'https://colosseo.it/biglietti/forum-pass-super/',
      lat: 41.8944,
      lng: 12.4856,
    },
    {
      nome: 'Domus Aurea e Colle Oppio',
      testo:
        "La reggia di Nerone, sepolta dopo la sua morte sotto le terme di Traiano e riscoperta nel Rinascimento, quando gli artisti si calavano dall'alto per copiarne le decorazioni. Si visita in un cantiere di scavo permanente, con la sala ottagona e una ricostruzione in realtà virtuale. Sopra c'è il parco del Colle Oppio, con i resti delle terme e la vista sul Colosseo.",
      come:
        "Ingresso da via della Domus Aurea, a pochi minuti a piedi dal Colosseo. Biglietto a parte, solo su prenotazione, a turni ogni 15 minuti.",
      quando: 'Solo venerdì, sabato e domenica. Chiusa la prima domenica del mese e in alcuni giorni del calendario del Parco.',
      costo: '26 € con percorso didattico e realtà virtuale; 18 € (ridotto 2 €) per i turni non guidati delle 12 e delle 17 (2026)',
      orari: 'Venerdì-domenica 9-16:30, ultimo ingresso alle 15:30 (orario fino al 28 febbraio 2027).',
      url: 'https://colosseo.it/biglietti/domus-aurea/',
      lat: 41.8914,
      lng: 12.4953,
      consiglio: "Dentro la temperatura è bassa tutto l'anno: serve una felpa anche d'estate.",
    },
    {
      nome: 'Circo Massimo',
      testo:
        "Il più grande edificio per spettacoli dell'antichità, dove si correvano le gare dei carri. Oggi è un lungo prato a forma di pista, sotto i ruderi dei palazzi imperiali del Palatino, che lo guardano dall'alto.",
      come: 'Metro B fermata Circo Massimo, oppure a piedi dal Colosseo lungo via di San Gregorio in circa 15 minuti.',
      quando: 'Al tramonto, con il Palatino illuminato di lato.',
      tempo: '20-30 minuti',
      costo: 'Il prato è a ingresso libero',
      lat: 41.8859,
      lng: 12.4857,
      consiglio: "Si abbina bene alle Terme di Caracalla e all'Aventino con il Giardino degli Aranci.",
    },
    {
      nome: 'Musei Capitolini',
      testo:
        "Il museo pubblico più antico del mondo, sulla piazza del Campidoglio disegnata da Michelangelo. Ci sono la Lupa, il Marco Aurelio originale a cavallo e i ritratti degli imperatori; dalla galleria del Tabularium si vede tutto il Foro Romano dall'alto.",
      come: 'A piedi dal Foro, salendo verso il Campidoglio, o da Piazza Venezia per la Cordonata. Biglietto online o in biglietteria.',
      quando: 'Nel tardo pomeriggio, dopo Foro e Palatino: il Tabularium al tramonto guarda il Foro con la luce migliore.',
      tempo: '2-3 ore',
      costo: '15 € per i non residenti, 16,50 € con la mostra in corso (2026)',
      orari: 'Tutti i giorni 9:30-19:30, ultimo ingresso alle 18:30. Chiusi il 1° maggio e il 25 dicembre.',
      url: 'https://www.museicapitolini.org/',
      lat: 41.8931,
      lng: 12.4828,
    },
    {
      nome: 'Domus Romane di Palazzo Valentini',
      testo:
        "Sotto un palazzo della Provincia, accanto alla Colonna Traiana, sono riemersi i pavimenti a mosaico e le pareti di due case aristocratiche di età imperiale. Proiezioni e luci ricostruiscono stanze, terme private e arredi: è il modo più immediato di capire come vivevano i ricchi romani.",
      come: 'Via Quattro Novembre, a due passi da Piazza Venezia. Visita a gruppi con orario fisso, da prenotare.',
      quando: "Prenotare almeno il giorno prima. Si presenta in biglietteria 15 minuti prima del turno.",
      tempo: '1 ora; 1h30 con la Colonna Traiana',
      costo: '15 € più 1,50 € di prenotazione (2026)',
      orari: 'Chiuse il martedì. Fino al 28 febbraio 2027 10-18, ultima visita alle 16:30.',
      url: 'https://www.palazzovalentini.it/',
      lat: 41.8967,
      lng: 12.4839,
    },
    {
      nome: 'Ludus Magnus',
      testo:
        "La più grande caserma-palestra dei gladiatori di Roma, costruita sotto Domiziano e collegata al Colosseo da un passaggio sotterraneo. Resta in vista una parte della piccola arena ellittica dove si allenavano, con le basi degli ambienti intorno.",
      come: "Tra via Labicana e via di San Giovanni in Laterano, a pochi passi dal Colosseo: si guarda dall'alto, dalla strada.",
      quando: 'Di passaggio verso San Clemente.',
      tempo: '10 minuti',
      costo: 'Gratuito, visibile dalla strada',
      lat: 41.8901,
      lng: 12.495,
    },
    {
      nome: 'Basilica di San Clemente',
      testo:
        "Una basilica del XII secolo costruita sopra una chiesa del IV, a sua volta costruita su edifici romani del I secolo con un mitreo. Si scende di tre livelli e di mille anni, fino a sentire l'acqua di un condotto romano ancora attivo.",
      come: 'A cinque minuti a piedi dal Colosseo lungo via Labicana. La basilica superiore è a ingresso libero, gli scavi con biglietto e prenotazione online obbligatoria.',
      quando: "Nel pomeriggio, dopo il Colosseo. Sotto è fresco anche d'estate.",
      tempo: '1 ora',
      costo: 'Scavi 10 €, ridotto 7 € per studenti fino a 21 anni (2026)',
      orari: 'Lunedì-sabato 9-12:30 e 14-18, domenica e festivi 12-18; ultimo ingresso mezz\'ora prima della chiusura.',
      url: 'https://www.basilicasanclemente.com/',
      lat: 41.8894,
      lng: 12.4975,
    },
  ],
  programmi: [
    {
      titolo: 'Mezza giornata',
      tappe: [
        'Colosseo alla prima fascia del mattino con il biglietto 24 ore (primo e secondo livello, museo).',
        "Arco di Costantino all'uscita, poi ingresso dall'Arco di Tito al Foro Romano lungo la Via Sacra.",
        'Salita al Palatino per guardare il Foro dall\'alto e il Circo Massimo dall\'altro lato.',
        'Uscita da via di San Gregorio e pranzo a Monti o al Celio, lontano dai locali davanti al Colosseo.',
      ],
    },
    {
      titolo: '1 giorno',
      tappe: [
        'Mattina: Full Experience Sotterranei e Arena alla prima fascia, poi i livelli e le terrazze.',
        'Arco di Costantino e Ludus Magnus, pranzo a Monti.',
        'Pomeriggio: Foro Romano e Palatino con lo stesso biglietto.',
        'Tramonto ai Musei Capitolini, con la vista sul Foro dal Tabularium, e cena a Monti.',
      ],
    },
    {
      titolo: '2 giorni',
      tappe: [
        "Giorno 1: Colosseo con arena e sotterranei al mattino, Ludus Magnus e San Clemente nel pomeriggio, sera a Monti. La Domus Aurea, se è venerdì, sabato o domenica.",
        "Giorno 2: Foro Romano e Palatino al mattino con la stessa Full Experience (vale due giorni consecutivi), Circo Massimo, poi Fori Imperiali e Mercati di Traiano, le Domus Romane di Palazzo Valentini e i Musei Capitolini al tramonto.",
      ],
    },
  ],
  biglietti: [
    {
      tipo: 'Colosseo, Foro Romano, Palatino (24 ore)',
      prezzo: '18 € (ridotto 2 €)',
      include: "Primo e secondo livello del Colosseo con le terrazze, Museo del Colosseo, Foro Romano e Palatino, mostre in corso. Un ingresso al Colosseo all'ora prenotata, uno a Foro e Palatino entro 24 ore. Massimo 75 minuti nel Colosseo.",
      dove: 'ticketing.colosseo.it o biglietteria',
    },
    {
      tipo: 'Only Arena (24 ore)',
      prezzo: '18 € (ridotto 2 €)',
      include: "20 minuti sul piano dell'arena, ingresso e uscita lato Sperone Stern, più Foro Romano, Palatino e siti SUPER. Non comprende i livelli del Colosseo.",
      dove: 'ticketing.colosseo.it',
    },
    {
      tipo: 'Full Experience Sotterranei e Arena (2 giorni)',
      prezzo: '24 € (ridotto 2 €); 32 € con visita didattica',
      include: "Arena e sotterranei (quando accessibili), Museo del Colosseo, Foro Romano, Palatino e siti SUPER. Massimo 90 minuti nel Colosseo.",
      dove: 'ticketing.colosseo.it, in vendita da 30 giorni prima',
    },
    {
      tipo: 'Full Experience Arena (2 giorni)',
      prezzo: '24 € (ridotto 2 €)',
      include: "Arena e Museo del Colosseo, Foro Romano, Palatino e siti SUPER. Massimo 90 minuti nel Colosseo.",
      dove: 'ticketing.colosseo.it',
    },
    {
      tipo: 'Full Experience Attico (2 giorni)',
      prezzo: '24 € (ridotto 2 €)',
      include: "Primo, secondo e terzo livello, galleria intermedia, attico con ascensore panoramico, Foro Romano, Palatino e siti SUPER.",
      dove: 'ticketing.colosseo.it',
    },
    {
      tipo: 'Full Experience Passaggio di Commodo (2 giorni)',
      prezzo: '32 € (ridotto 2 €)',
      include: "Il passaggio sotterraneo riservato all'imperatore, primo e secondo livello del Colosseo, Foro Romano, Palatino e siti SUPER.",
      dove: 'ticketing.colosseo.it',
    },
    {
      tipo: 'Forum Pass SUPER',
      prezzo: '18 € (ridotto 2 €)',
      include: "Un ingresso in un giorno a Foro Romano, Palatino, Fori Imperiali e siti SUPER. Niente Colosseo. Comprato online si usa entro 30 giorni; non vale la prima domenica del mese.",
      dove: 'ticketing.colosseo.it o biglietteria',
    },
    {
      tipo: 'Domus Aurea',
      prezzo: '26 € con visita didattica e realtà virtuale; 18 € (ridotto 2 €) turni non guidati',
      include: 'Visita a turni il venerdì, sabato e domenica; i turni non guidati sono alle 12 e alle 17.',
      dove: 'ticketing.colosseo.it',
    },
    {
      tipo: 'Una Notte al Colosseo (visite serali estive)',
      prezzo: '50 € (ridotto 28 €)',
      include: "Visita guidata di circa un'ora con arena e sotterranei, il martedì e il giovedì sera dalle 20 alle 23 (edizione 2026: dal 7 luglio al 29 settembre). Gruppi di massimo 25 persone; biglietti in vendita 7 giorni prima, non modificabili.",
      dove: 'ticketing.colosseo.it',
    },
    {
      tipo: 'Prima domenica del mese e giornate gratuite',
      prezzo: 'Gratis',
      include: "Prima domenica del mese, 25 aprile, 2 giugno e 4 novembre. La prima domenica non si prenota: biglietti individuali da ritirare il giorno stesso alle biglietterie di piazza del Colosseo e di Largo della Salara Vecchia, fino a esaurimento. Niente arena, sotterranei, livelli superiori; Domus Aurea chiusa.",
      dove: 'Biglietteria, in ordine di arrivo',
    },
    {
      tipo: 'Regole valide per tutti i biglietti',
      prezzo: 'Nominativi',
      include: "Ogni biglietto riporta il nome del visitatore: all'ingresso si mostra un documento d'identità. Per le visite dal 9 maggio 2026 il nome si può cambiare una sola volta, entro la mezzanotte del settimo giorno prima, e solo per un errore di battitura evidente, una categoria sbagliata o gravi motivi documentati. Non serve stampare: basta il biglietto sullo smartphone.",
      dove: 'Modulo di cambio sul sito ufficiale',
    },
  ],
  mesi: [
    { voto: 4, folla: 'bassa', nota: "Dopo la chiusura del Giubileo, il 6 gennaio 2026, è il mese più calmo. Chiuso il 1° gennaio; giornate corte, il Parco chiude alle 16:30." },
    { voto: 4, folla: 'bassa', nota: 'Fresco e poca gente, ideale per Foro e Palatino senza caldo. Ultimo mese dell\'orario invernale.' },
    { voto: 4, folla: 'media', nota: 'Clima mite e orario più lungo. Nel 2027 Pasqua cade il 28 marzo: la settimana santa porta molti pellegrini e gruppi.' },
    { voto: 3, folla: 'alta', nota: 'Il clima è il migliore, ma arrivano gite scolastiche e ponti; il 25 aprile l\'ingresso è gratuito e le code sono lunghissime.' },
    { voto: 3, folla: 'alta', nota: 'Giornate lunghe e luce bella, ma fasce del mattino e sotterranei si esauriscono settimane prima.' },
    { voto: 3, folla: 'alta', nota: 'Comincia il caldo. Il 2 giugno è gratuito e affollatissimo; meglio le fasce delle 8:30 o le ultime del pomeriggio.' },
    { voto: 2, folla: 'alta', nota: 'Caldo forte e pochissima ombra fra Colosseo e Foro. In compenso, il martedì e il giovedì, ci sono le visite serali.' },
    { voto: 2, folla: 'alta', nota: 'Il mese più caldo; a Ferragosto la città si svuota di romani ma non di turisti. Acqua dai nasoni e visite all\'alba o di sera.' },
    { voto: 4, folla: 'alta', nota: 'Il caldo cala e la folla resta alta fino a fine mese. Ultime visite serali di stagione.' },
    { voto: 5, folla: 'media', nota: 'Temperature piacevoli e luce morbida sul Foro. Dal 25 ottobre torna l\'orario invernale, chiusura alle 16:30.' },
    { voto: 5, folla: 'media', nota: 'Uno dei mesi migliori: meno gruppi e luce bassa sul Foro. Il 4 novembre è gratuito.' },
    { voto: 4, folla: 'media', nota: 'Tranquillo fino a metà mese, poi le feste riempiono la città, soprattutto intorno all\'8 dicembre e a Natale. Chiuso il 25 dicembre.' },
  ],
  zone: [
    {
      nome: 'Monti',
      perChi: 'chi vuole arrivare a piedi al Colosseo e uscire la sera',
      testo:
        "Il rione dietro i Fori Imperiali: vicoli, botteghe e locali, con la metro B a Cavour. Un po' rumoroso la sera, con pochi grandi hotel e molti appartamenti.",
      fascia: '130-250 €',
    },
    {
      nome: 'Celio',
      perChi: 'chi cerca silenzio a due passi dal Colosseo',
      testo:
        "La collina verde a sud del Colosseo, con via di San Giovanni in Laterano, San Clemente e i Santi Quattro Coronati. Residenziale e tranquilla, con poche strutture e qualche trattoria di quartiere.",
    },
    {
      nome: 'Esquilino',
      perChi: 'chi vuole spendere meno e avere i treni vicini',
      testo:
        "Tra Termini e Piazza Vittorio, a 15-20 minuti a piedi dal Colosseo o a una fermata di metro. Quartiere multietnico con il mercato coperto e prezzi più bassi; la sera, nelle strade subito attorno a Termini, non è piacevole.",
    },
  ],
  gite: [
    {
      nome: 'Ostia Antica',
      distanza: '25 km, circa 40 minuti',
      come: 'Treno Roma-Lido dalla stazione di Porta San Paolo (metro B Piramide) fino a Ostia Antica, con il biglietto urbano.',
      testo:
        "Il porto della Roma antica: strade, terme, insulae a più piani, il teatro e le botteghe con i mosaici delle corporazioni. Meno spettacolare di Pompei ma molto più camminabile, e quasi vuota. Scavi chiusi il lunedì.",
      link: '/viaggi/roma-4-giorni',
    },
    {
      nome: 'Appia Antica',
      distanza: 'pochi km a sud del Colosseo',
      come: 'Bus 118 dal Colosseo o dal Circo Massimo; bici a noleggio ai punti informativi del Parco.',
      testo:
        "La regina delle strade romane, con i basoli originali tra pini, sepolcri, il Mausoleo di Cecilia Metella e le catacombe. La domenica è chiusa al traffico ed è il giorno giusto per camminarla o pedalarla.",
      link: '/esperienze/italia/appia-antica',
    },
    {
      nome: "Tivoli: Villa Adriana e Villa d'Este",
      distanza: '30 km, circa 1 ora',
      come: 'Treno regionale da Tiburtina o bus Cotral da Ponte Mammolo (metro B); tra le due ville c\'è un bus locale.',
      testo:
        "La residenza dell'imperatore Adriano, grande come una città, e le fontane rinascimentali di Villa d'Este: due siti UNESCO che completano il racconto dell'architettura imperiale iniziato al Colosseo.",
    },
  ],
  faq: [
    {
      domanda: 'Bisogna prenotare il Colosseo?',
      risposta:
        "In pratica sì: l'ingresso è sempre a orario fisso e le fasce migliori finiscono con settimane di anticipo. Le vendite aprono 30 giorni prima su ticketing.colosseo.it; la biglietteria sul posto esiste, ma in alta stagione rischia di non avere posti per il giorno stesso.",
    },
    {
      domanda: 'Quale biglietto conviene scegliere?',
      risposta:
        "Chi ha poco tempo va bene con il biglietto 24 ore da 18 €. Chi vuole vedere il Colosseo da dentro davvero prende la Full Experience Sotterranei e Arena da 24 €, che vale due giorni e permette di fare Foro e Palatino con calma il giorno dopo.",
    },
    {
      domanda: 'Quanto tempo si può restare dentro il Colosseo?',
      risposta:
        "75 minuti con il biglietto base e 90 con le Full Experience; poi bisogna uscire. In Foro e Palatino invece non c'è un limite, a parte l'orario di chiusura.",
    },
    {
      domanda: 'Il biglietto è nominativo? Si può cambiare il nome?',
      risposta:
        "Sì, tutti i biglietti sono nominativi e all'ingresso si mostra un documento. Il nome si può cambiare una sola volta, entro sette giorni dalla visita, e solo per errori evidenti o gravi motivi documentati: i biglietti comprati da rivenditori a nome di altri non passano il controllo.",
    },
    {
      domanda: 'Come funziona la prima domenica del mese gratuita?',
      risposta:
        "Non si prenota: i biglietti gratuiti si ritirano di persona alle biglietterie di piazza del Colosseo e di Largo della Salara Vecchia, fino a esaurimento. Arena, sotterranei e livelli superiori restano chiusi, e le code sono le più lunghe del mese.",
    },
    {
      domanda: 'Si può visitare il Colosseo di sera?',
      risposta:
        "Solo d'estate, con «Una Notte al Colosseo»: nel 2026 dal 7 luglio al 29 settembre, il martedì e il giovedì dalle 20 alle 23, con guida, arena e sotterranei, a 50 €. I biglietti escono 7 giorni prima e finiscono in fretta.",
    },
  ],
  galleria: [
    {
      src: '/images/meraviglie/colosseo/colosseo-interno-panoramica.jpg',
      alt: "L'interno del Colosseo in una giornata di sole: le gradinate in rovina, il piano dell'arena ricostruito in parte e i corridoi dei sotterranei scoperti",
    },
    {
      src: '/images/meraviglie/colosseo/colosseo-ipogei-sotterranei.jpg',
      alt: "I muri dei sotterranei del Colosseo visti dall'alto, con la passerella dell'arena ricostruita e i visitatori sulle terrazze",
    },
    {
      src: '/images/meraviglie/colosseo/colosseo-arco-costantino-dal-palatino.jpg',
      alt: "Il Colosseo e l'Arco di Costantino visti dal Palatino, con la piazza piena di visitatori e il cielo azzurro",
    },
    {
      src: '/images/meraviglie/colosseo/foro-romano-dal-vittoriano.jpg',
      alt: 'Pini marittimi, la cupola dei Santi Luca e Martina e il margine del Foro Romano visti dalle terrazze del Vittoriano',
    },
    {
      src: '/images/meraviglie/colosseo/palatino-dal-circo-massimo.jpg',
      alt: 'Le arcate in mattoni dei palazzi imperiali sul Palatino viste dal Circo Massimo',
    },
  ],
}
