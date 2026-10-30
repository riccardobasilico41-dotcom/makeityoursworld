import type { Destinazione } from '@/lib/types'

// Le sette zone della Jungfrau Region trattate in "Svizzera in van"
// (src/content/viaggi/52-svizzera-alpi-van.md). Nessuna di queste
// destinazioni è stata visitata realmente: tutte hanno
// visitataPersonalmente: false e nessuna ha il campo miaEsperienza, per
// onestà verso chi legge (vedi il commento del tipo Destinazione in
// src/lib/types.ts: "Se assente, la UI mostra un placeholder editoriale
// invece di inventare un ricordo"). Nessun nome di hotel, ristorante o
// operatore è stato inventato. Prezzi, orari stagionali di passi e funivie
// e regole di campeggio in van cambiano ogni stagione e da un cantone
// all'altro: vanno riverificati prima di partire.

export const destinazioniSvizzera: Destinazione[] = [
  {
    slug: 'interlaken',
    paeseSlug: 'svizzera',
    ordine: 1,
    nome: 'Interlaken e i laghi di Thun e Brienz',
    tipologia: ['laghi', 'base logistica', 'montagna'],
    giorniConsigliati: '1-2 giorni come base, tutto il resto del giro vi ruota intorno',
    visitataPersonalmente: false,
    introduzione:
      'Interlaken significa «fra i laghi»: sta su una lingua di terra fra il Lago di Thun a ovest e il Lago di Brienz a est, tutti e due di un turchese lattiginoso per i sedimenti glaciali in sospensione. È lo snodo logistico della regione, con diversi campeggi nel giro di pochi chilometri.',
    percheAndarci:
      'È la base più pratica per un van in tutta la Jungfrau Region: c\'è la stazione principale, ci sono supermercati e noleggi di attrezzatura outdoor, e ogni altra zona di questa guida si raggiunge in giornata senza cambiare alloggio ogni notte.',
    cosaVedere: [
      'Il Lago di Thun e il Lago di Brienz, turchesi e lattiginosi per i sedimenti glaciali',
      'Il centro di Interlaken, con l\'Höheweg, il lungo viale con vista sulla Jungfrau in fondo',
      'Il castello di Oberhofen, sul Lago di Thun, con il parco botanico affacciato sull\'acqua',
      'Il villaggio di Iseltwald, sul Lago di Brienz, con l\'imbarcadero diventato famoso grazie ad alcune produzioni internazionali',
    ],
    cosaFare: [
      'Un giro in battello storico su uno dei due laghi, con imbarcazioni a vapore ancora in servizio',
      'Passeggiata sull\'Höheweg al tramonto, quando la Jungfrau si accende di rosa',
      'Fare la spesa grossa da Coop o Migros in centro prima di salire nelle valli, dove i prezzi aumentano',
    ],
    doveDormire:
      'Sulle rive dei due laghi, a pochi minuti dal centro, ci sono diversi campeggi attrezzati per van: è la zona della guida con più posti legali per dormire.',
    doveMangiare:
      'Rösti, fondue e raclette con i formaggi d\'alpeggio locali sono la base della cucina della regione. Un pasto semplice in un ristorante di fascia media di rado costa meno di 25-30 CHF a persona.',
    comeArrivare: 'Uscita autostradale diretta da Berna (circa un\'ora) o dal Vallese via Grimsel-Furka.',
    comeSpostarsi: 'A piedi nel centro; il van serve per raggiungere le altre zone, tutte entro 20-30 minuti di guida.',
    periodoMigliore: 'da giugno a settembre, con luglio-agosto più caldo e affollato.',
    costi: 'Campeggi 35-50 CHF/notte; giro in battello da circa 20-30 CHF a tratta singola.',
    erroriDaEvitare: [
      'Arrivare senza aver prenotato, o almeno individuato, un campeggio per la prima notte',
      'Fare la spesa nei minimarket delle valli, molto più cari, invece che nei supermercati di Interlaken',
      'Sottovalutare quanto tempo prendano le altre zone: Interlaken è la base, non la meta principale del viaggio',
    ],
    esperienzeSlugs: ['giro-battello-laghi-thun-brienz'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Interlaken vista dall\'alto, con il fiume Aare color smeraldo che attraversa la cittadina tra le montagne, nella piana tra i laghi di Thun e Brienz',
    immagine: '/images/svizzera/interlaken.jpg',
  },
  {
    slug: 'lauterbrunnen',
    paeseSlug: 'svizzera',
    ordine: 2,
    nome: 'Lauterbrunnen e la valle delle cascate',
    tipologia: ['natura', 'trekking', 'montagna'],
    giorniConsigliati: '1 giorno pieno',
    visitataPersonalmente: false,
    introduzione:
      'Una gola glaciale a pareti verticali, con settantadue cascate censite nei suoi dodici chilometri. La più famosa è la Staubbach, 300 metri di salto quasi in centro al paese: ha ispirato Goethe e, secondo la tradizione locale, la valle di Rivendell nel «Signore degli Anelli».',
    percheAndarci:
      'È la valle più scenografica della regione e il punto di partenza per Mürren, Wengen e Gimmelwald, villaggi senza auto raggiungibili solo in funivia o cremagliera. E ci sono le Trümmelbachfälle, un fenomeno geologico che non ha uguali altrove.',
    cosaVedere: [
      'La cascata Staubbach, che precipita per 300 metri quasi nel centro del paese',
      'Le Trümmelbachfälle, dieci cascate glaciali che si vedono da gallerie e ascensori scavati nella montagna (vedi la scheda esperienza dedicata)',
      'I villaggi senza auto di Wengen e Gimmelwald, raggiungibili solo in funivia o cremagliera',
    ],
    cosaFare: [
      'Percorrere il fondovalle a piedi o in bici fra le cascate, su un tracciato quasi pianeggiante',
      'Salire in funivia o cremagliera verso Mürren o Wengen per la vista dall\'alto sulla gola',
      'Visitare le Trümmelbachfälle, aperte da inizio aprile a inizio novembre',
    ],
    doveDormire:
      'Campeggi attrezzati sul fondovalle. **In questa valle il campeggio libero è vietato**, con multe fino a 200 CHF, e il divieto viene fatto rispettare.',
    doveMangiare: 'Ristoranti di fondovalle con cucina svizzero-tedesca di montagna; prezzi nella media alta della regione.',
    comeArrivare: 'Da Interlaken, 20 minuti d\'auto o di treno.',
    comeSpostarsi: 'Il fondovalle a piedi o in bici; per Mürren, Wengen e Gimmelwald servono funivia o cremagliera, perché l\'auto non arriva.',
    periodoMigliore: 'da giugno a settembre, con le cascate più abbondanti a inizio estate per lo scioglimento della neve.',
    costi: 'Trümmelbachfälle 18 CHF ingresso adulti, 8 CHF bambini 6-15 anni.',
    erroriDaEvitare: [
      'Montare tavolino e sedie fuori dal van in un parcheggio non autorizzato: la polizia locale controlla proprio questo, anche dove dormire nel mezzo è tollerato',
      'Arrivare alle Trümmelbachfälle senza sapere che sono chiuse da inizio novembre a inizio aprile',
      'Non prevedere le scarpe da pioggia: le gallerie delle cascate sono umide e scivolose',
    ],
    esperienzeSlugs: ['trummelbachfalle'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'La cascata Staubbach che precipita dalla parete di roccia sopra gli chalet di Lauterbrunnen, tra le nuvole basse, in toni quasi monocromi',
    immagine: '/images/svizzera/lauterbrunnen.jpg',
  },
  {
    slug: 'grindelwald',
    paeseSlug: 'svizzera',
    ordine: 3,
    nome: 'Grindelwald e il First',
    tipologia: ['montagna', 'panorama', 'famiglia'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: false,
    introduzione:
      'Ai piedi della parete nord dell\'Eiger, Grindelwald è il villaggio più «da cartolina» della regione. Da qui parte la funivia per il First, dove il Cliff Walk regala uno dei panorami più fotografati delle Alpi Bernesi senza nessuna camminata impegnativa.',
    percheAndarci:
      'È il modo più semplice di avvicinarsi all\'Eiger senza un dislivello serio, e il First va bene sia per chi cammina fino al Bachalpsee sia per chi vuole solo il panorama dalla funivia.',
    cosaVedere: [
      'La parete nord dell\'Eiger, visibile da tutto il paese',
      'Il First Cliff Walk, una passerella metallica a sbalzo sulla parete rocciosa',
      'Il Bachalpsee, un laghetto alpino che riflette Eiger, Mönch e Jungfrau nelle giornate senza vento',
    ],
    cosaFare: [
      'Salire in funivia al First e percorrere il Cliff Walk, incluso nel biglietto e ripetibile quante volte si vuole',
      'Camminare fino al Bachalpsee, 2-3 ore andata e ritorno con dislivello moderato',
      'Provare lo zipline First Flyer, attività extra a pagamento sul posto',
    ],
    doveDormire: 'Campeggi in zona, più economici di Interlaken ma con meno scelta.',
    doveMangiare: 'Ristoranti di montagna con vista sull\'Eiger, prezzi allineati al resto della regione.',
    comeArrivare: 'Da Interlaken, 20 minuti d\'auto o di treno.',
    comeSpostarsi: 'Il paese si gira a piedi; per il First e il Bachalpsee serve la funivia.',
    periodoMigliore: 'da giugno a settembre; il Bachalpsee resta spesso ghiacciato fino a giugno inoltrato.',
    costi: 'Funivia First 72-76 CHF A/R secondo la stagione; Cliff Walk incluso.',
    erroriDaEvitare: [
      'Salire al First credendo che il Bachalpsee sia «dietro l\'angolo»: la camminata richiede 2-3 ore andata e ritorno',
      'Sottovalutare il vento in cima, che sul Cliff Walk può essere forte anche con cielo sereno a valle',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'La parete nord dell\'Eiger innevata che domina il villaggio di Grindelwald, con chalet e prati verdi ai suoi piedi',
    immagine: '/images/svizzera/grindelwald.jpg',
  },
  {
    slug: 'jungfraujoch',
    paeseSlug: 'svizzera',
    ordine: 4,
    nome: 'Jungfraujoch, il Top of Europe',
    tipologia: ['ghiacciaio', 'panorama', 'esperienza unica'],
    giorniConsigliati: '1 giorno intero',
    visitataPersonalmente: false,
    introduzione:
      'La stazione ferroviaria più alta d\'Europa, a 3.454 metri. Ci arriva una cremagliera scavata quasi tutta nella roccia dell\'Eiger e del Mönch fra il 1896 e il 1912. In cima c\'è il ghiacciaio dell\'Aletsch, il più lungo delle Alpi.',
    percheAndarci:
      'È l\'unico punto di questa guida dove si sta oltre i 3.400 metri senza un\'escursione impegnativa, davanti al ghiacciaio più lungo delle Alpi. È anche il biglietto più caro del viaggio: va trattato come la giornata principale.',
    cosaVedere: [
      'Il ghiacciaio dell\'Aletsch, il più esteso delle Alpi, patrimonio UNESCO',
      'Il palazzo di ghiaccio scavato nel permafrost',
      'Le terrazze panoramiche, da cui nelle giornate limpide si vede fino alla Foresta Nera',
    ],
    cosaFare: [
      'Salire con la cremagliera da Interlaken Ost, partendo presto per avere più probabilità di cielo sereno',
      'Camminare sul primo tratto del ghiacciaio dell\'Aletsch, dove segnalato e in sicurezza',
      'Visitare il palazzo di ghiaccio, incluso nel biglietto',
    ],
    doveDormire: 'Non si pernotta in quota: è una gita di giornata da Interlaken o dalle valli vicine.',
    doveMangiare: 'Ristoranti self-service in stazione, prezzi da zona di alta quota isolata.',
    comeArrivare: 'Treno a cremagliera da Interlaken Ost, con cambi a Grindelwald o Lauterbrunnen e a Kleine Scheidegg, circa 2h20 complessive.',
    comeSpostarsi: 'A piedi tra le terrazze e le gallerie panoramiche in quota.',
    periodoMigliore: 'tutto l\'anno, con orari e frequenze diversi fra alta e bassa stagione; di solito le mattine sono più serene dei pomeriggi.',
    costi: 'Biglietto A/R da Interlaken Ost circa 224-261 CHF secondo la stagione; Good Morning Ticket scontato per chi parte entro le 8.',
    erroriDaEvitare: [
      'Partire nel primo pomeriggio: di solito le nuvole si formano dopo mezzogiorno e coprono la vista',
      'Non prenotare online: alla cassa i biglietti costano di solito di più',
      'Sottovalutare il freddo in quota anche in piena estate: servono giacca a vento e strati anche a luglio',
    ],
    esperienzeSlugs: ['jungfraujoch-top-of-europe'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Il ghiacciaio dell\'Aletsch e lo Jungfraufirn visti dalla terrazza panoramica della Sphinx al Jungfraujoch',
    immagine: '/images/svizzera/jungfraujoch.jpg',
  },
  {
    slug: 'muerren-schilthorn',
    paeseSlug: 'svizzera',
    ordine: 5,
    nome: 'Mürren e lo Schilthorn',
    tipologia: ['montagna', 'panorama', 'trekking'],
    giorniConsigliati: '1 giorno, più mezza giornata per chi fa la via ferrata',
    visitataPersonalmente: false,
    introduzione:
      'Mürren è uno dei villaggi senza auto della valle di Lauterbrunnen, con una delle viste più aperte della regione su Eiger, Mönch e Jungfrau. Sopra il paese la funivia sale allo Schilthorn, dove il ristorante girevole Piz Gloria, reso famoso da un film di James Bond, guarda a 360 gradi su oltre duecento vette.',
    percheAndarci:
      'Ha lo stesso panorama di Grindelwald sulla catena Eiger-Mönch-Jungfrau, ma dal lato opposto della valle e in un paese senza auto. E da qui parte la via ferrata più nota della regione.',
    cosaVedere: [
      'Il panorama sulla catena Eiger-Mönch-Jungfrau dal paese di Mürren, senza pareti a bloccare la vista',
      'Il ristorante girevole Piz Gloria in cima allo Schilthorn, set del film «Al servizio segreto di Sua Maestà»',
      'Il villaggio di Gimmelwald, ancora più piccolo e meno turistico, raggiungibile a piedi dalla via ferrata o in funivia',
    ],
    cosaFare: [
      'Salire in funivia allo Schilthorn per il panorama a 360 gradi',
      'Percorrere la via ferrata Mürren-Gimmelwald, circa 2,2 km con un ponte sospeso di 90 metri (vedi la scheda esperienza dedicata)',
      'Camminare da Mürren a Gimmelwald per il sentiero normale, alternativa senza attrezzatura da ferrata',
    ],
    doveDormire: 'Nessun campeggio dentro Mürren (paese senza auto): si dorme nei campeggi del fondovalle a Lauterbrunnen o Stechelberg.',
    doveMangiare: 'Ristoranti di paese con cucina di montagna; il Piz Gloria in cima allo Schilthorn ha un menù turistico con prezzi da terrazza panoramica.',
    comeArrivare: 'Da Lauterbrunnen, funivia da Stechelberg oppure cremagliera via Grütschalp.',
    comeSpostarsi: 'Mürren si gira a piedi; per lo Schilthorn e per Gimmelwald servono funivia o via ferrata.',
    periodoMigliore: 'da giugno a ottobre; la via ferrata è aperta solo in questa finestra.',
    costi: 'Funivia Schilthorn circa 115 CHF A/R da Stechelberg, 91 CHF da Mürren.',
    erroriDaEvitare: [
      'Affrontare la via ferrata senza kit omologato o senza aver fatto prima un percorso più semplice',
      'Lasciare il van a Lauterbrunnen pensando di guidare fino a Mürren: il paese non è raggiungibile in auto',
    ],
    confronti: [
      {
        titolo: 'Salire allo Schilthorn da Stechelberg o da Mürren',
        introduzione:
          'La funivia per lo Schilthorn ha due punti di partenza, con una differenza di prezzo e di tempo da conoscere prima di scegliere.',
        opzioni: [
          {
            nome: 'Da Stechelberg (fondovalle)',
            sintesi: 'Il percorso completo, dal fondo della valle di Lauterbrunnen fino in cima, con un solo biglietto su più tronconi.',
            costo: 'circa 115 CHF A/R',
            durata: '32 minuti di sola andata',
            pro: ['Un unico biglietto per tutto il dislivello', 'Non richiede prima la cremagliera per Mürren'],
            contro: ['Più caro della tratta da Mürren', 'Il van deve arrivare fino a Stechelberg, ultimo tratto della valle'],
            perChi: 'Chi arriva in van fin dentro la valle e non vuole cambiare mezzo più volte.',
          },
          {
            nome: 'Da Mürren',
            sintesi: 'Si arriva prima a Mürren in cremagliera da Lauterbrunnen via Grütschalp, poi si prende la funivia più corta per lo Schilthorn.',
            costo: 'circa 91 CHF A/R da Mürren',
            durata: 'tratta più breve rispetto a Stechelberg',
            pro: ['Tratta finale più economica', 'Si passa comunque da Mürren, utile per chi vuole vedere anche il paese'],
            contro: ['Serve anche il biglietto della cremagliera fino a Mürren, quindi si risparmia meno di quanto sembri'],
            perChi: 'Chi vuole comunque fermarsi a Mürren prima o dopo la salita allo Schilthorn.',
          },
        ],
        raccomandazione:
          'Per chi ha il van e vuole vedere anche il paese di Mürren, la tratta da Stechelberg con sosta intermedia resta la più semplice da organizzare in una sola giornata.',
      },
    ],
    esperienzeSlugs: ['via-ferrata-muerren-gimmelwald'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Una cabina della funivia dello Schilthorn sospesa tra Mürren e Birg, sopra le pareti rocciose della valle di Lauterbrunnen',
    immagine: '/images/svizzera/muerren-schilthorn.jpg',
  },
  {
    slug: 'grimsel-furka',
    paeseSlug: 'svizzera',
    ordine: 6,
    nome: 'Grimselpass e Furkapass',
    tipologia: ['roadtrip', 'panorama', 'passi alpini'],
    giorniConsigliati: '1 giorno di trasferimento',
    visitataPersonalmente: false,
    introduzione:
      'La strada che porta dalle Alpi Bernesi al Vallese attraverso due dei passi più scenografici della Svizzera: il Grimselpass (2.164 m), fra laghi artificiali color smeraldo, e il Furkapass (2.429 m), famoso per l\'inseguimento in Aston Martin di «Goldfinger» e affacciato sulla lingua terminale del ghiacciaio del Rodano.',
    percheAndarci:
      'È la giornata di guida pura di questa guida: qui il van serve ad attraversare le Alpi, oltre che a visitarle. E collega la Jungfrau Region a Zermatt senza tornare indietro verso la pianura.',
    cosaVedere: [
      'I laghi artificiali del Grimsel, verde smeraldo fra la roccia grigia',
      'Il ghiacciaio del Rodano, visibile dal Furkapass: è in forte ritiro e d\'estate in parte coperto da teli riflettenti per rallentarne lo scioglimento',
      'L\'Hotel Belvédère, abbandonato sul Furkapass, dove è stato girato l\'inseguimento in auto di «Goldfinger»',
    ],
    cosaFare: [
      'Percorrere la strada con soste fotografiche ai punti panoramici segnalati',
      'Una breve camminata alla lingua del ghiacciaio del Rodano, dove l\'accesso è consentito',
    ],
    doveDormire: 'Nessuna sosta prevista: è una giornata di trasferimento tra la Jungfrau Region e il Vallese.',
    doveMangiare: 'Pochi rifugi e punti di ristoro sui passi, con prezzi da alta quota isolata: conviene avere provviste nel van.',
    comeArrivare: 'Da Interlaken o dalla zona di Lauterbrunnen-Mürren, circa 2-3 ore di guida con soste.',
    comeSpostarsi: 'Solo in auto o van; non esiste un collegamento pubblico diretto lungo l\'intero tracciato.',
    periodoMigliore: 'da giugno a ottobre; le date di apertura cambiano ogni anno secondo la neve rimasta.',
    costi: 'Nessun pedaggio sulla strada.',
    erroriDaEvitare: [
      'Programmare il trasferimento senza controllare prima che i due passi siano aperti, soprattutto a inizio giugno o a fine ottobre',
      'Non sapere che il Furka ha un\'alternativa in treno-navetta (Furka Autoverlad) quando il passo è chiuso alla circolazione ordinaria',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'La valle del Grimselpass con i laghi artificiali tra le rocce granitiche e le cime ancora innevate',
    immagine: '/images/svizzera/grimsel-furka.jpg',
  },
  {
    slug: 'zermatt',
    paeseSlug: 'svizzera',
    ordine: 7,
    nome: 'Zermatt e il Cervino',
    tipologia: ['montagna', 'panorama', 'iconico'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: false,
    introduzione:
      'Il punto più a sud di questa guida, e l\'unico dove il van non entra: Zermatt è chiusa al traffico privato dal 1961. In cambio c\'è il Cervino (Matterhorn), 4.478 metri di piramide di roccia quasi perfetta, visibile dal centro del paese.',
    percheAndarci:
      'Il Cervino è una delle montagne più riconoscibili al mondo. Zermatt è la zona più cara e più lontana di questa guida, ma ha punti panoramici (il Gornergrat prima di tutti) che nel resto del giro non hanno equivalenti.',
    cosaVedere: [
      'Il Cervino (Matterhorn), visibile dal centro del paese in ogni giornata serena',
      'Il Gornergrat, raggiunto dalla ferrovia a cremagliera più alta d\'Europa all\'aperto',
      'Il centro storico di Zermatt, senza traffico automobilistico, con i tradizionali fienili di legno su piedritti in pietra',
    ],
    cosaFare: [
      'Salire al Gornergrat in treno per la vista frontale sul Cervino',
      'Passeggiare nel centro di Zermatt, libero da auto',
      'Per chi ha tempo, una delle molte funivie panoramiche minori intorno al paese',
    ],
    doveDormire: 'Dentro Zermatt in van non si dorme, perché la città è chiusa al traffico privato: si dorme nel van a Täsch o si torna verso le altre zone.',
    doveMangiare: 'Ristoranti da paese turistico, fra i più cari della guida; conviene alternarli con pasti preparati nel van a Täsch.',
    comeArrivare: 'Il van si lascia nel parcheggio coperto di Täsch, 5 km prima di Zermatt; da lì un treno navetta parte ogni 20 minuti.',
    comeSpostarsi: 'A piedi in paese; per il Gornergrat e le altre quote serve la ferrovia a cremagliera o le funivie.',
    periodoMigliore: 'da giugno a settembre; il Cervino resta comunque visibile (quando il cielo è sereno) tutto l\'anno.',
    costi: 'Parcheggio Täsch da 17 CHF/giorno; Gornergrat a parte, non incluso nel parcheggio.',
    erroriDaEvitare: [
      'Provare a entrare a Zermatt in van o in auto: il divieto c\'è e viene controllato',
      'Non mettere in conto il tempo di guida per arrivarci: oltre due ore da Interlaken anche passando per Grimsel-Furka',
      'Dare per scontato il Cervino libero dalle nuvole: se ne forma di proprie anche quando intorno il cielo è pulito',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Il Cervino al tramonto riflesso in un laghetto alpino sopra Zermatt, con un escursionista di spalle in primo piano',
    immagine: '/images/svizzera/zermatt.jpg',
  },
]
