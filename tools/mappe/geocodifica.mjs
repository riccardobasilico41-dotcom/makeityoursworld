// Geocodifica Destinazioni ed Esperienze con OpenStreetMap Nominatim e scrive
// src/content/mappe/coordinate.ts.
//
//   node tools/mappe/geocodifica.mjs --atlanti <dir con countries-10m.json e states-10m.json> --cache <file.json>
//
// Regole d'uso di Nominatim (https://operations.osmfoundation.org/policies/nominatim/):
// al massimo 1 richiesta al secondo, User-Agent descrittivo con contatto, risultati in cache
// (i rilanci non rifanno richieste già fatte). Un risultato è accettato solo se cade nella
// bbox del contorno del Paese (più un piccolo margine); per le esperienze anche se non è
// assurdamente lontano dalla sua destinazione. Le lat/lng già verificate a mano nelle
// tappe dei viaggi (TappaMappa) vincono su Nominatim.
import fs from 'node:fs'
import path from 'node:path'
import { caricaContenuti } from './carica-contenuti.mjs'
import { MAPPE } from './config.mjs'
import { QUERY } from './query.mjs'
import { caricaAtlanti, geometriaPaese } from './topo.mjs'

const arg = (k, d) => {
  const i = process.argv.indexOf(k)
  return i > 0 ? process.argv[i + 1] : d
}
const ATLANTI = arg('--atlanti')
const CACHE = arg('--cache')
if (!ATLANTI || !CACHE) {
  console.error('Uso: node tools/mappe/geocodifica.mjs --atlanti <dir> --cache <file.json>')
  process.exit(1)
}
const UA = 'MakeItYoursWorld-map/1.0 (riccardobasilico41@gmail.com)'

const cache = fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, 'utf8')) : {}
const salvaCache = () => fs.writeFileSync(CACHE, JSON.stringify(cache, null, 1))
let ultima = 0
const attendi = (ms) => new Promise((r) => setTimeout(r, ms))

async function nominatim(q, cc, bbox) {
  const [a, b, c, d] = bbox
  const params = new URLSearchParams({
    format: 'jsonv2', q, countrycodes: cc, limit: '1', viewbox: `${a},${d},${c},${b}`, bounded: '1',
  })
  const url = `https://nominatim.openstreetmap.org/search?${params}`
  if (url in cache) return cache[url]
  const ora = Date.now()
  if (ora - ultima < 1100) await attendi(1100 - (ora - ultima))
  ultima = Date.now()
  for (let tentativo = 0; tentativo < 3; tentativo++) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': UA, 'Accept-Language': 'it,en' } })
      if (r.status === 429 || r.status >= 500) { await attendi(5000); continue }
      const j = await r.json()
      const top = j[0] ? { lat: +j[0].lat, lng: +j[0].lon, nome: j[0].display_name } : null
      cache[url] = top
      salvaCache()
      return top
    } catch {
      await attendi(3000)
    }
  }
  return null
}

