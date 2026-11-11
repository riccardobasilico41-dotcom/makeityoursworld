import type { Destinazione } from '@/lib/types'

const IMG = '/images/viaggi/scozia-highlands-distillerie'

export const destinazioniScozia: Destinazione[] = [
  {
    slug: 'edimburgo',
    paeseSlug: 'scozia',
    ordine: 1,
    nome: 'Edinburgh',
    tipologia: ['città', 'storia', 'cultura'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    introduzione:
      "Scotland's capital, built on volcanic hills. The medieval Old Town runs down from the castle along the Royal Mile to the Palace of Holyrood; below it lies the Georgian New Town. Together they are a UNESCO World Heritage Site.",
    percheAndarci:
      "For the castle on its rock, the alleys of the Old Town and the views from Calton Hill and Arthur's Seat. It's also the most convenient starting point for the road trip.",
    cosaVedere: ['Edinburgh Castle', 'The Royal Mile', "Holyrood and Arthur's Seat", 'Calton Hill', 'The New Town and Princes Street Gardens', 'The National Museum of Scotland'],
    cosaFare: ["Climbing Arthur's Seat", 'Sunset from Calton Hill', 'Getting lost in the closes, the alleys that run down from the Royal Mile'],
    comeArrivare:
      'Direct flights from Italy to Edinburgh Airport; from within the United Kingdom also by train, to Waverley station in the centre. From the airport the tram reaches Princes Street in 30-35 minutes for about £7.90, ticket from the machine before boarding; Airlink 100 goes to Waverley in about half an hour for about £6; a taxi costs about £25-30. Direct trains from London King\'s Cross take about four and a half hours. A UK ETA is required, £20 (2026).',
    comeSpostarsi: 'On foot, by bus and tram. Pick up the car on the day you leave for the Highlands.',
    periodoMigliore: 'May to September; in August there are the festivals and prices rise a lot',
    costi:
      'Castle: £23.50 online, £26 at the gate (adults, 2026). Since July 24, 2026 there is a 5% visitor levy on the price of accommodation, for the first 5 nights. Rough daily budget per person, sharing a double: low €90-120, mid €170-240, high over €350 (much more in August).',
    erroriDaEvitare: [
      'Going to the castle without a ticket: tickets often sell out well in advance',
      'Booking at the last minute in August, during the Fringe',
      "Keeping the car in the city: you don't need it and parking is expensive",
    ],
    miaEsperienza: 'I was there in July, on my trip around Scotland.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Edinburgh Castle",
        "testo": "The fortress on top of Castle Rock, above the city. Inside are the Honours of Scotland, the Scottish Crown Jewels, and the 12th-century St Margaret's Chapel, regarded as the oldest building in Edinburgh.",
        "come": "On foot from the top of the Royal Mile. The online ticket is cheaper and worth buying ahead: when online tickets sell out, none are sold at the castle.",
        "quando": "At opening time, from 9:30.",
        "tempo": "2-3 hours",
        "costo": "£23.50 online, £26 at the gate (adults, 2026)",
        "orari": "Daily from 9:30; closes at 18 April-September and 17 October-March, last entry one hour before.",
        "lat": 55.9486,
        "lng": -3.1999,
        "url": "https://www.edinburghcastle.scot"
      },
      {
        "nome": "Royal Mile",
        "testo": "The Old Town street that runs down from the castle to the Palace of Holyrood, with St Giles' Cathedral halfway. On both sides open the closes, narrow, steep alleys.",
        "come": "On foot, from top to bottom.",
        "quando": "Early morning or in the evening, when there are fewer people.",
        "tempo": "half a day",
        "costo": "free",
        "lat": 55.95,
        "lng": -3.188
      },
      {
        "nome": "Arthur's Seat",
        "testo": "The hill of an ancient volcano inside Holyrood Park, a short walk from the Old Town. From the top you see the city and the sea.",
        "come": "On foot from Holyrood, on uphill paths. With the wind at the top it is cold even in summer.",
        "quando": "With a clear sky, best in the morning or at sunset.",
        "tempo": "2 hours there and back",
        "costo": "free",
        "lat": 55.9441,
        "lng": -3.1618
      },
      {
        "nome": "Calton Hill",
        "testo": "The hill above the end of Princes Street, with neoclassical monuments and a view over the Old Town, the castle and Arthur's Seat.",
        "come": "On foot, with a short climb.",
        "quando": "At sunset.",
        "tempo": "1 hour",
        "costo": "free",
        "lat": 55.9553,
        "lng": -3.1826
      },
      {
        "nome": "Palace of Holyroodhouse",
        "testo": "The monarch's official residence in Scotland, at the foot of the Royal Mile, with Mary Queen of Scots' chambers and the ruins of Holyrood Abbey in the grounds. Opposite is the Scottish Parliament, a much-debated contemporary building.",
        "come": "On foot down the Royal Mile; ticket with audio guide, better online.",
        "quando": "Morning, before climbing Arthur's Seat, which starts from here.",
        "tempo": "1.5 hours",
        "costo": "ticketed, with audio guide",
        "orari": "Closed when the monarch is in residence, usually late June to early July, and on some winter days: check the calendar.",
        "lat": 55.9527,
        "lng": -3.1722,
        "url": "https://www.rct.uk/visit/palace-of-holyroodhouse"
      },
      {
        "nome": "National Museum of Scotland",
        "testo": "The national museum, free, with Scotland's story from the Picts to Dolly the sheep, the Lewis chessmen and a big science and natural-history hall. The rooftop terrace looks at the castle.",
        "come": "On Chambers Street, five minutes from the Royal Mile via George IV Bridge.",
        "quando": "On a rainy afternoon.",
        "tempo": "2 hours",
        "costo": "free",
        "orari": "Daily 10-17.",
        "lat": 55.9469,
        "lng": -3.1897,
        "url": "https://www.nms.ac.uk/"
      },
      {
        "nome": "Scottish National Gallery and Princes Street Gardens",
        "testo": "The national gallery, free, with Raphael, Titian, Vermeer, Velázquez and Scottish painters such as Raeburn. It sits at the foot of the Mound, in the gardens dividing the Old Town from the New Town, below the castle.",
        "come": "On the Mound, two minutes from Waverley and Princes Street.",
        "quando": "Morning; the gardens in the afternoon with sun on the castle.",
        "tempo": "1.5 hours",
        "costo": "free",
        "orari": "Daily 10-17.",
        "lat": 55.9509,
        "lng": -3.1959,
        "url": "https://www.nationalgalleries.org/"
      },
      {
        "nome": "St Giles' Cathedral",
        "testo": "Edinburgh's main church, halfway down the Royal Mile, with its stone crown spire and the carved-wood Thistle Chapel of the Order of the Thistle. John Knox preached here.",
        "come": "On the Royal Mile, in Parliament Square. Free entry with a suggested donation; roof tours charged at some times.",
        "quando": "Mid-morning, on the way down from the castle.",
        "tempo": "30-45 minutes",
        "costo": "free entry, suggested donation",
        "lat": 55.9495,
        "lng": -3.1909,
        "url": "https://www.stgilescathedral.org.uk/"
      },
      {
        "nome": "Victoria Street and the Grassmarket",
        "testo": "The curving street of coloured shopfronts that drops from George IV Bridge to the Grassmarket, the old cattle market and hanging place, now full of pubs. From here you see the castle from below.",
        "come": "On foot from the Royal Mile; from the Grassmarket the Vennel steps lead to one of the best castle views.",
        "quando": "Early morning for photos; evening for the pubs.",
        "tempo": "1 hour",
        "costo": "free",
        "lat": 55.9478,
        "lng": -3.1945
      },
      {
        "nome": "Greyfriars Kirkyard",
        "testo": "The 17th-century graveyard with the castle above its tombs and the statue of Greyfriars Bobby, the dog said to have guarded his master's grave for years. Some headstones lent names to Harry Potter characters.",
        "come": "Enter from Candlemaker Row, next to the Bobby statue, steps from the National Museum.",
        "quando": "By day; in the evening there are ghost tours.",
        "tempo": "30 minutes",
        "costo": "free",
        "lat": 55.9469,
        "lng": -3.1925
      },
      {
        "nome": "The Real Mary King's Close",
        "testo": "17th-century lanes and houses buried beneath the City Chambers, visited only with a guide. The tour tells of Old Town life, the plague and the close's stories.",
        "come": "Entrance on the Royal Mile opposite St Giles. Timed guided tours, to be booked online.",
        "quando": "A rainy day; in summer slots sell out.",
        "tempo": "1 hour",
        "costo": "about £28.50 (2026), guided tour only",
        "lat": 55.95,
        "lng": -3.1905,
        "url": "https://www.realmarykingsclose.com/"
      },
      {
        "nome": "Dean Village and the Water of Leith",
        "testo": "An old mill village on the river, ten minutes from the West End, with stone houses and Telford's bridge. The Water of Leith path continues to the Scottish National Gallery of Modern Art and Stockbridge.",
        "come": "On foot from the end of Princes Street via Queensferry Street, down Bell's Brae.",
        "quando": "Sunday morning, with the Stockbridge market.",
        "tempo": "1-2 hours",
        "costo": "free",
        "lat": 55.952,
        "lng": -3.217,
        "consiglio": "It is a residential area: no drones and keep voices down between the houses."
      },
      {
        "nome": "Camera Obscura and World of Illusions",
        "testo": "A Victorian camera obscura at the top of a tower by the castle, projecting the city live onto a table, plus five floors of optical illusions. Best for families with children.",
        "come": "On Castlehill, at the top of the Royal Mile; cheaper online.",
        "quando": "With clear skies, for the projection.",
        "tempo": "1.5 hours",
        "costo": "about £25 at the desk, about £21 online (2026)",
        "lat": 55.949,
        "lng": -3.1957,
        "url": "https://www.camera-obscura.co.uk/"
      },
      {
        "nome": "Leith and the Royal Yacht Britannia",
        "testo": "Edinburgh's port, with seafood restaurants on the Shore and the royal family's yacht moored at Ocean Terminal. On board you see Queen Elizabeth's apartments and the engine room.",
        "come": "Tram from Princes Street to Ocean Terminal or Newhaven, about 20 minutes.",
        "quando": "Afternoon, staying in Leith for dinner.",
        "tempo": "half a day",
        "costo": "Britannia £23 online, £25 at the desk (from October 2026); the district is free to wander",
        "lat": 55.9822,
        "lng": -3.1772,
        "url": "https://www.royalyachtbritannia.co.uk/"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Castle at opening, with an online ticket",
          "Down the Royal Mile, with St Giles and The Real Mary King's Close",
          "Lunch, then Victoria Street, the Grassmarket and Greyfriars",
          "Holyrood and sunset from Calton Hill"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: castle, Royal Mile, St Giles, Victoria Street and Grassmarket, Calton Hill at sunset",
          "Day 2: Holyrood and Arthur's Seat in the morning; National Museum of Scotland; New Town, Princes Street Gardens and the Scottish National Gallery"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: castle, Royal Mile, Mary King's Close, Grassmarket",
          "Day 2: Holyrood, Arthur's Seat, National Museum, Calton Hill at sunset",
          "Day 3: Dean Village and Stockbridge in the morning, then Leith and Britannia, with dinner on the Shore; or a trip to Stirling"
        ]
      }
    ],
    zone: [
      {
        "nome": "Old Town",
        "perChi": "anyone who wants everything on foot",
        "testo": "Along and around the Royal Mile. Convenient, but noisy in the evening and expensive in summer.",
        "fascia": "160-300 €"
      },
      {
        "nome": "New Town",
        "perChi": "anyone who wants more calm",
        "testo": "The Georgian streets below the castle, a few minutes from Waverley station.",
        "fascia": "170-320 €"
      },
      {
        "nome": "Leith",
        "perChi": "anyone looking for lower prices and good restaurants",
        "testo": "The port, linked to the centre by tram.",
        "fascia": "110-200 €"
      }
    ],
    gite: [
      {
        "nome": "Stirling",
        "distanza": "50 minutes by train",
        "come": "Frequent trains from Waverley; from the station walk up to the castle in 15-20 minutes.",
        "testo": "The Stuart kings' castle above the plain of the independence battles, and the Wallace Monument on the hill opposite."
      },
      {
        "nome": "South Queensferry and the Forth bridges",
        "distanza": "15 km, 20 minutes by train",
        "come": "Train from Waverley to Dalmeny and a 15-minute walk down to the village.",
        "testo": "The village beneath the Forth Bridge, the red 19th-century railway bridge listed by UNESCO, flanked by two modern bridges. In season boats run to Inchcolm island."
      },
      {
        "nome": "Rosslyn Chapel",
        "distanza": "12 km, 45 minutes by bus",
        "come": "Lothian bus 37 from the centre to Roslin; timed entry, to be booked.",
        "testo": "A 15th-century chapel covered in stone carving, made famous by The Da Vinci Code. Around it is a wooded glen with the castle remains."
      },
      {
        "nome": "North Berwick",
        "distanza": "35 minutes by train",
        "come": "Direct train from Waverley; the town is right by the station.",
        "testo": "A seaside town with beaches, the Seabird Centre and boat trips to the Bass Rock, the world's largest gannet colony."
      }
    ],
    sapori: [
      { nome: 'Haggis', testo: "The national dish, made of lamb offal, oats and spices, served with neeps and tatties, turnip and potatoes." },
      { nome: 'Cullen skink', testo: 'A thick soup of smoked haddock, potatoes and onion.' },
    ],
    attenzioni: ['In August the city is full for the festivals: book accommodation months ahead.', "The wind on Arthur's Seat and Calton Hill: you need a jacket even in summer."],
    faq: [
      {
        "domanda": "How many days do you need in Edinburgh?",
        "risposta": "Two days for the castle, Old Town, Holyrood and New Town; three to add Arthur's Seat at leisure, Leith or a trip to Stirling."
      },
      {
        "domanda": "Do you need to book Edinburgh Castle?",
        "risposta": "Yes: online it costs £23.50 versus £26 at the gate (2026), and in summer, once online tickets are gone, none are left on site."
      },
      {
        "domanda": "Is August a good time for Edinburgh?",
        "risposta": "Only for the festivals, led by the Fringe: the city is full, rooms cost double and must be booked months ahead. May, June and September have long days and fewer people."
      },
      {
        "domanda": "Is there a tourist tax in Edinburgh?",
        "risposta": "Yes, since 24 July 2026: 5% of the accommodation price, for the first five nights."
      },
      {
        "domanda": "How do you get from the airport to central Edinburgh?",
        "risposta": "The tram reaches Princes Street in 30-35 minutes for about £7.90, ticket bought before boarding. Airlink 100 goes to Waverley in about half an hour for about £6."
      },
      {
        "domanda": "Where to stay in Edinburgh?",
        "risposta": "Old Town to have everything walkable, New Town for quiet near Waverley, Leith to spend less and eat well. Outside August a double costs about €110-300."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'Edinburgh Castle on its rock, above the green of Princes Street Gardens',
    immagine: `${IMG}/giorno-02-castello.webp`,
  },
  {
    slug: 'glasgow',
    paeseSlug: 'scozia',
    ordine: 2,
    nome: 'Glasgow',
    tipologia: ['città', 'musei', 'architettura'],
    giorniConsigliati: 'half a day or 1 day',
    visitataPersonalmente: true,
    introduzione: "Scotland's largest city, an hour from Edinburgh. Victorian, industrial and full of museums, with the medieval cathedral and the Necropolis on the hill next to it.",
    percheAndarci: "For a stop on the way to Loch Lomond: the cathedral, the Necropolis and Kelvingrove, the city's most famous art museum.",
    cosaVedere: ['Glasgow Cathedral', 'The Necropolis', 'Kelvingrove Art Gallery and Museum', 'The Victorian centre around George Square'],
    cosaFare: ['Climbing the Necropolis to see the cathedral from above', 'A walk in the West End and Kelvingrove Park'],
    comeArrivare:
      'From Glasgow Airport (GLA) the Glasgow Airport Express 500 bus runs to the centre, ending at Buchanan Bus Station, every 10 minutes and 24 hours a day, in about 15-25 minutes. From Edinburgh, ScotRail trains to Glasgow Queen Street leave several times an hour and take under an hour; by car it is about an hour and a quarter. There are direct trains from London Euston to Glasgow Central.',
    costi:
      'The city museums (Kelvingrove, Riverside, Burrell, GoMA, Provand\'s Lordship) and the Hunterian are free; you pay for Glasgow Science Centre (£15.50, about €18) and the Glenlee ship (£5.50, about €6), 2026 prices. From January 2027 there is a 5% visitor levy on the cost of accommodation. Indicative daily budget per person, sharing a double: low €70-100, mid €140-200, high over €300.',
    comeSpostarsi: 'On foot in the centre, the Subway for the West End.',
    erroriDaEvitare: ['Driving into the centre without checking the low emission zone rules: it is better to park outside and use the Subway'],
    miaEsperienza: 'I only passed through.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Glasgow Cathedral",
        "testo": "One of the few Scottish medieval churches to survive the Reformation intact. The crypt, with the tomb of St Mungo, the founder of the city, is the oldest part.",
        "come": "Free entry with a time slot chosen online; audio guide extra. It is a working church and may close for services.",
        "quando": "Weekday mornings.",
        "tempo": "45 minutes-1 hour",
        "costo": "Free, donations welcome",
        "orari": "1 April to 30 September Monday-Saturday 9.30am-5pm, Sunday 1pm-5pm; 1 October to 31 March Monday-Saturday 10am-4pm, Sunday 1pm-4pm. Last entry 45 minutes before closing. Closed 25-26 December and 1-2 January.",
        "lat": 55.863,
        "lng": -4.2346,
        "url": "https://www.historicenvironment.scot/visit-a-place/places/glasgow-cathedral/"
      },
      {
        "nome": "Necropolis",
        "testo": "The Victorian cemetery on the hill next to the cathedral, with obelisks, mausoleums and statues of the city's merchants. From the top you can see the whole of Glasgow, with the cathedral below.",
        "come": "On foot from the cathedral, across the bridge. The Friends of Glasgow Necropolis run guided walks on some weekends, to be booked on their website.",
        "quando": "In the afternoon light.",
        "tempo": "1 hour",
        "costo": "Free",
        "lat": 55.86217,
        "lng": -4.2334,
        "url": "https://www.glasgownecropolis.org/"
      },
      {
        "nome": "Provand's Lordship",
        "testo": "Glasgow's oldest house, from the fifteenth century, opposite the cathedral, with furnished rooms and a small garden. Next door is the St Mungo Museum, devoted to religions.",
        "come": "On foot, on the cathedral square.",
        "tempo": "30 minutes",
        "costo": "Free",
        "orari": "Monday-Thursday and Saturday 10am-5pm, Friday and Sunday 11am-5pm.",
        "lat": 55.8624,
        "lng": -4.2369,
        "url": "https://www.glasgowlife.org.uk/museums/venues/provands-lordship"
      },
      {
        "nome": "Kelvingrove Art Gallery and Museum",
        "testo": "The city's most visited museum, in a large red sandstone building: European and Scottish art, arms and armour, natural history. The best-known room has Salvador Dalí's Christ of Saint John of the Cross.",
        "come": "Subway to Kelvinhall, or on foot from the West End. Free entry, no booking. During restoration work some areas are under scaffolding, but the museum stays open.",
        "quando": "Weekday mornings.",
        "tempo": "2-3 hours",
        "costo": "Free, donations welcome",
        "orari": "Monday-Thursday and Saturday 10am-5pm, Friday and Sunday 11am-5pm.",
        "lat": 55.86861,
        "lng": -4.29056,
        "url": "https://www.glasgowlife.org.uk/museums/venues/kelvingrove-art-gallery-and-museum"
      },
      {
        "nome": "University of Glasgow and the Hunterian",
        "testo": "The university's neo-Gothic main building, with its cloisters and tower above Kelvingrove Park. Inside is the Hunterian, Scotland's oldest museum, and opposite is the art gallery with the Mackintosh House, the reconstructed interiors of Charles Rennie Mackintosh's home.",
        "come": "Subway to Hillhead, then on foot, or on foot from Kelvingrove.",
        "quando": "Tuesday to Sunday.",
        "tempo": "2 hours",
        "costo": "Museum and gallery free; the Mackintosh House has an entry charge",
        "orari": "Tuesday-Sunday 10am-5pm, closed Mondays.",
        "lat": 55.87194,
        "lng": -4.28861,
        "url": "https://www.gla.ac.uk/hunterian/"
      },
      {
        "nome": "Kelvingrove Park",
        "testo": "The Victorian park along the River Kelvin, between the museum and the university, with fountains, bridges and views of the West End towers.",
        "come": "On foot, between Kelvingrove and the university.",
        "quando": "In good weather, in the middle of the day.",
        "tempo": "1 hour",
        "costo": "Free",
        "lat": 55.86833,
        "lng": -4.28639
      },
      {
        "nome": "Riverside Museum and the Glenlee",
        "testo": "The transport museum on the River Clyde, in Zaha Hadid's zigzag building: trams, locomotives, cars and a reconstructed Glasgow street. Moored outside is the Glenlee, a late nineteenth-century sailing ship.",
        "come": "By bus from the centre or on foot along the river from Kelvingrove, in about half an hour.",
        "tempo": "2 hours",
        "costo": "Museum free; Glenlee £5.50, about €6 (2026)",
        "orari": "Museum: Monday-Thursday and Saturday 10am-5pm, Friday and Sunday 11am-5pm.",
        "lat": 55.8651,
        "lng": -4.30638,
        "url": "https://www.glasgowlife.org.uk/museums/venues/riverside-museum"
      },
      {
        "nome": "Botanic Gardens and Kibble Palace",
        "testo": "The botanic gardens at the end of Great Western Road, with the Kibble Palace, a large Victorian iron-and-glass glasshouse full of tree ferns.",
        "come": "Subway to Hillhead, then a few minutes on foot.",
        "quando": "On rainy days, in the glasshouses.",
        "tempo": "1 hour",
        "costo": "Free",
        "orari": "Gardens daily from 7am to dusk; glasshouses 10am-6pm, until 4.15pm in winter.",
        "lat": 55.8793,
        "lng": -4.29066,
        "url": "https://glasgowbotanicgardens.com/"
      },
      {
        "nome": "Ashton Lane",
        "testo": "A cobbled lane in the West End, behind Hillhead subway, with pubs, restaurants and a cinema under strings of lights.",
        "come": "On foot from Hillhead subway.",
        "quando": "In the evening.",
        "tempo": "1-2 hours",
        "costo": "Free",
        "lat": 55.87476,
        "lng": -4.29286
      },
      {
        "nome": "Burrell Collection",
        "testo": "The art collection of a Glasgow shipowner, over nine thousand objects including tapestries, stained glass, Chinese ceramics and paintings, in a glass-walled building in Pollok Country Park. It reopened in 2022 after a long refurbishment.",
        "come": "By train from Glasgow Central to Pollokshaws West, then on foot through the park.",
        "tempo": "2-3 hours",
        "costo": "Free, donations welcome",
        "orari": "Monday-Thursday and Saturday 10am-5pm, Friday and Sunday 11am-5pm.",
        "lat": 55.83083,
        "lng": -4.3075,
        "url": "https://www.glasgowlife.org.uk/museums/venues/the-burrell-collection"
      },
      {
        "nome": "Gallery of Modern Art (GoMA)",
        "testo": "The contemporary art gallery in a neoclassical building on Royal Exchange Square. In front stands the statue of the Duke of Wellington, almost always with a traffic cone on his head.",
        "come": "On foot in the centre, between Buchanan Street and George Square.",
        "tempo": "1 hour",
        "costo": "Free, donations welcome",
        "orari": "Monday-Thursday and Saturday 10am-5pm, Friday and Sunday 11am-5pm.",
        "lat": 55.8602,
        "lng": -4.25249,
        "url": "https://www.glasgowlife.org.uk/museums/venues/gallery-of-modern-art-goma"
      },
      {
        "nome": "George Square and the City Chambers",
        "testo": "The city's main square, with its statues and, on one side, the City Chambers, the Victorian city hall with marble interiors.",
        "come": "On foot, next to Queen Street station.",
        "tempo": "30 minutes",
        "costo": "Free",
        "lat": 55.86111,
        "lng": -4.25028
      },
      {
        "nome": "City centre murals",
        "testo": "A walk among the large murals painted on buildings in the centre, including the modern St Mungo on High Street, on the way to the cathedral.",
        "come": "On foot, with the City Centre Mural Trail map.",
        "tempo": "1-2 hours",
        "costo": "Free"
      },
      {
        "nome": "Glasgow Science Centre",
        "testo": "The science museum on the south bank of the Clyde, with hands-on experiments, a planetarium and the rotating tower next door. It is aimed mainly at families.",
        "come": "On foot from the Riverside across the river, or by bus from the centre.",
        "tempo": "2-3 hours",
        "costo": "Adults £15.50 with the voluntary donation, £14.09 without, about €16-18 (2026)",
        "orari": "Until 25 March 2027: Wednesday-Friday 10am-3pm, Saturday and Sunday 10am-5pm, closed Monday and Tuesday. From 26 March 2027 daily 10am-5pm.",
        "lat": 55.85854,
        "lng": -4.2938,
        "url": "https://www.glasgowsciencecentre.org/"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Cathedral at opening time",
          "Necropolis",
          "Provand's Lordship",
          "George Square and GoMA",
          "Afternoon in the West End: Kelvingrove, Kelvingrove Park and the university",
          "Ashton Lane in the evening"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as above",
          "Day 2: Riverside Museum and the Glenlee, the city centre murals, Botanic Gardens in the afternoon"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2: as above",
          "Day 3: Burrell Collection in the morning, then the Science Centre, or a trip to Loch Lomond"
        ]
      }
    ],
    zone: [
      {
        "nome": "Merchant City and centre",
        "perChi": "those who want everything on foot",
        "testo": "Between George Square, Buchanan Street and the cathedral: restaurants, bars and both stations a few minutes away.",
        "fascia": "€100-180"
      },
      {
        "nome": "West End",
        "perChi": "those who prefer a lively but quiet neighbourhood",
        "testo": "Around the university, Byres Road and Ashton Lane, with Victorian houses, B&Bs and the subway to the centre.",
        "fascia": "€110-200"
      },
      {
        "nome": "Finnieston",
        "perChi": "those who eat out",
        "testo": "Between the centre and the West End, along Argyle Street: the city's newest restaurants and Kelvingrove close by.",
        "fascia": "€110-190"
      },
      {
        "nome": "Near the stations",
        "perChi": "those arriving by train and leaving early",
        "testo": "Around Glasgow Central and Queen Street: chain hotels, handy for day trips.",
        "fascia": "€90-160"
      }
    ],
    gite: [
      {
        "nome": "Loch Lomond",
        "distanza": "45 minutes by car to Luss",
        "come": "By car on the A82, or by train to Balloch.",
        "testo": "Scotland's largest loch, with the village of Luss on the west shore and hills all around. It is the first stop on the way to the Highlands."
      },
      {
        "nome": "Edinburgh",
        "distanza": "under an hour by train",
        "come": "By ScotRail train from Glasgow Queen Street to Edinburgh Waverley.",
        "testo": "The castle, the Old Town and the Georgian New Town. It can be seen in a day, but it deserves a night."
      },
      {
        "nome": "Stirling",
        "distanza": "about 40 km",
        "come": "By train from Glasgow Queen Street, or by car.",
        "testo": "The Stuart castle on top of a crag and the Wallace Monument on the hill opposite."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Glasgow?",
        "risposta": "One day for the cathedral, the Necropolis and the West End. With two you can add the Riverside and the Botanic Gardens; with three, the Burrell Collection or a day trip."
      },
      {
        "domanda": "Glasgow or Edinburgh as a base?",
        "risposta": "Edinburgh for the castle and the Old Town, Glasgow for its free museums, the West End and the road to Loch Lomond. They are under an hour apart by train: you can stay in one and visit the other on a day trip."
      },
      {
        "domanda": "Are Glasgow museums free?",
        "risposta": "Yes, the city's ones: Kelvingrove, Riverside, the Burrell Collection, GoMA and Provand's Lordship. The university's Hunterian is free too, but closed on Mondays."
      },
      {
        "domanda": "Do you need to book Glasgow Cathedral?",
        "risposta": "Entry is free, but you choose a time slot online. Opening hours may change for services and events."
      },
      {
        "domanda": "Can you drive into central Glasgow?",
        "risposta": "The centre is a low emission zone and non-compliant vehicles are fined. Check your car, park outside the centre and use the subway."
      },
      {
        "domanda": "Is there a tourist tax in Glasgow?",
        "risposta": "From January 2027, yes: 5% of the accommodation cost, for every night."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'Glasgow Cathedral seen from the Necropolis, among Victorian gravestones',
    immagine: `${IMG}/glasgow-cattedrale.webp`,
  },
  {
    slug: 'loch-lomond-glencoe',
    paeseSlug: 'scozia',
    ordine: 3,
    nome: 'Loch Lomond and Glencoe',
    tipologia: ['natura', 'lago', 'montagna', 'on the road'],
    giorniConsigliati: '1-2 days',
    visitataPersonalmente: true,
    introduzione:
      "The first taste of the Highlands. Loch Lomond is the large loch north of Glasgow, in Loch Lomond and The Trossachs National Park. Further north the road crosses the moorland of Rannoch Moor and drops into the Glencoe valley, among Scotland's most famous mountains.",
    percheAndarci: "For the road between Rannoch Moor and Glencoe, one of the most spectacular in the country, and for the short walks on the loch's shores.",
    cosaVedere: ['Luss, on Loch Lomond', 'Rannoch Moor', 'Buachaille Etive Mòr', 'The Three Sisters of Glencoe', 'Glencoe village'],
    cosaFare: ['Stopping at the viewpoints along the A82', 'A short walk in the Glencoe valley', 'A stroll in Luss, on the loch'],
    comeArrivare: "By car on the A82 from Glasgow: about 45 minutes to Luss, then the road follows the whole west shore of Loch Lomond to Tarbet and Crianlarich, climbs onto Rannoch Moor and drops into Glencoe, about two and a half hours in all without stops. From Oban to Glencoe it's about an hour, from Glencoe to Fort William half an hour. Without a car, trains from Glasgow run to Balloch, the West Highland Line stops at Arrochar & Tarbet and Crianlarich, and Citylink coaches between Glasgow and Fort William stop along the A82, Glencoe included.",
    comeSpostarsi: 'By car, stopping in the signposted car parks and never on the side of the road.',
    costi: "The glen, trails and views are free; you pay for parking at Luss, loch cruises (£17-19) and the Glencoe chairlift (£20, 2026). Rough daily budget per person, sharing a double and with the car on top: low €80-110, mid €150-220, high over €300.",
    periodoMigliore: 'May to September; in winter the valley is beautiful but you should only walk with experience',
    erroriDaEvitare: [
      'Stopping to take photos on the verge of the A82: use only the car parks',
      'Setting off on a mountain path underestimating the weather: fog and rain come in fast',
    ],
    attenzioni: ['Midges in summer, especially in the evening and when there is no wind: you need a repellent.'],
    miaEsperienza: 'I did Loch Lomond and Glencoe. Glencoe is beautiful.',
    // GUIDA-START
    luoghi: [
      {
        nome: "Three Sisters",
        testo: "The three dark ridges that come down from the Bidean nam Bian massif on the south side of the glen, the most famous image of Glencoe. The road runs right beneath them, and with low cloud the walls look even higher.",
        come: "By car on the A82: stop in the viewpoint car parks below the ridges, never on the roadside.",
        quando: "Early morning, while the car parks are still empty; in afternoon light the ridges are in shadow.",
        tempo: "20-30 minutes",
        costo: "free",
        consiglio: "The car parks are small and full by midday.",
      },
      {
        nome: "Buachaille Etive Mòr and Glen Etive",
        testo: "The rock pyramid at the eastern entrance to Glencoe, the most photographed mountain in Scotland, with the River Coupall and the white Lagangarbh cottage at its foot. Next to it opens Glen Etive, a side valley with a single-track road running down to the loch.",
        come: "By car on the A82: the classic photo spot is near the river bridge, just past the Kingshouse Hotel; Glen Etive is driven by car, using the passing places.",
        quando: "At dawn or sunset, when the light catches the face.",
        tempo: "30 minutes; 1-2 hours with Glen Etive",
        costo: "free",
        lat: 56.6473,
        lng: -4.8978,
      },
      {
        nome: "Lost Valley (Coire Gabhail)",
        testo: "The hidden valley behind the Three Sisters, where according to tradition the MacDonalds hid stolen cattle. You enter through a narrow gorge and come out into a flat hollow closed in by the walls.",
        come: "On foot from the A82 car park below the Three Sisters: down to the river, across a bridge and up a rocky path, with a stream crossing.",
        quando: "In dry weather; avoid it in heavy rain, when the burn rises.",
        tempo: "about 3 hours return",
        costo: "free",
        lat: 56.65441,
        lng: -4.994,
        consiglio: "You need mountain boots: some sections need your hands.",
      },
      {
        nome: "Glencoe Lochan",
        testo: "A small loch among pines above Glencoe village, planted in the 19th century by a lord who wanted to remind his wife of Canada. The loop around the water, with the mountains reflected in it, is the easiest walk in the glen.",
        come: "By car or on foot from Glencoe village, following the signs; parking near the loch and well-kept paths.",
        quando: "Early morning, with still water and reflections.",
        tempo: "under 1 hour",
        costo: "free",
        lat: 56.69069,
        lng: -5.09584,
      },
      {
        nome: "Rannoch Moor",
        testo: "A plateau of peat bogs, lochans and boulders left by the glaciers, crossed by the A82 between Bridge of Orchy and Glencoe. There are no villages or trees: it's the wildest stretch of the road, and the most dramatic way into the glen.",
        come: "By car on the A82, with viewpoint lay-bys such as the one at Lochan na h-Achlaise; the West Highland Line crosses it further east, to the remote Rannoch station.",
        quando: "In low morning or evening light; in fog it's atmospheric but you see little.",
        tempo: "30-60 minutes of stops",
        costo: "free",
        lat: 56.65411,
        lng: -4.59373,
      },
      {
        nome: "Glencoe Visitor Centre",
        testo: "The National Trust for Scotland visitor centre, just before the village, with an exhibition on the glen's geology and on the massacre of 1692, when government soldiers killed the MacDonalds who were hosting them. It has maps, the day's forecast and a café.",
        come: "By car on the A82, with parking; short woodland trails also start here.",
        quando: "Before setting off on a walk, to check the weather.",
        tempo: "45 minutes",
        lat: 56.67117,
        lng: -5.08186,
        url: "https://www.nts.org.uk/visit/places/glencoe",
      },
      {
        nome: "Luss",
        testo: "A village of stone cottages on the west shore of Loch Lomond, with a church, a small beach and a pier on the loch. It's the handiest stop along the A82, to stretch your legs and grab something to eat.",
        come: "By car on the A82, about 45 minutes from Glasgow; pay parking at the entrance to the village.",
        quando: "In the morning, before the coaches; summer weekends are crowded.",
        tempo: "1 hour",
        costo: "free, pay parking",
        lat: 56.10149,
        lng: -4.64225,
      },
      {
        nome: "Loch Lomond cruise",
        testo: "The best way to see the largest loch in Britain by surface area, with its wooded islands and Ben Lomond on the far shore. Trips leave from the piers at Tarbet and Luss.",
        come: "Tickets online or at the pier with Cruise Loch Lomond; circular trips or crossings to Balmaha and Inchcailloch.",
        quando: "From spring to the end of October, on days without strong wind.",
        tempo: "1 hour from Tarbet, 1.5 hours from Luss",
        costo: "Tarbet circular £17 (about €20), Luss circular £19 (about €22), adults 2026",
        lat: 56.204,
        lng: -4.7125,
        url: "https://www.cruiselochlomond.co.uk",
      },
      {
        nome: "Balmaha and Conic Hill",
        testo: "On the east shore of the loch, the village of Balmaha is the starting point for Conic Hill, a hill on the boundary between Lowlands and Highlands. From the top you see the islands of Loch Lomond lined up along the fault that divides the two Scotlands.",
        come: "By car from Balloch or Drymen; from the Balmaha car park the path climbs on the West Highland Way.",
        quando: "On clear days, early morning or at sunset.",
        tempo: "2-3 hours return",
        costo: "free",
        lat: 56.097,
        lng: -4.5246,
      },
      {
        nome: "Glencoe Mountain chairlift",
        testo: "The ski area on Meall a' Bhùiridh, at the entrance to the glen, with a chairlift that in summer takes visitors up the mountain. From the top you see the whole of Rannoch Moor and the Buachaille opposite.",
        come: "By car on the A82, up a short side road past the Kingshouse; tickets at the ticket office or online.",
        quando: "Mid-May to late October, on clear days with little wind.",
        tempo: "1-2 hours",
        costo: "chairlift return £20 (about €23, adults, summer 2026)",
        orari: "Lifts from 9am, last uplift around 4pm, weather permitting; maintenance closures posted on the website.",
        lat: 56.62025,
        lng: -4.83947,
        url: "https://www.glencoemountain.co.uk",
      },
      {
        nome: "Inchcailloch",
        testo: "A wooded island opposite Balmaha, with trails through oak woods, a small beach and the ruins of a medieval church with the MacGregor clan burial ground. You can walk all of it in a few hours.",
        come: "By boat from Balmaha, a crossing of a few minutes, or on the cruises from Luss.",
        quando: "In spring, with bluebells in the woods, or on a calm summer day.",
        tempo: "2-3 hours",
        lat: 56.08111,
        lng: -4.55583,
      },
    ],
    programmi: [
      {
        titolo: "1 day, along the A82",
        tappe: [
          "Leave Glasgow and stop at Luss on Loch Lomond",
          "Lunch in Tarbet or Crianlarich",
          "Rannoch Moor with the viewpoint lay-bys",
          "Buachaille Etive Mòr, the Three Sisters and the Glencoe Lochan loop before evening",
        ],
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Luss, cruise from Tarbet, Rannoch Moor and a night in Glencoe",
          "Day 2: Lost Valley in the morning in dry weather, Glencoe Visitor Centre, then Glen Etive or the Glencoe Mountain chairlift",
        ],
      },
      {
        titolo: "3 days",
        tappe: [
          "Day 1: Balmaha, Conic Hill and the boat to Inchcailloch, night on Loch Lomond",
          "Day 2: Luss and the west shore, Rannoch Moor, night in Glencoe",
          "Day 3: Three Sisters and Lost Valley, Glencoe Lochan at sunset",
        ],
      },
    ],
    zone: [
      {
        nome: "Luss and Tarbet",
        perChi: "those who want to sleep on the shore of Loch Lomond",
        testo: "A few hotels and inns on the loch, some with views and a pier; in summer they're pricey and fill early.",
        fascia: "€130-260",
      },
      {
        nome: "Balloch",
        perChi: "those arriving by train from Glasgow or looking for lower prices",
        testo: "The town at the southern end of the loch, with a station, supermarkets and B&Bs; handy for the east shore and Balmaha.",
        fascia: "€100-180",
      },
      {
        nome: "Tyndrum and Crianlarich",
        perChi: "those who want a halfway stop",
        testo: "Two villages where the Oban road meets the Glencoe road, with lodges, hostels and simple B&Bs, popular with West Highland Way walkers.",
        fascia: "€90-170",
      },
      {
        nome: "Glencoe and Ballachulish",
        perChi: "those who want to wake up in the glen and walk early",
        testo: "Glencoe village and nearby Ballachulish, on Loch Leven, with hotels, B&Bs and a few pubs; the Kingshouse Hotel stands alone at the entrance to the glen.",
        fascia: "€120-250",
      },
    ],
    gite: [
      {
        nome: "Inveraray",
        distanza: "about 35 km from Tarbet on the A83",
        come: "By car over the Rest and Be Thankful pass.",
        testo: "A white 18th-century town on Loch Fyne, with the castle of the Dukes of Argyll and the loch's oysters.",
      },
      {
        nome: "Oban",
        distanza: "about 1 hour from Glencoe",
        come: "By car along Loch Linnhe and over Connel Bridge; from Loch Lomond you go via Crianlarich and the A85 instead.",
        testo: "The west-coast harbour town, with the distillery, McCaig's Tower, seafood on the North Pier and the ferries to Mull.",
      },
      {
        nome: "Fort William and Glenfinnan",
        distanza: "half an hour from Glencoe to Fort William, another 30 minutes to Glenfinnan",
        come: "By car on the A82 and then the A830.",
        testo: "Ben Nevis, Glen Nevis with Steall Falls and the Jacobite viaduct.",
      },
    ],
    faq: [
      {
        domanda: "Is Glencoe worth it?",
        risposta: "Yes, it's the most spectacular mountain scenery you can see from the road in Scotland. Even without walking, the stops between Rannoch Moor, the Buachaille and the Three Sisters are worth the day.",
      },
      {
        domanda: "How many days for Loch Lomond and Glencoe?",
        risposta: "In one day you drive through both on the A82 with stops. With two you sleep in Glencoe and do a walk like the Lost Valley; with three you add Balmaha and Conic Hill.",
      },
      {
        domanda: "Where to stay for Glencoe?",
        risposta: "In Glencoe village or Ballachulish, to wake up in the glen; Fort William, half an hour away, has more hotels and a wider range of prices.",
      },
      {
        domanda: "Where to stop for photos on the A82?",
        risposta: "Only in the signed car parks and lay-bys, never on the roadside. They're small and fill by midday: drive through early in the morning.",
      },
      {
        domanda: "Which walks to do in Glencoe?",
        risposta: "The Glencoe Lochan loop, under an hour and easy; the Lost Valley, about three hours on a rocky path with a stream crossing. The real summits need mountain experience.",
      },
      {
        domanda: "Are there midges?",
        risposta: "Yes, from June to September midges are a nuisance, especially in the evening, without wind and near water. Bring repellent; a breeze makes them disappear.",
      },
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'The Glencoe valley below the Three Sisters, with low clouds on the peaks',
    immagine: `${IMG}/glencoe-three-sisters.webp`,
  },
  {
    slug: 'oban',
    paeseSlug: 'scozia',
    ordine: 4,
    nome: 'Oban',
    tipologia: ['mare', 'cibo', 'distilleria'],
    giorniConsigliati: '1-2 nights',
    visitataPersonalmente: true,
    introduzione:
      "A seaside town on the west coast, with the harbour where the ferries leave for Mull and the other islands. Above the harbour is McCaig's Tower, the stone colosseum you can see from all over the bay. In the centre is Oban distillery.",
    percheAndarci: 'For the fish and seafood, the distillery in the centre and the ferries to the islands.',
    cosaVedere: ["McCaig's Tower", 'The harbour and the North Pier', 'Oban distillery'],
    cosaFare: ['Seafood dinner on the harbour', 'The Oban distillery tour', 'A day trip to Mull on the CalMac ferry'],
    doveMangiare:
      "Ee-Usk, on the North Pier: a seafood restaurant on the water, with oysters, mussels, langoustines and scallops. Lunch from 12, dinner from 5:30 pm. Book on eeusk.com or on 01631 565 666; the conservatory can't be booked.",
    comeArrivare: "By car from Glasgow via Loch Lomond: about 45 minutes to Luss, then an hour and three quarters without stops, leaving the A82 at Crianlarich for the A85 along Loch Awe. From Glencoe it takes about an hour, from Fort William an hour and a half. By train from Glasgow Queen Street the West Highland line takes just over three hours, and the station sits next to the CalMac ferry terminal.",
    comeSpostarsi: 'On foot in the centre.',
    costi: "Oban Distillery £24, Dunollie £13, Dunstaffnage £7.50 online (2026); McCaig's Tower, Pulpit Hill and the War & Peace Museum are free. Rough daily budget per person, sharing a double and with the car on top: low €80-110, mid €150-210, high over €300.",
    erroriDaEvitare: ['Arriving in summer without booking the distillery tour, which also fills up with cruise ship passengers', 'Not booking dinner: the seafood restaurants on the harbour are full'],
    miaEsperienza: 'At Ee-Usk, on Oban harbour, I ate very good fish. And from Oban I went to the Hebrides.',
    // GUIDA-START
    luoghi: [
      {
        nome: "Oban Distillery",
        testo: "A small distillery in the middle of town, a few steps from the harbour, squeezed between the seafront road and the hill. The whisky is a west-coast single malt, and the tour is one of the most compact in Scotland.",
        come: "Booking on malts.com. Children under 8 are not admitted. Drivers can ask for a sample to take away.",
        quando: "In the morning, before the cruise-ship groups; in summer book well ahead.",
        tempo: "1 hour for the classic tour",
        costo: "classic tour from £24 (about €28, 2026)",
        orari: "Daily: April 10am-6pm, May to September 10am-7pm, October 10am-6pm, November to March 10am-5pm (2026).",
        lat: 56.4147,
        lng: -5.4728,
        url: "https://www.malts.com/en-gb/distilleries/oban",
        consiglio: "The tour programme is under review: check again before you go.",
      },
      {
        nome: "McCaig's Tower",
        testo: "A ring of granite arches on the hill above the harbour, built for the banker John Stuart McCaig: begun in 1897, it was left unfinished when he died in 1902. Inside there's a garden, and from the rim you see the whole bay with Kerrera and Mull.",
        come: "On foot from the centre in about ten minutes, up a short, steep climb.",
        quando: "At sunset, when the light drops over the islands.",
        tempo: "45 minutes",
        costo: "free entry",
        lat: 56.4156,
        lng: -5.4691,
      },
      {
        nome: "Ee-Usk",
        testo: "The seafood restaurant on the North Pier, with windows over the water and the ferries passing in front. On the menu: oysters, mussels, langoustines and scallops from the west coast.",
        come: "Book on eeusk.com or on 01631 565 666; the conservatory can't be booked.",
        quando: "In summer book a few days ahead.",
        tempo: "1-2 hours",
        orari: "Lunch from 12 noon, dinner from 5.30pm.",
        lat: 56.41455,
        lng: -5.47477,
        url: "https://www.eeusk.com",
      },
      {
        nome: "Dunollie Castle and Museum",
        testo: "The ruins of the MacDougall castle on a spur above the entrance to the bay, north of the centre. In the 18th-century house next door there's a small museum of family objects, textiles and tools, surrounded by woodland and gardens.",
        come: "On foot from the centre along the Corran Esplanade, about 20 flat minutes, then a short climb.",
        quando: "In the morning, with the light on the bay; pairs well with Ganavan Sands.",
        tempo: "1-2 hours",
        costo: "£13 (about €15, adults, 2026)",
        orari: "From 17 March to the end of October, Tuesday to Sunday 10am-4pm, last recommended entry 3.30pm; closed Mondays and in winter.",
        lat: 56.42727,
        lng: -5.48302,
        url: "https://dunollie.org",
      },
      {
        nome: "Dunstaffnage Castle",
        testo: "A 13th-century castle on a rock at the mouth of Loch Etive, with high walls and a gatehouse looking out to sea. In the woods next to it stand the ruins of the medieval chapel. It's one of the oldest castles still standing in Scotland.",
        come: "By car, about 5 km north of Oban towards Dunbeg; parking on site.",
        quando: "In summer, when it's open every day.",
        tempo: "1 hour",
        costo: "£7.50 online (about €9), £8.50 on the door (adults, 2026)",
        orari: "1 April to 30 September daily 9.30am-4.30pm; October to March Monday, Tuesday, Wednesday, Saturday and Sunday 10am-3.30pm, closed Thursday and Friday. Last entry 30 minutes before closing; closed 24 December to 4 January.",
        lat: 56.45472,
        lng: -5.4375,
        url: "https://www.historicenvironment.scot/visit-a-place/places/dunstaffnage-castle-and-chapel/",
      },
      {
        nome: "Oban War & Peace Museum",
        testo: "A small museum on the seafront that tells the town's story: fishing, ferries and the harbour's role in the Second World War. It's quick to see and a good shelter on rainy days.",
        come: "On foot on the Corran Esplanade, near the North Pier.",
        quando: "On a rainy day or before dinner.",
        tempo: "45 minutes",
        costo: "free, donations welcome",
        orari: "March to November daily 10am-4pm, Fridays until 2pm; closed for winter from 15 November 2026.",
        lat: 56.4158,
        lng: -5.47377,
        url: "https://www.obanmuseum.org.uk",
      },
      {
        nome: "Pulpit Hill",
        testo: "The hill south of the harbour, with a viewpoint facing Kerrera, the Sound of Mull and the departing ferries. Less famous than McCaig's Tower, it has a wider view to the west.",
        come: "On foot from the centre, up the streets behind the ferry terminal; about 15 minutes.",
        quando: "At sunset, with the sun going down behind Mull.",
        tempo: "30-45 minutes",
        costo: "free",
        lat: 56.40951,
        lng: -5.48171,
      },
      {
        nome: "Ganavan Sands",
        testo: "The closest sandy beach to Oban, in a small bay north of town looking out to Lismore and the mountains of Morvern. You reach it on a walking and cycling path along the sea.",
        come: "On foot or by bike from the centre via Dunollie, about 45 minutes; by car there's a car park at the beach.",
        quando: "On clear days, in the morning or evening.",
        tempo: "1-2 hours",
        costo: "free",
        lat: 56.43897,
        lng: -5.46952,
      },
      {
        nome: "Isle of Kerrera",
        testo: "The island in front of Oban that closes the bay: no cars, sheep, trails and, on the southern tip, the ruins of Gylen Castle over the sea. A half-day walk, the easiest way to see an island without taking the big ferry.",
        come: "Small passenger ferry from Gallanach, about 3 km south of Oban on the coast road, with parking; the crossing takes a few minutes.",
        quando: "In dry weather, on a still morning.",
        tempo: "half a day",
        lat: 56.39806,
        lng: -5.53861,
        consiglio: "Ferry times and fares change between summer and winter: check the day before.",
      },
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Oban Distillery tour in the morning",
          "Walk along the Corran Esplanade to Dunollie",
          "War & Peace Museum, then up to McCaig's Tower",
          "Seafood dinner at Ee-Usk and sunset from Pulpit Hill",
        ],
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: distillery, McCaig's Tower, dinner at Ee-Usk",
          "Day 2: CalMac ferry to Craignure and a day in Tobermory on the Isle of Mull; back on the last sailing",
        ],
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: Dunstaffnage in the morning, Ganavan Sands, then the ferry from Gallanach and the walk around Kerrera to Gylen Castle",
        ],
      },
    ],
    zone: [
      {
        nome: "Centre and seafront",
        perChi: "those who want everything on foot, harbour and restaurants included",
        testo: "Hotels and guesthouses on George Street and the Corran Esplanade, a few minutes from the ferry terminal and the station. In summer they fill up early.",
        fascia: "€110-220",
      },
      {
        nome: "Hills above the harbour",
        perChi: "those looking for a quieter B&B and lower prices",
        testo: "Victorian houses turned into B&Bs between Pulpit Hill and the streets behind McCaig's Tower, with a climb back from the centre but often a view of the bay.",
        fascia: "€90-160",
      },
      {
        nome: "Ganavan and Dunbeg",
        perChi: "those with a car who want the sea on the doorstep",
        testo: "North of town, towards the beach and Dunstaffnage: a few hotels and apartments, quieter evenings, but you need the car or a long walk to the centre.",
        fascia: "€100-190",
      },
    ],
    gite: [
      {
        nome: "Isle of Mull and Tobermory",
        distanza: "45 minutes by ferry to Craignure, then about 1 hour by road",
        come: "CalMac ferry from Oban, to be booked with a car; foot passengers almost always find space, and there are buses at Craignure.",
        testo: "Tobermory is the village of coloured houses on the harbour, with a distillery. On the way you cross woods and single-track coast roads.",
      },
      {
        nome: "Iona",
        distanza: "a full day via Mull",
        come: "Ferry to Craignure, road to Fionnphort on the western tip of Mull, then the small CalMac ferry to Iona; many do it on organised day trips from Oban.",
        testo: "The island of the abbey founded by St Columba in the 6th century, with white beaches and clear water. A long day, but one of the finest on the west coast.",
      },
      {
        nome: "Seil and the Bridge over the Atlantic",
        distanza: "about 20 km south",
        come: "By car on the A816 and then the B844.",
        testo: "Clachan Bridge, an 18th-century humpback bridge over an arm of the sea, leads to the island of Seil; from Ellenabeich a small boat goes to Easdale, the slate-quarry island.",
      },
      {
        nome: "Kilchurn Castle and Loch Awe",
        distanza: "about 35 km east",
        come: "On the A85 towards Dalmally; roadside parking and a 10-minute path.",
        testo: "The ruins of the Campbell castle on the tip of Loch Awe, with the mountains behind. You also see it from the road coming from Glasgow.",
      },
    ],
    sapori: [
      { nome: 'Seafood', testo: 'Scallops, langoustines, mussels and oysters from the west coast.' },
      { nome: 'Oban whisky', testo: 'The single malt from the distillery in the centre.' },
    ],
    faq: [
      {
        domanda: "How many days do you need in Oban?",
        risposta: "One day is enough for the distillery, McCaig's Tower and dinner on the harbour. With two nights you add a day on Mull or Kerrera.",
      },
      {
        domanda: "Do you need to book Oban Distillery?",
        risposta: "Yes, on malts.com: it's small and in summer the tours fill up, cruise passengers included. The classic tour costs £24 (2026).",
      },
      {
        domanda: "Do you need to book the ferry to Mull?",
        risposta: "With a car yes, on the CalMac website, especially in summer. Foot passengers almost always find space; the crossing takes 45 minutes.",
      },
      {
        domanda: "Can you get to Oban without a car?",
        risposta: "Yes, by train from Glasgow Queen Street in just over three hours; the station is next to the ferries and the centre is walkable.",
      },
      {
        domanda: "Where to eat seafood in Oban?",
        risposta: "On the harbour: Ee-Usk, on the North Pier, is the best known and needs booking. Along the ferry pier there are also seafood stalls for a quick lunch.",
      },
      {
        domanda: "Oban or Fort William as a base?",
        risposta: "Oban for the sea, the islands and seafood; Fort William for Glencoe, Ben Nevis and Glenfinnan. They're an hour and a half apart, and many people sleep in both.",
      },
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: "Oban harbour with the colourful houses on the seafront and McCaig's Tower on the hill",
    immagine: `${IMG}/giorno-04-oban.webp`,
  },
  {
    slug: 'fort-william-glenfinnan',
    paeseSlug: 'scozia',
    ordine: 5,
    nome: 'Fort William and Glenfinnan',
    tipologia: ['montagna', 'treno', 'on the road'],
    giorniConsigliati: '1 day',
    visitataPersonalmente: true,
    introduzione:
      'Fort William lies at the foot of Ben Nevis, the highest mountain in the United Kingdom. To the west, on the road to Mallaig, is Glenfinnan, with the arched railway viaduct made famous by the Harry Potter films and the monument on Loch Shiel.',
    percheAndarci: 'To see the steam train on the Glenfinnan viaduct, or ride it, and for the road towards the sea and Skye.',
    cosaVedere: ['The Glenfinnan viaduct', 'The Glenfinnan Monument on Loch Shiel', 'Ben Nevis from Fort William'],
    cosaFare: ['Waiting for the Jacobite to cross the viaduct', 'Riding the Jacobite from Fort William to Mallaig'],
    comeArrivare: "By car on the A82: from Glencoe about half an hour, from Oban about an hour and a half via Glencoe, from Glasgow about three hours without stops along Loch Lomond. Glenfinnan is on the A830 towards Mallaig, half an hour from Fort William, and from Glenfinnan to Mallaig it's another 45 minutes. By train the West Highland Line arrives from Glasgow Queen Street in about 3 hours 50 minutes and continues to Mallaig, stopping at Glenfinnan.",
    comeSpostarsi: 'By car. In Glenfinnan there is a paid car park near the visitor centre.',
    costi: "Nevis Range £28.95 (2026); the viaduct, Glen Nevis, Neptune's Staircase and Ben Nevis are free, and at Glenfinnan you pay for parking. Book the Jacobite as soon as fares come out. Rough daily budget per person, sharing a double and with the car on top: low €80-110, mid €150-210, high over €300.",
    erroriDaEvitare: ['Counting on a seat on the Jacobite without booking: seats are few', 'Walking on the tracks for a photo: watch the train from the paths'],
    miaEsperienza: 'I went to the Glenfinnan Viaduct for the Harry Potter train, the Jacobite.',
    // GUIDA-START
    luoghi: [
      {
        nome: "Glenfinnan Viaduct",
        testo: "The curving 21-arch viaduct of the West Highland Line, above the valley at the head of Loch Shiel, completed in 1901 and one of the first big concrete bridges. It became famous with the Harry Potter films, and in summer the Jacobite steam train crosses it.",
        come: "By car to Glenfinnan on the A830, then on foot from the visitor centre: the path to the viewpoint climbs in about ten minutes.",
        quando: "When the Jacobite passes: the morning train crosses the viaduct around 11am, and the day's times are posted at the visitor centre.",
        tempo: "1-2 hours",
        costo: "free; paid parking",
        lat: 56.876285,
        lng: -5.431914,
        consiglio: "The car park fills up long before the train passes: arrive at least an hour early.",
      },
      {
        nome: "The Jacobite",
        testo: "The seasonal steam train from Fort William to Mallaig and back, 84 miles in all. It crosses the Glenfinnan Viaduct, runs along the lochs and the sea at Morar and stops about an hour and a half in Mallaig before heading back.",
        come: "Booking on the West Coast Railways website; only return tickets are sold. A few seats go on sale on the day at Fort William, cash only and not guaranteed. When the fire risk is high, or after a breakdown, it may be hauled by a heritage diesel locomotive.",
        quando: "In summer, with a morning departure from Fort William. In November 2026 the 2027 dates and fares are not out yet.",
        tempo: "a full day",
        url: "https://www.westcoastrailways.co.uk/jacobite/jacobite-steam-train-details.cfm",
        consiglio: "Sales usually open early in the year and seats sell fast: if you only want to see it pass, go to the viaduct.",
      },
      {
        nome: "Glenfinnan Monument",
        testo: "The tower topped by a Highlander statue on the shore of Loch Shiel, where in 1745 Charles Edward Stuart raised the standard of the last Jacobite rising. The National Trust for Scotland runs the visitor centre, with a small exhibition and a café.",
        come: "From the visitor centre car park, a few minutes' walk along the loch shore.",
        quando: "Together with the viaduct, before or after the train passes.",
        tempo: "30-45 minutes",
        lat: 56.86917,
        lng: -5.43694,
        url: "https://www.nts.org.uk/visit/places/glenfinnan-monument",
      },
      {
        nome: "Ben Nevis",
        testo: "At 1,345 metres it's the highest mountain in the United Kingdom, towering over Fort William. The standard route, the Mountain Track, starts in Glen Nevis and is a long climb on a stone path, with no scrambling but high-mountain weather at the top.",
        come: "On foot from the Glen Nevis visitor centre or the youth hostel, a few minutes' drive from central Fort William.",
        quando: "June to September, starting early; snow can linger at the top into early summer and fog is frequent.",
        tempo: "7-9 hours return",
        costo: "free",
        lat: 56.79685,
        lng: -5.003508,
        consiglio: "You need mountain boots, warm layers and a map: in fog the summit plateau is hard to navigate.",
      },
      {
        nome: "Glen Nevis and Steall Falls",
        testo: "The valley that curves around Ben Nevis, with woods, burns and, at the end of the road, a narrow gorge that opens onto a meadow with Steall Falls, about 120 metres high. One of the best short walks in the Highlands.",
        come: "By car to the car park at the end of the Glen Nevis road, then on foot through the gorge on a rocky path; the wire bridge in front of the falls is optional.",
        quando: "After a few days of rain, when the falls are full; in the morning, before the car park fills.",
        tempo: "2 hours return",
        costo: "free",
        lat: 56.7698,
        lng: -4.9786,
      },
      {
        nome: "Nevis Range gondola",
        testo: "The gondola climbs the side of Aonach Mòr, the mountain next to Ben Nevis, from 100 to 650 metres. At the top there's a restaurant, viewpoints over Loch Linnhe and short trails; in winter it's a ski area.",
        come: "By car, about 10 km north-east of Fort William on the A82 towards Spean Bridge; tickets online or at the ticket office.",
        quando: "On clear days; in strong wind the gondola can close without notice.",
        tempo: "2 hours; the ride takes 12-15 minutes",
        costo: "adult day ticket £28.95 (about €33, 2026 season)",
        orari: "Daily: first gondola up 9.30am, last up 3.45pm, last down 4pm; weather closures to be checked on the website on the day.",
        lat: 56.85221,
        lng: -4.99877,
        url: "https://www.nevisrange.co.uk/mountain-gondola/",
      },
      {
        nome: "Neptune's Staircase",
        testo: "A flight of eight locks on the Caledonian Canal at Banavie, the longest in Britain, designed by Thomas Telford in the early 19th century. Boats climb about 20 metres, and from the towpath you see Ben Nevis.",
        come: "By car or bike from Fort William, about 4 km north on the A830; parking next to the locks.",
        quando: "When boats are passing, usually in the middle of the day in summer.",
        tempo: "30-60 minutes",
        costo: "free",
        lat: 56.84528,
        lng: -5.09543,
      },
      {
        nome: "West Highland Museum",
        testo: "Fort William's museum, on a square off the High Street, with collections on the Jacobites, the clans and life in the Highlands. Among the oddest objects is the secret portrait of Charles Edward Stuart, visible only as a reflection on a cylinder.",
        come: "On foot in the centre, on Cameron Square.",
        quando: "On a rainy day.",
        tempo: "1 hour",
        orari: "Monday to Saturday 10am-4pm, last entry 30 minutes before closing; closed Sundays.",
        lat: 56.8177,
        lng: -5.1111,
        url: "https://www.westhighlandmuseum.org.uk",
      },
      {
        nome: "Old Inverlochy Castle",
        testo: "The ruins of a 13th-century castle, square with towers at the corners, on the bank of the River Lochy on the edge of Fort William. Two battles were fought here, in 1431 and 1645.",
        come: "By car or on foot from the north of town, near the Ben Nevis distillery; a small car park in front of the walls.",
        quando: "At sunset, with Ben Nevis behind.",
        tempo: "30 minutes",
        lat: 56.83259,
        lng: -5.081,
      },
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Glenfinnan early in the morning, parking and the climb to the viewpoint",
          "The Jacobite crossing the viaduct around 11am, then the Glenfinnan Monument",
          "Afternoon in Glen Nevis with the walk to Steall Falls",
          "Evening in Fort William, with Old Inverlochy at sunset",
        ],
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Glenfinnan and the train, Neptune's Staircase on the way back, West Highland Museum",
          "Day 2: Nevis Range gondola on a clear day, then Glen Nevis and Steall Falls",
        ],
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: Ben Nevis for fit walkers, or the Jacobite to Mallaig and the Morar beaches",
        ],
      },
    ],
    zone: [
      {
        nome: "Fort William centre",
        perChi: "those arriving by train or wanting restaurants and supermarkets on foot",
        testo: "Hotels and guesthouses around the High Street and on the loch road, near the station. In summer book ahead.",
        fascia: "€110-230",
      },
      {
        nome: "Glen Nevis",
        perChi: "walkers who want an early start for Ben Nevis",
        testo: "Along the glen road there's the campsite, the youth hostel and a few lodges, a few minutes' drive from the centre and at the foot of the trails.",
        fascia: "€80-180",
      },
      {
        nome: "Banavie and Corpach",
        perChi: "those with a car heading to Glenfinnan",
        testo: "On the canal, north of town: B&Bs and small hotels with views of Ben Nevis, handy for the A830 and Neptune's Staircase.",
        fascia: "€100-190",
      },
    ],
    gite: [
      {
        nome: "Mallaig and the Morar beaches",
        distanza: "about 1 hour 15 minutes by car, or on the Jacobite",
        come: "On the A830 via Glenfinnan and Arisaig; also on the regular West Highland Line train.",
        testo: "The white-sand beaches of Morar and Camusdarach, with the islands of Eigg and Rùm on the horizon, and the fishing harbour of Mallaig where the ferry to Skye leaves.",
      },
      {
        nome: "Glencoe",
        distanza: "about half an hour south by car",
        come: "On the A82 along Loch Linnhe.",
        testo: "The glen between the Three Sisters and Buachaille Etive Mòr, with walks to Glencoe Lochan and the Lost Valley.",
      },
      {
        nome: "Isle of Skye",
        distanza: "about 30 minutes by ferry from Mallaig to Armadale",
        come: "CalMac ferry, to be booked with a car; or by car to the Skye Bridge via Invergarry and Eilean Donan.",
        testo: "From Fort William you enter Skye from the south of the island. As a day trip it's a rush: better to sleep in Portree.",
      },
    ],
    faq: [
      {
        domanda: "What time does the Jacobite cross the Glenfinnan Viaduct?",
        risposta: "The morning train usually passes around 11am; the expected times are posted daily at the visitor centre. Arrive at least an hour early to find parking.",
      },
      {
        domanda: "Do you need to book the Jacobite?",
        risposta: "Yes: seats are few and sell mostly online, on the West Coast Railways website, as soon as the season is released. On the day only a few are left at Fort William, cash only.",
      },
      {
        domanda: "Can you see the viaduct without taking the train?",
        risposta: "Yes, it's the easiest way: from the visitor centre a ten-minute path climbs to the viewpoint. Regular West Highland Line trains cross it all year round.",
      },
      {
        domanda: "How long does it take to climb Ben Nevis?",
        risposta: "On the Mountain Track from Glen Nevis it takes 7-9 hours return. It's a full day, to be done in mountain boots and with the forecast checked.",
      },
      {
        domanda: "How many days do you need in Fort William?",
        risposta: "One for Glenfinnan and Glen Nevis, two to add the Nevis Range gondola at an easy pace. With Ben Nevis you need a third.",
      },
      {
        domanda: "Fort William or Glencoe as a base?",
        risposta: "Fort William has more hotels, supermarkets and the train; Glencoe is smaller and quieter, half an hour away. For Glenfinnan and Ben Nevis, Fort William is handier.",
      },
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'The Jacobite steam train on the Glenfinnan viaduct, with white smoke and autumn woods',
    immagine: `${IMG}/giorno-06-glenfinnan.webp`,
  },
  {
    slug: 'isola-di-skye',
    paeseSlug: 'scozia',
    ordine: 6,
    nome: 'Isle of Skye',
    tipologia: ['isola', 'natura', 'trekking', 'distilleria'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    introduzione:
      'The largest of the Inner Hebrides, linked to the mainland by a bridge. Rock pinnacles, cliffs, streams and mountains, with Portree as the main town and Talisker distillery on the west coast.',
    percheAndarci: 'For the landscapes of the Trotternish peninsula, with the Old Man of Storr and the Quiraing, for the Fairy Pools and for Talisker.',
    cosaVedere: ['The Old Man of Storr', 'The Quiraing', 'The Fairy Pools', 'Portree', 'Eilean Donan Castle, on the road to Skye', 'Talisker distillery in Carbost'],
    cosaFare: ['The Old Man of Storr path early in the morning', 'The Trotternish loop by car', 'The Talisker tour'],
    comeArrivare:
      'By car over the toll-free Skye Bridge, from Kyle of Lochalsh; or with the CalMac ferry from Mallaig to Armadale, in about 30 minutes, to be booked with the car on calmac.co.uk. From Inverness to Portree it is about three hours\' drive; from Glasgow, via Loch Lomond and Glencoe, about five without stops. Without a car, the train reaches Kyle of Lochalsh from Inverness or Mallaig from Fort William, and Citylink coaches link Glasgow and Inverness with Portree.',
    costi:
      'Footpaths and viewpoints are free; you pay for parking (Storr about £5-6), distilleries and castles: Talisker from £22, Dunvegan £18, Eilean Donan £13 (2026). In summer accommodation is expensive and fills up early. Indicative daily budget per person, sharing a double and with the car on top: low €80-110, mid €150-220, high over €300.',
    comeSpostarsi: 'By car, on roads that are often single-track with passing places.',
    periodoMigliore: 'May to September; in July and August the car parks of the famous trails fill up early',
    erroriDaEvitare: [
      'Arriving in summer without booked accommodation: there is little to be found on the island at the last minute',
      'Parking in passing places: they are there to let cars through',
      'Setting off on the trails in city shoes: the ground is often muddy',
    ],
    miaEsperienza: 'I did the Isle of Skye too.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Old Man of Storr",
        "testo": "The rock pinnacle above the road north of Portree, the symbol of the island. The path climbs among the rocks to the foot of the spire.",
        "come": "By car to the car park on the A855, then uphill on foot.",
        "quando": "At dawn or in the evening, when there are fewer people.",
        "tempo": "2 hours there and back",
        "costo": "Free path; pay car park, about £5-6 (about €6-7) for a few hours, free in the evening and overnight",
        "orari": "Always accessible",
        "lat": 57.50669,
        "lng": -6.18368,
        "consiglio": "At the top the wind is strong even in summer: bring a jacket and layers."
      },
      {
        "nome": "Quiraing",
        "testo": "A huge landslip on the side of the Trotternish ridge, with pinnacles, terraces and sheer green walls. You can already see it from the single-track road that crosses the ridge.",
        "come": "By car on the road between Staffin and Uig, then on foot on the path.",
        "quando": "With clear skies: in fog you see nothing.",
        "tempo": "1-3 hours",
        "costo": "Free path",
        "orari": "Always accessible",
        "lat": 57.64083,
        "lng": -6.27389,
        "consiglio": "On the Quiraing road, stop only in car parks, never in passing places. Even the first stretch of the path is enough for the view."
      },
      {
        "nome": "Fairy Pools",
        "testo": "A series of clear pools and small waterfalls along a stream at the foot of the Cuillin mountains.",
        "come": "By car to the car park at Glen Brittle, then on foot.",
        "quando": "Early in the morning.",
        "tempo": "1-2 hours",
        "costo": "Free path; pay car park, run by a body that uses it to maintain the paths",
        "orari": "Always accessible",
        "lat": 57.25,
        "lng": -6.2565,
        "consiglio": "The river crossings are on stepping stones: in the rain you get wet feet."
      },
      {
        "nome": "Talisker distillery",
        "testo": "Founded in 1830, it is, by its own account, the oldest working distillery on the island. It stands in Carbost, on the shore of Loch Harport.",
        "come": "By booking on malts.com, recommended especially in summer. Children under 8 are not admitted.",
        "quando": "March to October 10-17, November to February 10-16:30 (2026). Annual maintenance from October 11 to November 1, 2026, with some experiences suspended.",
        "tempo": "1 hour",
        "costo": "Tour with tasting from £22 (2026)",
        "url": "https://www.malts.com/en-gb/distilleries/talisker",
        "orari": "March to October 10am-5pm, November to February 10am-4.30pm",
        "lat": 57.30278,
        "lng": -6.35611
      },
      {
        "nome": "Portree",
        "testo": "The island's main town, with its harbour and the coloured houses on the quay. It has the restaurants, shops, petrol stations and most of the accommodation.",
        "come": "By car; the centre is easy on foot.",
        "quando": "In the evening, for dinner.",
        "tempo": "1-2 hours",
        "costo": "Free",
        "lat": 57.412,
        "lng": -6.192
      },
      {
        "nome": "Kilt Rock and Mealt Falls",
        "testo": "A basalt cliff of columns that looks like the pleats of a kilt, and next to it Mealt Falls, dropping straight into the sea. Both are seen from the viewpoint a few steps from the car park.",
        "come": "By car on the A855, on the Trotternish loop, between the Storr and Staffin.",
        "tempo": "20 minutes",
        "costo": "Free",
        "lat": 57.60639,
        "lng": -6.17861
      },
      {
        "nome": "Fairy Glen",
        "testo": "A small glen above Uig with conical hills, little lochans and a tower-shaped rock. It is a short stop on the Trotternish loop.",
        "come": "By car from Uig, on a narrow road; then on foot.",
        "quando": "Morning or evening.",
        "tempo": "45 minutes",
        "costo": "Free"
      },
      {
        "nome": "Neist Point",
        "testo": "The lighthouse on the island's westernmost tip, at the end of a headland of cliffs. People come mainly for the sunset, over the open sea towards the Outer Hebrides.",
        "come": "By car to the car park, then on foot on a steep path, hard work on the way back.",
        "quando": "At sunset.",
        "tempo": "1-1.5 hours",
        "costo": "Free",
        "lat": 57.421,
        "lng": -6.787
      },
      {
        "nome": "Dunvegan Castle",
        "testo": "The seat of Clan MacLeod, lived in by the same family for centuries, with gardens on the loch. Boats leave from the jetty to see the seals.",
        "come": "By car, in the north-west of the island. No need to pre-book admission.",
        "quando": "In the opening season, in the morning.",
        "tempo": "2 hours",
        "costo": "Castle and gardens £18, about €21; seal boat trip £14.50, about €17, with a castle or garden ticket",
        "orari": "From 26 March to 15 October daily 10am-5.30pm, last entry 5pm; seal trips Monday to Friday until 30 September. Closed in winter.",
        "lat": 57.448,
        "lng": -6.59,
        "url": "https://www.dunvegancastle.com/"
      },
      {
        "nome": "Eilean Donan Castle",
        "testo": "The castle on the islet where three lochs meet, linked to the shore by a stone bridge. It is on the mainland, on the road to the Skye Bridge.",
        "come": "By car on the A87, at Dornie.",
        "quando": "In the morning, before the coaches.",
        "tempo": "1 hour",
        "costo": "Adults £13, about €15 (2026)",
        "orari": "2026: June-August 9am-6pm, May and September 9.30am-6pm, April and until 24 October 10am-6pm; from 25 October to 22 December and in February-March 10am-4pm. Last entry one hour before. Closed all of January and on some days in November and December.",
        "lat": 57.27403,
        "lng": -5.51611,
        "url": "https://www.eileandonancastle.com/"
      },
      {
        "nome": "Sligachan",
        "testo": "The old stone bridge over the River Sligachan, with the black peaks of the Cuillin behind. It stands at the junction of the main roads on the island.",
        "come": "By car, between Portree and Broadford.",
        "tempo": "20 minutes",
        "costo": "Free",
        "lat": 57.28933,
        "lng": -6.17555
      },
      {
        "nome": "Elgol",
        "testo": "A village on the south coast with the most famous view of the Cuillin, across Loch Scavaig. Boats leave from here for Loch Coruisk.",
        "come": "By car from Broadford, on a single-track road.",
        "quando": "In the afternoon, with the light on the mountains.",
        "tempo": "half a day with the boat",
        "lat": 57.152,
        "lng": -6.098
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Old Man of Storr at dawn",
          "Kilt Rock and Mealt Falls",
          "Quiraing",
          "Fairy Glen",
          "Portree in the evening"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Old Man of Storr at dawn, the Trotternish loop with the Quiraing, Portree in the evening",
          "Day 2: Fairy Pools in the morning, Talisker in the afternoon"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Old Man of Storr at dawn, Kilt Rock, Quiraing and Fairy Glen, Portree in the evening",
          "Day 2: Fairy Pools in the morning, Talisker in the afternoon, Neist Point at sunset",
          "Day 3: Dunvegan, Sligachan and Elgol, then the bridge with a stop at Eilean Donan"
        ]
      }
    ],
    zone: [
      {
        "nome": "Portree",
        "perChi": "anyone who wants restaurants and services",
        "testo": "The main town of the island, close to Trotternish.",
        "fascia": "€100-220"
      },
      {
        "nome": "South of the island",
        "perChi": "anyone arriving by ferry from Mallaig",
        "testo": "Quieter, close to Armadale.",
        "fascia": "€90-180"
      },
      {
        "nome": "West coast: Carbost and Dunvegan",
        "perChi": "those who want Talisker, the Fairy Pools and Neist Point",
        "testo": "More isolated, with B&Bs and cottages; restaurants are few and dinner is early.",
        "fascia": "€100-200"
      },
      {
        "nome": "Kyle of Lochalsh and Dornie",
        "perChi": "those who find the island full or are heading on to Inverness",
        "testo": "On the mainland, next to the bridge and Eilean Donan, with a railway station.",
        "fascia": "€90-170"
      }
    ],
    attenzioni: [
      "Single-track roads: pull into the passing place on your left, or wait opposite the one on your right.",
      "Sheep and deer on the road, even during the day.",
      "Weather that changes within an hour: always keep a waterproof jacket in the car."
    ],
    gite: [
      {
        "nome": "Raasay",
        "distanza": "about 30 km from Portree to the Sconser ferry",
        "come": "CalMac ferry from Sconser, with or without a car.",
        "testo": "The island facing Skye, with hardly any tourists, hill paths and the Raasay distillery."
      },
      {
        "nome": "Applecross and the Bealach na Bà",
        "distanza": "about 60 km from the Skye Bridge",
        "come": "By car, heading north on the mainland; the road is narrow and steep.",
        "testo": "The pass with tight hairpins and views of Skye, and at the end the village of Applecross by the sea. It is the western stretch of the North Coast 500."
      },
      {
        "nome": "Mallaig and the Morar coast",
        "distanza": "30 minutes by ferry from Armadale",
        "come": "CalMac ferry Armadale-Mallaig.",
        "testo": "The harbour at the end of the West Highland Line, and just south the white sand beaches of Morar."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need on Skye?",
        "risposta": "Two days for Trotternish, with the Storr and the Quiraing, and for the Fairy Pools with Talisker. With three you add Neist Point, Dunvegan and Elgol and have some slack for bad weather."
      },
      {
        "domanda": "Is it better to arrive by bridge or by ferry?",
        "risposta": "The bridge from Kyle of Lochalsh is free and always open. The ferry from Mallaig to Armadale takes about half an hour and is handy coming from Glenfinnan, but with a car it must be booked."
      },
      {
        "domanda": "Can you get around Skye without a car?",
        "risposta": "It is hard: buses are few and do not reach the most famous paths. Without a car, stay in Portree and take organised tours."
      },
      {
        "domanda": "Where is the best place to stay on Skye?",
        "risposta": "Portree, which has the most accommodation and restaurants and is close to Trotternish. In summer book months ahead: at the last minute there is little left."
      },
      {
        "domanda": "When is the best time to visit Skye?",
        "risposta": "May to September, with long days. In July and August the car parks at the trailheads fill early, and on still evenings there are midges, small biting insects: bring repellent."
      },
      {
        "domanda": "Do you need to book Talisker distillery?",
        "risposta": "It is worth it, on malts.com, especially in summer. Children under 8 are not admitted."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'The green walls and pinnacles of the Quiraing, on the Isle of Skye',
    immagine: `${IMG}/giorno-07-quiraing.webp`,
  },
  {
    slug: 'inverness-loch-ness',
    paeseSlug: 'scozia',
    ordine: 7,
    nome: 'Inverness and Loch Ness',
    tipologia: ['lago', 'castelli', 'città'],
    giorniConsigliati: '1 day',
    visitataPersonalmente: true,
    introduzione:
      'Inverness is the capital of the Highlands, on the River Ness. To the southwest begins Loch Ness, the long, deep loch of the monster, with the ruins of Urquhart Castle on the shore.',
    percheAndarci: 'For Urquhart on the loch and as a base for Speyside and for the North Coast 500, which starts and ends here.',
    cosaVedere: ['Urquhart Castle', 'Loch Ness', 'The Inverness riverside'],
    cosaFare: ['Visiting Urquhart in the morning', 'A walk along the Ness in Inverness'],
    comeArrivare: "By car on the A82 along the whole north shore of Loch Ness from Fort William, via Fort Augustus and Urquhart; from Skye you go via Eilean Donan and Glen Shiel, about three hours from Portree without stops. From Inverness to Dufftown, in Speyside, it's about an hour and a quarter. Inverness airport has flights from London and other UK cities, and by train you arrive from Edinburgh and Glasgow on the Highland line; the station is right in the centre.",
    comeSpostarsi: 'By car.',
    costi: "Urquhart £14 online, Inverness Castle £20, Fort George £10, Loch Ness Centre £16 (2026); Clava Cairns, the Ness Islands, Dores and Chanonry Point are free. Rough daily budget per person, sharing a double and with the car on top: low €80-110, mid €140-200, high over €280.",
    erroriDaEvitare: ['Arriving at Urquhart without a ticket in high season: book online with a date and time'],
    miaEsperienza: 'I did Inverness and Loch Ness. Loch Ness, honestly, is a bit meh: on its own it\'s not worth the trip.',
    // GUIDA-START
    luoghi: [
      {
        nome: "Urquhart Castle",
        testo: "The ruins of a medieval castle on a headland of Loch Ness, near Drumnadrochit. The Grant Tower still stands, with views up and down the loch; it's the most photographed spot on the shore.",
        come: "By car on the A82. Tickets online on the Historic Environment Scotland website, with date and time: once they sell out online there are none at the door. Parking is free but guaranteed only with a booking.",
        quando: "At opening time, before the coaches.",
        tempo: "1-2 hours",
        costo: "£14 online (about €16), £16 on the door (adults, 2026)",
        orari: "1 April-31 August 9.30am-8.15pm; September 9.30am-6pm; October 9.30am-5pm; November-March 9.30am-4.30pm. Last entry one hour before closing; closed 25 and 26 December.",
        lat: 57.324,
        lng: -4.442,
        url: "https://www.historicenvironment.scot/visit-a-place/places/urquhart-castle/",
      },
      {
        nome: "Inverness Castle Experience",
        testo: "The 19th-century red sandstone castle above the river, for years the town's courthouse, reopened in February 2026 as a museum on the stories, landscapes and people of the Highlands. From the rooftop terrace you see the whole town along the Ness.",
        come: "On foot from the centre, up a short climb. Timed tickets, cheaper online; the gardens, bistro and shop are free to enter.",
        quando: "In the morning, or late afternoon in summer when it stays open into the evening.",
        tempo: "1-2 hours",
        costo: "£20 online (about €23), £22 walk-up (adults 16-65, 2026)",
        orari: "April to September daily 10am-7pm, last entry 5pm; October to March 10am-6pm, last entry 4pm. Closed 25 and 26 December and 1 January.",
        lat: 57.4764,
        lng: -4.2254,
        url: "https://invernesscastle.scot",
      },
      {
        nome: "Ness Islands",
        testo: "A group of wooded islets in the middle of the river, linked by Victorian footbridges. It's the classic Inverness walk, ten minutes from the centre and away from traffic.",
        come: "On foot along the banks of the Ness, on a loop starting from the castle or the cathedral.",
        quando: "Early in the morning or at sunset.",
        tempo: "1 hour",
        costo: "free",
        lat: 57.4632,
        lng: -4.2307,
      },
      {
        nome: "St Andrew's Cathedral",
        testo: "The pink sandstone Episcopal cathedral on the west bank of the river, completed in 1869, with twin towers and stained glass. From the opposite bank, with the castle facing it, it's one of the best views in town.",
        come: "On foot from the centre across the Ness Bridge or the Greig Street footbridge.",
        quando: "During the day, outside service times.",
        tempo: "30 minutes",
        lat: 57.47444,
        lng: -4.22917,
      },
      {
        nome: "Victorian Market",
        testo: "The 19th-century covered market in the centre, with an iron and glass roof, small independent shops and a food hall with stalls of different cuisines. Handy for a quick lunch on a rainy day.",
        come: "On foot in the centre, with entrances on Academy Street and Church Street.",
        quando: "At lunchtime.",
        tempo: "30-60 minutes",
        lat: 57.4791,
        lng: -4.2251,
      },
      {
        nome: "Leakey's Bookshop",
        testo: "One of the largest second-hand bookshops in Scotland, inside an 18th-century Gaelic church, with a wood-burning stove in the middle and shelves up to the gallery. Worth going in just to look.",
        come: "On foot in the centre, on Church Street, next to the Greyfriars burial ground.",
        quando: "On a rainy day.",
        tempo: "30-60 minutes",
        lat: 57.48028,
        lng: -4.22867,
      },
      {
        nome: "Culloden",
        testo: "The moor where on 16 April 1746 Charles Edward Stuart's Jacobite army was defeated by government troops: the last pitched battle fought in Britain. Red and blue flags mark the lines of the two armies, and the National Trust for Scotland visitor centre tells the story of the day.",
        come: "By car, about 9 km east of Inverness on the B9006; the battlefield is open all year, the visitor centre has its own hours and ticket, to be booked.",
        quando: "In the morning, before the groups; in low light the moor is at its most atmospheric.",
        tempo: "2 hours",
        lat: 57.47722,
        lng: -4.0925,
        url: "https://www.nts.org.uk/visit/places/culloden",
        consiglio: "Pairs well with Clava Cairns, a few minutes' drive away.",
      },
      {
        nome: "Clava Cairns",
        testo: "A Bronze Age cemetery, about 4,000 years old: three large stone cairns ringed by standing stones, in a beech wood. A quiet place, far less crowded than Culloden.",
        come: "By car, signposted from the B9091, a few hundred metres east of Culloden; parking on site.",
        quando: "Early morning or at sunset, with the light through the trees.",
        tempo: "30-45 minutes",
        costo: "free",
        orari: "Open all year.",
        lat: 57.47367,
        lng: -4.07435,
        url: "https://www.historicenvironment.scot/visit-a-place/places/clava-cairns/",
      },
      {
        nome: "Fort George",
        testo: "An 18th-century military fortress on a spit of land in the Moray Firth, built after Culloden and still an army barracks today. You walk the ramparts along the sea, and from the walls you sometimes see dolphins.",
        come: "By car, about 20 km north-east of Inverness, beyond Ardersier.",
        quando: "On a clear day, for the view over the firth.",
        tempo: "2 hours",
        costo: "£10 online (about €12), £11 on the door (adults, 2026)",
        orari: "1 April-30 September daily 9.30am-5.30pm; 1 October-31 March 10am-4pm. Last entry one hour before closing; closed 25 and 26 December and 1 and 2 January.",
        lat: 57.58389,
        lng: -4.07028,
        url: "https://www.historicenvironment.scot/visit-a-place/places/fort-george/",
      },
      {
        nome: "Chanonry Point",
        testo: "A shingle point on the Black Isle, opposite Fort George, where the Moray Firth bottlenose dolphins hunt very close to the shore. It's one of the best places in the UK to see them from land.",
        come: "By car from Inverness over the Kessock Bridge and through Fortrose, about 25 minutes; a small car park by the lighthouse, then a walk on the beach.",
        quando: "May to September, on a rising tide.",
        tempo: "1-2 hours",
        costo: "free",
        lat: 57.57421,
        lng: -4.09352,
        consiglio: "The car park fills early: you can leave the car in Rosemarkie and walk along the beach.",
      },
      {
        nome: "Loch Ness Centre, Drumnadrochit",
        testo: "The visitor centre on the loch, with a multimedia route on the geology of Loch Ness, the scientific searches and the Nessie legend. Useful to understand the loch before or after Urquhart, a few minutes away.",
        come: "By car on the A82, in the village of Drumnadrochit; timed tickets, cheaper online.",
        quando: "On a rainy day or combined with Urquhart.",
        tempo: "1 hour",
        costo: "£16 online (about €18), £18 walk-in (adults, 2026)",
        orari: "Hours change with the season and are published in the calendar on the website.",
        lat: 57.33737,
        lng: -4.47787,
        url: "https://lochness.com",
      },
      {
        nome: "Fort Augustus and the Caledonian Canal locks",
        testo: "The village at the southern end of Loch Ness, crossed by a flight of five Caledonian Canal locks stepping down to the loch. You watch the boats rise and fall from the tables of the pubs along the canal.",
        come: "By car on the A82, about 50 minutes from Inverness; pay parking in the village.",
        quando: "In summer, when boat traffic is busiest.",
        tempo: "1 hour",
        costo: "free",
        lat: 57.14496,
        lng: -4.6837,
      },
      {
        nome: "Dores Beach",
        testo: "A pebble beach at the northern end of Loch Ness, on the south shore, with a long view down the whole length of the loch. Much quieter than the north shore, and the place to see Loch Ness without the coaches.",
        come: "By car from Inverness on the B862, about 20 minutes; parking next to the village pub.",
        quando: "At sunset, with calm water.",
        tempo: "30-60 minutes",
        costo: "free",
        lat: 57.38393,
        lng: -4.33634,
      },
      {
        nome: "Falls of Foyers",
        testo: "A waterfall of about 50 metres in a wooded gorge above the south shore of Loch Ness, celebrated by Robert Burns. A stepped path leads down to the viewpoints.",
        come: "By car on the B852 along the south shore, about 35 minutes from Inverness; parking in Foyers village.",
        quando: "After rain, when the flow is strongest.",
        tempo: "45 minutes",
        costo: "free",
        lat: 57.24862,
        lng: -4.49269,
        consiglio: "Combine it with Dores for a loop of the south shore, quieter than the A82.",
      },
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Urquhart at opening time, with an online ticket",
          "Loch Ness Centre in Drumnadrochit and lunch",
          "Back to Inverness: Inverness Castle Experience and the rooftop terrace",
          "Walk to the Ness Islands and dinner in the centre",
        ],
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Inverness, with the castle, the cathedral, the Victorian Market, Leakey's and the Ness Islands",
          "Day 2: Culloden and Clava Cairns in the morning, Urquhart in the afternoon, sunset at Dores Beach",
        ],
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: Fort George in the morning and Chanonry Point on a rising tide for the dolphins; or the south shore loop with Dores and the Falls of Foyers to Fort Augustus",
        ],
      },
    ],
    zone: [
      {
        nome: "Centre and riverside",
        perChi: "those arriving by train who want everything on foot",
        testo: "Hotels and guesthouses around the station and along Ness Bank and Huntly Street, on both banks of the river, a few minutes from the castle and the restaurants.",
        fascia: "€120-240",
      },
      {
        nome: "Crown and Old Edinburgh Road",
        perChi: "those looking for a quiet B&B 10-15 minutes' walk from the centre",
        testo: "Victorian residential streets on the hill above the castle, with many houses turned into B&Bs and easier parking.",
        fascia: "€90-170",
      },
      {
        nome: "Drumnadrochit, on Loch Ness",
        perChi: "those who want to sleep by the loch and reach Urquhart before the coaches",
        testo: "A village on the A82 half an hour from Inverness, with a few hotels, B&Bs and a couple of pubs; not much to do in the evening.",
        fascia: "€110-200",
      },
    ],
    gite: [
      {
        nome: "Speyside and the distilleries",
        distanza: "about 1 hour 15 minutes to Dufftown",
        come: "By car: the distilleries are a few minutes apart between Dufftown, Craigellachie and Aberlour, all by booking.",
        testo: "The glen with the most distilleries in Scotland: Glenfiddich, The Macallan, The Glenlivet, Cardhu. Two tours a day are enough.",
      },
      {
        nome: "Cawdor Castle",
        distanza: "about 25 km east",
        come: "By car via Culloden; pairs well with Fort George.",
        testo: "A castle lived in since the 14th century, linked to Shakespeare's Macbeth, with well-kept gardens and woodland around it.",
      },
      {
        nome: "Black Isle and Glen Ord",
        distanza: "about 25 minutes north-west",
        come: "By car over the Kessock Bridge; Glen Ord is at Muir of Ord, Chanonry Point on the Fortrose side.",
        testo: "The peninsula of the dolphins and of the Singleton distillery: classic tour from £24 (2026), to be booked. Glen Ord is also the start or finish point of the North Coast 500.",
      },
    ],
    faq: [
      {
        domanda: "Is Loch Ness worth it?",
        risposta: "It's worth a stop on the way, with Urquhart and a view from Dores or Fort Augustus, but on its own it doesn't justify the trip. Better to fit it between Skye, Fort William and Speyside.",
      },
      {
        domanda: "Do you need to book Urquhart Castle?",
        risposta: "Yes, especially in summer: it's sold online with date and time at £14 (£16 on the door, 2026), and when the online tickets run out there are none on site. Booking also guarantees parking.",
      },
      {
        domanda: "How many days do you need in Inverness?",
        risposta: "One day for the town and Urquhart, two to add Culloden and Clava Cairns, three with Fort George and the Chanonry Point dolphins.",
      },
      {
        domanda: "Where can you see dolphins near Inverness?",
        risposta: "At Chanonry Point, on the Black Isle, from May to September on a rising tide: they swim a few metres from the shore. Sometimes you see them from the walls of Fort George too.",
      },
      {
        domanda: "Is Inverness Castle open?",
        risposta: "Yes, since February 2026 it's open all year as the Inverness Castle Experience: adult ticket £20 online, £22 walk-up (2026).",
      },
      {
        domanda: "Can you visit Loch Ness without a car?",
        risposta: "Partly: Citylink buses between Inverness and Fort William run along the A82 and stop at Drumnadrochit, Urquhart and Fort Augustus. For the south shore, Dores and Foyers you need a car.",
      },
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'The ruins of Urquhart Castle on the shore of Loch Ness',
    immagine: `${IMG}/giorno-09-urquhart.webp`,
  },
  {
    slug: 'speyside',
    paeseSlug: 'scozia',
    ordine: 8,
    nome: 'Speyside',
    tipologia: ['distillerie', 'campagna', 'cibo e bevande'],
    giorniConsigliati: '1-2 days',
    visitataPersonalmente: true,
    introduzione:
      'The valley of the River Spey, between Inverness and Aberdeen, is the area of Scotland with the most distilleries. Here are famous names like Glenfiddich in Dufftown, The Macallan near Craigellachie, The Glenlivet and Cardhu.',
    percheAndarci: 'For the distillery trail, among hills, rivers and villages, less than two hours from Inverness.',
    cosaVedere: ['Glenfiddich, in Dufftown', 'The Macallan', 'The Glenlivet', 'Cardhu, in Knockando', 'The village of Aberlour'],
    cosaFare: ['Two distillery tours a day, no more', 'A walk along the Spey'],
    comeArrivare: 'By car from Inverness or Aviemore.',
    comeSpostarsi:
      "By car, with a driver who doesn't drink. Alternatively an organised tour or a taxi: some distilleries, such as Cardhu, are not served by public transport.",
    erroriDaEvitare: [
      'Driving after the tastings: in Scotland the limit is lower than in England, and the advice is not to drink at all',
      'Arriving without booking: tours have limited places',
      'Cramming too many distilleries into one day',
    ],
    miaEsperienza: 'I did the distillery trail too.',
    // GUIDA-START
    luoghi: [
      {
        nome: 'Glenfiddich',
        testo: 'The Dufftown distillery, one of the best-known names in Speyside single malt.',
        come: 'Tours by booking on the official website glenfiddich.com, where you should check prices and hours.',
        tempo: '1-2 hours',
        url: 'https://www.glenfiddich.com',
      },
      {
        nome: 'The Macallan',
        testo: 'The distillery estate near Craigellachie, with the modern building and its undulating grass-covered roof.',
        come: 'Visits by booking on the official website themacallan.com, where you should check prices and hours.',
        tempo: '2 hours',
        url: 'https://www.themacallan.com',
      },
      {
        nome: 'The Glenlivet',
        testo: 'The distillery in the valley of the Livet, a tributary of the Spey, in one of the most remote parts of Speyside.',
        come: 'Visits by booking on the official website theglenlivet.com, where you should check prices and hours.',
        tempo: '1-2 hours',
        url: 'https://www.theglenlivet.com',
      },
      {
        nome: 'Cardhu',
        testo: 'The Knockando distillery, linked to Johnnie Walker, with many tour and tasting options.',
        come: "By booking on malts.com. It can't be reached by public transport. Children under 8 are not admitted.",
        quando: 'January and February Thursday to Monday 10-16; March and April 10-17; May to September 10-18; October to December 10-17 (2026).',
        tempo: '1-1.5 hours',
        costo: 'From £18 for "A Nip Round" (1 hour) and £23 for the "Flavour Journey" (1 hour and a half) (2026)',
        url: 'https://www.malts.com/en-gb/distilleries/cardhu',
      },
    ],
    attenzioni: [
      "Whoever drives doesn't drink: many distilleries give the \"driver's dram\", a sample in a small sealed bottle to take away. Not all of them do, so ask when you book.",
      'Children under 8 are not admitted to the tours of many distilleries.',
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'Whisky poured into tasting glasses at the Glenfiddich distillery in Dufftown',
    immagine: `${IMG}/giorno-10-glenfiddich.webp`,
  },
  {
    slug: 'cairngorms',
    paeseSlug: 'scozia',
    ordine: 9,
    nome: 'Cairngorms',
    tipologia: ['natura', 'montagna', 'parco nazionale'],
    giorniConsigliati: '1 day',
    visitataPersonalmente: true,
    introduzione:
      'The largest national park in the United Kingdom, between Speyside and the A9 road towards Perth. Rounded mountains, pine forests, lochs like Loch Morlich, and Aviemore as a base.',
    percheAndarci: 'For a day of nature on the way back to Edinburgh, with a stop at Dalwhinnie distillery.',
    cosaVedere: ['Loch Morlich', 'Rothiemurchus Forest', 'Aviemore', 'Dalwhinnie distillery'],
    cosaFare: ['A walk around Loch Morlich', 'The stop at Dalwhinnie, on the A9'],
    comeArrivare: 'By car on the A9, or by train to Aviemore.',
    comeSpostarsi: 'By car or by bike around Aviemore.',
    erroriDaEvitare: ['Going up high without proper gear: on the Cairngorms summits the weather is real mountain weather even in summer'],
    miaEsperienza: 'I did the Cairngorms too.',
    // GUIDA-START
    luoghi: [
      {
        nome: 'Dalwhinnie distillery',
        testo: 'Founded in 1897, it is one of the highest distilleries in Scotland, at 355 metres, inside Cairngorms National Park. It is an easy stop on the A9 between Inverness and Perth.',
        come: 'By booking on malts.com.',
        quando: 'Every day 10-16 (2026).',
        tempo: '45 minutes for the classic tour',
        costo: 'Tour with tasting from £21; guided tasting from £14 (2026)',
        url: 'https://www.malts.com/en-gb/distilleries/dalwhinnie',
      },
      {
        nome: 'Loch Morlich',
        testo: 'A loch among the pines at the foot of the Cairngorms, with a beach and a circular path.',
        come: 'By car from Aviemore.',
        tempo: '1-2 hours',
      },
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'Loch Morlich with the pines and the Cairngorms mountains in the background',
    immagine: `${IMG}/giorno-11-cairngorms.webp`,
  },
  {
    slug: 'north-coast-500',
    paeseSlug: 'scozia',
    ordine: 10,
    nome: 'North Coast 500',
    tipologia: ['on the road', 'costa', 'natura'],
    giorniConsigliati: '4-7 days',
    visitataPersonalmente: true,
    introduzione:
      'A 516-mile loop, about 830 km, that starts and ends in Inverness and goes around the northern tip of Scotland. It passes through the Black Isle, Easter Ross, Caithness, Sutherland and Wester Ross: mountains, white beaches, cliffs and single-track roads.',
    percheAndarci: 'For the most beautiful road in the north: the Bealach na Bà pass, the mountains of Torridon and Assynt, the beaches of Sutherland and the cliffs of Duncansby.',
    cosaVedere: [
      'The Bealach na Bà and Applecross',
      'Torridon',
      'Ullapool',
      'Ardvreck Castle on Loch Assynt',
      'The Kylesku bridge',
      'Smoo Cave in Durness',
      "John o' Groats and the Duncansby Stacks",
      'Glen Ord distillery, on the Black Isle',
    ],
    cosaFare: ['Driving the Bealach na Bà under clear skies', 'A day with few hours of driving and many stops', 'The boat trip into Smoo Cave in summer'],
    comeArrivare: 'From Inverness, in either direction. From Skye you join it on the west side, towards Applecross.',
    comeSpostarsi:
      "By car. The whole loop without stopping takes 11-13 hours of driving, but most people who do it take 5-7 days. Long stretches are single-track with passing places: choose a car that isn't too big.",
    periodoMigliore: 'May to September',
    erroriDaEvitare: [
      'Doing it in three days: you spend the day at the wheel and never stop',
      'Driving the Bealach na Bà with a large motorhome or in fog',
      'Setting off with a half-empty tank on the most remote stretches',
      'Sleeping in a motorhome outside permitted areas',
    ],
    miaEsperienza: 'I drove it in July, and it\'s breathtaking. And the weather, as everywhere in Scotland, is unpredictable. Autumn, with the foliage, is beautiful too.',
    // GUIDA-START
    luoghi: [
      {
        nome: 'Bealach na Bà',
        testo: 'The mountain pass towards Applecross, with tight hairpins and steep gradients on a single-track road. On a clear day you can see the Isle of Skye from the top.',
        come: "By car, slowly, giving way in the passing places. It's not a road for large motorhomes or for anxious drivers.",
        quando: 'With clear skies and never in ice.',
        tempo: '1 hour with stops',
      },
      {
        nome: 'Assynt and Kylesku',
        testo: 'Isolated mountains rising from the moorland, the ruined Ardvreck Castle on Loch Assynt and the curved Kylesku bridge over the strait.',
        come: 'By car, on the road north from Ullapool.',
        tempo: 'half a day',
      },
      {
        nome: 'Smoo Cave',
        testo: 'A huge sea cave in Durness, with a waterfall inside.',
        come: 'On foot from the car park above the cave.',
        tempo: '1 hour',
      },
      {
        nome: 'Duncansby Stacks',
        testo: "The pointed sea stacks off the cliffs of Duncansby Head, just past John o' Groats, on the Pentland Firth.",
        come: 'On foot from the Duncansby Head lighthouse, across the grass on top of the cliffs.',
        tempo: '1 hour',
      },
      {
        nome: 'Glen Ord',
        testo: 'The distillery of The Singleton, on the edge of the Black Isle near Muir of Ord.',
        come: 'By booking on malts.com; dates are released about 90 days ahead. Children under 8 are not admitted.',
        quando: 'Every day: May to August 10-18, September to April 10-17 (2026).',
        tempo: '1 hour and a quarter for the classic tour',
        costo: 'Classic tour from £24 (2026)',
        url: 'https://www.malts.com/en-gb/distilleries/the-singleton-of-glen-ord',
      },
    ],
    programmi: [
      {
        titolo: '4 days from Skye to Inverness',
        tappe: [
          'Day 1: from Skye to Applecross over the Bealach na Bà, then Torridon',
          'Day 2: from Torridon to Ullapool, then Assynt and Ardvreck',
          'Day 3: Kylesku and the Sutherland coast to Durness and Smoo Cave',
          "Day 4: from Durness to John o' Groats and Duncansby, then the east coast to Inverness with Glen Ord",
        ],
      },
    ],
    attenzioni: [
      'Single-track roads: passing place on the left, or wait opposite the one on the right; never park in passing places.',
      'Sheep, cows and deer on the road.',
      'Petrol stations and shops are rare on the most remote stretches: fill up whenever you can.',
      'Stretches with no signal: download offline maps beforehand.',
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'The single-track road of the Bealach na Bà winding down between the mountains towards the sea',
    immagine: `${IMG}/nc500-bealach-na-ba.webp`,
  },
]
