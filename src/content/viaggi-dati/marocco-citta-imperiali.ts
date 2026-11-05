import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Marocco: le città imperiali e la città blu in 11 giorni".
// Il testo narrativo resta nel markdown (src/content/viaggi/90-marocco-citta-imperiali.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..." del markdown.
//
// Proposta costruita sulla ricerca, non un viaggio fatto da Rick: niente foto finché non arrivano.
// Tangeri e Casablanca non hanno una scheda destinazione: in tappeMappa hanno lat/lng
// da OpenStreetMap Nominatim (verificate il 05/11/2026).

export const maroccoCittaImperialiMeta: TripMeta = {
  tripSlug: 'marocco-citta-imperiali',
  paeseSlug: 'marocco',
  ritmo:
    'Medio: due giornate di trasferimento in bus (Tangeri-Chefchaouen e Chefchaouen-Fès), poi tratte brevi in treno. Fès chiede due giorni pieni a piedi nella medina.',
  trasporti:
    'In autonomia: bus di linea, tra cui CTM (o auto con autista), da Tangeri a Chefchaouen e da Chefchaouen a Fès, treni ONCF Fès-Meknès e Meknès-Rabat, Al Boraq da Rabat Agdal a Casa Voyageurs, taxi per Volubilis e Moulay Idriss, tram a Rabat.',
  stile: ['città imperiali', 'medine', 'storia', 'treno'],
  adattoA: [
    'chi va in Marocco per la prima volta e vuole le città più che il deserto',
    'chi preferisce muoversi in treno e in bus, senza van privato',
    'chi ha già fatto Marrakech e il sud e torna per il nord',
    'chi vuole unirlo all\'itinerario Marrakech e deserto in circa due settimane',
  ],
  puntiForti: [
    'La medina di Fès el-Bali, patrimonio UNESCO dal 1981 e una delle zone pedonali urbane più grandi e antiche del mondo',
    'Chefchaouen all\'alba, con i vicoli blu ancora vuoti',
    'I mosaici romani di Volubilis, a circa mezz\'ora di strada da Meknès',
    'Tratte brevi in treno da Fès all\'Atlantico, con Al Boraq nell\'ultimo tratto',
    'Si incastra con l\'itinerario del sud: da Fès si scende verso Merzouga e Marrakech',
  ],
  criticita: [
    'Chefchaouen non ha la ferrovia: si arriva e si riparte in bus o in auto',
    'La medina di Fès è un labirinto, con finte guide e venditori insistenti: il primo giorno serve una guida ufficiale',
    'I non musulmani non entrano nelle moschee in uso, né nella Qarawiyyin: la Moschea Hassan II si visita solo con il tour guidato',
    'D\'estate Fès e Meknès sono molto calde, e Volubilis è quasi tutta al sole',
    'Tempi e orari di treni e bus vanno presi su oncf-voyages.ma e ctm.ma prima di ogni tratta',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: undefined,
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: 'A chi vuole il Marocco delle città, in treno, o a chi lo unisce al deserto del sud partendo da Fès',
  },
  tappeMappa: [
    { nome: 'Tangeri', lat: 35.76949, lng: -5.80447 },
    { nome: 'Chefchaouen', destinazioneSlug: 'chefchaouen' },
    { nome: 'Fès', destinazioneSlug: 'fes' },
    { nome: 'Meknès e Volubilis', destinazioneSlug: 'meknes-volubilis' },
    { nome: 'Rabat', destinazioneSlug: 'rabat' },
    { nome: 'Casablanca', lat: 33.59451, lng: -7.62003 },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Arrivo a Tangeri',
      tratta: 'Arrivo all\'aeroporto di Tangeri → medina e kasbah',
      pernottamento: 'Tangeri, medina o centro',
      statoPernottamento: 'consigliato',
      intensita: 'leggero',
    },
    {
      titoloGiorno: 'Giorno 2 — Da Tangeri a Chefchaouen, la città blu',
      tratta: 'Tangeri → Chefchaouen, bus di linea o auto con autista',
      pernottamento: 'Chefchaouen, riad nella medina',
      statoPernottamento: 'consigliato',
      intensita: 'medio',
      destinazioneSlug: 'chefchaouen',
    },
    {
      titoloGiorno: 'Giorno 3 — Chefchaouen: la medina, Ras el-Ma e la Moschea spagnola',
      tratta: 'Chefchaouen a piedi (in alternativa: Akchour con autista)',
      pernottamento: 'Chefchaouen, riad nella medina',
      statoPernottamento: 'consigliato',
      intensita: 'medio',
      destinazioneSlug: 'chefchaouen',
    },
    {
      titoloGiorno: 'Giorno 4 — Da Chefchaouen a Fès',
      tratta: 'Chefchaouen → Fès, bus di linea o auto con autista',
      pernottamento: 'Fès, riad nella medina',
      statoPernottamento: 'consigliato',
      intensita: 'medio',
      destinazioneSlug: 'fes',
    },
    {
      titoloGiorno: 'Giorno 5 — Fès el-Bali: le madrase, le concerie e i souk',
      tratta: 'Fès el-Bali a piedi, con guida ufficiale',
      pernottamento: 'Fès, riad nella medina',
      statoPernottamento: 'consigliato',
      intensita: 'intenso',
      destinazioneSlug: 'fes',
    },
    {
      titoloGiorno: 'Giorno 6 — Fès: Fès Jdid, il Mellah e la medina dall\'alto',
      tratta: 'Fès Jdid, Mellah, Jnan Sbil, Tombe merinidi in taxi',
      pernottamento: 'Fès, riad nella medina',
      statoPernottamento: 'consigliato',
      intensita: 'medio',
      destinazioneSlug: 'fes',
    },
    {
      titoloGiorno: 'Giorno 7 — Volubilis e Moulay Idriss, notte a Meknès',
      tratta: 'Fès → Meknès in treno → Volubilis e Moulay Idriss in taxi → Meknès',
      pernottamento: 'Meknès, medina',
      statoPernottamento: 'consigliato',
      intensita: 'intenso',
      destinazioneSlug: 'meknes-volubilis',
    },
    {
      titoloGiorno: 'Giorno 8 — Meknès, la città di Moulay Ismail, poi il treno per Rabat',
      tratta: 'Meknès a piedi → Rabat in treno',
      pernottamento: 'Rabat, medina o centro',
      statoPernottamento: 'consigliato',
      intensita: 'medio',
      destinazioneSlug: 'meknes-volubilis',
    },
    {
      titoloGiorno: 'Giorno 9 — Rabat: la Kasbah degli Oudaya, la Torre Hassan e lo Chellah',
      tratta: 'Rabat a piedi e in tram',
      pernottamento: 'Rabat, medina o centro',
      statoPernottamento: 'consigliato',
      intensita: 'medio',
      destinazioneSlug: 'rabat',
    },
    {
      titoloGiorno: 'Giorno 10 — In treno a Casablanca e la Moschea Hassan II',
      tratta: 'Rabat Agdal → Casa Voyageurs con Al Boraq → Moschea Hassan II',
      pernottamento: 'Casablanca, centro o lungomare',
      statoPernottamento: 'consigliato',
      intensita: 'medio',
      costiNoti: 'Moschea Hassan II: 140 MAD per gli adulti stranieri (fmh2.ma, novembre 2026), solo con tour guidato',
      destinazioneSlug: 'rabat',
    },
    {
      titoloGiorno: 'Giorno 11 — Rientro da Casablanca',
      tratta: 'Casablanca → aeroporto Mohammed V, in treno o in taxi',
      pernottamento: 'Volo di rientro',
      statoPernottamento: 'consigliato',
      intensita: 'leggero',
    },
  ],
  budget: [
    { etichetta: 'Voli', valore: 'andata su Tangeri, ritorno da Casablanca (o al contrario)' },
    { etichetta: 'Bus di linea (CTM)', valore: 'Tangeri-Chefchaouen e Chefchaouen-Fès, corse e biglietti su ctm.ma' },
    { etichetta: 'Treni ONCF', valore: 'Fès-Meknès, Meknès-Rabat e Al Boraq Rabat-Casablanca, biglietti su oncf-voyages.ma' },
    { etichetta: 'Taxi per Volubilis e Moulay Idriss', valore: undefined },
    { etichetta: 'Guida ufficiale a Fès', valore: undefined },
    { etichetta: 'Moschea Hassan II', valore: '140 MAD per gli adulti stranieri (fmh2.ma, novembre 2026)' },
    { etichetta: 'Totale', valore: undefined },
  ],
}
