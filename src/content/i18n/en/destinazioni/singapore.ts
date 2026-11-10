import type { Destinazione } from '@/lib/types'

export const destinazioniSingapore: Destinazione[] = [
  {
    slug: 'marina-bay',
    paeseSlug: 'singapore',
    ordine: 1,
    nome: 'Marina Bay and the Gardens',
    tipologia: ['architettura', 'città', 'panorami'],
    giorniConsigliati: '1 day, with the evening devoted to the Gardens',
    visitataPersonalmente: true,
    introduzione:
      "The bay built on land taken from the sea, where everything that makes Singapore recognizable is found: the hotel with a ship on the roof, the fifty-meter-tall Supertrees, the air-conditioned conservatories and the lotus-shaped museum. It's the city as it wants to be seen, and it works.",
    percheAndarci:
      "Because it's one of the most successful urban planning experiments of the last thirty years: an entire bay designed from scratch that risked becoming an open-air shopping mall. Instead it holds up, especially after sunset.",
    cosaVedere: [
      "The Supertree Grove at Gardens by the Bay, with the free evening light show",
      "The Flower Dome and Cloud Forest conservatories, with the large indoor waterfall",
      "Marina Bay Sands and its rooftop observation deck",
      "The Helix Bridge and the Merlion, the city's symbol statue",
      "The ArtScience Museum, shaped like a lotus, at the tip of the bay",
      "The illuminated waterfront, which you can walk all the way around",
    ],
    cosaFare: [
      "Light show at the Supertrees after sunset (see the dedicated experience page)",
      "A full walk around the bay, best at blue hour",
      "Go up to a rooftop bar instead of the observation deck: you pay for a cocktail and get the same view",
      "Evenings at the Marina Barrage, the dam with a lawn on its roof where Singaporeans fly kites",
    ],
    doveDormire:
      "The area is the most expensive in the city. Those who sleep here do it for the view; those who want to spend less stay in Chinatown, Bugis or Geylang and get here by metro in ten minutes, which is the reasonable choice.",
    doveMangiare:
      "It's the part of the city where you eat worst for the price: the restaurants around the bay are designed for people who don't move. The advice is to eat at a hawker centre in Chinatown or Bugis and come here after dinner.",
    comeArrivare: "From Changi, take the green MRT line to Expo and change there to the blue Downtown Line for Bayfront or Promenade: about 40 minutes and 2-3 SGD (about €2) paying with a contactless card at the gate, roughly 5:30am to 11:30pm. Taxis and Grab take 20-30 minutes and cost about 25-45 SGD (€16-30), plus the airport surcharge of up to 8 SGD and 50% extra after midnight. In the city, the Bayfront, Marina Bay, Promenade and Esplanade stations cover the whole bay.",
    comeSpostarsi:
      "All on foot, but with a warning: the heat is serious and there's little shade. The air-conditioned underground passages connecting the shopping malls are the city's real pedestrian network and are worth using.",
    periodoMigliore:
      "all year, better in the evening: there are the lights, and during the day the humidity on the bay is heavy and the asphalt radiates heat back.",
    costi: "The bay, the Supertrees, the Garden Rhapsody and Spectra light shows and the walk around are all free. The two conservatories cost 46 SGD for non-residents (about €30), the OCBC Skyway 14 SGD (about €9), the Marina Bay Sands deck about 35-39 SGD (€23-26), the National Gallery 20 SGD (about €13). Daily budget in Singapore: about €70-90 with a hostel and hawker centres, €150-220 with a mid-range central hotel, over €350 sleeping on the bay.",
    erroriDaEvitare: [
      "Paying for the Marina Bay Sands observation deck: it costs as much as a cocktail at the bar in the same building, which has the same view and where you can sit down",
      "Going to the Gardens in the middle of the day, when it's very hot and there are no lights",
      "Skipping the conservatories thinking they're just any botanical garden: the Cloud Forest, with its large indoor waterfall, is the most surprising thing in the area",
      "Having dinner around the bay: you pay double to eat worse than at any hawker center",
    ],
    miaEsperienza:
      "I expected an artificial place, and yet Marina Bay works. It's worth understanding why: the bay is closed off by a dam that turned seawater into a freshwater reservoir and solved half of the country's water problem. Knowing that, the Supertrees stop being fake trees and become what they are: rainwater collection and ventilation towers for the conservatories, with solar panels on top. The evening light show is free and lasts about fifteen minutes. We lay down on the lawn under the towers along with hundreds of people: it's the best thing in the city and it costs nothing. The Cloud Forest, with the thirty-meter waterfall inside an air-conditioned glass dome, is the other surprise. The rule for the whole area: don't pay for the view from above and order a cocktail at the bar of the same skyscraper.",
    luoghi: [
      {
        nome: "Supertree Grove at Gardens by the Bay",
        testo: "Eighteen tree-shaped structures between 25 and 50 metres tall, covered in plants and fitted with solar panels. They have a real job: they act as air intakes and exhausts for the conservatories' cooling and collect rainwater. In the evening they light up and there's a free light show.",
        come: "MRT to Bayfront, then a covered walkway into the gardens. The grove is free and self-guided; the elevated walkway (OCBC Skyway) is ticketed separately.",
        quando: "After sunset for the Garden Rhapsody light show, every evening at 19:45 and 20:45, about fifteen minutes; extra shows are added during festive periods (schedule on the official website).",
        tempo: "1.5 hours",
        costo: "gardens and show free; OCBC Skyway 14 SGD for non-residents, about €9 (2026)",
        url: "https://www.gardensbythebay.com.sg/",
        consiglio: "Lie on the lawn under the towers, as locals do, and watch the show lying down.",
        orari: "outdoor gardens daily from 5am to 2am; OCBC Skyway 9am-9pm",
        lat: 1.28195,
        lng: 103.86391
      },
      {
        nome: "Cloud Forest and Flower Dome",
        testo: "Two climate-controlled conservatories. In the Cloud Forest a 42-metre mountain covered in ferns, orchids and bromeliads has a 35-metre indoor waterfall: you take a lift to the top and walk down a path that circles the mountain. The Flower Dome recreates a cool, dry Mediterranean climate, with an olive grove and baobabs.",
        come: "Inside Gardens by the Bay, a few minutes' walk from the Supertrees. Separate ticket for each conservatory, one-way route.",
        quando: "Open daily, 9:00-21:00. Fewer people in the morning; in the rain they are the ideal refuge.",
        tempo: "1 hour per conservatory",
        url: "https://www.gardensbythebay.com.sg/",
        consiglio: "If you only pick one, the Cloud Forest: it is the most surprising thing in the area.",
        costo: "ticket for both conservatories 46 SGD for non-residents, about €30 (official website, 2026)",
        orari: "daily 9am-9pm; each dome closes in turn for a few maintenance days, dates on the official website",
        lat: 1.28396,
        lng: 103.8658
      },
      {
        nome: "Marina Bay Sands and the rooftop bar",
        testo: "The hotel with a 340-meter ship on top of three towers is the symbol of the city. The rooftop observation deck has a 360-degree view over the bay and the port.",
        come: "MRT to Bayfront; the shopping mall connects directly to the towers. To go up you can pay for the deck or go to the rooftop bar, where you order a drink.",
        quando: "At sunset, as the city lights come on.",
        tempo: "1 hour",
        consiglio: "Have a cocktail at the rooftop bar of the same building rather than buying the deck ticket: the view is the same and you get to sit down.",
        costo: "observation deck about 35 SGD by day and 39 SGD from 5pm, about €23-26 (2026)",
        orari: "deck daily 10am-10pm, last entry 9:30pm; early closures for events listed on the website",
        url: "https://www.marinabaysands.com/attractions/sands-skypark.html",
        lat: 1.2834,
        lng: 103.8607
      },
      {
        nome: "Helix Bridge, the Merlion and the waterfront",
        testo: "The double-helix pedestrian bridge, inspired by DNA (with the letters of the four bases on the structure), links Marina Centre to Marina South and is the best way to cross the bay. The Merlion, half lion and half fish, is the city's symbol statue; it's small, but the backdrop is right.",
        come: "On foot from Marina Bay Sands or Esplanade. The full loop around the bay can be walked entirely along the waterfront.",
        quando: "At blue hour, when the lights come on but there is still some sky.",
        tempo: "1.5 hours for the full loop",
        costo: "free",
        consiglio: "Walk the loop clockwise starting from the Merlion, so you reach the Gardens when the lights are already on.",
        orari: "always open",
        lat: 1.28766,
        lng: 103.86046
      },
      {
        nome: "ArtScience Museum",
        testo: "The lotus-shaped museum at the tip of the bay hosts temporary exhibitions on art, science and technology, often immersive. The program changes, so check what is on.",
        come: "On foot from Marina Bay Sands, facing the bay.",
        quando: "In the hottest hours of the day, since it is indoors and air-conditioned.",
        tempo: "1.5 hours",
        consiglio: "Check the program before deciding: you pay for the exhibitions, not for the building.",
        url: "https://www.marinabaysands.com/museum.html",
        lat: 1.28628,
        lng: 103.85929
      },
      {
        nome: "Marina Barrage",
        testo: "The dam that closed off the bay and turned Marina Bay and the Kallang Basin into a freshwater reservoir. On its green roof there's a lawn where Singaporeans come to fly kites.",
        come: "By bus or taxi from Marina Bay or Gardens by the Bay. It's a quiet stop, away from the crowds.",
        quando: "At sunset, with the skyline in front of you.",
        tempo: "1 hour",
        costo: "free",
        consiglio: "Bring a kite, or just a blanket and something to drink.",
        lat: 1.2805,
        lng: 103.871
      },
      {
        nome: "Spectra, the water show at Marina Bay Sands",
        testo: "Fifteen minutes of water jets, lasers and projections set to music, in front of Marina Bay Sands. It's the bay's other free evening show, different from the Supertree one: here the stage is the water.",
        come: "Watch it from the Event Plaza, the stepped waterfront in front of the Marina Bay Sands shops; no booking.",
        quando: "It fits with Garden Rhapsody: Supertrees at 7:45pm, then Spectra at 9pm.",
        tempo: "15 minutes",
        costo: "free",
        orari: "daily at 8pm and 9pm, plus a 10pm show on Friday and Saturday",
        url: "https://www.marinabaysands.com/attractions/spectra.html",
        consiglio: "Arrive ten minutes early to sit on the lowest steps, close to the water.",
        lat: 1.284,
        lng: 103.8588
      },
      {
        nome: "National Gallery Singapore",
        testo: "The modern art museum fills two colonial buildings joined by a glass roof: the old Supreme Court and the City Hall where the Japanese signed their surrender in 1945. It holds the largest public collection of modern art from Singapore and Southeast Asia.",
        come: "MRT to City Hall, then five minutes on foot across the Padang. Visit on your own; there are free guided tours in English.",
        quando: "In the hottest hours, between noon and 4pm.",
        tempo: "2-3 hours",
        costo: "general admission 20 SGD for non-residents, about €13 (official website, 2026)",
        orari: "daily 10am-7pm, last entry 6:30pm",
        url: "https://www.nationalgallery.sg/",
        consiglio: "The Southeast Asia gallery is closed for works until late 2027: if that's the main reason to go, check first what's on show.",
        lat: 1.2904,
        lng: 103.8515
      },
      {
        nome: "Asian Civilisations Museum",
        testo: "On the river, in a 19th-century colonial building, it tells the story of Asia's trade and religions through ceramics, textiles and statues. The highlight is the cargo of the Belitung wreck, a 9th-century Arab ship that sank with thousands of Chinese bowls.",
        come: "MRT to Raffles Place, then cross the Cavenagh Bridge on foot.",
        quando: "Friday evening, when it stays open until 9pm and is almost empty.",
        tempo: "1.5-2 hours",
        orari: "daily 10am-7pm, Friday until 9pm",
        url: "https://www.acm.nhb.gov.sg/",
        consiglio: "Start with the shipwreck gallery on the ground floor: on its own it explains why Singapore was born where it was.",
        lat: 1.28749,
        lng: 103.85138
      },
      {
        nome: "Esplanade - Theatres on the Bay",
        testo: "The theatre with two spiky domes that Singaporeans call «the durian» for its likeness to the fruit. The spikes are sunshades. On the waterfront there's an outdoor stage with free concerts, and the roof terrace looks over the whole bay.",
        come: "MRT to Esplanade, or on foot from the Merlion over the Esplanade Bridge.",
        quando: "In the evening, when there's music at the Outdoor Theatre (programme on the website).",
        tempo: "45 minutes",
        costo: "building and terrace free; indoor shows paid",
        url: "https://www.esplanade.com/",
        lat: 1.28977,
        lng: 103.85549
      },
      {
        nome: "Singapore Flyer",
        testo: "The 165-metre observation wheel, opened in 2008: one rotation takes about half an hour, in air-conditioned cabins for around twenty people. From the top you see the bay, the Gardens and the ships at anchor in the strait.",
        come: "MRT to Promenade, then a few minutes on foot.",
        quando: "At sunset, or on a clear day after rain.",
        tempo: "1 hour including the wait",
        orari: "daily 10am-10pm",
        url: "https://www.singaporeflyer.com/",
        consiglio: "It's an alternative to the Marina Bay Sands deck, not an addition: one of the two is enough.",
        lat: 1.2893,
        lng: 103.8631
      },
      {
        nome: "Lau Pa Sat",
        testo: "An octagonal Victorian cast-iron market from 1894, set among the skyscrapers of the financial district and now a hawker centre. In the evening the street next to it, Boon Tat Street, closes to traffic and fills with satay grills.",
        come: "MRT to Downtown or Raffles Place, five minutes on foot. Order at the stalls and pay straight away.",
        quando: "In the evening for the outdoor satay; at lunch it's packed with office workers.",
        tempo: "1 hour",
        costo: "a dish usually 5-8 SGD, about €3-5 (2026)",
        consiglio: "It's the hawker centre closest to the bay: the right place for dinner before the shows.",
        lat: 1.28069,
        lng: 103.85039
      },
      {
        nome: "Singapore River, Boat Quay and Clarke Quay",
        testo: "The river where the port began: the merchants' shophouses of Boat Quay, the Clarke Quay warehouses turned into bars, and the Cavenagh Bridge of 1869. It's the stretch linking Marina Bay to the old centre.",
        come: "On foot from the Merlion along the bank, or by bumboat, the river boats that loop around the bay.",
        quando: "In the evening, when the bars light up and it's cooler.",
        tempo: "1-2 hours",
        costo: "walk free; bumboat cruise paid",
        consiglio: "Drinking at Boat Quay is expensive: better a beer at a hawker centre, then the walk.",
        lat: 1.28642,
        lng: 103.84918
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Early morning: Helix Bridge, Merlion and waterfront loop",
          "Late morning: Cloud Forest and Flower Dome, in the cool",
          "Lunch at a hawker centre outside the area, in Chinatown or Bugis",
          "Afternoon: ArtScience Museum or rest at the hotel during the heat",
          "Sunset: cocktail at the Marina Bay Sands rooftop bar",
          "Evening: Supertree Grove light show, lying on the lawn"
        ]
      },
      {
        titolo: "Half a day",
        tappe: [
          "Late afternoon: waterfront and Helix Bridge",
          "Sunset at the Marina Barrage",
          "Evening: light show at the Supertrees"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: as in the one-day plan, with the Cloud Forest in the morning and the Supertrees at night",
          "Day 2: National Gallery at opening time and the Asian Civilisations Museum",
          "Lunch at Lau Pa Sat",
          "Afternoon: the riverside at Boat Quay and Clarke Quay, then the Esplanade",
          "Sunset at the Marina Barrage or on the Singapore Flyer",
          "Evening: Spectra at 9pm in front of Marina Bay Sands"
        ]
      }
    ],
    zone: [
      {
        nome: "Marina Bay",
        perChi: "anyone who wants the view and does not watch the price",
        testo: "High-end hotels around the bay. The view is exceptional, but prices are the highest in the city and restaurants are built for people who do not move around.",
        fascia: "€300-650"
      },
      {
        nome: "Chinatown and Tanjong Pagar",
        perChi: "anyone who wants to save money and stay central",
        testo: "The bay is a few minutes away by metro. Right next to hawker centres, bars and restaurants, and much cheaper.",
        fascia: "€120-220"
      },
      {
        nome: "Bugis and Kampong Glam",
        perChi: "anyone who wants nightlife and good value",
        testo: "A lively neighborhood with many lodging options and a direct connection to the bay. A bit noisy on weekends.",
        fascia: "€110-200"
      },
      {
        nome: "Clarke Quay and Robertson Quay",
        perChi: "anyone who wants to stay on the river and walk to the bay",
        testo: "Hotels along the Singapore River, a twenty-minute walk from the Merlion. Robertson Quay is quieter; Clarke Quay is the nightlife area and gets noisy at night.",
        fascia: "€150-280"
      }
    ],
    sapori: [
      {
        nome: "Satay",
        testo: "Skewers of marinated meat grilled over charcoal and served with peanut sauce. You'll find them in almost every hawker centre in the city."
      },
      {
        nome: "Chilli crab",
        testo: "Crab in a thick chili and egg sauce, eaten with your hands and with fried bread to dip. The city's signature dish; you find it in seafood restaurants, not in the cheaper hawker centres."
      },
      {
        nome: "Kaya toast with eggs and coffee",
        testo: "The traditional breakfast: toasted bread with coconut jam and soft-boiled eggs mixed with soy sauce. Served in the old-style coffee shops, even near the bay."
      },
      {
        nome: "Chicken rice",
        testo: "Poached chicken with rice cooked in the broth and ginger sauce. The unofficial national dish; better in hawker centres than in places around the bay."
      }
    ],
    attenzioni: [
      "The heat is serious between eleven and three. Move in the morning and evening, and use the covered, air-conditioned passages between malls.",
      "Rules are strict and enforced: fines for littering, smoking outside permitted areas, or jaywalking. E-cigarettes are banned.",
      "The Merlion and the most photographed spots are crowded: keep your wallet in a front pocket, though thefts are rare.",
      "Dining around the bay means paying much more for a mediocre dish: a few minutes on the metro gets you better food for far less."
    ],
    gite: [
      {
        nome: "Sentosa",
        distanza: "20 minutes by MRT and monorail",
        come: "MRT to HarbourFront, then the Sentosa Express monorail from VivoCity, or walk across the Sentosa Boardwalk.",
        testo: "Singapore's leisure island, with man-made beaches, Universal Studios and the southernmost point of continental Asia you can walk to, on the bridge at Palawan Beach. It has its own page on the site."
      },
      {
        nome: "Pulau Ubin",
        distanza: "about 1.5 hours by MRT, bus and boat",
        come: "MRT to Tanah Merah, bus 2 to Changi Point Ferry Terminal, then a 10-minute bumboat that leaves when full.",
        testo: "The last country village left in Singapore: wooden houses, dirt roads and mangroves. Explore it by bike, rented at the jetty, as far as the Chek Jawa wetlands."
      },
      {
        nome: "Bintan",
        distanza: "about 1 hour by ferry",
        come: "Ferry from Tanah Merah Ferry Terminal; it's Indonesia, so you need your passport and Indonesia's entry rules apply.",
        testo: "An Indonesian island with resorts and beaches that many Singapore residents use for the weekend. It only makes sense with an overnight stay, not as a rushed day trip."
      }
    ],
    faq: [
      {
        domanda: "How much time do you need for Marina Bay and Gardens by the Bay?",
        risposta: "A full day is enough, as long as you keep the evening for the Supertrees. Add the Civic District museums and the riverside and you'll use two."
      },
      {
        domanda: "Is Gardens by the Bay free?",
        risposta: "Yes for the outdoor gardens, the Supertree Grove and the light show. You pay for the two conservatories (46 SGD for non-residents) and the OCBC Skyway (14 SGD)."
      },
      {
        domanda: "What time are the light shows at Marina Bay?",
        risposta: "Garden Rhapsody at the Supertrees runs at 7:45pm and 8:45pm. Spectra, on the water in front of Marina Bay Sands, runs at 8pm and 9pm, plus 10pm on Friday and Saturday: you can see both on the same evening."
      },
      {
        domanda: "Is the Marina Bay Sands observation deck worth it?",
        risposta: "It costs about 35-39 SGD. The rooftop bar in the same building gives the same view for the price of a cocktail, and you get a seat."
      },
      {
        domanda: "Where to stay to visit Marina Bay without overspending?",
        risposta: "In Chinatown, Tanjong Pagar or Bugis, a few minutes away by metro: a double costs about half what it does on the bay."
      },
      {
        domanda: "Can you see Marina Bay during a layover at Changi?",
        risposta: "With at least six or seven hours, yes: the metro reaches Bayfront in about 40 minutes. Fill in the SG Arrival Card beforehand; it's required to enter Singapore."
      }
    ],
    esperienzeSlugs: ['gardens-by-the-bay'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: "The three towers of Marina Bay Sands overlooking the water of the bay, Singapore",
    immagine: '/images/singapore/marina-bay.jpg',
  },
  {
    slug: 'quartieri-etnici',
    paeseSlug: 'singapore',
    ordine: 2,
    nome: 'Chinatown, Little India and Kampong Glam',
    tipologia: ['cultura', 'gastronomia', 'città'],
    giorniConsigliati: '1-2 days',
    visitataPersonalmente: true,
    introduzione:
      "The three historic districts of the communities that made Singapore, each with its own temple or mosque, its own cuisine and its own rhythm. Here the city stops looking like a project.",
    percheAndarci:
      "Because they're what remains when you take away the skyline: two-story shophouses, workshops, working temples, and the hawker centers where you eat for three euros a cuisine that elsewhere would be restaurant fare.",
    cosaVedere: [
      "The Buddha Tooth Relic Temple and the Sri Mariamman, the oldest Hindu temple in the city, both in Chinatown",
      "Maxwell Food Centre and Chinatown Complex, the two historic hawker centers",
      "The Sri Veeramakaliamman temple and the fabric and spice streets of Little India",
      "Tekka Centre, the covered market of Little India",
      "The Sultan Mosque in Kampong Glam and the colorful houses of Haji Lane",
      "The Tiong Bahru district, with its 1930s rationalist architecture and its market",
    ],
    cosaFare: [
      "Lunch or dinner in a hawker center, the right way to eat in this city (see the dedicated experience page)",
      "Walk the three districts in sequence, which are a few metro stops from one another",
      "Breakfast with kaya toast and soft-boiled egg, which is the local morning ritual",
      "An evening on Haji Lane, among murals and small bars, which is the least institutional part of the city",
    ],
    doveDormire:
      "Chinatown and Bugis are the best areas for value: central, served by the metro and much cheaper than Marina Bay. Little India has the lowest prices of all.",
    doveMangiare:
      "Here you eat, and you eat in a hawker center. Hainanese chicken with rice cooked in the broth is the national dish; then Katong laksa with coconut milk, char kway teow, chilli crab (which costs a lot more and is eaten elsewhere, by the sea), roti prata and teh tarik in Little India, nasi padang in Kampong Glam. The rule: the longest line marks the best stall, and you get in line.",
    comeArrivare: "Metro: Chinatown, Little India and Bugis each have their own stop, a few stations apart.",
    comeSpostarsi: "On foot within each district, by MRT between them. They're all within three kilometers.",
    periodoMigliore:
      "all year. The special moments are Chinese New Year in Chinatown, Deepavali in Little India and Hari Raya in Kampong Glam, when the respective districts light up. At Chinese New Year, though, many family-run hawker stalls close for days.",
    costi:
      "almost nothing: the neighbourhoods are walkable, the temples have no ticket and a full meal at a hawker centre costs a few euros. This is the Singapore you can do on very little money.",
    erroriDaEvitare: [
      "Eating in air-conditioned restaurants with a picture menu when fifty meters away there's a hawker center: you pay triple for a worse dish",
      "Going to Chinatown only for the souvenir street, which is the least interesting part of the district",
      "Forgetting the rules in temples: shoulders and knees covered, shoes off where indicated",
      "Walking around at midday: between eleven and three the heat is heavy, and it's also rush hour at the hawker centers",
    ],
    miaEsperienza:
      "This is the Singapore that changes the mind of those who think it's just a city of skyscrapers and rules. Hawker centers are the country's most successful civic invention: in the 1970s the government took street vendors off the streets for hygiene reasons. Instead of eliminating them it put them all under roofs with running water and licenses, and today you eat extraordinary food for three euros, seated at shared tables, in a place anyone can afford. To find your way the system is trivial and works: we always looked at which stall had the line and got in line. Walking between Chinatown, Little India and Kampong Glam in the same afternoon, I was struck by how little they resemble one another: the smells, the music, the language you hear on the street change, and they're two metro stops apart. The local detail to know: on the tables you find packets of tissues sitting alone. It's the \"chope,\" the way of reserving a seat, and it doesn't get moved.",
    luoghi: [
      {
        nome: "Buddha Tooth Relic Temple",
        testo: "A Buddhist temple in Chinatown, opened in 2007 to house a relic attributed to the Buddha, in a style that blends Tang dynasty architecture with the Buddhist mandala. Inside it's lavish, with gilding everywhere; the relic is kept in a stupa on the fourth floor.",
        come: "MRT to Chinatown. Shoulders and knees must be covered. Some halls are reserved.",
        quando: "In the morning, when the temple is quieter.",
        tempo: "45 minutes",
        consiglio: "Go up to the roof, where there's a large Tibetan-style prayer wheel and the Ten Thousand Buddha Pagoda."
      },
      {
        nome: "Sri Mariamman Temple",
        testo: "The city's oldest Hindu temple, founded in 1827 and dedicated to the goddess Mariamman. The entrance tower, from 1925, has six tiers of carved figures painted in bright colours.",
        come: "A few steps from Chinatown station. Shoes off where indicated.",
        quando: "In the morning, or during Hindu festivals when the temple is full of worshippers.",
        tempo: "30 minutes",
        consiglio: "Check beforehand whether there is a ceremony: the temple changes completely."
      },
      {
        nome: "Maxwell Food Centre and Chinatown Complex",
        testo: "Two of the busiest hawker centres in the district, with dozens of stalls under one roof. It is the quickest way to understand how people eat in Singapore.",
        come: "On foot from Chinatown or Maxwell station. You choose a stall, order, find a shared table, then collect your dish.",
        quando: "Lunch and dinner are the peak hours, with queues. Mid-morning or late afternoon is calmer.",
        tempo: "1 hour",
        consiglio: "Join the longest queue: it is the most reliable method."
      },
      {
        nome: "Sri Veeramakaliamman Temple and the streets of Little India",
        testo: "The temple dedicated to the goddess Kali, on a street of sari shops, flower garlands, spices and gold. Little India is the most colorful and fragrant district in the city.",
        come: "MRT to Little India. On foot between Serangoon Road, Campbell Lane and the side streets. Shoes off in the temple.",
        quando: "Late afternoon and evening, when the shops are open and the area is liveliest. During Deepavali it is lit up for the festival.",
        tempo: "2 hours",
        consiglio: "Look for the Tekka Centre, the covered market with its hawker centre on the ground floor, for a cheap Indian meal."
      },
      {
        nome: "Sultan Mosque and Haji Lane",
        testo: "The large mosque with golden domes is the heart of Kampong Glam, the Malay-Arab quarter. The streets around it, Arab Street and Haji Lane, have textiles, perfumes, cafés and murals.",
        come: "MRT to Bugis, then a few minutes on foot. The mosque can be visited during visitor hours, never during Friday prayers; modest clothing is required and robes are lent at the entrance.",
        quando: "In the morning for the mosque; late afternoon for the streets.",
        tempo: "1.5 hours",
        consiglio: "Check prayer times before going up, because visits stop during prayer."
      },
      {
        nome: "Tiong Bahru",
        testo: "The city's oldest housing estate, built by the Singapore Improvement Trust between the late 1920s and the 1930s, with rounded Art Deco blocks, independent cafés and the market with its hawker centre.",
        come: "MRT to Tiong Bahru and on foot. The neighborhood is small and takes an hour.",
        quando: "In the morning, for the market and breakfast.",
        tempo: "1 hour",
        consiglio: "Eat at the hawker centre on the upper floor of the market, where stalls are heavily used by residents."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Buddha Tooth Relic Temple and Sri Mariamman in Chinatown",
          "Lunch at Maxwell Food Centre",
          "Early afternoon: air-conditioned break or Tiong Bahru",
          "Late afternoon: Little India, with the temple and the flower streets",
          "Evening: Indian dinner at Tekka Centre or the surrounding streets"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Chinatown, Maxwell Food Centre, Tiong Bahru and Little India in the evening",
          "Day 2: morning at the Sultan Mosque, Arab Street and Haji Lane; lunch in Bugis; free afternoon",
          "Evening: dinner at another hawker centre of your choice"
        ]
      }
    ],
    zone: [
      {
        nome: "Chinatown and Tanjong Pagar",
        perChi: "anyone who wants to be close to hawker centres and the center",
        testo: "Hostels and mid-range hotels, many bars and restaurants. Some nightlife, but evenings are still manageable."
      },
      {
        nome: "Little India and Farrer Park",
        perChi: "anyone who wants to save money and eat Indian food",
        testo: "Among the cheapest accommodation in the city, with excellent food nearby. The streets are busy and noise is a given."
      },
      {
        nome: "Kampong Glam and Bugis",
        perChi: "anyone who wants bars and convenience",
        testo: "Plenty of hotels and hostels, direct connection to the bay. The area is crowded on weekends."
      }
    ],
    sapori: [
      {
        nome: "Chicken rice",
        testo: "Poached chicken with rice in chicken broth and ginger and chili sauce. Available at any hawker centre; Maxwell Food Centre is famous for it."
      },
      {
        nome: "Laksa",
        testo: "Rice noodles in a spicy coconut broth with prawns and cockles. Found at Peranakan and Malay stalls, including in Kampong Glam."
      },
      {
        nome: "Roti prata",
        testo: "Flat Indian pancake, crisp outside and soft inside, dipped in curry. Found in Little India and South Indian restaurants."
      },
      {
        nome: "Biryani and banana leaf",
        testo: "In Little India the traditional lunch on a banana leaf, with rice, vegetable curries and meat. Eaten with the right hand."
      }
    ],
    attenzioni: [
      "Shoulders and knees covered in temples and the mosque, shoes off where indicated. Some halls are off limits to non-worshippers.",
      "The most famous stalls have very long queues at lunch: go early or off-hours. Many close when they run out of ingredients.",
      "Do not litter and do not smoke outside permitted areas: fines are real and high.",
      "During Chinese New Year many family-run stalls close for days: if you travel then, check in advance."
    ],
    esperienzeSlugs: ['hawker-centre'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: "Trengganu Street in Chinatown, with shophouses and red lanterns, Singapore",
    immagine: '/images/singapore/quartieri-etnici.jpg',
  },
  {
    slug: 'natura-singapore',
    paeseSlug: 'singapore',
    ordine: 3,
    nome: 'Green Singapore',
    tipologia: ['natura', 'parchi', 'fauna selvatica'],
    giorniConsigliati: '1 day',
    visitataPersonalmente: true,
    introduzione:
      "The part almost nobody puts on the itinerary: a UNESCO World Heritage botanic garden, a primary forest reserve in the middle of the island, elevated trails among the treetops and a car-free island where you cycle among wooden houses.",
    percheAndarci:
      "Because it dismantles the idea that Singapore is just concrete: almost half of the territory is covered in green, the urban plan is literally called \"city in a garden,\" and twenty minutes by metro from the financial center there are monkeys and monitor lizards.",
    cosaVedere: [
      "The Singapore Botanic Gardens, a UNESCO World Heritage site, with the National Orchid Garden",
      "The Bukit Timah Nature Reserve, primary rainforest around the island's highest hill",
      "MacRitchie Reservoir with the TreeTop Walk, the suspension walkway above the forest",
      "The island of Pulau Ubin, ten minutes by boat, car-free, with the last wooden kampong houses",
      "The Southern Ridges, the route of pedestrian bridges among the southern hills, with Henderson Waves",
    ],
    cosaFare: [
      "Walk the MacRitchie trail to the TreeTop Walk, about 10 km round trip",
      "A day cycling on Pulau Ubin, with the Chek Jawa lagoon",
      "Botanic Gardens at opening, when it's full of locals running and doing tai chi",
      "Southern Ridges at sunset, walking on Henderson Waves",
    ],
    doveDormire: "None of these areas is a sensible base: you sleep in the center and get there by metro or a short ride.",
    doveMangiare:
      "No offerings inside the reserves, apart from a few kiosks: bring plenty of water, because the humid heat on the trails is serious. On Pulau Ubin there are a couple of seafood restaurants in the jetty village, simple and right that way.",
    comeArrivare:
      "The Botanic Gardens and MacRitchie have metro stops or are reachable in a few minutes' ride; for Pulau Ubin you go to Changi Point and take a bumboat, which leaves when it has twelve passengers on board.",
    comeSpostarsi: "On foot in the reserves, by bicycle on Pulau Ubin (rented at the jetty).",
    periodoMigliore:
      "all year, early in the morning. After ten o'clock the heat and humidity make the trails much heavier than the distance suggests.",
    costi: "all free, including the Botanic Gardens, MacRitchie and Pulau Ubin (you only pay for the boat and the bike); inside the Botanic Gardens only the National Orchid Garden has a ticket.",
    erroriDaEvitare: [
      "Underestimating the climate: ten kilometers at MacRitchie in this humidity count double, and along the route you can't buy water",
      "Approaching the macaques or eating in front of them: at MacRitchie and Bukit Timah they're used to humans and snatch bags",
      "Arriving at the TreeTop Walk too late: the walkway has closing hours and is walked in one direction only",
      "Treating Pulau Ubin as an optional outing: it's the place where you see what Singapore was like before 1965, and it no longer exists anywhere else",
    ],
    miaEsperienza:
      "This is the part of Singapore that overturns the idea you form before arriving. Twenty minutes by metro from the bay of skyscrapers there's a real rainforest, with macaques on the trails and monitor lizards crossing in front of you, and the MacRitchie TreeTop Walk is a suspension walkway above the treetops that nobody associates with this city. The Botanic Gardens early in the morning are the most beautiful and least touristy scene of all: locals running, groups of elderly people doing tai chi under the trees, families on the lawns. A park that's used, more than visited. The place that's worth more than any other, though, is Pulau Ubin: ten minutes on a wooden boat that leaves only when it has twelve passengers, and you land on a car-free island, with wooden houses on stilts, dirt trails and rental bikes. It's what Singapore was like before 1965, and it has remained only there. It works as a counterweight to everything else, and costs as much as the ferry.",
    luoghi: [
      {
        nome: "Singapore Botanic Gardens",
        testo: "A colonial-era botanic garden, a UNESCO World Heritage Site since 2015. Lawns, lakes, a patch of rainforest and the National Orchid Garden, with more than a thousand species and two thousand hybrids of orchids: it's the only part that charges admission.",
        come: "MRT to Botanic Gardens (Downtown line), with an entrance directly from the station. Self-guided.",
        quando: "The gardens are open from 5am to midnight. At dawn or early in the morning residents jog and do tai chi under the trees.",
        tempo: "2 hours",
        costo: "free entry to the gardens; the National Orchid Garden has a separate ticket",
        url: "https://www.nparks.gov.sg/",
        consiglio: "Arrive before eight: after that the heat is heavy and the garden loses its best side."
      },
      {
        nome: "MacRitchie Reservoir and TreeTop Walk",
        testo: "A reservoir surrounded by rainforest, with trails and a 250-metre suspension bridge, 25 metres high at its highest point, crossing the tree canopy. Macaques, monitor lizards and squirrels along the trails.",
        come: "By bus or taxi to the park entrance. The bridge can only be reached on foot, along several kilometres of forest trail: the park's routes range from 3 to 11 km.",
        quando: "Early in the morning, for the cool and to be in time: the TreeTop Walk is closed on Mondays (except public holidays), has daytime opening hours and is walked one way only. Hours on the NParks website.",
        tempo: "3-4 hours",
        costo: "free",
        url: "https://www.nparks.gov.sg/",
        consiglio: "Bring plenty of water: there are no shops along the trail."
      },
      {
        nome: "Bukit Timah Nature Reserve",
        testo: "Primary rainforest around the island's highest hill, about 165 metres. It's one of the largest areas of primary forest left in Singapore, with macaques and birds.",
        come: "By MRT and bus, or by taxi. Marked trails of various lengths, with steps and slopes.",
        quando: "Early morning.",
        tempo: "2-3 hours",
        costo: "free",
        url: "https://www.nparks.gov.sg/",
        consiglio: "Keep bags closed and food out of sight: the macaques grab everything."
      },
      {
        nome: "Pulau Ubin",
        testo: "An island about ten minutes away by boat, where a few dozen people still live in the wooden houses of the old kampong. There's no public transport: you rent a bike and ride among mangroves, flooded old granite quarries and trails.",
        come: "Bumboat from Changi Point Ferry Terminal. The crossing takes about 10 minutes and the boat leaves when it has twelve passengers: SGD 4 per person each way, or SGD 48 for the whole boat (fares in force since 2020). Bikes for rent on the island.",
        quando: "In the morning. The last boat back is in the evening: check the time on arrival.",
        tempo: "half a day",
        consiglio: "Rent a bike and head to Chek Jawa, the wetland with the boardwalk over the sea."
      },
      {
        nome: "Southern Ridges and Henderson Waves",
        testo: "A route through parks linked by elevated walkways. Henderson Waves is Singapore's highest pedestrian bridge, 36 metres above the road, with curved wooden ribs that light up at night.",
        come: "MRT to Labrador Park or Harbourfront. The route can be done in stretches and interrupted at several points.",
        quando: "In the morning or at sunset. At midday there is no shade.",
        tempo: "2-3 hours",
        costo: "free",
        url: "https://www.nparks.gov.sg/",
        consiglio: "Do the Henderson Waves - Forest Walk stretch, the most striking, and end at Mount Faber."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Dawn: Botanic Gardens, with breakfast at one of the park cafés",
          "Mid-morning: MRT and bus to MacRitchie, TreeTop Walk",
          "Lunch at a hawker centre in Toa Payoh or Bishan",
          "Afternoon: rest in the cool",
          "Sunset: Henderson Waves and Southern Ridges"
        ]
      },
      {
        titolo: "Alternative day: Pulau Ubin",
        tappe: [
          "Early morning: bumboat from Changi Point",
          "Bike ride to Chek Jawa",
          "Lunch at one of the village eateries near the jetty",
          "Return in the afternoon, before the peak heat"
        ]
      }
    ],
    zone: [
      {
        nome: "Orchard and Newton",
        perChi: "anyone who wants to be near the Botanic Gardens",
        testo: "Hotels and malls, a few minutes from the gardens by MRT. Convenient and expensive."
      },
      {
        nome: "Around Bishan or Toa Payoh",
        perChi: "anyone who wants to live like residents",
        testo: "Residential neighborhoods with excellent hawker centres and low prices; few hotels, but apartments are available."
      }
    ],
    sapori: [
      {
        nome: "Nasi lemak",
        testo: "Coconut rice with fried anchovies, egg, cucumber and sambal. A breakfast at hawker centres."
      },
      {
        nome: "Carrot cake",
        testo: "Not the dessert: it is a savory omelet of daikon and rice, stir-fried in the white or black version. Eaten at hawker centres."
      },
      {
        nome: "Kopi and teh",
        testo: "Coffee and tea with condensed milk, ordered in a code of their own (kopi-o, kopi-c, teh-peng). You order at the counter."
      },
      {
        nome: "Ice kachang",
        testo: "Shaved ice with sweet beans, jellies, corn and colored syrup. The dessert for hot days."
      }
    ],
    attenzioni: [
      "The climate is the main obstacle: after ten the heat and humidity make the trails much harder than the distance suggests. Take water and start at dawn.",
      "The macaques at MacRitchie and Bukit Timah grab bags and food. Do not show food, do not stare at them, do not give them anything.",
      "Stay on the marked trails and take nothing from the reserve: there are fines for those who do.",
      "Bring cash for Pulau Ubin: cards do not always work on the island."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: "A path among tropical plants and palms in the Singapore Botanic Gardens",
    immagine: '/images/singapore/natura-singapore.jpg',
  },
  {
    slug: 'sentosa',
    paeseSlug: 'singapore',
    ordine: 4,
    nome: 'Sentosa and the South',
    tipologia: ['mare', 'famiglia', 'parchi'],
    giorniConsigliati: 'half a day or a full day with the parks',
    visitataPersonalmente: true,
    introduzione:
      "The island to the south, connected by a bridge, a monorail and a cable car: artificial beaches, theme parks, an aquarium and the southernmost point of continental Asia, a pedestrian walkway on a small islet, complete with a sign.",
    percheAndarci:
      "For the parks, if you're traveling with kids, and for the cable car over the harbor, which is the best way to see how big the maritime traffic passing through here is: Singapore is one of the busiest ports on the planet and from up there you count the ships at anchor by the dozens.",
    cosaVedere: [
      "Universal Studios Singapore and the Singapore Oceanarium at Resorts World",
      "The beaches of Siloso, Palawan and Tanjong, artificial but well equipped",
      "The Mount Faber-Sentosa cable car, over the harbor",
      "Fort Siloso, the only preserved British coastal fortification, with the story of the fall of Singapore in 1942",
      "The southernmost point of continental Asia, on the islet connected by a suspension bridge at Palawan Beach",
    ],
    cosaFare: [
      "Cable car from Mount Faber, which is the right way to arrive",
      "A day at the parks, if there are kids or if it rains",
      "Walk the Southern Ridges to Mount Faber and then go down to Sentosa by cable car",
      "Fort Siloso, which is free and tells the part of history the island usually doesn't show",
    ],
    doveDormire: "Sentosa's hotels are expensive and isolated from the rest of the city: it only makes sense for those spending several days at the parks with kids.",
    doveMangiare:
      "The offerings on the island are all at theme park prices. The advice is to eat before or after, at VivoCity, the shopping mall where the monorail starts, which has a normal food court on the top floor.",
    comeArrivare:
      "Monorail from VivoCity (HarbourFront MRT stop), cable car from Mount Faber or on foot over the pedestrian bridge, which is free and takes ten minutes.",
    comeSpostarsi: "Free internal shuttles, monorail and lots of walking: the island is long and the points of interest are far apart.",
    periodoMigliore: "all year. On weekends and school holidays the island is very crowded with residents.",
    costi:
      "walking in on the Sentosa Boardwalk is free; cable car and monorail fares are on the Sentosa website; the real expense is the parks: Universal Studios and the aquarium charge international theme-park prices.",
    erroriDaEvitare: [
      "Expecting beaches: they're artificial, with imported sand, and in front there's the tanker anchorage. They have to be taken for what they are",
      "Paying for the monorail on the way in: the pedestrian bridge is free, covered and takes ten minutes",
      "Planning a full day if you're not going to the parks: half a day is more than enough",
      "Going on the weekend, when half of Singapore is there",
    ],
    miaEsperienza:
      "Sentosa is the stop on which it's worth being honest: it's an entertainment island, with artificial beaches of imported sand looking out on an anchorage full of waiting tankers. Those who go looking for the sea come back puzzled. With kids, or on a rainy day, the parks and the aquarium are excellent and justify everything. For everyone else, the two things that make the trip are others: the cable car from Mount Faber, which passes over the harbor and lets you see how many ships are at anchor (Singapore is one of the busiest ports in the world and from above you understand what that means), and Fort Siloso, free, with the cannons pointed toward the sea and the story of how the city fell into Japanese hands in 1942, from land, while the artillery was looking the wrong way. For those two things the half day is worth it.",
    luoghi: [
      {
        nome: "Fort Siloso",
        testo: "A British coastal battery now turned into a military museum, with period guns and galleries. It tells the story of the city's fall in February 1942, when guns built to defend against the sea were turned inland against the Japanese coming by land. The Surrender Chambers recreate the surrender.",
        come: "Inside Sentosa, on the western tip. Reached by the internal bus or on foot from Siloso Beach. Route on foot with stairs and tunnels.",
        quando: "In the morning, before the heat.",
        tempo: "1.5 hours",
        costo: "prices and hours on the Sentosa website",
        url: "https://www.sentosa.com.sg/",
        consiglio: "Climb up to the gun platforms: the view over the roads and tankers explains the port traffic."
      },
      {
        nome: "Mount Faber - Sentosa Cable Car",
        testo: "Suspended cabins crossing the harbor from Mount Faber to the island, with views of the ships anchored offshore. Singapore is one of the busiest ports in the world and you can see it from here.",
        come: "MRT to HarbourFront, then go up Mount Faber or take the cable car from the HarbourFront station, next to VivoCity. Paid ticket.",
        quando: "At sunset.",
        tempo: "1 hour",
        consiglio: "Take it one way and come back on foot or by monorail."
      },
      {
        nome: "Siloso, Palawan and Tanjong Beach",
        testo: "Beaches created with imported sand, with bars, games and a view over the roads where tankers wait. Palawan is best for children; Tanjong is the quietest.",
        come: "By the internal bus or monorail from Sentosa Station.",
        quando: "In the morning and on weekdays. On weekends they are full of residents.",
        tempo: "2 hours",
        consiglio: "Do not expect the sea: come for the relaxation of a rainy day or with kids."
      },
      {
        nome: "Universal Studios and Singapore Oceanarium",
        testo: "The theme park and the Singapore Oceanarium, the aquarium that replaced the S.E.A. Aquarium in 2025, both at Resorts World Sentosa. International theme-park prices.",
        come: "Reached by monorail from VivoCity, Resorts World stop. Tickets online.",
        quando: "On weekdays; weekends are very crowded.",
        tempo: "a full day for the park, 2 hours for the aquarium",
        url: "https://www.sentosa.com.sg/",
        consiglio: "Book online to skip the queue at the ticket office."
      },
      {
        nome: "Southernmost point of continental Asia",
        testo: "A small islet off Palawan Beach, linked by a suspension bridge, presented as the southernmost point of continental Asia. A symbolic stretch with a sea view.",
        come: "On foot from Palawan Beach, over a bridge of a few minutes.",
        quando: "At sunset.",
        tempo: "20 minutes",
        costo: "free",
        consiglio: "Before making it a stop, remember it is a tourist landmark rather than a natural place."
      }
    ],
    programmi: [
      {
        titolo: "Half a day",
        tappe: [
          "Morning: pedestrian bridge from VivoCity, Fort Siloso",
          "Siloso Beach for a break",
          "Return by cable car from Sentosa to Mount Faber, at sunset"
        ]
      },
      {
        titolo: "1 day with the parks",
        tappe: [
          "Opening time: Universal Studios, the most popular rides first",
          "Lunch at Resorts World or the VivoCity hawker centre",
          "Afternoon: Singapore Oceanarium",
          "Sunset: Palawan beach and the southernmost point"
        ]
      }
    ],
    zone: [
      {
        nome: "Inside Sentosa",
        perChi: "families who want to stay by the parks",
        testo: "High-end resorts, convenient for the parks but far from city life and hawker centres."
      },
      {
        nome: "HarbourFront and VivoCity",
        perChi: "anyone who wants to be close without paying island prices",
        testo: "Mid-range hotels in front of the mall, with a direct link to Sentosa on foot or by monorail."
      }
    ],
    sapori: [
      {
        nome: "VivoCity hawker centre",
        testo: "The most convenient place to eat before or after the island, with local specialties at prices far below those of Sentosa."
      },
      {
        nome: "Grilled seafood (BBQ stingray)",
        testo: "Stingray grilled with sambal, a hawker-centre dish. Not on Sentosa: found at the centres on the mainland."
      },
      {
        nome: "Cendol",
        testo: "Dessert of shaved ice, coconut milk, palm syrup and green jellies. Found at hawker centres."
      },
      {
        nome: "Satay",
        testo: "Grilled skewers with peanut sauce, also at the island's kiosks but at higher prices."
      }
    ],
    attenzioni: [
      "You can walk in for free on the Sentosa Boardwalk, which starts at VivoCity: you don't need the monorail on the way in.",
      "Paying at the gate for a park without checking online offers costs much more than the same ticket bought in advance.",
      "On weekends and school holidays the island is crowded with residents: if possible, come on a weekday.",
      "On the beach, the water facing the roads is not the reason to come: the bars are worth more than the sea."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: "A Sentosa cable car cabin above the island's forest, with the harbor in the background",
    immagine: '/images/singapore/sentosa.jpg',
  },
]
