# Irlanda e Irlanda del Nord: voci da aggiungere ai registri condivisi

Scritto il 5/11/2026 dall'agente che ha creato i contenuti dell'Irlanda. I file nuovi sono già al loro posto; i registri condivisi qui sotto **non** sono stati toccati, perché ci lavorano altri agenti. Vanno aggiunte a mano le voci seguenti.

## File creati (già presenti)

- Paesi: `src/content/paesi/irlanda.ts` (`irlanda`), `src/content/paesi/irlanda-del-nord.ts` (`irlandaDelNord`, `tipo: 'regione'`, `stato: 'Regno Unito'`)
- Destinazioni: `src/content/destinazioni/irlanda.ts` (`destinazioniIrlanda`), `src/content/destinazioni/irlanda-del-nord.ts` (`destinazioniIrlandaDelNord`)
- Viaggio: `src/content/viaggi/98-irlanda-due-irlande.md` (slug `irlanda-due-irlande`), `src/content/viaggi-dati/irlanda-due-irlande.ts` (`irlandaDueIrlandeMeta`)
- Copie en/es con gli stessi nomi in `src/content/i18n/en|es/{paesi,destinazioni,viaggi,viaggi-dati}/`
- Nessuna esperienza: `esperienzeSlugs: []` ovunque, nessun file in `esperienze/`.
- Foto: `public/images/irlanda/` (8 + hero), `public/images/irlanda-del-nord/` (3 + hero), `public/images/copertine/irlanda-due-irlande.webp`, `public/images/viaggi/irlanda-due-irlande/` (12 foto giorno). Tutte webp ≤200 KB.

## 1. `src/lib/geo.ts`

```ts
import { irlanda } from '@/content/paesi/irlanda'
import { destinazioniIrlanda } from '@/content/destinazioni/irlanda'
import { irlandaDelNord } from '@/content/paesi/irlanda-del-nord'
import { destinazioniIrlandaDelNord } from '@/content/destinazioni/irlanda-del-nord'
import { irlandaDueIrlandeMeta } from '@/content/viaggi-dati/irlanda-due-irlande'
```
- `PAESI`: aggiungere `irlanda, irlandaDelNord`
- `DESTINAZIONI`: aggiungere `...destinazioniIrlanda, ...destinazioniIrlandaDelNord`
- `ESPERIENZE`: niente
- elenco dei TripMeta: aggiungere `irlandaDueIrlandeMeta`

## 2. `src/content/i18n/en/indice.ts` e `src/content/i18n/es/indice.ts`

Stesse righe nei due file (cambia solo la cartella, che è relativa):
```ts
import { irlanda as paesi_irlanda } from './paesi/irlanda'
import { irlandaDelNord as paesi_irlandaDelNord } from './paesi/irlanda-del-nord'
import { destinazioniIrlanda as destinazioni_destinazioniIrlanda } from './destinazioni/irlanda'
import { destinazioniIrlandaDelNord as destinazioni_destinazioniIrlandaDelNord } from './destinazioni/irlanda-del-nord'
import { irlandaDueIrlandeMeta as viaggi_dati_irlandaDueIrlandeMeta } from './viaggi-dati/irlanda-due-irlande'
```
- `paesi`: `paesi_irlanda, paesi_irlandaDelNord` (in ordine alfabetico, dopo `paesi_indonesia`)
- `destinazioni`: `...destinazioni_destinazioniIrlanda, ...destinazioni_destinazioniIrlandaDelNord`
- `tripMeta`: `viaggi_dati_irlandaDueIrlandeMeta` (dopo `viaggi_dati_indonesiaItinerarioMeta`)

## 3. Slug localizzati (`src/content/i18n/{en,es}/slug.json` e un nuovo gruppo `slug/gNN.json`)

