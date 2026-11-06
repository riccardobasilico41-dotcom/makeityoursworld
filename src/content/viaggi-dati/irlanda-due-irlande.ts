import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per «Le due Irlande: dalla Repubblica all'Irlanda del Nord
// in 12 giorni». Il testo narrativo resta nel markdown (src/content/viaggi/98-irlanda-due-irlande.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..." del markdown.
//
// Viaggio di Rick (conferma 6/11/2026) in forma di guida, niente campi personali inventati. Foto dei giorni da
// Wikimedia Commons, crediti in docs/irlanda-registri.md (da copiare in viaggi-giorno-foto-crediti.ts).
// Il viaggio tocca due schede: paeseSlug è 'irlanda', la tappa di apertura (stesso criterio di
// capitali-baltiche.ts e centro-america-itinerario.ts). Limite noto del tipo TripMeta: DayTimeline e
// RouteTimeline combinano questo paeseSlug con ogni destinazioneSlug, quindi i link «Scopri» dei
// Giorni 10-12 puntano a /destinazioni/irlanda/<slug> invece che a /destinazioni/irlanda-del-nord/<slug>.
// Il testo markdown linka già i percorsi giusti. Vedi docs/irlanda-registri.md.

const FOTO = '/images/viaggi/irlanda-due-irlande'

