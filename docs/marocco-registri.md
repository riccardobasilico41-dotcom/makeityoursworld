# Marocco · «Le città imperiali e la città blu» — voci da aggiungere ai registri condivisi

Viaggio nuovo: `marocco-citta-imperiali` (viaggio fatto da Rick, confermato il 05/11/2026; dati pratici dalla ricerca).
File già scritti (non serve toccarli):
- `src/content/viaggi/90-marocco-citta-imperiali.md` + `src/content/i18n/{en,es}/viaggi/90-marocco-citta-imperiali.md`
- `src/content/viaggi-dati/marocco-citta-imperiali.ts` + `src/content/i18n/{en,es}/viaggi-dati/marocco-citta-imperiali.ts`
  (export `maroccoCittaImperialiMeta` in tutti e tre)
- 4 destinazioni nuove in coda a `src/content/destinazioni/marocco.ts` e alle copie en/es:
  `chefchaouen`, `fes`, `meknes-volubilis`, `rabat` (ordine 7-10, `visitataPersonalmente: false`, senza `immagine`)

Da applicare a mano qui sotto, file per file.

---

## 1. `src/lib/geo.ts` (registro dei TripMeta italiani)

Import, vicino agli altri viaggi-dati (es. dopo `peruDueSettimaneMeta`, riga ~241):
```ts
import { maroccoCittaImperialiMeta } from '@/content/viaggi-dati/marocco-citta-imperiali'
```
Nell'array dei TripMeta (quello che contiene `marocco360Meta` … `peruDueSettimaneMeta,`), aggiungere:
```ts
  maroccoCittaImperialiMeta,
```
Le destinazioni nuove arrivano già da `...destinazioniMarocco`: nessuna modifica.

## 2. `src/content/i18n/en/indice.ts` e `src/content/i18n/es/indice.ts`

Il file è generato da `tools/indice-i18n.py`: meglio rilanciare lo script. A mano, in entrambi:
```ts
import { maroccoCittaImperialiMeta as viaggi_dati_maroccoCittaImperialiMeta } from './viaggi-dati/marocco-citta-imperiali'
```
e nell'array `export const tripMeta: TripMeta[] = [...]`, in ordine alfabetico subito prima di `viaggi_dati_marocco360Meta`:
```ts
viaggi_dati_maroccoCittaImperialiMeta,
```
(Le destinazioni sono già nel `destinazioni/marocco.ts` importato.)

## 3. Slug localizzati

Se si usano i file di gruppo, creare `src/content/i18n/en/slug/g-marocco.json`:
```json
{ "viaggi": {"marocco-citta-imperiali": "morocco-imperial-cities-chefchaouen"}, "destinazioni": {"marocco/chefchaouen": "chefchaouen", "marocco/fes": "fez", "marocco/meknes-volubilis": "meknes-volubilis", "marocco/rabat": "rabat"} }
```
e `src/content/i18n/es/slug/g-marocco.json`:
```json
{ "viaggi": {"marocco-citta-imperiali": "marruecos-ciudades-imperiales-chefchaouen"}, "destinazioni": {"marocco/chefchaouen": "chefchaouen", "marocco/fes": "fez", "marocco/meknes-volubilis": "mequinez-volubilis", "marocco/rabat": "rabat"} }
```
poi `python3 tools/unisci-slug.py en` e `python3 tools/unisci-slug.py es`.

Oppure direttamente in `src/content/i18n/en/slug.json`:
- in `"destinazioni"`, dopo `"marocco/merzouga": "merzouga",`:
  ```json
  "marocco/chefchaouen": "chefchaouen",
  "marocco/fes": "fez",
  "marocco/meknes-volubilis": "meknes-volubilis",
  "marocco/rabat": "rabat",
  ```
- in `"viaggi"`, dopo `"marocco-itinerario": "morocco-itinerary",`:
  ```json
  "marocco-citta-imperiali": "morocco-imperial-cities-chefchaouen",
  ```
E in `src/content/i18n/es/slug.json`:
- `"destinazioni"`: `"marocco/chefchaouen": "chefchaouen"`, `"marocco/fes": "fez"`, `"marocco/meknes-volubilis": "mequinez-volubilis"`, `"marocco/rabat": "rabat"`
- `"viaggi"`, dopo `"marocco-itinerario": "marruecos-itinerario",`: `"marocco-citta-imperiali": "marruecos-ciudades-imperiales-chefchaouen"`

