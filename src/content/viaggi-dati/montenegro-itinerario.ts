import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Montenegro in 10 giorni: dalle Bocche
// di Cattaro al Durmitor e al canyon del Tara". Il testo narrativo resta nel
// markdown (src/content/viaggi/70-montenegro-itinerario.md). `titoloGiorno`
// deve combaciare esattamente con le intestazioni "### Giorno N — ...".
//
// Guida non vissuta in prima persona: pernottamenti 'consigliato', nessuna
// esperienza personale. `immagine` omesso: le foto si recuperano dopo.

export const montenegroItinerarioMeta: TripMeta = {
  tripSlug: 'montenegro-itinerario',
  paeseSlug: 'montenegro',
  ritmo:
    'Regolare, in auto: tre notti sulle Bocche, poi una tappa al giorno lungo costa, lago e montagna, con spostamenti di 1-3 ore su strade lente. Due giornate più impegnative: il Bobotov Kuk o la strada panoramica del Durmitor e il rafting sul Tara.',
  trasporti:
    'Auto a noleggio da Tivat o Podgorica, traghetto Kamenari-Lepetane sulle Bocche, barche per la Madonna dello Scarpello e sul lago di Scutari, gommone per il rafting sul Tara. Per uscire in Croazia, Bosnia o Albania servono autorizzazione del noleggio e carta verde.',
  stile: ['roadtrip', 'mare', 'montagna', 'trekking', 'monasteri'],
  adattoA: [
    'chi vuole mare e montagna nello stesso viaggio, a due ore di volo dall\'Italia',
    'chi ama guidare e accetta strade strette e tornanti',
    'chi vuole combinare il Montenegro con Dubrovnik, Mostar o l\'Albania del nord',
    'chi viaggia a giugno o settembre e cerca un\'alternativa meno cara della Croazia',
  ],
  puntiForti: [
    'Le Bocche di Cattaro dalla fortezza di San Giovanni e l\'isola della Madonna dello Scarpello a Perast',
    'Le venticinque serpentine del Lovćen e il mausoleo di Njegoš sulla vetta',
    'Il monastero di Ostrog incastrato nella parete di roccia',
    'Il Lago Nero e la strada panoramica del Durmitor',
    'Il rafting nel canyon del Tara e il ponte di Đurđevića Tara',
  ],
  criticita: [
    'Luglio e agosto portano caldo forte, traffico sulla costa, code alle frontiere e navi da crociera a Kotor',
    'Il Montenegro non è nell\'Unione europea: il roaming europeo non vale e i dati con le SIM italiane costano molto',
    'Le strade di montagna sono strette e tortuose: i tempi di guida sono più lunghi di quanto dicano i chilometri',
    'L\'uscita dal paese con l\'auto a noleggio richiede autorizzazione scritta e carta verde, con un supplemento',
    'Budva e la costa centrale sono costruite e affollate: la parte più bella del mare sta tra le Bocche e Petrovac',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito:
      'itinerario pensato per viaggiare in autonomia, in coppia, con amici o in famiglia, con auto a noleggio',
    treEsperienzePiuBelle:
      'Le Bocche di Cattaro dalle mura di Kotor, il monastero di Ostrog nella roccia, il canyon del Tara in gommone',
    aChiLoConsiglio: 'a chi ha dieci giorni a giugno o a settembre e vuole un roadtrip tra mare e montagna',
  },
  tappeMappa: [
    { nome: 'Kotor e le Bocche di Cattaro', destinazioneSlug: 'bocche-di-cattaro' },
    { nome: 'Lovćen e Cetinje', destinazioneSlug: 'lovcen-cetinje' },
    { nome: 'Budva e la riviera', destinazioneSlug: 'budva-riviera' },
    { nome: 'Lago di Scutari', destinazioneSlug: 'lago-di-scutari' },
    { nome: 'Monastero di Ostrog', destinazioneSlug: 'ostrog' },
    { nome: 'Durmitor e canyon del Tara', destinazioneSlug: 'durmitor-tara' },
    { nome: 'Podgorica' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Tivat e Kotor al tramonto', tratta: 'Aeroporto di Tivat → Kotor, circa 15 minuti (da Podgorica circa 1h30)', pernottamento: 'Kotor, Dobrota o Muo', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'bocche-di-cattaro' },
    { titoloGiorno: 'Giorno 2 — Kotor: la città vecchia e le mura fino alla fortezza', pernottamento: 'Kotor, Dobrota o Muo', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Mura e fortezza di San Giovanni circa 15 € in stagione, contanti', destinazioneSlug: 'bocche-di-cattaro' },
    { titoloGiorno: 'Giorno 3 — Perast, la Madonna dello Scarpello e il giro delle Bocche', tratta: 'Kotor → Perast → Risan → traghetto Kamenari-Lepetane → Tivat → Kotor', pernottamento: 'Kotor, Dobrota o Muo', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Traghetto di Kamenari circa 5 € per l\'auto; barca per l\'isola pochi euro', destinazioneSlug: 'bocche-di-cattaro' },
    { titoloGiorno: 'Giorno 4 — Le serpentine del Lovćen, Njeguši e Cetinje', tratta: 'Kotor → serpentine → Njeguši → mausoleo di Njegoš → Cetinje', pernottamento: 'Cetinje', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Parco nazionale e mausoleo pochi euro ciascuno', destinazioneSlug: 'lovcen-cetinje' },
    { titoloGiorno: 'Giorno 5 — Budva, la costa e Sveti Stefan', tratta: 'Cetinje → Budva, circa 40 minuti → Sveti Stefan → Petrovac', pernottamento: 'Petrovac o Budva', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Lettini e ombrelloni 15-30 € al giorno in alta stagione', destinazioneSlug: 'budva-riviera' },
    { titoloGiorno: 'Giorno 6 — Il lago di Scutari: Virpazar e Rijeka Crnojevića', tratta: 'Petrovac → Virpazar → Pavlova Strana → Rijeka Crnojevića', pernottamento: 'Lago di Scutari (Virpazar) o Podgorica', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Parco nazionale circa 5 €; barca 15-30 € a persona', destinazioneSlug: 'lago-di-scutari' },
    { titoloGiorno: 'Giorno 7 — Il monastero di Ostrog e la strada per Žabljak', tratta: 'Lago di Scutari → Ostrog → Nikšić → Žabljak, circa 2h30 da Ostrog', pernottamento: 'Žabljak', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Monastero di Ostrog ingresso libero', destinazioneSlug: 'ostrog' },
    { titoloGiorno: 'Giorno 8 — Durmitor: il Lago Nero, la strada panoramica e il Bobotov Kuk', pernottamento: 'Žabljak', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Parco nazionale circa 5 €, parcheggio a parte', destinazioneSlug: 'durmitor-tara' },
    { titoloGiorno: 'Giorno 9 — Il ponte sul Tara, il rafting e la discesa verso sud', tratta: 'Žabljak → ponte di Đurđevića Tara → rafting Brštanovica-Šćepan Polje → canyon della Morača → Podgorica', pernottamento: 'Podgorica (o la costa, per i voli da Tivat)', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Rafting 50-80 € con pranzo; zipline 20-30 €', destinazioneSlug: 'durmitor-tara' },
    { titoloGiorno: 'Giorno 10 — Podgorica e partenza', tratta: 'Podgorica → aeroporto, circa 15 minuti', pernottamento: 'Volo di rientro', statoPernottamento: 'consigliato', intensita: 'leggero' },
  ],
  budget: [
    { etichetta: 'Voli', valore: 'Italia-Tivat o Podgorica indicativamente 80-250 € andata e ritorno' },
    { etichetta: 'Auto a noleggio', valore: '30-60 € al giorno in estate; supplemento per l\'uscita dal paese 40-100 € a noleggio' },
    { etichetta: 'Ingressi', valore: 'mura di Kotor circa 15 €; parchi nazionali circa 5 € ciascuno; mausoleo di Njegoš pochi euro' },
    { etichetta: 'Traghetto e barche', valore: 'Kamenari circa 5 € per l\'auto; Madonna dello Scarpello pochi euro; lago di Scutari 15-30 €' },
    { etichetta: 'Attività', valore: 'rafting sul Tara 50-80 €; zipline 20-30 €' },
    { etichetta: 'Alloggi', valore: '40-70 € la doppia in fascia economica, 80-150 € in fascia media; doppi in luglio-agosto sulla costa' },
    { etichetta: 'Pasti', valore: '15-30 € in konoba; pesce spesso al chilo' },
    { etichetta: 'Tassa di soggiorno', valore: 'circa 1-1,5 € a persona a notte' },
  ],
}
