import type { TripMeta } from '@/lib/types'

const IMG = '/images/viaggi/brighton-seven-sisters'

export const brightonSevenSistersMeta: TripMeta = {
  tripSlug: 'brighton-seven-sisters',
  paeseSlug: 'inghilterra',
  ritmo:
    'El primer día es un largo paseo junto al Támesis y por Richmond Park, con el tren desde Londres. El segundo es ligero, a pie por Brighton. El tercero es una caminata de unos 6 kilómetros por los acantilados, subiendo y bajando colinas, con autobús a la ida y a la vuelta.',
  trasporti:
    'Tren de Londres Waterloo a Kingston y de Richmond a Waterloo el primer día. Luego tren de Londres Victoria o London Bridge a Brighton, o desde Gatwick. Autobuses 12 y 12X de Brighton a Seven Sisters Country Park, autobús desde East Dean o desde Birling Gap para la vuelta, tren a Londres.',
  stile: ['mare', 'città', 'natura', 'trekking', 'parchi'],
  adattoA: [
    'quien está en Londres y quiere un día o un fin de semana en la costa',
    'quien ama caminar y busca un paisaje de acantilados',
    'quien quiere una noche de fiesta el fin de semana, o al contrario un domingo tranquilo',
    'quien aterriza en Gatwick',
    'quien quiere ver ciervos en libertad a un paso de Londres',
  ],
  puntiForti: [
    'Los acantilados blancos de las Seven Sisters, cortados a pico sobre el canal de la Mancha',
    'El Royal Pavilion, el palacio de estilo indio de Jorge IV',
    'Las Lanes y North Laine, a pie desde la estación',
    'Todo en tren y autobús, a una hora de Londres',
    'Richmond Park con los ciervos y la vista protegida desde Richmond Hill',
  ],
  criticita: [
    'Con lluvia o viento fuerte las Seven Sisters pierden mucho',
    'El viernes y el sábado por la noche Brighton está llena de despedidas de soltero y de soltera',
    'Los acantilados se desprenden: hay que mantenerse lejos del borde',
    'Entre Exceat y Birling Gap no hay servicios',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: 'Kingston upon Thames es donde estudié yo, y tiene un parque precioso; un poco más allá está Richmond Park.',
    conChiSonoPartito: undefined,
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio:
      'A quien está en Londres y tiene de uno a tres días libres: el Támesis y Richmond Park, luego Brighton para la ciudad y las Seven Sisters para la naturaleza, si el día es bueno',
  },
  tappeMappa: [
    { nome: 'Kingston y Richmond Park', destinazioneSlug: 'kingston-richmond-park' },
    { nome: 'Brighton', destinazioneSlug: 'brighton' },
    { nome: 'Seven Sisters', destinazioneSlug: 'seven-sisters' },
  ],
  giorni: [
    {
      titoloGiorno: 'Día 1 — El Támesis al suroeste de Londres: Kingston, Richmond Park y Richmond Hill',
      tratta: 'Londres Waterloo → Kingston en tren → Richmond Park a pie → Richmond Hill → Richmond → Waterloo en tren',
      pernottamento: 'Londres',
      statoPernottamento: 'consigliato',
      intensita: 'medio',
      costiNoti: 'Richmond Park gratuito',
      destinazioneSlug: 'kingston-richmond-park',
      immagine: `${IMG}/giorno-01-richmond-park.jpg`,
      imageAlt: 'Un ciervo rojo entre la hierba alta de Richmond Park, al suroeste de Londres',
    },
    {
      titoloGiorno: 'Día 2 — De Londres a Brighton: el Pier, el Royal Pavilion y las Lanes',
      tratta: 'Londres Victoria o London Bridge → Brighton en tren → North Laine → Royal Pavilion → Lanes → Palace Pier a pie',
      pernottamento: 'Brighton, centro o Kemp Town',
      statoPernottamento: 'consigliato',
      intensita: 'leggero',
      costiNoti: 'Royal Pavilion 21,50 libras; Palace Pier gratuito',
      destinazioneSlug: 'brighton',
      immagine: `${IMG}/giorno-02-royal-pavilion.jpg`,
      imageAlt: 'La India Gate y las cúpulas del Royal Pavilion de Brighton',
    },
    {
      titoloGiorno: 'Día 3 — Las Seven Sisters: de Cuckmere Haven a Birling Gap',
      tratta: 'Brighton → Seven Sisters Country Park en autobús → Cuckmere Haven → acantilados → Birling Gap a pie → autobús y tren a Londres',
      intensita: 'medio',
      costiNoti: 'Sendero gratuito; aparcamientos de pago',
      destinazioneSlug: 'seven-sisters',
      immagine: `${IMG}/giorno-03-seven-sisters.jpg`,
      imageAlt: 'Los acantilados blancos de las Seven Sisters vistos desde la playa de guijarros de Cuckmere Haven',
    },
  ],
  budget: [
    { etichetta: 'ETA para el Reino Unido', valore: '20 libras por persona (2026)' },
    { etichetta: 'Richmond Park y Kingston', valore: 'gratuitos' },
    { etichetta: 'Royal Pavilion', valore: '21,50 libras, un 5% menos online (2026)' },
    { etichetta: 'Brighton i360', valore: 'desde unas 18,50 libras online (2026)' },
    { etichetta: 'Aparcamientos en las Seven Sisters', valore: 'de 3,50 a 7 libras en Exceat, de 2 a 8 en Birling Gap (2026)' },
    { etichetta: 'Tren desde Londres, alojamiento y comidas' },
  ],
}
