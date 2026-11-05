# Giappone: voci da aggiungere ai registri condivisi

Novembre 2026. I file di contenuto sono già scritti (it/en/es). Questi registri non li ho toccati:
vanno aggiunte a mano le voci qui sotto. Finché non ci sono, i tre viaggi compaiono già in `/viaggi`
(il markdown viene letto dalla cartella), ma senza dati strutturati, schede collegate e slug tradotti.

Viaggi nuovi:
| n. | slug it | en | es | file dati | export |
|---|---|---|---|---|---|
| 91 | `classic-japan` | `classic-japan` | `japon-clasico` | `viaggi-dati/classic-japan.ts` | `classicJapanMeta` |
| 92 | `okinawa-estate` | `okinawa-summer` | `okinawa-verano` | `viaggi-dati/okinawa-estate.ts` | `okinawaEstateMeta` |
| 93 | `hokkaido-sci-giappone` | `hokkaido-japan-skiing` | `hokkaido-esqui-japon` | `viaggi-dati/hokkaido-sci-giappone.ts` | `hokkaidoSciGiapponeMeta` |

Destinazioni nuove (già in `src/content/destinazioni/giappone.ts` e nelle copie en/es, ordine 9-22):
`magome-tsumago`, `matsumoto-kamikochi`, `takayama`, `shirakawa-go`, `kanazawa`, `koya-san`,
`okinawa-naha`, `isole-kerama`, `miyako`, `ishigaki-yaeyama`, `sapporo`, `niseko`, `furano`, `hakuba`.
Le schede esistenti `tokyo`, `kyoto`, `nara`, `osaka`, `hiroshima-miyajima` ora hanno anche `'classic-japan'` in `tripSlugs`.

## 1. `src/lib/geo.ts`
Import (vicino a `giappone360Meta`, riga ~33):
```ts
import { classicJapanMeta } from '@/content/viaggi-dati/classic-japan'
import { okinawaEstateMeta } from '@/content/viaggi-dati/okinawa-estate'
import { hokkaidoSciGiapponeMeta } from '@/content/viaggi-dati/hokkaido-sci-giappone'
```
Nell'array `TRIP_META` (dopo `giappone360Meta,`):
```ts
  classicJapanMeta,
  okinawaEstateMeta,
  hokkaidoSciGiapponeMeta,
```
Le destinazioni sono già nell'array `destinazioniGiappone`: nessun import nuovo.

## 2. `src/content/i18n/en/indice.ts` e `src/content/i18n/es/indice.ts`
Stessa cosa in tutti e due i file. Import (vicino a riga 194):
```ts
import { classicJapanMeta as viaggi_dati_classicJapanMeta } from './viaggi-dati/classic-japan'
import { okinawaEstateMeta as viaggi_dati_okinawaEstateMeta } from './viaggi-dati/okinawa-estate'
import { hokkaidoSciGiapponeMeta as viaggi_dati_hokkaidoSciGiapponeMeta } from './viaggi-dati/hokkaido-sci-giappone'
```
Nell'array `tripMeta` (ordine alfabetico, come gli altri): `viaggi_dati_classicJapanMeta` dopo `viaggi_dati_centroAmericaItinerarioMeta`/`viaggi_dati_cinaPaesaggiMeta`, `viaggi_dati_hokkaidoSciGiapponeMeta` dopo `viaggi_dati_grandiCittaItaliaMeta`, `viaggi_dati_okinawaEstateMeta` dopo `viaggi_dati_normandiaBretagnaMeta`.

