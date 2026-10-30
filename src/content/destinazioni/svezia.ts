import type { Destinazione } from '@/lib/types'

// Contenuto ricostruito dal viaggio "Lapponia svedese: Capodanno sotto l'aurora"
// (src/content/viaggi/14-lapponia-svedese-abisko.md), a sua volta ricostruito
// incrociando i documenti dell'agenzia "Mama Family Travel Partner" (preventivo,
// piano hotel, piano voli, presentazione comparativa Capodanno). Dove un dato
// non è nei documenti originali, il campo resta con una nota esplicita
// "da confermare/da completare" — nessun fatto inventato.
//
// Le immagini sono foto stock temporanee (Pixabay/Pexels, licenze free-use),
// scelte per rappresentare davvero il luogo in attesa di foto originali.
//
// Stoccolma serve un secondo viaggio, "Capitali nordiche"
// (src/content/viaggi/60-capitali-nordiche.md): lì la città non è più solo
// il transito di una notte verso Kiruna, ma una tappa piena di 2-3 giorni.
// visitataPersonalmente resta true (la notte di transito è stata vissuta
// davvero) e miaEsperienza non cambia — racconta solo quel transito. Le voci
// aggiunte per il nuovo itinerario (Gamla Stan, Vasa Museum, City Hall, ABBA
// Museum, arcipelago) sono ricerca, non ricordo: coerente con le singole
// schede Esperienza collegate, che restano giudizio 'da-verificare'.

