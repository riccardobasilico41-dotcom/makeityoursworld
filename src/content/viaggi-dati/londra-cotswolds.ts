import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Londra e le Cotswolds in 8 giorni".
// Il testo narrativo resta nel markdown (src/content/viaggi/96-londra-cotswolds.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..." del markdown.
//
// Proposta costruita sulla ricerca, non un viaggio raccontato da Rick.
// Foto dei giorni da Wikimedia Commons: autori e licenze in docs/uk-registri.md.

const IMG = '/images/viaggi/londra-cotswolds'

export const londraCotswoldsMeta: TripMeta = {
  tripSlug: 'londra-cotswolds',
  paeseSlug: 'inghilterra',
  ritmo:
    'Medio: quattro giorni a Londra quasi tutti a piedi, poi tre giorni in auto tra villaggi vicini, con tratte brevi. L\'ultimo giorno a Bath e il treno per Londra.',
  trasporti:
    'Metropolitana e bus a Londra con la carta contactless, treno da Paddington a Oxford, auto a noleggio da Oxford a Bath per le Cotswolds, treno da Bath Spa a Londra Paddington.',
  stile: ['città', 'campagna', 'musei', 'borghi'],
  adattoA: [
    'chi va a Londra per la prima volta e vuole anche la campagna',
    'chi ama i musei, molti dei quali gratuiti',
    'chi vuole provare la guida a sinistra su pochi chilometri',
    'chi vuole unirlo alla Scozia in un viaggio più lungo',
  ],
  puntiForti: [
    'I grandi musei nazionali di Londra, come il British Museum e il Natural History Museum, con ingresso gratuito',
    'La passeggiata lungo il Tamigi da Westminster a Tower Bridge',
    'I villaggi di pietra delle Cotswolds, da Bibury a Castle Combe',
    'Oxford e Bath lungo la stessa rete di treni da Paddington',
  ],
  criticita: [
    'Dormire a Londra costa molto',
    'Serve l\'ETA e il passaporto: la carta d\'identità non basta',
    'Si guida a sinistra su strade di campagna strette',
    'Bibury e Bourton-on-the-Water sono affollate a metà giornata',
    'Il meteo è variabile in ogni stagione',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: undefined,
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: 'A chi vuole Londra e la campagna inglese in poco più di una settimana, con l\'auto solo per i villaggi',
  },
  tappeMappa: [
    { nome: 'Londra', destinazioneSlug: 'londra' },
    { nome: 'Oxford', destinazioneSlug: 'oxford' },
    { nome: 'Cotswolds', destinazioneSlug: 'cotswolds' },
    { nome: 'Bath', destinazioneSlug: 'bath' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Arrivo a Londra: Westminster e il Tamigi',
      tratta: 'Aeroporto → centro di Londra in metropolitana o treno → Westminster',
      pernottamento: 'Londra, South Bank o Bloomsbury',
      statoPernottamento: 'consigliato',
      intensita: 'leggero',
      destinazioneSlug: 'londra',
      immagine: `${IMG}/giorno-01-westminster.webp`,
      imageAlt: 'Il Big Ben e il Palazzo di Westminster all\'imbrunire, con le scie luminose del traffico sul ponte',
    },
    {
      titoloGiorno: 'Giorno 2 — British Museum, Covent Garden e il West End',
      tratta: 'British Museum → Covent Garden → Trafalgar Square, a piedi',
      pernottamento: 'Londra, South Bank o Bloomsbury',
      statoPernottamento: 'consigliato',
      intensita: 'medio',
      costiNoti: 'British Museum gratuito',
      destinazioneSlug: 'londra',
      immagine: `${IMG}/giorno-02-british-museum.webp`,
      imageAlt: 'La Great Court del British Museum, con la volta di vetro sopra la sala di lettura circolare',
    },
    {
      titoloGiorno: 'Giorno 3 — La Torre, Tower Bridge e il South Bank',
      tratta: 'Torre di Londra → Tower Bridge → Borough Market → Tate Modern → London Eye, a piedi',
      pernottamento: 'Londra, South Bank o Bloomsbury',
      statoPernottamento: 'consigliato',
      intensita: 'intenso',
      destinazioneSlug: 'londra',
      immagine: `${IMG}/giorno-03-tower-bridge.webp`,
      imageAlt: 'Tower Bridge illuminato sul Tamigi al tramonto, con il cielo rosa sopra Londra',
    },
    {
      titoloGiorno: 'Giorno 4 — Notting Hill, Hyde Park e i musei di South Kensington',
      tratta: 'Notting Hill → Kensington Gardens e Hyde Park → South Kensington',
      pernottamento: 'Londra, zona Paddington',
      statoPernottamento: 'consigliato',
      intensita: 'medio',
      costiNoti: 'Natural History Museum gratuito (prenotazione consigliata nei fine settimana)',
      destinazioneSlug: 'londra',
      immagine: `${IMG}/giorno-04-notting-hill.webp`,
      imageAlt: 'Le case colorate di St Luke\'s Mews a Notting Hill, con le porte blu e gialle',
    },
    {
      titoloGiorno: 'Giorno 5 — In treno a Oxford, poi le Cotswolds',
      tratta: 'Londra Paddington → Oxford in treno → ritiro auto → Cotswolds',
      pernottamento: 'Cotswolds, zona Stow-on-the-Wold',
      statoPernottamento: 'consigliato',
      intensita: 'medio',
      destinazioneSlug: 'oxford',
      immagine: `${IMG}/giorno-05-oxford.webp`,
      imageAlt: 'La Radcliffe Camera, la biblioteca circolare con la cupola, in Radcliffe Square a Oxford',
    },
    {
      titoloGiorno: 'Giorno 6 — Bibury, Bourton-on-the-Water e le Slaughter',
      tratta: 'Bibury → Bourton-on-the-Water → Lower e Upper Slaughter a piedi → Stow-on-the-Wold, in auto',
      pernottamento: 'Cotswolds, zona Stow-on-the-Wold',
      statoPernottamento: 'consigliato',
      intensita: 'medio',
      destinazioneSlug: 'cotswolds',
      immagine: `${IMG}/giorno-06-bibury.webp`,
      imageAlt: 'I cottage di pietra color miele di Bibury, con i tetti di lastre di pietra',
    },
    {
      titoloGiorno: 'Giorno 7 — Chipping Campden, Castle Combe e l\'arrivo a Bath',
      tratta: 'Chipping Campden → Broadway → Castle Combe → Bath, in auto',
      pernottamento: 'Bath, centro',
      statoPernottamento: 'consigliato',
      intensita: 'medio',
      destinazioneSlug: 'cotswolds',
      immagine: `${IMG}/giorno-07-castle-combe.webp`,
      imageAlt: 'Il ponte di pietra sul torrente e le case del villaggio di Castle Combe',
    },
    {
      titoloGiorno: 'Giorno 8 — Bath e il rientro a Londra',
      tratta: 'Roman Baths → Abbazia → Royal Crescent a piedi → Bath Spa → Londra Paddington in treno',
      intensita: 'medio',
      destinazioneSlug: 'bath',
      immagine: `${IMG}/giorno-08-bath.webp`,
      imageAlt: 'La terrazza delle terme romane di Bath con le statue degli imperatori, e dietro la torre dell\'abbazia',
    },
  ],
  budget: [
    { etichetta: 'ETA per il Regno Unito', valore: '20 sterline a persona (2026)' },
    { etichetta: 'Congestion Charge a Londra', valore: '18 sterline al giorno (2026), da evitare non usando l\'auto in città' },
    { etichetta: 'Musei nazionali di Londra', valore: 'gratuiti' },
    { etichetta: 'Alloggi, treni, noleggio auto e ingressi a pagamento' },
  ],
}
