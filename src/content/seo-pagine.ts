/**
 * Titoli e descrizioni SEO scritti a mano per le pagine Paese e Meraviglia,
 * come `viaggi-editorial.ts` per i viaggi. Chiave = slug. Se una pagina non
 * è qui usa titolo e descrizione dei suoi dati.
 * Regole: seoTitle ≤ 60 caratteri, seoDescription 120-155, solo fatti presenti
 * nella pagina; socialTitle può essere più lungo e più «gancio».
 */
export type SeoPagina = {
  seoTitle: string
  seoDescription: string
  socialTitle?: string
}

export const seoPaesi: Record<string, SeoPagina> = {
  'arabia-saudita': {
    seoTitle: "Viaggio in Arabia Saudita: visto online, Hegra e itinerario",
    seoDescription:
      "Dal 2019 si entra con un visto turistico online. Hegra e AlUla, Jeddah, Riyadh e l'Asir: scheda pratica, quando andare e un itinerario di 12 giorni.",
    socialTitle: "Arabia Saudita: cosa sapere prima di andare, ora che il visto si fa online",
  },
  austria: {
    seoTitle: "Vienna: cosa vedere in un weekend lungo in Austria",
    seoDescription:
      "Per ora l'Austria del sito è Vienna: l'Innere Stadt UNESCO, Schönbrunn, il Belvedere e i caffè storici, con scheda pratica, prezzi e itinerario.",
  },
  belize: {
    seoTitle: "Viaggio in Belize: cayes, Blue Hole e cosa sapere prima",
    seoDescription:
      "L'unico paese del Centro America dove si parla inglese: la seconda barriera corallina, il Great Blue Hole, i cayes senza auto e le grotte del Cayo.",
  },
  bolivia: {
    seoTitle: "Viaggio in Bolivia: Uyuni, La Paz e cosa sapere prima",
    seoDescription:
      "Il paese più alto ed economico del Sud America: La Paz a 3.600 metri, il Salar de Uyuni, il Titicaca e Potosí. Scheda pratica e itinerario di 19 giorni.",
    socialTitle: "Bolivia: cosa sapere prima di atterrare a 3.600 metri",
  },
  borneo: {
    seoTitle: "Borneo malese: cosa vedere tra oranghi, Kinabalu e Sipadan",
    seoDescription:
      "Sabah e Sarawak, la parte malese del Borneo: gli oranghi, la salita al Kinabalu, il fiume e il mare di Sipadan. Permessi, stagioni e itinerario.",
  },
  brasile: {
    seoTitle: "Viaggio in Brasile: cosa vedere in 3 settimane",
    seoDescription:
      "Rio, Paraty e Ilha Grande, Iguazú, Salvador, la Chapada Diamantina e i Lençóis Maranhenses: scheda pratica, sicurezza e un itinerario di 22 giorni.",
    socialTitle: "Il Brasile non si gira tutto in 3 settimane: cosa scegliere e cosa lasciare",
  },
  bulgaria: {
    seoTitle: "Sciare in Bulgaria: Bansko e il Monastero di Rila",
    seoDescription:
      "Cinque-sei giorni tra le piste economiche di Bansko e il Monastero di Rila, il più importante della Bulgaria. Scheda pratica, costi e come arrivare.",
    socialTitle: "Sciare in Bulgaria vale la pena? Bansko, i prezzi e il Monastero di Rila",
  },
  california: {
    seoTitle: "California on the road: cosa vedere in 2-3 settimane",
    seoDescription:
      "Un anello in auto tra San Francisco, Yosemite, le sequoie, Death Valley, Joshua Tree, Los Angeles e Big Sur: stagioni, strade chiuse, parchi e costi.",
  },
  canada: {
    seoTitle: "Viaggio in Canada orientale: cosa vedere in auto",
    seoDescription:
      "Ontario e Québec in auto: Toronto, il Niagara, Ottawa, Montréal, Québec e le balene di Tadoussac. eTA, patente, pedaggi e gli orsi polari di Churchill.",
    socialTitle: "Canada orientale in auto: cosa sapere su eTA, patente e pedaggi prima di partire",
  },
  cina: {
    seoTitle: "Viaggio in Cina: cosa sistemare prima di partire",
    seoDescription:
      "In Cina non funziona quasi nulla di ciò che si usa altrove: pagamenti, app, VPN e treni da preparare da casa. Scheda pratica e due itinerari completi.",
    socialTitle: "Viaggio in Cina: quello che va sistemato da casa, prima ancora del volo",
  },
  'corea-del-sud': {
    seoTitle: "Corea del Sud: cosa sapere prima e itinerario di 14 giorni",
    seoDescription:
      "Il paese più facile dell'Asia in cui viaggiare, tra treni puntuali e carte ovunque, e uno dei più difficili da capire. Scheda pratica, DMZ e Jeju.",
  },
  'costa-rica': {
    seoTitle: "Costa Rica: cosa vedere in 13 giorni, dal Caribe al Pacifico",
    seoDescription:
      "Tredici giorni da costa a costa: foreste pluviali, canyon di lava, la foresta nebulosa di Monteverde e le balene del Pacifico. Scheda pratica e itinerario.",
  },
  croazia: {
    seoTitle: "Croazia: cosa vedere da Zagabria a Dubrovnik",
    seoDescription:
      "Zagabria e Plitvice, Zara, Sebenico e Spalato, le isole di Hvar e Curzola e le mura di Dubrovnik. Euro, Schengen, scheda pratica e itinerario di 14 giorni.",
    socialTitle: "Croazia oltre la cartolina del mare: da Zagabria a Dubrovnik in 14 giorni",
  },
  danimarca: {
    seoTitle: "Copenaghen: cosa vedere in 3 giorni",
    seoDescription:
      "Copenaghen in bici tra Nyhavn, i giardini di Tivoli, la Sirenetta e Christiania, con scheda pratica e il giro delle capitali nordiche che parte da qui.",
  },
  egitto: {
    seoTitle: "Viaggio in Egitto: 10 giorni o 3 settimane? Cosa vedere",
    seoDescription:
      "Giza, Saqqara, Luxor, Assuan, Abu Simbel, Siwa e il Mar Rosso: come scegliere tra il giro di 11 giorni e quello di 21, con scheda pratica e costi.",
    socialTitle: "Egitto in 11 giorni o in 21? Come scegliere il giro giusto",
  },
  'emirati-arabi-uniti': {
    seoTitle: "Stopover a Dubai e Abu Dhabi: cosa vedere in 2 giorni",
    seoDescription:
      "Emirates ed Etihad rendono la sosta a Dubai o ad Abu Dhabi quasi gratuita, e in due giorni si vede molto. Come funzionano gli stopover e cosa fare.",
    socialTitle: "Smetti di passare da Dubai senza fermarti: lo stopover di 2 giorni fatto bene",
  },
  estonia: {
    seoTitle: "Tallinn: cosa vedere nella città medievale dell'Estonia",
    seoDescription:
      "Il centro medievale UNESCO di Tallinn tra Toompea e la città bassa anseatica, il parco e il palazzo di Kadriorg. Scheda pratica e giro baltico.",
  },
  filippine: {
    seoTitle: "Filippine: quali isole scegliere e quando andare",
    seoDescription:
      "El Nido, Coron, Moalboal, Bohol e Siargao: un viaggio di mare, barche e voli brevi, da organizzare intorno ai tifoni. Itinerario di 18 giorni.",
  },
  florida: {
    seoTitle: "Florida on the road: cosa vedere in 10 giorni",
    seoDescription:
      "Quasi 1.800 km in auto tra le Keys, le Everglades, Orlando, Cape Canaveral e Miami Beach: scheda pratica, ESTA, guida e l'itinerario di 10 giorni.",
  },
  francia: {
    seoTitle: "Viaggio in Francia: cosa vedere oltre Parigi",
    seoDescription:
      "Parigi, Loira, Normandia e Bretagna, Costa Azzurra, Provenza, Bordeaux, Alsazia e Champagne, le Alpi e il Tour du Mont Blanc: nove itinerari.",
    socialTitle: "La Francia oltre Parigi e la Costa Azzurra: nove itinerari, dai castelli al Monte Bianco",
  },
  germania: {
    seoTitle: "Berlino: cosa vedere in 4 giorni",
    seoDescription:
      "Berlino dal Reich al Muro alla riunificazione del 1990: quattro giorni tra Reichstag, Isola dei Musei e quartieri, con scheda pratica e trasporti.",
  },
  giappone: {
    seoTitle: "Giappone in 12 giorni: cosa vedere e quando per i sakura",
    seoDescription:
      "Tokyo, Kyoto, Hiroshima, Osaka e Nara in un anello classico a caccia dei sakura: Fushimi Inari, il Tempio d'Oro, Miyajima. Scheda pratica e JR Pass.",
  },
  giordania: {
    seoTitle: "Viaggio in Giordania: Petra, Wadi Rum e cosa sapere",
    seoDescription:
      "Otto giorni tra Amman, Jerash, Mar Morto, Petra, Wadi Rum e Aqaba, con Jordan Pass, sicurezza e clima d'inverno. Scheda pratica e itinerario a Capodanno.",
  },
  guatemala: {
    seoTitle: "Guatemala: cosa vedere tra Antigua, Atitlán e Tikal",
    seoDescription:
      "Antigua tra tre vulcani, il lago di Atitlán con i villaggi maya, Semuc Champey e le piramidi di Tikal nella giungla del Petén. Scheda pratica e tempi.",
  },
  india: {
    seoTitle: "Viaggio in India: Rajasthan, Varanasi o Sud? Come scegliere",
    seoDescription:
      "Un paese da visitare a pezzi: il Rajasthan e il triangolo d'oro, Varanasi sul Gange o il Sud dei templi e del Kerala. Tre itinerari e scheda pratica.",
    socialTitle: "Rajasthan, Varanasi o India del Sud? Come scegliere il primo viaggio in India",
  },
  indonesia: {
    seoTitle: "Indonesia isola per isola: cosa vedere e come muoversi",
    seoDescription:
      "Sumatra, Giava, Bali, Sulawesi, Lombok e le Gili, Komodo, Flores e Raja Ampat: otto isole diverse, con scheda pratica e un itinerario di 35 giorni.",
  },
  islanda: {
    seoTitle: "Islanda in tenda: la Ring Road in 9-10 giorni",
    seoDescription:
      "L'anello completo dell'Islanda con sei notti su otto in tenda: cascate, il ghiacciaio con i ramponi, kayak tra gli iceberg e un'eruzione. Scheda pratica.",
  },
  italia: {
    seoTitle: "Viaggio in Italia: 16 itinerari, da Roma alle Dolomiti",
    seoDescription:
      "Città d'arte, Dolomiti, Sicilia, Sardegna, le Eolie in vela, la Costiera e le rotte del vino: 16 itinerari con i periodi giusti e gli errori da evitare.",
    socialTitle: "L'Italia si conosce bene e si visita male: 16 itinerari per farla nel modo giusto",
  },
  lettonia: {
    seoTitle: "Riga: cosa vedere tra centro medievale e Art Nouveau",
    seoDescription:
      "Riga, la più grande delle capitali baltiche: il centro medievale UNESCO e centinaia di facciate liberty fuori dalle mura. Scheda pratica e giro baltico.",
  },
  lituania: {
    seoTitle: "Vilnius: cosa vedere nella capitale barocca della Lituania",
    seoDescription:
      "Il centro barocco più esteso dell'Europa centro-orientale, patrimonio UNESCO, e la repubblica per gioco di Užupis. Scheda pratica e giro baltico.",
  },
  maldive: {
    seoTitle: "Maldive: isole locali o resort? Come scegliere",
    seoDescription:
      "Ventisei atolli e circa 1.200 isole: dove vedere mante e squali balena, come dormire nelle guesthouse delle isole abitate e quando conviene il resort.",
    socialTitle: "Maldive senza resort? Isole locali, mante e squali balena: come scegliere",
  },
  malesia: {
    seoTitle: "Malesia: cosa vedere, quale costa scegliere e cosa mangiare",
    seoDescription:
      "Il paese più sottovalutato del sud-est asiatico: cucina malese, cinese e indiana nelle stesse città, strade buone e monsoni opposti sulle due coste.",
  },
  marocco: {
    seoTitle: "Marocco in 9 giorni: da Marrakech al Sahara, cosa vedere",
    seoDescription:
      "In van da Marrakech al Sahara: Telouet, Aït Benhaddou, le Gole di Todra, una notte a Erg Chebbi, la valle del Draa ed Essaouira. Scheda pratica e consigli.",
  },
  messico: {
    seoTitle: "Viaggio in Messico: Yucatán, Día de los Muertos o Baja?",
    seoDescription:
      "Tre viaggi diversi: Yucatán e Riviera Maya tra cenote e squalo balena, il Día de los Muertos a Oaxaca, le balene della Baja California. Scheda pratica.",
    socialTitle: "Yucatán, Día de los Muertos o balene in Baja: quale Messico scegliere",
  },
  montenegro: {
    seoTitle: "Montenegro: cosa vedere in 7-10 giorni, da Kotor al Durmitor",
    seoDescription:
      "Dalle Bocche di Cattaro con Kotor e Perast alla riviera di Budva, il lago di Scutari, Ostrog, il Durmitor e il canyon del Tara. Scheda pratica e budget.",
  },
  'new-york': {
    seoTitle: "New York: cosa vedere in 6-7 giorni",
    seoDescription:
      "Sei giorni a piedi tra Times Square, il Top of the Rock, la Statua della Libertà, Broadway, DUMBO e una partita dal vivo. Scheda pratica, ESTA e metro.",
  },
  norvegia: {
    seoTitle: "Norvegia: Lofoten d'estate o Tromsø d'inverno?",
    seoDescription:
      "Due viaggi opposti: sette giorni on the road alle Lofoten con il sole di mezzanotte, o Tromsø con aurora, husky e cultura sami. Scheda pratica e costi.",
    socialTitle: "Lofoten sotto il sole di mezzanotte o Tromsø sotto l'aurora? Due Norvegie a confronto",
  },
  'paesi-bassi': {
    seoTitle: "Amsterdam: cosa vedere in 4 giorni",
    seoDescription:
      "Amsterdam a piedi e in bici: l'anello dei canali UNESCO, il Rijksmuseum, il Van Gogh Museum e i quartieri. Scheda pratica, prenotazioni e itinerario.",
  },
  panama: {
    seoTitle: "Panama: cosa vedere tra San Blas, Bocas e la capitale",
    seoDescription:
      "Il paese più facile da girare del Centro America: si paga in dollari e i voli interni funzionano. Panama City, le isole Guna di San Blas e Bocas del Toro.",
  },
  peru: {
    seoTitle: "Viaggio in Perù: cosa vedere, da Machu Picchu all'Amazzonia",
    seoDescription:
      "Machu Picchu e il trek di Choquequirao, il Titicaca, tre porte per l'Amazzonia e la Cordillera Blanca: scheda pratica e un itinerario di 31 giorni.",
  },
  polonia: {
    seoTitle: "Cracovia: cosa vedere in un weekend lungo",
    seoDescription:
      "Cracovia, uscita quasi intatta dalla guerra: il centro medievale, il castello di Wawel, Kazimierz e la giornata ad Auschwitz-Birkenau. Scheda pratica.",
  },
  portogallo: {
    seoTitle: "Lisbona: cosa vedere in 4 giorni",
    seoDescription:
      "Lisbona sulle sue sette colline: il tram 28 nell'Alfama, Jerónimos e la Torre di Belém, i miradouros e la gita a Sintra. Scheda pratica e itinerario.",
  },
  qatar: {
    seoTitle: "Stopover a Doha: come funziona e cosa vedere",
    seoDescription:
      "Qatar Airways offre hotel a quattro e cinque stelle a Doha a prezzi da stopover: come prenotarlo, cosa vedere in città e cosa sapere sul Qatar.",
  },
  'repubblica-ceca': {
    seoTitle: "Praga: cosa vedere in un weekend lungo",
    seoDescription:
      "La città dalle cento torri, uscita quasi indenne dalla guerra: Città Vecchia, Ponte Carlo, il Castello e Malá Strana. Scheda pratica, corone e consigli.",
  },
  singapore: {
    seoTitle: "Singapore: cosa vedere e cosa sapere prima di andare",
    seoDescription:
      "Un'isola senza risorse nel 1965, oggi la città più efficiente del mondo e una delle più care: scheda pratica, hawker centre e come abbinarla alla Malesia.",
  },
  spagna: {
    seoTitle: "Viaggio in Spagna: Canarie, Baleari, Andalusia o Nord?",
    seoDescription:
      "Quattro Spagne diverse: le Canarie miti tutto l'anno, l'estate delle Baleari, l'Andalusia moresca e il Nord verde dei pintxos. Quattro itinerari e scheda.",
    socialTitle: "Canarie, Baleari, Andalusia o Nord: quale Spagna scegliere?",
  },
  'sri-lanka': {
    seoTitle: "Sri Lanka in 12 giorni: cosa vedere e come muoversi",
    seoDescription:
      "In van privato tra il triangolo culturale, l'Adam's Peak di notte, le piantagioni di Nuwara Eliya, il treno per Ella e le spiagge del sud. Scheda pratica.",
  },
  svezia: {
    seoTitle: "Lapponia svedese: aurora boreale tra Kiruna e Abisko",
    seoDescription:
      "Sette giorni nell'estremo nord della Svezia: Kiruna, Abisko e il suo microclima secco per l'aurora, la motoslitta. Scheda pratica e costi.",
  },
  svizzera: {
    seoTitle: "Svizzera in van: le Alpi Bernesi e quanto costa davvero",
    seoDescription:
      "Uno dei paesi più cari d'Europa, da preventivare prima di partire: le Alpi Bernesi da Interlaken al Cervino, in van o furgone. Scheda pratica e costi.",
  },
  thailandia: {
    seoTitle: "Thailandia: cosa vedere tra Bangkok, Chiang Mai e le isole",
    seoDescription:
      "Il giro di 11 giorni da Bangkok a Hua Hin, Khao Sok, Krabi e Koh Phi Phi, più Chiang Mai e le Andamane: scheda pratica, stagioni e quale mare scegliere.",
  },
  transilvania: {
    seoTitle: "Transilvania on the road: castelli e Transfăgărășan",
    seoDescription:
      "Cinque giorni tra Valacchia e Transilvania: il Castello di Peleș, Bran, la salina di Turda e i tornanti della Transfăgărășan. Scheda pratica e guida.",
  },
  turchia: {
    seoTitle: "Viaggio in Turchia: cosa vedere in 12-16 giorni",
    seoDescription:
      "Istanbul, la Cappadocia in mongolfiera, Pamukkale, Efeso e Afrodisia, la costa licia tra Fethiye, Kaş e Antalya. Scheda pratica e itinerario di 16 giorni.",
  },
  ungheria: {
    seoTitle: "Budapest: cosa vedere in un weekend, terme comprese",
    seoDescription:
      "Buda, Óbuda e Pest divise dal Danubio, il Parlamento, il castello e oltre cento sorgenti termali. Scheda pratica, fiorino e itinerario di un weekend.",
  },
}

