# Foto e video senza origine chiara

Controllo del 6 novembre 2026 (sezione 14 del brief). Nessun file è stato cancellato o sostituito: questo è solo l'elenco da chiarire.

## Come è stato fatto il controllo

- I crediti sono in `src/content/*-crediti.ts` più `src/content/altre-foto-crediti.ts` (nuovo, ricavato da `docs/foto-licenze.md`). Script di verifica: 1117 voci, **0 senza autore, licenza o URL della fonte**; la pagina `/crediti-fotografici` le mostra tutte (opera, autore, licenza, link), raggruppate per tipo.
- Convenzione del repo: i file con `-riccardo` nel nome sono foto/fotogrammi di Rick (vedi `docs/foto/SOSTITUZIONI.md`); le foto del giorno per giorno assenti da `viaggi-giorno-foto-crediti.ts` sono dichiarate «scatti reali del viaggio» nel commento di quel file. Le due regole non sono verificabili dal codice: valgono finché Rick le conferma.
- I crediti sono legati a slug/titoli, non ai percorsi dei file: un controllo file-per-file completo (1871 immagini referenziate, 1745 senza `-riccardo` nel nome) non è possibile senza una mappa file → fonte. Qui sotto ci sono i casi in cui l'origine manca di sicuro.

## 1. Immagini delle Meraviglie senza credito

`src/content/meraviglie-foto-crediti.ts` è vuoto, ma quattro hero non sono di Rick (nome senza `-riccardo`) e non hanno fonte in docs:

| File | Usato in |
|---|---|
| `/images/meraviglie/grande-muraglia-cinese.jpg` | content/meraviglie.ts |
| `/images/meraviglie/cristo-redentore.jpg` | content/meraviglie.ts |
| `/images/meraviglie/chichen-itza.jpg` | content/meraviglie.ts |
| `/images/meraviglie/colosseo.jpg` | content/meraviglie.ts |

## 2. Copertine di viaggio senza credito e senza `-riccardo`

| Viaggio | File | Note |
|---|---|---|
| thailandia | `/images/copertine/thailandia.jpg` | citata in docs/foto/SOSTITUZIONI.md tra quelle NON sostituite (clip troppo piccole): origine non scritta |
| florida-road-trip | `/images/copertine/florida-360.jpg` | — |
| transilvania-express | `/images/copertine/transilvania-express.jpg` | — |
| bulgaria-bansko-rila | `/images/copertine/bulgaria-bansko-rila.jpg` | — |
| costa-rica-itinerario | `/images/copertine/costa-rica-360.jpg` | — |
| giava-bali-gili | `/images/viaggi/giava-bali-gili/bromo-alba.jpg` | l'alt dice «visto dal drone»: forse di Rick, da confermare (docs/itinerari-combo/giava-bali-gili-registrazione.md non indica la fonte) |

`src/content/viaggi-copertine-crediti.ts` dice anche che le copertine «già in `copertine/` prima di questo file» e le `-stock.jpg` sono «sorgente non ritracciata retroattivamente».

## 3. File `-stock` ancora usati nelle pagine

59 dei 67 file `*-stock.jpg` in `public/images` sono ancora referenziati nel sorgente (gli altri 8 non sono più usati). Il nome dice «repertorio», ma nessun file di crediti li collega a un autore: o hanno un credito sotto la chiave `<paese>/<slug>` di `destinazioni-foto-crediti.ts` (da verificare voce per voce), o l'origine è persa.

