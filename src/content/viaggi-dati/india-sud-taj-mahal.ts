import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "India del Sud in 17 giorni: templi del
// Tamil Nadu, Kerala, Hampi e il salto ad Agra per il Taj Mahal". Il testo
// narrativo resta nel markdown (src/content/viaggi/78-india-sud-taj-mahal.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni
// "### Giorno N — ..." del markdown.
//
// Guida non vissuta in prima persona: pernottamenti 'consigliato' (zone
// suggerite), nessuna esperienza personale. `immagine` omesso: le foto dei
// giorni si recuperano dopo. Hampi (giorni 12-14) è la parte facoltativa:
// la variante da 14 giorni è nel markdown.

export const indiaSudTajMahalMeta: TripMeta = {
  tripSlug: 'india-sud-taj-mahal',
  paeseSlug: 'india',
  ritmo:
    'Regolare: una tappa nuova ogni uno o due giorni lungo il Tamil Nadu e il Kerala, con trasferimenti in auto di 2-6 ore, una notte lenta in houseboat e due giornate piene a Fort Kochi. Si accelera alla fine, con due notti di treno per Hampi e il salto al Nord per il Taj Mahal.',
  trasporti:
    'Auto con autista da Chennai a Fort Kochi (Tamil Nadu e Kerala), houseboat sulle backwaters, volo Kochi-Bangalore, treno notturno Bangalore-Hosapete e ritorno per Hampi, volo Bangalore-Delhi (o Agra), treno veloce Delhi-Agra e ritorno.',
  stile: ['cultura', 'templi', 'natura', 'backwaters', 'cibo'],
  adattoA: [
    'chi va in India per la prima volta e preferisce un\'India più lenta e meno caotica del Nord',
    'chi ha già fatto il Rajasthan e vuole un secondo viaggio molto diverso',
    'chi ama i templi, il cibo e i paesaggi verdi più dei forti e del deserto',
    'chi non vuole tornare senza aver visto il Taj Mahal, accettando un volo in più',
  ],
  puntiForti: [
    'Il tempio di Meenakshi a Madurai, vivo a ogni ora, con la cerimonia della sera',
    'Una notte in houseboat sulle backwaters del Kerala',
    'L\'alba sulle piantagioni di tè di Munnar',
    'I massi di granito e le rovine di Hampi al tramonto dalla collina di Matanga',
    'Il Taj Mahal all\'apertura dei cancelli come chiusura del viaggio',
  ],
  criticita: [
    'Hampi è fuori linea: aggiunge un volo e due notti di treno, ed è la parte da togliere per chi ha 14 giorni',
    'I monsoni sono sfasati: Kerala piovoso da giugno ad agosto, costa del Tamil Nadu da ottobre a dicembre. La finestra buona per tutto è dicembre-marzo',
    'Le backwaters intorno ad Alleppey sono congestionate: serve scegliere bene l\'operatore e aggiungere un giro in canoa sui canali piccoli',
    'Nei 52 grandi templi del Tamil Nadu il telefono va tenuto spento o lasciato al deposito, foto e video sono vietati e i santuari interni sono riservati agli induisti',
    'Diverse chiusure settimanali da incastrare: Taj Mahal il venerdì, sinagoga di Kochi venerdì e sabato, museo del tè di Munnar il lunedì',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito:
      'itinerario pensato per viaggiare in autonomia, in coppia o in piccolo gruppo, con autista al Sud, voli interni e treni',
    treEsperienzePiuBelle:
      'Il tempio di Meenakshi a Madurai, la notte in houseboat sulle backwaters, il tramonto su Hampi dalla collina di Matanga',
    aChiLoConsiglio: 'a chi ha due settimane abbondanti tra dicembre e marzo e cerca l\'India più dolce',
  },
  tappeMappa: [
    { nome: 'Chennai', destinazioneSlug: 'chennai' },
    { nome: 'Mamallapuram', destinazioneSlug: 'mamallapuram' },
    { nome: 'Puducherry' },
    { nome: 'Thanjavur' },
    { nome: 'Madurai', destinazioneSlug: 'madurai' },
    { nome: 'Munnar', destinazioneSlug: 'munnar' },
    { nome: 'Backwaters di Alleppey', destinazioneSlug: 'backwaters-alleppey' },
    { nome: 'Fort Kochi', destinazioneSlug: 'fort-kochi' },
    { nome: 'Hampi', destinazioneSlug: 'hampi' },
    { nome: 'Agra e il Taj Mahal', destinazioneSlug: 'agra' },
    { nome: 'Delhi', destinazioneSlug: 'delhi' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Chennai e trasferimento a Mamallapuram', tratta: 'Aeroporto di Chennai → Mamallapuram lungo la East Coast Road, circa 1h30', pernottamento: 'Mamallapuram', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'mamallapuram', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-01-mamallapuram.jpg', imageAlt: 'La Discesa del Gange a Mamallapuram, il grande bassorilievo nella roccia con elefanti, divinità e animali' },
    { titoloGiorno: 'Giorno 2 — Mamallapuram: il tempio sul mare e i Cinque Ratha', pernottamento: 'Mamallapuram', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Biglietto ASI unico per Shore Temple e Cinque Ratha circa 600 rupie per gli stranieri', destinazioneSlug: 'mamallapuram', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-02-mamallapuram.jpg', imageAlt: 'Lo Shore Temple di Mamallapuram, il tempio di granito dell\'VIII secolo con le sue due torri piramidali' },
    { titoloGiorno: 'Giorno 3 — Puducherry, la città francese', tratta: 'Mamallapuram → Puducherry, circa 2h', pernottamento: 'Puducherry, Quartiere bianco', statoPernottamento: 'consigliato', intensita: 'leggero', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-03-puducherry.jpg', imageAlt: 'Il lungomare di Puducherry visto dall\'alto, con il vecchio faro, la passeggiata e il Golfo del Bengala' },
    { titoloGiorno: 'Giorno 4 — Verso Thanjavur e il tempio di Brihadeeswarar', tratta: 'Puducherry → Chidambaram → Gangaikonda Cholapuram → Thanjavur, 4-5h con le soste', pernottamento: 'Thanjavur', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Brihadeeswarar ingresso libero', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-04-thanjavur.jpg', imageAlt: 'La torre piramidale del tempio di Brihadeeswarar a Thanjavur, in granito, con uno stormo di uccelli intorno' },
    { titoloGiorno: 'Giorno 5 — Da Thanjavur a Madurai e la cerimonia della sera al Meenakshi', tratta: 'Thanjavur → Madurai, circa 3h', pernottamento: 'Madurai, vicino al tempio', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Meenakshi ingresso libero; telefono spento o al deposito (5 rupie), niente foto', destinazioneSlug: 'madurai', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-05-madurai.jpg', imageAlt: 'Una delle torri d\'ingresso (gopuram) del tempio di Meenakshi a Madurai, coperta di statue dipinte' },
    { titoloGiorno: 'Giorno 6 — Madurai, la città del tempio', pernottamento: 'Madurai, vicino al tempio', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'madurai', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-06-madurai.jpg', imageAlt: 'La vasca del Loto d\'Oro nel tempio di Meenakshi a Madurai, con il colonnato e un gopuram sullo sfondo' },
    { titoloGiorno: 'Giorno 7 — Dalle pianure alle colline di Munnar', tratta: 'Madurai → Munnar, auto circa 5-6h sui Ghati Occidentali', pernottamento: 'Munnar, homestay o resort tra le piantagioni', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'munnar', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-07-munnar.jpg', imageAlt: 'Una strada di montagna che si snoda tra le piantagioni di tè sulle colline intorno a Munnar' },
    { titoloGiorno: 'Giorno 8 — Munnar: le piantagioni di tè e il parco di Eravikulam', pernottamento: 'Munnar, homestay o resort tra le piantagioni', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Eravikulam circa 500 rupie per gli stranieri, aperto 8-16, chiuso dal 1° febbraio al 31 marzo', destinazioneSlug: 'munnar', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-08-munnar.jpg', imageAlt: 'Le piantagioni di tè di Munnar sulle colline avvolte dalla nebbia' },
    { titoloGiorno: 'Giorno 9 — Le backwaters: una notte in houseboat ad Alleppey', tratta: 'Munnar → Alappuzha, auto 4-5h; houseboat dalle 12 alle 9 del giorno dopo', pernottamento: 'Houseboat (kettuvallam) sulle backwaters', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Houseboat per una notte 8.000-15.000 rupie in fascia standard, 15.000-25.000 premium, pasti inclusi', destinazioneSlug: 'backwaters-alleppey', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-09-backwaters-alleppey.jpg', imageAlt: 'Una houseboat tradizionale (kettuvallam) sulle backwaters di Alappuzha tra le palme da cocco' },
    { titoloGiorno: 'Giorno 10 — Dalle backwaters a Fort Kochi', tratta: 'Alappuzha → Fort Kochi, circa 1h30', pernottamento: 'Fort Kochi, homestay o hotel heritage', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Spettacolo di kathakali circa 500-600 rupie', destinazioneSlug: 'fort-kochi', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-10-fort-kochi.jpg', imageAlt: 'Le reti da pesca cinesi sulla riva di Fort Kochi, sospese sopra l\'acqua sotto il cielo azzurro' },
    { titoloGiorno: 'Giorno 11 — Fort Kochi e Mattancherry', pernottamento: 'Fort Kochi, homestay o hotel heritage', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'fort-kochi', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-11-fort-kochi.jpg', imageAlt: 'Una vecchia casa di Fort Kochi con un grande murale dipinto sulla facciata' },
    { titoloGiorno: 'Giorno 12 — Volo per Bangalore e treno notturno per Hampi', tratta: 'Kochi → Bangalore, volo circa 1h; Bangalore → Hosapete, Hampi Express (16592) circa 9h, verso le 21:50 → 7', pernottamento: 'Treno notturno in 2A o 3A', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Volo Kochi-Bangalore 3.000-6.000 rupie', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-12-treno-notturno.jpg', imageAlt: 'Un treno delle ferrovie indiane fermo al binario di una stazione' },
    { titoloGiorno: 'Giorno 13 — Hampi: il bazar, il tempio di Virupaksha e il tramonto su Matanga', tratta: 'Hosapete → Hampi, circa 20 minuti in tuk-tuk', pernottamento: 'Hampi, guesthouse nel bazar o resort oltre il fiume', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'hampi', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-13-hampi.jpg', imageAlt: 'Il tempio di Virupaksha a Hampi visto dall\'alto, con il fiume Tungabhadra e le colline di massi di granito' },
    { titoloGiorno: 'Giorno 14 — Hampi: il Centro reale, il tempio di Vittala e il treno notturno', tratta: 'Hosapete → Bangalore, Hampi Express (16591) circa 9h, partenza verso le 21:10', pernottamento: 'Treno notturno in 2A o 3A', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Vittala circa 600 rupie per gli stranieri, valido anche per recinto delle regine e stalle degli elefanti', destinazioneSlug: 'hampi', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-14-hampi.jpg', imageAlt: 'Il carro di pietra e il gopuram del tempio di Vittala a Hampi sotto un cielo di nuvole' },
    { titoloGiorno: 'Giorno 15 — Da Bangalore ad Agra', tratta: 'Bangalore → Agra, volo diretto IndiGo (5-8 a settimana, circa 2h40), o volo per Delhi (circa 2h30) e treno veloce per Agra (circa 1h40)', pernottamento: 'Agra, zona Taj Ganj', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Volo 4.000-8.000 rupie; treno Delhi-Agra 800-1.600 rupie', destinazioneSlug: 'agra', immagine: '/images/india/agra-forte-archi-riccardo.jpg', imageAlt: 'Una fuga di archi polilobati in arenaria scolpita nel Forte di Agra, illuminati da una luce calda' },
    { titoloGiorno: 'Giorno 16 — Il Taj Mahal all\'alba e il Forte di Agra', tratta: 'Agra → Delhi, treno circa 2h', pernottamento: 'Delhi, Aerocity o centro', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Taj Mahal circa 1.100 rupie + 200 per il mausoleo; Forte di Agra circa 650', destinazioneSlug: 'agra', immagine: '/images/india/agra-taj-mahal-alba-riccardo.jpg', imageAlt: 'Il Taj Mahal simmetrico all\'alba, con la vasca d\'acqua e i cipressi del giardino' },
    { titoloGiorno: 'Giorno 17 — Delhi e partenza', tratta: 'Delhi → aeroporto Indira Gandhi → volo internazionale', pernottamento: 'Volo di rientro', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Tomba di Humayun circa 600 rupie', destinazioneSlug: 'delhi', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-17-delhi.jpg', imageAlt: 'La Tomba di Humayun a Delhi con la vasca e la fontana dei giardini moghul in primo piano' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: 'Italia-Chennai con rientro da Delhi indicativamente 550-1.000 € con uno scalo' },
    { etichetta: 'Visto e documenti', valore: 'e-Tourist Visa 25 $ (30 giorni) o 40 $ (un anno), più il 2,5-3% di commissione, da chiedere almeno 4 giorni prima; e-Arrival Card gratuita nelle 72 ore prima' },
    { etichetta: 'Auto con autista (Tamil Nadu e Kerala)', valore: '3.000-4.500 rupie al giorno, più pedaggi, parcheggi e permesso interstatale' },
    { etichetta: 'Houseboat', valore: '8.000-25.000 rupie per la barca per una notte, pasti inclusi' },
    { etichetta: 'Voli interni', valore: 'Kochi-Bangalore e Bangalore-Delhi o Bangalore-Agra 3.000-8.000 rupie a tratta' },
    { etichetta: 'Treni', valore: 'Hampi Express Bangalore-Hosapete e ritorno in 2A o 3A; Delhi-Agra e ritorno 800-1.600 rupie a tratta' },
    { etichetta: 'Ingressi ai monumenti', valore: '4.500-6.000 rupie a testa in tutto (tariffe stranieri, indicative); molti grandi templi del Sud sono gratuiti' },
    { etichetta: 'Alloggi', valore: 'homestay 1.500-3.000 rupie, hotel heritage 4.000-9.000 rupie, resort di lusso molto di più' },
  ],
}