## 3. Slug localizzati: `src/content/i18n/en/slug.json`, `src/content/i18n/es/slug.json` e gli shard `src/content/i18n/{en,es}/slug/g11.json` (quello con le altre voci Giappone)
Sezione `destinazioni`:
| chiave | en | es |
|---|---|---|
| `giappone/magome-tsumago` | `magome-tsumago` | `magome-tsumago` |
| `giappone/matsumoto-kamikochi` | `matsumoto-kamikochi` | `matsumoto-kamikochi` |
| `giappone/takayama` | `takayama` | `takayama` |
| `giappone/shirakawa-go` | `shirakawa-go` | `shirakawa-go` |
| `giappone/kanazawa` | `kanazawa` | `kanazawa` |
| `giappone/koya-san` | `mount-koya` | `monte-koya` |
| `giappone/okinawa-naha` | `okinawa-naha` | `okinawa-naha` |
| `giappone/isole-kerama` | `kerama-islands` | `islas-kerama` |
| `giappone/miyako` | `miyako-islands` | `islas-miyako` |
| `giappone/ishigaki-yaeyama` | `ishigaki-yaeyama-islands` | `ishigaki-islas-yaeyama` |
| `giappone/sapporo` | `sapporo` | `sapporo` |
| `giappone/niseko` | `niseko-rusutsu-kiroro` | `niseko-rusutsu-kiroro` |
| `giappone/furano` | `furano` | `furano` |
| `giappone/hakuba` | `hakuba` | `hakuba` |

Sezione `viaggi`:
| chiave | en | es |
|---|---|---|
| `classic-japan` | `classic-japan` | `japon-clasico` |
| `okinawa-estate` | `okinawa-summer` | `okinawa-verano` |
| `hokkaido-sci-giappone` | `hokkaido-japan-skiing` | `hokkaido-esqui-japon` |

## 4. `src/content/viaggi-editorial.ts` (+ `i18n/en/viaggi-editorial.ts`, `i18n/es/viaggi-editorial.ts`)
Gli hook sono in voce di guida: nessun ricordo personale.

