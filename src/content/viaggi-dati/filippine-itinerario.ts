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
    'Quattro voli interni low cost con orari che cambiano e bagaglio a parte; per Siargao sempre scalo a Cebu',
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
    { titoloGiorno: 'Giorno 1 — Arrivo a Manila', tratta: 'Arrivo internazionale a Manila', pernottamento: 'Manila, vicino all\'aeroporto o a Makati', statoPernottamento: 'consigliato', intensita: 'leggero', immagine: '/images/viaggi/filippine-itinerario/giorno-01-manila.jpg', imageAlt: 'Le mura e i bastioni spagnoli di Intramuros, il centro storico di Manila' },
    { titoloGiorno: 'Giorno 2 — Volo per Puerto Princesa e van per El Nido', tratta: 'Manila → Puerto Princesa (volo, 1h20) → El Nido (van, 5-6 ore)', pernottamento: 'El Nido', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'volo 40-90 €, van 600-800 PHP, tassa ambientale 400 PHP', destinazioneSlug: 'el-nido', immagine: '/images/viaggi/filippine-itinerario/giorno-02-el-nido.jpg', imageAlt: 'La cittadina di El Nido stretta tra il mare e le falesie calcaree, Palawan' },
    { titoloGiorno: 'Giorno 3 — El Nido: le lagune del Tour A', pernottamento: 'El Nido', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Tour A 1.200-1.800 PHP, Big Lagoon circa 200 PHP e kayak 150-200 PHP a parte', destinazioneSlug: 'el-nido', immagine: '/images/viaggi/filippine-itinerario/giorno-03-el-nido.jpg', imageAlt: 'Falesie calcaree e acqua turchese nell\'arcipelago di Bacuit, El Nido' },
    { titoloGiorno: 'Giorno 4 — El Nido: il Tour C e la spiaggia di Nacpan', pernottamento: 'El Nido', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Tour C 1.400-1.800 PHP, tricycle per Nacpan 1.000-1.500 PHP', destinazioneSlug: 'el-nido', immagine: '/images/viaggi/filippine-itinerario/giorno-04-el-nido.jpg', imageAlt: 'Isole calcaree e barche bangka nella baia di El Nido, Palawan' },
    { titoloGiorno: 'Giorno 5 — Traghetto per Coron', tratta: 'El Nido → Coron, traghetto veloce di 3,5-4 ore', pernottamento: 'Coron town', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'traghetto 1.800-3.500 PHP', destinazioneSlug: 'coron', immagine: '/images/viaggi/filippine-itinerario/giorno-05-coron.jpg', imageAlt: 'La baia di Coron vista dal monte Tapyas, con le isole sullo sfondo' },
    { titoloGiorno: 'Giorno 6 — Coron: il lago Kayangan, il Barracuda e le Twin Lagoon', pernottamento: 'Coron town', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'tour 1.500-2.500 PHP più ingressi (Kayangan circa 300 PHP, Twin Lagoon circa 200 PHP, Barracuda 150-250 PHP)', destinazioneSlug: 'coron', immagine: '/images/viaggi/filippine-itinerario/giorno-06-coron.jpg', imageAlt: 'Le scogliere calcaree dell\'isola di Coron che scendono nell\'acqua turchese' },
    { titoloGiorno: 'Giorno 7 — Coron: relitti e isole di sabbia', pernottamento: 'Coron town', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'due immersioni 4.000-5.500 PHP', destinazioneSlug: 'coron', immagine: '/images/viaggi/filippine-itinerario/giorno-07-coron.jpg', imageAlt: 'Le isole delle Calamian attorno a Coron, con acqua limpida e rocce carsiche' },
    { titoloGiorno: 'Giorno 8 — Volo per Cebu e trasferimento a Moalboal', tratta: 'Busuanga → Cebu (volo, 1h15) → Moalboal (auto 3 ore o bus 4 ore)', pernottamento: 'Moalboal, Panagsama Beach', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'volo 50-110 €, auto 3.000-4.000 PHP', destinazioneSlug: 'cebu-moalboal', immagine: '/images/viaggi/filippine-itinerario/giorno-08-cebu-moalboal.jpg', imageAlt: 'L\'isolotto di Pescador davanti a Moalboal, circondato dal reef' },
    { titoloGiorno: 'Giorno 9 — Moalboal: le sardine e le tartarughe', pernottamento: 'Moalboal, Panagsama Beach', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'barca per Pescador 1.500-2.500 PHP', destinazioneSlug: 'cebu-moalboal', immagine: '/images/viaggi/filippine-itinerario/giorno-09-cebu-moalboal.jpg', imageAlt: 'Il reef attorno all\'isola di Pescador visto dall\'alto, al largo di Moalboal' },
    { titoloGiorno: 'Giorno 10 — Il canyoning di Kawasan', pernottamento: 'Moalboal, Panagsama Beach', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'canyoning 1.500-2.500 PHP', destinazioneSlug: 'cebu-moalboal' },
    { titoloGiorno: 'Giorno 11 — Da Moalboal a Bohol', tratta: 'Moalboal → Cebu → Tagbilaran (OceanJet, 2 ore) → Panglao; in alternativa Oslob → Panglao in bangka', pernottamento: 'Panglao', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'OceanJet 900-1.000 PHP in classe turistica (business 1.400-1.550 PHP); bangka Oslob-Panglao circa 1.000 PHP', destinazioneSlug: 'bohol', immagine: '/images/viaggi/filippine-itinerario/giorno-11-bohol.jpg', imageAlt: 'Le Chocolate Hills di Bohol, colline coniche coperte d\'erba' },
    { titoloGiorno: 'Giorno 12 — Bohol: Chocolate Hills, tarsi e il fiume Loboc', pernottamento: 'Panglao', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'autista 2.500-3.500 PHP, ingressi 100-200 PHP ciascuno', destinazioneSlug: 'bohol', immagine: '/images/viaggi/filippine-itinerario/giorno-12-bohol.jpg', imageAlt: 'Un tarsio delle Filippine aggrappato a un ramo, a Bohol' },
    { titoloGiorno: 'Giorno 13 — Panglao: Balicasag e Virgin Island', pernottamento: 'Panglao', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'barca 1.500-2.500 PHP a barca', destinazioneSlug: 'bohol', immagine: '/images/viaggi/filippine-itinerario/giorno-13-bohol.jpg', imageAlt: 'La spiaggia di Doljo a Panglao con le palme e il mare basso' },
    { titoloGiorno: 'Giorno 14 — Volo per Siargao', tratta: 'Bohol → Cebu → Siargao: nessun volo diretto da Panglao, circa 1 ora da Cebu', pernottamento: 'Siargao, General Luna', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'volo 50-120 €', destinazioneSlug: 'siargao', immagine: '/images/viaggi/filippine-itinerario/giorno-14-siargao.jpg', imageAlt: 'Una spiaggia di sabbia chiara tra le palme nella zona di Magpupungko, a Siargao' },
    { titoloGiorno: 'Giorno 15 — Siargao: Naked, Daku e Guyam', pernottamento: 'Siargao, General Luna', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'island hopping 1.500-2.000 PHP', destinazioneSlug: 'siargao' },
    { titoloGiorno: 'Giorno 16 — Siargao: la laguna di Sugba e Magpupungko', pernottamento: 'Siargao, General Luna', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'barca per Sugba 1.600-2.500 PHP a barca', destinazioneSlug: 'siargao', immagine: '/images/viaggi/filippine-itinerario/giorno-16-siargao.jpg', imageAlt: 'La spiaggia di Magpupungko a Siargao con la piattaforma di roccia scoperta dalla bassa marea' },
    { titoloGiorno: 'Giorno 17 — Siargao: surf e ultimo giorno di mare', pernottamento: 'Siargao, General Luna', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'lezione di surf 500-1.000 PHP l\'ora', destinazioneSlug: 'siargao', immagine: '/images/viaggi/filippine-itinerario/giorno-17-siargao.jpg', imageAlt: 'La passerella e la torre di legno sul reef di Cloud 9, lo spot di surf di Siargao' },
    { titoloGiorno: 'Giorno 18 — Rientro da Siargao', tratta: 'Siargao → Manila o Cebu → Italia', intensita: 'leggero', destinazioneSlug: 'siargao', immagine: '/images/viaggi/filippine-itinerario/giorno-17-siargao.jpg', imageAlt: 'La passerella e la torre di legno sul reef di Cloud 9, lo spot di surf di Siargao' },
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
