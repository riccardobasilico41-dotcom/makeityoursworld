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
  {
    slug: 'manchester',
    paeseSlug: 'inghilterra',
    ordine: 5,
    nome: 'Manchester',
    tipologia: ['città', 'calcio', 'musei', 'vita notturna'],
    giorniConsigliati: '2 days',
    visitataPersonalmente: true,
    miaEsperienza:
      "My brother lived in the north of England for four years, so I went to visit these parts many, many times. I like Manchester because you can still feel a more authentic England than in London, which by now is a cosmopolitan city in every sense.",
    introduzione:
      "The city of the Industrial Revolution, with cotton mills and red-brick warehouses turned into lively neighbourhoods, the Northern Quarter and Ancoats. It has two Premier League clubs, Manchester United at Old Trafford and Manchester City at the Etihad, and plenty of free museums.",
    percheAndarci:
      "For the football, for the red-brick neighbourhoods and for an England less touristy than London. It is also the gateway to the north: Liverpool is an hour away by train, the Peak District three quarters of an hour.",
    cosaVedere: [
      'The Northern Quarter and Ancoats',
      'The John Rylands Library',
      'The National Football Museum',
      'Castlefield and the Science and Industry Museum',
      'Old Trafford and the Etihad Stadium',
      'Salford Quays',
    ],
    cosaFare: [
      'A Premier League match, or a stadium tour',
      'An evening in the bars of the Northern Quarter',
      'A walk along the Castlefield canals',
    ],
    comeArrivare:
      "Manchester Airport has direct flights from Italy. The train to Manchester Piccadilly, run by Northern and TransPennine Express, leaves about every 10 minutes and takes around twenty minutes; at night there is still one an hour. The Metrolink tram runs to the centre and Victoria every 12 minutes, with a single fare of £4.60, but it is slower. Black cabs queue outside every terminal. To enter the United Kingdom you need a passport and an ETA, £20 (2026).",
    comeSpostarsi:
      "The centre is easy on foot. For the stadiums and Salford Quays there is the Metrolink tram, paid with a contactless card: the daily cap across all zones is £7.10, or £4.90 outside the morning peak. Bee Network buses cost at most £2 a journey, with fares frozen for the whole of 2026.",
    periodoMigliore: 'May to September for the weather; August to May for the Premier League',
    costi:
      'Many museums are free; the National Football Museum and the stadium tours are paid. Indicative daily budget per person, sharing a double: low €90-120, mid €170-230, high over €330.',
    erroriDaEvitare: [
      'Buying match tickets from unauthorised resale sites: in the United Kingdom it is a criminal offence, and you will not get into the ground',
      'Booking a stadium tour on a home match day: standard tours do not run',
      'Paying for the tram with different cards: the daily cap only works on one card',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Northern Quarter",
        "testo": "The district of old textile warehouses between Piccadilly and Ancoats, with murals, record and vintage shops and bars. Its brick façades and cast-iron fire escapes have made it a stand-in for New York in films.",
        "come": "Five minutes on foot from Piccadilly. The main streets are Oldham Street, Thomas Street and Tib Street.",
        "quando": "Afternoon for the shops, evening for the bars.",
        "tempo": "2-3 hours",
        "costo": "free",
        "lat": 53.4835,
        "lng": -2.2351
      },
      {
        "nome": "Ancoats",
        "testo": "The world's first industrial suburb, with huge red-brick cotton mills along the Rochdale Canal. The factories have become flats, restaurants and bakeries, and it is one of the liveliest parts of the city.",
        "come": "On foot from the Northern Quarter, across Great Ancoats Street.",
        "quando": "Afternoon and evening, for dinner.",
        "tempo": "1-2 hours",
        "costo": "free",
        "lat": 53.485,
        "lng": -2.2276
      },
      {
        "nome": "John Rylands Library",
        "testo": "A late-nineteenth-century neo-Gothic library on Deansgate, with a great reading room under red stone vaults. It holds manuscripts and early books, including one of the oldest fragments of the New Testament.",
        "come": "Free entry on Deansgate. You look round on your own, quietly in the reading room.",
        "quando": "In the morning, at opening time.",
        "tempo": "1 hour",
        "costo": "free",
        "orari": "Wednesday to Saturday 10am-5pm, last entry 4.40pm; closed Sunday to Tuesday.",
        "lat": 53.4804,
        "lng": -2.2491,
        "url": "https://www.library.manchester.ac.uk/rylands/visit/"
      },
      {
        "nome": "National Football Museum",
        "testo": "England's national football museum, in the glass Urbis building in the cathedral quarter. It tells the story of the game, the clubs and the fans, with shirts, trophies and interactive games.",
        "come": "On foot from Victoria or the Northern Quarter. Ticket online or at the desk, valid for 12 months.",
        "quando": "Before going to the stadium.",
        "tempo": "2 hours",
        "costo": "paid",
        "orari": "Daily 10am-5pm, last entry 4pm.",
        "lat": 53.4858,
        "lng": -2.2421,
        "url": "https://www.nationalfootballmuseum.com/"
      },
      {
        "nome": "Science and Industry Museum",
        "testo": "The museum of science and industry in the old Liverpool Road station, the world's first passenger railway station. You see textile machinery, the steam engines of the Power Hall and the story of industrial Manchester.",
        "come": "On foot from Deansgate or by tram to Deansgate-Castlefield. Free entry.",
        "quando": "On a rainy day.",
        "tempo": "2 hours",
        "costo": "free",
        "orari": "Daily 10am-5pm; closed 24-26 December and 1 January. Some areas closed for restoration work.",
        "lat": 53.4773,
        "lng": -2.2547,
        "url": "https://www.scienceandindustrymuseum.org.uk/visit"
      },
      {
        "nome": "Castlefield",
        "testo": "The canal district, where the Bridgewater Canal reaches the city, with iron railway viaducts, old warehouses and the reconstructed remains of the Roman fort of Mamucium, where Manchester began.",
        "come": "Tram to Deansgate-Castlefield, then on foot along the towpaths.",
        "quando": "Late afternoon, with a beer at one of the waterside pubs.",
        "tempo": "1 hour",
        "costo": "free",
        "lat": 53.4758,
        "lng": -2.2557
      },
      {
        "nome": "Old Trafford",
        "testo": "Manchester United's stadium, the «Theatre of Dreams», with the club museum and the United Trinity statue of Best, Law and Charlton outside the entrance. The tour takes you into the dressing rooms, the tunnel and pitchside.",
        "come": "Tram to Old Trafford or Wharfside, then a few minutes on foot. Tours and match tickets only through the club's official channels.",
        "quando": "On days without a home match, for the tour.",
        "tempo": "2 hours with the museum",
        "costo": "tour and museum from £28 online (about €33, 2026)",
        "orari": "Tours Sunday to Thursday 9.30am-4pm, Friday and Saturday 9.30am-5pm; closed on home match days.",
        "lat": 53.4631,
        "lng": -2.2914,
        "url": "https://www.manutd.com/en/club/visit-old-trafford/museum-stadium-tours"
      },
      {
        "nome": "Etihad Stadium",
        "testo": "Manchester City's stadium, in the east of the city, inside the Etihad Campus sports complex. The tour lasts about 75 minutes and starts from the South Stand.",
        "come": "Tram to Etihad Campus. Tour and match tickets on the club's website.",
        "quando": "On days without a match.",
        "tempo": "1.5 hours",
        "costo": "paid tour",
        "lat": 53.4831,
        "lng": -2.2004,
        "url": "https://www.mancity.com/"
      },
      {
        "nome": "People's History Museum",
        "testo": "The national museum of democracy, on the bank of the River Irwell: the story of workers' rights, votes for women and political struggle in Britain, with the world's largest collection of trade union banners.",
        "come": "On foot from Spinningfields. Free entry, with a suggested donation.",
        "quando": "Any day except Tuesday.",
        "tempo": "1-2 hours",
        "costo": "free (suggested donation £10)",
        "orari": "10am-5pm daily except Tuesday.",
        "lat": 53.4814,
        "lng": -2.2534,
        "url": "https://phm.org.uk/visit/"
      },
      {
        "nome": "Manchester Museum",
        "testo": "The university museum, with natural history collections, ancient Egypt and a T. rex skeleton. It is in the university quarter, along Oxford Road.",
        "come": "Bus from Piccadilly along Oxford Road, or 20 minutes on foot from the centre.",
        "quando": "On Wednesdays it stays open into the evening.",
        "tempo": "2 hours",
        "costo": "free",
        "orari": "Tuesday, Thursday, Friday and Sunday 10am-5pm, Wednesday 10am-9pm, Saturday 8am-5pm; closed Mondays. Vivarium closed until May 2027.",
        "lat": 53.466,
        "lng": -2.2337,
        "url": "https://www.museum.manchester.ac.uk/visit/"
      },
      {
        "nome": "Manchester Cathedral",
        "testo": "The fifteenth-century Gothic cathedral, in the medieval quarter near Victoria, with carved wooden choir stalls. Next door is Chetham's Library, the oldest public library in the English-speaking world, which can only be seen on booked guided tours.",
        "come": "On foot from Victoria or the National Football Museum.",
        "quando": "On weekdays, outside service times.",
        "tempo": "45 minutes",
        "costo": "free (suggested donation £5)",
        "orari": "Monday to Saturday 9.30am-4pm, Sunday 12pm-4pm.",
        "lat": 53.4852,
        "lng": -2.2444,
        "url": "https://manchestercathedral.org/plan-your-visit"
      },
      {
        "nome": "Central Library and St Peter's Square",
        "testo": "The round 1930s Central Library, with its reading room under the dome. Next to it is the Victorian Town Hall, closed for restoration until spring 2027.",
        "come": "Tram to St Peter's Square.",
        "quando": "A stop between Deansgate and Piccadilly.",
        "tempo": "30 minutes",
        "costo": "free",
        "orari": "Monday to Thursday 9am-8pm, Friday and Saturday 9am-5pm; closed Sundays.",
        "lat": 53.4781,
        "lng": -2.2447
      },
      {
        "nome": "Salford Quays",
        "testo": "The old docks of the Manchester Ship Canal, now home to The Lowry, the arts centre with galleries devoted to the painter L. S. Lowry, IWM North, the war museum in Daniel Libeskind's building, and the MediaCityUK studios.",
        "come": "Tram to MediaCityUK or Harbour City. It is a stone's throw from Old Trafford, so it pairs well with the stadium tour.",
        "quando": "The same day as Old Trafford.",
        "tempo": "half a day",
        "costo": "The Lowry galleries and IWM North free",
        "orari": "The Lowry galleries Tuesday to Friday 11am-5pm, Saturday and Sunday 10am-5pm, closed Mondays; IWM North 10am-5pm.",
        "lat": 53.4708,
        "lng": -2.2961,
        "url": "https://thelowry.com/"
      },
      {
        "nome": "Aviva Studios",
        "testo": "Factory International's new cultural venue, on the river near Castlefield, with concerts, exhibitions and shows. You can walk into the building freely; events are paid.",
        "come": "On foot from Deansgate or Castlefield.",
        "quando": "In the evening, if there is a show on.",
        "tempo": "1 hour",
        "costo": "free entry to the building",
        "lat": 53.4782,
        "lng": -2.2577,
        "url": "https://factoryinternational.org/aviva-studios"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "In the morning the John Rylands Library and the cathedral",
          "The National Football Museum",
          "In the afternoon the Old Trafford or Etihad tour",
          "The evening in the Northern Quarter"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day one: Northern Quarter, Ancoats, John Rylands Library and the cathedral",
          "Day two: Castlefield and the Science and Industry Museum, then the stadium and Salford Quays",
          "If there is a home match, get to the stadium well ahead of kick-off"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "The two days in the city as above",
          "The third by train to the Peak District: Edale, Mam Tor and Castleton",
          "Or by train to Liverpool, an hour away"
        ]
      }
    ],
    zone: [
      {
        "nome": "Northern Quarter",
        "perChi": "those who want bars and nightlife",
        "testo": "A short walk from Piccadilly, with every bar on your doorstep. Noisy on Fridays and Saturdays."
      },
      {
        "nome": "Piccadilly",
        "perChi": "those arriving and leaving by train",
        "testo": "Close to the station for trains to the airport, Liverpool, the Peak District and the Lake District."
      },
      {
        "nome": "Deansgate and Spinningfields",
        "perChi": "those who want the smarter side of the centre",
        "testo": "Between the John Rylands Library, Castlefield and the restaurants of Spinningfields, with the tram to Old Trafford close by."
      },
      {
        "nome": "Salford Quays",
        "perChi": "those going to Old Trafford",
        "testo": "On the water, modern and quiet, close to Manchester United's stadium. In the evening it is a long way from the life of the centre."
      }
    ],
    gite: [
      {
        "nome": "Liverpool",
        "distanza": "about 1 hour by train",
        "come": "Northern trains about every half hour from Piccadilly, plus TransPennine Express, to Liverpool Lime Street.",
        "testo": "The docks on the Mersey, the Beatles, the two cathedrals and Anfield. It deserves at least one night."
      },
      {
        "nome": "Peak District",
        "distanza": "about 45 minutes by train",
        "come": "Northern's Hope Valley train from Piccadilly to Edale, one an hour.",
        "testo": "The hills closest to the city: the walk from Edale to Castleton over Mam Tor, with the caves at the end."
      },
      {
        "nome": "Lake District",
        "distanza": "just over 2 hours by train",
        "come": "Direct Northern trains from Piccadilly and the airport to Windermere.",
        "testo": "The lakes and mountains of the north-west, with boats on Windermere and the villages of Ambleside and Grasmere. Better with one or two nights."
      }
    ],
    sapori: [
      { nome: 'Pie and peas', testo: 'A meat pie with peas, the classic football-ground and pub meal of the north.' },
      { nome: 'Manchester tart', testo: 'A tart with jam, custard and coconut, the old school-dinner pudding.' },
      { nome: 'Curry Mile', testo: 'Wilmslow Road, in Rusholme, with South Asian restaurants one after another.' },
    ],
    attenzioni: [
      'On match days the trams to the stadiums are packed: set off early.',
      'Look right first when crossing: traffic comes from the opposite side compared with Italy.',
      'Rain is frequent in every season: always bring a waterproof jacket.',
    ],
    faq: [
      {
        "domanda": "How do you buy tickets for a match in Manchester?",
        "risposta": "Through the clubs' official channels. United requires a membership, from £37.50, City the Matchday Membership from £38 (2026-27); for the most sought-after matches there is a ballot. Otherwise there are the official ticket exchange and hospitality."
      },
      {
        "domanda": "Can you do the Old Trafford tour on match day?",
        "risposta": "No, the standard tour does not run on home match days. On other days it starts from 9.30am and costs from £28 online."
      },
      {
        "domanda": "How do you get from Manchester Airport to the centre?",
        "risposta": "By train to Piccadilly, in around twenty minutes, with departures about every 10 minutes. The Metrolink tram costs £4.60 but is slower."
      },
      {
        "domanda": "How many days do you need in Manchester?",
        "risposta": "Two days for the neighbourhoods, the museums and one stadium. With three you can add a trip to the Peak District or Liverpool."
      },
      {
        "domanda": "Manchester or Liverpool?",
        "risposta": "They are an hour apart by train, so it is worth seeing both. Manchester has more nightlife and museums, Liverpool the river, the Beatles and the docks."
      },
      {
        "domanda": "Which museums are free in Manchester?",
        "risposta": "The John Rylands Library, the Science and Industry Museum, Manchester Museum, the People's History Museum, The Lowry galleries and IWM North. The National Football Museum is paid."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['manchester-liverpool-premier-league'],
    imageAlt: 'Colourful murals and people sitting outside a bar in Manchester\'s Northern Quarter',
    immagine: '/images/viaggi/manchester-liverpool-premier-league/giorno-01-northern-quarter.jpg',
  },
  {
    slug: 'liverpool',
    paeseSlug: 'inghilterra',
    ordine: 6,
    nome: 'Liverpool',
    tipologia: ['città', 'calcio', 'musica', 'musei'],
    giorniConsigliati: '2 days',
    visitataPersonalmente: true,
    miaEsperienza:
      "I went there many times when my brother lived in the north of England. Liverpool has even more of a «working-class» feel than Manchester, in a good way, with its red-brick buildings.",
    introduzione:
      "The port city on the River Mersey, with nineteenth-century docks, the «Three Graces» of the Pier Head and two cathedrals facing each other. It is the city of the Beatles and of two Premier League clubs, Liverpool at Anfield and Everton in their new stadium on the river.",
    percheAndarci:
      "For a waterfront that holds the story of England's maritime past, for the Beatles, for the football and for a proud city that is still working-class at heart. Many museums are free.",
    cosaVedere: [
      'The Royal Albert Dock',
      'The Pier Head and the Royal Liver Building',
      'The two cathedrals on Hope Street',
      'Mathew Street and the Cavern Club',
      'Anfield and the Hill Dickinson Stadium',
      'Another Place at Crosby',
    ],
    cosaFare: [
      'The Mersey cruise from the Pier Head',
      'A gig at the Cavern Club',
      'The Anfield tour, or a match',
      'An evening between Bold Street and the Baltic Triangle',
    ],
    comeArrivare:
      "From John Lennon Airport, Arriva's 500 bus runs up to every 15 minutes, from 4am to midnight, to Liverpool ONE bus station and Great Charlotte Street, near Lime Street; it costs at most £2. The 80A and 86A buses go via Liverpool South Parkway station. From Manchester the train takes about an hour; from London Euston there are direct Avanti West Coast trains.",
    comeSpostarsi:
      "The centre, the docks and the cathedrals are easy on foot. For Anfield and Crosby you need the bus or Merseyrail trains. Every bus journey costs at most £2; the Solo day ticket for all buses in Merseyside costs £5.90 (2026).",
    periodoMigliore: 'May to September for the weather; August to May for the Premier League',
    costi:
      'The national museums are free; the Beatles Story, the Cavern Club and the stadium tours are paid. Indicative daily budget per person, sharing a double: low €85-110, mid €160-220, high over €300. Hotels cost more on match weekends.',
    erroriDaEvitare: [
      'Looking for a train at the airport: there is no station, you need the bus',
      'Buying match tickets from unauthorised resellers',
      'Heading for the Merseyside Maritime Museum: it is closed for works',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Royal Albert Dock",
        "testo": "The great nineteenth-century dock, surrounded by red-brick warehouses and cast-iron columns, the largest group of listed buildings in the United Kingdom. Today it has museums, restaurants and bars on the water.",
        "come": "Ten minutes on foot from the centre and Liverpool ONE.",
        "quando": "In the evening, with the lights reflected in the dock.",
        "tempo": "1-2 hours",
        "costo": "free",
        "lat": 53.4003,
        "lng": -2.9927,
        "url": "https://albertdock.com"
      },
      {
        "nome": "The Beatles Story",
        "testo": "The Beatles museum at the Albert Dock, telling their story from the early days in Hamburg and at the Cavern to the break-up, with an audio guide and reconstructions of the places.",
        "come": "Ticket online or at the desk, at the Albert Dock.",
        "quando": "In the morning, before the groups.",
        "tempo": "2 hours",
        "costo": "£20 (about €23, 2026)",
        "orari": "Sunday to Friday 9am-5.30pm, Saturday 9am-6.30pm.",
        "lat": 53.3993,
        "lng": -2.992,
        "url": "https://www.beatlesstory.com/plan-your-visit/"
      },
      {
        "nome": "Museum of Liverpool",
        "testo": "The city museum, in the white building on the Pier Head: the story of the port, emigration, music and football, told in the voices of local people.",
        "come": "On foot from the Albert Dock. Free entry.",
        "quando": "Any day except Monday.",
        "tempo": "1-2 hours",
        "costo": "free",
        "orari": "In winter Tuesday to Sunday 10am-4pm; closed Mondays, except in the school holidays.",
        "lat": 53.403,
        "lng": -2.9956,
        "url": "https://www.liverpoolmuseums.org.uk/museum-of-liverpool"
      },
      {
        "nome": "Pier Head and the Royal Liver Building",
        "testo": "The riverfront with the «Three Graces», the three early-twentieth-century port buildings: the Royal Liver Building, with the two copper birds on its towers, the Cunard Building and the Port of Liverpool Building. The Beatles statue is here.",
        "come": "On foot from the centre, along the waterfront.",
        "quando": "At sunset, or from the ferry on the river.",
        "tempo": "1 hour",
        "costo": "free",
        "lat": 53.4058,
        "lng": -2.9958
      },
      {
        "nome": "Mersey cruise",
        "testo": "The old Mersey ferry, now the Liverpool Sightseeing River Cruise: an hour on the river with commentary, and the view of the waterfront from the water.",
        "come": "From the Pier Head terminal, ticket online or at the ticket office.",
        "quando": "On a clear day.",
        "tempo": "1 hour",
        "costo": "£14 (about €16, 2026)",
        "orari": "Hourly departures from the Pier Head, on weekdays from 10am to 4pm; at winter weekends the last departure is at 3pm.",
        "lat": 53.405,
        "lng": -2.995,
        "url": "https://www.merseyferries.co.uk/"
      },
      {
        "nome": "Tate Liverpool",
        "testo": "Tate's northern home, with modern and contemporary art. Until its return to the Albert Dock, expected in 2027, it is housed in the RIBA North building on Mann Island.",
        "come": "On foot from the Pier Head. Free entry.",
        "quando": "Together with the Museum of Liverpool.",
        "tempo": "1 hour",
        "costo": "free",
        "orari": "Daily 10am-5.50pm; closed 24-26 December.",
        "lat": 53.4035,
        "lng": -2.9937,
        "url": "https://www.tate.org.uk/visit/tate-liverpool"
      },
      {
        "nome": "Liverpool Cathedral",
        "testo": "The largest cathedral in the United Kingdom, in red sandstone, built in the twentieth century in neo-Gothic style on a hill above the centre. From the tower you can see the whole city out to the sea.",
        "come": "On foot from Hope Street. The tower is climbed with two lifts and 108 steps.",
        "quando": "In the morning; on Sundays the visitor areas open at midday.",
        "tempo": "1 hour",
        "costo": "free entry; tower paid",
        "orari": "Daily 10am-6pm, on Sundays visits from 12pm; tower until 4.30pm.",
        "lat": 53.3975,
        "lng": -2.9731,
        "url": "https://www.liverpoolcathedral.org.uk/"
      },
      {
        "nome": "Metropolitan Cathedral",
        "testo": "The round Catholic cathedral from the 1960s, with its crown-shaped tower and the stained-glass lantern lighting the altar at the centre. Hope Street links it to the Anglican cathedral.",
        "come": "On foot from the Anglican cathedral, along Hope Street.",
        "quando": "In sunshine, for the colours of the lantern.",
        "tempo": "45 minutes",
        "costo": "free",
        "orari": "Daily 7.30am-6pm; crypt Monday to Saturday 10am-4pm.",
        "lat": 53.4047,
        "lng": -2.9688,
        "url": "https://www.liverpoolmetrocathedral.org.uk/visit-us/"
      },
      {
        "nome": "Cavern Club and Mathew Street",
        "testo": "The club where the Beatles played in their early days, rebuilt next to the original, with live music every day. Mathew Street is full of pubs and reminders of the band.",
        "come": "On foot from the centre. You pay at the door, card only.",
        "quando": "In the afternoon to see it at leisure, in the evening for the gigs.",
        "tempo": "1-2 hours",
        "costo": "£6, day pass £8.50 (2026)",
        "orari": "Sunday to Wednesday 11am-midnight, Thursday until 1am, Friday and Saturday until 2am.",
        "lat": 53.4063,
        "lng": -2.9879,
        "url": "https://www.cavernclub.com/"
      },
      {
        "nome": "St George's Hall",
        "testo": "The great neoclassical hall opposite Lime Street station, with its Minton-tiled floor and the old courtrooms. Around it are the Walker Art Gallery and the World Museum, both free.",
        "come": "Right outside Lime Street. Guided tours run only on certain dates.",
        "quando": "As soon as you arrive by train.",
        "tempo": "1 hour",
        "costo": "visitor centre free",
        "orari": "Visitor centre Monday to Saturday 9.30am-5pm.",
        "lat": 53.4086,
        "lng": -2.9801,
        "url": "https://liverpoolcityhalls.co.uk/plan-your-visit/"
      },
      {
        "nome": "Walker Art Gallery and World Museum",
        "testo": "Two national museums side by side on William Brown Street: the art gallery with the Pre-Raphaelites and English art, and the museum of natural history, archaeology and ancient Egypt, with a planetarium.",
        "come": "On foot from Lime Street. Free entry.",
        "quando": "On a rainy day.",
        "tempo": "1-2 hours each",
        "costo": "free",
        "orari": "In winter Tuesday to Sunday 10am-4pm; closed Mondays, except in the school holidays.",
        "lat": 53.41,
        "lng": -2.9797,
        "url": "https://www.liverpoolmuseums.org.uk/visit"
      },
      {
        "nome": "Anfield",
        "testo": "Liverpool's stadium, with the Kop, the most famous stand in England, the club museum and the Shankly Gates. The tour goes through the dressing rooms, the tunnel with the «This is Anfield» sign and the dugout.",
        "come": "Bus 26 from Liverpool ONE or 17 from Queen Square; on match days also the 917 and shuttle buses. No parking on match days.",
        "quando": "On days without a match, for the standard tour.",
        "tempo": "2 hours with the museum",
        "costo": "tour £26 (about €30), museum only £14 (2026)",
        "orari": "Tours daily 10am-3pm; museum 9am-5pm.",
        "lat": 53.4308,
        "lng": -2.9608,
        "url": "https://www.liverpoolfc.com/"
      },
      {
        "nome": "Hill Dickinson Stadium",
        "testo": "Everton's new stadium, on the Mersey at Bramley-Moore Dock, opened for the 2025-26 season. The tour takes in the dressing room, the tunnel, pitchside and the press room. The old Goodison Park, where Everton Women now play, has its tours back too.",
        "come": "On foot along the river from the Pier Head, heading north. Tours only with online booking.",
        "quando": "On days without a match.",
        "tempo": "1.5 hours",
        "costo": "paid tour",
        "lat": 53.425,
        "lng": -3.0027,
        "url": "https://www.hilldickinsonstadium.com/tours"
      },
      {
        "nome": "Another Place, Crosby",
        "testo": "A hundred cast-iron figures by Antony Gormley spread along three kilometres of beach, looking out to sea. At high tide they disappear under the water.",
        "come": "Merseyrail train to Blundellsands & Crosby, Hall Road or Waterloo, then on foot to the beach.",
        "quando": "At sunset, at low tide.",
        "tempo": "half a day",
        "costo": "free",
        "lat": 53.47,
        "lng": -3.046,
        "url": "https://www.sefton.gov.uk/around-sefton/another-place-by-antony-gormley/plan-your-visit",
        "consiglio": "Stay within 50 metres of the promenade and check the tides: the sand and mud can be dangerous."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "In the morning the Royal Albert Dock and the Beatles Story",
          "The Pier Head, the Museum of Liverpool and the Mersey cruise",
          "In the afternoon Mathew Street and the Cavern Club",
          "The evening on Bold Street"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day one: St George's Hall, the Albert Dock, the Pier Head and the cruise",
          "Day two: the two cathedrals on Hope Street, the Cavern Club, then Anfield or the Hill Dickinson Stadium",
          "The evening in the Baltic Triangle"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "The two days as above",
          "The third: the Walker Art Gallery and the World Museum in the morning",
          "In the afternoon by train to Crosby, for Another Place at sunset"
        ]
      }
    ],
    zone: [
      {
        "nome": "Liverpool ONE and the centre",
        "perChi": "those who want everything on foot",
        "testo": "Between Lime Street station, the shops and the docks. The airport bus station is here."
      },
      {
        "nome": "Waterfront and Albert Dock",
        "perChi": "those who want a river view",
        "testo": "Close to the museums, the Pier Head and Everton's new stadium, with the walk along the Mersey."
      },
      {
        "nome": "Ropewalks and Baltic Triangle",
        "perChi": "those who want bars and nightlife",
        "testo": "Bold Street, the restaurants and the old warehouses full of bars. Noisy at weekends."
      },
      {
        "nome": "Georgian Quarter",
        "perChi": "those looking for calm",
        "testo": "The Georgian houses around Hope Street, between the two cathedrals, ten minutes' walk from the centre."
      }
    ],
    gite: [
      {
        "nome": "Manchester",
        "distanza": "about 1 hour by train",
        "come": "Trains from Lime Street to Manchester Piccadilly and Oxford Road.",
        "testo": "The Northern Quarter, Ancoats, the free museums and Manchester's two stadiums."
      },
      {
        "nome": "Crosby and Another Place",
        "distanza": "about 20 minutes by train",
        "come": "Merseyrail train to Blundellsands & Crosby or Hall Road.",
        "testo": "Antony Gormley's figures on the beach, the most photographed spot outside the city."
      },
      {
        "nome": "Lake District",
        "distanza": "2-3 hours by train",
        "come": "Train with one change, at Preston or via Manchester, to Windermere.",
        "testo": "The lakes and mountains of the north-west. Better with one or two nights."
      }
    ],
    sapori: [
      { nome: 'Scouse', testo: 'The meat and potato stew that gives Liverpool people their name, «Scousers».' },
      { nome: 'Pie at the match', testo: 'The hot football pie, from the stall outside the gates before kick-off.' },
      { nome: 'Bold Street', testo: 'The street of world cuisines, from the Middle East to Asia, at honest prices.' },
    ],
    attenzioni: [
      'The Merseyside Maritime Museum and the International Slavery Museum are closed for refurbishment.',
      'On match days the buses to Anfield are full and there is no parking around the stadium.',
      'At Crosby watch out for the tides and the mud beyond the beach.',
    ],
    faq: [
      {
        "domanda": "How do you buy tickets for Anfield?",
        "risposta": "Only from the club, with an All Red membership, Full at £42.99 or Light at £18.99 (2026-27): without one you cannot buy tickets. Returned seats are resold at face value to members on the Ticket Exchange; hospitality is bought separately."
      },
      {
        "domanda": "How much is the Anfield tour?",
        "risposta": "£26 for an adult, including the museum; the museum alone is £14 (2026). Tours run daily from 10am to 3pm."
      },
      {
        "domanda": "How do you get from Liverpool airport to the centre?",
        "risposta": "On the 500 bus, up to every 15 minutes, which goes to Liverpool ONE: it costs at most £2. The airport has no railway station."
      },
      {
        "domanda": "Is the Maritime Museum open?",
        "risposta": "No, the Merseyside Maritime Museum and the International Slavery Museum are closed for works. Tate Liverpool is open in the RIBA North building on Mann Island."
      },
      {
        "domanda": "How many days do you need in Liverpool?",
        "risposta": "One day for the docks, the Pier Head and the Beatles; two to add the cathedrals and a stadium without rushing."
      },
      {
        "domanda": "Can you visit Everton's new stadium?",
        "risposta": "Yes, the Hill Dickinson Stadium runs tours, bookable online only. Tours have also returned at Goodison Park, where Everton Women now play."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['manchester-liverpool-premier-league'],
    imageAlt: 'The red-brick warehouses of Liverpool\'s Royal Albert Dock, reflected in the water',
    immagine: '/images/viaggi/manchester-liverpool-premier-league/giorno-03-albert-dock.jpg',
  },
  {
    slug: 'peak-district',
    paeseSlug: 'inghilterra',
    ordine: 7,
    nome: 'Peak District',
    tipologia: ['natura', 'trekking', 'parco nazionale', 'grotte'],
    giorniConsigliati: '1-2 days',
    visitataPersonalmente: true,
    miaEsperienza:
      "I went there on my many trips up north, when my brother lived in these parts: it's the possible extension for nature lovers, together with the Lake District.",
    introduzione:
      'The first national park in the United Kingdom, between Manchester and Sheffield: the moorland hills of the Dark Peak, with Kinder Scout and Mam Tor, and the green valleys and stone villages of the White Peak, with Bakewell and great houses such as Chatsworth.',
    percheAndarci:
      'For walking in the hills less than an hour by train from Manchester, for the caves of Castleton and for villages with proper country pubs.',
    cosaVedere: [
      'Mam Tor and the Great Ridge',
      'Castleton and its caves',
      'Edale and Kinder Scout',
      'Chatsworth House',
      'Bakewell',
      'Dovedale',
    ],
    cosaFare: [
      'The walk from Edale to Castleton over Mam Tor',
      'The boat trip through the flooded mine of Speedwell Cavern',
      'A Bakewell pudding in Bakewell',
    ],
    comeArrivare:
      'From Manchester Piccadilly the Northern train on the Hope Valley line stops at Edale, Hope and Hathersage, once an hour: Edale is about 45 minutes away. Buxton is on another Northern line, about 55 minutes. From Sheffield the 271 and 272 buses run to Hathersage, Hope and Castleton. By car it takes about an hour from Manchester.',
    comeSpostarsi:
      'For the Hope Valley the train and your legs are enough. For Chatsworth, Bakewell and Dovedale a car is much easier. Since 2026 the roads around Mam Tor and Winnats Pass have had parking bans: you can only park in the car parks.',
    periodoMigliore: 'May to September; in winter, fog, mud and short days',
    costi:
      'Entry to the park is free; you pay for parking, the caves and the stately homes. Indicative daily budget per person, sharing a double: low €80-100, mid €140-190, high over €260.',
    erroriDaEvitare: [
      'Stopping the car along the roads at Mam Tor and Winnats Pass: since 2026 parking there is banned',
      'Climbing Mam Tor in town shoes: the path is paved, but it gets slippery',
      'Counting on Peveril Castle: it is closed until March 2027',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Mam Tor and the Great Ridge",
        "testo": "The \"shivering mountain\", named after the landslips on its east face. From the summit, at 517 metres, the Great Ridge runs to Lose Hill, with the Edale valley on one side and the Hope Valley on the other.",
        "come": "On foot from Edale or Castleton, or from the small National Trust car park at Mam Nick, a few minutes from the top.",
        "quando": "On a clear day; there are fewer people at dawn and sunset.",
        "tempo": "half a day for the ridge",
        "costo": "free; Mam Nick car park £4.50 for up to 4 hours (2026)",
        "lat": 53.3491,
        "lng": -1.8107,
        "url": "https://www.nationaltrust.org.uk/visit/peak-district-derbyshire/kinder-edale-and-the-high-peak"
      },
      {
        "nome": "Castleton",
        "testo": "The cave village at the foot of Mam Tor, with stone houses, pubs and shops selling Blue John, a purple and yellow fluorite found only here. Above the village are the ruins of Peveril Castle.",
        "come": "Train to Hope and a 30-minute walk, or the 272 bus from Sheffield and Hathersage.",
        "quando": "In the afternoon, at the end of the walk.",
        "tempo": "half a day with one cave",
        "costo": "the village is free",
        "lat": 53.344,
        "lng": -1.775,
        "consiglio": "Peveril Castle, run by English Heritage, is closed until March 2027."
      },
      {
        "nome": "Peak Cavern",
        "testo": "The cave with the largest entrance in the United Kingdom, where rope makers lived until the twentieth century, with their houses inside the cavern. The guided tour goes down into the innermost chambers.",
        "come": "On foot from the centre of Castleton. Guided tours at set times.",
        "quando": "On a rainy day.",
        "tempo": "1 hour 15 minutes",
        "costo": "£22.25 online, £24 at the door (about €26, 2026)",
        "orari": "In summer 10am-5pm, tours every hour.",
        "lat": 53.3403,
        "lng": -1.7785,
        "url": "https://peakcavern.co.uk/"
      },
      {
        "nome": "Speedwell Cavern",
        "testo": "An old flooded lead mine, visited by boat along a hand-dug tunnel that leads to a large natural cavern.",
        "come": "At the bottom of Winnats Pass, a 15-minute walk from Castleton.",
        "quando": "All year round, except when it closes because of high water.",
        "tempo": "1 hour",
        "costo": "£23.50 online, £25 at the door (about €27, 2026)",
        "orari": "Closed 25 and 26 December and 1 January; it may close because of flooding.",
        "lat": 53.3414,
        "lng": -1.7921,
        "url": "https://www.speedwellcavern.co.uk/"
      },
      {
        "nome": "Edale and Kinder Scout",
        "testo": "Edale is the village at the head of the valley where the Pennine Way begins, the path that heads north towards Scotland. Above it is Kinder Scout, the highest moorland plateau in the park, famous for the 1932 protest that opened the hills to walkers.",
        "come": "Train to Edale. The climb to Kinder Scout via Grindsbrook Clough is demanding.",
        "quando": "In summer, with good visibility.",
        "tempo": "a full day for Kinder Scout",
        "costo": "free",
        "lat": 53.366,
        "lng": -1.816,
        "consiglio": "On the Kinder Scout plateau it is easy to get lost in fog: take a map and the route on your phone."
      },
      {
        "nome": "Chatsworth House",
        "testo": "The great house of the Dukes of Devonshire, with rooms full of works of art, the park on the River Derwent and gardens with the stepped cascade. In winter it opens for Christmas.",
        "come": "By car, about 20 minutes from Bakewell. Tickets online.",
        "quando": "From mid-March to early January.",
        "tempo": "half a day",
        "costo": "from £10; Christmas at Chatsworth £40 including parking (2026)",
        "orari": "Season from mid-March to early January; Christmas opening from 7 November 2026 to 3 January 2027.",
        "lat": 53.2278,
        "lng": -1.61,
        "url": "https://www.chatsworth.org/"
      },
      {
        "nome": "Haddon Hall",
        "testo": "A medieval and Tudor fortified manor house that has survived almost intact, with the painted chapel, the long gallery and terraced gardens above the River Wye.",
        "come": "By car, a few minutes from Bakewell.",
        "quando": "In spring and summer; in winter only for the Christmas market.",
        "tempo": "2 hours",
        "costo": "£29.50 (about €34, 2026)",
        "orari": "In season 10.30am-4pm, last entry 3pm.",
        "lat": 53.1939,
        "lng": -1.6498,
        "url": "https://www.haddonhall.co.uk/visit/"
      },
      {
        "nome": "Bakewell",
        "testo": "The stone market town on the River Wye, with its medieval bridge and Monday market. It is the home of the Bakewell pudding, a puff pastry tart with jam and an almond filling.",
        "come": "By car or on the Transpeak bus between Buxton and Matlock.",
        "quando": "On Monday, market day.",
        "tempo": "2 hours",
        "costo": "free",
        "lat": 53.214,
        "lng": -1.676
      },
      {
        "nome": "Dovedale",
        "testo": "The narrow valley of the River Dove, in the south of the park, with stepping stones across the river and limestone pinnacles. It is one of the easiest and best-known walks in the Peak District.",
        "come": "By car to the National Trust car park; the stepping stones are about 800 metres away.",
        "quando": "On a weekday: at weekends it is crowded.",
        "tempo": "2-3 hours",
        "costo": "free; parking £5 for up to 4 hours, £7 for longer (2026)",
        "lat": 53.06,
        "lng": -1.777,
        "url": "https://www.nationaltrust.org.uk/dovedale"
      },
      {
        "nome": "Stanage Edge",
        "testo": "A long gritstone edge above Hathersage, the most famous climbing crag in England, with a path along the top and views over the Hope Valley.",
        "come": "From the Hollin Bank car park, which is paid, or on foot from Hathersage.",
        "quando": "At sunset.",
        "tempo": "2 hours",
        "costo": "free; paid parking",
        "lat": 53.3473,
        "lng": -1.6333
      },
      {
        "nome": "Ladybower Reservoir",
        "testo": "The reservoirs of the Derwent valley, surrounded by woods, with the dam where the planes of the \"Dambusters\" squadron trained during the Second World War.",
        "come": "By car, using the Fairholmes car park, or by bike along the trails.",
        "quando": "In autumn, for the colours of the woods.",
        "tempo": "2 hours",
        "costo": "free; paid parking",
        "lat": 53.3833,
        "lng": -1.7167
      },
      {
        "nome": "Buxton and Poole's Cavern",
        "testo": "The Georgian spa town, with the Crescent, the Opera House and the Pavilion Gardens. On its edge is Poole's Cavern, a limestone cave with stalactites, in Grin Low woods.",
        "come": "Northern train from Manchester Piccadilly, about 55 minutes.",
        "quando": "On a rainy day.",
        "tempo": "half a day",
        "costo": "the cave is paid",
        "orari": "Poole's Cavern daily from April to September 9.45am-5pm; from October to March until 4pm on weekdays and 4.30pm at weekends; closed 25 and 26 December.",
        "lat": 53.2498,
        "lng": -1.9259
      }
    ],
    programmi: [
      {
        "titolo": "1 day by train",
        "tappe": [
          "Train from Manchester Piccadilly to Edale",
          "Climb Mam Tor and walk the ridge",
          "Down to Castleton and one cave",
          "Walk to Hope station and take the train back to Manchester"
        ]
      },
      {
        "titolo": "2 days by car",
        "tappe": [
          "Day one: Edale, Mam Tor, Castleton and the caves, night in the Hope Valley",
          "Day two: Chatsworth in the morning, Bakewell for lunch, Dovedale in the afternoon"
        ]
      }
    ],
    zone: [
      {
        "nome": "Castleton and the Hope Valley",
        "perChi": "walkers",
        "testo": "Pubs with rooms and B&Bs at the foot of Mam Tor, with trains from Hope and Edale."
      },
      {
        "nome": "Bakewell",
        "perChi": "those touring by car",
        "testo": "In the middle of the White Peak, handy for Chatsworth, Haddon Hall and Dovedale."
      },
      {
        "nome": "Buxton",
        "perChi": "those who want a town with a railway station",
        "testo": "More services and restaurants, with a direct train to Manchester."
      }
    ],
    gite: [
      {
        "nome": "Manchester",
        "distanza": "about 45 minutes by train",
        "come": "Northern train from Edale or Hope to Manchester Piccadilly.",
        "testo": "The nearest city, for sleeping and for the evening."
      },
      {
        "nome": "Sheffield",
        "distanza": "about 30 minutes by train",
        "come": "Same Hope Valley line, heading east.",
        "testo": "The steel city, with the botanical gardens and the Millennium Gallery."
      }
    ],
    faq: [
      {
        "domanda": "Can you visit the Peak District without a car?",
        "risposta": "Yes, the Hope Valley: the train from Manchester stops at Edale and Hope, and from there you walk to Mam Tor and Castleton. For Chatsworth, Bakewell and Dovedale a car is much easier."
      },
      {
        "domanda": "Do you have to pay to enter the national park?",
        "risposta": "No, entry is free. You pay for parking, the caves and the stately homes."
      },
      {
        "domanda": "What is the best walk for one day?",
        "risposta": "From Edale to Castleton over Mam Tor and the Great Ridge, with the train there and back."
      },
      {
        "domanda": "Which cave should you choose in Castleton?",
        "risposta": "Peak Cavern for the huge entrance and the story of the rope makers, Speedwell Cavern for the boat ride through the flooded mine. They cost £22.25 and £23.50 online (2026)."
      },
      {
        "domanda": "Is Peveril Castle open?",
        "risposta": "No, it is closed until March 2027. You can see it from outside, above Castleton."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['manchester-liverpool-premier-league'],
    imageAlt: 'The Mam Tor ridge in the Peak District, with the paved path and green valleys on either side',
    immagine: '/images/viaggi/manchester-liverpool-premier-league/giorno-05-mam-tor.jpg',
  },
  {
    slug: 'lake-district',
    paeseSlug: 'inghilterra',
    ordine: 8,
    nome: 'Lake District',
    tipologia: ['natura', 'trekking', 'laghi', 'parco nazionale'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    miaEsperienza:
      "I went there on my many trips up north, when my brother lived in these parts: it's the possible extension for nature lovers, together with the Peak District.",
    introduzione:
      'The national park of lakes and mountains in north-west England, a UNESCO World Heritage Site: Windermere, Derwentwater and Ullswater, the hills known as "fells", the slate villages and the land of the Romantic poets and Beatrix Potter.',
    percheAndarci:
      'For the most beautiful scenery in England, seen from the lake boats and from the summits. You walk a lot, including short climbs, and in the evening you head back to a village pub.',
    cosaVedere: [
      'Windermere, Bowness and Ambleside',
      'Grasmere and Dove Cottage',
      'Keswick and Derwentwater',
      'Catbells',
      'Castlerigg Stone Circle',
      'Ullswater and Aira Force',
    ],
    cosaFare: [
      'The boat on Windermere from Bowness to Ambleside',
      'The climb up Catbells',
      'A trip round Ullswater on the steamers',
    ],
    comeArrivare:
      'From Manchester Piccadilly and Manchester Airport there are direct Northern trains to Windermere, in just over two hours. TransPennine Express trains to Scotland stop at Oxenholme Lake District, where a short branch line runs to Windermere. From London Euston you reach Oxenholme with Avanti West Coast. By car from Manchester it takes about two hours.',
    comeSpostarsi:
      'Without a car you use the Stagecoach buses: the 599 between Windermere, Bowness, Ambleside and Grasmere, the 555 from Kendal to Keswick via Ambleside and Grasmere, the 508 to Glenridding and Ullswater. There are boats on the lakes. You need a car for Hill Top, Tarn Hows and the mountain passes, such as Honister.',
    periodoMigliore: 'May to September; in July and August it is crowded and accommodation costs more',
    costi:
      'Entry to the park is free; you pay for boats, house museums and parking. Indicative daily budget per person, sharing a double: low €90-120, mid €160-220, high over €300.',
    erroriDaEvitare: [
      'Going to Hill Top without a booked ticket: entry is by timed slot only',
      'Heading up the fells without a jacket and without checking the weather: the cloud comes down fast',
      'Arriving at the best-known car parks mid-morning on a summer weekend: they are full',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Windermere and Bowness",
        "testo": "The longest lake in England, with Bowness on the shore, its little harbour and the boats. Windermere Lake Cruises links Bowness, Ambleside, Brockhole and Lakeside all year round.",
        "come": "From Windermere station to Bowness, a 20-minute walk or the 599 bus. Boat tickets online or at the pier.",
        "quando": "In the morning, before the coach tours.",
        "tempo": "half a day",
        "costo": "Bowness-Ambleside boat from £19.20, 24-hour Freedom of the Lake from £26.50 (2026)",
        "orari": "Daily departures from Bowness, Ambleside, Brockhole and Lakeside.",
        "lat": 54.3583,
        "lng": -2.9361,
        "url": "https://www.windermere-lakecruises.co.uk/"
      },
      {
        "nome": "Ambleside",
        "testo": "The dark-stone village at the head of Windermere, with outdoor shops, pubs and Bridge House, the little house built on top of a bridge. It is the starting point for many walks.",
        "come": "By boat from Bowness or on the 599 and 555 buses.",
        "quando": "In the evening, for dinner.",
        "tempo": "2 hours",
        "costo": "free",
        "lat": 54.43,
        "lng": -2.963
      },
      {
        "nome": "Grasmere and Dove Cottage",
        "testo": "The village of the poet William Wordsworth, on the lake of the same name. Dove Cottage is the house where he lived with his sister Dorothy, with the museum next door; Wordsworth is buried in the churchyard of St Oswald's.",
        "come": "The 599 or 555 bus from Ambleside. Ticket valid for 12 months.",
        "quando": "Tuesday to Saturday, the only opening days.",
        "tempo": "2 hours",
        "costo": "£16 (about €18, 2026)",
        "orari": "Tuesday to Saturday 10am-4pm, last entry to the house 3.20pm; closed Sunday and Monday.",
        "lat": 54.4544,
        "lng": -3.0164,
        "url": "https://wordsworth.org.uk/visit/"
      },
      {
        "nome": "Hill Top",
        "testo": "Beatrix Potter's farmhouse at Near Sawrey, with the interiors and the garden that appear in her Peter Rabbit books. It belongs to the National Trust, like much of the land she left to the park.",
        "come": "By car, or on the car and foot ferry from Bowness and then on foot. Timed, pre-booked tickets only, members included.",
        "quando": "On a weekday, outside the school holidays.",
        "tempo": "1 hour",
        "costo": "£17 (about €20, 2026)",
        "orari": "10am-5pm in season; closed in winter.",
        "lat": 54.3517,
        "lng": -2.9706,
        "url": "https://www.nationaltrust.org.uk/visit/lake-district/hill-top"
      },
      {
        "nome": "Keswick and Derwentwater",
        "testo": "The market town in the north of the park, on Derwentwater, with its wooded islands and the mountains all around. The Keswick Launch goes round the lake with seven stops, and is the easiest way to reach the start of the paths.",
        "come": "The 555 bus from Ambleside and Grasmere. Boats from the Keswick landing stage, a ten-minute walk from the centre.",
        "quando": "On Saturday, market day.",
        "tempo": "half a day",
        "costo": "the boat is paid",
        "lat": 54.5943,
        "lng": -3.1449,
        "url": "https://www.keswick-launch.co.uk/"
      },
      {
        "nome": "Catbells",
        "testo": "The best-loved fell in the Lake District, above the west shore of Derwentwater: a short but steep climb, with a final scramble over rock and a sweeping view of the lake and the mountains.",
        "come": "On the Keswick Launch to the Hawes End jetty, then on foot.",
        "quando": "Early in the morning or on a weekday: it is very busy.",
        "tempo": "2-3 hours there and back",
        "costo": "free",
        "lat": 54.5686,
        "lng": -3.1708,
        "consiglio": "In strong wind the rocky stretch at the top is awkward: better to put it off."
      },
      {
        "nome": "Castlerigg Stone Circle",
        "testo": "A prehistoric stone circle around 5,000 years old, in a field ringed by mountains. It is one of the oldest in Britain and one of the most dramatic.",
        "come": "Half an hour on foot from Keswick, or by car with a few spaces along the road.",
        "quando": "At sunset.",
        "tempo": "1 hour",
        "costo": "free",
        "orari": "Open at any reasonable time during daylight hours.",
        "lat": 54.6028,
        "lng": -3.0984,
        "url": "https://www.english-heritage.org.uk/visit/places/castlerigg-stone-circle/"
      },
      {
        "nome": "Tarn Hows",
        "testo": "A small lake in the woods above Coniston, with an easy circular path of about an hour. It is the place for a short walk with a picture-postcard view.",
        "come": "By car, National Trust car park.",
        "quando": "In autumn, for the colours.",
        "tempo": "1-2 hours",
        "costo": "free; parking £7 for up to 2 hours, £10 all day",
        "lat": 54.3917,
        "lng": -3.0319,
        "url": "https://www.nationaltrust.org.uk/tarn-hows-and-coniston"
      },
      {
        "nome": "Ullswater Steamers",
        "testo": "The historic boats on Ullswater, between Glenridding and Pooley Bridge, with the mountains dropping straight into the water. They combine well with the walk along the shore.",
        "come": "The 508 bus from Windermere to Glenridding, or by car.",
        "quando": "On a clear day; in fog the sailings can change.",
        "tempo": "half a day",
        "costo": "round-the-lake trip £26, Glenridding-Pooley Bridge one way £17.50 (2026)",
        "lat": 54.5437,
        "lng": -2.944,
        "url": "https://www.ullswater-steamers.co.uk/"
      },
      {
        "nome": "Aira Force",
        "testo": "The most famous waterfall in the park, about twenty metres high, in woodland above Ullswater, with little stone bridges above and below the falls.",
        "come": "By car, using the National Trust car park, or on foot from Glenridding. The Aira Force pier for the steamers is closed.",
        "quando": "After rain, when there is plenty of water.",
        "tempo": "1 hour",
        "costo": "free; parking £6 for 2 hours, £9.50 all day",
        "lat": 54.5763,
        "lng": -2.9309,
        "url": "https://www.nationaltrust.org.uk/visit/lake-district/aira-force-and-ullswater"
      },
      {
        "nome": "Honister Pass and the slate mine",
        "testo": "The most spectacular mountain pass in the park, between Borrowdale and Buttermere, with the old slate mine at the top. You can tour the tunnels, and there is a via ferrata on the mountain.",
        "come": "By car, on a narrow, steep road.",
        "quando": "In dry weather.",
        "tempo": "half a day",
        "costo": "mine tour from £25, via ferrata from £55 (2026)",
        "lat": 54.5167,
        "lng": -3.2167,
        "url": "https://www.honister.com/"
      },
      {
        "nome": "Brantwood",
        "testo": "The home of the art critic John Ruskin on the shore of Coniston Water, with hillside gardens and a view of the Old Man of Coniston.",
        "come": "By car, or by boat from Coniston pier.",
        "quando": "In the afternoon, after Tarn Hows.",
        "tempo": "2 hours",
        "costo": "£16.50 house and gardens (about €19, 2026)",
        "orari": "10.30am-4pm; from mid-November Wednesday to Sunday 10.30am-3pm; closed 25 and 26 December.",
        "lat": 54.3535,
        "lng": -3.0592,
        "url": "https://www.brantwood.org.uk/visit/"
      }
    ],
    programmi: [
      {
        "titolo": "1 day without a car",
        "tappe": [
          "Train to Windermere and walk to Bowness",
          "Boat to Ambleside",
          "Bus to Grasmere and Dove Cottage"
        ]
      },
      {
        "titolo": "2 days without a car",
        "tappe": [
          "Day one: Windermere, Ambleside and Grasmere",
          "Day two: Keswick, the boat on Derwentwater, Catbells and Castlerigg Stone Circle"
        ]
      },
      {
        "titolo": "3 days by car",
        "tappe": [
          "The two days above",
          "Day three: Hill Top, Tarn Hows and Brantwood, or Ullswater and Aira Force"
        ]
      }
    ],
    zone: [
      {
        "nome": "Windermere and Bowness",
        "perChi": "those arriving by train",
        "testo": "The station, the boats and plenty of hotels. It is the most touristy area."
      },
      {
        "nome": "Ambleside",
        "perChi": "walkers",
        "testo": "At the head of the lake, with pubs and outdoor shops, well served by buses."
      },
      {
        "nome": "Grasmere",
        "perChi": "those looking for a quiet village",
        "testo": "Small and peaceful, halfway between Ambleside and Keswick."
      },
      {
        "nome": "Keswick",
        "perChi": "those who want the north of the park",
        "testo": "A proper town, with its market, and Derwentwater and Catbells close by."
      }
    ],
    gite: [
      {
        "nome": "Manchester",
        "distanza": "just over 2 hours by train",
        "come": "Direct Northern trains from Windermere to Manchester Piccadilly and the airport.",
        "testo": "For your flight, or to add the city and the stadium."
      },
      {
        "nome": "Hadrian's Wall",
        "distanza": "about 1.5 hours by car from Keswick",
        "come": "By car heading east, or by train from Carlisle.",
        "testo": "The Roman wall that crossed northern England, with its forts and stretches of wall on the hills."
      }
    ],
    sapori: [
      { nome: 'Cumberland sausage', testo: 'The long coiled sausage of Cumbria, served with mash and gravy.' },
      { nome: 'Grasmere gingerbread', testo: 'Grasmere\'s gingerbread, somewhere between a biscuit and a cake, sold in a little shop next to the church.' },
      { nome: 'Kendal mint cake', testo: 'The walkers\' bar of sugar and mint, to keep in your rucksack.' },
    ],
    attenzioni: [
      'On the fells the weather changes fast: waterproof jacket, layers and a map even for short climbs.',
      'Mountain roads are narrow and steep; you drive on the left, with sheep on the road.',
      'On summer weekends the best-known car parks fill up by mid-morning.',
    ],
    faq: [
      {
        "domanda": "Can you visit the Lake District without a car?",
        "risposta": "Yes, the central part: train to Windermere, then boats and the 599 and 555 buses to Grasmere and Keswick. For Hill Top, Tarn Hows and the mountain passes a car is much easier."
      },
      {
        "domanda": "How long does it take from Manchester to the Lake District?",
        "risposta": "Just over two hours by train, with direct Northern services from Manchester Piccadilly and the airport to Windermere. About two hours by car."
      },
      {
        "domanda": "Do you need to book Hill Top?",
        "risposta": "Yes, entry is only with a timed, pre-booked ticket, National Trust members included. It costs £17 (2026)."
      },
      {
        "domanda": "What is the easiest walk with a good view?",
        "risposta": "Tarn Hows, a loop of about an hour round the little lake. Catbells is steeper but short, with the best view of Derwentwater."
      },
      {
        "domanda": "Where should you stay in the Lake District?",
        "risposta": "Windermere or Bowness for the train and the boats, Ambleside and Grasmere for walking, Keswick for the north of the park. In summer the B&Bs fill up early."
      },
      {
        "domanda": "How many days do you need?",
        "risposta": "Two days for Windermere, Grasmere and Keswick with Catbells; three to add Ullswater, or Hill Top and Tarn Hows."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['manchester-liverpool-premier-league'],
    imageAlt: 'Windermere with moored boats and the hills of the Lake District',
    immagine: '/images/viaggi/manchester-liverpool-premier-league/giorno-06-windermere.jpg',
  },
  {
    slug: 'brighton',
    paeseSlug: 'inghilterra',
    ordine: 9,
    nome: 'Brighton',
    tipologia: ['mare', 'città', 'vita notturna'],
    giorniConsigliati: '1-2 days',
    visitataPersonalmente: true,
    miaEsperienza:
      "Brighton is really lovely, but at the weekend it turns into a sort of open-air stag party, with lots of booze and bar hopping, so people really go for it. It's still really lovely, though, and you can do it as a day trip or a weekend from London.",
    introduzione:
      "London's seaside town on the Channel, an hour by train from London: the Palace Pier with its rides, George IV's Indian-style Royal Pavilion, the alleys of the Lanes, the shops of North Laine and a pebble beach that runs for miles, all the way to Hove.",
    percheAndarci:
      'For a day at the seaside close to London, for the Royal Pavilion and for the free-spirited, slightly eccentric air of the city. It is also the base for the Seven Sisters cliffs.',
    cosaVedere: [
      'The Royal Pavilion',
      'Brighton Palace Pier',
      'The Lanes and North Laine',
      'The West Pier and the Brighton i360',
      'Kemp Town',
      'Hove and the beach huts on the seafront',
    ],
    cosaFare: [
      'Fish and chips on the pebbles',
      'Going up the Brighton i360',
      "Volk's Electric Railway along the beach, in summer",
      "A walk on Devil's Dyke, up on the South Downs",
    ],
    comeArrivare:
      'From London, Southern trains leave from Victoria and Thameslink from London Bridge, Blackfriars and St Pancras: about an hour, with no seat reservations. From Gatwick, Thameslink and Southern reach Brighton in about half an hour, without going through London. Off-Peak tickets save up to a third.',
    comeSpostarsi:
      "On foot: from the station to the sea is a 15-minute walk downhill, and the centre is compact. For Devil's Dyke and the Seven Sisters there are Brighton & Hove buses.",
    periodoMigliore: 'May to September; on Friday and Saturday nights the city is full of parties',
    costi:
      'The seafront and the Palace Pier are free; the Royal Pavilion and the Brighton i360 are paid. Indicative daily budget per person, sharing a double: low €90-120, mid €170-230, high over €320.',
    erroriDaEvitare: [
      'Looking for a quiet evening in the centre on a Saturday: Kemp Town or Hove are better',
      'Going through London when you land at Gatwick: Brighton is closer',
      'Trying to pay cash at the Royal Pavilion: it only takes cards',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Royal Pavilion",
        "testo": "King George IV's pleasure palace, with Indian-style domes and minarets outside and Chinese-style interiors, with dragons, huge chandeliers and the great kitchen. It is the symbol of Brighton.",
        "come": "Ten minutes' walk from the station. Tickets online with a 5% discount, cards only; official guided tour on Saturdays at 2pm.",
        "quando": "In the morning, at opening time.",
        "tempo": "1.5 hours",
        "costo": "£21.50 (about €25, 2026); two for one with a dated train ticket",
        "orari": "April to September 9.30am-5.45pm, October to March 10am-5.15pm; last entry 45 minutes before closing.",
        "lat": 50.8231,
        "lng": -0.1375,
        "url": "https://brightonmuseums.org.uk/visit/royal-pavilion-garden/plan-your-visit/"
      },
      {
        "nome": "Brighton Palace Pier",
        "testo": "The Victorian pier, more than five hundred metres long, with the rides at the end, the amusement arcades and the fish and chips and doughnut kiosks.",
        "come": "From the seafront, opposite the centre. Rides are paid separately or with a wristband.",
        "quando": "At sunset.",
        "tempo": "1 hour",
        "costo": "free; £1 at peak times from March to October",
        "orari": "Opening times vary with the season; see the calendar on the website.",
        "lat": 50.815,
        "lng": -0.1369,
        "url": "https://www.brightonpier.co.uk/"
      },
      {
        "nome": "The Lanes",
        "testo": "The heart of the old fishing village, with narrow alleys, jewellers, antique shops and pubs. Getting lost here is part of the fun.",
        "come": "On foot between the Royal Pavilion and the sea.",
        "quando": "In the morning, before the crowds.",
        "tempo": "1 hour",
        "costo": "free",
        "lat": 50.8206,
        "lng": -0.1403
      },
      {
        "nome": "North Laine",
        "testo": "The bohemian quarter between the station and the centre, with low, colourful houses, independent and vintage shops, cafés and vegetarian restaurants.",
        "come": "You walk through it on the way down from the station to the sea.",
        "quando": "On Saturdays, when all the shops are open.",
        "tempo": "1-2 hours",
        "costo": "free",
        "lat": 50.8264,
        "lng": -0.1392
      },
      {
        "nome": "Brighton i360",
        "testo": "The observation tower on the seafront, with a glass pod that rises slowly to 138 metres. On clear days you can see the South Downs and the coast as far as the Seven Sisters.",
        "come": "On foot from the centre, next to the remains of the West Pier. Timed tickets online.",
        "quando": "On clear days, or at sunset.",
        "tempo": "45 minutes",
        "costo": "from about £18.50 online (about €21, 2026)",
        "orari": "In November 11am-4pm, Saturday and Sunday 10.30am-4pm; longer hours in summer.",
        "lat": 50.8214,
        "lng": -0.1507,
        "url": "https://www.brightoni360.co.uk/plan-your-visit"
      },
      {
        "nome": "West Pier",
        "testo": "The iron skeleton of the old pier, closed in 1975 and wrecked by fires and storms, rising out of the sea in front of the beach. At sunset, with the winter starling murmurations, it is one of the most famous views in the city.",
        "come": "From the seafront, near the Brighton i360.",
        "quando": "At sunset.",
        "tempo": "30 minutes",
        "costo": "free",
        "lat": 50.8208,
        "lng": -0.1511
      },
      {
        "nome": "Brighton Museum & Art Gallery",
        "testo": "The museum in the Royal Pavilion gardens, with decorative arts, fashion and collections on the history of the city.",
        "come": "Next to the Royal Pavilion.",
        "quando": "On a rainy day.",
        "tempo": "1 hour",
        "costo": "£10.50 (about €12, 2026)",
        "orari": "Tuesday to Sunday 10am-5pm; closed Mondays, except bank holidays.",
        "lat": 50.8234,
        "lng": -0.1379,
        "url": "https://brightonmuseums.org.uk/brighton-museum-art-gallery/plan-your-visit/"
      },
      {
        "nome": "Volk's Electric Railway",
        "testo": "The oldest electric railway in the world still running, from 1883: a little wooden train that runs along the beach from the Aquarium to Black Rock in about twelve minutes.",
        "come": "From the stop near the Palace Pier. Cards only.",
        "quando": "In summer, from Easter to the end of September.",
        "tempo": "30 minutes",
        "costo": "£5.40 single, £7 return (2026)",
        "orari": "From Easter to 30 September every day, every 15 minutes; closed in winter.",
        "lat": 50.8182,
        "lng": -0.1291,
        "url": "https://volksrailway.org.uk/"
      },
      {
        "nome": "Kemp Town",
        "testo": "The district east of the Palace Pier, with grand Georgian squares facing the sea, St James's Street and the heart of Brighton's LGBTQ+ scene.",
        "come": "On foot from the Palace Pier, heading east.",
        "quando": "In the evening, for dinner.",
        "tempo": "1-2 hours",
        "costo": "free",
        "lat": 50.8189,
        "lng": -0.1225
      },
      {
        "nome": "Hove",
        "testo": "The twin town to the west, more residential, with a wide promenade, lawns and rows of colourful beach huts.",
        "come": "On foot along the seafront from the West Pier, or by bus.",
        "quando": "On a Sunday morning.",
        "tempo": "1-2 hours",
        "costo": "free",
        "lat": 50.8235,
        "lng": -0.1644
      },
      {
        "nome": "Preston Manor",
        "testo": "An Edwardian country house in the north of the city, with period interiors, the kitchens below stairs and the walled garden.",
        "come": "By bus towards Preston Park.",
        "quando": "Friday to Monday, the only days it opens.",
        "tempo": "1 hour",
        "costo": "£14 (about €16, 2026)",
        "orari": "From mid-March to 30 November, Friday to Monday 10am-5pm; cards only.",
        "lat": 50.8425,
        "lng": -0.1501,
        "url": "https://brightonmuseums.org.uk/preston-manor-gardens/plan-your-visit/"
      },
      {
        "nome": "Devil's Dyke",
        "testo": "The deepest valley in the South Downs, north of Brighton, with grassland on the hilltop and views over the Sussex countryside. It is the place for a short walk out of town.",
        "come": "Bus 77 from the Palace Pier, with more services in summer, or by car.",
        "quando": "On a clear day.",
        "tempo": "half a day",
        "costo": "free",
        "lat": 50.885,
        "lng": -0.205
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "In the morning, North Laine on the way down from the station",
          "The Royal Pavilion at opening time",
          "The Lanes and lunch",
          "The Palace Pier, the West Pier and the Brighton i360 at sunset"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "First day as above",
          "Second day at the Seven Sisters: bus 12 or 12X to Exceat, cliffs as far as Birling Gap"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "The two days as above",
          "The third: Hove in the morning, Devil's Dyke in the afternoon, Kemp Town in the evening"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centre and the Lanes",
        "perChi": "anyone who wants everything on foot",
        "testo": "Close to the sea and the Royal Pavilion. On Friday and Saturday nights it is the noisiest area."
      },
      {
        "nome": "Kemp Town",
        "perChi": "anyone looking for bars and a bit of calm",
        "testo": "East of the Pier, with the Georgian squares and the LGBTQ+ life of St James's Street."
      },
      {
        "nome": "Hove",
        "perChi": "anyone who wants a quiet night's sleep",
        "testo": "Residential, with a calm seafront, a 20-30 minute walk from the centre."
      },
      {
        "nome": "North Laine and the station",
        "perChi": "anyone arriving late or leaving early",
        "testo": "Among the independent shops, a few minutes from the trains to London and Gatwick."
      }
    ],
    gite: [
      {
        "nome": "Seven Sisters",
        "distanza": "about 1 hour by bus",
        "come": "Bus 12 or 12X to Seven Sisters Country Park, at Exceat.",
        "testo": "The white chalk cliffs on the Channel, to walk as far as Birling Gap."
      },
      {
        "nome": "Lewes",
        "distanza": "about 15 minutes by train",
        "come": "Southern trains from Brighton.",
        "testo": "A historic market town with a Norman castle and timber-framed houses, at the foot of the South Downs."
      },
      {
        "nome": "London",
        "distanza": "about 1 hour by train",
        "come": "Southern to Victoria, Thameslink to London Bridge and St Pancras.",
        "testo": "For anyone doing the route the other way round, based in Brighton."
      }
    ],
    sapori: [
      { nome: 'Fish and chips', testo: 'Fish fried in batter with chips, to eat on the beach.' },
      { nome: 'Vegetarian food', testo: 'Brighton is one of the most vegetarian cities in the UK, with plenty of places in North Laine.' },
      { nome: 'Pier doughnuts', testo: 'The hot sugared mini doughnuts sold on the Palace Pier.' },
    ],
    attenzioni: [
      'On Friday and Saturday nights the centre is full of stag and hen parties.',
      'The beach is pebbly: you need water shoes to swim.',
      'The Booth Museum of Natural History has been closed for works since April 2025.',
    ],
    faq: [
      {
        "domanda": "Can you do Brighton as a day trip from London?",
        "risposta": "Yes, the train takes about an hour from Victoria or London Bridge. In a day you can see the Royal Pavilion, the Lanes and the Pier."
      },
      {
        "domanda": "What is Brighton like at the weekend?",
        "risposta": "On Friday and Saturday nights the centre fills up with parties and stag and hen dos. If you want some calm, stay in Hove or Kemp Town, or pick a Sunday."
      },
      {
        "domanda": "How much is the Royal Pavilion?",
        "risposta": "£21.50 for an adult, with 5% off online (2026). With a dated train ticket there is a two-for-one offer."
      },
      {
        "domanda": "Is the Brighton i360 open?",
        "risposta": "Yes, the observation tower is open all year, with shorter hours in winter. The flight lasts about 25 minutes and rises to 138 metres."
      },
      {
        "domanda": "How do you get from Brighton to the Seven Sisters?",
        "risposta": "On bus 12 or 12X to Seven Sisters Country Park, at Exceat, in about an hour. On Sundays and bank holidays the 13X also stops at Birling Gap."
      },
      {
        "domanda": "How do you get to Brighton from Gatwick?",
        "risposta": "By train, with Thameslink or Southern, in about half an hour and without going through London."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['brighton-seven-sisters'],
    imageAlt: 'The India Gate and the domes of Brighton\'s Royal Pavilion',
    immagine: '/images/viaggi/brighton-seven-sisters/giorno-02-royal-pavilion.jpg',
  },
  {
    slug: 'seven-sisters',
    paeseSlug: 'inghilterra',
    ordine: 10,
    nome: 'Seven Sisters',
    tipologia: ['natura', 'scogliere', 'trekking', 'parco nazionale'],
    giorniConsigliati: '1 day',
    visitataPersonalmente: true,
    miaEsperienza:
      "The Seven Sisters are pure nature: if you catch a good day they're incredible, while if it rains or it's windy it might not be so pleasant. You can do them as a day trip or a weekend from London.",
    introduzione:
      'The seven white chalk cliffs between Seaford and Eastbourne, on the Channel, inside the South Downs National Park. You walk them on the grass along the clifftops, up and down between the "sisters", from the mouth of the Cuckmere to Birling Gap and Beachy Head.',
    percheAndarci:
      "For one of England's most famous coastal landscapes, less than two hours from London, with a walk that can be adapted to any pair of legs.",
    cosaVedere: [
      'Cuckmere Haven',
      'The view from Seaford Head',
      'The cliffs from Exceat to Birling Gap',
      'Belle Tout lighthouse',
      'Beachy Head',
    ],
    cosaFare: [
      'The walk from Seven Sisters Country Park to Birling Gap',
      'Going down to the beach at Birling Gap',
      'A pub lunch in Alfriston or East Dean',
    ],
    comeArrivare:
      'From Brighton, Brighton & Hove buses 12 and 12X stop in front of the Seven Sisters Country Park visitor centre, at Exceat; the 12X runs up to every 12 minutes. By train from London you can get to Seaford, from where you walk to the park in about an hour, or to Eastbourne, at the other end. By car there are pay car parks at Exceat and Birling Gap.',
    comeSpostarsi:
      'On foot along the coast. On Sundays and bank holidays the 13X bus stops at Birling Gap and Beachy Head every 15 minutes; on other days you catch the bus at East Dean, a couple of kilometres from Birling Gap.',
    periodoMigliore: 'May to September, on a day with no rain and little wind',
    costi:
      'The path is free; you only pay for parking and the bus. If you stay in Brighton, the budget is the same as for the city.',
    erroriDaEvitare: [
      'Going close to the cliff edge: the chalk collapses without warning',
      'Setting off in rain or strong wind: the path is exposed and slippery',
      "Not bringing water and food: there is nothing between Exceat and Birling Gap",
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Seven Sisters Country Park",
        "testo": "The park at the mouth of the River Cuckmere, at Exceat, with the visitor centre, café, toilets and bike hire. It is the easiest starting point for the cliffs.",
        "come": "Bus 12 or 12X from Brighton or Eastbourne, with the stop in front of the visitor centre.",
        "quando": "Early in the morning, to have the path almost to yourself.",
        "tempo": "half an hour for the stop",
        "costo": "free; parking £3.50 up to 2 hours, £5 up to 4, £7 for longer (2026)",
        "orari": "Visitor centre 10am-4pm in winter; toilets 7am-6pm; car parks closed at night.",
        "lat": 50.7752,
        "lng": 0.1533,
        "url": "https://www.sevensisters.org.uk/"
      },
      {
        "nome": "Cuckmere Haven",
        "testo": "The mouth of the River Cuckmere, with the meanders in the green valley and the pebble beach. From the beach you can see the first of the seven cliffs.",
        "come": "On foot from the visitor centre, on a flat path of about three kilometres along the river.",
        "quando": "At low tide.",
        "tempo": "1 hour",
        "costo": "free",
        "lat": 50.764,
        "lng": 0.147
      },
      {
        "nome": "Seaford Head and Hope Gap",
        "testo": "The headland on the west bank of the Cuckmere, with the coastguard cottages in front of the Seven Sisters: it is the most famous view, the postcard one. A little further west is the rocky beach at Hope Gap.",
        "come": "On foot from Seaford along the cliff, or from the west bank of the river.",
        "quando": "In the afternoon, with the sun on the cliffs.",
        "tempo": "2 hours",
        "costo": "free",
        "lat": 50.7561,
        "lng": 0.139
      },
      {
        "nome": "The cliffs from Exceat to Birling Gap",
        "testo": "The classic walk, about 6 kilometres on the grass along the top of the seven \"sisters\", climbing and dropping between one summit and the next, with the sea below.",
        "come": "On foot from the visitor centre, first towards the sea and then east.",
        "quando": "On a clear day with little wind.",
        "tempo": "2-3 hours",
        "costo": "free",
        "lat": 50.76,
        "lng": 0.16,
        "consiglio": "Always walk well back from the edge: the cliffs retreat by up to a metre a year and can collapse without warning."
      },
      {
        "nome": "Birling Gap",
        "testo": "A small National Trust cove at the end of the Seven Sisters, with coastguard cottages on the cliff edge, a café, a shop and a 50-step staircase down to the beach.",
        "come": "On foot along the cliffs, by car, or by bus: direct on Sundays and bank holidays with the 13X, from East Dean on other days.",
        "quando": "In the afternoon, at the end of the walk.",
        "tempo": "1 hour",
        "costo": "free; parking £2 for 1 hour, £4 for 2, £8 for longer (2026)",
        "orari": "Café, shop and toilets 10am-4pm; cliffs open from dawn to dusk.",
        "lat": 50.7433,
        "lng": 0.2029,
        "url": "https://www.nationaltrust.org.uk/visit/sussex/birling-gap-and-the-seven-sisters",
        "consiglio": "Beach access can close at short notice because of cliff falls."
      },
      {
        "nome": "Belle Tout",
        "testo": "The old lighthouse on the cliff between Birling Gap and Beachy Head, moved back from the edge in 1999 because the edge was getting closer. Today it is a private B&B and you see it from outside.",
        "come": "On foot from Birling Gap, on a short loop.",
        "quando": "At sunset.",
        "tempo": "1 hour",
        "costo": "free",
        "lat": 50.7384,
        "lng": 0.2146
      },
      {
        "nome": "Beachy Head",
        "testo": "The highest chalk sea cliff in Britain, above Eastbourne, with the red-and-white striped lighthouse down in the sea at the foot of the cliff.",
        "come": "On foot from Birling Gap or from Eastbourne along the South Downs Way, or with the 13X bus on Sundays and bank holidays.",
        "quando": "Under a clear sky.",
        "tempo": "1-2 hours",
        "costo": "free",
        "lat": 50.7375,
        "lng": 0.2475
      },
      {
        "nome": "Alfriston",
        "testo": "A village in the Cuckmere valley, with timber-framed houses, old pubs and the Clergy House, the first property bought by the National Trust, in 1896.",
        "come": "By car, or at summer weekends on the 47 bus from Seven Sisters Country Park.",
        "quando": "At lunchtime.",
        "tempo": "2 hours",
        "costo": "the village is free",
        "lat": 50.808,
        "lng": 0.155
      },
      {
        "nome": "Friston Forest",
        "testo": "The beech woods above Exceat, with paths for walking and cycling and the village of Westdean tucked among the trees. It is the right shelter on windy days.",
        "come": "On foot from Seven Sisters Country Park, across the road.",
        "quando": "When there is a strong wind on the coast.",
        "tempo": "1-2 hours",
        "costo": "free",
        "lat": 50.7814,
        "lng": 0.1531
      }
    ],
    programmi: [
      {
        "titolo": "Half a day",
        "tappe": [
          "Bus to Seven Sisters Country Park",
          "On foot to Cuckmere Haven and back"
        ]
      },
      {
        "titolo": "1 day",
        "tappe": [
          "Bus to Seven Sisters Country Park and the riverside path to the sea",
          "The cliffs as far as Birling Gap and the steps down to the beach",
          "Belle Tout, then the bus from Birling Gap or East Dean"
        ]
      },
      {
        "titolo": "1 day, the full route",
        "tappe": [
          "Train to Seaford and Seaford Head",
          "Cuckmere Haven, the Seven Sisters, Birling Gap",
          "Belle Tout, Beachy Head and Eastbourne: about 22 kilometres, only for fit walkers"
        ]
      }
    ],
    zone: [
      {
        "nome": "Brighton",
        "perChi": "anyone who wants the city in the evening",
        "testo": "An hour by bus from the park, with every service and trains to London."
      },
      {
        "nome": "Seaford",
        "perChi": "anyone who wants to set off early on foot",
        "testo": "A quiet small town with a station, at the start of the route."
      },
      {
        "nome": "Eastbourne",
        "perChi": "anyone finishing at Beachy Head",
        "testo": "The seaside town at the other end of the cliffs, with trains to London Victoria."
      }
    ],
    gite: [
      {
        "nome": "Brighton",
        "distanza": "about 1 hour by bus",
        "come": "Bus 12 or 12X from Seven Sisters Country Park.",
        "testo": "The Royal Pavilion, the Lanes and the Palace Pier."
      },
      {
        "nome": "Lewes",
        "distanza": "about 30 minutes by car",
        "come": "By car, or by train via Seaford or Brighton.",
        "testo": "The small town with the Norman castle and the breweries, at the foot of the South Downs."
      }
    ],
    faq: [
      {
        "domanda": "Can you see the Seven Sisters as a day trip from London?",
        "risposta": "Yes: train to Seaford or Brighton, then on foot or by bus to Seven Sisters Country Park, the cliffs as far as Birling Gap and the bus to Eastbourne, where trains leave for London."
      },
      {
        "domanda": "What is the best view of the Seven Sisters?",
        "risposta": "From Seaford Head, on the west bank of the Cuckmere, with the coastguard cottages in the foreground. From Birling Gap you see the cliffs from below, from the beach."
      },
      {
        "domanda": "How long is the walk?",
        "risposta": "From Seven Sisters Country Park to Birling Gap is about 6 kilometres with plenty of climbs. The full route from Seaford to Eastbourne is about 22 kilometres."
      },
      {
        "domanda": "Is it dangerous?",
        "risposta": "The path is easy, but the cliffs collapse: walk well back from the edge and don't linger under the cliff faces on the beach."
      },
      {
        "domanda": "How much is parking?",
        "risposta": "At Seven Sisters Country Park from £3.50 for two hours to £7 for more than four; at Birling Gap from £2 to £8, free for National Trust members (2026)."
      },
      {
        "domanda": "Is it worth going if it rains?",
        "risposta": "Better not: in rain and wind the path is slippery and exposed, and the cliffs lose their light. Choose the day by checking the forecast."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['brighton-seven-sisters'],
    imageAlt: 'The white cliffs of the Seven Sisters seen from the shingle beach at Cuckmere Haven',
    immagine: '/images/viaggi/brighton-seven-sisters/giorno-03-seven-sisters.jpg',
  },
  {
    slug: 'kingston-richmond-park',
    paeseSlug: 'inghilterra',
    ordine: 11,
    nome: 'Kingston upon Thames and Richmond Park',
    tipologia: ['parchi', 'fiume', 'natura', 'cittadina'],
    giorniConsigliati: '1 day',
    visitataPersonalmente: true,
    miaEsperienza:
      "Kingston upon Thames is where I studied, and it has a beautiful park. And then there's Richmond Park.",
    introduzione:
      "The Thames south-west of London, half an hour by train from Waterloo: Kingston upon Thames, the old market town where Anglo-Saxon kings were crowned, and Richmond Park, the largest of the Royal Parks, with free-roaming deer, woodland and the protected view from Richmond Hill.",
    percheAndarci:
      "For a day of greenery and river without leaving London: you walk among the deer, look at St Paul's from afar and finish in a pub on the Thames.",
    cosaVedere: [
      'The Kingston riverside and Kingston Bridge',
      'The Coronation Stone',
      'Richmond Park and its deer',
      "King Henry's Mound and the view of St Paul's",
      'The Isabella Plantation',
      'The view from Richmond Hill',
    ],
    cosaFare: [
      'Crossing Richmond Park on foot from Kingston to Richmond',
      'An afternoon by bike on the Tamsin Trail',
      'The walk along the Thames from Richmond to Kingston',
    ],
    comeArrivare:
      'From London Waterloo, South Western Railway trains reach Richmond in under 20 minutes and Kingston in about half an hour. Richmond is also the end of the District line and the London Overground. Richmond is in zone 4, Kingston in zone 6: you pay with a contactless card or Oyster, as in the rest of London.',
    comeSpostarsi:
      'Buses 65 and 371 run between Kingston and Richmond; the 371 also stops at the park\'s Richmond Gate. Inside Richmond Park you go on foot or by bike, with Parkcycle hire at the Roehampton Gate car park. Along the river, the Thames Path links the two towns in about 9 kilometres.',
    periodoMigliore: 'April to October; in late April and early May the azaleas of the Isabella Plantation are in flower, and in autumn it is the deer rutting season',
    costi:
      'The parks are free; you only pay for transport, cafés and houses such as Hampton Court and Ham House. If you stay in London, the budget is the same as for the city.',
    erroriDaEvitare: [
      'Getting close to the deer or feeding them: keep at least 50 metres away',
      'Counting on the gates being open at night in November and February: during the deer cull the pedestrian gates close from 8pm to 7.30am',
      'Letting your dog off the lead between May and July, when the fawns are born: it must stay on a lead',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Richmond Park",
        "testo": "The largest of London's Royal Parks, about 1,000 hectares, and a National Nature Reserve. About 630 red and fallow deer live here, roaming free since 1637, when Charles I enclosed it as a hunting park.",
        "come": "From Richmond Gate, at the top of Richmond Hill, or from Kingston Gate. You cross it on foot or by bike on the main roads and on the Tamsin Trail.",
        "quando": "Early in the morning, when the deer are easier to spot.",
        "tempo": "half a day",
        "costo": "free",
        "orari": "Pedestrian gates usually open day and night; during the deer cull, in November and February, open 7.30am-8pm. Vehicle gates from 7.30am (7am in summer time) to dusk.",
        "lat": 51.4433,
        "lng": -0.275,
        "url": "https://www.royalparks.org.uk/visit/parks/richmond-park",
        "consiglio": "Keep at least 50 metres from the deer, without touching or feeding them. Between September and November the stags are rutting and may charge."
      },
      {
        "nome": "King Henry's Mound",
        "testo": "A Bronze Age burial mound in the gardens of Pembroke Lodge, the highest point in the park. From here a gap in the trees frames the dome of St Paul's, more than fifteen kilometres away: it is a protected view, and no building may block it.",
        "come": "On foot from Richmond Gate, in the gardens of Pembroke Lodge. There is a fixed telescope.",
        "quando": "On clear days.",
        "tempo": "15 minutes",
        "costo": "free",
        "lat": 51.4449,
        "lng": -0.2948,
        "url": "https://www.royalparks.org.uk/visit/parks/richmond-park/king-henrys-mound"
      },
      {
        "nome": "Pembroke Lodge",
        "testo": "A Georgian mansion on the park's ridge, near Richmond Gate, with a café, tea rooms and gardens looking out over the Thames valley.",
        "come": "A few minutes on foot from Richmond Gate.",
        "quando": "For a break halfway round.",
        "tempo": "1 hour",
        "costo": "the gardens are free",
        "orari": "Tea rooms from 9am until shortly before dusk.",
        "lat": 51.4425,
        "lng": -0.2944
      },
      {
        "nome": "Isabella Plantation",
        "testo": "A woodland garden of about 16 hectares, with streams, ponds and the national collection of Kurume azaleas. Open to the public since 1953, it is the most colourful spot in the park in spring.",
        "come": "On foot from Kingston Gate or Pembroke Lodge. Dogs on a lead only.",
        "quando": "Between late April and early May, for the azaleas; in autumn for the colours.",
        "tempo": "1 hour",
        "costo": "free",
        "orari": "Open all year.",
        "lat": 51.4332,
        "lng": -0.2774,
        "url": "https://www.royalparks.org.uk/visit/parks/richmond-park/isabella-plantation"
      },
      {
        "nome": "Pen Ponds",
        "testo": "The two ponds in the middle of the park, dug in the eighteenth century, with waterbirds and a kiosk nearby. Deer are often seen around them.",
        "come": "On foot from the centre of the park, on the paths through the long grass.",
        "quando": "In the afternoon.",
        "tempo": "30 minutes",
        "costo": "free",
        "lat": 51.4396,
        "lng": -0.2686,
        "consiglio": "Around the ponds dogs must be kept on a lead."
      },
      {
        "nome": "Richmond Hill and Terrace Gardens",
        "testo": "The hill above Richmond, with the view over the bend of the Thames between meadows and woods. It is protected by an Act of Parliament of 1902, and is often described as the only view protected in this way. The Terrace Gardens run down from the hill to the river.",
        "come": "On foot from the park's Richmond Gate, or uphill from the centre of Richmond.",
        "quando": "At sunset.",
        "tempo": "45 minutes",
        "costo": "free",
        "lat": 51.4541,
        "lng": -0.301,
        "url": "https://www.richmond.gov.uk/preserving_the_view_from_richmond_hill"
      },
      {
        "nome": "Richmond Bridge and the riverside",
        "testo": "The five-arched stone bridge over the Thames, with the lawns and pubs of the Richmond riverside. In summer there are boats for hire and people sitting on the grass.",
        "come": "Ten minutes on foot from Richmond station.",
        "quando": "In the evening, for a drink by the river.",
        "tempo": "1 hour",
        "costo": "free",
        "lat": 51.4573,
        "lng": -0.3073
      },
      {
        "nome": "Ham House",
        "testo": "A seventeenth-century house on the Thames, between Richmond and Kingston, owned by the National Trust, with period interiors and formal gardens.",
        "come": "On foot along the Thames Path from Richmond, or on buses 65 and 371 to Petersham.",
        "quando": "At weekends, when you can look round without a guided tour.",
        "tempo": "2 hours",
        "costo": "paid entry",
        "orari": "House 11.30am-3.30pm, garden 10am-5pm; in November on weekdays by guided tour only.",
        "lat": 51.4442,
        "lng": -0.3142,
        "url": "https://www.nationaltrust.org.uk/visit/london/ham-house-and-garden"
      },
      {
        "nome": "The Kingston riverside and Kingston Bridge",
        "testo": "The bank of the Thames around Kingston Bridge, with pubs, boats and the walk north towards Canbury Gardens. It is the heart of the town, a few minutes from the station.",
        "come": "On foot from Kingston station.",
        "quando": "In the afternoon and evening.",
        "tempo": "1 hour",
        "costo": "free",
        "lat": 51.4111,
        "lng": -0.3089
      },
      {
        "nome": "Coronation Stone",
        "testo": "A sarsen stone in front of Kingston's Guildhall: according to tradition seven Anglo-Saxon kings were crowned here in the tenth century, Athelstan among them. This is where the name Kingston, \"the king's town\", comes from.",
        "come": "On foot from the centre, next to the Guildhall.",
        "quando": "As you pass through the centre.",
        "tempo": "15 minutes",
        "costo": "free",
        "lat": 51.4084,
        "lng": -0.3068
      },
      {
        "nome": "Out of Order",
        "testo": "David Mach's 1989 sculpture: twelve red telephone boxes toppled against each other like dominoes, in Old London Road. It has become one of the symbols of Kingston.",
        "come": "On foot from the centre, towards Norbiton.",
        "quando": "As you pass through the centre.",
        "tempo": "10 minutes",
        "costo": "free",
        "lat": 51.4108,
        "lng": -0.3005
      },
      {
        "nome": "Bushy Park and Hampton Court Palace",
        "testo": "On the other side of Kingston Bridge is Bushy Park, the second-largest Royal Park, with about 320 deer and the Diana Fountain in the middle of a round pond. At the far end is Hampton Court Palace, Henry VIII's palace, with the Tudor kitchens and the maze.",
        "come": "On foot across Kingston Bridge and through Bushy Park, or on buses 111 and 216 from Kingston to Hampton Court.",
        "quando": "A full day, if you add the palace.",
        "tempo": "half a day",
        "costo": "Bushy Park free; Hampton Court paid entry",
        "lat": 51.4128,
        "lng": -0.3381,
        "url": "https://www.royalparks.org.uk/visit/parks/bushy-park"
      }
    ],
    programmi: [
      {
        "titolo": "Half a day",
        "tappe": [
          "Train from Waterloo to Richmond",
          "Up Richmond Hill and into the park through Richmond Gate",
          "Pembroke Lodge and King Henry's Mound, then back to Richmond for the river"
        ]
      },
      {
        "titolo": "1 day",
        "tappe": [
          "Train from Waterloo to Kingston: the river, the Coronation Stone and Out of Order",
          "Richmond Park from Kingston Gate, the Isabella Plantation, Pen Ponds and Pembroke Lodge",
          "Out through Richmond Gate, Richmond Hill, the Terrace Gardens and Richmond Bridge",
          "Train from Richmond to Waterloo"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "First day as above",
          "Second day: Hampton Court Palace and Bushy Park, or Ham House and Kew Gardens"
        ]
      }
    ],
    zone: [
      {
        "nome": "Richmond",
        "perChi": "anyone who wants the river and the park on the doorstep",
        "testo": "Elegant, with pubs on the Thames and trains to Waterloo and the District line."
      },
      {
        "nome": "Kingston upon Thames",
        "perChi": "anyone who wants a lively town",
        "testo": "Shops, restaurants and the riverside, with Hampton Court and Bushy Park nearby."
      },
      {
        "nome": "Central London",
        "perChi": "anyone doing it as a day trip",
        "testo": "Trains to Richmond and Kingston leave Waterloo frequently, and you go back into the city in the evening."
      }
    ],
    gite: [
      {
        "nome": "Hampton Court Palace",
        "distanza": "a few minutes by bus from Kingston",
        "come": "Bus 111 or 216 from Kingston, or on foot through Bushy Park.",
        "testo": "Henry VIII's palace on the Thames, with the Tudor kitchens, the gardens and the hedge maze."
      },
      {
        "nome": "Kew Gardens",
        "distanza": "one stop after Richmond",
        "come": "District line or London Overground to Kew Gardens.",
        "testo": "The UNESCO-listed botanic garden, with its great Victorian glasshouses."
      },
      {
        "nome": "Brighton",
        "distanza": "about 1 hour by train from London",
        "come": "Southern trains from Victoria or Thameslink from London Bridge.",
        "testo": "The seaside town, with the Royal Pavilion and the Palace Pier, and the Seven Sisters cliffs nearby."
      }
    ],
    faq: [
      {
        "domanda": "How do you get to Richmond Park from London?",
        "risposta": "By train from Waterloo, or on the District line or London Overground, to Richmond; then on foot or on the 371 bus to Richmond Gate. From Kingston you enter through Kingston Gate."
      },
      {
        "domanda": "Do you have to pay to enter Richmond Park?",
        "risposta": "No, it is free. You only pay for the cafés and bike hire."
      },
      {
        "domanda": "Where can you see the deer?",
        "risposta": "All over the park, especially in the grassland around Pen Ponds and towards the centre, early in the morning. Keep at least 50 metres away and don't feed them."
      },
      {
        "domanda": "What is the view from King Henry's Mound?",
        "risposta": "A gap in the trees, in the gardens of Pembroke Lodge, that frames the dome of St Paul's from more than fifteen kilometres away. It is protected: no building may block it."
      },
      {
        "domanda": "Is Richmond Park open in the evening?",
        "risposta": "The pedestrian gates usually stay open day and night, but in November and February, during the deer cull, they close from 8pm to 7.30am. Cars can enter from 7.30am until dusk."
      },
      {
        "domanda": "How long does it take from Waterloo to Kingston?",
        "risposta": "About half an hour on a South Western Railway train. Under 20 minutes to Richmond."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['brighton-seven-sisters'],
    imageAlt: 'A red deer in the long grass of Richmond Park, south-west of London',
    immagine: '/images/viaggi/brighton-seven-sisters/giorno-01-richmond-park.jpg',
  },
]
