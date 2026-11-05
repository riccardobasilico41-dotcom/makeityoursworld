# Messico: voci da aggiungere ai registri condivisi

Viaggio nuovo: `messico-yucatan-completo` (src/content/viaggi/95-messico-yucatan-completo.md).
Destinazioni nuove, tutte dentro `src/content/destinazioni/messico.ts` (e copie en/es): `uxmal-ruta-puuc`, `palenque`, `calakmul`.
Nessun file registro è stato toccato. Qui sotto le voci esatte, da incollare.

## 1. Slug localizzati

### src/content/i18n/en/slug.json

Nel gruppo `"destinazioni"`:
```json
"messico/calakmul": "calakmul",
"messico/palenque": "palenque",
"messico/uxmal-ruta-puuc": "uxmal-puuc-route",
```
Nel gruppo `"viaggi"`:
```json
"messico-yucatan-completo": "complete-yucatan-itinerary",
```

### src/content/i18n/es/slug.json

Nel gruppo `"destinazioni"`:
```json
"messico/calakmul": "calakmul",
"messico/palenque": "palenque",
"messico/uxmal-ruta-puuc": "uxmal-ruta-puuc",
```
Nel gruppo `"viaggi"`:
```json
"messico-yucatan-completo": "yucatan-completo",
```

Se tenete anche i gruppi `slug/gNN.json`, le stesse voci vanno nel prossimo gruppo libero (dopo g32), con la stessa struttura di g21.json (`destinazioni` e `viaggi`).

## 2. Registro dei dati di viaggio

### src/lib/geo.ts
Import, accanto agli altri del Messico (riga ~225):
```ts
import { messicoYucatanCompletoMeta } from '@/content/viaggi-dati/messico-yucatan-completo'
```
Nell'array `TRIP_META`, dopo `messicoCdmxBajaCaliforniaMeta,`:
```ts
  messicoYucatanCompletoMeta,
```
Le destinazioni nuove stanno in `destinazioniMessico`, già importato: nessun import in più.

### src/content/i18n/en/indice.ts e src/content/i18n/es/indice.ts
Import (stessa riga in entrambi i file, dopo quello di messico-dia-de-los-muertos):
```ts
import { messicoYucatanCompletoMeta as viaggi_dati_messicoYucatanCompletoMeta } from './viaggi-dati/messico-yucatan-completo'
```
Nell'array `tripMeta`, dopo `viaggi_dati_messicoDiaDeLosMuertosMeta,`:
```ts
viaggi_dati_messicoYucatanCompletoMeta,
```
Le destinazioni nuove sono già dentro `./destinazioni/messico`.

## 3. Voce editoriale

### src/content/viaggi-editorial.ts
```ts
  'messico-yucatan-completo': {
    seoTitle: "Yucatán in 16 giorni: Mérida, Palenque e Calakmul",
    seoDescription:
      "Un anello da Cancún per Chichén Itzá, Mérida, Uxmal, Campeche, Palenque e Calakmul, con Bacalar alla fine. Ingressi 2026, Tren Maya e strade da evitare.",
    socialTitle: "Yucatán completo in 16 giorni: le città maya, il Tren Maya e la strada che conviene evitare",
    editorialHook:
      "Misol-Ha e Agua Azul si raggiungono dalla Federale 199, il tratto del Chiapas che il Foreign Office britannico sconsiglia.",
    editorialHookType: 'before-you-go',
  },
```

### src/content/i18n/en/viaggi-editorial.ts
```ts
  'messico-yucatan-completo': {
    seoTitle: "Yucatán itinerary 16 days: Mérida, Palenque, Calakmul",
    seoDescription:
      "A loop from Cancún via Chichén Itzá, Mérida, Uxmal, Campeche, Palenque and Calakmul, ending in Bacalar. 2026 admissions, the Tren Maya and roads to avoid.",
    socialTitle: "The complete Yucatán in 16 days: the Maya cities, the Tren Maya and the road worth avoiding",
    editorialHook:
      "Misol-Ha and Agua Azul are reached from Federal Highway 199, the Chiapas stretch the UK Foreign Office advises against.",
    editorialHookType: 'before-you-go',
  },
```

### src/content/i18n/es/viaggi-editorial.ts
```ts
  'messico-yucatan-completo': {
    seoTitle: "Yucatán en 16 días: Mérida, Palenque y Calakmul",
    seoDescription:
      "Un circuito desde Cancún por Chichén Itzá, Mérida, Uxmal, Campeche, Palenque y Calakmul, con Bacalar al final. Entradas 2026, Tren Maya y carreteras a evitar.",
    socialTitle: "Yucatán completo en 16 días: las ciudades mayas, el Tren Maya y la carretera que conviene evitar",
    editorialHook:
      "A Misol-Ha y Agua Azul se llega por la Federal 199, el tramo de Chiapas que el Foreign Office británico desaconseja.",
    editorialHookType: 'before-you-go',
  },
```

## 4. Coordinate

### src/content/mappe/coordinate.ts
Coordinate dei siti da Wikipedia (lette il 5/11/2026), nella sezione destinazioni del Messico:
```ts
  'messico/calakmul': [18.10539, -89.81083],
  'messico/palenque': [17.48417, -92.04639],
  'messico/uxmal-ruta-puuc': [20.35944, -89.77139],
```
Da segnalare, non toccato: `'messico/campeche': [19, -90.5]` è un punto generico dello stato, non la città. Il centro storico di Campeche sta intorno a 19,85 N, 90,53 O: da verificare prima di correggerlo.

## 5. Abbinamenti in src/components/ProssimaDestinazione.tsx

Proposta per legare i quattro viaggi del Messico (un solo viaggio consigliato per ognuno):
```ts
  'messico-yucatan-completo': 'messico-beach-life',
  'messico-beach-life': 'messico-yucatan-completo',
  'messico-dia-de-los-muertos': 'messico-yucatan-completo',
  'messico-cdmx-baja-california': 'messico-dia-de-los-muertos',
  'centro-america-itinerario': 'costa-rica-itinerario',
```
Perché:
- Yucatán completo → Beach Life: è il complemento di mare, e il testo ci rimanda già da Bacalar.
- Beach Life → Yucatán completo: chi ha fatto la costa trova l'interno maya. Oggi Beach Life punta a `centro-america-itinerario`; se preferite tenerlo, lasciate quella voce e usate solo le altre.
- Día de los Muertos → Yucatán completo: a fine ottobre lo Yucatán ha l'Hanal Pixán, e il testo lo cita.
- CDMX e Baja → Día de los Muertos: le due proposte partono entrambe da Città del Messico.
- Centro America resta su Costa Rica come oggi. Alternativa: `'centro-america-itinerario': 'messico-yucatan-completo'`, perché Calakmul è a ridosso del Petén guatemalteco.

## 6. Già a posto, nessuna azione
- `src/content/mini-guide-verificate.ts`: `messico` è già nel set, le tre schede nuove mostrano la mini guida.
- Foto: nessuna inserita; campi `immagine` omessi (destinazioni e giorni).
