import type { TripMeta } from '@/lib/types'

// Overlay di metadati per la guida "Indonesia isola per isola".
// Il testo resta nel markdown (src/content/viaggi/86-indonesia-isola-per-isola.md).
// Guida modulare: `giorni[]` segue le zone "### ..." della sezione "Itinerario isola per
// isola" (unitaGiorniLabel 'Zona', come dolomiti-roadtrip), e i titoli devono combaciare.
// Il Borneo indonesiano non ha una destinazione nel sito: niente destinazioneSlug.
// Nessuna immagine: le foto le gestisce un altro lavoro.

export const indonesiaIsolaPerIsolaMeta: TripMeta = {
  tripSlug: 'indonesia-isola-per-isola',
  paeseSlug: 'indonesia',
  ritmo:
    'Guida modulare: almeno una settimana per isola, scegliendo le isole in base al mese. Le destinazioni sono intercambiabili',
  trasporti:
    'Voli interni dagli snodi di Giacarta, Bali e Makassar; treni a Giava; barche veloci per Nusa, Gili e Mentawai; traghetti; barche e liveaboard a Komodo e Raja Ampat; driver a giornata o scooter per chi ha esperienza',
  stile: ['isole', 'mare', 'vulcani', 'giungla', 'cultura'],
  adattoA: [
    'chi deve scegliere quali isole vedere e in che periodo',
    'chi vuole capire come ci si muove tra le isole e quanti giorni servono',
    'chi ha già fatto Bali e cerca la prossima isola',
    'chi vuole costruire il proprio itinerario partendo da quelli già pronti nel sito',
  ],
  puntiForti: [
    'Il calendario delle stagioni isola per isola, con Raja Ampat che va al contrario',
    'Per ogni isola cosa fare, come arrivare, quando andare e quanti giorni servono',
    'I ricordi di Rick isola per isola, dai draghi di Komodo ai funerali di Toraja',
    'Gli esempi di combinazione già pronti, da 12 giorni a 5 settimane',
  ],
  criticita: [
    'Prezzi, orari, chiusure e tasse locali cambiano spesso: vanno ricontrollati prima di partire',
    'Il Rinjani di solito chiude nei primi mesi dell\'anno (nel 2026 dal 1° gennaio al 31 marzo) e può chiudere singoli sentieri anche in stagione secca',
    'L\'importo del permesso di Raja Ampat per gli stranieri non è confermato',
    'Il Borneo indonesiano non è stato visitato da Rick: solo informazioni di base',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    aChiLoConsiglio: 'A chi sta scegliendo dove andare in Indonesia: una o due isole per viaggio, in base al mese',
  },
  unitaGiorniLabel: 'Zona',
  tappeMappa: [
    { nome: 'Sumatra', destinazioneSlug: 'sumatra' },
    { nome: 'Mentawai', destinazioneSlug: 'mentawai' },
    { nome: 'Giava', destinazioneSlug: 'giava' },
    { nome: 'Bali', destinazioneSlug: 'bali' },
    { nome: 'Nusa Penida e Nusa Lembongan', destinazioneSlug: 'bali', lat: -8.74559, lng: 115.53468 },
    { nome: 'Lombok e Gili', destinazioneSlug: 'lombok-gili' },
    { nome: 'Komodo', destinazioneSlug: 'komodo' },
    { nome: 'Flores', destinazioneSlug: 'flores' },
    { nome: 'Sulawesi', destinazioneSlug: 'sulawesi' },
    { nome: 'Raja Ampat', destinazioneSlug: 'raja-ampat' },
  ],
  giorni: [
    { titoloGiorno: 'Bali', tratta: 'Volo su Denpasar', intensita: 'leggero', costiNoti: 'tassa turistica 150.000 IDR a persona', destinazioneSlug: 'bali' },
    { titoloGiorno: 'Nusa Penida e Nusa Lembongan', tratta: 'Barca veloce da Sanur, circa mezz\'ora', intensita: 'medio', costiNoti: 'tassa locale delle Nusa, separata da quella di Bali', destinazioneSlug: 'bali' },
    { titoloGiorno: 'Lombok e le Gili', tratta: 'Volo su Lombok o barca veloce da Bali', intensita: 'intenso', costiNoti: 'Rinjani con guida e operatore autorizzato, prenotazione sull\'app ufficiale E-Rinjani; nel 2026 chiuso dal 1° gennaio al 31 marzo', destinazioneSlug: 'lombok-gili' },
    { titoloGiorno: 'Giava', tratta: 'Volo su Giacarta, Yogyakarta o Surabaya', intensita: 'intenso', costiNoti: 'biglietto per salire su Borobudur a numero chiuso', destinazioneSlug: 'giava' },
    { titoloGiorno: 'Sumatra', tratta: 'Volo su Medan o Padang', intensita: 'intenso', destinazioneSlug: 'sumatra' },
    { titoloGiorno: 'Le Mentawai', tratta: 'Traghetto veloce Mentawai Fast da Padang', intensita: 'intenso', costiNoti: 'tassa surf con importo da verificare', destinazioneSlug: 'mentawai' },
    { titoloGiorno: 'Komodo e Flores', tratta: 'Volo diretto da Bali o Giacarta su Labuan Bajo', intensita: 'medio', costiNoti: 'ingresso al parco 250.000 IDR a persona per gli stranieri dal 30/10/2024', destinazioneSlug: 'komodo' },
    { titoloGiorno: 'Sulawesi', tratta: 'Volo su Makassar o Manado; 8-10 h di strada per Toraja', intensita: 'medio', destinazioneSlug: 'sulawesi' },
    { titoloGiorno: 'Raja Ampat', tratta: 'Volo su Sorong, traghetto per Waisai circa 2h', intensita: 'medio', costiNoti: 'biglietto del traghetto al porto; permesso del parco obbligatorio', destinazioneSlug: 'raja-ampat' },
    { titoloGiorno: 'Il Borneo indonesiano', tratta: 'Volo su Pangkalan Bun, klotok dal porto di Kumai', intensita: 'leggero' },
  ],
  budget: [
    { etichetta: 'Visto e-VOA', valore: 'circa 500.000 IDR' },
    { etichetta: 'Tassa turistica di Bali', valore: '150.000 IDR a persona' },
    { etichetta: 'Ingresso al Parco di Komodo', valore: '250.000 IDR a persona per gli stranieri, trekking e snorkeling compresi' },
    { etichetta: 'Traghetto Sorong-Waisai', valore: 'biglietto al porto, economy o VIP; prezzo da verificare' },
    { etichetta: 'Permesso di Raja Ampat (PIN)', valore: 'obbligatorio, importo per gli stranieri da verificare' },
    { etichetta: 'Voli interni', valore: undefined },
  ],
}
