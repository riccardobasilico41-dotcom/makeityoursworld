import type { Lingua } from '@/lib/i18n/config'

/*
 * Guide, alloggi e operatori che Rick consiglia, per destinazione (chiave `paese/slug`).
 * Solo chi lo ha convinto e di cui ricorda il nome; nessun link affiliato. Siti verificati
 * il 4/11/2026 (docs: resoconto in chat). `fatto: false` = consigliato senza averlo provato.
 * I numeri WhatsApp li ha dati Rick: sono contatti di lavoro delle guide.
 */

export type Consigliato = {
  nome: string
  cosa: Record<Lingua, string>
  testo: Record<Lingua, string>
  url?: string
  whatsapp?: string
  fatto: boolean
}

export const CONSIGLIATI: Record<string, Consigliato[]> = {
  'india/varanasi': [
    {
      nome: 'Shiva',
      cosa: { it: 'Guida a Varanasi', en: 'Guide in Varanasi', es: 'Guía en Benarés' },
      url: 'https://www.shivainbaranas.com',
      fatto: true,
      testo: {
        it: "Varanasi è assolutamente da fare con Shiva. Il suo sito l'ho fatto io, ma non è un conflitto di interessi: raramente ho trovato una persona così gentile, disponibile e che conosce così bene il posto, e te lo spiega mentre giri. È come fare una passeggiata per le vie del tuo paese con un amico: ti fa sentire a casa e ti aiuta in tutto. Una chicca: a Varanasi la mia fidanzata è stata morsa da una scimmia sul terrazzo dell'hotel che dava sul Gange (shit happens while travelling). Shiva ci ha accompagnati in ospedale per la visita, le vaccinazioni e tutto il necessario, senza problemi. Un servizio che va oltre la guida, da persona vera, onesta e gentile.",
        en: "Varanasi is a must with Shiva. I built his website, but that's not a conflict of interest: I've rarely met someone so kind, helpful and who knows the place so well, explaining it as you walk around. It's like strolling through your own hometown with a friend: he makes you feel at home and helps you with everything. A little story: in Varanasi my girlfriend was bitten by a monkey on the terrace of our hotel overlooking the Ganges (shit happens while travelling). Shiva took us to the hospital for the check-up, the vaccinations and everything else, no problem at all. Service that goes beyond guiding, from a real, honest and kind person.",
        es: 'Benarés hay que hacerla con Shiva, sin duda. Su web la hice yo, pero no es un conflicto de intereses: pocas veces he encontrado a alguien tan amable, disponible y que conozca tan bien el lugar, y te lo explica mientras paseas. Es como pasear por las calles de tu pueblo con un amigo: te hace sentir en casa y te ayuda en todo. Una anécdota: en Benarés a mi novia la mordió un mono en la terraza del hotel que daba al Ganges (shit happens while travelling). Shiva nos acompañó al hospital para la visita, las vacunas y todo lo necesario, sin problemas. Un servicio que va más allá de guiar, de una persona de verdad, honesta y amable.',
      },
    },
  ],
  'indonesia/sulawesi': [
    {
      nome: 'Wale Adventure (Alvaro)',
      cosa: { it: 'Tour operator locale', en: 'Local tour operator', es: 'Operador local' },
      url: 'https://wale-adventure.com',
      fatto: true,
      testo: {
        it: "Per organizzare Sulawesi chiedete di Alvaro di Wale Adventure: gentili e bravi, fanno tour privati su tutta l'isola e hanno anche una vanilla farm da visitare. Per trasparenza: il loro sito l'ho fatto io.",
        en: 'To organize Sulawesi, ask for Alvaro at Wale Adventure: kind and good at what they do, they run private tours across the island and also have a vanilla farm you can visit. For transparency: I built their website.',
        es: 'Para organizar Célebes, preguntad por Alvaro de Wale Adventure: amables y buenos, hacen tours privados por toda la isla y tienen también una vanilla farm que se puede visitar. Por transparencia: su web la hice yo.',
      },
    },
  ],
  'indonesia/raja-ampat': [
    {
      nome: 'Paparisa Homestay (Kri)',
      cosa: { it: 'Homestay sulla spiaggia', en: 'Beachfront homestay', es: 'Homestay en la playa' },
      fatto: true,
      testo: {
        it: "Il giusto mix tra comfort e local stay. I prezzi sono giustamente sopra la media degli altri homestay, ma è davvero bellissimo: spesso davanti alla spiaggia nuotano delfini, dugonghi e altro. Non ha un sito: si trova sui portali di prenotazione.",
        en: "The right mix of comfort and local stay. Prices are rightly above the average of other homestays, but it's truly beautiful: dolphins, dugongs and more often swim right off the beach. It has no website: you'll find it on booking platforms.",
        es: 'La mezcla justa entre comodidad y local stay. Los precios están, con razón, por encima de la media de los otros homestays, pero es precioso de verdad: a menudo delante de la playa nadan delfines, dugongos y más. No tiene web: se encuentra en las plataformas de reserva.',
      },
    },
    {
      nome: 'Tanjung Mefiyai Homestay (Fam, Reno)',
      cosa: { it: 'Homestay alle isole Fam', en: 'Homestay in the Fam Islands', es: 'Homestay en las islas Fam' },
      fatto: true,
      testo: {
        it: "Strutture molto semplici ma in un posto bellissimo. Reno è super gentile e disponibile, e si è preso cura di noi durante le gite e i trasporti (Piaynemo, Rufas, Fam Wall).",
        en: 'Very simple huts, but in a stunning spot. Reno is super kind and helpful, and he took care of us on the trips and transfers (Piaynemo, Rufas, Fam Wall).',
        es: 'Instalaciones muy sencillas pero en un lugar precioso. Reno es superamable y disponible, y nos cuidó durante las excursiones y los traslados (Piaynemo, Rufas, Fam Wall).',
      },
    },
    {
      nome: 'Soul Scuba Divers (Kri)',
      cosa: { it: 'Diving', en: 'Diving', es: 'Buceo' },
      url: 'https://www.soulscubadivers.com',
      fatto: true,
      testo: {
        it: 'Per le immersioni a Raja Ampat, sull\'isola di Kri.',
        en: 'For diving in Raja Ampat, on Kri island.',
        es: 'Para bucear en Raja Ampat, en la isla de Kri.',
      },
    },
  ],
  'indonesia/bali': [
    {
      nome: 'Pande Wirta',
      cosa: { it: 'Guida che parla italiano', en: 'Italian-speaking guide', es: 'Guía que habla italiano' },
      whatsapp: '+62 812-3994-4155',
      fatto: true,
      testo: {
        it: 'Se cercate una guida italiana: bravo e professionale.',
        en: 'If you want an Italian-speaking guide: good and professional.',
        es: 'Si buscáis un guía que hable italiano: bueno y profesional.',
      },
    },
    {
      nome: 'Hendra',
      cosa: { it: 'Surf a Kuta', en: 'Surfing in Kuta', es: 'Surf en Kuta' },
      whatsapp: '+62 853-3868-0667',
      fatto: true,
      testo: {
        it: 'Per fare surf a Kuta.',
        en: 'For surfing in Kuta.',
        es: 'Para hacer surf en Kuta.',
      },
    },
    {
      nome: 'Feby Yastika',
      cosa: { it: 'Noleggio motorino a Ubud', en: 'Scooter rental in Ubud', es: 'Alquiler de moto en Ubud' },
      whatsapp: '+62 822-4783-4453',
      fatto: true,
      testo: {
        it: 'Per noleggiare il motorino a Ubud.',
        en: 'To rent a scooter in Ubud.',
        es: 'Para alquilar la moto en Ubud.',
      },
    },
    {
      nome: 'Villa Jacques (Ubud)',
      cosa: { it: 'Dove abbiamo dormito', en: 'Where we stayed', es: 'Dónde dormimos' },
      fatto: true,
      testo: {
        it: 'A Ubud siamo stati a Villa Jacques, ed era bellissima. Si prenota sui portali di affitto delle ville.',
        en: 'In Ubud we stayed at Villa Jacques, and it was beautiful. You book it on villa rental platforms.',
        es: 'En Ubud estuvimos en Villa Jacques, y era preciosa. Se reserva en las plataformas de alquiler de villas.',
      },
    },
  ],
  'indonesia/sumatra': [
    {
      nome: 'Mora Rental (Medan)',
      cosa: { it: 'Noleggio motorini', en: 'Scooter rental', es: 'Alquiler de motos' },
      fatto: true,
      testo: {
        it: 'I motorini per andare verso la giungla li abbiamo noleggiati qui: molto gentili.',
        en: 'We rented the scooters to head to the jungle here: very kind people.',
        es: 'Aquí alquilamos las motos para ir hacia la selva: muy amables.',
      },
    },
    {
      nome: 'Sumatra Orangutan Explore (Bukit Lawang)',
      cosa: { it: 'Trekking nella giungla', en: 'Jungle trekking', es: 'Trekking en la selva' },
      url: 'https://www.sumatra-orangutan-explore.com',
      fatto: true,
      testo: {
        it: 'Per il trekking nella giungla: bravi, belli, simpatici e gentili.',
        en: 'For jungle trekking: skilled, great people, friendly and kind.',
        es: 'Para el trekking en la selva: buenos, majos, simpáticos y amables.',
      },
    },
  ],
  'indonesia/komodo': [
    {
      nome: 'Kanha Loka',
      cosa: { it: 'Liveaboard', en: 'Liveaboard', es: 'Liveaboard' },
      fatto: true,
      testo: {
        it: 'La consiglio per il liveaboard nel Parco di Komodo.',
        en: 'I recommend it for the liveaboard in Komodo National Park.',
        es: 'La recomiendo para el liveaboard en el Parque de Komodo.',
      },
    },
    {
      nome: 'Le Pirate Island',
      cosa: { it: 'Resort su un\'isola', en: 'Island resort', es: 'Resort en una isla' },
      url: 'https://lepirate.com',
      fatto: false,
      testo: {
        it: "Se volete qualcosa di più chic, da valutare: il gruppo Le Pirate ha posti molto belli (anche alle Gili e a Lombok). Un po' carucci secondo me, ma meritano.",
        en: 'If you want something more chic, worth considering: the Le Pirate group has very beautiful places (also in the Gilis and Lombok). A bit pricey in my opinion, but worth it.',
        es: 'Si queréis algo más chic, para valorar: el grupo Le Pirate tiene sitios muy bonitos (también en las Gili y en Lombok). Algo caros en mi opinión, pero merecen la pena.',
      },
    },
  ],
  'malesia/perhentian': [
    {
      nome: 'Angel Diver (Perhentian Kecil)',
      cosa: { it: 'Diving', en: 'Diving', es: 'Buceo' },
      url: 'https://www.angel-diver.com',
      fatto: true,
      testo: {
        it: "Per le immersioni alle Perhentian: molto bravi. Sugli alloggi invece occhio: quello dove sono stato io non lo consiglio, c'era un problema importante. Qui tutto si prenota con larghissimo anticipo, e chi arriva tardi si accontenta di quello che resta o paga tantissimo, spesso per posti molto spartani.",
        en: "For diving in the Perhentians: very good. Be careful with accommodation, though: I wouldn't recommend the place I stayed, there was a serious problem. Everything here gets booked very far ahead, and if you're late you take what's left or pay a lot, often for very basic places.",
        es: 'Para bucear en las Perhentian: muy buenos. Con el alojamiento, cuidado: donde estuve yo no lo recomiendo, había un problema importante. Aquí todo se reserva con muchísima antelación, y quien llega tarde se conforma con lo que queda o paga muchísimo, a menudo por sitios muy espartanos.',
      },
    },
    {
      nome: "Abdul's Chalet (Perhentian Besar)",
      cosa: { it: 'Chalet sulla spiaggia', en: 'Beach chalet', es: 'Chalet en la playa' },
      fatto: false,
      testo: {
        it: "Ci saremmo voluti andare: ci siamo passati ed era incredibile. Ma a febbraio non c'era già più posto per agosto, quindi prenotate molto presto.",
        en: "We wanted to stay there: we walked past and it was incredible. But in February it was already fully booked for August, so book very early.",
        es: 'Queríamos ir: pasamos por allí y era increíble. Pero en febrero ya no quedaba sitio para agosto, así que reservad muy pronto.',
      },
    },
  ],
  'malesia/taman-negara': [
    {
      nome: 'Tebing Guest House (Kuala Tahan)',
      cosa: { it: 'Guesthouse e tour', en: 'Guesthouse and tours', es: 'Guesthouse y tours' },
      fatto: true,
      testo: {
        it: "Abbiamo dormito qui e fatto con loro il tour di una notte nella grotta: bellissimo ma non per tutti. Sono professionali e alla mano. Se c'è posto e budget, vale la pena dormire anche al Mutiara Taman Negara, l'unico resort dentro il parco, proprio dove si fanno i biglietti e la registrazione.",
        en: "We stayed here and did their one-night cave tour with them: beautiful but not for everyone. They're professional and down to earth. If there's room and budget, it's also worth staying at Mutiara Taman Negara, the only resort inside the park, right where you buy tickets and register.",
        es: 'Dormimos aquí e hicimos con ellos el tour de una noche en la cueva: precioso pero no para todos. Son profesionales y cercanos. Si hay sitio y presupuesto, merece la pena dormir también en el Mutiara Taman Negara, el único resort dentro del parque, justo donde se compran las entradas y se hace el registro.',
      },
    },
  ],
  'maldive/rasdhoo': [
    {
      nome: "Reef Rangers Ukulhas",
      cosa: { it: "Diving e brevetti", en: "Diving and courses", es: "Buceo y cursos" },
      fatto: true,
      testo: {
        it: "A Ukulhas abbiamo fatto immersioni e brevetti con loro: bravissimi, consigliati.",
        en: "In Ukulhas we dived and got our certifications with them: excellent, recommended.",
        es: "En Ukulhas buceamos y sacamos los títulos con ellos: buenísimos, recomendados.",
      },
    },
  ],
  'maldive/fuvahmulah': [
    {
      nome: "Fuvahmulah Dive",
      cosa: { it: "Diving", en: "Diving", es: "Buceo" },
      url: 'https://fuvahmulahdive.com',
      fatto: true,
      testo: {
        it: "Per le immersioni a Fuvahmulah. Non è un posto per principianti: serve esperienza e spesso si è nel blu. Se ti piacciono i grandi pelagici è incredibile, soprattutto per lo squalo tigre.",
        en: "For diving in Fuvahmulah. Not a place for beginners: you need experience and you're often out in the blue. If you love big pelagics it's incredible, especially for tiger sharks.",
        es: "Para bucear en Fuvahmulah. No es un sitio para principiantes: hace falta experiencia y a menudo se está en el azul. Si te gustan los grandes pelágicos es increíble, sobre todo por el tiburón tigre.",
      },
    },
  ],
  'messico/cancun': [
    {
      nome: "Martin · Mexico Grand Tours",
      cosa: { it: "Ingressi e tour", en: "Tickets and tours", es: "Entradas y tours" },
      url: 'https://mexico-grand.com',
      fatto: true,
      testo: {
        it: "Per gli ingressi al Coco Bongo provate a sentire Martin: ha un po' di tutto.",
        en: "For Coco Bongo tickets, try getting in touch with Martin: he has a bit of everything.",
        es: "Para las entradas del Coco Bongo, probad a contactar con Martin: tiene un poco de todo.",
      },
    },
  ],
  'messico/valladolid': [
    {
      nome: "Alejandro",
      cosa: { it: "Guida a Chichén Itzá", en: "Guide at Chichén Itzá", es: "Guía en Chichén Itzá" },
      whatsapp: '+52 985 593 5994',
      fatto: true,
      testo: {
        it: "Per Chichén Itzá assolutamente consigliato. Parla spagnolo e inglese, è una guida preparatissima, nato e cresciuto a 20 minuti da Chichén Itzá, e in più è appassionato di manga.",
        en: "Highly recommended for Chichén Itzá. He speaks Spanish and English, he is an extremely knowledgeable guide, born and raised 20 minutes from Chichén Itzá, and on top of that he loves manga.",
        es: "Para Chichén Itzá, totalmente recomendado. Habla español e inglés, es un guía preparadísimo, nacido y criado a 20 minutos de Chichén Itzá, y además es un apasionado del manga.",
      },
    },
  ],
  'messico/tulum': [
    {
      nome: "Cenote Dos Ojos",
      cosa: { it: "Il cenote che consiglio", en: "The cenote I recommend", es: "El cenote que recomiendo" },
      fatto: true,
      testo: {
        it: "A Tulum sconsiglio i cenote più turistici e propongo Dos Ojos. Accanto ce n'è un altro bellissimo di cui ho dimenticato il nome.",
        en: "Around Tulum I'd skip the most touristy cenotes and suggest Dos Ojos. Next to it there's another beautiful one whose name I've forgotten.",
        es: "En Tulum desaconsejo los cenotes más turísticos y propongo Dos Ojos. Al lado hay otro precioso cuyo nombre he olvidado.",
      },
    },
  ],
  'belize/caye-caulker': [
    {
      nome: "Reef Friendly Tours (Caye Caulker)",
      cosa: { it: "Snorkeling e tour in barca", en: "Snorkeling and boat tours", es: "Snorkel y tours en barco" },
      whatsapp: '+501 624-2862',
      fatto: true,
      testo: {
        it: "A Caye Caulker ero andato con loro. In generale in Belize, per l'influenza americana, i prezzi sono alti, soprattutto per escursioni e attività: lo stesso vale per la Riviera Maya messicana e per il Costa Rica.",
        en: "In Caye Caulker I went with them. In general, because of the American influence, prices in Belize are high, especially for excursions and activities: the same goes for Mexico's Riviera Maya and for Costa Rica.",
        es: "En Caye Caulker fui con ellos. En general, en Belice, por la influencia estadounidense, los precios son altos, sobre todo en excursiones y actividades: lo mismo pasa en la Riviera Maya mexicana y en Costa Rica.",
      },
    },
    {
      nome: "Messico-Belize: meglio via mare",
      cosa: { it: "Il passaggio di frontiera", en: "The border crossing", es: "El paso de frontera" },
      fatto: true,
      testo: {
        it: "La combinata Messico-Belize l'ho fatta due volte, una via terra e una via mare, e tutte e due le volte si arriva fino a Chetumal. Da lì consiglio il taxi boat: è caro, va prenotato in anticipo e bisogna presentarsi almeno un'ora, un'ora e mezza prima per il controllo dei passaporti. L'alternativa è la dogana via terra a Santa Elena: si può fare, ma è complicata, soprattutto con un'auto a noleggio, ed è piena di scammer che ti fanno pagare tanto per niente.",
        en: "I've done the Mexico-Belize combo twice, once by land and once by sea, and both times you get as far as Chetumal. From there I recommend the water taxi: it's expensive, you need to book ahead and show up at least an hour to an hour and a half early for passport control. The alternative is the land border at Santa Elena: it's doable, but complicated, especially with a rental car, and it's full of scammers who charge you a lot for nothing.",
        es: "La combinación México-Belice la hice dos veces, una por tierra y otra por mar, y las dos veces se llega hasta Chetumal. Desde allí recomiendo el taxi boat: es caro, hay que reservarlo con antelación y presentarse al menos una hora, una hora y media antes por el control de pasaportes. La alternativa es la aduana por tierra en Santa Elena: se puede hacer, pero es complicada, sobre todo con un coche de alquiler, y está llena de estafadores que te cobran mucho por nada.",
      },
    },
  ],
  'tanzania/serengeti': [
    {
      nome: 'Suricata Safaris',
      cosa: { it: 'Safari nel nord della Tanzania', en: 'Safaris in northern Tanzania', es: 'Safaris en el norte de Tanzania' },
      url: 'https://suricatasafaris.com',
      fatto: true,
      testo: {
        it: "Ho fatto il safari con Suricata Safaris: sono top, hanno accommodation per tutti i gusti e anche le esperienze in tenda, che consiglio. A me piace viaggiare scomodo e a contatto con la natura, anche se ogni tanto qualche 5 stelle va bene.",
        en: "I did my safari with Suricata Safaris: they're top, they have accommodation for every taste and also the tent experiences, which I recommend. I like traveling rough and close to nature, even if a 5-star stay now and then is fine too.",
        es: "Hice el safari con Suricata Safaris: son top, tienen alojamiento para todos los gustos y también las experiencias en tienda, que recomiendo. A mí me gusta viajar incómodo y en contacto con la naturaleza, aunque de vez en cuando algún 5 estrellas viene bien.",
      },
    },
  ],
}
