# Inghilterra e Scozia: voci da aggiungere ai registri condivisi

Scritto il 5/11/2026 dall'agente che ha creato i contenuti del Regno Unito. I file nuovi sono già al loro posto; i registri condivisi qui sotto **non** sono stati toccati. Vanno aggiunte a mano le voci seguenti.

## File creati (già presenti)

- Paesi (`tipo: 'regione'`, `stato: 'Regno Unito'`, continente Europa): `src/content/paesi/inghilterra.ts` (`inghilterra`), `src/content/paesi/scozia.ts` (`scozia`)
- Destinazioni: `src/content/destinazioni/inghilterra.ts` (`destinazioniInghilterra`: londra, cotswolds, oxford, bath), `src/content/destinazioni/scozia.ts` (`destinazioniScozia`: edimburgo, glasgow, loch-lomond-glencoe, oban, fort-william-glenfinnan, isola-di-skye, inverness-loch-ness, speyside, cairngorms, north-coast-500)
- Viaggi: `src/content/viaggi/96-londra-cotswolds.md` (slug `londra-cotswolds`) e `src/content/viaggi/97-scozia-highlands-distillerie.md` (slug `scozia-highlands-distillerie`)
- Dati viaggio: `src/content/viaggi-dati/londra-cotswolds.ts` (`londraCotswoldsMeta`), `src/content/viaggi-dati/scozia-highlands-distillerie.ts` (`scoziaHighlandsDistillerieMeta`)
- Copie en/es con gli stessi nomi ed export in `src/content/i18n/{en,es}/{paesi,destinazioni,viaggi,viaggi-dati}/`
- Nessuna esperienza: `esperienzeSlugs: []` ovunque.
- Foto (webp ≤200 KB): `public/images/copertine/londra-cotswolds.webp`, `public/images/copertine/scozia-highlands-distillerie.webp`, `public/images/viaggi/londra-cotswolds/` (8 giorni), `public/images/viaggi/scozia-highlands-distillerie/` (12 giorni + glasgow-cattedrale, glencoe-three-sisters, nc500-bealach-na-ba). Gli hero dei Paesi riusano foto dei giorni.

Nota: i due .md sono già letti dal parser (readdirSync), quindi i viaggi compaiono anche prima dei registri; le pagine Paese e destinazione no.

## 1. `src/lib/geo.ts`

```ts
import { inghilterra } from '@/content/paesi/inghilterra'
import { destinazioniInghilterra } from '@/content/destinazioni/inghilterra'
import { scozia } from '@/content/paesi/scozia'
import { destinazioniScozia } from '@/content/destinazioni/scozia'
import { londraCotswoldsMeta } from '@/content/viaggi-dati/londra-cotswolds'
import { scoziaHighlandsDistillerieMeta } from '@/content/viaggi-dati/scozia-highlands-distillerie'
```
- `PAESI`: aggiungere `inghilterra, scozia`
- `DESTINAZIONI`: aggiungere `...destinazioniInghilterra, ...destinazioniScozia`
- `ESPERIENZE`: niente
- `TRIP_META`: aggiungere `londraCotswoldsMeta, scoziaHighlandsDistillerieMeta`

## 2. `src/content/i18n/en/indice.ts` e `src/content/i18n/es/indice.ts`

Meglio rilanciare `tools/indice-i18n.py`. A mano, stesse righe nei due file:
```ts
import { inghilterra as paesi_inghilterra } from './paesi/inghilterra'
import { scozia as paesi_scozia } from './paesi/scozia'
import { destinazioniInghilterra as destinazioni_destinazioniInghilterra } from './destinazioni/inghilterra'
import { destinazioniScozia as destinazioni_destinazioniScozia } from './destinazioni/scozia'
import { londraCotswoldsMeta as viaggi_dati_londraCotswoldsMeta } from './viaggi-dati/londra-cotswolds'
import { scoziaHighlandsDistillerieMeta as viaggi_dati_scoziaHighlandsDistillerieMeta } from './viaggi-dati/scozia-highlands-distillerie'
```
- `paesi`: `paesi_inghilterra` (dopo `paesi_india`), `paesi_scozia` (dopo `paesi_repubblicaCeca`)
- `destinazioni`: `...destinazioni_destinazioniInghilterra` (dopo `...destinazioni_destinazioniIndia`), `...destinazioni_destinazioniScozia` (dopo `...destinazioni_destinazioniRepubblicaCeca`)
- `tripMeta`: `viaggi_dati_londraCotswoldsMeta` (dopo `viaggi_dati_lofotenEstate2025Meta`), `viaggi_dati_scoziaHighlandsDistillerieMeta` (dopo `viaggi_dati_sardegnaDueAnimeMeta`)

