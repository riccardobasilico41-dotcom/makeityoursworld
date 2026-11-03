import type { Paese } from '@/lib/types'

export const svizzera: Paese = {
  slug: 'svizzera',
  nome: 'Switzerland',
  continente: 'Europa',
  titolo: 'Switzerland by van: the Bernese Alps between lakes, glaciers and prices to know before you go',
  descrizione:
    "A small, mountainous country that is always among the most expensive in Europe: it is better to arrive with a budget already worked out, rather than finding out on the spot. This section is devoted to the Bernese Alps, the region of Interlaken and the Jungfrau, the Alpine heart of the country and the easiest to tour by van. There are two turquoise lakes, a valley of seventy-two waterfalls, a train that climbs inside the mountain up to 3,454 meters and, for those with a week, a road of passes that reaches the foot of the Matterhorn.",
  periodoMigliore:
    "June to September for the mountains; July and August are the safest months for the high-altitude passes, closed the rest of the year. In June and September there are fewer people and campsites cost a bit less, but in early June there may still be snow on the highest passes.",
  durataConsigliata:
    "a long weekend of 3-4 days for the heart of the Jungfrau Region (Interlaken, Lauterbrunnen, Grindelwald), a week to add Mürren-Schilthorn, the Grimsel-Furka pass road and an extension to Zermatt.",
  budgetIndicativo:
    "high, always above Italy and France. Between the motorway vignette, fuel, campsites and even just a couple of cable cars or mountain trains, for two people in a van the daily budget rarely falls below 150-200 CHF, vignette excluded. There are few ways to keep it down, but they work: shopping at the supermarket instead of eating at restaurants, choosing a single major ticket (usually the Jungfraujoch) instead of adding up several cable cars, and using morning discounts where available (for example the Jungfraujoch Good Morning Ticket).",
  stileViaggio: ['mountains', 'vanlife', 'road trip', 'trekking', 'lakes'],
  scheda: {
    documenti:
      "Switzerland is in the Schengen area but **is not part of the European Union**: Italian citizens only need an ID card valid for travel abroad, no visa. For those traveling by van, note that **the border remains a real customs border**, even without systematic document checks. Since 2025 the allowance for goods carried with you has been halved, **150 CHF per person** (600 CHF for a family of four): above that threshold you declare the entire value, not just the excess. The Italian driving license is valid.",
    valuta:
      "Swiss franc (CHF). The exchange rate has always been unfavorable to the euro, and every price seems even higher. Some tourist shops accept euros in cash, but give change in francs at an unfavorable rate: it is best to withdraw or pay in CHF.",
    pagamenti:
      "Cards and contactless are accepted almost everywhere, even in small shops, car parks and many motorhome stopover areas. **It is still worth having some francs in cash** for the more spartan stopover areas and for some mountain car park pay machines that don't always accept foreign cards.",
    connettivita:
      "Switzerland **is not in the European Union or the European Economic Area**, so \"like at home\" roaming from Italian operators doesn't apply automatically. Some operators (Vodafone, Fastweb) include it in their plans anyway, others (TIM, Iliad) sell an option for a few euros a month; for heavy data users, a local eSIM is a cheap alternative. Excellent coverage in the main valleys, weaker at altitude and in narrow gorges like Lauterbrunnen.",
    salute:
      "The European Health Insurance Card (TEAM) is valid in Switzerland thanks to the bilateral agreement with the EU, but the Swiss system works on **indirect care**: you almost always pay first and ask for reimbursement afterwards, while in other EU countries care is direct. Travel insurance is recommended, especially for those doing activities at altitude. No vaccinations required; healthcare is of a very high standard.",
    sicurezza:
      "A very safe country even by European standards, with very little crime. The risks are those of the mountains: **summer afternoon thunderstorms**, temperature swings at altitude even in midsummer, and via ferratas that require approved gear and experience. **In Switzerland mountain rescue is paid for**: a Rega helicopter intervention costs an average of several thousand francs. Rega sells an annual supporter card (about 40 CHF per person) that covers interventions free for holders: it is the most sensible expense before any hike at altitude.",
    trasportiInterni:
      "Excellent roads, but for motorways and semi-motorways **you need the annual vignette** (about 40 CHF), even for a single week: there are no daily or weekly vignettes. Mountain trains and cable cars are punctual and frequent, but among the most expensive in Europe; those not traveling by van can consider a Swiss Travel Pass, which covers several consecutive days of transport and gives discounts on cable cars. **Zermatt has been closed to private traffic since 1961**: the van is left in the Täsch car park and you continue by shuttle train.",
    costoVita:
      "Among the highest in Europe in every item: fuel, restaurants, campsites, cable cars. A simple meal out rarely costs less than 25-30 CHF per person; for those who cook in the van, shopping at Coop and Migros remains the cheapest solution.",
    lingua:
      "German in the Bernese Alps and in Zermatt (spoken language is dominated by Swiss German, very different from written standard German); French in western Valais. English is widespread in tourist areas and among staff at cable cars and stations.",
    elettricita:
      "230V, 50Hz, **type J sockets**, used only in Switzerland and Liechtenstein: three round pins arranged in a narrow triangle. Two-pin European plugs (type C, like the Italian ones without earth) almost always fit; **Schuko plugs with earth (type F) often don't**, because of the shape of the socket. An adapter is enough, to bring or buy on the spot.",
    fusoOrario: "UTC+1, UTC+2 in daylight saving time. Same time zone as Italy.",
    clima:
      "Alpine, very different depending on altitude: in Interlaken (568 m) summers are mild; higher up the weather changes quickly and above 2,500-3,000 meters it can snow even in midsummer. **In summer afternoon thunderstorms are frequent**: activities at altitude should be done in the morning.",
    festivita:
      "The national holiday is **August 1**. The other holidays are almost all cantonal and change from region to region, so those who only look at the national calendar may find unexpected closures. The most concrete problem, though, is weekly: **on Sundays almost all shops are closed by law**, except those in large stations, airports and some motorway service areas. The big shop should be done on Saturday.",
    emergenze:
      "Single European number **112**. Alternatively: 117 police, 118 fire brigade, 144 ambulance, **1414 Rega** (air rescue in the mountains).",
    aggiornatoAl: 'September 2026',
  },
  heroImageAlt: 'The Lauterbrunnen valley in summer, with its vertical rock walls, forests and the village on the valley floor, Bernese Alps',
  heroImage: '/images/svizzera/svizzera-paese.jpg',
  tripPrincipaleSlug: 'svizzera-alpi-van',
}