const ARTICOLI = /^(?:(?:il|la|le|lo|gli|i)\s+|l')/i
const pezzi = (s) =>
  s
    .split(/\s*(?:[,:;()\/]|\s—\s|\s–\s|\s-\s|\se\s|\sed\s|\so\s)\s*/)
    .map((x) => x.replace(ARTICOLI, '').trim())
    .filter((x) => x.length > 2 && !/\d+\s*(km|minuti|ore|h)\b|ovunque|tutt[aoie]|diffus|vari\b|circa/i.test(x))

const km = ([la1, lo1], [la2, lo2]) => {
  const r = Math.PI / 180
  const a = Math.sin(((la2 - la1) * r) / 2) ** 2 + Math.cos(la1 * r) * Math.cos(la2 * r) * Math.sin(((lo2 - lo1) * r) / 2) ** 2
  return 12742 * Math.asin(Math.sqrt(a))
}

const { ROOT, paesi, destinazioni, esperienze, tappe } = await caricaContenuti()
const atlanti = caricaAtlanti(ATLANTI)
const coordD = {}
const coordE = {}
const report = []
const revisione = []

for (const p of paesi) {
  const cfg = MAPPE[p.slug]
  if (!cfg) { report.push({ paese: p.slug, errore: 'manca in config.mjs' }); continue }
  const { bbox } = geometriaPaese(cfg, atlanti)
  const m = Math.max(0.15, 0.03 * Math.max(bbox[2] - bbox[0], bbox[3] - bbox[1]))
  const box = [bbox[0] - m, bbox[1] - m, bbox[2] + m, bbox[3] + m]
  const dentro = ([la, lo]) => lo >= box[0] && lo <= box[2] && la >= box[1] && la <= box[3]
  const diagKm = km([box[1], box[0]], [box[3], box[2]])
  const fuori = []

  // vicino: coordinate della destinazione dell'esperienza, per scartare omonimi lontani
  // (solo per le query ricavate in automatico: quelle scritte a mano in query.mjs sono fidate)
  const prova = async (query, vicino) => {
    for (const q of query) {
      const r = await nominatim(q, cfg.cc, box)
      if (!r) continue
      const ll = [+r.lat.toFixed(5), +r.lng.toFixed(5)]
      if (!dentro(ll)) continue
      if (vicino && km(ll, vicino) > Math.max(60, diagKm * 0.2)) continue
      return { ll, q, nome: r.nome }
    }
    return null
  }

  const ds = destinazioni.filter((d) => d.paeseSlug === p.slug)
  for (const d of ds) {
    const k = `${p.slug}/${d.slug}`
    const manuale = tappe.find((t) => t.paese === p.slug && t.destinazioneSlug === d.slug)
    if (manuale) { coordD[k] = [manuale.lat, manuale.lng]; revisione.push(`D ${k}  ←  TappaMappa (${manuale.nome})`); continue }
    const o = QUERY[k]
    if (o === null) { fuori.push(`D ${d.slug} (tema, nessun luogo)`); continue }
    const query = o ? [o].flat() : [...pezzi(d.nome), d.nome]
    const r = await prova([...new Set(query)])
    if (r) { coordD[k] = r.ll; revisione.push(`D ${k}  ←  «${r.q}» = ${r.nome}`) }
    else fuori.push(`D ${d.slug} (nessun risultato per: ${query.join(' | ')})`)
  }

  const es = esperienze.filter((e) => e.paeseSlug === p.slug)
  for (const e of es) {
    const k = `${p.slug}/${e.slug}`
    const o = QUERY[`${p.slug}/esperienza:${e.slug}`]
    const dest = coordD[`${p.slug}/${e.destinazioneSlug}`]
    if (o === false) { fuori.push(`E ${e.slug} (diffusa: ${e.localita})`); continue }
    if (o === null) {
      if (dest) { coordE[k] = dest; revisione.push(`E ${k}  ←  = destinazione ${e.destinazioneSlug}`) }
      else fuori.push(`E ${e.slug} (destinazione ${e.destinazioneSlug} senza coordinate)`)
      continue
    }
    const query = o ? [o].flat() : [...pezzi(e.localita), e.nome]
    const r = await prova([...new Set(query)], o ? null : dest)
    if (r) { coordE[k] = r.ll; revisione.push(`E ${k}  ←  «${r.q}» = ${r.nome}`) }
    else if (dest) { coordE[k] = dest; revisione.push(`E ${k}  ←  = destinazione ${e.destinazioneSlug} (nessun risultato: ${query.join(' | ')})`) }
    else fuori.push(`E ${e.slug} (nessun risultato per: ${query.join(' | ')})`)
  }

  const nd = ds.filter((d) => coordD[`${p.slug}/${d.slug}`]).length
  const ne = es.filter((e) => coordE[`${p.slug}/${e.slug}`]).length
  report.push({ paese: p.slug, d: `${nd}/${ds.length}`, e: `${ne}/${es.length}`, fuori })
  console.error(`${p.slug}: D ${nd}/${ds.length}  E ${ne}/${es.length}`)
}

const fmt = (o) =>
  '{\n' + Object.keys(o).sort().map((k) => `  '${k}': [${o[k][0]}, ${o[k][1]}],`).join('\n') + '\n}'
const ts = `// GENERATO da tools/mappe/geocodifica.mjs — non modificare a mano: correggi
// tools/mappe/query.mjs (o le lat/lng delle TappaMappa) e rilancia lo script.
//
// Coordinate [lat, lng] da OpenStreetMap Nominatim, © OpenStreetMap contributors,
// dati disponibili con licenza ODbL (https://www.openstreetmap.org/copyright).
// Le tappe con lat/lng verificate a mano nei viaggi-dati hanno la precedenza.
// Chiave: 'paese/slug'.

export const coordinateDestinazioni: Record<string, [number, number]> = ${fmt(coordD)}

export const coordinateEsperienze: Record<string, [number, number]> = ${fmt(coordE)}
`
fs.mkdirSync(path.join(ROOT, 'src/content/mappe'), { recursive: true })
fs.writeFileSync(path.join(ROOT, 'src/content/mappe/coordinate.ts'), ts)
fs.writeFileSync(CACHE.replace(/\.json$/, '') + '-revisione.txt', revisione.join('\n') + '\n')

console.log('\nCOPERTURA (destinazioni / esperienze con coordinate)')
let td = 0, te = 0, nd = 0, ne = 0
for (const r of report) {
  if (r.errore) { console.log(`${r.paese}: ${r.errore}`); continue }
  console.log(`${r.paese.padEnd(22)} D ${r.d.padEnd(6)} E ${r.e}`)
  for (const f of r.fuori) console.log(`    fuori: ${f}`)
  const [a, b] = r.d.split('/').map(Number), [c, d] = r.e.split('/').map(Number)
  nd += a; td += b; ne += c; te += d
}
console.log(`\nTOTALE  destinazioni ${nd}/${td}  esperienze ${ne}/${te}`)