Italiano:
```ts
  'classic-japan': {
    seoTitle: "Classic Japan in 17 giorni: itinerario con Alpi, Takayama e Shirakawa-go",
    seoDescription:
      "Tokyo, Hakone, il Nakasendō, Kamikochi, Takayama, Shirakawa-go, Kanazawa, Kyoto, Kōya-san e Miyajima in 17 giorni, con JR Pass, bus da prenotare e varianti.",
    socialTitle: "Il Giappone classico più l'entroterra: Nakasendō, Shirakawa-go e una notte al tempio",
    editorialHook:
      "Tra Magome e Tsumago si cammina otto chilometri sulla strada dei samurai, e i bagagli arrivano da soli.",
    editorialHookType: 'hidden-side',
  },
  'okinawa-estate': {
    seoTitle: "Okinawa d'estate: itinerario di 13 giorni tra Kerama, Miyako e Ishigaki",
    seoDescription:
      "Naha, Churaumi, Yanbaru, le Kerama, Miyako, Iriomote e Taketomi in 13 giorni, con traghetti, voli interni, stagione delle piogge e tifoni mese per mese.",
    socialTitle: "Tartarughe, mangrovie e villaggi di corallo: Okinawa d'estate",
    editorialHook:
      "Il mare migliore di Okinawa arriva proprio nei mesi dei tifoni: ad agosto in media se ne avvicinano più di due.",
    editorialHookType: 'before-you-go',
  },
  'hokkaido-sci-giappone': {
    seoTitle: "Sciare in Giappone: Niseko, Rusutsu, Furano e Hakuba, prezzi 2026-27",
    seoDescription:
      "Dove sciare a Hokkaido e sulle Alpi giapponesi, quando prenotare, skipass 2026-27, bus da New Chitose, Yuki Matsuri, Niseko Rules, onsen e tatuaggi.",
    socialTitle: "La neve polverosa del Giappone: dove andare, quando prenotare, quanto costa",
    editorialHook:
      "A Niseko gli alloggi per Capodanno si prenotano anche un anno prima: è la prima voce che finisce.",
    editorialHookType: 'save-this',
  },
```
Inglese:
```ts
  'classic-japan': {
    seoTitle: "Classic Japan itinerary 17 days: Alps, Takayama, Shirakawa-go",
    seoDescription:
      "Tokyo, Hakone, the Nakasendo, Kamikochi, Takayama, Shirakawa-go, Kanazawa, Kyoto, Mount Koya and Miyajima in 17 days, with the JR Pass, buses to book and variants.",
    socialTitle: "Classic Japan plus the interior: the Nakasendo, Shirakawa-go and a night in a temple",
    editorialHook:
      "Between Magome and Tsumago you walk eight kilometers of the old samurai road, and your bags travel on their own.",
    editorialHookType: 'hidden-side',
  },
  'okinawa-estate': {
    seoTitle: "Okinawa in summer: 13-day itinerary, Kerama, Miyako, Ishigaki",
    seoDescription:
      "Naha, Churaumi, Yanbaru, the Kerama Islands, Miyako, Iriomote and Taketomi in 13 days, with ferries, domestic flights, the rainy season and typhoons month by month.",
    socialTitle: "Turtles, mangroves and coral villages: Okinawa in summer",
    editorialHook:
      "Okinawa's best sea comes in the typhoon months: in August more than two pass close on average.",
    editorialHookType: 'before-you-go',
  },
  'hokkaido-sci-giappone': {
    seoTitle: "Skiing in Japan: Niseko, Rusutsu, Furano, Hakuba, 2026-27 prices",
    seoDescription:
      "Where to ski in Hokkaido and the Japanese Alps, when to book, 2026-27 lift passes, buses from New Chitose, the Snow Festival, the Niseko Rules, onsen and tattoos.",
    socialTitle: "Japan's powder snow: where to go, when to book, what it costs",
    editorialHook:
      "In Niseko, New Year lodging gets booked up to a year ahead: it is the first thing to sell out.",
    editorialHookType: 'save-this',
  },
```
Spagnolo:
```ts
  'classic-japan': {
    seoTitle: "Japón clásico en 17 días: itinerario con Alpes, Takayama y Shirakawa-go",
    seoDescription:
      "Tokio, Hakone, el Nakasendō, Kamikochi, Takayama, Shirakawa-go, Kanazawa, Kioto, Kōya-san y Miyajima en 17 días, con JR Pass, autobuses que reservar y variantes.",
    socialTitle: "El Japón clásico y el interior: Nakasendō, Shirakawa-go y una noche en un templo",
    editorialHook:
      "Entre Magome y Tsumago se caminan ocho kilómetros del antiguo camino de los samuráis, y el equipaje llega solo.",
    editorialHookType: 'hidden-side',
  },
  'okinawa-estate': {
    seoTitle: "Okinawa en verano: itinerario de 13 días por Kerama, Miyako e Ishigaki",
    seoDescription:
      "Naha, Churaumi, Yanbaru, las Kerama, Miyako, Iriomote y Taketomi en 13 días, con ferris, vuelos internos, la temporada de lluvias y los tifones mes a mes.",
    socialTitle: "Tortugas, manglares y pueblos de coral: Okinawa en verano",
    editorialHook:
      "El mejor mar de Okinawa llega justo en los meses de tifones: en agosto se acercan de media más de dos.",
    editorialHookType: 'before-you-go',
  },
  'hokkaido-sci-giappone': {
    seoTitle: "Esquiar en Japón: Niseko, Rusutsu, Furano y Hakuba, precios 2026-27",
    seoDescription:
      "Dónde esquiar en Hokkaido y en los Alpes japoneses, cuándo reservar, forfaits 2026-27, autobuses desde New Chitose, el Yuki Matsuri, las Niseko Rules, onsen y tatuajes.",
    socialTitle: "La nieve polvo de Japón: dónde ir, cuándo reservar, cuánto cuesta",
    editorialHook:
      "En Niseko el alojamiento para Año Nuevo se reserva hasta con un año de antelación: es lo primero que se agota.",
    editorialHookType: 'save-this',
  },
```

