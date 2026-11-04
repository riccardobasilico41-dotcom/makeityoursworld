import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "India: Varanasi, Ranthambore e il
// Rajasthan in 19 giorni, in treno notturno e con l'autista". Il testo narrativo resta nel
// markdown (src/content/viaggi/77-india-rajasthan-varanasi.md). `titoloGiorno`
// deve combaciare esattamente con le intestazioni "### Giorno N — ..." del
// markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.
//
// Viaggio fatto da Rick (rotta Delhi → treno notturno → Varanasi → treno
// notturno → Agra → autista per il Rajasthan). Le giornate sono in voce di
// guida: pernottamenti 'consigliato' (zone suggerite, non hotel usati) finché
// non arrivano i ricordi dal diario.

export const indiaRajasthanVaranasiMeta: TripMeta = {
  tripSlug: 'india-rajasthan-varanasi',
  paeseSlug: 'india',
  ritmo:
    'Intenso nella prima settimana: due notti in treno (Delhi-Varanasi e Varanasi-Agra), tre giorni pieni a Varanasi con sveglie all\'alba, poi Agra e due giorni di safari a Ranthambore. Più disteso nella seconda, in auto con l\'autista, con una giornata cuscinetto a Jodhpur prima di Ranakpur e Udaipur. Cinque trasferimenti lunghi in auto, di 3-6 ore.',
  trasporti:
    'Treno notturno Delhi-Varanasi (Shiv Ganga Express o Swatantrata Senani Express) e treno notturno Varanasi-Agra (Marudhar Express), in cuccetta: seconda classe la prima notte, terza la seconda, presi su 12Go. Da Agra a Udaipur auto con autista per tutto il Rajasthan, Ranthambore compreso; gypsy o canter per i safari, jeep per le dune, volo di rientro Udaipur-Delhi. Barche e cammino lungo i ghat a Varanasi.',
  stile: ['cultura', 'spiritualità', 'treni notturni', 'safari', 'deserto', 'forti e palazzi'],
  adattoA: [
    'chi ha almeno due settimane e mezza e vuole l\'India del Nord intera, dal Gange al deserto',
    'chi vuole vedere Varanasi senza fretta, con tre notti sul fiume',
    'chi è curioso di provare i treni notturni indiani in cuccetta, due volte',
    'chi regge qualche trasferimento lungo in cambio di tappe meno battute come Pushkar e Jaisalmer',
  ],
  puntiForti: [
    'I ghat di Varanasi all\'alba in barca e il Ganga Aarti a Dashashwamedh la sera',
    'I due treni notturni, da Delhi a Varanasi e da Varanasi ad Agra, un pezzo di India vissuta da dentro',
    'Il Taj Mahal due volte, al tramonto e all\'alba del giorno dopo',
    'Una notte in campo tendato tra le dune del Thar vicino a Jaisalmer',
    'I safari a Ranthambore: tre tigri in un solo safari del mattino, e due orsetti che correvano',
    'Le cene da maharaja a Jaipur, al Jamavar e al 1135 AD dentro il Forte di Amber',
    'Il Forte di Mehrangarh sopra la città blu e il lago Pichola a Udaipur',
  ],
  criticita: [
    'Varanasi è intensa: cremazioni a cielo aperto, folla, vicoli stretti e truffe mirate (la «legna per i poveri» a Manikarnika, i prezzi delle barche)',
    'I treni notturni finiscono presto: noi li abbiamo prenotati a novembre per fine febbraio e abbiamo faticato a trovare tutto. Su IRCTC la prenotazione apre 60 giorni prima, e un biglietto in lista d\'attesa non dà il posto',
    'L\'autista fa metà del viaggio: va scelto con un\'agenzia registrata, recensioni recenti e un contratto scritto. Il nostro era uno squinternato',
    'Tra dicembre e gennaio la nebbia ritarda treni e voli anche di ore, soprattutto a Varanasi e tra Delhi e Agra',
    'Il Taj Mahal è chiuso il venerdì, come il museo di Sarnath: treni e autista vanno organizzati di conseguenza',
    'Ranthambore va prenotato con largo anticipo per avere la gypsy invece del canter, e servono almeno due safari perché le zone sono assegnate a caso',
    'Jaisalmer aggiunge due giorni di trasferimento: chi ha poco tempo lo toglie',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito:
      'in compagnia, in autonomia, a fine febbraio: cuccetta in seconda classe da Delhi a Varanasi, in terza da Varanasi ad Agra, poi un autista per tutto il Rajasthan (che non consiglio)',
    treEsperienzePiuBelle:
      'Il Taj Mahal visto due volte, al tramonto e all\'alba; le tre tigri di Ranthambore; le cene da maharaja a Jaipur',
    aChiLoConsiglio: 'a chi ha diciannove giorni tra ottobre e marzo, vuole l\'India del Nord completa e non ha paura di dormire in treno; con un autista scelto meglio del nostro',
  },
  tappeMappa: [
    { nome: 'Delhi', destinazioneSlug: 'delhi' },
    { nome: 'Varanasi e Sarnath', destinazioneSlug: 'varanasi' },
    { nome: 'Agra e il Taj Mahal', destinazioneSlug: 'agra' },
    { nome: 'Ranthambore', destinazioneSlug: 'ranthambore' },
    { nome: 'Jaipur', destinazioneSlug: 'jaipur' },
    { nome: 'Pushkar', destinazioneSlug: 'pushkar' },
    { nome: 'Jodhpur', destinazioneSlug: 'jodhpur' },
    { nome: 'Jaisalmer e il deserto del Thar', destinazioneSlug: 'jaisalmer' },
    { nome: 'Ranakpur' },
    { nome: 'Udaipur', destinazioneSlug: 'udaipur' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Delhi e la Vecchia Delhi', tratta: 'Aeroporto Indira Gandhi → hotel → Vecchia Delhi in metro', pernottamento: 'Delhi, Karol Bagh, Connaught Place o South Delhi', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'delhi', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-01-delhi.jpg', imageAlt: 'Una strada affollata della Vecchia Delhi verso Chandni Chowk, tra insegne, fili elettrici e risciò, con una cupola rossa sullo sfondo' },
    { titoloGiorno: 'Giorno 2 — Delhi: Humayun, Qutub Minar e il treno notturno per Varanasi', tratta: 'New Delhi → Banaras, Shiv Ganga Express notturno circa 10h (20:05 → 6:10), o Swatantrata Senani Express per Varanasi Junction (21:15 → 8:05)', pernottamento: 'Treno notturno in 2A o 3A', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Humayun e Qutub Minar circa 600 rupie ciascuno', destinazioneSlug: 'delhi', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-02-delhi.jpg', imageAlt: 'Il Qutub Minar, il minareto di arenaria rossa del XII secolo, tra il verde e le rovine del complesso sotto un cielo nuvoloso' },
    { titoloGiorno: 'Giorno 3 — Varanasi: l\'arrivo all\'alba, i ghat e l\'aarti a Dashashwamedh', tratta: 'Stazione di Varanasi → ghat, e-risciò o taxi e ultimi metri a piedi', pernottamento: 'Varanasi, sui ghat tra Assi e Dashashwamedh', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Ganga Aarti gratuito', destinazioneSlug: 'varanasi', immagine: '/images/india/varanasi-barca-pellegrini-riccardo.jpg', imageAlt: 'Una barca carica di pellegrini avvolti in scialli arancio attraversa il Gange davanti ai ghat di Varanasi' },
    { titoloGiorno: 'Giorno 4 — Varanasi: la barca all\'alba, Manikarnika e il Kashi Vishwanath', pernottamento: 'Varanasi, sui ghat tra Assi e Dashashwamedh', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Barca a remi privata un\'ora all\'alba 800-1.500 rupie', destinazioneSlug: 'varanasi', immagine: '/images/india/varanasi-manikarnika-riccardo.jpg', imageAlt: 'La torre rossa di un tempio velata dal fumo sopra il Manikarnika Ghat di Varanasi' },
    { titoloGiorno: 'Giorno 5 — Sarnath e il treno notturno per Agra', tratta: 'Varanasi → Sarnath e ritorno; Varanasi City → Agra Fort, Marudhar Express notturno circa 14h (16:30-16:40 → 6:35)', pernottamento: 'Treno notturno in 2A o 3A', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Sarnath circa 300 rupie (museo a parte, chiuso il venerdì)', destinazioneSlug: 'varanasi', immagine: '/images/india/varanasi-guglie-ghat-riccardo.jpg', imageAlt: 'Le guglie dei templi sui ghat di Varanasi con gli stormi di uccelli nel cielo velato' },
    { titoloGiorno: 'Giorno 6 — Agra: il Forte, il «piccolo Taj» e il Taj Mahal al tramonto', pernottamento: 'Agra, zona Taj Ganj', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Forte di Agra circa 650 rupie; Taj Mahal circa 1.100 rupie + 200 per il mausoleo, un biglietto per ogni ingresso', destinazioneSlug: 'agra', immagine: '/images/india/agra-forte-archi-riccardo.jpg', imageAlt: 'Una fuga di archi polilobati in arenaria scolpita nel Forte di Agra, illuminati da una luce calda' },
    { titoloGiorno: 'Giorno 7 — Il Taj Mahal all\'alba e la strada per Ranthambore', tratta: 'Agra → Fatehpur Sikri → Sawai Madhopur (Ranthambore), auto con autista 5-6h', pernottamento: 'Ranthambore, lodge o hotel a Sawai Madhopur', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Secondo biglietto del Taj Mahal circa 1.100 rupie + 200; Fatehpur Sikri circa 600', destinazioneSlug: 'agra', immagine: '/images/india/agra-taj-mahal-cupola-riccardo.jpg', imageAlt: 'La cupola del Taj Mahal che spunta dietro un pilastro scuro in controluce' },
    { titoloGiorno: 'Giorno 8 — Ranthambore: i safari tra le tigri', tratta: 'Due safari nel parco, al mattino e nel pomeriggio, in gypsy (6 posti) o canter (circa 20 posti)', pernottamento: 'Ranthambore, lodge o hotel a Sawai Madhopur', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Safari da prenotare con largo anticipo; zone assegnate a caso', destinazioneSlug: 'ranthambore' },
    { titoloGiorno: 'Giorno 9 — Ranthambore e la strada per Jaipur', tratta: 'Safari facoltativo all\'alba; Ranthambore → Jaipur, auto con autista circa 3h30-4h', pernottamento: 'Jaipur, haveli in città vecchia o Bani Park', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'ranthambore' },
    { titoloGiorno: 'Giorno 10 — Jaipur, la città rosa e il Forte di Amber', pernottamento: 'Jaipur, haveli in città vecchia o Bani Park', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Amber 1.000 rupie, Hawa Mahal, Jantar Mantar e Nahargarh 600 ciascuno, City Palace circa 700 (tariffe stranieri 2026)', destinazioneSlug: 'jaipur', immagine: '/images/india/jaipur-grata-riccardo.jpg', imageAlt: 'Una grata di pietra traforata a stella sotto un arco dipinto a Jaipur, con la luce che filtra' },
    { titoloGiorno: 'Giorno 11 — Jaipur: i bazar e la strada per Pushkar', tratta: 'Jaipur → Pushkar, auto circa 3h', pernottamento: 'Pushkar, guesthouse sul lago', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'pushkar', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-09-pushkar.jpg', imageAlt: 'Pushkar vista dall\'alto, con il lago sacro al centro della città e le colline dell\'Aravalli intorno' },
    { titoloGiorno: 'Giorno 12 — Pushkar all\'alba e la strada per Jodhpur', tratta: 'Pushkar → Jodhpur, auto 4-5h', pernottamento: 'Jodhpur, haveli sotto il forte', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'pushkar', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-10-pushkar.jpg', imageAlt: 'I ghat e le case bianche affacciati sul lago sacro di Pushkar, riflessi nell\'acqua' },
    { titoloGiorno: 'Giorno 13 — Jodhpur: Mehrangarh e la città blu', pernottamento: 'Jodhpur, haveli sotto il forte', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Mehrangarh circa 600 rupie con audioguida', destinazioneSlug: 'jodhpur', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-11-jodhpur.jpg', imageAlt: 'Il Forte di Mehrangarh sulla sua rupe sopra la città vecchia di Jodhpur' },
    { titoloGiorno: 'Giorno 14 — Verso Jaisalmer e la notte nel deserto del Thar', tratta: 'Jodhpur → Jaisalmer, auto con autista circa 5h; Jaisalmer → dune di Sam o Khuri in jeep', pernottamento: 'Campo tendato nel deserto del Thar', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Campo con cena, colazione e cammello 3.000-8.000 rupie a persona', destinazioneSlug: 'jaisalmer', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-12-jaisalmer.jpg', imageAlt: 'Un cammello con il suo conducente in controluce sulle dune al tramonto' },
    { titoloGiorno: 'Giorno 15 — Jaisalmer, la città d\'oro', pernottamento: 'Jaisalmer, hotel sotto il forte', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Forte gratuito; palazzo reale, templi e haveli a pagamento', destinazioneSlug: 'jaisalmer', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-13-jaisalmer.jpg', imageAlt: 'Le mura e i bastioni in arenaria dorata del Forte di Jaisalmer, con uno stormo di uccelli in volo' },
    { titoloGiorno: 'Giorno 16 — Da Jaisalmer a Jodhpur', tratta: 'Jaisalmer → Jodhpur, auto con autista circa 5h', pernottamento: 'Jodhpur, haveli sotto il forte', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'jodhpur', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-14-jodhpur.jpg', imageAlt: 'La città blu di Jodhpur vista attraverso una finestra ad arco smerlato' },
    { titoloGiorno: 'Giorno 17 — Ranakpur e l\'arrivo a Udaipur', tratta: 'Jodhpur → Ranakpur (circa 3h) → Udaipur (circa 2h), auto con autista', pernottamento: 'Udaipur, Lal Ghat, Gangaur Ghat o Ambrai', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Ranakpur aperto ai non giainisti circa dalle 12 alle 17', destinazioneSlug: 'udaipur', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-15-udaipur.jpg', imageAlt: 'Il tempio giainista di Ranakpur, con le guglie in marmo chiaro e la scalinata d\'ingresso' },
    { titoloGiorno: 'Giorno 18 — Udaipur, la città dei laghi', pernottamento: 'Udaipur, Lal Ghat, Gangaur Ghat o Ambrai', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'City Palace 400-700 rupie per gli stranieri', destinazioneSlug: 'udaipur', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-16-udaipur.jpg', imageAlt: 'Il Lake Palace in marmo bianco in mezzo al lago Pichola di Udaipur, con le colline sullo sfondo' },
    { titoloGiorno: 'Giorno 19 — Da Udaipur a Delhi e partenza', tratta: 'Udaipur → Delhi, volo interno circa 1h30 → volo internazionale', pernottamento: 'Volo di rientro (eventuale camera di transito ad Aerocity)', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Volo Udaipur-Delhi 4.000-8.000 rupie', destinazioneSlug: 'udaipur', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-17-udaipur.jpg', imageAlt: 'Il Lake Palace sul lago Pichola visto dalla riva tra le palme, sotto un cielo di nuvole' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: 'Italia-Delhi indicativamente 450-900 € andata e ritorno' },
    { etichetta: 'Visto e documenti', valore: 'e-Tourist Visa 25 $ (30 giorni) o 40 $ (un anno), più il 2,5-3% di commissione, da chiedere almeno 4 giorni prima; e-Arrival Card gratuita nelle 72 ore prima' },
    { etichetta: 'Volo interno', valore: 'Udaipur-Delhi 4.000-8.000 rupie se prenotato presto' },
    { etichetta: 'Treni notturni', valore: 'Delhi-Varanasi e Varanasi-Agra in cuccetta con aria condizionata, indicativamente 1.000-3.000 rupie ciascuno secondo classe, treno e data; su 12Go con un sovrapprezzo' },
    { etichetta: 'Auto con autista', valore: '2.800-4.000 rupie al giorno da Agra a Udaipur; chilometri, notti dell\'autista, pedaggi e parcheggi da chiarire per scritto' },
    { etichetta: 'Varanasi', valore: 'barca all\'alba 800-1.500 rupie per la barca; Sarnath circa 300 rupie' },
    { etichetta: 'Safari a Ranthambore', valore: 'due safari consigliati, in gypsy (6 posti) o canter (circa 20 posti): prezzi sul portale del Forest Department del Rajasthan al momento della prenotazione' },
    { etichetta: 'Notte nel deserto', valore: '3.000-8.000 rupie a persona con cena, colazione e cammello' },
    { etichetta: 'Ingressi ai monumenti', valore: '10.000-12.000 rupie a testa in tutto, circa 100-120 € (tariffe stranieri 2026, indicative)' },
  ],
}