| chiave | en | es |
|---|---|---|
| paesi: `irlanda` | `ireland` | `irlanda` |
| paesi: `irlanda-del-nord` | `northern-ireland` | `irlanda-del-norte` |
| destinazioni: `irlanda/dublino` | `dublin` | `dublin` |
| destinazioni: `irlanda/wicklow-glendalough` | `wicklow-and-glendalough` | `wicklow-y-glendalough` |
| destinazioni: `irlanda/kilkenny-cashel` | `kilkenny-and-rock-of-cashel` | `kilkenny-y-roca-de-cashel` |
| destinazioni: `irlanda/cork-kinsale` | `cork-and-kinsale` | `cork-y-kinsale` |
| destinazioni: `irlanda/ring-of-kerry-dingle` | `ring-of-kerry-and-dingle` | `ring-of-kerry-y-dingle` |
| destinazioni: `irlanda/cliffs-of-moher-burren` | `cliffs-of-moher-and-burren` | `acantilados-de-moher-y-burren` |
| destinazioni: `irlanda/galway` | `galway` | `galway` |
| destinazioni: `irlanda/connemara` | `connemara` | `connemara` |
| destinazioni: `irlanda-del-nord/belfast` | `belfast` | `belfast` |
| destinazioni: `irlanda-del-nord/causeway-coastal-route` | `causeway-coastal-route` | `causeway-coastal-route` |
| destinazioni: `irlanda-del-nord/derry-londonderry` | `derry-londonderry` | `derry-londonderry` |
| viaggi: `irlanda-due-irlande` | `two-irelands-road-trip` | `las-dos-irlandas` |

In formato gruppo (es. `src/content/i18n/en/slug/g37.json`, o il primo numero libero):
```json
{
  "paesi": { "irlanda": "ireland", "irlanda-del-nord": "northern-ireland" },
  "destinazioni": {
    "irlanda/dublino": "dublin",
    "irlanda/wicklow-glendalough": "wicklow-and-glendalough",
    "irlanda/kilkenny-cashel": "kilkenny-and-rock-of-cashel",
    "irlanda/cork-kinsale": "cork-and-kinsale",
    "irlanda/ring-of-kerry-dingle": "ring-of-kerry-and-dingle",
    "irlanda/cliffs-of-moher-burren": "cliffs-of-moher-and-burren",
    "irlanda/galway": "galway",
    "irlanda/connemara": "connemara",
    "irlanda-del-nord/belfast": "belfast",
    "irlanda-del-nord/causeway-coastal-route": "causeway-coastal-route",
    "irlanda-del-nord/derry-londonderry": "derry-londonderry"
  },
  "viaggi": { "irlanda-due-irlande": "two-irelands-road-trip" }
}
```
```json
{
  "paesi": { "irlanda": "irlanda", "irlanda-del-nord": "irlanda-del-norte" },
  "destinazioni": {
    "irlanda/dublino": "dublin",
    "irlanda/wicklow-glendalough": "wicklow-y-glendalough",
    "irlanda/kilkenny-cashel": "kilkenny-y-roca-de-cashel",
    "irlanda/cork-kinsale": "cork-y-kinsale",
    "irlanda/ring-of-kerry-dingle": "ring-of-kerry-y-dingle",
    "irlanda/cliffs-of-moher-burren": "acantilados-de-moher-y-burren",
    "irlanda/galway": "galway",
    "irlanda/connemara": "connemara",
    "irlanda-del-nord/belfast": "belfast",
    "irlanda-del-nord/causeway-coastal-route": "causeway-coastal-route",
    "irlanda-del-nord/derry-londonderry": "derry-londonderry"
  },
  "viaggi": { "irlanda-due-irlande": "las-dos-irlandas" }
}
```

## 4. `src/content/mini-guide-verificate.ts`

Le destinazioni hanno la mini guida (`luoghi`, `attenzioni`). Se si vuole mostrarla, aggiungere `'irlanda'` e `'irlanda-del-nord'` al set dopo i giri di verifica previsti (docs/mini-guide/stato3-*.md). Non l'ho aggiunto io.

## 5. Voci editoriali (`viaggi-editorial.ts` e copie en/es)

