import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Brasile in 22 giorni: Rio, Ilha
// Grande, Iguazú, Salvador, Chapada Diamantina e Lençóis Maranhenses". Il
// testo narrativo resta nel markdown (src/content/viaggi/68-brasile-itinerario.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni
// "### Giorno N — ..." del markdown. Le due estensioni (Pantanal e Amazzonia)
// sono sezioni a parte del markdown, non giorni numerati: compaiono qui solo
// in tappeMappa.
// Guida non vissuta: nessun campo miaEsperienza; immagini dei giorni da
// recuperare dopo (campo `immagine` omesso apposta).

export const brasileItinerarioMeta: TripMeta = {
  tripSlug: 'brasile-itinerario',
  paeseSlug: 'brasile',
  ritmo:
    'Vario: giorni pieni di città a Rio e Salvador, giorni di mare lenti a Paraty e Ilha Grande, camminate impegnative nella Chapada Diamantina e quattro giornate quasi intere di trasferimento (Ilha Grande-Iguazú, Iguazú-Salvador, Chapada-São Luís, rientro), inevitabili con le distanze brasiliane.',
  trasporti:
    'Voli interni (Rio-Foz do Iguaçu, Foz-Salvador, Salvador-São Luís e rientro, spesso con scalo a São Paulo o Brasília); bus e transfer sulla Costa Verde e verso la Chapada; barche per Ilha Grande e il Rio Preguiças; 4x4 con autista nei Lençóis Maranhenses; taxi e app in città.',
  stile: ['natura', 'mare', 'cascate', 'città', 'sud america'],
  adattoA: [
    'chi vuole un Brasile più vario di Rio e spiaggia, con cascate, canyon e dune',
    'chi può partire in luglio-agosto, quando le lagune dei Lençóis Maranhenses sono piene',
    'chi accetta qualche giornata di trasferimento in cambio di paesaggi molto diversi',
    'chi vuole aggiungere i giaguari del Pantanal o l\'Amazzonia, fino al confine con Perù e Colombia',
  ],
  puntiForti: [
    'Le lagune d\'acqua piovana tra le dune bianche dei Lençóis Maranhenses',
    'Iguazú da entrambi i lati, con la Garganta del Diablo vista dall\'alto e da sotto',
    'Il Pelourinho di Salvador e la cultura afro-brasiliana di Bahia',
    'Lopes Mendes a Ilha Grande e la baia di Paraty in barca',
    'Due estensioni pronte: Pantanal per i giaguari (economica o di fascia alta) e Amazzonia con proseguimento Tabatinga-Leticia-Iquitos',
  ],
  criticita: [
    'Distanze continentali: quasi ogni cambio di regione è un giorno di viaggio con scalo',
    'Furti di telefoni e scippi a Rio e Salvador: servono regole di prudenza costanti',
    'I Lençóis Maranhenses funzionano solo da giugno a settembre; fuori stagione le lagune sono vuote',
    'Vaccino della febbre gialla raccomandato per Iguazú, Lençóis Maranhenses, Pantanal e Amazzonia',
    'Prezzi di parchi e barche cambiano spesso; Viaggiare Sicuri sconsiglia qualsiasi visita alle favelas, anche guidata',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito: 'in autonomia, con voli interni, bus, barche e 4x4 con autista',
    treEsperienzePiuBelle:
      'Le lagune dei Lençóis Maranhenses al tramonto, la passerella sulla Garganta del Diablo a Iguazú, il tramonto sulla baia di Rio dal Pão de Açúcar',
  },
  tappeMappa: [
    { nome: 'Rio de Janeiro', destinazioneSlug: 'rio-de-janeiro' },
    { nome: 'Paraty e Ilha Grande', destinazioneSlug: 'costa-verde' },
    { nome: 'Cascate di Iguazú', destinazioneSlug: 'foz-do-iguacu' },
    { nome: 'Salvador de Bahia', destinazioneSlug: 'salvador-de-bahia' },
    { nome: 'Chapada Diamantina', destinazioneSlug: 'chapada-diamantina' },
    { nome: 'Lençóis Maranhenses', destinazioneSlug: 'lencois-maranhenses' },
    { nome: 'Estensione A: Pantanal', destinazioneSlug: 'pantanal' },
    { nome: 'Estensione B: Amazzonia da Manaus', destinazioneSlug: 'amazzonia-manaus' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Rio de Janeiro', tratta: 'Aeroporto del Galeão → Ipanema, Leblon o Copacabana', pernottamento: 'Rio, Ipanema o Copacabana', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'rio-de-janeiro', immagine: '/images/viaggi/brasile-itinerario/giorno-01-rio-de-janeiro.jpg', imageAlt: 'Il tramonto sull\'oceano con il morro Dois Irmãos sullo sfondo, visto dall\'Arpoador' },
    { titoloGiorno: 'Giorno 2 — Cristo Redentor e Santa Teresa', pernottamento: 'Rio, Ipanema o Copacabana', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Cristo Redentor con van ufficiale circa 87 R$, prezzo unico tutto l\'anno', destinazioneSlug: 'rio-de-janeiro', immagine: '/images/viaggi/brasile-itinerario/giorno-02-rio-de-janeiro.jpg', imageAlt: 'Il Cristo Redentor sul Corcovado sopra la baia di Rio, con il Pão de Açúcar' },
    { titoloGiorno: 'Giorno 3 — Pão de Açúcar, Copacabana e Ipanema', pernottamento: 'Rio, Ipanema o Copacabana', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'funivia del Pão de Açúcar circa 205 R$ (intero)', destinazioneSlug: 'rio-de-janeiro', immagine: '/images/viaggi/brasile-itinerario/giorno-03-rio-de-janeiro.jpg', imageAlt: 'Il Pão de Açúcar sopra la baia di Guanabara a Rio de Janeiro' },
    { titoloGiorno: 'Giorno 4 — Il centro storico e la notte di Lapa', pernottamento: 'Rio, Ipanema o Copacabana', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'rio-de-janeiro', immagine: '/images/viaggi/brasile-itinerario/giorno-04-rio-de-janeiro.jpg', imageAlt: 'La Escadaria Selarón coperta di piastrelle colorate tra Santa Teresa e Lapa' },
    { titoloGiorno: 'Giorno 5 — Verso Paraty sulla Costa Verde', tratta: 'Rio → Paraty, bus (circa 4 ore e mezza)', pernottamento: 'Paraty, centro storico', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'costa-verde', immagine: '/images/viaggi/brasile-itinerario/giorno-05-costa-verde.jpg', imageAlt: 'Le case coloniali bianche dalle porte colorate e il selciato del centro storico di Paraty' },
    { titoloGiorno: 'Giorno 6 — Paraty: la baia in barca e le cascate', pernottamento: 'Paraty, centro storico', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'escuna nella baia circa 100-150 R$', destinazioneSlug: 'costa-verde', immagine: '/images/viaggi/brasile-itinerario/giorno-06-costa-verde.jpg', imageAlt: 'Le barche colorate ormeggiate lungo la riva della baia di Paraty' },
    { titoloGiorno: 'Giorno 7 — Ilha Grande: arrivo ad Abraão', tratta: 'Paraty → Angra dos Reis o Conceição de Jacareí → Ilha Grande, van e barca (circa 3 ore)', pernottamento: 'Ilha Grande, Vila do Abraão', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'costa-verde', immagine: '/images/viaggi/brasile-itinerario/giorno-07-costa-verde.jpg', imageAlt: 'La spiaggia di Vila do Abraão a Ilha Grande, con il molo e la foresta atlantica' },
    { titoloGiorno: 'Giorno 8 — Ilha Grande: Lopes Mendes', pernottamento: 'Ilha Grande, Vila do Abraão', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'costa-verde', immagine: '/images/viaggi/brasile-itinerario/giorno-08-costa-verde.jpg', imageAlt: 'La costa di Ilha Grande dall\'alto, con una lunga spiaggia bianca e la foresta atlantica' },
    { titoloGiorno: 'Giorno 9 — Da Ilha Grande a Foz do Iguaçu', tratta: 'Ilha Grande → aeroporto di Rio (barca e transfer, 3-4 ore) → volo per Foz do Iguaçu, spesso via São Paulo', pernottamento: 'Foz do Iguaçu', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'foz-do-iguacu', immagine: '/images/viaggi/brasile-itinerario/giorno-09-foz-do-iguacu.jpg', imageAlt: 'Il fronte delle cascate di Iguazú tra la foresta subtropicale' },
    { titoloGiorno: 'Giorno 10 — Iguazú, il lato brasiliano e il Parque das Aves', pernottamento: 'Foz do Iguaçu', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'parco brasiliano circa 130 R$ per stranieri (tetto 2026 134 R$), online con orario; Macuco Safari 450-550 R$', destinazioneSlug: 'foz-do-iguacu', immagine: '/images/viaggi/brasile-itinerario/giorno-10-foz-do-iguacu.jpg', imageAlt: 'Le passerelle del lato brasiliano davanti alle cascate di Iguazú' },
    { titoloGiorno: 'Giorno 11 — Iguazú, il lato argentino e la Garganta del Diablo', tratta: 'Foz do Iguaçu → Puerto Iguazú (Argentina), frontiera in taxi o bus', pernottamento: 'Foz do Iguaçu', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'parco argentino 60.000 pesos argentini per stranieri non residenti dal 1° giugno 2026 (circa 40 USD)', destinazioneSlug: 'foz-do-iguacu', immagine: '/images/viaggi/brasile-itinerario/giorno-11-foz-do-iguacu.jpg', imageAlt: 'La passerella sul fiume Iguazú che porta alla Garganta del Diablo, sul lato argentino' },
    { titoloGiorno: 'Giorno 12 — Volo per Salvador de Bahia', tratta: 'Foz do Iguaçu → Salvador, volo con scalo (4-6 ore)', pernottamento: 'Salvador, Pelourinho o Barra', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'salvador-de-bahia', immagine: '/images/viaggi/brasile-itinerario/giorno-12-salvador-de-bahia.jpg', imageAlt: 'Il Farol da Barra a Salvador al tramonto' },
    { titoloGiorno: 'Giorno 13 — Salvador: Pelourinho e Cidade Baixa', pernottamento: 'Salvador, Pelourinho o Barra', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'salvador-de-bahia', immagine: '/images/viaggi/brasile-itinerario/giorno-13-salvador-de-bahia.jpg', imageAlt: 'La piazza in salita del Pelourinho con la chiesa del Rosário dos Pretos e le case coloniali' },
    { titoloGiorno: 'Giorno 14 — Salvador: Bonfim, Rio Vermelho e la cucina bahiana', pernottamento: 'Salvador, Pelourinho o Barra', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'salvador-de-bahia', immagine: '/images/viaggi/brasile-itinerario/giorno-14-salvador-de-bahia.jpg', imageAlt: 'I nastri colorati legati davanti alla facciata della Igreja do Senhor do Bonfim' },
    { titoloGiorno: 'Giorno 15 — Verso la Chapada Diamantina', tratta: 'Salvador → Lençóis (Bahia), bus (6-7 ore)', pernottamento: 'Lençóis, Chapada Diamantina', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'chapada-diamantina', immagine: '/images/viaggi/brasile-itinerario/giorno-15-chapada-diamantina.jpg', imageAlt: 'Le mesas e le valli verdi della Chapada Diamantina' },
    { titoloGiorno: 'Giorno 16 — Chapada: Morro do Pai Inácio e le grotte', pernottamento: 'Lençóis, Chapada Diamantina', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'tour giornaliero 150-300 R$ più guida e ingressi', destinazioneSlug: 'chapada-diamantina', immagine: '/images/viaggi/brasile-itinerario/giorno-16-chapada-diamantina.jpg', imageAlt: 'Il panorama sulle mesas della Chapada Diamantina dall\'alto di una parete di roccia' },
    { titoloGiorno: 'Giorno 17 — Chapada: la Cachoeira da Fumaça o il Poço Azul', pernottamento: 'Lençóis, Chapada Diamantina', statoPernottamento: 'consigliato', intensita: 'intenso', destinazioneSlug: 'chapada-diamantina', immagine: '/images/viaggi/brasile-itinerario/giorno-17-chapada-diamantina.jpg', imageAlt: 'L\'acqua blu in una grotta calcarea allagata della Chapada Diamantina' },
    { titoloGiorno: 'Giorno 18 — Da Lençóis a São Luís', tratta: 'Lençóis → Salvador (bus 6-7 ore) → São Luís, volo con scalo', pernottamento: 'São Luís, centro storico', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'lencois-maranhenses', immagine: '/images/viaggi/brasile-itinerario/giorno-18-lencois-maranhenses.jpg', imageAlt: 'Una via lastricata con le case coloniali nel centro storico di São Luís' },
    { titoloGiorno: 'Giorno 19 — Barreirinhas e il circuito della Lagoa Azul', tratta: 'São Luís → Barreirinhas, van (circa 4 ore); pomeriggio in 4x4 nel parco', pernottamento: 'Barreirinhas', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'jardineira 100-150 R$ a persona per circuito; ingresso al parco gratuito', destinazioneSlug: 'lencois-maranhenses', immagine: '/images/viaggi/brasile-itinerario/giorno-19-lencois-maranhenses.jpg', imageAlt: 'Una laguna turchese tra le dune bianche dei Lençóis Maranhenses' },
    { titoloGiorno: 'Giorno 20 — Lagoa Bonita e le dune all\'alba', pernottamento: 'Barreirinhas', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'lencois-maranhenses', immagine: '/images/viaggi/brasile-itinerario/giorno-20-lencois-maranhenses.jpg', imageAlt: 'Le dune e una laguna dei Lençóis Maranhenses viste dall\'alto di una duna' },
    { titoloGiorno: 'Giorno 21 — Il Rio Preguiças, Caburé e Atins', tratta: 'Barreirinhas → Vassouras → Mandacaru → Caburé → Atins, in barca sul Rio Preguiças', pernottamento: 'Barreirinhas o Atins', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'lencois-maranhenses', immagine: '/images/viaggi/brasile-itinerario/giorno-21-lencois-maranhenses.jpg', imageAlt: 'Le dune e le lagune intorno ad Atins nella luce del tramonto' },
    { titoloGiorno: 'Giorno 22 — Rientro da São Luís', tratta: 'Barreirinhas → São Luís (circa 4 ore) → volo con scalo per l\'Europa', intensita: 'leggero', destinazioneSlug: 'lencois-maranhenses', immagine: '/images/viaggi/brasile-itinerario/giorno-22-lencois-maranhenses.jpg', imageAlt: 'Una laguna d\'acqua piovana davanti al mare di dune dei Lençóis Maranhenses' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: undefined },
    { etichetta: 'Budget giornaliero economico', valore: '350-500 R$ a persona (circa 55-80 €)' },
    { etichetta: 'Budget giornaliero medio', valore: '700-1.100 R$ a persona (circa 110-175 €)' },
    { etichetta: 'Budget giornaliero alto', valore: 'oltre 1.800 R$ a persona (da 280 €)' },
    { etichetta: 'Voli interni', valore: '400-1.200 R$ a tratta prenotati in anticipo' },
    { etichetta: 'Ingressi principali', valore: 'Cristo Redentor circa 87 R$; Pão de Açúcar circa 205 R$; Iguazú brasiliano circa 130 R$, argentino 60.000 ARS (circa 40 USD); Lençóis Maranhenses gratuito' },
    { etichetta: 'Escursioni', valore: 'escuna a Paraty 100-150 R$; Chapada 150-300 R$ al giorno più guida; jardineira nei Lençóis 100-150 R$ a circuito' },
    { etichetta: 'Estensione Pantanal', valore: 'barca per i giaguari intorno a 1.400-1.600 R$ al giorno a barca (4-6 persone); pacchetti completi 9.000-13.000 R$ a persona per 3-4 notti' },
    { etichetta: 'Estensione Amazzonia', valore: 'lodge 800-2.500 R$ a persona a notte; barca veloce Manaus-Tabatinga circa 1.000 R$' },
  ],
}
