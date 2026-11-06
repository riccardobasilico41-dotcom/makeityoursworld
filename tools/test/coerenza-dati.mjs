#!/usr/bin/env node
// Coerenza dei dati sulle pagine servite (en, it, es):
//  1. nessuna frase che nega un viaggio («non l'ha fatto Rick», «not done by Rick», «no lo hizo», «mai visitat», «never visited»…);
//  2. nessun segnaposto di contatto («da inserire», «to be added», example.com, your@…, mailto vuoti);
//  3. conteggi di viaggi e Paesi uguali tra home, archivio, destinazioni, chi sono e aree (stessa fonte);
//  4. nessuna destinazione orfana: ogni /destinazioni/<paese>/<slug> della sitemap ha la pagina del Paese
//     nella sitemap e quella pagina la linka.
// Il testo si legge dall'HTML visibile (script e style tolti, tag rimossi).
// Uso: node tools/test/coerenza-dati.mjs [--base=URL] [--paralleli=10] [--json=file]
import { writeFileSync } from 'node:fs'
import { BASE, inParallelo, linguaDi, percorsiSitemap, riepilogo, scarica } from './i18n-comune.mjs'

const paralleli = Number(process.argv.find((a) => a.startsWith('--paralleli='))?.slice(12) || 10)
const fileJson = process.argv.find((a) => a.startsWith('--json='))?.slice(7)

