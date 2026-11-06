import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Hokkaido e lo sci in Giappone" (src/content/viaggi/93-hokkaido-sci-giappone.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..." del markdown.
// Guida con itinerario d'esempio, senza ricordi personali. Prezzi stagione 2026-27. Niente foto per ora.

export const hokkaidoSciGiapponeMeta: TripMeta = {
  tripSlug: 'hokkaido-sci-giappone',
  paeseSlug: 'giappone',
  provenienza: 'journey',
  mesiConsigliati: [12, 1, 2],
  ritmo:
    'Sette giorni di sci su undici, con due giorni a Sapporo e due trasferimenti lunghi (Sapporo-Niseko e Niseko-Furano). Il giorno con la guida nel fuori pista fa anche da giorno di riposo.',
  trasporti:
    'Volo su New Chitose, treno JR Rapid Airport per Sapporo, bus stagionali da prenotare per Kiroro, Niseko e Rusutsu, treno o bus Sapporo-Furano, rientro da Asahikawa o New Chitose.',
  stile: ['sci', 'neve polverosa', 'onsen', 'inverno'],
  adattoA: [
    'chi scia o va in snowboard e cerca la neve polverosa',
    'chi vuole unire lo sci a Sapporo e al Yuki Matsuri',
    'chi sa prenotare con molti mesi di anticipo',
    'chi vuole capire se scegliere Hokkaido o Hakuba',
  ],
  puntiForti: [
    'La neve leggera e frequente di Hokkaido tra metà dicembre e febbraio',
    'Niseko United: quattro stazioni sullo stesso monte con un unico skipass e lo sci notturno',
    'Rusutsu e Furano, con meno folla di Niseko',
    'Il Yuki Matsuri di Sapporo, nel 2027 dal 4 all\'11 febbraio',
    'Onsen dopo le piste, in quasi ogni stazione',
  ],
  criticita: [
    'Gli alloggi di Niseko per le feste si prenotano con molti mesi di anticipo, e costano molto',
    'Il fuori pista a Niseko si fa solo dai cancelli aperti, con casco e ARTVA; il soccorso costa almeno 100.000 yen',
    'Freddo intenso in quota e seggiovie aperte',
    'Due giornate se ne vanno quasi tutte in trasferimento',
    'Con nevicate forti treni, strade e voli da New Chitose rallentano',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: undefined,
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: 'A chi cerca la neve polverosa e organizza il viaggio con molto anticipo',
  },
  tappeMappa: [
    { nome: 'Sapporo', destinazioneSlug: 'sapporo' },
    { nome: 'Otaru e Kiroro', destinazioneSlug: 'niseko' },
    { nome: 'Niseko e Rusutsu', destinazioneSlug: 'niseko' },
    { nome: 'Furano', destinazioneSlug: 'furano' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a New Chitose e Sapporo', tratta: 'New Chitose → Sapporo (JR Rapid Airport)', pernottamento: 'Sapporo', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'sapporo', immagine: '/images/viaggi/hokkaido-sci-giappone/giorno-01-tv-tower-sapporo.webp', imageAlt: "La TV Tower di Sapporo illuminata di sera, sopra il parco di Odori innevato" },
    { titoloGiorno: 'Giorno 2 — Sapporo e il Yuki Matsuri', tratta: 'Nijo → Odori → Susukino', pernottamento: 'Sapporo', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'sapporo', immagine: '/images/viaggi/hokkaido-sci-giappone/giorno-02-yuki-matsuri.webp', imageAlt: "Il parco di Odori durante il Yuki Matsuri visto dalla TV Tower, con le sculture di neve in fila" },
    { titoloGiorno: 'Giorno 3 — Otaru e Kiroro', tratta: 'Sapporo → Kiroro (bus) → Otaru → Sapporo', pernottamento: 'Sapporo', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'niseko', immagine: '/images/viaggi/hokkaido-sci-giappone/giorno-03-otaru.webp', imageAlt: "Le lanterne nella neve lungo il canale di Otaru durante lo Yuki Akari no Michi" },
    { titoloGiorno: 'Giorno 4 — Trasferimento a Niseko', tratta: 'Sapporo → Niseko (bus, o treno con cambio a Otaru)', pernottamento: 'Niseko', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'niseko', immagine: '/images/viaggi/hokkaido-sci-giappone/giorno-04-yotei-annupuri.webp', imageAlt: "Il monte Yōtei visto dalle piste del Niseko Annupuri" },
    { titoloGiorno: 'Giorno 5 — Niseko: Hanazono e Grand Hirafu', tratta: 'Hanazono e Grand Hirafu', pernottamento: 'Niseko', statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: 'Skipass Niseko United 1 giorno 13.500 yen in alta stagione 2026-27', destinazioneSlug: 'niseko', immagine: '/images/viaggi/hokkaido-sci-giappone/giorno-05-grand-hirafu.webp', imageAlt: "Le piste di Grand Hirafu sul fianco del Niseko Annupuri, viste dalla valle" },
    { titoloGiorno: 'Giorno 6 — Niseko: Niseko Village e Annupuri', tratta: 'Niseko Village e Annupuri', pernottamento: 'Niseko', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'niseko', immagine: '/images/viaggi/hokkaido-sci-giappone/giorno-06-annupuri.webp', imageAlt: "Il Niseko Annupuri innevato con le piste del versante sud" },
    { titoloGiorno: 'Giorno 7 — Niseko: il fuori pista con una guida', tratta: 'Niseko, cancelli del fuori pista', pernottamento: 'Niseko', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'niseko', immagine: '/images/viaggi/hokkaido-sci-giappone/giorno-07-fuoripista.webp', imageAlt: "Il monte Yōtei e il Niseko Annupuri visti dai pendii del Weisshorn, nella neve fresca" },
    { titoloGiorno: 'Giorno 8 — Rusutsu', tratta: 'Niseko → Rusutsu → Niseko', pernottamento: 'Niseko', statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: 'Skipass Rusutsu 1 giorno 16.700 yen alla cassa, 13.200 online (stagione regolare 2026-27)', destinazioneSlug: 'niseko' },
    { titoloGiorno: 'Giorno 9 — Da Niseko a Furano', tratta: 'Niseko → Sapporo → Furano', pernottamento: 'Furano', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'furano', immagine: '/images/viaggi/hokkaido-sci-giappone/giorno-09-biei.webp', imageAlt: "Un albero solo in cima a una collina innevata di Biei, sotto il cielo blu" },
    { titoloGiorno: 'Giorno 10 — Furano', tratta: 'Piste di Furano (o Asahidake con guida)', pernottamento: 'Furano', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'furano', immagine: '/images/viaggi/hokkaido-sci-giappone/giorno-10-furano.webp', imageAlt: "Le piste della zona Kitanomine di Furano, sopra la cittadina" },
    { titoloGiorno: 'Giorno 11 — Rientro', tratta: 'Furano → Asahikawa o New Chitose → rientro', pernottamento: 'nessun pernottamento (giorno di partenza)', intensita: 'leggero', destinazioneSlug: 'furano' },
  ],
  budget: [
    { etichetta: 'Voli', valore: undefined },
    { etichetta: 'Skipass Niseko United 7 giorni, alta stagione 2026-27', valore: '91.500 yen' },
    { etichetta: 'Bus New Chitose-Rusutsu, a tratta (online, 2026-27)', valore: '5.000 yen' },
    { etichetta: 'Alloggio', valore: undefined },
    { etichetta: 'Noleggio attrezzatura', valore: undefined },
    { etichetta: 'Totale', valore: undefined },
  ],
}
