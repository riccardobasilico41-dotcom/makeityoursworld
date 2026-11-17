import type { Paese } from '@/lib/types'

export const marocco: Paese = {
  slug: 'marocco',
  nome: 'Morocco',
  continente: 'Africa',
  titolo: 'Morocco: from Marrakech to the Sahara',
  descrizione:
    "Nine days in a private van from Marrakech to the Sahara: the Telouet Kasbah, the UNESCO ksar of Aït Benhaddou, the Todra Gorge, a night under the stars at Erg Chebbi, the Draa Valley, Agadir, Taghazout and the white-and-blue town of Essaouira. A local guide came with us and kept every day running smoothly.",
  periodoMigliore: 'early May, with the weather still manageable before the big summer heat',
  durataConsigliata: '9 days, 8 nights',
  budgetIndicativo: 'activities and extras handled through the local guide, cash essential outside the big cities',
  scheda: {
    documenti:
      "Passport valid for at least your whole stay; no visa for tourist stays of up to 3 months. On arrival at the airport you may be asked to show your return flight ticket.",
    valuta:
      "Moroccan dirham (MAD). It's a closed currency: by law you can't leave the country with dirhams in your pocket, so leftovers must be exchanged back before you leave. Many people only find out on the last day.",
    pagamenti:
      "Outside the big cities you need cash: many kasbahs, hammams, small restaurants and local guides don't accept cards. In cities and hotels cards work without any problem. Tipping is a widespread habit, including for guides and drivers.",
    connettivita: "Maroc Telecom, Orange and Inwi, with SIM cards available at the airport and in the cities. Good coverage on the main routes, patchier in the Atlas valleys and the desert.",
    salute:
      "No mandatory vaccinations. Hepatitis A and typhoid are recommended. Bottled water. In the desert, there's a big temperature swing between day and night even in spring.",
    sicurezza:
      "For travelers it's generally a safe country. You should know, though, that Moroccan law punishes drug use and possession, possession of pornographic material, homosexual relations and prostitution with prison. In the medinas, beware of unofficial \"guides\" who offer themselves and end up taking you to partner shops.",
    trasportiInterni:
      "The ONCF rail network works well on the Atlantic axis, with the Al Boraq high-speed line between Tangier and Casablanca; CTM and Supratours buses cover the rest and are reliable. For the southern circuits (Atlas, Draa Valley, desert) you usually take a private van with a driver, with legs of up to 4 hours.",
    costoVita: 'Cheap for lodging, food and transport; the bulk of the spending is excursions and private transfers.',
    lingua:
      "The official languages are Arabic and Amazigh (Berber), but French is very widespread and is the common language of tourism and trade. English is less common outside international establishments.",
    elettricita: '220V, 50Hz, type C and E sockets: Italian two-pin plugs work without an adapter.',
    fusoOrario:
      "UTC+1 all year: in winter the same time as Italy, an hour behind during Italian daylight saving time. Good to know: during Ramadan Morocco sets its clocks back an hour for the whole month.",
    clima:
      "Spring and autumn are the best times; in early May the weather is still bearable, before the big heat. In summer the interior and the desert are scorching. Nights in the Sahara stay cool even in spring: a turban and heavy layers are genuinely needed.",
    festivita:
      "During Ramadan, in non-touristy areas, many restaurants stay closed in the daytime and the rhythms change; in return, evenings get very lively after sunset.",
    emergenze: "Police 19 in cities, gendarmerie 177 outside cities, ambulance 15. The Italian Embassy is in Rabat, with a consulate general in Casablanca.",
    primaDiPartire: {
      documento: 'EU: passport valid for the whole stay. UK: passport valid for at least 3 months after arrival.',
      visto: 'No visa for tourist stays of up to 90 days. UK: same.',
      vaccini: 'None required. Recommended: hepatitis A and B, typhoid; rabies for some travellers.',
      sim: 'Local SIMs are sold everywhere, with top-ups at kiosks: your phone must be unlocked. Maroc Telecom, Orange and Inwi cover almost the whole country.',
      pagamenti: 'ATMs are everywhere. Visa and Mastercard are taken in most hotels and some restaurants, shops and petrol stations. You can\'t take dirhams out of Morocco.',
      lingua: 'Arabic and Amazigh (Berber). Almost everyone understands French and Spanish is common in the north and south; English is not widely spoken.',
      frasi: [
        { frase: 'Salam', pronuncia: 'sa-LAAM', significato: 'Hello' },
        { frase: 'Shukran', pronuncia: 'SHOOK-ran', significato: 'Thank you' },
        { frase: 'Afak', pronuncia: 'AH-fak', significato: 'Please' },
        { frase: 'Smeh li', pronuncia: 'SMEH-lee', significato: 'Sorry, excuse me' },
        { frase: 'Bshhal?', pronuncia: 'b-SHAHL', significato: 'How much is it?' },
      ],
      avvisi: 'https://www.gov.uk/foreign-travel-advice/morocco',
    },
    aggiornatoAl: 'September 2026',
  },
  stileViaggio: ['desert', 'kasbahs', 'road trip'],
  heroImageAlt: 'A caravan of dromedaries resting at the foot of a big dune in the Merzouga desert, Morocco',
  heroImage: '/images/marocco/merzouga-carovana-dune-riccardo.jpg',
  tripPrincipaleSlug: 'marocco-itinerario',
}
