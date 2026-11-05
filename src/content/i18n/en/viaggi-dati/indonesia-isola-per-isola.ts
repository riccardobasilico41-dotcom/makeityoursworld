import type { TripMeta } from '@/lib/types'

export const indonesiaIsolaPerIsolaMeta: TripMeta = {
  tripSlug: 'indonesia-isola-per-isola',
  paeseSlug: 'indonesia',
  ritmo:
    'Modular guide: at least a week per island, picking the islands by the month. The destinations are interchangeable',
  trasporti:
    'Domestic flights from the Jakarta, Bali and Makassar hubs; trains on Java; fast boats to the Nusas, the Gilis and the Mentawai; ferries; boats and liveaboards in Komodo and Raja Ampat; day drivers, or a scooter for experienced riders',
  stile: ['isole', 'mare', 'vulcani', 'giungla', 'cultura'],
  adattoA: [
    'those who need to choose which islands to see and when',
    'those who want to understand how to get between the islands and how many days they need',
    'those who have already done Bali and are looking for the next island',
    'those who want to build their own itinerary starting from the ones already on the site',
  ],
  puntiForti: [
    'The island-by-island season calendar, with Raja Ampat running the other way',
    'For each island what to do, how to get there, when to go and how many days you need',
    "Rick's memories island by island, from the Komodo dragons to the Toraja funerals",
    'Ready-made combination examples, from 12 days to 5 weeks',
  ],
  criticita: [
    'Prices, times, closures and local fees change often: recheck them before you go',
    'Rinjani usually closes in the first months of the year (in 2026 from January 1 to March 31) and can close single trails in the dry season too',
    'The Raja Ampat permit amount for foreigners is not confirmed',
    'Rick has not visited Indonesian Borneo: basic information only',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    aChiLoConsiglio: 'To anyone choosing where to go in Indonesia: one or two islands per trip, based on the month',
  },
  unitaGiorniLabel: 'Zona',
  tappeMappa: [
    { nome: 'Sumatra', destinazioneSlug: 'sumatra' },
    { nome: 'Mentawai', destinazioneSlug: 'mentawai' },
    { nome: 'Java', destinazioneSlug: 'giava' },
    { nome: 'Bali', destinazioneSlug: 'bali' },
    { nome: 'Nusa Penida and Nusa Lembongan', destinazioneSlug: 'bali', lat: -8.74559, lng: 115.53468 },
    { nome: 'Lombok and the Gilis', destinazioneSlug: 'lombok-gili' },
    { nome: 'Komodo', destinazioneSlug: 'komodo' },
    { nome: 'Flores', destinazioneSlug: 'flores' },
    { nome: 'Sulawesi', destinazioneSlug: 'sulawesi' },
    { nome: 'Raja Ampat', destinazioneSlug: 'raja-ampat' },
  ],
  giorni: [
    { titoloGiorno: 'Bali', tratta: 'Flight to Denpasar', intensita: 'leggero', costiNoti: 'tourist levy 150,000 IDR per person', destinazioneSlug: 'bali', immagine: '/images/indonesia/jatiluwih-terrazze-riccardo.jpg', imageAlt: "The Jatiluwih rice terraces in Bali, glossy with water to the horizon, seen from the drone" },
    { titoloGiorno: 'Nusa Penida and Nusa Lembongan', tratta: 'Fast boat from Sanur, about half an hour', intensita: 'medio', costiNoti: "Nusa local tax, separate from Bali's", destinazioneSlug: 'bali', immagine: '/images/viaggi/bali-nusa-komodo/giorno-06-kelingking.webp', imageAlt: "Kelingking Beach from above, with the T-rex shaped headland over the sea of Nusa Penida" },
    { titoloGiorno: 'Lombok and the Gilis', tratta: 'Flight to Lombok or fast boat from Bali', intensita: 'intenso', costiNoti: 'Rinjani with a guide and licensed operator, booked on the official E-Rinjani app; in 2026 closed from January 1 to March 31', destinazioneSlug: 'lombok-gili', immagine: '/images/indonesia/gili-isolotto-barche-riccardo.jpg', imageAlt: "A white sand islet off Lombok, with outrigger boats moored and hills in the background" },
    { titoloGiorno: 'Java', tratta: 'Flight to Jakarta, Yogyakarta or Surabaya', intensita: 'intenso', costiNoti: 'capped tickets to climb Borobudur', destinazioneSlug: 'giava', immagine: '/images/indonesia/bromo-alba-drone-riccardo.jpg', imageAlt: "Bromo's crater smoking in the mist-filled caldera at dawn, seen from the drone" },
    { titoloGiorno: 'Sumatra', tratta: 'Flight to Medan or Padang', intensita: 'intenso', destinazioneSlug: 'sumatra', immagine: '/images/viaggi/indonesia-itinerario/giorno-04-lago-toba.jpg', imageAlt: "Panoramic view of Lake Toba and the town of Parapat from the water, Sumatra" },
    { titoloGiorno: 'The Mentawai', tratta: 'Mentawai Fast ferry from Padang', intensita: 'intenso', costiNoti: 'surf tax, amount to be checked', destinazioneSlug: 'mentawai', immagine: '/images/indonesia/mentawai-costa-foresta.webp', imageAlt: "The Mentawai rainforest reaching the sea, with a river winding to the coast, seen from the drone" },
    { titoloGiorno: 'Komodo and Flores', tratta: 'Direct flight from Bali or Jakarta to Labuan Bajo', intensita: 'medio', costiNoti: 'park entry 250,000 IDR per person for foreigners since 10/30/2024', destinazioneSlug: 'komodo', immagine: '/images/viaggi/indonesia-itinerario/giorno-28-komodo-dragon.jpg', imageAlt: "Close-up of a Komodo dragon's head with its forked tongue out, Komodo National Park" },
    { titoloGiorno: 'Sulawesi', tratta: 'Flight to Makassar or Manado; 8-10 h by road to Toraja', intensita: 'medio', destinazioneSlug: 'sulawesi', immagine: '/images/viaggi/indonesia-itinerario/giorno-33-kete-kesu-tongkonan.jpg', imageAlt: "The carved and painted front of a tongkonan at Kete Kesu, decorated with stacked buffalo horns, Tana Toraja" },
    { titoloGiorno: 'Raja Ampat', tratta: 'Flight to Sorong, ferry to Waisai about 2h', intensita: 'medio', costiNoti: 'ferry ticket at the port; park permit mandatory', destinazioneSlug: 'raja-ampat', immagine: '/images/viaggi/bali-sulawesi-raja-ampat/giorno-09-piaynemo.webp', imageAlt: "The forest-covered karst islands of Piaynemo, between green lagoons and channels" },
    { titoloGiorno: 'Indonesian Borneo', tratta: 'Flight to Pangkalan Bun, klotok from the port of Kumai', intensita: 'leggero', immagine: '/images/viaggi/indonesia-isola-per-isola/zona-borneo-tanjung-puting.webp', imageAlt: "The Sekonyer river through the forest of Tanjung Puting National Park, Kalimantan" },
  ],
  budget: [
    { etichetta: 'e-VOA visa', valore: 'about 500,000 IDR' },
    { etichetta: 'Bali tourist levy', valore: '150,000 IDR per person' },
    { etichetta: 'Komodo National Park entry', valore: '250,000 IDR per person for foreigners, trekking and snorkeling included' },
    { etichetta: 'Sorong-Waisai ferry', valore: 'ticket at the port, economy or VIP; price to be checked' },
    { etichetta: 'Raja Ampat permit (PIN)', valore: 'mandatory, amount for foreigners to be checked' },
    { etichetta: 'Domestic flights', valore: undefined },
  ],
}