const NEGAZIONI = [
  /non l['’]ha fatto Rick/i, /non l['’]ho fatt[oa] io/i, /not done by Rick/i, /no lo hizo/i, /mai visitat/i, /never visited/i,
  /non ci sono (ancora )?stat[oa]/i, /destinazione non visitata/i, /itinerario (ipotetico|teorico|mai effettuato)/i,
  /hypothetical itinerary/i, /itinerario hipot[eé]tico/i, /solo ricerca/i, /not (yet )?been there/i, /haven['’]t been (there )?yet/i,
  /no he estado/i, /todav[ií]a no he estado/i, /never been there/i, /no la hice yo/i, /I didn['’]t do (this|that) (part|one)( myself)?/i,
]
// «quasi nessuno ha mai visitato» parla degli altri viaggiatori, non di Rick
const NEGAZIONI_ESCLUSE = [/nessuno ha mai visitat/i, /nobody has ever visited/i, /nadie ha visitado/i]
// segnaposto di contatto: tra parentesi quadre, o accanto a email/contatto/telefono (non «taxes to be added»)
const SEGNAPOSTO = [
  /\[[^\]]{0,30}(da inserire|to be added|por (a[nñ]adir|insertar))[^\]]{0,10}\]/i,
  /(e-?mail|contatt\w*|contact\w*|telefono|phone|tel[eé]fono|indirizzo|address|direcci[oó]n)\W{0,3}(da inserire|to be added|por (a[nñ]adir|insertar))/i,
  /example\.com/i, /your@/i, /tu@email/i, /\[email/i, /tuo@/i,
]
// frasi note, rimaste per decisione in sospeso di Rick (docs/ux/report-autenticita-periodi.md, «Da chiedere a Rick» 4 e 5):
// si segnalano come avvisi, non come errori
const IN_SOSPESO = [
  [/non l['’]ho fatt[oa] io|no la hice yo|I didn['’]t do (this|that) (part|one)/i, 'Churchill (Canada): frase di Rick, da confermare'],
  [/(non ci sono ancora stato|todav[ií]a no he estado|haven['’]t been (there )?yet)/i, 'scheda senza viaggio: decisione di Rick'],
  [/con loro non ci sono stato|con ellos no he estado|haven['’]t been with them/i, 'Amazzonia: riferito agli operatori, non al viaggio'],
]
const avvisi = []

const testoVisibile = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')

const pagine = await percorsiSitemap()
console.log(`BASE ${BASE} · ${pagine.length} pagine`)
const errori = []
const html = new Map()

await inParallelo(pagine, paralleli, async (p) => {
  const r = await scarica(p)
  if (r.status !== 200) { errori.push({ percorso: p, problemi: [`HTTP ${r.status}`] }); return }
  const t = testoVisibile(r.testo)
  const problemi = []
  for (const re of NEGAZIONI) {
    for (const m of t.matchAll(new RegExp(re.source, 'gi'))) {
      const contesto = t.slice(Math.max(0, m.index - 60), m.index + 80).trim()
      if (NEGAZIONI_ESCLUSE.some((x) => x.test(contesto))) continue
      const sospeso = IN_SOSPESO.find(([x]) => x.test(contesto))
      if (sospeso) { avvisi.push({ percorso: p, motivo: sospeso[1], contesto }); continue }
      problemi.push(`negazione: «${contesto}»`)
    }
  }
  for (const re of SEGNAPOSTO) { const m = t.match(re); if (m) problemi.push(`segnaposto: «${t.slice(Math.max(0, m.index - 40), m.index + 60).trim()}»`) }
  if (/href="mailto:\s*"|href="tel:\s*"/.test(r.testo)) problemi.push('mailto/tel vuoto')
  if (problemi.length) { errori.push({ percorso: p, problemi }); console.log(`  ✗ ${p}: ${problemi.join(' | ')}`) }
  if (/^\/(it\/|es\/)?(destinazioni|destinations|destinos)\/[^/]+$/.test(p) || /^\/(it\/|es\/)?(viaggi|trips|viajes|destinazioni|destinations|destinos|chi-sono|about|sobre-mi|aree|regions|regiones)(\/[^/]+)?$/.test(p) || /^\/(it|es)?$/.test(p) || p === '/')
    html.set(p, { raw: r.testo, testo: t })
})

// 3. conteggi
const NUM = {
  it: { viaggi: /(\d+)\s+viaggi\b/gi, paesi: /(\d+)\s+Paesi\b/g },
  en: { viaggi: /(\d+)\s+trips\b/gi, paesi: /(\d+)\s+countries\b/gi },
  es: { viaggi: /(\d+)\s+viajes\b/gi, paesi: /(\d+)\s+pa[ií]ses\b/gi },
}
const HOME = { it: '/it', en: '/', es: '/es' }
const ARCHIVIO = { it: '/it/viaggi', en: '/trips', es: '/es/viajes' }
const DEST = { it: '/it/destinazioni', en: '/destinations', es: '/es/destinos' }
const conteggi = {}
for (const l of ['it', 'en', 'es']) {
  const leggi = (p) => {
    const h = html.get(p)
    if (!h) return null
    return {
      viaggi: [...h.testo.matchAll(NUM[l].viaggi)].map((m) => Number(m[1])),
      paesi: [...h.testo.matchAll(NUM[l].paesi)].map((m) => Number(m[1])),
    }
  }
  const home = leggi(HOME[l]); const arch = leggi(ARCHIVIO[l]); const dest = leggi(DEST[l])
  conteggi[l] = { home, archivio: arch, destinazioni: dest }
  const max = (a) => (a && a.length ? Math.max(...a) : null)
  const totViaggi = new Set([max(home?.viaggi), max(arch?.viaggi)].filter((x) => x !== null))
  const totPaesi = new Set([max(home?.paesi), max(dest?.paesi)].filter((x) => x !== null))
  const problemi = []
  if (totViaggi.size > 1) problemi.push(`totale viaggi diverso tra home e archivio: ${[...totViaggi].join(' / ')}`)
  if (totViaggi.size === 0) problemi.push('totale viaggi non trovato in home e archivio')
  if (totPaesi.size > 1) problemi.push(`totale Paesi diverso tra home e destinazioni: ${[...totPaesi].join(' / ')}`)
  if (totPaesi.size === 0) problemi.push('totale Paesi non trovato in home e destinazioni')
  // nessun numero di viaggi più grande del totale in qualsiasi pagina indice
  const tv = max([...totViaggi])
  for (const [p, h] of html) {
    if (linguaDi(p) !== l) continue
    for (const m of h.testo.matchAll(NUM[l].viaggi)) if (tv !== null && Number(m[1]) > tv) problemi.push(`${p}: «${m[0]}» supera il totale ${tv}`)
  }
  conteggi[l].totali = { viaggi: [...totViaggi], paesi: [...totPaesi] }
  console.log(`  ${l}: viaggi ${[...totViaggi].join('/') || '—'} · Paesi ${[...totPaesi].join('/') || '—'}`)
  if (problemi.length) { errori.push({ percorso: `conteggi ${l}`, problemi }); console.log(`  ✗ conteggi ${l}: ${problemi.join(' | ')}`) }
}
const tutti = new Set(['it', 'en', 'es'].map((l) => JSON.stringify(conteggi[l].totali)))
if (tutti.size > 1) errori.push({ percorso: 'conteggi tra lingue', problemi: [[...tutti].join(' ≠ ')] })

// 4. destinazioni orfane
const insieme = new Set(pagine)
let nDest = 0
for (const p of pagine) {
  const m = p.match(/^(\/(?:it|es))?\/(destinazioni|destinations|destinos)\/([^/]+)\/([^/]+)$/)
  if (!m) continue
  nDest++
  const padre = `${m[1] || ''}/${m[2]}/${m[3]}`
  if (!insieme.has(padre)) { errori.push({ percorso: p, problemi: [`Paese ${padre} assente dalla sitemap`] }); continue }
  let h = html.get(padre)
  if (!h) { const r = await scarica(padre); h = { raw: r.testo } ; html.set(padre, h) }
  if (!h.raw.includes(`href="${p}"`)) errori.push({ percorso: p, problemi: [`non linkata dalla pagina del Paese ${padre}`] })
}
console.log(`  destinazioni controllate per orfani: ${nDest}`)

const avvisiUnici = [...new Map(avvisi.map((a) => [a.percorso + a.motivo, a])).values()]
console.log(`Avvisi (frasi in sospeso, decisione di Rick): ${avvisiUnici.length} pagine`)
for (const a of avvisiUnici) console.log(`  ! ${a.percorso}: ${a.motivo} — «${a.contesto.slice(0, 120)}»`)
if (fileJson) writeFileSync(fileJson, JSON.stringify({ base: BASE, pagine: pagine.length, conteggi, errori, avvisi: avvisiUnici }, null, 2))
process.exit(riepilogo('Coerenza dati', errori, pagine.length + nDest + 3))
