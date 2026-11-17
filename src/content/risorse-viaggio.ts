import type { Lingua } from '@/lib/i18n/config'

/**
 * «Cosa uso in viaggio»: app, servizi e strumenti che Rick nomina davvero nei suoi viaggi.
 * Ogni voce ha un'espressione `cerca` che la pagina applica al testo pubblico dei viaggi
 * (italiano): i viaggi elencati accanto alla voce sono quelli in cui il nome compare, e una
 * voce che non compare in nessun viaggio non viene mostrata. Niente da aggiungere a mano
 * che non sia già scritto in un itinerario.
 *
 * Fuori di proposito: Seat61 (citato solo nelle note di redazione, non nel testo pubblico),
 * Enterprise (solo come fonte), «Alamo» (è Alamo Square, non il noleggio).
 */

export type GruppoRisorse = 'voli' | 'treni' | 'auto' | 'alloggi' | 'esim' | 'soldi' | 'app' | 'documenti' | 'assicurazione'

export type Risorsa = {
  id: string
  nome: string
  gruppo: GruppoRisorse
  cerca: RegExp
  riga: Record<Lingua, string>
  /** Partner con link pronto per l'affiliazione (vedi src/lib/affiliazioni.ts). */
  partner?: 'booking' | 'tripcom' | 'airalo' | 'holafly' | 'assicurazione'
}

export const GRUPPI: { id: GruppoRisorse; nome: Record<Lingua, string> }[] = [
  { id: 'voli', nome: { it: 'Voli e scali', en: 'Flights and stopovers', es: 'Vuelos y escalas' } },
  { id: 'treni', nome: { it: 'Treni, bus e traghetti', en: 'Trains, buses and ferries', es: 'Trenes, autobuses y ferris' } },
  { id: 'auto', nome: { it: 'Auto', en: 'Car', es: 'Coche' } },
  { id: 'alloggi', nome: { it: 'Alloggi', en: 'Accommodation', es: 'Alojamiento' } },
  { id: 'esim', nome: { it: 'eSIM e connessione', en: 'eSIM and connectivity', es: 'eSIM y conexión' } },
  { id: 'soldi', nome: { it: 'Soldi e carte', en: 'Money and cards', es: 'Dinero y tarjetas' } },
  { id: 'app', nome: { it: 'App utili', en: 'Useful apps', es: 'Apps útiles' } },
  { id: 'documenti', nome: { it: 'Documenti', en: 'Documents', es: 'Documentos' } },
  { id: 'assicurazione', nome: { it: 'Assicurazione', en: 'Insurance', es: 'Seguro' } },
]

