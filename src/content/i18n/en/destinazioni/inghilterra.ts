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
    miaEsperienza:
      "London is home for me too: I went to university in Surrey and lived there for a year, working in the centre.",
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
      'By train from London Paddington on the line through Oxford, Charlbury and Kingham to Moreton-in-Marsh, in about an hour and a half (approximate time); times and fares on nationalrail.co.uk, cheaper when bought in advance. From Heathrow you reach Paddington on the Elizabeth line, in about 30-40 minutes, or on the Heathrow Express, in 15-20 minutes. If you are touring by car, pick it up in Oxford, about an hour by train from London: from there Stow-on-the-Wold is about 45 minutes away.',
    costi:
      'Villages and footpaths are free; you pay for parking and stately homes, such as Blenheim Palace (£41 online, about €47, 2026). Sleeping is expensive: pubs with rooms and B&Bs start at about €100-120 for a double. Indicative daily budget per person, sharing a double and with the hire car on top: low €90-120, mid €160-230, high over €350.',
    comeSpostarsi:
      'Everything is easier by car: the villages are close together but buses are few. Country roads are narrow, with high hedges, and you drive on the left.',
    periodoMigliore: 'May to September; in spring and autumn there are fewer groups',
    erroriDaEvitare: [
      'Reaching Bibury and Bourton-on-the-Water in the middle of the day, when the coaches arrive',
      'Trying to see every village in one day: two or three a day, with a walk, are more rewarding',
    ],
    miaEsperienza:
      "I went with a car picked up in Oxford: two days between Bibury, Bourton-on-the-Water, the Slaughters, Chipping Campden and Castle Combe. Driving on the left is fine for me, but it takes some practice, let's say, and in the countryside the roads can get narrow now and then.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Bibury and Arlington Row",
        "testo": "A row of stone cottages built in 1380 as a monastic wool store and turned into weavers' homes in the late 17th century. It's one of the best-known images of the Cotswolds.",
        "come": "By car, with limited parking in the village.",
        "quando": "Early in the morning or late in the afternoon.",
        "tempo": "1 hour",
        "costo": "Free; pay car park in the village, with few spaces",
        "orari": "Always accessible; the cottages are lived in",
        "lat": 51.7584,
        "lng": -1.8348
      },
      {
        "nome": "Bourton-on-the-Water",
        "testo": "The village with the shallow, wide River Windrush, crossed by small stone bridges. It is the busiest in the area.",
        "come": "By car, with paid car parks on the edges of the centre.",
        "quando": "Early morning or on a weekday.",
        "tempo": "1-2 hours",
        "costo": "Free; pay car parks on the edge of the centre",
        "orari": "Always accessible",
        "lat": 51.886,
        "lng": -1.759
      },
      {
        "nome": "Lower Slaughter and Upper Slaughter",
        "testo": "Two tiny villages along a stream, linked by a footpath through the meadows. They are the opposite of Bourton: quiet.",
        "come": "On foot from one village to the other, there and back.",
        "quando": "Morning or late afternoon.",
        "tempo": "1-2 hours with the walk",
        "costo": "Free",
        "orari": "Always accessible",
        "lat": 51.906,
        "lng": -1.777,
        "consiglio": "Lower Slaughter has hardly any parking: leave the car in Upper Slaughter or Bourton and walk. The path crosses fields with sheep, and gates must be closed behind you."
      },
      {
        "nome": "Stow-on-the-Wold",
        "testo": "A market town on top of a hill, with its square, antique shops and St Edward's church, whose door between two yew trees many people link to Tolkien's world.",
        "come": "By car or on foot from the Slaughters.",
        "tempo": "1-2 hours",
        "quando": "Late afternoon, at the end of the loop, or early morning if you are staying here.",
        "costo": "Free",
        "lat": 51.93,
        "lng": -1.7225
      },
      {
        "nome": "Chipping Campden and Broadway",
        "testo": "The northern Cotswolds. Chipping Campden has a high street of stone houses, with the old covered market. Broadway is bigger, with the tower on top of the hill.",
        "come": "By car, north of Stow.",
        "tempo": "half a day",
        "quando": "In the morning, before the coaches.",
        "costo": "Free",
        "lat": 52.052,
        "lng": -1.779
      },
      {
        "nome": "Castle Combe",
        "testo": "A village in Wiltshire, at the southern tip of the Cotswolds, with stone houses around the old market cross and the bridge over the stream. It lies on the road to Bath.",
        "come": "By car, leaving it in the car park above the village and walking down.",
        "quando": "In the morning.",
        "tempo": "1 hour",
        "costo": "Free",
        "orari": "Always accessible",
        "lat": 51.493,
        "lng": -2.229
      },
      {
        "nome": "Broadway Tower",
        "testo": "An eighteenth-century tower on the hill above Broadway, one of the highest points in the Cotswolds. From the top the view opens over several counties.",
        "come": "By car from Broadway in about ten minutes, or on foot along the Cotswold Way, uphill from the village.",
        "quando": "On a clear day or towards sunset.",
        "tempo": "1 hour",
        "lat": 52.02417,
        "lng": -1.83583,
        "url": "https://www.broadwaytower.co.uk/"
      },
      {
        "nome": "Blenheim Palace",
        "testo": "The great baroque palace of the Dukes of Marlborough, a UNESCO World Heritage Site and the birthplace of Winston Churchill. The park laid out by Capability Brown, with the lake and the bridge, is worth the visit on its own.",
        "come": "In Woodstock, on the eastern edge of the Cotswolds, on the road between Oxford and Burford. Tickets online, £3 cheaper than on site.",
        "quando": "In the morning, at opening time. From 13 November to 3 January the Christmas programme runs and park-only tickets are not sold.",
        "tempo": "half a day",
        "costo": "Palace, park and gardens £41 online and £44 on site, about €47-51; park and gardens only £31 online, about €36 (2026)",
        "orari": "Park open daily 9am-6pm; the palace has its own hours and seasonal closures, on the official website.",
        "lat": 51.84136,
        "lng": -1.36095,
        "url": "https://www.blenheimpalace.com/"
      },
      {
        "nome": "Hidcote Manor Garden",
        "testo": "One of the best-known gardens in England, created in the early twentieth century and divided into \"rooms\" by hedges and walls, each with its own colour. It belongs to the National Trust.",
        "come": "By car, a few kilometres north of Chipping Campden.",
        "quando": "May to September, when things are in flower.",
        "tempo": "2 hours",
        "lat": 52.08456,
        "lng": -1.74609,
        "url": "https://www.nationaltrust.org.uk/"
      },
      {
        "nome": "Sudeley Castle",
        "testo": "A castle with gardens in Winchcombe, still lived in today. Catherine Parr, Henry VIII's last wife, is buried in the chapel.",
        "come": "By car, in the western Cotswolds, half an hour from Broadway.",
        "quando": "Only in the opening season: it reopens in March 2027.",
        "tempo": "2-3 hours",
        "costo": "Adults £24, about €28 (2026)",
        "orari": "In season castle and gardens from 10am, last admission 3pm, castle closes at 4pm and the site at 5pm. Closed in winter.",
        "url": "https://sudeleycastle.co.uk/"
      },
      {
        "nome": "Burford",
        "testo": "A small town on the River Windrush, with its high street running downhill between stone houses, shops and inns. Coming from Oxford, it is the gateway to the Cotswolds.",
        "come": "By car on the A40, between Oxford and Cheltenham.",
        "quando": "In the morning or at lunchtime.",
        "tempo": "1 hour",
        "costo": "Free",
        "lat": 51.808,
        "lng": -1.637
      },
      {
        "nome": "Cirencester and the Corinium Museum",
        "testo": "Cirencester was Corinium, one of the most important towns of Roman Britain. The museum has mosaics and Roman finds from the area; the church on the market place is among the largest in the Cotswolds.",
        "come": "By car, in the southern Cotswolds, on the way between Bibury and Castle Combe.",
        "tempo": "2 hours",
        "lat": 51.7138,
        "lng": -1.9763,
        "url": "https://coriniummuseum.org/"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Bibury early in the morning",
          "Bourton-on-the-Water",
          "Walk between Lower and Upper Slaughter",
          "Stow-on-the-Wold"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as above",
          "Day 2: Chipping Campden and Broadway, or Castle Combe on the way to Bath"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Bibury early in the morning, Bourton-on-the-Water, the walk between Lower and Upper Slaughter, Stow-on-the-Wold",
          "Day 2: Chipping Campden, Broadway and Broadway Tower, Hidcote in the afternoon",
          "Day 3: Burford and Blenheim Palace, or Cirencester and Castle Combe on the way to Bath"
        ]
      }
    ],
    zone: [
      {
        "nome": "Stow-on-the-Wold and surroundings",
        "perChi": "anyone touring by car",
        "testo": "In the middle of the area, a few minutes from Bourton, the Slaughters and Moreton-in-Marsh.",
        "fascia": "€120-230"
      },
      {
        "nome": "Moreton-in-Marsh",
        "perChi": "anyone arriving by train",
        "testo": "It has the station on the London line and a few buses to nearby villages.",
        "fascia": "€100-180"
      },
      {
        "nome": "Chipping Campden and Broadway",
        "perChi": "those who want the northern Cotswolds",
        "testo": "Larger villages, with historic inns and a few luxury hotels. Handy for Hidcote and for a trip to Stratford-upon-Avon.",
        "fascia": "€140-280"
      },
      {
        "nome": "Burford and Bibury",
        "perChi": "those arriving by car from Oxford",
        "testo": "The south-eastern side of the area, closer to Oxford and Blenheim. In the evening, once the coaches have gone, Bibury is quiet.",
        "fascia": "€130-260"
      }
    ],
    sapori: [
      {
        "nome": "Cream tea",
        "testo": "Tea with scones, cream and jam, in the village tea rooms."
      },
      {
        "nome": "Village pub",
        "testo": "Lunch with seasonal dishes and local beers, often in stone buildings a few centuries old."
      }
    ],
    attenzioni: [
      "Narrow country roads, with high hedges and poor visibility: drive on the left and slowly.",
      "At Arlington Row take photos from the street, without going into the gardens."
    ],
    gite: [
      {
        "nome": "Oxford",
        "distanza": "45 minutes by car from Stow-on-the-Wold",
        "come": "By car, or by train from Moreton-in-Marsh or Kingham.",
        "testo": "The colleges, the Radcliffe Camera and the Bodleian in a day on foot. It is also the easiest place to pick up or drop off the car."
      },
      {
        "nome": "Stratford-upon-Avon",
        "distanza": "about 20 km from Chipping Campden",
        "come": "By car, heading north.",
        "testo": "Shakespeare's birthplace, with the house where he was born, half-timbered houses and the Royal Shakespeare Company theatre on the River Avon."
      },
      {
        "nome": "Bath",
        "distanza": "half an hour by car from Castle Combe",
        "come": "By car, heading south; from Bath Spa the train takes you back to London Paddington in about an hour and a half.",
        "testo": "The Roman Baths, the abbey and the Georgian crescents. It is the natural end of a Cotswolds tour."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need for the Cotswolds?",
        "risposta": "Two days for the main villages, three to add Broadway Tower, Hidcote and Blenheim Palace without rushing. Two or three villages a day, with a walk, are more rewarding than a long list."
      },
      {
        "domanda": "Can you visit the Cotswolds without a car?",
        "risposta": "Yes, with limits. The train reaches Moreton-in-Marsh and buses between villages are few: the most practical option is to stay there and join an organised village tour."
      },
      {
        "domanda": "Where is the best place to stay in the Cotswolds?",
        "risposta": "Stow-on-the-Wold if you have a car, as it is in the middle of the area; Moreton-in-Marsh if you arrive by train. You sleep in pubs with rooms and B&Bs, to be booked early."
      },
      {
        "domanda": "Which are the prettiest villages in the Cotswolds?",
        "risposta": "The most famous are Bibury, Bourton-on-the-Water and Castle Combe, which are also the busiest. Lower and Upper Slaughter and Chipping Campden are quieter."
      },
      {
        "domanda": "When is the best time to visit the Cotswolds?",
        "risposta": "May to September; spring and autumn bring fewer groups. In any season, aim to reach Bibury and Bourton before 9am, ahead of the coaches."
      },
      {
        "domanda": "Do you need an international driving permit?",
        "risposta": "Not with an EU licence, which is valid without an international permit. You drive on the left, on narrow lanes between hedges."
      }
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
    miaEsperienza:
      "I came by train from Paddington, after the days in London: a walk around the city of colleges, then I picked up the car and headed into the Cotswolds.",
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
    comeArrivare:
      'By train from London Paddington to Bath Spa in about an hour and a half; times and fares on nationalrail.co.uk. From Heathrow you reach Paddington on the Elizabeth line or the Heathrow Express and change there. The nearest airport is Bristol, linked to Bath by the A4 bus in about an hour, depending on traffic. By car from the Cotswolds you come down via Castle Combe, half an hour away; in the centre traffic is slow and parking is expensive, so it is better to return the car first.',
    costi:
      'Roman Baths from £23.50 online (about €27), Thermae Bath Spa from £44 (about €51), No. 1 Royal Crescent £16 (about €18), 2026 prices. The centre is easy on foot. Indicative daily budget per person, sharing a double: low €90-120, mid €170-240, high over €350.',
    comeSpostarsi: 'On foot.',
    erroriDaEvitare: ['Arriving at the Roman Baths in the middle of the day without a ticket: it is better to book it online on the official website'],
    miaEsperienza:
      "It was the last stop of the trip after the Cotswolds: I got there from Castle Combe, saw the city with the Roman Baths and then took the train back to London.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Roman Baths",
        "testo": "The Roman baths built around the hot spring: the Great Bath with its green water, the underground bathing rooms and the remains of the temple of Sulis Minerva. The museum tells the story of the Roman town through the objects thrown into the spring.",
        "come": "Dated, timed ticket on the official website; the audio guide is included. You cannot touch the water: bathing is at Thermae.",
        "quando": "At opening time or in the last hour, when there are fewer groups.",
        "tempo": "2 hours",
        "costo": "From £23.50 online on weekdays in November and December 2026 (£26.50 at weekends), about €27-31; up to about £33 in peak months. £2 more at the door.",
        "orari": "Daily; in autumn and winter 9am-6pm, last entry 5pm. On 24 December last entry 4.15pm, closed 25 and 26 December.",
        "lat": 51.3809,
        "lng": -2.3595,
        "url": "https://www.romanbaths.co.uk/",
        "consiglio": "If you visit in November or December you can come back in January or February with a £1 ticket."
      },
      {
        "nome": "Bath Abbey",
        "testo": "The great Gothic church next to the baths, with Jacob's ladders carved on the façade, angels climbing towards heaven, and fan vaulting inside. The ticket includes the small underground museum.",
        "come": "Ticket at the entrance; audio guide extra.",
        "quando": "Weekday mornings; on Sundays it only opens in the early afternoon.",
        "tempo": "45 minutes",
        "costo": "Adults £9, about €10; audio guide £3.50 (2026)",
        "orari": "Monday-Friday 10am-5.30pm, Saturday 10am-6pm, Sunday 1pm-3.30pm. Last entry 30 minutes before closing.",
        "lat": 51.38139,
        "lng": -2.35889,
        "url": "https://www.bathabbey.org/"
      },
      {
        "nome": "Bath Abbey Tower",
        "testo": "A guided climb up the tower: 212 steps, the bell chamber, the passage behind the clock face and, at the top, the view over the rooftops and the baths.",
        "come": "Only on the guided tour, booked on the abbey's website. Not accessible for visitors with reduced mobility.",
        "quando": "On a clear day.",
        "tempo": "1 hour",
        "orari": "Monday to Saturday, several times a day, subject to availability.",
        "lat": 51.38139,
        "lng": -2.35889,
        "url": "https://www.bathabbey.org/visiting/tours/"
      },
      {
        "nome": "Royal Crescent and No. 1 Royal Crescent",
        "testo": "A semicircle of thirty Georgian houses in front of a large lawn, the symbol of eighteenth-century Bath. At number 1 there is a museum with the interiors furnished as they were at the time, from the kitchens to the drawing rooms.",
        "come": "On foot from the Circus, along Brock Street.",
        "quando": "The crescent in the afternoon light; the museum at any time.",
        "tempo": "1.5 hours with the museum",
        "costo": "The crescent is free; No. 1 Royal Crescent £16, about €18 (2026)",
        "orari": "No. 1: Tuesday-Sunday 10am-5.30pm, last entry 4.30pm; closed Mondays except school and bank holidays. Closed 16-28 November and 25-26 December 2026.",
        "lat": 51.38694,
        "lng": -2.36833,
        "url": "https://no1royalcrescent.org.uk/"
      },
      {
        "nome": "The Circus",
        "testo": "A circle of Georgian houses split into three segments, with trees in the middle and façades decorated with columns and friezes. It is a few steps from the Royal Crescent.",
        "come": "On foot from the centre, up Gay Street.",
        "tempo": "15 minutes",
        "costo": "Free",
        "lat": 51.386,
        "lng": -2.364
      },
      {
        "nome": "Pulteney Bridge",
        "testo": "An eighteenth-century bridge with shops built on it, like the Ponte Vecchio, and below it the stepped weir on the Avon. It is one of the best-known views of the city.",
        "come": "On foot; the best view is from the riverbank or Parade Gardens.",
        "quando": "At sunset.",
        "tempo": "20 minutes",
        "costo": "Free",
        "lat": 51.38306,
        "lng": -2.35778
      },
      {
        "nome": "Thermae Bath Spa",
        "testo": "The city's modern spa, with natural hot water from the same springs. The rooftop pool looks out over the abbey and the hills.",
        "come": "Minimum age 16, with ID. The basic session lasts 2 hours, with towel and robe.",
        "quando": "In the evening, with the rooftop pool lit up; Monday to Friday is cheaper.",
        "tempo": "2 hours",
        "costo": "2-hour session £44 Monday to Friday, £49 at weekends, about €51-56 (2026)",
        "orari": "Daily 9am-9.30pm, pools until 9pm. Closed 25-26 December and 1 January.",
        "lat": 51.38037,
        "lng": -2.36157,
        "url": "https://www.thermaebathspa.com/"
      },
      {
        "nome": "Jane Austen Centre",
        "testo": "An exhibition on the writer and the Bath of her novels, in a Georgian house on Gay Street. Upstairs is the Regency-style tea room.",
        "come": "Ticket online.",
        "tempo": "1 hour",
        "costo": "£18 online, about €21 (2026)",
        "orari": "From November: Sunday-Friday 10am-4.30pm, Saturday 10am-5.30pm. From 1 July to 21 September daily 9.45am-6pm. Last entry one hour before closing.",
        "lat": 51.38404,
        "lng": -2.36316,
        "url": "https://janeausten.co.uk/pages/jane-austen-centre-in-bath"
      },
      {
        "nome": "Holburne Museum",
        "testo": "An art museum in a Georgian mansion at the end of Great Pulteney Street, at the entrance to Sydney Gardens. Portraits, porcelain and silver, with temporary exhibitions.",
        "come": "On foot from Pulteney Bridge, along Great Pulteney Street.",
        "tempo": "1-2 hours",
        "costo": "Ticket £16.50, about €19 (2026); the collections are free on Wednesdays after 3pm",
        "orari": "Daily 10am-5pm, Sundays and bank holidays 11am-5pm; last entry 4.30pm. Closed 24-26 December and 1 January.",
        "lat": 51.38566,
        "lng": -2.3511,
        "url": "https://www.holburne.org/"
      },
      {
        "nome": "Prior Park Landscape Garden",
        "testo": "An eighteenth-century landscape garden on the hill south of the centre, with the Palladian bridge over the lake and a view of the city. It belongs to the National Trust.",
        "come": "Uphill from the centre, on foot or by bus.",
        "quando": "In good weather; in winter the lawns are muddy.",
        "tempo": "1-2 hours",
        "lat": 51.36721,
        "lng": -2.34374,
        "url": "https://www.nationaltrust.org.uk/"
      },
      {
        "nome": "Assembly Rooms",
        "testo": "The eighteenth-century ballroom and tea rooms where Georgian society met in the evening; they appear in Jane Austen's novels. They belong to the National Trust.",
        "come": "On foot, behind the Circus.",
        "tempo": "45 minutes",
        "lat": 51.38611,
        "lng": -2.36222
      },
      {
        "nome": "Victoria Art Gallery",
        "testo": "The city's public art gallery, in a Victorian building next to Pulteney Bridge, with British painting from the seventeenth century to today.",
        "come": "On foot, at the end of the bridge.",
        "tempo": "1 hour",
        "lat": 51.38265,
        "lng": -2.3586,
        "url": "https://www.victoriagal.org.uk/"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Roman Baths at opening time",
          "The abbey, and the tower if you like",
          "Pulteney Bridge and lunch",
          "The Circus and the Royal Crescent, with the museum at number 1",
          "Thermae Bath Spa in the evening"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as above",
          "Day 2: Great Pulteney Street and the Holburne Museum, Jane Austen Centre, Assembly Rooms, Prior Park in the afternoon"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2: as above",
          "Day 3: a trip to Castle Combe and Lacock, or to Stonehenge, or by train to Bristol"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centre, around the abbey",
        "perChi": "those who want everything on foot",
        "testo": "Between the baths, Milsom Street and Pulteney Bridge. Convenient and lively, but expensive and with little parking.",
        "fascia": "€150-280"
      },
      {
        "nome": "Royal Crescent and Lansdown",
        "perChi": "those looking for Georgian houses",
        "testo": "The upper part of Georgian Bath, quiet in the evening; it is a ten to fifteen minute walk up from the centre.",
        "fascia": "€170-350"
      },
      {
        "nome": "Near Bath Spa",
        "perChi": "those arriving and leaving by train",
        "testo": "Around the station and towards Widcombe: chain hotels and B&Bs, a few minutes from the baths.",
        "fascia": "€110-200"
      },
      {
        "nome": "Bathwick and Great Pulteney Street",
        "perChi": "those who want calm while staying on foot",
        "testo": "Across the bridge, with the Georgian avenue, the Holburne and Sydney Gardens.",
        "fascia": "€130-250"
      }
    ],
    gite: [
      {
        "nome": "Castle Combe and Lacock",
        "distanza": "about half an hour by car",
        "come": "By car, heading north-east; buses are few.",
        "testo": "Two timeless stone villages: Castle Combe with its bridge over the stream and market cross, Lacock with its National Trust abbey."
      },
      {
        "nome": "Stonehenge",
        "distanza": "about 1 hour by car",
        "come": "By car, or on a coach tour from Bath.",
        "testo": "The prehistoric stone circle, a UNESCO World Heritage Site, on Salisbury Plain. Visits are by timed ticket."
      },
      {
        "nome": "Bristol",
        "distanza": "about 15 minutes by train",
        "come": "By train from Bath Spa to Bristol Temple Meads.",
        "testo": "The harbour on the River Avon, the Clifton Suspension Bridge and the murals of Stokes Croft. A young city, quite different from Georgian Bath."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Bath?",
        "risposta": "One day is enough for the Roman Baths, the abbey and the crescents. With two you can add Thermae, the museums and Prior Park at an easy pace."
      },
      {
        "domanda": "Do you need to book the Roman Baths?",
        "risposta": "It is worth it: online tickets are £2 cheaper and you choose your time slot. At opening time or in the last hour it is less crowded."
      },
      {
        "domanda": "Can you bathe in the Roman Baths?",
        "risposta": "No, the water in the Roman Baths cannot be touched. Bathing in the thermal water is at Thermae Bath Spa, from age 16."
      },
      {
        "domanda": "Can you visit Bath as a day trip from London?",
        "risposta": "Yes, the train from Paddington takes about an hour and a half. With a night, though, you see the baths at opening time and the city in the evening, without the crowds."
      },
      {
        "domanda": "Is it worth arriving in Bath by car?",
        "risposta": "Only if you are coming from the Cotswolds. In the centre traffic is slow and parking is expensive: better to return the car and walk."
      },
      {
        "domanda": "How much does it cost to visit Bath?",
        "risposta": "The Roman Baths start at £23.50 online, Thermae at £44, the abbey £9 (2026). The crescents, the Circus and Pulteney Bridge are free."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['londra-cotswolds'],
    imageAlt: 'The terrace of the Roman Baths in Bath with the statues of the emperors, and the abbey tower behind',
    immagine: `${IMG}/giorno-08-bath.webp`,
  },
]
