import type { Destinazione } from '@/lib/types'

// Contenuto ricostruito dal viaggio "Bulgaria on the snow" (src/content/viaggi/11-bulgaria-bansko-rila.md).

export const destinazioniBulgaria: Destinazione[] = [
  {
    slug: 'bansko',
    paeseSlug: 'bulgaria',
    ordine: 1,
    nome: 'Bansko',
    tipologia: ['sci', 'montagna'],
    giorniConsigliati: '4 giorni, tre pieni sulle piste',
    visitataPersonalmente: true,
    introduzione: 'Uno dei comprensori sciistici più noti della Bulgaria, sui Monti Pirin, con un centro storico di case in pietra e legno.',
    percheAndarci: 'Per sciare in un angolo d\'Europa che compare di rado nei programmi delle vacanze bianche, a prezzi molto più bassi delle Alpi.',
    cosaVedere: ['Il centro storico di Bansko, tra le case della "scuola di Bansko" e la parte più moderna', 'La vista dal Todorka Peak'],
    cosaFare: [
      'Sci sulle piste di Bansko Ski Zone (c\'è la scheda esperienza dedicata)',
      'La discesa illuminata per lo sci notturno (c\'è la scheda esperienza dedicata)',
      'Après-ski nei locali alla base della gondola',
      'Cena in una mehana tipica del centro storico',
    ],
    doveDormire:
      'Ho scelto un hotel a pochi minuti a piedi dalla stazione della gondola: la mattina arrivavo alle piste in fretta e la sera ero a due passi dal centro storico. Non era una struttura di marca né particolarmente ricercata, solo una base pratica per la settimana sulla neve.\n\nAlternative vicino alla gondola. Economiche: Hotel Dumanov (vicino alla stazione a valle), La Vien Guest House (5 minuti a piedi, gestione familiare). Fascia media: Hotel Ida (piscina interna e idromassaggio), MPM Hotel Sport (accesso quasi diretto alle piste). Lusso: Kempinski Hotel Grand Arena Bansko (accanto alla gondola), Premier Luxury Mountain Resort.',
    doveMangiare: 'Abbiamo mangiato nelle mehane del centro storico: kapama, banitsa e shopska salata, sempre con la rakia.',
    comeArrivare: 'Da Sofia si arriva in auto in qualche ora. In alternativa ci sono shuttle e transfer privati, il bus pubblico o il treno più minibus.',
    comeSpostarsi: 'Una gondola porta dal centro alle piste; tra una pista e l\'altra ci si sposta con gli sci.',
    periodoMigliore: 'da dicembre alla primavera, con innevamento artificiale; date della stagione sul sito ufficiale',
    costi: 'Prezzi degli skipass sul sito ufficiale, dove di solito costano meno che in cassa; birra e cene in mehana più economiche che sulle Alpi.',
    erroriDaEvitare: ['Comprare lo skipass alla cassa: online, con qualche giorno di anticipo, costa meno', 'Aspettarsi piste da Alpi: a Bansko si va per l\'esperienza e per il prezzo, non per il livello del comprensorio'],
    miaEsperienza:
      'Non mi aspettavo grandi cose dallo sci in Bulgaria, ed è quello che ho trovato: piste carine e ben tenute, niente di esagerato rispetto alle Alpi. Il bello sta proprio qui. Ci si va per l\'esperienza esotica di sciare in un angolo d\'Europa fuori dai soliti circuiti, più che per lo sci in sé.',
    luoghi: [
      {
        nome: "Comprensorio sciistico di Bansko",
        testo: "Il comprensorio si raggiunge con una lunga gondola, in funzione dal 2003, che parte dal paese e sale alla base di Banderishka Polyana; gli impianti arrivano a 2.600 metri e le piste sono circa 75 km. Le piste sono più tranquille di quelle alpine. Ci si va per l'esperienza esotica in un angolo d'Europa fuori dai circuiti più noti.",
        come: "Stazione della gondola a pochi minuti a piedi dal centro; skipass in biglietteria o online.",
        quando: "Inverno, date della stagione sul sito ufficiale; gondola 8:30-17, seggiovie 8:45-16:15. Alla mattina presto la gondola ha code.",
        tempo: "giornata intera",
        costo: "prezzi degli skipass sul sito ufficiale",
        url: "https://banskoski.com",
        consiglio: "Comprare lo skipass online per evitare la fila alla cassa."
      },
      {
        nome: "Discesa notturna illuminata",
        testo: "La pista di rientro verso il paese, viene illuminata per sciare di sera, ma non tutti i giorni. È una delle attrazioni più particolari di Bansko.",
        come: "Gondola fino alla stazione intermedia e discesa; orari sul sito del comprensorio.",
        quando: "Sera, nei giorni di apertura notturna.",
        tempo: "1-2 ore",
        url: "https://banskoski.com",
        consiglio: "Dopo la discesa, après-ski nei locali alla base della gondola."
      },
      {
        nome: "Todorka Peak",
        testo: "La stazione in quota di Todorka, con vista sui monti Pirin. Si arriva con gli impianti di risalita.",
        come: "Gondola e seggiovie.",
        quando: "Giorno sereno, in inverno.",
        tempo: "1 ora",
        consiglio: "Mettere in conto il vento e il freddo in cima."
      },
      {
        nome: "Centro storico di Bansko",
        testo: "Case di pietra e legno della «scuola di Bansko» (il revival bulgaro dell'Ottocento), la chiesa della Santa Trinità, costruita dagli abitanti nell'Ottocento, e le mehane tipiche con kapama, banitsa e shopska salata. È più vivace la sera.",
        come: "A piedi dalla stazione della gondola.",
        quando: "Sera.",
        tempo: "2 ore",
        consiglio: "Mangiare nelle mehane del centro storico, non sulla strada principale."
      }
    ],
    sapori: [
      {
        nome: "Kapama",
        testo: "Stufato di maiale e salsicce con cavolo, cotto lentamente in un coccio."
      },
      {
        nome: "Banitsa",
        testo: "Sfoglia al formaggio, una colazione tipica in Bulgaria."
      },
      {
        nome: "Shopska salata",
        testo: "Insalata di pomodori, cetrioli e feta grattugiata."
      },
      {
        nome: "Rakia",
        testo: "Grappa di frutta, da bere prima dei pasti."
      }
    ],
    attenzioni: [
      "La Bulgaria usa l'euro dal 1° gennaio 2026: confrontare con i prezzi in lev dei vecchi dati.",
      "Da Sofia sono circa 160 km: usare transfer prenotati, non taxi di strada.",
      "Il comprensorio ha code in alta stagione: arrivare presto alla gondola.",
      "In auto d'inverno serve l'attrezzatura invernale (gomme da neve, catene se richieste)."
    ],
    esperienzeSlugs: ['sci-bansko', 'discesa-notturna-bansko'],
    tripSlugs: ['bulgaria-bansko-rila'],
    imageAlt: 'Le piste innevate del comprensorio sciistico di Bansko, Bulgaria',
    immagine: '/images/bulgaria/bansko-stock.jpg',
  },
  {
    slug: 'monastero-rila',
    paeseSlug: 'bulgaria',
    ordine: 2,
    nome: 'Monastero di Rila',
    tipologia: ['religione', 'storia', 'unesco'],
    giorniConsigliati: 'mezza giornata, lungo il tragitto di rientro',
    visitataPersonalmente: true,
    introduzione: 'Il più grande e importante monastero ortodosso di Bulgaria, fondato nel X secolo dall\'eremita Ivan di Rila e Patrimonio UNESCO dal 1983.',
    percheAndarci: 'È stato il colpo di scena del viaggio. Dopo le giornate sulla neve il contrasto è totale, ed è probabilmente il ricordo più forte di tutto il tour.',
    cosaVedere: [
      'La Chiesa della Natività della Vergine, a cinque cupole, coperta di affreschi coloratissimi',
      'Le alte mura di pietra che chiudono il complesso e gli danno l\'aspetto di una fortezza',
      'Il Museo di Storia Ecclesiastica, con la Croce di Rafail, intagliata con 104 scene religiose e 650 figure in miniatura',
    ],
    cosaFare: ['Visita al complesso monastico e alla chiesa (c\'è la scheda esperienza dedicata)', 'Visita al Museo di Storia Ecclesiastica'],
    doveDormire: 'Non ci ho dormito: è stata una tappa di mezza giornata sulla strada del rientro verso Sofia.',
    doveMangiare: 'Non ho indirizzi da segnalare: la tappa era tutta per la visita.',
    comeArrivare: 'Con una deviazione dalla strada principale tra Bansko e Sofia.',
    comeSpostarsi: 'A piedi, dentro il complesso monastico.',
    periodoMigliore: 'tutto l\'anno',
    costi: 'Ingresso al complesso e alla chiesa gratuito; Museo di Storia Ecclesiastica circa 4 € (dal 2026 la Bulgaria usa l\'euro).',
    erroriDaEvitare: ['Entrare in chiesa con spalle e ginocchia scoperte', 'Fare foto o video dentro gli edifici religiosi senza seguire le regole del monastero'],
    miaEsperienza:
      'Dopo le giornate sulla neve, il monastero è stato il colpo di scena del viaggio. Gli affreschi coloratissimi della Chiesa della Natività della Vergine e il silenzio della montagna intorno sono il ricordo più vivido di tutto il tour.',
    luoghi: [
      {
        nome: "Complesso del Monastero di Rila",
        testo: "Il più grande e famoso monastero ortodosso della Bulgaria, patrimonio UNESCO, fondato nel X secolo secondo la tradizione da San Giovanni di Rila e ricostruito tra il 1834 e il 1862 dopo un incendio. Le alte mura di pietra, quasi da fortezza, chiudono un cortile a portici a strisce bianche e nere.",
        come: "In auto o bus da Sofia, a sud della capitale, o come deviazione sulla strada tra Bansko e Sofia.",
        quando: "Mattina presto, prima dei bus turistici.",
        tempo: "1,5-2 ore",
        costo: "ingresso libero",
        consiglio: "È un luogo di culto: abiti che coprano spalle e ginocchia."
      },
      {
        nome: "Chiesa della Natività della Vergine",
        testo: "La chiesa a cinque cupole con affreschi coloratissimi nel portico e all'interno, opera di vari pittori dell'Ottocento, tra cui i fratelli Zahari e Dimitar Zograf. Per le foto all'interno seguire le indicazioni del monastero.",
        come: "Dentro il cortile del monastero.",
        quando: "Mattina.",
        tempo: "30-45 minuti",
        costo: "ingresso libero",
        consiglio: "Il silenzio della montagna intorno è la parte più bella."
      },
      {
        nome: "Museo di Storia Ecclesiastica e Croce di Rafail",
        testo: "Il museo del monastero conserva reliquie e la Croce di Rafail, un pezzo unico di legno di 81 x 43 cm in cui il monaco Rafail intagliò 104 scene religiose e 650 figure in miniatura. È piccolo ma ricco.",
        come: "Nel complesso, ingresso a parte.",
        quando: "Giorno.",
        tempo: "45 minuti",
        costo: "biglietto a parte, in euro dal 2026: prezzo esposto sul posto",
        consiglio: "Il biglietto è facile da perdere: tenerlo in tasca."
      }
    ],
    sapori: [
      {
        nome: "Pasto al sacco",
        testo: "Al monastero non ci sono ristoranti d'obbligo: pranzo prima o dopo."
      }
    ],
    attenzioni: [
      "Abbigliamento modesto: spalle e ginocchia coperte, niente cappello dentro la chiesa.",
      "Dentro la chiesa rispettare le regole sulle foto e parlare a bassa voce.",
      "Strada di montagna: in inverno servono gomme da neve."
    ],
    esperienzeSlugs: ['visita-monastero-rila'],
    tripSlugs: ['bulgaria-bansko-rila'],
    imageAlt: 'La facciata affrescata della Chiesa della Natività della Vergine al Monastero di Rila, Bulgaria',
    immagine: '/images/copertine/bulgaria-bansko-rila.jpg',
  },
]