## 5. `src/components/ProssimaDestinazione.tsx`, oggetto `ABBINAMENTI`
Proposta per i quattro viaggi del Giappone e la Corea (sostituisce la riga attuale di `giappone-itinerario`):
```ts
  'giappone-itinerario': 'classic-japan',
  'classic-japan': 'corea-del-sud-itinerario',
  'corea-del-sud-itinerario': 'giappone-itinerario',
  'okinawa-estate': 'classic-japan',
  'hokkaido-sci-giappone': 'classic-japan',
```
Logica: chi legge i sakura passa al giro lungo; chi finisce Classic Japan passa alla Corea (si combina con un volo breve); Okinawa e lo sci rimandano al giro classico. Se preferisci tenere `giappone-itinerario → corea-del-sud-itinerario`, allora `classic-japan → okinawa-estate`.

## 6. `src/content/mappe/coordinate.ts` (facoltativo)
Coordinate APPROSSIMATIVE del centro di ogni località, scritte a memoria e non verificate su mappa: vanno controllate una per una prima di inserirle (la regola del file è niente coordinate stimate). Senza, la mappa mostra il percorso schematico.
```ts
  'giappone/furano': [43.342, 142.383],
  'giappone/hakuba': [36.698, 137.862],
  'giappone/ishigaki-yaeyama': [24.336, 124.156],
  'giappone/isole-kerama': [26.229, 127.304],
  'giappone/kanazawa': [36.578, 136.648],
  'giappone/koya-san': [34.213, 135.584],
  'giappone/magome-tsumago': [35.576, 137.596],
  'giappone/matsumoto-kamikochi': [36.239, 137.969],
  'giappone/miyako': [24.806, 125.281],
  'giappone/niseko': [42.860, 140.704],
  'giappone/okinawa-naha': [26.212, 127.681],
  'giappone/sapporo': [43.061, 141.354],
  'giappone/shirakawa-go': [36.258, 136.906],
  'giappone/takayama': [36.141, 137.252],
```

## Fonti verificate con WebFetch (novembre 2026)
- japanrailpass.net/en/purchase/price/ — prezzi JR Pass 2026
- japanrailpass.net/en/use/special-ticket/ — biglietto Nozomi/Mizuho
- shirakawa-go.gr.jp/en/ — UNESCO 1995, illuminazioni gennaio 2027, sorteggio alloggi
- go-nagano.net/en/theme/id=16492 e japan-guide.com/e/e6078.html — Magome-Tsumago e servizio bagagli
- data.jma.go.jp/cpd/baiu/kako_baiu01.html — stagione delle piogge a Okinawa
- data.jma.go.jp/yoho/typhoon/statistics/average/average.html — tifoni per mese
- vill.zamami.okinawa.jp/sempaku/ryokin_jikoku/ — traghetti Zamami
- churaumi.okinawa/en/guide/info/ — ingresso Churaumi
- oki-park.jp/shurijo/en/ — Shuri in ricostruzione
- city.naha.okinawa.jp — Irei no Hi 23 giugno
- snowfes.com — Yuki Matsuri 2027, 4-11 febbraio
- niseko.ne.jp/en/lift/, /en/all-mountain-season-pass, /en/niseko/niseko-rules/
- rusutsu.com/en/winter-lift-tickets/, /en/access-shuttle-bus-new-chitose-airport/
- kiroro.co.jp/access-winter/
- hakubavalley.com/en/, /en/ticket_en/, /en/access_en/
- koyasan.or.jp/en/ — solo informazioni generali
- Da ricerca web (fonti secondarie): Kamikochi 2026, bus Nohi, traghetti Ishigaki-Iriomote, Iriomote a numero chiuso, Hokkaido Shinkansen rimandato al 2038 (nippon.com/Jiji).
