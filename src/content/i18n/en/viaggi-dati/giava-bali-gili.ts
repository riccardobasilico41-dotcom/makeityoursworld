import type { TripMeta } from '@/lib/types'

const IMG = '/images/viaggi/giava-bali-gili'
const LUNGO = '/images/viaggi/indonesia-itinerario'

export const giavaBaliGiliMeta: TripMeta = {
  tripSlug: 'giava-bali-gili',
  paeseSlug: 'indonesia',
  ritmo:
    'Intense in the first week (night wake-ups for Borobudur, Bromo and Ijen, a whole day of trains), slower in Bali and the Gilis, with three final nights without long transfers',
  trasporti:
    'Domestic flight Jakarta-Yogyakarta, trains Yogyakarta-Surabaya-Probolinggo, minivan and 4x4 jeep for Bromo, Ketapang-Gilimanuk ferry, private driver or scooter in Bali, fast boat from Sanur or Padang Bai to the Gilis, cidomo and bicycles on the islands',
  stile: ['templi', 'vulcani', 'risaie', 'isole', 'cultura'],
  adattoA: [
    'those who have two weeks and want the best of Java, Bali and the Gilis in a single loop',
    'those who accept three wake-ups in the middle of the night for Borobudur, Bromo and Ijen',
    'those who want to see a Bali far from the beach-club south',
    'those happy to end the trip with a few slow days by the sea',
  ],
  puntiForti: [
    "Borobudur at sunrise and Prambanan at sunset on the same day",
    "Sunrise over Bromo and the blue fire of Ijen, with sulfur miners on the same trail",
    "North Bali with Munduk, Lake Beratan and the Handara gate, then the rice terraces of Jatiluwih and Sidemen",
    "The Kecak dance at sunset on the cliff at Uluwatu",
    "Turtles on the Gilis, snorkeling from the beach",
  ],
  criticita: [
    "The ticket to climb Borobudur is capped and sells out well in advance",
    'In Probolinggo touts declare the public minivans (about 35,000 IDR) "full" in order to sell inflated private rides',
    "The Bromo jeep costs roughly 700,000-900,000 IDR per vehicle: at dawn you may be asked for double or triple",
    "Day 6 combines night-time Ijen, a ferry and the road to north Bali: it's the longest of the trip",
    "At Ijen the gas mask is mandatory: the sulfur fumes are dangerous",
    "A scooter in Bali should only be ridden with real experience; otherwise a driver by the day",
    "Fast boats to the Gilis depend on the sea: better not to have an early intercontinental flight on the last day",
    "Nyepi (Balinese New Year, in March) closes Bali and its airport for 24 hours",
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'with friends, independently: it is the first half of the long trip through Indonesia, squeezed into two weeks',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'The blue fire of Ijen, sunrise over Bromo, the Kecak dance at Uluwatu',
    cosaCambierei: undefined,
    aChiLoConsiglio: 'To anyone going to Indonesia for the first time with two weeks',
  },
  tappeMappa: [
    { nome: 'Yogyakarta', destinazioneSlug: 'giava' },
    { nome: 'Bromo', destinazioneSlug: 'giava' },
    { nome: 'Ijen', destinazioneSlug: 'giava' },
    { nome: 'North Bali', destinazioneSlug: 'bali' },
    { nome: 'Ubud and Sidemen', destinazioneSlug: 'bali' },
    { nome: 'Uluwatu', destinazioneSlug: 'bali' },
    { nome: 'Gilis', destinazioneSlug: 'lombok-gili' },
  ],
  giorni: [
    { titoloGiorno: 'Day 1 — Arrival in Jakarta and flight to Yogyakarta', tratta: "Jakarta → Yogyakarta by plane, just under an hour and a half", pernottamento: 'Yogyakarta, Prawirotaman area', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'giava', immagine: '/images/indonesia/giacarta-monas-piazza-merdeka.jpg', imageAlt: 'The National Monument (Monas) in the middle of Jakarta\'s Merdeka Square, seen from above with the skyscrapers around it' },
    { titoloGiorno: 'Day 2 — Sunrise at Borobudur, sunset at Prambanan', pernottamento: 'Yogyakarta, Prawirotaman area', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'ticket to climb the Borobudur structure is capped, book ahead', destinazioneSlug: 'giava', immagine: '/images/indonesia/borobudur-buddha-nebbia-riccardo.jpg', imageAlt: "The back of a stone Buddha head at Borobudur, in front of the valley wrapped in dawn mist" },
    { titoloGiorno: 'Day 3 — Yogyakarta: the kraton, batik and Malioboro', pernottamento: 'Yogyakarta, Prawirotaman area', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'giava', immagine: `${LUNGO}/giorno-08-kraton-yogyakarta.jpg`, imageAlt: "A decorated pavilion of the Kraton of Yogyakarta, the Sultan's palace, among the trees of the inner courtyard" },
    { titoloGiorno: 'Day 4 — By train toward Probolinggo and Cemoro Lawang', tratta: 'Yogyakarta → Surabaya Gubeng (train, 4-5h) → Probolinggo (train, about 2h) → Cemoro Lawang by minivan', pernottamento: 'Cemoro Lawang', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Yogyakarta-Surabaya train 75,000-285,000 IDR; public minivan Probolinggo-Cemoro Lawang about 35,000 IDR per person', destinazioneSlug: 'giava', immagine: '/images/indonesia/bromo-caldera-riccardo.jpg', imageAlt: 'The Tengger caldera from the rim above Cemoro Lawang: the smoking Bromo, the Batok cone and Semeru behind' },
    { titoloGiorno: 'Day 5 — Sunrise at Bromo and on to Ijen', tratta: 'Cemoro Lawang → Penanjakan by jeep, then Banyuwangi or Licin by car', pernottamento: 'Banyuwangi or Licin', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'shared jeep 700,000-900,000 IDR per vehicle, to split among 4-6', destinazioneSlug: 'giava', immagine: `${IMG}/bromo-alba.jpg`, imageAlt: "The Bromo crater smoking in the Sea of Sand at first light, with Semeru in the background, seen from the drone" },
    { titoloGiorno: 'Day 6 — The blue fire of Ijen and the ferry to Bali', tratta: 'Ijen → Ketapang → ferry to Gilimanuk (30-60 min) → north Bali', pernottamento: 'Lovina or Munduk', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Ketapang-Gilimanuk ferry a few euros per person, departures every 15 minutes', destinazioneSlug: 'giava', immagine: `${LUNGO}/giorno-11-kawah-ijen.jpg`, imageAlt: "The blue flames of the sulfur fire at Kawah Ijen, photographed at night in the darkness of the crater" },
    { titoloGiorno: 'Day 7 — North Bali: Munduk, Lake Beratan and the Handara gate', pernottamento: 'Munduk', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'bali', immagine: `${IMG}/bali-handara.jpg`, imageAlt: "The Handara gate, the Balinese stone portal opening onto an avenue between lawns, seen from the drone in the haze" },
    { titoloGiorno: 'Day 8 — The Jatiluwih rice terraces and arrival in Ubud', tratta: 'Munduk → Jatiluwih → Ubud, best with a private driver', pernottamento: 'Ubud', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'bali', immagine: `${IMG}/risaie-jatiluwih.jpg`, imageAlt: "The terraced rice fields of Jatiluwih seen from above, among palm trees and small huts, Bali" },
    { titoloGiorno: 'Day 9 — Ubud and the Tegalalang rice terraces', pernottamento: 'Ubud', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'bali', immagine: `${LUNGO}/giorno-13-tegalalang.jpg`, imageAlt: "The terraced rice fields of Tegalalang descending in green waves among palm trees, near Ubud, Bali" },
    { titoloGiorno: 'Day 10 — Sidemen and the Gunung Agung valley', tratta: 'Ubud → Sidemen and back, 1h15-1h30 each way', pernottamento: 'Ubud', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'private driver round trip roughly 350,000 IDR (20€)', destinazioneSlug: 'bali', immagine: `${LUNGO}/giorno-14-sidemen.jpg`, imageAlt: "The rice fields of the Sidemen valley at the foot of Gunung Agung, seen from an irrigation channel, eastern Bali" },
    { titoloGiorno: 'Day 11 — Uluwatu and the Kecak dance at sunset', tratta: 'Ubud → Uluwatu', pernottamento: 'Uluwatu', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'bali', immagine: `${LUNGO}/giorno-18-uluwatu.jpg`, imageAlt: "The sheer cliffs of Uluwatu with the Pura Luhur temple on top, above the turquoise sea of Bali" },
    { titoloGiorno: 'Day 12 — By fast boat to the Gilis', tratta: 'Uluwatu → Sanur or Padang Bai → Gilis by fast boat', pernottamento: 'Gili Islands (Trawangan, Air or Meno)', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'lombok-gili', immagine: `${IMG}/gili-dall-alto.jpg`, imageAlt: "A white-sand islet in the calm sea of the Gilis, with neighboring islands in the background, seen from the drone" },
    { titoloGiorno: 'Day 13 — Gilis: turtles, bikes and sunset', pernottamento: 'Gili Islands (Trawangan, Air or Meno)', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'lombok-gili', immagine: `${IMG}/gili-tramonto.jpg`, imageAlt: "The low sun over the sea of the Gilis, with a small green island on the horizon, seen from the drone at sunset" },
    { titoloGiorno: 'Day 14 — Back to Bali and departure', tratta: 'Gilis → Bali by fast boat → Denpasar airport', intensita: 'leggero', destinazioneSlug: 'bali' },
  ],
  budget: [
    { etichetta: 'Intercontinental flights', valore: undefined },
    { etichetta: 'Domestic flight', valore: 'Jakarta-Yogyakarta, just under an hour and a half' },
    { etichetta: 'Trains and minivans for Bromo', valore: 'Yogyakarta-Surabaya train 75,000-285,000 IDR; public minivan from Probolinggo about 35,000 IDR per person' },
    { etichetta: 'Bromo jeep', valore: '700,000-900,000 IDR per vehicle, to split among 4-6' },
    { etichetta: 'Private driver in Bali', valore: 'roughly 300,000-600,000 IDR per leg; Ubud-Sidemen round trip about 350,000 IDR' },
    { etichetta: 'Lodging', valore: 'budget in Java and around the volcanoes, mid-range in Bali and the Gilis' },
    { etichetta: 'Meals', valore: 'a few euros a dish in warungs; more in the tourist places of Bali' },
  ],
}
