# Traduzione dei contenuti (inglese, poi spagnolo)

Istruzioni per gli agenti che traducono i contenuti del sito Make It Yours World.
Lingua d'arrivo indicata nel compito: `en` (inglese, americano) o `es` (spagnolo di Spagna).
I gruppi di file sono in `docs/i18n/gruppi-traduzione.json`.

## Dove scrivere
Ogni file sorgente `src/content/<percorso>` diventa `src/content/i18n/<lingua>/<percorso>`, stesso nome.
Esempi (en):
- `src/content/paesi/giappone.ts` → `src/content/i18n/en/paesi/giappone.ts`
- `src/content/viaggi/05-giappone-itinerario.md` → `src/content/i18n/en/viaggi/05-giappone-itinerario.md`
- `src/content/viaggi-dati/giappone-360.ts` → `src/content/i18n/en/viaggi-dati/giappone-360.ts`

Più un file di slug per gruppo: `src/content/i18n/<lingua>/slug/<gruppo>.json` (vedi sotto).
Non toccare nessun altro file. Niente git, niente ricerche sul web, niente installazioni.

## Regole di contenuto (le più importanti)
- **Mai inventare.** Traduci quello che c'è: niente fatti, prezzi, nomi, consigli o ricordi nuovi.
  Numeri, prezzi, valute, orari, date, nomi di hotel, ristoranti e luoghi restano identici.
- **Voce:** è il diario di viaggio di Rick, in prima persona, diretto e caldo. In inglese
  naturale da blog di viaggio (US English), non letterale; in spagnolo naturale di Spagna.
  Niente tono da brochure, niente superlativi aggiunti.
- Riferimenti all'Italia restano veri: «cittadini italiani» = "Italian citizens",
  «come la nostra primavera» = "like spring in Italy". Non adattare alla nazionalità del lettore.
- Nomi propri di luoghi nella forma usata nella lingua d'arrivo (Firenze → Florence, Monte Fuji → Mount Fuji),
  nomi di locali e hotel invariati.
- **Togli gli appunti di lavoro interni**: parentesi o frasi con «da confermare», «da ricordare»,
  «da completare», «da recuperare», «con foto/ricordi», «anno da confermare». Non tradurle.
- Markdown (grassetto, elenchi, tabelle, link) resta com'è; traduci solo il testo.

## File .ts (paesi, destinazioni, esperienze, viaggi-dati, meraviglie, attrezzatura…)
- Stessi `import`, stessi nomi esportati, stessi tipi, stessa struttura e stesso ordine degli elementi.
- Traduci **ogni stringa leggibile dal lettore** (titoli, descrizioni, schede, elenchi, `imageAlt`,
  `miaEsperienza`, `nome` dei luoghi se ha una forma diversa nella lingua d'arrivo).
- **Non tradurre e non cambiare** questi campi: `slug`, `paeseSlug`, `destinazioneSlug`, `tripSlug`,
  `tripSlugs`, `esperienzeSlugs`, `destinazioniSlugs`, `immagine`, `heroImage`, `href`, URL, coordinate,
  `lat`/`lng`, `ordine`, `continente`, `giudizio`, `intensita`, `stato*`, `statoPernottamento`, chiavi degli oggetti.
- I commenti del codice si possono togliere (non servono nella copia tradotta).
- Stringhe: usa le virgolette doppie `"..."` quando il testo contiene apostrofi (in inglese capita spesso),
  oppure scappa `\'`. Il file deve essere TypeScript valido.
- **Controllo obbligatorio** dopo ogni file: `node --check <file>`; se dà errore, correggi.

## File .md dei viaggi
- La prima riga `# Titolo` si traduce.
- Le etichette dei metadati restano **in italiano, identiche** (il programma le legge):
  `**Stato bozza:**`, `**Periodo del viaggio:**`, `**Durata:**`, `**Compagni di viaggio:**`, `**Categoria:**`.
  Traduci i valori, **tranne `Categoria`**, che resta identica all'originale.
- La riga `---` dopo i metadati resta.
- Questi titoli `##` restano **in italiano, identici** (il programma li riconosce, il lettore non li vede così):
  `Apertura personale`, `Scheda pratica`, `Itinerario giorno per giorno` (o l'`Itinerario…` originale, identico),
  `Dove abbiamo dormito`, `Dove abbiamo mangiato`, `Chiusura personale`, `Tag`.
  Il contenuto sotto di essi si traduce, tranne la sezione `Tag`, che resta identica.
- Sezioni da **non** copiare (sono interne): `Nota su questa bozza`, `Materiale grezzo…`, `Foto/media`.
- Gli altri titoli `##` si traducono. Due regole fisse per l'inizio del titolo:
  «Cosa vedere…» → `What to see…` (es: `Qué ver…`); «Consigli pratici…» → `Practical tips…` (es: `Consejos prácticos…`).
- Giorni: `### Giorno 1 (06.04) — Tokyo, Asakusa…` → `### Day 1 (06.04) — Tokyo, Asakusa…`
  (es: `### Día 1 (06.04) — …`). Stesso numero, stesse date, stesso ordine, nessun giorno tolto o aggiunto.
  I giorni che iniziano con `TBD` restano `TBD`.

## Viaggi: il .md e il suo viaggi-dati vanno insieme
In `viaggi-dati/*.ts`, `giorni[].titoloGiorno` deve essere **esattamente** il titolo del giorno
del .md tradotto (il testo dopo `### `). Stesso numero di voci e stesso ordine dell'originale.

## File di slug del gruppo
`src/content/i18n/<lingua>/slug/<gruppo>.json`, con solo le voci dei file del tuo gruppo:
```json
{
  "paesi": { "giappone": "japan" },
  "destinazioni": { "giappone/monte-fuji-chureito": "mount-fuji-chureito" },
  "esperienze": { "giappone/fushimi-inari-alba": "fushimi-inari-at-dawn" },
  "viaggi": { "giappone-itinerario": "japan-itinerary" }
}
```
Slug: minuscole, trattini, solo a-z 0-9, brevi, con le parole che uno cercherebbe nella lingua d'arrivo.
Se il nome è uguale nelle due lingue, lo slug resta uguale (`kyoto` → `kyoto`). Unici dentro lo stesso Paese.
Chiave delle destinazioni/esperienze: `<paeseSlug>/<slug>` (slug originali).

## Quando hai finito
Rispondi con: file scritti, file saltati (e perché), dubbi di traduzione. Nessun riassunto lungo.