| File | Usato in (file italiani) |
|---|---|
| `/images/brasile/manaus-stock.jpg` | content/amazzonia-es.ts content/amazzonia-en.ts content/amazzonia.ts content/destinazioni/brasile.ts  |
| `/images/brasile/pantanal-stock.jpg` | content/destinazioni/brasile.ts  |
| `/images/bulgaria/bansko-stock.jpg` | content/esperienze/bulgaria.ts content/destinazioni/bulgaria.ts  |
| `/images/costa-rica/manuel-antonio-stock.jpg` | content/destinazioni/costa-rica.ts  |
| `/images/costa-rica/monteverde-stock.jpg` | content/esperienze/costa-rica.ts content/destinazioni/costa-rica.ts  |
| `/images/costa-rica/puerto-viejo-stock.jpg` | content/destinazioni/costa-rica.ts  |
| `/images/costa-rica/san-jose-stock.jpg` | content/destinazioni/costa-rica.ts  |
| `/images/costa-rica/sarapiqui-stock.jpg` | content/destinazioni/costa-rica.ts  |
| `/images/costa-rica/tortuguero-stock.jpg` | content/destinazioni/costa-rica.ts  |
| `/images/costa-rica/uvita-stock.jpg` | content/destinazioni/costa-rica.ts  |
| `/images/florida/cape-canaveral-stock.jpg` | content/destinazioni/florida.ts  |
| `/images/florida/everglades-stock.jpg` | content/destinazioni/florida.ts  |
| `/images/florida/key-west-stock.jpg` | content/destinazioni/florida.ts  |
| `/images/florida/miami-stock.jpg` | content/esperienze/florida.ts content/destinazioni/florida.ts  |
| `/images/florida/orlando-stock.jpg` | content/destinazioni/florida.ts  |
| `/images/giordania/aqaba-stock.jpg` | content/destinazioni/giordania.ts  |
| `/images/giordania/karak-stock.jpg` | content/destinazioni/giordania.ts  |
| `/images/islanda/akureyri-stock.jpg` | content/destinazioni/islanda.ts  |
| `/images/islanda/asbyrgi-stock.jpg` | content/destinazioni/islanda.ts  |
| `/images/islanda/egilsstadir-stock.jpg` | content/destinazioni/islanda.ts  |
| `/images/islanda/grundarfjordur-stock.jpg` | content/destinazioni/islanda.ts  |
| `/images/islanda/hofn-stock.jpg` | content/destinazioni/islanda.ts  |
| `/images/islanda/keflavik-stock.jpg` | content/destinazioni/islanda.ts  |
| `/images/islanda/reykjavik-stock.jpg` | content/destinazioni/islanda.ts  |
| `/images/islanda/vik-stock.jpg` | content/destinazioni/islanda.ts  |
| `/images/marocco/agadir-stock.jpg` | content/destinazioni/marocco.ts  |
| `/images/marocco/agdz-stock.jpg` | content/destinazioni/marocco.ts  |
| `/images/marocco/ait-benhaddou-stock.jpg` | content/destinazioni/marocco.ts  |
| `/images/marocco/essaouira-stock.jpg` | content/destinazioni/marocco.ts  |
| `/images/marocco/marrakech-stock.jpg` | content/destinazioni/marocco.ts  |
| `/images/messico/janitzio-stock.jpg` | content/destinazioni/messico-centro-baja.ts  |
| `/images/messico/loreto-mision-stock.jpg` | content/destinazioni/messico-centro-baja.ts  |
| `/images/new-york/harlem-stock.jpg` | content/destinazioni/new-york.ts  |
| `/images/new-york/high-line-stock.jpg` | content/destinazioni/new-york.ts  |
| `/images/new-york/times-square-stock.jpg` | content/destinazioni/new-york.ts  |
| `/images/norvegia/a-stock.jpg` | content/destinazioni/norvegia.ts  |
| `/images/norvegia/bodo-stock.jpg` | content/destinazioni/norvegia.ts  |
| `/images/norvegia/nesland-stock.jpg` | content/destinazioni/norvegia.ts  |
| `/images/norvegia/oslo-stock.jpg` | content/destinazioni/norvegia.ts  |
| `/images/norvegia/reinebringen-stock.jpg` | content/destinazioni/norvegia.ts  |
| `/images/norvegia/svolvaer-stock.jpg` | content/destinazioni/norvegia.ts  |
| `/images/norvegia/tromso-stock.jpg` | content/destinazioni/norvegia.ts  |
| `/images/sri-lanka/hikkaduwa-stock.jpg` | content/destinazioni/sri-lanka.ts  |
| `/images/sri-lanka/negombo-stock.jpg` | content/destinazioni/sri-lanka.ts  |
| `/images/sri-lanka/nuwara-eliya-stock.jpg` | content/destinazioni/sri-lanka.ts  |
| `/images/svezia/abisko-stock.jpg` | content/paesi/svezia.ts content/destinazioni/svezia.ts  |
| `/images/svezia/kiruna-stock.jpg` | content/esperienze/svezia.ts content/destinazioni/svezia.ts  |
| `/images/svezia/stoccolma-stock.jpg` | content/destinazioni/svezia.ts  |
| `/images/thailandia/bangkok-stock.jpg` | content/esperienze/thailandia.ts content/destinazioni/thailandia.ts  |
| `/images/thailandia/chiang-mai-stock.jpg` | content/destinazioni/thailandia.ts  |
| `/images/thailandia/hua-hin-stock.jpg` | content/destinazioni/thailandia.ts  |
| `/images/thailandia/koh-phangan-stock.jpg` | content/destinazioni/thailandia.ts  |
| `/images/thailandia/krabi-stock.jpg` | content/destinazioni/thailandia.ts  |
| `/images/thailandia/sam-roi-yot-stock.jpg` | content/destinazioni/thailandia.ts  |
| `/images/thailandia/similan-stock.jpg` | content/destinazioni/thailandia.ts  |
| `/images/transilvania/brasov-stock.jpg` | content/destinazioni/transilvania.ts  |
| `/images/transilvania/bucarest-stock.jpg` | content/destinazioni/transilvania.ts  |
| `/images/transilvania/sighisoara-stock.jpg` | content/destinazioni/transilvania.ts  |
| `/images/transilvania/transfagarasan-stock.jpg` | content/destinazioni/transilvania.ts  |

## Cosa serve da Rick

1. Per ogni file qui sopra: è una tua foto? Se sì, basta dirlo (si può rinominare con `-riccardo`). Se no, autore + licenza + URL della fonte, da aggiungere al file di crediti giusto.
2. Se l'origine non si ritrova: sostituirla con una foto tua o con una di licenza documentata (agente foto/contenuti, non questo).
