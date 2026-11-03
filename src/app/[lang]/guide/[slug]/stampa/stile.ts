/**
 * CSS di stampa per le guide PDF (A5). Vive qui e non in globals.css perché
 * riguarda solo questa pagina: nasconde header e footer del sito, imposta
 * @page con intestazione e numeri di pagina.
 *
 * `parte`: il PDF si stampa in due passate unite poi con pdfunite, perché
 * Chrome impagina tutto il documento con la larghezza della prima pagina e
 * non permette una copertina al vivo con margini diversi dalle altre.
 * «copertina» = solo la copertina a margine zero; «interno» = il resto.
 */
export function stileStampa(o: { paese: string; marchio: string; autore: string; verificatoAl: string; parte?: string }): string {
  const { paese, marchio, autore, verificatoAl, parte } = o
  if (parte === 'copertina') {
    return `@page { size: 148mm 210mm; margin: 0; }\n` + base() + `.copertina { margin: 0 !important; }`
  }
  const intestazione = `${marchio} · ${paese}`.replace(/"/g, '\\"')
  return `
@page {
  size: 148mm 210mm;
  margin: 15mm 12mm 14mm 13mm;
  @top-left { content: "${intestazione}"; font: 600 6.5pt/1 "Helvetica Neue", Arial, sans-serif; color: #8a847b; letter-spacing: .06em; text-transform: uppercase; vertical-align: bottom; padding-bottom: 3mm; }
  @top-right { content: "di ${autore}"; font: 600 6.5pt/1 "Helvetica Neue", Arial, sans-serif; color: #B3261E; letter-spacing: .06em; text-transform: uppercase; vertical-align: bottom; padding-bottom: 3mm; }
  @bottom-right { content: counter(page); font: 700 7.5pt/1 "Helvetica Neue", Arial, sans-serif; color: #161412; vertical-align: top; padding-top: 3mm; }
  @bottom-left { content: "Verificato a ${verificatoAl}"; font: 400 6pt/1 "Helvetica Neue", Arial, sans-serif; color: #8a847b; vertical-align: top; padding-top: 3mm; }
}
@page :first { counter-increment: page 2; }
@page copertina { @top-left { content: none } @top-right { content: none } @bottom-right { content: none } @bottom-left { content: none } }
` + base()
}

function base(): string {
  return `

html, body { background: #fff !important; }
@media print { html, body { overflow: visible !important; } }
body > header, body > footer, nextjs-portal, [data-nextjs-toast] { display: none !important; }
main { display: block; }
* { -webkit-print-color-adjust: exact; print-color-adjust: exact; box-sizing: border-box; }

.guida { color: #161412; font-family: var(--font-schibsted), Arial, sans-serif; font-size: 8.6pt; line-height: 1.42; }
@media screen {
  .guida { background: #e9e6df; padding: 10mm 0; }
  .guida > section { width: 148mm; min-height: 210mm; margin: 0 auto 8mm; background: #fff; padding: 15mm 12mm 14mm 13mm; box-shadow: 0 2px 10px rgba(0,0,0,.12); }
  .guida > section.copertina { padding: 0; margin: 0 auto 8mm; }
}

.guida h1, .guida h2, .guida h3 { font-family: var(--font-bricolage), Arial, sans-serif; letter-spacing: -0.02em; margin: 0; }
.guida h2 { font-size: 19pt; line-height: 1; font-weight: 750; margin: 1mm 0 4mm; }
.guida h3 { font-size: 10pt; font-weight: 700; margin: 4.5mm 0 1.8mm; break-after: avoid; }
.guida p { margin: 0 0 2mm; }
.occhiello { font-size: 6.8pt; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; margin: 0; }
.rosso { color: #B3261E; }
.testo { font-size: 8.8pt; }
.piccolo { font-size: 7pt; color: #4A4640; }
.forte { font-weight: 700; }
.num { text-align: right; white-space: nowrap; font-variant-numeric: tabular-nums; }
.url { font-family: "Courier New", monospace; font-size: 6.4pt; color: #4A4640; word-break: break-all; }
.fonti { font-size: 5.6pt; color: #8a847b; margin-left: .6mm; font-weight: 400; vertical-align: super; line-height: 0; }

.pagina { break-before: page; }
.a-capo { break-before: page; margin-top: 0 !important; }

/* Copertina */
.copertina { page: copertina; position: relative; width: 148mm; height: 210mm; overflow: hidden; background: #161412; color: #F6F5F1; }
.copertina-foto { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.copertina-velo { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(22,20,18,.55) 0%, rgba(22,20,18,0) 28%, rgba(22,20,18,0) 45%, rgba(22,20,18,.92) 100%); }
.copertina-testo { position: absolute; inset: 0; padding: 12mm; display: flex; flex-direction: column; justify-content: space-between; }
.marchio { font-family: "American Typewriter", var(--font-courier-prime), monospace; font-weight: 700; font-size: 11pt; }
.copertina h1 { font-size: 46pt; line-height: .92; font-weight: 800; margin: 2mm 0 3mm; color: #fff; }
.copertina .occhiello { color: #F6F5F1; }
.copertina-sotto { font-size: 10.5pt; line-height: 1.3; max-width: 105mm; color: #ECEAE3; }
.firma { font-family: var(--font-bricolage), sans-serif; font-weight: 700; font-size: 13pt; color: #fff; margin-top: 4mm !important; border-top: 2px solid #B3261E; padding-top: 2.5mm; display: inline-block; }
.verificato { font-size: 7pt; color: #cfcac0; letter-spacing: .04em; }

/* Elenchi */
.puntini { margin: 0 0 2mm; padding-left: 4mm; }
.puntini li { margin-bottom: 1.2mm; }
.puntini li::marker { color: #B3261E; }
.indice { columns: 2; column-gap: 6mm; padding-left: 5mm; margin: 0; font-size: 8pt; }
.indice li { margin-bottom: .8mm; }
.legenda { background: #F6F5F1; border-left: 2px solid #B3261E; padding: 2.5mm 3mm; margin: 3mm 0; font-size: 7.4pt; }
.legenda p { margin: 0 0 1.2mm; }
.stato { display: inline-block; font-size: 5.8pt; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; padding: .3mm 1.3mm; border-radius: 1mm; vertical-align: 1px; margin-left: 1mm; }
.stato-usato { background: #B3261E; color: #fff; }
.stato-ufficiale { background: #ECEAE3; color: #4A4640; }
.stato-non-provato { background: #fff; color: #4A4640; border: .6px solid #4A4640; }

/* Tabelle */
.tabella { width: 100%; border-collapse: collapse; margin: 0 0 2.5mm; font-size: 7.6pt; }
.tabella th, .tabella td { border-bottom: .5px solid #d8d4cc; padding: .9mm 1.2mm .9mm 0; vertical-align: top; text-align: left; }
.tabella thead th { font-size: 6.4pt; text-transform: uppercase; letter-spacing: .06em; color: #4A4640; border-bottom: 1px solid #161412; }
.tabella .totale td { font-weight: 700; border-top: 1px solid #161412; border-bottom: none; }
.tabella.stretta td { padding: .8mm 1.2mm .8mm 0; }
.tabella.righe th { width: 24mm; font-weight: 700; padding-right: 2mm; }
.tabella.numeri th { width: 52mm; font-weight: 400; }
.tabella tr { break-inside: avoid; }
.esito { background: #161412; color: #F6F5F1; padding: 3mm; font-weight: 700; font-size: 8.6pt; }
.blocco { break-inside: auto; }

/* Mappa */
.mappa-griglia { display: block; }
.mappa { display: block; width: 100%; height: auto; max-height: 160mm; margin: 0 auto 2mm; }
.m-nome { font: 700 9.5px var(--font-schibsted), Arial, sans-serif; fill: #161412; }
.m-giorno { font: 400 8px var(--font-schibsted), Arial, sans-serif; fill: #B3261E; }
.m-acqua { font: italic 400 8px var(--font-schibsted), Arial, sans-serif; fill: #5b7a86; }
.mappa-legenda { break-before: page; }
.mappa-legenda .tabella { font-size: 7.4pt; }

/* Giorni */
.giorno-testa { display: flex; gap: 3mm; align-items: flex-end; margin-bottom: 3mm; }
.giorno-num { font-family: var(--font-bricolage), sans-serif; font-weight: 800; font-size: 44pt; line-height: .8; color: #B3261E; }
.giorno-testa h2 { margin: 0; font-size: 17pt; }
.giorno-foto { margin: 0 0 3mm; }
.giorno-foto img { width: 100%; height: 34mm; object-fit: cover; display: block; }
.giorno-foto figcaption { font-size: 5.6pt; color: #8a847b; margin-top: .8mm; }
.racconto { border-left: 2px solid #B3261E; padding-left: 3mm; font-size: 8.6pt; }

.luogo, .contatto { display: flex; gap: 3mm; justify-content: space-between; align-items: flex-start; border-top: .5px solid #d8d4cc; padding: 2mm 0; break-inside: avoid; }
.luogo-testo, .contatto-testo { flex: 1; min-width: 0; }
.luogo-nome, .contatto-nome { font-weight: 700; font-size: 8.6pt; margin-bottom: 1mm !important; }
.luogo dl { display: grid; grid-template-columns: 17mm 1fr; gap: .5mm 2mm; margin: 0; font-size: 7.4pt; }
.luogo dt { color: #4A4640; font-size: 6.4pt; text-transform: uppercase; letter-spacing: .05em; padding-top: .3mm; }
.luogo dd { margin: 0; }
.contatto-cosa { font-size: 7.4pt; color: #4A4640; margin-bottom: .6mm !important; }
.riga { font-size: 7.4pt; margin: 0 0 .4mm !important; }
.gps { font-variant-numeric: tabular-nums; color: #4A4640; }
.avviso { font-size: 6.8pt; color: #8E1D17; margin: 1mm 0 0 !important; }
.qr { flex: none; }

.riquadri { display: grid; grid-template-columns: 1fr 1fr; gap: 3mm; margin-top: 3mm; break-inside: avoid; }
.riquadri:has(> :only-child) { grid-template-columns: 1fr; }
.riquadro { background: #F6F5F1; padding: 2.5mm 3mm; font-size: 7.6pt; }
.riquadro p { margin: 0 0 .8mm; }
.riquadro-titolo { font-size: 6.4pt; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: #B3261E; }
.nota { margin-top: 3mm !important; font-size: 7.6pt; border: 1px solid #161412; padding: 2.5mm 3mm; break-inside: avoid; }

/* Budget, valigia, frasario */
.budget td.vuoto { width: 17mm; border-bottom: .5px solid #161412; }
.budget td { padding-top: 2mm; }
.colonne { columns: 2; column-gap: 6mm; }
.colonne .blocco { break-inside: avoid; }
.colonne h3:first-child { margin-top: 0; }
.spunta { list-style: none; padding: 0; margin: 0 0 3mm; font-size: 7.8pt; }
.spunta li { display: flex; gap: 2mm; align-items: flex-start; margin-bottom: 1.6mm; }
.casella { flex: none; width: 3mm; height: 3mm; border: .8px solid #161412; margin-top: .4mm; }
.frasi td { padding: .9mm 1mm .9mm 0; }
.frasi .ar { font-weight: 700; font-style: italic; }
.frasi .scritto { font-style: normal; font-weight: 400; color: #4A4640; font-family: "Hiragino Sans", "Sinhala Sangam MN", "Noto Sans Sinhala", sans-serif; }
.giorno-fino { font-size: 22pt; }
.giorno-titolo { flex: 1; min-width: 0; }
.giorno-sito { flex: none; text-align: center; }
.giorno-sito p { margin: .5mm 0 0; font-size: 5.6pt; color: #8a847b; text-transform: uppercase; letter-spacing: .06em; }
.qr-griglia { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm 5mm; margin-top: 3mm; }
.qr-voce { break-inside: avoid; font-size: 7.4pt; }
.qr-voce p { margin: 1mm 0 0; }

/* Fonti */
.elenco-fonti { font-size: 6.4pt; padding-left: 5mm; margin: 0; columns: 1; }
.elenco-fonti li { margin-bottom: .6mm; break-inside: avoid; }
.colophon { margin-top: 4mm !important; border-top: 1px solid #161412; padding-top: 2mm; }
`
}
