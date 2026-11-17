import type { GuidaMeraviglia } from '../index'

export const guida: GuidaMeraviglia = {
  destinazione: 'italia/roma',
  prezzi:
    "Colosseum, Roman Forum and Palatine (24 hours): €18, with the first and second levels of the Colosseum, the Forum and the Palatine, but not the arena or the underground. Only Arena: €18, with 20 minutes on the arena floor plus the Forum and the Palatine. Full Experience (2 consecutive days): €24 with the arena, with the underground and arena (€32 with an educational tour) or with the attic; €32 with the Passage of Commodus. Forum Pass SUPER: €18, with the Forum, the Palatine and the Imperial Fora but no Colosseum. Reduced fare €2 for EU citizens from 18 until their 25th birthday. Free entry on the first Sunday of the month, 25 April, 2 June and 4 November.",
  luoghi: [
    {
      nome: 'Colosseum: first and second levels, attic',
      testo:
        "The standard route covers the first and second levels, with the panoramic terraces over the arena and the Arch of Constantine, and the Colosseum Museum. Higher up you can only go with the Full Experience Attic: third level, intermediate gallery and attic, with the panoramic lift, from where the true height of the stands becomes clear.",
      come:
        "Metro B, Colosseo stop, right opposite the entrance. Entry only in the booked time slot, after security checks, with the ticket on your smartphone and an ID document.",
      quando:
        "In the first slot of the morning or in the last hours, when the groups thin out. In summer the stands have almost no shade.",
      tempo: 'Maximum 75 minutes with the standard ticket, 90 with the Full Experience',
      costo: '€18 for the 24-hour standard ticket; €24 for the Full Experience Attic (2026)',
      orari:
        "Daily from 8:30. From 25 October 2026 to 28 February 2027 it closes at 16:30, last entry 15:30; in summer it closes later. Closed on 25 December and 1 January.",
      url: 'https://colosseo.it/biglietti/colosseo-foro-romano-palatino/',
      lat: 41.8903,
      lng: 12.4922,
    },
    {
      nome: 'Arena and underground (hypogeum)',
      testo:
        "Beneath the arena floor ran a network of corridors, cages and lifts that made animals and gladiators appear out of nowhere. Today part of the floor has been rebuilt: you walk on it looking up at the stands from below, as the fighters saw them, and then go down into the hypogeum.",
      come:
        "Only with the Full Experience Underground and Arena (or with Only Arena and Full Experience Arena for the floor alone). The underground is open subject to availability and places are few.",
      quando: 'Book as soon as sales open, 30 days ahead: these are the slots that sell out first.',
      tempo: '1h30 including the rest of the Colosseum; 20 minutes with Only Arena',
      costo: '€24, €32 with an educational tour; Only Arena €18 (2026)',
      orari: 'Entry only at the booked time, within Colosseum opening hours.',
      url: 'https://colosseo.it/en/tickets/full-experience-underground-arena/',
      lat: 41.8903,
      lng: 12.4922,
      consiglio: "It is the part of the monument that changes the visit the most: if you can pick only one extra, pick this one.",
    },
    {
      nome: 'Arch of Constantine',
      testo:
        "The largest triumphal arch in Rome, dedicated in AD 315 for Constantine's victory over Maxentius. Many of its reliefs were taken from older monuments of Trajan, Hadrian and Marcus Aurelius, and you can tell them apart by their different style.",
      come: 'It stands between the Colosseum and the start of Via di San Gregorio; you see it from outside, behind a fence.',
      quando: 'Early in the morning or at sunset, when low light rakes across the reliefs.',
      tempo: '15 minutes',
      costo: 'Free, seen from the square',
      orari: 'Visible at any time',
      lat: 41.8897,
      lng: 12.4908,
    },
    {
      nome: 'Roman Forum',
      testo:
        "The political, religious and commercial heart of ancient Rome: the Via Sacra, the Curia where the Senate met, the temples of Saturn and of the Dioscuri, the House of the Vestals and the church of Santa Maria Antiqua with its frescoes. Without a key it looks like a field of stones; with a map or an audio guide it starts to make sense.",
      come:
        "Included in the Colosseum ticket and in the Forum Pass SUPER. Entrances at the Arch of Titus, Largo della Salara Vecchia (Via dei Fori Imperiali) and Via del Tulliano.",
      quando: "In summer, in the morning: the Forum has very little shade. With the 24-hour ticket you can visit it within 24 hours before or after the Colosseum; with the Full Experience, the day before or after too.",
      tempo: '1h30-2 hours',
      costo: 'Included in the €18 tickets (2026)',
      orari:
        "From 25 October 2026 to 28 February 2027, 9:00-16:30, last entry 15:30; longer hours in summer. Closed on 25 December and 1 January.",
      url: 'https://colosseo.it/area/foro-romano/',
      lat: 41.8922,
      lng: 12.4852,
    },
    {
      nome: 'Palatine Hill',
      testo:
        "The hill where, according to tradition, Rome was born and where the emperors built their palaces, from the Domus Augustana to the Domus Tiberiana. It is green, high and less crowded than the Forum, and from its terraces you look down on the Forum on one side and the Circus Maximus on the other.",
      come:
        "Through the same entrance as the Forum, climbing up from the Arch of Titus, or from the Via di San Gregorio gate. Inside are the House of Augustus (closed on Mondays), the Aula Isiaca and the Palatine Museum.",
      quando: 'In the afternoon, when the light falls on the Forum; many skip it out of tiredness, so save some energy.',
      tempo: '1-2 hours',
      costo: 'Included in the €18 tickets (2026)',
      orari: 'Same hours as the Roman Forum.',
      url: 'https://colosseo.it/area/palatino/',
      lat: 41.8883,
      lng: 12.4869,
      consiglio: 'The House of Livia is closed for restoration; the House of Augustus is one of the SUPER sites with limited capacity.',
    },
    {
      nome: "Imperial Fora and Trajan's Markets",
      testo:
        "After the Roman Forum the emperors built new squares: the Fora of Caesar, Augustus, Nerva and Trajan, now cut through by Via dei Fori Imperiali. Above Trajan's Forum rise the Markets, a multi-storey brick complex of shops and offices that houses the Museum of the Imperial Fora.",
      come:
        "From the street you can see them for free. You go down into the Fora with the Forum Pass SUPER; Trajan's Markets have a separate ticket, with the entrance on Via Quattro Novembre.",
      quando: 'At sunset the light on the brick of the Markets is at its best.',
      tempo: '1-2 hours',
      costo: "Forum Pass SUPER €18; Trajan's Markets €15 plus a €1 online booking fee (2026)",
      orari: "Trajan's Markets daily 9:30-19:30, last entry one hour before; closed on 1 May and 25 December.",
      url: 'https://colosseo.it/biglietti/forum-pass-super/',
      lat: 41.8944,
      lng: 12.4856,
    },
    {
      nome: 'Domus Aurea and Oppian Hill',
      testo:
        "Nero's palace, buried after his death beneath the Baths of Trajan and rediscovered in the Renaissance, when artists let themselves down from above to copy its decorations. It is visited inside a permanent excavation site, with the Octagonal Room and a virtual reality reconstruction. Above it is the Colle Oppio park, with the remains of the baths and a view of the Colosseum.",
      come:
        "Entrance from Via della Domus Aurea, a few minutes' walk from the Colosseum. Separate ticket, by booking only, in slots every 15 minutes.",
      quando: 'Only on Friday, Saturday and Sunday. Closed on the first Sunday of the month and on some days of the Park calendar.',
      costo: '€26 with educational route and virtual reality; €18 (reduced €2) for the unguided slots at 12:00 and 17:00 (2026)',
      orari: 'Friday-Sunday 9:00-16:30, last entry 15:30 (hours until 28 February 2027).',
      url: 'https://colosseo.it/biglietti/domus-aurea/',
      lat: 41.8914,
      lng: 12.4953,
      consiglio: 'Inside it is cold all year round: bring a sweater even in summer.',
    },
    {
      nome: 'Circus Maximus',
      testo:
        "The largest entertainment building of antiquity, where chariot races were held. Today it is a long meadow shaped like a track, beneath the ruins of the imperial palaces on the Palatine, which look down on it.",
      come: 'Metro B, Circo Massimo stop, or on foot from the Colosseum along Via di San Gregorio in about 15 minutes.',
      quando: 'At sunset, with the Palatine lit from the side.',
      tempo: '20-30 minutes',
      costo: 'The meadow is free to enter',
      lat: 41.8859,
      lng: 12.4857,
      consiglio: 'It pairs well with the Baths of Caracalla and the Aventine with the Orange Garden.',
    },
    {
      nome: 'Capitoline Museums',
      testo:
        "The oldest public museum in the world, on the Campidoglio square designed by Michelangelo. It holds the She-Wolf, the original equestrian statue of Marcus Aurelius and the portraits of the emperors; from the Tabularium gallery you see the whole Roman Forum from above.",
      come: 'On foot from the Forum, climbing up to the Capitoline, or from Piazza Venezia via the Cordonata. Tickets online or at the ticket office.',
      quando: 'Late afternoon, after the Forum and the Palatine: at sunset the Tabularium looks over the Forum in the best light.',
      tempo: '2-3 hours',
      costo: '€15 for non-residents, €16.50 with the current exhibition (2026)',
      orari: 'Daily 9:30-19:30, last entry 18:30. Closed on 1 May and 25 December.',
      url: 'https://www.museicapitolini.org/',
      lat: 41.8931,
      lng: 12.4828,
    },
    {
      nome: 'Domus Romane at Palazzo Valentini',
      testo:
        "Beneath a provincial government building next to Trajan's Column, the mosaic floors and walls of two aristocratic houses of the imperial age have come to light. Projections and lighting rebuild the rooms, private baths and furnishings: it is the most immediate way to understand how wealthy Romans lived.",
      come: 'Via Quattro Novembre, a few steps from Piazza Venezia. Group visit at a fixed time, to be booked.',
      quando: 'Book at least the day before. Arrive at the ticket office 15 minutes before your slot.',
      tempo: "1 hour; 1h30 with Trajan's Column",
      costo: '€15 plus €1.50 booking fee (2026)',
      orari: 'Closed on Tuesdays. Until 28 February 2027, 10:00-18:00, last tour 16:30.',
      url: 'https://www.palazzovalentini.it/',
      lat: 41.8967,
      lng: 12.4839,
    },
    {
      nome: 'Ludus Magnus',
      testo:
        "The largest gladiator barracks and training school in Rome, built under Domitian and linked to the Colosseum by an underground passage. Part of the small elliptical arena where they trained is still visible, with the bases of the rooms around it.",
      come: 'Between Via Labicana and Via di San Giovanni in Laterano, a few steps from the Colosseum: you look down on it from the street.',
      quando: 'On the way to San Clemente.',
      tempo: '10 minutes',
      costo: 'Free, visible from the street',
      lat: 41.8901,
      lng: 12.495,
    },
    {
      nome: 'Basilica of San Clemente',
      testo:
        "A 12th-century basilica built over a 4th-century church, itself built over 1st-century Roman buildings with a Mithraeum. You go down three levels and a thousand years, until you hear the water of a Roman conduit that still runs.",
      come: 'Five minutes on foot from the Colosseum along Via Labicana. The upper basilica is free; the excavations need a ticket and compulsory online booking.',
      quando: "In the afternoon, after the Colosseum. Down below it is cool even in summer.",
      tempo: '1 hour',
      costo: 'Excavations €10, reduced €7 for students up to 21 (2026)',
      orari: 'Monday-Saturday 9:00-12:30 and 14:00-18:00, Sundays and holidays 12:00-18:00; last entry half an hour before closing.',
      url: 'https://www.basilicasanclemente.com/',
      lat: 41.8894,
      lng: 12.4975,
    },
  ],
  programmi: [
    {
      titolo: 'Half day',
      tappe: [
        'Colosseum in the first morning slot with the 24-hour ticket (first and second levels, museum).',
        'Arch of Constantine on the way out, then into the Roman Forum from the Arch of Titus along the Via Sacra.',
        'Up the Palatine to look down on the Forum and, on the other side, the Circus Maximus.',
        'Exit by Via di San Gregorio and lunch in Monti or on the Celio, away from the places facing the Colosseum.',
      ],
    },
    {
      titolo: '1 day',
      tappe: [
        'Morning: Full Experience Underground and Arena in the first slot, then the levels and terraces.',
        'Arch of Constantine and Ludus Magnus, lunch in Monti.',
        'Afternoon: Roman Forum and Palatine with the same ticket.',
        'Sunset at the Capitoline Museums, with the view of the Forum from the Tabularium, and dinner in Monti.',
      ],
    },
    {
      titolo: '2 days',
      tappe: [
        'Day 1: Colosseum with arena and underground in the morning, Ludus Magnus and San Clemente in the afternoon, evening in Monti. The Domus Aurea, if it is a Friday, Saturday or Sunday.',
        "Day 2: Roman Forum and Palatine in the morning with the same Full Experience (valid for two consecutive days), Circus Maximus, then the Imperial Fora and Trajan's Markets, the Domus Romane at Palazzo Valentini and the Capitoline Museums at sunset.",
      ],
    },
  ],
  biglietti: [
    {
      tipo: 'Colosseum, Roman Forum, Palatine (24 hours)',
      prezzo: '€18 (reduced €2)',
      include: 'First and second levels of the Colosseum with the terraces, Colosseum Museum, Roman Forum and Palatine, current exhibitions. One entry to the Colosseum at the booked time, one to the Forum and Palatine within 24 hours. Maximum 75 minutes inside the Colosseum.',
      dove: 'ticketing.colosseo.it or ticket office',
    },
    {
      tipo: 'Only Arena (24 hours)',
      prezzo: '€18 (reduced €2)',
      include: '20 minutes on the arena floor, entry and exit on the Sperone Stern side, plus the Roman Forum, Palatine and SUPER sites. Does not include the Colosseum levels.',
      dove: 'ticketing.colosseo.it',
    },
    {
      tipo: 'Full Experience Underground and Arena (2 days)',
      prezzo: '€24 (reduced €2); €32 with an educational tour',
      include: 'Arena and underground (when accessible), Colosseum Museum, Roman Forum, Palatine and SUPER sites. Maximum 90 minutes inside the Colosseum.',
      dove: 'ticketing.colosseo.it, on sale from 30 days ahead',
    },
    {
      tipo: 'Full Experience Arena (2 days)',
      prezzo: '€24 (reduced €2)',
      include: 'Arena and Colosseum Museum, Roman Forum, Palatine and SUPER sites. Maximum 90 minutes inside the Colosseum.',
      dove: 'ticketing.colosseo.it',
    },
    {
      tipo: 'Full Experience Attic (2 days)',
      prezzo: '€24 (reduced €2)',
      include: 'First, second and third levels, intermediate gallery, attic with panoramic lift, Roman Forum, Palatine and SUPER sites.',
      dove: 'ticketing.colosseo.it',
    },
    {
      tipo: 'Full Experience Passage of Commodus (2 days)',
      prezzo: '€32 (reduced €2)',
      include: "The underground passage reserved for the emperor, first and second levels of the Colosseum, Roman Forum, Palatine and SUPER sites.",
      dove: 'ticketing.colosseo.it',
    },
    {
      tipo: 'Forum Pass SUPER',
      prezzo: '€18 (reduced €2)',
      include: 'One entry on one day to the Roman Forum, Palatine, Imperial Fora and SUPER sites. No Colosseum. Bought online, it can be used within 30 days; not valid on the first Sunday of the month.',
      dove: 'ticketing.colosseo.it or ticket office',
    },
    {
      tipo: 'Domus Aurea',
      prezzo: '€26 with educational tour and virtual reality; €18 (reduced €2) for unguided slots',
      include: 'Visits in slots on Friday, Saturday and Sunday; the unguided slots are at 12:00 and 17:00.',
      dove: 'ticketing.colosseo.it',
    },
    {
      tipo: 'A Night at the Colosseum (summer evening visits)',
      prezzo: '€50 (reduced €28)',
      include: 'Guided tour of about an hour with the arena and underground, on Tuesday and Thursday evenings from 20:00 to 23:00 (2026 edition: 7 July to 29 September). Groups of up to 25 people; tickets on sale 7 days ahead, not changeable.',
      dove: 'ticketing.colosseo.it',
    },
    {
      tipo: 'First Sunday of the month and free days',
      prezzo: 'Free',
      include: 'First Sunday of the month, 25 April, 2 June and 4 November. On the first Sunday there is no booking: individual tickets are collected on the day at the ticket offices in Piazza del Colosseo and Largo della Salara Vecchia, while they last. No arena, underground or upper levels; Domus Aurea closed.',
      dove: 'Ticket office, first come first served',
    },
    {
      tipo: 'Rules for all tickets',
      prezzo: 'Named tickets',
      include: "Every ticket carries the visitor's name: show an ID document at the entrance. For visits from 9 May 2026 the name can be changed only once, by midnight on the seventh day before, and only for an obvious typing error, a wrong category or serious documented reasons. No need to print: the ticket on your smartphone is enough.",
      dove: 'Change form on the official website',
    },
  ],
  mesi: [
    { voto: 4, folla: 'bassa', nota: 'After the Jubilee closed on 6 January 2026, this is the quietest month. Closed on 1 January; short days, the Park closes at 16:30.' },
    { voto: 4, folla: 'bassa', nota: 'Cool and few people, ideal for the Forum and Palatine without the heat. Last month of winter hours.' },
    { voto: 4, folla: 'media', nota: 'Mild weather and longer hours. In 2027 Easter falls on 28 March: Holy Week brings many pilgrims and groups.' },
    { voto: 3, folla: 'alta', nota: 'The best weather, but school trips and long weekends arrive; on 25 April entry is free and the queues are very long.' },
    { voto: 3, folla: 'alta', nota: 'Long days and beautiful light, but morning slots and the underground sell out weeks ahead.' },
    { voto: 3, folla: 'alta', nota: 'The heat begins. 2 June is free and packed; go for the 8:30 slots or the last ones of the afternoon.' },
    { voto: 2, folla: 'alta', nota: 'Strong heat and very little shade between the Colosseum and the Forum. On the plus side, there are evening visits on Tuesdays and Thursdays.' },
    { voto: 2, folla: 'alta', nota: 'The hottest month; around 15 August Romans leave the city but tourists do not. Water from the nasoni fountains and visits at dawn or in the evening.' },
    { voto: 4, folla: 'alta', nota: 'The heat eases and crowds stay high until the end of the month. Last evening visits of the season.' },
    { voto: 5, folla: 'media', nota: 'Pleasant temperatures and soft light on the Forum. From 25 October winter hours return, closing at 16:30.' },
    { voto: 5, folla: 'media', nota: 'One of the best months: fewer groups and low light on the Forum. 4 November is free.' },
    { voto: 4, folla: 'media', nota: 'Quiet until mid-month, then the holidays fill the city, especially around 8 December and Christmas. Closed on 25 December.' },
  ],
  zone: [
    {
      nome: 'Monti',
      perChi: 'those who want to walk to the Colosseum and go out in the evening',
      testo:
        "The district behind the Imperial Fora: lanes, small shops and bars, with metro B at Cavour. A bit noisy at night, with few large hotels and many apartments.",
      fascia: '€130-250',
    },
    {
      nome: 'Celio',
      perChi: 'those looking for quiet a stone\'s throw from the Colosseum',
      testo:
        "The green hill south of the Colosseum, with Via di San Giovanni in Laterano, San Clemente and Santi Quattro Coronati. Residential and calm, with few places to stay and a few neighbourhood trattorias.",
    },
    {
      nome: 'Esquilino',
      perChi: 'those who want to spend less and be close to the trains',
      testo:
        "Between Termini and Piazza Vittorio, 15-20 minutes on foot from the Colosseum or one metro stop away. A multi-ethnic area with a covered market and lower prices; in the evening, the streets right around Termini are not pleasant.",
    },
  ],
  gite: [
    {
      nome: 'Ostia Antica',
      distanza: '25 km, about 40 minutes',
      come: 'Roma-Lido train from Porta San Paolo station (metro B Piramide) to Ostia Antica, with a city transport ticket.',
      testo:
        "The port of ancient Rome: streets, baths, multi-storey insulae, the theatre and the shops with the mosaics of the guilds. Less dramatic than Pompeii but much easier to walk, and almost empty. The excavations are closed on Mondays.",
      link: '/viaggi/roma-4-giorni',
    },
    {
      nome: 'Appian Way',
      distanza: 'a few km south of the Colosseum',
      come: 'Bus 118 from the Colosseum or the Circus Maximus; bikes for hire at the Park information points.',
      testo:
        "The queen of Roman roads, with its original paving stones among pines, tombs, the Mausoleum of Caecilia Metella and the catacombs. On Sundays it is closed to traffic, the right day to walk or cycle it.",
      link: '/esperienze/italia/appia-antica',
    },
    {
      nome: "Tivoli: Hadrian's Villa and Villa d'Este",
      distanza: '30 km, about 1 hour',
      come: "Regional train from Tiburtina or Cotral bus from Ponte Mammolo (metro B); a local bus links the two villas.",
      testo:
        "Emperor Hadrian's residence, as large as a town, and the Renaissance fountains of Villa d'Este: two UNESCO sites that complete the story of imperial architecture begun at the Colosseum.",
    },
  ],
  faq: [
    {
      domanda: 'Do you need to book the Colosseum?',
      risposta:
        "In practice, yes: entry is always at a fixed time and the best slots sell out weeks ahead. Sales open 30 days before on ticketing.colosseo.it; there is an on-site ticket office, but in high season it may have no places left for the same day.",
    },
    {
      domanda: 'Which ticket should you choose?',
      risposta:
        "If you are short on time, the €18 24-hour ticket is fine. If you really want to see the Colosseum from inside, take the €24 Full Experience Underground and Arena, which is valid for two days and lets you see the Forum and Palatine calmly the next day.",
    },
    {
      domanda: 'How long can you stay inside the Colosseum?',
      risposta:
        "75 minutes with the standard ticket and 90 with the Full Experience; then you have to leave. In the Forum and on the Palatine there is no limit other than closing time.",
    },
    {
      domanda: 'Is the ticket in your name? Can you change the name?',
      risposta:
        "Yes, all tickets are named and you show an ID at the entrance. The name can be changed only once, up to seven days before the visit, and only for obvious errors or serious documented reasons: tickets bought from resellers in someone else's name do not get through the check.",
    },
    {
      domanda: 'How does the free first Sunday of the month work?',
      risposta:
        "There is no booking: free tickets are collected in person at the ticket offices in Piazza del Colosseo and Largo della Salara Vecchia, while they last. The arena, underground and upper levels stay closed, and the queues are the longest of the month.",
    },
    {
      domanda: 'Can you visit the Colosseum at night?',
      risposta:
        "Only in summer, with \"A Night at the Colosseum\": in 2026 from 7 July to 29 September, on Tuesdays and Thursdays from 20:00 to 23:00, guided, with the arena and underground, for €50. Tickets go on sale 7 days ahead and sell out quickly.",
    },
  ],
  galleria: [
    {
      src: '/images/meraviglie/colosseo/colosseo-interno-panoramica.jpg',
      alt: 'The inside of the Colosseum on a sunny day: the ruined stands, the partly rebuilt arena floor and the exposed corridors of the underground',
    },
    {
      src: '/images/meraviglie/colosseo/colosseo-ipogei-sotterranei.jpg',
      alt: 'The walls of the Colosseum underground seen from above, with the rebuilt arena walkway and visitors on the terraces',
    },
    {
      src: '/images/meraviglie/colosseo/colosseo-arco-costantino-dal-palatino.jpg',
      alt: 'The Colosseum and the Arch of Constantine seen from the Palatine, with the square full of visitors and a blue sky',
    },
    {
      src: '/images/meraviglie/colosseo/foro-romano-dal-vittoriano.jpg',
      alt: 'Umbrella pines, the dome of Santi Luca e Martina and the edge of the Roman Forum seen from the terraces of the Vittoriano',
    },
    {
      src: '/images/meraviglie/colosseo/palatino-dal-circo-massimo.jpg',
      alt: 'The brick arches of the imperial palaces on the Palatine seen from the Circus Maximus',
    },
  ],
}