export const destinazioniSvezia: Destinazione[] = [
  {
    slug: 'stoccolma',
    paeseSlug: 'svezia',
    ordine: 1,
    nome: 'Stoccolma',
    tipologia: ['cultura', 'città'],
    giorniConsigliati:
      'una notte all\'andata e una al ritorno nel viaggio in Lapponia, solo di transito; 2-3 giorni pieni nell\'itinerario «Capitali nordiche», come seconda tappa dopo Copenaghen',
    visitataPersonalmente: true,
    introduzione:
      'Nel viaggio in Lapponia è il transito obbligato tra il volo internazionale e quello interno per Kiruna. Ma è anche una capitale che merita molto più di una notte: è costruita su quattordici isole collegate da oltre cinquanta ponti, e ha il nucleo medievale di Gamla Stan, il relitto secentesco del Vasa e il municipio dove ogni anno si tiene il banchetto del Nobel.',
    percheAndarci:
      'Per il volo interno verso Kiruna bisogna comunque passarci, una notte per direzione. Ed è la seconda tappa naturale di un giro delle capitali nordiche: da Copenaghen si arriva in treno o in aereo, e tra centro storico, musei e arcipelago la città riempie bene 2-3 giorni.',
    cosaVedere: [
      'Il centro città, in una versione molto ridotta se si è solo in transito per una notte',
      'Gamla Stan, il centro storico medievale su un\'isola propria: vicoli stretti, case colorate, il Palazzo Reale (con il cambio della guardia) e la piazza di Stortorget',
      'Il Vasamuseet (Museo Vasa), con una nave da guerra reale del 1628 affondata nel porto di Stoccolma durante il viaggio inaugurale e recuperata quasi intatta nel 1961: una delle navi antiche meglio conservate al mondo',
      'Stadshuset, il Municipio in mattoni rossi affacciato sull\'acqua, sede del banchetto del Premio Nobel nella Sala Blu e della Sala Dorata rivestita di oltre 18 milioni di tessere dorate',
      'ABBA The Museum, sull\'isola di Djurgården, dedicato al gruppo pop più famoso della Svezia, con cimeli originali e stanze interattive',
      'L\'arcipelago di Stoccolma (Stockholms skärgård), oltre 30.000 tra isole e isolotti che si aprono a est della città verso il Mar Baltico',
    ],
    cosaFare: [
      'Poco altro oltre a check-in/check-out se si è solo in transito per una notte',
      'Una passeggiata tra i vicoli di Gamla Stan, con sosta a Stortorget',
      'La visita al Vasamuseet (vedi la scheda esperienza dedicata)',
      'Un tour guidato di Stadshuset, con salita alla torre nei mesi caldi per la vista sulla città (l\'accesso è stagionale: conviene controllare gli orari prima)',
      'Una mezza giornata o una giornata intera in barca nell\'arcipelago (vedi la scheda esperienza dedicata)',
    ],
    doveDormire:
      'Ho dormito al Radisson Blu Royal Viking sia all\'andata sia al ritorno, in transito verso la Lapponia: una catena internazionale affidabile, comoda per chi arriva o parte con voli serali. Per un soggiorno pieno, Gamla Stan e Norrmalm/città vecchia restano le zone più centrali e comode a piedi; Södermalm, più giovane e con bar e ristoranti suoi, è un\'alternativa spesso più economica a pochi minuti di metro dal centro.',
    doveMangiare:
      'Nelle soste di transito avevo poche ore e non ho locali da segnalare. Gran parte dell\'offerta della città sta a Södermalm e a Östermalm, dai fast-casual ai ristoranti di fascia alta.',
    comeArrivare:
      'Volo internazionale su Stoccolma Arlanda. Per chi arriva come seconda tappa dell\'itinerario «Capitali nordiche», da Copenaghen c\'è il treno diretto SJ (circa 5 ore) o il volo (circa 1 ora).',
    comeSpostarsi: 'Per il solo transito aeroporto-hotel non serve. Per un soggiorno pieno ci sono metro (Tunnelbana), bus e traghetti urbani con biglietto integrato SL; il centro storico si gira bene anche a piedi.',
    periodoMigliore: 'maggio-settembre per il clima e per le uscite in arcipelago, che funzionano meglio con le giornate lunghe',
    costi:
      'Biglietto SL singolo 43 SEK, pass giornaliero 180 SEK. Vasamuseet 195-240 SEK secondo la stagione. ABBA The Museum 269-349 SEK. Gita in arcipelago da circa 375 SEK (circa 33€) per un\'uscita guidata di 2-2,5 ore.',
    erroriDaEvitare: [],
    miaEsperienza:
      'Stoccolma per me è stata solo una tappa logistica, all\'andata e al ritorno: giusto il tempo di dormire tra un volo e l\'altro.',
    esperienzeSlugs: ['vasamuseet-stoccolma', 'gamla-stan-passeggiata', 'abba-museum-stoccolma', 'arcipelago-stoccolma-in-barca'],
    tripSlugs: ['lapponia-svedese-abisko', 'capitali-nordiche'],
    imageAlt: 'Case colorate del centro storico di Stoccolma affacciate sull\'acqua in inverno',
    immagine: '/images/svezia/stoccolma-stock.jpg',
  },
  {
    slug: 'kiruna',
    paeseSlug: 'svezia',
    ordine: 2,
    nome: 'Kiruna',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2-3 notti totali (andata e ritorno), base logistica per Abisko',
    visitataPersonalmente: true,
    introduzione: 'La città più a nord della Svezia, base logistica per Abisko. È famosa per la miniera di ferro LKAB, che sta costringendo la città a spostarsi, pezzo per pezzo, qualche chilometro più in là.',
    percheAndarci: 'È il passaggio obbligato per Abisko, ma ha una sua identità: la chiesa di legno rossa, il centro in piena trasformazione urbanistica e, poco lontano, l\'ICEHOTEL.',
    cosaVedere: [
      'La chiesa di legno rossa di Kiruna, uno degli edifici simbolo della città',
      'Il centro città, che nei prossimi anni verrà smontato e ricostruito altrove per l\'espansione della miniera',
    ],
    cosaFare: [
      'Giro del centro a piedi',
      'Relax in spa all\'Elite Hotel Frost dopo le giornate più intense ad Abisko',
      'Visita guidata alla miniera LKAB (3 ore, fino a 540 m di profondità; vedi la scheda esperienza dedicata)',
      'Gita di mezza giornata all\'ICEHOTEL di Jukkasjärvi, a circa 20 minuti (vedi la scheda esperienza dedicata)',
    ],
    doveDormire:
      'All\'andata ho dormito allo STF Malmfältens Folkhögskola, una sistemazione semplice ed essenziale gestita dalla Svenska Turistföreningen (l\'associazione escursionistica svedese, molto presente in tutta la regione). Al ritorno all\'Elite Hotel Frost - Hotel & Spa: un bel salto di qualità, con una spa interna ideale per recuperare dopo le giornate più fredde ad Abisko.',
    doveMangiare: 'Non ho ristoranti da segnalare. Il budget indicativo che avevo messo in conto: colazioni 10-15€/giorno, pranzi e cene 30-50€ a pasto.',
    comeArrivare: 'Volo interno da Stoccolma Arlanda; poi treno panoramico per Abisko.',
    comeSpostarsi: 'A piedi in centro; treno per Abisko.',
    periodoMigliore: 'lo stesso di Abisko: da fine dicembre a marzo per l\'aurora, con febbraio-marzo molto più economici',
    costi:
      'La chiesa e il centro si visitano gratis. La miniera LKAB costa circa 590 SEK (52€) a persona per il tour guidato di 3 ore. L\'ICEHOTEL costa 349 SEK (31€) solo ingresso di giorno, da 3.995 SEK (350€) a notte per 2 persone per dormirci. Doppia in hotel di fascia media in città: indicativamente 100-150€/notte.',
    erroriDaEvitare: [],
    miaEsperienza:
      'Kiruna per me è stata una base pratica più che una meta: all\'andata l\'essenzialità dello STF, al ritorno la spa dell\'Elite Hotel Frost, e sullo sfondo la chiesa rossa e il centro in trasformazione.',
    esperienzeSlugs: ['icehotel-jukkasjarvi', 'miniera-lkab-kiruna'],
    tripSlugs: ['lapponia-svedese-abisko'],
    imageAlt: 'Chiesa di legno rossa di Kiruna sotto un cielo invernale svedese',
    immagine: '/images/svezia/kiruna-stock.jpg',
  },
  {
    slug: 'abisko',
    paeseSlug: 'svezia',
    ordine: 3,
    nome: 'Abisko',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2-3 notti, cuore del viaggio',
    visitataPersonalmente: true,
    introduzione: 'Il motivo del viaggio: un parco nazionale con un microclima secco che ne fa uno dei posti migliori al mondo per vedere l\'aurora boreale, e la base per motoslitta, husky sledding e la Aurora Sky Station.',
    percheAndarci: 'Prima di tutto per l\'aurora boreale. Poi per la natura artica del parco nazionale e per le due attività più adrenaliniche del viaggio.',
    cosaVedere: [
      'La vista dalla Aurora Sky Station, in cima al monte Nuolja',
      'Il lago ghiacciato del parco nazionale',
    ],
    cosaFare: [
      'Aurora Sky Station: seggiovia e cena panoramica (vedi la scheda esperienza dedicata)',
      'Motoslitta sul lago ghiacciato (vedi la scheda esperienza dedicata)',
      'Husky sledding con caccia all\'aurora (vedi la scheda esperienza dedicata)',
    ],
    doveDormire:
      'Ho dormito allo STF Abisko Turiststation, la storica stazione di montagna dentro il parco nazionale, da cui si parte direttamente per la seggiovia della Aurora Sky Station. È essenziale, ma immersa nel parco ha un\'atmosfera che altrove non ho trovato.',
    doveMangiare: 'Non ho locali da segnalare: le colazioni sono spesso incluse nelle strutture STF, pranzi e cene nella media che avevo messo in conto (30-50€ a pasto).',
    comeArrivare: 'Treno panoramico da Kiruna: poco più di un\'ora in un paesaggio sempre più spoglio.',
    comeSpostarsi: 'A piedi nel villaggio; escursioni organizzate per motoslitta e husky.',
    periodoMigliore: 'da fine dicembre a marzo; febbraio-marzo costa molto meno pur mantenendo alte probabilità di aurora',
    costi:
      'Attività, prezzo indicativo a persona: seggiovia Aurora Sky Station 35-40€ (pacchetto con cena e pernottamento in quota circa 270-310€, solo il venerdì); motoslitta guidata sul lago ghiacciato circa 100-110€ (self-drive 150-250€); husky sledding serale con caccia all\'aurora 240€ (versioni diurne più brevi da 70€). Costi dell\'intero viaggio per persona: voli 600-645€, alloggi 400-600€, trasporti interni 80€ (treno panoramico + transfer aeroportuale), escursioni 450-500€ per 3 tour con guida. Budget totale indicativo da 1.500€ (base) a 1.800€ (livello ottimo).',
    erroriDaEvitare: [
      'Andare a Capodanno se l\'obiettivo è risparmiare: è il periodo più caro dell\'anno per volare e dormire in zona',
      'Non tenere un margine extra sui trasporti: con il freddo estremo i treni a volte vengono cancellati (non spesso, ma succede), e in quei casi i taxi della zona tendono ad alzare un po\' i prezzi',
    ],
    miaEsperienza:
      'Abisko è stato il cuore del viaggio: la cena in quota alla Aurora Sky Station, la motoslitta sul lago ghiacciato e l\'husky sledding sotto un cielo che a un certo punto si è acceso sul serio. Sono i ricordi più forti della settimana.',
    esperienzeSlugs: ['aurora-sky-station', 'motoslitta-lago-ghiacciato', 'husky-sledding-caccia-aurora'],
    tripSlugs: ['lapponia-svedese-abisko'],
    imageAlt: 'Aurora boreale verde sopra le montagne innevate del parco nazionale di Abisko',
    immagine: '/images/svezia/abisko-stock.jpg',
  },
]