```ts
// src/content/viaggi-editorial.ts
'irlanda-due-irlande': {
  seoTitle: "Irlanda e Irlanda del Nord in 12 giorni in auto",
  seoDescription:
    "Anello da Dublino: Kerry, Cliffs of Moher, Connemara, Derry, Giant's Causeway e Belfast. Documenti, ETA, guida a sinistra e la storia delle due Irlande.",
  socialTitle: "Le due Irlande in 12 giorni: dalla Repubblica a Belfast, e perché per il nord serve il passaporto",
  editorialHook:
    "Per entrare nell'Irlanda del Nord la carta d'identità non basta: servono passaporto ed ETA britannica, anche arrivando in auto da Dublino.",
  editorialHookType: 'before-you-go',
},
```
```ts
// src/content/i18n/en/viaggi-editorial.ts
'irlanda-due-irlande': {
  seoTitle: "Ireland and Northern Ireland road trip in 12 days",
  seoDescription:
    "A loop from Dublin: Kerry, Cliffs of Moher, Connemara, Derry, Giant's Causeway and Belfast. Documents, ETA, driving on the left and the two Irelands.",
  socialTitle: "The two Irelands in 12 days: from the Republic to Belfast, and why the north needs a passport",
  editorialHook:
    "An EU ID card is not enough for Northern Ireland: you need a passport and a UK ETA, even if you drive in from Dublin.",
  editorialHookType: 'before-you-go',
},
```
```ts
// src/content/i18n/es/viaggi-editorial.ts
'irlanda-due-irlande': {
  seoTitle: "Irlanda e Irlanda del Norte en coche en 12 días",
  seoDescription:
    "Ruta circular desde Dublín: Kerry, acantilados de Moher, Connemara, Derry, Giant's Causeway y Belfast. Documentos, ETA, conducción por la izquierda.",
  socialTitle: "Las dos Irlandas en 12 días: de la República a Belfast, y por qué el norte pide pasaporte",
  editorialHook:
    "Para entrar en Irlanda del Norte el DNI no basta: hacen falta pasaporte y la ETA británica, aunque llegues en coche desde Dublín.",
  editorialHookType: 'before-you-go',
},
```

## 6. Copertina (`viaggi-copertine.ts` e copie en/es)

```ts
'irlanda-due-irlande': {
  immagine: '/images/copertine/irlanda-due-irlande.webp',
  imageAlt: "Il ponte di corda di Carrick-a-Rede e l'isolotto sulla costa di Antrim, Irlanda del Nord",
},
```
- en `imageAlt`: `"The Carrick-a-Rede rope bridge and its island on the Antrim coast, Northern Ireland"`
- es `imageAlt`: `"El puente de cuerda de Carrick-a-Rede y su islote en la costa de Antrim, Irlanda del Norte"`

## 7. Crediti foto

### `viaggi-copertine-crediti.ts`
```ts
'irlanda-due-irlande': {
  autore: 'Diliff (Wikimedia Commons)',
  licenza: 'CC BY-SA 3.0',
  fonteUrl: 'https://commons.wikimedia.org/wiki/File:Carrick-a-Rede_Rope_Bridge,_Northern_Ireland_-_Diliff.jpg',
},
```

### `destinazioni-foto-crediti.ts` (chiave `paese/slug`)
```ts
'irlanda/dublino': { autore: 'P. Hughes', licenza: 'CC BY 4.0', fonteUrl: "https://commons.wikimedia.org/wiki/File:Dubln_-_River_Liffey_with_Ha%27Penny_Bridge_in_distance.jpg" },
'irlanda/wicklow-glendalough': { autore: 'Manuel Osdoba', licenza: 'CC BY-SA 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Upper_Lake_Glendalough.jpg' },
'irlanda/kilkenny-cashel': { autore: 'Berthold Werner', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Ireland_Rock_of_Cashel_BW_2025-09-14_15-39-31.jpg' },
'irlanda/cork-kinsale': { autore: 'David Hawgood', licenza: 'CC BY-SA 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Boats_in_Kinsale_Harbour_-_geograph.org.uk_-_3041141.jpg' },
'irlanda/ring-of-kerry-dingle': { autore: 'Marco Ober', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Ladies_View_in_summer,_Ring_of_Kerry,_Killarney_National_Park.jpg' },
'irlanda/cliffs-of-moher-burren': { autore: 'Berthold Werner', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Ireland_Cliffs_of_Moher_BW_2025-09-11_13-47-21.jpg' },
'irlanda/galway': { autore: 'Robert Linsdell', licenza: 'CC BY 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:The_Spanish_Arch,_Spanish_Parade,_Galway_(506206)_(25836766954).jpg' },
'irlanda/connemara': { autore: 'Roy Murray', licenza: 'CC BY 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Twelve_Bens_II,_Connemara,_Ireland.jpg' },
'irlanda-del-nord/belfast': { autore: 'Simon Burchell', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Belfast_City_Hall_007.jpg' },
'irlanda-del-nord/causeway-coastal-route': { autore: 'Chmee2', licenza: 'CC BY 3.0', fonteUrl: "https://commons.wikimedia.org/wiki/File:Giant%27s_Causeway_(14).JPG" },
'irlanda-del-nord/derry-londonderry': { autore: 'Simon Burchell', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Peace_Bridge,_Derry_01.jpg' },
```

