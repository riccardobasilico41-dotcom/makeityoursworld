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
    'Nei grandi templi del Tamil Nadu i telefoni sono vietati e i santuari interni sono riservati agli induisti',
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
    { titoloGiorno: 'Giorno 1 — Arrivo a Chennai e trasferimento a Mamallapuram', tratta: 'Aeroporto di Chennai → Mamallapuram lungo la East Coast Road, circa 1h30', pernottamento: 'Mamallapuram', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'mamallapuram' },
    { titoloGiorno: 'Giorno 2 — Mamallapuram: il tempio sul mare e i Cinque Ratha', pernottamento: 'Mamallapuram', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Biglietto ASI unico per Shore Temple e Cinque Ratha circa 600 rupie per gli stranieri', destinazioneSlug: 'mamallapuram' },
    { titoloGiorno: 'Giorno 3 — Puducherry, la città francese', tratta: 'Mamallapuram → Puducherry, circa 2h', pernottamento: 'Puducherry, Quartiere bianco', statoPernottamento: 'consigliato', intensita: 'leggero' },
    { titoloGiorno: 'Giorno 4 — Verso Thanjavur e il tempio di Brihadeeswarar', tratta: 'Puducherry → Chidambaram → Gangaikonda Cholapuram → Thanjavur, 4-5h con le soste', pernottamento: 'Thanjavur', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Brihadeeswarar ingresso libero' },
    { titoloGiorno: 'Giorno 5 — Da Thanjavur a Madurai e la cerimonia della sera al Meenakshi', tratta: 'Thanjavur → Madurai, circa 3h', pernottamento: 'Madurai, vicino al tempio', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Meenakshi ingresso libero, deposito telefoni a pagamento', destinazioneSlug: 'madurai' },
    { titoloGiorno: 'Giorno 6 — Madurai, la città del tempio', pernottamento: 'Madurai, vicino al tempio', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'madurai' },
    { titoloGiorno: 'Giorno 7 — Dalle pianure alle colline di Munnar', tratta: 'Madurai → Munnar, auto circa 5-6h sui Ghati Occidentali', pernottamento: 'Munnar, homestay o resort tra le piantagioni', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'munnar' },
    { titoloGiorno: 'Giorno 8 — Munnar: le piantagioni di tè e il parco di Eravikulam', pernottamento: 'Munnar, homestay o resort tra le piantagioni', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Eravikulam circa 500 rupie per gli stranieri, chiuso febbraio-marzo', destinazioneSlug: 'munnar' },
    { titoloGiorno: 'Giorno 9 — Le backwaters: una notte in houseboat ad Alleppey', tratta: 'Munnar → Alappuzha, auto 4-5h; houseboat dalle 12 alle 9 del giorno dopo', pernottamento: 'Houseboat (kettuvallam) sulle backwaters', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Houseboat per una notte 8.000-15.000 rupie in fascia standard, 15.000-25.000 premium, pasti inclusi', destinazioneSlug: 'backwaters-alleppey' },
    { titoloGiorno: 'Giorno 10 — Dalle backwaters a Fort Kochi', tratta: 'Alappuzha → Fort Kochi, circa 1h30', pernottamento: 'Fort Kochi, homestay o hotel heritage', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Spettacolo di kathakali circa 500-600 rupie', destinazioneSlug: 'fort-kochi' },
    { titoloGiorno: 'Giorno 11 — Fort Kochi e Mattancherry', pernottamento: 'Fort Kochi, homestay o hotel heritage', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'fort-kochi' },
    { titoloGiorno: 'Giorno 12 — Volo per Bangalore e treno notturno per Hampi', tratta: 'Kochi → Bangalore, volo circa 1h; Bangalore → Hosapete, treno notturno circa 9h', pernottamento: 'Treno notturno in 2A o 3A', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Volo Kochi-Bangalore 3.000-6.000 rupie' },
    { titoloGiorno: 'Giorno 13 — Hampi: il bazar, il tempio di Virupaksha e il tramonto su Matanga', tratta: 'Hosapete → Hampi, circa 20 minuti in tuk-tuk', pernottamento: 'Hampi, guesthouse nel bazar o resort oltre il fiume', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'hampi' },
    { titoloGiorno: 'Giorno 14 — Hampi: il Centro reale, il tempio di Vittala e il treno notturno', tratta: 'Hosapete → Bangalore, treno notturno circa 9h', pernottamento: 'Treno notturno in 2A o 3A', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Vittala circa 600 rupie per gli stranieri, valido anche per recinto delle regine e stalle degli elefanti', destinazioneSlug: 'hampi' },
    { titoloGiorno: 'Giorno 15 — Da Bangalore ad Agra', tratta: 'Bangalore → Delhi in volo (circa 2h30) e treno veloce per Agra (circa 1h40), o volo diretto per Agra', pernottamento: 'Agra, zona Taj Ganj', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Volo 4.000-8.000 rupie; treno Delhi-Agra 800-1.600 rupie', destinazioneSlug: 'agra' },
    { titoloGiorno: 'Giorno 16 — Il Taj Mahal all\'alba e il Forte di Agra', tratta: 'Agra → Delhi, treno circa 2h', pernottamento: 'Delhi, Aerocity o centro', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Taj Mahal circa 1.100 rupie + 200 per il mausoleo; Forte di Agra circa 650', destinazioneSlug: 'agra' },
    { titoloGiorno: 'Giorno 17 — Delhi e partenza', tratta: 'Delhi → aeroporto Indira Gandhi → volo internazionale', pernottamento: 'Volo di rientro', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Tomba di Humayun circa 600 rupie', destinazioneSlug: 'delhi' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: 'Italia-Chennai con rientro da Delhi indicativamente 550-1.000 € con uno scalo' },
    { etichetta: 'Visto e documenti', valore: 'e-Tourist Visa 25 $ (30 giorni) o 40 $ (un anno), più circa il 3% di commissione; e-Arrival Card gratuita' },
    { etichetta: 'Auto con autista (Tamil Nadu e Kerala)', valore: '3.000-4.500 rupie al giorno, più pedaggi, parcheggi e permesso interstatale' },
    { etichetta: 'Houseboat', valore: '8.000-25.000 rupie per la barca per una notte, pasti inclusi' },
    { etichetta: 'Voli interni', valore: 'Kochi-Bangalore e Bangalore-Delhi 3.000-8.000 rupie a tratta' },
    { etichetta: 'Treni', valore: 'notturno Bangalore-Hosapete e ritorno in 2A o 3A; Delhi-Agra e ritorno 800-1.600 rupie a tratta' },
    { etichetta: 'Ingressi ai monumenti', valore: '4.500-6.000 rupie a testa in tutto (tariffe stranieri, indicative); molti grandi templi del Sud sono gratuiti' },
    { etichetta: 'Alloggi', valore: 'homestay 1.500-3.000 rupie, hotel heritage 4.000-9.000 rupie, resort di lusso molto di più' },
  ],
}
