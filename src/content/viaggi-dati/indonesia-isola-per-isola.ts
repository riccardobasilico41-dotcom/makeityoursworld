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
    { titoloGiorno: 'Bali', tratta: 'Volo su Denpasar', intensita: 'leggero', costiNoti: 'tassa turistica 150.000 IDR a persona', destinazioneSlug: 'bali', immagine: '/images/indonesia/jatiluwih-terrazze-riccardo.jpg', imageAlt: "Le risaie a terrazze di Jatiluwih, a Bali, lucide d'acqua fino all'orizzonte, viste dal drone" },
    { titoloGiorno: 'Nusa Penida e Nusa Lembongan', tratta: 'Barca veloce da Sanur, circa mezz\'ora', intensita: 'medio', costiNoti: 'tassa locale delle Nusa, separata da quella di Bali', destinazioneSlug: 'bali', immagine: '/images/viaggi/bali-nusa-komodo/giorno-06-kelingking.webp', imageAlt: "La spiaggia di Kelingking dall'alto, con il promontorio a forma di T-rex sul mare di Nusa Penida" },
    { titoloGiorno: 'Lombok e le Gili', tratta: 'Volo su Lombok o barca veloce da Bali', intensita: 'intenso', costiNoti: 'Rinjani con guida e operatore autorizzato, prenotazione sull\'app ufficiale E-Rinjani; nel 2026 chiuso dal 1° gennaio al 31 marzo', destinazioneSlug: 'lombok-gili', immagine: '/images/indonesia/gili-isolotto-barche-riccardo.jpg', imageAlt: "Un isolotto di sabbia bianca al largo di Lombok, con le barche a bilanciere ormeggiate e le colline sullo sfondo" },
    { titoloGiorno: 'Giava', tratta: 'Volo su Giacarta, Yogyakarta o Surabaya', intensita: 'intenso', costiNoti: 'biglietto per salire su Borobudur a numero chiuso', destinazioneSlug: 'giava', immagine: '/images/indonesia/bromo-alba-drone-riccardo.jpg', imageAlt: "Il cratere del Bromo che fuma nella caldera piena di nebbia alla luce dell'alba, visto dal drone" },
    { titoloGiorno: 'Sumatra', tratta: 'Volo su Medan o Padang', intensita: 'intenso', destinazioneSlug: 'sumatra', immagine: '/images/viaggi/indonesia-itinerario/giorno-04-lago-toba.jpg', imageAlt: "Vista panoramica del Lago Toba e della cittadina di Parapat dalle acque del lago, Sumatra" },
    { titoloGiorno: 'Le Mentawai', tratta: 'Traghetto veloce Mentawai Fast da Padang', intensita: 'intenso', costiNoti: 'tassa surf con importo da verificare', destinazioneSlug: 'mentawai', immagine: '/images/indonesia/mentawai-costa-foresta.webp', imageAlt: "La foresta pluviale delle Mentawai che arriva fino al mare, con un fiume che serpeggia verso la costa, vista dal drone" },
    { titoloGiorno: 'Komodo e Flores', tratta: 'Volo diretto da Bali o Giacarta su Labuan Bajo', intensita: 'medio', costiNoti: 'ingresso al parco 250.000 IDR a persona per gli stranieri dal 30/10/2024', destinazioneSlug: 'komodo', immagine: '/images/viaggi/indonesia-itinerario/giorno-28-komodo-dragon.jpg', imageAlt: "Primo piano della testa di un drago di Komodo con la lingua biforcuta estesa, Parco Nazionale di Komodo" },
    { titoloGiorno: 'Sulawesi', tratta: 'Volo su Makassar o Manado; 8-10 h di strada per Toraja', intensita: 'medio', destinazioneSlug: 'sulawesi', immagine: '/images/viaggi/indonesia-itinerario/giorno-33-kete-kesu-tongkonan.jpg', imageAlt: "La facciata intagliata e dipinta di una tongkonan a Kete Kesu, decorata con corna di bufalo impilate, Tana Toraja" },
    { titoloGiorno: 'Raja Ampat', tratta: 'Volo su Sorong, traghetto per Waisai circa 2h', intensita: 'medio', costiNoti: 'biglietto del traghetto al porto; permesso del parco obbligatorio', destinazioneSlug: 'raja-ampat', immagine: '/images/viaggi/bali-sulawesi-raja-ampat/giorno-09-piaynemo.webp', imageAlt: "Le isole carsiche di Piaynemo coperte di foresta, tra lagune verdi e canali" },
    { titoloGiorno: 'Il Borneo indonesiano', tratta: 'Volo su Pangkalan Bun, klotok dal porto di Kumai', intensita: 'leggero', immagine: '/images/viaggi/indonesia-isola-per-isola/zona-borneo-tanjung-puting.webp', imageAlt: "Il fiume Sekonyer tra la foresta del Parco Nazionale di Tanjung Puting, nel Kalimantan" },
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