export const seoMeraviglie: Record<string, SeoPagina> = {
  'grande-muraglia-cinese': {
    seoTitle: "Grande Muraglia: quale sezione scegliere da Pechino",
    seoDescription:
      "Badaling, Mutianyu, Jinshanling o Simatai: quale tratto della Muraglia scegliere, come arrivarci da Pechino, prezzi indicativi e 3 errori da evitare.",
    socialTitle: "Badaling o Mutianyu? Quale tratto della Grande Muraglia scegliere",
  },
  petra: {
    seoTitle: "Petra: Jordan Pass, Petra by Night e come visitarla",
    seoDescription:
      "Come organizzare Petra: il Jordan Pass da 1, 2 o 3 giorni, il Siq, il Tesoro e il Monastero, Petra by Night, le truffe e 3 errori da evitare.",
    socialTitle: "Petra in 1, 2 o 3 giorni? Jordan Pass, Monastero e 3 errori da evitare",
  },
  'cristo-redentore': {
    seoTitle: "Cristo Redentore: treno del Corcovado, orari e biglietti",
    seoDescription:
      "Come salire al Cristo Redentore di Rio: il treno del Corcovado, prezzi, orari migliori, le rivendite non ufficiali da evitare e 3 errori comuni.",
  },
  'machu-picchu': {
    seoTitle: "Machu Picchu: circuiti, biglietti e Huayna Picchu",
    seoDescription:
      "Quote giornaliere, circuiti e come prenotare Huayna Picchu: prezzi per stranieri, orari d'ingresso e 3 errori da evitare a Machu Picchu.",
    socialTitle: "Quale circuito scegliere a Machu Picchu (e come non restare senza Huayna Picchu)",
  },
  'chichen-itza': {
    seoTitle: "Chichén Itzá: orari, biglietti e come evitare la folla",
    seoDescription:
      "Chichén Itzá senza la ressa dei pullman: a che ora entrare, il Boleto Único da circa 697 pesos, cosa vedere oltre El Castillo e 3 errori da evitare.",
  },
  colosseo: {
    seoTitle: "Colosseo: biglietti, arena e come evitare le code",
    seoDescription:
      "Il biglietto combinato con Foro e Palatino, la Full Experience con arena e sotterranei, orari e prenotazione: come visitare il Colosseo e 3 errori.",
  },
  'taj-mahal': {
    seoTitle: "Taj Mahal all'alba: biglietti, orari e truffe da evitare",
    seoDescription:
      "Perché entrare all'alba, il biglietto da circa 1.300 rupie per stranieri, il venerdì di chiusura e le truffe dei finti negozi: come visitare il Taj Mahal.",
  },
}