### Hero delle pagine Paese (`heroImage`)
Non c'è un file crediti dedicato agli hero Paese. Se si vuole tracciarli (es. in `destinazioni-foto-crediti.ts` con una chiave tipo `irlanda/_hero`, o dove si decide):
- `/images/irlanda/irlanda-hero.webp`: Berthold Werner, CC BY-SA 4.0, https://commons.wikimedia.org/wiki/File:Ireland_Cliffs_of_Moher_BW_2025-09-11_14-27-51.jpg
- `/images/irlanda-del-nord/irlanda-del-nord-hero.webp`: Iain Irwin, CC BY-SA 4.0, https://commons.wikimedia.org/wiki/File:Dunluce_Castle_Northern_Ireland_1.jpg

### `viaggi-giorno-foto-crediti.ts` (chiave = titolo del giorno in italiano)
```ts
'irlanda-due-irlande': {
  'Giorno 1 — Arrivo a Dublino': { autore: 'The wub (Wikimedia Commons)', licenza: 'CC BY-SA 4.0', fonteUrl: "https://commons.wikimedia.org/wiki/File:Ha%27penny_Bridge,_Dublin_-_2022-07-20.jpg" },
  'Giorno 2 — Dublino: Book of Kells e Kilmainham Gaol': { autore: 'P. Hughes (Wikimedia Commons)', licenza: 'CC BY 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Trinity_College_Dublin_-_Campanile_(2025).jpg' },
  'Giorno 3 — Glendalough e Kilkenny': { autore: 'Rob Hurson (Wikimedia Commons)', licenza: 'CC BY-SA 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Upper_lake,_Glendalough,_Wicklow.jpg' },
  'Giorno 4 — Kilkenny Castle, la Rocca di Cashel e Cork': { autore: 'Berthold Werner (Wikimedia Commons)', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Ireland_Rock_of_Cashel_BW_2025-09-14_15-42-11.jpg' },
  'Giorno 5 — English Market, Kinsale e verso Killarney': { autore: 'Nigel Thompson (geograph.org.uk, Wikimedia Commons)', licenza: 'CC BY-SA 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Colourful_houses_in_Kinsale_-_geograph.org.uk_-_5967742.jpg' },
  'Giorno 6 — Ring of Kerry': { autore: 'Gerd Eichmann (Wikimedia Commons)', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Ring_of_Kerry-Ladies_View-08-2017-gje.jpg' },
  'Giorno 7 — Penisola di Dingle e Slea Head Drive': { autore: 'High Contrast (Wikimedia Commons)', licenza: 'CC BY 3.0 DE', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Slea_Head_Dingle_coastline.jpg' },
  'Giorno 8 — Cliffs of Moher, il Burren e Galway': { autore: 'Bernard Gagnon (Wikimedia Commons)', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Poulnabrone_dolmen_03.jpg' },
  'Giorno 9 — Connemara e Kylemore Abbey': { autore: 'Alvesgaspar (Wikimedia Commons)', licenza: 'CC BY-SA 4.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Kylemore_October_2014-1a.jpg' },
  'Giorno 10 — Da Galway a Derry/Londonderry': { autore: 'Colin Park (geograph.org.uk, Wikimedia Commons)', licenza: 'CC BY-SA 2.0', fonteUrl: "https://commons.wikimedia.org/wiki/File:Londonderry_-_City_Walls_(Wall_of_Derry)_by_Walker%27s_Plinth_-_geograph.org.uk_-_7677239.jpg" },
  "Giorno 11 — Causeway Coastal Route: Giant's Causeway, Carrick-a-Rede e Dark Hedges": { autore: 'Bryn Holmes (geograph.org.uk, Wikimedia Commons)', licenza: 'CC BY-SA 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:The_Dark_Hedges,_Bregagh_Road_-_geograph.org.uk_-_7905947.jpg' },
  'Giorno 12 — Belfast: murales, peace walls e Titanic, poi Dublino': { autore: 'Robert Eva (geograph.org.uk, Wikimedia Commons)', licenza: 'CC BY-SA 2.0', fonteUrl: 'https://commons.wikimedia.org/wiki/File:Cupar_Way_peace_line_wall,_Belfast_-_geograph.org.uk_-_5494388.jpg' },
},
```
Autore e licenza sono quelli dichiarati nei metadati di Commons (API extmetadata, letti il 5/11/2026). La foto del peace wall di Cupar Way mostra il muro e la strada vuota, senza persone riconoscibili; nessun murale di parte come foto principale.