## 4. `src/content/viaggi-editorial.ts` (testi allineati il 05/11/2026 al viaggio, ora in prima persona e su strada: quelli qui sotto sono la prima versione)

```ts
  'marocco-citta-imperiali': {
    seoTitle: "Marocco città imperiali: Fès, Meknès, Rabat e Chefchaouen",
    seoDescription:
      "Itinerario di 11 giorni in Marocco tra Chefchaouen, Fès, Meknès con Volubilis, Rabat e Casablanca, in bus e treno, e come unirlo al deserto di Merzouga.",
    socialTitle: "Le città imperiali e la città blu: il Marocco del nord in 11 giorni",
    editorialHook:
      "Da Tangeri a Casablanca passando per la medina blu di Chefchaouen, i vicoli di Fès e le rovine romane di Volubilis, quasi tutto in treno. Da Fès si può scendere verso il Sahara e chiudere a Marrakech.",
    editorialHookType: 'comparison',
  },
```
(seoTitle 57 caratteri, seoDescription 152.)

## 5. `src/content/i18n/en/viaggi-editorial.ts`

```ts
  'marocco-citta-imperiali': {
    seoTitle: "Morocco imperial cities itinerary: Fez, Rabat, Chefchaouen",
    seoDescription:
      "An 11-day Morocco itinerary through Chefchaouen, Fez, Meknes and Volubilis, Rabat and Casablanca by bus and train, plus how to add the Merzouga desert.",
    socialTitle: "The imperial cities and the blue city: northern Morocco in 11 days",
    editorialHook:
      "From Tangier to Casablanca by way of Chefchaouen's blue medina, the alleys of Fez and the Roman ruins of Volubilis, almost all by train. From Fez you can head down to the Sahara and finish in Marrakech.",
    editorialHookType: 'comparison',
  },
```
(seoTitle 58, seoDescription 151.)

## 6. `src/content/i18n/es/viaggi-editorial.ts`

```ts
  'marocco-citta-imperiali': {
    seoTitle: "Ciudades imperiales de Marruecos: Fez, Rabat y Chefchaouen",
    seoDescription:
      "Itinerario de 11 días por Marruecos: Chefchaouen, Fez, Mequinez y Volubilis, Rabat y Casablanca en autobús y tren, y cómo unirlo al desierto de Merzouga.",
    socialTitle: "Las ciudades imperiales y la ciudad azul: el norte de Marruecos en 11 días",
    editorialHook:
      "De Tánger a Casablanca pasando por la medina azul de Chefchaouen, las callejuelas de Fez y las ruinas romanas de Volubilis, casi todo en tren. Desde Fez se puede bajar al Sáhara y terminar en Marrakech.",
    editorialHookType: 'comparison',
  },
```
(seoTitle 58, seoDescription 153.)

## 7. `src/components/ProssimaDestinazione.tsx` — `ABBINAMENTI`

```ts
  'marocco-itinerario': 'marocco-citta-imperiali',
  'marocco-citta-imperiali': 'marocco-itinerario',
```

## 8. Coordinate per la mappa (`src/content/mappe/coordinate.ts`, file generato)

Il file è generato da `tools/mappe/geocodifica.mjs`. In `tools/mappe/query.mjs`, vicino alle altre voci `marocco/…`:
```js
  'marocco/meknes-volubilis': 'Meknès',
  'marocco/fes': 'Fès',
```
poi rilanciare lo script. Valori verificati su OpenStreetMap Nominatim il 05/11/2026, se si preferisce scriverli a mano in `coordinateDestinazioni`:
```ts
  'marocco/chefchaouen': [35.17008, -5.27666],
  'marocco/fes': [34.03465, -5.01619],
  'marocco/meknes-volubilis': [33.89841, -5.53216],
  'marocco/rabat': [34.02185, -6.84089],
```
(Volubilis da solo: [34.07347, -5.55537].) Tangeri e Casablanca non hanno scheda: hanno già `lat`/`lng` nelle `tappeMappa` del viaggio.

## 9. Copertina, foto, guida PDF

Niente foto per ora: nessuna voce in `viaggi-copertine.ts` (e copie i18n) né in `guide-pdf.json` finché Rick non manda le immagini.
Quando arrivano: copertina consigliata Chefchaouen (vicoli blu) o la medina di Fès dall'alto; `imageAlt` già scritti nelle quattro schede destinazione.
