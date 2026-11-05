# Verifica mini guide: gruppo europa-sud (Italia, Spagna, Portogallo)

Data: 5 novembre 2026. Correzioni fatte in `src/content/destinazioni/` e nelle copie
`src/content/i18n/en|es/destinazioni/` (stessi dati, testo tradotto).

**Limite:** la ricerca web (WebSearch) si è esaurita a metà lavoro, perché il budget è condiviso con
gli altri agenti in parallelo. Ho continuato solo con WebFetch sulle pagine ufficiali raggiungibili.
I luoghi non elencati qui sotto **non sono stati verificati** e vanno ripresi in un secondo passaggio.

## Italia

Corretto o aggiunto:
- **Musei Vaticani**: orari lun-sab 8-20 (ultimo ingresso 18), ultima domenica 9-14 gratuita, chiusure
  nelle festività religiose; aggiunto il costo: 20 € intero, 25 € con prenotazione online (2026).
- **Palazzo Ducale (Venezia)**: orari 9-19 (apr-ott) e 9-18 (nov-mar); aggiunto il costo: 35 € intero,
  30 € online con più di 30 giorni di anticipo (2026). Riscritto il consiglio, che diceva solo di
  controllare il prezzo.
- **MANN**: confermata la chiusura del martedì; aggiunti gli orari 9-19:30, ultimo ingresso 18:30.
- **Pompei**: **tolto il 1 maggio** dalle chiusure (per il sito ufficiale chiude il 25 dicembre e il
  1 gennaio, salvo aperture straordinarie); aggiunti gli orari stagionali e il costo: Express 20 €,
  Pompei+ 25 € (dal 12/01/2026). Confermati i biglietti nominativi e il tetto di 20.000 ingressi.
- **Pinacoteca di Brera**: confermata la chiusura del lunedì; aggiunti gli orari 8:30-19:15 con
  prenotazione e il costo: 20 € con il biglietto Grande Brera (2026).
- **Stromboli** (isole minori): **tolto il limite «400 metri»**, che non sono riuscito a confermare.
  Il testo ora rimanda all'ordinanza in vigore (Comune di Lipari, guide). Il «solo con guida» è
  diventato «oltre la quota libera», in linea con la scheda «Salita a Stromboli» delle Eolie.
- **Museo Egizio**: orari confermati; aggiunto l'avviso sulla chiusura temporanea delle Sale Storiche
  dal 12/12/2025.
- **Galleria Borghese**: **tolto il costo** «16 + 2 € (fonti secondarie)», che non si trova sul sito
  ufficiale. Confermati la chiusura del lunedì e l'obbligo di prenotazione con fasce di due ore.

Verificato e lasciato com'era: chiusura del lunedì di Castello Sforzesco (il prezzo dei musei non è
verificabile: 5 o 10 € secondo le fonti, quindi non l'ho aggiunto); Cenacolo (15 €, 2 € per i 18-25
anni, chiuso il lunedì); Uffizi (25/29 €, chiuso il lunedì); Musei Reali di Torino (chiusi il
mercoledì, 9-19).

Non verificato, per l'esaurimento della ricerca: le regole di accesso al **Lago di Sorapis** (la scheda
non dichiara contingentamenti, ma non ho potuto escluderli per il 2026); il pedaggio delle Tre Cime
(40 €); le ZTL (i testi sono già generici, senza orari, e sono corretti nella sostanza); Colosseo e
le altre schede italiane.

## Spagna

- **Real Alcázar (Siviglia)**: aggiunti gli orari (9:30-19 apr-set, 9:30-17 ott-mar), le chiusure
  (1 e 6 gennaio, Venerdì Santo, 25 dicembre) e il costo: 15,50 € (sito ufficiale). L'ingresso
  gratuito del lunedì, citato da alcune fonti, non compare sul sito ufficiale e non l'ho aggiunto.
- **Alhambra**: **tolto «fino a tre mesi prima»** (non confermato; altre fonti dicono un anno) e
  «solo online» (si vende anche al telefono e alle casse automatiche); aggiunti orari e chiusure e il
  costo: 22,27 € più la commissione online (2026).
- **Guggenheim Bilbao**: aggiunti gli orari (mar-dom 10-19, fino alle 20 in Settimana Santa e dal
  15/6 al 13/9), le aperture straordinarie del lunedì (in estate) e il costo che il sito mostra a
  novembre 2026: 12 € intero, gratis sotto i 18 anni.
- **Cap de Formentor**: aggiunta la regola vera: dal 15 maggio al 18 ottobre 2026, dalle 10 alle 22,
  la strada del faro è chiusa alle auto private; bus TIB 334 da Alcúdia e Port de Pollença; parcheggio
  della spiaggia fino a esaurimento posti. Aggiunto l'url della DGT.
- Mezquita di Córdoba: confermati 15 € e l'ingresso gratuito lun-sab 8:30-9:30, senza modifiche.

**Fuori dai campi della mini guida, da correggere a parte:** in `spagna.ts` la sezione `costi` di
Granada dice «Alhambra generale circa 19,60€» (oggi 22,27 €). `erroriDaEvitare` dice che i biglietti
si vendono «solo online fino a tre mesi prima». In `costi` di Bilbao ci sono 18/15 €, mentre il sito
oggi mostra 12 €. Non li ho toccati perché il passaggio riguarda solo le mini guide.

## Portogallo

- **Palácio da Pena**: aggiunti gli orari (parco 9-19, palazzo 9:30-18:30, ultimo biglietto 17:30),
  l'obbligo di data e fascia oraria, e il divieto per le auto private sulle strade d'accesso, con la
  navetta ogni 15 minuti.
- Jerónimos e Torre de Belém: la pagina ufficiale non mostra gli orari; la chiusura del lunedì resta
  così, ma non è verificata.

## Fonti principali
- https://www.museivaticani.va/content/museivaticani-mobile/it/organizza-visita/tariffe-e-biglietti.html
- https://palazzoducale.visitmuve.it/informazioni-pratiche/
- https://pompeiisites.org/info-per-la-visita/orari-e-tariffe/ e https://pompeiisites.org/
- https://cultura.gov.it/evento/ferragosto-2026-al-mann
- https://cultura.gov.it/luogo/pinacoteca-di-brera-1
- https://galleriaborghese.cultura.gov.it/visita/
- https://cenacolovinciano.org/info/
- https://www.uffizi.it/gli-uffizi
- https://www.museoegizio.it/info/orari/
- https://museireali.cultura.gov.it/
- https://www.alhambra-patronato.es/visitar/horarios-y-tarifas
- https://www.alcazarsevilla.org/prepara-la-visita/
- https://www.guggenheim-bilbao.eus/horarios-y-tarifas
- https://www.dgt.es/conoce-el-estado-del-trafico/rutas-de-interes/trafico-acceso-faro-de-formentor/
- https://mezquita-catedraldecordoba.es/organiza-la-visita/entradas-y-horarios/
- https://www.parquesdesintra.pt/pt/parques-monumentos/parque-e-palacio-nacional-da-pena/
