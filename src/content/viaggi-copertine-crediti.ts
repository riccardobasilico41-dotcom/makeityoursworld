/**
 * Crediti fotografici per le copertine sourced da Wikimedia Commons — solo
 * quelle non originali del sito (le foto "-stock.jpg" e quelle già in
 * `copertine/` prima di questo file restano senza credito qui: erano già
 * nel repo, sorgente non ritracciata retroattivamente).
 *
 * Le licenze CC BY e CC BY-SA richiedono attribuzione: questo file la tiene
 * tracciata in un posto solo, leggibile da chi mantiene il sito. Non è
 * ancora mostrata in pagina (nessuna richiesta in tal senso) — se in futuro
 * si vuole un credito visibile (es. una piccola dicitura sotto l'immagine o
 * una pagina "crediti fotografici"), i dati sono già tutti qui pronti da
 * collegare, senza dover ripercorrere ogni fonte da capo.
 *
 * Chiave = `Viaggio['slug']`, stessa chiave di `copertineViaggi`.
 */

export type CreditoImmagine = {
  autore: string
  licenza: string
  fonteUrl: string
}

export const creditiCopertine: Record<string, CreditoImmagine> = {
  'capitali-nordiche': {
    autore: 'Stig Nygaard',
    licenza: 'CC BY 3.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Nyhavn_on_a_sunny_spring_day._Denmark_2012._-_panoramio.jpg',
  },
  'capitali-baltiche': {
    autore: 'Ivar Leidus',
    licenza: 'CC BY-SA 3.0 EE',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Vanalinn_Patkuli_platvormilt_2013.jpg',
  },
  'cina-classica': {
    autore: 'Luka Peternel',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Jinshanling-facing-west-2019-Luka-Peternel.jpg',
  },
  'cina-paesaggi': {
    autore: 'Chensiyuan',
    licenza: 'CC BY-SA 4.0 / 3.0 / GFDL',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:1_tianzishan_wulingyuan_zhangjiajie_2012.jpg',
  },
  'corea-del-sud-itinerario': {
    autore: 'CES (Wikipedia in inglese)',
    licenza: 'Pubblico dominio',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Dorasan_Station.jpg',
  },
  'malesia-singapore': {
    autore: 'Chainwit.',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Batu_Caves_stairs_2022-05.jpg',
  },
  'borneo-itinerario': {
    autore: 'Kallerna',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:St._John%27s_Peak_Mount_Kinabalu_3.jpg',
  },
  'indonesia-itinerario': {
    autore: 'Lydia Kristiani',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Padar_Island_in_Komodo_National_Park.jpg',
  },
  'stopover-golfo': {
    autore: 'Phil6007',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:The_view_of_Dubai_Creek.jpg',
  },
  'arabia-saudita-itinerario': {
    autore: 'Francisco Anzola',
    licenza: 'CC BY 2.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Green_woodwork_in_old_Jeddah_(Al_Balad)_October_8_2021.jpg',
  },
  'dolomiti-roadtrip': {
    autore: 'Daniele Bonaldo',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Tre_cime_di_Lavaredo.jpg',
  },
  'parigi-5-giorni': {
    autore: 'Benh Lieu Song',
    licenza: 'Pubblico dominio / CC BY-SA 3.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Tour_Eiffel_Wikimedia_Commons.jpg',
  },
  'normandia-bretagna': {
    autore: 'Annick Bregain (Kalianouk)',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Grandes_mar%C3%A9es_Mont_Saint_Michel_21_mars_2015.jpg',
  },
  'castelli-loira': {
    autore: 'Hélène Rival',
    licenza: 'CC BY-SA 3.0 / GFDL 1.2+',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Escalier-central-de-face.jpg',
  },
  'bordeaux-e-vigneti': {
    autore: 'MJJR',
    licenza: 'CC BY 3.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Bordeaux_Bourse_R05.jpg',
  },
  'rotte-dei-vini-francia': {
    autore: 'Adam Baker (AlphaTangoBravo)',
    licenza: 'CC BY 2.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Descending_into_Riquewihr_through_vineyards.jpg',
  },
  'provenza-camargue': {
    autore: 'Benh Lieu Song',
    licenza: 'CC BY-SA 3.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Pont_du_Gard_BLS.jpg',
  },
  'settimana-bianca-francia': {
    autore: 'Christian David (Espandero)',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Panorama_of_Aiguille_du_Midi_station,_Chamonix,_Haute-Savoie.jpg',
  },
  'tour-du-mont-blanc': {
    autore: 'Hagai Agmon-Snir (Agmonsnir)',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:MonteBiancoAug082024_01.jpg',
  },
  'settimana-bianca': {
    autore: 'Guba Zoky Rabko',
    licenza: 'CC BY-SA 3.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Piste_Bo%C3%A8_-_View_from_piste_Alta_Badia_-_panoramio.jpg',
  },
  'grandi-citta-italia': {
    autore: 'FeaturedPics',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Colosseo_2020.jpg',
  },
  'sicilia-itinerario': {
    autore: 'Grey48 (via Pixabay)',
    licenza: 'CC0 (pubblico dominio)',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Sicily_Taormina_Teatro_Greco_Etna.jpg',
  },
  'rotte-dei-vini-itinerario': {
    autore: 'Davide Tomatis (Toma15996)',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Autunno_da_Clavesana_1.jpg',
  },
  'roma-4-giorni': {
    autore: 'Julian Lupyan',
    licenza: 'CC0 (pubblico dominio)',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Colosseum,_Eastern_Interior.jpg',
  },
  'firenze-3-giorni': {
    autore: 'Thomas Roessler',
    licenza: 'CC BY-SA 3.0',
    fonteUrl: "https://commons.wikimedia.org/wiki/File:Brunelleschi%27s_Dome,_Florence_Cathedral.jpg",
  },
  'milano-e-i-laghi': {
    autore: 'Julian Lupyan',
    licenza: 'CC0 (pubblico dominio)',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Spires_of_Milan_Cathedral.jpg',
  },
  'venezia-3-giorni': {
    autore: 'Zairon',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Venezia_Basilica_di_San_Marco_Fassade_2.jpg',
  },
  'torino-2-giorni': {
    autore: 'Mongolo1984',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Mole_Antonelliana_(Torino)_09.jpg',
  },
  'napoli-3-giorni': {
    autore: 'Lalupa',
    licenza: 'CC BY 3.0 / GFDL 1.2+',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Spaccanapoli_da_s_Elmo_1050131.JPG',
  },
  'costiera-e-isole': {
    autore: 'Wolfgang Moroder',
    licenza: 'CC BY-SA 3.0 / GFDL 1.2+',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Sentiero_degli_Dei_26_sopra_Positano_Campania.jpg',
  },
  'eolie-in-vela': {
    autore: 'giggel',
    licenza: 'CC BY 3.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Stromboli_%E2%80%93_n%C3%A4chtlicher_Lavafluss_-_am_26.09.2014_%E2%80%93_23.07_Uhr_von_der_%E2%80%9EMein_Schiff_3%E2%80%9C_aus_gesehen_-_panoramio.jpg',
  },
  'sicilia-completa': {
    autore: 'CarlesVA, ritocco di Memorato',
    licenza: 'CC BY-SA 3.0 / GFDL 1.2+',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Cappella_Palatina_-_sostre-2010-08-11.jpg',
  },
  'sardegna-due-anime': {
    autore: 'Jkens',
    licenza: 'CC BY-SA 3.0 / GFDL 1.2+',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Fungo_Arzachena.jpg',
  },
  'isole-siciliane': {
    autore: 'giomodica',
    licenza: 'CC BY 3.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Favignana_-_Cala_rossa_-_panoramio.jpg',
  },
  'costa-azzurra': {
    autore: 'Gilbert Bochenek',
    licenza: 'CC BY-SA 3.0',
    fonteUrl: "https://commons.wikimedia.org/wiki/File:Cap_d%27antibes-PACA-Sentier_du_littoral-gb.jpg",
  },
  tromso: {
    autore: 'BishkekRocks',
    licenza: 'CC BY-SA 3.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Tromsø_panorama.jpg',
  },
  'islanda-2024': {
    autore: 'Fabrizio Lecce',
    licenza: 'CC BY 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Icebergs_in_the_Jökulsárlón_Glacier_Lagoon,_Iceland.jpg',
  },
  'lapponia-svedese-abisko': {
    autore: 'Ximonic (Simo Räsänen)',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Lapporten_over_Torneträsk,_Norrbotten,_Sweden,_2015_April.jpg',
  },
  'bolivia-itinerario': {
    autore: 'Diego Delso',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Isla_Incahuasi,_Salar_de_Uyuni,_Bolivia,_2016-02-04,_DD_43.jpg',
  },
  'centro-america-itinerario': {
    autore: 'Chad Davis',
    licenza: 'CC BY-SA 2.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Santa_Catalina_Arch_-_Antigua_Guatemala_Feb_2020.jpg',
  },
  'svizzera-alpi-van': {
    autore: 'Bob Tan',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Zermatt_aerial_panorama_facing_the_Materhorn_160622_2.jpg',
  },
  'cracovia-weekend': {
    autore: 'Ingo Mehling',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Krakow_-_Wawel_from_Vistula_-_4.jpg',
  },
  'praga-weekend': {
    autore: 'Uoaei1',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Praha_Panorama_from_Petřín_20170430.jpg',
  },
  'vienna-weekend': {
    autore: 'MrPanyGoff',
    licenza: 'CC BY-SA 3.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Panorama_from_Belvedere_-_Vienna.jpg',
  },
  'amsterdam-weekend': {
    autore: 'Lyn Gateley',
    licenza: 'CC BY 2.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:DSC00288,_Canal_Cruise,_Amsterdam,_Netherlands_(338955340).jpg',
  },
  'lisbona-weekend': {
    autore: 'Jakub Hałun',
    licenza: 'CC BY 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:View_from_Miradouro_de_Santa_Luzia,_Lisbon,_20250603_2016_9045.jpg',
  },
  'budapest-weekend': {
    autore: 'Florian Fèvre (Billy69150)',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Danube_and_Hungarian_Parliament_Building_by_night.jpg',
  },
  'berlino-weekend': {
    autore: 'Martin Kraft',
    licenza: 'CC BY-SA 3.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:MK20007_Brandenburger_Tor.jpg',
  },
  'andalusia-itinerario': {
    autore: 'Benjamin Smith',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Granada_-_Alhambra_-_Palacios_nazar%C3%ADes_-_Patio_de_los_Arrayanes.jpg',
  },
  'spagna-nord-itinerario': {
    autore: 'Phillip Maiwald (Nikopol)',
    licenza: 'CC BY-SA 3.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:San_Sebastian_Bay_Panorama.jpg',
  },
  'baleari-itinerario': {
    autore: 'Macondo (Wikimedia Commons)',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Es_Vedr%C3%A0_i_es_Vedranell_2020-07-31.jpg',
  },
  'canarie-itinerario': {
    autore: 'Ingo Mehling (Wikimedia Commons)',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Teide_Roques_de_Garcia.jpg',
  },
  'india-sud-taj-mahal': {
    autore: 'Abhishek Prasad (Unsplash)',
    licenza: 'Unsplash License',
    fonteUrl: 'https://unsplash.com/photos/brown-wooden-boat-on-body-of-water-near-green-palm-trees-during-daytime-ayFW56Rz5Cs',
  },
  'maldive-guida': {
    autore: 'Ishan @seefromthesky (Unsplash)',
    licenza: 'Unsplash License',
    fonteUrl: 'https://unsplash.com/photos/an-island-in-the-middle-of-the-ocean-TVq_QL0YE-I',
  },
  'messico-dia-de-los-muertos': {
    autore: 'Roger Ce (Unsplash)',
    licenza: 'Unsplash License',
    fonteUrl: 'https://images.unsplash.com/photo-1667598335682-fd98c95fc80f',
  },
  'messico-cdmx-baja-california': {
    autore: 'Alejandro De Casso (Unsplash)',
    licenza: 'Unsplash License',
    fonteUrl: 'https://images.unsplash.com/photo-1650336534265-c2345016e42e',
  },
  'brasile-itinerario': {
    autore: 'Renato Nascimento (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/photo/27688583/',
  },
  'croazia-itinerario': {
    autore: 'László Tóth (Unsplash)',
    licenza: 'Unsplash License',
    fonteUrl: 'https://images.unsplash.com/photo-1589472501747-1660aeed4d80',
  },
  'egitto-mare-luxor-cairo': {
    autore: 'Mustang Joe (Wikimedia Commons)',
    licenza: 'CC0 1.0 (pubblico dominio)',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Floating_over_the_Valley_of_the_Kings,_Luxor,_Egypt_(54480104477).jpg',
  },
  'egitto-completo': {
    autore: 'Gary Todd from Xinzheng, China (Wikimedia Commons)',
    licenza: 'CC0 1.0 (pubblico dominio)',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Abu_Simbel_Temple_of_Ramesses_II_(9794542314).jpg',
  },
  'turchia-itinerario': {
    autore: 'Netha Hussain (Wikimedia Commons)',
    licenza: 'CC0 1.0 (pubblico dominio)',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Aerial_view_of_Cappadocia_from_hot_air_balloon_68.jpg',
  },
  'filippine-itinerario': {
    autore: 'lumoplank (Wikimedia Commons)',
    licenza: 'CC0 1.0 (pubblico dominio)',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Coron_and_Calamian_Islands_-_Coron1729.jpg',
  },
  'california-road-trip': {
    autore: 'adrian aows (Wikimedia Commons)',
    licenza: 'CC0 1.0 (pubblico dominio)',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Icons_(Unsplash).jpg',
  },
  'montenegro-itinerario': {
    autore: 'Tumi-1983 (Wikimedia Commons)',
    licenza: 'CC0 1.0 (pubblico dominio)',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:R.K.C._Gospa_od_Škrpjela,_Perast,_Montenegro.jpg',
  },
  'canada-itinerario': {
    autore: 'EddaBeck (Wikimedia Commons)',
    licenza: 'CC0 1.0 (pubblico dominio)',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Niagara_Falls_from_the_Canadian_side.jpg',
  },
}
