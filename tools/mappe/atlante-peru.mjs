// Strati «da atlante» della mappa del Perù (versione di prova, solo Perù):
//   src/content/mappe/peru-atlante.json  = Paesi vicini, fiumi, laghi, etichette
//   public/images/mappe/peru-rilievo.webp = rilievo ombreggiato ritagliato e riproiettato
//
//   node tools/mappe/atlante-peru.mjs --dati <dir>
//
// <dir> deve contenere (Natural Earth, pubblico dominio):
//   ne_50m_admin_0_countries.geojson, ne_10m_rivers_lake_centerlines.geojson,
//   ne_50m_lakes.geojson  (github.com/nvkelso/natural-earth-vector, cartella geojson)
//   SR_50M.tif            (naciscdn.org/naturalearth/50m/raster/SR_50M.zip, 1:50m shaded relief)
// Usa la stessa proiezione di src/content/mappe/peru.json, così tutto combacia col contorno.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const i = process.argv.indexOf('--dati')
const DATI = i > 0 ? process.argv[i + 1] : null
if (!DATI) {
  console.error('Uso: node tools/mappe/atlante-peru.mjs --dati <dir>')
  process.exit(1)
}

const base = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/content/mappe/peru.json'), 'utf8'))
const { lng0, y0, s, ox, oy } = base.proiezione
const W = base.w, H = base.h
const mercY = (lat) => (Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360)) * 180) / Math.PI
const mercLat = (y) => (Math.atan(Math.exp((y * Math.PI) / 180)) * 360) / Math.PI - 90
const P = ([lng, lat]) => [ox + (lng - lng0) * s, oy + (y0 - mercY(lat)) * s]
const n = (v) => { const r = Math.round(v * 10) / 10; return Number.isInteger(r) ? String(r) : r.toFixed(1) }
const leggi = (f) => JSON.parse(fs.readFileSync(path.join(DATI, f), 'utf8'))

function dp(pts, tol) {
  if (pts.length < 3) return pts
  const keep = new Uint8Array(pts.length)
  keep[0] = keep[pts.length - 1] = 1
  const stack = [[0, pts.length - 1]]
  while (stack.length) {
    const [a, b] = stack.pop()
    const [ax, ay] = pts[a], [bx, by] = pts[b]
    const dx = bx - ax, dy = by - ay, L = Math.hypot(dx, dy) || 1e-9
    let md = -1, mi = -1
    for (let k = a + 1; k < b; k++) {
      const d = Math.abs(dy * pts[k][0] - dx * pts[k][1] + bx * ay - by * ax) / L
      if (d > md) { md = d; mi = k }
    }
    if (md > tol) { keep[mi] = 1; stack.push([a, mi], [mi, b]) }
  }
  return pts.filter((_, k) => keep[k])
}

/** DP su anello chiuso: spezza nel punto più lontano dal primo (come contorni.mjs). */
function semplificaAnello(r, tol) {
  let far = 0, fd = -1
  for (let k = 1; k < r.length; k++) {
    const d = (r[k][0] - r[0][0]) ** 2 + (r[k][1] - r[0][1]) ** 2
    if (d > fd) { fd = d; far = k }
  }
  const a = dp(r.slice(0, far + 1), tol), b = dp([...r.slice(far), r[0]], tol)
  return [...a.slice(0, -1), ...b.slice(0, -1)]
}

// ritaglio Sutherland–Hodgman al rettangolo della mappa (con margine)
const M = 40
function ritaglia(anello) {
  const lati = [
    (p) => p[0] >= -M, (p) => p[0] <= W + M, (p) => p[1] >= -M, (p) => p[1] <= H + M,
  ]
  const tagli = [
    (a, b) => { const t = (-M - a[0]) / (b[0] - a[0]); return [-M, a[1] + t * (b[1] - a[1])] },
    (a, b) => { const t = (W + M - a[0]) / (b[0] - a[0]); return [W + M, a[1] + t * (b[1] - a[1])] },
    (a, b) => { const t = (-M - a[1]) / (b[1] - a[1]); return [a[0] + t * (b[0] - a[0]), -M] },
    (a, b) => { const t = (H + M - a[1]) / (b[1] - a[1]); return [a[0] + t * (b[0] - a[0]), H + M] },
  ]
  let r = anello
  for (let l = 0; l < 4 && r.length; l++) {
    const out = []
    for (let k = 0; k < r.length; k++) {
      const a = r[k], b = r[(k + 1) % r.length]
      const ia = lati[l](a), ib = lati[l](b)
      if (ia) out.push(a)
      if (ia !== ib) out.push(tagli[l](a, b))
    }
    r = out
  }
  return r
}

