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
    esperienzeSlugs: ['passito-pantelleria'],
    tripSlugs: ['isole-siciliane'],
    imageAlt: "The turquoise water and low rocks of Lido Burrone in Favignana, Egadi Islands",
    immagine: '/images/italia/isole-siciliane.jpg',
  },
]
