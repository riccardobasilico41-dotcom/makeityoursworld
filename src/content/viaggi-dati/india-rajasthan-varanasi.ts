import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "India: Varanasi e il Rajasthan in 17
// giorni, dal Gange al deserto del Thar". Il testo narrativo resta nel
// markdown (src/content/viaggi/77-india-rajasthan-varanasi.md). `titoloGiorno`
// deve combaciare esattamente con le intestazioni "### Giorno N — ..." del
// markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.
//
// Guida non vissuta in prima persona: pernottamenti 'consigliato' (zone
// suggerite), nessuna esperienza personale. `immagine` omesso: le foto dei
// giorni si recuperano dopo.

export const indiaRajasthanVaranasiMeta: TripMeta = {
  tripSlug: 'india-rajasthan-varanasi',
  paeseSlug: 'india',
  ritmo:
    'Intenso nella prima settimana (Delhi, tre notti a Varanasi con sveglie all\'alba, treno notturno, Agra e Jaipur), più disteso nella seconda, con una giornata cuscinetto a Jodhpur prima di Ranakpur e Udaipur. Tre trasferimenti lunghi in auto e due in treno.',
  trasporti:
    'Volo interno Delhi-Varanasi, treno notturno Varanasi-Agra in 2A o 3A, treni diurni Jodhpur-Jaisalmer e ritorno, auto con autista per Agra-Jaipur, Jaipur-Pushkar-Jodhpur e Jodhpur-Ranakpur-Udaipur, jeep per le dune, volo di rientro Udaipur-Delhi. Barche e cammino lungo i ghat a Varanasi.',
  stile: ['cultura', 'spiritualità', 'treni notturni', 'deserto', 'forti e palazzi'],
  adattoA: [
    'chi ha almeno due settimane e mezza e vuole l\'India del Nord intera, dal Gange al deserto',
    'chi vuole vedere Varanasi senza fretta, con tre notti sul fiume',
    'chi è curioso di provare un treno notturno indiano in cuccetta',
    'chi regge qualche trasferimento lungo in cambio di tappe meno battute come Pushkar e Jaisalmer',
  ],
  puntiForti: [
    'I ghat di Varanasi all\'alba in barca e il Ganga Aarti a Dashashwamedh la sera',
    'Il treno notturno da Varanasi ad Agra, un pezzo di India vissuta da dentro',
    'Il Taj Mahal all\'apertura dei cancelli',
    'Una notte in campo tendato tra le dune del Thar vicino a Jaisalmer',
    'Il Forte di Mehrangarh sopra la città blu e il lago Pichola a Udaipur',
  ],
  criticita: [
    'Varanasi è intensa: cremazioni a cielo aperto, folla, vicoli stretti e truffe mirate (la «legna per i poveri» a Manikarnika, i prezzi delle barche)',
    'Il treno notturno va prenotato 4-6 settimane prima; senza conferma serve il piano B del volo Varanasi-Delhi',
    'Tra dicembre e gennaio la nebbia ritarda treni e voli anche di ore, soprattutto a Varanasi e tra Delhi e Agra',
    'Il Taj Mahal e il museo di Sarnath sono chiusi il venerdì: i giorni vanno incastrati nel calendario',
    'Jaisalmer aggiunge due giorni di trasferimento: chi ha poco tempo lo toglie (variante da 12-13 giorni)',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito:
      'itinerario pensato per viaggiare in autonomia, in coppia o in piccolo gruppo, con voli interni, treni e autista per il Rajasthan',
    treEsperienzePiuBelle:
      'L\'alba in barca sul Gange a Varanasi, il Taj Mahal all\'apertura dei cancelli, la notte tra le dune del Thar',
    aChiLoConsiglio: 'a chi ha diciassette giorni tra ottobre e marzo e vuole l\'India del Nord completa',
  },
  tappeMappa: [
    { nome: 'Delhi', destinazioneSlug: 'delhi' },
    { nome: 'Varanasi e Sarnath', destinazioneSlug: 'varanasi' },
    { nome: 'Agra e il Taj Mahal', destinazioneSlug: 'agra' },
    { nome: 'Jaipur', destinazioneSlug: 'jaipur' },
    { nome: 'Pushkar', destinazioneSlug: 'pushkar' },
    { nome: 'Jodhpur', destinazioneSlug: 'jodhpur' },
    { nome: 'Jaisalmer e il deserto del Thar', destinazioneSlug: 'jaisalmer' },
    { nome: 'Ranakpur' },
    { nome: 'Udaipur', destinazioneSlug: 'udaipur' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Delhi e la Vecchia Delhi', tratta: 'Aeroporto Indira Gandhi → hotel → Vecchia Delhi in metro', pernottamento: 'Delhi, Karol Bagh, Connaught Place o South Delhi', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'delhi' },
    { titoloGiorno: 'Giorno 2 — Delhi: Humayun, Qutub Minar e volo per Varanasi', tratta: 'Delhi → Varanasi, volo interno circa 1h30', pernottamento: 'Varanasi, sui ghat tra Assi e Dashashwamedh', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Humayun e Qutub Minar circa 600 rupie ciascuno; volo 3.500-7.000 rupie', destinazioneSlug: 'delhi' },
    { titoloGiorno: 'Giorno 3 — Varanasi: i ghat all\'alba e l\'aarti a Dashashwamedh', pernottamento: 'Varanasi, sui ghat tra Assi e Dashashwamedh', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Barca a remi privata un\'ora all\'alba 800-1.500 rupie; Ganga Aarti gratuito', destinazioneSlug: 'varanasi' },
    { titoloGiorno: 'Giorno 4 — Varanasi: Manikarnika, il Kashi Vishwanath e i vicoli della città vecchia', pernottamento: 'Varanasi, sui ghat tra Assi e Dashashwamedh', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'varanasi' },
    { titoloGiorno: 'Giorno 5 — Sarnath e il treno notturno per Agra', tratta: 'Varanasi → Sarnath e ritorno; Varanasi → Agra, treno notturno 12-13h', pernottamento: 'Treno notturno in 2A o 3A', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Sarnath circa 300 rupie; treno notturno in 2A circa 2.000-3.000 rupie', destinazioneSlug: 'varanasi' },
    { titoloGiorno: 'Giorno 6 — Agra: il Forte, il «piccolo Taj» e il tramonto da Mehtab Bagh', pernottamento: 'Agra, zona Taj Ganj', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Forte di Agra circa 650 rupie', destinazioneSlug: 'agra' },
    { titoloGiorno: 'Giorno 7 — Il Taj Mahal all\'alba e la strada per Jaipur', tratta: 'Agra → Fatehpur Sikri → Abhaneri (facoltativo) → Jaipur, auto con autista 5-6h', pernottamento: 'Jaipur, haveli in città vecchia o Bani Park', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Taj Mahal circa 1.100 rupie + 200 per il mausoleo; Fatehpur Sikri circa 600', destinazioneSlug: 'agra' },
    { titoloGiorno: 'Giorno 8 — Jaipur, la città rosa', pernottamento: 'Jaipur, haveli in città vecchia o Bani Park', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Amber circa 500 rupie, City Palace circa 700', destinazioneSlug: 'jaipur' },
    { titoloGiorno: 'Giorno 9 — Jaipur: i bazar e la strada per Pushkar', tratta: 'Jaipur → Pushkar, auto circa 3h', pernottamento: 'Pushkar, guesthouse sul lago', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'pushkar' },
    { titoloGiorno: 'Giorno 10 — Pushkar all\'alba e la strada per Jodhpur', tratta: 'Pushkar → Jodhpur, auto 4-5h', pernottamento: 'Jodhpur, haveli sotto il forte', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'pushkar' },
    { titoloGiorno: 'Giorno 11 — Jodhpur: Mehrangarh e la città blu', pernottamento: 'Jodhpur, haveli sotto il forte', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Mehrangarh circa 600 rupie con audioguida', destinazioneSlug: 'jodhpur' },
    { titoloGiorno: 'Giorno 12 — Verso Jaisalmer e la notte nel deserto del Thar', tratta: 'Jodhpur → Jaisalmer, treno o auto circa 5h; Jaisalmer → dune di Sam o Khuri in jeep', pernottamento: 'Campo tendato nel deserto del Thar', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Campo con cena, colazione e cammello 3.000-8.000 rupie a persona', destinazioneSlug: 'jaisalmer' },
    { titoloGiorno: 'Giorno 13 — Jaisalmer, la città d\'oro', pernottamento: 'Jaisalmer, hotel sotto il forte', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Forte gratuito; palazzo reale, templi e haveli a pagamento', destinazioneSlug: 'jaisalmer' },
    { titoloGiorno: 'Giorno 14 — Da Jaisalmer a Jodhpur', tratta: 'Jaisalmer → Jodhpur, treno o auto circa 5h', pernottamento: 'Jodhpur, haveli sotto il forte', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'jodhpur' },
    { titoloGiorno: 'Giorno 15 — Ranakpur e l\'arrivo a Udaipur', tratta: 'Jodhpur → Ranakpur (circa 3h) → Udaipur (circa 2h), auto con autista', pernottamento: 'Udaipur, Lal Ghat, Gangaur Ghat o Ambrai', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Ranakpur aperto ai non giainisti circa dalle 12 alle 17', destinazioneSlug: 'udaipur' },
    { titoloGiorno: 'Giorno 16 — Udaipur, la città dei laghi', pernottamento: 'Udaipur, Lal Ghat, Gangaur Ghat o Ambrai', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'City Palace circa 400 rupie', destinazioneSlug: 'udaipur' },
    { titoloGiorno: 'Giorno 17 — Volo da Udaipur a Delhi e partenza', tratta: 'Udaipur → Delhi, volo interno circa 1h30 → volo internazionale', pernottamento: 'Volo di rientro (eventuale camera di transito ad Aerocity)', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Volo Udaipur-Delhi 4.000-8.000 rupie', destinazioneSlug: 'udaipur' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: 'Italia-Delhi indicativamente 450-900 € andata e ritorno' },
    { etichetta: 'Visto e documenti', valore: 'e-Tourist Visa 25 $ (30 giorni) o 40 $ (un anno), più circa il 3% di commissione; e-Arrival Card gratuita' },
    { etichetta: 'Voli interni', valore: 'Delhi-Varanasi 3.500-7.000 rupie, Udaipur-Delhi 4.000-8.000 rupie' },
    { etichetta: 'Treni', valore: 'notturno Varanasi-Agra in 2A circa 2.000-3.000 rupie; Jodhpur-Jaisalmer e ritorno 500-1.500 rupie a tratta' },
    { etichetta: 'Auto con autista', valore: '3.000-4.500 rupie per tratta, o 2.800-4.000 rupie al giorno per il Rajasthan' },
    { etichetta: 'Varanasi', valore: 'barca all\'alba 800-1.500 rupie per la barca; Sarnath circa 300 rupie' },
    { etichetta: 'Notte nel deserto', valore: '3.000-8.000 rupie a persona con cena, colazione e cammello' },
    { etichetta: 'Ingressi ai monumenti', valore: '9.000-11.000 rupie a testa in tutto (tariffe stranieri, indicative)' },
  ],
}