const anelloD = (r) => 'M' + r.map(([x, y]) => `${n(x)} ${n(y)}`).join(' ') + 'Z'
const lineaD = (r) => 'M' + r.map(([x, y]) => `${n(x)} ${n(y)}`).join(' ')
const poligoni = (g) => (g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : [])
const linee = (g) => (g.type === 'LineString' ? [g.coordinates] : g.type === 'MultiLineString' ? g.coordinates : [])

// ── Paesi vicini (1:50m, stessa fonte del contorno del Perù) ──
const VICINI = { Ecuador: 'ecuador', Colombia: 'colombia', Brazil: 'brasile', Bolivia: 'bolivia', Chile: 'cile' }
const paesi = leggi('ne_50m_admin_0_countries.geojson')
const vicini = []
for (const f of paesi.features) {
  const chiave = VICINI[f.properties.ADMIN]
  if (!chiave) continue
  const parti = []
  for (const poly of poligoni(f.geometry)) {
    const r = ritaglia(poly[0].map(P))
    if (r.length < 3) continue
    const sr = semplificaAnello(r, 0.8)
    if (sr.length >= 3) parti.push(anelloD(sr))
  }
  if (parti.length) vicini.push({ id: chiave, path: parti.join('') })
}

// ── Fiumi principali (1:10m semplificati) ──
const FIUMI = {
  Amazonas: { id: 'amazzoni', peso: 3 },
  Ucayali: { id: 'ucayali', peso: 2 },
  'Marañón': { id: 'maranon', peso: 2 },
  Huallaga: { id: 'huallaga', peso: 1 },
  Napo: { id: 'napo', peso: 1 },
  Putumayo: { id: 'putumayo', peso: 1 },
  'Madre de Dios': { id: 'madre-de-dios', peso: 1 },
  Tambo: { id: 'tambo', peso: 1 },
  Javari: { id: 'javari', peso: 1 },
}
const fiumiGeo = leggi('ne_10m_rivers_lake_centerlines.geojson')
const fiumi = new Map()
for (const f of fiumiGeo.features) {
  const cfg = FIUMI[f.properties.name]
  if (!cfg || !f.geometry) continue
  for (const l of linee(f.geometry)) {
    const px = l.map(P)
    // spezza dove esce dalla mappa
    let tratto = []
    const chiudi = () => {
      if (tratto.length > 1) {
        const sr = dp(tratto, 1.1)
        const voce = fiumi.get(cfg.id) ?? { id: cfg.id, peso: cfg.peso, path: '' }
        voce.path += lineaD(sr)
        fiumi.set(cfg.id, voce)
      }
      tratto = []
    }
    for (const p of px) {
      if (p[0] > -M && p[0] < W + M && p[1] > -M && p[1] < H + M) tratto.push(p)
      else chiudi()
    }
    chiudi()
  }
}

// ── Laghi (1:50m) ──
const laghiGeo = leggi('ne_50m_lakes.geojson')
const laghi = []
for (const f of laghiGeo.features) {
  if (f.properties.name !== 'Lago Titicaca') continue
  for (const poly of poligoni(f.geometry)) {
    const sr = semplificaAnello(poly[0].map(P).slice(0, -1), 0.5)
    laghi.push({ id: 'titicaca', path: anelloD(sr) })
  }
}

// ── Etichette fisse (lat, lng scelti a mano; ruota in gradi) ──
const ETICHETTE = [
  { id: 'ecuador', tipo: 'paese', at: [-1.6, -78.6] },
  { id: 'colombia', tipo: 'paese', at: [0.0, -72.4] },
  { id: 'brasile', tipo: 'paese', at: [-8.6, -69.2] },
  { id: 'bolivia', tipo: 'paese', at: [-16.4, -67.9] },
  { id: 'cile', tipo: 'paese', at: [-18.6, -69.0] },
  { id: 'pacifico', tipo: 'mare', at: [-11.0, -81.0] },
  { id: 'amazzoni', tipo: 'fiume', at: [-3.55, -71.6], ruota: -8 },
  { id: 'ucayali', tipo: 'fiume', at: [-8.1, -74.6], ruota: -70 },
  { id: 'maranon', tipo: 'fiume', at: [-5.1, -76.4], ruota: -32 },
  { id: 'titicaca', tipo: 'lago', at: [-16.5, -69.0] },
]
const etichette = ETICHETTE.map((e) => {
  const [x, y] = P([e.at[1], e.at[0]])
  return { ...e, at: undefined, x: +x.toFixed(1), y: +y.toFixed(1) }
}).map(({ at, ...e }) => e)