## 8. Coordinate (mappe)

`src/content/mappe/coordinate.ts` è generato da `tools/mappe/geocodifica.mjs`: non va scritto a mano. Vanno aggiunte le query in `tools/mappe/query.mjs` (dove nome e località non bastano) e poi rilanciato lo script:
```js
'irlanda/dublino': 'Dublin',
'irlanda/wicklow-glendalough': 'Glendalough',
'irlanda/kilkenny-cashel': 'Kilkenny',
'irlanda/cork-kinsale': 'Kinsale',
'irlanda/ring-of-kerry-dingle': 'Killarney',
'irlanda/cliffs-of-moher-burren': 'Cliffs of Moher',
'irlanda/galway': 'Galway',
'irlanda/connemara': 'Letterfrack',
'irlanda-del-nord/belfast': 'Belfast',
'irlanda-del-nord/causeway-coastal-route': "Giant's Causeway",
'irlanda-del-nord/derry-londonderry': 'Derry',
```
Nessuna coordinata scritta a mano nelle `tappeMappa`: le inserirà lo script.

## 9. Atlante / mappa Paese: servono dati nuovi

Sì. Mancano `src/content/mappe/irlanda.json`, `irlanda-atlante.json`, `irlanda-del-nord.json`, `irlanda-del-nord-atlante.json` e i rilievi in `public/images/mappe/`. Proposta per `tools/mappe/config.mjs`:
```js
irlanda: { fonte: 'world', nomi: ['Ireland'], cc: 'ie' },
// regione del Regno Unito: in world-atlas 50m non è una feature a sé, si ritaglia dal Regno Unito
'irlanda-del-nord': { fonte: 'world', nomi: ['United Kingdom'], clip: [-8.3, 53.9, -5.3, 55.4], cc: 'gb' },
```
Il `clip` tiene solo i poligoni con il centro nel riquadro, quindi dovrebbe restare solo l'Irlanda del Nord (la Gran Bretagna ha il centro fuori). Da controllare a occhio dopo aver lanciato contorni.mjs e atlante.mjs. Serve anche la filigrana dei due nuovi Paesi, se il sito la usa per ogni Paese (`src/content/filigrane/europa.ts`).

## 10. Limite noto: viaggio su due schede

`paeseSlug` del viaggio è `'irlanda'` (tappa di apertura, come `capitali-baltiche` e `centro-america-itinerario`). DayTimeline e RouteTimeline costruiscono i link come `/destinazioni/<paeseSlug>/<destinazioneSlug>`, quindi i Giorni 10-12 puntano a `/destinazioni/irlanda/derry-londonderry` ecc., che non esistono. Il markdown linka già i percorsi giusti (`/destinazioni/irlanda-del-nord/...`). La categoria del viaggio contiene «Irlanda del Nord», quindi `paesiDelViaggio` lo associa anche alla seconda scheda. Soluzioni possibili: un campo `paeseSlug` facoltativo per tappa in `TappaMappa`/`GiornoMeta`, o un redirect.

## 11. Abbinamento con la Scozia (`ProssimaDestinazione.tsx`, `ABBINAMENTI`)

Il viaggio Scozia lo sta creando un altro agente: lo slug va preso dal suo file. Proposta:
```ts
'irlanda-due-irlande': '<slug-viaggio-scozia>',
'<slug-viaggio-scozia>': 'irlanda-due-irlande',
```
Nel markdown dell'Irlanda c'è già una variante «Con la Scozia» generica, senza link: quando lo slug esiste, si può aggiungere `[viaggio in Scozia](/viaggi/<slug-viaggio-scozia>)` nelle tre lingue (sezione Varianti / Variations / Variantes). I traghetti tra Irlanda del Nord e Scozia non li ho verificati: andrebbero controllati prima di scrivere rotte e orari.

## 12. Consigliati

Niente da aggiungere in `consigliati.ts`: Rick non ha nomi di guide o alloggi per questo viaggio.
