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
      'Direct flights from Italy to Heathrow, Gatwick, Stansted, Luton and London City. From Heathrow you reach the centre by Tube or on the Elizabeth line. From Heathrow the Piccadilly line costs about £5.90 by contactless and takes 50-60 minutes, the Elizabeth line about £15.50 in 30-40 minutes, the Heathrow Express about £25 in 15-20 minutes to Paddington; a black cab costs about £70-110. Gatwick, Stansted and Luton have direct trains to the centre. Entering the UK requires a UK ETA, £20 (2026).',
    comeSpostarsi:
      "Tube and buses, paying with a contactless card or an Oyster card: you always use the same card, and spending has a daily cap. In the centre many distances can be covered on foot. You don't need a car: in the central zone you pay the Congestion Charge, £18 a day (2026).",
    periodoMigliore: 'all year; from May to September the days are longer',
    costi:
      'Sleeping is expensive. The great national museums are free; the Tower of London and private attractions charge admission. Rough daily budget per person, sharing a double: low €100-130, mid €200-280, high over €400.',
    erroriDaEvitare: [
      'Renting a car in London: between traffic, the Congestion Charge and parking, it is better to pick it up only for the Cotswolds',
      'Buying single Tube tickets: with a contactless card you pay less',
      'Cramming too much into one day: distances between neighbourhoods are large',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Westminster",
        "testo": "The Palace of Westminster, seat of Parliament, with the clock tower everyone calls Big Ben, and opposite it Westminster Abbey, where monarchs are crowned. A few minutes away are Downing Street, Whitehall and St James's Park, which leads to Buckingham Palace.",
        "come": "Tube to Westminster. Westminster Bridge is the spot with the best view of Parliament.",
        "quando": "At sunset, from the bridge or the south bank.",
        "tempo": "half a day",
        "costo": "Abbey about £32 (2026); outside free",
        "orari": "Abbey open to visitors Monday to Saturday; Sundays for services only.",
        "lat": 51.4995,
        "lng": -0.1248,
        "url": "https://www.westminster-abbey.org/"
      },
      {
        "nome": "British Museum",
        "testo": "One of the largest museums in the world, with the Rosetta Stone, the Parthenon marbles and the Egyptian collections. The Great Court, the courtyard under the glass roof, is worth the visit on its own, and entry is free.",
        "come": "Tube to Tottenham Court Road or Holborn. It is better to choose a few rooms instead of seeing everything.",
        "quando": "At opening time, before the groups.",
        "tempo": "3 hours",
        "costo": "free; temporary exhibitions ticketed",
        "orari": "Daily 10-17, Fridays until 20:30.",
        "lat": 51.5194,
        "lng": -0.127,
        "url": "https://www.britishmuseum.org"
      },
      {
        "nome": "The Tower of London and Tower Bridge",
        "testo": "The fortress on the Thames, founded by William the Conqueror, where the Crown Jewels are kept. Next to it is Tower Bridge, the bridge with two towers, which you can cross on foot.",
        "come": "Tube to Tower Hill. The Tower charges admission: tickets are sold on the Historic Royal Palaces website.",
        "quando": "Early morning for the Crown Jewels, which have the longest queue.",
        "tempo": "half a day",
        "costo": "Tower about £38 (2026); walking across Tower Bridge is free",
        "orari": "From 9, Sundays and Mondays from 10; closes late afternoon, earlier in winter.",
        "lat": 51.5081,
        "lng": -0.0759,
        "url": "https://www.hrp.org.uk/tower-of-london/"
      },
      {
        "nome": "South Bank and Tate Modern",
        "testo": "The south bank of the Thames, pedestrian from Westminster to Tower Bridge. You pass the London Eye, the Millennium Bridge with its view of St Paul's and Tate Modern, the modern art museum in an old power station. A little further on is Borough Market.",
        "come": "On foot along the river.",
        "quando": "In the afternoon, until sunset.",
        "tempo": "half a day",
        "costo": "Tate Modern free (collection); London Eye from about £29 online",
        "orari": "Tate Modern daily 10-18.",
        "lat": 51.5076,
        "lng": -0.0994,
        "url": "https://www.tate.org.uk/visit/tate-modern"
      },
      {
        "nome": "South Kensington",
        "testo": "The museum district: the Natural History Museum, with its free galleries, the Victoria and Albert Museum and the Science Museum, one next to the other. From here you enter Hyde Park and Kensington Gardens.",
        "come": "Tube to South Kensington. At the Natural History Museum you can book the free ticket online, useful at weekends and in school holidays.",
        "quando": "On a rainy day.",
        "tempo": "half a day",
        "costo": "free; exhibitions ticketed",
        "orari": "Natural History Museum daily 10-17:50.",
        "lat": 51.4967,
        "lng": -0.1764,
        "url": "https://www.nhm.ac.uk/visit.html"
      },
      {
        "nome": "Notting Hill",
        "testo": "The pastel-coloured houses, the mews, old stables turned into homes, and the Portobello Road market, with antiques and street food.",
        "come": "Tube to Notting Hill Gate.",
        "quando": "On Saturday, when the market is in full swing.",
        "tempo": "2-3 hours",
        "costo": "free",
        "orari": "Portobello Road in full swing on Saturdays, with the antiques; other days just fruit, veg and a few stalls.",
        "lat": 51.5155,
        "lng": -0.205,
        "consiglio": "Many houses are lived in: take photos from the street, without climbing the steps."
      },
      {
        "nome": "National Gallery and Trafalgar Square",
        "testo": "One of Europe's great picture galleries, free, with Van Gogh's Sunflowers, Velázquez's Rokeby Venus, Leonardo, Turner and Constable. In front is Trafalgar Square, with Nelson's Column and the lions.",
        "come": "Tube to Charing Cross or Leicester Square. Free entry; free booking advised at weekends.",
        "quando": "Friday evening, when it opens late.",
        "tempo": "2 hours",
        "costo": "free",
        "orari": "Daily 10-18, Fridays until 21.",
        "lat": 51.5089,
        "lng": -0.1283,
        "url": "https://www.nationalgallery.org.uk/"
      },
      {
        "nome": "St Paul's Cathedral",
        "testo": "Christopher Wren's Baroque cathedral, rebuilt after the Great Fire of 1666, with one of the largest domes in the world. You climb to the Whispering Gallery and the outer galleries for views over the City.",
        "come": "Tube to St Paul's; from Tate Modern walk across the Millennium Bridge. Tickets are cheaper online.",
        "quando": "At opening to climb with fewer people; at 17:00 Evensong you can attend the sung service for free.",
        "tempo": "1.5-2 hours",
        "costo": "about £27 (2026); free for services",
        "orari": "Sightseeing Monday to Saturday, morning to late afternoon; Sundays for services only.",
        "lat": 51.5138,
        "lng": -0.0984,
        "url": "https://www.stpauls.co.uk/"
      },
      {
        "nome": "Buckingham Palace and St James's Park",
        "testo": "The monarch's official residence, with the Changing of the Guard at its gates. You approach along the Mall or through St James's Park, the prettiest royal park, with pelicans on the lake.",
        "come": "Tube to Green Park or St James's Park. The State Rooms open only in summer, with a paid ticket.",
        "quando": "The Changing of the Guard is at 11:00 on certain days of the week, almost daily in summer: check the calendar and arrive half an hour early.",
        "tempo": "1-2 hours",
        "costo": "exterior and park free; State Rooms ticketed in summer",
        "lat": 51.5014,
        "lng": -0.1419,
        "url": "https://www.rct.uk/visit/buckingham-palace"
      },
      {
        "nome": "Covent Garden and Soho",
        "testo": "The old fruit-and-veg market with street performers under the arcades, and next door Soho, with its bars, Chinatown and the West End theatres. The heart of London's evenings.",
        "come": "Tube to Covent Garden, Leicester Square or Tottenham Court Road; all on foot.",
        "quando": "From late afternoon, before a show.",
        "tempo": "2-3 hours",
        "costo": "free; last-minute musical tickets at the TKTS booth in Leicester Square",
        "lat": 51.5117,
        "lng": -0.124
      },
      {
        "nome": "Borough Market",
        "testo": "London's oldest food market, under the railway arches near London Bridge, with British cheeses, bread, oysters and street food from half the world.",
        "come": "Tube to London Bridge; along the South Bank it is 10 minutes on foot from Tate Modern.",
        "quando": "A weekday around 11, before the lunch crush.",
        "tempo": "1 hour",
        "costo": "free entry",
        "orari": "Open daily, with fewer stalls on Mondays.",
        "lat": 51.5055,
        "lng": -0.091,
        "url": "https://boroughmarket.org.uk/"
      },
      {
        "nome": "Sky Garden",
        "testo": "A roof garden on the 35th floor of the Walkie-Talkie tower in the City, with an open terrace over the Thames and the Tower. London's highest free viewpoint.",
        "come": "Tube to Monument; free entry by online booking only, with ID.",
        "quando": "Sunset slots, which go first.",
        "tempo": "1 hour",
        "costo": "free with booking",
        "lat": 51.5112,
        "lng": -0.0835,
        "url": "https://skygarden.london/",
        "consiglio": "Bookings open in batches a few weeks ahead: if they are gone, try early morning without a booking when there is space."
      },
      {
        "nome": "Greenwich",
        "testo": "The royal riverside town with the Cutty Sark clipper, Wren's Royal Naval College, the National Maritime Museum and, at the top of the park, the Observatory with the Prime Meridian. From the hill you see the City and Canary Wharf.",
        "come": "Uber Boat by Thames Clippers from Westminster or London Bridge, or DLR to Cutty Sark.",
        "quando": "A clear day; the covered market is busiest at weekends.",
        "tempo": "half a day",
        "costo": "park, Naval College and Maritime Museum free; Observatory and Cutty Sark ticketed",
        "lat": 51.4769,
        "lng": -0.0005,
        "url": "https://www.rmg.co.uk/"
      },
      {
        "nome": "Camden Market",
        "testo": "The markets along Regent's Canal, among old stables and warehouses, with vintage, crafts and street food. From the canal you can walk to Little Venice or King's Cross.",
        "come": "Tube to Camden Town or Chalk Farm.",
        "quando": "A weekday; weekends are packed.",
        "tempo": "2 hours",
        "costo": "free entry",
        "orari": "Daily from 10 until evening.",
        "lat": 51.5413,
        "lng": -0.146,
        "url": "https://www.camdenmarket.com/"
      },
      {
        "nome": "Hyde Park and Kensington Gardens",
        "testo": "The great royal park with the Serpentine lake, Speakers' Corner and, to the west, Kensington Gardens with Kensington Palace and the Peter Pan statue. It is where Londoners spend time outdoors.",
        "come": "Tube to Marble Arch, Hyde Park Corner, Knightsbridge or Lancaster Gate; walkable to South Kensington and Notting Hill.",
        "quando": "A sunny morning; in December there is Winter Wonderland.",
        "tempo": "1-2 hours",
        "costo": "free",
        "orari": "Hyde Park daily from 5:00 to midnight.",
        "lat": 51.5073,
        "lng": -0.1657,
        "url": "https://www.royalparks.org.uk/visit/parks/hyde-park"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Westminster, the Abbey and Big Ben, then St James's Park to Buckingham Palace.",
          "Trafalgar Square and the National Gallery; lunch in Covent Garden.",
          "Afternoon: walk the South Bank to Tate Modern and Borough Market.",
          "Sunset from Tower Bridge or a booked Sky Garden slot."
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Westminster, St James's Park and Buckingham Palace, National Gallery, Covent Garden and Soho in the evening.",
          "Day 2: Tower of London at opening, Tower Bridge, Borough Market, Tate Modern and St Paul's across the Millennium Bridge."
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Westminster, Buckingham Palace, National Gallery, West End.",
          "Day 2: Tower, Tower Bridge, Borough Market, Tate Modern, St Paul's.",
          "Day 3: British Museum in the morning; afternoon in South Kensington and Hyde Park, or to Greenwich by boat."
        ]
      },
      {
        "titolo": "4 days",
        "tappe": [
          "Day 1: Westminster and the river",
          "Day 2: British Museum, Covent Garden and the West End",
          "Day 3: the Tower, Tower Bridge, Borough Market and Tate Modern",
          "Day 4: Notting Hill, Hyde Park and South Kensington"
        ]
      }
    ],
    zone: [
      {
        "nome": "South Bank and Southwark",
        "perChi": "anyone who wants everything on foot",
        "testo": "On the south bank, close to the river, Borough Market and Westminster.",
        "fascia": "200-350 €"
      },
      {
        "nome": "Bloomsbury",
        "perChi": "anyone who wants the centre at slightly lower prices",
        "testo": "Close to the British Museum and the King's Cross and Euston stations.",
        "fascia": "160-280 €"
      },
      {
        "nome": "Paddington",
        "perChi": "anyone continuing to Oxford, the Cotswolds or Bath",
        "testo": "Trains to the west leave from here, and there is the Elizabeth line to Heathrow.",
        "fascia": "140-250 €"
      },
      {
        "nome": "Covent Garden and the West End",
        "perChi": "those who want theatres and nightlife on the doorstep",
        "testo": "The very centre, with everything walkable and the Tube everywhere. The most expensive area and the noisiest at night.",
        "fascia": "250-450 €"
      }
    ],
    gite: [
      {
        "nome": "Windsor",
        "distanza": "35-55 minutes by train",
        "come": "Trains from Waterloo to Windsor & Eton Riverside, or from Paddington changing at Slough.",
        "testo": "The oldest inhabited castle in the world, with St George's Chapel and the State Apartments. It closes on some days for royal events."
      },
      {
        "nome": "Oxford",
        "distanza": "1 hour by train",
        "come": "Fast trains from Paddington; the centre is ten minutes' walk from the station.",
        "testo": "The colleges, the Bodleian Library and the Radcliffe Camera. Christ Church costs about £20-25 depending on the day and sometimes closes for events."
      },
      {
        "nome": "Cambridge",
        "distanza": "50 minutes by train",
        "come": "Direct trains from King's Cross or Liverpool Street; bus or a 20-minute walk to the centre.",
        "testo": "King's College Chapel, the Backs along the river and punting on the Cam. More compact than Oxford."
      },
      {
        "nome": "Brighton",
        "distanza": "1 hour by train",
        "come": "Frequent trains from Victoria or London Bridge.",
        "testo": "Londoners' seaside town, with the Palace Pier, the Indian-style Royal Pavilion and the Lanes. The Seven Sisters cliffs are nearby."
      }
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
    faq: [
      {
        "domanda": "How many days do you need in London?",
        "risposta": "Three days for Westminster, the Tower, the South Bank and one big museum; four or five to add South Kensington, Notting Hill, Greenwich and a trip to Windsor or Oxford."
      },
      {
        "domanda": "Do Italians need an ETA for London?",
        "risposta": "Yes, EU citizens need the UK ETA electronic authorisation, requested on the government website or the official app. It costs £20 (2026) and lasts two years; sites charging more are not official."
      },
      {
        "domanda": "Which London museums are free?",
        "risposta": "The national museums: the British Museum, National Gallery, Tate Modern, Natural History Museum, V&A and Science Museum, except temporary exhibitions. The Tower, St Paul's, the Abbey and private attractions charge."
      },
      {
        "domanda": "Oyster or contactless card?",
        "risposta": "A contactless card or phone works like an Oyster, with the same daily cap and no deposit. The key is to always tap the same card or device."
      },
      {
        "domanda": "How do you get from Heathrow to central London?",
        "risposta": "The Piccadilly line costs about £5.90 and takes 50-60 minutes; the Elizabeth line about £15.50 in 30-40 minutes; the Heathrow Express reaches Paddington in 15-20 minutes for about £25."
      },
      {
        "domanda": "Where to stay in London?",
        "risposta": "South Bank or Bloomsbury to have a lot within walking distance, Paddington for trains west and to Heathrow. A double in zone 1 starts at about €150 and easily tops €300 in the West End."
      }
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
