import type { TripMeta } from '@/lib/types'

const IMG = '/images/viaggi/brighton-seven-sisters'

export const brightonSevenSistersMeta: TripMeta = {
  tripSlug: 'brighton-seven-sisters',
  paeseSlug: 'inghilterra',
  provenienza: 'journey',
  mesiConsigliati: [5, 6, 7, 9],
  ritmo:
    'The first day is a long walk along the Thames and through Richmond Park, with the train from London. The second is easy, on foot around Brighton. The third is a clifftop walk of about 6 km, up and down the hills, with the bus there and back.',
  trasporti:
    'Train from London Waterloo to Kingston and from Richmond back to Waterloo on the first day. Then the train from London Victoria or London Bridge to Brighton, or from Gatwick. The 12 and 12X buses from Brighton to Seven Sisters Country Park, a bus from East Dean or Birling Gap for the return, and the train to London.',
  stile: ['mare', 'città', 'natura', 'trekking', 'parchi'],
  adattoA: [
    'anyone in London who wants a day or a weekend by the sea',
    'walkers looking for a clifftop view',
    'anyone who wants a party night at the weekend, or the opposite, a quiet Sunday',
    'anyone flying into Gatwick',
    'anyone who wants to see free-roaming deer a stone\'s throw from London',
  ],
  puntiForti: [
    'The white cliffs of the Seven Sisters, dropping sheer into the Channel',
    'The Royal Pavilion, George IV\'s Indian-style palace',
    'The Lanes and North Laine, walking distance from the station',
    'All by train and bus, an hour from London',
    'Richmond Park with its deer and the protected view from Richmond Hill',
  ],
  criticita: [
    'In rain or strong wind the Seven Sisters lose a lot',
    'On Friday and Saturday nights Brighton is full of stag and hen parties',
    'The cliffs collapse: keep well back from the edge',
    'There are no facilities between Exceat and Birling Gap',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: 'Kingston upon Thames is where I studied, and it has a beautiful park; a little further on there\'s Richmond Park.',
    conChiSonoPartito: undefined,
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio:
      'To anyone in London with one to three free days: the Thames and Richmond Park, then Brighton for the city and the Seven Sisters for nature, if the weather is good',
  },
  tappeMappa: [
    { nome: 'Kingston and Richmond Park', destinazioneSlug: 'kingston-richmond-park' },
    { nome: 'Brighton', destinazioneSlug: 'brighton' },
    { nome: 'Seven Sisters', destinazioneSlug: 'seven-sisters' },
  ],
  giorni: [
    {
      titoloGiorno: 'Day 1 — The Thames south-west of London: Kingston, Richmond Park and Richmond Hill',
      tratta: 'London Waterloo → Kingston by train → Richmond Park on foot → Richmond Hill → Richmond → Waterloo by train',
      pernottamento: 'London',
      statoPernottamento: 'consigliato',
      intensita: 'medio',
      costiNoti: 'Richmond Park free',
      destinazioneSlug: 'kingston-richmond-park',
      immagine: `${IMG}/giorno-01-richmond-park.jpg`,
      imageAlt: 'A red deer in the long grass of Richmond Park, south-west London',
    },
    {
      titoloGiorno: 'Day 2 — From London to Brighton: the Pier, the Royal Pavilion and the Lanes',
      tratta: 'London Victoria or London Bridge → Brighton by train → North Laine → Royal Pavilion → the Lanes → Palace Pier on foot',
      pernottamento: 'Brighton, centre or Kemp Town',
      statoPernottamento: 'consigliato',
      intensita: 'leggero',
      costiNoti: 'Royal Pavilion £21.50; Palace Pier free',
      destinazioneSlug: 'brighton',
      immagine: `${IMG}/giorno-02-royal-pavilion.jpg`,
      imageAlt: "The India Gate and the domes of Brighton's Royal Pavilion",
    },
    {
      titoloGiorno: 'Day 3 — The Seven Sisters: from Cuckmere Haven to Birling Gap',
      tratta: 'Brighton → Seven Sisters Country Park by bus → Cuckmere Haven → the cliffs → Birling Gap on foot → bus and train to London',
      intensita: 'medio',
      costiNoti: 'Path free; car parks paid',
      destinazioneSlug: 'seven-sisters',
      immagine: `${IMG}/giorno-03-seven-sisters.jpg`,
      imageAlt: 'The white cliffs of the Seven Sisters seen from the shingle beach at Cuckmere Haven',
    },
  ],
  budget: [
    { etichetta: 'ETA for the United Kingdom', valore: '£20 per person (2026)' },
    { etichetta: 'Richmond Park and Kingston', valore: 'free' },
    { etichetta: 'Royal Pavilion', valore: '£21.50, 5% less online (2026)' },
    { etichetta: 'Brighton i360', valore: 'from about £18.50 online (2026)' },
    { etichetta: 'Seven Sisters car parks', valore: '£3.50 to £7 at Exceat, £2 to £8 at Birling Gap (2026)' },
    { etichetta: 'Train from London, accommodation and meals' },
  ],
}
