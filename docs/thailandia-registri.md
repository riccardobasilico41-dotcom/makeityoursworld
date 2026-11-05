# Thailandia del nord: voci da aggiungere ai registri condivisi

Viaggio nuovo: `thailandia-nord` (src/content/viaggi/94-thailandia-nord.md).
Destinazioni nuove in `thailandia.ts` (it/en/es): `chiang-rai`, `triangolo-d-oro`, `pai-mae-hong-son`.
Già fatto nei file non condivisi: `tripSlugs` di `bangkok`, `chiang-mai` e dell'esperienza `elephant-nature-park` includono `thailandia-nord`.

## 1. src/lib/geo.ts
Import, accanto agli altri viaggi-dati:
```ts
import { thailandiaNordMeta } from '@/content/viaggi-dati/thailandia-nord'
```
In `TRIP_META`, dopo `peruDueSettimaneMeta` (o in coda):
```ts
  thailandiaNordMeta,
```

## 2. src/content/i18n/en/indice.ts e src/content/i18n/es/indice.ts
Import (uguale nei due file):
```ts
import { thailandiaNordMeta as viaggi_dati_thailandiaNordMeta } from './viaggi-dati/thailandia-nord'
```
Nell'array `tripMeta`, dopo `viaggi_dati_thailandiaMeta`:
```ts
viaggi_dati_thailandiaNordMeta,
```
Le destinazioni nuove sono già dentro `destinazioniThailandia`, già importato: niente da aggiungere.

## 3. Slug localizzati
### src/content/i18n/en/slug.json (o un nuovo file in en/slug/)
```json
"thailandia-nord": "northern-thailand-itinerary",
"thailandia/chiang-rai": "chiang-rai",
"thailandia/triangolo-d-oro": "golden-triangle",
"thailandia/pai-mae-hong-son": "pai-mae-hong-son-loop"
```
Formato a gruppi (come g29.json):
```json
{ "viaggi": { "thailandia-nord": "northern-thailand-itinerary" }, "destinazioni": { "thailandia/chiang-rai": "chiang-rai", "thailandia/triangolo-d-oro": "golden-triangle", "thailandia/pai-mae-hong-son": "pai-mae-hong-son-loop" } }
```

### src/content/i18n/es/slug.json (o un nuovo file in es/slug/)
```json
"thailandia-nord": "norte-de-tailandia-itinerario",
"thailandia/chiang-rai": "chiang-rai",
"thailandia/triangolo-d-oro": "triangulo-de-oro",
"thailandia/pai-mae-hong-son": "pai-loop-mae-hong-son"
```
Formato a gruppi:
```json
{ "viaggi": { "thailandia-nord": "norte-de-tailandia-itinerario" }, "destinazioni": { "thailandia/chiang-rai": "chiang-rai", "thailandia/triangolo-d-oro": "triangulo-de-oro", "thailandia/pai-mae-hong-son": "pai-loop-mae-hong-son" } }
```

## 4. src/content/viaggi-editorial.ts (it)
```ts
  'thailandia-nord': {
    seoTitle: "Thailandia del nord in 13 giorni: Chiang Mai e Chiang Rai",
    seoDescription:
      "Treno notturno da Bangkok, Chiang Mai, Pai, Chiang Rai e il Triangolo d'oro, con una guida onesta per vedere gli elefanti senza sfruttarli.",
    socialTitle: "Thailandia del nord: Chiang Mai, Chiang Rai e gli elefanti, nel modo giusto",
    editorialHook:
      "L'altra Thailandia, quella senza mare: il treno notturno per Chiang Mai, i templi d'artista di Chiang Rai, il Mekong al Triangolo d'oro. E una sezione su come scegliere un centro per elefanti, perché «no riding» da solo non basta.",
    editorialHookType: 'before-you-go',
  },
```

### src/content/i18n/en/viaggi-editorial.ts
```ts
  'thailandia-nord': {
    seoTitle: "Northern Thailand in 13 days: Chiang Mai and Chiang Rai",
    seoDescription:
      "Night train from Bangkok, Chiang Mai, Pai, Chiang Rai and the Golden Triangle, with an honest guide to seeing elephants without exploiting them.",
    socialTitle: "Northern Thailand: Chiang Mai, Chiang Rai and elephants, the right way",
    editorialHook:
      "The other Thailand, the one without the sea: the night train to Chiang Mai, Chiang Rai's artists' temples, the Mekong at the Golden Triangle. And a section on how to choose an elephant center, because \"no riding\" on its own isn't enough.",
    editorialHookType: 'before-you-go',
  },
```

### src/content/i18n/es/viaggi-editorial.ts
```ts
  'thailandia-nord': {
    seoTitle: "Norte de Tailandia en 13 días: Chiang Mai y Chiang Rai",
    seoDescription:
      "Tren nocturno desde Bangkok, Chiang Mai, Pai, Chiang Rai y el Triángulo de Oro, con una guía honesta para ver elefantes sin explotarlos.",
    socialTitle: "Norte de Tailandia: Chiang Mai, Chiang Rai y los elefantes, como debe ser",
    editorialHook:
      "La otra Tailandia, la que no tiene mar: el tren nocturno a Chiang Mai, los templos de artista de Chiang Rai, el Mekong en el Triángulo de Oro. Y una sección sobre cómo elegir un centro de elefantes, porque «no riding» por sí solo no basta.",
    editorialHookType: 'before-you-go',
  },
```

## 5. src/content/mappe/coordinate.ts
Da OpenStreetMap (Nominatim), novembre 2026. Vanno con le altre `thailandia/...`:
```ts
  'thailandia/chiang-rai': [19.90689, 99.83327],
  'thailandia/pai-mae-hong-son': [19.35811, 98.44058],
  'thailandia/triangolo-d-oro': [20.34484, 100.08378],
```
(Chiang Rai: municipalità; Pai: centro del paese; Triangolo d'oro: punto del valico/belvedere di Ban Sop Ruak.)

## 6. src/components/ProssimaDestinazione.tsx
In `ABBINAMENTI`:
```ts
  'thailandia-nord': 'thailandia',
  'thailandia': 'thailandia-nord',
```
(Il secondo è facoltativo: oggi `thailandia` non ha un abbinamento e cade sul Paese più vicino.)

## 7. Facoltativo
- `viaggi-copertine.ts` (it/en/es): nessuna voce, perché non ci sono foto. Senza copertina la UI usa il segnaposto.
- `ViaggiTop.tsx`: non toccato.
