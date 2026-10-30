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
    'Vaccino della febbre gialla raccomandato per Iguazú, Chapada, Pantanal e Amazzonia',
    'Prezzi di parchi, barche e regole del parco dei Lençóis (in piano di concessione) cambiano spesso',
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
    { titoloGiorno: 'Giorno 1 — Arrivo a Rio de Janeiro', tratta: 'Aeroporto del Galeão → Ipanema, Leblon o Copacabana', pernottamento: 'Rio, Ipanema o Copacabana', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'rio-de-janeiro', imageAlt: 'Il tramonto dalla Pedra do Arpoador con il morro Dois Irmãos sullo sfondo' },
    { titoloGiorno: 'Giorno 2 — Cristo Redentor e Santa Teresa', pernottamento: 'Rio, Ipanema o Copacabana', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Cristo Redentor con van ufficiale circa 85-90 R$', destinazioneSlug: 'rio-de-janeiro', imageAlt: 'Il Cristo Redentor sul Corcovado sopra la baia di Rio' },
    { titoloGiorno: 'Giorno 3 — Pão de Açúcar, Copacabana e Ipanema', pernottamento: 'Rio, Ipanema o Copacabana', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'funivia del Pão de Açúcar circa 180-200 R$', destinazioneSlug: 'rio-de-janeiro', imageAlt: 'La funivia del Pão de Açúcar al tramonto sopra la baia di Guanabara' },
    { titoloGiorno: 'Giorno 4 — Il centro storico e la notte di Lapa', pernottamento: 'Rio, Ipanema o Copacabana', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'rio-de-janeiro', imageAlt: 'La Escadaria Selarón coperta di piastrelle colorate tra Santa Teresa e Lapa' },
    { titoloGiorno: 'Giorno 5 — Verso Paraty sulla Costa Verde', tratta: 'Rio → Paraty, bus (circa 4 ore e mezza)', pernottamento: 'Paraty, centro storico', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'costa-verde', imageAlt: 'Le case coloniali bianche dalle porte colorate nel centro storico di Paraty' },
    { titoloGiorno: 'Giorno 6 — Paraty: la baia in barca e le cascate', pernottamento: 'Paraty, centro storico', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'escuna nella baia circa 100-150 R$', destinazioneSlug: 'costa-verde', imageAlt: 'Una escuna di legno ancorata in una baia verde della costa di Paraty' },
    { titoloGiorno: 'Giorno 7 — Ilha Grande: arrivo ad Abraão', tratta: 'Paraty → Angra dos Reis o Conceição de Jacareí → Ilha Grande, van e barca (circa 3 ore)', pernottamento: 'Ilha Grande, Vila do Abraão', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'costa-verde', imageAlt: 'Il molo di Vila do Abraão a Ilha Grande con le barche e la foresta alle spalle' },
    { titoloGiorno: 'Giorno 8 — Ilha Grande: Lopes Mendes', pernottamento: 'Ilha Grande, Vila do Abraão', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'costa-verde', imageAlt: 'La spiaggia bianca di Lopes Mendes con la foresta atlantica alle spalle' },
    { titoloGiorno: 'Giorno 9 — Da Ilha Grande a Foz do Iguaçu', tratta: 'Ilha Grande → aeroporto di Rio (barca e transfer, 3-4 ore) → volo per Foz do Iguaçu, spesso via São Paulo', pernottamento: 'Foz do Iguaçu', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'foz-do-iguacu' },
    { titoloGiorno: 'Giorno 10 — Iguazú, il lato brasiliano e il Parque das Aves', pernottamento: 'Foz do Iguaçu', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'parco brasiliano circa 100-110 R$; Macuco Safari 450-550 R$', destinazioneSlug: 'foz-do-iguacu', imageAlt: 'Il fronte delle cascate di Iguazú visto dalla passerella del lato brasiliano' },
    { titoloGiorno: 'Giorno 11 — Iguazú, il lato argentino e la Garganta del Diablo', tratta: 'Foz do Iguaçu → Puerto Iguazú (Argentina), frontiera in taxi o bus', pernottamento: 'Foz do Iguaçu', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'parco argentino circa 35-45 dollari in pesos per i non residenti', destinazioneSlug: 'foz-do-iguacu', imageAlt: 'La Garganta del Diablo vista dalla passerella del lato argentino, avvolta dalla nebbia d\'acqua' },
    { titoloGiorno: 'Giorno 12 — Volo per Salvador de Bahia', tratta: 'Foz do Iguaçu → Salvador, volo con scalo (4-6 ore)', pernottamento: 'Salvador, Pelourinho o Barra', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'salvador-de-bahia', imageAlt: 'Il Farol da Barra a Salvador al tramonto' },
    { titoloGiorno: 'Giorno 13 — Salvador: Pelourinho e Cidade Baixa', pernottamento: 'Salvador, Pelourinho o Barra', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'salvador-de-bahia', imageAlt: 'La piazza in salita del Pelourinho con le case coloniali color pastello' },
    { titoloGiorno: 'Giorno 14 — Salvador: Bonfim, Rio Vermelho e la cucina bahiana', pernottamento: 'Salvador, Pelourinho o Barra', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'salvador-de-bahia', imageAlt: 'I nastri colorati legati al cancello della Igreja do Senhor do Bonfim' },
    { titoloGiorno: 'Giorno 15 — Verso la Chapada Diamantina', tratta: 'Salvador → Lençóis (Bahia), bus (6-7 ore)', pernottamento: 'Lençóis, Chapada Diamantina', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'chapada-diamantina', imageAlt: 'Le case colorate del paese di Lençóis nella Chapada Diamantina' },
    { titoloGiorno: 'Giorno 16 — Chapada: Morro do Pai Inácio e le grotte', pernottamento: 'Lençóis, Chapada Diamantina', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'tour giornaliero 150-300 R$ più guida e ingressi', destinazioneSlug: 'chapada-diamantina', imageAlt: 'Il panorama dal Morro do Pai Inácio sulle mesas della Chapada Diamantina' },
    { titoloGiorno: 'Giorno 17 — Chapada: la Cachoeira da Fumaça o il Poço Azul', pernottamento: 'Lençóis, Chapada Diamantina', statoPernottamento: 'consigliato', intensita: 'intenso', destinazioneSlug: 'chapada-diamantina', imageAlt: 'L\'acqua blu illuminata dal sole nella grotta allagata del Poço Azul' },
    { titoloGiorno: 'Giorno 18 — Da Lençóis a São Luís', tratta: 'Lençóis → Salvador (bus 6-7 ore) → São Luís, volo con scalo', pernottamento: 'São Luís, centro storico', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'lencois-maranhenses', imageAlt: 'Facciate coperte di azulejos portoghesi nel centro storico di São Luís' },
    { titoloGiorno: 'Giorno 19 — Barreirinhas e il circuito della Lagoa Azul', tratta: 'São Luís → Barreirinhas, van (circa 4 ore); pomeriggio in 4x4 nel parco', pernottamento: 'Barreirinhas', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'jardineira 100-150 R$ a persona per circuito', destinazioneSlug: 'lencois-maranhenses', imageAlt: 'Le lagune turchesi tra le dune bianche del circuito della Lagoa Azul' },
    { titoloGiorno: 'Giorno 20 — Lagoa Bonita e le dune all\'alba', pernottamento: 'Barreirinhas', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'lencois-maranhenses', imageAlt: 'Il mare di dune e lagune visto dall\'alto della duna della Lagoa Bonita' },
    { titoloGiorno: 'Giorno 21 — Il Rio Preguiças, Caburé e Atins', tratta: 'Barreirinhas → Vassouras → Mandacaru → Caburé → Atins, in barca sul Rio Preguiças', pernottamento: 'Barreirinhas o Atins', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'lencois-maranhenses', imageAlt: 'La lingua di sabbia di Caburé tra il Rio Preguiças e l\'oceano' },
    { titoloGiorno: 'Giorno 22 — Rientro da São Luís', tratta: 'Barreirinhas → São Luís (circa 4 ore) → volo con scalo per l\'Europa', intensita: 'leggero', destinazioneSlug: 'lencois-maranhenses' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: undefined },
    { etichetta: 'Budget giornaliero economico', valore: '350-500 R$ a persona (circa 55-80 €)' },
    { etichetta: 'Budget giornaliero medio', valore: '700-1.100 R$ a persona (circa 110-175 €)' },
    { etichetta: 'Budget giornaliero alto', valore: 'oltre 1.800 R$ a persona (da 280 €)' },
    { etichetta: 'Voli interni', valore: '400-1.200 R$ a tratta prenotati in anticipo' },
    { etichetta: 'Ingressi principali', valore: 'Cristo Redentor 85-90 R$; Pão de Açúcar 180-200 R$; Iguazú brasiliano 100-110 R$, argentino circa 35-45 dollari' },
    { etichetta: 'Escursioni', valore: 'escuna a Paraty 100-150 R$; Chapada 150-300 R$ al giorno più guida; jardineira nei Lençóis 100-150 R$ a circuito' },
    { etichetta: 'Estensione Pantanal', valore: 'barca per i giaguari intorno a 1.600 R$ per 4 persone; pacchetti completi 9.000-13.000 R$ a persona per 3-4 notti' },
    { etichetta: 'Estensione Amazzonia', valore: 'lodge 800-2.500 R$ a persona a notte; barca veloce Manaus-Tabatinga circa 1.000 R$' },
  ],
}
