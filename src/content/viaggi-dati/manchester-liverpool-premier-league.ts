import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Manchester e Liverpool in un weekend lungo".
// Il testo narrativo resta nel markdown (src/content/viaggi/99-manchester-liverpool-premier-league.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..." del markdown.
//
// Zone che Rick ha visitato molte volte (il fratello ha vissuto quattro anni nel nord dell'Inghilterra).
// Foto dei giorni da Wikimedia Commons: autori e licenze in viaggi-giorno-foto-crediti.ts.

const IMG = '/images/viaggi/manchester-liverpool-premier-league'

export const manchesterLiverpoolPremierLeagueMeta: TripMeta = {
  tripSlug: 'manchester-liverpool-premier-league',
  paeseSlug: 'inghilterra',
  provenienza: 'combined',
  mesiConsigliati: [5, 9],
  ritmo:
    'Medio: due giorni a Manchester e due a Liverpool quasi tutti a piedi, con il tram e un\'ora di treno tra le due città. L\'estensione è più faticosa, con camminate in collina e trasferimenti in treno e bus.',
  trasporti:
    'Treno dall\'aeroporto di Manchester a Piccadilly, tram Metrolink e bus a Manchester, treno Manchester-Liverpool, bus a Liverpool. Per l\'estensione treni Northern per Edale e per Windermere, poi bus 599 e 555 nel Lake District.',
  stile: ['città', 'calcio', 'musei', 'natura'],
  adattoA: [
    'chi vuole vedere una partita di Premier League o fare il tour di uno stadio',
    'chi ama i Beatles e la musica',
    'chi cerca un\'Inghilterra meno cosmopolita di Londra',
    'chi vuole aggiungere qualche giorno di camminate nei parchi nazionali',
  ],
  puntiForti: [
    'Quattro stadi di Premier League in due città a un\'ora di treno',
    'I quartieri di mattoni rossi di Manchester e i docks di Liverpool',
    'Molti musei gratuiti, dalla John Rylands Library al Museum of Liverpool',
    'Il Peak District e il Lake District raggiungibili in treno',
  ],
  criticita: [
    'I biglietti delle partite si comprano solo con la membership del club, e per le partite più richieste c\'è il sorteggio',
    'Serve l\'ETA e il passaporto: la carta d\'identità non basta',
    'Pioggia frequente in ogni stagione, e vento sui crinali',
    'Nei weekend di partita gli alberghi costano di più',
    'Nel Lake District senza auto alcuni posti, come Hill Top, sono scomodi',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto:
      'Mio fratello ha vissuto quattro anni nel nord dell\'Inghilterra, quindi sono andato tantissime volte a visitare quelle zone.',
    conChiSonoPartito: undefined,
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio:
      'A chi vuole la Premier League e un\'Inghilterra più autentica di Londra, con qualche giorno di natura in più',
  },
  tappeMappa: [
    { nome: 'Manchester', destinazioneSlug: 'manchester' },
    { nome: 'Liverpool', destinazioneSlug: 'liverpool' },
    { nome: 'Peak District', destinazioneSlug: 'peak-district' },
    { nome: 'Lake District', destinazioneSlug: 'lake-district' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Arrivo a Manchester: Northern Quarter e Ancoats',
      tratta: 'Aeroporto di Manchester → Piccadilly in treno → Northern Quarter e Ancoats a piedi',
      pernottamento: 'Manchester, centro',
      statoPernottamento: 'consigliato',
      intensita: 'leggero',
      destinazioneSlug: 'manchester',
      immagine: `${IMG}/giorno-01-northern-quarter.jpg`,
      imageAlt: 'Murales colorati e persone sedute fuori da un locale nel Northern Quarter di Manchester',
    },
    {
      titoloGiorno: 'Giorno 2 — Manchester: musei, Castlefield e la partita',
      tratta: 'John Rylands Library → National Football Museum → Castlefield → Old Trafford o Etihad in tram',
      pernottamento: 'Manchester, centro',
      statoPernottamento: 'consigliato',
      intensita: 'medio',
      costiNoti: 'John Rylands Library gratuita; tour dell\'Old Trafford da 28 sterline online',
      destinazioneSlug: 'manchester',
      immagine: `${IMG}/giorno-02-old-trafford.jpg`,
      imageAlt: 'L\'Old Trafford, lo stadio del Manchester United, visto dall\'alto',
    },
    {
      titoloGiorno: 'Giorno 3 — In treno a Liverpool: Albert Dock, Pier Head e il Mersey',
      tratta: 'Manchester Piccadilly → Liverpool Lime Street in treno → Royal Albert Dock → Pier Head a piedi',
      pernottamento: 'Liverpool, centro o waterfront',
      statoPernottamento: 'consigliato',
      intensita: 'medio',
      costiNoti: 'Beatles Story 20 sterline; crociera sul Mersey 14 sterline',
      destinazioneSlug: 'liverpool',
      immagine: `${IMG}/giorno-03-albert-dock.jpg`,
      imageAlt: 'I magazzini di mattoni rossi del Royal Albert Dock di Liverpool, riflessi nel bacino',
    },
    {
      titoloGiorno: 'Giorno 4 — Liverpool: le cattedrali, il Cavern Club e Anfield',
      tratta: 'Hope Street e le due cattedrali → Mathew Street → Anfield in bus',
      pernottamento: 'Manchester, centro (per l\'estensione)',
      statoPernottamento: 'consigliato',
      intensita: 'medio',
      costiNoti: 'Tour di Anfield 26 sterline',
      destinazioneSlug: 'liverpool',
      immagine: `${IMG}/giorno-04-cattedrale-liverpool.jpg`,
      imageAlt: 'La cattedrale anglicana di Liverpool, di arenaria rossa, con la grande torre',
    },
    {
      titoloGiorno: 'Giorno 5 — Estensione: Peak District, da Edale a Castleton passando da Mam Tor',
      tratta: 'Manchester Piccadilly → Edale in treno → Mam Tor → Castleton a piedi → Hope in treno',
      pernottamento: 'Manchester, centro',
      statoPernottamento: 'consigliato',
      intensita: 'intenso',
      costiNoti: 'Peak Cavern 22,25 sterline online',
      destinazioneSlug: 'peak-district',
      immagine: `${IMG}/giorno-05-mam-tor.jpg`,
      imageAlt: 'Il crinale di Mam Tor nel Peak District, con il sentiero lastricato e le valli verdi ai lati',
    },
    {
      titoloGiorno: 'Giorno 6 — Estensione: Lake District, Windermere, Ambleside e Grasmere',
      tratta: 'Manchester → Windermere in treno → battello Bowness-Ambleside → Grasmere in bus',
      pernottamento: 'Ambleside o Grasmere',
      statoPernottamento: 'consigliato',
      intensita: 'medio',
      costiNoti: 'Battello Bowness-Ambleside da 19,20 sterline; Dove Cottage 16 sterline',
      destinazioneSlug: 'lake-district',
      immagine: `${IMG}/giorno-06-windermere.jpg`,
      imageAlt: 'Il lago di Windermere con le barche ormeggiate e le colline del Lake District',
    },
    {
      titoloGiorno: 'Giorno 7 — Estensione: Keswick, Derwentwater e Catbells, poi il rientro',
      tratta: 'Grasmere → Keswick in bus → battello per Hawes End → Catbells a piedi → Windermere → Manchester',
      intensita: 'intenso',
      destinazioneSlug: 'lake-district',
      immagine: `${IMG}/giorno-07-catbells.jpg`,
      imageAlt: 'Il lago di Derwentwater con le isole boscose e, sullo sfondo, Catbells e le montagne del Lake District',
    },
  ],
  budget: [
    { etichetta: 'ETA per il Regno Unito', valore: '20 sterline a persona (2026)' },
    { etichetta: 'Membership del club per i biglietti', valore: 'da 18,99 a 70 sterline secondo il club (2026-27)' },
    { etichetta: 'Biglietti delle partite', valore: 'da 20 a 75 sterline secondo il club e la partita (2026-27)' },
    { etichetta: 'Tour degli stadi', valore: 'Anfield 26 sterline, Old Trafford da 28 sterline online' },
    { etichetta: 'Tram a Manchester', valore: 'tetto giornaliero 7,10 sterline con la carta contactless' },
    { etichetta: 'Alloggi, treni e pasti' },
  ],
}
