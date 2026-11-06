import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Delhi, Agra e l'India del Sud in 17
// giorni: il Taj Mahal, i templi del Tamil Nadu, il Kerala e Hampi". Il testo
// narrativo resta nel markdown (src/content/viaggi/78-india-sud-taj-mahal.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni
// "### Giorno N — ..." del markdown.
//
// NON è un viaggio fatto da Rick: proposta costruita sulla ricerca, in voce di
// guida, senza ricordi. Pernottamenti 'consigliato' (zone suggerite). Prima
// Delhi e Agra (giorni 1-4), poi il Sud, Hampi compreso (giorni 15-16), con
// rientro da Bangalore. Lo slug resta 'india-sud-taj-mahal' per non rompere
// gli indirizzi esistenti.

export const indiaSudTajMahalMeta: TripMeta = {
  tripSlug: 'india-sud-taj-mahal',
  paeseSlug: 'india',
  mesiConsigliati: [12, 1, 2, 3],
  ritmo:
    'Pieno nei primi quattro giorni (Delhi, il treno per Agra, il Taj all\'alba e il volo per Chennai), poi regolare: una tappa nuova ogni uno o due giorni lungo il Tamil Nadu e il Kerala, con trasferimenti in auto di 2-6 ore, una notte lenta in houseboat e due giornate a Fort Kochi. Si accelera alla fine, con due notti di treno per Hampi.',
  trasporti:
    'Treno veloce Delhi-Agra e ritorno (Gatimaan Express o Vande Bharat), volo Delhi-Chennai, auto con autista da Chennai a Fort Kochi (Tamil Nadu e Kerala), houseboat sulle backwaters, volo Kochi-Bangalore, treno notturno Bangalore-Hosapete e ritorno per Hampi, rientro internazionale da Bangalore.',
  stile: ['cultura', 'templi', 'natura', 'backwaters', 'cibo'],
  adattoA: [
    'chi va in India per la prima volta e vuole il Taj Mahal e l\'India del Sud nello stesso viaggio',
    'chi ha già fatto il Rajasthan e vuole un secondo viaggio molto diverso, con un passaggio veloce al Nord',
    'chi ama i templi, il cibo e i paesaggi verdi più dei forti e del deserto',
    'chi accetta un volo interno e due notti in treno in cambio di Hampi',
  ],
  puntiForti: [
    'Il Taj Mahal all\'apertura dei cancelli, dopo il tramonto da Mehtab Bagh la sera prima',
    'Il tempio di Meenakshi a Madurai, vivo a ogni ora, con la cerimonia della sera',
    'Una notte in houseboat sulle backwaters del Kerala',
    'L\'alba sulle piantagioni di tè di Munnar',
    'I massi di granito e le rovine di Hampi al tramonto dalla collina di Matanga',
  ],
  criticita: [
    'Il Giorno 4 è stretto: Taj all\'alba, treno per Delhi e volo per Chennai. In dicembre-gennaio la nebbia ritarda i treni, e serve margine',
    'I monsoni sono sfasati: Kerala piovoso da giugno ad agosto, costa del Tamil Nadu da ottobre a dicembre. La finestra buona per tutto è dicembre-marzo',
    'Madurai ha una notte sola, e Hampi chiede un volo e due notti di treno: chi ha 14 giorni toglie Hampi',
    'Diverse chiusure da incastrare: Taj Mahal il venerdì, sinagoga di Kochi venerdì e sabato, museo del tè di Munnar il lunedì',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito:
      'in autonomia, con treno e volo al Nord, autista al Sud e treni notturni per Hampi',
    treEsperienzePiuBelle:
      'Il Taj Mahal all\'alba, il tempio di Meenakshi a Madurai, la notte in houseboat sulle backwaters',
    aChiLoConsiglio: 'a chi ha diciassette giorni tra dicembre e marzo e non vuole scegliere tra il Taj Mahal e l\'India del Sud',
  },
  tappeMappa: [
    { nome: 'Delhi', destinazioneSlug: 'delhi' },
    { nome: 'Agra e il Taj Mahal', destinazioneSlug: 'agra' },
    { nome: 'Chennai', destinazioneSlug: 'chennai' },
    { nome: 'Mamallapuram', destinazioneSlug: 'mamallapuram' },
    { nome: 'Puducherry' },
    { nome: 'Thanjavur' },
    { nome: 'Madurai', destinazioneSlug: 'madurai' },
    { nome: 'Munnar', destinazioneSlug: 'munnar' },
    { nome: 'Backwaters di Alleppey', destinazioneSlug: 'backwaters-alleppey' },
    { nome: 'Fort Kochi', destinazioneSlug: 'fort-kochi' },
    { nome: 'Hampi', destinazioneSlug: 'hampi' },
    { nome: 'Bangalore' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Delhi e la Vecchia Delhi', tratta: 'Aeroporto Indira Gandhi → hotel → Vecchia Delhi in metro', pernottamento: 'Delhi, Karol Bagh, Connaught Place o South Delhi', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'delhi', immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-01-delhi.jpg', imageAlt: 'La Jama Masjid di Delhi, la grande moschea di arenaria rossa e marmo bianco con i minareti e le cupole, vista dal cortile' },
    { titoloGiorno: 'Giorno 2 — Delhi: Humayun, Qutub Minar e la Nuova Delhi', pernottamento: 'Delhi, Karol Bagh, Connaught Place o South Delhi', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Tomba di Humayun e Qutub Minar circa 600 rupie ciascuno', destinazioneSlug: 'delhi', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-17-delhi.jpg', imageAlt: 'La Tomba di Humayun a Delhi con la vasca e la fontana dei giardini moghul in primo piano' },
    { titoloGiorno: 'Giorno 3 — In treno ad Agra: il Forte e il tramonto da Mehtab Bagh', tratta: 'Delhi → Agra, Gatimaan Express o Vande Bharat, poco meno di 2h', pernottamento: 'Agra, zona Taj Ganj', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Treno 800-1.600 rupie; Forte di Agra circa 650 rupie', destinazioneSlug: 'agra', immagine: '/images/india/agra-forte-archi-riccardo.jpg', imageAlt: 'Una fuga di archi polilobati in arenaria scolpita nel Forte di Agra, illuminati da una luce calda' },
    { titoloGiorno: 'Giorno 4 — Il Taj Mahal all\'alba e il volo per Chennai', tratta: 'Agra → Delhi, treno circa 2h; Delhi → Chennai, volo; aeroporto di Chennai → Mamallapuram, circa 1h30', pernottamento: 'Mamallapuram (o Chennai per chi atterra tardi)', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Taj Mahal circa 1.100 rupie + 200 per il mausoleo', destinazioneSlug: 'agra', immagine: '/images/india/agra-taj-mahal-alba-riccardo.jpg', imageAlt: 'Il Taj Mahal simmetrico all\'alba, con la vasca d\'acqua e i cipressi del giardino' },
    { titoloGiorno: 'Giorno 5 — Mamallapuram: il tempio sul mare e i Cinque Ratha', pernottamento: 'Mamallapuram', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Biglietto ASI unico per Shore Temple e Cinque Ratha circa 600 rupie per gli stranieri', destinazioneSlug: 'mamallapuram', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-02-mamallapuram.jpg', imageAlt: 'Lo Shore Temple di Mamallapuram, il tempio di granito dell\'VIII secolo con le sue due torri piramidali' },
    { titoloGiorno: 'Giorno 6 — Puducherry, la città francese', tratta: 'Mamallapuram → Puducherry, circa 2h', pernottamento: 'Puducherry, Quartiere bianco', statoPernottamento: 'consigliato', intensita: 'leggero', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-03-puducherry.jpg', imageAlt: 'Il lungomare di Puducherry visto dall\'alto, con il vecchio faro, la passeggiata e il Golfo del Bengala' },
    { titoloGiorno: 'Giorno 7 — Verso Thanjavur e il tempio di Brihadeeswarar', tratta: 'Puducherry → Chidambaram → Gangaikonda Cholapuram → Thanjavur, 4-5h con le soste', pernottamento: 'Thanjavur', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Brihadeeswarar ingresso libero', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-04-thanjavur.jpg', imageAlt: 'La torre piramidale del tempio di Brihadeeswarar a Thanjavur, in granito, con uno stormo di uccelli intorno' },
    { titoloGiorno: 'Giorno 8 — Da Thanjavur a Madurai e il tempio di Meenakshi', tratta: 'Thanjavur → Madurai, circa 3h', pernottamento: 'Madurai, vicino al tempio', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Meenakshi ingresso libero; telefono spento o al deposito (5 rupie), niente foto', destinazioneSlug: 'madurai', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-05-madurai.jpg', imageAlt: 'Una delle torri d\'ingresso (gopuram) del tempio di Meenakshi a Madurai, coperta di statue dipinte' },
    { titoloGiorno: 'Giorno 9 — Il mercato dei fiori e la salita a Munnar', tratta: 'Madurai → Munnar, auto circa 5-6h sui Ghati Occidentali', pernottamento: 'Munnar, homestay o resort tra le piantagioni', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'munnar', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-07-munnar.jpg', imageAlt: 'Una strada di montagna che si snoda tra le piantagioni di tè sulle colline intorno a Munnar' },
    { titoloGiorno: 'Giorno 10 — Munnar: le piantagioni di tè e il parco di Eravikulam', pernottamento: 'Munnar, homestay o resort tra le piantagioni', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Eravikulam circa 500 rupie per gli stranieri, aperto 8-16, chiuso dal 1° febbraio al 31 marzo', destinazioneSlug: 'munnar', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-08-munnar.jpg', imageAlt: 'Le piantagioni di tè di Munnar sulle colline avvolte dalla nebbia' },
    { titoloGiorno: 'Giorno 11 — Le backwaters: una notte in houseboat ad Alleppey', tratta: 'Munnar → Alappuzha, auto 4-5h; houseboat dalle 12 alle 9 del giorno dopo', pernottamento: 'Houseboat (kettuvallam) sulle backwaters', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Houseboat per una notte 8.000-15.000 rupie in fascia standard, 15.000-25.000 premium, pasti inclusi', destinazioneSlug: 'backwaters-alleppey', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-09-backwaters-alleppey.jpg', imageAlt: 'Una houseboat tradizionale (kettuvallam) sulle backwaters di Alappuzha tra le palme da cocco' },
    { titoloGiorno: 'Giorno 12 — Dalle backwaters a Fort Kochi', tratta: 'Alappuzha → Fort Kochi, circa 1h30', pernottamento: 'Fort Kochi, homestay o hotel heritage', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Spettacolo di kathakali circa 500-600 rupie', destinazioneSlug: 'fort-kochi', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-10-fort-kochi.jpg', imageAlt: 'Le reti da pesca cinesi sulla riva di Fort Kochi, sospese sopra l\'acqua sotto il cielo azzurro' },
    { titoloGiorno: 'Giorno 13 — Fort Kochi e Mattancherry', pernottamento: 'Fort Kochi, homestay o hotel heritage', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'fort-kochi', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-11-fort-kochi.jpg', imageAlt: 'Una vecchia casa di Fort Kochi con un grande murale dipinto sulla facciata' },
    { titoloGiorno: 'Giorno 14 — Volo per Bangalore e treno notturno per Hampi', tratta: 'Kochi → Bangalore, volo circa 1h; Bangalore → Hosapete, Hampi Express (16592) circa 9h, verso le 21:50 → 7', pernottamento: 'Treno notturno in 2A o 3A', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Volo Kochi-Bangalore 3.000-6.000 rupie', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-12-treno-notturno.jpg', imageAlt: 'Un treno delle ferrovie indiane fermo al binario di una stazione' },
    { titoloGiorno: 'Giorno 15 — Hampi: il bazar, il tempio di Virupaksha e il tramonto su Matanga', tratta: 'Hosapete → Hampi, circa 20 minuti in tuk-tuk', pernottamento: 'Hampi, guesthouse nel bazar o resort oltre il fiume', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'hampi', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-13-hampi.jpg', imageAlt: 'Il tempio di Virupaksha a Hampi visto dall\'alto, con il fiume Tungabhadra e le colline di massi di granito' },
    { titoloGiorno: 'Giorno 16 — Hampi: il Centro reale, il tempio di Vittala e il treno notturno', tratta: 'Hosapete → Bangalore, Hampi Express (16591) circa 9h, partenza verso le 21:10', pernottamento: 'Treno notturno in 2A o 3A', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Vittala circa 600 rupie per gli stranieri, valido anche per recinto delle regine e stalle degli elefanti', destinazioneSlug: 'hampi', immagine: '/images/viaggi/india-sud-taj-mahal/giorno-14-hampi.jpg', imageAlt: 'Il carro di pietra e il gopuram del tempio di Vittala a Hampi sotto un cielo di nuvole' },
    { titoloGiorno: 'Giorno 17 — Bangalore e partenza', tratta: 'Bangalore City → aeroporto Kempegowda, 1-1h30 → volo internazionale', pernottamento: 'Volo di rientro', statoPernottamento: 'consigliato', intensita: 'leggero' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: 'arrivo a Delhi e rientro da Bangalore indicativamente 550-1.000 € con uno scalo' },
    { etichetta: 'Visto e documenti', valore: 'e-Tourist Visa 25 $ (30 giorni) o 40 $ (un anno), più il 2,5-3% di commissione, da chiedere almeno 4 giorni prima; e-Arrival Card gratuita nelle 72 ore prima' },
    { etichetta: 'Treni', valore: 'Delhi-Agra e ritorno 800-1.600 rupie a tratta; Hampi Express Bangalore-Hosapete e ritorno in 2A o 3A' },
    { etichetta: 'Voli interni', valore: 'Delhi-Chennai e Kochi-Bangalore 3.000-8.000 rupie a tratta' },
    { etichetta: 'Auto con autista (Tamil Nadu e Kerala)', valore: '3.000-4.500 rupie al giorno, più pedaggi, parcheggi e permesso interstatale' },
    { etichetta: 'Houseboat', valore: '8.000-25.000 rupie per la barca per una notte, pasti inclusi' },
    { etichetta: 'Ingressi ai monumenti', valore: '6.000-7.500 rupie a testa in tutto (tariffe stranieri, indicative); molti grandi templi del Sud sono gratuiti' },
    { etichetta: 'Alloggi', valore: 'homestay 1.500-3.000 rupie, hotel heritage 4.000-9.000 rupie, resort di lusso molto di più' },
  ],
}