export const irlandaDueIrlandeMeta: TripMeta = {
  tripSlug: 'irlanda-due-irlande',
  paeseSlug: 'irlanda',
  provenienza: 'journey',
  mesiConsigliati: [5, 6, 7, 8, 9],
  ritmo:
    'Medio con qualche giornata intensa: due giorni fermi a Dublino, poi un cambio di base quasi ogni sera, con tappe in auto brevi al sud e due giornate lunghe (Dingle-Galway con le Cliffs of Moher, Galway-Derry).',
  trasporti:
    'Auto a noleggio ritirata a Dublino il Giorno 3 e riconsegnata a Dublino il Giorno 12, da dichiarare al noleggio per il passaggio nell\'Irlanda del Nord. Guida a sinistra su tutta l\'isola; limiti in km/h al sud e in miglia orarie al nord.',
  stile: ['on the road', 'storia', 'costa', 'natura'],
  adattoA: [
    'chi vuole vedere le due Irlande nello stesso viaggio e capire perché sono divise',
    'chi ama guidare tra paesaggi che cambiano ogni giorno',
    'chi cerca storia recente raccontata sul posto, a Belfast e a Derry',
    'chi non ha paura della pioggia e ama i pub con musica dal vivo',
  ],
  puntiForti: [
    'La costa atlantica dal Kerry al Connemara, con le Cliffs of Moher e il Burren in mezzo',
    'Il Giant\'s Causeway e la costa di Antrim nella stessa giornata',
    'Derry/Londonderry: le mura del Seicento, il Bogside e il Peace Bridge',
    'Un giro con una guida locale tra i murales e i peace walls di Belfast',
    'Due monete, due unità di misura e un confine che non si vede',
  ],
  criticita: [
    'Nell\'Irlanda del Nord servono passaporto ed ETA britannica (20 £ a persona): la carta d\'identità non basta',
    'Guida a sinistra su strade di campagna strette, con muretti e siepi a filo della carreggiata',
    'Il meteo cambia in fretta e le Cliffs of Moher, la Rocca di Cashel e il ponte di Carrick-a-Rede possono chiudere col vento',
    'Due giornate lunghe di guida, Dingle-Galway e Galway-Derry',
    'Il roaming UE non vale nell\'Irlanda del Nord: dipende dalla tariffa',
    'Luglio e agosto sono cari e gli alloggi finiscono presto, soprattutto a Dublino e a Galway',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: undefined,
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: 'A chi vuole la natura dell\'ovest irlandese e, nello stesso viaggio, capire la storia delle due Irlande a Belfast e a Derry',
  },
  tappeMappa: [
    { nome: 'Dublino', destinazioneSlug: 'dublino' },
    { nome: 'Glendalough', destinazioneSlug: 'wicklow-glendalough' },
    { nome: 'Kilkenny', destinazioneSlug: 'kilkenny-cashel' },
    { nome: 'Rocca di Cashel', destinazioneSlug: 'kilkenny-cashel' },
    { nome: 'Cork e Kinsale', destinazioneSlug: 'cork-kinsale' },
    { nome: 'Killarney e Ring of Kerry', destinazioneSlug: 'ring-of-kerry-dingle' },
    { nome: 'Dingle', destinazioneSlug: 'ring-of-kerry-dingle' },
    { nome: 'Cliffs of Moher', destinazioneSlug: 'cliffs-of-moher-burren' },
    { nome: 'Galway', destinazioneSlug: 'galway' },
    { nome: 'Connemara', destinazioneSlug: 'connemara' },
    { nome: 'Derry/Londonderry', destinazioneSlug: 'derry-londonderry' },
    { nome: 'Giant\'s Causeway', destinazioneSlug: 'causeway-coastal-route' },
    { nome: 'Belfast', destinazioneSlug: 'belfast' },
    { nome: 'Dublino', destinazioneSlug: 'dublino' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Dublino', tratta: 'Aeroporto di Dublino → centro in bus o taxi', pernottamento: 'Dublino, centro', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'dublino', immagine: `${FOTO}/giorno-01-dublino-liffey.webp`, imageAlt: 'L\'Ha\'penny Bridge sul fiume Liffey a Dublino, sotto un cielo nuvoloso' },
    { titoloGiorno: 'Giorno 2 — Dublino: Book of Kells e Kilmainham Gaol', tratta: 'Trinity College → Kilmainham Gaol, a piedi e con bus o tram', pernottamento: 'Dublino, centro', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'Kilmainham Gaol 8€, solo con visita guidata prenotata (2026); Book of Kells solo su visittrinity.ie', destinazioneSlug: 'dublino', immagine: `${FOTO}/giorno-02-trinity-college.webp`, imageAlt: 'Il campanile del Trinity College di Dublino' },
    { titoloGiorno: 'Giorno 3 — Glendalough e Kilkenny', tratta: 'Dublino (ritiro auto) → monti di Wicklow → Glendalough → Kilkenny', pernottamento: 'Kilkenny, centro', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'Centro visitatori di Glendalough 5€ (2026)', destinazioneSlug: 'wicklow-glendalough', immagine: `${FOTO}/giorno-03-glendalough.webp`, imageAlt: 'L\'Upper Lake di Glendalough chiuso tra le montagne di Wicklow' },
    { titoloGiorno: 'Giorno 4 — Kilkenny Castle, la Rocca di Cashel e Cork', tratta: 'Kilkenny → Cashel → Cork', pernottamento: 'Cork, centro', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'Kilkenny Castle 8€; Rocca di Cashel 8€ (2026)', destinazioneSlug: 'kilkenny-cashel', immagine: `${FOTO}/giorno-04-rocca-di-cashel.webp`, imageAlt: 'La Rocca di Cashel sulla sua collina, con la cattedrale in rovina' },
    { titoloGiorno: 'Giorno 5 — English Market, Kinsale e verso Killarney', tratta: 'Cork → Kinsale → Killarney', pernottamento: 'Killarney', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'cork-kinsale', immagine: `${FOTO}/giorno-05-kinsale.webp`, imageAlt: 'Le case colorate di Kinsale, nella contea di Cork' },
    { titoloGiorno: 'Giorno 6 — Ring of Kerry', tratta: 'Anello di 179 km da Killarney: Kenmare → Sneem → Waterville → Cahersiveen → Killorglin → Killarney', pernottamento: 'Killarney', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'ring-of-kerry-dingle', immagine: `${FOTO}/giorno-06-ring-of-kerry.webp`, imageAlt: 'I laghi di Killarney visti da Ladies View, sul Ring of Kerry' },
    { titoloGiorno: 'Giorno 7 — Penisola di Dingle e Slea Head Drive', tratta: 'Killarney → Dingle → Slea Head Drive → Dingle', pernottamento: 'Dingle', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'ring-of-kerry-dingle', immagine: `${FOTO}/giorno-07-slea-head.webp`, imageAlt: 'La costa della penisola di Dingle vista dalla Slea Head Drive' },
    { titoloGiorno: 'Giorno 8 — Cliffs of Moher, il Burren e Galway', tratta: 'Dingle → Cliffs of Moher → Burren → Galway', pernottamento: 'Galway, centro', statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: 'Cliffs of Moher 15€ alla cassa, meno online fuori dalle ore di punta; parcheggio compreso (2026)', destinazioneSlug: 'cliffs-of-moher-burren', immagine: `${FOTO}/giorno-08-burren-poulnabrone.webp`, imageAlt: 'Il dolmen di Poulnabrone sul calcare del Burren' },
    { titoloGiorno: 'Giorno 9 — Connemara e Kylemore Abbey', tratta: 'Galway → Connemara → Letterfrack → Kylemore Abbey → Galway', pernottamento: 'Galway, centro', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'connemara', immagine: `${FOTO}/giorno-09-kylemore.webp`, imageAlt: 'La Kylemore Abbey riflessa nel lago, nel Connemara' },
    { titoloGiorno: 'Giorno 10 — Da Galway a Derry/Londonderry', tratta: 'Galway → confine senza controlli → Derry/Londonderry', pernottamento: 'Derry/Londonderry, dentro o vicino alle mura', statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: 'ETA britannica 20 £ a persona, da avere prima di passare il confine', destinazioneSlug: 'derry-londonderry', immagine: `${FOTO}/giorno-10-mura-di-derry.webp`, imageAlt: 'Il camminamento sulle mura di Derry/Londonderry, con i cannoni e la città sullo sfondo' },
    { titoloGiorno: 'Giorno 11 — Causeway Coastal Route: Giant\'s Causeway, Carrick-a-Rede e Dark Hedges', tratta: 'Derry → Dunluce Castle → Giant\'s Causeway → Carrick-a-Rede → Dark Hedges → Belfast', pernottamento: 'Belfast, centro', statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: 'Giant\'s Causeway Visitor Experience 15 £ (scogli gratis); Carrick-a-Rede circa 14-15,50 £, da verificare (2026)', destinazioneSlug: 'causeway-coastal-route', immagine: `${FOTO}/giorno-11-dark-hedges.webp`, imageAlt: 'Il viale di faggi delle Dark Hedges sulla Bregagh Road, nella contea di Antrim' },
    { titoloGiorno: 'Giorno 12 — Belfast: murales, peace walls e Titanic, poi Dublino', tratta: 'Tour dei murales e dei peace walls → Titanic Belfast → Dublino (riconsegna auto e volo)', pernottamento: 'Volo di rientro, o una notte in più a Belfast', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Titanic Belfast 24,95 £ (2026); tour dei murales secondo l\'operatore', destinazioneSlug: 'belfast', immagine: `${FOTO}/giorno-12-peace-wall-belfast.webp`, imageAlt: 'Il peace wall di Cupar Way a Belfast, coperto di scritte e disegni, in una strada vuota' },
  ],
  budget: [
    { etichetta: 'Voli per Dublino', valore: undefined },
    { etichetta: 'Auto a noleggio e carburante', valore: undefined },
    { etichetta: 'ETA per l\'Irlanda del Nord', valore: '20 £ a persona, bambini compresi (gov.uk, 2026)' },
    { etichetta: 'Ingressi nella Repubblica', valore: 'Kilmainham Gaol 8€, Glendalough 5€, Kilkenny Castle 8€, Rocca di Cashel 8€, Cliffs of Moher 15€ alla cassa (2026)' },
    { etichetta: 'Ingressi nell\'Irlanda del Nord', valore: 'Giant\'s Causeway Visitor Experience 15 £, Titanic Belfast 24,95 £ (2026)' },
    { etichetta: 'Alloggi', valore: undefined },
  ],
}
