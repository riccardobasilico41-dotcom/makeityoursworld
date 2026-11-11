import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Brighton, le Seven Sisters e il Tamigi di Kingston e Richmond".
// Il testo narrativo resta nel markdown (src/content/viaggi/100-brighton-seven-sisters.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..." del markdown.
//
// Luoghi visitati da Rick, fattibili in giornata o in un weekend da Londra.
// Foto dei giorni da Wikimedia Commons: autori e licenze in viaggi-giorno-foto-crediti.ts.

const IMG = '/images/viaggi/brighton-seven-sisters'

export const brightonSevenSistersMeta: TripMeta = {
  tripSlug: 'brighton-seven-sisters',
  paeseSlug: 'inghilterra',
  provenienza: 'journey',
  mesiConsigliati: [5, 6, 7, 9],
  ritmo:
    'Il primo giorno è una lunga passeggiata lungo il Tamigi e dentro Richmond Park, con il treno da Londra. Il secondo è leggero, a piedi per Brighton. Il terzo è una camminata di circa 6 chilometri sulle scogliere, su e giù per le colline, con il bus all\'andata e al ritorno.',
  trasporti:
    'Treno da Londra Waterloo a Kingston e da Richmond a Waterloo il primo giorno. Poi treno da Londra Victoria o London Bridge a Brighton, oppure da Gatwick. Bus 12 e 12X da Brighton a Seven Sisters Country Park, bus da East Dean o da Birling Gap per il ritorno, treno per Londra.',
  stile: ['mare', 'città', 'natura', 'trekking', 'parchi'],
  adattoA: [
    'chi è a Londra e vuole un giorno o un weekend al mare',
    'chi ama camminare e cerca un panorama da scogliera',
    'chi vuole una sera di festa nel weekend, o al contrario una domenica tranquilla',
    'chi atterra a Gatwick',
    'chi vuole vedere i cervi in libertà a un passo da Londra',
  ],
  puntiForti: [
    'Le scogliere bianche delle Seven Sisters, a picco sulla Manica',
    'Il Royal Pavilion, il palazzo in stile indiano di Giorgio IV',
    'Le Lanes e North Laine, a piedi dalla stazione',
    'Tutto in treno e bus, a un\'ora da Londra',
    'Richmond Park con i cervi e la vista protetta da Richmond Hill',
  ],
  criticita: [
    'Con pioggia o vento forte le Seven Sisters perdono molto',
    'Il venerdì e il sabato sera Brighton è piena di addii al celibato e al nubilato',
    'Le scogliere franano: bisogna stare lontani dal bordo',
    'Tra Exceat e Birling Gap non ci sono servizi',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: 'Kingston upon Thames è dove ho studiato io, e ha un parco bellissimo; poco più in là c\'è Richmond Park.',
    conChiSonoPartito: undefined,
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio:
      'A chi è a Londra e ha da uno a tre giorni liberi: il Tamigi e Richmond Park, poi Brighton per la città e le Seven Sisters per la natura, se la giornata è bella',
  },
  tappeMappa: [
    { nome: 'Kingston e Richmond Park', destinazioneSlug: 'kingston-richmond-park' },
    { nome: 'Brighton', destinazioneSlug: 'brighton' },
    { nome: 'Seven Sisters', destinazioneSlug: 'seven-sisters' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Il Tamigi a sud-ovest di Londra: Kingston, Richmond Park e Richmond Hill',
      tratta: 'Londra Waterloo → Kingston in treno → Richmond Park a piedi → Richmond Hill → Richmond → Waterloo in treno',
      pernottamento: 'Londra',
      statoPernottamento: 'consigliato',
      intensita: 'medio',
      costiNoti: 'Richmond Park gratuito',
      destinazioneSlug: 'kingston-richmond-park',
      immagine: `${IMG}/giorno-01-richmond-park.jpg`,
      imageAlt: 'Un cervo rosso tra l\'erba alta di Richmond Park, a sud-ovest di Londra',
    },
    {
      titoloGiorno: 'Giorno 2 — Da Londra a Brighton: il Pier, il Royal Pavilion e le Lanes',
      tratta: 'Londra Victoria o London Bridge → Brighton in treno → North Laine → Royal Pavilion → Lanes → Palace Pier a piedi',
      pernottamento: 'Brighton, centro o Kemp Town',
      statoPernottamento: 'consigliato',
      intensita: 'leggero',
      costiNoti: 'Royal Pavilion 21,50 sterline; Palace Pier gratuito',
      destinazioneSlug: 'brighton',
      immagine: `${IMG}/giorno-02-royal-pavilion.jpg`,
      imageAlt: 'La India Gate e le cupole del Royal Pavilion di Brighton',
    },
    {
      titoloGiorno: 'Giorno 3 — Le Seven Sisters: da Cuckmere Haven a Birling Gap',
      tratta: 'Brighton → Seven Sisters Country Park in bus → Cuckmere Haven → scogliere → Birling Gap a piedi → bus e treno per Londra',
      intensita: 'medio',
      costiNoti: 'Sentiero gratuito; parcheggi a pagamento',
      destinazioneSlug: 'seven-sisters',
      immagine: `${IMG}/giorno-03-seven-sisters.jpg`,
      imageAlt: 'Le scogliere bianche delle Seven Sisters viste dalla spiaggia di ciottoli di Cuckmere Haven',
    },
  ],
  budget: [
    { etichetta: 'ETA per il Regno Unito', valore: '20 sterline a persona (2026)' },
    { etichetta: 'Richmond Park e Kingston', valore: 'gratuiti' },
    { etichetta: 'Royal Pavilion', valore: '21,50 sterline, 5% in meno online (2026)' },
    { etichetta: 'Brighton i360', valore: 'da circa 18,50 sterline online (2026)' },
    { etichetta: 'Parcheggi alle Seven Sisters', valore: 'da 3,50 a 7 sterline a Exceat, da 2 a 8 a Birling Gap (2026)' },
    { etichetta: 'Treno da Londra, alloggio e pasti' },
  ],
}
