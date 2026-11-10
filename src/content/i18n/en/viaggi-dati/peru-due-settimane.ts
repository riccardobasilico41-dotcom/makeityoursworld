import type { TripMeta } from '@/lib/types'

const IMG = '/images/viaggi/peru-itinerario'

export const peruDueSettimaneMeta: TripMeta = {
  tripSlug: 'peru-due-settimane',
  paeseSlug: 'peru',
  ritmo:
    "Moderate: two full transfer days by bus (Arequipa-Puno and Puno-Cusco) and slow days on arriving at altitude, alternating with intense days in the Colca, on Titicaca and at Machu Picchu. The south-to-north order is there to climb in altitude by steps.",
  trasporti:
    'Independent: domestic flights Lima-Arequipa and Cusco-Lima, tour or regular bus for the Colca, tourist buses Arequipa-Puno and Puno-Cusco, boat on Titicaca, car with driver in the Sacred Valley, PeruRail/IncaRail train from Ollantaytambo to Aguas Calientes and shuttle bus to Machu Picchu.',
  stile: ['cultura inca', 'alta quota', 'natura', 'sud america'],
  adattoA: [
    'those going to Peru for the first time with two weeks',
    'those who want Machu Picchu, Titicaca and the Colca without rushing',
    "those who worry about altitude and prefer to climb one step at a time",
    'those who can add 3-4 days for the Amazon from Puerto Maldonado or for Laguna 69 in Huaraz',
  ],
  puntiForti: [
    'Machu Picchu on the first shift, with forty minutes of silence before the groups arrive',
    "The night with a family on Amantaní, the only moment of the loop outside the tourist circuit",
    'The condors at the Cruz del Cóndor in the Colca Canyon, when they rise on the morning currents',
    'The Santa Catalina Monastery in Arequipa, a walled city inside the city',
    'The gradual climb in altitude, which gets you to Cusco and Machu Picchu already acclimatized',
  ],
  criticita: [
    "Altitude remains the theme of the trip: Puno is at 3,812 meters and Cusco at 3,400, and the first moments at altitude should be taken easy even after the Colca",
    'Huayna Picchu and Montaña Machu Picchu sell out 3-4 months ahead in high season; tickets only at tuboleto.cultura.pe',
    'Two days are spent almost entirely on buses (Arequipa-Puno about 6 hours, Puno-Cusco 7-8 hours)',
    'Fake taxi drivers at airports and street money changers in Cusco: taxis only booked or via app, exchange only at a bank or authorized casa de cambio',
    "The Uros islands are a tourist staging: the real side of the lake is Amantaní, uncomfortable and cold at night",
    'The last day has two flights back to back (Cusco-Lima and the intercontinental): you need a buffer between the two',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'with friends, independently, with domestic flights, tourist buses, the train to Machu Picchu and organized tours in the Colca and on Titicaca',
    cosaCercavo: undefined,
    treEsperienzePiuBelle:
      'Machu Picchu on the first shift before the groups, the night with a family on Amantaní on Titicaca, the condors at the Cruz del Cóndor',
    cosaCambierei: "Don't underestimate the altitude, bring comfortable shoes and don't get ripped off by agencies",
    aChiLoConsiglio: 'To those going to Peru for the first time with two weeks, maybe with a few extra days for the Amazon',
  },
  tappeMappa: [
    { nome: 'Lima', destinazioneSlug: 'lima' },
    { nome: 'Arequipa and the Colca', destinazioneSlug: 'arequipa-colca' },
    { nome: 'Titicaca (Puno and Amantaní)', destinazioneSlug: 'lago-titicaca' },
    { nome: 'Cusco', destinazioneSlug: 'cusco' },
    { nome: 'Sacred Valley', destinazioneSlug: 'valle-sacra' },
    { nome: 'Machu Picchu', destinazioneSlug: 'machu-picchu' },
  ],
  giorni: [
    { titoloGiorno: 'Day 1 — Arrival in Lima', tratta: 'International arrival in Lima (Jorge Chávez) → Miraflores or Barranco, booked taxi or app', pernottamento: 'Lima, Miraflores or Barranco', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'lima', immagine: `${IMG}/giorno-01-lima.jpg`, imageAlt: "Sunset over the cliff of the Malecón in Miraflores, Lima, with the lighthouse, the skyscrapers and a paraglider flying over the ocean" },
    { titoloGiorno: 'Day 2 — Lima: historic center, Miraflores and Barranco', pernottamento: 'Lima, Miraflores or Barranco', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'lima', immagine: `${IMG}/giorno-02-lima.jpg`, imageAlt: "Panoramic view of the Plaza Mayor in Lima, with the Government Palace, the Cathedral and the yellow colonial buildings of the historic center" },
    { titoloGiorno: 'Day 3 — Flight to Arequipa, the white city', tratta: 'Lima → Arequipa, domestic flight (about 1h30), arriving at 2,300 meters', pernottamento: 'Arequipa, historic center', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'arequipa-colca', immagine: '/images/peru/arequipa-plaza-notte-riccardo.jpg', imageAlt: 'The illuminated cathedral and Plaza de Armas of Arequipa at night, seen from the drone' },
    { titoloGiorno: 'Day 4 — Toward the Colca Canyon', tratta: 'Arequipa → Colca Canyon, two-day tour or regular bus to Chivay, stop at the La Calera hot springs', pernottamento: 'Chivay or Cabanaconde, Colca Canyon', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'arequipa-colca', immagine: `${IMG}/giorno-15-arequipa-colca.jpg`, imageAlt: "View from above of the Colca Canyon near Chivay, with farming terraces and the river at the bottom of the valley wrapped in morning haze" },
    { titoloGiorno: 'Day 5 — The Cruz del Cóndor and back to Arequipa', tratta: 'Cruz del Cóndor → back to Arequipa in the afternoon', pernottamento: 'Arequipa, historic center', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'arequipa-colca', immagine: `${IMG}/giorno-16-arequipa-colca.jpg`, imageAlt: "An Andean condor in close flight, wings spread, above the Colca Canyon at the Cruz del Cóndor" },
    { titoloGiorno: 'Day 6 — From Arequipa to Puno, on Titicaca', tratta: 'Arequipa → Puno, bus (about 6h), arriving at 3,812 meters', pernottamento: 'Puno', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'lago-titicaca', immagine: '/images/peru/puno-tramonto-tetti-riccardo.jpg', imageAlt: "A fiery sunset sky over the rooftops and power poles of Puno, on the evening of arrival on Titicaca" },
    { titoloGiorno: 'Day 7 — Titicaca: the Uros and Taquile islands, night on Amantaní', tratta: 'Puno → Uros islands → Taquile → Amantaní, by boat', pernottamento: 'Amantaní, family homestay', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Two-day tour with homestay: roughly $30-60 per person', destinazioneSlug: 'lago-titicaca', immagine: '/images/peru/titicaca-uros-arazzo-riccardo.jpg', imageAlt: "A smiling Uros woman in a straw hat shows an embroidered tapestry on Lake Titicaca" },
    { titoloGiorno: 'Day 8 — Amantaní at dawn and back to Puno', tratta: 'Amantaní → Puno, by boat', pernottamento: 'Puno', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'lago-titicaca', immagine: `${IMG}/giorno-12-lago-titicaca.jpg`, imageAlt: "Aerial view from the island of Amantaní toward Lake Titicaca at sunset, with terraced fields and the Pachatata temple in the foreground" },
    { titoloGiorno: 'Day 9 — From Puno to Cusco across the altiplano', tratta: 'Puno → Cusco, tourist bus (7-8h) with stops at the La Raya pass (over 4,300 m), Raqchi and Andahuaylillas', pernottamento: 'Cusco, historic center or San Blas', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'cusco', immagine: '/images/peru/uros-canale-titicaca-riccardo.jpg', imageAlt: 'The channel between the floating totora-reed islands of the Uros, on Lake Titicaca, seen from the drone' },
    { titoloGiorno: 'Day 10 — Cusco: Qorikancha, Sacsayhuamán and San Blas', pernottamento: 'Cusco, historic center or San Blas', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Boleto Turístico del Cusco: about 130 soles, covers Sacsayhuamán, the Sacred Valley sites and several museums', destinazioneSlug: 'cusco', immagine: '/images/peru/cusco-donne-muri-inca-riccardo.jpg', imageAlt: "Two Andean women in traditional red clothing walk between the Inca walls of Cusco" },
    { titoloGiorno: 'Day 11 — Sacred Valley: Pisac, Maras and Moray', tratta: 'Cusco → Pisac → Maras salt pans → Moray → Ollantaytambo, car with driver', pernottamento: 'Ollantaytambo, Sacred Valley', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Entrance to the Maras salt pans: about 10 soles', destinazioneSlug: 'valle-sacra', immagine: '/images/peru/moray-terrazze-riccardo.jpg', imageAlt: "The circular Inca terraces of Moray seen from above, with an agave in the foreground" },
    { titoloGiorno: 'Day 12 — Ollantaytambo and the train to Aguas Calientes', tratta: 'Ollantaytambo → Aguas Calientes, PeruRail/IncaRail train', pernottamento: 'Aguas Calientes', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Train $70-500 round trip depending on class (Expedition/Voyager, Vistadome, Hiram Bingham)', destinazioneSlug: 'machu-picchu', immagine: '/images/peru/binari-urubamba-machu-picchu-riccardo.jpg', imageAlt: 'The railway tracks along the swollen Urubamba river, in the green valley leading to Machu Picchu' },
    { titoloGiorno: 'Day 13 — Machu Picchu at opening', tratta: 'Aguas Calientes → Machu Picchu (shuttle bus or on foot) → train toward Ollantaytambo and transfer to Cusco', pernottamento: 'Cusco, historic center or San Blas', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Consettur shuttle bus: about 25 minutes, $24 round trip; site entrance about 152 soles (about 200 soles with Huayna Picchu or Montaña Machu Picchu)', destinazioneSlug: 'machu-picchu', immagine: '/images/peru/machu-picchu-lama-terrazze-riccardo.jpg', imageAlt: "A lone llama grazes on the Inca terraces of Machu Picchu in the morning mist" },
    { titoloGiorno: 'Day 14 — Flight to Lima and journey home', tratta: 'Cusco → Lima, domestic flight (about 1h20) → intercontinental flight home', pernottamento: 'Return flight', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'lima', immagine: `${IMG}/giorno-31-lima.jpg`, imageAlt: "Aerial view of the new terminal area of Jorge Chávez international airport in Lima" },
  ],
  budget: [
    { etichetta: 'Intercontinental flights', valore: undefined },
    { etichetta: 'Domestic flights', valore: 'Lima-Arequipa and Cusco-Lima, cheap if booked early' },
    { etichetta: 'Tourist buses', valore: 'Arequipa-Puno (about 6h) and Puno-Cusco (7-8h, with stops)' },
    { etichetta: 'Machu Picchu', valore: 'train $70-500 round trip depending on class, shuttle bus $24 round trip, entrance about 152 soles (about 200 soles with Huayna Picchu or Montaña Machu Picchu)' },
    { etichetta: 'Boleto Turístico del Cusco', valore: 'about 130 soles; Maras salt pans separate, about 10 soles' },
    { etichetta: 'Tours and homestay on Titicaca', valore: 'roughly $30-60 per person for two days with a night on Amantaní' },
    { etichetta: 'Colca', valore: 'two-day tour or regular bus; Colca tourist ticket separate' },
    { etichetta: 'Amazon extension', valore: 'Tambopata lodge roughly $300-600 for 3 nights, all inclusive, plus the Cusco-Puerto Maldonado flight' },
  ],
}
