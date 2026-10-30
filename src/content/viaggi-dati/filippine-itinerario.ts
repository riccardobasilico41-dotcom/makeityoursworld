import type { TripMeta } from '@/lib/types'

// Overlay di metadati per "Filippine in 18 giorni: El Nido, Coron, Moalboal, Bohol e
// Siargao" (src/content/viaggi/74-filippine-itinerario.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del markdown. Guida non vissuta: nessun campo personale, immagini da recuperare.

export const filippineItinerarioMeta: TripMeta = {
  tripSlug: 'filippine-itinerario',
  paeseSlug: 'filippine',
  ritmo:
    'Medio: quasi ogni giorno una barca o uno snorkeling, con cinque giornate di trasferimento tra isole (voli, traghetti, van) e un giorno impegnativo di canyoning; i giorni a Siargao sono i più lenti.',
  trasporti:
    'In autonomia: quattro voli interni (Manila-Puerto Princesa, Busuanga-Cebu, Bohol o Cebu-Siargao, Siargao-Manila o Cebu), van Puerto Princesa-El Nido, traghetto veloce El Nido-Coron, OceanJet Cebu-Bohol, bangka per l\'island hopping, tricycle e scooter sulle isole.',
  stile: ['mare', 'island hopping', 'snorkeling', 'immersioni', 'surf'],
  adattoA: [
    'chi ama stare in acqua ogni giorno',
    'chi accetta imprevisti logistici tra isole: traghetti annullati, voli spostati',
    'coppie, amici e viaggiatori in solitaria',
    'sub e aspiranti sub, con relitti a Coron e reef a Moalboal e Balicasag',
  ],
  puntiForti: [
    'Le lagune di Miniloc a El Nido, attraversate in kayak',
    'Il lago Kayangan e i relitti giapponesi di Coron',
    'Il banco di milioni di sardine a pochi metri dalla riva di Moalboal',
    'Le Chocolate Hills e i tarsi di Bohol',
    'L\'island hopping e il surf a Siargao',
  ],
  criticita: [
    'La stagione dei tifoni (giugno-novembre, picco agosto-ottobre) può fermare barche e voli: serve un giorno di margine',
    'Finestra ideale stretta: solo marzo-maggio è secco sia a Palawan sia a Siargao',
    'Pochi ATM sulle isole, spesso vuoti e con commissioni alte: contanti da Manila o Cebu',
    'Quattro voli interni low cost con orari che cambiano e bagaglio a parte',
    'Scooter e mare sono i rischi concreti: casco, niente guida notturna, barche con giubbotti',
  ],
  budgetTotale: 'indicativamente 1.600-2.600 € a persona in due, voli internazionali esclusi',
  viaggioInBreve: {
    treEsperienzePiuBelle:
      'La Big Lagoon di El Nido in kayak, il banco di sardine di Moalboal, l\'island hopping tra Naked, Daku e Guyam a Siargao',
  },
  tappeMappa: [
    { nome: 'Manila' },
    { nome: 'El Nido', destinazioneSlug: 'el-nido' },
    { nome: 'Coron', destinazioneSlug: 'coron' },
    { nome: 'Cebu e Moalboal', destinazioneSlug: 'cebu-moalboal' },
    { nome: 'Bohol e Panglao', destinazioneSlug: 'bohol' },
    { nome: 'Siargao', destinazioneSlug: 'siargao' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Manila', tratta: 'Arrivo internazionale a Manila', pernottamento: 'Manila, vicino all\'aeroporto o a Makati', statoPernottamento: 'consigliato', intensita: 'leggero' },
    { titoloGiorno: 'Giorno 2 — Volo per Puerto Princesa e van per El Nido', tratta: 'Manila → Puerto Princesa (volo, 1h20) → El Nido (van, 5-6 ore)', pernottamento: 'El Nido', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'volo 40-90 €, van 600-800 PHP, tassa ambientale 400 PHP', destinazioneSlug: 'el-nido' },
    { titoloGiorno: 'Giorno 3 — El Nido: le lagune del Tour A', pernottamento: 'El Nido', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Tour A 1.400-1.900 PHP più ingressi', destinazioneSlug: 'el-nido' },
    { titoloGiorno: 'Giorno 4 — El Nido: il Tour C e la spiaggia di Nacpan', pernottamento: 'El Nido', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Tour C 1.600-2.000 PHP, tricycle per Nacpan 1.000-1.500 PHP', destinazioneSlug: 'el-nido' },
    { titoloGiorno: 'Giorno 5 — Traghetto per Coron', tratta: 'El Nido → Coron, traghetto veloce di 3,5-4 ore', pernottamento: 'Coron town', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'traghetto 1.800-2.800 PHP', destinazioneSlug: 'coron' },
    { titoloGiorno: 'Giorno 6 — Coron: il lago Kayangan, il Barracuda e le Twin Lagoon', pernottamento: 'Coron town', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'tour 1.500-2.500 PHP più ingressi', destinazioneSlug: 'coron' },
    { titoloGiorno: 'Giorno 7 — Coron: relitti e isole di sabbia', pernottamento: 'Coron town', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'due immersioni 4.000-5.500 PHP', destinazioneSlug: 'coron' },
    { titoloGiorno: 'Giorno 8 — Volo per Cebu e trasferimento a Moalboal', tratta: 'Busuanga → Cebu (volo, 1h15) → Moalboal (auto 3 ore o bus 4 ore)', pernottamento: 'Moalboal, Panagsama Beach', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'volo 50-110 €, auto 3.000-4.000 PHP', destinazioneSlug: 'cebu-moalboal' },
    { titoloGiorno: 'Giorno 9 — Moalboal: le sardine e le tartarughe', pernottamento: 'Moalboal, Panagsama Beach', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'barca per Pescador 1.500-2.500 PHP', destinazioneSlug: 'cebu-moalboal' },
    { titoloGiorno: 'Giorno 10 — Il canyoning di Kawasan', pernottamento: 'Moalboal, Panagsama Beach', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'canyoning 1.500-2.500 PHP', destinazioneSlug: 'cebu-moalboal' },
    { titoloGiorno: 'Giorno 11 — Da Moalboal a Bohol', tratta: 'Moalboal → Cebu → Tagbilaran (OceanJet, 2 ore) → Panglao', pernottamento: 'Panglao', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'OceanJet 800-1.200 PHP', destinazioneSlug: 'bohol' },
    { titoloGiorno: 'Giorno 12 — Bohol: Chocolate Hills, tarsi e il fiume Loboc', pernottamento: 'Panglao', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'autista 2.500-3.500 PHP, ingressi 100-200 PHP ciascuno', destinazioneSlug: 'bohol' },
    { titoloGiorno: 'Giorno 13 — Panglao: Balicasag e Virgin Island', pernottamento: 'Panglao', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'barca 1.500-2.500 PHP a barca', destinazioneSlug: 'bohol' },
    { titoloGiorno: 'Giorno 14 — Volo per Siargao', tratta: 'Bohol o Cebu → Siargao, volo quasi sempre con scalo a Cebu', pernottamento: 'Siargao, General Luna', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'volo 50-120 €', destinazioneSlug: 'siargao' },
    { titoloGiorno: 'Giorno 15 — Siargao: Naked, Daku e Guyam', pernottamento: 'Siargao, General Luna', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'island hopping 1.500-2.000 PHP', destinazioneSlug: 'siargao' },
    { titoloGiorno: 'Giorno 16 — Siargao: la laguna di Sugba e Magpupungko', pernottamento: 'Siargao, General Luna', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'barca per Sugba 1.600-2.500 PHP a barca', destinazioneSlug: 'siargao' },
    { titoloGiorno: 'Giorno 17 — Siargao: surf e ultimo giorno di mare', pernottamento: 'Siargao, General Luna', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'lezione di surf 500-1.000 PHP l\'ora', destinazioneSlug: 'siargao' },
    { titoloGiorno: 'Giorno 18 — Rientro da Siargao', tratta: 'Siargao → Manila o Cebu → Italia', intensita: 'leggero', destinazioneSlug: 'siargao' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: undefined },
    { etichetta: 'Voli interni (4 tratte)', valore: '200-400 €' },
    { etichetta: 'Traghetti e van', valore: '60-100 €' },
    { etichetta: 'Escursioni, tasse ambientali e ingressi', valore: '200-320 €' },
    { etichetta: 'Immersioni', valore: '150-300 € per 4-6 immersioni' },
    { etichetta: 'Alloggi', valore: '40-100 € a notte a camera' },
    { etichetta: 'Pasti', valore: '15-30 € al giorno' },
  ],
}
