import type { TripMeta } from '@/lib/types'

const IMG = '/images/viaggi/canada-itinerario'

export const canadaItinerarioMeta: TripMeta = {
  tripSlug: 'canada-itinerario',
  paeseSlug: 'canada',
  ritmo:
    "Steady: two or three nights in the cities (Toronto, Niagara, Ottawa, Montréal, Québec City) alternating with driving days of 2-4 hours; only one long leg, the return from Tadoussac to Montréal (about 5.5 hours).",
  trasporti:
    "Pickup or rental car picked up in Toronto and returned in Montréal (one-way fee to ask about in the quote), about 1,900-2,000 km (1,200 miles); UP Express from Toronto airport, subway in Montréal, free ferry across the Saguenay, boat and helicopter at Niagara.",
  stile: ['road trip', 'cities', 'nature', 'waterfalls', 'north america'],
  adattoA: [
    "anyone who wants an easy-to-drive first trip to Canada, with cities and nature together",
    "anyone who wants to see Niagara Falls both from the boat and from above",
    "anyone traveling between June and mid-October, with the boat and whale cruises running",
    "anyone who wants to add the polar bears of Churchill and accepts a much higher budget",
  ],
  puntiForti: [
    "The Horseshoe Falls seen from below on the boat and from above by helicopter",
    "Montréal and Old Québec, the two French-speaking cities on the St. Lawrence",
    "Whales and belugas at the mouth of the Saguenay fjord, at Tadoussac",
    "Good roads and steady distances, comfortable with a rental pickup",
    "A ready-made extension for the polar bears of Churchill, on a tundra buggy",
  ],
  criticita: [
    "One-way fee if you return the car in Québec",
    "407 ETR electronic tolls around Toronto billed by the rental company with fees",
    "Taxes (13-15%) and tips (15-20%) added to almost every price",
    "Niagara boat and whale cruises only from May to fall",
    "Churchill can be reached only by air or with 45 hours of train from Winnipeg, and it is very expensive",
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito: 'on our own, with a rental pickup',
  },
  tappeMappa: [
    { nome: 'Toronto', destinazioneSlug: 'toronto' },
    { nome: 'Niagara Falls', destinazioneSlug: 'niagara' },
    { nome: 'Thousand Islands and Kingston', destinazioneSlug: 'mille-isole' },
    { nome: 'Ottawa', destinazioneSlug: 'ottawa' },
    { nome: 'Mont-Tremblant', destinazioneSlug: 'mont-tremblant' },
    { nome: 'Montréal', destinazioneSlug: 'montreal' },
    { nome: 'Québec City', destinazioneSlug: 'quebec' },
    { nome: 'Charlevoix and Tadoussac', destinazioneSlug: 'charlevoix-tadoussac' },
    { nome: 'Extension: Churchill and the polar bears', destinazioneSlug: 'churchill' },
  ],
  giorni: [
    { titoloGiorno: 'Day 1 — Arrival in Toronto', tratta: 'Pearson Airport → Union Station, UP Express (about 25 minutes)', pernottamento: 'Toronto, downtown or waterfront', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'toronto', immagine: `${IMG}/giorno-01-toronto.jpg`, imageAlt: "The Toronto skyline with the CN Tower seen from the Toronto Islands, across the lake" },
    { titoloGiorno: 'Day 2 — Toronto: the CN Tower, the lake and the markets', pernottamento: 'Toronto, downtown or waterfront', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'CN Tower around CAD 43 (basic admission)', destinazioneSlug: 'toronto', immagine: `${IMG}/giorno-02-toronto.jpg`, imageAlt: "The CN Tower in Toronto seen from below" },
    { titoloGiorno: 'Day 3 — Niagara Falls from the boat', tratta: 'Toronto → Niagara Falls, about 130 km (1.5 hours)', pernottamento: "Niagara Falls, Fallsview or Lundy's Lane", statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Voyage to the Falls CAD 47.95 plus HST; Journey Behind the Falls about CAD 30 plus HST', destinazioneSlug: 'niagara', immagine: `${IMG}/giorno-03-niagara.jpg`, imageAlt: "The boat with passengers in red ponchos in the churning water below Niagara Falls" },
    { titoloGiorno: 'Day 4 — Niagara by helicopter and Niagara-on-the-Lake', tratta: 'Niagara Falls → Niagara-on-the-Lake along the Niagara Parkway, about 25 km', pernottamento: 'Niagara Falls or Niagara-on-the-Lake', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'helicopter flight from about CAD 171 plus HST per person', destinazioneSlug: 'niagara', immagine: `${IMG}/giorno-04-niagara.jpg`, imageAlt: "The Horseshoe Falls and the Skylon Tower seen from above, with water mist rising from the horseshoe" },
    { titoloGiorno: 'Day 5 — The Thousand Islands', tratta: 'Niagara Falls → Gananoque, about 380 km (4 hours)', pernottamento: 'Gananoque or Kingston', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'mille-isole', immagine: `${IMG}/giorno-05-mille-isole.jpg`, imageAlt: "A wooded island with a boathouse on the St. Lawrence, in the Thousand Islands" },
    { titoloGiorno: 'Day 6 — Kingston and arriving in Ottawa', tratta: 'Gananoque → Kingston → Ottawa, about 225 km', pernottamento: 'Ottawa, ByWard Market or downtown', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'ottawa', immagine: `${IMG}/giorno-06-ottawa.jpg`, imageAlt: "The neo-Gothic buildings of Parliament Hill in Ottawa under a winter sky" },
    { titoloGiorno: 'Day 7 — Ottawa: Parliament, the Rideau Canal and the museums', pernottamento: 'Ottawa, ByWard Market or downtown', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Parliament tours free with booking', destinazioneSlug: 'ottawa', immagine: `${IMG}/giorno-07-ottawa.jpg`, imageAlt: "The West Block of Parliament in Ottawa with its neo-Gothic towers and snow on the lawn" },
    { titoloGiorno: 'Day 8 — Mont-Tremblant and the Laurentians', tratta: 'Ottawa → Mont-Tremblant, about 150 km (2 hours)', pernottamento: 'Mont-Tremblant, village or surroundings', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'mont-tremblant', immagine: `${IMG}/giorno-08-mont-tremblant.jpg`, imageAlt: "The wooded hills of Mont-Tremblant in fall colors" },
    { titoloGiorno: "Day 9 — Montréal: the old city and Notre-Dame Basilica", tratta: 'Mont-Tremblant → Montréal, about 130 km (1.5 hours)', pernottamento: 'Montréal, Old Montréal or Plateau', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'montreal', immagine: `${IMG}/giorno-09-montreal.jpg`, imageAlt: "The blue and gold interior of Notre-Dame Basilica in Montréal" },
    { titoloGiorno: 'Day 10 — Montréal: Mount Royal, the Plateau and the markets', pernottamento: 'Montréal, Old Montréal or Plateau', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'montreal', immagine: `${IMG}/giorno-10-montreal.jpg`, imageAlt: "The downtown skyscrapers of Montréal seen from Mount Royal" },
    { titoloGiorno: 'Day 11 — From Montréal to Québec City: the old town', tratta: 'Montréal → Québec City, about 255 km (2 hours 45 minutes to 3 hours)', pernottamento: 'Québec City, inside or just outside the walls', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'quebec', immagine: `${IMG}/giorno-11-quebec.jpg`, imageAlt: "The Château Frontenac lit up at dusk above the old town of Québec City" },
    { titoloGiorno: "Day 12 — Montmorency Falls and the Île d'Orléans", pernottamento: 'Québec City, inside or just outside the walls', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Montmorency parking and gondola paid (Sépaq)', destinazioneSlug: 'quebec', immagine: `${IMG}/giorno-12-quebec.jpg`, imageAlt: "Montmorency Falls with the suspension bridge over the drop" },
    { titoloGiorno: 'Day 13 — Charlevoix: Baie-Saint-Paul and the road along the river', tratta: 'Québec City → Baie-Saint-Paul → La Malbaie → Baie-Sainte-Catherine–Tadoussac ferry, about 225 km', pernottamento: 'Tadoussac', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Saguenay ferry free', destinazioneSlug: 'charlevoix-tadoussac', immagine: `${IMG}/giorno-13-charlevoix-tadoussac.jpg`, imageAlt: "Woods and fields around Baie-Saint-Paul seen from above" },
    { titoloGiorno: 'Day 14 — Tadoussac and the whales of the St. Lawrence', pernottamento: 'Tadoussac', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'whale cruise of 3 hours from CAD 134.99 plus taxes (Croisières AML, 2026)', destinazioneSlug: 'charlevoix-tadoussac', immagine: `${IMG}/giorno-14-charlevoix-tadoussac.jpg`, imageAlt: "The wooded walls of the Saguenay fjord seen from the water" },
    { titoloGiorno: 'Day 15 — Back to Montréal', tratta: 'Tadoussac → Montréal, about 470 km (5.5 hours)', pernottamento: 'Montréal or near the airport', statoPernottamento: 'consigliato', intensita: 'intenso', destinazioneSlug: 'montreal', immagine: `${IMG}/giorno-15-montreal.jpg`, imageAlt: "The Montréal skyline seen from Kondiaronk Boulevard on Mount Royal" },
    { titoloGiorno: 'Day 16 — Departure from Montréal', tratta: 'Montréal → Montréal-Trudeau airport (YUL)', intensita: 'leggero', destinazioneSlug: 'montreal', immagine: `${IMG}/giorno-16-montreal.jpg`, imageAlt: "Visitors on the Kondiaronk belvedere on Mount Royal, with the snowy Montréal skyscrapers" },
  ],
  budget: [
    { etichetta: 'Intercontinental flights', valore: undefined },
    { etichetta: 'eTA', valore: 'CAD 7 per person' },
    { etichetta: 'Niagara', valore: 'Voyage to the Falls boat CAD 47.95 plus HST; helicopter from about CAD 171 plus HST; Journey Behind the Falls about CAD 30 plus HST' },
    { etichetta: 'Other admissions', valore: 'CN Tower around CAD 43; whale cruise at Tadoussac from CAD 134.99 plus taxes' },
    { etichetta: 'Rental car and lodging', valore: 'to be quoted for your chosen period, including the Toronto-Montréal one-way fee' },
    { etichetta: 'Taxes and tips', valore: 'HST 13% in Ontario, about 15% in Québec; restaurant tips 15-20%' },
    { etichetta: 'Churchill extension', valore: 'Winnipeg-Churchill flight roughly CAD 700-1,400 round trip; multi-day packages from several thousand dollars per person' },
  ],
}
