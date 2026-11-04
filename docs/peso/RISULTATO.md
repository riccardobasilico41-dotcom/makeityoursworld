# Alleggerimento di public/ (4/11/2026)

## Prima e dopo per cartella (du)

| Cartella | Prima | Dopo | Risparmio |
|---|---|---|---|
| public/images | 749 MB | 544 MB | -205 MB |
| public/videos | 260 MB | 217 MB | -43 MB |
| public/guide-pdf | 63 MB | 63 MB | non toccata |
| **Totale public/** | **1.072 MB** | **824 MB** | **-248 MB (-23%)** |

## Cosa è stato fatto

- **Foto:** 416 JPEG sopra 450 KB esaminate, 371 ricompresse (lato lungo massimo 2000 px, qualità 80, JPEG progressivo; tolti i metadati EXIF tranne l'orientamento, tenuto il profilo colore ICC). Da 416,6 MB a 184,2 MB. Le altre 45 erano già leggere: lasciate così. Nomi e formati invariati. Escluse filigrane/, tanzania/, mappe/ e viaggi/giava-bali-gili/ (create oggi da altri agenti). Nessun PNG sopra 450 KB.
- **Video:** 74 MP4 usati ricodificati in H.264 (libx264, CRF 27, preset slow, faststart, senza audio, frame rate massimo 30 fps), con larghezza invariata (720p, hero 1600 px). Il file è stato sostituito solo se il guadagno superava il 10%: 41 sostituiti, 33 lasciati (erano già efficienti). Da 257,5 MB a 212,4 MB.
- **Hero (runaway-hero-1600.mp4, 54,6 MB, 5'37"):** già a 1,3 Mbit/s, la ricodifica non guadagnava nulla. Su telefono il codice carica già runaway-hero-mobile-40s.mp4 (4,4 MB, 960 px), anche lui già ottimizzato. Per scendere davvero bisognerebbe accorciare il video desktop (per esempio a 40-60 s): è una scelta di contenuto, quindi non l'ho fatta.
- **Versioni mobile dei video dei viaggi:** non create, perché il codice usa solo `src` per quei video e aggiungerle richiederebbe modifiche a src/content.
- **Controllo qualità:** ho confrontato fotogrammi prima e dopo (cape-canaveral-stock.jpg ridotta da 11,3 MB a 0,48 MB; eolie-in-vela.mp4 al secondo 5) e non ci sono differenze visibili.
- **File non usati:** vedi non-usati.md (circa 6,9 MB, non cancellati).
- Codice, src/content e git non toccati.

## I 20 file più alleggeriti

| # | File | Prima | Dopo | |
|---|---|---|---|---|
| 1 | public/images/florida/cape-canaveral-stock.jpg | 11.31 MB | 0.48 MB | -96% |
| 2 | public/images/bulgaria/bansko-stock.jpg | 10.09 MB | 0.96 MB | -90% |
| 3 | public/images/new-york/harlem-stock.jpg | 9.50 MB | 0.98 MB | -90% |
| 4 | public/images/marocco/agdz-stock.jpg | 7.94 MB | 0.45 MB | -94% |
| 5 | public/images/costa-rica/manuel-antonio-stock.jpg | 7.21 MB | 0.43 MB | -94% |
| 6 | public/images/thailandia/khao-sok-stock.jpg | 6.72 MB | 0.48 MB | -93% |
| 7 | public/images/costa-rica/sarapiqui-stock.jpg | 6.76 MB | 0.74 MB | -89% |
| 8 | public/images/copertine/parigi-5-giorni.jpg | 5.28 MB | 0.25 MB | -95% |
| 9 | public/images/islanda/vik-stock.jpg | 5.86 MB | 0.83 MB | -86% |
| 10 | public/images/florida/everglades-stock.jpg | 5.26 MB | 0.60 MB | -89% |
| 11 | public/videos/trips/baleari-itinerario.mp4 | 8.43 MB | 4.14 MB | -51% |
| 12 | public/videos/trips/praga-weekend.mp4 | 6.84 MB | 3.20 MB | -53% |
| 13 | public/videos/trips/cracovia-weekend.mp4 | 7.45 MB | 3.83 MB | -49% |
| 14 | public/images/giappone/tokyo-stock.jpg | 4.17 MB | 0.57 MB | -86% |
| 15 | public/images/islanda/asbyrgi-stock.jpg | 4.21 MB | 0.61 MB | -86% |
| 16 | public/images/marocco/essaouira-stock.jpg | 3.83 MB | 0.40 MB | -90% |
| 17 | public/images/transilvania/brasov-stock.jpg | 3.88 MB | 0.55 MB | -86% |
| 18 | public/images/copertine/giappone-360.jpg | 3.93 MB | 0.62 MB | -84% |
| 19 | public/videos/trips/andalusia-itinerario.mp4 | 6.34 MB | 3.04 MB | -52% |
| 20 | public/images/copertine/castelli-loira.jpg | 3.61 MB | 0.38 MB | -89% |