## 3. Slug localizzati

| chiave | en | es |
|---|---|---|
| paesi: `inghilterra` | `england` | `inglaterra` |
| paesi: `scozia` | `scotland` | `escocia` |
| destinazioni: `inghilterra/londra` | `london` | `londres` |
| destinazioni: `inghilterra/cotswolds` | `cotswolds` | `cotswolds` |
| destinazioni: `inghilterra/oxford` | `oxford` | `oxford` |
| destinazioni: `inghilterra/bath` | `bath` | `bath` |
| destinazioni: `scozia/edimburgo` | `edinburgh` | `edimburgo` |
| destinazioni: `scozia/glasgow` | `glasgow` | `glasgow` |
| destinazioni: `scozia/loch-lomond-glencoe` | `loch-lomond-and-glencoe` | `loch-lomond-y-glencoe` |
| destinazioni: `scozia/oban` | `oban` | `oban` |
| destinazioni: `scozia/fort-william-glenfinnan` | `fort-william-and-glenfinnan` | `fort-william-y-glenfinnan` |
| destinazioni: `scozia/isola-di-skye` | `isle-of-skye` | `isla-de-skye` |
| destinazioni: `scozia/inverness-loch-ness` | `inverness-and-loch-ness` | `inverness-y-lago-ness` |
| destinazioni: `scozia/speyside` | `speyside-distilleries` | `speyside-destilerias` |
| destinazioni: `scozia/cairngorms` | `cairngorms` | `cairngorms` |
| destinazioni: `scozia/north-coast-500` | `north-coast-500` | `north-coast-500` |
| viaggi: `londra-cotswolds` | `london-and-the-cotswolds` | `londres-y-los-cotswolds` |
| viaggi: `scozia-highlands-distillerie` | `scotland-road-trip-highlands-distilleries` | `escocia-en-coche-highlands-destilerias` |

