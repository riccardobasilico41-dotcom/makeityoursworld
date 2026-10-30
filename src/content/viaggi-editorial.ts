/**
 * Overlay editoriale/SEO per viaggio — additivo, come `viaggi-copertine.ts`:
 * il markdown in `src/content/viaggi/*.md` resta l'unica fonte di verità per
 * titolo e testo del viaggio, questo file aggiunge solo le varianti
 * SEO/editoriali quando esistono. Un viaggio assente da `editorialViaggi`
 * usa i fallback esistenti — titolo e descrizione del
 * markdown — ovunque queste voci vengano lette: nessun contenuto va
 * inventato qui prima che sia stato scritto davvero.
 *
 * Gerarchia concettuale:
 * - `seoTitle` / `seoDescription` — orientati all'intento di ricerca,
 *   descrittivi: quello che finisce in <title> e meta description.
 * - `editorialHeadline` — titolo da rivista, mostrato selettivamente
 *   nell'esperienza visiva (es. hero della pagina viaggio), non ovunque
 *   compaia il titolo del viaggio.
 * - `editorialHook` — una riga breve di curiosità, opinione o utilità,
 *   categorizzata da `editorialHookType` (vedi `HookType`).
 * - `socialTitle` / `socialDescription` — variante per Open Graph/Twitter,
 *   se deve differire da quella SEO (di solito no: default a `seoTitle`/
 *   `seoDescription` quando assenti).
 *
 * Ogni voce, quando scritta, deve restare ancorata a contenuto reale del
 * viaggio (niente affermazioni non supportate dal testo in
 * `src/content/viaggi/*.md`).
 */

export type HookType =
  | 'before-you-go'
  | 'save-this'
  | 'wish-i-knew'
  | 'mistakes'
  | 'worth-it'
  | 'hidden-side'
  | 'secret'
  | 'skip-instead'
  | 'budget'
  | 'cost'
  | 'itinerary'
  | 'almost-skipped'
  | 'would-do-differently'
  | 'verdict'
  | 'comparison'

export type EditorialMeta = {
  seoTitle?: string
  seoDescription?: string
  editorialHeadline?: string
  editorialHook?: string
  editorialHookType?: HookType
  socialTitle?: string
  socialDescription?: string
}

/**
 * Chiave = `Viaggio['slug']`. Ogni numero nei titoli è contato dal markdown
 * del viaggio: i giorni dalla `Durata`, gli «errori» dalle voci della sezione
 * «Consigli pratici / errori da non ripetere», i prezzi solo se compaiono nel
 * testo. La prima persona è usata solo per i viaggi raccontati da un viaggio
 * reale (1-15 e Perù); gli altri sono guide e restano in forma neutra.
 * `editorialHeadline` non è impostato: l'H1 resta il titolo vero del viaggio.
 */