export const RISORSE: Risorsa[] = [
  // voli
  {
    id: 'dubai-connect',
    nome: 'Emirates Dubai Connect',
    gruppo: 'voli',
    cerca: /Dubai Connect/,
    riga: {
      it: 'Hotel, pasti, transfer e visto di transito gratuiti quando lo scalo a Dubai è lungo e inevitabile.',
      en: 'Free hotel, meals, transfers and transit visa when a long Dubai layover is unavoidable.',
      es: 'Hotel, comidas, traslados y visado de tránsito gratis cuando la escala larga en Dubái es inevitable.',
    },
  },
  {
    id: 'etihad-stopover',
    nome: 'Etihad Stopover',
    gruppo: 'voli',
    cerca: /stopover Etihad|Etihad[^.]{0,40}stopover|Etihad lo regala/i,
    riga: {
      it: 'Le notti gratuite ad Abu Dhabi se lo scalo lo scegli tu, prenotando con Etihad.',
      en: 'Free nights in Abu Dhabi when you choose the stopover, booking with Etihad.',
      es: 'Noches gratis en Abu Dabi si eliges la escala, reservando con Etihad.',
    },
  },
  // treni, bus e traghetti
  {
    id: 'jr-pass',
    nome: 'JR Pass',
    gruppo: 'treni',
    cerca: /JR Pass/,
    riga: {
      it: 'Il pass dei treni JR in Giappone, per i grandi spostamenti: il nostro l’abbiamo attivato dal quarto giorno.',
      en: 'The JR rail pass in Japan, for the long journeys: we activated ours from day four.',
      es: 'El pase de trenes JR en Japón, para los grandes trayectos: nosotros lo activamos desde el cuarto día.',
    },
  },
  {
    id: 'suica',
    nome: 'Suica / PASMO',
    gruppo: 'treni',
    cerca: /Suica|PASMO/i,
    riga: {
      it: 'Carta IC ricaricabile, anche sul telefono, per metro, bus e treni urbani in Giappone.',
      en: 'Rechargeable IC card, also on your phone, for metro, buses and city trains in Japan.',
      es: 'Tarjeta IC recargable, también en el móvil, para metro, autobuses y trenes urbanos en Japón.',
    },
  },
  {
    id: '12306',
    nome: '12306',
    gruppo: 'treni',
    cerca: /\b12306\b/,
    riga: {
      it: 'L’app ufficiale dei treni cinesi, in inglese: i biglietti si aprono 15 giorni prima e finiscono presto.',
      en: 'The official Chinese railway app, in English: tickets open 15 days ahead and sell out fast.',
      es: 'La app oficial de los trenes chinos, en inglés: los billetes salen 15 días antes y se agotan pronto.',
    },
  },
  {
    id: 'tripcom-treni',
    nome: 'Trip.com',
    gruppo: 'treni',
    cerca: /Trip\.com/,
    partner: 'tripcom',
    riga: {
      it: 'L’alternativa a 12306 per i treni in Cina: accetta prenotazioni in anticipo, con una commissione.',
      en: 'The alternative to 12306 for trains in China: it takes early bookings, for a fee.',
      es: 'La alternativa a 12306 para los trenes en China: acepta reservas anticipadas, con comisión.',
    },
  },
  {
    id: 'ktx',
    nome: 'KTX',
    gruppo: 'treni',
    cerca: /\bKTX\b/,
    riga: {
      it: 'L’alta velocità coreana: Seoul-Busan in poco più di due ore e mezza, da prenotare in anticipo.',
      en: 'Korea’s high-speed rail: Seoul to Busan in just over two and a half hours, book ahead.',
      es: 'La alta velocidad coreana: Seúl-Busan en poco más de dos horas y media, mejor reservar antes.',
    },
  },
  {
    id: '12go',
    nome: '12Go',
    gruppo: 'treni',
    cerca: /12Go/i,
    riga: {
      it: 'Dove abbiamo trovato i treni notturni in India quando la prima classe era finita.',
      en: 'Where we found the overnight trains in India when first class was sold out.',
      es: 'Donde encontramos los trenes nocturnos en India cuando la primera clase estaba agotada.',
    },
  },
  {
    id: 'kai-access',
    nome: 'KAI Access',
    gruppo: 'treni',
    cerca: /KAI Access/,
    riga: {
      it: 'L’app delle ferrovie indonesiane, per prenotare e controllare gli orari dei treni a Giava e Sumatra.',
      en: 'The Indonesian railway app, to book and check train times on Java and Sumatra.',
      es: 'La app de los ferrocarriles indonesios, para reservar y consultar horarios en Java y Sumatra.',
    },
  },
  {
    id: 'trenitalia',
    nome: 'Trenitalia / Italo',
    gruppo: 'treni',
    cerca: /Trenitalia|\bItalo\b/,
    riga: {
      it: 'I treni in Italia: biglietti in app o alle macchinette, l’alta velocità costa meno comprando in anticipo.',
      en: 'Trains in Italy: tickets in the app or at the machines, high-speed fares are cheaper when booked early.',
      es: 'Los trenes en Italia: billetes en la app o en las máquinas, la alta velocidad cuesta menos comprando antes.',
    },
  },
  {
    id: 'renfe',
    nome: 'Renfe',
    gruppo: 'treni',
    cerca: /\bRenfe\b/,
    riga: {
      it: 'I treni spagnoli, per esempio il diretto per Granada in Andalusia.',
      en: 'Spanish trains, for example the direct train to Granada in Andalusia.',
      es: 'Los trenes españoles, por ejemplo el directo a Granada en Andalucía.',
    },
  },
  {
    id: 'flixbus',
    nome: 'FlixBus',
    gruppo: 'treni',
    cerca: /FlixBus/i,
    riga: {
      it: 'Bus economici, dall’aeroporto di Ginevra a Chamonix o lungo la costa croata.',
      en: 'Budget buses, from Geneva airport to Chamonix or along the Croatian coast.',
      es: 'Autobuses económicos, del aeropuerto de Ginebra a Chamonix o por la costa croata.',
    },
  },
  {
    id: 'ado',
    nome: 'ADO',
    gruppo: 'treni',
    cerca: /\bADO\b/,
    riga: {
      it: 'I bus tra le città del Messico, dall’aeroporto di Cancún allo Yucatán e oltre.',
      en: 'The buses between Mexican cities, from Cancún airport to the Yucatán and beyond.',
      es: 'Los autobuses entre las ciudades de México, del aeropuerto de Cancún al Yucatán y más allá.',
    },
  },
  {
    id: 'traghetti',
    nome: 'CalMac · Liberty Lines · OceanJet · Jadrolinija',
    gruppo: 'treni',
    cerca: /CalMac|Liberty Lines|OceanJet|Jadrolinija/,
    riga: {
      it: 'Le compagnie di traghetti e aliscafi citate negli itinerari: in Scozia, alle Egadi, nelle Filippine e in Croazia.',
      en: 'The ferry and hydrofoil companies mentioned in the itineraries: Scotland, the Egadi islands, the Philippines and Croatia.',
      es: 'Las navieras de ferris e hidrodeslizadores citadas en los itinerarios: Escocia, las Égadas, Filipinas y Croacia.',
    },
  },
  // auto
  {
    id: 'sixt',
    nome: 'Sixt',
    gruppo: 'auto',
    cerca: /\bSixt\b/,
    riga: {
      it: 'Il noleggio usato in Islanda e nel road trip in Florida.',
      en: 'The rental company used in Iceland and on the Florida road trip.',
      es: 'El alquiler que usamos en Islandia y en el road trip por Florida.',
    },
  },
  {
    id: 'avis',
    nome: 'Avis',
    gruppo: 'auto',
    cerca: /\bAvis\b/,
    riga: {
      it: 'Ritiro e riconsegna a Bucarest per il giro in auto della Transilvania.',
      en: 'Pick-up and drop-off in Bucharest for the Transylvania drive.',
      es: 'Recogida y devolución en Bucarest para la ruta en coche por Transilvania.',
    },
  },
  // alloggi
  {
    id: 'booking',
    nome: 'Booking.com',
    gruppo: 'alloggi',
    cerca: /Booking\.com/,
    partner: 'booking',
    riga: {
      it: 'Dove controllo punteggi e recensioni degli hotel prima di scegliere, soprattutto il voto sulla posizione.',
      en: 'Where I check hotel scores and reviews before choosing, especially the location score.',
      es: 'Donde miro puntuaciones y opiniones de los hoteles antes de elegir, sobre todo la nota de ubicación.',
    },
  },
  {
    id: 'airbnb',
    nome: 'Airbnb / VRBO',
    gruppo: 'alloggi',
    cerca: /Airbnb|VRBO/,
    riga: {
      it: 'Ville private in affitto, la soluzione più diffusa a Orlando vicino ai parchi.',
      en: 'Private rental villas, the most common choice in Orlando near the parks.',
      es: 'Villas privadas de alquiler, la opción más habitual en Orlando cerca de los parques.',
    },
  },
  {
    id: 'tripadvisor',
    nome: 'Tripadvisor',
    gruppo: 'alloggi',
    cerca: /Tripadvisor/i,
    riga: {
      it: 'L’altra fonte di recensioni che confronto per gli hotel.',
      en: 'The other review source I compare for hotels.',
      es: 'La otra fuente de opiniones que comparo para los hoteles.',
    },
  },
  // esim
  {
    id: 'airalo',
    nome: 'Airalo',
    gruppo: 'esim',
    cerca: /Airalo/,
    partner: 'airalo',
    riga: {
      it: 'eSIM da attivare prima di partire, in alternativa alla SIM locale.',
      en: 'eSIM to activate before you leave, as an alternative to a local SIM.',
      es: 'eSIM para activar antes de salir, como alternativa a la SIM local.',
    },
  },
  {
    id: 'holafly',
    nome: 'Holafly',
    gruppo: 'esim',
    cerca: /Holafly/,
    partner: 'holafly',
    riga: {
      it: 'L’altra eSIM citata accanto ad Airalo, da attivare prima di partire.',
      en: 'The other eSIM mentioned next to Airalo, to activate before you leave.',
      es: 'La otra eSIM citada junto a Airalo, para activar antes de salir.',
    },
  },
  {
    id: 'esim-cina',
    nome: 'eSIM estera in roaming · VPN',
    gruppo: 'esim',
    cerca: /eSIM estera|\bVPN\b/,
    riga: {
      it: 'In Cina una eSIM estera in roaming aggira i blocchi senza altro; la VPN va installata prima e spenta quando si paga.',
      en: 'In China a foreign roaming eSIM gets around the blocks; a VPN must be installed beforehand and switched off when paying.',
      es: 'En China una eSIM extranjera en roaming evita los bloqueos; la VPN se instala antes y se apaga al pagar.',
    },
  },
  // soldi
  {
    id: 'alipay',
    nome: 'Alipay · WeChat Pay',
    gruppo: 'soldi',
    cerca: /Alipay|WeChat Pay/,
    riga: {
      it: 'In Cina si paga quasi solo così: da installare, verificare e collegare a una carta Visa o Mastercard prima di partire.',
      en: 'In China you pay almost only this way: install, verify and link them to a Visa or Mastercard before you leave.',
      es: 'En China se paga casi solo así: instalar, verificar y vincular a una Visa o Mastercard antes de salir.',
    },
  },
  {
    id: 'revolut',
    nome: 'Revolut',
    gruppo: 'soldi',
    cerca: /Revolut/,
    riga: {
      it: 'La carta con cui si salda spesso alla cassa dei siti archeologici in Messico.',
      en: 'The card often used at the ticket desks of the archaeological sites in Mexico.',
      es: 'La tarjeta con la que se paga a menudo en la taquilla de los sitios arqueológicos de México.',
    },
  },
  {
    id: 'tmoney',
    nome: 'T-money',
    gruppo: 'soldi',
    cerca: /T-money/i,
    riga: {
      it: 'La carta coreana da comprare subito al minimarket: metro, bus, taxi e piccoli acquisti.',
      en: 'The Korean card to buy straight away at a convenience store: metro, buses, taxis and shop purchases.',
      es: 'La tarjeta coreana que hay que comprar nada más llegar: metro, autobuses, taxis y compras en tiendas.',
    },
  },
  // app
  {
    id: 'grab',
    nome: 'Grab',
    gruppo: 'app',
    cerca: /\bGrab\b/,
    riga: {
      it: 'Taxi e moto-taxi nel Sud-est asiatico, con carta estera.',
      en: 'Taxis and motorbike taxis in Southeast Asia, with a foreign card.',
      es: 'Taxis y mototaxis en el Sudeste Asiático, con tarjeta extranjera.',
    },
  },
  {
    id: 'gojek',
    nome: 'Gojek',
    gruppo: 'app',
    cerca: /Gojek/,
    riga: {
      it: 'L’alternativa a Grab in Indonesia, comodissima a Bali e Giava.',
      en: 'The alternative to Grab in Indonesia, very handy on Bali and Java.',
      es: 'La alternativa a Grab en Indonesia, muy cómoda en Bali y Java.',
    },
  },
  {
    id: 'uber',
    nome: 'Uber · Lyft',
    gruppo: 'app',
    cerca: /\bUber\b|\bLyft\b/,
    riga: {
      it: 'Per l’aeroporto e le sere in città, spesso più conveniente del taxi: meglio scaricarle prima di partire.',
      en: 'For airport runs and evenings in town, often cheaper than a taxi: download them before you leave.',
      es: 'Para el aeropuerto y las noches en la ciudad, a menudo más barato que el taxi: mejor descargarlas antes.',
    },
  },
  {
    id: 'bolt',
    nome: 'Bolt',
    gruppo: 'app',
    cerca: /\bBolt\b/,
    riga: {
      it: 'Il ride-hailing che funziona in molte città europee, dalle capitali ai Balcani.',
      en: 'The ride-hailing app that works in many European cities, from the capitals to the Balkans.',
      es: 'La app de VTC que funciona en muchas ciudades europeas, de las capitales a los Balcanes.',
    },
  },
  {
    id: 'careem',
    nome: 'Careem',
    gruppo: 'app',
    cerca: /Careem/,
    riga: {
      it: 'L’app di trasporto di Medio Oriente ed Egitto, accanto a Uber.',
      en: 'The ride app of the Middle East and Egypt, alongside Uber.',
      es: 'La app de transporte de Oriente Medio y Egipto, junto a Uber.',
    },
  },
  {
    id: 'didi',
    nome: 'DiDi',
    gruppo: 'app',
    cerca: /\bDiDi\b/i,
    riga: {
      it: 'Taxi via app in Cina (anche dentro Alipay, in inglese) e in Messico.',
      en: 'App taxis in China (also inside Alipay, in English) and in Mexico.',
      es: 'Taxis por app en China (también dentro de Alipay, en inglés) y en México.',
    },
  },
  {
    id: 'cabify',
    nome: 'Cabify · inDrive',
    gruppo: 'app',
    cerca: /Cabify|inDrive/i,
    riga: {
      it: 'Le app di trasporto in Perù e Bolivia (Cabify anche in Spagna), di solito meno care del taxi.',
      en: 'The ride apps in Peru and Bolivia (Cabify also in Spain), usually cheaper than a taxi.',
      es: 'Las apps de transporte en Perú y Bolivia (Cabify también en España), normalmente más baratas que el taxi.',
    },
  },
  {
    id: 'kakao',
    nome: 'Naver Map · KakaoMap · Kakao T · Papago',
    gruppo: 'app',
    cerca: /Naver Map|KakaoMap|Kakao T|Papago/,
    riga: {
      it: 'In Corea Google Maps non porta da nessuna parte: mappe, taxi e traduzioni passano da queste app.',
      en: 'In Korea Google Maps won’t navigate: maps, taxis and translation go through these apps.',
      es: 'En Corea Google Maps no te lleva a ningún sitio: mapas, taxis y traducción pasan por estas apps.',
    },
  },
  {
    id: 'google-maps',
    nome: 'Google Maps offline',
    gruppo: 'app',
    cerca: /Google Maps offline/,
    riga: {
      it: 'Le mappe scaricate prima funzionano anche senza rete, utili soprattutto in metro.',
      en: 'Maps downloaded in advance work without signal, handy above all in the subway.',
      es: 'Los mapas descargados antes funcionan sin conexión, útiles sobre todo en el metro.',
    },
  },
  {
    id: 'google-translate',
    nome: 'Google Translate · Google Lens',
    gruppo: 'app',
    cerca: /Google Translate|Google Lens/,
    riga: {
      it: 'Dizionario offline e traduzione dei menù scritti a mano nei ristoranti piccoli del Giappone.',
      en: 'Offline dictionary and translation of handwritten menus in Japan’s small restaurants.',
      es: 'Diccionario sin conexión y traducción de menús escritos a mano en los restaurantes pequeños de Japón.',
    },
  },
  {
    id: 'line',
    nome: 'Line',
    gruppo: 'app',
    cerca: /\bLine \(più usata di WhatsApp/,
    riga: {
      it: 'In Thailandia è più usata di WhatsApp per scrivere ai locali.',
      en: 'In Thailand it is used more than WhatsApp to message locals.',
      es: 'En Tailandia se usa más que WhatsApp para escribir a la gente local.',
    },
  },
  {
    id: 'islanda',
    nome: 'safetravel.is · vedur.is',
    gruppo: 'app',
    cerca: /safetravel\.is|vedur\.is/,
    riga: {
      it: 'In Islanda, il giorno prima: meteo, strade e stato delle aree vulcaniche.',
      en: 'In Iceland, the day before: weather, roads and the state of the volcanic areas.',
      es: 'En Islandia, el día antes: tiempo, carreteras y estado de las zonas volcánicas.',
    },
  },
  // documenti
  {
    id: 'esta',
    nome: 'ESTA',
    gruppo: 'documenti',
    cerca: /\bESTA\b/,
    riga: {
      it: 'L’autorizzazione elettronica di viaggio per gli Stati Uniti, valida due anni.',
      en: 'The electronic travel authorisation for the United States, valid for two years.',
      es: 'La autorización electrónica de viaje para Estados Unidos, válida dos años.',
    },
  },
  {
    id: 'uk-eta',
    nome: 'UK ETA',
    gruppo: 'documenti',
    cerca: /app ufficiale UK ETA/,
    riga: {
      it: 'Per il Regno Unito: si chiede su gov.uk o con l’app ufficiale, insieme al passaporto.',
      en: 'For the United Kingdom: apply on gov.uk or with the official app, and bring your passport.',
      es: 'Para el Reino Unido: se pide en gov.uk o con la app oficial, junto con el pasaporte.',
    },
  },
  // assicurazione
  {
    id: 'assistenza-stradale',
    nome: 'Assistenza stradale',
    gruppo: 'assicurazione',
    cerca: /assistenza stradale/,
    partner: 'assicurazione',
    riga: {
      it: 'In Islanda non l’avevamo: carro attrezzi pagato caro e tappe saltate. Con l’auto a noleggio la prendo sempre.',
      en: 'We didn’t have it in Iceland: an expensive tow truck and skipped stops. With a rental car I always take it now.',
      es: 'En Islandia no la teníamos: grúa carísima y etapas perdidas. Con coche de alquiler la cojo siempre.',
    },
  },
  {
    id: 'soccorso-piste',
    nome: 'Soccorso piste e montagna',
    gruppo: 'assicurazione',
    cerca: /soccorso in pista|soccorso piste|Assicurazione soccorso|fuori pista entro i cancelli/i,
    partner: 'assicurazione',
    riga: {
      it: 'Sulla neve il soccorso si paga, in Italia, in Francia e in Giappone: va coperto prima di salire.',
      en: 'On the slopes rescue is not free, in Italy, France and Japan: get it covered before you go up.',
      es: 'En la nieve el rescate se paga, en Italia, Francia y Japón: hay que cubrirlo antes de subir.',
    },
  },
  {
    id: 'sanitaria-evacuazione',
    nome: 'Sanitaria con rimpatrio ed evacuazione',
    gruppo: 'assicurazione',
    cerca: /assicurazione sanitaria con rimpatrio|coprire l['’]evacuazione|che la copra|evacuazione richiede ore|Assicurazione sanitaria\*\* con massimale/i,
    partner: 'assicurazione',
    riga: {
      it: 'Dove gli ospedali sono lontani o carissimi (Messico, Borneo, Mentawai, Papua, Canada) serve una polizza che copra rimpatrio ed evacuazione.',
      en: 'Where hospitals are far away or very expensive (Mexico, Borneo, Mentawai, Papua, Canada) you need cover for repatriation and evacuation.',
      es: 'Donde los hospitales están lejos o son carísimos (México, Borneo, Mentawai, Papúa, Canadá) hace falta una póliza con repatriación y evacuación.',
    },
  },
  {
    id: 'subacquea',
    nome: 'Subacquea (tipo DAN)',
    gruppo: 'assicurazione',
    cerca: /assicurazione subacquea|copertura per le immersioni/i,
    partner: 'assicurazione',
    riga: {
      it: 'Per le immersioni in Egitto e alle Maldive: le camere iperbariche sono poche e i trasferimenti costano.',
      en: 'For diving in Egypt and the Maldives: hyperbaric chambers are few and transfers are expensive.',
      es: 'Para bucear en Egipto y Maldivas: hay pocas cámaras hiperbáricas y los traslados son caros.',
    },
  },
]

/** Nomi tradotti delle voci descrittive (le marche restano uguali in tutte le lingue). */
export const NOMI_TRADOTTI: Partial<Record<string, Record<Lingua, string>>> = {
  'esim-cina': { it: 'eSIM estera in roaming · VPN', en: 'Foreign roaming eSIM · VPN', es: 'eSIM extranjera en roaming · VPN' },
  'assistenza-stradale': { it: 'Assistenza stradale', en: 'Roadside assistance', es: 'Asistencia en carretera' },
  'soccorso-piste': { it: 'Soccorso piste e montagna', en: 'Ski and mountain rescue', es: 'Rescate en pistas y montaña' },
  'sanitaria-evacuazione': {
    it: 'Sanitaria con rimpatrio ed evacuazione',
    en: 'Medical, repatriation and evacuation',
    es: 'Médico con repatriación y evacuación',
  },
  subacquea: { it: 'Subacquea (tipo DAN)', en: 'Diving (DAN-type)', es: 'Buceo (tipo DAN)' },
  'google-maps': { it: 'Google Maps offline', en: 'Google Maps offline', es: 'Google Maps sin conexión' },
}

