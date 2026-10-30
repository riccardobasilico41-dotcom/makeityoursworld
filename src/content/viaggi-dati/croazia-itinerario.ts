import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Croazia in 14 giorni: da Zagabria a
// Dubrovnik tra laghi, città romane e isole". Il testo narrativo resta nel
// markdown (src/content/viaggi/69-croazia-itinerario.md). `titoloGiorno` deve
// combaciare esattamente con le intestazioni "### Giorno N — ..." del markdown.
// Guida non vissuta: nessun campo miaEsperienza; immagini dei giorni da
// recuperare dopo (campo `immagine` omesso apposta).

export const croaziaItinerarioMeta: TripMeta = {
  tripSlug: 'croazia-itinerario',
  paeseSlug: 'croazia',
  ritmo:
    'Regolare: una tappa nuova ogni uno o due giorni, con tratte brevi in auto fino a Spalato e in catamarano tra le isole; le mattine presto sono riservate a Plitvice, Krka e alle mura di Dubrovnik per evitare la folla.',
  trasporti:
    'Auto a noleggio da Zagabria a Spalato (Plitvice, Zara, Krka, Sebenico, Traù) con restituzione a Spalato; catamarani Spalato-Hvar-Curzola-Dubrovnik; bus e taxi a Dubrovnik; gita in auto o bus a Ston.',
  stile: ['mare', 'isole', 'natura', 'città storiche', 'europa'],
  adattoA: [
    'chi parte dall\'Italia e vuole un viaggio vicino, con euro e carta d\'identità',
    'chi vuole unire laghi e cascate dell\'interno, città romane e veneziane e isole',
    'chi può viaggiare tra fine maggio e giugno o a settembre, evitando il picco di luglio-agosto',
    'chi preferisce lasciare l\'auto sulla terraferma e muoversi in catamarano tra le isole',
  ],
  puntiForti: [
    'Plitvice all\'apertura, prima che le passerelle si riempiano',
    'Il palazzo di Diocleziano a Spalato, una città dentro una residenza imperiale romana',
    'Le isole Pakleni da Hvar e la città vecchia di Curzola',
    'Le mura di Dubrovnik al tramonto e le ostriche di Ston',
  ],
  criticita: [
    'In luglio-agosto Plitvice, Hvar e Dubrovnik sono affollati e cari',
    'Multe per costume, alcol per strada e comportamenti molesti nei centri storici di Spalato, Hvar e Dubrovnik',
    'Supplemento di sola andata per restituire l\'auto a Spalato',
    'Tassa di soggiorno e parcheggi spesso esclusi dai prezzi online',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito: 'in autonomia, auto fino a Spalato e catamarani tra le isole',
    treEsperienzePiuBelle:
      'Le passerelle di Plitvice all\'alba, il tramonto all\'Organo marino di Zara, le mura di Dubrovnik nel tardo pomeriggio',
  },
  tappeMappa: [
    { nome: 'Zagabria', destinazioneSlug: 'zagabria' },
    { nome: 'Laghi di Plitvice', destinazioneSlug: 'plitvice' },
    { nome: 'Zara, Krka e Sebenico', destinazioneSlug: 'zara-krka-sebenico' },
    { nome: 'Spalato e Traù', destinazioneSlug: 'spalato' },
    { nome: 'Hvar', destinazioneSlug: 'hvar' },
    { nome: 'Curzola', destinazioneSlug: 'curzola' },
    { nome: 'Dubrovnik e Ston', destinazioneSlug: 'dubrovnik' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Zagabria', tratta: 'Volo per Zagabria o auto da Trieste (circa 2 ore e mezza)', pernottamento: 'Zagabria, Città Bassa', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'zagabria', imageAlt: 'Il tetto a piastrelle colorate della chiesa di San Marco nella Città Alta di Zagabria' },
    { titoloGiorno: 'Giorno 2 — Verso Plitvice: i laghi inferiori', tratta: 'Zagabria → Plitvice, circa 2 ore di auto', pernottamento: 'Vicino agli ingressi di Plitvice', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'biglietto circa 40 € in giugno-settembre, online con fascia oraria', destinazioneSlug: 'plitvice', imageAlt: 'La Veliki slap, la cascata più alta dei laghi di Plitvice' },
    { titoloGiorno: 'Giorno 3 — Plitvice all\'apertura e strada per Zara', tratta: 'Plitvice → Zara, circa 2 ore di auto', pernottamento: 'Zara, centro storico', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'plitvice', imageAlt: 'Passerelle di legno tra i laghi superiori di Plitvice' },
    { titoloGiorno: 'Giorno 4 — Zara: l\'Organo marino e il Saluto al Sole', pernottamento: 'Zara, centro storico', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'zara-krka-sebenico', imageAlt: 'Il tramonto sul lungomare di Zara con gli scalini dell\'Organo marino' },
    { titoloGiorno: 'Giorno 5 — Le cascate del Krka e Sebenico', tratta: 'Zara → Skradin (Krka) → Sebenico, circa 1 ora più il battello nel parco', pernottamento: 'Sebenico', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Krka circa 40 € in estate, bagno vietato', destinazioneSlug: 'zara-krka-sebenico', imageAlt: 'Lo Skradinski buk, la cascata a gradoni del Parco Nazionale del Krka' },
    { titoloGiorno: 'Giorno 6 — Trogir e arrivo a Spalato', tratta: 'Sebenico → Traù → Spalato, circa 1 ora e mezza; restituzione auto a Spalato', pernottamento: 'Spalato, centro storico', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'spalato', imageAlt: 'L\'isoletta di Traù con il centro medievale e il lungomare' },
    { titoloGiorno: 'Giorno 7 — Spalato: il palazzo di Diocleziano e il Marjan', pernottamento: 'Spalato, centro storico', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'sotterranei del palazzo 10-15 €', destinazioneSlug: 'spalato', imageAlt: 'Il Peristilio del palazzo di Diocleziano a Spalato' },
    { titoloGiorno: 'Giorno 8 — In catamarano a Hvar', tratta: 'Spalato → Hvar, catamarano (circa 1 ora)', pernottamento: 'Hvar città o Stari Grad', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'catamarano 15-25 € in estate', destinazioneSlug: 'hvar', imageAlt: 'La baia di Hvar vista dalla fortezza spagnola al tramonto' },
    { titoloGiorno: 'Giorno 9 — Hvar: le isole Pakleni', tratta: 'Hvar → isole Pakleni, taxi-boat', pernottamento: 'Hvar città o Stari Grad', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'taxi-boat 10-15 € andata e ritorno', destinazioneSlug: 'hvar', imageAlt: 'Una caletta di acqua trasparente tra le pinete delle isole Pakleni' },
    { titoloGiorno: 'Giorno 10 — Curzola, la città di Marco Polo', tratta: 'Hvar → Curzola, catamarano (circa 1 ora e mezza)', pernottamento: 'Curzola, città vecchia o Lumbarda', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'catamarano 20-30 €', destinazioneSlug: 'curzola', imageAlt: 'La città vecchia di Curzola sulla sua penisola fortificata' },
    { titoloGiorno: 'Giorno 11 — Da Curzola a Dubrovnik e le mura', tratta: 'Curzola → Dubrovnik (porto di Gruž), catamarano (circa 2 ore)', pernottamento: 'Dubrovnik, città vecchia o Lapad', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'catamarano 25-35 €; mura circa 40 € con Lovrijenac', destinazioneSlug: 'dubrovnik', imageAlt: 'Le mura di Dubrovnik sopra i tetti rossi della città vecchia' },
    { titoloGiorno: 'Giorno 12 — Dubrovnik: Stradun, Lokrum e la funivia', pernottamento: 'Dubrovnik, città vecchia o Lapad', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Lokrum con barca 25-30 €', destinazioneSlug: 'dubrovnik', imageAlt: 'Lo Stradun lastricato di pietra lucida nella città vecchia di Dubrovnik' },
    { titoloGiorno: 'Giorno 13 — Ston e la penisola di Sabbioncello', tratta: 'Dubrovnik → Ston, circa 1 ora', pernottamento: 'Dubrovnik, città vecchia o Lapad', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'dubrovnik', imageAlt: 'Le mura di Ston che salgono sulla collina sopra le saline' },
    { titoloGiorno: 'Giorno 14 — Rientro da Dubrovnik', tratta: 'Dubrovnik → aeroporto di Čilipi (circa 20 km)', intensita: 'leggero', destinazioneSlug: 'dubrovnik' },
  ],
  budget: [
    { etichetta: 'Budget giornaliero economico', valore: '70-100 € a persona' },
    { etichetta: 'Budget giornaliero medio', valore: '130-200 € a persona' },
    { etichetta: 'Budget giornaliero alto', valore: 'oltre 300 € a persona' },
    { etichetta: 'Parchi nazionali', valore: 'Plitvice e Krka circa 40 € ciascuno in alta stagione' },
    { etichetta: 'Dubrovnik', valore: 'mura circa 40 €; Lokrum con barca 25-30 €' },
    { etichetta: 'Catamarani', valore: 'Spalato-Hvar 15-25 €, Hvar-Curzola 20-30 €, Curzola-Dubrovnik 25-35 €' },
    { etichetta: 'Auto e pedaggi', valore: 'noleggio 40-90 € al giorno in estate più supplemento di sola andata; Zagabria-Spalato 25-30 €' },
    { etichetta: 'Tassa di soggiorno', valore: 'circa 1,50-3 € a persona a notte in alta stagione' },
  ],
}
