import type { TripMeta } from '@/lib/types'

// Overlay di metadati per "Bali, Sulawesi e Raja Ampat in 12 giorni".
// Il testo narrativo resta nel markdown (src/content/viaggi/85-bali-sulawesi-raja-ampat.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ...".
// Dati verificati il 5/11/2026: indonesia.travel (traghetto Sorong-Waisai 2h, 9:00 e 14:00,
// prezzo tolto: le fonti non coincidono; PIN a Waisai; stagione ottobre-aprile), rotte degli aeroporti di Sorong e
// Manado, listino di wale-adventure.com, gov.uk (regione della Papua). Importo del PIN per
// gli stranieri non confermato. Nessuna immagine: le foto le gestisce un altro lavoro.
// Coordinate della tappa Manado e Bunaken: quelle già usate nel sito per l'esperienza
// indonesia/diving-bunaken-national-park (src/content/mappe/coordinate.ts).

export const baliSulawesiRajaAmpatMeta: TripMeta = {
  tripSlug: 'bali-sulawesi-raja-ampat',
  paeseSlug: 'indonesia',
  ritmo:
    'Veloce: tre isole in dodici giorni, con tre voli interni e un giorno intero di viaggio al rientro da Raja Ampat. Lento solo in acqua, tra Kri e le isole Fam',
  trasporti:
    'Driver a Bali, volo Denpasar-Manado, auto e barca con un operatore locale nel nord di Sulawesi, volo Manado-Sorong, traghetto veloce Sorong-Waisai, barche degli homestay tra le isole di Raja Ampat, volo Sorong-Denpasar',
  stile: ['mare', 'snorkeling', 'immersioni', 'natura', 'isole'],
  adattoA: [
    'chi ha meno di due settimane e vuole vedere quanto cambia l\'Indonesia da un\'isola all\'altra',
    'chi ama lo snorkeling e le immersioni, da Bunaken ai reef di Raja Ampat',
    'chi accetta voli interni, coincidenze e qualche giornata di trasferimento lunga',
    'chi preferisce gli homestay ai resort',
  ],
  puntiForti: [
    'Il reef di Arborek e le isole Fam, tra i mari più ricchi di pesce al mondo',
    'Le pareti di Bunaken che scendono nel blu',
    'I tarsi della riserva di Tangkoko',
    'Gli homestay di Raja Ampat, che fanno arrivare i soldi alle famiglie',
    'Un percorso senza ritorni indietro grazie ai voli Manado-Sorong e Sorong-Denpasar',
    'Le versioni con una sola isola oltre a Bali, da scegliere secondo il periodo',
  ],
  criticita: [
    'Tre isole in dodici giorni sono un assaggio: ogni isola meriterebbe almeno una settimana',
    'Rotte e orari dei voli interni cambiano spesso: niente coincidenze strette',
    'Da maggio a settembre a Raja Ampat soffia il vento: trasferimenti più lunghi e uscite che possono saltare',
    'L\'importo del permesso di Raja Ampat per gli stranieri non è confermato',
    'Niente bancomat sulle isole di Raja Ampat: prelevare a Sorong o Waisai',
    'Pochi ospedali nella regione della Papua: serve un\'assicurazione che copra l\'evacuazione',
    'Correnti forti a Raja Ampat: certi punti si fanno solo negli orari giusti',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito: 'itinerario pensato per viaggiare in autonomia, con Wale Adventure nel nord di Sulawesi e gli homestay di Raja Ampat',
    treEsperienzePiuBelle: 'Il reef di Arborek, le pareti di Bunaken, la danza Kecak a Uluwatu',
    aChiLoConsiglio: 'A chi ha poco tempo e ama il mare; a chi può, una sola isola oltre a Bali, scelta in base al mese',
  },
  tappeMappa: [
    { nome: 'Ubud', destinazioneSlug: 'bali' },
    { nome: 'Uluwatu', destinazioneSlug: 'bali' },
    { nome: 'Manado, Tomohon e Bunaken', destinazioneSlug: 'sulawesi', lat: 1.61432, lng: 124.77546 },
    { nome: 'Kri e isole Fam', destinazioneSlug: 'raja-ampat' },
    { nome: 'Rientro a Bali', destinazioneSlug: 'bali' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Bali e strada per Ubud', tratta: 'Aeroporto di Denpasar → Ubud, con driver', pernottamento: 'Ubud', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'tassa turistica di Bali 150.000 IDR a persona, da pagare online', destinazioneSlug: 'bali' },
    { titoloGiorno: 'Giorno 2 — Ubud, le risaie e Sidemen', tratta: 'Ubud → Sidemen e ritorno, con driver', pernottamento: 'Ubud', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'bali' },
    { titoloGiorno: 'Giorno 3 — Uluwatu e la danza Kecak al tramonto', tratta: 'Ubud → Uluwatu con driver', pernottamento: 'Uluwatu', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'bali' },
    { titoloGiorno: 'Giorno 4 — Volo per Manado e salita a Tomohon', tratta: 'Denpasar → Manado in volo, diretto o con scalo a Makassar; Manado → Tomohon in auto', pernottamento: 'Tomohon', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'sulawesi' },
    { titoloGiorno: 'Giorno 5 — Tangkoko, la foresta dei tarsi', tratta: 'Tomohon → riserva di Tangkoko e ritorno', pernottamento: 'Tomohon o vicino a Tangkoko', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'gita di un giorno a Tangkoko con Wale Adventure 62 € a persona, minimo 2 persone (listino del sito)', destinazioneSlug: 'sulawesi' },
    { titoloGiorno: 'Giorno 6 — Bunaken e le pareti che scendono nel blu', tratta: 'Molo di Manado → Bunaken in barca e ritorno', pernottamento: 'Manado', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'gita di un giorno a Bunaken con Wale Adventure 62 € a persona, minimo 2 persone (listino del sito); immersioni a parte', destinazioneSlug: 'sulawesi' },
    { titoloGiorno: 'Giorno 7 — Volo per Sorong, traghetto per Waisai e Kri', tratta: 'Manado → Sorong in volo, traghetto Sorong-Waisai circa 2h (partenza delle 14), barca per Kri', pernottamento: 'Kri, homestay', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'biglietto del traghetto al porto (economy o VIP); permesso del parco, importo per gli stranieri da verificare', destinazioneSlug: 'raja-ampat' },
    { titoloGiorno: 'Giorno 8 — Kri e il reef di Arborek', pernottamento: 'Kri, homestay', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'raja-ampat' },
    { titoloGiorno: 'Giorno 9 — Verso le isole Fam e Piaynemo al tramonto', tratta: 'Kri → isole Fam in barca, Piaynemo', pernottamento: 'Isole Fam, homestay', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'raja-ampat' },
    { titoloGiorno: 'Giorno 10 — Fam: Rufas e la Fam Wall', pernottamento: 'Isole Fam, homestay', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'raja-ampat' },
    { titoloGiorno: 'Giorno 11 — Rientro a Sorong e volo per Bali', tratta: 'Fam → Waisai in barca, traghetto per Sorong circa 2h, volo Sorong → Denpasar', pernottamento: 'Bali o Sorong', statoPernottamento: 'consigliato', intensita: 'intenso', destinazioneSlug: 'raja-ampat' },
    { titoloGiorno: 'Giorno 12 — Partenza', intensita: 'leggero', destinazioneSlug: 'bali' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: undefined },
    { etichetta: 'Voli interni Denpasar-Manado, Manado-Sorong, Sorong-Denpasar', valore: undefined },
    { etichetta: 'Tassa turistica di Bali', valore: '150.000 IDR a persona' },
    { etichetta: 'Tour nel nord di Sulawesi con Wale Adventure', valore: 'gite di un giorno a Tangkoko o Bunaken 62 € a persona, Tomohon 42 €, minimo 2 persone (listino del sito)' },
    { etichetta: 'Traghetto Sorong-Waisai', valore: 'biglietto al porto, economy o VIP; prezzo da verificare' },
    { etichetta: 'Permesso di Raja Ampat (PIN)', valore: 'obbligatorio, importo per gli stranieri cambiato nel 2026 e da verificare' },
    { etichetta: 'Homestay a Raja Ampat', valore: undefined },
  ],
}
