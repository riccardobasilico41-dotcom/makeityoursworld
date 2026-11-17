import type { Paese } from '@/lib/types'

export const indonesia: Paese = {
  slug: 'indonesia',
  nome: 'Indonesia',
  continente: 'Asia',
  titolo: 'Indonesia Island by Island: From Sumatra to Raja Ampat',
  descrizione:
    "Eight very different islands (Sumatra, Java, Bali, Sulawesi, Lombok and the Gilis, Komodo, Flores, Raja Ampat), which for now I'm telling as a practical island-by-island guide. The itineraries combining several islands into a single trip will arrive as soon as the anecdotes and photos are ready.",
  periodoMigliore:
    "generally April-October (dry season) for most of the archipelago; Raja Ampat is the exception, with its best window between October and April",
  durataConsigliata:
    "variable: 5-7 days per island for an in-depth visit, or 3-4 weeks to combine more than one in a single loop",
  budgetIndicativo:
    "changes a lot from island to island: from the modest budget of Sumatra and Flores to the higher costs of Raja Ampat, because of logistics and the mandatory permit",
  scheda: {
    documenti:
      "Passport valid for at least 6 months and in good condition. For tourism you need the visa on arrival: you can get it at the airport on arrival or, better, apply online for the e-VOA at evisa.imigrasi.go.id at least a week ahead. It costs about 500,000 IDR (roughly €35) and gives access to the autogate. Since October 2025 the All Indonesia Arrival Card is also mandatory, an electronic form to fill in before arrival.",
    valuta: "Indonesian rupiah (IDR), roughly €1 = 17,000-18,000 IDR. You handle figures with a lot of zeros: be careful not to confuse the 10,000 and 100,000 notes.",
    pagamenti:
      "Cards are accepted in Bali, in the big cities of Java and in resorts; elsewhere you need cash. ATMs are widespread in Bali and Java, rare or absent in Raja Ampat, in the interior of Flores and on the smaller islands: better to arrive already stocked up.",
    connettivita:
      "Telkomsel has the best coverage, especially on remote islands; XL Axiata and Indosat are valid alternatives in more populated areas. The SIM must be registered with your passport. In Raja Ampat and some areas of Flores there is no signal even with the best operator.",
    salute:
      "No mandatory vaccinations except yellow fever for those coming from at-risk countries. Hepatitis A and B and typhoid are recommended, and malaria prophylaxis should be considered for West Papua (Raja Ampat) and some eastern areas. Always bottled water; allow for \"Bali belly\" in the first days.",
    sicurezza:
      "The country is overall calm for travelers. The risks are elsewhere: scooter accidents are the first cause of trouble for tourists in Bali and Lombok, the sea currents on some beaches are treacherous and active volcanoes can close airports at short notice. Also beware of scooter rental contracts with damages disputed on return.",
    trasportiInterni:
      "With an archipelago of this size, domestic flights are the backbone of getting around (Garuda, Lion Air, Citilink, Wings Air), alongside ferries and local boats. In Bali and Java, Grab and Gojek are handy and cheap. On the Gilis no motor vehicles circulate: only cidomo and bicycles.",
    costoVita:
      "Among the cheapest destinations in Southeast Asia for accommodation and food, with the exception of Raja Ampat, where logistics and the marine park permit raise the bill considerably.",
    lingua: "Bahasa Indonesia, alongside hundreds of local languages. English is widespread in Bali and in tourist settings, much less elsewhere.",
    elettricita: "230V, 50Hz, plug types C and F: the same as Italy's, so no adapter is needed. It's one of the few destinations where that happens.",
    fusoOrario:
      "Three different time zones: WIB (UTC+7) for Sumatra and Java, WITA (UTC+8) for Bali, Lombok, Sulawesi, Komodo and Flores, WIT (UTC+9) for Papua and Raja Ampat. Worth keeping in mind when fitting together domestic flights.",
    clima:
      "Dry season roughly from April to October for much of the archipelago. Raja Ampat is the exception, with its best window between October and April: it's the most common planning mistake of those who try to join Raja Ampat to the rest of the country in a single trip.",
    festivita:
      "Nyepi, the Balinese New Year (March, variable date), is the \"day of silence\": in Bali all activity stops for 24 hours, the airport closes and you can't leave your lodging. It has to be known in advance, because it can block an itinerary.",
    emergenze: "Single emergency number 112. The Italian Embassy is in Jakarta, with an honorary consulate in Denpasar (Bali).",
    primaDiPartire: {
      documento: 'Passport with at least 6 months\' validity on arrival, 2 blank pages and in perfect condition: tears or loose pages can mean refused entry.',
      visto: 'Visa on arrival (e-VOA) for 30 days, 500,000 IDR, extendable once; apply online a week ahead. Free All Indonesia declaration within 72 hours before arrival.',
      vaccini: 'Yellow fever certificate required from 9 months if arriving from a risk country. Recommended: hepatitis A and B, typhoid. Malaria in the east (Komodo too) and rural areas.',
      prese: '230V, 50Hz, type C and F sockets (European two-pin): UK plugs need an adapter.',
      sim: 'SIMs are sold at operator booths in airports and are registered with your passport.',
      pagamenti: 'Cards accepted in tourist places, and app and contactless payments are common. Euros are hard to change outside tourist areas. Bali: 150,000 IDR tourist levy.',
      lingua: 'Indonesian (Bahasa Indonesia).',
      frasi: [
        { frase: 'Selamat pagi', pronuncia: 'seh-LAH-mat PAH-gee', significato: 'Good morning' },
        { frase: 'Terima kasih', pronuncia: 'teh-REE-mah KAH-see', significato: 'Thank you' },
        { frase: 'Tolong', pronuncia: 'TOH-long', significato: 'Please (when asking for something)' },
        { frase: 'Permisi', pronuncia: 'per-MEE-see', significato: 'Excuse me' },
        { frase: 'Berapa harganya?', pronuncia: 'beh-RAH-pah har-GAH-nyah', significato: 'How much is it?' },
      ],
      avvisi: 'https://www.gov.uk/foreign-travel-advice/indonesia',
    },
    aggiornatoAl: 'September 2026',
  },
  stileViaggio: ['nature', 'adventure', 'islands', 'diving'],
  heroImageAlt: 'The Bromo crater smoking in the mist-filled caldera in the light of dawn, Java, Indonesia',
  heroImage: '/images/indonesia/bromo-alba-drone-riccardo.jpg',
  tripPrincipaleSlug: 'indonesia-itinerario',
}
