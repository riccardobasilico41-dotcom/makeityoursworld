import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "India: il Rajasthan in 10 giorni, da
// Delhi al Taj Mahal fino ai laghi di Udaipur". Il testo narrativo resta nel
// markdown (src/content/viaggi/76-india-rajasthan-10-giorni.md). `titoloGiorno`
// deve combaciare esattamente con le intestazioni "### Giorno N — ..." del
// markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.
//
// Guida non vissuta in prima persona: nessun campo di esperienza personale,
// pernottamenti tutti 'consigliato' (zone suggerite, non hotel usati).
// `immagine` omesso di proposito: le foto dei giorni si recuperano dopo.

export const indiaRajasthan10GiorniMeta: TripMeta = {
  tripSlug: 'india-rajasthan-10-giorni',
  paeseSlug: 'india',
  ritmo:
    'Sostenuto ma sostenibile: cinque città in dieci giorni, con almeno due notti a Delhi, Jaipur e Jodhpur e due trasferimenti lunghi in auto (Agra-Jaipur, Jodhpur-Udaipur) spezzati da tappe lungo la strada. Sveglie presto quasi ogni giorno, per vedere forti e Taj Mahal prima del caldo e della folla.',
  trasporti:
    'In autonomia: treni veloci Delhi-Agra (Gatimaan Express o Vande Bharat) e Jaipur-Jodhpur prenotati su IRCTC, auto con autista per Agra-Jaipur e Jodhpur-Udaipur, volo interno Udaipur-Delhi per il rientro; in città metro a Delhi, Uber, Ola e tuk-tuk.',
  stile: ['cultura', 'forti e palazzi', 'treni', 'prima volta in India'],
  adattoA: [
    'chi va in India per la prima volta e vuole un itinerario organizzabile da soli senza tour di gruppo',
    'chi vuole il Taj Mahal all\'alba e i grandi forti del Rajasthan con il tempo di vederli bene',
    'chi ha dieci giorni e preferisce due notti per città a un giro che tocca tutto',
    'chi accetta l\'impatto forte di Delhi in cambio di una seconda metà più tranquilla tra Jodhpur e Udaipur',
  ],
  puntiForti: [
    'Il Taj Mahal all\'apertura dei cancelli, dopo averlo visto al tramonto da Mehtab Bagh la sera prima',
    'Il Forte di Mehrangarh sopra la città blu di Jodhpur, con l\'audioguida inclusa nel biglietto',
    'Il tempio giainista di Ranakpur con le sue 1.444 colonne scolpite, come tappa del trasferimento verso Udaipur',
    'Il tramonto sul lago Pichola a Udaipur, con il City Palace illuminato sulla riva',
    'Il pozzo a gradini di Chand Baori ad Abhaneri e Fatehpur Sikri lungo la strada da Agra a Jaipur',
  ],
  criticita: [
    'Il Taj Mahal è chiuso il venerdì: il giorno di Agra va incastrato nel calendario prima di prenotare treni e hotel',
    'Le truffe sono il fastidio principale: hotel «chiuso», finti uffici del turismo a Delhi, gemme di Jaipur, negozi con commissione. Tutte evitabili sapendolo',
    'Dicembre e gennaio portano nebbia al mattino tra Delhi e Agra, con ritardi dei treni e il Taj a volte invisibile all\'alba',
    'Jaisalmer, il deserto del Thar e Pushkar restano fuori per mancanza di tempo: sono nelle varianti',
    'Gli ingressi per gli stranieri costano molto più che per gli indiani, e dal 2026 il Rajasthan li ha raddoppiati: 9.000-11.000 rupie a testa per i monumenti del viaggio',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito:
      'itinerario pensato per viaggiare in autonomia, in coppia o in piccolo gruppo, con treni, autista per i trasferimenti e un volo interno',
    treEsperienzePiuBelle:
      'Il Taj Mahal all\'alba, il Forte di Mehrangarh sopra la città blu, il tramonto sul lago Pichola a Udaipur',
    aChiLoConsiglio: 'a chi va in India per la prima volta e ha dieci giorni tra ottobre e marzo',
  },
  tappeMappa: [
    { nome: 'Delhi', destinazioneSlug: 'delhi' },
    { nome: 'Agra e il Taj Mahal', destinazioneSlug: 'agra' },
    { nome: 'Jaipur', destinazioneSlug: 'jaipur' },
    { nome: 'Jodhpur', destinazioneSlug: 'jodhpur' },
    { nome: 'Ranakpur' },
    { nome: 'Udaipur', destinazioneSlug: 'udaipur' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Delhi e la Vecchia Delhi', tratta: 'Aeroporto Indira Gandhi → hotel → Vecchia Delhi in metro', pernottamento: 'Delhi, Karol Bagh, Connaught Place o South Delhi', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Cyclo-risciò a Chandni Chowk 300-500 rupie a giro', destinazioneSlug: 'delhi', immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-01-delhi.jpg', imageAlt: 'La Jama Masjid di Delhi, la grande moschea di arenaria rossa e marmo bianco con i minareti e le cupole, vista dal cortile' },
    { titoloGiorno: 'Giorno 2 — Delhi: Humayun, Qutub Minar e la Nuova Delhi', pernottamento: 'Delhi, Karol Bagh, Connaught Place o South Delhi', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Tomba di Humayun e Qutub Minar circa 600 rupie ciascuno per gli stranieri', destinazioneSlug: 'delhi', immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-02-delhi.jpg', imageAlt: 'La Tomba di Humayun a Delhi, mausoleo moghul in arenaria rossa con la cupola di marmo bianco, sotto un cielo azzurro' },
    { titoloGiorno: 'Giorno 3 — In treno ad Agra: il Forte e il Taj al tramonto da Mehtab Bagh', tratta: 'Delhi (Hazrat Nizamuddin) → Agra, Gatimaan Express o Vande Bharat, circa 1h40-2h', pernottamento: 'Agra, zona Taj Ganj', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Treno 800-1.600 rupie secondo la classe; Forte di Agra circa 650 rupie', destinazioneSlug: 'agra', immagine: '/images/india/agra-chhatri-tramonto-riccardo.jpg', imageAlt: 'Un chhatri in silhouette contro il cielo arancio del tramonto ad Agra, tra le chiome scure degli alberi' },
    { titoloGiorno: 'Giorno 4 — Il Taj Mahal all\'alba, Fatehpur Sikri e la strada per Jaipur', tratta: 'Agra → Fatehpur Sikri → Abhaneri (facoltativo) → Jaipur, auto con autista, 5-6h con le soste', pernottamento: 'Jaipur, haveli in città vecchia o Bani Park', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Taj Mahal circa 1.100 rupie + 200 per il mausoleo; Fatehpur Sikri circa 600 rupie', destinazioneSlug: 'agra', immagine: '/images/india/agra-taj-mahal-portale-riccardo.jpg', imageAlt: 'Il Taj Mahal incorniciato dall\'arco scuro del portale d\'ingresso, sagome di visitatori in controluce' },
    { titoloGiorno: 'Giorno 5 — Jaipur: il Forte di Amber e Nahargarh al tramonto', pernottamento: 'Jaipur, haveli in città vecchia o Bani Park', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Forte di Amber 1.000 rupie, Nahargarh 600 (tariffe stranieri 2026); il composito è ora un pass statale di 10 giorni da 5.500 rupie', destinazioneSlug: 'jaipur', immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-05-jaipur.jpg', imageAlt: 'Il Forte di Amber sulla collina sopra il lago Maota, con le mura color miele e uno stormo di uccelli in volo' },
    { titoloGiorno: 'Giorno 6 — Jaipur: City Palace, Jantar Mantar, Hawa Mahal e i bazar', pernottamento: 'Jaipur, haveli in città vecchia o Bani Park', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'City Palace circa 700 rupie (privato, fuori dal composito); Hawa Mahal e Jantar Mantar 600 rupie ciascuno', destinazioneSlug: 'jaipur', immagine: '/images/india/jaipur-hawa-mahal-cupole-riccardo.jpg', imageAlt: 'Le cupole e i pinnacoli rosa dell\'Hawa Mahal sopra i tetti di Jaipur' },
    { titoloGiorno: 'Giorno 7 — In treno a Jodhpur, la città blu', tratta: 'Jaipur → Jodhpur, treno diurno circa 5h', pernottamento: 'Jodhpur, haveli sotto il forte (Ghanta Ghar, Navchokiya)', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Treno 500-1.200 rupie secondo la classe', destinazioneSlug: 'jodhpur', immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-07-jodhpur.jpg', imageAlt: 'Le case blu della città vecchia di Jodhpur viste dall\'alto, una distesa di tetti e facciate color indaco' },
    { titoloGiorno: 'Giorno 8 — Jodhpur: il forte di Mehrangarh e i vicoli blu', pernottamento: 'Jodhpur, haveli sotto il forte (Ghanta Ghar, Navchokiya)', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Mehrangarh circa 600 rupie con audioguida per gli stranieri', destinazioneSlug: 'jodhpur', immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-08-jodhpur.jpg', imageAlt: 'Il Forte di Mehrangarh sulla sua rupe sopra Jodhpur, illuminato dalla luce calda del tardo pomeriggio' },
    { titoloGiorno: 'Giorno 9 — Da Jodhpur a Udaipur passando per il tempio di Ranakpur', tratta: 'Jodhpur → Ranakpur (circa 3h) → Udaipur (circa 2h), auto con autista', pernottamento: 'Udaipur, Lal Ghat, Gangaur Ghat o Ambrai', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Ranakpur aperto ai non giainisti circa dalle 12 alle 17', destinazioneSlug: 'udaipur', immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-09-udaipur.jpg', imageAlt: 'Il tempio giainista di Ranakpur in marmo chiaro, con le guglie scolpite e le colline dell\'Aravalli alle spalle' },
    { titoloGiorno: 'Giorno 10 — Udaipur: City Palace, lago Pichola e rientro', tratta: 'Udaipur → Delhi, volo interno circa 1h30, coincidenza internazionale', pernottamento: 'Volo di rientro, o una notte in più a Udaipur', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'City Palace 400-700 rupie per gli stranieri; volo Udaipur-Delhi 4.000-8.000 rupie se prenotato presto', destinazioneSlug: 'udaipur', immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-10-udaipur.jpg', imageAlt: 'Il City Palace di Udaipur sulla riva del lago Pichola, con le sue torri bianche sopra l\'acqua' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: 'Italia-Delhi indicativamente 450-900 € andata e ritorno secondo la stagione' },
    { etichetta: 'Visto e documenti', valore: 'e-Tourist Visa 25 $ (30 giorni) o 40 $ (un anno), più il 2,5-3% di commissione, da chiedere almeno 4 giorni prima; e-Arrival Card gratuita nelle 72 ore prima' },
    { etichetta: 'Treni', valore: 'Delhi-Agra 800-1.600 rupie, Jaipur-Jodhpur 500-1.200 rupie secondo la classe' },
    { etichetta: 'Auto con autista', valore: 'circa 3.000-4.500 rupie per tratta (Agra-Jaipur, Jodhpur-Udaipur), o 2.800-4.000 rupie al giorno per tutto il viaggio' },
    { etichetta: 'Volo interno', valore: 'Udaipur-Delhi 4.000-8.000 rupie' },
    { etichetta: 'Ingressi ai monumenti', valore: '9.000-11.000 rupie a testa in tutto, circa 90-110 € (tariffe stranieri 2026, indicative)' },
    { etichetta: 'Alloggi', valore: 'guesthouse 1.500-3.000 rupie, hotel heritage 4.000-9.000 rupie, palazzi-hotel oltre 25.000 rupie a notte' },
    { etichetta: 'Pasti', valore: '200-500 rupie in un ristorante locale, 800-2.000 in un ristorante per turisti' },
  ],
}
