import type { Destinazione } from '@/lib/types'

export const destinazioniItalia: Destinazione[] = [
  {
    slug: 'dolomiti',
    paeseSlug: 'italia',
    ordine: 1,
    nome: "The Dolomites in Summer",
    tipologia: ['montagna', 'trekking', 'natura'],
    giorniConsigliati: "4-5 days for one valley, 7-10 for a full Alta Via",
    visitataPersonalmente: true,
    introduzione:
      "They've been a UNESCO World Heritage Site since 2009 for a reason almost nobody knows: they're a geological archive. They were coral reefs in a tropical sea two hundred and fifty million years ago, later lifted up and split apart, and the vertical walls still preserve the layering. It's nine separate systems spread over three provinces, and choosing which one to do is the most important decision of the trip.",
    percheAndarci:
      "Vertical dolomite walls, valley-floor meadows and a network of huts with kitchens and beds so dense that you won't find the combination anywhere else in the world. You walk for days without a tent or food, sleep at three thousand meters and eat canederli.",
    cosaVedere: [
      "The Tre Cime di Lavaredo, with the loop trail around their base: **the road to Rifugio Auronzo is a toll road and from 2026 requires mandatory online booking**",
      "Lago di Braies, the starting point of Alta Via 1: **car access is capped in summer, with mandatory booking between 9 am and 4 pm**",
      "Seceda, with its grassy ridge that suddenly breaks into vertical walls, and the Alpe di Siusi, the largest high-alpine plateau in Europe",
      "The Sella Group, the table-shaped massif that the four passes circle around",
      "The Marmolada, the Queen of the Dolomites, with what's left of its glacier",
      "Lago di Sorapis and Lago di Carezza, with that milky turquoise water that comes from glacial flour",
      "The Cinque Torri and the open-air World War I museum, with its restored trenches",
    ],
    cosaFare: [
      "Alta Via 1, from Braies to Belluno, the best multi-day trek in the Alps (see the dedicated experience page)",
      "The Tre Cime loop, the most famous hike and the most crowded (see the dedicated experience page)",
      "A via ferrata: they were born in the Dolomites, which have the densest network in the world (see the dedicated experience page)",
      "Sleeping in a hut at least one night, even if you're not doing a long trek: it changes your relationship with the mountains",
      "Seeing the enrosadira, the pink that the walls take on at sunset and sunrise because of the dolomite",
    ],
    doveDormire:
      "The choice of valley matters more than the place you stay, which is the point of the comparison below. In general you should try the **huts** at least once, and for summer you book them from January: shared dorms, dinner at 7 pm, quiet from 10 pm, sleeping-bag liner required, almost always cash only. In the valley floors the **agriturismo farmhouses (masi)** of South Tyrol offer value for money that hotels can't match, but you need to book them months ahead for July and August.",
    doveMangiare:
      "In the huts the food is precise and repetitive, and after three days you love it: canederli in broth, goulash, polenta with melted cheese and mushrooms, Kaiserschmarrn for dessert, and barley soup, the high-altitude dish par excellence. In the valleys South Tyrol has a cuisine of its own, neither Italian nor Austrian: speck, Schlutzkrapfen (rye ravioli with spinach), strudel, and the autumn Törggelen in the farmhouses, when the new wine comes out. To drink, Lagrein and Schiava in South Tyrol, Teroldego in Trentino.",
    comeArrivare:
      "A car is the most practical way, and for some valleys the only sensible one. By train you get to Bolzano, Brixen or Calalzo and continue on valley buses, which are good in South Tyrol and much less so in the Veneto. The useful airports are Venice, Verona, Innsbruck and Treviso.",
    comeSpostarsi:
      "By car, with the warning that **in summer the parking lots at the best-known spots are full by 8 am** and several roads are capped. The South Tyrol buses, included in the local cards offered by many lodgings, work well and let you leave the car parked; in the Veneto coverage is worse. Summer cable cars save hundreds of meters of elevation gain and should be factored into the budget.",
    periodoMigliore:
      "**From late June to mid-September**, when the huts are open; before and after, most of the network is closed and some high trails still have snow. July and August are the busiest and most expensive months. **September is the best month**: fewer people, clear air, beautiful colors and huts open until the end of the month. In June, the leftover snowfields on the high passes are a serious variable.",
    costi:
      "Half board in a hut is roughly €60-80 per person, with discounts for CAI members and for members of affiliated alpine clubs: the membership pays for itself in three nights. **The Tre Cime toll is around €40 per car** (valid for 12 hours, with mandatory booking), cable cars €15-30 per ride, via ferrata kit rental €15-25 a day.",
    erroriDaEvitare: [
      "Showing up at the Tre Cime or Braies without a reservation: from 2026 the Tre Cime road requires mandatory online booking and Braies caps car access between 9 am and 4 pm in high season. If you arrive without one, you turn back",
      "Booking huts in June for August: spots sell out from January-February, and private rooms even earlier",
      "Starting late: summer afternoon thunderstorms are regular and violent, and the alpine rule is to be at the hut before 2 pm",
      "Going up high without cash: in many huts cards don't work because there's no signal",
      "Underestimating the elevation gain: in the Dolomites the numbers are low in kilometers and high in meters, and an \"easy trail\" can mean eight hundred meters of climbing",
      "Doing a ferrata without approved gear and without knowing what you're doing: it's the most frequent cause of mountain rescue call-outs, which in Italy you pay for",
    ],
    confronti: [
      {
        titolo: "Which area of the Dolomites to choose",
        introduzione:
          "The Dolomites aren't one place but nine mountain systems over three provinces, with different languages, prices, crowds and character. Those who choose at random almost always end up at the two or three most photographed spots, which are also the most congested. Here's how they break down.",
        opzioni: [
          {
            nome: "Val Gardena and Alpe di Siusi",
            sintesi: "The tourist heart of South Tyrol, with Seceda, the Sassolungo and the largest high-alpine plateau in Europe. Ladin, German and Italian in the same valley.",
            costo: "high end: together with Cortina, it's the most expensive area of the Dolomites",
            durata: "4-5 days",
            pro: [
              "The highest density of iconic views of all: Seceda, Alpe di Siusi, Sassolungo within a few kilometers",
              "Plenty of summer lifts, which put high altitudes within reach even for those who don't walk much",
              "Excellent services, efficient valley buses and top-level lodgings",
              "Great for families and for anyone who doesn't want a demanding trek",
            ],
            contro: [
              "Extremely crowded in July and August: the Seceda and Ortisei parking lots fill up very early",
              "Heavily built up: the valley floor is a row of hotels and has nothing alpine left",
              "High-season prices are staggering",
            ],
            perChi: "First-timers, families, anyone who wants the photos they've seen.",
          },
          {
            nome: "Cortina and the Ampezzo Dolomites",
            sintesi: "The Veneto side, with the Tre Cime, Cinque Torri, Lago di Sorapis and the Tofane. 2026 Olympic venue together with Milan.",
            costo: "high end, with Cortina's prices setting the tone for the whole valley",
            durata: "4-6 days",
            pro: [
              "The Tre Cime, which remain the symbol of the Dolomites",
              "The open-air World War I museum at the Cinque Torri, with restored trenches: besides the scenery, there's history",
              "Easy access to Misurina, Sorapis and Passo Giau",
            ],
            contro: [
              "The toll and mandatory booking for the Tre Cime, with real queues in the middle of the day",
              "Cortina is expensive and in high season has a social scene that has little to do with the mountains",
              "The construction and works tied to the Olympics have changed the valley: it's worth checking what's open beforehand",
            ],
            perChi: "Anyone who wants the Tre Cime and the World War I history, and accepts the crowds.",
          },
          {
            nome: "Val Badia and Alta Badia",
            sintesi: "The Ladin heart, around the Sella Group and the Odle, with the Fanes-Sennes-Braies Nature Park behind it.",
            costo: "medium-high, a notch below Gardena",
            durata: "4-6 days",
            pro: [
              "Ladin culture is still alive, with its own language and place names",
              "A perfect base for the four-passes loop and for the Sella group",
              "The Fanes-Sennes Park, one of the most beautiful and least-trodden plateaus in the Dolomites",
              "Very high-level cooking for the size of the valley",
            ],
            contro: ["Less \"iconic\" in photographs: a plus for some, not for others", "In high season the passes are stormed by motorcycles and cyclists"],
            perChi: "Anyone coming back a second time who wants to really hike without giving up services.",
          },
          {
            nome: "Val di Fassa and Pale di San Martino",
            sintesi: "Trentino: Catinaccio, Marmolada, and farther south the Pale plateau, a desert of rock at two thousand six hundred meters.",
            costo: "medium, quite a bit lower than South Tyrol",
            durata: "4-6 days",
            pro: [
              "More affordable prices for the same scenery",
              "The Pale di San Martino plateau looks like nothing else in the Dolomites: it feels like the moon",
              "Fewer crowds than the South Tyrol hubs",
              "The Catinaccio at sunset is where the enrosadira is at its best",
            ],
            contro: ["Services and public transport less polished than in South Tyrol", "San Martino di Castrozza is far from the other Dolomite hubs"],
            perChi: "Anyone who wants the Dolomites while spending less and with fewer people around.",
          },
          {
            nome: "Friulian and Belluno Dolomites",
            sintesi: "The part almost nobody does: the Friulian Dolomites, declared \"wilderness\", and the Dolomiti Bellunesi National Park.",
            costo: "low: it's the cheapest area of the whole system",
            durata: "3-5 days",
            pro: [
              "You walk for entire days meeting very few people",
              "Prices from another era compared to South Tyrol",
              "Small, family-run huts, without impossible bookings",
            ],
            contro: [
              "Trails less maintained and marked, with stretches that call for more experience",
              "Few lifts: here you climb with your legs",
              "Minimal services and almost no public transport",
            ],
            perChi: "Anyone who has already done the classic Dolomites and can't stand the line on the trail anymore.",
          },
        ],
        raccomandazione:
          "First time: Val Gardena or Alta Badia, in **September** rather than August, a choice that changes the trip more than any other. Second time: Val di Fassa or Pale di San Martino, to spend less and see more. If the main problem is the line on the trail, the Friulian Dolomites without a second thought, knowing that there you need to be able to navigate on your own.",
      },
      {
        titolo: "Hut or valley floor: how to sleep in the Dolomites",
        introduzione:
          "It's the choice that decides the kind of trip, and almost always it's made out of habit rather than with a criterion. Sleeping up high is less comfortable, and it changes the whole trip.",
        opzioni: [
          {
            nome: "Mountain hut",
            sintesi: "Shared dorms or small rooms at two to three thousand meters, half board, dinner at a fixed time, quiet from 10 pm.",
            costo: "half board roughly €60-80, with CAI member discounts that make the membership worthwhile in three nights",
            durata: "from one night to a whole Alta Via",
            pro: [
              "You're already up high at dawn and sunset, the two hours it's worth being there for",
              "It makes multi-day treks possible without a tent or food: it's the alpine model, and nowhere else has such a dense network",
              "Dinner together with the other hikers is half the experience",
              "Significant discounts for members of alpine clubs",
            ],
            contro: [
              "You have to book from January-February for the summer; private rooms much earlier",
              "Sleeping-bag liner required, coin-operated or no showers, noisy dorms",
              "Often **cash only**, because there's no signal",
              "Nothing negotiable: dinner at 7 pm, lights out at 10 pm",
            ],
            perChi: "Anyone who hikes. Even those who don't plan a long trek should spend at least one night.",
          },
          {
            nome: "Farmhouse or valley agriturismo",
            sintesi: "The farm lodgings of South Tyrol and Trentino, often still working farms, with rooms and breakfast made from their own produce.",
            costo: "affordable compared with hotels, but you need to book months ahead",
            durata: "fixed base for 4-7 days of day hikes",
            pro: [
              "The best value for money in Italian mountain lodging",
              "Breakfasts with farm products that no hotel can match",
              "A comfortable base for different outings every day, without moving your luggage",
              "Many places include the valley public transport card",
            ],
            contro: [
              "You miss dawn and sunset up high, which are the best moments",
              "You need a car or bus every morning, with parking lots filling early",
              "Booking months ahead for July and August",
            ],
            perChi: "Day hikers, people traveling with kids, anyone who wants a fixed base.",
          },
          {
            nome: "Hotel in a tourist town",
            sintesi: "Ortisei, Cortina, Canazei, Corvara: full services, spa, half board.",
            costo: "from high to very high, with peaks in August",
            durata: "the classic week",
            pro: ["Total comfort and high-level services", "Great with families or when the weather is awful", "Close to the lifts and buses"],
            contro: ["The touristy valley floor has lost almost all its alpine character", "High prices for what you see, compared with the other two options", "You live the mountains by the clock, between nine and five"],
            perChi: "Anyone looking for a vacation more than a hike, and anyone with specific comfort needs.",
          },
        ],
        raccomandazione:
          "The formula that works best is a mix: a base in a valley farmhouse for four or five days of outings, with **at least one or two nights in a hut** in between. It costs just a bit more, and the nights up high are the ones you remember. Anyone doing an Alta Via lives in huts and that's it, and books in January.",
      },
    ],
    miaEsperienza:
      "In the Dolomites, comparisons with the rest of the world stop working, and it's not local pride: vertical walls, high meadows and a network of huts with kitchens and beds this dense are something I haven't found together anywhere else. You walk eight hours with a thirty-liter pack and in the evening you eat polenta and melted cheese at two thousand five hundred meters while the wall turns pink. The enrosadira sounds like a brochure gimmick, but it's a real phenomenon tied to the composition of the dolomite: the first time you see a wall light up like that, you understand why these mountains were given a name of their own. That said, let's be clear that in July and August some spots have become impossible. The Tre Cime loop in the middle of August is a single-file line, the parking lots fill up at dawn, and in 2026 they had to make booking mandatory on the road. Giving up isn't necessary: just go in September, when the huts are still open and there's a third of the people, or move twenty kilometers toward the valleys nobody photographs.",
    luoghi: [
      {
        "nome": "Tre Cime di Lavaredo",
        "testo": "Three dolomite towers rising from a plateau of scree: the symbol of the Dolomites. The loop around their base passes the Auronzo, Lavaredo and Locatelli huts, with the north face right overhead.",
        "come": "From Cortina or Dobbiaco, drive to Auronzo or Misurina, then take the toll road up to the Rifugio Auronzo (2,320 m), where the loop starts. A shuttle also runs from Misurina.",
        "quando": "June to October, when the road and huts are open. Arrive at opening time or after 3 pm: in the middle of the day in July and August the trail is one continuous line.",
        "tempo": "3-4 hours for the full loop (about 10 km)",
        "costo": "40 euros per car, 2026; online booking is compulsory and the ticket is valid for 12 hours. The shuttle from Misurina costs 10 euros per person per day",
        "consiglio": "I did the loop in August and it felt like walking in single file: in September you walk with a third of the people. If you start early, go clockwise and climb to the Locatelli in the low morning light."
      },
      {
        "nome": "Lago di Braies",
        "testo": "The most photographed alpine lake in South Tyrol, emerald green, at the foot of the Croda del Becco. The path around the lake is easy and flat. The Alta Via 1 also starts here.",
        "come": "From Dobbiaco take the Braies valley road to the car park by the lake. In summer car access is limited and requires a booking in the 9-16 window; buses and shuttles run from Dobbiaco and Villabassa.",
        "quando": "June to October. Go at dawn or after 5 pm to have the lake without the crowds; at midday in summer it is packed.",
        "tempo": "1 hour around the lake, 3-4 hours with the path up to the Forcella del Lago",
        "consiglio": "Sleeping in the valley and going to the lake at dawn or in the evening gives a different experience. Skip the rowing boat at midday: the queue is long and the lake is full."
      },
      {
        "nome": "Seceda",
        "testo": "A grassy ridge that suddenly breaks into vertical walls over 2,500 metres high: the view on every Val Gardena postcard. From the top you see the Odle peaks and, on the other side, all the Dolomites.",
        "come": "From Ortisei the cable car climbs to Furnes and then to Seceda (2,500 m). From the summit you can walk down toward Santa Cristina past the Rifugio Firenze.",
        "quando": "June to October, with the lifts running in summer. Take the first ride of the morning: clouds usually build after 11 am.",
        "tempo": "half a day; a full day with the walk down",
        "consiglio": "The walk down to Santa Cristina is tough on the legs but leaves the crowd at the cable car arrival behind. Bring a jacket: it is windy at the top even in August."
      },
      {
        "nome": "Alpe di Siusi (Seiser Alm)",
        "testo": "The largest high alpine plateau in Europe, with meadows above 1,800 metres, huts and the Sassolungo and Sciliar peaks behind. It is one of the easiest places in the Dolomites: wide paths, little climbing, ideal for families and long walks.",
        "come": "From Siusi allo Sciliar or from Ortisei take the cable car to Compaccio or Mont Seuc. On the plateau private cars are banned for most of the day: you get around on foot, by bus or by bike.",
        "quando": "June to October. In late September the larches turn yellow.",
        "tempo": "a full day",
        "consiglio": "The cable cars bring you straight to altitude: you can walk on the flat for hours and come down on the last ride. Check the time of the last descent."
      },
      {
        "nome": "Cinque Torri",
        "testo": "A group of five rock towers near Cortina, where in the First World War soldiers fought a few metres from the enemy. Today it is an open-air museum with restored trenches, tunnels and positions you can walk through.",
        "come": "From Passo Falzarego or Bai de Dones, take the chairlift to the Rifugio Scoiattoli, then walk among the towers and the museum. Cortina is about 20 minutes away by car.",
        "quando": "Late June to mid October, with the lifts running.",
        "tempo": "3-4 hours including the open-air museum",
        "consiglio": "It is one of the few easy hikes with history built into the landscape: knowing the First World War story first makes the towers far more interesting."
      },
      {
        "nome": "Lago di Sorapis",
        "testo": "A horseshoe-shaped mountain lake, milky turquoise from glacial flour, beneath the walls of Sorapis. The trail crosses ledges protected with cables.",
        "come": "Path 217 starts at Passo Tre Croci, a few kilometres from Cortina. The final stretch has exposed sections with safety cables; hiking boots are needed.",
        "quando": "Late June to September. Earlier, shaded stretches still hold snow.",
        "tempo": "5-6 hours round trip",
        "consiglio": "Start early: the trail is narrow and in high season there is a queue right on the cables. The lake is the best point at the end, so aim to be there while there is still good light."
      },
      {
        "nome": "Pale di San Martino",
        "testo": "The Trentino group that looks like the moon: a rock plateau above 2,500 metres, without trees or meadows, ringed by spires. For the quality of its scenery it is one of the least crowded places in the Dolomites.",
        "come": "From San Martino di Castrozza the Colverde and Rosetta cable cars lead to 2,600 m, to the Rifugio Rosetta. From there you walk across the plateau.",
        "quando": "Late June to late September. The weather changes fast: leave early in the morning.",
        "tempo": "a full day",
        "consiglio": "There are no landmarks on the plateau and in fog it is easy to get lost: carry a map or a downloaded GPS track."
      },
      {
        "nome": "Marmolada and Lago di Fedaia",
        "testo": "The highest peak in the Dolomites (3,343 m) with its glacier, which shrinks every year. In July 2022 part of the glacier collapsed, killing eleven people: today climbing to the summit requires a guide and attention to the weather.",
        "come": "From Passo Fedaia or Malga Ciapela, take the cable car to Punta Rocca. The Fedaia lake, below, can be walked around in an hour.",
        "quando": "June to September; glacier conditions need checking each season.",
        "tempo": "half a day with the cable car; the lake loop takes an hour",
        "consiglio": "Anyone who wants the glacier should go with a mountain guide and check conditions before leaving. For a light outing, Lake Fedaia is enough."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "At 7:30 take the first cable car from Ortisei up to Seceda (2,500 m) and walk the ridge to Cima Pana.",
          "Walk down toward the Rifugio Firenze and have lunch with canederli and barley soup.",
          "In the afternoon continue to Santa Cristina and take the bus back to Ortisei.",
          "Dinner in Ortisei with speck, Schlutzkrapfen and a glass of Lagrein."
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1, Alpe di Siusi: take the cable car from Siusi, walk across the plateau all day to a hut for lunch, come back on the last ride.",
          "Day 2, Seceda and Val Gardena: start when the cable car opens, walk to the Rifugio Firenze and descend to Santa Cristina in the afternoon.",
          "Day 3, Passo Gardena and the Sella: take the cable car from the pass and do a short loop on the Sella plateau; dinner in a mountain hut in the evening."
        ]
      },
      {
        "titolo": "5 days",
        "tappe": [
          "Day 1: arrive in Cortina or Dobbiaco, afternoon at Lago di Braies for the lake loop.",
          "Day 2: Tre Cime di Lavaredo, with the toll booked in advance, starting at opening time.",
          "Day 3: Cinque Torri and the First World War museum, then Passo Falzarego.",
          "Day 4: Lago di Sorapis from Passo Tre Croci, starting early.",
          "Day 5: Alpe di Siusi or Seceda, heading down into Val Gardena on the way home."
        ]
      }
    ],
    zone: [
      {
        "nome": "Val Gardena (Ortisei, Santa Cristina, Selva)",
        "perChi": "first trip, families, anyone who wants services",
        "testo": "The best-equipped hub: many lifts, valley buses, excellent restaurants. In high season it is expensive and crowded, and the valley floor is built up. The cable cars take you straight to Seceda and the Alpe di Siusi."
      },
      {
        "nome": "Val Badia and Alta Badia (Corvara, La Villa, San Cassiano)",
        "perChi": "return visitors who want to really hike",
        "testo": "Living Ladin culture, great food, a base for the Sella and the Fanes-Sennes-Braies Park. A notch cheaper than Gardena. The passes are full of motorbikes and bicycles in summer."
      },
      {
        "nome": "Cortina d'Ampezzo and Misurina",
        "perChi": "Tre Cime, Cinque Torri, Sorapis, First World War history",
        "testo": "Close to the best-known places, but expensive and with the glamour of a high-society resort. After the 2026 Olympics it is worth checking what is open and which building sites are still active. Misurina is smaller, on the lake, and closer to the Tre Cime."
      },
      {
        "nome": "Val di Fassa and San Martino di Castrozza",
        "perChi": "anyone who wants to spend less",
        "testo": "Lower prices than South Tyrol for the same views, with Catinaccio, Marmolada and the Pale. Services and public transport are less polished, with longer distances between the hubs."
      }
    ],
    sapori: [
      {
        "nome": "Canederli",
        "testo": "Dumplings of stale bread with speck, served in broth or dry with melted butter. The dish eaten in every hut, often made that same morning."
      },
      {
        "nome": "Schlutzkrapfen",
        "testo": "Rye-dough ravioli filled with spinach and ricotta, dressed with butter and Parmesan. Typical of South Tyrol, found in all the alpine huts and valley trattorias."
      },
      {
        "nome": "Polenta, cheese and mushrooms",
        "testo": "Polenta with melted cheese and mushrooms or with sausage: the mountain-hut lunch on the Veneto and Trentino side."
      },
      {
        "nome": "Kaiserschmarrn",
        "testo": "A sweet pancake torn into pieces, with icing sugar and cranberry compote. The high-altitude dessert after a long day."
      },
      {
        "nome": "Barley soup",
        "testo": "A thick broth of barley, vegetables and speck: the hut dish to recover from the effort."
      },
      {
        "nome": "Strudel",
        "testo": "The apple and raisin dessert of South Tyrol, best warm with vanilla sauce. Every hut has its own."
      }
    ],
    attenzioni: [
      "Book car access to the Tre Cime and to Braies online before you leave: without a booking the road or car park may be closed and you will be turned back. Check dates and times on the operator's website.",
      "Afternoon thunderstorms are frequent in summer: be at the hut or in the valley before 3 pm. Check the South Tyrol or Veneto weather bulletin the evening before and in the morning.",
      "Huts: book from January-February for July-August, bring cash (cards often do not work) and a sleeping-bag liner, which is compulsory.",
      "In some regions mountain rescue is paid for; take insurance that covers trekking and helicopter rescue.",
      "On via ferrata use a complete approved kit (helmet, harness, energy absorber) and do not go alone without experience: most rescue call-outs involve via ferrata.",
      "Parking: at the best-known spots in summer the spaces are gone by 8 am. Many pass roads have time limits or motorbike bans on certain days: read the signs."
    ],
    esperienzeSlugs: ['alta-via-1', 'tre-cime-lavaredo', 'via-ferrata-dolomiti'],
    tripSlugs: ['dolomiti-roadtrip'],
    imageAlt: 'The spires of the Pale di San Martino rising out of the clouds above the meadows of Passo Rolle, Dolomites',
    immagine: '/images/italia/pale-san-martino-passo-rolle-riccardo.jpg',
  },
  {
    slug: 'sciare-in-italia',
    paeseSlug: 'italia',
    ordine: 2,
    nome: "Skiing in Italy",
    tipologia: ['sci', 'montagna', 'inverno'],
    giorniConsigliati: "5-7 days for a ski week, 2-3 for a long weekend",
    visitataPersonalmente: true,
    introduzione:
      "Italy has one of the biggest ski offerings in the world. Dolomiti Superski alone brings together twelve ski areas and over twelve hundred kilometers of slopes on a single lift pass, and across the Alps there are international links with France and Switzerland, skiable glaciers and very high-altitude resorts. The real question is which ski area fits your way of skiing, and how much you're willing to spend.",
    percheAndarci:
      "In Italy the balance of size, quality of services and price holds up against France, Switzerland and Austria. And here, unlike almost everywhere else in the Alps, you eat well up on the mountain: the hut halfway down the slope is a restaurant.",
    cosaVedere: [
      "The Sellaronda, the ski circuit around the Sella Group: four passes, four valleys, one full day on skis",
      "The Marmolada, with the run that comes down from the glacier and the view over the whole range",
      "The Matterhorn from Breuil-Cervinia, with the international link to Zermatt",
      "Mont Blanc from Courmayeur, with the Skyway and the off-piste Vallée Blanche on the French side",
      "The Milky Way (Via Lattea), which links Sestriere, Sauze d'Oulx, Sansicario and Montgenèvre in France",
      "Livigno, a duty-free zone at 1,800 meters, with the most reliable snow in the Italian Alps",
    ],
    cosaFare: [
      "The Sellaronda circuit in a day, clockwise or counterclockwise (see the dedicated experience page)",
      "Dawn skiing, when ski areas open the lifts before regular hours for first tracks on the groomed snow",
      "Ski touring or snowshoeing, for those who want the winter mountains without lifts (see the dedicated experience page)",
      "Lunch in a mountain hut, which in Italy is one of the reasons to ski",
      "Night skiing, where the lit slopes stay open late",
    ],
    doveDormire:
      "The opposite rule from summer applies: in winter **being on the slopes matters**, because half an hour of shuttle in ski boots twice a day wears you down. Ski-in/ski-out setups cost more and are often worth it. The ski week on half board remains the most convenient format, and packages that include lift pass and rental save quite a lot compared with buying everything separately.",
    doveMangiare:
      "This is where Italy beats everyone on the snow: slope-side huts are real restaurants. You eat canederli, polenta, goulash and casunziei in the Dolomites, polenta concia and fonduta in Aosta Valley, pizzoccheri in Valtellina, and you drink well. The bill is higher than in the valley, but nowhere near those in France and Switzerland. In high season the best huts should be booked, even for lunch.",
    comeArrivare:
      "By car, with **chains or winter tires required by law** on much of the mountain road network in winter, with dates that vary from region to region. Train connections reach the main valley towns (Bolzano, Aosta, Tirano, Oulx) and continue by bus. The most useful airports are Verona, Venice, Milan, Turin and Innsbruck, with organized transfers to the major resorts.",
    comeSpostarsi:
      "Inside the big ski areas, skis are the means of transport: you cross entire valleys without touching the car. Valley ski buses are generally included in the guest card and solve the last mile.",
    periodoMigliore:
      "The season runs from early December to mid-April, but the periods are very different. **Christmas and New Year** have the highest prices of the year and the most crowded slopes. **January after Epiphany** is the best time for value: good snow, few people, low prices. **February** is the month with the most reliable snow but coincides with school ski weeks. **March** is the best month for good skiers: long days, sun, snow still good up high and prices falling. In April you only ski at high altitude and on glaciers.",
    costi:
      "The lift pass is the main expense and varies a lot. In Dolomiti Superski the daily pass in high season is around 86 euros (about 77 in low season) and the seasonal pass around 970: these are indicative figures that should be rechecked every year. Then there's rental (€25-45 a day for a full set), lessons and lunch on the mountain. **Rates drop considerably if you book lift pass and lodging as a package and outside peak periods.**",
    erroriDaEvitare: [
      "Booking at Christmas or New Year without knowing they're the two most expensive weeks of the year, with differences of even forty percent compared with January",
      "Choosing the ski area by reputation instead of altitude: below 1,800 meters, with the winters of recent years, natural snow is no longer guaranteed and you ski on man-made snow",
      "Buying lift pass and rental separately when a package exists: the difference adds up",
      "Hitting the road without chains or winter tires: in Italy it's a legal requirement, and you risk a fine",
      "Underestimating insurance: in Italy **rescue on the slopes and in the mountains is paid for**, and in several regions a helicopter call-out costs thousands of euros. Many lift passes include basic coverage: check what it covers",
      "Going off-piste without a beacon, shovel, probe and someone who knows how to use them: without them, the sport becomes a risk",
    ],
    confronti: [
      {
        titolo: "Which ski area to choose in Italy",
        introduzione:
          "The choice is almost always made out of habit or word of mouth, and almost always without considering the two criteria that matter: **altitude** (which today decides whether there will be snow) and the **kind of skiing** you're after. Here are the major Italian ski areas compared on those grounds.",
        opzioni: [
          {
            nome: "Dolomiti Superski",
            sintesi: "The largest ski consortium in the world by area served by a single lift pass: twelve ski areas, over 1,200 km of slopes, from the Sellaronda to the Marmolada to Cortina.",
            costo: "daily pass around €86 in high season, seasonal pass around €970",
            durata: "a week isn't enough to see it all",
            pro: [
              "A size with no comparison: you ski for days without ever repeating a run",
              "The Sellaronda, a complete loop around a massif in a single day, doesn't exist anywhere else",
              "Mountain huts far better than in France and Switzerland",
              "Slope grooming and snowmaking among the best in Europe",
              "Scenery: you ski inside a UNESCO site",
            ],
            contro: [
              "The most expensive lift pass in Italy",
              "Slopes mostly easy and intermediate: if you want serious pitches you'll find less than the size would lead you to hope",
              "Average altitudes not very high compared with France: in lean seasons you depend a lot on artificial snow",
              "Sellaronda crowded in peak weeks",
            ],
            perChi: "Those who ski for the pleasure of touring, those who count scenery and lunch among the reasons for the day, families and intermediate levels.",
          },
          {
            nome: "Cervinia-Zermatt (Aosta Valley)",
            sintesi: "The highest ski area in the Italian Alps, with an international ski link to Swiss Zermatt and summer skiing on the Plateau Rosà glacier.",
            costo: "high, with a significant surcharge for the international pass to Zermatt",
            durata: "5-7 days",
            pro: [
              "Very high altitude: it's the Italian ski area with the most guaranteed snow, and you can ski until late spring",
              "The link to Zermatt lets you ski in two countries on the same day, under the Matterhorn from both sides",
              "Very long, wide runs, perfect for racking up kilometers",
              "Summer skiing on the glacier",
            ],
            contro: [
              "The town of Cervinia has no character at all: it's a resort built for skiing, with no historic center",
              "Exposed to wind and fog up high, with frequent lift closures on bad days",
              "The surcharge for Zermatt is steep",
              "Few difficult runs in proportion",
            ],
            perChi: "Those who want guaranteed snow and long runs, and those who go at the end of the season when everywhere else you ski on rotten snow.",
          },
          {
            nome: "Livigno",
            sintesi: "A duty-free zone in Alta Valtellina with a minimum altitude of 1,800 meters, favorable exposure and a strong vocation for snowparks and freestyle. 2026 Olympic venue for freestyle and snowboard events.",
            costo: "medium, with the advantage of tax exemption on equipment, fuel and alcohol",
            durata: "5-7 days",
            pro: [
              "High starting altitude and dry climate: among the Italian resorts with the most reliable snow",
              "Duty-free zone: equipment, fuel and sundries cost quite a lot less",
              "The snowpark is among the best in Europe, and the Olympic facilities have raised the bar even further",
              "Great for cross-country skiing too, with very extensive loops",
            ],
            contro: [
              "Getting there takes a while: the road goes over high passes or through the tunnel, and in case of snow travel times stretch considerably",
              "The town is long and spread out, and you need shuttles",
              "The ski area is smaller than the Dolomite ones",
              "Very intense dry cold in January",
            ],
            perChi: "Freestylers, snowboarders, those looking for guaranteed snow without Dolomite prices, those who also cross-country ski.",
          },
          {
            nome: "Via Lattea (Piedmont)",
            sintesi: "Sestriere, Sauze d'Oulx, Sansicario, Claviere and French Montgenèvre: four hundred kilometers of slopes on a single lift pass, an hour and a half from Turin.",
            costo: "much lower than Dolomiti Superski for the same size",
            durata: "4-6 days",
            pro: [
              "The best kilometers-to-price ratio in the Italian Alps",
              "The link to France is included in the full lift pass",
              "Very convenient from Turin and the northwest: it can even be done in a day",
              "Olympic-level technical runs at Sestriere, a legacy of the 2006 Games",
            ],
            contro: [
              "Less reliable snow than the higher Alpine ski areas, with heavy dependence on man-made snow",
              "The resorts are ugly to look at, products of the building boom of the Sixties and Seventies",
              "Services and huts not on the Dolomite level",
              "Connections between sectors are sometimes slow",
            ],
            perChi: "Those who want lots of kilometers while spending little, those who live in the northwest, intermediate and advanced skiers.",
          },
          {
            nome: "Monterosa Ski (Aosta Valley and Piedmont)",
            sintesi: "Champoluc, Gressoney and Alagna linked together beneath the Monte Rosa massif. It's the Italian benchmark for off-piste.",
            costo: "medium",
            durata: "5-7 days",
            pro: [
              "The best freeride in Italy: Alagna is one of the best-known freeride destinations in Europe",
              "Three Walser valleys with a strong cultural and architectural identity, which purpose-built resorts lack",
              "High altitudes and north-facing slopes that hold the snow well",
              "Less crowded than the big names",
            ],
            contro: [
              "A ski area designed for expert skiers: beginners have little here",
              "Off-piste here is serious and requires self-rescue gear and a guide",
              "Links between the valleys are cut off in strong wind",
              "Fewer services and less nightlife",
            ],
            perChi: "Freeriders, expert skiers, those who want the mountains more than the ski resort.",
          },
          {
            nome: "Apennines: Roccaraso, Campo Felice, Abetone, Monte Amiata",
            sintesi: "The Apennine resorts, from the large Roccaraso-Rivisondoli ski area in Abruzzo to the Tuscan and Emilian hubs.",
            costo: "the lowest of all, often half the Alps",
            durata: "weekend",
            pro: [
              "Lift pass, lodging and dining prices far from Alpine ones",
              "Convenient for anyone living in central-southern Italy: you ski a few hours from Rome and Naples",
              "Roccaraso has serious size, the largest in the Apennines",
              "A more family-friendly, less social atmosphere",
            ],
            contro: [
              "Low altitudes: snow cover is the critical variable and in recent winters it has often wavered",
              "Short and increasingly uncertain seasons",
              "Less extensive and less varied runs",
              "Heavy crowding on weekends, because it's the catchment area for the whole center-south",
            ],
            perChi: "Those who live in the center-south, those who ski only a few days a year, families on a tight budget.",
          },
        ],
        raccomandazione:
          "The most useful criterion today is **altitude**, because it decides whether there will be snow: above two thousand meters at the start you ski with reasonable certainty, below eighteen hundred you depend on the snow cannon. For a classic ski week with family or intermediate level, **Dolomiti Superski**, accepting the price and going in January after Epiphany or in March. For guaranteed snow and late-season skiing, **Cervinia**. For off-piste, **Monterosa**. For lots of kilometers at a low price, **Via Lattea**. For freestyle and guaranteed snow without Dolomite prices, **Livigno**. The Apennines make sense for those who live in the center-south and ski only a few days, knowing the season has become a gamble.",
      },
      {
        titolo: "When to go: the five seasons of the ski week",
        introduzione:
          "In the same resort, in the same ski area, the same apartment can cost double depending on the week. Knowing the calendar is the most effective way to save on snow.",
        opzioni: [
          {
            nome: "December up to the Immaculate Conception",
            sintesi: "The season opener, with December 8 as the first big weekend.",
            costo: "low outside the long weekend, high during it",
            durata: "weekend or a few days",
            pro: ["Low prices on weekdays", "Fresh slopes and few people", "The feel of early season"],
            contro: ["Uncertain snow cover: often only part of the ski area is open", "Very short days", "The Immaculate Conception long weekend already has high-season prices"],
            perChi: "Those who want to ski early and accept that it's half open.",
          },
          {
            nome: "Christmas and New Year",
            sintesi: "The two most expensive weeks of the year, by far.",
            costo: "the highest of the year, with differences of even 40% compared with January",
            durata: "week",
            pro: ["Events and nightlife at their peak", "All lifts open", "If you're traveling with family, it coincides with school vacations"],
            contro: ["Sky-high prices on everything", "Crowded slopes and lift lines", "Must be booked months ahead"],
            perChi: "Those with no calendar alternatives, and those looking for atmosphere more than skiing.",
          },
          {
            nome: "January after Epiphany",
            sintesi: "The best window for value across the whole season.",
            costo: "the lowest of high season, often with aggressive deals",
            durata: "week",
            pro: [
              "Prices plunge right after January 6",
              "Snow generally excellent and ski areas fully open",
              "Empty slopes on weekdays",
            ],
            contro: ["Intense cold, with harsh days up high", "Days still short", "Less nightlife"],
            perChi: "Anyone who can choose their dates. It's the right answer in most cases.",
          },
          {
            nome: "February",
            sintesi: "The month with statistically the most reliable snow, but it coincides with school ski weeks.",
            costo: "high, with peaks in school vacation weeks",
            durata: "week",
            pro: ["Snow at its best", "Lengthening days", "Ski areas at peak efficiency"],
            contro: ["Crowding in school vacation weeks, which change by region", "High prices", "Lift lines in the middle of the day"],
            perChi: "Those who put snow quality above everything, avoiding the school weeks of their own region and neighboring ones.",
          },
          {
            nome: "March and early April",
            sintesi: "The spring skiing season: sun, long days, falling prices.",
            costo: "going down, with strong deals at the end of the season",
            durata: "week or weekend",
            pro: [
              "Long, bright days: you ski from nine to five",
              "Quite a bit lower prices",
              "Lunches on the hut terraces, which are half the pleasure",
              "Few people after the school weeks",
            ],
            contro: [
              "The snow transforms: hard in the morning, mushy in the afternoon, and at low altitudes it can disappear",
              "Some lifts close earlier",
              "You need high altitude to have guarantees",
            ],
            perChi: "Those who ski well and can handle transformed snow, and those who count the sun among the reasons to go to the mountains.",
          },
        ],
        raccomandazione:
          "**January after Epiphany** if you can choose freely: same slopes, same ski area, forty percent less and no lines. **March at high altitude** if you ski well and want the sun. Christmas and New Year only if the calendar leaves no alternatives, and in that case booking months ahead.",
      },
    ],
    miaEsperienza:
      "Italian skiing stands out from French or Swiss skiing for the lunch, more than for the length of the runs. In France you ski hard and eat in a self-service; in the Dolomites you do four hours in the morning, sit down in a hut at two thousand four hundred meters and eat canederli and strudel in front of a pink wall. Those who ski to rack up kilometers consider it wasted time, those who go to be in the mountains consider it the point. The Sellaronda, the circuit around the Sella Group, is both the most beautiful and the most overrated thing. The idea is gorgeous (four passes, four valleys, an entire massif circled on skis in a day), but in peak weeks it's a continuous line, with the last lifts closing very early and the real risk of ending up on the wrong side. It should be done in January, starting at nine. In recent years, though, altitude has changed things: below eighteen hundred meters natural snow is no longer a guarantee, and choosing the resort by reputation instead of elevation is the quickest way to find a white tongue in the middle of the grass.",
    luoghi: [
      {
        "nome": "Sellaronda",
        "testo": "The ski circuit around the Sella massif: four passes (Gardena, Sella, Pordoi, Campolongo) and four valleys (Val Gardena, Val di Fassa, Arabba, Alta Badia). It is about 40 km of pistes and lifts, mostly easy and intermediate runs, with views over the Dolomites all the way round.",
        "come": "Start from any village around the Sella (Selva, Canazei, Arabba, Corvara) with a Dolomiti Superski pass. The clockwise direction is marked with orange signs, the anticlockwise one with green signs.",
        "quando": "In season, December to mid April. Start by 9:30 and reach the last lift before closing (usually around 4 pm): anyone who arrives late has to take a taxi back.",
        "tempo": "a full day: 4-5 hours on skis plus breaks",
        "costo": "Dolomiti Superski day pass around 86 euros in high season and 77 in low season, 2025/26 season; for 2026/27 press reports point to an increase of a few euros",
        "url": "https://www.dolomitisuperski.com/",
        "consiglio": "Check the last-lift times for each pass the same morning. The Arabba-Corvara section is the longest stretch with nowhere to stop: carry something to eat in your pocket."
      },
      {
        "nome": "Alta Badia and Gran Risa",
        "testo": "The Ladin Val Badia has wide, well-groomed pistes and some of the best food in the Alps. The Gran Risa, at La Villa, is the World Cup giant slalom run: long and steep.",
        "come": "Stay in Corvara, La Villa or San Cassiano and take the lifts straight from the village. The Dolomiti Superski pass also reaches the Sellaronda.",
        "quando": "December to April. January and March are the best months for snow and prices.",
        "tempo": "2-3 days to explore the area",
        "url": "https://www.dolomitisuperski.com/",
        "consiglio": "Have lunch in a mountain hut and book in high season: the best ones run out of tables early."
      },
      {
        "nome": "Cortina d'Ampezzo",
        "testo": "The 2026 Olympic resort, with three main areas: Tofane, Faloria-Cristallo and Cinque Torri-Lagazuoi. Runs from intermediate to the most demanding, with the Tofane walls as a backdrop. The Lagazuoi area also has the First World War ski tour.",
        "come": "Stay in Cortina and take the gondola or shuttle to the lift base; valley ski buses link the three areas.",
        "quando": "December to April. In the weeks after Epiphany and in late February prices drop.",
        "tempo": "3-4 days",
        "url": "https://www.dolomitisuperski.com/",
        "consiglio": "After the 2026 Olympics some lifts and runs were changed: check the updated map before planning your days."
      },
      {
        "nome": "Cervinia and Zermatt",
        "testo": "The highest ski area in Italy: from Breuil-Cervinia (2,050 m) you climb above 3,400 metres to the Plateau Rosà and can ski on the glacier even in summer. With the international pass you cross into Switzerland and ski down to Zermatt, under the Matterhorn.",
        "come": "From Aosta it is about one hour by car or bus to Breuil-Cervinia. The lifts start from the village. For Zermatt you need the extended pass.",
        "quando": "November to May for snow at altitude; the link to Zermatt depends on the weather and wind.",
        "tempo": "3-5 days; the Cervinia-Zermatt trip takes a full day",
        "url": "https://www.cervinia.it/",
        "consiglio": "Check the last lift for coming back from Switzerland: if you miss the last ride, you go back by taxi or train at high cost."
      },
      {
        "nome": "Courmayeur and Skyway Monte Bianco",
        "testo": "Courmayeur lies at the foot of Mont Blanc. The Skyway cable car climbs to Punta Helbronner (3,466 m), where you see the massif up close. The pistes are shorter than in the big ski areas, but there are famous off-piste routes, such as the Vallée Blanche, to be done only with a guide.",
        "come": "Courmayeur is one hour from Aosta. The Skyway starts at Pontal d'Entrèves, a few minutes from the centre.",
        "quando": "December-April. For the Skyway choose clear days: with clouds there is no view.",
        "tempo": "2-3 days; the Skyway takes half a day",
        "url": "https://www.montebianco.com/",
        "consiglio": "Anyone who wants the Vallée Blanche must book a mountain guide in advance and check crevasse conditions."
      },
      {
        "nome": "Via Lattea (Sestriere and Sauze d'Oulx)",
        "testo": "A Piedmont ski area of about 400 km of pistes linking Sestriere, Sauze d'Oulx, Sansicario, Cesana and Claviere, with a crossing into France at Montgenèvre. Sestriere hosted the 2006 Olympics. The runs are varied and the feel is less luxurious than in the Dolomites.",
        "come": "From Turin about 1 hour 30 minutes by car. There is also a train to Oulx, then a bus to Sauze or Sestriere.",
        "quando": "December to April. Altitudes are lower than Cervinia: snow is less certain at the start and end of the season.",
        "tempo": "3-5 days",
        "url": "https://www.vialattea.it/",
        "consiglio": "For anyone coming from Turin it is the most convenient choice for a weekend: you can do it without two long nights on the road."
      },
      {
        "nome": "Livigno",
        "testo": "A duty-free zone in Valtellina, at 1,816 m, with some of the most reliable snow in the Italian Alps. Wide, quiet pistes, good for beginners and families, and a big snowpark. Fuel, alcohol and perfume cost less here.",
        "come": "About 4 hours by car from Milan, via Bormio and the Passo d'Eira, or through Switzerland by the Munt la Schera tunnel. Check winter road conditions.",
        "quando": "Late November to April.",
        "tempo": "3-5 days",
        "url": "https://www.livigno.eu/",
        "consiglio": "There are customs checks on leaving, with limits on quantities of alcohol, tobacco and fuel: find out before shopping."
      },
      {
        "nome": "Marmolada",
        "testo": "The longest run in the Dolomites drops from the glacier for about 12 km, from Punta Rocca to Malga Ciapela, with almost 2,000 metres of vertical. It is a high-altitude ski descent, open depending on snow conditions.",
        "come": "From Malga Ciapela, in the Alto Agordino, a cable car in three sections goes up to Punta Rocca. From there you ski down the run. The lifts are part of Dolomiti Superski.",
        "quando": "December to April, often with good snow in spring. The lifts depend on the weather.",
        "tempo": "half a day for the descent",
        "url": "https://www.dolomitisuperski.com/",
        "consiglio": "The descent is long: check conditions and the last ride, and carry some liquids."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "By 8:30 be at the cable car in Corvara or Selva, with a Dolomiti Superski pass and a map in your pocket.",
          "Do the Sellaronda clockwise or anticlockwise, stopping for a quick lunch in a hut around 12:30.",
          "Check the last-lift times for each pass and be back by 4 pm."
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1, Alta Badia: wide, easy pistes to warm up, lunch in a hut, Gran Risa in the afternoon.",
          "Day 2, Sellaronda in a day, starting early.",
          "Day 3, Val Gardena or Cortina for a change of scene, back the same day or evening."
        ]
      },
      {
        "titolo": "7 days",
        "tappe": [
          "Day 1: warm-up day nearby, free afternoon and no hurry.",
          "Day 2: Sellaronda in a day.",
          "Day 3: Marmolada with the descent from the glacier.",
          "Day 4: Cortina and Lagazuoi, with the First World War tour.",
          "Day 5: free day, or a lesson or cross-country skiing.",
          "Day 6: Alta Badia and Gran Risa.",
          "Day 7: last run in the morning, travel back in the afternoon."
        ]
      }
    ],
    zone: [
      {
        "nome": "Corvara and Alta Badia",
        "perChi": "anyone who wants the Sellaronda from the doorstep",
        "testo": "Lifts right by the villages, excellent huts, Ladin culture. Ski-in/ski-out is common, prices are high in high season. It is quiet in the evening."
      },
      {
        "nome": "Selva di Val Gardena",
        "perChi": "anyone who wants evening life and services",
        "testo": "A lively village with shops and bars, and the Sellaronda within walking reach. More crowded than Alta Badia and more expensive. Passo Gardena is just above."
      },
      {
        "nome": "Breuil-Cervinia",
        "perChi": "skiers who want guaranteed snow",
        "testo": "High altitude and wide pistes, link to Zermatt. The village is built for skiing and has little charm. Wind and fog can close the high lifts."
      },
      {
        "nome": "Livigno",
        "perChi": "families, beginners, anyone who wants to save on some purchases",
        "testo": "Reliable snow, easy pistes and lower prices on goods thanks to the duty-free zone. Far from the other big resorts: you arrive only by car or on long bus journeys."
      }
    ],
    sapori: [
      {
        "nome": "Canederli and casunziei",
        "testo": "Canederli across the Dolomites; casunziei are the half-moon ravioli of Cortina, filled with beetroot and dressed with butter and poppy seeds."
      },
      {
        "nome": "Polenta concia and Aosta Valley fondue",
        "testo": "In the Aosta Valley, polenta with melted cheese and fondue with fontina, often with toasted bread. Eaten in the huts and restaurants of Courmayeur and Cervinia."
      },
      {
        "nome": "Pizzoccheri",
        "testo": "Buckwheat tagliatelle with cabbage, potatoes and Casera cheese. Typical of Valtellina and Livigno."
      },
      {
        "nome": "Goulash and barley soup",
        "testo": "Hot hut dishes in South Tyrol, perfect to recover in the middle of a day on skis."
      },
      {
        "nome": "Vin brulé",
        "testo": "Hot red wine with spices and citrus. Drunk in the trackside huts to warm up, but alcohol and skiing do not mix."
      },
      {
        "nome": "Kaiserschmarrn",
        "testo": "A sweet pancake torn into pieces with cranberry jam, the dessert of many South Tyrol huts."
      }
    ],
    attenzioni: [
      "By law anyone doing ski touring, off-piste or snowshoeing in snowy terrain outside groomed pistes must carry an avalanche transceiver, shovel and probe. A helmet is compulsory for under-18s and third-party liability insurance is compulsory for all skiers.",
      "On many mountain roads snow chains on board or winter tyres are required, normally from 15 October to 15 April. Check the order for the specific road: dates vary.",
      "Rescue on and off the piste in Italy is paid for: a helicopter can cost thousands of euros. Check what your ski pass covers and take out insurance.",
      "At Christmas, New Year and in February weeks prices rise by up to 40 percent and the pistes are very crowded. Book early or choose January after Epiphany or March.",
      "Below 1,800 metres natural snow is not guaranteed: check webcams and the snow report before booking.",
      "At Cervinia wind and fog often close the high lifts: keep a plan B at lower altitude. At Livigno there are customs checks on leaving."
    ],
    esperienzeSlugs: ['sellaronda', 'scialpinismo-ciaspole'],
    tripSlugs: ['settimana-bianca'],
    imageAlt: "Snowy slopes with ski lifts above Madonna di Campiglio and the peaks of the Alps in the background",
    immagine: '/images/italia/sciare-in-italia.jpg',
  },
  {
    slug: 'roma',
    paeseSlug: 'italia',
    ordine: 3,
    nome: "Rome",
    tipologia: ['città d\'arte', 'archeologia', 'gastronomia'],
    giorniConsigliati: "4-5 days, and it's not enough",
    visitataPersonalmente: true,
    introduzione:
      "Three thousand years of layers in a historic center that is entirely a UNESCO site and contains a sovereign state. It's the only city in the world where you dig for a subway, find an imperial barracks, and the whole thing is treated as a logistical problem rather than a discovery.",
    percheAndarci:
      "No other place has so many layers stacked on top of each other. And unlike nearly every other great European art city, Rome is still lived in at its center: in the rioni (neighborhoods) people buy bread, argue and live.",
    cosaVedere: [
      "The Colosseum, the Roman Forum and the Palatine, with the single ticket: **named tickets since 2023, with ID required at the entrance**",
      "The Vatican Museums and the Sistine Chapel, plus St. Peter's with the dome",
      "The Pantheon, which has had an entrance ticket since 2023, and the largest unreinforced concrete dome ever built",
      "Trajan's Forum, the Markets and the Domus Aurea, with guided visits in very limited numbers",
      "Trastevere, the Ghetto and Monti: the rioni where Rome is still a place where people live",
      "The Galleria Borghese, booking required with entries every two hours",
      "The Appian Way and the aqueducts, the Rome almost nobody puts on the itinerary",
    ],
    cosaFare: [
      "Underground Rome: Basilica of San Clemente, Case Romane del Celio, Domus Aurea (see the dedicated experience page)",
      "Walking the Appian Way on Sunday, when it's closed to traffic (see the dedicated experience page)",
      "Aperitivo and dinner in the neighborhoods instead of around the monuments: that's where you eat well",
      "Walking into ten or so random churches: in Rome, Caravaggio's painting is free and often there's nobody there",
    ],
    doveDormire:
      "Monti and Trastevere to stay in a lively neighborhood, Prati for the lowest prices and the convenience of Metro line A to the Vatican, Testaccio for good food and staying out of the crush. Better to avoid the areas right around Termini Station at night and the Trevi Fountain area, which is impassable by day.",
    doveMangiare:
      "Roman cuisine is four pastas (cacio e pepe, gricia, amatriciana, carbonara) plus the quinto quarto (offal), which few people try and which explains the city better than the pastas do: coda alla vaccinara, tripe, coratella. Eat in a trattoria in Testaccio or Pigneto, not in the center. Carciofo alla giudia (Jewish-style artichoke) in the Ghetto in season (late winter to spring), thin, crispy Roman pizza, supplì as a snack. **The most important rule: don't eat at any place with photos of the dishes outside or with someone inviting you in.**",
    comeArrivare:
      "Fly into Fiumicino (FCO), with the Leonardo Express reaching Termini in 32 minutes, or into Ciampino (CIA) for low-cost flights. By train, high-speed service connects Rome to Milan in three hours and to Naples in a little over an hour.",
    comeSpostarsi:
      "The metro has three lines (few for a city this size, for archaeological reasons: every dig finds something), buses are slow and irregular, trams are useful on a few routes. **The historic center is done on foot**, and it's the only sensible way: distances are shorter than they seem and almost everything is within two kilometers.",
    periodoMigliore:
      "**From October to March**, without a doubt. April, May and September are beautiful and full of people; July and August are hard, with temperatures above 38 degrees and heat waves that make visiting tiring and for some risky. In August, on the other hand, many Romans are away and the city changes face, but many trattorias are closed.",
    costi:
      "Single ticket for Colosseum-Forum-Palatine, named and timed; Vatican Museums that you have to book, even if it's not formally required; Galleria Borghese with entries capped every two hours. Churches are almost all free, and they contain a huge part of what you come to see.",
    erroriDaEvitare: [
      "Buying the Colosseum ticket on the spot or from street sellers: it's **named**, you need an original ID (not a copy), and from 2026 changing the name is even more restricted. Buy only through the official channel, weeks ahead for the best time slots",
      "Not booking the Galleria Borghese: entries are capped in two-hour slots and sell out",
      "Eating within three hundred meters of a famous monument",
      "Planning the Vatican and the Colosseum on the same day: they're two heavy half-days and sit at opposite ends of the center",
      "Assuming you can enter St. Peter's in shorts: the dress code is checked at the entrance",
      "Going in July or August without organizing your days around the heat, with museums in the middle hours",
    ],
    miaEsperienza:
      "Rome is visited badly precisely because people think they know it. The trap is the Colosseum-Trevi-Vatican triangle, done in two days with your tongue hanging out, standing in line, eating badly. Two things stayed with me that cost nothing. The first is the churches: San Luigi dei Francesi has three Caravaggios, you walk in for free, and in the middle of a Tuesday morning in November there was almost nobody. You put a euro in the coin box for the light and stay ten minutes in front of the Calling of St. Matthew. The second is the Appian Way on a Sunday, closed to traffic: you walk on original Roman paving stones among the tombs and the pines, with the aqueducts in the distance, and for kilometers there are only cyclists and families. It's half an hour from the Colosseum, yet almost none of the millions of people who photograph the Colosseum go. For eating there's just one rule: move away. In Testaccio, Pigneto or San Lorenzo you eat a well-made cacio e pepe for fifteen euros, five hundred meters from a place where the same dish costs double and is frozen.",
    luoghi: [
      {
        "nome": "Colosseum, Roman Forum and Palatine",
        "testo": "The Flavian amphitheatre, inaugurated in 80 AD, held up to 50,000 spectators. The same ticket covers the Roman Forum, the political heart of the ancient city, and the Palatine, the hill of the imperial palaces.",
        "come": "Metro B to Colosseo. The ticket is named and ID is checked at the entrance. With the standard ticket you enter the Colosseum and also visit the Forum and Palatine later that day or the next (the ticket is valid 24 hours from the first entry).",
        "quando": "Open every day except 25 December and 1 January. First morning slot or the last hours of the afternoon to avoid queues; in summer the Forum is very hot and shadeless.",
        "tempo": "half a day, 3-4 hours for everything",
        "costo": "18 euros full price, 2026 (standard Colosseum, Forum and Palatine ticket); the Full experience with arena and underground costs 24 euros plus a booking fee",
        "url": "https://colosseo.it/",
        "consiglio": "Buy only through the official channel and well in advance for the best slots. Visit the Forum and Palatine first if it is hot, and the Colosseum interior in the cooler hours."
      },
      {
        "nome": "Vatican Museums and Sistine Chapel",
        "testo": "Kilometres of halls with ancient and Renaissance collections: the Gallery of Maps, the Raphael Rooms and, at the end, the Sistine Chapel with Michelangelo's frescoes. The route is long and one-way, with constant crowds.",
        "come": "Metro A to Ottaviano or Cipro, then a 10-minute walk. Book online on the official site to skip the ticket-office queue. From the Sistine you can exit straight into St Peter's only on an authorised guided visit.",
        "quando": "Monday to Saturday 8am-8pm, last entry at 6pm. Closed on Sundays, except the last Sunday of the month (9am-2pm, last entry 12:30pm), when entry is free and the crowds are huge. Also closed on some religious holidays: see the calendar on the website. First slot in the morning or late afternoon.",
        "tempo": "3-4 hours",
        "costo": "20 euros full price, 25 euros with online booking on the official website (2026)",
        "url": "https://www.museivaticani.va/",
        "consiglio": "In the Sistine the silence and the ban on photography are enforced by staff. Decide beforehand what to see: nobody manages to see it all."
      },
      {
        "nome": "St Peter's Basilica and dome",
        "testo": "The largest church in Christendom, with Michelangelo's Pietà, Bernini's baldachin and the dome Michelangelo designed. From the dome you see all of Rome.",
        "come": "Metro A to Ottaviano and walk. You go through security checks; entry to the basilica is free, the climb to the dome is paid. Shoulders and knees must be covered.",
        "quando": "Every day, but closed during papal ceremonies; on Wednesday morning there is the general audience and the area is very crowded. Early in the morning.",
        "tempo": "1-2 hours, plus 1 hour for the dome",
        "url": "https://www.basilicasanpietro.va/",
        "consiglio": "The dress code is enforced: in shorts or with bare shoulders you do not get in. Keep a light scarf in your bag."
      },
      {
        "nome": "Pantheon",
        "testo": "The temple of all the gods, rebuilt under Hadrian in the 2nd century AD. The unreinforced concrete dome is still the largest of its kind in the world, with the oculus open at the centre letting in light and also rain. Raphael and the first kings of Italy are buried inside.",
        "come": "In the centre, between Piazza Navona and the Trevi Fountain, on foot. Since 2023 entry has been paid, with a ticket bought online or on the spot. During religious services access is limited.",
        "quando": "Every day. Early morning or evening for fewer people; in the rain the oculus creates a special atmosphere.",
        "tempo": "30-45 minutes",
        "consiglio": "Check the rules and ticket price in advance. The square outside is crowded and full of tourist restaurants: do not have lunch there."
      },
      {
        "nome": "Galleria Borghese",
        "testo": "Cardinal Scipione Borghese's collection in a villa inside the park: Bernini (Apollo and Daphne, the Rape of Proserpina), Caravaggio, Titian and Canova. It is one of the finest collections in Rome, with few visitors at a time.",
        "come": "Inside Villa Borghese, about 20 minutes on foot from Piazza di Spagna or Piazzale Flaminio. Booking is compulsory with entry in two-hour slots.",
        "quando": "Closed on Mondays. Slots sell out days or weeks ahead in high season.",
        "tempo": "2 hours (the visit has a fixed length)",
        "url": "https://galleriaborghese.cultura.gov.it/",
        "consiglio": "Arrive a little early for ticket collection and the cloakroom. The park around is lovely for a walk afterwards."
      },
      {
        "nome": "Appian Way (Appia Antica)",
        "testo": "The queen of Roman roads, built in 312 BC. You find original paving stones, tombs, villas and aqueducts, and the catacombs of San Callisto and San Sebastiano below the road. The Appian Way Park is one of the few large green areas near the centre.",
        "come": "From the centre take bus 118 or 660 and walk; or rent a bike. On Sundays and holidays the main stretch is closed to traffic.",
        "quando": "Sunday, which is the best day: closed to cars. The catacombs have different closing days (usually San Callisto on Wednesday and San Sebastiano on Sunday): check.",
        "tempo": "half a day",
        "url": "https://www.parcoappiaantica.it/",
        "consiglio": "The Appian Way on Sunday is half an hour from the Colosseum and almost nobody goes. You walk on original paving stones among tombs and pines, with the aqueducts in the distance. Bring water: there are few places to refuel along the road."
      },
      {
        "nome": "Basilica of San Clemente",
        "testo": "A 12th-century church built on top of a 4th-century basilica, itself above Roman buildings and a 2nd-century Mithraeum. Going down you cross a thousand years of the city's history across three levels.",
        "come": "Five minutes on foot from the Colosseum, on via Labicana. The upper basilica can be visited freely, the underground levels with a ticket.",
        "quando": "Hours include a break in the middle of the day; check the website. The underground rooms are damp and cool even in summer.",
        "tempo": "1 hour",
        "url": "https://www.basilicasanclemente.com/",
        "consiglio": "It is the simplest way to understand what underground Rome means, and it is a couple of steps from the Colosseum. It pairs well with the Case Romane del Celio."
      },
      {
        "nome": "San Luigi dei Francesi",
        "testo": "The French national church in Rome, near Piazza Navona. In the Contarelli Chapel are three Caravaggio paintings on St Matthew: the Calling, the Martyrdom and the Inspiration.",
        "come": "On foot from Piazza Navona or the Pantheon, a few minutes away. Entry is free. To light the paintings you put a 1-euro coin in the meter.",
        "quando": "Every day with split hours. Mid-morning on a weekday there are few people.",
        "tempo": "20-30 minutes",
        "costo": "free entry; 1 euro for the light",
        "consiglio": "I went mid-morning on a Tuesday in November: you can stay ten minutes in front of the Calling of St Matthew practically alone. Bring coins."
      },
      {
        "nome": "Trastevere and the Jewish Ghetto",
        "testo": "Two neighbourhoods where Rome is still lived in. Trastevere has alleys, osterias and the basilica of Santa Maria in Trastevere with its golden mosaics. The Jewish Ghetto, near the Portico d'Ottavia, is the place for carciofo alla giudia.",
        "come": "On foot from the centre, crossing the Tiber over the Tiber Island. Tram 8 from Largo Argentina to Trastevere.",
        "quando": "Morning for the alleys; evening for dinner. Trastevere on Saturday night is very crowded.",
        "tempo": "half a day",
        "consiglio": "To eat well, move away from restaurants whose waiters invite you in. In Testaccio, Pigneto or San Lorenzo you can eat a well-made cacio e pepe for about 15 euros, 500 metres from places where the same dish costs double."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "8:30, Colosseum and Roman Forum with a booked ticket, before the crowds.",
          "Lunch away from the monuments, in Monti or Testaccio.",
          "Afternoon at the Pantheon and San Luigi dei Francesi.",
          "Stroll through Piazza Navona and, at sunset, Ponte Sant'Angelo.",
          "Dinner in Trastevere or the Ghetto."
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Colosseum, Forum and Palatine in the morning; San Clemente and lunch in Monti; Pantheon and San Luigi dei Francesi in the afternoon.",
          "Day 2: Vatican Museums at the first slot and St Peter's; lunch in Prati; free afternoon in Trastevere and dinner in the Ghetto."
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Colosseum, Forum and Palatine, San Clemente.",
          "Day 2: Vatican Museums and St Peter's, then Castel Sant'Angelo and Piazza Navona.",
          "Day 3: Galleria Borghese in the morning with a booking; in the afternoon the Appian Way (best on a Sunday) or Trastevere and the Ghetto."
        ]
      }
    ],
    zone: [
      {
        "nome": "Monti",
        "perChi": "anyone who wants a lively neighbourhood close to the Colosseum and Termini",
        "testo": "Alleys, workshops and bars on foot from the Colosseum. A bit noisy in the evening, with few big hotels and many apartments. Convenient for metro and trains."
      },
      {
        "nome": "Trastevere",
        "perChi": "anyone who wants evening life",
        "testo": "Alleys, osterias and music. Crowded and noisy at weekends; restaurants on the main streets are touristy. The centre is 15-20 minutes on foot."
      },
      {
        "nome": "Prati",
        "perChi": "anyone who wants to spend less and see the Vatican",
        "testo": "A residential district with lower prices and metro A for St Peter's and Termini. Not very charming, but quiet and convenient."
      },
      {
        "nome": "Testaccio",
        "perChi": "anyone who wants to eat well and stay out of the crowds",
        "testo": "A working-class district with historic trattorias and the market. A bit off the beaten track from the centre and the monuments, but well connected by metro B."
      }
    ],
    sapori: [
      {
        "nome": "The four Roman pastas",
        "testo": "Cacio e pepe, gricia, amatriciana and carbonara: few ingredients and a lot of technique. Eat them in a trattoria, better in Testaccio, Pigneto or San Lorenzo than in the centre."
      },
      {
        "nome": "Carciofo alla giudia",
        "testo": "Roman artichoke fried whole, crisp outside and tender inside. Eaten in the Ghetto, in season, from late winter to spring."
      },
      {
        "nome": "Coda alla vaccinara",
        "testo": "Oxtail stewed with celery and tomato, one of the dishes of the quinto quarto. Found in traditional trattorias, especially in Testaccio."
      },
      {
        "nome": "Supplì",
        "testo": "A fried rice croquette with ragù and a heart of stringy mozzarella. Bought to take away in friggitorie and pizza-by-the-slice shops."
      },
      {
        "nome": "Roman pizza",
        "testo": "Thin and crisp, unlike the Neapolitan one. Eaten in a pizzeria in the evening, or by the slice at the counter as a snack."
      },
      {
        "nome": "Maritozzo",
        "testo": "A soft sweet bun with whipped cream, typical of the Roman breakfast. Found in cafes and pastry shops."
      }
    ],
    attenzioni: [
      "The Colosseum ticket is named and you need ID at the entrance. Buy only on the official website: street sellers and many unofficial sites charge extra.",
      "Pickpockets work on metro A and B, on bus 64 to St Peter's, at Termini and near monuments. Keep bags closed and in front, phone in an inside pocket.",
      "Avoid restaurants with photos of dishes outside or with someone inviting you in. Check the cover charge and extras on the bill before ordering.",
      "Taxis: take only white licensed ones, with a fixed fare from Fiumicino airport to the centre inside the Aurelian Walls. Refuse anyone offering a negotiated price at arrivals.",
      "Fake centurions and people who put bracelets or roses in your hand ask for money afterwards: say no firmly. Do not enter the fountains, there is a fine.",
      "A tourist tax is charged per night, to be paid at the accommodation; the amount depends on the category. The historic centre has a ZTL with cameras: if you arrive by car, ask your hotel how to avoid a fine."
    ],
    esperienzeSlugs: ['roma-sotterranea', 'appia-antica'],
    tripSlugs: ['roma-4-giorni', 'grandi-citta-italia'],
    imageAlt: "The Colosseum seen from the Roman Forum among the remains of columns and cypresses, Rome",
    immagine: '/images/italia/roma.jpg',
  },
  {
    slug: 'firenze',
    paeseSlug: 'italia',
    ordine: 4,
    nome: "Florence",
    tipologia: ['città d\'arte', 'rinascimento', 'gastronomia'],
    giorniConsigliati: "3 days, plus one or two for the surrounding Tuscany",
    visitataPersonalmente: true,
    introduzione:
      "The Renaissance was born here, all within a historic center you can cross on foot in twenty minutes. For the same reason it's also one of the most saturated cities in Europe: in the same half square kilometer you have Brunelleschi's dome, the Uffizi, the David and the Ponte Vecchio.",
    percheAndarci:
      "No place in the world has so many works per square meter. And Brunelleschi's dome, built without centering using a technique nobody has ever managed to replicate exactly, is still today an engineering problem before it is a monument.",
    cosaVedere: [
      "Brunelleschi's dome, climbing the 463 steps up to the lantern: **the climb requires mandatory booking with a time slot**",
      "The Uffizi, which you have to book",
      "The Galleria dell'Accademia for the David, and the Museo dell'Opera del Duomo, which almost everyone skips and is the best in the city",
      "Palazzo Pitti and the Boboli Gardens, on the other bank",
      "The Brancacci Chapel and the Medici Chapels, less crowded and just as important",
      "San Miniato al Monte, the Romanesque church on the hill, with the monks' Gregorian chant in the afternoon",
      "The Oltrarno, with its artisan workshops, the part of the city disappearing fastest",
    ],
    cosaFare: [
      "Climbing the dome by booking the first morning slot (see the dedicated experience page)",
      "Spending an afternoon in the Oltrarno among the restoration, gilding and leather workshops",
      "Going up to San Miniato at sunset instead of Piazzale Michelangelo, which is a hundred meters away and has ten times the people",
      "Eating in a trattoria in the Oltrarno or Sant'Ambrogio instead of in the central quadrilateral",
    ],
    doveDormire:
      "The Oltrarno to stay in a still-lively neighborhood five minutes' walk from the center, Sant'Ambrogio for the prices and the market, San Frediano for the evening. The quadrilateral between the Duomo and the Signoria is very convenient and expensive, and in the evening there are no residents.",
    doveMangiare:
      "Tuscan cuisine is humble and ingredient-driven: ribollita, pappa al pomodoro, panzanella in summer, and the bistecca alla fiorentina, a precise cut, at least three fingers thick, cooked rare with no discussion and served by the kilo. Try the lampredotto sandwiches at the stands, the most Florentine thing there is, and the chicken-liver crostini. The Sant'Ambrogio market is the one the residents use; the central San Lorenzo one, on the upper floor, has become a food court.",
    comeArrivare:
      "High-speed rail: Firenze Santa Maria Novella is in the center, fifteen minutes' walk from the Duomo, and connects to Milan in an hour and forty and Rome in an hour and a half. Florence's airport is small; Pisa and Bologna are the alternatives with train connections.",
    comeSpostarsi:
      "Everything on foot: the historic center is small, which is both its virtue and the cause of its congestion. The tram serves the outskirts and the airport. **A car in the center is useless and the ZTL (limited traffic zone) fines it**, with cameras that penalize those who don't know.",
    periodoMigliore:
      "November, January and February are the months when the city becomes livable again and museums can be visited without endless lines. April-June and September-October are the most beautiful and the most crowded. July and August are scorching and saturated.",
    costi:
      "The Uffizi and the Accademia have higher rates in high season; the combined ticket for the Duomo complex covers the dome, baptistery, bell tower, crypt and museum and is the only way up. **On the first Sunday of the month state museums are free**, and so there are huge lines.",
    erroriDaEvitare: [
      "Showing up at the Uffizi or the Accademia without a reservation: lines can run to hours, and in high season you risk not getting in",
      "Not booking the dome climb, which has capped time slots and sells out days ahead",
      "Skipping the Museo dell'Opera del Duomo because it's \"just an annex museum\": it holds the original doors of the Baptistery and the Bandini Pietà, and it's the best in the city",
      "Driving into the center: the ZTL is active and fines arrive at your home months later",
      "Going to Piazzale Michelangelo at sunset instead of San Miniato, which is a hundred meters higher, has the same view and a tenth of the people",
      "Ordering a \"bistecca fiorentina\" well done or under two hundred and fifty grams: it doesn't exist, and anyone serving it that way is serving something else",
    ],
    miaEsperienza:
      "Florence has a problem of scale that the guidebooks don't mention: everything you come to see fits in half a square kilometer, and from April to October the center is a dense crowd moving slowly along three axes. In practice the city should be done backwards: early in the morning, or in November. The dome climb booked for the first slot, at eight thirty, is a different experience from doing it at noon: you climb a narrow staircase between the two shells, pass a few centimeters from the frescoes of the Last Judgment, and at the top there's air. Almost nobody goes to the Museo dell'Opera del Duomo, which is worth as much as the Uffizi: inside are the original doors of the Baptistery (the ones in the square are copies) and Michelangelo's last Pietà, the one he wanted to destroy. There are four people. For sunset everyone goes to Piazzale Michelangelo, which is a parking lot with vendors; a hundred meters higher is San Miniato al Monte, a Romanesque church from the year 1000 with a marble-inlaid façade, the same view and, in the afternoon, monks singing Gregorian chant in the crypt.",
    luoghi: [
      {
        "nome": "Duomo and Brunelleschi's dome",
        "testo": "The cathedral of Santa Maria del Fiore with the largest masonry dome ever built, finished in 1436 without centering. Climbing the 463 steps you walk between the two shells, a few centimetres from the Last Judgement frescoes, up to the lantern with a view over the whole city.",
        "come": "Right in the centre, 15 minutes on foot from the station. The dome climb is by time slot and must be booked online on the Opera del Duomo's official site. Entry to the cathedral is free, with a queue at security.",
        "quando": "First slot in the morning, to climb with few people. The stairs are narrow and there are no lifts: not suitable for anyone claustrophobic or afraid of heights.",
        "tempo": "1.5 hours for the dome, plus the cathedral",
        "url": "https://www.duomo.firenze.it/",
        "consiglio": "I climbed the dome in the first slot, at half past eight: it is a different experience from midday. You pass close to the frescoes and at the top there is air."
      },
      {
        "nome": "Museo dell'Opera del Duomo",
        "testo": "The museum of the Duomo complex, which many skip and is among the best in the city. Inside are the original Baptistery doors (the ones in the square are copies), Michelangelo's Bandini Pietà, Donatello's Magdalene and the models of the dome.",
        "come": "Two steps from the Duomo, behind it, at piazza del Duomo 9. The combined Duomo complex ticket includes dome, baptistery, bell tower, crypt and museum.",
        "quando": "Every day; check hours on the website. Early morning it is almost empty.",
        "tempo": "1.5-2 hours",
        "url": "https://www.duomo.firenze.it/",
        "consiglio": "I would not skip it: inside are the Baptistery doors and Michelangelo's last Pietà, the one he wanted to destroy. When I went there were four people."
      },
      {
        "nome": "Uffizi Gallery",
        "testo": "Italy's most important painting museum: Botticelli's Birth of Venus and Primavera, Giotto's Ognissanti Madonna, Leonardo, Raphael, Michelangelo, Caravaggio. The route follows the history of painting from the Middle Ages to the 18th century.",
        "come": "On foot from Piazza della Signoria. Entry is by booking: the queue without a ticket is long even in low season. The visit is linear and there is no shortcut: choose the rooms beforehand.",
        "quando": "Closed on Mondays. First slot in the morning or after 4 pm (there has been an afternoon fare since 2026).",
        "tempo": "3 hours",
        "costo": "25 euros on the day, 29 euros booked in advance, 2026; afternoon fare from 4 pm at 16 euros (20 if booked)",
        "url": "https://www.uffizi.it/",
        "consiglio": "Book weeks ahead in high season. Three hours are enough for the main rooms: try to concentrate on Botticelli, Leonardo and Caravaggio."
      },
      {
        "nome": "Galleria dell'Accademia",
        "testo": "Michelangelo's David, over five metres tall, at the end of a gallery with the unfinished Prisoners. The rest of the museum is small and takes an hour.",
        "come": "Ten minutes on foot from the Duomo, on via Ricasoli. Booking recommended, with an extra fee.",
        "quando": "Closed on Mondays. Free entry on the first Sunday of the month, with very long queues.",
        "tempo": "1-1.5 hours",
        "costo": "20 euros full price plus 4 euros booking fee, 2026",
        "consiglio": "The David is best seen up close, walking around it: the Prisoners in the gallery help you understand how Michelangelo worked. Book in advance."
      },
      {
        "nome": "Palazzo Pitti and Boboli Gardens",
        "testo": "The residence of the Medici, then the Lorraine and the Savoy, on the other bank of the Arno. Inside are the Palatine Gallery with Raphael and Titian, the royal apartments and several museums. Behind, the Boboli Garden is an Italian-style park with a view over the city.",
        "come": "On foot from the Ponte Vecchio, five minutes. Museums and garden are visited with separate or combined tickets: check the website.",
        "quando": "Closed on Mondays. In summer the garden is hot and shadeless in many places: go early in the morning.",
        "tempo": "half a day",
        "url": "https://www.uffizi.it/palazzo-pitti",
        "consiglio": "The Boboli Garden is the right place to rest after the crowds of the centre. Bring water."
      },
      {
        "nome": "Brancacci Chapel",
        "testo": "The fresco cycle by Masaccio and Masolino in the Carmine church, which marks the start of Renaissance painting. Masaccio's Expulsion from Eden is one of the most powerful images of the 15th century.",
        "come": "In the Oltrarno, in piazza del Carmine, 15 minutes on foot from the centre. Limited entry and booking recommended.",
        "quando": "Check closing days on the civic museums' website; usually it is closed one day in mid-week.",
        "tempo": "45 minutes",
        "url": "https://museicivicifiorentini.comune.fi.it/",
        "consiglio": "It is less crowded than the big museums and just as important. Before going in it is worth reading a couple of lines on Masaccio: the visit is far more interesting."
      },
      {
        "nome": "San Miniato al Monte",
        "testo": "The 11th-century Romanesque church on the hill south of the Arno, with a facade inlaid with white and green marble and a floor with zodiac motifs. The Olivetan monks sing Gregorian chant in the afternoon.",
        "come": "On foot from the Ponte Vecchio, through Porta San Niccolò and the stairs (about 25 minutes), or by bus 12 and 13. Just above Piazzale Michelangelo.",
        "quando": "Every day. Late afternoon, for sunset and the monks' chant. Check service times on the website.",
        "tempo": "1 hour",
        "url": "https://www.sanminiatoalmonte.it/",
        "consiglio": "A hundred metres from Piazzale Michelangelo, which at that hour is a car park with vendors, there is the same view with fewer people. In the crypt the monks sing Gregorian chant in the afternoon."
      },
      {
        "nome": "Oltrarno: Santo Spirito and the workshops",
        "testo": "The south bank of the Arno is the part of the city where restoration, gilding, lute-making and leather workshops still exist. Piazza Santo Spirito is the heart of the district, with Brunelleschi's basilica.",
        "come": "On foot over the Ponte Vecchio or the Ponte alla Carraia. No tickets are needed: you walk and step into the workshops.",
        "quando": "Weekday afternoons, when the workshops are open. On Sundays many are closed.",
        "tempo": "half a day",
        "consiglio": "Always ask permission before photographing inside workshops. For dinner, the trattorias of the Oltrarno are better and cheaper than those around the Duomo."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "8:30, climb Brunelleschi's dome with a booking.",
          "10:30, Museo dell'Opera del Duomo.",
          "13:00, lunch with a lampredotto sandwich or in a Sant'Ambrogio trattoria.",
          "15:00, Uffizi with the afternoon fare (room by room, without trying to see everything).",
          "Sunset at San Miniato al Monte, then dinner in the Oltrarno."
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: dome at 8:30, Museo dell'Opera del Duomo, lunch in Sant'Ambrogio, Uffizi in the afternoon.",
          "Day 2: Accademia and the David at the first slot; Oltrarno with the Brancacci Chapel and Santo Spirito; sunset at San Miniato."
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: dome, Museo dell'Opera del Duomo, the historic centre on foot.",
          "Day 2: Uffizi in the morning, Accademia in the afternoon.",
          "Day 3: Palazzo Pitti and Boboli, Brancacci Chapel, Oltrarno; San Miniato at sunset."
        ]
      }
    ],
    zone: [
      {
        "nome": "Oltrarno",
        "perChi": "anyone who wants a lively district five minutes from the centre",
        "testo": "Workshops, trattorias and squares. Quieter than the centre, with slightly lower prices. San Frediano is the district for the evening."
      },
      {
        "nome": "Sant'Ambrogio",
        "perChi": "anyone looking for lower prices and a real market",
        "testo": "A residential area east of the Duomo, with the Florentines' market and many trattorias. A bit off the tourist routes."
      },
      {
        "nome": "Santa Maria Novella",
        "perChi": "anyone arriving by train and leaving early",
        "testo": "Close to the station: convenient for trains and buses to Tuscany. A busier area and less pleasant in the evening."
      },
      {
        "nome": "Historic centre (Duomo and Signoria)",
        "perChi": "anyone who wants everything on foot and does not mind the prices",
        "testo": "Extremely convenient and expensive. In the evening there are few residents and many tourists, and the noise of the pedestrian streets reaches the rooms."
      }
    ],
    sapori: [
      {
        "nome": "Bistecca alla fiorentina",
        "testo": "A cut at least three fingers thick, cooked rare and served by weight, usually a kilo or more. Ordered in a trattoria, checking the price per hundred grams."
      },
      {
        "nome": "Lampredotto",
        "testo": "A sandwich of tripe from the fourth stomach of the cow, boiled and served with green sauce. Eaten standing at street stalls, like the Florentines."
      },
      {
        "nome": "Ribollita and pappa al pomodoro",
        "testo": "Two stale-bread soups: ribollita with cabbage and beans, pappa with tomato and basil. Humble trattoria cooking."
      },
      {
        "nome": "Crostini di fegatini",
        "testo": "Slices of Tuscan bread with chicken liver pâté, a classic Tuscan starter."
      },
      {
        "nome": "Panzanella",
        "testo": "A summer salad of soaked stale bread, tomato, onion, basil and oil."
      },
      {
        "nome": "Cantucci and vin santo",
        "testo": "Almond biscuits to dip in sweet dessert wine. Served at the end of the meal in almost every trattoria."
      }
    ],
    attenzioni: [
      "The centre's ZTL is monitored by cameras: driving in without a permit brings a fine that reaches your home months later. If you arrive by car, ask your hotel how to register the plate or leave the car in a car park outside.",
      "Book the Uffizi, Accademia and dome online: without a ticket the queues can last hours and in high season you may not get in.",
      "The city bans sitting down to eat on the steps of churches and monuments and in some streets of the centre, with fines. Avoid eating on the ground.",
      "Pickpocketing at Santa Maria Novella station, on crowded buses and in the most visited spots such as the Ponte Vecchio. Keep bags closed and in front.",
      "In restaurants check the price of the steak per hundred grams and the cover charge. Be wary of places with tourist menus around the Duomo and Piazza della Signoria.",
      "A tourist tax is charged per night, to be paid at the accommodation. In case of transport strikes, leave a time margin."
    ],
    esperienzeSlugs: ['cupola-brunelleschi'],
    tripSlugs: ['firenze-3-giorni', 'grandi-citta-italia'],
    imageAlt: "The Ponte Vecchio and the other bridges over the Arno seen from Piazzale Michelangelo at sunset, Florence",
    immagine: '/images/italia/firenze.jpg',
  },
  {
    slug: 'venezia',
    paeseSlug: 'italia',
    ordine: 5,
    nome: "Venice",
    tipologia: ['città d\'arte', 'isole', 'architettura'],
    giorniConsigliati: "3 days, one of them for the lagoon",
    visitataPersonalmente: true,
    introduzione:
      "A city built on wooden piles driven into the mud of a lagoon, which for a thousand years was a maritime power and today has fewer than fifty thousand residents in the historic center, less than a third of the 1950s. It's the only place in Italy with an entrance fee for the city.",
    percheAndarci:
      "It looks like nothing else: it's a city without cars, where everything, from garbage to furniture to the sick, moves by boat. And the lagoon, which almost nobody visits, is the reason Venice exists.",
    cosaVedere: [
      "St. Mark's Basilica, with its gold mosaics, and the Doge's Palace with the Piombi prison and the Bridge of Sighs",
      "The Gallerie dell'Accademia and the Peggy Guggenheim Collection",
      "The Rialto Bridge and the fish market early in the morning, still used by people doing their shopping",
      "Cannaregio and the Ghetto, the first Jewish ghetto in Europe, where Venice is still lived in",
      "The lagoon islands: Murano for glass, Burano for colorful houses, Torcello for the basilica with Byzantine mosaics",
      "The Scuola Grande di San Rocco, with Tintoretto's cycle: it's the Sistine Chapel of Venice, and there are ten people",
      "San Giorgio Maggiore, with the bell tower that has the best view of St. Mark's and no line",
    ],
    cosaFare: [
      "Venice at dawn, before the trains and ships arrive (see the dedicated experience page)",
      "Taking the line 1 vaporetto along the Grand Canal, which costs a fraction of a gondola and lasts much longer",
      "Getting lost in Cannaregio and Castello, the sestieri where people still live",
      "A trip in the lagoon toward Torcello and the smaller islands: the Venice from before Venice",
    ],
    doveDormire:
      "Cannaregio and Castello to stay in a still-lived-in area and spend less; Dorsoduro for its proximity to the museums and a livelier evening. **Sleeping in the center exempts you from the access fee** and lets you have the city at dawn and after six in the evening, the only two windows in which it's what you expect. Mestre costs less, but takes away exactly that.",
    doveMangiare:
      "Venetian cuisine is lagoon and humble fish: sarde in saor, baccalà mantecato, moeche (soft-shell crabs, seasonal and very expensive), risotto di gò, fegato alla veneziana. The right way to eat is the **bacari crawl**: small taverns where you eat cicheti standing at the counter (half an egg with anchovy, meatballs, baccalà on a crostino) with a shadow of wine, moving from one to the next. It costs little and you eat very well, as long as you leave the main routes.",
    comeArrivare:
      "Train to Venezia Santa Lucia, which is **inside** the city: it's the most sensible way to get there. Marco Polo Airport, connected by Alilaguna vaporetto or bus to Piazzale Roma. By car you only get as far as Piazzale Roma or Tronchetto, with extremely expensive parking.",
    comeSpostarsi:
      "On foot and by vaporetto. **Single vaporetto tickets are expensive and timed passes pay for themselves right away** if you make more than one ride a day. The gondola ferries (traghetti) that cross the Grand Canal at points without a bridge cost a few cents and almost no visitor knows they exist.",
    periodoMigliore:
      "From November to February, Carnival excluded, Venice becomes a city again. Days are short and damp, there's a chance of acqua alta (which the MOSE now limits but doesn't eliminate), but in exchange you have the campielli all to yourself. April-June and September-October are the most beautiful and the most saturated months.",
    costi:
      "**The access fee** applies to those who enter for the day without staying overnight, on a set number of high-season days: in 2026 it was charged on 60 days between April and July, 5 euros if booked at least four days ahead and 10 euros below that threshold. Those who stay overnight in the city are exempt but still have to register. The calendar changes every year: it's worth checking before you go. The timed vaporetto pass is almost always worthwhile; the gondola has rates set by the city and is expensive anyway.",
    erroriDaEvitare: [
      "Coming for the day in high season without checking the access fee and without booking it in advance, paying double",
      "Doing Venice between ten and five and judging it: in those hours, on the main routes, it's a dense crowd. At seven in the morning the same calle is empty",
      "Eating at restaurants with tourist menus around St. Mark's and Rialto: it's the place in Italy where value for money is worst",
      "Taking the gondola thinking it's transport: it's a fixed-rate, expensive experience. Vaporetto 1 on the Grand Canal costs a fraction and lasts longer",
      "Skipping the lagoon: Torcello, with its seventh-century basilica and the Last Judgment mosaics, is where Venice began and there are twenty people",
      "Assuming you'll easily find an ATM or a public restroom: both are few, and the restrooms cost money",
    ],
    miaEsperienza:
      "Venice is the most misunderstood city in Italy, and the reason is the time of day. Between ten in the morning and five in the afternoon, on the routes from the station to Rialto and from Rialto to St. Mark's, you walk in a dense flow and understand why the Venetians left: there are fewer than fifty thousand, a third of the 1950s, and the number keeps falling. But that's just a time slot. At seven in the morning the same calli are empty, you hear the water slapping against the walls, delivery boats go by, and the bacari open for people on their way to work. After seven in the evening the same thing happens in reverse. It's the only serious reason to sleep in the center instead of in Mestre, more than convenience: having those two windows. Almost nobody goes to the lagoon, though: Torcello has a seventh-century basilica with a Last Judgment in mosaic that covers an entire wall, you get there in forty minutes by vaporetto, and there are twenty people. That's where Venice began, before Venice existed.",
    luoghi: [
      {
        "nome": "St Mark's Basilica",
        "testo": "The Byzantine basilica of the doges, with about 8,000 square metres of golden mosaics covering vaults and domes. The undulating floor, the Pala d'Oro and the bronze horses in the museum are the points to look for.",
        "come": "In Piazza San Marco, reached by vaporetto (San Marco-San Zaccaria stop) or on foot from Rialto. Entry requires clothes covering shoulders and knees. Backpacks and large bags are not allowed in: there are left-luggage points nearby.",
        "quando": "Every day; the early hours of the morning are the least crowded. During religious services access is limited.",
        "tempo": "1 hour",
        "url": "https://www.basilicasanmarco.it/",
        "consiglio": "Book the time-slot entry online to avoid the queue in the square. Go up to the museum and the loggia of the horses to see the mosaics up close and the square from above."
      },
      {
        "nome": "Doge's Palace",
        "testo": "The seat of government of the Republic and the doge's residence, in Venetian Gothic. Inside are the Hall of the Great Council with Tintoretto's Paradise, the Giants' Staircase, the prisons and the Bridge of Sighs. The Secret Itineraries lead into the officials' rooms.",
        "come": "Next to the Basilica, on the St Mark's basin. The standard ticket also includes the museums of Piazza San Marco. Take the audioguide, collected at the entrance.",
        "quando": "Open every day: 9am-7pm from April to October, 9am-6pm from November to March, last entry one hour before closing. Early morning or late afternoon to avoid the groups.",
        "tempo": "2-3 hours",
        "costo": "35 euros full price, including the Museums of St Mark's Square; 30 euros if bought online more than 30 days ahead (2026)",
        "url": "https://palazzoducale.visitmuve.it/",
        "consiglio": "Buying online more than a month ahead saves 5 euros and lets you skip the queue. The audio guide in the MUVE app is included in the ticket."
      },
      {
        "nome": "Scuola Grande di San Rocco",
        "testo": "Tintoretto's cycle of paintings, made over more than twenty years, covers walls and ceilings on three floors. It is the Sistine Chapel of Venice, but with far fewer people. In the upper hall mirrors let you look at the ceiling without craning your neck.",
        "come": "On foot from the railway station or Piazzale Roma in about 15 minutes, near the Frari church (campo San Rocco). By vaporetto, San Tomà stop.",
        "quando": "Open every day; check hours and closures on the website. The middle hours are quiet.",
        "tempo": "1 hour",
        "url": "https://www.scuolagrandesanrocco.it/",
        "consiglio": "Borrow one of the mirrors at the entrance to look at the ceiling paintings. In the Frari, a short walk away, are the altarpieces by Titian and Bellini."
      },
      {
        "nome": "Rialto and the fish market",
        "testo": "The oldest bridge over the Grand Canal, in stone since 1591, with the historic commercial district around it. At the Pescheria, on the San Polo side, lagoon and sea fish are sold to residents in the morning; nearby are fruit and vegetables.",
        "come": "On foot from the station or San Marco in 20 minutes, or by vaporetto 1 to Rialto. The market is a few minutes from the bridge.",
        "quando": "Early morning. The Pescheria is closed on Sundays and Mondays; check. The bridge is crowded from 10 am.",
        "tempo": "1 hour",
        "consiglio": "After the market, go and eat cicheti at the nearby bacari. See the bridge at dawn, when it is empty."
      },
      {
        "nome": "Cannaregio and the Ghetto",
        "testo": "The most lived-in sestiere, with wide canals and osterias where Venetians eat. The Ghetto, established in 1516, is the first Jewish ghetto in Europe: the buildings are tall because the area could not be enlarged. You can visit the synagogues and the Jewish museum.",
        "come": "On foot from the railway station in 10 minutes. The Jewish museum runs guided visits to the synagogues.",
        "quando": "Open all year; the Jewish museum is closed on Saturdays and Jewish holidays.",
        "tempo": "half a day",
        "consiglio": "Get lost in the calli away from the station-Rialto axis: in Cannaregio it is easy to find Venice as the residents live it."
      },
      {
        "nome": "San Giorgio Maggiore",
        "testo": "The island in front of San Marco with Palladio's church and a bell tower from which you see the city and the lagoon. It is the best viewpoint, with almost no queue.",
        "come": "From the San Zaccaria stop take vaporetto 2 to San Giorgio, a few minutes. The bell tower has a lift.",
        "quando": "Every day; late afternoon gives the best light on San Marco. Check the lift hours.",
        "tempo": "1 hour",
        "consiglio": "From the bell tower you see San Marco and the whole lagoon with a fraction of the crowd on the campanile in the square."
      },
      {
        "nome": "Torcello",
        "testo": "The island where Venice began. The basilica of Santa Maria Assunta, from the 7th century, has a mosaic of the Last Judgement covering an entire wall. Only a few dozen people live here now.",
        "come": "From Fondamente Nove take vaporetto 12 to Burano and then the 9 to Torcello, about 40 minutes in total.",
        "quando": "Every day; the morning is quiet. Check the basilica's opening hours.",
        "tempo": "half a day, combined with Burano",
        "consiglio": "I went in the middle of the day and there were twenty people: this is where Venice began, before Venice existed."
      },
      {
        "nome": "Murano and Burano",
        "testo": "Murano is the glass island, with the Glass Museum and the furnaces. Burano has houses painted in bright colours and a lace tradition. Both are heavily photographed and visited by groups.",
        "come": "By vaporetto from Fondamente Nove (lines 4.1 and 4.2 for Murano; the 12 for Burano). At the Glass Museum you see the historic pieces.",
        "quando": "All year; early morning is less crowded. In winter the islands are quiet.",
        "tempo": "half a day each",
        "consiglio": "Avoid furnaces that bring tourists in with free demonstrations and then push them to buy: buy glass carrying the Vetro Artistico Murano mark."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "7:00, early walk from Rialto to San Marco, when the calli are empty.",
          "9:00, St Mark's Basilica with a booked entry.",
          "10:30, Doge's Palace.",
          "13:00, bacari crawl in Cannaregio or Castello.",
          "15:00, Scuola Grande di San Rocco.",
          "Sunset on vaporetto 1 along the whole Grand Canal."
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: dawn between Rialto and San Marco, Basilica, Doge's Palace, San Giorgio Maggiore at sunset.",
          "Day 2: Rialto and the market, Scuola Grande di San Rocco and the Frari, Cannaregio and the Ghetto, bacari crawl."
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: San Marco, Doge's Palace, San Giorgio Maggiore.",
          "Day 2: Rialto, San Rocco and the Frari, Cannaregio and the Ghetto.",
          "Day 3: the lagoon: Murano, Burano and Torcello, by vaporetto from Fondamente Nove."
        ]
      }
    ],
    zone: [
      {
        "nome": "Cannaregio",
        "perChi": "anyone who wants a lived-in area and to spend less",
        "testo": "Near the station, with wide canals and the Venetians' osterias. Quieter and cheaper than the centre, 20-25 minutes on foot from San Marco."
      },
      {
        "nome": "Castello",
        "perChi": "anyone looking for calm away from San Marco",
        "testo": "A large residential sestiere, with very quiet areas toward the Arsenale and the Giardini. Little to do in the evening, but close to San Marco."
      },
      {
        "nome": "Dorsoduro",
        "perChi": "anyone who wants museums and evening life",
        "testo": "Close to the Gallerie dell'Accademia and the Guggenheim Collection, with bars around Campo Santa Margherita. Livelier in the evening, a bit more expensive."
      },
      {
        "nome": "Mestre",
        "perChi": "anyone who wants to spend as little as possible",
        "testo": "On the mainland, 10-15 minutes by train from Venezia Santa Lucia. It costs less, but you lose dawn and evening in the city, which are the best moments. Sleeping in the centre exempts you from the access fee."
      }
    ],
    sapori: [
      {
        "nome": "Cicheti and bacari",
        "testo": "Small bites (meatballs, salt cod on a crostino, half an egg with anchovy) to eat standing at the counter with a small glass of wine. You go from bacaro to bacaro."
      },
      {
        "nome": "Sarde in saor",
        "testo": "Fried sardines marinated with onion, vinegar, raisins and pine nuts. A historic sailors' dish, eaten cold."
      },
      {
        "nome": "Baccalà mantecato",
        "testo": "Stockfish whipped to a white cream, served on polenta crostini. The most Venetian cicheto."
      },
      {
        "nome": "Fegato alla veneziana",
        "testo": "Calf's liver with stewed onions, usually with white polenta."
      },
      {
        "nome": "Risotto di gò and risi e bisi",
        "testo": "Risotto with goby, a lagoon fish; risi e bisi is a thick soup of rice and peas, a spring dish."
      },
      {
        "nome": "Spritz",
        "testo": "An aperitif with prosecco, Aperol or Select and soda, born in the Veneto. Drunk in the bacari before dinner."
      }
    ],
    attenzioni: [
      "Access fee for day visitors who do not stay overnight: in 2026 it applied on 60 days between April and July, 5 euros if booked at least four days ahead and 10 euros below that threshold. Those who sleep in the city are exempt but must register. Check the calendar every year.",
      "Since 2024 tour groups are limited to 25 people and loudspeakers are banned.",
      "Pickpocketing on crowded vaporetto 1 and 2, at Rialto and at San Marco. Keep bags closed and in front.",
      "The single vaporetto ticket is expensive and time passes pay off if you make several trips a day. Always validate the ticket before boarding.",
      "Restaurants around San Marco and Rialto with tourist menus and high cover charges: check the bill. The gondola has fares set by the city; agree the price before boarding.",
      "High water in autumn and winter: the MOSE protects the lagoon, but the walkways are still set up when the tide goes above a certain threshold. Bring light rubber boots. Bans: swimming in the canals, sitting on bridges and eating on the steps of monuments."
    ],
    esperienzeSlugs: ['venezia-alba'],
    tripSlugs: ['venezia-3-giorni', 'grandi-citta-italia'],
    imageAlt: "The Grand Canal in Venice at sunset with palaces facing the water and a motorboat going up the canal",
    immagine: '/images/italia/venezia.jpg',
  },
  {
    slug: 'napoli',
    paeseSlug: 'italia',
    ordine: 6,
    nome: "Naples and the Gulf",
    tipologia: ['città d\'arte', 'archeologia', 'gastronomia'],
    giorniConsigliati: "4-5 days with Pompeii and the coast",
    visitataPersonalmente: true,
    introduzione:
      "It's the most densely inhabited historic center in Europe, founded by the Greeks, with forty meters of underground city beneath it and in front of it an active volcano that in 79 AD sealed two entire cities under ash, preserving them better than any restoration.",
    percheAndarci:
      "It's the Italian city with the most energy and the most contradictions, and within thirty kilometers there are Pompeii, Herculaneum, Vesuvius, the Phlegraean Fields, Capri and the Amalfi Coast. There's no such concentration anywhere else.",
    cosaVedere: [
      "The UNESCO historic center, with Spaccanapoli and San Gregorio Armeno",
      "The National Archaeological Museum, which holds the finds from Pompeii and Herculaneum and should be seen **before** the sites, not after",
      "The Sansevero Chapel with the Veiled Christ",
      "Underground Naples and the catacombs of San Gennaro and San Gaudioso",
      "Pompeii and Herculaneum: **named tickets and a cap of 20,000 visitors a day at Pompeii, with time slots in summer**",
      "Vesuvius, with the climb to the crater, and the Phlegraean Fields with the Solfatara",
      "The Amalfi Coast, Capri, Ischia and Procida",
    ],
    cosaFare: [
      "Pompeii and Herculaneum on the same trip, knowing they complement each other (see the dedicated experience page)",
      "Underground Naples, going down into the Greek quarries and the air-raid shelters (see the dedicated experience page)",
      "Eating a Neapolitan pizza where it was born, different from any other pizza (see the dedicated experience page)",
      "The Path of the Gods on the Coast, from Bomerano to Nocelle: the coast seen from above instead of from the road",
    ],
    doveDormire:
      "The historic center to stay inside the city, Chiaia for a quieter, residential area, the Vomero for the view and the prices. For the Coast, sleeping in Naples and doing day trips costs far less than staying in Amalfi or Positano in season.",
    doveMangiare:
      "Pizza, with the difference that here it's a popular food and costs little: dough high on the rim, baked ninety seconds at four hundred degrees, soft in the center to the point that you eat it folded. Then ragù napoletano that cooks for hours, la genovese (which has nothing Genoese about it), babà, the hot sfogliatella riccia in the morning, and coffee, which in Naples is a serious thing: short, strong, drunk standing up. And pizza a portafoglio from the street, which costs two euros.",
    comeArrivare:
      "High-speed rail from Rome in a little over an hour and from Milan in four and a half, with Napoli Centrale station in the city. Capodichino airport, very close to the center. For the Coast and Pompeii you use the Circumvesuviana, which is slow and crowded but direct.",
    comeSpostarsi:
      "Metro line 1, with the \"art stations\" that are works in themselves, and funiculars to the Vomero. The center is done on foot. **For the coast, the ferry beats the car and the bus in every season**, and in summer the Amalfi state road is one continuous traffic jam.",
    periodoMigliore:
      "April-June and September-October. In August the coast is saturated and the state road is blocked; in winter Naples is excellent and the coast empties (with many places closed). The Christmas period on San Gregorio Armeno, the street of nativity scenes, is a phenomenon of its own: beautiful and impassable.",
    costi:
      "The Archaeological Museum and the Vesuvian sites have modest tickets compared with northern Italy. The combined ticket for Pompeii, Herculaneum, Oplontis and Stabiae lasts three days and is always worth it if you visit at least two.",
    erroriDaEvitare: [
      "Going to Pompeii without a booked ticket: since 2024 tickets are **named** and there is a **cap of 20,000 visitors a day**, with time slots in summer (15,000 in the morning, 5,000 from early afternoon). Once the quota is used up you can't enter, neither online nor at the ticket office",
      "Visiting Pompeii without having seen the Naples Archaeological Museum first: the best mosaics, frescoes and bronzes are there, and without that stop the site looks like a field of walls",
      "Doing Pompeii at noon in summer: there's no shade, it's vast, and every year someone gets sick",
      "Choosing Pompeii over Herculaneum: Herculaneum is much smaller but better preserved, with the upper floors, the carbonized wood, the furniture",
      "Driving on the Amalfi state road in August",
      "Expecting traffic and scooters in Naples to follow the rules you're used to: you cross decisively and predictably, without waiting for a gap that never comes",
    ],
    miaEsperienza:
      "Naples is the Italian city that divides people the most, because it asks you to adapt rather than welcome you. The historic center is the most densely inhabited area in Europe and you feel it: the alleys are narrow, scooters go where they shouldn't, laundry hangs over your head and there's constant noise. Those who get irritated go home saying it's chaotic; those who get into the rhythm discover the city with the most energy in the country. What changes the visit most, though, is a mundane piece of advice about order: the National Archaeological Museum should be seen **before** Pompeii and not after. All the best mosaics, frescoes and bronzes were brought there in the nineteenth century, and anyone who arrives at Pompeii without having seen them walks for three hours among walls without understanding what was inside. And then Herculaneum, which almost everyone skips to do the more famous one: it's a tenth of Pompeii but it was buried by mud and not by ash, so the upper floors, the carbonized wooden beams and even the furniture were preserved. You walk inside two-story houses with the stairs still in place.",
    luoghi: [
      {
        "nome": "Historic center, Spaccanapoli and San Gregorio Armeno",
        "testo": "The Greek-Roman street grid is still the street plan: Spaccanapoli cuts the center in a straight line, lined with churches, palaces and workshops. San Gregorio Armeno is the nativity-scene street, with craftsmen at work all year.",
        "come": "On foot, starting from Piazza del Gesù Nuovo or the Dante stop on metro line 1. The route is pedestrian or nearly so, with scooters passing everywhere.",
        "quando": "Early morning for the lanes without the crowd. In December San Gregorio Armeno is beautiful and impassable.",
        "tempo": "Half a day",
        "consiglio": "Step into the open churches (Gesù Nuovo, Santa Chiara, San Domenico Maggiore): they are free or cheap and a break from the noise."
      },
      {
        "nome": "National Archaeological Museum (MANN)",
        "testo": "It holds the mosaics, frescoes, bronzes and statues brought here from Pompeii and Herculaneum, plus the Farnese collection. See it before the Vesuvian sites: at Pompeii you then understand what was inside the walls.",
        "come": "Metro line 1 or 2 to Museo/Piazza Cavour, a few minutes on foot. Visit on your own with the wall panels; the audio guide is optional.",
        "quando": "Closed on Tuesdays. Open 9am-7:30pm, last entry at 6:30pm (2026). Morning, when the mosaic rooms are quieter.",
        "tempo": "2-3 hours",
        "consiglio": "Go straight up to the Pompeii mosaics and the Secret Cabinet, then down to the Farnese collection if you have time left."
      },
      {
        "nome": "Sansevero Chapel",
        "testo": "An 18th-century noble chapel with Giuseppe Sanmartino's Veiled Christ, a marble that looks like a wet cloth over the body. The crypt holds the anatomical machines.",
        "come": "On foot, on via Francesco De Sanctis in the historic center. Visit on your own, with a timed ticket.",
        "quando": "Book ahead: slots sell out, especially on weekends and in high season. No photos inside.",
        "tempo": "45 minutes",
        "url": "https://www.museosansevero.it/",
        "consiglio": "Buy the ticket on the official site days before: there is often a queue at the door already."
      },
      {
        "nome": "Underground Naples and the catacombs",
        "testo": "Beneath the city lie Greek quarries, Roman aqueducts and wartime air-raid shelters. The Catacombs of San Gennaro, in the Sanità district, are the largest in southern Italy, with early Christian frescoes.",
        "come": "For Napoli Sotterranea the entrance is in Piazza San Gaetano, with a guided tour at set times. The Catacombs of San Gennaro are in the Sanità district, about twenty minutes on foot from the MANN.",
        "quando": "All year, rain included. It is cool underground: bring a sweater.",
        "tempo": "1.5 hours per visit",
        "consiglio": "Do only one of the two if time is short: Napoli Sotterranea for the war and the quarries, the catacombs for the art."
      },
      {
        "nome": "Pompeii",
        "testo": "A Roman city of 66 hectares sealed by the eruption of 79 AD: streets with cart ruts, shops, baths, houses with frescoes, the forum and the amphitheater. The excavated area is large, so you have to choose what to see.",
        "come": "Circumvesuviana Naples-Sorrento line to Pompei Scavi-Villa dei Misteri (about 40 minutes from Napoli Garibaldi). You can also take a regional train to Pompei. Audio guide or guide recommended.",
        "quando": "At opening time or in the late afternoon in summer; not at midday, with no shade. Open 9am-7pm from 16 March to 14 October (last entry 5:30pm) and 9am-5pm the rest of the year (last entry 3:30pm). Closed on 25 December and 1 January, unless there are special openings. Named tickets, a cap of 20,000 visitors a day and time slots in high season.",
        "tempo": "3-4 hours",
        "costo": "Pompei Express 20 euros; Pompei+, with the suburban villas and Boscoreale, 25 euros (from 12 January 2026). Online sales only through Vivaticket, or at the ticket office",
        "url": "https://pompeiisites.org/",
        "consiglio": "Seen after the MANN, you recognize the works. Bring water and a hat: there are few places to refresh."
      },
      {
        "nome": "Herculaneum",
        "testo": "A smaller city than Pompeii, buried by mud rather than ash: upper floors, charred wooden beams, doors and beds survived. You see how people really lived.",
        "come": "Circumvesuviana Naples-Sorrento line to Ercolano Scavi (about 20 minutes from Napoli Garibaldi), then a ten-minute walk downhill.",
        "quando": "Morning, in summer. The site closes on the main holidays: check the calendar on the official site.",
        "tempo": "2 hours",
        "url": "https://ercolano.beniculturali.it/",
        "consiglio": "If you only have time for one site, many choose Herculaneum: fewer people, more preserved detail."
      },
      {
        "nome": "Vesuvius",
        "testo": "The volcano that buried Pompeii is active. You drive or take a shuttle up to about 1,000 meters and walk a half-hour trail to the crater rim, with a view over the gulf.",
        "come": "From Ercolano Scavi there are shuttles to the car park at 1,000 meters. From the last car park you walk uphill on a dirt trail, in closed shoes.",
        "quando": "Morning, with a clear sky. In case of an alert or strong wind access may be suspended.",
        "tempo": "3-4 hours for the trip, climb and return",
        "url": "https://www.parconazionaledelvesuvio.it/",
        "consiglio": "Check the weather the day before: with low clouds you climb and see nothing."
      },
      {
        "nome": "Phlegraean Fields and Pozzuoli",
        "testo": "A volcanic area west of Naples, still subject to bradyseism: the Flavian Amphitheater of Pozzuoli, the Rione Terra, the Baia archaeological park with its Roman baths.",
        "come": "Cumana railway or metro line 2 to Pozzuoli, then local buses or a taxi to the sites. By car it takes about half an hour.",
        "quando": "Check Civil Protection notices first and whether each site is open: it changes with works.",
        "tempo": "Half a day",
        "consiglio": "Combine it with a seafood lunch in Pozzuoli: it costs less than in Posillipo."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: National Archaeological Museum, with the Pompeii mosaics.",
          "Late morning: walk along via dei Tribunali to San Gregorio Armeno.",
          "Lunch: a pizza in the historic center.",
          "Afternoon: Spaccanapoli, Sansevero Chapel with a booked ticket.",
          "Evening: stroll along the via Caracciolo seafront to Castel dell'Ovo."
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1 as above, with the MANN in the morning.",
          "Day 2, morning: Circumvesuviana to Herculaneum, two hours on site.",
          "Quick lunch in Ercolano.",
          "Afternoon: Pompeii in a booked time slot, or Vesuvius if the weather is good.",
          "Evening: back in Naples, an unhurried dinner at a historic pizzeria."
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: historic center, MANN, Sansevero.",
          "Day 2: Herculaneum in the morning, Pompeii in the afternoon, train back before evening.",
          "Day 3 morning: Underground Naples or the Catacombs of San Gennaro.",
          "Afternoon: funicular up to the Vomero for Castel Sant'Elmo and the view over the gulf.",
          "Evening: a last pizza or fried snacks in Chiaia."
        ]
      }
    ],
    zone: [
      {
        "nome": "Historic center",
        "perChi": "Those who want to be inside the city",
        "testo": "Everything on foot, lanes full of life and places open late. Constant noise of scooters and voices even at night, narrow streets that are not always clean. Better a room on an upper floor or facing the courtyard."
      },
      {
        "nome": "Chiaia and the seafront",
        "perChi": "Those looking for a calmer area",
        "testo": "A residential and shopping district, with restaurants and sea views from the waterfront. Quieter in the evening, ten to twenty minutes on foot from the historic center and close to the metro."
      },
      {
        "nome": "Vomero",
        "perChi": "Those watching prices who want a view",
        "testo": "A hill served by funiculars and metro line 1, with views over the gulf. Safer and quieter, but you go down and back up by funicular each time: in the evening you lose time."
      }
    ],
    sapori: [
      {
        "nome": "Neapolitan pizza",
        "testo": "High, soft dough on the rim, baked in a wood oven in under two minutes. The two classics are Margherita and Marinara; it is eaten folded «a libretto» and a portafoglio on the street."
      },
      {
        "nome": "Ragù and genovese",
        "testo": "Two Sunday sauces. The ragù cooks for hours with meat; the genovese is an onion and meat sauce that has nothing to do with Genoa. You find them in trattorias more than in pizzerias."
      },
      {
        "nome": "Sfogliatella and babà",
        "testo": "The sfogliatella riccia, warm in the morning, with ricotta and candied fruit. The babà, a brioche soaked in rum, is eaten at the pastry shop."
      },
      {
        "nome": "Street fried food",
        "testo": "Pasta frittatine, potato crocchè, arancini and fried pizza. You take them in paper cones, for two or three euros."
      },
      {
        "nome": "Coffee",
        "testo": "Short, strong, drunk standing at the bar. The «caffè sospeso» is the custom of paying for one extra for whoever comes after."
      }
    ],
    attenzioni: [
      "Pickpockets on the Circumvesuviana, at the Central station, Piazza Garibaldi and in crowded lanes: bag in front, no phone in hand near scooters.",
      "At Pompeii tickets are named and there is a daily visitor cap: buy online on the official site and not from intermediaries who charge more.",
      "Taxis: use only the official white ones, ask for the fixed fare for airport to center and port, and be wary of anyone offering a ride at the airport.",
      "The center has limited traffic zones with cameras: sleep where you can leave the car in a garage and avoid driving in the city.",
      "Transport strikes are frequent, the Circumvesuviana included: check the calendar before planning Pompeii or Vesuvius.",
      "Vesuvius and the Phlegraean Fields are active volcanic areas: follow Civil Protection notices and the trail instructions."
    ],
    esperienzeSlugs: ['pompei-ercolano', 'napoli-sotterranea', 'pizza-napoletana'],
    tripSlugs: ['napoli-3-giorni', 'grandi-citta-italia'],
    imageAlt: "The Gulf of Naples with Vesuvius in the background, a ship at anchor and boats moored in the small harbor",
    immagine: '/images/italia/napoli.jpg',
  },
  {
    slug: 'milano-nord',
    paeseSlug: 'italia',
    ordine: 7,
    nome: "Milan and the North",
    tipologia: ['città', 'design', 'laghi'],
    giorniConsigliati: "2-3 days, plus the lakes",
    visitataPersonalmente: true,
    introduzione:
      "The city that least resembles the rest of Italy: it works, it moves fast, and it has chosen design and fashion as its identity. It also has a Gothic cathedral that took almost six hundred years to finish and, on a refectory wall, a painting you book months ahead to see for fifteen minutes.",
    percheAndarci:
      "It's the natural gateway to northern Italy, and within an hour it has the pre-Alpine lakes (Como, Maggiore, Garda), for two centuries among the most celebrated landscapes in Europe.",
    cosaVedere: [
      "The Duomo and above all the **terraces**, which you walk among the pinnacles and are the best part",
      "Leonardo's Last Supper in Santa Maria delle Grazie: **booking required, bookings open quarterly, fifteen-minute visit**",
      "The Pinacoteca di Brera and the neighborhood of the same name",
      "The Sforza Castle, with Michelangelo's last Pietà, left unfinished",
      "The Galleria Vittorio Emanuele II and La Scala theater with its museum",
      "The Navigli and the Porta Venezia area, for the evening",
      "Lake Como with Bellagio and Varenna, Lake Maggiore with the Borromean Islands, Garda with Sirmione",
    ],
    cosaFare: [
      "Climbing onto the Duomo terraces, better on foot than by elevator",
      "Booking the Last Supper months ahead: it's the only way, and bookings open in quarterly batches",
      "The aperitivo, which in Milan is an institution with its own rules",
      "A day on Lake Como by boat, the right way to see it: the lakeside road is narrow and busy",
    ],
    doveDormire:
      "Brera and the center for convenience, Navigli and Porta Venezia for the evening, the Stazione Centrale area for the prices. Milan is well served by the metro: location matters less than in other Italian cities.",
    doveMangiare:
      "Milanese cuisine is rich and wintry: saffron risotto, cotoletta (thick, bone-in, not thin), ossobuco, cassoeula. The rest is an international scene among the most developed in Italy. Aperitivo is a format: you pay for the drink and the buffet is included, with very variable quality. The covered markets and the Porta Romana area have the best value for money.",
    comeArrivare:
      "Three airports (Malpensa, Linate, Bergamo) and the most important rail hub in Italy: from Milano Centrale you reach Rome in three hours, Florence in an hour and forty, Venice in two and a half.",
    comeSpostarsi:
      "Metro with four lines, historic trams, bike and scooter sharing everywhere. **Area B and Area C restrict car access to the center**, with cameras: whoever enters by car without knowing it pays.",
    periodoMigliore:
      "April-June and September-October. Winter is cold and foggy but the city works; summer is muggy and in August Milan empties, with many places closed. During the Salone del Mobile (April) and fashion weeks, lodging prices triple and finding a place is hard.",
    costi:
      "For lodging it's the most expensive city in Italy. The Duomo and terraces have a combined ticket; the Last Supper costs little, the problem is finding a spot.",
    erroriDaEvitare: [
      "Trying to see the Last Supper without a reservation: **you can't get in**, booking windows open quarterly and sell out in no time. It's the most common mistake of visitors to Milan",
      "Driving into the center without knowing about Area B and Area C",
      "Booking during the Salone del Mobile without knowing it: hotel prices can multiply",
      "Doing Lake Como by car on a summer weekend: the road is narrow, parking doesn't exist and the boat does everything better",
      "Judging Milan by its center: the interesting city is in the neighborhoods, and the center is the part that represents it least",
    ],
    miaEsperienza:
      "Milan has a reputation as the Italian city not worth a trip, and for classic tourism that's almost true: the center can be seen in a day and lacks the layered charm of Rome or Florence. Then you climb onto the Duomo terraces, which almost everyone skips to see only the interior, and the perspective changes: you walk on the roof of a Gothic cathedral among one hundred and thirty-five spires and three thousand statues, with the city below and, on clear days, the Alps on the horizon. It's one of the most beautiful things in Italy and costs as much as a museum. About the Last Supper, the uncomfortable thing has to be said: you don't \"try to see\" it. It's a painting on a wall, in a humidity-controlled room where small groups enter for fifteen minutes; you book months ahead with quarterly openings, and anyone who arrives in Milan hoping to find a spot at the last minute doesn't get in. Those who manage it, though, stand in front of a fresco that has been disappearing for five hundred years (Leonardo painted it with an experimental technique that began to degrade while he was still alive), and those fifteen minutes are worth the hassle.",
    luoghi: [
      {
        "nome": "Duomo and rooftop terraces",
        "testo": "The Gothic cathedral took almost six hundred years to finish. The rooftop terraces are walked among spires and statues, with the city below and, on clear days, the Alps on the horizon. It costs about as much as a museum and for me it is the best part.",
        "come": "Metro M1 or M3 to Duomo; the terrace entrance is on the side of the square. You climb on foot or by elevator; the elevator does not reach the highest level, where you continue by stairs.",
        "quando": "Morning or late afternoon, with a clear sky. Book online on weekends and in high season. The Duomo museum has its own closing days: check.",
        "tempo": "1.5 hours for the terraces, 2-3 hours with the interior and museum",
        "url": "https://www.duomomilano.it/",
        "consiglio": "Climb on foot: the way up is part of the visit and the elevator queue is sometimes long."
      },
      {
        "nome": "The Last Supper (Cenacolo Vinciano)",
        "testo": "Leonardo's Last Supper, painted on a wall of the refectory of Santa Maria delle Grazie. The experimental technique began to deteriorate while he was still alive. Visitors enter in small groups, in a humidity-controlled room.",
        "come": "Metro M1 Conciliazione or M2 Cadorna, then a few minutes on foot. Visit on your own, at the time set on the ticket.",
        "quando": "Closed on Monday. Tickets only by reservation, with sales opening in batches: without a ticket you do not get in. Arrive at least 30 minutes early with an ID.",
        "tempo": "15 minutes inside, an hour with waiting and checks",
        "costo": "€15 full price, €2 for ages 18-25, free under 18 (2026), plus booking",
        "url": "https://cenacolovinciano.org/",
        "consiglio": "Check the official site months ahead for new sales openings and book as soon as they appear: it is the most common mistake in Milan."
      },
      {
        "nome": "Brera Art Gallery",
        "testo": "One of the most important collections of Italian painting, with Mantegna, Raphael, Caravaggio and Hayez's The Kiss. It is in an 18th-century palace with a courtyard, in the Brera district.",
        "come": "Metro M2 Lanza or M3 Montenapoleone, then ten minutes on foot through the streets of Brera. Visit on your own.",
        "quando": "Closed on Mondays; Tuesday to Sunday 8:30am-7:15pm, booking required. The afternoon is quieter. The neighbourhood is best explored in the evening.",
        "tempo": "2 hours",
        "costo": "20 euros full price, Grande Brera ticket including Palazzo Citterio (2026)",
        "url": "https://pinacotecabrera.org/",
        "consiglio": "Pick five or six rooms and do not try to see them all."
      },
      {
        "nome": "Sforza Castle",
        "testo": "The fortress of the Visconti and Sforza now houses the civic museums. The best known holds the Rondanini Pietà, Michelangelo's last work, left unfinished. The courtyard and Sempione park are free.",
        "come": "Metro M1 Cairoli or M2 Lanza. The courtyards and garden are open to all; the museums have a separate ticket.",
        "quando": "Museums closed on Monday. Morning for the castle, afternoon for the park.",
        "tempo": "2 hours with the museums, 1 hour for courtyards and park",
        "url": "https://www.milanocastello.it/",
        "consiglio": "If time is short, go in only for the Rondanini Pietà: it is a single room."
      },
      {
        "nome": "Galleria Vittorio Emanuele II and La Scala",
        "testo": "The 19th-century glass-and-iron arcade links Piazza Duomo to Piazza della Scala. Next to it is the theater, with a museum of costumes, instruments and documents.",
        "come": "On foot from the Duomo, two minutes. The La Scala museum is in Largo Ghiringhelli.",
        "quando": "The Galleria is always open. The La Scala museum has its own hours: check first. Evening for the lit shop windows.",
        "tempo": "1 hour for the Galleria and square, one more hour with the museum",
        "consiglio": "The cafes in the Galleria are expensive: have coffee in a side street and use the Galleria only for a stroll."
      },
      {
        "nome": "Navigli",
        "testo": "Two canals, the Naviglio Grande and the Pavese, once used to carry the marble for the Duomo. Today they are full of bars and workshops, with aperitivo at sunset.",
        "come": "Metro M2 Porta Genova or tram. You walk along the towpaths.",
        "quando": "Evening for aperitivo. On the last Sunday of the month there is an antiques market on the Naviglio Grande.",
        "tempo": "2-3 hours in the evening",
        "consiglio": "Move away from the bars on the canal: two streets further, prices drop."
      },
      {
        "nome": "Lake Como: Varenna and Bellagio",
        "testo": "The most famous pre-Alpine lake, with stone villages and villas on the shores. Varenna and Bellagio face each other and are linked by boat.",
        "come": "Train from Milano Centrale to Varenna-Esino in about an hour, then a boat to Bellagio. Lines and times on Navigazione Laghi.",
        "quando": "Spring and autumn, when the boats are less full. On summer weekends it is very crowded.",
        "tempo": "A full day",
        "url": "https://www.navigazionelaghi.it/",
        "consiglio": "Go by train and boat, not by car: the lakeside road is narrow with no parking."
      },
      {
        "nome": "Lake Maggiore and the Borromean Islands",
        "testo": "Three islands off Stresa: Isola Bella with the Baroque palace and garden, Isola Madre with the botanical park, Isola dei Pescatori with its fishing village.",
        "come": "Train from Milano Centrale to Stresa in about 50 minutes, then a boat from the lakefront. Separate tickets for the palaces.",
        "quando": "April-October, with the gardens in bloom in spring. In high season leave early.",
        "tempo": "A day for two islands",
        "consiglio": "With a single day pick Isola Bella and Isola dei Pescatori: they fit in the same trip."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Duomo and terraces, on foot.",
          "Lunch: Galleria Vittorio Emanuele II, then a sandwich or a risotto in a side street.",
          "Early afternoon: Sforza Castle, with the Rondanini Pietà.",
          "Afternoon: Brera, on foot.",
          "Evening: aperitivo on the Navigli."
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1 as above; if you have the Last Supper ticket, put it in place of the Castle.",
          "Day 2: train to Varenna and boat to Bellagio, or to Stresa for the Borromean Islands.",
          "Lunch on the lake.",
          "Afternoon: boat and train back before evening."
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Duomo, Galleria, La Scala, Brera.",
          "Day 2: Last Supper with a booked ticket, Sforza Castle, Navigli in the evening.",
          "Day 3: a lake in a day, Como or Maggiore."
        ]
      }
    ],
    zone: [
      {
        "nome": "Brera and the center",
        "perChi": "Those who want to walk everywhere",
        "testo": "Convenient and beautiful, close to the Duomo, Brera and the Castle. The most expensive in the city, with places that close early and less life in the evening."
      },
      {
        "nome": "Navigli and Porta Ticinese",
        "perChi": "Those who want the evenings",
        "testo": "Bars and nightlife until late. The noise on the towpath carries into rooms facing the canal: better a room at the back."
      },
      {
        "nome": "Central Station",
        "perChi": "Those on a tight budget or leaving by train",
        "testo": "Cheaper hotels and connections to the lakes and other cities. The area is less well kept and it pays to be careful in the evening; the center is fifteen minutes by metro."
      }
    ],
    sapori: [
      {
        "nome": "Risotto alla milanese",
        "testo": "Creamed rice with saffron and bone marrow. Eaten in a trattoria, often alongside the ossobuco."
      },
      {
        "nome": "Cotoletta alla milanese",
        "testo": "The cut is thick and bone-in, breaded and fried in butter, unlike the thin «Viennese» one. Found in traditional trattorias."
      },
      {
        "nome": "Ossobuco",
        "testo": "Braised veal shank with gremolada. A winter dish."
      },
      {
        "nome": "Panettone",
        "testo": "A Christmas cake, but Milanese pastry shops sell a good one nearly all year."
      },
      {
        "nome": "Aperitivo",
        "testo": "You pay for the drink and the buffet is included, with very variable quality. The best are in the neighborhoods, not in the center."
      }
    ],
    attenzioni: [
      "Last Supper: without a reservation you do not get in. Sales open in batches: check the official site months ahead.",
      "Area B and Area C limit car access to the center, with cameras: whoever enters without knowing gets the fine.",
      "Salone del Mobile (April) and fashion weeks: lodging prices triple, book months ahead.",
      "Pickpockets on the metro (M1, M3), in front of the Duomo and at Central Station: bag closed in front, never in a back pocket.",
      "People offering bird feed or bracelets in Piazza Duomo then ask for money: refuse without taking anything in your hand.",
      "Frequent transport strikes (ATM and trains): check the calendar before going to the lakes."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['milano-e-i-laghi', 'grandi-citta-italia'],
    imageAlt: "The façade of Milan Cathedral seen from the far end of Piazza del Duomo, with people and pigeons on the paving",
    immagine: '/images/italia/milano-nord.jpg',
  },
  {
    slug: 'sicilia',
    paeseSlug: 'italia',
    ordine: 8,
    nome: "Sicily",
    tipologia: ['isole', 'archeologia', 'gastronomia'],
    giorniConsigliati: "10-12 days, 7 for just one half",
    visitataPersonalmente: true,
    introduzione:
      "It's an island as big as a nation, which over three thousand years has been Greek, Roman, Byzantine, Arab, Norman, Swabian, Spanish and Bourbon: every dominion left architecture, words and recipes that still coexist. It also has the tallest active volcano in Europe, which erupts regularly.",
    percheAndarci:
      "No other Italian region has so many layers: you can see a Greek temple better preserved than those in Greece, a Norman cathedral with Byzantine mosaics and Arabic inscriptions, and a Baroque palace, all in the same day. And you eat in a way that doesn't resemble the rest of Italy.",
    cosaVedere: [
      "The Valley of the Temples in Agrigento, with the Temple of Concordia, among the best-preserved Doric temples in the world",
      "Palermo, with the Palatine Chapel and the Cathedral of Monreale: Byzantine art, Arab craftsmanship and Norman structure in the same building",
      "Etna, with the summit craters and the recent lava flows",
      "Syracuse and Ortigia, with the Greek theater and the Cathedral built inside a Doric temple still visible in the columns",
      "The Baroque of the Val di Noto (Noto, Modica, Ragusa Ibla, Scicli), rebuilt after the 1693 earthquake",
      "Taormina with the Greco-Roman theater overlooking Etna and the sea",
      "Segesta and Selinunte, the two Greek sites in the west, far less crowded than Agrigento",
      "The Vendicari and Zingaro reserves, and the Scala dei Turchi",
    ],
    cosaFare: [
      "Climbing Etna up to the summit zone, with a guide mandatory beyond a certain altitude (see the dedicated experience page)",
      "The Ballarò or Vucciria market in Palermo in the morning, street food and theater together",
      "The Valley of the Temples at sunset or at night, when the temples are lit and the temperature is bearable",
      "A drive through the Baroque of the Val di Noto, the right way to do it",
    ],
    doveDormire:
      "In Sicily the central question is the base, which is the point of the comparison below: the island is too big for a single base. In general Palermo for the west, Syracuse or Catania for the east, with one or two intermediate bases.",
    doveMangiare:
      "Sicily has two different cuisines, one for each side. In Palermo Arab-Norman street food dominates: arancine (feminine, in Palermo), panelle, sfincione, bread with spleen for the brave. In the east fish and pasta prevail: pasta alla Norma in Catania, pasta con le sarde, sea urchins in Syracuse. Then the sweets, a chapter of their own: cannoli filled at the moment and never before, cassata, granita with brioche at breakfast, which in summer is the right way to start the day. The wine: Etna Rosso from Nerello Mascalese, Nero d'Avola, Grillo and Carricante.",
    comeArrivare:
      "Flights to Palermo and Catania, the two main airports, plus Trapani and Comiso. By train and car you arrive by ferry from Villa San Giovanni: trains are still loaded onto the ship, something almost nowhere does anymore. From northern Italy the overnight ferries from Genoa, Livorno and Naples also carry cars.",
    comeSpostarsi:
      "**A car is indispensable.** The rail network is slow and covers little; for those who don't drive the alternative is buses, which however constrain you quite a bit. Highways connect Palermo, Catania and Messina; the rest is state road, with longer times than Google suggests.",
    periodoMigliore:
      "**May-June and September-October**, without a doubt. July and August are torrid (in the interior it often goes above 40 degrees), crowded and expensive. Winter is mild and excellent for the art cities and archaeological sites, with the sea out of play and many coastal places closed. April and November are excellent and little visited.",
    costi:
      "Cheaper than the center-north on lodging and dining, with the exception of Taormina and the beach towns in August. Entrance to archaeological sites is modest; the combined ticket for several sites is almost always worthwhile.",
    erroriDaEvitare: [
      "Trying to do all of Sicily in a week: it's as big as a region and a half, the interior roads are slow, and the result is spending the vacation in the car",
      "Doing Agrigento at noon in summer: the Valley of the Temples has no shade and temperatures exceed 40 degrees",
      "Going in August without knowing it's the worst month in every respect",
      "Skipping the interior (Enna, Piazza Armerina, the Madonie) to stay only on the coast: it's where Sicily is most itself and least touristy",
      "Getting granita with whipped cream thinking it's the authentic version: Sicilian granita is made with water, sugar and the fruit, and goes with the brioche col tuppo",
      "Trusting estimated travel times: on the interior state roads add a third",
    ],
    confronti: [
      {
        titolo: "Eastern or western Sicily: which half to choose",
        introduzione:
          "Sicily is too big to be done well in a week, and the best way to approach it is to choose one half instead of rushing across it. The two parts have different history, architecture, food and pace.",
        opzioni: [
          {
            nome: "Eastern Sicily (Catania, Syracuse, Val di Noto, Etna, Taormina)",
            sintesi: "The Greek and Baroque side, dominated by Etna: Greek theaters, cities rebuilt in Baroque after the 1693 earthquake, and the volcano that's visible from everywhere.",
            costo: "medium, with Taormina out of scale compared with the rest",
            durata: "7-8 days",
            pro: [
              "Etna, which beyond the view is an experience in itself",
              "Syracuse and Ortigia, where the Cathedral is built inside a Greek temple, with the Doric columns embedded in the walls",
              "The Baroque of the Val di Noto, a UNESCO site, concentrated in a few kilometers",
              "Shorter distances: you get around with one or two bases",
              "The beaches and reserves of the southeast (Vendicari, Marzamemi) are among the best on the island",
            ],
            contro: [
              "Taormina in high season is saturated and has prices from another region",
              "Catania as a city divides opinion: lively and chaotic, less beautiful than Palermo",
              "More visited by international tourism",
            ],
            perChi: "First-timers, those with only one week, those who want to combine archaeology, Baroque and the sea without long transfers.",
          },
          {
            nome: "Western Sicily (Palermo, Monreale, Segesta, Trapani, Agrigento)",
            sintesi: "The Arab-Norman and Phoenician-Punic side: Palermo with the Palatine Chapel, Monreale, the temples of Segesta and Selinunte, the salt pans, the Egadi.",
            costo: "lower than the east for the same quality",
            durata: "7-8 days",
            pro: [
              "Palermo is the most layered and most interesting city on the island, and the Cathedral of Monreale is one of the masterpieces of the European Middle Ages",
              "Segesta and Selinunte have temples almost like Agrigento's with a tenth of the people",
              "Palermo's street food has no equivalent in Italy",
              "The salt pans of Trapani and Marsala, the Egadi islands, San Vito Lo Capo and the Zingaro reserve",
              "Less international tourism and lower prices",
            ],
            contro: [
              "Palermo requires adapting: traffic, disorder and decay in some areas",
              "Greater distances between points of interest",
              "The Valley of the Temples in Agrigento remains the most crowded site on the island",
              "Worse public transport than in the east",
            ],
            perChi: "Those coming back a second time, those who put history and food before the sea, those who want to spend less.",
          },
          {
            nome: "The full loop",
            sintesi: "The whole island in a single trip, with a moving base.",
            costo: "high in fuel and time",
            durata: "at least 12-14 days to make sense",
            pro: ["You see everything you had put on the list", "With two real weeks you do it well", "Crossing the interior shows the less touristy Sicily"],
            contro: [
              "Under twelve days it becomes a tour of transfers: you sleep somewhere different every night and spend the vacation in the car",
              "Times on the interior state roads are longer than maps estimate",
              "You end up seeing everything in a rush and nothing at leisure",
            ],
            perChi: "Those with at least two full weeks who accept spending a lot of time in the car.",
          },
        ],
        raccomandazione:
          "With a week or ten days, **choose one half**: the east the first time, for Etna, Syracuse and the Baroque; the west the second, for Palermo, Monreale and the temples without lines. The full loop only makes sense from twelve days up. And whichever you choose, a couple of days in the interior (Enna, Piazza Armerina, the Madonie) change your perception of the island more than any coastal stop.",
      },
    ],
    miaEsperienza:
      "When you plan the trip, Sicily is the Italian region you underestimate the most: on the map it looks like an island, in reality it's a nation, and the classic \"tour of Sicily in a week\" becomes six days of state roads. More than any monument, what struck me was a building that contains them all: the Cathedral of Monreale, built by Norman kings with Arab craftsmen and Byzantine mosaicists, with six thousand square meters of gold mosaics and a cloister where every capital is different. In there you understand that Sicily has held together all the cultures that conquered it. The second thing is Etna, to be climbed knowing it's an active volcano: you climb on black lapilli ground that crunches underfoot, with fumaroles coming out of the cracks and warm ground if you rest your hand on it. Finally, a not very romantic but useful tip: the Valley of the Temples is done at night. By day, in summer, you walk in an oven without a single tree.",
    luoghi: [
      {
        "nome": "Palermo: Norman Palace and Palatine Chapel",
        "testo": "The Palatine Chapel, inside the royal palace, combines Norman structure, Byzantine mosaics and a wooden ceiling by Arab craftsmen. The palace also has the royal apartments.",
        "come": "On foot from the historic center of Palermo, near the Cathedral, in Piazza del Parlamento. Entry is by timed ticket; the visit is self-guided, audio guide optional.",
        "quando": "Morning, for the light on the mosaics. On Sundays and holidays the hours are reduced to the morning. Check closures for ceremonies.",
        "tempo": "1.5 hours",
        "url": "https://www.fondazionefedericosecondo.it/",
        "consiglio": "Look up: the apse mosaics fill a whole wall and the muqarnas ceiling is worth the stiff neck."
      },
      {
        "nome": "Monreale Cathedral",
        "testo": "A 12th-century Norman cathedral with six thousand square meters of golden Byzantine mosaics and a cloister where every capital is different. Inside you see how Sicily held together every culture that conquered it.",
        "come": "From Palermo, AMAT bus 389 from Piazza Indipendenza (a step from the Norman Palace) or a taxi, about 30-40 minutes. The cathedral is visited on your own; the cloister has a separate entrance.",
        "quando": "Early morning or early afternoon. The schedule has a midday break: check first.",
        "tempo": "2 hours",
        "costo": "€8 for the cathedral (2025)",
        "consiglio": "Go up to the roof terrace, if open: you walk above the nave and see Palermo."
      },
      {
        "nome": "Ballarò and Palermo's markets",
        "testo": "Ballarò is the historic market of the center: fish, fruit, spice stalls and fry shops. You eat on the spot: arancine, panelle, sfincione, bread with spleen. The Vucciria is smaller and in the evening turns into a hangout.",
        "come": "On foot from the Teatro Massimo or the station, about ten minutes. The market runs in the morning until early afternoon.",
        "quando": "Morning. The market closes in the early afternoon. Sunday is quieter.",
        "tempo": "1-2 hours",
        "consiglio": "Eat standing at the stalls most crowded with Palermitans, not those with an English menu."
      },
      {
        "nome": "Valley of the Temples, Agrigento",
        "testo": "A park of seven Doric temples of the 5th century BC lined along a ridge. The Temple of Concord is among the best preserved in the world. The rest of the park slopes down to the Kolymbethra garden.",
        "come": "From Agrigento station take a city bus to the entrance, or drive and pay for parking. The path along the ridge is flat.",
        "quando": "Early morning or sunset; at midday in summer there is no shade and it tops 40 degrees. In summer there are evening openings: check the dates on the site.",
        "tempo": "3 hours",
        "url": "https://www.parcovalledeitempli.it/",
        "consiglio": "Go at night, when the temples are lit and the temperature is bearable."
      },
      {
        "nome": "Segesta and Selinunte",
        "testo": "Segesta has an unfinished Doric temple and a theater on the hill. Selinunte is one of the largest archaeological parks in the Mediterranean, with fallen temples and the acropolis by the sea. They get a fraction of Agrigento's visitors.",
        "come": "By car from Palermo: Segesta about an hour, Selinunte about two. From the Segesta car park a shuttle goes up to the theater.",
        "quando": "Morning, because of the heat. Selinunte at sunset is very beautiful.",
        "tempo": "2 hours at Segesta, 3 at Selinunte",
        "consiglio": "Sleep in Trapani or Marsala to see both sites calmly in a day and a half."
      },
      {
        "nome": "Etna",
        "testo": "The tallest active volcano in Europe. You go up by cable car from Rifugio Sapienza and then by off-road vehicle or on foot, walking on black lapilli that crunch underfoot, near the fumaroles. The summit craters are visited only with a guide and depend on the volcano's activity.",
        "come": "From Catania by car or bus to Rifugio Sapienza (about an hour and a half). Above a certain altitude a guide is mandatory. Closed shoes, warm layers and a windbreaker.",
        "quando": "Morning or sunset with a clear sky. Ascents may be suspended for activity or weather.",
        "tempo": "Half a day, a full day with the crater excursion",
        "url": "https://www.parcoetna.it/",
        "consiglio": "Bring more layers than seem necessary: it is cold at altitude even in summer."
      },
      {
        "nome": "Syracuse and Ortigia",
        "testo": "Ortigia is the island of the old town: the Duomo is built inside a Doric temple, with the columns still visible in the walls. At the Neapolis park are the Greek theater, the Ear of Dionysius and the Roman amphitheater.",
        "come": "Ortigia on foot across the bridge; the archaeological park twenty minutes on foot or by bus from the station. Visit on your own.",
        "quando": "Neapolis early in the morning. In May-June, during the classical performances at the Greek theater, the visit may be limited.",
        "tempo": "A full day, half a day for Ortigia",
        "consiglio": "Dine in Ortigia and sleep outside the limited traffic zone, where parking costs less."
      },
      {
        "nome": "Val di Noto: Noto, Modica and Ragusa Ibla",
        "testo": "Towns rebuilt in Baroque style after the 1693 earthquake, a UNESCO site. Noto has the stage set of a long golden street; Modica has cold-worked chocolate; Ragusa Ibla a center on a spur.",
        "come": "By car, the right way to do it: Noto-Modica 45 minutes, Modica-Ragusa 25. Park outside and walk.",
        "quando": "Early afternoon for the golden facades, evening for Noto lit up. Avoid August.",
        "tempo": "One day for two towns, two days for three",
        "consiglio": "Sleep in Ragusa Ibla or Modica: quiet and with great restaurants, and you save compared to Noto."
      },
      {
        "nome": "Taormina and the ancient theater",
        "testo": "A Greek-Roman theater facing Etna and the sea, in a village atop a cliff. It is the most photographed view on the island. The town is expensive, but the theater is worth the climb.",
        "come": "Train to Taormina-Giardini, then a bus or taxi uphill. By car, leave it in a paid car park outside the center.",
        "quando": "Early morning, before the tourist buses, or at sunset. Very crowded in high season.",
        "tempo": "2 hours",
        "consiglio": "Go up to Castelmola on foot or by car: a better view and far fewer people."
      },
      {
        "nome": "Villa Romana del Casale, Piazza Armerina",
        "testo": "A 4th-century Roman villa with 3,500 square meters of mosaics, including the «bikini girls». It is inland, far from the coast and the busiest routes.",
        "come": "By car from Enna or Catania, about an hour; from Enna continue to Piazza Armerina. Raised walkways guide the visit.",
        "quando": "Morning or early afternoon; avoid summer midday hours, the roof holds the heat.",
        "tempo": "1.5 hours",
        "consiglio": "Combine it with Enna and the Madonie: the interior changes your view of the island."
      },
      {
        "nome": "Vendicari, Zingaro and Scala dei Turchi",
        "testo": "Three stretches of wild coast: Vendicari in the southeast, with beaches and salt pans; the Zingaro reserve between Scopello and San Vito Lo Capo, with coves reachable only on foot; the Scala dei Turchi, a white marl cliff near Agrigento.",
        "come": "By car to the entrance of each. At Zingaro and Vendicari you walk; for the Scala dei Turchi you go from the Realmonte beach.",
        "quando": "Spring and early summer or September. In August they are crowded and scorching. Entry to the Zingaro is paid.",
        "tempo": "Half a day each",
        "consiglio": "Bring water, a hat and walking shoes even for the beach: there are no kiosks along the trails."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Palermo, morning: Norman Palace and Palatine Chapel.",
          "Late morning: Cathedral and a walk toward the Quattro Canti.",
          "Lunch: street food at Ballarò.",
          "Afternoon: Monreale by bus or taxi.",
          "Evening: back to Palermo, dinner with Sicilian wine."
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Syracuse, Neapolis in the morning and Ortigia in the afternoon.",
          "Day 2: Val di Noto by car, with Noto, Modica and Ragusa Ibla.",
          "Day 3: Etna in the morning and Taormina in the afternoon, back to Catania."
        ]
      },
      {
        "titolo": "5 days",
        "tappe": [
          "Day 1: Palermo.",
          "Day 2: Monreale and Segesta, sleep in Trapani.",
          "Day 3: Selinunte and then toward Agrigento.",
          "Day 4: Valley of the Temples at dawn or sunset, then Piazza Armerina.",
          "Day 5: Catania and Etna."
        ]
      }
    ],
    zone: [
      {
        "nome": "Central Palermo",
        "perChi": "Those who want city, food and art",
        "testo": "Ideal base for the west. Noisy and chaotic, with excellent markets, but parking is hard: better sleep somewhere with a garage."
      },
      {
        "nome": "Catania",
        "perChi": "Those who arrive by plane and want Etna",
        "testo": "Base for Etna, Syracuse and Taormina. Baroque and lively, with a somewhat neglected center off the main streets. Busy evenings, movement at night too."
      },
      {
        "nome": "Ortigia, Syracuse",
        "perChi": "Those who want a pedestrian center and the sea",
        "testo": "A small compact island, beautiful in the evening, with a limited traffic zone. Rooms are expensive in high season and parking is off the island."
      },
      {
        "nome": "Ragusa Ibla and Modica",
        "perChi": "Those who want a calm base for the Baroque",
        "testo": "Calmer and cheaper than Taormina and Noto, with excellent food. You need a car and some patience with the uphill streets."
      }
    ],
    sapori: [
      {
        "nome": "Arancine",
        "testo": "Fried rice balls with ragù or butter and ham. In Palermo they are «arancine», feminine and round; in Catania «arancini», masculine and cone-shaped."
      },
      {
        "nome": "Pasta alla Norma",
        "testo": "Pasta with tomato, fried eggplant and salted ricotta. It is the dish of Catania."
      },
      {
        "nome": "Palermo street food",
        "testo": "Chickpea panelle, sfincione, bread with spleen. Eaten standing in the markets."
      },
      {
        "nome": "Cannoli and cassata",
        "testo": "The cannolo should be filled on the spot, with ricotta; the cassata is a ricotta and marzipan cake. Found in historic pastry shops."
      },
      {
        "nome": "Granita with brioche",
        "testo": "Granita of lemon, almond, pistachio or mulberry, with a brioche col tuppo: the summer breakfast. It is made with water, sugar and fruit, not with cream."
      },
      {
        "nome": "Pasta con le sarde and sea urchins",
        "testo": "In Palermo pasta with sardines, wild fennel and raisins; in Syracuse sea urchins in season, eaten with bread."
      }
    ],
    attenzioni: [
      "You need a car almost everywhere, but Palermo, Catania, Ortigia and Taormina have limited traffic zones with cameras: ask the hotel where to leave it and avoid fines.",
      "Extreme heat from July to August, often above 40 degrees inland and at shadeless archaeological sites: water, a hat, visits at dawn or sunset.",
      "Etna: above a certain altitude a guide is mandatory and access depends on the volcano's activity and the weather. Check the park's notices before leaving.",
      "Pickpockets in the markets and the centers of Palermo and Catania: bag in front, phone in pocket.",
      "Travel times are longer than expected on inland state roads: add a third to what the map says.",
      "Tourist tax in the main cities: paid at the hotel, check the municipality's amount."
    ],
    esperienzeSlugs: ['etna'],
    tripSlugs: ['sicilia-itinerario', 'sicilia-completa'],
    imageAlt: "Taormina seen from above with houses on the hillside and the Ionian Sea in the background, Sicily",
    immagine: '/images/italia/sicilia.jpg',
  },
  {
    slug: 'sardegna',
    paeseSlug: 'italia',
    ordine: 9,
    nome: "Sardinia",
    tipologia: ['isole', 'mare', 'trekking'],
    giorniConsigliati: "8-10 days",
    visitataPersonalmente: true,
    introduzione:
      "It's an island with its own language, a prehistoric civilization that left seven thousand stone towers and no other explanation of itself, and a sea that holds up against the Caribbean. And it's also, surprisingly, one of the toughest trekking destinations in Italy.",
    percheAndarci:
      "For the sea (Cala Goloritzé, Cala Mariolu, La Pelosa, the La Maddalena archipelago), and above all because the interior is an entirely different island: the Supramonte, the Gorropu gorge, the nuraghi, the Barbagia villages where Sardinian is spoken and where tourism never arrived.",
    cosaVedere: [
      "The Gulf of Orosei, with Cala Goloritzé, Cala Mariolu and Cala Luna, reachable almost only by sea or on foot",
      "The La Maddalena archipelago and Budelli with its pink beach, now protected and off-limits",
      "Su Nuraxi di Barumini, a UNESCO site, the best-preserved nuragic complex",
      "The Gorropu gorge, among the deepest in Europe, with walls up to five hundred meters",
      "The Barbagia and the Supramonte villages: Orgosolo with its murals, Oliena, Urzulei",
      "Alghero, with its Catalan imprint still in the language, and Neptune's Grotto",
      "The disused mines of the Sulcis-Iglesiente, a geomining heritage site, with Porto Flavia carved into the cliff",
      "The Piscinas dunes on the Costa Verde, among the tallest in Europe, and Carloforte where Ligurian is spoken",
    ],
    cosaFare: [
      "Trekking in the Gorropu gorge, the most impressive thing in the interior (see the dedicated experience page)",
      "Walking down to Cala Goloritzé (the only way by land; see the dedicated experience page)",
      "An inflatable-boat tour of the Gulf of Orosei, to see the coves you can't reach from land",
      "A day in the Barbagia, between Orgosolo and Oliena, to see the island away from the sea",
    ],
    doveDormire:
      "Sardinia is done with two or three bases: the northeast for La Maddalena and the Costa Smeralda, the central-east for the Gulf of Orosei and the Supramonte, the southwest for the Sulcis and the less-visited beaches. The agriturismi of the interior have value for money the coast can only dream of.",
    doveMangiare:
      "Surprisingly, Sardinian cuisine is shepherds' food more than seafood. Porceddu (roast suckling pig) on the spit, pane carasau, culurgiones (ravioli with potato, mint and pecorino, closed like an ear of wheat), malloreddus, pecorino sardo at every aging, and smoked fiore sardo. Mirto as a digestif. Cannonau is the signature wine, Vermentino di Gallura the island's only DOCG. **On the coast you eat fish at tourist prices; twenty kilometers inland you eat better and spend half.**",
    comeArrivare:
      "Flights to Cagliari, Olbia and Alghero, with fares that spike in July and August. **Car ferries from Genoa, Livorno, Civitavecchia and Naples need to be booked months ahead for summer**, and are the most sensible option for those staying more than a week.",
    comeSpostarsi:
      "**A car is a must.** The rail network is minimal and slow, buses connect the main towns but not the beaches. The interior roads of the Supramonte are narrow and winding; many coves are reached only by dirt roads or on foot.",
    periodoMigliore:
      "**May-June and September**, almost always the right answer: sea already warm, normal prices, beaches you can enjoy. July and August are packed and very expensive, with ferries sold out and coves capped. October and April are excellent for the interior and trekking, with the sea out of play.",
    costi:
      "In high season the coast has some of the highest prices in Italy, with the Costa Smeralda out of scale. **Several beaches have capped access with paid reservations** (La Pelosa, Cala Goloritzé, some coves in the Gulf of Orosei), introduced to protect them: check and book before leaving, because without it you don't get in.",
    erroriDaEvitare: [
      "Not booking the car ferry for July and August: it sells out months ahead and prices rise drastically",
      "Showing up at a capped beach without a reservation: several coves have limited numbers and paid access, and without it you turn back",
      "Doing only the coast: the interior (Supramonte, Barbagia, Gorropu) is the part nobody expects and the most surprising",
      "Underestimating the trails: those in the Supramonte are tough, poorly marked and without water, and every year there are rescue call-outs",
      "Going in August",
      "Expecting fish as a traditional dish: Sardinian cuisine is pastoral, and the best is in the interior",
    ],
    confronti: [
      {
        titolo: "Chic Sardinia or unexplored Sardinia",
        introduzione:
          "For sixty years Sardinia has lived a double identity: on one side the coast designed in the Sixties by the Aga Khan's consortium, with the prices of a luxury capital; on the other an interior of shepherds, nuraghi and mountains where tourism never arrived. They're two different islands: you can choose, or mix them, which is the most interesting thing.",
        opzioni: [
          {
            nome: "Costa Smeralda and the northeast",
            sintesi: "Porto Cervo, Porto Rotondo, Baja Sardinia and the La Maddalena archipelago: the stretch of coast designed by the consortium in the Sixties, with architecture planned on a drawing board and the highest prices in the Mediterranean.",
            costo: "extremely high in high season, among the most expensive in Europe",
            durata: "4-5 days",
            pro: [
              "The sea is exceptional, and the northeast beaches are among the most beautiful on the island",
              "The **La Maddalena** archipelago is a national park and is toured by boat: Budelli, Spargi, Caprera",
              "International-level services and easy connections from Olbia",
              "The consortium's architecture, however artificial, is carefully studied and in places successful",
            ],
            contro: [
              "Out-of-scale prices in July and August, with restaurants and lodging of a luxury capital",
              "Lots of people and traffic on the coastal roads",
              "It's a landscape built for tourism: there's little that is Sardinian there",
              "Ferries and flights to the northeast in high season cost double",
            ],
            perChi: "Those who come for the sea and the services and accept the price, and those who want to tour La Maddalena by boat.",
          },
          {
            nome: "Interior: Barbagia, Supramonte and Ogliastra",
            sintesi: "The other Sardinia: the Supramonte villages, the nuraghi, the Gorropu gorge, the murals of Orgosolo, the shepherds' sheepfolds and a language that is a real language, not a dialect.",
            costo: "very low, with agriturismi at prices that no longer exist on the coast",
            durata: "4-6 days",
            pro: [
              "The **Gorropu gorge**, among the deepest in Europe, with walls up to five hundred meters",
              "The **nuraghi**: seven thousand dry-stone towers built between 1800 and 1100 BC by a civilization without writing, and it isn't even known with certainty what they were for. Su Nuraxi di Barumini is a UNESCO site",
              "The cuisine is pastoral more than maritime (porceddu, pane carasau, culurgiones, pecorini), and you eat better and at half the price of the coast",
              "You walk half a day without meeting anyone",
              "Tiscali, the nuragic village hidden inside a sinkhole",
            ],
            contro: [
              "Minimal tourist services and no hospitality infrastructure",
              "Narrow, slow roads, with times much longer than estimates",
              "Tough Supramonte trails, poorly marked and without water: every year there are rescue call-outs",
              "No sea within immediate reach",
            ],
            perChi: "Those who have already done the coast, those who hike, those who want to understand what Sardinia is beyond the beaches.",
          },
          {
            nome: "Southwest: Sulcis, Iglesiente and Costa Verde",
            sintesi: "The part almost nobody does: the disused mines (geomining heritage), Porto Flavia carved into the cliff, the Piscinas dunes and the beaches with nobody on them.",
            costo: "low",
            durata: "4-5 days",
            pro: [
              "Northeast-level beaches with a fraction of the people and prices",
              "Mining industrial archaeology: **Porto Flavia**, a port carved inside a cliff dropping into the sea, is one of the most impressive things on the island",
              "The **Piscinas** dunes, among the tallest in Europe, with the desert reaching the sea",
              "Sant'Antioco and San Pietro, with Carloforte where a Ligurian dialect is still spoken",
            ],
            contro: [
              "Fewer services and fewer connections: you arrive from Cagliari and need a car",
              "Some beaches are reachable only by dirt roads",
              "Less \"famous\": for some a flaw, for others the reason to go",
            ],
            perChi: "Those who want top-tier beaches without northeast prices, and those interested in industrial archaeology.",
          },
        ],
        raccomandazione:
          "The formula that pays off most is to **mix them**: four days of coast and three in the interior, which are an hour's drive apart and feel like two countries. Those who have already seen the northeast should go to the **southwest**, which has beaches of the same level, Porto Flavia and the Piscinas dunes, at a fraction of the price. And those who want to understand this island should give at least two days to the **Supramonte**: the nuraghi and Gorropu explain Sardinia far better than any stretch of coast.",
      },
    ],
    miaEsperienza:
      "Sardinia has a perception problem: you associate it with the sea, and the sea is among the most beautiful in the Mediterranean (Cala Goloritzé, with that limestone pinnacle and transparent water, holds up against any comparison). But the surprise lies twenty kilometers from the coast, in the interior, where a fraction of the people arrive. The Gorropu gorge is a fissure between walls that reach five hundred meters, where you walk on boulders as big as cars with a strip of sky above: it looks like an American canyon and it's in the Barbagia. And the nuraghi are the strangest thing in Italy: seven thousand dry-stone towers built between 1800 and 1100 BC by a civilization we know almost nothing about, without writing, and it isn't even clear with certainty what those towers were for. At Barumini you go inside and climb internal stairs in the thickness of the wall. Then there's a practical thing to know: the most beautiful coves have been capped precisely because they were being destroyed, and today without a reservation you don't get in.",
    luoghi: [
      {
        "nome": "Cala Goloritzé",
        "testo": "A small cove of white pebbles under a 143-meter limestone pinnacle, in the Gulf of Orosei, with clear water. It stands up to any Caribbean comparison. Access is regulated to protect it.",
        "come": "On foot from the Golgo plateau, in Baunei, by a trail of about an hour and a half that drops through the scrub. By boat you can approach, but landing is limited. Booking is required.",
        "quando": "Early morning, when you walk in the cool and the cove is still empty. May-June and September. Book before leaving: the number of daily accesses is limited.",
        "tempo": "3-4 hours for the descent, a swim and the climb back",
        "consiglio": "Hiking shoes and a liter and a half of water each: the climb back on a summer afternoon is hard."
      },
      {
        "nome": "Gulf of Orosei by boat: Cala Mariolu and Cala Luna",
        "testo": "A series of coves under the cliff, reachable almost only by sea: Cala Luna with its caves, Cala Mariolu with pink and white pebbles, Cala Sisine. From the sea you see a stretch of coast that you cannot see from land.",
        "come": "Rubber boat or boat from Cala Gonone, leaving from the port. The captain decides the route and stops. Book ahead in summer.",
        "quando": "Morning, with calm seas. Trips run from May to October. The water is clearer before noon.",
        "tempo": "A full day",
        "consiglio": "Book a small rubber boat to land in the narrowest coves, where the big boats cannot reach."
      },
      {
        "nome": "Gorropu Gorge",
        "testo": "A cleft carved by the Rio Flumineddu between limestone walls up to 500 meters high, in the Supramonte. You walk on boulders as big as cars, with a strip of sky overhead. It looks like an American canyon and it is in Barbagia.",
        "come": "By car from Dorgali or Urzulei to Sa Barva, then a trail of about an hour and a half to the gorge entrance, with a river crossing. Access has rules and a ticket: check first.",
        "quando": "Spring and autumn. In summer it is hot and the gorge fills up. After heavy rain the stream can block the way.",
        "tempo": "Half a day, a full day for the long trek",
        "consiglio": "Learn the access rules and consider a guide: the trail disappears in the riverbed."
      },
      {
        "nome": "Orgosolo and Oliena, Barbagia",
        "testo": "Orgosolo is famous for the political murals on its houses, painted from the 1960s on: peasant struggles, wars, rights. Oliena lies at the foot of the Supramonte, with Cannonau vineyards and a view of Monte Corrasi.",
        "come": "By car from Nuoro: Oliena 15 minutes, Orgosolo 25. You walk in the villages; the murals are all along the street.",
        "quando": "Morning or late afternoon. In autumn, with Autunno in Barbagia, the villages open houses and workshops to visitors.",
        "tempo": "Half a day each",
        "consiglio": "Respect the people who live in the painted houses: ask before photographing portraits."
      },
      {
        "nome": "Su Nuraxi di Barumini",
        "testo": "The best-preserved nuraghic complex on the island, a UNESCO site: a central tower surrounded by bastions and a stone village, built between 1500 and 500 BC. At Barumini you go inside and climb internal stairs in the thickness of the wall.",
        "come": "By car from Cagliari in about an hour and a quarter; by train and then bus, with limited connections. The visit is with a guide, who takes the group through the different rooms.",
        "quando": "Morning or late afternoon. Hours vary with the season: check the Foundation's site before going.",
        "tempo": "1.5 hours",
        "url": "https://www.fondazionebarumini.it/",
        "consiglio": "A nuraghe looks like a pile of stones until you go in: the internal stairs explain how it was built."
      },
      {
        "nome": "La Pelosa, Stintino",
        "testo": "A beach of white sand and shallow water, facing the Aragonese tower and Piana island. It is among the most photographed in Italy. To protect it, access is capped.",
        "come": "By car to Stintino, in the northwest, then on foot from the car parks. Booking is mandatory and paid, with a mat under the towel.",
        "quando": "Early morning. June and September, avoiding July and August. With the mistral the sea is rough and the beach partly closed.",
        "tempo": "Half a day",
        "consiglio": "Book days ahead and bring the mat: without it you cannot sit on the sand."
      },
      {
        "nome": "La Maddalena archipelago",
        "testo": "A group of islands of pink granite and green water in the northeast: La Maddalena, Caprera with Garibaldi's house, Spargi, Santa Maria. Budelli and the pink beach are now protected and off limits.",
        "come": "Ferry from Palau to La Maddalena in about fifteen minutes, with a car if you like. For the other islands you need boats or rubber boats.",
        "quando": "June and September. In August it is very crowded and boats are scarce.",
        "tempo": "A full day",
        "consiglio": "Book the boat trip early: August spots go fast."
      },
      {
        "nome": "Alghero and Neptune's Grotto",
        "testo": "Alghero has a Catalan-flavored center, with seaside ramparts and the language still spoken. At Capo Caccia, half an hour away, Neptune's Grotto is a large cave with stalactites and an inner lake.",
        "come": "Alghero by plane or car. For the grotto: a boat from Alghero's port or on foot down the Escala del Cabirol, a 654-step staircase cut into the cliff.",
        "quando": "Morning. The boat does not sail in rough seas. The sunset over Alghero's ramparts is lovely.",
        "tempo": "Half a day for the grotto, a full day with Alghero",
        "consiglio": "Choose the stairs or the boat according to the sea: if it is rough the grotto may be closed."
      },
      {
        "nome": "Porto Flavia and the Piscinas dunes",
        "testo": "In the Sulcis-Iglesiente, the disused mines form a geo-mining landscape. Porto Flavia is a port dug into the Masua cliff to load minerals onto ships. At Piscinas, on the Costa Verde, the dunes are among the highest in Europe.",
        "come": "By car from Iglesias: Masua is 25 minutes away; Piscinas 40, with a stretch of dirt road. Porto Flavia is visited by booking and with a guide.",
        "quando": "Spring and autumn. In summer the dunes are scorching.",
        "tempo": "Half a day each",
        "consiglio": "Visit the dunes at the end of the day, when the sand has lost its heat."
      }
    ],
    programmi: [
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Cala Gonone, rubber-boat trip in the Gulf of Orosei.",
          "Day 2: Gorropu Gorge in the morning, Oliena and Orgosolo in the afternoon.",
          "Day 3: Cala Goloritzé on foot from the Golgo, booked."
        ]
      },
      {
        "titolo": "5 days",
        "tappe": [
          "Day 1: arrive in Olbia, ferry from Palau to La Maddalena and a boat trip.",
          "Day 2: from Palau toward Alghero along the coast.",
          "Day 3: Alghero, ramparts and Neptune's Grotto.",
          "Day 4: La Pelosa at Stintino, then toward the center of the island.",
          "Day 5: Su Nuraxi di Barumini and back to Cagliari."
        ]
      },
      {
        "titolo": "7 days",
        "tappe": [
          "Day 1: Cagliari and Su Nuraxi di Barumini.",
          "Day 2: Barbagia, Oliena and Orgosolo.",
          "Day 3: Gorropu.",
          "Day 4: Gulf of Orosei by boat.",
          "Day 5: Cala Goloritzé.",
          "Day 6: Alghero and Neptune's Grotto.",
          "Day 7: Stintino and La Pelosa, flight from Alghero."
        ]
      }
    ],
    zone: [
      {
        "nome": "Northeast: Palau and La Maddalena",
        "perChi": "Those who want sea and the archipelago",
        "testo": "Base for the islands and the beaches of Gallura. The Costa Smeralda is close and expensive. Frequent ferries to La Maddalena. Very crowded in high season."
      },
      {
        "nome": "Center-east: Cala Gonone, Dorgali, Baunei",
        "perChi": "Those who want coves and trekking",
        "testo": "Base for the Gulf of Orosei, Gorropu and Goloritzé. Long, winding roads; the inland villages have agriturismi with excellent value."
      },
      {
        "nome": "Northwest: Alghero and Stintino",
        "perChi": "Those who want a town and beaches",
        "testo": "Alghero has a lively center and the airport; Stintino is an hour away, near La Pelosa. With the mistral the sea changes from one side to the other."
      },
      {
        "nome": "Southwest: Sulcis and Costa Verde",
        "perChi": "Those looking for less-visited beaches",
        "testo": "Almost empty beaches and dunes, mines, Carloforte. Farther from everything, you need a car and a few extra days."
      }
    ],
    sapori: [
      {
        "nome": "Porceddu",
        "testo": "Roast suckling pig on the spit, with crisp skin and a scent of myrtle. It is the dish of feasts and agriturismo lunches."
      },
      {
        "nome": "Culurgiones",
        "testo": "Ogliastra ravioli with potato, mint and pecorino, sealed in a wheat-ear pattern. Dressed with tomato sauce."
      },
      {
        "nome": "Pane carasau",
        "testo": "Thin, crisp shepherd's bread, eaten with oil or as the base of «pane guttiau»."
      },
      {
        "nome": "Pecorino sardo and fiore sardo",
        "testo": "Sheep's cheeses at every stage of aging, the fiore sardo also smoked. Buy them from the producers."
      },
      {
        "nome": "Cannonau and Vermentino",
        "testo": "Cannonau is the signature red, from the vineyards of Oliena and Jerzu. Vermentino di Gallura is the island's only DOCG."
      },
      {
        "nome": "Mirto",
        "testo": "The berry liqueur, drunk cold at the end of a meal. The home-made kind is sweeter."
      }
    ],
    attenzioni: [
      "Several beaches and coves have capped access with paid booking (La Pelosa, Cala Goloritzé and some in the Gulf of Orosei): check and book first, without it you do not get in.",
      "Taking away sand, pebbles and shells is forbidden: fines are heavy and there are checks at ports and airports.",
      "Car ferries for summer are booked months ahead and prices rise in July and August.",
      "Treks such as Gorropu and Goloritzé: it is hot in summer, you need plenty of water, proper shoes, and after storms the streams can block the way.",
      "Summer fires: open flames and barbecues are banned in the scrub, and roads can close. Respect the municipalities' bans.",
      "Narrow, winding inland roads with sheep and blind bends: halve the speed your navigator suggests and fill up before entering the Supramonte."
    ],
    esperienzeSlugs: ['gorropu', 'cala-goloritze'],
    tripSlugs: ['sardegna-due-anime'],
    imageAlt: "The Costa Smeralda seen from above with Mediterranean scrub, inlets and islands in the background, Sardinia",
    immagine: '/images/italia/sardegna.jpg',
  },
  {
    slug: 'isole-minori',
    paeseSlug: 'italia',
    ordine: 10,
    nome: "The Smaller Islands",
    tipologia: ['isole', 'mare', 'natura'],
    giorniConsigliati: "4-7 days per archipelago",
    visitataPersonalmente: true,
    introduzione:
      "Besides the two big ones, Italy has some sixty inhabited islands spread over eight archipelagos, and each is a world of its own: active volcanoes in the Aeolians, black rock and bush-trained vines in Pantelleria, tuff and caves in the Pontine Islands, the seabed of the Tremiti in the only marine park of the Adriatic.",
    percheAndarci:
      "They've kept a scale the mainland coast has lost: you get around on foot or by boat, few people live there in low season and several are still car-free. Each has a character all its own, and choosing them at random is the best way to end up in the wrong place.",
    cosaVedere: [
      "Stromboli, with the eruption visible from the sea or from the viewing point, and the Sciara del Fuoco",
      "Salina, Filicudi and Alicudi, the Aeolians that aren't Lipari and Panarea",
      "Pantelleria, with the dammusi, the Pantesco gardens and Lake Specchio di Venere",
      "Capri with the Faraglioni and the Blue Grotto, Ischia with its natural hot springs, Procida with Marina Corricella",
      "Ponza and Palmarola, with colored tuff and sea caves",
      "The Tremiti, the only archipelago in the Adriatic, with the seabed of the protected marine area",
      "Elba and the Tuscan Archipelago, the largest marine park in Europe",
      "Lampedusa with the Spiaggia dei Conigli, and Favignana with the tuff quarries and the tonnara",
    ],
    cosaFare: [
      "Climbing to see Stromboli's activity, with a guide mandatory beyond a certain altitude",
      "Diving or snorkeling at the Tremiti and Ustica, the first marine protected area established in Italy",
      "A night swim in Lake Specchio di Venere in Pantelleria, with the thermal mud",
      "Going around an island by boat, which on the smaller islands is almost always the best way to see it",
    ],
    doveDormire:
      "On the smaller islands the supply is necessarily limited and sells out in high season: you book months ahead for July and August. The dammusi in Pantelleria, the Aeolian houses in Salina and the alberghi diffusi (scattered hotels) are the formulas most in keeping with the places.",
    doveMangiare:
      "Each archipelago has its own identity: capers, malvasia and blue fish in the Aeolians; capers, passito and Pantesco pesto in Pantelleria; rabbit alla ischitana on Ischia, a land dish on an island; fish and tuna in all its preserves on Favignana. The general rule is that on the smaller islands **fish is expensive and land cooking is cheap and often better**.",
    comeArrivare:
      "Ferries and hydrofoils from mainland ports, with **frequencies that collapse in low season** and runs that get canceled in rough seas: it's the variable that conditions everything. Pantelleria and Lampedusa have airports; Elba does too, but with few connections.",
    comeSpostarsi:
      "On foot, by scooter, by boat. **Several islands limit or ban cars from landing in summer** and on some (Panarea, Alicudi, Filicudi) there are almost no cars. Bringing your own vehicle is almost always pointless and often impossible.",
    periodoMigliore:
      "June and September are the ideal window: warm sea, full connections, prices not yet out of scale. **July and August are to be avoided** everywhere on the smaller islands: supply is saturated, prices multiply and already-small places fill up. From November to March many islands almost completely shut down, with reduced ferries and closed lodgings.",
    costi:
      "Ferries weigh more than you'd think, and with a car in tow they double. In high season, lodging on the best-known islands (Capri, Panarea, Ponza) reaches the prices of a European capital.",
    erroriDaEvitare: [
      "Planning tight ferry connections: **in rough seas runs get canceled**, and being stuck an extra day is the rule",
      "Choosing the island by reputation instead of character: Capri and Panarea in August are glamorous and extremely crowded, and anyone looking for peace has the wrong address",
      "Bringing the car: almost always useless, often banned, always expensive",
      "Going in low season without checking what's open: from November to March several islands have two restaurants and a ferry now and then",
      "Underestimating water: many smaller islands have water problems and water arrives by tanker ship, so it must be used without waste",
    ],
    confronti: [
      {
        titolo: "Which Italian archipelago to choose",
        introduzione:
          "Italy's smaller islands are often treated as a single block, while in geology, character, prices and crowds they're separate worlds. Here's how they break down.",
        opzioni: [
          {
            nome: "Aeolian Islands (Sicily)",
            sintesi: "Seven volcanic islands north of Sicily, a UNESCO site, with two active volcanoes: Stromboli, which erupts continuously, and Vulcano.",
            costo: "medium-high, with Panarea out of scale and Alicudi and Filicudi very cheap",
            durata: "5-7 days to do at least three",
            pro: [
              "Two active volcanoes: Stromboli is one of the few in the world in permanent eruption and can be seen from the sea at night",
              "The seven islands are very different from one another: you can go from glamorous Panarea to Alicudi, where there are no roads and you get around on foot or with mules",
              "Frequent inter-island connections in high season",
              "Capers, malvasia and a strong island cuisine",
            ],
            contro: [
              "Extremely crowded in July and August, with Panarea and Lipari saturated",
              "Connections depend on the sea: with a libeccio wind you stay put",
              "In winter life shrinks to the minimum",
            ],
            perChi: "Those who want volcanoes and variety, and those willing to move between several islands in one trip.",
          },
          {
            nome: "Pantelleria",
            sintesi: "A volcanic island closer to Africa than to Sicily, with no sand beaches, with lava-stone dammusi and bush-trained vines recognized as UNESCO intangible heritage.",
            costo: "medium-high, but without mass tourism",
            durata: "5-7 days",
            pro: [
              "It looks like no other Italian island: black rock, constant wind, terraces and Pantesco gardens (the circular walls that protect a single tree)",
              "Lake Specchio di Venere, with thermal mud, and the natural steam caves",
              "Passito and capers of the highest level",
              "Less mass tourism, with a clientele that comes back",
            ],
            contro: [
              "No sand beaches: you enter the water from the rocks, and it's not for everyone",
              "Wind is a constant and can be strong",
              "You need a car, and connections from the mainland are less frequent",
            ],
            perChi: "Those seeking an island of character rather than beaches, and those who love wine.",
          },
          {
            nome: "Gulf of Naples: Capri, Ischia, Procida",
            sintesi: "Three islands very close to one another and completely different: Capri vertical and glamorous, Ischia thermal and large, Procida small and colorful.",
            costo: "from very high (Capri) to moderate (Procida)",
            durata: "3-5 days",
            pro: [
              "Accessibility: you reach them in under an hour from Naples, even as a day trip",
              "Ischia has natural hot springs, with sources already used by the Greeks",
              "Procida has remained a fishing village and is the most authentic of the three",
              "Capri off-season, without the day-trippers, is a different island",
            ],
            contro: [
              "Capri in high season is unlivable and very expensive: tens of thousands of day visitors arrive",
              "Ischia is large and partly heavily built up",
              "Little sense of a remote island: they're in sight of the mainland",
            ],
            perChi: "Those already in Naples, those with few days, those looking for hot springs (Ischia).",
          },
          {
            nome: "Pontine Islands: Ponza and Palmarola",
            sintesi: "Islands of colored tuff halfway between Rome and Naples, with cliffs, sea caves and a sea that competes with the best of the Tyrrhenian.",
            costo: "high in high season, above all because of the Roman crowds that fill them",
            durata: "4-5 days",
            pro: [
              "The yellow and red tuff creates a unique coastline, with caves and natural arches",
              "Palmarola, uninhabited, is considered by many the most beautiful island in the Tyrrhenian",
              "Very close to Rome: you can reach them in a day",
            ],
            contro: [
              "In August they're Rome's seaside, and you feel it: extremely crowded and expensive",
              "Limited services and few lodgings",
              "Off-season connections shrink a lot",
            ],
            perChi: "Those coming from central Italy who want an exceptional sea without going to Sicily.",
          },
          {
            nome: "Tremiti and the Tuscan Archipelago",
            sintesi: "The Tremiti, the only archipelago in the Adriatic and a protected marine area; the Tuscan Archipelago with Elba, the largest marine park in Europe.",
            costo: "medium, quite a bit lower than the southern Tyrrhenian",
            durata: "3-5 days",
            pro: [
              "The Tremiti have the best seabed in the Adriatic and are tiny: you get around on foot",
              "Elba combines sea, mountains (Monte Capanne), Napoleonic history and mines",
              "More moderate prices and mostly Italian tourism",
              "Great for diving and snorkeling",
            ],
            contro: [
              "Sea less spectacular than the southern Tyrrhenian",
              "The Tremiti in August are tiny and crowded",
              "Elba is large and partly heavily built up",
            ],
            perChi: "Those coming from the center-north, divers, families, those who want to spend less.",
          },
        ],
        raccomandazione:
          "For variety and character, **the Aeolians** remain the strongest choice, as long as you go in June or September and include at least one smaller island like Salina or Filicudi. **Pantelleria** if you're after an island that looks like nothing else and don't need sand. **Procida** if you're in Naples and short on time. And one rule applies to all: in August, on Italy's smaller islands, you pay triple to be among triple the people.",
      },
    ],
    miaEsperienza:
      "On the smaller islands, going in June or in August means finding two different places: they're small, with a finite number of beds, restaurants and boats, and when the August load arrives they stop working the way they do the rest of the year. Of them all, the strongest memory is Stromboli seen from the sea at night: you sit on a boat with the engine off in front of the Sciara del Fuoco, in the dark, and every few minutes the crater spits incandescent material that rolls down the slope to the water. No special effects: it's a volcano doing what it has done for millennia, with an inhabited village below. The other surprise is Pantelleria, the Italian anti-island: no sand, wind always, black rock, and a viticulture in which the vines are grown in pits dug into the ground to protect them from the wind, a technique declared intangible heritage by UNESCO. You go there to understand what it means to grow something in a hostile place.",
    luoghi: [
      {
        "nome": "Stromboli",
        "testo": "A volcano island with near-continuous eruptions from the crater, visible roughly every 10-20 minutes. Below the Sciara del Fuoco sits the village, with few inhabitants. The strongest memory for me was seeing it from the sea at night, engine off in front of the Sciara, as the crater throws incandescent material down to the water.",
        "come": "Hydrofoil from Milazzo (about 2.5 hours) or from Lipari and the other Aeolians. On the island you walk and use ape-taxis. Above the free-access altitude you need authorized volcano guides.",
        "quando": "The climb is regulated by ordinances that change with the volcano's activity: check the maximum altitude and the guide requirement with the Comune di Lipari or the authorized guides before booking. The summit has been closed to visitors since the 2019 eruptions. June and September, in calm seas, for boat trips.",
        "tempo": "1 full day, better one night",
        "consiglio": "In the evening have dinner on Stromboli and go out by boat in the dark: you do not need the summit to see the explosions. Headlamp, hiking shoes and a sweater even in September."
      },
      {
        "nome": "Salina",
        "testo": "The second largest of the Aeolian Islands, two twin volcanic cones covered in green, with malvasia vineyards and capers. It has villages like Malfa and Pollara, where 'Il postino' was filmed, and trails on Monte Fossa delle Felci.",
        "come": "Hydrofoil from Milazzo or Lipari; in high season landings at Santa Marina and Rinella. On the island there are few buses and a scooter is best.",
        "quando": "June and September. In summer the sunset from Pollara is crowded; better early morning.",
        "tempo": "1-2 days",
        "consiglio": "Try the sunset from Pollara and the malvasia passito at a winery. In August connections are full."
      },
      {
        "nome": "Lago Specchio di Venere, Pantelleria",
        "testo": "A thermal lake in the crater of an extinct volcano, with warm water on the shore and mud used for baths. From above it is heart-shaped, just above the road to Bukkuram. Pantelleria is closer to Africa than to Sicily: black rock, wind and bush vines grown in pits dug in the ground, a technique recognized by UNESCO.",
        "come": "You need a car or scooter from Pantelleria town. You arrive by flight from Trapani, Palermo or Catania, or by Siremar ferry from Trapani (about 6-7 hours, services are cancelled in rough seas) or Liberty Lines hydrofoil (about 2.5 hours).",
        "quando": "Spring and autumn for walking, June and September for swimming. The island is very windy. The mud and swim in the lake are nicer in the morning.",
        "tempo": "2-3 hours",
        "consiglio": "If you do the mud bath, take off jewelry and rinse in the lake before leaving. Bring rock shoes: there are no sand beaches."
      },
      {
        "nome": "Dammusi, Pantelleria gardens and Montagna Grande",
        "testo": "Dammusi are domed lava-stone houses built to resist wind and heat. Pantelleria gardens are circular stone walls protecting a single citrus tree. Montagna Grande is the island's peak, 836 meters, with trails in the woods.",
        "come": "Inland roads to drive by car or scooter. Trails start from the road to Montagna Grande.",
        "quando": "Spring and autumn. Summer is scorching by day and sirocco days make trails difficult.",
        "tempo": "half a day",
        "consiglio": "The local wineries do passito tastings: book. Bush vines are seen mostly in the south."
      },
      {
        "nome": "Capri: Faraglioni and the Blue Grotto",
        "testo": "The three Faraglioni are rocks over 100 meters high to the south-east, best seen from a boat. The Blue Grotto is visited in small rowing boats from Marina Grande but stays closed in rough seas. In summer Capri is overrun by day-trippers.",
        "come": "Hydrofoil or ferry from Naples (40-80 minutes) and from Sorrento. On the island you go by bus and funicular, then walk.",
        "quando": "May, June and September; off season Capri is another island. The Blue Grotto can be visited in calm seas, early morning.",
        "tempo": "1 day, better 2 with a night",
        "consiglio": "To escape the crowd, go around the island by boat early in the morning and then go up to Anacapri. In the afternoon the Faraglioni are better in backlight."
      },
      {
        "nome": "Procida: Marina Corricella and Terra Murata",
        "testo": "The smallest and least expensive of the three islands in the Gulf of Naples. Marina Corricella is a fishermen's harbor with painted houses, Terra Murata the upper village with the abbey of San Michele Arcangelo.",
        "come": "Ferry or hydrofoil from Naples (Molo Beverello and Calata Porta di Massa) or from Pozzuoli, about 40 minutes. On the island you walk and minibuses run.",
        "quando": "All year, but from May to September. In July and August day boats bring many people.",
        "tempo": "1 day",
        "consiglio": "Go down to Corricella by the stairway and eat in one of the places on the quay."
      },
      {
        "nome": "Ponza and Palmarola",
        "testo": "Ponza is an island of yellow tuff, with caves and coves. Palmarola, uninhabited, has cliffs and natural arches, and is reached by fishermen's boats from Ponza. The sea is among the clearest of the Tyrrhenian.",
        "come": "Ferry or hydrofoil from Anzio, Formia, Terracina (1 to 2.5 hours). On the island you walk or take the bus; the boat tour is booked at the port.",
        "quando": "June and September. In August Ponza fills up with the Rome crowd.",
        "tempo": "1-2 days",
        "consiglio": "The boat tour is the best way: leave early and stop for a swim at Palmarola. Chiaia di Luna is often closed because of landslide risk."
      },
      {
        "nome": "Tremiti Islands",
        "testo": "The only archipelago in the Adriatic, with San Domino and San Nicola and a marine protected area. San Domino has pine woods, coves and caves. San Nicola has the fortified abbey with a 360-degree view.",
        "come": "Ferries and hydrofoils from Termoli, Vieste, Peschici, Rodi Garganico, Ortona. From Termoli about 1 hour by hydrofoil.",
        "quando": "June and September. In winter connections are reduced.",
        "tempo": "1-2 days",
        "consiglio": "Snorkel with a local operator: the area is protected and boat access is regulated."
      },
      {
        "nome": "Favignana",
        "testo": "An island of the Egadi, flat in the east, with tuff quarries and the large former Florio plant for processing tuna. The island has turquoise sea at Cala Rossa and Lido Burrone.",
        "come": "Hydrofoil from Trapani (about 25 minutes) or from Marsala. On the island you rent a bike: distances are under six kilometers.",
        "quando": "May, June and September. Early in the morning the coves are empty.",
        "tempo": "1 day",
        "consiglio": "Bike tour of the quarries, then a tuna dinner. Book the bike in high season."
      }
    ],
    programmi: [
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: hydrofoil from Milazzo, arrival at Salina, tour and sunset at Pollara",
          "Day 2: transfer to Stromboli, dinner on the island",
          "Day 3: boat trip towards the Sciara del Fuoco in the dark"
        ]
      },
      {
        "titolo": "4 days",
        "tappe": [
          "Days 1-2: Capri and Procida from the Gulf of Naples",
          "Days 3-4: Ponza and Palmarola with a boat tour"
        ]
      }
    ],
    zone: [
      {
        "nome": "Aeolians: Salina, Lipari or Stromboli",
        "perChi": "those who want several islands in one trip",
        "testo": "Salina is green and quiet, Lipari the most convenient, Stromboli small and spartan. Services depend on the sea and are often cancelled."
      },
      {
        "nome": "Pantelleria",
        "perChi": "those looking for an island of character without sand",
        "testo": "You sleep in dammusi, you need a car. The wind is constant and connection times change with the weather."
      },
      {
        "nome": "Gulf of Naples: Procida",
        "perChi": "those with few days",
        "testo": "Procida costs less than Capri and Ischia, village life, 40 minutes from Naples."
      }
    ],
    sapori: [
      {
        "nome": "Pane cunzato and capers, Aeolians",
        "testo": "Bread dressed with tomato, anchovies, capers, oregano and cheese. The capers of Salina are a Slow Food presidium."
      },
      {
        "nome": "Malvasia delle Lipari",
        "testo": "Sweet white wine from dried grapes, the Malvasia of Salina and Lipari. Drunk at the end of the meal."
      },
      {
        "nome": "Passito di Pantelleria",
        "testo": "Sweet wine from zibibbo grapes grown as bush vines, UNESCO heritage. Tasted in the local wineries, by booking."
      },
      {
        "nome": "Ischia-style rabbit",
        "testo": "A land dish from Ischia: rabbit in a casserole with tomato, garlic and wine. Eaten in the country trattorias."
      },
      {
        "nome": "Favignana tuna",
        "testo": "Bluefin tuna processed for generations in the Florio plant. Tinned or fresh in the harbor restaurants."
      },
      {
        "nome": "Land cooking",
        "testo": "On the minor islands fish is expensive and land cooking is cheap and often better."
      }
    ],
    attenzioni: [
      "In July and August the minor islands are saturated and prices multiply: book lodging and ferries months ahead or go in June and September.",
      "Rough seas block hydrofoils and ferries: do not plan tight connections with flights or trains on the same day.",
      "Stromboli: the climb to the crater is allowed only with authorized guides and up to the altitude set by ordinance, which changes. Anyone who climbs alone risks fines and danger.",
      "Many islands limit or ban cars landing in summer: bringing the car is almost always pointless and expensive.",
      "Fresh water is scarce and arrives by tanker ships: use it sparingly.",
      "Off season (November-March) many businesses are closed and connections reduced: check what is open before leaving."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['eolie-in-vela', 'isole-siciliane', 'costiera-e-isole'],
    imageAlt: "The Isola dei Conigli in Lampedusa surrounded by clear turquoise water",
    immagine: '/images/italia/isole-minori.jpg',
  },
  {
    slug: 'italia-inesplorata',
    paeseSlug: 'italia',
    ordine: 11,
    nome: "Unexplored Italy",
    tipologia: ['borghi', 'natura', 'cammini'],
    giorniConsigliati: "4-7 days per area",
    visitataPersonalmente: true,
    introduzione:
      "The country has fifty-nine UNESCO sites and millions of visitors concentrated on about ten places. Meanwhile there are entire regions where tourism never arrived: Molise, which became a meme for exactly that reason, the Lucanian Apennines, the mountains of Friuli, the Sibillini, the Calabrian interior. These are the areas where Italy still costs what it cost twenty years ago.",
    percheAndarci:
      "It's the only part of the country where you can walk an entire day without meeting anyone, eat with twenty euros and talk with the people who live there instead of those who work there. And many of these places are being depopulated: either you see them now or you don't see them anymore.",
    cosaVedere: [
      "Molise: Campobasso and Isernia, the tratturi of the transhumance (UNESCO intangible heritage), Pietrabbondante with its Samnite theater, the coast of Termoli",
      "The Lucanian Apennines and the Pollino, the largest national park in Italy, with its Bosnian pines (pini loricati)",
      "The Sibillini Mountains and the Marche interior, with villages rebuilt after the 2016 earthquake",
      "Carnia and the Natisone Valleys in Friuli, with stone houses and a Slovenian and Germanic border culture",
      "Aspromonte and Greek Calabria, where Grecanico is still spoken",
      "Val Grande in Piedmont, the largest wilderness area in Italy: no roads, no inhabited villages",
      "The inland Cilento, with its villages and the Vallo di Diano, and the Murge with the gravine",
      "The walking routes: the Via degli Dei, the Cammino di San Benedetto, the Via Francigena in the south",
    ],
    cosaFare: [
      "Walking a stretch of the Via degli Dei or another route, sleeping in hostels and parishes (see the dedicated experience page)",
      "Village patron-saint festivals, which in inland Italy remain the main event of the year",
      "Eating in a village trattoria with no menu, where you ask what there is",
      "Walking a stretch of tratturo, the grassy tracks a hundred meters wide on which flocks have moved for centuries",
    ],
    doveDormire:
      "Agriturismi, alberghi diffusi (a formula born in Friuli and spread to depopulating villages) and family B&Bs. Prices are those that no longer exist in the rest of Italy: fifty to seventy euros for two people with breakfast is the norm.",
    doveMangiare:
      "It's the best part. In inland Italy the cuisine is still tied to the land and the seasons, something that elsewhere has become a slogan: handmade pasta with a different name every twenty kilometers, locally raised meats, cheeses from small producers, wild greens. **A full meal with wine runs between twenty and thirty euros**, and often there's no written menu. The flip side: outside meal hours you don't eat, and on Sunday evening and Monday many places are closed.",
    comeArrivare:
      "**A car is a must, no exceptions.** Regional trains reach the provincial capitals and everything stops there; intercity buses have runs designed for students, so two in the morning and two in the afternoon, and nothing on weekends.",
    comeSpostarsi:
      "You need your own car. The interior roads are narrow, winding and in places in poor condition: add a third to the times maps estimate. Fuel in small villages may not be available: fill up when you can, not when you need to.",
    periodoMigliore:
      "May-June and September-October. Summer in the inland center-south is scorching; winter in the Apennines brings snow and closed roads, with several villages going into hibernation. Patron-saint festivals cluster between June and September and that's when the villages fill up again, because the emigrants come back.",
    costi:
      "It's the part of Italy where you spend the least, by far. Admission almost everywhere free or symbolic, lodging and restaurants at prices that no longer exist on the coast or in the cities.",
    erroriDaEvitare: [
      "Counting on public transport: here it's no use",
      "Arriving in a village at three in the afternoon and looking for food: in inland Italy you eat between twelve thirty and two, and then they close",
      "Taking connectivity for granted: in many inland valleys there's no signal, and offline maps are a serious precaution",
      "Underestimating distances and roads: sixty kilometers of inland state road can mean two hours",
      "Expecting tourist services: here there are no information offices, audio guides or signs in English, and that is exactly the appeal",
      "Going in August expecting it to be empty: in August the villages fill with those who emigrated and come back, and it's the liveliest time of the year, beautiful but not quiet",
    ],
    confronti: [
      {
        titolo: "Where nobody goes: five off-route Italys",
        introduzione:
          "Little-visited areas aren't all alike: some are remote because of geography, others because of depopulation, others because they never had an image to sell. They vary quite a bit in accessibility, landscape and what you find there.",
        opzioni: [
          {
            nome: "Molise",
            sintesi: "The smallest and least-visited region in Italy, with the transhumance tratturi, Samnite sites, a stretch of Apennines and sixty kilometers of coast.",
            costo: "the lowest in Italy",
            durata: "4-5 days",
            pro: [
              "The tratturi, grassy tracks up to a hundred meters wide on which flocks moved for centuries: transhumance is UNESCO intangible heritage",
              "Pietrabbondante, with a second-century BC Samnite theater in a spectacular setting and nobody around",
              "Prices and hospitality of an Italy that no longer exists elsewhere",
              "Accessible: it's two hours from Rome and Naples",
            ],
            contro: [
              "It has no postcard \"star attraction\", which is the reason nobody goes",
              "Tourist services almost nonexistent",
              "You need a car and you need to accept that the schedule will be thin",
            ],
            perChi: "Those who want Italy unfiltered and don't need famous monuments.",
          },
          {
            nome: "Lucanian Apennines and Pollino",
            sintesi: "The largest national park in Italy, straddling Basilicata and Calabria, with Bosnian pines (pini loricati) and the Albanian-speaking Arbëreshë villages.",
            costo: "very low",
            durata: "5-7 days",
            pro: [
              "Serious, little-visited mountains, with peaks above two thousand meters",
              "The pini loricati, which grow only here and in the Balkans, clinging to the rocks",
              "The Arbëreshë villages, founded by Albanian refugees in the fifteenth century, where their own language is still spoken",
              "Close to Matera, which can be added",
            ],
            contro: [
              "Long, slow roads, distances you feel",
              "Trails less maintained than in the Alps",
              "Very few services at altitude",
            ],
            perChi: "Those who hike and want mountains without crowds, and those interested in linguistic minorities.",
          },
          {
            nome: "Carnia and the Natisone Valleys (Friuli)",
            sintesi: "The mountains of Friuli, with a border culture among Italian, Friulian, Slovenian and German, and the sites of the Great War.",
            costo: "low by Alpine standards",
            durata: "4-6 days",
            pro: [
              "Alps without the Alpine prices and crowds",
              "Cultural layers you don't find elsewhere, with four languages in a few valleys",
              "The sites of the Great War, from Monte Cavallo to the trenches",
              "Mountain cooking with frico, alpine-pasture cheese and Friulian wines a short distance away",
            ],
            contro: ["Rainy climate: Friuli is among the rainiest areas of Italy", "Distances from the big cities", "Some passes closed in winter"],
            perChi: "Those who love the mountains but don't want to pay Dolomites prices, and those interested in border history.",
          },
          {
            nome: "Val Grande (Piedmont)",
            sintesi: "The largest wilderness area in Italy, between Lake Maggiore and Switzerland: no roads, no inhabited villages, abandoned alpine pastures reclaimed by the forest.",
            costo: "low, but it requires self-sufficiency",
            durata: "2-4 days of trekking",
            pro: [
              "It's the only place in Italy where you can walk for days without meeting anyone and without roads",
              "Very close to Lake Maggiore, so easy to reach",
              "History of the partisan resistance and of mountain abandonment",
            ],
            contro: [
              "**Not for beginners**: poorly marked trails, basic bivouacs, no serviced huts, no phone signal",
              "Complete self-sufficiency needed: water, food, navigation",
              "Every year there are rescue call-outs for people who underestimated it",
            ],
            perChi: "Experienced, self-reliant hikers. It's not a stroll and shouldn't be treated as one.",
          },
          {
            nome: "Aspromonte and Greek Calabria",
            sintesi: "The tip of the peninsula, with Aspromonte National Park, abandoned villages like Pentedattilo and Roghudi, and communities where Grecanico is still spoken.",
            costo: "very low",
            durata: "5-7 days",
            pro: [
              "Grecanico, a Greek language that survived from antiquity, still spoken by a few hundred people",
              "Spectacular abandoned villages, emptied by landslides and floods and left where they were",
              "A landscape that goes from the sea to eighteen hundred meters in twenty kilometers",
              "The Riace Bronzes in Reggio, among the few original Greek bronzes in the world",
            ],
            contro: [
              "Very slow interior roads, in poor condition in places",
              "Minimal tourist services",
              "Scorching summer on the coast",
            ],
            perChi: "Those who want to push to where Italy ends, and those interested in endangered cultures.",
          },
        ],
        raccomandazione:
          "The most accessible and least demanding is **Molise**, two hours from Rome, which asks nothing of you. For the mountains, **Carnia** in the north and **Pollino** in the south, both at a fraction of the price of the famous Alps. **Val Grande** only for those who hike seriously and are self-reliant. **Aspromonte** is the farthest and the most surprising, but you have to factor in a long trip. And one thing holds for all of them: here a car is indispensable.",
      },
    ],
    miaEsperienza:
      "In unexplored Italy you grasp how concentrated tourism is in this country: fifty million people a year spread over about ten cities and coasts, and two hours from those same cities there are valleys where you walk half a day without meeting anyone. More than the scenery, beautiful but not extraordinary compared with the Alps, what stands out is the relationship with the people who live there. In a village of three hundred inhabitants in the Apennines nobody tries to sell you anything, because there's no market: they ask where you're from, and the answer interests them. You eat in trattorias with no menu where you ask what there is and three courses arrive for twenty-five euros with the house wine. The flip side you need to know: there are no flexible hours, no connection, no information office, and anyone arriving at three in the afternoon looking for lunch finds everything closed. And you can't ignore why these places are empty: they're being depopulated. There are villages with more empty houses than occupied ones and an average age above sixty. Seeing them now means seeing them while they're still there.",
    luoghi: [
      {
        "nome": "Pietrabbondante and Samnite Molise",
        "testo": "The Samnite sanctuary of Pietrabbondante, at about 1,000 meters in Alto Molise, has a theater-temple from the second century BC with stone seats and the main temple. Around it stretch empty hills crossed by the tratturi, the transhumance routes recognized by UNESCO.",
        "come": "By car: about 45 minutes from Isernia, 1.5 hours from Campobasso. No useful public transport. You visit on your own, with panels.",
        "quando": "Spring and autumn. Check opening hours and days with the town hall or the Soprintendenza before leaving, especially off season.",
        "tempo": "1-2 hours, plus a tour of the villages",
        "consiglio": "Combine the visit with lunch in a village trattoria: 12.30-2, then they close."
      },
      {
        "nome": "Termoli",
        "testo": "A small seaside town with the old village on the promontory, the Swabian castle and the trabucchi, the ancient fishing machines on stilts. It is the port from which ferries leave for the Tremiti Islands.",
        "come": "Train on the Adriatic line or A14 motorway. The old village is 15 minutes on foot from the station.",
        "quando": "May-June and September. In August it fills with Italian holidaymakers.",
        "tempo": "half a day",
        "consiglio": "Eat brodetto alla termolese in one of the places at the port, and walk the seafront at sunset."
      },
      {
        "nome": "Pollino National Park",
        "testo": "The largest park in Italy, between Basilicata and Calabria, with peaks over 2,000 meters and Bosnian pines, centuries-old trees that grow at high altitude only here and in a few places in the Balkans. Trails start from the passes of Colle Impiso and Piano di Ruggio.",
        "come": "By car only. From Terranova di Pollino or San Severino Lucano. Navigate with a map or trail app; mountain shoes needed.",
        "quando": "June-September for the altitude, October for the colors. From November to May snow and closed roads.",
        "tempo": "1-2 days",
        "consiglio": "Fill the tank and bring food: in mountain villages shops close early. The weather changes fast above 1,800 meters."
      },
      {
        "nome": "Sibillini Mountains and Castelluccio di Norcia",
        "testo": "A park with peaks over 2,000 meters and the Piano Grande plateau of Castelluccio, known for the flowering of lentils and wild flowers. The 2016 earthquake hit many villages: today they are partly rebuilt.",
        "come": "By car from Norcia (about 40 minutes) or from the Marche. Some roads may be closed because of landslides or works: check.",
        "quando": "The flowering concentrates between late May and July. On flowering weekends the Piano fills up with cars.",
        "tempo": "1 day",
        "url": "https://www.sibillini.net/",
        "consiglio": "Visit on a weekday and early in the morning for the best light, and do not walk among the flowering fields."
      },
      {
        "nome": "Carnia and the Friuli valleys",
        "testo": "Alpine valleys with stone houses, villages like Sauris and Forni di Sopra and a border culture between Friulian, German and Slovenian. The albergo diffuso was born here, using the houses of emptied villages.",
        "come": "By car from Udine towards Tolmezzo (about 1 hour). The valleys are toured by car and short walks.",
        "quando": "June-September for trails, winter for snow. Friuli is among the rainiest areas of Italy.",
        "tempo": "2-3 days",
        "consiglio": "Try Sauris ham and mountain-pasture cheese, and ask the tourist office about trails."
      },
      {
        "nome": "Val Grande",
        "testo": "The largest wilderness area in Italy, with no roads or inhabited villages, between Lake Maggiore and Switzerland. There are abandoned alpine pastures retaken by the forest and poorly marked trails. Not for beginners.",
        "come": "Access starts from Cicogna, Premosello and the Val d'Ossola. You need self-sufficiency, maps and water: the bivouacs are essential and there is no signal.",
        "quando": "Late spring to autumn. After rain the trails can be impassable.",
        "tempo": "2-4 days of trekking",
        "url": "https://www.parcovalgrande.it/",
        "consiglio": "Ask the park authority for information before leaving and tell someone your route. Every year there are rescues for those who underestimate the area."
      },
      {
        "nome": "Aspromonte and Pentedattilo",
        "testo": "A national park that goes from the sea to 1,900 meters in a few kilometers. Pentedattilo is a ghost village at the foot of a hand-shaped rock; Roghudi and Gallicianò are Greek-speaking communities where ancient Greek is still spoken.",
        "come": "By car from Reggio Calabria (about 1 hour). Inland roads are slow and in places in poor condition.",
        "quando": "Spring and autumn. Summer is scorching on the coast.",
        "tempo": "2-3 days",
        "consiglio": "At the Archaeological Museum of Reggio Calabria you see the Riace Bronzes: do it on the day of arrival or departure."
      },
      {
        "nome": "Via degli Dei",
        "testo": "A walk of about 130 km from Bologna to Florence following the ancient Roman road across the Apennines. You sleep in hostels and guesthouses and walk 4-5 days, with climbs and stairways.",
        "come": "Train to Bologna for the start, return by train from Florence. The route is marked; hostels to be booked.",
        "quando": "April-June and September-October. In summer the heat and in winter the mud.",
        "tempo": "4-5 days",
        "consiglio": "Book beds in advance and carry little weight: the stages are long."
      }
    ],
    programmi: [
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Pietrabbondante and lunch in a village trattoria",
          "Day 1 evening: Isernia or an agriturismo",
          "Day 2: Termoli, old village and trabucchi, then the sea"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Pollino, trail to the Bosnian pines",
          "Day 2: Lucanian villages and dinner in a trattoria",
          "Day 3: Castelluccio or Aspromonte, depending on the direction of the trip"
        ]
      }
    ],
    zone: [
      {
        "nome": "Agriturismi and alberghi diffusi",
        "perChi": "those who want low prices and real food",
        "testo": "Fifty to seventy euros for two with breakfast is the norm. You need a car and a booking: many places close between November and March."
      },
      {
        "nome": "Provincial capitals (Isernia, Campobasso, Reggio Calabria)",
        "perChi": "those arriving by train",
        "testo": "Convenient as a base for regional trains, but not very interesting. From there you take the car for the villages."
      },
      {
        "nome": "Village B&Bs",
        "perChi": "those who want to talk to the locals",
        "testo": "Few beds, family hospitality. Ask where to eat: often there is no written menu."
      }
    ],
    sapori: [
      {
        "nome": "Cavatelli and handmade pasta",
        "testo": "In inland Italy fresh pasta changes name every twenty kilometers. Eaten in village trattorias, often without a menu."
      },
      {
        "nome": "Caciocavallo and small-production cheeses",
        "testo": "Mountain-pasture and family dairy cheeses, from Molise to Carnia."
      },
      {
        "nome": "Frico of Carnia",
        "testo": "Cheese and potatoes cooked in a pan until a golden crust. A Friulian mountain dish."
      },
      {
        "nome": "Peperoni cruschi of Senise",
        "testo": "Dried and fried crunchy peppers, typical of Basilicata and the Pollino area."
      },
      {
        "nome": "Castelluccio lentils",
        "testo": "Small lentils grown on the Sibillini plateau, eaten in soup."
      }
    ],
    attenzioni: [
      "Car is mandatory: in these areas public transport reaches the provincial capitals and then stops. Add a third to the times estimated by maps.",
      "People eat between 12.30 and 2 and early in the evening; on Sunday evening and Monday many places are closed. At 3 pm you find nothing.",
      "Phone signal is missing in many valleys: download offline maps and fill the tank when you can.",
      "Val Grande and the high Pollino are environments for experienced hikers: changing weather, few huts, rescue far away.",
      "In August the villages fill with emigrants coming back: it is the liveliest period, not the quietest.",
      "After the 2016 earthquake some roads and villages of the Sibillini have closures: check the park authority's notices."
    ],
    esperienzeSlugs: ['cammini-italia'],
    tripSlugs: [],
    imageAlt: "Civita di Bagnoregio perched on its tuff spur, reachable only by the long pedestrian bridge, in the Tuscia",
    immagine: '/images/italia/italia-inesplorata.jpg',
  },
  {
    slug: 'rotte-dei-vini',
    paeseSlug: 'italia',
    ordine: 12,
    nome: "On the Routes of the Great Wines",
    tipologia: ['enogastronomia', 'paesaggi', 'itinerari'],
    giorniConsigliati: "4-6 days per route",
    visitataPersonalmente: true,
    introduzione:
      "Italy is the world's largest wine producer and has over five hundred catalogued native grape varieties, more than any other country. Three wine landscapes are UNESCO sites: Langhe-Roero and Monferrato, the Prosecco hills of Conegliano and Valdobbiadene, and the Coast as a cultural landscape. And almost every major appellation has a surrounding territory you can drive in a few days.",
    percheAndarci:
      "Here wine is the best pretext for seeing agricultural landscapes built over centuries: the terraces of Valtellina, the hills of the Langhe, the dry-stone walls of Etna. And in the cellar you talk with the people who make the wine, something that happens far less in France.",
    cosaVedere: [
      "The Langhe and Roero, a UNESCO site, with Barolo, Barbaresco, Alba and the white truffle",
      "Valpolicella and Soave, with the Venetian villas and the drying lofts where the Amarone grapes are dried",
      "The Prosecco hills between Conegliano and Valdobbiadene, a UNESCO site, with Cartizze",
      "Chianti Classico, Montalcino and Montepulciano, with abbeys and walled villages",
      "Etna, with the contrade on the volcano's slopes and the ungrafted vines that survived phylloxera",
      "Collio and the Colli Orientali in Friuli, for the whites and the macerated wines",
      "Valtellina, with its sheer terraces and dry-stone walls",
      "Irpinia and Vulture, the two great reds of the south: Taurasi and Aglianico del Vulture",
    ],
    cosaFare: [
      "Cellar visit and tasting, booking in advance (see the dedicated experience page)",
      "Going at harvest time, between late August and October, when the cellars are at work",
      "The Alba white truffle fair, in autumn, when the Langhe are at their best and fill up",
      "Walking among the vineyards: almost every area has marked trails among the vines",
    ],
    doveDormire:
      "Agriturismi and wine resorts in the wine areas are the right formula, and in many cases they're the wineries themselves. In the Langhe and Chianti prices are high in season; in Irpinia, Vulture and Valtellina you spend a fraction for similar quality.",
    doveMangiare:
      "Each route has its own cuisine, which is why the theme works: in the Langhe tajarin, vitello tonnato, raw meat and truffle; in Valpolicella risotto all'Amarone and boiled meats; in Tuscany bistecca and pici; on Etna pasta alla Norma and fish from the Ionian; in Valtellina pizzoccheri and bresaola. **The best way to eat in these areas is at the osterie affiliated with the consortia**, which have complete local wine lists at cellar prices.",
    comeArrivare:
      "By car, always. Wine areas are hills with scattered villages, and public transport is of little use. The reference airports and stations are Turin and Milan for Piedmont, Verona for the Veneto, Florence for Tuscany, Catania for Etna, Trieste for Friuli.",
    comeSpostarsi:
      "By car, with a serious issue: **whoever drives doesn't taste**. The alternatives are to hire a driver, use the shuttle services that several areas offer, or arrange the visits so that the driver tastes and spits, as professionals do.",
    periodoMigliore:
      "**September and October**, during the harvest: the cellars are in full swing, the vineyards change color and the fairs are on the calendar. April-June is the second window, with greenery and fewer people. From November to March many small wineries reduce visits, and in August several close.",
    costi:
      "Cellar tastings usually cost between 15 and 40 euros per person depending on the wines and the welcome, often deducted from a purchase. In the best-known areas (Barolo, Montalcino) guided visits of historic wineries cost more; in emerging areas you pay much less or nothing.",
    erroriDaEvitare: [
      "**Showing up at a winery without an appointment**: it's mistake number one. Wineries are farms with working hours, and almost all receive only by reservation, often a few days ahead",
      "Planning more than two or three wineries a day: after the third you no longer taste anything with attention, and the day becomes a collection of stamps",
      "Not solving the question of who drives before you leave: penalties for drunk driving in Italy are severe and there are checks in wine areas",
      "Going in August: many wineries close or reduce hours, and the people working are on vacation or preparing for the harvest",
      "Stopping only at the famous appellations: the Langhe and Montalcino are expensive and crowded, while Irpinia, Vulture, Valtellina and Etna offer the same level with a fraction of the visitors",
      "Buying at a wine shop what you can buy at the winery: at the estate the price is the production price and you talk with the person who made it",
    ],
    confronti: [
      {
        titolo: "Which wine route to choose",
        introduzione:
          "There are over four hundred Italian appellations, but the routes that work as a trip, with landscape, visitable wineries and food to match within a drivable radius, are about ten. They vary enormously in price, crowds and type of wine.",
        opzioni: [
          {
            nome: "Langhe and Roero (Piedmont)",
            sintesi: "A UNESCO site: Barolo, Barbaresco, Barbera and Dolcetto on marl hills, with Alba at the center and the white truffle in autumn.",
            costo: "the most expensive route in Italy, with Barolo and Barbaresco at international levels",
            durata: "4-5 days",
            pro: [
              "The highest winemaking level in Italy, with Nebbiolo among the great grape varieties of the world",
              "UNESCO landscape of hills planted with vines to the horizon",
              "Piedmontese cuisine is among the best in the country: tajarin, raw meat, plin, truffle in season",
              "Wineries set up for visitors, with well-organized visits",
            ],
            contro: [
              "Expensive on everything: wineries, lodging, restaurants",
              "In autumn, during the truffle fair, it's saturated and prices double",
              "It's the most visited route and you feel it",
            ],
            perChi: "Those who want the best and have the budget, and those who put food on the same level as wine.",
          },
          {
            nome: "Valpolicella, Soave and the Prosecco hills (Veneto)",
            sintesi: "Three zones close to one another behind Verona: Amarone with its drying lofts, Soave, and the Prosecco hills, a UNESCO site.",
            costo: "medium",
            durata: "3-5 days",
            pro: [
              "Three very different appellations within a few dozen kilometers",
              "The Amarone drying lofts, where grapes dry for months on racks: a technique you only see here",
              "The Prosecco hills are a UNESCO landscape, with slopes farmed by hand",
              "Very close to Verona, Lake Garda and Venice: easy to fit in",
            ],
            contro: [
              "The Prosecco zone has undergone very intensive viticulture, and in places it shows",
              "Less \"remote\" than the others: you're always near busy roads",
              "Classic Valpolicella is small and in high season the best wineries fill up",
            ],
            perChi: "Those with few days, those combining wine with Verona and Garda, those who want to see different techniques.",
          },
          {
            nome: "Chianti Classico, Montalcino and Montepulciano (Tuscany)",
            sintesi: "Sangiovese in three expressions, between Florence and Siena, with abbeys, walled villages and cypresses.",
            costo: "high, with Montalcino at Langhe levels",
            durata: "4-6 days",
            pro: [
              "The most photographed landscape in Italy, and not by chance",
              "It combines with Florence and Siena without long transfers",
              "Brunello di Montalcino and Chianti Classico are appellations with wineries very well organized for visits",
              "The abbeys (Sant'Antimo, San Galgano) add something extra to the trip",
            ],
            contro: [
              "The most touristy route of all: in high season the Chianti roads are busy",
              "High prices, with many places designed for high-end international tourism",
              "Less variety: it's almost all Sangiovese",
            ],
            perChi: "First-timers, those combining wine and art cities, those who want the postcard landscape.",
          },
          {
            nome: "Etna (Sicily)",
            sintesi: "The contrade on the volcano's slopes, with Nerello Mascalese and Carricante grown between 400 and 1,000 meters on lava soils, often with ungrafted vines.",
            costo: "medium, with some wineries of international level",
            durata: "3-4 days",
            pro: [
              "The **ungrafted vines**: Etna is one of the few areas in Europe that phylloxera never reached, and there are pre-phylloxera vines over a hundred years old",
              "The concept of the contrada, which works like Burgundy's crus: different soils and altitudes a few hundred meters apart",
              "A landscape you don't find elsewhere: lava-stone terraces with the smoking volcano above",
              "It combines with Taormina, Catania and the sea",
            ],
            contro: [
              "Wineries are scattered over a wide territory and the slope roads are slow",
              "A fast-growing area: some operations are very commercial",
              "In summer it's very hot at low altitudes",
            ],
            perChi: "Those who look for wines of character and a territory unlike any other in Italy.",
          },
          {
            nome: "Collio and Colli Orientali (Friuli)",
            sintesi: "The home of the great Italian whites, straddling the Slovenian border, with Friulano, Ribolla Gialla and the school of macerated wines.",
            costo: "medium, very accessible for the level",
            durata: "3-4 days",
            pro: [
              "The best whites in Italy, internationally recognized",
              "The school of **orange wines**, that is whites macerated on the skins, was born right here and in Slovenia",
              "Gentle landscape of hills straddling a border you cross without noticing",
              "Prices far more humane than the Langhe for the same quality",
            ],
            contro: ["Less spectacular landscape", "Far from the major tourist routes", "Little high-end lodging"],
            perChi: "Those who drink whites, those interested in macerated wines, those who want quality without paying for fame.",
          },
          {
            nome: "Irpinia and Vulture (Campania and Basilicata)",
            sintesi: "The great reds of the south: Taurasi in Irpinia and Aglianico del Vulture on the slopes of an extinct volcano, plus Fiano and Greco di Tufo for the whites.",
            costo: "the lowest of all the routes",
            durata: "4-5 days",
            pro: [
              "Aglianico is one of the great Italian grape varieties and costs a fraction of Nebbiolo or Sangiovese of equal level",
              "Areas almost without tourism: you visit the winery talking with the owner",
              "The Vulture has cellars dug into the tuff and an unexpected volcanic landscape",
              "Very low prices for lodging and restaurants",
            ],
            contro: [
              "Little organization for visitors: many wineries receive guests but aren't set up for tourism",
              "Slow interior roads",
              "Limited lodging",
            ],
            perChi: "Those who have already done the famous routes and want to drink just as well while spending a third.",
          },
          {
            nome: "Valtellina (Lombardy)",
            sintesi: "Mountain Nebbiolo, grown on sheer terraces held up by hundreds of kilometers of dry-stone walls.",
            costo: "medium-low",
            durata: "2-3 days",
            pro: [
              "The most impressive terraced landscape in Italy: dry-stone walls built by hand on very steep slopes",
              "Heroic viticulture in the full sense: it's worked by hand because no vehicle can climb",
              "Sforzato, made from dried grapes, is a mountain wine with no equivalent",
              "It combines with the mountains and with pizzoccheri",
            ],
            contro: ["A small area with few visitable wineries", "The valley floor is busy and not very pretty", "Less variety than the other routes"],
            perChi: "Those who love the mountains and want to see what heroic viticulture means.",
          },
        ],
        raccomandazione:
          "As a first route: the **Langhe**, because the level is the highest and the food matches, accepting the price and going in September instead of during the truffle fair. If budget matters, **Irpinia and Vulture** give almost the same for a third, with the only sacrifice being organized hospitality. For something unlike any other part of Italy, **Etna**, with its pre-phylloxera vines. For whites, **Collio** without a doubt. And whichever route you choose: **you book at the winery, you don't just show up**, and you solve the question of who drives first.",
      },
    ],
    miaEsperienza:
      "Wine routes are the best way to see agricultural Italy instead of monumental Italy, and one mundane thing changes everything: booking. A winery is a farm with work to do: those who arrive without an appointment usually find the gate closed, while those who write an email three days earlier are received by the producer in person, who has an hour for you. The second thing I understood concerns the relationship between fame and value: the Langhe are extraordinary and cost accordingly, but on Etna there are ungrafted vines over a hundred years old (phylloxera never reached that lava soil), and in Irpinia you drink an Aglianico that holds up against reds costing four times as much, in cellars where you walk in and the owner is there racking wine. The most serious practical problem, which nobody addresses when planning, is who drives: you visit wineries in hilly areas, you taste, and the temptation to pretend nothing is wrong is strong. The serious solutions are two: taste and spit, as professionals do, or pay for a driver.",
    luoghi: [
      {
        "nome": "Barolo and La Morra (Langhe)",
        "testo": "The hills of Barolo, a UNESCO site with Langhe-Roero and Monferrato, are covered in nebbiolo vineyards. The village of Barolo has the Falletti castle and La Morra the lookout over the sea of hills. Here wine is the pretext for an agrarian landscape built over centuries.",
        "come": "By car from Alba (about 20 minutes). Wineries receive by appointment: write three days ahead. Many roads are narrow and steep.",
        "quando": "September-October for the harvest, or April-June with the green. In August many wineries close.",
        "tempo": "1 day, 2 wineries",
        "consiglio": "Book one winery in the morning and one in the afternoon. After the third you taste nothing with care."
      },
      {
        "nome": "Alba and the white truffle",
        "testo": "Capital of the Langhe, with the international white truffle fair in autumn, when the city fills up. It has towers, arcades and shops of chocolate and hazelnuts.",
        "come": "Non-direct train from Turin: better by car (about 1 hour). In the city you go on foot.",
        "quando": "October-November for the truffle. Outside the fair Alba is quieter.",
        "tempo": "half a day",
        "consiglio": "At the fair truffle prices are high: ask for the weight and price before ordering, and prefer restaurants with seasonal truffle."
      },
      {
        "nome": "Valpolicella (Veneto)",
        "testo": "Hills north-west of Verona where Amarone is made: the grapes dry for months in the fruttaie before pressing. Venetian villas and Romanesque parish churches dot the villages of Fumane and San Pietro in Cariano.",
        "come": "By car or taxi from Verona (about 20-30 minutes). Wineries receive by appointment.",
        "quando": "September-October for the harvest, January-February for the pressing of the dried grapes.",
        "tempo": "1 day",
        "consiglio": "If the driver does not drink, a taxi from Verona to the wineries is a simple solution."
      },
      {
        "nome": "Prosecco hills between Conegliano and Valdobbiadene",
        "testo": "A UNESCO site since 2019: rows of vines on steep hills, with the Prosecco superiore road running through villages and osterias. Cartizze is the most prized vineyard, on a hill of a few hectares.",
        "come": "By car from Treviso (about 40 minutes) or train to Conegliano. By bike you can ride among the rows.",
        "quando": "Spring and autumn. Not in August: it is hot and many wineries are closed.",
        "tempo": "1 day",
        "consiglio": "The osterias of Valdobbiadene serve sparkling Prosecco with cured meats: have lunch there after the winery visit."
      },
      {
        "nome": "Chianti Classico (Tuscany)",
        "testo": "The area between Florence and Siena with Greve, Castellina, Radda and Gaiole. The Gallo Nero is the consortium's mark. Parish churches, castles and farms alternate with vines and olive groves.",
        "come": "By car from Florence or Siena (about 40-50 minutes). The Chiantigiana road runs through the villages.",
        "quando": "April-June and September-October. In summer there are many coach tours.",
        "tempo": "1-2 days",
        "consiglio": "Sleep in an agriturismo and visit small wineries: often the producer himself welcomes you."
      },
      {
        "nome": "Montalcino and Brunello",
        "testo": "A medieval village with the fortress and the Brunello cellars, pure sangiovese. The Romanesque Abbey of Sant'Antimo is a few kilometers away among olive trees.",
        "come": "By car from Siena (about 50 minutes). Montalcino is toured on foot, the wineries are scattered around.",
        "quando": "Spring and autumn. Book wineries well ahead.",
        "tempo": "1 day",
        "consiglio": "Visit the Abbey of Sant'Antimo early in the morning, when the monks sing."
      },
      {
        "nome": "Etna (Sicily)",
        "testo": "Contrade on the slopes of the volcano, with own-rooted nerello mascalese vines, spared by phylloxera. Some are over a hundred years old. Tastings are in lava-stone cellars.",
        "come": "By car from Catania (about 40-60 minutes). Winding, slow roads. Base at Linguaglossa, Castiglione di Sicilia or Randazzo.",
        "quando": "September-October for the harvest, but Etna is lovely in spring too.",
        "tempo": "1-2 days",
        "consiglio": "Ask to see the old vines: you understand why the lava soil saved the vines from the parasite."
      },
      {
        "nome": "Collio and Colli Orientali (Friuli)",
        "testo": "Hills on the Slovenian border, famous for white wines: ribolla gialla, friulano, malvasia. Many estates make skin-macerated wines, called orange.",
        "come": "By car from Gorizia or Cormons (about 15 minutes). Wineries are small and family run.",
        "quando": "Spring and autumn. In summer there is more sun.",
        "tempo": "1-2 days",
        "consiglio": "Cross the Slovenian border for lunch in a gostilna: a short distance away the cuisine changes."
      },
      {
        "nome": "Irpinia and Vulture (Campania and Basilicata)",
        "testo": "Two great reds of the south: Taurasi in Irpinia and Aglianico del Vulture, both from aglianico. In Irpinia also the whites Fiano di Avellino and Greco di Tufo. Zones with few tourists and low prices.",
        "come": "By car only from Avellino or Potenza (about 1 hour). Few wineries have hospitality facilities.",
        "quando": "September-October. Very hot summer.",
        "tempo": "2 days, one per zone",
        "consiglio": "Here you often find yourself in the cellar where the owner is racking wine: that is the moment to ask questions."
      },
      {
        "nome": "Valtellina (Lombardy)",
        "testo": "Terraced vineyards supported by hundreds of kilometers of dry-stone walls on steep slopes, for mountain nebbiolo, here called chiavennasca. Sforzato is made from dried grapes.",
        "come": "Train from Milan to Tirano or Sondrio (2 hours). Moving between wineries requires a car.",
        "quando": "September-October. In summer the valley floor is hot and busy.",
        "tempo": "1-2 days",
        "consiglio": "Walk a stretch of the Via dei Terrazzamenti, the path among the walls, before or after tastings."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: winery in Barolo, by booking",
          "Lunch: osteria with Piedmontese dishes",
          "Afternoon: second winery in La Morra and viewpoint",
          "Evening: in Alba, aperitivo and dinner"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Barolo, La Morra and lunch in an osteria",
          "Day 2: Barbaresco and Alba",
          "The driver tastes and spits, or you hire a driver"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2: as above",
          "Day 3: Roero and Monferrato, or Lake Orta",
          "Back to Turin, with the Susa Valley as an alternative"
        ]
      }
    ],
    zone: [
      {
        "nome": "Alba and surroundings",
        "perChi": "those who want food and truffle",
        "testo": "A city of 30,000, a convenient base for the Langhe, but expensive in October. Slow trains, better by car."
      },
      {
        "nome": "Agriturismi among the vines",
        "perChi": "those looking for quiet",
        "testo": "You sleep in the wineries themselves, with a view. You need a car and a booking, in high season prices rise."
      },
      {
        "nome": "Verona or Siena",
        "perChi": "those who tie wine to a city",
        "testo": "You sleep in the city and go to the wineries by car: great if you like monuments, but no hills in the evening."
      }
    ],
    sapori: [
      {
        "nome": "Tajarin and raw meat",
        "testo": "The thin egg pasta of the Langhe and raw meat chopped with a knife. Eaten in all the osterias of Alba."
      },
      {
        "nome": "Vitello tonnato",
        "testo": "Piedmontese starter: cold veal with tuna sauce and capers."
      },
      {
        "nome": "Risotto all'Amarone",
        "testo": "A Valpolicella dish of risotto cooked in Amarone wine."
      },
      {
        "nome": "Bistecca and pici",
        "testo": "Florentine steak in Chianti; handmade pici in Montalcino and Montepulciano."
      },
      {
        "nome": "Pasta alla Norma",
        "testo": "Pasta with tomato, fried aubergine and salted ricotta, typical of Catania and Etna."
      },
      {
        "nome": "Pizzoccheri",
        "testo": "Buckwheat tagliatelle with cabbage, potatoes and cheese: a Valtellina dish."
      }
    ],
    attenzioni: [
      "Showing up at a winery without an appointment is mistake number one: many wineries receive only by booking, often a few days ahead.",
      "The driver does not taste: penalties for drunk driving are severe and there are checks in the wine zones. Plan a driver, taxi or shuttle.",
      "No more than two or three wineries a day, otherwise you lose taste and safety.",
      "In August many wineries close or reduce visits, while at harvest they fill up.",
      "In the famous zones (Barolo, Montalcino) lodging and tasting prices are high: consider Irpinia, Vulture, Valtellina and Etna.",
      "Buying at the winery costs less than at the wine shop and you speak to the person who made the wine."
    ],
    esperienzeSlugs: ['degustazione-cantina'],
    tripSlugs: ['rotte-dei-vini-itinerario'],
    imageAlt: "Vine-covered hills around Castellina in Chianti with a farmhouse among the cypresses, Tuscany",
    immagine: '/images/italia/rotte-dei-vini.jpg',
  },
  {
    slug: 'torino',
    paeseSlug: 'italia',
    ordine: 13,
    nome: "Turin",
    tipologia: ['città d\'arte', 'musei', 'gastronomia'],
    giorniConsigliati: "2-3 days, plus the Langhe or the Susa Valley",
    visitataPersonalmente: true,
    introduzione:
      "It was the first capital of Italy, built on a Roman and then Baroque grid, with eighteen kilometers of arcades that let you cross it without ever getting rained on. It has the most important Egyptian museum in the world after Cairo, the Mole, the most improbable symbol ever adopted by a city, and a coffee and vermouth culture that was born here.",
    percheAndarci:
      "It's the most underrated major Italian city. It doesn't have the mass tourism of Florence or Venice, it has internationally ranked museums, it's wonderful on foot and you eat and drink as in few others, with the Alps at the end of the streets on clear days.",
    cosaVedere: [
      "The Egyptian Museum, second in the world only to Cairo's in importance of its collection",
      "The Mole Antonelliana with the National Cinema Museum and the panoramic elevator through the central void",
      "The Royal Palace, the Royal Museums and the Armory, with Guarini's restored Chapel of the Holy Shroud",
      "The Basilica of Superga on the hill, with the Savoy tombs and the Grande Torino memorial",
      "The Reggia di Venaria, a UNESCO site, with its gardens",
      "The Roman Quadrilateral and Porta Palazzo, the largest open-air market in Europe",
      "The historic cafés: the bicerin, vermouth and the aperitivo ritual were born here",
    ],
    cosaFare: [
      "The Egyptian Museum at opening, with at least three hours available",
      "Going up the Mole in the elevator that crosses the void of the dome, an experience in itself",
      "An aperitivo in a historic café, in Turin a ritual with precise rules for two centuries",
      "Going up to Superga on the historic rack tram, and taking the loop around the hill",
      "The Porta Palazzo market in the morning, the largest open-air market in Europe",
    ],
    doveDormire:
      "The center inside the Baroque quadrilateral is very convenient and you can walk everywhere. San Salvario, behind Porta Nuova, has the best prices and evening life. The Roman Quadrilateral for atmosphere. The city is well served by the metro and trams: location matters less than in Rome or Naples.",
    doveMangiare:
      "Piedmontese cuisine is among the richest in Italy: agnolotti del plin, vitello tonnato, raw meat chopped with a knife, bagna càuda (in winter, and eaten in a group), finanziera for the brave. Then there's the sweet and drinking side, which in Turin is identity: the **bicerin** (coffee, chocolate and milk cream, served in layers in the glass), the gianduiotto, grissini, born here, and **vermouth**, invented in Turin in the eighteenth century. The aperitivo with buffet has been done here for two centuries.",
    comeArrivare:
      "High-speed rail: Torino Porta Nuova and Porta Susa are in the city, with Milan an hour away and Rome four and a half. Caselle airport, connected by train and bus.",
    comeSpostarsi:
      "On foot under the arcades, which cover the center for kilometers. Automatic metro (one line) and one of the most extensive tram networks in Italy. **Watch out for the central ZTL**, active on weekdays with cameras.",
    periodoMigliore:
      "April-June and September-November. Winter is cold and foggy but the city works very well and the museums are empty; summer is muggy and in August Turin empties. In November there's the Salone del Gusto in even-numbered years and the truffle fair in Alba an hour away.",
    costi:
      "The Egyptian Museum has a modest ticket for its caliber; the **Torino+Piemonte Card** covers dozens of museums and pays off from two days up. For lodging and restaurants the city costs quite a bit less than Milan.",
    erroriDaEvitare: [
      "Giving the Egyptian Museum one hour: it takes at least three, and it's the most important Egyptian collection in the world after Cairo's",
      "Skipping the hill: Superga and the scenic loop are half the city's character and almost no visitor goes up",
      "Driving into the center without knowing the ZTL",
      "Treating it only as a stopover on the way to the Langhe: Turin holds up for two full days",
      "Expecting a \"postcard\" city: Turin is rigorous, geometric and a little severe, and people like it for that",
    ],
    miaEsperienza:
      "Turin is the major Italian city that arrives like a gift: nobody tells you to go, then you go and it holds up for two full days without effort. The centerpiece is the Egyptian Museum, and it's enormous: the second Egyptian collection in the world after Cairo, with whole statues, papyri and the tomb of Kha and Merit reconstructed with all the grave goods found intact. It takes three hours, and that's not a figure of speech. The Mole, on the other hand, is the most absurd thing: born as a synagogue, never used as one, turned into the symbol of the city, and today a cinema museum with a transparent-cabin elevator that rises through the void of the dome, above the heads of visitors lying on sofas watching film clips. Then there's the part almost nobody does, the hill: you take the rack tram and go up to Superga, where the Savoy tombs are and, at the back, the wall the Grande Torino plane crashed into in 1949. And in the evening the aperitivo, far from the Milanese fashion: the historic cafés with marble counters where you drink a vermouth made a hundred meters away.",
    luoghi: [
      {
        "nome": "Museo Egizio",
        "testo": "The most important Egyptian collection outside Cairo, born in 1824 from the nucleus gathered by consul Drovetti. The piece not to miss is the tomb of Kha and Merit, found intact in 1906 with all its grave goods. Then the Temple of Ellesiya, the Gallery of the Kings and the Papyrus of the Gold Mines.",
        "come": "In the center, on foot from Piazza Castello or Piazza San Carlo. You enter with a ticket bought online for a time slot. Audioguide or app to understand the pieces.",
        "quando": "Open every day. Monday 9-2, Tuesday-Friday and Sunday 9-6.30, Saturday 9-8, last entry one hour before closing. Early morning or Saturday evening to avoid crowds. The Historic Rooms have been temporarily closed since 12 December 2025: see the notice on the website.",
        "tempo": "3 hours, better 4",
        "costo": "18 euros full price (2026)",
        "url": "https://www.museoegizio.it/",
        "consiglio": "Book the time slot online, especially on weekends and long weekends. Keep the Gallery of the Kings for the end, when your legs are tired."
      },
      {
        "nome": "Mole Antonelliana and the National Cinema Museum",
        "testo": "Started in 1863 as a synagogue and never used as one, it is the symbol of the city. Inside is the cinema museum, laid out in a spiral around the central hall, with reclining red armchairs in the middle. The glass panoramic lift rises through the void to the little temple at the top.",
        "come": "On Via Montebello, 10 minutes on foot from Piazza Castello. Ticket for the museum, the lift or both, with a time slot.",
        "quando": "On clear days the lift sells out: book ahead. Check the website for works or reduced opening.",
        "tempo": "2-3 hours with the lift",
        "costo": "museum 18 euros, lift 9 euros, combined 23 euros (2026)",
        "url": "https://www.museocinema.it/",
        "consiglio": "The combined ticket pays off if you do everything. On a clear day you can see Monviso behind the Alpine arc."
      },
      {
        "nome": "Royal Museums and the Chapel of the Holy Shroud",
        "testo": "Royal Palace, Royal Armory, Galleria Sabauda and Guarini's Chapel of the Holy Shroud, with its dome of stacked hexagons, reopened after the restoration that followed the 1997 fire. The Shroud is not on display: you see the chapel, not the cloth.",
        "come": "In Piazza Castello, entrance from the courtyard. One ticket for the whole complex. You can walk around alone, the rooms have clear panels.",
        "quando": "Open Thursday to Tuesday, 9-7, closed Wednesday. Ticket office closes an hour earlier. The first Sunday of the month is free with mandatory booking.",
        "tempo": "3 hours",
        "costo": "15 euros full price (2026)",
        "url": "https://museireali.cultura.gov.it/",
        "consiglio": "Two hours are enough for the Royal Palace, Armory and chapel: the Galleria Sabauda is for lovers of old paintings."
      },
      {
        "nome": "Basilica di Superga and the rack tram",
        "testo": "Juvarra's basilica on the hill east of the Po, with the Savoy tombs in the crypt. At the back is the Grande Torino memorial, where the plane crashed in 1949. From the terrace you see the city and the Alps.",
        "come": "Historic rack tram from Sassi station (tram 15 from the center), about 20 minutes uphill. On Wednesday the tram is stopped and bus 79 runs instead.",
        "quando": "Tram timetables differ between summer and winter: check the GTT website. Clear day, better in the afternoon for the light on the Alps.",
        "tempo": "2-3 hours including the ride",
        "url": "https://www.gtt.to.it/cms/turismo/sassisup",
        "consiglio": "A walk along the ridge behind the basilica costs nothing and gives the best view. Check the fare when you go."
      },
      {
        "nome": "Reggia di Venaria",
        "testo": "Savoy hunting residence, a UNESCO site, with Juvarra's Galleria Grande, the Chapel of Sant'Uberto and the gardens. The complex is huge and also hosts exhibitions.",
        "come": "From Porta Susa station or the center with bus line 11, about 40 minutes. By car 25 minutes. Entrance and tickets on the official website.",
        "quando": "Closed on Monday. The gardens and park can be visited even in uncertain weather, but the rooms need a free day.",
        "tempo": "half a day, a full day with the gardens",
        "url": "https://www.lavenaria.it/",
        "consiglio": "It needs a full morning: give it an extra day rather than squeezing it between the Egyptian Museum and the Mole."
      },
      {
        "nome": "Roman Quadrilateral and Porta Palazzo",
        "testo": "The oldest part of the city, with the Roman orthogonal grid and the first-century Porta Palatina, with its towers still standing. Nearby is Porta Palazzo, the largest open-air market in Europe.",
        "come": "On foot from Piazza Castello, 5-10 minutes. The market is in Piazza della Repubblica.",
        "quando": "Market in the morning, Monday to Saturday. In the evening the Quadrilateral is the aperitivo district.",
        "tempo": "2 hours",
        "costo": "free entry",
        "consiglio": "At the market you can also buy the day's fruit and the spices from the North African stalls. Watch your pockets in the crowd."
      },
      {
        "nome": "Historic cafés and bicerin",
        "testo": "Turin invented the bicerin: coffee, chocolate and milk cream in layers, not to be stirred. You drink it in a glass at Caffè Al Bicerin, open since 1763, or in one of the cafés of Piazza San Carlo and the Galleria Subalpina. The vermouth aperitivo ritual was born here too.",
        "come": "All in the center, on foot. Caffè Al Bicerin is in Piazza della Consolata, small and with few tables.",
        "quando": "Bicerin in the morning or afternoon, vermouth from 6 pm. At Al Bicerin there is often a queue on weekends.",
        "tempo": "1 hour per stop",
        "consiglio": "The bicerin is not stirred: you drink it in layers, and each sip changes."
      },
      {
        "nome": "Monte dei Cappuccini and Parco del Valentino",
        "testo": "On the hill above the Po, the Monte dei Cappuccini gives the classic view with the Mole and the Alps behind. Lower down, the Parco del Valentino follows the river and holds the Borgo Medievale, a nineteenth-century reconstruction done with philological rigor.",
        "come": "On foot from Piazza Vittorio Veneto: 10 minutes uphill. The Valentino is to the south, along the Po.",
        "quando": "Clear day, better in the late afternoon. The park is always open.",
        "tempo": "2 hours",
        "consiglio": "Go up in the late afternoon light, then walk down towards the river."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Egyptian Museum, booked, at least 3 hours",
          "Lunch: agnolotti del plin in a trattoria in the center",
          "Afternoon: Piazza Castello, Royal Museums and Chapel of the Holy Shroud",
          "Evening: bicerin or vermouth in Piazza San Carlo, aperitivo in the Quadrilateral"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Egyptian Museum, Piazza San Carlo, Royal Museums, Roman Quadrilateral and aperitivo",
          "Day 2 morning: Mole Antonelliana, museum and lift",
          "Day 2 afternoon: Monte dei Cappuccini and Valentino, or the tram to Superga (not on Wednesday)",
          "Evening: Piedmontese dinner, tajarin or vitello tonnato"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1 and 2: as above",
          "Day 3: Reggia di Venaria with gardens (not on Monday)",
          "Afternoon: Porta Palazzo if it is still early morning, otherwise Superga in the last light",
          "Evening: bagna cauda in winter, otherwise dinner in San Salvario"
        ]
      }
    ],
    zone: [
      {
        "nome": "Historic center, between Piazza Castello and Piazza San Carlo",
        "perChi": "those who want to walk everywhere",
        "testo": "You walk under the arcades, museums and cafés are minutes away. Hotels cost more, evenings are quiet. From Porta Nuova station it takes 10 minutes."
      },
      {
        "nome": "San Salvario",
        "perChi": "those looking for lower prices and nightlife",
        "testo": "District behind Porta Nuova, with bars and restaurants. Noisier on weekends and late at night, 15 minutes on foot from the center."
      },
      {
        "nome": "Roman Quadrilateral",
        "perChi": "those looking for atmosphere",
        "testo": "Ancient alleys, aperitivos and bars. Very lively and noisy in the evening, close to Porta Palazzo."
      }
    ],
    sapori: [
      {
        "nome": "Agnolotti del plin",
        "testo": "Small pasta stuffed with meat, pinched by hand, also served in a napkin with no sauce. Found in the Piedmontese trattorias of the center."
      },
      {
        "nome": "Vitello tonnato and raw meat",
        "testo": "Typical starters: vitello tonnato with tuna and caper sauce, and raw meat chopped with a knife with oil and lemon."
      },
      {
        "nome": "Bicerin",
        "testo": "Coffee, chocolate and milk cream in three layers. At Caffè Al Bicerin and in the historic cafés."
      },
      {
        "nome": "Gianduiotto",
        "testo": "Chocolate made with Piedmontese hazelnuts, born in the nineteenth century when cocoa was scarce. In all the chocolate shops of the center."
      },
      {
        "nome": "Vermouth",
        "testo": "Invented in Turin in the eighteenth century. Drunk in the historic cafés and in the bars of the Quadrilateral with the aperitivo."
      },
      {
        "nome": "Bagna càuda",
        "testo": "Hot sauce of garlic, anchovies and oil in which raw and cooked vegetables are dipped. A winter dish, eaten in a group."
      }
    ],
    attenzioni: [
      "The central ZTL has cameras and weekday hours: do not drive in without checking the times on the city's website. Better to park outside or in an underground garage.",
      "The Egyptian Museum and the Mole are visited with an online ticket for a time slot: on weekends and long weekends the slots run out. Book a few days ahead.",
      "The Royal Museums are closed on Wednesday and the Superga tram is stopped the same day. The Reggia di Venaria closes on Monday.",
      "The Shroud is not on display, except in extraordinary expositions: anyone going to Turin to see it will be disappointed. You visit Guarini's chapel.",
      "At Porta Palazzo and on crowded public transport, watch out for pickpockets.",
      "A tourist tax is charged in Turin: check the amount on the city's website or with the hotel."
    ],
    esperienzeSlugs: ['museo-egizio'],
    tripSlugs: ['torino-2-giorni'],
    imageAlt: "The Royal Gardens and the rooftops of Turin seen from the top of the Mole Antonelliana",
    immagine: '/images/italia/torino.jpg',
  },
  {
    slug: 'costiera-amalfitana',
    paeseSlug: 'italia',
    ordine: 14,
    nome: "Amalfi Coast",
    tipologia: ['mare', 'paesaggi', 'trekking'],
    giorniConsigliati: "4-5 days",
    visitataPersonalmente: true,
    introduzione:
      "Fifty kilometers of sheer coastline between Sorrento and Salerno, a UNESCO site as a **cultural landscape**, that is for the way people terraced it with lemons and vines on impossible slopes. Thirteen towns clinging to the rock, linked by a state road that is both the most beautiful and the most cursed in Italy.",
    percheAndarci:
      "Such a close relationship between mountain and sea doesn't exist elsewhere in the Mediterranean: you go from six hundred meters of altitude to the sea in two kilometers as the crow flies. And above the road, on the trails, there's a completely different coast from the one the tour buses see.",
    cosaVedere: [
      "Positano, vertical and photogenic, which you walk down and climb back up with your legs",
      "Amalfi with the Cathedral and the Cloister of Paradise, and Ravello with Villa Cimbrone and Villa Rufolo",
      "The **Path of the Gods** (Sentiero degli Dei), from Bomerano to Nocelle: the coast seen from above",
      "The Valle delle Ferriere above Amalfi, with giant ferns that survived from the Ice Age",
      "The Fjord of Furore and the Emerald Grotto",
      "Atrani, the smallest municipality in Italy by area, two hundred meters from Amalfi and with nobody in it",
      "Cetara, a fishing village with its colatura di alici, and Vietri with its ceramics",
    ],
    cosaFare: [
      "The Path of the Gods, the best thing on the Coast (see the dedicated experience page)",
      "Getting around by ferry instead of by car: in summer it's the only sensible choice",
      "The Scala Fenicia or the Lemon trails between Maiori and Minori, which almost nobody does",
      "An evening in Ravello, which sits four hundred meters above the coast and is another world compared with the bottom",
    ],
    doveDormire:
      "**Sleeping in Naples or Salerno and taking day trips costs a fraction** of staying in Positano or Amalfi in season. For those who want to stay on the coast: Praiano and Minori have far more human prices than Positano and Amalfi, with the same coast. Ravello is something else: higher, quieter, more expensive.",
    doveMangiare:
      "Blue fish, not noble fish: here the tradition is that of the fishermen. The **colatura di alici di Cetara**, heir to Roman garum, is used on spaghetti with garlic, oil and parsley and must not be cooked. Then scialatielli with seafood, mozzarella in myrtle leaves and lemons: the Amalfi sfusato is huge and is eaten even in salads. Limoncello is everywhere and almost always industrial: the good one is bought from producers. **On the seafront in Positano and Amalfi you pay for the location**, not the dish.",
    comeArrivare:
      "From Naples: Circumvesuviana to Sorrento and then bus or ferry; or direct ferry in season. From Salerno: bus or ferry along the whole coast. **Flights arrive at Naples Capodichino.**",
    comeSpostarsi:
      "**The ferry beats the car and the bus in every season.** The Amalfi state road is a two-lane road with narrow lanes, hundreds of hairpin turns and no parking: in summer it's a continuous jam, with queues of hours. SITA buses are cheap and scenic but full. **In high season on some stretches there are alternating license plate days**: it's worth finding out beforehand. The scooter is the alternative for those who feel up to it.",
    periodoMigliore:
      "**May-June and September-early October.** July and August are saturated, with the state road blocked and prices at their peak. From November to March the coast empties: beautiful and silent, with many places closed and the sea out of play. April and October are excellent for the trails.",
    costi:
      "Among the most expensive areas in Italy in high season. The Path of the Gods is free; Villa Cimbrone and Villa Rufolo in Ravello have modest tickets; ferries cost a few euros a ride and are the best investment of the trip.",
    erroriDaEvitare: [
      "**Coming by car in July or August.** It's the mistake that ruins the most vacations on the Coast: the state road is blocked, parking costs absurd amounts where it exists, and you spend the day in line",
      "Sleeping in Positano or Amalfi without knowing that in Praiano or Minori you spend half with the same coast",
      "Doing only the bottom: Ravello sits at four hundred meters and the trails above the road are another coast",
      "Stopping at Positano and Amalfi and skipping Atrani, which is two hundred meters from Amalfi, is the smallest municipality in Italy and has nobody in it",
      "Doing the Path of the Gods in the wrong direction: from Bomerano to Nocelle it's downhill, the other way it's uphill all the way",
      "Cooking the colatura di alici, which should be added raw",
    ],
    miaEsperienza:
      "The Coast has a problem called state road 163: a two-lane road, very narrow, carved into the rock, with buses passing each other with their mirrors folded in, and in summer a continuous queue from Sorrento to Salerno. Anyone who comes by car in August spends the vacation standing still, and that alone is enough to ruin one of the most beautiful places in the Mediterranean. The solution is mundane and almost nobody uses it: **the ferry**. It costs a few euros, connects all the towns and you arrive from the sea, which is also the right way to look at this coast: the towns were built to be seen from there. The second thing that changes the trip is going up. Above the road there's a coast of trails, terraces and mule tracks that linked the towns before the state road existed: the **Path of the Gods** runs five hundred meters above the sea with Positano below and Capri on the horizon, takes three hours, is free and only a tiny fraction of the people crowding the seafront go. From up there you also understand why it's a UNESCO site: those lemon terraces on forty-percent slopes were built by someone, by hand, over the centuries.",
    luoghi: [
      {
        "nome": "Positano",
        "testo": "The most photographed town on the coast: pastel houses stacked up a ravine that drops to the Spiaggia Grande. You walk down from the road through stairs and shops, and walk back up with your legs.",
        "come": "From Amalfi by ferry (about 30-40 minutes) or SITA bus along the coast road. Driving is a bad idea: few car parks, and expensive.",
        "quando": "Early morning or after 5 pm, when day-trippers leave. July and August are packed.",
        "tempo": "3-4 hours",
        "consiglio": "For a swim, the beaches to the east (Fornillo) are less crowded than the Spiaggia Grande and ten minutes away on foot."
      },
      {
        "nome": "Amalfi: Duomo e Chiostro del Paradiso",
        "testo": "The Duomo di Sant'Andrea sits at the top of a flight of steps above the harbor square, with a mosaic facade and a Byzantine bronze door. Next to it is the 13th-century Chiostro del Paradiso, with interlaced Arab-style arches. Amalfi was a maritime republic before Pisa and Genoa.",
        "come": "Five minutes on foot from the ferry pier. The ticket covers the cloister, the Crucifix basilica and the museum; the cathedral is entered from the steps.",
        "quando": "Hours and days change with religious services. Best in the morning, before the tour buses.",
        "tempo": "1 hour",
        "consiglio": "Climb the steps and turn around: the square seen from above is the best photo in town."
      },
      {
        "nome": "Atrani",
        "testo": "A village of a few hundred people, two hundred meters from Amalfi, squeezed into a gorge with its square opening to the sea under an arch. White houses, stairway lanes, the church of the Maddalena. Almost nobody stops here.",
        "come": "On foot from Amalfi in five to ten minutes along the road and then down the stairs, or through the underpass near the pier.",
        "quando": "All day. In the evening, after the day-trippers have left, it is very quiet.",
        "tempo": "1 hour",
        "costo": "free",
        "consiglio": "An aperitivo in the square, with local kids playing football under the arch."
      },
      {
        "nome": "Ravello: Villa Rufolo e Villa Cimbrone",
        "testo": "Ravello sits about 350 meters above the coast and has a different pace: quiet, gardens and viewpoints. Villa Rufolo, from the 13th century, has a Moorish tower and a garden over the void where the music festival is held. Villa Cimbrone has the Belvedere of Infinity, with statues facing the sea.",
        "come": "From Amalfi by SITA bus in about 25 minutes, or on foot up the Scala Fenicia (a path with many steps). The two villas are 15 minutes apart on foot through the village.",
        "quando": "Villa Rufolo is open daily, with longer hours in season. After 5 pm the light on the Belvedere is best. The festival changes closing times.",
        "tempo": "half a day",
        "url": "https://www.villarufolo.com/",
        "consiglio": "Check prices on the villas' official sites before you go, and see them in this order: Rufolo in the morning, Cimbrone at sunset."
      },
      {
        "nome": "Sentiero degli Dei",
        "testo": "The best panoramic path on the coast, from Bomerano (Agerola) to Nocelle: about 7-8 km at mid-height, 500 meters above the sea, with Positano and Capri on the horizon. It takes about three hours, mostly downhill, and is free.",
        "come": "SITA bus from Amalfi to Bomerano, then walk to Nocelle. From Nocelle a long staircase goes down to Positano, or you stop and take the bus.",
        "quando": "Spring and autumn. In summer start at dawn: the path has little shade.",
        "tempo": "3-4 hours plus the descent to Positano",
        "costo": "free",
        "consiglio": "Do it from Bomerano to Nocelle, not the other way round: it's all downhill and the sea is in front of you. Hiking shoes and water."
      },
      {
        "nome": "Valle delle Ferriere",
        "testo": "A damp gorge above Amalfi where rare ferns survive, relics of colder eras. The trail follows the Canneto stream among the remains of old ironworks and paper mills. It is a nature reserve.",
        "come": "From Amalfi on foot by a path of about 40 minutes, or from Pontone (Scala). The loop needs comfortable hiking boots.",
        "quando": "All year; cool and shaded in summer. After heavy rain it can be slippery or have closed sections.",
        "tempo": "3 hours",
        "consiglio": "A good outing on hot days or when the sea is rough and the coast is not pleasant."
      },
      {
        "nome": "Furore e il Fiordo",
        "testo": "Furore is a village scattered over a deep ravine: the Fiordo is a cleft in the rock with a small pebble beach under a bridge on the coast road. The village is known for its murals and terraced vineyards on the rock.",
        "come": "SITA bus from Amalfi or Positano to Furore, then a staircase goes down to the Fiordo. By boat from Amalfi with water taxis.",
        "quando": "Calm sea is needed to go down safely; avoid windy days. Late morning for the light on the ravine.",
        "tempo": "1-2 hours",
        "consiglio": "Arrive by sea in peak periods, to avoid the stalled road and the staircase in the midday heat."
      },
      {
        "nome": "Cetara",
        "testo": "A tuna and anchovy fishing village toward Salerno, far from the crowds. This is where colatura di alici is made, heir of Roman garum. The little harbor and beach belong to a real town.",
        "come": "SITA bus from Amalfi (about 40 minutes) or from Salerno; ferry in season. You walk it in an hour.",
        "quando": "All year. Lunch is the right time, with restaurants full of locals.",
        "tempo": "2 hours",
        "consiglio": "Buy the colatura straight from a producer, in a sealed bottle, and take it home."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Reach Amalfi by ferry from Salerno or Positano, before the tour buses",
          "Duomo and Chiostro del Paradiso, then a stroll to Atrani",
          "Lunch in Amalfi away from the seafront",
          "SITA bus to Ravello in the afternoon, Villa Rufolo and Villa Cimbrone",
          "Ferry back before evening"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Sentiero degli Dei from Bomerano to Nocelle, descent to Positano, swim and dinner",
          "Day 2: ferry Positano-Amalfi, Duomo and Atrani",
          "Ravello in the afternoon, back by bus or on foot down the Scala Fenicia",
          "Dinner in Cetara if you sleep near Salerno"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Positano and Praiano, swim in a small cove",
          "Day 2: Sentiero degli Dei and Furore",
          "Day 3: Amalfi, Valle delle Ferriere in the morning, Ravello at sunset",
          "Optional: half a day in Cetara and Vietri sul Mare for the ceramics"
        ]
      }
    ],
    zone: [
      {
        "nome": "Praiano",
        "perChi": "anyone who wants the coast at half the price",
        "testo": "Quieter and cheaper than Positano, with coves reachable on foot. The village is long and steep: wear good shoes. You reach the ferries on foot or by bus."
      },
      {
        "nome": "Positano and Amalfi",
        "perChi": "those who want to be in the middle and can spend",
        "testo": "Convenient for everything, but expensive and very crowded in high season. Staying here also means noise and stairs with luggage."
      },
      {
        "nome": "Ravello",
        "perChi": "anyone seeking quiet and viewpoints",
        "testo": "High up and calm, it empties in the evening. It costs more and you take the bus down to the sea. Great for a day or two of calm."
      },
      {
        "nome": "Salerno",
        "perChi": "tight budgets and those arriving by train",
        "testo": "Much cheaper lodging and a high-speed train station. The ferry to the coast leaves from here; you lose the charm of sleeping by the sea."
      }
    ],
    sapori: [
      {
        "nome": "Colatura di alici di Cetara",
        "testo": "Amber liquid obtained from salting anchovies, heir of Roman garum. Used on spaghetti with garlic, oil and parsley, raw, at the end of cooking."
      },
      {
        "nome": "Scialatielli ai frutti di mare",
        "testo": "Wide fresh long pasta, often with clams, mussels and shellfish. Found along the whole coast, better in places a bit away from the harbor."
      },
      {
        "nome": "Delizia al limone",
        "testo": "A dessert of soaked sponge cake and lemon cream, born in Amalfi. The local lemon, sfusato amalfitano, is large and mildly acidic."
      },
      {
        "nome": "Mozzarella nella mortella",
        "testo": "Mozzarella wrapped in myrtle leaves, typical of Amalfi. Eaten fresh, at room temperature."
      },
      {
        "nome": "Limoncello",
        "testo": "Everywhere and often industrial: the good stuff is bought from producers, who often let you taste."
      }
    ],
    attenzioni: [
      "The coast road SS163 can be blocked for hours in high season, and in some periods there are odd/even plate restrictions: take the ferry. Check the current orders before you leave.",
      "Ferries stop in rough seas: keep a plan B (SITA bus) and don't leave the last run to chance.",
      "Car parks are very expensive and garage spaces cost like a hotel room: leave the car in Salerno or a lot outside the coast.",
      "Water taxis and taxis do not always display fares: agree the price before getting in.",
      "Paths like the Sentiero degli Dei need proper shoes and water; the staircase down to Positano is long and steep.",
      "Many towns charge a tourist tax, payable in cash or at your lodging."
    ],
    esperienzeSlugs: ['sentiero-degli-dei'],
    tripSlugs: ['costiera-e-isole'],
    imageAlt: "The pastel-colored houses of Positano climbing the hill above the beach with boats pulled up on the sand, Amalfi Coast",
    immagine: '/images/italia/costiera-amalfitana.jpg',
  },
  {
    slug: 'isole-golfo-napoli',
    paeseSlug: 'italia',
    ordine: 15,
    nome: "Capri, Ischia and Procida",
    tipologia: ['isole', 'mare', 'terme'],
    giorniConsigliati: "4-5 days to do at least two",
    visitataPersonalmente: true,
    introduzione:
      "Three islands less than an hour from Naples and completely different from one another: Capri vertical, glamorous and very expensive; Ischia large, green and thermal, with springs already used by the Greeks; Procida tiny, colorful and still a fishing village.",
    percheAndarci:
      "You can reach them in a day from Naples, and the contrast among the three, a few miles apart, is the most interesting thing: you can go from the glamour of Capri to Marina Corricella in Procida, where people hang out their laundry, in the same afternoon.",
    cosaVedere: [
      "Capri: the Faraglioni, the Blue Grotto, Tiberius's Villa Jovis, Monte Solaro with the chairlift from Anacapri",
      "The Sentiero dei Fortini and the Scala Fenicia on Capri, which almost nobody does",
      "Ischia: the Aragonese Castle on a small island, the Cavascura hot springs carved into the rock, Monte Epomeo",
      "The Bay of Sorgeto on Ischia, where boiling thermal springs flow straight into the sea",
      "Procida: Marina Corricella with its colorful houses, Terra Murata, the Chiaiolella",
      "The Phlegraean Fields on the mainland, with the Solfatara and submerged Baia",
    ],
    cosaFare: [
      "Capri **sleeping there**, because the island changes completely when the day visitors leave",
      "A thermal bath at Sorgeto on Ischia, where you dig a hole in the gravel and sit in the hot water",
      "Taking the chairlift up Monte Solaro and walking down the Scala Fenicia",
      "Going around Procida by bike or on foot, which takes half a day",
      "Going around the island by boat, which on Capri is the only way to see the grottoes and the Faraglioni up close",
    ],
    doveDormire:
      "Capri is very expensive in high season; Anacapri costs quite a bit less and is quieter. Ischia has the widest and cheapest offering of the three, with its thermal hotels. Procida is the most accessible and the most authentic. **Many people base themselves in Naples or Sorrento and go for the day**: it's the cheapest choice, but the worst for Capri.",
    doveMangiare:
      "Insalata caprese and torta caprese were born on Capri, the latter with almonds and no flour. On Ischia the dish to look for is **coniglio all'ischitana**, a land dish on an island: rabbits were raised in pits dug into the tuff, and island cooking is more peasant than seafaring. On Procida you eat fish and buy the local lemon, huge, used in salads. **On the main squares you pay for the location**: two alleys away you eat better and spend half.",
    comeArrivare:
      "Ferries and hydrofoils from Naples (Molo Beverello for hydrofoils, Calata Porta di Massa for ferries) and from Sorrento. For Procida and Ischia there are also departures from Pozzuoli, closer and less chaotic.",
    comeSpostarsi:
      "On Capri **don't bring a car** (in high season it's banned for non-residents) and you get around by funicular, bus and open-top taxis. On Ischia you need buses or a scooter, because the island is large. Procida is done on foot or by bike.",
    periodoMigliore:
      "**May-June and September.** In July and August Capri receives tens of thousands of day visitors and is unlivable. Ischia works in winter too thanks to the hot springs, and is the only one of the three with a long season.",
    costi:
      "Capri is among the most expensive places in Italy. Ischia has normal prices, Procida low. Ferries cost a few euros; the Blue Grotto requires a ticket plus the little rowboat, with long lines and access suspended when the sea is rough.",
    erroriDaEvitare: [
      "**Doing Capri as a day trip in August**: you arrive with thousands of people, you queue for the funicular, you walk single file in the Piazzetta and you leave. Those who sleep there see another island after six in the evening",
      "Going to the Blue Grotto without checking the sea: with swell, access is suspended, and the line can be hours for five minutes inside",
      "Bringing the car to Capri, where it's banned, or to Procida, where it's useless",
      "Choosing Ischia thinking it's a cheaper Capri: it's larger, greener, more rural, and its reason for being is the hot springs",
      "Skipping Procida because \"it's small\": it's the only one of the three that has remained a real town",
    ],
    confronti: [
      {
        titolo: "Capri, Ischia or Procida: which to choose",
        introduzione:
          "They're a few miles from one another and are treated as interchangeable, when they're three different trips in cost, pace and reason for going.",
        opzioni: [
          {
            nome: "Capri",
            sintesi: "Vertical, glamorous, with the Faraglioni, Villa Jovis and Monte Solaro. It's the most famous island in the Mediterranean and behaves accordingly.",
            costo: "very high, among the highest in Italy",
            durata: "1-2 days, better with an overnight stay",
            pro: [
              "The landscape lives up to the fame: the Faraglioni and the coast from Punta Carena are spectacular",
              "After six in the evening, when the day visitors leave, it becomes another island",
              "The Sentiero dei Fortini and the Scala Fenicia are among the most beautiful walks in the Tyrrhenian and very few people go",
              "Anacapri, up high, has a completely different pace from the Piazzetta",
            ],
            contro: [
              "In high season tens of thousands of day visitors arrive: the Piazzetta is impassable",
              "International-capital prices on everything",
              "The Blue Grotto has very long lines for five minutes inside, and closes when the sea is rough",
            ],
            perChi: "Those who accept the price and above all those who sleep there. As a day trip in August it's the worst way to get to know it.",
          },
          {
            nome: "Ischia",
            sintesi: "The largest of the three, green and mountainous, with thermalism as its identity: the springs have been used since the time of the Greeks.",
            costo: "medium, with the widest and most accessible offering of the three",
            durata: "3-4 days",
            pro: [
              "The hot springs are natural, nothing like a spa: at **Sorgeto** the boiling water flows straight into the sea and you dig a hole in the gravel",
              "The Aragonese Castle on a small island linked by a bridge is one of the most beautiful places in the gulf",
              "Large enough to have an agricultural interior: Monte Epomeo, vineyards, hill towns",
              "Long season: it works in winter too thanks to the hot springs",
            ],
            contro: [
              "Heavily built up in some areas, with heavy urban development along the north coast",
              "You need to get around: the island is large and the buses are slow",
              "Less \"postcard\" than the other two",
            ],
            perChi: "Those looking for natural hot springs, those staying more days, those traveling with family, those who want to spend a fair amount.",
          },
          {
            nome: "Procida",
            sintesi: "The smallest, the least touristy, still a fishing village with the colorful houses of Marina Corricella. Italian Capital of Culture in 2022.",
            costo: "the lowest of the three",
            durata: "half a day or one night",
            pro: [
              "It's the only one that remained a real town: people live there, hang out laundry, repair boats",
              "Marina Corricella, with stepped houses of every color, is one of the most beautiful harbors in Italy",
              "You walk around it in half a day and it costs very little",
              "Very close: forty minutes from Naples",
            ],
            contro: [
              "Little to \"do\" in the classic sense: you walk, look, eat",
              "Modest beaches compared with the other two",
              "Since being named Capital of Culture the number of visitors has grown a lot",
            ],
            perChi: "Those with half a day, those who prefer a lived-in town to a stage set, those who want to spend little.",
          },
        ],
        raccomandazione:
          "With just one day: **Procida**, which costs little and never disappoints. With three or four days: **Ischia** as a base, with a day on Procida, twenty minutes by ferry. **Capri** is worth it, but only sleeping there or coming off-season: doing it as a day trip in August means seeing the worst version of the most beautiful place in the gulf.",
      },
    ],
    miaEsperienza:
      "The difference among these three islands shows at six in the evening. On Capri, at that hour, the last hydrofoils leave with the day visitors and the Piazzetta, which at noon is a dense crowd where you can't move, empties out. Only the residents and the few who sleep there remain, the light drops over the Faraglioni, and you understand why for two thousand years this was the most desired island in the Mediterranean. Those who do it as a day trip in August see only the worst part and go home saying it's overrated. Ischia works differently, because it's large and has an economy of its own: the hot springs are a geological resource already used by the Greeks, more than a hotel service. At **Sorgeto** you go down a staircase to a bay where boiling water flows from the seabed and mixes with the sea: you dig a hole in the gravel and sit, for free, with the cold sea two meters away. Procida is the smallest and the most honest: there's nothing to tick off, you walk to Marina Corricella, sit down and look at a fishing harbor with houses of every color, where people actually live.",
    luoghi: [
      {
        "nome": "Grotta Azzurra, Capri",
        "testo": "A sea cave in Anacapri where light comes in through an underwater opening and turns the water deep blue. You enter only by small rowing boats, lying down, through a low gap.",
        "come": "From Marina Grande by boat to the entrance, or by bus from Anacapri and then on foot to the boatmen's ticket office. You board the little boat and pay on the spot.",
        "quando": "Morning and early afternoon, with calm seas. With swell, access is suspended, and from November to March it is rarely open.",
        "tempo": "1-2 hours with the queue, 5 minutes inside",
        "costo": "about €18-20 for the rowing boat plus entry, paid in cash on the spot (2026, sources differ by a few euros)",
        "consiglio": "Look at the sea before leaving Marina Grande: if it's rough, ask whether the cave is open before paying for a boat trip."
      },
      {
        "nome": "Monte Solaro e Scala Fenicia",
        "testo": "The highest point on Capri, 589 meters, reached from Anacapri by a twelve-minute chairlift. From the top you see both gulfs, Naples and Salerno together. Below, the Scala Fenicia, 921 steps, is the old route between Marina Grande and Anacapri.",
        "come": "Chairlift from the square in Anacapri. To come down on foot you can take the Scala Fenicia, in comfortable shoes.",
        "quando": "Morning, with clear air. The chairlift stops in strong wind.",
        "tempo": "2-3 hours",
        "consiglio": "Go up by chairlift and walk back: the descent is long but the last stretch, between the stone walls, is the best."
      },
      {
        "nome": "Villa Jovis",
        "testo": "The remains of the villa where Emperor Tiberius spent the last years of his reign, on the edge of a sea precipice at 354 meters. Cisterns, terraces and the layout of the residence survive.",
        "come": "On foot from Capri, about 45 minutes uphill along via Longano, partly among houses and then dry-stone walls. No transport.",
        "quando": "Early morning for the cool; opening hours and days should be checked beforehand, they change with the season.",
        "tempo": "2 hours round trip",
        "consiglio": "Bring water: there are few places to refresh on the way up."
      },
      {
        "nome": "Sentiero dei Fortini",
        "testo": "A coastal path on the western side of Anacapri, among old forts and dry-stone walls, with the sea below and almost nobody around. It ends near Punta Carena and its lighthouse.",
        "come": "From Anacapri by bus to Punta Carena, then on foot along the coast toward the Grotta Azzurra. Closed shoes.",
        "quando": "Spring, autumn and late afternoon in summer. At noon there is no shade.",
        "tempo": "1.5-2 hours",
        "costo": "free",
        "consiglio": "End with sunset at Punta Carena: from the lighthouse the sun drops into the sea with no one in front of you."
      },
      {
        "nome": "Castello Aragonese, Ischia",
        "testo": "A rock islet linked to Ischia Ponte by a causeway, with a fortified castle that over the centuries held a whole town, churches and a monastery. From the top you see the island's coast.",
        "come": "On foot from Ischia Ponte across the bridge. There is a panoramic lift to go up.",
        "quando": "Open all year with changing hours; the best light is late afternoon.",
        "tempo": "2-3 hours",
        "url": "https://www.castelloaragonese.it/",
        "consiglio": "The tour is long and uphill: start early and stop in the gardens halfway."
      },
      {
        "nome": "Baia di Sorgeto, Ischia",
        "testo": "A small pebble bay where hot springs flow straight into the sea. You dig a hole in the gravel and sit in the warm water, with the cold sea two meters away. Entry to the bay is free.",
        "come": "From Panza (Forio) a steep staircase goes down to the bay; alternatively a boat from Sant'Angelo. Bus from Forio or Ischia Porto to Panza.",
        "quando": "Morning or late afternoon. In summer it is crowded; in winter it still works thanks to the hot water.",
        "tempo": "2-3 hours",
        "costo": "free",
        "consiglio": "Test the water before sitting: some pools are scalding. Bring water shoes and a towel."
      },
      {
        "nome": "Monte Epomeo",
        "testo": "The extinct volcano at the center of Ischia, 789 meters, with a green tuff summit. From the viewpoint you see the whole island and the gulf. Along the route there are cellars carved in the rock.",
        "come": "Trail from Fontana (bus from Ischia Porto or Forio) or from Serrara Fontana, about 1 hour uphill. You can also take a minibus for the first stretch.",
        "quando": "Clear morning; avoid windy days or after rain because of slippery tuff.",
        "tempo": "3 hours up and down",
        "costo": "free",
        "consiglio": "Eat something at one of the rock restaurants below the summit, in the island's farmhouse cooking."
      },
      {
        "nome": "Procida: Marina Corricella e Terra Murata",
        "testo": "Corricella is a tiered fishing village with houses of a thousand colors around the little harbor. Above it, Terra Murata is the high, fortified part of the island, with the abbey of San Michele and a viewpoint. Procida is small and can be covered in half a day.",
        "come": "Ferry or hydrofoil from Naples or Pozzuoli (about 40 minutes from Naples). From the port at Marina Grande you walk or take the minibus toward Terra Murata.",
        "quando": "All year. Late afternoon and evening are best, with fishermen at work.",
        "tempo": "half a day",
        "consiglio": "Go down to Corricella by the Terra Murata staircase and eat fish at the little harbor under the houses."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: hydrofoil from Naples or Pozzuoli to Procida (about 40 minutes)",
          "Terra Murata and Marina Corricella on foot",
          "Fish lunch at the little harbor",
          "Walk toward Chiaiolella and head back in the afternoon"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Capri, Anacapri, Monte Solaro chairlift and descent by the Scala Fenicia",
          "Overnight in Capri or Anacapri to see the island after 6 pm",
          "Day 2: boat tour of Capri with the Faraglioni, Grotta Azzurra if the sea is calm, back in the evening"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Procida in half a day, then ferry to Ischia",
          "Day 2: Castello Aragonese in the morning, Sorgeto in the afternoon",
          "Day 3: Monte Epomeo in the morning and a thermal park, or a boat trip around the island"
        ]
      }
    ],
    zone: [
      {
        "nome": "Anacapri (Capri)",
        "perChi": "those who want Capri without Piazzetta prices",
        "testo": "Costs less than Capri town, is quieter in the evening and has Monte Solaro. A bus goes down to Marina Grande and Capri; after 9 pm connections are sparse."
      },
      {
        "nome": "Forio and Sant'Angelo (Ischia)",
        "perChi": "thermal baths, sunsets and sea",
        "testo": "Forio, on the west coast, has the sunsets and the evening life. Sant'Angelo, in the south, is a pedestrian village with few cars and coves. Sleeping here means being far from the main port."
      },
      {
        "nome": "Marina Corricella (Procida)",
        "perChi": "anyone looking for a real town",
        "testo": "Rooms in the colorful houses by the little harbor, often small and with stairs. Evenings are quiet. You don't arrive by car."
      },
      {
        "nome": "Naples or Sorrento",
        "perChi": "tight budgets and day trips",
        "testo": "You spend less and go by hydrofoil for the day, but Capri as a day trip in August is the worst way to see it."
      }
    ],
    sapori: [
      {
        "nome": "Insalata caprese and torta caprese",
        "testo": "Tomato, mozzarella and basil, born in Capri. The cake is chocolate and almond, with no flour."
      },
      {
        "nome": "Coniglio all'ischitana",
        "testo": "The dish to look for on Ischia: rabbit cooked in a casserole with tomato, wine and herbs, remembering the rabbits raised in pits in the tuff."
      },
      {
        "nome": "Ravioli capresi",
        "testo": "Ravioli filled with caciotta cheese and marjoram, dressed with fresh tomato sauce. Found in the restaurants of Capri and Anacapri."
      },
      {
        "nome": "Limone di Procida",
        "testo": "Huge, fragrant and mildly acidic: eaten even in salads, turned into limoncello and desserts. Bought from growers."
      },
      {
        "nome": "Fish at Corricella",
        "testo": "On Procida the fish is freshly caught and eaten by the little harbor. You spend less than on the other two islands."
      }
    ],
    attenzioni: [
      "Boat tours and boatmen's fares in Capri should be agreed before boarding: ask the total price and what it includes.",
      "The Grotta Azzurra closes in rough seas, and tickets are paid in cash on the spot: don't prepay to anyone who stops you at the port.",
      "In high season non-residents' cars cannot enter Capri: you move by funicular, bus and taxi.",
      "The Capri funicular has long queues at midday in summer: plan the return well ahead of the last hydrofoil.",
      "Ferry strikes and rough seas cancel runs: don't book a flight or train for the same evening you return from the islands.",
      "At Sorgeto the water in some pools is very hot: test it before sitting, especially with children."
    ],
    esperienzeSlugs: ['sorgeto-ischia'],
    tripSlugs: ['costiera-e-isole'],
    imageAlt: "The coast of Capri seen from above with the Faraglioni and boats moored in the bay",
    immagine: '/images/italia/isole-golfo-napoli.jpg',
  },
  {
    slug: 'eolie',
    paeseSlug: 'italia',
    ordine: 16,
    nome: "Aeolian Islands",
    tipologia: ['isole', 'vulcani', 'vela'],
    giorniConsigliati: "6-7 days to do at least four",
    visitataPersonalmente: true,
    introduzione:
      "Seven volcanic islands north of Sicily, a UNESCO site since 2000 for their geological value: here two types of eruption were studied and named, the **Strombolian** and the **Vulcanian**, which carry the names of these islands in textbooks all over the world. Stromboli is one of the very few volcanoes in the world in permanent eruption for millennia.",
    percheAndarci:
      "They're seven separate worlds a few miles from one another: from glamorous Panarea to Alicudi, where there are no roads and goods still go up by mule. And the best way to tour them, by sailboat, lets you sleep at anchor in front of an erupting volcano.",
    cosaVedere: [
      "Stromboli, with the Sciara del Fuoco and the explosions visible from the sea at night",
      "Vulcano, with the Gran Cratere, the fumaroles and the sulfur mud",
      "Lipari, the largest, with the pumice and obsidian quarries and the Aeolian Archaeological Museum",
      "Salina, the greenest, with two extinct volcanoes, malvasia and capers",
      "Panarea, the smallest and most glamorous, with the prehistoric village of Capo Milazzese",
      "Filicudi and Alicudi, the two most remote: on Alicudi there are no roads, only stairways",
      "The pumice and white sands of Lipari and the underwater thermal waters of Vulcano",
    ],
    cosaFare: [
      "Seeing Stromboli erupt from the sea at night (see the dedicated experience page)",
      "Climbing the Gran Cratere of Vulcano, with the warning that access has been regulated or closed several times due to fumarole activity",
      "Touring the islands **by sailboat**, the way these islands seem made for (see the dedicated experience page)",
      "Walking up Alicudi along the stairways, the only roads on the island",
      "Tasting the Malvasia delle Lipari on Salina, where it's produced",
    ],
    doveDormire:
      "Lipari as a base, for the connections and the widest offering; Salina for quality and calm; Panarea if the budget isn't an issue; Stromboli for the climb and the eruptions. **In high season places sell out**: these are small islands with a finite number of beds. Those who go by sailboat sleep on board and solve the problem.",
    doveMangiare:
      "Aeolian cuisine is humble and from the sea: **pasta alla eoliana** with capers, olives and cherry tomatoes, blue fish, squid, and **pane cunzato**, a slice of bread with tomato, anchovies, capers, oregano and cheese, born as the farmers' meal. **Salina capers** are a Slow Food presidium and are different from all others. To drink, the sweet **Malvasia delle Lipari**, drunk at the end of the meal.",
    comeArrivare:
      "Hydrofoils and ferries from **Milazzo** (the main connection, about an hour to Lipari), Messina, Palermo and in season from Naples. **In rough seas runs get canceled**, and it's the variable that conditions everything: being stuck an extra day is the rule.",
    comeSpostarsi:
      "Inter-island ferries and hydrofoils, frequent in high season and sparse in low. On the islands: scooters on Lipari and Salina, nothing on Panarea (only electric carts), **nothing on Filicudi and Alicudi**, where you get around on foot and mules still carry the goods.",
    periodoMigliore:
      "**June and September.** July and August are saturated: these are small islands, and with the August load they stop working the way they do the rest of the year. From November to March many places close and connections shrink to a minimum.",
    costi:
      "Ferries weigh more than you'd think, especially when doing several islands. Panarea has prices from another category; Filicudi and Alicudi are very cheap. The guided climb of Stromboli has a fixed cost and is mandatory beyond a certain altitude.",
    erroriDaEvitare: [
      "**Planning tight connections**: in rough seas runs get canceled and you're stuck. Don't book a flight for the same evening you return from the islands",
      "Doing only Lipari and Vulcano because they're the most convenient: Salina, Filicudi and Alicudi are the reason to come this far",
      "Taking the Stromboli climb for granted: **access beyond the altitude limit is regulated by civil protection and changes with the volcano's activity**, and in recent years it has been limited several times. It's worth finding out before you leave",
      "Going in August",
      "Bringing the car: on these islands it's useless and largely impossible",
      "Underestimating water: several islands have water problems and water arrives by tanker ship",
    ],
    confronti: [
      {
        titolo: "Aeolians by sailboat or by ferry?",
        introduzione:
          "The Aeolians can be done in two very different ways, and the choice changes the trip more than any other decision. Besides the means of transport, the place where you sleep, what you see and how much you depend on other people's schedules all change.",
        opzioni: [
          {
            nome: "By sailboat",
            sintesi: "You charter a boat, with a skipper or on your own if you have a boating license, and live aboard for a week, moving between the islands and sleeping at anchor.",
            costo: "a boat for 8-10 people split among the crew often costs less than seven hotel nights each in high season, plus skipper, fuel and shared fund",
            durata: "7 days, the standard charter format",
            pro: [
              "**Stromboli at night from the sea**: you sit at anchor in front of the Sciara del Fuoco with the engine off and watch the explosions. That alone justifies the formula",
              "You reach coves and anchorages inaccessible from land",
              "No dependence on hydrofoil schedules and no lodging problems in high season",
              "With a full crew, the cost per person is competitive with hotels",
              "You sleep at anchor, an experience in itself",
            ],
            contro: [
              "Tight spaces and shared life: with the wrong people, seven days are long",
              "The sea decides: in strong wind you change plans or stay in port",
              "Limited comfort: rationed water, short showers, bunks",
              "You need a skipper if you don't have a boating license, and it must be factored in",
              "Those prone to seasickness find out on day one",
            ],
            perChi: "Groups of friends, those who want to see Stromboli from the sea, those who can't stand depending on hydrofoils.",
          },
          {
            nome: "Land base and ferries",
            sintesi: "You pick a base, usually Lipari or Salina, and do the other islands as day trips by hydrofoil and ferry.",
            costo: "lodging plus inter-island tickets, which add up",
            durata: "5-7 days",
            pro: [
              "Comfort: a fixed bed, a real shower, luggage that stays put",
              "You can change plans according to the weather without consequences",
              "Accessible to everyone, including those prone to seasickness",
              "You get to know the islands where you sleep better, because you live the evening",
            ],
            contro: [
              "**You depend on schedules**: day hydrofoils limit which islands you can reach and force you to leave in the afternoon",
              "In rough seas runs are canceled and you stay put",
              "In high season lodging sells out and prices rise",
              "Stromboli at night from the sea can only be done with organized, scheduled excursions",
            ],
            perChi: "Couples and families, those who don't want to live on a boat, those with flexible schedules.",
          },
        ],
        raccomandazione:
          "For a group with seven days: **sailing**, without hesitation. The cost per person holds up against high-season hotels, lodging and schedule problems disappear, and you get what no land-based formula offers: sitting at anchor in front of Stromboli at night, engine off, watching a volcano explode every few minutes. As a couple or with children, base on **Salina** (prettier and quieter than Lipari) with ferries, factoring in one night on Stromboli.",
      },
    ],
    miaEsperienza:
      "The Aeolians are the Italian archipelago with the highest variety, and the way to understand it is to do four islands instead of two. You go from Panarea, where yachts dock in summer and prices are Costa Smeralda, to Alicudi, which has fewer than a hundred inhabitants, no roads (only stone stairways) and goods that still go up by mule. They're twenty miles apart. But the strongest memory, with no equal in Italy, is Stromboli seen from the sea at night. You stop at anchor in front of the **Sciara del Fuoco**, the bare slope down which the material rolls, you turn off the engine, and you sit in the dark waiting. Every few minutes the crater spits incandescent material that runs down the slope to the water, with a dull sound that arrives a moment later. There's no lighting or organized show: it's a volcano doing this for millennia, with an inhabited village below and the lights of the houses on a few hundred meters from the flow. About the climb on foot, though, let's be clear that **access beyond the altitude limit is regulated and changes with activity**: in recent years it has been limited several times, and it's worth finding out before building a trip around it.",
    luoghi: [
      {
        "nome": "Stromboli e la Sciara del Fuoco",
        "testo": "A volcano in near-continuous eruption for millennia, with an inhabited village at its foot. Every few minutes the crater throws incandescent material that rolls down the Sciara del Fuoco to the sea. The best way to see it is from the water, at night.",
        "come": "Hydrofoil or ferry from Lipari, Milazzo or the other islands. To see it from the sea take an evening boat excursion, or sleep on a sailboat in front of the Sciara with the engine off.",
        "quando": "In the evening and at night, with a calm sea. Boat excursions leave in late afternoon and return after dark.",
        "tempo": "one evening, better a night",
        "consiglio": "Turn off the engine and keep quiet: the sound arrives a moment after the light. Bring a sweater; the sea is cold at night."
      },
      {
        "nome": "Salita a Stromboli",
        "testo": "The climb to the craters is regulated by the authorities: in recent years altitude limits and rules have changed several times with the volcano's activity. Up to a certain altitude you climb without a guide, beyond that an authorized volcanological guide is required, and at the top access is forbidden.",
        "come": "Trails start from the village of Stromboli. Authorized guides run sunset climbs and return in the dark, with helmet and torch.",
        "quando": "Climb in late afternoon to see the explosions in the dark. Book ahead in high season and check the current rules.",
        "tempo": "5-6 hours",
        "consiglio": "Check the current rule with the Comune di Lipari or local guides: don't build the trip around a climb that may be banned."
      },
      {
        "nome": "Vulcano: Gran Cratere e fanghi",
        "testo": "A crater of about 390 meters with sulphur fumaroles on the rim, reached by about an hour's climb from Porto di Levante. Below are the sulphurous mud baths and a sea that bubbles with gas near the Faraglioni.",
        "come": "Hydrofoil from Lipari in about 10 minutes. The trail starts on foot from the port. The mud pool is near the port.",
        "quando": "Early morning for heat and sun. Access to the crater has been regulated or closed several times due to fumarole activity: check beforehand.",
        "tempo": "half a day for the crater, 1 hour for the mud",
        "consiglio": "The mud stains and the smell stays on you: old swimsuit and no silver jewelry. Breathe little near the fumaroles."
      },
      {
        "nome": "Lipari: Castello e Museo Archeologico",
        "testo": "The biggest island has a castle on the rock overlooking the harbor, with the Museo Archeologico Regionale Eoliano inside. It holds finds from the Neolithic to Greece, including the vase collection and theater masks. Outside are the pumice quarries and the white beaches of Canneto.",
        "come": "You land at Marina Corta and walk up to the Castello. For the pumice quarries, bus or scooter toward Canneto and Acquacalda.",
        "quando": "Morning for the museum, afternoon for the sea. The museum has a closing day: check beforehand.",
        "tempo": "half a day",
        "consiglio": "Go up to the Quattrocchi viewpoint, on the south side, at sunset: you see Vulcano against the sun."
      },
      {
        "nome": "Salina: Pollara e Fossa delle Felci",
        "testo": "The greenest island, with two twin extinct volcanoes. Pollara is the crater that collapsed into the sea, with a viewpoint and a sheer rock stack. Monte Fossa delle Felci, the highest point of the archipelago, can be climbed in a few hours through woods and caper bushes.",
        "come": "Hydrofoil from Lipari to Rinella or Santa Marina. Around the island by bus or scooter. Pollara is on the west side.",
        "quando": "Spring and early summer for the green; sunset at Pollara. Access to Pollara beach is often limited because of rockfall risk: check.",
        "tempo": "1 day",
        "consiglio": "Taste the Malvasia in one of the wineries and buy capers directly from producers."
      },
      {
        "nome": "Panarea e Capo Milazzese",
        "testo": "The smallest and most fashionable, with white houses and no cars. The prehistoric village of Capo Milazzese, from the Bronze Age, is on a southern headland, with the stone huts still visible. At sea are the islets, including Lisca Bianca.",
        "come": "Hydrofoil from Lipari or Stromboli. On foot from the port toward the south, about 40 minutes to Capo Milazzese; luggage travels on electric carts.",
        "quando": "June and September. In summer the evenings are full of yachts and prices rise.",
        "tempo": "half a day",
        "consiglio": "A boat trip round the islets is the right way to see Panarea's sea, but haggle the price."
      },
      {
        "nome": "Filicudi: Grotta del Bue Marino e Capo Graziano",
        "testo": "An island with almost no tourism. Capo Graziano has a prehistoric village and a dark rocky coast. The Grotta del Bue Marino is a sea cave reachable by boat, with clear water.",
        "come": "Hydrofoil from Lipari or Salina in about 1 hour. On the island you walk; water taxis tour the caves.",
        "quando": "June and September; rough seas prevent entry to the caves.",
        "tempo": "1 day",
        "consiglio": "Sleep there at least one night: in the evening, when the hydrofoils leave, the island is nearly empty."
      },
      {
        "nome": "Alicudi",
        "testo": "The most remote, round and nearly roadless, with a few dozen permanent residents. You climb by mule tracks and stone stairways; mules still carry goods. From the top you see the whole archipelago.",
        "come": "Hydrofoil from Lipari or Filicudi. From the port you climb on foot, with no vehicles.",
        "quando": "Spring and early autumn. In summer the climb is hard in the heat.",
        "tempo": "1 day or one night",
        "consiglio": "Pack light: luggage goes up on shoulders or by mule. Book lodging well in advance."
      }
    ],
    programmi: [
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: hydrofoil from Milazzo to Lipari, Castello and Archaeological Museum",
          "Afternoon at Canneto, swim on the pumice beaches",
          "Day 2: morning on Vulcano for the crater and mud, back to Lipari in the afternoon"
        ]
      },
      {
        "titolo": "4 days",
        "tappe": [
          "Day 1: Lipari, Castello and Museum",
          "Day 2: Vulcano in the morning, Salina in the afternoon",
          "Day 3: Panarea as a day trip or by boat, swim at Lisca Bianca",
          "Day 4: Stromboli, evening boat to the Sciara del Fuoco, overnight there"
        ]
      },
      {
        "titolo": "7 days",
        "tappe": [
          "Day 1-2: Lipari and Vulcano",
          "Day 3: Salina with Pollara and Fossa delle Felci",
          "Day 4: Panarea and Capo Milazzese",
          "Day 5: Stromboli, Sciara del Fuoco at night from the sea",
          "Day 6: Filicudi, Grotta del Bue Marino",
          "Day 7: Alicudi or rest, back to Milazzo with margin for weather and hydrofoils"
        ]
      }
    ],
    zone: [
      {
        "nome": "Lipari",
        "perChi": "anyone wanting the most convenient base",
        "testo": "Connections to all the islands, plenty of lodging and restaurants. It is the busiest in summer, but it is the point from which everything is reachable in a day."
      },
      {
        "nome": "Salina",
        "perChi": "calm and quality",
        "testo": "Greener and quieter, with villages such as Malfa, Santa Marina and Rinella. Less connected, you use a scooter. Dinner with Malvasia is the reason to stay."
      },
      {
        "nome": "Stromboli",
        "perChi": "those who want the volcano",
        "testo": "Low black houses, dark sand beaches, the volcano's noise at night. Small, with few beds and high prices; the climb and the excursions start here."
      },
      {
        "nome": "Panarea",
        "perChi": "those who can spend",
        "testo": "A tiny, fashionable island with very high prices in the big-yacht season. You go on foot or by electric cart."
      }
    ],
    sapori: [
      {
        "nome": "Pane cunzato",
        "testo": "A slice of bread with tomato, anchovies, capers, oregano and cheese, born as a farmers' meal. Eaten on every island, often with local products."
      },
      {
        "nome": "Pasta alla eoliana",
        "testo": "Pasta with capers, olives, cherry tomatoes and blue fish. A simple pantry dish."
      },
      {
        "nome": "Capperi di Salina",
        "testo": "A Slow Food Presidium, hand-picked and kept under salt. Different from others for their aroma."
      },
      {
        "nome": "Malvasia delle Lipari",
        "testo": "A sweet passito wine drunk at the end of a meal. Mostly produced on Salina."
      },
      {
        "nome": "Granita",
        "testo": "As across Sicily, but here with brioche for breakfast and in local flavors of coffee, almond and pistachio."
      }
    ],
    attenzioni: [
      "Hydrofoils and ferries are cancelled in rough seas: don't book tight connections and don't book a flight for the evening you return.",
      "The climb to the Stromboli crater and to Vulcano's Gran Cratere is regulated and changes with activity: check current rules before booking.",
      "Lodging and berths sell out in high season: book months ahead for July and August.",
      "Water is scarce and arrives by tanker ship: use it sparingly.",
      "On Vulcano, fumaroles and gas are concentrated near the crater and the mud: stay in marked areas and move away if the air gets heavy.",
      "Boat tours and water taxis: agree on price and duration before boarding."
    ],
    esperienzeSlugs: ['stromboli-notte', 'eolie-in-vela'],
    tripSlugs: ['eolie-in-vela'],
    imageAlt: "The Aeolian Islands seen from the rim of the Gran Cratere of Vulcano, with Lipari and Salina on the horizon",
    immagine: '/images/italia/eolie.jpg',
  },
  {
    slug: 'sicilia-occidentale',
    paeseSlug: 'italia',
    ordine: 17,
    nome: "Western Sicily",
    tipologia: ['archeologia', 'città d\'arte', 'gastronomia'],
    giorniConsigliati: "7-8 days",
    visitataPersonalmente: true,
    introduzione:
      "The other half of the island: the Arab, Norman, Phoenician and Punic one. Palermo with the Palatine Chapel and the Cathedral of Monreale, the temples of Segesta and Selinunte, the salt pans of Trapani and Marsala, Erice seven hundred and fifty meters above the sea, and the Egadi islands out front.",
    percheAndarci:
      "Monreale and the Palatine Chapel are among the masterpieces of the European Middle Ages, built by Norman kings with Arab craftsmen and Byzantine mosaicists, and Palermo's street food has no equivalent in Italy. Segesta and Selinunte, then, have temples almost like Agrigento's with a tenth of the people.",
    cosaVedere: [
      "The **Cathedral of Monreale**, with six thousand square meters of gold mosaics and a cloister where every capital is different",
      "The Palatine Chapel in Palermo, with its Arab muqarnas ceiling on a Norman structure: the Arab-Norman itinerary is a UNESCO site",
      "The markets of Palermo, Ballarò, Vucciria and Capo: street food and theater together",
      "Segesta, with its unfinished Doric temple isolated on a hill and the Greek theater at the top",
      "Selinunte, the largest archaeological park in Europe, with temples by the sea",
      "Erice at 750 meters, almost always covered by fog, and Trapani with its salt pans and windmills",
      "Mozia, the Phoenician island in the Stagnone, with the submerged Punic road and the Giovinetto (Young Man) statue",
      "The Zingaro Reserve and San Vito Lo Capo",
    ],
    cosaFare: [
      "Monreale early in the morning, before the tour buses (see the dedicated experience page)",
      "Touring the Palermo markets while eating: it's the right way to get to know the city",
      "The salt pans of Trapani and Marsala at sunset, when the water turns pink",
      "The crossing to Mozia in the Stagnone, with the boat crossing shallow waters where a Punic road once ran",
      "Trekking in the Zingaro Reserve, the first reserve established in Sicily",
    ],
    doveDormire:
      "Palermo as a base for the first days: the historic center around Ballarò and the Kalsa is the liveliest choice. Then Trapani or Marsala for the west, or San Vito Lo Capo for the sea. Erice for one night, to see it in the evening when the tour buses have gone and the fog remains.",
    doveMangiare:
      "Palermo is the Italian capital of street food: **arancine** (feminine, here), chickpea **panelle**, **sfincione**, crocchè, and **pane con la milza** (spleen sandwich), for the brave, to try at least once at the historic stalls. Then pasta con le sarde, sarde a beccafico, fish couscous at **San Vito Lo Capo** and in Trapani, a direct inheritance of the Arab and North African world. The sweets: cassata, cannoli and frutta martorana. The wine: Marsala in its own zone, Grillo and Catarratto for the whites.",
    comeArrivare:
      "Fly to Palermo Punta Raisi, or Trapani Birgi for low-cost carriers. By ferry from Naples, Genoa and Civitavecchia. **A car is indispensable** for getting around outside Palermo.",
    comeSpostarsi:
      "Palermo is done on foot in the historic center, with public transport that works poorly. Outside you need a car: highways connect Palermo, Trapani and Marsala, the rest is state road. For the Egadi, hydrofoils from Trapani and Marsala.",
    periodoMigliore:
      "**April-June and September-October.** In summer the west is scorching and the archaeological areas have no shade. Winter is mild and excellent for Palermo and the sites, with the sea out of play. In September there's the Cous Cous Fest at San Vito Lo Capo.",
    costi:
      "For lodging and restaurants it costs quite a bit less than eastern Sicily. Monreale has separate tickets for the cathedral, cloister and terraces; Segesta and Selinunte have modest entrance fees; the markets cost nothing beyond what you eat.",
    erroriDaEvitare: [
      "Going to Monreale in the middle of the day, when the tour buses arrive: at eight thirty you're inside with ten people",
      "Judging Palermo by the decay of certain areas and stopping there: it's the most layered city in Italy and asks you to adapt",
      "Skipping Segesta and Selinunte because \"there's already Agrigento\": Segesta has an isolated temple on a hill with nobody around, and Selinunte is the largest archaeological park in Europe",
      "Doing Selinunte at noon in summer: it's vast and without shade",
      "Expecting Erice to be clear: it's at 750 meters and fog covers it for much of the year: it's part of the place",
      "Leaving objects in view in the car in urban areas",
    ],
    miaEsperienza:
      "Western Sicily is the one you do the second time, and in many respects it's the strongest. The **Cathedral of Monreale** holds up against any comparison: a building constructed in the twelfth century by Norman kings, with Arab architects and craftsmen and Byzantine mosaicists, where a Christ Pantocrator almost twenty meters high looks down from an apse entirely covered in gold. Around it, six thousand square meters of mosaics tell the Old and New Testament. Outside there's a cloister with two hundred and twenty-eight small columns, and **every capital is different from the others**. There you understand that Sicily held together all the cultures that conquered it, in the same building and at the same moment. The second thing is Palermo, which asks you to adapt: it's chaotic, in some areas run-down, noisy, and those who get irritated go home saying it's dirty. Those who get into the rhythm discover the markets, which in the morning are a theater, with vendors shouting the abbanniata, a kind of sung call, and where you eat standing up and walking for two euros. And then Segesta: a fifth-century Doric temple, never finished, standing alone on a hill in the middle of nowhere, with the wind. There are twenty people.",
    luoghi: [
      {
        "nome": "Mercati di Palermo: Ballarò, Capo e Vucciria",
        "testo": "Three historic markets in the center, with Arab origins. In the morning they are theater: fish stalls, spices, vegetables, vendors shouting the abbanniata. You eat standing up, walking, spending a few euros.",
        "come": "On foot from the historic center. Ballarò is near Casa Professa and Porta Nuova; the Capo is behind the Teatro Massimo; the Vucciria lies between via Roma and the port.",
        "quando": "Morning, from nine to noon. In the afternoon many stalls close. Sunday is emptier.",
        "tempo": "2-3 hours",
        "consiglio": "Eat panelle, arancine and sfincione standing, at the stalls where locals queue, not at places with an English menu."
      },
      {
        "nome": "Palazzo dei Normanni e Cappella Palatina",
        "testo": "The 12th-century royal chapel: walls of gold mosaics, a wooden muqarnas ceiling of Arab workmanship and marble floors. It is one of the most beautiful churches in Italy and part of the Arab-Norman itinerary, a UNESCO site.",
        "come": "From the center it's about 10 minutes on foot toward Porta Nuova. Ticket with booking, entry with security checks and short queues if you go early.",
        "quando": "In the morning, as soon as it opens. Hours change with services and with sessions of the regional assembly: check beforehand.",
        "tempo": "1.5 hours",
        "costo": "about €19 full price, with the Royal Apartments (2025, to be verified)",
        "url": "https://www.federicosecondo.org/",
        "consiglio": "Look up at the ceiling: the muqarnas are painted wood, with scenes of Arab court life."
      },
      {
        "nome": "Duomo di Monreale",
        "testo": "The Norman masterpiece of the 12th century: six thousand square meters of gold-ground mosaics, with a Christ Pantocrator almost twenty meters high in the apse. Next door the cloister has 228 small columns, and every capital is different. The terraces above overlook the Conca d'Oro.",
        "come": "AMAT bus from Palermo (piazza Indipendenza or corso Calatafimi), about 30-40 minutes. You enter from the side facade; cloister and terraces have tickets.",
        "quando": "First thing in the morning, before the tour buses: at half past eight you're inside with ten people. Hours vary with services.",
        "tempo": "2 hours",
        "costo": "about €13 for the combined ticket (cathedral, cloister, terraces, museum), €6 for the cathedral alone (2026, to be verified)",
        "consiglio": "Climb the terraces to see the roof and Palermo; bring a sweater for the cool inside."
      },
      {
        "nome": "Segesta",
        "testo": "A Doric temple of the 5th century BC, never finished, standing alone on a hill in the middle of nowhere, with the wind. Higher up is the Greek theater with a view of the Gulf of Castellammare.",
        "come": "From Palermo by car, about an hour on the Palermo-Trapani motorway. The temple is near the entrance; for the theater there is a shuttle or a walk uphill.",
        "quando": "Morning or late afternoon. In summer there is no shade: avoid midday.",
        "tempo": "2 hours",
        "costo": "Archeopass Segesta-Selinunte-Gibellina: about €25.40 full price, valid one week (2026, to be verified)",
        "consiglio": "Climb to the theater: at the top you understand why the Greeks built it here."
      },
      {
        "nome": "Selinunte",
        "testo": "The largest archaeological park in Europe: Doric temples by the sea, the acropolis, the city with its streets. Temple E has been rebuilt upright; the others are gigantic heaps of stones fallen in an earthquake.",
        "come": "By car from Trapani (about an hour and forty) or from Palermo (about two hours). Inside the park there is a shuttle; you can also rent a bike.",
        "quando": "Early morning or late afternoon. At midday in summer it is vast and shadeless.",
        "tempo": "3 hours",
        "costo": "included in the Segesta-Selinunte-Gibellina Archeopass (2026, to be verified)",
        "consiglio": "Finish on Marinella beach, a step from the temples."
      },
      {
        "nome": "Erice",
        "testo": "A medieval village 750 meters above Trapani, often wrapped in fog. Cobbled lanes, the Castle of Venus at the top, churches and pastry shops with almond sweets.",
        "come": "By car on a hairpin road from Trapani, or by regular bus. The Trapani-Erice cable car, when running, is the shortest way.",
        "quando": "In the evening, when the tour buses are gone and the fog remains. The fog is part of the place.",
        "tempo": "half a day",
        "consiglio": "Sleep there one night to see it empty, and bring a sweater even in summer."
      },
      {
        "nome": "Saline di Trapani e Marsala, Mozia",
        "testo": "The Stagnone lagoon and the salt pans between Trapani and Marsala: flat basins, windmills and mountains of salt. In the middle is Mozia, a Phoenician island with a submerged Punic road and the statue of the Giovinetto, reached by boat.",
        "come": "By car along the Via del Sale. For Mozia, a little boat from the Birgi landing, a few minutes. The salt museum is at Nubia.",
        "quando": "Sunset, when the water turns pink. Mozia: days without strong wind.",
        "tempo": "half a day",
        "consiglio": "Stop in Marsala for the wine of the same name: the historic wineries run visits with tastings."
      },
      {
        "nome": "Riserva dello Zingaro",
        "testo": "The first nature reserve created in Sicily, on the coast between Scopello and San Vito Lo Capo: seven kilometers of roadless coast, with pebble coves and clear water, reachable only on foot.",
        "come": "Two entrances: Scopello (south) and San Vito Lo Capo (north). You leave the car in the car parks at the entrance.",
        "quando": "Spring and autumn; in summer start at opening and bring water. Hours and entrances should be checked.",
        "tempo": "half a day or all day",
        "consiglio": "Water shoes and a mask: the sea in the coves is among the most beautiful in Sicily."
      },
      {
        "nome": "San Vito Lo Capo",
        "testo": "A seaside town with a long beach of pale sand, under Monte Monaco. It is also the couscous town: every September there is the Cous Cous Fest, an international festival.",
        "come": "From Trapani by car, about an hour; from Palermo about an hour and a half. Paid parking in town, full in summer.",
        "quando": "June and September, for the sea and the couscous. In July and August it is full.",
        "tempo": "half a day or one night",
        "consiglio": "Try the fish couscous at a place with a family recipe, and book in September."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Palazzo dei Normanni and Cappella Palatina at opening",
          "Capo and Ballarò markets, street food lunch",
          "Afternoon: Cathedral and the Kalsa district",
          "Evening: aperitivo at piazza Marina or at Mondello in summer"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Palermo, Cappella Palatina and markets, then Monreale with the cloister",
          "Day 2: Segesta in the morning, Erice in the afternoon, night in Trapani",
          "Day 3: Selinunte early, then salt pans and Marsala, back to Palermo"
        ]
      },
      {
        "titolo": "5 days",
        "tappe": [
          "Day 1: Palermo and markets",
          "Day 2: Monreale in the morning, Palazzo dei Normanni in the afternoon",
          "Day 3: Segesta, Erice, Trapani",
          "Day 4: Mozia and salt pans, sunset at the Stagnone",
          "Day 5: Zingaro or San Vito Lo Capo, or Selinunte in the morning"
        ]
      }
    ],
    zone: [
      {
        "nome": "Palermo historic center (Kalsa, Ballarò)",
        "perChi": "those who want to live the city",
        "testo": "Lively, walking distance from everything, with restaurants and markets close. Noisy at night, with narrow streets and some decay on certain streets. Leave the car in a guarded car park."
      },
      {
        "nome": "Trapani",
        "perChi": "anyone wanting a base for the west",
        "testo": "Close to Erice, the salt pans, the Egadi and Birgi airport. A tuff-stone old town with lanes and the port for the hydrofoils. Cheaper than Palermo."
      },
      {
        "nome": "San Vito Lo Capo",
        "perChi": "sea and Zingaro",
        "testo": "Beach, coves, couscous. Crowded in August with difficult parking; much more pleasant in June and September."
      },
      {
        "nome": "Erice",
        "perChi": "one night of silence",
        "testo": "Small, medieval, almost empty at night. Few beds, wind and fog. It's for one night, no more."
      }
    ],
    sapori: [
      {
        "nome": "Arancine",
        "testo": "Fried rice balls with ragù or butter and ham. Here it's «arancina», feminine."
      },
      {
        "nome": "Panelle and crocchè",
        "testo": "Chickpea-flour fritters served in a bun, with potato croquettes. Pure street food, to eat at the market."
      },
      {
        "nome": "Sfincione",
        "testo": "Soft focaccia with onion, caciocavallo, anchovies and tomato. Bought from street vendors and bakeries."
      },
      {
        "nome": "Pane con la milza",
        "testo": "A bun with veal spleen and lung, at the historic stalls; choose «schietta» (with lemon and salt) or «maritata» (with caciocavallo)."
      },
      {
        "nome": "Pasta con le sarde and fish couscous",
        "testo": "Pasta with sardines, wild fennel, raisins and pine nuts is a Palermo dish. Fish couscous is typical of Trapani and San Vito."
      },
      {
        "nome": "Cassata and cannoli",
        "testo": "The Sicilian sweets par excellence: cassata with ricotta and marzipan, cannoli filled to order."
      }
    ],
    attenzioni: [
      "Palermo has a ZTL in the historic center and fines arrive at home: leave the car outside and use guarded car parks.",
      "Unofficial parking attendants are common: pay only official or guarded car parks.",
      "Leave nothing visible in the car, especially in urban areas and near archaeological sites.",
      "Pickpockets in markets and crowded streets: carry your backpack in front.",
      "Segesta and Selinunte have no shade: water, a hat, and visit early in summer.",
      "Hours and prices of sites change; many sites are free on the first Sunday of the month (to be verified): check the official sites."
    ],
    esperienzeSlugs: ['monreale', 'street-food-palermo'],
    tripSlugs: ['sicilia-completa'],
    imageAlt: "The crenellated viewpoint of Erice above a sea of clouds, with the Trapani coast in the background",
    immagine: '/images/italia/sicilia-occidentale.jpg',
  },
  {
    slug: 'isole-siciliane',
    paeseSlug: 'italia',
    ordine: 18,
    nome: "Egadi, Pantelleria and Pelagie",
    tipologia: ['isole', 'mare', 'natura'],
    giorniConsigliati: "4-5 days per archipelago",
    visitataPersonalmente: true,
    introduzione:
      "The other Sicilian islands, the ones that aren't the Aeolians: the **Egadi** off Trapani, with Favignana and the tuff quarries; **Pantelleria**, closer to Africa than to Sicily, without a sand beach; and the **Pelagie**, with Lampedusa sitting on the African plate and having one of the most celebrated beaches in the Mediterranean.",
    percheAndarci:
      "They're three worlds different from one another and from everything else: Favignana is transparent sea and the industrial archaeology of the tonnara, Pantelleria is lava rock, wind and wine, Lampedusa is geologically Africa and has a sea unlike anything in Italy.",
    cosaVedere: [
      "Favignana: Cala Rossa, Cala Azzurra, the **tuff quarries** that hollowed out the island and the former Florio tonnara plant",
      "Levanzo, with the **Grotta del Genovese** and its Paleolithic cave paintings",
      "Marettimo, the wildest of the Egadi, with almost no tourism",
      "Pantelleria: the **Lago Specchio di Venere**, the dammusi, the Pantesco gardens and the natural steam caves",
      "The Montagna Grande and the Arco dell'Elefante in Pantelleria",
      "Lampedusa: the **Spiaggia dei Conigli**, a nature reserve where the Caretta caretta turtle nests, with regulated access",
      "Linosa, volcanic and black, with two hundred inhabitants",
    ],
    cosaFare: [
      "Touring Favignana by bicycle: it's the right way, and the island is flat",
      "A night swim in the Lago Specchio di Venere in Pantelleria, with thermal mud on the shore",
      "Visiting a Pantelleria winery, where the vine is grown **in pits dug into the ground** to protect it from the wind, a technique recognized as UNESCO intangible heritage",
      "Snorkeling and diving: in the Egadi and the Pelagie they're among the best in Italy",
      "The Grotta del Genovese on Levanzo, with engravings from twelve thousand years ago",
    ],
    doveDormire:
      "Favignana has the widest offering and the most accessible prices. On Pantelleria you sleep in **dammusi**, the lava-stone houses with domed roofs, the right formula. Lampedusa has a seasonal offering that almost entirely closes in winter. **On all three, places sell out in August.**",
    doveMangiare:
      "In the Egadi, tuna in all its preserves: the Favignana tonnara was the most important in the Mediterranean, and the **mattanza** was practiced until a few decades ago. On Pantelleria, **pesto pantesco**, capers, which here are a Slow Food presidium and are picked by hand, and **passito di Pantelleria**, one of the great sweet wines of the world. On Lampedusa, fish, and a cuisine shaped by the closeness to Tunisia.",
    comeArrivare:
      "**Egadi:** hydrofoil from Trapani, twenty minutes to Favignana. **Pantelleria:** flight from Trapani or Palermo (in season also from Milan and Rome), or overnight ferry from Trapani, six hours. **Lampedusa:** flight from Palermo or Catania, or ferry from Porto Empedocle, eight hours. They're the Italian islands farthest from the mainland.",
    comeSpostarsi:
      "Favignana by bicycle or scooter. **Pantelleria requires a car**: it's large, mountainous and the points of interest are spread out. Lampedusa by scooter or car, but it's small.",
    periodoMigliore:
      "**June and September**, like all the smaller islands. On Pantelleria the season is longer and the island works in spring and autumn too thanks to wine and thermalism. Lampedusa from November to March almost entirely closes.",
    costi:
      "The main expense is transport, and it's no small one: Pantelleria and Lampedusa require a flight or a long ferry. **The Spiaggia dei Conigli on Lampedusa has regulated and capped access** for turtle nesting: it's worth finding out beforehand.",
    erroriDaEvitare: [
      "Going to Pantelleria looking for sand beaches: **there are none**. You enter the water from the rocks, and those who don't know are disappointed",
      "Underestimating the wind on Pantelleria: it's a constant and can be strong for days",
      "Showing up at the Spiaggia dei Conigli without knowing the access rules, since it's capped",
      "Planning tight ferry connections for Pantelleria and Lampedusa, which don't sail in rough seas",
      "Doing Favignana by car: it's flat, small and the car is a nuisance: the bike is the right vehicle",
      "Going to Lampedusa off-season expecting services: from November to March the island shuts down",
    ],
    confronti: [
      {
        titolo: "Favignana, Pantelleria or Lampedusa",
        introduzione:
          "They get lumped together because they're all \"Sicilian islands\", but they're three entirely different trips in geology, accessibility, cost and type of vacation.",
        opzioni: [
          {
            nome: "Favignana and the Egadi",
            sintesi: "Twenty minutes by hydrofoil from Trapani: flat island, transparent sea, tuff quarries and the industrial archaeology of the Florio tonnara.",
            costo: "the lowest of the three, both to get there and to stay",
            durata: "3-4 days",
            pro: [
              "Accessibility: you arrive in twenty minutes from Trapani, even as a day trip",
              "You tour it by bicycle: the island is flat and small",
              "Cala Rossa and Cala Azzurra have water that holds up against any comparison",
              "The **tuff quarries** are a setting you don't find elsewhere: the island was hollowed out, and today there are underground gardens inside the quarries",
              "Levanzo with its Paleolithic cave paintings is twenty minutes away",
            ],
            contro: [
              "Very crowded in July and August: it's the Sicilians' island and in those months you can tell",
              "Few sand beaches, you enter the water from the rocks",
              "Little life beyond the sea",
            ],
            perChi: "Those with few days, those coming from western Sicily, those who want to spend little.",
          },
          {
            nome: "Pantelleria",
            sintesi: "Closer to Africa than to Sicily: a volcanic island of black rock, without sand beaches, with dammusi, constant wind and heroic viticulture.",
            costo: "medium-high, but without mass tourism",
            durata: "5-7 days",
            pro: [
              "It looks like no other Italian island: lava-stone terraces, **Pantesco gardens** (circular walls that protect a single tree), natural steam caves",
              "The **Pantesco bush-trained vine** is UNESCO intangible heritage: it's grown in pits dug into the ground to protect it from the wind",
              "Passito and capers are among the best products in Italy",
              "The Lago Specchio di Venere with thermal mud and the night swim",
              "Return tourism, not mass: people come back",
            ],
            contro: [
              "**No sand beach**: you enter the water from the rocks, and for many it's a serious problem",
              "Wind is a constant and can blow hard for days",
              "You need a car: the island is large and mountainous",
              "Connections less frequent and more expensive",
            ],
            perChi: "Those seeking an island of character rather than beaches, those who love wine, those who come back.",
          },
          {
            nome: "Lampedusa and the Pelagie",
            sintesi: "The southernmost island of Italy, geologically on the **African plate**, with the Spiaggia dei Conigli and a sea unlike anything in the rest of the country.",
            costo: "high, above all to get there",
            durata: "5-7 days",
            pro: [
              "The sea is the most beautiful in Italy: transparent water over light seabeds, with shades you can see from above",
              "The **Spiaggia dei Conigli** is a nature reserve and a nesting site of the Caretta caretta",
              "Geologically it's Africa: the vegetation, rock and landscape aren't Mediterranean in the Italian sense",
              "Linosa, volcanic and black, a few miles away, with two hundred inhabitants",
            ],
            contro: [
              "The hardest to reach: a flight or eight hours of ferry from Porto Empedocle",
              "High prices in high season, with the season concentrated in three months",
              "From November to March the island almost entirely shuts down",
              "Access to the Spiaggia dei Conigli is capped and regulated",
              "Barren island: those looking for green won't find it",
            ],
            perChi: "Those who put the sea first and accept the cost and the distance to have it at the highest level.",
          },
        ],
        raccomandazione:
          "For pure, uncompromising sea, **Lampedusa**: it's the most beautiful in Italy and worth the trip, as long as you go in June or September and factor in the cost. For an island with a character of its own and a culture to understand, **Pantelleria**, knowing there are no sand beaches. **Favignana** is the right choice for those already in western Sicily with three days: it costs little, you arrive in twenty minutes and it doesn't disappoint.",
      },
    ],
    miaEsperienza:
      "These three islands show well how wide the word \"Sicily\" is. Favignana is the simplest and most immediate: you arrive in twenty minutes from Trapani, rent a bike and in a day you've toured all of it, with the water of Cala Rossa a turquoise that doesn't look Italian. What makes it different from the other islands is the tuff: for centuries building stone was quarried here, and the result is a landscape of open-pit quarries, with vertical yellow walls and, inside some, underground gardens planted on the floor. Pantelleria is the exact opposite and the island I found the most interesting: no sand, black rock everywhere, wind that never stops, and a viticulture in which the vines grow inside pits dug into the ground to shelter them, a technique so particular that it was recognized as intangible heritage by UNESCO. The night swim in the Specchio di Venere, with the thermal mud, is one of those things nobody tells you about beforehand. Lampedusa, finally, has the most beautiful sea in Italy, no argument; but it's geologically Africa, barren, far away and expensive, and you go for that and only for that.",
    luoghi: [
      {
        "nome": "Favignana: cale e Ex Stabilimento Florio",
        "testo": "A butterfly-shaped island, flat and hollowed by tuff quarries. Cala Rossa and Cala Azzurra have transparent water over white rock. In town the former Florio plant, the 19th-century tuna fishery, tells the story of the mattanza, no longer practiced.",
        "come": "Hydrofoil from Trapani in about 20-30 minutes. On the island you rent a bicycle: distances are under six kilometers.",
        "quando": "June and September. Morning for the coves, afternoon for the museum. In August it is crowded.",
        "tempo": "2 days",
        "consiglio": "Bring rubber shoes: almost no cove has sand, you enter from the rock."
      },
      {
        "nome": "Cave di tufo e giardini ipogei",
        "testo": "For centuries the island was a quarry: building stone for half of western Sicily came from here. The result is pits with vertical walls, some turned into underground gardens, sheltered from the wind, with citrus and plants.",
        "come": "By bicycle, with signs along the secondary roads. Some quarries are visitable through private operators.",
        "quando": "Morning or late afternoon; in summer the quarries give shade and coolness.",
        "tempo": "1-2 hours",
        "consiglio": "Ask in town which gardens are open: hours and entry change from quarry to quarry."
      },
      {
        "nome": "Levanzo e Grotta del Genovese",
        "testo": "The smallest of the three main Egadi, with a single fishing village. The Grotta del Genovese preserves engravings and paintings from the Paleolithic and Neolithic, about twelve thousand years old.",
        "come": "Hydrofoil from Trapani or Favignana, about 20 minutes. The cave is reached on foot or by boat and visited with a guide.",
        "quando": "June and September. The visit is by booking and in small groups: plan for the morning.",
        "tempo": "half a day",
        "url": "https://www.ampisoleegadi.it/",
        "consiglio": "Book the cave visit the day before, and wear closed shoes for the path."
      },
      {
        "nome": "Marettimo",
        "testo": "The wildest and most remote of the Egadi, almost without tourism, with a single village of white houses and an interior of trails. The sea caves are seen by boat.",
        "come": "Hydrofoil from Trapani (longer than the one to Favignana) or ferry. You get around on foot and by boat.",
        "quando": "June and September. In rough seas the runs are cancelled.",
        "tempo": "1-2 days",
        "consiglio": "The boat tour of the caves is the main experience; agree the price with the boatman."
      },
      {
        "nome": "Pantelleria: Lago Specchio di Venere e dammusi",
        "testo": "A volcanic island closer to Tunisia than to Sicily. The Lago Specchio di Venere is a lake in a crater, with thermal mud on the shore. Dammusi are lava-stone houses with domed roofs, and the vine is grown as a low bush in pits dug in the ground, a UNESCO-recognized technique.",
        "come": "Flight from Trapani, Palermo or seasonally from the mainland, or an overnight ferry from Trapani. On the island you need a car, booked ahead.",
        "quando": "Spring and September. The lake at sunset, with the mud already warm. The wind is constant.",
        "tempo": "4-5 days",
        "url": "https://www.parconazionalepantelleria.it/",
        "consiglio": "Don't look for sandy beaches: there are none, you enter the water from the rocks or the thermal pools."
      },
      {
        "nome": "Pantelleria: Montagna Grande e giardini panteschi",
        "testo": "Montagna Grande is the highest point of the island, with pine woods and trails. Pantesco gardens are circular dry-stone walls protecting a single orange tree from the wind.",
        "come": "By car to the foot of Montagna Grande, then on foot. The gardens can be seen along inner roads and on some farms.",
        "quando": "Morning. Strong wind and cool at altitude even in summer.",
        "tempo": "half a day",
        "consiglio": "Visit a winery and try the passito: visits are booked."
      },
      {
        "nome": "Lampedusa: Spiaggia dei Conigli",
        "testo": "A beach of pale sand and turquoise water inside a nature reserve, where the Caretta caretta turtle nests. The island sits on the African plate. Access is regulated to protect the nests.",
        "come": "Flight from Palermo or Catania, or ship from Porto Empedocle (about eight hours). From town by scooter or car to the car park, then on foot.",
        "quando": "June and September. In high season access may be capped and by booking.",
        "tempo": "half a day",
        "url": "https://www.ampisolepelagie.it/",
        "consiglio": "Find out the season's access rules before you leave and arrive early in the morning."
      },
      {
        "nome": "Linosa",
        "testo": "A black volcanic island, halfway between Lampedusa and Sicily, with about two hundred inhabitants. Brightly colored houses, lava beaches and clear water for snorkeling.",
        "come": "Ship from Sicily or hydrofoil from Lampedusa in season. You cover it on foot in a day.",
        "quando": "June and September; out of season connections are sparse.",
        "tempo": "1 day or one night",
        "consiglio": "Check the return times before leaving: in rough seas runs are cancelled."
      }
    ],
    programmi: [
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: hydrofoil from Trapani to Favignana, bike to Cala Rossa and the coves of the eastern wing",
          "Day 2: former Florio plant in the morning, tuff quarries in the afternoon, tuna dinner",
          "Day 3: Levanzo and Grotta del Genovese by booking, back to Trapani by hydrofoil"
        ]
      },
      {
        "titolo": "5 days",
        "tappe": [
          "Day 1: flight or overnight ferry to Pantelleria, pick up the car",
          "Day 2: Lago Specchio di Venere and the mud, swims along the coast",
          "Day 3: Montagna Grande, pantesco gardens and a winery",
          "Day 4: tour of the dammusi and thermal pools, dinner with ricotta and mint ravioli",
          "Day 5: return with margin for wind and sea"
        ]
      },
      {
        "titolo": "7 days",
        "tappe": [
          "Day 1-2: Lampedusa, Spiaggia dei Conigli with the season's rules",
          "Day 3: boat tour around the island",
          "Day 4: Linosa as a day trip or with one night",
          "Day 5-6: back to Palermo or Porto Empedocle, then Egadi or Pantelleria",
          "Day 7: margin for rough seas"
        ]
      }
    ],
    zone: [
      {
        "nome": "Favignana (town and Cala Rossa)",
        "perChi": "those arriving from the mainland for a day or a few days",
        "testo": "The widest offer and the most accessible prices of the three islands. In August it's full and noisy; you bike from any lodging."
      },
      {
        "nome": "Pantelleria (Khamma and Scauri)",
        "perChi": "anyone seeking dammusi and quiet",
        "testo": "Sleep in a dammuso in the countryside, away from the port, with a garden and lava walls. You need a car for everything and you eat nearby."
      },
      {
        "nome": "Lampedusa town",
        "perChi": "anyone seeking sea and services",
        "testo": "Seasonal lodging close to the port and beaches. From November to March almost everything closes. You rent a scooter for the farther beaches."
      },
      {
        "nome": "Levanzo or Marettimo",
        "perChi": "those wanting silence",
        "testo": "Few beds, few restaurants, no nightlife. These are islands for a quiet night, with runs depending on the sea."
      }
    ],
    sapori: [
      {
        "nome": "Egadi tuna",
        "testo": "The Favignana tonnara was among the most important in the Mediterranean. Eaten fresh and preserved: ventresca, bottarga, mosciame."
      },
      {
        "nome": "Pesto pantesco",
        "testo": "A raw sauce of tomato, almonds, basil and garlic, often on pasta. Found on Pantelleria."
      },
      {
        "nome": "Ricotta and mint ravioli",
        "testo": "Ravioli «amari» with ricotta and mint, typical of Pantelleria, dressed with tomato sauce."
      },
      {
        "nome": "Pantelleria capers",
        "testo": "A Slow Food Presidium, hand-picked and kept under salt. Their aroma is stronger than others."
      },
      {
        "nome": "Passito di Pantelleria",
        "testo": "Sweet, amber wine from Zibibbo grapes, among the great sweet wines of the world. Tasted at the winery."
      }
    ],
    attenzioni: [
      "In rough seas ferries and hydrofoils don't leave, especially for Pantelleria and Lampedusa: allow a margin and don't book a flight for the same day.",
      "At Spiaggia dei Conigli access is regulated to protect the turtles: find out the season's rules and don't take sand or shells away.",
      "The Grotta del Genovese is visited only with a guide and by booking: don't count on free entry.",
      "On Pantelleria look for a car early, because few vehicles are available in season.",
      "Fresh water is scarce on Pantelleria, Lampedusa and the minor islands: use it sparingly.",
      "The wind is constant on Pantelleria: choose sheltered coves and check the forecast."
    ],
    esperienzeSlugs: ['passito-pantelleria'],
    tripSlugs: ['isole-siciliane'],
    imageAlt: "The turquoise water and low rocks of Lido Burrone in Favignana, Egadi Islands",
    immagine: '/images/italia/isole-siciliane.jpg',
  },
]
