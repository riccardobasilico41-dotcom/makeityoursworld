import type { Destinazione } from '@/lib/types'

const IMG = '/images/viaggi/londra-cotswolds'

export const destinazioniInghilterra: Destinazione[] = [
  {
    slug: 'londra',
    paeseSlug: 'inghilterra',
    ordine: 1,
    nome: 'London',
    tipologia: ['città', 'musei', 'cultura'],
    giorniConsigliati: '4 days',
    visitataPersonalmente: true,
    introduzione:
      'The capital of the United Kingdom, on the Thames. Westminster and Buckingham Palace, the Tower and Tower Bridge, the free national museums, the royal parks and neighbourhoods that are very different from one another, from Covent Garden to Notting Hill.',
    percheAndarci:
      "For the museums, among the richest in the world and mostly free, and for a city that's easy to explore on foot along the river. It's also the natural gateway to the English countryside.",
    cosaVedere: [
      'Westminster, Big Ben and the Abbey',
      'The British Museum',
      'The Tower of London and Tower Bridge',
      'The South Bank and Tate Modern',
      'The South Kensington museums',
      'Notting Hill and Portobello Road',
      'Hyde Park and Kensington Gardens',
    ],
    cosaFare: [
      'Walking along the Thames from Westminster to Tower Bridge',
      'A morning at the British Museum',
      'The Portobello Road market on Saturday',
      'An evening at the theatre in the West End',
    ],
    comeArrivare:
      'Direct flights from Italy to Heathrow, Gatwick, Stansted, Luton and London City. From Heathrow you reach the centre by Tube or on the Elizabeth line.',
    comeSpostarsi:
      "Tube and buses, paying with a contactless card or an Oyster card: you always use the same card, and spending has a daily cap. In the centre many distances can be covered on foot. You don't need a car: in the central zone you pay the Congestion Charge, £18 a day (2026).",
    periodoMigliore: 'all year; from May to September the days are longer',
    costi: 'Sleeping is expensive. The great national museums are free; the Tower of London and private attractions charge admission.',
    erroriDaEvitare: [
      'Renting a car in London: between traffic, the Congestion Charge and parking, it is better to pick it up only for the Cotswolds',
      'Buying single Tube tickets: with a contactless card you pay less',
      'Cramming too much into one day: distances between neighbourhoods are large',
    ],
    // GUIDA-START
    luoghi: [
      {
        nome: 'Westminster',
        testo:
          "The Palace of Westminster, seat of Parliament, with the clock tower everyone calls Big Ben, and opposite it Westminster Abbey, where monarchs are crowned. A few minutes away are Downing Street, Whitehall and St James's Park, which leads to Buckingham Palace.",
        come: 'Tube to Westminster. Westminster Bridge is the spot with the best view of Parliament.',
        quando: 'At sunset, from the bridge or the south bank.',
        tempo: 'half a day',
      },
      {
        nome: 'British Museum',
        testo:
          'One of the largest museums in the world, with the Rosetta Stone, the Parthenon marbles and the Egyptian collections. The Great Court, the courtyard under the glass roof, is worth the visit on its own, and entry is free.',
        come: 'Tube to Tottenham Court Road or Holborn. It is better to choose a few rooms instead of seeing everything.',
        quando: 'At opening time, before the groups.',
        tempo: '3 hours',
        url: 'https://www.britishmuseum.org',
      },
      {
        nome: 'The Tower of London and Tower Bridge',
        testo:
          'The fortress on the Thames, founded by William the Conqueror, where the Crown Jewels are kept. Next to it is Tower Bridge, the bridge with two towers, which you can cross on foot.',
        come: 'Tube to Tower Hill. The Tower charges admission: tickets are sold on the Historic Royal Palaces website.',
        quando: 'Early morning for the Crown Jewels, which have the longest queue.',
        tempo: 'half a day',
        url: 'https://www.hrp.org.uk/tower-of-london/',
      },
      {
        nome: 'South Bank and Tate Modern',
        testo:
          "The south bank of the Thames, pedestrian from Westminster to Tower Bridge. You pass the London Eye, the Millennium Bridge with its view of St Paul's and Tate Modern, the modern art museum in an old power station. A little further on is Borough Market.",
        come: 'On foot along the river.',
        quando: 'In the afternoon, until sunset.',
        tempo: 'half a day',
      },
      {
        nome: 'South Kensington',
        testo:
          'The museum district: the Natural History Museum, with its free galleries, the Victoria and Albert Museum and the Science Museum, one next to the other. From here you enter Hyde Park and Kensington Gardens.',
        come: 'Tube to South Kensington. At the Natural History Museum you can book the free ticket online, useful at weekends and in school holidays.',
        quando: 'On a rainy day.',
        tempo: 'half a day',
        url: 'https://www.nhm.ac.uk/visit.html',
      },
      {
        nome: 'Notting Hill',
        testo: 'The pastel-coloured houses, the mews, old stables turned into homes, and the Portobello Road market, with antiques and street food.',
        come: 'Tube to Notting Hill Gate.',
        quando: 'On Saturday, when the market is in full swing.',
        tempo: '2-3 hours',
        consiglio: 'Many houses are lived in: take photos from the street, without climbing the steps.',
      },
    ],
    programmi: [
      { titolo: '2 days', tappe: ["Day 1: Westminster, St James's Park and Buckingham Palace, then the South Bank", 'Day 2: British Museum, Covent Garden, the Tower and Tower Bridge'] },
      {
        titolo: '4 days',
        tappe: [
          'Day 1: Westminster and the river',
          'Day 2: British Museum, Covent Garden and the West End',
          'Day 3: the Tower, Tower Bridge, Borough Market and Tate Modern',
          'Day 4: Notting Hill, Hyde Park and South Kensington',
        ],
      },
    ],
    zone: [
      { nome: 'South Bank and Southwark', perChi: 'anyone who wants everything on foot', testo: 'On the south bank, close to the river, Borough Market and Westminster.' },
      { nome: 'Bloomsbury', perChi: 'anyone who wants the centre at slightly lower prices', testo: "Close to the British Museum and the King's Cross and Euston stations." },
      { nome: 'Paddington', perChi: 'anyone continuing to Oxford, the Cotswolds or Bath', testo: 'Trains to the west leave from here, and there is the Elizabeth line to Heathrow.' },
    ],
    sapori: [
      { nome: 'Sunday roast', testo: 'The Sunday roast in pubs, with potatoes, vegetables and Yorkshire pudding.' },
      { nome: 'Fish and chips', testo: 'Fish fried in batter with chips, the most classic takeaway dish.' },
      { nome: 'Afternoon tea', testo: 'Tea with scones, cream and jam and small sandwiches, in the afternoon.' },
    ],
    attenzioni: [
      'On Tube escalators you stand on the right: the left is for people walking.',
      'Pickpockets in the most crowded areas, from Oxford Street to the markets.',
      'When crossing the road, look right first: traffic comes from the opposite side compared with Italy.',
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['londra-cotswolds'],
    imageAlt: 'Big Ben and the Palace of Westminster at dusk, with light trails from the traffic on the bridge, London',
    immagine: `${IMG}/giorno-01-westminster.webp`,
  },
  {
    slug: 'cotswolds',
    paeseSlug: 'inghilterra',
    ordine: 2,
    nome: 'Cotswolds',
    tipologia: ['campagna', 'borghi', 'natura'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    introduzione:
      "An area of hills and honey-coloured limestone villages, almost 800 square miles spread across five counties: Gloucestershire, Oxfordshire, Warwickshire, Wiltshire and Worcestershire. It's a protected area, the Cotswolds National Landscape.",
    percheAndarci:
      'For the picture-postcard English countryside: dry-stone walls, cottages with stone roofs, village pubs and footpaths through the fields, less than two hours from London.',
    cosaVedere: [
      'Bibury and Arlington Row',
      'Bourton-on-the-Water',
      'Lower Slaughter and Upper Slaughter',
      'Stow-on-the-Wold',
      'Chipping Campden',
      'Broadway',
      'Castle Combe',
    ],
    cosaFare: ['A tour of the villages by car', 'A walk between Lower and Upper Slaughter', 'Lunch in a country pub'],
    comeArrivare:
      'By train from London Paddington on the line through Oxford, Charlbury and Kingham to Moreton-in-Marsh, in about an hour and a half to Moreton (approximate time). Or by car, picking it up in Oxford.',
    comeSpostarsi:
      'Everything is easier by car: the villages are close together but buses are few. Country roads are narrow, with high hedges, and you drive on the left.',
    periodoMigliore: 'May to September; in spring and autumn there are fewer groups',
    erroriDaEvitare: [
      'Reaching Bibury and Bourton-on-the-Water in the middle of the day, when the coaches arrive',
      'Trying to see every village in one day: two or three a day, with a walk, are more rewarding',
    ],
    // GUIDA-START
    luoghi: [
      {
        nome: 'Bibury and Arlington Row',
        testo: "A row of stone cottages built in 1380 as a monastic wool store and turned into weavers' homes in the late 17th century. It's one of the best-known images of the Cotswolds.",
        come: 'By car, with limited parking in the village.',
        quando: 'Early in the morning or late in the afternoon.',
        tempo: '1 hour',
      },
      {
        nome: 'Bourton-on-the-Water',
        testo: 'The village with the shallow, wide River Windrush, crossed by small stone bridges. It is the busiest in the area.',
        come: 'By car, with paid car parks on the edges of the centre.',
        quando: 'Early morning or on a weekday.',
        tempo: '1-2 hours',
      },
      {
        nome: 'Lower Slaughter and Upper Slaughter',
        testo: 'Two tiny villages along a stream, linked by a footpath through the meadows. They are the opposite of Bourton: quiet.',
        come: 'On foot from one village to the other, there and back.',
        quando: 'Morning or late afternoon.',
        tempo: '1-2 hours with the walk',
      },
      {
        nome: 'Stow-on-the-Wold',
        testo: "A market town on top of a hill, with its square, antique shops and St Edward's church, whose door between two yew trees many people link to Tolkien's world.",
        come: 'By car or on foot from the Slaughters.',
        tempo: '1-2 hours',
      },
      {
        nome: 'Chipping Campden and Broadway',
        testo: 'The northern Cotswolds. Chipping Campden has a high street of stone houses, with the old covered market. Broadway is bigger, with the tower on top of the hill.',
        come: 'By car, north of Stow.',
        tempo: 'half a day',
      },
      {
        nome: 'Castle Combe',
        testo: 'A village in Wiltshire, at the southern tip of the Cotswolds, with stone houses around the old market cross and the bridge over the stream. It lies on the road to Bath.',
        come: 'By car, leaving it in the car park above the village and walking down.',
        quando: 'In the morning.',
        tempo: '1 hour',
      },
    ],
    programmi: [
      { titolo: '1 day', tappe: ['Bibury early in the morning', 'Bourton-on-the-Water', 'Walk between Lower and Upper Slaughter', 'Stow-on-the-Wold'] },
      { titolo: '2 days', tappe: ['Day 1: as above', 'Day 2: Chipping Campden and Broadway, or Castle Combe on the way to Bath'] },
    ],
    zone: [
      { nome: 'Stow-on-the-Wold and surroundings', perChi: 'anyone touring by car', testo: 'In the middle of the area, a few minutes from Bourton, the Slaughters and Moreton-in-Marsh.' },
      { nome: 'Moreton-in-Marsh', perChi: 'anyone arriving by train', testo: 'It has the station on the London line and a few buses to nearby villages.' },
    ],
    sapori: [
      { nome: 'Cream tea', testo: 'Tea with scones, cream and jam, in the village tea rooms.' },
      { nome: 'Village pub', testo: 'Lunch with seasonal dishes and local beers, often in stone buildings a few centuries old.' },
    ],
    attenzioni: [
      'Narrow country roads, with high hedges and poor visibility: drive on the left and slowly.',
      'At Arlington Row take photos from the street, without going into the gardens.',
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['londra-cotswolds'],
    imageAlt: 'The honey-coloured stone cottages of Bibury, in the Cotswolds',
    immagine: `${IMG}/giorno-06-bibury.webp`,
  },
  {
    slug: 'oxford',
    paeseSlug: 'inghilterra',
    ordine: 3,
    nome: 'Oxford',
    tipologia: ['città', 'cultura', 'università'],
    giorniConsigliati: '1 day',
    visitataPersonalmente: true,
    introduzione:
      'The oldest university city in the English-speaking world, with its pale stone colleges, libraries and quadrangles. It lies between London and the Cotswolds, on the same railway line.',
    percheAndarci: "For the colleges, the Radcliffe Camera and the Bodleian, in a day on foot. It's also the most convenient place to pick up the car for the Cotswolds.",
    cosaVedere: ['Radcliffe Square and the Radcliffe Camera', 'The Bodleian Library', 'Christ Church College', 'The Bridge of Sighs', 'The Ashmolean Museum'],
    cosaFare: ['A tour of the colleges open to the public', 'Climbing a tower to see the rooftops', 'A walk along the river'],
    comeArrivare: 'By train from London Paddington.',
    comeSpostarsi: 'On foot: the centre is small.',
    erroriDaEvitare: ['Arriving without checking college opening hours: many open only at certain times or close for exams and events'],
    esperienzeSlugs: [],
    tripSlugs: ['londra-cotswolds'],
    imageAlt: 'The Radcliffe Camera, the round domed library, in Radcliffe Square in Oxford',
    immagine: `${IMG}/giorno-05-oxford.webp`,
  },
  {
    slug: 'bath',
    paeseSlug: 'inghilterra',
    ordine: 4,
    nome: 'Bath',
    tipologia: ['città', 'storia', 'terme'],
    giorniConsigliati: '1 day',
    visitataPersonalmente: true,
    introduzione:
      "A city of golden stone built around hot springs, with the Roman baths, the abbey and 18th-century Georgian buildings. It's a UNESCO World Heritage Site.",
    percheAndarci: 'For the Roman baths, the Georgian crescents and the natural end of a trip through the Cotswolds, before returning to London by train.',
    cosaVedere: ['The Roman Baths', 'Bath Abbey', 'The Royal Crescent and the Circus', 'Pulteney Bridge'],
    cosaFare: ['Visiting the Roman baths early in the morning', 'Walking from the Circus to the Royal Crescent', "A swim in the city's modern spa"],
    comeArrivare: 'By train from London Paddington, or by car from the Cotswolds via Castle Combe.',
    comeSpostarsi: 'On foot.',
    erroriDaEvitare: ['Arriving at the Roman Baths in the middle of the day without a ticket: it is better to book it online on the official website'],
    esperienzeSlugs: [],
    tripSlugs: ['londra-cotswolds'],
    imageAlt: 'The terrace of the Roman Baths in Bath with the statues of the emperors, and the abbey tower behind',
    immagine: `${IMG}/giorno-08-bath.webp`,
  },
]
