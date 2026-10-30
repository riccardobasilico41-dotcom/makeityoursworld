import type { TripMeta } from '@/lib/types'

// Overlay di metadati per "California road trip in 19 giorni: San Francisco, Yosemite,
// Sequoia, Death Valley, Joshua Tree, Los Angeles e Big Sur"
// (src/content/viaggi/75-california-road-trip.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del markdown. Guida non vissuta: nessun campo personale, immagini da recuperare.

export const californiaRoadTripMeta: TripMeta = {
  tripSlug: 'california-road-trip',
  paeseSlug: 'california',
  ritmo:
    'Road trip con molte ore di guida (circa 2.800-3.000 km), alternate a giornate piene a piedi nei parchi con partenze all\'alba; più tranquilli i giorni in città e sulla costa.',
  trasporti:
    'Auto a noleggio ritirata e riconsegnata a San Francisco (16 giorni); a San Francisco BART, funicolari e tram nei primi tre giorni; navette gratuite dentro Yosemite e Sequoia.',
  stile: ['road trip', 'parchi nazionali', 'trekking', 'deserto', 'costa'],
  adattoA: [
    'chi guida volentieri molte ore al giorno',
    'chi vuole vedere in un solo viaggio montagna, deserto, città e oceano',
    'coppie, amici e famiglie con ragazzi',
    'chi può pianificare prenotazioni di alloggi e attrazioni con mesi di anticipo',
  ],
  puntiForti: [
    'Tunnel View e il Mist Trail a Yosemite',
    'Il General Sherman e la Giant Forest di Sequoia',
    'L\'alba a Zabriskie Point e Badwater in Death Valley',
    'Le stelle e i massi di granito di Joshua Tree',
    'Big Sur sulla Highway 1, da McWay Falls al ponte di Bixby Creek',
  ],
  criticita: [
    'Dal 2026 supplemento di 100 $ a persona per i non residenti a Yosemite e Sequoia, oppure pass annuale per non residenti a 250 $',
    'Alloggi nei parchi esauriti con mesi di anticipo; prezzi alti ovunque, con tasse e mance del 25-30 % in più',
    'Tioga Road e strade di montagna chiuse d\'inverno; Highway 1 a Big Sur soggetta a chiusure per frane',
    'Death Valley pericolosa da maggio a settembre per il caldo; incendi da luglio a ottobre',
    'Furti dalle auto frequenti a San Francisco e Los Angeles',
  ],
  budgetTotale: 'indicativamente 3.200-5.400 € a persona in due, voli internazionali esclusi',
  viaggioInBreve: {
    treEsperienzePiuBelle:
      'Tunnel View all\'arrivo nella Yosemite Valley, l\'alba a Zabriskie Point, la Highway 1 tra McWay Falls e Bixby Creek',
  },
  tappeMappa: [
    { nome: 'San Francisco', destinazioneSlug: 'san-francisco' },
    { nome: 'Yosemite', destinazioneSlug: 'yosemite' },
    { nome: 'Sequoia e Kings Canyon', destinazioneSlug: 'sequoia' },
    { nome: 'Death Valley', destinazioneSlug: 'death-valley' },
    { nome: 'Joshua Tree e Palm Springs', destinazioneSlug: 'joshua-tree' },
    { nome: 'Los Angeles', destinazioneSlug: 'los-angeles' },
    { nome: 'Santa Barbara, Big Sur e Monterey', destinazioneSlug: 'big-sur' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a San Francisco', tratta: 'SFO → centro, BART in 30 minuti', pernottamento: 'San Francisco, Union Square o North Beach', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'ESTA 40,62 $, BART 10-12 $', destinazioneSlug: 'san-francisco', immagine: '/images/viaggi/california-road-trip/giorno-01-san-francisco.jpg', imageAlt: 'Il Golden Gate Bridge al tramonto con il cielo viola sopra la baia di San Francisco' },
    { titoloGiorno: 'Giorno 2 — San Francisco: il Golden Gate, il Presidio e Alcatraz', pernottamento: 'San Francisco', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Alcatraz circa 48 $, bicicletta 30-50 $', destinazioneSlug: 'san-francisco', immagine: '/images/viaggi/california-road-trip/giorno-02-san-francisco.jpg', imageAlt: 'Il Golden Gate Bridge visto da Fort Point, sotto la campata sud' },
    { titoloGiorno: 'Giorno 3 — San Francisco: i quartieri e Muir Woods', pernottamento: 'San Francisco', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Muir Woods 15 $ a persona più prenotazione, funicolare 9 $', destinazioneSlug: 'san-francisco', immagine: '/images/viaggi/california-road-trip/giorno-03-san-francisco.jpg', imageAlt: 'Le sequoie costiere e le felci del sottobosco a Muir Woods' },
    { titoloGiorno: 'Giorno 4 — Da San Francisco a Yosemite', tratta: 'San Francisco → Yosemite Valley, 3,5-4 ore', pernottamento: 'Yosemite Valley o fuori parco (Mariposa, El Portal, Groveland)', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'pass annuale per non residenti 250 $', destinazioneSlug: 'yosemite', immagine: '/images/viaggi/california-road-trip/giorno-04-yosemite.jpg', imageAlt: 'La Yosemite Valley con El Capitan e le pareti di granito' },
    { titoloGiorno: 'Giorno 5 — Yosemite Valley: il Mist Trail e le cascate', pernottamento: 'Yosemite Valley o fuori parco', statoPernottamento: 'consigliato', intensita: 'intenso', destinazioneSlug: 'yosemite', immagine: '/images/viaggi/california-road-trip/giorno-05-yosemite.jpg', imageAlt: 'La Vernal Fall e la scalinata del Mist Trail nella nebbia d\'acqua, Yosemite' },
    { titoloGiorno: 'Giorno 6 — Yosemite: Glacier Point e Mariposa Grove', tratta: 'Yosemite Valley → Glacier Point → Mariposa Grove → Oakhurst', pernottamento: 'Oakhurst o Fish Camp', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'yosemite', immagine: '/images/viaggi/california-road-trip/giorno-06-yosemite.jpg', imageAlt: 'L\'Half Dome visto da Glacier Point tra le nuvole basse, Yosemite' },
    { titoloGiorno: 'Giorno 7 — Da Yosemite a Sequoia', tratta: 'Oakhurst → Fresno → Kings Canyon, circa 2,5-3 ore', pernottamento: 'Wuksachi Lodge o lodge del Kings Canyon', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'sequoia', immagine: '/images/viaggi/california-road-trip/giorno-07-sequoia.jpg', imageAlt: 'Tronchi rossi di sequoie giganti nel Sequoia National Park' },
    { titoloGiorno: 'Giorno 8 — Sequoia: il General Sherman e Moro Rock', tratta: 'Giant Forest → Generals Highway → Three Rivers', pernottamento: 'Three Rivers', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'sequoia', immagine: '/images/viaggi/california-road-trip/giorno-08-sequoia.jpg', imageAlt: 'Il monolite di granito di Moro Rock sopra le foreste del Sequoia National Park' },
    { titoloGiorno: 'Giorno 9 — Verso la Death Valley', tratta: 'Three Rivers → Lake Isabella → Ridgecrest → Stovepipe Wells, 5-6 ore', pernottamento: 'Stovepipe Wells o Furnace Creek', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'ingresso 30 $ per auto, coperto dal pass', destinazioneSlug: 'death-valley', immagine: '/images/viaggi/california-road-trip/giorno-09-death-valley.jpg', imageAlt: 'Le Mesquite Flat Sand Dunes con le Cottonwood Mountains sullo sfondo, Death Valley' },
    { titoloGiorno: 'Giorno 10 — Death Valley: Badwater, Artists Drive e Zabriskie Point', pernottamento: 'Stovepipe Wells o Furnace Creek', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'death-valley', immagine: '/images/viaggi/california-road-trip/giorno-10-death-valley.jpg', imageAlt: 'Il Telescope Peak innevato riflesso in una pozza d\'acqua sul sale di Badwater Basin' },
    { titoloGiorno: 'Giorno 11 — Dalla Death Valley a Joshua Tree', tratta: 'Furnace Creek → Baker → Route 66 (Amboy) → Twentynine Palms, 4,5-5 ore', pernottamento: 'Twentynine Palms o Joshua Tree', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'joshua-tree', immagine: '/images/viaggi/california-road-trip/giorno-11-joshua-tree.jpg', imageAlt: 'Il deserto di Joshua Tree al tramonto con rocce e cespugli' },
    { titoloGiorno: 'Giorno 12 — Joshua Tree', pernottamento: 'Twentynine Palms o Joshua Tree', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'ingresso 30 $ per auto, coperto dal pass', destinazioneSlug: 'joshua-tree', immagine: '/images/viaggi/california-road-trip/giorno-12-joshua-tree.jpg', imageAlt: 'Un albero di Giosuè e i massi di granito nel Joshua Tree National Park' },
    { titoloGiorno: 'Giorno 13 — Palm Springs e l\'arrivo a Los Angeles', tratta: 'Joshua Tree → Palm Springs → Los Angeles, 2,5-3 ore', pernottamento: 'Los Angeles, Santa Monica o West Hollywood', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'funivia 35-40 $, parcheggio hotel 35-60 $', destinazioneSlug: 'los-angeles', immagine: '/images/viaggi/california-road-trip/giorno-13-los-angeles.jpg', imageAlt: 'Il centro di Palm Springs con le palme ai piedi delle montagne del deserto' },
    { titoloGiorno: 'Giorno 14 — Los Angeles: il Getty, Hollywood e il Griffith Observatory', pernottamento: 'Los Angeles', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Getty gratuito con parcheggio 25 $, tour Warner Bros. 70-80 $', destinazioneSlug: 'los-angeles', immagine: '/images/viaggi/california-road-trip/giorno-14-los-angeles.jpg', imageAlt: 'Il Griffith Observatory sulla collina con i grattacieli di Downtown Los Angeles sullo sfondo' },
    { titoloGiorno: 'Giorno 15 — Los Angeles: Santa Monica, Venice e Malibu', pernottamento: 'Los Angeles', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'los-angeles', immagine: '/images/viaggi/california-road-trip/giorno-15-los-angeles.jpg', imageAlt: 'Il molo di Santa Monica con la ruota panoramica e le montagne russe sopra la spiaggia' },
    { titoloGiorno: 'Giorno 16 — Santa Barbara e la costa fino a Cambria', tratta: 'Los Angeles → Santa Barbara → San Simeon → Cambria, circa 4-4,5 ore', pernottamento: 'Cambria o San Simeon', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Hearst Castle 35 $', destinazioneSlug: 'big-sur', immagine: '/images/viaggi/california-road-trip/giorno-16-big-sur.jpg', imageAlt: 'La West Beach di Santa Barbara con le palme del lungomare' },
    { titoloGiorno: 'Giorno 17 — Big Sur sulla Highway 1', tratta: 'Cambria → Big Sur → Carmel, circa 150 km in 6-7 ore con soste', pernottamento: 'Monterey o Carmel', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Point Lobos 10 $ per auto', destinazioneSlug: 'big-sur', immagine: '/images/viaggi/california-road-trip/giorno-17-big-sur.jpg', imageAlt: 'La cala di sabbia e l\'acqua turchese di McWay Falls lungo la costa di Big Sur' },
    { titoloGiorno: 'Giorno 18 — Monterey, Carmel e il rientro a San Francisco', tratta: 'Monterey → 17-Mile Drive → San Francisco, circa 2-2,5 ore', pernottamento: 'San Francisco, vicino a SFO', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'acquario intorno ai 65 $, 17-Mile Drive 12,50 $', destinazioneSlug: 'big-sur', immagine: '/images/viaggi/california-road-trip/giorno-18-big-sur.jpg', imageAlt: 'La costa della baia di Monterey con il mare calmo e i fiori sulla riva' },
    { titoloGiorno: 'Giorno 19 — Partenza da San Francisco', tratta: 'SFO → Italia', intensita: 'leggero', destinazioneSlug: 'san-francisco', immagine: '/images/viaggi/california-road-trip/giorno-19-san-francisco.jpg', imageAlt: 'Le Painted Ladies di Alamo Square con lo skyline di San Francisco alle spalle' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: undefined },
    { etichetta: 'ESTA', valore: '40,62 $ a persona' },
    { etichetta: 'Auto a noleggio, 16 giorni con assicurazione completa', valore: '450-750 $ a testa in due' },
    { etichetta: 'Carburante, circa 2.900 km', valore: '200-280 $ a testa in due' },
    { etichetta: 'Pass annuale per non residenti', valore: '250 $ per l\'auto' },
    { etichetta: 'Alloggi', valore: '160-300 $ a notte a camera' },
    { etichetta: 'Pasti, con tasse e mance', valore: '60-100 $ al giorno a persona' },
    { etichetta: 'Attrazioni', valore: '200-350 $ a persona' },
  ],
}