export const editorialViaggi: Record<string, EditorialMeta> = {
  // ── Viaggi raccontati in prima persona ──────────────────────────────
  'lofoten-estate-2025': {
    seoTitle: "Lofoten in 7 giorni d'estate: itinerario e 7 consigli",
    seoDescription:
      "Sette giorni a luglio tra Reine, il Reinebringen, il Trollfjord in gommone e le spiagge polari. Con quanto si spende per mangiare e cosa prenotare prima.",
    socialTitle: "Lofoten sotto il sole di mezzanotte: il mio itinerario di 7 giorni e cosa prenotare prima",
    editorialHook:
      "Il Trollfjord in gommone è l'esperienza top del viaggio: va prenotato per tempo, e i guanti servono anche a luglio.",
    editorialHookType: 'save-this',
  },
  'islanda-2024': {
    seoTitle: "Islanda in tenda: la Ring Road in 9 giorni, tappa per tappa",
    seoDescription:
      "Nove giorni ad anello con sei notti in tenda: l'eruzione vista da vicino, il ghiacciaio con i ramponi e il kayak tra gli iceberg di Jökulsárlón.",
    socialTitle: "Sei notti in tenda su otto: l'Islanda della Ring Road in 9 giorni",
    editorialHook:
      "Alle due di notte, davanti al relitto dell'aereo di Sólheimasandur, c'era ancora luce: a fine luglio il buio non arriva.",
    editorialHookType: 'hidden-side',
  },
  'giordania-itinerario': {
    seoTitle: "Giordania in 8 giorni: Petra, Wadi Rum e il Mar Morto",
    seoDescription:
      "Otto giorni da Amman ad Aqaba: Jerash, il Mar Morto, Petra quasi vuota e il Capodanno nel Wadi Rum. Tappe, cene, transfer e come usare il Jordan Pass.",
    socialTitle: "Petra quasi deserta a Capodanno: la Giordania in 8 giorni, tappa per tappa",
    editorialHook:
      "Il Jordan Pass include il visto e gli ingressi a Petra, Jerash e Wadi Rum, ma vale solo se si resta almeno 3 notti.",
    editorialHookType: 'before-you-go',
  },
  'sri-lanka-2023': {
    seoTitle: "Sri Lanka in 12 giorni: itinerario dai templi al mare",
    seoDescription:
      "Dodici giorni in van con autista: il triangolo culturale, la salita notturna all'Adam's Peak, il tè di Nuwara Eliya, il treno per Ella e il mare del sud.",
    socialTitle: "Adam's Peak di notte, il treno per Ella e il mare: lo Sri Lanka in 12 giorni",
    editorialHook:
      "All'Adam's Peak si sale di notte: 2.243 metri su una scalinata illuminata, in fila con centinaia di pellegrini.",
    editorialHookType: 'hidden-side',
  },
  'giappone-itinerario': {
    seoTitle: "Giappone in 12 giorni: itinerario con Fuji, Kyoto e sakura",
    seoDescription:
      "Tokyo, il Monte Fuji, Kyoto, Hiroshima, Miyajima, Osaka e Nara in 12 giorni ad aprile, con il JR Pass, gli onsen e cosa sapere su izakaya e conti.",
    socialTitle: "Sakura quasi finiti, il Fuji e gli onsen: il Giappone in 12 giorni ad aprile",
    editorialHook:
      "Sono arrivato per i sakura con pochi giorni di ritardo: a inizio aprile i petali cadevano già come neve rosa.",
    editorialHookType: 'wish-i-knew',
  },
  thailandia: {
    seoTitle: "Thailandia in 11 giorni: da Bangkok a Krabi e Koh Phi Phi",
    seoDescription:
      "Il giro di 11 giorni da Bangkok a Hua Hin, Khao Sok, Krabi e Koh Phi Phi, più Chiang Mai, le Similan, i rooftop di Bangkok e lo street food di Jay Fai.",
    socialTitle: "Mercato galleggiante e mercato del treno: valgono la pena? La Thailandia in 11 giorni",
    editorialHook:
      "Per lo street food stellato Michelin di Jay Fai, a Bangkok, la coda comincia alle sette del mattino.",
    editorialHookType: 'secret',
  },
  'marocco-itinerario': {
    seoTitle: "Marocco in 9 giorni: Marrakech, Sahara e 6 errori da evitare",
    seoDescription:
      "Nove giorni in van con guida locale: Telouet, Aït Benhaddou, le Gole di Todra, una notte a Erg Chebbi, la valle del Draa ed Essaouira, con 6 errori.",
    socialTitle: "Una notte nel Sahara e 6 errori da non ripetere: il Marocco in 9 giorni",
    editorialHook:
      "Ai campi tendati del deserto non ci sono prese elettriche: i power bank vanno caricati prima della notte a Erg Chebbi.",
    editorialHookType: 'before-you-go',
  },
  'new-york-itinerario': {
    seoTitle: "New York in 6 giorni: itinerario e 5 errori da evitare",
    seoDescription:
      "Sei giorni a piedi, 15-20 km al giorno: Times Square, il Top of the Rock al tramonto, la Statua della Libertà, Broadway, DUMBO e una partita dal vivo.",
    socialTitle: "15-20 km a piedi al giorno: New York in 6 giorni, con baseball e basket dal vivo",
    editorialHook:
      "Top of the Rock e musical di Broadway vanno prenotati prima: in alta stagione i biglietti migliori finiscono subito.",
    editorialHookType: 'mistakes',
  },
  'florida-road-trip': {
    seoTitle: "Florida on the road in 10 giorni: itinerario e 7 errori",
    seoDescription:
      "Quasi 1.800 km dalle Keys a Orlando: Key West, le Everglades, i parchi a tema, Cape Canaveral e Miami Beach. Con la cassa comune da 270€ e cosa evitare.",
    socialTitle: "1.800 km dalle Keys a Orlando: la Florida in 10 giorni e 7 errori da evitare",
    editorialHook:
      "Le corsie «toll by plate» in autostrada sono riservate a chi ha il SunPass: con l'auto a noleggio vanno evitate.",
    editorialHookType: 'mistakes',
  },
  'transilvania-express': {
    seoTitle: "Transilvania in 5 giorni: castelli, Turda e Transfăgărășan",
    seoDescription:
      "Cinque giorni in auto da Bucarest nel ponte di Halloween: Peleș, Bran, i borghi sassoni, la salina di Turda e la Transfăgărășan, con gli orsi ai bordi.",
    socialTitle: "Orsi sulla Transfăgărășan: la Transilvania in 5 giorni e 5 errori da evitare",
    editorialHook:
      "La Transfăgărășan è aperta di norma solo dal 20 giugno al 31 ottobre: va verificata sul sito ufficiale prima di partire.",
    editorialHookType: 'before-you-go',
  },
  'bulgaria-bansko-rila': {
    seoTitle: "Sciare a Bansko vale la pena? 5 giorni con Rila",
    seoDescription:
      "Cinque-sei giorni sulla neve di Bansko, piste oneste e prezzi bassi, con il Monastero di Rila come colpo di scena. Costi, skipass e 5 consigli.",
    socialTitle: "Sciare in Bulgaria vale la pena? Bansko, i prezzi veri e il Monastero di Rila",
    editorialHook:
      "Non mi aspettavo grandi cose dallo sci in Bulgaria, ed è quello che ho trovato. Il motivo per andarci è un altro.",
    editorialHookType: 'worth-it',
  },
  'costa-rica-itinerario': {
    seoTitle: "Costa Rica in 13 giorni: itinerario dal Caribe al Pacifico",
    seoDescription:
      "Tredici giorni in van tra Caraibi e Pacifico: bradipi, vulcani, Monteverde e le balene. Con la cassa comune da 350€, le attività da prenotare e 7 errori.",
    socialTitle: "Bradipi, vulcani e balene: il Costa Rica in 13 giorni e 7 errori da non ripetere",
    editorialHook:
      "In Costa Rica Google Maps non è affidabile: traffico e strade allungano sempre i tempi, e conviene pianificare con margine.",
    editorialHookType: 'mistakes',
  },
  'messico-beach-life': {
    seoTitle: "Yucatán in 13 giorni: cenote, Holbox e 10 errori da evitare",
    seoDescription:
      "Tredici giorni tra Yucatán e Riviera Maya: rovine maya, cenote, la laguna di Bacalar e lo squalo balena di Holbox. Tappe, alloggi e 10 errori da evitare.",
    socialTitle: "Lo squalo balena di Holbox e 10 errori da non ripetere: il Messico in 13 giorni",
    editorialHook:
      "Otto ore in barca per nuotare accanto allo squalo balena di Holbox: costa parecchio, ma è il momento clou del viaggio.",
    editorialHookType: 'worth-it',
  },
  'lapponia-svedese-abisko': {
    seoTitle: "Lapponia svedese in 7 giorni: aurora ad Abisko e costi veri",
    seoDescription:
      "Sette giorni tra Kiruna e Abisko a caccia di aurora, con motoslitta e notte polare. In tutto 1.500-1.800€ a persona: dove vanno e come spendere meno.",
    socialTitle: "Capodanno sotto l'aurora ad Abisko: quanto costa davvero e perché a Capodanno costa di più",
    editorialHook:
      "Non andarci a Capodanno se puoi evitarlo: è il periodo più caro. Febbraio-marzo costa molto meno e l'aurora c'è lo stesso.",
    editorialHookType: 'would-do-differently',
  },
  tromso: {
    seoTitle: "Tromsø in 5 giorni: aurora, husky, sami e quanto costa",
    seoDescription:
      "Cinque giorni nella capitale artica tra aurora chase, husky sledding e renne dei sami. Il prezzo a persona di ogni escursione e 5 consigli utili.",
    socialTitle: "Aurora, husky e renne a Tromsø: quanto costa ogni escursione e quale rifarei",
    editorialHook:
      "Tra aurora, husky, sami e balene il conto sale in fretta: meglio scegliere 2-3 attività e viverle bene.",
    editorialHookType: 'cost',
  },
  'peru-itinerario': {
    seoTitle: "Perù in 31 giorni: itinerario da Machu Picchu all'Amazzonia",
    seoDescription:
      "Tre viaggi in un solo giro: 17 giorni di Ande tra Cusco, Machu Picchu, Titicaca e Colca, poi 14 tra Amazzonia e Cordillera Blanca, entrambe da Lima.",
    socialTitle: "Tre viaggi in Perù in un solo giro di 31 giorni, da Machu Picchu alla Cordillera Blanca",
    editorialHook:
      "Machu Picchu all'alba, entrando tra i primi: la cittadella quasi vuota ripaga la sveglia nel buio.",
    editorialHookType: 'worth-it',
  },

  // ── Asia e Medio Oriente ─────────────────────────────────────────────
  'cina-classica': {
    seoTitle: "Cina in 15 giorni: itinerario e 9 errori da evitare",
    seoDescription:
      "Pechino, Xi'an, Shanghai, Hong Kong e Macao in 15 giorni in treno veloce. Cosa configurare da casa, cosa prenotare e i 9 errori che bloccano il viaggio.",
    socialTitle: "9 errori che bloccano un viaggio in Cina (e cosa sistemare prima di partire)",
    editorialHook:
      "In Cina il VPN va spento prima di pagare: altrimenti l'antifrode blocca la transazione, e a volte l'account.",
    editorialHookType: 'mistakes',
  },
  'cina-paesaggi': {
    seoTitle: "L'altra Cina in 18 giorni: Zhangjiajie, Yunnan e 10 errori",
    seoDescription:
      "Diciotto giorni tra Zhangjiajie, Sichuan, Yunnan e Yangshuo, lontano dai monumenti. Quote, prenotazioni, panda e 10 errori da evitare su questo giro.",
    socialTitle: "La Cina oltre la Muraglia: 18 giorni di paesaggi e 10 errori da evitare",
    editorialHook:
      "A Zhangjiajie arrivare all'apertura fa la differenza tra cinque minuti e un'ora e mezza di coda all'ascensore di Bailong.",
    editorialHookType: 'mistakes',
  },
  'corea-del-sud-itinerario': {
    seoTitle: "Corea del Sud in 14 giorni: itinerario e 10 errori",
    seoDescription:
      "Quattordici giorni da Seoul alla DMZ fino alle haenyeo di Jeju, in KTX e autobus. Le app da scaricare, i giorni di chiusura e 10 errori da non fare.",
    socialTitle: "Google Maps in Corea non funziona: 10 errori da evitare in 14 giorni tra Seoul e Jeju",
    editorialHook:
      "In Corea Google Maps mostra i luoghi ma non calcola i percorsi: Naver Map o KakaoMap vanno scaricate prima di partire.",
    editorialHookType: 'before-you-go',
  },
  'malesia-singapore': {
    seoTitle: "Malesia e Singapore in 14 giorni: itinerario e 9 errori",
    seoDescription:
      "Quattordici giorni da Kuala Lumpur a Singapore, mangiando: Penang, Melaka, le Cameron Highlands e la costa giusta per la stagione. Con 9 errori da evitare.",
    socialTitle: "Malesia e Singapore in 14 giorni: perché si sceglie la costa prima delle date",
    editorialHook:
      "I monsoni delle due coste malesi sono opposti: si sceglie la costa prima delle date, e questo condiziona tutto il resto.",
    editorialHookType: 'before-you-go',
  },
  'borneo-itinerario': {
    seoTitle: "Borneo in 12 giorni: Kinabalu, oranghi, Sipadan e 9 errori",
    seoDescription:
      "Dodici giorni nel Borneo malese: la salita al Kinabalu, gli oranghi, il fiume Kinabatangan e Sipadan. Permessi, contanti, malaria e 9 errori da evitare.",
    socialTitle: "Kinabalu e Sipadan si prenotano mesi prima: il Borneo in 12 giorni e 9 errori da evitare",
    editorialHook:
      "Il Kinabalu ha 160 permessi al giorno, Sipadan 250: chi prova a prenotare sul posto, di solito, resta fuori.",
    editorialHookType: 'mistakes',
  },
  'stopover-golfo': {
    seoTitle: "Stopover a Dubai, Abu Dhabi e Doha: come farlo e 10 errori",
    seoDescription:
      "Come trasformare uno scalo nel Golfo in due giorni di viaggio: gli stopover di Emirates, Etihad, Qatar Airways e Saudia, e 10 errori da evitare.",
    socialTitle: "Smetti di sprecare gli scali: lo stopover nel Golfo fatto bene, con 10 errori da evitare",
    editorialHook:
      "Lo stopover Qatar Airways si prenota a parte, sul portale Discover Qatar: è gratuito saperlo e costa caro non saperlo.",
    editorialHookType: 'secret',
  },
  'arabia-saudita-itinerario': {
    seoTitle: "Arabia Saudita in 12 giorni: Hegra, AlUla e 10 errori",
    seoDescription:
      "Dodici giorni tra Jeddah, Hegra, Riyadh e le montagne dell'Asir, con visto online, voli interni e auto. Cosa prenotare per primo e 10 errori da evitare.",
    socialTitle: "Arabia Saudita in 12 giorni: perché Hegra si prenota prima dei voli (e altri 9 errori)",
    editorialHook:
      "Hegra è contingentata: va prenotata prima dei voli, perché tutto l'itinerario ruota attorno a quella data.",
    editorialHookType: 'before-you-go',
  },
  'indonesia-itinerario': {
    seoTitle: "Indonesia in 35 giorni: itinerario da Sumatra a Sulawesi",
    seoDescription:
      "Trentacinque giorni isola dopo isola: Sumatra, Giava, Bali, Lombok e le Gili, Komodo, Flores e Sulawesi, con voli interni, traghetti, costi e tempi reali.",
    socialTitle: "Otto isole, otto Indonesie diverse: l'itinerario di 35 giorni da Sumatra a Sulawesi",
    editorialHook:
      "Sei viaggi in Indonesia condensati in un solo itinerario di 35 giorni, isola dopo isola, da Sumatra a Sulawesi.",
    editorialHookType: 'itinerary',
  },

  // ── Italia ───────────────────────────────────────────────────────────
  'dolomiti-roadtrip': {
    seoTitle: "Dolomiti in auto: itinerario per zone e 11 errori da evitare",
    seoDescription:
      "Le Dolomiti zona per zona tra Alto Adige e Trentino, dal weekend al giro di due settimane, d'estate e d'inverno. Rifugi, passi, prenotazioni e 11 errori.",
    socialTitle: "Settembre invece di agosto e altri 10 errori da evitare sulle Dolomiti",
    editorialHook:
      "Andare a settembre invece che in agosto è la singola scelta che cambia di più l'esperienza sulle Dolomiti.",
    editorialHookType: 'skip-instead',
  },
  'settimana-bianca': {
    seoTitle: "Settimana bianca in Italia: dove, quando e quanto costa",
    seoDescription:
      "Come scegliere stazione e settimana per sciare in Italia senza pagare il doppio: quota, periodi, pacchetti skipass e noleggio, e 8 errori da evitare.",
    socialTitle: "Settimana bianca: 8 errori che la fanno costare il doppio (e cosa fare invece)",
    editorialHook:
      "Sotto i 1.800 metri, oggi, la neve è una scommessa: la stazione si sceglie per quota, non per fama.",
    editorialHookType: 'skip-instead',
  },
  'grandi-citta-italia': {
    seoTitle: "Roma, Firenze, Venezia e Napoli in 12 giorni: 9 errori",
    seoDescription:
      "Le quattro città d'arte in 12 giorni, solo in alta velocità. Quando andare, cosa prenotare per entrare davvero e i 9 errori che rovinano il giro.",
    socialTitle: "Le grandi città italiane si visitano quasi sempre nel modo sbagliato: 12 giorni fatti bene",
    editorialHook:
      "Colosseo, Uffizi, cupola, Borghese, Cenacolo e Pompei: senza prenotazione, in nessuno di questi casi si entra.",
    editorialHookType: 'mistakes',
  },
  'sicilia-itinerario': {
    seoTitle: "Sicilia orientale in 10 giorni: itinerario e 8 errori",
    seoDescription:
      "Dieci giorni tra Etna, Siracusa, Noto e il barocco, con auto a noleggio. Perché prendere solo metà isola, i tempi veri di guida e 8 errori da evitare.",
    socialTitle: "Non fare tutta la Sicilia in 10 giorni: fai questo invece (Etna, greci e barocco)",
    editorialHook:
      "Sulle statali interne della Sicilia i tempi delle mappe vanno aumentati di un terzo: sulla carta sembra un'isola, è una nazione.",
    editorialHookType: 'skip-instead',
  },
  'rotte-dei-vini-itinerario': {
    seoTitle: "Langhe, Valpolicella e Toscana in 10 giorni: 8 errori",
    seoDescription:
      "Dieci giorni sulle rotte del vino italiano in vendemmia, con cantine prenotate e auto. Quante visite al giorno, chi guida e 8 errori da non fare.",
    socialTitle: "8 errori da evitare in cantina: Langhe, Valpolicella e Toscana in 10 giorni",
    editorialHook:
      "Presentarsi in cantina senza appuntamento è l'errore numero uno, e costa la giornata.",
    editorialHookType: 'mistakes',
  },
  'roma-4-giorni': {
    seoTitle: "Roma in 4 giorni (o 2): cosa saltare e cosa no",
    seoDescription:
      "Itinerario di Roma in 4 giorni con la versione da 2: Roma antica, Vaticano, Borghese e quartieri a piedi. Prenotazioni, chiusure e 10 errori da evitare.",
    socialTitle: "Roma in 4 giorni (o 2) senza provare a vederla tutta: 10 errori da evitare",
    editorialHook:
      "Vaticano e Roma antica nello stesso giorno non stanno: è il primo programma da smontare.",
    editorialHookType: 'skip-instead',
  },
  'firenze-3-giorni': {
    seoTitle: "Firenze in 3 giorni (o 2): itinerario e 8 errori da evitare",
    seoDescription:
      "Firenze in 3 giorni con la versione da 2 che regge: Uffizi, David, cupola e Oltrarno a piedi. Cosa prenotare prima, chiusure e 8 errori da evitare.",
    socialTitle: "Firenze in 3 giorni: perché la cupola si prenota prima di tutto il resto",
    editorialHook:
      "La cupola del Brunelleschi è l'unico ingresso di Firenze che si esaurisce davvero: si prenota prima di qualsiasi altra cosa.",
    editorialHookType: 'before-you-go',
  },
  'milano-e-i-laghi': {
    seoTitle: "Milano in 2 giorni (o 1) e i laghi in giornata: itinerario",
    seoDescription:
      "Milano in 2 giorni, la versione da 1 e le gite in treno sui laghi di Como e Maggiore. Come prenotare il Cenacolo, quando evitare la città e 8 errori.",
    socialTitle: "Milano vale la pena? 2 giorni in città, 1 se hai fretta, e i laghi in giornata",
    editorialHook:
      "Il Cenacolo si prenota il giorno esatto in cui escono i biglietti, mesi prima: non ci sono alternative.",
    editorialHookType: 'before-you-go',
  },
  'venezia-3-giorni': {
    seoTitle: "Venezia in 3 giorni fuori da Rialto-San Marco: 10 errori",
    seoDescription:
      "Tre giorni a Venezia a piedi e in vaporetto, lontano dall'unico corridoio saturo. Dove dormire, contributo di accesso, San Marco e 10 errori da evitare.",
    socialTitle: "Non salire sul campanile di San Marco: fai questo invece (e altri 9 consigli per Venezia)",
    editorialHook:
      "Il campanile di San Marco ha la coda, San Giorgio Maggiore ha la vista migliore e nessuna fila.",
    editorialHookType: 'skip-instead',
  },
  'torino-2-giorni': {
    seoTitle: "Torino in 2 giorni: Museo Egizio, Mole e 8 errori da evitare",
    seoDescription:
      "Due giorni a Torino a piedi e in metro: il Museo Egizio, la Mole, i portici e i caffè storici, con il terzo giorno a Venaria o nelle Langhe. E 8 errori.",
    socialTitle: "Torino in 2 giorni: la città più sottovalutata d'Italia e 8 errori da evitare",
    editorialHook:
      "Al Museo Egizio servono almeno tre ore: è la ragione principale del viaggio e non si liquida in un'ora.",
    editorialHookType: 'mistakes',
  },
  'napoli-3-giorni': {
    seoTitle: "Napoli in 3 giorni con Pompei ed Ercolano: 10 errori",
    seoDescription:
      "Tre giorni a Napoli tra centro storico, Sansevero, MANN e la giornata archeologica a Pompei o Ercolano. In che ordine vederli e 10 errori da evitare.",
    socialTitle: "Pompei ed Ercolano nello stesso giorno? No: Napoli in 3 giorni e 10 errori da evitare",
    editorialHook:
      "Il MANN va visto prima di Pompei: altrimenti a Pompei si guardano muri senza sapere cosa c'era sopra.",
    editorialHookType: 'mistakes',
  },
  'costiera-e-isole': {
    seoTitle: "Costiera Amalfitana e isole in 9 giorni senza auto",
    seoDescription:
      "Nove giorni tra Costiera, Capri, Ischia e Procida solo con traghetti, bus e a piedi, divisibili in due blocchi. Porti, Sentiero degli Dei e 10 errori.",
    socialTitle: "Non andare in Costiera in auto: 9 giorni tra Amalfi e le isole, e 10 errori da evitare",
    editorialHook:
      "Il Sentiero degli Dei si fa da Bomerano verso Nocelle, non al contrario.",
    editorialHookType: 'secret',
  },
  'eolie-in-vela': {
    seoTitle: "Eolie in barca a vela: 8 giorni, 7 isole e 10 errori",
    seoDescription:
      "La settimana classica in barca a vela con skipper tra le sette isole Eolie, da sabato a sabato, con la versione in traghetto. Ordinanze, mesi e 10 errori.",
    socialTitle: "Eolie in vela: 7 isole in 8 giorni e 10 errori da evitare a bordo",
    editorialHook:
      "In barca si porta una borsa morbida, mai una valigia rigida. E l'acqua di bordo si usa con parsimonia.",
    editorialHookType: 'save-this',
  },
  'sicilia-completa': {
    seoTitle: "Giro della Sicilia in 17 giorni: itinerario e 11 errori",
    seoDescription:
      "Il giro completo della Sicilia in 17 giorni, da Palermo a Catania con auto one-way. Tappe, tempi di guida reali, come accorciarlo e 11 errori da evitare.",
    socialTitle: "Tutta la Sicilia in 17 giorni: il giro completo e 11 errori da evitare",
    editorialHook:
      "Aprire su Palermo e chiudere su Catania con un noleggio one-way evita un'intera giornata di ritorno.",
    editorialHookType: 'itinerary',
  },
  'sardegna-due-anime': {
    seoTitle: "Sardegna in 14 giorni: dalla Costa Smeralda al Sulcis",
    seoDescription:
      "Due settimane in auto attraverso la Sardegna in diagonale, dalla Gallura al Sulcis, con due versioni brevi. Spiagge a numero chiuso e 11 errori da evitare.",
    socialTitle: "11 errori che rovinano una vacanza in Sardegna, e il giro di 14 giorni per evitarli",
    editorialHook:
      "Le spiagge a numero chiuso si prenotano mesi prima in alta stagione: è il punto che rovina più programmi in Sardegna.",
    editorialHookType: 'mistakes',
  },
  'isole-siciliane': {
    seoTitle: "Egadi, Pantelleria e Lampedusa in 12 giorni: 10 errori",
    seoDescription:
      "Tre arcipelaghi siciliani che non si collegano tra loro, in 12 giorni tra voli, traghetti, bici e scooter. Come incastrarli, versioni brevi e 10 errori.",
    socialTitle: "Egadi, Pantelleria e Lampedusa in un solo viaggio: come farlo e 10 errori da evitare",
    editorialHook:
      "Su queste isole il vento cancella traghetti e voli spesso: niente coincidenze strette.",
    editorialHookType: 'mistakes',
  },

  // ── Francia ──────────────────────────────────────────────────────────
  'costa-azzurra': {
    seoTitle: "Costa Azzurra in 8 giorni da Antibes, con il Mercantour",
    seoDescription:
      "Otto giorni con base fissa ad Antibes, in treno sulla costa e in auto nel Mercantour. Quando andare, cosa fare nell'entroterra e 4 errori da evitare.",
    socialTitle: "Costa Azzurra senza auto: 8 giorni da Antibes e perché l'entroterra vale più della costa",
    editorialHook:
      "Il treno costiero lo usano pochissimi turisti, ed è il modo più semplice per girare la Costa Azzurra d'estate.",
    editorialHookType: 'secret',
  },
  'parigi-5-giorni': {
    seoTitle: "Parigi in 5 giorni (o 3): itinerario e 4 errori da evitare",
    seoDescription:
      "Parigi in 5 giorni con la versione da 3: un grande museo al giorno, Versailles, i quartieri e la metro. Cosa prenotare e i 4 errori più comuni.",
    socialTitle: "Non salire sulla Tour Eiffel per il panorama: Parigi in 5 giorni e 4 errori da evitare",
    editorialHook:
      "Dalla Tour Eiffel si vede tutta Parigi tranne una cosa: la torre stessa.",
    editorialHookType: 'skip-instead',
  },
  'normandia-bretagna': {
    seoTitle: "Normandia e Bretagna in 12 giorni: itinerario in auto",
    seoDescription:
      "Dodici giorni in auto: cinque in Normandia tra spiagge dello sbarco e Mont-Saint-Michel, sette sulla costa bretone. L'ordine giusto e 4 errori da evitare.",
    socialTitle: "Normandia e Bretagna in 12 giorni: perché l'ordine conta, e 4 errori da evitare",
    editorialHook:
      "La baia del Mont-Saint-Michel non si attraversa da soli, e un museo va visto prima delle spiagge dello sbarco.",
    editorialHookType: 'mistakes',
  },
  'castelli-loira': {
    seoTitle: "Castelli della Loira in 6 giorni: quali vedere e 3 errori",
    seoDescription:
      "Sei giorni tra i castelli della Loira scelti per tipo e non per fama, con una giornata in bicicletta lungo il fiume. Quali vedere e 3 errori da evitare.",
    socialTitle: "Castelli della Loira: non vederne più di sei, e scegli questi invece dei soliti",
    editorialHook:
      "Più di sei castelli in una settimana non si vedono bene. E i minori hanno un decimo della folla.",
    editorialHookType: 'skip-instead',
  },
  'bordeaux-e-vigneti': {
    seoTitle: "Bordeaux e i vigneti in 7 giorni: Médoc, Saint-Émilion",
    seoDescription:
      "Sette giorni tra la città di Bordeaux, il Médoc, Saint-Émilion, il Sauternes e il Bacino di Arcachon. Château su appuntamento, chi guida e 3 errori.",
    socialTitle: "Bordeaux in 7 giorni: le due rive del vigneto, il Sauternes e la Dune du Pilat",
    editorialHook:
      "Ai grandi château di Bordeaux non ci si presenta senza appuntamento.",
    editorialHookType: 'before-you-go',
  },
  'rotte-dei-vini-francia': {
    seoTitle: "Alsazia e Champagne in 8 giorni: rotte dei vini di Francia",
    seoDescription:
      "Otto giorni tra la strada dei vini d'Alsazia, in auto e in bici, e le maison della Champagne. Come prenotare, perché la Borgogna aspetta e 3 errori.",
    socialTitle: "Alsazia o Borgogna? Il primo viaggio del vino in Francia, in 8 giorni con la Champagne",
    editorialHook:
      "Borgogna e Alsazia hanno modi di accogliere opposti: chi le tratta allo stesso modo resta fuori dalle cantine.",
    editorialHookType: 'comparison',
  },
  'provenza-camargue': {
    seoTitle: "Provenza, Camargue e Occitania in 10 giorni: itinerario",
    seoDescription:
      "Dieci giorni in auto tra villaggi e rovine romane della Provenza, il delta della Camargue e i castelli catari. Quando c'è la lavanda e 3 errori da evitare.",
    socialTitle: "Lavanda nel periodo sbagliato e altri 2 errori: Provenza e Camargue in 10 giorni",
    editorialHook:
      "Per la lavanda il periodo conta più della meta: venirci nel mese sbagliato è il primo errore da evitare.",
    editorialHookType: 'mistakes',
  },
  'settimana-bianca-francia': {
    seoTitle: "Settimana bianca in Francia: quale comprensorio scegliere",
    seoDescription:
      "Una settimana sui grandi domini sciistici francesi d'alta quota, in residence da sabato a sabato, o a Chamonix. Vacanze scolastiche e 3 errori.",
    socialTitle: "Settimana bianca in Francia: quale comprensorio scegliere e quando non partire",
    editorialHook:
      "Prima di prenotare si controlla il calendario delle vacanze scolastiche francesi: cambia prezzi e code.",
    editorialHookType: 'before-you-go',
  },
  'tour-du-mont-blanc': {
    seoTitle: "Tour du Mont Blanc in 9 giorni: tappe, rifugi e 3 errori",
    seoDescription:
      "Il giro completo del Monte Bianco a piedi in 9 tappe tra Francia, Italia e Svizzera, con notte in rifugio. Quando prenotare, dislivelli e 3 errori.",
    socialTitle: "Tour du Mont Blanc in 9 giorni: i rifugi si prenotano a gennaio, non a maggio",
    editorialHook:
      "I rifugi del Tour du Mont Blanc si prenotano a gennaio-febbraio, non a maggio: è il vincolo che struttura tutto.",
    editorialHookType: 'before-you-go',
  },

  // ── Americhe ─────────────────────────────────────────────────────────
  'bolivia-itinerario': {
    seoTitle: "Bolivia in 19 giorni: itinerario da La Paz al Salar de Uyuni",
    seoDescription:
      "Diciannove giorni tra La Paz, il Titicaca, il Salar de Uyuni e l'Amazzonia, con voli interni e bus notturni. Come gestire la quota e l'ordine delle tappe.",
    socialTitle: "Bolivia in 19 giorni: dal Salar de Uyuni all'Amazzonia, salendo un gradino alla volta",
    editorialHook:
      "In Bolivia si atterra oltre i quattromila metri: il corpo si abitua un giorno alla volta, e l'itinerario segue quel ritmo.",
    editorialHookType: 'before-you-go',
  },
  'centro-america-itinerario': {
    seoTitle: "Guatemala, Belize e Panama in 32 giorni: itinerario",
    seoDescription:
      "Trentadue giorni tra Guatemala e Belize via terra, dai vulcani alla barriera corallina, con Panama in volo a parte. Frontiere, shuttle e tappe.",
    socialTitle: "Guatemala e Belize via terra, Panama a parte: il Centro America in 32 giorni",
    editorialHook:
      "Dalla Sierra Madre alla seconda barriera corallina del mondo, via terra, passando la frontiera di Melchor de Mencos.",
    editorialHookType: 'itinerary',
  },
  'messico-dia-de-los-muertos': {
    seoTitle: "Día de los Muertos in Messico: 16 giorni e 9 errori",
    seoDescription:
      "Sedici giorni da Città del Messico a Oaxaca e Puerto Escondido, con le tre notti dei morti. Cosa prenotare prima, budget 2026, 9 errori e 6 truffe comuni.",
    socialTitle: "Cosa sapere prima del Día de los Muertos: 9 errori da evitare e 6 truffe comuni",
    editorialHook:
      "I «tour dei cimiteri con accesso esclusivo» sono una truffa: l'ingresso ai panteones è libero, si paga solo trasporto e guida.",
    editorialHookType: 'mistakes',
  },
  'messico-cdmx-baja-california': {
    seoTitle: "Città del Messico e Baja California in 16 giorni: 8 errori",
    seoDescription:
      "Sedici giorni dalla capitale al mare delle balene grigie della Baja California Sur. La finestra giusta, auto, budget 2026 e 8 errori da evitare.",
    socialTitle: "Balene grigie in Baja: quando andare e 8 errori da evitare, in 16 giorni dalla capitale",
    editorialHook:
      "Le balene grigie danno il meglio da metà febbraio a fine marzo: fuori da quella finestra il viaggio cambia senso.",
    editorialHookType: 'before-you-go',
  },
  'brasile-itinerario': {
    seoTitle: "Brasile in 22 giorni: itinerario e 8 errori da evitare",
    seoDescription:
      "Rio, Ilha Grande, Iguazú, Salvador, Chapada Diamantina e Lençóis Maranhenses in 22 giorni. Voli interni, budget 2026, 8 errori e 7 truffe comuni.",
    socialTitle: "Il Brasile in 3 settimane senza correre: 22 giorni, 8 errori e 7 truffe da conoscere",
    editorialHook:
      "I voli interni prenotati presto costano la metà, e quasi tutti passano da São Paulo o Brasília.",
    editorialHookType: 'budget',
  },
  'california-road-trip': {
    seoTitle: "California road trip in 19 giorni: itinerario e costi",
    seoDescription:
      "Un anello di 19 giorni da San Francisco a Yosemite, Death Valley, Los Angeles e Big Sur. Costo a persona di 3.200-5.400 €, alloggi nei parchi e 10 errori.",
    socialTitle: "Quanto costa davvero un road trip in California: 19 giorni, 3.200-5.400 € a persona",
    editorialHook:
      "Il pass annuale dei parchi per non residenti si ripaga già con Yosemite e Sequoia.",
    editorialHookType: 'cost',
  },

  // ── Montagna, Europa centrale e capitali ─────────────────────────────
  'svizzera-alpi-van': {
    seoTitle: "Svizzera in van: Alpi Bernesi da Interlaken al Cervino",
    seoDescription:
      "Le Alpi Bernesi in camper o furgone, dal weekend lungo a Interlaken al giro fino al Cervino. Dove dormire col van, escursioni, costi e 9 errori da evitare.",
    socialTitle: "Svizzera in van senza multe: 9 errori da evitare tra Interlaken e il Cervino",
    editorialHook:
      "Senza vignetta in autostrada, in Svizzera si paga una multa di circa 200 CHF oltre alla vignetta stessa.",
    editorialHookType: 'mistakes',
  },
  'cracovia-weekend': {
    seoTitle: "Cracovia in 3-4 giorni: itinerario, Auschwitz e 8 errori",
    seoDescription:
      "Un weekend lungo a Cracovia tra Rynek Główny, il Wawel e Kazimierz, con la giornata a Auschwitz-Birkenau. Come prenotarla, i cambi e 8 errori da evitare.",
    socialTitle: "Cracovia in un weekend lungo: come organizzare Auschwitz e 8 errori da evitare",
    editorialHook:
      "Auschwitz-Birkenau si prenota con largo anticipo sul sito ufficiale, e non si incastra tra altre due tappe.",
    editorialHookType: 'before-you-go',
  },
  'praga-weekend': {
    seoTitle: "Praga in 3-4 giorni: itinerario e 7 errori da evitare",
    seoDescription:
      "Un weekend lungo a Praga tra la Città Vecchia, il Ponte Carlo, il Castello e Malá Strana, a piedi e in tram. Prezzi, borseggi, falsi poliziotti e 7 errori.",
    socialTitle: "Praga in un weekend lungo: 7 errori da evitare, dal tram 22 ai falsi poliziotti",
    editorialHook:
      "Il tram 22 verso il Castello è la linea più segnalata per i borseggi di Praga.",
    editorialHookType: 'mistakes',
  },
  'vienna-weekend': {
    seoTitle: "Vienna in 3-4 giorni: itinerario e 7 errori da evitare",
    seoDescription:
      "Un weekend lungo a Vienna tra Innere Stadt, Schönbrunn, il Belvedere e i caffè storici. Biglietti, prezzi, domeniche a negozi chiusi e 7 errori da evitare.",
    socialTitle: "Vienna in un weekend lungo: Schönbrunn, il Belvedere e 7 errori da evitare",
    editorialHook:
      "A Vienna la domenica quasi tutto è chiuso per legge: gli acquisti vanno fatti prima.",
    editorialHookType: 'before-you-go',
  },
  'budapest-weekend': {
    seoTitle: "Budapest in 3-4 giorni: itinerario, terme e 7 errori",
    seoDescription:
      "Un weekend lungo a Budapest tra Buda, Pest, il Parlamento e le terme. Come leggere il fiorino, i bar con conti gonfiati e 7 errori da evitare.",
    socialTitle: "Budapest in un weekend lungo: le terme, il Parlamento e 7 errori da evitare",
    editorialHook:
      "Chi ferma per strada proponendo un bar, nel quartiere ebraico, segue lo schema classico dei conti gonfiati.",
    editorialHookType: 'mistakes',
  },
  'berlino-weekend': {
    seoTitle: "Berlino in 4 giorni: itinerario e 7 errori da evitare",
    seoDescription:
      "Quattro giorni a Berlino con i mezzi pubblici: Reichstag, Isola dei Musei, il Muro e i quartieri. Perché tre giorni non bastano e 7 errori da evitare.",
    socialTitle: "Perché Berlino non si fa in 3 giorni: l'itinerario di 4 e 7 errori da evitare",
    editorialHook:
      "A Checkpoint Charlie la foto «gratis» con i figuranti si paga a cose fatte.",
    editorialHookType: 'mistakes',
  },
  'amsterdam-weekend': {
    seoTitle: "Amsterdam in 4 giorni: itinerario e 6 errori da evitare",
    seoDescription:
      "Quattro giorni ad Amsterdam a piedi e in bicicletta tra i canali, il Rijksmuseum, il Van Gogh e la Casa di Anna Frank. Prenotazioni e 6 errori da evitare.",
    socialTitle: "Amsterdam in un weekend lungo: 6 errori da evitare, dalle piste ciclabili ad Anna Frank",
    editorialHook:
      "La Casa di Anna Frank non si compra più in loco: va prenotata online con settimane di anticipo.",
    editorialHookType: 'before-you-go',
  },
  'lisbona-weekend': {
    seoTitle: "Lisbona in 4 giorni: itinerario, Sintra e 6 errori",
    seoDescription:
      "Quattro giorni a Lisbona tra Alfama, Belém, i miradouros e la gita a Sintra. A che ora prendere il tram 28, come prenotare Sintra e 6 errori da evitare.",
    socialTitle: "Il tram 28 si prende all'alba: Lisbona in 4 giorni e 6 errori da evitare",
    editorialHook:
      "Il tram 28 si prende la mattina presto: nelle ore centrali è quasi impraticabile per calca e borseggi.",
    editorialHookType: 'mistakes',
  },
  'capitali-nordiche': {
    seoTitle: "Copenaghen, Stoccolma e Oslo in 9 giorni: itinerario",
    seoDescription:
      "Tre capitali nordiche in 9 giorni, tre per città, in treno e volo interno. Tre valute senza euro, prezzi reali, Tivoli, Christiania e 8 errori da evitare.",
    socialTitle: "Tre capitali, tre valute, zero euro: Copenaghen, Stoccolma e Oslo in 9 giorni",
    editorialHook:
      "Danimarca, Svezia e Norvegia hanno tre valute diverse, e nessuna è l'euro.",
    editorialHookType: 'before-you-go',
  },
  'capitali-baltiche': {
    seoTitle: "Vilnius, Riga e Tallinn in 9 giorni: itinerario e 8 errori",
    seoDescription:
      "Le tre capitali baltiche in 9 giorni, a piedi in città e in bus tra una e l'altra. Centri UNESCO, Art Nouveau di Riga, prezzi e 8 errori da evitare.",
    socialTitle: "Vilnius, Riga o Tallinn? Tutte e tre in 9 giorni, con 8 errori da evitare",
    editorialHook:
      "Lituano, lettone ed estone non si capiscono tra loro: l'estone non è nemmeno una lingua baltica.",
    editorialHookType: 'hidden-side',
  },

  // ── Spagna ───────────────────────────────────────────────────────────
  'canarie-itinerario': {
    seoTitle: "Canarie in 9 giorni: Tenerife, Gran Canaria e Lanzarote",
    seoDescription:
      "Tre isole in 9 giorni con voli interni e auto a noleggio: il Teide, Gran Canaria e Timanfaya. Permessi per la vetta, clima e 6 errori da evitare.",
    socialTitle: "Il permesso per la vetta del Teide e altri 5 errori da evitare alle Canarie",
    editorialHook:
      "La vetta del Teide ha 200 permessi al giorno, prenotabili fino a 56 giorni prima: va chiesto appena si fissa la data.",
    editorialHookType: 'before-you-go',
  },
  'baleari-itinerario': {
    seoTitle: "Baleari in 8 giorni: Mallorca, Ibiza e Minorca, itinerario",
    seoDescription:
      "Otto giorni tra Mallorca, Ibiza e Minorca con traghetti e auto a noleggio: la Serra de Tramuntana, il nord di Ibiza e le calette. Con 5 errori da evitare.",
    socialTitle: "Ibiza non è solo club: Mallorca, Ibiza e Minorca in 8 giorni, e 5 errori da evitare",
    editorialHook:
      "Il nord di Ibiza è la parte che sorprende di più chi arriva con l'idea dell'isola dei club.",
    editorialHookType: 'hidden-side',
  },
  'andalusia-itinerario': {
    seoTitle: "Andalusia in 9 giorni: Siviglia, Córdoba, Granada e Ronda",
    seoDescription:
      "Nove giorni nell'Andalusia di Al-Andalus, in treno AVE tra le città e in auto da Granada. Come prenotare l'Alhambra, il flamenco e 6 errori da evitare.",
    socialTitle: "Andalusia in 9 giorni: quando prenotare l'Alhambra e 6 errori da evitare",
    editorialHook:
      "L'Alhambra si prenota appena si fissa la data del viaggio: in alta stagione si esaurisce con mesi di anticipo.",
    editorialHookType: 'before-you-go',
  },
  'spagna-nord-itinerario': {
    seoTitle: "Spagna del Nord in 8 giorni: San Sebastián, Bilbao e costa",
    seoDescription:
      "Otto giorni in auto da San Sebastián a Bilbao e lungo la costa verso Santiago. Come si mangiano i pintxos, il Guggenheim, il meteo e 6 errori da evitare.",
    socialTitle: "Pintxos, Guggenheim e pioggia: la Spagna del Nord in 8 giorni e 6 errori da evitare",
    editorialHook:
      "I pintxos non si caricano nel piatto come a un buffet: uno o due pezzi per bar, poi si cambia locale.",
    editorialHookType: 'mistakes',
  },

  // ── Guide 66-79 ──────────────────────────────────────────────────────
  'croazia-itinerario': {
    seoTitle: "Croazia in 14 giorni: da Zagabria a Dubrovnik, 8 errori",
    seoDescription:
      "Quattordici giorni da Zagabria e Plitvice alla Dalmazia, a Hvar, Curzola e Dubrovnik. Auto fino a Spalato, catamarani, budget 2026 e 8 errori da evitare.",
    socialTitle: "Croazia in 14 giorni: perché l'auto si lascia a Spalato, e 8 errori da evitare",
    editorialHook:
      "L'auto si restituisce a Spalato invece di portarla sulle isole: catamarani più veloci e niente parcheggi a 30-50 € al giorno.",
    editorialHookType: 'skip-instead',
  },
  'montenegro-itinerario': {
    seoTitle: "Montenegro in 10 giorni: Kotor, Durmitor e 8 errori",
    seoDescription:
      "Dieci giorni dalle Bocche di Cattaro al lago di Scutari, a Ostrog, al Durmitor e al canyon del Tara. Budget da 50-70 € al giorno, truffe e 8 errori.",
    socialTitle: "Montenegro in 10 giorni: dal mare alle montagne senza mai guidare più di 3 ore",
    editorialHook:
      "Il roaming europeo non vale in Montenegro: serve un'offerta dati o una SIM locale.",
    editorialHookType: 'before-you-go',
  },
  'egitto-mare-luxor-cairo': {
    seoTitle: "Egitto in 11 giorni: Cairo, Luxor e Mar Rosso, quanto costa",
    seoDescription:
      "Undici giorni tra il Cairo e le piramidi, i templi di Luxor e qualche giorno sul Mar Rosso. Circa 1.100-1.700 € a persona voli esclusi, e 10 errori.",
    socialTitle: "Quanto costa davvero l'Egitto in 11 giorni: piramidi, Luxor, mare e 10 errori da evitare",
    editorialHook:
      "L'e-visa si compra solo sul portale ufficiale, oppure si pagano i 30 $ allo sportello all'arrivo.",
    editorialHookType: 'cost',
  },
  'egitto-completo': {
    seoTitle: "Egitto in 21 giorni: Siwa, Abu Simbel, Nilo e 12 errori",
    seoDescription:
      "Tre settimane tra piramidi, oasi di Siwa, Abu Simbel, crociera sul Nilo e Mar Rosso. Budget di 2.300-3.500 € a persona e 12 errori da evitare.",
    socialTitle: "L'Egitto completo in 21 giorni: quanto costa e 12 errori da evitare",
    editorialHook:
      "Con autista o guida si dice subito no ai negozi, e lo si ripete a inizio giornata.",
    editorialHookType: 'mistakes',
  },
  'turchia-itinerario': {
    seoTitle: "Turchia in 16 giorni: itinerario e 10 errori da evitare",
    seoDescription:
      "Sedici giorni tra Istanbul, la Cappadocia in mongolfiera, Pamukkale, Efeso e la costa licia. Volo interno, bus notturno, budget e 10 errori da evitare.",
    socialTitle: "Turchia in 16 giorni: come prenotare la mongolfiera e altri 9 errori da evitare",
    editorialHook:
      "La mongolfiera in Cappadocia si prenota per la prima mattina utile, tenendo la seconda di riserva.",
    editorialHookType: 'save-this',
  },
  'filippine-itinerario': {
    seoTitle: "Filippine in 18 giorni: itinerario, costi e 10 errori",
    seoDescription:
      "Diciotto giorni tra El Nido, Coron, Moalboal, Bohol e Siargao con quattro voli interni. Circa 1.600-2.600 € a persona voli esclusi, e 10 errori da evitare.",
    socialTitle: "Quanto costano davvero le Filippine: 18 giorni tra 5 isole e 10 errori da evitare",
    editorialHook:
      "Per imbarcarsi in Italia verso le Filippine serve già il biglietto di uscita: le compagnie lo chiedono.",
    editorialHookType: 'before-you-go',
  },
  'india-rajasthan-10-giorni': {
    seoTitle: "Rajasthan in 10 giorni: itinerario e truffe da evitare",
    seoDescription:
      "Dieci giorni da Delhi al Taj Mahal, Jaipur, Jodhpur e Udaipur, con treni e autista. Budget da 40-60 € al giorno, 9 truffe comuni e 9 errori da evitare.",
    socialTitle: "Prima volta in India? 10 giorni in Rajasthan e 9 truffe da riconoscere",
    editorialHook:
      "«Il tuo hotel è chiuso»: è la frase con cui tassisti e tuk-tuk portano in un altro albergo, su commissione.",
    editorialHookType: 'mistakes',
  },
  'india-rajasthan-varanasi': {
    seoTitle: "Varanasi e Rajasthan in 17 giorni: itinerario e 9 errori",
    seoDescription:
      "Diciassette giorni dal Gange di Varanasi al deserto del Thar, con treno notturno e voli interni. Budget, 10 truffe da riconoscere e 9 errori da evitare.",
    socialTitle: "Varanasi e il Rajasthan in 17 giorni: 10 truffe da riconoscere e 9 errori da evitare",
    editorialHook:
      "A Varanasi si dorme sul fiume, non nella città nuova: è il Gange all'alba il motivo del viaggio.",
    editorialHookType: 'skip-instead',
  },
  'india-sud-taj-mahal': {
    seoTitle: "India del Sud in 17 giorni: Tamil Nadu, Kerala e Hampi",
    seoDescription:
      "Diciassette giorni tra i templi del Tamil Nadu, il Kerala, Hampi e il salto ad Agra per il Taj Mahal. Budget, 8 truffe e 8 errori da evitare.",
    socialTitle: "India del Sud in 17 giorni: houseboat, templi e 8 truffe da riconoscere",
    editorialHook:
      "Le houseboat di Alleppey offerte sui moli a prezzi bassi spesso non sono quelle delle foto: si prenota prima.",
    editorialHookType: 'mistakes',
  },
  'maldive-guida': {
    seoTitle: "Maldive: isole locali o resort? Guida, costi e 10 errori",
    seoDescription:
      "Come scegliere atollo, isola locale o resort alle Maldive, con un esempio di 10 giorni. Da 80-150 € al giorno sulle isole locali, e 10 errori da evitare.",
    socialTitle: "Maldive senza resort: quanto costano davvero le isole locali, e 10 errori da evitare",
    editorialHook:
      "Dal 2009 alle Maldive si può dormire nelle guesthouse delle isole abitate: è un altro viaggio, a un altro prezzo.",
    editorialHookType: 'comparison',
  },
}

export function getEditorialMeta(slug: string): EditorialMeta {
  return editorialViaggi[slug] ?? {}
}