// ── Rilievo ombreggiato: riproiettato in Mercatore sul viewBox della mappa ──
const OUT_W = 760, OUT_H = Math.round((OUT_W * H) / W)
const tif = path.join(DATI, 'SR_50M.tif')
const meta = await sharp(tif, { limitInputPixels: false }).metadata()
const passo = 360 / meta.width // gradi per pixel (equirettangolare, -180..180 / 90..-90)
const lngA = lng0 - ox / s, lngB = lng0 + (W - ox) / s
const latN = mercLat(y0 + oy / s), latS = mercLat(y0 - (H - oy) / s)
const c0 = Math.max(0, Math.floor((lngA + 180) / passo) - 2), c1 = Math.min(meta.width - 1, Math.ceil((lngB + 180) / passo) + 2)
const r0 = Math.max(0, Math.floor((90 - latN) / passo) - 2), r1 = Math.min(meta.height - 1, Math.ceil((90 - latS) / passo) + 2)
const cw = c1 - c0 + 1, ch = r1 - r0 + 1
const src = await sharp(tif, { limitInputPixels: false })
  .extract({ left: c0, top: r0, width: cw, height: ch })
  .extractChannel(0)
  .raw()
  .toBuffer()
const campiona = (fx, fy) => {
  const x0 = Math.max(0, Math.min(cw - 2, Math.floor(fx))), y0_ = Math.max(0, Math.min(ch - 2, Math.floor(fy)))
  const tx = Math.min(1, Math.max(0, fx - x0)), ty = Math.min(1, Math.max(0, fy - y0_))
  const a = src[y0_ * cw + x0], b = src[y0_ * cw + x0 + 1], c = src[(y0_ + 1) * cw + x0], d = src[(y0_ + 1) * cw + x0 + 1]
  return (a * (1 - tx) + b * tx) * (1 - ty) + (c * (1 - tx) + d * tx) * ty
}
const grezzo = new Float32Array(OUT_W * OUT_H)
for (let py = 0; py < OUT_H; py++) {
  const vy = ((py + 0.5) / OUT_H) * H
  const lat = mercLat(y0 - (vy - oy) / s)
  const fy = (90 - lat) / passo - 0.5 - r0
  for (let pxx = 0; pxx < OUT_W; pxx++) {
    const vx = ((pxx + 0.5) / OUT_W) * W
    const lng = lng0 + (vx - ox) / s
    grezzo[py * OUT_W + pxx] = campiona((lng + 180) / passo - 0.5 - c0, fy)
  }
}
// il valore della pianura (moda) diventa carta; le ombre virano in seppia, le luci un filo più chiare
const isto = new Uint32Array(256)
for (const v of grezzo) isto[Math.round(v)]++
let moda = 0
for (let k = 1; k < 256; k++) if (isto[k] > isto[moda]) moda = k
const CARTA = [244, 238, 227], SEPPIA = [92, 74, 56], LUCE = [251, 248, 240]
const rgb = Buffer.alloc(OUT_W * OUT_H * 3)
for (let k = 0; k < grezzo.length; k++) {
  const v = grezzo[k]
  let col
  if (v <= moda) {
    const t = Math.pow(Math.min(1, (moda - v) / (moda * 0.75)), 0.85)
    col = CARTA.map((c, j) => c + (SEPPIA[j] - c) * t)
  } else {
    const t = Math.min(1, (v - moda) / (255 - moda)) * 0.8
    col = CARTA.map((c, j) => c + (LUCE[j] - c) * t)
  }
  rgb[k * 3] = col[0]; rgb[k * 3 + 1] = col[1]; rgb[k * 3 + 2] = col[2]
}
const outImg = path.join(ROOT, 'public/images/mappe/peru-rilievo.webp')
fs.mkdirSync(path.dirname(outImg), { recursive: true })
await sharp(rgb, { raw: { width: OUT_W, height: OUT_H, channels: 3 } })
  .sharpen({ sigma: 0.8 })
  .webp({ quality: 72, effort: 6 })
  .toFile(outImg)

const out = {
  fonte: 'Natural Earth 1:50m (Paesi, laghi, rilievo SR_50M) e 1:10m (fiumi), pubblico dominio',
  rilievo: { src: '/images/mappe/peru-rilievo.webp', x: 0, y: 0, w: W, h: H },
  vicini,
  fiumi: [...fiumi.values()],
  laghi,
  etichette,
}
const outJson = path.join(ROOT, 'src/content/mappe/peru-atlante.json')
fs.writeFileSync(outJson, JSON.stringify(out))
console.log('json', fs.statSync(outJson).size, 'byte · webp', fs.statSync(outImg).size, 'byte · moda rilievo', moda)
console.log('vicini', vicini.map((v) => `${v.id}:${v.path.length}`).join(' '))
console.log('fiumi', [...fiumi.values()].map((v) => `${v.id}:${v.path.length}`).join(' '))
