# File in public/ non usati dal codice

Controllo del 4/11/2026: per ogni file di `public/images`, `public/videos` e `public/guide-pdf` ho cercato il percorso e il nome file in tutto `src/` (compresi i percorsi costruiti con `${IMG}/…` e i PDF letti da `guide-pdf.json`). Questi non compaiono da nessuna parte. **Non sono stati cancellati**: decide Rick.

| File | Peso | Nota |
|---|---|---|
| public/videos/hero-travel.mp4 | 5,97 MB | vecchio video hero, sostituito da runaway-hero-1600.mp4 |
| public/videos/hero-travel-poster.jpg | 174 KB | poster del vecchio hero |
| public/images/messico/cenote-ik-kil-1.jpg | 521 KB | foto di repertorio non collegata |
| public/images/india/agra-minareto-tramonto-riccardo.jpg | 131 KB | foto di Rick del 30/10: forse la collegherà l'agente che sta sostituendo le foto |
| public/images/giordania/petra-tesoro-colonne-riccardo.jpg | 109 KB | come sopra |

Totale: circa 6,9 MB. Tutto il resto (circa 1.760 file) è usato.

Non controllate: `public/images/tanzania`, `public/images/mappe` e `public/images/viaggi/giava-bali-gili` (create oggi da altri agenti, riferimenti ancora in corso).