In formato gruppo (`src/content/i18n/en/slug/gNN.json`, primo numero libero dopo quelli dell'Irlanda), poi `python3 tools/unisci-slug.py en` / `es`:
```json
{
  "paesi": { "inghilterra": "england", "scozia": "scotland" },
  "destinazioni": {
    "inghilterra/londra": "london", "inghilterra/cotswolds": "cotswolds", "inghilterra/oxford": "oxford", "inghilterra/bath": "bath",
    "scozia/edimburgo": "edinburgh", "scozia/glasgow": "glasgow", "scozia/loch-lomond-glencoe": "loch-lomond-and-glencoe", "scozia/oban": "oban",
    "scozia/fort-william-glenfinnan": "fort-william-and-glenfinnan", "scozia/isola-di-skye": "isle-of-skye", "scozia/inverness-loch-ness": "inverness-and-loch-ness",
    "scozia/speyside": "speyside-distilleries", "scozia/cairngorms": "cairngorms", "scozia/north-coast-500": "north-coast-500"
  },
  "viaggi": { "londra-cotswolds": "london-and-the-cotswolds", "scozia-highlands-distillerie": "scotland-road-trip-highlands-distilleries" }
}
```
```json
{
  "paesi": { "inghilterra": "inglaterra", "scozia": "escocia" },
  "destinazioni": {
    "inghilterra/londra": "londres", "inghilterra/cotswolds": "cotswolds", "inghilterra/oxford": "oxford", "inghilterra/bath": "bath",
    "scozia/edimburgo": "edimburgo", "scozia/glasgow": "glasgow", "scozia/loch-lomond-glencoe": "loch-lomond-y-glencoe", "scozia/oban": "oban",
    "scozia/fort-william-glenfinnan": "fort-william-y-glenfinnan", "scozia/isola-di-skye": "isla-de-skye", "scozia/inverness-loch-ness": "inverness-y-lago-ness",
    "scozia/speyside": "speyside-destilerias", "scozia/cairngorms": "cairngorms", "scozia/north-coast-500": "north-coast-500"
  },
  "viaggi": { "londra-cotswolds": "londres-y-los-cotswolds", "scozia-highlands-distillerie": "escocia-en-coche-highlands-destilerias" }
}
```

## 4. Voci editoriali (`viaggi-editorial.ts` e copie en/es, sezione delle guide in forma neutra)

```ts
// src/content/viaggi-editorial.ts
  'londra-cotswolds': {
    seoTitle: "Londra e Cotswolds in 8 giorni: Oxford, villaggi e Bath",
    seoDescription:
      "Itinerario di 8 giorni: Londra a piedi e in metro, poi in treno a Oxford e in auto tra i villaggi delle Cotswolds fino a Bath. ETA e guida a sinistra.",
    socialTitle: "Londra senza auto, poi la campagna inglese: 8 giorni fino a Bath",
    editorialHook:
      "L'auto serve solo per tre giorni: si ritira a Oxford e si lascia a Bath. A Londra sarebbe un peso, tra traffico e Congestion Charge.",
    editorialHookType: 'itinerary',
  },
  'scozia-highlands-distillerie': {
    seoTitle: "Scozia in auto in 12 giorni: Highlands, Skye e distillerie",
    seoDescription:
      "Da Edimburgo a Oban, Glencoe, Skye, Loch Ness e Speyside, con le distillerie e la variante North Coast 500. Guida a sinistra e limite alcol più basso.",
    socialTitle: "Scozia in auto: Highlands, Skye, distillerie e la strada del nord",
    editorialHook:
      "In Scozia il limite di alcol alla guida è più basso che in Inghilterra. Il consiglio di Rick è tolleranza zero: in distilleria chi guida si fa dare il driver's dram e lo assaggia la sera.",
    editorialHookType: 'before-you-go',
  },
```
```ts
// src/content/i18n/en/viaggi-editorial.ts
  'londra-cotswolds': {
    seoTitle: "London and the Cotswolds in 8 days: Oxford, villages, Bath",
    seoDescription:
      "An 8-day itinerary: London on foot and by Tube, then the train to Oxford and a car through the Cotswold villages to Bath. ETA and driving on the left.",
    socialTitle: "London without a car, then the English countryside: 8 days to Bath",
    editorialHook:
      "You only need the car for three days: pick it up in Oxford and drop it in Bath. In London it would just be a burden, with traffic and the Congestion Charge.",
    editorialHookType: 'itinerary',
  },
  'scozia-highlands-distillerie': {
    seoTitle: "Scotland road trip in 12 days: Highlands, Skye, distilleries",
    seoDescription:
      "Edinburgh to Oban, Glencoe, Skye, Loch Ness and Speyside, with the distilleries and a North Coast 500 extension. Driving on the left, lower drink limit.",
    socialTitle: "Scotland by car: Highlands, Skye, distilleries and the road north",
    editorialHook:
      "Scotland's drink-drive limit is lower than England's. Rick's advice is zero tolerance: at the distillery, the driver takes the driver's dram away and tastes it in the evening.",
    editorialHookType: 'before-you-go',
  },
```
```ts
// src/content/i18n/es/viaggi-editorial.ts
  'londra-cotswolds': {
    seoTitle: "Londres y los Cotswolds en 8 días: Oxford, pueblos y Bath",
    seoDescription:
      "Itinerario de 8 días: Londres a pie y en metro, luego tren a Oxford y coche por los pueblos de los Cotswolds hasta Bath. ETA y conducir por la izquierda.",
    socialTitle: "Londres sin coche y luego el campo inglés: 8 días hasta Bath",
    editorialHook:
      "El coche solo hace falta tres días: se recoge en Oxford y se deja en Bath. En Londres sería un estorbo, entre tráfico y Congestion Charge.",
    editorialHookType: 'itinerary',
  },
  'scozia-highlands-distillerie': {
    seoTitle: "Escocia en coche en 12 días: Highlands, Skye y destilerías",
    seoDescription:
      "De Edimburgo a Oban, Glencoe, Skye, el Lago Ness y Speyside, con las destilerías y la variante North Coast 500. Conducción por la izquierda.",
    socialTitle: "Escocia en coche: Highlands, Skye, destilerías y la carretera del norte",
    editorialHook:
      "En Escocia el límite de alcohol al volante es más bajo que en Inglaterra. El consejo de Rick es tolerancia cero: en la destilería, quien conduce pide el driver's dram y lo prueba por la noche.",
    editorialHookType: 'before-you-go',
  },
```

## 5. `src/content/seo-pagine.ts` (pagine Paese) e copie en/es

```ts
  inghilterra: {
    seoTitle: "Inghilterra: Londra, Cotswolds, Oxford e Bath in 8 giorni",
    seoDescription:
      "Londra con i musei gratuiti, i villaggi di pietra delle Cotswolds, Oxford e Bath. Scheda pratica verificata: ETA, passaporto, guida a sinistra, prese.",
  },
  scozia: {
    seoTitle: "Scozia in auto: Edimburgo, Highlands, Skye e distillerie",
    seoDescription:
      "Edimburgo, Glencoe, Skye, Oban, Loch Ness, lo Speyside e la North Coast 500. Scheda pratica: ETA, guida a sinistra, strade a una corsia, limite alcol.",
  },
```
en: `inghilterra` → "England: London, the Cotswolds, Oxford and Bath in 8 days" / "London's free museums, the stone villages of the Cotswolds, Oxford and Bath. Checked practical info: ETA, passport, driving on the left, plugs."; `scozia` → "Scotland by car: Edinburgh, Highlands, Skye and distilleries" / "Edinburgh, Glencoe, Skye, Oban, Loch Ness, Speyside and the North Coast 500. Practical info: ETA, driving on the left, single-track roads, drink limit."
es: `inghilterra` → "Inglaterra: Londres, los Cotswolds, Oxford y Bath en 8 días" / "Los museos gratuitos de Londres, los pueblos de piedra de los Cotswolds, Oxford y Bath. Ficha práctica: ETA, pasaporte, conducir por la izquierda."; `scozia` → "Escocia en coche: Edimburgo, Highlands, Skye y destilerías" / "Edimburgo, Glencoe, Skye, Oban, el Lago Ness, Speyside y la North Coast 500. Ficha práctica: ETA, conducción por la izquierda, carreteras de un carril."

## 6. Copertine (`viaggi-copertine.ts` e copie en/es)

```ts
  'londra-cotswolds': {
    immagine: '/images/copertine/londra-cotswolds.webp',
    imageAlt: "Arlington Row a Bibury: i cottage di pietra color miele lungo il sentiero, nelle Cotswolds",
  },
  'scozia-highlands-distillerie': {
    immagine: '/images/copertine/scozia-highlands-distillerie.webp',
    imageAlt: "Il treno a vapore Jacobite sul viadotto di Glenfinnan, tra le colline delle Highlands in autunno",
  },
```
en: "Arlington Row in Bibury: honey-coloured stone cottages along the path, in the Cotswolds" / "The Jacobite steam train on the Glenfinnan Viaduct, among the autumn hills of the Highlands"
es: "Arlington Row en Bibury: casas de piedra color miel junto al sendero, en los Cotswolds" / "El tren de vapor Jacobite sobre el viaducto de Glenfinnan, entre las colinas otoñales de las Highlands"

## 7. Crediti foto

`viaggi-copertine-crediti.ts` → `creditiCopertine`:
```ts
  'londra-cotswolds': { autore: 'Saffron Blaze (Wikimedia Commons)', licenza: 'CC BY-SA 3.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Arlington_Row_Bibury.jpg' },
  'scozia-highlands-distillerie': { autore: 'Eric Kilby (Wikimedia Commons)', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Glenfinnan_Viaduct_-_Jacobite_Express.jpg' },
```

`viaggi-giorno-foto-crediti.ts` → `creditiGiornoFoto` (chiave = titolo italiano del giorno):
```ts
  'londra-cotswolds': {
    'Giorno 1 — Arrivo a Londra: Westminster e il Tamigi': { autore: 'Colin (Wikimedia Commons)', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Big_Ben_at_sunset_-_2014-10-27_17-30.jpg' },
    'Giorno 2 — British Museum, Covent Garden e il West End': { autore: 'Andy Li (Wikimedia Commons)', licenza: 'CC0 1.0 (pubblico dominio)', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Great_Court,_British_Museum_2024-12-20.jpg' },
    'Giorno 3 — La Torre, Tower Bridge e il South Bank': { autore: 'Benh LIEU SONG (Wikimedia Commons)', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Tower_Bridge_London_2022-10-10.jpg' },
    'Giorno 4 — Notting Hill, Hyde Park e i musei di South Kensington': { autore: 'Chris Wood (User:chris_j_wood) (Wikimedia Commons)', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:St_Lukes_Mews,_Notting_Hill,_London_(geograph_6086918).jpg' },
    'Giorno 5 — In treno a Oxford, poi le Cotswolds': { autore: 'Julian Herzog (Wikimedia Commons)', licenza: 'CC BY 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Radcliffe_Camera_Oxford_2018_02.jpg' },
    'Giorno 6 — Bibury, Bourton-on-the-Water e le Slaughter': { autore: 'Mike Peel (Wikimedia Commons)', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Bibury_2015_04.jpg' },
    'Giorno 7 — Chipping Campden, Castle Combe e l\'arrivo a Bath': { autore: 'Saffron Blaze (Wikimedia Commons)', licenza: 'CC BY-SA 3.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Castle_combe_cotswolds.jpg' },
    'Giorno 8 — Bath e il rientro a Londra': { autore: 'Suicasmo (Wikimedia Commons)', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Roman_Baths_with_Bath_Abbey_20140310.jpg' },
  },
  'scozia-highlands-distillerie': {
    'Giorno 1 — Arrivo a Edimburgo: la Old Town e il Royal Mile': { autore: 'Daniel Kraft (Wikimedia Commons)', licenza: 'CC BY-SA 3.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Edinburgh_cannon_and_old_town_20211020.jpg' },
    'Giorno 2 — Edimburgo: il castello e Arthur\'s Seat': { autore: 'Matti Blume (Wikimedia Commons)', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Castle,_City_of_Edinburgh_(IMG_20190628_180330).jpg' },
    'Giorno 3 — Glasgow, il Loch Lomond e la strada per Oban': { autore: 'Michal Klajban (Wikimedia Commons)', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:View_towards_Loch_Lomond_from_Beinn_Eich,_Luss_Hills,_Scotland.jpg' },
    'Giorno 4 — Oban: la distilleria, la McCaig\'s Tower e la cena da Ee-Usk': { autore: 'Mike Hudson (Wikimedia Commons)', licenza: 'CC BY-SA 3.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Oban_Harbour_and_McCaig%27s_Tower.jpg' },
    'Giorno 5 — Glencoe e Fort William': { autore: 'Colin (Wikimedia Commons)', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Lagangarbh_cottage_with_Buachaille_Etive_M%C3%B2r.jpg' },
    'Giorno 6 — Glenfinnan e la strada per Skye': { autore: 'Daniel Kraft (Wikimedia Commons)', licenza: 'CC BY-SA 3.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Jacobite_on_Glenfinnan_Viaduct_2_20211024.jpg' },
    'Giorno 7 — Skye: l\'Old Man of Storr e il Quiraing': { autore: 'Colin (Wikimedia Commons)', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:North_over_the_Quiraing,_Isle_of_Skye.jpg' },
    'Giorno 8 — Skye: le Fairy Pools e Talisker': { autore: 'DeFacto (Wikimedia Commons)', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Talisker_distillery.jpg' },
    'Giorno 9 — Da Skye a Inverness lungo Loch Ness': { autore: 'BIG ALBERT (Wikimedia Commons)', licenza: 'CC0 1.0 (pubblico dominio)', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Urquhart_Castle_on_Loch_Ness.jpg' },
    'Giorno 10 — Speyside: il giro delle distillerie': { autore: 'Markus Trienke (Wikimedia Commons)', licenza: 'CC BY-SA 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Glenfiddich_Distillery,_Dufftown_(43983755351).jpg' },
    'Giorno 11 — I Cairngorms, Dalwhinnie e il ritorno a Edimburgo': { autore: 'David Purchase (Wikimedia Commons)', licenza: 'CC BY-SA 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Loch_Morlich_and_the_Cairngorms_-_geograph.org.uk_-_7632694.jpg' },
    'Giorno 12 — Rientro da Edimburgo': { autore: 'Peter S (Wikimedia Commons)', licenza: 'CC BY-SA 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Royal_Mile,_Edinburgh_-_geograph.org.uk_-_1970888.jpg' },
  },
```

`destinazioni-foto-crediti.ts` → `creditiDestinazioni` (solo le foto di destinazione che non sono già foto di un giorno):
```ts
  'scozia/glasgow': { autore: 'Euan Nelson (Wikimedia Commons)', licenza: 'CC BY-SA 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Glasgow_Cathedral_from_the_Necropolis_-_geograph.org.uk_-_4859898.jpg' },
  'scozia/loch-lomond-glencoe': { autore: 'rboed* (Wikimedia Commons)', licenza: 'CC BY 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:The_Three_Sisters,_Glencoe,_Scotland.jpg' },
  'scozia/north-coast-500': { autore: 'Jooniur (Wikimedia Commons)', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Bealach_na_ba.jpg' },
```
Tutte verificate sulla pagina del file Commons (API extmetadata) il 5/11/2026. Le CC BY-SA chiedono attribuzione e stessa licenza per le opere derivate (ridimensionamento e conversione in webp).

## 8. Coordinate (`src/content/mappe/coordinate.ts`, file generato da `tools/mappe/geocodifica.mjs`)

In `tools/mappe/query.mjs` le query sensate per i nomi composti:
```js
  'inghilterra/cotswolds': 'Stow-on-the-Wold',
  'inghilterra/bath': 'Bath, Somerset',
  'scozia/loch-lomond-glencoe': 'Glencoe',
  'scozia/fort-william-glenfinnan': 'Fort William',
  'scozia/isola-di-skye': 'Portree',
  'scozia/inverness-loch-ness': 'Inverness',
  'scozia/speyside': 'Dufftown',
  'scozia/cairngorms': 'Aviemore',
  'scozia/north-coast-500': 'Durness',
```
Valori verificati su OpenStreetMap Nominatim il 05/11/2026, se si preferisce scriverli a mano in `coordinateDestinazioni`:
```ts
  'inghilterra/londra': [51.50745, -0.12777],
  'inghilterra/cotswolds': [51.93034, -1.72302],
  'inghilterra/oxford': [51.75201, -1.25785],
  'inghilterra/bath': [51.38139, -2.35970],
  'scozia/edimburgo': [55.95335, -3.18837],
  'scozia/glasgow': [55.86115, -4.25017],
  'scozia/loch-lomond-glencoe': [56.68276, -5.10146],
  'scozia/oban': [56.41202, -5.47237],
  'scozia/fort-william-glenfinnan': [56.81783, -5.11095],
  'scozia/isola-di-skye': [57.41305, -6.19445],
  'scozia/inverness-loch-ness': [57.47901, -4.22574],
  'scozia/speyside': [57.44490, -3.12835],
  'scozia/cairngorms': [57.19375, -3.82893],
  'scozia/north-coast-500': [58.56851, -4.74703],
```
(Loch Lomond e Glencoe sono una scheda sola: il punto è il villaggio di Glencoe. La North Coast 500 è un anello: il punto è Durness, sulla costa nord.) Nelle `tappeMappa` dei viaggi non ho scritto `lat`/`lng`: tutte le tappe hanno una scheda destinazione.

## 9. Atlante / mappa Paese: servono dati nuovi

Sì. Mancano `src/content/mappe/inghilterra.json`, `inghilterra-atlante.json`, `scozia.json`, `scozia-atlante.json` e i rilievi in `public/images/mappe/`. Il problema: in world-atlas countries-50m il Regno Unito è una feature sola, e la Gran Bretagna è un unico poligono, quindi un `clip` non separa Inghilterra e Scozia (diverso dall'Irlanda del Nord, che è su un'altra isola). Serve una geometria con le quattro nazioni separate, per esempio Natural Earth `admin_0_map_units` (feature «England», «Scotland», pubblico dominio) o `admin_1_states_provinces` unendo le contee. Proposta per `tools/mappe/config.mjs`, con una nuova fonte `'mapunits'`:
```js
inghilterra: { fonte: 'mapunits', nomi: ['England'], cc: 'gb' },
// con le isole: Skye, Mull, Islay e le Ebridi sono parte del viaggio
scozia: { fonte: 'mapunits', nomi: ['Scotland'], cc: 'gb', isole: 'tutte' },
```
Va aggiunta la fonte in `contorni.mjs`/`atlante.mjs`. Ripiego senza dati nuovi: `{ fonte: 'world', nomi: ['United Kingdom'], clip: [-8.7, 49.8, 2, 61], cc: 'gb' }` per entrambi, cioè tutta la Gran Bretagna (le tappe cadrebbero nella metà giusta, ma la sagoma sarebbe del Regno Unito).

## 10. Abbinamenti (`src/components/ProssimaDestinazione.tsx`, `ABBINAMENTI`)

```ts
  'londra-cotswolds': 'scozia-highlands-distillerie',
  'scozia-highlands-distillerie': 'irlanda-due-irlande',
  'irlanda-due-irlande': 'scozia-highlands-distillerie',
```
Nel markdown di Londra c'è già «Con la Scozia» (sezione «Come cambia con più o meno giorni»), senza link: si può aggiungere `[Scozia in auto](/viaggi/scozia-highlands-distillerie)` nelle tre lingue. Nel markdown dell'Irlanda la variante «Con la Scozia» può puntare allo stesso slug. I traghetti Irlanda del Nord-Scozia non li ho verificati.

## 11. Consigliati (`src/content/consigliati.ts`)

Ha senso: Rick ci ha mangiato e l'ha trovato buonissimo. Testo con le sue sole parole, senza aggiunte.
```ts
  'scozia/oban': [
    {
      nome: 'Ee-Usk',
      cosa: { it: 'Ristorante di pesce a Oban', en: 'Seafood restaurant in Oban', es: 'Restaurante de pescado en Oban' },
      url: 'https://www.eeusk.com',
      fatto: true,
      testo: {
        it: 'Sul porto di Oban, al North Pier: pesce buonissimo. Meglio prenotare.',
        en: 'On the harbour in Oban, at the North Pier: really good fish. Best to book.',
        es: 'En el puerto de Oban, en el North Pier: pescado buenísimo. Mejor reservar.',
      },
    },
  ],
```
(Sito eeusk.com verificato il 5/11/2026: «Ee-Usk Seafood Restaurant», North Pier, Oban PA34 5QD, tel. 01631 565 666, pranzo dalle 12, cena dalle 17:30.)

## 12. Altri registri per Paese

- `src/components/signature/paese-codici.ts` → `PAESE_CODICE`: `inghilterra: 'GB'`, `scozia: 'GB'` (Stato sovrano, come le altre regioni).
- `src/content/mini-guide-verificate.ts`: `'inghilterra'` e `'scozia'` hanno la mini guida (`luoghi`, `programmi`, `zone`, `sapori`, `attenzioni`); da aggiungere dopo i giri di verifica (docs/mini-guide/stato3-*.md). Non l'ho aggiunto io.
- `src/content/filigrane/europa.ts` e `src/content/intro-immagini.ts`: nessuna filigrana per i due Paesi. Servono due stampe di pubblico dominio per Paese (per esempio una veduta ottocentesca di Londra e del Tamigi; una di Edimburgo dal Calton Hill o di Glencoe), da ripulire con `tools/filigrana.py`. Non le ho cercate.
- `src/lib/i18n/etichette-dati.ts` (categorie, tag, tipologie, stili non ancora tradotti):
```ts
  "Inghilterra": { en: "England", es: "Inglaterra" },
  "inghilterra": { en: "England", es: "Inglaterra" },
  "Scozia": { en: "Scotland", es: "Escocia" },
  "scozia": { en: "Scotland", es: "Escocia" },
  "Londra": { en: "London", es: "Londres" },
  "londra": { en: "London", es: "Londres" },
  "Edimburgo": { en: "Edinburgh", es: "Edimburgo" },
  "edimburgo": { en: "Edinburgh", es: "Edimburgo" },
  "Cotswolds": { en: "Cotswolds", es: "Cotswolds" },
  "cotswolds": { en: "Cotswolds", es: "Cotswolds" },
  "Oxford": { en: "Oxford", es: "Oxford" },
  "oxford": { en: "Oxford", es: "Oxford" },
  "Bath": { en: "Bath", es: "Bath" },
  "bath": { en: "Bath", es: "Bath" },
  "bibury": { en: "Bibury", es: "Bibury" },
  "Highlands": { en: "Highlands", es: "Highlands" },
  "highlands": { en: "Highlands", es: "Highlands" },
  "Skye": { en: "Skye", es: "Skye" },
  "skye": { en: "Skye", es: "Skye" },
  "Oban": { en: "Oban", es: "Oban" },
  "oban": { en: "Oban", es: "Oban" },
  "Loch Ness": { en: "Loch Ness", es: "Lago Ness" },
  "lochness": { en: "Loch Ness", es: "Lago Ness" },
  "Speyside": { en: "Speyside", es: "Speyside" },
  "speyside": { en: "Speyside", es: "Speyside" },
  "North Coast 500": { en: "North Coast 500", es: "North Coast 500" },
  "northcoast500": { en: "North Coast 500", es: "North Coast 500" },
  "glencoe": { en: "Glencoe", es: "Glencoe" },
  "glenfinnan": { en: "Glenfinnan", es: "Glenfinnan" },
  "distillerie": { en: "distilleries", es: "destilerías" },
  "distilleria": { en: "distillery", es: "destilería" },
  "whisky": { en: "whisky", es: "whisky" },
  "campagna": { en: "countryside", es: "campo" },
  "campagnainglese": { en: "English countryside", es: "campo inglés" },
  "guidaasinistra": { en: "driving on the left", es: "conducir por la izquierda" },
  "regnounito": { en: "United Kingdom", es: "Reino Unido" },
  "treno": { en: "train", es: "tren" },
  "università": { en: "university", es: "universidad" },
  "cibo e bevande": { en: "food and drink", es: "comida y bebida" },
```
  (Controllare i doppioni con chi lavora sull'Irlanda: «regnounito» potrebbe arrivare anche da lì.)
- `guide-pdf.json`: nessuna voce finché non si decide di fare la guida PDF.

## 13. Limiti noti

- Il viaggio Scozia ha la North Coast 500 e Islay come varianti nel testo, non come giorni: in `tappeMappa` non ci sono (la NC500 ha comunque la sua scheda destinazione).
- Glenfiddich, The Macallan e The Glenlivet: i siti ufficiali bloccano la lettura automatica (403/429). Nel testo ci sono solo il nome, la zona e il rinvio al sito per prezzi e orari.
